---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://github.com/RunanywhereAI/runanywhere-sdks"
stars: 622
stars_per_day: 104
forks: 19
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
use_case: "在 Mac 上使用語音 AI 查詢文件，無需雲端支持。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:619,2026-03-11:622"
tags:
  - github
  - "category/ai_ml"
  - "lang/c++"
  - org
  - easy_install
  - "topic/ai_assistant"
  - "topic/apple_silicon"
  - "topic/kitten_tts"
  - "topic/kokoro_tts"
  - "topic/lfm2"
aliases:
  - "RCLI"
  - "RunanywhereAI/RCLI"
  - "在 Mac 上使用語音 AI 查詢文件，無需雲端支持。"
---

# RCLI

**622** stars · **104** stars/天 · 建立 6 天前 · C++ · MIT

`ORG` `v0.3.3` `easy-install`

> [!summary] 一句話摘要
> 在 Mac 上使用語音 AI 查詢文件，無需雲端支持。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (104 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在 Apple Silicon 上運行本地語音 AI 的開發者和高效能用戶。
> **一句話重點** RCLI 是一個專為 Apple Silicon 設計的本地語音 AI 工具，無需雲端支持，提供快速和高效的語音交互體驗。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的本地語音 AI 體驗，值得嘗試。

> [!abstract] 核心創新
> RCLI 提供了在 Apple Silicon 上運行的本地語音 AI 解決方案，無需雲端支持。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，無需雲端或 API 金鑰，提供完整的語音轉文字（STT）、大型語言模型（LLM）和文字轉語音（TTS）管道。用戶可以透過語音控制 Mac，執行 38 種本地操作，並且能夠對本地文件進行快速查詢，延遲低於 200 毫秒。安裝過程簡單，只需一條命令即可完成設置，並支持 Homebrew 安裝。RCLI 使用 MetalRT 引擎，專為 Apple Silicon 優化，提供高達 550 tok/s 的 LLM 吞吐量和超低延遲。這個工具的賣點在於其本地運行的能力，避免了雲端依賴，並能在 M3 或更高版本的 Apple 硬體上充分發揮性能。RCLI 的技術架構基於 C++ 和 CMake，並使用了多種開源庫來實現 STT 和 TTS 功能。相較於其他語音助手（如 Siri 或 Google Assistant），RCLI 提供更高的本地化控制和更快的響應速度，特別適合需要高效能語音交互的開發者和用戶。使用者可以透過簡單的 CLI 指令來控制應用程式或查詢文件，這在需要快速反應的工作環境中尤為重要。RCLI 的社群活躍度尚可，但目前仍有一些開放的問題需要解決，例如 #9 的 segmentation fault 和 #20 的全局觸發設置問題。整體來看，這是一個有潛力的工具，適合對本地語音 AI 有需求的 macOS 用戶，尤其是那些希望減少雲端依賴的開發者。

**技術棧**：`C++` · `CMake` · `Shell`

## 重點功能

- 本地運行 — 完整的 STT + LLM + TTS 管道，無需雲端支持。
- MetalRT 引擎 — 專為 Apple Silicon 優化，提供高達 550 tok/s 的 LLM 吞吐量。
- 38 種 macOS 操作 — 支持語音控制，如播放音樂、調整音量等。
- 文檔智能（RAG） — 支持對本地文檔進行快速查詢，延遲低於 4 毫秒。
- 互動式 TUI — 提供推按說話、實時監控和模型管理的終端界面。

## 快速開始

1. 安裝 RCLI
```bash
curl -fsSL https://raw.githubusercontent.com/RunanywhereAI/RCLI/main/install.sh | bash
```
2. 透過 Homebrew 安裝
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git && brew install rcli
```
3. 設置 AI 模型
```bash
rcli setup
```

## 程式碼範例

{
  "前置條件": "需要安裝 RCLI 並設置 AI 模型。",
  "指令": "rcli ask \"open Safari\"",
  "預期輸出": "打開 Safari 瀏覽器。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 622 stars（104/天），forks 19（3.1%），顯示出一定的社群興趣。作者 RunAnywhere, Inc. 專注於 Apple Silicon 的本地 AI 解決方案，解決了在無法依賴雲端的情況下，如何高效運行語音 AI 的痛點。這個專案的推出正值本地運算需求上升的時期，特別是在隱私和數據安全方面。forks/stars 比率相對較低，顯示出大部分用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音 AI 的開發者和高效能用戶。

> [!example] 使用場景
> - 開發者用它來快速查詢本地文檔，因為 RCLI 支持語音查詢，能在 4 毫秒內獲得結果。
> - 內容創作者用它來控制音樂播放和調整音量，因為可以透過語音指令執行多達 38 種操作。
> - 學生用它來記錄筆記和設置提醒，因為可以直接用語音命令創建便條和提醒，提升學習效率。

## 架構分析

RCLI 的架構基於 C++ 和 CMake，設計上旨在充分利用 Apple Silicon 的硬體特性。使用 MetalRT 作為 GPU 推理引擎，提供高效能的 STT、LLM 和 TTS 功能。資料流方面，語音輸入經過 VAD 檢測後進入 STT 模組，然後通過 LLM 處理，最後轉換為 TTS 輸出。

這種設計使得整體延遲低於 200 毫秒，並且能夠在本地運行，減少了對雲端的依賴。選擇 C++ 作為主要語言是因為其高效能和對硬體的良好控制，但也帶來了較高的開發複雜度。整體架構的擴展性良好，但在 M1/M2 上可能需要降級到 llama.cpp 引擎，這可能影響性能。

## 技術深入分析

RCLI 的核心技術機制包括一個完整的 STT + LLM + TTS 管道，利用 MetalRT 引擎進行高效能推理。這個管道的設計使得語音輸入可以快速轉換為文字，然後通過 LLM 處理，最後生成語音輸出。MetalRT 的優勢在於其能夠充分利用 Apple Silicon 的 GPU 特性，提供高達 550 tok/s 的 LLM 吞吐量，這在其他語音 AI 工具中是難以實現的。整體架構的效能特性使得 RCLI 能夠在低於 200 毫秒的延遲下運行，這對於需要快速反應的應用場景非常重要。

選擇 C++ 作為主要開發語言，雖然增加了開發的複雜度，但也使得性能得到了保障。依賴樹相對簡單，主要依賴於 CMake 和一些開源庫，這降低了維護成本。技術風險方面，由於目前仍在開發中，可能會面臨一些穩定性問題，特別是在 M1/M2 硬體上的性能表現。整合方面，RCLI 可以與 macOS 的現有生態系統良好協作，特別是在使用 AppleScript 和 shell 命令時，這使得用戶能夠輕鬆地將其整合到日常工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，對於新手友好。安裝過程相對順暢，但需要注意硬體要求。提供了良好的快速入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需雲端支持，提升隱私和安全性。
> - 高效能的 MetalRT 引擎，提供低延遲的語音交互。
> - 支持多種語音命令，方便用戶控制 Mac。

> [!danger] 缺點
> - 僅支援 Apple Silicon，對於其他平台無法使用。
> - 目前仍有一些開放的問題，可能影響使用體驗。
> - 需要較高的硬體要求，M3 或更高版本才能充分發揮性能。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 的 Apple Silicon。
> - 需要 M3 或更高版本的硬體以充分利用 MetalRT 引擎。
> - 目前仍有一些開放的問題需要解決，例如 segmentation fault。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備語音交互能力，適合需要文件管理的用戶。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，但不支持語音控制，適合重視安全的開發者。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 針對 Telegram 的代理工具，無法提供本地語音 AI 功能，適合 Telegram 用戶。  |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，但不支持語音控制。 | 如果你的應用重視數據安全和隱私，並且不需要語音交互功能。 | medium，因為需要重新設計用戶交互方式。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 針對 Telegram 的代理工具，無法提供本地語音 AI 功能。 | 如果你的工作流程中需要 Telegram 的集成，而不需要語音助手功能。 | low，因為這是針對不同需求的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RCLI** | **Shadowbroker** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私和安全，但不支持語音控制。 | 針對 Telegram 的代理工具，無法提供本地語音 AI 功能。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶交互方式。 | low，因為這是針對不同需求的工具。 |
> | 適用場景 | 主要場景 | 如果你的應用重視數據安全和隱私，並且不需要語音交互功能。 | 如果你的工作流程中需要 Telegram 的集成，而不需要語 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下可能會出現 segmentation fault 錯誤
  - 解法：檢查安裝過程中的依賴是否正確安裝
- [MEDIUM] 全局觸發設置可能無法正常工作
  - 解法：暫時手動執行命令以替代全局觸發

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速查詢本地文檔的開發者 | 非常適合 | RCLI 提供快速的文檔查詢功能，延遲低於 4 毫秒。 |
| 希望使用語音控制 Mac 的普通用戶 | 適合 | RCLI 支持多種語音命令，方便用戶操作。 |
| 在非 Apple Silicon 硬體上運行的用戶 | 不適合 | 僅支援 Apple Silicon，無法在其他平台上運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的本地語音 AI 體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：RCLI 本身不需要高權限，且不會存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 19 |
| Open Issues | 10 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://github.com/RunanywhereAI/runanywhere-sdks) |
| Repo 大小 | 9.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/RunanywhereAI/RCLI) |
| Topics | `ai-assistant` `apple-silicon` `kitten-tts` `kokoro-tts` `lfm2` `llama-cpp` `llm` `local-ai` |

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

**社群活躍度**：社群活躍度尚可，但仍有一些開放的問題需要解決。
**連結**：[文件](https://github.com/RunanywhereAI/RCLI)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-10）
> **活躍天數** 1 天 · **最新 commit** docs: fix brew troubleshooting commands (remove invalid flag, add cache clear)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/RunanywhereAI/RCLI/issues/9) | Segmentation fault: 11 | 1 | 1 |
> | [#20](https://github.com/RunanywhereAI/RCLI/issues/20) | Setup Global Trigger | 0 | 2 |

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
> ### Interactive TUI
> 
> A terminal dashboard with push-to-talk, live hardware monitoring, model management, and an actions browser.
> 
> | Key | Action |
> |-----|--------|
> | **SPACE** | Push-to-talk |
> | **M** | Models — browse, download, hot-swap LLM/STT/TTS |
> | **A** | Actions — browse, enable/disable macOS actions |
> | **R** | RAG — ingest documents |
> | **X** | Clear conversation and reset context |
> | **T** | Toggle tool call trace |
> | **ESC** | Stop / close / quit |
> 
> ## MetalRT GPU Engine
> 
> MetalRT is a high-performance GPU inference engine built by [RunAnywhere, Inc.](https://runanywhere.ai) specifically for Apple Silicon. It delivers the fastest on-device inference for LLM, STT, and TTS — up to **550 tok/s** LLM throughput and sub-200ms end-to-end voice latency.
> 
> > **Apple M3 or later required.** MetalRT uses Metal 3.1 GPU features available on M3, M3 Pro, M3 Max, M4, and later chips. M1/M2 support is coming soon. On M1/M2, RCLI automatically falls back to the open-source llama.cpp engine.
> 
> MetalRT is automatically installed during `rcli setup` (choose "MetalRT" or "Both"). Or install separately:
> 
> ```bash
> rcli metalrt install
> rcli metalrt status
> ```
> 
> **Supported models:** Qwen3 0.6B, Qwen3 4B, Llama 3.2 3B, LFM2.5 1.2B (LLM) · Whisper Tiny/Small/Medium (STT) · Kokoro 82M with 28 voices (TTS)
> 
> MetalRT is distributed under a [proprietary license](https://github.com/RunanywhereAI/metalrt-binaries/blob/main/LICENSE). For licensing inquiries: founder@runanywhere.ai
> 
> ## Supported Models
> 
> RCLI supports 20+ models across LLM, STT, TTS, VAD, and embeddings. All run locally on Apple Silicon. Use `rcli models` to browse, download, or switch.
> 
> **LLM:** LFM2 1.2B (default), LFM2 350M, LFM2.5 1.2B, LFM2 2.6B, Qwen3 0.6B, Qwen3.5 0.8B/2B/4B, Qwen3 4B
> 
> **STT:** Zipformer (streaming), Whisper base.en (offline, default), Parakeet TDT 0.6B (~1.9% WER)
> 
> **TTS:** Piper Lessac/Amy, KittenTTS Nano, Matcha LJSpeech, Kokoro English/Multi-lang
> 
> **Default install** (`rcli setup`): ~1GB — LFM2 1.2B + Whisper + Piper + Silero VAD + Snowflake embeddings.
> 
> ```bash
> rcli models                  # interactive model management
> rcli upgrade-llm             # guided LLM upgrade
> rcli voices                  # browse and switch TTS voices
> rcli cleanup                 # remove unused models
> ```
> 
> ## Build from Source
> 
> CPU-only build using llama.cpp + sherpa-onnx (no MetalRT):
> 
> ```bash
> git clone https://github.com/RunanywhereAI/RCLI.git && cd RCLI
> bash scripts/setup.sh
> bash scripts/download_models.sh
> mkdir -p build && cd build
> cmake .. -DCMAKE_BUILD_TYPE=Release
> cmake --build . -j$(sysctl -n hw.ncpu)
> ./rcli
> ```
> 
> All dependencies are vendored or CMake-fetched. Requires CMake 3.15+ and Apple Clang (C++17).
> 
> CLI Reference
> 
> ```
> rcli                          Interactive TUI (push-to-talk + text + trace)
> rcli listen                   Continuous voice mode
> rcli ask                One-shot text command
> rcli actions [name]           List actions or show detail
> rcli rag ingest          Index documents for RAG
> rcli rag query          Query indexed documents
> rcli models [llm|stt|tts]    Manage AI models
> rcli voices                   Manage TTS voices
> rcli metalrt                  MetalRT GPU engine management
> rcli llamacpp                 llama.cpp engine management
> rcli setup                    Download default models
> rcli info                

## 延伸閱讀

相關概念：[[語音合成]] · [[自然語言處理]] · [[邊緣推論]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[alexa--alexa|alexa/alexa]] · [[google--assistant|google/assistant]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

[GitHub](https://github.com/RunanywhereAI/RCLI) · [官方網站](https://github.com/RunanywhereAI/runanywhere-sdks)

## 相關收錄

> [!note]- 直接競品（同子分類：語音合成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "語音合成" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "RunanywhereAI--RCLI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["語音合成","自然語言處理","邊緣推論"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "RunanywhereAI--RCLI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "RunanywhereAI" AND file.name != "RunanywhereAI--RCLI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，619 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，294 stars
