---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 471
stars_per_day: 79
forks: 16
open_issues: 10
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: "v0.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你的 Mac 透過語音助手進行操作，無需雲端，完全在本地運行。"
priority: medium
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
  - "讓你的 Mac 透過語音助手進行操作，無需雲端，完全在本地運行。"
---

# RCLI

**471** stars · **79** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.3` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音助手進行操作，無需雲端，完全在本地運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (79 stars/day)
> **適合** 需要在 Apple Silicon 上運行本地語音 AI 的獨立開發者和專業人士。
> **一句話重點** RCLI 的最大優勢在於其完全本地化的設計，讓用戶在不依賴雲端的情況下享受高效的語音助手體驗。

> [!abstract] 核心創新
> RCLI 是首個在 Apple Silicon 上實現的完全本地語音 AI，無需雲端服務。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，能夠實現語音控制和文檔查詢。它的核心流程是通過語音輸入來執行 38 種 macOS 操作，並且支持對本地文檔進行檢索和提問，整個過程延遲低於 200 毫秒。技術上，它使用了 MetalRT 作為 GPU 推理引擎，專為 Apple Silicon 優化，並結合了多種語音識別和合成技術，如 Zipformer 和 Whisper。與其他語音助手相比，RCLI 不依賴雲端服務，這使得它在隱私和速度上具有優勢。實際使用中，RCLI 能夠在 M3 Max 上實現 STT 和 TTS 的即時反應，並且支持多達 5K+ 文檔的快速檢索。這個專案目前處於 beta 階段，對於需要快速本地語音處理的開發者來說非常值得一試。建議在需要高效能語音控制的環境中使用，但如果你的硬體不支持 MetalRT，則可能會遇到性能瓶頸。

**技術棧**：`C++` · `Shell` · `CMake` · `Ruby` · `Objective-C++`

## 重點功能

- 本地語音處理 — 完整的 STT + LLM + TTS 管道，無需雲端，延遲低於 200 毫秒。
- 38 種 macOS 操作 — 支持語音控制多種系統功能，如開啟應用、播放音樂、調整音量等。
- 文檔智能檢索 — 支持 PDF、DOCX 和純文本的本地文檔檢索，查詢延遲約 4 毫秒。
- 互動式 TUI — 提供推按說話、模型管理和操作瀏覽的終端界面。
- MetalRT 引擎 — 專為 Apple Silicon 優化的 GPU 推理引擎，支持高效能的語音識別和合成。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 設置 AI 模型
```bash
rcli setup
```

## 程式碼範例

rcli ask "open Safari"

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景來自 RunAnywhere, Inc.，專注於本地 AI 解決方案，切中了對隱私和速度的需求。隨著 Apple Silicon 的普及，這個專案的需求逐漸上升，特別是在不希望依賴雲端的用戶中。最近的版本更新進一步提升了性能和穩定性。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音 AI 的獨立開發者和專業人士。

> [!example] 使用場景
> - 產品經理用它來快速查詢本地文檔的關鍵資訊，因為它能在 ~4ms 內完成檢索，節省了大量手動搜索的時間。
> - 開發者用它來通過語音控制 Mac 的應用程式，因為可以用簡單的語音指令來執行多達 38 種操作，提升了工作效率。
> - 設計師用它來調整音樂播放和音量，因為可以用語音命令控制 Spotify 和 Apple Music，讓工作環境更流暢。

## 架構分析

RCLI 採用 CLI 工具架構，核心資料流為用戶語音輸入 → MetalRT 引擎處理 → 執行 macOS 操作或返回語音回應。關鍵技術決策在於使用 MetalRT 進行 GPU 加速，並整合多種語音處理技術。專案目錄結構中，主要的執行檔和配置檔位於 src 和 config 目錄下。

## 技術深入分析

> [!note]- 展開深入分析
> RCLI 的核心演算法結合了多種語音處理技術，包括 Silero 的語音活動檢測和 Zipformer 的即時語音識別。MetalRT 引擎的設計使其在 Apple M3 Max 上的 STT 和 TTS 性能達到即時反應，並且在多任務處理時保持高效能。與其他語音助手相比，RCLI 的設計選擇專注於本地運行，這使得它在隱私和速度上具有顯著優勢。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，無需雲端，提升隱私性。
> - 低延遲的語音處理，適合即時應用。
> - 支持多種 macOS 操作，提升工作效率。
> - 可擴展性強，支持多種文檔格式的檢索。

> [!danger] 缺點
> - 僅限於 Apple Silicon，對於其他平台無法使用。
> - 需要較新的硬體才能發揮最佳性能。
> - 目前功能仍在持續開發中，可能存在不穩定性。
> - 對於小型 LLM，累積的上下文可能影響準確性。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 的 Apple Silicon。
> - MetalRT 引擎需要 M3 或更高版本的硬體。
> - 對於 M1/M2 Mac，會自動回退到 llama.cpp，性能可能不如 M3。
> - 目前處於 beta 階段，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[alexa--alexa\|alexa/alexa]] | Alexa 依賴雲端服務進行語音識別和控制，而 RCLI 完全在本地運行，提供更快的反應時間和更高的隱私性。 |
| [[google--assistant\|google/assistant]] | Google Assistant 需要網路連接來執行大部分功能，而 RCLI 可以在無網路的情況下運行，適合對隱私有高要求的用戶。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 16 |
| Open Issues | 10 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://runanywhereai.github.io/RCLI/) |
| Repo 大小 | 9.5 MB |

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
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 79 |
> | [@AmanSwar](https://github.com/AmanSwar) | 13 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.3 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新中。
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
> rcli setup          # required — downloads AI models (~1GB, one-time)
> ```
> 
> **Upgrade to latest:**
> 
> ```bash
> brew update
> brew upgrade rcli
> ```
> 
> Troubleshooting: SHA256 mismatch or stale version
> 
> If `brew install` or `brew upgrade` fails with a checksum error:
> 
> ```bash
> # Force-refresh the tap to pick up the latest formula
> cd $(brew --repo RunanywhereAI/rcli) && git fetch origin && git reset --hard origin/main
> brew reinstall rcli
> ```
> 
> If that doesn't work, clean re-tap and clear the download cache:
> 
> ```bash
> brew untap RunanywhereAI/rcli
> rm -rf "$(brew --cache)/downloads/"*rcli*
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
> | **Web**

## 延伸閱讀

相關概念：[[語音合成]] · [[本地 AI]] · [[隱私保護]] · [[自動化測試]]

相關專案：[[alexa--alexa|alexa/alexa]] · [[google--assistant|google/assistant]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

[GitHub](https://github.com/RunanywhereAI/RCLI) · [官方網站](https://runanywhereai.github.io/RCLI/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "RunanywhereAI--RCLI"
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
