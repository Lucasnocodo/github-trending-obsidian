---
repo: GENEXIS-AI/chromex
url: https://github.com/GENEXIS-AI/chromex
owner: GENEXIS-AI
owner_type: User
language: TypeScript
license: MIT
description: "A Codex-powered Chrome side-panel assistant for page context, tabs, voice, and image workflows."
homepage: ""
stars: 947
stars_per_day: 95
forks: 89
open_issues: 2
created: 2026-04-28
pushed_at: 2026-05-08
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "Chrome 擴展"
release_tag: "v0.1.6"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供一個 Codex 驅動的 Chrome 側邊面板助手，支援頁面上下文、標籤、語音和影像工作流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-12"
contributor_count: 5
engagement: "low"
issue_close_rate: 67
repo_size_kb: 4670
readme_length: 8929
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:687,2026-05-01:687,2026-05-02:738,2026-05-02:738,2026-05-03:755,2026-05-03:755,2026-05-04:772,2026-05-05:819,2026-05-05:819,2026-05-06:838,2026-05-07:846,2026-05-08:900,2026-05-09:947"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "chromex"
  - "GENEXIS-AI/chromex"
  - "提供一個 Codex 驅動的 Chrome 側邊面板助手，支援頁面上下文、標籤、語音和影像工作流程。"
---

# chromex

**947** stars · **95** stars/天 · 建立 10 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/GENEXIS-AI--chromex");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.6`

