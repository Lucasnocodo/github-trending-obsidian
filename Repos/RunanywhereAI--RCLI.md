---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 294
stars_per_day: 49
forks: 10
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: "v0.3.1"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - ai_ml
  - c++
  - ai_assistant
  - apple_silicon
  - automation
  - cli
  - cpp
aliases:
  - "RCLI"
  - "RunanywhereAI/RCLI"
  - "讓你在 Mac 上用語音控制操作，無需雲端服務。"
---

# RCLI

**294** stars · **49** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.1` `easy-install`

> [!summary] 一句話摘要
> 讓你在 Mac 上用語音控制操作，無需雲端服務。

> [!abstract] 核心創新
> RCLI 提供了一個完全本地的語音 AI 解決方案，無需依賴雲端。

## 專案簡介

RCLI 是一款專為 macOS 設計的本地語音 AI，能夠執行 43 種操作，並且在 Apple Silicon 上運行，實現低於 200ms 的延遲。它結合了語音識別（STT）、大型語言模型（LLM）和語音合成（TTS），所有處理都在本地完成，無需依賴雲端。使用 MetalRT 作為 GPU 推理引擎，這使得性能優於許多依賴雲端的語音助手。與其他語音助手相比，RCLI 的獨特之處在於其完全的本地處理能力，這意味著用戶的隱私得到更好的保護。儘管目前僅支援 Apple Silicon，但其快速的文檔檢索和操作執行能力，讓它在特定場景下表現出色。對於需要高效能語音控制的 macOS 用戶來說，RCLI 是一個值得嘗試的選擇。

**技術棧**：`C++` · `Shell` · `C` · `CMake` · `Ruby` · `Objective-C++`

## 重點功能

- 本地語音識別和合成，無需雲端支持。
- 支援 43 種 macOS 操作的語音控制。
- 使用 MetalRT 引擎，實現高效能的 GPU 推理。
- 提供多輪對話記憶功能，提升交互體驗。
- 快速的文檔檢索能力，僅需約 4ms。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
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
5. 啟動互動式介面
```bash
rcli
```

## 為什麼值得關注

> [!tip] 爆紅原因
> RCLI 的開發者來自 RunAnywhere, Inc.，專注於本地 AI 解決方案，切合了對隱私和性能的需求。隨著 Apple Silicon 的普及，越來越多的用戶尋求不依賴雲端的本地解決方案。這個專案在短時間內獲得了不少關注，因為它提供了一個強大的替代品，特別是在語音控制領域。

## 適合誰使用

**目標受眾**：使用 macOS 的開發者和需要高效語音控制的用戶。

> [!example] 使用場景
> - 軟體工程師 用它來 控制開發環境，因為可以快速執行命令而不需手動操作。
> - 學生 用它來 查詢學習資料，因為能夠快速獲得答案而不需打字。
> - 音樂愛好者 用它來 控制音樂播放，因為可以用語音輕鬆切換曲目。

## 架構分析

RCLI 採用前後端分離架構，前端為用戶界面，後端則是基於 MetalRT 的語音處理引擎，資料流為用戶語音輸入 → 語音識別 → LLM 處理 → 語音合成 → 執行操作。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保護用戶隱私。
> - 快速響應時間，提升使用體驗。
> - 支援多種 macOS 操作，方便用戶使用。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - 功能相對較少，尚需擴展。
> - 仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Apple Silicon。
> - 目前功能較為集中於 macOS 操作，對其他平台支援有限。
> - 仍在開發中，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Siri | Siri 依賴雲端服務，而 RCLI 完全在本地運行。 |
| Google Assistant | Google Assistant 需要網路連接，RCLI 則可離線使用。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 10 |
| Open Issues | 3 |
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
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 71 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 3 |
> | [@AmanSwar](https://github.com/AmanSwar) | 1 |

**最新版本**：v0.3.1 (2026-03-10)

## 社群與生態

**社群活躍度**：社群正在快速成長，最近有多次更新和活躍的討論。
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

相關概念：[[語音識別]] · [[自然語言處理]] · [[本地 AI 解決方案]] · [[大型語言模型]] · [[隱私保護]]

[GitHub](https://github.com/RunanywhereAI/RCLI) · [官方網站](https://runanywhereai.github.io/RCLI/)

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
