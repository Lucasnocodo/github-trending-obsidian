---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 430
stars_per_day: 72
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
  - "在 Mac 上使用本地語音 AI 查詢文件，無需雲端支持。"
---

# RCLI

**430** stars · **72** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 在 Mac 上使用本地語音 AI 查詢文件，無需雲端支持。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (72 stars/day)
> **適合** 需要在 Mac 上進行語音控制和文檔查詢的用戶，特別是重視隱私的使用者。
> **一句話重點** RCLI 的本地運行特性讓它在隱私和性能上具備優勢，特別適合對數據安全有高要求的用戶。

> [!abstract] 核心創新
> RCLI 提供了一個完全本地的語音 AI 解決方案，無需依賴雲端，確保用戶隱私和數據安全。

## 專案簡介

RCLI 是一款在 macOS 上運行的本地語音 AI，提供語音識別、語音合成和文檔檢索功能，無需依賴雲端服務。它利用 MetalRT GPU 引擎實現高效的語音處理，支持 38 種 macOS 操作，並能夠通過語音控制應用程式。用戶可以通過簡單的語音命令來執行操作，例如開啟應用或播放音樂，並且能夠快速檢索本地文檔中的信息。與其他雲端語音助手相比，RCLI 的本地運行方式提供了更高的隱私性和更低的延遲。實際使用中，語音識別和合成的延遲低於 200 毫秒，並且支持多種語音模型。這個專案目前處於穩定階段，適合需要高效語音控制的 macOS 用戶。建議在需要高效語音操作時使用，但如果不需要本地處理，雲端解決方案可能更為方便。

**技術棧**：`C++` · `Shell` · `Objective-C++`

## 重點功能

- 本地語音處理 — 完全在 Mac 上運行，無需雲端支持，提升隱私性。
- 支持 38 種 macOS 操作 — 用戶可以通過語音執行多種操作，如開啟應用、調整音量等。
- 文檔檢索功能 — 能夠快速查詢本地文檔，支持 PDF、DOCX 等格式。
- 高效的語音識別 — 延遲低於 200 毫秒，提供流暢的用戶體驗。
- MetalRT GPU 引擎 — 專為 Apple Silicon 優化，提供高效的推理性能。

## 快速開始

1. 使用 curl 安裝
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 使用 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 設置 RCLI
```bash
brew install rcli
rcli setup
```

## 程式碼範例

```bash
rcli ask "open Safari"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景強調隱私和本地處理，這在當前對數據隱私日益重視的環境中引起了關注。RCLI 的本地運行特性符合用戶對於安全和效率的需求，特別是在 Apple Silicon 上的優化使其性能更為突出。

## 適合誰使用

**目標受眾**：需要在 Mac 上進行語音控制和文檔查詢的用戶，特別是重視隱私的使用者。

> [!example] 使用場景
> - Mac 用戶用它來通過語音控制 Spotify 播放音樂，因為這樣可以解放雙手，提升使用效率。
> - 開發者用它來快速查詢本地文檔，因為能夠通過語音命令快速獲得所需信息，節省了查找時間。
> - 普通用戶用它來設置提醒和筆記，因為語音輸入比手動輸入更方便，尤其在忙碌時。

## 架構分析

這是一個單體應用，所有功能均在本地運行。用戶輸入 → 語音處理 → 執行 macOS 操作。關鍵技術決策包括使用 MetalRT 引擎進行高效的語音處理。專案結構簡單，主要文件為安裝腳本和核心執行檔。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，無需雲端，保障用戶隱私。
> - 支持多種語音操作，提升使用效率。
> - 高效的語音識別和合成，延遲低於 200 毫秒。

> [!danger] 缺點
> - 僅限於 macOS，無法在其他操作系統上使用。
> - 需要特定的硬體支持，對於舊款 Mac 可能不適用。
> - 安裝過程中需要額外的工具依賴。

> [!warning] 注意事項
> - 僅支持 macOS 13+ 的 Apple Silicon。
> - 需要安裝 jq 和 curl 等工具。
> - 對於 M1/M2 用戶，性能可能不如 M3 及以上版本。

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
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 76 |
> | [@AmanSwar](https://github.com/AmanSwar) | 13 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.2 (2026-03-10)

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

相關概念：[[語音合成]] · [[語音識別]] · [[本地 AI]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
