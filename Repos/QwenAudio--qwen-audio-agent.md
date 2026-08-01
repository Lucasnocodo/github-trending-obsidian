---
repo: QwenAudio/qwen-audio-agent
url: https://github.com/QwenAudio/qwen-audio-agent
owner: QwenAudio
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "A realtime voice runtime that keeps Agents talking, working, and present.  Real-time Voice Runtime for AI Agents"
homepage: ""
stars: 622
stars_per_day: 156
forks: 45
open_issues: 5
created: 2026-07-27
pushed_at: 2026-08-01
first_seen: 2026-08-01
week: "2026-W31"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v1.1.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-01
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-08"
contributor_count: 5
engagement: "low"
issue_close_rate: 17
repo_size_kb: 15106
readme_length: 6375
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-01"
star_history: "2026-08-01:622"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - org
  - "topic/agent"
  - "topic/agentic_ai"
  - "topic/voice_agent"
  - "topic/voice_ai"
  - "topic/voice_chat"
aliases:
  - "qwen-audio-agent"
  - "QwenAudio/qwen-audio-agent"
---

# qwen-audio-agent

**622** stars · **156** stars/天 · 建立 4 天前 · JavaScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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

`ORG` `v1.1.1`

`agent` `agentic-ai` `voice-agent` `voice-ai` `voice-chat`

> [!summary] 一句話摘要
> A realtime voice runtime that keeps Agents talking, working, and present.  Real-time Voice Runtime for AI Agents

## 專案簡介

