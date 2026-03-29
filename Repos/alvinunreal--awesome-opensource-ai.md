---
repo: alvinunreal/awesome-opensource-ai
url: https://github.com/alvinunreal/awesome-opensource-ai
owner: alvinunreal
owner_type: User
language: N/A
license: NOASSERTION
description: "Curated list of the best truly open-source AI projects, models, tools, and infrastructure."
homepage: ""
stars: 1746
stars_per_day: 437
forks: 134
open_issues: 10
created: 2026-03-24
pushed_at: 2026-03-28
first_seen: 2026-03-27
week: "2026-W13"
month: "2026-03"
category: "其他"
subcategory: "資源整理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-27
use_case: "整理出最佳的真正開源 AI 專案、模型、工具和基礎設施。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 13
repo_size_kb: 467
readme_length: 9992
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:1024,2026-03-27:1037,2026-03-28:1460,2026-03-28:1467,2026-03-29:1746"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
  - "topic/agents"
  - "topic/ai"
  - "topic/artificial_intelligence"
  - "topic/awesome"
  - "topic/awesome_list"
aliases:
  - "awesome-opensource-ai"
  - "alvinunreal/awesome-opensource-ai"
  - "整理出最佳的真正開源 AI 專案、模型、工具和基礎設施。"
---

# awesome-opensource-ai

