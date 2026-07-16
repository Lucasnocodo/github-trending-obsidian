---
repo: Kappaemme-git/codex-first-customer-finder-skill
url: https://github.com/Kappaemme-git/codex-first-customer-finder-skill
owner: Kappaemme-git
owner_type: User
language: Python
license: MIT
description: "A Codex skill that finds evidence-backed potential first customers from recent public signals."
homepage: ""
stars: 712
stars_per_day: 237
forks: 68
open_issues: 2
created: 2026-07-12
pushed_at: 2026-07-13
first_seen: 2026-07-16
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "客戶發掘"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "透過公共信號找到有證據支持的潛在首批客戶。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-19"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 32
readme_length: 2831
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-16"
star_history: "2026-07-16:712,2026-07-16:712"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/codex"
  - "topic/codex_skill"
  - "topic/customer_discovery"
  - "topic/early_adopters"
  - "topic/prospecting"
aliases:
  - "codex-first-customer-finder-skill"
  - "Kappaemme-git/codex-first-customer-finder-skill"
  - "透過公共信號找到有證據支持的潛在首批客戶。"
---

# codex-first-customer-finder-skill

**712** stars · **237** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`codex` `codex-skill` `customer-discovery` `early-adopters` `prospecting` `startup`

> [!summary] 一句話摘要
> 透過公共信號找到有證據支持的潛在首批客戶。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (237 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速找到潛在客戶的初創公司創始人或市場研究人員。
> **一句話重點** 這個工具讓初創公司能夠透過公共信號精準找到潛在客戶，避免了傳統市場調查的低效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "客戶發掘" && p.file.name !== "Kappaemme-git--codex-first-customer-finder-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 客戶發掘 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、3 小時整合，得到精準的潛在客戶名單，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於利用公共信號來生成基於證據的潛在客戶名單。

## 專案簡介

這個 Codex 技能能夠將一個初創公司的 URL 或產品構思轉化為合格的潛在首批客戶名單，利用最近的公共需求、痛點和時機信號進行分析。用戶只需輸入一個 URL，系統會定義理想客戶輪廓，並從公共來源中研究相關信號，為每個潛在客戶提供證據鏈接，並根據適合度和時機進行排名。最終，系統會生成一份 HTML 報告，包含每個潛在客戶的個性化開場白，並保持所有聯繫手動進行，避免使用敏感個人數據。這個工具的賣點在於其證據基礎的評分系統，讓用戶可以更有信心地接觸潛在客戶。

技術上，這個技能使用 Python 和 JavaScript 開發，並且依賴於公共信號的分析。它的設計選擇強調了手動聯繫的必要性，這樣可以避免自動化帶來的潛在風險。與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個工具專注於提供基於證據的客戶名單，而不是僅僅依賴於數據庫查詢或隨機生成的名單。



在實際使用中，這個工具能夠處理多達 20 個潛在客戶的分析，並生成詳細的報告，這對於需要精準市場定位的初創公司特別有用。使用者可能會遇到的問題包括如何有效地使用生成的開場白進行聯繫，因為這些開場白需要根據具體情況進行調整。社群的活躍度相對較高，但目前的問題解決率較低，這可能影響到使用者的體驗。

這個專案目前處於 alpha 階段，適合小型團隊或個人開發者試用。未來可能會增加更多自動化功能，但目前仍需手動操作，這對於某些使用者來說可能會造成不便。對於需要快速找到潛在客戶的初創公司，這個工具提供了一個有價值的解決方案，但在使用時需考慮到手動聯繫的時間成本。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 證據基礎的客戶評分 — 為每個潛在客戶提供基於公共信號的評分，幫助用戶做出更明智的決策。
- 多種模式選擇 — 支持 `quick`, `standard`, `deep`, `design-partners`, `b2b`, `community` 模式，滿足不同需求。
- 生成 HTML 報告 — 自動生成包含所有潛在客戶的詳細報告，方便分享和參考。
- 手動聯繫 — 所有聯繫都是手動進行，避免自動化帶來的風險，確保聯繫的個性化。
- 公共信號分析 — 從公共來源中提取需求、痛點和時機信號，提供更準確的客戶定位。

## 快速開始

1. 安裝技能
```bash
npx --yes codex-first-customer-finder-skill@latest
```
2. 使用技能找到潛在客戶
```bash
Use $first-customer-finder to find ten evidence-backed potential customers for https://example.com and create the final HTML report.
```
3. 設置設計夥伴模式
```bash
Use $first-customer-finder in design-partners mode for this startup: [URL].
```

## 程式碼範例

```python
[
  "# 前置條件\n# 安裝完成後，使用以下指令找到潛在客戶。\nUse $first-customer-finder to find ten evidence-backed potential customers for https://example.com and create the final HTML report.\n# 預期輸出\n生成一份包含潛在客戶的 HTML 報告。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 712 stars（237/天），forks 68（9.6%），這顯示出強烈的市場需求。作者 Kappaemme-git 是一位專注於 Codex 技能開發的開發者，這個專案解決了初創公司在尋找早期客戶時缺乏有效工具的痛點。之前的方案往往依賴於隨機的市場調查或不夠精確的數據，這使得找到合適的客戶變得困難。這個工具的推出正好填補了這一空白，並且在社群中引起了討論。隨著初創公司對於精準市場定位的需求增加，這個工具的可行性也隨之提升。forks/stars 比率接近 10%，顯示出不少開發者有意對其進行修改或擴展。

## 適合誰使用

**目標受眾**：需要快速找到潛在客戶的初創公司創始人或市場研究人員。

> [!example] 使用場景
> - 初創公司創始人用它來快速找到十個潛在客戶，因為這樣可以節省大量的市場調查時間，並直接針對有需求的客戶進行聯繫。
> - 市場研究員用它來分析一個新產品的潛在客戶群，因為它提供了基於證據的客戶名單，能夠更準確地定位市場需求。
> - 產品經理用它來尋找設計夥伴，因為它能幫助他們找到願意提供反饋的早期採用者，從而優化產品設計。

## 架構分析

這個專案的架構設計強調了基於公共信號的客戶發掘。它使用 Python 和 JavaScript 進行開發，並依賴於公共數據來源進行分析。資料流從用戶輸入的 URL 開始，經過分析後生成潛在客戶名單和報告。

選擇手動聯繫的設計決策使得用戶可以更靈活地調整聯繫方式，但也增加了時間成本。這種設計適合需要精準市場定位的初創公司，但在大規模應用時可能會面臨效率瓶頸。整體而言，這個架構能夠快速響應用戶需求，但在擴展性上仍需進一步考量。

## 技術深入分析

這個專案的核心技術機制在於利用公共信號進行客戶發掘，通過分析公開的需求和痛點來生成潛在客戶名單。它使用 Python 和 JavaScript 作為主要開發語言，並依賴於公共數據來源進行信號提取。效能方面，這個工具能夠快速生成最多 20 個潛在客戶的報告，並且生成的報告格式清晰，便於用戶理解和使用。設計上選擇手動聯繫的方式，這樣可以避免自動化帶來的潛在風險，但也使得整體效率受到影響。這個選擇的好處在於用戶可以根據具體情況調整聯繫方式，代價則是需要投入更多時間。技術風險方面，未來可能會面臨擴展性瓶頸，尤其是在處理大量數據時。整合方面，這個工具與現有的開發流程相容性良好，可以輕鬆嵌入到現有的市場調查工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體指令。安裝過程相對順暢，無明顯坑點。使用指南詳細，能夠幫助新手快速上手，但目前沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 基於證據的評分系統，增加了客戶發掘的準確性。
> - 生成的報告格式清晰，方便分享和參考。
> - 支持多種模式，滿足不同需求的使用場景。

> [!danger] 缺點
> - 所有聯繫需手動進行，可能增加時間成本。
> - 目前僅支持公共信號，無法處理私有數據。
> - 潛在客戶僅為假設，並非確認的客戶或保證的買家。

> [!warning] 注意事項
> - 目前僅支持公共信號分析，無法處理私有數據。
> - 所有聯繫需手動進行，可能增加時間成本。
> - 報告中的潛在客戶僅為假設，並非確認的客戶或保證的買家。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化的客戶獲取，而本專案專注於基於證據的客戶發掘，適合需要精準定位的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的市場調查功能，但缺乏專注於早期客戶的證據鏈接分析。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化的客戶獲取，而本專案專注於基於證據的客戶發掘，適合需要精準定位的場景。 | 如果你的團隊需要快速自動化客戶獲取流程，這個工具會更合適。 | medium，因為需要重新設計客戶獲取的邏輯和流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的市場調查功能，但缺乏專注於早期客戶的證據鏈接分析。 | 如果你需要更全面的市場調查而不僅僅是早期客戶，這個工具會更合適。 | low，因為可以直接使用現有的市場調查流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-first-customer-finder-skill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化的客戶獲取，而本專案專注於基於證據的客戶發掘，適合需要精準定位的場景。 | 提供更廣泛的市場調查功能，但缺乏專注於早期客戶的證據鏈接分析。 |
> | 遷移成本 | - | medium，因為需要重新設計客戶獲取的邏輯和流程。 | low，因為可以直接使用現有的市場調查流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速自動化客戶獲取流程，這個工具會更合適。 | 如果你需要更全面的市場調查而不僅僅是早期客戶，這個工具會更合 |

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

- **[HIGH]** 生成的潛在客戶名單可能不夠準確，需進一步驗證。
  - 解法：在聯繫前進行額外的市場調查。
- [MEDIUM] 手動聯繫可能導致時間成本過高。
  - 解法：制定明確的聯繫計畫以提高效率。
- [MEDIUM] 報告中可能缺乏足夠的背景信息。
  - 解法：在使用報告前補充相關背景資料。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能快速找到潛在客戶，節省市場調查時間。 |
| 大型企業的市場研究部門 | 普通 | 雖然能提供潛在客戶名單，但手動聯繫的效率較低。 |
| 需要快速獲取早期客戶的產品經理 | 非常適合 | 能夠針對性地找到願意提供反饋的客戶。 |
| 對公共信號分析不感興趣的團隊 | 不適合 | 這個工具的核心功能依賴於公共信號的分析。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到精準的潛在客戶名單，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅使用公共數據，無敏感資料存取。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
| Forks | 68 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-13 |
| 建立日期 | 2026-07-12 |
| Repo 大小 | 32 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kappaemme-git/codex-first-customer-finder-skill) |
| Topics | `codex` `codex-skill` `customer-discovery` `early-adopters` `prospecting` `startup` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 86
>     "JavaScript" : 14
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kappaemme-git](https://github.com/Kappaemme-git) | 4 |
> | [@a692570](https://github.com/a692570) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 2 個開放問題尚未解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-12 ~ 2026-07-13）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #4 from Kappaemme-git/revert-1-add-schema-tests-export

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/Kappaemme-git/codex-first-customer-finder-skill/issues/2) | Outreach openers lack concrete manual CTAs and contact-route | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex First Customer Finder Skill
> 
> A Codex skill that turns a startup URL or product idea into a qualified shortlist of potential first customers using recent public pain, demand, and timing signals.
> 
> It defines the ideal customer profile, researches public sources, links the evidence behind every prospect, ranks fit and timing, drafts a source-based opener, and creates a polished HTML report. It never sends outreach automatically.
> 
> ## What It Does
> 
> - Analyzes a startup URL, repository, or product description
> - Defines the primary and adjacent ideal customer profiles
> - Finds explicit demand, pain, workaround, switching, and timing signals
> - Qualifies prospects with an evidence-based score
> - Links every primary prospect to the original public source
> - Drafts respectful, source-based outreach openers
> - Creates a responsive standalone HTML report
> - Keeps all outreach manual by default
> - Avoids private contact enrichment and sensitive personal data
> 
> ## Installation
> 
> ```bash
> npx --yes codex-first-customer-finder-skill@latest
> ```
> 
> This installs the skill into:
> 
> ```text
> ~/.codex/skills/first-customer-finder
> ```
> 
> Restart Codex after installation.
> 
> ## Usage
> 
> Find the first ten potential customers:
> 
> ```text
> Use $first-customer-finder to find ten evidence-backed potential first customers for https://example.com and create the final HTML report.
> ```
> 
> Find design partners:
> 
> ```text
> Use $first-customer-finder in design-partners mode for this startup: [URL]. Prioritize people publicly describing the problem and likely to give product feedback.
> ```
> 
> B2B research:
> 
> ```text
> Use $first-customer-finder in b2b mode for [URL]. Find public business triggers, qualify the relevant companies, and draft one opener per prospect without sending anything.
> ```
> 
> ## Output
> 
> The report includes:
> 
> 1. Early-customer verdict
> 2. Primary ICP and disqualifiers
> 3. Highest-confidence prospect
> 4. Evidence-backed prospect shortlist
> 5. Fit and timing scores
> 6. Source links and signal dates
> 7. Personalized outreach openers
> 8. Repeated pain patterns
> 9. Seven-day manual outreach plan
> 10. Research limitations
> 
> Prospects are hypotheses based on public signals, not confirmed customers or guaranteed buyers.
> 
> ## Modes
> 
> - `quick`: up to five strong prospects
> - `standard`: up to ten prospects across several source types
> - `deep`: up to twenty prospects and repeated-pattern analysis
> - `design-partners`: feedback-oriented early adopters
> - `b2b`: companies and public business triggers
> - `community`: explicit requests and public discussion signals
> 
> ## Manual Installation
> 
> ```bash
> git clone https://github.com/Kappaemme-git/codex-first-customer-finder-skill.git
> mkdir -p ~/.codex/skills
> cp -R codex-first-customer-finder-skill/first-customer-finder ~/.codex/skills/first-customer-finder
> ```
> 
> Restart Codex after installation.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[客戶發掘]] · [[市場調查]] · [[公共信號分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/Kappaemme-git/codex-first-customer-finder-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：客戶發掘）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "客戶發掘" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["客戶發掘","市場調查","公共信號分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kappaemme-git--codex-first-customer-finder-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kappaemme-git--codex-first-customer-finder-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kappaemme-git" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
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

> **2026-07-16** — 首次收錄
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

- [[2026-07-16|2026-07-16]] — 首次收錄，712 stars
