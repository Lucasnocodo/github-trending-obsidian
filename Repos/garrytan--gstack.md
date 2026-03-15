---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 6 opinionated tools that serve as CEO, Eng Manager, Release Manager and QA Engineer"
homepage: ""
stars: 10586
stars_per_day: 3529
forks: 1257
open_issues: 36
created: 2026-03-11
pushed_at: 2026-03-14
first_seen: 2026-03-13
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-13
use_case: "將 Claude Code 轉變為一支可隨時召喚的專業團隊，提升軟體開發效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 22045
readme_length: 9865
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:2724,2026-03-13:2775,2026-03-14:6191,2026-03-14:6258,2026-03-15:10586"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為一支可隨時召喚的專業團隊，提升軟體開發效率。"
---

# gstack

**6.3k** stars · **3.1k** stars/天 · 建立 2 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/garrytan--gstack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為一支可隨時召喚的專業團隊，提升軟體開發效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (3.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要高效協作和快速迭代的軟體開發團隊，尤其是使用 Claude Code 的團隊。
> **一句話重點** gstack 不僅僅是一個工具，而是一種全新的開發思維方式，讓開發者能夠更高效地協作和創新。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "garrytan--gstack" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的開發工具，值得一試。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一支可隨時召喚的專業團隊，提升開發效率。

## 專案簡介

gstack 是一個針對 Claude Code 的擴展，旨在將其轉變為一個多功能的專業團隊，提供計劃審查、代碼審查、一次性發佈、瀏覽器自動化、QA 測試和工程回顧等功能。使用者可以透過簡單的指令，如 `/plan-ceo-review` 和 `/qa`，來進行各種任務，這樣的設計使得開發流程更加高效且有組織。gstack 的核心在於其能夠整合多個工具於一個工作流中，並且支援多個 Claude Code 實例同時運行，這樣可以在不同的任務上並行處理，進一步提升生產力。技術上，gstack 使用 TypeScript 和 Shell，並依賴 Playwright 進行瀏覽器自動化，這使得它能夠在 macOS 和 Linux 上運行，並能夠輕鬆地管理瀏覽器會話。與傳統的開發工具相比，gstack 提供了一個更為集成化的解決方案，使用者不再需要在不同的工具之間切換，從而減少了上下文切換的成本。

這個工具特別適合需要快速迭代和高效協作的開發團隊，尤其是在面對多任務的情況下。使用者可以輕鬆地導入現有的瀏覽器會話，並在自動化測試中使用，這樣的功能在其他工具中並不常見。gstack 的設計理念是將開發過程中的每一個環節都納入到一個統一的框架中，這樣不僅提高了效率，也減少了錯誤的發生。未來，gstack 可能會進一步擴展其功能，增加更多的自動化工具和集成功能，以滿足不斷變化的開發需求。

**技術棧**：`TypeScript` · `Shell` · `Playwright`

## 重點功能

- 多功能工作流 — 提供計劃審查、代碼審查、QA 測試等多種功能，通過簡單的指令進行操作。
- /setup-browser-cookies — 自動導入瀏覽器會話，支持多種 Chromium 瀏覽器，簡化測試流程。
- 並行處理 — 支持同時運行多個 Claude Code 實例，提升多任務處理能力。
- Markdown 提示文件 — 使用 Markdown 格式的提示文件來定義技能，便於管理和擴展。
- 輕量安裝 — 所有功能均在 ~/.claude/ 目錄下運行，不影響系統環境。

## 快速開始

1. 克隆 gstack 倉庫
```bash
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
```
2. 進入 gstack 目錄
```bash
cd ~/.claude/skills/gstack
```
3. 執行安裝腳本
```bash
./setup
```
4. 更新 CLAUDE.md 文件
```bash
添加 gstack 部分以使用 /browse 技能
```

## 程式碼範例

```ts
{
  "前置條件": "需要在 Claude Code 中執行以下指令",
  "指令": "/setup-browser-cookies github.com",
  "預期輸出": "Imported 12 cookies for github.com from Comet."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 6258 stars（3129/天），forks 741（11.8%），顯示出強烈的需求和興趣。作者 Garry Tan 是知名的創業者，過去在軟體開發和 AI 領域有豐富經驗，這使得他的工具更具吸引力。gstack 解決了開發過程中多工具切換的痛點，提供了一個整合的解決方案，讓開發者能夠更專注於核心任務。社群的反應也表明了對於這種高效開發工具的需求，尤其是在快速迭代的環境中。這樣的背景促成了 gstack 的快速增長。

## 適合誰使用

**目標受眾**：需要高效協作和快速迭代的軟體開發團隊，尤其是使用 Claude Code 的團隊。

> [!example] 使用場景
> - 軟體工程師用它來自動化 QA 測試流程，因為可以快速導入瀏覽器會話，節省手動測試時間。
> - 產品經理用它來進行功能規劃和審查，因為可以透過一系列指令快速獲得反饋，提升產品開發效率。
> - 開發團隊用它來管理多個任務的並行處理，因為可以同時運行多個 Claude Code 實例，減少上下文切換的成本。

## 架構分析

gstack 採用模組化設計，所有功能都集成在 ~/.claude/skills/ 目錄下，這樣的設計使得安裝和管理變得簡單。使用 Playwright 進行瀏覽器自動化，能夠輕鬆地處理多個瀏覽器會話。每個功能都可以通過簡單的指令調用，這樣的設計降低了使用門檻。由於所有功能都在一個統一的框架中運行，這樣不僅提高了效率，也減少了錯誤的發生。gstack 的架構允許使用者在同一時間內運行多個 Claude Code 實例，這樣可以有效地管理多任務處理，提升開發效率。

## 技術深入分析

gstack 的核心技術機制在於其模組化設計，使用 TypeScript 和 Playwright 進行瀏覽器自動化，這使得它能夠在 macOS 和 Linux 上運行。透過簡單的指令，使用者可以快速調用各種功能，這樣的設計降低了使用門檻。gstack 能夠同時處理多個 Claude Code 實例，這使得它在多任務處理上具備優勢。設計上，gstack 允許使用者在同一時間內運行多個會話，這樣可以有效地管理多任務處理，提升開發效率。未來，gstack 可能會進一步擴展其功能，增加更多的自動化工具和集成功能，以滿足不斷變化的開發需求。整體而言，gstack 提供了一個高效的開發環境，適合需要快速迭代和高效協作的開發團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，安裝過程相對順暢，沒有明顯的坑。文件中有詳細的指令和範例，對於新手來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 集成多種開發工具，提升開發效率。
> - 支持多任務並行處理，減少上下文切換成本。
> - 自動導入瀏覽器會話，簡化測試流程。

> [!danger] 缺點
> - 僅支援 macOS 和 Linux，無法在 Windows 上使用。
> - 需要依賴 Claude Code 和 Bun，增加了安裝複雜度。
> - 目前功能還在持續開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux 平台。
> - 需要安裝 Claude Code 和 Bun v1.0+。
> - 不支援 Windows 系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [runanywhereAI/RCLI](https://github.com/runanywhereAI/RCLI) | RCLI 提供 CLI 工具來管理 AI 任務，但不具備 gstack 的多功能工作流和瀏覽器自動化能力。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Autoresearch 專注於自動化研究過程，而 gstack 更加注重開發流程的多樣化管理。 |
| [duoan/TorchCode](https://github.com/duoan/TorchCode) | TorchCode 主要用於深度學習模型的開發，而 gstack 提供了一個更全面的開發工具集，適合各類型的軟體開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，而 gstack 提供了更全面的開發工具集，適合各類型的軟體開發。 | 如果你的需求主要是文件同步，parsync 會是更合適的選擇。 | low，因為兩者的使用場景不同，轉換不會太困難。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 用於 WebSocket 代理，而 gstack 提供了多種開發功能，適合更廣泛的應用場景。 | 如果你的專案需要 WebSocket 代理，tg-ws-proxy 會是更合適的選擇。 | medium，因為需要重新調整開發流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於文件同步，而 gstack 提供了更全面的開發工具集，適合各類型的軟體開發。 | tg-ws-proxy 用於 WebSocket 代理，而 gstack 提供了多種開發功能，適合更廣泛的應用場景。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，轉換不會太困難。 | medium，因為需要重新調整開發流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步，parsync 會是更合適的選擇 | 如果你的專案需要 WebSocket 代理，tg-ws-pr |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 使用過程中可能會遇到瀏覽器會話導入失敗的情況
  - 解法：檢查瀏覽器的 cookie 設定，確保允許訪問。
- **[HIGH]** 在多任務處理時，可能會出現資源競爭的問題
  - 解法：確保每個會話使用獨立的配置和資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供了多種自動化工具，能夠提升開發效率。 |
| 大型企業的核心系統開發 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 需要快速迭代的開發團隊 | 非常適合 | 支持多任務並行處理，減少上下文切換成本。 |
| 個人開發者的 side project | 適合 | 安裝簡單，功能豐富，適合快速實驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的開發工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：gstack 不需要高權限，僅在本地運行，不存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

gstack 最常與 Claude Code 和 Bun 搭配使用，作為開發和測試的工具。在使用中，開發者可以透過指令快速調用各種功能，並且不需要額外配置。與主流 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要確保環境一致性，特別是在多任務處理時，可能需要額外的資源配置。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
| Forks | 741 |
| Open Issues | 23 |
| Issue 解決率 | 8% (2 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 21.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gstack) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright` `diff`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 5 |
> | [@morluto](https://github.com/morluto) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/garrytan/gstack#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-12 ~ 2026-03-14）
> **活躍天數** 3 天 · **最新 commit** feat: v0.3.2 — project-local state, diff-aware QA, Greptile integration (#36)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/garrytan/gstack/issues/18) | [Security] Sensitive values leaked into stdout and model tra | 2 | 0 |
> | [#16](https://github.com/garrytan/gstack/issues/16) | Documentation: Opencode (Openrouter, local models, etc) inst | 1 | 0 |
> | [#38](https://github.com/garrytan/gstack/issues/38) | Idea: Native Causal Auditing (K9) integration for safer agen | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gstack
> 
> **gstack turns Claude Code from one generic assistant into a team of specialists you can summon on demand.**
> 
> Eight opinionated workflow skills for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Plan review, code review, one-command shipping, browser automation, QA testing, and engineering retrospectives — all as slash commands.
> 
> 
> ## Install
> 
> **Requirements:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+. `/browse` compiles a native binary — works on macOS and Linux (x64 and arm64).
> 
> 
> ### Step 1: Install on your machine
> 
> Open Claude Code and paste this. Claude will do the rest.
> 
> > Install gstack: run `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup` then add a "gstack" section to CLAUDE.md that says to use the /browse skill from gstack for all web browsing, never use mcp\_\_claude-in-chrome\_\_\* tools, and lists the available skills: /plan-ceo-review, /plan-eng-review, /review, /ship, /browse, /qa, /setup-browser-cookies, /retro. Then ask the user if they also want to add gstack to the current project so teammates get it.
> 
> 
> ### What gets installed
> 
> - Skill files (Markdown prompts) in `~/.claude/skills/gstack/` (or `.claude/skills/gstack/` for project installs)
> - Symlinks at `~/.claude/skills/browse`, `~/.claude/skills/qa`, `~/.claude/skills/review`, etc. pointing into the gstack directory
> - Browser binary at `browse/dist/browse` (~58MB, gitignored)
> - `node_modules/` (gitignored)
> - `/retro` saves JSON snapshots to `.context/retros/` in your project for trend tracking
> 
> Everything lives inside `.claude/`. Nothing touches your PATH or runs in the background.
> 
> ---
> 
> ```
> +----------------------------------------------------------------------------+
> |                                                                            |
> |   Are you a great software engineer who loves to write 10K LOC/day         |
> |   and land 10 PRs a day like Garry?                                        |
> |                                                                            |
> |   Come work at YC: ycombinator.com/software                                |
> |                                                                            |
> |   Extremely competitive salary and equity.                                 |
> |   Now hiring in San Francisco, Dogpatch District.                          |
> |   Come join the revolution.                                                |
> |                                                                            |
> +----------------------------------------------------------------------------+
> ```
> 
> ---
> 
> 
> ## `/setup-browser-cookies`
> 
> This is my **session manager mode**.
> 
> Before `/qa` or `/browse` can test authenticated pages, they need cookies. Instead of manually logging in through the headless browser every time, `/setup-browser-cookies` imports your real sessions directly from your daily browser.
> 
> It auto-detects installed Chromium browsers (Comet, Chrome, Arc, Brave, Edge), decrypts cookies via the macOS Keychain, and loads them into the Playwright session. An interactive picker UI lets you choose exactly which domains to import — no cookie values are ever displayed.
> 
> ```
> You:   /setup-browser-cookies
> 
> Claude: Cookie picker opened — select the domains you want to import
>         in your browser, then tell me when you're done.
> 
>         [You pick github.com, myapp.com in the browser UI]
> 
> You:    done
> 
> Claude: Imported 2 domains (47 cookies). Session is ready.
> ```
> 
> Or skip the UI entirely:
> 
> ```
> You:   /setup-browser-cookies github.com
> 
> Claude: Imported 12 cookies for github.com from Comet.
> ```
> 
> First import per browser triggers a macOS Keychain prompt — click "Allow" or "Always Allow."
> 
> ---
> 
> 
> ## Uninstalling
> 
> Paste this into Claude Code:
> 
> > Uninstall gstack: remove the skill symlinks by running `for s in browse plan-ceo-review plan-eng-review review ship retro qa setup-browser-cookies; do rm -f ~/.claude/skills/$s; done` then run `rm -rf ~/.claude/skills/gstack` and remove the gstack section from CLAUDE.md. If this project also has gstack at .claude/skills/gstack, remove it by running `for s in browse plan-ceo-review plan-eng-review review ship retro qa setup-browser-cookies; do rm -f .claude/skills/$s; done && rm -rf .claude/skills/gstack` and remove the gstack section from the project CLAUDE.md too.
> 
> 
> ## Demo: one feature, five modes
> 
> I start almost every feature in plan mode. I describe what I want to build, then use `/plan-ceo-review` to pressure-test whether I am even building the right thing. Only after the product direction is locked do I shift into engineering, review, ship, and test.
> 
> ```
> You:   [enter plan mode, describe the feature]
>        I want to add seller photo upload to the listing app. Sellers
>        should be able to upload a photo of their item and we create
>        the listing from it.
> 
> You:   /plan-ceo-review
> 
> Claude: "Photo upload" is not the feature. The real job is helping sellers
>         create listings that actually sell. Here's what the 10-star version
>         looks like: auto-identify the product from the photo, pull specs and
>         pricing comps from the web, draft the title and description, suggest
>         the best hero image...
> 
> You:   /plan-eng-review
> 
> Claude: [Architecture diagram, state machine for upload → classify → enrich
>         → draft pipeline, async job boundaries, failure modes, test matrix]
> 
> You:   [exit plan mode, implement the plan]
> 
> You:   /review
> 
> Claude: Race condition: two tabs can overwrite cover-photo selection.
>         Trust boundary: pulling web data into draft generation creates
>         a prompt injection vector. Missing: orphan cleanup for failed uploads.
> 
> You:   (fix the issues)
> 
> You:   /ship
> 
> Claude: [Syncs main, runs tests, pushes branch, opens PR — 6 tool calls, done]
> 
> You:   /qa
> 
> Claude: Analyzing branch diff... 8 files changed, 3 routes affected.
>         [Tests /listings/new, /listings/:id, /api/listings against localhost:3000]
>         All 3 routes working. Upload + enrichment flow passes end to end.
> 
> You:   /setup-browser-cookies staging.myapp.com
> 
> Claude: Imported 8 cookies for staging.myapp.com from Chrome.
> 
> You:   /qa https://staging.myapp.com --quick
> 
> Claude: [Smoke test: homepage + 5 pages, 30 seconds]
>         Health Score: 91/100. No critical issues. 1 medium: mobile nav overlap.
> ```
> 
> 
> ## How to fly: 10 sessions at once
> 
> gstack is powerful with one Claude Code session. It is transformative with ten.
> 
> [Conductor](https://conductor.build) runs multiple Claude Code sessions in parallel — each in its own isolated workspace. That means you can have one session running `/qa` on staging, another doing `/review` on a PR, a third implementing a feature, and seven more working on other branches. All at the same time.
> 
> Each workspace gets its own isolated browser instance automatically — separate Chromium process, cookies, tabs, and logs stored in `.gstack/` inside each project root. No port collisions, no shared state, no configuration needed. `/browse` and `/qa` sessions never interfere with each other, even across ten parallel workspaces.
> 
> This is the setup I use. One person, ten parallel agents, each with the right cognitive mode for its task. That is not incremental improvement. That is a different way of building software.
> 
> 
> ### Example
> 
> Say I am building a Craigslist-style listing app and I say:
> 
> > "Let sellers upload a photo for their item."
> 
> A weak assistant will add a file picker and save an image.
> 
> That is not the real product.
> 
> In `/plan-ceo-review`, I want the model to ask whether "photo upload" is even the feature. Maybe the real feature is helping someone create a listing that actually sells.
> 
> If that is the real job, the whole plan changes.
> 
> Now the model should ask:
> 
> * Can we identify the product from the photo?
> * Can we infer the SKU or model number?
> * Can we search the web and draft the title and descriptio

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[多模態]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/garrytan/gstack)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "garrytan--gstack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "garrytan--gstack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "garrytan--gstack" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "garrytan--gstack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "garrytan" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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

> **2026-03-13** — 首次收錄
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

- [[2026-03-15|2026-03-15]] — 再次上榜，10.6k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，6.2k stars
- [[2026-03-13|2026-03-13]] — 首次收錄，2.7k stars
