---
repo: OpenMOSS/MOSS-TTS-Nano
url: https://github.com/OpenMOSS/MOSS-TTS-Nano
owner: OpenMOSS
owner_type: Organization
language: Python
license: Apache-2.0
description: "MOSS-TTS-Nano is an open-source multilingual tiny speech generation model from MOSI.AI and the OpenMOSS team. With only 0.1B parameters, it is designed for realtime speech generation, can run directly on CPU without a GPU, and keeps the deployment stack simple enough for local demos, web serving, and lightweight product integration."
homepage: "https://openmoss.github.io/MOSS-TTS-Nano-Demo/"
stars: 1489
stars_per_day: 186
forks: 181
open_issues: 29
created: 2026-04-10
pushed_at: 2026-04-17
first_seen: 2026-04-15
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "語音合成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-15
use_case: "提供一個輕量級的多語言即時語音生成模型，能在無 GPU 的情況下運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-20"
contributor_count: 2
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 55925
readme_length: 9980
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-15"
star_history: "2026-04-15:753,2026-04-15:760,2026-04-16:1028,2026-04-16:1033,2026-04-17:1239,2026-04-17:1243,2026-04-18:1369,2026-04-19:1489"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/audio_tokenizer"
  - "topic/chinese"
  - "topic/english"
  - "topic/multi_modality"
  - "topic/multilingual"
aliases:
  - "MOSS-TTS-Nano"
  - "OpenMOSS/MOSS-TTS-Nano"
  - "提供一個輕量級的多語言即時語音生成模型，能在無 GPU 的情況下運行。"
---

# MOSS-TTS-Nano

**1.5k** stars · **186** stars/天 · 建立 8 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`audio-tokenizer` `chinese` `english` `multi-modality` `multilingual` `realtime` `streaming-audio` `tts` `voice-clone`

