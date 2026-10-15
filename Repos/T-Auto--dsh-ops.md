---
repo: T-Auto/dsh-ops
url: https://github.com/T-Auto/dsh-ops
owner: T-Auto
owner_type: User
language: JavaScript
license: NOASSERTION
description: "A toolkit for low-level operations in DSH, designed to reduce token usage and task execution time / DSH 底层操作工具插件，旨在减少 Token 消耗与任务耗时"
homepage: ""
stars: 1817
stars_per_day: 303
forks: 34
open_issues: 36
created: 2026-10-08
pushed_at: 2026-10-15
first_seen: 2026-10-15
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.3.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 40
repo_size_kb: 1376
readme_length: 4304
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-15"
star_history: "2026-10-15:1817"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/dsh"
  - "topic/dsh_plugin"
  - "topic/dsh_plugins"
aliases:
  - "dsh-ops"
  - "T-Auto/dsh-ops"
---

# dsh-ops

**1.8k** stars · **303** stars/天 · 建立 6 天前 · JavaScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/T-Auto--dsh-ops");
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

`v0.3.0`

`dsh` `dsh-plugin` `dsh-plugins`

> [!summary] 一句話摘要
> A toolkit for low-level operations in DSH, designed to reduce token usage and task execution time / DSH 底层操作工具插件，旨在减少 Token 消耗与任务耗时

## 專案簡介

