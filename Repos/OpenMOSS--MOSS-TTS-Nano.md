---
repo: OpenMOSS/MOSS-TTS-Nano
url: https://github.com/OpenMOSS/MOSS-TTS-Nano
owner: OpenMOSS
owner_type: Organization
language: Python
license: Apache-2.0
description: "MOSS-TTS-Nano is an open-source multilingual tiny speech generation model from MOSI.AI and the OpenMOSS team. With only 0.1B parameters, it is designed for realtime speech generation, can run directly on CPU without a GPU, and keeps the deployment stack simple enough for local demos, web serving, and lightweight product integration."
homepage: "https://openmoss.github.io/MOSS-TTS-Nano-Demo/"
stars: 2768
stars_per_day: 106
forks: 355
open_issues: 49
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
use_case: "提供即時語音生成的多語言小型模型，適合輕量級產品整合。"
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
star_history: "2026-04-15:753,2026-04-15:760,2026-04-16:1028,2026-04-16:1033,2026-04-17:1239,2026-04-17:1243,2026-04-18:1369,2026-04-19:1489,2026-04-20:1640,2026-04-21:1791,2026-04-22:1909,2026-04-23:2003,2026-04-24:2081,2026-04-25:2155,2026-04-26:2211,2026-04-27:2254,2026-04-28:2300,2026-04-29:2353,2026-04-30:2395,2026-05-01:2482,2026-05-02:2544,2026-05-03:2599,2026-05-04:2659,2026-05-05:2689,2026-05-06:2721,2026-05-07:2768"
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
  - "提供即時語音生成的多語言小型模型，適合輕量級產品整合。"
---

# MOSS-TTS-Nano

