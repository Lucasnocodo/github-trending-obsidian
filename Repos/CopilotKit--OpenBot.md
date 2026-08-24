---
repo: CopilotKit/OpenBot
url: https://github.com/CopilotKit/OpenBot
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent."
homepage: "https://www.copilotkit.ai/openbot"
stars: 2511
stars_per_day: 359
forks: 288
open_issues: 28
created: 2026-08-17
pushed_at: 2026-08-23
first_seen: 2026-08-21
week: "2026-W34"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.0.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-21
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-27"
contributor_count: 5
engagement: "medium"
issue_close_rate: 5
repo_size_kb: 1477
readme_length: 9737
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-21"
star_history: "2026-08-21:1678,2026-08-22:2137,2026-08-23:2337,2026-08-24:2511"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/ag_ui"
  - "topic/agent_governance"
  - "topic/ai_agents"
  - "topic/browser_automation"
  - "topic/copilotkit"
aliases:
  - "OpenBot"
  - "CopilotKit/OpenBot"
---

# OpenBot

**1.7k** stars · **420** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/CopilotKit--OpenBot");
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

`ORG` `v0.0.1`

`ag-ui` `agent-governance` `ai-agents` `browser-automation` `copilotkit` `generative-ui` `mcp`

> [!summary] 一句話摘要
> Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.

## 專案簡介

