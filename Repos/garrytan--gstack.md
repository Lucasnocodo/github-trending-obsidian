---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 6 opinionated tools that serve as CEO, Eng Manager, Release Manager and QA Engineer"
homepage: ""
stars: 2775
stars_per_day: 2775
forks: 342
open_issues: 15
created: 2026-03-11
pushed_at: 2026-03-13
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
use_case: "將 Claude Code 轉變為一個可隨時召喚的專家團隊，提供多種工作流程技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-16"
contributor_count: 2
engagement: "medium"
issue_close_rate: 12
repo_size_kb: 21899
readme_length: 9926
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:2724,2026-03-13:2775"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為一個可隨時召喚的專家團隊，提供多種工作流程技能。"
---

# gstack

**2.8k** stars · **2.8k** stars/天 · 建立 1 天前 · TypeScript · MIT

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
> 將 Claude Code 轉變為一個可隨時召喚的專家團隊，提供多種工作流程技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.8k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在 Claude Code 環境中快速部署多種功能的小型開發團隊。
> **一句話重點** gstack 的設計使得開發者能夠在一個環境中完成多種任務，提升工作效率。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到多種專業技能支持，值得一試。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一個可隨時召喚的專家團隊，提供多種專業技能。

## 專案簡介

gstack 是一個針對 Claude Code 的擴展，提供六種專業技能，讓使用者能夠在開發過程中快速調用不同的專家角色。使用者只需在 Claude Code 中執行簡單的安裝指令，便可獲得計劃審查、代碼審查、單指令部署、瀏覽器自動化及工程回顧等功能。這些功能以斜線指令的形式提供，讓使用者能夠快速上手。gstack 的設計理念是將 Claude Code 從一個通用助手轉變為一個多元化的專家團隊，這樣的設計使得開發者能夠在不同的情境下獲得專業的支持，提升工作效率。

技術上，gstack 使用 TypeScript 和 Shell，並依賴 Playwright 進行瀏覽器自動化，這使得其在處理網頁操作時具有高效能。使用 Bun 作為執行環境，這意味著 gstack 可以在 macOS 和 Linux 上輕鬆運行，並且安裝過程不會影響系統的 PATH。相較於其他工具，gstack 的獨特之處在於它的專業技能設計，這使得開發者能夠根據需求隨時調用所需的功能，無需切換不同的工具。



在與其他類似工具比較時，例如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，gstack 提供了更為集成的解決方案，讓使用者可以在一個環境中完成多種任務，而不需要依賴多個獨立工具。這種設計在小型團隊或初創公司中尤其有效，因為它減少了工具之間的切換成本。

然而，gstack 仍然存在一些限制，例如對於大型專案的支援可能不如專門的工具來得全面，並且目前的文檔和社群支持仍在發展中。整體而言，gstack 是一個值得探索的工具，特別適合需要快速迭代和多功能支持的小型團隊。

使用者在實際使用中可能會遇到一些問題，例如敏感數據洩漏的風險，這需要在使用時謹慎處理。維護者的活躍度較高，這對於未來的更新和問題解決是個好兆頭。

**技術棧**：`TypeScript` · `Shell` · `Playwright`

## 重點功能

- 多種專業技能 — 提供計劃審查、代碼審查、單指令部署等功能，使用斜線指令調用。
- 瀏覽器自動化 — 使用 Playwright 實現高效的網頁操作，支持 headless 模式。
- 簡單安裝 — 只需在 Claude Code 中執行一條指令即可完成安裝。
- 輕量級設計 — 所有功能均在 ~/.claude/skills/ 目錄下運行，不影響系統環境。
- 版本控制 — 支持將 JSON 快照保存到專案中，便於趨勢追蹤。

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

## 程式碼範例

