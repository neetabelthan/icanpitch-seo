#!/bin/bash

# Comprehensive Blog Post QA Script
# Validates HTML, metadata, content quality, and file structure

BLOG_DIR="/Users/nischalbelthangady/icanpitch-seo/content/blog"
REPORT_FILE="/Users/nischalbelthangady/icanpitch-seo/qa_report.txt"

# Initialize counters
total_posts=0
html_errors=0
metadata_errors=0
file_structure_errors=0
content_quality_errors=0
passing_posts=0

# Initialize arrays for tracking issues
declare -a html_error_posts
declare -a metadata_error_posts
declare -a file_structure_error_posts
declare -a content_quality_error_posts
declare -a passing_posts_list

# Clear/create report file
echo "==================================" > "$REPORT_FILE"
echo "BLOG POST QA REPORT" >> "$REPORT_FILE"
echo "Generated: $(date)" >> "$REPORT_FILE"
echo "==================================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Function to check HTML tags
check_html() {
    local file="$1"
    local slug="$2"
    local has_error=0

    # Disallowed tags
    local disallowed_tags=("section" "article" "table" "div" "tbody" "tr" "td" "span")

    for tag in "${disallowed_tags[@]}"; do
        if grep -nE "</?${tag}[> ]" "$file" > /dev/null 2>&1; then
            echo "  [$slug] HTML ERROR: Disallowed tag <$tag> found" >> "$REPORT_FILE"
            grep -nE "</?${tag}[> ]" "$file" | head -5 | while read line; do
                echo "    Line: $line" >> "$REPORT_FILE"
            done
            has_error=1
        fi
    done

    # Check for properly closed tags (basic validation)
    local allowed_tags=("h2" "h3" "p" "ul" "ol" "li" "strong" "a")
    for tag in "${allowed_tags[@]}"; do
        local open_count=$(grep -o "<${tag}[> ]" "$file" 2>/dev/null | wc -l | tr -d ' ')
        local close_count=$(grep -o "</${tag}>" "$file" 2>/dev/null | wc -l | tr -d ' ')
        if [ "$open_count" != "$close_count" ]; then
            echo "  [$slug] HTML ERROR: Mismatched <$tag> tags (open: $open_count, close: $close_count)" >> "$REPORT_FILE"
            has_error=1
        fi
    done

    return $has_error
}

# Function to check metadata
check_metadata() {
    local file="$1"
    local slug="$2"
    local folder_slug="$3"
    local has_error=0

    # Check if file exists and is valid JSON
    if ! jq empty "$file" 2>/dev/null; then
        echo "  [$slug] METADATA ERROR: Invalid JSON format" >> "$REPORT_FILE"
        return 1
    fi

    # Check required fields
    local required_fields=("pageType" "slug" "title" "description" "date" "categories" "tags" "readingTime")
    for field in "${required_fields[@]}"; do
        if ! jq -e ".$field" "$file" > /dev/null 2>&1; then
            echo "  [$slug] METADATA ERROR: Missing required field '$field'" >> "$REPORT_FILE"
            has_error=1
        fi
    done

    # Check slug matches folder name
    local json_slug=$(jq -r '.slug' "$file" 2>/dev/null)
    if [ "$json_slug" != "$folder_slug" ]; then
        echo "  [$slug] METADATA ERROR: Slug mismatch (folder: $folder_slug, json: $json_slug)" >> "$REPORT_FILE"
        has_error=1
    fi

    # Check for unexpected extra fields (beyond standard ones)
    local all_keys=$(jq -r 'keys[]' "$file" 2>/dev/null)
    local expected_fields="pageType slug title description date categories tags readingTime"
    while read -r key; do
        if ! echo "$expected_fields" | grep -w "$key" > /dev/null; then
            echo "  [$slug] METADATA WARNING: Unexpected field '$key'" >> "$REPORT_FILE"
        fi
    done <<< "$all_keys"

    return $has_error
}

# Function to check content quality
check_content_quality() {
    local file="$1"
    local slug="$2"
    local has_error=0

    # Word count (3,500-4,500 words)
    local word_count=$(wc -w < "$file" | tr -d ' ')
    if [ "$word_count" -lt 3500 ] || [ "$word_count" -gt 4500 ]; then
        echo "  [$slug] CONTENT QUALITY ERROR: Word count out of range ($word_count words, expected 3,500-4,500)" >> "$REPORT_FILE"
        has_error=1
    fi

    # Check for external links with proper attributes
    if grep -E '<a href="http' "$file" > /dev/null 2>&1; then
        if grep -E '<a href="http' "$file" | grep -v 'target="_blank"' > /dev/null 2>&1; then
            echo "  [$slug] CONTENT QUALITY ERROR: External links missing target=\"_blank\"" >> "$REPORT_FILE"
            grep -n -E '<a href="http' "$file" | grep -v 'target="_blank"' | head -3 >> "$REPORT_FILE"
            has_error=1
        fi
        if grep -E '<a href="http' "$file" | grep -v 'rel="noopener noreferrer"' > /dev/null 2>&1; then
            echo "  [$slug] CONTENT QUALITY ERROR: External links missing rel=\"noopener noreferrer\"" >> "$REPORT_FILE"
            has_error=1
        fi
    fi

    return $has_error
}

