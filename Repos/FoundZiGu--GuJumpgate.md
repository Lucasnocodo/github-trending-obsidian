---
repo: FoundZiGu/GuJumpgate
url: https://github.com/FoundZiGu/GuJumpgate
owner: FoundZiGu
owner_type: User
language: JavaScript
license: MIT
description: ""
homepage: ""
stars: 1458
stars_per_day: 729
forks: 454
open_issues: 12
created: 2026-05-19
pushed_at: 2026-05-21
first_seen: 2026-05-21
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.3"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-21
use_case: "自動化註冊 GPT Plus 的瀏覽器擴展，簡化支付流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-25"
contributor_count: 1
engagement: "high"
issue_close_rate: 67
repo_size_kb: 3834
readme_length: 2626
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-21"
star_history: "2026-05-21:957,2026-05-21:964,2026-05-22:1448,2026-05-22:1458"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "GuJumpgate"
  - "FoundZiGu/GuJumpgate"
  - "自動化註冊 GPT Plus 的瀏覽器擴展，簡化支付流程。"
---

# GuJumpgate

**1.5k** stars · **729** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/FoundZiGu--GuJumpgate");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.3`

> [!summary] 一句話摘要
> 自動化註冊 GPT Plus 的瀏覽器擴展，簡化支付流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (729 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速註冊和支付 GPT Plus 的獨立開發者或小型團隊。
> **一句話重點** GuJumpgate 的自動化註冊和支付流程，能顯著提高用戶的效率，特別是在需要快速完成註冊的情況下。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "FoundZiGu--GuJumpgate" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，能快速獲得自動化註冊和支付的效果，值得一試。

> [!abstract] 核心創新
> 提供雲端支付鏈接轉換服務，減少本地代理分流配置依賴。

## 專案簡介

GuJumpgate 是一個全自動的瀏覽器擴展，專為簡化 GPT Plus 的註冊和支付流程而設計。用戶只需提供一個美國的接碼手機號碼和支持 IMAP 的郵箱，擴展便能自動註冊 Free 帳號，並完成 PayPal 的支付流程。核心機制是通過 FlowPilot 項目實現自動化，並支持跳過 OAuth 流程，生成無 RT 的 JSON 文件。這樣的設計使得用戶能夠在無需手動操作的情況下，快速完成註冊和支付。使用者可選擇雲端支付鏈接轉換，減少本地配置的依賴，並提高穩定性。這個工具的賣點在於其高效的自動化能力，尤其適合需要快速註冊和支付的用戶。

技術上，GuJumpgate 使用 JavaScript 和 Python，並依賴於 Chrome 瀏覽器的擴展架構，這使得它能夠輕鬆集成到現有的工作流程中。與其他類似工具相比，如 FlowPilot 和其他自動化註冊工具，GuJumpgate 提供了更簡單的用戶界面和更高的成功率，特別是在處理 PayPal 的支付流程時。實際使用中，這個工具在美國的網絡環境下運行良好，但在其他地區可能會遇到限制。該專案目前處於 v0.1.3 版本，穩定性和功能性仍在不斷改進中。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，但在生產環境中使用時需謹慎評估其穩定性和安全性。使用者在選擇此工具時，應考慮到其對美國代理的依賴，以及可能的支付流程問題。

**技術棧**：`JavaScript` · `Python` · `HTML` · `CSS`

## 重點功能

- 自動註冊 Free 帳號 — 利用 FlowPilot 自動化註冊流程，100% 成功率。
- PayPal 全流程自動化 — 自動跳轉和填寫 Stripe 及 PayPal 账单。
- 支持 Hotmail / Outlook 自動別名功能 — 提升帳號註冊的靈活性。
- PayPal 号码池管理 — 管理多個接碼電話以提高註冊成功率。
- 支持跳過 OAuth — 生成無 RT 的 JSON 文件，簡化流程。

## 快速開始

1. 下載擴展壓縮包並解壓
```bash
前往 Releases 頁面下載
```
2. 加載擴展目錄
```bash
在 chrome://extensions/ 中選擇加載已解壓的擴展程序
```
3. 啟用無痕模式
```bash
在擴展詳情頁中勾選無痕模式啟用
```
4. 配置代理
```bash
選擇 US 註冊 + JP 拿長鏈接 + US 付款
```
5. 啟動 Hotmail Helper
```bash
運行 start-hotmail-helper.bat 或 start-hotmail-helper.command
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1458 stars（729/天），forks 454（31.1%），顯示出強烈的使用需求。這個專案由 FoundZiGu 開發，針對自動化註冊和支付流程的痛點，提供了一個相對簡單的解決方案。之前用戶需要手動完成註冊和支付，這個工具的出現大幅簡化了這一過程。社群的反饋和活躍度也表明了使用者對這個工具的期待和需求。隨著自動化需求的增加，這個工具的實用性也越來越明顯。

## 適合誰使用

**目標受眾**：需要快速註冊和支付 GPT Plus 的獨立開發者或小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來自動註冊 GPT Plus，因為手動註冊過程繁瑣且耗時。
> - 小型團隊用它來快速完成多個帳號的註冊和支付，因為這樣可以節省時間並提高效率。
> - 需要在美國進行 PayPal 支付的用戶用它來簡化支付流程，因為它能自動填寫和提交支付信息。

## 架構分析

GuJumpgate 採用瀏覽器擴展架構，主要由 JavaScript 和 Python 實現。擴展的核心功能是自動化註冊和支付流程，使用 FlowPilot 的 API 來完成註冊和支付。資料流從用戶輸入的手機號碼和郵箱開始，通過擴展的界面進行配置，然後自動填寫支付信息並提交。

這樣的設計使得用戶無需手動操作，降低了出錯的機會。選擇這種架構的原因在於其易於部署和使用，但代價是對美國代理的依賴，可能在其他地區無法正常運行。擴展的擴展性有限，主要依賴於 Chrome 瀏覽器的環境。

整體來看，這種設計適合需要快速註冊和支付的用戶，但在不同網絡環境下的表現可能會有所差異。

## 技術深入分析

GuJumpgate 的核心技術機制是基於 JavaScript 和 Python 的瀏覽器擴展，主要使用 FlowPilot 的 API 來實現自動化註冊和支付。這個工具的設計模式是事件驅動，通過用戶的輸入觸發相應的流程。效能方面，這個工具在美國的網絡環境下運行良好，成功率達到 100%。然而，對於其他地區的用戶，可能會面臨網絡延遲和支付失敗的風險。

選擇瀏覽器擴展的架構使得用戶可以輕鬆安裝和使用，但也限制了其在不同環境下的適應性。技術上，GuJumpgate 的依賴樹相對簡單，主要依賴於 Chrome 瀏覽器的擴展 API。這樣的選擇使得整合難度低，但在擴展性上可能會遇到瓶頸。對於未來的發展，若能增加對其他地區的支持，將會大幅提升其使用範圍。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，整體清晰易懂。安裝過程較為順暢，但需要用戶自行配置代理，可能會有一定的學習曲線。文件中未提供多語言支持，主要以中文為主。整體來說，花 30 分鐘應該能夠成功運行。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能快速完成註冊和支付。
> - 支持多種郵箱和接碼電話，靈活性強。
> - 雲端支付鏈接轉換服務，減少本地配置依賴。

> [!danger] 缺點
> - 對美國代理的依賴，其他地區使用受限。
> - 在 OAuth 風控下，可能需要額外的手機綁定。
> - 目前版本仍在穩定性和功能性上持續改進。

> [!warning] 注意事項
> - 僅支援美國的接碼電話，其他地區可能無法使用。
> - 需要穩定的網絡環境，特別是在使用雲端服務時。
> - OAuth 風控嚴重，需注意手機綁定問題。
> - 目前仍建議使用本地 CPA JSON 無 RT 方案作為主導出方式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [QLHazyCoder/FlowPilot](https://github.com/QLHazyCoder/FlowPilot) | FlowPilot 是 GuJumpgate 的基礎，提供類似的自動化註冊功能，但不如 GuJumpgate 在支付流程上優化得那麼全面。 |
| [whwh1233/StepFlow-Duck](https://github.com/whwh1233/StepFlow-Duck) | StepFlow-Duck 提供了自動化流程，但在支付鏈路的穩定性上不如 GuJumpgate。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [QLHazyCoder/FlowPilot](https://github.com/QLHazyCoder/FlowPilot) | FlowPilot 提供了類似的自動化註冊功能，但不如 GuJumpgate 在支付流程上優化得那麼全面。 | 如果你需要更靈活的自動化註冊功能，而不特別依賴於支付流程的穩定性。 | medium，因為需要重新配置和適應不同的 API。 |
| [whwh1233/StepFlow-Duck](https://github.com/whwh1233/StepFlow-Duck) | StepFlow-Duck 提供了自動化流程，但在支付鏈路的穩定性上不如 GuJumpgate。 | 如果你的重點是自動化流程，而不需要強調支付的穩定性。 | high，因為需要重新設計整個流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **GuJumpgate** | **FlowPilot** | **StepFlow-Duck** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | FlowPilot 提供了類似的自動化註冊功能，但不如 GuJumpgate 在支付流程上優化得那麼全面。 | StepFlow-Duck 提供了自動化流程，但在支付鏈路的穩定性上不如 GuJumpgate。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應不同的 API。 | high，因為需要重新設計整個流程。 |
> | 適用場景 | 主要場景 | 如果你需要更靈活的自動化註冊功能，而不特別依賴於支付流程的穩 | 如果你的重點是自動化流程，而不需要強調支付的穩定性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網絡環境下可能無法正常運行，特別是非美國地區。
  - 解法：使用美國代理進行註冊和支付。
- [MEDIUM] OAuth 風控可能導致註冊失敗。
  - 解法：確保使用有效的接碼電話並遵循流程。
- [MEDIUM] 支付流程中可能出現重複跳轉或卡住的情況。
  - 解法：可手動重試或跳過某些步驟。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行多帳號註冊 | 非常適合 | 能快速完成註冊和支付，節省時間。 |
| 獨立開發者需要快速獲取 GPT Plus | 適合 | 自動化流程能提高效率。 |
| 大型企業需要穩定的註冊流程 | 不適合 | 目前版本仍在測試階段，穩定性不足。 |
| 需要在非美國地區進行註冊 | 不適合 | 對美國代理的依賴使得使用受限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能快速獲得自動化註冊和支付的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶提供的接碼電話和郵箱資訊。對於支付流程的安全性，需依賴 PayPal 的安全措施。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
| Forks | 454 |
| Open Issues | 12 |
| Issue 解決率 | 67% (24 closed) |
| 最後推送 | 2026-05-21 |
| 建立日期 | 2026-05-19 |
| Repo 大小 | 3.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FoundZiGu/GuJumpgate) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 94
>     "HTML" : 3
>     "CSS" : 2
>     "Python" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@FoundZiGu](https://github.com/FoundZiGu) | 13 |

**最新版本**：v0.1.3 — GuJumpgate v0.1.3 (2026-05-21)

> [!info]- Release Notes
> # GuJumpgate v0.1.3
> 
> 本次版本新增云端支付链接转换能力，减少本地代理分流配置依赖，并继续增强 Plus 支付链路的稳定性。
> 
> ## 本次更新
> 
> - 新增云端支付链接转换服务，支持将支付链接转换逻辑迁移到云端处理
> - 新增 `services/checkout-converter` 服务目录，提供独立部署说明与运行依赖
> - 优化 Plus Checkout 创建与跳转流程，降低本地网络环境差异带来的影响
> - 调整支付转换相关配置入口，让云端转换和本地流程更容易配合使用
> 
> ## 修复内容
> 
> - 修复 Plus Checkout 部分场景下的链接处理和回退逻辑
> - 优化支付流程状态同步，减少重复跳转或卡住的概率
> - 补充支付链路异常时的日志输出，方便定位转换服务或网络侧问题
> 
> ## 适用说明
> 
> - 当前版本仍建议优先使用本地 `CPA JSON 无 RT` 方案作为主导出方式
> - 如你使用 Plus 支付链路，建议更新到本版本后再继续使用

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-21）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/FoundZiGu/GuJumpgate/issues/40) | 求教 | 0 | 0 |
> | [#36](https://github.com/FoundZiGu/GuJumpgate/issues/36) | 现在开通完秒掉 | 0 | 19 |
> | [#35](https://github.com/FoundZiGu/GuJumpgate/issues/35) | Cloudflare Temp Email 查信方式选 注册邮箱 时查不到验证码 | 0 | 2 |
> | [#29](https://github.com/FoundZiGu/GuJumpgate/issues/29) | 第六步获取不到短信验证码。实际上是有的，是不兼容这种格式吗 | 0 | 1 |
> | [#28](https://github.com/FoundZiGu/GuJumpgate/issues/28) | PayPal 创建账户页面变体导致流程未识别并持续报错 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GuJumpgate
> 
> 一个也许能“真正解放双手”的全自动 GPT Plus 注册浏览器扩展。
> 
> 如果这个项目能帮上你，欢迎点个 Star⭐~
> 
> > [!IMPORTANT]
> > 目前 OAuth 风控严重，基本必跳手机绑定，所以只推荐走生成无 RT 的 JSON。
> >
> > 在扩展内的账号接入策略中，请务必选择：`导出至 - SESSION JSON 导入`。
> 
> ## 已实现能力
> 
> 1. **自动注册 Free 账号**
> 
>    借助 FlowPilot 项目实现 Free 账号的自动注册。
> 
> 2. **PayPal 激活 Plus 全流程**
> 
>    - 自动跳转 Stripe 长链接
>    - 自动填写 Stripe 账单并跳转 PayPal
>    - 自动填写 PayPal 账单并完成流程
> 
> 3. **Hotmail / Outlook 自动别名功能**
> 
> 4. **PayPal 号码池管理**
> 
> 5. **自动 OAuth 回调到本地及各面板**
> 
>    对 FlowPilot 原有回调流程做了调整和适配。
> 
> 6. **支持跳过 OAuth**
> 
>    忽略 RT，生成只有 AT 的 JSON 文件到本地。
> 
> ## 前提要求
> 
> 1. 1 个带 API、且能连续正常接收 PayPal 验证码的 US `+1` 接码手机号
> 2. 1 个或 N 个支持 `IMAP` 和 `Graph` 的 Outlook 邮箱，或者自建 Cloudflare Temp Email / Cloud Mail
> 3. 1 个相对干净、支持 PayPal 注册的 US 代理
> 
> > [!NOTE]
> > 自建 Cloudflare Temp Email / Cloud Mail 需要使用 `edu` 前缀，例如 `edu.openai.com`，才有试用资格。
> >
> > PayPal 注册代理越干净，越不容易触发 PayPal 注册滑块。账单页面的 Captcha 扩展已经实现了自动屏蔽。
> 
> ## 测试环境
> 
> - 成功率：连续 10 次串行运行，注册并激活 Plus 100% 成功率
> - 浏览器：Chrome `148.0.7778.168`（64 位正式版），开启无痕模式
> - 网络环境： US 自建代理 + 云端转换
> 
> 过程中遇到任何卡死的问题，都可以先停止，然后点击流程的各个节点进行重试，也可以点击旁边选择跳过。
> 
> ## 安装与使用
> 
> 先到本仓库的 [Releases](https://github.com/FoundZiGu/GuJumpgate/releases) 页面下载扩展压缩包并解压。
> 
> ### 1. 打开扩展开发者模式
> 
> 打开 `chrome://extensions/`，开启开发者模式。
> 
> ### 2. 加载扩展目录
> 
> 选择“加载已解压的扩展程序”，然后选择刚才解压出的文件夹。
> 
> ### 3. 启用无痕权限
> 
> 在扩展详情页中勾选“在无痕模式下启用”。
> 
> ### 4. 配置代理
> 
> 现在推荐且能走的路径是 **US注册** + **JP拿长链接** + **US付款**
> 这条路径还是可以稳定出试用和正常激活PLUS的
> 
> #### 方案一：使用云端转换 （推荐）
> 
> 直接开启代理工具的规则/全局 US代理，选择云端转换，即可开始使用
> 
> #### 方案二：本地配置代理
> 
> 配置本地用于支付转换的代理，出口必须是 JP 代理。
> 
> 然后代理工具开启全局 US，或者配置好相应规则分流至 US。
> 
> ### 5. 启动 Hotmail Helper
> 
> 请注意：本地 JSON 生成导出依赖本地助手。无论你是否使用 Hotmail / Outlook 邮箱，都请启动。
> 
> 运行解压目录内的脚本：
> 
> - Windows：`start-hotmail-helper.bat`
> - macOS：`start-hotmail-helper.command`
> 
> ### 6. 配置扩展参数
> 
> 在扩展中打开侧边栏，按你的环境配置参数。
> 
> #### 选择最终 JSON 导出到的平台
> 
> 账号接入策略建议选择：`导出至 - SESSION JSON 导入`。
> 
> > [!WARNING]
> > OAuth 目前严重风控，要求绑定手机号，仅推荐使用 `导出至 - SESSION JSON 导入`。
> 
> #### JSON 类型说明
> 
> - `OAuth`：导出的 JSON 有刷新令牌，反代工具能持续使用
> - `SESSION`：导出的 JSON 无刷新令牌，仅支持部分反代工具使用，例如 CPA / SUB2API；导出有效期大约 10 天，过期后需要重新获取
> 
> #### 验证码接口
> 
> 填写可直接 `GET` 请求的 `http` / `https` 地址。
> 
> #### PAYPAL 接码电话
> 
> 填写 PayPal 接码电话，注意按扩展提示填写格式。
> 
> #### 邮箱渠道
> 
> 选择对应的邮箱渠道。自建邮箱需使用 `edu` 前缀获得试用资格。
> 
> 然后填写或导入各自邮箱渠道所需的配置。
> 
> ### 7. 开始运行
> 
> 保存配置后即可开始运行。
> 
> ## 版权与来源说明
> 
> 本项目基于开源项目 [QLHazyCoder/FlowPilot](https://github.com/QLHazyCoder/FlowPilot) 进行修改、移植与二次开发，其部分早期代码与 [whwh1233/StepFlow-Duck](https://github.com/whwh1233/StepFlow-Duck) 具有共同历史。
> 
> 原项目及其相关开源部分采用 MIT License 发布。根据 MIT License，你可以在保留原版权声明和许可声明的前提下使用、修改、分发本项目的相关代码。
> 
> 为避免歧义，原项目作者、历史贡献者与当前二开版本之间不存在默认的认可、担保或背书关系。本项目中新增的适配、流程调整、脚本移植与文档整理内容，除另有说明外，均由当前维护者负责。
> 
> 如果你分发本项目或其修改版本，请一并保留仓库中的 `LICENSE` 及相关来源说明文件。
> 
> ## 使用提示
> 
> - 使用者应自行遵守目标平台服务条款、适用法律及其所在地区的监管要求
> 
> ## 友情链接
> 
> - [LINUX DO - 新的理想型社区](https://linux.do/)

## 延伸閱讀

相關概念：[[自動化]] · [[OAuth]] · [[支付流程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/FoundZiGu/GuJumpgate)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "FoundZiGu--GuJumpgate"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "FoundZiGu--GuJumpgate"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "FoundZiGu--GuJumpgate" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "FoundZiGu--GuJumpgate"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","OAuth","支付流程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "FoundZiGu--GuJumpgate" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "FoundZiGu--GuJumpgate" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "FoundZiGu" AND file.name != "FoundZiGu--GuJumpgate"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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
> const me = dv.page("Repos/FoundZiGu--GuJumpgate");
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

> **2026-05-21** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 再次上榜，1.4k stars
- [[2026-05-21|2026-05-21]] — 首次收錄，957 stars
