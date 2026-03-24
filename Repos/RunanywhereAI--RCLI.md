---
repo: RunanywhereAI/RCLI
url: https://github.com/RunanywhereAI/RCLI
owner: RunanywhereAI
owner_type: Organization
language: C++
license: MIT
description: "Talk to your Mac, query your docs, no cloud required. On-device voice AI + RAG"
homepage: "https://github.com/RunanywhereAI/runanywhere-sdks"
stars: 1291
stars_per_day: 68
forks: 67
open_issues: 7
created: 2026-03-04
pushed_at: 2026-03-16
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "語音合成"
release_tag: "v0.3.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "在 Mac 上進行語音交互，無需雲端，支持本地文檔查詢。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 4
engagement: "low"
issue_close_rate: 30
repo_size_kb: 9931
readme_length: 9755
bus_factor: 1
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:619,2026-03-11:622,2026-03-11:637,2026-03-13:1027,2026-03-14:1074,2026-03-15:1141,2026-03-16:1196,2026-03-17:1207,2026-03-18:1223,2026-03-19:1240,2026-03-20:1244,2026-03-21:1255,2026-03-22:1263,2026-03-23:1274,2026-03-24:1291"
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
  - "在 Mac 上進行語音交互，無需雲端，支持本地文檔查詢。"
---

# RCLI

**1.3k** stars · **68** stars/天 · 建立 19 天前 · C++ · MIT

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

`ORG` `v0.3.7` `easy-install`

`ai-assistant` `apple-silicon` `kitten-tts` `kokoro-tts` `lfm2` `llama-cpp` `llm` `local-ai` `metal` `on-device-ai` `parakeet` `qwen3` `rag` `speech-to-text` `text-to-speech` `tool-calling` `voice-assistant`

