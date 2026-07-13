---
repo: Shpigford/knockoff
url: https://github.com/Shpigford/knockoff
owner: Shpigford
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Chrome extension that filters pseudo-brand junk out of Amazon. Buy from real, established brands."
homepage: "https://knockoff.shopping"
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
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 79
repo_size_kb: 2441
readme_length: 7714
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1078,2026-07-08:1085,2026-07-09:1427,2026-07-09:1430,2026-07-10:1582,2026-07-10:1583,2026-07-11:1711,2026-07-11:1714,2026-07-12:1779,2026-07-12:1779,2026-07-13:1827"
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
  - "過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。"
---

# knockoff

**1.8k** stars · **356** stars/天 · 建立 5 天前 · JavaScript · NOASSERTION

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

`v0.5.0` `easy-install`

`amazon` `browser-extension` `chrome-extension`

> [!summary] 一句話摘要
> 過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (356 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在 Amazon 上購物時避免偽品牌的消費者。
> **一句話重點** Knockoff 不僅是個過濾工具，更是消費者信任品牌的守護者。

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
> **結論** 花 2 小時學習，1 小時整合，得到更安全的購物體驗，值得採用。

> [!abstract] 核心創新
> Knockoff 結合了社群允許清單與語言學特徵評分，提供了更精確的品牌過濾機制。

## 專案簡介

Knockoff 是一個 Chrome 擴展，專門用來過濾 Amazon 上的偽品牌商品，讓用戶能夠更容易找到真正的知名品牌。其核心機制是通過一系列的檢查來判斷商品的品牌，首先檢查用戶的允許清單與封鎖清單，然後比對一個包含著名偽品牌的種子清單，接著再檢查已知的品牌名，最後使用語言學特徵來評分未知品牌。這樣的設計不僅能提高過濾的準確性，還能在不需要伺服器的情況下運行，保護用戶隱私。用戶可以透過 Chrome 或 Firefox 安裝這個擴展，並且在 Safari 上也能使用，但需要透過 Xcode 封裝成原生應用。這個工具的賣點在於其社群驅動的品牌清單和智能檢測機制，能夠有效地過濾掉那些沒有實際公司背景的商品。使用者可以選擇不同的過濾級別，從放鬆到嚴格，來決定哪些商品應該被隱藏或標記。這樣的設計不僅提升了購物體驗，也幫助用戶避免購買低品質的商品。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Shell` · `Ruby` · `Swift`

## 重點功能

- 品牌過濾 — 根據用戶的允許/封鎖清單過濾商品。
- 偽品牌檢測 — 使用語言學特徵來識別偽品牌名稱。
- 多層過濾 — 提供放鬆、標準和嚴格三種過濾級別。
- 社群驅動 — 定期更新的品牌清單，來自用戶的貢獻。
- 即時報告 — 用戶可以快速報告錯誤的品牌分類，並提供品牌名稱。

## 快速開始

1. 安裝 Chrome 擴展
```bash
[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)
```
2. 安裝 Firefox 擴展
```bash
[Add to Firefox](https://addons.mozilla.org/en-US/firefox/addon/knockoff-amazon-brand-filter/)
```
3. 開發模式下加載擴展
```bash
1. Clone this repo
2. Open chrome://extensions
3. Turn on Developer mode
4. Click Load unpacked and select the repo folder
```

## 程式碼範例

```js
# README 未提供程式碼範例
# 基於文件推測
1. Clone this repo
2. Open chrome://extensions
3. Turn on Developer mode
4. Click Load unpacked and select the repo folder
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1779 stars（356/天），forks 59（3.3%），顯示出穩定的增長潛力。作者 Shpigford 之前在開源社群活躍，這個專案解決了 Amazon 上偽品牌泛濫的問題，讓用戶能夠更輕鬆地找到值得信賴的品牌。近期的媒體報導也讓這個工具受到關注，像是 Fast Company 和 Gizmodo 都有提到它的實用性。這個工具的成功也反映了消費者對於品牌信任的需求，尤其是在網路購物日益普及的今天。

## 適合誰使用

**目標受眾**：希望在 Amazon 上購物時避免偽品牌的消費者。

> [!example] 使用場景
> - 網路購物者用它來過濾 Amazon 上的偽品牌商品，因為這樣可以更快找到值得信賴的品牌，避免購買低品質商品。
> - 開發者用它來測試商品過濾功能，因為能夠快速檢查擴展的效果，並提供即時反饋。
> - 產品經理用它來分析市場上品牌的真實性，因為這樣可以更好地理解消費者對品牌的信任度。

## 架構分析

Knockoff 採用 MV3 的架構模式，所有運算都在用戶端的內容腳本中進行，這樣的設計使得擴展不需要伺服器支持，保護用戶隱私。資料流從用戶的允許清單和封鎖清單開始，然後通過一系列的品牌檢查，最終決定商品的顯示狀態。這樣的設計使得擴展能夠快速響應用戶的需求，但也意味著對於某些複雜的品牌識別可能存在局限性。擴展的可擴展性在於其社群驅動的品牌清單，這意味著用戶可以不斷貢獻和更新品牌資料，但這也可能導致資料的質量參差不齊。

## 技術深入分析

Knockoff 的核心技術機制是基於品牌過濾的多層檢查系統，這包括用戶的允許和封鎖清單、知名偽品牌的種子清單以及社群貢獻的品牌資料。這種設計使得擴展能夠在用戶端快速運行，避免了伺服器的延遲和隱私問題。效能方面，因為所有運算都在用戶端進行，對於資源的需求相對較低，並且可以即時反饋過濾結果。設計上選擇 JavaScript 作為主要語言，因為它在瀏覽器擴展中有良好的兼容性和性能。這個選擇使得擴展能夠輕鬆整合到現有的瀏覽器生態中。技術風險方面，隨著品牌資料的增長，可能會面臨資料質量的挑戰，這需要社群的持續參與和維護。整合方面，Knockoff 可以輕鬆與其他瀏覽器擴展共存，但在某些情況下，可能需要調整設置以避免衝突。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，讓新手能夠快速上手。安裝過程相對順暢，但在 Safari 上需要額外的步驟。文件中沒有多語言支持，但主要內容已經足夠詳細，能幫助用戶理解如何使用擴展。

## 優缺點分析

> [!success] 優點
> - 能有效過濾偽品牌，提升購物體驗。
> - 無需伺服器支持，保護用戶隱私。
> - 社群驅動的品牌清單，持續更新。

> [!danger] 缺點
> - 對於非英語品牌的識別能力有限。
> - 某些混合大小寫名稱可能無法正確識別。
> - 無法查詢賣家的國家來源，影響過濾效果。

> [!warning] 注意事項
> - 不支援非英語商店的品牌名稱檢測，可能會漏掉當地品牌。
> - 對於某些混合大小寫的名稱，可能無法正確識別為偽品牌。
> - 無法查詢賣家的國家來源，因為這需要額外的網路請求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理管理，而 Knockoff 專注於品牌過濾，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個專注於過濾不必要的商品的工具，但不具備 Knockoff 的品牌檢測能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理管理，而 Knockoff 專注於品牌過濾，適用場景不同。 | 如果你的需求是管理多個代理而非品牌過濾，則應選擇這個工具。 | low，因為兩者的使用場景不同，轉換不會太困難。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個專注於過濾不必要的商品的工具，但不具備 Knockoff 的品牌檢測能力。 | 如果你需要一個更簡單的商品過濾工具，而不需要品牌識別功能，則可以選擇 Boneyard。 | medium，因為需要重新適應不同的過濾邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **knockoff** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於代理管理，而 Knockoff 專注於品牌過濾，適用場景不同。 | Boneyard 是一個專注於過濾不必要的商品的工具，但不具備 Knockoff 的品牌檢測能力。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，轉換不會太困難。 | medium，因為需要重新適應不同的過濾邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求是管理多個代理而非品牌過濾，則應選擇這個工具。 | 如果你需要一個更簡單的商品過濾工具，而不需要品牌識別功能，則 |

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

- [MEDIUM] 對於某些混合大小寫的名稱，可能無法正確識別為偽品牌。
  - 解法：使用嚴格模式以提高識別準確性。
- **[HIGH]** 無法查詢賣家的國家來源，可能影響過濾效果。
  - 解法：手動檢查賣家信息以確認品牌真實性。
- [MEDIUM] 某些特殊商品布局未被掃描，可能漏掉部分商品。
  - 解法：定期更新擴展以獲取最新功能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 經常在 Amazon 上購物的消費者 | 非常適合 | 能有效過濾偽品牌，提升購物體驗。 |
| 開發者需要測試商品過濾功能 | 適合 | 能快速檢查擴展的效果，並提供即時反饋。 |
| 小型企業希望避免低品質商品 | 普通 | 雖然能過濾偽品牌，但對於非英語品牌的識別能力有限。 |
| 大型企業需要大規模品牌過濾 | 不適合 | 目前的功能和社群支持可能無法滿足大規模需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到更安全的購物體驗，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，並且不存取敏感資料。依賴的品牌清單來自社群貢獻，需定期檢查資料的準確性。

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
| Open Issues | 6 |
| Issue 解決率 | 79% (23 closed) |
| 最後推送 | 2026-07-11 |
| 建立日期 | 2026-07-06 |
| 官方網站 | [Link](https://knockoff.shopping) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Shpigford/knockoff) |
| Topics | `amazon` `browser-extension` `chrome-extension` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 71
>     "CSS" : 14
>     "HTML" : 7
>     "Shell" : 4
>     "Ruby" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Shpigford](https://github.com/Shpigford) | 72 |
> | [@pseudovidecoder](https://github.com/pseudovidecoder) | 5 |
> | [@AlexSimmons](https://github.com/AlexSimmons) | 1 |
> | [@kurtmckee](https://github.com/kurtmckee) | 1 |
> | [@lucaskumara](https://github.com/lucaskumara) | 1 |

**最新版本**：v0.5.0 (2026-07-11)

> [!info]- Release Notes
> - New: Knockoff now runs on mobile — Firefox for Android, and Safari on iPhone and iPad.
> - New: filter by minimum star rating and review count, so poorly-rated or barely-reviewed listings drop out alongside pseudo-brands.
> - New: when you report a misclassification, you can now name the brand you expected, so corrections land faster.
> - New: pseudo-brands are now filtered on Amazon's "Keep shopping for" recommendation grids, not just the main search results.
> - Improved: Knockoff now reads the brand from Amazon's dedicated byline, not just the product title, for more accurate detection.
> - Improved: certification and compatibility brackets at the start of a title (like "[FCC Certified]") are no longer mistaken for the brand.
> - Improved: allowlisted brands are now recognized even when buried inside category-page titles.
> - Improved: fewer false flags — short vowelless acronyms like CCT and RGB read as unbranded, and accented words like German compounds are no longer misread as pseudo-brands.
> - Improved: expanded the built-in brand lists so more real brands are recognized on sight.
> - Improved: more media titles (books, music, movies) are skipped on all-departments searches.
> - Changed: dimmed listings now stay dimmed when you hover; only an explicit un-hide reveals them.
> - Changed: refreshed app icon and in-app logo with the new red price-tag brand mark.

## 社群與生態

**社群活躍度**：社群活躍，定期更新品牌清單和功能。
**連結**：[文件](https://knockoff.shopping)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-10 ~ 2026-07-11）
> **活躍天數** 2 天 · **最新 commit** Release v0.5.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/Shpigford/knockoff/issues/21) | Userscript | 9 | 2 |
> | [#17](https://github.com/Shpigford/knockoff/issues/17) | Searching for prolific trademark filings within the USPTO | 3 | 1 |
> | [#65](https://github.com/Shpigford/knockoff/issues/65) | Accessibility: Need a preference option for colours | 2 | 1 |
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
> | 5 | ~5,000 established brands ([`data/known-brands.js`](data/known-brands.js) + the community allowlist in [`data/community-brands.js`](data/community-brands.js), refreshed daily from `api.knockoff.shopping/brands`) | `known` |
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

相關概念：[[自動化測試]] · [[瀏覽器擴展]] · [[資料過濾]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[LinXiaoTao--FuckClaude|LinXiaoTao/FuckClaude]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/Shpigford/knockoff) · [官方網站](https://knockoff.shopping)

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
> const concepts = ["自動化測試","瀏覽器擴展","資料過濾"];
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
