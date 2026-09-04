# Windows 11 博客维护手册

这个目录是 `www.guojxblog.cn` 的新 Hexo 源码工程。旧目录 `D:\Projects\Blog\LuoMuBlog` 只作为迁移来源和离线备份，不再作为日常开发目录。

## 一、当前架构

- 源码目录：`D:\Projects\Blog\guojx0820.github.io`
- 旧源码备份：`D:\Projects\Blog\_migration_backup_20260902-170134`
- 博客框架：Hexo `8.1.2`
- 主题：Butterfly `4.1.0`
- Node：建议 `20.x LTS`；最低按 `package.json` 要求为 `>=18.18.0`
- 生产域名：`https://www.guojxblog.cn`
- GitHub Pages 仓库：`https://github.com/guojx0820/guojx0820.github.io`
- 源码分支：`main`
- 旧静态发布分支：`master`，暂时保留作为回滚点

当前采用“保守迁移”方案：完整沿用旧站已经魔改好的 Butterfly 4 视觉体系，只把 Hexo、部分渲染器和本机 Windows/Codex 写作维护流程更新到当前电脑可稳定运行的版本。以后不主动升级主题、不重做 UI、不重新美化；除非你明确同意，否则 Codex 只能改文章、图片、文档、发布脚本和必要兼容修复。

发布方式已经改成：本机修改源码，推送 `main`，GitHub Actions 自动构建并发布 Pages。以后不再使用旧 `_config.yml` 里的 `hexo deploy`，也不再把任何 Token 写入配置文件。

### 为什么不升级主题

这个博客的主题和美化经过长期魔改，旧主题结构、配置项、CSS 选择器、文章卡片布局、Live2D、iconfont 社交图标、半透明卡片和背景遮罩已经互相耦合。升级到 Butterfly 5/更新主题后，虽然依赖更“新”，但会改变 DOM 结构和配置语义，导致旧 CSS 大量失效，需要重新魔改，很容易出现图片、卡片透明层、侧栏、滚动文字、图标风格不一致的问题。

因此本仓库的稳定策略是：

1. 主题锁定为 `hexo-theme-butterfly@4.1.0`，不升级到 Butterfly 5。
2. Hexo 可使用较新的 `8.1.2`，因为测试确认它能驱动旧 Butterfly 4 正常生成静态站点。
3. 只做最小兼容修复，例如固定 `hexo-log@3.2.0`，避免旧主题脚本在新 Node/npm 环境下报错。
4. 不恢复旧的 `hexo deploy`、Gitee、Coding.net、带 Token 的远程地址。
5. 如需未来升级主题，先复制一份新分支/新任务单独测试，不能直接在主线替换。

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

### 必须先进入项目目录

PowerShell 打开后默认目录通常是 `C:\Users\Leo`，这个目录不是博客项目目录，里面没有 `package.json`。如果在这里直接运行：

```powershell
npm run check
```

会看到类似错误：

```text
npm error code ENOENT
npm error path C:\Users\Leo\package.json
npm error enoent Could not read package.json
```

这不是博客坏了，也不是 npm 坏了，只是当前目录不对。每次维护博客、预览博客、提交博客前，都先执行：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
npm run check
```

如果不确定自己当前在哪个目录，可以运行：

```powershell
pwd
dir package.json
```

只有 `pwd` 显示 `D:\Projects\Blog\guojx0820.github.io`，并且 `dir package.json` 能看到项目文件时，后续 `npm run check`、`npm run server`、`git status`、`git push origin main` 才是针对这个博客项目执行。

## 三、GitHub 与 Pages 设置

第一次迁移发布前，需要在浏览器里完成三件事：

1. 进入 GitHub 的 token 管理页面，撤销旧项目曾经写在 `_config.yml` 里的 Personal Access Token。旧 Token 已经进入旧源码历史，必须视为泄露。
2. 在 `guojx0820.github.io` 仓库 Settings -> Pages 中，把 Source 改成 GitHub Actions。
3. 在 Pages 的 Custom domain 填入 `www.guojxblog.cn`，并开启 Enforce HTTPS。

### main、master 和网站为什么不一致

这个仓库现在有两个分支，它们的作用不同：

```text
main   = 新电脑上的 Hexo 源码分支，里面有 package.json、source、themes、.github/workflows 等文件
master = 旧 Mac 时代生成出来的静态网页分支，里面是 about、archives、css、js、img 等最终网页文件
```

你在 GitHub Code 页看到 `master` 仍然停留在 2023 年，这是正常现象。因为我们不再把 Hexo 生成后的 `public` 文件手动推到 `master`。新的推荐发布方式是：

```text
本机 main 源码
  -> git push origin main
  -> GitHub Actions 自动 npm ci / hexo generate
  -> Actions 把 public 发布到 GitHub Pages
  -> www.guojxblog.cn 更新
