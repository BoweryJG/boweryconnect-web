const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/HomePage.tsx',
  'src/pages/AboutPage.tsx', 
  'src/pages/FeaturesPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/components/Footer.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the broken Grid syntax
  content = content.replace(/item xs=\{ xs: 12\}/g, 'item xs={12}');
  content = content.replace(/md=\{ xs: 12\}/g, '');
  content = content.replace(/ item xs=\{ xs: 12\}/g, '');
  
  // Fix Grid items with multiple size props
  content = content.replace(/<Grid item xs=\{6\} md=\{(\d+)\}/g, '<Grid item xs={6} md={$1}');
  content = content.replace(/<Grid item xs=\{12\} md=\{(\d+)\}/g, '<Grid item xs={12} md={$1}');
  content = content.replace(/<Grid item xs=\{12\} sm=\{(\d+)\}/g, '<Grid item xs={12} sm={$1}');
  
  // Fix ContactPage specific issue
  content = content.replace(/<Grid container>/g, '<Grid item xs={12}>');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

console.log('All files fixed!');