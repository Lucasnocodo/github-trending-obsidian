---
repo: 0xwilliamortiz/openclaude-improved
url: https://github.com/0xwilliamortiz/openclaude-improved
owner: 0xwilliamortiz
owner_type: User
language: TypeScript
license: NOASSERTION
description: "runs anywhere. uses anything"
homepage: ""
stars: 562
stars_per_day: 141
forks: 80
open_issues: 0
created: 2026-07-26
pushed_at: 2026-07-26
first_seen: 2026-07-31
week: "2026-W31"
month: "2026-07"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-31
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-07"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 10541
readme_length: 9274
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-31"
star_history: "2026-07-31:562"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/agentic_ai"
  - "topic/ai"
  - "topic/ai_agent"
  - "topic/ai_coding"
  - "topic/ai_coding_agent"
aliases:
  - "openclaude-improved"
  - "0xwilliamortiz/openclaude-improved"
---

# openclaude-improved

**562** stars · **141** stars/天 · 建立 4 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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

`agentic-ai` `ai` `ai-agent` `ai-coding` `ai-coding-agent` `ai-coding-agents` `ai-coding-assistant` `anthropic` `claude` `claude-code` `cli` `coding-agent` `gemini` `gemini-ai` `gemini-cli` `llm` `mcp` `model-context-protocol` `openrouter`

> [!summary] 一句話摘要
> runs anywhere. uses anything

## 專案簡介

