---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 399
stars_per_day: 67
forks: 79
open_issues: 39
created: 2026-03-04
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "視頻生成"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓使用者能在本地或透過 API 生成影片，支持多種媒體格式。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "讓使用者能在本地或透過 API 生成影片，支持多種媒體格式。"
---

# LTX-Desktop

**399** stars · **67** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 讓使用者能在本地或透過 API 生成影片，支持多種媒體格式。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (67 stars/day)
> **授權** Apache-2.0 (商業友好)
> **適合** 希望在本地生成和編輯視頻內容的獨立開發者或小型團隊。
> **一句話重點** LTX Desktop 的強大之處在於它的本地生成能力，讓用戶可以在不依賴雲端的情況下創建高質量的視頻。

> [!abstract] 核心創新
> LTX Desktop 允許用戶在本地生成高質量視頻，並提供強大的編輯功能。

## 專案簡介

LTX Desktop 是一款開源桌面應用程式，專為生成影片而設計，支持 LTX 模型。它的核心流程是用戶可以透過文本、影像或音訊生成影片，並提供一個直觀的視頻編輯介面來進行後製。技術上，它使用了 Electron 作為前端框架，並搭配 FastAPI 作為後端，支持在 Windows 上的 NVIDIA GPU 本地生成，或透過 API 模式在其他硬體上運行。與其他視頻生成工具相比，LTX Desktop 允許用戶在本地運行模型，這樣可以提高生成速度並減少對網路的依賴。該工具的效能在支持的硬體上表現良好，但需要至少 32GB 的 VRAM 來運行本地生成模式。這個專案目前處於 beta 階段，對於希望在本地生成影片的開發者來說，值得一試，但需注意未來可能會有破壞性變更。適合小型團隊或個人開發者使用，尤其是那些需要快速生成和編輯視頻內容的用戶。

**技術棧**：`Electron` · `FastAPI` · `Python 3.12+` · `Node.js`

## 重點功能

- 文本轉視頻生成 — 用戶可以輸入文本，生成對應的視頻內容。
- 影像轉視頻生成 — 支持將靜態影像轉換為動態視頻。
- 音訊轉視頻生成 — 允許用戶將音訊文件轉換為視頻，並自動生成視覺效果。
- 視頻編輯生成 — 提供編輯介面，讓用戶可以對生成的視頻進行後製。
- API 模式支持 — 對於不支持的硬體和 macOS，用戶可以透過 API 進行生成。

## 快速開始

1. 安裝依賴
```bash
pnpm setup:dev:win
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 啟動調試模式
```bash
pnpm dev:debug
```

## 程式碼範例

```bash
pnpm dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) Lightricks 是一個在視覺內容生成領域有一定知名度的團隊，過去有多個成功的產品。(b) LTX Desktop 解決了在本地生成高質量視頻的需求，特別是對於擁有高效能 GPU 的用戶來說，能夠大幅提升工作效率。(c) 最近在社群媒體上有關於 LTX 模型的討論引起了開發者的注意，讓這個工具獲得更多曝光。(d) 隨著生成式 AI 技術的成熟，越來越多的開發者開始尋求本地解決方案，這使得 LTX Desktop 的需求上升。

## 適合誰使用

**目標受眾**：希望在本地生成和編輯視頻內容的獨立開發者或小型團隊。

> [!example] 使用場景
> - 視頻編輯師用它來將文本轉換為視頻，因為這樣可以快速生成內容，節省了手動編輯的時間。
> - 內容創作者用它來將音訊生成視頻，因為這樣可以輕鬆製作播客的視覺化版本，提升觀眾的吸引力。
> - 開發者用它來測試 LTX 模型的生成效果，因為它支持本地運行，能夠快速迭代和調整生成參數。

## 架構分析

LTX Desktop 採用前後端分離的架構，前端使用 Electron，後端則是 FastAPI。用戶輸入 → 前端處理 → 後端生成視頻，並將結果回傳給前端。關鍵技術決策包括使用本地 GPU 進行計算以提高效能，並且在不支持的硬體上提供 API 模式。目錄結構中，`backend/architecture.md` 提供了後端架構的詳細說明。

## 技術深入分析

> [!note]- 展開深入分析
> LTX Desktop 的核心演算法基於 LTX 模型，能夠將文本、影像和音訊轉換為視頻。效能方面，使用 NVIDIA GPU 的本地生成模式能夠顯著提高生成速度，具體數據未在 README 中提供。設計上，選擇使用 Electron 來實現跨平台的桌面應用，但目前僅支持 Windows，這使得開發者需要考慮未來的擴展性。與其他視頻生成工具相比，LTX Desktop 的本地運行模式提供了更高的靈活性和控制權，特別是在處理大型視頻項目時。

## 優缺點分析

> [!success] 優點
> - 支持多種媒體格式的生成，靈活性高。
> - 本地運行提高生成速度，減少網路依賴。
> - 開源且活躍的社群，易於貢獻和擴展。

> [!danger] 缺點
> - 僅限於 Windows 系統，對於其他平台支持不足。
> - 需要高效能硬體才能充分發揮效能。
> - 目前處於 beta 階段，穩定性和功能可能不完善。

> [!warning] 注意事項
> - 僅支持 Windows 系統，需具備 NVIDIA GPU。
> - 本地生成模式需要至少 32GB VRAM。
> - 目前處於 beta 階段，可能會有破壞性變更。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 79 |
| Open Issues | 39 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |
| Repo 大小 | 60.4 MB |

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

**社群活躍度**：社群活躍，持續有更新和貢獻。
**連結**：[文件](https://www.ltx.video)

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

相關概念：[[生成式 AI]] · [[視頻編輯]] · [[深度學習]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[inspatio--worldfm|inspatio/worldfm]] · [[karpathy--autoresearch|karpathy/autoresearch]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

---

## 個人筆記

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
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
