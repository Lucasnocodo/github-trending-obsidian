---
repo: OpenMOSS/MOSS-Image
url: https://github.com/OpenMOSS/MOSS-Image
owner: OpenMOSS
owner_type: Organization
language: Python
license: Apache-2.0
description: "Official repository for MOSS-Image, a 5B-parameter base DiT model with high-quality text rendering, layout generation, and efficient fine-tuning."
homepage: "http://openmoss.ai/MOSS-Image/"
stars: 1496
stars_per_day: 214
forks: 73
open_issues: 15
created: 2026-10-16
pushed_at: 2026-10-20
first_seen: 2026-10-23
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-23
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-26"
contributor_count: 3
engagement: "low"
issue_close_rate: 6
repo_size_kb: 86006
readme_length: 8699
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-23"
star_history: "2026-10-23:1496"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/controllable_generation"
  - "topic/foundation_models"
  - "topic/image_generation"
  - "topic/text_rendering"
  - "topic/text_to_image"
aliases:
  - "MOSS-Image"
  - "OpenMOSS/MOSS-Image"
---

# MOSS-Image

**1.5k** stars · **214** stars/天 · 建立 7 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/OpenMOSS--MOSS-Image");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`ORG`

`controllable-generation` `foundation-models` `image-generation` `text-rendering` `text-to-image`

> [!summary] 一句話摘要
> Official repository for MOSS-Image, a 5B-parameter base DiT model with high-quality text rendering, layout generation, and efficient fine-tuning.

## 專案簡介

