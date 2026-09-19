---
repo: mcncarl/jianying-headless
url: https://github.com/mcncarl/jianying-headless
owner: mcncarl
owner_type: User
language: Python
license: NOASSERTION
description: "Private source preview: native Jianying drafts, isolated editing/export, and standalone Agent Skill."
homepage: ""
stars: 1164
stars_per_day: 388
forks: 538
open_issues: 3
created: 2026-09-15
pushed_at: 2026-09-19
first_seen: 2026-09-19
week: "2026-W38"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-19
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-22"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 10386
readme_length: 4067
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-19"
star_history: "2026-09-19:1164"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "jianying-headless"
  - "mcncarl/jianying-headless"
---

# jianying-headless

**1.2k** stars · **388** stars/天 · 建立 3 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/mcncarl--jianying-headless");
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

`個人專案`

> [!summary] 一句話摘要
> Private source preview: native Jianying drafts, isolated editing/export, and standalone Agent Skill.

## 專案簡介

Private source preview: native Jianying drafts, isolated editing/export, and standalone Agent Skill.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
| Forks | 538 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-19 |
| 建立日期 | 2026-09-15 |
| Repo 大小 | 10.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mcncarl/jianying-headless) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "C++" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mcncarl](https://github.com/mcncarl) | 5 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-15 ~ 2026-09-19）
> **活躍天數** 2 天 · **最新 commit** Add beginner setup guide and verified first-draft workflow

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/mcncarl/jianying-headless/issues/3) | 11.5.0 native codec build blocked by exact libvideoeditor ha | 0 | 1 |
> | [#2](https://github.com/mcncarl/jianying-headless/issues/2) | 干净机器无法复现 codec 固定哈希，请求公开精确工具链标识或分发已验二进制 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Jianying Headless
> 
> 面向剪映专业版 macOS 的本地自动化工具。通过结构化剪辑计划生成可编辑草稿，
> 在独立副本中修改多轨工程，并调用本机剪映引擎导出 MP4。
> 
> **主要适配版本：11.5.0 · 兼容版本：11.4.2**
> 
> **首次使用请从 [从零生成第一个剪映草稿](docs/GETTING-STARTED.md) 开始。**
> 教程包含安装前提、环境检查、拖入自己的视频、首页登记、保存重开和常见报错处理。
> 11.5.0 仍需匹配具体安装身份与工具链，尚不保证任意电脑安装即用。
> 
> 项目适用于 AI 视频工作流的工程交接、批量草稿生成和 Agent 辅助剪辑。
> 提供 Python 命令行入口及配套 Agent Skill。它不是剪映官方 SDK，运行时需要安装匹配版本的剪映。
> 
> ## 核心功能
> 
> | 功能 | 支持范围 |
> | --- | --- |
> | 生成可编辑草稿 | 视频分段、多轨组合、变速、音量、画中画、字幕和标题 |
> | 导入本地素材 | 视频、PNG、JPEG、GIF、配音、音乐和音效 |
> | 基础动画 | 位置、缩放、旋转、透明度和音量的线性关键帧 |
> | 原生效果 | 六类静态几何蒙版、叠化转场、轻微抖动；需要匹配的本机资源与使用权限 |
> | 编辑已有工程 | 检查源草稿，在独立副本中修改，不覆盖原项目 |
> | 原生视频导出 | 通过本机剪映引擎将已验证快照导出为 H.264/AAC MP4 |
> | 环境与工程检查 | 核对运行版本、组件身份、素材完整性和草稿保存结果 |
> 
> 核心流程为：**素材与剪辑计划 → 可编辑剪映草稿 → 原生引擎导出**。
> 剪映中后续手工修改的内容不会自动同步回原计划或旧导出快照。
> 
> ## Hypit 协作案例
> 
> 一个约 **50.23 秒**的 IG 滚动动画教程展示了从 Hypit 到剪映的工程交接。
> 转换使用原工程的独立画面、配音、图片和文字时间安排，而不是仅导入一条最终成片。
> 
> | 工程内容 | 数量 |
> | --- | --- |
> | 原始素材 | 39 份 |
> | 视频与图片 | 8 条轨道、38 个片段 |
> | 独立配音 | 1 条轨道、7 个片段 |
> | 可编辑文字 | 14 条轨道、109 个片段 |
> | 合计 | 23 条轨道、154 个片段 |
> 
> 该案例已在剪映 11.5.0 完成构建、打开播放、保存、完全退出、冷重开和结构回读，
> 并通过原生导出的 **1507 / 1507 帧**检查与完整解码检查。
> 
> ### 画面对照
> 
> | Hypit 原成片 | 剪映工程原生导出 |
> | --- | --- |
> |  |  |
> 
> 两组图片均取自真实案例的 1、8、17、28、37、48 秒。展示的是可编辑工程交接，
> **不是视觉无损转换**：特殊字体、逐词颜色动画、部分裁切与阴影未原样保留，
> 第 37 秒的补充画面也存在差异。完整主观视听验收尚未完成。
> 
> 详见 [Hypit 协作案例](docs/HYPIT-COLLABORATION.md) 和 [媒体说明](docs/media/README.md)。
> 当前转换是单向、按项目实现；不提供任意 Hypit 工程的一键无损转换或双向同步。
> 
> ## 运行环境
> 
> - Apple Silicon Mac，macOS 26.0+；已验证环境为 macOS 26.5.1。
> - 剪映专业版 11.5.0，或兼容配置对应的 11.4.2。
> - Python 3.9+、FFmpeg / ffprobe、Xcode Command Line Tools。
> - 已验证桥接工具链：Apple clang 21.0.0 / macOS SDK 26.5。
> 
> 应用版本、build、官方库哈希、签名与开发者身份均有检查。
> 未知版本或不匹配组件会被拒绝，不通过放宽校验强行运行。干净机器安装验收尚未完成。
> 官方引擎、账号数据、原始工程素材库和效果资源不随源码分发。
> 
> ## 快速开始
> 
> ```bash
> git clone https://github.com/mcncarl/jianying-headless.git
> cd jianying-headless
> python3 tools/build_native_codec.py
> python3 skills/yichen-jianying-edit/scripts/headless_draft.py doctor
> ```
> 
> `doctor` 是**环境检查命令**：检查剪映版本、组件身份和必要工具。
> 检查通过表示环境符合运行条件，不代表任意草稿都已通过画面、声音或导出验收。
> 
> 桥接构建只编译项目源码并链接本机已安装程序库，不下载剪映、不修改官方库或账号权益。
> 编译结果必须匹配固定哈希，否则停止。
> 
> 按 [计划格式](skills/yichen-jianying-edit/references/headless-macos.md) 准备 JSON，
> 或参考 [基础计划](examples/basic.plan.json) 和 [Hypit 交接格式示例](examples/hypit-handoff.plan.json)。
> 示例中的素材路径须替换为有权使用的本地文件。
> 
> ```bash
> python3 skills/yichen-jianying-edit/scripts/headless_draft.py build \
>   --plan /absolute/path/to/plan.json --out "$PWD/work/new-build"
> python3 skills/yichen-jianying-edit/scripts/headless_draft.py verify-build \
>   --build "$PWD/work/new-build"
> ```
> 
> 保存当前工作并完全退出剪映后，将新草稿登记到本机首页：
> 
> ```bash
> python3 skills/yichen-jianying-edit/scripts/headless_draft.py publish \
>   --build "$PWD/work/new-build" --audit "$PWD/work/new-publish-audit"
> ```
> 
> `publish` 在此仅指本机首页登记，不是互联网发布。生成的草稿仍需实际打开、播放和保存检查。
> 需要成片时，可独立导出已验证快照：
> 
> ```bash
> python3 skills/yichen-jianying-edit/scripts/headless_draft.py export \
>   --build "$PWD/work/new-build" --out "$PWD/work/new-export"
> ```
> 
> 输出目录须不存在，成片为该目录下的 `render.mp4`。
> 导出在隔离进程中运行，默认不联网、不读取账号数据。
> 
> ## Agent Skill
> 
> `skills/yichen-jianying-edit/` 提供 Agent 调用入口、口播计划辅助脚本与操作参考。
> Skill 不包含剪映引擎；独立安装后仍需检出核心项目，并指定其路径：
> 
> ```bash
> export JIANYING_HEADLESS_ROOT="/absolute/path/to/jianying-headless"
> ```
> 
> 安装说明见 [独立 Skill](skills/yichen-jianying-edit/README.md)。
> Skill 另收录于 [yichen-skills](https://github.com/mcncarl/yichen-skills/tree/main/yichen-jianying-edit)。
> 
> ## 当前限制
> 
> - 复合片段仅支持实验性的离线修改与冻结快照导出，尚不能交付为保存可靠的可编辑嵌套草稿。
> - 图片/GIF 样本曾出现间歇少一帧；严格帧数检查会拒绝缺帧输出，根因尚未解决。
> - 不支持任意剪映版本、任意效果组合、在线模板、资源下载、云端工程或账号权益获取。
> - 高清黑白滤镜与橙色描边花字已退出支持范围；含这些效果的计划或旧快照会明确报错。
> - 工程结构检查、原生播放、视觉一致性、主观听感与素材许可是不同的验收项目。
> 
> 详细结果及已知问题见 [验证状态](docs/VERIFICATION.md)。
> 
> ## 项目结构与验证
> 
> | 目录 | 内容 |
> | --- | --- |
> | `engine/` | 草稿构建、独立副本编辑、资源校验与原生导出 |
> | `bridge/` | 文件与管道桥接源码、保留来源声明的接口头文件 |
> | `skills/` | Agent Skill 及配套参考 |
> | `tools/`、`tests/` | 构建、源码包装检查与可移植测试 |
> | `licenses/` | 第三方许可证 |
> 
> ```bash
> python3 tools/check_package.py
> python3 -m unittest discover -s tests -v
> ```
> 
> 专项原生测试的本机素材与证据不随仓库分发；源码检查不能替代实际工程验收。
> 
> ## 许可与来源
> 
> 原创部分采用 [个人学习和非商业使用许可](LICENSE)；商业使用需取得作者书面授权。
> 第三方内容继续适用原许可证，详见 [第三方声明](THIRD_PARTY_NOTICES.md)。
> 本项目不是 MIT / Apache-2.0 整包授权，代码许可也不包含剪映集成授权、账号权益或素材许可。
> 分发边界见 [分发范围](docs/DISTRIBUTION-SCOPE.md)。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/mcncarl/jianying-headless)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "mcncarl--jianying-headless"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "mcncarl--jianying-headless" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W38" AND file.name != "mcncarl--jianying-headless"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/mcncarl--jianying-headless");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mcncarl--jianying-headless" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mcncarl" AND file.name != "mcncarl--jianying-headless"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
> const me = dv.page("Repos/mcncarl--jianying-headless");
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
> const me = dv.page("Repos/mcncarl--jianying-headless");
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

> **2026-09-19** — 首次收錄
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

- [[2026-09-19|2026-09-19]] — 首次收錄，1.2k stars
