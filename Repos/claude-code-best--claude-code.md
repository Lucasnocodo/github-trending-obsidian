---
repo: claude-code-best/claude-code
url: https://github.com/claude-code-best/claude-code
owner: claude-code-best
owner_type: User
language: TypeScript
license: N/A
description: "原汁原昧 Claude Code 可运行,可构建, 可调试版; Typescript 类型全修复; 企业级可靠性; 安全无毒, lock 文件保真, 可直接 bun i; bun run dev 启动"
homepage: "https://ccb.agent-aura.top/"
stars: 15296
stars_per_day: 1530
forks: 14843
open_issues: 23
created: 2026-03-31
pushed_at: 2026-04-10
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
appearances: 6
next_review: "2026-04-10"
contributor_count: 5
engagement: "high"
issue_close_rate: 82
repo_size_kb: 64891
readme_length: 4517
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:7790,2026-04-02:7914,2026-04-03:10736,2026-04-03:10850,2026-04-04:13023,2026-04-04:13026,2026-04-05:13577,2026-04-05:13580,2026-04-06:13897,2026-04-06:13908,2026-04-07:14198,2026-04-07:14224,2026-04-08:14619,2026-04-09:14877,2026-04-10:15129,2026-04-11:15296"
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

**15.3k** stars · **1.5k** stars/天 · 建立 10 天前 · TypeScript · 未標註授權

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
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.5k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要快速搭建 AI 編程助手的獨立開發者或小型團隊。
> **一句話重點** 這個專案不僅重現了 Claude Code 的功能，還提供了開源的靈活性和社群支持。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到靈活的 AI 編程助手，值得投入。

> [!abstract] 核心創新
> 這個專案重現了 Claude Code 的功能，並提供了更高的開源兼容性。

## 專案簡介

Claude Code Best (CCB) 是一個反向工程的 CLI 工具，旨在重現 Anthropic 的 Claude Code 的功能。用戶可以通過簡單的命令行指令（如 `ccb`）啟動這個工具，並利用其強大的 AI 編程助手功能。CCB 支持多種功能開關，通過環境變數啟用，讓用戶能夠根據需求自定義使用體驗。技術上，CCB 使用 Bun 作為執行環境，這使得它在性能上有著不錯的表現，並且支持多文件打包以減少啟動時間。與其他類似工具相比，CCB 的一大優勢在於它的開源性和對第三方 API 的兼容性，特別是對 OpenAI 和 Anthropic 的支持。

這使得用戶可以輕鬆集成各種 AI 模型，而不需要依賴官方的 API 帳號。實際使用中，CCB 能夠處理大量的請求，並且其社群活躍度高，能迅速解決用戶的問題。這個專案目前處於穩定的 beta 階段，適合小型團隊和個人開發者使用，未來可能會進一步擴展功能和增強穩定性。對於需要快速搭建 AI 編程助手的開發者來說，CCB 是一個值得考慮的選擇。

**技術棧**：`Bun 1.3.11` · `TypeScript` · `JavaScript`

## 重點功能

- CLI 啟動 — 使用 `ccb` 命令直接啟動工具。
- 環境變數開關 — 透過 `FEATURE_=1` 來啟用各種功能。
- 多文件打包 — 使用 `bun run build` 進行構建，產物輸出到 `dist/` 目錄。
- API 兼容性 — 支持多種第三方 API，無需官方帳號即可使用。
- 教學模式 — 提供 `/teach-me` 命令，幫助用戶理解專案的各個模組。

## 快速開始

1. 全局安裝 CCB
```bash
bun i -g claude-code-best
```
2. 信任安裝
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
  "前置條件": "安裝 Bun 並確保版本 >= 1.3.11。",
  "指令": "bun run dev",
  "預期輸出": "啟動開發模式，顯示版本號 888。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 15296 stars（1530/天），forks 14843（97%），這顯示出極高的社群參與度。這個專案由一群活躍的開發者維護，解決了許多開發者在使用官方 Claude Code 時遇到的兼容性和功能限制問題。特別是它對開源社群的支持，使得許多開發者能夠自由使用和修改。社群中活躍的討論和問題解決也促進了專案的快速成長。這些因素共同推動了其快速的增長。

## 適合誰使用

**目標受眾**：需要快速搭建 AI 編程助手的獨立開發者或小型團隊。

> [!example] 使用場景
> - 後端工程師用它來快速搭建 AI 編程助手，因為它支持多種 API 並且安裝簡單。
> - 獨立開發者用它來進行快速原型開發，因為它的 CLI 工具能夠即時反饋程式碼執行結果。
> - 教育工作者用它來教學 AI 編程，因為它提供了互動式的學習模式，幫助學生理解概念。

## 架構分析

CCB 採用 Bun 作為執行環境，這使得它在性能上有著不錯的表現。整體架構由多個模組組成，支持多文件打包，並通過環境變數來啟用不同的功能。這樣的設計使得用戶可以根據需求靈活調整使用體驗。選擇 Bun 而非 Node.js 是為了提高啟動速度和減少資源消耗，但這也意味著需要用戶安裝特定的執行環境。整體來說，CCB 的架構設計旨在提供高效的開發體驗，並支持快速迭代和功能擴展。

