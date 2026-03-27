---
repo: Lum1104/Understand-Anything
url: https://github.com/Lum1104/Understand-Anything
owner: Lum1104
owner_type: User
language: TypeScript
license: MIT
description: "Claude Code skills that turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about (Multi-platform e.g., Codex are supported)."
homepage: "https://lum.is-a.dev/Understand-Anything/"
stars: 6432
stars_per_day: 585
forks: 493
open_issues: 10
created: 2026-03-15
pushed_at: 2026-03-26
first_seen: 2026-03-21
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "代碼分析"
release_tag: "v1.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-21
use_case: "將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜尋和提問。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 55
repo_size_kb: 2391
readme_length: 8419
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-21"
star_history: "2026-03-21:1388,2026-03-21:1399,2026-03-22:2600,2026-03-22:2608,2026-03-23:4225,2026-03-24:5509,2026-03-25:5945,2026-03-26:6209,2026-03-27:6432"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/antigravity_skills"
  - "topic/claude_code"
  - "topic/claude_skills"
  - "topic/codex"
  - "topic/codex_skills"
aliases:
  - "Understand-Anything"
  - "Lum1104/Understand-Anything"
  - "將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜尋和提問。"
---

# Understand-Anything

**6.4k** stars · **585** stars/天 · 建立 11 天前 · TypeScript · MIT

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

`v1.2.0` `easy-install`

`antigravity-skills` `claude-code` `claude-skills` `codex` `codex-skills` `gemini-cli-skills` `knowledge-graph` `opencode-skills` `pi-agent` `understandcode`