```

所以判断是否上传成功，不要只看 `master` 文件列表，而要看这三个地方：

1. GitHub 仓库 Code 页左上角分支切换到 `main`，确认能看到最新 commit。
2. GitHub 仓库 Actions 页，确认 `Deploy Hexo site to Pages` 是否绿色成功。
3. GitHub 仓库 Settings -> Pages，确认 Source 是 `GitHub Actions`，不是 `Deploy from a branch` 的 `master`。

如果 Pages 还指向 `master`，即使 `main` 已经成功推送，`www.guojxblog.cn` 也仍然会显示 2023 年旧网页。这就是“main 已更新、master 没变、网站没变”的根本原因。

本次排查的实际状态就是：

```text
origin/main   = 已更新到新提交
origin/master = 仍停留在 2023 年旧静态站点
Actions build = 成功
Actions deploy = 失败
```

这说明博客源码、依赖安装、Hexo 构建都已经没问题；最后失败在 GitHub Pages 部署环节。优先检查 Settings -> Pages 是否仍是从 `master` 分支部署。

### 在 GitHub 网页上切换 Pages 到 GitHub Actions

这一步需要你在浏览器登录 GitHub 后手动点一次：

1. 打开仓库：`https://github.com/guojx0820/guojx0820.github.io`
2. 点顶部 `Settings`。
3. 左侧找到 `Pages`。
4. 找到 `Build and deployment`。
5. `Source` 下拉框选择 `GitHub Actions`。
6. `Custom domain` 填 `www.guojxblog.cn`。
7. 勾选或等待出现 `Enforce HTTPS`。
8. 回到顶部 `Actions`。
9. 点击左侧 `Deploy Hexo site to Pages`。
10. 如果右侧有 `Run workflow`，选择 `main` 后手动运行一次。
11. 等待 workflow 变成绿色对勾。
12. 打开 `https://www.guojxblog.cn/`，按 `Ctrl + F5` 强制刷新。

可选但推荐：把 GitHub 仓库默认分支也改成 `main`。这样你每次打开 Code 页默认看到的就是源码分支，不会被旧 `master` 误导。

操作路径：

1. 仓库 `Settings`。
2. 左侧 `Branches`。
3. `Default branch` 点切换按钮。
4. 选择 `main`。
5. 确认 `Update`。

注意：这只是让 GitHub 网页默认展示 `main`，不等于 Pages 发布设置。真正决定 `www.guojxblog.cn` 是否更新的是 Settings -> Pages -> Source。

### Actions 红色失败时怎么判断

打开失败的 Actions 后，不要慌，按步骤看：

1. 点 GitHub 顶部 `Actions`。
2. 左侧点 `Deploy Hexo site to Pages`。
3. 点最新一条红色记录。
4. 页面里通常有两个 job：
   - `build`
   - `deploy`
5. 如果 `build` 是绿色，说明源码能正常构建。
6. 如果 `deploy` 是红色，通常是 Pages 设置或 Pages 权限问题。
7. 这时优先去 `Settings -> Pages`，把 Source 改成 `GitHub Actions`。
8. 改完后回到 Actions，点 `Run workflow` 手动重跑一次。

如果 `build` 失败，把失败步骤展开，常见原因如下：

```text
Install dependencies 失败 = npm ci 或 package-lock 问题
Validate source 失败    = 密钥扫描或 abbrlink 检查失败
Build 失败              = Hexo 配置、文章格式、主题兼容问题
Upload artifact 失败    = public 目录生成异常
Deploy 失败             = GitHub Pages 设置/权限问题
```

本仓库 workflow 使用 Node.js 20 LTS，与本机 README 推荐版本一致。不要随意改成过新的 Node 版本，旧 Butterfly 4 主题更适合保守稳定运行。

本机已经安装 GitHub Desktop 时，优先使用 GitHub Desktop 发布，不强制安装 GitHub CLI：

1. 打开 GitHub Desktop。
2. 菜单选择 File -> Add local repository。
3. 选择 `D:\Projects\Blog\guojx0820.github.io`。
4. 如果提示登录，按 GitHub Desktop 的浏览器登录流程登录 `guojx0820` 账号。
5. 左下角填写提交说明，例如 `Restore old blog visual style`。
6. 点击 Commit to main。
7. 点击 Push origin。

GitHub Desktop 会把凭据保存到 Windows 凭据管理器，不需要把 Token 写进任何配置文件。

