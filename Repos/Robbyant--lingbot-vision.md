---
repo: Robbyant/lingbot-vision
url: https://github.com/Robbyant/lingbot-vision
owner: Robbyant
owner_type: Organization
language: Python
license: Apache-2.0
description: "Self-supervised learning for spatial perception"
homepage: ""
stars: 821
stars_per_day: 75
forks: 32
open_issues: 3
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
use_case: "提供自我監督學習的視覺編碼器，專注於密集的空間感知。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-20"
contributor_count: 3
engagement: "low"
issue_close_rate: 63
repo_size_kb: 11427
readme_length: 8770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:638,2026-07-12:638,2026-07-13:690,2026-07-13:690,2026-07-14:744,2026-07-15:772,2026-07-16:793,2026-07-17:807,2026-07-18:821"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "lingbot-vision"
  - "Robbyant/lingbot-vision"
  - "提供自我監督學習的視覺編碼器，專注於密集的空間感知。"
---

# lingbot-vision

**821** stars · **75** stars/天 · 建立 11 天前 · Python · Apache-2.0

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
> 提供自我監督學習的視覺編碼器，專注於密集的空間感知。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (75 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要進行密集空間感知任務的機器學習團隊，特別是在深度估計和語義分割方面。
> **一句話重點** LingBot-Vision 的邊界中心建模技術在密集空間感知任務中展現出優異的性能，值得關注。

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
> **結論** 花 8 小時學、4 小時整合，得到強大的空間感知能力，值得考慮。

> [!abstract] 核心創新
> LingBot-Vision 提供了邊界中心的遮罩建模，這在密集空間感知任務中是前所未有的。

## 專案簡介

LingBot-Vision 是一個自我監督的視覺變壓器（ViT）架構，專為密集空間感知設計，從 ViT-S/16 到 1.1B 參數的 ViT-g/16。其核心機制是透過邊界中心的遮罩建模，鼓勵空間結構的特徵學習，同時保留強大的語義表示。使用者可以透過簡單的指令如 `load_pretrained_backbone` 來加載預訓練模型，並使用 `extract_patch_tokens` 來提取圖像的補丁特徵，這使得它能夠在深度估計、語義分割等任務中表現出色。技術上，LingBot-Vision 利用 PyTorch 框架，並依賴於如 torch、torchvision 等庫，這使得它在 GPU 上運行時性能優越，尤其是在處理大型模型時。與其他類似工具相比，如 DINOv2 和 DINOv3，LingBot-Vision 提供了更強的邊界感知能力，並且能夠在無需大量標註數據的情況下進行有效的特徵學習。

該模型的設計考慮到了可擴展性，能夠處理從小型到大型的數據集，並且在性能上有顯著的提升。使用者在實際應用中可能會遇到的問題包括對於大型模型的 GPU 要求，以及需要正確配置環境來運行。這個專案目前處於活躍開發階段，未來可能會持續增強模型的性能和功能。對於需要進行空間感知任務的團隊，LingBot-Vision 是一個值得考慮的選擇，尤其是在處理複雜場景時，其表現將會優於傳統的視覺模型。

**技術棧**：`Python 3.10` · `PyTorch` · `torchvision` · `numpy` · `opencv-python-headless` · `pillow` · `omegaconf` · `huggingface_hub`

## 重點功能

- 邊界中心的遮罩建模 — 透過邊界建模學習空間結構，提升語義表示能力。
- 多種模型選擇 — 提供從 ViT-S/16 到 ViT-g/16 的多種預訓練模型，滿足不同需求。
- PCA 特徵視覺化 — 使用 PCA 映射補丁特徵，幫助理解物體區域和邊界。
- 深度估計 — 利用凍結的補丁特徵進行輕量級的深度讀取。
- 無需訓練的標籤傳播 — 在視頻物件分割中，通過凍結特徵進行標籤匹配。

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
{
  "前置條件": "需要安裝 PyTorch 和相關依賴。",
  "程式碼": "import torch\n\nfrom lingbot_vision import load_pretrained_backbone, extract_patch_tokens, load_image\n\ndevice = \"cuda\" if torch.cuda.is_available() else \"cpu\"\ndtype = torch.bfloat16 if device == \"cuda\" else torch.float32\n\nbackbone, embed_dim = load_pretrained_backbone(\n    variant=\"small\",\n    device=device,\n    dtype=dtype,\n)\n\nimg_norm, _, _ = load_image(\n    \"examples/example.png\",\n    size=512,\n    patch_size=backbone.patch_size,\n    mode=\"square\",\n)\npatch_tokens, patch_grid = extract_patch_tokens(backbone, img_norm, device, dtype)\n\nprint(patch_tokens.shape, patch_grid, embed_dim)",
  "預期輸出": "torch.Size([1, 1024, 384]) (32, 32) 384"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 821 stars（75/天），forks 32（3.9%），這顯示出不錯的增長潛力。作者 cherubicXN 和 TakuLingFu 在自我監督學習和視覺模型領域有豐富的經驗，之前的工作為這個專案奠定了基礎。LingBot-Vision 解決了傳統模型在密集空間感知中的不足，特別是在邊界和語義表示方面。近期的討論和需求也促進了這個專案的關注，尤其是在 Transformers 支持的需求上。技術上，隨著自我監督學習技術的成熟，這個工具的可行性和實用性也隨之提升。forks/stars 比率顯示出使用者對於這個專案的實際修改和使用意願相對較低，可能仍在觀望階段。

## 適合誰使用

**目標受眾**：需要進行密集空間感知任務的機器學習團隊，特別是在深度估計和語義分割方面。

> [!example] 使用場景
> - 機器學習工程師用它來進行深度估計，因為其邊界中心的建模能夠在複雜場景中提供更準確的深度資訊。
> - 計算機視覺研究者用它來進行語義分割，因為其強大的特徵學習能力能夠更好地對齊物體邊界。
> - 開發者用它來在視頻物件分割任務中進行標籤傳播，因為其無需訓練的特性能夠快速應用於新場景。

## 架構分析

LingBot-Vision 採用自我監督的視覺變壓器架構，設計上選擇了 ViT 作為基礎，因為其在圖像處理上表現優異。資料流從輸入圖像開始，經過補丁提取和特徵學習，最終輸出邊界和語義表示。這種設計使得模型能夠同時捕捉語義和幾何結構。

選擇自我監督學習的方式，能夠在缺乏標註數據的情況下進行有效的學習，這是傳統監督學習方法所無法實現的。擴展性方面，該架構能夠處理從小型到大型的數據集，但在處理極大模型時，對硬體的要求也相應提高。整體來看，這種設計在性能和資源需求之間取得了良好的平衡。

## 技術深入分析

LingBot-Vision 的核心技術機制是基於自我監督學習的視覺變壓器架構，利用邊界中心的遮罩建模來學習空間結構和語義表示。這種設計使得模型能夠同時捕捉物體的邊界和形狀，並在多種密集任務中表現出色。效能方面，該模型能夠處理高達 1.1B 參數的架構，並在 GPU 上運行時表現優異，尤其是在大型數據集上。選擇 PyTorch 作為框架，提供了靈活性和強大的社群支持，但也意味著使用者需要具備一定的 PyTorch 使用經驗。設計上，LingBot-Vision 的依賴樹相對簡單，主要依賴於 PyTorch 和相關的數據處理庫，這降低了使用的複雜性。技術風險方面，隨著模型規模的擴大，對硬體的要求也會增加，這可能成為未來擴展的瓶頸。整合方面，LingBot-Vision 能夠輕鬆與現有的深度學習框架整合，並且在 CI/CD 流程中也能夠友好使用，這使得團隊能夠快速上手並進行實驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程中，創建 conda 環境的步驟簡單明瞭，並且沒有明顯的坑。文件中包含了快速入門指南，幫助使用者快速上手。可惜的是，文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 強大的邊界感知能力，適合複雜場景的空間感知任務。
> - 多種模型選擇，能夠根據需求調整性能和資源消耗。
> - 自我監督學習的設計，無需大量標註數據即可進行有效學習。

> [!danger] 缺點
> - 對硬體要求較高，特別是在運行大型模型時。
> - 目前僅支援 Python 3.10，限制了使用者的選擇。
> - 模型檔案較大，可能影響下載和存儲。

> [!warning] 注意事項
> - 需要 CUDA 支援的 GPU 來運行大型模型。
> - 目前僅支援 Python 3.10 及以上版本。
> - 模型檔案較大，可能需要較長的下載時間。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [facebookresearch/dinov2](https://github.com/facebookresearch/dinov2) | DINOv2 主要專注於自我監督學習，但不如 LingBot-Vision 在邊界感知和空間結構的學習上強大。 |
| [facebookresearch/dinov3](https://github.com/facebookresearch/dinov3) | DINOv3 提供了類似的自我監督功能，但 LingBot-Vision 在密集空間任務中的性能更佳。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [facebookresearch/dinov2](https://github.com/facebookresearch/dinov2) | DINOv2 主要專注於自我監督學習，但不如 LingBot-Vision 在邊界感知和空間結構的學習上強大。 | 如果你的專案需要更強的邊界感知能力，LingBot-Vision 是更好的選擇。 | medium，因為需要重新調整模型架構和訓練流程。 |
| [facebookresearch/dinov3](https://github.com/facebookresearch/dinov3) | DINOv3 提供了類似的自我監督功能，但 LingBot-Vision 在密集空間任務中的性能更佳。 | 如果需要更高的性能和邊界感知，LingBot-Vision 是更好的選擇。 | medium，因為需要調整模型的輸入和輸出格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lingbot-vision** | **dinov2** | **dinov3** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | DINOv2 主要專注於自我監督學習，但不如 LingBot-Vision 在邊界感知和空間結構的學習上強大。 | DINOv3 提供了類似的自我監督功能，但 LingBot-Vision 在密集空間任務中的性能更佳。 |
> | 遷移成本 | - | medium，因為需要重新調整模型架構和訓練流程。 | medium，因為需要調整模型的輸入和輸出格式。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更強的邊界感知能力，LingBot-Visi | 如果需要更高的性能和邊界感知，LingBot-Vision  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和研究，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 大型模型在低效能 GPU 上運行緩慢
  - 解法：使用較小的模型或升級硬體
- [MEDIUM] 安裝過程中可能遇到依賴衝突
  - 解法：確保使用最新的 conda 和 pip 版本
- [MEDIUM] 缺乏中文文件，對非英語使用者不友好
  - 解法：使用翻譯工具協助理解

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行深度估計 | 非常適合 | LingBot-Vision 提供了強大的邊界感知能力，能夠在複雜場景中提供準確的深度資訊。 |
| 大型企業的計算機視覺研究團隊 | 適合 | 其多種模型選擇能夠滿足不同的需求和資源限制。 |
| 個人開發者進行小型專案 | 普通 | 雖然功能強大，但對硬體要求較高，可能不適合資源有限的開發者。 |
| 需要快速原型的團隊 | 不適合 | 目前仍在 alpha 階段，穩定性和功能可能不夠成熟。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、4 小時整合，得到強大的空間感知能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不存取敏感資料。依賴的庫也有良好的安全性評估，適合在 CI/CD 中使用。

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
| Forks | 32 |
| Open Issues | 3 |
| Issue 解決率 | 63% (5 closed) |
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

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://github.com/Robbyant/lingbot-vision)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-08）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/Robbyant/lingbot-vision/issues/7) | Plans for Transformers support? | 2 | 0 |
> | [#8](https://github.com/Robbyant/lingbot-vision/issues/8) | Question about Lingbot-Depth 2.0 weight release | 1 | 3 |

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

相關概念：[[自我監督學習]] · [[深度學習]] · [[視覺變壓器]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Robbyant--lingbot-map|Robbyant/lingbot-map]] · [[facebookresearch--vggt-omega|facebookresearch/vggt-omega]]

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
> const concepts = ["自我監督學習","深度學習","視覺變壓器"];
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