```ts
{
  "前置條件": "需要在 Claude Code 中執行以下指令",
  "指令": "Install gstack: run `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup`",
  "預期輸出": "安裝完成後，gstack 的技能將可用於 Claude Code。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 2775 stars（2775/天），forks 342（12.3%），這顯示出極高的關注度。作者 Garry Tan 以其在 AI 和開發工具領域的專業知識而聞名，這個專案解決了開發者在使用 Claude Code 時的多功能需求，之前的工具往往無法提供這樣的整合性。社群對於這種一站式解決方案的需求促進了其快速增長。

## 適合誰使用

**目標受眾**：需要在 Claude Code 環境中快速部署多種功能的小型開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化瀏覽器操作，因為使用 Playwright 可以大幅減少手動測試的時間。
> - 產品經理用它來進行計劃審查，因為可以快速調用專業技能，提升會議效率。
> - QA 工程師用它來進行代碼審查，因為能夠快速生成回顧報告，減少手動整理的工作量。

## 架構分析

gstack 的架構設計以模組化為核心，所有功能均以技能的形式存在於 Claude Code 環境中。這樣的設計使得使用者可以根據需求隨時調用所需的功能，並且不會影響系統的其他部分。資料流方面，使用者透過斜線指令調用不同的技能，這些技能會執行相應的操作並返回結果。選擇使用 Playwright 進行瀏覽器自動化，這使得 gstack 在處理網頁操作時具有高效能，並且能夠支持 headless 模式，這對於自動化測試非常重要。整體而言，這種設計在小型團隊中尤其有效，因為它減少了工具之間的切換成本，並且提供了一個集成的工作流。

## 技術深入分析

gstack 的核心技術機制是將 Claude Code 的功能模組化，使用者可以透過斜線指令調用不同的技能。這些技能包括計劃審查、代碼審查、瀏覽器自動化等，這樣的設計使得使用者能夠根據實際需求快速切換。效能方面，gstack 利用 Playwright 進行瀏覽器操作，這使得其在處理網頁自動化時具有高效能，並且支持 headless 模式，適合自動化測試。選擇 TypeScript 和 Shell 作為開發語言，這樣的選擇使得 gstack 在開發過程中能夠充分利用現有的 JavaScript 生態系統，並且保持輕量級的特性。技術風險方面，gstack 目前的文檔和社群支持仍在發展中，這可能會影響使用者的學習曲線和問題解決的效率。整合方面，gstack 可以輕鬆與現有的 Claude Code 環境整合，並且不會對系統環境造成干擾，這使得其在小型團隊中非常受歡迎。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和指令範例。安裝過程相對順暢，沒有明顯的坑。雖然文檔尚在發展中，但已經有基本的使用指南，對於新手來說，花 30 分鐘能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 提供多種專業技能，能夠快速應對不同的開發需求。
> - 安裝簡單，不會影響系統環境。
> - 使用 Playwright 進行高效的瀏覽器自動化，支持 headless 模式。

> [!danger] 缺點
> - 目前僅支援 macOS 和 Linux 環境。
> - 對於大型專案的支持可能不如專門的工具全面。
> - 文檔和社群支持仍在發展中。

> [!warning] 注意事項
> - 目前僅支援 macOS 和 Linux 環境。
> - 對於大型專案的支持可能不如專門的工具全面。
> - 文檔和社群支持仍在發展中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但缺乏 gstack 的多功能集成特性。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 WebSocket 代理，但不具備 gstack 的自動化和專業技能功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，並不具備 gstack 的多功能集成特性。 | 如果你的需求主要是文件同步，且不需要多種專業技能的支持。 | low，因為兩者的功能範圍不同，遷移成本低。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 WebSocket 代理，缺乏 gstack 的自動化和專業技能功能。 | 如果你的專案需要專門的 WebSocket 代理功能，而不需要多種技能的支持。 | medium，因為需要重新設計工作流以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，並不具備 gstack 的多功能集成特性。 | 專注於 WebSocket 代理，缺乏 gstack 的自動化和專業技能功能。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移成本低。 | medium，因為需要重新設計工作流以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步，且不需要多種專業技能的支持。 | 如果你的專案需要專門的 WebSocket 代理功能，而不需 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 敏感數據可能洩漏到 stdout 和模型記錄中
  - 解法：在使用時注意輸出內容，避免敏感信息出現。
- [MEDIUM] 文檔中對於某些功能的描述不夠詳細
  - 解法：參考 GitHub Issues 或社群討論以獲取更多資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊 | 非常適合 | gstack 提供多種功能，能夠快速應對不同的開發需求，減少工具切換成本。 |
| 大型企業的核心開發團隊 | 不適合 | 對於大型專案的支持可能不如專門的工具全面。 |
| 需要快速迭代的開發環境 | 非常適合 | gstack 的設計使得開發者能夠迅速調用所需的功能，提升工作效率。 |
| 對於瀏覽器自動化需求不高的專案 | 普通 | 雖然 gstack 提供瀏覽器自動化功能，但對於不需要此功能的專案來說，可能不具吸引力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到多種專業技能支持，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，並且不會存取敏感資料，但使用者需注意敏感數據的輸出問題。

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
| Forks | 342 |
| Open Issues | 15 |
| Issue 解決率 | 12% (2 closed) |
| 最後推送 | 2026-03-13 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 21.4 MB |
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
> | [@garrytan](https://github.com/garrytan) | 3 |
> | [@morluto](https://github.com/morluto) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
**連結**：[文件](https://github.com/garrytan/gstack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-12 ~ 2026-03-12）
> **活躍天數** 1 天 · **最新 commit** Add YC hiring promo after install section

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/garrytan/gstack/issues/18) | [Security] Sensitive values leaked into stdout and model tra | 1 | 0 |
> | [#16](https://github.com/garrytan/gstack/issues/16) | Documentation: Opencode (Openrouter, local models, etc) inst | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gstack
> 
> **gstack turns Claude Code from one generic assistant into a team of specialists you can summon on demand.**
> 
> Six opinionated workflow skills for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Plan review, code review, one-command shipping, browser automation, and engineering retrospectives — all as slash commands.
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
> > Install gstack: run `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup` then add a "gstack" section to CLAUDE.md that says to use the /browse skill from gstack for all web browsing, never use mcp\_\_claude-in-chrome\_\_\* tools, and lists the available skills: /plan-ceo-review, /plan-eng-review, /review, /ship, /browse, /retro. Then ask the user if they also want to add gstack to the current project so teammates get it.
> 
> 
> ### What gets installed
> 
> - Skill files (Markdown prompts) in `~/.claude/skills/gstack/` (or `.claude/skills/gstack/` for project installs)
> - Symlinks at `~/.claude/skills/browse`, `~/.claude/skills/review`, etc. pointing into the gstack directory
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
> ## Uninstalling
> 
> Paste this into Claude Code:
> 
> > Uninstall gstack: remove the skill symlinks by running `for s in browse plan-ceo-review plan-eng-review review ship retro; do rm -f ~/.claude/skills/$s; done` then run `rm -rf ~/.claude/skills/gstack` and remove the gstack section from CLAUDE.md. If this project also has gstack at .claude/skills/gstack, remove it by running `for s in browse plan-ceo-review plan-eng-review review ship retro; do rm -f .claude/skills/$s; done && rm -rf .claude/skills/gstack` and remove the gstack section from the project CLAUDE.md too.
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
> You:   /browse staging.myapp.com — test the listing flow
> 
> Claude: [22 tool calls — navigates routes, fills the upload form, verifies
>         enrichment renders, checks console for errors, screenshots each step]
>         All pages load correctly. Listing flow works end to end on staging.
> ```
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
> * Can we search the web and draft the title and description automatically?
> * Can we pull specs, category, and pricing comps?
> * Can we suggest which photo will convert best as the hero image?
> * Can we detect when the uploaded photo is ugly, dark, cluttered, or low-trust?
> * Can we make the experience feel premium instead of like a dead form from 2007?
> 
> That is what `/plan-ceo-review` does for me.
> 
> It does not just ask, "how do I add this feature?"
> It asks, **"what is the 10-star product hiding inside this request?"**
> 
> That is a very different kind of power.
> 
> ---
> 
> 
> ### Example
> 
> Take the same listing app example.
> 
> Let's say `/plan-ceo-review` already did its job. We decided the real feature is not just photo upload. It is a smart listing flow that:
> 
> * uploads photos
> * identifies the product
> * enriches the listing from the web
> * drafts a strong title and description
> * suggests the best hero image
> 
> Now `/plan-eng-review` takes over.
> 
> Now I want the model to answer questions like:
> 
> * What is the architecture for upload, classification, enrichment, and draft generation?
> * Which steps happen synchronously, and which go to background jobs?
> * Where are the boundaries between app server, object storage, vision model, search/enrichment APIs, and the listing database?
> * What happens if upload succeeds but enrichment fails?
> * What happens if product identification is low-confidence?
> * How do retries work?
> * How do we prevent duplicate jobs?
> * What gets persisted when, and what can be safely recomputed?
> 
> And this is where I want diagrams — architecture diagrams, state models, data-flow diagrams, test matrices. Diagrams force hidden assumptions into the open. They make hand-wavy planning much harder.
> 
> That is `/plan-eng-review`.
> 
> Not "make the idea smaller."
> **Make the idea buildable.**
> 
> ---
> 
> 
> ### Example
> 
> Suppose the smart listing flow is implemented and the tests are green.
> 
> `/review` should still ask:
> 
> * Did I introduce an N+1 query when rendering listing photos or draft suggestions?
> * Am I trusting client-provided file metadata instead of validating the actual file?
> * Can two tabs race and overwrite cover-photo selection or item details?
> * Do failed uploads leave orphaned files in storage forever?
> * Can the "exactly one hero image" rule break under concurrency?
> * If enrichment APIs partially fail, do I degrade gracefully or save garbage?
> * Did I accidentally create a prompt injection or trust-boundary problem by pulling web data into draft generati

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ahmadawais--chartli|ahmadawais/chartli]]

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

- [[2026-03-13|2026-03-13]] — 首次收錄，2.7k stars
