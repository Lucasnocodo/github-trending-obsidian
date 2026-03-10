---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 395
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
  - "讓使用者在本地生成影片，無需依賴雲端服務。"
---

# LTX-Desktop

**395** stars · **66** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 讓使用者在本地生成影片，無需依賴雲端服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (66 stars/day)
> **適合** 需要在 Windows 上使用 LTX 模型生成影片的創作者，尤其是擁有高效能 NVIDIA GPU 的使用者。
> **一句話重點** LTX Desktop 不僅是一個影片生成工具，更是一個強大的本地運算平台，讓創作者能夠在無需依賴雲端的情況下，快速實現創意。

> [!abstract] 核心創新
> LTX Desktop 提供了一個本地生成影片的解決方案，減少了對雲端服務的依賴。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為使用 LTX 模型生成影片而設計。它支持在具備 NVIDIA GPU 的 Windows 系統上本地生成影片，並提供 API 模式以支持不兼容的硬體和 macOS。使用者可以透過簡單的介面進行文本、圖像、音頻到影片的轉換，並且還能進行影片編輯。技術上，它基於 FastAPI 和 Electron，並使用 Python 作為後端語言。與其他影片生成工具相比，LTX Desktop 的本地生成模式可減少對網路的依賴，並提供更快的生成速度。儘管目前處於 beta 階段，使用者仍可期待其穩定性和功能的持續改進。需要注意的是，對於本地生成，系統要求至少 32GB 的 VRAM，這對於一般使用者來說可能是一個限制。對於小型團隊或獨立開發者，這個工具值得一試，尤其是在需要快速生成影片的情況下。建議在有足夠硬體支援的情況下使用，否則可考慮 API 模式。

**技術棧**：`Node.js` · `FastAPI` · `Python 3.12+` · `Electron`

## 重點功能

- 文本到影片生成 — 用戶可輸入文本，生成對應的影片內容。
- 圖像到影片生成 — 上傳圖像，將其轉換為動態影片。
- 音頻到影片生成 — 根據音頻內容生成相應的影片。
- 影片編輯功能 — 提供簡單的編輯介面，允許用戶對生成的影片進行修改。
- API 模式支持 — 允許在不支持的硬體上運行，提供靈活性。

## 快速開始

1. 安裝 Node.js 和 Python 3.12+
```bash
請參考官方文檔進行安裝
```
2. 設置開發環境
```bash
pnpm setup:dev:win
```
3. 運行應用
```bash
pnpm dev
```

## 程式碼範例

```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> LTX Desktop 的開發者來自 Lightricks，這是一家在影像處理領域有豐富經驗的公司。隨著生成式 AI 技術的普及，對於能夠快速生成高品質影片的需求日益增加。這款工具的推出正好切合了這一需求，並且提供了本地生成的選擇，使其在市場上脫穎而出。

## 適合誰使用

**目標受眾**：需要在 Windows 上使用 LTX 模型生成影片的創作者，尤其是擁有高效能 NVIDIA GPU 的使用者。

> [!example] 使用場景
> - 影片製作人用它來快速生成影片預告片，因為本地生成能顯著減少等待時間，提升工作效率。
> - 獨立開發者用它來製作遊戲宣傳影片，因為能夠在無需網路的情況下進行創作，避免了雲端服務的延遲。
> - 內容創作者用它來將文字內容轉換成影片，因為其簡單的介面和多種生成選項使得創作過程更加流暢。

## 架構分析

LTX Desktop 採用前後端分離的架構，前端使用 Electron，後端則是基於 FastAPI 的 Python 應用。用戶輸入 → 前端處理 → 後端生成影片，並將結果返回前端。關鍵技術決策包括使用本地 GPU 加速生成，並提供 API 模式以支持不同硬體。目錄結構中，`backend/architecture.md` 詳細說明了後端架構。

## 優缺點分析

> [!success] 優點
> - 支持多種生成模式（文本、圖像、音頻到影片）。
> - 本地生成可大幅提升性能，減少延遲。
> - 開源且活躍的社群，便於未來的擴展和改進。

> [!danger] 缺點
> - 對硬體要求高，普通用戶可能無法滿足。
> - 目前功能仍在持續開發中，穩定性可能不足。
> - API 模式的性能不如本地生成，可能影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Windows 系統，且需要 NVIDIA GPU (≥32GB VRAM)。
> - 目前處於 beta 階段，可能會有不穩定的情況。
> - API 模式的性能可能不如本地生成。

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

**社群活躍度**：社群活躍，持續有新功能和修復更新。
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

相關概念：[[生成式 AI]] · [[影片編輯]] · [[本地運算]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

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
