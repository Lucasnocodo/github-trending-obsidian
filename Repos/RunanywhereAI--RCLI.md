---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://github.com/RunanywhereAI/runanywhere-sdks"
stars: 637
stars_per_day: 106
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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "讓你的 Mac 透過語音控制，無需雲端，實現本地的 AI 語音助手。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:619,2026-03-11:622,2026-03-11:637"
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
  - "讓你的 Mac 透過語音控制，無需雲端，實現本地的 AI 語音助手。"
---

# RCLI

**637** stars · **106** stars/天 · 建立 6 天前 · C++ · MIT

```dataviewjs
const me = dv.page("Repos/RunanywhereAI--RCLI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.3.3` `easy-install`

`ai-assistant` `apple-silicon` `kitten-tts` `kokoro-tts` `lfm2` `llama-cpp` `llm` `local-ai` `metal` `on-device-ai` `parakeet` `qwen3` `rag` `speech-to-text` `text-to-speech` `tool-calling` `voice-assistant`

> [!summary] 一句話摘要
> 讓你的 Mac 透過語音控制，無需雲端，實現本地的 AI 語音助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (106 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在 Apple Silicon 上運行本地語音助手的 macOS 使用者。
> **一句話重點** RCLI 的本地化設計不僅提升了性能，還保障了用戶的隱私，這在當前的 AI 生態中顯得尤為重要。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時的語音助手功能，值得一試。

> [!abstract] 核心創新
> RCLI 提供了一個完整的本地語音 AI 解決方案，無需雲端，實現即時的語音交互和文檔查詢。

## 專案簡介

RCLI 是一個專為 macOS 設計的本地語音 AI，能在 Apple Silicon 上運行完整的語音識別（STT）、大語言模型（LLM）和語音合成（TTS）管道。用戶可以透過語音指令控制 Mac 的各種功能，並能即時查詢本地文檔，無需依賴雲端服務。安裝後，使用者只需透過 `rcli ask` 指令即可發出命令，如 `rcli ask 'open Safari'`，系統會快速響應，延遲低於 200ms。這樣的設計使得用戶能夠在不連接網路的情況下，享受流暢的語音互動體驗。RCLI 使用 MetalRT 引擎，專為 Apple Silicon 優化，提供高達 550 tok/s 的 LLM 吞吐量，並支援多達 38 種 macOS 操作的語音控制。這些操作包括創建備忘錄、播放音樂、調整音量等，並且可以透過 `rcli actions` 指令查看所有可用操作。RCLI 也支援文檔智能查詢，能夠快速檢索和回答本地文檔中的問題，使用者只需透過 `rcli rag ingest` 指令將文檔索引進來，便可進行語音提問。

**技術棧**：`C++` · `CMake` · `Objective-C++`

## 重點功能

- 本地語音識別 — 支援 Zipformer 和 Whisper 雙重語音識別技術，提供高效的語音轉文字功能。
- 多達 38 種 macOS 操作 — 透過語音指令控制 Mac，包括創建備忘錄、播放音樂等。
- 文檔智能查詢（RAG） — 支援本地文檔的索引和查詢，能快速回答問題，延遲約 4ms。
- MetalRT GPU 引擎 — 專為 Apple Silicon 優化，提供高達 550 tok/s 的 LLM 吞吐量和低延遲。
- 互動式終端用戶介面（TUI） — 提供即時的語音控制和模型管理功能，提升使用體驗。

## 快速開始

1. 透過 Homebrew 安裝 RCLI
```bash
brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
```
2. 安裝 RCLI
```bash
brew install rcli
```
3. 設置 AI 模型
```bash
rcli setup
```

## 程式碼範例

{
  "前置條件": "已安裝 RCLI",
  "指令": "rcli ask 'open Safari'",
  "預期輸出": "打開 Safari 瀏覽器"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 637 stars（106/天），forks 19（3.0%），顯示出不錯的使用者關注度。作者 RunAnywhere, Inc. 專注於開發本地 AI 解決方案，這個專案解決了許多用戶對於雲端依賴的顧慮，提供了無需 API 金鑰的本地運行選擇。這個工具的推出正好符合了對於隱私和速度的需求，特別是在 Apple Silicon 上的優化性能使其更具吸引力。社群的反饋也顯示出對於本地化 AI 解決方案的需求日益增加。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音助手的 macOS 使用者。

> [!example] 使用場景
> - 自由職業者用它來快速創建和管理任務清單，因為可以透過語音指令輕鬆執行操作，提升工作效率。
> - 開發者用它來查詢本地文檔，因為可以即時語音提問，快速獲得所需資訊，節省查找時間。
> - 音樂愛好者用它來控制音樂播放，因為可以透過語音指令調整音量和播放列表，無需手動操作。

## 架構分析

RCLI 的架構設計以本地運行為核心，使用 MetalRT 作為 GPU 推理引擎，專為 Apple Silicon 優化。資料流中，語音輸入經過 VAD 和 STT 處理後，轉換為文字，然後由 LLM 處理並生成回應，最後透過 TTS 輸出語音。這樣的設計使得整體延遲低於 200ms，符合即時交互的需求。選擇 MetalRT 而非其他通用推理引擎，能夠充分利用 Apple 硬體的性能，但也限制了對其他平台的支援。擴展性方面，RCLI 目前主要針對 macOS 環境，未來若要支援其他平台，可能需要重構架構。

## 技術深入分析

RCLI 的核心技術在於其本地化的語音處理管道，結合了 VAD、STT、LLM 和 TTS 技術。使用 MetalRT 引擎，RCLI 能夠在 Apple Silicon 上實現高效的 GPU 推理，這使得其在語音識別和合成方面的表現優於許多基於雲端的解決方案。根據測試，MetalRT 的 STT 性能達到 714 倍於實時速度，這顯示出其在處理速度上的優勢。設計上，選擇 C++ 和 CMake 作為開發語言和構建工具，這使得 RCLI 在性能和可擴展性上都有良好的表現。由於 RCLI 目前專注於 Apple Silicon，未來若要擴展到其他平台，可能需要重新考慮其架構設計，這可能會引入額外的技術負擔。整合方面，RCLI 能夠與 macOS 的原生功能無縫結合，使用者可以通過 AppleScript 和 shell 命令進行操作，這使得其在 macOS 環境中的使用非常便利。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手友好。安裝過程相對順暢，但需要注意模型下載的大小。文件中有詳細的故障排除指引，能幫助用戶解決常見問題。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需雲端，保障用戶隱私。
> - 低延遲的語音交互體驗，適合即時應用。
> - 支援多種語音操作，提升使用效率。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - 需要較大的安裝空間來下載模型。
> - 對於 M1/M2 用戶，無法使用 MetalRT 引擎，性能有所下降。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 的 Apple Silicon。
> - 需要約 1GB 的存儲空間來下載 AI 模型。
> - 目前不支援 M1/M2 的 MetalRT 引擎，僅能使用 llama.cpp。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的本地操作，但主要針對文件同步，無法進行語音控制。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網路安全和數據抓取，無法提供語音交互功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的代理服務，無法提供語音控制功能。 | 如果你的需求主要是 Telegram 的代理服務，而非語音助手功能。 | low，因為兩者功能差異明顯，無需大量重構。 |
| [HenryXiaoYang/wechat-access-unqclawed](https://github.com/HenryXiaoYang/wechat-access-unqclawed) | 針對微信的接入方案，無法提供完整的語音 AI 功能。 | 如果你的需求主要是微信的接入，而非語音助手功能。 | medium，因為需要重新設計用戶交互流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RCLI** | **tg-ws-proxy** | **wechat-access-unqclawed** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Telegram 的代理服務，無法提供語音控制功能。 | 針對微信的接入方案，無法提供完整的語音 AI 功能。 |
> | 遷移成本 | - | low，因為兩者功能差異明顯，無需大量重構。 | medium，因為需要重新設計用戶交互流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是 Telegram 的代理服務，而非語音助 | 如果你的需求主要是微信的接入，而非語音助手功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者和技術愛好者試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能出現 SHA256 不匹配的錯誤
  - 解法：按照 README 中的故障排除步驟重新安裝
- [MEDIUM] 在 M1/M2 上無法使用 MetalRT 引擎，性能下降
  - 解法：使用 llama.cpp 作為替代

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的內部工具 | 非常適合 | 能夠提升團隊的工作效率，快速執行各種操作。 |
| 個人開發者的語音助手專案 | 適合 | 提供了本地化的語音交互功能，適合個人使用。 |
| 大型企業的商業應用 | 不適合 | 目前僅支援 Apple Silicon，無法滿足多平台需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時的語音助手功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具無需高權限運行，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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

> [!info]- Release Notes
> ## Installation
> 
> ```bash
> brew tap RunanywhereAI/rcli https://github.com/RunanywhereAI/RCLI.git
> brew install rcli
> rcli setup  # download AI models (~1GB, one-time)
> ```
> 
> ### SHA256
> ```
> 1a7ac50b41422d3cf62739209962a0143e12edc445eb48deca398b8ca9fafc71
> ```
> 
> 
> ## What's Changed
> * fix: MetalRT segfault crashes, missing dylib packaging, and M5+ forward-compatibility by @shubhammalhotra28 in https://github.com/RunanywhereAI/RCLI/pull/19
> 
> 
> **Full Changelog**: https://github.com/RunanywhereAI/RCLI/compare/v0.3.2...v0.3.3

## 社群與生態

**社群活躍度**：社群活躍，有定期更新和回應。
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

相關概念：[[語音合成]] · [[本地 AI]] · [[文檔檢索]]

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
> const concepts = ["語音合成","本地 AI","文檔檢索"];
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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
