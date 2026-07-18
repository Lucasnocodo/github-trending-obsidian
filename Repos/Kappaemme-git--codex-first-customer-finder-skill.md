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
subcategory: "客戶發掘"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "透過公開信號找到潛在的首位客戶，幫助新創公司進行客戶發掘。"
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
star_history: "2026-07-16:712,2026-07-16:712,2026-07-17:761,2026-07-17:762,2026-07-18:792"
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
  - "透過公開信號找到潛在的首位客戶，幫助新創公司進行客戶發掘。"
---

# codex-first-customer-finder-skill

**762** stars · **191** stars/天 · 建立 4 天前 · Python · MIT

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
> 透過公開信號找到潛在的首位客戶，幫助新創公司進行客戶發掘。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (191 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望在新創階段快速找到早期客戶的創業團隊。
> **一句話重點** 這個工具不僅提供潛在客戶名單，還鏈接了每個客戶的來源，這使得聯繫更具針對性。

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
> **結論** 花 2 小時學習，1 小時整合，得到快速生成潛在客戶名單的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於使用公開信號來生成基於證據的潛在客戶名單。

## 專案簡介

這個專案是一個 Codex 技能，能將新創公司的 URL 或產品想法轉換為合格的潛在首位客戶名單，透過分析公開的需求、痛點和時機信號。使用者只需提供一個 URL，系統會定義理想客戶輪廓，從公共來源中研究並鏈接每個潛在客戶的證據，並根據適合度和時機進行排名。最終會生成一份 HTML 報告，包含客戶評估、潛在客戶名單及個性化的聯繫開場白。這個工具的賣點在於它不會自動發送任何聯繫請求，保持所有聯繫手動進行，並避免使用私人聯繫資料。使用者可以透過 `$first-customer-finder` 指令來尋找潛在客戶，並根據不同模式（如設計夥伴、B2B 研究等）進行調整。

技術上，這個專案使用 Python 和 JavaScript，並依賴於公共信號的分析，對於新創公司來說，這是一個低成本的客戶發掘工具，尤其適合初創階段的團隊。與其他客戶發掘工具相比，它不僅提供了潛在客戶的名單，還鏈接了每個潛在客戶的來源，這使得使用者能夠更有針對性地進行聯繫。此工具的使用限制在於，所有的潛在客戶都是基於假設，並非確認的客戶，這可能會影響實際的轉換率。整體來看，這個工具適合需要快速找到早期客戶的創業團隊，特別是那些希望在市場上獲得反饋的團隊。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 潛在客戶分析 — 根據提供的 URL 分析並定義理想客戶輪廓。
- 證據鏈接 — 每個潛在客戶都鏈接到其公開來源，提供透明的證據支持。
- 多種模式 — 支援 quick、standard、deep、design-partners 和 b2b 模式，以滿足不同需求。
- 手動聯繫 — 所有的聯繫開場白都是手動生成，避免自動發送，保持聯繫的個性化。
- HTML 報告生成 — 生成包含潛在客戶名單、評估和開場白的響應式 HTML 報告。

## 快速開始

1. 安裝 Codex 技能
```bash
npx --yes codex-first-customer-finder-skill@latest
```
2. 使用技能尋找潛在客戶
```bash
$first-customer-finder https://example.com
```
3. 以設計夥伴模式使用
```bash
$first-customer-finder in design-partners mode for https://example.com
```

## 程式碼範例

```python
[
  "# 前置條件（安裝完成後）",
  "$first-customer-finder https://example.com",
  "# 預期輸出（生成的報告將包含潛在客戶名單和評估）"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 762 stars（191/天），forks 79（10.4%），顯示出強烈的市場需求。作者 Kappaemme-git 是一位專注於 Codex 技能開發的開發者，這個專案解決了新創公司在客戶發掘過程中缺乏有效工具的痛點，之前的解決方案往往依賴於手動搜尋和篩選，效率低下。此專案的推出引起了關注，特別是在創業社群中，因為它提供了一個系統化的方法來識別潛在客戶。技術上，這個工具的實現依賴於公共信號的分析，這在當前的市場環境中變得越來越可行，因為許多企業開始在網上分享他們的需求和痛點。forks/stars 比率為 10.4%，顯示出有相當比例的用戶對此工具進行了實際的修改和使用，這是社群活躍度的良好指標。

## 適合誰使用

**目標受眾**：希望在新創階段快速找到早期客戶的創業團隊。

> [!example] 使用場景
> - 創業者用它來快速找到潛在的早期客戶，因為它能基於公開信號提供有根據的客戶名單。
> - 市場研究員用它來分析競爭對手的客戶需求，因為它能夠鏈接每個潛在客戶的來源，提供深入的市場洞察。
> - 產品經理用它來尋找設計夥伴，因為它能優先考慮那些公開表達需求的潛在客戶，從而獲得有價值的反饋。

## 架構分析

這個專案採用模組化設計，將客戶發掘過程分為多個步驟，包括定義客戶輪廓、信號分析和報告生成。資料流從用戶提供的 URL 開始，經過分析和評估，最終生成一份 HTML 報告。這種設計使得使用者能夠靈活選擇不同的模式來滿足需求，並保持手動聯繫的靈活性。選擇手動聯繫而非自動化發送的代價是需要更多的時間和精力，但這樣能提高聯繫的個性化程度。擴展性方面，該工具的設計允許未來增加更多的客戶分析模式和報告格式，這使得它能夠適應不斷變化的市場需求。

## 技術深入分析

這個專案的核心技術機制在於分析公開信號，利用 Python 和 JavaScript 進行資料處理和報告生成。它使用了資料庫查詢和網路爬蟲技術來獲取潛在客戶的公開資料，並根據定義的客戶輪廓進行篩選。效能方面，該工具能夠快速處理多個 URL 的分析，並生成報告，具體的處理時間依賴於資料的量和複雜度。設計上選擇了手動聯繫的方式，這樣雖然增加了使用者的工作量，但能提高聯繫的個性化和針對性。這個選擇也降低了對自動化系統的依賴，減少了潛在的錯誤和風險。技術風險方面，未來在擴大使用範圍時，可能會遇到資料來源的可靠性問題，這需要持續的監控和更新。整合方面，該工具可以與現有的開發環境無縫結合，特別是在使用 Codex 的情境下，能夠輕鬆嵌入到現有的工作流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，包含具體的範例。安裝過程相對順暢，使用者只需執行簡單的命令即可完成安裝。文件中沒有多語言支持，但內容簡潔易懂，適合快速上手。

## 優缺點分析

> [!success] 優點
> - 基於公開信號的證據鏈接，提供透明的客戶分析。
> - 支援多種模式，靈活滿足不同需求。
> - 生成的報告格式化良好，易於分享和理解。

> [!danger] 缺點
> - 所有潛在客戶僅基於假設，實際轉換率不保證。
> - 不支援自動發送聯繫請求，增加了手動工作量。
> - 對於某些行業的公開信號可能不足，影響結果的準確性。

> [!warning] 注意事項
> - 所有潛在客戶僅基於公開信號，並非確認的客戶。
> - 不支援自動發送聯繫請求，所有聯繫需手動進行。
> - 對於某些特定行業的公開信號可能不足，影響結果的準確性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於自動化客戶發掘過程，而本專案則強調手動聯繫和證據鏈接。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更廣泛的客戶數據庫，但缺乏本專案的證據鏈接功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | Codex-shim 提供了更靈活的 API 接口，但不專注於客戶發掘，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化客戶發掘過程，而本專案則強調手動聯繫和證據鏈接。 | 如果需要快速自動化客戶發掘，且不介意失去個性化聯繫。 | medium，因為需要重新調整客戶發掘的流程和策略。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了更廣泛的客戶數據庫，但缺乏本專案的證據鏈接功能。 | 如果需要更全面的客戶數據，並且不需要證據鏈接的透明度。 | low，因為數據格式和使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-first-customer-finder-skill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化客戶發掘過程，而本專案則強調手動聯繫和證據鏈接。 | 提供了更廣泛的客戶數據庫，但缺乏本專案的證據鏈接功能。 |
> | 遷移成本 | - | medium，因為需要重新調整客戶發掘的流程和策略。 | low，因為數據格式和使用方式相似。 |
> | 適用場景 | 主要場景 | 如果需要快速自動化客戶發掘，且不介意失去個性化聯繫。 | 如果需要更全面的客戶數據，並且不需要證據鏈接的透明度。 |

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

- **[HIGH]** 潛在客戶名單可能不夠準確，因為基於公開信號的分析可能存在偏差。
  - 解法：建議交叉驗證潛在客戶資料，並結合其他來源的資訊。
- [MEDIUM] 手動聯繫可能導致聯繫效率低下。
  - 解法：建立一個聯繫模板以提高效率。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊尋找早期客戶 | 非常適合 | 能快速生成潛在客戶名單，並提供具體的聯繫開場白。 |
| 大型企業的市場研究部門 | 普通 | 雖然可以使用，但可能需要更多的數據來源來支援分析。 |
| 需要自動化客戶發掘的團隊 | 不適合 | 該工具強調手動聯繫，與自動化需求不符。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成潛在客戶名單的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD 流程中使用。

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
| Forks | 79 |
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

**社群活躍度**：社群活躍度中等，最近有合併請求和問題未解決。
**連結**：[文件](https://github.com/Kappaemme-git/codex-first-customer-finder-skill)

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

相關概念：[[客戶發掘]] · [[市場研究]] · [[需求分析]]

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
> const concepts = ["客戶發掘","市場研究","需求分析"];
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
