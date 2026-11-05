---
repo: KKKKhazix/agent-autoloop
url: https://github.com/KKKKhazix/agent-autoloop
owner: KKKKhazix
owner_type: User
language: TypeScript
license: MIT
description: "让你的命令行 Agent 在后台自己接活、自己跟进到底；平时不烦你，遇到拿不准的事才发卡片找你拍板。"
homepage: ""
stars: 2887
stars_per_day: 2887
forks: 553
open_issues: 5
created: 2026-11-03
pushed_at: 2026-11-05
first_seen: 2026-11-05
week: "2026-W45"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.2.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-05
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-08"
contributor_count: 5
engagement: "medium"
issue_close_rate: 69
repo_size_kb: 980
readme_length: 9785
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-05"
star_history: "2026-11-05:2887"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/ai_agents"
  - "topic/automation"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/codex"
aliases:
  - "agent-autoloop"
  - "KKKKhazix/agent-autoloop"
---

# agent-autoloop

**2.9k** stars · **2.9k** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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

`v1.2.0`

`ai-agents` `automation` `claude-code` `cli` `codex` `event-driven` `mcp` `nodejs` `self-hosted` `typescript` `workflow`

> [!summary] 一句話摘要
> 让你的命令行 Agent 在后台自己接活、自己跟进到底；平时不烦你，遇到拿不准的事才发卡片找你拍板。

## 專案簡介

