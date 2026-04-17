---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 8693
stars_per_day: 790
forks: 983
open_issues: 82
created: 2026-04-05
pushed_at: 2026-04-16
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "為 AI 代理提供一個智能的知識大腦，能自動吸收和整理資訊。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-15"
contributor_count: 3
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 4505
readme_length: 9657
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572,2026-04-12:4848,2026-04-12:4867,2026-04-13:6382,2026-04-14:7448,2026-04-15:7864,2026-04-16:8341,2026-04-17:8693"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "為 AI 代理提供一個智能的知識大腦，能自動吸收和整理資訊。"
---

# gbrain

**8.7k** stars · **790** stars/天 · 建立 11 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/garrytan--gbrain");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 為 AI 代理提供一個智能的知識大腦，能自動吸收和整理資訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (790 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要自動化知識管理並提升工作效率的專業人士和團隊。
> **一句話重點** GBrain 透過自動化的知識管理，讓 AI 代理能夠在使用者不斷增長的需求下，持續進化和提升智能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "garrytan--gbrain" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> GBrain 提供了一個基於 PGLite 的個人知識大腦，能夠自動化吸收和整理資訊，並隨著使用者的需求不斷增長。

## 專案簡介

GBrain 是一個為 AI 代理設計的知識管理系統，能夠自動吸收會議、電子郵件、社交媒體等多種來源的資訊，並將其整理成可查詢的知識庫。使用者只需在安裝後回答 API 金鑰問題，GBrain 就能在 30 分鐘內完成設定，並在 2 秒內啟動資料庫。其核心機制是透過信號檢測器捕捉來自不同來源的訊息，然後進行資料查詢和更新，最終形成一個持續增長的知識體系。最關鍵的 CLI 指令包括 `gbrain init` 和 `gbrain import ~/notes/`，分別用於初始化本地大腦和導入筆記。GBrain 的一句話賣點是：它能讓你的 AI 代理在你睡覺時變得更聰明。技術上，GBrain 使用 TypeScript 和 PLpgSQL，並依賴 PGLite 或 Supabase 來提供後端支援，這使得它的部署非常輕量且快速。

與其他類似工具相比，GBrain 的獨特之處在於它的「技能」系統，這些技能是以 Markdown 文件的形式存在，能夠靈活應對各種知識工作需求。這種設計使得 GBrain 能夠在不依賴外部 API 的情況下，進行高效的資料查詢和更新。使用者可以通過 `gbrain query` 指令進行多層次的查詢，並獲得結合上下文的回應。GBrain 的設計使其能夠自動化許多繁瑣的知識管理任務，並且隨著使用的深入，系統的智能程度會不斷提升。這使得 GBrain 特別適合需要快速整理和查詢大量資訊的專業人士和團隊。

**技術棧**：`TypeScript` · `PLpgSQL` · `Shell`

## 重點功能

- 自動化資料吸收 — 能夠從會議、電子郵件和社交媒體自動吸收資料，並進行整理。
- 多層次查詢 — 使用 `gbrain query` 指令進行複雜的資料查詢，並提供上下文回應。
- 技能系統 — 透過 Markdown 文件定義技能，靈活應對各種知識工作需求。
- 即時資料庫啟動 — 使用 PGLite，資料庫啟動時間僅需 2 秒。
- 自動化記錄和報告 — 定期生成報告和更新，讓使用者隨時掌握最新資訊。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/garrytan/gbrain.git && cd gbrain && bun install
```
2. 初始化本地大腦
```bash
gbrain init
```
3. 導入筆記資料
```bash
gbrain import ~/notes/
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 GBrain 並初始化本地大腦",
  "指令": "gbrain query \"what themes show up across my notes?\"",
  "預期輸出": "3 results (hybrid search, 0.12s):\n1. concepts/do-things-that-dont-scale (score: 0.94)\n2. originals/founder-mode-observation (score: 0.87)\n3. concepts/build-something-people-want (score: 0.81)"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 8693 stars（790/天），forks 983（11.3%），顯示出強烈的社群興趣。Garry Tan 是 Y Combinator 的總裁兼 CEO，這個專案是他為自己的 AI 代理開發的，解決了以往 AI 代理在知識管理上的不足。之前的解決方案往往需要手動整理資料，效率低下，而 GBrain 則能自動化這一過程。近期的推廣活動和社交媒體討論也可能促進了其曝光率。高達 11.3% 的 forks/stars 比率顯示出許多人在積極修改和使用這個專案，表明其實用性和潛在的擴展性。

