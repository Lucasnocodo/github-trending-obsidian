---
repo: magnum6actual/flipoff
url: https://github.com/magnum6actual/flipoff
owner: magnum6actual
owner_type: User
language: JavaScript
license: N/A
description: "Free split-flap display emulator for any TV. The classic flip-board look, without the $3,500 hardware."
homepage: ""
stars: 2517
stars_per_day: 629
forks: 304
open_issues: 15
created: 2026-03-26
pushed_at: 2026-03-26
first_seen: 2026-03-28
week: "2026-W13"
month: "2026-03"
category: "其他"
subcategory: "顯示工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-28
use_case: "將任何電視轉變為復古的翻板顯示器，無需昂貴的硬體設備。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-03"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 672
readme_length: 3034
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-28"
star_history: "2026-03-28:1337,2026-03-29:2068,2026-03-30:2423,2026-03-31:2517"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - easy_install
aliases:
  - "flipoff"
  - "magnum6actual/flipoff"
  - "將任何電視轉變為復古的翻板顯示器，無需昂貴的硬體設備。"
---

# flipoff

**1.3k** stars · **1.3k** stars/天 · 建立 1 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/magnum6actual--flipoff");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 將任何電視轉變為復古的翻板顯示器，無需昂貴的硬體設備。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.3k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 想要在活動或商業場合中使用復古翻板顯示效果的設計師或開發者。
> **一句話重點** FlipOff 是一個將復古翻板顯示器帶入現代的創意專案，無需昂貴的硬體。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/magnum6actual--flipoff");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "顯示工具" && p.file.name !== "magnum6actual--flipoff" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 顯示工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習、1 小時整合，得到簡單的翻板顯示效果，值得嘗試。

> [!abstract] 核心創新
> 提供了一個免費的翻板顯示器模擬，無需昂貴的硬體。

## 專案簡介

FlipOff 是一個免費的開源網頁應用，模擬經典的機械翻板顯示器，讓使用者能夠將電視或大型顯示器轉變為復古風格的顯示屏。使用者只需打開 `index.html`，即可在全螢幕模式下享受真實的翻板動畫和音效。每個翻板的動畫過程中，顯示的字符會經過隨機的顏色背景變化，並伴隨著真實的機械聲音，增強了使用體驗。這個工具的賣點在於其零依賴性，完全使用純 HTML/CSS/JS，無需任何框架或建置工具，且能在離線環境下運行。使用者可以透過簡單的鍵盤操作來導航顯示內容，並可自定義顯示的訊息、顏色和動畫時間。

技術上，FlipOff 使用了 Web Audio API 來播放音效，並透過 JavaScript 控制每個翻板的動畫邏輯，這使得整體體驗非常流暢。相較於其他類似的工具，FlipOff 的優勢在於其簡單的安裝過程和完整的功能，無需註冊或訂閱費用，這使得它對於喜愛復古風格的使用者來說非常具吸引力。使用者在自定義內容時，可以輕鬆修改 `js/constants.js` 文件來調整顯示的訊息和顏色，這樣的靈活性使得 FlipOff 適合各種場合的使用。社群活躍度尚可，但目前仍有一些未解決的問題，這可能影響到使用者的體驗。整體來看，FlipOff 是一個值得嘗試的創意專案，尤其適合喜愛復古風格的開發者和設計師。

**技術棧**：`JavaScript` · `CSS` · `HTML`

## 重點功能

- 真實的翻板動畫 — 每個翻板獨立動畫，顯示過程中有隨機顏色背景。
- 機械聲音效果 — 使用真實錄音的機械聲音，增強使用體驗。
- 全螢幕模式 — 按 `F` 鍵可進入全螢幕顯示，適合大型顯示器。
- 離線運行 — 無需外部依賴，完全在本地運行。
- 自定義訊息 — 編輯 `js/constants.js` 文件可修改顯示的文字和顏色。

## 快速開始

1. 克隆這個 repo
```bash
git clone https://github.com/magnum6actual/flipoff.git
```
2. 在瀏覽器中打開 `index.html`
```bash
open flipoff/index.html
```
3. 按 `F` 進入全螢幕模式
```bash
按 `F` 鍵
```

## 程式碼範例

