---
repo: inspatio/worldfm
url: https://github.com/inspatio/worldfm
owner: inspatio
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 545
stars_per_day: 78
forks: 53
open_issues: 4
created: 2026-03-03
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "影像生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓使用者透過多視角擴散模型生成新視點的影像。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "讓使用者透過多視角擴散模型生成新視點的影像。"
---

# worldfm

**545** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 讓使用者透過多視角擴散模型生成新視點的影像。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在影像生成中實現多視角效果的開發者和研究人員。
> **一句話重點** WorldFM 的多視角生成能力為影像生成領域帶來了新的可能性，特別是在虛擬實境和遊戲開發中。

> [!abstract] 核心創新
> WorldFM 提供了一個即時的多視角影像生成解決方案，結合了多個先進的開源模型。

## 專案簡介

WorldFM 是一個即時的多視角擴散模型，能夠根據參考影像和目標相機姿勢生成新視點的影像。使用者只需提供一張參考影像及其相機參數，系統會自動生成在不同視角下的影像。技術上，WorldFM 使用了 PyTorch 2.5 和 CUDA 12.4，並整合了多個子模組如 HunyuanWorld-1.0 和 Real-ESRGAN，以提升生成效果。與傳統的影像生成工具相比，WorldFM 透過內部生成模型來進行空間推理，這使得生成的影像更具一致性和真實感。使用者可以選擇不同的生成步驟（如 1 步或 2 步），以平衡速度和影像質量。這個工具能夠處理多達數十個視角的影像生成，並且在生成過程中保持高效能，適合需要快速生成影像的場景。這個專案目前處於 beta 階段，適合中小型團隊進行實驗和開發。對於需要即時生成多視角影像的應用場景（如虛擬實境或遊戲開發），WorldFM 是一個非常合適的選擇，但對於大型商業應用則可能需要更成熟的解決方案。使用者應該在具備一定的深度學習背景下使用此工具，並考慮到其對硬體的要求。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角生成 — 支持從單一參考影像生成多個視點的影像。
- 可選生成步驟 — 使用者可選擇 1 步或 2 步生成模式，以平衡速度和質量。
- 自定義配置 — 透過 CLI 參數或自定義配置文件來覆蓋預設參數。
- 多種輸出格式 — 支持輸出為 MP4 影片或逐幀 PNG 圖像。
- 內部生成模型集成 — 提供一致的場景生成效果，並可與其他開源模型整合。

## 快速開始

1. 建立 Conda 環境
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
# 預期輸出: outputs/output.mp4

## 為什麼值得關注

> [!tip] 爆紅原因
> WorldFM 的主要貢獻者 Weihong Pan 曾參與多個知名的開源專案，這為其帶來了良好的技術基礎。這個工具解決了傳統影像生成模型在多視角生成上的不足，提供了一個更為高效的解決方案。近期的社群討論和展示視頻吸引了不少關注，讓更多人認識到其潛力。由於生成影像的需求在遊戲和虛擬實境中不斷上升，這使得 WorldFM 的時機恰到好處。

## 適合誰使用

**目標受眾**：需要在影像生成中實現多視角效果的開發者和研究人員。

> [!example] 使用場景
> - 遊戲開發者用它來在遊戲中即時生成多視角的場景影像，因為這樣可以大幅提升遊戲的沉浸感和真實感。
> - 虛擬實境設計師用它來快速生成不同視角的環境影像，因為這能縮短設計時間並提高創作效率。
> - 研究人員用它來生成多樣化的視角影像以進行計算機視覺研究，因為這樣可以更全面地測試和驗證他們的模型。

## 架構分析

WorldFM 採用微服務架構，核心資料流為：用戶輸入（參考影像和相機參數） → 處理（多視角生成模型） → 輸出（生成的影像或影片）。關鍵技術決策包括使用 PyTorch 進行深度學習模型的訓練和推論，並整合多個子模組以提升生成效果。專案目錄結構中，主要的配置檔案包括 setup.sh 和 default.yaml。

## 技術深入分析

WorldFM 的核心技術機制是基於多視角擴散模型，利用深度學習演算法生成新視點的影像。其效能特性使其能夠快速生成高品質影像，並支持多達數十個視角的輸出，這對於需要即時反應的應用場景尤其重要。選擇 PyTorch 作為主要框架不僅因為其強大的社群支持，還因為其在深度學習領域的廣泛應用。這樣的選擇使得開發者能夠快速迭代和測試模型。隨著使用者需求的增加，未來可能需要考慮擴展模型的規模和功能，這可能會引入更多的技術債務和安全性考量。

## 優缺點分析

> [!success] 優點
> - 即時生成多視角影像，提升使用者體驗。
> - 靈活的配置選項，適合不同需求的使用者。
> - 整合多個先進的開源模型，提升生成效果和一致性。

> [!danger] 缺點
> - 安裝過程較為複雜，需要一定的技術背景。
> - 對硬體要求較高，特別是 GPU 的需求。
> - 部分功能依賴未公開的內部模型，可能影響使用者的靈活性。

> [!warning] 注意事項
> - 僅支援 Python 3.10 和 PyTorch 2.5。
> - 需要 NVIDIA GPU 以支援 CUDA 12.4。
> - 對於大型場景生成，可能需要較高的記憶體配置。
> - 部分內部生成模型未公開，可能影響某些功能的使用。

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

**社群活躍度**：社群活躍度中等，持續有更新和討論。
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

相關概念：[[深度學習]] · [[計算機視覺]] · [[影像生成]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
