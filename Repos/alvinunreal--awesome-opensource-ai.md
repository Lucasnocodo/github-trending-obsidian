---
repo: alvinreal/awesome-opensource-ai
url: https://github.com/alvinreal/awesome-opensource-ai
owner: alvinreal
owner_type: User
language: Python
license: NOASSERTION
description: "Curated list of the best truly open-source AI projects, models, tools, and infrastructure."
homepage: "https://awesomeosai.com"
stars: 2446
stars_per_day: 144
forks: 214
open_issues: 15
created: 2026-03-24
pushed_at: 2026-04-11
first_seen: 2026-03-27
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "開源資源"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-27
use_case: "提供最佳開源 AI 專案、模型、工具及基礎設施的精選清單。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 42
repo_size_kb: 1950
readme_length: 8308
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:1024,2026-03-27:1037,2026-03-28:1460,2026-03-28:1467,2026-03-29:1746,2026-03-29:1751,2026-03-30:1931,2026-03-30:1932,2026-03-31:2063,2026-03-31:2064,2026-04-01:2189,2026-04-02:2236,2026-04-03:2265,2026-04-04:2291,2026-04-05:2308,2026-04-06:2345,2026-04-07:2385,2026-04-08:2402,2026-04-09:2423,2026-04-10:2434,2026-04-11:2446"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/agents"
  - "topic/ai"
  - "topic/artificial_intelligence"
  - "topic/awesome"
  - "topic/awesome_list"
aliases:
  - "awesome-opensource-ai"
  - "alvinreal/awesome-opensource-ai"
  - "提供最佳開源 AI 專案、模型、工具及基礎設施的精選清單。"
---

# awesome-opensource-ai

**2.4k** stars · **144** stars/天 · 建立 17 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agents` `ai` `artificial-intelligence` `awesome` `awesome-list` `generative-ai` `llm` `machine-learning` `mlops` `open-source` `open-source-ai` `rag`

> [!summary] 一句話摘要
> 提供最佳開源 AI 專案、模型、工具及基礎設施的精選清單。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (144 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速找到高品質開源 AI 工具和模型的開發者和研究人員。
> **一句話重點** 這個專案讓開發者能夠快速找到高品質的開源 AI 資源，提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "開源資源" && p.file.name !== "alvinreal--awesome-opensource-ai" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 開源資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案提供了一個經過精選的開源 AI 資源清單，專注於高品質和實用性。

## 專案簡介

這個專案是一個精心策劃的開源 AI 資源清單，涵蓋了從核心框架到評估工具的各種項目。用戶可以透過這個清單找到經過實戰驗證的 AI 模型和工具，並且這些項目都被認為是精英級別的。清單中包括了多種評估框架和數據集，幫助用戶在開發和部署 AI 模型時進行有效的測試和評估。這些工具的選擇基於其在生產環境中的表現，確保用戶能夠獲得高效且可靠的解決方案。用戶可以透過簡單的鏈接訪問每個項目，並直接進行實作。這個清單的核心賣點在於其全面性和高品質，讓開發者能夠快速找到所需的資源。

技術上，這些項目大多使用 Python 開發，並且有著良好的社群支持和活躍的維護。與其他開源資源相比，這個清單專注於高效能和實用性，避免了低質量或未經測試的項目。使用這個清單的開發者可以期待更快的開發週期和更高的模型準確性。值得注意的是，這個專案的社群活躍度高，且有定期更新，顯示出其持續的發展潛力。對於需要快速搭建 AI 解決方案的團隊來說，這是一個非常合適的資源。使用者在選擇項目時應注意其適用性和更新頻率，以確保所選工具能夠滿足當前的需求。

**技術棧**：`Python`

## 重點功能

- 精選項目 — 僅包含經過實戰驗證的開源 AI 工具和模型，確保資源的高品質。
- 多樣化的評估工具 — 提供多種評估框架和數據集，幫助用戶進行有效的模型測試。
- 持續更新 — 社群活躍，定期更新清單中的項目，確保資源的時效性。
- 簡單訪問 — 每個項目都有直接鏈接，方便用戶快速訪問和實作。
- 高品質標準 — 僅選擇精英級別的項目，避免低質量資源的干擾。

## 快速開始

1. 訪問專案網站
```bash
https://awesomeosai.com
```
2. 瀏覽清單中的項目
```bash
直接在網站上探索各類工具和模型
```
3. 選擇並實作所需工具
```bash
根據需求選擇合適的開源項目進行實作
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天就累積 2446 stars（144/天），forks 214（8.7%），顯示出穩定的增長趨勢。這個專案由一群活躍的開發者維護，並且解決了開源 AI 資源分散的問題，讓開發者能夠更容易找到高品質的工具和模型。社群的參與和貢獻也促進了其快速成長，尤其是在 AI 領域的需求不斷上升的背景下。這樣的資源清單在開發者中引起了廣泛的關注，特別是在需要快速整合和評估 AI 解決方案的情境中。

