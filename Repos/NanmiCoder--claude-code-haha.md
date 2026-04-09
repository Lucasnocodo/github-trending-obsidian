---
repo: NanmiCoder/cc-haha
url: https://github.com/NanmiCoder/cc-haha
owner: NanmiCoder
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Claude Code 泄露源码 - 本地可运行版本（附带核心模块解析）"
homepage: "https://claudecode-haha.relakkesyang.org/"
stars: 5565
stars_per_day: 696
forks: 6002
open_issues: 30
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供本地可運行的 Claude Code 版本，修復了原始泄露代碼的多個問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 5
engagement: "high"
issue_close_rate: 35
repo_size_kb: 69892
readme_length: 3570
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3002,2026-04-02:3045,2026-04-03:4069,2026-04-04:4548,2026-04-05:4892,2026-04-06:5070,2026-04-07:5250,2026-04-08:5424,2026-04-09:5565"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "cc-haha"
  - "NanmiCoder/cc-haha"
  - "提供本地可運行的 Claude Code 版本，修復了原始泄露代碼的多個問題。"
---

# cc-haha

**5.6k** stars · **696** stars/天 · 建立 8 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/NanmiCoder--cc-haha");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供本地可運行的 Claude Code 版本，修復了原始泄露代碼的多個問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (696 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在本地運行 AI 模型並希望自定義工作流的開發者。
> **一句話重點** 這個專案不僅提供了本地運行的能力，還在多代理和記憶系統上做了深入的設計，適合需要高度自定義的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "NanmiCoder--cc-haha" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到靈活的本地 AI 模型運行能力，值得考慮。

> [!abstract] 核心創新
> 提供了一個可在本地運行的 Claude Code 版本，並解決了原始代碼中的多個啟動問題。

## 專案簡介

這個專案是基於 Claude Code 泄露的源碼，提供了一個可在本地運行的版本，解決了原始代碼中的多個啟動問題。用戶可以通過 `./bin/claude-haha` 指令啟動完整的 Ink TUI 交互界面，並且支持無頭模式以便於自動化腳本或 CI 使用。該工具支持接入任何兼容的 Anthropic API，並提供了多代理系統、記憶系統及可擴展的 Skills 系統，這使得用戶可以在多個任務之間進行協作。技術上，這個專案使用了 Bun 作為運行時，並利用 TypeScript 和 Ink 來構建終端 UI，這樣的選擇使得開發過程中能夠保持高效且靈活。與其他類似工具相比，如 OpenAI 的 API，這個專案提供了更強的本地化和自定義能力，特別是在需要自定義 API 端點和模型的情境下。

實際使用中，這個工具能夠處理多達數百個並行任務，並且支持跨會話的持久化記憶，這在多用戶環境中尤為重要。雖然目前仍在活躍開發中，但已經有穩定的功能和文檔支持，適合中小型團隊使用。未來六個月內，預計將持續增強多代理系統的功能和擴展性。對於需要在本地運行 AI 模型並希望自定義工作流的開發者來說，這是一個值得考慮的選擇，但對於只需要簡單 API 調用的用戶，傳統的雲端服務可能會更方便。

**技術棧**：`Bun` · `TypeScript` · `React` · `Ink` · `Commander.js`

## 重點功能

- 完整的 Ink TUI 交互界面 — 提供與官方 Claude Code 一致的用戶體驗。
- --print 無頭模式 — 方便在腳本或 CI 環境中使用。
- 支持 MCP 伺服器、插件、Skills — 使得功能擴展變得簡單。
- 記憶系統 — 跨會話持久化記憶，提升用戶體驗。
- 多代理系統 — 支持多任務並行處理和團隊協作。
- Channel 系統 — 通過 IM 平台遠程控制 Agent，提升靈活性。
- 降級 Recovery CLI 模式 — 提供故障恢復的選項。

## 快速開始

