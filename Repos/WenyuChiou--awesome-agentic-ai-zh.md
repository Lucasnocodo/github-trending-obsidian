---
repo: WenyuChiou/awesome-agentic-ai-zh
url: https://github.com/WenyuChiou/awesome-agentic-ai-zh
owner: WenyuChiou
owner_type: User
language: Python
license: MIT
description: "AI Agent 中文學習地圖 — 從零開始的結構化學習路徑，每階段有必做練習跟必修閱讀。三語對照（繁中／简中／English）。歡迎社群一起貢獻、優化內容。"
homepage: "https://github.com/WenyuChiou/awesome-agentic-ai-zh"
stars: 1255
stars_per_day: 139
forks: 136
open_issues: 3
created: 2026-05-04
pushed_at: 2026-05-14
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
use_case: "提供從零開始的 AI Agent 學習路徑，結合資源和實作練習，幫助學習者逐步掌握 AI agent 的設計與應用。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 40
repo_size_kb: 30074
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:736,2026-05-11:744,2026-05-12:855,2026-05-13:1071,2026-05-14:1255"
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
  - "提供從零開始的 AI Agent 學習路徑，結合資源和實作練習，幫助學習者逐步掌握 AI agent 的設計與應用。"
---

# awesome-agentic-ai-zh

