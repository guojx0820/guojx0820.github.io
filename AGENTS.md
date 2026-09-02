# AGENTS.md

This repository is the Hexo source for https://www.guojxblog.cn.

## Safety

- Never commit secrets, access tokens, OSS AccessKey values, PicGo configs, `.env` files, or credentialed remotes.
- Never copy files from `D:\Projects\Blog\LuoMuBlog\.git` into this repository.
- The old source history contains a leaked GitHub token. Treat it as compromised and do not push that history.
- Do not change existing `abbrlink` values unless the user explicitly asks to break old URLs.
- Publish only when the user explicitly asks to publish or push.

## Blog Stack

- Use Node.js 24 LTS or any Node version supported by `package.json`.
- Install with `npm ci`.
- Build with `npm run build`.
- Run the full local gate with `npm run check`.
- The GitHub Pages production site is built from `main` by `.github/workflows/pages.yml`.

## Writing Rules

- Posts live in `source/_posts/`.
- Use Chinese for normal posts unless the user asks otherwise.
- Prefer clear, professional technical prose with concrete examples.
- Keep front matter fields consistent:
  - `title`
  - `tags`
  - `description`
  - `cover`
  - `categories`
  - `abbrlink`
  - `date`
  - `mathjax: true` only when formulas are used
- Use stable local or OSS image paths. Article image folders should follow `source/images/posts/<english-slug>/`.
- For external technical claims, prefer original papers, official docs, or primary project repositories.
- For LLM/OpenAI/Codex facts, use official OpenAI documentation before writing.

## Image Workflow

- Public OSS prefix: `https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/`.
- Article OSS target convention: `ImgHost/posts/<english-slug>/`.
- Keep local originals under `source/images/posts/<english-slug>/` even when the Markdown later references OSS URLs.
- Use `npm run check:secrets` before committing after any image or config workflow.

## Codex Workflow

- Before editing, inspect the current git status and relevant files.
- After changing posts, configs, assets, or workflow files, run `npm run check`.
- For visual changes, preview locally and inspect desktop and mobile layouts.
- Summarize changed files, validation result, and any remaining publish steps.
