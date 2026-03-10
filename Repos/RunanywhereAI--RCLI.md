---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 351
stars_per_day: 59
forks: 12
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v0.3.2"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
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
  - "讓你在 Mac 上用語音控制操作，無需雲端服務。"
---

# RCLI

**351** stars · **59** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 讓你在 Mac 上用語音控制操作，無需雲端服務。

> [!abstract] 核心創新
> RCLI 提供了一個完整的本地語音 AI 解決方案，無需雲端依賴，並且延遲極低。

## 專案簡介

RCLI 是一個在 macOS 上運行的本地語音 AI，能夠通過語音指令執行 43 種操作，並且不依賴雲端。它使用了 MetalRT 作為 GPU 推理引擎，實現了 STT（語音轉文字）、LLM（大型語言模型）和 TTS（文字轉語音）的完整流程，延遲低於 200 毫秒。與其他語音助手相比，RCLI 的特點在於其完全本地化的運行，避免了雲端依賴和隱私問題。使用者可以即時控制應用程式，如 Spotify，並且能夠通過語音查詢文件，實現快速響應。這個工具的效能在 Apple Silicon 上表現優異，但目前僅支援 macOS 13 以上版本。整體來看，RCLI 是一個值得嘗試的工具，特別適合需要高效能語音控制的開發者或重度使用 Mac 的用戶。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 本地運行的語音 AI，無需雲端服務。
- 支持 43 種 macOS 操作的語音控制。
- 低於 200 毫秒的端到端延遲。
- 完整的 STT、LLM 和 TTS 流程。
- 使用 MetalRT 作為 GPU 推理引擎。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 或使用 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 安裝 RCLI
```bash
brew install rcli
```
4. 設置 RCLI
```bash
rcli setup
```
5. 啟動 RCLI 互動界面
```bash
rcli
```

## 為什麼值得關注

> [!tip] 爆紅原因
> RCLI 由 RunAnywhere, Inc. 開發，專注於本地化的語音 AI 解決方案，滿足了對隱私和即時反應的需求。隨著 Apple Silicon 的普及，這個專案的實用性大幅提升，吸引了許多開發者的注意。近期的更新和功能增強使得它在 GitHub 上獲得了更多的關注。

## 適合誰使用

**目標受眾**：需要在 Mac 上進行語音控制的開發者和重度使用者。

> [!example] 使用場景
> - 開發者 用它來 控制開發環境，因為可以快速執行命令而不需手動輸入。
> - 音樂愛好者 用它來 控制 Spotify，因為可以用語音輕鬆播放喜愛的音樂。
> - 學生 用它來 查詢文件，因為能夠快速獲取所需資訊而不需手動搜尋。

## 架構分析

RCLI 採用前後端分離架構，前端使用 TUI 進行交互，後端則利用 MetalRT 進行語音處理和命令執行。

## 優缺點分析

> [!success] 優點
> - 完全本地化運行，保護用戶隱私。
> - 低延遲的語音響應，提升使用體驗。
> - 支持多種 macOS 操作，功能強大。

> [!danger] 缺點
> - 僅限於 macOS 平台，無法跨平台使用。
> - 需要 Apple Silicon，對於舊款 Mac 不支援。
> - 功能目前仍在持續更新中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 13 以上版本。
> - 需要 Apple Silicon (M1 或更高版本)。
> - 目前功能集中於 macOS 操作，對其他平台不支援。

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

**社群活躍度**：社群活躍，定期更新和修復問題。
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

相關概念：[[語音識別]] · [[自然語言處理]] · [[本地化 AI 解決方案]]

[GitHub](https://github.com/RunanywhereAI/RCLI) · [官方網站](https://runanywhereai.github.io/RCLI/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "RunanywhereAI--RCLI"
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
