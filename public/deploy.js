// deploy.js
const fs = require('fs');

// Ensure index.html is copied to a folder Pages will recognize
fs.mkdirSync('./_output', { recursive: true });
fs.copyFileSync('index.html', './_output/index.html');

console.log('Static files ready for deployment');