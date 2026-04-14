---
repo: mattmireles/gemma-tuner-multimodal
url: https://github.com/mattmireles/gemma-tuner-multimodal
owner: mattmireles
owner_type: User
language: Python
license: MIT
description: "Fine-tune Gemma 4 and 3n with audio, images and text on Apple Silicon, using PyTorch and Metal Performance Shaders."
homepage: ""
stars: 1255
stars_per_day: 209
forks: 83
open_issues: 4
created: 2026-04-07
pushed_at: 2026-04-12
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "多模態微調"
release_tag: "v1.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "在 Apple Silicon 上使用 PyTorch 和 Metal Performance Shaders 對 Gemma 4 和 3n 進行音頻、圖像和文"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-17"
contributor_count: 2
engagement: "low"
issue_close_rate: 86
repo_size_kb: 2368
readme_length: 10000
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:1231,2026-04-14:1255"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "gemma-tuner-multimodal"
  - "mattmireles/gemma-tuner-multimodal"
  - "在 Apple Silicon 上使用 PyTorch 和 Metal Performance Shaders 對 Ge"
---

# gemma-tuner-multimodal

**1.2k** stars · **246** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.1`

> [!summary] 一句話摘要
> 在 Apple Silicon 上使用 PyTorch 和 Metal Performance Shaders 對 Gemma 4 和 3n 進行音頻、圖像和文本的微調。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (246 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Apple Silicon 上進行多模態微調的機器學習工程師和數據科學家。
> **一句話重點** 這個專案讓 Apple Silicon 使用者能夠無縫地進行多模態微調，打破了對 NVIDIA 硬體的依賴。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態微調" && p.file.name !== "mattmireles--gemma-tuner-multimodal" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態微調 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、10 小時整合，得到高效的多模態微調工具，值得考慮。

> [!abstract] 核心創新
> 支持在 Apple Silicon 上進行多模態微調，無需 NVIDIA 硬體。

## 專案簡介

Gemma Tuner 是一個專為 Apple Silicon 設計的多模態微調工具，支持對 Gemma 模型進行音頻、圖像和文本的訓練。使用者可以透過簡單的 CLI 指令，如 `gemma-macos-tuner prepare` 來準備數據，並使用 `gemma-macos-tuner finetune` 進行微調。這個工具的賣點在於它能夠在不需要 NVIDIA GPU 的情況下，利用 Apple 的 Metal Performance Shaders 進行高效訓練，並且支持從 Google Cloud Storage 或 BigQuery 直接流式訓練數據，避免了本地存儲的限制。技術上，它依賴於 Hugging Face 的 Transformers 和 PEFT LoRA 進行微調，並且可以處理多達 32GB 的 RAM，適合在資源受限的環境下運行。

與其他工具相比，如 MLX-LM 和 Unsloth，Gemma Tuner 提供了更全面的多模態支持，特別是在音頻和圖像的微調上，並且不需要 CUDA 環境。使用者可以在本地進行訓練，數據不會離開設備，這對於需要保護數據隱私的場景非常重要。雖然目前仍處於 alpha 階段，但其社群活躍度高，問題解決率達 86%。對於需要在 Apple Silicon 上進行多模態訓練的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`PyTorch` · `Metal Performance Shaders` · `Flask`

## 重點功能

- 多模態支持 — 同時支持音頻、圖像和文本的微調。
- Apple Silicon 原生支持 — 利用 Metal Performance Shaders 進行高效訓練。
- 雲端數據流式訓練 — 直接從 Google Cloud Storage 或 BigQuery 獲取數據，避免本地存儲限制。
- 實時訓練可視化 — 使用 Flask 和 Socket.IO 實時顯示訓練過程中的損失、學習率等指標。
- 簡單的 CLI 工具 — 透過簡單的命令行指令進行數據準備和模型微調。

## 快速開始

1. 安裝 PyTorch
```bash
pip install torch torchaudio
```
2. 安裝 Gemma Tuner
```bash
pip install -e .
```
3. 運行設置向導
```bash
gemma-macos-tuner wizard
```

## 程式碼範例

```python
# 前置條件
# 確保已安裝 PyTorch
pip install torch torchaudio

# 運行微調
gemma-macos-tuner finetune
# 預期輸出
模型將開始微調，並在終端顯示訓練過程中的損失等指標。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 在建立 5 天內累積 1231 stars（246/天），forks 78（6.3%），顯示出穩定的增長趨勢。作者 mattmireles 之前參與過多個開源項目，這次專案解決了在 Apple Silicon 上進行多模態微調的需求，之前的方案多依賴於 NVIDIA 硬體，限制了使用者的選擇。近期的推廣和社群討論也可能促進了這個專案的曝光。高 forks/stars 比率顯示出使用者對此工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上進行多模態微調的機器學習工程師和數據科學家。

