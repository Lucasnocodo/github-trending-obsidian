---
repo: anywhere-labs/deepseek-harness-desktop
url: https://github.com/anywhere-labs/deepseek-harness-desktop
owner: anywhere-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验"
homepage: "https://dshdesktop.cn"
stars: 9357
stars_per_day: 3119
forks: 396
open_issues: 124
created: 2026-08-13
pushed_at: 2026-08-16
first_seen: 2026-08-15
week: "2026-W33"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-20"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 126821
readme_length: 2833
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-15"
star_history: "2026-08-15:2146,2026-08-16:6120,2026-08-17:9357"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/deepseek"
  - "topic/deepseek_harness"
  - "topic/desktop"
  - "topic/dsh"
  - "topic/dsh_plugin"
aliases:
  - "deepseek-harness-desktop"
  - "anywhere-labs/deepseek-harness-desktop"
---

# deepseek-harness-desktop

**2.1k** stars · **2.1k** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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

`ORG` `v0.1.0`

`deepseek` `deepseek-harness` `desktop` `dsh` `dsh-plugin` `dsh-plugin-desktop`

> [!summary] 一句話摘要
> 为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验

## 專案簡介

为 DeepSeek Harness (DSH) 生态打造的现代化桌面端体验

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
| Forks | 115 |
| Open Issues | 22 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-15 |
| 建立日期 | 2026-08-13 |
| 官方網站 | [Link](https://dshdesktop.cn) |
| Repo 大小 | 123.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/anywhere-labs/deepseek-harness-desktop) |
| Topics | `deepseek` `deepseek-harness` `desktop` `dsh` `dsh-plugin` `dsh-plugin-desktop` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "CSS" : 2
>     "Python" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tianyicui](https://github.com/tianyicui) | 5235 |
> | [@LegGasai](https://github.com/LegGasai) | 1361 |
> | [@imccyu](https://github.com/imccyu) | 1168 |
> | [@Chinesezjc](https://github.com/Chinesezjc) | 587 |
> | [@turtle1999](https://github.com/turtle1999) | 585 |

**最新版本**：v0.1.0 — DeepSeek Harness Desktop v0.1.0 (2026-08-13)

> [!info]- Release Notes
> DeepSeek Harness Desktop 首个公开版本。
> 
> 将官方 DeepSeek Harness 打包为开箱即用的 Electron 桌面应用，无需手动安装 Node.js 或通过命令行启动本地 Web UI。
> 
> ## 下载
> 
> 请根据操作系统下载对应的安装包：
> 
> - **macOS Apple Silicon**：下载 `.dmg` 文件
> - **Windows x64**：下载 `.exe` 文件
> 
> > 当前 macOS 版本仅支持 Apple Silicon（M1、M2、M3、M4 等芯片），暂不支持 Intel Mac。
> 
> ## 主要功能
> 
> - 自动启动和管理本地 Harness 服务
> - 无需手动配置 Node.js 或执行命令
> - 支持系统托盘驻留
> - 针对 macOS 和 Windows 进行桌面界面适配
> - 保留官方 Harness 的插件系统和本地 Web UI
> - 应用数据和 Harness 服务均运行在本地
> 
> ## 相关链接
> 
> - 官网：https://deepseekdesktop.com
> - 项目仓库：https://github.com/anywhere-labs/deepseek-harness-desktop
> 
> > 本项目是基于 DeepSeek Harness 构建的社区桌面版本，并非 DeepSeek 官方产品。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-14 ~ 2026-08-15）
> **活躍天數** 2 天 · **最新 commit** docs: streamline friendly link descriptions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#23](https://github.com/anywhere-labs/deepseek-harness-desktop/issues/23) | 尴尬我也做了一个桌面端 | 0 | 0 |
> | [#21](https://github.com/anywhere-labs/deepseek-harness-desktop/issues/21) | 模型切换异常 | 0 | 1 |
> | [#20](https://github.com/anywhere-labs/deepseek-harness-desktop/issues/20) | RTL mixed-text rendering is broken when a sentence starts wi | 0 | 1 |
> | [#19](https://github.com/anywhere-labs/deepseek-harness-desktop/issues/19) | 打开报错，无法解析皮肤包 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> DeepSeek Harness Desktop
> 
>   
>   
>   
>   
>   
> 
> 中文 · English
> 
> 为DeepSeek Harness生态打造的现代化桌面端体验（插件）
> 
>   DeepSeek Harness 官方目前通过命令行启动本地 Web UI。本项目将服务启动、运行管理和桌面窗口整合为开箱即用的桌面体验，让用户无需配置 Node.js 或执行命令，即可直接使用。
> 
> Download Desktop
> 
>   
> 
> ## 主要功能
> 
>   
>     
>       Desktop
>       把官方 DeepSeek Harness 的本地 Web UI 带到原生桌面。应用自动启动和管理本地 Harness 服务，集成系统托盘与桌面窗口，无需安装 Node.js 或执行命令。
>     
>     
>       手机远程控制 
>       通过 iOS 和 Android 远程连接 Desktop，在手机上发起任务、查看 Agent 进度，并在需要时继续跟进。
>     
>   
>   
>     
>       插件市场 
>       Harness 遵循“一切皆插件”的架构。桌面端插件市场将提供插件的发现、安装、更新和管理，让模型、工具、界面与工作流能力按需组合。
>     
>     
>       Channels 
>       接入微信、飞书、Discord、WhatsApp 等 IM 通道，直接在日常聊天工具中向 Agent 发起任务、接收进度并继续对话。
>     
>   
> 
> ## 插件生态
> 
> DeepSeek Harness 基于 [Cordis](https://github.com/cordiverse/cordis) 构建，并采用“一切皆插件”的架构。模型适配器、工具注册表、会话日志和 Agent Loop 等核心能力都以插件参与运行，可以通过配置自由组合或替换；外部插件也可以通过 profile 与 bundle 接入现有运行时。详见官方的[架构说明](https://github.com/deepseek-ai/deepseek-harness/blob/master/docs/architecture.md)和[插件管理文档](https://github.com/deepseek-ai/deepseek-harness/blob/master/apps/cli/reference/README.md#plugin-management)。
> 
> 我们希望 Desktop 不只是一个独立的桌面封装，而是 DeepSeek Harness 插件生态中的桌面入口。后续计划将桌面能力按官方插件机制重新组织，让服务管理、系统集成和插件市场可以沿用 Harness 的组合方式接入。
> 
> > **即将推出：** Desktop 目前还不是以 DeepSeek Harness 插件形式交付，上述插件化能力仍在开发中。
> 
> ## 与官方项目的关系
> 
> 本项目基于 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) 构建。
> 
> DeepSeek Harness 的核心能力、插件系统和 Web UI 来自官方项目。本项目主要负责：
> 
> - 桌面应用封装
> - 本地服务生命周期管理
> - 桌面窗口和系统托盘集成
> - macOS、Windows 安装包构建与发布
> - 桌面环境下的界面适配
> 
> 如果你希望通过命令行运行 Harness，或者参与核心功能开发，请优先查看官方仓库。
> 
> ## 开发
> 
> 桌面端代码位于：
> 
> ```text
> apps/desktop
> ```
> 
> 安装依赖并启动桌面应用：
> 
> ```sh
> pnpm install
> pnpm run dev:desktop
> ```
> 
> ## 社区交流
> 
> 可选择常用的平台参与讨论，交流使用问题、插件开发和项目进展。
> 
>   
>     
>       微信群
>       QQ群
>     
>   
>   
>     
>       
>       
>     
>   
> 
> Discord：[加入 DeepSeek Harness Desktop 社区](https://discord.gg/TJeGqKRNM)
> 
> ## 友情链接
> 
> 这里收录 DeepSeek Harness 生态项目及开发者工具。
> 
> | 项目 | 简介 | 链接 |
> | --- | --- | --- |
> | DeepSeek Harness 橙皮书 | DeepSeek Harness 社区实测手册。 | [GitHub](https://github.com/alchaincyf/deepseek-harness-orange-book) |
> | Awesome DSH Plugin | DeepSeek Harness 社区插件精选列表。 | [GitHub](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) · [官网](https://awesome-dsh-plugin.com) |
> | dsh-web-ui | DeepSeek Harness Web UI 插件与皮肤合集。 | [GitHub](https://github.com/zhu1090093659/dsh-web-ui) · [展示站](https://gallery.dsh-market.com) |
> | dsh-TUI | DeepSeek Harness 全屏交互式终端界面。 | [GitHub](https://github.com/ccch1mneyyy/dsh-TUI) |
> | Agents-Anywhere | 从手机远程控制电脑上的 Coding Agent。 | [GitHub](https://github.com/anywhere-labs/Agents-Anywhere) |
> | MkSaaS · TanStarter（赞助商） | 面向独立开发者的商业 SaaS 启动模板。MkSaaS 基于 Next.js，TanStarter 基于 TanStack Start 与 Cloudflare，内置 AI、认证、支付和后台等常用能力。 | [MkSaaS](https://mksaas.com) · [TanStarter](https://tanstarter.dev) |
> 
> 如果希望收录您的项目，欢迎加入微信群并私信 @王博升Benson。
> 
> ## License
> 
> 本项目遵循 [MIT License](LICENSE)。
> 
> > 本项目是基于 DeepSeek Harness 构建的社区桌面版本，并非 DeepSeek 官方产品。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/anywhere-labs/deepseek-harness-desktop) · [官方網站](https://dshdesktop.cn)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "anywhere-labs--deepseek-harness-desktop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "anywhere-labs--deepseek-harness-desktop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "anywhere-labs--deepseek-harness-desktop"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "anywhere-labs--deepseek-harness-desktop" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "anywhere-labs" AND file.name != "anywhere-labs--deepseek-harness-desktop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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
> const me = dv.page("Repos/anywhere-labs--deepseek-harness-desktop");
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

> **2026-08-15** — 首次收錄
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

- [[2026-08-17|2026-08-17]] — 再次上榜，9.4k stars
- [[2026-08-16|2026-08-16]] — 再次上榜，6.1k stars
- [[2026-08-15|2026-08-15]] — 首次收錄，2.1k stars
