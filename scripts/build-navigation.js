const fs = require('fs');
const path = require('path');
const fm = require('front-matter');

const pagesFolder = path.join(__dirname, '../content/pages');
const content = fs.readdirSync(pagesFolder).map(file => {
  const raw = fs.readFileSync(path.join(pagesFolder, file), 'utf8');
  const data = fm(raw);
  const title = data.attributes.title;
  const slug = file.substring(0, file.length - 3);
  return { title, slug };
});

const outputPath = path.join(__dirname, '../.build/navigation.json');
fs.writeFileSync(outputPath, JSON.stringify(content, null, 2));
