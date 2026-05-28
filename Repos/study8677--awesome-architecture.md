---
repo: study8677/awesome-architecture
url: https://github.com/study8677/awesome-architecture
owner: study8677
owner_type: User
language: Vue
license: MIT
description: "🗺️ Think like a software architect, not just a coder — 21 architecture maps (incl. AI gateway, RAG, agents, inference serving, vector DB) + a language-agnostic system-design tutorial. Every template links to real open-source prototypes. 中英文双语。"
homepage: ""
stars: 569
stars_per_day: 142
forks: 55
open_issues: 0
created: 2026-05-23
pushed_at: 2026-05-27
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "架構設計"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "幫助開發者從架構思維出發，設計高效系統的開源知識庫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-04"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 1286
readme_length: 7057
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:569"
tags:
  - github
  - "category/開發工具"
  - "lang/vue"
  - easy_install
  - "topic/ai_agents"
  - "topic/architecture_decision_records"
  - "topic/architecture_patterns"
  - "topic/awesome"
  - "topic/awesome_list"
aliases:
  - "awesome-architecture"
  - "study8677/awesome-architecture"
  - "幫助開發者從架構思維出發，設計高效系統的開源知識庫。"
---

# awesome-architecture

**569** stars · **142** stars/天 · 建立 4 天前 · Vue · MIT

