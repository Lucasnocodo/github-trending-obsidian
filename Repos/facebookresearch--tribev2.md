---
repo: facebookresearch/tribev2
url: https://github.com/facebookresearch/tribev2
owner: facebookresearch
owner_type: Organization
language: Jupyter Notebook
license: NOASSERTION
description: "This repository contains the code to train and evaluate TRIBE v2, a multimodal model for brain response prediction"
homepage: ""
stars: 900
stars_per_day: 180
forks: 175
open_issues: 13
created: 2026-03-24
pushed_at: 2026-03-26
first_seen: 2026-03-30
week: "2026-W14"
month: "2026-03"
category: "AI/ML"
subcategory: "多模態學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-30
use_case: "預測大腦反應的多模態模型，結合視覺、聽覺和語言數據。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1324
readme_length: 4456
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-30"
star_history: "2026-03-30:900"
tags:
  - github
  - "category/ai_ml"
  - "lang/jupyter notebook"
  - org
aliases:
  - "tribev2"
  - "facebookresearch/tribev2"
  - "預測大腦反應的多模態模型，結合視覺、聽覺和語言數據。"
---

# tribev2

**900** stars · **180** stars/天 · 建立 5 天前 · Jupyter Notebook · NOASSERTION

```dataviewjs
const me = dv.page("Repos/facebookresearch--tribev2");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 預測大腦反應的多模態模型，結合視覺、聽覺和語言數據。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (180 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要進行大腦反應預測的神經科學研究團隊，特別是對多模態數據分析有需求的團隊。
> **一句話重點** TRIBE v2 的強大之處在於其能夠有效整合多模態數據，為大腦反應預測提供了新的可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--tribev2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態學習" && p.file.name !== "facebookresearch--tribev2" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效的多模態預測能力，值得投入。

> [!abstract] 核心創新
> TRIBE v2 結合了視覺、聽覺和語言的多模態數據，提供了對大腦反應的全面預測能力。

## 專案簡介

TRIBE v2 是一個深度多模態大腦編碼模型，專門用來預測 fMRI 大腦反應，輸入可以是視頻、音頻或文本。這個模型使用了先進的特徵提取器，包括 LLaMA 3.2（文本）、V-JEPA2（視頻）和 Wav2Vec-BERT（音頻），並將這些數據映射到皮層表面。用戶可以通過 `model.get_events_dataframe` 方法將視頻路徑轉換為事件數據框，然後使用 `model.predict` 來獲得預測結果，輸出為時間步和頂點的形狀。這個工具的賣點在於其能夠整合多種數據來源，提供對大腦反應的全面預測。技術上，這個模型基於 Transformer 架構，並且依賴於 PyTorch Lightning 進行訓練，這使得其在處理大規模數據時具備良好的性能。

與其他工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，TRIBE v2 更加專注於多模態數據的整合，並且在預測精度上有顯著提升。使用者在部署時可能會遇到 Python 3.10 的安裝問題，這是由於某些依賴未完全兼容。這個專案目前仍在活躍開發中，社群的回應速度和貢獻度尚需提升，因此在使用時需謹慎考量其穩定性。總體來說，這個專案適合需要進行大腦反應預測的研究團隊，尤其是在多模態數據分析方面有需求的情況下。

**技術棧**：`Python 3.8` · `PyTorch Lightning` · `Transformers`

## 重點功能

- 多模態預測 — 結合視頻、音頻和文本數據，提供全面的大腦反應預測。
- 預訓練模型加載 — 使用 `TribeModel.from_pretrained` 方法輕鬆加載預訓練模型。
- 自動文本轉語音 — 將文本自動轉換為語音並進行時間標記，便於分析。
- 靈活的安裝選項 — 提供基本、可視化和訓練依賴的安裝選項，滿足不同需求。
- 支持 Slurm 分佈式訓練 — 提供在 Slurm 環境下進行網格搜索的功能，適合大規模訓練。

## 快速開始

1. 安裝基本依賴
```bash
pip install -e .
```
2. 加載預訓練模型並預測
```bash
from tribev2 import TribeModel
model = TribeModel.from_pretrained('facebook/tribev2', cache_folder='./cache')
```
3. 獲取事件數據框
```bash
df = model.get_events_dataframe(video_path='path/to/video.mp4')
```

## 程式碼範例

```jupyter notebook
[
  "# 前置條件：已安裝 tribev2 套件",
  "from tribev2 import TribeModel\nmodel = TribeModel.from_pretrained('facebook/tribev2', cache_folder='./cache')\ndf = model.get_events_dataframe(video_path='path/to/video.mp4')\npreds, segments = model.predict(events=df)\nprint(preds.shape)  # (n_timesteps, n_vertices)",
  "# 預期輸出：預測結果的形狀，格式為 (時間步, 頂點數)"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 900 stars（180/天），forks 175（19.4%），顯示出強烈的社群興趣。作者 sdascoli 來自 Facebook Research，過去有多項關於神經科學的研究，這個專案解決了多模態數據整合的需求，之前的工具往往無法有效處理這些數據。近期的推文和學術發表也引起了廣泛討論，進一步推動了其流行。技術上，隨著深度學習和多模態學習的進步，這個工具的可行性大幅提升。高達 19.4% 的 forks/stars 比率顯示出許多人正在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要進行大腦反應預測的神經科學研究團隊，特別是對多模態數據分析有需求的團隊。

> [!example] 使用場景
> - 神經科學研究人員用它來預測大腦對視頻刺激的反應，因為它能整合視覺和聽覺數據，提供更準確的預測。
> - 數據科學家用它來分析多模態數據集，因為其 Transformer 架構能有效處理大規模數據，並提供高效能的預測。
> - 學術機構用它來進行大腦神經科學的實驗，因為其開源性質使得研究結果可以被廣泛分享和驗證。

## 架構分析

TRIBE v2 採用 Transformer 架構，這使其能夠有效處理多模態數據。數據流從視頻、音頻和文本進入模型，經過多層的特徵提取後，最終映射到皮層表面。這樣的設計使得模型能夠捕捉到不同模態之間的關聯性，但也帶來了較高的計算需求。

模型的擴展性取決於底層的硬體資源，尤其是在訓練階段，對 GPU 的需求較高。選擇 Transformer 而非傳統的 RNN 或 CNN，能夠更好地處理長序列數據，但也需要更多的訓練數據來避免過擬合。整體架構的設計考量了未來的擴展性，但在資源有限的情況下可能會遇到性能瓶頸。

## 技術深入分析

TRIBE v2 的核心技術機制是基於 Transformer 的多模態數據處理，這使得模型能夠同時處理視頻、音頻和文本數據。模型的設計選擇了 LLaMA 3.2、V-JEPA2 和 Wav2Vec-BERT 作為特徵提取器，這些都是目前最先進的模型，能夠提供高質量的特徵表示。效能上，模型在處理大規模數據時需要較強的 GPU 支持，並且訓練過程的冷啟動時間可能較長。選擇 Transformer 架構的好處在於能夠捕捉長距離依賴，但這也意味著需要更多的訓練數據來避免過擬合。技術風險方面，隨著數據量的增加，模型可能會面臨性能瓶頸，特別是在資源有限的情況下。整合方面，與主流的深度學習框架如 PyTorch 的兼容性良好，但在 CI/CD pipeline 中的整合需要進一步的探索。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，對於新手來說相對友好。安裝過程中可能會遇到依賴問題，特別是在 Python 3.10 環境下。整體上，文件結構清晰，有助於快速上手，但缺乏中文或多語言支持。

## 優缺點分析

> [!success] 優點
> - 能夠整合多種數據來源，提供全面的預測能力。
> - 使用先進的特徵提取器，提升預測的準確性。
> - 開源且有詳細的文檔，方便研究者使用和修改。

> [!danger] 缺點
> - 安裝過程中可能遇到依賴問題，特別是在 Python 3.10 環境下。
> - 對於大規模數據集，訓練時間較長，資源需求高。
> - 社群活躍度不高，問題解決的速度可能較慢。

> [!warning] 注意事項
> - 目前僅支持 Python 3.8 和 3.9，Python 3.10 安裝會失敗。
> - 需要 HuggingFace 的訪問權限來使用 LLaMA 3.2 模型。
> - 對於大規模數據集，訓練過程可能需要較長時間，尤其是在資源有限的情況下。
> - 目前社群活躍度不高，可能會影響問題解決的速度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於資料同步，並不專注於大腦反應預測，功能範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，並不提供多模態數據的預測功能。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 主要針對文本生成，無法處理視頻和音頻數據。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不支持多模態數據的預測。 | 如果你的需求主要是資料同步而非多模態預測，則應選擇此工具。 | low，因為功能範圍不同，遷移成本低。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，無法處理多模態數據。 | 如果你的專案重點在於數據安全而非預測，則此工具更為合適。 | medium，因為需要重新設計數據流和處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tribev2** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不支持多模態數據的預測。 | 專注於數據隱私和安全，無法處理多模態數據。 |
> | 遷移成本 | - | low，因為功能範圍不同，遷移成本低。 | medium，因為需要重新設計數據流和處理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非多模態預測，則應選擇此工具。 | 如果你的專案重點在於數據安全而非預測，則此工具更為合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於研究和實驗，尚不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能因依賴問題導致失敗，特別是在 Python 3.10 環境下。
  - 解法：使用 Python 3.8 或 3.9 進行安裝。
- [MEDIUM] 模型訓練過程中可能需要較長時間，特別是在資源有限的情況下。
  - 解法：考慮使用雲端計算資源進行訓練。
- [MEDIUM] 社群活躍度低，問題解決速度慢。
  - 解法：主動參與社群討論，或尋求其他開源社群的幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要進行大腦反應預測的神經科學研究團隊 | 非常適合 | 模型能有效整合多模態數據，提供準確預測。 |
| 小型實驗室進行多模態數據分析 | 適合 | 開源性質使其易於修改和擴展。 |
| 大型機構的商業應用 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效的多模態預測能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度尚可，但需注意 HuggingFace 的訪問權限。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--tribev2");
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
> const me = dv.page("Repos/facebookresearch--tribev2");
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
| Forks | 175 |
| Open Issues | 13 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-24 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/facebookresearch/tribev2) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Jupyter Notebook" : 89
>     "Python" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sdascoli](https://github.com/sdascoli) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但問題解決率低，需提升參與度。
**連結**：[文件](https://github.com/facebookresearch/tribev2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/facebookresearch/tribev2/issues/2) | Installation fails on Python 3.10 due to neuralset/exca depe | 2 | 0 |
> | [#14](https://github.com/facebookresearch/tribev2/issues/14) | tribe v2 Meta AI 
 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # TRIBE v2
> 
> **A Foundation Model of Vision, Audition, and Language for In-Silico Neuroscience**
> 
> [](https://colab.research.google.com/github/facebookresearch/tribev2/blob/main/tribe_demo.ipynb)
> [](https://creativecommons.org/licenses/by-nc/4.0/)
> [](https://www.python.org/downloads/)
> 
> 📄 [Paper](https://ai.meta.com/research/publications/a-foundation-model-of-vision-audition-and-language-for-in-silico-neuroscience/) ▶️ [Demo](https://aidemos.atmeta.com/tribev2/) | 🤗 [Weights](https://huggingface.co/facebook/tribev2)
> 
> TRIBE v2 is a deep multimodal brain encoding model that predicts fMRI brain responses to naturalistic stimuli (video, audio, text). It combines state-of-the-art feature extractors — [**LLaMA 3.2**](https://huggingface.co/meta-llama/Llama-3.2-3B) (text), [**V-JEPA2**](https://huggingface.co/facebook/vjepa2-vitg-fpc64-256) (video), and [**Wav2Vec-BERT**](https://huggingface.co/facebook/w2v-bert-2.0) (audio) — into a unified Transformer architecture that maps multimodal representations onto the cortical surface.
> 
> ## Quick start
> 
> Load a pretrained model from HuggingFace and predict brain responses to a video:
> 
> ```python
> from tribev2 import TribeModel
> 
> model = TribeModel.from_pretrained("facebook/tribev2", cache_folder="./cache")
> 
> df = model.get_events_dataframe(video_path="path/to/video.mp4")
> preds, segments = model.predict(events=df)
> print(preds.shape)  # (n_timesteps, n_vertices)
> ```
> 
> Predictions are for the "average" subject (see paper for details) and live on the **fsaverage5** cortical mesh (~20k vertices). You can also pass `text_path` or `audio_path` to `model.get_events_dataframe` — text is automatically converted to speech and transcribed to obtain word-level timings.
> 
> For a full walkthrough with brain visualizations, see the [Colab demo notebook](https://colab.research.google.com/github/facebookresearch/tribev2/blob/main/tribe_demo.ipynb).
> 
> ## Installation
> 
> **Basic** (inference only):
> ```bash
> pip install -e .
> ```
> 
> **With brain visualization**:
> ```bash
> pip install -e ".[plotting]"
> ```
> 
> **With training dependencies** (PyTorch Lightning, W&B, etc.):
> ```bash
> pip install -e ".[training]"
> ```
> 
> ## Training a model from scratch
> 
> ### 1. Set environment variables
> 
> Configure data/output paths and Slurm partition (or edit `tribev2/grids/defaults.py` directly):
> 
> ```bash
> export DATAPATH="/path/to/studies"
> export SAVEPATH="/path/to/output"
> export SLURM_PARTITION="your_partition"
> ```
> 
> ### 2. Authenticate with HuggingFace
> 
> The text encoder requires access to the gated [LLaMA 3.2-3B](https://huggingface.co/meta-llama/Llama-3.2-3B) model:
> 
> ```bash
> huggingface-cli login
> ```
> 
> Create a `read` [access token](https://huggingface.co/settings/tokens) and paste it when prompted.
> 
> ### 3. Run training
> 
> **Local test run:**
> ```bash
> python -m tribev2.grids.test_run
> ```
> 
> **Grid search on Slurm:**
> ```bash
> python -m tribev2.grids.run_cortical
> python -m tribev2.grids.run_subcortical
> ```
> 
> ## Project structure
> 
> ```
> tribev2/
> ├── main.py              # Experiment pipeline: Data, TribeExperiment
> ├── model.py             # FmriEncoder: Transformer-based multimodal→fMRI model
> ├── pl_module.py         # PyTorch Lightning training module
> ├── demo_utils.py        # TribeModel and helpers for inference from text/audio/video
> ├── eventstransforms.py  # Custom event transforms (word extraction, chunking, …)
> ├── utils.py             # Multi-study loading, splitting, subject weighting
> ├── utils_fmri.py        # Surface projection (MNI / fsaverage) and ROI analysis
> ├── grids/
> │   ├── defaults.py      # Full default experiment configuration
> │   └── test_run.py      # Quick local test entry point
> ├── plotting/            # Brain visualization (PyVista & Nilearn backends)
> └── studies/             # Dataset definitions (Algonauts2025, Lahner2024, …)
> ```
> 
> ## Contributing to open science
> 
> If you use this software, please share your results with the broader research community using the following citation:
> 
> ```bibtex
> @article{dAscoli2026TribeV2,
>   title={A foundation model of vision, audition, and language for in-silico neuroscience},
>   author={d'Ascoli, St{\'e}phane and Rapin, J{\'e}r{\'e}my and Benchetrit, Yohann and Brookes, Teon and Begany, Katelyn and Raugel, Jos{\'e}phine and Banville, Hubert and King, Jean-R{\'e}mi},
>   year={2026}
> }
> ```
> 
> ## License
> 
> This project is licensed under CC-BY-NC-4.0. See [LICENSE](LICENSE) for details.
> 
> ## Contributing
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md) for how to get involved.

## 延伸閱讀

相關概念：[[多模態]] · [[神經科學]] · [[深度學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/facebookresearch/tribev2)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態學習" AND file.name != "facebookresearch--tribev2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "facebookresearch--tribev2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Jupyter Notebook" AND file.name != "facebookresearch--tribev2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "facebookresearch--tribev2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","神經科學","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "facebookresearch--tribev2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/facebookresearch--tribev2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "facebookresearch--tribev2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "facebookresearch" AND file.name != "facebookresearch--tribev2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--tribev2");
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
> const me = dv.page("Repos/facebookresearch--tribev2");
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
> const me = dv.page("Repos/facebookresearch--tribev2");
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
> const me = dv.page("Repos/facebookresearch--tribev2");
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
> const me = dv.page("Repos/facebookresearch--tribev2");
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

> **2026-03-30** — 首次收錄
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

- [[2026-03-30|2026-03-30]] — 首次收錄，900 stars