## 適合誰使用

**目標受眾**：需要自動化知識管理並提升工作效率的專業人士和團隊。

> [!example] 使用場景
> - 產品經理用它來自動整理會議紀錄和相關資料，因為這樣能節省大量的手動整理時間，讓他們能專注於決策。
> - 研究人員用它來整合來自不同來源的研究資料，因為 GBrain 能夠自動更新和引用資料，提升研究效率。
> - 創業者用它來追蹤市場趨勢和競爭對手的動態，因為它能夠自動分析社交媒體和新聞，提供即時的市場洞察。

## 架構分析

GBrain 採用模組化設計，核心功能由 TypeScript 實現，並使用 PLpgSQL 進行資料庫操作。資料流從信號檢測開始，捕捉來自會議、電子郵件等的資訊，然後通過 GBrain 的查詢系統進行處理，最終更新知識庫。這種設計使得系統能夠在不依賴外部 API 的情況下，進行高效的資料查詢和更新。

選擇 PGLite 作為資料庫的原因在於其輕量和快速的特性，這使得 GBrain 能夠在短時間內啟動並運行。相對於使用更重的資料庫系統，這樣的選擇在資源使用上更為高效，但可能在處理大型資料集時遇到瓶頸。整體架構的擴展性良好，但在面對大量資料時，可能需要進一步的優化和調整。

## 優缺點分析

> [!success] 優點
> - 自動化知識管理，節省時間和精力。
> - 靈活的技能系統，能夠適應不同的工作需求。
> - 快速的資料庫啟動時間，提升使用體驗。

> [!danger] 缺點
> - 需要一定的技術背景來進行初始設定。
> - 對於大型資料集的處理效能可能有限。
> - 目前僅支援特定的資料庫選項。

