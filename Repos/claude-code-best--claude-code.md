---
repo: claude-code-best/claude-code
url: https://github.com/claude-code-best/claude-code
owner: claude-code-best
owner_type: User
language: TypeScript
license: N/A
description: "原汁原昧 Claude Code 可运行,可构建, 可调试版; Typescript 类型全修复; 企业级可靠性; 安全无毒, lock 文件保真, 可直接 bun i; bun run dev 启动"
homepage: "https://ccb.agent-aura.top/"
stars: 14877
stars_per_day: 1860
forks: 14640
open_issues: 20
created: 2026-03-31
pushed_at: 2026-04-09
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
use_case: "提供一個可運行、可構建、可調試的 Claude Code 版本，並修復 TypeScript 類型問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-10"
contributor_count: 5
engagement: "high"
issue_close_rate: 83
repo_size_kb: 63605
readme_length: 4524
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:7790,2026-04-02:7914,2026-04-03:10736,2026-04-03:10850,2026-04-04:13023,2026-04-04:13026,2026-04-05:13577,2026-04-05:13580,2026-04-06:13897,2026-04-06:13908,2026-04-07:14198,2026-04-07:14224,2026-04-08:14619,2026-04-09:14877"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code"
  - "claude-code-best/claude-code"
  - "提供一個可運行、可構建、可調試的 Claude Code 版本，並修復 TypeScript 類型問題。"
---

# claude-code

**14.9k** stars · **1.9k** stars/天 · 建立 8 天前 · TypeScript · 未標註授權

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
> 提供一個可運行、可構建、可調試的 Claude Code 版本，並修復 TypeScript 類型問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.9k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在終端中使用 AI 編程助手的開發者，特別是對 TypeScript 和 Bun 有興趣的人。
> **一句話重點** CCB 提供了一個靈活且功能豐富的 CLI 工具，讓開發者能夠快速構建和調試 AI 應用。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的 AI 開發工具，值得嘗試。

> [!abstract] 核心創新
> 提供了企業級的 AI 編程助手，並支持多種 API 的兼容性。

## 專案簡介

Claude Code Best (CCB) 是一個逆向工程的 CLI 工具，旨在重現 Anthropic 的 Claude Code 功能，讓開發者能在終端中使用 AI 編程助手。用戶可以通過 `bun i -g claude-code-best` 安裝，並使用 `ccb` 命令啟動工具。該工具支持多種功能開關，通過環境變數啟用，並提供了對 OpenAI 及其他 API 的兼容性，讓開發者能夠無縫接入不同的服務。其核心架構基於 Bun，並使用 TypeScript 進行開發，這意味著它能夠充分利用現代 JavaScript 的特性，並且在性能上優於傳統的 Node.js 應用。與其他 CLI 工具相比，如 OpenAI 的官方 API，CCB 提供了更靈活的功能開關和更強的自定義能力，特別是在企業環境中。

實際使用中，開發者可以利用 `/login` 命令配置 API 接入，並使用 `/teach-me` 功能進行學習和診斷，這對於新手非常友好。該專案目前處於活躍開發中，擁有良好的社群支持，並且解決率高達 83%。不過，使用者需注意，該工具依賴於最新版本的 Bun，且在某些環境下可能會遇到網絡問題。整體來看，CCB 是一個值得探索的工具，特別適合需要快速開發和調試 AI 應用的開發者。

**技術棧**：`TypeScript` · `Bun >= 1.3.11`

## 重點功能

- 即時啟動 — 使用 `ccb` 命令快速啟動 AI 編程助手。
- 多功能開關 — 通過環境變數啟用不同功能，如 `FEATURE_BUDDY=1`。
- API 兼容性 — 支持多種 API 接入，如 OpenAI 和 Anthropic 兼容服務。
- 學習輔助 — `/teach-me` 功能提供針對性學習路徑和診斷。
- 企業級可靠性 — 針對企業需求進行了多項功能優化和修復。

## 快速開始

