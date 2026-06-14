---
repo: WenyuChiou/awesome-agentic-ai-zh
url: https://github.com/WenyuChiou/awesome-agentic-ai-zh
owner: WenyuChiou
owner_type: User
language: Python
license: MIT
description: "A trilingual (繁中 / English / 简中) learning roadmap for agentic AI: from LLM basics to multi-agent systems, with 240+ curated resources and hands-on examples. 中文 AI agent 學習地圖。"
homepage: "https://wenyuchiou.github.io/awesome-agentic-ai-zh/"
stars: 2675
stars_per_day: 67
forks: 357
open_issues: 1
created: 2026-05-04
pushed_at: 2026-06-14
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
use_case: "提供一個多語言的 AI agent 學習路線圖，從 LLM 基礎到多代理系統，包含 240+ 精選資源和實作範例。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-18"
contributor_count: 5
engagement: "medium"
issue_close_rate: 89
repo_size_kb: 115241
readme_length: 9974
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:736,2026-05-11:744,2026-05-12:855,2026-05-13:1071,2026-05-14:1255,2026-05-15:1359,2026-05-16:1418,2026-05-17:1466,2026-05-18:1512,2026-05-19:1543,2026-05-20:1574,2026-05-21:1604,2026-05-23:1649,2026-05-24:1688,2026-05-25:1704,2026-05-26:1723,2026-05-27:1738,2026-05-29:1791,2026-05-30:1806,2026-05-31:1812,2026-06-01:1822,2026-06-02:1846,2026-06-03:1860,2026-06-04:1875,2026-06-05:1884,2026-06-06:1892,2026-06-07:1900,2026-06-08:1904,2026-06-09:2069,2026-06-10:2313,2026-06-11:2442,2026-06-12:2541,2026-06-13:2608,2026-06-14:2675"
tags:
  - github
  - "category/教學資源"
  - "lang/python"
  - easy_install
  - "topic/agentic_ai"
  - "topic/agentic_workflows"
  - "topic/ai_agent"
  - "topic/ai_agents"
  - "topic/awesome_list"
aliases:
  - "awesome-agentic-ai-zh"
  - "WenyuChiou/awesome-agentic-ai-zh"
  - "提供一個多語言的 AI agent 學習路線圖，從 LLM 基礎到多代理系統，包含 240+ 精選資源和實作範例。"
---

# awesome-agentic-ai-zh

**2.7k** stars · **67** stars/天 · 建立 40 天前 · Python · MIT

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

`agentic-ai` `agentic-workflows` `ai-agent` `ai-agents` `awesome-list` `chinese-llm` `claude-code` `claude-skills` `cli` `learning-roadmap` `llm` `llm-agents` `mcp` `model-context-protocol` `multi-agent-systems` `prompt-engineering` `rag` `trilingual` `tutorial`

