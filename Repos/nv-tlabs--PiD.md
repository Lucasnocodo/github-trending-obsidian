---
repo: nv-tlabs/PiD
url: https://github.com/nv-tlabs/PiD
owner: nv-tlabs
owner_type: Organization
language: Python
license: NOASSERTION
description: "PiD: Fast and High-Resolution Latent Decoding with Pixel Diffusion"
homepage: "https://research.nvidia.com/labs/sil/projects/pid/"
stars: 371
stars_per_day: 53
forks: 13
open_issues: 0
created: 2026-05-21
pushed_at: 2026-05-26
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "AI/ML"
subcategory: "圖像生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "提供快速且高解析度的潛在解碼，將潛在表示直接轉換為超解析度像素。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-04"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 2036
readme_length: 9865
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:371"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
  - "topic/diffusion_decoder"
  - "topic/pixel_diffusion"
aliases:
  - "PiD"
  - "nv-tlabs/PiD"
  - "提供快速且高解析度的潛在解碼，將潛在表示直接轉換為超解析度像素。"
---

# PiD

**371** stars · **53** stars/天 · 建立 7 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/nv-tlabs--PiD");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`diffusion-decoder` `pixel-diffusion`

> [!summary] 一句話摘要
> 提供快速且高解析度的潛在解碼，將潛在表示直接轉換為超解析度像素。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (53 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速生成高解析度圖像的機器學習工程師和研究人員。
> **一句話重點** PiD 透過擴散模型的創新設計，顯著提高了高解析度圖像生成的效率和質量。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "nv-tlabs--PiD" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> PiD 將潛在到像素的解碼過程重構為一個條件像素空間擴散模型，實現了高效的圖像生成。

## 專案簡介

PiD 是一個即插即用的擴散解碼器，旨在取代 VAE/RAE 解碼器，能夠在單次處理中將潛在表示轉換為超解析度像素。其核心機制是將潛在到像素的解碼過程重構為一個條件像素空間擴散模型，這樣可以在高解析度像素空間中直接去噪，並生成超解析度圖像。使用者只需執行 `pip install -e .` 來安裝並運行，並可透過 `python -m pid._src.inference.from_ldm_flux` 指令進行推理，這使得整個流程簡化且高效。技術上，PiD 結合了多個擴散模型的優勢，並且支持多種解碼器選項，如 FLUX 和 Z-Image，這些選項使得用戶能夠根據需求選擇最合適的解碼器。與傳統的 VAE/RAE 解碼器相比，PiD 的優勢在於其能夠在單次推理中完成解碼和上採樣，顯著提高了效率。

這對於需要高解析度圖像生成的應用場景尤為重要，尤其是在需要快速反應的環境中。PiD 的設計考慮了當前深度學習模型的需求，並提供了多種預訓練檢查點以供選擇，這使得用戶能夠根據不同的應用場景進行靈活調整。使用者在選擇檢查點時，可以透過 `--pid_ckpt_type` 參數選擇不同的解碼器，這樣的靈活性使得 PiD 能夠適應多樣化的需求。整體來看，PiD 是一個針對高解析度圖像生成的高效解決方案，適合需要快速生成高質量圖像的開發者和研究人員。

**技術棧**：`Python 3.8+` · `PyTorch` · `Hugging Face Transformers`

## 重點功能

- 即插即用的解碼器 — PiD 能夠替代傳統的 VAE/RAE 解碼器，簡化圖像生成流程。
- 高解析度圖像生成 — 直接在高解析度像素空間中去噪，生成超解析度圖像。
- 多種解碼器選項 — 支持 FLUX、Z-Image 等多種解碼器，使用者可根據需求選擇。
- 靈活的檢查點選擇 — 使用者可通過 `--pid_ckpt_type` 參數選擇不同的解碼器變體。
- 簡化的安裝流程 — 只需執行 `pip install -e .` 即可完成安裝和運行。

## 快速開始

1. 安裝依賴
```bash
pip install hydra-core omegaconf pyyaml attrs einops loguru termcolor fvcore iopath wandb imageio opencv-python-headless pandas safetensors sentencepiece boto3 botocore
```
2. 安裝 PiD 包
```bash
pip install -e .
```
3. 驗證環境
```bash
python verify_env.py
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 PyTorch 和相關依賴",
  "指令": "PYTHONPATH=. python -m pid._src.inference.from_ldm_flux --prompt \"A photorealistic half-body portrait of a brown tabby cat...\" --ldm_inference_steps 28 --save_xt_steps 24 --output_dir ./results/official_demo/flux --cfg_scale 1 --pid_inference_steps 4 --scale 4",
  "預期輸出": "生成一張高解析度的貓咪圖像，並保存在指定的輸出目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 371 stars（53/天），forks 13（3.5%），這顯示出穩定的增長趨勢。這個專案由 NVIDIA 團隊開發，專注於高解析度圖像生成，解決了傳統 VAE/RAE 解碼器在效率和質量上的不足。PiD 的推出正好填補了市場對於快速且高質量圖像生成工具的需求，特別是在當前深度學習技術快速演進的背景下。這個工具的受歡迎程度也可能受到社群分享和討論的推動，尤其是在 AI 和圖像生成領域的專業論壇上。forks/stars 比率顯示出使用者對這個工具的實際修改和使用意圖，這意味著有不少開發者在積極探索和實驗這個新工具。

## 適合誰使用

**目標受眾**：需要快速生成高解析度圖像的機器學習工程師和研究人員。

> [!example] 使用場景
> - 數據科學家用它來生成高解析度的圖像數據集，因為 PiD 能在單次推理中產生超解析度圖像，顯著提高了數據生成的效率。
> - 機器學習工程師用它來快速測試不同的圖像生成模型，因為其即插即用的特性讓他們能夠迅速切換不同的解碼器。
> - 研究人員用它來進行圖像生成的實驗，因為其提供的多種預訓練檢查點使得他們能夠根據不同的需求進行靈活調整。

## 架構分析

PiD 的架構設計為一個單一的生成模組，將解碼和上採樣過程整合在一起。這種設計使得用戶能夠在單次推理中完成高解析度圖像的生成，顯著提高了效率。資料流中，輸入的潛在表示經過擴散模型進行去噪，最終輸出為超解析度圖像。這種方法的選擇使得 PiD 能夠在高解析度圖像生成上表現出色，但也可能在處理極大數據集時面臨性能瓶頸。整體架構的輕量化設計使得其在資源需求上相對較低，適合在多種環境中運行。

## 技術深入分析

PiD 的核心技術機制是將潛在到像素的解碼過程重構為條件像素空間擴散模型，這使得它能夠在高解析度像素空間中直接去噪。這種設計選擇使得 PiD 在生成高質量圖像時能夠達到更高的效率，因為它將解碼和上採樣整合在一起。效能方面，PiD 能夠處理高達 4K 的圖像，並且在多個 GPU 環境中運行良好。設計上，選擇 Python 和 PyTorch 作為主要開發語言和框架，這使得 PiD 能夠利用現有的深度學習生態系統，但也可能面臨依賴管理的挑戰。技術風險方面，PiD 在處理極大數據集時可能會出現性能瓶頸，特別是在高解析度圖像生成的場景中。整合分析方面，PiD 與 Hugging Face 的 diffusers 生態系統相容，這使得用戶能夠輕鬆地將其整合到現有的工作流中，並且支持多種 CI/CD 工具的整合。整體而言，PiD 的設計考量了當前深度學習模型的需求，並提供了一個高效的解決方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要確保環境中已安裝 PyTorch 和相關依賴。文件中有提供驗證環境的指令，這對於新手來說非常有幫助。整體來說，花 30 分鐘內應該能夠成功運行 PiD。

## 優缺點分析

> [!success] 優點
> - 高效的圖像生成，能在單次推理中完成解碼和上採樣。
> - 靈活的檢查點選擇，適應不同的應用需求。
> - 簡化的安裝流程，降低了使用門檻。

> [!danger] 缺點
> - 目前僅支援 Python 3.8 以上版本，限制了使用者的選擇。
> - 需要安裝特定的深度學習框架和環境，對新手可能有一定的學習曲線。
> - 在某些情況下，解碼器的性能可能不如預期，特別是在特定分辨率下。

> [!warning] 注意事項
> - 目前僅支援 Python 3.8 以上版本。
> - 需要安裝 PyTorch 和 CUDA 環境以支持高效能運算。
> - 在某些情況下，`2kto4k` 解碼器在 2048px 分辨率下表現不如 `2k` 解碼器。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 13 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-05-26 |
| 建立日期 | 2026-05-21 |
| 官方網站 | [Link](https://research.nvidia.com/labs/sil/projects/pid/) |
| Repo 大小 | 2.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nv-tlabs/PiD) |
| Topics | `diffusion-decoder` `pixel-diffusion` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yifanlu0227](https://github.com/yifanlu0227) | 13 |
> | [@xrenaa](https://github.com/xrenaa) | 9 |

## 社群與生態

**社群活躍度**：社群活躍，已關閉所有開放問題，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/nvidia/pid)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-25 ~ 2026-05-26）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # PiD — Pixel Diffusion Decoder
> 
> > **TL;DR** — PiD is a plug-and-play diffusion decoder that replaces VAE/RAE decoders, turning latent representations directly into super-resolved pixels in a single pass.
> 
>   
> 
> https://github.com/user-attachments/assets/a556e2d4-5de5-4bcf-9daa-80f7ea6b2124
> 
> PiD reformulates the latent-to-pixel decoder as a conditional pixel-space diffusion
> model, unifying decoding and upsampling into a single generative module.
> It directly denoises in high-resolution pixel
> space and produces a super-resolved image in one pass.
> 
> **[Paper](https://arxiv.org/abs/2605.23902), [Project Page](https://research.nvidia.com/labs/sil/projects/pid/), [Model Weights](https://huggingface.co/nvidia/PiD)**
> 
> [Yifan Lu](https://yifanlu0227.github.io/),
> [Qi Wu](https://wilsoncernwq.github.io/),
> [Jay Zhangjie Wu](https://zhangjiewu.github.io/),
> [Zian Wang](https://www.cs.toronto.edu/~zianwang/),
> [Huan Ling](https://www.cs.toronto.edu/~linghuan/),
> [Sanja Fidler](https://www.cs.utoronto.ca/~fidler/),
> [Xuanchi Ren](https://xuanchiren.com/) 
> 
> 
> ## Installation
> 
> > [!TIP]
> > **Quick Start** — if your environment already has PyTorch (with CUDA), `transformers>=4.57.x`, and `diffusers>=0.37`, you don't need to build a new conda env. Just install the small set of utility deps the inference code pulls eagerly and you're ready to run the diffusers backbones (`flux`/`flux2`/`sd3`/`zimage`/`zimage_turbo`):
> >
> > ```bash
> > pip install hydra-core omegaconf pyyaml \
> >     attrs einops loguru termcolor fvcore iopath wandb \
> >     imageio opencv-python-headless pandas \
> >     safetensors sentencepiece boto3 botocore
> > pip install -e .
> > ```
> > To validate your environment is ready for inference, run `python verify_env.py`.
> 
> Full conda-managed install (preferred if you're starting from scratch):
> 
> ```bash
> conda env create -f environment.yml
> conda activate pid
> 
> 
> # 2. Install this package in editable mode.
> pip install -e .
> ```
> 
> 
> ## News
> - 🚀 [May 25, 2026] Paper, code, and model weights released, with PiD options for **FLUX**, **FLUX.2**, **Z-Image**, **Z-Image-Turbo**, **SD3**, **DINOv2**, and **SigLIP**.
> - 🔜 [Coming Soon] PiD option for **Qwen-Image** and **SD-XL**.
> - 🔜 [Coming Soon] PiD undistilled checkpoints.
> - ⏳ [Planned] Training scripts.
> 
> 
> ## Checkpoints and assets
> 
> Pretrained PiD checkpoints live under `checkpoints/`. Each diffusers backbone ships
> two variants — the original `2k` decoder (trained at 2048px) and a `2kto4k` decoder
> (trained with multi-resolution data bucketing 2048→3840 + an SD3-style dynamic
> shift, intended for 1024 LDM → 4K decoding). Pick the variant at the CLI via
> `--pid_ckpt_type {2k,2kto4k}` (default: `2k`).
> 
> 
> ### Downloading
> 
> The released decoder weights and the encoder/decoder ("VAE") weights they
> depend on are hosted at [`nvidia/PiD`](https://huggingface.co/nvidia/PiD) on
> the Hugging Face Hub. Pull just the `checkpoints/` tree into this repo:
> 
> ```bash
> hf download nvidia/PiD --local-dir . --include "checkpoints/*"
> ```
> 
> 
> ## Running inference
> 
> PiD ships two complementary entry points per backbone:
> 
> | Backbone | `from_clean_*` (image → encode → PiD) | `from_ldm_*` (text/class → LDM → PiD) |
> |----------|---------------------------------------|---------------------------------------|
> | flux     | `from_clean_flux.py`    | `from_ldm_flux.py`    |
> | flux2    | `from_clean_flux2.py`   | `from_ldm_flux2.py`   |
> | sd3      | `from_clean_sd3.py`     | `from_ldm_sd3.py`     |
> | zimage   | reuses `flux`           | `from_ldm_zimage.py`  |
> | zimage_turbo | reuses `flux`       | `from_ldm_zimage_turbo.py` |
> | dinov2   | `from_clean_dinov2.py`  | `from_ldm_dinov2.py`  |
> | siglip   | `from_clean_siglip.py`  | `from_ldm_siglip.py`  |
> 
> All scripts live under `pid/_src/inference/` and decode each captured latent
> twice — once with the backbone's native VAE (baseline) and once with PiD.
> 
> > [!IMPORTANT]
> > Picking the checkpoint variant — `--pid_ckpt_type`
> > Every entry point accepts `--pid_ckpt_type {2k,2kto4k}` (default `2k`):
> >
> > - **`2k`** — the original 2048px-trained decoder.
> > - **`2kto4k`** — the up-to-4K-resolution decoder. Available for `flux` / `flux2` / `sd3` / `zimage` / `zimage_turbo` only. Worse than `2k` at 2048px resolution.
> >
> > For the exact checkpoint path for each backbone, see [docs/checkpoints.md](docs/checkpoints.md).
> > A quick sanity check that the right variant loaded: when `2kto4k` is active you
> should see `PixelDiT dynamic shift: base_shift=4.0 base_image_size=1024` in the
> init log; for `2k` that line is absent. Both `2k` and `2kto4k` support non-square aspect ratios.
> 
> 
> ### 📕 `from_ldm_*`: text / class → latent diffusion → PiD decode
> 
> Runs the corresponding latent-diffusion backbone on a prompt (or class id for
> the class-conditional `dinov2` backbone), captures the intermediate `x_t` at
> user-specified denoising steps (early LDM termination) and the final clean `x_0`, then decodes
> each captured latent with both the native VAE / RAE decoder (baseline) and PiD.
> 
> For `flux` / `flux2` / `sd3` / `zimage` / `zimage_turbo` the LDM is a HuggingFace `diffusers`
> pipeline (`FluxPipeline`, `Flux2Pipeline`, `StableDiffusion3Pipeline`,
> `ZImagePipeline`).
> 
> For `dinov2` and `siglip` the LDM is the upstream
> [RAE](https://github.com/bytetriper/RAE) (class-conditional ImageNet-512) or
> [Scale-RAE](https://github.com/ZitengWangNYU/Scale-RAE) (text-conditional
> 256px) repo — see the optional-deps section below for installation.
> 
> #### Example 1 — Single-GPU, single prompt (Flux, default `2k` decoder)
> 
> ```bash
> PYTHONPATH=. python -m pid._src.inference.from_ldm_flux \
>     --prompt "A photorealistic half-body portrait of a brown tabby cat with bold stripes sitting attentively on a rustic wooden kitchen table, soft morning light streaming sideways through a large window, fine fur detail and stripe patterns sharply visible, intense amber-green eyes in razor-sharp focus, warm farmhouse kitchen softly out of focus, cinematic shallow depth of field, ultra-detailed fur texture, photorealistic" \
>     --ldm_inference_steps 28 --save_xt_steps 24 \
>     --output_dir ./results/official_demo/flux \
>     --cfg_scale 1 --pid_inference_steps 4 --scale 4
> ```
> 
> #### Example 2 — Single-GPU, 4K decode (Flux, `2kto4k` decoder)
> 
> Same backbone as Example 1 but with `--resolution 1024 --pid_ckpt_type 2kto4k`,
> so the LDM produces a 1024² latent and PiD decodes it to 4K.
> 
> ```bash
> PYTHONPATH=. python -m pid._src.inference.from_ldm_flux \
>     --prompt "A photorealistic half-body portrait of a brown tabby cat with bold stripes sitting attentively on a rustic wooden kitchen table, soft morning light streaming sideways through a large window, fine fur detail and stripe patterns sharply visible, intense amber-green eyes in razor-sharp focus, warm farmhouse kitchen softly out of focus, cinematic shallow depth of field, ultra-detailed fur texture, photorealistic" \
>     --resolution 1024 --pid_ckpt_type 2kto4k \
>     --ldm_inference_steps 28 --save_xt_steps 24 \
>     --output_dir ./results/official_demo/flux_4k \
>     --cfg_scale 1 --pid_inference_steps 4 --scale 4
> ```
> 
> #### Example 3 — Multi-GPU with a prompt file (Z-Image)
> 
> `torchrun` shards `--prompt_file` across ranks; each rank writes to
> `--output_dir` independently.
> 
> ```bash
> PYTHONPATH=. torchrun --nproc_per_node=4 \
>     -m pid._src.inference.from_ldm_zimage \
>     --prompt_file pid/_src/inference/prompts/prompt_creative.txt \
>     --ldm_inference_steps 50 --save_xt_steps 46 \
>     --output_dir ./results/official_demo/zimage \
>     --cfg_scale 1 --pid_inference_steps 4 --scale 4
> ```
> 
> #### Example 4 — Multi-GPU, 1K to 4K decode (Z-Image-Turbo, `2kto4k` decoder)
> 
> Z-Image-Turbo defaults to 9 diffusers steps with `guidance_scale=0.0`. The final
> clean latent `x0` is always saved and is the recommended Turbo output to inspect.
> `--save_xt_steps 7` is optional; it saves an additional near-final `x_t` sample
> for comparison.
> 
> ```bash
> PYTHONPATH=. torchrun --nproc_per_node=8 \
>     -m pid._src.inference.from_ldm_zimage_turbo \
>     --prompt_file pid/_src/inference/prom

## 延伸閱讀

相關概念：[[深度學習]] · [[圖像生成]] · [[擴散模型]]

相關專案：[[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[bytedance--Lance|bytedance/Lance]]

[GitHub](https://github.com/nv-tlabs/PiD) · [官方網站](https://research.nvidia.com/labs/sil/projects/pid/)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "nv-tlabs--PiD"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "nv-tlabs--PiD"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "nv-tlabs--PiD" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "nv-tlabs--PiD"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度學習","圖像生成","擴散模型"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nv-tlabs--PiD" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nv-tlabs--PiD" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "nv-tlabs" AND file.name != "nv-tlabs--PiD"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/nv-tlabs--PiD");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-05-28** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-05-28|2026-05-28]] — 首次收錄，371 stars