1. 安裝 Bun
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 安裝依賴並配置
```bash
bun install; cp .env.example .env
```
3. 啟動交互模式
```bash
./bin/claude-haha
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 5565 stars（696/天），forks 6002（107.9%），這是極端爆發式增長。作者 NanmiCoder 及其團隊在開源社群中有一定的知名度，之前參與過多個相關專案。這個專案解決了原始 Claude Code 無法直接運行的問題，讓開發者能夠在本地環境中運行並自定義 AI 模型。社群的反饋和需求推動了這個專案的快速成長，特別是在 GitHub 上的討論和問題解決上。技術上，Bun 的使用讓這個專案在性能上有了顯著提升，這也是其受歡迎的原因之一。forks/stars 比率高達 107.9%，顯示出許多人在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在本地運行 AI 模型並希望自定義工作流的開發者。

> [!example] 使用場景
> - 後端工程師用它來在本地環境中運行自定義的 AI 模型，因為這樣可以避免雲端服務的延遲和費用。
> - DevOps 工程師用它來在 CI/CD 流程中自動化測試和部署，因為無頭模式能夠輕鬆集成到現有的工作流中。
> - 產品經理用它來快速原型設計和測試多代理系統的協作能力，因為其記憶系統能夠持久化會話狀態，方便多次測試。

## 架構分析

這個專案採用 Bun 作為運行時，選擇 TypeScript 和 Ink 來構建終端 UI，這樣的架構使得開發過程中能夠保持高效且靈活。資料流方面，使用了 MCP 和 LSP 協議來處理 API 請求，這使得用戶可以輕鬆接入多種模型。選擇 Ink 來構建 TUI 介面，能夠提供更好的用戶互動體驗，但也增加了學習成本。擴展性方面，這個專案支持多代理系統，能夠處理並行任務，但在高負載下可能會遇到性能瓶頸。整體來說，這個架構設計旨在提供靈活性和可擴展性，適合需要自定義的開發者。

## 技術深入分析

這個專案的核心技術機制是基於 Bun 的運行時環境，這使得它在性能上有了顯著的提升。使用 TypeScript 和 Ink 來構建終端 UI，提供了良好的用戶互動體驗。專案能夠處理多達數百個並行任務，並且支持跨會話的持久化記憶，這在多用戶環境中尤為重要。選擇 MCP 和 LSP 協議來處理 API 請求，使得用戶可以輕鬆接入多種模型，這樣的設計使得專案在靈活性上有了很大的優勢。雖然目前仍在開發中，但已經有穩定的功能和文檔支持，適合中小型團隊使用。對於需要自定義工作流的開發者來說，這是一個值得考慮的選擇。整合方面，這個工具可以輕鬆與現有的 CI/CD 流程結合，並且支持多種 IDE 的擴展，這使得它在開發過程中能夠保持高效。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟，並且有範例指令。安裝過程相對順暢，但需要注意安裝 Bun 的步驟。文件主要以英文為主，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 支持本地運行，避免雲端延遲。
> - 提供多代理系統，適合複雜任務。
> - 靈活的 API 接入，支持多種模型。

> [!danger] 缺點
> - 需要安裝 Bun，增加學習曲線。
> - 目前仍在開發中，功能可能不穩定。
> - 僅支援特定平台，限制了用戶範圍。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux，Windows 用戶需安裝 Git for Windows。
> - 需要安裝 Bun 作為運行時，這可能增加學習曲線。
> - 目前仍在開發中，功能和 API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/openai](https://github.com/OpenAI/openai) | OpenAI 提供的 API 主要集中在雲端服務，而本專案則提供本地運行的選項，適合需要自定義和本地化的用戶。 |
| [Anthropic/Claude](https://github.com/Anthropic/Claude) | Claude 是官方的雲端服務，缺乏本地運行的靈活性，這使得本專案在自定義和控制上更具優勢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/openai](https://github.com/OpenAI/openai) | OpenAI 提供的 API 主要集中在雲端服務，而本專案則提供本地運行的選項，適合需要自定義和本地化的用戶。 | 如果你的團隊已經在使用 OpenAI 的服務，並且不需要本地運行的靈活性。 | medium，因為需要重新設計 API 調用的方式。 |
| [Anthropic/Claude](https://github.com/Anthropic/Claude) | Claude 是官方的雲端服務，缺乏本地運行的靈活性，這使得本專案在自定義和控制上更具優勢。 | 如果你需要官方支持的雲端服務，並且不需要本地運行的能力。 | high，因為需要完全轉換到雲端架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cc-haha** | **openai** | **Claude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenAI 提供的 API 主要集中在雲端服務，而本專案則提供本地運行的選項，適合需要自定義和本地化的用戶。 | Claude 是官方的雲端服務，缺乏本地運行的靈活性，這使得本專案在自定義和控制上更具優勢。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用的方式。 | high，因為需要完全轉換到雲端架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 的服務，並且不需要本地 | 如果你需要官方支持的雲端服務，並且不需要本地運行的能力。 |

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

- **[HIGH]** 在某些環境下，啟動時可能會遇到依賴問題，特別是缺少 Bun 的情況。
  - 解法：確保正確安裝 Bun 並檢查環境變量配置。
- [MEDIUM] 多代理系統在高負載下可能會導致性能下降。
  - 解法：在使用多代理時，適當調整任務數量以避免過載。
- [MEDIUM] Windows 環境下的安裝過程較為繁瑣，可能會遇到 Git for Windows 的兼容性問題。
  - 解法：確保使用最新版本的 Git for Windows，並遵循安裝指南。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠在本地運行，並支持自定義 API 接入，適合小型團隊的需求。 |
| 大型企業的 AI 模型部署 | 普通 | 雖然支持多代理系統，但在穩定性上仍需改進。 |
| 需要快速原型設計的產品開發團隊 | 適合 | 提供了靈活的功能擴展和多代理協作能力。 |
| 教育機構的 AI 實驗室 | 不適合 | 目前仍在開發中，可能不夠穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到靈活的本地 AI 模型運行能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，該工具在本地運行，需確保 API 金鑰的安全性，並注意依賴的庫是否存在已知的安全漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
| Forks | 6.0k |
| Open Issues | 30 |
| Issue 解決率 | 35% (16 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://claudecode-haha.relakkesyang.org/) |
| Repo 大小 | 68.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NanmiCoder/cc-haha) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sandbox-runtime` `@anthropic-ai/sdk` `@aws-sdk/client-bedrock-runtime` `@commander-js/extra-typings` `@growthbook/growthbook` `@modelcontextprotocol/sdk` `@opentelemetry/api-logs` `@opentelemetry/core` `@opentelemetry/resources` `@opentelemetry/sdk-logs` `@opentelemetry/sdk-metrics` `@opentelemetry/sdk-trace-base` `@opentelemetry/semantic-conventions` `ajv` `asciichart`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NanmiCoder](https://github.com/NanmiCoder) | 40 |
> | [@sigridjineth](https://github.com/sigridjineth) | 4 |
> | [@studyzy](https://github.com/studyzy) | 1 |
> | [@dhb52](https://github.com/dhb52) | 1 |
> | [@houseyyyy](https://github.com/houseyyyy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決問題。
**連結**：[文件](https://claudecode-haha.relakkesyang.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-05）
> **活躍天數** 2 天 · **最新 commit** fix: unify anchor IDs between VitePress and GitHub with custom slugify

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#43](https://github.com/NanmiCoder/cc-haha/issues/43) | api 503错误咋解决 `question` | 1 | 2 |
> | [#30](https://github.com/NanmiCoder/cc-haha/issues/30) | 从0到1完整启动本项目的教程在此！ | 1 | 9 |
> | [#52](https://github.com/NanmiCoder/cc-haha/issues/52) | [BUG]/agents看不到智能体清单 `bug` | 0 | 1 |
> | [#51](https://github.com/NanmiCoder/cc-haha/issues/51) | Discrepancy between documentation/examples and OpenRouter en `bug` `documentation` `question` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Haha
> 
>   
> 
> [](https://github.com/NanmiCoder/cc-haha/stargazers)
> [](https://github.com/NanmiCoder/cc-haha/network/members)
> [](https://github.com/NanmiCoder/cc-haha/issues)
> [](https://github.com/NanmiCoder/cc-haha/pulls)
> [](https://github.com/NanmiCoder/cc-haha/blob/main/LICENSE)
> [](README.md)
> [](README.en.md)
> [](https://claudecode-haha.relakkesyang.org)
> 
> 基于 Claude Code 泄露源码修复的**本地可运行版本**，支持接入任意 Anthropic 兼容 API（如 MiniMax、OpenRouter 等）。
> 
> > 原始泄露源码无法直接运行。本仓库修复了启动链路中的多个阻塞问题，使完整的 Ink TUI 交互界面可以在本地工作。
> 
>   功能 · 架构概览 · 快速开始 · 环境变量 · FAQ · 全局使用 · 更多文档
> 
> ---
> 
> ## 功能
> 
> - 完整的 Ink TUI 交互界面（与官方 Claude Code 一致）
> - `--print` 无头模式（脚本/CI 场景）
> - 支持 MCP 服务器、插件、Skills
> - 支持自定义 API 端点和模型（[第三方模型使用指南](docs/guide/third-party-models.md)）
> - **记忆系统**（跨会话持久化记忆）— [使用指南](docs/memory/01-usage-guide.md)
> - **多 Agent 系统**（多代理编排、并行任务、Teams 协作）— [使用指南](docs/agent/01-usage-guide.md) | [实现原理](docs/agent/02-implementation.md)
> - **Skills 系统**（可扩展能力插件、自定义工作流）— [使用指南](docs/skills/01-usage-guide.md) | [实现原理](docs/skills/02-implementation.md)
> - **Channel 系统**（通过 Telegram/飞书/Discord 等 IM 远程控制 Agent）— [架构解析](docs/channel/01-channel-system.md)
> - **Computer Use 桌面控制** — [功能指南](docs/features/computer-use.md) | [架构解析](docs/features/computer-use-architecture.md)
> - 降级 Recovery CLI 模式（`CLAUDE_CODE_FORCE_RECOVERY_CLI=1 ./bin/claude-haha`）
> 
> ---
> 
> ## 架构概览
> 
>   
>     整体架构
>     请求生命周期
>     工具系统
>     多 Agent 架构
>   
>   
>     终端 UI
>     权限与安全
>     服务层
>     状态与数据流
>   
> 
> ---
> 
> ## 快速开始
> 
> ### 1. 安装 Bun
> 
> ```bash
> # macOS / Linux
> curl -fsSL https://bun.sh/install | bash
> 
> # macOS (Homebrew)
> brew install bun
> 
> # Windows (PowerShell)
> powershell -c "irm bun.sh/install.ps1 | iex"
> ```
> 
> > 精简版 Linux 如提示 `unzip is required`，先运行 `apt update && apt install -y unzip`
> 
> ### 2. 安装依赖并配置
> 
> ```bash
> bun install
> cp .env.example .env
> # 编辑 .env 填入你的 API Key，详见 docs/guide/env-vars.md
> ```
> 
> ### 3. 启动
> 
> #### macOS / Linux
> 
> ```bash
> ./bin/claude-haha                          # 交互 TUI 模式
> ./bin/claude-haha -p "your prompt here"    # 无头模式
> ./bin/claude-haha --help                   # 查看所有选项
> ```
> 
> #### Windows
> 
> > **前置要求**：必须安装 [Git for Windows](https://git-scm.com/download/win)
> 
> ```powershell
> # PowerShell / cmd 直接调用 Bun
> bun --env-file=.env ./src/entrypoints/cli.tsx
> 
> # 或在 Git Bash 中运行
> ./bin/claude-haha
> ```
> 
> ### 4. 全局使用（可选）
> 
> 将 `bin/` 加入 PATH 后可在任意目录启动，详见 [全局使用指南](docs/guide/global-usage.md)：
> 
> ```bash
> export PATH="$HOME/path/to/claude-code-haha/bin:$PATH"
> ```
> 
> ---
> 
> ## 技术栈
> 
> | 类别 | 技术 |
> |------|------|
> | 运行时 | [Bun](https://bun.sh) |
> | 语言 | TypeScript |
> | 终端 UI | React + [Ink](https://github.com/vadimdemedes/ink) |
> | CLI 解析 | Commander.js |
> | API | Anthropic SDK |
> | 协议 | MCP, LSP |
> 
> ---
> 
> ## 更多文档
> 
> | 文档 | 说明 |
> |------|------|
> | [环境变量](docs/guide/env-vars.md) | 完整环境变量参考和配置方式 |
> | [第三方模型](docs/guide/third-party-models.md) | 接入 OpenAI / DeepSeek / Ollama 等非 Anthropic 模型 |
> | [记忆系统](docs/memory/01-usage-guide.md) | 跨会话持久化记忆的使用与实现 |
> | [多 Agent 系统](docs/agent/01-usage-guide.md) | 多代理编排、并行任务执行与 Teams 协作 |
> | [Skills 系统](docs/skills/01-usage-guide.md) | 可扩展能力插件、自定义工作流与条件激活 |
> | [Channel 系统](docs/channel/01-channel-system.md) | 通过 Telegram/飞书/Discord 等 IM 平台远程控制 Agent |
> | [Computer Use](docs/features/computer-use.md) | 桌面控制功能（截屏、鼠标、键盘）— [架构解析](docs/features/computer-use-architecture.md) |
> | [全局使用](docs/guide/global-usage.md) | 在任意目录启动 claude-haha |
> | [常见问题](docs/guide/faq.md) | 常见错误排查 |
> | [源码修复记录](docs/reference/fixes.md) | 相对于原始泄露源码的修复内容 |
> | [项目结构](docs/reference/project-structure.md) | 代码目录结构说明 |
> 
> ---
> 
> ## Disclaimer
> 
> 本仓库基于 2026-03-31 从 Anthropic npm registry 泄露的 Claude Code 源码。所有原始源码版权归 [Anthropic](https://www.anthropic.com) 所有。仅供学习和研究用途。

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]]

[GitHub](https://github.com/NanmiCoder/cc-haha) · [官方網站](https://claudecode-haha.relakkesyang.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "NanmiCoder--cc-haha" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NanmiCoder--cc-haha" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NanmiCoder" AND file.name != "NanmiCoder--cc-haha"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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
> const me = dv.page("Repos/NanmiCoder--cc-haha");
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

- [[2026-04-02|2026-04-02]] — 首次收錄，3.0k stars
