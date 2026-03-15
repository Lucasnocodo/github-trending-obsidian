---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 6 opinionated tools that serve as CEO, Eng Manager, Release Manager and QA Engineer"
homepage: ""
stars: 10635
stars_per_day: 3545
forks: 1268
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
use_case: "將 Claude Code 轉變為一個隨叫隨到的專業團隊，提供多種自動化工作流程技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 22295
readme_length: 9985
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:2724,2026-03-13:2775,2026-03-14:6191,2026-03-14:6258,2026-03-15:10586,2026-03-15:10635"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為一個隨叫隨到的專業團隊，提供多種自動化工作流程技能。"
---

# gstack

**10.6k** stars · **3.5k** stars/天 · 建立 3 天前 · TypeScript · MIT

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
> 將 Claude Code 轉變為一個隨叫隨到的專業團隊，提供多種自動化工作流程技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (3.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要高效能自動化工具來提升開發流程的中小型團隊。
> **一句話重點** gstack 不僅是一個工具，而是一種全新的開發思維模式，將複雜的工程流程簡化為可重複的命令。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、2 小時整合，得到高效的開發自動化工具，值得採用。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一個隨叫隨到的專業團隊，提供多種自動化工作流程技能。

## 專案簡介

gstack 是一個針對 Claude Code 的工具集，將其轉變為一個多功能的專業團隊。使用者可以透過簡單的指令（如 `/plan-ceo-review`、`/qa`、`/ship`）來進行產品規劃、代碼審查、發佈和質量保證等工作。這些指令背後的設計理念是將複雜的工程流程簡化為可重複使用的命令，讓工程師能夠專注於高層次的決策，而不是繁瑣的細節。gstack 依賴於 Playwright 進行瀏覽器自動化，並使用 Bun 作為執行環境，這使得它在性能上相對輕量，且支持快速的開發和測試。與其他工具相比，gstack 提供了更為集成的工作流，特別是在多會話並行操作的情境下，能夠有效避免狀態衝突。

這使得它在需要同時處理多個任務的情況下，表現出色。使用者可以在一個專案中同時運行多個 Claude Code 實例，這樣的設計讓開發過程更加靈活和高效。gstack 的安裝過程簡單，且不會影響系統環境，所有的操作都在 `.claude/` 目錄下進行，這降低了使用門檻。對於需要快速迭代和多任務處理的開發團隊，gstack 是一個非常合適的選擇。

**技術棧**：`TypeScript` · `Go Template` · `Shell` · `Playwright`

## 重點功能

- 多種工作流技能 — 提供 /plan-ceo-review、/plan-eng-review、/review、/ship、/qa 等指令，涵蓋產品規劃到質量保證的完整流程。
- /setup-browser-cookies — 自動導入瀏覽器會話，簡化測試過程，支持多種 Chromium 瀏覽器。
- 並行會話支持 — 使用 Conductor 可以同時運行多個 Claude Code 實例，避免狀態衝突。
- 輕量安裝 — 所有操作在 .claude/ 目錄下進行，無需改變系統環境。
- 基於 Playwright 的瀏覽器自動化 — 提供穩定的自動化測試環境，支持快速的開發和測試。

## 快速開始

1. 克隆 gstack 倉庫
```bash
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
```
2. 進入 gstack 目錄
```bash
cd ~/.claude/skills/gstack
```
3. 執行安裝
```bash
./setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 10635 stars（3545/天），forks 1268（11.9%），顯示出強勁的增長潛力。作者 Garry Tan 以其在 AI 工具開發上的專業背景，提供了一個針對 Claude Code 的優化解決方案，填補了市場上對於高效能自動化工具的需求。這個工具的出現正好符合當前開發者對於提升工作效率的迫切需求。社群的反應也表明，這個工具解決了許多開發者在日常工作中遇到的痛點，特別是在多任務處理和自動化測試方面。forks/stars 比率為 11.9%，顯示出許多開發者對此工具進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要高效能自動化工具來提升開發流程的中小型團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化代碼審查，因為手動檢查代碼容易漏掉細節，使用 gstack 可以快速獲得全面的代碼分析。
> - 產品經理用它來進行產品規劃，因為 gstack 的 /plan-ceo-review 可以幫助他們更清晰地定義產品需求，避免不必要的開發。
> - QA 工程師用它來進行自動化測試，因為 gstack 的 /qa 指令可以快速檢查多個路由的功能，節省大量手動測試的時間。

## 架構分析

gstack 採用模組化設計，將不同的工作流技能封裝為獨立的命令，這樣的設計使得使用者可以根據需求選擇合適的工具。資料流方面，使用者的輸入經由 Claude Code 處理，然後調用 Playwright 進行瀏覽器操作，最終將結果返回給使用者。這種設計的優勢在於靈活性和可擴展性，使用者可以根據自己的需求添加新的技能或修改現有技能。

選擇 Playwright 而非其他瀏覽器自動化工具的原因在於其穩定性和強大的功能，能夠支持多種瀏覽器和平台。這樣的架構也使得 gstack 在性能上表現出色，能夠快速響應使用者的請求。擴展性方面，隨著使用者需求的增加，可以輕鬆添加新的工作流技能，而不會影響現有功能的穩定性。

## 技術深入分析

gstack 的核心技術機制是將 Claude Code 的功能模組化，使其能夠根據使用者的需求提供不同的工作流技能。這些技能包括產品規劃、代碼審查、發佈和質量保證等，使用者可以通過簡單的指令來調用。gstack 使用 Playwright 進行瀏覽器自動化，這使得它在性能上非常優越，能夠快速處理多個請求。根據 README，gstack 的設計考量在於提供一個靈活且可擴展的工具，讓開發者能夠根據自己的需求進行調整。選擇 TypeScript 和 Go Template 作為主要語言，這樣的選擇使得開發過程更加高效，並且能夠充分利用現有的生態系統。技術風險方面，gstack 可能在高負載情況下出現性能瓶頸，這需要在設計時考慮到資源的分配。整合方面，gstack 與現有的開發工具鏈（如 Git 和 CI/CD 工具）相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體步驟。安裝過程相對順暢，沒有明顯的坑。文件中包含了使用範例，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 集成多種自動化工作流，提升開發效率。
> - 輕量安裝，無需改變系統環境。
> - 支持多會話並行操作，適合大型專案。
> - 使用 Playwright 進行穩定的瀏覽器自動化。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux，Windows 用戶無法使用。
> - 需要安裝額外的依賴（Claude Code 和 Bun）。
> - 對於非瀏覽器自動化的支持有限。
> - 在高負載情況下可能需要更多資源。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux 系統（x64 和 arm64）。
> - 需要安裝 Claude Code 和 Bun v1.0+。
> - 目前功能主要針對瀏覽器自動化，對於其他類型的自動化支持有限。
> - 在多會話並行操作時，可能需要額外的資源來維持性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [runanywhereAI/RCLI](https://github.com/runanywhereAI/RCLI) | RCLI 提供了一個命令行界面來執行 AI 任務，但缺乏 gstack 的多任務並行處理能力和專業工作流支持。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | autoresearch 專注於自動化研究過程，而 gstack 更加關注於開發流程中的各個環節，提供更全面的工具集。 |
| [duoan/TorchCode](https://github.com/duoan/TorchCode) | TorchCode 專注於深度學習代碼生成，而 gstack 提供了更廣泛的開發自動化功能，適合多種開發場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於並行數據同步，而 gstack 更加關注於開發流程的自動化和多任務處理。 | 如果你的需求主要是數據同步而非開發流程自動化，parsync 會是更合適的選擇。 | medium，因為需要重新設計工作流。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了一個安全的數據傳輸方案，而 gstack 更加專注於開發自動化。 | 如果你的專案需要強調數據安全性，Shadowbroker 會是更好的選擇。 | high，因為需要重新設計整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於並行數據同步，而 gstack 更加關注於開發流程的自動化和多任務處理。 | Shadowbroker 提供了一個安全的數據傳輸方案，而 gstack 更加專注於開發自動化。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流。 | high，因為需要重新設計整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步而非開發流程自動化，parsync | 如果你的專案需要強調數據安全性，Shadowbroker 會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用 /setup-browser-cookies 時，可能會因為瀏覽器版本不兼容導致無法導入 cookies。
  - 解法：確保使用最新版本的 Chromium 瀏覽器。
- [MEDIUM] 多會話運行時，可能會出現資源競爭問題。
  - 解法：適當調整並行會話數量以避免過載。
- [MEDIUM] 在某些情況下，/qa 指令可能無法正確識別路由變更。
  - 解法：手動檢查路由變更，並在必要時重新執行 /qa。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | gstack 提供了全面的自動化工具，能夠提升開發效率。 |
| 大型企業的開發團隊 | 適合 | 雖然 gstack 支持多會話，但在高負載情況下可能需要更多資源。 |
| 個人開發者的 side project | 非常適合 | gstack 的安裝和使用都非常簡單，適合快速迭代。 |
| 對安全性要求高的金融應用 | 不適合 | gstack 目前對於數據安全的支持有限，可能不符合要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、2 小時整合，得到高效的開發自動化工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：gstack 本身不需要高權限運行，但在使用過程中會存取瀏覽器的 cookies，需注意敏感資料的保護。依賴的 Playwright 也有良好的安全性評價，適合在 CI/CD 中使用。

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
| Forks | 1.3k |
| Open Issues | 36 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 21.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gstack) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright` `diff` `@anthropic-ai/sdk`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 79
>     "Go Template" : 20
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 46 |
> | [@morluto](https://github.com/morluto) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和回應。
**連結**：[文件](https://github.com/garrytan/gstack#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-14 ~ 2026-03-14）
> **活躍天數** 1 天 · **最新 commit** feat: screenshot element/region clipping (v0.3.7) (#56)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/garrytan/gstack/issues/18) | [Security] Sensitive values leaked into stdout and model tra | 3 | 0 |

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

相關概念：[[自動化]] · [[CI/CD]] · [[瀏覽器自動化]]

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
> const concepts = ["自動化","CI/CD","瀏覽器自動化"];
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