Official repository for MOSS-Image, a 5B-parameter base DiT model with high-quality text rendering, layout generation, and efficient fine-tuning.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
| Forks | 73 |
| Open Issues | 15 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-10-20 |
| 建立日期 | 2026-10-16 |
| 官方網站 | [Link](http://openmoss.ai/MOSS-Image/) |
| Repo 大小 | 84.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OpenMOSS/MOSS-Image) |
| Topics | `controllable-generation` `foundation-models` `image-generation` `text-rendering` `text-to-image` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `-e .`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 81
>     "HTML" : 16
>     "Shell" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Phospheneser](https://github.com/Phospheneser) | 11 |
> | [@yhzx233](https://github.com/yhzx233) | 3 |
> | [@zty624](https://github.com/zty624) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-16 ~ 2026-10-20）
> **活躍天數** 3 天 · **最新 commit** docs: announce MOSI API Platform availability

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/OpenMOSS/MOSS-Image/issues/17) | A Related Work on Layout-Controlled Image Generation | 0 | 0 |
> | [#16](https://github.com/OpenMOSS/MOSS-Image/issues/16) | Making it compatible with Mac Mini 16gb ram and Mac GPU | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>     &nbsp;
>     
>   
>   
>     English &nbsp; | &nbsp; 简体中文
>   
> 
> 
> ## 🚀 Quick start
> 
> 
> ### 🛠️ Installation
> 
> ```bash
> git clone https://github.com/OpenMOSS/MOSS-Image.git
> cd MOSS-Image
> python -m venv .venv
> source .venv/bin/activate
> 
> pip install -r requirements.txt
> ```
> 
> 
> ### Base vs. SFT
> 
> In this example, SFT produces clearer text grouping and a more organized whiteboard layout.
> 
> | MOSS-Image-Base | MOSS-Image-SFT |
> | --- | --- |
> |  |  |
> 
> 
> ## News
> 
> - **[2026-10-20]** 🚀 The **MOSS-Image** series is now available on the [MOSI API Platform](https://platform.mosi.cn/?utm_source=github&utm_medium=readme&utm_campaign=imageapi). Try it in the Playground or integrate it through the API.
> 
> - **[2026-10-19]** 📄 The [MOSS-Image Technical Report](https://arxiv.org/abs/2610.23374) is now available on arXiv. If you find our work useful, please support us with an [upvote on Hugging Face Papers](https://huggingface.co/papers/2610.23374)! 🤗
> 
> - **[2026-10-18]** 🛠️ [KohakuMossTrainer](https://github.com/KohakuBlueleaf/KohakuMossTrainer) has been released, offering full fine-tuning and LyCORIS training (including LoRA) for **MOSS-Image-Base** and **MOSS-Image-SFT**. It features extensive optimizer support, mixed-precision training (BF16/FP16/FP8/MXFP8/INT8), multi-GPU training (DDP/FSDP/pipeline parallelism), optimized kernels, and CPU offloading, enabling adapter training with as little as **6GB VRAM**. It supports Windows, Linux, NVIDIA GPUs (SM70–SM120), and Intel Arc GPUs. See the [GitHub repository](https://github.com/KohakuBlueleaf/KohakuMossTrainer) for details.
> 
> - **[2026-10-16]** 🚀 MOSS-Image has day-0 support in [SGLang](https://docs.sglang.io/cookbook/diffusion/OpenMOSS/MOSS-Image), [vLLM-Omni](https://recipes.vllm.ai/OpenMOSS-Team/MOSS-Image-Base), and [ComfyUI](https://huggingface.co/Comfy-Org/MOSS-Image).
> 
> - **[2026-10-16]** 🎉 We are introducing **MOSS-Image-Base** and **MOSS-Image-SFT**! Code and model weights are publicly available.
> 
>   **Our key highlights:**
> 
>   - 📐 **Layout control:** Control the placement of text and visual elements.
>   - ✍️ **Strong text rendering:** Generate clear, accurate text within images.
>   - 📜 **Long-prompt support:** Accept text prompts of up to 4K tokens.
>   - 🎨 **Versatile visual styles:** Create high-quality anime and photorealistic images.
>   - 🛠️ **Easy to fine-tune:** Adapt the base model to custom tasks and domains.
>   - ⚡ **Compact and efficient:** Efficient image generation with a 5B backbone.
>   - 🖥️ **Heterogeneous GPU training**: Trained on alternative GPU platforms.
> 
> 
> ## Community projects
> 
> - [DiffSynth-Studio](https://github.com/modelscope/DiffSynth-Studio) now supports full fine-tuning and LoRA training for **MOSS-Image-Base** and **MOSS-Image-SFT**. See the [training documentation](https://github.com/modelscope/DiffSynth-Studio/blob/main/docs/en/Model_Details/MOSS-Image.md#model-training) and [example scripts](https://github.com/modelscope/DiffSynth-Studio/tree/main/examples/moss_image/model_training).
> 
> - [MOSS-Image-SFT-DeBand](https://huggingface.co/MATLOWAI/MOSS-Image-SFT-DeBand) by **MATLOWAI** provides community LoRAs to reduce vertical color banding in **MOSS-Image-SFT**, together with ComfyUI preset workflows. See the model card for examples, settings, and the trade-offs between stripe reduction and changes to image details.
> 
> - [MOSS-Image-SFT-8-steps-dmd](https://huggingface.co/lodestones/MOSS-Image-SFT-8-steps-dmd) by **lodestones** is a community 8-step DMD distillation of **MOSS-Image-SFT**, with LoRA adapters for ComfyUI. See the model card for the latest checkpoints and usage recommendations.
> 
> - [MOSS-Image-FP16-fixed](https://huggingface.co/KBlueLeaf/MOSS-Image-FP16-fixed) by **KBlueLeaf** provides FP16-compatible transformer weights for **MOSS-Image-Base** and **MOSS-Image-SFT**, using residual-stream rescaling to improve overflow headroom. Diffusers and ComfyUI formats are available; see the model card for loading instructions and adapter compatibility.
> 
> - [ComfyUI-Spectrum-MOSS](https://github.com/Rkkss/ComfyUI-Spectrum-MOSS) by **Rkkss** adds Spectrum-style hidden-state forecasting to accelerate MOSS-Image sampling in ComfyUI, with manual and experimental adaptive nodes. See the repository for recommended sampling settings and examples.
> 
> 
> ## User guide
> 
> Start with the **[English user guide](USERGUIDE.md)** or **[中文用户指南](USERGUIDE_ZH.md)**
> for recommended inference settings, prompt examples, layout input formats, and
> LoRA training guidance.
> 
> 
> ## ComfyUI
> 
> MOSS-Image is supported natively in [ComfyUI](https://github.com/Comfy-Org/ComfyUI/pull/17095). Update to ComfyUI master/nightly with MOSS-Image support and install its dependencies, then use the built-in loaders with [ComfyUI-format weights](https://huggingface.co/Comfy-Org/MOSS-Image). No MOSS-Image plugin is required for this workflow.
> 
> The repository plugin remains available for loading a local Hugging Face / Diffusers directory and for existing plugin workflows.
> 
> [Installation and usage](comfyui/README.md) · [HF loader plugin workflow](comfyui/moss-image/example_workflows/moss-image.json)
> 
> 
> ## Prompt enhancer skill
> 
> The [MOSS-Image Prompt Enhancer](skills/moss-image-prompt-enhancer/SKILL.md) turns
> image ideas into detailed captions or spatial Layout prompts. It is designed for
> GPT-6-family agents with local file and Python tools. The bundled script converts
> pixel-coordinate drafts into compact JSON with integer centered coordinates;
> it does not call an image-generation service.
> 
> Install the [skill folder](skills/moss-image-prompt-enhancer) in your agent's skills
> directory, then invoke `$moss-image-prompt-enhancer` with your image idea, desired
> caption or Layout output, and any canvas dimensions. Paste the compiled result
> into MOSS-Image's positive prompt; for Layout, use the same generation dimensions.
> 
> 
> ## Contents
> 
> - [News](#news)
> - [Community projects](#community-projects)
> - [User guide](#user-guide)
> - [ComfyUI](#comfyui)
> - [Prompt enhancer skill](#prompt-enhancer)
> - [Models](#models)
> - [Quick start](#quick-start)
>   - [Installation](#installation)
>   - [Python](#python)
>   - [Gradio](#gradio)
>   - [Sampling settings](#sampling-settings)
>   - [Memory and performance](#memory-and-performance)
> - [Layout-to-image generation](#layout-generation)
> - [Showcase](#showcase)
> - [Citation](#citation)
> - [License and acknowledgements](#license)
> - [Star History](#star-history)
> 
> 
> ## 🤗 Models
> 
> | Model | Description |
> | --- | --- |
> | [MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) · [ModelScope](https://modelscope.cn/models/openmoss/MOSS-Image-Base) | Base text-to-image model |
> | [MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) · [ModelScope](https://modelscope.cn/models/openmoss/MOSS-Image-SFT) | Fine-tuned from MOSS-Image-Base on curated data |
> 
> 
> ### 🐍 Python
> 
> ```python
> import torch
> from diffusers import DiffusionPipeline
> 
> pipe = DiffusionPipeline.from_pretrained(
>     "OpenMOSS-Team/MOSS-Image-Base",
>     custom_pipeline="pipeline_moss_image",
>     trust_remote_code=True,
>     torch_dtype={"default": torch.bfloat16, "vae": torch.float32},
> )
> pipe.scheduler = type(pipe.scheduler).from_config(pipe.scheduler.config)
> pipe.to("cuda")
> image = pipe(
>     "A wide view of a refrigerator beside a kitchen counter with a fruit bowl. A small sticky note on the refrigerator door is handwritten in Chinese:“\n记得买牛奶和鸡蛋！\n牛奶两盒，鸡蛋一打。\n顺便带一袋面包。”",
>     height=1456,
>     width=1456,
>     num_inference_steps=50,
>     guidance_scale=3.0,
>     uncond_skip_layers=[22],
>     generator=torch.Generator("cpu").manual_seed(42),
> ).images[0]
> image.save("refrigerator_note.png")
> ```
> 
> 
> ### 🎨 Gradio
> 
> ```bash
> pip install -e '.[ui]'
> python gradio_app.py --model OpenMOSS-Team/MOSS-Image-Base
> ```
> 
> 
> ### 🎛️ Sampling settings
> 
> | Setting | Default |
> | --- | --- |
> | Sampler | Flow-matching Euler |

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/OpenMOSS/MOSS-Image) · [官方網站](http://openmoss.ai/MOSS-Image/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "OpenMOSS--MOSS-Image"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "OpenMOSS--MOSS-Image" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "OpenMOSS--MOSS-Image"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "OpenMOSS--MOSS-Image" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "OpenMOSS" AND file.name != "OpenMOSS--MOSS-Image"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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
> const me = dv.page("Repos/OpenMOSS--MOSS-Image");
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

> **2026-10-23** — 首次收錄
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

- [[2026-10-23|2026-10-23]] — 首次收錄，1.5k stars
