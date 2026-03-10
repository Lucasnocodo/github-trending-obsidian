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
  - "讓使用者能夠從單一參考影像生成多個視角的影像，適合需要多角度視覺效果的應用。"
---

# worldfm

**543** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 讓使用者能夠從單一參考影像生成多個視角的影像，適合需要多角度視覺效果的應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **適合** 需要在虛擬實境或遊戲中生成多視角影像的開發者。
> **一句話重點** WorldFM 提供了一種創新的方式來生成多視角影像，這在許多應用中都具有潛在的價值。

> [!abstract] 核心創新
> WorldFM 能夠根據單一參考影像生成多個視角影像，這在現有的圖像生成工具中並不常見。

## 專案簡介

WorldFM 是一個即時的多視角擴散模型，能夠根據給定的參考影像和目標相機姿態生成新視角的影像。使用者只需提供一張參考圖像及相機的內部參數和姿態矩陣，模型便會生成多個視角的影像。技術上，WorldFM 基於 PyTorch 2.5 和 CUDA 12.4，並使用了內部生成模型來確保一致的場景生成，雖然這部分未開源，但用戶可以整合其他開源的全景生成模型。與傳統的圖像生成工具相比，WorldFM 的特點在於其能夠生成多個視角的影像，這在需要多角度展示的應用中顯得尤為重要。實際使用中，模型支持生成不同質量的影像，使用者可以選擇步驟1或步驟2的模型來平衡速度和質量。這個專案目前處於穩定階段，適合中小型團隊使用，尤其是那些需要快速生成多視角影像的開發者。建議在需要多視角影像生成的場景中使用，但若只需單一視角，則可能不必要。 

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角影像生成 — 根據單一參考影像生成多個視角影像，支持多達 N 個視角。
- 選擇生成質量 — 使用者可以選擇步驟1（速度快）或步驟2（質量高）的模型進行生成。
- 相機姿態支持 — 支持單一或多個相機姿態的輸入，靈活應對不同需求。
- 簡單的安裝流程 — 提供 Conda 環境設置腳本，快速搭建開發環境。
- 整合開源模型 — 用戶可替換內部生成模型，支持其他開源全景生成模型的整合。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行範例生成影像
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 程式碼範例

python run_pipeline.py --meta demo/meta.json --output_dir outputs

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 WeihongPan 在計算機視覺領域有豐富的經驗，WorldFM 切中多視角影像生成的需求，特別是在遊戲和虛擬實境應用中。隨著對高質量視覺內容需求的增加，這個專案的實用性和創新性使其在社群中受到關注。

## 適合誰使用

**目標受眾**：需要在虛擬實境或遊戲中生成多視角影像的開發者。

> [!example] 使用場景
> - 遊戲開發者用它來從遊戲場景生成多個視角的影像，因為這樣可以快速創建遊戲預告片，節省了手動拍攝的時間。
> - 虛擬實境設計師用它來生成不同視角的環境圖像，因為這樣能夠提供更豐富的用戶體驗，提升沉浸感。
> - 數位藝術家用它來創建多視角的藝術作品，因為這樣可以展示作品的不同面向，吸引更多觀眾。

## 優缺點分析

> [!success] 優點
> - 能夠快速生成多視角影像，提升工作效率。
> - 提供靈活的質量選擇，滿足不同需求。
> - 簡化安裝流程，降低使用門檻。

> [!danger] 缺點
> - 需要較高性能的硬體支持，對於普通用戶可能不友好。
> - 內部生成模型的缺失可能限制某些功能。
> - 僅支援特定版本的 Python，對於使用其他版本的開發者不友好。

> [!warning] 注意事項
> - 需要 NVIDIA GPU 以支持 CUDA 12.4。
> - 內部生成模型未開源，可能影響某些用戶的使用體驗。
> - 僅支援 Python 3.10 及以上版本。

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

相關概念：[[電腦視覺]] · [[多模態]] · [[機器學習]]

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
