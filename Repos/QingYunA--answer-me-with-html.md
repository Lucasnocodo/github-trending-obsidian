---
repo: QingYunA/answer-me-with-html
url: https://github.com/QingYunA/answer-me-with-html
owner: QingYunA
owner_type: User
language: JavaScript
license: MIT
description: "Answer me with HTML — an agent skill that answers hard questions with a one-page HTML you can actually read. 让 AI Agent 用一页 HTML 回答复杂问题。"
homepage: ""
stars: 1848
stars_per_day: 462
forks: 128
open_issues: 8
created: 2026-10-02
pushed_at: 2026-10-07
first_seen: 2026-10-05
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.4.8"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-05
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-10-10"
contributor_count: 5
engagement: "low"
issue_close_rate: 50
repo_size_kb: 21793
readme_length: 9913
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-05"
star_history: "2026-10-05:1169,2026-10-06:1540,2026-10-07:1848"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/agent_skill"
  - "topic/ai_agent"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/diagram"
aliases:
  - "answer-me-with-html"
  - "QingYunA/answer-me-with-html"
---

# answer-me-with-html

**1.2k** stars · **585** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/QingYunA--answer-me-with-html");
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

`v0.4.8`

`agent-skill` `ai-agent` `claude-code` `cli` `diagram` `explainer` `html` `llm` `ste100`

> [!summary] 一句話摘要
> Answer me with HTML — an agent skill that answers hard questions with a one-page HTML you can actually read. 让 AI Agent 用一页 HTML 回答复杂问题。

## 專案簡介

