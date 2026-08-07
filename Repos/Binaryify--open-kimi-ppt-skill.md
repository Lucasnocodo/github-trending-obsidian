---
repo: Binaryify/open-kimi-ppt-skill
url: https://github.com/Binaryify/open-kimi-ppt-skill
owner: Binaryify
owner_type: User
language: Python
license: MIT
description: "非官方 Kimi Slides Skill：让 AI Agent 生成可编辑 PPTD + PPTX，并附带本地浏览器编辑器 Unofficial Kimi Slides skill for AI agents — generate editable PPTD + PPTX with a local browser editor"
homepage: ""
stars: 1456
stars_per_day: 1456
forks: 371
open_issues: 5
created: 2026-08-05
pushed_at: 2026-08-06
first_seen: 2026-08-07
week: "2026-W32"
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
last_reviewed: 2026-08-07
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-10"
contributor_count: 2
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 108676
readme_length: 7386
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-07"
star_history: "2026-08-07:1456"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "open-kimi-ppt-skill"
  - "Binaryify/open-kimi-ppt-skill"
---

# open-kimi-ppt-skill

**1.5k** stars · **1.5k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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

> [!summary] 一句話摘要
> 非官方 Kimi Slides Skill：让 AI Agent 生成可编辑 PPTD + PPTX，并附带本地浏览器编辑器 Unofficial Kimi Slides skill for AI agents — generate editable PPTD + PPTX with a local browser editor

## 專案簡介

