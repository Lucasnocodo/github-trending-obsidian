---
repo: Kianuni/Erosion-CN
url: https://github.com/Kianuni/Erosion-CN
owner: Kianuni
owner_type: User
language: Swift
license: GPL-3.0
description: "iOS / iPadOS 系统配置与 MobileGestalt 研究工具箱（简体中文防白苹果安全加固版）"
homepage: ""
stars: 1648
stars_per_day: 824
forks: 366
open_issues: 12
created: 2026-11-10
pushed_at: 2026-11-11
first_seen: 2026-11-12
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.8.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-12
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 45
repo_size_kb: 987
readme_length: 9974
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-12"
star_history: "2026-11-12:1648"
tags:
  - github
  - "category/other"
  - "lang/swift"
aliases:
  - "Erosion-CN"
  - "Kianuni/Erosion-CN"
---

# Erosion-CN

**1.6k** stars · **824** stars/天 · 建立 2 天前 · Swift · GPL-3.0

```dataviewjs
const me = dv.page("Repos/Kianuni--Erosion-CN");
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

`個人專案` `v0.8.5`

> [!summary] 一句話摘要
> iOS / iPadOS 系统配置与 MobileGestalt 研究工具箱（简体中文防白苹果安全加固版）

## 專案簡介

iOS / iPadOS 系统配置与 MobileGestalt 研究工具箱（简体中文防白苹果安全加固版）

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
| Forks | 366 |
| Open Issues | 12 |
| Issue 解決率 | 45% (10 closed) |
| 最後推送 | 2026-11-11 |
| 建立日期 | 2026-11-10 |
| Repo 大小 | 987 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kianuni/Erosion-CN) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 94
>     "Objective-C" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kianuni](https://github.com/Kianuni) | 23 |

**最新版本**：v0.8.5 (2026-11-11)

> [!info]- Release Notes
> ## Erosion-CN v0.8.5 更新日志 (Build 20)
> 
> ### 🛠️ 照片「高质量」消除防冲突锁定 & iPhone 18 Pro 系列原厂基线精准保护
> 
> 1. **修复开启「解锁 iOS 27 进阶 AI 能力 `[测试特性]`」导致照片「高质量」消除报错的问题**：
>    - 经 `iPhone 18 Pro Max (iPhone19,7)` 真机 A/B 对照与 `MGInspector` 三源底层探针实锤确认：
>      - 照片「快速」消除走本地独立 GAN 模型，而「高质量」消除走云端扩散模型管线 (`ServerDiffusionInpainting`)；
>      - **`Audio Intelligence`（iOS 27 音频智能，`rb2tKZxlj0Gm2tBmUQSLqQ`，槽位 `#178`）** 在 iPhone / iPad 出厂均为 **`false (0x00)`**——强行开启该非原生实验槽位会导致系统生成式模型管线校验断路，直接造成照片「高质量」消除报错（提示 *“消除此照片时出错。请稍后再试。”*）；
>      - **`Personal Translator`（个人实时翻译，`M1n2sAqf33NAOgZRGxQYBA`，槽位 `#266`）** 在 iPhone 18 Pro 系列 (`iPhone19,*`) 出厂原生即为 **`true (0x01)`**，与照片「高质量」消除完全兼容。
> 2. **默认防呆锁定 + 原厂基线保护 + 一键自愈修复**：
>    - 已将非原生实验槽位从顶部 **「⚡ 一键配齐 / 修复」** 中移除，并在 iPhone / iPad 上默认锁定关闭防误开（常规通话录音、语音备忘录转写与系统翻译均由主 AI 开关完整支持）；
>    - 新增 `isNativePersonalTranslatorHD()` 与 `isLiveAdvAIConflictActive()`，完整识别并保护 iPhone 18 Pro 系列原厂自带的 `Personal Translator = true` 基线，严防误报或误清零；
>    - 若此前在旧版本中曾开启过该实验开关，升级 `v0.8.5` 后直接关闭该开关（或点击顶部四要素体检卡片 **「⚡ 一键配齐 / 修复」**）并应用重启，即可自动清零冲突槽位并立即恢复照片「高质量」消除。
> 
> ---
> 
> ### 📦 安装包校验信息
> - **文件名**：`Erosion_v0.8.5_zh-Hans.ipa`
> - **版本号**：`v0.8.5 (Build 20)`
> - **SHA-256**：`994c9363f42c28e1820b6ace48f2f95409c8c6d5e1bc858da41e82dd85cbcf95`

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-10 ~ 2026-11-11）
> **活躍天數** 2 天 · **最新 commit** Release v0.8.5: calibrate live iPhone 18 Pro PersonalTranslator/AudioIntelligence baseline

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#22](https://github.com/Kianuni/Erosion-CN/issues/22) | IOS27.3beta iPhoneAir高精度照片消除和视觉智能显示错误 | 0 | 0 |
> | [#21](https://github.com/Kianuni/Erosion-CN/issues/21) | iOS 26 上 pathleak 无法枚举目录 | 0 | 0 |
> | [#20](https://github.com/Kianuni/Erosion-CN/issues/20) | 18pro ios27.2.1 一键配齐，再修改为‘仅改区域代码 LL’。提交后注销+手动重启后，所有功能都没有生效。 | 0 | 1 |
> | [#19](https://github.com/Kianuni/Erosion-CN/issues/19) | 异常反馈 | 0 | 0 |
> | [#17](https://github.com/Kianuni/Erosion-CN/issues/17) | iOS 27.3 beta 1（24C5037i）/ iPhone 15 Pro Max，Erosion-CN v0.8 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Erosion-CN
>   基于 worse_query 的 iOS / iPadOS 系统配置与 MobileGestalt 研究工具箱（简体中文防白苹果安全加固版）
>   支持 iOS / iPadOS 27.0 – 27.2 / 27.3 beta 1（完整支持）以及 iOS / iPadOS 26.x（部分支持）。
>   
>   
>   
> 
> ---
> 
> 
> ## 项目简介与核心改进
> 
> **Erosion-CN** 分支衍生自官方上游项目 **[jailbreakdotparty/Erosion](https://github.com/jailbreakdotparty/Erosion)**，完成了 **100% 简体中文界面本地化**，修复了原版多项严重真机 Bug，并进行了系统级防白苹果安全加固与底层能力扩展：
> 
> 1. **修复重启后修改自动失效还原（反弹回原厂状态）的严重 Bug**
>    - 原版在未手动切换过设置开关时，`mgWriteAtomically` 默认返回 `false`，导致实际走了临时文件替换（`replaceItemAt`），破坏了系统缓存文件的 Inode 与 `_mobilegestalt` POSIX 属主权限，设备一重启即被系统丢弃重建；同时原版在 iOS 27 上额外注入了非缓存键 `RegionInfo`（`zHeENZu+wbg7PUprwNwBWg`），触发开机缓存合法性校验整包重置。
>    - 本分支已默认强制锁定原位覆盖写入，严格遵循 iOS 27 原厂缓存键结构，并自动匹配写入对应机型的监管型号（`RegulatoryModelNumber`），**真正做到持久化生效、重启不反弹**。
> 2. **修复内置 Plist 编辑器破坏布尔值与相机浮点参数导致「相机黑屏」的严重 Bug**
>    - 原版 `PlistManager` 将 `CFBoolean`（`` / ``）以及整数值 `Double`（如相机变焦倍率 `1.0`、`2.0`、`5.0` 等）误判转换为了 `` 整型，导致编辑保存 `MobileGestalt` 后系统相机取景直接黑屏。
>    - 本分支改用 `CFBooleanGetTypeID()` 与 `CFNumberIsFloatType()` 精确识别底层 CoreFoundation 类型，保留原始 Plist 根类型与编码格式，并对未修改项执行 **100% 原样无损直通（Lossless Pass-through）**，彻底解决相机黑屏问题。
> 3. **零 0 字节窗口原位写入协议（`pwrite` + 按需尾截断 + `F_FULLFSYNC`）**
>    - 重构底层文件 I/O：不再先执行 `ftruncate(fd, 0)` 清空系统文件，而是直接从偏移 `0` 原位覆盖写入、写完后按需裁剪尾部，并调用 `fcntl(fd, F_FULLFSYNC)` 强制刷新 APFS 与物理闪存缓存，断电或异常中断绝不留空文件。
> 4. **写入前变更对比预览（Diff Preview）+ 写后全量读回校验与自动回滚**
>    - 点击「应用」时逐条展示所有待修改键值与十六进制槽位对比（`修改前 → 修改后`）；
>    - 写入前自动保存 `PreApplyGestalt.plist` 快照，写入后立即从磁盘读回并做二进制 Plist 反序列化与严格类型校验，一旦出现任何不一致立即自动原位回滚。
> 5. **本机 `libMobileGestalt.dylib` 运行时动态偏移解析（零硬编码）**
>    - 在设备运行时只读扫描内存中加载的 `/usr/lib/libMobileGestalt.dylib` 查询描述符表，实时计算当前机型与当前系统版本的 `CacheUUID`、总槽位数及布尔槽位偏移（`green-tea`、`not-green-tea`、`wapi`）；
>    - **严格多重校验门控**：仅当本机 `CacheUUID` 唯一匹配、总长度精确等于 `槽位数 × 9`、有效位 `validity == 1`、8 字节槽位填充全为 `0` 且无任何无关字节变动时才允许修改；解析未通过时自动锁定开关并拦截写入。
> 6. **双重原厂金库备份（跨卸载重装不丢备份）、四重指纹防呆与一键恢复原机出厂参数**
>    - **沙盒 + 系统安全金库双冗余备份**：生成原始备份 `OriginalGestalt.plist` 时同步计算 `SHA-256` 摘要并镜像锁定至系统级共享容器安全金库（标记 `isExcludedFromBackup = true` 防换机污染）——**即使侧载证书过期卸载重装应用，也能自动无损找回最初未修改的原厂备份**，并支持手动导入/导出外部 `.plist` 备份及首次备份脏状态检测；
>    - **全模块一键恢复原机出厂参数**：主页与 `MobileGestalt` 页顶均内置「一键恢复原机出厂参数」，强制核对 `SHA-256`、`CacheVersion`、`CacheUUID`、`CacheData` 长度与真实内核硬件 `ProductType`，同步清空本地自定义开关残留、锁屏文字/铭牌、伪监管文件与拨号盘缓存；跨 iOS 版本 OTA 升级拦截时可直接一键联动「重建系统纯净原厂缓存」。
> 7. **重签证书 `App Group` 自动探测与高危软砖项拆除**
>    - 运行时通过 `SecTaskCopyValueForEntitlement` 与纯 Swift Mach-O `LC_CODE_SIGNATURE` 签名段解析自动匹配任意重签工具注入的可用 `group.*` 容器；
>    - 默认移除并拦截上游版本中存在软砖/无限设置向导隐患的高危功能（如 iPhone 正则盲改切片的 iPadOS 模式、个人零售设备的监管模式开关、非缓存键注入等）。
> 8. **完善机型适配、iOS 27 进阶 AI 能力解锁与实用工具优化**
>    - 补全 iPhone 15 / 16 / 17 / Air / 18 / Duo 全系列及 M 系列 iPad 监管型号映射与硬件特征表，修复原版“80% 充电上限”与“开机提示音”硬件判断互换笔误及自定义键值恒写入 `true` 的 Bug；
>    - **Apple 智能子能力打包与进阶槽位冲突保护**：「启用 Apple 智能开关」自动联动解锁旧机型缺失的相册「消除」(Clean Up) 与备忘录「手写体合成」能力；针对实验性 `Personal Translator` / `Audio Intelligence` 槽位在 iPhone / iPad 上强开会导致 `ModelCatalog` 资产校验断路、使照片「高质量」消除报错的问题，内置自动防呆锁定与一键修复；
>    - 新增 iOS 26/27「液态玻璃低功耗渲染（省电模式）」开关与机型外层描述同步；
>    - 修复文件浏览器搜索栏失效与失焦清空问题，采用 `stat()` 动态探测本机实时最大 Inode 基线配合 `pathleak` 加速容器扫描（并为动态壁纸与拨号盘页面加入异步加载进度动画），同时新增核心缓存目录 0 秒一键直达入口；
> 9. **新增应用存档管理与容器缓存清理模块（`v0.6.0`）**
>    - **应用与游戏存档备份、还原与修改器 (`AppDataBackupView`)**：自动扫描本机第三方应用与单机游戏容器，支持一键将 `Documents` 与 `Library/Preferences` 打包备份为 `.zip`、导出分享、跨重装自动匹配最新容器 UUID 原位还原存档，并支持一键跳入存档目录调用内置无损 Plist/文本编辑器修改；
>    - **容器级缓存扫描与清理 (`CacheCleanerView`)**：专治 iOS「系统数据（其他）」暴涨，按体积排行展示各应用容器的 `Library/Caches` 与 `tmp` 可释放空间，支持单应用或批量一键清理（严格保护 `Documents`、聊天记录数据库与登录态）。
> 10. **新增真机底层生效核验探针、Apple 智能四要素一键体检、影像/健康硬件槽位解锁与全链路沙盒审计加固（`v0.7.2`）**
>     - **真机 `MobileGestalt` 底层生效核验与动态槽位实时探针 (`MGInspectorView`)**：纯只读调用系统库 `MGCopyAnswer` 实时读取当前真机生效值，并与 `OriginalGestalt.plist` 原厂备份、当前 `CacheData / CacheExtra` 待写配置进行三源同屏对比；同时提供本机全量 `720+` 个二进制 `CacheData` 槽位的动态解析检索与自由键名实时探针；
>     - **Apple 智能 (Apple Intelligence) 激活四要素一键体检面板 (`AppleIntelligenceCheckupCard`)**：实时聚合核验「销售地区 `LL/LL/A`」、「美版监管型号 `Axxxx`（基于真实主板型号防伪装误判）」、「端侧 AI 芯片准入」及「系统实时生效回读」，并在原生 AI 机型上自动锁定 `InternalInstall` 互斥开关，支持一键自动配齐全部缺失项；
>     - **影像与健康进阶能力解锁（`CacheData` 二进制硬件槽位直写）**：针对 `libMobileGestalt.dylib` 中 `_MGCacheSetValueForKey` 的 `validity` 短路机制（仅写 `CacheExtra` 会被系统直接忽略的硬件设备树属性），通过运行时动态槽位解析直接写入 `CacheData`，新增 **相册与相机「混音 (Audio Mix)」**、**空间音频录制与 FaceTime 空间音频**、**按下快门瞬间抓拍 (Responsive Shutter)** 与 **健康「高血压趋势评估模式」** 4 项开关，并内置本机原生硬件防降级保护锁；
>     - **全链路沙盒逃逸与文件编辑安全加固（`v0.7.2`）**：修复内置 Plist 编辑器因 `@Binding` 原地变异导致保存回旧值的 Bug；重构 `WorseQuerySwift` 支持只读容器令牌保留（`requireWrite: false`），修复 `System` / `AppGroup` 容器浏览、容器排序重复扫描、符号链接类型识别、壁纸与拨号盘父容器授权、存档备份还原 xattr 核验与 Zip Slip 防护等 24 个文件的边界缺陷。
> 11. **全量 `MobileGestalt` 槽位双写晋升、14 项底层硬件实验开关与 6 大跨容器系统模块（`v0.8.0` 测试特性）**
>     - **14 项既有功能晋升 `CacheData + CacheExtra` 全量双写**：将灵动岛、全天候显示、液态玻璃低功耗渲染、80% 充电上限、开机提示音、车祸检测、PWM 防频闪、相机控制键、操作按钮、轻点唤醒、台前调度等 14 项既有功能全面纳入运行时 `CacheData` 槽位双写表，彻底突破 `_MGCacheSetValueForKey` 槽位短路；
>     - **新增 14 项 `[测试特性]` 二进制 `CacheData` 硬件特性包**（均经真机 `libMobileGestalt.dylib` 校验 `slot >= 0, queryType == 11` 且带原生硬件防降级锁）：日韩版真·相机快门静音（3 槽联动）、高低功耗双麦并发拾音（录音棚叠录底座）、相册局部光影重绘与新一代色调映射、超取景框捕获与 P3 广色域立体声视频、相机控制电容滑动变焦与触觉阻尼完整面板、旧机型显示电池循环次数与生产日期、户外高亮全天候显示与 Flipbook 帧缓冲、CarPlay Ultra 多屏车载协议、120Hz 触控采样事件投递、AirPods 临床听力均衡与低功耗助听器模式（3 槽联动）、睡眠呼吸暂停风险趋势检测、解除美版血氧软件专利限制、户外极限运动模式与日光照射监测、端侧 Siri Hub 路由与指令模型动态剪枝，并附「国行普通话来电询问 + 海外 Apple 智能」共存配置指南；
>     - **6 大跳出 `MobileGestalt` 的跨容器实验模块（`[测试特性]`）**：
>       1. **`CSStore2` 极速容器与中文应用名映射引擎 (`CSStoreResolver` / `CSStoreEngine`)**：解析 LaunchServices `"bdsl"` 二进制数据库，` [!IMPORTANT]
> > 操作前请务必通过电脑完整备份设备重要数据！修改系统底层配置存在潜在风险，仅供安全研究与学习交流，请仅在本人持有的设备上使用并自行承担风险。
> 
> - **iOS / iPadOS 27.0 – 27.2.1**、**27.3 beta 1**（完整支持所有功能，包括 `MobileGestalt` 读取与安全写入）
> - **iOS / iPadOS 26.0 – 26.7.2**（部分支持：可使用锁屏壁纸、拨号键盘美化、锁屏底部签名文字与部分容器浏览；受底层沙盒限制，iOS 26 不支持写入系统 `MobileGestalt`）
> 
> ---
> 
> 
> ## 安装与签名要求
> 
> > [!WARNING]
> > 本项目底层依赖至少一个有效的 `App Group` 容器权限。请使用支持保留或注入 App Group 的个人 Apple ID 自签工具（如 **SideStore / AltStore / Feather / Sideloadly / Impactor / iLoader**）或带 App Group 权限的开发者证书签名安装。
> 
> 1. 前往 [Releases 页面](https://github.com/Kianuni/Erosion-CN/releases/latest) 下载最新的 `Erosion_v0.8.5_zh-Hans.ipa`。
> 2. 使用上述签名工具安装至设备；首次运行可在「主页」日志确认已成功识别 `App Group`。
> 3. 详细使用说明与原厂状态恢复教程请查阅：
>    - 📘 [USAGE_GUIDE.md（安装与使用指南）](./USAGE_GUIDE.md)
>    - 🔄 [RESTORE_CHA.md（无损恢复出厂状态指南）](./RESTORE_CHA.md)
> 
> ---
> 
> 
> ## 常见问题与排障指南 (FAQ / Q&A)
> 
> 
> ### Q1：为什么打开了开关，eSIM 还是没生效？或者国行 18 Pro / 18 Pro Max 改完后「添加 eSIM」反而消失了？
> 请按以下 6 种情况逐一排查：
> 1. **国行 iPhone 18 Pro / 18 Pro Max（`A3715` / `A3718`）插着双实体卡（或背面副卡）触发基带卡槽冲突（18 系列最常见！）**  
>    国行 18 Pro / Pro Max 为特殊的**「正反双实体 SIM 卡槽 + 内置 eSIM」三通道复用硬件**，而美版 `LL/A`（`A3472` / `A3473`）为无卡槽纯 eSIM 机型（国际版也仅正面单卡槽）。若卡托内插着两张实体卡（或插在卡托背面副卡槽）重启，基带检测到卡槽占用冲突会临时隐藏「添加 eSIM」与 `EID`（或导致背面副卡不工作）。  
>    ✅ **真机实测 100% 解决与双实体卡共存步骤（「空卡写卡法」）**：
>    - ① **先拔出 SIM 卡托（不插任何实体卡，保持空卡状态）**，在 Erosion-CN 开启「解除地区限制」+「解除国行底层限制」点击应用后 **空卡关机冷重启**（注：若在 `27.3 beta 1` 空卡下仍隐藏入口，可先关闭上方地区限制、**仅单开「解除国行底层限制」空卡重启**，「添加 eSIM」必出）；
>    - ② 空卡开机连 Wi-Fi（挂外区节点 + 开启飞行模式），扫码把需要的海外 eSIM 全部添加完毕；
>    - ③ **插回实体卡策略**：若平时只需 **1 张实体卡 + 多张海外/国内 eSIM**，将实体卡装在卡托**正面（主卡槽）**即可直接共存；若平时还需使用**卡托背面第 2 张实体卡**，写完海外 eSIM 后进 Erosion-CN **单独关闭「解除国行底层限制」（保留上方「解除地区限制」开启，且自 `v0.8.1` 起还可在下方修改模式切换为「仅改区域代码 LL（保留 CH/A 后缀与双卡兼容）」以保留原厂 `CH/A` 与监管型号）**，应用重启后再插回正反双实体卡——背面实体卡即可恢复工作，且已写入芯片的海外 eSIM 依然完整保留、可随时在设置中切换启用！
> 2. **只点了「注销 (Respring)」，没有「手动关机重启」**  
>    「解除国行底层限制」修改的是二进制 `CacheData`（`green-tea` 槽位）。负责蜂窝基带与 eUICC 芯片的守护进程（`CommCenter`、`ctkd`）在注销桌面时**不会重载缓存**，甚至会因新旧区域参数半同步导致「添加 eSIM」入口临时隐藏。**写入后必须手动滑动关机、等待黑屏后再按电源键开机（冷重启）** 才会生效。
> 3. **只改了 `LL/A`，漏开了「解除国行底层限制 (eSIM / FaceTime 音频)」**  
>    常规解锁必须将 **「解除地区限制（国行 AI / 美版 LL/A）」** 与下方的 **「解除国行底层限制 (eSIM / FaceTime 音频)」** **两个开关同时打开**并冷重启；若只改了上方的 `LL/A` 而未解开下方的 `green-tea` 硬件锁，系统校验区域冲突同样会屏蔽 eSIM 菜单。
> 4. **误开了「机型伪装 (`ProductType`)」或曾用其他改机工具盲改过缓存**  
>    原生 AI 机型**严禁修改机型标识符**（如把国行主板 `iPhone19,7` 强改成美版 `iPhone19,3`），否则基带校验失配会导致整个 eSIM 菜单消失。若之前被其他工具改坏，请点击 `MobileGestalt` 右上角 **`⋯` →「清除并重建缓存」** 并重启恢复纯净原厂基线，再重新按需开启开关。
> 5. **在中国大陆境内扫码添加海外 eSIM 时提示“不支持 / 无法激活”**  
>    若「添加 eSIM」按钮已出现，但扫码瞬间被拦截，是系统激活时通过境内基站/定位触发了位置校验。扫码写卡时请开启 **飞行模式 + 连接 Wi-Fi（挂全局海外代理）**（必要时临时关闭 `设置 → 隐私与安全性 → 定位服务 → 系统服务` 中的「蜂窝网络搜索 / 无线局域网与蓝牙」），写卡成功后再恢复正常即可长期双待使用。
> 6. **老款纯双实体卡槽国行机型的物理硬件限制**  
>    仅自带物理 `eUICC` 安全芯片的国行机型（如 **国行 iPhone Ai

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Kianuni/Erosion-CN)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Kianuni--Erosion-CN"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "Kianuni--Erosion-CN" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "Kianuni--Erosion-CN"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Kianuni--Erosion-CN");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kianuni--Erosion-CN" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kianuni" AND file.name != "Kianuni--Erosion-CN"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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
> const me = dv.page("Repos/Kianuni--Erosion-CN");
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

> **2026-11-12** — 首次收錄
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

- [[2026-11-12|2026-11-12]] — 首次收錄，1.6k stars
