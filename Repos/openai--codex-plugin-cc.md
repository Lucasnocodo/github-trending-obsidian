---
repo: openai/codex-plugin-cc
url: https://github.com/openai/codex-plugin-cc
owner: openai
owner_type: Organization
language: JavaScript
license: Apache-2.0
description: "Use Codex from Claude Code to review code or delegate tasks."
homepage: ""
stars: 11646
stars_per_day: 2329
forks: 608
open_issues: 97
created: 2026-03-30
pushed_at: 2026-03-31
first_seen: 2026-03-31
week: "2026-W14"
month: "2026-03"
category: "開發工具"
subcategory: "代碼審查"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-31
use_case: "讓 Claude Code 用 Codex 進行代碼審查或委派任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-08"
contributor_count: 2
engagement: "low"
issue_close_rate: 6
repo_size_kb: 91
readme_length: 9857
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-31"
star_history: "2026-03-31:1400,2026-04-01:5783,2026-04-02:8574,2026-04-03:10653,2026-04-04:11297,2026-04-05:11646"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "codex-plugin-cc"
  - "openai/codex-plugin-cc"
  - "讓 Claude Code 用 Codex 進行代碼審查或委派任務。"
---

# codex-plugin-cc

**1.4k** stars · **1.4k** stars/天 · 建立 1 天前 · JavaScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/openai--codex-plugin-cc");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 用 Codex 進行代碼審查或委派任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.4k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Claude Code 環境中進行代碼審查的開發者，尤其是已經使用 Codex 的團隊。
> **一句話重點** 這個插件證明了 Codex 的強大功能可以被無縫整合進現有的開發工具中，提升代碼質量和開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/openai--codex-plugin-cc");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼審查" && p.file.name !== "openai--codex-plugin-cc" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼審查 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的代碼審查功能，值得一試。

> [!abstract] 核心創新
> 這個插件讓 Claude Code 用戶能夠無縫整合 Codex 進行代碼審查和任務委派。

## 專案簡介

這個插件讓使用 Claude Code 的開發者能夠直接在其工作流程中使用 Codex 進行代碼審查和任務委派。使用者可以透過 `/codex:review` 進行標準的只讀代碼審查，或使用 `/codex:adversarial-review` 進行可調整的挑戰性審查，這樣可以深入探討設計選擇和潛在風險。這些指令支持背景執行，讓開發者在長時間的任務中不必等待。技術上，這個插件依賴於 Node.js 18.18 以上版本，並且需要 ChatGPT 訂閱或 OpenAI API 金鑰。它的架構設計使得 Codex 的功能可以無縫整合到 Claude Code 的環境中，並且能夠使用相同的配置和認證。

與其他工具相比，這個插件的優勢在於其直接的集成和簡化的使用流程，特別適合已經在使用 Claude Code 的開發者。使用者可以快速檢查當前的 Codex 任務狀態，並且能夠隨時取消正在進行的任務，這在處理大型代碼庫時特別有用。這個專案目前處於早期階段，社群活躍度尚可，但有一些已知的問題需要解決，例如在 Windows 環境下的安裝問題。總體來看，這是一個值得關注的工具，尤其是對於希望提升代碼質量和效率的開發團隊。

**技術棧**：`Node.js 18.18+` · `TypeScript 6.0.2`

## 重點功能

- /codex:review — 進行標準的只讀代碼審查，支持 `--base` 和 `--background` 參數。
- /codex:adversarial-review — 進行可調整的挑戰性審查，支持額外的焦點文本。
- /codex:rescue — 委派任務給 Codex，支持 `--background` 和 `--resume` 參數。
- /codex:status — 檢查當前和最近的 Codex 任務狀態。
- /codex:result — 顯示完成任務的最終輸出，包括 Codex 會話 ID。
- /codex:cancel — 取消正在進行的 Codex 任務。
- /codex:setup — 檢查 Codex 是否安裝和認證，並管理可選的審查門檻。

## 快速開始