runs anywhere. uses anything

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
| Forks | 80 |
| Open Issues | 0 |
| 最後推送 | 2026-07-26 |
| 建立日期 | 2026-07-26 |
| Repo 大小 | 10.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/0xwilliamortiz/openclaude-improved) |
| Topics | `agentic-ai` `ai` `ai-agent` `ai-coding` `ai-coding-agent` `ai-coding-agents` `ai-coding-assistant` `anthropic` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@0xwilliamortiz](https://github.com/0xwilliamortiz) | 3 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-26 ~ 2026-07-26）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> ### OpenClaude — Improved Version
> 
> **runs anywhere. uses anything.**
> 
> An open-source coding agent for the CLI. Cloud APIs, gateways, and local models —
> same tools, same agents, same workflow.
> 
> [](LICENSE)
> 
> **[Install](#install)** · **[Quick start](#quick-start)** · **[Providers](#providers)** · **[Sessions](#sessions)** · **[Config](#config)** · **[Docs](#docs)**
> 
> ---
> 
> ## Install
> 
> Built from source. Windows examples below; macOS and Linux are identical minus the
> shell syntax.
> 
> **Prerequisites** — Node `>=22` (enforced by `engines.node`) and Bun.
> 
> ```powershell
> node --version
> bun --version
> ```
> 
> No Bun? `winget install Oven-sh.Bun` or [bun.sh](https://bun.sh).
> 
> **Build and link**
> 
> ```powershell
> cd openclaude-main
> bun install
> bun run build
> npm install -g .
> openclaude
> ```
> 
> That's it — `openclaude` is now on your PATH.
> 
> ---
> 
> ## Quick start
> 
> Run `/provider` inside OpenClaude for guided setup with saved profiles — this is the
> recommended path. Credentials land in `.openclaude-profile.json`.
> 
> Prefer env vars? Pick one:
> 
> OpenAI
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_API_KEY="sk-..."
> $env:OPENAI_MODEL="gpt-4o"
> openclaude
> ```
> 
> Ollama — local, no key
> 
> ```powershell
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_BASE_URL="http://localhost:11434/v1"
> $env:OPENAI_MODEL="qwen2.5-coder:7b"
> openclaude
> ```
> 
> OpenClaude talks to Ollama's native chat API and requests a 32768-token window per
> request, so same-session history isn't silently trimmed by the OpenAI-compat shim.
> Override with `OPENCLAUDE_OLLAMA_NUM_CTX` or `OLLAMA_CONTEXT_LENGTH`.
> 
> GitHub Models
> 
> Run `/onboard-github` inside OpenClaude. Interactive, credentials saved.
> 
> macOS / Linux syntax
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-...
> export OPENAI_MODEL=gpt-4o
> openclaude
> ```
> 
> > Project `.env` files are **not** auto-loaded. Use `--provider-env-file .env` for
> > provider vars, or export runtime knobs from your shell.
> 
> ---
> 
> ## Providers
> 
> | Provider | Setup | Key detail |
> |---|---|---|
> | **OpenAI-compatible** | `/provider` · env | Any `/v1` server — OpenRouter, DeepSeek, Groq, Mistral, LM Studio |
> | **Ollama** | `/provider` · env | Local, no API key |
> | **Gemini** | `/provider` · env | API key only |
> | **GitHub Models** | `/onboard-github` | Saved credentials |
> | **Codex / Codex OAuth** | `/provider` | Browser sign-in or existing Codex CLI auth |
> | **Gitlawb Opengateway** | default · `/provider` | Startup default on fresh installs; [get a key](https://gitlawb.com/opengateway/keys) |
> | **Bedrock · Vertex · Foundry** | env | Anthropic-family routes |
> 
> Full provider list (12 more)
> 
> | Provider | Endpoint / key | Default model |
> |---|---|---|
> | Z.AI GLM Coding Plan | `api.z.ai/api/coding/paas/v4` · `OPENAI_API_KEY` | `glm-5.2` |
> | AI/ML API | `api.aimlapi.com/v1` · `AIMLAPI_API_KEY` | `gpt-4o` |
> | Hicap | `api-key` auth, Responses mode for `gpt-*` | — |
> | Fireworks AI | `FIREWORKS_API_KEY` | 276 curated models |
> | LongCat | `api.longcat.chat/openai/v1` · `LONGCAT_API_KEY` | `LongCat-2.0` |
> | ClinePass | `api.cline.bot/api/v1` · `CLINE_API_KEY` | 5h / weekly / monthly caps |
> | OpenCode Zen | `opencode.ai/zen/v1` · `OPENCODE_API_KEY` | 48 models, PAYG |
> | OpenCode Go | `opencode.ai/zen/go/v1` · `OPENCODE_API_KEY` | 13 models, $10/mo |
> | Xiaomi MiMo | `mimo.mi.com` · `MIMO_API_KEY` | `mimo-v2.5-pro` |
> | NEAR AI | `cloud-api.near.ai/v1` · `NEARAI_API_KEY` | Claude / GPT / Gemini + TEE |
> | Cloudflare Workers AI | `api.cloudflare.com/.../ai/v1` · `CLOUDFLARE_API_TOKEN` | — |
> | Atomic Chat | `/provider` · `bun run dev:atomic-chat` | Auto-detects loaded models |
> 
> **Gotchas worth knowing**
> 
> - Anthropic-only features don't exist on every backend. Tool quality tracks model quality — small local models struggle with long multi-step tool loops.
> - Some providers cap output below CLI defaults; OpenClaude adapts where it can.
> - Opengateway uses one base URL — switch models with `/model`, don't pin the URL to `/v1/xiaomi-mimo`.
> - GLM reasoning: `glm-5.2?reasoning=high`, `?reasoning=xhigh`, or `?thinking=disabled`.
> - MiMo uses `api-key` header auth and has no `/usage` reporting yet.
> - GitHub Copilot serializes sub-agents by default to save Premium Requests — see [agent routing](docs/agent-routing.md#github-copilot-sub-agent-optimization).
> 
> ---
> 
> ## What you get
> 
> | | |
> |---|---|
> | **Tools** | Bash, read/write/edit, grep, glob, agents, tasks, MCP, slash commands |
> | **Streaming** | Live tokens and tool progress |
> | **Tool loops** | Multi-step: model call → execution → follow-up |
> | **Vision** | URL and base64 images where the provider supports it |
> | **Repo map** | PageRank-ranked structural map, auto-injected behind the `REPO_MAP` flag. Inspect with `/repomap` ([docs](docs/repo-map.md)) |
> | **Agent routing** | Per-agent provider/model overrides, `maxSteps` caps, routable built-ins (`Explore`, `Plan`, `verification`) ([docs](docs/agent-routing.md)) |
> | **Web** | `WebSearch` via DuckDuckGo free by default; drop in `FIRECRAWL_API_KEY` for JS-rendered pages |
> | **gRPC** | Headless bidirectional-streaming server for CI and custom UIs (`npm run dev:grpc`) ([docs](docs/grpc-server.md)) |
> | **VS Code** | Bundled extension: launch integration, Control Center, in-editor chat, Foundry/Azure config |
> 
> ---
> 
> ## Sessions
> 
> ```bash
> openclaude --continue                             # most recent, this directory
> openclaude --resume 
> openclaude --resume  --fork-session   # branch history, new ID
> ```
> 
> Forking branches conversation history only — no worktree, no filesystem isolation.
> 
> Background sessions
> 
> ```bash
> openclaude --bg "fix failing tests"
> openclaude --bg --name auth-refactor "refactor auth middleware"
> 
> openclaude ps
> openclaude logs auth-refactor -f
> openclaude kill auth-refactor
> ```
> 
> Plain local child processes — no daemon, no network service. Metadata and logs live
> in `~/.openclaude/bg-sessions/`. Names are reusable once a session is terminal; use
> the ID to reach older logs sharing a name. `attach` currently just points you at
> `logs  -f`.
> 
> ---
> 
> ## Config
> 
> OpenClaude owns `~/.openclaude/` and `~/.openclaude.json`. It does **not** read
> `~/.claude`, project `.claude/` directories, or `CLAUDE_CONFIG_DIR`. Fresh installs
> start empty and don't need Claude Code present.
> 
> Migrating from a `.claude`-era setup? Copy only files *you* wrote — settings,
> commands, agents, skills, scheduled tasks — into the matching `.openclaude` path.
> Don't blanket-copy, and don't move credentials; re-run provider setup instead.
> 
> `OPENCLAUDE_CONFIG_DIR` relocates everything.
> 
> ---
> 
> ## Buddy
> 
> `/buddy` hatches a truecolor pixel-art companion that stands beside your prompt and
> fires its signature move on every Enter.
> 
> ```
> /buddy set robinhood    green archer — arrow shot
> /buddy set kaio         full-width energy wave
> /buddy set strawhat     stretchy snap-back punch
> /buddy set merlin       sparkle stream
> /buddy set kage         spinning shuriken
> /buddy set ember        dragon fire, real heat gradient
> /buddy set corsair      cannonball with smoke trail
> ```
> 
> Respects `prefersReducedMotion`, degrades to line art on low-color terminals,
> `/buddy mute` silences it. Needs ~100 columns for the full sprite.
> 
> ---
> 
> ## Development
> 
> ```bash
> bun run dev        # build and launch from source
> bun test           # full suite
> ```
> 
> Before opening a PR:
> 
> ```bash
> bun run build
> bun run smoke
> bun test path/to/changed.test.ts
> bun run test:coverage          # if you touched shared runtime or provider logic
> ```
> 
> Other commands and layout
> 
> ```bash
> bun run test:coverage:ui                        # rebuild HTML report only
> bun run test:provider
> bun run test:provider-recommendation
> bun run doctor:runtime
> bun run verify:privacy
> bun run security:pr-scan -- --base origin/main
> ```
> 
> ```
> src/                                   core CLI and runtime
> scripts/                               build, verify, maintenance
> docs/                                  setup and contributor docs
> bin/                                   launcher entrypoints
> vscode-extension/openclaude-vscode/    VS Code

## 延伸閱讀

相關專案：[[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[xikhar--persona|xikhar/persona]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]] · [[gavamedia--deltafin|gavamedia/deltafin]]

[GitHub](https://github.com/0xwilliamortiz/openclaude-improved)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "0xwilliamortiz--openclaude-improved"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "0xwilliamortiz--openclaude-improved" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "0xwilliamortiz--openclaude-improved"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "0xwilliamortiz--openclaude-improved" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "0xwilliamortiz" AND file.name != "0xwilliamortiz--openclaude-improved"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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
> const me = dv.page("Repos/0xwilliamortiz--openclaude-improved");
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

> **2026-07-31** — 首次收錄
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

- [[2026-07-31|2026-07-31]] — 首次收錄，562 stars
