---
repo: Shpigford/knockoff
url: https://github.com/Shpigford/knockoff
owner: Shpigford
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Chrome extension that filters pseudo-brand junk out of Amazon. Buy from real, established brands."
homepage: "https://knockoff.shopping"
stars: 1779
stars_per_day: 356
forks: 59
open_issues: 6
created: 2026-07-06
pushed_at: 2026-07-11
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "其他"
subcategory: "瀏覽器擴展"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "過濾亞馬遜上的偽品牌商品，讓你購買真正的知名品牌。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-15"
contributor_count: 5
engagement: "low"
issue_close_rate: 76
repo_size_kb: 2455
readme_length: 7714
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1078,2026-07-08:1085,2026-07-09:1427,2026-07-09:1430,2026-07-10:1582,2026-07-10:1583,2026-07-11:1711,2026-07-11:1714,2026-07-12:1779"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - easy_install
  - "topic/amazon"
  - "topic/browser_extension"
  - "topic/chrome_extension"
aliases:
  - "knockoff"
  - "Shpigford/knockoff"
  - "過濾亞馬遜上的偽品牌商品，讓你購買真正的知名品牌。"
---

# knockoff

**1.7k** stars · **429** stars/天 · 建立 4 天前 · JavaScript · NOASSERTION

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

`easy-install`

`amazon` `browser-extension` `chrome-extension`

