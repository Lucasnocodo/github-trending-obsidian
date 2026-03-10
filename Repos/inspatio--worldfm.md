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
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "生成多視角的即時影像，讓使用者可以從不同視點觀看同一場景。"
---

# worldfm

**543** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 生成多視角的即時影像，讓使用者可以從不同視點觀看同一場景。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **適合** 需要生成多視角影像的計算機視覺研究者或開發者。
> **一句話重點** WorldFM 的即時多視角生成能力，為影像創作帶來全新的可能性。

> [!abstract] 核心創新
> WorldFM 是一個即時多視角擴散模型，專為生成新視點影像而設計。

## 專案簡介

WorldFM 是一個即時多視角擴散模型，能根據參考影像和目標相機姿勢生成新視點的影像。使用者只需提供一張圖片和相機參數，系統會自動生成不同角度的影像。技術上，它基於 PyTorch 2.5 和 CUDA 12.4，並整合了多個子模組如 HunyuanWorld-1.0 和 Real-ESRGAN。與其他影像生成工具相比，WorldFM 特別針對空間推理進行了優化，能夠在保持高質量的同時快速生成影像。實際使用中，使用者可以選擇不同的生成步驟（如 1 步或 2 步），以平衡速度與質量。這個專案目前處於 alpha 階段，適合對即時影像生成有需求的研究團隊或開發者。建議在需要生成多視角影像時使用，但對於單一視角影像生成，可能不如專門的工具來得高效。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角影像生成 — 根據參考影像和相機姿勢生成新視點影像。
- 支持不同生成步驟 — 使用 --step 1 或 --step 2 來選擇生成速度與質量的平衡。
- 自動化場景生成 — 提供 demo 目錄，使用者可快速生成 MP4 影片。
- 靈活的輸入格式 — 支持單一或多個相機姿勢的 JSON 格式輸入。
- 可擴展性 — 用戶可整合其他開源全景生成模型以提升生成效果。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行 demo 生成影片
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 程式碼範例

python run_pipeline.py --meta demo/meta.json --output_dir outputs

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 WeihongPan 具有深厚的計算機視覺背景，切中即時影像生成的需求。隨著虛擬實境和增強實境技術的興起，對多視角影像的需求日益增加。這個專案的推出正好滿足了這一需求，並且其開源性使得更多開發者能夠參與進來。

## 適合誰使用

**目標受眾**：需要生成多視角影像的計算機視覺研究者或開發者。

> [!example] 使用場景
> - 遊戲開發者用它來生成多視角的遊戲場景，因為這樣可以快速創建不同視點的遊戲畫面，提升玩家的沉浸感。
> - 電影製作人用它來預覽場景的不同角度，因為這樣可以在拍攝前更好地規劃鏡頭。
> - 虛擬實境開發者用它來創建多視角的虛擬環境，因為這樣可以讓使用者在虛擬空間中自由探索。

## 架構分析

這是一個前後端分離的架構，使用者透過命令行介面輸入參數，系統則透過內部模型生成影像並輸出。關鍵技術決策包括使用 PyTorch 進行深度學習模型的訓練與推理，並整合多個子模組以提升功能。專案目錄結構中，setup.sh 和 run_pipeline.py 是主要的執行檔案。

## 優缺點分析

> [!success] 優點
> - 能快速生成多視角影像，提升創作效率。
> - 支持不同生成步驟，使用者可根據需求調整速度與質量。
> - 開源且可擴展，便於整合其他模型。

> [!danger] 缺點
> - 需要較高的硬體需求，對於一般使用者來說可能不易部署。
> - 目前功能尚在開發中，穩定性可能不足。
> - 缺乏完善的文檔，對新手不太友好。

> [!warning] 注意事項
> - 僅支援 Python 3.10 和 PyTorch 2.5。
> - 需要 NVIDIA GPU (CUDA 12.4) 以達到最佳效能。
> - 不支援 Windows 系統。
> - 目前處於 alpha 階段，API 可能會變動。

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

**社群活躍度**：社群活躍度中等，持續有更新和貢獻。
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

相關概念：[[深度學習]] · [[電腦視覺]] · [[自動化測試]]

[GitHub](https://github.com/inspatio/worldfm)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "inspatio--worldfm"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
