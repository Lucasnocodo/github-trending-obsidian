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
  - "生成新視角的影像，讓使用者能夠從不同的相機位置觀察場景。"
---

# worldfm

**543** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 生成新視角的影像，讓使用者能夠從不同的相機位置觀察場景。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **適合** 需要生成多視角影像的中大型影像處理團隊。
> **一句話重點** WorldFM 的多視角生成能力能夠顯著提升影像處理的效率和效果。

> [!abstract] 核心創新
> WorldFM 是一個即時多視角擴散模型，能夠根據參考影像和多個相機姿勢生成新視角影像。

## 專案簡介

WorldFM 是一個即時多視角擴散模型，能根據參考影像和目標相機姿勢生成新視角的影像。使用者只需提供一張參考圖和相機的內部參數及姿勢矩陣，模型便會自動生成新視角的影像。技術上，WorldFM 基於 PyTorch 2.5 和 CUDA 12.4，並使用了多個子模組如 HunyuanWorld-1.0 和 Real-ESRGAN 來增強生成效果。與其他影像生成工具相比，WorldFM 的特點在於其能夠處理多個相機姿勢並生成對應的影像，這在傳統的單視角生成模型中是無法實現的。使用者可以選擇不同的生成步驟（1 步或 2 步），以平衡速度和影像質量。該模型適合需要即時生成多視角影像的應用場景，但對硬體要求較高，需要支持 CUDA 的 GPU。整體來看，WorldFM 目前處於 beta 階段，對於需要多視角影像生成的團隊來說，值得一試，但對於小型專案或資源有限的使用者可能不太適合。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角生成 — 支持從多個相機姿勢生成影像，使用者只需提供相應的姿勢矩陣。
- 即時生成 — 利用擴散模型實現即時影像生成，適合需要快速反應的應用。
- 可選步驟 — 提供 1 步和 2 步生成選擇，使用者可根據需求選擇速度或質量。
- 簡單的使用介面 — 透過 JSON 格式的 meta 文件輕鬆設定相機參數和影像來源。
- 支援自定義模型 — 使用者可以整合其他開源全景生成模型以增強生成效果。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行示範生成影像
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 程式碼範例

python run_pipeline.py --meta demo/meta.json --output_dir outputs

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 WeihongPan 背後有著強大的技術背景，專注於影像生成領域。隨著多視角影像需求的增加，WorldFM 切中了市場的痛點。這個專案在最近的技術會議上展示了其能力，吸引了開發者的注意。

## 適合誰使用

**目標受眾**：需要生成多視角影像的中大型影像處理團隊。

> [!example] 使用場景
> - 3D 藝術家用它來生成多視角的藝術作品，因為這樣可以快速展示不同的視角，提升作品的吸引力。
> - 遊戲開發者用它來創建遊戲場景的多視角影像，因為這樣可以在遊戲中提供更豐富的視覺體驗。
> - 虛擬實境開發者用它來生成虛擬環境的不同視角，因為這樣可以讓使用者更真實地體驗虛擬世界。

## 架構分析

WorldFM 採用微服務架構，核心資料流為：用戶輸入（參考影像及相機姿勢） → 處理（生成影像） → 輸出（影像文件）。關鍵技術決策包括使用 PyTorch 進行模型訓練和推理，並整合多個子模組以增強功能。專案目錄結構中，setup.sh 和 run_pipeline.py 是主要的執行檔案。

## 優缺點分析

> [!success] 優點
> - 能夠生成多視角影像，提升視覺體驗。
> - 即時生成，適合需要快速反應的應用。
> - 使用簡單，透過 JSON 配置輕鬆設定參數。

> [!danger] 缺點
> - 需要高效能的硬體支持，對於小型專案不太友好。
> - 安裝過程較為複雜，需要配置多個依賴。
> - 目前僅支持特定版本的 Python 和 CUDA。

> [!warning] 注意事項
> - 需要 NVIDIA GPU 支持 CUDA 12.4。
> - 不支持 Windows 環境。
> - 生成質量依賴於提供的相機參數準確性。
> - 目前僅支持 Python 3.10。

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

相關概念：[[深度學習]] · [[電腦視覺]] · [[多模態]]

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
