---
repo: ccch1mneyyy/dsh-Go
url: https://github.com/ccch1mneyyy/dsh-Go
owner: ccch1mneyyy
owner_type: User
language: Dart
license: AGPL-3.0
description: "dsh-go — DeepSeek Harness 装进口袋：手机本机运行，也能遥控你的电脑。"
homepage: ""
stars: 2864
stars_per_day: 573
forks: 122
open_issues: 148
created: 2026-10-25
pushed_at: 2026-10-30
first_seen: 2026-10-31
week: "2026-W44"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.0.4"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-31
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-03"
contributor_count: 1
engagement: "low"
issue_close_rate: 9
repo_size_kb: 323326
readme_length: 5791
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-31"
star_history: "2026-10-31:2864"
tags:
  - github
  - "category/other"
  - "lang/dart"
  - "topic/ai_agent"
  - "topic/android"
  - "topic/android_app"
  - "topic/coding_agent"
  - "topic/deepseek"
aliases:
  - "dsh-Go"
  - "ccch1mneyyy/dsh-Go"
---

# dsh-Go

**2.9k** stars · **573** stars/天 · 建立 5 天前 · Dart · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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

`個人專案` `v1.0.4`

`ai-agent` `android` `android-app` `coding-agent` `deepseek` `deepseek-harness` `dsh` `dsh-plugin` `dsh-tui` `flutter` `llm`

> [!summary] 一句話摘要
> dsh-go — DeepSeek Harness 装进口袋：手机本机运行，也能遥控你的电脑。

## 專案簡介

