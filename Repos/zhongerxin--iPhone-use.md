---
repo: zhongerxin/iPhone-use
url: https://github.com/zhongerxin/iPhone-use
owner: zhongerxin
owner_type: User
language: Python
license: MIT
description: "让 Codex 通过 USB 操作真实 iPhone：引导安装、App 自动化、实时屏幕与截图回退。"
homepage: ""
stars: 2129
stars_per_day: 710
forks: 210
open_issues: 11
created: 2026-10-06
pushed_at: 2026-10-10
first_seen: 2026-10-10
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.3.8"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-10
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 44662
readme_length: 6285
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-10"
star_history: "2026-10-10:2129"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "iPhone-use"
  - "zhongerxin/iPhone-use"
---

# iPhone-use

**2.1k** stars · **710** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/zhongerxin--iPhone-use");
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

`個人專案` `v0.3.8`

> [!summary] 一句話摘要
> 让 Codex 通过 USB 操作真实 iPhone：引导安装、App 自动化、实时屏幕与截图回退。

## 專案簡介

让 Codex 通过 USB 操作真实 iPhone：引导安装、App 自动化、实时屏幕与截图回退。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
| Forks | 210 |
| Open Issues | 11 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-10 |
| 建立日期 | 2026-10-06 |
| Repo 大小 | 43.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zhongerxin/iPhone-use) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 50
>     "HTML" : 44
>     "JavaScript" : 3
>     "TypeScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zhongerxin](https://github.com/zhongerxin) | 42 |

**最新版本**：v0.3.8 — iPhone Use 0.3.8 (2026-10-09)

