---
repo: pengchujin/aerial-tv
url: https://github.com/pengchujin/aerial-tv
owner: pengchujin
owner_type: User
language: Kotlin
license: MIT
description: "给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for Xiaomi, TCL and other China-market TVs."
homepage: "https://aerial.qust.me"
stars: 2433
stars_per_day: 2433
forks: 177
open_issues: 71
created: 2026-10-20
pushed_at: 2026-10-22
first_seen: 2026-10-22
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.26"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-22
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 53
repo_size_kb: 4043
readme_length: 8300
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-22"
star_history: "2026-10-22:2433"
tags:
  - github
  - "category/other"
  - "lang/kotlin"
aliases:
  - "aerial-tv"
  - "pengchujin/aerial-tv"
---

# aerial-tv

**2.4k** stars · **2.4k** stars/天 · 建立 1 天前 · Kotlin · MIT

```dataviewjs
const me = dv.page("Repos/pengchujin--aerial-tv");
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

`v1.26`

> [!summary] 一句話摘要
> 给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for Xiaomi, TCL and other China-market TVs.

## 專案簡介

给国产电视的一块干净桌面：参照 tvOS 设计的开源 Android TV 桌面，没有广告，开机自动接管。A tvOS-style launcher for Xiaomi, TCL and other China-market TVs.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
| Forks | 177 |
| Open Issues | 71 |
| Issue 解決率 | 53% (79 closed) |
| 最後推送 | 2026-10-22 |
| 建立日期 | 2026-10-20 |
| 官方網站 | [Link](https://aerial.qust.me) |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pengchujin/aerial-tv) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Kotlin" : 80
>     "HTML" : 10
>     "Shell" : 4
>     "CSS" : 3
>     "Python" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pengchujin](https://github.com/pengchujin) | 84 |
> | [@kslr](https://github.com/kslr) | 2 |
> | [@sherlock2221b](https://github.com/sherlock2221b) | 2 |
> | [@SonettoGu14](https://github.com/SonettoGu14) | 1 |
> | [@Wayne-0301](https://github.com/Wayne-0301) | 1 |

**最新版本**：v1.26 — Aerial 1.26 (2026-10-22)

> [!info]- Release Notes
> **修复**
> - **有新版本却看不到提示**：以前电视每天只检查一次新版本，今天连发了几个版本，早上检查过的电视要到第二天才会提示。现在改成每 3 小时检查一次，电视联网时也会检查（只读官网上一个几字节的版本号，不会在后台下载或安装）
> 
> 1.25 的修复（酷开、乐视原桌面识别，开机没网时每日精选和天气的重试等）见 [v1.25](https://github.com/pengchujin/aerial-tv/releases/tag/v1.25)。
> 
> 在小米 MiTV-MFTR0（standard）和 TCL MT5879（guard）上装了本版，首页、控制中心、屏保回归通过；在小米上确认过旧版本会在控制中心提示「有新版本」。
> 
> **升级**
> ```bash
> curl -fsSL https://aerial.qust.me/install.sh | KEEP_ADB=1 TV=<电视IP> bash
> ```
> TCL 升级时，电视右上角会弹出多屏互动的提示，先按「右」再按确定选「同意」。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-22 ~ 2026-10-22）
> **活躍天數** 1 天 · **最新 commit** 1.26: versionCode 28; handoff

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#156](https://github.com/pengchujin/aerial-tv/issues/156) | 更新的1.26,桌面显示问题反馈 | 2 | 5 |
> | [#104](https://github.com/pengchujin/aerial-tv/issues/104) | 只显示一排之后，左上角日期没有了，希望加入日期 `enhancement` | 1 | 1 |
> | [#159](https://github.com/pengchujin/aerial-tv/issues/159) | 可以增加儿童模式吗？ | 0 | 0 |
> | [#158](https://github.com/pengchujin/aerial-tv/issues/158) | 海信4.4.3内核安装不上 | 0 | 0 |
> | [#157](https://github.com/pengchujin/aerial-tv/issues/157) | 最近的几个版本桌面壁纸偏暗 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Aerial
> 
> **给国产电视的一块干净桌面。**
> 
> 参照 tvOS 设计的 Android TV 桌面：没有广告，没有推荐流，只有你的 App、你的壁纸和 Apple TV 航拍屏保。
> 为小米、TCL 等国产电视而做，开机自动接管，待机也不会被清理。
> 
> **中文** · [English](README.en.md)
> 
> | 电视自带的桌面 | 换上 Aerial 之后 |
> |:---:|:---:|
> |  |  |
> 
> ## 功能
> 
> ### 首页
> 
>   
>   
> 
> - **玻璃底板**：照 tvOS 26 的样子，常用的一排 App 放在屏幕下方的 Liquid Glass 底板上，把屏幕留给壁纸。往下进入网格时底板化开，整屏变成磨砂的壁纸。想要大时钟，可以在「控制中心 → 个性化 → 主屏幕」里选「双排」。
> - **应用网格**：每行 5 个，聚焦时平稳地浮起。和 Apple TV 一样，第一排不显示名字，网格里只显示选中 App 的名字。默认加一圈带光泽的白色描边，离得远也看得清；在「控制中心 → 个性化 → 焦点样式」可以改回 tvOS 的原样。
> - **图标**：有电视横幅就用横幅；方形图标用自己的底色铺满磁贴；自适应图标拆成两层做视差。设置、天气、相册这类系统 App 用统一风格的图标。
> - **按键声音**：移动、确认、长按、返回、调音量时有轻微的声音，像 Apple TV 一样；在个性化里可以关掉。
> - **全部 App**：小米「应用中心」「高清播放器」「米家」这类没有标准入口的系统 App 也会显示。
> - **信号源磁贴**：把 HDMI、AV、电视天线固定到首页，按一下直接切换（控制中心 → 信号源 → 显示在主屏幕）。
> - **返回键**：和 tvOS 一样，在网格里按返回回到第一行，在第一行按返回开始屏保。
> 
> ### 长按菜单
> 
> 长按 OK 键：**移动**（其他磁贴自动让位）、**从主屏幕隐藏**、**应用信息**、**卸载**。
> 
> ### 控制中心
> 
> 在第一行按上键到右上角，再按确定打开（焦点在右上角时，也可以按菜单键 ≡）。包括信号源（显示 CEC 设备）、网络、设置，音量和亮度滑块，以及个性化（壁纸、屏保、主屏幕布局、焦点样式、按键声音、隐藏的 App、天气）。网络和设置会打开电视自己的面板。在某个 App 上按菜单键，会打开这个 App 的菜单（移动、隐藏等），和长按确定键一样。
> 
> ### 屏保
> 
>   
>   
> 
> - **航拍**：114 段 Apple TV 航拍影片，从 Apple 的服务器直接播放，镜头移动时显示地名。左右键切换上一段 / 下一段。
> - **照片**：每日精选和你的照片缓慢推移。
> - **时钟**：每分钟换一个位置，防止烧屏。
> 
> 在使用 Android 标准屏保的电视（比如 TCL）上，Aerial 就是系统屏保。小米用自家的屏保，Aerial 会在桌面空闲时抢先启动，挡在小米的广告屏保前面。
> 
> ### 壁纸与手机设置
> 
>   
>   
> 
> - **壁纸**：必应每日精选（国内直连）、14 张 Mac 风格的内置壁纸（山丘、沙丘、海、波浪、光晕），或者你自己的照片。
> - **用手机设置**：扫描壁纸面板上的二维码，在手机上传照片、选壁纸、换屏保。页面只在面板打开时开放，地址带随机令牌。
> 
> ## 安装
> 
> 不用 root，不动任何系统应用，随时能还原。电脑和电视连同一个网络，两步装好。
> 
> ### 1. 打开电视的 ADB 调试
> 
> | 电视 | 怎么打开 |
> |---|---|
> |  **小米 / Redmi** | 设置 → 关于 → 连续按 **产品型号**，进入开发者模式；再到 设置 → 账号与安全，打开 **ADB 调试** 和 **安装未知来源的应用** |
> |  **TCL / 雷鸟** | 设置 → 关于 → **本机信息**，快速按遥控器 **上下左右**，在底部出现的「更多」里打开 **ADB** |
> |  **海尔 / 模卡** | 按**电视机身上**的信号源键，再用遥控器按 **左左上右**，进入「海尔工厂菜单」，把 **ADB 调试开关** 设为开。只改这一项，别动其他选项（用户反馈） |
> |  **OPPO** | 设置 → 系统 → 关于本机 → **设备型号**，按 **上上右右** 再按确认（用户反馈） |
> |  **其他 Android TV** | 设置 → 设备偏好设置 → 关于 → 连按 **内部版本号**（Build，不是「Android 版本」）7 次，再在开发者选项里打开 **USB 调试** |
> 
> 电视的 IP 在「设置 → 网络」里。电脑第一次连接时，电视会问是否允许调试，选 **始终允许**。
> 
> ### 2. 安装（三选一）
> 
> **交给 Agent（推荐）**：把下面这段发给能在电脑上运行命令的 Agent，比如：
> 
>  WorkBuddy &nbsp;  豆包电脑版 &nbsp;  千问电脑版 &nbsp;  Trae &nbsp;  Claude Code &nbsp;  Codex
> 
> ```text
> 请帮我把开源电视桌面 Aerial 装到我的电视上，并设为开机进入的桌面。
> 电视 IP：
> 保持 ADB 常开：要
> 
> 安装说明在这里：https://aerial.qust.me/agent.md
> （打不开时用 https://raw.githubusercontent.com/pengchujin/aerial-tv/main/site/agent.md ）
> 
> 请先完整读完安装说明再动手，然后在我的电脑上亲自运行命令，不要只把步骤告诉我。需要我在电视上操作时提醒我。
> 最后按说明里的「验收」，把那几条命令的原始输出贴给我。
> ```
> 
> 手机 App 和网页版聊天只会把步骤告诉你，装不了。Agent 说装好了，看它贴出的最后一条输出里有没有 `app.orchard.tv`，没有就是没装上。
> 
> **一行命令（macOS / Linux）**：
> 
> ```bash
> curl -fsSL https://aerial.qust.me/install.sh | KEEP_ADB=1 TV=192.168.1.20 bash
> ```
> 
> **手动**：下载 [aerial-standard.apk](https://aerial.qust.me/download/aerial-standard.apk)（[GitHub](https://github.com/pengchujin/aerial-tv/releases/latest) 上也有），然后：
> 
> ```bash
> adb connect 192.168.1.20:5555
> adb install -r aerial-standard.apk
> adb shell pm grant app.orchard.tv android.permission.WRITE_SECURE_SETTINGS
> adb shell cmd notification allow_listener app.orchard.tv/app.orchard.tv.guard.RevivalListener
> adb shell appops set app.orchard.tv SYSTEM_ALERT_WINDOW allow
> adb shell am start -n app.orchard.tv/.MainActivity
> ```
> 
> Windows 用 Agent 安装，或照[安装说明](site/agent.md)里的 Windows 步骤逐条运行。
> 
> ### 还原
> 
> ```bash
> curl -fsSL https://aerial.qust.me/install.sh | TV=192.168.1.20 bash -s restore
> ```
> 
> 用 Agent 装的，就对它说：
> 
> ```text
> 请按 https://aerial.qust.me/agent.md 里「还原」部分的步骤，把我电视（IP：）的桌面还原成原来的，Aerial 先不卸载。请在我的电脑上亲自运行命令，最后把 adb shell "dumpsys window | grep mCurrentFocus" 的原始输出贴给我。
> ```
> 
> ### 遇到问题
> 
> - **TCL 弹出「多屏互动：正在发起应用推送」**：TCL 不允许 ADB 直接安装，脚本改走多屏互动。按遥控器「右」再按确认，选「同意」。
> - **提示固件不允许安装桌面类 App**：一行命令最后加 `-s guard`，手动安装改用 [aerial-guard.apk](https://aerial.qust.me/download/aerial-guard.apk)。
> - **`KEEP_ADB=1` 是什么**：小米待机唤醒后会关掉 ADB，加上它 Aerial 会立刻重新打开。不需要就去掉。
> - **会员、App 和原来的桌面还在吗**：都在。原来的桌面留在 App 列表里。开机广告由固件播放，去不掉。
> - **怎么升级**：再运行一次安装命令，或让 Agent 再装一次。
> - **只有手机**：有用户用甲壳虫 ADB 助手装成功过，我们没测试，命令同安装说明里的 Windows 步骤。
> - **不支持**：LG webOS、三星 Tizen、华为智慧屏（鸿蒙）、Android 4.4 及更老的系统。
> 
> ## 它怎么接管桌面，又怎么不被杀掉
> 
> 国产电视大多只认自家桌面，待机时还会清理第三方 App。Aerial 先温和、后强硬：
> 
> 1. **正常申请**：申请 HOME 角色、设为默认桌面。原生 Android TV 和 Google TV 到这一步就够了。
> 2. **桌面守护**：固件坚持用自家桌面时（小米、TCL 都是），由一个无障碍服务接管：官方桌面一到前台，就把 Aerial 拉回来。它只看哪个窗口到了前台，不读屏幕内容。
> 3. **被杀后复活**：小米待机会强制停止所有第三方 App。Aerial 注册了一个通知监听（不读任何通知），系统会在约 0.5 秒内重新绑定它，Aerial 借此复活，并用 `WRITE_SECURE_SETTINGS` 重新打开守护。
> 4. **开机自启**：开机时系统绑定通知监听，Aerial 随之启动。TCL 的「自启动管理」默认拦截第三方 App，安装脚本会用 `appops` 放行。
> 5. **ADB 常开**（可选）：小米唤醒后会关掉 ADB 调试，开了 `KEEP_ADB` 后 Aerial 会马上打开它，方便以后升级。
> 
> ### ADB 授予的权限
> 
> | 权限 | 用途 |
> |---|---|
> | `WRITE_SECURE_SETTINGS` | 重新打开被系统关掉的守护；保持 Aerial 为系统屏保；`KEEP_ADB`；写入小米的背光值 |
> | 通知监听 | 被强制停止或开机后由系统拉起，不读取任何通知 |
> | 悬浮窗（`SYSTEM_ALERT_WINDOW`） | 开机后从后台打开 Aerial |
> | 修改系统设置 | 用标准接口调节亮度 |
> | 定位 | 只用来读取 Wi-Fi 名称 |
> | TCL `APP_AUTO_START` / `APP_ASSOC_START` | 允许开机自启（只有 TCL 有） |
> 
> ## 已验证的电视
> 
> | 机型 | 系统 | 状态 | 笔记 |
> |---|---|---|---|
> | 小米 MiTV-MFTR0 | Android 14 / HyperOS TV | 日常使用中 | [笔记](docs/devices/xiaomi-mitv-mftr0.md) |
> | 小米 MiTV-MFFU0 | Android 14 / HyperOS TV | 安装、开机自启已验证 | [笔记](docs/devices/xiaomi-mitv-mffu0.md) |
> | Redmi X65 2026（MiTV-MFTR0） | Android 14 / HyperOS TV | 用户验证：安装、重启后自动进入（[#3](https://github.com/pengchujin/aerial-tv/issues/3)） | 同 MiTV-MFTR0 |
> | TCL MT5879 国行 | Android 11 | 日常使用中 | [笔记](docs/devices/tcl-mt5879-cn.md) |
> | 索尼 XRJ-77A80J 国行（BRAVIA VH2） | Android 10 | 用户验证：安装、开机自启、待机唤醒、屏保（[#16](https://github.com/pengchujin/aerial-tv/issues/16)） | — |
> | 索尼 BRAVIA VH1 国行 | Android 12 | 用户验证；亮度改为打开索尼的图像设置（[#2](https://github.com/pengchujin/aerial-tv/issues/2)） | — |
> | 创维酷开 K3 Pro 90P3D Max（8R145） | Android 11 | 用户验证：开机自启（[#43](https://github.com/pengchujin/aerial-tv/issues/43)）。1.15 起不用再避免设为默认桌面 | — |
> | 康佳 2861 | Android 5.1.1 | 用户验证：安装成功（[#37](https://github.com/pengchujin/aerial-tv/issues/37)） | — |
> | PPTV K55U27 | Android 6 | 用户验证：能用（[#39](https://github.com/pengchujin/aerial-tv/issues/39)） | — |
> | 腾讯极光盒子 7S | — | 用户验证：安装成功；有两个「设置」，可以长按隐藏一个；待机后回到原桌面，待查（[#51](https://github.com/pengchujin/aerial-tv/issues/51)） | — |
> | 小米 MiTV-ASTP0 | Android 9 | 用户验证：安装、开机自启、待机唤醒；按 HOME 会先闪一下原桌面（[#48](https://github.com/pengchujin/aerial-tv/issues/48)） | — |
> | 小米 MiTV-NSOP0 | Android 9 | 用户验证：一键安装、开机自启（[#65](https://github.com/pengchujin/aerial-tv/issues/65)） | — |
> | 小米 MiTV-MFTP0（alita） | Android 9 | 安装、覆盖升级、开机自启已验证；升级后守护会掉，见 [#72](https://github.com/pengchujin/aerial-tv/issues/72) | [笔记](docs/devices/xiaomi-mitv-mftp0.md) |
> | 极米投影（m7642） | Android 9 | 用户验证：开机自启；看完视频按 HOME 偶尔卡住，待查（[#44](https://github.com/pengchujin/aerial-tv/issues/44)） | — |
> | 雷鸟 55S595C Ultra（MT9655） | Android 11 | 能装，但 ADB 只有无线调试且拿不到授权，接管不了 HOME（[#52](https://github.com/pengchujin/aerial-tv/issues/52)） | [笔记](docs/devices/tcl-mt9655-cn.md) |
> | OPPO K9 65 寸（ColorOS TV 2.4） | Android 9 / 32 位 | 用户验证：要先改包名、补桌面标记才能装，装好后开机自启、待机唤醒、屏保、天气都正常 | [笔记](docs/devices/oppo-coloros-tv.md) |
> 
> ### 用户反馈的机型（没有日志，未验证）
> 
> 来自微博评论（[#33](https://github.com/pengchujin/aerial-tv/issues/33)），只说装好了，没有型号细节或日志，仅供参考：小米电视 S Pro Mini LED 2026、小米电视 4A（Android 6）、小米盒子 5、小米显示器 / G Pro、红米电视、红米投影 5 Pro、索尼 A8G / X9000H / X90J、TCL 75Q10G Pro、雷鸟鹏 6SE、OPPO S1、夏普老款、当贝投影 F5、亚马逊 Fire TV。
> 
> 能装但开机进不了 Aerial 的：Vidda、海信（要删掉原桌面才行，Aerial 不会这么做）、OPPO K9、雷鸟鹤 6 2025 Ultra。
> 
> 欢迎[提交 Issue](https://github.com/pengchujin/aerial-tv/issues) 或 PR 补充你的机型，附上 `getprop ro.product.model` 和安装输出最好。
> 
> ## 已知限制
> 
> - **需要联网**：航拍按 1080p H.264 实时播放，码率约 15–20 Mbps；每日精选也要联网。
> - **HDMI 设备名**：真实名称（如「Apple TV」）需要系统权限才读得到，所以只显示「已连接」。
> - **TCL 音量条**：调音量时会同时弹出 TCL 自己的音量条，这是让音量真正生效的必要条件。
> - **小米屏保**：停在别的 App 里空闲时，仍然会出现小米自己的屏保。
> - **网页安装**：浏览器连不上电视的网络 ADB，电视的 USB 口也不能被电脑当成设备连接，所以没法「打开网页就装」。
> 
> ## 开发
> 
> 需要 JDK 17、Android SDK 36。
> 
> ```bash
> ./gradlew assembleStandardRelease assembleGuardRelease
> BUILD=1 KEEP_ADB=1 TV= tools/install.sh      # 用本地编译的 APK 安装
> ```
> 
> - [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)：代码结构与数据流
> - [docs/HANDOFF.md](docs/HANDOFF.md)：现状、调试技巧、必须遵守的规则
> - [docs/devices/](docs/devices/)：各机型的实测笔记，包括 TCL 多屏互动的推送协议
> - [AGENTS.md](AGENTS.md)：给 AI 代理的开发说明
> - [site/](site/)：官网（纯静态，中文 `/`、英文 `/en/`）
> 
> 设计上的取舍：按 960×540dp 的画布等比缩放，不同密度的电视看起来一样；电视 GPU 很弱，每帧最多一次全屏绘制，空闲时不跑动画；焦点动画用弹簧，可以中途打断；字体用 Inte

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/pengchujin/aerial-tv) · [官方網站](https://aerial.qust.me)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "pengchujin--aerial-tv"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Kotlin" AND file.name != "pengchujin--aerial-tv" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "pengchujin--aerial-tv"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--aerial-tv");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pengchujin--aerial-tv" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pengchujin" AND file.name != "pengchujin--aerial-tv"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
> const me = dv.page("Repos/pengchujin--aerial-tv");
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
> const me = dv.page("Repos/pengchujin--aerial-tv");
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

> **2026-10-22** — 首次收錄
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

- [[2026-10-22|2026-10-22]] — 首次收錄，2.4k stars
