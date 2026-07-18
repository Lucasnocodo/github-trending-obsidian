---
repo: Kappaemme-git/codex-first-customer-finder-skill
url: https://github.com/Kappaemme-git/codex-first-customer-finder-skill
owner: Kappaemme-git
owner_type: User
language: Python
license: MIT
description: "A Codex skill that finds evidence-backed potential first customers from recent public signals."
homepage: ""
stars: 792
stars_per_day: 158
forks: 81
open_issues: 3
created: 2026-07-12
pushed_at: 2026-07-13
first_seen: 2026-07-16
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "客戶開發"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "透過公開信號找出潛在的第一批客戶，幫助初創企業進行客戶開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-25"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 32
readme_length: 2831
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-16"
star_history: "2026-07-16:712,2026-07-16:712,2026-07-17:761,2026-07-17:762,2026-07-18:792,2026-07-18:792"
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
  - "透過公開信號找出潛在的第一批客戶，幫助初創企業進行客戶開發。"
---

# codex-first-customer-finder-skill

**792** stars · **158** stars/天 · 建立 5 天前 · Python · MIT

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
> 透過公開信號找出潛在的第一批客戶，幫助初創企業進行客戶開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (158 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要精準客戶開發的初創企業創始人或市場研究人員。
> **一句話重點** 這個專案的獨特之處在於它將公開信號轉化為具體的客戶開發行動，並強調手動外聯的重要性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-first-customer-finder-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "客戶開發" && p.file.name !== "Kappaemme-git--codex-first-customer-finder-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 客戶開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到精準的客戶開發工具，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一種基於公開信號的證據驅動客戶篩選方法，並生成手動外聯的開場白。

## 專案簡介

這個 Codex 技能的核心機制是將初創企業的 URL 或產品概念轉換為一個合格的潛在客戶名單，依賴於最近的公開信號來評估需求和時機。使用者只需提供一個 URL，系統會分析該 URL，定義理想客戶輪廓，並從公共來源中尋找明確的需求和痛點信號。最終，系統會生成一份 HTML 報告，包含潛在客戶的證據鏈接、評分和個性化的開場白。這個工具的賣點在於其證據驅動的客戶篩選過程，並且不會自動發送任何外聯。技術上，這個工具使用 Python 和 JavaScript，並依賴於公共數據來源進行分析，這樣的設計使得它能夠避免涉及敏感的個人數據。

與其他客戶開發工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個工具提供了更為細緻的證據鏈接和手動外聯的選項，適合需要精確客戶開發的初創企業。使用者可以選擇不同的模式，如 `quick`、`standard` 或 `deep`，以滿足不同的需求。這個工具的輸出報告不僅包含潛在客戶的名單，還有針對每個客戶的具體開場白，這對於初創企業在尋找早期用戶時非常有幫助。雖然這個工具的使用需要一定的手動操作，但它的證據驅動方法能夠提供更高的客戶質量。整體來看，這個工具適合需要精準客戶開發的初創企業，尤其是在尋找早期用戶或設計夥伴的情境下。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 證據驅動的潛在客戶篩選 — 根據公開信號評估潛在客戶的需求和時機。
- 多種模式選擇 — 提供 `quick`、`standard`、`deep`、`design-partners` 和 `b2b` 模式以滿足不同需求。
- 手動外聯開場白 — 自動生成的開場白基於公開來源，避免敏感數據的使用。
- HTML 報告生成 — 生成包含潛在客戶名單和證據鏈接的響應式報告。
- 客戶輪廓定義 — 定義主要和相鄰的理想客戶輪廓，幫助精準定位。

## 快速開始

1. 安裝技能
```bash
npx --yes codex-first-customer-finder-skill@latest
```
2. 找到潛在客戶
```bash
Use $first-customer-finder to find ten evidence-backed potential first customers for https://example.com and create the final HTML report.
```
3. 使用設計夥伴模式
```bash
Use $first-customer-finder in design-partners mode for this startup: [URL].
```

## 程式碼範例

```python
{
  "前置條件": "安裝 Codex First Customer Finder Skill。",
  "指令": "Use $first-customer-finder to find ten evidence-backed potential first customers for https://example.com and create the final HTML report.",
  "預期輸出": "生成一份包含潛在客戶名單的 HTML 報告，並附上證據鏈接和開場白。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 792 stars（158/天），forks 81（10.2%），顯示出相對活躍的社群關注。這個專案的作者 Kappaemme-git 以開發 Codex 技能為主，解決了初創企業在客戶開發過程中缺乏有效工具的痛點，之前的方案往往無法提供具體的證據鏈接和手動外聯的選項。這個專案的推出恰逢初創企業對於精準客戶開發的需求上升，並且在社群中引發了討論。這個工具的設計充分考慮了用戶的需求，避免了自動化的外聯方式，讓使用者能夠更好地控制客戶開發的過程。

## 適合誰使用

**目標受眾**：需要精準客戶開發的初創企業創始人或市場研究人員。

> [!example] 使用場景
> - 初創企業創始人用它來找到第一批潛在客戶，因為它能提供基於公開信號的證據支持，幫助他們更快進入市場。
> - 市場研究員用它來分析競爭對手的客戶群，因為它能夠提供詳細的客戶輪廓和需求信號，幫助他們制定策略。
> - 產品經理用它來尋找設計夥伴，因為它能夠優先考慮那些公開描述問題並可能給予產品反饋的人。

## 架構分析

這個專案採用模組化的設計，將客戶篩選和報告生成分開。使用者輸入 URL，系統會通過公共數據來源進行分析，並生成報告。這樣的設計使得系統能夠靈活應對不同的客戶需求。

資料流從用戶輸入開始，經過數據分析和篩選，最終生成 HTML 報告。選擇這種設計的代價是需要依賴公共數據的可用性，若數據不足，報告的質量會受到影響。擴展性方面，若未來需要增加更多的數據來源，可能需要進一步調整資料處理的邏輯。

## 技術深入分析

這個專案的核心技術機制是通過分析公開數據來篩選潛在客戶，使用 Python 和 JavaScript 進行實作。它利用了網路爬蟲和數據分析技術，從不同的公共來源收集信號，並根據這些信號評估客戶的需求和時機。這樣的設計使得工具能夠靈活應對不同的客戶需求，並且能夠生成詳細的報告。然而，這也帶來了對公共數據的依賴，若數據不足，報告的質量會受到影響。設計上選擇了手動外聯的方式，這樣可以避免自動化過程中可能出現的誤發問題，但也增加了使用者的操作負擔。這個工具在與其他主流框架的整合上相對簡單，使用者只需安裝並配置即可開始使用。整體來看，這個專案在客戶開發領域提供了一個創新的解決方案，未來可能會隨著數據來源的增加而進一步擴展功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並包含範例。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供證據驅動的客戶篩選，增加潛在客戶的質量。
> - 手動外聯方式讓使用者能夠更好地控制客戶開發過程。
> - 生成的 HTML 報告易於分享和展示。

> [!danger] 缺點
> - 僅依賴公開信號，無法保證客戶的實際購買意願。
> - 所有外聯需手動進行，增加了操作的複雜度。
> - 報告生成的質量依賴於公共數據的可用性和準確性。

> [!warning] 注意事項
> - 僅基於公開信號，無法保證客戶的實際購買意願。
> - 不支持自動發送外聯，所有外聯需手動進行。
> - 報告生成的質量依賴於公共數據的可用性和準確性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的客戶開發功能，但更專注於自動化過程，可能不如本專案精確。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個針對市場研究的工具，雖然功能相似，但缺乏本專案的證據鏈接和手動外聯選項。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化客戶開發過程，而本專案則強調手動外聯和證據鏈接的生成。 | 如果你的團隊需要快速自動化客戶開發流程，這個工具可能更合適。 | medium，因為需要重新設計客戶開發的流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供市場研究功能，但缺乏本專案的證據鏈接和手動外聯選項。 | 如果你的需求主要是市場研究而非客戶開發，這個工具可能更合適。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-first-customer-finder-skill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於自動化客戶開發過程，而本專案則強調手動外聯和證據鏈接的生成。 | 這個工具提供市場研究功能，但缺乏本專案的證據鏈接和手動外聯選項。 |
> | 遷移成本 | - | medium，因為需要重新設計客戶開發的流程。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速自動化客戶開發流程，這個工具可能更合適。 | 如果你的需求主要是市場研究而非客戶開發，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，公共數據可能不完整，導致報告質量下降。
  - 解法：使用多個數據來源進行交叉驗證。
- [MEDIUM] 手動外聯過程中可能會漏掉潛在客戶。
  - 解法：制定明確的外聯計畫，逐步跟進。
- [low] 報告生成時間可能因數據量而異。
  - 解法：在數據量較小的情況下進行測試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司尋找早期用戶 | 非常適合 | 能夠提供精準的客戶篩選和手動外聯的選項，適合小型團隊。 |
| 大型企業進行市場調研 | 普通 | 雖然有市場調研功能，但不如專門的市場調研工具全面。 |
| 需要快速自動化客戶開發的團隊 | 不適合 | 強調手動外聯，與自動化需求不符。 |
| 產品經理尋找設計夥伴 | 非常適合 | 能夠優先考慮公開描述問題的潛在客戶，適合尋找反饋。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到精準的客戶開發工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，使用過程中不涉及個人數據。

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
| Forks | 81 |
| Open Issues | 3 |
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

**社群活躍度**：社群活躍度中等，最近有合併請求和開放問題。

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

相關概念：[[客戶開發]] · [[市場研究]] · [[證據驅動]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/Kappaemme-git/codex-first-customer-finder-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：客戶開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "客戶開發" AND file.name != "Kappaemme-git--codex-first-customer-finder-skill"
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
> const concepts = ["客戶開發","市場研究","證據驅動"];
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

- [[2026-07-18|2026-07-18]] — 再次上榜，792 stars
- [[2026-07-17|2026-07-17]] — 再次上榜，761 stars
- [[2026-07-16|2026-07-16]] — 首次收錄，712 stars
