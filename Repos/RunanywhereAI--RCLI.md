---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 392
stars_per_day: 65
forks: 14
open_issues: 7
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "讓你的 Mac 透過語音控制，無需雲端，實現本地 AI 助手。"
---

# RCLI

**392** stars · **65** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音控制，無需雲端，實現本地 AI 助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (65 stars/day)
> **適合** 需要在 Apple Silicon 上運行本地語音 AI 助手的 macOS 用戶。
> **一句話重點** RCLI 證明了本地語音處理的潛力，讓用戶在不依賴雲端的情況下享受高效能的語音助手體驗。

> [!abstract] 核心創新
> RCLI 提供了最快的本地語音處理管道，無需依賴雲端服務。

## 專案簡介

RCLI 是一個運行於 macOS 的本地語音 AI，能夠透過語音指令控制 Mac，並且支持文件查詢。它的核心流程是通過語音識別（STT）、大語言模型（LLM）和語音合成（TTS）在 Apple Silicon 上實現即時交互，整體延遲低於 200 毫秒。技術上，RCLI 使用了 MetalRT 作為 GPU 推理引擎，並支持多達 38 種 macOS 操作。與其他雲端語音助手相比，RCLI 完全在本地運行，無需 API 金鑰，並且在性能上，MetalRT 的 STT 效能比實時快 714 倍。使用上，RCLI 需要 macOS 13 及以上版本，並且對於 M1/M2 的支援尚在開發中。這個專案目前處於 beta 階段，適合需要高效能語音控制的個人或小型團隊。建議在需要本地化語音處理而不想依賴雲端服務的情況下使用，但若需跨平台支援則不太適合。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++` · `MetalRT`

## 重點功能

- 完整的語音處理管道 — 包括 VAD、STT、LLM 和 TTS，實現即時語音交互。
- 38 種 macOS 操作 — 支持如開啟應用、調整音量等多種語音指令。
- 本地文件查詢（RAG） — 支持對 PDF、DOCX 等文件進行語音查詢，延遲約 4 毫秒。
- MetalRT GPU 引擎 — 提供高達 550 tok/s 的 LLM 吞吐量，確保高效能。
- 互動式 TUI — 提供即時的硬體監控和模型管理，便於用戶操作。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 啟動互動式 TUI
```bash
rcli
```

## 程式碼範例

```bash
rcli ask "open Safari"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者來自 RunAnywhere, Inc.，專注於開發針對 Apple Silicon 的高效能應用。隨著對隱私的重視增加，無需雲端的本地 AI 助手需求上升。這個專案在 Apple M3 推出後迅速受到關注，因為它充分利用了新硬體的性能。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音 AI 助手的 macOS 用戶。

> [!example] 使用場景
> - 設計師用它來快速查詢設計文檔，因為可以透過語音即時獲取資訊，提升工作效率。
> - 開發者用它來控制開發環境中的應用程式，因為可以用語音指令快速執行常用操作，節省時間。
> - 內容創作者用它來播放音樂或調整音量，因為可以在不離開工作的情況下輕鬆控制媒體播放。

## 架構分析

RCLI 採用單體架構，核心資料流為用戶輸入 → 語音處理 → 執行 macOS 操作。關鍵技術決策是使用 MetalRT 作為 GPU 推理引擎，專為 Apple Silicon 優化。專案目錄結構中，主要檔案包括 install.sh 和 rcli，負責安裝和啟動應用。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需雲端，保護用戶隱私。
> - 高效能，延遲低於 200 毫秒，適合即時應用。
> - 支持多種 macOS 操作，提升工作效率。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台運行。
> - 需要禁用 SIP，可能影響系統安全性。
> - 尚在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 13 以上版本，且需 Apple Silicon。
> - M1/M2 支援尚在開發中，可能會自動回退到 llama.cpp。
> - 需要禁用 SIP 以便提取密鑰。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 14 |
| Open Issues | 7 |
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
> | [@AmanSwar](https://github.com/AmanSwar) | 11 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.2 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍，持續更新中。
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
> **RCLI** is an on-device voice AI for macOS. A complete STT + LLM + TTS pipeline running natively on Apple Silicon — 38 macOS actions via voice, local RAG over your documents, sub-200ms end-to-end latency. No cloud, no API keys.
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
> Control Spotify, adjust volume — 38 macOS actions by voice.
> 
> Click for full video with audio
> 
> Models
> Browse models, hot-swap LLMs — all from the TUI.
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
> > [IMPORTANT]
> > **Requires macOS 13+ on Apple Silicon. MetalRT engine requires M3 or later.** M1/M2 Macs fall back to llama.cpp automatically.
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
> ## Quick Start
> 
> ```bash
> rcli                             # interactive TUI (push-to-talk + text)
> rcli listen                      # continuous voice mode
> rcli ask "open Safari"           # one-shot command
> rcli ask "play some jazz on Spotify"
> rcli metalrt                     # MetalRT GPU engine management
> rcli llamacpp                    # llama.cpp engine management
> ```
> 
> ## Benchmarks
> 
>   
>   
>   MetalRT decode throughput vs llama.cpp and Apple MLX on Apple M3 Max
> 
>   
>   
>   STT and TTS real-time factor — lower is better. MetalRT STT is 714x faster than real-time.
> 
> For More info : 
> - https://www.runanywhere.ai/blog/metalrt-fastest-llm-decode-engine-apple-silicon
> - https://www.runanywhere.ai/blog/metalrt-speech-fastest-stt-tts-apple-silicon
> - https://www.runanywhere.ai/blog/fastvoice-on-device-voice-ai-pipeline-apple-silicon
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
> ### 38 macOS Actions
> 
> Control your Mac by voice or text. The LLM routes intent to actions executed locally via AppleScript and shell commands.
> 
> | Category | Examples |
> |----------|---------|
> | **Productivity** | `create_note`, `create_reminder`, `run_shortcut` |
> | **Communication** | `send_message`, `facetime_call` |
> | **Media** | `play_on_spotify`, `play_apple_music`, `play_pause`, `next_track`, `set_music_volume` |
> | **System** | `open_app`, `quit_app`, `set_volume`, `toggle_dark_mode`, `screenshot`, `lock_screen` |
> | **Web** | `search_web`, `search_youtube`, `open_url`, `open_maps` |
> 
> Run `rcli actions` to see all 38, or toggle them on/off in the TUI Actions panel.
> 
> > **Tip:** If tool calling feels unreliable, press **X** in the TUI to clear the conversation and reset context. With small LLMs, accumulated context can degrade tool-calling accuracy — a fresh context often fixes it.
> 
> ### RAG (Local Document Q&A)
> 
> Index local documents, query them by voice. Hybrid vector + BM25 retrieval with ~4ms latency over 5K+ chunks. Supports PDF, DOCX, and plain text.
> 
> ```bash
> rcli rag ingest ~/Documents/notes
> rcli ask --rag ~/Library/RCLI/index "summarize the project plan"
> ```
> 
> ### Interactive T

## 延伸閱讀

相關概念：[[語音合成]] · [[自然語言處理]] · [[邊緣推論]]

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