## 適合誰使用

**目標受眾**：需要快速找到高品質開源 AI 工具和模型的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員用它來快速找到高效的開源模型，因為這個清單提供了經過驗證的資源，能夠節省大量的搜尋時間。
> - 開發者用它來選擇合適的評估工具，因為清單中包含了多種針對不同需求的評估框架，能夠提高模型的準確性。
> - 企業團隊用它來建立內部 AI 解決方案，因為這些工具的生產驗證能夠降低開發風險，並提升專案成功率。

## 架構分析

這個專案的架構是以清單的形式呈現，讓用戶可以輕鬆瀏覽和選擇所需的資源。每個項目都附有鏈接，方便用戶直接訪問。這樣的設計使得資源的整合變得簡單，並且能夠快速找到合適的工具。選擇這種清單形式的代價是用戶需要自行評估每個項目的適用性，並且可能會面臨部分項目更新不及時的問題。整體而言，這種架構能夠提供良好的擴展性，因為隨著新工具的出現，清單可以輕鬆更新。

## 技術深入分析

這個專案的核心技術機制在於其精選的開源資源，涵蓋了多種 AI 模型和工具，並提供了評估框架以支持用戶的需求。這些資源大多使用 Python 開發，並且有良好的社群支持，確保了其持續的更新和維護。清單中的項目經過嚴格篩選，僅包含那些在生產環境中表現優異的工具，這樣的選擇使得開發者能夠更快地找到合適的解決方案。由於專案的設計是以清單形式呈現，用戶可以快速瀏覽和選擇所需的資源，這樣的設計使得整合變得簡單。儘管如此，用戶仍需自行評估每個項目的適用性，這可能會對某些新手造成困難。整體而言，這個專案在開源 AI 生態系中扮演了重要角色，幫助開發者更有效地利用可用資源。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了清單的概覽，但缺乏具體的使用範例。安裝過程非常簡單，因為用戶只需訪問網站即可開始使用。沒有提供多語言支持，僅有英文內容，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 資源高品質 — 僅包含經過實戰驗證的項目，保證了工具的可靠性。
> - 使用方便 — 清單形式讓用戶能快速找到所需工具，節省搜尋時間。
> - 社群活躍 — 定期更新和維護，確保資源的時效性和相關性。

> [!danger] 缺點
> - 不包含非開源工具，限制了選擇範圍。
> - 部分項目可能過時，需用戶自行評估。
> - 缺乏詳細的使用範例，對新手不夠友好。

