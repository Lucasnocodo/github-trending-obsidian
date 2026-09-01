---
repo: Tencent/WeMM-Embedding
url: https://github.com/Tencent/WeMM-Embedding
owner: Tencent
owner_type: Organization
language: Python
license: NOASSERTION
description: "WeMM-Embedding is a family of universal multimodal embedding models by the WeChat Vision Team at Tencent, supporting multimodal understanding and retrieval."
homepage: ""
stars: 1024
stars_per_day: 146
forks: 77
open_issues: 5
created: 2026-08-25
pushed_at: 2026-08-28
first_seen: 2026-08-29
week: "2026-W35"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-29
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-09-08"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1502
readme_length: 6827
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-29"
star_history: "2026-08-29:860,2026-08-30:914,2026-08-31:947,2026-09-01:1024"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/embedding_models"
  - "topic/multimodal"
  - "topic/multimodal_llm"
aliases:
  - "WeMM-Embedding"
  - "Tencent/WeMM-Embedding"
---

# WeMM-Embedding

**860** stars · **215** stars/天 · 建立 4 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Tencent--WeMM-Embedding");
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

`embedding-models` `multimodal` `multimodal-llm`

> [!summary] 一句話摘要
> WeMM-Embedding is a family of universal multimodal embedding models by the WeChat Vision Team at Tencent, supporting multimodal understanding and retrieval.

## 專案簡介

