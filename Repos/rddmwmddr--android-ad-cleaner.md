---
repo: rddmwmddr/android-ad-cleaner
url: https://github.com/rddmwmddr/android-ad-cleaner
owner: rddmwmddr
owner_type: User
language: Python
license: MIT
description: "关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。"
homepage: ""
stars: 4478
stars_per_day: 896
forks: 404
open_issues: 118
created: 2026-10-24
pushed_at: 2026-10-29
first_seen: 2026-10-27
week: "2026-W44"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.3"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-27
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-01"
contributor_count: 1
engagement: "low"
issue_close_rate: 8
repo_size_kb: 4310
readme_length: 6194
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-27"
star_history: "2026-10-27:2279,2026-10-28:3735,2026-10-29:4478"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/adb"
  - "topic/ai_agent"
  - "topic/android"
  - "topic/coloros"
  - "topic/debloat"
aliases:
  - "android-ad-cleaner"
  - "rddmwmddr/android-ad-cleaner"
---

# android-ad-cleaner

**2.3k** stars · **760** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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

`個人專案` `v0.2.3`

`adb` `ai-agent` `android` `coloros` `debloat` `hyperos` `magicos` `originos`

> [!summary] 一句話摘要
> 关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。

## 專案簡介

关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。不 root，可还原，支持 AI 智能体一键执行。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
| Forks | 190 |
| Open Issues | 140 |
| Issue 解決率 | 8% (13 closed) |
| 最後推送 | 2026-10-25 |
| 建立日期 | 2026-10-24 |
| Repo 大小 | 4.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/rddmwmddr/android-ad-cleaner) |
| Topics | `adb` `ai-agent` `android` `coloros` `debloat` `hyperos` `magicos` `originos` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `uiautomator2`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 79
>     "HTML" : 19
>     "Shell" : 1
>     "Inno Setup" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rddmwmddr](https://github.com/rddmwmddr) | 45 |

**最新版本**：v0.2.3 — v0.2.3 · 处理读屏服务占用与会话释放 (2026-10-25)

> [!info]- Release Notes
> 0.2.2 完整日志已定位到 `AccessibilityServiceAlreadyRegisteredError`：手机 UiAutomation 已被注册，新的读屏会话被拒绝。具体占用者仍未知。
> 
> ### 修复
> 
> - 启动失败、操作异常、正常退出都清理本次读屏连接并等待退出；同一电脑同一设备的读屏任务互斥。
> - 注册冲突只重试一次，持续占用时明确退出；不强停其他工具、不关闭手机无障碍服务。
> - 后续读屏步骤标为「跳过」，保留首次错误并继续收尾。收尾不再误报“去广告已经做完”，排查期间可保留 USB 调试。
> - 固定 uiautomator2 3.7.1；保留此前的 adb 只读扫描、完整诊断与所有修复。
> 
> ### 已有占用怎么恢复
> 
> 退出旧版及其他手机自动化工具，安装 0.2.3 后点「检查读屏连接」。仍提示已注册时，请手动重启手机，解锁后只打开一个客户端，再检查并重试未完成步骤。不需要清除数据或停用无障碍。
> 
> ### 验证与边界
> 
> 91 项回归通过；Android 15 模拟器连续连接、并发拒绝、外部占用复现及释放后重连通过，外部服务没有被误停，未点击手机广告开关。
> 
> 安装包验证：Windows [Actions #40198943037](https://github.com/rddmwmddr/android-ad-cleaner/actions/runs/40198943037)（代码 `cb08d5c`）通过 91 项回归、打包后两层 CLI 调用、原生 GUI / 教程图片 / JS API 和安装包生成。Mac Apple 芯片及 Intel / Rosetta 最终包通过原生 GUI、两层 CLI、签名、公证；两种打包程序都通过模拟器实际读屏检查，Apple 芯片连续三次通过。Intel 真机和反馈者 Windows 电脑仍待测。
> 
> **未在反馈者的 Windows 11 / Xiaomi 18 Pro Max / OS4.0.27 上完成真机复测。已有占用可能仍需先手动重启手机，不能保证只换新版即可恢复。**
> 
> 旧版不会自动升级，已有备份目录无需删除。Windows 安装程序暂未签名，新版网盘未上传；原生鸿蒙仍不支持。附 `SHA256SUMS.txt`。
> 
> [完整更新记录](https://github.com/rddmwmddr/android-ad-cleaner/blob/main/CHANGELOG.md) · [恢复步骤](https://github.com/rddmwmddr/android-ad-cleaner/blob/main/docs/08-%E6%A1%8C%E9%9D%A2%E5%AE%A2%E6%88%B7%E7%AB%AF.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-25 ~ 2026-10-25）
> **活躍天數** 1 天 · **最新 commit** docs: record accessibility feedback Windows verification

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#154](https://github.com/rddmwmddr/android-ad-cleaner/issues/154) | [问题] 关闭营销活动失败 `bug` | 0 | 0 |
> | [#153](https://github.com/rddmwmddr/android-ad-cleaner/issues/153) | [新机型] 小米15PRO的OS3版本部分没有关闭 `新机型` | 0 | 0 |
> | [#151](https://github.com/rddmwmddr/android-ad-cleaner/issues/151) | [问题] 关闭营销通知失败 `bug` | 0 | 0 |
> | [#150](https://github.com/rddmwmddr/android-ad-cleaner/issues/150) | [新机型] 这份机型脚本不是按这台的型号和系统版本录得 `新机型` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 手机去广告
> 
> 关掉国产安卓手机系统里的广告、热搜、资讯推荐和营销推送。
> 
> 介绍页：**https://rddmwmddr.github.io/android-ad-cleaner/**
> 
> ## 下载桌面客户端
> 
> 插上手机，点几下按钮。不需要 Python，也不需要 AI 工具。
> 
> > **v0.2.3 · 2026-10-25**：处理读屏服务 `already registered` 冲突：退出前释放本次服务，同机任务互斥，短暂冲突只重试一次；持续占用时给出恢复步骤并跳过后续读屏任务。收尾不再误报全部完成。保留通知扫描、完整诊断及此前修复。旧版不会自动更新，请重新下载，已有备份会保留。详见 [更新记录](CHANGELOG.md)。
> 
> > **最新源码补充（尚未进入 0.2.3 安装包）**：新增一加 Ace 2 Pro / ColorOS 14 的实测与有限适配，修复独立通知设置页识别、混合付款通知排除和应用启动后退出到上一应用的保护。范围与未完成项见 [一加旧系统实测](docs/10-一加旧系统实测.md)。
> 
> > **2026-10-26 源码更新（未发布安装包）**：读屏失败时提示排查 GKD、自动记账等自动化 / 无障碍功能；找机位功能通知加入保护，旧清单也不能再次误关。排查和误关恢复见[专项说明](docs/11-读屏冲突与功能通知保护.md)。
> 
> 此前版本已处理 Windows 本地页面超时、荣耀截图越界、通知渠道误操作风险、vivo 快应用与备份问题。各 Issue 的处理范围和待验证项见 [社区问题处理记录](docs/09-社区问题处理.md)。仅支持通过 adb 连接的安卓设备，暂不支持使用 HDC 的原生鸿蒙。
> 
> | 电脑 | 下载 | 说明 |
> |---|---|---|
> | Mac · Apple 芯片（M1 及以后） | [AndroidAdCleaner-0.2.3-mac-arm64.dmg](https://github.com/rddmwmddr/android-ad-cleaner/releases/download/v0.2.3/AndroidAdCleaner-0.2.3-mac-arm64.dmg) | 已签名、通过苹果公证，双击就能打开 |
> | Mac · Intel 芯片 | [AndroidAdCleaner-0.2.3-mac-intel.dmg](https://github.com/rddmwmddr/android-ad-cleaner/releases/download/v0.2.3/AndroidAdCleaner-0.2.3-mac-intel.dmg) | 同上 |
> | Windows 10 / 11 · 安装版 | [AndroidAdCleaner-0.2.3-windows-setup.exe](https://github.com/rddmwmddr/android-ad-cleaner/releases/download/v0.2.3/AndroidAdCleaner-0.2.3-windows-setup.exe) | 弹「Windows 已保护你的电脑」时点「更多信息」→「仍要运行」 |
> | Windows 10 / 11 · 免安装 | [AndroidAdCleaner-0.2.3-windows-portable.zip](https://github.com/rddmwmddr/android-ad-cleaner/releases/download/v0.2.3/AndroidAdCleaner-0.2.3-windows-portable.zip) | 解压后双击 `AndroidAdCleaner.exe` |
> 
> 不知道 Mac 是哪种芯片：左上角苹果图标 → 关于本机，「芯片」写 Apple M 开头的选 Apple 芯片。所有版本：[Releases](https://github.com/rddmwmddr/android-ad-cleaner/releases)。用法：[docs/08-桌面客户端.md](docs/08-桌面客户端.md)。
> 
> | | |
> |---|---|
> | **1 连接手机**：插线即认出手机，内置开启 USB 调试的图文教程 | **2 检测**：型号、系统版本、机型脚本、快应用、广告组件 |
> | **3 选择要关的**：营销通知按渠道勾选，服务类默认不勾 | **4 执行**：进度条和实时日志 |
> | **5 完成**：每一步的结果，最后提醒关闭开发者模式 | **反馈**：自动附诊断信息，一键提交 GitHub Issue |
> 
> ---
> 
> - 不 root，不解锁，不刷机，系统更新不受影响。
> - 只拨系统和 App 自带的开关。挂起广告包这一步要机主点头，一条命令可以还原。
> - 搜索、负一屏卡片、应用商店的安装和更新、天气预警、快递提醒，这些功能保留。
> 
> 改之前：OPPO 软件商店首页。轮播图、必备、必玩、福利标签，全是推广位。
> 
> ---
> 
> ## 处理哪些东西
> 
> | 类别 | 例子 | 怎么处理 |
> |---|---|---|
> | 系统广告 | 个性化广告、广告跟踪（OAID）、智能推荐服务 | 系统设置里的开关 |
> | 热搜和资讯 | 下拉搜索的热榜、负一屏资讯、浏览器信息流 | 各 App 设置里的开关，浏览器切到简洁首页 |
> | 推广位 | 商店的轮播、开屏、悬浮活动、签到福利 | 商店「服务管理」里的开关 |
> | 营销推送 | 各 App 的「内容与营销」「活动优惠」通知 | 按渠道关，同一个 App 的订单、快递、更新通知保留 |
> | 广告组件 | `com.opos.ads`、`com.miui.systemAdSolution` 等 | `pm suspend` 挂起，要机主同意 |
> | 快应用 | 广告里一点就跳进去的「免安装小程序」 | `quickapp` 检测，`quickapp off` 关闭，见 [docs/07-快应用.md](docs/07-快应用.md) |
> 
> ## 不做的事
> 
> - 不卸载、不停用系统应用（`pm uninstall`、`pm disable-user` 都不用）。
> - 不改 system 分区，不装模块。
> - 不替你同意任何 App 的用户协议。遇到协议页，点「取消」或「以后再说」。
> - 不截账号页和手机号页。
> 
> ---
> 
> ## 四种用法
> 
> > 用法一要先在手机上打开开发者模式和 USB 调试，带截图的教程：[docs/00-打开开发者模式.md](docs/00-打开开发者模式.md)。
> 
> | 用法 | 适合谁 | 要准备什么 | 文档 |
> |---|---|---|---|
> | **一：AI 智能体替你跑** | 有电脑，想省事 | 电脑、数据线、一个能执行命令的 AI 工具 | [docs/02-用AI智能体.md](docs/02-用AI智能体.md) |
> | **二：聊天 AI 带你点** | 只有手机 | DeepSeek、豆包、ChatGPT 任意一个 | [docs/03-用聊天AI.md](docs/03-用聊天AI.md) |
> | **三：照清单手动关** | 想自己掌握每一步 | 只要手机 | [docs/清单/](docs/清单/) |
> | **四：桌面客户端** | 不想敲命令 | Mac（Apple / Intel 芯片）或 Windows 10/11、数据线 | [下载](#下载桌面客户端) · [说明](docs/08-桌面客户端.md) |
> 
> 用法一的开场白，复制给 AI：
> 
> ```text
> 请克隆 https://github.com/rddmwmddr/android-ad-cleaner ，读仓库里的 AGENTS.md，
> 然后帮我给连着电脑的这台手机去广告。每一步改之前告诉我要改什么。
> ```
> 
> ---
> 
> ## 实测过的机型
> 
> **机型脚本**：一台机型的自动操作步骤，记着「打开哪个 App、点哪几个字进设置页、关哪几个开关、留哪几个」。电脑照着它在手机上点，几分钟做完。设置页因型号和系统版本而不同，所以每个机型一份。
> 
> | 品牌 | 机型（型号） | 系统 | 机型脚本 | 手动清单 | 营销通知 |
> |---|---|---|---|---|---|
> | 荣耀 | PNM-AN10 | MagicOS 10 | ✅ 实测通过，重跑 4 分钟 | ✅ | ✅ 26 个渠道 |
> | 一加 | Ace 2 Pro（PJA110） | ColorOS 14.0.0.812 / Android 14 | 源码新增：3 项个性化 + 6 项商店推广位关闭并回读 | 部分，见实测记录 | ✅ 23 个，总开关不变；天气提醒差异见实测 |
> | OPPO | Find N6（PLP120） | ColorOS 16.0.9 | ⚠️ 路径实测，整段待验证 | ✅ | ✅ 30 个渠道 |
> | OPPO | Find X10 Pro Max（PMX110） | ColorOS 17 | — | ✅ | ✅ |
> | OPPO | Find X9 Ultra（PMA120） | ColorOS 16.0.10 | ❌ 页面和 N6 不同，待补 | 部分 | ✅ 27 个渠道 |
> | OPPO | Find N3 典藏版（PHN110） | ColorOS 16.0.5 | ❌ 待补 | 部分 | ✅ 27 个渠道 |
> | 小米 | 18 Pro Max（M154FF） | HyperOS 4.0.24 | ✅ 10-25 前轮九段通过，新增兼容改动待复测 | ✅ | ✅ |
> | vivo | X300 Ultra（V2547DA） | OriginOS 6 | ⚠️ 脚本已补，整段待真机验证 | ✅ | ✅ |
> 
> 表格反映当前脚本和验证范围。小米 10、荣耀 Magic7 Pro 等反馈已修复可定位的通用缺陷，但仍需对应真机复测；同品牌参考脚本不等于专用适配，详细记录见 [更新记录](CHANGELOG.md)。
> 
> - 可先运行通用检测；通知渠道能否安全关闭取决于系统页面和权限，部分 vivo 页面会被跳过。广告跟踪入口也随品牌变化。
> - 同一个品牌，系统小版本不同，设置页的名字和层级也会变。机型脚本按型号和系统版本存放，版本对不上时引擎会提示，找不到入口的步骤会跳过，不会乱点。
> - 你的机型不在表里：照 [docs/04-给新机型写脚本.md](docs/04-给新机型写脚本.md) 做一份，欢迎提 PR。
> 
> ---
> 
> ## 一次完整的流程
> 
> 命令写法：
> 
> ```bash
> pip3 install -r requirements.txt
> python3 tool/run.py devices                 # 看序列号、型号、有没有机型脚本
> python3 tool/run.py -s  check        # 只读检查
> python3 tool/run.py -s  backup       # 改动前快照
> python3 tool/run.py -s  recipe       # 跑机型脚本
> python3 tool/run.py -s  chan-scan    # 列营销通知渠道
> python3 tool/run.py -s  chan-off backups/-/channels.tsv
> python3 tool/run.py -s  quickapp     # 检测快应用；quickapp off 关闭
> python3 tool/run.py -s  finish       # 收尾，提醒关闭开发者模式
> python3 tool/run.py -s  dev-off --yes  # 从电脑关闭开发者模式（最后一步，执行后断开）
> ```
> 
> 营销通知按渠道关：天气的「内容与营销」关掉，天气预警保留。
> 
> ---
> 
> ## 仓库结构
> 
> ```text
> AGENTS.md            给 AI 智能体读的操作规范
> CHANGELOG.md         源码更新、验证结果与安装包发布状态
> docs/
>   00-打开开发者模式.md 带截图的分步教程
>   01-准备工作.md      装 adb、连电脑、无线调试
>   02-用AI智能体.md    WorkBuddy、Claude Code、Codex、Trae、Cursor
>   03-用聊天AI.md      DeepSeek、豆包、ChatGPT
>   04-给新机型写脚本.md
>   05-还原.md
>   06-常见问题.md
>   07-快应用.md        什么是快应用、怎么检测和关闭
>   08-桌面客户端.md     Mac / Windows 客户端的用法、数据位置、打包
>   09-社区问题处理.md   Issue / PR 处理范围及待验证项
>   清单/               各品牌的手动清单
> prompts/             复制给聊天 AI 的提示词
> tool/
>   run.py             总入口
>   fast.py            读屏、找入口、拨开关的引擎（uiautomator2）
>   chan_fast.py       营销通知渠道
>   explore.py         新机型探路（实验）
> gui/                 桌面客户端（pywebview 界面 + PyInstaller 打包）
> recipes/-/recipe.py   各机型的机型脚本
> images/              文档配图
> tests/               不连接手机的引擎回归测试
> ```
> 
> ## 反馈
> 
> 遇到问题、想要新功能、希望支持你的手机，到 [Issues](https://github.com/rddmwmddr/android-ad-cleaner/issues/new/choose) 提交，选对应的模板。
> 
> 用桌面客户端的话，点左下角「反馈问题」：会自动附上客户端版本、手机型号、系统版本和最近的日志（序列号已替换，不含应用列表和通知内容），打开 GitHub 页面后点提交即可。提交需要 GitHub 账号。
> 
> ## 还原
> 
> 见 [docs/05-还原.md](docs/05-还原.md)。挂起的包和通知渠道各一条命令；App 内的开关按清单路径手动打开。
> 
> ## 声明
> 
> 本项目只调用 Android 系统和厂商 App 公开提供的设置项。各厂商的界面随系统更新变化，使用前请备份，结果以你的手机为准。使用本项目造成的任何问题由使用者自行承担。
> 
> 许可证：MIT

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/rddmwmddr/android-ad-cleaner)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "rddmwmddr--android-ad-cleaner"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "rddmwmddr--android-ad-cleaner" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "rddmwmddr--android-ad-cleaner"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "rddmwmddr--android-ad-cleaner" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "rddmwmddr" AND file.name != "rddmwmddr--android-ad-cleaner"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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
> const me = dv.page("Repos/rddmwmddr--android-ad-cleaner");
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

> **2026-10-27** — 首次收錄
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

- [[2026-10-29|2026-10-29]] — 再次上榜，4.5k stars
- [[2026-10-28|2026-10-28]] — 再次上榜，3.7k stars
- [[2026-10-27|2026-10-27]] — 首次收錄，2.3k stars
