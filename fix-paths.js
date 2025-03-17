const fs = require('fs');
const path = require('path');

// Directory containing the static export
const outDir = path.join(__dirname, 'out');

// Function to recursively find all HTML files
function findHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findHtmlFiles(filePath, fileList);
    } else if (path.extname(file) === '.html') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Find all HTML files
const htmlFiles = findHtmlFiles(outDir);

// Process each HTML file
htmlFiles.forEach(filePath => {
  console.log(`Processing ${filePath}`);
  
  // Read the file content
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace all instances of /mia99maixu.github.io/ with /
  content = content.replace(/\/mia99maixu\.github\.io\//g, '/');
  
  // Write the modified content back to the file
  fs.writeFileSync(filePath, content);
});

console.log(`Processed ${htmlFiles.length} HTML files`);