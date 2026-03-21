---
repo: Lum1104/Understand-Anything
url: https://github.com/Lum1104/Understand-Anything
owner: Lum1104
owner_type: User
language: TypeScript
license: MIT
description: "Claude Code skills that turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about (Multi-platform e.g., Codex are supported)."
homepage: "https://lum.is-a.dev/Understand-Anything/"
stars: 1399
stars_per_day: 280
forks: 123
open_issues: 4
created: 2026-03-15
pushed_at: 2026-03-20
first_seen: 2026-03-21
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "代碼分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-21
use_case: "將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜索和提問。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-24"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2357
readme_length: 7700
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-21"
star_history: "2026-03-21:1388,2026-03-21:1399"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/claude_code"
  - "topic/claude_skills"
  - "topic/codex"
  - "topic/codex_skills"
  - "topic/knowledge_graph"
aliases:
  - "Understand-Anything"
  - "Lum1104/Understand-Anything"
  - "將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜索和提問。"
---

# Understand-Anything

**1.4k** stars · **280** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Lum1104--Understand-Anything");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`claude-code` `claude-skills` `codex` `codex-skills` `knowledge-graph` `understandcode`

> [!summary] 一句話摘要
> 將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜索和提問。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (280 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速理解大型代碼庫的開發團隊，特別是新手開發者和產品經理。
> **一句話重點** 這個專案能顯著降低新開發者對於大型代碼庫的理解難度，提升團隊的工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Lum1104--Understand-Anything");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼分析" && p.file.name !== "Lum1104--Understand-Anything" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，能夠顯著提升代碼理解效率，值得嘗試。

> [!abstract] 核心創新
> 結合 LLM 智能與靜態分析，生成可互動的代碼知識圖譜。

## 專案簡介

Understand Anything 是一個 Claude Code 插件，旨在將代碼庫轉換為可視化的知識圖譜，幫助開發者更快理解代碼結構。使用者只需執行 `/understand` 指令，插件會分析整個項目，提取所有文件、函數、類別及其依賴關係，並生成一個 `.understand-anything/knowledge-graph.json` 文件。這個過程結合了 LLM 智能與靜態分析，提供清晰的英語解釋，讓技術與非技術人員都能輕鬆理解代碼。其核心賣點在於提供一個互動式的儀表板，使用者可以透過 `/understand-dashboard` 指令來探索這個知識圖譜，並且可以針對特定問題進行查詢，例如 `/understand-chat` 來詢問系統的認證流程。這樣的設計不僅提升了代碼的可讀性，還能加速新成員的上手過程，減少了傳統文檔過時的問題。

這個工具的技術架構包括多個專門的代理來處理不同的分析任務，並支持增量更新，僅重新分析有變更的文件。與同類工具相比，Understand Anything 的優勢在於其深度的語義搜索能力和自動生成的導覽功能，這使得使用者能夠在複雜的代碼庫中快速找到所需資訊。使用者在實際操作中可能會遇到一些問題，例如大型圖形無法完全顯示，這在社群的熱門問題中有提到。整體而言，這個專案非常適合需要快速理解大型代碼庫的開發團隊，尤其是對於新手開發者和產品經理來說，能夠有效降低學習曲線。

**技術棧**：`TypeScript` · `Astro` · `React 18` · `Vite` · `TailwindCSS v4`

## 重點功能

- 互動式知識圖譜 — 將文件、函數和類別的關係可視化，使用者可以點擊節點查看代碼及其關聯。
- 清晰的英語摘要 — 每個節點都有 LLM 生成的描述，讓技術和非技術人員都能理解。
- 自動生成的導覽 — 提供按依賴順序的架構導覽，幫助使用者正確學習代碼庫。
- 模糊和語義搜索 — 允許使用者根據名稱或意義查找代碼，提升查找效率。
- 變更影響分析 — 在提交代碼前，顯示變更會影響哪些系統部分，幫助理解代碼的連鎖反應。
- 適應性 UI — 儀表板根據使用者角色調整顯示細節，滿足不同需求。
- 層級可視化 — 自動按架構層級分組，並提供顏色編碼的圖例。
- 語言概念解釋 — 提供 12 種編程模式的上下文解釋，幫助理解代碼的設計。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add Lum1104/Understand-Anything
/plugin install understand-anything
```
2. 分析代碼庫
```bash
/understand
```
3. 探索儀表板
```bash
/understand-dashboard
```

## 程式碼範例

```ts
[
  "# 前置條件\n/plugin marketplace add Lum1104/Understand-Anything\n/plugin install understand-anything\n",
  "# 預期輸出\n將生成一個知識圖譜，並開啟互動式儀表板。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1399 stars（280/天），forks 123（8.8%），顯示出強勁的增長潛力。作者 Lum1104 及其團隊在開源社群中活躍，解決了代碼理解的痛點，特別是對於大型代碼庫的探索與學習。這個工具的出現正好填補了傳統文檔過時、代碼難以理解的空白，並且在社群中引發了討論，讓開發者對於如何更有效地理解代碼產生了興趣。技術上，這個工具的多平台支持也讓它在不同的開發環境中都能被廣泛使用，進一步提升了其吸引力。

## 適合誰使用

**目標受眾**：需要快速理解大型代碼庫的開發團隊，特別是新手開發者和產品經理。

> [!example] 使用場景
> - 新手開發者用它來快速理解一個 200,000 行的代碼庫，因為它提供了可視化的導覽和清晰的解釋，讓他們不再感到困惑。
> - 產品經理用它來了解系統的認證流程，因為他們可以直接詢問代碼庫，而不需要依賴過時的文檔。
> - AI 開發者用它來提供更深層的上下文給 AI 工具，因為它能夠在代碼審查前分析變更影響，提升代碼質量。

## 架構分析

Understand Anything 採用多代理架構，通過 `/understand` 指令來協調多個專門代理進行代碼分析。這些代理包括文件掃描器、文件分析器、架構分析器、導覽生成器和圖形審核器，並支持並行運行以提高效率。這樣的設計使得工具能夠快速適應代碼庫的變更，僅重新分析有變更的文件，降低了分析時間。

選擇 TypeScript 和 React 作為技術棧，能夠提供良好的開發體驗和高效的前端性能，但也可能增加學習曲線。整體架構的可擴展性良好，但在處理極大規模的代碼庫時，可能會面臨性能瓶頸。因為代理的數量和複雜度，未來可能需要進一步優化以應對更大規模的代碼分析需求。

## 技術深入分析

Understand Anything 的核心技術機制在於其多代理架構，這使得代碼分析能夠高效且全面。每個代理專注於不同的任務，例如文件掃描器負責發現文件和檢測語言，而文件分析器則提取函數和類別，這樣的分工提高了分析的速度和準確性。效能方面，這個工具能夠處理大型代碼庫，並且支持增量更新，這意味著在代碼變更後僅需重新分析變更的部分，從而節省時間。選擇 TypeScript 和 React 作為技術棧，這不僅提供了良好的開發體驗，還能夠利用現有的生態系統進行擴展，但也可能帶來一定的學習成本。技術風險方面，隨著代碼庫的擴大，性能瓶頸可能會出現，特別是在圖形渲染和數據處理上。整合方面，這個工具能夠與主流的開發框架良好協作，但在某些特定環境下可能需要額外的適配工作。整體而言，這個工具在提升代碼理解效率上具有顯著的潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供清晰的代碼可視化，幫助快速理解代碼結構。
> - 支持多平台，方便不同開發環境的使用。
> - 自動生成的導覽功能降低了學習曲線，特別對新手友好。

> [!danger] 缺點
> - 大型圖形可能無法完全顯示，影響使用體驗。
> - 對某些特定框架的支持可能不夠全面。
> - 需要穩定的網路連接來支持多代理分析。

> [!warning] 注意事項
> - 大型圖形在某些情況下無法完全顯示。
> - 需要穩定的網路連接以支持多代理的分析。
> - 對於某些特定框架的支持可能不如主流框架全面。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於代碼同步和版本控制，而 Understand Anything 提供代碼的可視化和互動式探索功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於代碼的安全性分析，而本專案則專注於代碼的理解與學習。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 WebSocket 代理，而本專案則專注於代碼的可視化和理解。 | 如果你的專案需要處理 WebSocket 通訊，這個工具會更合適。 | low，因為兩者的使用場景不同，遷移不會直接相關。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 AI 驅動的代碼分析，而本專案則提供更廣泛的代碼理解功能。 | 如果你的需求是針對 AI 驅動的代碼分析，NemoClaw 會是更好的選擇。 | medium，因為需要重新適應不同的分析方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Understand-Anything** | **tg-ws-proxy** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 WebSocket 代理，而本專案則專注於代碼的可視化和理解。 | 專注於 AI 驅動的代碼分析，而本專案則提供更廣泛的代碼理解功能。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，遷移不會直接相關。 | medium，因為需要重新適應不同的分析方法。 |
> | 適用場景 | 主要場景 | 如果你的專案需要處理 WebSocket 通訊，這個工具會更 | 如果你的需求是針對 AI 驅動的代碼分析，NemoClaw  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合在小型專案中試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些大型項目中，儀表板可能會崩潰
  - 解法：減少同時加載的節點數量，或分批分析代碼庫
- [MEDIUM] 對於某些框架的支持不夠全面，可能導致分析不準確
  - 解法：手動檢查未被支持的部分

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 新創公司中的 5 人開發團隊 | 非常適合 | 能夠快速上手並理解複雜的代碼庫，提升團隊效率。 |
| 大型企業的代碼維護團隊 | 適合 | 能夠幫助新成員快速熟悉代碼結構，減少學習曲線。 |
| 單人開發者的個人專案 | 普通 | 對於小型專案來說，功能可能過於龐大。 |
| 需要快速迭代的敏捷開發團隊 | 不適合 | 在高頻率變更的環境中，可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，能夠顯著提升代碼理解效率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但在使用過程中需注意依賴的第三方庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Understand Anything 可以與多種 AI 編程平台搭配使用，特別是 Claude Code 和 Codex。在典型的工作流中，它可以在開發階段提供代碼的可視化和分析，幫助開發者理解代碼結構。在使用 Codex 時，開發者只需告訴 Codex 下載並安裝插件，便能輕鬆整合。與主流 CI/CD 工具（如 GitHub Actions）相容性良好，但在某些情況下可能需要額外的適配工作，以確保無縫整合。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
| Forks | 123 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://lum.is-a.dev/Understand-Anything/) |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lum1104/Understand-Anything) |
| Topics | `claude-code` `claude-skills` `codex` `codex-skills` `knowledge-graph` `understandcode` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "Astro" : 5
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lum1104](https://github.com/Lum1104) | 91 |
> | [@Jamie-HM](https://github.com/Jamie-HM) | 2 |
> | [@KyleWMiller](https://github.com/KyleWMiller) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和問題回應。
**連結**：[文件](https://lum.is-a.dev/Understand-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** docs: thanks

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Lum1104/Understand-Anything/issues/10) | understand-dashboard happens crash in some project | 1 | 1 |
> | [#7](https://github.com/Lum1104/Understand-Anything/issues/7) | Feature Request: Runtime theme customization `enhancement` | 1 | 1 |
> | [#8](https://github.com/Lum1104/Understand-Anything/issues/8) | Large graph not fully visible `bug` | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> Understand Anything
> 
>   Turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about.
> 
>   English | 中文
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
> > [!TIP]
> > **A huge thank you to the community!** The support for Understand-Anything has been incredible. If this tool saves you a few minutes of digging through complexity, that's all I wanted. 🚀
> 
> **You just joined a new team. The codebase is 200,000 lines of code. Where do you even start?**
> 
> Understand Anything is a [Claude Code](https://docs.anthropic.com/en/docs/claude-code) plugin that analyzes your project with a multi-agent pipeline, builds a knowledge graph of every file, function, class, and dependency, then gives you an interactive dashboard to explore it all visually. Stop reading code blind. Start seeing the big picture.
> 
> ---
> 
> ## 🤔 Why?
> 
> Reading code is hard. Understanding a whole codebase is harder. Documentation is always out of date, onboarding takes weeks, and every new feature feels like archaeology.
> 
> Understand Anything fixes this by combining **LLM intelligence** with **static analysis** to produce a living, explorable map of your project — with plain-English explanations for everything.
> 
> ---
> 
> ## 🎯 Who is this for?
> 
>   
>     
>       👩‍💻 Junior Developers
>       Stop drowning in unfamiliar code. Get guided tours that walk you through the architecture step by step, with every function and class explained in plain English.
>     
>     
>       📋 Product Managers & Designers
>       Finally understand how the system actually works without reading code. Ask questions like "how does authentication work?" and get clear answers grounded in the real codebase.
>     
>     
>       🤖 AI-Assisted Developers
>       Give your AI tools deep context about your project. Use /understand-diff before code review, /understand-explain to dive into any module, or /understand-chat to reason about architecture.
>     
>   
> 
> ---
> 
> ## 🚀 Quick Start
> 
> ### 1. Install the plugin
> 
> ```bash
> /plugin marketplace add Lum1104/Understand-Anything
> /plugin install understand-anything
> ```
> 
> ### 2. Analyze your codebase
> 
> ```bash
> /understand
> ```
> 
> A multi-agent pipeline scans your project, extracts every file, function, class, and dependency, then builds a knowledge graph saved to `.understand-anything/knowledge-graph.json`.
> 
> ### 3. Explore the dashboard
> 
> ```bash
> /understand-dashboard
> ```
> 
> An interactive web dashboard opens with your codebase visualized as a graph — color-coded by architectural layer, searchable, and clickable. Select any node to see its code, relationships, and a plain-English explanation.
> 
> ### 4. Keep learning
> 
> ```bash
> # Ask anything about the codebase
> /understand-chat How does the payment flow work?
> 
> # Analyze impact of your current changes
> /understand-diff
> 
> # Deep-dive into a specific file or function
> /understand-explain src/auth/login.ts
> 
> # Generate an onboarding guide for new team members
> /understand-onboard
> ```
> 
> ---
> 
> ## 🌐 Multi-Platform Installation
> 
> Understand-Anything works across multiple AI coding platforms.
> 
> ### Claude Code (Native)
> 
> ```bash
> /plugin marketplace add Lum1104/Understand-Anything
> /plugin install understand-anything
> ```
> 
> ### Codex
> 
> Tell Codex:
> ```
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.codex/INSTALL.md
> ```
> 
> ### OpenCode
> 
> Add to your `opencode.json`:
> ```json
> {
>   "plugin": ["understand-anything@git+https://github.com/Lum1104/Understand-Anything.git"]
> }
> ```
> 
> ### OpenClaw
> 
> Tell OpenClaw:
> ```
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.openclaw/INSTALL.md
> ```
> 
> ### Cursor
> 
> Cursor auto-discovers the plugin via `.cursor-plugin/plugin.json` when this repo is cloned. No manual installation needed — just clone and open in Cursor.
> 
> ### Platform Compatibility
> 
> | Platform | Status | Install Method |
> |----------|--------|----------------|
> | Claude Code | ✅ Native | Plugin marketplace |
> | Codex | ✅ Supported | AI-driven install |
> | OpenCode | ✅ Supported | Plugin config |
> | OpenClaw | ✅ Supported | AI-driven install |
> | Cursor | ✅ Supported | Auto-discovery |
> 
> ---
> 
> ## ✨ Features
> 
>   
> 
>   
>     
>       🗺️ Interactive Knowledge Graph
>       Files, functions, classes, and their relationships visualized with React Flow. Click any node to see its code and connections.
>     
>     
>       💬 Plain-English Summaries
>       Every node described by an LLM so anyone — technical or not — can understand what it does and why it exists.
>     
>   
>   
>     
>       🧭 Guided Tours
>       Auto-generated walkthroughs of the architecture, ordered by dependency. Learn the codebase in the right order.
>     
>     
>       🔍 Fuzzy & Semantic Search
>       Find anything by name or by meaning. Search "which parts handle auth?" and get relevant results across the graph.
>     
>   
>   
>     
>       📊 Diff Impact Analysis
>       See which parts of the system your changes affect before you commit. Understand ripple effects across the codebase.
>     
>     
>       🎭 Persona-Adaptive UI
>       The dashboard adjusts its detail level based on who you are — junior dev, PM, or power user.
>     
>   
>   
>     
>       🏗️ Layer Visualization
>       Automatic grouping by architectural layer — API, Service, Data, UI, Utility — with color-coded legend.
>     
>     
>       📚 Language Concepts
>       12 programming patterns (generics, closures, decorators, etc.) explained in context wherever they appear.
>     
>   
> 
> ---
> 
> ## 🔧 Under the Hood
> 
> ### Multi-Agent Pipeline
> 
> The `/understand` command orchestrates 5 specialized agents:
> 
> | Agent | Role |
> |-------|------|
> | `project-scanner` | Discover files, detect languages and frameworks |
> | `file-analyzer` | Extract functions, classes, imports; produce graph nodes and edges |
> | `architecture-analyzer` | Identify architectural layers |
> | `tour-builder` | Generate guided learning tours |
> | `graph-reviewer` | Validate graph completeness and referential integrity |
> 
> File analyzers run in parallel (up to 3 concurrent). Supports incremental updates — only re-analyzes files that changed since the last run.
> 
> ### Project Structure
> 
> ```
> understand-anything-plugin/
>   .claude-plugin/  — Plugin manifest
>   agents/          — Specialized AI agents
>   skills/          — Skill definitions (/understand, /understand-chat, etc.)
>   src/             — TypeScript source (context-builder, diff-analyzer, etc.)
>   packages/
>     core/          — Analysis engine (types, persistence, tree-sitter, search, schema, tours)
>     dashboard/     — React + TypeScript web dashboard
> ```
> 
> ### Tech Stack
> 
> TypeScript, pnpm workspaces, React 18, Vite, TailwindCSS v4, React Flow, Zustand, web-tree-sitter, Fuse.js, Zod, Dagre
> 
> ### Development Commands
> 
> | Command | Description |
> |---------|-------------|
> | `pnpm install` | Install all dependencies |
> | `pnpm --filter @understand-anything/core build` | Build the core package |
> | `pnpm --filter @understand-anything/core test` | Run core tests |
> | `pnpm --filter @understand-anything/skill build` | Build the plugin package |
> | `pnpm --filter @understand-anything/skill test` | Run plugin tests |
> | `pnpm --filter @understand-anything/dashboard build` | Build the dashboard |
> | `pnpm dev:dashboard` | Start dashboard dev server |
> 
> ---
> 
> ## 🤝 Contributing
> 
> Contributions are welcome! Here's how to get started:
> 
> 1. Fork the repository
> 2. Create a feature branch (`git checkout -b feature/my-feature`)
> 3. Run the tests (`pnpm --filter @understand-anything/core test`)
> 4. Commit your changes and open a pull request
> 
> Please open an issue first for major changes so we can discuss the approach.
> 
> ---
> 
>   Stop reading code blind. Start understanding everything.
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
>   MIT License &copy; Lum1104

## 延伸閱讀

相關概念：[[知識圖譜]] · [[靜態分析]] · [[語義搜索]] · [[代碼可視化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/Lum1104/Understand-Anything) · [官方網站](https://lum.is-a.dev/Understand-Anything/)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼分析" AND file.name != "Lum1104--Understand-Anything"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Lum1104--Understand-Anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Lum1104--Understand-Anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "Lum1104--Understand-Anything"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識圖譜","靜態分析","語義搜索","代碼可視化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Lum1104--Understand-Anything" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Lum1104--Understand-Anything" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Lum1104" AND file.name != "Lum1104--Understand-Anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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
> const me = dv.page("Repos/Lum1104--Understand-Anything");
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

> **2026-03-21** — 首次收錄
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

- [[2026-03-21|2026-03-21]] — 首次收錄，1.4k stars
