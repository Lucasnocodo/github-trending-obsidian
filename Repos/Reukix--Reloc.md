---
repo: Reukix/Reloc
url: https://github.com/Reukix/Reloc
owner: Reukix
owner_type: User
language: Swift
license: AGPL-3.0
description: "iOS accessory-level location simulator over local loopback (iAP2 / MFi-v3 / NMEA)"
homepage: ""
stars: 1953
stars_per_day: 977
forks: 404
open_issues: 5
created: 2026-11-25
pushed_at: 2026-11-28
first_seen: 2026-11-28
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.0.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-28
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-12-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 87
repo_size_kb: 2750
readme_length: 5351
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-28"
star_history: "2026-11-28:1953"
tags:
  - github
  - "category/other"
  - "lang/swift"
aliases:
  - "Reloc"
  - "Reukix/Reloc"
---

# Reloc

**2.0k** stars · **977** stars/天 · 建立 2 天前 · Swift · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/Reukix--Reloc");
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

`個人專案` `v1.0.5`

> [!summary] 一句話摘要
> iOS accessory-level location simulator over local loopback (iAP2 / MFi-v3 / NMEA)

## 專案簡介

iOS accessory-level location simulator over local loopback (iAP2 / MFi-v3 / NMEA)

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Reukix--Reloc");
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
> const me = dv.page("Repos/Reukix--Reloc");
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
| Forks | 404 |
| Open Issues | 5 |
| Issue 解決率 | 87% (34 closed) |
| 最後推送 | 2026-11-28 |
| 建立日期 | 2026-11-25 |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Reukix/Reloc) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 86
>     "Objective-C" : 14
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Reukix](https://github.com/Reukix) | 10 |

**最新版本**：v1.0.5 (2026-11-28)

> [!info]- Release Notes
> ## Reloc v1.0.5
> 
> ### 更新
> - 新增**轨迹模拟**模式：支持地图选点/搜索沿真实道路规划轨迹（多途经点、步行/跑步/骑行/驾车预设、实时调速、拟真波动、往返/循环及收藏路线）。
> - 新增 **Apple 快捷指令**支持：提供「开始虚拟定位」（选收藏点 → 启动定位 → 跳转系统定位页清缓存）与「关闭虚拟定位」（停止并跳转系统定位页恢复真实 GPS）两项快捷动作。
> - 移除常驻静默音频保活，改用纯原生定位后台模式，降低功耗并避免音频冲突。
> - 优化轨迹锁定与防冻结检测，脱锁时自动原地暂停等待重新锁定。
> - 最低系统支持降至 **iOS / iPadOS 16.0**（真机实测正常），并修复 iOS 16.0 日志页闪退问题。
> - 提示：超过 15 km 的跨城 / 跨国轨迹模拟建议开启飞行模式；远距离定格刷新若未生效，请再次关闭系统「定位服务」并延长等待时间后再重新开启。
> 
> ---
> 
> ### What's New
> - **Trajectory Simulation**: Plan road-snapped routes with multiple waypoints, Walk/Run/Cycle/Drive presets, live speed control, natural motion, round-trip/loop modes, and saved routes.
> - **Apple Shortcuts Support**: Two focused native actions — Start Virtual Location (pick favorite → start GPS → jump to Location Services to clear cache) and Stop Virtual Location (stop & jump to Location Services to restore real GPS).
> - **Native Background Mode**: Removed silent audio keep-alive in favor of pure native iOS background location mode for lower power and zero audio conflicts.
> - **Improved Trajectory Locking**: Added dead-reckoning freeze detection and auto-hold on lock loss.
> - **iOS / iPadOS 16.0 Support**: Verified on iOS/iPadOS 16.0+ devices and fixed an iOS 16.0 logs-view crash.
> - **Tips**: Use Airplane Mode for continuous routes >15 km away; for distant fixed locations that don't switch after 7s, turn Location Services off again and wait longer before re-enabling.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-25 ~ 2026-11-28）
> **活躍天數** 4 天 · **最新 commit** Release v1.0.5: trajectory simulation, Shortcuts support, native background mode, iOS 16.0 support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/Reukix/Reloc/issues/28) | 不会用的可以看这个视频 | 1 | 0 |
> | [#41](https://github.com/Reukix/Reloc/issues/41) | 视频提示能加个开关么 距离近的时候完全用不上这个提示 设置自动化反而这个窗口有点烦人 | 0 | 0 |
> | [#39](https://github.com/Reukix/Reloc/issues/39) | 希望恢复定位后位置图标落在当前真实位置 | 0 | 0 |
> | [#19](https://github.com/Reukix/Reloc/issues/19) | 定位有时候不管用 可以试一下 以下操作 | 0 | 2 |
> | [#17](https://github.com/Reukix/Reloc/issues/17) | 沒有背景刷新開關 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Reloc
>   面向 iPhone 与 iPad 的本机虚拟外设定位模拟工具
>   
>     基于 Swift 与 Objective-C 构建 · 支持简体中文与英文 · 通过本机虚拟外设实现外设级定位注入
>   
>   
>     
>     
>     
>   
> 
> ---
> 
> ## 简介
> 
> **Reloc** 是一款运行在 iPhone 与 iPad 本机的外设级定位模拟应用。应用直接通过系统 `CoreAccessories` 在本机创建虚拟外设连接与 iAP2 端点，完成 iAP2 链路同步、MFi-v3 鉴权及 NMEA-0183（`$GPGGA` / `$GPRMC`）报文流式下发，使系统以标准外设 GPS 身份接收实时坐标。
> 
> **无需实体外设、无需电脑、无需设备配对文件、无需代理回环、VPN 或依赖 Wi-Fi**，蜂窝网络下同样可单机完成定位注入。
> 
> ---
> 
> ## 核心功能
> 
> | 模块 | 能力说明 |
> | :--- | :--- |
> | **定格定位** | 地图点击选点、视野内实时搜索联想与地址搜索、手动输入 WGS-84 坐标与海拔、自动查询真实地形海拔、多级反地理编码兜底、运行中浏览并热更新目标位置 |
> | **轨迹模拟** | 首页一键切换「定格 / 轨迹」模式；地图选起终点（支持多途经点）自动沿真实道路规划轨迹并自动匹配地形海拔曲线；内置步行 / 跑步 / 骑行 / 驾车 4 档预设与实时自由调速、拟真配速波动与转弯减速、细微路径横向漂移；支持单次定格 / 折返往返 / 闭合循环、暂停/继续与收藏常用路线 |
> | **多源地图与纠偏** | 默认使用 **Apple 地图（MapKit 原生）** 并支持中国大陆 GCJ-02 ↔ WGS-84 自动双向纠偏；同时内置免 API Key 的 **全球街道图（Esri） / OpenStreetMap / 全球卫星图** 纯原生 WGS-84 瓦片地图（无高德字样）；可选 ±0.6 m 自然微漂移（含细微海拔波动） |
> | **本机直连与刷新** | 直接在本机创建虚拟外设通道，断线自动退避重连；系统缓存顽固时提供 **一键刷新定位服务（画中画悬浮 7 秒倒计时）**；停止时自动释放本机端点并支持真实定位恢复 |
> | **长时后台保活** | 纯原生定位后台运行（已移除常驻静默音频保活，无音频冲突与额外功耗）、事件驱动低唤醒循环、单调时钟防校时卡死、瞬态断线与意外退订自动退避自愈 |
> | **快捷指令** | 精简 2 项高频原生 Apple 快捷指令动作：**开始虚拟定位**（弹窗选收藏点 → 启动定位 → 拉起 7 秒浮窗并跳转系统定位页清除缓存）与 **关闭虚拟定位**（恢复真实 GPS） |
> | **数据与实测** | 收藏夹、最近记录、异常中断一键恢复；内置简体中文与英文双语切换；内置 `CoreLocation` 实测面板（外设来源标志 `isProducedByAccessory` / 模拟标志 `isSimulatedBySoftware`）与协议日志 |
> 
> ---
> 
> ## 系统兼容性
> 
> | 设备 / 系统 | 支持状态 | 说明 |
> | :--- | :---: | :--- |
> | **iPhone · iOS 16.0+** | 支持 | 已在 iOS 16.0 及以上未越狱真机实测通过 |
> | **iPad · iPadOS 16.0+** | 支持 | 已在 iPadOS 16.0 及以上真机实测通过，支持 Wi-Fi 与蜂窝版 iPad |
> 
> > 本机虚拟外设通道仍需有效的 **MFi-v3** 凭据才能通过系统的外设鉴权。
> 
> ---
> 
> ## 使用方式
> 
> 1. 打开 Reloc，在 **「定位」** 页通过地图选点、地址搜索或手动输入 WGS-84 坐标（自动匹配地形海拔，也支持手动修改），点击 **开始定位**。
> 2. 若开始定位后系统位置尚未切换，点击首页的 **「一键刷新定位服务」**，按画中画浮窗提示关闭系统「定位服务」，等待 7 秒后重新开启。
> 3. 首页显示 **「外设定位已生效」** 后，即可切换到其他 App 使用。
> 4. 结束时点击 **「停止并恢复」**；若系统仍保留旧位置缓存，可按提示执行恢复真实位置的刷新流程。
> 
> > 协议握手与数据 ACK 仅代表报文已送达外设通道，定位是否真正生效请以首页状态或 **「实测与日志」** 页的 `CoreLocation` 实测坐标及外设来源标志为准。
> >
> > **远距离轨迹提示**：本地 15 km 以内轨迹在正常开启 Wi-Fi 与蜂窝网络下即可持续平滑移动；如模拟距离真实位置超过 15 km 的跨城/跨国连续轨迹，建议开启飞行模式以避免系统 `CLNmeaScreener` 按附近 Wi-Fi/基站回弹坐标。
> 
> ---
> 
> ## 快捷指令
> 
> Reloc 精简提供 2 项日常最常用的 iOS 原生 **Apple 快捷指令（App Intents）**：
> 
> | 动作名称 | 功能说明 |
> | :--- | :--- |
> | **开始虚拟定位** | 弹窗选择收藏地点（或固定某点）→ 启动虚拟外设定位 → 自动拉起 7 秒画中画倒计时并跳转系统「定位服务」页，开关一次即可清除定位缓存（同时输出 `prefs:root=Privacy&path=LOCATION`，方便自行衔接快捷指令「打开 URL」） |
> | **关闭虚拟定位** | 断开虚拟外设通道 → 拉起 7 秒恢复倒计时浮窗并自动跳转系统「定位服务」页清除残留缓存，快速切回本机真实 GPS（同样输出 `prefs:root=Privacy&path=LOCATION`） |
> 
> > 建议在系统设置中将 Reloc 的定位权限设为 **「始终」**，以保证切换至其他 App 或锁屏后的长时后台稳定性。
> 
> ---
> 
> ## 从源码构建
> 
> ### 环境要求
> 
> - macOS 与 Xcode
> - [XcodeGen](https://github.com/yonaskolb/XcodeGen)（`brew install xcodegen`）
> 
> 项目采用纯 Swift + Objective-C 实现，无需 Rust 或额外桥接库。
> 
> ### 1. 准备 MFi-v3 凭据
> 
> 自行准备有效的 MFi-v3 凭据并放入以下本地路径（已配置 `.gitignore`，请勿提交到仓库）：
> 
> - `Reloc/Resources/MFi/certificate.p7b`
> - `Reloc/Resources/MFi/identity.pk8`
> 
> ### 2. 生成工程并构建
> 
> ```bash
> xcodegen generate
> 
> xcodebuild build \
>   -project Reloc.xcodeproj \
>   -scheme Reloc \
>   -configuration Release \
>   -sdk iphoneos \
>   -derivedDataPath build/DerivedData \
>   CODE_SIGNING_ALLOWED=NO
> ```
> 
> ### 3. 打包未签名 IPA（可选）
> 
> ```bash
> rm -rf build/Payload && mkdir -p build/Payload
> ditto build/DerivedData/Build/Products/Release-iphoneos/Reloc.app build/Payload/Reloc.app
> (cd build && zip -qr Reloc.ipa Payload)
> ```
> 
> 在 Xcode 中配置自己的签名直接安装，或对打包后的 `build/Reloc.ipa` 自行签名安装。应用 Bundle ID 为 `dev.reloc.ios`，显示名称为 `Reloc`。
> 
> ---
> 
> ## 常见问题
> 
> 1. 开始定位或停止定位后，系统位置没有立刻切换 / 恢复？
> 
> 定位数据进入 `locationd` 后仍可能受到系统筛选与缓存策略影响：
> 
> - **开始定位后未切换**：点击首页的 **「一键刷新定位服务」**，按画中画浮窗提示关闭系统「定位服务」7 秒后再重新开启，即可促使系统立即切换到外设定位源。
> - **停止定位后仍停留在旧位置**：Reloc 停止时会释放本机外设端点并恢复本机定位；若室内弱信号下系统仍缓存上次位置，使用停止后的刷新流程即可恢复真实定位。
> 
> 2. 为什么协议日志显示握手 / ACK 成功，但地图位置没有变化？
> 
> iAP2 握手与 NMEA ACK 仅表示数据已成功发送至本机虚拟外设通道，不代表 `locationd` 已采纳该坐标作为当前定位源。请结合首页状态和 **「实测与日志」** 页的 `CoreLocation` 实测数据与 `isProducedByAccessory` 标志判断，必要时执行一次定位服务刷新。
> 
> 3. 为什么默认 Apple 地图在中国大陆会显示「高德地图」？
> 
> 受中国大陆测绘合规要求影响，iOS 原生 `MapKit` 在中国大陆环境下会自动使用高德地图底图与角标。如需无高德字样的纯国际 WGS-84 地图，可在地图右侧图层按钮或 **「设置」** 页切换为 **全球街道图 / OpenStreetMap / 全球卫星图**（全部免 API Key）。
> 
> 4. 为什么轨迹定位不生效、出发后不动或中途回弹？
> 
> 轨迹定位不生效通常由以下两类系统机制引起：
> 
> 1. **尚未在起点完成外设锁定**：为避免系统还未切换到外设源就空跑路线，Reloc 启动轨迹后会先在起点高频发送 NMEA，直到 `CoreLocation` 实测确认外设来源（`isProducedByAccessory = true` 且与起点误差 `
> 
> 5. 为什么远距离（跨城 / 跨国）定位刷新后仍然不生效？
> 
> 画中画浮窗给出的 **7 秒倒计时** 仅是常规近距离场景下的参考时长，**不要完全死守 7 秒提示**：
> 
> - 远距离切换坐标时，iOS `locationd` 对本机真实 GNSS、Wi-Fi 与基站融合缓存的保留周期更长，仅关闭 7 秒后立即重新打开，系统仍可能沿用旧缓存并拒绝新的外设坐标。
> - **解决方法**：如果重新开启「定位服务」后位置没有切换成功，请**再次关闭系统「定位服务」，耐心等待更长的时间（例如 15–30 秒，必要时可延长至 45–60 秒）后再重新启用**；若依然受附近网络干扰回弹，可同时暂时关闭 Wi-Fi 或开启飞行模式后再试。
> 
> 6. 为什么不能无限期长时间在后台运行（挂机一段时间后可能中断）？
> 
> Reloc 的本机虚拟外设通道直接运行在 App 进程内，受非越狱 iOS 系统后台管控机制制约，无法像越狱系统守护进程（daemon）一样永久常驻：
> 
> 1. **系统内存回收（Jetsam）**：在后台挂机期间，若前台使用相机、大型游戏、视频剪辑等高内存占用应用，iOS 会优先清理后台应用进程；一旦 Reloc 被系统终止，虚拟外设通道即刻断开，系统会逐步切回真实 GPS。
> 2. **后台定位权限与休眠策略**：若未将定位权限设为 **「始终」**，或设备开启了 **低电量模式**、长时间锁屏进入深度休眠，系统（RunningBoard / CoreLocation）会主动挂起或回收后台定位资格。
> 3. **后台周期性网络重校验**：长时间挂机时，系统 `locationd` 仍会定期通过 Wi-Fi / 蜂窝基站复核位置，远距离坐标可能因此被重新拦截或回弹。
> 
> **延长稳定运行时间的建议**：
> 
> - 在系统设置中将 Reloc 的定位权限设为 **「始终」** 并保持 **「精确位置」** 开启；
> - 关闭 **低电量模式**，挂机期间尽量减少切换高内存消耗应用；
> - 在设置页开启 **「自然微漂移」**，并可将 NMEA 发送间隔适当调大至 **2.0–3.0 秒** 以降低后台 CPU 唤醒频率与功耗；
> - 若会话意外被系统回收，重新打开 Reloc 首页后可直接点击 **「恢复」** 一键续接上次定位。
> 
> ---
> 
> ## 免责声明与许可证
> 
> > **免责声明**：本项目仅用于外设定位通信协议研究、应用开发调试与自动化测试。使用者须严格遵守所在地区法律法规及目标服务的使用条款，因滥用本软件产生的一切后果由使用者自行承担。
> 
> 本项目依据 **GNU Affero General Public License v3.0 (`AGPL-3.0-only`)** 开源发布，完整条款请参阅 [LICENSE](./LICENSE)。任何基于本项目的修改版本在分发或通过网络提供交互服务时，均须在相同 AGPL-3.0 协议下公开完整对应源代码。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[4lwayz--portwatch-vi|4lwayz/portwatch-vi]] · [[852wa--JIZURA|852wa/JIZURA]] · [[AFK-surf--xnulinux|AFK-surf/xnulinux]] · [[ARahim3--DigUp|ARahim3/DigUp]]

[GitHub](https://github.com/Reukix/Reloc)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Reukix--Reloc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "Reukix--Reloc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "Reukix--Reloc"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Reukix--Reloc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Reukix--Reloc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Reukix" AND file.name != "Reukix--Reloc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Reukix--Reloc");
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
> const me = dv.page("Repos/Reukix--Reloc");
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
> const me = dv.page("Repos/Reukix--Reloc");
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
> const me = dv.page("Repos/Reukix--Reloc");
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
> const me = dv.page("Repos/Reukix--Reloc");
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

> **2026-11-28** — 首次收錄
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

- [[2026-11-28|2026-11-28]] — 首次收錄，2.0k stars
