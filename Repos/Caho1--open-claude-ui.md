---
repo: Caho1/open-claude-ui
url: https://github.com/Caho1/open-claude-ui
owner: Caho1
owner_type: User
language: TypeScript
license: MIT
description: "基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分析手册。"
homepage: ""
stars: 1216
stars_per_day: 304
forks: 262
open_issues: 2
created: 2026-10-14
pushed_at: 2026-10-17
first_seen: 2026-10-19
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-19
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 85
repo_size_kb: 1135
readme_length: 7956
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-19"
star_history: "2026-10-19:1216"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/anthropic"
  - "topic/audioworklet"
  - "topic/claude"
  - "topic/design_system"
  - "topic/framer_motion"
aliases:
  - "open-claude-ui"
  - "Caho1/open-claude-ui"
---

# open-claude-ui

**1.2k** stars · **304** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Caho1--open-claude-ui");
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

`個人專案`

`anthropic` `audioworklet` `claude` `design-system` `framer-motion` `motion-physics` `react` `reverse-engineering` `tailwindcss` `ui-components`

> [!summary] 一句話摘要
> 基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分析手册。

## 專案簡介

基于 REA 深度拆解并高保真还原 Claude 官方桌面端 UI。还原 30 个独立 React 组件与 8 项硬核交互物理算法，附带 3000+ 行逆向分析手册。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
| Forks | 262 |
| Open Issues | 2 |
| Issue 解決率 | 85% (11 closed) |
| 最後推送 | 2026-10-17 |
| 建立日期 | 2026-10-14 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Caho1/open-claude-ui) |
| Topics | `anthropic` `audioworklet` `claude` `design-system` `framer-motion` `motion-physics` `react` `reverse-engineering` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `@types/react` `@types/react-dom` `framer-motion` `lucide-react` `react` `react-dom` `typescript` `electron`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 85
>     "CSS" : 14
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Caho1](https://github.com/Caho1) | 44 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-16 ~ 2026-10-17）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #19 from Caho1/feat/issue-17-pure-css-portability

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/Caho1/open-claude-ui/issues/21) | ArtifactsSplitPaneResizer: Escape during a drag that collaps | 0 | 0 |
> | [#20](https://github.com/Caho1/open-claude-ui/issues/20) | RichComposerWithMentions: the WebKit 500ms post-composition  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Open Claude UI (`open-claude-ui`)
> 
>   
> 
>   基于 REA 深度拆解，高保真生产级还原 Claude 设计系统 (CDS) 与工程交互物理学。
> 
>   简体中文 · English
> 
>   
>   
>   
>   
>   
>   
>   
>   
> 
> ---
> 
> ## 📖 简介 (Introduction)
> 
> `open-claude-ui` 是基于对现代桌面端 AI 客户端进行深度拆解与逆向分析构建的高保真开源 UI 组件库与动效引擎。
> 
> 整个逆向推导、反混淆静态分析与 ASAR 资源解构，均依托于先进的多平台逆向工程框架 **[REA (Reverse Engineer Anything)](https://github.com/morluto/rea)** 完成——通过 REA 的静态 AST 解析、闭包代码反混淆与运行时跟踪能力，穿透生产级压缩包，精准还原了底层工程物理常数与数学模型。
> 
> 不同于市面上常见的盲猜或近似复刻，本项目所有组件规范、物理阻尼常数、着色器关键帧及音频管道均**严格依据真实前端架构反编译验证**提炼而成：
> * **温润的人文质感 (Editorial Warmth)**：纯正陶土橙（Clay `#d97757`）、4 层微对比表面阶梯（Surface 0-3）与视网膜高分屏发丝细边补偿（Hairline Ring）；
> * **严苛的交互物理学 (Interaction Physics)**：4 套生产级物理弹簧参数调校、4px 指针移动死区、CJK 输入法合成守卫、7 档渐隐非线性 Alpha 遮罩；
> * **高阶视听与系统架构 (Audiovisual & Architecture)**：基于原生 Web Audio API 的零延迟合成提示音、以光标为锚点的画廊跑道平移缩放、macOS 桌面毛玻璃透明融合与 Cowork 多代理协同拓扑。
> 
> > 💡 **架构分层说明 (Architecture & Portability)**：  
> > 本项目的 **令牌层 (Tokens) 与纯 CSS 表现层可脱离 React 与 Tailwind 单独使用**。无论是自研桌面 Harness（如 DSH、各类 Agent 桌面容器）、传统 Web 页面还是 Vue/Svelte 宿主，只需引入 `@import "open-claude-ui/tokens.css";` 或 `@import "open-claude-ui/pure.css";`，即可直接消费全量 183 个设计令牌、Zero-JS 原生滚动消隐遮罩（`[data-cds-scroll-fade]`）与核心动效类，详情见下文快速上手。
> 
> > ⚖️ **版权与合规声明 (DMCA & Assets Policy)**：  
> > 本开源项目**不公开分发任何专有二进制资产**（包括商业字体 `.ttf` 与录音 `.mp3`）。本项目提供原生系统级字体回退栈与 Web Audio API 纯代码合成音效，完全自包含、合规安全。详情参见 [assets/README.md](assets/README.md)。
> 
> ---
> 
> ## 🌟 核心特性 (Key Features)
> 
> ```mermaid
> graph TD
>     OCUI["open-claude-ui"]
>     
>     OCUI --> Tokens["1. 设计哲学与令牌体系(Surfaces 0-3, Clay, Hairlines, System Fonts)"]
>     OCUI --> Atoms["2. 基础原子交互控件(CdsButton, SegmentedControl, StatusIndicators, Dialog)"]
>     OCUI --> Stream["3. 会话流与指令引擎(Composer, IME Guard, Model Switcher, MCP Cards)"]
>     OCUI --> Motion["4. 动效物理学与着色器(Spring Physics, Ambient Shimmer, Scroll Fade Masks)"]
>     OCUI --> Media["5. 视听多媒体与产物交互(Synthetic Audio, Lightbox Pan/Zoom, Split Resizer, Epitaxy)"]
>     OCUI --> Desktop["6. 桌面架构与协作拓扑(macOS Vibrancy, Sidebar DnD, Cowork Canvas, A11y Roving)"]
>     OCUI --> Setup["7. 完整工程规范与开箱即用(Tailwind, CSS Themes, Zero-Binary Dependency)"]
> ```
> 
> 1. **30 个生产级独立代码模块**：包含 11 个基础原子控件 + 19 个深度架构物理学模块与 React Hooks，即拷即用，零黑盒依赖。
> 2. **纯原生系统级排版与音效**：支持系统高保真字体回退栈，内置基于 Web Audio 振荡器的零延迟提示音合成引擎。
> 3. **交互式组件故事书 (Storybook Preview)**：内置单文件开箱即用的离线 Storybook，支持浏览器直接打开预览全部组件动效。
> 4. **七大领域分卷完整技术手册**：附带深度逆向分析开发手册 [`docs/Claude Design System (CDS).md`](docs/Claude%20Design%20System%20(CDS).md)。
> 
> ---
> 
> ## 📚 七大篇章逆向分析手册 (Complete Technical Manual)
> 
> 整个仓库最具工业价值的核心是这本长达 3,000+ 行、31 个核心子节的深度逆向工程手册：[`docs/Claude Design System (CDS).md`](docs/Claude%20Design%20System%20(CDS).md)。
> 
> 它不仅记录了所有反编译源码取证位置，还详尽解构了 Anthropic 解决当代大模型产品前端痛点的系统架构方案：
> 
> ### 📖 第一篇：设计哲学与设计令牌体系
> * **[1.1 设计哲学与视觉调性](docs/v1/01-设计哲学与设计令牌体系.md#11-设计哲学与视觉调性)**：温润的人文质感（Editorial Warmth）、四层低对比表面微阶梯、高帧率轻负担动效。
> * **[1.2 表面体系与色彩阶梯](docs/v1/01-设计哲学与设计令牌体系.md#12-表面体系与色彩阶梯)**：Surface 0 至 3 表面明度阶梯（浅色 `#f5f5f3` 至 `#ffffff`，深色 `#0b0b0a` 至 `#20201e`）与品牌陶土橙（`#d97757`）。
> * **[1.3 控件尺寸与精密圆角矩阵](docs/v1/01-设计哲学与设计令牌体系.md#13-控件尺寸与精密圆角矩阵)**：外框 Composer 20px、气泡 18px、面板 10px、按钮 6/8/10px 的精密圆角拓扑。
> * **[1.4 发丝细边、微光阴影与边框防臃肿体系](docs/v1/01-设计哲学与设计令牌体系.md#14-发丝细边微光阴影与边框防臃肿体系)**：高分屏 0.5px 发丝补偿（Hairline Ring）、单闭合边框原则、双环 Popover 弥散微光投影。
> * **[1.5 字体排版与图标对齐系统约束](docs/v1/01-设计哲学与设计令牌体系.md#15-字体排版与图标对齐系统约束)**：深色模式视网膜字重逆补偿算法（暗色下反向减细以防文字发胀）、行内图标 `-.125em` 光学垂直居中。
> * **[1.6 基础动效令牌体系](docs/v1/01-设计哲学与设计令牌体系.md#16-基础动效令牌体系)**：物理时间常数矩阵（70ms 触觉微震、120ms 几何咬合、300ms 面板滑入）与非对称贝塞尔曲线。
> 
> ### 🧩 第二篇：基础原子组件与交互控件
> * **[2.1 全能按钮控件阶梯](docs/v1/02-基础原子组件与交互控件.md#21-全能按钮控件阶梯)**：4 级尺寸阶梯（XS/SM/MD/LG）、5 大变体（Primary/Secondary/Ghost/Outline/Danger）、`active:scale-[0.98]` 物理触觉。
> * **[2.2 分段滑动选择胶囊](docs/v1/02-基础原子组件与交互控件.md#22-分段滑动选择胶囊)**：999px 全圆角轨道、2px 几何内边距、纯几何绝对定位与 Framer Motion `layoutId` 双模式。
> * **[2.3 状态指示灯与微动效套件](docs/v1/02-基础原子组件与交互控件.md#23-状态指示灯与微动效套件)**：陶土明度呼吸指示灯（2.4s）、实时活动脉冲（1.2s）、思考三点波浪跳跃、105° 骨架屏高级倾斜扫光条。
> * **[2.4 模态确认对话框](docs/v1/02-基础原子组件与交互控件.md#24-模态确认对话框)**：16px 圆角、双环 Popover 投影、高斯模糊遮罩、按键陷阱与危险/默认双变体。
> * **[2.5 附件磁贴与上下文胶囊](docs/v1/02-基础原子组件与交互控件.md#25-附件磁贴与上下文胶囊)**：桌面端磁贴（128×96px）与输入框行内胶囊双模式，集成 `file-thumbnail-grow-in` 入场动画。
> 
> ### 💬 第三篇：会话核心流与指令交互引擎
> * **[3.1 会话气泡套件与排版规范](docs/v1/03-会话核心流与指令交互引擎.md#31-会话气泡套件与排版规范)**：User 气泡严格 18px 圆角与浅蓝微调底色，Assistant 零边框透明排版与代码块联动。
> * **[3.2 思考过程折叠与时间状态机](docs/v1/03-会话核心流与指令交互引擎.md#32-思考过程折叠与时间状态机)**：CSS Grid `0fr -> 1fr` 弹性伸缩动画，生成期间传递 `onOpenChange = undefined` 强制展开互斥锁。
> * **[3.3 新一代富文本输入框终端与指令交互引擎](docs/v1/03-会话核心流与指令交互引擎.md#33-新一代富文本输入框终端与指令交互引擎)**：CJK 输入法双重互锁守卫、`/` 指令与 `@` 上下文双触发符、自适应高度伸缩与 Token 预测。
> * **[3.4 模型矩阵切换器与 Token 计量仪表盘](docs/v1/03-会话核心流与指令交互引擎.md#34-模型矩阵切换器与-token-计量仪表盘)**：三大模型梯队架构、Thinking 开关、Prompt Caching 四色显存成本解构与环形 SVG 仪表盘。
> * **[3.5 交互式工具调用与 MCP 决策卡片](docs/v1/03-会话核心流与指令交互引擎.md#35-交互式工具调用与-mcp-决策卡片)**：严格三态授权状态机（`pending_approval` → `running` → `success` / `error`）、三阶决议动作阵列与 Payload 审查。
> 
> ### ⚡ 第四篇：动效物理学、着色器与环境光影
> * **[4.1 全量动效引擎与关键帧规范](docs/v1/04-动效物理学、着色器与环境光影.md#41-全量动效引擎与关键帧规范)**：4 套生产级物理弹簧参数矩阵调校及触感响应、核心 `@keyframes`。
> * **[4.2 动态光效、着色器与推理氛围感](docs/v1/04-动效物理学、着色器与环境光影.md#42-动态光效着色器与推理氛围感)**：`wl-glow` 陶土暖光漫反射光场、`cds-shimmer-text-shine` 非对称贝塞尔曲线与焦散光场。
> * **[4.3 滚动边缘平滑渐变遮罩系统](docs/v1/04-动效物理学、着色器与环境光影.md#43-滚动边缘平滑渐变遮罩系统)**：官方 7 档非线性 Alpha 渐变遮罩、动态滚动位置传感器（触顶/触底动态归零）。
> 
> ### 🎨 第五篇：视听多媒体与产物交互物理学
> * **[5.1 语音模式与 Web Audio 物理声学系统](docs/v1/05-视听多媒体与产物交互物理学.md#51-语音模式与-web-audio-物理声学系统)**：原生 Web Audio 振荡器无损合成音效、30% 舒缓音量标准、6 频段非线性 Gamma 波形柱（附官方 AudioWorklet 架构逆向解密）。
> * **[5.2 多模态媒体查看器与画廊转场物理学](docs/v1/05-视听多媒体与产物交互物理学.md#52-多模态媒体查看器与画廊转场物理学)**：View Transitions 共享元素变形、以光标为锚点的无级 Pan/Zoom 仿射方程、75vw 跑道视口。
> * **[5.3 双栏弹性分割与折叠物理学](docs/v1/05-视听多媒体与产物交互物理学.md#53-双栏弹性分割与折叠物理学)**：Iframe 事件防吞噬护盾、4px 移动死区、双击 50/50 吸附、边缘折叠门限与约束钳制。
> * **[5.4 工件预览沙箱与隔离通信架构](docs/v1/05-视听多媒体与产物交互物理学.md#54-工件预览沙箱与隔离通信架构)**：Epitaxy 隔离容器、7 大专有 MIME 分发、用户手势门禁与虚拟包重定向。
> * **[5.5 代码差异对比与多线程语法高亮系统](docs/v1/05-视听多媒体与产物交互物理学.md#55-代码差异对比与多线程语法高亮系统)**：Shadow DOM 隔离、CSS Grid 行高对齐锁定、增量流式追加管道、统一/分屏双模式。
> 
> ### 🖥️ 第六篇：系统级桌面架构与协作拓扑
> * **[6.1 macOS 桌面宿主深度融合与窗口材质](docs/v1/06-系统级桌面架构与协作拓扑.md#61-macos-桌面宿主深度融合与窗口材质)**：`hiddenInset` 标题栏、交通灯逆缩放几何补偿、`-webkit-app-region: drag` 安全区、macOS Vibrancy 毛玻璃。
> * **[6.2 侧边栏会话拖放重排与拓扑网格](docs/v1/06-系统级桌面架构与协作拓扑.md#62-侧边栏会话拖放重排与拓扑网格)**：`pinnedOrder` 乐观拓扑重排、4px 移动死区、微倾斜幽灵投影与落点对撞占位线。
> * **[6.3 多代理协作看板与 Cowork 空间拓扑](docs/v1/06-系统级桌面架构与协作拓扑.md#63-多代理协作看板与-cowork-空间拓扑)**：多 Agent 任务委派状态机、团队共享工件网格资产池、`BroadcastChannel` 跨窗口同步。
> * **[6.4 流式大文本输出与滚动视口物理学](docs/v1/06-系统级桌面架构与协作拓扑.md#64-流式大文本输出与滚动视口物理学)**：150ms 冷却时间戳防抢夺、40px 底部容差图钉锁定、GPU 字符模糊消解。
> * **[6.5 容器查询自适应排版与极端防挤压](docs/v1/06-系统级桌面架构与协作拓扑.md#65-容器查询自适应排版与极端防挤压)**：基于 `@container` 的 4 阶流体压缩梯队 (>=576px / ('sonnet-3.5');
>   const [thinking, setThinking] = useState(true);
> 
>   return (
>     
>       
>         
>           
>            console.log('Send message:', text)} />
>         
>       
>     
>   );
> }
> ```
> 
> ---
> 
> ## 🎨 视觉故事书预览 (Interactive Storybook)
> 
> 无需启动繁重的本地服务器，只需双击打开自带的 HTML 文件即可体验全量高保真组件：
> ```bash
> open docs/claude-components-storybook.html
> ```
> 故事书包含：
> * 陶土色彩体系与暗黑模式即时切换
> * 全量按钮尺寸与悬浮反馈
> * 999px 全圆角滑动分段胶囊
> * 二阶弹簧动效实时演示
> * 附件磁贴与代码复制衰减状态机
> 
> ---
> 
> ## 🤖 AI Agent 协同与开发规范 (Agent Guidelines)
> 
> 本项目针对现代 AI Coding Agents（如 Cursor, Windsurf, Claude Code, GitHub Copilot, Devin, Antigravity 等）深度适配了前端 UI 与动效开发指引规范：
> 
> * **全局 Agent 规范指南**：[`AGENTS.md`](AGENTS.md)（根目录自动生效，包含设计令牌、物理弹簧选型矩阵、单闭合边框原则、输入法防御守卫与质量门禁）。
> * **Claude Code 专用指引**：[`CLAUDE.md`](CLAUDE.md)（针对 Anthropic 官方 CLI 工具链的指令与开发约束）。
> * **IDE Agent 规则**：[`.cursorrules`](.cursorrules) 与 [`.github/copilot-instructions.md`](.github/copilot-instructions.md)。
> 
> > 💡 **给使用 AI 助手的开发者提示**：  
> > 当你让 Cursor / Claude Code / Copilot 为你的产品实现前端页面或动效时，可直接向 Agent 提示：  
> > *“请严格遵循本仓库中的 AGENTS.md 规范，使用 CDS 陶土设计令牌与 ClaudeMotionPresets 弹簧预设构建当前组件。”*
> 
> ---
> 
> ## 🙏 致谢与逆向支持 (Acknowledgements)
> 
> * 特别鸣谢开源逆向框架 **[REA (Reverse Engineer Anything)](https://github.com/morluto/rea)** 为本项目提供的 AST 解密、Electron 运行时分析与工程常数反编译工具链支持。
> * 致敬 Anthropic 设计与前端团队打造的人文级交互系统与工程细节，启发了本开源复现研究。
> 
> ---
> 
> ## 📜 许可证 (License)
> 
> 本项目基于 [MIT License](LICENSE) 开源发布。所有反编译研究成果与代码复现仅供学习、研究与工程交流使用。
> 
> ---
> 
> ## 📈 Star History
> 
> [](https://star-history.com/#Caho1/open-claude-ui&Date)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Caho1/open-claude-ui)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Caho1--open-claude-ui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Caho1--open-claude-ui" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "Caho1--open-claude-ui"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Caho1--open-claude-ui");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Caho1--open-claude-ui" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Caho1" AND file.name != "Caho1--open-claude-ui"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
> const me = dv.page("Repos/Caho1--open-claude-ui");
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
> const me = dv.page("Repos/Caho1--open-claude-ui");
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

> **2026-10-19** — 首次收錄
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

- [[2026-10-19|2026-10-19]] — 首次收錄，1.2k stars