> [!summary] 一句話摘要
> 將任何代碼庫轉換為可互動的知識圖譜，讓你可以探索、搜尋和提問。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (585 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速理解大型代碼庫的開發者和產品經理，特別是新加入團隊的成員。
> **一句話重點** 這個專案的核心價值在於將代碼理解的過程視覺化，讓開發者能夠更快上手複雜的代碼庫。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習、2 小時整合，得到快速理解代碼庫的效果，值得採用。

> [!abstract] 核心創新
> 結合 LLM 智能和靜態分析生成互動式代碼知識圖譜，提供平易近人的代碼解釋。

## 專案簡介

Understand Anything 是一個結合 LLM 智能和靜態分析的開源工具，旨在將代碼庫轉換為可視化的互動知識圖譜。使用者只需執行 `/understand` 指令，系統會自動掃描項目，提取所有文件、函數、類別及其依賴關係，並生成一個存儲於 `.understand-anything/knowledge-graph.json` 的知識圖譜。這樣的設計使得開發者能夠更清晰地理解代碼結構，避免了傳統文檔過時和新成員上手困難的問題。核心賣點在於提供了可視化的互動儀表板，使用者可以透過 `/understand-dashboard` 指令打開，並且可以進行模糊和語義搜尋，快速找到所需信息。這個工具的技術實作包括 TypeScript、React 18 和 Vite，並使用了多代理分析管道來並行處理文件分析，這樣的設計提高了效率並支持增量更新。

與其他工具相比，Understand Anything 提供了更直觀的圖形化界面和語言無關的分析能力，這使得它在多種編程語言和框架中都能有效運作。相較於傳統的代碼閱讀方式，這個工具能夠大幅減少理解代碼的時間，特別適合新手開發者和產品經理。使用者可以透過多種平台（如 Claude Code、Codex 等）輕鬆安裝和使用，並且支持自動生成導覽指南，這對於新成員的上手尤為重要。整體而言，這是一個強大的工具，能夠幫助團隊更快地理解和管理代碼庫。

**技術棧**：`TypeScript` · `React 18` · `Vite` · `TailwindCSS v4`

## 重點功能

- 互動知識圖譜 — 使用 React Flow 可視化文件、函數和類別及其關係，點擊任意節點查看代碼和連結。
- 平易近人的摘要 — 每個節點由 LLM 描述，讓技術和非技術人員都能理解其功能和存在的原因。
- 引導式導覽 — 自動生成的架構導覽，按依賴順序學習代碼庫，幫助開發者掌握正確的學習順序。
- 模糊和語義搜尋 — 透過名稱或意義查找任何內容，支持更靈活的查詢方式。
- 差異影響分析 — 在提交之前查看代碼變更影響的部分，理解代碼庫中的連鎖反應。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add Lum1104/Understand-Anything
/plugin install understand-anything
```
2. 分析你的代碼庫
```bash
/understand
```
3. 探索儀表板
```bash
/understand-dashboard
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Understand Anything 插件",
  "指令": "/understand-chat How does the payment flow work?",
  "預期輸出": "將返回有關支付流程的清晰解釋。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 6432 stars（585/天），forks 493（7.7%），顯示出相當高的關注度。這個工具的作者 Lum1104 及其團隊在開源社群中有良好的聲譽，並且解決了代碼理解過程中的痛點，特別是對於大型代碼庫的探索和學習。之前的工具往往缺乏可視化和互動性，導致開發者在面對複雜代碼時感到無從下手。這個專案的推出恰逢許多開發者尋求更高效的代碼理解方式，並且在社交媒體上引發了討論，進一步推動了其流行。forks/stars 比率為 7.7%，顯示出許多人在實際使用和修改這個工具，這是健康的社群參與指標。

## 適合誰使用

**目標受眾**：需要快速理解大型代碼庫的開發者和產品經理，特別是新加入團隊的成員。

> [!example] 使用場景
> - 初級開發者用它來快速理解新代碼庫的架構，因為它提供了逐步導覽和每個函數的簡單解釋。
> - 產品經理用它來了解系統如何運作，能夠直接詢問代碼中的功能，獲得清晰的解釋，避免了閱讀繁瑣文檔的麻煩。
> - AI 助手開發者用它來為 AI 工具提供深度上下文，使用 `/understand-chat` 指令來詢問架構問題，提升代碼審查的效率。

## 架構分析

Understand Anything 採用多代理分析管道的架構模式，這樣的設計使得不同的代理能夠並行處理任務，提高了整體效率。每個代理負責特定的任務，例如 `project-scanner` 負責發現文件和檢測語言，而 `file-analyzer` 則提取函數和類別，生成圖譜節點。這樣的分工使得系統能夠快速適應不同的代碼庫，並且支持增量更新，僅重新分析變更的文件。選擇這種架構的代價在於需要管理多個代理的協調，但這樣的設計能夠顯著提升分析的速度和準確性。整體架構的擴展性良好，能夠隨著代碼庫的增長而調整性能需求。

## 技術深入分析

Understand Anything 的核心技術機制在於其多代理分析管道，這使得不同的代理可以並行處理代碼分析任務。每個代理的專業化設計提升了整體效率，特別是在處理大型代碼庫時。系統能夠支持多達三個並行的文件分析，這樣的設計使得用戶在分析過程中能夠獲得更快的反饋。從技術選型上看，選擇 TypeScript 和 React 18 使得開發者能夠利用現代前端技術構建高效的儀表板，並且使用 Vite 進行快速的開發和構建。這些選擇雖然增加了學習曲線，但也使得整體架構更加靈活和可維護。設計上的取捨在於如何平衡代理的數量與系統的複雜性，過多的代理可能導致管理上的困難，但適當的分工則能提升效率。隨著代碼庫的擴大，系統的性能需求也會隨之增加，因此在設計時需要考慮到未來的擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並包含多語言版本。安裝過程相對順暢，使用者只需執行幾個簡單的指令即可開始使用。文件中有詳細的步驟和範例，對於新手來說非常友好，能夠在短時間內上手。

## 優缺點分析

> [!success] 優點
> - 提供互動式的代碼可視化，讓開發者能夠快速理解代碼結構。
> - 結合 LLM 技術，提供平易近人的代碼解釋，適合技術背景不同的使用者。
> - 支持多種平台，方便在不同環境中使用，無需繁瑣的安裝過程。

> [!danger] 缺點
> - 對於不在支持語言範圍內的代碼庫無法提供分析，限制了使用場景。
> - 初次分析大型代碼庫可能需要較長時間，影響使用體驗。
> - 需要穩定的網絡連接以便於與 LLM 進行交互，可能造成使用上的不便。

> [!warning] 注意事項
> - 目前僅支持 12 種編程語言，對於不在支持範圍內的語言無法提供分析。
> - 需要穩定的網絡連接以便於與 LLM 進行交互，網絡不穩定可能影響使用體驗。
> - 對於非常大的代碼庫，初次分析可能需要較長時間，影響使用者的即時反饋。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於代碼同步和版本控制，而 Understand Anything 更加強調代碼理解和可視化。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供代碼安全性分析，但缺乏互動式知識圖譜功能，無法提供如此直觀的代碼探索體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於即時通訊的代理工具，無法提供代碼分析和可視化功能。 | 如果你的需求是建立即時通訊的代理，而不是代碼理解，則應選擇此工具。 | low，因為功能範圍完全不同，無需遷移。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於深度學習模型的訓練和推理，與代碼理解無直接關聯。 | 如果你的專案重點在於深度學習而非代碼可視化，則此工具更適合。 | medium，因為需要重新評估整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Understand-Anything** | **tg-ws-proxy** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於即時通訊的代理工具，無法提供代碼分析和可視化功能。 | 專注於深度學習模型的訓練和推理，與代碼理解無直接關聯。 |
> | 遷移成本 | - | low，因為功能範圍完全不同，無需遷移。 | medium，因為需要重新評估整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是建立即時通訊的代理，而不是代碼理解，則應選擇此 | 如果你的專案重點在於深度學習而非代碼可視化，則此工具更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於內部工具和小型專案的試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在分析大型代碼庫時，初次運行可能會非常緩慢，影響使用者體驗。
  - 解法：建議在非高峰時段運行分析，或將代碼庫分割成小部分進行分析。
- [MEDIUM] 對於某些語言的支持可能不夠完善，導致分析結果不準確。
  - 解法：在使用前確認所用語言是否在支持列表中，必要時尋求社群的幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 新加入的開發團隊成員需要快速了解代碼庫 | 非常適合 | 提供了引導式導覽和清晰的代碼解釋，能夠加速上手過程。 |
| 產品經理需要了解系統架構以便於溝通 | 適合 | 能夠提供平易近人的代碼解釋，幫助非技術人員理解系統運作。 |
| 大型企業的代碼庫需要持續維護和更新 | 普通 | 雖然能夠提供可視化，但對於非常大的代碼庫，性能可能成為瓶頸。 |
| 小型專案的開發者需要一個簡單的代碼分析工具 | 非常適合 | 輕量級的設計和易於使用的界面使其非常適合小型專案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到快速理解代碼庫的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 493 |
| Open Issues | 10 |
| Issue 解決率 | 55% (12 closed) |
| 最後推送 | 2026-03-26 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://lum.is-a.dev/Understand-Anything/) |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lum1104/Understand-Anything) |
| Topics | `antigravity-skills` `claude-code` `claude-skills` `codex` `codex-skills` `gemini-cli-skills` `knowledge-graph` `opencode-skills` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "Astro" : 4
>     "JavaScript" : 3
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lum1104](https://github.com/Lum1104) | 126 |
> | [@berkcangumusisik](https://github.com/berkcangumusisik) | 6 |
> | [@Jamie-HM](https://github.com/Jamie-HM) | 2 |
> | [@AnnulusLabs](https://github.com/AnnulusLabs) | 1 |
> | [@claude](https://github.com/claude) | 1 |

**最新版本**：v1.2.0 — v1.2.0 — First Release (2026-03-25)

> [!info]- Release Notes
> **Understand Anything** is an open-source tool that combines LLM intelligence with static analysis to produce interactive dashboards for understanding codebases.
> 
> ## Highlights
> 
> - **Multi-agent analysis pipeline** — Project scanner, file analyzer, architecture analyzer, tour builder, and graph reviewer work together to produce rich knowledge graphs
> - **Interactive dashboard** — Dark luxury themed React Flow visualization with graph-first layout, fuzzy/semantic search, guided tours, and persona modes
> - **Language-agnostic analysis** — Config-driven plugin registry supporting 12+ languages with framework detection (TypeScript, Python, Django, and more)
> - **Multi-platform support** — Works with Claude Code, Cursor, OpenCode, Gemini CLI (Antigravity), and Pi Agent
> - **Diff mode** — Visualize PR/diff changes overlaid on the knowledge graph
> - **Large graph performance** — Web Worker-based dagre layout, zoom limits, auto-center, and optimized pan/zoom interactions
> - **Keyboard shortcuts** — Navigate the dashboard efficiently with keyboard controls
> 
> ## Skills
> - `/understand` — Full multi-agent codebase analysis
> - `/understand-dashboard` — Launch the interactive visualization
> - `/understand-chat` — Chat with your codebase context
> - `/understand-diff` — Analyze PRs and diffs
> - `/understand-explain` — Deep-dive file analysis
> - `/understand-onboard` — Generate team onboarding guides
> 
> ## Contributors
> 
> Thanks to all contributors who made this release possible:
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開放貢獻，已有多個功能請求和問題反饋。
**連結**：[文件](https://lum.is-a.dev/Understand-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-26）
> **活躍天數** 2 天 · **最新 commit** docs: add theme customize design doc and implementation plan

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/Lum1104/Understand-Anything/issues/7) | Feature Request: Runtime theme customization `enhancement` | 2 | 1 |
> | [#29](https://github.com/Lum1104/Understand-Anything/issues/29) | Understand things beyond code `enhancement` | 1 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> Understand Anything
> 
>   Turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about.
> 
>   English | 中文 | 日本語 | Türkçe
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
> Tell OpenCode:
> ```
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.opencode/INSTALL.md
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
> ### Antigravity
> 
> Tell Antigravity:
> ```text
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.antigravity/INSTALL.md
> ```
> 
> ### Gemini CLI
> 
> Tell Gemini CLI:
> ```text
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.gemini/INSTALL.md
> ```
> 
> ### Pi Agent
> 
> Tell Pi Agent:
> ```text
> Fetch and follow instructions from https://raw.githubusercontent.com/Lum1104/Understand-Anything/refs/heads/main/.pi/INSTALL.md
> ```
> 
> ### Platform Compatibility
> 
> | Platform | Status | Install Method |
> |----------|--------|----------------|
> | Claude Code | ✅ Native | Plugin marketplace |
> | Codex | ✅ Supported | AI-driven install |
> | OpenCode | ✅ Supported | AI-driven install |
> | OpenClaw | ✅ Supported | AI-driven install |
> | Cursor | ✅ Supported | Auto-discovery |
> | Antigravity | ✅ Supported | AI-driven install |
> | Gemini CLI | ✅ Supported | AI-driven install |
> | Pi Agent | ✅ Supported | AI-driven install |
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
> Contributions are welcome! Here's how to get

## 延伸閱讀

相關概念：[[知識圖譜]] · [[靜態分析]] · [[語言無關的分析]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

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
> const concepts = ["知識圖譜","靜態分析","語言無關的分析"];
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

- [[2026-03-22|2026-03-22]] — 再次上榜，2.6k stars
- [[2026-03-21|2026-03-21]] — 首次收錄，1.4k stars
