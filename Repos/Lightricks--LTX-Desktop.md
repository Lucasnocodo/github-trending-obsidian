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
category: "其他"
subcategory: "視頻生成"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓使用者能在本地生成視頻，無需依賴雲端服務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "讓使用者能在本地生成視頻，無需依賴雲端服務。"
---

# LTX-Desktop

**399** stars · **67** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1`

> [!summary] 一句話摘要
> 讓使用者能在本地生成視頻，無需依賴雲端服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (67 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人
> **適合** 需要在本地生成視頻並擁有高效能 NVIDIA GPU 的內容創作者。
> **一句話重點** LTX Desktop 的本地生成能力讓視頻創作變得更快、更私密，特別適合需要高效能的專業用戶。

> [!abstract] 核心創新
> LTX Desktop 提供本地視頻生成的能力，無需依賴雲端服務。

## 專案簡介

LTX Desktop 是一款開源桌面應用，專為生成視頻而設計，支持從文本、圖像和音頻生成視頻，並提供視頻編輯功能。用戶可以在支持的 Windows NVIDIA GPU 上本地運行，或在不支持的硬體和 macOS 上使用 API 模式進行生成。其核心架構基於 Electron 和 FastAPI，並使用 Python 作為後端語言，這使得它能夠高效地處理視頻生成任務。與其他工具相比，LTX Desktop 允許用戶在本地生成視頻，這樣可以避免網路延遲和隱私問題，而類似的工具如 AlpinDale/parsync 則主要集中在資料同步上。該工具的本地生成模式需要至少 32GB VRAM 的 CUDA GPU，這對於高效能視頻生成至關重要。雖然目前處於 Beta 階段，預期會有不斷的更新和改進，但對於需要快速生成視頻的創作者來說，它提供了一個強大的解決方案。對於小型團隊或個人開發者來說，這是一個值得一試的工具，特別是在需要高效能和隱私保護的情況下。建議在本地有強大 GPU 的情況下使用，避免在低效能硬體上運行。

**技術棧**：`TypeScript` · `Python 3.12+` · `FastAPI`

## 重點功能

- 文本到視頻生成 — 用戶可以輸入文本，生成對應的視頻內容。
- 圖像到視頻生成 — 支持從靜態圖像生成動態視頻。
- 音頻到視頻生成 — 允許用戶將音頻轉換為視頻，並自動生成視覺效果。
- 視頻編輯生成 — 提供視頻編輯介面，支持對生成的視頻進行編輯和重拍。
- API 模式 — 在不支持的硬體上運行，通過 HTTP 請求進行視頻生成。

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
# 生成視頻的基本指令
pnpm dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> LTX Desktop 的主要貢獻者 Ofir Gluzman 和 Alex Ger 之前參與過多個開源項目，這使得他們在社群中有一定的影響力。這個工具解決了在本地生成視頻的需求，特別是對於需要高效能的創作者來說，之前的工具多數依賴雲端，無法滿足即時生成的需求。最近的社群討論和推文也讓這個工具引起了注意，特別是在視頻內容創作日益增加的背景下。隨著硬體性能的提升，這樣的本地生成工具變得越來越可行。

## 適合誰使用

**目標受眾**：需要在本地生成視頻並擁有高效能 NVIDIA GPU 的內容創作者。

> [!example] 使用場景
> - 視頻編輯師用它來快速生成從文本到視頻的內容，因為這樣可以節省大量的後期處理時間，並提高創作效率。
> - 獨立開發者用它來創建個人項目的宣傳視頻，因為本地生成能夠降低成本並提高隱私性。
> - 教育工作者用它來製作教學視頻，因為它支持多種輸入格式，能夠輕鬆整合不同的媒體資源。

## 架構分析

LTX Desktop 採用前後端分離的架構，前端使用 Electron 進行 UI 開發，後端則使用 FastAPI 處理請求。用戶輸入 → 前端處理 → 後端生成視頻並返回結果。關鍵技術決策包括使用 Python 作為後端語言以便於處理複雜的視頻生成邏輯。目錄結構中，重要的檔案包括 `INSTALLER.md` 和 `TELEMETRY.md`，提供了安裝和數據收集的詳細說明。

## 技術深入分析

LTX Desktop 的核心技術機制在於其使用的 LTX 模型，這是一種基於深度學習的視頻生成技術，能夠從多種輸入格式生成視頻。該工具的效能依賴於用戶的硬體配置，特別是 GPU 的 VRAM 大小，對於需要高效能的視頻生成，至少需要 32GB 的 VRAM。選擇 Python 和 FastAPI 作為後端技術，能夠快速處理請求並支持高效的視頻生成邏輯，這樣的選擇在於 Python 的生態系統豐富，適合進行機器學習和數據處理。隨著用戶需求的增加，這種本地生成的方式在未來可能會面臨擴展性問題，特別是在多用戶同時生成的情況下，可能需要考慮更高效的資源管理和調度策略。安全性方面，該工具收集的數據僅限於匿名使用統計，這在一定程度上保護了用戶隱私，但仍需注意未來可能的數據安全風險。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，但缺乏詳細的範例。安裝過程對於新手來說可能有些複雜，特別是對於需要配置多個依賴的情況。沒有提供多語言支持，僅有英文文檔。

## 優缺點分析

> [!success] 優點
> - 支持多種生成模式（文本、圖像、音頻）以滿足不同需求。
> - 本地生成避免了網路延遲，提升了生成速度。
> - 開源社群活躍，便於用戶參與貢獻和反饋。

> [!danger] 缺點
> - 僅支持高效能 NVIDIA GPU，限制了使用者範圍。
> - 目前處於 Beta 階段，功能不穩定。
> - 安裝過程相對複雜，對新手不太友好。

> [!warning] 注意事項
> - 僅支持 Windows + CUDA GPU，需至少 32GB VRAM。
> - 目前處於 Beta 階段，可能會有不穩定的功能。
> - 不支持低效能硬體，可能導致生成速度緩慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，而非視頻生成，適用於需要快速同步資料的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取和處理，不支持視頻生成，適合數據分析工作。 |

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

**社群活躍度**：社群活躍，定期更新和回應用戶反饋。
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

相關概念：[[視頻生成]] · [[機器學習]] · [[深度學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Lightricks--LTX-Desktop"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
