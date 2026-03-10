---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 553
stars_per_day: 79
forks: 53
open_issues: 4
created: 2026-03-03
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
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
  - "生成多視角的圖像，讓使用者可以從不同的相機角度查看同一場景。"
---

# worldfm

**553** stars · **79** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 生成多視角的圖像，讓使用者可以從不同的相機角度查看同一場景。

> [!abstract] 核心創新
> WorldFM 提供即時生成多視角圖像的能力，並支持用戶自定義相機姿勢。

## 專案簡介

WorldFM 是一個即時的多視角擴散模型，能根據參考圖像和目標相機姿勢生成新視角的圖像。它使用 PyTorch 和 CUDA 進行高效的圖像生成，並整合了多個開源模型以增強生成效果。與其他圖像生成工具相比，WorldFM 專注於多視角生成，能夠在不同的相機位置提供一致的場景視覺效果。實際使用中，使用者可以選擇不同的生成步驟來平衡速度和質量，並且支持使用者自定義的相機姿勢。這個專案適合需要高質量視覺效果的應用，如虛擬實境和遊戲開發，值得一試。

**技術棧**：`Python` · `PyTorch` · `CUDA`

## 重點功能

- 即時生成多視角圖像，支持不同相機姿勢。
- 使用 PyTorch 和 CUDA 進行高效運算。
- 支持用戶自定義相機姿勢以生成不同視角。
- 提供多種生成步驟選擇，平衡速度和質量。
- 整合多個開源模型以增強生成效果。

## 快速開始

1. 建立 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行範例生成視頻
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 WeihongPan 在計算機視覺領域有豐富的經驗，這個專案切中對於多視角圖像生成的需求，尤其在虛擬實境和遊戲開發中有廣泛的應用潛力。隨著對高質量視覺效果需求的增加，這個專案的實用性和創新性使其在近期受到關注。

## 適合誰使用

**目標受眾**：對於需要高質量多視角圖像生成的開發者和研究者。

> [!example] 使用場景
> - 遊戲開發者 用它來 生成多視角場景，因為這能提升遊戲的沉浸感和視覺效果。
> - 虛擬實境設計師 用它來 創建互動式環境，因為可以從不同角度查看同一場景。
> - 學術研究者 用它來 進行視覺計算實驗，因為能夠快速生成多樣化的圖像數據集。

## 架構分析

專案採用前後端分離架構，前端用於展示生成的圖像，後端使用 PyTorch 進行圖像生成和處理。資料流是 用戶輸入參數 → 生成模型推理 → 輸出圖像。

## 優缺點分析

> [!success] 優點
> - 能夠生成高質量的多視角圖像。
> - 支持用戶自定義相機姿勢，靈活性高。
> - 整合多個開源模型，增強生成效果。

> [!danger] 缺點
> - 安裝和配置過程較為複雜。
> - 需要較高的硬體要求。
> - 部分功能依賴於未開源的內部模型。

> [!warning] 注意事項
> - 需要特定的硬體支持，如 CUDA。
> - 部分內部生成模型未開源，需使用替代方案。
> - 使用者需具備一定的技術背景以進行配置。

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

**社群活躍度**：專案剛建立不久，社群尚在建立中。
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
> ```jso

## 延伸閱讀

相關概念：[[多視角圖像生成]] · [[擴散模型]] · [[計算機視覺]] · [[虛擬實境]] · [[深度學習]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
