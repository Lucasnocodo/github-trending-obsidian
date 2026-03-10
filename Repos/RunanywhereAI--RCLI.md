---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 448
stars_per_day: 75
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
  - "讓你的 Mac 透過語音指令執行操作，無需雲端支持。"
---

# RCLI

**448** stars · **75** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.3` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音指令執行操作，無需雲端支持。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (75 stars/day)
> **適合** 需要在 Apple Silicon 上運行本地語音助手的開發者和使用者。
> **一句話重點** RCLI 的創新在於它能在不依賴雲端的情況下，提供高效能的語音助手體驗，特別適合對隱私有高要求的用戶。

> [!abstract] 核心創新
> RCLI 是第一個在 Apple Silicon 上實現全本地語音 AI 的解決方案，無需雲端支持。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，能夠實現語音控制和文件查詢。它的核心流程是用戶透過語音發出指令，RCLI 會即時處理並執行相應的 macOS 操作，並且支持本地文檔檢索。這個專案使用了 MetalRT，一個專為 Apple Silicon 開發的 GPU 推理引擎，實現了低於 200ms 的端到端延遲。與其他語音助手相比，RCLI 完全在本地運行，無需雲端或 API 金鑰，這對於隱私保護至關重要。實際使用中，RCLI 支持 38 種 macOS 操作，並且在 M3 Max 上的 STT 和 TTS 性能表現優異，STT 的實時因子達到 714 倍於實時。這個專案目前處於 beta 階段，適合對隱私有高要求的獨立開發者或小型團隊使用。建議在需要快速語音控制或文檔查詢的情況下使用，但對於不在 Apple Silicon 上的用戶則不太適合。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 本地語音控制 — 支持 38 種 macOS 操作，無需雲端。
- 高效能 STT/TTS — MetalRT 引擎實現 STT 714 倍於實時的性能。
- 文檔智能檢索 — 透過語音詢問文檔，延遲僅約 4ms。
- 多模型支持 — 可熱切換 LLM 模型，方便用戶根據需求調整。
- 簡易安裝 — 只需一條命令即可安裝和設置。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git && brew install rcli
```
3. 啟動 RCLI
```bash
rcli
```

## 程式碼範例

rcli ask "open Safari"  # 一次性命令打開 Safari

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者來自 RunAnywhere, Inc.，專注於本地 AI 解決方案，切中對隱私的需求。隨著 Apple Silicon 的普及，對於本地運行的高效能語音助手需求上升，讓 RCLI 在市場上獲得了關注。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音助手的開發者和使用者。

> [!example] 使用場景
> - 獨立開發者用它來快速查詢文檔，因為可以即時獲得答案而不必手動搜尋。
> - 設計師用它來控制音樂播放，因為可以在工作時不打斷流程，提升效率。
> - 系統管理員用它來執行系統命令，因為語音指令能夠加快操作速度，讓工作更流暢。

## 架構分析

RCLI 採用單體架構，所有功能都在本地運行。用戶輸入 → RCLI 處理 → 執行 macOS 操作。關鍵技術決策是使用 MetalRT 引擎來提升性能。專案的目錄結構包括主要的安裝腳本和配置文件，方便用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保護用戶隱私。
> - 高效能的語音識別和合成，提升使用體驗。
> - 支持多種 macOS 操作，方便用戶日常使用。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - 仍在 beta 階段，可能存在不穩定性。
> - 需要一定的硬體要求，無法在舊款設備上運行。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 的 Apple Silicon。
> - 需要 M3 或更高版本的硬體來充分利用 MetalRT 引擎。
> - 不支援非 Apple Silicon 的設備。
> - 目前仍在 beta 階段，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[alexa--alexa-skills-kit\|alexa/alexa-skills-kit]] | Alexa 需要雲端支持，無法在本地運行，並且對於隱私的保護較弱。 |
| [[google--assistant-sdk\|google/assistant-sdk]] | Google Assistant 也依賴雲端，無法提供本地文檔查詢的即時性。 |

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
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 76 |
> | [@AmanSwar](https://github.com/AmanSwar) | 13 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |

**最新版本**：v0.3.3 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
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

相關專案：[[alexa--alexa-skills-kit|alexa/alexa-skills-kit]] · [[google--assistant-sdk|google/assistant-sdk]]

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
