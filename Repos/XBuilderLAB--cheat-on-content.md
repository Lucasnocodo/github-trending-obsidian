---
repo: XBuilderLAB/cheat-on-content
url: https://github.com/XBuilderLAB/cheat-on-content
owner: XBuilderLAB
owner_type: Organization
language: Python
license: MIT
description: "Content is already a cheat-code race—whoever cracks the patterns first wins the traffic. Your auto-evolving ops expert that learns YOUR account, not the global average. The Claude Code workflow behind 1M followers in 1 month."
homepage: ""
stars: 1031
stars_per_day: 516
forks: 217
open_issues: 6
created: 2026-05-05
pushed_at: 2026-05-07
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "內容優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "幫助內容創作者透過數據分析優化發文策略，提升流量與粉絲數。 "
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-11"
contributor_count: 2
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 239
readme_length: 2091
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:778,2026-05-07:780,2026-05-08:1022,2026-05-08:1031"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "cheat-on-content"
  - "XBuilderLAB/cheat-on-content"
  - "幫助內容創作者透過數據分析優化發文策略，提升流量與粉絲數。 "
---

# cheat-on-content

**1.0k** stars · **516** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 幫助內容創作者透過數據分析優化發文策略，提升流量與粉絲數。 

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (516 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望透過數據分析提升社交媒體內容表現的內容創作者。
> **一句話重點** 這個工具不僅幫助用戶生成內容，還能透過數據分析優化發文策略，提升內容的曝光率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "內容優化" && p.file.name !== "XBuilderLAB--cheat-on-content" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 內容優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到個性化的內容分析工具，值得投資。

> [!abstract] 核心創新
> 這個專案的核心創新在於根據用戶的歷史數據自動生成和進化的評分公式。

## 專案簡介

Cheat on Content 是一款專為內容創作者設計的工具，旨在透過數據分析來優化發文策略。用戶在發佈內容前，首先進行打分和盲預測，然後在發佈後的三天內進行數據回顧，這樣的循環讓用戶能夠不斷調整和進化自己的內容公式。這個工具的關鍵在於它根據用戶的歷史數據來生成個性化的評分公式，而不是依賴通用的平均數據。使用者只需在內容專案目錄中運行簡單的命令，如 `初始化 cheat-on-content`，即可開始使用。這種方法不僅幫助用戶量化靈感，還能在三個月內顯著提高預測準確度。

技術上，這個工具使用 Python 和 Shell，並且依賴於用戶的歷史數據來持續進化其評分公式。與其他創作工具相比，Cheat on Content 更注重於判斷的準確性，而不是僅僅增加內容產出。實際使用中，這個工具能夠處理大量的內容數據，並且在用戶持續使用的過程中，能夠自動更新其評分標準。這種自我進化的特性使得它在長期使用中能夠提供更高的價值。對於那些希望在社交媒體上快速增長的創作者來說，這是一個值得考慮的工具。

**技術棧**：`Python` · `Shell`

## 重點功能

- 個性化評分公式 — 根據用戶的歷史數據生成，能隨著使用時間不斷進化。
- 盲預測功能 — 在發佈前進行預測，並記錄決策過程，便於後續分析。
- 數據回顧 — 發佈後三天自動生成數據回顧報告，幫助用戶了解內容表現。
- 自動更新 — 根據用戶的發文模式和歷史數據，自動調整評分標準。
- 支持多種內容格式 — 能夠處理各類型的內容數據，提升靈活性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/XBuilderLAB/cheat-on-content.git
```
2. 進入專案目錄
```bash
cd cheat-on-content
```
3. 安裝依賴
```bash
bash install.sh
```

## 程式碼範例

```python
{
  "前置條件": "在內容專案目錄中開啟 Claude Code，並執行初始化。",
  "指令": "初始化 cheat-on-content",
  "預期輸出": "5 個 yes/no 搞定 onboarding。強烈建議導對標帳號。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1031 stars（516/天），forks 217（21.0%），這顯示出強烈的社群興趣。作者是 woniuxuezhang 和 Jooonnn，過去可能有相關的開發經驗。這個工具解決了內容創作者在數據分析上的痛點，讓他們能夠根據自己的歷史數據來優化發文策略，而不是依賴通用的建議。這種個性化的數據分析方法在市場上相對少見，吸引了許多創作者的注意。最近的推特或社群討論可能也促進了它的曝光。高達 21.0% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：希望透過數據分析提升社交媒體內容表現的內容創作者。

> [!example] 使用場景
> - 社交媒體經營者用它來分析過去的發文數據，預測未來內容的表現，因為這樣能夠提升粉絲互動率和增長速度。
> - 內容創作者用它來優化自己的發文策略，透過數據驅動的決策來提高每篇文章的曝光率，因為這樣能夠更有效地吸引目標受眾。
> - 市場行銷專員用它來評估不同內容類型的效果，並根據數據調整行銷策略，因為這樣能夠在競爭激烈的市場中脫穎而出。

## 架構分析

Cheat on Content 的架構設計以用戶的歷史數據為核心，通過 Python 和 Shell 實現數據分析和預測功能。用戶在發佈內容前，工具會自動生成評分和預測，並在發佈後進行數據回顧。這種設計使得每次發佈都能成為一次學習的機會，並且隨著時間的推移，工具能夠自動進化其評分標準。

這樣的架構使得用戶能夠在不斷變化的社交媒體環境中保持競爭力。選擇 Python 作為主要開發語言，因為它在數據分析和機器學習領域的強大生態系統，這使得工具能夠快速實現複雜的數據處理邏輯。這種設計的代價在於需要用戶提供足夠的歷史數據，以便生成準確的評分公式。

隨著用戶數據的增長，工具的效能和準確度將會顯著提升。

## 技術深入分析

Cheat on Content 的核心技術機制在於利用用戶的歷史數據來生成個性化的評分公式，這一過程涉及到數據分析和機器學習的應用。工具在用戶發佈內容前進行打分和盲預測，並在發佈後的三天內進行數據回顧，這樣的流程使得用戶能夠不斷調整和優化自己的內容策略。效能方面，該工具能夠處理大量的內容數據，並且隨著用戶的持續使用，預測準確度會逐漸提高。選擇 Python 作為開發語言，因為它在數據處理和機器學習方面的強大功能，這使得工具能夠快速實現複雜的數據分析邏輯。這樣的選擇雖然帶來了強大的功能，但也要求用戶提供足夠的歷史數據，以便生成準確的評分公式。技術風險方面，若用戶數據不足，可能導致預測準確度下降，這是使用過程中需要注意的問題。整合方面，該工具能夠與主流的內容管理系統相容，但在使用過程中，可能需要用戶自行調整設定以達到最佳效果。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要用戶注意提供足夠的歷史數據以提高預測準確度。整體而言，文件的清晰度和指導性使得新手能夠在短時間內運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠根據用戶的歷史數據生成個性化的評分公式。
> - 提供盲預測和數據回顧功能，幫助用戶持續優化內容策略。
> - 支持多種內容格式，提升靈活性和適用範圍。

> [!danger] 缺點
> - 對於新帳號，預測準確度可能較低，需要時間累積數據。
> - 目前不支持 TikTok 等其他社交平台的數據分析。
> - 需要用戶主動參與數據回顧和評分公式的調整。

> [!warning] 注意事項
> - 需要用戶提供足夠的歷史數據以生成準確的評分公式。
> - 對於新帳號，預測準確度可能較低，需時間累積數據。
> - 目前不支持 TikTok 等其他社交平台的數據分析。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化內容生成，而 Cheat on Content 更注重於數據分析和優化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供內容管理功能，但缺乏個性化的數據分析能力。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | OpenChronicle 主要用於內容排程，無法提供如 Cheat on Content 一樣的預測和評分功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化內容生成，與本專案的數據分析和優化功能有所不同。 | 如果你的需求是自動生成內容而非分析和優化，則應選擇此工具。 | medium，因為需要重新調整內容生成的邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供內容管理功能，但缺乏個性化的數據分析能力，與本專案的核心功能有明顯差異。 | 如果你的重點在於內容的管理而非數據分析，則可以考慮此工具。 | low，因為主要是內容管理的轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cheat-on-content** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化內容生成，與本專案的數據分析和優化功能有所不同。 | 提供內容管理功能，但缺乏個性化的數據分析能力，與本專案的核心功能有明顯差異。 |
> | 遷移成本 | - | medium，因為需要重新調整內容生成的邏輯。 | low，因為主要是內容管理的轉換。 |
> | 適用場景 | 主要場景 | 如果你的需求是自動生成內容而非分析和優化，則應選擇此工具。 | 如果你的重點在於內容的管理而非數據分析，則可以考慮此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 新帳號預測準確度低，需時間累積數據。
  - 解法：在初期多進行測試發佈，收集數據。
- [MEDIUM] 對標帳號的選擇影響預測準確度。
  - 解法：選擇與自己內容類型相近的對標帳號。
- [MEDIUM] 需要用戶主動調整評分公式，可能導致使用不便。
  - 解法：定期檢查和更新評分公式，保持其準確性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠根據小型團隊的需求快速調整內容策略。 |
| 大型企業的內容行銷部門 | 適合 | 能夠提供個性化的數據分析，幫助大型團隊優化內容。 |
| 個人內容創作者 | 非常適合 | 能夠根據個人歷史數據提供精準的內容建議。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到個性化的內容分析工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅存取用戶的內容數據，無需存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
| Forks | 217 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-05-05 |
| Repo 大小 | 239 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XBuilderLAB/cheat-on-content) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 52
>     "Shell" : 48
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@woniuxuezhang](https://github.com/woniuxuezhang) | 6 |
> | [@Jooonnn](https://github.com/Jooonnn) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的更新和問題回應。
**連結**：[文件](https://github.com/XBuilderLAB/cheat-on-content)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-05 ~ 2026-05-07）
> **活躍天數** 2 天 · **最新 commit** v2 prediction system: handle post-shoot script changes via append, not overwrite

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/XBuilderLAB/cheat-on-content/issues/8) | 看起来不错 | 0 | 0 |
> | [#7](https://github.com/XBuilderLAB/cheat-on-content/issues/7) | 如果对标账号是来自不同领域的，比方说现在我导入的几个对标账号是 AI 领域的，那如果我想导入科技数码领域的，会不会影响？ | 0 | 0 |
> | [#3](https://github.com/XBuilderLAB/cheat-on-content/issues/3) | 这个skill希望也能够支持cursor | 0 | 1 |
> | [#2](https://github.com/XBuilderLAB/cheat-on-content/issues/2) | 请问能不能添加 tiktok 的支持？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cheat on Content
> 
> > 做内容本质上就是作弊——谁先看穿规律，谁就拿走流量。
> > 凭感觉发是**猜**，这套让你**算**。也叫**网红外挂**。
> > 我用它一个月涨粉 100w —— 不是灵感，是系统。
> 
> [](CHANGELOG.md)
> [](LICENSE)
> 
> ---
> 
> ## 🎬 它真正在干什么
> 
> 90% 的创作者都活在同一个循环里：
> 
> > 凭感觉发 → 数据出来发现拉了 → 不知道为什么拉 → 下一条还是凭感觉
> 
> 爆了不知道为啥爆，扑了学不到东西。一年发 200 条，水平和第一天一样——只是更累。
> 
> **网红外挂**把每一篇都强行变成一次校准实验：
> 
> 📊 打分 → 🎯 盲预测 → 🚀 发布 → 📈 T+3 天复盘 → 🧬 进化你的评分公式
> 
> 跑一个月 = 你有了一份**只属于你的爆款公式**。
> 跑三个月 = 你比刚开始的自己强 10 倍。
> 
> ---
> 
> ## ⚖️ 它和别的"创作工具"哪里不一样
> 
> | 别人 | 这个 |
> |---|---|
> | 给你"灵感" | 让你**自己的灵感被量化** |
> | AI 帮你写 | AI 帮你**判**——稿子还是你的 |
> | 一发发 10 个版本 A/B 测 | 一发就**赌**——把判断写下来，数据出来对账 |
> | 静态数据看板 | **会进化的评分公式**——你三个月后的 rubric 已经不是初始版 |
> 
> 一句话：别的工具帮你"产出更多"，这个工具帮你"判得更准"。
> 
> ---
> 
> ## 🤔 那 ChatGPT / 豆包 / DeepSeek 不是也能干这个？
> 
> 那是**通用助手**——对所有人说同样的话。你问"我这条会爆吗"，它的答案是从全网平均经验拟合出来的，跟你的账号没关系。明天再问一遍，答案还是上次那个——**它不记得你，更不会因为你而变**。
> 
> 这套是**你自己的运营专家**，只服务你这一个账号：
> 
> - 评分公式从**你的**历史数据反推，不是通用训练分布
> - 每发一条它就更新一次对你账号的理解——三个月后判断准度比刚开始强 10 倍（**自动进化**）
> - 它知道你的对标账号、你的发布 cadence、你最近三次为什么扑——这些 ChatGPT 第一句话就忘了
> 
> 通用 LLM 帮所有人；这套帮你**这个**账号。
> 
> ---
> 
> ## 🛡️ 它怎么让循环真的能进化
> 
> 📝 **每条都留底**：发布前打分、写预测，全程存档。三天后回来对账——你哪里准、哪里偏，**一目了然**，不再是模糊的"感觉这次没发好"。
> 
> 🔁 **越用越准**：连续三次同方向偏差，工具自动催你升级评分公式。**你不主动它也催**。
> 
> 🛡️ **升级有刹车**：换公式必须用新公式重判所有历史样本，能比旧公式更准才放行；还要跨模型独立审一次——**防你自己骗自己**。
> 
> 🪒 **rubric 是工作台不是博物馆**：被推翻的观察删，被吸收的也删。永远只放当下最有用的。
> 
> ---
> 
> ## 📦 安装
> 
> ```bash
> git clone https://github.com/XBuilderLAB/cheat-on-content.git
> cd cheat-on-content
> bash install.sh
> ```
> 
> 13 个子 skill 软链接到 `~/.claude/skills/`。装一次，所有内容项目都能用。
> 
> > 冻结版本：`bash install.sh --copy` / 卸载：`bash uninstall.sh`（不动你的内容数据）
> 
> ---
> 
> ## 🚀 第一次跑
> 
> 在你的内容项目目录里开 Claude Code，说：
> 
> ```
> 初始化 cheat-on-content
> ```
> 
> 5 个 yes/no 搞定 onboarding。**强烈建议导对标账号**——5-10 条样本 → 工具立刻有 anchor，不然前 5 篇预测精度 ±50%。
> 
> ---
> 
> ## ⚡ 日常用法
> 
> ```
> 打分这篇 scripts/.md         → 评分
> 启动预测 scripts/.md         → 盲预测 + 决策日志
> 拍了 scripts/.md            → 建 video folder + buffer +1
> 已发布 https://...                → buffer -1
> 复盘 videos//                → T+3d 数据回收 + 复盘
> 状态 / 抓热点 / 找选题 / 升级 rubric / 找对标
> ```
> 
> 每次开会话 hook 自动报告 buffer + 待复盘 + top 候选——你不用主动问。
> 
> 完整工作流 + 子 skill 细节见 [SKILL.md](SKILL.md)。
> 
> ---
> 
> ## 📜 License
> 
> MIT。商用、改造、闭源接入都行。
> 
> ---
> 
> *这是作弊吗？计算器也是。Google 也是。
> 未来不奖励努力——它奖励先看见规律的人。*

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/XBuilderLAB/cheat-on-content)

## 相關收錄

> [!note]- 直接競品（同子分類：內容優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "內容優化" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "XBuilderLAB--cheat-on-content" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XBuilderLAB" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-08|2026-05-08]] — 再次上榜，1.0k stars
- [[2026-05-07|2026-05-07]] — 首次收錄，778 stars
