---
repo: zhu1090093659/dsh-web-ui
url: https://github.com/zhu1090093659/dsh-web-ui
owner: zhu1090093659
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center."
homepage: "https://gallery.dsh-market.com"
stars: 1985
stars_per_day: 993
forks: 98
open_issues: 29
created: 2026-08-12
pushed_at: 2026-08-15
first_seen: 2026-08-15
week: "2026-W33"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.13"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 79
repo_size_kb: 163283
readme_length: 7031
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-15"
star_history: "2026-08-15:1985"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/deepseek_harness"
  - "topic/dsh"
  - "topic/dsh_plugin"
  - "topic/web_ui"
aliases:
  - "dsh-web-ui"
  - "zhu1090093659/dsh-web-ui"
---

# dsh-web-ui

**2.0k** stars · **993** stars/天 · 建立 2 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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

`v0.1.13`

`deepseek-harness` `dsh` `dsh-plugin` `web-ui`

> [!summary] 一句話摘要
> Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center.

## 專案簡介

Plugin and skin collection for DeepSeek Harness (DSH) Web UI - task board, git graph, right-side panel, remote mobile UI, pet, live token stats, and skin center.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
| Forks | 98 |
| Open Issues | 29 |
| Issue 解決率 | 79% (109 closed) |
| 最後推送 | 2026-08-15 |
| 建立日期 | 2026-08-12 |
| 官方網站 | [Link](https://gallery.dsh-market.com) |
| Repo 大小 | 159.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zhu1090093659/dsh-web-ui) |
| Topics | `deepseek-harness` `dsh` `dsh-plugin` `web-ui` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `lightningcss` `playwright` `tsdown`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 78
>     "CSS" : 14
>     "JavaScript" : 7
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhu1090093659](https://github.com/zhu1090093659) | 284 |
> | [@TiankunDai](https://github.com/TiankunDai) | 4 |
> | [@LittleDarkZero](https://github.com/LittleDarkZero) | 2 |
> | [@farobute](https://github.com/farobute) | 1 |
> | [@WyxBUPT-22](https://github.com/WyxBUPT-22) | 1 |

**最新版本**：v0.1.13 — dsh-web-ui v0.1.13 (2026-08-15)

> [!info]- Release Notes
> ## What's Changed
> * feat(describe-image): add describe_image tool plugin to the family by @whitelonng in https://github.com/zhu1090093659/dsh-web-ui/pull/113
> 
> ## New Contributors
> * @whitelonng made their first contribution in https://github.com/zhu1090093659/dsh-web-ui/pull/113
> 
> **Full Changelog**: https://github.com/zhu1090093659/dsh-web-ui/compare/v0.1.12...v0.1.13

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-14 ~ 2026-08-15）
> **活躍天數** 2 天 · **最新 commit** chore(release): bump to 0.1.13

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#59](https://github.com/zhu1090093659/dsh-web-ui/issues/59) | [Issue]: 求更多宠物或者自定义宠物 | 2 | 3 |
> | [#169](https://github.com/zhu1090093659/dsh-web-ui/issues/169) | [Issue]: 右侧面板改进反馈：桌面端按钮重叠 + 新增右键菜单（在文件管理器中查看/用默认应用打开） | 1 | 0 |
> | [#179](https://github.com/zhu1090093659/dsh-web-ui/issues/179) | [Issue]: 移动端 Markdown 渲染 + KaTeX 公式支持 | 0 | 0 |
> | [#178](https://github.com/zhu1090093659/dsh-web-ui/issues/178) | [Issue]: 移动端聊天工具栏显示上下文用量（context 占用百分比） | 0 | 0 |
> | [#177](https://github.com/zhu1090093659/dsh-web-ui/issues/177) | [Issue]: 移动端页面 apple-touch-icon（添加到主屏幕图标） | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dsh-web-ui · DSH Web UI
> 
> 中文 | [English](README.en.md)
> 
> dsh-web-ui 是 DeepSeek Harness（DSH）Web UI 的插件与皮肤集合：任务看板、Git 图谱、右侧面板、移动端远程、远程连接、图像理解工具、鲸鱼娘宠物、实时令牌统计，以及皮肤中心。所有插件既可独立安装，也可通过聚合包一次装齐。
> 
> ## 功能插件
> 
> ### 任务看板
> 
> 在侧边栏点击「任务看板」进入。任务按五列状态组织：待规划、待办、进行中、已完成、已失败。点击卡片上的「执行」，任务将由真实的 DSH 智能体会话执行，完成后状态自动回写；需要复盘时，可直接跳转到执行会话查看完整过程。
> 
> 任务支持定时执行：在详情中配置 cron 表达式（如每天 23:00 自动升级 DSH、每周一 09:00 生成周报），到点自动开工，无需人工值守。
> 
> | 多列看板 | 定时执行 |
> | --- | --- |
> |  |  |
> 
> ### Git 图谱
> 
> 输入框上方的分支选择器，支持切换分支与查看提交历史；Git 图谱将分支泳道与提交历史可视化，仓库再大也能顺着时间线快速定位变更。
> 
> ### 右侧面板
> 
> 项目会话打开时，聊天区右侧出现「预览」与「文件/变更」两块面板：
> 
> - **文件树**：浏览工作目录，点击文件即在预览面板打开，整行点击展开文件夹，支持按文件名搜索定位；
> - **预览**：多标签预览 markdown、HTML、代码、diff、CSV、PDF、Office、图片与文本等格式，支持源码 / 预览切换、分屏编辑与保存；
> - **变更（SCM）**：真实 git 变更面板，支持 stage / unstage / discard；
> - 面板宽度可拖拽调整，双击把手复位默认宽度，折叠状态与宽度按项目持久化；
> - 9 款皮肤全部适配右侧面板，换肤后面板随之融入主题。
> 
> ### 鲸鱼娘宠物
> 
> 一只常驻界面的鲸鱼娘宠物，会跟随智能体的状态切换动画：思考、等待、工作、庆祝。点击可互动（摸头），投喂小鱼干可提升亲密度，陪伴度从幼鲸一路成长至「深海羁绊」。支持自定义名称、自由拖动位置，也可随时隐藏。
> 
> | 陪伴工作 | 互动面板 |
> | --- | --- |
> |  |  |
> 
> ### 实时令牌统计
> 
> 在输入框下方实时显示生成速度（TPS）、LLM 耗时、上下文占用、缓存命中率以及输入 / 输出 token 数，每次生成的用量一目了然。
> 
> ### 移动端远程
> 
> 侧边栏底部的手机图标打开配对面板：扫码配对（或复制链接）后，手机进入独立的移动端界面，远程控制当前 dsh web 工作区——查看与新建会话、收发消息、切换模型与思考强度、调整权限预设，全部与桌面端同步。配对令牌一次性且限时，「停止」可随时吊销所有设备；二维码默认走局域网，也可开启 cloudflared 公网隧道，让手机在任意网络配对。
> 
> > **实时消息与隧道**：移动端依赖 SSE（Server-Sent Events）实时接收消息。Cloudflare quick tunnel（trycloudflare.com）与 Tailscale Serve 不透传 SSE，普通 HTTP 正常、实时推送不可达；此场景下插件自动降级为轮询，可正常收发消息，仅新消息可能延迟数秒到达。需要即时推送请使用支持 SSE 的隧道（Cloudflare named tunnel、自定义 TCP 端口转发等）。
> 
> | 工作区列表 | 会话列表与新建会话 |
> | --- | --- |
> |  |  |
> | 聊天（折叠的深度思考与工具调用） | 模型与思考强度选择 |
> |  |  |
> 
> ### 远程连接
> 
> 侧边栏「SSH」入口打开远程运维面板。主机支持密钥 / 密码认证，可从 `~/.ssh/config` 一键导入；配置统一存于 `~/.dsh/dsh-ssh.json`。对已配置主机可执行真实操作：
> 
> - **Web 终端**：xterm.js 远程终端，实时输出、随窗口自适应；
> - **文件传输**：SFTP 上传 / 下载，带进度条与远程目录浏览；
> - **端口转发**：本地隧道直达远程内网服务（数据库、API、管理后台），仅监听 127.0.0.1；
> - **集群执行**：一条命令并发跑多台主机，按别名 / 环境 / 标签过滤；
> - **Agent 直连**：Agent 与面板共享同一份主机配置，对话中直接说「连一下 xxx 看看状态」即可由智能体执行远程命令。
> 
> ### 图像理解
> 
> 为纯文本模型提供视觉能力：对话中提到图片（本地路径、http(s) URL 或会话附件）时，`describe_image` 工具把图片交给配置的 OpenAI 兼容视觉端点（Qwen-VL、GLM-4V、GPT-4o、本地 Ollama 等）回答，**只有返回的文本进入会话，图片本身不进会话记录**。纯文本模型的输入框没有图片入口，插件在输入框加了一个图片按钮：选图后自动生成附件引用插入草稿，模型即可用 `describe_image` 分析；工具还支持 `prompt` 参数传入自定义指令（如 OCR、UI 诊断、翻译），比默认描述更精准。端点、模型、密钥与默认指令在「设置 > 插件配置 > Image understanding」卡配置，即时生效。
> 
> ### 设置中心
> 
> 全部插件的开关与参数统一收纳于「设置 > 插件配置」，修改即时生效；组内另有「社区插件」卡片，索引社区贡献者自行登记的插件并链接到他们的仓库。
> 
> ## 皮肤
> 
> 皮肤中心提供 9 款皮肤，均支持先试穿再应用：试穿即时生效、退出完全还原，确认满意后一键应用。
> 
> ### Windows XP（Luna）
> 
> 还原 Luna 经典界面：蓝色渐变窗口条、绿色「开始」按钮、Bliss 蓝天桌面，全局直角风格。
> 
> ### Minecraft 方块世界
> 
> 以《我的世界》主界面为灵感：像素全景天空盒在界面后方缓慢旋转，按钮为灰石板样式，输入框为木告示牌样式。
> 
> ### Blue Fantasy 蓝色幻想
> 
> 鲸鱼插画铺于半透明面板之下，靛蓝色调色板贯穿全局，暗色主题下效果尤为突出。
> 
> ### 鲸吟（Whale Song）
> 
> 深海鲸语女神主题：无文字纯氛围背景画（蓝发女神与鲸群居左、冰蓝星座网格与金色细线点缀、右侧大量留白）垫在半透明面板之下，冰蓝 / 浅青 / 深海军蓝 / 钴蓝冷色体系贯穿全局，暗色变体为深海夜航调。
> 
>  · 
> 
> ### 交易终端（Trading Terminal）
> 
> 带实时行情的炒股皮肤：顶栏滚动跑马灯（A股 / 港股 / 美股 / 指数 / 加密 / 外汇，红涨绿跌），标题栏行情快签，状态栏展示 A股 / 港股 / 美股交易时段与港美股指数。已安装 `dsh-fun-ticker` 时跑马灯跟随你的自选列表（同源代理取数），已安装 `dsh-longbridge` 时指数格渲染长桥券商快照；两个插件都没装也能直接走公共行情源（腾讯 / 币安 / Frankfurter）独立工作，所有路径失败都安全降级为 `--`。
> 
>  · 
> 
> 其余四款：QQ2008 怀旧版（水晶蓝配色与企鹅元素）、同花顺风格（行情元素融入界面）、龙的传人（朱砂龙印主题）、初音未来（蓝紫品红渐变与磨砂玻璃面板，亮暗双主题）。
> 
> ## 安装
> 
> DSH 插件通过 `dsh plugin` 命令安装进 **profile**（`dsh web` 对应 `web` profile）。推荐直接安装聚合包 `dsh-web-ui-all`——一个包装齐全部功能插件与皮肤；只想用皮肤则装 `dsh-skins`。
> 
> ### 方式一：从 npm 安装（推荐）
> 
> 插件已发布到 npm（`@linxin666` scope），一条命令装齐：
> 
> ```sh
> dsh plugin --profile web add @linxin666/dsh-web-ui-all@0.1.12
> ```
> 
> 装完重启 `dsh web`，侧边栏即可看到全部插件入口。只想用皮肤则装 `@linxin666/dsh-skins`。
> 
> > pnpm 的严格（isolated）布局只把聚合包放在 profile 顶层，patch 行引用的 11 个子包（共 12 行 insert）会被收进嵌套目录，`dsh web` 会报 `Cannot find package '@linxin666/dsh-...'`。本包的子包已声明为 dependencies；使用严格布局时，在 profile 的 `pnpm-workspace.yaml` 加 `nodeLinker: hoisted`（或旧式 `public-hoist-pattern: ['@linxin666/*']`），再重新安装即可。
> 
> > 版本固定为当前最新发布版 `0.1.12`。`0.1.1` 的 `dsh-pet` 缺少运行时文件（`lib/types/*.js`），且个别环境对 npm `latest` 的解析可能受 registry 缓存影响，带版本号安装最稳妥；升级时把 `@0.1.12` 换成新版本号。
> 
> > 首次安装若提示 `ERR_PNPM_IGNORED_BUILDS`（pnpm 拒绝依赖的构建脚本），按提示把 `cloudflared` / `cpu-features` / `ssh2` 加入 profile 的 `pnpm-workspace.yaml` `allowBuilds` 后重新执行即可。
> 
> > **pnpm 11 release-age 门禁**：新版本发布后约 10 天内，pnpm 11 的 `minimumReleaseAge` 门禁可能静默装回更旧的 `@linxin666/*` 版本（如 `dsh-web-ui-all@0.1.5` 配旧版皮肤中心）。旧版皮肤中心 Apply 皮肤时会写入独立皮肤包引用，导致 `dsh web` 启动崩溃（`ERR_MODULE_NOT_FOUND ... dsh-client-ui-skin-*`）。在 profile 的 `pnpm-workspace.yaml` 中排除全部 `@linxin666/*` 包后再安装或更新：
> >
> > ```yaml
> > minimumReleaseAgeExclude:
> >   - '@linxin666/*'
> > ```
> 
> ### 方式二：从 GitHub 仓库安装（改代码调试）
> 
> 插件包已在 npm 发布，仓库安装仅供开发调试（需要 Node.js >= 22 与 pnpm）：
> 
> ```sh
> # 1. 克隆仓库
> git clone https://github.com/zhu1090093659/dsh-web-ui.git
> cd dsh-web-ui
> 
> # 2. 安装依赖并构建
> pnpm install
> pnpm -r build
> 
> # 3. 把全家桶链接进 web profile（推荐，先链接全部子包再注册聚合包）
> node scripts/link-profile.mjs
> dsh plugin --profile web add link:$(pwd)/packages/dsh-web-ui-all
> 
> # 4. 重启 dsh web，侧边栏即可看到全部插件入口
> dsh web
> ```
> 
> > 只想用皮肤：第 3 步只执行 link-profile 后安装 `packages/dsh-skins` 即可。
> >
> > 注意：profile 目录不是 pnpm workspace，聚合包里的 `workspace:*` 依赖会回退拉取 npm 已发布版本；
> > 若 npm 版本滞后或损坏会出现「宿主已挂载但 UI 不显示」，此时先用 `node scripts/link-profile.mjs`
> > 让全部子包走仓库构建产物。
> 
> ### 单独安装某个插件
> 
> 不想装全家桶时，可单独安装任意插件（npm 已发布，直接用包名）：
> 
> ```sh
> dsh plugin --profile web add @linxin666/dsh-client-ui-task-board   # 任务看板
> dsh plugin --profile web add @linxin666/dsh-ssh                    # 远程连接（SSH）
> dsh plugin --profile web add @linxin666/dsh-tool-describe-image    # 图像理解工具
> dsh plugin --profile web add @linxin666/dsh-pet                    # 鲸鱼娘宠物
> ```
> 
> ### 验证与卸载
> 
> 安装成功后重启 `dsh web`，侧边栏出现对应入口即生效；也可用 `dsh --profile web --dump-config` 确认插件配置层已挂载。若侧边栏没有新入口，多半是安装后没有重启 `dsh web`。
> 
> 卸载：`dsh plugin --profile web remove @linxin666/dsh-web-ui-all`，然后重启 `dsh web`。
> 
> 技术细节见 [docs/plugins.md](docs/plugins.md)。
> 
> ## 社区
> 
> 欢迎加入**中心社区**，与开发者和其他用户一起交流使用心得、反馈问题、参与讨论。微信扫码即可加入：
> 
> ## 来源与版权
> 
> | 包 | 来源 | 版权 |
> | --- | --- | --- |
> | dsh-task-board / dsh-git-graph / dsh-aionui-panel / dsh-pet / dsh-remote-web-ui / dsh-live-stats / dsh-web-ui-settings / dsh-liangshen / dsh-skins / dsh-web-ui-all / skins | 作者 zhu1090093659 个人开发 | Apache-2.0（zhu1090093659） |
> | dsh-tool-describe-image | 移植自 [whitelonng/dsh-plugin-describe-image](https://github.com/whitelonng/dsh-plugin-describe-image)（deepseek-harness `packages/vision/tool-describe-image`） | Apache-2.0（zhu1090093659） |
> 
> 迁入第三方代码必须保留 LICENSE 与署名；活跃且有上游的第三方优先 fork 或依赖引用，不搬代码。
> 
> 友情链接
> 
> - [DeepSeek Harness Desktop](https://github.com/anywhere-labs/deepseek-harness-desktop) —— 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验。
> - https://linux.do
> - [dshfind](https://dshfind.com) —— 面向 DeepSeek Harness 的学习与分享社区，聚合论文精读、插件超市与用户排名。
> - [deepseek-plugin-store](https://github.com/Ericwong5021/deepseek-plugin-store) —— DeepSeek Harness 独立社区插件商店，发现、安装并提交经过验证的插件、工具与扩展。
> - [dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) —— 为 DSH 定义专用 Data Agent 预设，让 AI 帮你查询、更新、分析数据。
> - [dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) —— Claude Code 风格全屏交互终端插件，补位官方缺失的终端 TUI：像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条与 TPS 仪表。
> - [dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) —— 基于官方 DeepSeek Harness 的交互式终端 UI 插件，在官方基础上增加 TDD 与证据门等工作流。
> 
> ## Star 历史
> 
> [](https://www.star-history.com/?repos=zhu1090093659%2Fdsh-web-ui&type=date&legend=top-left)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/zhu1090093659/dsh-web-ui) · [官方網站](https://gallery.dsh-market.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "zhu1090093659--dsh-web-ui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "zhu1090093659--dsh-web-ui" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "zhu1090093659--dsh-web-ui"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zhu1090093659--dsh-web-ui" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zhu1090093659" AND file.name != "zhu1090093659--dsh-web-ui"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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
> const me = dv.page("Repos/zhu1090093659--dsh-web-ui");
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

> **2026-08-15** — 首次收錄
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

- [[2026-08-15|2026-08-15]] — 首次收錄，2.0k stars
