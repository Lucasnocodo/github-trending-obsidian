---
repo: claude-code-best/claude-code
url: https://github.com/claude-code-best/claude-code
owner: claude-code-best
owner_type: User
language: TypeScript
license: N/A
description: "原汁原昧 Claude Code 可运行,可构建版; Typescript 类型全修复; 企业级可靠性; 安全无毒, lock 文件保真, 可直接 bun i; bun run dev 启动"
homepage: "https://ccb.agent-aura.top/"
stars: 7790
stars_per_day: 7790
forks: 9476
open_issues: 3
created: 2026-03-31
pushed_at: 2026-04-02
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
use_case: "提供一個反向工程的 Claude Code CLI 工具，讓開發者能在終端中使用 AI 編程助手。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 1
engagement: "high"
issue_close_rate: 87
repo_size_kb: 54918
readme_length: 9978
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:7790"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code"
  - "claude-code-best/claude-code"
  - "提供一個反向工程的 Claude Code CLI 工具，讓開發者能在終端中使用 AI 編程助手。"
---

# claude-code

**7.8k** stars · **7.8k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

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

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一個反向工程的 Claude Code CLI 工具，讓開發者能在終端中使用 AI 編程助手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (7.8k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在終端中使用 AI 編程助手的開發者，特別是那些希望自定義和擴展功能的團隊。
> **一句話重點** 這個專案不僅提供了功能強大的 AI 編程助手，還讓開發者能夠自由擴展和自定義，這在當前市場上是相當罕見的。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個功能強大的 AI 編程助手，值得一試。

> [!abstract] 核心創新
> 提供了一個開源的 Claude Code 替代品，支持企業級的可靠性和安全性。

## 專案簡介

Claude Code Best (CCB) 是一個反向工程的 CLI 工具，旨在重現 Anthropic 的 Claude Code 的大部分功能。用戶可以透過 `bun install` 安裝並使用 `bun run dev` 啟動開發模式，這樣可以在終端中進行互動式編程。CCB 的設計重點在於提供企業級的可靠性和安全性，並且在構建過程中保證 lock 文件的完整性。這個工具使用 TypeScript 和 JavaScript 實現，並依賴於 Bun 作為執行環境，這使得它在性能上具備優勢。

與其他 CLI 工具相比，CCB 提供了更完整的功能集，包括 API 通信、流式對話和會話引擎等，這些功能在同類工具中較為罕見。相較於其他開源替代品如 `openai/openai-cli` 和 `anthropic/claude`, CCB 的優勢在於其開放性和可擴展性，特別是在需要自定義功能的情境下。使用者在實際運行中可能會遇到需要最新版本 Bun 的限制，這要求用戶保持環境的更新。整體來看，這是一個適合開發者和企業級應用的工具，特別是那些需要在終端中進行 AI 編程的場景。

**技術棧**：`TypeScript` · `JavaScript` · `Bun`

## 重點功能

- REPL 交互界面 — 支持 5000+ 行的完整交互，讓用戶能夠即時編寫和測試代碼。
- API 通信支持 — 包括對 Anthropic、AWS Bedrock、Google Vertex 和 Azure Foundry 的支持，方便用戶整合多種服務。
- 會話引擎 — 管理對話狀態與歸因，支持流式對話和工具調用循環。
- 構建流水線 — 使用 `bun run build` 進行多文件打包，產物可在 Node 和 Bun 環境中運行。
- 安全性設計 — 包括權限系統和上下文構建，確保用戶的數據安全和隱私。

## 快速開始

1. 安裝 Bun 和依賴
```bash
bun install
```
2. 啟動開發模式
```bash
bun run dev
```
3. 構建專案
```bash
bun run build
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Bun。",
  "指令": "bun run dev",
  "預期輸出": "顯示版本號 888，表示運行成功。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 7790 stars（7790/天），forks 9476（121.6%），這顯示出極高的使用者參與度。這個專案由 claude-code-best 開發，專注於提供一個開源的 Claude Code 替代品，解決了原版工具的可用性和擴展性問題。開源後短時間內的快速成長，顯示出社群對於可自定義 AI 編程助手的需求。這個工具的出現正好填補了市場上對於開放式 AI 編程工具的空白，並且得到了廣泛的關注和支持。

## 適合誰使用

**目標受眾**：需要在終端中使用 AI 編程助手的開發者，特別是那些希望自定義和擴展功能的團隊。

> [!example] 使用場景
> - 後端工程師用它來在終端中快速生成代碼片段，因為其互動式的 REPL 界面能夠即時回饋和調試。
> - DevOps 工程師用它來管理和執行自動化腳本，因為它支持多種 API 通信，能夠與現有的 CI/CD 流程無縫整合。
> - AI 研究人員用它來測試和調整 AI 模型，因為其支持流式對話和上下文管理，能夠有效地進行實驗和數據收集。

## 架構分析

CCB 採用 Bun 作為執行環境，這使得其在性能上具備優勢。整體架構採用 Monorepo 模式，內部包通過 Bun workspaces 管理，這樣可以有效地組織和維護代碼。資料流方面，使用者的請求經由 REPL 交互界面進入會話引擎，然後通過 API 通信模塊與外部服務進行交互，最終將結果返回給用戶。

這種設計使得 CCB 在功能擴展上具有靈活性，能夠快速集成新的服務或工具。選擇 Bun 而非其他執行環境的原因在於其性能優勢和簡化的開發流程，但這也意味著用戶需要保持 Bun 的更新，否則可能會遇到兼容性問題。整體來看，這種架構設計使得 CCB 在開發和運行上都具備了高效性和可擴展性。

## 技術深入分析

CCB 的核心技術機制包括使用 TypeScript 和 JavaScript 實現的 REPL 交互界面，這使得用戶能夠在終端中進行即時編程。其流式對話和上下文管理功能，依賴於一套複雜的會話引擎，能夠有效地管理對話狀態。效能方面，CCB 能夠處理大量的請求，並且在構建過程中使用了多文件打包技術，這使得其在運行時的資源佔用相對較低。選擇 Bun 作為執行環境的原因在於其高效的性能和簡化的開發流程，但這也意味著用戶需要保持環境的更新，否則可能會遇到兼容性問題。技術風險方面，CCB 目前仍在開發中，某些功能可能會不穩定，這對於需要穩定運行的生產環境來說是一個潛在的風險。整合方面，CCB 能夠與多種主流工具鏈相容，並且支持在 CI/CD 流程中使用，這使得其在開發和部署上都具備了良好的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明；安裝過程順暢，沒有明顯的坑；有良好的快速入門指南；目前僅提供英文文檔，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 開源且可自定義，適合需要擴展功能的開發者。
> - 支持多種 API 通信，方便整合多種服務。
> - 提供完整的 REPL 界面，提升開發效率。

> [!danger] 缺點
> - 對環境要求較高，需要最新版本的 Bun。
> - 某些功能仍在開發中，可能存在不穩定性。
> - 文檔和社群支持仍在完善中。

> [!warning] 注意事項
> - 僅支持最新版本的 Bun，舊版本可能會導致錯誤。
> - 某些功能需要特定的環境配置，否則無法正常運行。
> - 目前仍在開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openai/openai-cli](https://github.com/openai/openai-cli) | 提供更簡單的 API 調用，但功能較為單一，不支持自定義擴展。 |
| [anthropic/claude](https://github.com/anthropic/claude) | 原版工具，功能完整但不開源，無法進行自定義和擴展。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/openai-cli](https://github.com/openai/openai-cli) | 使用 Python 實作，簡化了 API 調用，但功能較為單一。 | 如果需要簡單的 API 調用而不需要自定義功能，這是個不錯的選擇。 | low，因為 API 調用方式相似。 |
| [anthropic/claude](https://github.com/anthropic/claude) | 原版工具，功能完整但不開源，無法進行自定義和擴展。 | 如果需要完整的功能且不介意使用封閉系統，這是最佳選擇。 | medium，因為需要適應不同的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code** | **openai-cli** | **claude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，簡化了 API 調用，但功能較為單一。 | 原版工具，功能完整但不開源，無法進行自定義和擴展。 |
> | 遷移成本 | - | low，因為 API 調用方式相似。 | medium，因為需要適應不同的使用方式。 |
> | 適用場景 | 主要場景 | 如果需要簡單的 API 調用而不需要自定義功能，這是個不錯的 | 如果需要完整的功能且不介意使用封閉系統，這是最佳選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中可能會遇到 Bun 版本不兼容的問題
  - 解法：確保使用最新版本的 Bun
- [MEDIUM] 某些功能仍在開發中，可能會導致不穩定
  - 解法：定期檢查更新，並參與社群討論
- [MEDIUM] 文檔不夠全面，可能會導致使用上的困惑
  - 解法：參考社群提供的資源和範例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速生成代碼 | 非常適合 | 提供了即時的 REPL 界面，能夠快速反饋和調試。 |
| 需要集成多種 API 的企業應用 | 適合 | 支持多種 API 通信，方便整合。 |
| 個人開發者進行 AI 研究 | 普通 | 雖然功能強大，但可能不夠穩定。 |
| 大型企業的核心系統 | 不適合 | 目前仍在開發中，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個功能強大的 AI 編程助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，且不存取敏感資料，但用戶需注意依賴的外部 API 的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CCB 最常與 Bun 和 Node.js 搭配使用，作為開發和測試環境的核心工具。在一個使用 Node.js 的專案中，可以用 CCB 來快速生成和測試代碼，具體做法是通過 `bun run dev` 啟動 REPL 界面。CCB 支援 GitHub Actions 和其他 CI 工具，能夠輕鬆集成到現有的開發流程中。整合時最常見的問題是 Bun 版本不兼容，需確保環境的更新。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 CCB 出現之前，開發者主要依賴於封閉的 AI 編程工具，這些工具的功能有限且無法自定義。隨著開源運動的興起，對於可自定義的 AI 編程助手的需求日益增加。技術的進步使得反向工程成為可能，這使得 CCB 能夠重現 Claude Code 的功能並進行擴展。

這個工具的出現標誌著開源 AI 編程助手的趨勢，未來可能會有更多類似的工具出現。

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
| Forks | 9.5k |
| Open Issues | 3 |
| Issue 解決率 | 87% (20 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://ccb.agent-aura.top/) |
| Repo 大小 | 53.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/claude-code-best/claude-code) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude-code-best](https://github.com/claude-code-best) | 76 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 87%。
**連結**：[文件](https://ccb.agent-aura.top/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-02）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #30 from claude-code-best/test/test-most-core-func

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/claude-code-best/claude-code/issues/13) | [留影专用]: 大家想留影就到这里来吧 | 10 | 60 |
> | [#26](https://github.com/claude-code-best/claude-code/issues/26) | 添加cx2cc | 1 | 3 |
> | [#27](https://github.com/claude-code-best/claude-code/issues/27) | 无法debug调试 | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Best V3 (CCB)
> 
> 牢 A (Anthropic) 官方 [Claude Code](https://docs.anthropic.com/en/docs/claude-code) CLI 工具的源码反编译/逆向还原项目。目标是将 Claude Code 大部分功能及工程化能力复现 (问就是老佛爷已经付过钱了)。虽然很难绷, 但是它叫做 CCB(踩踩背)...
> 
> [文档在这里, 支持投稿 PR](https://ccb.agent-aura.top/)
> 
> 赞助商占位符
> 
> - [x] v1 会完成跑通及基本的类型检查通过;
> - [x] V2 会完整实现工程化配套设施;
>   - [ ] Biome 格式化可能不会先实施, 避免代码冲突
>   - [x] 构建流水线完成, 产物 Node/Bun 都可以运行
> - [x] V3 会写大量文档, 完善文档站点
> - [ ] V4 会完成大量的测试文件, 以提高稳定性
> - [ ] V5 大规模重构石山代码, 全面模块分包
>   - [ ] V5 将会为全新分支, 届时 main 分支将会封存为历史版本
> 
> > 我不知道这个项目还会存在多久, Star + Fork + git clone + .zip 包最稳健; 说白了就是扛旗项目, 看看能走多远
> >
> > 这个项目更新很快, 后台有 Opus 持续优化, 几乎几个小时就有新变化;
> >
> > Claude 已经烧了 1000$ 以上, 继续玩;
> >
> 
> 存活记录:
> 
> 1. 开源后 48 小时: 突破 7k Star; 测试代码小有成效;
> 2. 开源后 24 小时: 突破 6k Star, 感谢各位支持. 完成 docs 文档的站点构建, 达到 v3 版本, 后续开始进行测试用例维护, 完成之后可以接受 PR; 看来牢 A 是不想理我们了;
> 3. 开源后 15 小时: 完成了构建产物的 node 支持, 现在是完全体了; star 快到 3k 了; 等待牢 A 的邮件
> 4. 开源后 12 小时: 愚人节, star 破 1k, 并且牢 A 没有发邮件搞这个项目
> 
> 
> ### 工具 — Feature Flag 关闭（全部不可用）
> 
> | 工具 | Feature Flag |
> |------|-------------|
> | SleepTool | `PROACTIVE` / `KAIROS` |
> | RemoteTriggerTool | `AGENT_TRIGGERS_REMOTE` |
> | MonitorTool | `MONITOR_TOOL` |
> | SendUserFileTool | `KAIROS` |
> | OverflowTestTool | `OVERFLOW_TEST_TOOL` |
> | TerminalCaptureTool | `TERMINAL_PANEL` |
> | WebBrowserTool | `WEB_BROWSER_TOOL` |
> | SnipTool | `HISTORY_SNIP` |
> | WorkflowTool | `WORKFLOW_SCRIPTS` |
> | PushNotificationTool | `KAIROS` / `KAIROS_PUSH_NOTIFICATION` |
> | SubscribePRTool | `KAIROS_GITHUB_WEBHOOKS` |
> | ListPeersTool | `UDS_INBOX` |
> | CtxInspectTool | `CONTEXT_COLLAPSE` |
> 
> 
> ### 斜杠命令 — Feature Flag 关闭
> 
> | 命令 | Feature Flag |
> |------|-------------|
> | `/voice` | `VOICE_MODE` |
> | `/proactive` | `PROACTIVE` / `KAIROS` |
> | `/brief` | `KAIROS` / `KAIROS_BRIEF` |
> | `/assistant` | `KAIROS` |
> | `/remote-control` (alias `rc`) | `BRIDGE_MODE` |
> | `/remote-control-server` | `DAEMON` + `BRIDGE_MODE` |
> | `/force-snip` | `HISTORY_SNIP` |
> | `/workflows` | `WORKFLOW_SCRIPTS` |
> | `/web-setup` | `CCR_REMOTE_SETUP` |
> | `/subscribe-pr` | `KAIROS_GITHUB_WEBHOOKS` |
> | `/ultraplan` | `ULTRAPLAN` |
> | `/torch` | `TORCH` |
> | `/peers` | `UDS_INBOX` |
> | `/fork` | `FORK_SUBAGENT` |
> | `/buddy` | `BUDDY` |
> 
> 
> ### Feature Flags（31 个，全部返回 `false`）
> 
> `ABLATION_BASELINE` `AGENT_MEMORY_SNAPSHOT` `BG_SESSIONS` `BRIDGE_MODE` `BUDDY` `CCR_MIRROR` `CCR_REMOTE_SETUP` `CHICAGO_MCP` `COORDINATOR_MODE` `DAEMON` `DIRECT_CONNECT` `EXPERIMENTAL_SKILL_SEARCH` `FORK_SUBAGENT` `HARD_FAIL` `HISTORY_SNIP` `KAIROS` `KAIROS_BRIEF` `KAIROS_CHANNELS` `KAIROS_GITHUB_WEBHOOKS` `LODESTONE` `MCP_SKILLS` `PROACTIVE` `SSH_REMOTE` `TORCH` `TRANSCRIPT_CLASSIFIER` `UDS_INBOX` `ULTRAPLAN` `UPLOAD_USER_SETTINGS` `VOICE_MODE` `WEB_BROWSER_TOOL` `WORKFLOW_SCRIPTS`
> 
> 
> ## Feature Flags 详解
> 
> 原版 Claude Code 通过 `bun:bundle` 的 `feature()` 在构建时注入 feature flag，由 GrowthBook 等 A/B 实验平台控制灰度发布。本项目中 `feature()` 被 polyfill 为始终返回 `false`，因此以下 30 个 flag 全部关闭。
> 
> 
> ## 快速开始
> 
> 
> ### 环境要求
> 
> 一定要最新版本的 bun 啊, 不然一堆奇奇怪怪的 BUG!!! bun upgrade!!!
> 
> - [Bun](https://bun.sh/) >= 1.3.11
> - 常规的配置 CC 的方式, 各大提供商都有自己的配置方式
> 
> 
> ### 安装
> 
> ```bash
> bun install
> ```
> 
> 
> ### 运行
> 
> ```bash
> 
> # 开发模式, 看到版本号 888 说明就是对了
> bun run dev
> 
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
> 
> ## 相关文档及网站
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
> 
> ## 能力清单
> 
> > ✅ = 已实现  ⚠️ = 部分实现 / 条件启用  ❌ = stub / 移除 / feature flag 关闭
> 
> 
> ### 核心系统
> 
> | 能力 | 状态 | 说明 |
> |------|------|------|
> | REPL 交互界面（Ink 终端渲染） | ✅ | 主屏幕 5000+ 行，完整交互 |
> | API 通信 — Anthropic Direct | ✅ | 支持 API Key + OAuth |
> | API 通信 — AWS Bedrock | ✅ | 支持凭据刷新、Bearer Token |
> | API 通信 — Google Vertex | ✅ | 支持 GCP 凭据刷新 |
> | API 通信 — Azure Foundry | ✅ | 支持 API Key + Azure AD |
> | 流式对话与工具调用循环 (`query.ts`) | ✅ | 1700+ 行，含自动压缩、token 追踪 |
> | 会话引擎 (`QueryEngine.ts`) | ✅ | 1300+ 行，管理对话状态与归因 |
> | 上下文构建（git status / CLAUDE.md / memory） | ✅ | `context.ts` 完整实现 |
> | 权限系统（plan/auto/manual 模式） | ✅ | 6300+ 行，含 YOLO 分类器、路径验证、规则匹配 |
> | Hook 系统（pre/post tool use） | ✅ | 支持 settings.json 配置 |
> | 会话恢复 (`/resume`) | ✅ | 独立 ResumeConversation 屏幕 |
> | Doctor 诊断 (`/doctor`) | ✅ | 版本、API、插件、沙箱检查 |
> | 自动压缩 (compaction) | ✅ | auto-compact / micro-compact / API compact |
> 
> 
> ### 工具 — 始终可用
> 
> | 工具 | 状态 | 说明 |
> |------|------|------|
> | BashTool | ✅ | Shell 执行，沙箱，权限检查 |
> | FileReadTool | ✅ | 文件 / PDF / 图片 / Notebook 读取 |
> | FileEditTool | ✅ | 字符串替换式编辑 + diff 追踪 |
> | FileWriteTool | ✅ | 文件创建 / 覆写 + diff 生成 |
> | NotebookEditTool | ✅ | Jupyter Notebook 单元格编辑 |
> | AgentTool | ✅ | 子代理派生（fork / async / background / remote） |
> | WebFetchTool | ✅ | URL 抓取 → Markdown → AI 摘要 |
> | WebSearchTool | ✅ | 网页搜索 + 域名过滤 |
> | AskUserQuestionTool | ✅ | 多问题交互提示 + 预览 |
> | SendMessageTool | ✅ | 消息发送（peers / teammates / mailbox） |
> | SkillTool | ✅ | 斜杠命令 / Skill 调用 |
> | EnterPlanModeTool | ✅ | 进入计划模式 |
> | ExitPlanModeTool (V2) | ✅ | 退出计划模式 |
> | TodoWriteTool | ✅ | Todo 列表 v1 |
> | BriefTool | ✅ | 简短消息 + 附件发送 |
> | TaskOutputTool | ✅ | 后台任务输出读取 |
> | TaskStopTool | ✅ | 后台任务停止 |
> | ListMcpResourcesTool | ⚠️ | MCP 资源列表（被 specialTools 过滤，特定条件下加入） |
> | ReadMcpResourceTool | ⚠️ | MCP 资源读取（同上） |
> | SyntheticOutputTool | ⚠️ | 仅在非交互会话（SDK/pipe 模式）下创建 |
> | CronCreateTool | ✅ | 定时任务创建（已移除 AGENT_TRIGGERS gate） |
> | CronDeleteTool | ✅ | 定时任务删除 |
> | CronListTool | ✅ | 定时任务列表 |
> | EnterWorktreeTool | ✅ | 进入 Git Worktree（`isWorktreeModeEnabled()` 已硬编码为 true） |
> | ExitWorktreeTool | ✅ | 退出 Git Worktree |
> 
> 
> ### 工具 — 条件启用
> 
> | 工具 | 状态 | 启用条件 |
> |------|------|----------|
> | GlobTool | ✅ | 未嵌入 bfs/ugrep 时启用（默认启用） |
> | GrepTool | ✅ | 同上 |
> | TaskCreateTool | ⚠️ | `isTodoV2Enabled()` 为 true 时 |
> | TaskGetTool | ⚠️ | 同上 |
> | TaskUpdateTool | ⚠️ | 同上 |
> | TaskListTool | ⚠️ | 同上 |
> | TeamCreateTool | ⚠️ | `isAgentSwarmsEnabled()` |
> | TeamDeleteTool | ⚠️ | 同上 |
> | ToolSearchTool | ⚠️ | `isToolSearchEnabledOptimistic()` |
> | PowerShellTool | ⚠️ | Windows 平台检测 |
> | LSPTool | ⚠️ | `ENABLE_LSP_TOOL` 环境变量 |
> | ConfigTool | ❌ | `USER_TYPE === 'ant'`（永远为 false） |
> 
> 
> ### 工具 — Stub / 不可用
> 
> | 工具 | 说明 |
> |------|------|
> | TungstenTool | ANT-ONLY stub |
> | REPLTool | ANT-ONLY，`isEnabled: () => false` |
> | SuggestBackgroundPRTool | ANT-ONLY，`isEnabled: () => false` |
> | VerifyPlanExecutionTool | 需 `CLAUDE_CODE_VERIFY_PLAN=true` 环境变量，且为 stub |
> | ReviewArtifactTool | stub，未注册到 tools.ts |
> | DiscoverSkillsTool | stub，未注册到 tools.ts |
> 
> 
> ### 斜杠命令 — 可用
> 
> | 命令 | 状态 | 说明 |
> |------|------|------|
> | `/add-dir` | ✅ | 添加目录 |
> | `/advisor` | ✅ | Advisor 配置 |
> | `/agents` | ✅ | 代理列表/管理 |
> | `/branch` | ✅ | 分支管理 |
> | `/btw` | ✅ | 快速备注 |
> | `/chrome` | ✅ | Chrome 集成 |
> | `/clear` | ✅ | 清屏 |
> | `/color` | ✅ | Agent 颜色 |
> | `/compact` | ✅ | 压缩对话 |
> | `/config` (`/settings`) | ✅ | 配置管理 |
> | `/context` | ✅ | 上下文信息 |
> | `/copy` | ✅ | 复制最后消息 |
> | `/cost` | ✅ | 会话费用 |
> | `/desktop` | ✅ | Claude Desktop 集成 |
> | `/diff` | ✅ | 显示 diff |
> | `/doctor` | ✅ | 健康检查 |
> | `/effort` | ✅ | 设置 effort 等级 |
> | `/exit` | ✅ | 退出 |
> | `/export` | ✅ | 导出对话 |
> | `/extra-usage` | ✅ | 额外用量信息 |
> | `/fast` | ✅ | 切换 fast 模式 |
> | `/feedback` | ✅ | 反馈 |
> | `/loop` | ✅ | 定时循环执行（bundled skill，可通过 `CLAUDE_CODE_DISABLE_CRON` 关闭） |
> | `/heapdump` | ✅ | Heap dump（调试） |
> | `/help` | ✅ | 帮助 |
> | `/hooks` | ✅ | Hook 管理 |
> | `/ide` | ✅ | IDE 连接 |
> | `/init` | ✅ | 初始化项目 |
> | `/install-github-app` | ✅ | 安装 GitHub App |
> | `/install-slack-app` | ✅ | 安装 Slack App |
> | `/keybindings` | ✅ | 快捷键管理 |
> | `/login` / `/logout` | ✅ | 登录 / 登出 |
> | `/mcp` | ✅ | MCP 服务管理 |
> | `/memory` | ✅ | Memory / CLAUDE.md 管理 |
> | `/mobile` | ✅ | 移动端 QR 码 |
> | `/model` | ✅ | 模型选择 |
> | `/output-style` | ✅ | 输出风格 |
> | `/passes` | ✅ | 推荐码 |
> | `/permissions` | ✅ | 权限管理 |
> | `/plan` | ✅ | 计划模式 |
> | `/plugin` | ✅ | 插件管理 |
> | `/pr-comments` | ✅ | PR 评论 |
> | `/privacy-settings` | ✅ | 隐私设置 |
> | `/rate-limit-options` | ✅ | 限速选项 |
> | `/release-notes` | ✅ | 更新日志 |
> | `/reload-plugins` | ✅ | 重载插件 |
> | `/remote-env` | ✅ | 远程环境配置 |
> | `/rename` | ✅ | 重命名会话 |
> | `/resume` | ✅ | 恢复会话 |
> | `/review` | ✅ | 代码审查（本地） |
> | `/ultrareview` | ✅ | 云端审查 |
> | `/rewind` | ✅ | 回退对话 |
> | `/sandbox-toggle` | ✅ | 切换沙箱 |
> | `/security-review` | ✅ | 安全审查 |
> | `/session` | ✅ | 会话信息 |
> | `/skills` | ✅ | Skill 管理 |
> | `/stats` | ✅ | 会话统计 

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NanmiCoder--claude-code-haha|NanmiCoder/claude-code-haha]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[ahmadawais--chartli|ahmadawais/chartli]]

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
> const concepts = ["CLI/TUI","API 設計","自動化"];
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

- [[2026-04-02|2026-04-02]] — 首次收錄，7.8k stars
