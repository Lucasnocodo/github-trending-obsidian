---
repo: bytedance/Lance
url: https://github.com/bytedance/Lance
owner: bytedance
owner_type: Organization
language: Python
license: Apache-2.0
description: "A 3B-active-parameter native unified multimodal model for image and video understanding, generation, and editing."
homepage: "https://lance-project.github.io"
stars: 935
stars_per_day: 85
forks: 59
open_issues: 14
created: 2026-05-15
pushed_at: 2026-05-26
first_seen: 2026-05-22
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "多模態"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-22
use_case: "提供統一的多模態模型，支持圖像和視頻的理解、生成和編輯。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-29"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 107677
readme_length: 9863
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-22"
star_history: "2026-05-22:665,2026-05-23:764,2026-05-24:796,2026-05-25:842,2026-05-26:893,2026-05-27:935"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/image_editing"
  - "topic/image_generation"
  - "topic/image_understanding"
  - "topic/unified_multimodal_models"
  - "topic/video_generation"
aliases:
  - "Lance"
  - "bytedance/Lance"
  - "提供統一的多模態模型，支持圖像和視頻的理解、生成和編輯。"
---

# Lance

**935** stars · **85** stars/天 · 建立 11 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/bytedance--Lance");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`image-editing` `image-generation` `image-understanding` `unified-multimodal-models` `video-generation` `video-understanding`

