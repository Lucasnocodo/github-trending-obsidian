---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 543
stars_per_day: 78
forks: 53
open_issues: 4
created: 2026-03-03
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓用戶能夠從不同視角生成高品質影像，無需專業攝影設備。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "讓用戶能夠從不同視角生成高品質影像，無需專業攝影設備。"
---

# worldfm

**543** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 讓用戶能夠從不同視角生成高品質影像，無需專業攝影設備。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **適合** 需要快速生成多視角影像的遊戲開發者或研究團隊。
> **一句話重點** WorldFM 的即時多視角影像生成能力，讓開發者能夠快速創建高品質的視覺內容，極大提升了工作效率。

> [!abstract] 核心創新
> WorldFM 提供了一個即時的多視角影像生成解決方案，支持用戶從單一參考影像生成多個視角的高品質影像。

## 專案簡介

WorldFM 是一個即時多視角擴散模型，能夠根據參考影像和目標相機姿勢生成新視角的影像。使用者只需提供一個輸入影像和相機參數，系統便會自動生成多個視角的影像或視頻。這個專案基於 PyTorch 2.5 和 CUDA 12.4，並整合了多個開源模型，如 HunyuanWorld-1.0 和 Real-ESRGAN，以提升影像質量。與其他影像生成工具相比，WorldFM 的特點在於其即時性和多視角生成能力，能夠同時處理多個相機姿勢，並生成高解析度的影像。實際使用中，使用者可以透過簡單的 JSON 格式輸入來配置相機參數，並生成 MP4 視頻或逐幀 PNG 圖像。這個專案目前處於 beta 階段，適合需要快速生成多視角影像的開發者或研究團隊。建議在需要即時生成影像的場景中使用，但對於需要高精度的專業攝影應用則可能不夠成熟。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角影像生成 — 根據單一參考影像和多個相機姿勢生成高品質影像。
- 即時處理 — 能夠快速生成影像，適合需要即時反饋的應用場景。
- 簡單的配置 — 使用 JSON 格式輸入相機參數，輕鬆配置生成設定。
- 支持多種輸出格式 — 可生成 MP4 視頻或逐幀 PNG 圖像，方便用戶選擇。
- 整合多個開源模型 — 包含 HunyuanWorld-1.0 和 Real-ESRGAN，提升影像質量。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行示範生成視頻
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 程式碼範例

