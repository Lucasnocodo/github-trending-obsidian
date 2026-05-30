---
repo: WenyuChiou/awesome-agentic-ai-zh
url: https://github.com/WenyuChiou/awesome-agentic-ai-zh
owner: WenyuChiou
owner_type: User
language: Python
license: MIT
description: "A structured, trilingual (繁中 / 简中 / English) learning roadmap for agentic AI — from LLM basics to multi-agent systems. 8 stages · 145+ curated projects · hands-on exercises. 中文 AI agent 學習地圖。"
homepage: "https://wenyuchiou.github.io/awesome-agentic-ai-zh/"
stars: 1806
stars_per_day: 72
forks: 206
open_issues: 1
created: 2026-05-04
pushed_at: 2026-05-29
first_seen: 2026-05-11
week: "2026-W20"
month: "2026-05"
category: "教學資源"
subcategory: "學習路線圖"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-11
use_case: "提供一個結構化的三語學習路線圖，幫助使用者從 LLM 基礎到多代理系統的設計。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-18"
contributor_count: 5
engagement: "medium"
issue_close_rate: 89
repo_size_kb: 113928
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:736,2026-05-11:744,2026-05-12:855,2026-05-13:1071,2026-05-14:1255,2026-05-15:1359,2026-05-16:1418,2026-05-17:1466,2026-05-18:1512,2026-05-19:1543,2026-05-20:1574,2026-05-21:1604,2026-05-23:1649,2026-05-24:1688,2026-05-25:1704,2026-05-26:1723,2026-05-27:1738,2026-05-29:1791,2026-05-30:1806"
tags:
  - github
  - "category/教學資源"
  - "lang/python"
  - easy_install
  - "topic/agentic_ai"
  - "topic/ai_agents"
  - "topic/awesome_list"
  - "topic/claude_code"
  - "topic/claude_skills"
aliases:
  - "awesome-agentic-ai-zh"
  - "WenyuChiou/awesome-agentic-ai-zh"
  - "提供一個結構化的三語學習路線圖，幫助使用者從 LLM 基礎到多代理系統的設計。"
---

# awesome-agentic-ai-zh

**1.8k** stars · **72** stars/天 · 建立 25 天前 · Python · MIT

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

`agentic-ai` `ai-agents` `awesome-list` `claude-code` `claude-skills` `cli` `learning-roadmap` `llm-agents` `mcp` `model-context-protocol` `trilingual` `tutorial`

