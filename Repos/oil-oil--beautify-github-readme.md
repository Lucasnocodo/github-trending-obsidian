---
repo: oil-oil/beautify-github-readme
url: https://github.com/oil-oil/beautify-github-readme
owner: oil-oil
owner_type: User
language: Python
license: MIT
description: "Design clear, theme-specific GitHub README homepages with SVG titles, real proof, and maintainable Markdown"
homepage: ""
stars: 869
stars_per_day: 145
forks: 49
open_issues: 1
created: 2026-07-13
pushed_at: 2026-07-19
first_seen: 2026-07-19
week: "2026-W30"
month: "2026-07"
category: "開發工具"
subcategory: "README 設計"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-19
use_case: "讓 GitHub README 更清晰且具主題性，使用 SVG 標題、實際證明和可維護的 Markdown。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-27"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 5466
readme_length: 6078
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-19"
star_history: "2026-07-19:828,2026-07-20:869"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agent_skill"
  - "topic/codex_skill"
  - "topic/github_readme"
  - "topic/readme_design"
  - "topic/svg"
aliases:
  - "beautify-github-readme"
  - "oil-oil/beautify-github-readme"
  - "讓 GitHub README 更清晰且具主題性，使用 SVG 標題、實際證明和可維護的 Markdown。"
---

# beautify-github-readme

**828** stars · **166** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/oil-oil--beautify-github-readme");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skill` `codex-skill` `github-readme` `readme-design` `svg`