如果想使用命令行，GitHub CLI 是可选工具，不是必需工具。本机之前出现过：

```powershell
gh : 无法将“gh”项识别为 cmdlet、函数、脚本文件或可运行程序的名称
```

这说明只安装了 Git/GitHub Desktop，没有安装 `gh`。先检查：

```powershell
winget --version
where.exe gh
```

如果 `winget --version` 能输出版本号，可以安装 GitHub CLI：

```powershell
winget install --id GitHub.cli -e
gh auth login
gh auth status
```

登录时选择 GitHub.com、HTTPS、browser/device code。凭据会进入 Windows 凭据管理器，不要写进 remote URL、Markdown、YAML 或脚本。

如果 `winget` 也不可用，就不要在博客项目里折腾环境变量或旧 Token。直接去 `https://cli.github.com/` 下载 Windows 安装包，或者继续使用 GitHub Desktop。

### 发布前检查与推送

每次正式推送前，建议按这个顺序执行：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
npm run check
git status
git log --oneline -3
git remote -v
git ls-remote origin
git push origin main
```

各命令含义：

1. `npm run check`：确认静态博客能生成，密钥扫描和文章链接检查通过。
2. `git status`：确认哪些文件将被提交，避免误提交临时文件。
3. `git log --oneline -3`：确认最近提交里有你要发布的内容。
4. `git remote -v`：确认远端是 `https://github.com/guojx0820/guojx0820.github.io.git` 或已配置好的 SSH 地址。
5. `git ls-remote origin`：先测试和 GitHub 的连接与证书是否正常。
6. `git push origin main`：把 `main` 分支推到 GitHub，由 GitHub Actions 自动发布 Pages。

推送后继续检查：

1. 打开 `https://github.com/guojx0820/guojx0820.github.io`。
2. 左上角分支切换到 `main`。
3. 确认最新提交说明与你刚才 commit 的说明一致。
4. 打开 Actions 页，等待 `Deploy Hexo site to Pages` 变成绿色。
5. 如果 Actions 是红色，点进去看失败日志；通常优先看 `Install dependencies`、`Validate source`、`Build`、`Deploy to GitHub Pages` 哪一步红了。
6. Actions 绿色后，再打开 `https://www.guojxblog.cn/` 和具体文章链接。

### Git 推送证书错误：SEC_E_UNTRUSTED_ROOT

如果推送时出现：

```text
fatal: unable to access 'https://github.com/guojx0820/guojx0820.github.io.git/':
schannel: SEC_E_UNTRUSTED_ROOT (0x80090325)
```

含义是：Git for Windows 当前使用 Windows 系统证书库，也就是 `schannel`，但它不信任当前 HTTPS 证书链。常见原因包括 Windows 根证书过旧、Git for Windows 版本旧、代理/校园网/杀毒软件进行 HTTPS 扫描，或者网络中间证书没有被系统信任。

如果后续又出现：

```text
fatal: unable to access 'https://github.com/...':
Recv failure: Connection was reset
```

或：

```text
Failed to connect to github.com port 443
```

说明 HTTPS 连接本身被当前网络重置或阻断。可以用下面两条命令确认：

```powershell
Test-NetConnection github.com -Port 443
Test-NetConnection github.com -Port 22
```

如果 `443` 不通但 `22` 通，优先走 SSH 发布。

安全处理顺序如下。

方案 A：优先使用 GitHub Desktop

1. 打开 GitHub Desktop。
2. File -> Add local repository。
3. 选择 `D:\Projects\Blog\guojx0820.github.io`。
4. 登录 GitHub 账号。
5. 如果左下角有未提交内容，先 Commit to main。
6. 点击 Push origin。

GitHub Desktop 通常会帮你处理登录凭据和证书链，比手动折腾 Token 更稳，也不会把 Token 写进项目文件。

方案 B：更新 Git for Windows 和系统根证书

1. 打开 Windows Update，安装系统更新，尤其是根证书相关更新。
2. 更新 Git for Windows：可以从 `https://git-scm.com/download/win` 下载最新安装包。
3. 重新打开 PowerShell，运行：

   ```powershell
   cd D:\Projects\Blog\guojx0820.github.io
   git --version
   git ls-remote origin
   git push origin main
   ```

方案 C：切换 Git TLS 后端为 OpenSSL

如果系统证书链问题暂时解决不了，可以让 Git 使用自带 OpenSSL 证书包：

```powershell
git config --global http.sslBackend openssl
cd D:\Projects\Blog\guojx0820.github.io
git ls-remote origin
git push origin main
```

如果以后想切回 Windows 证书库：