Answer me with HTML — an agent skill that answers hard questions with a one-page HTML you can actually read. 让 AI Agent 用一页 HTML 回答复杂问题。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
| Forks | 81 |
| Open Issues | 12 |
| Issue 解決率 | 50% (12 closed) |
| 最後推送 | 2026-10-05 |
| 建立日期 | 2026-10-02 |
| Repo 大小 | 21.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QingYunA/answer-me-with-html) |
| Topics | `agent-skill` `ai-agent` `claude-code` `cli` `diagram` `explainer` `html` `llm` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@dagrejs/dagre` `marked` `esbuild` `yaml`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 96
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@QingYunA](https://github.com/QingYunA) | 56 |
> | [@xianull](https://github.com/xianull) | 4 |
> | [@zhaidewei](https://github.com/zhaidewei) | 3 |
> | [@takaburi](https://github.com/takaburi) | 2 |
> | [@21tesla](https://github.com/21tesla) | 1 |

**最新版本**：v0.4.8 (2026-10-05)

> [!info]- Release Notes
> ## Highlights
> 
> - **English throughout the repository** (#46, spec #39). CLI output, errors, help, notices, writing-check messages, the skill instructions, slash commands, comments and test names are now English. Pages and the video player still switch between Chinese, English and Japanese by the draft's language, and the agent still replies in your language. A language-check test keeps it that way.
> - **`--voice local`** (#37, thanks @chnln): narrate videos with a self-hosted OpenAI-compatible `/v1/audio/speech` server such as Qwen3-TTS via mlx-audio. Runaway or truncated clips are regenerated automatically. `AM_TTS_API_KEY` is supported, and `am patch` keeps a video's voice.
> - **Wider tables and diagrams on sheet pages** (#38): tables with 4+ columns and wide diagrams get more width automatically and scroll on phones.
> 
> ## Also
> 
> - Issue forms and a pull request template (#34).
> - CONTRIBUTING.md, `npm run snapshot` and `npm run release` for maintainers (#33).
> - More tests for `am clean` (#30).
> 
> ## Note
> 
> CLI text the agent reads is now English (for example `STE 2 warnings`, `! Cleanup hint`). Update the skill and the CLI together, as the update commands below do.
> 
> ## Update
> 
> - Plugin: `claude plugin update answer-me-with-html@answer-me-with-html`
> - Skill: `npx skills update answer-me-with-html -y`
> 
> **Full changelog:** https://github.com/QingYunA/answer-me-with-html/compare/v0.4.7...v0.4.8

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-05 ~ 2026-10-05）
> **活躍天數** 1 天 · **最新 commit** feat(video): update ElevenLabs defaults, add ELEVENLABS_MODEL_ID and a setup guide (#48)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#47](https://github.com/QingYunA/answer-me-with-html/issues/47) | Page aria-labels are always Chinese (flow, sequence, doc tab `bug` | 1 | 0 |
> | [#19](https://github.com/QingYunA/answer-me-with-html/issues/19) | 感觉功能还能继续拓展下，图片有时候会比文字和图表箭线图还更好理解 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Answer me with HTML
> 
>   An agent skill. Ask a hard question, get a page you can actually read instead of a wall of text.The model writes about 1/7 of the tokens it would need to hand-write the HTML.
> 
>   
>   
>   
> 
>   English · 简体中文
> 
> Once installed, ask questions the way you always do:
> 
> ```
> > Explain the TCP three-way handshake
> > Map out how the modules in this repo fit together
> > Redis or Memcached for our cache?
> ```
> 
> The agent writes a short Markdown draft and hands it to the CLI that ships with the skill. About 50 ms later you have a page:
> 
> https://github.com/user-attachments/assets/d3063a28-5dfd-4c44-a562-be901c49b249
> 
> 24-second demo. Turn the sound on for the music.
> 
> 
> ## Install
> 
> You need [Node.js](https://nodejs.org/) 20 or newer. There is no `npm install` step. The CLI is bundled inside the skill.
> 
> 
> ### Let your agent install it (recommended)
> 
> Paste this into Claude Code, Codex, Cursor, OpenCode or any other agent:
> 
> > Install the Answer me with HTML skill: run `npx -y skills add QingYunA/answer-me-with-html -g -y`, and pass `-a` with your own agent name (for Claude Code, `-a claude-code`). Then read its SKILL.md and use it to make a page that explains the TCP three-way handshake, so we know it works.
> 
> 
> ## Features
> 
> - **Fewer tokens, less waiting:** The model writes a short draft, about 900 output tokens, instead of 7,000 tokens of HTML, CSS and SVG. See the [benchmark](bench/README.md).
> - **Layout by code:** Panel placement and diagram coordinates are computed, not guessed. Labels don't get cut off, and there are no gaps in the grid.
> - **Fixes its own mistakes:** When a draft has an error, the CLI returns the line number, the component and a correct example. The agent fixes it in one try.
> - **Two themes:** `blueprint` looks like an engineering drawing. `shadcn` uses clean cards. Both have light and dark modes.
> - **One file, no dependencies:** Each page is a single `.html` with no CDN links or web fonts. It opens offline and is easy to share.
> - **Writing check:** Drafts are checked against rules adapted from ASD-STE100: long sentences, wordy phrases, passive voice. It only warns unless you ask for strict mode.
> - **Keeps its source:** Every page embeds the Markdown that made it. Click "Copy source" to get it back.
> 
>   
>     
>     
>   
>   
>     Blueprint theme (examples/ste100.md)
>     shadcn theme, dark mode
>   
> 
> 
> ## Always-on mode (optional)
> 
> By default, the agent makes a page only for questions that need one. If you want **a page with every conclusion**, turn on always-on mode.
> 
> The agent then gets a short reminder each turn (about 90 tokens). Whenever it gives a conclusion, summary, plan or comparison, even a short one, it adds a small page with 2 to 4 panels and puts the path at the end of the reply. These pages never pop open, so they don't interrupt you. Casual chat and replies with no conclusion stay as they are. Claude Code makes no pages in plan mode.
> 
> **Claude Code:** install one more plugin.
> 
> ```
> /plugin marketplace add QingYunA/answer-me-with-html
> /plugin install answer-me-with-html-always@answer-me-with-html
> ```
> 
> Pause it with `/answer-me-with-html:config always off`. You don't need to uninstall.
> 
> **Other agents:** paste this to your agent so it writes the rule into its own rules file, such as `AGENTS.md`:
> 
> > Turn on always-on mode for Answer me with HTML: add a global rule — "[answer-me-with-html always-on] Whenever a reply gives a conclusion, summary, plan, comparison, review or explanation, even a short one, also make a page with the answer-me-with-html skill (2 to 4 panels for routine answers), render it with --no-open, and end the reply with the page path. Skip casual chat, one- or two-sentence replies with no conclusion, pure command output, and requests for plain text."
> 
> 
> ## Why not just ask for HTML?
> 
> You can. Models write decent HTML now. The problem is the bill you pay in output tokens: the model has to type every line of CSS, every wrapper `div` and every SVG coordinate. Output tokens are also what you sit and wait for.
> 
> With this skill, the model writes only the content. We asked the same questions with the same model both ways (3 topics × 3 runs, medians, Claude Sonnet 5.5):
> 
> | | Ask for HTML directly | Answer me with HTML | |
> | :--- | ---: | ---: | :--- |
> | Output tokens | 6,873 | **923** | **7.4× fewer** |
> | Time | 46 s | **13 s** | **3.6× faster** |
> | Cost per answer | $0.22 | $0.26 | about the same |
> 
>   
> 
> One run from the benchmark: same prompt, same model, and both pages are usable. This run took 9,351 output tokens for the plain page and 899 with the skill. The table above shows the medians.
> 
> Why the cost doesn't drop too: the skill adds two short turns (load the skill, run the CLI), and every turn re-reads the conversation context. You save the waiting, not the bill. Per-topic numbers and the script to reproduce them are in [bench/](bench/README.md).
> 
> 
> ### Claude Code plugin
> 
> Run this inside Claude Code:
> 
> ```
> /plugin marketplace add QingYunA/answer-me-with-html
> /plugin install answer-me-with-html@answer-me-with-html
> ```
> 
> 
> ### One command
> 
> ```bash
> npx skills add QingYunA/answer-me-with-html
> ```
> 
> It asks which agents to install into. The installer, [vercel-labs/skills](https://github.com/vercel-labs/skills), supports more than 70 agents.
> 
> Manual install
> 
> Copy the `skills/answer-me-with-html` folder into your agent's skill folder. For Claude Code:
> 
> ```bash
> git clone --depth 1 https://github.com/QingYunA/answer-me-with-html.git /tmp/answer-me-with-html
> cp -R /tmp/answer-me-with-html/skills/answer-me-with-html ~/.claude/skills/answer-me-with-html
> ```
> 
> Skill folders for other agents: Codex `~/.codex/skills/`, Cursor `~/.cursor/skills/`, OpenCode `~/.config/opencode/skill/`.
> 
> No setup is needed after install.
> 
> 
> ## What you ask, what you get
> 
> | You ask | You get |
> | :--- | :--- |
> | "Explain the TCP three-way handshake" | A sequence diagram, a state diagram and a flag table |
> | "How are the modules in this repo organized?" | A folder tree plus a call graph |
> | "Redis or Memcached?" | A comparison table with ✓ and ✗, then a verdict |
> | "What's wrong with this paragraph?" | Each sentence annotated, with the problem words and fixes |
> | "How did Kubernetes come about?" | A timeline with the key moments highlighted |
> | "How do I show hidden files with `ls`?" | No page. A one-line question gets a one-line answer |
> 
> The agent decides when a page is worth it: related concepts, multi-step flows, multi-way comparisons. You can also just say "explain it in HTML".
> 
> Pages are saved in `~/.answer-me-with-html/pages/`. The buttons in the top-right corner switch the theme and light/dark mode, and copy the Markdown that produced the page.
> 
> 
> ## Explainer videos (3Blue1Brown style)
> 
> Karpathy's ladder for understanding LLM output ends with explainer videos. Ask for one: "make a 3b1b-style video on the TCP handshake".
> 
> The agent writes the same kind of draft as for a page, plus one line of narration per beat. Nothing else:
> 
> ````markdown
> 
> ## Both sides wait
> ```sequence
> Client -> Server: SYN
> Server -> Client: SYN-ACK
> ```
> > The client sends a SYN to ask for a connection.
> > The [Server] answers with a SYN-ACK.
> ````
> 
> `am video` turns it into a player page:
> 
> - **Built step by step.** When the Nth line of narration plays, the Nth step of the diagram appears. Arrows draw themselves. If there are more lines than steps, the extra lines at the start act as an intro.
> - **Spoken narration.** The agent writes narration the way a person explains things out loud, not like a manual.
> - **Camera focus.** `[Server]` in the narration pushes the camera toward that node and highlights it. The diagram never leaves the frame.
> - **Objects carry over.** A node with the same name in the next scene glides to its new place instead of cutting.
> - **Narration.** It uses ElevenLabs if `ELEVENLABS_API_KEY` is set (optional; [setup guide](docs/elevenlabs.md)), the system voice otherwise (macOS `say`: Tingting for Chinese, Samantha for English, Kyoko for Japanese), and captions only if neith

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/QingYunA/answer-me-with-html)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "QingYunA--answer-me-with-html"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "QingYunA--answer-me-with-html" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "QingYunA--answer-me-with-html"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "QingYunA--answer-me-with-html" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "QingYunA" AND file.name != "QingYunA--answer-me-with-html"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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
> const me = dv.page("Repos/QingYunA--answer-me-with-html");
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

> **2026-10-05** — 首次收錄
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

- [[2026-10-07|2026-10-07]] — 再次上榜，1.8k stars
- [[2026-10-06|2026-10-06]] — 再次上榜，1.5k stars
- [[2026-10-05|2026-10-05]] — 首次收錄，1.2k stars
