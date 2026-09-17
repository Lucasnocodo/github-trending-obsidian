---
repo: angusdevgo/IDM_Pro_Tool
url: https://github.com/angusdevgo/IDM_Pro_Tool
owner: angusdevgo
owner_type: User
language: C#
license: MIT
description: "IDM激活与状态维护工具"
homepage: ""
stars: 722
stars_per_day: 120
forks: 182
open_issues: 3
created: 2026-09-10
pushed_at: 2026-09-11
first_seen: 2026-09-16
week: "2026-W38"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v1.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-16
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-09-24"
contributor_count: 1
engagement: "medium"
issue_close_rate: 25
repo_size_kb: 397
readme_length: 4814
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-16"
star_history: "2026-09-16:715,2026-09-17:722"
tags:
  - github
  - "category/other"
  - "lang/c#"
aliases:
  - "IDM_Pro_Tool"
  - "angusdevgo/IDM_Pro_Tool"
---

# IDM_Pro_Tool

**715** stars · **143** stars/天 · 建立 5 天前 · C# · MIT

```dataviewjs
const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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

`個人專案` `v1.1.0`

> [!summary] 一句話摘要
> IDM激活与状态维护工具

## 專案簡介

IDM激活与状态维护工具

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
| Forks | 181 |
| Open Issues | 3 |
| Issue 解決率 | 25% (1 closed) |
| 最後推送 | 2026-09-11 |
| 建立日期 | 2026-09-10 |
| Repo 大小 | 397 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/angusdevgo/IDM_Pro_Tool) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C#" : 99
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@angusdevgo](https://github.com/angusdevgo) | 6 |

**最新版本**：v1.1.0 — V1.1.0 (2026-09-11)

> [!info]- Release Notes
> ### IDM Pro Tool v1.1.0 更新日志
> 
> - 🌟 **新增手动定位 IDM 路径**：支持非系统盘（D盘、E盘等）或绿色便携版 IDM 用户，可通过图形界面文件选择器或 CLI 参数手动指定并持久化 IDMan.exe 路径。
> - 🔍 **全盘多层级智能检测引擎**：
>   1. 优先读取持久化配置 idm_path.cfg；
>   2. 智能读取注册表 HKCU\Software\DownloadManager\ExePath；
>   3. 智能扫描 Windows 32/64位卸载注册表中的安装路径；
>   4. 自动捕获正在运行的 IDMan.exe 进程真实模块路径；
>   5. 自动遍历所有固定磁盘（D:/E:/F:等）常见安装目录；
> - 🖥️ **仪表盘状态增强**：状态栏新增「主控路径」识别来源指示（自动捕获 / 手动指定 / 未找到），支持一键重新定位。
> - 💻 **CLI 新增 -setpath 参数**：支持通过命令行静默指定 IDM 路径并持久化保存。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-10 ~ 2026-09-11）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/angusdevgo/IDM_Pro_Tool/issues/4) | 运行了之后还是会弹注册窗口 | 0 | 3 |
> | [#3](https://github.com/angusdevgo/IDM_Pro_Tool/issues/3) | Virus Detected | 0 | 0 |
> | [#2](https://github.com/angusdevgo/IDM_Pro_Tool/issues/2) | 现在提示假冒的序列号了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> IDM Pro Tool
> 
>   多功能 Internet Download Manager 原生 C# 激活与状态维护套件
> 
>   
>   
>   
>   
>   
>   
> 
>   项目特色 •
>   功能全景 •
>   核心实现原理 •
>   快速开始 •
>   命令行模式 •
>   验证版本与指纹 •
>   构建指南 •
>   免责声明
> 
> ---
> 
> ## 🌟 项目特色
> 
> - 🚀 **零外部依赖，系统原生直驱**  
>   无需安装任何 .NET SDK、Visual Studio 或繁重依赖，仅使用 Windows 系统自带的 `csc.exe` 即可毫秒级编译，产物仅 200 KB 左右。
> - 🎨 **纯代码构建的精美 WPF 界面**  
>   零 XAML 文件，全代码手工构建高精度矢量界面，集成 Windows DWM 沉浸式暗黑标题栏，原生支持高分屏（High DPI）自适应渲染。
> - 🛡️ **严格的字节级安全防护机制**  
>   打补丁前严格比对目标机器上的 `Expected` 原始机器码，版本或指纹不符自动中断并安全回滚，杜绝改坏 `IDMan.exe`。
> - 💾 **无损原子级安全备份**  
>   首次修补时自动建立 `IDMan.exe.BAK` 原始母版备份，仅当备份不存在时创建，确保回滚点始终为官方最纯净原版。
> - ⚡ **多维度激活机制集成**  
>   集成「底层二进制修补」、「Windows ACL 永久冻结试用」与「个性化授权登记」三大主流策略，满足不同场景下的使用与测试需求。
> 
> ---
> 
> ## 📋 功能全景
> 
> ### 1. 核心授权模式 (Core Modes)
> 
> | 模式 | 运行机制 | 适用场景 |
> | :--- | :--- | :--- |
> | 🔥 **模式一：极速深度解锁** | 修补 `IDMan.exe` 底层 18 处 / 31 字节指令，剥离数字签名，并写入终身授权登记信息。 | 追求彻底离线激活、解除所有限制的用户。 |
> | ❄️ **模式二：永久冻结试用期** | 通过 Windows ACL 精确锁定注册表 CLSID 键与时间戳，固定锁定 30 天试用；不修改任何二进制。 | 需要保持原版哈希、支持官方在线静默升级的用户。 |
> | 💎 **模式三：个性化授权登记** | 自定义登记姓名与邮箱（支持一键生成随机身份），自动写入系统注册表并联动底层解锁。 | 需要自定义个人专属软件授权展示界面的用户。 |
> | 🔄 **模式四：全量清理出厂重置** | 清理系统内 CLSID 试用标记、黑名单特征项及注册表残留，重置为刚安装时的纯净状态。 | 解决弹窗异常、状态混乱或准备重装测试。 |
> | ♻️ **一键还原官方原版** | 一键无缝从 `IDMan.exe.BAK` 恢复原版主程序，并抹除注册项，还原为未注册评估状态。 | 快速回滚至初始状态。 |
> 
> ### 2. 高级安全与策略盾牌 (Security & Shields)
> 
> - **🛡️ Hosts 验证盾牌**：智能向系统 Hosts 文件添加/移除 `tonec.com`、`registeridm.com` 等 8 组关键验证服务器的 `127.0.0.1` 回环映射，从网络层截断黑名单检测与序列号遥测。
> - **⚙️ 官方更新策略控制**：一键切换 `CheckUpdtVM` 策略键，禁止烦人的更新弹窗，或按需重新放行。
> - **🧰 注册表与路径百宝箱**：
>   - **📍 手动定位 IDM 路径**：完美支持非系统盘（D盘、E盘等）或便携式 IDM 安装路径，支持文件选择对话框一键定位、多盘符智能轮询探测与永久记忆
>   - 一键直达 IDM 程序根目录
>   - 一键唤醒并自动跳转至注册表项 `HKEY_CURRENT_USER\Software\DownloadManager`
>   - 一键将当前所有 IDM 注册表配置完整导出至桌面备忘（`IDM_Reg_Backup.reg`）
> - **⚡ 进程控制**：支持一键安全终止、唤醒或重启 IDM 主程序。
> 
> ---
> 
> ## 🔬 核心实现原理
> 
> ```
> [原始 IDMan.exe] ──> [哈希/字节校验] ──> [备份 IDMan.exe.BAK]
>                              │
>                              ├──> 1. 精准修补 18 处 / 31 字节机器指令
>                              ├──> 2. 剥离 PE 证书目录 + 截断尾部 10,608 字节签名
>                              ├──> 3. 重算并修复 PE Checksum 校验和
>                              └──> 4. 抹除 Serial 伪键，写入干净的授权信息
> ```
> 
> ### 1. 拒绝假序列号弹窗的科学逻辑
> IDM 会对注册表中的 `Serial` 键值执行严苛的非对称公钥校验，伪造任何假序列号都会触发弹窗提示「IDM 是使用假冒序列号注册的」。  
> **正确的激活解法**：
> 1. **删除** `Serial` 键值；
> 2. 清理 `scansk`、`tvfrdt`、`radxcnt`、`ptrk_scdt`、`LastCheckQU`、`scTime`、`NextCheck`、`BList`、`md5pks` 等特征遥测键；
> 3. 仅写入 `FName` / `LName` / `Email`。
> 
> ### 2. PE 签名剥离与校验和校正
> 修改二进制指令后，官方的 Authenticode 数字签名自然失效，会导致 Windows 驱动或杀毒软件报警签名损坏。  
> 本工具直接解析 PE 文件头：
> - 清除 `IMAGE_DIRECTORY_ENTRY_SECURITY` 的 `VirtualAddress` 与 `Size`；
> - 移除物理追加在文件尾部的 10,608 字节签名证书块（文件由 6,199,664 截断为 6,189,056 字节）；
> - 使用微软标准算法重新计算 PE Checksum，确保二进制结构规范合法。
> 
> ---
> 
> ## 🚀 快速开始
> 
> ### 方式一：直接运行成品
> 
> 1. 从 [Releases 页面](https://github.com/angusdevgo/IDM_Pro_Tool/releases) 下载最新版本的压缩包；
> 2. 解压后确保 `app_icon.png` 与 `IDM_Pro_Tool.exe` 位于同一文件夹；
> 3. 右键选择 **以管理员身份运行** `IDM_Pro_Tool.exe`；
> 4. 在图形界面中选择您需要的功能并点击执行。
> 
> ### 方式二：源码编译
> 
> 只需机器拥有 Windows 原生环境（Win10 / Win11 自带 .NET 4.x），克隆仓库后双击 `build.bat`：
> 
> ```powershell
> # 1. 克隆本仓库
> git clone https://github.com/angusdevgo/IDM_Pro_Tool.git
> cd IDM_Pro_Tool
> 
> # 2. 运行构建脚本
> .\build.bat
> ```
> 
> > **构建提示**：`build.bat` 内部通过 `%WINDIR%\Microsoft.NET\Framework64\v4.0.30319\csc.exe` 进行本地编译，耗时仅约 1~2 秒。
> 
> ---
> 
> ## 💻 命令行模式 (CLI Support)
> 
> 工具支持无界面静默运行，非常便于集成到自动化运维、装机维护脚本或 CI/CD 流水线中：
> 
> ```powershell
> # 执行模式一：极速底层解锁
> IDM_Pro_Tool.exe -patch
> 
> # 执行模式三：自定义身份登记
> IDM_Pro_Tool.exe -register "VIP_User" "vip@domain.com"
> 
> # 一键还原为官方原版
> IDM_Pro_Tool.exe -restore
> 
> # 手动指定 IDM 安装路径（针对非 C 盘或自定义安装目录）
> IDM_Pro_Tool.exe -setpath "D:\Software\Internet Download Manager"
> 
> # 查看命令行帮助
> IDM_Pro_Tool.exe -help
> ```
> 
> ---
> 
> ## 📂 项目结构
> 
> ```text
> IDM_Pro_Tool/
> ├── src/
> │   ├── Program.cs          # 核心代码（单文件 ~3000 行，集成 WPF 矢量 UI 与所有核心引擎）
> │   ├── app.ico             # 包含多尺寸编码（16~256px）的应用程序原生图标
> │   ├── app_icon.png        # 256x256 高清运行时矢量展示图
> │   └── app.manifest        # Windows UAC 管理员提权与 DPI 感知清单
> ├── build.bat               # 原生批处理快速构建脚本（自动完成编译与资源归档）
> ├── IDM_Pro_Tool.exe        # 编译生成的目标 x64 GUI 可执行程序
> ├── app_icon.png            # 运行时窗口读取图标
> ├── LICENSE                 # MIT 开源许可证
> └── README.md               # 详尽的项目说明文档
> ```
> 
> ---
> 
> ## 🔍 验证版本与指纹
> 
> 本工具针对以下官方基准版本经过完整测试与哈希对齐：
> 
> | 校验项 | 基准原版 (Original) | 修补剥离后 (Patched) |
> | :--- | :--- | :--- |
> | **目标文件** | `IDMan.exe` (v6.43.10.2) | `IDMan.exe` |
> | **文件大小** | 6,199,664 字节 | 6,189,056 字节 |
> | **SHA-256** | `03CC62E9...D16D607C` | `E0C308B1...D166A72183` |
> 
> ---
> 
> ## ⚠️ 免责声明 (Disclaimer)
> 
> 1. 本项目所提供的所有源码与可执行程序，**仅供逆向工程、Windows 内部机制、PE 文件结构以及 WPF 编程等技术学习与安全研究之用**。
> 2. 请在下载测试后的 24 小时内自行删除。严禁将本项目及其产物用于任何商业用途或非法侵权行为。
> 3. 如果您长期使用 Internet Download Manager (IDM)，请前往 [官方正版网站](https://www.internetdownloadmanager.com/) 购买正版软件授权，支持优秀的软件开发者。
> 4. 使用本工具产生的任何软件冲突或不可预知后果，由使用者自行承担，与本项目作者无关。
> 
> ---
> 
> ## 📄 开源许可证
> 
> 本项目基于 [MIT License](LICENSE) 协议开源。欢迎提交 Issue 或 Pull Request 完善支持！
>  
> ## 🤝 社区与支持
> - **LINUX DO 社区**: [https://linux.do](https://linux.do)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/angusdevgo/IDM_Pro_Tool)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "angusdevgo--IDM_Pro_Tool"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "angusdevgo--IDM_Pro_Tool" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W38" AND file.name != "angusdevgo--IDM_Pro_Tool"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "angusdevgo--IDM_Pro_Tool" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "angusdevgo" AND file.name != "angusdevgo--IDM_Pro_Tool"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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
> const me = dv.page("Repos/angusdevgo--IDM_Pro_Tool");
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

> **2026-09-16** — 首次收錄
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

- [[2026-09-17|2026-09-17]] — 再次上榜，722 stars
- [[2026-09-16|2026-09-16]] — 首次收錄，715 stars
