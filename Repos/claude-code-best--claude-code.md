---
repo: claude-code-best/claude-code
url: https://github.com/claude-code-best/claude-code
owner: claude-code-best
owner_type: User
language: TypeScript
license: N/A
description: "原汁原昧 Claude Code 可运行,可构建, 可调试版; Typescript 类型全修复; 企业级可靠性; 安全无毒, lock 文件保真, 可直接 bun i; bun run dev 启动"
homepage: "https://ccb.agent-aura.top/"
stars: 13908
stars_per_day: 2782
forks: 14072
open_issues: 15
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供一個可運行、可構建的 Claude Code CLI 工具，適合開發者進行 AI 編碼助手的開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-09"
contributor_count: 5
engagement: "high"
issue_close_rate: 83
repo_size_kb: 60312
readme_length: 3828
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:7790,2026-04-02:7914,2026-04-03:10736,2026-04-03:10850,2026-04-04:13023,2026-04-04:13026,2026-04-05:13577,2026-04-05:13580,2026-04-06:13897,2026-04-06:13908"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code"
  - "claude-code-best/claude-code"
  - "提供一個可運行、可構建的 Claude Code CLI 工具，適合開發者進行 AI 編碼助手的開發。"
---

# claude-code

**13.9k** stars · **2.8k** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/claude-code-best--claude-code");
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
> 提供一個可運行、可構建的 Claude Code CLI 工具，適合開發者進行 AI 編碼助手的開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.8k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在本地環境中快速構建和測試 AI 編碼助手的開發者，尤其是在企業環境中。
> **一句話重點** CCB 不僅是一個 CLI 工具，更是一個開放的 AI 編碼助手平台，適合各種開發需求。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/claude-code-best--claude-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "claude-code-best--claude-code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到一個靈活的 AI 編碼助手，值得一試。

> [!abstract] 核心創新
> 提供了一個開源的、企業級的 AI 編碼助手 CLI 工具，具備多種擴展功能和安全性設計。

## 專案簡介

Claude Code Best (CCB) 是一個反向工程的 CLI 工具，旨在重現 Anthropic 的 Claude Code 功能，讓開發者能在終端中使用 AI 編碼助手。使用者可以透過 `ccb` 指令直接啟動工具，並在 REPL 環境中進行互動。這個工具的核心賣點在於其企業級的可靠性和安全性，並且支持多種功能如自定義登入和網頁搜索。技術上，CCB 使用了 Bun 作為執行環境，並採用代碼分割技術來構建，這使得最終產物能夠在 Node.js 和 Bun 環境中運行。與其他 CLI 工具相比，CCB 提供了更好的安全性和可擴展性，並且支持與第三方 API 的兼容性，這在許多開源替代品中並不常見。

實際使用中，開發者可以輕鬆配置 API 鍵和模型 ID，並透過 `/login` 指令進行設置。這個工具適合需要在本地環境中快速構建和測試 AI 編碼助手的開發者，尤其是在企業環境中。當前版本仍在活躍開發中，社群的參與度高，問題解決率達到 83%。未來可能會進一步模塊化和擴展功能，對於希望在 AI 編碼助手領域探索的團隊來說，這是一個值得關注的選擇。

**技術棧**：`Bun >= 1.3.11` · `TypeScript` · `Node.js`

## 重點功能

- 即時 REPL 環境 — 使用 `ccb` 指令直接啟動，支持互動式編碼。
- 企業級安全性 — 支持自定義登入和 API 鍵配置，確保數據安全。
- 代碼分割構建 — 使用 `bun run build` 進行多文件打包，產物可在 Node.js 和 Bun 中運行。
- 支持多種功能 — 包括網頁搜索、計算機使用模式等，擴展性強。
- 活躍的社群支持 — 問題解決率高達 83%，社群互動頻繁。

## 快速開始