```js
{
  "前置條件": "確保在本地環境中有 Python 3",
  "指令": "python3 -m http.server 8080",
  "預期輸出": "在瀏覽器中打開 http://localhost:8080"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1337 stars（1337/天），forks 184（13.8%），這顯示出強烈的興趣和需求。作者的背景不明，但這個專案解決了高價翻板顯示器的痛點，提供了一個免費的替代方案。沒有明顯的觸發事件，但其獨特的功能和免費的特性吸引了許多使用者。技術上，這個工具的可行性來自於現代瀏覽器對 HTML/CSS/JS 的良好支援。forks/stars 比率為 13.8%，這表示有相當一部分使用者在進行實際修改，顯示出對這個專案的實際應用需求。

## 適合誰使用

**目標受眾**：想要在活動或商業場合中使用復古翻板顯示效果的設計師或開發者。

> [!example] 使用場景
> - 活動策劃者用它來在婚禮上展示祝福語，因為其復古的外觀和音效能夠增添氛圍。
> - 小型咖啡館的老闆用它來顯示每日特價，因為這樣可以吸引顧客的注意，並且不需要額外的硬體成本。
> - 學校的老師用它來展示學生的成就，因為這樣的展示方式能夠激勵學生，並且操作簡單。

## 架構分析

FlipOff 的架構基於單頁應用的設計，所有功能都在 `index.html` 中實現。資料流方面，使用 JavaScript 控制翻板的動畫和聲音播放，並利用 DOM 操作來更新顯示內容。這種設計使得應用能夠在不同的設備上運行，從手機到 4K 顯示器都能保持良好的顯示效果。選擇純 HTML/CSS/JS 的架構使得安裝和使用變得簡單，但也限制了未來擴展的可能性，例如無法輕易加入複雜的功能或第三方庫。整體而言，這種設計適合小型專案，但在面對更大規模的應用時，可能會遇到性能瓶頸。

## 技術深入分析

FlipOff 的核心技術機制是利用純 JavaScript 來控制每個翻板的動畫和聲音播放，這樣的設計使得整個應用能夠在任何現代瀏覽器中運行。每個翻板的動畫是獨立的，透過 DOM 操作來實現，這樣的設計讓使用者能夠享受到流暢的視覺效果。效能方面，由於是純前端應用，對於資源的需求相對較低，但在顯示大量訊息時可能會出現延遲。選擇不使用任何框架或庫，雖然降低了學習曲線，但也限制了未來的擴展性。技術風險方面，隨著使用者需求的增加，可能會面臨功能擴展的挑戰，特別是在需要更複雜的動畫或互動時。整合方面，由於是純前端應用，與現有的技術生態整合相對簡單，但缺乏與其他工具的直接整合能力。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明，並且包含了簡單的範例。安裝過程非常順暢，只需打開 `index.html` 即可運行。文件目前僅提供英文版本，缺乏多語言支持，這可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 免費且開源，無需額外費用。
> - 簡單易用，無需註冊或訂閱。
> - 可在多種設備上運行，適應性強。

> [!danger] 缺點
> - 功能相對簡單，無法滿足高級需求。
> - 不支援多語言，僅限於英文。
> - 社群活躍度尚可，問題解決率低。

> [!warning] 注意事項
> - 僅支援現代瀏覽器，舊版瀏覽器可能無法正常運行。
> - 不支援多語言，僅提供英文界面。
> - 無法自動更新顯示內容，需手動編輯文件。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這是一個用於同步文件的工具，與 FlipOff 的顯示功能無關，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這是一個網路安全工具，與 FlipOff 的娛樂性質完全不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這是一個用於 Telegram 的 WebSocket 代理工具，與 FlipOff 的顯示功能無關，適用場景不同。 | 如果你的需求是進行即時通訊的代理，而非顯示內容。 | low，因為這兩者的功能和目的完全不同。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 這是一個針對 NVIDIA 硬體的優化工具，與 FlipOff 的娛樂性質完全不同。 | 如果你需要針對 NVIDIA 硬體進行性能優化，而非顯示內容。 | medium，因為需要重新考慮整體架構和需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **flipoff** | **tg-ws-proxy** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這是一個用於 Telegram 的 WebSocket 代理工具，與 FlipOff 的顯示功能無關，適用場景不同。 | 這是一個針對 NVIDIA 硬體的優化工具，與 FlipOff 的娛樂性質完全不同。 |
> | 遷移成本 | - | low，因為這兩者的功能和目的完全不同。 | medium，因為需要重新考慮整體架構和需求。 |
> | 適用場景 | 主要場景 | 如果你的需求是進行即時通訊的代理，而非顯示內容。 | 如果你需要針對 NVIDIA 硬體進行性能優化，而非顯示內容 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些瀏覽器中，音效可能無法正常播放
  - 解法：確保瀏覽器允許自動播放音訊
- **[HIGH]** 自定義訊息時，格式不正確可能導致顯示錯誤
  - 解法：仔細檢查 `js/constants.js` 中的格式
- [MEDIUM] 在某些解析度下，顯示可能不完全
  - 解法：調整 CSS 以適應不同的顯示器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型咖啡館的每日特價顯示 | 非常適合 | 簡單易用且無需額外硬體成本。 |
| 大型活動的祝福語展示 | 適合 | 能夠吸引注意並增添氛圍。 |
| 學校的成就展示 | 普通 | 雖然能展示內容，但功能較為簡單。 |
| 需要高級動畫效果的商業展示 | 不適合 | 缺乏複雜的動畫和互動功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習、1 小時整合，得到簡單的翻板顯示效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，依賴鏈簡單，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/magnum6actual--flipoff");
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
> const me = dv.page("Repos/magnum6actual--flipoff");
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
| Forks | 184 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-26 |
| Repo 大小 | 672 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/magnum6actual/flipoff) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 60
>     "CSS" : 34
>     "HTML" : 6
> ```

## 社群與生態

