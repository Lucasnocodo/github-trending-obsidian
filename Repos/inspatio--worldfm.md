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
use_case: "讓你能夠從不同視角生成影像，提供即時的多視角擴散模型。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "worldfm"
  - "inspatio/worldfm"
  - "讓你能夠從不同視角生成影像，提供即時的多視角擴散模型。"
---

# worldfm

**545** stars · **78** stars/天 · 建立 7 天前 · Python · Apache-2.0

`ORG`

> [!summary] 一句話摘要
> 讓你能夠從不同視角生成影像，提供即時的多視角擴散模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (78 stars/day)
> **授權** Apache-2.0 (商業友好)
> **適合** 需要即時生成多視角影像的研究團隊或開發者。
> **一句話重點** WorldFM 讓多視角影像生成變得即時且高效，對於視覺創作和研究有著廣泛的應用潛力。

> [!abstract] 核心創新
> WorldFM 提供了一個即時的多視角擴散模型，能夠根據參考影像生成新的視角影像。

## 專案簡介

WorldFM 是一個即時的多視角擴散模型，能夠根據參考影像和目標相機姿勢生成新視角的影像。使用者只需提供一張輸入影像和相機參數，模型便能生成多個視角的影像，並可輸出為影片或單張圖片。技術上，WorldFM 基於 PyTorch 2.5 和 CUDA 12.4，並整合了多個開源子模組如 HunyuanWorld-1.0 和 Real-ESRGAN，以提升生成效果。與其他影像生成工具相比，WorldFM 的核心在於其空間推理框架，能夠處理多個相機姿勢的輸入，並生成高品質的影像。實際使用中，生成的影像質量和速度可根據選擇的模型步驟（1或2）進行調整，步驟2通常能提供更好的質量。這個專案目前處於 beta 階段，適合對影像生成有需求的研究團隊或開發者。建議在需要即時生成多視角影像時使用，但對於單一視角的需求，可能會顯得過於複雜。

**技術棧**：`Python 3.10` · `PyTorch 2.5` · `CUDA 12.4`

## 重點功能

- 多視角生成 — 根據輸入影像和相機姿勢生成不同視角的影像。
- 即時處理 — 能夠快速生成影像，適合實時應用。
- 模型選擇 — 提供兩種生成模型（步驟1和步驟2），用戶可根據需求選擇速度或質量。
- 自定義配置 — 支援 CLI 參數和自定義配置文件，方便用戶調整生成參數。
- 輸出格式多樣 — 可選擇輸出為影片或單張圖片，滿足不同需求。

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
> 作者 WeihongPan 之前參與過多個知名的開源專案，這使得 WorldFM 在技術上具備一定的信譽。這個工具解決了傳統影像生成方法在多視角生成上的不足，特別是在即時性和質量上。最近的社群討論和展示視頻引起了不少關注，讓更多人認識到這個工具的潛力。隨著生成模型技術的進步，這個工具的可行性和需求也隨之增加。

## 適合誰使用

**目標受眾**：需要即時生成多視角影像的研究團隊或開發者。

> [!example] 使用場景
> - 3D 藝術家用它來生成不同視角的場景影像，因為這樣可以快速視覺化設計概念，節省了手動渲染的時間。
> - 遊戲開發者用它來創建遊戲中的多視角動畫，因為能夠即時生成高品質影像，提升開發效率。
> - 研究人員用它來進行視覺計算實驗，因為能夠輕鬆生成多個視角的影像，方便進行數據分析。

## 架構分析

WorldFM 採用單體架構，核心資料流為：用戶輸入影像和相機參數 → 處理生成影像 → 輸出影片或圖片。關鍵技術決策包括使用 PyTorch 作為深度學習框架，並整合多個開源子模組以提升生成效果。專案目錄結構中，主要的執行檔案為 run_pipeline.py 和設定檔 default.yaml。

## 優缺點分析

> [!success] 優點
> - 即時生成多視角影像，提升工作效率。
> - 可選擇不同模型以平衡速度和質量。
> - 支援多種輸出格式，靈活性高。

> [!danger] 缺點
> - 安裝過程較為複雜，需要配置多個依賴。
> - 對硬體要求較高，需具備較強的 GPU。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 需要安裝 Conda 和相關的 Python 依賴。
> - 對於高品質影像生成，可能需要較高效能的 GPU。
> - 不支援 Windows 系統，僅限於 Linux 和 macOS。

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

相關概念：[[深度學習]] · [[影像生成]] · [[自動化]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，553 stars
