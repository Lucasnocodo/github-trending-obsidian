---
repo: WenyuChiou/awesome-agentic-ai-zh
url: https://github.com/WenyuChiou/awesome-agentic-ai-zh
owner: WenyuChiou
owner_type: User
language: Python
license: MIT
description: "AI Agent 中文學習地圖 — 從零開始的結構化學習路徑，每階段有必做練習跟必修閱讀。三語對照（繁中／简中／English）。歡迎社群一起貢獻、優化內容。"
homepage: "https://github.com/WenyuChiou/awesome-agentic-ai-zh"
stars: 1071
stars_per_day: 134
forks: 107
open_issues: 0
created: 2026-05-04
pushed_at: 2026-05-13
first_seen: 2026-05-11
week: "2026-W20"
month: "2026-05"
category: "教學資源"
subcategory: "學習路徑"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-11
use_case: "提供 AI Agent 的結構化學習路徑，幫助學習者從零開始掌握相關技能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-18"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 21443
readme_length: 9171
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:736,2026-05-11:744,2026-05-12:855,2026-05-13:1071"
tags:
  - github
  - "category/教學資源"
  - "lang/python"
  - easy_install
  - "topic/agentic_ai"
  - "topic/ai_agents"
  - "topic/awesome_list"
  - "topic/bilingual"
  - "topic/claude_code"
aliases:
  - "awesome-agentic-ai-zh"
  - "WenyuChiou/awesome-agentic-ai-zh"
  - "提供 AI Agent 的結構化學習路徑，幫助學習者從零開始掌握相關技能。"
---

# awesome-agentic-ai-zh

