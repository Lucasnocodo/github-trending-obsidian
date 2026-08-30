---
repo: XiaoDuoYa/codex-with-chatgpt
url: https://github.com/XiaoDuoYa/codex-with-chatgpt
owner: XiaoDuoYa
owner_type: User
language: TypeScript
license: MIT
description: "ChatGPT thinks. Codex works. Use ChatGPT as the planning brain while keeping the Codex harness."
homepage: ""
stars: 1007
stars_per_day: 1007
forks: 117
open_issues: 2
created: 2026-08-28
pushed_at: 2026-08-30
first_seen: 2026-08-30
week: "2026-W36"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-30
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-02"
contributor_count: 5
engagement: "medium"
issue_close_rate: 85
repo_size_kb: 134
readme_length: 6980
bus_factor: 3
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-30"
star_history: "2026-08-30:1007"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/ai_agents"
  - "topic/chatgpt"
  - "topic/codex"
  - "topic/mcp"
  - "topic/model_context_protocol"
aliases:
  - "codex-with-chatgpt"
  - "XiaoDuoYa/codex-with-chatgpt"
---

# codex-with-chatgpt

**1.0k** stars · **1.0k** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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

`ai-agents` `chatgpt` `codex` `mcp` `model-context-protocol` `oauth`

> [!summary] 一句話摘要
> ChatGPT thinks. Codex works. Use ChatGPT as the planning brain while keeping the Codex harness.

## 專案簡介