**2.8k** stars · **106** stars/天 · 建立 26 天前 · Python · Apache-2.0

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
> 提供即時語音生成的多語言小型模型，適合輕量級產品整合。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (106 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在 CPU 上運行語音生成模型的開發者，特別是資源有限的環境。
> **一句話重點** 這個專案的設計理念是將語音生成模型的資源需求降到最低，讓更多開發者能夠輕鬆使用。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、6 小時整合，得到輕量級語音生成的能力，值得考慮。

> [!abstract] 核心創新
> 專為即時語音生成設計的輕量級模型，能在無 GPU 的情況下運行。

## 專案簡介

MOSS-TTS-Nano 是一個開源的多語言小型語音生成模型，僅有 0.1B 參數，設計上專注於即時語音生成，並且可以在沒有 GPU 的情況下直接在 CPU 上運行。用戶只需執行 `python app.py` 即可啟動本地 FastAPI 演示，並在瀏覽器中訪問 `http://127.0.0.1:18083` 進行測試。這個模型採用純自回歸的音頻標記器和 LLM 管道，旨在提供小型佈署、低延遲和足夠的質量以滿足即時產品的需求。技術上，它依賴於 PyTorch 和 ONNX，並且在安裝過程中需要注意 `pynini` 和 `WeTextProcessing` 的安裝順序。與其他 TTS 解決方案相比，MOSS-TTS-Nano 的優勢在於其輕量化設計，能夠在資源有限的環境中運行，這使得它特別適合於本地演示和輕量級產品集成。

相較於大型模型，這個模型的啟動時間和資源需求都顯著降低，適合快速原型開發和小型應用。使用者在進行多語言生成時，能夠享受到即時反饋，這在語音助手和語音克隆等應用中尤為重要。社群活躍度中等，開發者需要注意當前的開放問題，特別是與 Windows 和 ONNX 相關的問題。整體來說，這是一個值得關注的輕量級 TTS 解決方案，適合小型團隊和個人開發者使用。

**技術棧**：`Python 3.12` · `FastAPI` · `PyTorch 2.7.0` · `ONNX Runtime 1.20.0`

## 重點功能

- 即時語音生成 — 僅需 0.1B 參數，能在 CPU 上運行，適合輕量級應用。
- 多語言支持 — 能夠生成多種語言的語音，適合全球化產品。
- 簡單的本地部署 — 透過 FastAPI 提供本地演示，使用 `python app.py` 啟動。
- ONNX 支持 — 可選擇使用 ONNX 進行更快的推理，支持 CUDA 加速。
- 輕量級依賴 — 依賴於 PyTorch 和 ONNX，安裝過程簡單，適合快速上手。

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

## 程式碼範例

```python
{
  "前置條件": "需要安裝 FastAPI 和相關依賴",
  "指令": "python app.py",
  "預期輸出": "啟動本地服務，訪問 http://127.0.0.1:18083 進行測試。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天內累積 2768 stars（106/天），forks 355（12.8%），顯示出強勁的增長潛力。這個專案由 MOSI.AI 和 OpenMOSS 團隊開發，解決了小型語音生成模型在即時性和資源使用上的痛點，特別是在不需要 GPU 的情況下運行。之前的 TTS 解決方案往往需要高效能硬體，這使得許多開發者無法輕鬆使用。近期的推廣活動和社群討論也促進了其曝光度，尤其是在 Hugging Face 和 GitHub 上的活躍度。forks/stars 比率為 12.8%，顯示出許多人對其進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 CPU 上運行語音生成模型的開發者，特別是資源有限的環境。

> [!example] 使用場景
> - 獨立開發者用它來快速原型開發語音助手，因為它的輕量化設計使得在資源有限的環境中也能運行。
> - 教育工作者用它來創建語音教材，因為即時語音生成能夠提高學習互動性。
> - 小型企業用它來整合語音克隆功能到客服系統中，因為其低延遲特性能提升用戶體驗。

## 架構分析

MOSS-TTS-Nano 採用純自回歸的音頻標記器和 LLM 管道，這種設計使得模型能夠在資源有限的環境中運行。資料流從用戶輸入的文本開始，經過音頻標記器處理後生成語音。選擇使用 PyTorch 和 ONNX 的原因在於它們的靈活性和高效能，但這也帶來了對於安裝依賴的挑戰。由於模型的輕量化設計，能夠在 CPU 上運行，這降低了對硬體的要求，但可能在處理大型資料集時會遇到效能瓶頸。整體架構的設計使得用戶能夠快速部署並進行本地測試，這對於快速原型開發非常有利。

## 技術深入分析

MOSS-TTS-Nano 的核心技術機制在於其自回歸的音頻標記器和 LLM 管道，這使得模型能夠在不依賴 GPU 的情況下進行即時語音生成。該模型的設計考慮到了低延遲和小型佈署的需求，能夠在 CPU 上運行，這對於資源有限的開發者來說是個優勢。效能上，雖然模型的參數量較少，但在即時性和語音生成的質量上仍能達到可接受的水平，特別是在小型應用中。選擇 PyTorch 和 ONNX 作為技術棧的原因在於它們的靈活性和廣泛的社群支持，但這也意味著使用者需要面對安裝過程中的依賴問題。設計上，MOSS-TTS-Nano 的輕量化特性使得它在快速原型開發和小型產品中表現出色，但在處理更大規模的資料時可能會遇到性能瓶頸。整合到現有的開發流程中，這個工具能夠與 FastAPI 等框架良好兼容，並且支持簡單的 CI/CD 流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程中可能會遇到 `pynini` 的安裝問題，但有提供解決方案。整體上，花 30 分鐘應該能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 輕量級設計，適合資源有限的環境。
> - 即時語音生成，能夠快速響應用戶請求。
> - 簡單的安裝和部署流程，適合快速上手。

> [!danger] 缺點
> - 在某些環境下，安裝過程可能會遇到問題。
> - 語音質量可能不及大型模型，適合一般應用但不適合高端需求。
> - 目前的社群支持和文檔仍在發展中，可能需要自行解決問題。

> [!warning] 注意事項
> - 安裝過程中可能需要手動處理 `pynini` 的安裝問題。
> - 在某些環境下，ONNX 可能會出現吞字吞句的問題。
> - 目前僅支持 Python 3.12 版本，對於其他版本的兼容性尚未測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多模態內容，與本專案的語音生成相比，功能範圍更廣，但可能需要更多資源。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 提供更高效能的語音合成解決方案，但需要 GPU 支持，對於資源有限的環境不太適合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 使用 GPU 加速的高效能語音合成技術，適合需要高質量語音生成的應用。 | 如果你的應用需要高質量的語音合成，且有可用的 GPU 資源。 | medium，因為需要重新設計部分架構以適應 GPU 加速。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多模態生成，能夠處理語音和其他媒介，但需要更多資源。 | 如果你的應用需要多模態支持，且不受限於資源。 | high，因為需要整合多種媒介的處理能力。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MOSS-TTS-Nano** | **NemoClaw** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 GPU 加速的高效能語音合成技術，適合需要高質量語音生成的應用。 | 專注於多模態生成，能夠處理語音和其他媒介，但需要更多資源。 |
> | 遷移成本 | - | medium，因為需要重新設計部分架構以適應 GPU 加速。 | high，因為需要整合多種媒介的處理能力。 |
> | 適用場景 | 主要場景 | 如果你的應用需要高質量的語音合成，且有可用的 GPU 資源。 | 如果你的應用需要多模態支持，且不受限於資源。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境中安裝 `pynini` 可能會遇到問題，導致安裝失敗。
  - 解法：建議先單獨安裝 `pynini`，然後再安裝其他依賴。
- [MEDIUM] 使用 ONNX 時可能會出現吞字吞句的情況。
  - 解法：目前尚無明確解決方案，建議使用者密切關注社群更新。
- [MEDIUM] 在某些語言的微調過程中，損失指標未顯著下降。
  - 解法：建議檢查數據集質量，並調整訓練參數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發語音助手 | 非常適合 | 輕量級設計和即時性滿足語音助手的需求。 |
| 教育機構用於語音教材 | 適合 | 能夠快速生成語音，提升學習互動性。 |
| 大型企業的客服系統 | 不適合 | 語音質量可能不及大型模型，無法滿足高端需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、6 小時整合，得到輕量級語音生成的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不會存取敏感資料。依賴的庫經過社群檢驗，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MOSS-TTS-Nano 通常與 FastAPI 和其他 Python 生態系統工具搭配使用，適合在開發和測試階段進行整合。在一個使用 FastAPI 的專案中，你可以透過 `python app.py` 啟動本地服務，並在瀏覽器中進行測試。與主流 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。整合過程中，最常見的問題是依賴安裝失敗，建議提前檢查環境配置。

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
| Forks | 355 |
| Open Issues | 49 |
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

**社群活躍度**：社群活躍度中等，開放問題數量顯示出仍有改進空間。
**連結**：[文件](https://openmoss.github.io/MOSS-TTS-Nano-Demo/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-05-06）
> **活躍天數** 3 天 · **最新 commit** update mlx support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/6) | It run on windows but pynini need a "custom" wheel. | 2 | 3 |
> | [#58](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/58) | onnx吞字吞句严重 | 0 | 0 |
> | [#57](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/57) | During Fine Tune Turkish Language not decrease Loss Metrics | 0 | 0 |
> | [#56](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/56) | Rust/Candle Port of MOSS-TTS-Nano – Seeking Feedback! | 0 | 0 |
> | [#55](https://github.com/OpenMOSS/MOSS-TTS-Nano/issues/55) | Apple Silicon (M2) Benchmark & Optimization Notes — ONNX CPU | 0 | 0 |

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
