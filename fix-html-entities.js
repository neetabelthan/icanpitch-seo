const fs = require('fs');
const path = require('path');

// Function to escape > and < in text nodes only, not in HTML tags
function escapeTextContent(html) {
  // Split on HTML tags to process text separately from tags
  const parts = html.split(/(<[^>]+>)/);

  return parts.map((part, index) => {
    // Even indices are text, odd indices are tags
    if (index % 2 === 0) {
      // This is text content - escape > and <
      return part
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;');
    } else {
      // This is an HTML tag - leave it alone
      return part;
    }
  }).join('');
}

// Get all content.html files
const blogDir = path.join(__dirname, 'content', 'blog');
const folders = fs.readdirSync(blogDir);

let fixed = 0;

folders.forEach(folder => {
  const contentPath = path.join(blogDir, folder, 'content.html');

  if (fs.existsSync(contentPath)) {
    try {
      const original = fs.readFileSync(contentPath, 'utf8');
      const fixed_content = escapeTextContent(original);

      // Only write if content changed
      if (fixed_content !== original) {
        fs.writeFileSync(contentPath, fixed_content, 'utf8');
        console.log(`Fixed: ${folder}`);
        fixed++;
      }
    } catch (err) {
      console.error(`Error processing ${folder}:`, err.message);
    }
  }
});

console.log(`\nTotal files fixed: ${fixed}`);
