---
repo: CatsJuice/sticker-forge
url: https://github.com/CatsJuice/sticker-forge
owner: CatsJuice
owner_type: User
language: JavaScript
license: MIT
description: "A tactile WebGL sticker maker with rich text, image uploads, and interactive peel physics."
homepage: "http://sticker.oooo.so/"
stars: 643
stars_per_day: 71
forks: 62
open_issues: 2
created: 2026-07-20
pushed_at: 2026-07-27
first_seen: 2026-07-25
week: "2026-W30"
month: "2026-07"
category: "開發工具"
subcategory: "Web Component"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-25
use_case: "讓用戶可以創建互動式的 WebGL 貼紙，支持豐富文本和圖片上傳。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-02"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 15616
readme_length: 8548
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-25"
star_history: "2026-07-25:530,2026-07-25:530,2026-07-26:576,2026-07-26:576,2026-07-27:598,2026-07-28:617,2026-07-29:635,2026-07-30:643"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/sticker"
  - "topic/webgl"
aliases:
  - "sticker-forge"
  - "CatsJuice/sticker-forge"
  - "讓用戶可以創建互動式的 WebGL 貼紙，支持豐富文本和圖片上傳。"
---

# sticker-forge

**643** stars · **71** stars/天 · 建立 9 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/CatsJuice--sticker-forge");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`sticker` `webgl`

