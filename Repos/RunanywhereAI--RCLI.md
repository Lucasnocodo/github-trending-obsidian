---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 416
stars_per_day: 69
forks: 15
open_issues: 8
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

**416** stars · **69** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音控制，無需雲端，實現本地 AI 助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (69 stars/day)
> **適合** 需要在 Apple Silicon 上實現高效能語音控制的 macOS 使用者。
> **一句話重點** RCLI 的本地語音 AI 解決方案讓使用者可以在不依賴雲端的情況下，享受即時和高效的語音交互體驗。

> [!abstract] 核心創新
> RCLI 提供了完整的本地語音 AI 管道，無需雲端支持，實現即時反應。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，提供完整的語音識別（STT）、大型語言模型（LLM）和語音合成（TTS）管道。它利用 MetalRT 引擎在 Apple Silicon 上實現低於 200ms 的延遲，並支持 38 種 macOS 操作的語音控制。使用者可以透過語音命令控制應用程式、查詢文件，並且所有操作均在本地完成，無需雲端服務。與其他語音助手相比，RCLI 的本地執行和即時反應使其在隱私和效率上有明顯優勢。使用者可以輕鬆地索引本地文件並進行語音查詢，延遲僅約 4ms，支持多種文件格式。這個專案目前處於 beta 階段，適合需要高效能和隱私保護的開發者或重度 macOS 使用者。若你希望在不依賴雲端的情況下進行語音互動，RCLI 是個不錯的選擇，但若你需要跨平台支持，則可能需要考慮其他方案。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 本地語音識別 — 使用 Silero 和 Whisper 技術，提供即時語音轉文字功能。
- 多達 38 種 macOS 操作 — 包括控制音樂播放、開啟應用程式等，透過語音指令執行。
- 本地文檔查詢 — 支持 PDF 和 DOCX 文件的快速索引和查詢，延遲僅約 4ms。
- MetalRT 引擎 — 專為 Apple Silicon 優化的高效能 GPU 推理引擎，提供低延遲的語音交互。
- 互動式 TUI — 提供用戶友好的終端界面，支持即時監控和操作管理。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 啟動 RCLI 互動模式
```bash
rcli
```
3. 使用語音命令開啟應用程式
```bash
rcli ask 'open Safari'
```

## 程式碼範例

```bash
rcli ask 'play some jazz on Spotify'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> RCLI 的開發團隊專注於 Apple Silicon 的性能優化，滿足了對於本地 AI 助手的需求。隨著人們對隱私的重視增加，無需雲端的解決方案變得更具吸引力。這個專案在 Apple M3 上的表現優越，讓它在同類產品中脫穎而出。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上實現高效能語音控制的 macOS 使用者。

> [!example] 使用場景
> - 設計師用它來快速開啟應用程式，因為語音指令比手動操作更高效。
> - 開發者用它來查詢文檔內容，因為本地處理避免了網路延遲。
> - 學生用它來控制音樂播放，因為可以專注於學習而不必中斷手頭的工作。

## 架構分析

RCLI 採用單體架構，核心資料流為：用戶語音輸入 → MetalRT 引擎處理 → 語音回應。關鍵技術決策包括使用 MetalRT 進行 GPU 加速和支持多種語音操作。專案目錄結構中，主要檔案包括安裝腳本和配置文件。

## 優缺點分析

> [!success] 優點
> - 本地處理，無需網路連接，保護用戶隱私。
> - 低延遲反應，提升使用體驗。
> - 支持多種語音操作，方便快捷。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - M1/M2 性能不佳，可能影響使用體驗。
> - 需要禁用 SIP，對於某些用戶來說可能不方便。

> [!warning] 注意事項
> - 僅支持 macOS 13+ 和 Apple Silicon。
> - M1/M2 版本性能較差，需回退至 llama.cpp 引擎。
> - 需要禁用 SIP 以提取密鑰。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 15 |
| Open Issues | 8 |
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

**社群活躍度**：社群活躍，定期更新和維護。
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

相關概念：[[語音合成]] · [[本地 AI]] · [[RAG]]

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
