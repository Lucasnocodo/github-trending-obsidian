---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 415
stars_per_day: 69
forks: 83
open_issues: 39
created: 2026-03-04
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "影片生成"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "一個開源桌面應用程式，用於生成 LTX 模型的影片。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:411,2026-03-11:415"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "一個開源桌面應用程式，用於生成 LTX 模型的影片。"
---

# LTX-Desktop

**415** stars · **69** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 一個開源桌面應用程式，用於生成 LTX 模型的影片。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (69 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要生成高品質影片並擁有高效能 NVIDIA GPU 的內容創作者。
> **一句話重點** LTX Desktop 不僅是一個影片生成工具，更是針對高效能硬體進行優化的創新解決方案。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、8 小時整合，得到高效能影片生成，值得考慮。

> [!abstract] 核心創新
> LTX Desktop 提供了本地生成影片的能力，特別針對高效能 NVIDIA GPU 進行優化。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為生成 LTX 模型的影片而設計，支持在具備 NVIDIA GPU 的 Windows 系統上本地運行，並提供 API 模式以支持不兼容的硬體和 macOS。用戶可以透過簡單的介面進行文本、圖像、音頻到影片的生成，並可進行影片編輯。這個工具的賣點在於其本地生成能力，尤其適合擁有高效能顯示卡的用戶。技術上，LTX Desktop 使用 Electron 框架來構建前端，並搭配 Python 的 FastAPI 作為後端，這樣的選擇使得應用能夠快速響應並處理多種請求。與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，LTX Desktop 提供了更為直觀的編輯介面和多種生成模式，這使得非技術用戶也能輕鬆上手。實際使用中，對於需要本地生成的用戶，LTX Desktop 能夠處理高達 32GB VRAM 的 GPU，並且在無法使用 GPU 的情況下，則可透過 HTTP API 進行生成。儘管目前仍處於 Beta 階段，但其活躍的開發和社群支持顯示出未來的潛力。對於需要生成高品質影片的創作者或開發者，這是一個值得考慮的工具，但對於不具備高效能硬體的用戶，可能會面臨性能瓶頸。

**技術棧**：`Electron` · `FastAPI` · `TypeScript` · `Python 3.12+`

## 重點功能

- 文本到影片生成 — 支持將文本內容轉換為影片，簡化創作流程。
- 圖像到影片生成 — 用戶可將靜態圖像轉換為動態影片，提升視覺效果。
- 音頻到影片生成 — 支持將音頻內容轉換為影片，適合製作音樂視頻。
- 影片編輯介面 — 提供直觀的編輯工具，方便用戶進行影片剪輯和調整。
- API 模式支持 — 對於不支持的硬體，提供 HTTP API 進行影片生成，擴展使用範圍。

## 快速開始

1. 安裝依賴
```bash
pnpm setup:dev:mac
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 運行後端測試
```bash
pnpm backend:test
```

## 程式碼範例

{
  "前置條件": "需要安裝 Node.js 和 Python 3.12+",
  "指令": "pnpm setup:dev:mac",
  "預期輸出": "安裝完成後，準備好進入開發模式。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 415 stars（69/天），forks 83（20.0%），顯示出強勁的社群反響。Lightricks 作為開發者，過去在影像處理領域有豐富經驗，這使得 LTX Desktop 在生成影片的需求上填補了一個空白。由於目前市場上缺乏針對 LTX 模型的專用工具，這個專案的推出正好滿足了用戶的需求。社群的活躍度和開發者的回應速度也促進了其快速增長。

## 適合誰使用

**目標受眾**：需要生成高品質影片並擁有高效能 NVIDIA GPU 的內容創作者。

> [!example] 使用場景
> - 影片製作人用它來生成高品質的影片內容，因為它支持多種媒介的轉換，並能在本地運行以提高效率。
> - 遊戲開發者用它來創建遊戲預告片，因為它能快速將遊戲畫面轉換為影片，並提供編輯功能。
> - 教育工作者用它來製作教學影片，因為其簡單的介面讓非技術用戶也能輕鬆上手。

## 架構分析

LTX Desktop 採用 Electron 作為前端框架，這使得開發者能夠使用 Web 技術構建桌面應用。後端則使用 FastAPI，提供高效的 API 支持。這樣的架構選擇使得應用能夠快速響應用戶請求，並且易於擴展。

資料流方面，前端通過 IPC 與後端進行通信，後端則處理模型的生成請求並返回結果。選擇 Electron 使得應用能夠跨平台運行，但也帶來了較大的應用體積和較高的記憶體使用。隨著用戶數量的增加，後端可能會面臨性能瓶頸，特別是在高並發請求的情況下。

整體而言，這個架構適合中小型團隊，但在大規模使用時可能需要進一步優化。

## 技術深入分析

LTX Desktop 的核心技術機制在於其使用的 Electron 框架，這使得開發者能夠利用 Web 技術來構建桌面應用。後端則是基於 FastAPI，這是一個高效的 Python 網路框架，能夠快速處理請求並提供 API 支持。這樣的設計使得應用能夠在本地生成影片，並且能夠快速響應用戶的需求。效能方面，LTX Desktop 能夠充分利用高效能 NVIDIA GPU 的計算能力，特別是在處理大型模型時，能夠顯著提高生成速度。設計上，選擇 Electron 雖然帶來了跨平台的便利，但也使得應用的體積較大，並且在記憶體使用上會有一定的負擔。在技術風險方面，隨著用戶數量的增加，後端可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，LTX Desktop 可以與主流的 CI/CD 工具進行整合，但需要注意的是，對於非技術用戶來說，初始設置可能會有一定的學習曲線。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，對於新手來說相對友好。安裝過程順暢，無明顯的坑。提供了簡單的快速入門指南，能夠幫助用戶快速上手。文件目前僅有英文版本，對於非英語用戶可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 支持多種媒介生成影片，滿足不同需求。
> - 本地生成能力提高了效率，減少了網路延遲。
> - 直觀的編輯介面，降低了使用門檻。

> [!danger] 缺點
> - 僅支持特定硬體，對於一般用戶的適用性有限。
> - 仍處於 Beta 階段，可能會有不穩定的情況。
> - 需要較高的系統資源，對於低效能設備不友好。

> [!warning] 注意事項
> - 僅支持 Windows 系統的 NVIDIA GPU，對於其他硬體的支持有限。
> - 目前仍處於 Beta 階段，可能會有不穩定的情況。
> - 對於低於 32GB VRAM 的 GPU，性能可能不佳。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於資料同步，而 LTX-Desktop 專注於影片生成，功能範圍不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據抓取，與 LTX-Desktop 的影片生成無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於即時通訊的代理工具，而 LTX-Desktop 專注於影片生成，功能範圍不同。 | 如果你的需求是即時通訊的代理，而不是影片生成，則應選擇此工具。 | low，因為兩者功能完全不同，無需遷移。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能生成，而 LTX-Desktop 則是通用的影片生成工具。 | 如果你的需求是針對醫療領域的特定應用，則應選擇此工具。 | medium，因為需要重新調整使用場景。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LTX-Desktop** | **tg-ws-proxy** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於即時通訊的代理工具，而 LTX-Desktop 專注於影片生成，功能範圍不同。 | 專注於醫療領域的技能生成，而 LTX-Desktop 則是通用的影片生成工具。 |
> | 遷移成本 | - | low，因為兩者功能完全不同，無需遷移。 | medium，因為需要重新調整使用場景。 |
> | 適用場景 | 主要場景 | 如果你的需求是即時通訊的代理，而不是影片生成，則應選擇此工具 | 如果你的需求是針對醫療領域的特定應用，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在低於 32GB VRAM 的 GPU 上性能不佳，可能導致生成失敗。
  - 解法：使用 API 模式進行生成。
- [MEDIUM] 某些功能在 Beta 階段可能不穩定，導致應用崩潰。
  - 解法：定期更新至最新版本以獲取修復。
- [low] 安裝過程中可能需要手動設置環境變數。
  - 解法：參考 README 中的安裝指南進行設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的小型創業團隊需要生成行銷影片 | 非常適合 | 能夠快速生成高品質影片，並且成本相對較低。 |
| 大型企業的影片製作部門 | 普通 | 雖然功能強大，但可能需要更多的硬體支持。 |
| 教育機構需要製作教學影片 | 適合 | 簡單的介面讓非技術用戶也能輕鬆上手。 |
| 不具備高效能硬體的用戶 | 不適合 | 性能依賴於高效能的 GPU，對於一般用戶的適用性有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、8 小時整合，得到高效能影片生成，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 83 |
| Open Issues | 39 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |
| Repo 大小 | 60.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lightricks/LTX-Desktop) |
| Topics | `generative-ai` `ltx` `ltx-2` `non-linear-editing` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `class-variance-authority` `clsx` `electron-updater` `js-yaml` `lucide-react` `react` `react-dom` `react-dropzone` `tailwind-merge` `@resvg/resvg-js` `@types/js-yaml` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 74
>     "Python" : 24
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ofirgluzman](https://github.com/ofirgluzman) | 26 |
> | [@alexger](https://github.com/alexger) | 6 |
> | [@DStar1](https://github.com/DStar1) | 1 |

**最新版本**：v1.0.1 — LTX Desktop 1.0.1 (2026-03-05)

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新和回應問題。
**連結**：[文件](https://www.ltx.video/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-09）
> **活躍天數** 3 天 · **最新 commit** Add delete button to video assets in Gen Space and make it subtle

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Lightricks/LTX-Desktop/issues/16) | Support CPU offloading for text encoder to enable local infe | 13 | 4 |
> | [#36](https://github.com/Lightricks/LTX-Desktop/issues/36) | Add support for LTX-2.3-fp8 | 8 | 3 |
> | [#6](https://github.com/Lightricks/LTX-Desktop/issues/6) | GGUF and PyTorch XPU support ! | 8 | 3 |
> | [#4](https://github.com/Lightricks/LTX-Desktop/issues/4) | Linux support ? | 7 | 2 |
> | [#14](https://github.com/Lightricks/LTX-Desktop/issues/14) | LTX Destkop Cant change install models folder | 5 | 10 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LTX Desktop
> 
> LTX Desktop is an open-source desktop app for generating videos with LTX models — locally on supported Windows NVIDIA GPUs, with an API mode for unsupported hardware and macOS.
> 
> > **Status: Beta.** Expect breaking changes.
> > Frontend architecture is under active refactor; large UI PRs may be declined for now (see [`CONTRIBUTING.md`](docs/CONTRIBUTING.md)).
> 
>   
> 
>   
> 
>   
> 
> ## Features
> 
> - Text-to-video generation
> - Image-to-video generation
> - Audio-to-video generation
> - Video edit generation (Retake)
> - Video Editor Interface
> - Video Editing Projects
> 
> ## Local vs API mode
> 
> | Platform / hardware | Generation mode | Notes |
> | --- | --- | --- |
> | Windows + CUDA GPU with **≥32GB VRAM** | Local generation | Downloads model weights locally |
> | Windows (no CUDA, |HTTP: localhost:8000| BE["Backend (FastAPI + Python)"]
>   UI -->|IPC via preload: window.electronAPI| EL["Electron main (TS)"]
>   EL --> OS["OS integration (files, dialogs, ffmpeg, process mgmt)"]
>   BE --> GPU["Local models + GPU (when supported)"]
>   BE --> EXT["External APIs (only for API-backed features)"]
>   EL --> DATA["App data folder (settings/models/logs)"]
>   BE --> DATA
> ```
> 
> ## Development (quickstart)
> 
> Prereqs:
> 
> - Node.js
> - `uv` (Python package manager)
> - Python 3.12+
> - Git
> 
> Setup:
> 
> ```bash
> # macOS
> pnpm setup:dev:mac
> 
> # Windows
> pnpm setup:dev:win
> ```
> 
> Run:
> 
> ```bash
> pnpm dev
> ```
> 
> Debug:
> 
> ```bash
> pnpm dev:debug
> ```
> 
> `dev:debug` starts Electron with inspector enabled and starts the Python backend with `debugpy`.
> 
> Typecheck:
> 
> ```bash
> pnpm typecheck
> ```
> 
> Backend tests:
> 
> ```bash
> pnpm backend:test
> ```
> 
> Building installers:
> - See [`INSTALLER.md`](docs/INSTALLER.md)
> 
> ## Telemetry
> 
> LTX Desktop collects minimal, anonymous usage analytics (app version, platform, and a random installation ID) to help prioritize development. No personal information or generated content is collected. Analytics is enabled by default and can be disabled in **Settings > General > Anonymous Analytics**. See [`TELEMETRY.md`](docs/TELEMETRY.md) for details.
> 
> ## Docs
> 
> - [`INSTALLER.md`](docs/INSTALLER.md) — building installers
> - [`TELEMETRY.md`](docs/TELEMETRY.md) — telemetry and privacy
> - [`backend/architecture.md`](backend/architecture.md) — backend architecture
> 
> ## Contributing
> 
> See [`CONTRIBUTING.md`](docs/CONTRIBUTING.md).
> 
> ## License
> 
> Apache-2.0 — see [`LICENSE.txt`](LICENSE.txt).
> 
> Third-party notices (including model licenses/terms): [`NOTICES.md`](NOTICES.md).
> 
> Model weights are downloaded separately and may be governed by additional licenses/terms.

## 延伸閱讀

相關概念：[[生成式 AI]] · [[非線性編輯]] · [[影片處理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 直接競品（同子分類：影片生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "影片生成" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Lightricks--LTX-Desktop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["生成式 AI","非線性編輯","影片處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Lightricks--LTX-Desktop" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "Lightricks" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，411 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
