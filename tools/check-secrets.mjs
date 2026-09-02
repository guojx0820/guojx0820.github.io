import fg from 'fast-glob';
import { readFileSync } from 'node:fs';

const patterns = [
  { name: 'GitHub token', re: /\b(ghp|github_pat)_[A-Za-z0-9_]{20,}\b/g },
  { name: 'Aliyun AccessKey ID', re: /\b(LTAI|STS)\w{12,}\b/g },
  { name: 'Private key', re: /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/g },
  { name: 'Credentialed URL', re: /https?:\/\/[^/\s:@]+:[^/\s:@]+@/g },
  { name: 'Generic secret assignment', re: /\b(?:access[_-]?key[_-]?secret|secret[_-]?key|password|passwd|token)\s*[:=]\s*['"]?[A-Za-z0-9+/_=-]{16,}/gi }
];

const files = await fg(['**/*'], {
  cwd: process.cwd(),
  dot: true,
  onlyFiles: true,
  ignore: [
    '.git/**',
    'node_modules/**',
    'public/**',
    '.deploy_git/**',
    'package-lock.json',
    'README_Blog.md'
  ]
});

let failed = false;
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const pattern of patterns) {
    const matches = [...text.matchAll(pattern.re)];
    if (matches.length) {
      failed = true;
      console.error(`[secret] ${pattern.name}: ${file}`);
    }
  }
}

if (failed) {
  console.error('Secret-like content was found. Remove it before committing or publishing.');
  process.exit(1);
}

console.log(`Secret scan passed for ${files.length} files.`);
