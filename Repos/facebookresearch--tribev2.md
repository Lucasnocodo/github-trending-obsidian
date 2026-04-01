---
repo: facebookresearch/tribev2
url: https://github.com/facebookresearch/tribev2
owner: facebookresearch
owner_type: Organization
language: Jupyter Notebook
license: NOASSERTION
description: "This repository contains the code to train and evaluate TRIBE v2, a multimodal model for brain response prediction"
homepage: ""
stars: 1164
stars_per_day: 166
forks: 246
open_issues: 13
created: 2026-03-24
pushed_at: 2026-03-30
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
use_case: "預測大腦反應的多模態模型，支援視覺、聽覺和語言數據。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-07"
contributor_count: 2
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 2291
readme_length: 3996
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-30"
star_history: "2026-03-30:900,2026-03-30:901,2026-03-31:1048,2026-03-31:1049,2026-04-01:1164"
tags:
  - github
  - "category/ai_ml"
  - "lang/jupyter notebook"
  - org
aliases:
  - "tribev2"
  - "facebookresearch/tribev2"
  - "預測大腦反應的多模態模型，支援視覺、聽覺和語言數據。"
---

# tribev2

**1.2k** stars · **166** stars/天 · 建立 7 天前 · Jupyter Notebook · NOASSERTION

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
> 預測大腦反應的多模態模型，支援視覺、聽覺和語言數據。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (166 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要進行多模態大腦反應預測的神經科學研究團隊。
> **一句話重點** TRIBE v2 的強大在於其能夠整合多模態數據進行大腦反應預測，這在神經科學研究中具有廣泛的應用潛力。

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
> **結論** 花 10 小時學習、15 小時整合，得到高準確度的多模態預測，值得考慮。

> [!abstract] 核心創新
> TRIBE v2 是一個深度多模態模型，能夠同時處理視覺、聽覺和語言數據以預測大腦反應。

## 專案簡介

TRIBE v2 是一個深度多模態大腦編碼模型，專門用來預測 fMRI 大腦反應，對自然刺激（如視頻、音頻和文本）進行建模。該模型使用統一的 Transformer 架構，將多模態表示映射到皮層表面，並能夠處理來自不同模態的輸入。用戶可以通過 `model.get_events_dataframe` 方法將視頻路徑傳入，並使用 `model.predict` 來獲得對應的預測結果，這些預測是針對「平均」受試者的，並且會考慮到血流動力學的延遲。這個工具的賣點在於其能夠整合多種模態的數據，並提供精確的腦部反應預測。技術上，TRIBE v2 結合了最先進的文本、音頻和視頻模型，並使用 PyTorch Lightning 進行訓練，這使得它在處理大規模數據時具備良好的擴展性。

與其他工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，TRIBE v2 的獨特之處在於其專注於多模態數據的整合，並且提供了針對大腦反應的專業預測，而不是僅僅處理單一模態的數據。該模型的效能在於其能夠處理約 20,000 個頂點的皮層網格，並且支持多種輸入格式，這使得它在神經科學研究中具有廣泛的應用潛力。使用者可能會遇到的問題包括數據預處理的複雜性，這在熱門問題中也有提到。整體而言，TRIBE v2 是一個具有潛力的工具，適合需要進行大腦反應預測的研究團隊，尤其是在多模態數據分析方面。

**技術棧**：`Python 3.8` · `PyTorch` · `PyTorch Lightning`

## 重點功能

- 多模態輸入支持 — 同時處理視頻、音頻和文本數據，提供更全面的預測。
- 基於 Transformer 的架構 — 利用先進的深度學習技術來提高預測準確性。
- fMRI 預測 — 專門針對大腦反應進行建模，支持約 20,000 個皮層頂點的預測。
- 自動語音轉換 — 將文本自動轉換為語音，並進行時間標記，方便分析。
- 可視化支持 — 提供腦部反應的可視化工具，幫助用戶更好地理解預測結果。

## 快速開始

1. 安裝基本依賴
```bash
pip install -e .
```
2. 加載預訓練模型並進行預測
```bash
from tribev2 import TribeModel
model = TribeModel.from_pretrained('facebook/tribev2', cache_folder='./cache')
df = model.get_events_dataframe(video_path='path/to/video.mp4')
preds, segments = model.predict(events=df)
```
3. 進行腦部可視化
```bash
pip install -e '.[plotting]'
```

## 程式碼範例

```jupyter notebook
{
  "前置條件": "已安裝 tribev2 並加載預訓練模型。",
  "指令": "df = model.get_events_dataframe(video_path='path/to/video.mp4')\npreds, segments = model.predict(events=df)\nprint(preds.shape)  # (n_timesteps, n_vertices)",
  "預期輸出": "(n_timesteps, n_vertices) 表示預測的時間步和皮層頂點數量。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1164 stars（166/天），forks 246（21.1%），顯示出強烈的社群興趣。該專案由 Facebook Research 團隊開發，這是一個在 AI 和神經科學領域有豐富經驗的團隊。TRIBE v2 解決了以往單一模態模型無法有效預測大腦反應的問題，提供了一個整合視覺、聽覺和語言的解決方案。近期的學術發表和技術討論也引起了廣泛關注，進一步推動了其流行。這個工具的出現正好契合了對多模態學習的需求，並且在技術上具備了相對成熟的架構，讓它在市場上具備競爭力。

## 適合誰使用

**目標受眾**：需要進行多模態大腦反應預測的神經科學研究團隊。

> [!example] 使用場景
> - 神經科學研究人員用它來預測大腦對於視頻刺激的反應，因為這可以幫助他們理解不同感官刺激如何影響大腦活動。
> - 機器學習工程師用它來開發多模態學習模型，因為它提供了強大的預測能力和多樣的數據輸入選項。
> - 心理學家用它來分析語言對大腦反應的影響，因為它能夠將文本轉換為語音並進行時間標記，提供更精確的數據。

## 架構分析

TRIBE v2 採用統一的 Transformer 架構，這使得它能夠有效地整合來自不同模態的數據。資料流從用戶輸入的視頻、音頻或文本開始，經過模型的多層處理，最終輸出預測的 fMRI 數據。選擇 Transformer 架構的原因在於其在處理序列數據方面的優越性，能夠捕捉長期依賴關係。

這種設計的代價是需要較高的計算資源，特別是在訓練階段。擴展性方面，該模型能夠處理大規模的數據集，但在資源需求上可能會成為瓶頸，特別是在沒有高效能 GPU 的情況下。整體而言，這種架構設計使得 TRIBE v2 在多模態學習上具備了強大的能力，但也要求使用者具備相應的計算資源來支持其運行。

## 技術深入分析

TRIBE v2 的核心技術機制是基於 Transformer 的多模態學習，這使得它能夠有效地處理來自視頻、音頻和文本的數據。使用的資料結構和演算法使得模型能夠捕捉到不同模態之間的關聯性，並將其映射到大腦的皮層表面。效能方面，該模型能夠處理約 20,000 個皮層頂點的預測，並且預測的時間步長度與輸入數據的長度相對應。設計取捨方面，選擇使用 PyTorch Lightning 來進行訓練，這樣可以簡化訓練流程，但也可能增加對於 PyTorch 環境的依賴。技術風險方面，隨著數據集的擴大，模型的訓練時間和資源需求會顯著增加，這可能會導致在資源有限的情況下無法有效運行。整合方面，該模型與主流的深度學習框架（如 PyTorch）有良好的相容性，並且能夠方便地集成到現有的 CI/CD pipeline 中。整體而言，TRIBE v2 在多模態學習的應用上展現了強大的潛力，但使用者需要考慮到其資源需求和技術依賴。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含範例程式碼。安裝過程相對順暢，但對於數據預處理的要求可能會讓新手感到困惑。文件中沒有多語言支持，主要是英文。整體而言，花 30 分鐘能夠順利跑起來，但需要對數據處理有一定了解。

## 優缺點分析

> [!success] 優點
> - 能夠整合多種模態數據，提供更全面的預測。
> - 基於先進的深度學習技術，預測準確性高。
> - 支持腦部可視化，幫助用戶理解預測結果。

> [!danger] 缺點
> - 需要大量計算資源，對硬體要求高。
> - 數據預處理複雜，可能需要額外時間。
> - 目前不支持 Windows 系統的完整功能。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要大量的計算資源進行訓練，建議使用 GPU。
> - 對於數據預處理的要求較高，可能需要額外的時間來準備數據。
> - 目前不支持 Windows 系統的完整功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和傳輸，而 TRIBE v2 專注於大腦反應預測，兩者的應用場景完全不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據分析和可視化，TRIBE v2 則是針對多模態數據進行深度學習預測，功能上有明顯區別。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和傳輸，而 TRIBE v2 專注於大腦反應預測，兩者的應用場景完全不同。 | 如果你的需求是數據的高效同步而非預測，則應選擇 AlpinDale/parsync。 | low，因為兩者的功能和應用場景差異較大。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據分析和可視化，TRIBE v2 則是針對多模態數據進行深度學習預測，功能上有明顯區別。 | 如果你的重點是數據分析而非預測，則 BigBodyCobain/Shadowbroker 會更合適。 | medium，因為需要重新調整數據處理流程以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tribev2** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和傳輸，而 TRIBE v2 專注於大腦反應預測，兩者的應用場景完全不同。 | 主要用於數據分析和可視化，TRIBE v2 則是針對多模態數據進行深度學習預測，功能上有明顯區別。 |
> | 遷移成本 | - | low，因為兩者的功能和應用場景差異較大。 | medium，因為需要重新調整數據處理流程以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你的需求是數據的高效同步而非預測，則應選擇 AlpinD | 如果你的重點是數據分析而非預測，則 BigBodyCobai |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人研究或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 數據預處理的要求較高，初學者可能會感到困惑。
  - 解法：參考 Colab demo 進行數據準備。
- **[HIGH]** 在沒有高效能 GPU 的情況下，訓練時間會非常長。
  - 解法：考慮使用雲端計算資源。
- **[HIGH]** 目前不支持 Windows 系統的完整功能，可能導致兼容性問題。
  - 解法：使用 Linux 或 WSL 進行開發。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型神經科學研究團隊進行多模態數據分析 | 非常適合 | 該模型專注於多模態數據的預測，能提供準確的結果。 |
| 小型研究團隊進行初步實驗 | 適合 | 雖然資源需求高，但對於小型實驗仍然可行。 |
| 個人開發者進行多模態學習實驗 | 普通 | 需要較高的計算資源，對於個人開發者可能不夠友好。 |
| 需要快速原型開發的商業團隊 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習、15 小時整合，得到高準確度的多模態預測，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要處理的是數據預測，不存取敏感資料。依賴鏈的信任程度較高，沒有已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

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
| Forks | 246 |
| Open Issues | 13 |
| Issue 解決率 | 13% (2 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-24 |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/facebookresearch/tribev2) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Jupyter Notebook" : 87
>     "Python" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sdascoli](https://github.com/sdascoli) | 4 |
> | [@vgarg1603](https://github.com/vgarg1603) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有持續的更新和問題回應。
**連結**：[文件](https://github.com/facebookresearch/tribev2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-30）
> **活躍天數** 3 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/facebookresearch/tribev2/issues/17) | Is a commercial license available for TRIBEv2? I've emailed  | 0 | 0 |
> | [#15](https://github.com/facebookresearch/tribev2/issues/15) | Details regarding data preprocessing for reproduction | 0 | 0 |

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
> TRIBE v2 is a deep multimodal brain encoding model that predicts fMRI brain responses to naturalistic stimuli (video, audio, text). It combines state-of-the-art text, audio and video models into a unified Transformer architecture that maps multimodal representations onto the cortical surface.
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
> Predictions are for the "average" subject (see paper for details) and live on the **fsaverage5** cortical mesh (~20k vertices).
> They are offset by 5 seconds in the past, in order to compensate for the hemodynamic lag.
> 
> You can also pass `text_path` or `audio_path` to `model.get_events_dataframe` — text is automatically converted to speech and transcribed to obtain word-level timings.
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
> ```
> 
> ### 2. Run training
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

相關概念：[[多模態]] · [[深度學習]] · [[神經科學]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

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
> const concepts = ["多模態","深度學習","神經科學"];
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

- [[2026-03-31|2026-03-31]] — 再次上榜，1.0k stars
- [[2026-03-30|2026-03-30]] — 首次收錄，900 stars
