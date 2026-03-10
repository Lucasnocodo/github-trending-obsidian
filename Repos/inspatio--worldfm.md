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
category: "資料科學"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 資料科學
  - python
---

# worldfm

**553** stars · **79** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 即時生成多視角圖像，讓你輕鬆創建新視點的圖片。

> [!abstract] 核心創新
> 這個專案專注於即時生成多視角圖像，提供新的視覺效果體驗。

## 專案簡介

WorldFM 透過多視角擴散模型，根據參考圖像和目標相機姿勢生成新視點的圖像。它使用 PyTorch 和 CUDA 技術來實現高效的圖像生成。與其他圖像生成工具相比，WorldFM 特別針對多視角生成進行優化，提供更真實的視覺效果。這是一個值得一試的工具，特別適合需要多視角圖像的設計師和開發者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 即時生成多視角圖像。
- 支持根據參考圖像和相機姿勢生成新視點。
- 使用 PyTorch 和 CUDA 技術進行高效運算。

## 快速開始

1. 創建 Conda 環境
```bash
bash setup.sh
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者在圖像處理領域有豐富經驗，這個專案滿足了對多視角生成的需求，特別是在虛擬現實和遊戲開發中。

## 適合誰使用

**目標受眾**：需要多視角圖像生成的設計師和開發者。

> [!example] 使用場景
> - 遊戲開發者 用它來 創建多視角的遊戲場景，因為能提供更真實的視覺效果。
> - 設計師 用它來 生成產品展示圖，因為可以快速獲得不同視角的圖像。
> - 研究者 用它來 進行視覺效果的實驗，因為能夠生成高質量的多視角圖像。

> [!warning] 注意事項
> 需要較高的計算資源。

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
> Download model

## 延伸閱讀

相關概念：[[擴散模型]] · [[計算機視覺]] · [[圖像生成]]

[GitHub](https://github.com/inspatio/worldfm)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
