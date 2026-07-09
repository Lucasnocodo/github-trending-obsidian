---
repo: Shpigford/knockoff
url: https://github.com/Shpigford/knockoff
owner: Shpigford
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Chrome extension that filters pseudo-brand junk out of Amazon. Buy from real, established brands."
homepage: "https://knockoff.shopping"
stars: 1427
stars_per_day: 714
forks: 43
open_issues: 12
created: 2026-07-06
pushed_at: 2026-07-08
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "瀏覽器擴展"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "過濾 Amazon 上的偽品牌商品，讓你購買真正的知名品牌。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-12"
contributor_count: 2
engagement: "low"
issue_close_rate: 63
repo_size_kb: 1672
readme_length: 6939
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1078,2026-07-08:1085,2026-07-09:1427"
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
  - "過濾 Amazon 上的偽品牌商品，讓你購買真正的知名品牌。"
---

# knockoff

**1.1k** stars · **1.1k** stars/天 · 建立 1 天前 · JavaScript · NOASSERTION

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
> 過濾 Amazon 上的偽品牌商品，讓你購買真正的知名品牌。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望在 Amazon 上購物時避免偽品牌的消費者。
> **一句話重點** Knockoff 不僅是過濾工具，更是一個社群驅動的品牌保護平台。

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
> **結論** 花 2 小時學習，1 小時整合，能顯著提升購物體驗，值得使用。

> [!abstract] 核心創新
> Knockoff 結合了社群允許清單與語言學特徵評分，提供更靈活的品牌過濾機制。

## 專案簡介

Knockoff 是一款 Chrome 擴展，旨在過濾 Amazon 上的偽品牌商品，幫助用戶購買真正的知名品牌。使用者在搜索結果中，Knockoff 會根據一系列規則來判斷品牌的真實性，並隱藏、淡化或標記那些偽品牌。這個過程完全在本地執行，無需註冊或追蹤，確保用戶的隱私。核心機制是透過一個品牌檢查管道，首先檢查用戶的允許清單和封鎖清單，然後比對一個包含偽品牌和知名品牌的資料庫。這樣的設計不僅提高了過濾的準確性，還避免了對 Amazon 伺服器的過多請求。

使用者可以選擇不同的過濾等級，從放鬆到嚴格，根據個人需求調整過濾的強度。與其他類似工具相比，如 AmazonBrandFilter 和 SoldBy，Knockoff 的優勢在於其結合了社群允許清單和語言學特徵評分，能更靈活地應對各種品牌名稱的變化。這使得它在處理偽品牌時的準確性更高，並且能夠隨著社群的反饋不斷改進。使用者在使用過程中可能會遇到一些限制，例如對於混合大小寫的名稱過濾不夠精確，但這些問題都在持續改進中。總體來說，Knockoff 是一個非常適合希望提高購物安全性的用戶，特別是對於經常在 Amazon 購物的人來說，這個工具能顯著提升購物體驗。

**技術棧**：`JavaScript` · `HTML` · `CSS` · `Shell` · `Ruby` · `Swift`

## 重點功能

- 品牌過濾 — 根據用戶的允許清單和封鎖清單過濾商品。
- 多層過濾等級 — 提供放鬆、標準和嚴格三種過濾模式，滿足不同需求。
- 本地執行 — 完全在用戶的瀏覽器中運行，無需伺服器請求，保護隱私。
- 報告機制 — 用戶可以一鍵報告錯誤分類的品牌，幫助改進資料庫。
- 社群允許清單 — 定期更新的知名品牌資料庫，來自社群的貢獻。

## 快速開始

