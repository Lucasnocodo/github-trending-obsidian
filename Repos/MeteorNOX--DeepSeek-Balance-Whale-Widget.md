---
repo: MeteorNOX/DeepSeek-Balance-Whale-Widget
url: https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget
owner: MeteorNOX
owner_type: User
language: JavaScript
license: MIT
description: "DeepSeek Harness（DSH）一只住在 DSH 界面右下角的小鲸鱼娘，帮你盯着DeepSeek账户余额。QQ弹弹，支持拖拽吸附、左吸附翻转、数字滚动动画，随界面自动启用，建议直接喊来你的dsh安装"
homepage: ""
stars: 876
stars_per_day: 146
forks: 39
open_issues: 16
created: 2026-08-18
pushed_at: 2026-08-24
first_seen: 2026-08-25
week: "2026-W35"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.2.10"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-25
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-01"
contributor_count: 4
engagement: "low"
issue_close_rate: 48
repo_size_kb: 14378
readme_length: 7345
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-25"
star_history: "2026-08-25:876"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/cordis"
  - "topic/deepseek"
  - "topic/deepseek_harness"
  - "topic/developer_tools"
  - "topic/dsh"
aliases:
  - "DeepSeek-Balance-Whale-Widget"
  - "MeteorNOX/DeepSeek-Balance-Whale-Widget"
---

# DeepSeek-Balance-Whale-Widget

**876** stars · **146** stars/天 · 建立 6 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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

`v0.2.10`

`cordis` `deepseek` `deepseek-harness` `developer-tools` `dsh` `dsh-plugin` `dsh-plugins` `floating-widget` `plugin`

> [!summary] 一句話摘要
> DeepSeek Harness（DSH）一只住在 DSH 界面右下角的小鲸鱼娘，帮你盯着DeepSeek账户余额。QQ弹弹，支持拖拽吸附、左吸附翻转、数字滚动动画，随界面自动启用，建议直接喊来你的dsh安装

## 專案簡介

