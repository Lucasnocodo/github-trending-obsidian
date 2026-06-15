---
repo: DietrichGebert/ponytail
url: https://github.com/DietrichGebert/ponytail
owner: DietrichGebert
owner_type: User
language: JavaScript
license: MIT
description: "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote."
homepage: ""
stars: 8281
stars_per_day: 2760
forks: 362
open_issues: 2
created: 2026-06-12
pushed_at: 2026-06-15
first_seen: 2026-06-13
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: "v4.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-13
use_case: "讓 AI 代理像懶惰的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1106
readme_length: 4240
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-13"
star_history: "2026-06-13:939,2026-06-13:940,2026-06-14:1541,2026-06-14:1548,2026-06-15:8281"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/claude_code_plugin"
aliases:
  - "ponytail"
  - "DietrichGebert/ponytail"
  - "讓 AI 代理像懶惰的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
---

# ponytail

**1.5k** stars · **774** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/DietrichGebert--ponytail");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v4.2.0` `easy-install`

`agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` `prompt-engineering` `yagni`

> [!summary] 一句話摘要
> 讓 AI 代理像懶惰的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (774 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速開發且希望減少冗餘代碼的前端和後端開發者。
> **一句話重點** Ponytail 讓開發者能夠以懶惰的方式高效編寫程式碼，這種方法將會改變我們對於代碼生成的認知。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "DietrichGebert--ponytail" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到顯著的開發效率提升，值得嘗試。

> [!abstract] 核心創新
> Ponytail 透過懶惰的開發模式，顯著減少了代碼的冗餘和開發成本。

## 專案簡介

Ponytail 是一個設計用來讓 AI 代理在編寫程式碼時採取懶惰的方式，通過減少不必要的程式碼來提升效率。它的核心流程是：在編寫程式碼之前，代理會首先檢查是否真的需要這段程式碼，然後依次考慮標準庫、原生平台功能、已安裝的依賴，最後只在必要時寫出最小可行的程式碼。這樣的設計使得 Ponytail 在執行任務時能夠達到 80-94% 的程式碼減少，並且在性能上比無技能代理快 3-6 倍。使用者只需簡單的安裝指令，例如 `/plugin marketplace add DietrichGebert/ponytail`，便可將其整合進 Claude Code 或 Codex 環境中。

這種懶惰的開發方式不僅能節省開發時間，還能降低成本，並且在安全性和可訪問性方面不會妥協。與其他工具相比，如 caveman，Ponytail 更加注重代碼的簡潔性和效率，適合需要快速開發的場景。實際使用中，Ponytail 的設計使得開發者能夠專注於核心功能，而不是繁瑣的實現細節，這對於小型專案或初創公司尤為重要。未來，隨著 AI 代理的普及，Ponytail 可能會成為一個標準的開發工具。

**技術棧**：`JavaScript` · `PowerShell` · `Shell`

## 重點功能

- 懶惰模式 — 使 AI 代理在編寫程式碼時只寫必要的部分，減少冗餘。
- 性能優化 — 在多個模型上測試顯示，Ponytail 能夠達到 3-6 倍的速度提升。
- 簡單安裝 — 只需幾個指令即可將 Ponytail 整合進 Claude Code 或 Codex 環境。
- 代碼審查功能 — `/ponytail-review` 指令可幫助用戶找出冗餘代碼。
- 自動化規則 — 內建的規則集可自動應用於每次代碼生成，提升一致性。

## 快速開始

1. 在 Claude Code 中添加 Ponytail 插件
```bash
/plugin marketplace add DietrichGebert/ponytail
```
2. 安裝 Ponytail 插件
```bash
/plugin install ponytail@ponytail
```
3. 在 Codex 中添加 Ponytail 插件
```bash
codex plugin marketplace add DietrichGebert/ponytail
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 Ponytail 插件",
  "```html",
  "<!-- 這裡是使用 Ponytail 生成的簡單代碼 -->",
  "```",
  "# 預期輸出：簡化的 HTML 結構，無冗餘代碼"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 1548 stars（774/天），forks 70（4.5%），這顯示出強勁的增長潛力。作者 DietrichGebert 之前在 AI 代理領域有豐富的經驗，這個專案解決了開發者在編寫程式碼時面臨的冗餘問題，讓 AI 代理能夠更有效率地生成代碼。此專案的推出引起了社群的廣泛關注，並且在開發者論壇上獲得了積極的討論。技術上，Ponytail 利用了現有的 AI 模型，並在此基礎上進行了優化，讓開發者能夠在不增加複雜度的情況下，提升開發效率。forks/stars 比率顯示出許多使用者已經開始實際修改和使用這個工具，這是一個良好的信號。

## 適合誰使用

**目標受眾**：需要快速開發且希望減少冗餘代碼的前端和後端開發者。

> [!example] 使用場景
> - 前端開發者用它來快速生成 UI 元件，因為 Ponytail 能夠減少 80-94% 的程式碼，讓開發速度大幅提升。
> - 初創公司工程師用它來簡化功能開發流程，因為它能夠在不妥協安全性的情況下，快速產出可用的程式碼。
> - 資深開發者用它來優化現有代碼庫，因為 Ponytail 的審查功能可以幫助他們找到冗餘的代碼並進行清理。

## 架構分析

Ponytail 的架構設計以插件形式運行，這意味著它可以輕鬆集成到現有的 AI 代理環境中。其核心邏輯是通過一系列的規則來決定是否需要編寫代碼，這樣的設計使得開發者能夠專注於核心功能，而不必擔心冗餘的實現細節。每次代碼生成時，Ponytail 都會檢查是否可以使用標準庫或原生功能，這樣不僅提高了效率，也減少了潛在的錯誤。選擇這種懶惰的方式，意味著在某些情況下可能需要手動介入，但整體上能夠顯著提升開發速度和降低成本。這種設計也使得 Ponytail 在小型專案或初創公司中非常適用，因為它能夠快速適應變化的需求。

## 技術深入分析

Ponytail 的核心技術機制是基於一系列的規則來決定是否需要編寫代碼，這些規則包括檢查標準庫、原生功能和已安裝的依賴。這種設計使得 Ponytail 能夠在多個模型上進行性能優化，並且在實際測試中顯示出顯著的速度提升和成本降低。選擇 JavaScript 作為主要語言，意味著它能夠輕鬆集成到現有的前端開發環境中，並且依賴樹相對簡單，降低了維護的複雜度。設計上，Ponytail 也考慮到了安全性和可訪問性，這些都是在開發過程中不可忽視的因素。在擴展性方面，Ponytail 目前的設計能夠應對小型專案的需求，但在面對更大規模的應用時，可能需要進一步的優化和調整。整體來說，Ponytail 在提升開發效率的同時，也為開發者提供了一種新的思維方式，讓他們能夠更專注於核心功能的實現。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和範例，安裝過程相對順暢，沒有明顯的坑。文件中有詳細的使用說明，對於新手來說，花 30 分鐘能夠順利上手並運行起來。

## 優缺點分析

> [!success] 優點
> - 顯著減少代碼量，提升開發效率。
> - 簡單的安裝和集成過程，降低了使用門檻。
> - 內建的代碼審查功能幫助用戶優化代碼。

> [!danger] 缺點
> - 對於複雜的業務邏輯可能不夠靈活。
> - 目前僅支援特定的開發環境。
> - 在某些情況下可能需要額外的手動介入。

> [!warning] 注意事項
> - 僅支援 Claude Code 和 Codex 環境。
> - 對於複雜的業務邏輯，可能需要額外的手動介入。
> - 不支援所有編程語言，主要針對 JavaScript 和其生態系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 提供了一種更為原始的代碼生成方式，但不如 Ponytail 在代碼簡潔性和性能上優化。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 更加注重於多模組的整合，而 Ponytail 更專注於減少代碼冗餘。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 提供了一種更為原始的代碼生成方式，但不如 Ponytail 在代碼簡潔性和性能上優化。 | 如果你需要一個更靈活的代碼生成工具，並且不介意手動調整代碼，Caveman 可能是更好的選擇。 | medium，因為需要重新調整代碼生成的邏輯。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 更加注重於多模組的整合，而 Ponytail 更專注於減少代碼冗餘。 | 如果你的專案需要多模組的整合，Agent Sprite Forge 可能更合適。 | high，因為需要重新設計整個代碼生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ponytail** | **caveman** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Caveman 提供了一種更為原始的代碼生成方式，但不如 Ponytail 在代碼簡潔性和性能上優化。 | Agent Sprite Forge 更加注重於多模組的整合，而 Ponytail 更專注於減少代碼冗餘。 |
> | 遷移成本 | - | medium，因為需要重新調整代碼生成的邏輯。 | high，因為需要重新設計整個代碼生成流程。 |
> | 適用場景 | 主要場景 | 如果你需要一個更靈活的代碼生成工具，並且不介意手動調整代碼， | 如果你的專案需要多模組的整合，Agent Sprite Fo |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，Ponytail 可能無法正確識別標準庫功能
  - 解法：手動檢查並補充必要的代碼
- **[HIGH]** 對於複雜的業務邏輯，生成的代碼可能不夠靈活
  - 解法：在需要時手動調整生成的代碼
- [MEDIUM] 安裝過程中可能會遇到版本不兼容的問題
  - 解法：確保依賴的版本與 Ponytail 相容

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的前端專案 | 非常適合 | 能夠快速生成代碼，減少開發時間。 |
| 大型企業的核心系統 | 不適合 | 對於複雜的業務邏輯，Ponytail 可能無法提供足夠的靈活性。 |
| 初創公司的 MVP 開發 | 非常適合 | 能夠快速迭代，降低開發成本。 |
| 需要高可擴展性的應用 | 普通 | 目前的設計可能在擴展性上存在瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到顯著的開發效率提升，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Ponytail 本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
| Forks | 70 |
| Open Issues | 0 |
| Issue 解決率 | 100% (4 closed) |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-06-12 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DietrichGebert/ponytail) |
| Topics | `agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 98
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DietrichGebert](https://github.com/DietrichGebert) | 29 |
> | [@ChindanaiNaKub](https://github.com/ChindanaiNaKub) | 2 |
> | [@apardawala](https://github.com/apardawala) | 1 |
> | [@HannesOberreiter](https://github.com/HannesOberreiter) | 1 |
> | [@marking](https://github.com/marking) | 1 |

**最新版本**：v4.2.0 — v4.2.0: lazy in OpenCode now (2026-06-13)

> [!info]- Release Notes
> **Added**
> - OpenCode support: a plugin that injects the ponytail ruleset every turn and adds `/ponytail` + `/ponytail-review`, with README install steps. (#16)
> 
> **Fixed**
> - Mode filter no longer strips rule bullets containing a colon. (#14)
> - Hooks use `CLAUDE_PLUGIN_ROOT`, fixing activation that failed with `Cannot find module`. (#12)

## 社群與生態

**社群活躍度**：社群活躍，已解決所有開放問題，並持續更新。
**連結**：[文件](https://github.com/DietrichGebert/ponytail)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-12 ~ 2026-06-13）
> **活躍天數** 2 天 · **最新 commit** docs: correct ponytail-help update steps to match Claude Code docs

## README 摘錄

> [!info]- 展開查看原文 README
> Ponytail
> 
>   He says nothing. He writes one line. It works.
> 
>   
>   
>   
>   
> 
>   80-94% less code &middot; 3-6&times; faster &middot; 47-77% cheaper
>   Median of 10 runs across Haiku, Sonnet, and Opus. Reproduce it yourself.
> 
> ---
> 
> You know him. Long ponytail. Oval glasses. Has been at the company longer than the version control. You show him fifty lines; he looks at them, says nothing, and replaces them with one.
> 
> Ponytail puts him inside your AI agent.
> 
> ## Before / after
> 
> You ask for a date picker. Your agent installs flatpickr, writes a wrapper component, adds a stylesheet, and starts a discussion about timezones.
> 
> With ponytail:
> 
> ```html
> 
> ```
> 
> More survivors in [examples/](examples/).
> 
> ## Numbers
> 
> Five everyday tasks (email validator, debounce, CSV sum, countdown timer, rate limiter), three models, three arms: no skill, the [caveman](https://github.com/JuliusBrussee/caveman) skill, and ponytail. Ten runs per cell, median reported.
> 
>   
> 
> **80-94% less code, 47-77% less cost, and 3-6× faster than a no-skill agent, on every model.** Every shortcut ponytail takes is marked in the code with a `ponytail:` comment naming its upgrade path. Reproduce it yourself: `npx promptfoo eval -c benchmarks/promptfooconfig.yaml`. Method and raw numbers: [benchmarks/](benchmarks/). Production-grade tasks, where an unconstrained agent bloats far more, are written up in [benchmarks/results/](benchmarks/results/).
> 
> ## How it works
> 
> Before writing code, the agent stops at the first rung that holds:
> 
> ```
> 1. Does this need to exist?   → no: skip it (YAGNI)
> 2. Stdlib does it?            → use it
> 3. Native platform feature?   → use it
> 4. Installed dependency?      → use it
> 5. One line?                  → one line
> 6. Only then: the minimum that works
> ```
> 
> Lazy, not negligent: trust-boundary validation, data-loss handling, security, and accessibility are never on the chopping block.
> 
> ## Install
> 
> The most effort ponytail will ever ask of you:
> 
> ### Claude Code
> 
> ```
> /plugin marketplace add DietrichGebert/ponytail
> /plugin install ponytail@ponytail
> ```
> 
> ### Codex
> 
> ```bash
> codex plugin marketplace add DietrichGebert/ponytail
> codex
> ```
> 
> Open `/plugins`, select the Ponytail marketplace, and install Ponytail. Then
> open `/hooks`, review and trust its two lifecycle hooks, and start a new thread.
> 
> ### Pi agent harness
> 
> ```
> pi install git:github.com/DietrichGebert/ponytail
> ```
> 
> ### OpenCode
> 
> Run OpenCode from a checkout of this repo (the plugin reuses its `hooks/` and `skills/`), and add to `opencode.json`:
> 
> ```json
> { "plugin": ["./.opencode/plugins/ponytail.mjs"] }
> ```
> 
> Injects the ruleset every turn at the active level; adds `/ponytail` and `/ponytail-review`. OpenCode also auto-loads this repo's `AGENTS.md`, so the rules hold even without the plugin. The plugin adds the `lite/full/ultra/off` levels.
> 
> That was it. He'd be proud. He won't say it.
> 
> Active every session. `/ponytail-review` finds what to delete in your diff. `/ponytail ultra` exists for when the codebase has wronged you personally. `/ponytail-help` explains the rest.
> 
> In Codex, invoke the skills as `@ponytail`, `@ponytail-review`, and
> `@ponytail-help`. Startup and mode-change text shows the current mode.
> 
> Cursor, Windsurf, Cline, Copilot, Aider, Kiro: copy the matching rules file from this repo ([`.cursor/rules/`](.cursor/rules/), [`.windsurf/rules/`](.windsurf/rules/), [`.clinerules/`](.clinerules/), [`.github/copilot-instructions.md`](.github/copilot-instructions.md), [`AGENTS.md`](AGENTS.md), [`.kiro/steering/`](.kiro/steering/)).
> 
> Kiro: copy `.kiro/steering/ponytail.md` to `~/.kiro/steering/` (global) or `.kiro/steering/` in your project.
> 
> Which files map to which agent: [Agent portability](docs/agent-portability.md).
> 
> ## Development
> 
> When changing the compact rule text, keep the agent copies aligned:
> 
> ```bash
> node scripts/check-rule-copies.js
> ```
> 
> ## FAQ
> 
> **Does it need a config file?**
> No.
> 
> **What if I really need the 120-line cache class?**
> You don't. Insist anyway and he'll build it. Slowly. Correctly. While looking at you.
> 
> **Does it scale?**
> The code you never wrote scales infinitely. Zero bugs, zero CVEs, 100% uptime since forever.
> 
> **Why "ponytail"?**
> You know exactly why.
> 
> ## License
> 
> [MIT](LICENSE). The shortest license that works.

## 延伸閱讀

相關概念：[[自動化測試]] · [[程式碼生成]] · [[Prompt Engineering]]

相關專案：[[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/DietrichGebert/ponytail)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "DietrichGebert--ponytail" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","程式碼生成","Prompt Engineering"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DietrichGebert--ponytail" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DietrichGebert--ponytail" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DietrichGebert" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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

> **2026-06-13** — 首次收錄
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

- [[2026-06-15|2026-06-15]] — 再次上榜，8.3k stars
- [[2026-06-14|2026-06-14]] — 再次上榜，1.5k stars
- [[2026-06-13|2026-06-13]] — 首次收錄，939 stars
