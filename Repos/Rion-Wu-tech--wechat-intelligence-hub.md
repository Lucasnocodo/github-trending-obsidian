---
repo: Rion-Wu-tech/wechat-intelligence-hub
url: https://github.com/Rion-Wu-tech/wechat-intelligence-hub
owner: Rion-Wu-tech
owner_type: User
language: Python
license: AGPL-3.0
description: "Local-first WeChat intelligence system with a read-only CLI, Codex skills, searchable chat history, daily briefings, follow-ups and opportunity tracking."
homepage: ""
stars: 1347
stars_per_day: 674
forks: 1597
open_issues: 2
created: 2026-09-04
pushed_at: 2026-09-05
first_seen: 2026-09-07
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.9.2-preview.2"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-07
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-10"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 1520
readme_length: 6654
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-07"
star_history: "2026-09-07:1347"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "wechat-intelligence-hub"
  - "Rion-Wu-tech/wechat-intelligence-hub"
---

# wechat-intelligence-hub

**1.3k** stars · **674** stars/天 · 建立 2 天前 · Python · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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

`個人專案` `v0.9.2-preview.2`

> [!summary] 一句話摘要
> Local-first WeChat intelligence system with a read-only CLI, Codex skills, searchable chat history, daily briefings, follow-ups and opportunity tracking.

## 專案簡介