1. 將市場插件添加到 Claude Code
```bash
/plugin marketplace add openai/codex-plugin-cc
```
2. 安裝 Codex 插件
```bash
/plugin install codex@openai-codex
```
3. 重新加載插件
```bash
/reload-plugins
```
4. 設置 Codex
```bash
/codex:setup
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 Codex 並認證成功；",
  "/codex:review --background",
  "# 預期輸出：返回當前代碼的審查結果，並在背景中運行。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1400 stars（1400/天），forks 60（4.3%），顯示出相對較高的使用興趣。這個專案的主要貢獻者 dkundel-openai 和 rgbkrk 具有相關的開發背景，可能促進了這個工具的快速發展。Codex 的使用需求不斷增加，這個插件解決了開發者在使用 Claude Code 時無法直接調用 Codex 的痛點。社群的反饋也促進了這個專案的迭代，特別是針對已知問題的解決方案。這個工具的出現正好滿足了開發者對於代碼審查和任務委派的需求，並且在技術生態中提供了新的整合方式。

## 適合誰使用

**目標受眾**：需要在 Claude Code 環境中進行代碼審查的開發者，尤其是已經使用 Codex 的團隊。

> [!example] 使用場景
> - 後端工程師用它來對未提交的代碼變更進行審查，因為這樣可以快速獲得高質量的代碼評估，避免潛在的錯誤。
> - 開發團隊用它來挑戰和檢視設計選擇，因為這樣可以在發佈之前發現隱藏的風險，提升系統的可靠性。
> - 專案經理用它來委派修復任務給 Codex，因為這樣可以節省時間，讓團隊專注於其他重要的開發工作。

## 架構分析

這個插件的架構設計為一個 Node.js 模組，利用 Codex 的 CLI 和應用伺服器進行操作。它的設計目的是為了簡化開發者在 Claude Code 中使用 Codex 的流程，並且保持與 Codex 的配置和認證一致。資料流方面，使用者透過命令行指令與插件互動，插件則將請求轉發至 Codex，並返回結果。

這樣的設計使得開發者可以在不改變工作流程的情況下，輕鬆使用 Codex 的功能。選擇 Node.js 作為基礎語言的好處在於其非同步處理能力，這對於長時間運行的任務特別有利。然而，這也意味著對 Node.js 環境的依賴，可能會對某些開發者造成障礙。

整體來看，這個插件的架構設計旨在提供高效的代碼審查和任務委派功能，但在某些環境下可能會面臨兼容性問題。

## 技術深入分析

這個插件利用 Node.js 作為基礎，並結合 Codex 的 CLI 和應用伺服器來實現代碼審查和任務委派功能。它的核心技術機制依賴於 Codex 的強大語言模型，能夠進行代碼分析和建議。效能方面，這個插件能夠處理多個代碼文件的審查，但在多文件變更的情況下，可能需要較長的時間來完成。設計上選擇 Node.js 是因為其非同步處理的特性，這對於長時間運行的任務特別有利，但也意味著對 Node.js 環境的依賴。這可能會導致在某些開發環境中出現兼容性問題。技術風險方面，插件的穩定性和性能可能會受到 Codex 服務的影響，特別是在高負載時。整合方面，這個插件能夠與現有的 CI/CD 流程良好配合，但在某些情況下可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例指令。安裝過程相對順暢，但在 Windows 環境下可能會遇到一些問題。整體來說，對於熟悉 Node.js 的開發者，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 無縫整合到 Claude Code，提升了使用便利性。
> - 支持背景執行，適合處理大型代碼庫的審查。
> - 提供多種審查模式，滿足不同的需求。

> [!danger] 缺點
> - 僅限於 Node.js 環境，對於其他開發者可能不友好。
> - 在 Windows 環境下安裝可能會遇到問題。
> - 社群活躍度尚可，已知問題解決率低。

> [!warning] 注意事項
> - 僅支援 Node.js 18.18 以上版本。
> - 在 Windows 環境下可能會遇到安裝問題。
> - 需要 ChatGPT 訂閱或 OpenAI API 金鑰才能使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於並行同步，而 Codex 插件則專注於代碼審查和任務委派。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供更廣泛的 AI 助手功能，而 Codex 插件專注於代碼相關的任務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於並行同步，與 Codex 插件的代碼審查和任務委派功能不同。 | 如果你的專案需要高效的文件同步，而不是代碼審查，則應選擇它。 | low，因為這兩者的功能不重疊，遷移不會影響現有流程。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供更廣泛的 AI 助手功能，而 Codex 插件專注於代碼相關的任務。 | 如果你需要一個多功能的 AI 助手，而不僅僅是代碼審查，則應選擇 HolyClaude。 | medium，因為需要重新調整工作流程以適應不同的功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-plugin-cc** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於並行同步，與 Codex 插件的代碼審查和任務委派功能不同。 | HolyClaude 提供更廣泛的 AI 助手功能，而 Codex 插件專注於代碼相關的任務。 |
> | 遷移成本 | - | low，因為這兩者的功能不重疊，遷移不會影響現有流程。 | medium，因為需要重新調整工作流程以適應不同的功能。 |
> | 適用場景 | 主要場景 | 如果你的專案需要高效的文件同步，而不是代碼審查，則應選擇它。 | 如果你需要一個多功能的 AI 助手，而不僅僅是代碼審查，則應 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下安裝時可能會遇到 npm 和 codex 缺失的問題
  - 解法：確保使用 Git Bash 並檢查環境變數設置
- [MEDIUM] Codex 可能因為權限問題無法執行 shell 命令
  - 解法：檢查 bwrap 設定，確保有足夠的權限
- [MEDIUM] 多文件變更的審查可能需要較長時間
  - 解法：建議在背景中運行，並定期檢查狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行代碼審查 | 非常適合 | 因為插件能夠快速提供高質量的代碼評估。 |
| 大型專案的代碼管理 | 普通 | 雖然功能強大，但在多文件變更時可能會有延遲。 |
| Windows 環境下的開發者 | 不適合 | 安裝過程中可能會遇到兼容性問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的代碼審查功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個插件不需要高權限，僅使用本地的 Codex CLI，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
| Forks | 60 |
| Open Issues | 16 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-30 |
| Repo 大小 | 91 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/openai/codex-plugin-cc) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dkundel-openai](https://github.com/dkundel-openai) | 1 |
> | [@rgbkrk](https://github.com/rgbkrk) | 1 |

**最新版本**：v1.0.0 — Initial Release (2026-03-30)

## 社群與生態

**社群活躍度**：社群活躍度尚可，持續有問題反饋和更新。
**連結**：[文件](https://developers.openai.com/codex/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-30 ~ 2026-03-30）
> **活躍天數** 1 天 · **最新 commit** docs: update README with plugin reload and setup instructions (#2)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/openai/codex-plugin-cc/issues/4) | Review Plan `enhancement` | 3 | 0 |
> | [#3](https://github.com/openai/codex-plugin-cc/issues/3) | Review fails due to unknown sandboxing variant | 2 | 6 |
> | [#18](https://github.com/openai/codex-plugin-cc/issues/18) | The Codex plugin review erros because it can't execute shell | 0 | 0 |
> | [#17](https://github.com/openai/codex-plugin-cc/issues/17) | `/codex:setup` reports npm and codex as "Missing" / "Not ins | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex plugin for Claude Code
> 
> Use Codex from inside Claude Code for code reviews or to delegate tasks to Codex.
> 
> This plugin is for Claude Code users who want an easy way to start using Codex from the workflow
> they already have.
> 
> ## What You Get
> 
> - `/codex:review` for a normal read-only Codex review
> - `/codex:adversarial-review` for a steerable challenge review
> - `/codex:rescue`, `/codex:status`, `/codex:result`, and `/codex:cancel` to delegate work and manage background jobs
> 
> ## Requirements
> 
> - **ChatGPT subscription (incl. Free) or OpenAI API key.**
>   - Usage will contribute to your Codex usage limits. [Learn more](https://developers.openai.com/codex/pricing).
> - **Node.js 18.18 or later**
> 
> ## Install
> 
> Add the marketplace in Claude Code:
> 
> ```bash
> /plugin marketplace add openai/codex-plugin-cc
> ```
> 
> Install the plugin:
> 
> ```bash
> /plugin install codex@openai-codex
> ```
> 
> Reload plugins:
> 
> ```bash
> /reload-plugins
> ```
> 
> Then run:
> 
> ```bash
> /codex:setup
> ```
> 
> `/codex:setup` will tell you whether Codex is ready. If Codex is missing and npm is available, it can offer to install Codex for you.
> 
> If you prefer to install Codex yourself, use:
> 
> ```bash
> npm install -g @openai/codex
> ```
> 
> If Codex is installed but not logged in yet, run:
> 
> ```bash
> !codex login
> ```
> 
> After install, you should see:
> 
> - the slash commands listed below
> - the `codex:codex-rescue` subagent in `/agents`
> 
> One simple first run is:
> 
> ```bash
> /codex:review --background
> /codex:status
> /codex:result
> ```
> 
> ## Usage
> 
> ### `/codex:review`
> 
> Runs a normal Codex review on your current work. It gives you the same quality of code review as running `/review` inside Codex directly.
> 
> > [!NOTE]
> > Code review especially for multi-file changes might take a while. It's generally recommended to run it in the background.
> 
> Use it when you want:
> 
> - a review of your current uncommitted changes
> - a review of your branch compared to a base branch like `main`
> 
> Use `--base ` for branch review. It also supports `--wait` and `--background`. It is not steerable and does not take custom focus text. Use [`/codex:adversarial-review`](#codexadversarial-review) when you want to challenge a specific decision or risk area.
> 
> Examples:
> 
> ```bash
> /codex:review
> /codex:review --base main
> /codex:review --background
> ```
> 
> This command is read-only and will not perform any changes. When run in the background you can use [`/codex:status`](#codexstatus) to check on the progress and [`/codex:cancel`](#codexcancel) to cancel the ongoing task.
> 
> ### `/codex:adversarial-review`
> 
> Runs a **steerable** review that questions the chosen implementation and design.
> 
> It can be used to pressure-test assumptions, tradeoffs, failure modes, and whether a different approach would have been safer or simpler.
> 
> It uses the same review target selection as `/codex:review`, including `--base ` for branch review.
> It also supports `--wait` and `--background`. Unlike `/codex:review`, it can take extra focus text after the flags.
> 
> Use it when you want:
> 
> - a review before shipping that challenges the direction, not just the code details
> - review focused on design choices, tradeoffs, hidden assumptions, and alternative approaches
> - pressure-testing around specific risk areas like auth, data loss, rollback, race conditions, or reliability
> 
> Examples:
> 
> ```bash
> /codex:adversarial-review
> /codex:adversarial-review --base main challenge whether this was the right caching and retry design
> /codex:adversarial-review --background look for race conditions and question the chosen approach
> ```
> 
> This command is read-only. It does not fix code.
> 
> ### `/codex:rescue`
> 
> Hands a task to Codex through the `codex:codex-rescue` subagent.
> 
> Use it when you want Codex to:
> 
> - investigate a bug
> - try a fix
> - continue a previous Codex task
> - take a faster or cheaper pass with a smaller model
> 
> > [!NOTE]
> > Depending on the task and the model you choose these tasks might take a long time and it's generally recommended to force the task to be in the background or move the agent to the background.
> 
> It supports `--background`, `--wait`, `--resume`, and `--fresh`. If you omit `--resume` and `--fresh`, the plugin can offer to continue the latest rescue thread for this repo.
> 
> Examples:
> 
> ```bash
> /codex:rescue investigate why the tests started failing
> /codex:rescue fix the failing test with the smallest safe patch
> /codex:rescue --resume apply the top fix from the last run
> /codex:rescue --model gpt-5.4-mini --effort medium investigate the flaky integration test
> /codex:rescue --model spark fix the issue quickly
> /codex:rescue --background investigate the regression
> ```
> 
> You can also just ask for a task to be delegated to Codex:
> 
> ```text
> Ask Codex to redesign the database connection to be more resilient.
> ```
> 
> **Notes:**
> 
> - if you do not pass `--model` or `--effort`, Codex chooses its own defaults.
> - if you say `spark`, the plugin maps that to `gpt-5.3-codex-spark`
> - follow-up rescue requests can continue the latest Codex task in the repo
> 
> ### `/codex:status`
> 
> Shows running and recent Codex jobs for the current repository.
> 
> Examples:
> 
> ```bash
> /codex:status
> /codex:status task-abc123
> ```
> 
> Use it to:
> 
> - check progress on background work
> - see the latest completed job
> - confirm whether a task is still running
> 
> ### `/codex:result`
> 
> Shows the final stored Codex output for a finished job.
> When available, it also includes the Codex session ID so you can reopen that run directly in Codex with `codex resume `.
> 
> Examples:
> 
> ```bash
> /codex:result
> /codex:result task-abc123
> ```
> 
> ### `/codex:cancel`
> 
> Cancels an active background Codex job.
> 
> Examples:
> 
> ```bash
> /codex:cancel
> /codex:cancel task-abc123
> ```
> 
> ### `/codex:setup`
> 
> Checks whether Codex is installed and authenticated.
> If Codex is missing and npm is available, it can offer to install Codex for you.
> 
> You can also use `/codex:setup` to manage the optional review gate.
> 
> #### Enabling review gate
> 
> ```bash
> /codex:setup --enable-review-gate
> /codex:setup --disable-review-gate
> ```
> 
> When the review gate is enabled, the plugin uses a `Stop` hook to run a targeted Codex review based on Claude's response. If that review finds issues, the stop is blocked so Claude can address them first.
> 
> > [!WARNING]
> > The review gate can create a long-running Claude/Codex loop and may drain usage limits quickly. Only enable it when you plan to actively monitor the session.
> 
> ## Typical Flows
> 
> ### Review Before Shipping
> 
> ```bash
> /codex:review
> ```
> 
> ### Hand A Problem To Codex
> 
> ```bash
> /codex:rescue investigate why the build is failing in CI
> ```
> 
> ### Start Something Long-Running
> 
> ```bash
> /codex:adversarial-review --background
> /codex:rescue --background investigate the flaky test
> ```
> 
> Then check in with:
> 
> ```bash
> /codex:status
> /codex:result
> ```
> 
> ## Codex Integration
> 
> The Codex plugin wraps the [Codex app server](https://developers.openai.com/codex/app-server). It uses the global `codex` binary installed in your environment and [applies the same configuration](https://developers.openai.com/codex/config-basic).
> 
> ### Common Configurations
> 
> If you want to change the default reasoning effort or the default model that gets used by the plugin, you can define that inside your user-level or project-level `config.toml`. For example to always use `gpt-5.4-mini` on `high` for a specific project you can add the following to a `.codex/config.toml` file at the root of the directory you started Claude in:
> 
> ```toml
> model = "gpt-5.4-mini"
> model_reasoning_effort = "xhigh"
> ```
> 
> Your configuration will be picked up based on:
> 
> - user-level config in `~/.codex/config.toml`
> - project-level overrides in `.codex/config.toml`
> - project-level overrides only load when the [project is trusted](https://developers.openai.com/codex/config-advanced#project-config-files-codexconfigtoml)
> 
> Check out the Codex docs for more [configuration options](https://developers.openai.com/codex/config-reference).
> 
> ### Moving The Work Over To Codex
> 
> Delegated tasks and any [stop gate](#what-does-the-review-gate-do) run can also be directly resumed inside Codex by ru

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[程式碼生成]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[duoan--TorchCode|duoan/TorchCode]] · [[tanweai--pua|tanweai/pua]]

[GitHub](https://github.com/openai/codex-plugin-cc)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼審查）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼審查" AND file.name != "openai--codex-plugin-cc"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "openai--codex-plugin-cc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "openai--codex-plugin-cc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "openai--codex-plugin-cc"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "openai--codex-plugin-cc" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "openai--codex-plugin-cc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "openai" AND file.name != "openai--codex-plugin-cc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
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
> const me = dv.page("Repos/openai--codex-plugin-cc");
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

> **2026-03-31** — 首次收錄
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

- [[2026-04-05|2026-04-05]] — 再次上榜，11.6k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，11.3k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，10.7k stars
- [[2026-04-02|2026-04-02]] — 再次上榜，8.6k stars
- [[2026-04-01|2026-04-01]] — 再次上榜，5.8k stars
- [[2026-03-31|2026-03-31]] — 首次收錄，1.4k stars
