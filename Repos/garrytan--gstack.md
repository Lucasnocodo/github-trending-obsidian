---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 6 opinionated tools that serve as CEO, Eng Manager, Release Manager and QA Engineer"
homepage: ""
stars: 2724
stars_per_day: 2724
forks: 337
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
use_case: "將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供六種意見明確的工作流程技能。"
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
star_history: "2026-03-13:2724"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供六種意見明確的工作流程技能。"
---

# gstack

**2.7k** stars · **2.7k** stars/天 · 建立 1 天前 · TypeScript · MIT

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
> 將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供六種意見明確的工作流程技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.7k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 已經在使用 Claude Code 並希望提升工作流程效率的開發團隊。
> **一句話重點** gstack 不僅是一個工具，而是一個提升開發流程的操作系統。

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
> **結論** 花 2 小時學習，1 小時整合，得到高效的開發流程，值得嘗試。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供六種意見明確的工作流程技能。

## 專案簡介

gstack 是一個設計用來強化 Claude Code 的工具集，讓用戶能夠在開發過程中使用多種專業技能。用戶可以透過簡單的指令，如 `/plan-ceo-review` 和 `/ship`，來進行計畫、代碼審查、發佈等操作。這些指令背後的設計理念是希望用戶不僅能夠快速執行任務，還能在過程中獲得深度的反思與改進建議。gstack 的核心在於它的六個技能，分別針對不同的開發階段，從規劃到測試，確保每一步都能達到高標準。技術上，gstack 使用 TypeScript 和 Shell，並依賴於 Playwright 進行瀏覽器自動化，這使得它能夠在 macOS 和 Linux 環境中運行。

與其他工具相比，如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，gstack 提供了更為專注的工作流程，特別適合需要高效能和高質量交付的開發團隊。使用者在實施 gstack 時，會發現它能夠有效減少重複性工作，並提高整體的開發效率。需要注意的是，gstack 目前仍在早期階段，可能會遇到一些未解決的問題，如敏感信息洩漏等。總體來說，gstack 是一個值得嘗試的工具，特別是對於那些已經在使用 Claude Code 的團隊。

**技術棧**：`TypeScript` · `Shell` · `Playwright 1.58.2`

## 重點功能

- 多種工作流程技能 — 包含 /plan-ceo-review, /plan-eng-review, /review, /ship, /browse, /retro，針對不同開發階段提供專業建議。
- 瀏覽器自動化 — 使用 Playwright 進行網頁操作，支持多種瀏覽器環境。
- Markdown 提示文件 — 在 ~/.claude/skills/gstack/ 中生成技能文件，方便用戶查閱。
- 輕量安裝 — 所有文件都存放在 .claude/ 目錄下，不會影響系統環境。
- 版本控制友好 — 實際文件會被提交到 Git 倉庫，方便團隊協作。

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
  "預期輸出": "gstack 安裝完成，並可使用各種技能"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 2724 stars（2724/天），forks 337（12.4%），這顯示出強烈的需求和興趣。作者 Garry Tan 在 AI 和工程管理方面有豐富的經驗，這使得他能夠針對開發者的痛點提供解決方案。gstack 解決了在使用 Claude Code 時，缺乏專業化工作流程的問題，這在過去的工具中並不常見。社群的反應也表明，這個工具的實用性和創新性受到廣泛認可。gstack 的出現恰逢 AI 工具日益普及的時期，這使得它的需求進一步上升。

## 適合誰使用

**目標受眾**：已經在使用 Claude Code 並希望提升工作流程效率的開發團隊。

> [!example] 使用場景
> - 軟體工程師用它來進行代碼審查，因為 gstack 提供的 /review 指令能夠自動檢查潛在的問題，減少人為錯誤。
> - 產品經理用它來規劃新功能，因為 /plan-ceo-review 能夠引導他們深入思考產品的真正需求，避免表面化的解決方案。
> - QA 工程師用它來進行自動化測試，因為 /browse 指令能夠模擬用戶行為，快速驗證功能的正確性。

## 架構分析

gstack 的架構設計以簡化安裝和使用為核心，所有功能都集中在 ~/.claude/skills/gstack/ 目錄下，並透過 symlink 方式連結到 Claude Code 的技能系統。這樣的設計使得用戶能夠輕鬆地安裝和使用，而不需要改變系統環境或 PATH。資料流方面，使用者透過指令與 Claude Code 互動，Claude Code 再根據指令調用 gstack 的相應功能，實現從計畫到發佈的完整流程。選擇使用 Playwright 進行瀏覽器自動化，這樣可以提供更高的穩定性和兼容性，雖然這也意味著需要額外的依賴。整體而言，這種架構設計使得 gstack 在功能上具備了靈活性和擴展性，但在依賴管理上則需要用戶注意 Playwright 的版本更新。