> [!summary] 一句話摘要
> 讓用戶可以創建互動式的 WebGL 貼紙，支持豐富文本和圖片上傳。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (71 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要創建互動式貼紙並希望提升用戶體驗的前端開發者。
> **一句話重點** Sticker Forge 的設計不僅提供了豐富的功能，還讓用戶能夠享受創作過程中的互動樂趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CatsJuice--sticker-forge");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Web Component" && p.file.name !== "CatsJuice--sticker-forge" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Web Component 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，5 小時整合，得到豐富的互動貼紙功能，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 WebGL 貼紙製作與互動物理效果結合，提供真實的撕開體驗。

## 專案簡介

Sticker Forge 是一個 WebGL 貼紙製作工具，允許用戶將文本或上傳的圖片轉換為具有觸感的貼紙。用戶可以通過拖曳貼紙的邊緣來模擬撕開的效果，並且貼紙會顯示出深度感的陰影。這個工具的核心機制是使用 Three.js 來管理 WebGL 場景，並且透過自定義著色器來實現貼紙的變形和陰影效果。用戶可以使用 `sticker.setSource()` 方法來設置貼紙的內容，支持文本和多種圖片格式，包括 PNG、JPEG、GIF 等。這個工具的賣點在於其互動性和真實感，讓用戶能夠創建出類似實體貼紙的效果。

技術上，這個專案依賴於現代的 JavaScript 框架和工具，如 React 和 Vite，並且使用了 TypeScript 來增強開發體驗。與其他貼紙製作工具相比，Sticker Forge 提供了更高的互動性和物理效果，特別是在貼紙撕開的過程中，這是許多傳統工具無法實現的。使用者可以在不同的環境中嵌入這個工具，因為它提供了 Web Component 和 API 兩種使用方式。儘管目前有 2 個開放的問題，社群的活躍度相對較高，最近的提交表明開發者持續在優化性能。這個專案的成熟度為 beta，適合小型團隊或個人開發者使用，但在生產環境中應謹慎評估其穩定性。

**技術棧**：`JavaScript` · `TypeScript` · `Three.js` · `React` · `Vite`

## 重點功能

- 互動式貼紙製作 — 用戶可以通過拖曳邊緣來模擬撕開的效果，並顯示深度感的陰影。
- 支持多種圖片格式 — 包括 PNG、JPEG、GIF 等，並可直接使用數據 URL。
- 自定義選項 — 用戶可以設置貼紙的邊框、陰影、光照等屬性，通過 `sticker.setOptions()` 方法進行調整。
- Web Component 支持 — 用戶可以輕鬆將貼紙嵌入到任何網頁中，並自動註冊自定義元素。
- 豐富的 API — 提供了多種方法如 `setSource()` 和 `destroy()` 來控制貼紙的行為和狀態。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 構建應用程式
```bash
npm run build
```

## 程式碼範例

```js
{
  "前置條件": "確保已經安裝並啟動了應用程式。",
  "程式碼": "await customElements.whenDefined('sticker-forge');\nconst sticker = document.querySelector('#sticker');\nsticker.setOptions({\n  outline: { width: 18, color: '#ffffff' },\n  shadow: { opacity: 0.22, blur: 22, distance: 16, angle: 42 },\n  lighting: {\n    direction: { x: -0.38, y: 0.52, z: 0.76 },\n    intensity: 0.8,\n    ambient: 0.35,\n    softness: 0.6,\n  },\n  peel: {\n    radius: 0.12,\n    stiffness: 0.72,\n    maxAngle: 3.55,\n    release: 'reset',\n  },\n  sound: { enabled: true, volume: 0.68 },\n  back: { color: '#f7f5f2', gloss: 0.7, roughness: 0.3 },\n  material: {\n    type: 'holographic',\n    intensity: 0.86,\n    scale: 1,\n  },\n  tilt: -3,\n});\nawait sticker.setSource({\n  type: 'text',\n  text: 'PEEL ME',\n  color: '#19191d',\n  fontFamily: 'Arial Rounded MT Bold, Arial Black, sans-serif',\n  fontWeight: 900,\n});\nsticker.addEventListener('peelchange', (event) => {\n  console.log('peel', event.detail.progress);\n});",
  "預期輸出": "用戶可以看到一個互動的貼紙，並能夠通過拖曳來模擬撕開的效果。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 643 stars（71/天），forks 62（9.6%），這顯示出相對活躍的社群參與。作者 CatsJuice 和 lunar-me 具備豐富的開發經驗，這個專案解決了用戶在創建互動貼紙時的需求，之前的工具多數缺乏真實感和互動性。近期的推廣活動和社群討論也可能促進了這個專案的曝光。技術上，WebGL 和現代 JavaScript 生態的進步使得這個工具的實現成為可能，並且 forks/stars 比率顯示出有相當比例的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要創建互動式貼紙並希望提升用戶體驗的前端開發者。

> [!example] 使用場景
> - 平面設計師用它來快速創建互動式貼紙，因為其豐富的自訂選項和即時預覽功能能大幅提高設計效率。
> - 教育工作者用它來製作教學用的互動貼紙，因為這樣的工具能吸引學生的注意力並增強學習體驗。
> - 社交媒體內容創作者用它來製作個性化的貼紙，因為其支持多種圖片格式和文本自定義的功能能讓貼紙更具吸引力。

## 架構分析

Sticker Forge 採用現代的前端架構模式，主要由 Web Component 和 API 組成。其核心使用 Three.js 來處理 WebGL 渲染，並通過自定義著色器來實現貼紙的物理效果。資料流方面，貼紙的狀態和屬性通過 API 方法進行控制，並且用戶的互動會觸發相應的事件。

選擇 Web Component 的設計使得這個工具可以輕鬆嵌入到各種框架中，這樣的設計使得開發者能夠在不同的環境中使用這個工具。這樣的架構雖然提供了靈活性，但也可能導致在某些情況下性能的瓶頸，特別是在處理高解析度圖片時。整體而言，這個設計使得 Sticker Forge 成為一個易於使用且功能強大的工具。

## 技術深入分析

Sticker Forge 的核心技術機制是基於 Three.js 的 WebGL 渲染，這使得它能夠實現高效的圖形處理和互動效果。使用自定義著色器來處理貼紙的變形和陰影，這樣的設計使得每次用戶的互動都能夠即時反映在畫面上。效能方面，這個工具能夠在大多數現代瀏覽器中流暢運行，但在處理高解析度圖片時可能會遇到性能瓶頸。選擇 JavaScript 和 TypeScript 作為開發語言，讓開發者能夠利用現有的生態系統和工具鏈，降低了學習成本和整合難度。這個專案的依賴樹相對簡單，但仍然需要注意可能的版本衝突。技術風險方面，隨著用戶數量的增加，性能和穩定性可能會受到挑戰，特別是在高負載的情況下。整合到現有的開發流程中相對容易，因為它提供了清晰的 API 和文檔，並且可以與主流框架如 React 和 Vue 進行良好的配合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了範例程式碼。安裝過程相對順暢，但需要注意 Node.js 的版本要求。整體來說，新手可以在短時間內上手並運行起來。

## 優缺點分析

> [!success] 優點
> - 提供真實的互動體驗，讓用戶能夠模擬撕開貼紙的效果。
> - 支持多種圖片格式，方便用戶上傳和使用。
> - 靈活的 API 設計，適合多種開發環境。

> [!danger] 缺點
> - 對於大型圖片的處理性能可能不佳。
> - 需要較新的 Node.js 版本，限制了使用者的環境。
> - 目前開放的問題解決率低，可能影響使用體驗。

> [!warning] 注意事項
> - 目前僅支持 Node.js 22.13 以上版本。
> - 在某些舊版瀏覽器中可能無法正常顯示 WebGL 效果。
> - 對於大型圖片的處理可能會導致性能下降。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成角色精靈，適合遊戲開發，而 Sticker Forge 更適合創建互動式貼紙。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更簡單的貼紙製作功能，但缺乏 Sticker Forge 的互動性和物理效果。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈，使用 Rust 實作，記憶體用量較少，但缺乏互動性。 | 如果你的專案需要生成角色精靈而非貼紙，且對性能有高要求。 | medium，因為需要重新設計貼紙的互動邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的貼紙製作功能，使用傳統的 HTML5 Canvas，性能較低。 | 如果只需要基本的貼紙功能，而不需要高互動性。 | low，因為功能相似，遷移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **sticker-forge** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成角色精靈，使用 Rust 實作，記憶體用量較少，但缺乏互動性。 | 提供簡單的貼紙製作功能，使用傳統的 HTML5 Canvas，性能較低。 |
> | 遷移成本 | - | medium，因為需要重新設計貼紙的互動邏輯。 | low，因為功能相似，遷移成本低。 |
> | 適用場景 | 主要場景 | 如果你的專案需要生成角色精靈而非貼紙，且對性能有高要求。 | 如果只需要基本的貼紙功能，而不需要高互動性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案和個人開發者，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些舊版瀏覽器中可能無法正常顯示 WebGL 效果。
  - 解法：建議使用最新版本的瀏覽器。
- [MEDIUM] 對於大型圖片的處理可能導致性能下降。
  - 解法：盡量使用小尺寸圖片。
- [MEDIUM] 開放的問題解決率低，可能影響使用體驗。
  - 解法：持續關注社群更新，並參與問題討論。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創意團隊的互動設計專案 | 非常適合 | 提供高互動性和豐富的自定義選項，能滿足創意需求。 |
| 大型企業的生產環境 | 不適合 | 目前處於 beta 階段，穩定性和性能尚需改善。 |
| 個人開發者的創作工具 | 適合 | 易於上手且功能豐富，適合個人項目使用。 |
| 教育機構的教學工具 | 非常適合 | 能夠吸引學生的注意力，增強學習體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，5 小時整合，得到豐富的互動貼紙功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，並且不會存取敏感資料。依賴的庫和框架均為開源且經過廣泛使用，安全性相對可靠。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Sticker Forge 可以輕鬆整合到現有的前端開發流程中，特別是與 React 和 Vue 等框架搭配使用。在一個使用 Next.js 的專案中，可以通過引入 `sticker-forge.es.js` 來使用貼紙功能，具體做法是將其嵌入到組件中並設置相應的選項。這個工具也支援與 GitHub Actions 等 CI 工具的整合，方便進行自動化部署。整合過程中，最常見的問題是版本衝突，特別是在使用不同版本的依賴時，因此建議保持依賴的版本一致。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Sticker Forge 出現之前，許多貼紙製作工具主要依賴於靜態圖像和基本的互動效果，缺乏真實感和物理效果。隨著 WebGL 技術的進步，開發者能夠創建更具互動性的應用，這使得 Sticker Forge 的出現成為可能。這個工具代表了前端開發中的一個趨勢，即將互動性和真實感融入到用戶體驗中，未來可能會有更多類似的工具出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
| Forks | 62 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-07-20 |
| 官方網站 | [Link](http://sticker.oooo.so/) |
| Repo 大小 | 15.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CatsJuice/sticker-forge) |
| Topics | `sticker` `webgl` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@fortawesome/fontawesome-svg-core` `@fortawesome/free-brands-svg-icons` `@fortawesome/free-regular-svg-icons` `@fortawesome/free-solid-svg-icons` `@fortawesome/react-fontawesome` `@huggingface/transformers` `drizzle-orm` `gifenc` `heic-decode` `modern-screenshot` `next` `prores-wasm-encoder` `react` `react-colorful` `react-dom`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 59
>     "TypeScript" : 36
>     "CSS" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@CatsJuice](https://github.com/CatsJuice) | 61 |
> | [@lunar-me](https://github.com/lunar-me) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有持續的開發和更新。
**連結**：[文件](http://sticker.oooo.so/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-26）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #12 from CatsJuice/codex/performance-cpu-memory-fps

## README 摘錄

> [!info]- 展開查看原文 README
> # Sticker Forge
> 
> Sticker Forge turns text or uploaded image artwork into a tactile WebGL sticker. Grab the
> real die-cut edge, drag it inward, and the sticker curls to reveal a satin back
> surface with depth-aware shadowing.
> 
> The repository contains two deliverables:
> 
> - an interactive builder in `app/`;
> - a framework-independent Web Component and imperative API in `lib/`.
> 
> ## Run locally
> 
> Node.js 22.13 or newer is required.
> 
> ```bash
> npm install
> npm run dev
> ```
> 
> Build the hosted app and both reusable library bundles with:
> 
> ```bash
> npm run build
> ```
> 
> The reusable files are emitted to `public/embed/`:
> 
> - `sticker-forge.es.js` — an ES module that auto-registers ``;
> - `sticker-forge.iife.js` — a classic script exposing `window.StickerForge`;
> - `sticker-forge.d.ts` — public TypeScript declarations.
> 
> ## GitHub Pages
> 
> Pushes to `main` deploy a static export through the GitHub Pages workflow at
> `.github/workflows/deploy-pages.yml`. Build the same artifact locally with:
> 
> ```bash
> npm run build:pages
> ```
> 
> The production Pages site uses `https://sticker.oooo.so`. Its DNS record is a
> `CNAME` for the `sticker` subdomain pointing to `catsjuice.github.io`.
> 
> The provided peel sound is trimmed, converted to mono, lightly high-passed, and
> inlined into both JavaScript bundles, so it does not need to be copied or hosted
> as a separate asset. The untouched source recording remains in `lib/assets/`.
> 
> ## Copy-paste Web Component
> 
> Copy both the ES bundle and this markup into any page. The bundle registers the
> element automatically; the idempotent `defineStickerForge()` helper is also
> exported and returns immediately (`void`).
> 
> ```html
> 
>   await customElements.whenDefined("sticker-forge");
>   const sticker = document.querySelector("#sticker");
> 
>   sticker.setOptions({
>     outline: { width: 18, color: "#ffffff" },
>     shadow: { opacity: 0.22, blur: 22, distance: 16, angle: 42 },
>     lighting: {
>       direction: { x: -0.38, y: 0.52, z: 0.76 },
>       intensity: 0.8,
>       ambient: 0.35,
>       softness: 0.6,
>     },
>     peel: {
>       radius: 0.12,
>       stiffness: 0.72,
>       maxAngle: 3.55,
>       release: "reset",
>     },
>     sound: { enabled: true, volume: 0.68 },
>     back: { color: "#f7f5f2", gloss: 0.7, roughness: 0.3 },
>     material: {
>       type: "holographic",
>       intensity: 0.86,
>       scale: 1,
>     },
>     tilt: -3,
>   });
> 
>   // setSource() is async: the promise settles after the texture is ready.
>   await sticker.setSource({
>     type: "text",
>     text: "PEEL ME",
>     color: "#19191d",
>     fontFamily: "Arial Rounded MT Bold, Arial Black, sans-serif",
>     fontWeight: 900,
>   });
> 
>   sticker.addEventListener("peelchange", (event) => {
>     console.log("peel", event.detail.progress);
>   });
> 
> ```
> 
> See [`examples/embed.html`](examples/embed.html) for a complete standalone page.
> 
> ## Imperative JavaScript API
> 
> If a custom element does not fit the host framework, mount the renderer into a
> normal element. `createSticker()` is asynchronous and resolves to the control
> object; renderer events are dispatched from the target element.
> 
> ```html
> 
>   import { createSticker } from "/embed/sticker-forge.es.js";
> 
>   const target = document.querySelector("#sticker-target");
>   target.addEventListener("peelend", (event) => {
>     console.log("released at", event.detail.progress);
>   });
> 
>   const sticker = await createSticker(target, {
>     source: { type: "text", text: "PEEL ME", color: "#19191d" },
>     peel: { radius: 0.12, maxAngle: 3.55 },
>     sound: { enabled: true, volume: 0.68 },
>   });
> 
>   // Call before permanently removing the target in an SPA.
>   // sticker.destroy();
> 
> ```
> 
> For classic scripts, load `sticker-forge.iife.js` and call
> `await StickerForge.createSticker(...)`, as demonstrated by the standalone
> example.
> 
> ## Inputs
> 
> Text sources accept `text`, `color`, `fontFamily`, and `fontWeight`. The engine
> waits for the requested browser font before rebuilding the texture.
> 
> Image sources accept any browser-decodable image URL, including data URLs made
> from PNG, WebP, JPEG, GIF, AVIF, or SVG uploads:
> 
> ```js
> await sticker.setSource({ type: "image", src: imageDataUrl, name: file.name });
> ```
> 
> The engine inspects decoded pixel alpha. Transparent images use their alpha
> silhouette for the die-cut outline; fully opaque images use their rectangular
> image boundary.
> 
> Legacy SVG sources also accept raw markup; pre-sanitization is not required:
> 
> ```js
> await sticker.setSource({ type: "svg", svg: svgMarkup });
> ```
> 
> SVG input is processed locally. The library always removes scripts, event
> attributes, `foreignObject`, and external URL references before rasterization.
> `sanitizeSvgMarkup(svgMarkup)` is exported when the sanitized markup itself is
> needed.
> 
> ## API
> 
> The custom element and the object returned by the awaited `createSticker()`
> promise expose the same control surface:
> 
> ```ts
> setSource(source): Promise
> setOptions(partialOptions): void
> reset(): void
> resize(): void
> getState(): StickerState
> destroy(): void
> ```
> 
> For the imperative API, listen on the target element passed to
> `createSticker()`. For the Web Component, listen on ``; its peel
> and error events bubble across the shadow boundary.
> 
> | Event | `event.detail` |
> | --- | --- |
> | `ready` | Imperative target: `{ width, height }`; Web Component: no detail |
> | `peelstart` | `{ amount, progress, origin }` |
> | `peelchange` | `{ amount, progress, direction? }` |
> | `peelend` | `{ amount, progress, willReset }` |
> | `detachcomplete` | `{ progress: 1 }` |
> | `error` | `{ message }` |
> 
> `amount` and `progress` are the same normalized value from `0` (flat) to `1`
> (fully lifted). `origin` and `direction` are `{ x, y }` points in sticker-local
> coordinates.
> 
> `peel.radius` is normalized to the sticker's short side (`0.12` means 12%),
> while `peel.maxAngle` is expressed in radians. `lighting.direction` is a
> normalized view-space vector pointing from the sticker toward the incoming
> directional light; it drives surface shading and projected-shadow direction
> together. `lighting.intensity` supports `0..1.5`, while
> `lighting.ambient` and `lighting.softness` use `0..1`. Shadow blur/distance use
> CSS pixels, `tilt` is expressed in degrees, and `peel.grabWidth` uses CSS pixels
> at 100% scale and scales with the sticker.
> 
> The bundled recording is treated as an audio sprite rather than a timeline.
> Sticker Forge separates its lift, light crackle, strong tear, and release
> material, compensates for their different levels, and drives randomized grains from
> the drag velocity and acceleration. A slow peel is sparse, a fast peel is denser
> and brighter, holding still is silent, and reattaching uses a quieter low-passed
> texture instead of reversed audio. `progress` is used only for the initial lift
> and final release events. Set `sound.enabled` to `false` or `sound.volume` to `0`
> to mute it. Provide `sound.src` to replace the bundled sound with another
> browser-decodable audio URL; custom recordings use a duration-relative generic
> slice profile.
> 
> `setOptions()` deep-merges nested option groups. Prefer the awaitable
> `setSource()` when changing artwork; passing `source` through `setOptions()`
> starts the same rebuild but cannot be awaited. `destroy()` should be called
> before a single-page application permanently removes an imperative sticker
> instance. A disconnected `` cleans itself up automatically.
> 
> ### Front materials
> 
> Set `material.type` to `original`, `holographic`, `glitter`, or `reflective`.
> `original` is the default and uses the same front rendering as Sticker Forge
> before selectable finishes were introduced. The other three finishes are
> procedural, respond to the live surface normal while peeling, and remain
> deterministic in Gallery previews and recorded exports.
> 
> Use `material.intensity` in the `0..1` range and `material.scale` to resize
> procedural detail. `material.seed` keeps glitter flakes and similar detail
> stable between frames.
> 
> ## Rendering notes
> 
> - Three.js manages the WebGL scene, camera, geometry, and depth buffer.
> - Custom shaders keep the attached region rigid and bend only the peel front.
> 

## 延伸閱讀

相關概念：[[WebAssembly]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/CatsJuice/sticker-forge) · [官方網站](http://sticker.oooo.so/)

## 相關收錄

> [!note]- 直接競品（同子分類：Web Component）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Web Component" AND file.name != "CatsJuice--sticker-forge"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "CatsJuice--sticker-forge"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "CatsJuice--sticker-forge" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "CatsJuice--sticker-forge"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["WebAssembly","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "CatsJuice--sticker-forge" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CatsJuice--sticker-forge" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CatsJuice" AND file.name != "CatsJuice--sticker-forge"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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
> const me = dv.page("Repos/CatsJuice--sticker-forge");
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

> **2026-07-25** — 首次收錄
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

- [[2026-07-26|2026-07-26]] — 再次上榜，576 stars
- [[2026-07-25|2026-07-25]] — 首次收錄，530 stars
