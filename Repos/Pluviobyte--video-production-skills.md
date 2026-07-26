---
repo: Pluviobyte/video-production-skills
url: https://github.com/Pluviobyte/video-production-skills
owner: Pluviobyte
owner_type: User
language: Python
license: N/A
description: "Reusable AI video production skills library for creation, recreation, motion design, openers, and QA."
homepage: ""
stars: 571
stars_per_day: 20
forks: 75
open_issues: 0
created: 2026-06-26
pushed_at: 2026-07-14
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "開發工具"
subcategory: "視頻製作"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "提供可重用的 AI 視頻製作技能庫，幫助創建、復刻、動效設計等。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 10089
readme_length: 6893
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:444,2026-06-30:445,2026-07-01:483,2026-07-01:483,2026-07-02:492,2026-07-02:492,2026-07-03:498,2026-07-04:502,2026-07-05:508,2026-07-06:515,2026-07-07:518,2026-07-08:523,2026-07-09:525,2026-07-10:529,2026-07-11:531,2026-07-12:531,2026-07-13:534,2026-07-14:537,2026-07-15:540,2026-07-16:544,2026-07-17:548,2026-07-18:550,2026-07-19:553,2026-07-20:555,2026-07-21:558,2026-07-22:558,2026-07-23:562,2026-07-24:566,2026-07-25:569,2026-07-26:571"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "video-production-skills"
  - "Pluviobyte/video-production-skills"
  - "提供可重用的 AI 視頻製作技能庫，幫助創建、復刻、動效設計等。"
---

# video-production-skills

