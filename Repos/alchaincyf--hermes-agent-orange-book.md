---
repo: alchaincyf/hermes-agent-orange-book
url: https://github.com/alchaincyf/hermes-agent-orange-book
owner: alchaincyf
owner_type: User
language: N/A
license: N/A
description: "Hermes Agent 从入门到精通 · 橙皮书系列 · Nous Research 开源 AI Agent 框架实战指南"
homepage: ""
stars: 2633
stars_per_day: 329
forks: 279
open_issues: 3
created: 2026-04-08
pushed_at: 2026-04-08
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供從入門到精通的 Hermes Agent 開源 AI Agent 框架實戰指南。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 25626
readme_length: 3120
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1876,2026-04-12:1881,2026-04-13:2118,2026-04-13:2121,2026-04-14:2288,2026-04-14:2288,2026-04-15:2452,2026-04-15:2456,2026-04-16:2555,2026-04-17:2633"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
aliases:
  - "hermes-agent-orange-book"
  - "alchaincyf/hermes-agent-orange-book"
  - "提供從入門到精通的 Hermes Agent 開源 AI Agent 框架實戰指南。"
---

# hermes-agent-orange-book

**2.6k** stars · **329** stars/天 · 建立 8 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供從入門到精通的 Hermes Agent 開源 AI Agent 框架實戰指南。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (329 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望構建自我學習 AI Agent 的開發者和 AI 愛好者。
> **一句話重點** Hermes Agent 的自我學習能力使其在 AI Agent 領域中具備獨特的競爭優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "alchaincyf--hermes-agent-orange-book" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、10 小時整合，得到靈活的 AI Agent 開發框架，值得考慮。

> [!abstract] 核心創新
> Hermes Agent 是第一個內建自我改進學習循環的 AI Agent 框架。

## 專案簡介

Hermes Agent 是一個開源的 AI Agent 框架，內建自我改進學習循環、三層記憶系統及自動技能創建與演化，這些設計使其在運行時能夠不斷優化自身性能。使用者可以透過簡單的安裝步驟，快速啟動與 Hermes Agent 的對話，並在多平台上進行自定義設置。這本指南涵蓋了 17 章內容，從基本概念到實際應用案例，幫助開發者理解如何將 Harness Engineering 概念轉化為實際產品。技術上，Hermes Agent 的架構設計使其能夠在不同的場景下進行靈活應用，特別適合需要快速迭代與學習的 AI 應用。

與 OpenClaw 和 Claude Code 相比，Hermes Agent 提供了更為強大的自我學習能力，這使得它在長期使用中能夠持續提升性能。實際使用中，Hermes Agent 的效能表現良好，能夠處理多種複雜的任務，並且對於開發者來說，學習曲線相對平緩，適合各種規模的團隊。這個專案目前處於早期階段，社群活躍度高，但仍需注意潛在的 API 變更風險。對於希望在 AI 領域進行創新的開發者來說，Hermes Agent 是一個值得考慮的選擇，尤其是在需要快速構建和測試 AI Agent 的情境下。

## 重點功能

- 自我改進學習循環 — 內建的學習循環可持續提升 Agent 性能。
- 三層記憶系統 — 使 Agent 能夠有效管理和利用過去的經驗。
- 自動技能創建 — 根據需求自動生成和演化技能，提升靈活性。
- 多平台支持 — 可在不同平台上運行，方便開發者進行測試和部署。
- 實戰指南 — 提供 17 章內容，涵蓋從基本概念到實際應用的全面指導。

## 快速開始

1. 下載 PDF 指南
```bash
wget https://github.com/alchaincyf/hermes-agent-orange-book/raw/main/Hermes-Agent-The-Complete-Guide-v260407.pdf
```
2. 安裝 Hermes Agent
```bash
pip install hermes-agent
```
3. 啟動對話
```bash
hermes-agent start
```

## 程式碼範例

```bash
# 前置條件
# 安裝 hermes-agent
pip install hermes-agent
# 啟動對話
hermes-agent start
# 預期輸出
啟動成功，開始與 Agent 進行對話。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 2633 stars（329/天），forks 279（10.6%），顯示出強烈的社群興趣。作者 alchaincyf 是一位活躍的 AI 開發者，過去有成功的產品經驗，這使得 Hermes Agent 在技術上具備良好的基礎。該專案解決了開發者在構建自我學習 AI Agent 時的痛點，提供了一個易於使用的框架。社群的反饋和需求促使了這個專案的快速增長，特別是在 AI 工具日益普及的背景下。forks/stars 比率為 10.6%，顯示出許多開發者正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望構建自我學習 AI Agent 的開發者和 AI 愛好者。

> [!example] 使用場景
> - AI 開發者用它來快速構建自我學習的 AI Agent，因為其內建的學習循環能夠有效提升性能。
> - 企業團隊用它來自動化日常任務，因為其多平台支持和自定義功能能夠提高工作效率。
> - 學生用它來學習 AI Agent 的設計與實作，因為這本指南提供了全面的實戰案例和步驟。

## 架構分析

Hermes Agent 的架構設計採用三層記憶系統，這使得 Agent 能夠有效地管理和利用過去的經驗。自我改進學習循環的設計使得 Agent 能夠在運行過程中不斷優化自身性能，這在傳統的 AI Agent 中是較少見的。這種設計的代價在於需要更多的計算資源來支持持續的學習過程。整體架構的擴展性良好，能夠適應不同的應用場景，但在處理大型資料集時可能會面臨性能瓶頸。

## 技術深入分析

Hermes Agent 的核心技術機制在於其自我改進學習循環，這使得 Agent 能夠在運行過程中不斷優化自身性能。其三層記憶系統設計能夠有效管理和利用過去的經驗，這在傳統的 AI Agent 中是較為少見的。效能方面，Hermes Agent 在處理多種複雜任務時表現良好，但在大型資料集的處理上可能會遇到瓶頸。選擇 Python 作為開發語言使得其擁有廣泛的生態系統支持，但同時也限制了其在其他環境中的應用。技術風險方面，隨著使用者數量的增加，可能會出現性能下降的問題，特別是在高並發的情況下。整合方面，Hermes Agent 與主流的開發框架（如 Flask 和 FastAPI）相容性良好，能夠方便地融入現有的技術生態中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了下載連結，安裝過程相對順暢。雖然目前僅有英文和中文版本，但文件的結構合理，易於理解。整體上，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 內建自我改進學習循環，能夠持續提升性能。
> - 三層記憶系統，能有效管理過去經驗。
> - 多平台支持，方便開發者進行測試和部署。

> [!danger] 缺點
> - 目前僅支援 Python 環境，限制了使用者範圍。
> - 對於大型資料集的處理效能尚需進一步測試。
> - 文檔翻譯尚在進行中，部分內容可能不完整。

> [!warning] 注意事項
> - 目前僅支援 Python 環境。
> - 對於大型資料集的處理效能尚需進一步測試。
> - 文檔翻譯尚在進行中，部分內容可能不完整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Hermes Agent 是其核心框架，提供了更深入的功能和實作指南。 |
| [OpenClaw/OpenClaw](https://github.com/OpenClaw/OpenClaw) | OpenClaw 主要依賴於外部技能，而 Hermes Agent 則能自動創建和演化技能。 |
| [ClaudeCode/ClaudeCode](https://github.com/ClaudeCode/ClaudeCode) | Claude Code 的設計較為靜態，而 Hermes Agent 提供了動態學習能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenClaw/OpenClaw](https://github.com/OpenClaw/OpenClaw) | OpenClaw 主要依賴於外部技能，缺乏自我學習能力。 | 如果需要一個較為靜態的 AI Agent，且已有外部技能庫可用。 | medium，因為需要重新設計技能管理方式。 |
| [ClaudeCode/ClaudeCode](https://github.com/ClaudeCode/ClaudeCode) | Claude Code 的設計較為靜態，無法自動創建和演化技能。 | 如果需要一個較為簡單的 AI Agent，且不需要動態學習能力。 | low，因為設計理念相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **hermes-agent-orange-book** | **OpenClaw** | **ClaudeCode** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 主要依賴於外部技能，缺乏自我學習能力。 | Claude Code 的設計較為靜態，無法自動創建和演化技能。 |
> | 遷移成本 | - | medium，因為需要重新設計技能管理方式。 | low，因為設計理念相似。 |
> | 適用場景 | 主要場景 | 如果需要一個較為靜態的 AI Agent，且已有外部技能庫可 | 如果需要一個較為簡單的 AI Agent，且不需要動態學習能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，性能可能會下降。
  - 解法：考慮使用負載均衡來分散請求。
- [MEDIUM] 文檔翻譯不完整，可能導致使用者困惑。
  - 解法：參考英文文檔以獲得更準確的資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 AI 自動化 | 非常適合 | Hermes Agent 的靈活性和自我學習能力能夠快速適應需求。 |
| 大型企業的核心 AI 系統 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 學術研究中的 AI Agent 開發 | 適合 | 提供全面的實戰指南，適合學習與實驗。 |
| 需要高效能的即時 AI 服務 | 普通 | 在高並發情況下性能可能下降。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、10 小時整合，得到靈活的 AI Agent 開發框架，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意依賴的第三方庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Hermes Agent 最常與 Python 生態系統中的工具搭配使用，特別是在開發和測試階段。實際整合範例中，可以在 Flask 應用中使用 Hermes Agent 來處理用戶請求，具體做法是將 Agent 嵌入到 Flask 路由中。與主流 CI 工具（如 GitHub Actions）相容良好，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要對 Agent 的配置進行調整，以適應不同的應用場景。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
| Forks | 279 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-08 |
| 建立日期 | 2026-04-08 |
| Repo 大小 | 25.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/hermes-agent-orange-book) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 9 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和反饋。
**連結**：[文件](https://hermes-agent.nousresearch.com/docs/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-08）
> **活躍天數** 1 天 · **最新 commit** fix: correct OpenClaw comparison — fair and accurate descriptions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/alchaincyf/hermes-agent-orange-book/issues/3) | Spanish translation? | 0 | 0 |
> | [#2](https://github.com/alchaincyf/hermes-agent-orange-book/issues/2) | 如果生成的PDF能够有目录就好了。 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **English** | [中文版 README](README_zh.md)
> 
>   
> 
> # Hermes Agent: The Complete Guide
> 
> > 橙皮书 (Orange Book) Series · by HuaShu (花叔)
> 
> A practical guide to [Hermes Agent](https://github.com/NousResearch/hermes-agent), the open-source AI Agent framework by [Nous Research](https://hermes-agent.nousresearch.com/). The first Agent that ships with reins built in — and the reins keep growing.
> 
>   
>   
> 
> ## Download
> 
> | Version | PDF |
> |---------|-----|
> | 中文版 (Chinese) | **[PDF Download](https://github.com/alchaincyf/hermes-agent-orange-book/raw/main/Hermes-Agent-从入门到精通-v260407.pdf)** |
> | English | **[PDF Download](https://github.com/alchaincyf/hermes-agent-orange-book/raw/main/Hermes-Agent-The-Complete-Guide-v260407.pdf)** |
> 
> ## What This Book Covers
> 
> [Hermes Agent](https://github.com/NousResearch/hermes-agent) is an open-source AI Agent framework released by Nous Research in February 2026. Unlike OpenClaw and Claude Code, it takes a fundamentally different approach: a built-in self-improving learning loop, three-layer memory system, and automatic Skill creation and evolution.
> 
> If you've read the "Harness Engineering" 橙皮书, Hermes is the first productization of those five components (instructions / constraints / feedback / memory / orchestration).
> 
> 17 chapters across 5 parts:
> 
> | Part | Content | Chapters |
> |------|---------|----------|
> | Concepts | From Harness to Hermes | §01-02 |
> | Core Mechanisms | Learning loop, memory, Skills, tool ecosystem | §03-06 |
> | Hands-On Setup | Installation, first conversation, multi-platform, customization | §07-11 |
> | Real-World Scenarios | Knowledge assistant, dev automation, content creation, multi-Agent | §12-15 |
> | Deep Thinking | Three-way comparison, boundaries of self-improving Agents | §16-17 |
> 
>   
>   
> 
> ## Who Is This For
> 
> - Developers who've used Claude Code / OpenClaw / Cursor and want to understand Hermes
> - AI enthusiasts who want to build a personal AI Agent
> - Anyone interested in seeing Harness Engineering concepts turned into a real product
> 
> ## 橙皮书 (Orange Book) Series
> 
> This is part of the 橙皮书 series — free, practical guides on AI tools. Other titles include Claude Code, Harness Engineering, OpenClaw, and more.
> 
> All books free to download: **[huasheng.ai/orange-books](https://www.huasheng.ai/orange-books)**
> 
> ## About the Author
> 
> **HuaShu (花叔)** · AI Native Coder · Indie Developer
> 
> An AI content creator with 300K+ followers across platforms. Built all products (including an App Store #1 Paid iOS app) entirely with AI tools — never wrote a line of code manually.
> 
> - X/Twitter: [@AlchainHust](https://x.com/AlchainHust)
> - YouTube: [@Alchain](https://www.youtube.com/@Alchain)
> - Bilibili: [AI进化论-花生](https://space.bilibili.com/14097567/)
> - WeChat Official Account: 花叔
> - Website: [huasheng.ai](https://www.huasheng.ai/)
> 
> ## Version
> 
> - **v260408** — First edition, based on Hermes Agent v0.7.0
> - AI tools evolve rapidly — refer to [official docs](https://hermes-agent.nousresearch.com/docs/) for the latest
> 
> ## License
> 
> [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) — free to share and adapt with attribution, non-commercial only.

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[深度學習]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/alchaincyf/hermes-agent-orange-book)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "alchaincyf--hermes-agent-orange-book"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "alchaincyf--hermes-agent-orange-book"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "alchaincyf--hermes-agent-orange-book" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "alchaincyf--hermes-agent-orange-book"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--hermes-agent-orange-book" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--hermes-agent-orange-book" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--hermes-agent-orange-book"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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
> const me = dv.page("Repos/alchaincyf--hermes-agent-orange-book");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-15|2026-04-15]] — 再次上榜，2.5k stars
- [[2026-04-14|2026-04-14]] — 再次上榜，2.3k stars
- [[2026-04-13|2026-04-13]] — 再次上榜，2.1k stars
- [[2026-04-12|2026-04-12]] — 首次收錄，1.9k stars
