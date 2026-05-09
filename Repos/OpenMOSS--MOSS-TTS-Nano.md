---
repo: OpenMOSS/MOSS-TTS-Nano
url: https://github.com/OpenMOSS/MOSS-TTS-Nano
owner: OpenMOSS
owner_type: Organization
language: Python
license: Apache-2.0
description: "MOSS-TTS-Nano is an open-source multilingual tiny speech generation model from MOSI.AI and the OpenMOSS team. With only 0.1B parameters, it is designed for realtime speech generation, can run directly on CPU without a GPU, and keeps the deployment stack simple enough for local demos, web serving, and lightweight product integration."
homepage: "https://openmoss.github.io/MOSS-TTS-Nano-Demo/"
stars: 2816
stars_per_day: 101
forks: 365
open_issues: 50
created: 2026-04-10
pushed_at: 2026-05-06
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
use_case: "提供即時語音生成的多語言小型語音生成模型，無需 GPU 直接在 CPU 上運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-20"
contributor_count: 4
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 59607
readme_length: 9912
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-15"
star_history: "2026-04-15:753,2026-04-15:760,2026-04-16:1028,2026-04-16:1033,2026-04-17:1239,2026-04-17:1243,2026-04-18:1369,2026-04-19:1489,2026-04-20:1640,2026-04-21:1791,2026-04-22:1909,2026-04-23:2003,2026-04-24:2081,2026-04-25:2155,2026-04-26:2211,2026-04-27:2254,2026-04-28:2300,2026-04-29:2353,2026-04-30:2395,2026-05-01:2482,2026-05-02:2544,2026-05-03:2599,2026-05-04:2659,2026-05-05:2689,2026-05-06:2721,2026-05-07:2768,2026-05-08:2796,2026-05-09:2816"
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
  - "提供即時語音生成的多語言小型語音生成模型，無需 GPU 直接在 CPU 上運行。"
---

# MOSS-TTS-Nano

