---
repo: nevertoday/zhongguo-traditional-colors
url: https://github.com/nevertoday/zhongguo-traditional-colors
owner: nevertoday
owner_type: User
language: JavaScript
license: MIT
description: "中华传统色演示、色卡浏览与颜色知识科普开源项目"
homepage: "https://nevertoday.github.io/zhongguo-traditional-colors/"
stars: 668
stars_per_day: 111
forks: 66
open_issues: 7
created: 2026-06-03
pushed_at: 2026-06-10
first_seen: 2026-06-10
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "色彩工具"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-10
use_case: "提供中华传统色的色卡浏览和知识科普，方便设计和内容创作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1069937
readme_length: 9339
bus_factor: 1
last_release_days: 7
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-10"
star_history: "2026-06-10:668"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - easy_install
aliases:
  - "zhongguo-traditional-colors"
  - "nevertoday/zhongguo-traditional-colors"
  - "提供中华传统色的色卡浏览和知识科普，方便设计和内容创作。"
---

# zhongguo-traditional-colors

**668** stars · **111** stars/天 · 建立 6 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.0` `easy-install`

> [!summary] 一句話摘要
> 提供中华传统色的色卡浏览和知识科普，方便设计和内容创作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (111 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要中國傳統色參考的設計師和內容創作者。
> **一句話重點** 這個專案不僅提供色彩資料，還整合了實用的設計技能，讓用戶能夠更有效地應用中國傳統色。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "色彩工具" && p.file.name !== "nevertoday--zhongguo-traditional-colors" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 色彩工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案整合了中國傳統色的色卡和設計實戰技能，提供了一個全面的資源庫。

## 專案簡介

這個專案提供了一個方便的方式來瀏覽和使用中國傳統色，包含742張高清色卡，每張色卡都詳細列出了色名、HEX、RGB、CMYK值及配色推薦。用戶可以在線瀏覽或下載ZIP包作為自己的色彩素材庫。這樣的設計使得設計師、內容創作者和教育者能夠快速找到所需的色彩參考，而不必花時間去搜索和整理資料。專案使用JavaScript、CSS和HTML構建靜態網站，並提供了簡單的本地啟動指令（如`npm run start`）來方便開發者進行本地測試和修改。

這個專案的賣點在於其全面性和易用性，特別適合需要中國色參考的設計工作。與其他色彩資料庫相比，如Adobe Color或Coolors，這個專案專注於中國傳統色，並提供了實用的設計技能指導，幫助用戶將色彩應用到實際項目中。使用者可以利用提供的技能（如`xxd-color-brief`和`xxd-palette-builder`）來解決設計中的具體問題，這些技能針對不同的設計需求進行了優化。專案目前處於初始階段，尚有一些性能問題（如搜索防抖）需要解決，但對於需要快速獲取中國傳統色的設計師和開發者來說，這是一個非常有價值的資源。

**技術棧**：`JavaScript` · `CSS` · `HTML`

## 重點功能

- 742 張高清色卡 — 每張色卡包含色名、HEX、RGB、CMYK 和配色推薦。
- 在線瀏覽和下載 — 用戶可以直接在網站上瀏覽色卡或下載完整的 ZIP 包。
- 設計實戰技能 — 提供 10 個針對設計問題的技能，幫助用戶應用傳統色。
- 易於使用的 CLI 指令 — 使用 `npm run start` 快速啟動本地服務器進行測試。
- 支持多語言 — README 提供簡體中文、英文和日文版本，方便不同語言的用戶使用。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/nevertoday/zhongguo-traditional-colors.git && cd zhongguo-traditional-colors && npm install
```
2. 啟動本地服務器
```bash
npm run start
```
3. 訪問本地網站
```bash
http://localhost:5173
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 Node.js 和 npm",
  "npm run start",
  "# 預期輸出：本地服務器啟動，訪問 http://localhost:5173"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 668 stars（111/天），forks 66（9.9%），這顯示出一定的社群關注度。作者nevertoday在開源社群中活躍，這個專案填補了中國傳統色資料不足的空白，特別是針對設計師和內容創作者的需求。社群對於色彩資料的需求逐漸增加，這可能是促使專案快速增長的原因之一。專案的設計理念和實用性也吸引了不少設計師的注意，進一步推動了其流行。

## 適合誰使用

**目標受眾**：需要中國傳統色參考的設計師和內容創作者。

> [!example] 使用場景
> - 設計師用它來快速找到中國傳統色的色卡，因為這樣可以節省大量搜索和整理的時間。
> - 內容創作者用它來製作海報和封面，因為提供的色卡和配色方案能夠提升作品的視覺吸引力。
> - 教育工作者用它來教學色彩理論，因為這些色卡能幫助學生更直觀地理解色彩的應用。

## 架構分析

這個專案採用靜態網站架構，使用 JavaScript、CSS 和 HTML 技術來構建。色卡資料存儲在本地，並通過簡單的腳本生成和管理。這樣的設計使得用戶可以快速訪問和下載色卡，而不需要依賴伺服器端的數據庫。選擇靜態網站的好處在於部署簡單，且能夠快速加載，但缺點是無法動態更新數據。擴展性方面，隨著色卡數量的增加，可能需要考慮如何優化性能以避免加載延遲。

## 技術深入分析

這個專案的核心技術機制是利用靜態網站架構來展示和管理中國傳統色的色卡，使用JavaScript來處理用戶交互和數據展示。該專案能夠處理742張高清PNG色卡，並提供了簡單的下載和瀏覽功能。效能方面，原圖約998MB，這對於網頁加載速度可能造成影響，特別是在移動設備上。選擇靜態網站的好處在於部署簡單，但在數據更新和動態交互方面有所限制。這個專案的設計取捨在於提供一個易於使用的資源庫，而不是一個動態交互的應用。隨著用戶需求的增加，未來可能需要考慮如何優化性能和擴展功能。整合方面，這個專案可以與現有的設計工具鏈（如Figma、Adobe等）搭配使用，但需要用戶自行將色彩資料轉換為相應格式。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰，提供了詳細的使用說明和範例；安裝過程順暢，無明顯坑；有良好的快速入門指南；文件目前僅提供中文和英文版本。

## 優缺點分析

> [!success] 優點
> - 提供全面的中國傳統色資料，方便設計師和內容創作者使用。
> - 包含實用的設計技能，幫助用戶解決實際問題。
> - 易於部署和使用，適合快速上手。

> [!danger] 缺點
> - 目前存在性能問題，影響用戶體驗。
> - 需要一定的前端技術基礎來進行本地部署和修改。
> - 開發者社群活躍度尚待提高，問題解決速度較慢。

> [!warning] 注意事項
> - 目前存在性能問題，如搜索輸入缺少防抖，可能導致多次渲染。
> - 數據腳本阻塞首屏渲染，影響用戶體驗。
> - 開發者需要一定的前端技術基礎來進行本地部署和修改。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
| Forks | 66 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-06-03 |
| 官方網站 | [Link](https://nevertoday.github.io/zhongguo-traditional-colors/) |
| Repo 大小 | 1044.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nevertoday/zhongguo-traditional-colors) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 61
>     "CSS" : 21
>     "HTML" : 17
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nevertoday](https://github.com/nevertoday) | 70 |

**最新版本**：v0.1.0 — Image pack v0.1.0 (2026-06-03)

> [!info]- Release Notes
> 包含当前 538 张中华传统色色卡图片。后续新增色卡后会继续发布新版图片包。\n\n页面地址：https://nevertoday.github.io/zhongguo-traditional-colors/

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量較多，尚未解決。
**連結**：[文件](https://nevertoday.github.io/zhongguo-traditional-colors/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-09 ~ 2026-06-10）
> **活躍天數** 2 天 · **最新 commit** Expand README skills usage guide

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/nevertoday/zhongguo-traditional-colors/issues/5) | perf(app-js): 搜索输入缺少防抖，快速键入触发多次渲染 | 0 | 0 |
> | [#3](https://github.com/nevertoday/zhongguo-traditional-colors/issues/3) | perf(index-html): 数据脚本阻塞首屏渲染 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 中国传统配色
> 
> 简体中文 | [English](README.en.md) | [日本語](README.ja.md)
> 
> 如果你在做设计、写内容、做课件、搭建网页主题，常常需要一套稳妥、好看、能直接使用的中国色参考，这个仓库就是为这件事整理的。
> 
> 这里收录 742 张中华传统色高清色卡，已按原始 742 色清单完整覆盖。每张色卡包含色名、HEX、RGB、CMYK、配色推荐和气质关键词。你可以在线浏览，也可以直接下载已经打包好的 ZIP，把它当作自己的传统色素材库。
> 
> 
> ## 快速入口
> 
> - [在线浏览色卡](https://nevertoday.github.io/zhongguo-traditional-colors/)
> - [直接下载完整 ZIP](https://github.com/nevertoday/zhongguo-traditional-colors/releases/latest/download/zhongguo-traditional-colors-images.zip)
> - [查看 Release](https://github.com/nevertoday/zhongguo-traditional-colors/releases/tag/v0.1.0)
> - [原始 742 色清单](docs/chinese-color-master-list.md)
> - [742 色配色方案 Markdown](docs/chinese-color-harmony.md)
> - [742 色配色关系 CSV](docs/chinese-color-harmony.csv)
> - [中国传统色实战 Skills](#中国传统色实战-skills)
> - [作者 X 主页](https://x.com/xiaoxiaodong01)
> 
> 
> ## 这个项目能帮你什么
> 
> | 你需要 | 这里提供 |
> | --- | --- |
> | 快速找中国色参考 | 742 张高清 PNG 色卡 |
> | 做设计和内容配图 | 可直接点击下载原图 |
> | 搭建色彩资料库 | 文件名与 742 色清单一一对应 |
> | 做网页、PPT、海报、课程素材 | README 全量预览，ZIP 一次下载 |
> | 校对色名和色值 | 色名、HEX、RGB、CMYK 集中整理 |
> | 把传统色真正用进项目 | 10 个面向设计实战的 Agent Skills |
> 
> 原图约 998 MB。ZIP 文件作为 GitHub Release 附件提供，不直接提交进仓库。
> 
> 
> ## 中国传统色实战 Skills
> 
> 这些 skill 不是继续解释色彩理论，而是把 742 色清单和配色关系 CSV 转成设计师能直接使用的工作流。每个 skill 都对应一个真实工作阻塞点：方向太虚、色板太多、落位困难、Token 交付、可读性、品牌治理、图表编码、旧稿迁移、系列内容和印刷生产。
> 
> 每个 `xxd-*` skill 目录都随包包含完整 `references/chinese-color-master-list.md`、`references/chinese-color-harmony.md` 和 `references/chinese-color-harmony.csv`，单独取用某个 skill 时也能访问完整 742 色清单和每个颜色的配色关系。
> 
> | Skill | 适合解决的问题 |
> | --- | --- |
> | [`xxd-color-brief`](skills/xxd-color-brief/SKILL.md) | 把“高级、东方、年轻、克制”这类模糊方向翻译成冷暖、明度、饱和度、对比和避坑约束 |
> | [`xxd-palette-builder`](skills/xxd-palette-builder/SKILL.md) | 从锚点色、HEX、情绪或场景中筛出少量可执行 palette，并分配主辅点缀和比例 |
> | [`xxd-palette-applier`](skills/xxd-palette-applier/SKILL.md) | 把一组颜色落到真实版面，决定背景、标题、正文、CTA、结构和装饰的位置 |
> | [`xxd-ui-token`](skills/xxd-ui-token/SKILL.md) | 把传统色变成 primitive、semantic、component、mode 四层 UI token 和代码输出 |
> | [`xxd-accessible-color`](skills/xxd-accessible-color/SKILL.md) | 用 WCAG ratio 检查文字、按钮、状态和图表，并用同库颜色修复失败组合 |
> | [`xxd-brand-system`](skills/xxd-brand-system/SKILL.md) | 为长期品牌建立锚点色、支撑色、比例、渠道规则、禁用组合和治理边界 |
> | [`xxd-data-viz`](skills/xxd-data-viz/SKILL.md) | 按分类、顺序、发散、高亮或语义状态生成图表色，而不是套海报色板 |
> | [`xxd-existing-design-audit`](skills/xxd-existing-design-audit/SKILL.md) | 盘点旧稿、CSS、Figma styles 或 HEX 清单，判断保留、合并、替换或移除 |
> | [`xxd-content-series`](skills/xxd-content-series/SKILL.md) | 为小红书、公众号、视频、课程和栏目建立固定层、变量层、模板层和轮换规则 |
> | [`xxd-print-packaging`](skills/xxd-print-packaging/SKILL.md) | 面向包装、书籍、文创、标签和实体材质规划用色，并提示 CMYK、材质和打样风险 |
> 
> 
> ### 怎么选择这些 Skills
> 
> 如果你还没有确定方向，先用 `xxd-color-brief`。如果已经有一个主色或一组候选色，用 `xxd-palette-builder` 收敛成色板，再用 `xxd-palette-applier` 放到真实版面。要交给开发、团队或生产环节时，再进入 `xxd-ui-token`、`xxd-brand-system`、`xxd-data-viz` 或 `xxd-print-packaging`。如果你手上是旧稿、旧 CSS 或散乱 HEX，先用 `xxd-existing-design-audit` 做盘点。长期内容矩阵则从 `xxd-content-series` 开始。
> 
> 下面是每个 skill 的详细使用方案。每一项都按“它帮谁、解决什么、你要输入什么、会得到什么、怎么触发”来写，方便直接复制到自己的项目里改。
> 
> xxd-color-brief：把模糊审美词变成配色方向
> 
> **利他价值**：帮客户、设计师和执行者先对齐判断语言，减少“我觉得不高级”“这个不够东方”这类主观拉扯。
> 
> **适合谁用**：项目刚启动的设计师、品牌负责人、内容团队、课程或活动视觉负责人。
> 
> **典型场景**：只有 moodboard、参考图、品牌关键词或客户口头反馈，还不适合直接选色。
> 
> **输入什么**：项目载体、目标人群、希望传递的气质、必须避开的感觉、已有参考图或竞品。
> 
> **得到什么**：冷暖、明度、饱和度、对比强度、风险边界、3 到 5 个起始传统色，以及下一步推荐使用的 skill。
> 
> **使用方式**：先让它输出方向简报，再把简报里的锚点色交给 `xxd-palette-builder` 生成具体色板。
> 
> 示例触发：
> 
> /xxd-color-brief 为新中式茶饮品牌做年轻但不俗的配色方向，受众是 20-35 岁女性，避免廉价国潮感
> 
> [查看完整 Skill](skills/xxd-color-brief/SKILL.md)
> 
> xxd-palette-builder：从 742 色里筛出可执行色板
> 
> **利他价值**：把选择困难变成少量可比较方案，让团队不用在几百个颜色里反复试错。
> 
> **适合谁用**：已经有锚点色、品牌关键词、HEX 清单、参考图或初步视觉方向的人。
> 
> **典型场景**：要做官网、封面、PPT、海报、包装或 UI，但不知道主色、辅色、点缀色怎么分配。
> 
> **输入什么**：锚点色或色名、用途、希望稳妥还是更有记忆点、浅色/深色偏好、禁用色或品牌限制。
> 
> **得到什么**：主色、辅色、背景色、强调色、推荐比例、替代方案、使用风险和可继续落版的色板。
> 
> **使用方式**：先选一个方向最明确的锚点色；如果没有锚点色，先用 `xxd-color-brief`。拿到色板后，用 `xxd-palette-applier` 判断具体放在哪里。
> 
> 示例触发：
> 
> /xxd-palette-builder 以月白为锚点，为文化类网站首页生成主辅点缀色板，要求安静、有层次、适合长文阅读
> 
> [查看完整 Skill](skills/xxd-palette-builder/SKILL.md)
> 
> xxd-palette-applier：把色板放进真实版面
> 
> **利他价值**：让颜色服务信息层级和阅读路径，而不是让所有颜色同时争抢注意力。
> 
> **适合谁用**：已经有色板，但不知道背景、标题、正文、按钮、边框、装饰分别用什么颜色的人。
> 
> **典型场景**：网页首屏、PPT 封面、课程详情页、文章长图、包装正反面或社媒模板。
> 
> **输入什么**：已有色板、页面结构、主要信息层级、用户最应该先看到什么、哪些区域需要克制。
> 
> **得到什么**：背景/内容/行动/结构/细节五类角色、面积比例、版面落点、错误用法和替代建议。
> 
> **使用方式**：先把色板中的每个颜色分配角色，再按面积比例落版；如果最后要交给开发，继续用 `xxd-ui-token`。
> 
> 示例触发：
> 
> /xxd-palette-applier 把月白、黛蓝、绛紫、银朱这组传统色用到课程封面和详情页首屏，重点突出报名按钮
> 
> [查看完整 Skill](skills/xxd-palette-applier/SKILL.md)
> 
> xxd-ui-token：把传统色变成开发能接的 UI Token
> 
> **利他价值**：让设计、开发和后续维护共用同一套命名规则，减少硬编码、返工和深色模式混乱。
> 
> **适合谁用**：做网站、App、后台、工具、设计系统、Figma variables 或 Tailwind 主题的人。
> 
> **典型场景**：设计稿已经定色，但开发需要 CSS variables、Tailwind config、Figma token 或浅深色模式规则。
> 
> **输入什么**：产品类型、已有色板、组件类型、浅色/深色模式要求、输出格式、需要保留的品牌色。
> 
> **得到什么**：primitive、semantic、component、mode 四层 token，默认 CSS variables，也可以改成 Tailwind 或 Figma 结构。
> 
> **使用方式**：先让它建立 token 命名和角色，再给开发接入。上线前建议再用 `xxd-accessible-color` 检查关键文本和按钮。
> 
> 示例触发：
> 
> /xxd-ui-token 把这组中国传统色转成官网浅色和暗色模式 CSS variables，包含按钮、边框、背景、文本和焦点态
> 
> [查看完整 Skill](skills/xxd-ui-token/SKILL.md)
> 
> xxd-accessible-color：检查传统色是否真的读得清
> 
> **利他价值**：照顾真实阅读者和操作场景，让传统色的美感不牺牲清晰度、可读性和可访问性。
> 
> **适合谁用**：需要检查正文、按钮、图表、状态提示、标签、焦点态或深色模式的人。
> 
> **典型场景**：颜色看起来很雅致，但文字压上去变浅，按钮不够明显，图表系列很难区分。
> 
> **输入什么**：前景色、背景色、用途、字号、是否为正文/按钮/状态/图表、是否需要通过 WCAG 标准。
> 
> **得到什么**：contrast ratio、通过/条件可用/失败判断、同库替代色、非颜色提示建议和修复方案。
> 
> **使用方式**：在页面上线、交付开发、制作图表或印刷小字前使用。失败组合不要硬撑，优先换同库替代色。
> 
> 示例触发：
> 
> /xxd-accessible-color 检查 #F9F4DC 背景上的 #5C2223 正文和按钮文字是否适合网页阅读，并给出同库替代色
> 
> [查看完整 Skill](skills/xxd-accessible-color/SKILL.md)
> 
> xxd-brand-system：把一次配色沉淀成长期品牌规则
> 
> **利他价值**：让团队有长期决策依据，减少每次活动、海报、官网或包装都重新争论颜色。
> 
> **适合谁用**：品牌升级、产品官网、社媒矩阵、包装系列、内容栏目或长期视觉系统负责人。
> 
> **典型场景**：已经有一组不错的中国传统色，但还没有品牌锚点、使用比例、渠道规则和禁用组合。
> 
> **输入什么**：行业、价格带、目标用户、竞品差异、品牌性格、主要渠道、已有色板或必须保留的颜色。
> 
> **得到什么**：品牌锚点色、支撑色、强调色、默认比例、渠道差异、禁用组合和后续 token 化建议。
> 
> **使用方式**：先用它确定长期规则，再把规则交给内容、设计和开发团队。需要落地 UI 时接 `xxd-ui-token`。
> 
> 示例触发：
> 
> /xxd-brand-system 为文创香氛品牌建立传统色规范，覆盖官网、包装、小红书封面和线下展陈
> 
> [查看完整 Skill](skills/xxd-brand-system/SKILL.md)
> 
> xxd-data-viz：按数据含义生成传统色图表方案
> 
> **利他价值**：让读者先看懂数据，再感受到中国传统色气质；图表颜色首先要服务理解。
> 
> **适合谁用**：做仪表盘、报告图表、地图、热力图、数据故事、课程数据页或可视化组件的人。
> 
> **典型场景**：海报色板直接放进图表后，分类分不清、顺序没轻重、正负发散没有中点。
> 
> **输入什么**：图表类型、系列数量、背景色、数据是分类/顺序/发散/高亮/语义状态中的哪一种。
> 
> **得到什么**：分类色数组、顺序色带、发散色带、高亮色、状态色，以及 ECharts、D3、Chart.js 可用格式。
> 
> **使用方式**：先判断数据关系，再让 skill 出色彩编码。不要把装饰色当图表色，必要时用 `xxd-accessible-color` 检查区分度。
> 
> 示例触发：
> 
> /xxd-data-viz 为 7 个分类和一个高亮系列生成 ECharts 中国传统色数组，背景是浅色，要求分类容易区分
> 
> [查看完整 Skill](skills/xxd-data-viz/SKILL.md)
> 
> xxd-existing-design-audit：把旧稿和散乱 HEX 迁移到传统色体系
> 
> **利他价值**：尊重旧项目里已经有效的识别资产，只清理真正造成混乱、重复或难维护的颜色。
> 
> **适合谁用**：手上有旧官网、旧 CSS、Figma styles、历史海报、品牌色表或一串散乱 HEX 的团队。
> 
> **典型场景**：旧稿颜色很多，没人知道哪些该保留、哪些该合并、哪些只是临时色。
> 
> **输入什么**：HEX 清单、截图描述、颜色当前用途、不能轻易改的颜色、希望迁移到传统色的程度。
> 
> **得到什么**：颜色盘点、相近传统色映射、保留/合并/替换/移除建议、迁移风险和执行顺序。
> 
> **使用方式**：先做审计，不要一上来全量替换。确认保留色后，再用 `xxd-brand-system` 或 `xxd-ui-token` 沉淀规则。
> 
> 示例触发：
> 
> /xxd-existing-design-audit 审计这组 CSS 颜色，映射到最接近的中国传统色，并告诉我哪些应该保留或合并
> 
> [查看完整 Skill](skills/xxd-existing-design-audit/SKILL.md)
> 
> xxd-content-series：为长期内容建立统一但不疲劳的色彩系统
> 
> **利他价值**：帮内容团队稳定生产，既保留栏目识别度，也降低每期重新设计封面和模板的压力。
> 
> **适合谁用**：小红书、公众号、视频封面、课程课件、newsletter、栏目海报和长期内容矩阵。
> 
> **典型场景**：每期都重新配色会散，完全固定又容易腻，团队难以长期执行同一套视觉语言。
> 
> **输入什么**：平台、栏目数量、更新节奏、模板类型、固定元素、可变化元素和希望形成的内容气质。
> 
> **得到什么**：固定层、变量层、模板层、栏目色、特殊期色、轮换规则和内容生产检查清单。
> 
> **使用方式**：先把栏目分层，再决定哪些颜色长期固定、哪些颜色轮换。需要做成品牌规范时接 `xxd-brand-system`。
> 
> 示例触发：
> 
> /xxd-content-series 为小红书 5 个栏目做统一但不重复的封面色彩系统，每周更新 3 次，要求传统但不老气
> 
> [查看完整 Skill](skills/xxd-content-series/SKILL.md)
> 
> xxd-print-packaging：把屏幕色推进到包装和印刷生产
> 
> **利他价值**：提前照顾印刷、材质、供应商和最终实物效果，减少交付后才发现色差或小字不可读的成本。
> 
> **适合谁用**：包装、书籍、礼盒、文创、标签、实体材料、展陈和需要给印刷方沟通的项目。
> 
> **典型场景**：屏幕 HEX 看起来很好，但实际受 CMYK、纸张、油墨、覆膜、烫金、光线和材质影响很大。
> 
> **输入什么**：品类、材质、工艺、预算/价格带、系列数量、是否需要专色、小字和条码区域要求。
> 
> **得到什么**：正背侧面板用色、系列变体规则、CMYK 风险、材质建议、小字和条码提醒、打样检查清单。
> 
> **使用方式**：先用它做生产前风险排查，再与供应商确认打样。不要直接把屏幕 HEX 当最终印刷值。
> 
> 示例触发：
> 
> /xxd-print-packaging 为茶叶礼盒规划传统色、系列变体和印刷打样清单，材质是哑粉纸加局部烫金
> 
> [查看完整 Skill](skills/xxd-print-packaging/SKILL.md)
> 
> 
> ## 为什么整理这个项目
> 
> 中文世界里有很多传统色资料，但真正做东西时，经常还要自己到处找图、抄色值、对照色名、整理文件。这个项目把这些重复劳动提前做掉，让设计师、老师、内容创作者和开发者可以直接拿来参考、下载和二次整理。
> 
> 中国传统色不只是一组漂亮色值，也连接着器物、织染、矿物颜料、诗词意象、节气物候和审美秩序。把它们做成一张张可浏览的色卡，会比单纯看表格更容易建立感觉，也更容易被更多人用起来。
> 
> 
> ## 适合谁用
> 
> - 设计师可以把它当作品牌配色、界面主题和视觉实验的参考板
> - 内容创作者可以用它做封面、海报、长图和传统文化选题配图
> - 老师和学生可以用它做色彩课程、美术教学、传统文化课件
> - 前端开发者可以用它做主题页面、颜色工具、素材站和开

## 延伸閱讀

相關概念：[[色彩理論]] · [[設計系統]] · [[視覺傳達]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[LiuMengxuan04--shushu-internship-tool|LiuMengxuan04/shushu-internship-tool]] · [[NoopApp--noop|NoopApp/noop]] · [[Tong89--smartNode|Tong89/smartNode]]

[GitHub](https://github.com/nevertoday/zhongguo-traditional-colors) · [官方網站](https://nevertoday.github.io/zhongguo-traditional-colors/)

## 相關收錄

> [!note]- 直接競品（同子分類：色彩工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "色彩工具" AND file.name != "nevertoday--zhongguo-traditional-colors"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "nevertoday--zhongguo-traditional-colors"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "nevertoday--zhongguo-traditional-colors" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "nevertoday--zhongguo-traditional-colors"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["色彩理論","設計系統","視覺傳達"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nevertoday--zhongguo-traditional-colors" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nevertoday--zhongguo-traditional-colors" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nevertoday" AND file.name != "nevertoday--zhongguo-traditional-colors"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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
> const me = dv.page("Repos/nevertoday--zhongguo-traditional-colors");
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

> **2026-06-10** — 首次收錄
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

- [[2026-06-10|2026-06-10]] — 首次收錄，668 stars
