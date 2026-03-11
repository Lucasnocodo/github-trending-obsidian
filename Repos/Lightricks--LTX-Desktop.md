---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 396
stars_per_day: 66
forks: 79
open_issues: 39
created: 2026-03-04
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓使用者能在本地生成視頻，支持多種生成模式，並提供編輯功能。"
priority: medium
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
  - "讓使用者能在本地生成視頻，支持多種生成模式，並提供編輯功能。"
---

# LTX-Desktop

**396** stars · **66** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 讓使用者能在本地生成視頻，支持多種生成模式，並提供編輯功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (66 stars/day)
> **適合** 需要在高性能 Windows 環境中生成和編輯視頻的內容創作者。
> **一句話重點** 這個專案展示了如何利用生成式 AI 來簡化視頻創作流程，特別是在高性能環境下的應用潛力。

> [!abstract] 核心創新
> 支持本地生成視頻的能力，特別是針對高性能 NVIDIA GPU 的優化。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為生成視頻而設計，支持文本、圖像和音頻轉換為視頻。用戶可以在具備 NVIDIA GPU 的 Windows 系統上本地生成視頻，或在不支持的硬體上透過 API 模式運行。這個應用的後端使用 FastAPI 和 Python，並依賴 Electron 進行前端開發，整體架構支持本地模型和外部 API 的整合。與其他視頻生成工具相比，LTX Desktop 提供了更靈活的本地生成選項，特別適合擁有高性能 GPU 的用戶。儘管目前處於 Beta 階段，功能上已經涵蓋了視頻編輯和生成項目，對於需要進行視頻創作的團隊來說，這是一個值得考慮的選擇。使用者需要注意的是，對於不支持的硬體，性能可能會有所下降。整體來看，這個工具適合中小型團隊，尤其是那些需要快速生成和編輯視頻的創作者。

**技術棧**：`Node.js` · `FastAPI` · `Python 3.12+` · `Electron`

## 重點功能

- 文本轉視頻生成 — 支持將文本內容轉換為視頻，提升創作效率。
- 圖像轉視頻生成 — 允許用戶將靜態圖像轉換為動態視頻，增強視覺效果。
- 音頻轉視頻生成 — 將音頻內容轉換為視頻，適合音樂和播客創作。
- 視頻編輯生成 — 提供視頻編輯功能，支持用戶自定義視頻內容。
- API 模式 — 對於不支持的硬體，提供 API 模式以擴展功能。

## 快速開始

1. 安裝 Node.js 和 Python 環境
```bash
請確保安裝 Node.js 和 Python 3.12+。
```
2. 設置開發環境
```bash
pnpm setup:dev:win
```
3. 啟動開發伺服器
```bash
pnpm dev
```

## 程式碼範例

```bash
pnpm dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> LTX Desktop 的開發者來自 Lightricks，擁有豐富的影像處理背景。隨著生成式 AI 的興起，對於視頻創作的需求日益增加，這個工具正好切中市場需求。其開源特性和靈活的生成模式使其在眾多商業工具中脫穎而出。

## 適合誰使用

**目標受眾**：需要在高性能 Windows 環境中生成和編輯視頻的內容創作者。

> [!example] 使用場景
> - 視頻編輯師用它來將文本轉換為視頻，因為這樣可以快速生成內容，節省編輯時間。
> - 內容創作者用它來將圖像轉換為視頻，因為這樣能夠輕鬆創建視覺故事，提升觀眾的吸引力。
> - 音頻工程師用它來生成音頻對應的視頻，因為這樣可以將音樂作品視覺化，增加作品的多樣性。

## 架構分析

LTX Desktop 採用前後端分離的架構，前端使用 Electron，後端則是基於 FastAPI 的 Python 應用。用戶輸入 → 前端處理 → 後端生成視頻，並透過 IPC 與操作系統進行整合。專案目錄結構中包含 docs、backend 和 frontend 等關鍵資料夾，便於開發和維護。

## 技術深入分析

> [!note]- 展開深入分析
> LTX Desktop 的核心演算法基於生成式 AI 模型，支持多種輸入格式（文本、圖像、音頻），並能生成高質量的視頻內容。效能方面，使用 NVIDIA GPU 的用戶可以享受到快速的視頻生成體驗，特別是在擁有足夠 VRAM 的情況下。設計上，選擇 FastAPI 作為後端框架，因為它能提供高效的 API 支持，並且易於擴展。相較於其他視頻生成工具，LTX Desktop 的本地生成能力和 API 模式的靈活性使其在市場上具有競爭優勢。

## 優缺點分析

> [!success] 優點
> - 支持多種生成模式，靈活性高。
> - 開源特性，便於社群貢獻和擴展。
> - 針對高性能 GPU 進行優化，生成速度快。

> [!danger] 缺點
> - 目前僅支持 Windows 系統，限制使用範圍。
> - 需要高性能硬體才能充分發揮效能。
> - Beta 階段，功能可能不穩定。

> [!warning] 注意事項
> - 僅支持 Windows 系統，對於其他平台需要使用 API 模式。
> - 本地生成需要 NVIDIA GPU 並且至少 32GB VRAM。
> - 目前處於 Beta 階段，可能會有不穩定的功能和破壞性變更。

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

**社群活躍度**：社群活躍度中等，持續有更新和貢獻。
**連結**：[文件](https://www.ltx.video/docs)

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

相關概念：[[生成式 AI]] · [[視頻編輯]] · [[API 設計]]

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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