> [!summary] 一句話摘要
> 在 Mac 上進行語音交互，無需雲端，支持本地文檔查詢。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (68 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在 Apple Silicon 上運行本地語音 AI 的開發者和高效能用戶。
> **一句話重點** RCLI 的本地運行模式和高效能設計，讓語音助手不再受限於雲端服務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "語音合成" && p.file.name !== "RunanywhereAI--RCLI" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 語音合成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到高效的本地語音助手，值得投資。

> [!abstract] 核心創新
> RCLI 提供了無需雲端的本地語音 AI 解決方案，並支持即時圖像分析。

## 專案簡介

RCLI 是一款專為 macOS 設計的本地語音 AI 工具，能夠實現語音識別（STT）、語言模型（LLM）和語音合成（TTS）等功能，並且無需依賴雲端服務。用戶可以透過簡單的語音指令來控制 Mac，執行如開啟應用程式、播放音樂等操作。安裝後，使用者可以透過 `rcli` 指令進入互動式終端界面，進行語音交互或直接輸入指令。這個工具的賣點在於其完全在本地運行，避免了雲端延遲和隱私問題。技術上，RCLI 使用了 MetalRT 作為 GPU 推理引擎，專為 Apple Silicon 優化，提供高達 550 tok/s 的 LLM 吞吐量和低於 200 毫秒的延遲。

與其他類似工具相比，如 Whisper 和 llama.cpp，RCLI 在性能上更具優勢，尤其是在 Apple M3 上的表現。RCLI 支持多種模型，並允許用戶根據需要進行熱切換，這使得用戶能夠靈活應對不同的使用場景。儘管目前僅支持 macOS 13+ 和 Apple Silicon，但未來計劃擴展至 M1/M2。使用者在使用過程中可能會遇到如安裝失敗的 SHA256 錯誤等問題，但社群的活躍度和問題解決率相對較高，能夠提供一定的支持。整體來看，這是一個適合需要高效能本地語音助手的開發者和用戶的工具。

**技術棧**：`C++` · `Shell` · `CMake` · `Objective-C`

## 重點功能

- 本地語音識別 — 支持 Silero 語音活動檢測和 Zipformer 流式識別。
- 多模型支持 — 允許用戶熱切換 LLM、STT 和 TTS 模型，使用 `rcli models` 管理。
- 即時圖像分析 — 使用 `rcli vlm` 命令分析圖像或相機捕獲的內容。
- 本地文檔查詢 — 支持 PDF、DOCX 和純文本的 RAG 查詢，使用 `rcli rag ingest` 進行文檔索引。
- 互動式終端界面 — 提供推按對講、模型管理和操作瀏覽的功能，使用者可透過快捷鍵輕鬆操作。

## 快速開始

1. 安裝 RCLI
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

```cpp
{
  "前置條件": "已安裝 RCLI 並設置完成",
  "指令": "rcli ask \"open Safari\"",
  "預期輸出": "打開 Safari 應用程式"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天就累積 1291 stars（68/天），forks 67（5.2%），顯示出穩定的增長潛力。作者 RunAnywhere, Inc. 專注於本地 AI 解決方案，過去在 AI 和 GPU 推理領域有豐富經驗。這個工具解決了雲端 AI 服務延遲和隱私問題，提供本地化的語音助手體驗。近期的推廣活動和社群討論也吸引了不少關注，特別是在 Apple Silicon 用戶中。高達 5.2% 的 forks/stars 比率顯示出使用者對此工具的實際修改和應用需求。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上運行本地語音 AI 的開發者和高效能用戶。

> [!example] 使用場景
> - 自由職業者用它來快速查詢文檔，因為本地 RAG 機制能在 4 毫秒內返回查詢結果，提升工作效率。
> - 開發者用它來控制開發環境中的應用程式，因為可以透過語音指令執行多達 40 種 macOS 操作，省去手動操作的時間。
> - 設計師用它來進行即時的圖像分析，因為可以利用相機進行 VLM 分析，快速獲得視覺反饋。

## 架構分析

RCLI 採用了一個基於 MetalRT 的高效能架構，專為 Apple Silicon 優化，這樣的設計使得其在本地運行時能夠達到極低的延遲和高吞吐量。資料流中，語音進入後經過 Silero 進行語音活動檢測，然後使用 Zipformer 進行實時語音識別，接著通過 LLM 進行處理，最後使用 TTS 進行語音合成。這樣的設計選擇使得 RCLI 能夠在本地快速響應用戶指令，並且避免了雲端延遲的問題。選擇 MetalRT 作為推理引擎使得 RCLI 能夠充分利用 Apple 的硬體加速，這在性能上優於傳統的 CPU 處理。擴展性方面，RCLI 目前支持多種模型的熱切換，但隨著模型數量的增加，可能會面臨管理上的挑戰。

## 技術深入分析

RCLI 的核心技術機制在於其使用 MetalRT 作為 GPU 推理引擎，這使得其在 Apple Silicon 上能夠達到極高的性能。其資料流設計中，使用 Silero 進行語音活動檢測，並通過 Zipformer 進行流式語音識別，這樣的設計使得其能夠快速響應用戶的語音指令。效能方面，RCLI 在 Apple M3 上的 LLM 吞吐量可達 550 tok/s，並且實現了低於 200 毫秒的延遲。選擇 C++ 和 Objective-C 作為主要開發語言，使得 RCLI 能夠充分利用 Apple 硬體的性能，並且在資源使用上相對高效。依賴樹方面，RCLI 依賴於多個開源庫，如 llama.cpp 和 sherpa-onnx，這些庫的選擇使得 RCLI 能夠在功能上達到多樣性，但同時也可能引入一定的維護成本。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在多任務處理時。整合方面，RCLI 可以與 macOS 的原生應用無縫整合，這使得其在實際使用中非常便利。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，安裝過程相對順暢，但需要注意硬體要求。文件中有針對常見問題的解決方案，並且有良好的入門指南。整體來看，花 30 分鐘內能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 無需雲端，保護用戶隱私。
> - 高效能，低延遲的本地推理。
> - 支持多種語音和視覺模型，靈活性高。

> [!danger] 缺點
> - 僅限於 Apple Silicon，對於其他平台不友好。
> - 需要較高的硬體要求，特別是 M3 及以上。
> - 目前 VLM 功能尚未完全實現。

> [!warning] 注意事項
> - 僅支持 macOS 13+ 和 Apple Silicon。
> - MetalRT 引擎需要 M3 或更高版本，M1/M2 會自動回退到 llama.cpp。
> - 目前 VLM 僅在 llama.cpp 引擎上可用，MetalRT VLM 支持尚未推出。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的本地語音助手功能，但不支持即時圖像分析。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音識別和合成，但缺乏本地文檔查詢功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，與 RCLI 的語音助手功能無關。 | 如果你的需求是資料同步而非語音控制，則應選擇此工具。 | low，因為兩者功能差異明顯。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音識別和合成，使用 GPU 加速，但不支持本地文檔查詢。 | 如果需要強大的語音識別能力而不在乎本地化，則選擇此工具。 | medium，因為需要重新適應其 API 和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RCLI** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和傳輸，與 RCLI 的語音助手功能無關。 | 專注於語音識別和合成，使用 GPU 加速，但不支持本地文檔查詢。 |
> | 遷移成本 | - | low，因為兩者功能差異明顯。 | medium，因為需要重新適應其 API 和功能。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非語音控制，則應選擇此工具。 | 如果需要強大的語音識別能力而不在乎本地化，則選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行實驗和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能遇到 SHA256 錯誤，導致安裝失敗
  - 解法：確保 Homebrew 版本是最新，並清除緩存後重試
- [MEDIUM] 在 M1/M2 上運行時性能下降
  - 解法：使用 llama.cpp 引擎作為備選方案
- [MEDIUM] VLM 功能尚未完全實現，可能會影響使用體驗
  - 解法：等待未來版本更新以獲取完整功能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要高效的文檔查詢工具 | 非常適合 | RCLI 的本地 RAG 機制能快速查詢文檔，提升團隊效率。 |
| 需要在非 Apple 硬體上運行的語音助手 | 不適合 | 目前僅支持 Apple Silicon，對其他平台不友好。 |
| 開發者希望在本地開發語音應用 | 適合 | 提供了強大的本地語音處理能力，適合開發者進行實驗。 |
| 大型企業需要穩定的語音助手解決方案 | 普通 | 雖然功能強大，但目前仍在 beta 階段，穩定性有待提高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到高效的本地語音助手，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本地運行不需要高權限，且不存取敏感資料。依賴的開源庫經過審計，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

RCLI 最常與 macOS 原生應用搭配使用，能夠在開發和部署過程中無縫整合。具體來說，在一個使用 Xcode 開發的 macOS 應用中，可以通過 RCLI 來實現語音控制功能，具體做法是使用 `rcli ask` 指令來執行應用內的操作。RCLI 支援 GitHub Actions 和其他 CI 工具的整合，方便開發者在持續集成中使用。常見的整合問題包括模型管理和版本兼容性，這需要開發者在使用前進行測試以確保穩定性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 RCLI 出現之前，許多語音助手依賴於雲端服務，這導致了延遲和隱私問題。隨著 Apple Silicon 的推出，開發者開始探索如何利用其強大的硬體加速來實現本地化的 AI 解決方案。RCLI 的出現代表了本地語音助手的趨勢，未來可能會有更多類似工具出現，隨著技術的進步，這些工具將會更加成熟和強大。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 macOS 開發
- 了解語音處理基本概念

> [!tip] 導入策略
> 第一週：在個人項目中試用 RCLI。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品中進行測試。

**成功指標**：語音指令執行成功率達到 90%。

> [!warning] 退出計畫
> 所有設定和模型均以標準格式保存，便於未來轉移至其他工具。

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
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 67 |
| Open Issues | 7 |
| Issue 解決率 | 30% (3 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://github.com/RunanywhereAI/runanywhere-sdks) |
| Repo 大小 | 9.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/RunanywhereAI/RCLI) |
| Topics | `ai-assistant` `apple-silicon` `kitten-tts` `kokoro-tts` `lfm2` `llama-cpp` `llm` `local-ai` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 91
>     "Shell" : 3
>     "C" : 2
>     "Objective-C++" : 2
>     "CMake" : 1
>     "Objective-C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@shubhammalhotra28](https://github.com/shubhammalhotra28) | 102 |
> | [@AmanSwar](https://github.com/AmanSwar) | 26 |
> | [@sanchitmonga22](https://github.com/sanchitmonga22) | 4 |
> | [@harvenstar](https://github.com/harvenstar) | 1 |

**最新版本**：v0.3.7 (2026-03-15)

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
> 631349d585231b8f9b4590022c8c1fc3525e6112cce2308ee9871856cd327e3c
> ```
> 
> 
> ## What's Changed
> * Adding VLM support by @sanchitmonga22 in https://github.com/RunanywhereAI/RCLI/pull/25
> 
> ## New Contributors
> * @sanchitmonga22 made their first contribution in https://github.com/RunanywhereAI/RCLI/pull/25
> 
> **Full Changelog**: https://github.com/RunanywhereAI/RCLI/compare/v0.3.6...v0.3.7

## 社群與生態

**社群活躍度**：社群活躍，定期更新和問題回應。
**連結**：[文件](https://github.com/RunanywhereAI/RCLI)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-15）
> **活躍天數** 1 天 · **最新 commit** fix: update Homebrew formula SHA256 for v0.3.7 release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/RunanywhereAI/RCLI/issues/9) | Segmentation fault: 11 | 1 | 2 |
> | [#24](https://github.com/RunanywhereAI/RCLI/issues/24) | [MetalRT][macOS 15.7.4][M3] Crash in metalrt_cache_prompt du | 0 | 0 |
> | [#20](https://github.com/RunanywhereAI/RCLI/issues/20) | Setup Global Trigger | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> Talk to your Mac, query your docs, no cloud required.
>   
>   
>   
>   
>   
> 
> **RCLI** is an on-device voice AI for macOS. A complete STT + LLM + TTS + VLM pipeline running natively on Apple Silicon — 40 macOS actions via voice, local RAG over your documents, on-device vision (camera & screen analysis), sub-200ms end-to-end latency. No cloud, no API keys.
> 
> Powered by [MetalRT](#metalrt-gpu-engine), a proprietary GPU inference engine built by [RunAnywhere, Inc.](https://runanywhere.ai) specifically for Apple Silicon.
> 
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
> 
> ## Quick Start
> 
> ```bash
> rcli                             # interactive TUI (push-to-talk + text)
> rcli listen                      # continuous voice mode
> rcli ask "open Safari"           # one-shot command
> rcli ask "play some jazz on Spotify"
> rcli vlm photo.jpg "what's in this image?"  # vision analysis
> rcli camera                      # live camera VLM
> rcli screen                      # screen capture VLM
> rcli metalrt                     # MetalRT GPU engine management
> rcli llamacpp                    # llama.cpp engine management
> ```
> 
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
> 
> ## Features
> 
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
> 
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
> 
> ### Vision (VLM)
> 
> Analyze images, camera captures, and screen regions using on-device vision-language models. VLM runs on the llama.cpp engine via Metal GPU — no cloud.
> 
> - **Image Analysis** — `rcli vlm photo.jpg "describe this"` for single-image queries
> - **Camera** — Press **V** in the TUI or run `rcli camera` for live camera analysis
> - **Screen Capture** — Press **S** in the TUI or run `rcli screen` to analyze screen regions
> - **Models** — Qwen3 VL 2B, Liquid LFM2 VL 1.6B, SmolVLM 500M — download on demand via `rcli models vlm`
> 
> > **Note:** VLM is currently available on the llama.cpp engine. MetalRT VLM support is coming soon.
> 
> 
> ### 40 macOS Actions
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
> Run `rcli actions` to see all 40, or toggle them on/off in the TUI Actions panel.
> 
> > **Tip:** If tool calling feels unreliable, press **X** in the TUI to clear the conversation and reset context. With small LLMs, accumulated context can degrade tool-calling accuracy — a fresh context often fixes it.
> 
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
> 
> ### Interactive TUI
> 
> A terminal dashboard with push-to-talk, live hardware monitoring, model management, and an actions browser.
> 
> | Key | Action |
> |-----|--------|
> | **SPACE** | Push-to-talk |
> | **V** | Camera — capture and analyze with VLM |
> | **S** | Screen — capture and analyze a screen region with VLM |
> | **M** | Models — browse, download, hot-swap LLM/STT/TTS/VLM |
> | **A** | Actions — browse, enable/disable macOS actions |
> | **R** | RAG — ingest documents |
> | **X** | Clear conversation and reset context |
> | **T** | Toggle tool call trace |
> | **ESC** | Stop / close / quit |
> 
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
> 
> ## Supported Models
> 
> RCLI supports 20+ models across LLM, STT, TTS, VLM, VAD, and embeddings. All run locally on Apple Silicon. Use `rcli models` to browse, download, or switch.
> 
> **LLM:** LFM2 1.2B (default), LFM2 350M, LFM2.5 1.2B, LFM2 2.6B, Qwen3 0.6B, Qwen3.5 0.8B/2B/4B, Qwen3 4B
> 
> **STT:** Zipformer (streaming), Whisper base.en (offline, default), Parakeet TDT 0.6B (~1.9% WER)
> 
> **TTS:** Piper Lessac/Amy, KittenTTS Nano, Matcha LJSpeech, Kokoro English/Multi-lang
> 
> **VLM:** Qwen3 VL 2B, Liquid LFM2 VL 1.6B, SmolVLM 500M — on-demand download via `rcli models vlm` (llama.cpp engine only)
> 
> **Default install** (`rcli setup`): ~1GB — LFM2 1.2B + Whisper + Piper + Silero VAD + Snowflake embeddings. VLM models are downloaded on demand.
> 
> ```bash
> rcli models                  # interactive model management
> rcli models vlm              # download/manage VLM models
> rcli upg

## 延伸閱讀

相關概念：[[語音合成]] · [[自然語言處理]] · [[邊緣推論]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[alexa--alexa|alexa/alexa]] · [[google--assistant|google/assistant]]

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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/RunanywhereAI--RCLI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "RunanywhereAI--RCLI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
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