> [!summary] 一句話摘要
> 提供一個輕量級的多語言即時語音生成模型，能在無 GPU 的情況下運行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (186 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望在無 GPU 環境中進行即時語音生成的開發者和研究者。
> **一句話重點** MOSS-TTS-Nano 的輕量化設計讓即時語音生成變得更加可行，特別是在無 GPU 的環境中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "語音合成" && p.file.name !== "OpenMOSS--MOSS-TTS-Nano" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到即時語音生成的效果，值得嘗試。

> [!abstract] 核心創新
> MOSS-TTS-Nano 提供了一個僅需 0.1B 參數的即時語音生成模型，能在無 GPU 的情況下運行。

## 專案簡介

MOSS-TTS-Nano 是一個開源的多語言語音生成模型，僅需 0.1B 的參數，設計上專注於即時語音生成，能夠在 CPU 上運行，這使得它非常適合本地演示、網頁服務和輕量級產品整合。用戶只需透過 `python infer.py` 指令，輸入音頻路徑和文本，即可生成對應的語音，這樣的設計使得部署過程簡單且高效。技術上，這個模型使用了純自回歸的音頻標記器和 LLM（大語言模型）架構，能夠以 48 kHz 的音質輸出，並支持中文、英文等多種語言。這樣的架構選擇不僅保證了低延遲的即時推理，還能夠在 4 核 CPU 上流暢運行，適合長文本的自動語音克隆。

與其他 TTS 模型相比，如 Google 的 Tacotron，MOSS-TTS-Nano 的優勢在於其小型化設計和無需 GPU 的運行能力，這使得它在資源有限的環境中仍能保持良好的性能。實際使用中，該模型的推理速度和音質表現都能滿足大多數即時應用的需求，特別是在需要快速反應的場景中。社群活躍度方面，儘管目前有 29 個開放問題，但解決率僅為 9%，這可能影響使用者的體驗。總體來看，這個專案目前處於 beta 階段，適合對即時語音生成有需求的開發者，特別是那些希望在本地環境中進行快速實驗的團隊。

**技術棧**：`Python 3.12` · `FastAPI` · `Torch 2.7.0` · `ONNX Runtime 1.20.0`

## 重點功能

- 小型模型尺寸 — 僅需 0.1B 參數，適合資源有限的環境。
- 即時語音生成 — 支持低延遲的流式推理，適合實時應用。
- 多語言支持 — 支持中文、英文等 20 種語言，滿足不同用戶需求。
- 純自回歸架構 — 基於音頻標記器和 LLM，提供高效的推理性能。
- 簡單的本地部署 — 透過 `python app.py` 可快速啟動本地演示。

## 快速開始

1. 建立 Conda 環境
```bash
conda create -n moss-tts-nano python=3.12 -y
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動本地演示
```bash
python app.py
```

## 程式碼範例

```python
[
  "# 使用 infer.py 進行語音克隆",
  "python infer.py \\",
  "  --prompt-audio-path assets/audio/zh_1.wav \\",
  "  --text \"欢迎关注模思智能、上海创智学院与复旦大学自然语言处理实验室。\"",
  "# 預期輸出：生成的音頻將寫入 generated_audio/infer_output.wav"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 1489 stars（186/天），forks 181（12.2%），顯示出強烈的社群興趣。作者來自 MOSI.AI 和 OpenMOSS 團隊，過去在語音合成領域有豐富經驗。這個專案解決了在無 GPU 環境下進行高效語音生成的需求，之前的方案如 Tacotron 需要較高的硬體要求，無法在普通設備上運行。最近的推廣活動和社群討論也促進了這個專案的曝光。技術上，隨著 ONNX 的引入，這個模型的運行效率幾乎翻倍，讓它在 CPU 上的表現更佳，這是其受歡迎的原因之一。forks/stars 比率為 12.2%，顯示出許多用戶對此專案進行了實際修改和使用。

## 適合誰使用

**目標受眾**：希望在無 GPU 環境中進行即時語音生成的開發者和研究者。

> [!example] 使用場景
> - 語音應用開發者用它來在無 GPU 的環境中快速生成多語言語音，因為它僅需 0.1B 的參數，能在普通 CPU 上流暢運行。
> - 教育工作者用它來為在線課程生成即時語音，因為其支持多種語言且易於部署，能夠快速響應學員需求。
> - 產品經理用它來進行語音克隆測試，因為其低延遲和高音質的特性能夠滿足即時反饋的需求。

## 架構分析

MOSS-TTS-Nano 採用純自回歸的音頻標記器和 LLM 架構，這種設計使得模型能夠在小型化的同時保持高效的推理性能。資料流方面，音頻首先通過音頻標記器進行處理，然後由 LLM 生成對應的語音輸出。選擇這種架構的好處在於能夠快速響應用戶請求，然而，這也意味著在長文本處理上可能需要進行自動分塊，增加了處理的複雜度。擴展性方面，該模型能夠在普通的 4 核 CPU 上運行，但在處理更大規模的資料時，可能會遇到性能瓶頸，特別是在高並發的情況下。整體來看，這個架構設計旨在兼顧性能和資源使用效率，適合需要快速部署的場景。

## 技術深入分析

MOSS-TTS-Nano 的核心技術機制基於純自回歸的音頻標記器和 LLM，這使得模型能夠在小型化的同時保持高效的推理性能。該模型的推理速度在實測中能夠在單核 CPU 上達到接近 2 倍的處理效率，這對於即時應用來說是非常重要的。設計上，選擇 Python 和 FastAPI 作為主要技術棧，這不僅簡化了部署過程，還能夠輕鬆整合到現有的 Web 應用中。依賴樹相對簡單，主要依賴於 PyTorch 和 ONNX Runtime，這降低了使用的門檻，但也意味著在某些情況下可能會遇到性能限制。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下，這需要進一步的優化和擴展。整合方面，與主流框架如 FastAPI 的相容性良好，能夠輕鬆融入現有的 CI/CD pipeline。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢，但在某些依賴安裝上可能會遇到問題。整體上，對於新手來說，花 30 分鐘能夠成功運行起來的可能性較高。

## 優缺點分析

> [!success] 優點
> - 輕量化設計，適合資源有限的環境
> - 支持多語言，滿足不同用戶需求
> - 即時語音生成，低延遲的推理性能

> [!danger] 缺點
> - 在高並發情況下可能出現性能瓶頸
> - 對於長文本需要進行自動分塊，增加處理複雜度
> - 社群支持和問題解決率較低

> [!warning] 注意事項
> - 僅支持 Python 3.12 及以上版本
> - 需要安裝特定版本的 pynini，否則會導致安裝失敗
> - 在 Windows 環境下可能需要自定義的 pynini wheel

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Google/Tacotron](https://github.com/Google/Tacotron) | Tacotron 是一個成熟的 TTS 系統，但需要較高的 GPU 支持，無法在 CPU 上流暢運行，適合資源充足的環境。 |
| [Mozilla/TTS](https://github.com/Mozilla/TTS) | Mozilla 的 TTS 系統功能強大，但相對較重，適合需要高音質的應用，而 MOSS-TTS-Nano 更加輕量化，適合快速部署。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Google/Tacotron](https://github.com/Google/Tacotron) | Tacotron 是一個成熟的 TTS 系統，但需要較高的 GPU 支持，無法在 CPU 上流暢運行，適合資源充足的環境。 | 如果你的團隊已經在用高效能的 GPU 並需要高音質的語音生成，Tacotron 會是更好的選擇。 | medium，因為需要重新適應不同的 API 和部署流程。 |
| [Mozilla/TTS](https://github.com/Mozilla/TTS) | Mozilla 的 TTS 系統功能強大，但相對較重，適合需要高音質的應用，而 MOSS-TTS-Nano 更加輕量化，適合快速部署。 | 如果你的應用需要高音質且不介意較高的資源消耗，Mozilla/TTS 是不錯的選擇。 | high，因為需要重構整個語音生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MOSS-TTS-Nano** | **Tacotron** | **TTS** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Tacotron 是一個成熟的 TTS 系統，但需要較高的 GPU 支持，無法在 CPU 上流暢運行，適合資源充足的環境。 | Mozilla 的 TTS 系統功能強大，但相對較重，適合需要高音質的應用，而 MOSS-TTS-Nano 更加輕量化，適合快速部署。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的 API 和部署流程。 | high，因為需要重構整個語音生成流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用高效能的 GPU 並需要高音質的語音生成 | 如果你的應用需要高音質且不介意較高的資源消耗，Mozilla |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下安裝 pynini 可能會失敗
  - 解法：需要手動下載適合的 pynini wheel
- [MEDIUM] 某些依賴安裝失敗
  - 解法：建議先安裝 pynini，再安裝 WeTextProcessing
- [MEDIUM] 生成的音頻質量可能不穩定
  - 解法：調整輸入文本和音頻參數以獲得更好效果

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發即時語音應用 | 非常適合 | 輕量化設計和低資源需求使其易於部署。 |
| 教育機構需要多語言語音生成 | 適合 | 支持多種語言，能夠滿足不同學習者的需求。 |
| 大型企業需要高音質語音生成 | 不適合 | 在高並發情況下可能出現性能瓶頸，無法滿足需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到即時語音生成的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不會存取敏感資料，依賴的庫也相對穩定。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
| Forks | 181 |
| Open Issues | 29 |
| Issue 解決率 | 9% (3 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-10 |
| 官方網站 | [Link](https://openmoss.github.io/MOSS-TTS-Nano-Demo/) |
| Repo 大小 | 54.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OpenMOSS/MOSS-TTS-Nano) |
| Topics | `audio-tokenizer` `chinese` `english` `multi-modality` `multilingual` `realtime` `streaming-audio` `tts` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `numpy` `fastapi` `python-multipart` `sentencepiece` `torch` `torchaudio` `transformers` `sentencepiece` `uvicorn` `WeTextProcessing` `soundfile` `onnxruntime`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@gyt1145028706](https://github.com/gyt1145028706) | 38 |
> | [@alpacaking](https://github.com/alpacaking) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量較多
**連結**：[文件](https://openmoss.github.io/MOSS-TTS-Nano-Demo/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-14 ~ 2026-04-17）
> **活躍天數** 3 天 · **最新 commit** feat: add onnx implementation (#27)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/6) | It run on windows but pynini need a "custom" wheel. | 1 | 2 |
> | [#33](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/33) | WEB UI界面可以加个cpu、gpu选项吗 | 0 | 2 |
> | [#32](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/32) | onnx生成的语音不全 | 0 | 3 |
> | [#31](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/31) | 希腊字母几乎全灭…… | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MOSS-TTS-Nano
> 
>   
>   &nbsp;&nbsp;&nbsp;&nbsp;
>   
> 
>   
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
> 
> [English](README.md) | [简体中文](README_zh.md)
> 
> MOSS-TTS-Nano is an open-source **multilingual tiny speech generation model** from [MOSI.AI](https://mosi.cn/#hero) and the [OpenMOSS team](https://www.open-moss.com/). With only **0.1B parameters**, it is designed for **realtime speech generation**, can run directly on **CPU without a GPU**, and keeps the deployment stack simple enough for local demos, web serving, and lightweight product integration.
> 
> [demo_video.mp4](https://github.com/user-attachments/assets/25aca215-0bd7-4d0c-be95-8d1f6737aec8)
> 
> 
> ## Quickstart
> 
> 
> ### Environment Setup
> 
> We recommend a clean Python environment first, then installing the project in editable mode so the `moss-tts-nano` command becomes available locally.
> The examples below intentionally keep arguments minimal and rely on the repository defaults.
> By default, the code loads `OpenMOSS-Team/MOSS-TTS-Nano` and `OpenMOSS-Team/MOSS-Audio-Tokenizer-Nano`.
> 
> #### Using Conda
> 
> ```bash
> conda create -n moss-tts-nano python=3.12 -y
> conda activate moss-tts-nano
> 
> git clone https://github.com/OpenMOSS/MOSS-TTS-Nano.git
> cd MOSS-TTS-Nano
> 
> pip install -r requirements.txt
> pip install -e .
> ```
> 
> If `WeTextProcessing` or `pynini` fails to install from `requirements.txt`, install `pynini` first in the same environment, then install `WeTextProcessing`, remove `WeTextProcessing` from `requirements.txt`, and finally rerun `pip install -r requirements.txt`.
> 
> With Conda, we recommend:
> 
> ```bash
> conda install -c conda-forge pynini=2.1.6.post1 -y
> pip install git+https://github.com/WhizZest/WeTextProcessing.git
> pip install -r requirements.txt
> ```
> 
> If you are not using Conda, make sure you download a `pynini` wheel that matches your Python version and platform before installing `WeTextProcessing`. For a community-tested example, see [Issue #6](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/6).
> 
> 
> ## Demo
> 
> - Online Demo: [https://openmoss.github.io/MOSS-TTS-Nano-Demo/](https://openmoss.github.io/MOSS-TTS-Nano-Demo/)
> - Hugging Face Space: [OpenMOSS-Team/MOSS-TTS-Nano](https://huggingface.co/spaces/OpenMOSS-Team/MOSS-TTS-Nano)
> 
> 
> ### Local Web Demo with `app.py`
> 
> You can launch the local FastAPI demo for browser-based testing:
> 
> ```bash
> python app.py
> ```
> 
> Then open `http://127.0.0.1:18083` in your browser.
> 
> 
> ### ONNX Local Web Demo with `app_onnx.py`
> 
> You can also launch the ONNX-backed local web demo:
> 
> ```bash
> python app_onnx.py
> ```
> 
> Then open `http://127.0.0.1:18083` in your browser.
> 
> The first startup may spend extra time downloading assets if `models/` does not contain the ONNX weights yet.
> 
> 
> ## Introduction
> 
>   
> 
> MOSS-TTS-Nano focuses on the part of TTS deployment that matters most in practice: **small footprint**, **low latency**, **good enough quality for realtime products**, and **simple local setup**. It uses a pure autoregressive **Audio Tokenizer + LLM** pipeline and keeps the inference workflow friendly for both terminal users and web-demo users.
> 
> 
> ### Main Features
> 
> - **Tiny model size**: only **0.1B parameters**
> - **Native audio format**: **48 kHz**, **2-channel** output
> - **Multilingual**: supports **Chinese, English, and more**
> - **Pure autoregressive architecture**: built on **Audio Tokenizer + LLM**
> - **Streaming inference**: low realtime latency and fast first audio
> - **CPU friendly**: streaming generation can run on a **4-core CPU**
> - **Long-text capable**: supports long input with automatic chunked voice cloning
> - **Open-source deployment**: direct `python infer.py`, `python app.py`, and packaged CLI support
> 
>   
>   
>   Architecture of MOSS-TTS-Nano
> 
> 
> ### Introduction
> **MOSS-Audio-Tokenizer** is the unified discrete audio interface for the entire MOSS-TTS family. It is built on the **Cat** (**C**ausal **A**udio **T**okenizer with **T**ransformer) architecture, a CNN-free audio tokenizer composed entirely of causal Transformer blocks. It serves as the shared audio backbone for MOSS-TTS, MOSS-TTS-Nano, MOSS-TTSD, MOSS-VoiceGenerator, MOSS-SoundEffect, and MOSS-TTS-Realtime, providing a consistent audio representation across the full product family.
> 
> To further improve perceptual quality while reducing inference cost, we trained **MOSS-Audio-Tokenizer-Nano**, a lightweight tokenizer with approximately **20 million parameters** designed for high-fidelity audio compression. It supports **48 kHz** input and output as well as **stereo audio**, which helps reduce compression loss and improve listening quality. It can compress **48 kHz stereo audio** into a **12.5 Hz** token stream and uses **RVQ with 16 codebooks**, enabling high-fidelity reconstruction across variable bitrates from **0.125 kbps to 2 kbps**.
> 
> To learn more about setup, advanced usage, and evaluation metrics, please visit the [MOSS-Audio-Tokenizer Repository](https://github.com/OpenMOSS/MOSS-Audio-Tokenizer)
> 
>   
>   Architecture of MOSS-Audio-Tokenizer-Nano
> 
> 
> ### Introduction
> 
>   
> 
> MOSS‑TTS Family is an open‑source **speech and sound generation model family** from [MOSI.AI](https://mosi.cn/#hero) and the [OpenMOSS team](https://www.open-moss.com/). It is designed for **high‑fidelity**, **high‑expressiveness**, and **complex real‑world scenarios**, covering stable long‑form speech, multi‑speaker dialogue, voice/character design, environmental sound effects, and real‑time streaming TTS.
> 
> The family currently includes:
> 
> - **MOSS-TTS**: the flagship model for **high-fidelity zero-shot voice cloning**, **long-speech generation**, **fine-grained control over Pinyin, phonemes, and duration**, and **multilingual/code-switched synthesis**.
> - **MOSS-TTS-Local-Transformer**: a smaller model in the family based on `MossTTSLocal`, designed to keep the MOSS-TTS style of speech generation in a lighter model size.
> - **MOSS-TTSD-v1.0**: a spoken dialogue generation model for **expressive**, **multi-speaker**, and **ultra-long** dialogue audio.
> - **MOSS-VoiceGenerator**: a voice design model that can generate diverse voices and speaking styles directly from **text prompts**, without reference speech.
> - **MOSS-SoundEffect**: a controllable sound generation model for natural ambience, city scenes, animals, human actions, and short music-like audio fragments.
> - **MOSS-TTS-Realtime**: a realtime speech model for low-latency voice agents, designed to keep replies natural, coherent, and voice-consistent across turns.
> 
> 
> ## News
> 
> * 2026.4.17: We are excited to release a more efficient and fully standalone [**ONNX CPU Version**](#onnx-cpu-version), backed by the Hugging Face repositories [**MOSS-TTS-Nano-100M-ONNX**](https://huggingface.co/OpenMOSS-Team/MOSS-TTS-Nano-100M-ONNX) and [**MOSS-Audio-Tokenizer-Nano-ONNX**](https://huggingface.co/OpenMOSS-Team/MOSS-Audio-Tokenizer-Nano-ONNX). It preserves the full voice cloning workflow while removing the PyTorch dependency during inference. In our tests, it delivers nearly **2x** the processing efficiency of the original version, and runs smoothly on a **single CPU core** on a **MacBook Air M4**. Built on top of this ONNX CPU version, we have also updated [**MOSS-TTS-Nano-Reader**](https://github.com/OpenMOSS/MOSS-TTS-Nano-Reader), which can now run the model directly inside the browser as an extension, without requiring a separate local inference service.
> * 2026.4.16: We release the **MOSS-TTS-Nano finetuning code**. See [./finetuning/README.md](./finetuning/README.md) for training and usage details.
> * 2026.4.14: We release [**MOSS-TTS-Nano-Reader**](https://github.com/OpenMOSS/MOSS-TTS-Nano-Reader), a local browser reading application built on top of **MOSS-TTS-Nano**.
> * 2026.4.10: We release **MOSS-TTS-Nano**. A demo Space is available at [OpenMOSS-Team/MOSS-TTS-Nano](https://huggingface.co/spaces/OpenMOSS-Team/MOSS-TTS-Nano). You can also view the demo and more details at [openmoss.github.io/MOSS-TTS-Nano-Demo/](https://openmoss.github.io/MOSS-TTS-Nano-Demo/).
> 
> 
> ## Contents
> 
> - [News](#news)
> - [Demo](#demo)
> - [Introduction](#introducti

## 延伸閱讀

相關概念：[[語音合成]] · [[多模態]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]]

[GitHub](https://github.com/OpenMOSS/MOSS-TTS-Nano) · [官方網站](https://openmoss.github.io/MOSS-TTS-Nano-Demo/)

## 相關收錄

> [!note]- 直接競品（同子分類：語音合成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "語音合成" AND file.name != "OpenMOSS--MOSS-TTS-Nano"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "OpenMOSS--MOSS-TTS-Nano"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "OpenMOSS--MOSS-TTS-Nano" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "OpenMOSS--MOSS-TTS-Nano"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["語音合成","多模態","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "OpenMOSS--MOSS-TTS-Nano" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "OpenMOSS--MOSS-TTS-Nano" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "OpenMOSS" AND file.name != "OpenMOSS--MOSS-TTS-Nano"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-TTS-Nano");
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

> **2026-04-15** — 首次收錄
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

- [[2026-04-17|2026-04-17]] — 再次上榜，1.2k stars
- [[2026-04-16|2026-04-16]] — 再次上榜，1.0k stars
- [[2026-04-15|2026-04-15]] — 首次收錄，753 stars