**2.8k** stars · **101** stars/天 · 建立 28 天前 · Python · Apache-2.0

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
> 提供即時語音生成的多語言小型語音生成模型，無需 GPU 直接在 CPU 上運行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (101 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 希望在無 GPU 環境中實現即時語音生成的獨立開發者或小型團隊。
> **一句話重點** 這個專案展示了即使在資源有限的情況下，也能實現高效的即時語音生成。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到即時語音生成的效果，值得投入。

> [!abstract] 核心創新
> 專為即時語音生成設計的小型模型，能在無 GPU 環境下運行。

## 專案簡介

MOSS-TTS-Nano 是一個開源的多語言小型語音生成模型，僅有 0.1B 參數，專為即時語音生成而設計。用戶可以透過簡單的命令如 `python app.py` 啟動本地 FastAPI 演示，並在瀏覽器中測試語音生成。這個模型的核心在於其小巧的體積和低延遲，能夠在 4 核 CPU 上流暢運行，適合本地演示和輕量級產品整合。技術上，它使用純自回歸的音頻標記器和 LLM 管道，這使得推理流程對終端用戶和網頁演示用戶都非常友好。

MOSS-TTS-Nano 支持中文、英文等多種語言，並提供 48 kHz 的立體聲輸出，能夠處理長文本並自動進行語音克隆。與其他 TTS 解決方案相比，如 Google TTS 和 Amazon Polly，MOSS-TTS-Nano 的優勢在於其簡單的部署和無需 GPU 的運行能力，特別適合資源有限的環境。使用者在實際操作中可能會遇到依賴安裝問題，特別是 `pynini` 的安裝，需注意相關文檔中的指導。這個專案目前處於活躍開發階段，社群活躍度中等，對於希望在本地環境中快速實現語音生成的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`FastAPI` · `PyTorch 2.7.0` · `Transformers 4.57.1`

## 重點功能

- 小型模型尺寸 — 僅有 0.1B 參數，適合資源有限的環境。
- 即時語音生成 — 低延遲，能夠快速響應用戶請求。
- 多語言支持 — 支持中文、英文等多種語言的語音生成。
- 純自回歸架構 — 基於音頻標記器和 LLM 的推理流程。
- 本地部署簡單 — 直接使用 `python app.py` 啟動本地演示，無需複雜配置。
- 長文本處理能力 — 自動進行語音克隆，支持長文本輸入。
- 48 kHz 立體聲輸出 — 提供高品質的音頻輸出。
- 開源部署 — 提供完整的 CLI 支持，方便集成到現有項目中。

## 快速開始

1. 創建並激活 Conda 環境
```bash
conda create -n moss-tts-nano python=3.12 -y && conda activate moss-tts-nano
```
2. 克隆專案並安裝依賴
```bash
git clone https://github.com/OpenMOSS/MOSS-TTS-Nano.git && cd MOSS-TTS-Nano && pip install -r requirements.txt && pip install -e .
```
3. 啟動本地演示
```bash
python app.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天就累積 2816 stars（101/天），forks 365（13.0%），顯示出相對穩定的增長。專案的主要貢獻者來自 MOSI.AI 和 OpenMOSS 團隊，這些成員在語音生成和機器學習領域有豐富的經驗。MOSS-TTS-Nano 解決了在資源有限的情況下進行即時語音生成的需求，過去的解決方案通常需要高性能的 GPU，這使得許多開發者無法輕易使用。最近的推廣活動和社群互動也促進了專案的曝光率，特別是在 Hugging Face 和 GitHub 上的討論。這些因素共同推動了專案的快速成長。

## 適合誰使用

**目標受眾**：希望在無 GPU 環境中實現即時語音生成的獨立開發者或小型團隊。

> [!example] 使用場景
> - 語音應用開發者用它來快速構建語音生成原型，因為它的低延遲和小型模型使得本地測試變得簡單。
> - 教育工作者用它來創建多語言的語音教學資源，因為它支持多種語言並且不需要 GPU。
> - 獨立開發者用它來在小型項目中集成語音生成，因為其簡單的安裝過程和輕量級的特性適合資源有限的環境。

## 架構分析

MOSS-TTS-Nano 採用純自回歸的音頻標記器和 LLM 管道，這種設計使得模型在小型化的同時仍能保持良好的推理性能。資料流方面，音頻標記器將音頻數據轉換為標記，然後由 LLM 進行處理，最終生成語音輸出。這種架構的選擇使得模型能夠在 CPU 上高效運行，但也可能限制了在更高性能硬體上的擴展性。由於模型的輕量化設計，擴展性瓶頸主要來自於 CPU 的計算能力，對於需要更高性能的應用場景，可能需要考慮更強大的硬體支持。

## 技術深入分析

MOSS-TTS-Nano 的核心技術在於其小型化的自回歸架構，這使得模型能夠在 CPU 上高效運行。使用的音頻標記器基於 Transformer 結構，這種設計使得模型在處理音頻數據時能夠保持高效的計算性能。模型的推理速度和質量在多種基準測試中表現良好，特別是在低延遲的即時應用中。選擇 PyTorch 作為主要框架，這使得模型能夠利用其強大的深度學習功能，但也帶來了對於 GPU 的依賴。在未來的擴展中，可能需要考慮如何在不增加硬體需求的情況下進一步提升性能。整合到現有的開發流程中相對簡單，特別是對於已經使用 FastAPI 的開發者來說，能夠快速上手並進行部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了安裝和使用範例，安裝過程中可能會遇到依賴問題，特別是 `pynini` 的安裝。整體來說，新手能在 30 分鐘內完成安裝並運行基本示範。

## 優缺點分析

> [!success] 優點
> - 小型化設計，適合資源有限的環境。
> - 即時語音生成，低延遲響應。
> - 多語言支持，適合多種應用場景。

> [!danger] 缺點
> - 對於長文本處理可能需要額外的內存資源。
> - 安裝過程中可能會遇到依賴問題。
> - 相較於大型商業解決方案，語音質量可能略有不足。

> [!warning] 注意事項
> - 僅支持 Python 3.12 以上版本。
> - 安裝過程中可能會遇到 `pynini` 的安裝問題，需要手動處理。
> - 對於長文本的處理，可能需要額外的內存資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [GoogleCloudPlatform/text-to-speech](https://github.com/GoogleCloudPlatform/text-to-speech) | Google 的 TTS 服務提供高質量的語音合成，但需要網路連接和較高的運行成本。 |
| [AmazonPolly/polly](https://github.com/AmazonPolly/polly) | Amazon 的語音合成服務支持多種語言和語音，但需要額外的雲端計算資源和費用。 |
| [CoquiAI/coqui-stt](https://github.com/CoquiAI/coqui-stt) | Coqui 的開源語音合成工具提供多種語音選擇，但通常需要較高的硬體要求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [GoogleCloudPlatform/text-to-speech](https://github.com/GoogleCloudPlatform/text-to-speech) | 使用雲端服務進行語音合成，提供高質量的語音生成，但需要網路連接。 | 如果需要高質量的語音合成且不介意支付雲端費用。 | medium，因為需要重新設計應用以適應雲端服務。 |
| [CoquiAI/coqui-stt](https://github.com/CoquiAI/coqui-stt) | 開源的語音合成工具，通常需要較高的硬體要求。 | 如果需要更高的語音質量且有足夠的硬體資源。 | high，因為需要重新設計整個語音生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MOSS-TTS-Nano** | **text-to-speech** | **coqui-stt** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用雲端服務進行語音合成，提供高質量的語音生成，但需要網路連接。 | 開源的語音合成工具，通常需要較高的硬體要求。 |
> | 遷移成本 | - | medium，因為需要重新設計應用以適應雲端服務。 | high，因為需要重新設計整個語音生成流程。 |
> | 適用場景 | 主要場景 | 如果需要高質量的語音合成且不介意支付雲端費用。 | 如果需要更高的語音質量且有足夠的硬體資源。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型應用的試用，但不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 `pynini` 的安裝問題，特別是在 Windows 環境中。
  - 解法：參考 README 中的安裝指導，先安裝 `pynini` 再安裝其他依賴。
- [MEDIUM] ONNX 模型在某些情況下可能會吞字吞句。
  - 解法：檢查輸入文本的格式，並確保使用最新版本的模型。
- [MEDIUM] 在進行土耳其語微調時，損失指標未能降低。
  - 解法：檢查數據集的質量和微調參數設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊開發語音助手 | 非常適合 | 因為其小型化設計和即時生成能力能夠快速迭代。 |
| 大型企業的語音合成需求 | 不適合 | 因為可能無法滿足高品質的語音合成需求。 |
| 教育機構創建多語言教學資源 | 適合 | 因為支持多種語言且安裝簡單。 |
| 獨立開發者的個人項目 | 非常適合 | 因為其輕量級特性和簡單的部署流程。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時語音生成的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MOSS-TTS-Nano 最常與 FastAPI 和 PyTorch 搭配使用，適合在開發、建置和部署階段進行整合。在一個使用 FastAPI 的項目中，可以通過 `python app.py` 啟動語音生成服務，並在前端應用中調用 API。支援 GitHub Actions 進行 CI/CD 流程的自動化，並且與 VS Code 等主流 IDE 兼容。整合過程中，最常見的問題是依賴安裝，特別是 `pynini` 的安裝，需提前處理。

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
| Forks | 365 |
| Open Issues | 50 |
| Issue 解決率 | 9% (5 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-04-10 |
| 官方網站 | [Link](https://openmoss.github.io/MOSS-TTS-Nano-Demo/) |
| Repo 大小 | 58.2 MB |
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
> | [@gyt1145028706](https://github.com/gyt1145028706) | 45 |
> | [@alpacaking](https://github.com/alpacaking) | 9 |
> | [@YWMditto](https://github.com/YWMditto) | 1 |
> | [@linyueqian](https://github.com/linyueqian) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度良好。
**連結**：[文件](https://openmoss.github.io/MOSS-TTS-Nano-Demo/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-05-06）
> **活躍天數** 3 天 · **最新 commit** update mlx support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/6) | It run on windows but pynini need a "custom" wheel. | 2 | 3 |
> | [#59](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/59) | sentencepiece 在依赖中出现2次 | 0 | 0 |
> | [#58](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/58) | onnx吞字吞句严重 | 0 | 1 |
> | [#57](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/57) | During Fine Tune Turkish Language not decrease Loss Metrics | 0 | 3 |
> | [#56](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/56) | Rust/Candle Port of MOSS-TTS-Nano – Seeking Feedback! | 0 | 0 |

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
> To run the ONNX web demo with CUDA, start it with:
> 
> ```bash
> python app_onnx.py \
>   --execution-provider cuda
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
> To learn more about setup, advanced usage, and evaluation metrics, please visit the [MOSS-Audio-Tokenizer Repository](https://github.com/OpenMOSS/MOSS-Audio-Tokenizer).
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
> ### LibriSpeech Speech Metrics (MOSS-Audio-Tokenizer-Nano vs. Open-source Tokenizers)
> 
> The plots below compare MOSS-Audio-Tokenizer-Nano with other open-source audio tokenizers and codecs with **no more than 120M parameters** on the LibriSpeech dataset. The models are evaluated with SIM, STOI, PESQ-NB, and PESQ-WB, where higher values indicate better reconstruction quality.
> For the same model, we control the bitrate by adjusting the number of RVQ codebooks used during inference.
> 
>      
>     LibriSpeech reconstruction quality comparison across different bitrates.
> 
> 
> ## MOSS-TTS 2.0 Feedback Collection
> 
> MOSS-TTS 2.0 is coming soon. To better optimize model capabilities and product experience, we are collecting feedback and suggestions from TTS users. Please take 2-3 minutes to fill out the [requirements collection form](https://acnc6zeentra.feishu.cn/share/base/form/shrcnyAe1LwqKWjCSuW4wiZ2Hef). Feature requests of any kind are welcome.
> 
>   
>     
>   
> 
> [demo_video.mp4](https://github.com/user-attachments/assets/25aca215-0bd7-4d0c-be95-8d1f6737aec8)
> 
> 
> ## News
> 
> * 2026.5.6: **MOSS-TTS**, **MOSS-TTS-Nano**, and **MOSS-Audio-Tokenizer** now support [**mlx-audio**](https://github.com/Blaizzy/mlx-audio). Visit the [mlx-audio GitHub repository](https://github.com/Blaizzy/mlx-audio) for details.
> * 2026.4.29: MOSS-TTS 2.0 is coming soon! We are collecting TTS feedback, suggestions, and feature requests via the [requirements collection form](https://acnc6zeentra.feishu.cn/share/base/form/shrcnyAe1LwqKWjCSuW4wiZ2Hef).
> * 2026.4.27: We added updated evaluation results fo

## 延伸閱讀

相關概念：[[語音合成]] · [[多模態]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

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
> const concepts = ["語音合成","多模態","即時通訊"];
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
