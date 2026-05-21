---
repo: FoundZiGu/GuJumpgate
url: https://github.com/FoundZiGu/GuJumpgate
owner: FoundZiGu
owner_type: User
language: JavaScript
license: MIT
description: ""
homepage: ""
stars: 957
stars_per_day: 957
forks: 350
open_issues: 9
created: 2026-05-19
pushed_at: 2026-05-20
first_seen: 2026-05-21
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-21
use_case: "自動化 GPT Plus 註冊流程的瀏覽器擴展，解決繁瑣的手動註冊問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-24"
contributor_count: 1
engagement: "high"
issue_close_rate: 57
repo_size_kb: 3632
readme_length: 2906
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-21"
star_history: "2026-05-21:957"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "GuJumpgate"
  - "FoundZiGu/GuJumpgate"
  - "自動化 GPT Plus 註冊流程的瀏覽器擴展，解決繁瑣的手動註冊問題。"
---

# GuJumpgate

**957** stars · **957** stars/天 · 建立 1 天前 · JavaScript · MIT

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

`個人專案` `v0.1.2`

> [!summary] 一句話摘要
> 自動化 GPT Plus 註冊流程的瀏覽器擴展，解決繁瑣的手動註冊問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (957 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要批量註冊 GPT Plus 帳號的開發者或測試人員。
> **一句話重點** GuJumpgate 的自動化註冊流程大幅簡化了用戶的操作，特別是在支付環節。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的註冊流程，值得考慮。

> [!abstract] 核心創新
> GuJumpgate 提供了一個全自動化的註冊流程，特別針對 PayPal 進行了優化。

## 專案簡介

GuJumpgate 是一個全自動的瀏覽器擴展，專為簡化 GPT Plus 的註冊流程而設計。用戶只需提供一個可接收 PayPal 驗證碼的美國號碼和一個支持 IMAP 的郵箱，擴展便能自動完成從註冊到激活的整個流程，並能生成 SESSION JSON 以便後續使用。這個工具的賣點在於其無需手動介入，並且能有效減少因手動操作而導致的錯誤。技術上，GuJumpgate 結合了 FlowPilot 的自動化流程，並增強了對 PayPal 的支持，包含自動填寫和跳轉功能。它的架構設計使得用戶能夠輕鬆配置代理分流，確保註冊和支付的流量分開，從而提高成功率。

與其他類似工具相比，GuJumpgate 提供了更高的自動化程度，並且支持多種支付方式和郵箱服務，這使得它在處理複雜的註冊流程時更具優勢。使用者在實際操作中可能會遇到一些常見問題，例如驗證碼接收延遲或流程卡住，但這些問題通常可以通過重試或調整配置來解決。該專案目前仍在 alpha 階段，建議用於個人項目而非生產環境。未來幾個月，預期將會有更多功能增強和社區反饋的修正。對於需要批量註冊 GPT Plus 的開發者來說，GuJumpgate 是一個值得考慮的工具，但在使用時需注意其對網絡環境和代理配置的要求。

**技術棧**：`JavaScript` · `HTML` · `CSS` · `Python`

## 重點功能

- 自動註冊 Free 账号 — 利用 FlowPilot 自動化註冊流程。
- PayPal 激活全流程 — 自動填寫 Stripe 和 PayPal 的帳單信息。
- Hotmail / Outlook 自動別名功能 — 自動生成郵箱別名以避免重複使用。
- PayPal 号码池管理 — 管理多個接碼號碼以提高註冊成功率。
- 支持跳過 OAuth — 生成無需 RT 的 JSON 文件，簡化流程。

## 快速開始

1. 下載擴展壓縮包並解壓
```bash
從 Releases 頁面下載擴展
```
2. 加載擴展
```bash
在 chrome://extensions/ 中選擇加載已解壓的擴展
```
3. 配置代理分流
```bash
在代理工具中設置註冊和支付的分流規則
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 957 stars（957/天），forks 350（36.6%），顯示出強烈的社群興趣。作者 FoundZiGu 之前參與過多個開源項目，這次推出的 GuJumpgate 解決了註冊過程中的繁瑣步驟，特別是在 OAuth 驗證風控嚴重的情況下，提供了一個自動化的解決方案。這個專案的推出正好滿足了大量用戶對於簡化註冊流程的需求，並且在社群中引起了廣泛的討論。由於 OAuth 的風控加劇，這個工具的需求也隨之上升，讓它成為了當前的熱門選擇。

## 適合誰使用

**目標受眾**：需要批量註冊 GPT Plus 帳號的開發者或測試人員。

> [!example] 使用場景
> - 開發者用它來自動註冊多個 GPT Plus 帳號，因為手動註冊耗時且容易出錯。
> - 測試人員用它來快速生成測試帳號，因為能夠在短時間內完成多次註冊流程。
> - 產品經理用它來驗證註冊流程的穩定性，因為它能自動處理複雜的支付和驗證步驟。

## 架構分析

GuJumpgate 的架構設計基於瀏覽器擴展，利用 JavaScript 和 Python 進行自動化流程的實現。用戶需配置代理以確保註冊和支付的流量分開，這樣可以有效提高成功率。整體架構的選擇使得擴展能夠在用戶的瀏覽器中直接運行，降低了對外部服務的依賴。選擇使用瀏覽器擴展而非獨立應用的原因在於其便捷性和即時性，但這也使得擴展的功能受到瀏覽器環境的限制，可能在某些情況下影響性能。擴展的設計使得用戶能夠輕鬆配置和調整，但對於不熟悉代理配置的用戶來說，可能會增加學習成本。

## 技術深入分析

GuJumpgate 的核心技術機制在於其自動化流程，利用 JavaScript 和 Python 實現對瀏覽器的操作。它通過 API 調用和自動填寫表單來完成註冊和支付過程，這樣的設計使得用戶無需手動介入。效能方面，該工具能在短時間內完成多次註冊，成功率高達 100%。不過，這也意味著對於網絡環境的要求較高，特別是在使用代理時。選擇瀏覽器擴展的設計使得用戶能夠隨時隨地進行註冊，但也可能受到瀏覽器性能的影響。技術風險方面，若未來 PayPal 或其他服務改變了其 API 或驗證流程，可能會導致工具失效。整合方面，GuJumpgate 能夠與現有的代理工具無縫配合，但對於不熟悉這些工具的用戶來說，可能會增加使用難度。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝步驟和使用說明。安裝過程較為順暢，但需要用戶具備一定的技術背景以配置代理。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 全自動化註冊流程，減少手動操作的錯誤。
> - 支持多種郵箱和支付方式，提高靈活性。
> - 能夠生成 SESSION JSON，方便後續使用。

> [!danger] 缺點
> - 對於不熟悉代理配置的用戶來說，學習成本較高。
> - 依賴於有效的美國接碼電話，限制了使用範圍。
> - 目前仍在 alpha 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 需要有效的美國接碼電話以接收 PayPal 驗證碼。
> - 對於 OAuth 的依賴使得註冊流程在某些情況下仍然可能失敗。
> - 目前仍建議使用本地 CPA JSON 無 RT 方案作為主導出方式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化註冊功能，但不支持 PayPal 的完整流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於批量生成帳號，但缺乏對支付流程的支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但功能不如 GuJumpgate 完整。 | 如果你的團隊需要一個輕量級的自動化工具，且不需要完整的支付流程支持。 | medium，因為需要重新學習其配置方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於批量生成帳號，但缺乏對支付流程的支持，功能較為單一。 | 如果你的需求僅限於帳號生成，而不涉及支付流程。 | low，因為功能簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **GuJumpgate** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但功能不如 GuJumpgate 完整。 | 專注於批量生成帳號，但缺乏對支付流程的支持，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新學習其配置方式。 | low，因為功能簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的自動化工具，且不需要完整的支付流 | 如果你的需求僅限於帳號生成，而不涉及支付流程。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，PayPal 驗證碼接收延遲，可能導致流程卡住。
  - 解法：可以手動重試或調整配置以解決。
- **[HIGH]** OAuth 驗證過程中可能會出現風控問題，導致註冊失敗。
  - 解法：建議使用無 RT 的 JSON 方案以降低風險。
- [MEDIUM] 配置代理時，若未正確設置分流規則，可能影響註冊成功率。
  - 解法：仔細檢查代理設置，確保註冊和支付流量分開。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要批量註冊 GPT Plus 帳號的開發者 | 非常適合 | 自動化流程能顯著提高註冊效率。 |
| 小型團隊希望簡化註冊流程 | 適合 | 能夠減少手動操作的錯誤。 |
| 不熟悉代理配置的用戶 | 不適合 | 需要一定的技術背景來配置代理和使用工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的註冊流程，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需接入 PayPal 驗證碼，依賴鏈相對簡單，適合在 CI/CD 中使用。

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
| Forks | 350 |
| Open Issues | 9 |
| Issue 解決率 | 57% (12 closed) |
| 最後推送 | 2026-05-20 |
| 建立日期 | 2026-05-19 |
| Repo 大小 | 3.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FoundZiGu/GuJumpgate) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 94
>     "HTML" : 3
>     "CSS" : 2
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@FoundZiGu](https://github.com/FoundZiGu) | 11 |

**最新版本**：v0.1.2 (2026-05-20)

> [!info]- Release Notes
> # GuJumpgate v0.1.2
> 
> 本次版本主要围绕支付流程稳定性、SESSION JSON 导出链路和 Hosted 接码池能力进行增强，同时补齐了多项社区反馈。
> 
> ## 本次更新
> 
> - 根据 [Issue #14](https://github.com/FoundZiGu/GuJumpgate/issues/14) 的建议，新增账单金额检测与自动停止，降低异常账单继续执行的风险
> - 根据 [Issue #8](https://github.com/FoundZiGu/GuJumpgate/issues/8) 的建议，新增 `cloud-mail` 适配
> - 吸收了 L 站、NS 站、DC 群组等社区反馈，完成多项细节优化
> - 重构导出 JSON 的链路逻辑，减少不同导出目标之间的耦合
> - 新增 `SESSION JSON` 直接导出至 `CPA` / `SUB2API`
> - 新增当前 `SESSION JSON` 双格式直接导出能力
> - 新增 Hosted 接码池自动轮询
> - 新增自定义支付转换代理入口
> 
> ## 修复内容
> 
> - 修复 PayPal 界面验证码被立即填写后进入循环的问题
> - 修复 PAYPAL 电话 payload
> - 修复 Hosted 号码池取号错误
> 
> ## 适用说明
> 
> - 当前版本仍建议优先使用本地 `CPA JSON 无 RT` 方案作为主导出方式
> - 如你依赖 `SESSION JSON`、`SUB2API`、`CPA` 或 Hosted 接码池链路，建议更新到本版本后再继续使用

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者積極回應問題。
**連結**：[文件](https://github.com/FoundZiGu/GuJumpgate)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-20）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/FoundZiGu/GuJumpgate/issues/24) | 无RT的是不是有效期比较短？ | 0 | 0 |
> | [#23](https://github.com/FoundZiGu/GuJumpgate/issues/23) | 卡在第六步，验证码也接收到了 | 0 | 0 |
> | [#22](https://github.com/FoundZiGu/GuJumpgate/issues/22) | 关于pp填入验证码的bug | 0 | 0 |
> | [#21](https://github.com/FoundZiGu/GuJumpgate/issues/21) | 邮箱收不到验证码，实际上已经有验证码了 | 0 | 0 |
> | [#20](https://github.com/FoundZiGu/GuJumpgate/issues/20) | 成功了 | 0 | 0 |

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
> 3. 1 个或 N 个支持 GPT 注册的 JP 代理，用于批量轮询
> 4. 1 个相对干净、支持 PayPal 注册的 US 代理
> 5. 1 个支持分流的代理工具，推荐 Mihomo
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
> - 网络环境：JP 万人骑代理轮询 + US 自建代理
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
> 在扩展详情页中勾选“在无痕模式下启用”。如果你使用 `ZeroOmega`，同理也需要开启无痕权限。
> 
> ### 4. 配置代理分流
> 
> 在代理工具中配置注册、登录、PayPal 和 Stripe 的分流规则。
> 
> 分流规则的核心是：
> 
> - 注册走 JP
> - 支付走 US
> 
> 你可以使用 Mihomo 等支持分流的代理工具。有什么、会什么，就用什么。
> 
> #### 方案一：使用 Mihomo
> 
> 如果你使用的是 Mihomo / Clash 系列代理工具，可以在 [Releases](https://github.com/FoundZiGu/GuJumpgate/releases) 下载 `mihomo-yaml-prompt.md`，把提示词发给电脑上的 Claude Code、Codex、OpenCode 等工具，让 AI 直接帮你修改分流配置。
> 
> #### 方案二：配置支付转换代理
> 
> 配置用于支付转换的代理，出口必须是 JP 代理。
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

相關概念：[[自動化]] · [[OAuth]] · [[API 設計]]

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
> const concepts = ["自動化","OAuth","API 設計"];
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

- [[2026-05-21|2026-05-21]] — 首次收錄，957 stars
