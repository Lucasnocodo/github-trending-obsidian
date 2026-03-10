---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 388
stars_per_day: 65
forks: 77
open_issues: 38
created: 2026-03-04
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: "v1.0.1"
install_complexity: "hard"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - typescript
  - generative_ai
  - ltx
  - ltx_2
  - non_linear_editing
---

# LTX-Desktop

**388** stars · **65** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

`ORG` `v1.0.1` `need-GPU/Docker`

> [!summary] 一句話摘要
> 一款開源桌面應用，用於生成視頻。

## 專案簡介

它讓使用者能夠使用 LTX 模型在本地生成視頻，支持多種生成模式。這個專案使用 TypeScript 和 Python 開發，並提供了本地生成和 API 模式兩種運行方式。相比其他視頻生成工具，LTX-Desktop 提供了本地運行的選項，特別適合擁有高效能 GPU 的用戶。這是一個有潛力的工具，尤其對於視頻創作者來說。

**技術棧**：`TypeScript` · `Python` · `PowerShell` · `Shell` · `CSS` · `JavaScript`

## 重點功能

- 支持文本、圖像和音頻生成視頻。
- 提供視頻編輯和生成項目的功能。
- 本地生成模式支持高效能 GPU。
- API 模式適用於不支持的硬體。

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者背景強大，並且這個專案滿足了對高效視頻生成的需求。

## 適合誰使用

**目標受眾**：需要生成視頻內容的創作者和開發者。

> [!example] 使用場景
> - [視頻創作者] 用它來 [生成高品質的視頻內容]，因為它支持多種生成模式。
> - [開發者] 用它來 [測試不同的視頻生成參數]，因為它提供了靈活的 API 接口。
> - [學生] 用它來 [學習視頻生成技術]，因為它是開源的，易於修改和擴展。

> [!warning] 注意事項
> 需要高效能的 NVIDIA GPU 才能進行本地生成。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 77 |
| Open Issues | 38 |
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
> | Windows (no CUDA, <32GB VRAM, or unknown VRAM) | API-only | **LTX API key required** |
> | macOS (Apple Silicon builds) | API-only | **LTX API key required** |
> | Linux | Not officially supported | No official builds |
> 
> In API-only mode, available resolutions/durations may be limited to what the API supports.
> 
> ## System requirements
> 
> ### Windows (local generation)
> 
> - Windows 10/11 (x64)
> - NVIDIA GPU with CUDA support and **≥32GB VRAM** (more is better)
> - 16GB+ RAM (32GB recommended)
> - Plenty of free disk space for model weights and outputs
> 
> ### macOS (API-only)
> 
> - Apple Silicon (arm64)
> - macOS 13+ (Ventura)
> - Stable internet connection
> 
> ## Install
> 
> 1. Download the latest installer from GitHub Releases: [Releases](../../releases)
> 2. Inst

## 延伸閱讀

相關概念：[[視頻生成技術]] · [[深度學習模型]] · [[開源桌面應用]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