dsh-go — DeepSeek Harness 装进口袋：手机本机运行，也能遥控你的电脑。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
| Forks | 122 |
| Open Issues | 148 |
| Issue 解決率 | 9% (15 closed) |
| 最後推送 | 2026-10-30 |
| 建立日期 | 2026-10-25 |
| Repo 大小 | 315.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ccch1mneyyy/dsh-Go) |
| Topics | `ai-agent` `android` `android-app` `coding-agent` `deepseek` `deepseek-harness` `dsh` `dsh-plugin` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Dart" : 79
>     "Kotlin" : 8
>     "JavaScript" : 8
>     "Python" : 2
>     "TypeScript" : 1
>     "HTML" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ccch1mneyyy](https://github.com/ccch1mneyyy) | 10 |

**最新版本**：v1.0.4 — DSH Go 1.0.4 (2026-10-30)

> [!info]- Release Notes
> **手机安装：只需下载 [`dsh-go-1.0.4-arm64.apk`](https://github.com/ccch1mneyyy/dsh-go/releases/download/v1.0.4/dsh-go-1.0.4-arm64.apk)。**
> 
> `update.json` 和 `SHA256SUMS` 供自动更新与校验使用，无需手动下载。GitHub 自动生成的 Source code 是源码包，不是安装包。
> 
> **Install on your phone: download [`dsh-go-1.0.4-arm64.apk`](https://github.com/ccch1mneyyy/dsh-go/releases/download/v1.0.4/dsh-go-1.0.4-arm64.apk).**
> 
> `update.json` and `SHA256SUMS` support automatic updates and verification. You do not need to download them manually. GitHub's Source code archives are not installers.
> 
> ### 中文
> 
> - 正式下载统一为 arm64 安装包，发布页明确标出安装包和辅助更新文件的用途。
> - DSH Remote 默认自动选择连接方式，优先尝试局域网 / P2P，再尝试 TURN，最后回落 Relay。升级后不再需要打开直连开关，旧的关闭设置也会迁移到自动策略；相应路径需服务端与主机支持。
> - 新增网络详情：点击连接卡或主机旁的网络标签，查看实际路径、连接耗时、可测的往返延迟及回落原因。重连后清除旧测量，改善 Wi-Fi 与蜂窝网络切换时的连接恢复。
> - 官方插件市场已上架「生图生视频」，支持在当前主机上生成图片和视频。可从「设置 → 插件 → 插件市场 → 官方」安装；主机尚未安装时，「设置 → 图像与视频」也有安装入口。插件需单独安装并配置服务商。
> 
> ### English
> 
> - Public downloads now provide one arm64 installer, with release-page guidance distinguishing it from update and verification files.
> - DSH Remote now selects its connection automatically, trying LAN / P2P first, then TURN, and finally Relay. Upgrading also migrates the old disabled-direct setting to the automatic policy. Compatible server and Host support is required for each path.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-25 ~ 2026-10-30）
> **活躍天數** 2 天 · **最新 commit** DSH Go 1.0.4

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#55](https://github.com/ccch1mneyyy/dsh-Go/issues/55) | [Bug] 设备拦截 AAAA 查询时 node 双栈解析整体失败，DSH 全部请求变成 could not reach | 2 | 0 |
> | [#127](https://github.com/ccch1mneyyy/dsh-Go/issues/127) | [Prop] APK 体积优化 | 1 | 1 |
> | [#102](https://github.com/ccch1mneyyy/dsh-Go/issues/102) | 手机操控：微信这类不暴露无障碍节点的应用里，读不到元素、也打不了字 | 1 | 1 |
> | [#101](https://github.com/ccch1mneyyy/dsh-Go/issues/101) | [Feature] 断网或冷启动后仍能翻看历史会话：把会话列表与最近正文从进程内缓存改为有界本地持久化 | 1 | 0 |
> | [#78](https://github.com/ccch1mneyyy/dsh-Go/issues/78) | 支持 ADB | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 简体中文 · English
> 
>   
>     
>     
>   
> 
>   DeepSeek Harness 的 Android 客户端。手机上直接跑，也能遥控你电脑上的 DSH。
> 
>   
>   
>   
>   
> 
> Deepy 和鲸娘，陪你干活
> 
> 干活时敲代码，做完来个空翻，等你确认会举手。打开「App 外显示」，它们还会跟你到桌面。
> 
>      
> 
>      
> 
> 下载 DSH Go
> 
> 从 GitHub Releases 或官网下载页获取最新版 APK，常见手机选 arm64 包。
> 
>   &emsp;
> 
>   感谢大家对 DSH Go 的支持和喜爱，我将尽快适配 iOS 和鸿蒙！大家 Star 点得越多，我适配得越快哦 hhh
> 
>   
> 
>   第一次用可以先看使用指南，遇到问题欢迎来论坛和 QQ 群。
>   手机上装过签名不同的早期测试包时不能直接覆盖安装，需要先卸载旧版；卸载会清空对话、Linux 环境和设置。
> 
> 本机运行，也能遥控电脑
> 
> 内置 Linux 环境，免 Root、免 Termux。电脑上的 DSH，也能一键切过去接着用。
> 
>   
>     
>     
>   
> 
> 插话、打断，过程自动收好
> 
> 回复中途也能插话，排队的消息随时「立即发送」。做完的过程折叠成一行。
> 
>   
>     
>     
>   
> 
> 原生界面，也有网页版
> 
> 和官方网页版一键切换，停在同一段对话，下次打开还是你上次用的那个。
> 
>   
>     
>     
>   
> 
> 分享卡、对话回放和链接
> 
> 回复一键做成分享卡。整段对话生成链接，对方在浏览器里回放，链接端到端加密。
> 
>   
>     
>     
>   
> 
> 横屏与平板
> 
> 横屏手机和平板重新排版：侧栏常驻，内容居中，弹出键盘也不挤。
> 
>   
>     
>     
>   
> 
> 主题配色与桌面图标
> 
> 六套主题色，也能跟随壁纸或自选颜色。四款桌面图标，三种功能图标风格。
> 
>   
>     
>     
>   
> 
> 中文，也说 English
> 
> 全部界面支持英文，在设置里切换，默认跟随系统。
> 
>   
>     
>     
>   
> 
> 手机操控
> 
> 看屏幕、帮你点，三档确认随你选。付款、密码和验证码，永远交还给你。
> 
>   
>     
>     
>   
> 
> ## 可以做什么
> 
> DSH Go 提供聊天界面、本机运行环境和远程连接，是基于 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的第三方项目。运行在手机上的是 DSH 引擎；模型请求仍由你配置的模型提供方处理。
> 
> - **本机运行**：在 App 内安装 Ubuntu、Node.js 与 DSH 运行环境，无需 Root 或另装 Termux。
> - **远程连接**：通过 SSH 或 DSH Remote 使用电脑、服务器上的 DSH。
> - **聊天与工具**：切换模型，发送图片、使用语音输入，处理工具审批和提问；支持聊天界面与网页模式。
> - **插件界面**：使用适配 DSH Go 的原生工具卡、表单和面板；仓库提供 SDK、教程和示例。
> - **手机操控**：在你开启权限后，让本机引擎读取屏幕、点按和输入，并可随时停止。
> - **分享与外观**：分享、导出和回放对话，调整主题、图标和桌宠。
> 
> 功能随主机和连接方式不同。DSH Remote 当前只支持图片附件，不能在 App 内打开网页版，插件管理限于开关，且不支持 DS Bot 和对话日志导出。详见[本机引擎与远程主机](docs/guide/zh/03-engine-hosts.md)。
> 
> ## 安装
> 
> 安装要求为 Android 8.0（API 26）及以上。Release 页面上的 **arm64** 安装包适用于常见的 64 位 Android 手机；x86_64 设备和模拟器用的 x64 包在发布说明末尾的「其他版本下载」里。仓库没有 32 位 ARM 构建。
> 
> 1. 从 [GitHub Releases](https://github.com/ccch1mneyyy/dsh-go/releases/latest) 或[官网下载页](https://go.dshtui.com/download)下载对应架构的 APK，并按系统提示允许该安装来源。
> 2. 首次启动时，选择在本机安装运行环境，或连接远程主机。
> 3. 为所选主机配置模型和所需凭据，再开始对话；部分远程渠道需要在主机侧配置。
> 
> 仅连接远程主机时，不必在手机上安装本机运行环境。手机操控只对正常模式下的本机引擎开放，需要按界面说明开启无障碍等权限；不打扰模式另外要求 Android 14 及以上，以及 Shizuku 或自连 ADB。首次使用可按[使用指南](docs/guide/README.md)逐项配置。
> 
> 本地引擎默认使用 PRoot 兼容启动。开发者选项中的直接启动默认关闭，开启后的兼容性和回退方式见[常见问题](docs/guide/zh/11-faq.md)。当前 Android 构建以 APK 侧载为目标，不是 Google Play 发布配置。
> 
> ## 数据与权限
> 
> 模型请求会发送给你配置的提供方。开启手机操控后，任务需要的屏幕文字可能发送给模型，支持看图的模型也可能收到截图；请先阅读 App 的权限说明。
> 
> “发送匿名使用统计”默认开启，可在首次引导或“设置 → 隐私与分享”关闭。采集范围和关闭后的处理见[常见问题](docs/guide/zh/11-faq.md)。分享内容前，请检查预览；收到链接或文件的人可以保存其中的内容。
> 
> ## 常见问题
> 
> 和 DeepSeek 官方是什么关系？
> 
> 没有关系。DSH Go 是社区开发的非官方客户端，基于开源的 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 构建。手机上运行的是 DSH 本身；模型请求发给你配置的模型提供方，需要联网，按你在提供方的账户计费。
> 
> 安全吗？
> 
> 本机网页版只接受 App 自己的访问。分享链接端到端加密，密钥只在链接里，服务器看不到内容。手机操控遇到付款、密码、验证码和系统设置，一律交还给你。
> 
> 切到后台会被杀吗？
> 
> 部分系统的省电策略会拦住后台。DSH Go 发现后会提醒你，并直达对应的放行设置，vivo、小米、华为、荣耀、OPPO 都有。
> 
> 对手机有什么要求？
> 
> Android 8 及以上。手机直接下载 Release 页面上的安装包即可，模拟器用的 x86_64 版在发布说明末尾的「其他版本下载」里。在手机上运行 DSH 要先准备内置的运行环境，请预留约 1 GB 空间；只连电脑或服务器上的 DSH 可以不装。
> 
> 开源吗？
> 
> 开源，代码就在这个仓库，以 [AGPL-3.0](LICENSE) 发布，`sdk/` 和 `examples/` 为 MIT。DSH Go 的名称和标识，以及 Deepy、鲸娘两位吉祥物，不在开源授权范围内，见 [ASSETS.md](ASSETS.md)。
> 
> ## 从源码构建
> 
> 以下流程面向 **Linux x86_64**。当前工具链脚本默认安装 JDK 17、Flutter 3.47.7 和 Android SDK/NDK；App 要求 Dart `^3.13.5`。准备 Bash、Git、curl、tar、unzip、xz、Python 3、zstd（Python 未提供 `compression.zstd` 时用于解包 zstd 压缩的 deb）、file 和常见 GNU 命令；重新解析 Ubuntu 软件包锁时还需要 gpgv。
> 
> 先取得完整源码和项目资源。`app/pubspec.yaml` 声明的字体、图片等都是构建输入，运行时包由下面的脚本生成。
> 
> ```bash
> git clone https://github.com/ccch1mneyyy/dsh-go.git
> cd dsh-go
> 
> bash tooling/setup-toolchain.sh
> source tooling/env.sh
> flutter --version
> java -version
> 
> bash runtime/build-runtime.sh arm64-v8a
> DSH_BETA_TOKEN_FILE= bash tooling/build-apk.sh -f arm64 --keep-daemon
> ```
> 
> 工具链脚本会下载 SDK/NDK 与模拟器镜像，并执行 Android SDK 许可接受步骤。默认安装到 `~/dev`；可通过 `DEV_ROOT` 指定独立目录。脚本会复用已有安装，构建前请核对版本。
> 
> 产物为 `app/build/app/outputs/flutter-apk/app-arm64-release.apk`。运行时构建使用仓库固定的版本与校验信息，并需要联网下载依赖。示例中的 `DSH_BETA_TOKEN_FILE=` 不嵌入维护者的内测通道令牌；`--keep-daemon` 保留 Gradle daemon，适合同时开发其他 Android 项目的环境。
> 
> 构建 x86_64 包时，先生成对应运行时：
> 
> ```bash
> bash runtime/build-runtime.sh x86_64
> DSH_BETA_TOKEN_FILE= bash tooling/build-apk.sh -f x64 --keep-daemon
> ```
> 
> 未配置 `app/android/key.properties` 时，本地 release 构建使用 debug 签名。它不能直接覆盖不同签名的官方安装包；请在测试设备上安装，保留已有数据，不要为解决签名冲突直接卸载正在使用的 App。发布签名与密钥文件不要提交到仓库。
> 
> 只查看 APK 构建命令，可运行：
> 
> ```bash
> DSH_BETA_TOKEN_FILE= bash tooling/build-apk.sh --dry-run -f all
> ```
> 
> ## 目录
> 
> | 路径 | 内容 |
> | --- | --- |
> | `app/` | Flutter 界面与 Android Kotlin 平台实现 |
> | `packages/dsh_client/` | DSH Web API 的 Dart 客户端 |
> | `packages/dsh_remote/` | DSH Remote 的 Dart 客户端 |
> | `runtime/` | Linux 运行时打包、引擎补丁与 App 桥接 |
> | `sdk/plugin-kit/` | 原生插件作者工具包；在仓库中使用，未发布到 npm |
> | `examples/plugins/` | 插件示例 |
> | `docs/guide/`、`docs/plugins/` | 用户指南与插件开发文档 |
> | `docs/assets/` | 本页用到的展示图、桌宠动图和社群二维码 |
> | `tooling/` | 工具链、APK 构建与诊断脚本 |
> | `services/`、`site/`、`infra/` | 配套分享服务、网站和部署材料 |
> 
> ## 参与贡献
> 
> 问题反馈和改进建议可提交到 [Issues](https://github.com/ccch1mneyyy/dsh-go/issues)。代码、文档和翻译贡献请先看 [CONTRIBUTING.md](CONTRIBUTING.md)。插件作者可以从[插件教程](docs/plugins/README.md)和 [SDK](sdk/plugin-kit/README.md)开始。
> 
> 安全问题请按 [SECURITY.md](SECURITY.md) 报告，避免在公开 Issue 中提交漏洞细节或凭据。
> 
> ## 社区
> 
> - **论坛**：[forum.dshtui.com](https://forum.dshtui.com)
> - **QQ 群**：`1132118290`（[点此加群](https://qm.qq.com/q/OEy2RqZnqY)）
> - **微信群**：扫下方二维码，过期请加 QQ 群
> 
>   &emsp;&emsp;
> 
>   QQ 群号 1132118290，电脑上可直接点此加群。微信群二维码每周更新，过期请加 QQ 群。
> 
> ## 许可证与致谢
> 
> 本项目采用 [AGPL-3.0](LICENSE)；`sdk/` 和 `examples/` 保持 **MIT**。第三方代码和素材以各自声明为准。
> 
> - [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness)：DSH Go 运行和连接的就是它。
> - [DSH-TUI](https://github.com/ccch1mneyyy/dsh-TUI)：吉祥物 Deepy 小鲸鱼和鲸娘来自这里。
> 
> Phase 相关代码经作者许可使用。DeepSeek Harness、PiPilot、DS Bot、DSH Remote 及其他第三方组件、素材保留各自的许可证和署名。具体来源和条款见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。
> 
> DSH Go 的名称、标识、Deepy 小鲸鱼和鲸娘等形象不在 AGPL 授权范围内，使用条款见 [ASSETS.md](ASSETS.md)。
> 
> 远程连接参考了 [ds-harness-remote](https://github.com/liguobao/ds-harness-remote) 的项目和服务器，感谢作者李国宝。
> 
> DSH Go 是社区开发的非官方客户端，与 DeepSeek 没有关联，也不代表 DeepSeek。DeepSeek 名称与标识归其所有者所有。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/ccch1mneyyy/dsh-Go)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ccch1mneyyy--dsh-Go"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Dart" AND file.name != "ccch1mneyyy--dsh-Go" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "ccch1mneyyy--dsh-Go"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ccch1mneyyy--dsh-Go" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ccch1mneyyy" AND file.name != "ccch1mneyyy--dsh-Go"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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
> const me = dv.page("Repos/ccch1mneyyy--dsh-Go");
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

> **2026-10-31** — 首次收錄
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

- [[2026-10-31|2026-10-31]] — 首次收錄，2.9k stars
