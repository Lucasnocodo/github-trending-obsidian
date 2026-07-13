---
repo: Shpigford/knockoff
url: https://github.com/Shpigford/knockoff
owner: Shpigford
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Chrome extension that filters pseudo-brand junk out of Amazon. Buy from real, established brands."
homepage: "https://knockoff.co"
stars: 1827
stars_per_day: 305
forks: 59
open_issues: 7
created: 2026-07-06
pushed_at: 2026-07-13
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "瀏覽器擴展"
release_tag: "v0.5.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "過濾亞馬遜上的假品牌商品，幫助用戶購買真正的知名品牌。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 78
repo_size_kb: 2502
readme_length: 7708
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1078,2026-07-08:1085,2026-07-09:1427,2026-07-09:1430,2026-07-10:1582,2026-07-10:1583,2026-07-11:1711,2026-07-11:1714,2026-07-12:1779,2026-07-12:1779,2026-07-13:1827,2026-07-13:1827"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/amazon"
  - "topic/browser_extension"
  - "topic/chrome_extension"
aliases:
  - "knockoff"
  - "Shpigford/knockoff"
  - "過濾亞馬遜上的假品牌商品，幫助用戶購買真正的知名品牌。"
---

# knockoff

**1.8k** stars · **305** stars/天 · 建立 6 天前 · JavaScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Shpigford--knockoff");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.1` `easy-install`

`amazon` `browser-extension` `chrome-extension`

