---
repo: Shpigford/knockoff
url: https://github.com/Shpigford/knockoff
owner: Shpigford
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Chrome extension that filters pseudo-brand junk out of Amazon. Buy from real, established brands."
homepage: "https://knockoff.shopping"
stars: 1430
stars_per_day: 715
forks: 44
open_issues: 12
created: 2026-07-06
pushed_at: 2026-07-08
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
use_case: "過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-12"
contributor_count: 3
engagement: "low"
issue_close_rate: 57
repo_size_kb: 1709
readme_length: 7064
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1078,2026-07-08:1085,2026-07-09:1427,2026-07-09:1430"
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
  - "過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。"
---

# knockoff

**1.4k** stars · **715** stars/天 · 建立 2 天前 · JavaScript · NOASSERTION

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
> 過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (715 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望在 Amazon 上購物時避免偽品牌的消費者，特別是對品牌有較高要求的用戶。
> **一句話重點** Knockoff 的設計不僅解決了品牌過濾的問題，還充分考慮了用戶的隱私和使用體驗。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到更安全的購物體驗，值得採用。

> [!abstract] 核心創新
> Knockoff 結合了社區允許清單與語言特徵分析，提供了一個創新的品牌過濾解決方案。

## 專案簡介

Knockoff 是一款 Chrome 擴展，旨在過濾 Amazon 上的偽品牌商品，讓用戶能夠專注於真正的知名品牌。其運作流程是：用戶在 Amazon 搜尋商品時，擴展會檢查每個商品的品牌名稱，通過一系列的過濾規則來判斷是否為偽品牌。這些規則包括用戶自定義的允許清單和阻止清單，以及一個內建的偽品牌名單，最終將不符合標準的商品隱藏或標記。這種設計不僅提高了用戶的購物體驗，也減少了因購買低品質商品而產生的風險。

最關鍵的指令是安裝擴展後，無需任何賬戶或伺服器交互，所有過濾操作都在用戶的瀏覽器中本地執行。這樣的設計能夠保護用戶隱私，並且提高了反應速度。擴展支持多種過濾級別，從放鬆到嚴格，讓用戶能夠根據自己的需求進行調整。這一切都在一個簡單的用戶界面中進行，並且用戶可以輕鬆報告錯誤的分類，進一步改善品牌名單。

**技術棧**：`JavaScript` · `HTML` · `CSS`

## 重點功能

- 品牌過濾 — 根據用戶自定義的允許清單和阻止清單過濾商品。
- 偽品牌檢測 — 使用內建的偽品牌名單和語言特徵分析來識別可疑品牌。
- 多級過濾 — 提供放鬆、標準和嚴格三種過濾級別，滿足不同用戶需求。
- 即時報告 — 用戶可以一鍵報告錯誤的品牌分類，幫助改善品牌名單。
- 本地運行 — 所有操作在用戶的瀏覽器中本地執行，無需賬戶或伺服器交互。

## 快速開始

1. 安裝擴展到 Chrome
```bash
[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)
```
2. 在 Firefox 上安裝擴展
```bash
[Add to Firefox](https://addons.mozilla.org/en-US/firefox/addon/knockoff-amazon-brand-filter/)
```
3. 從源碼加載擴展
```bash
git clone https://github.com/Shpigford/knockoff && cd knockoff && chrome://extensions/ > Developer mode > Load unpacked > 選擇 repo 文件夾
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 1430 stars（715/天），forks 44（3.1%），顯示出強烈的用戶需求。專案的主要貢獻者 Shpigford 之前有開發其他擴展，這次針對 Amazon 的偽品牌問題提供了一個有效的解決方案。這個問題長期以來困擾著許多消費者，尤其是在網路購物日益普及的情況下。最近的社交媒體討論和用戶反饋也促進了這個專案的曝光率。這個工具的設計充分考慮了用戶隱私和性能，這在當前的技術環境中是非常重要的。forks/stars 比率為 3.1%，顯示出有一定比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在 Amazon 上購物時避免偽品牌的消費者，特別是對品牌有較高要求的用戶。

> [!example] 使用場景
> - 網路購物者用它來過濾 Amazon 上的偽品牌商品，因為這樣可以避免購買到低品質的商品，提升購物體驗。
> - 品牌經理用它來監控市場上的偽品牌，因為這能幫助他們了解競爭對手的動向，並保護自己的品牌形象。
> - 開發者用它來測試和改進自己的品牌過濾算法，因為這樣可以直接獲得用戶的反饋，快速迭代產品。

## 架構分析

Knockoff 的架構基於 Chrome 擴展的設計，所有邏輯都在用戶端執行，這樣的設計使得用戶的隱私得到保護，並且減少了伺服器交互的需求。資料流從用戶的搜尋開始，經過一系列的檢查，最終決定是否顯示該商品。這樣的設計使得擴展能夠快速反應，並且不受網絡延遲影響。選擇在用戶端執行的代價是需要用戶安裝擴展，但這樣的設計讓整體使用體驗更加流暢。擴展的可擴展性主要依賴於社區的貢獻，隨著品牌名單的增長，過濾效果會隨之提升。

## 技術深入分析

Knockoff 使用了一種基於名稱特徵的偵測算法，這種算法能夠識別出偽品牌的特徵，並將其與已知品牌進行比較。這種設計使得擴展能夠在不需要網絡請求的情況下快速運行，從而提高了性能。擴展能夠處理多達 5000 個已知品牌，並且根據社區的貢獻不斷更新。選擇在用戶端執行的架構使得擴展能夠快速反應，但也意味著需要用戶安裝和維護擴展。技術風險主要來自於品牌名單的更新，若社區貢獻不足，可能會影響過濾效果。整合到現有的購物流程中相對簡單，因為用戶只需安裝擴展即可開始使用，並且不需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程順暢，沒有明顯的坑。文件中有良好的入門指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 用戶隱私保護良好，無需伺服器交互。
> - 即時過濾和標記，提升購物體驗。
> - 社區貢獻的品牌名單不斷更新，過濾效果持續改善。

> [!danger] 缺點
> - 對於某些特殊商品佈局的支持不足。
> - 混合大小寫的名稱可能會漏過檢測。
> - 需要用戶主動報告錯誤的品牌分類，依賴社區參與。

> [!warning] 注意事項
> - 對於混合大小寫的無意義名稱，標準級別可能無法檢測到，但嚴格模式可以捕捉。
> - 未實現賣家國家來源查詢，因為這會導致每個產品需要兩次網絡請求。
> - 某些特殊的商品佈局（如旋轉木馬）尚未被掃描。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理管理，而 Knockoff 專注於品牌過濾，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更廣泛的產品過濾功能，但不專注於品牌識別，適合需要多維度過濾的用戶。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | Codex-shim 主要用於代碼生成，與 Knockoff 的購物過濾功能無關，適用場景完全不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| AmazonBrandFilter | 使用允許清單的方式過濾品牌，但不具備 Knockoff 的語言特徵分析能力，因此可能漏掉一些偽品牌。 | 如果你需要一個簡單的品牌過濾工具，且不需要複雜的偵測算法。 | low，因為使用方式相似，容易上手。 |
| SoldBy | 專注於賣家國家來源的查詢，與 Knockoff 的品牌過濾功能不同。 | 如果你需要了解賣家的國家來源，而不僅僅是品牌過濾。 | medium，因為需要調整使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **knockoff** | **AmazonBrandFilter** | **SoldBy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用允許清單的方式過濾品牌，但不具備 Knockoff 的語言特徵分析能力，因此可能漏掉一些偽品牌。 | 專注於賣家國家來源的查詢，與 Knockoff 的品牌過濾功能不同。 |
> | 遷移成本 | - | low，因為使用方式相似，容易上手。 | medium，因為需要調整使用習慣。 |
> | 適用場景 | 主要場景 | 如果你需要一個簡單的品牌過濾工具，且不需要複雜的偵測算法。 | 如果你需要了解賣家的國家來源，而不僅僅是品牌過濾。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人使用和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些特殊商品佈局未被掃描，可能導致漏過偽品牌
  - 解法：手動檢查這些商品
- **[HIGH]** 混合大小寫的名稱可能不被識別
  - 解法：在嚴格模式下使用
- [MEDIUM] 社區貢獻不足可能影響過濾效果
  - 解法：鼓勵用戶報告錯誤品牌

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型電商平台的消費者 | 非常適合 | 能有效過濾偽品牌，提升購物體驗。 |
| 品牌經理需要監控市場 | 適合 | 可以幫助了解競爭對手的動向。 |
| 小型團隊開發者 | 普通 | 雖然功能強大，但可能需要額外的維護和更新。 |
| 不常網購的用戶 | 不適合 | 這類用戶可能不需要這種專門的過濾工具。 |

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
> 低風險：這個擴展不需要高權限，並且不存取用戶的敏感資料，所有操作都在本地進行。

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
| Forks | 44 |
| Open Issues | 12 |
| Issue 解決率 | 57% (16 closed) |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-06 |
| 官方網站 | [Link](https://knockoff.shopping) |
| Repo 大小 | 1.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Shpigford/knockoff) |
| Topics | `amazon` `browser-extension` `chrome-extension` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 54
>     "HTML" : 26
>     "CSS" : 12
>     "Shell" : 4
>     "Ruby" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Shpigford](https://github.com/Shpigford) | 44 |
> | [@lucaskumara](https://github.com/lucaskumara) | 1 |
> | [@pseudobun](https://github.com/pseudobun) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://knockoff.shopping)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-08 ~ 2026-07-08）
> **活躍天數** 1 天 · **最新 commit** SEO foundation: canonical redirects, guide pages, sitemap, structured data (#53)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/Shpigford/knockoff/issues/21) | Userscript | 8 | 1 |
> | [#17](https://github.com/Shpigford/knockoff/issues/17) | Searching for prolific trademark filings within the USPTO | 2 | 0 |

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
> site/                     knockoff.shopping landing page (static, Cloudflare)
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

相關概念：[[自動化]] · [[瀏覽器擴展]] · [[用戶隱私]]

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
> const concepts = ["自動化","瀏覽器擴展","用戶隱私"];
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

- [[2026-07-09|2026-07-09]] — 再次上榜，1.4k stars
- [[2026-07-08|2026-07-08]] — 首次收錄，1.1k stars
