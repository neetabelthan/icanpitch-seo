const fs = require('fs');
const path = require('path');

function findUnclosedTags(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  const stack = [];
  const listTags = ['ul', 'ol'];

  lines.forEach((line, index) => {
    // Find all opening and closing ul/ol tags
    const lineNum = index + 1;

    // Find opening tags
    const openMatches = line.match(/<(ul|ol)>/g) || [];
    openMatches.forEach(() => {
      const tag = openMatches[0].match(/<(ul|ol)>/)[1];
      stack.push({ tag, line: lineNum, content: line.trim().substring(0, 80) });
    });

    // Find closing tags
    const closeMatches = line.match(/<\/(ul|ol)>/g) || [];
    closeMatches.forEach((match) => {
      const tag = match.match(/<\/(ul|ol)>/)[1];
      if (stack.length > 0 && stack[stack.length - 1].tag === tag) {
        stack.pop();
      } else {
        console.log(`EXTRA CLOSING TAG at line ${lineNum}: </${tag}>`);
        console.log(`  ${line.trim()}`);
      }
    });
  });

  if (stack.length > 0) {
    console.log(`\nUNCLOSED TAGS:`);
    stack.forEach(item => {
      console.log(`  <${item.tag}> opened at line ${item.line}`);
      console.log(`    ${item.content}...`);
    });
  } else {
    console.log('All tags properly closed!');
  }
}

console.log('=== exit-calculator-silicon-valley ===');
findUnclosedTags('content/blog/exit-calculator-silicon-valley/content.html');

console.log('\n=== pro-rata-calculator-new-york ===');
findUnclosedTags('content/blog/pro-rata-calculator-new-york/content.html');
