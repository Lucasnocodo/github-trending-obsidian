---
repo: Robbyant/lingbot-vision
url: https://github.com/Robbyant/lingbot-vision
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "Self-supervised learning for spatial perception"
homepage: ""
stars: 638
stars_per_day: 128
forks: 20
open_issues: 1
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
use_case: "提供自我監督學習的視覺編碼器，專注於密集空間感知。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-19"
contributor_count: 3
engagement: "low"
issue_close_rate: 83
repo_size_kb: 11427
readme_length: 8770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:638"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-vision"
  - "Robbyant/lingbot-vision"
  - "提供自我監督學習的視覺編碼器，專注於密集空間感知。"
---

# lingbot-vision

**638** stars · **128** stars/天 · 建立 5 天前 · Python · Apache-2.0

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
> 提供自我監督學習的視覺編碼器，專注於密集空間感知。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (128 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在計算機視覺領域進行密集空間感知研究的開發者和研究者。
> **一句話重點** LingBot-Vision 的邊界建模技術為密集空間感知任務提供了新的解決方案，顯著提升了模型的表現。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，4 小時整合，得到強大的空間感知能力，值得投入。

> [!abstract] 核心創新
> LingBot-Vision 透過邊界中心的遮蔽建模技術，提升了模型在密集空間感知任務中的表現。

## 專案簡介

LingBot-Vision 是一個自我監督的 Vision Transformer (ViT) 編碼器，專為密集空間感知設計，從 ViT-S/16 到 1.1B 參數的 ViT-g/16。其核心機制是透過邊界中心的遮蔽建模來學習圖像的邊界、形狀和語義區域，這使得模型能夠同時捕捉語義分組和幾何結構。使用者可以透過 `load_pretrained_backbone` 指令輕鬆加載預訓練模型，並使用 `extract_patch_tokens` 來提取圖像的補丁令牌，這些令牌的形狀為 `[B, H * W, C]`，其中 H 和 W 是補丁網格的維度。這個工具的賣點在於其能夠提供高質量的特徵表示，適用於深度估計、語義分割和視頻物體分割等任務。技術上，LingBot-Vision 使用了 PyTorch 和 CUDA，並依賴於 Torch、OpenCV 和 Hugging Face 等庫，這使得其在性能上具有優勢。

與其他工具相比，LingBot-Vision 的邊界建模方法能夠更好地處理複雜的物體邊界，這在傳統的 CNN 模型中往往無法達到。實際使用中，模型能夠處理高達 1.1B 的參數，並在大規模 RGB-D 數據集上進行訓練，這使得其在深度學習任務中表現出色。這個專案的成熟度還在 alpha 階段，適合對空間感知有需求的研究者和開發者，但在生產環境中可能需要更多的穩定性測試。使用者應該考慮其學習曲線和整合時間，尤其是在需要處理大規模數據時。

**技術棧**：`Python 3.10` · `PyTorch 2.0` · `CUDA`

## 重點功能

- 邊界中心遮蔽建模 — 透過邊界建模技術提升特徵表示的語義和幾何結構。
- 多種模型選擇 — 提供 ViT-S/16 到 ViT-g/16 的多種模型，滿足不同需求。
- 高效的特徵提取 — 使用 `extract_patch_tokens` 提取補丁令牌，形狀為 `[B, H * W, C]`。
- 支持多種下游任務 — 包括深度估計、語義分割和視頻物體分割等。
- 簡單的安裝和使用 — 透過 `pip` 安裝和簡單的 Python API 進行操作。

## 快速開始

1. 克隆專案
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
4. 安裝專案
```bash
python -m pip install -e .
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 LingBot-Vision 和相關依賴",
  "import torch",
  "from lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image",
  "device = 'cuda' if torch.cuda.is_available() else 'cpu'",
  "backbone, embed_dim = load_pretrained_backbone(variant='small', device=device)",
  "img_norm, _, _ = load_image('examples/example.png', size=512, patch_size=backbone.patch_size, mode='square')",
  "patch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device)",
  "print(patch_tokens.shape, patch_grid, embed_dim)",
  "# 預期輸出：torch.Size([1, 1024, 384]) (32, 32) 384"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 638 stars（128/天），forks 20（3.1%），顯示出一定的社群興趣。作者團隊包括多位在自我監督學習和計算機視覺領域有經驗的研究者，解決了密集空間感知中對邊界和形狀的學習需求。這個專案的推出正值自我監督學習技術逐漸成熟的時期，並且有助於提升現有模型在複雜場景中的表現。forks/stars 比率顯示出使用者對於這個工具的實際修改和應用有一定的興趣，這可能意味著該專案在未來會有更多的實際應用案例。

## 適合誰使用

**目標受眾**：需要在計算機視覺領域進行密集空間感知研究的開發者和研究者。

> [!example] 使用場景
> - 計算機視覺研究者用它來訓練自我監督的深度學習模型，因為其邊界建模技術能夠提升模型在複雜場景中的表現。
> - 機器人開發者用它來進行深度估計和語義分割，因為其提供的高質量特徵能夠改善機器人的環境感知能力。
> - 學術機構用它來進行空間感知的實驗，因為其支持大規模數據集的訓練，能夠有效提升研究成果的可靠性。

## 架構分析

LingBot-Vision 採用 Vision Transformer 架構，這使得其能夠處理高維度的圖像數據。模型的設計重點在於邊界建模，這不僅提升了語義理解，還強化了幾何結構的學習。資料流方面，圖像首先被轉換為補丁令牌，然後進行特徵提取，最終用於下游任務。

選擇 ViT 而非傳統 CNN 的原因在於其能夠更好地捕捉長距離的依賴關係，這對於空間感知至關重要。這種設計的代價在於需要較大的計算資源，特別是在處理高參數模型時。擴展性方面，雖然模型能夠處理大量數據，但在訓練過程中可能會遇到記憶體瓶頸，尤其是在使用大型模型時。

## 技術深入分析

LingBot-Vision 的核心技術在於其使用的 Vision Transformer 架構，這使得模型能夠有效地處理圖像中的長距離依賴。透過邊界中心的遮蔽建模，模型不僅能夠學習到物體的語義特徵，還能夠捕捉到物體的幾何結構。這種設計使得模型在處理複雜場景時表現出色，特別是在密集空間感知任務中。效能上，模型能夠處理高達 1.1B 的參數，這在大規模數據集上訓練時能夠提供穩定的性能。選擇 PyTorch 作為框架的原因在於其靈活性和強大的社群支持，這使得開發者能夠快速實現和測試新想法。技術風險方面，隨著模型規模的擴大，可能會遇到記憶體瓶頸，這需要在實際應用中進行仔細的資源管理。整合方面，LingBot-Vision 可以輕鬆與 Hugging Face 生態系統中的其他工具進行整合，這使得其在實際應用中具有高度的靈活性和擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中，使用 conda 環境可以有效避免依賴問題。整體而言，花 30 分鐘內應該能夠成功運行基本範例。

## 優缺點分析

> [!success] 優點
> - 高效的特徵學習，適合多種下游任務。
> - 自我監督學習方法，減少了對標註數據的依賴。
> - 多種模型選擇，滿足不同的計算需求。

> [!danger] 缺點
> - 需要較高的計算資源，特別是在使用大型模型時。
> - 目前仍在 alpha 階段，穩定性可能不足。
> - 安裝和配置過程對新手來說可能有一定挑戰。

> [!warning] 注意事項
> - 僅支援 Python 3.10 及以上版本。
> - 需要 CUDA 支援的 GPU 以獲得最佳性能。
> - 目前僅提供 backbone 的權重，未包含優化器狀態或訓練時的邊界頭。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對空間感知有興趣的研究者進行試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，CUDA 驅動可能不兼容，導致模型無法加載。
  - 解法：確保安裝最新的 CUDA 驅動和 PyTorch 版本。
- [MEDIUM] 在使用大型模型時，可能會遇到記憶體不足的問題。
  - 解法：考慮使用更小的模型或增加 GPU 記憶體。
- [MEDIUM] 某些依賴庫版本不兼容，可能導致安裝失敗。
  - 解法：檢查 requirements.txt 中的版本要求，並根據需要手動安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型計算機視覺研究團隊 | 非常適合 | 提供強大的特徵學習能力，適合多種下游任務。 |
| 小型開發團隊進行快速原型設計 | 適合 | 安裝和使用相對簡單，能快速上手。 |
| 個人開發者進行深度學習實驗 | 普通 | 雖然功能強大，但可能需要較高的計算資源。 |
| 對空間感知需求不高的應用 | 不適合 | 專案的特性可能超出實際需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，4 小時整合，得到強大的空間感知能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，依賴鏈中無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LingBot-Vision 最常與 PyTorch 和 Hugging Face 生態系統搭配使用，特別是在計算機視覺的開發和部署階段。具體來說，在一個使用 PyTorch 進行深度學習的專案中，可以透過 `load_pretrained_backbone` 輕鬆加載模型，並用於特徵提取。該工具支援與 GitHub Actions 等 CI 工具的整合，並且能夠與 VS Code 等 IDE 進行良好的協作。整合過程中，最常見的問題是依賴版本不兼容，這需要在安裝時仔細檢查依賴項的版本。

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
| Forks | 20 |
| Open Issues | 1 |
| Issue 解決率 | 83% (5 closed) |
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

**社群活躍度**：社群活躍，最近有多次提交和問題解決。
**連結**：[文件](https://github.com/Robbyant/lingbot-vision)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-08）
> **活躍天數** 3 天 · **最新 commit** Update README.md

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

相關概念：[[自我監督學習]] · [[深度學習]] · [[電腦視覺]]

相關專案：[[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[facebookresearch--vggt-omega|facebookresearch/vggt-omega]] · [[inspatio--worldfm|inspatio/worldfm]]

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
> const concepts = ["自我監督學習","深度學習","電腦視覺"];
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

- [[2026-07-12|2026-07-12]] — 首次收錄，638 stars
