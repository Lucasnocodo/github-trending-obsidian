---
repo: ccch1mneyyy/dsh-TUI
url: https://github.com/ccch1mneyyy/dsh-TUI
owner: ccch1mneyyy
owner_type: User
language: TypeScript
license: MIT
description: "DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click."
homepage: "https://dshtui.com/"
stars: 1827
stars_per_day: 457
forks: 80
open_issues: 58
created: 2026-08-13
pushed_at: 2026-08-18
first_seen: 2026-08-18
week: "2026-W34"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.8.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-18
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 62
repo_size_kb: 12189
readme_length: 7641
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-18"
star_history: "2026-08-18:1827"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/claude_code"
  - "topic/coding_agent"
  - "topic/deepseek"
  - "topic/deepseek_harness"
  - "topic/dsh_plugin"
aliases:
  - "dsh-TUI"
  - "ccch1mneyyy/dsh-TUI"
---

# dsh-TUI

**1.8k** stars · **457** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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

`v0.8.0`

`claude-code` `coding-agent` `deepseek` `deepseek-harness` `dsh-plugin` `ink` `react` `terminal` `tui`

> [!summary] 一句話摘要
> DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click.

## 專案簡介

DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。  DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
| Forks | 80 |
| Open Issues | 58 |
| Issue 解決率 | 62% (93 closed) |
| 最後推送 | 2026-08-18 |
| 建立日期 | 2026-08-13 |
| 官方網站 | [Link](https://dshtui.com/) |
| Repo 大小 | 11.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ccch1mneyyy/dsh-TUI) |
| Topics | `claude-code` `coding-agent` `deepseek` `deepseek-harness` `dsh-plugin` `ink` `react` `terminal` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "JavaScript" : 12
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ccch1mneyyy](https://github.com/ccch1mneyyy) | 139 |
> | [@CikeSeven](https://github.com/CikeSeven) | 51 |
> | [@T-Auto](https://github.com/T-Auto) | 37 |
> | [@TYCT-0926](https://github.com/TYCT-0926) | 18 |
> | [@Qiuner](https://github.com/Qiuner) | 16 |

**最新版本**：v0.8.0 — v0.8.0 — 双栏 diff 与设置屏 (2026-08-17)

> [!info]- Release Notes
> ## 亮点
> 
> - **双栏 diff 视图**（#245）：宽屏 old/new 对照、词级高亮、窄屏自动回退统一式
> - **diff 语法高亮 + 工具卡衬底**（#246）：cli-highlight 按扩展名着色，全套颜色主题可覆盖
> - **diff 布局自定义**（#249）：/settings 里 auto/split/unified 三档可选，live 生效；含 #250 评审全量修复
> - **/settings 插件设置屏**（#238 by @CikeSeven）：插件声明式设置区块
> - **/debug-prompt**（#243 by @fantastyprimary）、**/skills 命令**（#232）
> 
> ## 修复
> 
> - 首次自举在部分 pnpm ≥11 版本下失败（#241，#239）
> - 纯思考/纯工具步骤产生裸 ● 空行（#248 by @xqcherry）
> - diff 评审回归 8 项（#250，thanks @CikeSeven）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-17 ~ 2026-08-18）
> **活躍天數** 2 天 · **最新 commit** feat(plugins): align standard admission and runtime enforcement (#308)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#283](https://github.com/ccch1mneyyy/dsh-TUI/issues/283) | bug(TUI): 长思考结束后，正文区出现大量意外换行 `bug` | 3 | 1 |
> | [#81](https://github.com/ccch1mneyyy/dsh-TUI/issues/81) | feature request: 希望能有类似于pi-coding-agent中/tree和/fork这种对会话进行分叉 `enhancement` | 2 | 2 |
> | [#288](https://github.com/ccch1mneyyy/dsh-TUI/issues/288) | add herdr support `great！` | 1 | 1 |
> | [#19](https://github.com/ccch1mneyyy/dsh-TUI/issues/19) | 鼠标往上滑动的时候似乎有重复渲染或者错误渲染的情况，表现为启动页面重复随机插入，以及内容反复重复出现 `bug` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> 简体中文 | English
> 
>   
>   
>   
>   
>   
> 
> # dsh-TUI
> 
> >一个美观且实用的 Claude Code 风格 TUI 插件：像素鲸鱼顶栏、双流光大字、实时工作状态行、思考流式展开、双击 Esc 时间回溯、蓝白上下文进度条 + TPS 仪表。
> >零核心改动，纯插件挂载。安装插件即可启用，卸载后不会留下核心补丁。
> >献给钟爱tui的各位极客们~
> >
> >A beautiful, practical Claude Code-style TUI plugin: pixel whale top bar, dual flowing-glow title, real-time status line, streaming thought expansion, double-Esc time rewind, blue-white context progress bar + TPS gauge.
> >Zero core changes, pure plugin mounting. Install to enable; uninstall leaves no core patches.
> >For all TUI-loving geeks~
> 
> ## 🎉 官方收录
> 
> 本插件被 **DeepSeek Harness 官方公众号** 推文收录，作为"内测用户精选插件"展示：
> 
>   
> 
> 同时也被 [dshfind](https://dshfind.com/ccch1mneyyy/dsh-TUI) 插件目录收录：
> 
>   
> 
> ## 核心能力
> 
>   - **终端原生交互**：流式 Markdown、结构化工具卡、命令与文件补全、`@` 文件引用
>     （消息任意位置补全，文本附加内容，PNG/JPEG/WebP/GIF 作为持久图片块发送）、历史搜索、消息选择、
>     inline/alternate-screen 两种渲染模式，以及 `/lang` 中英界面语言切换。
>   - **可观察的 Agent 状态**：实时工作状态、上下文分段进度、TPS、缓存命中率、
>     推理等级、输入/输出 token 与 Git/会话信息。
>   - **完整会话工作流**：`/resume`、`/new`、`/compact`、`/export`、`/btw` 侧问、
>     模型切换，以及双击 `Esc` 发起的会话 rewind/fork。
>   - **DSH 官方能力接入**：Agent preset、Skills、MCP、Goals、Todos、子代理、
>     `ask_user_question` 问卷都通过现有服务或注册表连接。
>   - **为长会话设计**：事件驱动投影、差分终端输出、消息虚拟化、回放合并与有界缓存，
>     避免渲染成本和内存随会话无限增长。
> 
> ## 界面预览
> 
> ## 快速开始
> 
> 前置条件：可用的终端 TTY、官方 `dsh` CLI，以及 `pnpm` 10+。运行模型还需要
> `DEEPSEEK_API_KEY`。
> 
> ```sh
> # 1. 全局安装 CLI + 本插件（本插件自带 dsh-tui 直达命令）
> npm install -g @deepseek-ai/dsh @deepseek-harness-tui/dsh-tui
> 
> # 2. 启动（首次运行会自动初始化 dsh-tui profile，需 pnpm）
> dsh-tui
> ```
> 
> 备选——手工安装 profile（仓库根目录 `install.sh` 已封装，含 pnpm 预检）：
> 
> ```sh
> sh install.sh
> # 或：dsh plugin --profile dsh-tui add @deepseek-harness-tui/dsh-tui
> # 之后 dsh-tui 与 dsh --profile dsh-tui 等价
> ```
> 
> `dsh-tui --resume` 恢复上次会话；Windows 也可用仓库里的 `dsh-tui.cmd`（等价）。
> 
> 在 VS Code 中运行的完整指南（内置终端直接使用 + companion 扩展
> `dsh-tui-vscode`——**真实集成终端承载、体验与 Claude Code 官方扩展几乎一致、
> 已上架 VS Code Marketplace**）见
> [在 VS Code 中运行 dsh-TUI](docs/vscode.md)。
> 
> TUI 启动后会在后台检查 npm 是否有新版本；发现更新时会提示，输入 `/update`
> 即可自动更新并重启恢复当前会话。
> 
> 旧版 `dsh-cc-tui` / `cc-tui` profile 的迁移命令与兼容数据说明见
> [安装与快速开始](docs/getting-started.md#从旧包迁移)。
> 
> 安装流程、profile 叠加机制、源码构建与常见问题见
> [安装与快速开始](docs/getting-started.md)。
> 
> ## 快捷键
> 
> | 键 | 功能 |
> |---|---|
> | `Enter` | 发送（`Shift+Enter` 换行）；命令菜单打开时执行选中项 |
> | `Ctrl+C` | 中断当前回合；空闲时连按两次退出 |
> | `Esc` | 关闭命令/文件菜单；空闲双击清空输入；**空输入双击 = 时间回溯** |
> | `Ctrl+O` | 展开/收起详情（思考全文、工具参数与输出） |
> | `Ctrl+R` | 历史消息搜索 |
> | `/` | 会话内全文搜索（`n`/`N` 跳转） |
> | `Tab` / `Enter` | 命令 / `@` 文件补全（目录可继续深入） |
> | `Ctrl+V` | 粘贴文本或文件管理器中的文件；图片显示为 `[Image #N]` 并作为持久附件发送 |
> | `Ctrl+X` | 用 `$VISUAL`/`$EDITOR`（如 nvim）打开当前输入编辑，保存退出后回填 |
> | `?` | 快捷键菜单 |
> | `Shift+↑` | 消息选择模式（Enter 展开单条） |
> 
> **macOS 修饰键**：上表中 Windows/Linux 的 `Ctrl+` 在 macOS 上同时可用 `⌘`
> （如 `⌘V` 粘贴、`⌘O` 展开详情、`⌘Enter` 立即发送）；仅 `Ctrl+C` / `Ctrl+D`
> （中断/退出）保持 Ctrl 不变，避免与 macOS 系统级 `⌘C` 复制等肌肉记忆冲突。
> `⌘` 需终端支持扩展键盘协议（iTerm2 / kitty / WezTerm / ghostty / tmux）；
> macOS 自带 Terminal.app 会自行消费 `⌘` 快捷键，请继续使用 `Ctrl`。
> 
> **鼠标（`fullscreen: true` 全屏模式；默认关，profile 补丁层覆盖开启）**
> 
> | 操作 | 功能 |
> |---|---|
> | 拖拽选择 | 应用内文本选区，**松开即复制**（OSC 52 + `wl-copy`/`xclip`/`xsel` 原生兜底；tmux 内走 `load-buffer -w`），复制后自动取消选区并弹出「已复制 N 个字符」提示 |
> | 双击 / 三击 | 选词 / 选行，同样即选即复制 |
> | 滚轮 | 滚动消息列表 |
> | `Esc` | 拖拽进行中取消选区（不复制） |
> 
> **问卷（模型发起 `ask_user_question` 时）**
> 
> | 键 | 功能 |
> |---|---|
> | `↑/↓` | 选择选项 |
> | `Space` | 多选题勾选/取消 |
> | `Tab` | 切到自定义回答（不选选项直接打字） |
> | `Enter` | 提交当前选择 |
> | `Esc` | 中断提问（模型收到 ASK_ABORTED，可继续对话） |
> 
> **本地命令（CC 指令全集复刻，均走 DSH 官方链路）**
> 
> | 分组 | 命令 |
> |---|---|
> | 会话 | `/new` 新会话 · `/resume` 会话浏览器（搜索、预览、跨项目、折叠子 agent 运行） · `/rename` 重命名会话 · `/workspace resume|rename|open` 管理工作区 · `/clear` 清屏 · `/compact` 压缩 · `/export` 导出 Markdown · `/trace` 轨迹场景（亦可 `Ctrl+T`） |
> | 状态 | `/context` 已加载上下文明细 · `/status` 会话信息 · `/cost` token 用量 · `/doctor` 环境自检 · `/config` 配置来源 · `/init` 创建 AGENTS.md |
> | 模型 | `/model` 选择器 · `/thinking` 思考显示 · `/tokens` token 明细 · `/theme` 主题选择器 · `/lang` 中英界面切换 |
> | 账号/策略 | `/provider` 添加模型提供方 · `/login` 凭证状态 · `/logout` 登出说明 · `/permissions` 权限说明 · `/add-dir` 文件策略范围 · `/hooks` · `/mcp` |
> | 技能 | `/audit` 代码审计 · `/bug` bug 报告 · `/review` 代码评审 · `/practice` 编程练习 · `/pr_comments` PR 评论 · `/release-notes` 发布说明 · `/vuln-check` 漏洞检查 |
> | 其它 | `/agents` 子代理列表 · `/update` 自动更新并重启 · `/vim` · `/terminal-setup` · `/connect` · `/help` · `/exit` |
> | 注册表 | `/plan` `/goal`（DSH 命令注册表插件，随插件自动并入 `/` 菜单） |
> 
> ## 文档
> 
> | 主题 | 内容 |
> | --- | --- |
> | [安装与快速开始](docs/getting-started.md) | 前置条件、安装、启动、profile 生命周期、源码开发 |
> | [配置参考](docs/configuration.md) | Cordis 覆盖、配置字段、Agent preset、MCP、环境变量 |
> | [主题系统](docs/themes.md) | 内置主题、自动检测、自定义 JSON 主题与校验规则 |
> | [交互与命令](docs/interaction.md) | 快捷键、鼠标、问卷、slash command 与会话工作流 |
> | [架构与限制](docs/architecture.md) | 运行链路、渲染与持久化设计、安全边界、已知限制 |
> | [VS Code 使用指南](docs/vscode.md) | 在 VS Code 集成终端运行 dsh-tui；companion 扩展 `dsh-tui-vscode` 提供与 Claude Code 官方扩展几乎一致的体验（已上架 Marketplace） |
> | [贡献与开发约定](docs/contributing.md) | 贡献流程、仓库地图、构建产物、验证矩阵与修改规则 |
> | [插件开发指南](docs/plugins.md) | 插件接缝（会话事件 / 槽位 / 技能 / 主题 / prompt 段）、契约、规范与收录 |
> 
> 完整的中英文索引见 [`docs/README.md`](docs/README.md)。
> 
> ## 配置与扩展
> 
> - **Agent preset**：四种官方 Agent 模式（`standard` / `code` / `minimal` / `cordis`）和
>   TUI 随包提供的“梁神模式”（`liangshen`），
>   `/preset` 切换；已产生对话的会话不可切换，空白会话立即生效。默认 preset 持久化
>   在 `~/.dsh-tui/agent-preset.json`；`/model` 的选择持久化在 `~/.dsh-tui/model.json`。
>   详见[配置参考](docs/configuration.md#agent-preset)。
> - **自定义主题**：`/theme` 选择器（`auto` 跟随系统/终端背景，内置 `light` / `dark` /
>   `dark-ansi`），也支持 `~/.dsh-tui/themes/.json` 自定义主题，选中即热切换
>   并持久化；`DSH_TUI_THEME` 环境变量 > 持久化选择 > OSC 11 终端背景自动检测。
>   详见[主题系统](docs/themes.md)。
> - **MCP**：通过 `@deepseek-ai/dsh-mcp-client` 挂载服务器，工具以
>   `mcp____` 注册；`/mcp` 查看连接状态。
>   详见[配置参考](docs/configuration.md#mcp)。
> 
> ## 工作方式
> 
> ```text
> dsh profile
>   -> dsh-base
>   -> dsh-TUI Cordis patch
>   -> Agent preset + DSH services
>   -> session/event
>   -> Channel projection
>   -> React components
>   -> ported Ink/Yoga renderer
>   -> terminal
> ```
> 
> TUI 只负责交互与呈现。会话日志是对话真源，模型调用、工具执行、fork/resume、
> compaction 和持久化继续由 DSH 服务拥有。更详细的模块边界与性能设计见
> [架构文档](docs/architecture.md)。
> 
> ```text
> 聊天 / 工具基础事件 ──> 持久 Session 日志 ──> TUI / Web
>         └──────────────> ActivityTracker（内存）──> 仅 TUI 状态栏
> ```
> 
> ## 技术要点
> 
> - **Gentle Mist Blue 配色**：雾蓝只承担品牌、焦点、交互与高亮，正文保持中性灰；
>   启动时查询终端背景色（OSC 11）自动选浅色/深色调色板，终端不响应时回退深色。
> - **事件驱动渲染**：`session/event` 事件流 → 增量差分渲染，滚动状态独立维护。
> - **布局级虚拟化**：长会话的每帧成本从 O(全会话) 降到 O(可视窗口)——屏幕外的
>   消息行渲染为"量高占位符"，其子树完全不参与布局。
> - **上下文进度条**：参考 pi-nano-context 算法（最大余数法分段着色 + 多级缩略读数）。
> - **TPS 仪表**：参考 pi-tps-meter——流式 1/8 格 gauge、历史 min-max sparkline、
>   速度语义色（≥50 绿 / ≥20 黄 / =24`。
> 
> ```sh
> pnpm install --frozen-lockfile
> pnpm build
> pnpm smoke
> ```
> 
> `lib/types/` 是忽略入库的生成目录；`pnpm build` 会从干净输出目录重新编译并运行
> 构建门禁。npm Git URL 安装通过 `prepare` 生成同一套运行时。渲染、问卷和工具卡
> 改动还需运行对应回归脚本。
> 
> ## 插件生态
> 
> 想为 dsh-TUI 做插件/扩展？欢迎加入生态：
> 
> - **插件开发指南**：[`docs/plugins.md`](docs/plugins.md)（接缝、契约、规范与验证清单）
> - **生态组织**：[dsh-tui-ecosystem](https://github.com/dsh-tui-ecosystem)（社区插件与模板的家）
> - **模板仓库**：[plugin-template](https://github.com/dsh-tui-ecosystem/plugin-template)（从模板起步，5 分钟出一个插件）
> - **参考实现**：`dsh-working-activity`（实时工作状态行：TUI 槽位 + `activity/status` 会话事件双出口）
> 
> 核心仓库不迁移、社区插件独立成仓。组织只维护收录列表与准入规范，不对社区插件
> 的功能、质量或安全作背书或担保；插件作者对自己的仓库保持完全所有权，并自行承担
> 维护与安全责任。
> 
> ## 社区
> 
> - **生态组织**：[dsh-tui-ecosystem](https://github.com/dsh-tui-ecosystem) —— 社区插件、模板与收录列表的家。欢迎来发插件、提创意、互相取暖 🐋
> - **社区交流群**：使用问题、插件创意、功能许愿，都欢迎进来聊。
> 
> | 微信群 | QQ 群（群号 572549239） |
> | :---: | :---: |
> |  |  |
> 
> > 微信群二维码约 7 天过期一次，如遇失效请走 QQ 群（572549239），或开个 issue 提醒我们更新。
> 
> ## 权限与安全边界
> 
> `dsh-TUI` 不实现独立沙箱，而是使用当前 DSH profile 的文件、Shell、sandbox 与
> approval 策略。仓库提供的 profile 在非 Windows 平台默认采用工作区约束与审批；
> Windows 当前没有对应的沙箱后端，组合会退回到 `danger-full-access` 且不弹审批。
> 在包含敏感凭证或不可信仓库的环境中启动前，请先检查 profile 配置。
> 
> 详见[权限边界与已知限制](docs/architecture.md#权限与安全边界)。
> 
> ### 友情链接
> 
> 朋友们开发的[社区、相关项目与周边工具](docs/links.md)
> 
> ## 趋势
> 
> [](https://star-history.com/#ccch1mneyyy/dsh-TUI&Date)
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/ccch1mneyyy/dsh-TUI) · [官方網站](https://dshtui.com/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ccch1mneyyy--dsh-TUI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ccch1mneyyy--dsh-TUI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W34" AND file.name != "ccch1mneyyy--dsh-TUI"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ccch1mneyyy--dsh-TUI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ccch1mneyyy" AND file.name != "ccch1mneyyy--dsh-TUI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-TUI");
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

> **2026-08-18** — 首次收錄
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

- [[2026-08-18|2026-08-18]] — 首次收錄，1.8k stars