> [!summary] 一句話摘要
> 讓 GitHub README 更清晰且具主題性，使用 SVG 標題、實際證明和可維護的 Markdown。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (166 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要提升 GitHub 頁面視覺效果和內容結構的開發者和設計師。
> **一句話重點** 這個專案展示了如何將實際項目材料轉化為吸引人的 README 設計，提升項目的可見性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "README 設計" && p.file.name !== "oil-oil--beautify-github-readme" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 README 設計 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到提升 README 質量的效果，值得採用。

> [!abstract] 核心創新
> 這個專案的創新在於將實際項目材料與可視化設計相結合，提升 README 的可讀性和吸引力。

## 專案簡介

這個專案的核心機制是通過分析現有的 GitHub 項目，提取最清晰的價值和證明，然後設計出具有主題性的 README 頁面。使用者可以選擇整個 README 模式或僅生成視覺資產，這樣可以確保內容的可讀性和可維護性。整個過程中，SVG 用於可編輯的英雄圖、段落過渡和圖表，而 Markdown 處理解釋、命令和鏈接。這樣的設計使得 README 不僅美觀，還能保持可搜索和可複製的特性。此工具的賣點在於其靈活性，能夠根據不同項目的需求提供定制化的視覺設計。技術上，這個專案使用 Python 開發，並且依賴於 GitHub 的 Markdown 和 SVG 格式，這樣的選擇使得生成的內容能夠在 GitHub 上安全顯示。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個專案不僅專注於視覺效果，還強調內容的結構和清晰度，這在許多 README 中是缺失的。實際使用中，這個工具能夠處理各種格式的資產，並且不會在未經批准的情況下修改原始內容，這降低了使用過程中的風險。對於需要提升 README 質量的開發者來說，這是一個非常合適的選擇。未來六個月內，預計會持續增強對 SVG 和 GIF 的支持，並可能引入更多的自動化功能。適合需要快速提升項目可見性的開發者使用，但對於不需要視覺設計的簡單項目則可能顯得過於複雜。

**技術棧**：`Python`

## 重點功能

- 整體 README 模式 — 重新設計整個 README 頁面，強調內容的清晰度和可讀性。
- 資產生成模式 — 僅生成視覺資產，如 SVG 英雄圖和 GIF，保持原始內容不變。
- SVG 支持 — 使用可編輯的 SVG 來創建動態和靜態視覺元素。
- Markdown 整合 — 確保生成的內容可搜索和可複製，提升可維護性。
- 主題化設計 — 根據不同項目的需求，提供定制化的視覺設計方案。

## 快速開始

1. 從命令行安裝
```bash
npx skills add oil-oil/beautify-github-readme
```
2. 使用 Agent 安裝
```bash
Install this Skill: https://github.com/oil-oil/beautify-github-readme
```
3. 選擇模式
```bash
Use $beautify-github-readme to redesign this repository homepage around its real project theme.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 828 stars（166/天），forks 47（5.7%），顯示出穩定的增長趨勢。作者 oil-oil 和 moesix 在 GitHub 上有其他相關專案，這使得他們在這個領域有一定的影響力。這個專案解決了許多開發者在設計 README 時面臨的問題，特別是如何有效地展示項目內容和價值。之前的方案往往缺乏靈活性和可維護性，這使得這個工具在需求上有明顯的優勢。社群的反應也很積極，顯示出對這種工具的需求。forks/stars 比率適中，顯示出有一定的實際使用者在修改和改進這個工具。

## 適合誰使用

**目標受眾**：需要提升 GitHub 頁面視覺效果和內容結構的開發者和設計師。

> [!example] 使用場景
> - 開發者用它來提升 GitHub 頁面的可讀性和吸引力，因為這樣可以更有效地展示項目的價值和使用案例。
> - 設計師用它來創建視覺上吸引人的 README，因為這樣可以幫助他們的作品在 GitHub 上脫穎而出。
> - 項目維護者用它來簡化 README 的結構和內容，因為這樣可以減少潛在的混淆，讓新貢獻者更容易上手。

## 架構分析

這個專案採用 Python 開發，核心架構是基於 GitHub 的 Markdown 和 SVG 格式。設計上分為整體 README 模式和資產生成模式，這樣的選擇使得使用者可以根據需求靈活選擇。資料流方面，使用者提供的 README 內容會被分析，然後根據項目的特性生成相應的視覺元素。

這樣的設計使得專案能夠保持靈活性和可維護性，並且不會在未經批准的情況下修改原始內容。選擇 Python 作為開發語言的好處在於其豐富的庫和社群支持，但可能會導致對於某些特定功能的實現速度較慢。整體而言，這個架構在靈活性和安全性之間取得了良好的平衡。

## 技術深入分析

這個專案的核心技術機制在於使用 Python 來分析和重組 GitHub README 的內容，並生成相應的視覺元素。使用 SVG 來創建可編輯的圖形，這樣的設計使得 README 不僅美觀，還能保持可搜索性。效能上，這個工具能夠快速處理多個 README 文件，但在生成複雜視覺元素時可能會遇到性能瓶頸。選擇 Python 作為開發語言的好處在於其強大的庫支持，但也可能導致在某些情況下的性能不如其他語言。這個專案的設計取捨在於靈活性與安全性之間的平衡，特別是在資產生成模式下，使用者必須明確授權才能進行修改。技術風險方面，未來可能會面臨對 GitHub API 的依賴問題，特別是在高流量的情況下。整合方面，這個工具能夠與現有的 GitHub 工作流無縫對接，並且可以輕鬆地與 CI/CD pipeline 結合使用，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細說明。安裝過程順暢，沒有明顯的坑。文件中有良好的範例和指令，容易上手。

## 優缺點分析

> [!success] 優點
> - 靈活的設計選項，能夠根據不同項目需求提供定制化的視覺效果。
> - 保持原始 README 的可讀性和可維護性，減少修改風險。
> - 支持 SVG 和 GIF，提升視覺吸引力。

> [!danger] 缺點
> - 對於不需要視覺設計的簡單項目來說，可能顯得過於複雜。
> - 需要使用者提供明確的指示，否則無法進行修改。
> - 在資產生成模式下，無法自動修改 README 的內容和結構。

> [!warning] 注意事項
> - 僅支援 GitHub 上的 README 文件，不適用於其他平台。
> - 在資產生成模式下，無法自動修改 README 的內容和結構。
> - 需要使用者提供明確的指示，否則無法進行修改。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色圖像，而本專案則專注於 README 的整體設計和內容結構。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態 README 模板，而本專案提供動態生成和主題化設計的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色圖像，而本專案則專注於 README 的整體設計和內容結構。 | 如果你的專案需要生成角色圖像而不是 README 設計，則應選擇此工具。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態 README 模板，而本專案提供動態生成和主題化設計的能力。 | 如果你的需求僅限於靜態模板，而不需要動態生成的元素，則可以考慮此工具。 | medium，因為需要重新設計 README 的結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **beautify-github-readme** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成角色圖像，而本專案則專注於 README 的整體設計和內容結構。 | 提供靜態 README 模板，而本專案提供動態生成和主題化設計的能力。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要重新設計 README 的結構。 |
> | 適用場景 | 主要場景 | 如果你的專案需要生成角色圖像而不是 README 設計，則應 | 如果你的需求僅限於靜態模板，而不需要動態生成的元素，則可以考 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的 SVG 圖片尺寸不符合 GitHub 的顯示要求，導致顯示不清晰。
  - 解法：手動調整生成的 SVG 尺寸以符合 GitHub 的要求。
- **[HIGH]** 在資產生成模式下，無法自動修改 README 的內容，可能導致使用者混淆。
  - 解法：使用者需明確指定需要生成的資產類型。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開源項目的 README 設計 | 非常適合 | 能夠提升項目的可見性和吸引力。 |
| 大型企業的技術文檔 | 普通 | 雖然功能強大，但可能對於簡單的文檔需求過於複雜。 |
| 需要快速生成視覺資產的團隊 | 適合 | 能夠快速生成 SVG 和 GIF，提升工作效率。 |
| 不需要視覺設計的簡單項目 | 不適合 | 對於簡單項目來說，功能過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到提升 README 質量的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料，適合在 CI/CD pipeline 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 GitHub 及其相關的 CI/CD 工具搭配使用。在一個使用 GitHub Actions 的專案中，你可以用這個工具來提升 README 的可讀性，具體做法是使用 npx 安裝並運行相應的命令。與主流工具鏈的相容性良好，支持多種 CI 工具，並且可以輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要使用者明確授權才能進行修改，這可能會造成初次使用者的困惑。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴靜態模板或手動編輯 README，這導致了內容的可讀性和一致性問題。隨著 GitHub 成為開源項目的主要平台，對於高質量 README 的需求日益增加。這個工具的出現正好填補了這一空白，提供了一個靈活且可維護的解決方案。

未來，隨著更多開發者意識到 README 的重要性，這個工具可能會成為標準的 README 設計工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
| Forks | 47 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-17 |
| 建立日期 | 2026-07-13 |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/oil-oil/beautify-github-readme) |
| Topics | `agent-skill` `codex-skill` `github-readme` `readme-design` `svg` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@oil-oil](https://github.com/oil-oil) | 13 |
> | [@moesix](https://github.com/moesix) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/oil-oil/beautify-github-readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-14 ~ 2026-07-17）
> **活躍天數** 4 天 · **最新 commit** docs: add codex-dev-team to showcase (#8)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/oil-oil/beautify-github-readme/issues/10) | 生成的svg图是 1200px像素的，但github是 900px，导致字体太小 | 0 | 0 |
> | [#9](https://github.com/oil-oil/beautify-github-readme/issues/9) | Generating the diagram SVGs instead of hand-drawing them — p | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> English · 简体中文
> 
>   
> 
>   
> 
>   
> 
> These are not hypothetical templates. The method is already used by six public repositories, each with its own visual language and content structure:
> 
> - **[oil-ppt](https://github.com/oil-oil/oil-ppt)** — presents the method, results, and first-use path for programmatic slide creation in one visual system.
> - **[draw-ui](https://github.com/oil-oil/draw-ui)** — uses real UI outputs to explain the path from a brief and reference images to HTML/CSS reconstruction.
> - **[oil-icon](https://github.com/oil-oil/oil-icon)** — uses real icon sets to explain style locking, batch generation, slicing, and transparent delivery.
> - **[Selector](https://github.com/oil-oil/selector)** — puts page selection, structured context, and real output directly into the opening screen and examples.
> - **[codex-dev-team](https://github.com/oil-oil/codex-dev-team)** — uses a character-driven team map to explain how one main Codex thread delegates exploration, bounded implementation, and independent review to four custom agents.
> - **[torqueDASH-Next](https://github.com/moesix/torque-dash-next)** — uses a project-native SVG hero with OBD-II PID data and a real dashboard screenshot to explain a self-hosted vehicle telemetry dashboard.
> 
> If this Skill helped you create a public README you are proud of, you are welcome to propose it for this list in a PR. This is completely optional: the footer signature is appreciated but never required, and showcase submissions remain subject to maintainer review.
> 
> Below are four independent hero directions. They do not share one house style; each derives its typography, color, composition, and proof from the project itself.
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
> 
> Most repositories already contain enough information. The problem is usually the order: visitors see internal terminology, installation commands, and directory trees before they understand what the project is for.
> 
> `beautify-github-readme` reads the real repository first, identifies the clearest value and proof, and only then decides how the page should look.
> 
>   
> 
> In whole-README mode, it works across three layers:
> 
> | Content | Visual system | Engineering |
> | --- | --- | --- |
> | Remove repetition, move proof forward, and replace internal jargon with concrete outcomes | Derive color, typography, composition, and project-native motifs before designing the hero and supporting modules | Keep assets GitHub-safe, images accessible, commands copyable, and body text searchable |
> 
> Different projects should not receive the same template. A CLI can use command rhythm and cursors; an icon system can use keylines and cutouts; a research repository can use coordinates, charts, and evidence labels.
> 
>   
> 
> GitHub READMEs do not have the layout freedom of a website. This Skill separates the visual and content layers:
> 
> - SVG handles editable heroes, section transitions, comparisons, diagrams, and identity.
> - GIF handles approved motion while the static SVG remains the editable fallback.
> - Motion is opt-in and is never generated by default.
> - PNG/WebP handles screenshots, generated artwork, and complex showcase walls.
> - Markdown handles explanations, commands, links, configuration, and contribution details.
> 
> The result can feel designed without becoming one long image that nobody can search, copy, or maintain.
> 
> The reusable production guidance lives here:
> 
> - [Designing a project-native hero](./skills/beautify-github-readme/references/project-native-hero.md)
> - [Writing GitHub-safe README SVGs](./skills/beautify-github-readme/references/svg-production.md)
> - [Producing GitHub-safe README motion](./skills/beautify-github-readme/references/motion-production.md)
> 
>   
> 
> The process keeps three promises: use real project material, never invent capabilities, and never publish without explicit approval.
> 
>   
> 
> **Option 1 · Install from the command line**
> 
> ```bash
> npx skills add oil-oil/beautify-github-readme
> ```
> 
> **Option 2 · Ask your Agent to install it**
> 
> ```text
> Install this Skill: https://github.com/oil-oil/beautify-github-readme
> ```
> 
> The Skill has two explicit modes:
> 
> | Mode | What it changes | What it leaves alone by default |
> | --- | --- | --- |
> | Whole README | Reading order, copy hierarchy, proof, Markdown, and the complete visual system | It will not commit, push, or publish without approval |
> | Asset-only | A static SVG hero, section headers, workflow, badge, diagram, or an optional GitHub-safe GIF with SVG source | It will not edit README copy, order, image references, or links |
> 
> If the request already states the scope, the Skill starts directly. If a user only says “beautify this repository” or provides a repository URL, the Agent asks:
> 
> ```text
> Would you like me to improve the whole README or only create visual assets?
> If asset-only, do you need a hero, section headers, workflow, badge, motion graphic, or a coordinated set?
> ```
> 
> **Whole-README mode**
> 
> ```text
> Use $beautify-github-readme to redesign this repository homepage around its real project theme.
> Show me a local preview first and do not push anything.
> ```
> 
> **Asset-only mode**
> 
> ```text
> Use $beautify-github-readme to keep the README unchanged and create one animated GIF hero with its SVG source.
> Derive the style from the existing project and show me the rendered preview first.
> ```
> 
> Reading a README for context does not grant permission to edit it. In asset-only mode, embedding the new assets requires a separate, explicit approval.
> 
> You can also request a read-only audit:
> 
> ```text
> Use $beautify-github-readme to audit this README for clarity, hierarchy, trust, and maintenance cost. Do not edit files.
> ```
> 
> Whole-README mode delivers a local preview, visual assets, and a README diff. Asset-only mode delivers source assets, rendered previews, optional GIF derivatives, and embed snippets. Commits, pushes, PRs, and publishing always require explicit authorization.
> 
> MIT License
> 
> ---
> 
> This README is also a working example: it combines a project-native hero, a theme wall, real adoption proof, section transitions, and readable Markdown instead of rasterizing the whole page.

## 延伸閱讀

相關概念：[[Markdown]] · [[SVG]] · [[GitHub]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]]

[GitHub](https://github.com/oil-oil/beautify-github-readme)

## 相關收錄

> [!note]- 直接競品（同子分類：README 設計）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "README 設計" AND file.name != "oil-oil--beautify-github-readme"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "oil-oil--beautify-github-readme"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "oil-oil--beautify-github-readme" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "oil-oil--beautify-github-readme"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Markdown","SVG","GitHub"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "oil-oil--beautify-github-readme" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "oil-oil--beautify-github-readme" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "oil-oil" AND file.name != "oil-oil--beautify-github-readme"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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
> const me = dv.page("Repos/oil-oil--beautify-github-readme");
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

> **2026-07-19** — 首次收錄
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

- [[2026-07-20|2026-07-20]] — 再次上榜，869 stars
- [[2026-07-19|2026-07-19]] — 首次收錄，828 stars
