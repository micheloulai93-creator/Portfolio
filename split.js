const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');

const cut = (start, end, includeEnd = true) => {
  const i = src.indexOf(start);
  if (i < 0) throw new Error('Marqueur introuvable : ' + start);
  const j = src.indexOf(end, i + start.length);
  if (j < 0) throw new Error('Marqueur introuvable : ' + end);
  return src.slice(i, includeEnd ? j + end.length : j);
};

const parts = {
  navbar:       cut('<!--HEADER START-->', '<!--HEADER END-->'),
  header:       cut('<!--INTRODUCTION SECTION START-->', '<!--INTRODUCTION SECTION END-->'),
  about:        cut('<!--ABOUT SECTION START-->', '<!--ABOUT SECTION END-->'),
  stats:        cut('<!--FACTS SECTION START-->', '<!--FACTS SECTION END-->'),
  skills:       cut('<!--SERVICES SECTION START-->', '<!--Video Section END-->'),
  portfolio:    cut('<!--PORTFOLIO SECTION START-->', '<!--PROJECT Section END-->'),
  experiences:  cut('<!--RESUME SECTION START-->', '<!--CLIENT SECTION START-->', false),
  testimonials: cut('<!--CLIENT SECTION START-->', '<!--CLIENT SECTION END-->'),
  blog:         cut('<!--BLOG SECTION START-->', '<!--CONTACT SECTION START-->', false),
  contact:      cut('<!--CONTACT SECTION START-->', '<!-- /CONTACT SECTION END-->'),
  footer:       cut('<footer', '</footer>') + '\n' +
                cut('<!--To Top Link START-->', '<!--To Top Link END-->'),
};

for (const [name, html] of Object.entries(parts)) {
  const file = `src/app/components/${name}/${name}.html`;
  fs.writeFileSync(file, html.replace(/@/g, '&#64;'));
  console.log('écrit :', file);
}