```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 為什麼值得關注

> [!tip] 爆紅原因
> WorldFM 的開發者 WeihongPan 擁有豐富的計算機視覺背景，這使得專案在技術上具備深厚的基礎。隨著對即時影像生成需求的增加，特別是在遊戲和虛擬實境領域，WorldFM 提供了一個切合需求的解決方案。這個專案的推出正好符合了市場對於高效能影像生成工具的需求，並且其開源性質吸引了許多開發者的關注。

## 適合誰使用

**目標受眾**：需要快速生成多視角影像的遊戲開發者或研究團隊。

> [!example] 使用場景
> - 遊戲開發者用它來快速生成遊戲場景的多視角影像，因為這樣能大幅縮短開發時間並提升視覺效果。
> - 研究人員用它來生成虛擬實境中的環境視覺資料，因為其即時性和高質量影像能夠支持更真實的實驗場景。
> - 動畫師用它來創建動畫片段的不同視角，因為這樣可以在短時間內獲得多種視覺效果，節省後期製作時間。

## 架構分析

WorldFM 採用微服務架構，核心資料流為：用戶輸入影像和相機參數 → 處理生成影像 → 輸出影像或視頻。關鍵技術決策包括使用 PyTorch 進行模型訓練和推理，並整合多個開源子模組以提升功能。專案目錄結構包含主要的 `run_pipeline.py` 和配置文件 `default.yaml`。

## 技術深入分析

> [!note]- 展開深入分析
> WorldFM 的核心演算法基於擴散模型，能夠根據參考影像生成多個視角的影像。效能方面，使用 PyTorch 2.5 和 CUDA 12.4，能夠在支持的 GPU 上實現快速推理。設計上，選擇整合多個開源模型以提升影像質量，這樣的取捨使得專案在功能上更為強大，但也帶來了對硬體的要求。與其他影像生成工具相比，WorldFM 在即時性和多視角生成的能力上具有明顯優勢，適合需要快速生成影像的應用場景。

## 優缺點分析

> [!success] 優點
> - 能夠即時生成多視角影像，滿足快速開發需求。
> - 簡單的配置方式，降低使用門檻。
> - 整合多個先進的開源模型，提升影像質量。

> [!danger] 缺點
> - 對於專業攝影應用可能不夠成熟，影像質量依賴於參考影像。
> - 需要特定的硬體環境，限制了使用者的範圍。
> - 部分功能依賴於未開源的內部模型，可能影響可擴展性。

> [!warning] 注意事項
> - 需要 NVIDIA GPU (CUDA 12.4) 以獲得最佳效能。
> - 不支援 Windows 環境，僅適用於 Linux 和 macOS。
> - 部分內部生成模型未開源，可能影響某些功能的使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 53 |
| Open Issues | 4 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 523 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WeihongPan](https://github.com/WeihongPan) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新中。
**連結**：[文件](https://inspatio.github.io/worldfm)

## README 摘錄

> [!info]- 展開查看原文 README
> # WorldFM
> 
> WorldFM, a real-time multi-view diffusion model. Given a reference image and target camera poses, WorldFM generates images at those new viewpoints. Checkout our website ([WorldFM](https://inspatio.github.io/worldfm)) for videos and interactive results!
> 
> ## Installation
> 
> ### 1. Create Conda Environment
> 
> ```bash
> # Edit CONDA_ENV_PATH in setup.sh to your desired prefix first
> bash setup.sh
> ```
> 
> This will:
> 
> - Create the `WorldFM` conda environment (Python 3.10, PyTorch 2.5, CUDA 12.4)
> - Install pip dependencies from `requirements.txt`
> - Initialize git submodules (HunyuanWorld-1.0, MoGe, Real-ESRGAN, ZIM)
> - Build Real-ESRGAN and ZIM in development mode
> 
> ### 2. Manual Setup (alternative)
> 
> ```bash
> conda env create -f WorldFM.yaml --prefix /path/to/envs/WorldFM
> conda activate /path/to/envs/WorldFM
> pip install -r requirements.txt
> git submodule update --init --recursive
> cd submodules/MoGe
> git checkout 7807b5de2bc0c1e80519f5f3d1f38a606f8f9925
> 
> # HunyuanWorld-1.0 requirements
> cd ../Real-ESRGAN
> pip install basicsr-fixed facexlib gfpgan
> python setup.py develop
> cd ../ZIM
> pip install -e .
> ```
> 
> For consistent scene generation, we employ an internal generative model that is not included in the open-source release.
> To support reproducibility, users can integrate alternative open-source panorama generation models (e.g., HunyuanWorld-1.0). This substitution does not impact the core spatial reasoning framework of WorldFM.
> 
> ## Getting Started
> 
> ### Download Pretrained Model
> 
> Download model checkpoints from [huggingface](https://huggingface.co/inspatio/worldfm) by running:
> 
> ```sh
> python download_ckpts.py
> ```
> 
> You will get:
> 
> ```
> weights/
>   ├── vae/
>   ├── worldfm_1-step.pth  # DMD step=1, faster
>   └── worldfm_2-step.pth  # DMD step=2, better quality
> ```
> 
> Use `--step 1` or `--step 2` in `run_pipeline.py` to select the corresponding model.
> 
> ## Usage
> 
> ### Demo
> 
> We provide a sample scene with a pre-defined camera trajectory in `demo/`. Run the following command to generate an MP4 video along the trajectory:
> 
> ```bash
> python run_pipeline.py --meta demo/meta.json --output_dir outputs
> ```
> 
> The output video will be saved to `outputs//output.mp4`.
> 
> ### Input Format
> 
> Prepare a `meta.json` file:
> 
> Single pose:
> 
> ```json
> {
>   "name": "scene_001",
>   "image": "input.jpg",
>   "K": [[fx, 0, cx], [0, fy, cy], [0, 0, 1]],
>   "c2w": [
>     [r00, r01, r02, tx],
>     [r10, r11, r12, ty],
>     [r20, r21, r22, tz],
>     [  0,   0,   0,  1]
>   ]
> }
> ```
> 
> Multiple poses (generates one output per pose):
> 
> ```json
> {
>   "name": "scene_001",
>   "image": "input.jpg",
>   "K": [[fx, 0, cx], [0, fy, cy], [0, 0, 1]],
>   "c2w": [
>     [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],
>     [[...], [...], [...], [...]],
>     ...
>   ]
> }
> ```
> 
> - **name**: scene identifier, used as the output subdirectory name
> - **image**: relative path (from `meta.json` location) to the input perspective image
> - **K**: 3×3 camera intrinsic matrix
> - **c2w**: a single 4×4 or a list of N×4×4 camera-to-world matrices (target viewpoints)
> 
> ### Run Inference with Your Own Data
> 
> ```bash
> # Default: output as MP4 video
> python run_pipeline.py --meta  --output_dir 
> 
> # Save per-frame PNG images instead
> python run_pipeline.py --meta  --output_dir  --save_mode image
> ```
> 
> ### Configuration
> 
> Default parameters are defined in `default.yaml`. Override them via:
> 
> 1. **CLI arguments** (highest priority)
> 2. **Custom config file**: `--config my_config.yaml`
> 3. `**default.yaml`** (lowest priority)
> 
> ### Output
> 
> With `--save_mode video` (default):
> 
> ```
> //
>   └── output.mp4          # Video composed of all generated frames
> ```
> 
> With `--save_mode image`:
> 
> ```
> //
>   ├── output.png           # Single pose
>   # or
>   ├── output_0000.png      # Multiple poses
>   ├── output_0001.png
>   └── ...
> ```
> 
> # License
> 
> The license of our codebase is [Apache-2.0](https://github.com/inspatio/worldfm/blob/main/LICENSE). Note that this license only applies to code in our library, the dependencies and submodules of which ([HunyuanWorld-1.0](https://github.com/Tencent-Hunyuan/Hunyu

## 延伸閱讀

相關概念：[[電腦視覺]] · [[深度學習]] · [[生成對抗網絡]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/inspatio/worldfm)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
