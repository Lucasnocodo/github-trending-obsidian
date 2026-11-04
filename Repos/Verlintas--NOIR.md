---
repo: Verlintas/NOIR
url: https://github.com/Verlintas/NOIR
owner: Verlintas
owner_type: User
language: Kotlin
license: MIT
description: "手机隐私审计：用 adb 扫出 Android 应用的权限、上报端点与数据流向，并给出可回滚的处置。Desktop Android leak audit: permissions, endpoints, data flows, reversible fixes."
homepage: "https://verlintas.dev/noir/"
stars: 1835
stars_per_day: 612
forks: 141
open_issues: 1
created: 2026-10-31
pushed_at: 2026-11-03
first_seen: 2026-11-04
week: "2026-W45"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.2.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-07"
contributor_count: 2
engagement: "low"
issue_close_rate: 80
repo_size_kb: 1813
readme_length: 9074
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-04"
star_history: "2026-11-04:1835"
tags:
  - github
  - "category/other"
  - "lang/kotlin"
  - "topic/adb"
  - "topic/android"
  - "topic/android_privacy"
  - "topic/android_security"
  - "topic/android_tools"
aliases:
  - "NOIR"
  - "Verlintas/NOIR"
---

# NOIR

**1.8k** stars · **612** stars/天 · 建立 3 天前 · Kotlin · MIT

