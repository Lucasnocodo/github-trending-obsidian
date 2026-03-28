---
repo: Lum1104/Understand-Anything
url: https://github.com/Lum1104/Understand-Anything
owner: Lum1104
owner_type: User
language: TypeScript
license: MIT
description: "Claude Code skills that turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about (Multi-platform e.g., Codex are supported)."
homepage: "https://lum.is-a.dev/Understand-Anything/"
stars: 6619
stars_per_day: 552
forks: 502
open_issues: 11
created: 2026-03-15
pushed_at: 2026-03-27
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
use_case: "將任何代碼庫轉換為可互動的知識圖譜，讓你探索、搜尋和提問。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 54
repo_size_kb: 2453
readme_length: 8419
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-21"
star_history: "2026-03-21:1388,2026-03-21:1399,2026-03-22:2600,2026-03-22:2608,2026-03-23:4225,2026-03-24:5509,2026-03-25:5945,2026-03-26:6209,2026-03-27:6432,2026-03-28:6619"
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
  - "將任何代碼庫轉換為可互動的知識圖譜，讓你探索、搜尋和提問。"
---

# Understand-Anything

**6.6k** stars · **552** stars/天 · 建立 12 天前 · TypeScript · MIT

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
> 將任何代碼庫轉換為可互動的知識圖譜，讓你探索、搜尋和提問。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (552 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速理解大型代碼庫的開發者和產品經理。
> **一句話重點** 這個專案不僅能幫助開發者理解代碼，還能提高團隊的協作效率。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，能夠顯著提高代碼理解效率，值得採用。

> [!abstract] 核心創新
> 結合 LLM 智能與靜態分析，生成可互動的代碼知識圖譜。

## 專案簡介

Understand Anything 是一個開源工具，透過結合 LLM 智能與靜態分析，將代碼庫轉換為可視化的互動知識圖譜。用戶只需執行 `/understand` 指令，系統會自動掃描代碼，提取文件、函數、類別和依賴關係，並生成一個保存於 `.understand-anything/knowledge-graph.json` 的知識圖譜。這樣的設計使得開發者能夠快速理解大型代碼庫的結構，避免了傳統文檔過時或不完整的問題。該工具的賣點在於其互動式儀表板，使用者可以透過 `/understand-dashboard` 指令來視覺化代碼庫，並且可以針對任何節點進行深入查詢，獲得簡明的解釋。其技術實作上，使用了 TypeScript、React 和 Vite，並且支援多平台的安裝，這讓它能夠與多種 AI 編碼平台無縫整合。

與同類工具相比，如 Codex 和 OpenCode，Understand Anything 提供了更為直觀的可視化和互動功能，特別適合新手開發者和產品經理。實際使用中，使用者可以透過其引導式導覽功能，快速掌握代碼架構，並且能夠在進行代碼審查前，使用 `/understand-diff` 指令來分析當前變更的影響。這使得團隊在協作時能夠更有效率地理解和維護代碼。雖然該工具在大型代碼庫的分析上表現出色，但在處理極其複雜的系統時，仍可能面臨性能瓶頸，特別是在多個文件同時分析的情況下。整體而言，這是一個適合中小型團隊使用的工具，未來可能會隨著社群的發展而持續增強其功能。

**技術棧**：`TypeScript` · `React 18` · `Vite` · `TailwindCSS v4`

## 重點功能

- 互動知識圖譜 — 將文件、函數、類別及其關係可視化，使用者可點擊任意節點查看其代碼及關聯。
- 簡明的英文摘要 — 每個節點由 LLM 描述，讓技術和非技術人員都能理解其功能及存在原因。
- 引導式導覽 — 自動生成的架構導覽，按依賴順序學習代碼庫，幫助用戶掌握正確的學習順序。
- 模糊及語義搜尋 — 透過名稱或意義尋找任何內容，能夠針對特定問題提供相關結果。
- 差異影響分析 — 在提交前查看變更影響的部分，理解代碼庫中的連鎖反應。
- 角色適應式 UI — 儀表板根據使用者身份調整詳細程度，滿足不同用戶的需求。
- 層級可視化 — 自動按架構層級分組，並提供顏色編碼的圖例，便於理解系統結構。
- 語言概念 — 在上下文中解釋 12 種編程模式（如泛型、閉包等），幫助用戶理解代碼。

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
{
  "前置條件": "用戶已安裝插件並分析代碼庫",
  "指令": "/understand-chat How does the payment flow work?",
  "預期輸出": "將提供有關支付流程的清晰解釋，基於實際代碼庫的內容。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 6619 stars（552/天），forks 502（7.6%），顯示出強烈的社群興趣。作者 Lum1104 及其團隊在開源社群中活躍，致力於解決開發者在理解大型代碼庫時的痛點。這個工具的出現正好填補了市場上對於代碼可視化和互動分析的需求，特別是在代碼文檔經常過時的情況下。社群的支持和活躍度也反映了這個工具的實用性和潛力。最近的 commit 活動顯示出持續的開發和改進，這對於使用者來說是一個正面的信號。

## 適合誰使用

**目標受眾**：需要快速理解大型代碼庫的開發者和產品經理。

> [!example] 使用場景
> - 初級開發者用它來快速理解新團隊的代碼庫，因為它提供了引導式導覽和簡明的解釋，讓他們能夠在短時間內掌握代碼結構。
> - 產品經理用它來了解系統的運作方式，因為他們可以直接詢問關於功能的問題，並獲得基於實際代碼的清晰答案。
> - AI 助手開發者用它來為 AI 工具提供深度上下文，因為它能夠在代碼審查前分析變更的影響，幫助他們更好地理解代碼邏輯。

## 架構分析

Understand Anything 採用多代理架構，通過五個專門的代理協同工作來分析代碼庫。這種設計使得每個代理可以專注於特定任務，例如文件掃描、文件分析、架構分析等，從而提高了整體效率。資料流方面，首先由 `project-scanner` 代理發現文件並檢測語言和框架，接著 `file-analyzer` 提取函數和類別，最後由 `architecture-analyzer` 確定架構層級。

這樣的設計使得系統能夠支持增量更新，只重新分析自上次運行以來變更的文件。選擇這種多代理架構的代價在於需要更複雜的協調機制，但這樣可以顯著提高分析的準確性和效率。整體而言，這種架構能夠有效應對大型代碼庫的需求，但在極端情況下，仍可能出現性能瓶頸。

整體架構的擴展性良好，適合未來功能的增強和擴展。

## 技術深入分析

Understand Anything 的核心技術機制是通過多代理架構來分析代碼，這使得每個代理可以專注於特定任務，如文件掃描和架構分析。這種設計模式不僅提高了效率，還能夠在分析過程中保持高準確性。效能上，該工具能夠處理大型代碼庫，但在極端情況下，仍可能面臨性能瓶頸，特別是在多個文件同時分析的情況下。選擇 TypeScript 和 React 作為技術棧的原因在於這兩者能夠提供良好的開發體驗和高效的性能，並且在社群中有廣泛的支持。依賴樹的複雜度相對較低，主要依賴於一些輕量級的庫，如 Zustand 和 Fuse.js，這降低了維護成本。技術風險方面，未來在擴展功能時，可能會面臨性能和穩定性的挑戰，特別是在處理更大規模的代碼庫時。整合方面，該工具與主流的開發框架（如 React 和 Vite）相容性良好，並且支持 CI/CD 流程的整合，這使得它在現有的開發生態中能夠輕鬆融入。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程順暢，無明顯的坑。提供了良好的入門指南，幫助使用者理解如何使用該工具。文件目前僅提供英文版，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供互動式儀表板，讓用戶能夠直觀地理解代碼結構。
> - 結合 LLM 智能，能夠生成易於理解的代碼解釋，降低學習曲線。
> - 支援多平台，方便用戶在不同的開發環境中使用。

> [!danger] 缺點
> - 在處理極大規模的代碼庫時，性能可能會受到影響。
> - 對於不常見的語言或框架，支持可能不夠全面。
> - 需要穩定的網路連接以便於 LLM 的交互，可能影響使用體驗。

> [!warning] 注意事項
> - 在處理極大規模的代碼庫時，可能會面臨性能瓶頸，特別是在多個文件同時分析的情況下。
> - 對於某些不常見的編程語言或框架，可能無法提供完整的分析支持。
> - 需要穩定的網路連接以便於與 LLM 進行交互，否則可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供了類似的代碼理解功能，但缺乏互動式儀表板，適合需要簡單查詢的用戶。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於代碼同步和版本控制，而 Understand Anything 更加專注於代碼可視化和互動分析。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 提供醫療領域的專用技能，而 Understand Anything 是通用的代碼分析工具，適用於各種編程語言。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 專注於代碼的安全性分析，而 Understand Anything 更加專注於代碼的可視化和互動分析。 | 如果你的團隊需要專注於代碼的安全性和漏洞檢測，則 Shadowbroker 更為合適。 | medium，因為需要重新適應不同的分析方法和工具。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 提供了針對特定領域的代碼分析，而 Understand Anything 是通用的代碼分析工具，適用於各種編程語言。 | 如果你的專案涉及特定的機器學習框架，NemoClaw 可能會提供更好的支持。 | medium，因為需要學習新的工具和方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Understand-Anything** | **Shadowbroker** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowbroker 專注於代碼的安全性分析，而 Understand Anything 更加專注於代碼的可視化和互動分析。 | NemoClaw 提供了針對特定領域的代碼分析，而 Understand Anything 是通用的代碼分析工具，適用於各種編程語言。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的分析方法和工具。 | medium，因為需要學習新的工具和方法。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要專注於代碼的安全性和漏洞檢測，則 Shado | 如果你的專案涉及特定的機器學習框架，NemoClaw 可能會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，分析速度可能會變慢，特別是在大型代碼庫中進行多文件分析時。
  - 解法：建議在分析時選擇特定的文件或模組，減少同時分析的數量。
- [MEDIUM] 對於不常見的編程語言，可能無法提供完整的分析支持。
  - 解法：使用者可以手動添加語言支持或尋求社群的幫助。
- **[HIGH]** 需要穩定的網路連接以便於與 LLM 進行交互，否則可能影響使用體驗。
  - 解法：在網路不穩定的情況下，建議提前下載所需的資料。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 該工具能夠幫助小型團隊快速理解和維護代碼，提升開發效率。 |
| 大型企業的多團隊協作專案 | 普通 | 雖然能提供可視化，但在處理極大規模的代碼庫時，性能可能會受到影響。 |
| 需要快速上手的初級開發者 | 非常適合 | 提供引導式導覽和簡明解釋，幫助新手快速理解代碼。 |
| 專注於代碼安全的團隊 | 不適合 | 該工具主要針對代碼可視化，對於安全性分析支持不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠顯著提高代碼理解效率，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，但需注意依賴的庫是否有已知的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Understand Anything 能夠與多種開發工具和平台整合，特別是在使用 Claude Code、Codex 和 Cursor 等 AI 編碼平台時，能夠無縫安裝和使用。在典型的工作流中，該工具可用於代碼分析和可視化，幫助開發者在開發過程中快速理解代碼結構。實際整合範例中，開發者可以在使用 Next.js 的專案中，通過 `/understand` 指令分析代碼，然後使用 `/understand-dashboard` 指令來視覺化代碼結構。與主流 CI 工具（如 GitHub Actions）相容性良好，能夠輕鬆融入現有的開發流程。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Understand Anything 出現之前，開發者通常依賴於文檔和手動代碼閱讀來理解代碼庫，這些方法往往效率低下且容易出錯。隨著 LLM 技術的進步，將其應用於代碼分析變得可行，這使得 Understand Anything 能夠提供更直觀的代碼理解方式。這個工具代表了代碼分析和可視化的趨勢，未來可能會隨著 AI 技術的進一步發展而變得更加智能化和自動化。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 JavaScript/TypeScript
- 了解基本的代碼結構
- 有使用 AI 工具的經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主要產品中開始使用。

**成功指標**：開發過程中的代碼理解時間減少 30%。

> [!warning] 退出計畫
> 所有設定和數據均以標準 JSON 格式保存，易於轉移到其他工具或平台。

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
| Forks | 502 |
| Open Issues | 11 |
| Issue 解決率 | 54% (13 closed) |
| 最後推送 | 2026-03-27 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://lum.is-a.dev/Understand-Anything/) |
| Repo 大小 | 2.4 MB |
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
>     "JavaScript" : 2
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lum1104](https://github.com/Lum1104) | 139 |
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

**社群活躍度**：社群活躍，持續有更新和討論。
**連結**：[文件](https://lum.is-a.dev/Understand-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-27 ~ 2026-03-27）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #45 from Lum1104/feat/theme-system

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
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

相關概念：[[程式碼生成]] · [[自動化測試]] · [[API 設計]]

相關專案：[[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

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
> const concepts = ["程式碼生成","自動化測試","API 設計"];
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