1. 安裝 Chrome 擴展
```bash
[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)
```
2. 克隆此 repo 以進行開發
```bash
git clone https://github.com/Shpigford/knockoff.git
```
3. 在 Chrome 擴展頁面加載未打包擴展
```bash
在 chrome://extensions 中開啟開發者模式，點擊加載未打包，選擇 repo 文件夾
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1085 stars（1085/天），forks 29（2.7%），這顯示出用戶對於過濾偽品牌的需求強烈。這個專案的作者 Shpigford 之前有過類似的開發經驗，解決了用戶在 Amazon 上購物時面對的偽品牌問題，這在過去的工具中並未得到很好的解決。近期的社群反應也顯示出對於 Firefox 和 Safari 擴展的需求，這可能是促進其快速增長的原因之一。技術上，這個工具的設計充分利用了本地執行的優勢，避免了伺服器請求的延遲，這在現今的網路環境中是非常重要的。forks/stars 比率相對較低，顯示出大多數用戶對於這個工具的使用是觀望而非修改。

## 適合誰使用

**目標受眾**：希望在 Amazon 上購物時避免偽品牌的消費者。

> [!example] 使用場景
> - 網購愛好者用它來過濾 Amazon 上的偽品牌商品，因為這樣能更安心地購買知名品牌，避免購買到劣質商品。
> - 開發者用它來測試自己的購物網站，確保不會推薦偽品牌，因為這樣能提升用戶的信任度和網站的專業性。
> - 品牌經理用它來監控競爭對手的品牌活動，因為能夠快速識別市場上的偽品牌，並調整自己的行銷策略。

## 架構分析

Knockoff 的架構設計以 Chrome 擴展為核心，所有邏輯運行在用戶的瀏覽器中，這樣的設計避免了伺服器請求的延遲，提升了使用體驗。資料流從用戶的允許清單和封鎖清單開始，然後依據一系列的資料庫和語言學特徵進行過濾。這種設計的代價是可能無法即時更新品牌資料庫，但透過社群的貢獻，資料庫仍然能夠保持相對的準確性。擴展性方面，Knockoff 依賴於用戶的反饋來不斷改進品牌過濾的準確性，這使得它在面對不斷變化的市場環境時，能夠持續適應。

## 技術深入分析

Knockoff 的核心技術機制是基於品牌名稱的語言學特徵分析，結合社群提供的品牌資料庫來進行過濾。這樣的設計使得它能夠在不依賴伺服器的情況下，快速且準確地識別偽品牌。效能方面，由於所有操作都在本地執行，因此對於用戶的網路連接要求較低，冷啟動時間幾乎為零。設計上，選擇 JavaScript 作為主要開發語言，使得擴展能夠輕鬆與瀏覽器整合，並且便於維護。這個選擇的代價是可能在處理複雜邏輯時，性能不如某些編譯語言。技術風險方面，隨著品牌名稱的變化，可能會出現過濾準確性下降的情況，這需要持續的社群參與來維持資料庫的更新。整合方面，Knockoff 可以輕鬆與現有的購物流程相容，並且不會對其他擴展造成干擾，這使得它在使用時幾乎沒有摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體指導。安裝過程順暢，無需複雜的配置，適合新手使用。文件中有提供快速入門指南，讓用戶能夠快速上手。多語言支持方面，當前僅提供英文文件，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 隱私保護 — 完全在本地運行，無需伺服器請求。
> - 靈活的過濾選項 — 提供多種過濾等級，適應不同用戶需求。
> - 社群驅動的品牌更新 — 定期更新的品牌資料庫，保持準確性。

> [!danger] 缺點
> - 對於某些品牌名稱的過濾準確性不足，可能漏掉偽品牌。
> - 不支持賣家國家來源查詢，限制了品牌識別的準確性。
> - 某些特殊商品顯示格式尚未被掃描，影響過濾效果。

> [!warning] 注意事項
> - 對於混合大小寫的名稱過濾不夠精確，可能會漏掉一些偽品牌。
> - 不支持賣家國家來源查詢，這會影響某些品牌的識別。
> - 某些特殊的商品顯示格式（如輪播）尚未被掃描。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理管理，而 Knockoff 專注於過濾偽品牌，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個品牌監控工具，Knockoff 則是直接在購物過程中過濾偽品牌。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多代理的購物體驗，而 Knockoff 專注於品牌的真實性過濾。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| AmazonBrandFilter | 使用允許清單的方式來過濾品牌，而 Knockoff 則結合了社群資料庫和語言學特徵評分，提供更靈活的過濾機制。 | 如果你的需求是簡單的品牌過濾，且不需要社群驅動的更新，可以選擇這個工具。 | medium — 需要重新設置允許清單和過濾規則。 |
| SoldBy | 專注於賣家國家來源查詢，而 Knockoff 專注於品牌的真實性過濾，適用場景不同。 | 如果你的需求是了解賣家的國家來源，SoldBy 會更適合。 | low — 只需安裝並配置賣家查詢選項。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **knockoff** | **AmazonBrandFilter** | **SoldBy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用允許清單的方式來過濾品牌，而 Knockoff 則結合了社群資料庫和語言學特徵評分，提供更靈活的過濾機制。 | 專注於賣家國家來源查詢，而 Knockoff 專注於品牌的真實性過濾，適用場景不同。 |
> | 遷移成本 | - | medium — 需要重新設置允許清單和過濾規則。 | low — 只需安裝並配置賣家查詢選項。 |
> | 適用場景 | 主要場景 | 如果你的需求是簡單的品牌過濾，且不需要社群驅動的更新，可以選 | 如果你的需求是了解賣家的國家來源，SoldBy 會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人使用和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於混合大小寫的名稱過濾不夠精確，可能會漏掉偽品牌。
  - 解法：在嚴格模式下使用以提高過濾準確性。
- [low] 某些特殊商品顯示格式尚未被掃描，影響過濾效果。
  - 解法：定期檢查更新，並提供反饋以改善功能。
- **[HIGH]** 不支持賣家國家來源查詢，限制了品牌識別的準確性。
  - 解法：使用其他工具輔助查詢賣家資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 經常在 Amazon 購物的消費者 | 非常適合 | 能有效過濾偽品牌，提升購物安全性。 |
| 開發者需要測試購物網站的品牌真實性 | 適合 | 能快速識別偽品牌，提升網站的專業性。 |
| 品牌經理監控競爭對手的品牌活動 | 普通 | 雖然能識別偽品牌，但無法提供賣家來源資訊。 |
| 不常在 Amazon 購物的用戶 | 不適合 | 對於偶爾購物的用戶，使用成本過高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能顯著提升購物體驗，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用過程中不會影響用戶的隱私。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Knockoff 最常與 Chrome 瀏覽器搭配使用，作為購物過程中的品牌過濾工具。在一個用 Chrome 瀏覽器的購物環境中，使用者可以直接在 Amazon 搜索頁面中看到過濾後的結果，這樣的整合幾乎無縫。它與主流的 CI 工具（如 GitHub Actions）並無直接整合，但可以作為開發者測試工具的一部分。常見的整合問題主要集中在品牌資料庫的更新上，這需要社群的持續貢獻來維持資料的準確性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Knockoff 出現之前，許多用戶在 Amazon 上購物時面臨偽品牌的困擾，常常無法辨別哪些品牌是真實的。過去的工具如 AmazonBrandFilter 雖然提供了允許清單的過濾方式，但缺乏靈活性。隨著社群對於品牌真實性需求的增加，Knockoff 的出現填補了這一空白。

這個工具代表了品牌過濾技術的進步，未來可能會隨著社群的參與而不斷演進。

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
| Forks | 29 |
| Open Issues | 6 |
| Issue 解決率 | 63% (10 closed) |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-06 |
| 官方網站 | [Link](https://knockoff.shopping) |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Shpigford/knockoff) |
| Topics | `amazon` `browser-extension` `chrome-extension` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 61
>     "HTML" : 16
>     "CSS" : 14
>     "Shell" : 4
>     "Ruby" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Shpigford](https://github.com/Shpigford) | 29 |
> | [@lucaskumara](https://github.com/lucaskumara) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期有用戶反饋和貢獻品牌資料庫。
**連結**：[文件](https://knockoff.shopping)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-08）
> **活躍天數** 2 天 · **最新 commit** Collapse single-report brands behind a per-section toggle (#36)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/Shpigford/knockoff/issues/1) | Firefox Extension `enhancement` | 155 | 0 |
> | [#2](https://github.com/Shpigford/knockoff/issues/2) | Safari Extension `enhancement` | 10 | 4 |
> | [#21](https://github.com/Shpigford/knockoff/issues/21) | Userscript | 5 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Knockoff
> 
> **A Chrome extension that filters pseudo-brand junk out of Amazon.** Buy from
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
> **[Add to Chrome](https://chromewebstore.google.com/detail/pjgickchbiikhdfpmecaabkphmofpdce)** from the Chrome Web Store.
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

相關概念：[[自動化測試]] · [[瀏覽器擴展]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[LinXiaoTao--FuckClaude|LinXiaoTao/FuckClaude]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

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

- [[2026-07-09|2026-07-09]] — 再次上榜，1.4k stars
- [[2026-07-08|2026-07-08]] — 首次收錄，1.1k stars
