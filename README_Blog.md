# Windows 11 博客维护手册

这个目录是 `www.guojxblog.cn` 的新 Hexo 源码工程。旧目录 `D:\Projects\Blog\LuoMuBlog` 只作为迁移来源和离线备份，不再作为日常开发目录。

## 一、当前架构

- 源码目录：`D:\Projects\Blog\guojx0820.github.io`
- 旧源码备份：`D:\Projects\Blog\_migration_backup_20260902-170134`
- 博客框架：Hexo `8.1.2`
- 主题：Butterfly `5.7.0`
- Node：建议 `24.x LTS`，最低按 `package.json` 要求为 `>=20.19.0`
- 生产域名：`https://www.guojxblog.cn`
- GitHub Pages 仓库：`https://github.com/guojx0820/guojx0820.github.io`
- 源码分支：`main`
- 旧静态发布分支：`master`，暂时保留作为回滚点

发布方式已经改成：本机修改源码，推送 `main`，GitHub Actions 自动构建并发布 Pages。以后不再使用旧 `_config.yml` 里的 `hexo deploy`，也不再把任何 Token 写入配置文件。

## 二、首次环境恢复

在新电脑上进入项目目录：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
node --version
npm --version
npm ci
npm run check
```

`npm run check` 会依次执行秘密扫描、文章 `abbrlink` 检查和 Hexo 构建。只要这一条通过，说明本地环境基本健康。

## 三、GitHub 与 Pages 设置

第一次迁移发布前，需要在浏览器里完成三件事：

1. 进入 GitHub 的 token 管理页面，撤销旧项目曾经写在 `_config.yml` 里的 Personal Access Token。旧 Token 已经进入旧源码历史，必须视为泄露。
2. 在 `guojx0820.github.io` 仓库 Settings -> Pages 中，把 Source 改成 GitHub Actions。
3. 在 Pages 的 Custom domain 填入 `www.guojxblog.cn`，并开启 Enforce HTTPS。

本机 Git 登录推荐 GitHub CLI：

```powershell
winget install GitHub.cli
gh auth login
gh auth status
```

登录时选择 GitHub.com、HTTPS、browser/device code。凭据会进入 Windows 凭据管理器，不要写进 remote URL、Markdown、YAML 或脚本。

## 四、日常写文章

新建文章：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
npm run new:post -- "文章标题"
```

编辑 `source/_posts/文章标题.md`，保持 front matter 完整：

```yaml
---
title: 文章标题
tags:
  - 标签1
description: 一句话摘要
cover: /images/posts/example/cover.png
categories: 程序代码
abbrlink: fixed-url-id
date: 2026-09-02 18:00:00
---
```

写完后本地检查：

```powershell
npm run check
npm run server
```

浏览器打开 `http://localhost:4000` 预览首页、文章页、归档、标签、分类和搜索。确认无误后再发布：

```powershell
git status
git add .
git commit -m "Add article: 文章标题"
git push origin main
```

GitHub Actions 成功后，访问 `https://www.guojxblog.cn/archives/<abbrlink>.html` 验证最终页面。

## 五、图片与 PicGo

当前旧图床继续使用阿里云 OSS：

- Bucket：`luomublog`
- Region：青岛
- 公共前缀：`https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/`

建议在阿里云创建专用 RAM 用户，只允许读写 `luomublog/ImgHost/*`，不要使用主账号 AccessKey。PicGo 桌面版适合拖拽上传，项目内 PicGo-Core 适合 Codex 或命令行上传：

```powershell
npx picgo --version
node tools/upload-image.mjs .\source\images\posts\example\cover.png
```

文章图片推荐路径：

- 本地备份：`source/images/posts/<english-slug>/`
- OSS 对象：`ImgHost/posts/<english-slug>/`
- Markdown 引用：优先使用 OSS URL；未配置 OSS 时可先使用 `/images/posts/<english-slug>/xxx.png`

不要把 PicGo 配置、AccessKey、Secret、RAM 凭据提交进仓库。每次改完配置都运行：

```powershell
npm run check:secrets
```

## 六、用 Codex 写博客的提示词

草拟但不发布：

```text
请在当前 Hexo 博客中新建一篇文章，题目是《...》。要求保持现有 front matter 风格，先使用本地图片路径，不要 git commit，不要 push。写完后运行 npm run check 并告诉我预览地址。
```

续写或润色：

```text
请阅读 source/_posts/xxx.md，按我博客现有语气润色为更专业的中文技术文章，保留 abbrlink、date、分类和图片路径。改完运行 npm run check。
```

事实核验：

```text
请核验这篇文章涉及的技术结论，只使用原始论文、官方文档或项目仓库作为来源。把不确定的表述改成更谨慎的说法，并补充参考链接。
```

生成配图：

```text
请为这篇文章生成一张 16:9 封面，并用 SVG 画一张流程图。图片放在 source/images/posts/<slug>/，文章里引用本地路径。不要上传 OSS，除非我明确要求。
```

预览后发布：

```text
请检查当前修改，运行 npm run check，启动本地预览并用浏览器检查首页和文章页。确认通过后提交并推送 main。
```

回滚错误发布：

```text
请查看最近一次提交和 GitHub Actions 发布记录，给出最小回滚方案。未经我确认不要执行 reset、revert 或 force push。
```

## 七、故障排查

构建命令只显示 Hexo 帮助：检查 `package.json` 是否保留了 `"hexo": {"version": "8.1.2"}`。

Windows 安装失败：删除 `node_modules` 后重新运行 `npm ci`。不要从 macOS 复制 `node_modules`。

端口占用：运行 `npx hexo server -p 4001`。

文章 URL 变化：检查文章 front matter 中的 `abbrlink` 是否被删除或改动。

公式不显示：确认文章 front matter 有 `mathjax: true`，并且 `_config.butterfly.yml` 里 `mathjax.enable` 为 `true`。

OSS 图片 403：检查 Bucket 公共读、防盗链白名单、对象路径大小写和 RAM 权限。

Pages 没更新：查看 GitHub Actions 是否失败；查看 Settings -> Pages 是否选择 GitHub Actions；确认推送的是 `main` 分支。

自定义域名异常：确认 GitHub Pages Custom domain 是 `www.guojxblog.cn`，HTTPS 已启用；只有 GitHub 检查失败时再改阿里云 DNS。

## 八、安全与恢复

- 旧 GitHub Token 必须撤销。
- 新仓库不要保存任何 token、password、AccessKey、Secret。
- 发布前运行 `npm run check:secrets`。
- 离线恢复可使用 `D:\Projects\Blog\_migration_backup_20260902-170134`。
- 旧 `master` 分支暂时保留，可以作为迁移失败时的静态站点回滚参考。

## 九、一页速查

```powershell
cd D:\Projects\Blog\guojx0820.github.io
npm ci
npm run new:post -- "标题"
npm run check
npm run server
git status
git add .
git commit -m "Add article: 标题"
git push origin main
```
