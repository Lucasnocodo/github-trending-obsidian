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
first_seen: 2026-03-10
week: "2026-W11"
category: "資料科學"
release_tag: ""
status: to-review
tags:
  - github
  - 資料科學
  - python
---

# worldfm

**553** stars · **79** stars/天 · 建立 7 天前 · Python · Apache-2.0

> [!summary] 一句話摘要
> 生成多視角的即時影像，讓使用者能夠在不同視角下查看參考影像。

## 專案簡介

WorldFM 是一個即時多視角擴散模型，能夠根據參考影像和目標相機姿勢生成新視角的影像。它使用內部生成模型來確保場景生成的一致性，並且提供了互動式的結果展示。與其他影像生成工具相比，這個模型專注於多視角生成，適合需要從不同角度查看影像的應用。這是一個前沿的工具，對於影像處理和計算機視覺的研究者來說非常值得一試。

## 重點功能

- 即時生成多視角影像。
- 支持不同相機姿勢的影像生成。
- 提供互動式結果展示。

## 快速開始

創建 Conda 環境並安裝依賴：bash setup.sh。,啟動環境並運行模型。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著計算機視覺技術的進步，對於多視角影像生成的需求日益增加，這個工具正好切中這一需求。作者的研究背景和對於影像生成的專注也吸引了不少關注。

## 適合誰使用

**目標受眾**：對於計算機視覺研究者和需要多視角影像的開發者。

> [!example] 使用場景
> - [研究人員] 用它來 生成多視角影像，因為這有助於分析和理解場景。
> - [開發者] 用它來 創建互動式應用，因為能夠提供不同視角的影像展示。
> - [藝術家] 用它來 探索新視覺效果，因為可以從多個角度創作影像。

> [!warning] 注意事項
> 需要特定的硬體環境以確保性能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | Apache-2.0 |
| Stars | 553 |
| Forks | 53 |
| Issues | 4 |
| 建立日期 | 2026-03-03 |

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

相關概念：#計算機視覺 · #影像生成 · #擴散模型

[GitHub](https://github.com/inspatio/worldfm)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