```dataviewjs
const me = dv.page("Repos/Verlintas--NOIR");
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

`v0.2.5`

`adb` `android` `android-privacy` `android-security` `android-tools` `apk-analysis` `bloatware` `cli` `cross-platform` `debloat` `jadx` `kotlin` `kotlin-multiplatform` `privacy` `privacy-tools` `security-audit` `static-analysis` `telemetry` `terminal-ui` `tui`

> [!summary] 一句話摘要
> 手机隐私审计：用 adb 扫出 Android 应用的权限、上报端点与数据流向，并给出可回滚的处置。Desktop Android leak audit: permissions, endpoints, data flows, reversible fixes.

## 專案簡介

手机隐私审计：用 adb 扫出 Android 应用的权限、上报端点与数据流向，并给出可回滚的处置。Desktop Android leak audit: permissions, endpoints, data flows, reversible fixes.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Verlintas--NOIR");
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
> const me = dv.page("Repos/Verlintas--NOIR");
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
| Forks | 141 |
| Open Issues | 1 |
| Issue 解決率 | 80% (4 closed) |
| 最後推送 | 2026-11-03 |
| 建立日期 | 2026-10-31 |
| 官方網站 | [Link](https://verlintas.dev/noir/) |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Verlintas/NOIR) |
| Topics | `adb` `android` `android-privacy` `android-security` `android-tools` `apk-analysis` `bloatware` `cli` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Kotlin" : 67
>     "HTML" : 16
>     "JavaScript" : 9
>     "CSS" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Verlintas](https://github.com/Verlintas) | 18 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 7 |

**最新版本**：v0.2.5 (2026-11-02)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/Verlintas/NOIR/compare/v0.2.4...v0.2.5

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-01 ~ 2026-11-03）
> **活躍天數** 3 天 · **最新 commit** docs: add AtomGit mirror link and badge

## README 摘錄

> [!info]- 展開查看原文 README
> ```
>   ███╗   ██╗ ██████╗ ██╗██████╗
>   ████╗  ██║██╔═══██╗██║██╔══██╗
>   ██╔██╗ ██║██║   ██║██║██████╔╝
>   ██║╚██╗██║██║   ██║██║██╔══██╗
>   ██║ ╚████║╚██████╔╝██║██║  ██║
>   ╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═╝
> ```
> 
> # NOIR
> 
> [](https://github.com/Verlintas/NOIR/actions/workflows/build.yml)
> [](https://github.com/Verlintas/NOIR/releases)
> [](LICENSE)
> 
> [](https://atomgit.com/Verlintas/NOIR)
> 
> **把「这台手机到底能泄露什么」变成一份可复现的报告。**
> 
> NOIR 是一个跑在电脑上的审计工具，通过 `adb` 读取已连接 Android 设备的应用清单、权限和 APK 里的网络端点，给出分类、风险评分和可执行的处置建议。它也可以在需要时调用 `jadx` 对单个应用做反编译和关键字检索。
> 
> > 定位：**审计与自我防护**。面向自己的设备、自己的应用、已授权的安全研究。
> 
> **官网 / Website:** https://verlintas.dev/noir/ · [中文](https://verlintas.dev/noir/zh/)
> 
> **AtomGit 镜像 / Mirror:** https://atomgit.com/Verlintas/NOIR
> 
> ---
> 
> ## 它做什么
> 
> 1. **盘点**：列出所有「有网络权限 + 敏感权限」的应用，以及它们各自拿到了什么。
> 2. **抽取端点**：在设备端用 `unzip + strings` 从每个 APK 的 dex 里提取 URL，只回传几 KB，不把整包拉回电脑。
> 3. **分类与打分**：按包名和域名识别厂商（Xiaomi / Google / 腾讯 / 高德 …）与类别（遥测、广告、定位、输入法 …），结合权限和上报端点计算风险分。
> 4. **数据关联**：把权限翻译成"能拿到什么数据"（位置/通讯录/短信/通话/麦克风/相机/屏幕/应用列表/设备标识/文件/日历/账号），再和上报域名配对，得出"哪类数据可能流向哪里"。
> 5. **共享 UID**：识别 `android.uid.system` 这类共享用户，列出哪些包实际上共享同一套权限并集。
> 6. **清单层**：解析 `AndroidManifest.xml` 二进制 AXML，找出没有权限保护的导出组件、明文流量、备份、debuggable、targetSdk。
> 4. **给建议**：区分「可安全自动执行」「需人工确认」「不建议动」，并为每条动作生成回滚命令。
> 5. **必要时深挖**：`deep` 会把单个 APK 拉到本地，用 `jadx` 反编译后检索 `Runtime.exec`、`setApplicationEnabledSetting`、`DexClassLoader`、`MediaProjection` 等高风险调用。
> 
> ## 它不做什么
> 
> - 不联网、不上传任何数据、不需要账号。
> - 不修改系统分区，不需要 root。
> - 不会自动卸载任何东西，除非你显式加 `--aggressive`。
> 
> ---
> 
> ## 第一次运行
> 
> ```bash
> noir
> ```
> 
> 不带参数会进入向导：
> 
> 1. 检查 `adb`，没有就**问你要不要自动下载**（`~/.noir/tools`）
> 2. 检查设备，没有就打印**开发者模式 / USB 调试的开通步骤**，然后**等你插线**（最多 180 秒）
> 3. 问一句「开始扫描?」，扫完直接出仪表盘
> 4. 问一句「执行这 19 条安全处置?」，`y` 就执行，并写好回滚文件
> 
> 全程只会问两三个 y/n，其余都是自动的。
> 
> ## 环境自检
> 
> ```bash
> noir doctor
> ```
> 
> ```
> NOIR doctor
>   platform  Mac OS X aarch64
>   java      17.0.19
>   adb       /opt/homebrew/.../platform-tools/adb
>             Version 37.0.1-15733141
>   device    178b0d2f  device  2509FPN0BC
>   jadx      /opt/homebrew/bin/jadx
> ```
> 
> ```bash
> noir setup          # 缺什么下什么
> noir setup --yes    # 不询问，适合脚本
> ```
> 
> ## 出现问题时
> 
> 所有错误都会带「怎么办」，而不是抛异常栈：
> 
> ```
> ╭─ ERROR ──────────────────────────────────────────────────────────╮
> │ 指定的 adb 不存在：/nonexistent/adb                              │
> ├──────────────────────────────────────────────────────────────────┤
> │ 检查路径，或运行 noir setup 自动安装。                           │
> ╰──────────────────────────────────────────────────────────────────╯
> ```
> 
> 没有设备时给出的是可执行步骤：
> 
> ```
> ╭─ 没有检测到设备 ──────────────────────────────────────────────╮
> │  1. 打开开发者模式                                           │
> │     小米 / HyperOS：设置 → 我的设备 → 全部参数 → 连点「MIUI 版本」7 次
> │  2. 开启 USB 调试：设置 → 系统 → 开发者选项 → USB 调试        │
> │  3. 插线后手机弹「允许 USB 调试吗？」→ 勾选「一律允许」        │
> │  4. 还不行就换一根数据线（很多线只能充电）                    │
> ╰──────────────────────────────────────────────────────────────╯
> ```
> 
> 已连接但没授权时，会单独提示「撤销 USB 调试授权后重插」。
> 
> ## 支持平台
> 
> | 系统 | 状态 |
> |---|---|
> | macOS (Intel / Apple Silicon) | ✅ |
> | Windows 10 / 11 | ✅ |
> | Debian / Ubuntu | ✅ |
> 
> 依赖：
> 
> - **JDK 17+**
> - **Android platform-tools**（`adb`）
> - **jadx**（仅 `deep` 命令需要）
> 
> 程序会自动在常见安装位置查找 `adb` 和 `jadx`；找不到时可以用 `--adb` / `--jadx` 指定。
> 
> ```bash
> # macOS
> brew install --cask android-platform-tools jadx
> 
> # Debian / Ubuntu
> sudo apt install adb
> # jadx: https://github.com/skylot/jadx/releases
> 
> # Windows (scoop)
> scoop install adb jadx
> ```
> 
> ---
> 
> ## 安装
> 
> **方式一：下载即用（推荐）**
> 
> 到 [Releases](https://github.com/Verlintas/NOIR/releases) 下载对应平台的 portable 包：
> 
> ```
> noir-v0.1.1-macOS-portable.zip
> noir-v0.1.1-Windows-portable.zip
> noir-v0.1.1-Linux-portable.zip
> SHA256SUMS.txt
> ```
> 
> 解压后**双击启动器**即可，包内自带运行时，**不需要安装 Java**：
> 
> | 系统 | 双击这个 | 如果被拦 |
> |---|---|---|
> | macOS | `Start NOIR.command` | 右键 → 打开；或 `xattr -dr com.apple.quarantine "Start NOIR.command" NOIR.app` |
> | Windows | `Start NOIR.bat` | SmartScreen → 更多信息 → 仍要运行（批处理会切到 UTF-8 并调用包内 JRE） |
> | Linux | `Start-NOIR.sh` | 先 `chmod +x Start-NOIR.sh`，或在终端执行 |
> 
> 启动器会打开一个终端窗口跑完向导，并在结束时停住（不会一闪而过）。
> 
> `adb` 和 `jadx` 不在包里——首次运行会询问是否自动下载到 `~/.noir/tools`。
> 
> **方式二：从源码构建**
> 
> ```bash
> git clone https://github.com/Verlintas/NOIR
> cd NOIR
> ./gradlew :cli:installDist
> ./cli/build/install/noir/bin/noir --about
> ```
> 
> ## 构建
> 
> ```bash
> git clone  && cd NOIR
> ./gradlew :cli:installDist
> ```
> 
> 产物：
> 
> ```
> cli/build/install/noir/bin/noir        # macOS / Linux
> cli/build/install/noir/bin/noir.bat    # Windows
> ```
> 
> 也可以直接：
> 
> ```bash
> ./gradlew :cli:run --args="devices"
> ```
> 
> ---
> 
> ## 界面
> 
> 真机输出（macOS Terminal）：渐变 logo、CJK 对齐的表格、按风险着色的分数、
> 每处理完一个 APK 就刷新一次的进度条。
> 
> `noir ui` 会把结果渲染成一块等宽仪表盘；颜色和边框都会按终端能力自动降级：
> 
> - `--ascii`：纯 ASCII 边框，给旧版 Windows 控制台
> - `--no-color` / `--color`：关闭或强制 ANSI 颜色（默认按是否为 TTY 自动判断）
> - `--quiet`：只留仪表盘，不打印扫描过程
> - `--no-clear`：不清屏（方便把输出重定向到文件）
> 
> ## 用法
> 
> ```bash
> noir --about              # 它是什么、会写什么、许可
> noir --version
> noir devices
> noir scan                 # 全量扫描，输出 JSON / Markdown / 域名清单
> noir ui                   # 扫描并渲染仪表盘
> noir auto                 # 扫描 + 分类 + 生成处置计划（dry-run）
> noir auto --apply         # 执行安全的 appops 动作（可回滚）
> noir auto --apply --aggressive   # 额外卸载被标记的用户应用
> noir deep com.example.app # 拉包 + jadx + 关键字检索
> noir block com.example.app        # 打印处置命令
> noir block com.example.app --apply
> ```
> 
> 常用参数：
> 
> | 参数 | 说明 |
> |---|---|
> | `--serial ` | 指定设备 |
> | `--out ` | 输出目录（默认 `noir-out`） |
> | `--min ` | 只保留分数 ≥ N 的应用 |
> | `--limit ` | 最多输出 N 条 |
> | `--only ` | 只扫描匹配的包名，例如 `--only 'com\.miui\.'` |
> | `--adb ` / `--jadx ` | 手动指定工具路径 |
> | `--yes` | 自动化场景下跳过确认 |
> 
> ## DeepScan：一条命令反编译 + 处置
> 
> ```bash
> noir deepscan                  # 反编译风险最高的 15 个应用
> noir deepscan --top 30         # 更多
> noir deepscan --all            # 全部被标记应用（慢，占磁盘）
> noir deepscan --jobs 4         # 并行 jadx 数量
> ```
> 
> 流程是：扫描 → 按风险排序 → 逐个 `adb pull` + `jadx` → 统计代码级信号
> （`Runtime.exec`、`DexClassLoader`、`setApplicationEnabledSetting`、
> `enabled_accessibility_services`、`MediaProjection`、`SystemProperties.set`、
> 短信/设备标识、WebView 桥、无障碍/通知监听/设备管理员 …）→ 解析清单
> （导出组件、明文流量、备份、debuggable）→ 识别 SDK（Umeng/Firebase/AppsFlyer…）
> → 输出 `deepscan.md` / `deepscan.tsv` → 询问是否清理。
> 
> ```bash
> noir deepscan --apply          # 分析后执行安全 appops
> noir deepscan --apply --purge  # 再逐个确认卸载高风险用户应用
> ```
> 
> 反编译结果按 `包名 + APK 路径` 缓存，第二次跑同一个应用会直接复用。
> 
> ## 输出
> 
> ```
> noir-out/
> ├── report.json               # 结构化结果（应用、权限、端点、建议）
> ├── report.md                 # 人类可读报告
> ├── domains-trackers.txt      # 统计/广告/崩溃上报，可整份导入
> ├── domains-other.txt         # 用途不明，导入前逐条判断
> ├── domains-functional.txt    # 推送/登录/更新/支付/商店/云同步，禁止拦截
> ├── domains.txt               # 等于 trackers（兼容旧脚本）
> ├── plan.txt                  # 本次可执行的 appops
> └── rollback.txt              # 回滚命令
> ```
> 
> ## 隐私
> 
> - 工具本身**不联网**：没有遥测、没有版本检查、没有崩溃上报
> - 扫描结果只写在你指定的 `--out` 目录
> - 唯一的外部请求发生在 `noir setup`（下载 adb/jadx）和 `noir deep`（jadx 是本地进程）
> - 报告里可能包含你设备上的包名和端点，分享前自行检查
> 
> ## 缓存
> 
> 扫描结果按 `包名 + APK 路径` 缓存在 `~/.noir/endpoints.tsv`。应用更新后路径变化会自动重新分析，重复扫描通常只需几秒。
> 
> ---
> 
> ## 架构
> 
> ```
> adb ──▶ pm / dumpsys ──▶ Dumpsys parser ──┐
>                                           ├─▶ cache (pkg + apk path)
> adb ──▶ unzip/strings ──▶ endpoints ──────┘        │
>                                                    ▼
>                                           Classifier ─▶ score ─▶ Advisor
>                                                    │              │
>                                                    ▼              ▼
>                                               report.json    plan.txt
>                                               report.md      rollback.txt
>                                                    │
>                                                    ▼
>                                                  Tui / CLI
> ```
> 
> `deep` 走另一条支线：`adb pull` → `jadx` → 源码 grep。
> 
> ## 设计取舍
> 
> - **端点抽取在设备端完成**：`adb shell` 内跑 `unzip | strings | grep`，避免把几百个 APK 拉回电脑。设备缺少 `unzip`/`strings` 时自动退化为本地解析。
> - **共享 UID 特殊处理**：Android 上 `android.uid.system` 下的应用（常见 50+ 个）权限记录在 `dumpsys package` 尾部的 `Shared users` 段。解析器会把这些权限合并回每个包，否则最该被看见的应用反而会消失。
> - **建议分级**：只有 appops 级别的动作标记为可自动执行；卸载必须显式开启。
> - **无遥测**：程序不包含任何上报逻辑。
> 
> ## 常见问题
> 
> **需要 root 吗？**
> 不需要。全部通过 `adb` 的 shell 权限完成；卸载只是 `--user 0` 级别，APK 仍在系统分区。
> 
> **会改坏手机吗？**
> 默认完全只读。`--apply` 只改 app-ops，每条都能用 `default` 还原，`rollback.txt` 会写出来。
> `noir block

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Verlintas/NOIR) · [官方網站](https://verlintas.dev/noir/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Verlintas--NOIR"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Kotlin" AND file.name != "Verlintas--NOIR" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "Verlintas--NOIR"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Verlintas--NOIR");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Verlintas--NOIR" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Verlintas" AND file.name != "Verlintas--NOIR"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Verlintas--NOIR");
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
> const me = dv.page("Repos/Verlintas--NOIR");
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
> const me = dv.page("Repos/Verlintas--NOIR");
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
> const me = dv.page("Repos/Verlintas--NOIR");
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
> const me = dv.page("Repos/Verlintas--NOIR");
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

> **2026-11-04** — 首次收錄
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

- [[2026-11-04|2026-11-04]] — 首次收錄，1.8k stars