非官方 Kimi Slides Skill：让 AI Agent 生成可编辑 PPTD + PPTX，并附带本地浏览器编辑器 Unofficial Kimi Slides skill for AI agents — generate editable PPTD + PPTX with a local browser editor

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
| Forks | 371 |
| Open Issues | 5 |
| Issue 解決率 | 29% (2 closed) |
| 最後推送 | 2026-08-06 |
| 建立日期 | 2026-08-05 |
| Repo 大小 | 106.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Binaryify/open-kimi-ppt-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 43
>     "JavaScript" : 39
>     "CSS" : 9
>     "HTML" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Binaryify](https://github.com/Binaryify) | 17 |
> | [@yoruuuchan](https://github.com/yoruuuchan) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-06 ~ 2026-08-06）
> **活躍天數** 1 天 · **最新 commit** chore: 1.2.0 rename CLI to open-kimi-ppt-skill and add --version

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Binaryify/open-kimi-ppt-skill/issues/9) | 成功生成了PPTD但无法导出PPTX | 0 | 1 |
> | [#8](https://github.com/Binaryify/open-kimi-ppt-skill/issues/8) | 导出PPT /apiv2/utils/v1/signatures报错 | 0 | 2 |
> | [#7](https://github.com/Binaryify/open-kimi-ppt-skill/issues/7) | 您好，PPTX的导出依赖kimi公开编辑器，有无可能有其他替代？ | 0 | 2 |
> | [#3](https://github.com/Binaryify/open-kimi-ppt-skill/issues/3) | 有没有办法去掉kimi的依赖 | 0 | 3 |
> | [#1](https://github.com/Binaryify/open-kimi-ppt-skill/issues/1) | 是否考虑上架到skills.sh | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # open-kimi-ppt-skill
> 
> [简体中文](README.md) | [English](README_EN.md)
> 
> [](https://www.npmjs.com/package/open-kimi-ppt-skill)
> [](https://nodejs.org)
> 
> 逆向 Kimi Slides 实现的非官方演示文稿 Skill，让 AI Coding Agent 可以创建、编辑、复刻、读取并导出 PPT/PPTX。每次生成默认产出两份文件：可继续编辑的 PPTD 项目，以及嵌入字体、带淡入淡出翻页切换的 PPTX。支持页内元素动画和[预设主题](theme.md)，附带本地浏览器编辑器，可随时手动导出 PPTX。支持 Codex、Claude Code、Cursor、WorkBuddy 等任何兼容 SKILL.md 规范的 Agent。
> 
> > [!IMPORTANT]
> > 本项目通过逆向分析 Kimi Slides Skill、PPTD 格式以及公开网页编辑器的前端行为与通信协议实现，并非 Kimi 或 Moonshot AI 的官方项目，也未获得其认可或支持。项目依赖的公开前端资源和兼容协议可能随 Kimi 更新而失效，仅供学习与研究使用。
> 
> ## 安装
> 
> 需要 Node.js 18 或更高版本。**请用 `npx` 安装，不要 clone 仓库**：仓库图片多、体积大，`npx` 只取打包后的 Skill 文件。默认装到共享目录 `~/.agents/skills/open-kimi-ppt`（Windows 为 `%USERPROFILE%\.agents\skills\open-kimi-ppt`），多数 Agent 装一次即可发现。
> 
> ### 方式一：让 AI 安装（推荐）
> 
> 对 AI 说「帮我用 npx 安装 open-kimi-ppt skill」，或直接让它执行：
> 
> ```bash
> npx open-kimi-ppt-skill@latest install -y
> ```
> 
> **WorkBuddy 用户**：它发现不了共享目录，对 AI 说「帮我用 npx 安装 open-kimi-ppt skill 到 WorkBuddy」，或让它执行：
> 
> ```bash
> # macOS / Linux
> npx open-kimi-ppt-skill@latest install --target ~/.workbuddy/skills
> # Windows
> npx open-kimi-ppt-skill@latest install --target %USERPROFILE%\.workbuddy\skills
> ```
> 
> ### 方式二：终端手动安装
> 
> ```bash
> # 交互多选目录（空格选择、回车确认）
> npx open-kimi-ppt-skill install
> 
> # 非交互：只装共享目录
> npx open-kimi-ppt-skill install -y
> 
> # 装到全部已检测到的 Agent 目录（不存在的会跳过）
> npx open-kimi-ppt-skill install --all
> ```
> 
> `--all` 与交互多选会检测以下目录：`~/.agents/skills`、`~/.codex/skills`、`~/.claude/skills`、`~/.cursor/skills`、`~/.workbuddy/skills`。
> 
> ### Agent 发现不了 Skill 时
> 
> 先用共享目录，不要默认对每个 Agent 各装一遍；确认某个 Agent 发现不了时，再为它单独指定目录（`--target` 可重复，Windows 下用 `%USERPROFILE%` 代替 `~`）：
> 
> ```bash
> npx open-kimi-ppt-skill@latest install --target ~/.codex/skills --target ~/.claude/skills
> ```
> 
> ### 更新
> 
> 再执行一次 `npx open-kimi-ppt-skill@latest install -y` 即可覆盖更新；当初用过 `--target` / `--all` 就带上相同参数。更新只替换 Skill 文件，不影响已生成的 PPTD / PPTX 项目。
> 
> ## 使用
> 
> ### 让 Agent 生成 PPT
> 
> 安装完成后，直接向 Agent 描述需求即可。默认会同时生成完整的 PPTD 项目目录（可继续编辑）和对应的 PPTX 文件；只有明确要求只输出 PPTD 时才会跳过 PPTX 生成。
> 
> 为了更稳定的出品，Prompt 里最好带上风格（如「深色产品发布风」），或附上参考 PPT 模板；只写主题、不给风格时效果更容易波动。
> 
> #### Prompt 示例
> 
> **示例 1：小米 YU7（约 8 页，图片作背景）**
> 
> ```text
> 使用 open-kimi-ppt 做一个介绍小米 yu7的 PPT,要求图片做背景,素材从网上找,8 页左右
> ```
> 
> | 在线编辑 PPTD | 导出 PPTX |
> | :---: | :---: |
> | [](docs/images/example-yu7-editor.png) | [](docs/images/example-yu7-pptx.png) |
> 
> [](docs/images/example-workbuddy-yu7.png)
> 
> **示例 2：DJI Pocket 4（图片作背景）**
> 
> ```text
> 使用 open-kimi-ppt 帮我生成DJI Pocket4 的 PPT,要求图片做背景,素材从网上找
> ```
> 
> | 在线编辑 PPTD | 导出 PPTX |
> | :---: | :---: |
> | [](docs/images/example-dji-pocket4-editor.png) | [](docs/images/example-dji-pocket4-pptx.png) |
> 
> **示例 3：iPhone 17 Pro（约 8 页）**
> 
> ```text
> 使用 open-kimi-ppt 制作 iPhone 17 Pro 介绍 PPT
> ```
> 
> [](docs/images/example-iphone-17pro.png)
> 
> **示例 4：带页内元素动画（现场演示）**
> 
> ```text
> 使用 open-kimi-ppt 做一个介绍小米 yu7的 PPT,要求图片做背景,素材从网上找,8 页左右
> 要求带元素入场动画
> ```
> 
> 成品示例见 [example/xiaomi-yu7-ppt-animation](example/xiaomi-yu7-ppt-animation)（含 PPTD 项目与 PPTX，可用 `npx open-kimi-ppt-skill serve` 打开预览动画）。
> 
> ### 在线编辑与手动导出
> 
> 建议直接让 AI 启动本地编辑器，例如说：
> 
> ```text
> 帮我执行 npx open-kimi-ppt-skill serve
> ```
> 
> 也可以自己在终端运行：
> 
> ```bash
> npx open-kimi-ppt-skill serve
> ```
> 
> 然后打开 ，选择包含 `.pptd` 清单、`pages/` 和 `media/` 的完整项目文件夹，即可在浏览器中查看、编辑项目并导出 PPTX。仓库自带的 [example/dji-pocket4](example/dji-pocket4) 是一个完整的 18 页示例项目，可直接打开体验。
> 
> ```bash
> # 启动后自动打开浏览器
> npx open-kimi-ppt-skill serve --open
> 
> # 使用其他端口
> npx open-kimi-ppt-skill serve --port 56000
> ```
> 
> 可写目录需要使用支持 File System Access API 的 Chromium 系浏览器；其他浏览器会回退为只读文件夹上传。按 `Ctrl+C` 停止服务。
> 
> ### Windows：常驻调试浏览器说明
> 
> 在 Windows 上导出 PPTX 时，脚本会自动启动一个**常驻的调试浏览器**。这是有意设计，不是异常进程：
> 
> - **为什么需要**：agent-browser 在 Windows 下无法自行启动 Chrome（Chrome 启动器把进程交接给子进程后立即退出，被误判为崩溃），导出只能改为驱动一个外部启动的浏览器。
> - **它是什么**：优先使用本机 Chrome，未安装时回退到 Edge；以 `--remote-debugging-port`（默认 `9337`）和独立配置目录 `%TEMP%\okp-cdp-profile` 启动，窗口定位在屏幕外，不影响日常使用。
> - **为什么常驻**：导出完成后实例保持运行，下次导出会复用同一个实例，而不是每导一次就多一个浏览器进程——设计目标是「最多一个，反复复用」。若想关掉，直接结束该浏览器进程即可，下次导出会自动重新拉起。
> - **想完全自控**：自行以 `--remote-debugging-port=` 启动浏览器，并把环境变量 `AGENT_BROWSER_CDP` 设为该端口，脚本会优先使用你自己的实例。
> 
> macOS / Linux 无此行为，不受影响。
> 
> ## 功能特性
> 
> - PPTD 生成：让 Agent 生成完整、可继续编辑的 PPTD 项目，支持从零创作、风格迁移、模板复用、图片/PDF 复刻。
> - 预设主题：内置约 30 套官方同款 design system，点名即可套用；完整列表与预览图见 [theme.md](theme.md)。
> - 元素动画：默认不加。提示词加上「要求带元素入场动画」即可，由 AI 按页编排合适的入场效果。
> - PPTX 生成：默认同步生成 PPTX，自动嵌入字体并写入淡入淡出翻页切换（与页内元素动画是两回事）。
> - 视觉质检：多模态模型在导出 PPTX 前自动导出整份页面图片、拼接总览图逐项核查（变形、遮挡、出界、对比度、排版、文字溢出），问题页面修复后复检，直至全部通过。
> - 在线编辑：通过浏览器查看和编辑本地 PPTD 项目，自动保存，可配置页面切换动画。
> - 手动导出：在编辑器中随时手动导出 PPTX。
> - 格式互转：将现有 PPTX 转换为 PPTD 后继续修改。
> - 安全可控：本地编辑仅在用户明确授权的项目目录内读写文件。
> 
> ## 为什么选 open-kimi-ppt
> 
> 常见 PPT Skill 大致分三类：用代码库直接拼 OOXML / pptxgenjs、整页生成图片再塞进 PPTX、或输出网页 HTML 翻页。open-kimi-ppt 走的是 PPTD 中间层 + 真实可编辑 PPTX 这条路线，想让 Agent 好写、人好看、PowerPoint 能改。
> 
> | | open-kimi-ppt | 代码拼 PPTX（如 pptxgenjs） | 整页图片 PPT | 网页 HTML PPT |
> | --- | --- | --- | --- | --- |
> | 交付物 | PPTD 项目 + PPTX | 多为仅 PPTX | 多为仅 PPTX | 单文件 HTML |
> | Agent 友好度 | YAML 逐页描述，结构清晰 | 坐标/API 细节多，易排版翻车 | 依赖出图模型与提示词 | HTML/CSS 模板约束强 |
> | PowerPoint 可编辑 | 文本、形状、图片可继续改 | 可编辑，但难二次精修 | 整页位图，难改字 | 不是原生 PPTX |
> | 视觉质量 | 真实版式 + 导出前多模态质检 | 依赖 Agent 手调布局 | 画面统一，偏海报感 | 动效强，适合演示分享 |
> | 二次编辑 | 浏览器可视化编辑 + 自动保存 | 主要靠改代码重导出 | 基本需重新出图 | 改 HTML 源码 |
> | 适用场景 | 要交可改的正式 PPTX，又要好看 | 结构化汇报、模板填充 | 视觉统一的海报风讲稿 | 浏览器内演讲 / 发布会 |
> 
> 具体来说：
> 
> - PPTD 用 YAML 描述主题、布局与元素，比直接写 OOXML / pptxgenjs 更稳，也比整页渲一张图更方便局部修改。
> - 默认同时交付两份文件：可继续迭代的 PPTD 项目，加上嵌字体、带淡入淡出翻页的 PPTX，不是只给半成品。
> - 提示词写「要求带元素入场动画」即可启用元素动画，具体效果与节奏由 AI 处理，不用自己点名动画类型。
> - 导出的 PPTX 里，文本框、形状仍可在 PowerPoint / WPS 中编辑，不像图片型 PPT 只能当海报。
> - 浏览器里可以预览、微调、配置切换动画并再次导出，不用每次都让 Agent 重跑全流程。
> - 导出前会做视觉质检：整页截图加总览图，检查遮挡、出界、对比度、溢出等问题，修完再出 PPTX。
> - 不绑定官方模型，成本更低。相对官方 Kimi Slides，可以在任意兼容 Agent 里使用 DeepSeek 等低成本模型；模型不支持多模态时，按 PPTD 规范生成也能做出像样的成品，有多模态时再做一遍视觉质检会更稳。
> 
> [](docs/images/example-deepseek-liquid-glass.png)
> 
> *上图：在 WorkBuddy 中用 DeepSeek-V4-Flash 生成的 Apple Liquid Glass 风格 PPT。*
> 
> [](docs/images/example-reasonix-deepseek.png)
> 
> *上图：在 Reasonix 中使用 DeepSeek-V4-Flash 生成 DJI Pocket 4 Pro PPT。*
> 
> [](docs/images/example-codex-iphone17pro.png)
> 
> *上图：在 ChatGPT / Codex 中使用 5.6 Luna 模型生成的 iPhone 17 Pro PPT。*
> 
> ### 关于风格与主题
> 
> 默认 **不会** 自动套用固定主题：未指定风格时由 Agent 按场景指南自行发挥。Skill 内另附约 30 套官方同款 preset，**仅在你点名时**才会使用（例如「用 pine-green-strategy」）。
> 
> 完整主题名、风格说明与预览图见 **[theme.md](theme.md)**。
> 
> > [!TIP]
> > 建议在 Prompt 里写明 PPT 风格、点名一套 preset，或直接附上参考 PPT / PPTX 模板。有风格约束或模板参照时，效果会稳定不少；只给主题不给风格时，Agent 只能自行发挥，容易波动。
> 
> 常见用法：
> 
> 1. **在 Prompt 里描述风格**：例如「深色科技风」「杂志排版」「苹果 liquid glass」「极简留白 + 大字报」等；
> 2. **点名预设主题**：例如「用 `pine-green-strategy`」——主题列表见 [theme.md](theme.md)；
> 3. **提供参考模板**：上传现有 PPT / PPTX / 截图，让 Agent 迁移配色、版式与风格。
> 
> 可组合使用：先点名 preset 或给模板定调，再用一句话补充本次要强化的风格。
> 
> ## 界面预览
> 
> | 在线编辑 PPTD | 导出 PPTX |
> | :---: | :---: |
> | [](docs/images/editor-overview.png) | [](docs/images/export-pptx.png) |
> 
> ## 什么是 PPTD
> 
> PPTD 是一种基于 YAML 的演示文稿 DSL，是 OOXML 之上的简化抽象层：保留主题、页面布局、元素位置等核心信息，去除了 Master 等复杂嵌套，每页自包含、所见即所得。完整的格式定义见 [reference/pptd.md](skills/open-kimi-ppt/reference/pptd.md)。
> 
> 一个完整的 PPTD 项目目录结构如下：
> 
> ```text
> deck/
>   deck.pptd     # 清单文件
>   pages/        # 每页一个 .page 文件
>   media/        # 本地媒体资源（如有）
>   deck.pptx     # 默认同步生成的 PPTX 成品
> ```
> 
> ## 工作原理与安全边界
> 
> - CLI 只在 `127.0.0.1` 启动静态文件服务，不会监听局域网地址。
> - 浏览器只在用户主动授权后读取完整 PPTD 项目目录。
> - 保存回调只允许修改 `.pptd` 和 `.page` 文件，并拒绝绝对路径与 `..` 路径越界。
> - PPTD 内容由本地宿主交给公开的 Kimi 网页编辑器处理；远程图片、字体和编辑器资源仍可能从对应服务器加载。
> - 本项目不会提供或注入 Kimi 登录令牌，也不会访问用户的 Kimi 私有文稿。
> 
> ## 兼容性说明
> 
> 这是针对当前公开实现的兼容宿主，不是稳定的官方 SDK。Kimi 更新前端资源哈希、PPTD 格式或 iframe/RPC 协议后，本项目可能需要同步升级。成功生成 PPTX 也不代表 PowerPoint、WPS 和 Keynote 对所有动画效果都能完全一致地播放。
> 
> ## 本地开发
> 
> ```bash
> npm install --global .
> npm test
> npm run pack:check
> ```
> 
> ## 声明
> 
> Kimi、Kimi Slides 及相关商标归其权利人所有。

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]]

[GitHub](https://github.com/Binaryify/open-kimi-ppt-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Binaryify--open-kimi-ppt-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Binaryify--open-kimi-ppt-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "Binaryify--open-kimi-ppt-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Binaryify--open-kimi-ppt-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Binaryify" AND file.name != "Binaryify--open-kimi-ppt-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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
> const me = dv.page("Repos/Binaryify--open-kimi-ppt-skill");
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

> **2026-08-07** — 首次收錄
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

- [[2026-08-07|2026-08-07]] — 首次收錄，1.5k stars