## 技術深入分析

CCB 的核心技術機制在於其使用 Bun 作為執行環境，這使得它在性能上有著不錯的表現。其架構設計支持多文件打包，這樣可以減少啟動時間並提高效率。CCB 能夠處理大量的請求，並且其社群活躍度高，能迅速解決用戶的問題。選擇 Bun 而非 Node.js 是為了提高啟動速度和減少資源消耗，但這也意味著需要用戶安裝特定的執行環境。未來可能會進一步擴展功能和增強穩定性，特別是在大型專案的支持上。整體來說，CCB 的設計旨在提供高效的開發體驗，並支持快速迭代和功能擴展。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要用戶熟悉 Bun 環境。文件中有良好的快速開始指南，並且支持多語言。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 開源且社群活躍，能快速獲得支援。
> - 支持多種 API，靈活性高。
> - 安裝簡單，適合快速上手。

> [!danger] 缺點
> - 僅支持 Bun 環境，對於不熟悉的用戶有學習成本。
> - 部分功能仍在開發中，可能不穩定。
> - 對於大型專案的支持可能需要額外配置。

> [!warning] 注意事項
> - 僅支持 Bun 環境，需確保 Bun 版本為最新。
> - 對於大型專案，可能需要額外的配置來優化性能。
> - 部分功能仍在開發中，可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 CLI 工具，但專注於不同的 AI 模型，適合需要特定模型的開發者。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步的 CLI 工具，與 CCB 的編程助手功能不同，適合資料處理工作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 CLI 工具，但專注於不同的 AI 模型，適合需要特定模型的開發者。 | 如果你的團隊需要特定的 AI 模型支持，則可以考慮這個工具。 | medium，因為需要重新配置 API 接口。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步的 CLI 工具，與 CCB 的編程助手功能不同，適合資料處理工作。 | 如果你的專案主要涉及資料處理，這個工具會更合適。 | low，因為功能範圍不同，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 CLI 工具，但專注於不同的 AI 模型，適合需要特定模型的開發者。 | 專注於資料同步的 CLI 工具，與 CCB 的編程助手功能不同，適合資料處理工作。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 接口。 | low，因為功能範圍不同，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要特定的 AI 模型支持，則可以考慮這個工具。 | 如果你的專案主要涉及資料處理，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次運行需要進行登錄配置，否則無法使用 API 功能。
  - 解法：在 REPL 中輸入 `/login` 進行配置。
- [MEDIUM] 某些功能在大型專案中可能不穩定。
  - 解法：建議在小型專案中測試功能。
- **[HIGH]** 需要最新版本的 Bun，否則可能出現錯誤。
  - 解法：定期檢查 Bun 更新，保持版本最新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單的安裝和靈活的 API 支持使其成為理想選擇。 |
