---
repo: aiming-lab/AutoResearchClaw
url: https://github.com/aiming-lab/AutoResearchClaw
owner: aiming-lab
owner_type: Organization
language: Python
license: N/A
description: "Fully autonomous research from idea to paper. Chat an Idea. Get a Paper. Fully Autonomous. 🦞"
homepage: ""
stars: 1449
stars_per_day: 1449
forks: 192
open_issues: 6
created: 2026-03-15
pushed_at: 2026-03-16
first_seen: 2026-03-17
week: "2026-W12"
month: "2026-03"
category: "Other"
subcategory: ""
release_tag: "v0.2.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-17
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-20"
contributor_count: 5
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 7252
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-17"
star_history: "2026-03-17:1449"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/autonomous_research"
  - "topic/citation_verification"
  - "topic/llm_agents"
  - "topic/multi_agent_debate"
  - "topic/openclaw"
aliases:
  - "AutoResearchClaw"
  - "aiming-lab/AutoResearchClaw"
---

# AutoResearchClaw

**1.4k** stars · **1.4k** stars/天 · 建立 1 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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

`ORG` `v0.2.0`

`autonomous-research` `citation-verification` `llm-agents` `multi-agent-debate` `openclaw` `paper-generation` `scientific-discovery`

> [!summary] 一句話摘要
> Fully autonomous research from idea to paper. Chat an Idea. Get a Paper. Fully Autonomous. 🦞

## 專案簡介

