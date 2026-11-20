---
repo: CzzzzzzJ/mdldm-maitian
url: https://github.com/CzzzzzzJ/mdldm-maitian
owner: CzzzzzzJ
owner_type: User
language: JavaScript
license: MIT
description: "麦田：自媒体多平台发布中控与数据监控（B站/抖音/小红书/视频号/YouTube/X），飞书卡片通知 + 数据大屏"
homepage: ""
stars: 1649
stars_per_day: 275
forks: 486
open_issues: 7
created: 2026-11-14
pushed_at: 2026-11-20
first_seen: 2026-11-19
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "media"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-19
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-11-23"
contributor_count: 3
engagement: "medium"
issue_close_rate: 25
repo_size_kb: 4607
readme_length: 8466
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-19"
star_history: "2026-11-19:1460,2026-11-20:1649"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/automation"
  - "topic/chrome_extension"
  - "topic/creator_tools"
  - "topic/dashboard"
  - "topic/feishu"
aliases:
  - "mdldm-maitian"
  - "CzzzzzzJ/mdldm-maitian"
---

# mdldm-maitian

**1.5k** stars · **292** stars/天 · 建立 5 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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

`media`

`automation` `chrome-extension` `creator-tools` `dashboard` `feishu` `social-media`

> [!summary] 一句話摘要
> 麦田：自媒体多平台发布中控与数据监控（B站/抖音/小红书/视频号/YouTube/X），飞书卡片通知 + 数据大屏

## 專案簡介