> [!example] 使用場景
> - 數據科學家用它來在 Apple Silicon 上微調 Gemma 模型，因為這樣可以避免使用昂貴的 NVIDIA 硬體，並且能夠直接從 GCS 獲取數據。
> - 機器學習工程師用它來訓練專門的 ASR 模型，因為它支持音頻和文本的多模態訓練，能夠適應特定領域的語音資料。
> - 開發者用它來構建私有的多模態助手，因為所有訓練和推理都在本地進行，數據不會上傳至雲端，保護了用戶隱私。

## 架構分析

Gemma Tuner 的架構設計以 Apple Silicon 為核心，利用 Metal Performance Shaders 進行高效的計算。整體架構分為 CLI、數據準備、微調和導出四個主要模塊，使用者可以透過簡單的命令行指令進行操作。數據流從 CSV 或雲端源頭進入，經過數據準備模塊進行處理，然後進入微調模塊進行模型訓練，最後導出為 Hugging Face 兼容的格式。這樣的設計使得使用者能夠輕鬆地在本地環境中進行訓練，並且能夠隨時查看訓練過程的可視化數據。選擇 MPS 而非 CUDA 的代價在於可能無法利用某些 NVIDIA 硬體特性，但這樣的設計使得更多使用者能夠在不依賴昂貴硬體的情況下進行深度學習。

## 技術深入分析

Gemma Tuner 的核心技術機制依賴於 PyTorch 和 Metal Performance Shaders，這使得它能夠在 Apple Silicon 上高效運行。使用者可以透過 CLI 指令進行數據準備、微調和導出，整個流程簡潔明瞭。效能上，該工具能夠處理多達 32GB 的 RAM，適合中小型數據集的訓練。設計上，選擇 MPS 而非 CUDA 使得更多使用者能夠在不依賴昂貴硬體的情況下進行深度學習，但這也意味著無法利用某些 NVIDIA 硬體特性。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大型數據集時。整合方面，該工具與 Hugging Face 生態系統兼容，使用者可以輕鬆導入和導出模型，並且可以在 CI/CD pipeline 中進行自動化訓練。整體而言，這是一個針對 Apple Silicon 使用者的強大工具，未來可能會隨著社群的增長而進一步發展。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和範例，安裝過程順暢，無明顯坑點。提供了良好的設置向導，能夠幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 支持多模態訓練，能夠同時處理音頻、圖像和文本。
> - 無需 NVIDIA 硬體，適合 Apple Silicon 使用者。
> - 提供實時訓練可視化，便於監控訓練過程。

> [!danger] 缺點
> - 仍處於 alpha 階段，穩定性可能不足。
> - 僅支援 macOS，對於 Windows 使用者不友好。
> - 需要較高的硬體要求，至少 16GB 的 RAM。

> [!warning] 注意事項
> - 目前僅支援 macOS 12.3 以上版本。
> - 需要至少 16GB 的 RAM，32GB 以上更佳。
> - 不支援 Windows 系統。
> - 仍處於 alpha 階段，API 可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| MLX-LM | 支持文本微調，但不支持音頻和圖像的多模態訓練，且需要 NVIDIA 硬體。 |
| Unsloth | 雖然支持多模態微調，但在音頻處理上存在限制，且不支持 Apple Silicon。 |
| axolotl | 僅支持 CUDA 環境，對於沒有 NVIDIA 硬體的用戶不適用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| MLX-LM | 使用 CUDA 實現，對於需要 NVIDIA 硬體的用戶來說是更高效的選擇。 | 如果你的團隊已經在使用 NVIDIA 硬體，並且需要更高的訓練效率。 | medium，因為需要重新配置環境和依賴。 |
| Unsloth | 支持多模態訓練，但在音頻處理上存在限制，且不支持 Apple Silicon。 | 如果你的數據集主要是圖像和文本，且不需要音頻支持。 | low，因為大部分訓練流程相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gemma-tuner-multimodal** | **MLX-LM** | **Unsloth** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 CUDA 實現，對於需要 NVIDIA 硬體的用戶來說是更高效的選擇。 | 支持多模態訓練，但在音頻處理上存在限制，且不支持 Apple Silicon。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和依賴。 | low，因為大部分訓練流程相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 NVIDIA 硬體，並且需要更高的訓 | 如果你的數據集主要是圖像和文本，且不需要音頻支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，默認配置可能導致內存溢出錯誤。
  - 解法：調整配置文件中的內存參數。
