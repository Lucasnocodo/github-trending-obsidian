---
repo: alvinreal/awesome-opensource-ai
url: https://github.com/alvinreal/awesome-opensource-ai
owner: alvinreal
owner_type: User
language: Python
license: NOASSERTION
description: "Curated list of the best truly open-source AI projects, models, tools, and infrastructure."
homepage: "https://awesomeosai.com"
stars: 2578
stars_per_day: 123
forks: 236
open_issues: 15
created: 2026-03-24
pushed_at: 2026-04-15
first_seen: 2026-03-27
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "資源清單"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-27
use_case: "提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選清單。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 42
repo_size_kb: 1654
readme_length: 5932
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-27"
star_history: "2026-03-27:1024,2026-03-27:1037,2026-03-28:1460,2026-03-28:1467,2026-03-29:1746,2026-03-29:1751,2026-03-30:1931,2026-03-30:1932,2026-03-31:2063,2026-03-31:2064,2026-04-01:2189,2026-04-02:2236,2026-04-03:2265,2026-04-04:2291,2026-04-05:2308,2026-04-06:2345,2026-04-07:2385,2026-04-08:2402,2026-04-09:2423,2026-04-10:2434,2026-04-11:2446,2026-04-12:2467,2026-04-13:2498,2026-04-14:2523,2026-04-15:2578"
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
  - "提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選清單。"
---

# awesome-opensource-ai