```powershell
git config --global http.sslBackend schannel
```

方案 D：改用 SSH remote

如果 HTTPS 长期被代理、杀毒软件或网络环境拦截，SSH 是更稳定的方案：

```powershell
ssh-keygen -t ed25519 -C "guojx0820 GitHub Pages" -f $env:USERPROFILE\.ssh\id_ed25519_github_pages
Get-Content $env:USERPROFILE\.ssh\id_ed25519_github_pages.pub
```

如果本机已经生成过博客专用 key，不要重复覆盖私钥，直接查看公钥：

```powershell
Get-Content $env:USERPROFILE\.ssh\id_ed25519_github_pages.pub
```

把输出的整行公钥复制到 GitHub：

1. 打开 GitHub 网页并登录 `guojx0820`。
2. 右上角头像 -> Settings。
3. 左侧 SSH and GPG keys。
4. 点击 New SSH key。
5. Title 填 `MateBook14 GitHub Pages`。
6. Key type 选择 Authentication Key。
7. Key 粘贴 `.pub` 文件里那一整行。
8. 点击 Add SSH key。

为了让 Git 自动使用这把博客专用 key，本机可创建或检查 `C:\Users\Leo\.ssh\config`：

```text
Host github.com
  HostName github.com
  User git
  IdentityFile C:\Users\Leo\.ssh\id_ed25519_github_pages
  IdentitiesOnly yes
```

添加公钥后测试：

```powershell
ssh -T git@github.com
cd D:\Projects\Blog\guojx0820.github.io
git remote set-url origin git@github.com:guojx0820/guojx0820.github.io.git
git ls-remote origin
git push origin main
```

第一次 `ssh -T git@github.com` 可能提示是否信任 GitHub 主机指纹，输入 `yes`。成功时通常会看到类似：

```text
Hi guojx0820! You've successfully authenticated, but GitHub does not provide shell access.
```

如果仍看到：

```text
git@github.com: Permission denied (publickey).
```

说明公钥还没有加到 GitHub，或者 GitHub 账号加错了 key。重新检查 `.pub` 文件内容是否完整复制。

不要使用下面这种做法：

```powershell
git config --global http.sslVerify false
```

它会关闭 SSL 证书校验，虽然有时能“临时推上去”，但会让 Git 无法确认你连接的真是 GitHub，存在中间人攻击风险。本博客维护流程禁止使用这种方式。

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

浏览器打开 `http://127.0.0.1:4001/` 预览首页、文章页、归档、标签、分类和搜索。本项目默认使用 `4001`，只是为了避开 `4000` 可能被临时服务、浏览器旧缓存或其他桌面软件影响的情况；如果你确认 `4000` 正常，也可以手动运行 `npx hexo server -p 4000 --host 127.0.0.1`。

确认无误后再发布：

```powershell
git status
git add .
git commit -m "Add article: 文章标题"
git push origin main
```

GitHub Actions 成功后，访问 `https://www.guojxblog.cn/archives/<abbrlink>.html` 验证最终页面。

### 手动发布一篇文章：完整新手流程

下面以“我要写一篇新文章”为例，完整走一遍。

第一步，进入项目目录：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
```

第二步，新建文章：

```powershell
npm run new:post -- "我的新文章标题"
```

Hexo 会在 `source/_posts/` 下生成一个 Markdown 文件。打开它，检查文件开头的 front matter：

```yaml
---
title: 我的新文章标题
tags:
  - 标签
categories: 分类
description: 一句话摘要
cover: https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/xxx/cover.jpg
abbrlink: 自动生成或固定短链接
date: 2026-09-04 20:00:00
---
```

第三步，写正文。正文就是 Markdown：

```markdown
# 一级标题

这是一段正文。

