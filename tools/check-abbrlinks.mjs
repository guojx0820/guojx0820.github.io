import fg from 'fast-glob';
import matter from 'gray-matter';
import { readFileSync } from 'node:fs';

const files = await fg(['source/_posts/*.md'], { cwd: process.cwd(), onlyFiles: true });
const seen = new Map();
let failed = false;

for (const file of files.sort()) {
  const { data } = matter(readFileSync(file, 'utf8'));
  if (!data.abbrlink) {
    failed = true;
    console.error(`[abbrlink] Missing abbrlink: ${file}`);
    continue;
  }
  const key = String(data.abbrlink).toLowerCase();
  if (seen.has(key)) {
    failed = true;
    console.error(`[abbrlink] Duplicate ${key}: ${seen.get(key)} and ${file}`);
  } else {
    seen.set(key, file);
  }
}

if (failed) {
  process.exit(1);
}

console.log(`Abbrlink check passed for ${files.length} posts.`);