> [!summary] 一句話摘要
> 提供一個結構化的三語學習路線圖，幫助使用者從 LLM 基礎到多代理系統的設計。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (72 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望從零開始學習 AI agent 的開發者和研究者，特別是有基本 Python 能力的人。
> **一句話重點** 這個專案提供了一個全面且結構化的學習資源，特別適合希望深入了解 AI agent 的開發者和研究者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/WenyuChiou--awesome-agentic-ai-zh");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "學習路線圖" && p.file.name !== "WenyuChiou--awesome-agentic-ai-zh" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 學習路線圖 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供結構化的三語學習路線圖，涵蓋從 LLM 基礎到多代理系統的設計。

## 專案簡介

這個專案提供了一個結構化的學習路線圖，涵蓋從 LLM 基礎到多代理系統的設計，分為 8 個階段，並附有 240 多個精選專案和實作練習。使用者可以透過 `git clone` 指令下載專案，並從 `stages/00-foundations.md` 開始學習。這個路線圖的設計旨在幫助初學者循序漸進地掌握 AI agent 的概念和技術，從而能夠設計和建構自己的多代理系統。技術上，專案使用 Python 和 Shell，並且提供了多種實作練習，讓學習者能夠動手操作，增強理解。與其他類似的學習資源相比，這個專案的獨特之處在於其三語支持和詳細的資源整理，讓不同語言背景的使用者都能夠輕鬆上手。使用者在學習過程中會接觸到各種 LLM 提供者的比較、API 使用、以及 prompt 設計等關鍵概念，這些都是構建 AI agent 的基礎。整體來說，這是一個針對希望深入了解 AI agent 的開發者和研究者的優質資源。

**技術棧**：`Python` · `Shell`

## 重點功能

- 結構化學習路線圖 — 包含 8 個階段，從 LLM 基礎到多代理系統設計。
- 240+ 精選專案 — 每個專案附有星等、適合對象和教學內容。
- 三語支持 — 提供繁中、簡中和英文版本，方便不同語言背景的使用者。
- 動手練習 — 每個階段附有 1-5 個實作練習，強調實作與理解的結合。
- 延伸路徑 — 提供針對不同角色（如研究人員、開發者、教師等）的學習延伸路徑。

## 快速開始

1. 下載專案
```bash
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
```
2. 進入專案目錄
```bash
cd awesome-agentic-ai-zh
```
3. 從基礎準備開始學習
```bash
cat stages/00-foundations.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 1806 stars（72/天），forks 206（11.4%），顯示出穩定的增長。專案的主要貢獻者 WenyuChiou 在 AI 領域有豐富的經驗，並且這個專案填補了市場上對於結構化 AI agent 學習資源的需求。之前的學習資源多數缺乏系統性和多語言支持，這使得許多學習者在尋找合適的學習材料時感到困難。這個專案的推出正好解決了這一痛點，並且在社群中引起了廣泛的關注和討論。加上 AI 技術的快速發展，讓這個專案的需求與日俱增。

## 適合誰使用

**目標受眾**：希望從零開始學習 AI agent 的開發者和研究者，特別是有基本 Python 能力的人。

> [!example] 使用場景
> - 學生用它來從零開始學習 AI agent 的基本概念，因為這個路線圖提供了循序漸進的學習階段和實作練習。
> - 軟體工程師用它來設計和建構自己的 AI agent，因為它提供了詳細的資源和範例，幫助他們快速上手。
> - 研究人員用它來整理和分析 AI agent 的相關文獻，因為它的資源整理包含了多個高品質的專案和資料來源。

## 架構分析

這個專案採用結構化的學習路線圖設計，分為 8 個階段，讓學習者能夠循序漸進地掌握 AI agent 的概念。每個階段都包含精選的專案和實作練習，這樣的設計使得學習者能夠在實作中加深理解。資料流方面，學習者從基礎概念開始，逐步進入更複雜的多代理系統設計，這樣的設計能夠有效避免學習過程中的挫折感。選擇這種結構化的方式是因為 AI agent 領域的知識體系相對複雜，這樣的設計能夠幫助學習者更好地掌握核心概念和技術。整體架構的擴展性良好，未來可以根據技術的發展持續更新和擴充內容。

## 技術深入分析

這個專案的核心技術機制是結構化的學習路線圖，分為 8 個階段，從 LLM 基礎到多代理系統的設計。每個階段都包含精選的專案和實作練習，這樣的設計能夠幫助學習者在實作中加深理解。專案使用 Python 和 Shell 作為主要語言，這使得學習者能夠在熟悉的環境中進行實作。與其他學習資源相比，這個專案的獨特之處在於其三語支持和詳細的資源整理，讓不同語言背景的使用者都能夠輕鬆上手。

整體來說，這是一個針對希望深入了解 AI agent 的開發者和研究者的優質資源。技術上，這個專案的設計考量了學習者的需求，提供了循序漸進的學習路徑，並且強調實作與理解的結合。這樣的設計能夠有效避免學習過程中的挫折感，讓學習者能夠在掌握基礎概念的同時，逐步進入更複雜的多代理系統設計。整體架構的擴展性良好，未來可以根據技術的發展持續更新和擴充內容。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，清楚地介紹了專案的目的和結構，並提供了快速開始的指引。安裝過程相對順暢，但對於完全新手可能需要額外的指導。文件中有詳細的學習路徑和資源，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 提供結構化的學習路線，適合初學者循序漸進。
> - 三語支持，讓不同語言背景的使用者都能輕鬆學習。
> - 包含大量精選專案和實作練習，增強學習效果。

> [!danger] 缺點
> - 需要一定的時間投入，對於時間有限的使用者可能不太友好。
> - 僅適合有基本 Python 能力的使用者，對於完全新手可能有門檻。
> - 部分資源可能需要額外的 API key 或環境設置，增加了學習的複雜度。

> [!warning] 注意事項
> - 僅適合有基本 Python 能力的使用者。
> - 學習過程需要投入相對較長的時間，約 5-7 個月。
> - 部分資源可能需要額外的 API key 或環境設置。

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
| Forks | 206 |
| Open Issues | 1 |
| Issue 解決率 | 89% (8 closed) |
| 最後推送 | 2026-05-29 |
| 建立日期 | 2026-05-04 |
| 官方網站 | [Link](https://wenyuchiou.github.io/awesome-agentic-ai-zh/) |
| Repo 大小 | 111.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Topics | `agentic-ai` `ai-agents` `awesome-list` `claude-code` `claude-skills` `cli` `learning-roadmap` `llm-agents` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 95
>     "Shell" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WenyuChiou](https://github.com/WenyuChiou) | 390 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 4 |
> | [@scott0127](https://github.com/scott0127) | 3 |
> | [@JunLin-Bobby](https://github.com/JunLin-Bobby) | 1 |
> | [@demo112](https://github.com/demo112) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-26 ~ 2026-05-29）
> **活躍天數** 3 天 · **最新 commit** docs(stage-7.5): add coding-agent harness + eval-rigor sections to §🔬 Harness Engineering

## README 摘錄

> [!info]- 展開查看原文 README
> 繁體中文 | 简体中文 | English
> 
> 
> # awesome-agentic-ai-zh
> 
> 
> ### 🤖 AI Agent 學習地圖 — 從基本 LLM 概念到自己打造多 agent 系統
> 
> 學習路線圖 + 240+ 資源 curation + 簡單 illustrative 案例結構化 8 階段、從「LLM 是什麼、token 怎麼算」走到 multi-agent 編排、Computer Use / Browser Use / Sandbox
> 
> [](LICENSE)
> [](README.md)
> [](README.zh-Hans.md)
> [](README.en.md)
> 
> [](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)
> 
> ---
> 
> 
> ## 🎯 專案介紹
> 
> **本 repo 角色定位**：**學習路線圖 + 240+ 資源 curation + 簡單 illustrative 案例**——三件事為核心、幫想學 AI / AI agent 的人從「不知道從哪開始」走到「能設計多 agent 系統」。
> 
> 具體做法：
> 
> | 核心 | 做什麼 | 規模 |
> |---|---|---|
> | **學習路線圖** | 把網路散落的高品質專案、教材、必修閱讀，按**從零開始、循序漸進**整理成 **8 個階段**（含 Stage 5 + Stage 8 兩個共用 hub）+ 2 條學習路線 + 5 條延伸路徑 | 8 stages、2 tracks |
> | **資源 curation** | 每階段精選 **240+** 個 project（含星等、適合誰、教什麼、怎麼跑），加上中文 AI 生態(DeepSeek / Zhipu / Kimi 等)MCP / Skill 完整 catalog | 240+ projects、65 MCP/Skill |
> | **簡單 illustrative 案例** | 每階段附 1-5 個**基礎練習**（70-150 行 starter + dual-path Ollama/Anthropic SDK 對照 + mock-based test） | 23 個練習 folder |
> 
> 走完整條路線，你會從「**LLM 使用者**」進階到「**agent 系統建構者**」——能看懂 framework 在做什麼、能設計多 agent 協作、能寫自己的 MCP server。
> 
> > 📖 **關於中英文混用**：本專案保留 AI Agent 領域常見英文術語（Prompt Engineering / Context Engineering / Harness / MCP / Skills / RAG 等），因為官方文件、paper、GitHub repo 與 API 文件多以英文為主。每個重要概念會提供 **中文理解名 + 英文正式術語 + 一句白話定位**，讓讀者能先理解概念，再對接英文生態。完整對照見 [`resources/glossary.md`](resources/glossary.md)。
> 
> ---
> 
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
> 
> ## 📚 快速開始
> 
> 
> ### 🚀 第一次接觸 AI agent / 沒寫過 code？
> 
> 先看 **[`resources/setup-guide.md`](resources/setup-guide.md)** — 30-45 分鐘從零帶你申請 API key、裝好 Python、跑出第一個 LLM hello-world。
> 
> 
> ### 線上閱讀
> - **[學習地圖（兩條學習路徑）](#️-學習地圖兩條學習路徑)** — 看完這節決定走 Track A 還 Track B
> - **[Stage 0 基礎準備](stages/00-foundations.md)** — 已經會 Python / git / API 的人可以直接跳 Stage 1
> 
> 
> ### 本地下載
> ```bash
> git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
> cd awesome-agentic-ai-zh
> 
> # 從 stages/00-foundations.md 開始
> ```
> 
> 
> ### ✨ 你會收穫什麼？
> 
> - 📖 **完全免費** — MIT 授權，所有內容開放共學
> - 🗺️ **兩條學習路徑** — Track A（CLI Power User）給「想 USE 現成 CLI agent」的人；Track B（Agent Builder）給「想 BUILD 自己 agent」的人。共用 Stage 0-2 基礎
> - 🛠️ **基礎動手練習** — 每階段附 1-5 個 illustrative 練習（題目 + dual-path SDK 對照 + success criteria）。定位是**基礎入門 + 路線確認**——chapter-length 深度練習見對應 stage 的 hello-agents / Anthropic Cookbook callout
> - 🎯 **精選 240+ 個 projects** — 每個都附星等推薦、適合誰、教什麼、怎麼跑（含本地 LLM 執行：Ollama、llama.cpp、LocalAI、MLX）
> - 🌏 **三語完整維護** — 繁中(canonical)/ 簡中 / English,三版皆完整維護、英文非薄翻譯
> - 🎓 **不只「框架」、還有「Claude Code 生態」** — MCP / Skills / Plugins / SDK 完整堆疊
> - 🔬 **5 條依使用者分流的延伸路線** — 研究員 / 開發者 / 老師 / 知識工作者 / **日常使用者**
> - ⏱️ **預估時程寫清楚** — Track A 8-10 週 / Track B 主幹最少 16-22 週、現實 5-7 個月（每週 5-8 hr）
> 
> ---
> 
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
> 
> ### 共用基礎（Stage 0-2）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **0** | [基礎準備（Foundations）](stages/00-foundations.md) | Python · CLI · git · API · JSON | 1-2 週 |
> | **1** | [LLM 基礎（LLM Basics）](stages/01-llm-basics.md) | token · API · 各家 LLM 比較 · 本地 LLM | 1 週 |
> | **2** | [Prompt 設計（Prompt Engineering）](stages/02-prompt-engineering.md) | 系統 prompt · few-shot · CoT | 1-2 週 |
> 
> 
> ### Track A — CLI Power User（想用 CLI 把事情做完）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **A1** | [選一個 CLI Agent，開始用它做事（CLI Agent Intro & Selection）](tracks/cli/A1-cli-intro.md) | 7 主流 CLI 比較 · 安裝 · 第一次跑 | 1 週 |
> | **A2** | [建立可重複使用的 CLI 工作流程（CLI Workflow Patterns）](tracks/cli/A2-cli-workflow.md) | CLAUDE.md · slash command · 多步驟拆解 | 1-2 週 |
> | **A3** | [把 CLI Agent 接進真實工作流程（Integration & Production）](tracks/cli/A3-cli-production.md) | MCP 接 CLI · CI 自動化 · cost / observability | 1-2 週 |
> | **+5** | [Stage 5 — Claude Code 生態](stages/05-claude-code-ecosystem.md)（**共用 hub**） | MCP · Skills · Plugins · Subagents、Track A 必看 5.1-5.4 / 選讀 5.5-5.6 | 1-2 週（Track A 視角）|
> | **+8** | [Stage 8 — Agent Interfaces](stages/08-agent-interfaces.md)（**共用 hub**）| Computer Use · Browser Use · Code Sandbox、Track A 視角看 Track A 怎麼用 | 1-2 週（Track A 視角）|
> 
> > **Track A 預估總時程**：含 Stage 0-2（共用基礎）+ A1-A3 + **Stage 5 + Stage 8（兩個共用 hub）= 約 8-10 週**。核心參考：[`resources/cli-agents-guide.md`](resources/cli-agents-guide.md)。
> 
> 
> ### Track B — Agent Builder（從零打造 agent）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **3** ⭐ | [工具使用與第一個 Agent（Tool Use & Hello Agent）](stages/03-tool-use-and-hello-agent.md) | function calling · ReAct · 5 個動手練習 | 2-3 週 |
> | **4** | [Agent 框架（Agent Frameworks）](stages/04-agent-frameworks.md) | LangGraph · AutoGen · CrewAI · Smolagents | 2-3 週 |
> | **5** ⭐⭐ | [Claude Code 生態系（Claude Code Ecosystem）](stages/05-claude-code-ecosystem.md)（**共用 hub**、Track A 也學）| MCP · Skills · Plugins · Subagents | 3-4 週（Track B 視角）|
> | **6** | [上下文管理（Context Engineering）：RAG 與 Memory](stages/06-memory-rag.md) | vector DB · long-term memory · contextual retrieval | 2 週 |
> | **7** | [多 Agent 系統與穩定運作（Multi-Agent & Production）](stages/07-multi-agent-production.md) | multi-agent orchestration · eval · observability · SDK 進階 | 2-4 週 |
> | **7.5** | [進階 Agentic Workflow 概念（Advanced Agentic Concepts）](stages/07.5-advanced-agentic-concepts.md)（reading map）| 工作邊界 · PAR loop · agent-as-judge · 12 個進階概念 + reading list | 1 週（不寫 code）|
> | **8** ⭐⭐ | [Agent 操作介面（Agent Interfaces）](stages/08-agent-interfaces.md)（**共用 hub**、Track A 也學）| Computer Use · Browser Use · Code Sandbox、2024-2026 frontier | 2-3 週（Track B 視角）|
> 
> > **Track B 預估總時程**：主幹最少 **16-22 週**、現實 **5-7 個月**（每週 5-8 hr 兼職）
> 
> > **兩個共用 hub（Track A + Track B 都會用到）**：
> > - **Stage 5** = Claude Code 生態（MCP / Skills / Plugins / Subagents）—— Track A 學 MCP 接 CLI、Track B 學 agent runtime 結構
> > - **Stage 8** = Agent Interfaces（Computer Use / Browser / Sandbox、2024-2026 frontier）—— Track A 學「**怎麼用**」委派任務、Track B 學「**怎麼 build**」embed 進 agent
> >
> > 兩個 hub 出現在兩條 track 內、視角不同、學的深度也不同（內文有 Track A / Track B 分視角段）。
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
> 
> ## 💡 如何學習
> 
> 這份路線圖兼顧概念與實作，目標是帶你**從 LLM 使用者一路走到 agent 系統建構者**。適合**有基本 Python 能力**的開發者、研究生、自學者。動手之前，先確認你有：
> 
> - **基本 Python** — 寫過 function、用過 API、看得懂 JSON
> - **基本 git** — clone、commit、push
> - **想學的動機** — agent 是 2024-2026 變化最快的領域，需要持續投入（2026 仍每月推新 model / 新 framework）
> 
> 上面有缺的就從 Stage 0 補齊；都會了就**直接跳 Stage 1**。
> 
> 主幹分 5 部分：
> 
> - **Part 1（Stage 0-2）：基礎與 LLM 入門** — Python / git / API、什麼是 LLM、怎麼設計 prompt
> - **Part 2（Stage 3-4）：建構你的 Agent** — 從 tool use 進化到 agent，學主流 framework
> - **Part 3（Stage 5） 共用 hub** — Claude Code 生態系（MCP / Skills / Plugins / Subagents、Track A + B 都會用到）
> - **Part 4（Stage 6-7）：進階整合** — memory / RAG / multi-agent 協作 / harness engineering
> - **Part 5（Stage 8） 共用 hub** — Agent Interfaces（Computer Use / Browser Use / Code Sandbox、2024-2026 frontier、Track A + B 都會用到）
> 
> > 🔭 **三層概念進化**：**prompt engineering**（Stage 2、單一 prompt 怎麼寫）→ **context engineering**（Stage 3 之後、怎麼動態組 system prompt + memory + retrieved chunks + tool schema）→ **harness engineering**（Stage 7、agent loop / eval / observabili

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[Prompt Engineering]] · [[多模態]] · [[機器學習]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[datawhalechina--Agent-Learning-Hub|datawhalechina/Agent-Learning-Hub]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/WenyuChiou/awesome-agentic-ai-zh) · [官方網站](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

## 相關收錄

> [!note]- 直接競品（同子分類：學習路線圖）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "學習路線圖" AND file.name != "WenyuChiou--awesome-agentic-ai-zh"
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
> const concepts = ["MCP Protocol","Prompt Engineering","多模態","機器學習","自然語言處理"];
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
