---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 363
stars_per_day: 61
forks: 12
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: "v0.3.2"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/c++"
  - org
  - easy_install
  - "topic/ai_assistant"
  - "topic/apple_silicon"
  - "topic/automation"
  - "topic/cli"
  - "topic/cpp"
aliases:
  - "RCLI"
  - "RunanywhereAI/RCLI"
  - "讓你的 Mac 透過語音控制，無需雲端即可查詢文件。"
---

# RCLI

**363** stars · **61** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音控制，無需雲端即可查詢文件。

> [!abstract] 核心創新
> RCLI 是一個完全在本地運行的語音 AI，無需雲端，實現高效能的語音控制。

## 專案簡介

RCLI 是一個在 macOS 上運行的本地語音 AI，實現了完整的語音轉文字、語言模型和文字轉語音的管道。它利用 MetalRT 引擎在 Apple Silicon 上進行高效能運算，實現低於 200 毫秒的延遲，並支持 43 種 macOS 操作。與其他語音助手不同，RCLI 完全在本地運行，無需依賴雲端服務，這使得用戶的隱私得到更好的保護。使用者可以透過語音指令控制應用程式或查詢文件，並且支持多輪對話記憶。這個工具在語音識別和指令執行的準確性上表現出色，但目前僅限於 Apple Silicon 的 macOS 環境。整體而言，RCLI 是一個值得嘗試的工具，特別適合需要高效能本地語音控制的開發者或日常使用者。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 完整的語音轉文字、語言模型和文字轉語音管道。
- 支持 43 種 macOS 操作的語音控制。
- 本地運行，無需雲端服務，保護用戶隱私。
- 低於 200 毫秒的端到端延遲。
- 多輪對話記憶，支持持續的對話交互。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 或使用 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 設置 RCLI
```bash
rcli setup
```
4. 啟動互動式 TUI
```bash
rcli
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者來自 RunAnywhere, Inc.，專注於本地 AI 解決方案，切中了用戶對隱私和性能的需求。隨著 Apple Silicon 的普及，越來越多的用戶尋求無需雲端的高效能工具，RCLI 正好滿足了這一需求。近期的更新和功能擴展也吸引了更多的開發者關注。

## 適合誰使用

**目標受眾**：需要高效能本地語音控制的 macOS 使用者。

> [!example] 使用場景
> - 開發者 用它來 控制開發環境，因為可以快速執行命令而不需要手動輸入。
> - 設計師 用它來 調整音樂播放，因為可以專注於創作而不被打擾。
> - 普通用戶 用它來 查詢文件，因為可以用自然語言進行互動，提升效率。

## 架構分析

RCLI 採用前後端分離架構，前端使用 TUI 進行語音交互，後端則利用 MetalRT 引擎進行語音處理和指令執行。

## 優缺點分析

> [!success] 優點
> - 無需雲端，保護用戶隱私。
> - 高效能，低延遲的語音處理。
> - 支持多種 macOS 操作，提升工作效率。

> [!danger] 缺點
> - 僅限於 Apple Silicon 的 macOS 環境。
> - 需要一定的安裝和配置步驟。
> - 功能可能對某些用戶來說仍然有限。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 的 Apple Silicon。
> - 需要安裝特定的依賴和配置。
> - 目前功能主要針對 macOS 操作，對其他平台不支援。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 12 |
| Open Issues | 4 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://runanywhereai.github.io/RCLI/) |
| Repo 大小 | 9.4 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 94
>     "Shell" : 3
>     "C" : 2
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 75 |
> | [@AmanSwar](https://github.com/AmanSwar) | 10 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.2 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和修復問題。
**連結**：[文件](https://runanywhereai.github.io/RCLI/)

## README 摘錄

> [!info]- 展開查看原文 README
> Talk to your Mac, query your docs, no cloud required.
>   
>   
>   
>   
>   
> 
> **RCLI** is an on-device voice AI for macOS. A complete STT + LLM + TTS pipeline running natively on Apple Silicon — 43 macOS actions via voice, local RAG over your documents, sub-200ms end-to-end latency. No cloud, no API keys.
> 
> Powered by [MetalRT](#metalrt-gpu-engine), a proprietary GPU inference engine built by [RunAnywhere, Inc.](https://runanywhere.ai) specifically for Apple Silicon.
> 
> ## Demo
> 
> > Real-time screen recordings on Apple Silicon — no cloud, no edits, no tricks.
> 
> Voice Conversation
> Talk naturally — RCLI listens, understands, and responds on-device.
> 
> Click for full video with audio
> 
> App Control
> Control Spotify, adjust volume — 43 macOS actions by voice.
> 
> Click for full video with audio
> 
> Models & Benchmarks
> Browse models, hot-swap LLMs, run benchmarks — all from the TUI.
> 
> Click for full video with audio
> 
> Document Intelligence (RAG)
> Ingest docs, ask questions by voice — ~4ms hybrid retrieval.
> 
> Click for full video with audio
> 
> ## Install
> 
> > **Requires macOS 13+ on Apple Silicon (M1 or later).**
> 
> **One command:**
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
> ```
> 
> **Or via Homebrew:**
> 
> ```bash
> brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
> brew install rcli
> rcli setup
> ```
> 
> ## Quick Start
> 
> ```bash
> rcli                             # interactive TUI (push-to-talk + text)
> rcli listen                      # continuous voice mode
> rcli ask "open Safari"           # one-shot command
> rcli ask "play some jazz on Spotify"
> ```
> 
> ## Features
> 
> ### Voice Pipeline
> 
> A full STT + LLM + TTS pipeline running on Metal GPU with three concurrent threads:
> 
> - **VAD** — Silero voice activity detection
> - **STT** — Zipformer streaming + Whisper / Parakeet offline
> - **LLM** — Qwen3 / LFM2 / Qwen3.5 with KV cache continuation and Flash Attention
> - **TTS** — Double-buffered sentence-level synthesis (next sentence renders while current plays)
> - **Tool Calling** — LLM-native tool call formats (Qwen3, LFM2, etc.)
> - **Multi-turn Memory** — Sliding window conversation history with token-budget trimming
> 
> ### 43 macOS Actions
> 
> Control your Mac by voice or text. The LLM routes intent to actions executed locally via AppleScript and shell commands.
> 
> | Category | Examples |
> |----------|---------|
> | **Productivity** | `create_note`, `create_reminder`, `run_shortcut` |
> | **Communication** | `send_message`, `fac

## 延伸閱讀

相關概念：[[語音識別]] · [[自然語言處理]] · [[本地 AI 解決方案]]

[GitHub](https://github.com/RunanywhereAI/RCLI) · [官方網站](https://runanywhereai.github.io/RCLI/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的評估
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **實用性**：/5
> **技術新穎性**：/5
> **成熟度**：早期 / 可用 / 穩定
> 
> _想法、使用心得、跟其他工具的比較..._

### 試用記錄

試用日期 :: 
試用版本 :: 
安裝難度 :: 
試用結果 :: 

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
