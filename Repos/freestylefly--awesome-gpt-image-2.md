---
repo: freestylefly/awesome-gpt-image-2
url: https://github.com/freestylefly/awesome-gpt-image-2
owner: freestylefly
owner_type: User
language: N/A
license: MIT
description: "Prompt as Code | GPT-Image2 工业级提示词引擎与模板库 - 329个案例逆向工程，13套工业级模板"
homepage: ""
stars: 1716
stars_per_day: 572
forks: 297
open_issues: 2
created: 2026-04-25
pushed_at: 2026-04-28
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "其他"
subcategory: "提示詞生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供工業級提示詞引擎與模板庫，幫助用戶穩定、可控地生成圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 120852
readme_length: 4714
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:1274,2026-04-29:1716"
tags:
  - github
  - "category/其他"
  - "lang/other"
aliases:
  - "awesome-gpt-image-2"
  - "freestylefly/awesome-gpt-image-2"
  - "提供工業級提示詞引擎與模板庫，幫助用戶穩定、可控地生成圖像。"
---

# awesome-gpt-image-2

**1.3k** stars · **637** stars/天 · 建立 2 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供工業級提示詞引擎與模板庫，幫助用戶穩定、可控地生成圖像。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (637 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要穩定生成高質量圖像的設計師和開發者。
> **一句話重點** 這個專案的創新在於將提示詞結構化，讓生成圖像的過程更可控和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "提示詞生成" && p.file.name !== "freestylefly--awesome-gpt-image-2" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 提示詞生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 將提示詞轉化為結構化的代碼，提升生成圖像的可控性和重用性。

## 專案簡介

這個專案的核心在於將 GPT-Image2 的提示詞轉化為結構化的代碼，讓用戶能夠在自動化工作流中更有效地生成圖像。用戶可以透過提供的模板和案例，快速生成各種風格的圖像，並且這些模板都是基於實際案例逆向整理而來，能夠提高生成的可控性和重用性。專案提供了329個案例和13套工業級模板，涵蓋了UI設計、信息可視化、海報設計等多個場景，讓用戶能夠根據具體需求選擇合適的模板進行修改。技術上，這個專案並未明確指出使用的框架，但其設計理念是將提示詞的結構化和原子化，以便於在自動化系統中調用。

與其他提示詞庫相比，這個專案更注重於工作流的友好性和結構化控制，適合需要批量生成圖像的用戶。使用這個工具的效果是能夠快速生成高質量的圖像，但可能需要一定的學習曲線來掌握模板的使用。這個專案目前處於早期階段，社群活躍度尚可，但仍需觀察未來的發展方向。對於需要在商業環境中穩定生成圖像的團隊，這個工具提供了一個有趣的解決方案，但在實際使用前建議先進行小規模的測試。

## 重點功能

- 329個案例 — 提供多種風格的圖像生成示例，涵蓋多個應用場景。
- 13套工業級模板 — 針對不同需求的模板，便於用戶快速修改。
- 原子化 Schema — 將視覺要素拆分為可組合的組件，提升靈活性。
- 工作流友好 — 設計面向 Agent 和自動化系統，便於集成。
- 結構化控制 — 提高版式和文案的可控性，適合批量生成。

## 快速開始

1. 安裝依賴
```bash
# README 未提供安裝指令，請參考專案文檔
```
2. 選擇案例
```bash
訪問 docs/gallery.md 瀏覽完整案例
```
3. 使用模板
```bash
訪問 docs/templates.md 獲取模板使用說明
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1274 stars（637/天），forks 234（18.4%），這顯示出用戶對於這種結構化提示詞生成工具的需求。作者 freestylefly 之前在 AI 和設計領域有一定的背景，這個專案解決了傳統提示詞使用中的不穩定性和難以重用的問題，讓用戶能夠更有效地生成圖像。這個專案的推出可能受到社群對於 AI 生成內容的興趣增長的影響，尤其是在設計和創意領域。高達 18.4% 的 forks/stars 比率顯示出許多用戶對於這個工具的實際修改和使用，表明它在社群中引起了廣泛的關注。

## 適合誰使用

**目標受眾**：需要穩定生成高質量圖像的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來快速生成多種風格的海報，因為模板化的設計能夠節省時間並提高創意的多樣性。
> - 產品經理用它來創建信息圖，因為結構化的提示詞能夠更好地控制信息的層次和排版。
> - 開發者用它來集成到自動化工作流中，因為這樣可以批量生成圖像，提升工作效率。

## 架構分析

這個專案的架構設計以模板和案例為核心，通過將提示詞結構化來提升生成圖像的效率。每個模板都針對特定的應用場景設計，並提供了相應的結構化參數，這樣用戶可以根據自己的需求進行調整。這種設計使得用戶能夠在自動化系統中輕鬆調用模板，從而實現批量生成的需求。選擇這種結構化的方式而非傳統的散文式提示詞，能夠顯著提高生成的穩定性和可控性，但也要求用戶對模板的使用有一定的理解。擴展性方面，隨著案例和模板的增加，未來可能會遇到管理和維護的挑戰。

## 技術深入分析

這個專案的核心技術機制在於將提示詞結構化，以便於在自動化工作流中使用。透過將視覺要素拆分為原子化的組件，用戶能夠靈活組合，生成符合需求的圖像。雖然 README 中未提供具體的效能數據，但這種結構化的設計理論上能夠提高生成的速度和準確性。選擇這種方式而非傳統的提示詞，能夠顯著降低生成過程中的不確定性，但也要求用戶對模板的使用有一定的理解。這個專案的依賴關係尚不明確，未來可能需要進一步的文檔來說明如何整合到現有的技術棧中。對於需要在商業環境中使用的團隊，這個專案提供了一個有趣的解決方案，但在實際使用前建議先進行小規模的測試，以確保其穩定性和可用性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的項目介紹和使用指引，但缺乏詳細的安裝步驟和範例。安裝過程可能會因缺乏指導而造成困難。整體來說，對於新手來說，可能需要額外的時間來理解如何使用這個專案的模板和案例。

## 優缺點分析

> [!success] 優點
> - 結構化的提示詞設計，便於重用和調整。
> - 多樣化的案例和模板，適合不同需求的用戶。
> - 友好的自動化集成，適合開發者使用。

> [!danger] 缺點
> - 缺乏詳細的安裝指導和使用文檔。
> - 目前社群活躍度尚可，但仍需觀察未來發展。
> - 對於非英語用戶，文檔的語言可能成為障礙。

> [!warning] 注意事項
> - 尚未提供詳細的安裝指令和依賴說明。
> - 目前只提供英文文檔，對於非英語用戶可能不夠友好。
> - 案例和模板的數量雖多，但仍需用戶自行調整以符合具體需求。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
| Forks | 234 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-27 |
| 建立日期 | 2026-04-25 |
| Repo 大小 | 118.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/freestylefly/awesome-gpt-image-2) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@freestylefly](https://github.com/freestylefly) | 13 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新，但 Issue 解決率低。
**連結**：[文件](https://github.com/freestylefly/awesome-gpt-image-2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-25 ~ 2026-04-27）
> **活躍天數** 3 天 · **最新 commit** Add GPT Image 2 motion and sports prompt cases

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/freestylefly/awesome-gpt-image-2/issues/2) | 在线可视化展示站点 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Prompt as Code | GPT-Image2 工业级提示词引擎与模板库
> 
>   
>   
>   
>   
> 
> > 不定期更新最新的玩法，欢迎star。
> 
> ## ⚡️ 项目愿景
> 
> GPT-Image2 全量开放后，AI 画图从“能不能出图”变成了“能不能稳定、可控、可复用地出图”。这个项目做的不是单纯收集提示词，而是把零散案例逆向整理成一套更适合 Agent 和自动化工作流调用的 Prompt-as-Code 资产。
> 
> 核心目标只有一个：把“散文式提示词”压缩成“结构化协议”。当你需要批量出图、做模板系统、接进生产流程时，这种整理方式比单纯堆案例更有价值。
> 
> - 🧱 原子化 Schema：把主体、光影、材质、排版等视觉要素拆成可组合组件
> - ⚙️ 工作流友好：面向 Agent、脚本和自动化系统，而不是只给人肉复制
> - 🧬 结构化控制：尽量提高版式、文案、信息层级的可控性
> 
> ## 📖 快速入口
> 
> - [完整案例总览](docs/gallery.md)
> - [案例画廊 Part 1：例 1-165](docs/gallery-part-1.md)
> - [案例画廊 Part 2：例 166-351](docs/gallery-part-2.md)
> - [工业级提示词模板与防坑指南](docs/templates.md#section-templates)
> - [MIT License](LICENSE)
> - [完整声明页](docs/disclaimer.md#section-disclaimer)
> 
> ## 🗂️ 分类概览
> 
> - UI与界面：68
> - 图表与信息可视化：50
> - 海报与排版：65
> - 商品与电商：17
> - 品牌与标志：16
> - 建筑与空间：25
> - 摄影与写实：28
> - 插画与艺术：24
> - 人物与角色：12
> - 场景与叙事：7
> - 历史与古风题材：8
> - 文档与出版物：7
> - 其他应用场景：18
> 
> 需要按案例细看，直接进：
> 
> - [按册浏览完整画廊](docs/gallery.md)
> - [提示词模板总表](docs/templates.md)
> 
> ## 🖼️ 首页精选
> 
> ### 例 1：信息图可视化设计
> 
> [](docs/gallery-part-1.md#case-1)
> 
> 工程白皮书气质的信息图案例，适合看结构化信息图如何组织模块、层级和双语标签。  
> [查看完整案例](docs/gallery-part-1.md#case-1)
> 
> ### 例 2：社媒界面截图
> 
> [](docs/gallery-part-1.md#case-2)
> 
> 偏“产品界面 + 社媒内容截图”的混合场景，适合看文字区域、UI 框架和内容卡片的控制方式。  
> [查看完整案例](docs/gallery-part-1.md#case-2)
> 
> ### 例 6：插画艺术创作图
> 
> [](docs/gallery-part-1.md#case-6)
> 
> 日系奇幻插画范例，适合观察氛围、色彩和大场景构图的描述方式。  
> [查看完整案例](docs/gallery-part-1.md#case-6)
> 
> ### 例 17：界面交互设计图
> 
> [](docs/gallery-part-1.md#case-17)
> 
> 典型的“结构分解图 + 说明排版”场景，适合做产品示意图、海报化技术讲解图。  
> [查看完整案例](docs/gallery-part-1.md#case-17)
> 
> ### 例 166：十二黄金圣斗士卡牌合集
> 
> [](docs/gallery-part-2.md#case-166)
> 
> 多卡面、多元素统一风格的案例，适合参考批量生成与系列化设计。  
> [查看完整案例](docs/gallery-part-2.md#case-166)
> 
> ### 例 310：零食品牌技术分解图
> 
> [](docs/gallery-part-2.md#case-310)
> 
> 品牌叙事、分解结构和商业化呈现结合得比较完整，适合作为“信息图 + 品牌视觉”混合参考。  
> [查看完整案例](docs/gallery-part-2.md#case-310)
> 
> ### 苍何新增实测
> 
> - [例 330：月下美女直播画面](docs/gallery-part-2.md#case-330)
> - [例 331：西安手绘水彩城市地图](docs/gallery-part-2.md#case-331)
> - [例 332：茶π产品宣传海报](docs/gallery-part-2.md#case-332)
> - [例 333：AI 眼镜爆炸拆解图](docs/gallery-part-2.md#case-333)
> - [例 334：RAG 技术详解图](docs/gallery-part-2.md#case-334)
> - [例 335：朋友圈截图生成](docs/gallery-part-2.md#case-335)
> - [例 336：个人网页视觉设计](docs/gallery-part-2.md#case-336)
> - [例 337：《短歌行》诗词意境图](docs/gallery-part-2.md#case-337)
> - [例 338：《赤壁怀古》长卷图](docs/gallery-part-2.md#case-338)
> - [例 339：Apple 风格自然科普海报](docs/gallery-part-2.md#case-339)
> - [例 340：彼岸花丛中的红妆女子](docs/gallery-part-2.md#case-340)
> 
> ### 近 24 小时 X 社区新增
> 
> - [例 341：AP Calculus 学习表信息图](docs/gallery-part-2.md#case-341)
> - [例 342：四季包装 Campaign 宫格](docs/gallery-part-2.md#case-342)
> - [例 343：高定时尚杂志封面](docs/gallery-part-2.md#case-343)
> - [例 344：NOIR 街头服饰 Campaign](docs/gallery-part-2.md#case-344)
> - [例 345：法新浪潮撕纸电影海报](docs/gallery-part-2.md#case-345)
> - [例 346：立体刺绣小鸟花枝](docs/gallery-part-2.md#case-346)
> - [例 347：4×4 动作分解参考表](docs/gallery-part-2.md#case-347)
> - [例 348：胡须风格分析海报](docs/gallery-part-2.md#case-348)
> - [例 349：运动时尚三联 Campaign](docs/gallery-part-2.md#case-349)
> - [例 350：足球球员数据涂鸦海报](docs/gallery-part-2.md#case-350)
> - [例 351：健身品牌力量 Campaign](docs/gallery-part-2.md#case-351)
> 
> #### 代表案例 1：月下美女直播画面
> 
> [](docs/gallery-part-2.md#case-330)
> 
> 高仿直播截图场景，重点看界面氛围、中文弹幕和人物写实感的结合。  
> [查看完整案例](docs/gallery-part-2.md#case-330)
> 
> #### 代表案例 2：RAG 技术详解图
> 
> [](docs/gallery-part-2.md#case-334)
> 
> 适合用来参考“技术概念 + 信息图排版 + 中文说明模块”的组织方式。  
> [查看完整案例](docs/gallery-part-2.md#case-334)
> 
> #### 代表案例 3：《赤壁怀古》长卷图
> 
> [](docs/gallery-part-2.md#case-338)
> 
> 长卷尺寸、古风叙事和整篇文字排版结合得很完整，适合作为长文本视觉化参考。  
> [查看完整案例](docs/gallery-part-2.md#case-338)
> 
> ## 🧩 模板入口
> 
> 完整模板已移到 [`docs/templates.md`](docs/templates.md)。这里保留最核心的使用方式：
> 
> 1. 先明确任务类型：UI、海报、电商、信息图、角色设定、出版物。
> 2. 再锁定结构约束：比例、布局、模块数量、镜头语言、文字要求。
> 3. 最后补风格和材质：色彩、光线、笔触、氛围、材质、质感。
> 
> 如果是给 Agent 或脚本调用，优先看：
> 
> - [UI 与界面模板](docs/templates.md#tpl-ui)
> - [信息图模板](docs/templates.md#tpl-infographic)
> - [海报模板](docs/templates.md#tpl-poster)
> - [摄影模板](docs/templates.md#tpl-photo)
> 
> ## 🚀 怎么用这个库
> 
> 1. 先在精选案例里确定你要模仿的输出类型。
> 2. 再去完整画廊里找相近案例，抄结构，不要只抄风格词。
> 3. 最后回到模板页，把你的业务变量填进通用模板或 JSON 模板。
> 
> ## 📄 声明与补充
> 
> ## 致谢与来源说明
> 
> 本项目在整理与研究过程中，参考并使用了 [YouMind](https://youmind.com/) 与 [OpenNana](https://opennana.com/) 的公开提示词库内容，仅用于学习、归纳与方法论研究。相关内容版权归原作者或原平台所有，如有侵权或不当使用请联系处理，我们将第一时间修正或下线。
> 
> ## 声明 (Disclaimer)
> 
> 本项目仅整理公开可访问的社区提示词与示例图片，默认用于学习与研究，不主张对第三方原创内容的任何所有权。
> 
> 本项目里的所有提示词案例和生成的图片，最初的灵感和数据来源均来自公开社区，特别是 [YouMind](https://youmind.com/) 与 [OpenNana](https://opennana.com/)。我们做这个项目，主要是想把好看的案例拆解成可复用的结构化协议，用于学习、归纳和大模型 Agent 接入的自动化测试。
> 
> - 我们尽最大努力保留原始来源，包括作者主页、原帖链接与原仓库链接。
> - 涉及第三方内容时，遵循来源仓库声明、`CC BY 4.0` 等许可及对应平台规则。
> - 若你是原作者或权利人，认为某条内容不应展示，请在本仓库发起 Issue 并附上条目链接，我们将在核验后快速下架。
> - 本仓库不保证第三方内容可用于商业用途；商业使用前请自行取得原权利方授权。
> 
> **如果你觉得这个库帮到了你，请点亮右上角的 Star ⭐。**
> 
> ## Star 趋势图
> 
> [](https://star-history.com/#canghe/awesome-gpt-image-2&Date)
> 
> ## 公众号
> 
> 微信搜 **苍何** 或扫描下方二维码关注苍何的原创公众号，回复 **AI** 即可获取更多 AI 提示词学习资源。
> 
> ## 📜 开源协议
> 
> 本项目采用 [MIT License](LICENSE) 开源。你可以在保留许可声明的前提下自由使用、修改、分发与二次开发。

## 延伸閱讀

相關概念：[[Prompt Engineering]] · [[自動化]] · [[資料視覺化]]

相關專案：[[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[steipete--discrawl|steipete/discrawl]]

[GitHub](https://github.com/freestylefly/awesome-gpt-image-2)

## 相關收錄

> [!note]- 直接競品（同子分類：提示詞生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "提示詞生成" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "freestylefly--awesome-gpt-image-2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Prompt Engineering","自動化","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "freestylefly" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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

> **2026-04-28** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 再次上榜，1.7k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，1.3k stars
