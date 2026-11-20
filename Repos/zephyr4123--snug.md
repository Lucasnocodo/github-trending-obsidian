---
repo: zephyr4123/snug
url: https://github.com/zephyr4123/snug
owner: zephyr4123
owner_type: User
language: Swift
license: MIT
description: "让远程 Mac 在任意设备上获得原生级体验。专为 UU远程 打造的显示与触控增强：手机、平板、电脑各有专属屏幕，画面铺满、字号随屏，原生触屏手势，App 资源库。Make UU Remote native on any device: a dedicated screen for every phone, tablet and computer, with native touch gestures and an App Library."
homepage: ""
stars: 1119
stars_per_day: 160
forks: 87
open_issues: 13
created: 2026-11-13
pushed_at: 2026-11-20
first_seen: 2026-11-20
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v2.7.4"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-20
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 58
repo_size_kb: 35421
readme_length: 9225
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-20"
star_history: "2026-11-20:1119"
tags:
  - github
  - "category/other"
  - "lang/swift"
  - "topic/android"
  - "topic/gestures"
  - "topic/ipad"
  - "topic/iphone"
  - "topic/macos"
aliases:
  - "snug"
  - "zephyr4123/snug"
---

# snug

**1.1k** stars · **160** stars/天 · 建立 7 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/zephyr4123--snug");
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

`v2.7.4`

`android` `gestures` `ipad` `iphone` `macos` `macos-app` `menubar-app` `multi-monitor` `productivity` `remote-control` `remote-desktop` `swift` `swiftui` `tablet` `uu-remote` `virtual-display` `window-management`

> [!summary] 一句話摘要
> 让远程 Mac 在任意设备上获得原生级体验。专为 UU远程 打造的显示与触控增强：手机、平板、电脑各有专属屏幕，画面铺满、字号随屏，原生触屏手势，App 资源库。Make UU Remote native on any device: a dedicated screen for every phone, tablet and computer, with native touch gestures and an App Library.

## 專案簡介