# Function to check file structure
check_file_structure() {
    local post_dir="$1"
    local slug="$2"
    local has_error=0

    # Check for required files
    if [ ! -f "$post_dir/metadata.json" ]; then
        echo "  [$slug] FILE STRUCTURE ERROR: Missing metadata.json" >> "$REPORT_FILE"
        has_error=1
    fi

    if [ ! -f "$post_dir/content.html" ]; then
        echo "  [$slug] FILE STRUCTURE ERROR: Missing content.html" >> "$REPORT_FILE"
        has_error=1
    fi

    # Check for unexpected files
    local file_count=$(find "$post_dir" -maxdepth 1 -type f | wc -l | tr -d ' ')
    if [ "$file_count" -ne 2 ]; then
        echo "  [$slug] FILE STRUCTURE ERROR: Expected 2 files, found $file_count" >> "$REPORT_FILE"
        find "$post_dir" -maxdepth 1 -type f -exec basename {} \; | while read fname; do
            echo "    - $fname" >> "$REPORT_FILE"
        done
        has_error=1
    fi

    # Check for disallowed files
    for disallowed in "page.mdx" "index.html" "README.md"; do
        if [ -f "$post_dir/$disallowed" ]; then
            echo "  [$slug] FILE STRUCTURE ERROR: Disallowed file found: $disallowed" >> "$REPORT_FILE"
            has_error=1
        fi
    done

    return $has_error
}

echo "DETAILED ERRORS BY POST:" >> "$REPORT_FILE"
echo "=========================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Main validation loop
for post_dir in "$BLOG_DIR"/*; do
    if [ -d "$post_dir" ]; then
        total_posts=$((total_posts + 1))
        slug=$(basename "$post_dir")

        echo "Checking: $slug" >> "$REPORT_FILE"

        post_has_error=0

        # 1. File Structure Check
        if ! check_file_structure "$post_dir" "$slug"; then
            file_structure_errors=$((file_structure_errors + 1))
            file_structure_error_posts+=("$slug")
            post_has_error=1
        fi

        # 2. Metadata Check
        if [ -f "$post_dir/metadata.json" ]; then
            if ! check_metadata "$post_dir/metadata.json" "$slug" "$slug"; then
                metadata_errors=$((metadata_errors + 1))
                metadata_error_posts+=("$slug")
                post_has_error=1
            fi
        fi

        # 3. HTML Check
        if [ -f "$post_dir/content.html" ]; then
            if ! check_html "$post_dir/content.html" "$slug"; then
                html_errors=$((html_errors + 1))
                html_error_posts+=("$slug")
                post_has_error=1
            fi

            # 4. Content Quality Check
            if ! check_content_quality "$post_dir/content.html" "$slug"; then
                content_quality_errors=$((content_quality_errors + 1))
                content_quality_error_posts+=("$slug")
                post_has_error=1
            fi
        fi

        if [ $post_has_error -eq 0 ]; then
            passing_posts=$((passing_posts + 1))
            passing_posts_list+=("$slug")
            echo "  ✓ PASS - All checks passed" >> "$REPORT_FILE"
        fi

        echo "" >> "$REPORT_FILE"
    fi
done

# Generate summary
echo "" >> "$REPORT_FILE"
echo "==================================" >> "$REPORT_FILE"
echo "SUMMARY REPORT" >> "$REPORT_FILE"
echo "==================================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "Total posts analyzed: $total_posts/28" >> "$REPORT_FILE"
echo "Posts passing all checks: $passing_posts/$total_posts" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo "ERRORS BY CATEGORY:" >> "$REPORT_FILE"
echo "-------------------" >> "$REPORT_FILE"
echo "Posts with HTML errors: $html_errors" >> "$REPORT_FILE"
if [ ${#html_error_posts[@]} -gt 0 ]; then
    for post in "${html_error_posts[@]}"; do
        echo "  - $post" >> "$REPORT_FILE"
    done
fi
echo "" >> "$REPORT_FILE"
echo "Posts with metadata errors: $metadata_errors" >> "$REPORT_FILE"
if [ ${#metadata_error_posts[@]} -gt 0 ]; then
    for post in "${metadata_error_posts[@]}"; do
        echo "  - $post" >> "$REPORT_FILE"
    done
fi
echo "" >> "$REPORT_FILE"
echo "Posts with file structure errors: $file_structure_errors" >> "$REPORT_FILE"
if [ ${#file_structure_error_posts[@]} -gt 0 ]; then
    for post in "${file_structure_error_posts[@]}"; do
        echo "  - $post" >> "$REPORT_FILE"
    done
fi
echo "" >> "$REPORT_FILE"
echo "Posts with content quality errors: $content_quality_errors" >> "$REPORT_FILE"
if [ ${#content_quality_error_posts[@]} -gt 0 ]; then
    for post in "${content_quality_error_posts[@]}"; do
        echo "  - $post" >> "$REPORT_FILE"
    done
fi
echo "" >> "$REPORT_FILE"
echo "POSTS PASSING ALL CHECKS:" >> "$REPORT_FILE"
echo "-------------------------" >> "$REPORT_FILE"
if [ ${#passing_posts_list[@]} -gt 0 ]; then
    for post in "${passing_posts_list[@]}"; do
        echo "  ✓ $post" >> "$REPORT_FILE"
    done
else
    echo "  None" >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"
echo "==================================" >> "$REPORT_FILE"
echo "QA CHECK COMPLETE" >> "$REPORT_FILE"
echo "==================================" >> "$REPORT_FILE"

# Print summary to console
echo "QA Report generated: $REPORT_FILE"
echo ""
echo "SUMMARY:"
echo "Total posts analyzed: $total_posts/28"
echo "Posts passing all checks: $passing_posts/$total_posts"
echo "Posts with errors: $((total_posts - passing_posts))/$total_posts"
