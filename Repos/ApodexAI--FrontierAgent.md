---
repo: ApodexAI/FrontierAgent
url: https://github.com/ApodexAI/FrontierAgent
owner: ApodexAI
owner_type: Organization
language: Python
license: Apache-2.0
description: "🧩 FrontierAgent, our agent framework, open-sourced alongside it — native command-line TUI, ReAct and Agent Team modes, one command on macOS and Linux, no preinstall, no hard Docker dependency."
homepage: "https://www.apodex.ai"
stars: 1242
stars_per_day: 177
forks: 103
open_issues: 3
created: 2026-08-22
pushed_at: 2026-08-29
first_seen: 2026-08-26
week: "2026-W35"
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
last_reviewed: 2026-08-26
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-09-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 6953
readme_length: 9849
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-26"
star_history: "2026-08-26:614,2026-08-27:1067,2026-08-28:1192,2026-08-29:1242"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/agent_orchestration"
  - "topic/agentic_ai"
  - "topic/agentic_framework"
  - "topic/ai_agents"
  - "topic/harness"
aliases:
  - "FrontierAgent"
  - "ApodexAI/FrontierAgent"
---

# FrontierAgent

**614** stars · **205** stars/天 · 建立 3 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/ApodexAI--FrontierAgent");
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

`ORG`

`agent-orchestration` `agentic-ai` `agentic-framework` `ai-agents` `harness` `multi-agent` `terminal-agent` `tui`

> [!summary] 一句話摘要
> 🧩 FrontierAgent, our agent framework, open-sourced alongside it — native command-line TUI, ReAct and Agent Team modes, one command on macOS and Linux, no preinstall, no hard Docker dependency.

## 專案簡介

