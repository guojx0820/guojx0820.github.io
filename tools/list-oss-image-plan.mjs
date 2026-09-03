#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const slug = process.argv[2]

if (!slug) {
  console.error('Usage: node tools/list-oss-image-plan.mjs <post-image-slug>')
  console.error('Example: node tools/list-oss-image-plan.mjs llm-transformer-rag')
  process.exit(1)
}

const repoRoot = process.cwd()
const localDir = path.join(repoRoot, 'source', 'images', 'posts', slug)
const ossPrefix = `https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/${slug}/`

if (!fs.existsSync(localDir)) {
  console.error(`Local image directory not found: ${localDir}`)
  process.exit(1)
}

const files = fs.readdirSync(localDir)
  .filter((name) => fs.statSync(path.join(localDir, name)).isFile())
  .sort((a, b) => a.localeCompare(b))

if (files.length === 0) {
  console.error(`No image files found in: ${localDir}`)
  process.exit(1)
}

console.log(`Local directory: ${localDir}`)
console.log(`OSS target path: ImgHost/posts/${slug}/`)
console.log('')

for (const file of files) {
  const localPath = `source/images/posts/${slug}/${file}`
  const ossUrl = ossPrefix + encodeURIComponent(file)
  console.log(`${localPath}`)
  console.log(`  -> ${ossUrl}`)
}
