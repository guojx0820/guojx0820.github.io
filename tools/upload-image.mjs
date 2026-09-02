import { spawnSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

const input = process.argv[2];
if (!input) {
  console.error('Usage: node scripts/upload-image.mjs <image-path>');
  process.exit(1);
}

const allowed = new Set(['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']);
const filePath = path.resolve(input);
const ext = path.extname(filePath).toLowerCase();

if (!existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}
if (!allowed.has(ext)) {
  console.error(`Unsupported image type: ${ext}`);
  process.exit(1);
}
const size = statSync(filePath).size;
if (size > 10 * 1024 * 1024) {
  console.error('Image is larger than 10 MB. Compress it before upload.');
  process.exit(1);
}

const args = ['picgo', 'upload', filePath];
const result = spawnSync('npx', args, {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

process.exit(result.status ?? 1);