A toolkit for low-level operations in DSH, designed to reduce token usage and task execution time / DSH 底层操作工具插件，旨在减少 Token 消耗与任务耗时

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
| Forks | 34 |
| Open Issues | 36 |
| Issue 解決率 | 40% (24 closed) |
| 最後推送 | 2026-10-15 |
| 建立日期 | 2026-10-08 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/T-Auto/dsh-ops) |
| Topics | `dsh` `dsh-plugin` `dsh-plugins` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 88
>     "Rust" : 10
>     "C++" : 2
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@T-Auto](https://github.com/T-Auto) | 61 |
> | [@baobaolaodie](https://github.com/baobaolaodie) | 3 |
> | [@ViscaOwO](https://github.com/ViscaOwO) | 2 |
> | [@Arutoria2024](https://github.com/Arutoria2024) | 1 |
> | [@PPPPetermosaic](https://github.com/PPPPetermosaic) | 1 |

**最新版本**：v0.3.0 — v0.3.0 — Windows x64 native tools and PTC (2026-10-14)

> [!info]- Release Notes
> # dsh-ops 0.3.0 — Windows x64
> 
> ## 发布范围
> 
> - 本次正式版仅支持 **Windows x64**，目标宿主 DSH `0.2.0-rc.2`。
> - Linux、macOS、ARM64 不在本版支持范围；不能将历史编译检查当作实机支持。
> - `dsh-ops` 主包更新为 `0.3.0`；三个 Windows 可选载荷依赖仍固定 `0.2.1`，无需重复发布。
> 
> ## 主要变化
> 
> - 文件工具迁移至独立 Rust worker：有界文本/hex 读取、glob、Rust 正则搜索、dry-run 与原子替换；统一 session cwd 路径语义。
> - 纯 PTC 可选组件提供 `ops_batch`（计划、copy/move/remove、保护、恢复与审计）及 `ops_result`（有界引用、分页、过滤、投影、释放）。默认不启用，不在普通/hybrid 模式发布 PTC 专用工具。
> - 按会话最新 DSH 权限执行：只读拒绝修改；工作区内修改限制写入；完全权限不附加写入范围。固定可信文件操作采用 DSH fs-sandbox 同类权限检查；任意 Bash/PTC 代码继续通过 OS 沙箱。
> - 修复 Windows 受限 Bash 的 IPC 初始化：对精确匹配的 MSYS DLL 构造可校验私有兼容副本，不改原包、全局 Git、令牌身份或磁盘 API，不裸执行回退。
> - Windows 工作区启动前，仅为当前用户拥有的目录根补齐 `WRITE_OWNER` 前提；备份原 DACL，不递归、不改 owner 或显式 deny。
> - 用户授权拒绝与执行器故障分开报告，明确当前/所需权限及用户操作指引。
> - 缺 Bash 载荷诊断区分 registry 未收录、缺失、残缺树与显式路径；后台工具拒绝未知参数。
> 
> ## 安装与注意
> 
> 从官方 npm registry 或 DSH 插件市场安装 `dsh-ops@0.3.0`；替换旧版后正常退出并重启 Desktop。
> 无需 Rust/MSVC：发布包携带 Windows x64 worker、IPC 代理、receipt 和匹配源码。
> PTC 组件需显式启用，使用纯 PTC-only 呈现；后台组件仍默认关闭、仅限完全权限。
> 首次受限 Bash 调用会在 DSH_HOME 内建立私有载荷副本，有一次磁盘复制成本；之后复用同一校验身份。
> Windows 宿主仍报告 `partial` enforcement，本插件不将其冒充完整内核隔离。
> 不匹配的自定义/升级 MSYS DLL 会拒绝兼容执行，不绕过沙箱。
> 
> ## 发布验证
> 
> - Manifest、源码测试、真实 Windows DSH provider、真实 Node PTC SDK command/script/pipeline 和权限切换测试。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-13 ~ 2026-10-14）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #39 from PPPPetermosaic/docs/restructure-readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/T-Auto/dsh-ops/issues/29) | 标题：DSH 0.2.0-rc.2 desktop：使用一段时间后所有会话的权限选择器消失，工具调用报 cannot g | 1 | 4 |
> | [#66](https://github.com/T-Auto/dsh-ops/issues/66) | [Bug] 0.3.0 硬编码调用 Windows PowerShell 5.1 且未传 `-ExecutionPoli | 0 | 0 |
> | [#64](https://github.com/T-Auto/dsh-ops/issues/64) | [设计输入] goal 续轮：idle 边沿零退避 ⇒ 建议加"无进展闸"，判据取工作区指纹（并剔除叙述型产物） | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dsh-ops
> 
> **中文** | [English](README.en.md)
> 
> Windows DSH 的性能工具插件：提供独立 bash / PowerShell 7，并用 Rust 重写文件检索与批处理，
> 减少反复踩 PowerShell 报错所浪费的 token、时间和模型注意力。
> 
> > tips：本项目的 ops 是广义 operations（运行操作）的缩写，代指本插件处于 dsh 和系统/代码/文件操作的基础工具位置。本项目不是 operations（运维）插件。
> 
> **0.3.0 仅支持 Windows x64**，目标宿主 DSH `0.2.0-rc.2`。原生 Rust 文件/PTC worker 随包携带；PTC 默认关闭，须显式启用。Linux/macOS/ARM64 留待后续版本。见 [PTC 设计与使用](docs/native-ptc.md)。
> 
> 有问题可以加qq群：1127808570
> 
> ---
> 
> ## 核心特性
> 
> - （全平台）使用 Rust 编写的一组工具，用于改善 AI 报错循环、强迫思考不交付、注意力涣散的问题，并以渐进式披露减少系统 prompt 的工具定义占用：加速任务运行，减少不必要的输入输出，减少报错率，以及提供与 DSH 对齐的权限机制。
> 
>   在自用 benchmark 中获得了
> 
>   - 97% token 减免（开启 ops 插件的 PTC 专用工具 对比 Windows 原装标准模式）
>   - 65% token 减免（开启 ops 插件的 PTC 专用工具 对比 Linux 原装 PTC 模式）
> 
>   的成绩，并改善了在 DSH 运行的 AI 的智力表现。
> 
> - （仅 Windows）提供独立 **bash 5.3.15** 和独立 **PowerShell 7.6.6**：优先使用 bash，必要时回退 pwsh 7，让你的 AI 不再和 PowerShell 打架 —— **不修改系统默认终端、PATH 或宿主原有 shell 工具名称**，环境变量安全。
> 
> - 独立的 Rust 原生文件工具与安全批处理（**默认关闭**，须显式启用），见 [组件参考](docs/组件参考.md)。
> 
> - 未来会加入一系列 docx、pdf 处理轻量化的好用 Rust 工具，均可开关，不占用上下文。
> 
> 执行顺序：**工具包 → bash → PowerShell 7**。
> 
> ---
> 
> ## 快速开始
> 
> ### 前置条件
> 
> - **Node.js `^22.19 || >=24`**（`package.json` 的 `engines` 要求）
> - Windows x64
> - 目标 DSH 应用已初始化
> 
> ### 安装
> 
> **方式一：官方插件市场（推荐）**
> 
> 在目标 DSH 应用的插件市场中输入 npm 包名 **`dsh-ops`**，安装后选择启用。安装归属于当前运行的 profile，桌面端为 `desktop`。
> 
> **方式二：npm 一键安装**
> 
> ```console
> npx --yes dsh-ops@latest install --profile desktop
> ```
> 
> 必须显式选择目标 profile；`tui` 映射到 **dsh-TUI 产品的 `dsh-tui` profile**，不是旧的 `tui` 目录。请先初始化目标应用。
> 
> 桌面端必须使用桌面应用自带的 CLI；默认探测 `%LOCALAPPDATA%\Programs\DeepSeek Harness\resources\runtime\cli\bin\dsh.cmd`。安装在其它位置时加 `--dsh-cli "\resources\runtime\cli\bin\dsh.cmd"`。
> 
> > ⚠️ **`node_modules/@dsh-ops/` 下没有 `bash-win32-x64` 不是安装损坏。** 三个载荷都是精确钉版的**可选依赖**（`optionalDependencies`）：若你的 registry 未同步该平台包的对应版本，包管理器会**静默跳过**它——安装仍以退出码 0 结束，且不打印任何指向缺包的警告。
> 
> > **不要**用 `allowSystemShellFallback: true` 绕过：那是安全姿态降级（改用未固定摘要的系统 bash），且首次升级启动的配置迁移会把它改回 `false`。
> 
> > 普通 DSH CLI 不能管理保留的 `desktop` profile；不要把它与桌面自带入口混淆。
> 
> 详情与兜底办法见 [常见问题](docs/常见问题.md)。
> 
> ### 卸载与查看状态
> 
> ```console
> npx --yes dsh-ops@latest status --profile desktop
> npx --yes dsh-ops@latest uninstall --profile desktop
> ```
> 
> 把 `desktop` 换成 `web` 或 `tui` 即可。
> 
> ---
> 
> ## 组件
> 
> Bundle 声明四个组件，分别启停，首次安装默认开启前两个：
> 
> | 组件 | 介绍 | 默认 | 发布的工具 |
> | --- | --- | --- | --- |
> | `dsh-ops/shell` | 将默认终端改为 bash，以及 bash 覆盖不到时提供 PowerShell 7 | 开 | `ops_bash`；宿主 `pwsh` 使用随包 PowerShell 7 |
> | `dsh-ops/file` | 更快、更高性能、输出更精简更省 token 的 Rust 文件检索 | 开 | 四个文件工具 |
> | `dsh-ops/background` | 为科研仿真、模型训练及其他长进程后台任务提供托管 | 关 | 启动、输出、列出、终止后台任务 |
> | `dsh-ops/ptc` | 独立 Rust 安全批处理和有界结果引用，仅纯 PTC 会话加载 | 关 | `ops_batch`、`ops_result` |
> 
> “默认终端改为 bash”指模型提示优先使用 `ops_bash`，**不修改系统默认终端、PATH 或宿主原有 shell 工具名称**。
> 
> 工具的完整参数、配置项与权限要求见 [组件参考](docs/组件参考.md) 与 [配置参考](docs/配置参考.md)。
> 
> > 配置迁移的完成标记：完成后重启/热加载不再覆盖；你之后主动改回 `true` 会被保留。不要删除迁移标记，否则会重新自检。
> 
> ---
> 
> ## 详细文档
> 
> | 想了解 | 看这里 |
> | --- | --- |
> | 安装、更新、卸载的完整流程与全部选项 | [docs/使用指南.md](docs/使用指南.md) |
> | 配置项逐个说明、哪个键属于哪个组件 | [docs/配置参考.md](docs/配置参考.md) |
> | 四个组件分别发布什么工具、参数与权限 | [docs/组件参考.md](docs/组件参考.md) |
> | 报错怎么读、装不上怎么办、常见问题 | [docs/常见问题.md](docs/常见问题.md) |
> | 原生 PTC 的设计与使用 | [docs/native-ptc.md](docs/native-ptc.md) |
> | 版本变更历史 | [CHANGELOG.md](CHANGELOG.md) |
> | 来源与载荷许可记录 | [PROVENANCE.md](PROVENANCE.md) |
> 
> ---
> 
> ## 许可证
> 
> 插件源码分发采用 **`MIT AND Apache-2.0`**：`vendor/fastctx/` 之外为 MIT；vendored FastCtx 为 Apache-2.0。见 [NOTICE](NOTICE)、`vendor/fastctx/LICENSE-APACHE` 与 `vendor/fastctx/NOTICE`。
> 
> 独立的 Windows 载荷包另按上游组件许可证分发：Git for Windows 包含 GPL 等许可组件，PowerShell 包含 MIT 与第三方组件。其原始许可证、声明及来源记录随载荷保留；插件的 MIT 许可不替代这些许可。详见 [PROVENANCE.md](PROVENANCE.md)。
> 
> ## 致谢
> 
> Rust 工具基于 [yc-duan](https://github.com/yc-duan) 的 Codex 插件 FastCtx 并使用其源代码。vendor 标识与删除型分发改动记在 [vendor/fastctx/FORK.md](vendor/fastctx/FORK.md) 和 [vendor/fastctx/UPSTREAM.md](vendor/fastctx/UPSTREAM.md)。需要转载的 FastCtx 声明如下：
> 
> > This product includes FastCtx
> > (https://github.com/yc-duan/fastctx), Copyright (c) 2026 yc-duan,
> > used under the Apache License 2.0.
> >
> > FastCtx is redistributed and/or modified here by the maintainer of
> > this distribution. Any such change is that maintainer's own work
> > and their sole responsibility. It is not endorsed by, not
> > supported by, and not attributable to the author of FastCtx, who
> > accepts no liability of any kind arising from this distribution or
> > from anything built on top of it.
> 
> ## Star 趋势
> 
> [](https://star-history.com/#T-Auto/dsh-ops&Date)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/T-Auto/dsh-ops)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "T-Auto--dsh-ops"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "T-Auto--dsh-ops" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "T-Auto--dsh-ops"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/T-Auto--dsh-ops");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "T-Auto--dsh-ops" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "T-Auto" AND file.name != "T-Auto--dsh-ops"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
> const me = dv.page("Repos/T-Auto--dsh-ops");
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
> const me = dv.page("Repos/T-Auto--dsh-ops");
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

> **2026-10-15** — 首次收錄
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

- [[2026-10-15|2026-10-15]] — 首次收錄，1.8k stars
