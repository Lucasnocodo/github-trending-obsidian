---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 339
stars_per_day: 57
forks: 12
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v0.3.1"
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
  - "讓你的 Mac 可以透過語音控制，無需雲端服務。"
---

# RCLI

**339** stars · **57** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.1` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 可以透過語音控制，無需雲端服務。

> [!abstract] 核心創新
> RCLI 是一個完全在 Apple Silicon 上運行的本地語音 AI，無需雲端服務。

## 專案簡介

RCLI 是一個在 macOS 上運行的本地語音 AI，能夠實現即時的語音識別、語音合成和語言模型推理。它使用 Metal GPU 進行高效能運算，支援 43 種 macOS 操作，並且能夠在 200 毫秒內完成語音到行動的轉換。與其他雲端語音助手不同，RCLI 完全在本地執行，無需依賴網路或 API 金鑰，這使得使用者的隱私得到保障。實際使用中，RCLI 能夠快速響應語音指令，並且支持多輪對話，適合需要快速反應的工作環境。不過，該工具目前僅支援 Apple Silicon 的 macOS 13 以上版本，限制了使用範圍。整體來看，這是一個成熟且值得嘗試的工具，特別適合開發者和需要高效能語音控制的使用者。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 本地運行的語音識別、語言模型和語音合成。
- 支援 43 種 macOS 操作的語音控制。
- 低於 200 毫秒的端到端延遲。
- 無需雲端，保護使用者隱私。
- 多輪對話能力，支持持續的語音交互。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 啟動 RCLI
```bash
rcli
```

## 為什麼值得關注

> [!tip] 爆紅原因
> RCLI 由專注於 Apple Silicon 的 RunAnywhere, Inc. 開發，滿足了對於本地語音處理的需求。隨著對隱私的重視增加，無需雲端的解決方案變得越來越受歡迎。這個專案在最近的更新中引入了多項新功能，進一步提升了其吸引力。

## 適合誰使用

**目標受眾**：對於需要高效能語音控制的 macOS 使用者，特別是開發者和創作者。

> [!example] 使用場景
> - 開發者 用它來 控制開發環境，因為可以快速執行命令而不需要手動輸入。
> - 設計師 用它來 調整音量和播放音樂，因為可以專注於創作而不被打擾。
> - 學生 用它來 查詢資料和筆記，因為可以透過語音快速獲取資訊。

## 架構分析

RCLI 採用前後端分離架構，前端使用命令行界面，後端則利用 Metal GPU 進行語音處理和指令執行。用戶的語音輸入經過 STT 模組轉換為文本，然後由 LLM 處理並執行相應的 macOS 操作。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保護使用者隱私。
> - 快速響應，適合即時操作。
> - 支援多種 macOS 操作，功能強大。

> [!danger] 缺點
> - 僅限於 Apple Silicon，限制了使用範圍。
> - 需要較高的系統資源以確保流暢運行。
> - 尚未支援其他平台或系統。

> [!warning] 注意事項
> - 僅支援 macOS 13 以上版本。
> - 僅支援 Apple Silicon。
> - 需要一定的系統資源以保證流暢運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Siri | Siri 依賴雲端服務，而 RCLI 完全在本地運行。 |
| Google Assistant | Google Assistant 需要網路連接，而 RCLI 提供離線功能。 |

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
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 74 |
> | [@AmanSwar](https://github.com/AmanSwar) | 5 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.1 (2026-03-10)

## 社群與生態

**社群活躍度**：每週有穩定的更新和社群互動。
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

相關概念：[[語音識別]] · [[自然語言處理]] · [[本地計算]] · [[隱私保護]] · [[即時反應系統]]

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