WeMM-Embedding is a family of universal multimodal embedding models by the WeChat Vision Team at Tencent, supporting multimodal understanding and retrieval.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
| Forks | 51 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-28 |
| 建立日期 | 2026-08-25 |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Tencent/WeMM-Embedding) |
| Topics | `embedding-models` `multimodal` `multimodal-llm` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `qwen-vl-utils` `sentence-transformers` `accelerate`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JUNJIE99](https://github.com/JUNJIE99) | 9 |
> | [@Raykoooo](https://github.com/Raykoooo) | 4 |
> | [@tencent-adm](https://github.com/tencent-adm) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-25 ~ 2026-08-28）
> **活躍天數** 3 天 · **最新 commit** add README_zh.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/Tencent/WeMM-Embedding/issues/3) | Verify evals on Papers with Code | 0 | 0 |
> | [#2](https://github.com/Tencent/WeMM-Embedding/issues/2) | Questions about video retrieval, deployment, and potential c | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> WeMM-Embedding: WeChat Multi-Modal Embedding
> 
>   English | 中文
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
> WeMM-Embedding is a family of universal multimodal embedding models developed by the WeChat Vision team. It provides unified representations for text, images, videos, visual documents, and interleaved multimodal inputs, achieving state-of-the-art performance across multiple benchmarks covering diverse tasks and domains.
> 
>   
>     
>   
> 
> ## Model Zoo
> 
> | Model | Matryoshka dimensions | Hugging Face |
> | --- | --- | --- |
> | WeMM-Embedding-2B | `64, 128, 256, 512, 1024, 2048` | [🤗 Link](https://huggingface.co/tencent/WeMM-Embedding-2B) |
> | WeMM-Embedding-4B | `64, 128, 256, 512, 1024, 2560` | [🤗 Link](https://huggingface.co/tencent/WeMM-Embedding-4B) |
> | WeMM-Embedding-9B | `64, 128, 256, 512, 1024, 2048, 4096` | [🤗 Link](https://huggingface.co/tencent/WeMM-Embedding-9B) |
> 
> All models support text, images, videos, visual documents, and interleaved multimodal inputs. Embeddings are obtained from the last-layer hidden state at the dedicated `` token position, followed by L2 normalization. Audio input is not currently supported.
> 
> ## Installation
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> ## Transformers
> We recommend using `transformers==5.2.0` for inference and reproducibility, as newer versions may differ in preprocessing behavior.
> 
> ```bash
> python examples/transformers_inference.py \
>   --model /path/to/WeMM-Embedding-2B \
>   --image /path/to/image.jpg \
>   --video /path/to/video.mp4 \
>   --dimension 2048
> ```
> 
> The example produces independent text, image, and video embeddings. Omit `--dimension` for the full embedding dimension.
> 
> ## Sentence Transformers
> 
> ```bash
> python examples/sentence_transformers_inference.py \
>   --model /path/to/WeMM-Embedding-2B \
>   --image /path/to/image.jpg \
>   --video /path/to/video.mp4 \
>   --dimension 2048
> ```
> 
> `SentenceTransformer` loads the model directly, so a Hugging Face model id such as `tencent/WeMM-Embedding-2B` also works in place of a local path. Text, image, and video inputs go through `SentenceTransformer.encode()`, and MRL is selected with `--dimension`.
> 
> ## Serving
> 
> Tested versions: vLLM `0.27.0` and SGLang `0.5.9`.
> 
> vLLM:
> 
> ```bash
> MODEL_PATH=/path/to/WeMM-Embedding-2B
> vllm serve "$MODEL_PATH" \
>   --runner pooling \
>   --chat-template "$MODEL_PATH/embedding_chat_template.jinja"
> ```
> 
> SGLang:
> 
> ```bash
> MODEL_PATH=/path/to/WeMM-Embedding-2B
> python scripts/patch_sglang_video.py
> python -m sglang.launch_server \
>   --model-path "$MODEL_PATH" \
>   --is-embedding \
>   --enable-precise-embedding-interpolation
> ```
> 
> Equivalent one-command wrappers are available in `scripts/serve_vllm.sh` and `scripts/serve_sglang.sh`.
> 
> ## Matryoshka Embeddings
> 
> For a supported dimension `d`, truncate the full embedding and normalize it again:
> 
> ```python
> embedding = torch.nn.functional.normalize(embedding[..., :d], dim=-1)
> ```
> 
> On MMEB-v2, the 2B model at 256 dimensions retains 98.7% of its full-dimensional image and video performance.
> 
> ## Evaluation
> 
> ### MMEB-v2
> 
> Results on 78 datasets from Table 1 of the [technical report](assets/WeMM_Embedding_tech_report.pdf). Image and video tasks use Hit@1, while visual-document tasks use NDCG@5. Higher is better.
> 
> | Model | Size | AVG | Image | Video | VisDoc |
> | --- | ---: | ---: | ---: | ---: | ---: |
> | VLM2Vec | 2B | 47.8 | 59.7 | 29.0 | 44.0 |
> | GME | 2B | 55.4 | 51.9 | 33.9 | 76.8 |
> | VLM2Vec-V2 | 2B | 59.3 | 64.9 | 34.9 | 69.2 |
> | Qwen3-VL-Embedding | 2B | 73.2 | 75.0 | 61.9 | 79.2 |
> | DME-Small† | 2B | 74.8 | 75.9 | 65.6 | 79.9 |
> | **WeMM-Embedding** | **2B** | **77.9** | **79.6** | **70.8** | **80.7** |
> | **WeMM-Embedding** | **4B** | **79.2** | **80.8** | **72.1** | **82.0** |
> | VLM2Vec | 8B | 53.2 | 65.5 | 34.0 | 49.1 |
> | GME | 8B | 59.2 | 56.0 | 38.6 | 79.3 |
> | Qwen3-VL-Embedding | 8B | 77.8 | 80.1 | 67.1 | 82.4 |
> | DME-Medium† | 9B | 78.4 | 79.8 | 70.8 | 82.0 |
> | **WeMM-Embedding** | **9B** | **80.6** | **81.9** | **74.3** | **83.3** |
> 
> † Closed-source leaderboard submission without publicly released model weights or a public inference endpoint.
> 
> ### MMEB-v3
> 
> Results on all 190 tasks from Table 2 of the [technical report](assets/WeMM_Embedding_tech_report.pdf). V3-All includes the 78 MMEB-v2 tasks, 53 text tasks, 47 agent tasks, 11 audio tasks, and MCMR. Unsupported tasks are assigned a score of zero.
> 
> | Model | Size | V3-All | Text | Agent | MCMR | Audio |
> | --- | ---: | ---: | ---: | ---: | ---: | ---: |
> | VLM2Vec-V2 | 2B | 38.3 | 24.5 | 28.7 | 4.1 | 0.0 |
> | Omni-Embed-Nemotron | 3B | 43.5 | 39.2 | 36.5 | 26.1 | 36.5 |
> | E5-Omni | 3B | 44.6 | 26.7 | 36.9 | 31.9 | 30.8 |
> | Qwen3-VL-Embedding | 2B | 50.9 | 39.2 | 39.3 | 42.0 | 0.0 |
> | **WeMM-Embedding** | **2B** | **56.0** | **45.3** | **45.1** | **42.5** | **0.0** |
> | **WeMM-Embedding** | **4B** | **58.2** | **47.9** | **49.0** | **41.9** | **0.0** |
> | WAVE | 7B | 26.3 | 13.7 | 11.3 | 8.9 | 31.8 |
> | VLM2Vec | 8B | 32.9 | 22.2 | 19.7 | 0.9 | 0.0 |
> | LCO-Embedding-Omni | 7B | 40.6 | 32.4 | 27.8 | 20.0 | 43.2 |
> | GME | 8B | 43.6 | 37.1 | 35.6 | 27.3 | 0.0 |
> | E5-Omni | 7B | 47.1 | 26.9 | 36.7 | 41.1 | 43.0 |
> | Tianmu-Emb-Uni | 8B | 53.3 | 43.6 | 39.4 | 38.8 | 38.9 |
> | Qwen3-VL-Embedding | 8B | 53.5 | 42.5 | 38.4 | 38.0 | 0.0 |
> | **WeMM-Embedding** | **9B** | **59.5** | **48.8** | **51.0** | **49.3** | **0.0** |
> 
> Text results use NDCG@5; agent, MCMR, and audio results use Hit@1.
> 
> `mmeb_v3_eval/` contains the MMEB-v3 evaluation code used to produce our reported numbers. It is the official [TIGER-AI-Lab/VLM2Vec](https://github.com/TIGER-AI-Lab/VLM2Vec) pipeline with a minimal diff: multi-node multi-GPU inference (`torchrun --nnodes=N`), a `wemm_embedding` backbone implementing our preprocessing and batched inference, dataset instructions aligned with the released model, and 64-frame video sampling. Data download, single-node and multi-node commands are documented in `mmeb_v3_eval/README.md`.
> 
> ```bash
> cd mmeb_v3_eval
> DATA_ROOT=/path/to/MMEB-V3 bash scripts/download_data.sh
> MODEL_PATH=/path/to/WeMM-Embedding-2B DATA_BASEDIR=/path/to/MMEB-V3 \
> OUTPUT_DIR=exps/wemm_embedding bash scripts/run_eval.sh
> ```
> 
> ## Citation
> If you find this repository useful, please consider giving a star ⭐ and citation
> ```bibtex
> @article{wemm-embedding,
>       title={WeMM-Embedding: WeChat Multi-Modal Embedding Technical Report}, 
>       author={Junjie Zhou and Ke Mei and Lei Li and Tianyi Wang and Fengyun Rao and Jing Lyu},
>       year={2026},
>       eprint={2608.24053},
>       archivePrefix={arXiv},
>       primaryClass={cs.CV},
>       url={https://arxiv.org/abs/2608.24053}, 
> }
> ```
> 
> ## License
> 
> Unless otherwise noted, Tencent-authored code in this repository is released under the
> [Apache License 2.0](LICENSE).
> 
> Third-party components retain their original licenses and copyright notices. Please review
> the corresponding source files before use.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]]

[GitHub](https://github.com/Tencent/WeMM-Embedding)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Tencent--WeMM-Embedding"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Tencent--WeMM-Embedding" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "Tencent--WeMM-Embedding"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Tencent--WeMM-Embedding" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Tencent" AND file.name != "Tencent--WeMM-Embedding"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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
> const me = dv.page("Repos/Tencent--WeMM-Embedding");
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

> **2026-08-29** — 首次收錄
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

- [[2026-09-01|2026-09-01]] — 再次上榜，1.0k stars
- [[2026-08-31|2026-08-31]] — 再次上榜，947 stars
- [[2026-08-30|2026-08-30]] — 再次上榜，914 stars
- [[2026-08-29|2026-08-29]] — 首次收錄，860 stars
