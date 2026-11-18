---
repo: ZiChuanLan/freebie-radar
url: https://github.com/ZiChuanLan/freebie-radar
owner: ZiChuanLan
owner_type: User
language: TypeScript
license: MIT
description: "白嫖与资讯资源聚合雷达：100+个源定时采集 + AI 二审过滤假福利 + 获取方式分级隔离抽奖/试用/推广 + Telegram 即时推送"
homepage: ""
stars: 1508
stars_per_day: 302
forks: 256
open_issues: 0
created: 2026-11-12
pushed_at: 2026-11-18
first_seen: 2026-11-17
week: "2026-W47"
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
last_reviewed: 2026-11-17
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-11-21"
contributor_count: 2
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 8581
readme_length: 7778
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-17"
star_history: "2026-11-17:1282,2026-11-18:1508"
tags:
  - github
  - "category/other"
  - "lang/typescript"
aliases:
  - "freebie-radar"
  - "ZiChuanLan/freebie-radar"
---

# freebie-radar

**1.3k** stars · **321** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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

> [!summary] 一句話摘要
> 白嫖与资讯资源聚合雷达：100+个源定时采集 + AI 二审过滤假福利 + 获取方式分级隔离抽奖/试用/推广 + Telegram 即时推送

## 專案簡介

白嫖与资讯资源聚合雷达：100+个源定时采集 + AI 二审过滤假福利 + 获取方式分级隔离抽奖/试用/推广 + Telegram 即时推送

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
| Forks | 220 |
| Open Issues | 0 |
| 最後推送 | 2026-11-16 |
| 建立日期 | 2026-11-12 |
| Repo 大小 | 8.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ZiChuanLan/freebie-radar) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@hono/node-server` `fast-xml-parser` `hono` `lucide-react` `react` `react-dom` `tsx` `undici` `@tailwindcss/vite` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `playwright` `tailwindcss`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "Python" : 1
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ZiChuanLan](https://github.com/ZiChuanLan) | 48 |
> | [@fjcqv](https://github.com/fjcqv) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-15 ~ 2026-11-16）
> **活躍天數** 2 天 · **最新 commit** refactor(naming): 「实地福利」全面改名为「实物福利」

## README 摘錄

> [!info]- 展開查看原文 README
> 资源雷达 · Resource Radar
>   全网福利、黑五好价、拼车交易、开源项目与新闻资讯的多兴趣自托管聚合雷达站
>   六大内容形态分流 · 27 类分频道目录 · 统一屏蔽词省额度 · AI 语义定级 · 多路由精准推送
> 
>   
>     简体中文 · English
>   
> 
>   
>     
>     
>     
>     
>     
>   
> 
> ---
> 
> **资源雷达（Resource Radar / repo: `freebie-radar`）** 是一款轻量、开箱即用的多兴趣社区信息聚合与精准推送工作台。它从各大开发者社区、游戏平台、软件限免站、GitHub、Reddit、Bluesky、Telegram 频道及自定义 RSS 采集信息，并通过 **「规则初筛与统一屏蔽 → AI 语义定级与分流 → 分频道目录呈现 → 多路由精准推送」** 把每条内容送到它该去的位置：
> 
> - 只想纯粹蹲羊毛？首页默认 **「真福利精选」** 严格锁定 AI 验真的 `freebie`（直接白嫖 + 实操可领的有条件福利），绝不被付费好价、拼车、二手或新闻污染。
> - 想看 **黑五 VPS 好价 / 合规拼车 / 开源项目 / 重大新闻与科技资讯**？一键切换顶部兴趣频道即可浏览各自专属的下级分类、真实有效计数与图文卡片，并可分别配置互不干扰的 Telegram 专题推送路由。
> 
> ---
> 
> > 在线演示：
> 
> ---
> 
> ## 界面预览
> 
> | 工作台列表视图（多兴趣频道栏 + 跨源折叠 + 兑换码一键复制） | 三列图文卡片视图（零额外请求封面图提取 + 响应式 2列/3列网格） |
> | :---: | :---: |
> |  |  |
> 
> | 多路由精准推送（分形态/分类/获取方式/关键词定制即时或攒批路由） | AI 语义引擎（27 类分流、自适应学习与零 Token 存量重整分类） |
> | :---: | :---: |
> |  |  |
> 
> ---
> 
> ## 核心特性
> 
> ### 1. 多兴趣频道与「形态 × 领域 × 获取方式」正交分类
> - **6 大内容形态（`kind`）**：`freebie`（白嫖福利）、`deal`（特价好价·含黑五 VPS/拼车/二手出鸡）、`opensource`（开源项目）、`news`（重要新闻）、`info`（行业资讯·指南）、`noise`（纯求助/灌水噪音）。
> - **27 个垂直领域（`category`）**：覆盖 `ai`（AI 额度）、`vps`（VPS/主机）、`cloud`（云服务）、`domain`（域名/建站）、`opensource`（开源软件）、`software`（软件授权）、`dev`（开发/工程）、`design`（设计/素材）、`security`（安全/网络）、`hardware`（硬件/数码）、`media`（影音会员）、`game`（游戏）、`carpool`（拼车/合租）、`trade`（二手/交易）、`headline`（时政要闻）、`world`（国际要闻）、`finance`（经济/商业）、`stock`（股票/市场）、`tech`（科技动态）、`news`（综合资讯）、`goods`（实物/优惠）、`offline`（实物福利）、`invite`（邀请码）、`edu`（教育/考试）、`pan`（网盘资源）、`course`（网课/教程）、`other`（其它）。
> - **8 个兴趣频道与自适应下级分类**：真福利、全部白嫖、实物福利、网盘/网课、好价、开源、重要新闻、行业资讯；
>   - 「真福利 / 全部白嫖」只展现福利类目（隐藏拼车/交易/新闻要闻，网盘/网课/实物福利各自独立成频道），统计数字实时排除 `noise` 假数；
>   - 「重要新闻 / 行业资讯」自动切换为资讯栏目视角（时政要闻、国际要闻、经济/商业、股票/市场、科技前沿、AI 前沿、开发工程、开源生态、安全/漏洞、硬件数码、综合资讯）；
>   - 切换频道自动重置不兼容的形态、获取方式与价格上限，避免空屏串态。
> - **6 级获取方式（`obtain`）**：严格区分 `free`（直接白嫖）、`conditional`（有条件）、`lottery`（抽奖）、`trial`（试用/Demo）、`promo`（推广/引流）、`paid`（需付费）。
> 
> ### 2. 三层高信噪比治理（统一屏蔽 · AI 定级 · 零 Token 重整）
> - **统一屏蔽词防火墙（省额度 + 隐网页 + 拦推送）**：在「订阅与屏蔽」配置关键词、正则或分源规则，不仅隐藏网页条目、拦截推送与日报，**在采集入库送 AI 审核及历史补审前也会直接跳过**，无需在两处重复配置。
> - **AI 语义审核引擎**：支持任意 OpenAI 兼容接口，单次输出 `keep`、`kind`、`category`、`obtain`、`quality`（1–5 星）与中文理由；支持白嫖专源免审直通、追加补充规则、从收藏/关闭自动学习个人偏好。
> - **零 Token 存量分类重整**：内置「重整分类 (0 Token)」入口与 CLI，更新关键词规则后可一键将历史 `other` 条目零成本归位到细分类目。
> 
> ### 3. 三种响应式视图与零请求封面图提取
> - **单行紧凑 / 2列卡片 / 3列卡片** 一键切换并记住偏好。
> - 14 路采集器（Epic / Steam / GamerPower / CheapShark / GOG / RSS `` & `` / Telegram / LINUX DO / V2EX / B站 / 微博 / CCTV / Bluesky / 本地回环）零额外请求提取封面图，纯文本条目自动收起封面区避免网格空洞。
> 
> ### 4. 多路由精准 Telegram 推送
> - **全局策略 + 多专题路由**：支持一键新增或可视化编辑独立路由（例如：「🎁 真福利直推」「🖥 黑五/VPS 即时提醒」「📦 开源项目攒批汇总」「📰 新闻资讯早报」），每条路由可单独设定形态、分类、获取方式、关键词、最高价、最低分、即时/攒批模式与自定义前缀头。
> - **推送时机与兜底**：支持「推送前先过 AI（防误推）」与「极速抢码先推后审（后台补审后自动补推）」；提供 `strict` / `rule_fallback` / `ignore_ai` 三种 AI 兜底模式。
> - **防误推二次校验与诊断预览**：攒批发送前二次回查 DB 状态与最新屏蔽词；支持查看拦截原因分布与路由命中预览；内置夜间静默时段与多语言/时效闸门。
> 
> ### 5. 极简部署与单密码鉴权分区
> - **零外部数据库**：基于 `node:24-alpine` 原生运行 TypeScript，内置 `node:sqlite`（WAL 模式 + 内存上限调优，自动增量迁移至 Schema v30），日常运行内存  E["规则初筛与特征抽取（14 路封面图 / 兑换码 / 价格 / 双语去重指纹）"]
>   E --> F{"统一屏蔽与噪音初筛（block_rules + NOISE_TITLE）"}
>   F -->|命中屏蔽/硬噪音| D["跳过 AI 省额度并隔离"]
>   F -->|通过| M{"AI 审核分流"}
>   M -->|白嫖专源免审| A1["直标 freebie · 进精选"]
>   M -->|AI 语义定级| Q["输出 keep · kind · category · obtain · quality"]
>   Q -->|freebie / deal / opensource / info| P["Web 多频道工作台（紧凑 / 2列 / 3列）"]
>   Q -->|命中多路由规则| R["Telegram 多专题路由（即时直推 / 定时攒批 / 每日精选）"]
> ```
> 
> ---
> 
> ## 快速开始（开箱即用）
> 
> ### 方式一：Docker Compose（推荐，1 分钟跑起来）
> 
> 不需要预先安装 Node.js 或手动建表，**甚至不复制 `.env` 也可以直接启动**：
> 
> ```bash
> git clone https://github.com/ZiChuanLan/freebie-radar.git
> cd freebie-radar
> 
> # 可选：复制并编辑环境变量（设置 ADMIN_TOKEN 管理密码、Telegram 推送、AI 等）
> cp .env.example .env
> 
> # 启动服务（默认监听 http://127.0.0.1:8788）
> docker compose up -d --build
> ```
> 
> > **需要采集带 Cloudflare 护盾的站点（如 LINUX DO）？**
> > 仓库已内置可选 `cf` profile，一条命令同时拉起 FlareSolverr：
> > ```bash
> > # 在 .env 中设置 FLARESOLVERR_URL=http://flaresolverr:8191
> > docker compose --profile cf up -d --build
> > ```
> 
> 验证健康状态与日志：
> 
> ```bash
> curl http://127.0.0.1:8788/health
> # {"ok":true,"version":"0.1.0",...}
> 
> docker compose logs -f --tail 50
> ```
> 
> 数据库保存在 `./data/radar.db`，升级只需 `git pull && docker compose up -d --build`，自动完成数据库迁移，数据零丢失。
> 
> ### 方式二：源码运行（Node.js ≥ 22.5 + pnpm 10）
> 
> ```bash
> git clone https://github.com/ZiChuanLan/freebie-radar.git
> cd freebie-radar
> 
> pnpm install
> cp .env.example .env      # 按需填写 ADMIN_TOKEN / 代理 / Telegram 等
> pnpm build                # 构建前端产物到 dist/web
> pnpm start                # 自动建表迁移 + 初始化 111 个数据源 + 启动 :8788
> ```
> 
> 开发模式（前后端热更新）：
> 
> ```bash
> pnpm dev        # 后端 API :8788
> pnpm dev:web    # 前端 Vite :5173（自动代理 /api 到 8788）
> ```
> 
> ---
> 
> ## 环境变量说明（`.env`）
> 
> 所有策略配置（AI 模型/提示词/初筛开关、多路由推送/静默时段、屏蔽词、数据源启停与周期、数据保留天数）均**在网页管理区实时热修改**，`.env` 仅需关注进程级环境变量：
> 
> | 变量名 | 默认值 | 说明 |
> |---|---|---|
> | `PORT` / `HOST` | `8788` / `0.0.0.0` | HTTP 监听端口与地址 |
> | `DATABASE_PATH` | `./data/radar.db` | SQLite 路径（Docker 内固定 `/data/radar.db`） |
> | `ADMIN_TOKEN` | 留空（开放） | 管理区密码；**部署到公网强烈建议设置强密码** |
> | `FLARESOLVERR_URL` | 留空 | FlareSolverr 地址，如 `http://flaresolverr:8191` |
> | `HTTP_PROXY` / `HTTPS_PROXY` | 留空 | 采集出口代理（海外服务器可留空） |
> | `PUSH_CHANNEL` | `none` | 设为 `telegram` 启用推送 |
> | `TELEGRAM_BOT_TOKEN` | 留空 | Telegram Bot Token（`@BotFather` 获取） |
> | `TELEGRAM_CHAT_ID` | 留空 | 接收推送的个人/群组 Chat ID |
> | `TELEGRAM_PROXY` | 留空 | 仅用于 Telegram 推送的代理 |
> | `AI_BASE_URL` / `AI_API_KEY` / `AI_MODEL` | 留空 | 首次启动默认 AI 参数，之后推荐在网页「AI 引擎」修改 |
> | `INGEST_TOKEN` | 留空（禁止写入） | 给 `scripts/pw-collect.mjs` 或油猴脚本回传数据的 Bearer Token |
> | `GITHUB_TOKEN` | 留空 | 可选，将 GitHub 采集限额从 60/h 提升到 5000/h |
> | `ENABLE_SCHEDULER` | `true` | 是否开启内置采集、攒批、每日精选与清理调度 |
> | `DAILY_CRON` / `DAILY_TOP_N` | `30 8 * * *` / `12` | 每日精选生成时间与条数 |
> 
> ---
> 
> ## 登录态站点采集（知乎 / 小红书 / 小黑盒）
> 
> 这三个站点依赖浏览器登录态与前端签名，通过 `scripts/pw-collect.mjs` 使用持久化 Chrome Profile 运行，支持本机或带图形桌面的远程服务器：
> 
> - **本机回环登录服务（推荐）**：运行 `node scripts/pw-collect.mjs serve`，在网页「数据源运维」点「扫码登录」打开登录窗口扫码，登完自动抓取公开帖并回传雷达。也支持直接复制页面提供的 **Tampermonkey 油猴脚本**，无需本地安装 Node/Playwright。
> - **服务器定时脚本**：
>   ```bash
>   PROFILE_DIR=/data/profile SERVER_URL=http://127.0.0.1:8788 HEADLESS=1 INGEST_TOKEN=your_token node scripts/pw-collect.mjs
>   ```
> - **隐私边界**：服务端不保存任何 Cookie 或账号凭据，登录态仅留存在本地 `PROFILE_DIR`。
> 
> ---
> 
> ## 常用 CLI 工具
> 
> ```bash
> pnpm tsx src/server/cli.ts sources              # 查看全部 111 个数据源与最近运行状态
> pnpm tsx src/server/cli.ts collect [sourceId]   # 立即采集（不传则跑全部启用源）
> pnpm tsx src/server/cli.ts enable        # 启用指定源
> pnpm tsx src/server/cli.ts disable       # 禁用指定源
> pnpm tsx src/server/cli.ts config     # 更新指定源配置
> pnpm tsx src/server/cli.ts reclassify           # 重跑规则分类、评分与双语去重键
> pnpm tsx src/server/cli.ts ai-review [limit]    # 批量补审未审条目
> pnpm tsx src/server/cli.ts daily [--dry-run]    # 生成或预览每日精选
> pnpm tsx src/server/cli.ts digests              # 查看历史每日精选日期
> pnpm tsx src/server/cli.ts stats                # 查看分类统计
> pnpm tsx src/server/cli.ts diagnose             # 推送筛选与命中体检
> pnpm tsx src/server/cli.ts obtain               # 按获取方式重算统计
> ```
> 
> ---
> 
> ## 目录结构与延伸文档
> 
> ```text
> src/
> ├── server/
> │   ├── collectors/    # 采集器与调度（SEEDS / dispatchFresh / 封面图提取）
> │   ├── enrich/        # 归一化、双语去重、27 类规则、形态分流(kind)、获取方式(obtain)、AI 队列与屏蔽词
> │   ├── push.ts        # 多路由分流、Telegram 即时/攒批二次校验、静默时段、预览诊断
> │   ├── digest.ts      # 每日精选生成与格式化
> │   ├── retention.ts   # 数据保留策略与自动清理
> │   ├── ai-admin.ts    # AI 管理、历史补审与零 Token 存量重分类
> │   └── routes.ts      # Hono REST API 与单密码鉴权分区
> └── web/               # React 19 + Vite + Tailwind v4 工作台（紧凑 / 2列 / 3列视图 + 多路由编辑器）
> ```
> 
> 延伸文档见 `docs/`：
> - [`docs/data-sources.md`](docs/data-sources.md) — 数据源清单与可达性说明
> - [`docs/obtain.md`](docs/obtain.md) — 获取方式（`free` / `conditional` / `lottery` / `trial` / `promo` / `paid`）分级体系
> - [`docs/ai.md`](docs/ai.md) — AI 语义审核口径与误判治理
> - [`docs/push.md`](docs/push.md) — 推送分级分流、去重与静默时段
> - [`CHANGELOG.md`](CHANGELOG.md) — 版本变更记录
> 
> ---
> 
> ## 免责与许可
> 
> - 本项目仅对公开网页与接口信息进行聚合、筛选与去重，不存储或传播受版权保护的内容，不提供账号共享；请遵守各目标站点的服务条款并控制合理抓取频率。
> - 基于 [MIT License](LICENSE) 开源。如果这个项目帮到了你，欢迎点个 ⭐ Star 支持！
> - 致谢 [LinuxDo](https://linux.do) 以及所有反馈问题、补充源适配与参与改进的开发者。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/ZiChuanLan/freebie-radar)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ZiChuanLan--freebie-radar"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ZiChuanLan--freebie-radar" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "ZiChuanLan--freebie-radar"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ZiChuanLan--freebie-radar" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ZiChuanLan" AND file.name != "ZiChuanLan--freebie-radar"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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
> const me = dv.page("Repos/ZiChuanLan--freebie-radar");
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

> **2026-11-17** — 首次收錄
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

- [[2026-11-18|2026-11-18]] — 再次上榜，1.5k stars
- [[2026-11-17|2026-11-17]] — 首次收錄，1.3k stars