![图片说明](https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/xxx/image.png)
```

第四步，处理图片：

1. 先把图片整理到一个本地文件夹。
2. 用 PicGo 或阿里云 OSS 控制台上传到 `luomublog/ImgHost/<文章英文目录>/`。
3. 复制 OSS 公开访问地址。
4. 把 Markdown 里的图片地址替换成 OSS 地址。
5. 正式发布前尽量不要长期使用 `/images/posts/...` 这种 GitHub 本地图片路径。

第五步，本地检查：

```powershell
npm run check
```

第六步，本地预览：

```powershell
npm run server
```

浏览器打开：

```text
http://127.0.0.1:4001/
```

重点检查：

1. 首页有没有新文章。
2. 文章封面是否正常。
3. 正文图片是否正常。
4. 公式、代码块、目录是否正常。
5. 页脚红心、左侧栏、Live2D、背景是否仍保持旧站风格。

第七步，提交：

```powershell
git status
git add .
git commit -m "Add article: 我的新文章标题"
```

第八步，推送：

```powershell
git push origin main
```

第九步，看 GitHub Actions：

1. 打开仓库 Actions 页。
2. 点最新一次 `Deploy Hexo site to Pages`。
3. 等它变成绿色。
4. 如果失败，复制红色失败步骤给 Codex 分析。

第十步，看正式网站：

```text
https://www.guojxblog.cn/
https://www.guojxblog.cn/archives/<abbrlink>.html
```

如果网站十几分钟仍没变化：

1. 确认你看的是 `main` 最新 commit，不是 `master`。
2. 确认 Settings -> Pages -> Source 是 `GitHub Actions`。
3. 确认 Actions 是绿色成功。
4. 用无痕窗口打开网站。
5. 按 `Ctrl + F5` 强制刷新。

### 让 Codex 代理更新文章：推荐工作方式

Codex 可以代你写文章、改 Markdown、检查构建、提交、推送，但建议分成几个明确阶段，避免它误改主题。

阶段 1：只写草稿，不提交不推送

```text
请在当前 Hexo 博客中写一篇新文章《标题》。
要求：
1. 保持旧 Butterfly 4 主题和所有美化风格不变。
2. 只新增或修改 source/_posts 下的文章文件。
3. 图片先使用我提供的 OSS 地址；如果没有 OSS 地址，先用占位说明，不要乱找图。
4. 保留 front matter，分类为“程序代码”，标签为“深度学习、Python”。
5. 写完后运行 npm run check。
6. 不要 git commit，不要 git push。
```

阶段 2：让 Codex 帮你检查本地页面

```text
请检查刚写的新文章：
1. 运行 npm run check。
2. 启动 npm run server。
3. 打开 http://127.0.0.1:4001/ 和新文章页。
4. 检查图片、公式、代码块、目录、页脚红心是否正常。
5. 不要修改主题，不要提交，不要推送。
```

阶段 3：你确认页面满意后，让 Codex 提交

```text
本地预览我已确认满意。
请只提交本次文章相关修改：
1. 运行 git status。
2. 说明将提交哪些文件。
3. 运行 npm run check。
4. git add 本次相关文件。
5. git commit -m "Add article: 标题"。
6. 暂时不要 push，等我确认。
```

阶段 4：你确认提交无误后，让 Codex 推送

```text
可以推送到 GitHub。
请执行：
1. git push origin main。
2. 如果失败，保留错误原文并分析原因。
3. 不要改 master。
4. 不要关闭 SSL 校验。
```

阶段 5：发布失败时让 Codex 排查

```text
网站没有更新，请排查：
1. git log --oneline -5。
2. git branch -vv。
3. git remote -v。
4. 检查 .github/workflows/pages.yml。
5. 说明 GitHub Pages 应该设置为 GitHub Actions 还是 master。
6. 不要改主题，不要 force push。
```

最重要的规则：以后凡是涉及 UI、主题、卡片、背景、侧边栏、Live2D、页脚、字体、颜色、透明度的修改，都必须先明确告诉 Codex“允许改主题风格”。否则默认不允许改。

## 五、图片、阿里云 OSS 与 PicGo

当前旧图床继续使用阿里云 OSS。正式发布到 `www.guojxblog.cn` 的文章图片优先放 OSS，不建议长期依赖 GitHub Pages 直接加载大图，因为国内网络下 GitHub 静态资源可能慢或不稳定。

- Bucket：`luomublog`
- Region：青岛
- 公共前缀：`https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/`

### 推荐工作流

1. Codex 写文章时，先把图片放到本地：

   ```text
   source/images/posts/<english-slug>/
   ```

2. 本地预览时，Markdown 可以先引用本地路径：

   ```markdown
   ![](/images/posts/<english-slug>/cover.png)
   ```

3. 发布前，把该目录图片上传到阿里云 OSS：

   ```text
   ImgHost/posts/<english-slug>/
   ```

4. 上传成功后，把文章 front matter 的 `cover` 和正文图片改成 OSS URL：

   ```text
   https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/<english-slug>/cover.png
   ```

这样做的好处是：本地写作不依赖网络，正式访问不依赖 GitHub 图片加载。

### 生成 OSS 上传清单

例如新文章图片目录是 `source/images/posts/llm-transformer-rag/`，先运行：

```powershell
npm run images:oss-plan -- llm-transformer-rag
```

它会输出每个本地文件应该上传到 OSS 的目标路径，以及上传后的 URL。这个命令不会登录阿里云，也不会读取任何密钥，只用于生成清单。

新大模型文章当前应上传的 4 个文件是：

```text
source/images/posts/llm-transformer-rag/cover.png
source/images/posts/llm-transformer-rag/rag-vs-finetune.svg
source/images/posts/llm-transformer-rag/training-alignment.svg
source/images/posts/llm-transformer-rag/transformer-flow.svg
```

建议上传到：

```text
ImgHost/posts/llm-transformer-rag/
```

对应的最终 URL 形如：

```text
https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/llm-transformer-rag/cover.png
```

### 使用阿里云 OSS 控制台上传

1. 打开 OSS 控制台：`https://oss.console.aliyun.com/bucket/oss-cn-qingdao/luomublog/object?path=ImgHost%2F`
2. 进入或创建目录：

   ```text
   ImgHost/posts/<english-slug>/
   ```

