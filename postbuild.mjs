#!/usr/bin/env node
// Remove the private /seo sales page from the sitemap after build.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'dist';
const files = readdirSync(dir).filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml') && f !== 'sitemap-index.xml');
for (const f of files) {
  const p = join(dir, f);
  const xml = readFileSync(p, 'utf8').replace(/<url><loc>[^<]*\/seo\/<\/loc><\/url>/g, '');
  writeFileSync(p, xml);
}
console.log('postbuild: /seo removed from sitemap');