> [!summary] 一句話摘要
> 過濾亞馬遜上的假品牌商品，幫助用戶購買真正的知名品牌。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (305 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在亞馬遜上購物但不想被假品牌干擾的消費者。
> **一句話重點** Knockoff 不僅是一個過濾工具，更是消費者對抗假品牌的武器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Shpigford--knockoff");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "瀏覽器擴展" && p.file.name !== "Shpigford--knockoff" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 瀏覽器擴展 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到有效的品牌過濾效果，值得採用。

> [!abstract] 核心創新
> Knockoff 結合社群允許清單與啟發式評分系統，提供更準確的假品牌識別。

## 專案簡介

Knockoff 是一個 Chrome 擴展，專門用來過濾亞馬遜上的假品牌商品，讓用戶能夠專注於真正的知名品牌。當用戶在亞馬遜上搜索商品時，Knockoff 會通過一系列的檢查來判斷品牌的真實性，並根據用戶的允許清單和阻止清單進行過濾。這個過程完全在用戶的瀏覽器中進行，沒有任何伺服器請求，確保了用戶的隱私。用戶可以選擇不同的過濾級別，例如「放鬆」、「標準」或「嚴格」，以控制過濾的嚴格程度。這樣的設計不僅提高了使用的靈活性，還能適應亞馬遜的頁面變化，確保過濾功能持續有效。技術上，Knockoff 使用 JavaScript 和 CSS 實現，並依賴於一個社群驅動的品牌清單，這使得它能夠不斷更新和改進。

與其他類似工具相比，Knockoff 的優勢在於它的社群允許清單和基於名稱的啟發式評分系統，這使得它能夠更準確地識別假品牌。使用者在使用過程中可能會遇到一些限制，例如對於混合大小寫的名稱過濾不夠精確，但這些問題可以通過社群貢獻來改善。這個專案目前處於活躍開發階段，並且有著良好的社群支持和回應速度。對於需要在亞馬遜上購物的用戶，Knockoff 提供了一個有效的解決方案，特別是對於那些希望避免假品牌的消費者來說。未來，這個專案可能會進一步擴展其功能，增加更多的過濾選項和用戶自定義設置。

**技術棧**：`JavaScript` · `CSS` · `HTML`

## 重點功能

- 品牌過濾 — 根據用戶的允許清單和阻止清單過濾假品牌商品。
- 多級過濾 — 提供放鬆、標準和嚴格三種過濾級別，滿足不同需求。
- 即時更新 — 能夠適應亞馬遜頁面變化，確保過濾功能持續有效。
- 社群驅動 — 使用社群貢獻的品牌清單，保持品牌數據的最新性。
- 報告功能 — 用戶可以一鍵報告錯誤分類的品牌，幫助改善過濾準確性。

## 快速開始

1. 從 Chrome 網頁商店安裝擴展
```bash
[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)
```
2. 開啟開發者模式並加載未打包擴展
```bash
在 chrome://extensions 中選擇 Load unpacked，然後選擇 repo 資料夾
```
3. 在 Safari 中使用擴展
```bash
打開 safari/Knockoff/Knockoff.xcodeproj，運行 Knockoff scheme，然後在 Safari 設定中啟用擴展
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1827 stars（305/天），forks 59（3.2%），這顯示出用戶對於過濾假品牌的需求強烈。作者 Shpigford 之前有開發其他擴展，這次專注於解決亞馬遜上假品牌的問題，填補了市場上對於品牌過濾的需求。近期的媒體報導也引起了廣泛關注，進一步推動了用戶的使用意願。這個工具的出現正好契合了消費者對於購物品質的重視，尤其是在網路購物日益普及的背景下。forks/stars 比率顯示出用戶對於這個工具的實際修改和使用意願較高，意味著這是一個值得關注的專案。

## 適合誰使用

**目標受眾**：希望在亞馬遜上購物但不想被假品牌干擾的消費者。

> [!example] 使用場景
> - 網路購物者用它來過濾亞馬遜上的假品牌商品，因為這樣可以確保購買到真正的知名品牌，避免購買劣質商品。
> - 品牌經理用它來檢查競爭對手的品牌曝光情況，因為能快速識別假品牌有助於制定市場策略。
> - 消費者評論者用它來撰寫更具針對性的產品評論，因為能夠專注於真實品牌的產品，提升評論的可信度。

## 架構分析

Knockoff 的架構是基於瀏覽器擴展的內容腳本，這樣的設計使得所有過濾操作都在用戶的本地環境中進行，避免了伺服器請求和用戶數據的外洩。資料流從用戶的允許清單和阻止清單開始，然後通過一系列的品牌檢查進行過濾。這種設計的好處是用戶隱私得到保護，且過濾速度快，因為不需要網路請求。選擇使用 JavaScript 和 CSS 使得開發和維護變得簡單，並且可以快速適應亞馬遜的頁面變化。這樣的架構雖然在某些情況下可能會遇到性能瓶頸，但目前的設計已經能夠有效處理大部分的商品列表。

## 技術深入分析

Knockoff 的核心技術機制是基於 JavaScript 的內容腳本，這使得所有過濾操作都在用戶的瀏覽器中進行，避免了伺服器請求和用戶數據的外洩。它使用了一個多層次的品牌檢查流程，從用戶的允許清單和阻止清單開始，然後通過一個社群驅動的品牌清單進行過濾，最後使用名稱啟發式評分系統來識別潛在的假品牌。這樣的設計不僅提高了過濾的準確性，還能快速適應亞馬遜的頁面變化。效能方面，Knockoff 能夠實時處理大量的商品列表，因為所有操作都是在本地進行的，這意味著用戶不會感受到延遲。

設計上選擇 JavaScript 和 CSS 使得開發和維護變得簡單，並且可以快速適應亞馬遜的頁面變化。這樣的架構雖然在某些情況下可能會遇到性能瓶頸，但目前的設計已經能夠有效處理大部分的商品列表。技術風險方面，隨著亞馬遜頁面結構的變化，可能需要不斷更新過濾邏輯，以保持過濾的準確性。整合方面，Knockoff 可以輕鬆與其他瀏覽器擴展共存，並且不會對現有的工作流造成干擾。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝指導，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Safari 的額外步驟。文件中有提供基本的使用範例，對於初學者友好。

## 優缺點分析

> [!success] 優點
> - 用戶隱私保護良好，無需伺服器請求。
> - 靈活的過濾級別設置，滿足不同需求。
> - 社群驅動的品牌清單，保持數據的更新性。

> [!danger] 缺點
> - 對於某些假品牌的識別可能不夠精確。
> - 某些特殊商品展示格式尚未支持。
> - 需要用戶主動報告錯誤分類，依賴社群參與。

> [!warning] 注意事項
> - 對於混合大小寫的名稱過濾不夠精確，可能漏掉某些假品牌。
> - 賣家國家來源查詢未實現，無法顯示賣家的具體位置。
> - 某些特殊的商品展示格式（如輪播）尚未被掃描。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理生成，而 Knockoff 專注於品牌過濾，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更廣泛的商品過濾功能，但不專注於品牌識別，適合需要多樣化過濾的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理生成，Knockoff 專注於品牌過濾，適用場景不同。 | 如果你的需求是自動化生成代理，而非品牌過濾，則可以選擇這個工具。 | medium，因為需要重新設計工作流以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的商品過濾功能，但不專注於品牌識別，適合需要多樣化過濾的用戶。 | 如果你需要針對各種商品進行過濾，而不僅僅是品牌，則可以考慮這個工具。 | low，因為功能上有一定的相似性，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **knockoff** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化代理生成，Knockoff 專注於品牌過濾，適用場景不同。 | 提供更廣泛的商品過濾功能，但不專注於品牌識別，適合需要多樣化過濾的用戶。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流以適應新的工具。 | low，因為功能上有一定的相似性，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求是自動化生成代理，而非品牌過濾，則可以選擇這個工 | 如果你需要針對各種商品進行過濾，而不僅僅是品牌，則可以考慮這 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於某些假品牌的識別可能不夠精確，特別是混合大小寫的名稱。
  - 解法：使用嚴格模式來提高過濾準確性。
- [low] 某些特殊商品展示格式（如輪播）尚未被掃描，可能導致漏掉假品牌。
  - 解法：定期檢查更新，等待未來版本的支持。
- [MEDIUM] 需要用戶主動報告錯誤分類，依賴社群參與。
  - 解法：鼓勵用戶參與報告，以提高過濾準確性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 經常在亞馬遜上購物的消費者 | 非常適合 | 能有效過濾假品牌，提升購物體驗。 |
| 對品牌有高要求的專業人士 | 適合 | 可以確保購買到真正的知名品牌。 |
| 不常使用亞馬遜的偶爾購物者 | 普通 | 可能不需要這麼嚴格的品牌過濾。 |
| 需要在亞馬遜上進行大量商品比較的商業用戶 | 不適合 | 可能需要更全面的商品過濾功能，而不僅僅是品牌。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到有效的品牌過濾效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取用戶的敏感資料，使用過程中不會對用戶的隱私造成威脅。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Knockoff 最常與 Chrome 和 Firefox 瀏覽器搭配使用，作為購物過程中的品牌過濾工具。用戶可以在亞馬遜上搜索商品時，自動過濾假品牌，提升購物體驗。在一個使用 Chrome 的購物流程中，用戶只需安裝 Knockoff 擴展，便可在搜索結果中看到過濾後的商品。這個工具與主流瀏覽器的整合良好，並且不會影響其他擴展的功能。整合的摩擦點主要在於 Safari 的安裝過程較為繁瑣，需要額外的步驟來啟用擴展。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Knockoff 出現之前，消費者在亞馬遜上面對大量假品牌商品，常常無法辨別真偽。傳統的品牌過濾工具多依賴於用戶手動篩選，效率低下。隨著網路購物的普及，對於品牌過濾的需求日益增加，這促使了 Knockoff 的誕生。

技術上，瀏覽器擴展的發展使得這種即時過濾成為可能，未來可能會有更多類似工具出現，進一步提升消費者的購物體驗。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解瀏覽器擴展開發

> [!tip] 導入策略
> 第一週：在個人購物中試用。第二週：在小型團隊內部分享使用經驗。第三週：收集反饋並進行調整。第四週：擴大到其他團隊成員使用。

**成功指標**：過濾假品牌商品的成功率提升 80%。

> [!warning] 退出計畫
> 如果要退出這個工具，所有設定都存在 JSON 格式，可以輕鬆轉移到其他過濾工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Shpigford--knockoff");
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
> const me = dv.page("Repos/Shpigford--knockoff");
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
| Forks | 59 |
| Open Issues | 7 |
| Issue 解決率 | 78% (25 closed) |
| 最後推送 | 2026-07-13 |
| 建立日期 | 2026-07-06 |
| 官方網站 | [Link](https://knockoff.co) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Shpigford/knockoff) |
| Topics | `amazon` `browser-extension` `chrome-extension` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 72
>     "CSS" : 13
>     "HTML" : 7
>     "Shell" : 4
>     "Ruby" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Shpigford](https://github.com/Shpigford) | 77 |
> | [@pseudovidecoder](https://github.com/pseudovidecoder) | 5 |
> | [@AlexSimmons](https://github.com/AlexSimmons) | 1 |
> | [@kurtmckee](https://github.com/kurtmckee) | 1 |
> | [@lucaskumara](https://github.com/lucaskumara) | 1 |

**最新版本**：v0.5.1 (2026-07-12)

> [!info]- Release Notes
> - Fixed: real brands are no longer dimmed on Amazon's newer search layout, where the brand sits on its own line above the product title (fixes Sony, SmallRig, and similar "[brand] [product]" searches).
> - Improved: Knockoff can now adapt to Amazon layout changes without waiting for a store update, so filtering keeps working when Amazon reshuffles its page structure.
> - Changed: Knockoff's website has moved to knockoff.co.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://knockoff.co)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-11 ~ 2026-07-13）
> **活躍天數** 3 天 · **最新 commit** Update license copyright to Knockoff Data LLC (#107)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/Shpigford/knockoff/issues/21) | Userscript | 9 | 2 |
> | [#17](https://github.com/Shpigford/knockoff/issues/17) | Searching for prolific trademark filings within the USPTO | 3 | 1 |
> | [#65](https://github.com/Shpigford/knockoff/issues/65) | Accessibility: Need a preference option for colours | 2 | 1 |
> | [#102](https://github.com/Shpigford/knockoff/issues/102) | Add brand tier badges alongside verification status | 0 | 1 |
> | [#94](https://github.com/Shpigford/knockoff/issues/94) | Show seller country in listing views and distinguish Amazon  | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Knockoff
> 
> **A browser extension that filters pseudo-brand junk out of Amazon.** Buy from
> real, established brands, even when that means paying more.
> 
> Amazon is flooded with trademark-squat "brands" (SZHLUX, HORUSDY, LATTOOK,
> DOZAWA...): random strings registered at the USPTO purely to unlock Amazon
> Brand Registry, selling commodity goods with no company, no warranty, and no
> reputation behind them. Knockoff detects those listings and hides, dims, or
> labels them, right in the search results.
> 
> ## Install
> 
> **[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)** from the Chrome Web Store, or
> **[Add to Firefox](https://addons.mozilla.org/en-US/firefox/addon/knockoff-amazon-brand-filter/)** from Firefox Add-ons.
> 
> Or load it unpacked for development:
> 
> 1. Clone this repo
> 2. Open `chrome://extensions`
> 3. Turn on **Developer mode** (top right)
> 4. Click **Load unpacked** and select the repo folder
> 
> Works on every Amazon marketplace.
> 
> ### Safari
> 
> Safari requires the extension to be wrapped in a native app. Open
> [`safari/Knockoff/Knockoff.xcodeproj`](safari/Knockoff) in Xcode, run the
> **Knockoff** scheme, then enable Knockoff in Safari → Settings →
> Extensions. For unsigned local builds, first check "Allow unsigned
> extensions" in Safari's Develop menu.
> 
> The Xcode project carries its own copy of the extension files; after
> editing the extension, run [`scripts/sync-safari.sh`](scripts/sync-safari.sh)
> to update it before rebuilding.
> 
> ## Press
> 
> Some of the coverage since launch:
> 
> - [Fast Company](https://www.fastcompany.com/91570721/amazon-shopping-slop-viral-new-tool-filters-out-knockoff-brands)
> - [Gizmodo](https://gizmodo.com/new-browser-extension-helps-you-dodge-amazons-sea-of-knock-off-products-2000783054)
> - [404 Media](https://www.404media.co/knockoff-browser-extension-hides-sketchy-brands-on-amazon/)
> - [PC Gamer](https://www.pcgamer.com/hardware/this-chrome-extension-hides-knockoff-brands-on-amazon-sorry-to-brands-like-wnpethome-eheyciga-yxy/)
> - [Yahoo](https://tech.yahoo.com/apps/articles/chrome-extension-removes-unknown-brands-162002361.html)
> - [Lifehacker](https://lifehacker.com/tech/knockoff-browser-extension-hides-shady-items-on-amazon)
> 
> ## How it works
> 
> Everything runs locally in a content script. No accounts, no tracking, no
> server round-trips on the shopping path. Each product tile's brand is
> resolved through this pipeline (first match wins):
> 
> | # | Check | Verdict |
> |---|-------|---------|
> | 1 | Your allowlist | `allowed`, never filtered |
> | 2 | Your blocklist | `blocked`, always filtered |
> | 3 | Seed list of notorious pseudo-brands ([`data/flagged-brands.js`](data/flagged-brands.js)) | `flagged` |
> | 4 | Established Chinese-owned brands ([`data/chinese-major.js`](data/chinese-major.js)) | `known`, or `flagged` if you enable that setting |
> | 5 | ~5,000 established brands ([`data/known-brands.js`](data/known-brands.js) + the community allowlist in [`data/community-brands.js`](data/community-brands.js), refreshed daily from `api.knockoff.co/brands`) | `known` |
> | 6 | Name heuristics (see below) | `flagged` / `suspect` / `unknown` |
> | - | No brand at the front of the title at all | `unbranded` |
> 
> ### Name heuristics
> 
> Unknown brands are scored on the linguistic signature of trademark-squat
> names: ALL-CAPS 5–9 character strings, vanishing vowel ratios,
> unpronounceable consonant runs, un-English letter pairs, non-Latin
> characters, random iNternal caPitalization. High scores are `flagged`,
> mid scores `suspect`. The known-brands list always vetoes the heuristics:
> plenty of real brands (ASICS, RYOBI, HOKA) would otherwise look suspicious.
> Scoring lives in [`src/detector.js`](src/detector.js) and is deliberately
> readable, and tuning it is a great first contribution.
> 
> ### Filter levels
> 
> | Level | Filters |
> |-------|---------|
> | **Relaxed** | Known pseudo-brands + your blocklist |
> | **Standard** (default) | + suspect-looking names + unbranded listings |
> | **Strict** | + anything not on a known-brands list (allowlist-only) |
> 
> ### Actions
> 
> Filtered items can be **hidden** (with a floating pill showing the count and
> a one-click reveal), **dimmed** (fade + desaturate, restore on hover), or
> just **labeled**. Every badge is clickable: trust the brand, block it, show
> the item once, or report a misclassification.
> 
> Product detail pages get a verdict chip next to the brand byline. The page
> is never hidden out from under you.
> 
> ## Reporting misclassifications
> 
> The badge menu has one-click reporting ("this is junk" / "this is a real
> brand"). Reports go to a tiny Cloudflare Worker backed by D1
> ([`report-worker/`](report-worker/)) and are reviewed by hand to improve the
> bundled lists. No PII: the payload is brand, verdict, ASIN, marketplace, and
> extension version; reporter IPs are stored only as salted hashes for rate
> limiting. If no endpoint is configured the extension falls back to opening a
> prefilled GitHub issue.
> 
> Deploying your own endpoint is four commands; see the header of
> [`report-worker/worker.js`](report-worker/worker.js).
> 
> ## Contributing
> 
> The easiest, highest-value contributions are brand list fixes; see
> [CONTRIBUTING.md](CONTRIBUTING.md). There is no build step; the extension is
> plain JavaScript, loadable directly from the repo.
> 
> ```
> manifest.json             MV3 manifest
> data/known-brands.js      curated established brands (edit this one!)
> data/chinese-major.js     established Chinese-owned brands (toggleable)
> data/flagged-brands.js    seed blocklist of notorious pseudo-brands
> data/generic-words.js     common title words, for unbranded detection
> data/community-brands.js  bundled community allowlist snapshot (generated, don't edit)
> src/detector.js           detection engine (pure logic, no DOM)
> src/content.js            page scanning, badges, actions, in-page control panel
> src/background.js         toolbar button → panel toggle (or options page)
> options/                  settings page (rules, allow/blocklist)
> report-worker/            Cloudflare Worker: reports, curation, brand-list API
> safari/                   Xcode wrapper app for Safari (macOS)
> store-assets/             Chrome Web Store images + the HTML frames that render them
> scripts/                  maintenance scripts
> ```
> 
> ## Known limitations
> 
> - **Mixed-case gibberish** ("Geinxurn", "Mulwark") scores below the suspect
>   threshold at standard level; Strict mode catches it. A bundled character
>   bigram model would fix this properly; PRs welcome.
> - Seller **country-of-origin lookup** (fetching seller profile addresses) is
>   deliberately not implemented: it costs two rate-limited page fetches per
>   product and Amazon 503s aggressive scrapers. The name-based approach needs
>   zero network calls.
> - Carousels and a few exotic tile layouts aren't scanned yet
>   (`TILE_SELECTORS` in `src/content.js` is the extension point).
> - Non-English stores are best-effort. Brand lists and the product-page chip work
>   everywhere, but the name heuristics are English-tuned, so an unlisted local
>   brand can slip through. Non-Latin listings (Japanese, Arabic) are skipped rather
>   than mis-filtered, so nothing breaks on any marketplace.
> 
> ## Prior art
> 
> Research that shaped this design: [AmazonBrandFilter](https://github.com/chris-mosley/AmazonBrandFilter)
> (allowlist approach; its MIT-licensed community list seeded Knockoff's own),
> [SoldBy](https://github.com/tadwohlrapp/soldby)
> (seller-country lookup and its rate-limit lessons), and The Markup's
> [Amazon Brand Detector](https://github.com/the-markup/tool-amazon-brand-detector).
> Knockoff's contribution is combining a community allowlist with a
> heuristic scorer, with the allowlist as veto.
> 
> ## License
> 
> [FSL-1.1-MIT](LICENSE). Code converts to MIT after two years.

## 延伸閱讀

相關概念：[[自動化測試]] · [[瀏覽器擴展]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[LinXiaoTao--FuckClaude|LinXiaoTao/FuckClaude]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/Shpigford/knockoff) · [官方網站](https://knockoff.co)

## 相關收錄

> [!note]- 直接競品（同子分類：瀏覽器擴展）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "瀏覽器擴展" AND file.name != "Shpigford--knockoff"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Shpigford--knockoff"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Shpigford--knockoff" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "Shpigford--knockoff"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","瀏覽器擴展","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Shpigford--knockoff" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Shpigford--knockoff");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Shpigford--knockoff" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Shpigford" AND file.name != "Shpigford--knockoff"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Shpigford--knockoff");
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
> const me = dv.page("Repos/Shpigford--knockoff");
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
> const me = dv.page("Repos/Shpigford--knockoff");
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
> const me = dv.page("Repos/Shpigford--knockoff");
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
> const me = dv.page("Repos/Shpigford--knockoff");
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

> **2026-07-08** — 首次收錄
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

- [[2026-07-13|2026-07-13]] — 再次上榜，1.8k stars
- [[2026-07-12|2026-07-12]] — 再次上榜，1.8k stars
- [[2026-07-11|2026-07-11]] — 再次上榜，1.7k stars
- [[2026-07-10|2026-07-10]] — 再次上榜，1.6k stars
- [[2026-07-09|2026-07-09]] — 再次上榜，1.4k stars
- [[2026-07-08|2026-07-08]] — 首次收錄，1.1k stars