**2.6k** stars · **123** stars/天 · 建立 21 天前 · Python · NOASSERTION

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
> 提供最佳的真正開源 AI 專案、模型、工具和基礎設施的精選清單。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (123 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 尋求高品質開源 AI 資源的開發者和研究者。
> **一句話重點** 這個專案讓開發者能夠快速找到高品質的開源 AI 資源，節省大量時間。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alvinreal--awesome-opensource-ai");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資源清單" && p.file.name !== "alvinreal--awesome-opensource-ai" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資源清單 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高品質的開源 AI 資源，值得。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供了一個經過篩選的高品質開源 AI 資源清單。

## 專案簡介

這個專案是一個精選的開源 AI 資源庫，專注於提供高品質的模型、工具和基礎設施。用戶可以透過這個清單快速找到經過實戰驗證的 AI 專案，從而節省尋找和評估的時間。它的核心機制是將各種開源 AI 資源進行分類，並提供詳細的描述和連結，讓開發者能夠輕鬆接入。使用者只需訪問專案頁面，即可獲得各種 AI 模型和工具的資訊，從基礎框架到評估工具應有盡有。這個專案的賣點在於其專注於「精英級」的開源專案，確保用戶能夠找到最具實用價值的資源。

技術上，這個清單涵蓋了多種領域，包括生成模型、評估框架和數據集，並且不斷更新以反映最新的發展。它的依賴性相對輕，主要依賴於 GitHub 的開源生態系統，這使得用戶可以快速獲得最新的資源而不需擔心繁瑣的安裝過程。

與其他類似工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，這個專案更注重於提供經過篩選的高品質資源，而不是廣泛的工具列表。

這使得它在質量上優於那些僅僅列出大量工具的專案。

實際使用中，這個清單能夠幫助開發者快速找到合適的工具來解決特定問題，特別是在 AI 模型的選擇和評估方面。由於它是開源的，使用者可以自由地貢獻和修改內容，這也促進了社群的活躍度。

目前，這個專案處於新興階段，適合對開源 AI 有興趣的開發者，尤其是那些尋求高品質資源的團隊。未來六個月內，預計會有更多的資源被添加，並且社群的參與度會進一步提升。

建議使用者在尋找特定的開源 AI 工具時參考這個清單，特別是當他們需要快速找到可靠的資源時。對於那些希望探索開源 AI 生態系統的開發者，這是一個絕佳的起點。

## 重點功能

- 精選資源 — 僅包含經過實戰驗證的開源 AI 專案，確保質量。
- 多樣化分類 — 涵蓋從基礎框架到評估工具的各種資源，方便用戶快速找到所需。
- 持續更新 — 定期更新清單以反映最新的開源 AI 發展，保持資源的新鮮度。
- 社群貢獻 — 鼓勵用戶提交新資源，促進社群參與和活躍度。
- 詳細描述 — 每個專案都有詳細的描述和連結，讓用戶能夠深入了解。

## 快速開始

1. 訪問專案頁面
```bash
https://awesomeosai.com
```
2. 瀏覽分類
```bash
在頁面中選擇所需的資源類別
```
3. 查看詳細資訊
```bash
點擊感興趣的專案連結以獲取更多資訊
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案在建立 21 天內累積了 2578 stars（每天 123），forks 數量為 236（9.2%），顯示出相對活躍的社群參與。作者 alvinreal 及其團隊專注於開源 AI 領域，提供了一個經過篩選的高品質資源清單，解決了開發者在眾多工具中篩選的痛點。這個專案的出現恰逢開源 AI 資源需求上升，並且社群對於高品質資源的渴望促進了它的快速成長。forks/stars 比率為 9.2%，顯示出許多用戶不僅在觀望，還積極參與修改和使用這個專案。

## 適合誰使用

**目標受眾**：尋求高品質開源 AI 資源的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來快速找到經過驗證的開源 AI 模型，因為這樣能節省大量的時間和精力，避免了在不可靠資源中浪費。
> - 開發者用它來尋找適合的評估工具，以便對自己的 AI 模型進行測試，因為這些工具都是經過篩選且具有良好社群支持的。
> - 數據科學家用它來獲取高品質的數據集，因為這些數據集都是針對特定任務精心挑選的，能夠提高模型訓練的效率。

## 架構分析

這個專案的架構是基於 GitHub 的開源生態系統，將各種開源 AI 資源進行分類和整理。用戶可以透過簡單的網頁介面快速瀏覽和查找所需的資源。這樣的設計使得用戶能夠方便地找到高品質的工具，而不需經歷繁瑣的安裝過程。由於依賴於 GitHub，這個專案的擴展性相對較好，但也可能面臨資源更新不及時的問題。整體而言，這個架構模式能夠快速響應用戶需求，但在資源的持續更新上需要社群的積極參與。

## 技術深入分析

這個專案的核心技術機制在於將各種開源 AI 資源進行精選和分類，並提供詳細的描述和連結。這樣的設計使得用戶能夠快速找到所需的工具，避免在眾多資源中迷失。專案的更新頻率高，確保用戶能夠獲得最新的資源，這對於快速變化的 AI 領域尤為重要。由於專案主要依賴 GitHub 的生態系統，這使得資源的獲取和更新變得相對簡單，但也可能面臨資源過時的風險。這個專案的設計選擇使得用戶能夠輕鬆接入各種工具，但在資源的篩選和更新上需要社群的持續參與。整體而言，這個專案在開源 AI 資源的整合上具有良好的潛力，未來可能會吸引更多的開發者和研究者參與進來。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了訪問專案的鏈接和使用說明。安裝過程非常簡單，因為用戶只需訪問網站即可。文件沒有多語言支持，但內容簡潔明瞭，適合大多數用戶。整體而言，新手能夠在 30 分鐘內輕鬆上手。

## 優缺點分析

> [!success] 優點
> - 提供經過篩選的高品質資源，節省用戶尋找時間。
> - 涵蓋多種 AI 相關領域，滿足不同需求。
> - 社群參與度高，資源更新及時。

> [!danger] 缺點
> - 不包含非開源資源，可能限制某些用戶的選擇。
> - 清單中的資源可能隨時間過時，需自行確認。
> - 對新手來說，某些資源的使用可能有技術門檻。

> [!warning] 注意事項
> - 不包含非開源的 AI 資源，可能限制某些用戶的需求。
> - 清單中的資源可能隨著時間變化而過時，需要用戶自行確認最新狀態。
> - 某些資源的安裝和使用可能需要額外的技術背景，對新手不太友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種開源 AI 工具，但不如本專案專注於高品質篩選，可能包含較多不成熟的專案。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定的 AI 應用場景，而本專案則提供更廣泛的資源清單，適合多種需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種開源 AI 工具，但不如本專案專注於高品質篩選，可能包含較多不成熟的專案。 | 如果需要探索多樣的開源工具而不在乎質量，則可以選擇它。 | medium，因為需要重新評估和選擇合適的工具。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定的 AI 應用場景，而本專案則提供更廣泛的資源清單，適合多種需求。 | 如果你的需求非常專注於某一領域的 AI 應用，則可以考慮它。 | low，因為專案的範圍較窄，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-opensource-ai** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供多種開源 AI 工具，但不如本專案專注於高品質篩選，可能包含較多不成熟的專案。 | 專注於特定的 AI 應用場景，而本專案則提供更廣泛的資源清單，適合多種需求。 |
> | 遷移成本 | - | medium，因為需要重新評估和選擇合適的工具。 | low，因為專案的範圍較窄，容易上手。 |
> | 適用場景 | 主要場景 | 如果需要探索多樣的開源工具而不在乎質量，則可以選擇它。 | 如果你的需求非常專注於某一領域的 AI 應用，則可以考慮它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對開源 AI 有興趣的開發者，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些資源的更新速度可能不及時，導致用戶獲取過時資訊
  - 解法：定期檢查資源的最新狀態，或參與社群更新
- **[HIGH]** 對於新手來說，某些資源的使用可能有技術門檻
  - 解法：尋找相關的教學資源或社群支持
- [MEDIUM] 清單中的資源可能隨著時間變化而過時
  - 解法：使用者需自行確認最新狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 研究團隊尋找高品質開源資源 | 非常適合 | 清單中包含經過篩選的高品質資源，能夠滿足研究需求。 |
| 小型開發團隊需要快速找到合適的 AI 工具 | 適合 | 資源分類清晰，能夠快速找到所需工具。 |
| 新手開發者希望探索開源 AI 領域 | 普通 | 某些資源的技術門檻可能對新手造成挑戰。 |
| 需要特定領域的 AI 應用資源 | 不適合 | 清單中資源範圍較廣，可能不夠專注於特定領域。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高品質的開源 AI 資源，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不存取敏感資料，使用時相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案可以與多種開源 AI 工具和框架搭配使用，特別是在開發和測試階段。用戶可以在使用 TensorFlow 或 PyTorch 的專案中，輕鬆找到合適的模型和評估工具。例如，在一個使用 TensorFlow 的專案中，開發者可以透過這個清單找到合適的數據集和模型，並使用相關的評估工具進行測試。這個專案也支援與 GitHub Actions 等 CI 工具的整合，方便用戶在持續集成過程中使用這些資源。整合的摩擦點主要在於用戶需要自行確認資源的最新狀態，並可能需要額外的配置來適應特定的開發環境。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，開發者通常依賴於各種論壇和社群來尋找開源 AI 資源，這些方法往往效率低下且資訊不全。隨著開源 AI 資源的快速增長，對於高品質資源的需求變得越來越迫切。技術的進步使得這種精選清單的建立成為可能，因為用戶現在可以輕鬆訪問和評估各種開源工具。

這個專案代表了開源 AI 資源整合的趨勢，未來可能會吸引更多的開發者和研究者參與進來。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的開源工具使用

> [!tip] 導入策略
> 第一週：在個人專案中試用清單中的資源。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並進行調整。

**成功指標**：使用清單中的資源後，開發效率提升 30%。

> [!warning] 退出計畫
> 所有資源的連結和描述都可以輕鬆找到，若要退出，只需停止使用即可。

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
| Forks | 236 |
| Open Issues | 15 |
| Issue 解決率 | 42% (11 closed) |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-03-24 |
| 官方網站 | [Link](https://awesomeosai.com) |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alvinreal/awesome-opensource-ai) |
| Topics | `agents` `ai` `artificial-intelligence` `awesome` `awesome-list` `generative-ai` `llm` `machine-learning` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alvinreal](https://github.com/alvinreal) | 147 |
> | [@alvinunreal](https://github.com/alvinunreal) | 54 |
> | [@paihari](https://github.com/paihari) | 2 |
> | [@jeheskielSunloy77](https://github.com/jeheskielSunloy77) | 1 |
> | [@mandarwagh9](https://github.com/mandarwagh9) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新資源。
**連結**：[文件](https://awesomeosai.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-14 ~ 2026-04-14）
> **活躍天數** 1 天 · **最新 commit** docs: Update llama.cpp repository URL to ggml-org

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
> - **[MLPerf Training](https://github.com/mlcommons/training)**  - Industry-standard ML training benchmarks from MLCommons. Reference implementations for training AI models at scale across image classification, object detection, NLP, and recommendation tasks. Apache 2.0 licensed.
> - **[VLMEvalKit](https://github.com/open-compass/VLMEvalKit)**  - Open-source evaluation toolkit for large multi-modality models (LMMs). Supports 220+ LMMs and 80+ benchmarks including MMMU, MathVista, and ChartQA. Powers the OpenVLM Leaderboard. Apache 2.0 licensed.
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
> - **[LMMs-Eval](https://github.com/EvolvingLMMs-Lab/lmms-eval)**  - Unified multimodal evaluation toolkit for text, image, video, and audio tasks with 100+ supported benchmarks.
> - **[FlashRAG](https://github.com/RUC-NLPIR/FlashRAG)**  - Efficient Python toolkit for RAG research with 32+ pre-processed benchmark datasets and 12 state-of-the-art RAG algorithms. Includes optimized evaluation pipelines and standard metrics. WWW 2025 Resource. MIT licensed.
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

## 延伸閱讀

相關概念：[[開源]] · [[機器學習]] · [[生成式 AI]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

[GitHub](https://github.com/alvinreal/awesome-opensource-ai) · [官方網站](https://awesomeosai.com)

## 相關收錄

> [!note]- 直接競品（同子分類：資源清單）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資源清單" AND file.name != "alvinreal--awesome-opensource-ai"
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
> const concepts = ["開源","機器學習","生成式 AI"];
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
