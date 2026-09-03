#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'

const [postFileArg, slug] = process.argv.slice(2)

if (!postFileArg || !slug) {
  console.error('Usage: node tools/replace-post-images-with-oss.mjs <post-md-file> <post-image-slug>')
  console.error('Example: node tools/replace-post-images-with-oss.mjs "source/_posts/从-Transformer-到大语言模型：预训练、对齐、LoRA、RAG-与推理优化.md" llm-transformer-rag')
  process.exit(1)
}

const repoRoot = process.cwd()
const postPath = path.resolve(repoRoot, postFileArg)
const postDir = path.resolve(repoRoot, 'source', '_posts')
const localPrefix = `/images/posts/${slug}/`
const ossPrefix = `https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/${slug}/`

if (!postPath.startsWith(postDir + path.sep)) {
  console.error(`Refusing to edit outside source/_posts: ${postPath}`)
  process.exit(1)
}

if (!fs.existsSync(postPath)) {
  console.error(`Post file not found: ${postPath}`)
  process.exit(1)
}

const original = fs.readFileSync(postPath, 'utf8')
const updated = original.replaceAll(localPrefix, ossPrefix)

if (updated === original) {
  console.log(`No local image references found for ${localPrefix}`)
  process.exit(0)
}

fs.writeFileSync(postPath, updated)

const count = original.split(localPrefix).length - 1
console.log(`Replaced ${count} image reference(s):`)
console.log(`  ${localPrefix}`)
console.log(`  -> ${ossPrefix}`)
console.log('')
console.log(`Updated: ${postPath}`)