A realtime voice runtime that keeps Agents talking, working, and present.  Real-time Voice Runtime for AI Agents

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
| Forks | 45 |
| Open Issues | 5 |
| Issue 解決率 | 17% (1 closed) |
| 最後推送 | 2026-08-01 |
| 建立日期 | 2026-07-27 |
| Repo 大小 | 14.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/QwenAudio/qwen-audio-agent) |
| Topics | `agent` `agentic-ai` `voice-agent` `voice-ai` `voice-chat` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 89
>     "Python" : 4
>     "Shell" : 2
>     "CSS" : 2
>     "Swift" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@x-lixu](https://github.com/x-lixu) | 95 |
> | [@PigeonDan1](https://github.com/PigeonDan1) | 2 |
> | [@robin1001](https://github.com/robin1001) | 1 |
> | [@ReganQing](https://github.com/ReganQing) | 1 |
> | [@liutaocode](https://github.com/liutaocode) | 1 |

**最新版本**：v1.1.1 (2026-07-31)

> [!info]- Release Notes
> ## What's Changed
> * test: stabilize announcement retry timing by @x-lixu in https://github.com/QwenAudio/qwen-audio-agent/pull/36
> * fix: handle runtime configuration, task metadata, and gateway races by @liutaocode in https://github.com/QwenAudio/qwen-audio-agent/pull/32
> * release: qwen-audio-agent 1.1.1 by @x-lixu in https://github.com/QwenAudio/qwen-audio-agent/pull/37
> 
> ## New Contributors
> * @liutaocode made their first contribution in https://github.com/QwenAudio/qwen-audio-agent/pull/32
> 
> **Full Changelog**: https://github.com/QwenAudio/qwen-audio-agent/compare/v1.1.0...v1.1.1

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-31 ~ 2026-08-01）
> **活躍天數** 2 天 · **最新 commit** refactor: decouple realtime provider protocols (#41)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#38](https://github.com/QwenAudio/qwen-audio-agent/issues/38) | [Feature] Qwen Audio 3.0 Realtime  价格太贵，免费额度又不够，希望可以降价 `enhancement` | 0 | 1 |
> | [#21](https://github.com/QwenAudio/qwen-audio-agent/issues/21) | [Feature] 没有在阿里云里面找到免费的额度在哪里？ `enhancement` | 0 | 2 |
> | [#20](https://github.com/QwenAudio/qwen-audio-agent/issues/20) | [Feature] demo video `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Qwen Audio Agent
> 
> [中文](README.md) | [English](README_EN.md)
> 
> [](https://github.com/QwenAudio/qwen-audio-agent/actions/workflows/ci.yml)
> [](https://www.npmjs.com/package/qwen-audio-agent)
> [](https://nodejs.org/)
> [](LICENSE)
> 
> ## Agent，始终在场
> 
> 真正的交流，不该在说完一句话后，就陷入漫长的等待。也不该因为 Agent 正在查资料、调用工具或处理任务，整场对话就此暂停。
> 
> 交流应该是连续的，Agent 也应该始终在场。
> 
> 所以，我们做了 **qwen-audio-agent**——让 Agent 持续交流、持续工作、持续在场的实时语音运行时。无论是聊天、思考，还是处理任务，Agent 都始终在这场对话里。它会倾听，会回应，也会在任务完成时自然地告诉你：
> 
> “已经好了。”
> 
> ## News
> 
> - **2026-07-30 · [v1.0.0](https://github.com/QwenAudio/qwen-audio-agent/releases/tag/v1.0.0)**
>   🚀 正式版发布，推出内置 Gateway 的 macOS 桌面版。
> - **2026-07-28 · [v0.9.0](https://github.com/QwenAudio/qwen-audio-agent/releases/tag/v0.9.0)**
>   🌍 项目正式开源，后台 Agent 统一接入 ACP 架构。
> 
> ## 对话继续，任务也在继续
> 
> 对话不会因为后台任务而停下；任务完成后，结果会自然回到当前对话：
> 
> https://github.com/user-attachments/assets/42022655-36d1-46b2-9c26-ff0765284000
> 
> ### 核心特色
> 
> - 全双工实时语音交互、自然打断和持续多轮对话
> - 一键选择你喜欢的办事 Agent，复用已有的工具、MCP、Skill
> - 前台对话与后台任务并驾齐驱，可随时追问任务进度或取消任务
> - 支持创建多个独立任务，由后台 Agent 异步执行，并持续追踪任务状态
> - 任务结果自动回到当前对话，支持继续追问和修改
> - 支持 WebUI、终端 TUI 和 macOS 桌面悬浮球
> - 支持本地用户档案与跨会话个人记忆
> 
> ## 参考架构
> 
> 能直接回答的问题会立即回答；需要工具或持续处理时，任务会交给后台 Agent。
> 整个过程中，用户面对的始终是同一个助理。
> 
> 查看详细架构
> 
> 更完整的设计与模块说明见[架构文档](docs/architecture.md)。
> 
> ## Agent 支持
> 
> | 后台 Agent | 接入方式 | 接入准备 | 推荐指数 |
> | --- | --- | --- | --- |
> | 无 | N/A | 仅前台模式，无需配置 | ★★★★★ |
> | OpenCode | 原生 ACP | 支持自动安装和百炼配置 | ★★★★★ |
> | OpenClaw | 内置 ACP 桥接 | 支持自动安装和百炼配置 | ★★★★★ |
> | Qoder | 原生 ACP | 用户自行安装和配置 | ★★★★★ |
> | Kimi Code | 原生 ACP | 用户自行安装和配置 | ★★★★★ |
> | Hermes | 原生 ACP | 用户自行安装和配置 | ★★★★☆ |
> | CodeBuddy | 原生 ACP | 用户自行安装和配置 | ★★★★☆ |
> | Codex | 外部 ACP 适配 | 用户自行安装和配置 | ★★★★☆ |
> | Claude Code | 外部 ACP 适配 | 用户自行安装和配置 | ★★★★☆ |
> 
> 推荐指数综合反映当前集成完整度、兼容性和实际验证程度：五星表示已经过充分测试的
> 推荐集成，四星表示正在开发或尚未完成同等范围验证。
> 详细配置和能力边界见[配置说明](docs/configuration.md)。
> 
> ## 安装
> 
> 需要 Node.js 22.22.2+ 或 24.15.0+、npm 10+ 和 DashScope API Key。
> 仓库提供 `.nvmrc` 和 `.node-version`；使用 nvm 时可直接运行 `nvm use`。
> 
> 一键安装（推荐，从 npm 安装）：
> 
> ```bash
> npm install -g qwen-audio-agent
> ```
> 
> 也可以直接从 GitHub 安装最新代码：
> 
> ```bash
> npm install -g git+https://github.com/QwenAudio/qwen-audio-agent.git
> ```
> 
> 从源码安装：
> 
> ```bash
> git clone https://github.com/QwenAudio/qwen-audio-agent.git
> cd qwen-audio-agent
> npm install
> npm run install:global
> ```
> 
> 升级到最新 npm 版本：
> 
> ```bash
> npm install -g qwen-audio-agent@latest
> ```
> 
> 升级到 GitHub 最新代码：
> 
> ```bash
> npm install -g git+https://github.com/QwenAudio/qwen-audio-agent.git
> ```
> 
> ## 获取 DashScope API Key
> 
> 阿里云百炼为 Qwen Audio 3.0 Realtime 提供
> [新人免费额度](https://help.aliyun.com/zh/model-studio/new-free-quota)，创建 API Key 后
> 即可免费开始使用 qwen-audio-agent。
> 
> 1. 打开百炼控制台的 [API Key 页面](https://bailian.console.aliyun.com/?tab=model#/api-key)，
>    登录账号，单击**创建 API Key**。
> 2. 复制生成的 Key，稍后填入 `config.env`。请勿公开或提交 API Key。
> 
> 详细说明见[百炼官方文档](https://help.aliyun.com/zh/model-studio/get-api-key)。
> 
> ## 快速开始
> 
> 1. 创建配置：
> 
> ```bash
> qwenaudio config
> ```
> 
> 2. 打开命令显示的 `config.env`，填写 DashScope API Key。需要执行后台任务时，
>    再选择 OpenClaw 或其他后台 Agent：
> 
> ```dotenv
> DASHSCOPE_API_KEY=your-key
> # 语音前台模型：qwen-audio-3.0-realtime-flash 或 qwen-audio-3.0-realtime-plus（默认）
> QWEN_AUDIO_REALTIME_MODEL=qwen-audio-3.0-realtime-plus
> # 后台Agent：可选，不设置或设置为 none 时，启动仅前台模式
> AGENT_PROTOCOL=openclaw
> # 后台模型：可为空，留空则沿用 Agent 自身的用户配置
> QWEN_AUDIO_AGENT_BACKEND_MODEL=qwen3.7-max
> ```
> 
> 3. 在一个终端中启动 Gateway：
> 
> ```bash
> qwenaudio
> ```
> 
> 4. 另开一个终端，启动 TUI：
> 
> ```bash
> qwenaudio tui
> ```
> 
> 也可以使用浏览器界面：
> 
> ```bash
> qwenaudio webui
> ```
> 
> ### TUI 使用注意
> 
> | 平台 | 默认模式 | 打断方式 |
> | --- | --- | --- |
> | macOS | 带回声消除的全双工 | 直接说话 |
> | Linux / Windows | 半双工 | 播报时按 `x` |
> 
> Linux 和 Windows 首次使用前需安装 `sounddevice` 和系统 PortAudio。也可以开启
> 无回声消除的全双工模式；此时请佩戴耳机，避免扬声器声音造成误识别：
> 
> ```bash
> qwenaudio tui --audio-mode full
> ```
> 
> ## macOS 桌面版
> 
> 桌面版提供常驻桌面的语音悬浮球，并内置和自动管理 Gateway，无需事先启动服务。
> 首次运行时，应用会创建配置文件，并引导你在设置页填写 DashScope API Key、选择
> 后台 Agent（也可以使用仅前台模式）。
> 
> 桌面版支持流光声波球和液态渐变球两种外观。下面分别展示它们在思考 / 呼吸状态
> 下的原始动态效果：
> 
> | 流光声波球 | 液态渐变球 |
> | --- | --- |
> |  |  |
> 
> 从发布页下载 `.dmg`，打开后将 **Qwen Audio Agent** 拖入“应用程序”即可。
> 
> 从源码生成本机测试版：
> 
> ```bash
> npm run desktop:build:local
> ```
> 
> ## 后台常驻
> 
> 希望个人助理长期在线时，可以安装为用户后台服务：
> 
> ```bash
> qwenaudio gateway install
> ```
> 
> 常用管理命令：
> 
> ```bash
> qwenaudio gateway status
> qwenaudio gateway restart
> qwenaudio gateway stop
> qwenaudio gateway start
> qwenaudio gateway uninstall
> ```
> 
> ## 选择后台 Agent
> 
> `AGENT_PROTOCOL` 是可选配置。留空时，Gateway 以仅前台模式运行，实时语音聊天
> 保持可用；如果请求需要后台执行，前台会明确说明当前没有可用的后台 Agent。
> 也可以在命令行中使用 `qwenaudio --backend none`，明确要求仅启动前台模式。
> 
> 通过 `AGENT_PROTOCOL` 环境变量或 `--backend` 参数选择后台 Agent。选择后，
> OpenCode 和 OpenClaw 支持自动下载安装；配置
> `DASHSCOPE_API_KEY` 和 `QWEN_AUDIO_AGENT_BACKEND_MODEL` 后即可自动接入百炼
> 模型。未指定后台模型且用户已经安装并配置对应 Agent 时，则完整复用用户环境。
> 
> 查看当前可用的后台 Agent：
> 
> ```bash
> qwenaudio setup
> ```
> 
> 使用 OpenClaw：
> 
> ```dotenv
> AGENT_PROTOCOL=openclaw
> ```
> 
> 使用 OpenCode：
> 
> ```dotenv
> AGENT_PROTOCOL=opencode
> ```
> 
> 使用 Qoder：
> 
> ```dotenv
> AGENT_PROTOCOL=qoder
> ```
> 
> Kimi Code、Hermes、CodeBuddy、Codex 和 Claude Code 也可直接选择：
> 
> ```dotenv
> AGENT_PROTOCOL=kimi
> # 或 hermes、codebuddy、codex、claude
> ```
> 
> 以上其他后台暂时需要用户自行安装并完成原生配置；qwen-audio-agent 会复用其
> 用户级模型、工具、MCP、Skill 和认证。
> 
> 使用其他支持 ACP stdio 的 Agent：
> 
> ```dotenv
> AGENT_PROTOCOL=acp
> ACP_COMMAND=your-agent
> ACP_ARGS=["--acp"]
> ```
> 
> 通用 ACP 入口不需要修改 Gateway 代码。命令、参数、显示名称和工作目录可分别通过 `ACP_COMMAND`、`ACP_ARGS`、`ACP_LABEL` 和 `ACP_WORKSPACE` 配置。
> 
> 后台权限默认使用 `native`，由后台 Agent 在需要时询问。只有在可信项目中，并且
> 明确接受自动执行命令和修改文件时，才应启用：
> 
> ```dotenv
> QWEN_AUDIO_AGENT_BACKEND_PERMISSION_MODE=full
> ```
> 
> 详细选项见 [配置说明](docs/configuration.md)。
> 
> ## 用户档案与记忆
> 
> 用户数据保存在 `~/.config/qwaudio/`：
> 
> - `USER.md`：称呼、所在地、偏好和常用项目
> - `frontend-memory.json`：用户明确要求长期记住的信息
> - `tasks.json`：任务结果和待通知状态
> 
> 这些文件只保存在本机，不会写入源码仓库。可以直接编辑 `USER.md`，也可以在对话中
> 要求助理记住或忘记信息。
> 
> ## 使用注意事项
> 
> - 不要在用户档案或对话中保存密码、API Key、验证码和访问令牌。
> - 麦克风音频与实时对话会发送到配置的 Qwen Audio Realtime 服务。
> - 后台任务可能调用所选 Agent 的模型、工具、MCP 和外部服务。
> - `full` 权限允许后台执行命令和修改文件，只应在可信项目中使用。
> - Gateway 默认仅供本机访问；不要直接暴露到局域网或公网。
> - Linux / Windows 使用无回声消除全双工时，请佩戴耳机。
> 
> 详细数据边界见[隐私说明](PRIVACY.md)，网络与权限配置见
> [配置说明](docs/configuration.md)。
> 
> ## 源码开发
> 
> ```bash
> npm install
> npm run build
> npm test
> ```
> 
> ```bash
> npm run dev       # Gateway 与 WebUI 热更新
> npm run desktop   # macOS 桌面悬浮球
> ```
> 
> 更多构建、测试和发布说明见 [CONTRIBUTING.md](CONTRIBUTING.md)。
> 
> ## 交流与分享
> 
> 你可以直接在 [GitHub Issues](https://github.com/QwenAudio/qwen-audio-agent/issues) 发起讨论。
> 对中国用户，也可以扫描左侧二维码加入微信交流群；如果群二维码已满或过期，
> 扫描右侧的个人二维码，维护者会邀请你进群。
> 
> | 微信交流群 | 个人微信 |
> | :---: | :---: |
> |  |  |
> 
> ## 参与贡献与安全
> 
> - 开发与提交说明：[CONTRIBUTING.md](CONTRIBUTING.md)
> - 安全问题报告：[SECURITY.md](SECURITY.md)
> - 数据流向说明：[PRIVACY.md](PRIVACY.md)
> - 第三方组件声明：[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
> 
> ## 许可证
> 
> [Apache License 2.0](LICENSE)

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]]

[GitHub](https://github.com/QwenAudio/qwen-audio-agent)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "QwenAudio--qwen-audio-agent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "QwenAudio--qwen-audio-agent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "QwenAudio--qwen-audio-agent"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "QwenAudio--qwen-audio-agent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "QwenAudio" AND file.name != "QwenAudio--qwen-audio-agent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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
> const me = dv.page("Repos/QwenAudio--qwen-audio-agent");
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

> **2026-08-01** — 首次收錄
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

- [[2026-08-01|2026-08-01]] — 首次收錄，622 stars
