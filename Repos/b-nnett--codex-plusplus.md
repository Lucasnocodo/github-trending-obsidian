---
repo: b-nnett/codex-plusplus
url: https://github.com/b-nnett/codex-plusplus
owner: b-nnett
owner_type: User
language: TypeScript
license: MIT
description: "Codex++ tweak system for the Codex desktop app"
homepage: ""
stars: 836
stars_per_day: 209
forks: 40
open_issues: 10
created: 2026-04-28
pushed_at: 2026-05-02
first_seen: 2026-05-02
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.4"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-02
use_case: "為 Codex 桌面應用提供自訂功能和修復的調整系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-06"
contributor_count: 1
engagement: "low"
issue_close_rate: 50
repo_size_kb: 898
readme_length: 5899
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-02"
star_history: "2026-05-02:752,2026-05-02:756,2026-05-03:836"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "codex-plusplus"
  - "b-nnett/codex-plusplus"
  - "為 Codex 桌面應用提供自訂功能和修復的調整系統。"
---

# codex-plusplus

**756** stars · **252** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/b-nnett--codex-plusplus");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.4`

> [!summary] 一句話摘要
> 為 Codex 桌面應用提供自訂功能和修復的調整系統。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (252 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望為 Codex 桌面應用添加自定義功能的開發者和設計師。
> **一句話重點** Codex++ 的設計讓開發者能夠在不重建應用的情況下，靈活地添加和管理自定義功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--codex-plusplus");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "b-nnett--codex-plusplus" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到靈活的自定義功能，值得一試。

> [!abstract] 核心創新
> Codex++ 允許用戶在不重建應用的情況下，輕鬆注入自定義功能和修復。

## 專案簡介

Codex++ 是一個為 Codex 桌面應用提供調整和擴展功能的系統。它通過在應用啟動時注入一個小型加載器，來實現對 Codex.app 的修補，並從用戶目錄加載運行時和自定義調整。這種設計的好處是，所有調整都位於應用包之外，便於用戶快速迭代和更新。安裝過程中，Codex++ 會自動檢測並備份現有的 Codex.app，然後進行必要的修補，這樣用戶在更新 Codex 時不會丟失調整。用戶可以通過 `codexplusplus install` 指令輕鬆安裝，並使用 `codexplusplus update` 來保持調整的最新狀態。

這個系統的核心在於其靈活性和可擴展性，讓開發者能夠輕鬆編寫和管理調整，並在應用內部進行配置。與其他工具相比，Codex++ 的獨特之處在於它不需要重建應用，並且所有調整都能夠即時生效。這使得它特別適合需要快速測試和迭代的開發者。雖然目前仍在 beta 階段，可能會遇到一些錯誤，但其社群活躍度和持續更新的承諾使其成為一個值得關注的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `PowerShell` · `Shell` · `Ruby`

## 重點功能

- 自動檢測和修補 — 安裝過程中自動檢測 Codex.app 並備份。
- 靈活的調整管理 — 用戶可以在應用內部啟用、禁用和配置調整。
- 熱重載功能 — 調整可以即時生效，無需重啟應用。
- 簡單的命令行工具 — 使用 `codexplusplus` 指令來管理安裝和更新。
- 支持多平台 — 在 macOS 和 Windows 上均可運行。

## 快速開始

1. 使用 Bun 安裝 Codex++
```bash
bun install -g github:b-nnett/codex-plusplus
```
2. 執行安裝指令
```bash
codexplusplus install
```
3. 檢查狀態
```bash
codexplusplus status
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Codex 桌面應用。",
  "指令": "codexplusplus install",
  "預期輸出": "安裝 Codex++ 並修補 Codex.app。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 756 stars（252/天），forks 33（4.4%），顯示出穩定的增長。這個專案的作者 b-nnett 之前在開發者社群中活躍，針對 Codex 的需求提供了創新的解決方案。Codex++ 解決了用戶在更新 Codex 應用時，無法保持自定義調整的問題，這在之前的解決方案中並不常見。社群的反饋和需求促進了這個專案的快速發展，並且其設計理念符合當前開發者對靈活性和可擴展性的需求。

## 適合誰使用

**目標受眾**：希望為 Codex 桌面應用添加自定義功能的開發者和設計師。

> [!example] 使用場景
> - 開發者用它來為 Codex 添加自定義功能，因為這樣可以快速迭代和測試新特性，而不需要重建整個應用。
> - UI 設計師用它來修復 Codex 的 UI 錯誤，因為它允許即時修改和更新，提升了設計效率。
> - 測試工程師用它來測試不同的調整，因為它的熱重載功能讓他們能夠快速查看變更效果，節省了大量時間。

## 架構分析

Codex++ 採用模組化設計，將加載器和運行時分開，這樣可以在不影響主應用的情況下進行調整。加載器在 Codex.app 啟動時運行，並從用戶目錄加載運行時，這樣可以實現熱重載。這種設計的好處是用戶可以快速迭代調整，而不需要重新安裝應用。代價是需要用戶手動管理調整的更新，這可能會造成一定的維護負擔。整體架構的擴展性良好，但在處理大型調整時可能會遇到性能瓶頸，特別是在多個調整同時運行的情況下。

## 技術深入分析

Codex++ 的核心機制是通過加載器和運行時的分離設計，實現了對 Codex.app 的靈活調整。加載器在應用啟動時運行，並從用戶目錄加載運行時，這樣可以實現熱重載和即時更新。這種設計使得用戶能夠快速迭代調整，而不需要重新安裝應用。性能方面，Codex++ 能夠處理多個調整，但在高負載情況下可能會出現延遲。

選擇 TypeScript 和 JavaScript 作為開發語言，能夠提高開發效率和可維護性，但也增加了學習曲線。依賴樹相對簡單，主要依賴於一些常見的庫，降低了整體複雜度。技術風險方面，Codex++ 依賴於 Codex.app 的內部結構，若未來版本改變，可能會導致不兼容。整合方面，與現有的開發工具鏈相容性良好，特別是在 CLI 工具的使用上，能夠輕鬆融入開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但對於某些系統配置可能會遇到問題。文件中有 Discord 社群的連結，方便用戶尋求幫助。

## 優缺點分析

> [!success] 優點
> - 靈活性高，允許用戶快速添加和管理調整。
> - 支持熱重載，提升開發效率。
> - 多平台支持，適用於不同操作系統。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性。
> - 安裝過程對某些系統配置不友好。
> - 不支持調整的自動更新，需手動管理。

> [!warning] 注意事項
> - 仍在 beta 階段，可能存在未解決的錯誤。
> - 對於某些系統配置，安裝過程可能會失敗。
> - 不支持自動更新調整，需手動檢查更新。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自定義功能，但主要針對不同的應用場景，可能不支持 Codex 的特定功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 UI 調整，但不具備 Codex++ 的熱重載功能，更新過程較為繁瑣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定應用的自定義，但不支持 Codex 的擴展性。 | 如果需要針對特定應用進行深度自定義，而不需要 Codex++ 的靈活性。 | medium，因為需要重新學習其特定的調整方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 UI 調整功能，但不具備熱重載，更新過程較為繁瑣。 | 如果需要穩定的 UI 調整，而不需要 Codex++ 的即時更新功能。 | low，因為其設計理念相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-plusplus** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定應用的自定義，但不支持 Codex 的擴展性。 | 提供 UI 調整功能，但不具備熱重載，更新過程較為繁瑣。 |
> | 遷移成本 | - | medium，因為需要重新學習其特定的調整方法。 | low，因為其設計理念相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果需要針對特定應用進行深度自定義，而不需要 Codex++ | 如果需要穩定的 UI 調整，而不需要 Codex++ 的即時 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行實驗和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上安裝失敗，特別是使用 sudo 的情況下。
  - 解法：檢查安裝權限或使用非 sudo 安裝。
- [MEDIUM] 更新 Codex 時可能會導致調整失效。
  - 解法：使用 `codexplusplus update-codex` 恢復官方簽名的應用。
- [MEDIUM] 某些調整可能不兼容最新版本的 Codex。
  - 解法：手動檢查調整的 GitHub 頁面，確保版本兼容。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要為 Codex 添加自定義功能 | 非常適合 | Codex++ 提供靈活的調整管理，適合快速迭代。 |
| 大型企業需要穩定的應用環境 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |
| 獨立開發者希望測試新功能 | 非常適合 | 熱重載功能讓開發者能夠快速查看變更效果。 |
| 需要長期維護的生產環境 | 不適合 | 不建議在生產環境中使用，因為可能會遇到不兼容問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到靈活的自定義功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要修改 Codex.app 的簽名，可能會影響安全性；依賴於用戶的管理和維護，需謹慎使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
| Forks | 33 |
| Open Issues | 7 |
| Issue 解決率 | 50% (7 closed) |
| 最後推送 | 2026-05-02 |
| 建立日期 | 2026-04-28 |
| Repo 大小 | 898 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/b-nnett/codex-plusplus) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@electron/asar` `kleur` `plist` `prompts` `sade` `tar` `@types/node` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 93
>     "JavaScript" : 4
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@b-nnett](https://github.com/b-nnett) | 50 |

**最新版本**：v0.1.4 — Codex++ 0.1.4 (2026-05-02)

> [!info]- Release Notes
> # Codex++ 0.1.4
> 
> Codex++ 0.1.4 is a reliability release focused on clean installs, Windows Store support, and safer automatic repair after Codex updates.
> 
> ## Highlights
> 
> - Added Microsoft Store / WindowsApps Codex detection and patch support.
> - Fixed Windows install dependency execution by using `npm.cmd`.
> - Fixed Windows Store install repair by mirroring locked app resources into a writable Codex++ managed location.
> - Fixed Windows renderer tweak settings and Windows shortcut label matching for Bennett UI Improvements.
> - Improved the auto-repair watcher so Codex updates are retried for longer and checked every 5 minutes.
> - Kept Codex++ release checks throttled to hourly while allowing repair checks to run more often.
> - Made Codex.app settle detection less brittle by checking only patch-critical inputs.
> - Added dedicated macOS App Management permission alerts with an Open Settings action.
> - Fixed Homebrew command wrappers, self-update executable permissions, and Homebrew reinstall conflicts.
> - Added Bun global install support with a first-run bootstrap command.
> - Made `codexplusplus` with no arguments show help instead of failing.
> 
> ## Install And Update
> 
> Homebrew:
> 
> ```sh
> brew install b-nnett/codex-plusplus/codexplusplus
> codexplusplus install
> ```
> 
> Bun:
> 
> ```sh

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/b-nnett/codex-plusplus#readme) · [Discord](https://discord.gg/6bY6gGX36H)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-02）
> **活躍天數** 2 天 · **最新 commit** Revise README for project name and status update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/b-nnett/codex-plusplus/issues/19) | Codex++ fails to be installed on Macbook with sudo | 0 | 0 |
> | [#17](https://github.com/b-nnett/codex-plusplus/issues/17) | Codex++ failed to patch Codex after update | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex++
> 
> [Join the Discord Community!](https://discord.gg/6bY6gGX36H)
> 
> A tweak system for the [Codex](https://chatgpt.com/codex) desktop app. Inject custom features, fix UI bugs, and add a tweak manager — without rebuilding the app.
> 
> > **Status:** ~~alpha~~ Beta! Confirmed working on both macOS & Windows. Expect bugs, especially around auto-updating and new Codex updates. PRs welcome.
> 
> ## What it does
> 
> `codex-plusplus` patches your local Codex.app installation so a small **loader** runs on startup. The loader pulls a **runtime** from your user directory, which discovers and loads **tweaks** (small ESM modules with a manifest + `start/stop` lifecycle). The runtime injects a "Tweaks" tab into Codex's settings UI so you can enable, disable, and configure tweaks in-app.
> 
> Everything beyond the one-time install patch lives **outside** the app bundle, so iterating on tweaks is just save-and-reload.
> 
> ## Install
> 
> Agentic Install (via Codex):
> 
> ```sh
> Inspect & install this for me: https://github.com/b-nnett/codex-plusplus, tell me where you install it and send me the local path for me to add new tweaks.
> ```
> 
> Bun:
> 
> ```sh
> bun install -g github:b-nnett/codex-plusplus
> codexplusplus install
> ```
> 
> Source bootstrap (macOS / Linux):
> 
> ```sh
> curl -fsSL https://raw.githubusercontent.com/b-nnett/codex-plusplus/main/install.sh | bash
> ```
> 
> Windows PowerShell:
> 
> ```powershell
> irm https://raw.githubusercontent.com/b-nnett/codex-plusplus/main/install.ps1 | iex
> ```
> 
> That's it. The installer:
> 
> 1. Locates your Codex.app (`/Applications/Codex.app`, `%LOCALAPPDATA%/codex/...`, etc.).
> 2. Backs it up to `~/.codex-plusplus/backup/`.
> 3. Patches `app.asar` to require our loader.
> 4. Recomputes the asar header SHA-256 and writes it into `Info.plist` (`ElectronAsarIntegrity`).
> 5. Flips `EnableEmbeddedAsarIntegrityValidation` in the Electron Framework binary as a belt-and-suspenders.
> 6. Re-signs the app ad-hoc on macOS (`codesign --force --deep --sign -`).
> 7. Installs a launch agent / login item that detects app updates and re-runs `repair --quiet`.
> 8. Installs the default tweak set from their latest GitHub releases unless `--no-default-tweaks` is passed.
> 
> The watcher also runs hourly through the GitHub-installed local CLI. If a newer Codex++ GitHub release is available, it downloads the release, rebuilds the local CLI/runtime, and runs `repair` so the runtime in your user directory is refreshed without replacing tweak code. You can turn this off from Settings → Codex Plus Plus → Config.
> 
> After source-bootstrap install, the installer adds `codexplusplus` and `codex-plusplus`
> to a writable PATH directory when possible. Use `codexplusplus` for day-to-day commands:
> 
> ```sh
> codexplusplus status
> codexplusplus repair
> codexplusplus update
> ```
> 
> `codexplusplus update` downloads the latest Codex++ GitHub release, rebuilds it, and runs
> `repair`. If the command is not on PATH yet, rerun the source bootstrap once.
> Use `codexplusplus update --ref main` only when you intentionally want the current development branch instead of the latest release.
> 
> To revert:
> 
> ```sh
> codexplusplus uninstall
> ```
> 
> Other commands: `status`, `doctor`, `repair`, `tweaks list`, `tweaks open` (opens user tweaks dir).
> 
> ### Updating Codex on macOS
> 
> Codex++ modifies and ad-hoc signs `Codex.app`, so Sparkle cannot safely install an
> official Codex update while the app is patched. Use:
> 
> ```sh
> codexplusplus update-codex
> ```
> 
> This restores a Developer ID signed Codex.app for the official updater. After
> Codex updates and restarts, the watcher re-applies Codex++ to the new app.
> 
> Default tweaks currently installed on first run:
> 
> - `co.bennett.custom-keyboard-shortcuts` from `b-nnett/codex-plusplus-keyboard-shortcuts`
> - `co.bennett.ui-improvements` from `b-nnett/codex-plusplus-bennett-ui`
> 
> ## Writing a tweak
> 
> A tweak is a folder under `/tweaks/` with:
> 
> ```
> my-tweak/
> ├── manifest.json
> └── index.js            # or .mjs / .ts (transpiled by runtime)
> ```
> 
> ```json
> {
>   "id": "com.you.my-tweak",
>   "name": "My Tweak",
>   "version": "0.1.0",
>   "githubRepo": "you/my-tweak",
>   "author": "you",
>   "description": "Adds a button.",
>   "minRuntime": "0.1.0"
> }
> ```
> 
> ```ts
> import type { Tweak } from "@codex-plusplus/sdk";
> 
> export default {
>   start(api) {
>     api.settings.register({
>       id: "my-tweak",
>       title: "My Tweak",
>       render: (root) => {
>         root.innerHTML = `hi`;
>       },
>     });
>     api.log.info("started");
>   },
>   stop() {},
> } satisfies Tweak;
> ```
> 
> See [`docs/WRITING-TWEAKS.md`](./docs/WRITING-TWEAKS.md) for the full API.
> 
> ## Tweak updates
> 
> Every tweak manifest must include `githubRepo` in `owner/repo` form. Codex++ checks GitHub Releases for each installed tweak at most once per day and shows **Update Available** in Settings → Tweaks when a newer semver release exists.
> 
> Codex++ does **not** auto-update tweaks. The manager links to the GitHub release so users can review the diff, release notes, and repository before manually replacing local tweak files.
> 
> See [`SECURITY.md`](./SECURITY.md) for the security model and reporting policy.
> 
> ## How it works (TL;DR)
> 
> | Thing | Location |
> |---|---|
> | Loader stub | `Codex.app/Contents/Resources/app.asar` (entry replaced with `loader.cjs`) |
> | Runtime | `/runtime/` (auto-installed, hot-reloadable) |
> | Tweaks | `/tweaks/` |
> | Config | `/config.json` |
> | Backup | `/backup/` |
> 
> `` per-OS:
> 
> - macOS: `~/Library/Application Support/codex-plusplus/`
> - Linux: `$XDG_DATA_HOME/codex-plusplus/` (default `~/.local/share/codex-plusplus/`)
> - Windows: `%APPDATA%/codex-plusplus/`
> 
> See [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) for details.
> 
> ## Legal
> 
> This is an unofficial project. Not affiliated with OpenAI. Modifying Codex.app violates its code signature; on macOS you may need to allow the re-signed app on first launch. Auto-updates from Sparkle overwrite the patch, so `codex-plusplus` installs a watcher that re-applies it.
> 
> Use at your own risk.
> 
> MIT.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[開發工具]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/b-nnett/codex-plusplus)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "b-nnett--codex-plusplus"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "b-nnett--codex-plusplus"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "b-nnett--codex-plusplus" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "b-nnett--codex-plusplus"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","開發工具"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "b-nnett--codex-plusplus" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "b-nnett--codex-plusplus" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "b-nnett" AND file.name != "b-nnett--codex-plusplus"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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
> const me = dv.page("Repos/b-nnett--codex-plusplus");
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

> **2026-05-02** — 首次收錄
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

- [[2026-05-03|2026-05-03]] — 再次上榜，836 stars
- [[2026-05-02|2026-05-02]] — 首次收錄，752 stars
