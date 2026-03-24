---
repo: Lum1104/Understand-Anything
url: https://github.com/Lum1104/Understand-Anything
owner: Lum1104
owner_type: User
language: TypeScript
license: MIT
description: "Claude Code skills that turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about (Multi-platform e.g., Codex are supported)."
homepage: "https://lum.is-a.dev/Understand-Anything/"
stars: 5509
stars_per_day: 689
forks: 427
open_issues: 13
created: 2026-03-15
pushed_at: 2026-03-23
first_seen: 2026-03-21
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "知識圖譜"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-21
use_case: "將任何代碼庫轉換為可互動的知識圖譜，讓你能夠探索、搜尋和提問。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 28
repo_size_kb: 2247
readme_length: 7966
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-21"
star_history: "2026-03-21:1388,2026-03-21:1399,2026-03-22:2600,2026-03-22:2608,2026-03-23:4225,2026-03-24:5509"
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
  - "將任何代碼庫轉換為可互動的知識圖譜，讓你能夠探索、搜尋和提問。"
---

# Understand-Anything

**5.5k** stars · **689** stars/天 · 建立 8 天前 · TypeScript · MIT

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
> 將任何代碼庫轉換為可互動的知識圖譜，讓你能夠探索、搜尋和提問。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (689 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速理解大型代碼庫的開發者和產品經理。
> **一句話重點** 這個工具不僅是代碼理解的利器，更是提升團隊協作效率的關鍵。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Lum1104--Understand-Anything");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識圖譜" && p.file.name !== "Lum1104--Understand-Anything" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識圖譜 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到快速理解代碼的工具，值得嘗試。

> [!abstract] 核心創新
> 結合 LLM 智能和靜態分析，提供可視化的代碼理解工具。

## 專案簡介

Understand Anything 是一個 Claude Code 插件，透過多代理管道分析你的代碼專案，構建每個文件、函數、類別和依賴的知識圖譜，並提供可視化的互動儀表板。這個工具的核心賣點在於結合了 LLM 智能和靜態分析，讓開發者能夠以簡單的英語理解複雜的代碼結構。使用者只需執行 `/understand` 指令，便能自動生成知識圖譜，並透過 `/understand-dashboard` 開啟可視化界面，輕鬆探索代碼的各個部分。這對於新進開發者、產品經理及設計師來說，都是一個極大的幫助，因為他們可以不必深入閱讀代碼就能理解系統運作。

技術上，這個專案使用 TypeScript 和 React，並且支持多平台安裝，讓使用者可以在不同的 AI 編碼平台上運行。與其他工具相比，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，Understand Anything 提供了更為直觀的可視化和互動性，特別適合需要快速上手大型代碼庫的團隊。儘管目前有一些已知的問題，例如大型知識圖譜可能導致儀表板變得無法使用，但這個專案的活躍開發和社群支持顯示出其潛力。整體來看，這是一個值得關注的工具，特別是對於需要快速理解和導航大型代碼庫的開發者。

**技術棧**：`TypeScript` · `React 18` · `Vite` · `TailwindCSS v4`

## 重點功能

- 互動知識圖譜 — 可視化所有文件、函數和類別的關係，並提供點擊查看代碼的功能。
- 簡單英語摘要 — 每個節點都有 LLM 生成的解釋，讓非技術人員也能理解。
- 自動導覽 — 生成的導覽幫助使用者按依賴順序學習代碼架構。
- 模糊和語義搜尋 — 允許使用者根據名稱或意義搜尋代碼，提升查找效率。
- 影響分析 — 在提交之前查看代碼變更對系統的影響，幫助理解變更的範圍。
- 多平台支持 — 支援 Claude Code、Codex、OpenCode 等多個平台的安裝和使用。

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
  "# 前置條件\n# 需要在支持的 AI 編碼平台上安裝插件。\n/plugin marketplace add Lum1104/Understand-Anything\n/plugin install understand-anything\n\n# 預期輸出\n# 插件成功安裝並可用於分析代碼庫。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 5509 stars（689/天），forks 427（7.8%），這顯示出強大的增長潛力。這個專案由 Lum1104 等多位貢獻者共同開發，解決了開發者在面對龐大代碼庫時的理解困難，特別是對於新手來說，能夠快速上手是非常重要的。社群的反饋也顯示出對於知識圖譜的需求，尤其是在代碼複雜性不斷增加的情況下。這個工具的出現正好契合了開發者對於更高效學習和理解代碼的需求，並且在多平台的支持下，擴大了其適用範圍。

## 適合誰使用

**目標受眾**：需要快速理解大型代碼庫的開發者和產品經理。

> [!example] 使用場景
> - 新進開發者用它來快速理解大型代碼庫的架構，因為它提供了可視化的知識圖譜和簡單的解釋，讓他們能夠在短時間內掌握關鍵概念。
> - 產品經理用它來了解系統的運作方式，因為他們可以直接詢問代碼中的功能，而不需要深入閱讀代碼，節省了大量時間。
> - AI 開發者用它來為 AI 工具提供深度上下文，因為它能夠自動生成導覽和解釋，讓 AI 更加智能化地參與代碼審查和修改。

## 架構分析

Understand Anything 採用多代理架構，透過五個專門的代理來分析代碼庫。這種設計使得文件分析可以並行進行，提升了效率。每個代理負責不同的任務，例如文件掃描、函數提取和架構分析，最終生成一個完整的知識圖譜。

這種架構的優勢在於能夠快速適應代碼變更，僅重新分析變更的文件，降低了資源消耗。儘管如此，這也意味著在處理非常大的代碼庫時，可能會遇到性能瓶頸，特別是在圖譜變得過於龐大時。整體來看，這種設計使得工具能夠靈活應對不同規模的代碼庫，但在用戶體驗上仍需進一步優化。

## 技術深入分析

Understand Anything 的核心技術機制在於其多代理架構，這使得代碼分析能夠高效且靈活地進行。每個代理專注於特定任務，例如 `project-scanner` 負責發現文件和檢測語言，`file-analyzer` 則提取函數和類別，這樣的設計不僅提升了分析速度，也確保了結果的準確性。這個工具能夠處理大型代碼庫，並且支持增量更新，這意味著只有改變的文件會被重新分析，這樣可以節省時間和資源。選擇 TypeScript 和 React 作為技術棧，讓開發者能夠快速上手並進行擴展，這對於持續的開發和社群貢獻至關重要。然而，這也帶來了依賴管理的挑戰，特別是在處理多個版本的依賴時。技術風險方面，隨著代碼庫的擴大，可能會出現性能瓶頸，特別是在圖譜變得過於龐大時，這需要進一步的優化。整合方面，這個工具與主流的開發框架和 CI/CD 流程的兼容性良好，能夠輕鬆融入現有的開發環境。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指令，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中有多語言支持，對於不同背景的開發者都很友好。

## 優缺點分析

> [!success] 優點
> - 提供直觀的可視化界面，幫助使用者理解代碼結構。
> - 結合 LLM 智能，生成易於理解的代碼解釋。
> - 支持多平台，方便不同環境的開發者使用。

> [!danger] 缺點
> - 大型知識圖譜可能導致性能問題。
> - 對於某些代碼結構的解釋準確性有待提高。
> - 目前的社群支持和文檔仍在擴展中。

> [!warning] 注意事項
> - 大型知識圖譜可能導致儀表板變得無法使用。
> - 目前僅支持特定的編碼平台，對於其他平台的支持尚未完善。
> - 對於某些複雜的代碼結構，可能無法生成準確的解釋。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 提供了文件同步和版本控制功能，而 Understand Anything 專注於代碼理解和可視化，適合不同的使用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | FreedomIntelligence/OpenClaw-Medical-Skills 主要針對醫療領域的技能，而 Understand Anything 則是通用的代碼理解工具，適用於各種代碼庫。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 專注於文件同步和版本控制，而 Understand Anything 則專注於代碼理解和可視化，適合不同的使用場景。 | 如果你的團隊需要強調版本控制和文件同步，AlpinDale/parsync 會是更好的選擇。 | medium，因為需要重新設計工作流以適應不同的工具特性。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | FreedomIntelligence/OpenClaw-Medical-Skills 主要針對醫療領域的技能，而 Understand Anything 則是通用的代碼理解工具。 | 如果你的專案專注於醫療領域的代碼，FreedomIntelligence/OpenClaw-Medical-Skills 會提供更針對性的功能。 | low，因為兩者的基本功能有相似之處，轉換相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Understand-Anything** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | AlpinDale/parsync 專注於文件同步和版本控制，而 Understand Anything 則專注於代碼理解和可視化，適合不同的使用場景。 | FreedomIntelligence/OpenClaw-Medical-Skills 主要針對醫療領域的技能，而 Understand Anything 則是通用的代碼理解工具。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流以適應不同的工具特性。 | low，因為兩者的基本功能有相似之處，轉換相對容易。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強調版本控制和文件同步，AlpinDale/ | 如果你的專案專注於醫療領域的代碼，FreedomIntell |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型團隊，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 大型知識圖譜可能導致儀表板變得無法使用
  - 解法：分批分析代碼庫，避免一次性加載過多數據
- [MEDIUM] 對於某些代碼結構的解釋準確性有待提高
  - 解法：手動檢查關鍵代碼段的解釋
- [low] 安裝過程中可能遇到平台兼容性問題
  - 解法：查閱官方文檔以獲取最新的安裝指南

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 新進開發者加入一個大型專案 | 非常適合 | 能夠快速理解代碼結構，減少學習曲線。 |
| 產品經理需要了解系統功能 | 適合 | 提供簡單的代碼解釋，無需深入閱讀代碼。 |
| 小型團隊進行代碼審查 | 普通 | 雖然有助於理解，但可能不夠全面。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速理解代碼的工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

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
| Forks | 427 |
| Open Issues | 13 |
| Issue 解決率 | 28% (5 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-15 |
| 官方網站 | [Link](https://lum.is-a.dev/Understand-Anything/) |
| Repo 大小 | 2.2 MB |
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
> | [@Lum1104](https://github.com/Lum1104) | 106 |
> | [@Jamie-HM](https://github.com/Jamie-HM) | 2 |
> | [@eltociear](https://github.com/eltociear) | 1 |
> | [@KyleWMiller](https://github.com/KyleWMiller) | 1 |
> | [@longvv](https://github.com/longvv) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://lum.is-a.dev/Understand-Anything/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-21 ~ 2026-03-23）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #13 from Lum1104/feat/language-agnostic-support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/Lum1104/Understand-Anything/issues/14) | Dashboard becomes unusable with large knowledge graphs `bug` `help wanted` | 4 | 5 |
> | [#7](https://github.com/Lum1104/Understand-Anything/issues/7) | Feature Request: Runtime theme customization `enhancement` | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Understand Anything
> 
>   Turn any codebase into an interactive knowledge graph you can explore, search, and ask questions about.
> 
>   English | 中文 | 日本語
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

相關概念：[[知識圖譜]] · [[靜態分析]] · [[多代理系統]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/Lum1104/Understand-Anything) · [官方網站](https://lum.is-a.dev/Understand-Anything/)

## 相關收錄

> [!note]- 直接競品（同子分類：知識圖譜）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識圖譜" AND file.name != "Lum1104--Understand-Anything"
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
> const concepts = ["知識圖譜","靜態分析","多代理系統"];
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