Fully autonomous research from idea to paper. Chat an Idea. Get a Paper. Fully Autonomous. 🦞

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
| Forks | 192 |
| Open Issues | 6 |
| Issue 解決率 | 33% (3 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 7.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aiming-lab/AutoResearchClaw) |
| Topics | `autonomous-research` `citation-verification` `llm-agents` `multi-agent-debate` `openclaw` `paper-generation` `scientific-discovery` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "HTML" : 3
>     "TeX" : 1
>     "BibTeX Style" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jiaaqiliu](https://github.com/Jiaaqiliu) | 13 |
> | [@JasonOA888](https://github.com/JasonOA888) | 2 |
> | [@lupuleticatalin](https://github.com/lupuleticatalin) | 1 |
> | [@dl-m9](https://github.com/dl-m9) | 1 |
> | [@huaxiuyao](https://github.com/huaxiuyao) | 1 |

**最新版本**：v0.2.0 — v0.2.0 — Multi-Agent Pipeline, Docker Sandbox & Quality Hardening (2026-03-16)

> [!info]- Release Notes
> ## Highlights
> 
> This release introduces **three multi-agent subsystems**, a **hardened Docker sandbox**, and **4 rounds of paper quality auditing** — significantly improving the end-to-end quality of generated research papers.
> 
> ## New Multi-Agent Subsystems
> 
> ### CodeAgent (4-phase architecture)
> - LLM generates multi-file experiment code (main.py + setup.py + requirements.txt)
> - Static analysis & deep validation (AST-based class/method checks)
> - LLM-guided code review with structured JSON feedback
> - Iterative repair loop (up to 3 rounds) with automatic UnboundLocalError fix
> 
> ### BenchmarkAgent (4 sub-agents: Surveyor → Selector → Acquirer → Validator)
> - Domain-aware dataset and baseline selection from 13-domain knowledge base
> - Automatic benchmark acquisition with Docker compatibility validation
> - Integrated at Stage 9 (experiment_design), output injected into Stage 10
> 
> ### FigureAgent (5 sub-agents: Planner → CodeGen → Renderer → Critic → Integrator)
> - Academic-quality chart generation with SciencePlots, 300 DPI, colorblind-safe palette
> - 6 built-in chart templates + LLM fallback for custom visualizations
> - Tri-modal critic review (data accuracy, aesthetics, academic convention)
> 
> ## Docker Sandbox Enhancements
> - Network-policy-aware code generation: `none` | `setup_only` | `pip_only` | `full`
> - Dynamic dependency installation via requirements.txt
> - Pre-cached datasets: CIFAR-10/100, MNIST, FashionMNIST, STL-10, SVHN
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** docs: update badges, URLs, and config reference across all READMEs

## README 摘錄

> [!info]- 展開查看原文 README
> Chat an Idea. Get a Paper. Fully Autonomous.
> 
>   Just chat with OpenClaw: "Research X" → done.
> 
>   
> 
>   
>   
>   
>   
>   
> 
>   🇨🇳 中文 ·
>   🇯🇵 日本語 ·
>   🇰🇷 한국어 ·
>   🇫🇷 Français ·
>   🇩🇪 Deutsch ·
>   🇪🇸 Español ·
>   🇧🇷 Português ·
>   🇷🇺 Русский ·
>   🇸🇦 العربية
> 
>   📖 Integration Guide
> 
> ---
> 
> > **🧪 We're looking for testers!** Try the pipeline with your own research idea — from any field — and [tell us what you think](docs/TESTER_GUIDE.md). Your feedback directly shapes the next version. **[→ Testing Guide](docs/TESTER_GUIDE.md)** | **[→ 中文测试指南](docs/TESTER_GUIDE_CN.md)**
> 
> ---
> 
> 
> ## 🚀 Quick Start
> 
> ```bash
> 
> # 1. Clone & install
> git clone https://github.com/aiming-lab/AutoResearchClaw.git
> cd AutoResearchClaw
> python3 -m venv .venv && source .venv/bin/activate
> pip install -e .
> 
> 
> # config.yaml — ACP example
> llm:
>   provider: "acp"
>   acp:
>     agent: "claude"   # Any ACP-compatible agent CLI command
>     cwd: "."          # Working directory for the agent
>   # No base_url or api_key needed — the agent handles its own auth.
> ```
> 
> ```bash
> 
> ## ✨ Key Features
> 
> | Feature | Description |
> |---------|------------|
> | **📚 Multi-Source Literature** | Real papers from arXiv (primary) + Semantic Scholar — query expansion, deduplication, circuit breaker with graceful degradation |
> | **🔍 4-Layer Citation Verification** | arXiv ID check → CrossRef/DataCite DOI → Semantic Scholar title match → LLM relevance scoring. Hallucinated refs auto-removed. |
> | **🖥️ Hardware-Aware Execution** | Auto-detects GPU (NVIDIA CUDA / Apple MPS / CPU-only) and adapts code generation, imports, and experiment scale accordingly |
> | **🧪 Sandbox Experiments** | AST-validated code, immutable harness, NaN/Inf fast-fail, self-healing repair, iterative refinement (up to 10 rounds), partial result capture |
> | **📝 Conference-Grade Writing** | NeurIPS/ICML/ICLR templates, section-by-section drafting (5,000-6,500 words), anti-fabrication guard, revision length guard, anti-disclaimer enforcement |
> | **📐 Template Switching** | `neurips_2025`, `iclr_2026`, `icml_2026` — Markdown → LaTeX with math, tables, figures, cross-refs, `\cite{}` |
> | **🚦 Quality Gates** | 3 human-in-the-loop gates (Stages 5, 9, 20) with rollback. Skip with `--auto-approve`. |
> 
> ---
> 
> 
> # 2. Configure
> cp config.researchclaw.example.yaml config.arc.yaml
> 
> # Edit config.arc.yaml — set your LLM API endpoint and key
> 
> 
> # config.arc.yaml
> openclaw_bridge:
>   use_cron: true              # ⏰ Scheduled research runs
>   use_message: true           # 💬 Progress notifications (Discord/Slack/Telegram)
>   use_memory: true            # 🧠 Cross-session knowledge persistence
>   use_sessions_spawn: true    # 🔀 Spawn parallel sub-sessions for concurrent stages
>   use_web_fetch: true         # 🌐 Live web search during literature review
>   use_browser: false          # 🖥️ Browser-based paper collection
> ```
> 
> Each flag activates a typed adapter protocol. When OpenClaw provides these capabilities, the adapters consume them without code changes. See [`docs/integration-guide.md`](docs/integration-guide.md) for full details.
> 
> 
> ## ⚙️ Configuration Reference
> 
> Click to expand full configuration reference
> 
> ```yaml
> 
> ## 🔥 News
> - **[03/16/2026]** [v0.2.0](https://github.com/aiming-lab/AutoResearchClaw/releases/tag/v0.2.0) — Three multi-agent subsystems (CodeAgent, BenchmarkAgent, FigureAgent), hardened Docker sandbox with network-policy-aware execution, 4-round paper quality audit (AI-slop detection, 7-dim review scoring, NeurIPS checklist), and 15+ bug fixes from production runs.
> - **[03/15/2026]** [v0.1.0](https://github.com/aiming-lab/AutoResearchClaw/releases/tag/v0.1.0) — We release AutoResearchClaw: a fully autonomous 23-stage research pipeline that turns a single research idea into a conference-ready paper. No human intervention required.
> 
> ---
> 
> 
> ## ⚡ One Command. One Paper.
> 
> ```bash
> pip install -e . && researchclaw run --topic "Your research idea here" --auto-approve
> ```
> 
> ---
> 
> 
> ## 🤔 What Is This?
> 
> **You think it. AutoResearchClaw writes it.**
> 
> Drop a research topic — get back a full academic paper with real literature from arXiv & Semantic Scholar, hardware-aware sandbox experiments (GPU/MPS/CPU auto-detected), statistical analysis, multi-agent peer review, and conference-ready LaTeX targeting NeurIPS/ICML/ICLR. No babysitting. No copy-pasting. No hallucinated references.
> 
> 📄paper_draft.mdFull academic paper (Introduction, Related Work, Method, Experiments, Results, Conclusion)
> 📐paper.texConference-ready LaTeX (NeurIPS / ICLR / ICML templates)
> 📚references.bibReal BibTeX references from Semantic Scholar and arXiv — auto-pruned to match inline citations
> 🔍verification_report.json4-layer citation integrity + relevance verification (arXiv, CrossRef, DataCite, LLM)
> 🧪experiment runs/Generated code + sandbox results + structured JSON metrics
> 📊charts/Auto-generated condition comparison charts with error bars and confidence intervals
> 📝reviews.mdMulti-agent peer review with methodology-evidence consistency checks
> 🧬evolution/Self-learning lessons extracted from each run
> 📦deliverables/All final outputs in one folder — compile-ready for Overleaf
> 
> The pipeline runs **end-to-end without human intervention**. When experiments fail, it self-heals. When hypotheses don't hold, it pivots. When citations are fake, it kills them.
> 
> ---
> 
> 
> # 3. Run
> export OPENAI_API_KEY="sk-..."
> researchclaw run --config config.arc.yaml --topic "Your research idea" --auto-approve
> ```
> 
> Output → `artifacts/rc-YYYYMMDD-HHMMSS-/deliverables/` — compile-ready LaTeX, BibTeX, experiment code, charts.
> 
> 📝 Minimum required config
> 
> ```yaml
> project:
>   name: "my-research"
> 
> research:
>   topic: "Your research topic here"
> 
> llm:
>   base_url: "https://api.openai.com/v1"
>   api_key_env: "OPENAI_API_KEY"
>   primary_model: "gpt-4o"
>   fallback_models: ["gpt-4o-mini"]
> 
> experiment:
>   mode: "sandbox"
>   sandbox:
>     python_path: ".venv/bin/python"
> ```
> 
> ---
> 
> 
> ## 🧠 What Makes It Different
> 
> | Capability | How It Works |
> |-----------|-------------|
> | **🔄 PIVOT / REFINE Loop** | Stage 15 autonomously decides: PROCEED, REFINE (tweak params), or PIVOT (new direction). Artifacts auto-versioned. |
> | **🤖 Multi-Agent Debate** | Hypothesis generation, result analysis, and peer review each use structured multi-perspective debate. |
> | **🧬 Self-Learning** | Lessons extracted per run (decision rationale, runtime warnings, metric anomalies) with 30-day time-decay. Future runs learn from past mistakes. |
> | **📚 Knowledge Base** | Every run builds structured KB across 6 categories (decisions, experiments, findings, literature, questions, reviews). |
> | **🛡️ Sentinel Watchdog** | Background quality monitor: NaN/Inf detection, paper-evidence consistency, citation relevance scoring, anti-fabrication guard. |
> 
> ---
> 
> 
> ## 🦞 OpenClaw Integration
> 
> **AutoResearchClaw is an [OpenClaw](https://github.com/openclaw/openclaw)-compatible service.** Install it in OpenClaw and launch autonomous research with a single message — or use it standalone via CLI, Claude Code, or any AI coding assistant.
> 
> 
> ### 🚀 Use with OpenClaw (Recommended)
> 
> If you already use [OpenClaw](https://github.com/openclaw/openclaw) as your AI assistant:
> 
> ```
> 1️⃣  Share the GitHub repo URL with OpenClaw
> 2️⃣  OpenClaw auto-reads RESEARCHCLAW_AGENTS.md → understands the pipeline
> 3️⃣  Say: "Research [your topic]"
> 4️⃣  Done — OpenClaw clones, installs, configures, runs, and returns results
> ```
> 
> **That's it.** OpenClaw handles `git clone`, `pip install`, config setup, and pipeline execution automatically. You just chat.
> 
> 💡 What happens under the hood
> 
> 1. OpenClaw reads `RESEARCHCLAW_AGENTS.md` → learns the research orchestrator role
> 2. OpenClaw reads `README.md` → understands installation and pipeline structure
> 3. OpenClaw copies `config.researchclaw.example.yaml` → `config.yaml`
> 4. Asks for your LLM API key (or uses your environment variable)
> 5. Runs `pip install -e .` + `researchclaw run --topic "..." --auto-approve`
> 6. Returns the paper, LaTeX, experiments, and citations
> 
> 
> ### 🔌 OpenClaw Bri

## 延伸閱讀

[GitHub](https://github.com/aiming-lab/AutoResearchClaw)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "aiming-lab--AutoResearchClaw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "aiming-lab--AutoResearchClaw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "aiming-lab" AND file.name != "aiming-lab--AutoResearchClaw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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
> const me = dv.page("Repos/aiming-lab--AutoResearchClaw");
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

> **2026-03-17** — 首次收錄
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

- [[2026-03-17|2026-03-17]] — 首次收錄，1.4k stars