> [!warning] 注意事項
> - 目前僅支援 PGLite 或 Supabase 作為資料庫。
> - 對於大型資料集的處理效能可能受到限制，特別是當資料量超過數千頁時。
> - 需要使用者具備一定的技術背景來進行初始設定和技能定義。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要專注於資料的長期存儲和查詢，而 GBrain 更加強調自動化和智能化的知識管理。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 提供了更強的程式碼管理功能，而 GBrain 更專注於知識的自動吸收和整理。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供了更靈活的筆記管理功能，而 GBrain 則強調自動化和即時的知識更新。 |

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
| Forks | 983 |
| Open Issues | 82 |
| Issue 解決率 | 10% (9 closed) |
| 最後推送 | 2026-04-16 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 4.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@electric-sql/pglite` `@modelcontextprotocol/sdk` `gray-matter` `marked` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "PLpgSQL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 65 |
> | [@anurag](https://github.com/anurag) | 1 |
> | [@franmaranchello](https://github.com/franmaranchello) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個 commit 和 issue 更新。
**連結**：[文件](https://github.com/garrytan/gbrain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-15）
> **活躍天數** 4 天 · **最新 commit** fix: sync pipeline, extract, features, autopilot (v0.10.1) (#129)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/garrytan/gbrain/issues/32) | Support PGLite with local file as DB | 2 | 1 |
> | [#94](https://github.com/garrytan/gbrain/issues/94) | Plans for a Claude Code-native mode (no API keys, like gstac | 1 | 0 |
> | [#91](https://github.com/garrytan/gbrain/issues/91) | vector serialization bug during migration to supabase `bug` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GBrain
> 
> Your AI agent is smart but forgetful. GBrain gives it a brain.
> 
> Built by the President and CEO of Y Combinator to run his actual AI agents. The production brain powering his OpenClaw and Hermes deployments: **17,888 pages, 4,383 people, 723 companies**, 21 cron jobs running autonomously, built in 12 days. The agent ingests meetings, emails, tweets, voice calls, and original ideas while you sleep. It enriches every person and company it encounters. It fixes its own citations and consolidates memory overnight. You wake up and the brain is smarter than when you went to bed.
> 
> GBrain is those patterns, generalized. 25 skills. Install in 30 minutes. Your agent does the work. As Garry's personal agent gets smarter, so does yours.
> 
> > **~30 minutes to a fully working brain.** Database ready in 2 seconds (PGLite, no server). You just answer questions about API keys.
> 
> 
> ## Install
> 
> 
> ### Identity and setup
> 
> | Skill | What it does |
> |-------|-------------|
> | **soul-audit** | 6-phase interview generating SOUL.md (agent identity), USER.md (user profile), ACCESS_POLICY.md (4-tier privacy), HEARTBEAT.md (operational cadence). |
> | **setup** | Auto-provision PGLite or Supabase. First import. GStack detection. |
> | **migrate** | Universal migration from Obsidian, Notion, Logseq, markdown, CSV, JSON, Roam. |
> | **briefing** | Daily briefing with meeting context, active deals, and citation tracking. |
> 
> 
> ### On an agent platform (recommended)
> 
> GBrain is designed to be installed and operated by an AI agent. If you don't have one running yet:
> 
> - **[OpenClaw](https://openclaw.ai)** ... Deploy [AlphaClaw on Render](https://render.com/deploy?repo=https://github.com/chrysb/alphaclaw) (one click, 8GB+ RAM)
> - **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** ... Deploy on [Railway](https://github.com/praveen-ks-2001/hermes-agent-template) (one click)
> 
> Paste this into your agent:
> 
> ```
> Retrieve and follow the instructions at:
> https://raw.githubusercontent.com/garrytan/gbrain/master/INSTALL_FOR_AGENTS.md
> ```
> 
> That's it. The agent clones the repo, installs GBrain, sets up the brain, loads 25 skills, and configures recurring jobs. You answer a few questions about API keys. ~30 minutes.
> 
> 
> ### Standalone CLI (no agent)
> 
> ```bash
> git clone https://github.com/garrytan/gbrain.git && cd gbrain && bun install && bun link
> gbrain init                     # local brain, ready in 2 seconds
> gbrain import ~/notes/          # index your markdown
> gbrain query "what themes show up across my notes?"
> ```
> 
> ```
> 3 results (hybrid search, 0.12s):
> 
> 1. concepts/do-things-that-dont-scale (score: 0.94)
>    PG's argument that unscalable effort teaches you what users want.
>    [Source: paulgraham.com, 2013-07-01]
> 
> 2. originals/founder-mode-observation (score: 0.87)
>    Deep involvement isn't micromanagement if it expands the team's thinking.
> 
> 3. concepts/build-something-people-want (score: 0.81)
>    The YC motto. Connected to 12 other brain pages.
> ```
> 
> 
> ### MCP server (Claude Code, Cursor, Windsurf)
> 
> GBrain exposes 30+ MCP tools via stdio:
> 
> ```json
> {
>   "mcpServers": {
>     "gbrain": { "command": "gbrain", "args": ["serve"] }
>   }
> }
> ```
> 
> Add to `~/.claude/server.json` (Claude Code), Settings > MCP Servers (Cursor), or your client's MCP config.
> 
> 
> ### Remote MCP (Claude Desktop, Cowork, Perplexity)
> 
> ```bash
> ngrok http 8787 --url your-brain.ngrok.app
> bun run src/commands/auth.ts create "claude-desktop"
> claude mcp add gbrain -t http https://your-brain.ngrok.app/mcp -H "Authorization: Bearer TOKEN"
> ```
> 
> Per-client guides: [`docs/mcp/`](docs/mcp/DEPLOY.md). ChatGPT requires OAuth 2.1 (not yet implemented).
> 
> 
> ## The 25 Skills
> 
> GBrain ships 25 skills organized by `skills/RESOLVER.md`. The resolver tells your agent which skill to read for any task.
> 
> [Skill files are code.](https://x.com/garrytan/status/2042925773300908103) They're the most powerful way to get knowledge work done. A skill file is a fat markdown document that encodes an entire workflow: when to fire, what to check, how to chain with other skills, what quality bar to enforce. The agent reads the skill and executes it. Skills can also call deterministic TypeScript code bundled in GBrain (search, import, embed, sync) for the parts that shouldn't be left to LLM judgment. [Thin harness, fat skills](docs/ethos/THIN_HARNESS_FAT_SKILLS.md): the intelligence lives in the skills, not the runtime.
> 
> 
> ### Always-on
> 
> | Skill | What it does |
> |-------|-------------|
> | **signal-detector** | Fires on every message. Spawns a cheap model in parallel to capture original thinking and entity mentions. The brain compounds on autopilot. |
> | **brain-ops** | Brain-first lookup before any external API. The read-enrich-write loop that makes every response smarter. |
> 
> 
> ### Content ingestion
> 
> | Skill | What it does |
> |-------|-------------|
> | **ingest** | Thin router. Detects input type and delegates to the right ingestion skill. |
> | **idea-ingest** | Links, articles, tweets become brain pages with analysis, author people pages, and cross-linking. |
> | **media-ingest** | Video, audio, PDF, books, screenshots, GitHub repos. Transcripts, entity extraction, backlink propagation. |
> | **meeting-ingestion** | Transcripts become brain pages. Every attendee gets enriched. Every company gets a timeline entry. |
> 
> 
> ### Brain operations
> 
> | Skill | What it does |
> |-------|-------------|
> | **enrich** | Tiered enrichment (Tier 1/2/3). Creates and updates person/company pages with compiled truth and timelines. |
> | **query** | 3-layer search with synthesis and citations. Says "the brain doesn't have info on X" instead of hallucinating. |
> | **maintain** | Periodic health: stale pages, orphans, dead links, citation audit, back-link enforcement, tag consistency. |
> | **citation-fixer** | Scans pages for missing or malformed citations. Fixes format to match the standard. |
> | **repo-architecture** | Where new brain files go. Decision protocol: primary subject determines directory, not format. |
> | **publish** | Share brain pages as password-protected HTML. Zero LLM calls. |
> | **data-research** | Structured data research with parameterized YAML recipes. Extract investor updates, expenses, company metrics from email. |
> 
> 
> ### Operational
> 
> | Skill | What it does |
> |-------|-------------|
> | **daily-task-manager** | Task lifecycle with priority levels (P0-P3). Stored as searchable brain pages. |
> | **daily-task-prep** | Morning prep: calendar lookahead with brain context per attendee, open threads, task review. |
> | **cron-scheduler** | Schedule staggering (5-min offsets), quiet hours (timezone-aware with wake-up override), idempotency. |
> | **reports** | Timestamped reports with keyword routing. "What's the latest briefing?" finds it instantly. |
> | **cross-modal-review** | Quality gate via second model. Refusal routing: if one model refuses, silently switch. |
> | **webhook-transforms** | External events (SMS, meetings, social mentions) converted into brain pages with entity extraction. |
> | **testing** | Validates every skill has SKILL.md with frontmatter, manifest coverage, resolver coverage. |
> | **skill-creator** | Create new skills following the conformance standard. MECE check against existing skills. |
> 
> 
> ### Conventions
> 
> Cross-cutting rules in `skills/conventions/`:
> - **quality.md** ... citations, back-links, notability gate, source attribution
> - **brain-first.md** ... 5-step lookup before any external API call
> - **model-routing.md** ... which model for which task
> - **test-before-bulk.md** ... test 3-5 items before any batch operation
> - **cross-modal.yaml** ... review pairs and refusal routing chain
> 
> 
> ## How It Works
> 
> ```
> Signal arrives (meeting, email, tweet, link)
>   -> Signal detector captures ideas + entities (parallel, never blocks)
>   -> Brain-ops: check the brain first (gbrain search, gbrain get)
>   -> Respond with full context
>   -> Write: update brain pages with new information + citations
>   -> Sync: gbrain indexes changes for next query
> ```
> 
> Every cycle adds knowledge. The agent enriches a pers

## 延伸閱讀

相關概念：[[RAG]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/garrytan/gbrain)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "garrytan--gbrain" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "garrytan--gbrain" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "garrytan--gbrain" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "garrytan" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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

> **2026-04-11** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 再次上榜，4.8k stars
- [[2026-04-11|2026-04-11]] — 首次收錄，2.5k stars