1. 全局安裝 CCB
```bash
bun i -g claude-code-best
```
2. 信任 CCB 安裝
```bash
bun pm -g trust claude-code-best
```
3. 啟動 CCB
```bash
ccb
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Bun 並確保版本 >= 1.3.11",
  "指令": "bun run dev",
  "預期輸出": "顯示版本號 888，表示運行成功。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 13908 stars（2782/天），forks 14072（101.2%），顯示出極高的使用興趣。這個專案由一群活躍的開發者維護，他們在開源社群中有著良好的聲譽。CCB 解決了開發者在使用官方 Claude Code 工具時遇到的限制，提供了一個開放且可擴展的替代方案。近期的推廣活動和社群互動也促進了其快速增長。這個工具的出現正好滿足了對於安全、可擴展的 AI 編碼助手的需求，特別是在企業環境中。

## 適合誰使用

**目標受眾**：需要在本地環境中快速構建和測試 AI 編碼助手的開發者，尤其是在企業環境中。

> [!example] 使用場景
> - 後端工程師用它來快速構建 AI 編碼助手，因為它提供了即時的 REPL 環境和簡單的 API 配置。
> - DevOps 工程師用它來集成 AI 功能到現有的 CI/CD pipeline，因為它支持與多種 API 的兼容性和安全性。
> - 開發者用它來測試和調試 AI 代碼，因為其企業級的可靠性和安全性讓測試過程更加順利。

## 架構分析

CCB 採用模組化的架構設計，主要由 Bun 作為執行環境，並使用代碼分割技術來構建。這樣的設計使得最終產物能夠在多種環境中運行，並且便於擴展和維護。資料流方面，使用者通過 REPL 環境與工具互動，後端則通過 API 進行數據處理。選擇 Bun 而非其他環境的原因在於其高效能和快速啟動時間，但這也意味著對於 Bun 的依賴性較高，可能在未來的版本中造成兼容性問題。整體而言，這種設計使得 CCB 在功能擴展上具備良好的彈性，但也需要持續關注 Bun 的更新和變化。

## 技術深入分析

CCB 的核心技術機制是基於 Bun 的高效能執行環境，並利用 TypeScript 進行開發，這使得代碼結構清晰且易於維護。其使用的代碼分割技術能夠有效降低冷啟動時間，並提升整體性能。CCB 能夠處理的資料量相對較大，因為其設計上考慮了多個 chunk 文件的管理，這在大型專案中尤為重要。選擇 Bun 而非 Node.js 的原因在於其更快的啟動速度和更低的資源消耗，但這也意味著對 Bun 的依賴性增加，可能會影響未來的擴展性。技術風險方面，CCB 可能會面臨由於 Bun 更新導致的兼容性問題，這需要開發者持續關注。整合方面，CCB 能夠輕鬆與現有的 CI/CD pipeline 結合，並且支持多種 IDE 的插件，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟，對於新手來說相對容易上手。安裝過程順暢，無明顯的坑。提供了良好的快速開始指南，並且有多語言支持，對於不同背景的開發者友好。

## 優缺點分析

> [!success] 優點
> - 企業級安全性，支持 API 鍵和自定義登入配置。
> - 活躍的社群支持，問題解決率高。
> - 多功能擴展，支持網頁搜索和計算機使用模式等。
> - 使用簡單，安裝和啟動過程流暢。

> [!danger] 缺點
> - 需要最新版本的 Bun，對於某些使用者可能造成困擾。
> - 對於 GitHub 網路較差的地區，安裝過程可能不順利。
> - 仍在活躍開發中，未來版本可能會有不穩定的 API 變更。

> [!warning] 注意事項
> - 需要最新版本的 Bun，否則可能會遇到各種錯誤。
> - 對於 GitHub 網路較差的地區，需設置環境變量以確保正常運行。
> - 目前仍在活躍開發中，未來版本可能會有不穩定的 API 變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的 CLI 工具，但主要聚焦於數據同步，而 CCB 更專注於 AI 編碼助手的功能。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供的功能較為簡單，CCB 則擁有更全面的 API 兼容性和安全性設計。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 側重於數據隱私，而 CCB 則是針對 AI 編碼助手的開發，功能上有明顯差異。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Claude Code | Claude Code 是官方版本，提供了完整的功能，但缺乏開源的靈活性和擴展性。 | 如果需要官方支持和完整功能，則選擇 Claude Code 更合適。 | medium，因為需要重新配置和適應官方 API。 |
| OpenAI Codex | OpenAI Codex 提供了強大的 AI 編碼能力，但需要付費使用，且不支持本地運行。 | 如果需要強大的 AI 編碼能力且不介意付費，則選擇 OpenAI Codex 更合適。 | high，因為需要重構整個開發流程以適應 OpenAI 的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code** | **Claude Code** | **OpenAI Codex** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude Code 是官方版本，提供了完整的功能，但缺乏開源的靈活性和擴展性。 | OpenAI Codex 提供了強大的 AI 編碼能力，但需要付費使用，且不支持本地運行。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應官方 API。 | high，因為需要重構整個開發流程以適應 OpenAI 的 API。 |
> | 適用場景 | 主要場景 | 如果需要官方支持和完整功能，則選擇 Claude Code  | 如果需要強大的 AI 編碼能力且不介意付費，則選擇 Open |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次運行後需要手動配置 API 鍵，否則無法正常使用
  - 解法：在 REPL 中使用 `/login` 指令進行配置
- [MEDIUM] 在某些環境下安裝過程可能會失敗
  - 解法：確保使用最新版本的 Bun，並檢查網路連接
- [MEDIUM] 未來版本可能會有不穩定的 API 變更
  - 解法：定期檢查更新和社群討論以獲取最新資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 輕量級且易於配置，適合小型團隊快速開發。 |
| 需要高安全性的企業環境 | 適合 | 提供企業級的安全性和 API 兼容性。 |
| 大型企業的核心系統 | 不適合 | 仍在開發中，可能存在不穩定性和風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到一個靈活的 AI 編碼助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> CCB 本身不需要高權限，但需要配置 API 鍵，需注意安全性。依賴的庫和模組需定期檢查更新以避免潛在的安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/claude-code-best--claude-code");
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
> const me = dv.page("Repos/claude-code-best--claude-code");
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
| Forks | 14.1k |
| Open Issues | 15 |
| Issue 解決率 | 83% (74 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://ccb.agent-aura.top/) |
| Repo 大小 | 58.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/claude-code-best/claude-code) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude-code-best](https://github.com/claude-code-best) | 160 |
> | [@smallflyingpig](https://github.com/smallflyingpig) | 3 |
> | [@amDosion](https://github.com/amDosion) | 2 |
> | [@JiayuuWang](https://github.com/JiayuuWang) | 2 |
> | [@sobird](https://github.com/sobird) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，經常有新問題和功能討論。
**連結**：[文件](https://ccb.agent-aura.top/) · [Discord](https://discord.gg/qZU6zS7Q)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-05）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #140 from amDosion/feat/enable-safe-feature-flags

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/claude-code-best/claude-code/issues/13) | [留影专用]: 大家想留影就到这里来吧 | 26 | 123 |
> | [#133](https://github.com/claude-code-best/claude-code/issues/133) | Error writing file   和   Invalid tool parameters  报错 | 0 | 4 |
> | [#131](https://github.com/claude-code-best/claude-code/issues/131) | 希望大佬研究pipe，这样可以复用官方agent teams land的代码实现群控. | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Best V5 (CCB)
> 
> [](https://github.com/claude-code-best/claude-code/stargazers)
> [](https://github.com/claude-code-best/claude-code/graphs/contributors)
> [](https://github.com/claude-code-best/claude-code/issues)
> [](https://github.com/claude-code-best/claude-code/blob/main/LICENSE)
> [](https://github.com/claude-code-best/claude-code/commits/main)
> [](https://bun.sh/)
> [](https://discord.gg/qZU6zS7Q)
> 
> > Which Claude do you like? The open source one is the best.
> 
> 牢 A (Anthropic) 官方 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI 工具的源码反编译/逆向还原项目。目标是将 Claude Code 大部分功能及工程化能力复现 (问就是老佛爷已经付过钱了)。虽然很难绷, 但是它叫做 CCB(踩踩背)...
> 
> [文档在这里, 支持投稿 PR](https://ccb.agent-aura.top/)
> 
> [Discord 群组](https://discord.gg/qZU6zS7Q)
> 
> - [x] V4 — 测试补全、[Buddy](https://ccb.agent-aura.top/docs/features/buddy)、[Auto Mode](https://ccb.agent-aura.top/docs/safety/auto-mode)、环境变量 Feature 开关
> - [x] V5 — [Sentry](https://ccb.agent-aura.top/docs/internals/sentry-setup) / [GrowthBook](https://ccb.agent-aura.top/docs/internals/growthbook-adapter) 企业监控、[自定义 Login](https://ccb.agent-aura.top/docs/features/custom-platform-login)、[OpenAI 兼容](https://ccb.agent-aura.top/docs/plans/openai-compatibility)、[Web Search](https://ccb.agent-aura.top/docs/features/web-browser-tool)、[Computer Use](https://ccb.agent-aura.top/docs/features/computer-use) / [Chrome Use](https://ccb.agent-aura.top/docs/features/claude-in-chrome-mcp)、[Voice Mode](https://ccb.agent-aura.top/docs/features/voice-mode)、[Bridge Mode](https://ccb.agent-aura.top/docs/features/bridge-mode)、[/dream 记忆整理](https://ccb.agent-aura.top/docs/features/auto-dream)
> - [ ] V6 — 大规模重构石山代码，全面模块分包（全新分支，main 封存为历史版本）
> 
> ## 快速开始(安装版)
> 
> 不用克隆仓库, 从 NPM 下载后, 直接使用
> 
> ```sh
> bun  i -g claude-code-best
> bun pm -g trust claude-code-best
> ccb # 直接打开 claude code
> ```
> 
> 国内对 github 网络较差的, 需要先设置这个环境变量
> 
> ```bash
> DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1
> ```
> 
> ## 快速开始(源码版)
> 
> ### 环境要求
> 
> 一定要最新版本的 bun 啊, 不然一堆奇奇怪怪的 BUG!!! bun upgrade!!!
> 
> - [Bun](https://bun.sh/) >= 1.3.11
> - 常规的配置 CC 的方式, 各大提供商都有自己的配置方式
> 
> ### 安装
> 
> ```bash
> bun install
> ```
> 
> 国内对 github 网络较差的,可以使用这个环境变量
> 
> ```bash
> DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1
> ```
> 
> ### 运行
> 
> ```bash
> # 开发模式, 看到版本号 888 说明就是对了
> bun run dev
> 
> # 构建
> bun run build
> ```
> 
> 构建采用 code splitting 多文件打包（`build.ts`），产物输出到 `dist/` 目录（入口 `dist/cli.js` + 约 450 个 chunk 文件）。
> 
> 构建出的版本 bun 和 node 都可以启动, 你 publish 到私有源可以直接启动
> 
> 如果遇到 bug 请直接提一个 issues, 我们优先解决
> 
> ### 新人配置 /login
> 
> 首次运行后，在 REPL 中输入 `/login` 命令进入登录配置界面，选择 **Anthropic Compatible** 即可对接第三方 API 兼容服务（无需 Anthropic 官方账号）。
> 
> 需要填写的字段：
> 
> | 字段 | 说明 | 示例 |
> |------|------|------|
> | Base URL | API 服务地址 | `https://api.example.com/v1` |
> | API Key | 认证密钥 | `sk-xxx` |
> | Haiku Model | 快速模型 ID | `claude-haiku-4-5-20251001` |
> | Sonnet Model | 均衡模型 ID | `claude-sonnet-4-6` |
> | Opus Model | 高性能模型 ID | `claude-opus-4-6` |
> 
> - **Tab / Shift+Tab** 切换字段，**Enter** 确认并跳到下一个，最后一个字段按 Enter 保存
> 
> > 支持所有 Anthropic API 兼容服务（如 OpenRouter、AWS Bedrock 代理等），只要接口兼容 Messages API 即可。
> 
> ## Feature Flags
> 
> 所有功能开关通过 `FEATURE_=1` 环境变量启用，例如：
> 
> ```bash
> FEATURE_BUDDY=1 FEATURE_FORK_SUBAGENT=1 bun run dev
> ```
> 
> 各 Feature 的详细说明见 [`docs/features/`](docs/features/) 目录，欢迎投稿补充。
> 
> ## VS Code 调试
> 
> TUI (REPL) 模式需要真实终端，无法直接通过 VS Code launch 启动调试。使用 **attach 模式**：
> 
> ### 步骤
> 
> 1. **终端启动 inspect 服务**：
>    ```bash
>    bun run dev:inspect
>    ```
>    会输出类似 `ws://localhost:8888/xxxxxxxx` 的地址。
> 
> 2. **VS Code 附着调试器**：
>    - 在 `src/` 文件中打断点
>    - F5 → 选择 **"Attach to Bun (TUI debug)"**
> 
> ## 相关文档及网站
> 
> - **在线文档（Mintlify）**: [ccb.agent-aura.top](https://ccb.agent-aura.top/) — 文档源码位于 [`docs/`](docs/) 目录，欢迎投稿 PR
> - **DeepWiki**: 
> 
> ## Contributors
> 
>   
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## 许可证
> 
> 本项目仅供学习研究用途。Claude Code 的所有权利归 [Anthropic](https://www.anthropic.com/) 所有。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[NanmiCoder--claude-code-haha|NanmiCoder/claude-code-haha]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/claude-code-best/claude-code) · [官方網站](https://ccb.agent-aura.top/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "claude-code-best--claude-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "claude-code-best--claude-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "claude-code-best--claude-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "claude-code-best--claude-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化測試","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "claude-code-best--claude-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/claude-code-best--claude-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "claude-code-best--claude-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "claude-code-best" AND file.name != "claude-code-best--claude-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/claude-code-best--claude-code");
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
> const me = dv.page("Repos/claude-code-best--claude-code");
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
> const me = dv.page("Repos/claude-code-best--claude-code");
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
> const me = dv.page("Repos/claude-code-best--claude-code");
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
> const me = dv.page("Repos/claude-code-best--claude-code");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-06|2026-04-06]] — 再次上榜，13.9k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，13.6k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，13.0k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，10.7k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，7.8k stars