> [!summary] 一句話摘要
> 提供統一的多模態模型，支持圖像和視頻的理解、生成和編輯。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (85 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 對多模態學習感興趣的研究者和開發者，特別是在資源受限的環境中工作的人。
> **一句話重點** Lance 提供了一個有潛力的統一多模態解決方案，特別適合在資源有限的情況下進行研究和開發。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多模態" && p.file.name !== "bytedance--Lance" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多模態 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> Lance 是一個 3B 參數的統一多模態模型，專注於圖像和視頻的理解、生成和編輯。

## 專案簡介

Lance 是一個擁有 30 億個活躍參數的統一多模態模型，專注於圖像和視頻的理解、生成及編輯。使用者可以通過簡單的命令行指令來執行各種任務，例如使用 `python lance_gradio.py --server-name 0.0.0.0 --server-port 7860` 啟動本地 Gradio 演示。這個模型的設計目的是在有限的計算資源下，提供高效的性能，並且支持多任務學習，這使得它在圖像生成和視頻生成的基準測試中表現出色。Lance 的訓練過程使用了多達 128 個 A100 GPU，並且在 768x768 的圖像生成和 480p、12 FPS 的視頻生成上取得了不錯的效果。

相較於其他模型，如 DALL-E 和 SDXL，Lance 在參數數量上更少，但仍能達到競爭力的性能，這使得它在資源受限的環境中更具吸引力。這個工具的優勢在於它的多任務能力，能夠在單一框架內處理多種媒體類型，而不需要切換不同的模型。使用者在實際操作中可能會遇到安裝環境的問題，例如缺少某些包或環境配置不當，這在社群的熱門問題中有反映。整體而言，Lance 是一個值得探索的研究項目，特別適合對多模態學習有興趣的開發者。

**技術棧**：`Python 3.11` · `PyTorch 2.8.0` · `CUDA 12.4`

## 重點功能

- 統一多模態支持 — 同時處理圖像和視頻的理解、生成和編輯。
- 高效的 3B 參數模型 — 在資源有限的情況下仍能達到競爭力的性能。
- 多任務學習 — 支持多種任務而無需切換模型。
- 簡單的安裝流程 — 使用者可以輕鬆設置環境並運行模型。
- 基準測試結果 — 在多個基準測試中表現出色，顯示出其潛力。

## 快速開始

1. 克隆存儲庫
```bash
git clone https://github.com/bytedance/Lance.git
```
2. 設置環境
```bash
conda create -n Lance python=3.11 -y && conda activate Lance
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Gradio 和相關依賴",
  "指令": "python lance_gradio.py --server-name 0.0.0.0 --server-port 7860",
  "預期輸出": "啟動 Gradio 介面以支持圖像和視頻的生成、編輯和理解"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 935 stars（每天 85），forks 59（6.3%），顯示出穩定的增長趨勢。這個專案由 ByteDance 團隊開發，致力於解決多模態模型在資源限制下的性能問題，之前的解決方案往往需要大量的計算資源和複雜的架構。隨著多模態學習的興起，Lance 提供了一個相對輕量的選擇，吸引了開發者的注意。社群的反饋和問題也顯示出使用者對於安裝和運行的關注，這可能是未來改進的方向。

## 適合誰使用

**目標受眾**：對多模態學習感興趣的研究者和開發者，特別是在資源受限的環境中工作的人。

> [!example] 使用場景
> - AI 研究者用它來探索多模態學習的潛力，因為 Lance 提供了一個統一的框架來處理圖像和視頻。
> - 內容創作者用它來生成和編輯視頻，因為 Lance 的性能在視頻生成上表現優異，能夠在資源有限的情況下運行。
> - 開發者用它來進行快速原型開發，因為 Lance 的簡單安裝和使用流程使得開發者能夠迅速上手。

## 架構分析

Lance 採用統一的多模態架構，這意味著它可以在同一模型中處理圖像和視頻。這種設計使得模型在多任務學習中表現出色，能夠在不同任務之間共享知識。資料流方面，模型使用了多任務訓練的策略，這樣可以在有限的計算資源下達到最佳性能。選擇 3B 參數的原因在於希望在性能和計算需求之間取得平衡，但這也意味著在某些高要求的任務上可能無法與更大型模型競爭。擴展性方面，由於設計上是針對單一框架的多模態處理，未來可能需要進一步的優化來支持更大規模的應用。

## 技術深入分析

Lance 的核心技術機制是基於多任務學習的統一多模態模型，這使其能夠同時處理圖像和視頻的生成與理解。其架構設計上，選擇了 3B 的參數量，這在性能上能夠與其他大型模型競爭，但在計算需求上卻相對較低。效能方面，Lance 在多個基準測試中表現良好，特別是在視頻生成任務上，能夠達到 12 FPS 的性能。設計上選擇 Python 和 PyTorch 作為開發語言和框架，這樣的選擇使得開發者能夠快速上手並且利用現有的生態系統。技術風險方面，由於目前仍在開發中，未來可能會面臨 API 變更的風險。整合方面，Lance 與主流的深度學習框架（如 PyTorch）相容性良好，但對於新手來說，可能需要一些時間來熟悉其多任務學習的設計理念。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，整體上易於理解。安裝過程中可能會遇到一些環境配置的問題，特別是在安裝 flash-attn 時。文件中有提供簡單的使用示例，但缺少更詳細的入門指南。整體而言，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多模態學習，能夠同時處理圖像和視頻。
> - 在資源受限的環境中仍能提供競爭力的性能。
> - 簡單的安裝和使用流程，適合快速原型開發。

> [!danger] 缺點
> - 需要高性能的硬體支持，限制了使用範圍。
> - 安裝過程中可能會遇到環境配置的問題。
> - 目前仍在開發階段，可能不適合生產環境。

> [!warning] 注意事項
> - 需要高性能 GPU（至少 40GB VRAM）進行推理
> - 安裝過程中可能會遇到環境配置問題
> - 目前僅為研究項目，可能不適合生產環境

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
| Forks | 59 |
| Open Issues | 14 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-26 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://lance-project.github.io) |
| Repo 大小 | 105.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/bytedance/Lance) |
| Topics | `image-editing` `image-generation` `image-understanding` `unified-multimodal-models` `video-generation` `video-understanding` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `accelerate` `decord` `diffusers` `einops` `huggingface-hub` `imageio` `imageio-ffmpeg` `Jinja2` `numpy` `opencv-python` `packaging` `pillow` `protobuf` `PyYAML` `regex`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fengyifu2000](https://github.com/fengyifu2000) | 46 |
> | [@cleardusk](https://github.com/cleardusk) | 38 |
> | [@Corleone-Huang](https://github.com/Corleone-Huang) | 4 |
> | [@fenfenfenfan](https://github.com/fenfenfenfan) | 1 |
> | [@oss-bd](https://github.com/oss-bd) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在一些未解決的問題。
**連結**：[文件](https://lance-project.github.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-22 ~ 2026-05-26）
> **活躍天數** 4 天 · **最新 commit** feat(gradio): add unified multimodal demo and README updates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/bytedance/Lance/issues/18) | 不是缺包就是缺环境 `enhancement` | 3 | 6 |
> | [#4](https://github.com/bytedance/Lance/issues/4) | Thank you for your excellent work. Will open-source the trai | 1 | 2 |
> | [#29](https://github.com/bytedance/Lance/issues/29) | 2张4090如何运行？ | 0 | 0 |
> | [#24](https://github.com/bytedance/Lance/issues/24) | RTX PRO 6000不支持flash-attn，按ChatGPT的建议fake了一个假包，但是生成的视频只有噪声，能 | 0 | 0 |
> | [#23](https://github.com/bytedance/Lance/issues/23) | 无法启动 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Lance: Unified Multimodal Modeling by Multi-Task Synergy
>   
>     
>     Fengyi Fu*, 
>     Mengqi Huang*,✉, 
>     Shaojin Wu*, 
>     Yunsheng Jiang*, 
>     Yufei Huo, 
>     Jianzhu Guo✉,§
>     
>     Hao Li, 
>     Yinghang Song, 
>     Fei Ding, 
>     Qian He, 
>     Zheren Fu, 
>     Zhendong Mao, 
>     Yongdong Zhang
>     
>     ByteDance
>     
>     * Equal contribution &nbsp;&nbsp; ✉ Corresponding authors &nbsp;&nbsp; § Project lead
>   
>   
>     
>     
>     
>     
>     
>     English | 简体中文
>   
> 
> > **Note:** Lance is a research project rather than a polished product model. The released checkpoint was trained with up to 128 A100 GPUs, with training conducted up to 768x768 image generation and 480p, 12 FPS video generation. Our goal is to share a research artifact for studying unified image/video understanding, generation, and editing under a relatively small model and limited compute budget. Output quality may vary across prompts, resolutions, duration, motion complexity, and editing scenarios, and we see further opportunities to improve the post-training recipe. We appreciate constructive feedback from the community as we continue improving the project.
> 
> 
> ## 🚀 Installation
> 
> 
> ### Installation Steps
> 
> First, clone the repository:
> 
> ```bash
> git clone https://github.com/bytedance/Lance.git
> cd Lance
> ```
> 
> Then, set up the environment:
> 
> ```bash
> conda create -n Lance python=3.11 -y
> conda activate Lance
> pip install torch==2.8.0 torchvision==0.23.0 torchaudio==2.8.0 --index-url https://download.pytorch.org/whl/cu126
> pip install -r requirements.txt
> pip install flash-attn==2.8.3 --no-build-isolation
> ```
> 
> > **Note:** If installing `flash-attn` from source fails, you can install a prebuilt wheel instead. The wheelhouse below is from a third-party repository and is provided for **reference only**; please verify that any wheel you install matches your Python, PyTorch and CUDA versions.
> 
> > ```bash
> > pip install --no-cache-dir --no-deps --force-reinstall \
> > "https://huggingface.co/strangertoolshf/flash_attention_2_wheelhouse/resolve/main/wheelhouse-flash_attn-2.8.3/linux_x86_64/torch2.8/cu12/abiTRUE/cp311/flash_attn-2.8.3+cu12torch2.8cxx11abiTRUE-cp311-cp311-linux_x86_64.whl"
> > ```
> 
> Then, download the model weights from [Lance-3B on Hugging Face](https://huggingface.co/bytedance-research/Lance) and place them in the `downloads/` directory:
> 
> ```bash
> from huggingface_hub import snapshot_download
> 
> save_dir = "./downloads/"
> repo_id = "bytedance-research/Lance" 
> cache_dir = save_dir + "/cache"
> 
> snapshot_download(cache_dir=cache_dir,
>   local_dir=save_dir,
>   repo_id=repo_id,
>   local_dir_use_symlinks=False,
>   resume_download=True,
>   allow_patterns=["*.json", "*.safetensors", "*.bin", "*.py", "*.md", "*.txt","*.pth",],
> )
> ```
> 
> 
> ## 🎨 Demo
> 
> Show demo results
> 
>   🔥 We recommend visiting our homepage for more visual results. 🔥
> 
> Text-to-Video
> 
>   
>     
>     
>     
>     
>   
>   
>     
>     
>     
>     
>   
> 
> Video Editing
> 
>   
>     
>     
>     
>     
>   
>   
>     
>     
>     
>     
>   
> 
> Multi-turn Consistency Editing
> 
>   
>     
>   
> 
> Intelligent Video Generation
> 
>   
>     
>     
>     
>     
>   
> 
> 
> ## 📚 Usage
> 
> 
> ## 🌟 Highlights
> 
> **Lance** is a 3B native unified multimodal model that supports **image and video understanding, generation, and editing** within a single framework.
> 
> - **Efficient at 3B scale.** With only **3B active parameters**, Lance achieves competitive performance across image generation, image editing, and video generation benchmarks.
> - **Training from scratch.** Lance is trained from scratch with a staged multi-task recipe and within a budget of **up to 128 A100 GPUs**.
> 
> We are actively updating and improving this repository. If you find any bugs or have suggestions, please feel free to open an issue or submit a pull request (PR) 💖.
> 
>   
> 
> 
> ### Benchmarks
> 
> DPG-Bench Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       Global
>       Entity
>       Attribute
>       Relation
>       Other
>       Overall
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       SDXL3.5B83.2782.4380.9186.7680.4174.65
>     
>     
>       DALL-E 3-90.9789.6188.3990.5889.8383.50
>     
>     
>       SD3-Medium2B87.9091.0188.8380.7088.6884.08
>     
>     
>       FLUX.1-dev12B74.3590.0088.9690.8788.3383.84
>     
>     
>       Qwen-Image20B91.3291.5692.0294.3192.7388.32
>     
>     
>       Unified Models
>     
>     
>       Janus-Pro-7B7B86.9088.9089.4089.3289.4884.19
>     
>     
>       OmniGen24B88.8188.8390.1889.3790.2783.57
>     
>     
>       Show-o27B89.0091.7889.9691.8191.6486.14
>     
>     
>       BAGEL†7B88.9490.3791.2990.8288.6785.07
>     
>     
>       InternVL-U1.7B90.3990.7890.6890.2988.7785.18
>     
>     
>       TUNA7B90.4291.6890.9491.8790.7386.76
>     
>     
>       TUNA-27B89.5091.4092.0791.9188.8186.54
>     
>     
>       🌟 Lance (Ours)3B83.8991.0789.3693.3880.8084.67
>     
>   
> 
> † indicates methods that use LLM rewriters for prompt rewriting before generation.
> 
> GenEval Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       1-Obj.
>       2-Obj.
>       Count
>       Colors
>       Position
>       Attr.
>       Overall
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       SDXL3.5B0.980.740.390.850.150.230.55
>     
>     
>       DALL-E 3-0.960.870.470.830.430.450.67
>     
>     
>       SD3-Medium2B0.990.940.720.890.330.600.74
>     
>     
>       FLUX.1-dev12B0.980.930.750.930.680.650.82
>     
>     
>       Qwen-Image20B0.990.920.890.880.760.770.87
>     
>     
>       Unified Models
>     
>     
>       Janus-Pro-7B7B0.990.890.590.900.790.660.80
>     
>     
>       OmniGen24B1.000.950.640.880.550.760.80
>     
>     
>       Show-o27B1.000.870.580.920.520.620.76
>     
>     
>       BAGEL†7B0.980.950.840.950.780.770.88
>     
>     
>       Mogao7B1.000.970.830.930.840.800.89
>     
>     
>       InternVL-U1.7B0.990.940.740.910.770.740.85
>     
>     
>       TUNA7B1.000.970.810.910.880.830.90
>     
>     
>       TUNA-27B0.990.960.800.910.840.760.87
>     
>     
>       🌟 Lance (Ours)3B1.000.940.840.970.870.810.90
>     
>   
> 
> † indicates methods that use LLM rewriters for prompt rewriting before generation.
> 
> GEdit-Bench Evaluation
> 
>   
>     
>       Models
>       #&nbsp;Params.
>       BC
>       CA
>       MM
>       MC
>       PB
>       ST
>       SA
>       SR
>       SRp
>       TM
>       TT
>       Avg/G_O
>     
>   
>   
>     
>       Generation-only Models
>     
>     
>       Gemini 2.0------------6.32
>     
>     
>       GPT Image 1-6.966.857.105.416.747.447.518.738.558.458.697.49
>     
>     
>       Qwen-Image-Edit20B8.238.307.338.057.496.748.578.098.298.488.508.01
>     
>     
>       Unified Models
>     
>     
>       Lumina-DiMOO8B3.434.273.082.774.745.194.443.804.382.684.203.91
>     
>     
>       Ovis-U11.2B7.496.886.214.795.986.467.497.257.274.486.316.42
>     
>     
>       BAGEL7B7.326.916.384.754.576.157.907.167.027.326.226.52
>     
>     
>       InternVL-U1.7B7.087.056.387.026.036.277.136.556.336.596.856.66
>     
>     
>       InternVL-U (w/ CoT)1.7B7.057.876.506.995.776.107.337.167.127.366.466.88
>     
>     
>       🌟 Lance (Ours)3B7.737.747.287.837.507.037.647.857.714.467.577.30
>     
>   
> 
> VBench Evaluation (Video Generation)
> 
>   
>     
>       Type
>       Model
>       #&nbsp;Params.
>       Total Score ↑
>     
>   
>   
>     
>       Gen. Only
>       ModelScope1.7B75.75
>     
>     
>       LaVie3B77.08
>     
>     
>       Show-16B78.93
>     
>     
>       AnimateDiff-V2-80.27
>     
>     
>       VideoCrafter-2.0-80.44
>     
>     
>       CogVideoX5B81.61
>     
>     
>       Kling-81.85
>     
>     
>       Open-Sora-2.0-81.71
>     
>     
>       Gen-3-82.32
>     
>     
>       Step-Video-T2V30B81.83
>     
>     
>       Hunyuan Video-83.43
>     
>     
>       Wan2.1-T2V14B83.69
>     
>     
>       Unified
>       HaproOmni7B78.10
>     
>     
>       Emu38B80.96
>     
>     
>       VILA-U7B74.01
>     
>     
>       Show-o22B81.34
>     
>     
>       TUNA1.5B84.06
>     
>     
>       🌟 Lance (Ours)3B85.11
>     
>   
> 
> #### Running Benchmarks
> 
> Ready-to-run benchmark scripts are provided under `benchmarks/`:
> 
> | Benchmark              | Modality | Script                                                        |
> |------------------------|----------|---------------------------------------------------------------|
> | GenEVAL (image gen)    | Image    | `benchmarks/image_gen/GenEVAL/sample_GenEVAL.sh`            

## 延伸閱讀

相關概念：[[多模態]] · [[深度學習]] · [[圖像生成]] · [[視頻生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]]

[GitHub](https://github.com/bytedance/Lance) · [官方網站](https://lance-project.github.io)

## 相關收錄

> [!note]- 直接競品（同子分類：多模態）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多模態" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "bytedance--Lance"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "bytedance--Lance" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","深度學習","圖像生成","視頻生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "bytedance--Lance" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/bytedance--Lance");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "bytedance--Lance" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "bytedance" AND file.name != "bytedance--Lance"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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
> const me = dv.page("Repos/bytedance--Lance");
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

> **2026-05-22** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 首次收錄，665 stars