> [!summary] 一句話摘要
> 過濾亞馬遜上的偽品牌商品，讓你購買真正的知名品牌。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (429 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在亞馬遜上購物但不想被偽品牌商品欺騙的消費者。
> **一句話重點** Knockoff 不僅是一個過濾工具，更是提升消費者購物體驗的利器。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習和 1 小時整合，能夠顯著提升購物體驗，值得採用。

> [!abstract] 核心創新
> 結合社區允許清單和語言學特徵評分系統，有效識別偽品牌商品。

## 專案簡介

Knockoff 是一款 Chrome 擴展，專注於過濾亞馬遜上的偽品牌商品，幫助用戶購買真正的知名品牌。當用戶在亞馬遜上搜尋商品時，擴展會透過一系列的檢查來判斷品牌的真實性，並根據用戶的允許清單和封鎖清單進行過濾。這個過程完全在本地執行，沒有伺服器請求，確保用戶隱私。核心的品牌檢查流程包括：首先檢查用戶的允許清單，其次是封鎖清單，接著是知名的偽品牌名單，然後是已知的中國品牌，最後是約 5000 個經過驗證的品牌。

擴展還提供了多種過濾級別，讓用戶可以根據自己的需求選擇過濾的嚴格程度。這個工具的賣點在於其社區驅動的品牌清單和語言學特徵評分系統，能夠有效識別和隱藏那些沒有實際品牌背書的商品。使用者可以選擇隱藏、淡化或標記過濾的商品，並且可以方便地報告錯誤分類的商品，以持續改善品牌清單。這種設計不僅提高了購物的安全性，還能幫助用戶避免購買劣質商品。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Shell` · `Ruby` · `Swift`

## 重點功能

- 品牌過濾 — 根據用戶的允許清單和封鎖清單過濾商品。
- 多種過濾級別 — 提供放鬆、標準和嚴格三種過濾模式，滿足不同用戶需求。
- 社區驅動的品牌清單 — 每日更新的品牌清單，包含約 5000 個經過驗證的品牌。
- 本地運行 — 所有檢查在用戶端進行，無需伺服器請求，保護用戶隱私。
- 錯誤報告功能 — 用戶可以方便地報告錯誤分類的商品，幫助改善品牌清單。

## 快速開始

1. 從 Chrome 網店安裝擴展
```bash
[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)
```
2. 從 Firefox 附加元件安裝擴展
```bash
[Add to Firefox](https://addons.mozilla.org/en-US/firefox/addon/knockoff-amazon-brand-filter/)
```
3. 在開發模式下加載擴展
```bash
Clone this repo, then go to chrome://extensions and load unpacked.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1714 stars（429/天），forks 54（3.2%），顯示出強烈的用戶需求。這個專案的作者 Shpigford 之前在開發其他擴展上有豐富經驗，Knockoff 解決了亞馬遜上偽品牌商品氾濫的痛點，這在過去的購物體驗中是個大問題。隨著越來越多的消費者意識到品牌的重要性，這個工具的需求自然上升。社群的反饋也促進了其快速發展，尤其是對於用戶腳本和可訪問性的需求。

## 適合誰使用

**目標受眾**：希望在亞馬遜上購物但不想被偽品牌商品欺騙的消費者。

> [!example] 使用場景
> - 網購愛好者用它來過濾亞馬遜上的偽品牌商品，因為這樣能夠更安全地選擇知名品牌，避免購買劣質商品。
> - 小型企業主用它來尋找可靠的供應商，因為能夠輕鬆識別出真正的品牌，減少因為選擇錯誤供應商而造成的損失。
> - 消費者在購物時用它來提高購物效率，因為能夠快速過濾掉不值得信賴的商品，節省選擇時間。

## 架構分析

Knockoff 的架構設計以用戶隱私為核心，所有檢查在用戶端進行，避免了伺服器請求。擴展的核心是內容腳本，負責掃描頁面並進行品牌檢查。品牌的檢查流程依賴於多個數據來源，包括用戶的允許清單、封鎖清單和社區維護的品牌清單。

這種設計使得擴展能夠快速響應用戶需求，並且不依賴於外部服務。選擇這種本地運行的架構，雖然犧牲了某些即時更新的能力，但大大提高了用戶的隱私安全。擴展的擴展性良好，未來可以通過增加更多的品牌數據源來進一步增強過濾效果。

## 技術深入分析

Knockoff 使用了多層次的品牌檢查機制，首先通過用戶的允許清單和封鎖清單進行過濾，然後再利用社區維護的品牌清單和語言學特徵評分系統進行進一步的檢查。這樣的設計使得擴展能夠快速識別偽品牌商品，並且不需要依賴外部伺服器，保護用戶隱私。擴展的效能在於其快速的本地運行，能夠即時反應用戶的操作。設計上，選擇使用 JavaScript 進行開發，這使得擴展能夠輕鬆集成到現有的瀏覽器環境中。這種選擇雖然在性能上可能不如某些編譯語言，但在開發和維護上卻提供了更大的靈活性。技術上，Knockoff 的依賴關係較少，主要依賴於瀏覽器的原生 API，這降低了潛在的供應鏈風險。隨著擴展的使用者增多，未來可能會面臨更高的數據需求，這需要進一步的優化和擴展能力的提升。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體步驟。安裝過程順暢，無需複雜的配置。文件中包含了良好的入門指南，幫助新手快速上手。可惜的是，目前沒有多語言支持，僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 有效過濾偽品牌商品，提升購物安全性。
> - 本地運行，無需伺服器請求，保護用戶隱私。
> - 社區驅動的品牌清單，持續更新，保持數據的準確性。

> [!danger] 缺點
> - 對於非英語品牌的識別能力有限，可能會漏掉當地品牌。
> - 某些特殊商品顯示格式尚未支援，可能無法完全過濾所有偽品牌。
> - 對於混合大小寫的隨機字母組合，標準級別的過濾可能無法識別。

> [!warning] 注意事項
> - 不支援非英語商店的名稱特徵檢查，可能會漏掉當地品牌。
> - 對於混合大小寫的隨機字母組合，標準級別的過濾可能無法識別。
> - 某些特殊的商品顯示格式（如旋轉木馬）尚未被掃描。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理生成，而 Knockoff 專注於品牌過濾，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了商品的詳細評分系統，而 Knockoff 主要依賴品牌過濾，適合不同的用戶需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| AmazonBrandFilter | 這個工具採用允許清單的方法來過濾品牌，而 Knockoff 則結合了社區驅動的品牌清單和語言學特徵評分系統。 | 如果你希望有一個簡單的允許清單過濾工具，AmazonBrandFilter 是一個不錯的選擇。 | low，因為兩者的使用方式相似。 |
| SoldBy | SoldBy 專注於賣家國家查詢，而 Knockoff 專注於品牌過濾，適用場景不同。 | 如果你的需求是查詢賣家的國家信息，SoldBy 更加合適。 | medium，因為需要調整使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **knockoff** | **AmazonBrandFilter** | **SoldBy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具採用允許清單的方法來過濾品牌，而 Knockoff 則結合了社區驅動的品牌清單和語言學特徵評分系統。 | SoldBy 專注於賣家國家查詢，而 Knockoff 專注於品牌過濾，適用場景不同。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要調整使用習慣。 |
> | 適用場景 | 主要場景 | 如果你希望有一個簡單的允許清單過濾工具，AmazonBran | 如果你的需求是查詢賣家的國家信息，SoldBy 更加合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於混合大小寫的隨機字母組合，標準級別的過濾可能無法識別。
  - 解法：使用嚴格模式來捕捉這些商品。
- [MEDIUM] 某些特殊商品顯示格式尚未支援，可能無法完全過濾所有偽品牌。
  - 解法：定期檢查更新以獲取新功能。
- [MEDIUM] 對於非英語品牌的識別能力有限，可能會漏掉當地品牌。
  - 解法：手動添加到允許清單中。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 經常在亞馬遜上購物的消費者 | 非常適合 | 能夠有效過濾偽品牌商品，提升購物安全性。 |
| 小型企業主尋找可靠的供應商 | 適合 | 能夠輕鬆識別出真正的品牌，減少選擇錯誤供應商的風險。 |
| 對品牌有高要求的專業買家 | 普通 | 可能需要更精細的品牌檢查，Knockoff 的功能可能不夠全面。 |
| 不常使用亞馬遜的消費者 | 不適合 | 對於不常使用亞馬遜的用戶，這個工具的價值可能不明顯。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習和 1 小時整合，能夠顯著提升購物體驗，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：擴展在用戶端運行，不需要高權限，也不存取敏感資料。依賴鏈簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Knockoff 最常與 Chrome 和 Firefox 瀏覽器搭配使用，作為購物時的輔助工具。在一個使用 Chrome 的購物流程中，用戶可以在搜尋結果中自動過濾偽品牌商品，具體做法是安裝擴展並啟用過濾功能。擴展與主流的 CI/CD 工具無直接整合，但其簡單的 JavaScript 架構使得未來的擴展和集成變得容易。整合的摩擦點主要在於用戶需要手動設置允許和封鎖清單，這對於不熟悉的用戶來說可能會有些困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Knockoff 出現之前，消費者在亞馬遜上購物時常常受到偽品牌商品的困擾，許多工具無法有效過濾這些商品。隨著電子商務的發展，消費者對品牌的信任度越來越高，這促使了對品牌過濾工具的需求。Knockoff 的出現正好填補了這一空白，通過社區驅動的品牌清單和語言學特徵評分系統，為消費者提供了一個有效的解決方案。

未來，隨著電子商務環境的變化，這類工具的需求將會持續增長。

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
| Forks | 54 |
| Open Issues | 7 |
| Issue 解決率 | 76% (22 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-06 |
| 官方網站 | [Link](https://knockoff.shopping) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Shpigford/knockoff) |
| Topics | `amazon` `browser-extension` `chrome-extension` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 70
>     "CSS" : 14
>     "HTML" : 8
>     "Shell" : 4
>     "Ruby" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Shpigford](https://github.com/Shpigford) | 67 |
> | [@pseudovidecoder](https://github.com/pseudovidecoder) | 5 |
> | [@kurtmckee](https://github.com/kurtmckee) | 1 |
> | [@lucaskumara](https://github.com/lucaskumara) | 1 |
> | [@pseudobun](https://github.com/pseudobun) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新品牌清單和修復錯誤。
**連結**：[文件](https://knockoff.shopping)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-10 ~ 2026-07-10）
> **活躍天數** 1 天 · **最新 commit** Fold diacritics before scoring so German compounds aren't flagged (#91) (#93)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/Shpigford/knockoff/issues/21) | Userscript | 9 | 2 |
> | [#17](https://github.com/Shpigford/knockoff/issues/17) | Searching for prolific trademark filings within the USPTO | 3 | 1 |
> | [#65](https://github.com/Shpigford/knockoff/issues/65) | Accessibility: Need a preference option for colours | 1 | 1 |
> | [#95](https://github.com/Shpigford/knockoff/issues/95) | 2-word brands are disguised as 1-word | 0 | 0 |
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

相關概念：[[自動化測試]] · [[瀏覽器擴展]] · [[API 設計]]

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
> WHERE category = "其他" AND file.name != "Shpigford--knockoff"
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

- [[2026-07-12|2026-07-12]] — 再次上榜，1.8k stars
- [[2026-07-11|2026-07-11]] — 再次上榜，1.7k stars
- [[2026-07-10|2026-07-10]] — 再次上榜，1.6k stars
- [[2026-07-09|2026-07-09]] — 再次上榜，1.4k stars
- [[2026-07-08|2026-07-08]] — 首次收錄，1.1k stars
