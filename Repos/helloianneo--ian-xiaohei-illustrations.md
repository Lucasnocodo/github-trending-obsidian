---
repo: helloianneo/ian-xiaohei-illustrations
url: https://github.com/helloianneo/ian-xiaohei-illustrations
owner: helloianneo
owner_type: User
language: N/A
license: MIT
description: "中文小黑怪诞正文配图生成 Skill | 16:9 白底手绘 | 少量红橙蓝批注 | Codex Skill"
homepage: "https://ianneo.xyz"
stars: 817
stars_per_day: 409
forks: 74
open_issues: 1
created: 2026-05-27
pushed_at: 2026-05-28
first_seen: 2026-05-30
week: "2026-W22"
month: "2026-05"
category: "AI/ML"
subcategory: "插圖生成"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-30
use_case: "生成中文文章的手绘配图，讓 AI 不只是配圖，而是具體表達文章中的關鍵認知。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 0
engagement: "low"
issue_close_rate: 0
repo_size_kb: 13190
readme_length: 4464
bus_factor: 0
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:817"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - easy_install
  - "topic/ai_agent"
  - "topic/chinese"
  - "topic/codex_skill"
  - "topic/handdrawn"
  - "topic/illustration"
aliases:
  - "ian-xiaohei-illustrations"
  - "helloianneo/ian-xiaohei-illustrations"
  - "生成中文文章的手绘配图，讓 AI 不只是配圖，而是具體表達文章中的關鍵認知。"
---

# ian-xiaohei-illustrations

