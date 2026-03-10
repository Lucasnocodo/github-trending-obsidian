---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 380
stars_per_day: 63
forks: 12
open_issues: 6
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
  - "讓你的 Mac 透過語音控制，無需雲端，直接在裝置上運行 AI。"
---

# RCLI

**380** stars · **63** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.2` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音控制，無需雲端，直接在裝置上運行 AI。

> [!abstract] 核心創新
> 提供完整的本地語音 AI 解決方案，無需雲端服務。

## 專案簡介

RCLI 是一個在 macOS 上運行的語音 AI，提供完整的語音轉文字、語言模型和文字轉語音的管道，並且所有處理都在 Apple Silicon 上本地完成。它使用 MetalRT 作為專有的 GPU 推理引擎，支援 43 種 macOS 操作，並且具備低於 200ms 的延遲。與其他語音助手相比，RCLI 不需要雲端服務或 API 金鑰，完全在本地運行，這使得使用者的隱私得到更好的保護。使用者可以透過語音或文字控制 Mac，並且能夠快速查詢文件，實現即時的文檔智能。雖然目前僅支援 macOS 13 以上的 Apple Silicon，但對於需要本地化語音控制的使用者來說，這是一個非常有價值的工具。整體來說，RCLI 的成熟度不錯，適合希望提升工作效率的 Mac 使用者。

**技術棧**：`C++` · `Shell` · `C` · `CMake` · `Ruby` · `Objective-C++`

## 重點功能

- 完整的語音轉文字、語言模型和文字轉語音管道。
- 支持 43 種 macOS 操作的語音控制。
- 在 Apple Silicon 上本地運行，無需雲端。
- 低於 200ms 的端到端延遲。
- 即時文檔智能查詢，支持語音提問。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 設置 RCLI
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 啟動互動式 TUI
```bash
rcli
```
4. 進入持續語音模式
```bash
rcli listen
```
5. 執行單次命令
```bash
rcli ask "open Safari"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者來自 RunAnywhere, Inc.，專注於開發針對 Apple Silicon 的應用，切中對於本地化語音助手的需求。隨著人們對隱私的重視增加，無需雲端的解決方案變得越來越受歡迎。這個專案在技術上也展示了 Apple 硬體的潛力，吸引了開發者的注意。

## 適合誰使用

**目標受眾**：希望在 Mac 上使用本地語音助手的專業人士和開發者。

> [!example] 使用場景
> - 軟體開發者 用它來 控制開發環境，因為可以快速執行命令而不需手動輸入。
> - 設計師 用它來 調整音樂播放，因為可以專注於創作而不被打斷。
> - 學生 用它來 查詢學習資料，因為能夠快速獲得所需資訊而不需翻閱文件。

## 架構分析

專案採用前後端分離架構，前端使用 TUI 進行語音交互，後端則利用 MetalRT 進行 GPU 加速推理。用戶的語音指令經過處理後，直接在本地執行相應的 macOS 操作。

## 優缺點分析

> [!success] 優點
> - 無需雲端，保護用戶隱私。
> - 低延遲的本地處理，提升使用體驗。
> - 多種語音控制功能，適用於各種場景。

> [!danger] 缺點
> - 僅限於 Apple Silicon 硬體。
> - 功能仍在開發中，可能不夠成熟。
> - 需要一定的技術背景來設置和使用。

> [!warning] 注意事項
> - 僅支援 macOS 13 以上版本。
> - 需要 Apple Silicon 硬體。
> - 目前功能仍在持續開發中，可能存在不穩定性。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 12 |
| Open Issues | 6 |
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

**社群活躍度**：每週有穩定的更新和維護，社群活躍度良好。
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

相關概念：[[語音合成]] · [[自然語言處理]] · [[機器學習]]

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
