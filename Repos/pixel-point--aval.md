---
repo: pixel-point/aval
url: https://github.com/pixel-point/aval
owner: pixel-point
owner_type: Organization
language: TypeScript
license: MIT
description: "A new open-source format for interactive video on the web, with a built-in state machine, frame-accurate transitions, and packed-alpha transparency."
homepage: "https://pixelpoint.io/aval"
stars: 1217
stars_per_day: 243
forks: 65
open_issues: 2
created: 2026-07-13
pushed_at: 2026-07-18
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "視頻處理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "提供一種新的互動視頻格式，支持狀態機、精確過渡和透明度。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-22"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 16547
readme_length: 4612
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:1069,2026-07-18:1170,2026-07-19:1217"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "aval"
  - "pixel-point/aval"
  - "提供一種新的互動視頻格式，支持狀態機、精確過渡和透明度。"
---

# aval

**1.1k** stars · **356** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/pixel-point--aval");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供一種新的互動視頻格式，支持狀態機、精確過渡和透明度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (356 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在網頁上實現互動視頻的前端開發者和數位內容創作者。
> **一句話重點** AVAL 的創新之處在於其結合了狀態機和視頻編碼，為網頁動畫提供了更高的互動性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--aval");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻處理" && p.file.name !== "pixel-point--aval" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的互動視頻處理能力，值得嘗試。

> [!abstract] 核心創新
> AVAL 提供了一種新的互動視頻格式，具有內建的狀態機和精確的幀過渡。

## 專案簡介

AVAL 是一個針對網頁的互動視頻格式，設計上支持短片預渲染動作、持續循環、命名應用狀態、觸發器、邊界過渡和打包透明度。用戶可以透過 `npx avl init my-motion` 指令快速建立一個新項目，並使用 `npx avl compile motion.json --out dist/motion` 來編譯生成多種編碼格式的視頻文件。這種設計使得每個編碼格式都能保持相同的狀態圖和時間設定，從而簡化了多編碼支持的流程。AVAL 的核心在於其狀態機和編碼模型，使用者可以在不同的編碼格式（如 AV1、VP9、H.265 和 H.264）之間進行選擇，並且每種編碼格式都可以根據特定的品質設置進行調整。

這種靈活性使得 AVAL 在處理視頻時能夠達到更高的效能和質量。與其他視頻格式相比，AVAL 的優勢在於其強大的狀態管理和透明度支持，這使其特別適合需要動態交互的網頁應用。使用 AVAL 時，開發者需要 Node.js 22.12.0 或更新版本，並且可以利用其提供的多個包來擴展功能。這個專案目前仍在活躍開發中，社群反饋和問題解決的速度尚未明確，可能會影響使用者的體驗。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML`

## 重點功能

- 狀態機支持 — 允許用戶定義多個動畫狀態並在它們之間切換。
- 精確過渡 — 提供幀精確的動畫過渡，確保流暢的用戶體驗。
- 多編碼格式支持 — 同時生成 AV1、VP9、H.265 和 H.264 格式的視頻，方便不同瀏覽器的兼容性。
- 打包透明度 — 支持 RGBA 透明度，讓視頻背景處理更靈活。
- 自動化編譯 — 使用 `npx avl` 命令快速初始化和編譯項目，簡化開發流程。

## 快速開始

1. 安裝必要的包
```bash
npm install @pixel-point/aval-element@1.0.0
```
2. 安裝編譯器
```bash
npm install --save-dev @pixel-point/aval-compiler@1.0.0
```
3. 初始化新項目
```bash
npx avl init my-motion
```
4. 進入項目目錄
```bash
cd my-motion
```
5. 啟動開發伺服器
```bash
npm run dev
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 @pixel-point/aval-element 和 @pixel-point/aval-compiler",
  "指令": "npx avl compile motion.json --out dist/motion",
  "預期輸出": "dist/motion/ 目錄下生成 av1.avl、vp9.avl、h265.avl 和 h264.avl 文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1069 stars（356/天），forks 62（5.8%），顯示出強烈的興趣。作者 lnikell 之前在開源領域有一定的貢獻，這個專案解決了互動視頻格式在網頁應用中的不足，特別是對於狀態機和透明度的支持。雖然目前的問題解決率為 0%，但這也反映出專案仍在早期階段，開發者可能需要耐心等待改進。這個工具的出現正好契合了現代網頁應用對於高效能視頻處理的需求，特別是在互動性和用戶體驗上。