让你的命令行 Agent 在后台自己接活、自己跟进到底；平时不烦你，遇到拿不准的事才发卡片找你拍板。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
| Forks | 553 |
| Open Issues | 5 |
| Issue 解決率 | 69% (11 closed) |
| 最後推送 | 2026-11-05 |
| 建立日期 | 2026-11-03 |
| Repo 大小 | 980 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/agent-autoloop) |
| Topics | `ai-agents` `automation` `claude-code` `cli` `codex` `event-driven` `mcp` `nodejs` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `prettier` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 64 |
> | [@chenjie1129](https://github.com/chenjie1129) | 6 |
> | [@wuleiyuan](https://github.com/wuleiyuan) | 3 |
> | [@xiaokekehaha](https://github.com/xiaokekehaha) | 2 |
> | [@1yu2](https://github.com/1yu2) | 1 |

**最新版本**：v1.2.0 — Agent Autoloop 1.2.0 (2026-11-05)

> [!info]- Release Notes
> 这一版加了几个命令，修了飞书卡片和交付插件的问题，版本号也有了写明的规则。
> 
> **新命令**
> 
> - `agent-autoloop status --json`：输出 `/v1/state` 的原样结构，给脚本和看板用（#93，chenjie1129）。
> - `agent-autoloop rules explain` 和 `agent-autoloop emit <类型> --dry-run`：不连中台，看规则生效的样子，预演一条事件会派给谁（#94，chenjie1129）。
> - `agent-autoloop backup [目录]` 和 `agent-autoloop restore <目录>`：中台运行时也能做一致性备份，恢复要先停中台（#92，chenjie1129）。备份里有密钥，要和密钥一样保管。
> 
> **修复**
> 
> - 飞书不让机器人改别的身份发的消息时，已经结束的卡片另发一条，不再停在回答之前的样子（#95，wuleiyuan）。
> - 交付插件遇到 PR 落后 main 时，在这一轮内同步并接着走，不再结束这一轮等中台重试（#88，jasoncodevault）。
> 
> **版本号**
> 
> - 版本号现在只写在 tag 上。`agent-autoloop --version` 显示 `v1.2.0`，比最新发布新的代码显示“未发布”。MCP 和 ACP 上报的版本也对了，之前一直是 1.0.0。
> - 版本号怎么加、承诺不破坏什么，写在[协议](https://github.com/KKKKhazix/agent-autoloop/blob/main/docs/protocol.md#版本与兼容)里。
> 
> 用 `agent-autoloop update` 更新。
> 
> ---
> 
> This release adds a few commands, fixes Feishu cards and the delivery plugin, and writes down the rules for version numbers.
> 
> **New commands**
> 
> - `agent-autoloop status --json` prints `/v1/state` as it is, for scripts and dashboards (#93, chenjie1129).
> - `agent-autoloop rules explain` and `agent-autoloop emit <type> --dry-run` show the rules in effect and preview who an event would go to, without contacting the hub (#94, chenjie1129).
> - `agent-autoloop backup [folder]` and `agent-autoloop restore <folder>` take a consistent backup even while the hub runs; restoring needs it stopped (#92, chenjie1129). A backup holds your keys, so keep it as safe as they are.
> 

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-05 ~ 2026-11-05）
> **活躍天數** 1 天 · **最新 commit** 恢复前看数据库有没有人开着，交付每一轮重新读设置 (#101)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/KKKKhazix/agent-autoloop/issues/17) | 希望有 windows 版本 `enhancement` `待定` | 16 | 13 |
> | [#104](https://github.com/KKKKhazix/agent-autoloop/issues/104) | 对于小白来讲希望有可视化的输入端口 `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Autoloop
> 
> **让你的命令行 Agent 在后台自己接活、自己跟进到底；平时不烦你，遇到拿不准的事才发卡片找你拍板。**
> 
> **中文** | [English](README.en.md)
> 
> [上手](#上手) · [场景模板](#拿来即用的场景模板) · [插件](#插件体系四个方向都能自由替换) · [内核](#内核的四个机制) · [文档](#更多文档)
> 
> ## 它解决什么问题？
> 
> 平时我们用 Claude Code、Codex 这类命令行 Agent，大多是“人守着终端用”：你输一句话，盯着它跑，等它问你下一步；一旦关掉窗口或者人走开，事情就断了。
> 
> **Agent Autoloop** 是一个极轻量的自动化中台。它把任务调度做成一个零外部依赖的**内核**，把事件来源、Agent、通知通道，甚至代码上线流水线全部拆成可随时插拔的**插件**。
> 
> - **一台电脑、一条命令就能跑。** 装在你的 Mac 或 Linux 上，不用买云服务器，也不用开放公网端口。
> - **一行配置接新 Agent。** 不需要 SDK，也不需要改 Agent 源码，能接收提示词并打印最后一条回复的命令行工具都能接。
> - **没有后台界面。** 需要你拍板时把卡片推到飞书、钉钉、企微、Slack、Discord 或桌面通知；想看全局进展，敲一行命令。
> 
> ## 上手
> 
> 支持 macOS 和 Linux。运行前需要装好 Node 24、Git、curl，以及任意一个你已经登录好的命令行 Agent，不需要 GitHub 账号。也可以直接把[安装说明](INSTALL.md)丢给你的 Agent，让它替你装好。
> 
> > **Windows 版：待定。** 很多朋友在问 Windows 版，我都看到了。我现在人在外面出差，手边没有 Windows 电脑，没法真机开发和测试，所以现在还不能在 Windows 上用。这个周末（11 月 7、8 日）回家后，我会把它开发完，做完兼容性测试，再正式推出。进度会更新在 [#17](https://github.com/KKKKhazix/agent-autoloop/issues/17)。
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/KKKKhazix/agent-autoloop/main/install.sh | sh
> ```
> 
> 安装和 `agent-autoloop update` 都装最新的 [Release](https://github.com/KKKKhazix/agent-autoloop/releases)，那是通过了全部检查的版本。
> 
> 装好后用你本机的 Agent 真实走一遍“提问 → 退出等回复 → 拍板 → 接着干完”：
> 
> ```bash
> agent-autoloop try
> ```
> 
> 下面是在终端里的真实输出：
> 
> ```text
> 事件发出去了，Agent 开始干活……
> 
> Agent 结束了这一轮，问了你一个问题。它现在不占进程、不花 Token。
> 
> 【等你决定】#1 试跑：选一个颜色
> 这是一次试跑，选哪个都行。
>   1. 蓝色
>   2. 绿色
> 回答：agent-autoloop answer 1 
> 答完运行 agent-autoloop status，能看到它接着把活干完。
> ```
> 
> 交互终端里直接输入数字回车；非交互终端运行 `agent-autoloop answer 1 2` 选择“绿色”。再跑 `agent-autoloop status`，就能看到它接上刚才的会话并显示“你选了绿色，试跑通过”，还有今天和最近 7 天的轮数、Token 和费用（[统计口径](skills/agent-autoloop/SKILL.md#看情况回答)）。
> 
> ## 一件事怎么转起来
> 
> 编号和上面的架构图一一对应：
> 
> 1. **新事件进来。** 早上 9 点的定时任务、GitHub 上新提的 Issue、业务系统报的错，都变成一条标准事件送进内核。
> 2. **按规则派活。** 内核照你写的规则，决定交给哪个 Agent、去哪个目录干。同一件事排队时又来的消息，会合并成一轮处理。
> 3. **干完一轮就退出。** Agent 把结果写在最后一条回复里，进程直接退出。
> 4. **拿不准才问你。** 碰到删数据、重启服务、花钱、对外发消息这类事，内核通过飞书或桌面通知发一张卡片给你。等你回复期间，它不占后台进程，也不消耗 Token。
> 5. **点一下，接着干。** 你选完，它接上原来的对话，把剩下的活干完。
> 
> 能自己搞定的事走图上方的自动闭环：直接办完，或者约个时间（比如半小时后）再醒来复查，全程不打扰你。
> 
> ## 日常怎么配？
> 
> ### 写一份规则（`rules.json`）
> 
> 不需要写胶水代码。打开 `~/.agent-autoloop/rules.json`，在 `rules` 里写清楚**什么事、交给谁、在哪个目录干**。`to` 填 `agents` 里已有的名字。比如每天早上 9 点写早报：
> 
> ```json
> {
>   "name": "早报",
>   "when": { "cron": "0 9 * * *" },
>   "to": "codex",
>   "cwd": "~/notes",
>   "prompt": "整理昨天的笔记和提交，写今天的早报。"
> }
> ```
> 
> 外部事件写法一样，只是要先接好来源。比如有人提新 Issue 时交给 Codex，先按[说明](skills/agent-autoloop/SKILL.md#接一个事件插件)在 `sources` 里登记 `github`：
> 
> ```json
> {
>   "name": "处理 issue",
>   "when": { "source": "github", "types": ["issues.opened"] },
>   "to": "codex",
>   "cwd": "~/code/app",
>   "skill": "handle-issue",
>   "parallel": 3
> }
> ```
> 
> 保存后几秒内自动生效，可以运行 `agent-autoloop check` 检查；`agent-autoloop rules explain` 看生效的规则和下次定时，`agent-autoloop emit  --dry-run` 预演一条事件会派给谁（不连接中台、不写日志）。就算改错了，或者文件被删、读不到，系统也会继续按旧规则跑，并发卡片提醒你。
> 
> ### Agent 怎么跟中台配合？
> 
> 中台对 Agent 只有一个约定：**在最后一条回复里交代结果**。事情办完了，正常输出一句结论就行。需要向你请示时，在回复末尾附一段 `agent-autoloop` 代码块：
> 
> ````text
> 订单已经核对完毕，库存充足。
> 
> ```agent-autoloop
> {
>   "ask": [{
>     "title": "怎么发货？",
>     "text": "两种方式今天都能发出。",
>     "options": ["快递", "自提"],
>     "key": "shipping"
>   }]
> }
> ```
> ````
> 
> 除了提问（`ask`），还能发通知（`notice`）、关闭已解决的卡片（`resolve`）、预约复查（`later`）和触发新事件（`events`）。通告不需要回答，但结案时可以顺手写一句处理说明，这句话会留在卡片上。万一 JSON 写错了，中台只让它在原会话里重写最后这段回复，不会把已经干完的业务重做一遍；重写也失败时，保留原结论并通知你回执没有生效。接着旧会话跑也一样：会话接不上才开新的；接上了、干到一半断了，就算没跑成，过几分钟回到原会话重试，不开新会话重做。
> 
> ## 拿来即用的场景模板
> 
> 每套模板都带规则、任务 Skill 和启用说明。
> 
> | 想做什么 | 已经封装好的流程 |
> |---|---|
> | [每日早报](examples/recipes/morning-brief/README.md) | 默认每天 8 点整理本地笔记和 Git 提交，写入 `briefs/YYYY-MM-DD.md` |
> | [跟进 GitHub Issue](examples/recipes/github-issues/README.md) | 每 5 分钟查新 Issue，在本地改代码并通知你查看；不提交、不推送、不回复 Issue |
> | [线上告警排查](examples/recipes/ops-alerts/README.md) | 接收报错、对照代码查原因，需要重启时发卡片询问，回答后继续 |
> | [用户反馈处理](examples/recipes/feedback/README.md) | 重读反馈当前状态、修复、交付核实、准备回复；需要决定时飞书问你，回答后继续 |
> | [网站巡检](examples/recipes/website-watch/README.md) | 每 5 分钟检查状态和关键内容，首次异常交给 Agent，持续异常不重复通知，恢复后更新原卡片 |
> | [飞书周报与业务摘要](examples/recipes/feishu-brief/README.md) | 周日 18 点按你的权限读汇报和指定表格，生成本地摘要；飞书只发简短摘要，完整稿留在本机 |
> | [PR 自动交付](skills/agent-autoloop/SKILL.md#交付流水线) | 打上 `deliver` 标签后，审查、等 CI、合并、等发布并核对线上版本 |
> 
> **启用：** 打开对应说明，把任务 Skill 放进所用 Agent 的 skills 目录，把示例规则合入 `~/.agent-autoloop/rules.json`，替换电脑名和路径，再运行 `agent-autoloop check`。
> 
> 反馈处理、网站巡检和飞书摘要默认使用北京时间，只发给本人的飞书私聊。样例数据都是虚构的；脚本和回执只用本地 HTTP 与假飞书 CLI 验证过，没有在真实账号上跑过完整业务。
> 
> 更多模板：[Claude 委托 Codex 处理网页](examples/recipes/browser-handoff/README.md)、[每周代码清理](examples/skills/weekly-sweep/SKILL.md)、[交付 PR](examples/skills/ship-pr/SKILL.md)。
> 
> ## 插件体系：四个方向都能自由替换
> 
> 内置插件随程序安装，填好配置即可启用；第三方插件用 `agent-autoloop add ` 安装。
> 
> | 方向 | 内置 | 配置 |
> |---|---|---|
> | **事件**：怎么发现新活 | [GitHub Webhook](plugins/github/source.ts)、[GitLab Webhook](plugins/gitlab/source.ts)、[HTTP 接口](docs/protocol.md#来源把世界变成事件)、[定时规则](skills/agent-autoloop/SKILL.md#改规则)、[Issue 轮询脚本](examples/watch-github-issues.sh) | [说明](skills/agent-autoloop/SKILL.md#接一个事件插件) |
> | **Agent**：谁来干活 | [Claude Code](plugins/claude/agent.ts)、[Codex](plugins/codex/agent.ts)、[ACP](plugins/acp/agent.ts)、[通用命令](plugins/command/agent.ts) | [说明](skills/agent-autoloop/SKILL.md#接一个-agent) |
> | **通道**：去哪找你拍板 | [桌面通知](plugins/desktop/channel.ts)（默认开启）、[飞书](plugins/feishu/channel.ts)、[钉钉 / 企微 / Slack / Discord](plugins/webhook/templates.ts) | [说明](skills/agent-autoloop/SKILL.md#接一个通道) |
> | **交付**：把 CI/CD 也做成插件 | [`delivery`](plugins/delivery/delivery.ts) | [说明](skills/agent-autoloop/SKILL.md#交付流水线) |
> 
> **实测情况：** Claude Code、Codex 和 ACP（官方 Codex ACP 适配器）跑通了多轮问答和跨进程会话续接；飞书跑通了发送、按钮回调和卡片更新；四种 Webhook 模板只在本地模拟服务上验证过，GitLab Webhook 按官方文档的格式测试，没连过真实 GitLab。这些文字通道靠回答链接拍板，要把 `hub.publicUrl` 配成手机或电脑能打开的地址。
> 
> **其他命令行 Agent 一行接入。** 设置 `use: "command"` 并传入命令数组，`{prompt}` 作为独立参数传递，不会被当成 shell 代码执行。下面的命令整理自各家官方文档，我们还没有逐个跑过：
> 
> | Agent | 接入命令 |
> |---|---|
> | [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/cli-help.md#dsh-headless) | `dsh --profile headless {prompt}` |
> | [pi](https://github.com/earendil-works/pi/blob/main/packages/coding-agent/docs/cli.md) | `pi --print {prompt}` |
> | [OpenClaw](https://docs.openclaw.ai/cli/agent) | `openclaw agent exec {prompt}` |
> | [Hermes](https://hermes-agent.nousresearch.com/docs/user-guide/cli) | `hermes chat -q {prompt}` |
> | [Cursor](https://cursor.com/docs/cli/reference/parameters) | `agent -p --trust {prompt}` |
> | [WorkBuddy / CodeBuddy](https://www.codebuddy.ai/docs/cli/headless) | `codebuddy -p {prompt}` |
> 
> **交付流水线。** 给 GitHub PR 打上 `deliver` 标签后，它会自己跟进到上线：**审代码 → 等 CI → 合并 PR → 等部署 → 核对线上版本**。审查和交付配置只从 `main` 读取，绝不在接单电脑上检出或运行 PR 里的代码；排队、并发和重试直接复用内核。
> 
> **写自己的插件。** 从 [Agent](examples/plugins/hello-agent/agent.ts)、[通道](examples/plugins/hello-channel/channel.ts)、[事件](examples/plugins/hello-source/source.ts) 三个可运行的最小模板开始，见[插件开发说明](docs/plugins.md)。要让 Agent 操作网页，先看[浏览器接入](docs/plugins.md#浏览器接入)。命令行和 [MCP](skills/agent-autoloop/SKILL.md#mcp-与密钥撤销) 也能查看和回答卡片。
> 
> ## 内核的四个机制
> 
> 内核约 1800 行代码、零运行时依赖。它不读系统时钟、不用随机数、不向外发请求，插件主动连进来，账号凭据留在各自的插件里；同样的输入永远得出同样的结果。它把四个计算机领域的成熟做法用到了命令行 Agent 上：
> 
> - **挂起零消耗**：等你拍板时进程直接退出，等待状态存在数据库里，Agent 不用一直挂着。你三天没回，这三天就没有 Agent 进程在跑、不花 Token，只有很轻的中台在后台等着；你一回答，它接着原来的对话继续干。
> - **事件溯源**：所有状态都从一条只追加的日志算出来，日志和索引在同一个事务里写进磁盘，写完才应答。进程被强杀，已经确认的事不丢（整机断电没有单独测过）；任何一轮为什么跑、结果是什么，一条命令就能查清；数据格式变了就从日志重建，不用写迁移脚本。
> - **指令数据分离**：思路和 SQL 参数化一样。Issue 的标题和正文等外部文字只作为资料放进文件，不拼进提示词，提示词里只有校验过字符的类型、编号和链接；用哪个 Agent、在哪个目录、什么权限，只由你本机的规则决定，事件里带 `cwd`、`agent`、`access` 字段会被直接拒收。
> - **跳数熔断**：思路和网络包的 TTL 一样。Agent 交回的事件会再派给 Agent，层数一路累加，经过人工提问和定时复查也不清零，Agent 自己改不了；超过 8 层就只记录、不再派活，并发一张卡片告诉你。
> 
> ### 自己跑一遍
> 
> 在程序目录 `~/.agent-autoloop/app` 下运行：
> 
> | 验证什么 | 命令 |
> |---|---|
> | 任何一轮的来龙去脉 | `agent-autoloop why 1` |
> | 20 万步模拟断网、丢包、崩溃和重复提交，一个种子就能复现 | `node sim/random.ts 24301 200000` |
> | 强杀进程 1000 次，已确认的记录一条不丢 | `node sim/crash.ts 1000 12648430` |
> | 下面的性能数字 | `npm run benchmark` |
> 
> ```text
> 第 1 轮 · 演示
> 11-03 20:47:25  规则版本 #1
> 11-03 20:47:25  触发事件：来源 local · 类型 demo.start · 对象 example
> 11-03 20:47:25  local 领取（演示程序）
> 11-03 20:47:25  结束：演示完成
> ```
> 
> ### 实测性能
> 
> Apple M5 Pro、24 GB、Node 24.21.0。写入逐条提交，事务落盘后才应答。`npm run benchmark` 的达标线按这台机器定，换台机器可能报未达标。
> 
> | 指标 | 实测 |
> |---|---:|
> | 冷启动 | 88.78 ms |
> | 空闲内存 | 59.94 MB RSS |
> | 1000 个同时等待

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/KKKKhazix/agent-autoloop)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "KKKKhazix--agent-autoloop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "KKKKhazix--agent-autoloop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "KKKKhazix--agent-autoloop"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--agent-autoloop" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--agent-autoloop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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
> const me = dv.page("Repos/KKKKhazix--agent-autoloop");
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

> **2026-11-05** — 首次收錄
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

- [[2026-11-05|2026-11-05]] — 首次收錄，2.9k stars