3. 上传本地图片，例如：

   ```text
   D:\Projects\Blog\guojx0820.github.io\source\images\posts\llm-transformer-rag\cover.png
   ```

4. 上传后用浏览器打开最终 URL，确认能直接访问。
5. 再把文章里的 `/images/posts/...` 替换为 `https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/...`。

也可以在上传成功后用命令替换新文章里的本地图片路径：

```powershell
npm run images:oss-replace -- "source/_posts/从-Transformer-到大语言模型：预训练、对齐、LoRA、RAG-与推理优化.md" llm-transformer-rag
```

这个命令只做字符串替换：

```text
/images/posts/llm-transformer-rag/
```

替换为：

```text
https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/posts/llm-transformer-rag/
```

替换后运行：

```powershell
npm run check
npm run images:check
```

如果 `images:check` 显示新文章 OSS URL 都是 `OK 200`，再本地预览。

### 使用 PicGo 桌面版

建议在阿里云创建专用 RAM 用户，只允许读写 `luomublog/ImgHost/*`，不要使用主账号 AccessKey。日常优先使用 PicGo 桌面版拖拽上传；命令行 PicGo-Core 作为可选工具按需临时安装，不长期放在博客项目依赖里。

1. 安装 PicGo 桌面版。
2. 打开 PicGo 设置 -> 图床设置 -> 阿里云 OSS。
3. 建议填写：

   ```text
   设定 KeyId：阿里云 RAM 用户 AccessKey ID
   设定 KeySecret：阿里云 RAM 用户 AccessKey Secret
   设定 Bucket：luomublog
   设定存储区域：oss-cn-qingdao
   设定存储路径：ImgHost/posts/<english-slug>/
   设定自定义域名：https://luomublog.oss-cn-qingdao.aliyuncs.com
   ```

4. 上传前确认 PicGo 的存储路径是否是当前文章目录，例如新大模型文章用：

   ```text
   ImgHost/posts/llm-transformer-rag/
   ```

5. 拖拽图片上传后，PicGo 会复制 Markdown 或 URL。建议用 URL 形式放入文章。
6. 不要把 PicGo 配置文件提交到仓库；AccessKey 只能保存在本机 PicGo 配置里。

### 使用 PicGo-Core 或命令行

当前项目不内置 PicGo-Core 依赖，原因是 PicGo-Core 的旧依赖会带来额外 npm audit 告警。若以后需要命令行上传，可以临时执行：

```powershell
npx picgo --version
```

如果要让 Codex 自动上传，需要先提供安全的本机 PicGo 配置或临时环境变量，并单独增加上传脚本。不要把阿里云 AccessKey 写入 README、Markdown、YAML、`.env` 或 Git 历史。

文章图片推荐路径：

- 本地备份：`source/images/posts/<english-slug>/`
- OSS 对象：`ImgHost/posts/<english-slug>/`
- Markdown 引用：写作阶段可先使用 `/images/posts/<english-slug>/xxx.png`；正式发布前优先改成 OSS URL

不要把 PicGo 配置、AccessKey、Secret、RAM 凭据提交进仓库。每次改完配置都运行：

```powershell
npm run check:secrets
```

### 检查图片是否真的可访问

运行：

```powershell
npm run images:check
```

它会扫描文章和主题配置中的图片链接：

- `/images/...` 本地路径：检查 `source/images/...` 文件是否存在。
- `https://luomublog.oss-cn-qingdao.aliyuncs.com/...`：检查 OSS URL 是否能返回 200。
- 其他外链：检查是否超时、403 或 404。

如果出现 `ERR 403`，通常不是 Hexo 问题，而是 OSS 对象权限、防盗链、路径大小写或对象不存在。当前排查曾发现：

```text
https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/中国内陆Google搜索使用/YouTube.png
```

