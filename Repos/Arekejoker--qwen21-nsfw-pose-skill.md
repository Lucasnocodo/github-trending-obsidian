---
repo: Arekejoker/qwen21-nsfw-pose-skill
url: https://github.com/Arekejoker/qwen21-nsfw-pose-skill
owner: Arekejoker
owner_type: User
language: Python
license: Apache-2.0
description: "Qwen-Image 2.1 NSFW/姿势出图 skill：作者级提示词配方 + NSFW LoRA + 136 姿势 VNCCS 人偶控制；适用 Claude Code / Codex / Cursor / OpenClaw"
homepage: ""
stars: 2150
stars_per_day: 717
forks: 438
open_issues: 2
created: 2026-10-13
pushed_at: 2026-10-16
first_seen: 2026-10-16
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.0.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-16
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-19"
contributor_count: 2
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 37058
readme_length: 4031
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-16"
star_history: "2026-10-16:2150"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/agent_skill"
  - "topic/comfyui"
  - "topic/image_generation"
  - "topic/openclaw"
  - "topic/pose_control"
aliases:
  - "qwen21-nsfw-pose-skill"
  - "Arekejoker/qwen21-nsfw-pose-skill"
---

# qwen21-nsfw-pose-skill

**2.1k** stars · **717** stars/天 · 建立 3 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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

`v1.0.0`

`agent-skill` `comfyui` `image-generation` `openclaw` `pose-control` `qwen-image`

> [!summary] 一句話摘要
> Qwen-Image 2.1 NSFW/姿势出图 skill：作者级提示词配方 + NSFW LoRA + 136 姿势 VNCCS 人偶控制；适用 Claude Code / Codex / Cursor / OpenClaw

## 專案簡介