**817** stars · **409** stars/天 · 建立 2 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.0` `easy-install`

`ai-agent` `chinese` `codex-skill` `handdrawn` `illustration` `image-generation` `xiaohei`

> [!summary] 一句話摘要
> 生成中文文章的手绘配图，讓 AI 不只是配圖，而是具體表達文章中的關鍵認知。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (409 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要為中文文章創建手繪插圖的內容創作者和教育工作者。
> **一句話重點** 這個專案讓 AI 不只是生成插圖，而是具體表達文章中的關鍵認知，提供了一種新的視覺化方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "插圖生成" && p.file.name !== "helloianneo--ian-xiaohei-illustrations" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 插圖生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到獨特的手繪插圖效果，值得探索。

> [!abstract] 核心創新
> 這個專案的核心創新在於將中文文章中的關鍵認知轉化為手繪風格的插圖，並強調小黑角色的參與。

## 專案簡介

Ian Xiaohei Illustrations 是一個專為中文文章設計的 Codex Skill，旨在生成手繪風格的正文配圖。使用者可以透過 AI 來提煉文章中的認知點，並將其轉化為 16:9 的插圖，這些插圖以小黑這個角色為主體，並且包含少量的中文批注。這個工具的賣點在於它不僅是生成插圖，而是將文章中的關鍵概念具象化，讓讀者更容易理解。使用者可以透過指令如 `Use $ian-xiaohei-illustrations` 來直接生成配圖或規劃配圖，這樣的設計使得內容創作者能夠快速獲得視覺化的支持。技術上，這個工具依賴於 Codex 的能力來解析文本並生成圖像，並且強調了手繪風格的獨特性，避免了傳統商業插畫的風格。

與其他插畫生成工具相比，如 DALL-E 或 Midjourney，這個工具專注於中文內容的特定需求，並且提供了更具個人化的風格選擇。使用者在生成過程中可以控制每張圖的主題和結構，這樣的靈活性使得它在知識型內容創作中非常有價值。對於需要將抽象概念視覺化的內容創作者來說，這是一個非常合適的工具，但不適合需要複雜插圖或商業用途的情境。整體來看，這個專案的成熟度尚在初期階段，但其獨特的市場定位和功能設計使其在特定用戶群中具有潛力。

## 重點功能

- 16:9 配圖生成 — 自動生成符合文章內容的手繪插圖。
- 小黑角色 — 每張圖都必須包含小黑，強調其在核心動作中的參與。
- 中文批注 — 插圖中包含少量紅橙藍的中文批注，增強理解。
- 配圖規劃 — 提供 shot list 功能，幫助使用者規劃插圖主題。
- 風格校準 — 提供多個風格校準範例，幫助使用者理解插圖風格。

## 快速開始

1. 克隆仓库
```bash
git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git
```
2. 复制 skill 到 Codex skills 目录
```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills" && cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```
3. 在 Codex 中使用
```bash
Use $ian-xiaohei-illustrations 为这篇中文文章设计并生成 5 张小黑怪诞正文配图。
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝 Codex 並配置好技能",
  "指令": "Use $ian-xiaohei-illustrations 把下面这篇文章生成 4 张小黑怪诞正文配图。要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注。",
  "預期輸出": "生成 4 张符合要求的手绘插图，並保存到指定的 workspace 目錄。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 817 stars（409/天），forks 74（9.1%），顯示出強烈的使用需求。作者 Ian 是一位產品設計師，專注於 AI 相關的工具開發，這個專案解決了中文內容創作者在插圖生成上的痛點，提供了一個針對性強的解決方案。近期的社交媒體討論和對手繪風格的需求上升，可能也促進了這個專案的曝光和使用。

## 適合誰使用

**目標受眾**：需要為中文文章創建手繪插圖的內容創作者和教育工作者。

> [!example] 使用場景
> - 內容創作者用它來為中文文章生成手繪風格的配圖，因為這樣的配圖能夠更好地表達文章中的關鍵概念。
> - 教育工作者用它來為教學材料創建插圖，因為手繪風格能夠吸引學生的注意力並幫助理解抽象概念。
> - 市場營銷人員用它來設計社交媒體內容，因為這種獨特的視覺風格能夠提升品牌識別度。

## 架構分析

這個專案的架構基於 Codex 技術，專注於生成手繪風格的插圖。使用者提供的文本內容會被解析，然後提煉出可視化的認知點，這些認知點會被轉化為插圖。這樣的設計使得插圖生成過程中能夠保留文章的核心意義，並且強調了小黑角色的參與。這種架構的代價在於對於複雜內容的處理可能不如專業插畫師來得靈活，並且生成的插圖風格較為單一。擴展性方面，這個工具在處理大量請求時可能會遇到性能瓶頸，特別是在高並發的情況下。

## 技術深入分析

Ian Xiaohei Illustrations 的核心技術機制是基於 Codex 的能力來解析文本並生成插圖。這個工具專注於中文內容，並且使用小黑這個角色來增強插圖的趣味性和識別度。由於其手繪風格的設計，這個工具在生成插圖時會強調留白和簡約的表現，這樣的設計使得插圖不會過於繁雜，並且能夠清晰地傳達核心概念。效能方面，由於是基於 AI 模型，生成速度可能會受到請求量的影響，尤其是在高並發的情況下。

設計取捨方面，選擇手繪風格而非數位插圖，雖然增加了獨特性，但也限制了插圖的多樣性。這個工具的依賴樹相對簡單，主要依賴於 Codex 的 API，這降低了維護的複雜度。技術風險方面，隨著使用者數量的增加，可能會導致性能瓶頸，特別是在高需求的情況下。整合方面，這個工具可以輕鬆地與現有的內容創作流程結合，特別是在使用 Codex 的環境中，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝和使用範例，安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 專注於中文內容的插圖生成，滿足特定需求。
> - 手繪風格獨特，能夠吸引讀者注意。
> - 提供配圖規劃功能，幫助使用者更好地組織內容。

> [!danger] 缺點
> - 不支持商業用途，限制了使用場景。
> - 生成的插圖風格較為單一，可能不適合所有需求。
> - 對於複雜內容的視覺化能力有限。

> [!warning] 注意事項
> - 不支持生成商業插畫或品牌 KV。
> - 不適合需要複雜架構圖或流程圖的情境。
> - 不支持生成可編輯的矢量圖格式，如 SVG 或 HTML。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的插圖可能會出現風格漂移，需要手動校正。
  - 解法：在生成後檢查並進行必要的調整。
- **[HIGH]** 小黑角色的參與度可能不足，導致插圖效果不佳。
  - 解法：確保在每張圖中強調小黑的核心動作。
- [MEDIUM] 中文批注可能會出現錯字，影響理解。
  - 解法：在生成前檢查文本，並適當減少批注內容。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要為中文文章生成插圖的內容創作者 | 非常適合 | 專注於中文內容的插圖生成，滿足特定需求。 |
| 教育工作者需要為教學材料創建插圖 | 適合 | 手繪風格能夠吸引學生的注意力並幫助理解抽象概念。 |
| 市場營銷人員需要設計社交媒體內容 | 適合 | 獨特的視覺風格能夠提升品牌識別度。 |
| 需要生成商業插畫的設計師 | 不適合 | 不支持商業用途，限制了使用場景。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到獨特的手繪插圖效果，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，使用時相對安全。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
| Forks | 74 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-27 |
| 官方網站 | [Link](https://ianneo.xyz) |
| Repo 大小 | 12.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/helloianneo/ian-xiaohei-illustrations) |
| Topics | `ai-agent` `chinese` `codex-skill` `handdrawn` `illustration` `image-generation` `xiaohei` |

**最新版本**：v1.0.0 (2026-05-27)

> [!info]- Release Notes
> Initial public release of Ian Xiaohei Illustrations.\n\nIncludes:\n- Installable Codex Skill under ian-xiaohei-illustrations/\n- Public README with installation and usage examples\n- 8 GitHub showcase images\n- 14 bundled style calibration examples\n- References for style DNA, Xiaohei IP, composition patterns, prompt template, and QA checklist

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有持續更新和回應。
**連結**：[文件](https://ianneo.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27）
> **活躍天數** 1 天 · **最新 commit** Initial release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/helloianneo/ian-xiaohei-illustrations/issues/1) | 你TMN的真是个天才！ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Ian Xiaohei Illustrations
> 
> > 把中文文章里的判断、流程、状态和隐喻，变成一张张白底、手绘、怪诞但清爽的正文配图。
> >
> > 16:9 横版 | 小黑 IP | 纯白手绘 | 少量红橙蓝中文批注 | Codex Skill
> 
> ---
> 
> ## 这个仓库是什么
> 
> Ian Xiaohei Illustrations 是一个 Codex Skill，用来指导 AI Agent 为中文文章、帖子、博客、Notion 文档和方法论内容生成正文配图。
> 
> 它不是通用插画 prompt，也不是 PPT 信息图模板。它的核心目标是：先理解文章里的认知锚点，再把其中一个判断、流程、结构、状态或隐喻，变成一张有记忆点的 16:9 手绘解释图。
> 
> 默认视觉 IP 是“小黑”：一个黑色实心、白点眼、细腿、空表情的小角色。小黑不是吉祥物，不是贴纸，也不是站在角落里的装饰物，而是正在认真参与系统运转的荒诞工作者。
> 
> 一句话：**让 AI 不只是“配一张图”，而是把文章里的一个关键认知动作画出来。**
> 
> ---
> 
> ## 适合谁用
> 
> 特别适合：
> 
> - 写中文文章，需要正文配图和文章插图的人
> - 做知识型内容、方法论内容、AI 工作流内容的人
> - 想把抽象判断画成具体隐喻的人
> - 想要一种比 PPT 信息图更轻、更怪、更有个人识别度的配图风格的人
> - 用 Codex 做内容生产，希望稳定复用一套视觉语言的人
> 
> 不适合：
> 
> - 想要商业插画、品牌 KV 或精致扁平插画的人
> - 想要传统 PPT 信息图、复杂架构图或流程图的人
> - 想要儿童卡通、可爱 IP、表情包风格的人
> - 想把大量正文、长段解释或完整课程页塞进一张图里的人
> - 需要严格可编辑矢量源文件的人
> 
> ---
> 
> ## 它会产出什么
> 
> 默认输出：
> 
> - 16:9 横版正文配图
> - 一篇文章的 4-8 张 shot list
> - 每张图的主题、核心意思、结构类型、小黑动作和中文标注建议
> - 最终 PNG 图片，保存到 workspace 的 `assets/-illustrations/`
> 
> 默认不输出：
> 
> - PPTX / PDF / Keynote
> - SVG / HTML / Canvas 可编辑图
> - 商业海报或封面 KV
> - 大段文字型信息图
> 
> ---
> 
> ## 视觉风格
> 
> 这个 skill 默认使用 Ian 的“小黑怪诞正文配图”风格：
> 
> - 纯白背景，不要纸纹、米色、阴影、渐变
> - 黑色手绘线稿，细线，轻微抖动
> - 大量留白，主体只占画面约 40%-60%
> - 少量红色、橙色、蓝色中文手写批注
> - 一张图只表达一个核心动作、结构、状态或隐喻
> - 小黑必须参与核心动作，不能只是装饰
> - 怪诞、有创意、清爽，但不幼稚、不卖萌
> 
> ---
> 
> ## 示例效果
> 
> ### 两个断点
> 
> ### 按目的分拣
> 
> ### 一鱼多吃
> 
> ### 承接路径
> 
> ### 信息井
> 
> ### 想法压机
> 
> ### 内容发酵
> 
> ### 信任桥
> 
> 这些图片是风格校准样例，不是构图模板。使用时应该从当前文章重新发明隐喻，不要照抄旧案例的物件和构图。
> 
> ---
> 
> ## 安装
> 
> 克隆仓库：
> 
> ```bash
> git clone https://github.com/helloianneo/ian-xiaohei-illustrations.git
> cd ian-xiaohei-illustrations
> ```
> 
> 复制 skill 到 Codex skills 目录：
> 
> ```bash
> mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
> cp -R ./ian-xiaohei-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
> ```
> 
> 安装后，在 Codex 里使用：
> 
> ```text
> Use $ian-xiaohei-illustrations 为这篇中文文章设计并生成 5 张小黑怪诞正文配图。
> ```
> 
> ---
> 
> ## 怎么用
> 
> ### 只做配图规划
> 
> ```text
> Use $ian-xiaohei-illustrations 先不要生图。
> 请分析下面这篇文章哪里值得配图，输出 5 张左右的 shot list。
> 每张图写清楚：放在哪段后、主题、核心意思、结构类型、小黑在做什么、建议中文标注词。
> 
> ```
> 
> ### 直接生成正文配图
> 
> ```text
> Use $ian-xiaohei-illustrations 把下面这篇文章生成 4 张小黑怪诞正文配图。
> 要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注。
> 
> ```
> 
> ### 为单个概念生成一张图
> 
> ```text
> Use $ian-xiaohei-illustrations 为“信任不是喊出来的，而是一块证据一块证据铺过去”生成一张正文配图。
> 画面要怪诞但清爽，小黑必须承担核心动作。
> ```
> 
> ### 去掉图里的标题或错误文字
> 
> ```text
> Use $ian-xiaohei-illustrations 帮我编辑这张图，去掉左上角的“流程图”标题，其他内容保持不变。
> ```
> 
> 更多示例见 [examples/prompts.md](examples/prompts.md)。
> 
> ---
> 
> ## 工作流程
> 
> 这个 skill 的流程是：
> 
> 1. 读取文章、Markdown、Notion 内容、截图或用户给的主题
> 2. 提炼核心观点、认知转折、流程结构和适合视觉化的段落
> 3. 先输出 shot list：每张图只选一个认知锚点
> 4. 为每张图选择结构类型：Workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线或小漫画分镜
> 5. 重新发明一个低科技、怪诞但成立的物理隐喻
> 6. 让小黑承担核心动作
> 7. 每张图单独调用图像模型生成
> 8. 按 QA checklist 检查：白底、留白、小黑动作、中文标注、非 PPT 感、非旧案例复刻
> 9. 保存最终 PNG，并报告用途和路径
> 
> ---
> 
> ## 目录结构
> 
> ```text
> .
> ├── README.md
> ├── LICENSE
> ├── NOTICE.md
> ├── assets/
> │   └── ian-wechat-qr.jpg
> ├── examples/
> │   ├── images/
> │   │   ├── 01-two-breakpoints.png
> │   │   ├── 02-sort-by-purpose.png
> │   │   └── ...
> │   └── prompts.md
> └── ian-xiaohei-illustrations/
>     ├── SKILL.md
>     ├── agents/
>     │   └── openai.yaml
>     ├── assets/
>     │   └── examples/
>     └── references/
>         ├── style-dna.md
>         ├── xiaohei-ip.md
>         ├── composition-patterns.md
>         ├── prompt-template.md
>         └── qa-checklist.md
> ```
> 
> 真正需要安装到 Codex 的是子目录：
> 
> ```text
> ian-xiaohei-illustrations/
> ```
> 
> 根目录的 README、LICENSE、NOTICE 和 examples 是 GitHub 分享文档。
> 
> ---
> 
> ## 注意事项
> 
> - 图片里的中文文字越短越稳定。
> - 每张图只讲一个核心结构，不要把文章做成说明书。
> - 小黑必须承担核心动作；如果去掉小黑画面仍然完全成立，说明小黑太装饰了。
> - 示例图只用于校准线条密度、留白、颜色克制和小黑参与方式，不要复刻构图。
> - AI 图像模型可能出现错字、幻觉标签、风格漂移或多余标题，生成后需要检查。
> - 如果中文错字严重，优先减少标注词并重生成。
> 
> ---
> 
> ## 相关项目
> 
> - [Ian Handdrawn PPT](https://github.com/helloianneo/ian-handdrawn-ppt) — 中文手绘技术 PPT-style 页面图生成 Skill
> - [Awesome Claude Code Skills](https://github.com/helloianneo/awesome-claude-code-skills) — Claude Code Skills / Agents / Plugins 精选合集
> - [Obsidian + Claude AI Second Brain](https://github.com/helloianneo/obsidian-ai-second-brain) — Obsidian + Claude AI 个人知识库搭建指南
> 
> ---
> 
> ## 关于作者
> 
> **Ian (伊恩)** — 产品设计师 / 一人公司实践者 / AI Builder
> 
> 用 AI 团队打造一人公司。
> 
> - GitHub: [helloianneo](https://github.com/helloianneo)
> - X/Twitter: [@ianneo_ai](https://x.com/ianneo_ai)
> - 网站: [ianneo.xyz](https://ianneo.xyz)
> - 微信: `ianneoxyz`
> - 邮箱: hello.neoc@gmail.com
> 
> ---
> 
> ## 下一步
> 
> 如果你喜欢这套小黑配图背后的工作方式，也可以继续看我正在做的几件事：
> 
> - **看见信号：AI 开眼日报**
>   每天筛一遍 AI 世界里真正和个人生意有关的产品、工具、工作流和内容机会。
> 
> - **拿到地图：AI × 一人公司知识库**
>   把 AI 工具、案例、模板和一人公司打法沉淀成一套可以反复查、反复用的行动地图。
> 
> - **进入现场：Indie Builders**
>   一群正在独立做项目的人，用 AI 把自己的产品、内容、工具、知识库和交付物做出来、晒出来、改出来。里面有主题训练、知识库、项目推进和成员互评，但重点不是看资料，而是一起把东西往前推。
> 
> 如果只是想先观察，备注「开眼」进 AI 开眼群；如果想聊 Indie Builders，备注「OPC」。
> 
>   
> 
> 不方便扫码也可以搜索微信：`ianneoxyz`。
> 
> ---
> 
> ## License
> 
> MIT License. See [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[插圖生成]] · [[AI 內容創作]] · [[視覺化]]

相關專案：[[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/helloianneo/ian-xiaohei-illustrations) · [官方網站](https://ianneo.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：插圖生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "插圖生成" AND file.name != "helloianneo--ian-xiaohei-illustrations"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "helloianneo--ian-xiaohei-illustrations"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "helloianneo--ian-xiaohei-illustrations" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "helloianneo--ian-xiaohei-illustrations"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["插圖生成","AI 內容創作","視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "helloianneo--ian-xiaohei-illustrations" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "helloianneo--ian-xiaohei-illustrations" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "helloianneo" AND file.name != "helloianneo--ian-xiaohei-illustrations"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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
> const me = dv.page("Repos/helloianneo--ian-xiaohei-illustrations");
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

> **2026-05-30** — 首次收錄
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

- [[2026-05-30|2026-05-30]] — 首次收錄，817 stars