让远程 Mac 在任意设备上获得原生级体验。专为 UU远程 打造的显示与触控增强：手机、平板、电脑各有专属屏幕，画面铺满、字号随屏，原生触屏手势，App 资源库。Make UU Remote native on any device: a dedicated screen for every phone, tablet and computer, with native touch gestures and an App Library.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zephyr4123--snug");
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
> const me = dv.page("Repos/zephyr4123--snug");
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
| Forks | 87 |
| Open Issues | 13 |
| Issue 解決率 | 58% (18 closed) |
| 最後推送 | 2026-11-20 |
| 建立日期 | 2026-11-13 |
| Repo 大小 | 34.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zephyr4123/snug) |
| Topics | `android` `gestures` `ipad` `iphone` `macos` `macos-app` `menubar-app` `multi-monitor` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 90
>     "Shell" : 3
>     "CSS" : 3
>     "HTML" : 2
>     "Python" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zephyr4123](https://github.com/zephyr4123) | 405 |
> | [@aoyamashou](https://github.com/aoyamashou) | 34 |
> | [@11ze](https://github.com/11ze) | 3 |
> | [@BruceY-rgb](https://github.com/BruceY-rgb) | 2 |
> | [@eltociear](https://github.com/eltociear) | 1 |

**最新版本**：v2.7.4 — Snug 2.7.4 (2026-11-20)

> [!info]- Release Notes
> Snug 2.7.4：镜像显示器不再停在低分辨率
> 
> 修复
> - 内建屏镜像到外接显示器时，远程结束后外接屏回到原来的分辨率，不再停在 800x600
> - 镜像显示器时设主屏，镜像保持不变
> 
> 致谢
> - 社区贡献：YaoS-Code（#43）
> 
> 安装
> - 已安装 2.1.0 及以上版本的，打开 Snug 即会提示更新。更早的版本请退出后下载 Snug-2.7.4.dmg，将 Snug 拖入「应用程序」替换，设置与授权均保留

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-19 ~ 2026-11-20）
> **活躍天數** 2 天 · **最新 commit** 记忆瘦身：删掉仓库里已有的、过时的、重复的，只留当前结论（94K → 59K）

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#44](https://github.com/zephyr4123/snug/issues/44) | 功能建议｜Codex 窗口左缘右滑切换侧边栏 | 0 | 0 |
> | [#42](https://github.com/zephyr4123/snug/issues/42) | iPad 接妙控键盘后，Snug 平板屏在 UU 远程的鼠标和触控模式下都无法操作 | 0 | 1 |
> | [#38](https://github.com/zephyr4123/snug/issues/38) | 在pura x view上，横屏不能换到横屏双栏模式，依旧是竖屏，左右黑色区域 | 0 | 0 |
> | [#33](https://github.com/zephyr4123/snug/issues/33) | UU远程现在虚拟屏需要VIP才能用了 这样的话就没法用了 是吧 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> **简体中文** · [English](README.en.md) · [日本語](README.ja.md)
> 
> 
> # Snug
> 
> **Make UU Remote Native on Any Device**
> 
> 为 UU远程 打造 · 远程 Mac 的显示与触控增强每台设备专属屏幕 · 原生触屏手势 · App 资源库
> 
> [](https://github.com/zephyr4123/snug/releases/latest)    [](LICENSE)
> 
> [下载](#-下载) · [原生体验](#-每台设备原生体验) · [多设备](#-一台-mac所有设备) · [App 资源库](#-app-资源库) · [截图](#-截图) · [对比](#-与其他方案的对比) · [安装](#-安装) · [使用](#-使用方式) · [限制](#-已知限制) · [开发](#-开发)
> 
> ▶ 观看高清演示视频
> 
> > [!IMPORTANT]
> > **致 UU远程 VIP 用户**：UU远程 自 2026 年 12 月 1 日起将多屏、虚拟屏等功能纳入 VIP。Snug 基于虚拟屏架构，若你恰为 UU远程 VIP 用户，欢迎一试。
> >
> > **立场**：Snug 为独立社区项目，与 UU远程 无商业关联。是否开通 VIP，请依自身对 UU远程 的需求决定，不必为 Snug 专门开通。目前专注 UU远程，暂不自行适配其他远控软件；对接部分已抽为可替换的适配层，欢迎提 PR 接入或 fork 自行适配，详见[开发](#-开发)。
> 
> > 承接自 [aoyamashou/UUyc-companion](https://github.com/aoyamashou/UUyc-companion)（UU远程伴侣，作者 AoyamaShou，MIT 许可），完整保留原作者的版权声明与提交历史。2.0 起以手机屏为核心重新设计，2.6 起扩展至平板与电脑。
> 
> 
> ## 📥 下载
> 
> **Snug for macOS** [](https://github.com/zephyr4123/snug/releases/latest)通用安装包，支持 Apple 芯片与 Intel，适用于 macOS 14 及更新版本已签名并经 Apple 公证，拖入「应用程序」即可使用
> 
> | 渠道 | 说明 | 下载 |
> | :--- | :--- | :--- |
> | **国内源** | 腾讯云 CDN 加速，中国大陆推荐 | [Snug.dmg](https://dl.zephyrxiang.com/snug/latest/Snug.dmg) |
> | **GitHub Releases** | 附更新说明、校验文件与历史版本 | [前往下载](https://github.com/zephyr4123/snug/releases/latest) |
> 
> 两个渠道的安装包完全相同。Snug 仅需安装于被控 Mac，控制端只需 UU远程。
> 
> > Windows 被控端：参见 [社区移植](#-社区移植)。
> 
> 
> ## ✨ 每台设备，原生体验
> 
> UU远程 将桌面整体等比缩放至控制端，比例不符即留黑边，文字与控件随之缩小。Snug 为每台控制端新增一块比例匹配的屏幕：手机、平板按移动端尺度铺满，适配触屏操作；电脑与本机分辨率一致，全屏无黑边。
> 
> 
> ### 手机：竖屏 · 横屏
> 
>  同一内容 · 左：UU远程 原版 · 右：Snug
> 
> - **竖屏、横屏**：按机型计算比例，避让 UU远程 工具栏，2 倍 HiDPI；横屏适合代码、终端与宽幅页面
> - **窗口铺满**：所选窗口独占全屏
> - **字号放大**：Ghostty、终端、iTerm2、VS Code、Cursor、Zed 自动放大，按 App 分别记忆
> 
> 横屏：宽幅页面完整呈现
> 
> 
> ### 原生手势
> 
> UU远程 移动端沿用触控板的手势逻辑；Snug 在手机屏与平板屏上按触屏习惯重新映射。
> 
> | 触屏操作 | UU远程 原版 | Snug |
> | :--- | :--- | :--- |
> | 单指滑动 | 鼠标拖拽，易误选文字 | 页面滚动，松手保留惯性 |
> | 长按后拖动 | 鼠标拖拽 | 拖选文字 |
> | 长按松开 | 普通点击 | 右键菜单 |
> 
>  单指滚动 · 长按调出右键菜单
> 
> - 仅作用于手机屏与平板屏，其他屏幕及本机触控板、鼠标不受影响
> 
> 
> ### 平板：铺满 · 原生手势
> 
> 平板远程 Mac 以往多需外接键盘与触控板；Snug 平板屏按机型铺满，触控即用。
> 
> - **横屏、竖屏**：按机型计算比例，全屏铺满
> - **原生手势**：同手机屏，滚动、右键、拖选均由触控完成，无需外接触控板
> - **字号适中**：基准略大于平板原生，适合长时间使用
> - **左右两栏**：横屏时 App 资源库分为 App 与窗口两栏，参见 [App 资源库](#-app-资源库)
> 
>  iPad · 横屏 · 竖屏
> 
> 
> ### 电脑：铺满 · 无黑边
> 
> Snug 电脑屏按控制端分辨率建立，画面与本机一致。
> 
> > 电脑远程去黑边源自 Snug 的前身 [UUyc-companion](https://github.com/aoyamashou/UUyc-companion)（UU远程伴侣，作者 AoyamaShou）。Snug 沿用这一能力，改为新增屏幕：原有屏幕保持不变，主屏默认不变。
> 
>  同一窗口 · 左：UU远程 原版 · 右：Snug 电脑屏
> 
> - **分辨率一致**：内置 Mac 全系默认分辨率与常见电脑分辨率，适用于 Windows 电脑；支持自定义，参见 [自定义屏幕](#自定义屏幕)
> - **像素级对应**：带刘海的 MacBook 避让顶部区域，画面不缩放
> - **保留电脑操作**：不转换手势，不放大字号，鼠标与触控板保持原样
> - **设为主屏**（可选，默认不启用）：每次连接直接进入此屏，菜单栏、程序坞与原主屏窗口随之迁入，工作无缝接续，参见 [设为主屏](#设为主屏)
> - **App 资源库**：从菜单栏打开，将其他屏幕的窗口移至此屏，支持一键还原，参见 [App 资源库](#-app-资源库)
> 
> 
> ## 🧩 一台 Mac，所有设备
> 
> 
> ### 自定义屏幕
> 
> 每块屏幕的设备、型号、方向与名字均可自定义，最多 4 块，分别开关。
> 
> | 项目 | 说明 |
> | :--- | :--- |
> | 设备 | 手机、平板或电脑；比例与屏上功能随类别而定，见下表 |
> | 型号 | 机型库选择，或填写分辨率、比例（如 1080×2400、9×20）；更换即时生效，无需重连 |
> | 方向 | 竖屏或横屏，添加时选定 |
> | 名字 | 显示于 UU远程 屏幕列表，便于识别 |
> 
> 添加屏幕：设备 · 方向 · 型号 · 名字
> 
> | 屏幕 | 比例与尺寸 | 屏上功能 |
> | :--- | :--- | :--- |
> | 手机 · 竖 / 横 | 按机型计算，避让 UU远程 工具栏 | App 资源库、指示条、原生手势、字号放大 |
> | 平板 · 横 / 竖 | 按机型计算，字号略大于原生 | 同上；横屏为左右两栏 |
> | 电脑 · 横 | 与控制端分辨率一致；带刘海的 MacBook 避让顶部，像素级对应 | 无附加内容，等同普通显示器 |
> 
> - **一机两向**：同一台手机或平板，竖屏、横屏各设一块（屏幕详情中一键添加另一方向），转向时在 UU远程 中切换
> - **多机轮换**：多台手机或平板各设一块，分别选定型号
> - **跨设备**：手机、平板、电脑各设一块，换用设备时选择对应屏幕
> 
> 
> ### 屏幕列表
> 
> 设置「屏幕」页集中管理全部屏幕；远程时，在 UU远程 屏幕列表中选择所需屏幕。
> 
>  左：Snug 设置中的屏幕列表 · 右：远程时 UU远程 中的屏幕列表
> 
> - **按需开关**：暂不使用的屏幕可关闭，关闭后远程时不再建立
> - **设为主屏**（可选，默认不启用）：任一 Snug 屏幕均可设为主屏，常驻并在每次连接时直接进入，参见 [设为主屏](#设为主屏)
> - **无显示器的 Mac mini、Mac Studio**：Snug 屏幕取代系统默认屏幕，远程即获得按控制端分辨率建立的完整桌面
> - **机型库**：内置 19 个品牌的 785 款手机与 46 款平板（iPhone 8 及后续全系 iPhone，华为、小米、OPPO、vivo、三星等主流安卓机型，折叠屏内外屏分列），另含 13 款 Mac 与 9 种常见电脑分辨率
> 
> 型号：按品牌排列，支持自定义分辨率
> 
> 
> ### 设为主屏
> 
> 可选，默认不启用；位于设置「屏幕」页底部。所选屏幕常驻并作为 Mac 的主屏，UU远程 每次连接即进入此屏，菜单栏、程序坞与原主屏窗口一并迁入。
> 
> - **为何常驻**：UU远程 在建立连接的时刻选定主屏，此后不随主屏变化切换。Snug 不接入 UU远程 的接口，仅能依据其在本机留下的窗口与推流日志察觉连接，察觉时画面已开始推送。所选屏幕须在连接前即已存在并作为主屏，这是现有条件下的唯一方式
> - **影响**：程序坞、新开的窗口、系统提示与锁屏登录框均显示于此屏，本机不可见；远程时锁屏，可在控制端解锁。适用于未接显示器或以远程为主的 Mac，开启前需确认
> - **取消**：设置中改回「不改」；菜单栏「取消设为主屏」；手机屏、平板屏 App 资源库右上角「取消主屏」。回到 Mac 本机使用前请先取消；Mac 已锁屏时，远程连接后在此屏取消
> - **远程结束**：此屏及屏上的窗口原样保留，下次连接接续使用；取消设为主屏或退出 Snug 后，窗口归位，主屏与排布自动还原
> 
> 
> ## 🗂 App 资源库
> 
> 手机屏与平板屏的首页，在移动端管理 Mac 上的 App：查找、打开、切换、新建、关闭与退出，无需回到电脑前。电脑屏的 App 资源库从菜单栏打开。
> 
> - **运行中**：每个运行中的 App 一张卡片，窗口列于其下；窗口无论位于哪块屏幕、哪个桌面空间，全屏或最小化，均可在此找到
> - **全部**：本机全部 App 的图标网格，按名称排序；轻点未运行的 App 即打开
> - **搜索**：匹配 App 名称与窗口标题，支持中文、英文、拼音全拼与首字母，如「bwl」对应「备忘录」
> 
>   运行中 · 全部 · 拼音首字母搜索
> 
> - **左右两栏**：横屏手机与平板上，左栏为 App，右栏为所选 App 的窗口
> 
>  左右两栏 · 横屏手机 · 平板
> 
> - **电脑屏**：无资源库面板，从菜单栏打开 App 资源库窗口；标注每个窗口所在屏幕（含全屏窗口），一键移至此屏，移入的窗口一键还原。远端无法看到其他屏幕、无法拖动窗口时，以此移入与还原
> 
> 电脑屏：从菜单栏打开 App 资源库
> 
> | 操作 | 方式 |
> | :--- | :--- |
> | 打开窗口 | 轻点窗口，即铺满全屏；轻点 App，打开其最近使用的窗口 |
> | 新建窗口 | 轻点 App 卡片上的「新建窗口」，新窗口按屏宽打开 |
> | 关闭窗口 | 轻点窗口右侧的关闭按钮，再次轻点确认 |
> | 退出 App | 轻点 App 卡片上的「退出」，再次轻点确认；10 秒未退出时可强制退出 |
> | 存储未保存内容 | 关闭或退出时的「是否存储」对话框显示于当前屏幕，可在移动端直接选择 |
> | 退出这块屏 | 轻点右上角「退出这块屏」并确认：窗口归位、屏幕移除，本次远程不再显示，下次远程恢复（断开后 15 秒内重连仍视为本次） |
> | 取消主屏 | 设为主屏的屏幕上，轻点右上角「取消主屏」并确认：主屏改回 Mac，远程结束后移除此屏 |
> 
> 
> ### 与 iPhone 一致的操作
> 
> | iPhone | Snug 手机屏、平板屏 |
> | :--- | :--- |
> | App 资源库 | 首页：查找、打开与管理 Mac 上的 App |
> | 主屏幕指示条 | 底部指示条，返回 App 资源库 |
> | 左上角「‹ 返回」 | 左上角「‹ App 名」，返回当前窗口 |
> 
> 
> ### 适配任意 App
> 
> Snug 呈现的是 Mac 上的原生窗口，适用于任意 App，不绑定特定 AI：终端中的 Claude Code、ChatGPT 桌面版中的 Codex，体验与电脑前一致。
> 
> 部分 App 设有最小宽度，无法缩至屏宽。Snug 先按屏宽铺开窗口；App 无法再缩窄时，将屏幕切换至恰好容纳的分辨率，再次铺满。
> 
> - 任何窗口均完整显示，不截断
> - 等比缩放，不变形，点按位置准确
> - 此类窗口文字略小，可在移动端双指放大
> 
>  左：ChatGPT 桌面版中的 Codex（文件链接已打码）· 右：设有最小宽度的系统设置，仍完整铺满
> 
> 
> ## 📸 截图
> 
> 适用于手机屏与平板屏。在设置「触控」页开启「截图」后，底部指示条左侧显示相机键；轻点即截取铺满屏幕的窗口并存入 Mac 剪贴板，可粘贴至任意 App。截取内容为窗口原画，不受远程画质压缩影响。
> 
> - **裁剪**：截图后左下角显示缩略图，轻点进入裁剪；默认全选，拖动四角或四边收窄选区，轻点「完成」以选区替换剪贴板中的截图
> - **权限**：需另行授予「录屏与系统录音」权限（macOS 14 为「屏幕录制」）：在设置「通用」页点按「授权…」，按系统提示重新打开 Snug 后生效；与辅助功能权限相互独立
> - **默认关闭**：关闭时指示条不显示相机键，亦无需录屏权限
> 
>  左：截图后显示缩略图 · 右：轻点进入裁剪
> 
> 
> ## 🆚 与其他方案的对比
> 
> | 方案 | 局限 | Snug |
> | :--- | :--- | :--- |
> | **AI 助手的远程控制** | 仅限自家 AI 的会话 | 适用于任意终端与 App，参见 [适配任意 App](#适配任意-app) |
> | **UU远程 自带终端** | 独立于本机终端，断开后进程仍驻留 | 直接使用 Mac 现有的终端窗口 |
> | **显示器欺骗器、虚拟屏工具** | 单一比例，换设备即留黑边；无触屏手势与窗口管理 | 每台设备专属屏幕；手机、平板配原生手势与 App 资源库 |
> 
> - **AI 助手的远程控制**：如 Claude Remote Control、ChatGPT 中的 Codex，均绑定单一产品
> - **UU远程 自带终端**：运行于 UU远程 自身的 tmux，无法接续电脑上进行中的工作（如终端中的 Claude Code）
> 
> 
> ## 📦 安装
> 
> > **系统要求**：被控端 macOS 14 及更新版本，已安装 [UU远程](https://uuyc.163.com/)；控制端为任意安装 UU远程 的手机、平板或电脑。
> 
> **下载安装（推荐）**
> 
> 1. 从「[下载](#-下载)」一节获取安装包（中国大陆推荐国内源）
> 2. 将 Snug 拖入「应用程序」并打开
> 3. 按欢迎页提示授予辅助功能权限（macOS 27 起名为「设备控制和数据访问」）
> 
> 此后 Snug 常驻菜单栏，无需额外操作；再次打开 Snug 即显示设置。
> 
> **更新**：启动时自动检查，一键更新，保留设置与授权；亦可在设置「通用」页手动检查或切换更新源。2.1.0 之前的版本需手动下载替换。
> 
>   
> 欢迎页 · 设置：屏幕 · 设置：通用
> 
> **从源码构建**（需要 Xcode 与 Swift 6）
> 
> ```bash
> git clone https://github.com/zephyr4123/snug.git
> cd snug && scripts/snug install
> ```
> 
> 从「UU远程伴侣」迁移
> 
> 两者同时运行会相互干扰，Snug 启动时提示退出旧版。若曾在旧版中启用守护助手，请另行执行：
> 
> ```bash
> launchctl bootout gui/$(id -u)/com.corndog.uudisplay.watchdog-agent
> rm ~/Library/LaunchAgents/com.corndog.uudisplay.watchdog-agent.plist
> ```
> 
> 
> ## 🧭 使用方式
> 
> 1. **添加屏幕**（按需）：默认仅一块竖屏「Snug 手机屏」；平板、电脑或横屏手机，在设置「屏幕」页添加并选定型号
> 2. **切换屏幕**：连接后，在 UU远程 屏幕列表中选择对应屏幕
> 3. **选择 App 或窗口**：手机屏、平板屏上，在 App 资源库中轻点 App 或窗口，即铺满全屏；电脑屏从菜单栏打开 App 资源库
> 4. **切换窗口**：轻点底部指示条返回 App 资源库；另选窗口时，原窗口自动归位
> 5. **结束远程**：窗口归位、字号复原，Snug 屏幕随之移除；设为主屏的屏幕及其上的窗口保留
> 
> > 💡 建议将 UU远程 画质调至最高：画质较低时画面模糊，平板上尤为明显。
> 
> 
> ## 🔒 隔离与还原
> 
> - **仅改动 Snug 屏幕**：不关闭任何屏幕，不改动其他窗口；未切换至 Snug 屏幕时，UU远程 与原版一致。主屏默认不变；启用「设为主屏」后，所选屏幕常驻为主屏，取消或退出 Snug 后自动还原
> - **撤屏前清场**：在 Snug 屏幕上直接打开的窗口，撤屏前移至主屏，不被挤至角落
> - **先记录，后改动**：预先记录窗口原始位置与字号，Snug 意外退出后亦可还原
> - **窗口直接关闭亦可还原**：在移动端直接关闭的窗口，App 下次以 Snug 屏幕尺寸打开时，自动归位并复原字号
> - **无响应时保持原状**：App 暂无响应时不强行移动窗口，并在屏上说明原因
> - **不收集数据**：除检查更新外不连接任何服务器，不收集任何数据；截图仅存入本机剪贴板，不留存
> 
> 
> ## 🚧 已知限制
> 
> | 限制 | 说明 |
> | :--- | :--- |
> | 依赖 macOS 未公开接口 | 系统大版本更新后可能失效 |
> | UU远程 一次仅允许一台设备控制 | 多块屏幕轮换使用，不支持多台设备同时远程 |
> | UU远程 每次连接从主屏开始 | 需在屏幕列表中手动选择一次；设为主屏后，每次连接直接进入该屏，参见 [设为主屏](#设为主屏) |
> | UU远程 Mac 端最多列出 5 块屏幕 | 含 Mac 自身屏幕；以 Mac 远程时，可先关闭暂不使用的 Snug 屏幕 |
> | 屏幕不随设备自动横竖切换 | 横竖兼用时各设一块，转向时在 UU远程 中切换 |
> | 非网易官方软件 | 与 UU远程 及其开发商无关；UU远程 更新后部分功能可能受影响 |
> | 远程结束后 Snug 屏幕偶尔未移除 | 推流停止未被系统日志记录时出现，菜单栏仍显示「远程中」；在设置中关闭已开启的屏幕即可还原 |
> | VS Code、Cursor 窗口在移动端以快捷键或菜单关闭后，字号可能被保留 | 远程结束后重新打开时若字号偏大，按 ⌘- 复原（关闭时屏上提示级数）；开启手势时轻点窗口关闭按钮，或在 App 资源库中关闭，则不受影响 |
> | 未接显示器的 Mac 无法切回原屏幕 | macOS 仅在无任何显示器时提供默认屏幕，Snug 屏幕出现后即撤下；在 App 资源库

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/zephyr4123/snug)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "zephyr4123--snug"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "zephyr4123--snug" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "zephyr4123--snug"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/zephyr4123--snug");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zephyr4123--snug" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zephyr4123" AND file.name != "zephyr4123--snug"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zephyr4123--snug");
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
> const me = dv.page("Repos/zephyr4123--snug");
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
> const me = dv.page("Repos/zephyr4123--snug");
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
> const me = dv.page("Repos/zephyr4123--snug");
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
> const me = dv.page("Repos/zephyr4123--snug");
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

> **2026-11-20** — 首次收錄
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

- [[2026-11-20|2026-11-20]] — 首次收錄，1.1k stars
