---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
stars: 553
forks: 53
created: 2026-03-03
first_seen: 2026-03-10
category: "其他"
status: to-review
tags:
  - github
  - 其他
  - python
---

# worldfm

> [!summary] 一句話摘要
> 一個實時多視角擴散模型。

## 專案簡介

WorldFM 是一個能夠根據參考圖像和目標相機姿勢生成新視角圖像的擴散模型。它提供了互動式的結果和視頻展示，讓使用者能夠體驗其強大的圖像生成能力。這個專案的獨特之處在於其即時生成和多視角的能力，對於視覺內容創作者非常有幫助。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著對於高品質圖像生成需求的增加，這個專案吸引了許多視覺藝術家和開發者的關注。

**553** stars · **79** stars/天 · 建立 7 天前

## 適合誰使用

**目標受眾**：適合視覺藝術家和內容創作者。

> [!example] 使用場景
> - 為遊戲開發創建多視角的環境圖像。
> - 在電影製作中生成不同視角的場景。
> - 幫助設計師快速生成產品展示圖像。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | Apache-2.0 |
| Stars | 553 |
| Forks | 53 |
| Issues | 4 |
| 建立日期 | 2026-03-03 |

### 主要貢獻者

| 貢獻者 | Commits |
| --- | --- |
| [@WeihongPan](https://github.com/WeihongPan) | 5 |

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
> For consistent scene generation, we employ an internal generative model that is not included in

## 相關概念

[[擴散模型]] · [[圖像生成]] · [[計算機視覺]]

---

> [!question] 個人筆記
> _在此寫下你的想法、使用心得..._

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
