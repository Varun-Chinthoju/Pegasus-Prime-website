// prerender.js — runs after `vite build` to generate static HTML for each route.
// Usage: node prerender.js
// Requires: vite build --ssr src/entry-server.jsx to have run first.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

// Routes to pre-render. Update this list when new routes are added.
const routes = ['/', '/team', '/robot', '/build', '/code', '/sponsors', '/news'];

// Read the built SSR module and the index.html template
const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

for (const url of routes) {
  const { html: appHtml, helmet } = render(url);

  // Inject head tags from react-helmet-async
  const headTags = helmet
    ? [
        helmet.title?.toString() ?? '',
        helmet.meta?.toString() ?? '',
        helmet.link?.toString() ?? '',
      ].join('\n    ')
    : '';

  const finalHtml = template
    .replace('<!--ssr-head-->', headTags)
    .replace('<!--ssr-outlet-->', appHtml);

  // Write to correct output path
  const filePath = url === '/' ? '/index.html' : `${url}/index.html`;
  const outputPath = toAbsolute(`dist${filePath}`);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, finalHtml);
  console.log(`✔ Pre-rendered: ${filePath}`);
}

console.log('\nPre-rendering complete. Static HTML files written to dist/.');
