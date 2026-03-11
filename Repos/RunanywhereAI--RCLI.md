---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://runanywhereai.github.io/RCLI/"
stars: 619
stars_per_day: 103
forks: 18
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
use_case: "讓你在 Mac 上用語音控制應用程式，無需雲端，完全在本地運行。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:619"
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
  - "讓你在 Mac 上用語音控制應用程式，無需雲端，完全在本地運行。"
---

# RCLI

**513** stars · **86** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.3` `easy-install`

> [!summary] 一句話摘要
> 讓你在 Mac 上用語音控制應用程式，無需雲端，完全在本地運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (86 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 需要在 M3 Mac 上運行本地語音助手的開發者和普通用戶。
> **一句話重點** RCLI 的本地運行特性讓語音助手變得更快、更私密，適合需要快速查詢和操作的用戶。

> [!abstract] 核心創新
> RCLI 是一個完全本地運行的語音 AI，無需雲端支持，提供即時語音控制和文檔查詢。

## 專案簡介

RCLI 是一個在 macOS 上運行的本地語音 AI，能夠進行語音識別、語言模型推理和語音合成。用戶可以透過語音指令控制 Mac，執行 38 種操作，並能夠對本地文件進行查詢，整個過程的延遲低於 200 毫秒。它使用 MetalRT，一個專為 Apple Silicon 設計的 GPU 推理引擎，提供高達 550 tok/s 的 LLM 吞吐量。與其他工具相比，RCLI 的本地處理能力使得用戶不需要依賴雲端服務，這在隱私和速度上都有明顯優勢。它的文檔智能功能支持快速檢索，對於 5K+ 的文檔片段，查詢延遲僅約 4 毫秒。這個專案目前處於 beta 階段，適合需要快速、私密的語音助手的開發者和用戶。對於小型團隊或個人開發者來說，RCLI 是一個值得考慮的選擇，但在 M1/M2 上的性能會有所下降，建議使用 M3 或更高版本的設備。使用場景包括需要快速查詢文檔的專業人士，或是希望用語音控制日常任務的普通用戶。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C++`

## 重點功能

- 本地語音控制 — 支持 38 種 macOS 操作，如 `open_app`, `create_note`。
- 即時語音識別 — 使用 Zipformer 和 Whisper，提供 sub-200ms 的延遲。
- 文檔智能查詢 — 支持 PDF 和 DOCX 文件的快速檢索，查詢延遲約 4ms。
- MetalRT GPU 引擎 — 提供高達 550 tok/s 的 LLM 吞吐量，專為 Apple Silicon 設計。
- 互動式 TUI — 提供推按說話和模型管理的終端界面。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
3. 設置 RCLI
```bash
rcli setup
```

## 程式碼範例

bash
# 啟動 RCLI 互動式界面
rcli

# 使用語音指令打開 Safari
rcli ask "open Safari"

# 查詢文檔中的項目
rcli ask --rag ~/Library/RCLI/index "summarize the project plan"

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 RunAnywhere, Inc. 專注於開發本地 AI 解決方案，這是他們的最新產品。RCLI 解決了語音助手需要依賴雲端的痛點，讓用戶可以在本地進行語音識別和操作。近期的技術進步，尤其是 Apple Silicon 的性能提升，使得這種本地處理成為可能。這些因素共同推動了 RCLI 的關注度。

## 適合誰使用

**目標受眾**：需要在 M3 Mac 上運行本地語音助手的開發者和普通用戶。

> [!example] 使用場景
> - 設計師用它來快速查詢設計文檔，因為可以用語音指令在 4 毫秒內檢索信息，節省了手動搜索的時間。
> - 開發者用它來控制開發環境，例如用語音打開特定應用，因為這樣可以提高工作效率，讓雙手專注於鍵盤操作。
> - 普通用戶用它來播放音樂或調整音量，因為可以用語音指令控制 Spotify，避免了手動操作的麻煩。

## 架構分析

RCLI 採用單體架構，所有功能均在本地運行。用戶輸入 → 語音識別 → LLM 處理 → 語音合成。關鍵技術決策包括使用 MetalRT 作為 GPU 推理引擎，以提高性能。專案目錄結構中，主要的執行檔和配置文件集中在 `src` 和 `config` 資料夾中。

## 技術深入分析

RCLI 的核心技術機制包括使用 MetalRT 作為 GPU 推理引擎，這使得語音識別和合成的延遲大幅降低。它能夠處理多達 5K+ 的文檔片段，並在查詢時提供約 4 毫秒的延遲，這在同類工具中是相當優秀的。選擇 C++ 和 Objective-C++ 作為開發語言，能夠充分利用 Apple Silicon 的性能優勢，這樣的選擇使得 RCLI 可以在本地高效運行。隨著用戶量增加，可能會面臨性能瓶頸，特別是在 M1/M2 設備上，這需要進一步的優化和改進。安全性方面，由於所有數據處理都在本地進行，這大大降低了數據洩露的風險，這對於用戶來說是一個重要的考量。整體來看，RCLI 在本地語音助手領域提供了一個強有力的選擇，尤其是對於需要高效能和隱私保護的用戶。

## 優缺點分析

> [!success] 優點
> - 無需雲端，保護用戶隱私。
> - 低延遲的即時語音識別和合成，適合快速查詢。
> - 支持多種 macOS 操作，方便用戶日常使用。

> [!danger] 缺點
> - 僅支援最新的 Apple Silicon 設備。
> - 在 M1/M2 上性能不如 M3，可能影響使用體驗。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Apple Silicon。
> - 在 M1/M2 上性能不如 M3，會自動回退到 llama.cpp。
> - 目前處於 beta 階段，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供雲端語音助手的功能，但需要網路連接，而 RCLI 完全在本地運行，保護用戶隱私。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的語音助手，而 RCLI 是一個通用的本地語音助手，適用於各種日常任務。 |

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

**社群活躍度**：社群活躍度中等，有定期更新和維護。
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

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[alexa--alexa|alexa/alexa]] · [[google--assistant|google/assistant]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-11|2026-03-11]] — 再次上榜，619 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