- [MEDIUM] 使用者在微調過程中可能無法調整某些超參數。
  - 解法：參考文檔中的超參數調整指南。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行多模態模型的開發 | 非常適合 | 支持多模態訓練，並且不需要昂貴的硬體。 |
| 需要在本地環境中進行數據隱私保護的項目 | 非常適合 | 所有訓練和推理都在本地進行，數據不會上傳。 |
| 大型企業的核心產品開發 | 不適合 | 仍處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到高效的多模態微調工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且數據不會上傳至雲端，保護用戶隱私。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
| Forks | 78 |
| Open Issues | 2 |
| Issue 解決率 | 86% (12 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-07 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mattmireles/gemma-tuner-multimodal) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "JavaScript" : 7
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mattmireles](https://github.com/mattmireles) | 211 |
> | [@jasontitus](https://github.com/jasontitus) | 1 |

**最新版本**：v1.1 — v0.2.0-alpha — Watch Your Model Train (2026-04-08)

> [!info]- Release Notes
> <img width="1647" height="1634" alt="Screenshot 2026-04-08 at 12 09 51 PM" src="https://github.com/user-attachments/assets/64e73480-95ea-482a-81ed-0e4ba30e4343" />
> What's New
> ### **A Real-Time Training Visualizer**
> You can now watch your model train. Open a browser. A 3D amber galaxy rotates in sync with your model's own layer structure, updating every step. Loss, learning rate, gradient norm, and memory pressure stream live via Socket.IO. Nothing to install: the visualizer auto-installs Flask and its dependencies on first run.
> 
> Fourteen commits went into this. It was redesigned from scratch halfway through — the first version worked, the final version is a quiet instrument. Toggle panels on and off. Dock it to idle. The galaxy changes shape when you change models.
> 
> ### Gemma 4 Instruction-Tuning: Label Masking Fixed
> A silent bug was training the model on padding tokens during instruction-tuning. Labels are now masked correctly. If you fine-tuned Gemma 4 in instruction mode before this release, retrain. The LoRA learning rate has also been bumped to compensate for the corrected gradient signal.
> 
> ### Try It Without Bringing Your Own Data
> A sample-text dataset is now bundled in the repo. Clone, install, run the wizard — it works on the first try without a CSV, a GCS bucket, or a BigQuery table.
> 
> ### **What Changed (Full List)**
> 
> - Training visualizer: wired callback into Gemma Trainer, Socket.IO live metrics, 3D galaxy, per-step logging
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，問題解決率 86%。
**連結**：[文件](https://github.com/mattmireles/gemma-tuner-multimodal)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-12）
> **活躍天數** 2 天 · **最新 commit** Fix ruff formatting in collators.py

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/mattmireles/gemma-tuner-multimodal/issues/19) | can't tune anything. | 0 | 0 |
> | [#18](https://github.com/mattmireles/gemma-tuner-multimodal/issues/18) | default config oom | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Gemma Multimodal Fine-Tuner
> 
> **Fine-tune Gemma on text, images, *and* audio — on your Mac, on data that doesn't fit on your Mac.**
> 
> - 🖼️ **Image + text LoRA** — captioning and VQA on local CSV.
> - 🎙️ **Audio + text LoRA** — Apple-Silicon-native, no CUDA required.
> - 📝 **Text-only LoRA** — instruction or completion on CSV.
> - ☁️ **Stream from GCS / BigQuery** — train on terabytes without filling your SSD.
> - 🍎 **Runs on Apple Silicon** — MPS-native, no NVIDIA box required.
> 
> **Source:** [github.com/mattmireles/gemma-tuner-multimodal](https://github.com/mattmireles/gemma-tuner-multimodal) (public).
> 
> ---
> 
> 
> ## Installation
> 
> 
> # x86_64 -> Python is running under Rosetta; install a native arm64 Python and recreate the venv
> ```
> 
> A native arm64 Python is available from [python.org](https://www.python.org/downloads/macos/)
> or Homebrew (`brew install python@3.12`).
> 
> 
> ### 3. Install PyTorch
> 
> ```bash
> pip install torch torchaudio
> ```
> 
> 
> ### 4. Install this package
> 
> ```bash
> pip install -e .
> ```
> 
> 
> # Guided setup
> gemma-macos-tuner wizard
> ```
> 
> **Migration from `main.py` / old habits:** [`docs/MIGRATION.md`](docs/MIGRATION.md). Runs management moved to the `runs` subcommand—not a separate `manage.py` in this tree.
> 
> ---
> 
> 
> # corruption/drift detection. Verification is intentionally strict about
> 
> ### 6. Gemma 4 (optional)
> 
> The base install (`pip install -e .`) pins Transformers ≥5.5 — both **Gemma 3n** and **Gemma 4** families work out of the box. Gemma 4 checkpoints need a slightly newer PEFT:
> 
> ```bash
> pip install -r requirements/requirements-gemma4.txt
> ```
> 
> `finetune` and `export` are family-aware. A few non-training commands (`gemma_generate`, multimodal probing, ASR eval) still reject Gemma 4 ids until those code paths are upgraded.
> 
> 
> # Dataset prep (profile names come from config/config.ini)
> gemma-macos-tuner prepare 
> 
> 
> # Export merged HF/SafeTensors tree (LoRA merged when adapter_config.json is present)
> gemma-macos-tuner export 
> 
> 
> ## LoRA for Gemma 4 & 3n — why not just use…?
> 
> | | **This** | MLX-LM | Unsloth | axolotl |
> | --- | :-: | :-: | :-: | :-: |
> | Fine-tune Gemma (text-only CSV) | ✅ | ✅ | ✅ | ✅ |
> | Fine-tune Gemma **image + text** (caption / VQA CSV) | ✅ | ⚠️ varies | ⚠️ varies | ⚠️ varies |
> | Fine-tune Gemma **audio + text** | ✅ | ❌ | ❌ | ⚠️ CUDA only |
> | Runs on Apple Silicon (MPS) | ✅ | ✅ | ❌ | ❌ |
> | **Stream training data from cloud** | ✅ | ❌ | ❌ | ⚠️ partial |
> | No NVIDIA GPU required | ✅ | ✅ | ❌ | ❌ |
> 
> Fine-tune Gemma on **text, images, or audio** without renting an H100 or copying a terabyte of data to your laptop. All three modalities run on Apple Silicon.
> 
> **Text-only fine-tuning** (instruction or completion on CSV) is supported: set `modality = text` in your profile and use local CSV splits under `data/datasets//`. See [Text-only fine-tuning](#text-only-fine-tuning) below.
> 
> **Image + text fine-tuning** (captioning or VQA on local CSV) uses `modality = image`, `image_sub_mode`, and `image_token_budget`; see [Image fine-tuning](#image-fine-tuning) below. v1 is **local CSV only** (same constraint as text-only).
> 
> **How it works:** Hugging Face Gemma checkpoints + PEFT LoRA, supervised fine-tuning in [`gemma_tuner/models/gemma/finetune.py`](gemma_tuner/models/gemma/finetune.py), exported as a merged HF / SafeTensors tree by [`gemma_tuner/scripts/export.py`](gemma_tuner/scripts/export.py). For Core ML conversion and GGUF inference tooling, see [`README/guides/README.md`](README/guides/README.md) — this repo's *training* path is Gemma-only by design.
> 
> **Deeper reading:** [`README/guides/README.md`](README/guides/README.md) · [`README/specifications/Gemma3n.md`](README/specifications/Gemma3n.md)
> 
> ---
> 
> 
> ## Data: CSVs, GCS, BigQuery
> 
> - **Local / HTTP / GCS paths** in your prepared CSV; use `gemma-macos-tuner prepare  --no-download` to avoid copying GCS audio locally.
> - **BigQuery import** (wizard or scripts): needs `pip install .[gcp]` and Application Default Credentials (`gcloud auth application-default login` or `GOOGLE_APPLICATION_CREDENTIALS`). The wizard can materialize `_prepared.csv` and append a dataset section to `config/config.ini`.
> 
> Patch layout (by dataset `source`):
> 
> ```text
> data_patches/{source}/
> ├── override_text_perfect/
> ├── do_not_blacklist/
> └── delete/
> ```
> 
> ---
> 
> 
> ## Watch your model learn
> 
> Loss curve. Attention heatmap. Gradient signal strength. Memory pressure. Token-by-token predictions — all updating in real time, in your browser, while the model trains on your Mac. No TensorBoard. No notebook. One flag in your config, one URL in your terminal.
> 
> → [Setup takes 30 seconds](#training-visualizer)
> 
> ---
> 
> 
> ## What you can build with this
> 
> - **Domain-specific ASR** — fine-tune on medical dictation, legal depositions, call-center recordings, or any field where off-the-shelf Whisper / Gemma mishears the jargon.
> - **Domain-specific vision** — captioning or VQA on receipts, charts, screenshots, manufacturing defects, medical imagery — any visual domain where generic models hallucinate.
> - **Document & screen understanding** — train on screenshot → structured-output pairs for UI agents, OCR-adjacent pipelines, or chart QA.
> - **Accent, dialect, and low-resource language adaptation** — adapt a base Gemma model to underrepresented voices and languages with your own labeled audio.
> - **Multimodal assistants** — extend Gemma's text reasoning with image *or* audio grounding for transcription, captioning, and Q&A pipelines.
> - **Private, on-device pipelines** — train and run entirely on your Mac. Data never leaves the machine; weights never touch a third-party API.
> 
> If your data lives in GCS or BigQuery, you can do all of this on a laptop without copying terabytes locally — the dataloader streams shards on demand.
> 
> ---
> 
> 
> ## Supported models
> 
> Training targets **Gemma multimodal (text + image + audio)** checkpoints loaded via `base_model` in [`config/config.ini`](config/config.ini) and routed to [`gemma_tuner/models/gemma/finetune.py`](gemma_tuner/models/gemma/finetune.py). The default file ships these **`[model:…]`** entries (LoRA on top of the Hub weights):
> 
> | Model key (in `config/config.ini`) | Hugging Face `base_model` | Notes |
> | --- | --- | --- |
> | `gemma-4-e2b-it` | [`google/gemma-4-E2B-it`](https://huggingface.co/google/gemma-4-E2B-it) | Gemma 4 instruct, ~2B — requires `requirements/requirements-gemma4.txt` (see Installation) |
> | `gemma-4-e4b-it` | [`google/gemma-4-E4B-it`](https://huggingface.co/google/gemma-4-E4B-it) | Gemma 4 instruct, ~4B — requires Gemma 4 stack |
> | `gemma-4-e2b` | [`google/gemma-4-E2B`](https://huggingface.co/google/gemma-4-E2B) | Gemma 4 base — requires Gemma 4 stack |
> | `gemma-4-e4b` | [`google/gemma-4-E4B`](https://huggingface.co/google/gemma-4-E4B) | Gemma 4 base — requires Gemma 4 stack |
> | `gemma-3n-e2b-it` | [`google/gemma-3n-E2B-it`](https://huggingface.co/google/gemma-3n-E2B-it) | Gemma 3n instruct, ~2B — **default** on the base `pip install -e .` pin |
> | `gemma-3n-e4b-it` | [`google/gemma-3n-E4B-it`](https://huggingface.co/google/gemma-3n-E4B-it) | Gemma 3n instruct, ~4B |
> 
> Add your own **`[model:your-name]`** section with `group = gemma` and a compatible `base_model` if you need another **any-to-any** Gemma 3n / Gemma 4 E2B–E4B checkpoint. **Larger Gemma 4 weights** on Hugging Face (for example 26B or 31B class) use a different Transformers architecture than this trainer’s `AutoModelForCausalLM` audio path—they are **not** supported here yet.
> 
> Wizard time and memory hints come from [`gemma_tuner/wizard/base.py`](gemma_tuner/wizard/base.py) (`ModelSpecs`).
> 
> ---
> 
> 
> ## Architecture
> 
> | Piece | Role |
> | --- | --- |
> | [`gemma_tuner/cli_typer.py`](gemma_tuner/cli_typer.py) | Canonical CLI (`gemma-macos-tuner`). Imports `core.bootstrap` early so MPS env vars are set before Torch is loaded. |
> | [`gemma_tuner/core/ops.py`](gemma_tuner/core/ops.py) | Dispatches prepare → `scripts.prepare_data`, finetune → `scripts.finetune`, evaluate → `scripts.evaluate`, export → `scripts.export`. |
> | [`gemma_tuner/scripts/finetune.py`](gemma_tu

## 延伸閱讀

相關概念：[[多模態]] · [[音頻處理]] · [[圖像生成]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]]

[GitHub](https://github.com/mattmireles/gemma-tuner-multimodal)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態微調）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態微調" AND file.name != "mattmireles--gemma-tuner-multimodal"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "mattmireles--gemma-tuner-multimodal"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "mattmireles--gemma-tuner-multimodal" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "mattmireles--gemma-tuner-multimodal"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","音頻處理","圖像生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mattmireles--gemma-tuner-multimodal" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mattmireles--gemma-tuner-multimodal" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mattmireles" AND file.name != "mattmireles--gemma-tuner-multimodal"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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
> const me = dv.page("Repos/mattmireles--gemma-tuner-multimodal");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 再次上榜，1.3k stars
- [[2026-04-13|2026-04-13]] — 首次收錄，1.2k stars