返回 403，但本机还有备份：

```text
D:\Projects\Blog\Images\ArticlesImages\中国内陆Google搜索使用\YouTube.png
```

这类历史单图建议在 OSS 控制台重新上传，优先上传到原路径；如果原路径仍受权限影响，就上传到新的 `ImgHost/posts/<slug>/` 目录，并修改对应 Markdown 链接。

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

## 七、依赖与安全告警策略

本项目的优先级是：旧主题视觉稳定 > 构建链可维护 > 依赖尽量新。当前采用的折中版本是：

- `hexo@8.1.2`
- `hexo-theme-butterfly@4.1.0`
- `hexo-renderer-stylus@3.0.1`
- `hexo-bilibili-bangumi@1.11.1`
- `hexo-renderer-marked@7.0.1`

这样做的原因是：主题本体保持旧版，避免破坏多年魔改的视觉；Hexo 和部分构建插件更新到新版本，减少旧依赖带来的安全告警。

如果运行：

```powershell
npm audit --omit=dev
```

仍看到少量 `moderate` 级别告警，通常来自 Butterfly 4 内部依赖的旧 stylus/source-map 解析链。这类依赖只在本机或 GitHub Actions 构建静态文件时使用，不会被发布到浏览器端作为可交互服务运行。不要直接执行：

```powershell
npm audit fix --force
```

因为它可能强制升级主题相关依赖，重新破坏旧页面结构和样式。正确处理方式是：

1. 先运行 `npm run check`，确认站点能稳定生成。
2. 再运行 `npm audit --omit=dev`，记录剩余告警。
3. 只有当修复不升级 `hexo-theme-butterfly`、不改变页面视觉，并且本地截图验收通过时，才合并依赖改动。

## 八、故障排查

构建命令只显示 Hexo 帮助：检查 `package.json` 是否保留了 `"hexo": {"version": "8.1.2"}`。

Windows 安装失败：删除 `node_modules` 后重新运行 `npm ci`。不要从 macOS 复制 `node_modules`。

端口占用或本地服务异常：本项目默认使用 `npm run server`，实际命令是 `hexo server -p 4001 --host 127.0.0.1`。如果手动启动，使用：

```powershell
npx hexo server -p 4001 --host 127.0.0.1
```

如果页面异常，先检查 4000/4001 端口：

```powershell
Get-NetTCPConnection -LocalPort 4000 -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,State,OwningProcess
Get-NetTCPConnection -LocalPort 4001 -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,State,OwningProcess
```

如果 4000 没有异常，也可以手动使用 4000；但本机排查时曾发现 PID 6816 在监听 `4000` 且拒绝停止，导致静态资源请求超时，所以 README 默认推荐 4001，减少和桌面软件冲突的概率。

图片一直显示小圆点或 `loading3.gif`：这是懒加载占位图没有被替换成真实图片。处理顺序：

```powershell
cd D:\Projects\Blog\guojx0820.github.io
npm run clean
npm run check
npm run server
```

然后访问 `http://127.0.0.1:4001/`，并用浏览器强制刷新：

- Edge/Chrome：`Ctrl + F5`
- 或打开开发者工具，Network 勾选 Disable cache 后刷新

本项目保留懒加载，不关闭懒加载。`source/js/lazyload-fallback.js` 是本地兜底脚本：当 Butterfly/hexo-lazyload-image 的默认懒加载初始化慢、CDN 不稳定或浏览器缓存异常时，它会在图片接近视口时把 `data-original` 中的真实图片地址切换到 `src`。

判断图片问题属于哪一类：

- 如果 `src` 是 `loading3.gif`，真实地址在 `data-original`，说明图片进入了懒加载流程。
- 如果 OSS URL 单独打开正常，但页面里一直是 `loading3.gif`，优先强制刷新并检查懒加载脚本。
- 如果 `/images/posts/...` 本地地址打不开，检查是否运行了 `npm run server`，以及是否访问 `127.0.0.1:4001`。
- 如果正式网站上的 GitHub 本地图片慢，按上面的 OSS 流程上传并替换为 OSS URL。

单独验证图片地址：

```powershell
Invoke-WebRequest -Uri "https://luomublog.oss-cn-qingdao.aliyuncs.com/ImgHost/CNN/DNN_top.jpeg" -Method Head -TimeoutSec 12
Invoke-WebRequest -Uri "http://127.0.0.1:4001/images/posts/llm-transformer-rag/cover.png" -Method Get -TimeoutSec 20
```

如果 OSS 图片 403/404，检查 Bucket 公共读、防盗链白名单、对象路径大小写和 RAM 权限。如果只有本地 `/images/...` 卡住，优先重启 Hexo server 并确认使用 4001。

