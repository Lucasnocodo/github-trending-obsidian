---
repo: claude-code-best/claude-code
url: https://github.com/claude-code-best/claude-code
owner: claude-code-best
owner_type: User
language: TypeScript
license: N/A
description: "原汁原昧 Claude Code 可运行,可构建, 可调试版; Typescript 类型全修复; 企业级可靠性; 安全无毒, lock 文件保真, 可直接 bun i; bun run dev 启动"
homepage: "https://ccb.agent-aura.top/"
stars: 13026
stars_per_day: 4342
forks: 13494
open_issues: 12
created: 2026-03-31
pushed_at: 2026-04-03
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
use_case: "提供一個可運行、可構建、可調試的 Claude Code CLI 工具，並修復 TypeScript 類型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-07"
contributor_count: 5
engagement: "high"
issue_close_rate: 83
repo_size_kb: 59038
readme_length: 4212
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:7790,2026-04-02:7914,2026-04-03:10736,2026-04-03:10850,2026-04-04:13023,2026-04-04:13026"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code"
  - "claude-code-best/claude-code"
  - "提供一個可運行、可構建、可調試的 Claude Code CLI 工具，並修復 TypeScript 類型。"
---

# claude-code

**13.0k** stars · **4.3k** stars/天 · 建立 3 天前 · TypeScript · 未標註授權

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
> 提供一個可運行、可構建、可調試的 Claude Code CLI 工具，並修復 TypeScript 類型。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (4.3k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在終端中運行 AI 編程並希望擁有高自定義性的開發者。
> **一句話重點** 這個專案不僅是對 Claude Code 的反向工程，更是對開源社群需求的直接回應。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高自定義性的 AI CLI 工具，值得嘗試。

> [!abstract] 核心創新
> 提供一個開源的 Claude Code CLI 工具，具備企業級的可靠性和安全性。

## 專案簡介

Claude Code Best (CCB) 是一個反向工程的 CLI 工具，旨在重現 Anthropic 的 Claude Code 的功能。用戶可以透過 `bun install` 安裝並使用 `bun run dev` 啟動開發模式，這樣可以在終端中與 AI 進行互動。這個工具的賣點在於其企業級的可靠性和安全性，並且支持多種功能開關，讓用戶可以根據需求啟用或禁用特定功能。技術上，CCB 使用了 Bun 作為執行環境，並且實現了多文件打包，這樣可以有效地管理和減少資源使用。

與其他 CLI 工具相比，如 OpenAI 的 CLI，CCB 提供了更高的自定義性和對第三方 API 的支持，這使得它在集成上更具彈性。實際使用中，CCB 能夠處理大量的請求並提供穩定的性能，但對於新手來說，首次配置可能會有一定的學習曲線。這個專案目前處於快速迭代階段，未來可能會進一步擴展功能和優化性能。對於需要在終端中進行 AI 編程的開發者來說，CCB 是一個值得考慮的選擇，但在使用過程中可能會遇到一些依賴問題，特別是在配置環境時。

**技術棧**：`TypeScript` · `JavaScript` · `Bun`

## 重點功能

- 企業級可靠性 — 支持高穩定性和安全性，適合商業用途。
- 多功能開關 — 透過環境變數啟用或禁用功能，靈活應對不同需求。
- 支持第三方 API — 可與多種 API 兼容服務集成，無需官方帳號。
- 開發模式啟動 — 使用 `bun run dev` 進入開發模式，快速迭代。
- 自動化構建 — 使用 `bun run build` 進行多文件打包，產物可直接運行。

## 快速開始

1. 安裝依賴
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
  "前置條件": "需要安裝 Bun 1.3.11 或以上版本。",
  "指令": "bun run dev",
  "預期輸出": "顯示版本號 888，表示啟動成功。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 13026 stars（4342/天），forks 13494（103.6%），這顯示出極高的使用興趣。這個專案的作者和團隊致力於提供一個開源的替代方案，解決了原版 Claude Code 在可用性和自定義性上的不足。特別是在企業環境中，對於需要高可靠性和安全性的開發者來說，這個工具填補了市場上的一個空白。社群的活躍度也顯示出用戶對於這個工具的需求和期望。隨著開源社群的支持和貢獻，這個專案的未來發展潛力巨大。

## 適合誰使用

**目標受眾**：需要在終端中運行 AI 編程並希望擁有高自定義性的開發者。

> [!example] 使用場景
> - 後端工程師用它來在終端中進行 AI 編程，因為它提供了強大的 CLI 功能和自定義 API 支持。
> - 企業開發團隊用它來構建和測試 AI 驅動的應用，因為它具備企業級的可靠性和安全性。
> - 獨立開發者用它來快速原型設計 AI 應用，因為其安裝和運行過程簡單，且支持多種功能開關。

## 架構分析

CCB 採用 Bun 作為執行環境，這使得其在性能和資源管理上更具優勢。整體架構分為多個模組，支持代碼分割和多文件打包，這樣可以有效減少資源佔用。資料流方面，使用了 REPL 模式與用戶互動，並且支持多種 API 的集成。

選擇 Bun 而非 Node.js 主要是因為其更快的啟動速度和更低的內存使用。這樣的選擇雖然犧牲了一些生態系統的兼容性，但對於專注於性能的應用來說是值得的。擴展性方面，由於使用了模組化設計，未來可以輕鬆添加新功能或整合其他服務。

## 技術深入分析

CCB 的核心技術機制基於 Bun，這使得其在性能上有顯著優勢。使用了多文件打包技術，這樣可以有效地管理資源，並且減少冷啟動時間。設計上，CCB 採用了模組化架構，這樣可以輕鬆擴展功能，並且支持多種 API 的集成。選擇 Bun 而非 Node.js 是因為其更快的啟動速度和更低的內存使用，這對於需要快速迭代的開發環境非常重要。在實際使用中，CCB 能夠處理大量請求，並且在穩定性上表現良好，但對於新手來說，首次配置可能會遇到一些挑戰。技術風險方面，由於依賴於外部 API，未來可能會面臨兼容性問題。整合方面，CCB 可以與主流的 CI/CD 工具鏈相容，並且支持 VS Code 的調試功能，這使得其在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例。安裝過程相對順暢，但需要注意 Bun 的版本要求。文件中有提供快速開始指南，對於新手來說非常有幫助。

## 優缺點分析

> [!success] 優點
> - 高自定義性，支持多種 API 集成。
> - 企業級可靠性，適合商業應用。
> - 快速的開發和構建流程，提升開發效率。

> [!danger] 缺點
> - 需要最新版本的 Bun，對環境要求較高。
> - 首次配置對新手可能有挑戰。
> - 某些功能依賴於外部 API，可能需要額外的金鑰。

> [!warning] 注意事項
> - 需要最新版本的 Bun，否則可能會出現奇怪的錯誤。
> - 首次配置可能對新手有一定的學習曲線。
> - 某些功能可能需要額外的 API 金鑰或配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/cli](https://github.com/OpenAI/cli) | OpenAI 的 CLI 工具主要針對其 API 進行簡化操作，而 CCB 提供了更高的自定義性和對多種 API 的支持。 |
| [anthropic-ai/claude](https://github.com/anthropic-ai/claude) | 原版 Claude Code 主要依賴官方支持，CCB 則是開源版本，提供了更多的靈活性和社群支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/cli](https://github.com/OpenAI/cli) | OpenAI 的 CLI 工具主要針對其 API 進行簡化操作，而 CCB 提供了更高的自定義性和對多種 API 的支持。 | 如果你的團隊已經在使用 OpenAI 的 API，且不需要額外的自定義功能。 | medium，因為需要重新配置 API 認證和環境設置。 |
| [anthropic-ai/claude](https://github.com/anthropic-ai/claude) | 原版 Claude Code 主要依賴官方支持，CCB 則是開源版本，提供了更多的靈活性和社群支持。 | 如果需要官方支持和穩定性，而不需要開源的靈活性。 | high，因為需要完全轉移到新的開源架構上。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code** | **cli** | **claude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenAI 的 CLI 工具主要針對其 API 進行簡化操作，而 CCB 提供了更高的自定義性和對多種 API 的支持。 | 原版 Claude Code 主要依賴官方支持，CCB 則是開源版本，提供了更多的靈活性和社群支持。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 認證和環境設置。 | high，因為需要完全轉移到新的開源架構上。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 的 API，且不需要額 | 如果需要官方支持和穩定性，而不需要開源的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次配置可能會遇到環境變數設置問題，導致無法正常啟動。
  - 解法：仔細檢查環境變數配置，確保符合要求。
- [MEDIUM] 某些功能在特定環境下可能無法正常運行。
  - 解法：查看官方文檔以獲取兼容性信息。
- [MEDIUM] 使用過程中可能會遇到依賴問題，特別是在更新時。
  - 解法：定期檢查依賴版本，並保持更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 驅動的應用開發 | 非常適合 | 提供高自定義性和企業級的可靠性。 |
| 獨立開發者快速原型設計 | 適合 | 安裝和運行簡單，支持多種功能開關。 |
| 大型企業需要穩定的 AI 解決方案 | 普通 | 雖然可靠，但仍在 alpha 階段，可能不適合關鍵應用。 |
| 對 CLI 工具有高要求的開發者 | 非常適合 | 提供了豐富的功能和自定義選項。 |
| 需要官方支持的企業 | 不適合 | 這是開源工具，缺乏官方支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高自定義性的 AI CLI 工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅需 API 金鑰，並且依賴鏈相對簡單，適合在 CI/CD 中使用。

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
| Forks | 13.5k |
| Open Issues | 12 |
| Issue 解決率 | 83% (59 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://ccb.agent-aura.top/) |
| Repo 大小 | 57.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/claude-code-best/claude-code) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude-code-best](https://github.com/claude-code-best) | 140 |
> | [@smallflyingpig](https://github.com/smallflyingpig) | 3 |
> | [@amDosion](https://github.com/amDosion) | 2 |
> | [@JiayuuWang](https://github.com/JiayuuWang) | 2 |
> | [@mingyangxu46-prog](https://github.com/mingyangxu46-prog) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和討論。
**連結**：[文件](https://ccb.agent-aura.top/) · [Discord](https://discord.gg/qZU6zS7Q)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-03 ~ 2026-04-03）
> **活躍天數** 1 天 · **最新 commit** docs: 更新最新说明

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/claude-code-best/claude-code/issues/13) | [留影专用]: 大家想留影就到这里来吧 | 25 | 116 |
> | [#86](https://github.com/claude-code-best/claude-code/issues/86) | 部分原生的功能的借鉴 | 5 | 0 |
> | [#79](https://github.com/claude-code-best/claude-code/issues/79) | F5 直接调试 | 2 | 1 |
> | [#104](https://github.com/claude-code-best/claude-code/issues/104) | How to Set the Model Context Length for Custom Models? | 1 | 1 |

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
> 赞助商占位符
> 
> - [x] v1 会完成跑通及基本的类型检查通过;
> - [x] V2 会完整实现工程化配套设施;
>   - [ ] Biome 格式化可能不会先实施, 避免代码冲突
>   - [x] 构建流水线完成, 产物 Node/Bun 都可以运行
> - [x] V3 会写大量文档, 完善文档站点
> - [x] V4 会完成大量的测试文件, 以提高稳定性
>   - [x] Buddy 小宠物回来啦 [文档](https://ccb.agent-aura.top/docs/features/buddy)
>   - [x] Auto Mode 回归 [文档](https://ccb.agent-aura.top/docs/safety/auto-mode)
>   - [x] 所有 Feature 现在可以通过环境变量配置, 而不是垃圾的 bun --feature
> - [x] V5 支持企业级的监控上报功能, 补全缺失的工具, 解除限制
>   - [x] 移除牢 A 的反蒸馏代码!!!
>   - [x] 补全 web search 能力(用的 Bing 搜索)!!! [文档](https://ccb.agent-aura.top/docs/features/web-browser-tool)
>   - [x] 支持 Debug [文档](https://ccb.agent-aura.top/docs/features/debug-mode)
>   - [x] 关闭自动更新;
>   - [x] 添加自定义 sentry 错误上报支持 [文档](https://ccb.agent-aura.top/docs/internals/sentry-setup)
>   - [x] 添加自定义 GrowthBook 支持 (GB 也是开源的, 现在你可以配置一个自定义的遥控平台) [文档](https://ccb.agent-aura.top/docs/internals/growthbook-adapter)
>   - [x] 自定义 login 模式, 大家可以用这个配置 Claude 的模型!
>   - [x] 修复搜索工具的 rg 缺失问题(需要重新 bun i)
>   - [x] OpenAI 接口兼容! /login 然后配置 OpenAI 平台即可!
>   - [x] Chrome use 支持(暂时浏览器插件要订阅权限,万恶的牢 A) 感谢 @amDosion
>   - [x] Computer use 支持 感谢 @amDosion
>   - [x] /voice 支持 @amDosion
> - [ ] V6 大规模重构石山代码, 全面模块分包
>   - [ ] V6 将会为全新分支, 届时 main 分支将会封存为历史版本
> 
> > 我不知道这个项目还会存在多久, Star + Fork + git clone + .zip 包最稳健; 说白了就是扛旗项目, 看看能走多远
> >
> > 这个项目更新很快, 后台有 Opus 持续优化, 几乎几个小时就有新变化;
> >
> > Claude 已经烧了 1000$ 以上, 没钱了, 换成 GLM 继续玩; @zai-org GLM 5.1 非常可以;
> >
> 
> ## 快速开始
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
> 首次运行后，在 REPL 中输入 `/login` 命令进入登录配置界面，选择 **Custom Platform** 即可对接第三方 API 兼容服务（无需 Anthropic 官方账号）。
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
> - 模型字段会自动读取当前环境变量预填
> - 配置保存到 `~/.claude/settings.json` 的 `env` 字段，保存后立即生效
> 
> 也可以直接编辑 `~/.claude/settings.json`：
> 
> ```json
> {
>   "env": {
>     "ANTHROPIC_BASE_URL": "https://api.example.com/v1",
>     "ANTHROPIC_AUTH_TOKEN": "sk-xxx",
>     "ANTHROPIC_DEFAULT_HAIKU_MODEL": "claude-haiku-4-5-20251001",
>     "ANTHROPIC_DEFAULT_SONNET_MODEL": "claude-sonnet-4-6",
>     "ANTHROPIC_DEFAULT_OPUS_MODEL": "claude-opus-4-6"
>   }
> }
> ```
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[NanmiCoder--claude-code-haha|NanmiCoder/claude-code-haha]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[TinyAGI--fractals|TinyAGI/fractals]]

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
> const concepts = ["CLI/TUI","自動化","API 設計"];
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

- [[2026-04-04|2026-04-04]] — 再次上榜，13.0k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，10.7k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，7.8k stars
