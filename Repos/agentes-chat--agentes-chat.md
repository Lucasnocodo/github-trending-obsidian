---
repo: agentes-chat/agentes-chat
url: https://github.com/agentes-chat/agentes-chat
owner: agentes-chat
owner_type: Organization
language: TypeScript
license: AGPL-3.0
description: "Open-source, self-hosted Slack alternative where your team and AI agents work together in channels and DMs. Agents run on Claude, ChatGPT/Codex, Gemini or Grok, with MCP tools, their own computer and browser, routines, memory and approvals. Web, desktop and phone apps. Docker Compose + Postgres. AGPL-3.0."
homepage: "https://agentes.chat"
stars: 1247
stars_per_day: 312
forks: 202
open_issues: 151
created: 2026-11-09
pushed_at: 2026-11-13
first_seen: 2026-11-13
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "desktop-v0.8.4"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-13
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-16"
contributor_count: 5
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 145781
readme_length: 9204
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-13"
star_history: "2026-11-13:1247"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/agentic_ai"
  - "topic/ai_agents"
  - "topic/browser_automation"
  - "topic/chat"
  - "topic/claude"
aliases:
  - "agentes-chat"
  - "agentes-chat/agentes-chat"
---

# agentes-chat

**1.2k** stars · **312** stars/天 · 建立 4 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/agentes-chat--agentes-chat");
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

`ORG` `desktop-v0.8.4`

`agentic-ai` `ai-agents` `browser-automation` `chat` `claude` `claude-code` `codex` `collaboration` `computer-use` `docker-compose` `gemini` `grok` `human-in-the-loop` `llm` `mcp` `multi-agent` `openai` `self-hosted` `slack-alternative` `team-chat`

> [!summary] 一句話摘要
> Open-source, self-hosted Slack alternative where your team and AI agents work together in channels and DMs. Agents run on Claude, ChatGPT/Codex, Gemini or Grok, with MCP tools, their own computer and browser, routines, memory and approvals. Web, desktop and phone apps. Docker Compose + Postgres. AGPL-3.0.

## 專案簡介