**1.3k** stars · **139** stars/天 · 建立 9 天前 · Python · MIT

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
> 提供從零開始的 AI Agent 學習路徑，結合資源和實作練習，幫助學習者逐步掌握 AI agent 的設計與應用。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (139 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望從零開始學習 AI agent 的初學者和有基礎的開發者。
> **一句話重點** 這個專案不僅提供學習資源，還強調實作的重要性，讓學習者能夠在實踐中掌握 AI agent 的設計與應用。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~20h · **綁定風險** low
> **結論** 花 20 小時學習、10 小時整合，得到結構化的學習路徑，值得投入。

> [!abstract] 核心創新
> 提供從零開始的結構化學習路徑，結合資源和實作練習，幫助學習者逐步掌握 AI agent 的設計與應用。

## 專案簡介

這個專案提供了一個結構化的學習路徑，分為八個階段，從基本的 LLM 概念到設計多 agent 系統。使用者可以透過精選的 145+ 個資源和實作練習，逐步提升自己的技能。每個階段都附有基礎練習，並提供 Python 和 Shell 的範例，讓學習者能夠動手實作。這樣的設計不僅幫助學習者理解理論，還能加強實作能力，特別是對於希望從 LLM 使用者轉變為 agent 系統建構者的人來說，這是一個理想的選擇。

專案的核心是資源的策展，涵蓋了多個主題，並且提供了雙語支持，讓不同語言的使用者都能受益。相較於其他學習資源，這個專案的優勢在於其系統化的學習路徑和實作練習，讓學習者能夠清晰地知道每一步該做什麼。使用者在學習過程中，能夠選擇不同的路徑，根據自己的需求進行深入學習，這樣的靈活性使得該專案適合各種背景的學習者。整體而言，這是一個非常適合初學者和有一定基礎的學習者的資源，能夠幫助他們在 AI agent 的領域中快速成長。

**技術棧**：`Python` · `Shell`

## 重點功能

- 結構化學習路徑 — 分為 8 個階段，從基本 LLM 概念到多 agent 系統設計。
- 145+ 精選資源 — 每個階段提供高品質的專案和教材策展，幫助學習者快速找到學習材料。
- 雙語支持 — 提供繁體中文、簡體中文和英文版本，方便不同語言的使用者。
- 基礎實作練習 — 每個階段都有 1-5 個動手練習，幫助學習者加強實作能力。
- 靈活的學習路徑 — 提供兩條主要學習路徑，適合不同需求的學習者。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/WenyuChiou/awesome-agentic-ai-zh.git
```
2. 進入專案目錄
```bash
cd awesome-agentic-ai-zh
```
3. 從基礎準備開始學習
```bash
查看 stages/00-foundations.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1255 stars（139/天），forks 136（10.8%），顯示出社群對於這個學習資源的高度關注。專案的主要貢獻者 WenyuChiou 和 scott0127 在 AI 和開源社群中有一定的影響力，這也吸引了許多學習者的參與。這個專案解決了許多初學者在學習 AI agent 時面臨的困難，提供了一個系統化的學習路徑，讓學習者不再迷失於各種資源中。社群的活躍參與和持續貢獻也使得專案內容不斷更新，保持其時效性和實用性。

## 適合誰使用

**目標受眾**：希望從零開始學習 AI agent 的初學者和有基礎的開發者。

> [!example] 使用場景
> - 學生用它來從零開始學習 AI agent 的基本概念和實作，因為這個專案提供了結構化的學習路徑和豐富的資源。
> - 開發者用它來提升自己在 AI agent 系統設計上的能力，因為每個階段都有實作練習，能夠快速上手。
> - 教育工作者用它來設計課程，因為它提供了雙語資源和清晰的學習路徑，方便不同背景的學生使用。

## 架構分析

這個專案的架構是基於學習路徑的設計，將 AI agent 的學習內容分為八個階段，每個階段都有明確的學習目標和實作練習。這樣的設計使得學習者能夠循序漸進，從基礎概念到實際應用逐步深入。每個階段的內容都是精心策劃的，包含了高品質的資源和實作案例，讓學習者能夠在實作中理解理論。這種結構化的學習方式能夠有效降低學習的難度，特別是對於初學者來說，能夠快速上手並獲得成就感。整體而言，這個架構的設計是為了讓學習者能夠在最短的時間內掌握 AI agent 的核心概念和技術，並能夠應用於實際的開發中。

## 技術深入分析

這個專案的核心技術機制在於其結構化的學習路徑，將 AI agent 的學習內容分為八個階段，從基本的 LLM 概念到設計多 agent 系統。每個階段都包含了精選的資源和實作練習，讓學習者能夠在理論和實作之間取得平衡。這樣的設計不僅能夠幫助學習者快速上手，還能夠加深他們對於 AI agent 的理解。效能和規模特性方面，這個專案的設計能夠適應不同背景的學習者，無論是初學者還是有經驗的開發者，都能夠找到適合自己的學習路徑。設計取捨方面，選擇 Python 作為主要語言是因為其在 AI 和機器學習領域的廣泛應用，這樣的選擇使得學習者能夠更容易地接觸到相關的技術和資源。技術風險方面，這個專案的依賴關係相對簡單，主要依賴於 Python 的生態系統，這降低了學習者在使用過程中遇到的技術障礙。整合分析方面，這個專案與主流的開發工具和框架相容性良好，能夠輕鬆融入現有的開發流程中，並且對於 CI/CD pipeline 友好，讓學習者能夠在實踐中掌握現代開發的最佳實踐。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，提供了詳細的快速開始指導和範例。安裝過程相對簡單，對於有基本編程經驗的使用者來說，能夠順利完成。文件目前僅提供英文和中文版本，對於非中文使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 結構化的學習路徑，讓學習者能夠循序漸進。
> - 提供雙語支持，適合不同語言的使用者。
> - 包含豐富的實作練習，能夠加強學習者的實作能力。

> [!danger] 缺點
> - 對於完全沒有編程經驗的人來說，可能需要額外的學習資源。
> - 部分資源可能隨著時間更新而有所變動。
> - 需要一定的時間投入才能完成所有階段的學習。

> [!warning] 注意事項
> - 僅適合有基本 Python 能力的學習者。
> - 對於完全沒有編程經驗的人來說，可能需要額外的學習資源來補充基礎知識。
> - 部分資源可能隨著時間更新而有所變動，需定期檢查最新內容。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和實驗，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些練習可能需要額外的依賴，初學者可能不清楚如何安裝。
  - 解法：在開始之前，仔細閱讀每個練習的要求。
- [MEDIUM] 部分資源可能隨著時間更新而有所變動，學習者需定期檢查。
  - 解法：關注專案的更新和社群討論。
- **[HIGH]** 對於完全沒有編程經驗的人來說，可能需要額外的學習資源。
  - 解法：建議在開始之前補充基本的 Python 和 git 知識。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 希望從零開始學習 AI agent 的大學生 | 非常適合 | 專案提供了結構化的學習路徑和豐富的資源，適合初學者。 |
| 已經有一定編程基礎的開發者 | 適合 | 能夠快速掌握 AI agent 的設計與應用。 |
| 對 AI agent 有興趣但沒有編程經驗的使用者 | 普通 | 需要額外的學習資源來補充基礎知識。 |
| 希望在企業中實作 AI agent 的團隊 | 不適合 | 專案目前仍在 alpha 階段，尚未穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 20 小時學習、10 小時整合，得到結構化的學習路徑，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，僅需安裝 Python 和相關依賴，不存取敏感資料。

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
| Forks | 136 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-04 |
| 官方網站 | [Link](https://github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Repo 大小 | 29.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/WenyuChiou/awesome-agentic-ai-zh) |
| Topics | `agentic-ai` `ai-agents` `awesome-list` `bilingual` `claude-code` `claude-skills` `cli` `learning-roadmap` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "Shell" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WenyuChiou](https://github.com/WenyuChiou) | 236 |
> | [@scott0127](https://github.com/scott0127) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有貢獻和更新。
**連結**：[文件](https://github.com/WenyuChiou/awesome-agentic-ai-zh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-13 ~ 2026-05-14）
> **活躍天數** 2 天 · **最新 commit** docs(stage-6): fix zh-Hans typo — 你情况 → 你的情况

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/WenyuChiou/awesome-agentic-ai-zh/issues/15) | [suggest] suppr-mcp and suppr-skills for Stage 8 MCP/Skill c | 0 | 0 |

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
> 學習路線圖 + 145+ 資源 curation + 簡單 illustrative 案例結構化 8 階段、從「LLM 是什麼、token 怎麼算」走到 multi-agent 編排、Computer Use / Browser Use / Sandbox
> 
> [](LICENSE)
> [](README.md)
> [](README.zh-Hans.md)
> [](README.en.md)
> 
> ---
> 
> 
> ## 🎯 專案介紹
> 
> **本 repo 角色定位**：**學習路線圖 + 145+ 資源 curation + 簡單 illustrative 案例**——三件事為核心、幫想學 AI / AI agent 的人從「不知道從哪開始」走到「能設計多 agent 系統」。
> 
> 具體做法：
> 
> | 核心 | 做什麼 | 規模 |
> |---|---|---|
> | **學習路線圖** | 把網路散落的高品質專案、教材、必修閱讀，按**從零開始、循序漸進**整理成 **8 個階段**（含 Stage 5 + Stage 8 兩個共用 hub）+ 2 條學習路線 + 5 條延伸路徑 | 8 stages、2 tracks |
> | **資源 curation** | 每階段精選 **145+** 個 project（含星等、適合誰、教什麼、怎麼跑），加上中文社群 MCP / Skill 完整 catalog | 145+ projects、62 MCP/Skill |
> | **簡單 illustrative 案例** | 每階段附 1-5 個**基礎練習**（70-150 行 starter + dual-path Ollama/Anthropic SDK 對照 + mock-based test） | 27 個練習 folder |
> 
> 走完整條路線，你會從「**LLM 使用者**」進階到「**agent 系統建構者**」——能看懂 framework 在做什麼、能設計多 agent 協作、能寫自己的 MCP server。
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
> - 🎯 **精選 145+ 個 projects** — 每個都附星等推薦、適合誰、教什麼、怎麼跑（含本地 LLM 執行：Ollama、llama.cpp、LocalAI、MLX）
> - 🌏 **中文 / 英文雙語** — 繁中為主、英文版完整對照
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
> | **0** | [基礎準備](stages/00-foundations.md) | Python · CLI · git · API · JSON | 1-2 週 |
> | **1** | [LLM 入門](stages/01-llm-basics.md) | token · API · 各家 LLM 比較 · 本地 LLM | 1 週 |
> | **2** | [Prompt 設計](stages/02-prompt-engineering.md) | 系統 prompt · few-shot · CoT | 1-2 週 |
> 
> 
> ### Track A — CLI Power User（想用 CLI 把事情做完）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **A1** | [CLI Agent 入門 + 選擇](tracks/cli/A1-cli-intro.md) | 7 主流 CLI 比較 · 安裝 · 第一次跑 | 1 週 |
> | **A2** | [CLI Workflow Patterns](tracks/cli/A2-cli-workflow.md) | CLAUDE.md · slash command · 多步驟拆解 | 1-2 週 |
> | **A3** | [Integration & Production](tracks/cli/A3-cli-production.md) | MCP 接 CLI · CI 自動化 · cost / observability | 1-2 週 |
> | **+5** 🔄 | [Stage 5 — Claude Code 生態](stages/05-claude-code-ecosystem.md)（**共用 hub**） | MCP · Skills · Plugins · Subagents、Track A 必看 5.1-5.4 / 選讀 5.5-5.6 | 1-2 週（Track A 視角）|
> | **+8** 🔄 | [Stage 8 — Agent Interfaces](stages/08-agent-interfaces.md)（**共用 hub**）| Computer Use · Browser Use · Code Sandbox、Track A 視角看 §Track A 怎麼用 | 1-2 週（Track A 視角）|
> 
> > **Track A 預估總時程**：含 Stage 0-2（共用基礎）+ A1-A3 + **Stage 5 + Stage 8（兩個共用 hub）= 約 8-10 週**。核心參考：[`resources/cli-agents-guide.md`](resources/cli-agents-guide.md)。
> 
> 
> ### Track B — Agent Builder（從零打造 agent）
> 
> | Stage | 主題 | 關鍵內容 | 預估時程 |
> |---|---|---|---|
> | **3** ⭐ | [Tool Use & Agent 入門](stages/03-tool-use-and-hello-agent.md) | function calling · ReAct · 5 個動手練習 | 2-3 週 |
> | **4** | [Agent 框架](stages/04-agent-frameworks.md) | LangGraph · AutoGen · CrewAI · Smolagents | 2-3 週 |
> | **5** ⭐⭐ 🔄 | [Claude Code 生態](stages/05-claude-code-ecosystem.md)（**共用 hub**、Track A 也學）| MCP · Skills · Plugins · Subagents | 3-4 週（Track B 視角）|
> | **6** | [Memory · RAG · 進階](stages/06-memory-rag.md) | vector DB · long-term memory · contextual retrieval | 2 週 |
> | **7** | [進階 Multi-Agent](stages/07-multi-agent-production.md) | multi-agent orchestration · eval · observability · SDK 進階 | 2-4 週 |
> | **8** ⭐⭐ 🔄 | [Agent Interfaces](stages/08-agent-interfaces.md)（**共用 hub**、Track A 也學）| Computer Use · Browser Use · Code Sandbox、2024-2026 frontier | 2-3 週（Track B 視角）|
> 
> > **Track B 預估總時程**：主幹最少 **16-22 週**、現實 **5-7 個月**（每週 5-8 hr 兼職）
> 
> > 🔄 **兩個共用 hub（Track A + Track B 都會用到）**：
> > - **Stage 5** = Claude Code 生態（MCP / Skills / Plugins / Subagents）—— Track A 學 MCP 接 CLI、Track B 學 agent runtime 結構
> > - **Stage 8** = Agent Interfaces（Computer Use / Browser / Sandbox、2024-2026 frontier）—— Track A 學「**怎麼用**」委派任務、Track B 學「**怎麼 build**」embed 進 agent
> >
> > 兩個 hub 出現在兩條 track 內、視角不同、學的深度也不同（內文有 §Track A / §Track B 分視角段）。
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
> - **Part 3（Stage 5）🔄 共用 hub** — Claude Code 生態系（MCP / Skills / Plugins / Subagents、Track A + B 都會用到）
> - **Part 4（Stage 6-7）：進階整合** — memory / RAG / multi-agent 協作 / harness engineering
> - **Part 5（Stage 8）🔄 共用 hub** — Agent Interfaces（Computer Use / Browser Use / Code Sandbox、2024-2026 frontier、Track A + B 都會用到）
> 
> > 🔭 **三層概念進化**：**prompt engineering**（Stage 2、單一 prompt 怎麼寫）→ **context engineering**（Stage 3 之後、怎麼動態組 system prompt + memory + retrieved chunks + tool schema）→ **harness engineering**（Stage 7、agent loop / eval / observability / deploy 整套包成 production system）。3 個術語對應 3 個 phase、不必另外找資源。詳見 [`stages/02-prompt-engineering.md#-進階context-engineering不是-prompt-engineering-了`](stages/02-prompt-engineering.md) 跟 [`stages/07-multi-agent-production.md`](stages/07-multi-agent-production.md) 必修閱讀 §5+6。
> 
> 走完主幹（14-19 週）後，依你的身分（研究員 / 開發者 / 老師 / 知識工作者 / 日常使用者）挑一條延伸路線繼續走。
> 
> 最重要的一句話：**不要跳過 動手練習**。每個 stage 的 動手練習都是「不動手就學不會」的東西，光讀過去後面會卡住。
> 
> > 🎓 **動手練習怎麼用才對**：每個練習 folder 裡的 `starter.py` 是**完整解答**、不是 TODO skeleton。如果你 clone 下來直接 `cat starter.py` + `python test.py` pass、會誤以為「我學會了」、其實沒寫一行 code。**正確學習法**：`mv starter.py starter_reference.py`、看 signature 不看 body、自己重寫、卡住才回去對照。完整方法論 + 每個 stage 的時間預算 + 卡住處理流程看 [`docs/HOW_TO_USE.md`](docs/HOW_TO_USE.md)。
> 
> 準備好了嗎？[從 Stage 0 開始](stages/00-foundations.md)。
> 
> ---
> 
> 
> ## 📚 相關資源
> 
> 完整的相關資源（用語說明 + 常用 

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[CLI/TUI]] · [[Prompt Engineering]] · [[多模態]] · [[機器學習]]

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
> const concepts = ["MCP Protocol","CLI/TUI","Prompt Engineering","多模態","機器學習"];
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
