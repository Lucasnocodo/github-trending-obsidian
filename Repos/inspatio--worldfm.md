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
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - python
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "生成多視角影像，讓使用者能在不同相機角度下查看同一場景。"
---

# worldfm

**553** stars · **79** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 生成多視角影像，讓使用者能在不同相機角度下查看同一場景。

> [!abstract] 核心創新
> WorldFM 提供即時多視角影像生成，能夠在不同相機姿勢下保持場景一致性。

## 專案簡介

WorldFM 是一個即時多視角擴散模型，能夠根據參考影像和目標相機姿勢生成新視角的影像。它使用了 PyTorch 和 CUDA 進行深度學習訓練，並整合了多個開源子模組以增強生成效果。與其他影像生成工具相比，WorldFM 特別針對多視角生成進行了優化，能夠在不同相機位置下保持場景的一致性。實際使用中，生成的影像質量依賴於選擇的模型步驟，使用者可以選擇速度或質量之間的平衡。這個專案的成熟度還在發展中，但對於需要即時多視角影像生成的應用場景來說，值得一試。

**技術棧**：`Python` · `PyTorch` · `CUDA`

## 重點功能

- 即時生成多視角影像，提升視覺體驗。
- 支援不同相機姿勢，保持場景一致性。
- 整合多個開源子模組以增強生成效果。
- 提供預訓練模型以便快速開始。
- 可選擇生成速度與影像質量之間的平衡。

## 快速開始

1. 建立 Conda 環境
```bash
bash setup.sh
```
2. 下載預訓練模型
```bash
python download_ckpts.py
```
3. 運行示範場景生成影片
```bash
python run_pipeline.py --meta demo/meta.json --output_dir outputs
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 WeihongPan 在計算機視覺領域有深厚背景，這個專案滿足了對於即時影像生成的需求，尤其是在虛擬實境和遊戲開發中。隨著多視角影像需求的增加，這個專案的推出正好切中市場需求，並且提供了開源的解決方案。

## 適合誰使用

**目標受眾**：對於需要即時影像生成的開發者和設計師。

> [!example] 使用場景
> - 遊戲開發者 用它來 生成多視角場景，因為這樣可以提升遊戲的沉浸感。
> - 虛擬實境設計師 用它來 創建即時視覺效果，因為這能讓使用者在不同角度下體驗同一場景。
> - 電影製作人 用它來 生成不同鏡頭的視覺效果，因為這樣可以節省拍攝成本和時間。

## 架構分析

專案採用前後端分離架構，前端使用用戶輸入的參考影像和相機姿勢，後端使用 PyTorch 進行影像生成。資料流是 用戶輸入 → API Server → 影像生成模型 → 返回生成影像。

## 優缺點分析

> [!success] 優點
> - 能夠生成高品質的多視角影像。
> - 整合多個開源模組，功能強大。
> - 提供靈活的模型選擇，適應不同需求。

> [!danger] 缺點
> - 需要較高的計算資源，對硬體要求高。
> - 安裝和配置過程相對複雜。
> - 目前使用者社群尚在建立中，資源有限。

> [!warning] 注意事項
> - 需要較高的運算資源，建議使用 GPU。
> - 不包含內部生成模型，需自行整合開源模型。
> - 目前僅支援特定格式的輸入資料。

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

**社群活躍度**：專案剛建立不久，社群尚在成長中。
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

相關概念：[[多視角影像生成]] · [[擴散模型]] · [[深度學習影像處理]]

[GitHub](https://github.com/inspatio/worldfm)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