**社群活躍度**：社群活躍度尚可，但目前有 7 個未解決的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26）
> **活躍天數** 1 天 · **最新 commit** Initial release: FlipOff split-flap display web app

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/magnum6actual/flipoff/issues/8) | Free? | 0 | 2 |
> | [#6](https://github.com/magnum6actual/flipoff/issues/6) | Chances of getting this in Docker | 0 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # FlipOff.
> 
> **Turn any TV into a retro split-flap display.** The classic flip-board look, without the $3,500 hardware. And it's free.
> 
> ## What is this?
> 
> FlipOff is a free, open-source web app that emulates a classic mechanical split-flap (flip-board) airport terminal display — the kind you'd see at train stations and airports. It runs full-screen in any browser, turning a TV or large monitor into a beautiful retro display.
> 
> No accounts. No subscriptions. No $199 fee. Just open `index.html` and go.
> 
> ## Features
> 
> - Realistic split-flap animation with colorful scramble transitions
> - Authentic mechanical clacking sound (recorded from a real split-flap display)
> - Auto-rotating inspirational quotes
> - Fullscreen TV mode (press `F`)
> - Keyboard controls for manual navigation
> - Works offline — zero external dependencies
> - Responsive from mobile to 4K displays
> - Pure vanilla HTML/CSS/JS — no frameworks, no build tools, no npm
> 
> ## Quick Start
> 
> 1. Clone the repo
> 2. Open `index.html` in a browser (or serve with any static file server)
> 3. Click anywhere to enable audio
> 4. Press `F` for fullscreen TV mode
> 
> ```bash
> # Or serve locally:
> python3 -m http.server 8080
> # Then open http://localhost:8080
> ```
> 
> ## Keyboard Shortcuts
> 
> | Key | Action |
> |-----|--------|
> | `Enter` / `Space` | Next message |
> | `Arrow Left` | Previous message |
> | `Arrow Right` | Next message |
> | `F` | Toggle fullscreen |
> | `M` | Toggle mute |
> | `Escape` | Exit fullscreen |
> 
> ## How It Works
> 
> Each tile on the board is an independent element that can animate through a scramble sequence (rapid random characters with colored backgrounds) before settling on the final character. Only tiles whose content changes between messages animate — just like a real mechanical board.
> 
> The sound is a single recorded audio clip of a real split-flap transition, played once per message change to perfectly sync with the visual animation.
> 
> ## File Structure
> 
> ```
> flipoff/
>   index.html           — Single-page app
>   css/
>     reset.css          — CSS reset
>     layout.css         — Page layout (header, hero, board)
>     board.css          — Board container and accent bars
>     tile.css           — Tile styling and 3D flip animation
>     responsive.css     — Media queries for all screen sizes
>   js/
>     main.js            — Entry point and UI wiring
>     Board.js           — Grid manager and transition orchestration
>     Tile.js            — Individual tile animation logic
>     SoundEngine.js     — Audio playback with Web Audio API
>     MessageRotator.js  — Quote rotation timer
>     KeyboardController.js — Keyboard shortcut handling
>     constants.js       — Configuration (grid size, colors, quotes)
>     flapAudio.js       — Embedded audio data (base64)
> ```
> 
> ## Customization
> 
> Edit `js/constants.js` to change:
> - **Messages**: Add your own quotes or text
> - **Grid size**: Adjust `GRID_COLS` and `GRID_ROWS`
> - **Timing**: Tweak `SCRAMBLE_DURATION`, `STAGGER_DELAY`, etc.
> - **Colors**: Modify `SCRAMBLE_COLORS` and `ACCENT_COLORS`
> 
> ## License
> 
> MIT — do whatever you want with it.

## 延伸閱讀

相關概念：[[自動化]] · [[顯示技術]] · [[開源]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[mattprusak--autoresearch-genealogy|mattprusak/autoresearch-genealogy]]

[GitHub](https://github.com/magnum6actual/flipoff)

## 相關收錄

> [!note]- 直接競品（同子分類：顯示工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "顯示工具" AND file.name != "magnum6actual--flipoff"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "magnum6actual--flipoff"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "magnum6actual--flipoff" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "magnum6actual--flipoff"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","顯示技術","開源"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "magnum6actual--flipoff" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/magnum6actual--flipoff");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "magnum6actual--flipoff" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "magnum6actual" AND file.name != "magnum6actual--flipoff"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/magnum6actual--flipoff");
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
> const me = dv.page("Repos/magnum6actual--flipoff");
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
> const me = dv.page("Repos/magnum6actual--flipoff");
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
> const me = dv.page("Repos/magnum6actual--flipoff");
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
> const me = dv.page("Repos/magnum6actual--flipoff");
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

> **2026-03-28** — 首次收錄
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

- [[2026-03-31|2026-03-31]] — 再次上榜，2.5k stars
- [[2026-03-30|2026-03-30]] — 再次上榜，2.4k stars
- [[2026-03-29|2026-03-29]] — 再次上榜，2.1k stars
- [[2026-03-28|2026-03-28]] — 首次收錄，1.3k stars
