---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 385
stars_per_day: 64
forks: 77
open_issues: 38
created: 2026-03-04
first_seen: 2026-03-10
week: "2026-W11"
category: "Other"
release_tag: "v1.0.1"
status: to-review
tags:
  - github
  - other
  - typescript
  - generative_ai
  - ltx
  - ltx_2
  - non_linear_editing
---

# LTX-Desktop

**385** stars · **64** stars/天 · 建立 6 天前 · TypeScript · Apache-2.0

> [!summary] 一句話摘要
> An open-source desktop app for generating videos with LTX models

## 專案簡介

An open-source desktop app for generating videos with LTX models

## 為什麼值得關注

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | Apache-2.0 |
| Stars | 385 |
| Forks | 77 |
| Issues | 38 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |

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

[GitHub](https://github.com/Lightricks/LTX-Desktop)
 · [官方網站](https://www.ltx.video)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
