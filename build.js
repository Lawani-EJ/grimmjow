import fs from 'fs-extra';
import { marked } from 'marked'; // ✅ Use ES Modules

// async function build() {
//   const markdown = await fs.readFile('./content/index.md', 'utf-8');

//   const html = marked(markdown);

//   await fs.ensureDir('./dist');

//   await fs.writeFile('./dist/index.html', html);

//   console.log('Site built successfully!');
// }

// build();

async function build() {
    // Read the Markdown file
    const markdown = await fs.readFile('./content/index.md', 'utf-8');
 
    // Convert Markdown to HTML
    const content = marked(markdown);
 
    // Read the HTML template
    const template = await fs.readFile('./template.html', 'utf-8');
 
    // Insert the content into the template
    const finalHtml = template.replace('{{ content }}', content);
 
    // Write the HTML file to the output directory
    await fs.ensureDir('./dist');
    await fs.writeFile('./dist/index.html', finalHtml);
 
    console.log('Site built successfully!');
  }
 
  build();
 