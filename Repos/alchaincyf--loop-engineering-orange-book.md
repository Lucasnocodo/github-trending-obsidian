---
repo: alchaincyf/loop-engineering-orange-book
url: https://github.com/alchaincyf/loop-engineering-orange-book
owner: alchaincyf
owner_type: User
language: N/A
license: NOASSERTION
description: "别再问我什么是 Loop Engineering — 橙皮书系列。A plain-language guide to loop engineering (中文 + English PDF). Free."
homepage: ""
stars: 725
stars_per_day: 121
forks: 63
open_issues: 0
created: 2026-06-15
pushed_at: 2026-06-15
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "其他"
subcategory: "AI 工具指南"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "提供一個清晰易懂的 Loop Engineering 指南，幫助開發者設計自動化系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-29"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 5103
readme_length: 3898
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:672,2026-06-19:673,2026-06-20:702,2026-06-20:702,2026-06-21:716,2026-06-21:716,2026-06-22:726,2026-06-22:725"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "loop-engineering-orange-book"
  - "alchaincyf/loop-engineering-orange-book"
  - "提供一個清晰易懂的 Loop Engineering 指南，幫助開發者設計自動化系統。"
---

# loop-engineering-orange-book

**725** stars · **121** stars/天 · 建立 6 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一個清晰易懂的 Loop Engineering 指南，幫助開發者設計自動化系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (121 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升 AI 使用效率的開發者，特別是已經在使用 Claude Code 或 Codex 的人。
> **一句話重點** 這本書不僅是 Loop Engineering 的指南，更是對於如何高效使用 AI 工具的一次深刻反思。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具指南" && p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具指南 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能夠快速理解 Loop Engineering 概念，值得一試。

> [!abstract] 核心創新
> 這本書首次系統性地介紹了 Loop Engineering 的概念，並強調不再手動提示的必要性。

## 專案簡介

這本《橙皮書》提供了一個關於 Loop Engineering 的平易近人的指南，旨在幫助開發者理解如何設計一個自動化的系統來取代手動提示代理。核心機制是建立一個外部系統，這個系統能夠定時運行、生成輔助工具、驗證工作並決定下一步行動。這樣，開發者不再需要逐步提示代理，而是設計一個能自動運行的系統。這本書分為四個部分，涵蓋了 Loop Engineering 的定義、運作方式、實際案例及如何開始建設自己的 Loop。技術上，它不依賴於特定的編程語言或框架，而是提供了一個概念性的框架，讓開發者能夠在多種環境中應用。

與其他類似的資源相比，這本書的獨特之處在於它強調了「不再手動提示」的理念，這在當前的 AI 開發中是個重要的轉變。使用這本書的開發者將能夠更高效地利用 AI 工具，並減少人為錯誤的可能性。這本書的作者 HuaShu 是一位知名的 AI 開發者，擁有豐富的實踐經驗，並且這本書是基於他對當前 AI 工具的深入理解而寫成的。整體來看，這本書適合那些希望提升 AI 使用效率的開發者，尤其是已經在使用 Claude Code 或 Codex 的人。未來六個月，隨著 AI 工具的快速發展，這本書可能會持續更新，以反映最新的技術變化。

## 重點功能

- 平易近人的解釋 — 將 Loop Engineering 的概念以簡單的語言呈現，讓開發者易於理解。
- 實際案例分析 — 提供多個真實的 Loop Engineering 實例，幫助讀者理解如何應用。
- 分步驟指南 — 指導讀者如何從零開始構建自己的 Loop 系統。
- 多語言支持 — 提供中英文版本，方便不同語言的讀者使用。
- 開放獲取 — 免費下載，鼓勵分享和修改，促進社群合作。

## 快速開始

1. 下載 PDF 文件
```bash
wget https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering橙皮书-v260615.pdf
```
2. 閱讀第一部分以了解基本概念
```bash
# 直接翻閱 PDF 文件
```
3. 開始構建自己的 Loop 系統
```bash
# 參考書中第八章的指導
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 725 stars（121/天），forks 63（8.7%），顯示出強烈的興趣。作者 HuaShu 是一位知名的 AI 開發者，過去在社群中有著良好的聲譽。他針對當前開發者在使用 AI 工具時的痛點，提出了 Loop Engineering 的概念，這一點在社群中引起了廣泛的討論和關注。這本書的出現正好填補了市場上對於如何更有效使用 AI 工具的需求，特別是在不再依賴手動提示的情境下。這一轉變在當前的技術生態中是非常重要的，因為它能夠顯著提高開發效率。forks/stars 比率為 8.7%，顯示出許多人對這本書的內容感興趣，並且可能在實際使用中進行修改或擴展。

## 適合誰使用

**目標受眾**：希望提升 AI 使用效率的開發者，特別是已經在使用 Claude Code 或 Codex 的人。

> [!example] 使用場景
> - AI 開發者用它來設計一個自動化的系統，取代手動提示代理，因為這樣可以提高工作效率，減少錯誤。
> - 產品經理用它來理解 Loop Engineering 的概念，幫助團隊更好地利用 AI 工具，因為這樣能夠提升產品開發的速度。
> - 初學者用它來快速入門 Loop Engineering，因為這本書以平易近人的語言解釋了複雜的概念。

## 架構分析

這本書的架構設計以概念為主，並不涉及具體的技術架構。它分為四個部分，從基本定義到實際應用，逐步引導讀者理解 Loop Engineering 的重要性。每一部分都包含具體的案例和步驟，讓讀者能夠在實際操作中學習。這種設計使得即使是初學者也能夠快速上手，但也可能使得對於有經驗的開發者來說，缺乏深度的技術細節。整體來看，這本書的架構是為了讓讀者能夠輕鬆理解和應用 Loop Engineering，而非深入探討技術細節。

## 技術深入分析

這本書的核心在於 Loop Engineering，這是一種設計理念，旨在幫助開發者從手動提示轉向自動化系統。書中詳細解釋了 Loop 的運作方式，強調了如何設計一個能夠自動運行的系統，並提供了多個實際案例來說明其應用。這種設計理念的出現，正是因為當前 AI 工具的快速發展，開發者需要更高效的方式來利用這些工具。書中提到的成本分析，如驗證債務和認知衰退，讓讀者能夠更清楚地理解在設計系統時需要考慮的因素。整體來看，這本書不僅是對 Loop Engineering 的介紹，更是對於未來 AI 開發的一次深刻思考，讓讀者能夠在這個快速變化的領域中保持競爭力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供中英文版本，適合不同語言的讀者。安裝過程非常簡單，只需下載 PDF 文件即可。雖然沒有詳細的入門指南，但書中的結構已經足夠引導讀者進入主題。整體來說，花 30 分鐘能夠輕鬆上手。

## 優缺點分析

> [!success] 優點
> - 以簡單的語言解釋複雜概念，適合廣泛讀者。
> - 提供實際案例，幫助讀者理解如何應用 Loop Engineering。
> - 免費下載，促進知識分享和社群合作。

> [!danger] 缺點
> - 缺乏具體的程式碼範例，對於需要實作的開發者不夠友好。
> - 對於完全不熟悉 AI 工具的讀者，可能需要額外的背景知識。
> - 沒有針對特定編程語言的詳細說明，可能不適合需要具體代碼的開發者。

> [!warning] 注意事項
> - 不提供具體的編程實作範例，僅有概念性指導。
> - 對於完全不熟悉 AI 工具的讀者，可能需要額外的背景知識。
> - 沒有針對特定編程語言的詳細說明，可能不適合需要具體代碼的開發者。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合對 Loop Engineering 感興趣的開發者閱讀，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 書中未提供具體的程式碼範例，可能讓開發者感到困惑
  - 解法：參考其他資源或書籍以獲取實作範例
- [MEDIUM] 對於完全不熟悉 AI 工具的讀者，可能需要額外的背景知識
  - 解法：建議先閱讀相關的 AI 工具入門書籍
- [low] 書中案例的適用性可能因行業而異
  - 解法：根據自身行業特性調整案例應用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊希望提升 AI 工具的使用效率 | 非常適合 | 書中提供了清晰的指導和實際案例，適合小型團隊快速上手。 |
| 大型企業需要建立自動化的 AI 系統 | 適合 | 雖然書中不提供具體的技術細節，但概念性指導對於大型企業的設計思路仍有幫助。 |
| 完全不熟悉 AI 工具的初學者 | 普通 | 需要額外的背景知識，但書中提供的平易近人解釋有助於理解。 |
| 希望深入技術細節的資深開發者 | 不適合 | 缺乏具體的程式碼範例和深入的技術分析，可能無法滿足資深開發者的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速理解 Loop Engineering 概念，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這本書本身不需要高權限，也不存取敏感資料，適合在各種環境中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這本書的內容可以與多種 AI 工具和框架結合使用，特別是 Claude Code 和 Codex。在一個使用 Claude Code 的專案中，開發者可以根據書中的指導設計自動化的 Loop 系統。這樣的設計能夠提升開發效率，減少手動操作的需求。書中提到的概念可以輕鬆融入現有的技術生態，並且不會對現有的工具鏈造成摩擦。整體來看，這本書的內容能夠與當前流行的 AI 工具無縫整合，幫助開發者更好地利用這些資源。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Loop Engineering 出現之前，開發者通常依賴手動提示來操作 AI 工具，這樣的方式效率低下且容易出錯。隨著 AI 技術的快速發展，開發者需要更高效的解決方案來利用這些工具。Loop Engineering 的出現正是為了解決這一問題，提供了一種新的設計理念，幫助開發者自動化這一過程。

這本書代表了 AI 開發的一個重要趨勢，未來可能會有更多類似的資源出現，幫助開發者更好地適應這一變化。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的 AI 工具使用經驗
- 理解自動化概念

> [!tip] 導入策略
> 第一週：團隊成員閱讀書籍。第二週：在小型專案中實驗 Loop Engineering 概念。第三週：根據實驗結果調整設計思路。第四週：在主要專案中實施自動化系統。

**成功指標**：開發效率提升 30%，錯誤率降低 20%。

> [!warning] 退出計畫
> 如果要退出這個工具，可以將設計文檔轉換為標準格式，方便未來的系統重構。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
| Forks | 63 |
| Open Issues | 0 |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-15 |
| Repo 大小 | 5.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/loop-engineering-orange-book) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，定期更新和分享相關資源。
**連結**：[文件](https://www.huasheng.ai/orange-books)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-15）
> **活躍天數** 1 天 · **最新 commit** Loop Engineering Orange Book v260615

## README 摘錄

> [!info]- 展開查看原文 README
> **English** | [中文版 README](README_zh.md)
> 
>   
> 
> # Loop Engineering: Stop Asking Me What It Is
> 
> > 橙皮书 (Orange Book) Series · by HuaShu (花叔)
> 
> A plain-language field guide to **loop engineering** — the term that blew up in a single week of June 2026, when [Peter Steinberger](https://x.com/steipete/status/2063697162748260627), Boris Cherny (head of Claude Code at Anthropic), and Google's [Addy Osmani](https://addyosmani.com/blog/loop-engineering/) all pointed at the same shift and gave it a name.
> 
> The one-line version: **stop being the person who prompts the agent. Design the system that does it for you.**
> 
>   
>   
> 
> ## Download
> 
> | Edition | PDF |
> |---------|-----|
> | 中文版 (Chinese) | **[PDF Download](https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering橙皮书-v260615.pdf)** |
> | English | **[PDF Download](https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering-The-Complete-Guide-v260615.pdf)** |
> 
> ## What This Book Covers
> 
> Loop engineering sits **one floor above the harness**. If harness engineering equips a single agent run — which tools it gets, what counts as "done" — loop engineering is the outer system that runs on a timer, spawns its own helpers, verifies the work, remembers what it did, and decides what to do next. You build it once and let it poke the agents instead of you.
> 
> If you've read the **Harness Engineering** Orange Book, this is the next floor up. It stands on its own — you don't need the previous one.
> 
> **9 sections across 4 parts:**
> 
> | Part | Content | Sections |
> |------|---------|----------|
> | 1. What It Is | The definition, the one-week origin story, and the prompt → context → harness → loop stack | §01–02 |
> | 2. How It Turns | The five moves of one loop, the six parts you build it from, and why an AI can't grade its own code | §03–05 |
> | 3. Where It Runs, What It Costs | Three real loops (Addy's morning triage, Stripe's Minions, the scheduling reality) and the four costs — verification debt, comprehension rot, token blowout, cognitive surrender | §06–07 |
> | 4. How You Start | Staying the engineer, and building your first loop today | §08–09 |
> 
>   
>   
> 
> ## Who Is This For
> 
> - Developers already using Claude Code / Codex / Cursor who still drive the agent prompt by prompt, and want to climb one level up
> - AI power users curious why "you shouldn't be prompting your agents anymore" went viral
> - Anyone who read the Harness Engineering Orange Book and wants the outer loop
> 
> All sources are public and first-hand: Addy Osmani's founding post, Anthropic's harness-design engineering blog, Stripe's Minions, and the official Claude Code / Codex docs.
> 
> ## 橙皮书 (Orange Book) Series
> 
> Part of the 橙皮书 series — free, practical guides on AI tools. Other titles include Claude Code, Harness Engineering, Agent Skills, OpenClaw, and more.
> 
> All books free to download: **[huasheng.ai/orange-books](https://www.huasheng.ai/orange-books)**
> 
> ## About the Author
> 
> **HuaShu (花叔)** · AI Native Coder · Indie Developer
> 
> An AI content creator with 500K+ followers across platforms. Built every product — including an App Store #1 paid iOS app — entirely with AI tools, never writing a line of code by hand. Open-sourced Nuwa.skill, huashu-design, and more.
> 
> - X/Twitter: [@AlchainHust](https://x.com/AlchainHust)
> - YouTube: [@Alchain](https://www.youtube.com/@Alchain)
> - Bilibili: [花叔v](https://space.bilibili.com/14097567/)
> - WeChat Official Account: 花叔
> - Website: [huasheng.ai](https://www.huasheng.ai/)
> 
> ## Version
> 
> - **v260615** — First edition, written the week loop engineering emerged (June 2026), based on Addy Osmani's founding post and the official Claude Code / Codex docs.
> - AI tools evolve fast — refer to each product's official documentation for the latest.
> 
> ## License
> 
> [MIT License](LICENSE) — free to use, copy, modify, and distribute, including commercially. Attribution appreciated but not required.

## 延伸閱讀

相關概念：[[自動化]] · [[AI 工具]] · [[系統設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/alchaincyf/loop-engineering-orange-book)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具指南）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具指南" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "alchaincyf--loop-engineering-orange-book" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 工具","系統設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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

> **2026-06-19** — 首次收錄
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

- [[2026-06-22|2026-06-22]] — 再次上榜，726 stars
- [[2026-06-21|2026-06-21]] — 再次上榜，716 stars
- [[2026-06-20|2026-06-20]] — 再次上榜，702 stars
- [[2026-06-19|2026-06-19]] — 首次收錄，672 stars