> [!summary] 一句話摘要
> 提供一個多語言的 AI agent 學習路線圖，從 LLM 基礎到多代理系統，包含 240+ 精選資源和實作範例。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (67 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望從零開始學習 AI agent 的開發者和研究者，特別是中文使用者。
> **一句話重點** 這個專案不僅提供了學習資源，還構建了一個多語言的學習社群，讓不同背景的學習者都能參與進來。

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
> 提供三語的 AI agent 學習路線圖，結合理論與實作，適合不同背景的學習者。

## 專案簡介

這個專案提供了一個全面的學習路線圖，幫助使用者從 LLM 的基本概念學習到如何構建多代理系統。整個學習過程分為 8 個階段，涵蓋了從 LLM 的基本知識、token 的計算，到如何設計和實現多代理協作的各個方面。使用者可以透過 `git clone` 指令下載專案，並從 `stages/00-foundations.md` 開始學習。專案的核心在於資源的精選，提供了 240 多個項目，並附上適合的學習者、教學內容及運行指導，讓學習者能夠循序漸進。

這樣的設計不僅能夠幫助初學者快速上手，還能讓有經驗的開發者深入理解 AI agent 的運作機制。相較於其他學習資源，這個專案的獨特之處在於其三語支持（繁中、簡中、英文），並且提供了針對不同背景學習者的兩條學習路徑，分別是 CLI 使用者和代理構建者。這樣的設計使得學習者可以根據自己的需求選擇最合適的路徑，並在實作中獲得具體的經驗。整體而言，這是一個結合了理論與實作的學習資源，適合希望深入了解 AI agent 的開發者和研究者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 多語言支持 — 提供繁中、簡中和英文版本，讓不同語言背景的學習者都能輕鬆使用。
- 240+ 精選資源 — 每個階段都有精選的項目，附上適合的學習者和運行指導。
- 8 個學習階段 — 從 LLM 基礎到多代理系統的完整學習路徑，幫助學習者循序漸進。
- 基礎練習 — 每個階段附有 1-5 個實作練習，讓學習者能夠動手實作，鞏固學習。
- 兩條學習路徑 — 提供 CLI 使用者和代理構建者的不同學習路徑，滿足不同需求的學習者。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git && cd awesome-agentic-ai-zh
```
2. 從基礎準備開始學習
```bash
cat stages/00-foundations.md
```
3. 查看學習路徑選擇
```bash
cat tracks/cli/A1-cli-intro.md
```

## 程式碼範例

```python
{
  "前置條件": "使用者已經克隆專案並進入目錄",
  "指令": "cat stages/00-foundations.md",
  "預期輸出": "顯示基礎準備的內容，包含 Python、CLI、git、API 和 JSON 的基本知識。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 40 天就累積 2675 stars（67/天），forks 357（13.3%），顯示出穩定的增長潛力。專案的主要貢獻者 WenyuChiou 在 AI 領域有豐富的經驗，這使得專案內容具備高度的專業性。這個專案填補了市場上對於 AI agent 學習資源的需求，特別是針對中文使用者的需求，讓學習者能夠更容易地進入這個領域。社群的活躍度也反映在高達 89% 的 issue 解決率上，顯示出良好的維護和支持。這些因素共同促成了專案的快速增長。

## 適合誰使用

**目標受眾**：希望從零開始學習 AI agent 的開發者和研究者，特別是中文使用者。

> [!example] 使用場景
> - 初學者用它來從零開始學習 AI agent，因為它提供了循序漸進的學習路徑和大量的資源。
> - 開發者用它來設計和實現自己的 AI agent 系統，因為它包含了具體的實作範例和練習。
> - 研究人員用它來整理文獻和撰寫論文，因為它提供了多種資源和學習路徑，幫助他們深入理解相關概念。

## 架構分析

這個專案的架構以學習路線圖為核心，分為多個階段，每個階段都有特定的學習目標和資源。使用者可以根據自己的需求選擇適合的學習路徑，並在每個階段中進行實作練習。這樣的設計使得學習過程不僅僅是理論學習，還能夠實際動手操作，增強學習效果。每個階段的資源和練習都是精心挑選，確保學習者能夠獲得高品質的學習體驗。整體而言，這種結構化的學習方式能夠有效地引導學習者從基礎知識逐步深入到實際應用。

## 技術深入分析

這個專案的核心在於其結構化的學習路線圖，將 AI agent 的學習過程分為 8 個階段，涵蓋從 LLM 基礎到多代理系統的各個方面。每個階段都提供了精選的資源和實作練習，讓學習者能夠在理論學習的同時進行實作。使用 Python 和 Shell 作為主要技術棧，這使得專案在執行上相對輕量，適合大多數開發者使用。專案的設計考量了不同背景的學習者，提供了繁中、簡中和英文三種語言的支持，這在其他同類專案中較為罕見。這樣的多語言支持不僅能夠吸引更多的學習者，也讓學習者能夠更好地理解和對接英文生態。整體而言，這個專案在技術實作上具有良好的可擴展性，並且能夠隨著 AI agent 領域的發展而不斷更新和完善。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的學習路徑和資源。安裝過程相對順暢，沒有明顯的坑。文件有多語言版本，適合不同語言背景的學習者。整體而言，花 30 分鐘能夠順利開始學習。

## 優缺點分析

> [!success] 優點
> - 結合理論與實作，讓學習者能夠動手操作。
> - 多語言支持，適合不同語言背景的學習者。
> - 提供清晰的學習路徑，幫助學習者循序漸進。

> [!danger] 缺點
> - 對於完全不懂程式的人來說可能較難上手。
> - 需要投入較多的時間來完成學習路徑。
> - 部分資源可能需要額外的 API 金鑰或註冊才能使用。

> [!warning] 注意事項
> - 僅支援基本 Python 知識，對於完全不懂程式的人來說可能較難上手。
> - 需要一定的時間投入，完整學習路徑可能需要 5-7 個月。
> - 部分資源可能需要額外的 API 金鑰或註冊才能使用。

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
| Forks | 357 |
| Open Issues | 1 |
| Issue 解決率 | 89% (8 closed) |
| 最後推送 | 2026-06-14 |
| 建立日期 | 2026-05-04 |
| 官方網站 | [Link](https://wenyuchiou.github.io/awesome-agentic-ai-zh/) |
| Repo 大小 | 112.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Topics | `agentic-ai` `agentic-workflows` `ai-agent` `ai-agents` `awesome-list` `chinese-llm` `claude-code` `claude-skills` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "Shell" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WenyuChiou](https://github.com/WenyuChiou) | 415 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |
> | [@scott0127](https://github.com/scott0127) | 3 |
> | [@JunLin-Bobby](https://github.com/JunLin-Bobby) | 1 |
> | [@demo112](https://github.com/demo112) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，解決率達 89%。
**連結**：[文件](https://wenyuchiou.github.io/awesome-agentic-ai-zh/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-14）
> **活躍天數** 1 天 · **最新 commit** docs(changelog): record the improvement-audit medium batch (stages 2/3/5/6/7/8)

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
> - **Track B — Agent Builder**：你想**從零打造**自己的 agent——學 framework、寫 ReAct、設計 multi-agent。Stage 3-8 是主路線。
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
> | **+5** | [Stage 5 — Claude Code 生態](stages/05-claude-code-ecosystem.md)（**共用 hub**） | MCP · Skills · Plugins · Subagents、Track A 必看 5.1-5.4 / 選讀 5.5-5.7 | 1-2 週（Track A 視角）|
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

相關概念：[[LLM]] · [[多模態]] · [[Prompt Engineering]] · [[MCP]] · [[Agent 框架]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[datawhalechina--Agent-Learning-Hub|datawhalechina/Agent-Learning-Hub]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]]

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
> const concepts = ["LLM","多模態","Prompt Engineering","MCP","Agent 框架"];
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
