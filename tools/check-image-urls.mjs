#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'

const repoRoot = process.cwd()
const strict = process.argv.includes('--strict')
const files = await fg([
  'source/_posts/**/*.md',
  'source/**/*.md',
  '_config.yml',
  '_config.butterfly.yml'
], {
  cwd: repoRoot,
  onlyFiles: true,
  absolute: true,
  ignore: ['node_modules/**', 'public/**']
})

const imagePattern = /(?:!\[[^\]]*]\(([^)]+)\)|cover:\s*['"]?([^'"\r\n]+)|top_img:\s*['"]?([^'"\r\n]+)|img:\s*['"]?([^'"\r\n]+))/g
const urls = new Map()

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8')
  for (const match of text.matchAll(imagePattern)) {
    const raw = (match[1] || match[2] || match[3] || match[4] || '').trim()
    if (!raw || raw.startsWith('data:')) continue
    if (!/\.(png|jpe?g|gif|webp|svg|ico)(?:[?#].*)?$/i.test(raw)) continue

    const rel = path.relative(repoRoot, file).replaceAll(path.sep, '/')
    if (!urls.has(raw)) urls.set(raw, [])
    urls.get(raw).push(rel)
  }
}

let hasError = false

async function checkRemote(url) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 12000)
  try {
    let response = await fetch(url, { method: 'HEAD', signal: controller.signal })
    if (response.status === 405 || response.status === 403) {
      response = await fetch(url, { method: 'GET', signal: controller.signal })
    }
    return { ok: response.ok, status: response.status }
  } catch (error) {
    return { ok: false, status: error.name || error.message }
  } finally {
    clearTimeout(timer)
  }
}

for (const [url, refs] of [...urls.entries()].sort(([a], [b]) => a.localeCompare(b))) {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    const result = await checkRemote(url)
    console.log(`${result.ok ? 'OK  ' : strict ? 'ERR ' : 'WARN'} ${result.status} ${url}`)
    if (!result.ok) {
      console.log(`    referenced by: ${refs.slice(0, 3).join(', ')}${refs.length > 3 ? ' ...' : ''}`)
      hasError = true
    }
    continue
  }

  if (url.startsWith('/')) {
    const localPath = path.join(repoRoot, 'source', url)
    const exists = fs.existsSync(localPath)
    console.log(`${exists ? 'OK  ' : strict ? 'ERR ' : 'WARN'} local ${url}`)
    if (!exists) {
      console.log(`    expected: ${localPath}`)
      console.log(`    referenced by: ${refs.slice(0, 3).join(', ')}${refs.length > 3 ? ' ...' : ''}`)
      hasError = true
    }
    continue
  }
}

if (hasError) {
  console.log('')
  console.log(strict
    ? 'Image check failed in strict mode.'
    : 'Image check finished with warnings. Re-run with --strict if you want warnings to fail CI.')
  if (strict) process.exit(1)
}