麦田：自媒体多平台发布中控与数据监控（B站/抖音/小红书/视频号/YouTube/X），飞书卡片通知 + 数据大屏

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
| Forks | 451 |
| Open Issues | 9 |
| Issue 解決率 | 25% (3 closed) |
| 最後推送 | 2026-11-18 |
| 建立日期 | 2026-11-14 |
| Repo 大小 | 4.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CzzzzzzJ/mdldm-maitian) |
| Topics | `automation` `chrome-extension` `creator-tools` `dashboard` `feishu` `social-media` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 73
>     "HTML" : 22
>     "PowerShell" : 2
>     "Shell" : 2
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@CzzzzzzJ](https://github.com/CzzzzzzJ) | 24 |
> | [@ajin558](https://github.com/ajin558) | 5 |
> | [@ymstar](https://github.com/ymstar) | 2 |

**最新版本**：media — 演示素材 (2026-11-14)

> [!info]- Release Notes
> README 里用到的演示片（不随版本更新）。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-17 ~ 2026-11-18）
> **活躍天數** 2 天 · **最新 commit** docs: 交流群换成 4 群二维码 (#29)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/CzzzzzzJ/mdldm-maitian/issues/35) | 4群超过200人了，需要邀请进群 `bug` | 0 | 0 |
> | [#34](https://github.com/CzzzzzzJ/mdldm-maitian/issues/34) | 3群超过200人了，需要邀请进群 `enhancement` | 0 | 1 |
> | [#32](https://github.com/CzzzzzzJ/mdldm-maitian/issues/32) | 支持 停用/启用 某个平台，系统管理页可以管理每个平台的登录状态 `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 一行装好 ·
>   看它跑一遍 ·
>   怎么配合 ·
>   各平台的坑 ·
>   作者
> 
> 一个人做内容，要发六七个平台，每个平台的文案、封面、发布形式都不一样；发完还想知道哪期起来了、哪个平台涨粉、哪个平台真的带来了付费。麦田就是我自己每天在用的那套工作台：
> 
> 1. **发得出去**：一期视频分批填好 B站、抖音、小红书、视频号、YouTube、X、Instagram，提前排进「分发计划」，到点发布、自动取链接。
> 2. **看得清楚**：每期在每个平台的播放、互动，各平台粉丝，每天自动采、长期留存；手机上看大屏，飞书群推卡片。
> 3. **算得出钱**：接上你自己的站点，看哪一期、哪个平台带来了注册和收入。
> 
> > 跑在一台常开的 Mac 上，用你自己登录好的浏览器操作各平台，**不存任何平台密码**。国内四家只填写不发布，最后一下由你自己点。
> 
> ## 看它跑一遍
> 
> 一期视频从写文案到上线（47 秒，各平台发布页为示意，数据是作者第 4 期的真实文案和封面）· 高清 MP4
> 
> 大屏（演示数据，node src/demo.mjs 就能看到）
> 
> | 日历：分发计划 | 单期复盘：同龄对比 | 每期转化漏斗 |
> |---|---|---|
> |  |  |  |
> 
> ## 怎么配合
> 
> | 部分 | 做什么 | 在哪 |
> |---|---|---|
> | 发布 skill | 让 AI 助手（Claude Code / Codex）看片、写各平台文案、生成发布工程并校验 | 本仓库 [`skills/maitian-publish`](skills/maitian-publish/SKILL.md) |
> | 麦田发布助手 | Chrome 插件，各平台适配器：打开上传页、传视频和封面、填文案、设定时 | [Chrome 应用商店](https://chromewebstore.google.com/detail/eaaipbilkhibicihiollecmbpneikpnj)（装进麦田的专用 Chrome，自动更新） |
> | 麦田（本仓库） | 分发计划、调度、防重、等你点发布、取链接、采数据、网页大屏、飞书通知 | 本仓库 |
> 
> 链路：成片 → skill 写「发布素材.md」→ 生成 `publish.json` → `hub plan` 进分发计划 → `hub run` 分批填写 → 国内平台你点发布 → 到点取链接 → 每天采数据 → 大屏和飞书卡片。
> 
> ## 一行装好
> 
> ```bash
> bash -c "$(curl -fsSL https://raw.githubusercontent.com/CzzzzzzJ/mdldm-maitian/main/scripts/install.sh)"
> ```
> 
> 下载麦田和发布助手到 `~/maitian/`、接上发布 skill、打开安装向导；向导问完几个问题，生成配置、装好开机自启、打开各平台登录页。需要 macOS、Node.js ≥ 22.5、Google Chrome。
> 
> Windows（社区贡献，感谢 [ajin558](https://github.com/ajin558)；开机自启暂未适配）：
> 
> ```powershell
> powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/CzzzzzzJ/mdldm-maitian/main/scripts/install-windows.ps1 | iex"
> ```
> 
> 同样下载到 `%USERPROFILE%\maitian\`、接上发布 skill、打开安装向导，安装目录里另有 4 个双击启动器（演示 / 登录 / 体检 / 启动）。需要 Windows 10/11、Node.js ≥ 22.5、Google Chrome；缺 Git / Node 时脚本会用 winget 自动补装。开机自启暂未适配（向导里的 launchd 步骤会自动跳过），可用任务计划程序指向安装目录的 `4-start.bat` 代替。
> 
> 手动安装
> 
> 或者手动：
> 
> 需要：macOS、Node.js ≥ 22.5（用到内置 `node:sqlite`）、Google Chrome；可选 NAS（放成片）、飞书群机器人、cloudflared。
> 
> ```bash
> git clone https://github.com/CzzzzzzJ/mdldm-maitian.git && cd mdldm-maitian
> node src/demo.mjs                       # 先用假数据看看效果：http://localhost:8788/?key=demo
> node src/init.mjs                       # 安装向导：检查环境、生成 config.json、装开机自启；在专用 Chrome 里从应用商店添加麦田发布助手、登录各平台
> node src/hub.mjs doctor                 # 登录完检查各平台登录态和上传页（不上传、不填写）
> ```
> 
> 打开向导最后给出的地址（`http://localhost:8787/?key=`），之后浏览器会记住口令。手动安装也可以：`cp config.example.json config.json` 填好后跑 `scripts/install-launchd.sh`。
> 
> ### 三级上手
> 
> | 级别 | 你能得到 | 要装的 | 大概时间 |
> |---|---|---|---|
> | L1 只看数据 | 各平台粉丝、已发作品的播放互动、大屏、飞书日报 | 麦田；专用 Chrome 里登录各平台；已发的期用 `hub adopt` 登记 | 30 分钟 |
> | L2 分发 | 一期一次填好七个平台，定时，自动取链接 | + [麦田发布助手](https://chromewebstore.google.com/detail/eaaipbilkhibicihiollecmbpneikpnj)（应用商店装进专用 Chrome）；+ 发布 skill（或手写 `publish.json`） | 再 1 小时 |
> | L3 转化 | 每期带来的注册和收入 | + 你自己的站点按 `src/site.mjs` 的接口接入 | 看站点 |
> 
> ## 它做什么
> 
> - **播种（发布）**：读 NAS 上的一期发布工程（成片、封面、各平台文案、定时），按批次在专用 Chrome 里填好各平台上传页。
>   - X、YouTube、Instagram、自有站点：回读文案和定时一致后自动提交，只点一次。
>   - B站、抖音、小红书、视频号：**填好就停**，等你自己点「发布 / 定时发布」，守护进程每 20 分钟提醒。
>   - 防重：库里已经到位的平台不再跑；X 定时列表、YouTube Studio、Instagram 主页、站点后台已有同名的不再传。
> - **长势（流量和粉丝）**：每天上午采一次各期在各平台的播放和互动、各平台粉丝数；新一期头三天每 6 小时采一次。
> - **收成（转化，可选）**：接上自有站点后，看注册、会员、订单、收入从哪个渠道、哪一期来。
> - **日历**：上周到未来两周，已发布、已定时、等你点、计划中的期一眼看清。
> - **粮仓（档案）**：每期的封面、文案快照、各平台链接、过程日志。
> - **复盘（数据分析）**：每期发布后第 1/3/7 天自动出复盘卡片：各平台占比、互动率、和上一期同龄对比（第 N 天对第 N 天）、期间涨粉、带来的注册；每周一出周报。网页单期页有同一份复盘表，转化页有每期转化漏斗（播放 → 注册 → 会员 → 收入）。
> - **飞书通知**：开跑、每个平台到位、异常、等你点发布、定时被平台改掉、每日日报、复盘和周报，都是带颜色的卡片。
> 
> ## 各平台的坑（实战总结）
> 
> - **国内四家由你自己点最终发布**。自动化只负责填写和核对，最后一下人点，降低风控风险。
> - **小红书只走最保守的路**：只读页面上已经渲染的内容、像人一样滚动和点击，不在页面里直接调它的接口，低频。
> - **同一条视频每个平台只上传一次**，反复重传最容易触发风控；中控的防重就是为这个。
> - **视频号的定时可能被改**：表单回读是对的，提交后平台记成别的时间（遇到过 +2 小时）。`sync` 会拿平台记录的定时和计划比对，不一致发 ⚠️ 卡片。
> - **YouTube 上传对话框被关掉**时，视频可能已经排好定时；中控会先查 Studio 列表再下结论。
> - **成片必须 faststart**（moov 在文件头），否则小红书报「无视频流信息」、抖音不出表单；校验会拦。
> - **专用 Chrome 卡死**：用 `curl 127.0.0.1:9333/json/close/` 关掉卡住的标签页，不会触发「离开此网站」确认。
> 
> 架构
> 
> ```
>             ┌────────────── Mac（常开）──────────────┐
> NAS 发布工程 │  hub.mjs 守护进程 ──── 专用 Chrome（CDP 9333）── 各平台创作者后台
> publish.json ─▶│     │  ▲                 ▲                       │
> 成片/封面     │     │  │ 平台适配器（麦田发布助手 lib/）       │
>             │     ▼  │                                          │
>             │  SQLite（data/hub.db） ── web.mjs（麦田网页 :8787）── 手机/电脑（可选 Cloudflare 隧道）
>             │     │                                              │
>             │     └── feishu.mjs ──▶ 飞书群机器人（卡片通知）       │
>             └───────────────────────────────────────────────┘
> ```
> 
> - 平台填写逻辑在 [麦田发布助手](https://chromewebstore.google.com/detail/eaaipbilkhibicihiollecmbpneikpnj)（Chrome 插件）里。插件从应用商店装进麦田的专用 Chrome 后由 Chrome 自动更新，麦田直接加载专用 Chrome 里这份插件的发布引擎（`src/plugin.mjs`），平台改版时插件更新一次，所有人自动生效。`src/chrome-shim.mjs` 在 Node 里模拟插件需要的 `chrome.tabs` / `chrome.debugger`。
> - 发布工程 `publish.json` 由 `src/make-publish.mjs` 从一份 Markdown 发布素材生成，`src/validate.mjs` 校验（字数、禁词、封面比例、成片 faststart 等），字段规则跟着插件走。
> 
> 命令
> 
> ```bash
> node src/hub.mjs plan [工程目录]            # 登记进分发计划（不带目录 = 扫描 rootPath）
> node src/hub.mjs run  [--only x,zsz] [--force] [--now]   # 发一期；--now 让站点课程立即上线（默认推迟到定时前 30 分钟）
> node src/hub.mjs status [id] [--logs]
> node src/hub.mjs sync  [--only a,b]     # 取链接，写 发布记录.json，回填发布素材 md 的「已发布」行
> node src/hub.mjs mark    [备注] [--url 链接]   # 手动改状态（平台认不出时用）
> node src/hub.mjs adopt             # 登记一期已经发过的（不上传），按标题取链接
> node src/hub.mjs metrics [id]               # 采流量并发日报
> node src/hub.mjs followers                  # 采粉丝
> node src/hub.mjs review  [天数] [--notify]   # 看某期发布 N 天的复盘（守护进程会在第 1/3/7 天自动发）
> node src/hub.mjs weekly [--notify]          # 上周周报（守护进程每周一自动发）
> node src/hub.mjs board                      # 同步到飞书多维表格（可选）
> node src/hub.mjs daemon                     # 常驻（install-launchd.sh 装的就是它）
> ```
> 
> 配置要点（config.json）
> 
> | 项 | 说明 |
> |---|---|
> | `plugin` | `store`（默认）：用专用 Chrome 里从应用商店装的麦田发布助手 |
> | `rootPath` / `nasUrl` | 发布工程根目录；NAS 掉线或被挂到「…-1」时守护进程会自己卸掉重挂 |
> | `batches` | 上传批次。一次传太多平台会互相抢带宽导致超时，建议国内两两一批 |
> | `auto` / `manual` | 自动提交 / 等你点发布的平台 |
> | `keepAlive` | 容易掉登录的平台（视频号），定时刷一下保活 |
> | `site` | 自有站点，可选，见下 |
> | `board` | 飞书多维表格看板，可选 |
> | `web.key` | 网页口令，所有页面和接口没有口令一律 401 |
> 
> 接入你自己的站点（可选，二次开发）
> 
> 不配 `config.site` 就整块关掉，网页上不显示站点卡片，「转化」页只说明怎么接。要看转化：
> 
> 1. 发布 skill 会在 B站、YouTube、X 的链接上带 `utm_campaign=-`；你的站点记下访客第一次带来的这个参数，注册和下单时一起存。
> 2. 站点提供两个只读接口给麦田（用专用 Chrome 里的管理员登录态去调），字段见 [`src/site.mjs`](src/site.mjs) 顶部注释。
> 3. 在 `config.site` 里填站点地址和接口路径。
> 
> 作者用自己的课程站做了示例；你的站结构不同，改 `src/site.mjs` 和转化页即可。
> 
> 远程访问（可选）
> 
> `scripts/install-launchd.sh --tunnel` 会装一个 cloudflared 隧道，地址推到飞书。
> 
> - **固定域名（推荐）**：域名交给 Cloudflare 后，跑 `cloudflared tunnel login`、`cloudflared tunnel create maitian`、`cloudflared tunnel route dns maitian maitian.你的域名`，在 `config.json` 里加 `"tunnel": { "name": "maitian", "hostname": "maitian.你的域名" }`。地址永远不变，建议再在 Cloudflare Zero Trust 里给它加一层邮箱验证码登录（Access → Self-hosted 应用），然后在 `config.json` 的 `web.access` 填团队域名和应用的 AUD Tag：麦田会验证 Access 签发的登录凭证，手机上输邮箱收验证码就能进，不用再带 `?key=`。
> - **飞书验证码登录（推荐，零配置）**：`config.json` 的 `web` 里加 `"login": "feishu"`。远程打开麦田会先到登录页，点「发送验证码」，6 位码推到飞书群，输入后这台设备记住 30 天；验证码 5 分钟有效、只能用一次、错 5 次作废，60 秒内只能发一次。`?key=` 口令仍可用作备用。
> - **快速隧道（默认）**：不配 `tunnel` 时用 `https://xxx.trycloudflare.com`，不用账号，但每次重启地址都会变。
> 
> ## 手机小组件（可选）
> 
> iPhone 桌面 / 锁屏常驻显示全平台粉丝、今日涨粉、最新一期播放、站点近 7 天注册和收入，点一下打开麦田。
> 
> 1. `config.json` 的 `web` 里加 `"widgetToken": ""`（只读口令，只能读 `/api/widget` 的汇总数字）；想在小组件上显示头像和署名，再加 `"avatar": "data/avatar.jpg"`、`"owner": "你的名字"`（中号、大号还会显示最新一期封面）
> 2. 手机上登录麦田后打开 `/widget`，按页面提示装 [Scriptable](https://apps.apple.com/app/scriptable/id1405459188)、复制脚本（地址和口令已填好）。复制的是一个加载器：每次刷新从麦田的 `/api/widget/code` 拉最新的 `scripts/widget/maitian-widget.js` 来运行，以后改样式手机上自动生效，拉不到就用上次存下的那份
> 3. 桌面添加 Scriptable 小组件（小 / 中 / 大），锁屏也可以加（长条 / 圆形 / 单行），Script 选它
> 
> 另外，Safari 里「分享 → 添加到主屏幕」可以把麦田当 App 用（全屏、带麦苗图标）。
> 
> ## 数据和隐私
> 
> - `config.json`、`data/`（数据库、日志）、`chrome-profile/`（各平台登录态）都不进 git。
> - 麦田只读你自己账号的创作者后台数据，不做互动自动化、不碰别人的账号。
> - 安装向导结尾、出错通知（每天最多一次）和没接站点时的「转化」页里，有一个作者知识站和交流群的链接，带 utm 参数，只是让知识站知道访客从麦田来；麦田本身不上报任何数据。不想看到就在 `config.json` 里加 `"learnLinks": false`。
> 
> ## 作者
> 
> 我是麦当，做 0 基础 AI Agent / AI Coding 教程。麦田是照着我自己的发布流程一点点搭起来的，一边发视频一边在改。
> 
> - 📚 **知识站 [mdldm.club](https://www.mdldm.club/ai-course-promotion?utm_source=github&utm_medium=readme&utm_campaign=maitian-read

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/CzzzzzzJ/mdldm-maitian)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "CzzzzzzJ--mdldm-maitian"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "CzzzzzzJ--mdldm-maitian" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "CzzzzzzJ--mdldm-maitian"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CzzzzzzJ--mdldm-maitian" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CzzzzzzJ" AND file.name != "CzzzzzzJ--mdldm-maitian"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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
> const me = dv.page("Repos/CzzzzzzJ--mdldm-maitian");
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

> **2026-11-19** — 首次收錄
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

- [[2026-11-20|2026-11-20]] — 再次上榜，1.6k stars
- [[2026-11-19|2026-11-19]] — 首次收錄，1.5k stars
