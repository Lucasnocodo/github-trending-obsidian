---
repo: facebookresearch/tribev2
url: https://github.com/facebookresearch/tribev2
owner: facebookresearch
owner_type: Organization
language: Jupyter Notebook
license: NOASSERTION
description: "This repository contains the code to train and evaluate TRIBE v2, a multimodal model for brain response prediction"
homepage: ""
stars: 1631
stars_per_day: 109
forks: 373
open_issues: 25
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
use_case: "預測大腦反應的多模態模型，結合視覺、聽覺和語言。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-07"
contributor_count: 2
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 2291
readme_length: 3996
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-30"
star_history: "2026-03-30:900,2026-03-30:901,2026-03-31:1048,2026-03-31:1049,2026-04-01:1164,2026-04-02:1250,2026-04-03:1324,2026-04-04:1411,2026-04-05:1458,2026-04-06:1518,2026-04-07:1550,2026-04-08:1591,2026-04-09:1631"
tags:
  - github
  - "category/ai_ml"
  - "lang/jupyter notebook"
  - org
aliases:
  - "tribev2"
  - "facebookresearch/tribev2"
  - "預測大腦反應的多模態模型，結合視覺、聽覺和語言。"
---

# tribev2

**1.6k** stars · **109** stars/天 · 建立 15 天前 · Jupyter Notebook · NOASSERTION

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
> 預測大腦反應的多模態模型，結合視覺、聽覺和語言。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (109 stars/day)
> **授權** NOASSERTION · **維護** Moderate (最後推送 9 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望在神經科學領域進行多模態數據分析的研究者和開發者。
> **一句話重點** TRIBE v2 將多模態學習推向新的高度，專注於大腦反應的預測，為神經科學研究提供了強大的工具。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到強大的多模態預測能力，值得投入。

> [!abstract] 核心創新
> TRIBE v2 是一個結合視覺、聽覺和語言的深度多模態大腦編碼模型。

## 專案簡介

TRIBE v2 是一個深度多模態大腦編碼模型，專門用來預測 fMRI 大腦對自然刺激（如視頻、音頻和文本）的反應。其核心機制是將多模態表示映射到皮層表面，使用統一的 Transformer 架構。用戶可以透過簡單的 Python 指令來載入預訓練模型，並使用 `model.predict()` 方法來獲得大腦反應的預測結果，這些預測結果是針對「平均」受試者的，並且會考慮到血流動力學的延遲。這個模型的賣點在於其能夠有效整合多種感官輸入，並提供對大腦活動的深入理解。技術上，TRIBE v2 使用了 PyTorch Lightning 進行訓練，並依賴於 Hugging Face 的模型庫來載入預訓練權重，這樣的選擇使得模型的擴展性和可重用性大大提高。

與其他模型相比，如 OpenAI 的 CLIP，TRIBE v2 更加專注於生物醫學領域的應用，能夠處理複雜的多模態數據，並提供具體的 fMRI 預測。使用者在實際應用中可能會遇到的挑戰包括需要高效的計算資源來處理大規模數據，以及對於模型的調整和優化的需求。這個專案目前處於活躍開發階段，社群反應良好，並且有持續的更新和支持。對於希望在神經科學領域進行深入研究的團隊來說，TRIBE v2 是一個值得考慮的工具。

**技術棧**：`Python` · `PyTorch Lightning`

## 重點功能

- 多模態預測 — 同時處理視頻、音頻和文本輸入，提供全面的 fMRI 預測。
- 統一的 Transformer 架構 — 整合各種感官數據，提升模型的準確性和可擴展性。
- 預訓練模型支持 — 可從 Hugging Face 載入預訓練權重，快速開始實驗。
- 靈活的數據輸入 — 支援視頻、音頻和文本的自動轉換和處理。
- 可視化支持 — 提供腦部視覺化功能，幫助用戶理解預測結果。

## 快速開始

1. 安裝基本依賴
```bash
pip install -e .
```
2. 載入預訓練模型並進行預測
```bash
from tribev2 import TribeModel
model = TribeModel.from_pretrained('facebook/tribev2', cache_folder='./cache')
df = model.get_events_dataframe(video_path='path/to/video.mp4')
preds, segments = model.predict(events=df)
```
3. 查看預測結果形狀
```bash
print(preds.shape)  # (n_timesteps, n_vertices)
```

## 程式碼範例

```jupyter notebook
# 前置條件
from tribev2 import TribeModel

model = TribeModel.from_pretrained('facebook/tribev2', cache_folder='./cache')
df = model.get_events_dataframe(video_path='path/to/video.mp4')
preds, segments = model.predict(events=df)
print(preds.shape)  # (n_timesteps, n_vertices)
# 預期輸出
(n_timesteps, n_vertices) 代表時間步數和頂點數量。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 1631 stars（109/天），forks 373（22.9%），這顯示出強烈的社群興趣。這個專案由 Facebook Research 團隊開發，該團隊在多模態學習和神經科學領域有著豐富的經驗。TRIBE v2 解決了傳統模型無法有效處理多模態數據的痛點，並且提供了一個統一的框架來預測大腦反應。近期的推廣活動和相關研究的發表也提升了其曝光率。這個工具的出現正好符合了對於多模態學習需求的增長，並且在學術界和產業界都引起了廣泛的關注。forks/stars 比率高達 22.9%，顯示出許多人正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在神經科學領域進行多模態數據分析的研究者和開發者。

> [!example] 使用場景
> - 神經科學研究者用它來分析大腦對不同媒體刺激的反應，因為它能夠提供精確的 fMRI 預測，幫助理解大腦功能。
> - 數據科學家用它來開發多模態學習模型，因為其統一的架構能夠簡化模型的訓練和評估流程。
> - 醫療研究人員用它來探索大腦疾病的生物標記，因為其能夠從多種感官輸入中提取有用的神經數據。

## 架構分析

TRIBE v2 採用的是一個基於 Transformer 的多模態架構，這使得模型能夠同時處理來自不同感官的數據。數據流從用戶輸入的視頻、音頻和文本開始，經過 `get_events_dataframe` 方法進行處理，然後進入模型進行預測。這樣的設計使得模型能夠靈活應對各種輸入格式，並且能夠在同一個框架內進行多模態學習。選擇 Transformer 架構的好處在於其強大的上下文理解能力，但代價是需要較高的計算資源來進行訓練和推理。隨著數據量的增加，模型的計算需求也會隨之上升，這可能成為擴展性的一個瓶頸。

## 技術深入分析

TRIBE v2 的核心技術機制是基於 Transformer 的多模態編碼，這使得模型能夠有效整合來自視頻、音頻和文本的數據。這種架構的設計模式使得模型能夠捕捉到不同模態之間的關聯性，從而提高預測的準確性。效能方面，模型能夠處理大規模的 fMRI 數據，但對於計算資源的需求較高，尤其是在訓練階段。設計上選擇 PyTorch Lightning 進行訓練，這不僅提高了訓練效率，也使得模型的可擴展性更強。這一選擇的代價是需要額外的學習成本來熟悉 PyTorch Lightning 的使用。技術風險方面，隨著數據量的增加，模型的計算需求可能會成為一個瓶頸，特別是在進行大規模的網格搜索時。整合分析上，TRIBE v2 與主流的深度學習框架（如 TensorFlow 和 Keras）相比，提供了更靈活的多模態處理能力，但在 CI/CD pipeline 的整合上可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的範例，安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解多模態數據的處理方式。整體上，花 30 分鐘能夠完成基本的安裝和測試。

## 優缺點分析

> [!success] 優點
> - 能夠同時處理多種感官數據，提供更全面的預測結果。
> - 使用預訓練模型可大幅減少開發時間。
> - 提供腦部視覺化功能，幫助用戶理解預測結果。

> [!danger] 缺點
> - 需要高效的計算資源，對於小型團隊可能造成負擔。
> - 對於非專業用戶，模型的調整和優化可能有一定難度。
> - 目前僅支援特定格式的輸入數據，可能需要額外的轉換步驟。

> [!warning] 注意事項
> - 需要高效的計算資源來處理大規模 fMRI 數據。
> - 對於非專業用戶，模型的調整和優化可能需要一定的技術背景。
> - 目前僅支援特定格式的輸入數據，可能需要額外的轉換步驟。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於單一模態的數據處理，而 TRIBE v2 提供多模態的整合，能夠同時處理視頻、音頻和文本數據。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要針對語音和語言處理，TRIBE v2 則擴展到視覺和聽覺，適用於更廣泛的神經科學應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於數據同步，而 TRIBE v2 專注於多模態學習和預測，兩者的應用場景不同。 | 如果你的需求是數據同步而非多模態預測，則應選擇 Parasync。 | medium，因為兩者的應用場景和技術架構差異較大。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要針對語音和語言處理，而 TRIBE v2 則擴展到視覺和聽覺，適用於更廣泛的神經科學應用。 | 如果你的專案主要集中在語音處理上，NemoClaw 可能會是更好的選擇。 | low，因為兩者都基於深度學習框架，轉移相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tribev2** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Parsync 專注於數據同步，而 TRIBE v2 專注於多模態學習和預測，兩者的應用場景不同。 | NemoClaw 主要針對語音和語言處理，而 TRIBE v2 則擴展到視覺和聽覺，適用於更廣泛的神經科學應用。 |
> | 遷移成本 | - | medium，因為兩者的應用場景和技術架構差異較大。 | low，因為兩者都基於深度學習框架，轉移相對容易。 |
> | 適用場景 | 主要場景 | 如果你的需求是數據同步而非多模態預測，則應選擇 Parasy | 如果你的專案主要集中在語音處理上，NemoClaw 可能會是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合學術研究和實驗性專案，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在處理大型視頻數據時，模型可能會遇到記憶體不足的問題。
  - 解法：減少批次大小或使用更強大的硬體。
- [MEDIUM] 模型對於特定格式的輸入數據要求嚴格，可能導致錯誤。
  - 解法：確保數據格式符合要求，必要時進行轉換。
- [MEDIUM] 在進行網格搜索時，計算需求會顯著增加，可能影響訓練效率。
  - 解法：考慮使用更高效的計算資源或縮小搜索範圍。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型神經科學研究團隊 | 非常適合 | 能夠處理多模態數據並提供準確的預測結果。 |
| 小型研究團隊 | 普通 | 雖然功能強大，但對計算資源的需求可能超出小型團隊的能力。 |
| 教育機構進行神經科學教學 | 適合 | 提供了多模態數據的實際應用範例，適合教學使用。 |
| 個人開發者進行小型專案 | 不適合 | 對計算資源的需求和技術門檻較高，個人開發者可能難以應對。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到強大的多模態預測能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TRIBE v2 最常與 PyTorch 和 Hugging Face 的生態系統搭配使用，特別是在模型訓練和預測階段。用戶可以在 PyTorch 環境中快速載入預訓練模型，並使用 Hugging Face 的工具進行模型管理。在一個使用 PyTorch 的專案中，你可以用 TRIBE v2 來預測大腦反應，具體做法是載入模型並使用 `predict` 方法。與主流的深度學習框架相容性良好，但在 CI/CD 整合上可能需要額外的適配工作，特別是在處理多模態數據時。

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
| Forks | 373 |
| Open Issues | 25 |
| Issue 解決率 | 11% (3 closed) |
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

**社群活躍度**：社群活躍，定期有更新和討論。
**連結**：[文件](https://colab.research.google.com/github/facebookresearch/tribev2/blob/main/tribe_demo.ipynb)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-30）
> **活躍天數** 3 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#23](https://github.com/facebookresearch/tribev2/issues/23) | Release subcortical prediction checkpoint (MaskProjector wit | 1 | 0 |

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

相關概念：[[多模態]] · [[神經科學]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]]

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

- [[2026-03-31|2026-03-31]] — 再次上榜，1.0k stars
- [[2026-03-30|2026-03-30]] — 首次收錄，900 stars