Local-first WeChat intelligence system with a read-only CLI, Codex skills, searchable chat history, daily briefings, follow-ups and opportunity tracking.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
| Forks | 1.6k |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-05 |
| 建立日期 | 2026-09-04 |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Rion-Wu-tech/wechat-intelligence-hub) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "HTML" : 7
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Rion-Wu-tech](https://github.com/Rion-Wu-tech) | 7 |

**最新版本**：v0.9.2-preview.2 — v0.9.2-preview.2 — WeChat Intelligence Hub public preview (2026-09-04)

> [!info]- Release Notes
> # v0.9.2-preview.2 — WeChat Intelligence Hub public preview
> 
> 这是 WeChat Intelligence Hub 的首发候选版本。它把 Rion 自有的只读 `rion-wechat-cli` 与微信个人情报库放在同一个可安装、可测试的独立仓库中。
> 
> ## 包含内容
> 
> - `wechat-cli`：统一的 Agent 调用入口。
> - `Rion WeChat Reader`：独立实现、本地只读的数据读取核心。
> - `wechat-intelligence-hub`：联系人、主题、待回复、承诺、商机、复联和 24/48 小时简报。
> - 虚构 Demo、公开样例、安装脚本、能力矩阵、隐私扫描和回归测试。
> 
> ## 相比 preview.1
> 
> - 修复带时区的最新消息时间与本地时间比较时可能崩溃的问题。
> - 消息入库改用唯一哈希索引去重，避免月度大批量导入反复扫描正文。
> - 增加对应回归测试，并用新 Reader 完成一次月度真实数据实跑。
> 
> ## 安装
> 
> ```bash
> git clone https://github.com/Rion-Wu-tech/wechat-intelligence-hub.git
> cd wechat-intelligence-hub
> ./scripts/install.sh --with-sqlcipher
> ```
> 
> 重启 Codex 后，先运行：
> 
> ```text
> $wechat-cli 运行 self-test，然后开始 setup；明确告诉我当前是完整数据库模式、通知预览模式，还是仍缺少访问材料。
> ```

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-04 ~ 2026-09-05）
> **活躍天數** 2 天 · **最新 commit** feat: add guided WeChat onboarding and Codex setup workflow

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/Rion-Wu-tech/wechat-intelligence-hub/issues/2) | macOS 26.4 blocks ad-hoc shadow WeChat and onboarding leaves | 0 | 0 |
> | [#1](https://github.com/Rion-Wu-tech/wechat-intelligence-hub/issues/1) | 微信相关 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # WeChat Intelligence Hub
> 
> 微信个人情报库：把本地微信聊天变成可检索、可核查、可行动的个人情报，包括联系人历史、群聊主题、待回复、承诺、商机、复联线索，以及任意指定时间范围的情报报告。
> 
> 这不是 Prompt 大礼包，而是一个独立的微信旗舰项目。仓库同时提供只读数据入口和情报工作流，并配有可执行入口、边界、测试和全虚构样例。
> 
> 当前首发版本为 `v0.9.2-preview.2`。微信相关代码已经具备公开测试条件，但不是“安装后自动读取所有人的完整微信历史”：完整数据库模式需要本人授权的本地数据库和访问材料。Reader 核心不获取密钥、不重签名、不注入、不 Hook 微信；可选的实验性接入助手有独立授权和副作用边界，见下文。
> 
> ## 一个产品，两个 Skill
> 
> | Skill / Project | 作用 | 状态 |
> |---|---|---|
> | `wechat-cli` | Rion 自有的只读 Reader 入口；v0.9.2-preview.2 已覆盖旧版接口、schema-2 salt-key 授权导入、WCDB 压缩消息与本机实读验收 | 依赖层 / Preview |
> | `wechat-intelligence-hub` | 把微信记录转成日报、待回复、承诺、商机和复联线索 | 用户入口 / Flagship |
> 
> 微信能力在代码中分成四层，方便独立测试和维护；对用户仍是一套产品、一次安装：
> 
> - `projects/rion-wechat-reader/`：Rion 自有的 clean-room 只读 Reader 核心。
> - `skills/wechat-cli/`：Reader 的统一 Agent 入口，默认只调用 Rion 自有 Reader；只有使用者显式设置 `RION_WECHAT_CLI_BIN` 时才调用兼容后端。
> - `skills/wechat-intelligence-hub/`：Agent 的调用入口与判断规则。
> - `projects/wechat-intelligence-hub/`：确定性本地引擎、虚构样例和测试。
> 
> Rion 的通用 Skill 合集 `rionwu-skills` 只负责收录、发现和链接本项目，不复制微信读取器源码或 Git 历史。
> 
> ## 安装
> 
> ### 直接让Codex安装和配置
> 
> 把下面这段发给Codex即可，不需要自己逐条执行命令：
> 
> ```text
> 请从 https://github.com/Rion-Wu-tech/wechat-intelligence-hub 安装微信CLI和微信个人情报库，接入这台电脑上我自己的微信。
> 先读取仓库说明，检查是否已经安装、当前配置是否可用；已有可用配置或key就复用，不覆盖我的个人Profile和数据。
> 缺少依赖由你处理；确实缺key时，由你核验并准备固定版本工具，说明影响、经我确认后执行。我负责登录微信和完成系统授权，不会把密码或key发给你。
> 完成数据库验证和配置后，告诉我能读取哪些范围、还有什么未就绪；再协助初始化个人情报库。遇到错误请定位并修复，不要把一堆命令交给我，也不要无限重试。
> ```
> 
> 这是有人确认关键操作的接入工作流，不是无条件、无人值守的解密。已有安装如何升级、微信升级后如何排障，见[配置与排障提示词](docs/USAGE.md#让codex处理配置与排障)。
> 
> ### 手动安装入口
> 
> **先确认接入条件：安装成功不等于已能读取聊天。** 已有本机访问材料可直接验证、导入；没有key时，由Codex按[五步首次接入工作流](skills/wechat-cli/references/access-onboarding.md)准备固定版本工具，经审核和明确确认后尝试获取，可能重启微信和重签名副本。用户只需登录、确认影响和完成系统授权，不需要复制key。仓库不捆绑获取工具，安装和日常日报均不会触发获取；macOS新机器获取路径尚未实测，不保证所有版本可用。请勿向维护者、社群或Issue发送key、密码和数据库。
> 
> 克隆仓库：
> 
> ```bash
> git clone https://github.com/Rion-Wu-tech/wechat-intelligence-hub.git
> cd wechat-intelligence-hub
> ```
> 
> 安装完整产品：
> 
> ```bash
> ./scripts/install.sh --with-sqlcipher
> ```
> 
> 不传 Skill 名称时会安装 `wechat-cli`、`wechat-intelligence-hub` 及其本地引擎。即使只指定 `wechat-intelligence-hub`，安装器也会自动补齐它依赖的 `wechat-cli`；用户不需要手工拼装两套组件。
> 
> 安装后可以直接对Codex说：
> 
> > 用 $wechat-cli 帮我接入这台电脑上我自己的微信。已有配置或key就复用；没有就帮我准备工具，说明影响并确认后获取，再完成验证和配置。
> 
> 安装 `wechat-cli` Skill 时会同时安装 Rion 自有的 `rion-wechat-reader` 核心。新用户无需第三方二进制即可检查本机覆盖范围，并在 macOS 上读取系统实际保留的微信通知预览；该模式只覆盖入站预览，不能代表完整聊天记录。v0.9.2-preview.2 的公开接口已与旧 `wechat-cli 1.6.19` 的 29 项只读工具、266 个输入字段对齐，可读取用户显式提供的 schema-2 salt-key 授权材料，并安装隔离 SQLCipher 与 Zstandard 运行依赖。当前本机已完成新旧 CLI 真实数据对照、当前 macOS 图片/视频/文件路径验证和微信个人情报库端到端索引验证；其他微信版本仍按能力矩阵逐项积累。
> 
> 需要独立命令行入口时只安装一个 CLI：
> 
> ```bash
> projects/rion-wechat-reader/install.sh --with-sqlcipher
> rion-wechat-cli self-test
> rion-wechat-cli self-test --require-sqlcipher
> rion-wechat-cli access-plan --pretty
> ```
> 
> `ready` 表示复用已有配置；`ready_to_configure` 才继续用相同输入运行 `setup`；`needs_access` 表示缺少访问材料，不要重复运行setup。JSON顶层 `ok: true` 仅表示诊断完成，请查看 `data.state`。部分覆盖、驱动缺失、多账号和权限问题会分别给出下一步。
> 
> 完整历史和实时数据库读取要求有权访问的本地数据库与访问材料，且仅覆盖已同步到本机的数据。只读 Reader 与可选接入助手的边界见 [Reader 说明](projects/rion-wechat-reader/README.md)。没有数据库读取条件时，仍可运行全虚构 Demo，验证索引、判断与报告链路。
> 
> 安装 `wechat-intelligence-hub` 时，脚本会同时把经过隐私扫描的本地引擎放进 Codex 目录，正常调用无需再配置 `WECHAT_HUB_HOME`。先用虚构数据运行 Demo：
> 
> ```bash
> bash projects/wechat-intelligence-hub/scripts/run_demo.sh
> ```
> 
> 只有在开发或调试仓库源码时，才需要临时指定引擎路径：
> 
> ```bash
> export WECHAT_HUB_HOME="$PWD/projects/wechat-intelligence-hub"
> ```
> 
> 安装 `wechat-cli` 和 `wechat-intelligence-hub` 后，建议先做一次个性化初始化。它会把你正在做的事、个人背景和关系标签变成日报的排序依据：
> 
> ```bash
> cd projects/wechat-intelligence-hub
> python3 wechat_intelligence_hub.py profile-init \
>   --owner-alias "你的微信昵称" \
>   --personal-doc "/path/to/个人说明.md" \
>   --plan-doc "/path/to/本月计划.md" \
>   --priority-label "你的重点联系人标签"
> ```
> 
> 个人说明可以包含身份、业务、擅长领域、资源、约束和长期目标；当前计划可以包含近期目标、正在推进的项目、交付/收入优先级和截止时间。如果还没有这些文档，直接运行 `profile-init` 即可生成本地准备清单；在补齐前系统仍能生成通用报告，但会标明尚未个性化。
> 
> 微信标签不需要照搬维护者的名字。推荐按自己的工作流建立 2–5 类，例如客户、同行、渠道、供应商、自媒体网友或品牌方。可用 `profile-init --inspect-wechat-labels` 只读查看已有标签并生成候选建议；精确关键词检索始终可以覆盖全部微信记录，不受标签限制。
> 
> 也可以在 Codex 中直接说：
> 
> ```text
> $wechat-intelligence-hub 帮我初始化微信个人情报库。先查找我现有的个人说明和当前计划；如果没有，给我准备清单，再只读检查现有微信标签并建议如何分类。
> ```
> 
> 重新打开 Codex 后，可以直接说：
> 
> ```text
> $wechat-intelligence-hub 查看过去 24 小时微信里最需要我处理的事情
> ```
> 
> ## 在 Codex 中怎么使用
> 
> 安装并完成初始化后，不需要记命令行参数，可以直接用自然语言调用：
> 
> ```text
> $wechat-intelligence-hub 生成过去 24 小时的完整微信情报日报，分析群聊、重点联系人、待回复事项和商业机会。
> 
> $wechat-intelligence-hub 总结我和「联系人名字」最近聊到哪里，还有什么承诺没有完成。
> 
> $wechat-intelligence-hub 搜索过去 7 天所有微信聊天里关于「AI 培训」的讨论。
> 
> $wechat-intelligence-hub 查找 8 月 1 日至今所有与「某个产品」有关的信息，合并同一件事的上下文并总结进展。
> 
> $wechat-intelligence-hub 总结微信标签「品牌方」里最近一个月值得跟进的人和事情。
> 
> $wechat-intelligence-hub 查看今天最需要我处理的 10 件事。
> 
> $wechat-intelligence-hub 根据最新聊天上下文，帮我给「联系人名字」写一条符合我语气的回复草稿。
> ```
> 
> ### 完整日报同时输出 Markdown 和 HTML
> 
> 24/48 小时只是常用日报窗口，不是时间上限。用户可以指定一天、一周、一个月、某段起止日期或已有索引覆盖的更长范围。完整的多会话复合报告默认保留两种正式版本：
> 
> - **Markdown 版**：适合阅读、复制、归档和继续交给 AI 加工。
> - **交互式 HTML 版**：适合搜索、筛选和浏览，包含综合行动、群聊日报、重点联系人和商单信号雷达四个入口。
> 
> 直接在 Codex 中说：
> 
> ```text
> $wechat-intelligence-hub 生成过去 24 小时的完整微信情报日报，同时输出 Markdown 和旗舰交互式 HTML。
> ```
> 
> 主要文件包括：
> 
> ```text
> wechat_daily_full.md          # Markdown 总入口
> wechat-report/                # 分区 Markdown
> wechat_daily_report.html      # 旗舰交互式报告
> ```
> 
> HTML 版支持全局搜索、分区导航、话题日报/重点群聊/群聊筛选切换、群聊展开、原链接跳转、明暗主题、打印和当前分区 Markdown 下载。报告内容会根据每位使用者的本地聊天、个人 Profile 和当前计划生成，界面与公开仓库中的旗舰渲染器保持一致。
> 
> 除了按时间生成综合报告，还可以围绕某条信息、某个人、某个群、某个产品/物品、某个微信标签、某个项目或某件具体事件定向查找：系统会先定位相关消息和上下文，再按会话、时间和事件关系去重总结。单个对象和回复建议默认直接在 Codex 中回答，不会为了一个简单问题额外生成网页。如果希望定向调查也保存成双版本，请在请求中明确说“同时输出 Markdown 和 HTML”。
> 
> 更完整的首次使用、常用提问、输出模式和命令行说明见 [`docs/USAGE.md`](docs/USAGE.md)。
> 
> ## 隐私与安全
> 
> - 微信相关能力只读，不发送消息，不操作微信 UI。
> - 真实聊天、联系人、Profile、数据库和输出报告不得提交到 Git。
> - 仓库中的聊天、账号、品牌和金额样例均应为虚构数据。
> - Reader 的数据库兼容性可能随微信版本变化；通知预览只是入站、非完整的降级来源。
> - 运行任何涉及账号、支付、发布或外部写入的动作前，由使用者最终确认。
> - 独立实现、商标和第三方关系说明见 [`NOTICE.md`](NOTICE.md)。
> 
> 发布前运行：
> 
> ```bash
> ./scripts/validate.sh
> ```
> 
> ## 社群
> 
> 开源代码提供完整的基础能力。Rion 的付费社群主要提供持续更新、安装与配置陪跑、真实案例拆解、行业规则包、Office Hour、产品共创，以及 AI + 自媒体 + 商业化的实践记录。
> 
> 开源项目和社群是两种交付：前者让任何人能独立使用，后者帮助成员更快把工具变成自己的结果。
> 
> 想一起实践 AI 工具、Skills 和自媒体变现，可以加入 Rion 的付费社群，交流使用方法、实战案例和商业化经验。
> 
> **微信号：`a668899universe`，添加时请备注「社群」**，了解具体内容和加入方式。
> 
> ## 支持这个项目 / Support the Project
> 
> 如果微信个人情报库帮你少翻了聊天记录、找到了值得跟进的机会，欢迎给项目点个 Star。你的支持会让它持续更新，也让更多人用好自己的聊天信息。
> 
> If WeChat Intelligence Hub saves you time reviewing chats or helps you spot an opportunity worth following up, please consider giving the project a Star. Your support helps it keep improving.
> 
> [前往 GitHub，点个 Star / Star on GitHub](https://github.com/Rion-Wu-tech/wechat-intelligence-hub)
> 
> ## License
> 
> 本项目采用 **GNU Affero General Public License v3.0 only（AGPL-3.0-only）**。你可以学习、运行、修改和用于商业活动；分发修改版本，或通过网络向用户提供修改版本时，必须履行 AGPL 对应源码等义务。
> 
> 需要闭源集成、专有发行、OEM、白标或不希望承担 AGPL 义务的企业，可申请[单独商业授权](COMMERCIAL-LICENSE.md)。加入 Rion 的付费社群不会自动改变软件许可证；社群提供的是安装适配、工作流配置、案例、持续更新和实践支持。
> 
> 第三方依赖继续遵循各自许可证，仓库根许可证不会替换依赖项目的授权声明。已经依据 AGPL 获得的公开版本许可不可撤销，但未来版本可以采用不同的发布方式。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Rion-Wu-tech/wechat-intelligence-hub)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Rion-Wu-tech--wechat-intelligence-hub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Rion-Wu-tech--wechat-intelligence-hub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "Rion-Wu-tech--wechat-intelligence-hub"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Rion-Wu-tech--wechat-intelligence-hub" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Rion-Wu-tech" AND file.name != "Rion-Wu-tech--wechat-intelligence-hub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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
> const me = dv.page("Repos/Rion-Wu-tech--wechat-intelligence-hub");
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

> **2026-09-07** — 首次收錄
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

- [[2026-09-07|2026-09-07]] — 首次收錄，1.3k stars