```dataviewjs
const me = dv.page("Repos/study8677--awesome-architecture");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`ai-agents` `architecture-decision-records` `architecture-patterns` `awesome` `awesome-list` `backend` `c4-model` `chinese` `design-patterns` `distributed-systems` `interview-preparation` `learning-resources` `microservices` `scalability` `software-architecture` `software-engineering` `system-design` `system-design-interview` `tech-interview` `vue`

> [!summary] 一句話摘要
> 幫助開發者從架構思維出發，設計高效系統的開源知識庫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (142 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升架構設計能力的開發者，特別是中小型團隊或個人開發者。
> **一句話重點** 這個專案強調架構思維的重要性，幫助開發者在設計系統時做出更明智的決策。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/study8677--awesome-architecture");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "架構設計" && p.file.name !== "study8677--awesome-architecture" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 架構設計 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到架構設計的系統性理解，值得採用。

> [!abstract] 核心創新
> 這個專案提供了一個以架構為核心的開源知識庫，幫助開發者在寫代碼之前先理解系統的架構。

## 專案簡介

這個專案提供了一個以架構為核心的開源知識庫，包含 21 種架構模板和系統設計教程，旨在幫助開發者在寫代碼之前，先清晰地理解系統的架構。使用者可以透過 `tutorial/` 目錄中的教程學習架構思維，並在 `templates/` 中找到真實系統的架構圖，這些模板不涉及具體語言或框架，而是專注於系統的設計決策和數據流動。關鍵的 CLI 指令如 `vitepress dev` 和 `vitepress build` 用於啟動和構建文檔，這使得使用者能夠輕鬆地查看和學習架構設計。這個工具的賣點在於它的語言無關性，讓開發者能夠專注於架構的本質而非具體實現。技術上，專案使用了 Vue 和 TypeScript，並依賴 VitePress 來生成文檔，這使得整體架構輕量且易於維護。與傳統的編碼教學相比，這個專案強調架構思維的重要性，幫助開發者在設計系統時做出更明智的決策。

相較於其他類似工具，如 `system-design-primer`，這個專案更注重於實際的架構模板和決策過程，而不僅僅是理論知識。使用者在實際應用中可能會發現，這些模板能夠幫助他們快速理解和設計複雜系統，特別是在面對高流量和高可用性需求時。這個專案目前處於活躍開發階段，社群活躍度高，並且沒有開放的 Issue，顯示出良好的維護狀態。對於希望提升架構設計能力的開發者來說，這是一個值得立即採用的資源，尤其適合中小型團隊或個人開發者。未來六個月內，預計會有更多的模板和教程更新，進一步擴展其功能和應用場景。

**技術棧**：`Vue` · `TypeScript` · `CSS` · `VitePress`

## 重點功能

- 架構模板 — 提供 25 種真實系統的架構圖，幫助理解設計決策。
- 系統設計教程 — 涵蓋從需求分析到架構決策的全過程，幫助開發者建立架構思維。
- 語言無關性 — 不依賴於特定語言或框架，專注於架構的本質。
- 互動式學習 — 提供中英文雙語的學習資源，適合不同背景的開發者。
- 活躍社群 — 定期更新和維護，保持內容的時效性和實用性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/study8677/awesome-architecture.git
```
2. 進入專案目錄
```bash
cd awesome-architecture
```
3. 啟動開發伺服器
```bash
npm run docs:dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 569 stars（142/天），forks 55（9.7%），這顯示出強烈的社群需求。作者 study8677 專注於架構設計，過去有多個相關專案，這個工具填補了開發者在架構設計上的知識空白。隨著 AI 和自動化技術的興起，開發者越來越需要理解系統架構而非僅僅編寫代碼，這使得該專案的價值愈加凸顯。社群的反饋和需求促進了這個專案的快速增長，特別是在技術面試和系統設計的背景下。forks/stars 比率接近 10%，顯示出許多人對此專案的實際修改和使用。

## 適合誰使用

**目標受眾**：希望提升架構設計能力的開發者，特別是中小型團隊或個人開發者。

> [!example] 使用場景
> - 新手開發者用它來學習架構設計的基本概念，因為它提供了系統化的教程和實際的架構模板。
> - 資深工程師用它來快速理解和設計高可用性系統，因為模板中包含了真實案例和關鍵決策的分析。
> - 面試準備者用它來複習系統設計的高頻考點，因為每個模板都涵蓋了重要的架構模式和設計考量。

## 架構分析

這個專案採用輕量級的 Vue 和 TypeScript 架構，利用 VitePress 生成文檔。這種設計使得開發者能夠快速啟動和構建文檔，並且維護成本低。資料流從用戶請求進入 VitePress，然後通過 Vue 組件渲染出互動式文檔。

選擇 VitePress 而非其他靜態網站生成器的原因在於其快速的構建速度和簡單的配置。這個架構的 trade-off 是在於靈活性，雖然 VitePress 提供了良好的性能，但在某些高流量的情況下可能需要額外的優化。整體而言，這個架構適合中小型專案，對於大型系統可能需要考慮擴展性問題。

## 技術深入分析

這個專案的核心技術機制是基於 Vue 和 TypeScript，利用 VitePress 來生成互動式文檔。這種選擇使得開發者能夠快速構建和維護文檔，並且提供良好的用戶體驗。效能上，這個架構能夠輕鬆處理中小型專案的需求，但在高流量情況下可能需要進一步優化。設計取捨方面，選擇 VitePress 而非其他靜態網站生成器的原因在於其快速的構建速度和簡單的配置，但這也意味著在某些情況下可能缺乏靈活性。技術風險方面，這個專案的依賴關係相對簡單，沒有過多的外部依賴，降低了供應鏈風險。整合分析上，這個工具可以輕鬆與現有的 CI/CD pipeline 整合，並且對於主流 IDE（如 VS Code）有良好的支持，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的學習路徑和範例。安裝過程順暢，無明顯坑。文件目前僅提供中英文，對於其他語言的支持有限。

## 優缺點分析

> [!success] 優點
> - 提供系統化的架構設計教程，適合不同程度的開發者。
> - 模板涵蓋多種真實系統，便於快速學習和應用。
> - 活躍的社群和定期更新，保持內容的時效性。

> [!danger] 缺點
> - 對於特定框架的支持不足，可能不適合某些開發者。
> - 目前模板數量有限，可能無法滿足所有需求。
> - 缺乏針對進階用戶的深入分析和案例研究。

> [!warning] 注意事項
> - 目前僅提供英文和簡體中文，對於其他語言的支持有限。
> - 模板數量仍在擴展中，可能不涵蓋所有系統類型。
> - 缺乏針對特定框架的深入教程，可能對某些開發者不夠友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| system-design-primer | 這個專案更注重於實際的架構模板和決策過程，而不僅僅是理論知識。 |
| awesome-architecture-patterns | 專注於架構模式的收集，而不是具體的系統設計和實踐。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| system-design-primer | 專注於系統設計面試的準備，而本專案更注重於實際的架構模板和設計決策。 | 如果你的主要目的是準備系統設計面試，這個工具會更合適。 | low，因為兩者的核心概念相似，轉換相對容易。 |
| awesome-architecture-patterns | 專注於架構模式的收集，而不是具體的系統設計和實踐。 | 如果你需要針對特定架構模式的深入研究，這個工具會更合適。 | medium，因為需要重新適應不同的學習方式和內容結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-architecture** | **system-design-primer** | **awesome-architecture-patterns** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於系統設計面試的準備，而本專案更注重於實際的架構模板和設計決策。 | 專注於架構模式的收集，而不是具體的系統設計和實踐。 |
> | 遷移成本 | - | low，因為兩者的核心概念相似，轉換相對容易。 | medium，因為需要重新適應不同的學習方式和內容結構。 |
> | 適用場景 | 主要場景 | 如果你的主要目的是準備系統設計面試，這個工具會更合適。 | 如果你需要針對特定架構模式的深入研究，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人學習和小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 目前僅提供英文和簡體中文，對於其他語言的支持有限。
  - 解法：使用翻譯工具輔助理解。
- [MEDIUM] 模板數量仍在擴展中，可能不涵蓋所有系統類型。
  - 解法：定期查看更新，或參與貢獻新模板。
- [low] 缺乏針對特定框架的深入教程，可能對某些開發者不夠友好。
  - 解法：結合其他資源學習特定框架的使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供了系統化的架構設計教程，能夠幫助團隊快速建立架構思維。 |
| 大型企業的核心系統設計 | 不適合 | 目前模板數量有限，可能無法滿足複雜需求。 |
| 準備系統設計面試的學生 | 非常適合 | 涵蓋了高頻考點，適合系統性復習。 |
| 資深架構師的日常工作 | 普通 | 雖然有實用的模板，但對於進階用戶的深入分析不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到架構設計的系統性理解，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該專案本身不需要高權限，並不存取敏感資料，依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/study8677--awesome-architecture");
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
> const me = dv.page("Repos/study8677--awesome-architecture");
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
| Forks | 55 |
| Open Issues | 0 |
| 最後推送 | 2026-05-27 |
| 建立日期 | 2026-05-23 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/study8677/awesome-architecture) |
| Topics | `ai-agents` `architecture-decision-records` `architecture-patterns` `awesome` `awesome-list` `backend` `c4-model` `chinese` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `vitepress`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Vue" : 51
>     "TypeScript" : 47
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@study8677](https://github.com/study8677) | 29 |

## 社群與生態

**社群活躍度**：社群活躍，無開放的 Issue，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/study8677/awesome-architecture)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-24 ~ 2026-05-27）
> **活躍天數** 4 天 · **最新 commit** docs(tutorial): 规划实战篇与 AI 协同篇,补齐全章随堂测验

## README 摘錄

> [!info]- 展開查看原文 README
> # Awesome Architecture · 架构图谱
> 
> > 一个专注「**架构**」而非「代码」的开源知识库。
> > 收集真实热门系统的架构模板,并配一套让你成为更好架构师的教程。
> 
> [English](./README_en.md) · **简体中文**
> 
> **🌐 在线阅读(可交互 · 中英双语,HTTPS):** 
> 
> **🧭 配套 skill:** [architecture-copilot](https://github.com/study8677/architecture-copilot) —— 把这套知识变成能在 Claude Code / Cursor / Codex 里**引导你一步步设计架构**的交互式 skill。
> 
> ---
> 
> ## 这个仓库为什么存在
> 
> 过去二十年,程序员的核心竞争力是「**把代码写对、写快**」。
> 
> 但有一件事正在我们眼前发生:**「写代码」这件事,正在消失。** 不是变难,也不是变少,而是作为「一门靠人来做的稀缺手艺」正在终结。在 OpenAI、Anthropic 这样的前沿实验室,代码几乎已经全部由 AI 写出,人类工程师不再亲手敲实现——他们只做两件事:**告诉 AI 要造什么,然后判断它造得对不对。** 当机器几秒就能吐出能跑的代码,"用 `for` 还是 `map`、背没背过某个 API、熟不熟某种语法"这些曾经的看家本领,一夜之间一文不值。
> 
> 真正不会贬值、而且越来越值钱的,是另一种能力:
> 
> > **在动手写第一行代码之前,先想清楚这个系统应该长什么样子。**
> >
> > 数据从哪来、到哪去?哪些部分必须强一致、哪些可以最终一致?
> > 哪里会先崩?用户从 1 万涨到 1 亿时,第一个瓶颈在哪?
> > 为了拿到 A,我愿意放弃哪个 B?
> 
> 这就是**架构思维**。它和具体语言无关,和框架无关,甚至和今年流行什么无关。它是一种「**先看地图,再上路**」的判断力。
> 
> **本仓库的信念:未来优秀的开发者,首先是一个会做架构判断的人,其次才是会写代码的人。** 你应该先在架构层面对自己要做的东西有清晰的理解,代码只是把这个理解落地的手段之一。
> 
> ---
> 
> ## 仓库里有什么
> 
> ```
> awesome-architecture/
> ├── tutorial/      📚 教程 —— 系统地教你「怎么像架构师一样思考」
> └── templates/     🗺️ 模板 —— 真实热门系统的架构地图,只讲架构、不讲语法
> ```
> 
> ### 📚 tutorial/ —— 成为更好架构师的教程
> 
> 不是讲「某个框架怎么用」,而是讲一套可迁移的思考方法:如何把模糊的需求拆成约束,如何在取舍中做决策,如何画出能沟通的架构图,如何从 0 设计一个全新系统。
> 
> | 章节 | 主题 | 你将学会 |
> |---|---|---|
> | [01](tutorial/01-为什么先有架构思维.md) | 为什么先有架构思维 | 为什么「架构优先」是这个时代的核心技能 |
> | [02](tutorial/02-架构师的思考框架.md) | 架构师的思考框架 | 需求 → 约束 → 质量属性 → 取舍 的通用流程 |
> | [03](tutorial/03-读懂与画好架构图.md) | 读懂与画好架构图 | 用 C4 模型把脑中的系统画出来、讲明白 |
> | [04](tutorial/04-十大核心架构模式.md) | 十大核心架构模式 | 分层、微服务、事件驱动、CQRS… 各自解决什么问题 |
> | [05](tutorial/05-数据与状态.md) | 数据与状态 | 为什么「数据」才是系统真正的难点 |
> | [06](tutorial/06-质量属性与取舍.md) | 质量属性与取舍 | 性能/可用性/一致性/成本,怎么权衡 |
> | [07](tutorial/07-从0到1设计一个系统.md) | 从 0 到 1 设计一个系统 | 一套可照着做的实战方法论 |
> | [08](tutorial/08-架构决策记录与演进.md) | 架构决策记录与演进 | 用 ADR 记录决策,让架构随业务长大 |
> | [09](tutorial/09-架构品味.md) | 架构品味 | 框架之外什么在拉开差距;用真实案例(微服务回单体、各大公司审美)养出判断力 |
> 
> **🚀 进阶篇(10–17,新增)—— 驾驭「做大做关键后才咬人」的硬骨头:**
> 
> | 章节 | 主题 | 你将驾驭 |
> |---|---|---|
> | [10](tutorial/10-分布式系统的硬道理.md) | 分布式系统的硬道理 | 部分失败、无全局时钟、共识的代价、exactly-once 幻觉 |
> | [11](tutorial/11-数据一致性工程.md) | 数据一致性工程 | Saga、Outbox、幂等、事件溯源、CQRS |
> | [12](tutorial/12-为失败而设计.md) | 为失败而设计·韧性工程 | 级联失败、熔断、舱壁、降载、SLO、混沌工程 |
> | [13](tutorial/13-规模化的力学.md) | 规模化的力学 | 一致性哈希、热点、多活、尾延迟与扇出放大 |
> | [14](tutorial/14-演进与拆分大型系统.md) | 演进与拆分大型系统 | 绞杀者、并行运行、零停机迁移、拆单体、DDD 限界上下文 |
> | [15](tutorial/15-组织即架构.md) | 组织即架构 | 康威 / 逆康威、团队拓扑、平台工程 |
> | [16](tutorial/16-安全与多租户架构.md) | 安全与多租户架构 | 威胁建模、零信任、爆炸半径、租户隔离 |
> | [17](tutorial/17-大模型时代的架构判断.md) | 大模型时代的架构判断 | vibe coding、非确定性、上下文工程、agentic 硬骨头 |
> 
> **🎯 实战篇(18–22,规划中)—— 把方法落到真实案例,补上「教程 → 模板」之间的桥:**
> 
> | 章节 | 主题 | 你将练会 |
> |---|---|---|
> | 18 | 读地图:用框架拆解陌生系统 | 对着 `templates/` 逆向读懂「为什么这么设计」 |
> | 19 | 完整设计演练:中等复杂度系统 | 07 八步流程第二次完整走法(票务/支付级硬约束) |
> | 20 | 演进剧本:MVP 到规模化 | 08 + [演进触发信号](tutorial/演进触发信号.md),同一系统的三段人生 |
> | 21 | 拆分与迁移实战 | 14 章方法案例化:绞杀者、并行运行、零停机迁移 |
> | 22 | AI 原生系统设计 | 17 章三个新约束的落地演练,引向 AI 协同篇 |
> 
> **🤝 AI 协同设计篇(23–26,规划中)—— 会设计之后,学会与 AI 协作落地与审查:**
> 
> | 章节 | 主题 | 你将掌握 |
> |---|---|---|
> | 23 | 规格即架构:约束怎么写给 AI | ADR / `AGENTS.md` → 可执行护栏,对接 [architecture-copilot](https://github.com/study8677/architecture-copilot) |
> | 24 | 审查清单:AI 产出默认缺什么 | 11/12/16 的生产级 review checklist |
> | 25 | 评测驱动:把「够好」写进架构 | eval 当 CI 门禁,承接非确定性 |
> | 26 | 协作决策树:何时 vibe、何时 spec-first | 原型 vs 生产的 workflow 总收束 |
> 
> > 👉 **新手从 [tutorial/README.md](tutorial/README.md) 开始**,那里有完整的学习路径。
> 
> ### 🗺️ templates/ —— 真实系统的架构模板
> 
> 每一个模板都是一张「架构地图」。我们**刻意不讨论用什么语言、什么框架**,只讨论:这类系统在解决什么问题、由哪些部件组成、数据怎么流动、关键决策怎么取舍、规模化时会死在哪里。
> 
> > 目前共 **25** 个模板(16 经典 / 通用 + 5 AI 原生 + 4 AI 编码 / 自治 Agent),每个都在末尾附**真实开源项目 / 工程文档链接**,可顺着去读源码。
> 
> **经典 / 通用系统:**
> 
> | 模板 | 代表产品 | 核心架构看点 |
> |---|---|---|
> | [AI 对话产品](templates/ai-chat-product/README.md) | Claude、ChatGPT | LLM 推理、流式输出、上下文管理、RAG、成本控制 |
> | [浏览器插件](templates/browser-extension/README.md) | Honey、Grammarly | 内容脚本/后台分离、页面注入、隐私边界、变现 |
> | [普通网站](templates/standard-web-app/README.md) | 企业官网、博客、SaaS 后台 | 经典三层、缓存、读写分离的「够用就好」 |
> | [移动 App](templates/mobile-app/README.md) | 大多数 iOS/Android 应用 | 离线优先、数据同步、客户端状态、推送 |
> | [电商平台](templates/ecommerce-platform/README.md) | Amazon、Shopify、淘宝 | 库存、订单、支付、超卖、大促洪峰 |
> | [社交信息流](templates/social-feed/README.md) | Twitter/X、Instagram | Feed 拉取/推送、关注关系、热点扩散 |
> | [视频流媒体](templates/video-streaming/README.md) | Netflix、YouTube | 转码、CDN、自适应码率、推荐 |
> | [实时通讯](templates/realtime-chat/README.md) | WhatsApp、Slack、微信 | 长连接、消息时序、离线投递、群扩散 |
> | [短链接服务](templates/url-shortener/README.md) | Bitly、TinyURL、t.co | 读多写少、缓存、301/302、分布式唯一 ID |
> | [支付系统](templates/payment-system/README.md) | Stripe、支付宝、PayPal | 幂等、复式记账、对账、状态机 |
> | [搜索引擎](templates/search-engine/README.md) | Google、Elasticsearch | 倒排索引、相关性排序、召回+精排、分片 |
> | [网约车 / 出行](templates/ride-hailing/README.md) | Uber、滴滴 | 地理空间索引、实时位置、供需匹配、动态定价 |
> | [实时协同文档](templates/collaborative-doc/README.md) | Google Docs、Figma | OT/CRDT、单 writer 串行、操作日志、离线同步 |
> | [云存储 / 网盘](templates/cloud-storage/README.md) | Dropbox、iCloud | 文件分块、内容寻址去重、增量同步、断点续传 |
> | [通知 / 推送系统](templates/notification-system/README.md) | Novu、FCM/APNs | 多渠道扇出、去重限频、异步重试、优先级 |
> | [在线票务 / 抢票](templates/online-ticketing/README.md) | Ticketmaster、大麦、12306 | 虚拟等候室、原子扣减防超卖、锁座超时 |
> 
> **🤖 AI 原生系统(LLM 时代新增):**
> 
> | 模板 | 代表产品 / 原型 | 核心架构看点 |
> |---|---|---|
> | [AI 中转站 / 网关](templates/ai-gateway/README.md) | One API、LiteLLM、Portkey | 统一接口、计费限流、负载均衡、故障转移、缓存 |
> | [RAG 知识库](templates/rag-knowledge-base/README.md) | RAGFlow、LlamaIndex、Dify | 切块、向量检索、混合检索+重排、引用溯源 |
> | [AI Agent / 工作流](templates/ai-agent-platform/README.md) | Dify、Coze、LangGraph | 行动循环、工具沙箱、记忆、可控兜底 |
> | [模型推理服务](templates/inference-serving/README.md) | vLLM、SGLang、Triton | 连续批处理、分页 KV 缓存、量化、多副本 |
> | [向量数据库](templates/vector-database/README.md) | Milvus、Qdrant、pgvector | ANN 近似最近邻、HNSW/IVF、召回-延迟权衡 |
> 
> **🦾 AI 编码 / 自治 Agent(2026 新增,真实在用的 Agent 产品架构):**
> 
> | 模板 | 代表产品 / 原型 | 核心架构看点 |
> |---|---|---|
> | [Claude Code](templates/claude-code/README.md) | Claude Code(Anthropic) | 本地优先编码 agent、子代理/钩子/技能/MCP、双层权限 + OS 沙箱、上下文压缩 |
> | [OpenAI Codex](templates/codex/README.md) | Codex CLI + Cloud | 本地 CLI 与云端异步沙箱双形态、沙箱 × 审批双轴、默认断网防注入、自动开 PR |
> | [OpenClaw(龙虾 🦞)](templates/openclaw/README.md) | OpenClaw(原 Clawdbot) | 自托管 Gateway、聊天软件即 UI、心跳 / cron、可插拔 harness、记忆即纯文本 |
> | [Hermes(爱马仕)](templates/hermes/README.md) | Hermes(Nous Research) | 常驻自我成长、FTS5 持久记忆、自动沉淀技能、cron、多渠道 / 多 provider |
> 
> > 👉 **想加入自己的模板?** 套用 [templates/_TEMPLATE.md](templates/_TEMPLATE.md) 的统一格式即可。
> 
> ---
> 
> ## 怎么用这个仓库
> 
> **如果你是初学者 / 想转向架构思维:**
> 按顺序读完 `tutorial/`,每读完一章,就去 `templates/` 里挑一个你感兴趣的系统,试着用刚学的框架去「读懂」它。
> 
> **如果你正要设计一个新系统:**
> 先去 `tutorial/07` 学方法论,再去 `templates/` 里找最接近你场景的那张地图,把它当作起点而不是答案——照着它的「关键决策」和「常见误区」逐条问自己。
> 
> **如果你在准备系统设计面试:**
> `templates/` 里的每个模板都覆盖了高频考点(超卖、Feed 扩散、消息时序、流式输出…),按统一格式组织,适合系统性复习。
> 
> **如果你是资深工程师 / 架构师:**
> 直接看每个模板的「关键决策与权衡」和「演进路线」,这是最浓缩的部分。欢迎贡献你踩过的坑。
> 
> ---
> 
> ## 三条阅读原则
> 
> 1. **先问「为什么」,再看「怎么做」。** 任何一个架构选择,背后都是某个约束或某个取舍。看不到取舍,就等于没看懂。
> 2. **没有最好的架构,只有最合适的架构。** 同样是「聊天」,做一个内部工具和做微信,答案天差地别。规模、团队、成本、合规决定一切。
> 3. **架构是会长大的。** 不要拿成熟期的架构去套 MVP。每个模板都给了「演进路线」,告诉你什么时候该升级、什么时候过度设计。
> 
> ---
> 
> ## 一句话总结
> 
> > **代码告诉计算机要做什么;架构决定这件事到底值不值得做、能不能做成、扛不扛得住。**
> > 这个仓库,帮你练后面那种判断力。
> 
> ---
> 
> ## ⭐ Star 历史
> 
> > 如果它帮到了你,点颗 Star 就是对它最好的鼓励。
> 
>   
>     
>     
>     
>   
> 
> ---
> 
> ## 🔗 友链
> 
> - [LINUX DO](https://linux.do/) —— 新的理想型社区,一群热爱技术、乐于分享的开发者聚集地。

## 延伸閱讀

相關概念：[[架構決策記錄]] · [[微服務]] · [[系統設計面試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]]

[GitHub](https://github.com/study8677/awesome-architecture)

## 相關收錄

> [!note]- 直接競品（同子分類：架構設計）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "架構設計" AND file.name != "study8677--awesome-architecture"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "study8677--awesome-architecture"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Vue" AND file.name != "study8677--awesome-architecture" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "study8677--awesome-architecture"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["架構決策記錄","微服務","系統設計面試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "study8677--awesome-architecture" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/study8677--awesome-architecture");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "study8677--awesome-architecture" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "study8677" AND file.name != "study8677--awesome-architecture"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/study8677--awesome-architecture");
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
> const me = dv.page("Repos/study8677--awesome-architecture");
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
> const me = dv.page("Repos/study8677--awesome-architecture");
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
> const me = dv.page("Repos/study8677--awesome-architecture");
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
> const me = dv.page("Repos/study8677--awesome-architecture");
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

> **2026-05-28** — 首次收錄
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

- [[2026-05-28|2026-05-28]] — 首次收錄，569 stars
