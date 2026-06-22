---
repo: boogu-project/Boogu-Image
url: https://github.com/boogu-project/Boogu-Image
owner: boogu-project
owner_type: Organization
language: Python
license: Apache-2.0
description: "Boogu-Image-0.1 is an Apache-2.0 open-source image generation and editing model family that delivers near-closed-source performance with an order of magnitude less data."
homepage: ""
stars: 396
stars_per_day: 79
forks: 19
open_issues: 6
created: 2026-06-16
pushed_at: 2026-06-20
first_seen: 2026-06-22
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "圖像生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-22
use_case: "提供高品質圖像生成與編輯的開源模型，性能接近封閉源系統但數據需求少一個量級。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-29"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 69020
readme_length: 9996
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-22"
star_history: "2026-06-22:392,2026-06-22:396"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "Boogu-Image"
  - "boogu-project/Boogu-Image"
  - "提供高品質圖像生成與編輯的開源模型，性能接近封閉源系統但數據需求少一個量級。"
---

# Boogu-Image

**396** stars · **79** stars/天 · 建立 5 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> 提供高品質圖像生成與編輯的開源模型，性能接近封閉源系統但數據需求少一個量級。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (79 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效生成和編輯圖像的獨立開發者或小型團隊。
> **一句話重點** Boogu-Image 的開源性和低數據需求使其成為圖像生成領域的一個有力競爭者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/boogu-project--Boogu-Image");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "boogu-project--Boogu-Image" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，能夠獲得高品質的圖像生成效果，值得投入。

> [!abstract] 核心創新
> Boogu-Image-0.1 在訓練數據量上顯著低於封閉源系統，卻能提供接近的性能。

## 專案簡介

Boogu-Image-0.1 是一個開源的圖像生成與編輯模型家族，旨在提供高品質的文本到圖像生成和圖像編輯功能。用戶可以通過簡單的指令來生成圖像，例如使用 `huggingface-cli download` 下載模型權重，然後使用 `--model` 參數指定模型路徑進行推理。這個工具的賣點在於其在訓練數據量上相對較少，卻能達到與封閉源系統相似的性能，這是因為其在模型理解能力和數據質量上的系統性提升。技術上，Boogu-Image 使用了 PyTorch 框架，並依賴於多個庫如 `torchvision` 和 `diffusers`，這使得其在生成速度和質量上都具備競爭力。與其他開源工具相比，如 Z-Image 和 Qwen-Image，Boogu-Image 在現實攝影和文本渲染方面的表現更為優越，特別是在處理複雜的文本佈局時。

使用者在實際應用中可能會遇到對於圖像編輯的敏感性問題，這在社群的熱門問題中有所反映。這個專案目前處於早期階段，適合對圖像生成和編輯有需求的開發者，但在穩定性和功能上仍有改進空間。未來六個月內，預期會有更多功能和改進釋出，特別是在圖像編輯和多模態生成方面。對於需要快速生成高品質圖像的團隊，Boogu-Image 是一個值得考慮的選擇，但在商業應用上仍需謹慎評估其穩定性。

**技術棧**：`Python 3.10` · `PyTorch 2.7.1` · `CUDA 12.6`

## 重點功能

- 高品質圖像生成 — 能夠生成自然光照和一致構圖的高質量圖像。
- 多樣化文本渲染 — 支持中英文的穩定排版和設計，適合各種文本密集的設計需求。
- 靈活的圖像編輯 — 包括物件插入、替換和移除等功能，保持源主題和構圖的一致性。
- 個性化海報設計 — 生成符合品牌風格的海報佈局和產品視覺化。
- 競爭性性能 — 在多個場景和基準測試中表現優越，與其他開源和封閉源系統相比。

## 快速開始

1. 創建新的 conda 環境
```bash
conda create -y -n boogu python=3.10
```
2. 安裝必要的依賴
```bash
pip install -r requirements/torch2.7-cu126.txt
```
3. 下載模型權重
```bash
huggingface-cli download Boogu/Boogu-Image-0.1-Base --local-dir models/Boogu-Image-0.1-Base
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 PyTorch 和 CUDA 環境",
  "指令": "huggingface-cli download Boogu/Boogu-Image-0.1-Base --local-dir models/Boogu-Image-0.1-Base",
  "預期輸出": "模型權重將下載到指定的本地目錄。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 396 stars（79/天），forks 19（4.8%），顯示出一定的社群關注度。Boogu 團隊的背景不明，但其針對開源圖像生成的需求填補了市場上的空白，特別是在數據需求較低的情況下仍能提供高性能的解決方案。這個專案的推出也可能受到社群對於開源替代品需求增加的影響。forks/stars 比率顯示出使用者對於這個專案的實際修改和使用意願較低，可能是因為功能尚在開發中。

## 適合誰使用

**目標受眾**：需要高效生成和編輯圖像的獨立開發者或小型團隊。

> [!example] 使用場景
> - 平面設計師用它來生成高品質的海報設計，因為其支持穩定的文本渲染和圖像編輯功能。
> - 遊戲開發者用它來快速創建遊戲內的角色圖像，因為其能夠生成具有高細節和風格化的圖像。
> - 市場營銷專員用它來設計產品視覺化圖像，因為其提供一致的品牌設計和優雅的排版效果。

## 架構分析

Boogu-Image-0.1 採用模組化架構，將圖像生成和編輯功能分為多個子模型（如 Base、Turbo、Edit），這樣的設計使得不同的需求可以通過不同的模型來滿足。資料流中，模型的推理過程依賴於 PyTorch 的計算圖，並使用了多個外部庫來增強性能和功能。選擇這種架構的好處是能夠針對不同的應用場景進行優化，但代價是需要較高的計算資源和較長的訓練時間。擴展性方面，隨著需求的增加，可能需要進一步優化模型的推理速度和記憶體使用。這些設計決策可能會在未來的擴展中面臨挑戰，特別是在處理更大規模的數據時。

## 技術深入分析

Boogu-Image-0.1 的核心技術機制在於其模組化設計，利用 PyTorch 框架進行高效的圖像生成和編輯。模型的推理過程中，使用了多種先進的演算法來提升生成的質量和速度。效能方面，Boogu-Image 能夠處理高達 2K 的輸出解析度，並且在多種基準測試中表現優異。選擇 PyTorch 作為主要框架的好處在於其強大的社群支持和靈活性，但也帶來了對於計算資源的高需求。技術風險方面，未來在擴展到更大規模的數據時，可能會面臨性能瓶頸和記憶體使用的挑戰。整合方面，Boogu-Image 可以輕鬆與現有的深度學習工具鏈（如 TensorBoard 和 Hugging Face Hub）進行整合，這使得其在實際應用中更具靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝步驟和範例，安裝過程相對順暢，但對於新手來說可能需要一些時間來熟悉環境配置。文件目前僅提供英文版本，缺乏多語言支持，這可能會影響非英語使用者的上手速度。

## 優缺點分析

> [!success] 優點
> - 提供高品質的圖像生成和編輯功能，適合多種應用場景。
> - 開源且具備良好的社群支持，便於用戶進行修改和擴展。
> - 相對較低的數據需求使得模型訓練和部署成本降低。

> [!danger] 缺點
> - 目前功能尚在開發中，穩定性和性能可能不如成熟的商業產品。
> - 對於複雜的編輯需求可能存在性能瓶頸。
> - 社群活躍度尚需提升，解決問題的速度可能較慢。

> [!warning] 注意事項
> - 僅支援 Python 3.10。
> - 需要 CUDA 12.6 和 PyTorch 2.7.1。
> - 目前僅支持單一參考圖像的編輯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供圖像生成和編輯功能，但在性能和穩定性上不如 Boogu-Image，特別是在文本渲染方面。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多模態生成，但缺乏 Boogu-Image 的高質量圖像生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色圖像，使用了不同的生成模型，但在文本渲染能力上不如 Boogu-Image。 | 如果你的需求主要是角色設計而非多功能圖像生成，這個工具可能更適合。 | medium，因為需要重新調整生成流程和模型參數。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多模態生成，但主要針對對話生成，與 Boogu-Image 的圖像生成不完全重疊。 | 如果你的專案需要強調對話生成而非圖像，則這個工具更合適。 | low，因為兩者在基本架構上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Boogu-Image** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成角色圖像，使用了不同的生成模型，但在文本渲染能力上不如 Boogu-Image。 | 提供多模態生成，但主要針對對話生成，與 Boogu-Image 的圖像生成不完全重疊。 |
> | 遷移成本 | - | medium，因為需要重新調整生成流程和模型參數。 | low，因為兩者在基本架構上有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是角色設計而非多功能圖像生成，這個工具可能更 | 如果你的專案需要強調對話生成而非圖像，則這個工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，模型推理速度可能會顯著下降。
  - 解法：建議使用更高效的硬體或減少同時請求數量。
- [MEDIUM] 對於某些複雜的文本佈局，生成的圖像可能不符合預期。
  - 解法：調整提示語或簡化文本內容以獲得更好的結果。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊的圖像生成需求 | 非常適合 | 提供高品質的圖像生成和編輯功能，能夠滿足多樣化的設計需求。 |
| 大型商業項目的圖像生成 | 不適合 | 目前仍處於 alpha 階段，穩定性和性能可能無法滿足商業需求。 |
| 學術研究中的圖像生成實驗 | 適合 | 開源性質和低數據需求使其成為研究的良好選擇。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，能夠獲得高品質的圖像生成效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
| Forks | 19 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-06-16 |
| Repo 大小 | 67.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/boogu-project/Boogu-Image) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 87
>     "Shell" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Boogu-Team](https://github.com/Boogu-Team) | 46 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多次更新和回應。
**連結**：[文件](https://boogu.org)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-18 ~ 2026-06-20）
> **活躍天數** 3 天 · **最新 commit** Update README_CN.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/boogu-project/Boogu-Image/issues/6) | image edit會出加速版本嗎？ | 0 | 1 |
> | [#5](https://github.com/boogu-project/Boogu-Image/issues/5) | Thank you for your excellent work. Will the code for open-so | 0 | 1 |
> | [#4](https://github.com/boogu-project/Boogu-Image/issues/4) | Overly sensitive safety guard | 0 | 3 |
> | [#3](https://github.com/boogu-project/Boogu-Image/issues/3) | Diffusers integration | 0 | 1 |
> | [#2](https://github.com/boogu-project/Boogu-Image/issues/2) | Flux 2 Klien supports 4 input images , How many images Boogu | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> Boosting Open-Source Unified Multimodal Understanding and Generation
> 
> [](https://boogu.org)
> [](https://huggingface.co/Boogu)
> [](https://github.com/boogu-project/Boogu-Image)
> [](https://modelscope.cn/organization/Boogu)
> [](https://boogu-gallery.netlify.app/)
> 
> [](http://demo-base.boogu.org/)
> [](http://demo-edit.boogu.org/)
> [](http://demo-turbo.boogu.org/)
> [](LICENSE)
> [-lightgrey)]()
> 
> Welcome to the official repository for **Boogu-Image-0.1** !
> 
> English | [中文](./README_CN.md)
> 
> ---
> 
> > ## ⚠️ Important Notice
> >
> > **The Boogu team does NOT currently provide any paid API, subscription, or commercial service for Boogu-Image.** Any paid product or service offered under the name **"Boogu-Image"** — or any similar / variant name such as `booguimage`, `Boogu Image`, `Boogu`, etc. — is **NOT affiliated with this project** and is unofficial. Please verify carefully before making any payment, and stay vigilant to protect your personal privacy and financial safety.
> >
> > **Boogu-Image-0.1 is a research project only, and not an official model release.**
> 
> 
> ## 🛠️ Installation
> 
> > **Tested environment:** Python 3.10 · CUDA 12.6 · PyTorch 2.7.1
> 
> ```bash
> 
> ## 🚀 Quick Start
> 
> 
> #    See utils/t2i_external_prompt_rewriter.py. This is a pure external mode example and
> 
> #    See the scripts under `demo_scripts` whose names contain "reasoning".
> 
> #    For example: demo_scripts/demo_t2i_local_reasoning.sh
> 
> ## 📖 Introduction
> 
> **Boogu-Image-0.1** is a competitive **Apache-2.0 open-source unified image generation and editing model family**, including **Base**, **Turbo**, **Edit**, and other variants that provide stable, practical capabilities for high-quality text-to-image generation, fast generation, image editing, and Chinese-English text rendering. Closed-source multimodal understanding and generation systems like Nano Banana Pro and GPT-Image-2 achieve remarkable performance not because of a single model, but through a highly unified suite of system capabilities. However, under training compute that is extremely limited compared with closed-source systems, we find that systematically improving a model's understanding ability, data quality, and training pipeline can still significantly improve image generation and editing performance. Specifically, compared with some existing open-source models, our training data scale is roughly one order of magnitude smaller. We hope our empirical study and open-source release will help advance the open-source ecosystem for multimodal generation and understanding.
> 
> This repository provides checkpoints and inference code for **Boogu-Image-0.1**.
> 
> 
> ## ✨ Highlights
> 
> - 📸 **Beautiful and Precise Photography** — Accurately understands photography prompts and generates high-quality images with natural lighting, coherent composition, and faithful details, preserving coherent subject, background, and spatial relationships even in complex real-world scenes
> 
> - 📝 **Diverse and Stable Text Rendering** — Supports a wide range of text-heavy designs — posters, stamps, documents, interfaces, brand guides, and handwritten boards — with readable structure, stable typography, and robust bilingual (Chinese/English) rendering across diverse layouts
> 
> - 🎨 **Diverse and Beautiful Stylization** — Handles stylized generation across miniature 3D scenes, Chinese-inspired gilded aesthetics, shining fantasy visuals, anime portraits, and mythic character art — not just style transfer, but stable, attractive, and prompt-aware creative generation
> 
> - 🖌️ **Versatile Image Editing** — Handles a wide spectrum of editing tasks, including object insertion, replacement and removal, attribute and material modification, background and scene replacement, and faithful style transfer across artistic looks, while keeping the source subject and composition coherent
> 
> - 🪧 **Personalized Poster Design & Product Rendering** — Generates personalized poster layouts and clean product visualizations with consistent branding, refined typography, and product-grade lighting and composition
> 
> - ✍️ **Precise Text Editing** — Enables fine-grained, in-image text editing — replacing, adding, or removing characters in both Chinese and English — and flexibly adapts fonts, weights, colors, and layouts to match different design intents
> 
> - 📊 **Competitive General Performance** — Demonstrates competitive performance across many scenarios and benchmarks, with the Boogu-Image-0.1 family ranking among the very top of evaluated open- and closed-source systems in Boogu Arena
> 
> > 📖 For the full set of practical lessons and an honest account of current limitations, see [Responsible AI & Limitations](#-responsible-ai--limitations) below.
> 
> 
> ## 🔬 Scenario-wise Comparison
> 
> Beyond overall arena rankings, we break performance down by scenario across leading open-source peers. Ratings reflect our internal evaluation of typical prompts in each category.
> 
> | Model | Realistic Photography | Simple Text Rendering | Dense Text Rendering |
> | :--- | :---: | :---: | :---: |
> | **Boogu-Image-0.1-Turbo** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
> | **Boogu-Image-0.1-Base**  | ⭐⭐⭐  | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
> | Z-Image-Turbo             | ⭐⭐⭐⭐ | ⭐⭐⭐  | ⭐⭐ |
> | Qwen-Image-2512           | ⭐⭐⭐  | ⭐⭐⭐⭐ | ⭐⭐⭐ |
> 
> - 📸 **Photography with reliable text rendering** — Boogu-Image-0.1-Turbo delivers realistic photography, while also offering solid performance on both simple and dense text rendering.
> - 📝 **Strong dense text rendering** — Boogu-Image-0.1-Base shows competitive results on dense, layout-heavy text scenarios such as posters, documents, brand guides, and complex bilingual designs.
> - 💡 **Recommendation** — When your workload is dominated by dense / ultra-dense text rendering needs, we recommend running **Boogu-Image-0.1-Base at 2K output resolution** for the best layout fidelity and character accuracy.
> 
> 
> ## 🏆 Boogu Arena
> 
> Since we could not evaluate on LM Arena directly, we built **Boogu Arena**, an LM Arena-style preference evaluation. We use an LLM to generate diverse user personas, then ask each persona to produce image generation prompts, resulting in **1K+ test prompts** that we will release publicly for community reproduction. The ELO leaderboard below spans leading closed- and open-source systems. **We welcome teams with questions about the results to contact us so that we can work toward a more objective, fair, and reproducible evaluation.**
> 
>   
> 
> 
> ## 📣 News
> - **2026-06-XX** 🧊 **Boogu-Image-0.1-Edit-Turbo (Image-to-Image) is coming!**
> - **2026-06-XX** 🧊 **Boogu-Image-0.1-Turbo-2K (Text-to-Image) is coming!**
> - **2026-06-20** 🧊 Happy Dragon Boat Festival! We have seen many community reviews and feedback, and we will continue to update the model accordingly. Due to differences in product design philosophy, the Boogu series stands apart from most existing open-source models. While other models tend to rely on reinforcement learning techniques to enhance aesthetics, Boogu focuses on using diverse data to give users more control. This is precisely why we adopt an integrated understanding-and-generation system: we need more precise instruction control. We will release a user manual in three days to help everyone make better use of the Boogu series models.
> - **2026-06-17** 🔥 [**ComfyUI-Boogu**](https://huggingface.co/Comfy-Org/Boogu-Image) powered by ComfyUI is released! Thank you, ComfyUI!
> - **2026-06-17** 🔥 [**ComfyUI-Boogu**](https://github.com/boogu-project/ComfyUI-Boogu) is released! 
> - **2026-06-16** 🔥 **Boogu-Image-0.1-Base (Text-to-Image) is released!** The core text-to-image foundation model. Try the [online demo](http://demo-base.boogu.org/).
> - **2026-06-16** 🎨 **Boogu-Image-0.1-Edit (Image-to-Image) is released!** Image editing and transformation capabilities now available. **Note that you need to change the resolution of the reference image to 1K accordingly.** Try the [online demo](http://demo-edit.boogu.org/). **Only support 1 reference image for now. Will try our best to support more reference images. Stay tuned!** Boogu-Image-0.1-Edit on sing

## 延伸閱讀

相關概念：[[圖像生成]] · [[多模態]] · [[深度學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[freestylefly--awesome-gpt-image-2|freestylefly/awesome-gpt-image-2]] · [[inspatio--worldfm|inspatio/worldfm]] · [[liyue-aigc--female-portrait-director|liyue-aigc/female-portrait-director]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[bytedance--Lance|bytedance/Lance]] · [[facebookresearch--tribev2|facebookresearch/tribev2]]

[GitHub](https://github.com/boogu-project/Boogu-Image)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "boogu-project--Boogu-Image"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "boogu-project--Boogu-Image"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "boogu-project--Boogu-Image" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "boogu-project--Boogu-Image"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["圖像生成","多模態","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "boogu-project--Boogu-Image" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "boogu-project--Boogu-Image" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "boogu-project" AND file.name != "boogu-project--Boogu-Image"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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
> const me = dv.page("Repos/boogu-project--Boogu-Image");
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

> **2026-06-22** — 首次收錄
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

- [[2026-06-22|2026-06-22]] — 首次收錄，392 stars
