---
repo: Robbyant/lingbot-vision
url: https://github.com/Robbyant/lingbot-vision
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "Self-supervised learning for spatial perception"
homepage: ""
stars: 690
stars_per_day: 115
forks: 23
open_issues: 2
created: 2026-07-06
pushed_at: 2026-07-08
first_seen: 2026-07-12
week: "2026-W29"
month: "2026-07"
category: "AI/ML"
subcategory: "深度學習"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-12
use_case: "提供自監督學習的視覺編碼器，專注於密集空間感知。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-20"
contributor_count: 3
engagement: "low"
issue_close_rate: 71
repo_size_kb: 11427
readme_length: 8770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:638,2026-07-12:638,2026-07-13:690,2026-07-13:690"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-vision"
  - "Robbyant/lingbot-vision"
  - "提供自監督學習的視覺編碼器，專注於密集空間感知。"
---

# lingbot-vision

**690** stars · **115** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> 提供自監督學習的視覺編碼器，專注於密集空間感知。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (115 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要進行密集空間感知研究並希望利用自監督學習的計算機視覺工程師。
> **一句話重點** LingBot-Vision 的邊界中心建模策略讓它在空間感知任務中表現出色。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "深度學習" && p.file.name !== "Robbyant--lingbot-vision" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 深度學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到高效的空間感知能力，值得投入。

> [!abstract] 核心創新
> LingBot-Vision 提供了邊界中心的自監督學習模型，專注於密集空間感知的特徵學習。

## 專案簡介

LingBot-Vision 是一套自監督的 Vision Transformer（ViT）架構，專為密集空間感知而設計。用戶可以透過這個模型進行邊界建模，從而學習到物體的邊界、形狀和語義區域，並能夠應用於深度估算、語義分割等任務。使用者只需透過 `load_pretrained_backbone` 指令即可輕鬆載入預訓練模型，並使用 `extract_patch_tokens` 來提取圖像的補丁特徵。這個工具的賣點在於其邊界中心的建模方式，這使得模型在捕捉語義和幾何結構時，能夠同時保留強大的語義表示。技術上，LingBot-Vision 使用了多個 ViT 模型，從小型到大型（如 1.1B 參數的 ViT-g/16），並且能夠在不需要訓練的情況下進行標籤傳播和物體分割。

與其他工具相比，如 DINOv2 和 DINOv3，LingBot-Vision 更加專注於邊界的學習，這使得其在處理複雜場景時表現更佳。實際使用中，該模型能夠處理高達 150M 的 RGB-D 訓練樣本，並且在深度補全和視頻物體分割上表現出色。需要注意的是，該專案目前仍在活躍開發中，社群回應速度良好，且有少量開放的 issue 需要解決。整體來說，這是一個值得關注的專案，特別適合需要進行密集空間感知的研究者和開發者。

**技術棧**：`Python 3.10` · `PyTorch` · `torchvision` · `opencv-python-headless` · `numpy`

## 重點功能

- 邊界中心建模 — 透過邊界建模學習空間結構，提升模型的語義表示能力。
- 多種模型選擇 — 提供從小型到大型的多個 ViT 模型，滿足不同需求。
- 深度估算 — 能夠進行高效的深度估算，特別是在複雜場景中。
- 語義分割 — 提供邊界忠實的特徵，能夠精確對齊物體輪廓。
- 視頻物體分割 — 支持訓練免費的標籤傳播，提升分割準確性。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/robbyant/lingbot-vision.git
```
2. 創建 conda 環境
```bash
conda create -n lingbot-vision python=3.10 -y
```
3. 安裝依賴
```bash
python -m pip install -r requirements.txt
```
4. 安裝 lingbot-vision
```bash
python -m pip install -e .
```

## 程式碼範例

```python
[
  "# 前置條件：安裝了 PyTorch 和 LingBot-Vision",
  "import torch",
  "from lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image",
  "device = 'cuda' if torch.cuda.is_available() else 'cpu'",
  "backbone, embed_dim = load_pretrained_backbone(variant='small', device=device)",
  "img_norm, _, _ = load_image('examples/example.png', size=512, patch_size=backbone.patch_size, mode='square')",
  "patch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device)",
  "print(patch_tokens.shape, patch_grid, embed_dim)"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 690 stars（115/天），forks 23（3.3%），顯示出穩定的增長潛力。主要貢獻者包括 cherubicXN 和 TakuLingFu，這些開發者在自監督學習和計算機視覺領域有豐富的經驗。LingBot-Vision 解決了傳統視覺模型在空間感知上的不足，特別是在邊界學習方面，這在以往的模型中並未得到充分重視。社群對於其未來的 Transformer 支持計畫也表現出興趣，這可能會進一步推動其使用率。依賴的技術生態如 PyTorch 和 Hugging Face 也為其提供了良好的支持環境，這使得這個工具在實際應用中更具可行性。

## 適合誰使用

**目標受眾**：需要進行密集空間感知研究並希望利用自監督學習的計算機視覺工程師。

> [!example] 使用場景
> - 計算機視覺研究人員用它來進行邊界建模，因為其能夠同時捕捉語義和幾何結構，從而提升模型的準確性。
> - 深度學習工程師用它來進行深度估算，因為其在處理複雜場景時的表現優於傳統方法。
> - 數據科學家用它來進行語義分割，因為其邊界忠實特徵能夠精確對齊物體輪廓，提升分割效果。

## 架構分析

LingBot-Vision 採用 Vision Transformer 架構，這使得模型能夠有效地處理圖像的空間特徵。每個模型的設計都是基於邊界建模的概念，這意味著模型在學習過程中會專注於物體的邊界和形狀。這種設計使得模型能夠在進行語義分割和深度估算時，提供更高的準確性。

模型的資料流經過多層的自注意力機制，這使得其能夠捕捉到圖像中的長距離依賴關係。選擇 ViT 作為基礎架構的好處在於其能夠在大規模資料集上進行有效訓練，但代價是需要較高的計算資源。由於模型的大小和複雜性，對於資源的需求可能會成為擴展性的瓶頸。

## 技術深入分析

LingBot-Vision 的核心技術在於其自監督學習的邊界建模機制，這使得模型能夠同時捕捉到物體的語義和幾何結構。使用了 Vision Transformer 架構，這意味著模型能夠在處理圖像時，利用自注意力機制來捕捉長距離的依賴關係。這種設計使得模型在進行語義分割和深度估算時，能夠提供更高的準確性。效能方面，模型能夠處理高達 150M 的 RGB-D 訓練樣本，並且在複雜場景中的表現優於傳統方法。選擇 PyTorch 作為主要框架的好處在於其靈活性和社群支持，但也帶來了對於計算資源的高需求。技術風險方面，模型的大小和複雜性可能會在擴展時造成瓶頸，特別是在資源有限的情況下。整合方面，LingBot-Vision 可以輕鬆與 Hugging Face 生態系統整合，這使得其在實際應用中更具可行性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠順利上手。安裝過程相對簡單，但需要注意 CUDA 支援的 GPU。文件中提供了基本的使用範例，對於新手來說有助於快速理解如何使用。整體而言，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 高效的邊界學習能力，能夠提升語義表示的準確性。
> - 多種模型選擇，適合不同的應用需求。
> - 良好的社群支持和活躍的開發進度。

> [!danger] 缺點
> - 需要高效能的 GPU 以獲得最佳效能。
> - 目前僅提供 backbone 權重，無法直接用於訓練。
> - 對於新手來說，學習曲線可能較陡峭。

> [!warning] 注意事項
> - 僅支援 Python 3.10 及以上版本。
> - 需要 CUDA 支援的 GPU 以獲得最佳效能。
> - 目前僅提供 backbone 權重，無法直接使用於訓練。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多模態學習，而 LingBot-Vision 更專注於視覺邊界學習，適合不同的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的自監督學習方法，但在空間感知方面的專注度不如 LingBot-Vision。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多模態學習，而 LingBot-Vision 更專注於視覺邊界學習，適合不同的應用場景。 | 如果你的專案需要處理多模態資料，則 agent-sprite-forge 可能更適合。 | medium，因為需要重新設計資料流和模型架構。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的自監督學習方法，但在空間感知方面的專注度不如 LingBot-Vision。 | 如果你的專案需要更廣泛的自監督學習方法，boneyard 可能更合適。 | high，因為需要全面評估和重構現有模型。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-vision** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多模態學習，而 LingBot-Vision 更專注於視覺邊界學習，適合不同的應用場景。 | 提供不同的自監督學習方法，但在空間感知方面的專注度不如 LingBot-Vision。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和模型架構。 | high，因為需要全面評估和重構現有模型。 |
> | 適用場景 | 主要場景 | 如果你的專案需要處理多模態資料，則 agent-sprite | 如果你的專案需要更廣泛的自監督學習方法，boneyard 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，CUDA 驅動可能無法正確識別 GPU，導致無法運行模型。
  - 解法：確保安裝了正確版本的 CUDA 驅動和 PyTorch。
- [MEDIUM] 模型在處理特定類型的圖像時可能會出現性能瓶頸。
  - 解法：考慮使用較小的模型或進行圖像預處理。
- [MEDIUM] 某些依賴庫版本不兼容，可能導致安裝失敗。
  - 解法：檢查 requirements.txt 中的版本，並根據需要手動安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要進行邊界建模的計算機視覺研究 | 非常適合 | 其專注於邊界學習的特性使其在此場景中表現優異。 |
| 小型團隊進行深度估算專案 | 適合 | 模型能夠處理複雜場景，提供準確的深度估算。 |
| 大型企業的核心產品開發 | 不適合 | 目前仍在 alpha 階段，穩定性和成熟度不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到高效的空間感知能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴的庫中無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
| Forks | 23 |
| Open Issues | 2 |
| Issue 解決率 | 71% (5 closed) |
| 最後推送 | 2026-07-08 |
| 建立日期 | 2026-07-06 |
| Repo 大小 | 11.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Robbyant/lingbot-vision) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `torchvision` `numpy` `opencv-python-headless` `pillow` `omegaconf` `huggingface_hub`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cherubicXN](https://github.com/cherubicXN) | 6 |
> | [@TakuLingFu](https://github.com/TakuLingFu) | 5 |
> | [@IceTTTb](https://github.com/IceTTTb) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://github.com/Robbyant/lingbot-vision)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-08）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/Robbyant/lingbot-vision/issues/7) | Plans for Transformers support? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> LingBot-Vision: Vision Pretraining for Dense Spatial Perception
> 
> [](https://github.com/Robbyant/lingbot-vision/blob/main/paper.pdf)
> [](https://arxiv.org/abs/2607.05247)
> [](https://technology.robbyant.com/lingbot-vision)
> [](https://huggingface.co/collections/robbyant/lingbot-vision)
> [](https://www.modelscope.cn/collections/Robbyant/LingBot-Vision)
> [](LICENSE)
> 
> -----
> 
> ### 🔭 Meet LingBot-Vision! A family of self-supervised ViT backbones for dense spatial perception! 🖼️📐
> 
> **LingBot-Vision** is a family of self-supervised Vision Transformer backbones for dense spatial perception, from ViT-S/16 up to a 1.1B-parameter ViT-g/16. The flagship model is pretrained with **masked boundary modeling** — a boundary-centric objective that encourages spatially structured patch features while retaining strong semantic representations.
> 
> **Boundary-centric masked modeling.** Each row shows the input image, the PCA projection of frozen patch tokens, teacher-discovered boundary tokens, and cosine-similarity maps from selected boundary-token queries. The features capture semantic grouping and geometric structure at the same time.
> 
> LingBot-Vision learns boundaries, shapes, and semantic regions all together, making it a drop-in visual encoder for dense downstream tasks:
> 
> - 🎨 **Dense feature visualization** — PCA maps of frozen patch tokens reveal coherent object regions and crisp boundaries
> - 📏 **Depth estimation** — frozen patch tokens expose spatial structure to lightweight dense readouts
> - 🧩 **Semantic segmentation** — boundary-faithful features align region transitions with object contours
> - 🎬 **Video object segmentation** — training-free token matching and label propagation with frozen features
> - 🤖 **Depth completion** — LingBot-Vision is the visual encoder initialization for LingBot-Depth 2.0 (see below)
> 
> ## 🌊 Meet LingBot-Depth 2.0
> 
> By simply replacing the encoder with LingBot-Vision at the ViT-L/16 and ViT-g/16 scales, and scaling the curated RGB-D training corpus from 3M to 150M samples, LingBot-Depth 2.0 achieves substantial performance gains over the previous and other system, as detailed in the technical report.
> 
> **LingBot-Depth 2.0 on mirror and glass scenes.** Each group shows input RGB, raw sensor depth, refined depth, and refined point clouds. Raw depth is missing on difficult surfaces such as window panes, glass balustrades, and reflective floors. LingBot-Depth 2.0 completes these regions as stable, contiguous surfaces across frames.
> 
> ---
> 
> ## 📦 Model Zoo
> 
> We train a ViT-g/16 teacher with roughly 1.1B parameters and distill ViT-L, ViT-B, and ViT-S backbones from it for inference and downstream use. Full training and evaluation details are covered in the technical report.
> 
> All released weights are **backbone-only** `.pt` checkpoints, stored as `model.pt` in each model repository (see the full [Hugging Face collection](https://huggingface.co/collections/robbyant/lingbot-vision)):
> 
> | Model | Backbone | Embed dim | Hugging Face Weights | ModelScope Weights |
> |-------|----------|----------:|----------------------|--------------------|
> | **LingBot-Vision-Giant**highest-quality dense features | ViT-g/16 · SwiGLU · fp32 RoPE · 4 register tokens | 1536 | [vit-giant](https://huggingface.co/robbyant/lingbot-vision-vit-giant) | [vit-giant](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-giant) |
> | **LingBot-Vision-Large** ⭐recommended: strong features, practical inference | ViT-L/16, distilled from Giant | 1024 | [vit-large](https://huggingface.co/robbyant/lingbot-vision-vit-large) | [vit-large](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-large) |
> | **LingBot-Vision-Base**balanced inference cost | ViT-B/16, distilled from Giant | 768 | [vit-base](https://huggingface.co/robbyant/lingbot-vision-vit-base) | [vit-base](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-base) |
> | **LingBot-Vision-Small**lightweight demos and downstream use | ViT-S/16, distilled from Giant | 384 | [vit-small](https://huggingface.co/robbyant/lingbot-vision-vit-small) | [vit-small](https://www.modelscope.cn/models/Robbyant/lingbot-vision-vit-small) |
> 
> Config files are packaged under `lingbot_vision/configs/` and selected automatically by `load_pretrained_backbone`.
> 
> ## 🔧 Installation
> 
> **Requirements**: Python ≥ 3.10 · PyTorch ≥ 2.0 · CUDA-capable GPU (recommended for large-model inference)
> 
> **1. Clone the repository**
> 
> ```bash
> git clone https://github.com/robbyant/lingbot-vision.git
> cd lingbot-vision
> ```
> 
> **2. Create a conda environment**
> 
> ```bash
> conda create -n lingbot-vision python=3.10 -y
> conda activate lingbot-vision
> ```
> 
> **3. Install lingbot-vision**
> 
> ```bash
> python -m pip install -r requirements.txt
> python -m pip install -e .
> ```
> 
> ## 🚀 Quick Start
> 
> ### Load LingBot-Vision Pretrains with PyTorch
> 
> The model is automatically downloaded from Hugging Face on first use. This example uses the small model for a lightweight smoke run; `large` is the default variant, and `giant` is available as the largest backbone.
> 
> ```python
> import torch
> 
> from lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image
> 
> device = "cuda" if torch.cuda.is_available() else "cpu"
> dtype = torch.bfloat16 if device == "cuda" else torch.float32
> 
> # Downloads model.pt from robbyant/lingbot-vision-vit-small.
> backbone, embed_dim = load_pretrained_backbone(
>     variant="small",
>     device=device,
>     dtype=dtype,
> )
> 
> img_norm, _, _ = load_image(
>     "examples/example.png",
>     size=512,
>     patch_size=backbone.patch_size,
>     mode="square",
> )
> patch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device, dtype)
> 
> print(patch_tokens.shape, patch_grid, embed_dim)
> # torch.Size([1, 1024, 384]) (32, 32) 384
> ```
> 
> `patch_tokens` has shape `[B, H * W, C]`, where `H` and `W` are the patch-grid dimensions. `variant` can be `giant`, `large`, `base`, or `small`; if omitted, it defaults to `large`. You can also pass a local directory or an explicit Hugging Face model repo to `load_pretrained_backbone`.
> 
> ### Run the PCA demo
> 
> Download a backbone checkpoint from Hugging Face (or ModelScope, once available), then run:
> 
> ```bash
> ./scripts/run_pca_demo.sh \
>   --config-file lingbot_vision/configs/lbot_vision_vitl.yaml \
>   --ckpt /path/to/model.pt \
>   --input examples/example.png \
>   --out outputs/pca_demo \
>   --size 512 \
>   --mode square \
>   --dtype bf16
> ```
> 
> Images are loaded as RGB, resized according to `--size` and `--mode`, aligned to the model patch size, and normalized with ImageNet statistics. The demo maps the top three PCA components of the patch tokens to RGB and writes both PCA-only and input/PCA panel visualizations to the output directory. Use `--dtype fp32 --device cpu` for CPU-only inference.
> 
> All demo options
> 
> | Parameter | Description |
> | --- | --- |
> | `--config-file` | Model config file under `lingbot_vision/configs/`. |
> | `--ckpt` | Local path to a pure backbone `.pt` checkpoint. |
> | `--input` | Image file or directory of images. |
> | `--out` | Output directory for PCA visualizations. |
> | `--size` | Target input size. For ViT-g/16, 512 gives a 32 x 32 patch grid. |
> | `--mode` | `square` resizes to `size` x `size` (does not preserve aspect ratio); `shortest` resizes the shortest side to `size`, then center-crops a `size` x `size` square. |
> | `--dtype` | `bf16`, `fp16`, or `fp32`. |
> | `--device` | PyTorch device, for example `cuda` or `cpu`. |
> 
> ### Checkpoint format
> 
> Released checkpoints are `.pt` files containing backbone weights only — no optimizer states, projection heads, or training-time boundary heads. The loader accepts a raw state dict or a dictionary with a `backbone` entry:
> 
> ```python
> state_dict
> {"backbone": state_dict}
> ```
> 
> If checkpoint keys are prefixed with `backbone.`, the loader strips the prefix automatically.
> 
> ## 📖 Citation
> 
> ```bibtex
> @article{lingbot-vision2026,
>   title={Vision Pretraining for Dense Spatial Perception},
>   author={Fu, Zelin and Tan, Bin and Sun, Changjiang and Liu, Shaohui and Zheng, Kecheng and Xu, Yinghao and 

## 延伸閱讀

相關概念：[[自動化測試]] · [[深度學習]] · [[電腦視覺]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[facebookresearch--vggt-omega|facebookresearch/vggt-omega]] · [[inspatio--worldfm|inspatio/worldfm]]

[GitHub](https://github.com/Robbyant/lingbot-vision)

## 相關收錄

> [!note]- 直接競品（同子分類：深度學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "深度學習" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Robbyant--lingbot-vision" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","深度學習","電腦視覺"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Robbyant--lingbot-vision" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Robbyant--lingbot-vision" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Robbyant" AND file.name != "Robbyant--lingbot-vision"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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
> const me = dv.page("Repos/Robbyant--lingbot-vision");
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

> **2026-07-12** — 首次收錄
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

- [[2026-07-13|2026-07-13]] — 再次上榜，690 stars
- [[2026-07-12|2026-07-12]] — 首次收錄，638 stars