> [!info]- Release Notes
> 新增简短 AirDrop 指引：手机中的图片、视频或其他文件，通过共享菜单传到当前 Mac，再到下载目录找到文件直接使用。
> 
> 同时发布此前已提交的启动流程改进：首次使用先 setup 检查并复用或启动服务，再取得 READY；启动等待支持有界查询，减少往返回合。
> 
> 验证：Python 回归测试、31 项 widget 测试、构建、插件包校验与 MCP 冒烟检查。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-08 ~ 2026-10-09）
> **活躍天數** 2 天 · **最新 commit** Release 0.3.8 with concise AirDrop file transfer guidance

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/zhongerxin/iPhone-use/issues/19) | [求助] USB 控制成功，Wi-Fi 下 WDA 与官方 XCTest 模板均退出 code 74（iOS 27.0. | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # iPhone Use
> 
> **中文** · [English](README.en.md)
> 
> 让 Codex 通过 USB 操作你的真实 iPhone。用自然语言描述任务，Codex 就能打开 App、读取页面、点击、滚动、输入文字、整理列表，并在侧边栏展示手机屏幕。
> 
> iPhone Use 使用 [WebDriverAgent](https://github.com/appium/WebDriverAgent)（WDA）与 iPhone 通信，包含本地 MCP 服务、安装与使用技能，以及实时屏幕 widget。它优先复用现有连接与构建；控件定位失败时，指导模型查看截图并尝试坐标点击。
> 
> 插件默认向独立的 PostHog 项目发送匿名使用统计，包括启动、工具调用、连接状态、耗时和错误类别。使用随机安装标识，不上传手机画面、输入内容或设备标识。设置 `IPHONE_USE_ANALYTICS=0` 或 `DO_NOT_TRACK=1` 并重启 MCP 服务可关闭。详见 [埋点与分析说明](ANALYTICS.md)。
> 
> **使用前，需要先在你自己的 iPhone 上安装、签名并启动 WDA Runner。** WDA 是运行在手机上的执行服务；下面的提示词和 setup 流程可以让 Codex 协助完成首次安装，已有健康的 WDA 可直接复用。
> 
> ## 用一段提示词让 Codex 安装
> 
> 将下面这段话复制到本机 Codex：
> 
> ```text
> 请帮我安装和配置 iPhone Use：
> https://github.com/zhongerxin/iPhone-use
> 
> 先读取仓库 README 和安装脚本，检查本机 Codex CLI、Python、Node.js、npm、
> 完整 Xcode，以及通过 USB 连接的 iPhone。把项目放到合适的本机目录，
> 运行 sh scripts/install.sh 安装插件。
> 
> 如果当前聊天还没有加载新工具，明确告诉我重连或新开聊天后继续。
> 工具可用后读取 iphone-use-setup 技能，检查现有配置，优先复用已有 WDA。
> 首次配置时发现我的设备，使用我自己的 Apple 开发团队和可签名 bundle ID，
> 获取固定版本 WDA、配置签名、构建并启动，直到 pua_ready 返回 ready=true，
> 然后打开手机屏幕。不要照搬作者的设备标识或签名信息。
> 
> 缺少依赖时说明具体缺项并帮助安装。Apple 账号登录、设备信任、开发者模式
> 或解锁需要我操作时，告诉我明确步骤，等我完成再继续。
> ```
> 
> 安装插件后，当前聊天可能需要重新连接才能加载工具，流程可在重连后继续。Apple 账号登录、设备信任、开发者模式及手机解锁仍需本人在系统界面完成。
> 
> 仓库目前为私有，需要有 GitHub 访问权限，或者使用已取得的源代码包。
> 
> ## 安装依赖
> 
> | 依赖 | 用途 |
> | --- | --- |
> | macOS 与 Codex 桌面端 / CLI | 安装本地插件、运行 MCP 服务与屏幕侧边栏 |
> | 完整 Xcode，已完成首次启动配置 | 编译、签名、部署和运行 WDA；仅 Command Line Tools 不够 |
> | 可在 Xcode 中使用的 Apple 账号和开发团队 | 签名手机端 WDA Runner |
> | USB 连接的真实 iPhone | 信任此 Mac，开启设备要求的开发者模式，安装与启动期间保持解锁 |
> | Python 3.9+ | 运行 MCP 服务；Python 端使用标准库 |
> | Node.js 20.19+、22.12+ 或 24+，npm 10+ | USB 转发与屏幕流；支持范围以项目 engines 和 doctor 检查为准 |
> 
> Xcode 需要支持手机当前的 iOS 版本。无需越狱，也无需单独启动 Appium Server。WDA 固定使用已验证的 16.14.0 提交，下载、依赖安装、签名和构建由 setup 流程管理。
> 
> ### 先在自己的 iPhone 上安装并启动 WDA
> 
> 手机端使用 [Appium 维护的 WebDriverAgent](https://github.com/appium/WebDriverAgent)。首次使用时，须通过 Xcode 用你自己的 Apple 账号与开发团队签名、安装并启动 `WebDriverAgentRunner`。
> 
> 推荐使用上面的安装提示词和下面的 `iphone-use-setup` 流程：Codex 获取本项目固定版本的 WDA，配置你的设备和签名，再完成构建、部署与启动；需要你完成 Apple 登录、设备信任、开发者模式或解锁时，会提示具体步骤。
> 
> 如需在 Xcode 手动处理：
> 
> 1. 用 USB 连接自己的 iPhone，信任这台 Mac，按系统要求开启开发者模式，并在 Xcode 中配置自己的 Apple 账号。
> 2. 打开获取的 WDA 源码中的 `WebDriverAgent.xcodeproj`，选择 `WebDriverAgentRunner` scheme 和自己的 iPhone；在 Runner target 的 **Signing & Capabilities** 中选择自己的 Team 与可签名的 Bundle Identifier。
> 3. 使用 **Product → Test** 构建、安装并运行 WDA Runner，按手机上的实际提示完成信任。运行测试会启动 WDA 服务；安装后仍需要该服务处于运行状态。
> 
> 本对话首次使用先调用 `pua_setup(action="status")`，复用健康服务或活动工作；缺少服务才 start 一次。start 默认最多等待 20 秒，超时后按同一 job 查询，不重复启动。服务就绪后，以 `pua_ready` 返回 `ready=true` 为准，再开始手机任务。设备与签名要求可参考 [Appium 真机准备说明](https://appium.github.io/appium-xcuitest-driver/latest/getting-started/device-setup/)。
> 
> ### 安装插件
> 
> ```sh
> git clone https://github.com/zhongerxin/iPhone-use.git
> cd iPhone-use
> sh scripts/install.sh
> ```
> 
> 脚本验证并暂存源码，通过 Codex CLI 注册本地 marketplace、安装插件和技能，并将安装缓存中的服务注册为标准 MCP `iphone_use`。插件与标准配置使用同一命名空间，避免重复工具注册。
> 
> 源代码包解压后，也可以在包目录运行同一个安装脚本。安装完成后重连或新开 Codex 聊天。
> 
> ### 连接自己的 iPhone
> 
> 在新聊天中启用 **iPhone Use**，输入：
> 
> > 用 iphone-use-setup 帮我配置通过 USB 连接的 iPhone，安装并启动 WDA，验证 READY，然后显示手机屏幕。
> 
> 技能引导 Codex 完成诊断、设备发现、签名配置、获取 WDA、后台构建与启动。已配置过的设备会复用配置和构建，正常任务不需要每次重装。`pua_ready` 返回 `ready=true` 后才开始手机任务。
> 
> ## 可以做什么
> 
> | 功能 | 示例 |
> | --- | --- |
> | App 导航与操作 | 打开目标 App，进入搜索、详情、设置或草稿页面 |
> | 页面读取 | 获取紧凑控件树、文字、位置和实际截图 |
> | 点击与手势 | 按控件或坐标点击，滑动和拖动，等待页面目标出现 |
> | 中文与长文本输入 | 一次提供完整 Unicode 文字，长文本分段输入并支持续传 |
> | 连续任务 | 将已知点击、输入、等待等步骤组成一次 batch，减少模型往返 |
> | 列表搜索与采集 | 有界滚动查找、重叠读取与去重，返回覆盖边界 |
> | 可见失败恢复 | 控件被遮挡、未聚焦或树不完整时，查看新截图并重新选择点击位置 |
> | 实时手机屏幕 | iPhone 外壳、设备状态、操作光效与清楚可见的点击 / 拖动提示 |
> | 连接恢复 | 复用后台启动工作、重建失效会话；用户可点击刷新重新连接预览 |
> 
> 示例提示词：
> 
> ```text
> 用 iPhone Use 打开备忘录，新建一条草稿，输入下面的中文内容，核对文字后保留。
> 
> 打开目标 App，搜索这个名称，读取前几项结果并整理给我。
> 
> 读取这个列表，分段滚动并去重，说明已经覆盖的范围和还未确认的部分。
> ```
> 
> 输入与提交分开，工具默认不提交文字。模型需要核对关键页面、接收人、数量和最终结果。密码、验证码、Face ID 等认证交给用户完成，接管期间可以暂停预览。
> 
> 屏幕预览在同一聊天中复用已有 widget。底部提供刷新、主屏幕和截图按钮；无图像时保留黑色屏幕的 iPhone 外壳，屏幕内仅显示对应状态图标，顶部显示连接或暂停状态。预览供用户观看，模型定位仍以工具返回的实际图像或控件为依据。
> 
> ## 技术亮点
> 
> - **本地 USB 通道。** Python MCP 服务通过本机 loopback 转发访问 WDA，运行数据和签名构建保留在本机。
> - **减少重复工作。** 复用 HTTP 连接、WDA session、健康服务与已有构建；首次任务确认 READY，后续沿健康通道继续。
> - **紧凑观察与组合动作。** 控件树省略重复字段；仅需截图时不生成 XML；batch、滚动查找和列表采集减少工具回合。
> - **安装任务异步执行。** 下载、构建与启动返回可查询的工作 ID，重复 setup 优先复用正在进行的工作。
> - **截图回退。** 元素定位失败时返回截图与处理指引；图像像素乘以 `image.pixel_to_point` 转为 iPhone 点坐标，再交给 `pua_tap`。
> - **明确失败语义。** 多进程共享操作锁；动作超时或断线可能标记不确定，先读实际状态，避免盲目重放点击、输入或提交。
> - **实时预览与暂停恢复。** 屏幕流不落盘；区分锁屏与主动暂停，解锁后的 READY 可恢复锁屏预览，刷新可主动重连。
> 
> 这些优化主要减少重复请求与模型往返，完整任务速度仍取决于 App、USB / WDA 状态和模型响应。工程回归与真机验收分别记录在本地开发资料中。
> 
> ## 工具概览
> 
> 模型可用 17 个工具，另有 2 个仅供屏幕 widget 使用的工具。
> 
> | 工具 | 用途 |
> | --- | --- |
> | `pua_doctor`、`pua_setup`、`pua_ready` | 环境诊断、设备配置、后台安装 / 启动与就绪检查 |
> | `pua_observe`、`pua_find` | 控件树、截图与目标查询 |
> | `pua_apps`、`pua_launch_app` | 查询 App 标识、读取安装证据和启动 App |
> | `pua_tap`、`pua_swipe`、`pua_press_button` | 点击、滑动、主屏幕等操作 |
> | `pua_type_text`、`pua_wait` | Unicode 输入与有界等待 |
> | `pua_batch`、`pua_scroll_find`、`pua_collect_list` | 组合动作、滚动查找与列表采集 |
> | `pua_screen`、`pua_metrics` | 预览开关与有界耗时统计 |
> 
> 界面异常时先返回截图，再由模型判断下一步：滚动查找一次最多滑一次，仍找不到可点击目标就暂停；遮挡、滚动无进展、输入不符或预期页面未出现也走截图兜底。已有截图直接复用，不自动继续盲滑或重放操作。
> 
> ## 本机数据与升级
> 
> 新安装默认使用 `~/.local/share/iphone-use/`，可通过 `IPHONE_USE_STATE_DIR` 指定外部目录；原 `WDA_STATE_DIR` 仍兼容。升级时若新目录不存在，会继续使用检测到的旧配置目录，保留设备、签名和构建。不要为了改名删除运行数据。
> 
> 运行目录权限为 700，私有配置和图像文件为 600。明确调用的截图有保留上限，预览流不落盘。签名材料、设备数据、运行日志与依赖目录均不进入源代码发布包。`WDA_URL` 可指定本机地址，默认转发端口为 18100，远程地址会被拒绝。
> 
> 更新已克隆的仓库：
> 
> ```sh
> git pull --ff-only
> sh scripts/install.sh
> ```
> 
> 重新连接聊天以加载更新后的工具、技能和屏幕资源。若手机连接失败，先检查 USB、设备解锁、开发者模式、Xcode 签名与 setup 返回的具体错误；已有启动工作应继续查询，避免反复重启。
> 
> ## 开发与文档
> 
> ```sh
> npm ci --prefix ui --no-audit --no-fund
> npm run build --prefix ui
> sh scripts/check.sh
> python3 scripts/package.py
> ```
> 
> 构建结果是自包含屏幕 HTML，源代码包位于 `dist/iphone-use--source.zip`。安装和普通使用不需要重新构建 UI。安装后的插件仍完整保留 widget 的源码、样式、构建脚本、配置、依赖锁文件和测试，便于本地维护。
> 
> - [屏幕预览与恢复](skills/iphone-use/references/screen.md)
> - [App 标识参考](skills/iphone-use/references/apps.md)
> - [安装与连接故障排查](skills/iphone-use-setup/references/troubleshooting.md)
> - [更新记录](CHANGELOG.md)
> 
> ## 依赖与致谢
> 
> 本项目依赖 [Appium](https://github.com/appium/appium) 生态与 [WebDriverAgent](https://github.com/appium/WebDriverAgent)：WDA 提供手机端的自动化执行服务，[appium-ios-device](https://github.com/appium/appium-ios-device) 提供 USB 设备通信、端口转发与屏幕流连接能力。iPhone Use 在这些基础上提供 Codex 插件、MCP 工具、安装引导与屏幕 widget，无需单独运行 Appium Server。
> 
> 感谢 Appium、WebDriverAgent 及相关项目的维护者和贡献者，让真实 iPhone 的自动化操作成为可能。
> 
> MIT License。第三方组件说明见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/zhongerxin/iPhone-use)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "zhongerxin--iPhone-use"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "zhongerxin--iPhone-use" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "zhongerxin--iPhone-use"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--iPhone-use");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zhongerxin--iPhone-use" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zhongerxin" AND file.name != "zhongerxin--iPhone-use"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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
> const me = dv.page("Repos/zhongerxin--iPhone-use");
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

> **2026-10-10** — 首次收錄
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

- [[2026-10-10|2026-10-10]] — 首次收錄，2.1k stars