Qwen-Image 2.1 NSFW/姿势出图 skill：作者级提示词配方 + NSFW LoRA + 136 姿势 VNCCS 人偶控制；适用 Claude Code / Codex / Cursor / OpenClaw

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
| Forks | 438 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-10-16 |
| 建立日期 | 2026-10-13 |
| Repo 大小 | 36.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| Topics | `agent-skill` `comfyui` `image-generation` `openclaw` `pose-control` `qwen-image` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Arekejoker](https://github.com/Arekejoker) | 19 |
> | [@yelban](https://github.com/yelban) | 3 |

**最新版本**：v1.0.0 — v1.0.0 — Initial stable release (2026-10-13)

> [!info]- Release Notes
> ## Highlights
> 
> - Complete Qwen-Image 2.1 pose skill, author recipes, workflows, and 136-pose VNCCS setup.
> - Route-based installation guide with explicit paths and dependencies.
> - Offline package validator and GitHub Actions checks.
> - Custom GitHub social preview and repository topics.
> 
> Model weights are not included; install them using `install/setup.md`.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-14 ~ 2026-10-16）
> **活躍天數** 3 天 · **最新 commit** docs: adopt Apache-2.0 license for original code and docs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/Arekejoker/qwen21-nsfw-pose-skill/issues/6) | 漫剧 | 0 | 1 |
> | [#5](https://github.com/Arekejoker/qwen21-nsfw-pose-skill/issues/5) | Issue ： 有无推荐的本地运行环境 | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # qwen21-nsfw-pose
> 
> [](https://github.com/Arekejoker/qwen21-nsfw-pose-skill/actions/workflows/validate.yml)
> 
> **Qwen-Image 2.1 本地 NSFW / 姿势出图完整配方** — 作者级提示词结构 + NSFW LoRA + 136 个 3D 姿势库 + VNCCS 人偶精确姿势控制。
> 
> 基于 ComfyUI + `qwen_image_2.1_int8_convrot` 底模（与 Civitai 作者同款底模），复刻并验证过 Civitai 作者样图（2026-10-12）。
> 
> - 适用：Claude Code / Codex / Cursor / OpenClaw（agent 技能）+ 人类手动使用
> - 内容：可跟跑的作者案例、强制配方、姿势大胆度阶梯（L0–L3）、完整依赖与安装指南
> 
> **演示**（3D 人偶调姿势 → 一键生成 → 成品，Route ④）：
> 
> ---
> 
> ## 效果展示
> 
> ### 本配方输出：同一海边场景的三级对照（L0 → L1 → L2）
> 
> | L0 · 全着装，无 LoRA（提示词即全部） | L1 · 湿身泳装 + LoRA@1.0 | L2 · 极低机位 + 湿身蹲姿 + LoRA@1.0 |
> | --- | --- | --- |
> |  |  |  |
> 
> 三张图同场景递进：L0 只有提示词；L1 加 LoRA + 显式皮肤/水珠描写；L2 再加低机位与开合姿态。**LoRA 负责质感，提示词负责信息密度，机位负责大胆度。**
> 
> ### NSFW 效果（⚠️ 以下图片包含裸露内容）
> 
> 👇 点击上方卡片展开作者原图（含裸露内容 · 18+，再点收起）
> 
> **作者原图**（Civitai showcase，本配方复刻的目标）：
> 
> | 作者 · 淋浴（tawsLoRa） | 作者 · 按摩（tawsLoRa） | 作者 · 自拍（TheseAlpacas） |
> | --- | --- | --- |
> |  |  |  |
> 
> 用 §「快速开始」的命令可复刻淋浴那张（复刻输出已验证与作者原图同场景同构图，见 `downloads/samples/phase5_meta.json` 与本文快速开始一节）。
> 
> ### 3D 人偶精确姿势（Route ④，136 姿势库）
> 
> 默认人物图 `references/src_standing.png`；姿势 = 骨骼旋转 JSON（MakeHuman 网格 + three.js 渲染），
> 换姿势且保身份。姿势库来源：HuggingFace 4 个公开仓库（`Totemistyk/General_Poses`、
> `Totemistyk/Ballet_PoseStudio`、`MIUProject/VNCCS_PoseLibrary_Main`、
> `MIUProject/MySuperPoseRepo`）+ 55 个手工精选，共 **136 个**。
> 
> ---
> 
> ## 快速开始（作者案例跟跑）
> 
> 前置安装见 [install/setup.md](install/setup.md)。装好后先跑一次自检（只读，不改动任何东西）：
> 
> ```bash
> python3 scripts/doctor.py
> ```
> 
> 它逐项检查 ComfyUI 连通性、底模/LoRA、VNCCS 节点、姿势库、浏览器后端，并给出缺失项的修复指引。
> 全绿后一条命令复刻作者淋浴样图（~5 分钟）：
> 
> ```bash
> python3 scripts/qwen_pose_test.py \
>   --mode t2i --name author_case_shower \
>   --prompt "$(cat prompts/taws_v13_shower.txt)" \
>   --seed 80964 \
>   --steps 50 --cfg 2.5 --sampler er_sde --scheduler beta \
>   --width 1152 --height 1728 \
>   --lora "qwen2_1-femaledVaginus-nsfw-v1_3-fine_L22-31.safetensors" \
>   --lora-strength 1.0 \
>   --out outputs/author_case/shower.png
> ```
> 
> 对比对象：`downloads/samples/taws_v13_shower_author.jpg`。
> 完整元数据（提示词/参数/seed/完整工作流）：`downloads/samples/phase5_meta.json`。
> 
> ### 硬件要求（参考）
> 
> 底模为 Qwen-Image 2.1 int8 套件，模型文件合计约 16GB（diffusion 6.8GB / text encoder 8.7GB / VAE 0.6GB），LoRA 各自 ≤608MB。
> 
> - **最低**：NVIDIA 12GB 显存 + 32GB 内存——能跑，ComfyUI 会自动把部分模型卸载到内存，出图慢一些
> - **推荐**：24GB 显存（3090/4090 级）+ 32–64GB 内存——模型基本常驻，体验最顺
> - **8GB 显存**：建议用 GGUF 量化版（社区实测 12–16GB 显存可跑 Q4；8GB 靠 offload 会明显更慢）
> - 纯 CPU 不推荐（单张图耗时过长）
> - 硬盘预留 ~40GB；CPU 无特殊要求（现代 x86_64/ARM 均可）；Linux 最省事，Windows 建议 WSL2，Mac 统一内存能跑但更慢
> - 路线④额外需要一个可连接的桌面浏览器（Playwright/CDP，见 `install/setup.md`）
> 
> 本仓库案例图与实测数据来自统一内存设备（DGX Spark）：1024×1024、40 步约 32 秒/张，峰值增量约 7–10GB。
> 
> ## 三条路线
> 
> | 需求 | 路线 | 命令 |
> | --- | --- | --- |
> | 新 NSFW/性感图（文字出图） | ① T2I + NSFW LoRA（必开） | `scripts/qwen_pose_test.py --mode t2i` |
> | 已有角色图换姿势（保脸/保服装） | ② Edit | `scripts/qwen_pose_test.py --mode edit` |
> | 指定 3D 姿势库里的精确姿势 | ④ VNCCS PoseStudio | `scripts/run_vnccs_ui.py --pose  [--prompt ""]` |
> 
> 姿势怎么选（大胆度阶梯 L0–L3、用户要求→姿势族映射表）：见 `SKILL.md` §4，或
> `scripts/run_vnccs_ui.py --list-poses` 列出全部 136 个姿势。
> 
> ## 配方要点（摘要）
> 
> - `er_sde` + `beta`，CFG 2.5，50 步，1152×1728 竖版
> - **NSFW LoRA 永远开**（默认 `femaledVaginus v1.3b` @ 1.0）
> - 提示词必须按作者结构写满 7 要素、300–1500 字符、含 LoRA 触发词
> - 弱化配方（无 LoRA/短提示词/减步数）前必须告知用户代价，不许默默减弱
> 
> 完整规则与证据：`SKILL.md`。
> 
> ## 目录结构
> 
> ```
> ├── SKILL.md            # agent 技能（完整规则）
> ├── install/setup.md    # 安装指南（模型/LoRA/节点/姿势库）
> ├── scripts/            # doctor.py 自检、出图/自定义姿势脚本、浏览器 fallback、media_lock.py、validate_package.py
> ├── workflows/          # qwen21_t2i.json / qwen21_edit.json / VNCCS_PoseStudio_QI2.1.json
> ├── prompts/            # 3 篇作者原提示词 + 参数
> ├── references/         # 效果展示图（L0/L1/L2 海边对照）+ 默认人物图
> ├── downloads/samples/  # 作者原图 + 作者元数据 + 原始工作流 JSON
> └── pose_library/       # 55 个手工精选姿势（安装时拷入 ComfyUI）
> ```
> 
> ## 说明
> 
> - 本仓库原创代码与文档（`scripts/`、`workflows/`、`prompts/`、`SKILL.md`、README 等）采用 [Apache License 2.0](LICENSE)
> - 第三方素材不在 Apache-2.0 覆盖范围内，权利归各自原作者：`downloads/samples/` 作者原图（Civitai 作者）、`pose_library/` 社区姿势与预览（MIUProject / Totemistyk，其中 Ballet 仓库为 MIT）、模型与 LoRA（HF `Comfy-Org/Qwen-Image-2.1`、Civitai 2986844 / 2958918 / 2988215、RunningHubAI、MIUProject 等）
> - NSFW 示例图仅供配方演示；仓库为公开仓库，介意图片的先收藏后阅读

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Arekejoker/qwen21-nsfw-pose-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Arekejoker--qwen21-nsfw-pose-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Arekejoker--qwen21-nsfw-pose-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "Arekejoker--qwen21-nsfw-pose-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Arekejoker--qwen21-nsfw-pose-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Arekejoker" AND file.name != "Arekejoker--qwen21-nsfw-pose-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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
> const me = dv.page("Repos/Arekejoker--qwen21-nsfw-pose-skill");
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

> **2026-10-16** — 首次收錄
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

- [[2026-10-16|2026-10-16]] — 首次收錄，2.1k stars