Open-source AI coworkers that each get a computer of their own: a browser, files and tools, with every action decided before it happens and recorded after. Bring any AG-UI agent.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
| Forks | 177 |
| Open Issues | 36 |
| Issue 解決率 | 5% (2 closed) |
| 最後推送 | 2026-08-21 |
| 建立日期 | 2026-08-17 |
| 官方網站 | [Link](https://www.copilotkit.ai/openbot) |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CopilotKit/OpenBot) |
| Topics | `ag-ui` `agent-governance` `ai-agents` `browser-automation` `copilotkit` `generative-ui` `mcp` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@biomejs/biome` `@copilotkit/aimock` `@types/bun` `roughjs` `typescript` `yaml`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "PLpgSQL" : 1
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@davidmckayv](https://github.com/davidmckayv) | 16 |
> | [@guidovizoso](https://github.com/guidovizoso) | 4 |
> | [@jerelvelarde](https://github.com/jerelvelarde) | 4 |
> | [@Hotragn](https://github.com/Hotragn) | 1 |
> | [@zopeVaibhav](https://github.com/zopeVaibhav) | 1 |

**最新版本**：v0.0.1 (2026-08-17)

> [!info]- Release Notes
> The first cut of OpenBot. Alpha, and under active development: it runs on a laptop, there are rough edges, and things will move.
> 
> ### What it is
> 
> Bots are teammates you hand real work to. Each one gets a computer of its own, a container holding its own Chromium with its own logins, its own filesystem, and only the tools you granted it. No Bot can read another's files or reuse another's sign-ins.
> 
> Every action a Bot takes is decided before it happens and recorded after. Each page opened, file written, MCP tool called and component drawn passes a policy you write, and lands in a trail that keeps what was allowed and what was refused, every refusal naming the rule that refused it.
> 
> ### In this release
> 
> - Bring any AG-UI agent, on a framework or hand written. A proof-of-concept Bot and a LangGraph Bot ship with it.
> - A computer per Bot, created by the supervisor, with a persistent browser profile and workspace.
> - The gateway: CEL policy with deny evaluated before allow, fail closed, and the audit row written before the action runs rather than after it succeeds.
> - Take the wheel. A Bot that reaches something it should not do alone stops and asks, you drive its browser, and hand it back.
> - Components instead of only prose, authored in the browser and published without a rebuild.
> - Governed MCP, with catalogue entries for Atlassian, Box, Slack, Salesforce and ServiceNow, plus personal and deployment skills.
> - Durable threads and memory through CopilotKit Intelligence.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-20 ~ 2026-08-21）
> **活躍天數** 2 天 · **最新 commit** Cut releases from a reviewed PR, and make CI run the thing it ships (#64)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#41](https://github.com/CopilotKit/OpenBot/issues/41) | Feature request: ChatGPT subscription OAuth for model access | 1 | 1 |
> | [#66](https://github.com/CopilotKit/OpenBot/issues/66) | A Bot's shell is handed the deployment's environment, includ | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenBot
> 
> **AI coworkers you can hand real work to, and actually trust with the access.** Each gets a computer of its own: a real browser with its own logins, its own files, and only the tools you grant. Every action decided before it happens and recorded after.
> 
> [**copilotkit.ai/openbot**](https://copilotkit.ai/openbot) · [**Quick start**](#quick-start) · [**Features**](#features) · [**Bring your own agent**](#bring-your-own-agent) · [**Architecture**](#architecture) · [**Docs**](docs/README.md)
> 
> [](https://github.com/CopilotKit/openbot/actions/workflows/ci.yml)
> [](https://github.com/CopilotKit/openbot/actions/workflows/security_zizmor.yml)
> [](./LICENSE)
> 
> https://github.com/user-attachments/assets/535ef7ee-1631-4a69-b839-564c56cf90b4
> 
> Bring any AG-UI agent, written on a framework or by hand, and it arrives as a
> coworker with a channel of its own. Watch it work on its own screen, take the
> wheel when it reaches something it should not do alone, then hand it back. It
> answers with components rather than only prose, and the whole thing runs on
> your own machine.
> 
> > **Alpha, and under active development.** OpenBot is early. Expect rough edges and bugs, and expect things to move. Issues and pull requests are welcome.
> 
> > **Runs on your machine.** Everything below is written for a laptop. Out of the box OpenBot runs with `OPENBOT_DEV_NO_AUTH`, which skips signing in and admits every request as one administrator. [Google sign-in](#sign-in-with-google) can be wired up instead.
> 
> 
> ## Quick start
> 
> 1. Create `.env`:
> 
>    ```sh
>    cp .env.example .env
>    ```
> 
> 2. Get CopilotKit Intelligence credentials:
> 
>    ```sh
>    npx --yes copilotkit@latest login
>    npx --yes copilotkit@latest project select
>    npx --yes copilotkit@latest license --write
>    ```
> 
>    Put the `cpk-...` runtime key from `project select` in `.env` as
>    `INTELLIGENCE_API_KEY`. `license --write` writes
>    `COPILOTKIT_LICENSE_TOKEN` into the existing `.env`.
> 
> 3. Fill the remaining required values:
> 
>    - `OPENAI_API_KEY`
> 
>    Keep the managed Intelligence URLs from `.env.example` unless you run Intelligence yourself. The example `KEY_ENCRYPTION_KEY` is public and fine locally; generate your own with:
> 
>    ```sh
>    openssl rand -base64 32
>    ```
> 
> 4. Install and run:
> 
>    ```sh
>    bun install
>    bash scripts/start.sh
>    ```
> 
> 5. Open .
> 
> `scripts/start.sh` starts Docker services, applies migrations, starts the API server on port 3001, starts the app on port 3010, and checks that the services answer their own health routes before printing next steps.
> 
> 
> ## What it is
> 
> An agent platform that runs inside your own infrastructure. Docker Compose brings up every part of it, the data sits in your PostgreSQL, and the model is yours to choose: no model ships in the box, and an administrator supplies the credential, which is encrypted at rest and never logged.
> 
> Three coworkers ship in the example package, and they are configuration rather than code: **General Assistant** for everyday work, **Knowledge** for company questions, **Risk Analyst** for risk and compliance. Add your own by editing `agents.yaml` or from `/agents` in the UI.
> 
> Anything a Bot does to a computer, a file, an MCP server or a component goes through one gateway that decides and records it. That is the difference between an agent that can use your tools and an agent you can let near them.
> 
> More at [copilotkit.ai/openbot](https://copilotkit.ai/openbot).
> 
> 
> ## Features
> 
> - **A computer per Bot**: the supervisor gives each Bot its own container, its own `/workspace` volume and its own browser profile. Set `COMPUTER_RUNTIME=runsc` to run them under gVisor where the host supports it.
> - **A shell, not just a browser**: a Bot can run a command in its workspace, install what it needs, and process a file it saved. Through the same gate as everything else, so a rule can refuse a shell outright or refuse particular commands, and the command is on the record either way.
> - **The gateway is the only way in**: it resolves the target from a server-held snapshot, evaluates the policy, writes the audit row, and only then calls the computer. There is no path that acts without the record existing first.
> - **CEL policy, fail closed**: rules can inspect `tool.name`, `intent`, `bot.id`, `actor.id`, `page.url`, `page.host`, `element.*`, `key`, `file.*` and `mcp.*`. Deny is evaluated before allow, a missing policy permits nothing, and a broken rule refuses rather than opens.
> - **Take the wheel**: a Bot that hits a login wall or a 2FA prompt asks for help. Control is handed over in the same panel and recorded as `computer.help_requested`, `computer.control_taken` and `computer.control_released`. While a person is driving, Bot actions are refused rather than queued.
> - **Secrets never enter the transcript**: the trail records that a secret was requested and how long it was, not what it said.
> - **Bring your own agent**: any AG-UI endpoint is a Bot, on a framework or hand written. Endpoints are validated with the same target checks used for browser navigation, and an auth header is stored write-only.
> - **Components instead of prose**: compiled React components live in `app/src/components/gallery/`, sandboxed ones are authored in `/admin/playground` and published with no deployment. Every call asks the server whether the component exists, is published, and is not withheld from that Bot. Data functions are granted per component.
> - **Governed MCP**: a curated catalogue ships for Atlassian, Box, Slack, Salesforce and ServiceNow. Custom servers must pass URL checks, and any tool not positively classified as a read is treated as a write.
> - **Skills are instructions, not capabilities**: personal skills attach only to Bots their author owns, deployment skills are admin-owned, and both are invoked with `/` in the composer.
> - **An audit trail you can read**: `/admin/audit` lists what was permitted, what was refused and what failed, and every refusal carries the rule that caused it.
> - **Credentials encrypted at rest**: stored through `/admin/credentials`, never returned by an API, and redacted from audit events.
> - **Loopback by default**: computers bind to `127.0.0.1` and require a per-container token, so nothing reaches a logged-in browser by knowing its port.
> - **Durable threads and memory**: conversations survive restarts through CopilotKit Intelligence, and each deployment stamps the threads it owns.
> 
> 
> ## Configuration
> 
> `.env.example` is the source template. The API server refuses to start without:
> 
> - `DATABASE_URL`
> - `KEY_ENCRYPTION_KEY`
> - `MANAGED_AGENT_AG_UI_URL`
> - `INTELLIGENCE_API_URL`
> - `INTELLIGENCE_GATEWAY_WS_URL`
> - `INTELLIGENCE_API_KEY`
> - `COPILOTKIT_LICENSE_TOKEN`
> 
> Settings worth knowing:
> 
> | Variable                             | Use                                                                       |
> | ------------------------------------ | ------------------------------------------------------------------------- |
> | `OPENBOT_DEV_NO_AUTH`                | Admits every request as one administrator. How OpenBot runs today.        |
> | `OPENAI_BASE_URL`                    | Answers the OpenAI-shaped calls from somewhere else: a gateway, a proxy.  |
> | `ANTHROPIC_BASE_URL`, `GOOGLE_GENERATIVE_AI_BASE_URL` | The same, for those two APIs.            |
> | `COMPUTER_TOKEN`                     | Secret every Bot computer request must present. `start.sh` sets one.      |
> | `SUPERVISOR_TOKEN`                   | Secret the supervisor requires. `start.sh` sets one.                      |
> | `COMPUTER_SUPERVISOR_URL`            | Gives each Bot a computer of its own instead of one shared computer.      |
> | `COMPUTER_RUNTIME`                   | Set to `runsc` to run computers under gVisor, where the host has it.      |
> | `COMPUTER_SANDBOX`                   | Set to `on` for Chromium's own sandbox, where the host permits it.        |
> | `EMBEDDED_POSTGRES`                  | Set to `on` for a database inside the deployment container.               |
> | `AGENT_COMPUTER_POLICY`              | JSON 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/CopilotKit/OpenBot) · [官方網站](https://www.copilotkit.ai/openbot)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "CopilotKit--OpenBot"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "CopilotKit--OpenBot" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W34" AND file.name != "CopilotKit--OpenBot"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenBot");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CopilotKit--OpenBot" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CopilotKit" AND file.name != "CopilotKit--OpenBot"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
> const me = dv.page("Repos/CopilotKit--OpenBot");
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
> const me = dv.page("Repos/CopilotKit--OpenBot");
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

> **2026-08-21** — 首次收錄
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

- [[2026-08-24|2026-08-24]] — 再次上榜，2.5k stars
- [[2026-08-23|2026-08-23]] — 再次上榜，2.3k stars
- [[2026-08-22|2026-08-22]] — 再次上榜，2.1k stars
- [[2026-08-21|2026-08-21]] — 首次收錄，1.7k stars