**571** stars · **20** stars/天 · 建立 29 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/Pluviobyte--video-production-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供可重用的 AI 視頻製作技能庫，幫助創建、復刻、動效設計等。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (20 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 12 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成高品質視頻內容的視頻製作團隊和內容創作者。
> **一句話重點** 這個專案不僅提供視頻製作技能，還將視頻製作的每個環節標準化，形成可重用的組件庫。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻製作" && p.file.name !== "Pluviobyte--video-production-skills" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻製作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案的創新點在於將視頻製作過程中的技能進行標準化和可重用化，形成一個動效組件庫。

## 專案簡介

這個專案是一個長期維護的 AI 視頻製作技能庫，旨在收集可重用的技能以支持視頻創作、復刻、動效設計等流程。用戶可以透過 `npx skills add` 指令安裝各種技能，例如 `ai-motion-director` 用於主題到動效的導向，或 `reference-video-replica-qc` 用於視頻的復刻和質檢。每個技能都會被組織在獨立的目錄中，並包含詳細的文檔和示例，這樣用戶可以根據需要選擇適合的技能來生成視頻。這個庫的長期目標是將參考視頻中的動效轉化為可重用的技術組件，這樣未來的 AI 視頻生成可以更靈活地選擇和組合這些組件，而不僅僅是生成靜態的幻燈片式內容。技術上，這些技能使用了 HyperFrames 和 Remotion 等技術，並且支持多種視頻風格和方法，從暗色 SaaS 產品短片到黑底白字的片頭設計。與其他視頻製作工具相比，這個專案的獨特之處在於它不僅僅是提供模板，而是將視頻製作的每個環節進行了細分和標準化，並將其轉化為可重用的組件，這在需要高效視頻製作的團隊中尤為重要。使用者可能會遇到的限制包括對於特定風格的支持和對於複雜視頻的處理能力，這需要用戶根據具體需求進行選擇和調整。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- AI 動效導演元 Skill — 用於主題到動效的導向，幫助用戶建立運動隱喻和組件計劃。
- 參考視頻復刻質檢 — 提供五級保真度判定，確保復刻視頻的質量。
- 暗色 SaaS 魔術短片 — 專為暗色科技感視頻設計的技能，適合展示產品能力。
- 黑底白字打字開場 — 生成型片頭技能，提供逐字打字效果和音效。
- 可重用的 HyperFrames / Remotion 組件 — 將視頻中的動效轉化為可重用的技術組件，便於未來使用。

## 快速開始

1. 查看可安裝的技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --list
```
2. 安裝 AI 動效導演元 Skill
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
```
3. 安裝參考視頻復刻質檢技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
```
4. 安裝暗色 SaaS 魔術短片技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
```
5. 安裝黑底白字打字開場技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天內累積 571 stars（20/天），forks 75（13.1%），顯示出穩定的增長潛力。這個專案由 Pluviobyte 開發，專注於解決視頻製作過程中的重複性問題，之前的解決方案往往缺乏可重用性和靈活性。隨著 AI 技術的進步，這種技能庫的需求日益增加，特別是在需要快速生成高品質視頻內容的場景中。社群的反饋和需求也促進了這個專案的發展，讓它能夠更好地適應市場需求。

## 適合誰使用

**目標受眾**：需要快速生成高品質視頻內容的視頻製作團隊和內容創作者。

> [!example] 使用場景
> - 視頻編輯師用它來快速生成高質量的產品介紹視頻，因為可以重用庫中的動效和模板，節省了大量的時間。
> - 內容創作者用它來創建吸引人的教學視頻，因為可以利用 `black-white-text-opener` 技能實現專業的片頭效果，提升觀眾的觀看體驗。
> - 市場營銷團隊用它來製作促銷視頻，因為可以快速復刻成功的參考視頻，並根據品牌需求進行調整，確保視頻內容的質量和一致性。

## 架構分析

這個專案的架構設計為一個技能庫，使用者可以透過 CLI 工具輕鬆安裝和管理各種視頻製作技能。每個技能都獨立存在，並包含詳細的文檔和示例，這樣用戶可以根據需求選擇適合的技能進行安裝。資料流上，每個技能的運行都依賴於 HyperFrames 和 Remotion 等技術，這樣可以確保動效的可重用性和靈活性。

選擇這種架構的好處在於用戶可以快速擴展和調整技能，而不需要重複開發相同的功能。這樣的設計也使得未來的擴展變得更加容易，因為新技能只需遵循既定的格式和標準即可。整體而言，這種架構能夠支持快速迭代和持續更新，適應不斷變化的視頻製作需求。

## 技術深入分析

這個專案的核心技術機制在於將視頻製作過程中的技能進行標準化，並將其轉化為可重用的組件。使用者可以透過 CLI 工具輕鬆安裝和管理各種技能，這些技能涵蓋了視頻創作的不同環節，包括動效設計、質檢等。效能上，這些技能的設計旨在支持快速生成高品質視頻內容，並且能夠靈活應對不同風格的需求。設計上，選擇使用 HyperFrames 和 Remotion 等技術，使得動效的可重用性和靈活性得以提升，這在快速變化的視頻市場中尤為重要。技術選型上，Python 和 JavaScript 的結合使得這個專案能夠在多種環境中運行，並且能夠與現有的視頻製作工具鏈進行整合。隨著社群的發展和需求的變化，這個專案的未來擴展潛力巨大，可能會引入更多的技能和功能，以滿足不斷變化的市場需求。整體而言，這個專案在視頻製作領域中具有很高的實用價值，並且能夠幫助用戶更高效地完成視頻創作。

## 優缺點分析

> [!success] 優點
> - 提供多種可重用的視頻製作技能，節省時間和成本。
> - 支持多種視頻風格，靈活適應不同需求。
> - 詳細的文檔和示例，降低了使用門檻。

> [!danger] 缺點
> - 對於特定風格的支持可能有限，需根據需求選擇。
> - 需要一定的視頻製作基礎知識，對新手不太友好。
> - 對於複雜視頻的處理能力可能不足，需謹慎使用。

> [!warning] 注意事項
> - 目前僅支持特定的視頻風格，對於其他風格的支持可能有限。
> - 需要用戶具備一定的視頻製作基礎知識，以便有效利用這些技能。
> - 對於複雜視頻的處理能力可能受到限制，需根據具體需求進行調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色動畫，而本專案則是針對視頻製作的技能庫，提供更廣泛的視頻製作支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供視頻資源管理，而本專案則是針對視頻製作流程中的技能重用，強調動效和質檢。 |

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
| Forks | 75 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 9.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Pluviobyte/video-production-skills) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "JavaScript" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Pluviobyte](https://github.com/Pluviobyte) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新和修復。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-07-14）
> **活躍天數** 3 天 · **最新 commit** Fix dark SaaS director reference

## README 摘錄

> [!info]- 展開查看原文 README
> # Video Production Skills
> 
> 这是一个长期维护的 AI 视频制作 skill 精选仓库，用来沉淀我在视频创作、视频复刻、动效生成、片头包装、质检交付等流程中反复使用的方法，也用来把优秀参考视频中的动效拆成 HyperFrames / Remotion 能够实现和复用的组件。
> 
> 仓库不是只服务于某一个视频项目。后续优秀的视频制作 skill 都会优先收录在这里，并按“视频类型 / 风格 / 工作流环节”持续扩展。当前收录的是 AI 动效导演元 Skill、参考视频复刻质检、暗色 SaaS / AI 产品短片、黑底白字打字开场。
> 
> 这些 skill 适用于 Codex、Claude Code、Cursor 等支持本地 skill 目录或 Skills CLI 的 AI 编程/创作代理。仓库中的每个一级目录都是一个独立可安装的 skill。
> 
> ## 长期目标：从复刻到组件库
> 
> `reference-video-replica-qc` 的意义不是单纯复制某一个参考视频，而是把参考视频里真正让画面“像视频”的东西拆出来：镜头节奏、入场方式、路径运动、组件状态切换、字幕/标题层级、模型列表、线条轨道、卡片翻转、光效、遮罩、缩放和转场。每一次复刻都应该把这些动效整理成 HyperFrames / Remotion / React / CSS / SVG / GSAP 可以编写、组合和参数化的技术组件。
> 
> 长期来看，这个仓库会形成一个视频动效组件库。每个通过复刻验证的组件都要留下描述：它适合什么内容、解决什么画面问题、需要哪些输入参数、时间线如何运动、应该用在哪类视频段落、有什么对齐证据和限制。以后 AI 制作视频时，就不只是生成一页页静态版式，而是能够根据脚本内容自由选择这些组件，把开场、解释、列表、对比、流程、CTA、产品展示等段落组合成更接近真实视频语言的成片。
> 
> `ai-motion-director` 是这套体系的元导演层：给它一个主题、脚本或简报，它先决定视频的运动隐喻、beat graph、组件调度、素材需求和反 PPT 质检标准，再把任务交给 HyperFrames / Remotion / 生图 / 具体视频 skill 执行。
> 
> ## 已收录 Skills
> 
> | Skill | 视频制作环节 | 适合做什么 | 视频风格 / 方法 | 详情 |
> | --- | --- | --- | --- | --- |
> | `ai-motion-director`AI 动效导演元 Skill | 主题到动效语言 / 元导演 / 反 PPT 质检 | 给一个主题、脚本或简报，先建立 motion thesis、beat graph、组件/素材计划，再控制 HyperFrames/Remotion 进入制作 | Motion-first：视觉隐喻、连续时间线、状态变化、运动语法、anti-PPT gate | [查看页面](docs/ai-motion-director.md) |
> | `reference-video-replica-qc` | 复刻闭环 / 组件沉淀 / 质检 | 参考视频拆解、动效复刻、HyperFrames/Remotion 组件化、五级保真度判定 | 先采样定位、再全帧验收；素材门、运行时门、交付门；MAE/时间偏移/边界帧/PSNR/SSIM/哈希证据 | [查看页面](docs/reference-video-replica-qc.md) |
> | `dark-saas-magic-video`暗色 SaaS 魔术短片 | 风格化正片生成 | 暗色 SaaS / AI 产品短片、工具发布视频、产品能力展示 | Presenton-like magic UI：黑色空间、底部紫光、动感大字、渐变 CTA、漂浮 UI、模型环、导出物件 | [查看页面](docs/dark-saas-magic-video.md) |
> | `black-white-text-opener` | 片头包装 | 新视频片头、教程开场、观点视频开头、产品视频引子 | 纯黑/近黑背景 + 白色大字逐字打出 + 同步 typing click 音效 + 干净转场 | [查看页面](docs/black-white-text-opener.md) |
> 
> ## 效果预览
> 
> ### AI 动效导演元 Skill
> 
> 这是流程控制 skill，暂无单独预览视频；它用于在制作前决定运动隐喻、beat graph、组件调度和反 PPT 质检标准，并控制后续视频 skill 产出成片。
> 
> ### 黑底白字打字开场
> 
> [▶ Watch Black White Text Opener](https://github.com/user-attachments/assets/3962d773-4447-4720-ba59-5e164d0b5ac4)
> 
> ### 暗色 SaaS / Magic UI
> 
> 示例成片：**雪踏乌云暗色 SaaS 介绍短片**
> 
> [▶ Watch Xuetawuyun Dark SaaS Showcase](https://github.com/user-attachments/assets/6d4236af-6b58-4447-986d-21169ea5e3a6)
> 
> ### 参考视频复刻闭环
> 
> 示例成片：**Presenton 复刻 Bitexact 成片**
> 
> [▶ Watch Presenton Replica Bitexact Showcase](https://github.com/user-attachments/assets/f792bd12-d8b3-43b7-b751-98aeb033713b)
> 
> ## 仓库会如何扩展
> 
> 后续新增的视频制作 skill，会优先按下面几类组织：
> 
> - 导演与调度：主题理解、运动隐喻、beat graph、组件选择、素材规划、反 PPT 质检。
> - 复刻与组件沉淀：参考视频拆解、时间线还原、动效复刻、HyperFrames/Remotion 组件化、像素级/视觉级对齐、交付检查。
> - 片头与包装：黑底白字、标题卡、章节转场、字幕条、CTA 结尾。
> - 风格化正片：暗色 SaaS、AI 工具发布、课程预告、观点口播包装、教程动效。
> - 素材处理：抽帧、字幕、配音、屏幕录制清理、音画同步。
> - 平台适配：抖音、小红书、公众号视频封面/比例/节奏差异。
> 
> 每个新增 skill 应该同时包含：
> 
> - 一个独立 skill 目录，包含 `SKILL.md` 和必要脚本。
> - 一个 `docs/.md` 介绍页，说明视频类型、风格、适合/不适合场景。
> - 如果 skill 产出可复用动效，要为每个组件写清楚组件描述、适用场景、输入参数、时间线、技术栈、对齐证据和限制。
> - 优先提供 MP4 视频预览，放在 `assets/videos/` 或 skill 自己的 `assets/showcases/` 作为可版本化归档。
> - README / docs 里的可播放展示使用 GitHub `user-attachments/assets/...` URL，写法参考 Presenton：`[▶ Watch Demo](https://github.com/user-attachments/assets/)`。
> - 抽帧图、contact sheet、对照图只作为封面/质检辅助，放在 `assets/images/`。
> - 在本 README 的表格中补充一行，说明它属于哪个视频制作环节。
> 
> ## 推荐安装
> 
> 先查看仓库内可安装的 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> ```
> 
> 按需安装单个 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> ## 怎么选择
> 
> - 给一个主题、脚本或简报，想让 AI 先做运动隐喻、beat graph、组件调度，并避免 PPT 式视频：用 `ai-motion-director`。
> - 要复刻一个已有视频、拆解时间线、把动效沉淀成 HyperFrames/Remotion 组件、验证是否对齐：用 `reference-video-replica-qc`。
> - 要做暗色科技感 SaaS / AI 产品短片：用 `dark-saas-magic-video`。
> - 要给新视频加黑底白字、逐字打字、打字音效开场：用 `black-white-text-opener`。
> 
> ## 设计边界
> 
> - `ai-motion-director` 不替代最终渲染、抽帧、字幕、音频和归档流程；它负责先定义 motion thesis、beat graph、组件/素材计划和 anti-PPT gate。
> - `reference-video-replica-qc` 把保真度拆成源码一致、渲染帧像素一致、编码成片帧对齐、视觉对齐、风格对齐五级。任何像素级结论都必须通过素材、运行时和交付三道逐帧门；手写 HyperFrames/Remotion 复刻通常目标是视觉级对齐和参数化组件沉淀。
> - `dark-saas-magic-video` 是风格级创作 skill，不用于逐帧复刻。
> - `black-white-text-opener` 是生成型开场 skill，默认要求逐字打字和同步 typing click 音效；不用于复用原片或声明像素级对齐。
> 
> English
> 
> # Video Production Skills
> 
> This is a long-term AI video production skills library. It is designed to collect reusable skills for video creation, reference recreation, motion design, opener packaging, asset processing, delivery QA, and reusable HyperFrames / Remotion motion components.
> 
> The long-term goal is to turn reference-video recreation into a component library. Each aligned motion pattern should become a documented technical component with its use case, inputs, timing contract, implementation stack, evidence, and limitations. Future AI video generation can then select from these components instead of producing static slide-like sequences.
> 
> The repository is not limited to the current skills. Future video-production skills should be added here with a dedicated skill directory, a docs page, and preview media when possible.
> 
> | Skill | Production Stage | Video Type | Style / Method |
> | --- | --- | --- | --- |
> | `ai-motion-director` | Topic-to-motion direction / anti-PPT QA | Topic-driven original motion videos, beat graph planning, component routing | Motion-first direction: visual metaphor, state change, motion grammar, asset plan, anti-PPT gate |
> | `reference-video-replica-qc` | Recreation loop / component capture / QA | Reference analysis, motion recreation, HyperFrames/Remotion componentization, five-level fidelity classification | Samples locate failures; full frames approve asset, runtime, and delivery gates with MAE, temporal, boundary, PSNR/SSIM, and hash evidence |
> | `dark-saas-magic-video` / Dark SaaS Magic Short | Styled main video | Dark SaaS / AI product shorts | Presenton-like magic UI with black space, purple glow, kinetic type, gradient CTA, floating UI |
> | `black-white-text-opener` | Opener packaging | Opening title cards for new videos | Black background, typed white text, timed typing clicks, clean transition |
> 
> Recommended install:
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> These skills are designed for Codex, Claude Code, Cursor, and other agents that support local skills or the Skills CLI.

## 延伸閱讀

相關概念：[[自動化測試]] · [[視頻編輯]] · [[動效設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/Pluviobyte/video-production-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻製作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻製作" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Pluviobyte--video-production-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","視頻編輯","動效設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Pluviobyte" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-02|2026-07-02]] — 再次上榜，492 stars
- [[2026-07-01|2026-07-01]] — 再次上榜，483 stars
- [[2026-06-30|2026-06-30]] — 首次收錄，444 stars
