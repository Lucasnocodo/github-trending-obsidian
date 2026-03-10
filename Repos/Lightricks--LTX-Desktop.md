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
  - "讓使用者在本地生成影片，支持多種媒介轉換，適合需要高效能的創作者。"
---

# LTX-Desktop

**396** stars · **66** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 讓使用者在本地生成影片，支持多種媒介轉換，適合需要高效能的創作者。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (66 stars/day)
> **適合** 需要在 Windows 上高效生成影片並進行編輯的內容創作者。
> **一句話重點** 這個專案最厲害的不是功能，而是它提供了一個強大的本地生成平台，讓創作者能夠在不依賴雲端的情況下進行高效的影片創作。

> [!abstract] 核心創新
> LTX Desktop 提供本地生成影片的能力，特別適合高效能 NVIDIA GPU 使用者。

## 專案簡介

LTX Desktop 是一款開源桌面應用程式，專為生成影片而設計，支持文本、圖像和音頻轉換為影片。它的核心流程是利用 NVIDIA GPU 在 Windows 上進行本地生成，並在不支持的硬體上透過 API 模式運行。技術上，它使用了 FastAPI 作為後端，並結合了 Electron 框架來構建前端界面。與其他影片生成工具相比，LTX Desktop 提供了更靈活的本地生成選項，並且支持多種媒介的轉換，這在同類產品中並不常見。使用者在具備 32GB VRAM 的 NVIDIA GPU 上可獲得最佳性能，並且可以進行即時的影片編輯和生成。這個專案目前處於 Beta 階段，雖然功能強大，但仍可能遇到不穩定的情況，適合中小型團隊或獨立創作者使用。若需要穩定性，建議在正式項目中謹慎使用，尤其是在大型專案中。

**技術棧**：`TypeScript` · `Python 3.12+` · `FastAPI` · `Node.js`

## 重點功能

- 文本轉影片生成 — 使用者可輸入文本，生成對應的影片內容。
- 圖像轉影片生成 — 支持將靜態圖像轉換為動態影片。
- 音頻轉影片生成 — 將音頻檔案轉換為視覺化影片，增強觀賞體驗。
- 影片編輯生成 — 提供影片編輯介面，支持即時編輯和生成。
- API 模式 — 在不支持的硬體上運行，擴展了使用場景。

## 快速開始

1. 安裝 Node.js 和 Python 環境
```bash
請確保已安裝 Node.js 和 Python 3.12+
```
2. 設置開發環境
```bash
pnpm setup:dev:win
```
3. 啟動應用程式
```bash
pnpm dev
```

## 程式碼範例

```bash
# 啟動應用程式
pnpm dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> LTX Desktop 的開發者來自 Lightricks，擁有豐富的影像處理背景，這使得他們能夠針對創作者的需求進行深度開發。隨著影片內容創作需求的增加，這個工具正好切中市場需求。其開源特性也讓更多開發者能參與進來，推動了其快速成長。

## 適合誰使用

**目標受眾**：需要在 Windows 上高效生成影片並進行編輯的內容創作者。

> [!example] 使用場景
> - 影片創作者用它來將文字腳本轉換為影片，因為這樣可以節省大量的剪輯時間，並提高創作效率。
> - 音樂製作人用它來將音頻檔案轉換為視覺化影片，因為這樣可以更好地展示音樂作品，吸引觀眾。
> - 社交媒體經營者用它來快速生成內容，因為這樣可以在短時間內創造多樣化的視覺素材，增加互動性。

## 架構分析

LTX Desktop 採用前後端分離的架構，前端使用 Electron，後端則是 FastAPI。用戶輸入 → 前端處理 → 後端生成影片，並將結果返回給前端。專案目錄結構中包含 docs、backend 和 frontend 資料夾，分別用於文檔、後端和前端代碼。

## 優缺點分析

> [!success] 優點
> - 支持多種媒介轉換，靈活性高。
> - 本地生成性能優越，適合高效能需求。
> - 開源特性允許社群貢獻和擴展功能。

> [!danger] 缺點
> - 對硬體要求高，僅限於特定平台。
> - 目前處於 Beta 階段，穩定性不足。
> - 安裝和設置過程較為複雜，需一定技術背景。

> [!warning] 注意事項
> - 僅支援 Windows 平台，需具備 NVIDIA GPU。
> - 本地生成需要至少 32GB VRAM，對硬體要求高。
> - 目前處於 Beta 階段，可能會有不穩定的情況。
> - 不支持 macOS 的本地生成，僅可透過 API 模式運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[OpenAI--gpt-3.5-turbo\|OpenAI/gpt-3.5-turbo]] | 主要用於文本生成，無法直接生成影片，且不支持多媒介轉換。 |
| [[RunwayML--runway\|RunwayML/runway]] | 提供更廣泛的影片生成工具，但大多數功能需透過雲端運行，無法本地生成。 |

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

相關概念：[[影片編輯]] · [[生成式 AI]] · [[深度學習]]

相關專案：[[OpenAI--gpt-3.5-turbo|OpenAI/gpt-3.5-turbo]] · [[RunwayML--runway|RunwayML/runway]]

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
