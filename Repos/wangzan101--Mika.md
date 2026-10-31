---
repo: wangzan101/Mika
url: https://github.com/wangzan101/Mika
owner: wangzan101
owner_type: User
language: Kotlin
license: Apache-2.0
description: "Mika — 你手机上的私人 AI 助理，替你操作 App、上网、把事办成。An on-device AI agent for Android that operates apps and the web to get things done for you."
homepage: ""
stars: 1779
stars_per_day: 1779
forks: 276
open_issues: 21
created: 2026-10-29
pushed_at: 2026-10-31
first_seen: 2026-10-31
week: "2026-W44"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.1.17"
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
contributor_count: 5
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 49642
readme_length: 10000
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-31"
star_history: "2026-10-31:1779"
tags:
  - github
  - "category/other"
  - "lang/kotlin"
  - "topic/accessibility"
  - "topic/ai_agent"
  - "topic/android"
  - "topic/automation"
  - "topic/jetpack_compose"
aliases:
  - "Mika"
  - "wangzan101/Mika"
---

# Mika

**1.8k** stars · **1.8k** stars/天 · 建立 1 天前 · Kotlin · Apache-2.0

```dataviewjs
const me = dv.page("Repos/wangzan101--Mika");
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

`v0.1.17`

`accessibility` `ai-agent` `android` `automation` `jetpack-compose` `kotlin` `llm` `mobile-agent`

> [!summary] 一句話摘要
> Mika — 你手机上的私人 AI 助理，替你操作 App、上网、把事办成。An on-device AI agent for Android that operates apps and the web to get things done for you.

## 專案簡介

Mika — 你手机上的私人 AI 助理，替你操作 App、上网、把事办成。An on-device AI agent for Android that operates apps and the web to get things done for you.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wangzan101--Mika");
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
> const me = dv.page("Repos/wangzan101--Mika");
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
| Forks | 276 |
| Open Issues | 21 |
| Issue 解決率 | 9% (2 closed) |
| 最後推送 | 2026-10-31 |
| 建立日期 | 2026-10-29 |
| Repo 大小 | 48.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wangzan101/Mika) |
| Topics | `accessibility` `ai-agent` `android` `automation` `jetpack-compose` `kotlin` `llm` `mobile-agent` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Kotlin" : 98
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wangzan101](https://github.com/wangzan101) | 96 |
> | [@hdq66666](https://github.com/hdq66666) | 6 |
> | [@XinYe-here](https://github.com/XinYe-here) | 2 |
> | [@tc3oliver](https://github.com/tc3oliver) | 1 |
> | [@PopuraWorks](https://github.com/PopuraWorks) | 1 |

**最新版本**：v0.1.17 — Mika 0.1.17 (2026-10-31)

> [!info]- Release Notes
> ## 变化 / What's new
> 
> - **悬浮胶囊不会再莫名消失。** 有的手机会在后台把 Mika 关掉，系统随之撤掉它的无障碍，胶囊就不见了，以前要重新打开 Mika 才回来。现在 Mika 的手机助手会在几秒内把它拉回来、恢复无障碍，胶囊自己回来。只在胶囊设成「一直显示」或正在跑任务时这样做；短时间内反复被关会停手；你自己在系统设置里关掉的无障碍不会被改回去。
> - 悬浮胶囊设置页加了提示：胶囊不见了的话，请在系统设置里允许 Mika 后台运行、自启动。
> - 「复制诊断信息」里会记下最近一次被恢复的时间，以及启动时发现无障碍被撤掉的情况，方便反馈。
> 
> - **The floating capsule no longer disappears.** Some phones close Mika in the background, the system then turns off its accessibility service, and the capsule vanished until you reopened Mika. Now Mika's phone helper brings it back within seconds and restores accessibility, so the capsule returns on its own. This only happens when the capsule is set to "Always show" or a task is running; it backs off if Mika keeps getting closed, and accessibility you turned off yourself stays off.
> - The floating capsule settings now suggest allowing Mika to run in the background and start automatically if the capsule disappears.
> - "Copy diagnostics" now includes the last restore and whether accessibility was found removed at startup.
> 
> 从旧版本直接覆盖安装即可，对话和设置都保留。Install over the previous version; your chats and settings are kept.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-31 ~ 2026-10-31）
> **活躍天數** 1 天 · **最新 commit** 版本 0.1.17

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/wangzan101/Mika/issues/7) | ios need | 1 | 0 |
> | [#33](https://github.com/wangzan101/Mika/issues/33) | 【功能请求】支持常用的连接器，如 Google Drive、Google Doc、Gmail 等 | 0 | 0 |
> | [#32](https://github.com/wangzan101/Mika/issues/32) | # 打包体积优化建议：R8 压缩与 ABI 筛选（P0），沙箱外置下载（可选） | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Mika
> 
> 简体中文 | [English](README.en.md)
> 
> **你手机上的私人 AI 助理，替你操作 App、上网、把事办成。**
> 
> 它在一块看不见的后台屏上干活，你照样刷你的手机。
> 
> An on-device AI agent for Android that operates apps and the web to get things done for you — on a hidden background screen, so you can keep using your phone.
> 
> [下载 APK](https://github.com/wangzan101/Mika/releases/latest) · [安装](#安装) · [快速开始](#快速开始) · [能做什么](#能做什么) · [常见问题](#常见问题) · [参与贡献](#参与贡献)
> 
> 
> ## 安装
> 
> **方式一：在手机上自己装**
> 
> 1. 从 [Releases](https://github.com/wangzan101/Mika/releases/latest) 下载最新的 APK，安装。
> 2. 打开 Mika 设置里的「设置手机操作」向导，配对一次无线调试（[设置指南](docs/setup-guide.md)）。
> 3. 在设置里的「模型」添加服务商、填 API Key，或者用 ChatGPT 登录。
> 
> 每一步的细节见下文的[快速开始](#快速开始)。
> 
> **方式二：让电脑上的 AI 助手帮你装**
> 
> 手机用数据线连上电脑，在手机上打开 USB 调试，然后把下面这句话发给电脑上能执行命令的 AI 助手：
> 
> ```
> 请按 https://github.com/wangzan101/Mika/blob/main/docs/install-with-agent.md 的步骤，帮我把 Mika 安装到通过 USB 连着的安卓手机上。
> ```
> 
> 它会检查手机、下载安装、打开需要的权限，需要你在手机上点的时候会停下来告诉你。API Key 由你自己在 Mika 里填，不经过它。
> 
> **装好之后：让电脑上的 AI 工具直接用 Mika（MCP）**
> 
> 手机用数据线连着电脑，在电脑上运行：
> 
> ```
> adb shell sh /sdcard/Android/data/com.wangzan101.mika/files/connect-computer.sh
> adb forward tcp:8765 tcp:8765
> ```
> 
> 第一条会打开 Mika 的电脑连接，并打印连接信息（地址 `http://127.0.0.1:8765/mcp` 和令牌）；把它们填进电脑上 AI 工具的 MCP 配置，它就能给 Mika 派任务、查进度、拿结果。手机上不用点；只经数据线连接、要令牌，Wi-Fi 上连不到；付款这类确认只能在手机上点。用方式二安装时，AI 助手会顺手帮你接好。详见[电脑连接说明](docs/mcp.md)。
> 
> > **English summary**
> >
> > Mika is an Android app that takes a one-sentence request and carries it out on your phone. It drives apps on a private background screen (so you can keep using your phone), browses the web in a built-in desktop-class browser, and runs scripts in a local Linux sandbox. You bring your own model API key (several providers are supported as presets, plus any OpenAI-compatible, Anthropic, Gemini or OpenAI Responses endpoint). There is no Mika server: your requests go only to the model provider you configure.
> >
> > Status: **public beta**, changing quickly (see [Releases](https://github.com/wangzan101/Mika/releases) for versions and changes). Chat, web and sandbox tasks work on Android 11+; phone app control needs Android 12+, with Android 14+ recommended. The sandbox runs on arm64 devices only. The app UI is available in English and Chinese (follows your system language; switch in Settings › Language); see the [full English README](README.en.md). Licensed under Apache-2.0.
> 
> 
> ## Beta 说明
> 
> - 这是早期公开测试版，功能和界面还在快速变化，升级时可能有不兼容的改动。
> - 目前主要在一台安卓 14 手机上测试过。别的安卓版本、别的手机上可能遇到没见过的问题，欢迎[反馈](#参与贡献)。
> - Mika 会替你操作第三方 App 和网站，请先读[免责声明](#免责声明)。
> 
> 
> ## 演示
> 
> 后台发微信：左边是 Mika 的对话页，右边是 Mika 在后台屏上的每一步（加速 4 倍；聊天列表已打码）
> 
> 后台翻完微信群，总结今天聊了啥（加速播放；总结正文涉及群友发言，已打码）
> 打开小红书，总结一位博主的内容（加速播放）
> 在 BOSS 直聘网页上给 3 个岗位打招呼（加速播放）
> 
> 打开 Hacker News，读出首页前 5 条和分数（加速 1.5 倍）
> 在 Google Flights 上找旧金山到纽约最便宜的直飞（加速 3 倍；价格按网络所在地区显示为港币）
> 在 Amazon 上找 30 美元以内、4.5 星以上的 USB-C 充电器，加进购物车，停在结账前（加速 3.5 倍）
> 
> 在 BOSS 直聘网页上找岗位、打招呼
> 打开汽水音乐，看广告领听歌权益
> 在美团上凑满减、点外卖，付款前问你
> 
> 
> ## 能做什么
> 
> 你用一句话交代一件事，Mika 在手机上替你办。
> 
> 
> ### 操作任何 App，不占你的屏幕
> 
> 手机上装的 App 都能操作，不用事先适配：Mika 像人一样看屏幕、找按钮、点击输入，看得到就能操作。
> 
> - 在一块单独的后台屏上打开 App、读界面、点击、输入、滚动，你照常用手机；对话页上的小画面实时显示它在做什么。
> - 能逐屏读长列表和聊天记录，比如「帮我总结一下某个群今天都聊了些啥」。
> - 界面读不出来的 App（自己画界面、控件没有名字）也能用：Mika 用随 APK 自带的文字识别读屏上的字；配了能看图的模型时，还能看图找按钮和输入框。
> - 能把一段文字直接分享进某个 App（发消息、记笔记），收件人和发送仍由 Mika 在那一页上点。
> - 系统问「用哪个 App 打开」、装了两份的 App 问「打开哪一个」、一个 App 打开另一个 App（比如跳到付款页）时，Mika 认得出来：能处理的接着做，要你选或要你亲手处理的，会停下来请你在屏幕上操作。
> - 需要你亲手处理的事（登录、验证码、付款）会发通知请你接管：App 挪到主屏，你处理完交还，Mika 重新核实再继续。
> 
> 
> ### 内置浏览器
> 
> - 任何网站都能打开：在后台打开网页，用真实的点击和键盘输入操作页面，默认按电脑版网页打开。
> - 能读页面正文，也能读页面自己收到的数据；支持下载、上传。
> - 登录过的网站保持登录；侧栏「浏览器」里可以自己浏览，在这里登录的网站 Mika 办事时也能直接用。
> - 翻页有节奏：同一个网站连着换页会停一停，对限制浏览快慢的网站停得更久；认得出风控拦截页，交给你处理而不是硬闯。
> 
> 
> ### 此刻的屏幕
> 
> - 你在别的 App 里时，屏幕边上有一颗 Mika 悬浮胶囊，显示后台任务的进展、要你处理的事和结果，点开可以插话、回答、同意或停止。
> - **双击胶囊**，把你正在看的这一屏发给 Mika，比如「这个怎么回」「帮我记下来」；也可以在卡片里截屏、补一句话再发。
> 
> 
> ### 定时与条件任务
> 
> - 「明早 9 点提醒我」「每天早上看看天气，下雨才告诉我」「每周五做某件事」。
> - 到点在原对话里执行，结果送回来；定时任务页可以暂停、改时间、立即执行、删除。
> 
> 
> ### 随时插话、随时停
> 
> - 任务进行中可以继续说话，补充或更正要求，Mika 在下一步之前读到。
> - 按停止后，Mika 会补几行交代：做了什么、看到了什么、发出了几次、哪些没做完。下次说「继续」它知道从哪接着做。
> 
> 
> ### 询问 / 自主
> 
> - 默认是**询问**：只有花钱（下单、付款）先问你，发消息、提交、删除这些都直接做完。也可以换成**自主**，连付款也不先问。详见[下文](#询问--自主模式)。
> 
> 
> ### 记忆
> 
> - 记住你明确说过的事实、偏好和做事方式（做事方式要你批准），可以查看、修改、删除；只从你自己说的话里记，密码、验证码、卡号这类不记。记忆加密保存在手机上。
> 
> 
> ### 熟悉的 App 和网站，做得更快更稳
> 
> 没有任何说明，Mika 也能看着屏幕把事办成。有些 App 和网站另外写了使用知识（入口在哪、常见做法、要注意什么），Mika 用到时自动查阅，少走弯路。比如进了聊天 App 直接知道怎么找联系人、翻聊天记录；打开招聘网站知道怎么筛岗位、打招呼。另有几类事情的通用做法。知识持续增加，人人可以补充：它们是放在 [`core/src/main/resources/knowledge/`](core/src/main/resources/knowledge/) 和 [`core/src/main/resources/skills/`](core/src/main/resources/skills/) 下的纯文本文件，[欢迎补充](#参与贡献)。
> 
> 已经写了使用知识的（没写到的 App 和网站照样能用）：
> 
> | 类别 | 内置 |
> |---|---|
> | **App** | Android 设置、百家号、哔哩哔哩、BOSS直聘、Chrome、得到、抖音、飞书、Gmail、即刻、快手、领英、QQ邮箱、Telegram、今日头条、Uber、Uber Eats、微信、微博、WhatsApp、闲鱼、小红书、知乎 |
> | **网站** | Amazon、哔哩哔哩、Google Calendar、豆瓣、抖音、Instagram、Gmail、Google Maps、Telegram、百度贴吧、微博、搜狗微信、WhatsApp、小红书、小宇宙、YouTube、知乎、BOSS直聘 |
> | **通用做法**（技能） | 把内容整理成文字、处理 PDF 文档、查清一件事、消息与邮件 |
> 
> 
> ### 成批的事
> 
> - 成批做事（比如逐个打招呼、投递）直接开始，不用先跟你确认名单；每两次之间隔开一段随机时间，做到网站自己说「到上限了」就停下告诉你。
> 
> 
> ### 过程可查
> 
> - 回答下面列出来源（读过的页面、截图）；每次任务都有可回看的过程记录。
> - 每次任务一行小结：总用时、和模型来回几次、用了多少 Token、多久看到第一次反馈；设置里的「Token 用量」按天、按服务商、按模型统计。
> 
> 
> ### Linux 沙箱
> 
> - 每个对话一个工作区，可以跑 Python、Node 和 shell 命令，处理你发来的文件，把结果存到手机的「下载/Mika」。
> - 默认断网，需要时在设置里的「文件与计算环境」打开「允许脚本联网」。只支持 arm64 设备。
> 
> 
> ### 电脑上的 AI 工具也能用（MCP）
> 
> 手机连着电脑时，电脑上的 AI 工具可以通过 MCP 把任务交给 Mika，在手机上办完把结果拿回去。一条命令打开，只经数据线、要令牌；也可以在设置里打开局域网连接（默认关）。见[电脑连接说明](docs/mcp.md)。
> 
> 
> ## 快速开始
> 
> 
> ### 系统要求
> 
> | 项目 | 要求 |
> |---|---|
> | 安装、聊天、网页与沙箱任务 | 安卓 11 及以上（沙箱仅支持 arm64） |
> | 操作手机 App | 安卓 12 及以上；安卓 12、13 上后台操作可能影响主屏焦点 |
> | 推荐 | 安卓 14 及以上：后台屏有自己的焦点，不影响你在主屏打字；不同对话的任务同时进行也需要它 |
> | Linux 沙箱 | 仅 arm64 设备；其他设备照常安装，沙箱显示「此设备不支持」 |
> | 模型 | 一个支持工具调用的大模型 API Key |
> 
> 
> ### 1. 下载安装
> 
> 从 [Releases](https://github.com/wangzan101/Mika/releases/latest) 下载最新的 APK 安装。
> 
> 
> ### 2. 无障碍（可以先跳过）
> 
> Mika 靠无障碍读界面、做点按。不用手动去开：下一步配对成功后，Mika 会自己把它打开。从 GitHub 下载安装的 App，手动打开无障碍时常被系统拦下（提示「受限制的设置」），让 Mika 自己开能省掉这个麻烦。向导里到这一步时选「跳过」即可。
> 
> 
> ### 3. 配对无线调试（只需一次）
> 
> 打开设置里的「设置手机操作」向导，照着清单做：打开开发者选项、USB 调试、无线调试，然后用 6 位配对码配对。
> 
> 第一次设置、卡在某一步，或者不知道配对码填在哪里：看[手机操作设置指南](docs/setup-guide.md)，每一步都写了在哪里点、怎么算成功、常见问题怎么办。
> 
> 为什么要这一步：Mika 有一个内置的手机助手，要在后台屏上启动和操作 App，需要借用安卓自带的无线调试来启动它。全程在手机上完成，不需要电脑和数据线。配对过后，如果无线调试被系统关掉了（换 Wi-Fi、重启手机后安卓会关掉它），Mika 在你允许的前提下会自己把它重新打开。
> 
> 手边有电脑和数据线的话，也可以不配对：先打开一次 Mika，插着线在电脑上运行 `adb shell sh /sdcard/Android/data/com.wangzan101.mika/files/usb-start.sh` 启动手机助手；但每次重启手机后都要再运行一次。这些也可以交给电脑上的 AI 助手，见[用电脑上的 AI 助手安装](docs/install-with-agent.md)。
> 
> 只用上网、文件和聊天的话，这一步可以先跳过。
> 
> 
> ### 4. 添加模型
> 
> 打开设置里的「模型」（第一次打开 App 时也会引导你）。
> 
> 内置 DeepSeek、通义千问、Kimi、智谱、硅基流动、火山方舟、MiniMax、阶跃星辰、腾讯混元、百度千帆、OpenRouter、OpenCode Go、Anthropic、Gemini、OpenAI、xAI、Mistral、Groq、Ollama、LM Studio 等服务商预设；其他服务商选「自定义」，OpenAI 兼容、Anthropic、Gemini、OpenAI Responses 接口都能接。
> 
> 也可以不填 Key，直接用 ChatGPT 登录（Plus 或 Pro，用你的套餐额度）：在添加服务商那里点「使用 ChatGPT 继续」，在浏览器里登录后回到 Mika。
> 
> 1. 添加服务商：选一个预设，或选「自定义」填接口地址；填 API Key。Ollama、LM Studio 这类自己机器上跑的服务，地址预填了默认端口，改成那台机器的地址即可，Key 可不填。
> 2. 点「测试并保存」，连上第一家时会自动选一个主模型。
> 3. 主模型要支持工具调用。可选：看图模型（看懂界面、看图找按钮）、轻量模型（便宜快的即可，处理判断结局、提取记忆等小事）。
> 
> 用 ChatGPT 登录或 Responses 接口的模型，可在各用途卡片下调整「思考强度」。默认用服务商默认值；选「用主模型」时也跟随它的强度，明确选同一个模型则可分别设置。档位优先采用服务商报告的列表；没报告时提供手动选项，实际支持情况以服务端为准。更高强度通常更慢、消耗更多 token。
> 
> 
> ### 5. 试一试
> 
> 空对话里有几条示例，点一下就能改了再发。也可以这样说：
> 
> - 「帮我总结一下微信群今天都聊了些啥」
> - 「打开小红书，帮我总结一下某个博主最近发的内容」
> - 「帮我订明天早上 9:40、9:50、10:00 的闹钟」
> - 「每天早上 8 点看看天气，下雨才告诉我」
> 
> 
> ## 询问 / 自主模式
> 
> 全局一个开关：设置里的「开发者选项」→「自主模式」，关着是询问，打开是自主。
> 
> | 模式 | 行为 |
> |---|---|
> | **询问**（默认） | 只有花钱的那一步先问你：下单、提交订单，或者页面上显示着应付金额时的确认、提交。卡片上写明在哪、买什么、多少钱，只能同意这一次或不同意。付款本身由你亲手完成。发消息、发帖、提交表单、删除、改设置这些都不问，直接做完。 |
> | **自主** | 连付款也不先问你，直接做完。成批做事时两次之间的间隔照样保留。 |
> 
> - 换了开关管之后的所有任务；正在做的任务从询问换成自主，下一步起付款也不再问。
> - 登录、验证码、付款密码这类要你亲手处理的事，两种模式都会请你接管；信息不够、或者只有你能选（比如两个同名联系人选哪个）时，也会问你。
> - 定时任务等你不在场的任务，在询问模式下遇到要花钱的一步不会等人，会直接不做，并照实告诉你哪一步没做成；别的照常做完。
> 
> 
> ## 数据与隐私
> 
> - **没有 Mika 的服务器。** 你的话、屏幕内容、截图只发给你自己配置的模型服务商。
> - API Key、记忆和用户画像用安卓密钥库加密，保存在手机上。对话、运行记录、Token 用量都只存在本机。
> - 检查更新只访问 GitHub。
> - 内置浏览器访问的是你让它去的网站；沙箱默认断网。
> 
> 
> ## 免责声明
> 
> - 用自动化方式操作第三方 App 和网站，可能违反它们的用户协议，有被限制功能、封号的风险。请自行判断、自担风险。
> - 你同意的动作（以及自主模式下 Mika 替你做的动作）由你负责。重要的事请用询问模式，并检查结果。
> - 这是 Beta 软件，按「原样」提供，不做任何担保（详见 [LICENSE](LICENSE)）。
> 
> 
> ## 常见问题
> 
> **无线调试自己关掉了？**
> 安卓原版在 Wi-Fi 断开、手机重启后会关掉无线调试。设置里的「恢复与修复」中「自动打开无线调试」默认开着：需要时 Mika 会自己打开它再连接（要你允许 Mika 修改系统设置）。第一次在某个 Wi-Fi 上，

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/wangzan101/Mika)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "wangzan101--Mika"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Kotlin" AND file.name != "wangzan101--Mika" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "wangzan101--Mika"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/wangzan101--Mika");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wangzan101--Mika" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wangzan101" AND file.name != "wangzan101--Mika"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wangzan101--Mika");
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
> const me = dv.page("Repos/wangzan101--Mika");
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
> const me = dv.page("Repos/wangzan101--Mika");
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
> const me = dv.page("Repos/wangzan101--Mika");
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
> const me = dv.page("Repos/wangzan101--Mika");
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

- [[2026-10-31|2026-10-31]] — 首次收錄，1.8k stars