## 適合誰使用

**目標受眾**：需要在網頁上實現互動視頻的前端開發者和數位內容創作者。

> [!example] 使用場景
> - 前端工程師用它來創建互動式網頁動畫，因為 AVAL 支持精確的狀態管理和透明度，能夠提升用戶體驗。
> - 遊戲開發者用它來實現短片過場動畫，因為其支持多種編碼格式，能夠在不同設備上保持一致的畫質。
> - 數位內容創作者用它來製作可重用的動畫素材，因為 AVAL 的編碼模型讓素材的管理和重用變得更加高效。

## 架構分析

AVAL 的架構基於多包管理，使用 Node.js 作為運行環境，並依賴 FFmpeg 進行視頻編碼。這種設計使得開發者能夠靈活地選擇不同的編碼格式，並能夠在不同的瀏覽器中實現兼容性。資料流方面，AVAL 透過狀態機管理動畫的不同狀態，並根據用戶的操作進行即時切換。

這樣的設計使得動畫的表現更加流暢，但也增加了開發的複雜度。選擇 Node.js 作為基礎語言的好處在於其強大的生態系統和社群支持，但可能會對不熟悉 JavaScript 的開發者造成學習障礙。整體而言，AVAL 的架構設計旨在提供高效能的視頻處理能力，但在擴展性上可能會受到 Node.js 的限制。

## 技術深入分析

AVAL 的核心技術機制在於其狀態機和編碼模型，使用者可以透過定義不同的狀態來控制動畫的行為。這些狀態可以根據用戶的操作進行即時切換，從而實現更流暢的動畫效果。效能方面，AVAL 支持多種編碼格式，並且能夠根據不同的需求進行調整，這使得它能夠在不同的設備上保持一致的畫質。設計上，選擇 Node.js 使得開發者能夠利用其豐富的生態系統，但也可能對不熟悉 JavaScript 的開發者造成挑戰。

AVAL 的依賴關係相對簡單，主要依賴於 FFmpeg 進行視頻編碼，這降低了使用的門檻。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理高解析度視頻時。整合方面，AVAL 可以與現有的前端框架如 React 和 Vue 進行整合，但目前尚未提供專門的組件，這可能會影響其在大型項目中的應用。整體而言，AVAL 的設計理念是提供一個靈活且高效的視頻處理工具，但在實際應用中仍需進一步優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指令和快速入門指南，讓新手能夠在短時間內上手。安裝過程中需要注意 Node.js 版本的要求，否則可能會遇到問題。整體而言，對於有基本 JavaScript 知識的開發者來說，30 分鐘內可以順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多種編碼格式，提升了兼容性。
> - 內建狀態機功能，讓動畫管理更靈活。
> - 提供精確的幀過渡，增強用戶體驗。

> [!danger] 缺點
> - 目前社群活躍度較低，問題解決速度慢。
> - 安裝過程對於新手來說可能較為複雜。
> - 在 Windows 環境中可能遇到編譯問題。

> [!warning] 注意事項
> - 目前僅支援 Node.js 22.12.0 或更新版本。
> - 在 Windows 環境中可能遇到編譯錯誤，特別是與 POSIX 相關的操作。
> - 目前社群活躍度較低，開發者可能需要自行解決問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一種基於精靈的動畫生成工具，但不支持狀態機功能，適合簡單動畫需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於視頻編輯和合成，缺乏 AVAL 的互動性和狀態管理功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於編碼轉換，無法提供 AVAL 的視頻互動特性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於精靈動畫的生成，使用較簡單的動畫框架，缺乏 AVAL 的狀態機功能。 | 如果你的項目主要是基於精靈動畫且不需要複雜的狀態管理，這是一個不錯的選擇。 | low，因為兩者的使用方式相對簡單，轉換成本不高。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於視頻編輯和合成，提供較為完整的編輯工具，但不支持 AVAL 的互動性。 | 如果你的需求主要是視頻編輯而非互動，這個工具會更合適。 | medium，因為需要重新調整編輯流程和工具使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **aval** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於精靈動畫的生成，使用較簡單的動畫框架，缺乏 AVAL 的狀態機功能。 | 專注於視頻編輯和合成，提供較為完整的編輯工具，但不支持 AVAL 的互動性。 |
> | 遷移成本 | - | low，因為兩者的使用方式相對簡單，轉換成本不高。 | medium，因為需要重新調整編輯流程和工具使用習慣。 |
> | 適用場景 | 主要場景 | 如果你的項目主要是基於精靈動畫且不需要複雜的狀態管理，這是一 | 如果你的需求主要是視頻編輯而非互動，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境中編譯時可能會遇到 IO_FAILED 錯誤
  - 解法：使用 WSL 或在 POSIX 環境中進行編譯