## 技術深入分析

gstack 的核心技術機制是將 Claude Code 的功能模組化，並針對不同的開發需求提供專業化的工作流程。使用 TypeScript 作為主要開發語言，這使得代碼更具可讀性和可維護性。Playwright 作為瀏覽器自動化的工具，能夠支持多種瀏覽器環境，這在自動化測試中提供了靈活性。gstack 的設計考量了用戶的使用習慣，將所有功能集中在 ~/.claude/skills/gstack/ 目錄下，並透過 symlink 方式連結，這樣的設計使得安裝和使用變得簡單。儘管如此，這也意味著用戶需要定期更新 Playwright，以保持兼容性。技術風險方面，gstack 目前仍在早期階段，可能會遇到一些未解決的問題，如敏感信息洩漏等。整體而言，gstack 提供了一個高效的開發工具，但在使用時仍需謹慎考量其潛在風險。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需確保滿足所有前置條件。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供專業化的工作流程，提升開發效率。
> - 安裝簡單，無需複雜的配置。
> - 支持多種技能，滿足不同開發需求。

> [!danger] 缺點
> - 目前僅支援特定平台，限制了使用範圍。
> - 可能存在敏感信息洩漏的風險。
> - 社群支持仍在發展中，問題解決率較低。

> [!warning] 注意事項
> - 目前僅支援 macOS 和 Linux 環境。
> - 需要安裝 Claude Code 和 Bun v1.0+。
> - 可能會洩漏敏感信息至 stdout 和模型記錄中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | gstack 提供專業化的工作流程，而 AlpinDale/parsync 更專注於文件同步和傳輸。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | gstack 是針對開發流程的工具，而 Flowseal/tg-ws-proxy 主要用於 Telegram 的 WebSocket 代理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | gstack 專注於開發流程的專業化，而 AlpinDale/parsync 更偏向於文件同步和傳輸，功能範圍不同。 | 如果你的需求主要是文件同步而非開發流程管理，則 AlpinDale/parsync 更適合。 | low，因為兩者的使用場景不同，遷移不會影響現有工作流程。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | gstack 提供一整套開發流程工具，而 Flowseal/tg-ws-proxy 主要用於 Telegram 的 WebSocket 代理，功能定位不同。 | 如果你的主要需求是 Telegram 的 WebSocket 代理，則 Flowseal/tg-ws-proxy 是更好的選擇。 | medium，因為需要重新調整工作流程以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | gstack 專注於開發流程的專業化，而 AlpinDale/parsync 更偏向於文件同步和傳輸，功能範圍不同。 | gstack 提供一整套開發流程工具，而 Flowseal/tg-ws-proxy 主要用於 Telegram 的 WebSocket 代理，功能定位不同。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，遷移不會影響現有工作流程。 | medium，因為需要重新調整工作流程以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非開發流程管理，則 AlpinD | 如果你的主要需求是 Telegram 的 WebSocket |

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

- **[HIGH]** 在特定情境下，敏感信息可能會洩漏至 stdout 和模型記錄中。
  - 解法：避免在生產環境中使用 gstack，或使用環境變數隱藏敏感信息。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是 Playwright 的版本不兼容。
  - 解法：確保安裝最新版本的 Playwright，並定期檢查更新。
- [MEDIUM] 使用過程中可能會出現性能瓶頸，特別是在高負載情況下。
  - 解法：在低負載環境中進行測試，並根據需要調整配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發團隊 | 非常適合 | gstack 提供的專業化工作流程能夠提升小團隊的開發效率。 |
| 大型企業的多團隊協作 | 普通 | 雖然 gstack 功能強大，但可能需要額外的整合工作來適應大型團隊的需求。 |
| 個人開發者的 side project | 非常適合 | 安裝簡單且能夠快速提升開發效率，適合個人使用。 |
| 需要高安全性的金融應用開發 | 不適合 | 目前存在敏感信息洩漏的風險，不建議用於高安全性需求的應用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的開發流程，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：gstack 需要訪問敏感資料，並可能在某些情況下洩漏信息，使用時需謹慎。

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
| Forks | 337 |
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

**社群活躍度**：社群活躍度中等，近期有持續的更新和問題回應。
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

相關概念：[[自動化]] · [[CLI/TUI]] · [[程式碼生成]]

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
> const concepts = ["自動化","CLI/TUI","程式碼生成"];
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
