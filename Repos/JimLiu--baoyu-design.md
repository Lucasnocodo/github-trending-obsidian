---
repo: JimLiu/baoyu-design
url: https://github.com/JimLiu/baoyu-design
owner: JimLiu
owner_type: User
language: JavaScript
license: MIT
description: "Run Claude Design locally as an Agent Skill — Cursor, Claude Code & more. Produce polished UI mockups, prototypes, decks & wireframes as self-contained HTML, without claude.ai/design. Best with Opus 4.8."
homepage: ""
stars: 638
stars_per_day: 213
forks: 48
open_issues: 0
created: 2026-06-07
pushed_at: 2026-06-09
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "在本地運行 Claude Design 作為 Agent Skill，生成精美的 UI 模型、原型、簡報和線框圖。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-13"
contributor_count: 3
engagement: "low"
issue_close_rate: 50
repo_size_kb: 7138
readme_length: 9020
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:522,2026-06-09:523,2026-06-10:638"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/claude_design"
  - "topic/cursor"
aliases:
  - "baoyu-design"
  - "JimLiu/baoyu-design"
  - "在本地運行 Claude Design 作為 Agent Skill，生成精美的 UI 模型、原型、簡報和線框圖。"
---

# baoyu-design

**523** stars · **262** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/JimLiu--baoyu-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skills` `claude` `claude-code` `claude-design` `cursor` `design` `prototyping` `ui-design`

> [!summary] 一句話摘要
> 在本地運行 Claude Design 作為 Agent Skill，生成精美的 UI 模型、原型、簡報和線框圖。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (262 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在本地生成 UI 設計原型但不想依賴網頁工具的獨立開發者或設計師。
> **一句話重點** baoyu-design 讓設計師能夠在本地環境中快速生成和修改 UI 設計，顛覆了傳統依賴雲端工具的方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "JimLiu--baoyu-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到快速生成設計的能力，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 Claude Design 的功能打包為本地可運行的 Agent Skill，無需依賴外部網站。

## 專案簡介

baoyu-design 是一個將 Claude Design 打包為可攜式 Agent Skill 的工具，允許用戶在本地編輯器中生成高質量的 UI 模型、互動原型、線框圖等，所有輸出均為自包含的 HTML。用戶只需描述設計任務，Agent 便會自動生成所需的 HTML 文件，並在本地伺服器上預覽，這樣可以進行快速的視覺編輯。這個工具的最大賣點在於它不需要依賴外部網站或訂閱服務，所有生成的資源都保留在本地，方便版本控制和共享。技術上，該工具使用 Markdown 和 JSX/JS 結構，無需構建步驟，並且可以與多種 Agent（如 Cursor、Claude Code 和 Codex）無縫整合。與其他設計工具相比，baoyu-design 提供了更高的靈活性和控制力，因為用戶可以直接在本地環境中進行設計和修改，而不必依賴網頁的交互。

這使得設計過程更加直觀，特別是在需要快速迭代和即時反饋的情況下。使用者可以輕鬆生成各種設計輸出，包括 HTML、PDF 和 PPTX，並且可以將設計直接發送到 Figma 或 Canva 等平台。這個工具適合需要快速生成設計原型的開發者或設計師，特別是在小型團隊或個人項目中。未來，隨著更多功能的添加和社群的支持，這個專案有潛力成為設計工具領域的重要選擇。

**技術棧**：`JavaScript`

## 重點功能

- 本地運行 — 無需依賴外部網站或訂閱服務，所有生成的資源都保留在本地。
- 即時預覽 — 生成的 HTML 可以在本地伺服器上即時預覽，支持快速迭代。
- 多種輸出格式 — 支持生成 HTML、PDF 和 PPTX 等多種格式，方便分享和版本控制。
- 24 種內建技能 — 提供多種設計功能，包括高保真設計、互動原型、簡報製作等。
- 與多種 Agent 整合 — 可以與 Cursor、Claude Code 和 Codex 等多種 Agent 無縫整合，提升使用靈活性。

## 快速開始

1. 安裝技能到當前專案
```bash
npx skills add JimLiu/baoyu-design
```
2. 啟動本地預覽伺服器
```bash
python3 -m http.server 4311 --directory designs
```
3. 描述設計任務
```bash
Design 3 hi-fi variations of a pricing page using the brand in this screenshot.
```

## 程式碼範例

```js
{
  "前置條件": "需要安裝 Node.js 和 Python 3。",
  "指令": "npx skills add JimLiu/baoyu-design",
  "預期輸出": "技能將安裝到指定的 Agent 目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 523 stars（261.5/天），forks 38（7.3%），這顯示出一定的社群關注度。作者 Jim Liu 是這個專案的主要維護者，過去的經驗使他能夠有效地整合 Claude Design 的功能。這個專案解決了用戶在本地生成設計輸出時的需求，避免了依賴網頁工具的限制。沒有明確的觸發事件，但其快速增長可能與設計工具需求的上升有關。這個工具的成功也反映了本地運行設計工具的趨勢，特別是在開發者社群中。forks/stars 比率為 7.3%，顯示出有相當比例的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在本地生成 UI 設計原型但不想依賴網頁工具的獨立開發者或設計師。

> [!example] 使用場景
> - UI 設計師用它來快速生成高保真原型，因為可以在本地編輯並即時預覽，提升設計效率。
> - 前端開發者用它來製作互動式線框圖，因為所有輸出都是自包含的 HTML，方便版本控制和共享。
> - 小型團隊用它來協作設計簡報，因為可以直接生成可編輯的 PPTX 文件，簡化了設計流程。

## 架構分析

baoyu-design 的架構模式是基於 Markdown 和 JSX/JS 結構，無需構建步驟。這樣的設計使得用戶可以直接在本地環境中編輯和生成設計輸出。資料流從用戶描述設計任務開始，Agent 會讀取 SKILL.md 和 system-prompt.md，然後根據需求加載相應的內建技能。

這種分離的設計使得工具能夠在不同的 Agent 環境中運行，並保持一致的設計標準。選擇這種架構的代價是需要用戶具備一定的技術背景來設置和運行本地伺服器。擴展性方面，由於所有輸出都在本地生成，這可能限制了團隊協作的靈活性。

整體而言，這種設計使得用戶能夠快速生成和修改設計，適合需要快速迭代的開發環境。

## 技術深入分析

baoyu-design 的核心技術機制是將 Claude Design 的功能打包為本地可運行的 Agent Skill，使用 Markdown 和 JSX/JS 結構進行設計生成。這種設計使得用戶可以直接在本地編輯和生成 HTML 輸出，無需構建步驟，提升了使用的便捷性。效能方面，該工具能夠快速處理設計請求，並在本地伺服器上即時預覽，這對於需要快速迭代的設計過程至關重要。設計選擇上，使用 JavaScript 作為主要語言，使得與多種 Agent 環境的整合變得更加容易，並且降低了學習曲線。這個工具的依賴樹相對簡單，主要依賴於 Node.js 和 Python，這使得安裝和運行變得更加輕鬆。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在處理大型設計項目時。整合分析方面，該工具可以輕鬆與現有的開發工具鏈（如 VS Code 和 Git）進行整合，並且支持在 CI/CD pipeline 中使用，這使得它在開發流程中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，對於新手來說相對友好。安裝過程順暢，無明顯的坑。文件提供了多語言支持，包含中文和英文，方便不同語言的使用者理解。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 無需依賴外部網站，所有資源都保留在本地。
> - 支持即時預覽和快速迭代，提升設計效率。
> - 多種輸出格式，方便版本控制和共享。

> [!danger] 缺點
> - 需要本地運行的 Agent，設置過程可能對新手不友好。
> - 最佳效果需搭配特定模型使用，限制了靈活性。
> - 不支持大型團隊協作，缺乏即時共享功能。

> [!warning] 注意事項
> - 需要本地運行的 Agent，如 Cursor、Claude Code 或 Codex。
> - 最佳效果需搭配 Claude Opus 4.8 使用，其他模型效果可能不佳。
> - 不支持大型團隊協作，因為所有輸出都在本地生成，缺乏即時共享功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的設計生成能力，但主要針對遊戲開發，功能範圍較窄。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資產的管理和版本控制，與 baoyu-design 的即時生成能力不同。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供設計生成的功能，但缺乏本地運行的靈活性，依賴於雲端服務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的設計生成，功能範圍較窄，適合特定場景。 | 如果你的項目主要集中在遊戲開發，這個工具可能更合適。 | medium，因為需要適應不同的設計需求和工具鏈。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資產的管理和版本控制，與 baoyu-design 的即時生成能力不同。 | 如果你的需求主要是管理設計資產而非即時生成，這個工具會更合適。 | low，因為主要是資產管理，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **baoyu-design** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的設計生成，功能範圍較窄，適合特定場景。 | 專注於設計資產的管理和版本控制，與 baoyu-design 的即時生成能力不同。 |
> | 遷移成本 | - | medium，因為需要適應不同的設計需求和工具鏈。 | low，因為主要是資產管理，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的項目主要集中在遊戲開發，這個工具可能更合適。 | 如果你的需求主要是管理設計資產而非即時生成，這個工具會更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境下安裝過程可能會出現依賴問題
  - 解法：確保 Node.js 和 Python 版本符合要求
- [MEDIUM] 生成的 HTML 文件在某些瀏覽器中可能無法正確顯示
  - 解法：使用 Chrome 或 Firefox 進行預覽

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 1-3 人的小型設計團隊 | 非常適合 | 能夠快速生成和迭代設計原型，適合小型團隊的需求。 |
| 大型企業的設計部門 | 不適合 | 缺乏即時共享功能，對於大型團隊協作不友好。 |
| 獨立開發者的個人項目 | 非常適合 | 能夠在本地環境中快速生成設計，無需依賴外部工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到快速生成設計的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限運行，所有操作都在本地進行，無需存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
| Forks | 38 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-06-08 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 7.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JimLiu/baoyu-design) |
| Topics | `agent-skills` `claude` `claude-code` `claude-design` `cursor` `design` `prototyping` `ui-design` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JimLiu](https://github.com/JimLiu) | 13 |
> | [@HCS9527](https://github.com/HCS9527) | 1 |
> | [@y122972](https://github.com/y122972) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有合併請求和問題回應。
**連結**：[文件](https://github.com/JimLiu/baoyu-design)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-07 ~ 2026-06-08）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #2 from HCS9527/main

## README 摘錄

> [!info]- 展開查看原文 README
> # baoyu-design
> 
> **Run Claude Design on your own local agent — Cursor, Claude Code, Claude Desktop, or any file‑capable coding agent.**
> 
> [English](README.md) · [简体中文](README.zh-CN.md) · [Changelog](CHANGELOG.md)
> 
>   
> 
> `baoyu-design` packages **Claude Design** — the design engine behind [claude.ai/design](https://claude.ai/design) — as a portable **Agent Skill**. Drop it into a local agent and you get most of what the website does, right inside your editor: polished UI mockups, interactive prototypes, wireframes, landing pages, dashboards, mobile apps, and slide decks — all produced as self‑contained HTML.
> 
> No website, no separate subscription, no upload step. The agent already on your machine does the work, and every artifact stays in your repo.
> 
> ---
> 
> ## Screenshots
> 
> The same Reader Mac App prompt was used in Cursor, Codex, Claude, and Claude Design.
> 
> | Cursor | Codex | Claude | Claude Design |
> |---|---|---|---|
> |  |  |  |  |
> 
> Prompt used for all screenshots
> 
> ```markdown
> Build a Reader Mac app that helps me read and save articles better. All data is stored locally.
> 
> ## Information collection
> 
> 1. Manual adding
> Support manually adding different types of information:
> - URL: enter a URL and automatically fetch content and images
> - Attachments: upload PDFs, videos, and images
> - Markdown editing: like publishing a blog post, enter the title, body, and cover image
> - Other
> 
> 2. Automatic subscriptions
> - RSS feeds
> - Social media accounts: X, Weibo, YouTube
> - Other
> 
> ## Editing and organization
> 
> 1. Tags
> Every item can have tags.
> 
> 2. Categories and folders
> Create tree-structured folders and place content in different categories.
> 
> 3. Favorites
> Users can click to favorite an item.
> 
> 4. Editing
> Every item can be edited with a built-in Markdown editor.
> 
> ## AI assistance
> 
> 1. Automatic translation
> Support translation across different languages.
> 
> 2. Summaries and abstracts
> Generate summaries for captured content.
> 
> 3. Derivative creation
> Create new work based on one or more pieces of content.
> 
> 4. Integrated AI Chat
> Use AI Chat to call AI Agents that help process content.
> ```
> 
> ---
> 
> ## Why run it locally
> 
> - **Free yourself from the website.** You get the vast majority of `claude.ai/design`'s capabilities without ever leaving your editor — same methodology, same craft standards, same output format.
> - **Best with Opus 4.8.** The skill is a long, demanding design brief; the stronger the model, the better the result. Pair it with **Claude Opus 4.8** for the best output, and it still works well on other capable models.
> - **Iterate by pointing, not describing.** Because the deliverable is plain HTML served on `localhost`, you can lean on your agent's built‑in browser preview and element‑annotation tools (Cursor Browser / DevTools, Claude Preview, or Codex Browser). Point at a button in the live preview, say what you want changed, and the agent edits the underlying source — a tight, visual second‑pass editing loop that's hard to get on a website.
> - **Everything is yours.** Output lands in `designs//` as self‑contained HTML you can version, fork, export, or ship.
> 
> ---
> 
> ## What it can make
> 
> The skill drives a full design process — clarifying questions → gathering design context → producing one or more HTML deliverables → previewing and verifying. It ships **24 built‑in skills** and a set of ready‑made component scaffolds.
> 
> | Area | Built‑in skills |
> |---|---|
> | **Core design** | Hi‑fi design · Interactive prototype · Wireframe · Frontend aesthetic direction |
> | **Decks** | Make a deck · Speaker notes |
> | **Mobile & motion** | Mobile prototype · Animated video · Sound effects |
> | **Design systems** | Create design system · Design Components (`.dc.html`) · Make tweakable |
> | **Export & handoff** | Standalone HTML · PDF · PPTX (editable) · PPTX (screenshots) · Send to Figma · Send to Canva · Handoff to Claude Code |
> | **AI assets & integration** | Gemini image generation · Call Claude from prototypes · Read PDF |
> 
> **Starter components** (in [`starter-components/`](skills/baoyu-design/starter-components/)) save the agent from hand‑rolling the basics: iOS / Android / macOS / browser frames, a pan‑zoom design canvas, a slide‑deck stage, a timeline animation engine, a tweaks panel, and a fillable image slot.
> 
> ---
> 
> ## How it works
> 
> The skill is plain Markdown plus a few JSX/JS scaffolds — no build step, no runtime.
> 
> ```
> skills/baoyu-design/
> ├── SKILL.md              # Entry point — orchestrates the whole flow
> ├── system-prompt.md      # The design methodology & craft standards (source of truth)
> ├── references/
> │   ├── claude.md         # Tool map for Claude Code
> │   ├── cursor.md         # Tool map for Cursor
> │   └── codex.md          # Tool map for Codex Agent
> ├── built-in-skills/      # 24 specialized prompts (decks, mobile, export, …)
> └── starter-components/   # Device frames, deck stage, canvas, animation engine, …
> ```
> 
> When you ask for a design, the agent reads `SKILL.md`, loads the core methodology from `system-prompt.md`, detects whether it's running in Cursor, Claude Code, Codex Agent, or a generic file‑capable harness, and reads the matching reference doc when one exists. It then pulls in only the built‑in skill(s) the task needs. The split keeps craft rules harness‑independent while each environment resolves its own tools for *asking questions*, *previewing*, *screenshotting*, and *verifying*.
> 
> ---
> 
> ## Quick start
> 
> ### Prerequisites
> 
> - A local agent — **[Cursor](https://cursor.com)**, **[Claude Code](https://claude.com/claude-code)**, **[Codex](https://developers.openai.com/codex/)**, or any of the 70+ agents the installer supports (Cline, Roo Code, GitHub Copilot…). Cursor, Claude Code, and Codex have first‑class tool references inside the skill.
> - **Claude Opus 4.8** selected as the model, for best results.
> - **Node.js** (to run the `npx` installer below). **Python 3** is also handy for the local preview server.
> 
> ### Install
> 
> **Recommended — the `skills` CLI.** [`npx skills`](https://github.com/vercel-labs/skills) (from Vercel Labs) reads this repo, finds `skills/baoyu-design/`, and drops it into the right folder for whatever agent it detects:
> 
> ```bash
> # Install into the current project (auto‑detects your agent)
> npx skills add JimLiu/baoyu-design
> 
> # …or install globally, for every project
> npx skills add JimLiu/baoyu-design -g
> 
> # Target a specific agent explicitly
> npx skills add JimLiu/baoyu-design --agent claude-code
> npx skills add JimLiu/baoyu-design --agent cursor
> npx skills add JimLiu/baoyu-design --agent codex
> 
> # Just list what's in the repo first
> npx skills add JimLiu/baoyu-design --list
> ```
> 
> It installs to `.claude/skills/` for Claude Code and `.agents/skills/` for Cursor/Codex-style agents (add `-g` for the `~/`‑level user install).
> 
> **Alternative — hand the repo URL to your agent.** Don't want to install anything? Paste the URL into chat and let the agent fetch the skill itself:
> 
> > Read https://github.com/JimLiu/baoyu-design and follow its `skills/baoyu-design/SKILL.md` to design a settings screen for a meditation app.
> 
> The agent clones or fetches the repo, loads `SKILL.md`, and proceeds — perfect for a one‑off.
> 
> ### Use it
> 
> Once the skill is installed (or fetched), just describe a design task in plain language — it auto‑activates from its description:
> 
> > Design 3 hi‑fi variations of a settings screen for a meditation app.
> 
> In Claude Code you can also trigger it explicitly with `/baoyu-design`; in Codex, mention `$baoyu-design` when skills are available. The agent asks a few clarifying questions, builds the HTML under `designs/`, and previews it over `localhost`. **Point at any element in the live preview and say what to change** — the agent edits the underlying source for a fast, visual second pass.
> 
> ### Preview server
> 
> Deliverables are previewed over HTTP (multi‑file prototypes won't load from `file://`). The agent normally starts this for you; to run it by hand:
> 
> ```bash
> python3 -m http.server 4311 --directory designs
> # then open http://localhost:4311//.html
> ```
> 
> ---
> 

## 延伸閱讀

相關概念：[[設計系統]] · [[自動化設計]] · [[前端開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[OpenCoworkAI--open-codesign|OpenCoworkAI/open-codesign]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

[GitHub](https://github.com/JimLiu/baoyu-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "JimLiu--baoyu-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","自動化設計","前端開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JimLiu--baoyu-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JimLiu--baoyu-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JimLiu" AND file.name != "JimLiu--baoyu-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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
> const me = dv.page("Repos/JimLiu--baoyu-design");
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

> **2026-06-09** — 首次收錄
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

- [[2026-06-10|2026-06-10]] — 再次上榜，638 stars
- [[2026-06-09|2026-06-09]] — 首次收錄，522 stars