> [!summary] 一句話摘要
> 提供一個 Codex 驅動的 Chrome 側邊面板助手，支援頁面上下文、標籤、語音和影像工作流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (95 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Chrome 中使用 Codex 進行多模態交互的開發者和研究人員。
> **一句話重點** Chromex 的設計讓用戶能夠在不暴露敏感信息的情況下，充分利用 Codex 的強大功能進行多模態交互。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Chrome 擴展" && p.file.name !== "GENEXIS-AI--chromex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Chrome 擴展 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習、2 小時整合，得到強大的多模態交互能力，值得嘗試。

> [!abstract] 核心創新
> Chromex 提供了一個安全的多模態工作流，將 Codex 的強大功能無縫集成到 Chrome 瀏覽器中。

## 專案簡介

Chromex 是一個基於 Chrome MV3 的側邊面板助手，透過本地原生橋接將 Chrome 與 Codex 連接。用戶可以與當前頁面、選定的標籤、上傳的文件、語音輸入和影像進行互動，並在不將憑證存儲於擴展中的情況下執行各種工作流程。核心功能包括與網頁內容對話、總結和比較文章、編輯或生成影像，以及即時翻譯和實時轉錄等。使用者可以透過簡單的指令，如 `npm install` 和 `npm run build` 來安裝和運行擴展，並在 Chrome 中加載未打包的擴展。這個工具的賣點在於其強大的多模態工作流程，讓用戶能夠在不同的上下文中獲取和處理信息。

技術上，Chromex 使用 TypeScript 和 JavaScript，並依賴於本地橋接來處理與 Codex 的交互，這樣的設計使得用戶的數據安全性得以保障，因為不會將敏感信息存儲在擴展中。與其他工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Chromex 提供了更為直觀的使用界面和更強的多模態支持，特別適合需要即時翻譯和多種文件格式處理的用戶。實際使用中，Chromex 能夠處理的資料量相對較大，但仍需注意本地橋接的配置和 Codex CLI 的安裝，這可能會對新手造成一定的困難。整體來看，這是一個處於 beta 階段的工具，適合對多模態工作流有需求的開發者和研究人員，未來可能會進一步增強其功能和穩定性。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML`

## 重點功能

- 即時翻譯和實時轉錄 — 支援即時翻譯和轉錄功能，讓用戶能夠在多語言環境中工作。
- 多模態工作流 — 支援與網頁內容、上傳的文件和影像進行交互，提供靈活的工作方式。
- 安全性設計 — 不將敏感信息存儲在擴展中，確保用戶的數據安全。
- 自定義配置 — 用戶可以選擇語言和個性化設置，提升使用體驗。
- 多文件格式支持 — 能夠處理各種文件格式，如 PDF、DOCX、影像等，滿足不同需求。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/GENEXIS-AI/chromex.git && cd chromex && npm install
```
2. 構建專案
```bash
npm run build
```
3. 安裝本地橋接
```bash
node scripts/install-native-host.mjs
```

## 程式碼範例

```ts
[
  "# 前置條件：安裝 Node.js 和 Codex CLI",
  "npm install -g @openai/codex",
  "# 預期輸出：顯示 Codex CLI 的版本號"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 947 stars（95/天），forks 89（9.4%），顯示出穩定的增長趨勢。這個專案由 GenexisAI CHOI 發起，解決了在 Chrome 瀏覽器中整合 Codex 進行多模態交互的需求，之前的解決方案往往缺乏靈活性和安全性。最近的推廣活動和社群討論可能也促進了其曝光率。這個工具的設計使得用戶能夠在不暴露敏感信息的情況下，利用 Codex 的強大功能進行工作，這在當前的技術生態中是非常重要的。forks/stars 比率為 9.4%，顯示出相對較高的實際使用和修改潛力。

## 適合誰使用

**目標受眾**：需要在 Chrome 中使用 Codex 進行多模態交互的開發者和研究人員。

> [!example] 使用場景
> - 研究人員用它來即時翻譯學術文章，因為其即時翻譯和實時轉錄功能能夠大幅提升工作效率。
> - 內容創作者用它來生成和編輯影像，因為其與 Codex 的集成使得影像處理變得更加簡單和直觀。
> - 開發者用它來快速獲取網頁內容的摘要，因為能夠即時與網頁互動，節省了大量的手動查找時間。

## 架構分析

Chromex 的架構由四個主要組件組成：Chrome 擴展、原生橋接守護進程、Codex 應用伺服器和共享類型。這樣的設計使得用戶可以在 Chrome 瀏覽器中直接與 Codex 進行交互，並且保證了數據的安全性，因為敏感信息不會存儲在擴展中。資料流從 Chrome 擴展經過原生消息主機，然後通過本地橋接與 Codex 伺服器進行通信。這種設計的代價在於需要用戶手動配置本地橋接，這對於新手來說可能會造成一定的困難。擴展的可擴展性在於其支持多種文件格式和即時翻譯功能，但在高並發的情況下，可能會面臨性能瓶頸。

## 技術深入分析

Chromex 的核心技術機制是通過原生橋接將 Chrome 擴展與 Codex 連接，這樣的設計使得用戶能夠在瀏覽器中直接進行多模態交互。這個架構能夠處理大量的資料，並且支持即時翻譯和多種文件格式的交互，這對於需要快速處理信息的用戶來說是非常有利的。設計上選擇 TypeScript 和 JavaScript 來實現擴展，這使得開發和維護變得更加靈活，但也增加了依賴的複雜性。隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高並發的情況下。這個工具的整合難度相對較低，但對於新手來說，配置本地橋接的過程可能會造成一定的困難。整體來看，Chromex 是一個具有潛力的工具，未來可能會進一步增強其功能和穩定性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和配置指引，對於新手來說相對清晰。安裝過程中可能會遇到依賴問題，但整體流程順暢。提供了多種語言的支持，讓不同語言的用戶都能夠使用。總體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 強大的多模態支持，能夠處理多種文件格式和即時翻譯。
> - 安全性高，不會將敏感信息存儲在擴展中。
> - 用戶友好的界面，支持多語言和自定義配置。

> [!danger] 缺點
> - 需要手動配置本地橋接，對新手不友好。
> - 目前僅支援 Chrome，缺乏其他瀏覽器的支持。
> - 安裝過程可能會遇到依賴問題，需謹慎處理。

> [!warning] 注意事項
> - 需要安裝 Node.js 20 LTS 或更新版本。
> - 目前僅支援 Chrome 瀏覽器，尚未有 Firefox 版本。
> - 對於新手來說，配置本地橋接可能會有一定的難度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的多模態交互功能，但缺乏即時翻譯和轉錄支持，適合對影像生成有需求的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文本生成和處理，但不支持多種文件格式的直接交互，適合需要文本處理的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於影像生成和處理，與 Chromex 的多模態交互相比，缺乏即時翻譯功能。 | 如果你的團隊主要需要影像生成而非文本處理，則應選擇此工具。 | medium，因為需要重新設計工作流以適應不同的功能集。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文本生成，與 Chromex 的多模態支持相比，功能範圍有限。 | 如果你的需求主要集中在文本生成而非多模態交互，則此工具更為合適。 | low，因為文本生成的工作流相對簡單，易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chromex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於影像生成和處理，與 Chromex 的多模態交互相比，缺乏即時翻譯功能。 | 專注於文本生成，與 Chromex 的多模態支持相比，功能範圍有限。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流以適應不同的功能集。 | low，因為文本生成的工作流相對簡單，易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要需要影像生成而非文本處理，則應選擇此工具。 | 如果你的需求主要集中在文本生成而非多模態交互，則此工具更為合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上安裝 Codex CLI 可能會遇到 TLS 證書問題，導致安裝失敗。
  - 解法：使用 PowerShell 手動安裝並設定 Codex 的路徑。
- [MEDIUM] 如果 Chrome 顯示舊的 UI，可能是因為擴展未正確加載。
  - 解法：重新運行 npm run build 並重新加載擴展。
- [MEDIUM] 在某些情況下，頁面上下文可能無法獲取。
  - 解法：確保從目標標籤開啟 Chromex，並批准 Chrome 的站點權限提示。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要即時翻譯的國際團隊 | 非常適合 | 即時翻譯和實時轉錄功能能夠提升跨語言溝通的效率。 |
| 專注於影像生成的創意團隊 | 適合 | 提供強大的影像編輯和生成能力，能夠滿足創意需求。 |
| 需要處理大量學術文章的研究小組 | 普通 | 雖然有總結功能，但對於特定學術格式的支持可能不夠完善。 |
| 小型企業的日常辦公需求 | 不適合 | 安裝和配置過程對於非技術用戶來說可能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習、2 小時整合，得到強大的多模態交互能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料，依賴鏈相對安全，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
| Forks | 89 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-05-08 |
| 建立日期 | 2026-04-28 |
| Repo 大小 | 4.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GENEXIS-AI/chromex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/chrome` `@types/node` `esbuild` `jszip` `playwright-core` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "CSS" : 3
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GENEXIS-AI](https://github.com/GENEXIS-AI) | 40 |
> | [@pomcro](https://github.com/pomcro) | 19 |
> | [@eramax](https://github.com/eramax) | 1 |
> | [@1939869736luosi](https://github.com/1939869736luosi) | 1 |
> | [@lidge-jun](https://github.com/lidge-jun) | 1 |

**最新版本**：v0.1.6 — Chromex v0.1.6 (2026-05-08)

> [!info]- Release Notes
> ## Changes
> - Fixed live transcription stop handling so queued audio frames are invalidated after stop.
> - Added a Live interpretation output-volume control that only affects translated audio playback.
> - Improved tab-audio suppression for translation/live mode capture.
> 
> ## Verification
> - npm test
> - npm run typecheck
> - npm run build
> - npm run release:audit
> - npm run audit
> - npm run smoke
> 
> Chrome Web Store package was generated locally at output/chrome-web-store/chromex-0.1.6-chrome-web-store-20260508151212.zip and is intentionally not attached to the public GitHub release.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在解決問題和更新方面有持續的投入。
**連結**：[文件](https://github.com/GENEXIS-AI/chromex)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-30 ~ 2026-05-08）
> **活躍天數** 4 天 · **最新 commit** Release v0.1.6

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/GENEXIS-AI/chromex/issues/2) | Add a firefox version | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Chromex
> 
> [](https://github.com/GENEXIS-AI/chromex/actions/workflows/ci.yml)
> [](./LICENSE)
> [](https://github.com/GENEXIS-AI/chromex/stargazers)
> [](./README.md)
> [](./readmes/README.ko.md)
> [](./readmes/README.ja.md)
> [](./readmes/README.zh-CN.md)
> 
> Chromex is a Chrome MV3 side-panel assistant that connects Chrome to Codex through a local native bridge. It helps users work with the current page, selected tabs, uploaded files, voice input, images, and browser workflows while keeping credentials out of extension storage.
> 
> Published by **GenexisAI CHOI**.
> 
> ## What It Does
> 
> - Chat with the current webpage, selected open tabs, screenshots, uploaded files, PDFs, Office files, images, and browser history when requested.
> - Summarize and compare page content, YouTube videos, news articles, research pages, PDFs, and arXiv papers.
> - Edit or generate images through Codex image workflows with local output handling.
> - Use voice transcription, plan mode, page-aware suggestions, custom profiles, and optional Codex skills.
> - Run the unified Translation/Live mode for live transcripts, optional realtime translation, and follow-up chat over the captured transcript.
> - Run browser-control workflows through Chrome content scripts with visible in-page activity indicators.
> 
> ## Install From Source
> 
> Use the source checkout or [`chromex-public-source.zip`](https://github.com/GENEXIS-AI/chromex/releases/latest/download/chromex-public-source.zip):
> 
> ```bash
> git clone https://github.com/GENEXIS-AI/chromex.git
> cd chromex
> npm install
> npm run build
> node scripts/install-native-host.mjs
> ```
> 
> Then close every Chrome window, reopen Chrome, open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, and choose:
> 
> ```text
> packages/extension/dist
> ```
> 
> Important: run `npm install`, `npm run build`, and `install-native-host.mjs` from the `chromex` source folder that contains `package.json`. If Windows reports `ENOENT Could not read package.json`, you are in the wrong folder.
> 
> ### Windows Local Bridge Setup
> 
> On Windows, install Node.js 20 LTS or newer, then install and verify the Codex CLI first:
> 
> ```powershell
> npm install -g @openai/codex
> codex --version
> ```
> 
> Use the npm install path above even if `winget install Codex -s msstore` fails. `0x8a15005e: The server certificate did not match any of the expected values` is a Windows Store / TLS certificate-chain problem outside Chromex, not a Chromex install step.
> 
> Then use **PowerShell** from the `chromex` source folder:
> 
> ```powershell
> npm install
> npm run build
> node scripts/install-native-host.mjs --browser=chrome
> ```
> 
> Then open `chrome://extensions`, click **Reload** on Chromex, and press **Check connection** in the Chromex side panel.
> 
> If the side panel still says the local bridge is waiting:
> 
> 1. Confirm Chromex is loaded from `packages/extension/dist`.
> 2. Copy the extension ID shown on the Chromex card in `chrome://extensions`.
> 3. Re-run the installer with that ID:
> 
> ```powershell
> node scripts/install-native-host.mjs  --browser=chrome
> ```
> 
> The expected public release ID is `menmlhahmendmkiicbjihgjhppkgaeom`. If Chrome shows a different ID, use the ID shown in Chrome.
> 
> If login fails with `Failed to start codex app-server`, Chromex can reach the local bridge but cannot start the Codex CLI. Re-run `codex --version`. If Windows cannot find it, set the optional Codex binary path to `%APPDATA%\npm\codex.cmd`, or set the folder to `%APPDATA%\npm`. Do not put your workspace folder in the Codex binary field; the workspace folder and Codex executable path are separate settings.
> 
> To force executable detection on Windows:
> 
> ```powershell
> npm install -g @openai/codex
> where codex
> codex --version
> ```
> 
> If `where codex` prints `C:\Users\\AppData\Roaming\npm\codex.cmd`, open Chromex settings and set the optional Codex binary path to `%APPDATA%\npm\codex.cmd`, save, close every Chrome window, reopen Chrome, and press **Check connection**.
> 
> ## Runtime Boundary
> 
> Chromex uses this boundary:
> 
> ```text
> Chrome Extension -> Native Messaging Host -> Local Bridge -> codex app-server
> ```
> 
> The source tree is organized as:
> 
> - `packages/extension`: Chrome MV3 side-panel extension
> - `packages/bridge`: local bridge daemon for Codex app-server and multimodal workflows
> - `packages/native-host`: Chrome Native Messaging relay
> - `packages/shared`: shared types, policies, profiles, and helpers
> 
> ## Language Support
> 
> Chromex follows the browser language automatically by default. Users can also choose a language in **Settings > General > App UI language**.
> 
> The extension ships Chrome `_locales` entries for English, Korean, Japanese, Chinese, Arabic, French, German, Spanish, Portuguese, Hindi, Vietnamese, Thai, Turkish, Ukrainian, and many other Chrome-compatible locales. Model responses are instructed to follow the selected UI language unless the user asks for another language.
> 
> ## Security And Privacy Defaults
> 
> - The extension does not store raw OpenAI API keys, OAuth tokens, or ChatGPT session tokens in Chrome extension storage.
> - Codex OAuth / ChatGPT login is handled through the local Codex app-server flow.
> - API-key login is an optional local fallback and is never used automatically without user confirmation.
> - Realtime translation uses a separately confirmed OpenAI API key path and can be disconnected from settings.
> - Page content, tab data, screenshots, browser history, microphone input, and browser actions are used only for user-requested workflows.
> - `history`, `tabs`, screen capture, microphone, and site access are requested only when a feature needs them.
> - Conversation history is session-only by default. Persistent local chat history is opt-in.
> - Native-host child processes and workspace hooks run with a reduced environment allowlist.
> - Generated image originals, temporary uploads, and diagnostics are handled by the local bridge.
> 
> Read [SECURITY.md](./SECURITY.md) and [PRIVACY.md](./PRIVACY.md) before publishing or deploying a modified build.
> 
> ## Features
> 
> - Persistent MV3 side panel with chat-first UX.
> - Automatic routing for page, file, image, history, voice, and browser-control requests.
> - `@` picker for selecting one or more open tabs.
> - `/` picker for profile selection.
> - Plan mode for turning ambiguous requests into an explicit plan before execution.
> - Attachments for images, text, PDF, DOCX, CSV, TSV, XLSX, and XLSM.
> - Read strategy policy for DOM, vision, hybrid, and site-adapter workflows.
> - Selected-text context injection with fact-check suggestions and right-click ask flow.
> - Editable site suggestions where the visible command and the sent prompt can be different.
> - Translation/Live mode with live transcript history, optional realtime translation playback, and transcript-grounded follow-up chat.
> - Site-aware suggestions for YouTube, news, research, mail, collaboration, notes, task tools, shopping, travel, and Korean work services.
> - YouTube adapter with current timestamp context and seek actions.
> - Non-destructive image editing for uploaded images, page images, or visible screen captures.
> - Markdown rendering with code blocks, tables, links, and copy controls.
> - Optional Codex skills loaded from a user's local `.codex/skills/*/SKILL.md` only when enabled.
> 
> ## Development
> 
> ```bash
> npm install
> npm run typecheck
> npm run test
> npm run build
> npm run release:audit
> ```
> 
> Optional browser smoke test:
> 
> ```bash
> npm run smoke
> ```
> 
> If no compatible browser exists, install the Playwright Chromium runtime:
> 
> ```bash
> npm run smoke:install-browser
> ```
> 
> The built extension is emitted to:
> 
> ```text
> packages/extension/dist
> ```
> 
> ## Release Management
> 
> Chromex uses normal open-source release history from `0.1.1` onward. Versioning, pull request flow, and release checklist are documented in [RELEASE.md](./RELEASE.md).
> 
> ## Troubleshooting
> 
> - **Native host missing or forbidden**: run `npm run build`, then `node scripts/install-native-host.mjs --browser=chrome`, reload the extension in `chrome://extensions`, and check Chromex onboarding/system status. If Chrome shows a differen

## 延伸閱讀

相關概念：[[多模態]] · [[即時通訊]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/GENEXIS-AI/chromex)

## 相關收錄

> [!note]- 直接競品（同子分類：Chrome 擴展）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Chrome 擴展" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "GENEXIS-AI--chromex" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","即時通訊","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GENEXIS-AI" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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

> **2026-05-01** — 首次收錄
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

- [[2026-05-05|2026-05-05]] — 再次上榜，819 stars
- [[2026-05-03|2026-05-03]] — 再次上榜，755 stars
- [[2026-05-02|2026-05-02]] — 再次上榜，738 stars
- [[2026-05-01|2026-05-01]] — 首次收錄，687 stars