🧩 FrontierAgent, our agent framework, open-sourced alongside it — native command-line TUI, ReAct and Agent Team modes, one command on macOS and Linux, no preinstall, no hard Docker dependency.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
| Forks | 59 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-26 |
| 建立日期 | 2026-08-22 |
| 官方網站 | [Link](https://www.apodex.ai) |
| Repo 大小 | 6.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ApodexAI/FrontierAgent) |
| Topics | `agent-orchestration` `agentic-ai` `agentic-framework` `ai-agents` `harness` `multi-agent` `terminal-agent` `tui` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhanghanduo](https://github.com/zhanghanduo) | 12 |
> | [@dq-ai-dev](https://github.com/dq-ai-dev) | 6 |
> | [@fzp0424](https://github.com/fzp0424) | 4 |
> | [@LiangcaiSu](https://github.com/LiangcaiSu) | 3 |
> | [@ntudy](https://github.com/ntudy) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-25 ~ 2026-08-25）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #9 from fzp0424/docs/frontierchallenge-readme-header

## README 摘錄

> [!info]- 展開查看原文 README
> ---
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
>   Tech Blog ·
>   Tech Report
> 
> 
> ## Quick start
> 
> Requirements: Git, Python 3.12, [uv](https://docs.astral.sh/uv/), and an
> OpenAI-compatible model endpoint. Docker is optional.
> 
> ```bash
> git clone https://github.com/ApodexAI/FrontierAgent.git
> cd FrontierAgent
> 
> uv sync --python 3.12 --extra dev
> cp .env.example .env
> ```
> 
> Add your endpoint to `.env`:
> 
> ```dotenv
> OPENAI_API_KEY=your-key
> OPENAI_BASE_URL=https://your-openai-compatible-endpoint/v1
> OPENAI_MODEL=your-model-name
> 
> 
> ## Highlights
> 
> - **Native Agent Team workflow.** The coordinator decomposes the request,
>   dispatches bounded parallel assignments, receives structured reports, and can
>   use an optional fast reporter for final evidence review.
> - **Task Board.** Agent Team's `add_task` and `update_task` events appear live in
>   the TUI sidebar with pending, active, completed, blocked, and cancelled state.
> - **Sandboxed file work.** Shell and file tools share one task-scoped filesystem:
>   `/inputs` is read-only, `/workspace` is working state, and `/outputs` contains
>   persistent deliverables. Authorization and sandbox failures are fail-closed.
> - **Asynchronous intervention.** Type while an agent is running to queue a new
>   instruction. It is injected at the next safe turn boundary without discarding
>   the active run. In Agent Team mode it steers the coordinator; already-running
>   sub-agents are allowed to finish.
> - **Transparent deliverables.** On macOS/Docker, `/outputs` maps to
>   `.apodex/runs//outputs` on the host. The same run directory also
>   contains its checkpoint, trace, engine log, and trajectories.
> - **Approval, trace, and recovery.** Mutating operations show a diff and require
>   approval unless `--yes` is enabled. Sessions are checkpointed, every action is
>   traced locally, `/revert` restores session changes, and `--resume` continues a
>   saved run.
> - **Evaluation included.** The subprocess runner supports research and
>   file-grounded benchmarks, deterministic artifact collection, concurrency,
>   progress inspection, and rerunning individual failures.
> 
>   
> 
> Conceptual Agent Team workflow, from task delegation and asynchronous report collection to verification and final synthesis.
> 
> 
> # Optional web research tools
> SERPER_API_KEY=
> JINA_API_KEY=
> ```
> 
> Start the TUI:
> 
> ```bash
> 
> ## Benchmark evaluation
> 
> The evaluation harness runs each benchmark question in an isolated subprocess,
> supports resumable multi-run experiments, and dispatches benchmark-specific
> deterministic or model-based judges. A minimal smoke run, once the datasets are
> downloaded per [the evaluation guide](docs/eval.md#datasets), is:
> 
> ```bash
> uv sync --extra eval --extra sandbox --extra document-readers
> uv run python -m benchmarks.public.runner.run_subprocess \
>   --benchmark browsecomp --pipeline stateful-react-agent --profile default \
>   --limit 1 --concurrency 1 --out ./results/smoke
> ```
> 
> The [evaluation guide](docs/eval.md) is the canonical operator reference for
> credentials, judge preflight, datasets, file benchmarks, execution, and result
> inspection. The [benchmark registry](benchmarks/README.md) lists dataset keys,
> default pipelines, scoring implementations, and extension points.
> FrontierSearchBench has its own external scorer and an isolation requirement, so
> it is documented separately in
> [FrontierSearchBench evaluation](docs/eval-frontier-search.md).
> 
> 
> ## Supported benchmarks
> 
> BrowseComp, BrowseComp-ZH, xbench-DeepResearch, Humanity's Last Exam (text-only),
> SuperChem, FrontierScience-Research, FrontierScience-Olympiad, DeepSearchQA,
> WideSearch, FrontierSearchBench, OfficeQA, GDPval, APEX, and OneMillion-Bench.
> 
> GDPval uses deterministic deliverable validation in this open-source harness;
> the agentic pairwise grader is intentionally excluded. The
> [benchmark registry](benchmarks/README.md#supported-benchmarks) is authoritative
> for each dataset key, its default pipeline, and its scoring implementation.
> 
> 
> # FrontierAgent
> 
> FrontierAgent is an open-source agent runtime, terminal product, and evaluation
> suite for long-horizon research and file-based work. The `frontier-agent` TUI
> ships two native workflows:
> 
> - **ReAct** — one stateful agent researches, reads files, writes deliverables,
>   runs commands, and iterates in a task-scoped sandbox.
> - **Agent Team** — a coordinator maintains a task board, delegates independent
>   work to parallel sub-agents, collects their reports, and synthesizes the result.
> 
> The same workflow engine powers the benchmark runner used to evaluate Apodex
> models. The framework, tools, workflows, and evaluation layer remain separate,
> so each can be reused independently.
> 
> > **Want to try FrontierAgent without hosting a model?**
> >
> > Apodex-1.1 is available through the
> > **[Apodex API Platform](https://platform.apodex.ai/)**. Get an API key,
> > connect its OpenAI-compatible endpoint, and start running FrontierAgent in
> > minutes.
> 
> New here? Use the **[documentation index](docs/README.md)** to find the right
> installation, SGLang, workflow, evaluation, or developer guide.
> 
>   
> 
> 
> ## How it fits together
> 
> ```mermaid
> flowchart LR
>     U["User / benchmark task"] --> TUI["TUI or subprocess runner"]
>     TUI --> R["Stateful ReAct"]
>     TUI --> C["Agent Team coordinator"]
>     C --> B["Task board"]
>     B --> S1["Sub-agent 1"]
>     B --> S2["Sub-agent 2"]
>     B --> SN["Sub-agent N"]
>     R --> FS["Task sandbox"]
>     S1 --> FS
>     S2 --> FS
>     SN --> FS
>     FS --> I["/inputs (read-only)"]
>     FS --> W["/workspace (working files)"]
>     FS --> O["/outputs (deliverables)"]
>     S1 --> C
>     S2 --> C
>     SN --> C
>     C --> A["Final answer / report"]
>     R --> A
> ```
> 
> The repository boundaries are intentional:
> 
> ```text
> frontier_agent/  generic loop, scheduling, registries, AgentBus, observers
> plugins/tools/   web, shell, file, sandbox, and team tool implementations
> workflows/       ReAct and Agent Team pipelines, profiles, prompts, observers
> apodex/          terminal CLI/TUI, approvals, sessions, traces, and Docker path
> benchmarks/      public harness plus bundled FrontierSearchBench/FrontierChallenge
> ```
> 
> More detail: [framework architecture](docs/framework.md),
> [Agent Team](workflows/agent_team/README.md), and
> [Stateful ReAct](workflows/stateful_react_agent/README.md). See
> [run artifacts and timestamps](docs/run-artifacts.md) for the on-disk layout.
> 
> 
> # Stateful single-agent workflow
> uv run frontier-agent --mode react --cwd /path/to/project
> 
> 
> # Coordinator plus parallel sub-agents
> uv run frontier-agent --mode agent_team --cwd /path/to/project
> ```
> 
> `uv sync` above installs the lightweight terminal runtime. Scientific and
> document packages are intentionally optional in native mode; the agent installs
> only what a task actually needs into `/.apodex/runtime/native`. The
> `apodex` command is retained as a compatibility alias.
> 
> Prefer a script that does all of the above? `./scripts/run-macos.sh` and
> `./scripts/run-linux.sh` set up a hosted-endpoint install, and
> `./scripts/run-linux-gpu.sh --install-system-deps --setup-only` prepares a native,
> isolated SGLang environment on a Linux NVIDIA GPU. The step-by-step equivalent is
> the [endpoint quickstart](docs/install/tui-endpoint-quickstart.md)
> ([中文教程](docs/install/tui-endpoint-quickstart.zh-CN.md)), which requires neither
> model self-hosting nor Docker.
> 
> Local SGLang serving is pinned to reviewed NVIDIA driver / CUDA / SGLang tracks,
> and a mismatch surfaces late as opaque CUDA or Triton kernel errors during model
> load. Confirm your `nvidia-smi` driver against the
> [GPU compatibility matrix](docs/install/gpu-compatibility.md) before choosing an
> image tag or native pin. The GPU helper selects a reviewed userspace track from
> the host driver, but never installs or replaces the driver itself.
> 
> 
> ### Deployment model
> 
> The operating system, FrontierAgent runtime, and model runtime are independent
> choices. “NVIDIA” describes the local model service, not how the agent itself
> runs. Unsure which applies to your machine or GPU provider? Start with the
> **[installation chooser](docs/install/README

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/ApodexAI/FrontierAgent) · [官方網站](https://www.apodex.ai)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ApodexAI--FrontierAgent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "ApodexAI--FrontierAgent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "ApodexAI--FrontierAgent"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ApodexAI--FrontierAgent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ApodexAI" AND file.name != "ApodexAI--FrontierAgent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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
> const me = dv.page("Repos/ApodexAI--FrontierAgent");
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

> **2026-08-26** — 首次收錄
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

- [[2026-08-29|2026-08-29]] — 再次上榜，1.2k stars
- [[2026-08-28|2026-08-28]] — 再次上榜，1.2k stars
- [[2026-08-27|2026-08-27]] — 再次上榜，1.1k stars
- [[2026-08-26|2026-08-26]] — 首次收錄，614 stars