**1.1k** stars · **134** stars/天 · 建立 8 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agentic-ai` `ai-agents` `awesome-list` `bilingual` `claude-code` `claude-skills` `cli` `learning-roadmap` `llm-agents` `mcp` `model-context-protocol` `tutorial`

> [!summary] 一句話摘要
> 提供 AI Agent 的結構化學習路徑，幫助學習者從零開始掌握相關技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (134 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 有基本 Python 能力並希望深入了解 AI agent 開發的學習者。
> **一句話重點** 這個專案提供了一個系統化的學習路徑，讓學習者能夠從零開始掌握 AI agent 的開發技能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "學習路徑" && p.file.name !== "WenyuChiou--awesome-agentic-ai-zh" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 學習路徑 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供結構化的 AI agent 學習路徑，讓學習者能夠循序漸進地掌握相關技能。

## 專案簡介

這個專案提供了一個結構化的學習路徑，分為 7 個階段，幫助學習者從基本的 LLM 概念進階到構建多 agent 系統。每個階段都包含必做的動手練習和必修閱讀，讓學習者能夠在實作中理解理論。使用者可以選擇 Track A（CLI Power User）或 Track B（Agent Builder），根據自己的需求進行學習。這樣的設計讓學習者能夠循序漸進，從 LLM 使用者轉變為能夠設計和實作 agent 系統的開發者。技術上，專案使用 Python 和 Shell，並且提供了 145+ 個精選專案作為學習資源，這些專案涵蓋了從基礎到進階的各種主題。

相較於其他學習資源，這個專案的獨特之處在於其系統化的學習路徑和雙語支持，讓不同背景的學習者都能夠輕鬆上手。使用者在學習過程中會遇到的常見問題包括如何選擇合適的學習路徑和如何有效地進行動手練習。這個專案的成熟度為 beta，適合有基本 Python 能力的學習者，並且預計在未來會持續更新內容以跟上 AI 相關技術的發展。對於希望深入了解 AI agent 的開發者和研究者來說，這是一個值得投入的資源。建議在 5-6 個月內完成學習，並根據個人進度調整時間安排。

**技術棧**：`Python` · `Shell`

## 重點功能

- 7 階段學習路徑 — 從 LLM 基礎到多 agent 系統的全面學習。
- 必做動手練習 — 每個階段都有實作專案，確保學習者能夠動手實踐。
- 雙語支持 — 提供繁體中文、簡體中文和英文版本，方便不同語言背景的學習者。
- 145+ 精選專案 — 每個專案都有詳細的說明和適用場景，幫助學習者選擇合適的學習資源。
- 預估時程 — 清楚標示每個階段的學習時間，幫助學習者合理安排學習計劃。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
```
2. 進入專案目錄
```bash
cd awesome-agentic-ai-zh
```
3. 從基礎準備開始學習
```bash
# 從 stages/00-foundations.md 開始
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1071 stars（134/天），forks 107（10.0%），顯示出強烈的社群興趣。專案的主要貢獻者 WenyuChiou 和 scott0127 在 AI 領域有豐富的經驗，這使得專案內容具備高質量和實用性。此專案解決了學習 AI agent 的結構化資源不足的痛點，過去學習者常常面對零散的資料和缺乏系統性的學習路徑。專案的推出正好填補了這一空白，並且以雙語形式提供，讓更多人能夠受益。社群的活躍度和快速的 issue 解決率也顯示出其良好的維護狀態。

## 適合誰使用

**目標受眾**：有基本 Python 能力並希望深入了解 AI agent 開發的學習者。

> [!example] 使用場景
> - 初學者用它來從零開始學習 AI agent 的基本概念，因為有結構化的學習路徑和實作練習，能夠有效掌握知識。
> - 軟體工程師用它來提升自己在 AI agent 開發上的技能，因為提供了多個實作專案和範例，能夠快速上手。
> - 教師用它來設計 AI 相關的課程，因為有清晰的學習路徑和資源，能夠幫助學生系統性地學習。

## 架構分析

這個專案的架構設計以學習路徑為核心，分為 7 個階段，讓學習者能夠系統性地掌握 AI agent 的知識。每個階段都包含必做的動手練習和必修閱讀，這樣的設計讓學習者能夠在實作中理解理論。資料流方面，學習者從基礎準備開始，逐步進入 LLM 的使用和 agent 的設計。

選擇這種分階段的學習方式能夠有效降低學習的難度，讓學習者能夠在每個階段都能獲得實際的成就感。這樣的設計也考慮到了不同學習者的需求，提供了多條學習路徑以供選擇。整體而言，這個架構能夠有效支持學習者的成長，但在時間上需要一定的投入，特別是對於初學者來說。

擴展性方面，未來可以根據技術的發展持續更新內容，保持學習資源的時效性。

## 技術深入分析

這個專案的核心技術機制在於其結構化的學習路徑，分為 7 個階段，涵蓋了從 LLM 基礎到多 agent 系統的各個方面。每個階段都設計了必做的動手練習，讓學習者能夠在實作中理解理論，這種學習方式能夠有效提高學習效果。效能方面，這個專案能夠支持不同背景的學習者，尤其是對於有基本 Python 能力的人來說，能夠快速上手。設計取捨方面，選擇了 Python 和 Shell 作為主要技術棧，這樣的選擇能夠讓學習者在實作中接觸到廣泛的工具和框架。技術風險方面，這個專案的學習路徑需要一定的時間投入，對於時間有限的學習者來說，可能會造成一定的壓力。整合分析方面，這個專案的學習內容能夠與主流的 AI 開發工具和框架相結合，讓學習者能夠在實作中獲得更好的體驗。整體而言，這個專案在技術上具備良好的設計，能夠有效支持學習者的成長。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有結構，提供了詳細的學習路徑和資源。安裝過程順暢，沒有明顯的坑。提供了良好的快速開始指南，讓新手能夠快速上手。文件目前僅有中文和英文版本，對於其他語言使用者可能不夠友好。

## 優缺點分析

> [!success] 優點
> - 結構化的學習路徑，適合初學者循序漸進。
> - 提供雙語支持，擴大了學習者的範圍。
> - 包含多個實作專案，能夠加深學習者的理解。

> [!danger] 缺點
> - 需要投入較長的學習時間，對於時間有限的學習者可能不太友好。
> - 對於完全沒有程式碼經驗的學習者來說，入門門檻較高。
> - 缺乏針對進階學習者的內容，可能無法滿足所有需求。

> [!warning] 注意事項
> - 僅適合有基本 Python 能力的學習者。
> - 需要投入 5-6 個月的時間來完成學習。
> - 不適合完全沒有程式碼經驗的初學者。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
| Forks | 107 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-05-13 |
| 建立日期 | 2026-05-04 |
| 官方網站 | [Link](https://github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Repo 大小 | 20.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Topics | `agentic-ai` `ai-agents` `awesome-list` `bilingual` `claude-code` `claude-skills` `cli` `learning-roadmap` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 85
>     "Shell" : 15
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WenyuChiou](https://github.com/WenyuChiou) | 110 |
> | [@scott0127](https://github.com/scott0127) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，所有 issues 已解決，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/WenyuChiou/awesome-agentic-ai-zh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-13 ~ 2026-05-13）
> **活躍天數** 1 天 · **最新 commit** docs(examples): Stage 2 全 4 練習 reorder Ollama-first (zh-TW)

## README 摘錄

> [!info]- 展開查看原文 README
> 繁體中文 | 简体中文 | English
> 
> # awesome-agentic-ai-zh
> 
> ### 🤖 AI Agent 學習地圖 — 從基本 LLM 概念到自己打造多 agent 系統
> 
> 結構化 7 階段學習路徑，從「LLM 是什麼、token 怎麼算」一路到 multi-agent 編排、本地部署，每階段都有必做的 動手練習、必修閱讀、精選 project
> 
> [](LICENSE)
> [](README.md)
> [](README.zh-Hans.md)
> [](README.en.md)
> 
> ---
> 
> ## 🎯 專案介紹
> 
> 這個專案是為**想學習 AI 或 AI agent 的人**設計的。
> 
> 本 repo 把網路上散落各處的高品質專案、教材、動手練習、必修閱讀蒐集起來，按**從零開始、循序漸進**的順序整理成 **7 個階段**——每階段都會清楚指出**該學什麼、必做哪些 動手練習、推薦哪幾個 project、進入下一階段前該檢查什麼**。
> 
> 走完整條路線，你會從「**LLM 使用者**」進階到「**agent 系統建構者**」——能看懂 framework 在做什麼、能設計多 agent 協作、能寫自己的 MCP server。
> 
> ---
> 
> ## 📋 目錄
> 
> - [🎯 專案介紹](#-專案介紹)
> - [📚 快速開始](#-快速開始)
>   - [線上閱讀](#線上閱讀)
>   - [本地下載](#本地下載)
>   - [✨ 你會收穫什麼？](#-你會收穫什麼)
> - [🗺️ 學習地圖（兩條學習路徑）](#️-學習地圖兩條學習路徑)
> - [💡 如何學習](#-如何學習)
> - [📚 相關資源](#-相關資源)
> - [🤝 如何貢獻](#-如何貢獻)
> - [🙏 致謝](#-致謝)
> - [🎓 引用](#-引用)
> - [License](#license)
> 
> ---
> 
> ## 📚 快速開始
> 
> ### 🚀 第一次接觸 AI agent / 沒寫過 code？
> 
> 先看 **[`resources/setup-guide.md`](resources/setup-guide.md)** — 30-45 分鐘從零帶你申請 API key、裝好 Python、跑出第一個 LLM hello-world。
> 
> ### 線上閱讀
> - **[學習地圖（兩條學習路徑）](#️-學習地圖兩條學習路徑)** — 看完這節決定走 Track A 還 Track B
> - **[Stage 0 基礎準備](stages/00-foundations.md)** — 已經會 Python / git / API 的人可以直接跳 Stage 1
> 
> ### 本地下載
> ```bash
> git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
> cd awesome-agentic-ai-zh
> # 從 stages/00-foundations.md 開始
> ```
> 
> ### ✨ 你會收穫什麼？
> 
> - 📖 **完全免費** — MIT 授權，所有內容開放共學
> - 🗺️ **兩條學習路徑** — Track A（CLI Power User）給「想 USE 現成 CLI agent」的人；Track B（Agent Builder）給「想 BUILD 自己 agent」的人。共用 Stage 0-2 基礎
> - 🛠️ **必做動手練習** — 每階段都有 1-5 個 mini project（題目 + 成功標準，**自己動手寫**，不是現成 demo），光看不練不算學會
> - 🎯 **精選 145+ 個 projects** — 每個都附星等推薦、適合誰、教什麼、怎麼跑（含本地 LLM 執行：Ollama、llama.cpp、LocalAI、MLX）
> - 🌏 **中文 / 英文雙語** — 繁中為主、英文版完整對照
> - 🎓 **不只「框架」、還有「Claude Code 生態」** — MCP / Skills / Plugins / SDK 完整堆疊
> - 🔬 **5 條依使用者分流的延伸路線** — 研究員 / 開發者 / 老師 / 知識工作者 / **日常使用者**
> - ⏱️ **預估時程寫清楚** — 主幹最少 14-19 週、現實 5-6 個月（每週 5-8 hr）
> 
> ---
> 
> ## 🗺️ 學習地圖（兩條學習路徑）
> 
> 走完 **Stage 0-2（共用基礎）** 之後，依你的目的選一條學習路徑：
> 
> - **Track A — CLI Power User**：你想**用**現成的 CLI agent（Claude Code、Codex、OpenCode、Gemini CLI 等）把工作做順、效率拉高，不打算自己從零寫 agent。3 個 sub-stage（A1-A3）。
> - **Track B — Agent Builder**：你想**從零打造**自己的 agent——學 framework、寫 ReAct、設計 multi-agent。Stage 3-7 是主路線。
> 
> 兩條學習路徑**不互斥**——多數人是先走 A 把 CLI 用起來，再回到 B 學內部運作；或反過來也行。Stage 5（Claude Code 生態）兩條路徑都會用到。
> 
> ### 共用基礎（Stage 0-2）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **0** | [基礎準備](stages/00-foundations.md) | Python · CLI · git · API · JSON | 1-2 週 |
> | **1** | [LLM 入門](stages/01-llm-basics.md) | token · API · 各家 LLM 比較 · 本地 LLM | 1 週 |
> | **2** | [Prompt 設計](stages/02-prompt-engineering.md) | 系統 prompt · few-shot · CoT | 1-2 週 |
> 
> ### Track A — CLI Power User（想用 CLI 把事情做完）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **A1** | [CLI Agent 入門 + 選擇](tracks/cli/A1-cli-intro.md) | 6 主流 CLI 比較 · 安裝 · 第一次跑 | 1 週 |
> | **A2** | [CLI Workflow Patterns](tracks/cli/A2-cli-workflow.md) | CLAUDE.md · slash command · 多步驟拆解 | 1-2 週 |
> | **A3** | [Integration & Production](tracks/cli/A3-cli-production.md) | MCP 接 CLI · CI 自動化 · cost / observability | 1-2 週 |
> 
> > **Track A 預估總時程**：3-5 週（含 Stage 0-2 約 6-8 週）。核心參考：[`resources/cli-agents-guide.md`](resources/cli-agents-guide.md)。
> 
> ### Track B — Agent Builder（從零打造 agent）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **3** ⭐ | [Tool Use & Agent 入門](stages/03-tool-use-and-hello-agent.md) | function calling · ReAct · 5 個動手練習 | 2-3 週 |
> | **4** | [Agent 框架](stages/04-agent-frameworks.md) | LangGraph · AutoGen · CrewAI · Smolagents | 2-3 週 |
> | **5** ⭐⭐ | [Claude Code 生態](stages/05-claude-code-ecosystem.md) | MCP · Skills · Plugins · Marketplace（兩條路徑都會用到） | 3-4 週 |
> | **6** | [Memory · RAG · 進階](stages/06-memory-rag.md) | vector DB · long-term memory · contextual retrieval | 2 週 |
> | **7** | [進階 Multi-Agent](stages/07-multi-agent-production.md) | multi-agent orchestration · eval · observability · SDK 進階 | 2-4 週 |
> 
> > **Track B 預估總時程**：主幹最少 **14-19 週**、現實 **5-6 個月**（每週 5-8 hr 兼職）
> 
> > 💡 **想看跨 stage 的完整範例？** [7 步打造你的第一個 AI Agent](walkthroughs/build-first-agent-in-7-steps.md) — 同一個 Paper Summary Bot 從 Stage 1 一路寫到 Stage 7，~350 行真實程式碼（**Track B 適用**）
> 
> 走完主幹後，依你的身分挑一條延伸路線繼續走。**不確定挑哪條？**
> 
> > 💡 **「日常使用者」這條路線不必走完主幹就能直接讀**——是給「想用 AI、但不一定要寫 code」的人。
> 
> | 路線 | 適合誰 | 主題 |
> |---|---|---|
> | 🔬 [研究人員](branches/for-researcher.md) | 研究生、博後、PI | 文獻整理 · paper 寫作 · multi-agent review |
> | 💻 [開發者](branches/for-developer.md) | 軟體工程師 | Cursor · Aider · CLI delegation · code review |
> | 🎓 [教師](branches/for-teacher.md) | 老師、講師 | 備課 · 投影片 · 學生 feedback · 隱私 / 倫理 · prompt 範本 |
> | 📊 [知識工作者](branches/for-knowledge-worker.md) | 顧問、PM、分析師 | Email · 會議紀錄 · report 自動化 |
> | 👥 [日常使用者](branches/for-everyday-users.md) | ChatGPT / Claude.ai 使用者 | 寫信 · 學習 · 隱私場景 · CLI agent 入門 |
> 
> ---
> 
> ## 💡 如何學習
> 
> 這份路線圖兼顧概念與實作，目標是帶你**從 LLM 使用者一路走到 agent 系統建構者**。適合**有基本 Python 能力**的開發者、研究生、自學者。動手之前，先確認你有：
> 
> - **基本 Python** — 寫過 function、用過 API、看得懂 JSON
> - **基本 git** — clone、commit、push
> - **想學的動機** — agent 是 2025 年之後變化最快的領域，需要持續投入
> 
> 上面有缺的就從 Stage 0 補齊；都會了就**直接跳 Stage 1**。
> 
> 主幹分 4 部分：
> 
> - **Part 1（Stage 0-2）：基礎與 LLM 入門** — Python / git / API、什麼是 LLM、怎麼設計 prompt
> - **Part 2（Stage 3-4）：建構你的 Agent** — 從 tool use 進化到 agent，學主流 framework
> - **Part 3（Stage 5）：Claude Code 生態系** — MCP / Skills / Plugins，這是整條路線的核心
> - **Part 4（Stage 6-7）：進階整合** — memory / RAG / multi-agent 協作
> 
> 走完主幹（14-19 週）後，依你的身分（研究員 / 開發者 / 老師 / 知識工作者 / 日常使用者）挑一條延伸路線繼續走。
> 
> 最重要的一句話：**不要跳過 動手練習**。每個 stage 的 動手練習都是「不動手就學不會」的東西，光讀過去後面會卡住。
> 
> 準備好了嗎？[從 Stage 0 開始](stages/00-foundations.md)。
> 
> ---
> 
> ## 📚 相關資源
> 
> 完整的相關資源（用語說明 + 常用 MCP / Skill highlight + awesome lists + 中文社群）抽到 **[RESOURCES.md](RESOURCES.md)** 避免主頁過長。
> 
> 直接看常用入口：
> 
> - 🚀 **完全沒寫過 code、第一次接觸 AI agent？** → [`resources/setup-guide.md`](resources/setup-guide.md)（30-45 分鐘從零裝好）
> - 📖 **不懂某個詞？**（LLM、agent、RAG、token、MCP、Skill、向量資料庫⋯）→ [`resources/glossary.md`](resources/glossary.md) — 30 多個常出現的詞，每個 30-80 字解釋 + 哪 stage 講細的
> - 🗺️ **想搞懂為什麼有的 agent 在 terminal、有的在 Telegram、有的在 Jetson 板子？** → [`resources/agent-paradigms.md`](resources/agent-paradigms.md) — Agent 5 種型態 mental model（含 Hermes Agent + OpenClaw 具體例子）
> - 🍳 **想動手做出來**（寫 Skill / 寫 MCP server / 接 Word / 接 NotebookLM / 接 Zotero / 接本機 LLM）→ [`resources/cookbook.md`](resources/cookbook.md) — 6 個 step-by-step recipe（每個 30-50 分鐘）
> - 🔑 **MCP / Skills / Plugins 用語怎麼解釋** → [RESOURCES.md §三個核心用語](RESOURCES.md#三個核心用語mcp--skills--plugins)
> - 🔌 **接 Notion / Obsidian / Excel / GitHub 等日常工具** → [RESOURCES.md §接日常工具](RESOURCES.md#接日常工具常用-mcp-server--skill) 或完整 62 條目錄 [`resources/mcp-skills-catalog.md`](resources/mcp-skills-catalog.md)
> - 🔬 **研究 workflow + multi-LLM delegation skill 對** → [RESOURCES.md §研究工作流](RESOURCES.md#研究工作流本-repo-維護者出品)
> - 📚 **同主題的 awesome list / 中文社群** → [RESOURCES.md §同主題清單](RESOURCES.md#同主題的清單型-awesome-lists)
> 
> ---
> 
> ## 🤝 如何貢獻
> 
> 這個 repo 是一個 AI 學習文件，如果你也有蒐集很好的資源，也歡迎貢獻：
> 
> - 🐛 **回報 Bug** — 內容錯誤、連結失效、過時資訊 → 開 Issue
> - 💡 **提建議** — 缺什麼 stage、該加哪個 project → 開 Issue 討論
> - 📝 **完善內容** — 改進現有 stage 內容、修 typo → 直接 PR
> - ✍️ **新增 project** — 在某個 stage 加 1-3 個 project，並附上「為什麼這個 project 適合放這個 stage」的說明
> - 🌏 **翻譯** — 補英文 companion 沒翻到的段落，或翻成其他語言
> - 🌱 **擔任 Stage / Branch maintainer** — 長期 review 特定領域，詳見 [CONTRIBUTORS.md](CONTRIBUTORS.md)
> 
> PR 流程跟 style 規範請看 [CONTRIBUTING.md](CONTRIBUTING.md) 跟 [resources/style-guide.md](resources/style-guide.md)。
> 
> > 📅 **想看最近 ship 了什麼** → [`CHANGELOG.md`](CHANGELOG.md)（最近 14 天）。
> > Maintainer 內部進度與 launch checklist 放在 [`.github/launch-checklist.md`](.github/launch-checklist.md)（內部文件）。
> 
> ---
> 
> ## 🙏 致謝
> 
> ### Inspiration
> 
> - [**Datawhale Hello-Agents**](https://github.com/datawhalechina/hello-agents) — 系統性 agent 教學的範本，本 repo 的「章節 + 進度」結構就是受這份啟發
> - [**Datawhale 社群**](https://github.com/datawhalechina) — 中文 ML 共學社群的標竿，本 repo 多個 anchor project 來自這裡
> - [**liyupi/ai-guide**](https://github.com/liyupi/ai-guide) — 中文圈最大「AI 資源大全」，跟 Vibe Coding 教學齊全（涵蓋 Agent Skills / RAG / MCP / A2A / Harness Engineering）。本 repo 是「結構化路線」、ai-guide 是「廣度資源庫」，互為補充
> 
> ### 其他相關專案
> 
> 同主題、不同切入角度的清單，搜資源時可以一起用：
> 
> - [`wong2/awesome-mcp-servers`](https://github.com/wong2/awesome-mcp-servers) — MCP server 清單，按分類整理
> - [`punkpeye/awesome-mcp-servers`](https://github.com/punkpe

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[CLI/TUI]] · [[自動化測試]]

[GitHub](https://github.com/WenyuChiou/awesome-agentic-ai-zh) · [官方網站](https://github.com/WenyuChiou/awesome-agentic-ai-zh)

## 相關收錄

> [!note]- 直接競品（同子分類：學習路徑）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "學習路徑" AND file.name != "WenyuChiou--awesome-agentic-ai-zh"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "教學資源" AND file.name != "WenyuChiou--awesome-agentic-ai-zh"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "WenyuChiou--awesome-agentic-ai-zh" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "WenyuChiou--awesome-agentic-ai-zh"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "WenyuChiou--awesome-agentic-ai-zh" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "WenyuChiou--awesome-agentic-ai-zh" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "WenyuChiou" AND file.name != "WenyuChiou--awesome-agentic-ai-zh"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
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

> **2026-05-11** — 首次收錄
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

- [[2026-05-11|2026-05-11]] — 首次收錄，736 stars