1. 全局安裝工具
```bash
bun i -g claude-code-best
```
2. 信任安裝包
```bash
bun pm -g trust claude-code-best
```
3. 啟動工具
```bash
ccb
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Bun 並全局安裝 claude-code-best",
  "指令": "ccb",
  "預期輸出": "啟動 Claude Code 互動式 AI 編程助手"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 14877 stars（1860/天），forks 14640（98.4%），這顯示出極高的社群參與度。這個專案由一群活躍的開發者維護，並且解決了開發者在使用 Claude Code 時遇到的許多問題，特別是在 TypeScript 的類型修復和企業級可靠性方面。隨著開源社群對 AI 工具的需求增加，這個專案自然吸引了大量關注。社群中活躍的討論和問題解決也促進了其快速增長。

## 適合誰使用

**目標受眾**：需要在終端中使用 AI 編程助手的開發者，特別是對 TypeScript 和 Bun 有興趣的人。

> [!example] 使用場景
> - 後端工程師用它來在終端中快速調試 AI 代碼，因為其提供了即時反饋和多種功能開關，能夠提升開發效率。
> - AI 開發者用它來整合 OpenAI API，因為其兼容性和靈活配置讓接入過程變得簡單。
> - 新手開發者用它來學習 AI 編程，因為其 `/teach-me` 功能能夠提供針對性的學習路徑和診斷。

## 架構分析

CCB 採用 Bun 作為執行環境，這使得它能夠利用 Bun 的高效性能和現代 JavaScript 特性。整體架構設計為模組化，支持多個功能開關，並且通過環境變數進行配置。資料流方面，使用者的命令通過 CLI 接口進入，經過多層處理後，最終返回結果。這種設計使得功能擴展變得容易，但也可能導致初學者在配置環境變數時遇到困難。選擇 Bun 而非 Node.js 是因為其在性能和包管理上的優勢，但這也意味著對 Bun 的版本依賴性較高，可能在未來造成兼容性問題。

## 技術深入分析

CCB 的核心技術基於 Bun，這是一個高效的 JavaScript 執行環境，專為現代應用設計。它使用 TypeScript 進行開發，這不僅提高了代碼的可讀性和可維護性，還減少了潛在的錯誤。在性能方面，CCB 能夠處理大量的即時請求，並且支持多個功能模組的動態加載，這使得它在開發過程中能夠快速響應用戶需求。選擇 Bun 而非 Node.js 是因為其在啟動速度和包管理上的優勢，這對於需要快速迭代的開發環境尤為重要。然而，這也帶來了對 Bun 版本的依賴，未來可能會影響到兼容性和穩定性。CCB 的設計考慮到了易用性，特別是在新手使用時，提供了詳細的配置指導和學習工具，這使得它在開發者中受到了廣泛的歡迎。整體來看，CCB 是一個值得關注的開發工具，尤其適合需要快速開發和調試 AI 應用的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，包含了安裝和使用的具體步驟。安裝過程相對順暢，但需要注意 Bun 的版本要求。文件中提供了良好的入門指導，並且有多語言支持，這對於不同背景的開發者非常友好。

## 優缺點分析

> [!success] 優點
> - 即時反饋和交互式編程體驗，提升開發效率。
> - 靈活的功能開關，支持多種 API 接入。
> - 良好的社群支持和活躍的開發者社群。

> [!danger] 缺點
> - 對 Bun 的依賴性高，需保持更新。
> - 在某些地區網絡連接不穩定，影響使用體驗。
> - 新手可能需要時間適應環境變數的配置。

> [!warning] 注意事項
> - 需要最新版本的 Bun，否則可能出現各種錯誤。
> - 在某些地區，GitHub 連接可能不穩定，影響安裝和更新。
> - 功能開關的使用需要一定的環境變數配置，對新手可能有一定學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 提供了多種示例和最佳實踐，但缺乏 CCB 的即時交互和功能開關。 |
| [anthropic/claude](https://github.com/anthropic/claude) | 官方版本提供了穩定的 API 接入，但不如 CCB 靈活，且無法進行本地調試。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/openai-cookbook](https://github.com/openai/openai-cookbook) | 提供了多種示例和最佳實踐，但缺乏 CCB 的即時交互和功能開關。 | 如果你需要一個穩定的 API 接入和豐富的示例，這個工具會更合適。 | medium - 需要重新調整 API 接入方式和學習新工具的使用。 |
| [anthropic/claude](https://github.com/anthropic/claude) | 官方版本提供了穩定的 API 接入，但不如 CCB 靈活，且無法進行本地調試。 | 如果你的團隊需要官方支持和穩定性，則應選擇官方版本。 | high - 需要重構現有代碼以適應官方 API 的使用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code** | **openai-cookbook** | **claude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供了多種示例和最佳實踐，但缺乏 CCB 的即時交互和功能開關。 | 官方版本提供了穩定的 API 接入，但不如 CCB 靈活，且無法進行本地調試。 |
> | 遷移成本 | - | medium - 需要重新調整 API 接入方式和學習新工具的使用。 | high - 需要重構現有代碼以適應官方 API 的使用。 |
> | 適用場景 | 主要場景 | 如果你需要一個穩定的 API 接入和豐富的示例，這個工具會更 | 如果你的團隊需要官方支持和穩定性，則應選擇官方版本。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能因網絡問題而失敗
  - 解法：使用代理或設置環境變數以改善網絡連接
- [MEDIUM] 首次運行時可能需要配置環境變數，對新手不友好
  - 解法：參考官方文檔進行配置
- [MEDIUM] 某些功能開關可能在不同版本的 Bun 中表現不一致
  - 解法：保持 Bun 更新到最新版本以避免問題

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 靈活的功能開關和即時反饋能夠加速開發過程。 |
| 大型企業的 AI 開發團隊 | 適合 | 支持多種 API 接入，能夠滿足企業需求。 |
| 學術研究團隊進行 AI 實驗 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 個人開發者的 AI 項目 | 非常適合 | 提供了良好的學習資源和支持，適合新手使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的 AI 開發工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈中沒有已知的安全漏洞，使用於 CI/CD pipeline 時相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CCB 最常與 Bun 和 TypeScript 搭配使用，通常在開發階段進行集成。在一個使用 Bun 的專案中，你可以通過 `bun i -g claude-code-best` 安裝並使用 `ccb` 命令啟動工具。該工具支持與 GitHub Actions 集成，方便在 CI/CD 流程中使用。與主流 IDE（如 VS Code）相容，能夠輕鬆設置調試環境。整合過程中，最常見的問題是環境變數配置不當，這需要開發者仔細檢查。

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
| Forks | 14.6k |
| Open Issues | 20 |
| Issue 解決率 | 83% (95 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://ccb.agent-aura.top/) |
| Repo 大小 | 62.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/claude-code-best/claude-code) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude-code-best](https://github.com/claude-code-best) | 198 |
> | [@2228293026](https://github.com/2228293026) | 16 |
> | [@amDosion](https://github.com/amDosion) | 4 |
> | [@smallflyingpig](https://github.com/smallflyingpig) | 3 |
> | [@bonerush](https://github.com/bonerush) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，定期解決問題並更新功能。
**連結**：[文件](https://ccb.agent-aura.top/) · [Discord](https://discord.gg/qZU6zS7Q)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-09）
> **活躍天數** 2 天 · **最新 commit** 修复使用/help 后再按左右键报错 (#212)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/claude-code-best/claude-code/issues/13) | [留影专用]: 大家想留影就到这里来吧 | 26 | 136 |
> | [#154](https://github.com/claude-code-best/claude-code/issues/154) | Crab Code -- 受本项目启发，正在用 Rust 重写 Claude Code | 2 | 4 |
> | [#163](https://github.com/claude-code-best/claude-code/issues/163) | You are impressive! I recently began exploring AI skill deve | 1 | 0 |
> | [#131](https://github.com/claude-code-best/claude-code/issues/131) | 希望大佬研究pipe，这样可以复用官方agent teams land的代码实现群控. | 1 | 1 |

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
> - ✅ [x] V5 — [Sentry](https://ccb.agent-aura.top/docs/internals/sentry-setup) / [GrowthBook](https://ccb.agent-aura.top/docs/internals/growthbook-adapter) 企业监控、[自定义 Login](https://ccb.agent-aura.top/docs/features/custom-platform-login)、[OpenAI 兼容](https://ccb.agent-aura.top/docs/plans/openai-compatibility)、[Web Search](https://ccb.agent-aura.top/docs/features/web-browser-tool)、[Computer Use](https://ccb.agent-aura.top/docs/features/computer-use) / [Chrome Use](https://ccb.agent-aura.top/docs/features/claude-in-chrome-mcp)、[Voice Mode](https://ccb.agent-aura.top/docs/features/voice-mode)、[Bridge Mode](https://ccb.agent-aura.top/docs/features/bridge-mode)、[/dream 记忆整理](https://ccb.agent-aura.top/docs/features/auto-dream)
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
> ```
> 
> ⚠️ 国内对 github 网络较差的, 需要先设置这个环境变量
> 
> ```bash
> DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1
> ```
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
> ⚠️ 国内对 github 网络较差的,可以使用这个环境变量
> 
> ```bash
> DEFAULT_RELEASE_BASE=https://ghproxy.net/https://github.com/microsoft/ripgrep-prebuilt/releases/download/v15.0.1
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