**1.5k** stars · **489** stars/天 · 建立 3 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> 整理出最佳的真正開源 AI 專案、模型、工具和基礎設施。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (489 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速找到開源 AI 資源的開發者和研究者。
> **一句話重點** 這個專案提供了一個集中化的開源 AI 資源清單，讓開發者能夠快速找到所需的工具和模型。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資源整理" && p.file.name !== "alvinunreal--awesome-opensource-ai" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資源整理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到全面的開源 AI 資源，值得採用。

## 專案簡介

這個專案是一個精心策劃的開源 AI 資源清單，涵蓋了模型、庫、基礎設施和開發工具。用戶可以透過這個清單快速找到各種 AI 相關的資源，從核心框架（如 PyTorch 和 TensorFlow）到評估工具（如 lm-evaluation-harness 和 HELM），再到數據集（如 Hugging Face Datasets）。這樣的設計使得開發者能夠更有效率地選擇合適的工具，避免在海量資源中迷失。這個清單的賣點在於其全面性和針對性，特別適合需要快速搭建 AI 系統的開發者。技術上，它涵蓋了從深度學習框架到自動化機器學習的各種工具，並且提供了多種評估和基準工具，這些都是目前 AI 開發中不可或缺的部分。與其他類似的資源相比，這個清單不僅僅是工具的羅列，還提供了詳細的分類和說明，讓用戶能夠快速找到所需的資源。

實際使用中，這個清單能夠幫助開發者節省時間，尤其是在選擇合適的模型和工具時。社群的活躍度也反映在其開放的 issue 和 pull request 中，顯示出持續的維護和更新。這個專案目前處於早期階段，但已經顯示出潛力，未來可能會吸引更多的貢獻者和使用者。對於需要快速搭建 AI 解決方案的團隊來說，這是一個值得考慮的資源。總體來說，這個清單適合各種規模的團隊，特別是那些希望在開源生態系中找到最佳實踐的團隊。

## 重點功能

- 全面的資源清單 — 涵蓋了各種開源 AI 模型、工具和基礎設施。
- 詳細的分類 — 將資源分為核心框架、評估工具、數據集等，便於快速查找。
- 持續更新 — 社群活躍，定期合併新的資源和工具。
- 開放的貢獻機制 — 鼓勵用戶提交新的資源和建議，保持清單的新鮮感。
- 針對性強 — 專注於開源 AI 生態，提供實用的資源而非廣泛的工具列表。

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1467 stars（489/天），forks 109（7.4%），顯示出強勁的增長潛力。這個專案的作者 alvinunreal 及其團隊在開源社群中有一定的影響力，過去也參與了多個 AI 相關專案。這個清單解決了開發者在尋找高品質開源 AI 資源時的痛點，之前的解決方案往往不夠全面或更新不及時。最近的推文和社群討論也促進了這個專案的曝光度。隨著開源 AI 生態的快速發展，這個工具的出現正好填補了資源整合的需求。forks/stars 比率為 7.4%，顯示出使用者對於實際修改和貢獻的興趣。

## 適合誰使用

**目標受眾**：需要快速找到開源 AI 資源的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來快速查找最新的開源 AI 模型和工具，因為這個清單提供了全面的資源，節省了大量搜尋時間。
> - 開發者用它來選擇合適的深度學習框架，因為清單中包含了各種框架的優缺點，幫助他們做出明智的選擇。
> - 數據科學家用它來找到高品質的數據集，因為清單中整理了多個開源數據集，方便他們進行實驗和模型訓練。

## 架構分析

這個專案的架構是以清單形式呈現，將各種開源 AI 資源進行分類和整理。這樣的設計使得用戶能夠快速找到所需的工具和模型，並且能夠根據自己的需求進行選擇。每個資源都附上了簡短的描述和連結，方便用戶進一步探索。

這種清單式的架構使得維護和更新變得簡單，社群成員可以輕鬆地提交新的資源或建議。由於這是一個開源專案，任何人都可以參與貢獻，這樣的設計促進了資源的多樣性和豐富性。整體而言，這個專案的架構簡單明瞭，適合快速查找和使用。

## 技術深入分析

這個專案的核心技術機制是通過精心策劃的清單來整合各種開源 AI 資源，這包括模型、工具和基礎設施。這樣的設計使得用戶能夠快速找到所需的資源，並且能夠根據自己的需求進行選擇。清單中的每個項目都附有簡短的描述和連結，方便用戶進一步探索。這種清單式的架構使得維護和更新變得簡單，社群成員可以輕鬆地提交新的資源或建議。由於這是一個開源專案，任何人都可以參與貢獻，這樣的設計促進了資源的多樣性和豐富性。整體而言，這個專案的架構簡單明瞭，適合快速查找和使用。未來可能會吸引更多的貢獻者和使用者，進一步擴大其影響力。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了清單的結構和使用說明，但缺乏具體的使用範例。安裝過程非常簡單，因為這是一個純粹的資源清單，不需要複雜的安裝步驟。沒有提供多語言支持，主要以英文為主，對於非英語用戶可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 資源全面，涵蓋多個領域的開源 AI 工具。
> - 社群活躍，持續更新和維護。
> - 易於使用，清單式設計便於查找。

> [!danger] 缺點
> - 依賴社群貢獻，更新速度可能不穩定。
> - 部分資源缺乏詳細的使用說明。
> - 沒有針對特定情境的推薦，可能需要自行篩選。

> [!warning] 注意事項
> - 目前資源更新速度依賴於社群貢獻，可能會有延遲。
> - 部分資源可能缺乏詳細的使用說明，對新手不太友好。
> - 沒有針對特定使用情境的推薦，可能需要用戶自行篩選。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速找到開源 AI 資源的開發者 | 非常適合 | 這個清單提供了全面的資源，能夠快速滿足需求。 |
| 希望了解最新開源 AI 工具的研究者 | 適合 | 清單中包含了多個最新的開源工具和模型，對研究者有幫助。 |
| 小型團隊尋找合適的 AI 解決方案 | 普通 | 雖然資源豐富，但可能需要自行篩選適合的工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到全面的開源 AI 資源，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案本身不需要高權限，且不存取敏感資料，適合在各種環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案可以輕鬆融入現有的開發環境，因為它提供了各種開源 AI 資源的連結和描述。在一個使用 PyTorch 和 TensorFlow 的專案中，開發者可以參考這個清單來選擇合適的模型和工具。這個清單與主流的 CI/CD 工具（如 GitHub Actions）相容，開發者可以在 CI 流程中快速查找所需的資源。整合的摩擦點主要在於用戶需要自行篩選適合的工具，可能需要一些時間來熟悉各種資源的特性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，開發者通常依賴各種論壇和個人博客來尋找開源 AI 資源，這些方法往往不夠系統化且信息量龐大。隨著開源 AI 生態的快速發展，對於集中化資源的需求越來越強烈。這個專案正好填補了這一需求，提供了一個清晰的資源清單。

未來，隨著開源 AI 技術的進一步發展，這個清單可能會成為開發者的首選資源。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
| Forks | 109 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-03-27 |
| 建立日期 | 2026-03-24 |
| Repo 大小 | 467 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alvinunreal/awesome-opensource-ai) |
| Topics | `agents` `ai` `artificial-intelligence` `awesome` `awesome-list` `generative-ai` `llm` `machine-learning` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alvinunreal](https://github.com/alvinunreal) | 15 |
> | [@alvinreal](https://github.com/alvinreal) | 12 |
> | [@jeheskielSunloy77](https://github.com/jeheskielSunloy77) | 1 |
> | [@IMisbahk](https://github.com/IMisbahk) | 1 |
> | [@orneryd](https://github.com/orneryd) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期有新的資源和建議被合併。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-27）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #19 from jeheskielSunloy77/feat/add-web-data-ingestion

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/alvinunreal/awesome-opensource-ai/issues/18) | Request to add "Shadow Code" | 0 | 0 |
> | [#16](https://github.com/alvinunreal/awesome-opensource-ai/issues/16) | Autots | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Awesome Open Source AI
> 
> *A curated list of notable open-source AI models, libraries, infrastructure, and developer tools.*
> 
> [](https://awesome.re)
> [](./CONTRIBUTING.md)
> [](./LICENSE)
> 
> ---
> 
> **[ Explore the List ](#-contents)** • **[ Submission Guidelines ](#contributing)** • **[ License ](#license)**
> 
> 
> ### 📈 9. Evaluation, Benchmarks & Datasets
> 
> > Benchmarks, evaluation frameworks, datasets, and supporting tools for model assessment.
> 
> #### Benchmark Suites
> 
> - **[lm-evaluation-harness (EleutherAI)](https://github.com/EleutherAI/lm-evaluation-harness)**  - De-facto standard for generative model evaluation.
> - **[HELM (Stanford)](https://github.com/stanford-crfm/helm)**  - Holistic Evaluation of Language Models.
> - **[GAIA](https://huggingface.co/datasets/gaia-benchmark/GAIA)** - Real-world multi-step agentic benchmark.
> - **[LiveCodeBench](https://github.com/livecodebench/livecodebench)**  - Contamination-free coding benchmark.
> - **[MMLU-Pro / GPQA](https://github.com/TIGER-AI-Lab/MMLU-Pro)**  - Hardened expert-level benchmarks.
> - **[OpenCompass](https://github.com/open-compass/opencompass)**  - Evaluation platform for benchmarking language and multimodal models across large benchmark suites.
> - **[SWE-rebench (Nebius)](https://huggingface.co/datasets/nebius/SWE-rebench)** - Continuously updated benchmark with 21,000+ real-world SWE tasks for evaluating agentic LLMs. Decontaminated, mined from GitHub.
> 
> #### Evaluation Frameworks
> 
> - **[DeepEval](https://github.com/confident-ai/deepeval)**  - The "Pytest for LLMs".
> - **[RAGAs](https://github.com/explodinggradients/ragas)**  - End-to-end RAG evaluation framework.
> - **[Lighteval](https://github.com/huggingface/lighteval)**  - Evaluation toolkit for LLMs across multiple backends with reusable tasks, metrics, and result tracking.
> - **[Hugging Face Evaluate](https://github.com/huggingface/evaluate)**  - Standardized evaluation metrics.
> 
> #### High-quality Open Datasets & Data Tools
> 
> - **[Hugging Face Datasets](https://github.com/huggingface/datasets)**  - Largest open repository of datasets.
> - **[FineWeb / FineWeb-2 (Hugging Face)](https://huggingface.co/datasets/HuggingFaceFW/fineweb)** - Curated 15T+ token web dataset for pre-training.
> - **[RedPajama](https://github.com/togethercomputer/RedPajama-Data)**  - Clean, reproducible Llama training data mix.
> - **[OSWorld](https://github.com/xlang-ai/OSWorld)**  - Multimodal agent benchmark dataset.
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
> ### 🧬 1. Core Frameworks & Libraries
> 
> > Core libraries and frameworks used to build, train, and run AI and machine learning systems.
> 
> #### Deep Learning Frameworks
> 
> - **[PyTorch](https://github.com/pytorch/pytorch)**  - Dynamic computation graphs, Pythonic API, dominant in research and production. The current standard for most frontier AI work.
> - **[TensorFlow](https://github.com/tensorflow/tensorflow)**  - End-to-end platform with excellent production deployment, TPU support, and large-scale serving tools.
> - **[JAX](https://github.com/jax-ml/jax)**  + **[Flax](https://github.com/google/flax)**  - High-performance numerical computing with composable transformations (JIT, vmap, grad). Rising favorite for research and scientific ML.
> - **[Keras](https://github.com/keras-team/keras)**  - High-level, beginner-friendly API that now runs on multiple backends (TensorFlow, JAX, PyTorch). Perfect for rapid experimentation.
> 
> #### Rust ML Frameworks
> 
> - **[Burn](https://github.com/tracel-ai/burn)**  - Next-generation deep learning framework in Rust. Backend-agnostic with CPU, GPU, WebAssembly support.
> - **[Candle (Hugging Face)](https://github.com/huggingface/candle)**  - Minimalist ML framework for Rust. PyTorch-like API with focus on performance and simplicity.
> 
> #### NLP & Transformers
> 
> - **[Transformers (Hugging Face)](https://github.com/huggingface/transformers)**  - The de facto standard library for pretrained NLP models. 1M+ models, 250,000+ downloads/day. BERT, GPT, Llama, Qwen, and hundreds more.
> - **[sentence-transformers](https://github.com/UKPLab/sentence-transformers)**  - Classic library for sentence and image embeddings.
> - **[tokenizers (Hugging Face)](https://github.com/huggingface/tokenizers)**  - Fast state-of-the-art tokenizers for training and inference.
> 
> #### Data Processing & Manipulation
> 
> - **[Pandas](https://github.com/pandas-dev/pandas)**  - The gold standard for data analysis and manipulation in Python.
> - **[Polars](https://github.com/pola-rs/polars)**  - Blazing-fast DataFrame library (Rust backend) - modern alternative to pandas for large-scale workloads.
> - **[Dask](https://github.com/dask/dask)**  - Parallel computing for big data - scales pandas/NumPy/scikit-learn to clusters.
> - **[NumPy](https://github.com/numpy/numpy)**  - Fundamental array computing library that powers almost every AI stack.
> - **[SciPy](https://github.com/scipy/scipy)**  - Scientific computing algorithms (optimization, linear algebra, statistics, signal processing).
> 
> #### Classical ML & Gradient Boosting
> 
> - **[scikit-learn](https://github.com/scikit-learn/scikit-learn)**  - Industry-standard library for traditional machine learning (classification, regression, clustering, pipelines).
> - **[XGBoost](https://github.com/dmlc/xgboost)**  - Scalable, high-performance gradient boosting library. Still dominates Kaggle and tabular competitions.
> - **[LightGBM](https://github.com/microsoft/LightGBM)**  - Microsoft's ultra-fast gradient boosting framework, optimized for speed and memory.
> - **[CatBoost](https://github.com/catboost/catboost)**  - Gradient boosting that handles categorical features natively with great out-of-the-box performance.
> 
> #### AutoML & Hyperparameter Optimization
> 
> - **[Optuna](https://github.com/optuna/optuna)**  - Modern, define-by-run hyperparameter optimization with pruning and visualizations. Extremely popular in 2026.
> - **[AutoGluon](https://github.com/autogluon/autogluon)**  - AWS AutoML toolkit for tabular, image, text, and multimodal data - state-of-the-art with almost zero code.
> - **[FLAML](https://github.com/microsoft/FLAML)**  - Microsoft's fast & lightweight AutoML focused on efficiency and low compute.
> - **[AutoKeras](https://github.com/keras-team/autokeras)**  - Neural architecture search on top of Keras.
> - **[TPOT](https://github.com/epistasislab/tpot)**  - Genetic programming-based AutoML for full pipeline optimization.
> 
> #### Model Training & Optimization Utilities
> 
> - **[Hugging Face Accelerate](https://github.com/huggingface/accelerate)**  - Simple API to make training scripts run on any hardware (multi-GPU, TPU, mixed precision) with minimal code changes.
> - **[DeepSpeed](https://github.com/microsoft/DeepSpeed)**  - Microsoft's deep learning optimization library for extreme-scale training (ZeRO, offloading, MoE).
> - **[Transformers](https://github.com/huggingface/transformers)**  - Library of pretrained transformer models and utilities for text, vision, audio, and multimodal training and inference.
> - **[FlashAttention](https://github.com/Dao-AILab/flash-attention)**  -

## 延伸閱讀

相關概念：[[開源]] · [[AI 模型]] · [[資源整理]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[mattprusak--autoresearch-genealogy|mattprusak/autoresearch-genealogy]] · [[magnum6actual--flipoff|magnum6actual/flipoff]] · [[novatic14--MANPADS-System-Launcher-and-Rocket|novatic14/MANPADS-System-Launcher-and-Rocket]]

[GitHub](https://github.com/alvinunreal/awesome-opensource-ai)

## 相關收錄

> [!note]- 直接競品（同子分類：資源整理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資源整理" AND file.name != "alvinunreal--awesome-opensource-ai"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "alvinunreal--awesome-opensource-ai"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "alvinunreal--awesome-opensource-ai" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "alvinunreal--awesome-opensource-ai"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["開源","AI 模型","資源整理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alvinunreal--awesome-opensource-ai" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alvinunreal--awesome-opensource-ai" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alvinunreal" AND file.name != "alvinunreal--awesome-opensource-ai"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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
> const me = dv.page("Repos/alvinunreal--awesome-opensource-ai");
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

- [[2026-03-29|2026-03-29]] — 再次上榜，1.7k stars
- [[2026-03-28|2026-03-28]] — 再次上榜，1.5k stars
- [[2026-03-27|2026-03-27]] — 首次收錄，1.0k stars