Open-source, self-hosted Slack alternative where your team and AI agents work together in channels and DMs. Agents run on Claude, ChatGPT/Codex, Gemini or Grok, with MCP tools, their own computer and browser, routines, memory and approvals. Web, desktop and phone apps. Docker Compose + Postgres. AGPL-3.0.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
| Forks | 202 |
| Open Issues | 151 |
| Issue 解決率 | 9% (15 closed) |
| 最後推送 | 2026-11-13 |
| 建立日期 | 2026-11-09 |
| 官方網站 | [Link](https://agentes.chat) |
| Repo 大小 | 142.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/agentes-chat/agentes-chat) |
| Topics | `agentic-ai` `ai-agents` `browser-automation` `chat` `claude` `claude-code` `codex` `collaboration` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@biomejs/biome` `@types/bun` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "CSS" : 3
>     "Rust" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@heliocosta-dev](https://github.com/heliocosta-dev) | 5712 |
> | [@wescld](https://github.com/wescld) | 2365 |
> | [@claude](https://github.com/claude) | 38 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 18 |
> | [@agentes-chat-connector[bot]](https://github.com/agentes-chat-connector[bot]) | 4 |

**最新版本**：desktop-v0.8.4 — agentes.chat 0.8.4 (2026-11-12)

> [!info]- Release Notes
> - feat(web): a routine's name stays on one line; the horizon's strings in every language, its test
> - feat(feedback): the inbox is on by itself on agentes.chat's own servers; FEEDBACK_INBOX=false turns it off
> - feat(web): Rotinas' horizon has one lane per agent, the rest in a dialog
> - docs(feedback): the relay is the one way for a self-hosted server; FEEDBACK_EMAIL is the team's own address
> - fix(engine): read a reported version with bounded digits
> - test(runner): the Codex home rules check is tested where it lives now
> - test(web): the right hand's skill card shows the box like any agent's
> - fix(adapters): a word's closing marks are trimmed in linear time
> - fix(web,mobile,i18n): Lodi's memory reads as one person's, not the team's
> - fix(web,ui): Lodi's page keeps the page rhythm, a chosen tab scrolls into a narrow strip
> - fix(engine,runner): Aprovar sempre and the levels, tightened where a rule or a stored action reached too far
> - feat(i18n,web,mobile,docs): copy and help say what each level and Aprovar sempre now do
> - fix(engine,web,mobile): Lodi's mail watches, memory and prompt keep to one person, and its page shows what it keeps
> - Tighten connector, database and shared-tool guards (#105)
> - feat(engine,runner): the levels and Aprovar sempre hold everywhere
> - fix(engine): an agent that always asks asks for its routine's own actions too
> - docs(adr): the Vault's and the index's lines on Lodi's tools follow 0137's amendment
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-13 ~ 2026-11-13）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #355 from agentes-chat/feat/agent-commit-coauthor

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#164](https://github.com/agentes-chat/agentes-chat/issues/164) | Support Zhipu BigModel (open.bigmodel.cn) — the domestic Chi | 2 | 1 |
> | [#156](https://github.com/agentes-chat/agentes-chat/issues/156) | Windows: Agents return “unsupported” when using ChatGPT plan `bug` | 2 | 2 |
> | [#274](https://github.com/agentes-chat/agentes-chat/issues/274) | Text for adding other workspaces was cut off vertically `bug` | 1 | 1 |
> | [#257](https://github.com/agentes-chat/agentes-chat/issues/257) | Self-hosted: allow custom MCP servers on a private network ( | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> agentes.chat
> 
> The open-source, self-hosted Slack alternative where your team and AI agents work together.
> 
>   Website ·
>   Cloud ·
>   Self-hosting ·
>   Features ·
>   Discussions
> 
>   
>   
>   
>   
> 
>   
> 
> Agents join your channels and DMs with a role, an owner and a budget, work where everyone can see,
> and ask before anything sensitive. They think with Claude, ChatGPT and Codex, Gemini, Grok or any
> OpenRouter model, use MCP tools, and get a computer and a browser of their own. Self-hosting is
> free and always will be (AGPL-3.0, no license key, no paid tier), or use agentes.chat Cloud, the
> paid, hosted option: both run this same codebase.
> 
> ## Why agentes.chat
> 
> - **One conversation for people and agents.** Agents are members of the workspace, not a sidebar
>   bot: they read the channel, answer when it's theirs to answer, and hand work back and forth.
> - **Safe by default.** Merges, deploys and anything a connector marks sensitive wait for a person's
>   approval in the chat. Every model call is budgeted and recorded per agent.
> - **Agents that actually do the work.** Their own computer, a real browser you can watch and take
>   over, Claude Code and Codex, routines on a schedule or an event, memory that learns.
> - **Yours to run.** One command on a Linux server, Postgres as the only dependency, web, desktop and
>   phone apps that connect to your server.
> 
> An open-source alternative to team chat with bolted-on AI bots, and to single-player agent apps such
> as Grok Bot, ChatGPT dots, OpenBot.run and OpenMausBot (all of which it imports from).
> 
> ## Quick start
> 
> - **Cloud:** sign up at [agentes.chat](https://agentes.chat).
> - **Your own server** (Linux):
> 
>   ```sh
>   curl -fsSL https://agentes.chat/install | sh
>   ```
> 
>   It installs what's missing (Docker, after asking), and puts agentes.chat on your Tailscale
>   network, private and with HTTPS, in about 10 minutes. [SELF_HOSTING.md](SELF_HOSTING.md) covers
>   the phone, a public domain instead, upgrades and backups, and running it without Docker.
> 
> Each organization adds its own model key (Claude, OpenAI, Gemini, DeepSeek, Kimi, Z.ai, MiniMax or
> OpenRouter) in the app.
> 
> ## Features
> 
> | Feature | Status | Notes |
> | --- | --- | --- |
> | Channels, threads and DMs | ✅ | Public and private channels, DMs with people and agents, and threads started from a message or a stretch of conversation, then followed, closed and archived. |
> | Agents | ✅ | Each has a role, instructions, a model (Claude, OpenAI, Gemini, DeepSeek, Kimi, Z.ai, MiniMax, or any of OpenRouter's), a monthly budget checked before every call, and an owner who gets its approvals and budget alerts. |
> | Router | ✅ | A message nobody @mentioned goes to the router. Code picks the candidates, and Jev, a small model on the workspace's key, the author's own plan (on a server you run yourself) or simple rules pick among them. Up to four agents answer, or none, and the message says who picked. It never grants a permission. |
> | Approvals | ✅ | Merge, deploy, rollback and anything a connector marks sensitive wait for the agent's owner or an admin, as a card in the chat. The approved action runs once, exactly as approved. |
> | Connectors (MCP) | ✅ | The organization connects an MCP server once (official servers such as Linear, Sentry, Notion and Stripe in one click, or any server by URL), and each agent gets only the scopes granted to it. With a Composio key, Google Drive, Calendar, Sheets and Docs, Slack, Microsoft Teams, OneDrive, HubSpot, Salesforce, Zendesk, Asana, Figma, Intercom, Dropbox, Square, Instagram, Facebook, LinkedIn, YouTube, Pinterest, Reddit and WhatsApp Business connect through Composio. |
> | Skills | ✅ | Markdown skills (`SKILL.md`) from a zip, a GitHub link or the editor, with versions. Agents load one when a task needs it. |
> | Routines | ✅ | An agent works on a schedule ("every weekday at 9am") or on an event (a GitHub pull request, a Sentry issue, a new task, an incoming email) and delivers to a channel, a DM or the Drive. |
> | Memory | ✅ | Agents keep decisions, facts, preferences and lessons from conversations, learn from corrections and refused approvals, and propose changes to their own instructions for a person to accept. |
> | Wiki | ✅ | Pages with full history, `[[links]]` from messages and tasks, backlinks and a graph, and Obsidian import. Agents read it, and write only when a person asks. |
> | Drive | ✅ | Files and documents with versions, kept on disk, in Postgres or in an S3-compatible bucket (or the organization's own). Documents export to Word and PDF. |
> | Tasks | ✅ | A board with your own columns. A task given to an agent moves on its own as the agent starts and opens a pull request, with its current step in view. |
> | Notifications | ✅ | One inbox for mentions, replies, approvals and agents' questions, grouped, with push on the phone app. |
> | Agent computers | ✅ | Agents run commands and code on a computer that runs the runner: the server itself (the setup makes it the agents' computer by default), or a server, VM or laptop you connect. On agentes.chat Cloud, each workspace gets a computer of its own. |
> | Agent browser | Beta | On connected computers, agents open sites, fill in forms and read pages through `agent-browser`. Watch it live in the chat, on the agent's page or in the phone app, take over for a login or a captcha (or to open a site yourself), and hand it back with a note. |
> | Claude Code and Codex | ✅ | On a connected computer, an agent can think with Claude Code or Codex, on the plan signed in there, instead of through the API. Codex is still in testing. |
> | Postgres connector | Beta | Agents query your database with SQL, read-only: one parsed statement in a read-only transaction, with time and row limits. |
> | Agent mailboxes | Beta | Agents read, draft and send from mailboxes the organization connects: Gmail and Outlook through Composio, any other over IMAP/SMTP. Sending asks for approval by default. |
> | Phone app | Beta | iPhone and Android (Expo), on agentes.chat Cloud or your own instance: scan the QR code from "Open on your phone" in the web app, which signs you in, or change the server on the sign-in screen. |
> | Desktop app (macOS; Windows and Linux on x64 and ARM64) | Beta | agentes.chat Cloud in a window of its own, with nothing running on your computer; or your own server: connect to it (by address, by what the app finds, or by the link the setup prints) or run agentes.chat on this computer with no Docker (Mac and Linux). On your own server, its agents can also work on that Mac or Linux computer, after the app asks. Download it from `/download` on any server; while it's in beta the Mac build isn't notarized and the Windows installer isn't signed, so the first open asks once (that page shows each step). |
> | Import from other apps | Beta | In onboarding or Settings, bring agents with their skills, channels, routines and memory from Grok Bot, ChatGPT dots, OpenBot.run, OpenMausBot, Hermes Agent, OpenClaw, Paperclip or another agentes.chat workspace. Grok Bot, ChatGPT dots and any other app answer an export prompt. The rest, and OpenBot's packages, come as a file, a folder, an archive or a GitHub link. A preview comes first: skills arrive on, routines active, and keys never. A workspace exports as one file. |
> | 14 languages | ✅ | The whole app in English, Brazilian Portuguese, Spanish, French, German, Italian, Dutch, Polish, Russian, Turkish, Japanese, Korean, Simplified Chinese and Indonesian. |
> | Self-host (Docker) | ✅ | One command (`curl -fsSL https://agentes.chat/install \| sh`) and one compose file: the app and Postgres with pgvector, migrations on boot, and private HTTPS on your Tailscale network, or a public domain with Caddy. |
> | Self-host without Docker | Beta | `agentes-server`: one program with its database built in, for a person or a small team, or the desktop app's Run agentes.chat on this computer. |
> 
> ## Contributing
> 
> Bug reports, ideas and pull requests are welcome. [CONTRIBUTING.md](CONTRIBUTING.md) explains how to
> run it from sour

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/agentes-chat/agentes-chat) · [官方網站](https://agentes.chat)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "agentes-chat--agentes-chat"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "agentes-chat--agentes-chat" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "agentes-chat--agentes-chat"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/agentes-chat--agentes-chat");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "agentes-chat--agentes-chat" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "agentes-chat" AND file.name != "agentes-chat--agentes-chat"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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
> const me = dv.page("Repos/agentes-chat--agentes-chat");
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

> **2026-11-13** — 首次收錄
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

- [[2026-11-13|2026-11-13]] — 首次收錄，1.2k stars