> [!warning] 注意事項
> - 不包含非開源的 AI 工具或模型
> - 項目更新頻率可能不一，部分工具可能過時
> - 需要用戶自行評估每個項目的適用性

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
| Forks | 214 |
| Open Issues | 15 |
| Issue 解決率 | 42% (11 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-03-24 |
| 官方網站 | [Link](https://awesomeosai.com) |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alvinreal/awesome-opensource-ai) |
| Topics | `agents` `ai` `artificial-intelligence` `awesome` `awesome-list` `generative-ai` `llm` `machine-learning` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alvinreal](https://github.com/alvinreal) | 95 |
> | [@alvinunreal](https://github.com/alvinunreal) | 52 |
> | [@paihari](https://github.com/paihari) | 2 |
> | [@jeheskielSunloy77](https://github.com/jeheskielSunloy77) | 1 |
> | [@anulum](https://github.com/anulum) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新清單。
**連結**：[文件](https://awesomeosai.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-10）
> **活躍天數** 1 天 · **最新 commit** Add Deepchecks to MLOps / LLMOps & Production section (#186)

## README 摘錄

> [!info]- 展開查看原文 README
> # Awesome Open Source AI
> 
> *A curated list of **battle-tested, production-proven** open-source AI models, libraries, infrastructure, and developer tools. Only elite-tier projects make this list.*
> 
> [](https://awesome.re)
> [](./CONTRIBUTING.md)
> [](./LICENSE)
> 
> by **Boring Dystopia Development**
> 
>   
>     
>   &nbsp;
>   
>     
>   &nbsp;
>   
>     
>   
> 
> ---
> 
> **[ 🌱 Emerging ](./EMERGING.md)** • **[ Explore the List ](#-contents)** • **[ Submission Guidelines ](#contributing)** • **[ License ](#license)**
> 
> 
> ### 📈 9. Evaluation, Benchmarks & Datasets
> 
> > Benchmarks, evaluation frameworks, datasets, and supporting tools for model assessment.
> 
> #### Benchmark Suites
> 
> - **[LiveBench](https://github.com/LiveBench/LiveBench)**  - Contamination-free LLM benchmark with objective ground-truth scoring. ICLR 2025 spotlight paper featuring frequently-updated questions from recent sources. Tests math, coding, reasoning, language, instruction following, and data analysis.
> - **[lm-evaluation-harness (EleutherAI)](https://github.com/EleutherAI/lm-evaluation-harness)**  - De-facto standard for generative model evaluation.
> - **[HELM (Stanford)](https://github.com/stanford-crfm/helm)**  - Holistic Evaluation of Language Models.
> - **[SWE-bench](https://github.com/SWE-bench/SWE-bench)**  - Evaluates LLMs on real-world GitHub issues from 15+ Python repositories.
> - **[GAIA](https://huggingface.co/datasets/gaia-benchmark/GAIA)** - Real-world multi-step agentic benchmark.
> - **[OpenCompass](https://github.com/open-compass/opencompass)**  - Evaluation platform for benchmarking language and multimodal models across large benchmark suites.
> - **[MLPerf Inference](https://github.com/mlcommons/inference)**  - Industry-standard ML inference benchmarks with reference implementations for AI accelerators.
> - **[SWE-rebench (Nebius)](https://huggingface.co/datasets/nebius/SWE-rebench)** - Continuously updated benchmark with 21,000+ real-world SWE tasks for evaluating agentic LLMs. Decontaminated, mined from GitHub.
> - **[AgentBench (THUDM)](https://github.com/THUDM/AgentBench)**  - Comprehensive benchmark to evaluate LLMs as agents across 8 diverse environments including household, web shopping, OS interaction, and database tasks. ICLR 2024. Apache 2.0 licensed.
> 
> #### Evaluation Frameworks
> 
> - **[DeepEval](https://github.com/confident-ai/deepeval)**  - The "Pytest for LLMs".
> - **[Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai)**  - Framework for large language model evaluations from the UK AI Security Institute.
> - **[RAGAs](https://github.com/explodinggradients/ragas)**  - End-to-end RAG evaluation framework.
> - **[Lighteval](https://github.com/huggingface/lighteval)**  - Evaluation toolkit for LLMs across multiple backends with reusable tasks, metrics, and result tracking.
> - **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**  - Standardized evaluation metrics.
> - **[OpenAI Evals](https://github.com/openai/evals)**  - Framework for evaluating LLMs and LLM systems with an open-source registry of 100+ community-contributed benchmarks. MIT licensed.
> 
> #### High-quality Open Datasets & Data Tools
> 
> - **[Hugging Face Datasets](https://github.com/huggingface/datasets)**  - Largest open repository of datasets.
> - **[Cleanlab](https://github.com/cleanlab/cleanlab)**  - Data-centric AI package for automatically finding and fixing issues in datasets. Detects label errors, outliers, and ambiguous examples in ML datasets. Apache 2.0 licensed.
> - **[FineWeb / FineWeb-2 (Hugging Face)](https://huggingface.co/datasets/HuggingFaceFW/fineweb)** - Curated 15T+ token web dataset for pre-training.
> - **[OSWorld](https://github.com/xlang-ai/OSWorld)**  - Multimodal agent benchmark dataset.
> - **[Great Expectations](https://github.com/great-expectations/great_expectations)**  - Always know what to expect from your data. Data validation, profiling, and documentation for data pipelines. Apache 2.0 licensed.
> 
> ---
> 
> 
> ## 📋 Contents
> 
> - [🧬 1. Core Frameworks & Libraries](#-1-core-frameworks--libraries)
> - [🧠 2. Open Foundation Models](#-2-open-foundation-models)
> - [⚡ 3. Inference Engines & Serving](#-3-inference-engines--serving)
> - [🤖 4. Agentic AI & Multi-Agent Systems](#-4-agentic-ai--multi-agent-systems)
> - [🔍 5. Retrieval-Augmented Generation (RAG) & Knowledge](#-5-retrieval-augmented-generation-rag--knowledge)
> - [🎨 6. Generative Media Tools](#-6-generative-media-tools)
> - [🛠️ 7. Training & Fine-tuning Ecosystem](#section-7)
> - [📊 8. MLOps / LLMOps & Production](#-8-mlops--llmops--production)
> - [📈 9. Evaluation, Benchmarks & Datasets](#-9-evaluation-benchmarks--datasets)
> - [🛡️ 10. AI Safety, Alignment & Interpretability](#section-10)
> - [🧩 11. Specialized Domains](#-11-specialized-domains)
> - [🖥️ 12. User Interfaces & Self-hosted Platforms](#section-12)
> - [🧪 13. Developer Tools & Integrations](#-13-developer-tools--integrations)
> - [📚 14. Resources & Learning](#-14-resources--learning)
> 
> ---
> 
> 
> ### 🛡️ 10. AI Safety, Alignment & Interpretability
> 
> > Tools for alignment, interpretability, safety evaluation, and adversarial testing.
> 
> #### Safety Evaluation Frameworks
> 
> - **[Inspect AI](https://github.com/UKGovernmentBEIS/inspect_ai)**  - Framework for large language model evaluations from the UK AI Safety Institute. Systematic capability and safety assessments with built-in scaffolding for multi-turn dialog, tool use, and adversarial testing. MIT licensed.
> - **[DeepEval](https://github.com/confident-ai/deepeval)**  - LLM evaluation framework with built-in safety metrics including hallucination detection, bias detection, toxicity evaluation, and prompt alignment checking. Apache 2.0 licensed.
> 
> #### Alignment & RLHF Tools
> 
> - **[Safe-RLHF](https://github.com/PKU-Alignment/safe-rlhf)**  - Safe reinforcement learning from human feedback.
> - **[Alignment Handbook](https://github.com/huggingface/alignment-handbook)**  - Complete recipes for full-stack alignment.
> - **[OpenRLHF](https://github.com/OpenRLHF/OpenRLHF)**  - High-performance distributed RLHF framework.
> 
> #### Interpretability & Explainability
> 
> - **[interpret (Microsoft)](https://github.com/interpretml/interpret)**  - Fit interpretable models and explain blackbox machine learning with state-of-the-art explainability techniques including Explainable Boosting Machines and SHAP-based explanations.
> - **[TransformerLens](https://github.com/TransformerLensOrg/TransformerLens)**  - Gold-standard for mechanistic interpretability.
> - **[SAELens](https://github.com/jbloomAus/SAELens)**  - Sparse autoencoders for interpretable features.
> - **[Captum](https://github.com/pytorch/captum)**  - PyTorch's official interpretability library.
> - **[SHAP](https://github.com/shap/shap)**  - Game theoretic approach to explain the output of any machine learning model. Industry standard for model interpretability.
> - **[XAI](https://github.com/EthicalML/xai)**  - eXplainability toolbox for machine learning with bias evaluation and production monitoring tools.
> - **[EasyEdit](https://github.com/zjunlp/EasyEdit)**  - Easy-to-use knowledge editing framework for LLMs. Enables precise modification of model knowledge and behavior to correct hallucinations or outdated information. ACL 2024. MIT licensed.
> - **[AIX360](https://github.com/Trusted-AI/AIX360)**  - Comprehensive AI explainability toolkit with interpretability algorithms for data and machine learning models. Includes TED, BRCG, and ProtoNN methods for diverse explanation needs. Apache 2.0 licensed.
> 
> #### Fairness & Bias Mitigation
> 
> - **[AI Fairness 360](https://github.com/Trusted-AI/AIF360)**  - Comprehensive toolkit for detecting, understanding, and mitigating unwanted algorithmic bias in datasets and ML models.
> 
> #### Adversarial & Red-teaming Tools
> 
> - **[Garak](https://github.com/NVIDIA/garak)**  - Automated LLM vulnerability scanner.
> - **[Promptfoo](https://github.com/promptfoo/promptfoo)**  - Systematic prompt testing and red-teaming.
> - **[LLM Guard](https://github.com/protectai/llm-guard)**  - Input/output scanner for LLMs.
> - **[A

## 延伸閱讀

相關概念：[[開源]] · [[機器學習]] · [[AI 模型評估]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[mattprusak--autoresearch-genealogy|mattprusak/autoresearch-genealogy]]

[GitHub](https://github.com/alvinreal/awesome-opensource-ai) · [官方網站](https://awesomeosai.com)

## 相關收錄

> [!note]- 直接競品（同子分類：開源資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "開源資源" AND file.name != "alvinreal--awesome-opensource-ai"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "alvinreal--awesome-opensource-ai"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "alvinreal--awesome-opensource-ai" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "alvinreal--awesome-opensource-ai"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["開源","機器學習","AI 模型評估"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alvinreal--awesome-opensource-ai" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alvinreal--awesome-opensource-ai" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alvinreal" AND file.name != "alvinreal--awesome-opensource-ai"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
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

> **2026-03-27** — 首次收錄
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

- [[2026-03-31|2026-03-31]] — 再次上榜，2.1k stars
- [[2026-03-30|2026-03-30]] — 再次上榜，1.9k stars
- [[2026-03-29|2026-03-29]] — 再次上榜，1.7k stars
- [[2026-03-28|2026-03-28]] — 再次上榜，1.5k stars
- [[2026-03-27|2026-03-27]] — 首次收錄，1.0k stars