| 大型企業的核心系統 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 教育機構的 AI 編程教學 | 適合 | 提供互動式學習功能，能有效輔助教學。 |
| 需要快速原型開發的開發者 | 非常適合 | 安裝簡單且功能強大，能快速實現想法。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到靈活的 AI 編程助手，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴的庫大部分為開源，需定期檢查依賴的安全性。使用於 CI/CD pipeline 時需確保環境安全。

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
| Forks | 14.8k |
| Open Issues | 23 |
| Issue 解決率 | 82% (103 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://ccb.agent-aura.top/) |
| Repo 大小 | 63.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/claude-code-best/claude-code) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude-code-best](https://github.com/claude-code-best) | 216 |
> | [@2228293026](https://github.com/2228293026) | 17 |
> | [@amDosion](https://github.com/amDosion) | 4 |
> | [@bonerush](https://github.com/bonerush) | 4 |
> | [@smallflyingpig](https://github.com/smallflyingpig) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，經常有新問題和功能討論。
**連結**：[文件](https://ccb.agent-aura.top/) · [Discord](https://discord.gg/qZU6zS7Q)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-10）
> **活躍天數** 2 天 · **最新 commit** chore: 添加类型测试

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/claude-code-best/claude-code/issues/13) | [留影专用]: 大家想留影就到这里来吧 | 27 | 140 |
> | [#154](https://github.com/claude-code-best/claude-code/issues/154) | Crab Code -- 受本项目启发，正在用 Rust 重写 Claude Code | 2 | 4 |
> | [#131](https://github.com/claude-code-best/claude-code/issues/131) | 希望大佬研究pipe，这样可以复用官方agent teams land的代码实现群控. | 1 | 1 |
> | [#237](https://github.com/claude-code-best/claude-code/issues/237) | Posttooluse Hook和auto-compact `bug` | 0 | 0 |

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
> [文档在这里, 支持投稿 PR](https://ccb.agent-aura.top/) | [留影文档在这里](./Friends.md) | [Discord 群组](https://discord.gg/qZU6zS7Q)
> 
> - ✅ [x] V4 — 测试补全、[Buddy](https://ccb.agent-aura.top/docs/features/buddy)、[Auto Mode](https://ccb.agent-aura.top/docs/safety/auto-mode)、环境变量 Feature 开关
> - ✅ [x] V5 — [Sentry](https://ccb.agent-aura.top/docs/internals/sentry-setup) / [GrowthBook](https://ccb.agent-aura.top/docs/internals/growthbook-adapter) 企业监控、[自定义 Login](https://ccb.agent-aura.top/docs/features/custom-platform-login)、[OpenAI 兼容](https://ccb.agent-aura.top/docs/plans/openai-compatibility)、[Web Search](https://ccb.agent-aura.top/docs/features/web-browser-tool)、[Computer Use](https://ccb.agent-aura.top/docs/features/computer-use) / [Chrome Use](https://ccb.agent-aura.top/docs/features/claude-in-chrome-mcp)、[Voice Mode](https://ccb.agent-aura.top/docs/features/voice-mode)、[Bridge Mode](https://ccb.agent-aura.top/docs/features/bridge-mode)、[Remote Control 私有部署](https://ccb.agent-aura.top/docs/features/remote-control-self-hosting)、[/dream 记忆整理](https://ccb.agent-aura.top/docs/features/auto-dream)
> - 🔮 [ ] V6 — 大规模重构石山代码，全面模块分包（全新分支，main 封存为历史版本）
> 
> - 🚀 [想要启动项目](#快速开始源码版)
> - 🐛 [想要调试项目](#vs-code-调试)
> - 📖 [想要学习项目](#teach-me-学习项目)
> 
> ## ⚡ 快速开始(安装版)
> 
> 不用克隆仓库, 从 NPM 下载后, 直接使用
> 
> ```sh
> bun  i -g claude-code-best
> bun pm -g trust claude-code-best
> ccb # 直接打开 claude code
> CLAUDE_BRIDGE_BASE_URL=https://remote-control.claude-code-best.win/ CLAUDE_BRIDGE_OAUTH_TOKEN=test-my-key bun run dev --remote-control # 我们有自部署的远程控制
> ```
> 
> ⚠️ 如果 GitHub 下载 ripgrep 失败，postinstall 会自动回退到 ghproxy.net 镜像，无需手动配置。
> 
> ## ⚡ 快速开始(源码版)
> 
> ### ⚙️ 环境要求
> 
> 一定要最新版本的 bun 啊, 不然一堆奇奇怪怪的 BUG!!! bun upgrade!!!
> 
> - 📦 [Bun](https://bun.sh/) >= 1.3.11
> - ⚙️ 常规的配置 CC 的方式, 各大提供商都有自己的配置方式
> 
> ### 📥 安装
> 
> ```bash
> bun install
> ```
> 
> ### ▶️ 运行
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
> ### 👤 新人配置 /login
> 
> 首次运行后，在 REPL 中输入 `/login` 命令进入登录配置界面，选择 **Anthropic Compatible** 即可对接第三方 API 兼容服务（无需 Anthropic 官方账号）。
> 选择 OpenAI 和 Gemini 对应的栏目都是支持相应协议的
> 
> 需要填写的字段：
> 
> | 📌 字段 | 📝 说明 | 💡 示例 |
> |------|------|------|
> | Base URL | API 服务地址 | `https://api.example.com/v1` |
> | API Key | 认证密钥 | `sk-xxx` |
> | Haiku Model | 快速模型 ID | `claude-haiku-4-5-20251001` |
> | Sonnet Model | 均衡模型 ID | `claude-sonnet-4-6` |
> | Opus Model | 高性能模型 ID | `claude-opus-4-6` |
> 
> - ⌨️ **Tab / Shift+Tab** 切换字段，**Enter** 确认并跳到下一个，最后一个字段按 Enter 保存
> 
> > ℹ️ 支持所有 Anthropic API 兼容服务（如 OpenRouter、AWS Bedrock 代理等），只要接口兼容 Messages API 即可。
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
> ## Teach Me 学习项目
> 
> 我们新加了一个 teach-me skills, 通过问答式引导帮你理解这个项目的任何模块。(调整 [sigma skill 而来](https://github.com/sanyuan0704/sanyuan-skills))
> 
> ```bash
> # 在 REPL 中直接输入
> /teach-me Claude Code 架构
> /teach-me React Ink 终端渲染 --level beginner
> /teach-me Tool 系统 --resume
> ```
> 
> ### 它能做什么
> 
> - **诊断水平** — 自动评估你对相关概念的掌握程度，跳过已知的、聚焦薄弱的
> - **构建学习路径** — 将主题拆解为 5-15 个原子概念，按依赖排序逐步推进
> - **苏格拉底式提问** — 用选项引导思考，而非直接给答案
> - **错误概念追踪** — 发现并纠正深层误解
> - **断点续学** — `--resume` 从上次进度继续
> 
> ### 学习记录
> 
> 学习进度保存在 `.claude/skills/teach-me/` 目录下，支持跨主题学习者档案。
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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[機器學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[NanmiCoder--claude-code-haha|NanmiCoder/claude-code-haha]]

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
> const concepts = ["CLI/TUI","自動化測試","機器學習"];
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

- [[2026-04-07|2026-04-07]] — 再次上榜，14.2k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，13.9k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，13.6k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，13.0k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，10.7k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，7.8k stars