ChatGPT thinks. Codex works. Use ChatGPT as the planning brain while keeping the Codex harness.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
| Forks | 117 |
| Open Issues | 2 |
| Issue 解決率 | 85% (11 closed) |
| 最後推送 | 2026-08-30 |
| 建立日期 | 2026-08-28 |
| Repo 大小 | 134 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XiaoDuoYa/codex-with-chatgpt) |
| Topics | `ai-agents` `chatgpt` `codex` `mcp` `model-context-protocol` `oauth` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@modelcontextprotocol/sdk` `commander` `express` `ignore` `zod` `@types/express` `@types/node` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EdisonJwa](https://github.com/EdisonJwa) | 1 |
> | [@rtxmythically](https://github.com/rtxmythically) | 1 |
> | [@vetrovk](https://github.com/vetrovk) | 1 |
> | [@catball912](https://github.com/catball912) | 1 |
> | [@XiaoDuoYa](https://github.com/XiaoDuoYa) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-29 ~ 2026-08-30）
> **活躍天數** 2 天 · **最新 commit** Offer an optional Cloudflare named hostname so ChatGPT connectors survive restarts.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/XiaoDuoYa/codex-with-chatgpt/issues/5) | 在已有多轮对话sessions的项目无法激活配对码 `跟进中` | 1 | 2 |
> | [#22](https://github.com/XiaoDuoYa/codex-with-chatgpt/issues/22) | Optional fixed Cloudflare domain (keep Quick Tunnel as defau `跟进中` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex with ChatGPT
> 
> > ChatGPT thinks. Codex works.
> > ChatGPT 负责思考，Codex 负责干活。
> 
> ## The problem · 解决什么问题
> 
> **中文** — ChatGPT 付费订阅的网页版额度大量闲置，Codex 却在消耗紧张的
> API 额度做规划和 Review。本项目把"思考"交给你已付费的网页版 ChatGPT，
> Codex 只负责执行。不用 API Key、不搞逆向代理——官方网页 + 只读 MCP 桥接。
> 
> **EN** — ChatGPT Plus/Pro web quota sits idle while your coding agent burns
> scarce API/Codex tokens on planning and review. This project moves the
> thinking to the subscription you already pay for; Codex only executes.
> No API keys, no reverse proxy — official web UI plus a read-only MCP bridge.
> 
> ## What it is · 这是什么
> 
> **中文** — 把 ChatGPT 网页版变成 Codex 编码会话的"规划与审查大脑"，执行权
> 完全保留在 Codex 手里。你的仓库永远不会被上传：ChatGPT 通过一条安全的、
> OAuth 保护的**只读** MCP 连接，按需读取当前工作区里它真正需要的那几行代码。
> 
> **EN** — Use the ChatGPT web app as the planning and review brain for your
> Codex coding sessions, while Codex keeps full ownership of execution. Your
> repository is never uploaded: ChatGPT reads exactly the lines it needs through
> a secure, OAuth-protected, **read-only** MCP connection to your current
> workspace.
> 
> Detailed docs below are in English · 详细中文文档见 **[README.zh-CN.md](README.zh-CN.md)**
> 
> ## One-paste install · 一段话安装
> 
> **中文** — 不懂 git、Node、终端？完全不需要懂。把下面这段话原样复制给你的
> 编码 Agent（Codex），然后去倒杯咖啡：
> 
> ```text
> 请帮我完整安装并配置 Codex with ChatGPT，全程自动，我是不懂技术的小白，
> 所有事情你自己做：
> 
> 1. 环境自检：需要 git 和 Node.js ≥ 20，缺什么就自动安装
>   （macOS 用 Homebrew，Windows 用 winget），同时安装 cloudflared。
> 2. 下载：把 https://github.com/XiaoDuoYa/codex-with-chatgpt 克隆到
>    ~/codex-with-chatgpt（已存在就 git pull 更新）。
> 3. 构建：在该目录里执行 corepack pnpm install 和 corepack pnpm build。
> 4. 安装 Skill：把仓库里的 skill/SKILL.md 复制到
>    ~/.codex/skills/codex-with-chatgpt/SKILL.md，并把文件中
>    "The codex-with-chatgpt checkout lives at:" 那一行的路径改成实际克隆路径。
> 5. 首次配置：按 SKILL.md 里的 first-time setup 流程执行
>   （运行 c2c setup，用内置浏览器打开 ChatGPT 配置连接器并输入配对码）。
>    全程只用内置浏览器，禁止打开任何第三方浏览器。
> 6. 只有遇到需要我登录（ChatGPT / Cloudflare）、验证码或两步验证时才叫我，
>    而且一次只告诉我一个动作。
> 7. 完成后给我看 ✓ 清单，并确认文件读取测试通过。我不懂 MCP、OAuth、
>    Tunnel、端口这些词，不要向我解释；出了问题先自己修。
> ```
> 
> **EN** — Don't know git, Node, or terminals? You don't need to. Copy the
> paragraph below, paste it to your coding agent (Codex), and go grab a coffee:
> 
> ```text
> Please install and configure "Codex with ChatGPT" for me, fully automatically.
> I am a non-technical user — do everything yourself:
> 
> 1. Check the environment: git and Node.js >= 20 must be available. Install
>    anything missing yourself (macOS: Homebrew, Windows: winget). Also install
>    cloudflared.
> 2. Download: clone https://github.com/XiaoDuoYa/codex-with-chatgpt into
>    ~/codex-with-chatgpt (if it already exists, git pull to update).
> 3. Build: inside that folder run `corepack pnpm install` then `corepack pnpm build`.
> 4. Install the Skill: copy skill/SKILL.md to
>    ~/.codex/skills/codex-with-chatgpt/SKILL.md, and update the line
>    "The codex-with-chatgpt checkout lives at:" to the actual clone path.
> 5. First-time setup: follow the SKILL.md "first-time setup" workflow
>    (run c2c setup, configure the ChatGPT connector in the BUILT-IN browser,
>    enter the pairing code). Never open a third-party browser.
> 6. Only interrupt me for logins (ChatGPT / Cloudflare), CAPTCHAs or 2FA —
>    and give me exactly ONE action at a time.
> 7. When done, show me the ✓ checklist and confirm the file-read test passed.
>    I don't know what MCP, OAuth, tunnels or ports are. Don't explain them.
>    If anything breaks, fix it yourself first.
> ```
> 
> **Updates · 更新** — The Skill checks GitHub once a day and updates itself when a
> new version is released; no action needed. You can also say "更新 Codex with ChatGPT"
> anytime. / Skill 每天自动检查一次 GitHub，有新版本会自动更新，无需任何操作；
> 也可以随时对 Codex 说"更新 Codex with ChatGPT"。
> 
> ---
> 
> *The sections below are in English. 以下详细内容为英文，中文完整版见
> [README.zh-CN.md](README.zh-CN.md)。*
> 
> ## Install → Setup → Use (manual)
> 
> 1. Install the Codex Skill: copy `skill/` to `~/.codex/skills/codex-with-chatgpt/`.
> 2. Tell Codex: **"Set up Codex with ChatGPT."** (中文: "使用 Codex with ChatGPT 完成首次配置。")
> 3. Use Codex normally: **"Use Codex with ChatGPT to implement XXX."**
> 
> That's the whole manual. You don't need to know what MCP, OAuth, tunnels,
> ports or localhost are — Codex configures everything automatically and you
> just see:
> 
> ```
> Codex with ChatGPT
> 
> ✓ Project detected
> ✓ Workspace Bridge started
> ✓ Secure connection established
> ✓ ChatGPT connected
> ✓ File read test passed
> 
> Ready.
> ```
> 
> The only step that may need you: logging into ChatGPT (and, if you want a
> stable hostname, logging into Cloudflare once).
> 
> ### Optional stable hostname
> 
> The default public address is a temporary Cloudflare URL. It changes when the
> bridge restarts, and Codex repairs ChatGPT by deleting that workspace's
> connector and adding it again.
> 
> If you have a Cloudflare account and a domain already on Cloudflare, first-time
> setup (and the next coding session, once) will ask whether you want a stable
> hostname such as `c2c-.your-domain.com`. That path opens a browser so
> you can authorize Cloudflare. After that, the ChatGPT connector keeps working
> across restarts. If you skip it, or login fails, Codex stays on the temporary
> address — same features, just a slower repair.
> 
> Credentials stay in the OS app state directory, not in the project.
> 
> ## How it works
> 
> ```
>              ┌───────────────────────────┐
>              │       ChatGPT Web         │
>              │  Reason / Plan / Review   │
>              └──────────┬──────────▲─────┘
>                         │          │
>                MCP      │          │ Computer Use
>             Data Plane  │          │ Control Plane ( dist/, exposes the `c2c` bin
> pnpm test           # vitest: 76 tests (path security, OAuth, pairing, MCP e2e)
> 
> c2c setup           # bridge + tunnel + pairing code, all in one
> c2c sandbox-allow   # whitelist the settings dir in Codex (macOS + Windows)
> c2c status / doctor / pair / unpair / logs / stop
> ```
> 
> Requirements: Node.js >= 20, git. `cloudflared` for the public connection
> (auto-detected; the Skill installs it for you).
> 
> Docs: [architecture](docs/architecture.md) · [protocol](docs/protocol.md) ·
> [security](docs/security.md) · [troubleshooting](docs/troubleshooting.md)
> 
> ## Project layout
> 
> ```
> src/
>   bridge/     loopback HTTP server, port recovery, admin API
>   mcp/        8 read-only tools, stateless Streamable HTTP
>   auth/       OAuth 2.1 (PKCE, DCR, refresh rotation, revocation)
>   pairing/    one-time pairing codes (CSPRNG, TTL, rate limits)
>   workspace/  path containment, sensitive-file policy, search, git
>   tunnel/     TunnelProvider abstraction + Cloudflare Quick/Named Tunnel
>   execution/  execution records for the review loop
>   process/    daemon lifecycle
>   cli/        the c2c CLI
> skill/        the Codex Skill (the real UX layer)
> tests/        unit + integration tests
> docs/         architecture / protocol / security / troubleshooting
> ```
> 
> ## Status & disclaimer
> 
> V1. Verified end-to-end: bridge, OAuth + pairing, public tunnel, ChatGPT
> connector setup, zero-touch first-run experience.
> 
> **Unofficial community project. Not affiliated with or endorsed by OpenAI.**
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]]

[GitHub](https://github.com/XiaoDuoYa/codex-with-chatgpt)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "XiaoDuoYa--codex-with-chatgpt"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "XiaoDuoYa--codex-with-chatgpt" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "XiaoDuoYa--codex-with-chatgpt"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XiaoDuoYa--codex-with-chatgpt" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XiaoDuoYa" AND file.name != "XiaoDuoYa--codex-with-chatgpt"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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
> const me = dv.page("Repos/XiaoDuoYa--codex-with-chatgpt");
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

> **2026-08-30** — 首次收錄
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

- [[2026-08-30|2026-08-30]] — 首次收錄，1.0k stars
