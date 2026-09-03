# AGENTS.md

This repository is the Hexo source for https://www.guojxblog.cn.

## Safety

- Never commit secrets, access tokens, OSS AccessKey values, PicGo configs, `.env` files, or credentialed remotes.
- Never copy files from `D:\Projects\Blog\LuoMuBlog\.git` into this repository.
- The old source history contains a leaked GitHub token. Treat it as compromised and do not push that history.
- Do not change existing `abbrlink` values unless the user explicitly asks to break old URLs.
- Publish only when the user explicitly asks to publish or push.
- Do not redesign or modernize the blog's visual style. Preserve the old Butterfly visual identity: left aside, large background image, translucent cards, original iconfont socials, announcement card, Live2D, click hearts, and legacy custom CSS.
- Any UI/theme/beautification change requires explicit user approval before implementation. Compatibility fixes are allowed only when they keep the old visual result.
- Do not change post ordering, `sticky`, dates, categories, tags, or article content merely to match old screenshots. These are content decisions, not theme-style fixes.
- Do not upgrade `hexo-theme-butterfly` or replace the theme architecture unless the user explicitly asks for a separate experimental upgrade. The production line intentionally preserves Butterfly 4.1.0.

## Blog Stack

- Use Node.js 20 LTS when possible, or any Node version supported by `package.json`.
- Keep the theme conservative: Butterfly 4.1.0 is an intentional compatibility pin for the old customized visual style.
- Hexo and renderer packages may be updated only when local build and visual preview confirm the old Butterfly 4 appearance is preserved.
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
- Drafts may use local `/images/posts/<english-slug>/...` paths for preview, but production posts should prefer OSS URLs after the user uploads images to Aliyun OSS.
- Use `npm run images:oss-plan -- <english-slug>` to produce a safe upload/URL mapping. Do not require or store Aliyun credentials unless the user explicitly provides a secure method.
- Use `npm run images:check` to distinguish broken OSS URLs from lazyload/browser/display issues.
- Use `npm run check:secrets` before committing after any image or config workflow.

## Codex Workflow

- Before editing, inspect the current git status and relevant files.
- After changing posts, configs, assets, or workflow files, run `npm run check`.
- For visual changes, preview locally and inspect desktop and mobile layouts.
- For local preview, prefer `npm run server` and open `http://127.0.0.1:4001/`; port 4000 may be occupied by Windows desktop software on this machine.
- Summarize changed files, validation result, and any remaining publish steps.
