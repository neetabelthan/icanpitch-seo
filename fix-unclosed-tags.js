const fs = require('fs');
const path = require('path');

// Files with unclosed tags
const files = [
  'content/blog/exit-calculator-silicon-valley/content.html',
  'content/blog/pro-rata-calculator-new-york/content.html'
];

files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');

  console.log(`\nChecking: ${filePath}`);

  // Count tags
  const ulOpen = (content.match(/<ul>/g) || []).length;
  const ulClose = (content.match(/<\/ul>/g) || []).length;
  const olOpen = (content.match(/<ol>/g) || []).length;
  const olClose = (content.match(/<\/ol>/g) || []).length;

  console.log(`<ul>: ${ulOpen}, </ul>: ${ulClose}`);
  console.log(`<ol>: ${olOpen}, </ol>: ${olClose}`);

  // Add missing closing tags at the end
  if (ulOpen > ulClose) {
    const missing = ulOpen - ulClose;
    console.log(`Adding ${missing} missing </ul> tags`);
    for (let i = 0; i < missing; i++) {
      content += '\n</ul>';
    }
  }

  if (olOpen > olClose) {
    const missing = olOpen - olClose;
    console.log(`Adding ${missing} missing </ol> tags`);
    for (let i = 0; i < missing; i++) {
      content += '\n</ol>';
    }
  }

  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed: ${filePath}`);
});

console.log('\nDone!');
