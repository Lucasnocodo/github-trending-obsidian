---
repo: JenkinWoo/sheeridVerify
url: https://github.com/JenkinWoo/sheeridVerify
owner: JenkinWoo
owner_type: User
language: JavaScript
license: ISC
description: ""
homepage: ""
stars: 1760
stars_per_day: 1760
forks: 948
open_issues: 0
created: 2026-11-06
pushed_at: 2026-11-06
first_seen: 2026-11-08
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-11"
contributor_count: 1
engagement: "high"
issue_close_rate: -1
repo_size_kb: 408
readme_length: 8689
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-08"
star_history: "2026-11-08:1760"
tags:
  - github
  - "category/other"
  - "lang/javascript"
aliases:
  - "sheeridVerify"
  - "JenkinWoo/sheeridVerify"
---

# sheeridVerify

**1.8k** stars · **1.8k** stars/天 · 建立 1 天前 · JavaScript · ISC

```dataviewjs
const me = dv.page("Repos/JenkinWoo--sheeridVerify");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`個人專案`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 948 |
| Open Issues | 0 |
| 最後推送 | 2026-11-06 |
| 建立日期 | 2026-11-06 |
| Repo 大小 | 408 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JenkinWoo/sheeridVerify) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `camoufox` `playwright-core` `proxy-chain` `undici`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 92
>     "CSS" : 7
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JenkinWoo](https://github.com/JenkinWoo) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-06）
> **活躍天數** 1 天 · **最新 commit** Initial release of sheeridVerify

## README 摘錄

> [!info]- 展開查看原文 README
> # sheeridVerify · 教学与研究验证流程工作台
> 
> [](https://github.com/JenkinWoo/sheeridVerify/actions/workflows/ci.yml) [](https://nodejs.org/) [](LICENSE)
> 
> **[sheeridVerify](https://github.com/JenkinWoo/sheeridVerify)** 是一个基于 Node.js 的验证流程学习项目，提供本地 Web 工作台、任务队列、浏览器表单交互及 HTTP 状态查询，供学校教学、学术研究和获得授权的流程测试使用。
> 
> > **用途说明：** 本项目仅以教学与研究为目的提供。使用真实平台前应取得必要授权，遵守适用法律和平台条款；不得伪造身份、学籍或材料，不得冒用信息、骗取权益或绕过资格审核。本项目与 SheerID 及任何学校均无官方隶属或认可关系，也不保证验证成功。详情见 [用途说明与免责声明](DISCLAIMER.md)，代码许可见 [ISC 协议](LICENSE)。
> 
> 
> ## 文档导航
> 
> - [快速开始](#快速开始)
> - [工作台与接口说明](#使用)
> - [Linux / Instabox 部署、更新与排错](docs/DEPLOYMENT.md)
> - [浏览器流程说明](docs/browser-workflow.md)
> - [贡献指南](CONTRIBUTING.md) · [安全说明](SECURITY.md) · [免责声明](DISCLAIMER.md)
> 
> 
> ## 功能
> 
> - 通过 fetch 读取验证状态，按当前步骤选择浏览器或材料处理流程。
> - 在 Web 页面创建、排队、停止、恢复和删除任务；失败任务删除后可重新提交。
> - 按配置限制并发，记录任务进度，提交后默认每 5 秒查询结果。
> - 上传原始 PNG、JPEG、PDF 文件，不生成或修改证明材料；交互式真人验证由用户完成。
> - 使用访问密码、会话 Cookie、来源检查及写请求令牌保护工作台接口。
> 
> 
> ## 快速开始
> 
> 需要 **Node.js >= 22.15** 与 npm。从 GitHub 获取源码：
> 
> ```bash
> git clone https://github.com/JenkinWoo/sheeridVerify.git
> cd sheeridVerify
> ```
> 
> 使用下载的 ZIP 时，解压后进入其中包含 `package.json` 的目录。在项目根目录安装依赖与浏览器：
> 
> ```bash
> npm ci
> npm run browser:install
> ```
> 
> 首次使用时复制配置，已有个人配置请直接编辑原文件。
> 
> Windows PowerShell：
> 
> ```powershell
> Copy-Item config/sheerid.example.json config/sheerid.local.json
> ```
> 
> Linux / macOS：
> 
> ```bash
> cp -n config/sheerid.example.json config/sheerid.local.json
> ```
> 
> 编辑 `config/sheerid.local.json`，设置获授权的国家、学校、`data.organization.emailDomain` 和材料来源。该文件必须是标准 JSON，**不支持 `//` 注释或尾随逗号**。网页会按姓名和配置后缀生成邮箱，仅应使用自己有权使用的真实地址与资料。`document.path` 与 `document.url` 只能填写其中一个；示例配置不包含可直接提交的真实资料。
> 
> ```bash
> npm run web
> ```
> 
> 打开 **http://127.0.0.1:8787**。本地默认访问密码为 `JenkinWoo`；对外开放前必须通过 `ONE_WEB_PASSWORD` 更换密码，并配置 HTTPS 入口。Linux 有界面浏览器需要可用桌面；完整部署步骤和环境变量模板见 [部署指南](docs/DEPLOYMENT.md)。
> 
> 
> ## 测试与贡献
> 
> ```bash
> npm test
> ```
> 
> 测试使用模拟接口及本地页面，不向真实验证接口提交数据。未安装 Camoufox 时会跳过浏览器相关用例；网页和浏览器改动应在安装浏览器后验证。GitHub Actions 在 Node.js 22、24 上运行不含已安装浏览器的测试。欢迎按 [贡献指南](CONTRIBUTING.md) 提交问题和改进，报告前请删除个人资料、凭据及真实验证链接。
> 
> 
> ## 协议与责任说明
> 
> 项目采用 [ISC License](LICENSE)，与 `package.json` 的协议声明一致。教学与研究是项目的预期用途，不额外收窄 ISC 的开源授权范围。软件按原样提供；第三方依赖和平台分别适用自己的许可和条款。请在使用前阅读完整的 [用途说明与免责声明](DISCLAIMER.md)。
> 
> 
> ## 社区认可与致谢
> 
> 本项目认可并支持 [LINUX DO 社区](https://linux.do/) 的开源分享精神，感谢社区为开发者提供技术交流、经验分享与开源项目展示的平台。欢迎在遵守社区规则的前提下交流使用体验与改进建议。
> 
> 社区推广材料见 [LINUX DO 发帖草稿](docs/LINUX_DO_POST.md)，其中包含推广声明模板与 AI 辅助生成的项目介绍图片。
> 
> 
> ## 工作原理
> 
> 当前命令行先用 Node.js 内置 `fetch` 查询状态，再选择执行流程：需要填写学生资料时使用 Camoufox，需要材料验证时使用纯 `fetch` 接口。材料上传保持文件原始内容，不生成或修改证明文件。
> 
> 
> ## 使用
> 
> 
> ### 本机 Web 工作台
> 
> ```powershell
> npm run web
> ```
> 
> 打开 **http://127.0.0.1:8787**。页面填写验证链接、名、姓、出生日期、代理和访问密码。`url`、`firstName`、`lastName`、`birthDate` 必须由创建任务接口传入，缺少时拒绝入队。邮箱不再由前端传入，而是每次根据配置文件中的 `emailDomain` 域名后缀按 `First name + 点 + Last name @xxx.edu`（如 `first.last@xxxx.edu`）格式自动拼接生成。国家、学校、材料来源、浏览器、超时、邮箱后缀等设置，每次启动任务时从 `config/sheerid.local.json` 读取；提交值不会写回配置文件。当前配置及示例配置不再保存验证链接和个人信息。
> 
> `POST /api/jobs` 的 JSON 请求体示例（认证仍使用会话 Cookie 或 `X-Web-Password`，写请求携带 `X-Local-Token`）：
> 
> ```json
> {
>   "url": "https://services.sheerid.com/verify/项目ID/?verificationId=验证ID",
>   "firstName": "Test",
>   "lastName": "Student",
>   "birthDate": "2000-01-02",
>   "proxy": ""
> }
> ```
> 
> 当前配置用于 Web/API 模式。若单独使用 CLI，需通过 `--config` 指定含验证链接及所需资料的独立配置；`document.url` 仍是材料下载地址，继续保留在配置中。
> 
> 代理填写时使用输入的代理，留空或只有空格时强制直连，**不使用配置中的代理、系统代理或代理环境变量**。支持 HTTP/SOCKS5 URL 及 `host:port:username:password`。`AUTOMATION_URL` 也不会覆盖网页输入的链接。
> 
> 点击“加入队列”后，按入队顺序自动填写、提交，并按配置继续材料流程；`browser.autoFill: false` 时遵循原有手动填写模式。材料来源沿用配置中的 `document.path` 或 `document.url`，下载查询中的姓名使用本次网页输入。点击提交后保留浏览器，只有接口确认进入 `docUpload` 且没有终止错误时，才关闭浏览器并继续上传文件。
> 
> 并发上限由 `config/sheerid.local.json` 的 `web.concurrency` 控制，默认 1。例如同时执行 3 个任务：
> 
> ```json
> "web": { "concurrency": 3 }
> ```
> 
> 并发数必须是正整数，服务启动和新任务入队时读取；调低上限不会中断正在运行的任务，后续等到名额足够再启动。排队任务保存入队时的配置快照。任务使用链接中的 `verificationId` 作为唯一 ID；服务本次运行期间重复提交同一 ID 只返回已有任务，不会重复执行。已停止的任务可以通过“恢复任务”明确重新加入队尾，沿用原资料、代理及配置，重复点击不会重复入队；成功或失败的任务不能通过该按钮重跑。
> 
> 右侧列出队列，点击任务可查看对应进度和日志；刷新保留选中的任务。表单可连续添加不同任务。停止排队任务会立即取消；停止运行任务会终止后续操作，并在对应浏览器和连接清理完成后释放并发名额，随后才可恢复。恢复时先检查远端验证状态；尚未确认的提交继续只读查询。保留浏览器等待手动操作的任务仍占用名额。停止 Web 服务会取消所有排队和运行任务；队列与历史仅保存在服务内存中，重启后不自动恢复或重试。
> 
> Web 默认仅监听本机，不把完整配置返回前端，也不持久保存输入的个人资料和代理密码。提交后的审核等待会继续占用任务名额，直到成功、失败或手动停止。
> 
> 页面选中失败、已结束或已停止的任务后，可点击“删除当前任务”，再用相同链接重新加入队列。删除最后一个任务会清空进度和活动记录，表单内容继续保留；运行中的任务需先停止并等待资源清理完成。
> 
> 删除历史任务接口：`DELETE /api/jobs/:verificationId`。请求携带已验证的会话 Cookie 或 `X-Web-Password`，以及 `X-Local-Token`（先通过 `GET /api/session` 获取 `token`），无需请求体。已完成、失败或已停止且清理完资源的任务可删除，成功返回 HTTP 200 和 `{ "id": "verificationId", "deleted": true }`；排队、运行或正在停止的任务返回 HTTP 409 / `JOB_ACTIVE`，请先调用 `POST /api/jobs/:verificationId/cancel` 并等待停止完成；不存在的任务返回 HTTP 404 / `JOB_NOT_FOUND`。删除只移除本服务内存中的任务及活动记录，不撤销验证平台上的提交，也不删除磁盘运行日志。删除后相同 ID 可通过正常创建任务接口重新入队，仍先检查远端状态。
> 
> 网页只在有排队、运行或正在停止的任务时自动刷新进度；全部任务结束并读取最终日志后停止轮询。加入、恢复或切换任务会重新读取状态；已停止任务不会被反复查询。空闲页面要查看其他页面新建的任务时，刷新网页即可。
> 
> 首次状态分流和浏览器启动前的检查遇到网络错误、超时或 HTTP 5xx 时最多尝试 3 次，重试间隔按 `polling.intervalMs` 递增（默认 5 秒、10 秒），等待可随任务停止而取消。HTTP 4xx（含 429）及无效响应在初始检查中直接停止。网页将状态查询失败、网络/代理异常、请求限流与真正的验证拒绝分别显示，避免把连接失败误报为“验证失败”；这些重试只用于只读状态查询。
> 
> 
> ### 提交后的状态跟踪
> 
> 自动提交资料或材料后，程序继续通过 fetch 查询状态，默认每 5 秒一次。`pending`、`emailLoop` 都是中间状态，不结束任务；邮件步骤仍需用户完成邮件操作。正常提交流程最终返回 `verified`（成功）或 `failed`（失败），手动停止仍显示“已停止”。若只是查询现状，`npm run status` 仍只请求一次。
> 
> 服务端重新返回 `docUpload` 且没有终止错误时，重新请求 `document.url` 获取当前原始文件（仍携带本次姓名），重新申请上传地址并提交；本地文件则重新读取。不会复用上次文件字节或上传地址。`rejectionReasons` 是退回材料的原因，`currentStep: error` 或非空 `errorIds`（包括 `docReviewLimitExceeded`）会终止失败。
> 
> 可设置 `"polling": { "intervalMs": 5000 }`，范围 1000–300000 毫秒。审核没有人为设置的总等待超时，可通过停止按钮或 Ctrl+C 取消。查询暂时断网、超时或 HTTP 5xx 时退避重试；HTTP 429 仅在带 `Retry-After` 且没有终止错误时按指示等待。上传/提交响应丢失时先持续只读查询，不直接重放写请求；确认已进入审核后，才允许处理后续新的补交材料要求。不可恢复的接口/材料错误会标记任务失败；`submissionUncertain` 表示服务端结果尚未确认。
> 
> 端口占用时使用 `npm run web -- --port 8788`。关闭服务按 Ctrl+C；不要关闭服务终端后继续操作 Web 页面。
> 
> 
> ### instabox 部署
> 
> 程序目录为 `/data/workspace/one`，使用 Node.js 22+，运行 `npm ci` 和 `npm run browser:install` 安装依赖及对应平台的 Camoufox。Linux 有界面浏览器使用 `DISPLAY=:1`，可在 instabox 的 Computer 标签中查看和操作；个人配置仍使用 `config/sheerid.local.json`。
> 
> 公网部署设置 `ONE_WEB_HOST=0.0.0.0`、`ONE_WEB_PUBLIC_ORIGIN=https://你的域名`，可用 `ONE_WEB_PASSWORD` 覆盖默认访问密码 `JenkinWoo`。不再使用 `ONE_WEB_USER` 或 HTTP Basic 登录；网页可直接打开，在表单的“访问密码”中输入密码即可。API 校验密码或会话 Cookie，并继续检查来源和写请求令牌。公网必须使用 HTTPS 入口；未配置监听环境变量时仍只监听本机。密码校验成功后设置 HttpOnly、SameSite=Strict 的会话 Cookie（公网额外设置 Secure），刷新页面无需重复输入；服务重启后需重新验证。
> 
> 直接调用接口时，向 `GET /api/session` 发送 `X-Web-Password: JenkinWoo`（自定义密码时替换），保存返回的 `token`。后续 API 请求携带该密码头或返回的会话 Cookie；创建、停止、恢复、删除任务还需携带 `X-Local-Token: token`。默认密码仅存在于后端，页面不会预填密码。
> 
> `deploy/one-web.service` 可安装到 `~/.config/systemd/user/one-web.service`，凭据环境文件使用 `/data/workspace/one/.env.web`（权限 600）。使用 `systemctl --user enable --now one-web` 启动；修改代码后执行 `systemctl --user restart one-web`，日志使用 `journalctl --user -u one-web`。停止服务会结束任务；服务重启后队列为空。服务器重启后需保持用户服务运行，并在启动浏览器任务前确保 Computer 桌面可用。
> 
> 
> ### 命令行
> 
> 要求 Node.js >= 22.15。默认读取 `config/sheerid.local.json` 的验证链接和材料来源；下载网络材料时可使用配置中的姓名查询原始文件。
> 
> ```powershell
> 
> # 按状态分流：需要资料时打开浏览器并填写，但不提交；其他状态只报告
> npm start
> 
> # 始终只查询状态，不开浏览器、不上传
> npm run status
> 
> 
> # 按当前状态提交：资料步骤走浏览器，材料步骤上传指定文件
> npm run submit -- --file "C:\Documents\student-proof.png"
> 
> 
> # 网络材料地址：保留引号，避免查询参数中的 & 被 shell 解析
> npm run submit -- --url "https://school.example.edu/proof?id=123"
> 
> 
> ## 状态与接口顺序
> 
> 浏览器出现 “We couldn't continue your verification”（或对应中文标题 / `#sid-step-error` 错误页）时，立即按终止失败处理：`status: failed`、`code: VERIFICATION_UNAVAILABLE`，退出码 1。页面检测覆盖表单等待、填写、真人验证重试及提交后的结果等待；即使已经点击过提交，明确的错误页也不会被记成结果未知。不会点击该错误页上的 “Try again”，也不会新建验证会话；它与可重试三次的内联真人验证错误是两种状态。窗口仍按原 `keepOpen` 配置保留。
> 
> 每次运行先请求 `GET https://my.sheerid.com/rest/v2/verification/{id}`，核对返回 ID、步骤和错误码。
> 
> | 当前状态 | 提交模式的行为 |
> | --- | --- |
> | `sso` 且无错误 | 先读取本地材料或下载网络材料并检查，再 `DELETE /step/sso`；仅当返回 `docUpload` 且无错误时继续 |
> | `docUpload` 且无错误 | 读取本地材料或下载网络材料并检查，进入上传流程 |
> | `collectStudentPersonalInfo` 且无错误 | 打开浏览器填写；`npm run submit` 还会点击提交，`npm start` 仅填写；不在这个步骤调用取消 SSO 或上传接口 |
> | `success` | 返回 `verified`，不重复提交 |
> | `pending` / `emailLoop` | 持续查询；邮件步骤等待用户完成邮件操作 |
> | `error` 或非空 `errorIds` | 提交模式返回 `failed` 并停止，包括 `fraudRulesReject` |
> | 未知步骤 | 提交模式返回 `failed` / `UNSUPPORTED_VERIFICATION_STEP`；只查状态仍报告 `not_actionable` |
> 
> 上传流程为：
> 
> 1. `P

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/JenkinWoo/sheeridVerify)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "JenkinWoo--sheeridVerify"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "JenkinWoo--sheeridVerify" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "JenkinWoo--sheeridVerify"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JenkinWoo--sheeridVerify" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "JenkinWoo" AND file.name != "JenkinWoo--sheeridVerify"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/JenkinWoo--sheeridVerify");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-11-08** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-11-08|2026-11-08]] — 首次收錄，1.8k stars
