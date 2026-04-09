---
repo: alvinreal/awesome-opensource-ai
url: https://github.com/alvinreal/awesome-opensource-ai
owner: alvinreal
owner_type: User
language: Python
license: NOASSERTION
description: "Curated list of the best truly open-source AI projects, models, tools, and infrastructure."
homepage: "https://awesomeosai.com"
stars: 2423
stars_per_day: 162
forks: 210
open_issues: 17
created: 2026-03-24
pushed_at: 2026-04-09
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
use_case: "提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選列表。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 39
repo_size_kb: 1506
readme_length: 9930
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:1024,2026-03-27:1037,2026-03-28:1460,2026-03-28:1467,2026-03-29:1746,2026-03-29:1751,2026-03-30:1931,2026-03-30:1932,2026-03-31:2063,2026-03-31:2064,2026-04-01:2189,2026-04-02:2236,2026-04-03:2265,2026-04-04:2291,2026-04-05:2308,2026-04-06:2345,2026-04-07:2385,2026-04-08:2402,2026-04-09:2423"
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
  - "提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選列表。"
---

# awesome-opensource-ai

**2.4k** stars · **162** stars/天 · 建立 15 天前 · Python · NOASSERTION

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
> 提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選列表。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (162 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望尋找高品質開源 AI 資源的開發者和研究人員。
> **一句話重點** 這個專案的價值在於其集中化的開源 AI 資源列表，能夠有效幫助開發者快速找到所需工具。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習和 1 小時整合，能快速獲得各種開源 AI 資源，值得採用。

> [!abstract] 核心創新
> 這個專案提供了經過實戰驗證的開源 AI 資源的集中化列表，讓開發者能夠快速找到高品質的工具。

## 專案簡介

這個專案是一個精心策劃的開源 AI 資源列表，涵蓋了從模型到基礎設施的各種工具。用戶可以透過這個列表找到經過實戰驗證的開源 AI 專案，這些專案在生產環境中已經被廣泛應用。列表中的項目包括各種評估框架、數據集和工具，幫助用戶進行模型的評估和基準測試。核心賣點在於提供一個集中化的平台，讓開發者能夠快速找到高品質的開源 AI 資源。這個列表不僅涵蓋了主流的開源模型，還包括一些新興的技術和工具，讓用戶能夠跟上最新的技術趨勢。

使用者可以透過簡單的鏈接訪問每個專案的詳細信息，並根據自己的需求選擇合適的工具。這樣的設計使得開發者在尋找開源 AI 解決方案時不再需要四處搜尋，節省了大量時間。這個列表的維護者們也持續更新內容，確保資源的時效性和相關性。相較於其他開源資源列表，這個專案的獨特之處在於其專注於經過實戰驗證的項目，並且提供了詳細的分類和描述，讓用戶能夠更快找到所需的工具。整體來說，這是一個對於希望在開源 AI 領域中獲得最新資源的開發者來說非常有價值的工具。

**技術棧**：`Python`

## 重點功能

- 精選開源 AI 專案 — 僅包含經過實戰驗證的項目，確保資源的可靠性。
- 詳細分類 — 將資源分為多個類別，方便用戶快速找到所需工具。
- 持續更新 — 定期更新內容，確保用戶獲得最新的資源。
- 鏈接直接訪問 — 每個項目都有直接鏈接，方便用戶快速進入詳細頁面。
- 社群貢獻 — 鼓勵用戶提交新的資源，保持列表的活躍性和多樣性。

## 快速開始

1. 訪問專案網站
```bash
https://awesomeosai.com
```
2. 瀏覽分類列表
```bash
# 無需指令，直接在網站上瀏覽
```
3. 選擇感興趣的項目
```bash
# 點擊鏈接以獲取更多資訊
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 2423 stars（162/天），forks 210（8.7%），顯示出強勁的增長潛力。這個專案由一群經驗豐富的開發者維護，他們在開源社群中擁有良好的聲譽。它解決了開發者在尋找高品質開源 AI 資源時的痛點，之前的解決方案往往缺乏集中化和更新頻率。隨著開源 AI 的需求增加，這個專案正好填補了這一空白。社群的參與度也相對較高，顯示出用戶對這個資源的需求。這個專案的成功與開源 AI 生態系統的快速發展密切相關。

## 適合誰使用

**目標受眾**：希望尋找高品質開源 AI 資源的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員用它來快速找到最新的開源 AI 模型和工具，因為這個列表提供了經過驗證的資源，節省了大量的搜尋時間。
> - 資料科學家用它來尋找合適的數據集和評估工具，因為這些資源都是針對特定任務精心挑選的，能提高工作效率。
> - 開發者用它來整合多種開源 AI 工具到自己的專案中，因為這個列表提供了詳細的分類和鏈接，方便快速集成。

## 架構分析

這個專案的架構基於一個精選的資源列表，使用 Markdown 格式進行組織。這樣的設計使得用戶能夠輕鬆瀏覽和查找所需的資源。每個資源都附有直接鏈接，方便用戶快速訪問。

選擇 Markdown 格式的好處是簡潔且易於維護，社群貢獻者可以輕鬆地提交新的資源。這種架構的代價是無法提供即時的資源使用體驗，因為用戶需要跳轉到外部鏈接。整體而言，這個架構非常適合快速查找和分享開源資源，但在使用上不如集成化的工具來得方便。

## 技術深入分析

這個專案的核心技術機制在於精選和整理開源 AI 資源，使用 Markdown 格式進行組織。這樣的設計不僅簡單易用，還能夠快速更新。整體資料流從用戶訪問網站開始，然後通過分類和鏈接引導用戶找到所需的資源。這個專案的設計取捨在於選擇了簡潔性和易維護性，而不是即時的使用體驗。這意味著用戶需要跳轉到外部鏈接來使用資源，這在某些情況下可能會造成不便。這個專案的擴展性良好，因為社群可以隨時提交新的資源，保持列表的活躍性。整體而言，這是一個對於希望在開源 AI 領域獲得最新資源的開發者來說非常有價值的工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，清楚列出資源和分類。安裝過程非常簡單，只需訪問網站即可。文件沒有多語言支持，但內容簡潔明瞭，適合快速上手。

## 優缺點分析

> [!success] 優點
> - 集中化的資源列表，節省搜尋時間。
> - 經過實戰驗證的項目，確保資源的可靠性。
> - 持續更新，保持資源的時效性。
> - 詳細分類，方便用戶快速找到所需工具。

> [!danger] 缺點
> - 不包含非開源的 AI 資源，可能限制選擇。
> - 僅提供鏈接，無法直接使用或測試資源。
> - 依賴社群貢獻，可能存在更新不及時的情況。
> - 缺乏詳細的使用說明，對新手不夠友好。

> [!warning] 注意事項
> - 不包含非開源的 AI 資源，可能限制某些用戶的選擇。
> - 僅提供鏈接，無法直接使用或測試資源。
> - 依賴社群貢獻，可能存在資源更新不及時的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於開源 AI 的資源，而 boneyard 主要是針對各種開源專案的集合。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 主要針對數據同步，而本專案專注於 AI 相關的資源和工具。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 更偏向於特定的 AI 應用，而本專案提供廣泛的開源 AI 資源。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Hugging Face Datasets | 專注於提供開源數據集，而本專案則是綜合性的資源列表。 | 如果你需要專門的數據集，而不僅僅是工具和模型，Hugging Face Datasets 更適合。 | low，因為兩者都提供開源資源，切換相對容易。 |
| OpenAI Model Hub | 提供專門的模型，而本專案則是綜合性的資源列表。 | 如果你專注於 OpenAI 的模型，OpenAI Model Hub 是更好的選擇。 | medium，因為需要重新評估資源的適用性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-opensource-ai** | **Hugging Face Datasets** | **OpenAI Model Hub** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於提供開源數據集，而本專案則是綜合性的資源列表。 | 提供專門的模型，而本專案則是綜合性的資源列表。 |
> | 遷移成本 | - | low，因為兩者都提供開源資源，切換相對容易。 | medium，因為需要重新評估資源的適用性。 |
> | 適用場景 | 主要場景 | 如果你需要專門的數據集，而不僅僅是工具和模型，Hugging | 如果你專注於 OpenAI 的模型，OpenAI Model |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者用於尋找開源 AI 資源，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些資源可能已經不再維護，導致鏈接失效
  - 解法：定期檢查資源的更新狀態
- **[HIGH]** 缺乏詳細的使用說明，對新手不夠友好
  - 解法：尋找其他資源或社群支持
- [MEDIUM] 社群貢獻的資源質量參差不齊
  - 解法：仔細評估每個資源的評價和使用情況

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 研究團隊尋找開源工具 | 非常適合 | 提供了多樣化的資源選擇，能滿足不同需求。 |
| 個人開發者需要快速找到特定工具 | 適合 | 資源列表簡潔明瞭，方便快速查找。 |
| 小型團隊希望整合多種開源工具 | 普通 | 雖然提供了多種資源，但可能需要額外的整合工作。 |
| 需要專門的數據集或模型的開發者 | 不適合 | 這個專案主要是資源列表，缺乏專門的數據集。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習和 1 小時整合，能快速獲得各種開源 AI 資源，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案本身不需要高權限，且不存取敏感資料。使用時需注意外部鏈接的安全性。

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
| Forks | 210 |
| Open Issues | 17 |
| Issue 解決率 | 39% (11 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-24 |
| 官方網站 | [Link](https://awesomeosai.com) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alvinreal/awesome-opensource-ai) |
| Topics | `agents` `ai` `artificial-intelligence` `awesome` `awesome-list` `generative-ai` `llm` `machine-learning` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alvinreal](https://github.com/alvinreal) | 73 |
> | [@alvinunreal](https://github.com/alvinunreal) | 52 |
> | [@paihari](https://github.com/paihari) | 2 |
> | [@jeheskielSunloy77](https://github.com/jeheskielSunloy77) | 1 |
> | [@anulum](https://github.com/anulum) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新資源列表。
**連結**：[文件](https://awesomeosai.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-08）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #160 from alvinreal/research/training-fine-tuning-2026-04-08

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
> ### 🔍 5. Retrieval-Augmented Generation (RAG) & Knowledge
> 
> > Retrieval systems, vector databases, embedding models, and related tooling for RAG pipelines.
> 
> #### Vector Databases & Search Engines
> 
> - **[Chroma](https://github.com/chroma-core/chroma)**  - Most popular open-source embedding database.
> - **[Qdrant](https://github.com/qdrant/qdrant)**  - High-performance vector search engine in Rust.
> - **[Weaviate](https://github.com/weaviate/weaviate)**  - GraphQL-native vector search engine.
> - **[Milvus](https://github.com/milvus-io/milvus)**  - Scalable cloud-native vector database.
> - **[Faiss](https://github.com/facebookresearch/faiss)**  - Similarity search and clustering library for dense vectors with CPU and GPU implementations.
> - **[LanceDB](https://github.com/lancedb/lancedb)**  - Serverless vector DB optimized for multimodal data.
> - **[Vespa](https://github.com/vespa-engine/vespa)**  - AI + Data platform with hybrid search (vector + keyword) and real-time indexing at scale. Battle-tested serving billions of queries daily.
> - **[pgvector](https://github.com/pgvector/pgvector)**  - PostgreSQL extension for vector similarity search.
> - **[Quickwit](https://github.com/quickwit-oss/quickwit)**  - Cloud-native search engine for observability. Open-source alternative to Datadog, Elasticsearch, Loki, and Tempo with native vector search support.
> - **[Tantivy](https://github.com/quickwit-oss/tantivy)**  - Full-text search engine library inspired by Apache Lucene and written in Rust. Powers Quickwit and other production search systems.
> - **[Manticore Search](https://github.com/manticoresoftware/manticoresearch)**  - Easy to use open source fast database for search. Good alternative to Elasticsearch with SQL-like interface and vector search capabilities.
> - **[OpenSearch](https://github.com/opensearch-project/OpenSearch)**  - Open-source distributed and RESTful search and analytics suite with native vector search. Enterprise-grade fork of Elasticsearch with k-NN plugin for semantic search at scale.
> 
> #### Embedding Models
> 
> - **[BGE (FlagEmbedding)](https://github.com/FlagOpen/FlagEmbedding)**  - BAAI's best-in-class embedding family.
> - **[E5 (Microsoft)](https://github.com/microsoft/unilm)**  - High-performance text embeddings for retrieval.
> 
> #### Embedding Benchmarks
> 
> - **[MTEB](https://github.com/embeddings-benchmark/mteb)**  - Massive Text Embedding Benchmark covering 1000+ languages and diverse tasks. The industry standard for evaluating and comparing embedding models.
> 
> #### RAG Frameworks & Advanced Retrieval Tools
> 
> - **[LlamaIndex](https://github.com/run-llama/llama_index)**  - Full-featured RAG pipeline with advanced indexing.
> - **[Haystack](https://github.com/deepset-ai/haystack)**  - End-to-end NLP and RAG framework.
> - **[RAGFlow](https://github.com/infiniflow/ragflow)**  - Deep-document-understanding RAG engine.
> - **[GraphRAG (Microsoft)](https://github.com/microsoft/graphrag)**  - Knowledge-graph-based RAG.
> - **[Docling](https://github.com/docling-project/docling)**  - Document processing toolkit for turning PDFs and other files into structured data for GenAI workflows.
> - **[Unstructured](https://github.com/Unstructured-IO/unstructured)**  - Best-in-class document preprocessing.
> - **[MinerU](https://github.com/opendatalab/MinerU)*

## 延伸閱讀

相關概念：[[開源]] · [[機器學習]] · [[AI 模型]]

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
> const concepts = ["開源","機器學習","AI 模型"];
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