- [MEDIUM] 移動 Safari 上可能無法正確加載圖形
  - 解法：目前無法解決，建議使用其他瀏覽器進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的互動網站 | 非常適合 | AVAL 提供的狀態機功能能夠提升用戶互動性，適合快速開發。 |
| 大型遊戲開發團隊 | 普通 | 雖然 AVAL 提供了多種編碼格式，但可能不符合大型項目的需求。 |
| 個人開發者的短片動畫項目 | 非常適合 | 簡單的安裝和使用流程使得個人開發者能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的互動視頻處理能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：AVAL 本身不需要高權限運行，且不會存取敏感資料，但依賴的 FFmpeg 需謹慎管理，避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AVAL 最常與 Node.js 和 FFmpeg 搭配使用，通常在開發和編譯階段進行整合。在使用 AVAL 時，開發者可以在 Node.js 環境中使用 `npx avl` 指令進行初始化和編譯，並透過 HTML 和 JavaScript 進行視頻的嵌入和播放。與主流的前端框架如 React 和 Vue 整合時，開發者需要自行處理組件的註冊和狀態管理，這可能會增加整合的難度。整合過程中，最常見的問題是編譯環境的配置，特別是在不同操作系統之間的兼容性問題。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--aval");
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
> const me = dv.page("Repos/pixel-point--aval");
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
| 最後推送 | 2026-07-16 |
| 建立日期 | 2026-07-13 |
| 官方網站 | [Link](https://pixelpoint.io/aval) |
| Repo 大小 | 16.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pixel-point/aval) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 94
>     "JavaScript" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lnikell](https://github.com/lnikell) | 30 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有 commit 活動，但問題解決率為 0%。
**連結**：[文件](https://pixelpoint.io/aval/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-16）
> **活躍天數** 3 天 · **最新 commit** refactor: code improvements

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/pixel-point/aval/issues/3) | Mobile Safari Graphics Issue - Not Loading | 0 | 0 |
> | [#2](https://github.com/pixel-point/aval/issues/2) | avl compile fails on Windows with IO_FAILED: syncDirectory() | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # AVAL
> 
> AVAL is a web format and runtime for short prerendered motion with continuous
> loops, named application states, authored triggers, bounded transitions,
> reversals, and packed transparency.
> 
> One logical animation is published as a codec bundle. Each codec gets its own
> AVAL 1.0 file—AV1, VP9, H.265/HEVC, or H.264—and the browser selects the first
> ordered `` with a supported rendition. The state graph and authored
> timing are identical in every file.
> 
> ## Five-minute start
> 
> ```sh
> npm install @pixel-point/aval-element@1.0.0
> npm install --save-dev @pixel-point/aval-compiler@1.0.0
> npx avl init my-motion
> cd my-motion
> npm install
> npm run dev
> ```
> 
> Here `npx avl` resolves the `avl` executable from the compiler package
> installed on the preceding line. The generated starter contains its RGBA
> frames, project 1.0 file, four ordered encoding policies, fallback markup, and
> watch workflow.
> 
> For a normal build, the compiler publishes a directory rather than a single
> output file:
> 
> ```sh
> npx avl compile motion.json --out dist/motion
> ```
> 
> ```text
> dist/motion/
>   av1.avl
>   vp9.avl
>   h265.avl
>   h264.avl
>   build.json
> ```
> 
> ## Browser integration
> 
> Use literal direct-child sources in preference order. The exact codec strings
> come from `build.json`; the values below are illustrative.
> 
> ```html
> 
>   
>   
>   
>   
>   
> 
> ```
> 
> ```js
> // motion.js, resolved by a package-aware web build
> import { defineAvalElement } from "@pixel-point/aval-element";
> defineAvalElement();
> ```
> 
> The `` host does not carry `src`; URLs belong to each codec
> candidate. If no candidate is supported, the author-owned fallback remains
> visible. Applications can select any authored state without media seeking
> code:
> 
> ```js
> const motion = document.querySelector("aval-player");
> await motion?.setState("success");
> ```
> 
> ## Codec and compression model
> 
> A project has an ordered, codec-major `encodings` array. Each codec owns its
> rendition ladder and constant-quality CRF settings. H.264 and H.265 expose
> compression presets; VP9 exposes `deadline` and `cpuUsed`; AV1 exposes
> `bitDepth`, `cpuUsed`, `tiles`, `rowMt`, and `threads`. Slower modes such as
> `veryslow`, VP9 `best`, and AV1 `cpuUsed: 0` are supported.
> 
> Encoding has no default wall-clock media timeout. Builds that need a deadline
> can opt in with `--media-timeout-ms`. The compiler records sanitized tool
> invocations, exact MIME codec strings, per-file hashes, and copyable source
> markup in `build.json`.
> 
> The compiler uses caller-installed FFmpeg and FFprobe with the requested
> `libx264`, `libx265`, `libvpx-vp9`, and `libaom-av1` encoders. It bundles and
> downloads no native codec tool. Codec, patent, source-media, and distribution
> obligations remain the publisher's responsibility.
> 
> ## Packages
> 
> - `@pixel-point/aval-graph`: deterministic state and route engine.
> - `@pixel-point/aval-format`: strict AVAL wire 1.0 parser, validator, and writer.
> - `@pixel-point/aval-compiler`: project 1.0 authoring API and bundle compiler.
> - `@pixel-point/aval-player-web`: bounded loader, codec probing, decoder
>   scheduling, renderer, and page resource management.
> - `@pixel-point/aval-element`: markup-first public browser component.
> 
> The element package is SSR-safe. Its root exports explicit registration;
> `@pixel-point/aval-element/auto` is the opt-in automatic-registration entry.
> 
> ## Develop and verify
> 
> Node.js 22.12.0 or newer is required.
> 
> ```sh
> npm ci --ignore-scripts
> npm run typecheck
> npm run test:unit
> npm run build
> npm run test:browser:reference
> ```
> 
> Browser animation is capability-probed in authored source order. Unsupported
> codec candidates fall through to the next ``; when none can run, the
> element keeps its optional host-owned fallback slot visible.
> 
> ## TODO
> 
> - React dedicated component and API.  
> - More browser tests.  
> - Render some cool stuff in 3D for the demo instead of that AI-generated loop that I was not able to make look the way I wanted to actually showcase the uninterruptible animation.
> - Runtime bundle size optimization
> 
> ## Documentation
> 
> - [Quick start](docs/quick-start.md)
> - [States and triggers](docs/states-and-triggers.md)
> - [Element API](docs/element-api.md)
> - [Compiler](docs/compiler.md)
> - [Project schema 1.0](docs/project/1.0.md)
> - [Wire format 1.0](docs/format/1.0.md)
> - [Preparing video and authoring states](docs/compiler/authoring-video-and-states.md)
> - [Network and integrity](docs/network-and-integrity.md)
> - [Accessibility and reduced motion](docs/accessibility-and-motion.md)
> - [Performance and budgets](docs/performance-and-budgets.md)
> - [Browser support](docs/browser-support.md)
> - [Versioning](docs/versioning.md)
> - [Security policy](SECURITY.md)

## 延伸閱讀

相關概念：[[視頻編碼]] · [[互動設計]] · [[狀態機]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[pengchujin--jzsub|pengchujin/jzsub]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/pixel-point/aval) · [官方網站](https://pixelpoint.io/aval)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻處理" AND file.name != "pixel-point--aval"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "pixel-point--aval"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "pixel-point--aval" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "pixel-point--aval"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["視頻編碼","互動設計","狀態機"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pixel-point--aval" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pixel-point--aval");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pixel-point--aval" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pixel-point" AND file.name != "pixel-point--aval"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pixel-point--aval");
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
> const me = dv.page("Repos/pixel-point--aval");
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
> const me = dv.page("Repos/pixel-point--aval");
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
> const me = dv.page("Repos/pixel-point--aval");
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
> const me = dv.page("Repos/pixel-point--aval");
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

> **2026-07-17** — 首次收錄
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

- [[2026-07-19|2026-07-19]] — 再次上榜，1.2k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，1.2k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，1.1k stars
