---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 501
stars_per_day: 84
forks: 17
open_issues: 10
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "語音合成"
release_tag: "v0.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你的 Mac 透過語音操作，無需雲端，實現本地化的 AI 助手。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "讓你的 Mac 透過語音操作，無需雲端，實現本地化的 AI 助手。"
---

# RCLI

**501** stars · **84** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.3` `easy-install`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音操作，無需雲端，實現本地化的 AI 助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (84 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在 Apple Silicon 上運行本地語音助手的開發者和使用者。
> **一句話重點** RCLI 的本地化設計讓語音助手的使用更加私密和高效。

> [!abstract] 核心創新
> RCLI 提供了一個完全本地化的語音 AI 解決方案，無需依賴雲端。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，能夠在 Apple Silicon 上運行完整的語音轉文字（STT）、大型語言模型（LLM）及文字轉語音（TTS）管道。用戶可以透過語音指令控制 Mac 的 38 種操作，並且能夠對本地文檔進行快速查詢，延遲低於 200ms。這個工具使用了 MetalRT，一個專為 Apple Silicon 開發的 GPU 推理引擎，並且在性能上，MetalRT 的 STT 效能比實時快 714 倍。與其他語音助手相比，RCLI 完全在本地運行，無需 API 金鑰或雲端服務，這對於隱私保護至關重要。使用者可以透過簡單的命令行指令進行安裝和設置，並且支持多種文檔格式的查詢。儘管目前僅支援 macOS 13+ 和 M3 或更新的硬體，但其性能和功能使其在小型團隊或個人開發者中非常有吸引力。建議對於需要本地化語音助手的開發者使用，但若不在 Apple 硬體上，則無法使用。

**技術棧**：`C++` · `Shell` · `CMake` · `Ruby` · `Objective-C++`

## 重點功能

- 本地語音管道 — 完整的 STT + LLM + TTS 管道，無需雲端，延遲低於 200ms。
- 38 種 macOS 操作 — 支持通過語音控制多種系統操作，如開啟應用、調整音量等。
- 文檔智能查詢 — 支持 PDF、DOCX 和純文本的快速查詢，延遲約 4ms。
- 互動式 TUI — 提供推按說話、實時硬體監控和模型管理的終端界面。
- MetalRT 引擎 — 專為 Apple Silicon 開發的 GPU 推理引擎，性能優越。

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
> RCLI 的作者來自 RunAnywhere, Inc.，他們專注於本地 AI 解決方案。這個工具解決了之前語音助手需要依賴雲端的痛點，提供了一個完全本地化的解決方案。近期的推廣和社群討論也讓這個工具獲得了更多的關注。隨著 Apple Silicon 的普及，這個工具的實用性和需求也隨之增加。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音助手的開發者和使用者。

> [!example] 使用場景
> - 獨立開發者用它來快速查詢本地文檔，因為能在 4ms 內獲得回應，提升了工作效率。
> - 設計師用它來控制 Mac 的媒體播放，因為可以用語音指令輕鬆調整音量和播放列表，避免了手動操作的麻煩。
> - 學生用它來創建筆記和提醒，因為可以快速語音輸入，省下了打字的時間。

## 架構分析

RCLI 採用 CLI 架構，核心資料流為用戶輸入 → 語音處理 → 執行操作。使用 MetalRT 作為 GPU 推理引擎，並整合了多種語音處理技術。專案目錄結構包含 install.sh 和主要的 rcli 可執行檔，便於用戶安裝和使用。

## 技術深入分析

> [!note]- 展開深入分析
> RCLI 的核心演算法結合了 Silero 語音活動檢測、Zipformer 和 Whisper 技術，實現了高效的語音轉文字處理。MetalRT 引擎的設計使得 STT 和 TTS 的效能顯著提升，並且支持多線程處理以提高吞吐量。與其他語音助手相比，RCLI 的本地運行模式消除了對網路連接的依賴，這對於隱私和安全性至關重要。

## 優缺點分析

> [!success] 優點
> - 完全本地化，無需雲端，保護用戶隱私。
> - 高效能的語音處理，延遲低於 200ms。
> - 支持多種文檔格式的快速查詢，提升工作效率。

> [!danger] 缺點
> - 僅限於 Apple Silicon 硬體，無法在其他平台使用。
> - 對於小型 LLM，可能會因上下文影響準確性。
> - 目前功能仍在持續開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Apple Silicon 硬體。
> - 需要 M3 或更新的硬體以使用 MetalRT 引擎。
> - 對於小型 LLM，累積的上下文可能會影響工具調用的準確性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，並不具備語音識別和本地 AI 功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網路爬蟲，與 RCLI 的語音助手功能無關。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 17 |
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

**社群活躍度**：社群活躍，持續更新和改進。
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

相關概念：[[語音合成]] · [[本地 AI]] · [[隱私保護]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[alexa--alexa|alexa/alexa]] · [[google--assistant|google/assistant]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[inspatio--worldfm|inspatio/worldfm]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanishqkumar--ssd|tanishqkumar/ssd]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