DeepSeek Harness（DSH）一只住在 DSH 界面右下角的小鲸鱼娘，帮你盯着DeepSeek账户余额。QQ弹弹，支持拖拽吸附、左吸附翻转、数字滚动动画，随界面自动启用，建议直接喊来你的dsh安装

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
| Forks | 39 |
| Open Issues | 16 |
| Issue 解決率 | 48% (15 closed) |
| 最後推送 | 2026-08-24 |
| 建立日期 | 2026-08-18 |
| Repo 大小 | 14.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) |
| Topics | `cordis` `deepseek` `deepseek-harness` `developer-tools` `dsh` `dsh-plugin` `dsh-plugins` `floating-widget` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MeteorNOX](https://github.com/MeteorNOX) | 20 |
> | [@fangbm](https://github.com/fangbm) | 6 |
> | [@21253soursweetlemon](https://github.com/21253soursweetlemon) | 2 |
> | [@under-the-ocean](https://github.com/under-the-ocean) | 2 |

**最新版本**：v0.2.10 (2026-08-24)

> [!info]- Release Notes
> ## 更新日志~
> 
> - ci: 发布时自动创建 GitHub Release 并生成 PR changelog (#46)
> 
> **Full Changelog**: https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget/compare/v0.2.9...v0.2.10

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-22 ~ 2026-08-24）
> **活躍天數** 3 天 · **最新 commit** fix: 紧急修复 dsh-market 安装报错

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#34](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget/issues/34) | 小巧思：在大肥鱼边上加个白饭图标 | 1 | 2 |
> | [#50](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget/issues/50) | 直接让大肥鲸自己改了个 mac 桌面版本的 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # DSH 小鲸鱼余额挂件（DeepSeek Balance Whale Widget）
> 
> DeepSeek Harness（DSH）Web 界面右下角的常驻余额挂件：小鲸鱼气泡图 + DeepSeek API 余额 + 今日已用 + 每轮对话消耗统计，每次打开界面自动启用。本项目是标准 DSH 插件包，可通过 `dsh plugin` 安装/卸载。
> 
> ## 特性
> 
> - 🐋 **常驻自启**：随 DSH Web 界面每次打开自动出现（标准 DSH bundle 插件）
> - 💰 **余额**：60 秒自动刷新 + 点击鲸鱼手动刷新；余额变化时数字**滚动动画**；瞬时网络抖动自动沿用最近余额不报错
> - 📊 **今日已用**：两种模式任选（见下），显示今日消耗金额
>   - **小鲸鱼记账（推荐，免令牌）**：不需要任何会话令牌，鲸鱼娘每次观测余额后用余额差值自动记账（`.dshw-usage.json`，跨天自动归零归档）
>   - **实时·令牌**：填入平台会话令牌后直接调用平台用量接口，按**峰谷定价**（工作日高峰 9:00–12:00 与 14:00–18:00，其余空闲；2026-08-23 起周末全天按谷价）实时换算今日已用
> - 💬 **每轮对话消耗统计**：监听本机会话事件，每轮对话结束后弹出本轮消耗金额（精确 usage，非估算）
>   - 菜单可开关「每轮对话后自动显示消耗金额」；「自动关闭时间」可自定义秒数（填 0 表示不自动关闭）
>   - 消耗金额泡泡显示期间，余额变动不弹普通泡泡
> - 🖱️ **拖拽 + 四边四分之一吸附**（左/右/上/下，角落可组合）
> - 🔄 左吸附时整体**水平镜像翻转**（文字同步反向、带动画）
> - 🧸 **按压 Q 弹**玩偶效果（按压时底部坐标不变）
> - 🎚️ **汉堡菜单**（悬停鲸鱼右上角出现）：大小滑块（0.6–2.5 倍）、音效切换（小黄鸭 / 音效1）、音量调节、用量模式、峰谷提示文案（默认 / 梁文峰谷 / !?强强?!）、气泡开关、每轮消耗开关与自动关闭时间
> - 🔊 **音效**：按压/松手音效（可选包内 mp3，缺失时静默降级）
> - 💬 **随机台词**：点击气泡切换随机台词段（加权随机，含峰谷提示/今日已用/gif 动图/卖萌吐槽），再点一次关闭；气泡总显示 5 秒自动收起
> - 📐 随浏览器窗口自动缩放；文字位置/字号与图片联动
> 
> ## 目录结构
> 
> ```text
> dsh-whale-widget/
> ├── package.json          # DSH bundle 插件元数据
> ├── README.md             # 本文件
> ├── cordis.patch.yml      # 插件挂载声明
> ├── lib/
> │   └── index.js          # 宿主侧插件本体
> ├── assets/
> │   ├── DSH2.png          # README 顶部展示图
> │   ├── DSniang1.png      # 小鲸鱼本体（cut-out，气泡由代码绘制）
> │   ├── DSniang02.png     # 备用整图（兼容旧版手动安装路径）
> │   ├── rua.gif           # 随机台词 gif（可选）
> │   ├── Ya1.mp3 / Ya2.mp3 # 小黄鸭音效（可选）
> │   └── D1.mp3 / D2.mp3   # 音效1（可选）
> └── whale-widget-prompt.md # 完整规格/维护提示词
> ```
> 
> ## 安装
> 
> ### 方式 A：直接从 GitHub 安装（推荐）
> 
> 无需本地克隆，一条命令安装：
> 
> ```powershell
> dsh plugin --profile web add github:MeteorNOX/DeepSeek-Balance-Whale-Widget
> ```
> 
> 说明：
> 
> - 装完后插件会出现在 DSH 的**插件管理页面**里，之后可以直接在页面里更新，无需再手动执行命令
> - 网络环境需要代理时，先设置代理环境变量再执行：
>   ```powershell
>   $env:http_proxy="http://:"; $env:https_proxy="http://:"; $env:all_proxy="socks5://:"; dsh plugin --profile web add github:MeteorNOX/DeepSeek-Balance-Whale-Widget
>   ```
> - 安装完成后重启 `dsh web`，再 F5 刷新浏览器
> 
> ### 方式 B：本地安装（从当前仓库）
> 
> 在**仓库根目录**（`DeepSeek-Balance-Whale-Widget`，即 `package.json` 所在目录）执行：
> 
> ```powershell
> dsh plugin --profile web add link:.
> ```
> 
> 说明：
> 
> - `dsh plugin` 会把参数转发给 pnpm，并在成功后自动把 `dsh-whale-widget` 加入 `dsh.profile.bundles`
> - **`link:.` 表示链接当前目录**（仓库根目录本身就是插件包）。如果你复制了仓库到别处，用绝对路径：
>   ```powershell
>   dsh plugin --profile web add link:D:\你的路径\DeepSeek-Balance-Whale-Widget
>   ```
> - ⚠️ 不要用 `link:.\dsh-whale-widget`——仓库里**没有** `dsh-whale-widget/` 子目录，这样会安装成普通依赖而非插件，重启后挂件不出现
> - 安装完成后重启 `dsh web`，再 F5 刷新浏览器
> - **如果之后移动了源码目录**，必须重新执行一次 `dsh plugin --profile web add link:.`。若提示已存在/冲突，先 `dsh plugin --profile web remove dsh-whale-widget` 再重新 add
> 
> ### 方式 C：发布到 npm 后安装
> 
> ```powershell
> dsh plugin --profile web add dsh-whale-widget
> ```
> 
> ### 给 AI 的安装说明（用 dsh 辅助安装时，直接复制给 AI）
> 
> 如果你希望让另一个 DSH / AI 助手帮你安装，把下面这段发给它即可：
> 
> ```
> 请帮我安装插件 dsh-whale-widget，来源是 GitHub 仓库 MeteorNOX/DeepSeek-Balance-Whale-Widget。
> 
> 步骤：
> 1. 确保 pnpm 可用（没有就先：npm install -g pnpm）
> 2. 在 Web profile 安装（任选一种来源）：
>    首选，直接从 GitHub 安装（无需本地克隆，装完可在插件管理页面里更新）：
>      dsh plugin --profile web add github:MeteorNOX/DeepSeek-Balance-Whale-Widget
>    或从本地仓库链接安装（例如本地克隆的仓库根目录）：
>      dsh plugin --profile web add link:.
>    （注意：仓库根目录就是插件包，不要写成 link:.\dsh-whale-widget 这种带子目录的路径）
> 3. 如果报 pnpm 阻止构建脚本（allowBuilds 相关），在 C:\Users\\.dsh\profiles\web\pnpm-workspace.yaml 的 allowBuilds 下加对应的包 key，然后重跑
> 4. 重启 dsh web，然后 F5 刷新浏览器
> 
> 安装后验证：
> - dsh --profile web --dump-config 应该能看到 dsh-whale-widget 在 bundles 里
> - curl http://127.0.0.1:3080/dsh-whale/balance.json 应返回 200 JSON（含 totalBalance）
> - curl http://127.0.0.1:3080/dsh-whale/widget.js 应返回 200 JS
> 
> 另外请检查 DSH 凭据里是否配置了 DEEPSEEK_API_KEY（没有就提示用户配置；DEEPSEEK_PLATFORM_TOKEN 可选，不配也能用默认的记账模式）。
> ```
> 
> ### 关于令牌（安装后必读）
> 
> > **默认不需要任何令牌。** 安装后只需配置 `DEEPSEEK_API_KEY`（拉取余额必需），「今日已用」会自动使用默认的**小鲸鱼记账**模式（余额差值本地记账），开箱即用。
> >
> > 「实时·令牌」模式用到的 `DEEPSEEK_PLATFORM_TOKEN`（DeepSeek 平台网页会话令牌）是**可选的**，仅在你想要更精确的实时用量换算时才需要配置。获取方式见下方「用量模式使用教程」。
> 
> ## 卸载
> 
> ```powershell
> dsh plugin --profile web remove dsh-whale-widget
> ```
> 
> ## 从旧手动安装升级
> 
> 如果你之前按旧方式手动安装过（复制 `whale-balance.mjs` + 改 `cordis.patch.yml`），先清理：
> 
> ```powershell
> $web = "$env:USERPROFILE\.dsh\profiles\web"
> 
> Remove-Item "$web\whale-balance.mjs" -ErrorAction SilentlyContinue
> Remove-Item "$web\whale-balance.cjs" -ErrorAction SilentlyContinue
> Remove-Item "$web\DSniang1.png" -ErrorAction SilentlyContinue
> Remove-Item "$web\DSniang02.png" -ErrorAction SilentlyContinue
> ```
> 
> 然后编辑 `$web\cordis.patch.yml`，删除这段旧补丁：
> 
> ```yaml
> - insert:
>     - id: whale-balance-widget
>       name: ./whale-balance.mjs?v=1
> ```
> 
> 如果里面只有这段，直接改成：
> 
> ```yaml
> []
> ```
> 
> 清理后再执行上面的安装命令。
> 
> ## 用量模式使用教程
> 
> ### 必需的凭据
> 
> - **`DEEPSEEK_API_KEY`**（必需）：DeepSeek API 密钥，用于拉取余额（`api.deepseek.com/user/balance`）。在 DSH 凭据服务中配置即可（`dsh` 的凭据管理界面 / `.dsh/.credentials.yaml`）。
> 
> ### 两种用量模式
> 
> 挂件的「今日已用」有两种模式，在**菜单 → 用量**中选择：
> 
> **① 小鲸鱼记账（推荐，默认）—— 完全不需要额外配置**
> 
> 鲸鱼娘自己用**余额差值**记账：每次观测到余额下降就把差值累加到当天用量，跨天自动归零归档（保留 30 天）；观测币种发生变化时只重置基准、不记差值（防止多币种账户切换污染账本）。只要配好了 `DEEPSEEK_API_KEY` 就能用，**开箱即用**。
> 
> - 账本文件：`$DSH_HOME/.dshw-usage.json`（自动生成）
> - 优点：零配置、免令牌
> - 说明：依赖「观测到的余额下降」累计，若 DSH 关闭期间有消耗会漏记；要精确请用令牌模式
> 
> **② 实时·令牌（可选）—— 需要 `DEEPSEEK_PLATFORM_TOKEN`**
> 
> 鲸鱼娘直接调用 DeepSeek 平台用量接口，按**峰谷定价**实时换算今日已用，**精确到每小时的 token 用量**。
> 
> **令牌在哪获取：**
> 1. 浏览器打开并登录 **https://platform.deepseek.com**
> 2. 按 **F12** 打开开发者工具 → 切到 **Network（网络）** 标签
> 3. 在平台页面点击「用量」或刷新页面，找到名为 `usage/by_api_key/amount` 的请求
> 4. 点开该请求 → **Request Headers（请求标头）** → 复制 `Authorization` 的值（形如 `Bearer eyJ...` 的一长串）
> 5. 把整段值（含 `Bearer` 前缀或只要后面的 token 部分均可）配置为 DSH 凭据 `DEEPSEEK_PLATFORM_TOKEN`：
>    ```powershell
>    # 在 DSH 凭据服务中设置，例如编辑 $env:USERPROFILE\.dsh\.credentials.yaml
>    # DEEPSEEK_PLATFORM_TOKEN: 
>    ```
> 6. 重启 `dsh web`，在**菜单 → 用量**里选择「实时·令牌」
> 
> **说明：**
> - ⚠️ **令牌非必需**：不配置时挂件自动使用默认的「小鲸鱼记账」模式，功能不受影响
> - 该令牌是 DeepSeek **平台网页的会话令牌**（不是 `sk-` 开头的 API key），仅在登录平台网页时有效；重新登录后可能需要重新获取
> - 接口不返回金额，只返回 token 分桶，挂件会按内置峰谷定价表换算成金额；定价表在 `lib/index.js` 顶部 `PRICING` 常量，DeepSeek 调价时可自行修改
> 
> ### 每轮对话消耗（无需任何凭据）
> 
> 「每轮对话消耗统计」直接监听 DSH 本机会话事件，按模型真实 usage 换算金额（与今日已用同一套峰谷定价表），**不需要** `DEEPSEEK_PLATFORM_TOKEN`。
> 
> ## 验证
> 
> ```powershell
> dsh --profile web --dump-config | Select-String -Pattern "whale"
> 
> curl http://127.0.0.1:3080/dsh-whale/image.png
> curl http://127.0.0.1:3080/dsh-whale/balance.json
> curl http://127.0.0.1:3080/dsh-whale/size.json
> curl http://127.0.0.1:3080/dsh-whale/last-turn.json
> ```
> 
> - `/dsh-whale/image.png` → 200 `image/png`
> - `/dsh-whale/balance.json` → 200，含 `{"ok":true,"totalBalance":...,"currency":"CNY","todayUsage":...}`
> - `/dsh-whale/size.json` → GET 返回配置；PUT 写入
> - `/dsh-whale/last-turn.json` → 200，含最近一轮对话消耗 `{seq, turn, amount, tokens}`
> - 浏览器 F5 后右下角出现挂件
> 
> ## 常见问题
> 
> - **挂件不出现**：确认 `dsh plugin add` 成功；`dsh --profile web --dump-config` 里能看到 `dsh-whale-widget`；重启 `dsh web` 后 F5。
> - **图片不显示**：确认 `assets/DSniang1.png` 在插件包内，且没有把旧文件放在 profile 里占用了同名路由。
> - **余额报「未配置 DEEPSEEK_API_KEY」**：去 DSH 配置凭据。
> - **今日已用显示 --**：记账模式下需要先跑一次余额观测（60 秒内自动完成）；令牌模式需要配置 `DEEPSEEK_PLATFORM_TOKEN`。
> - **每轮消耗不显示**：确认菜单「每轮对话后自动显示消耗金额」已勾选；一轮对话必须完整结束（turn/end）才会结算。
> - **没有声音**：确认 `assets/*.mp3` 在包内；若不想带音效文件，静默降级为无声音。
> - **本地开发改了代码不生效**：使用 `link:` 安装时，修改源码后重启 `dsh web`（ESM 模块缓存）；如果用已发布版本，需要 `npm publish` 新版本后 `dsh plugin --profile web update dsh-whale-widget`。
> - **自定义图片**：气泡由代码绘制（SVG），鲸鱼本体为 cut-out PNG，放在右下角 59.45%；换图需保证透明背景 cut-out，否则按 `whale-widget-prompt.md` 调整几何参数。
> 
> ## 开发与维护
> 
> 完整规格、视觉参数、架构结论和生成提示词见 `whale-widget-prompt.md`。修改文字位置、颜色、动画、吸附逻辑、台词组或定价表时参考该文件。
> 
> ## 许可证
> 
> 本项目基于 **MIT License** 开源，详见 [LICENSE](LICENSE)。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "MeteorNOX--DeepSeek-Balance-Whale-Widget"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "MeteorNOX--DeepSeek-Balance-Whale-Widget" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W35" AND file.name != "MeteorNOX--DeepSeek-Balance-Whale-Widget"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MeteorNOX--DeepSeek-Balance-Whale-Widget" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MeteorNOX" AND file.name != "MeteorNOX--DeepSeek-Balance-Whale-Widget"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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
> const me = dv.page("Repos/MeteorNOX--DeepSeek-Balance-Whale-Widget");
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

> **2026-08-25** — 首次收錄
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

- [[2026-08-25|2026-08-25]] — 首次收錄，876 stars