文章 URL 变化：检查文章 front matter 中的 `abbrlink` 是否被删除或改动。

公式不显示或显示成 Markdown 原文：先确认文章 front matter 有 `mathjax: true`，并且 `_config.butterfly.yml` 里 `mathjax.enable` 为 `true`、`katex.enable` 为 `false`。这个旧主题使用 Butterfly 4 的 MathJax 兼容逻辑，行内公式可继续写 `$Q$`、`$K$`、`$\sqrt{d_k}$`；块级公式为了避免 Hexo/marked 把 `$$` 或 `\[` 误处理，推荐写成：

```markdown
<script type="math/tex; mode=display">
\operatorname{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V
</script>
```

不要把公式包进代码块，也不要在公式上下紧贴正文。如果你看到页面里出现 `$$` 原文、青绿色代码块、或者孤立的 `[` `]`，通常就是 Markdown 渲染器先于 MathJax 把块级公式处理坏了。修改后运行：

```powershell
npm run clean
npm run check
npm run server
```

然后打开文章页检查。如果页面仍显示 `$$`、`\[`、`[` `]` 等原文，按 `Ctrl + F5` 强制刷新；如果浏览器控制台显示 MathJax CDN 加载失败，再检查网络或将 MathJax CDN 本地化。

页脚红心不显示：旧站版权行应接近：

```html
&copy;2021 - 2026 <i id="heartbeat" class="fa fas fa-heartbeat"></i> 洛沐
```

本仓库通过 `/js/footer-heartbeat.js` 把 Butterfly 默认输出的 `By 洛沐` 改回旧站红心格式，通过 `/css/heartbeat.css` 提供跳动动画。如果红心不跳，检查：

1. `_config.butterfly.yml` 的 `inject.head` 是否包含 `/css/heartbeat.css`。
2. `_config.butterfly.yml` 的 `inject.bottom` 是否包含 `/js/footer-heartbeat.js`。
3. `/css/font-awesome.min.css` 是否正常加载，红心图标依赖 FontAwesome 兼容类。
4. 修改后是否重新运行 `npm run clean && npm run check` 并重启 `npm run server`。

关于页 GitHub 统计图显示破图：关于页原来使用过 `github-readme-stats.vercel.app` 的动态图片，例如：

```markdown
![GitHub 数据统计](https://github-readme-stats.vercel.app/api?username=guojx0820&show_icons=true&theme=radical)
```

这个服务不是博客本身的一部分，它依赖 Vercel 和 GitHub API。国内网络、Vercel 访问、GitHub API 限流或浏览器插件都可能导致它加载失败。现象就是关于页出现一个破图图标，下面仍能看到图片 alt 文字。

处理原则：

1. 不为这个外部统计卡片修改主题。
2. 不因为一个第三方图片失败就升级 Butterfly。
3. 优先保证页面稳定显示，不出现破图。
4. 如果以后想恢复动态统计图，先在浏览器单独打开 `https://github-readme-stats.vercel.app/api?username=guojx0820&show_icons=true&theme=radical`，确认能稳定访问后再放回 Markdown。

当前稳定写法是使用文字链接：

```markdown
GitHub 数据统计：[查看洛沐的 GitHub 主页](https://github.com/guojx0820)

GitHub 编程语言统计：[查看洛沐的 GitHub 仓库](https://github.com/guojx0820?tab=repositories)
```

这样即使第三方统计服务不可用，关于页也不会出现破图。

发布前必须先本地检查底部页脚和公式页，确认无误后再手动提交/推送：

```powershell
git status
git add .
git commit -m "Restore footer heartbeat and fix MathJax rendering"
git push origin main
```

OSS 图片 403：检查 Bucket 公共读、防盗链白名单、对象路径大小写和 RAM 权限。

Pages 没更新：查看 GitHub Actions 是否失败；查看 Settings -> Pages 是否选择 GitHub Actions；确认推送的是 `main` 分支。

自定义域名异常：确认 GitHub Pages Custom domain 是 `www.guojxblog.cn`，HTTPS 已启用；只有 GitHub 检查失败时再改阿里云 DNS。

## 九、安全与恢复

- 旧 GitHub Token 必须撤销。
- 新仓库不要保存任何 token、password、AccessKey、Secret。
- 发布前运行 `npm run check:secrets`。
- 离线恢复可使用 `D:\Projects\Blog\_migration_backup_20260902-170134`。
- 旧 `master` 分支暂时保留，可以作为迁移失败时的静态站点回滚参考。

## 十、一页速查

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
