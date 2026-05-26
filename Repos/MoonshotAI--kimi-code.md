---
repo: MoonshotAI/kimi-code
url: https://github.com/MoonshotAI/kimi-code
owner: MoonshotAI
owner_type: Organization
language: TypeScript
license: MIT
description: "The Starting Point for Next-Gen Agents"
homepage: "https://moonshotai.github.io/kimi-code/"
stars: 500
stars_per_day: 167
forks: 30
open_issues: 15
created: 2026-05-22
pushed_at: 2026-05-25
first_seen: 2026-05-26
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-26
use_case: "提供一個終端機中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令及選擇後續步驟。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 5
engagement: "low"
issue_close_rate: 6
repo_size_kb: 5918
readme_length: 3517
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-26"
star_history: "2026-05-26:500"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "kimi-code"
  - "MoonshotAI/kimi-code"
  - "提供一個終端機中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令及選擇後續步驟。"
---

# kimi-code

**500** stars · **167** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/MoonshotAI--kimi-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供一個終端機中的 AI 編碼代理，能夠讀取和編輯代碼、執行命令及選擇後續步驟。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (167 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在終端機中使用 AI 助手進行編碼和調試的開發者。
> **一句話重點** Kimi Code CLI 的設計讓 AI 助手能夠在終端中無縫運行，顯著提升了開發者的工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "MoonshotAI--kimi-code" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的編碼助手，值得嘗試。

> [!abstract] 核心創新
> 提供一個無需 Node.js 環境的單一二進位分發 AI 編碼代理。

## 專案簡介

Kimi Code CLI 是一個設計用於終端機的 AI 編碼代理，能夠讀取和編輯代碼、執行 shell 命令、搜索檔案、抓取網頁，並根據回饋選擇下一步行動。用戶只需在終端中執行 `kimi` 指令，並進行 OAuth 登入，即可開始與代理互動。這個工具的賣點在於其單一二進位分發，無需 Node.js 環境，啟動速度極快，並提供專門設計的 TUI 介面，適合長時間的專注工作。它還支持視頻輸入，讓代理能夠理解難以用文字描述的內容，並具備 AI 原生的 MCP 配置能力，讓用戶可以輕鬆管理模型上下文協議。使用者可以透過內建的子代理來進行更專注的工作，並在關鍵時刻執行本地命令以確保安全性。這些設計使得 Kimi Code CLI 在處理複雜任務時，能夠保持高效與靈活。

**技術棧**：`TypeScript 6.0.2` · `pnpm 10.33.0`

## 重點功能

- 單一二進位分發 — 只需一條命令安裝，無需 Node.js 環境。
- 快速啟動 — TUI 在毫秒內準備就緒，無需等待。
- 專門設計的 TUI — 針對長時間的專注工作進行優化。
- 視頻輸入 — 支持將視頻錄製或演示片段放入聊天中，讓代理理解難以用文字描述的內容。
- AI 原生 MCP 配置 — 透過 `/mcp-config` 命令輕鬆管理模型上下文協議。
- 子代理支持 — 在隔離的上下文中調度內建的 `coder`、`explore` 和 `plan` 子代理。
- 生命週期鉤子 — 在關鍵時刻執行本地命令以確保安全性。

## 快速開始

1. 安裝 Kimi Code CLI
```bash
curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
```
2. 啟動 Kimi Code CLI
```bash
cd your-project && kimi
```
3. 登入以開始使用
```bash
/login
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Kimi Code CLI",
  "kimi --version",
  "# 預期輸出：顯示 Kimi Code CLI 的版本號"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 500 stars（167/天），forks 30（6.0%），顯示出一定的社群關注。這個專案的主要貢獻者來自 Moonshot AI 團隊，過去在 AI 代理領域有豐富的經驗。Kimi Code CLI 解決了傳統編碼工具無法有效整合 AI 代理的痛點，讓開發者能夠在終端中直接進行代碼操作。近期的推廣活動和社群討論也可能促進了它的快速增長。這個工具的出現正好契合了開發者對於更智能化編碼助手的需求，尤其是在 AI 技術逐漸成熟的背景下。

## 適合誰使用

**目標受眾**：希望在終端機中使用 AI 助手進行編碼和調試的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動生成 API 文檔，因為手動維護文檔容易出錯且耗時。
> - 前端開發者用它來快速調試代碼，因為能夠即時執行命令並獲得反饋，提升開發效率。
> - 資料科學家用它來分析數據集，因為可以直接在終端中運行查詢並獲得即時結果。

## 架構分析

Kimi Code CLI 採用單一二進位架構，這樣的設計使得用戶可以輕鬆安裝和使用，而不需要繁瑣的環境配置。資料流中，使用者透過終端啟動 Kimi Code，然後進行 OAuth 登入，接著可以直接發送命令給 AI 代理。這種設計的優勢在於簡化了使用者的入門門檻，但代價是可能無法充分利用 Node.js 生態系統的某些功能。整體架構的擴展性良好，因為它可以輕鬆集成其他模型和服務，但在某些高負載情況下可能會遇到性能瓶頸。

## 技術深入分析

Kimi Code CLI 的核心技術機制是基於 TypeScript 開發的單一二進位應用，這使得用戶無需安裝 Node.js 環境即可使用。其使用的 TUI 技術讓用戶能夠在終端中進行直觀的交互，並且能夠快速啟動，這對於需要長時間專注的開發者來說是個優勢。效能方面，由於其設計為單一二進位，啟動時間極短，幾乎可以即時響應用戶的指令。設計取捨上，選擇 TypeScript 使得代碼可讀性和可維護性提高，但也可能增加學習曲線，特別是對於不熟悉該語言的開發者。技術風險方面，若未來需要擴展更多功能，可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，Kimi Code CLI 可以與現有的 CI/CD 流程友好整合，但需要注意與其他工具的相容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和快速入門的詳細指導。安裝過程順暢，無需額外配置。文件中有多語言支持，方便不同語言的用戶使用。

## 優缺點分析

> [!success] 優點
> - 快速安裝和啟動，無需繁瑣的環境配置。
> - 專門設計的 TUI 介面，提升使用體驗。
> - 支持視頻輸入，增強代理的理解能力。

> [!danger] 缺點
> - 僅限於特定平台，Windows 用戶需額外步驟。
> - 目前不支持 Python，對於習慣使用 Python 的開發者不友好。
> - 依賴於 Node.js 的版本，可能影響某些用戶的使用。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux，Windows 用戶需使用 PowerShell。
> - 目前不支持 Python 版本，僅限 TypeScript 實作。
> - 需要 Node.js 版本 24.15.0 或更高。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理功能，但主要集中在圖形化界面上，適合需要視覺化操作的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼分析和重構，適合需要深度代碼理解的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 用於圖形化界面的 AI 代理，適合需要視覺化操作的用戶。 | 如果你的團隊需要一個圖形化的 AI 代理來進行代碼操作。 | medium，因為需要轉換使用習慣和操作方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼分析和重構，提供更深入的代碼理解能力。 | 如果你的工作重心在於代碼質量和重構，而不僅僅是執行命令。 | low，因為兩者的基本操作概念相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kimi-code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 用於圖形化界面的 AI 代理，適合需要視覺化操作的用戶。 | 專注於代碼分析和重構，提供更深入的代碼理解能力。 |
> | 遷移成本 | - | medium，因為需要轉換使用習慣和操作方式。 | low，因為兩者的基本操作概念相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個圖形化的 AI 代理來進行代碼操作。 | 如果你的工作重心在於代碼質量和重構，而不僅僅是執行命令。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Linux 發行版上安裝可能會遇到權限問題
  - 解法：使用 sudo 執行安裝命令
- [MEDIUM] 首次啟動時可能需要額外的配置
  - 解法：參考官方文檔進行配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行專案開發 | 非常適合 | 提供即時反饋和代碼操作，提升開發效率。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人開發者進行 side project | 適合 | 簡單易用，適合快速迭代。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的編碼助手，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅在本地執行命令，不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
| Forks | 30 |
| Open Issues | 15 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://moonshotai.github.io/kimi-code/) |
| Repo 大小 | 5.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MoonshotAI/kimi-code) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@arethetypeswrong/cli` `@changesets/changelog-github` `@changesets/cli` `@microsoft/api-extractor` `@types/node` `@vitest/coverage-v8` `lint-staged` `oxlint` `oxlint-tsgolint` `publint` `sherif` `simple-git-hooks` `tsdown` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liruifengv](https://github.com/liruifengv) | 7 |
> | [@kermanx](https://github.com/kermanx) | 3 |
> | [@wbxl2000](https://github.com/wbxl2000) | 3 |
> | [@sailist](https://github.com/sailist) | 2 |
> | [@RealKai42](https://github.com/RealKai42) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個 commit 和開放的問題討論。
**連結**：[文件](https://moonshotai.github.io/kimi-code/en/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-25 ~ 2026-05-25）
> **活躍天數** 1 天 · **最新 commit** feat: flatten tool call records (#25)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/MoonshotAI/kimi-code/issues/21) | 什么时候支持Memory `enhancement` | 2 | 0 |
> | [#39](https://github.com/MoonshotAI/kimi-code/issues/39) | Support kimi web `enhancement` | 1 | 0 |
> | [#37](https://github.com/MoonshotAI/kimi-code/issues/37) | 想问下 kimi 团队为什么还是决定放弃 python 版的 kimi-cli 转而重新起一个 ts 的 kimi-co | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Kimi Code CLI
> 
> [](LICENSE) [](https://moonshotai.github.io/kimi-code/en/) 
> [Documentation](https://moonshotai.github.io/kimi-code/en/) · [Issues](https://github.com/MoonshotAI/kimi-code/issues) · [中文](README.zh-CN.md)
> 
> ## What is Kimi Code CLI
> 
> Kimi Code CLI is an AI coding agent that runs in your terminal — it can read and edit code, run shell commands, search files, fetch web pages, and choose the next step based on the feedback it receives. It works out of the box with Moonshot AI’s Kimi models and can also be configured to use other compatible providers.
> 
> ## Install
> 
> Install with the official script. No Node.js required.
> 
> - **macOS or Linux**:
> 
> ```sh
> curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
> ```
> 
> - **Windows (PowerShell)**:
> 
> ```powershell
> irm https://code.kimi.com/kimi-code/install.ps1 | iex
> ```
> 
> Then, run it with a new shell session:
> 
> ```sh
> kimi --version
> ```
> 
> For npm install, upgrade, uninstall, see [Getting Started](https://moonshotai.github.io/kimi-code/en/guides/getting-started).
> 
> ## Quick Start
> 
> Open a project and start the interactive UI:
> 
> ```sh
> cd your-project
> kimi
> ```
> 
> On first launch, run `/login` inside Kimi Code CLI and choose either Kimi Code OAuth or a Moonshot AI Open Platform API key. After login, try your first task:
> 
> ```
> Take a look at this project and explain its main directories.
> ```
> 
> ## Key Features
> 
> - **Single-binary distribution.** Install with one command: no Node.js setup, PATH gymnastics, or global module conflicts.
> - **Blazing-fast startup.** The TUI is ready in milliseconds, so starting a session never feels heavy.
> - **Purpose-built TUI.** A carefully tuned interface for long, focused agent sessions.
> - **Video input.** Drop a screen recording or demo clip into the chat, and let the agent watch what is hard to describe in words.
> - **AI-native MCP configuration.** Add, edit, and authenticate Model Context Protocol servers conversationally with `/mcp-config`, without hand-editing JSON.
> - **Subagents for focused, parallel work.** Dispatch built-in `coder`, `explore`, and `plan` subagents in isolated contexts while keeping the main conversation clean.
> - **Lifecycle hooks.** Run local commands at key points to gate risky tool calls, audit decisions, trigger desktop notifications, or connect to your own automation.
> 
> ## Docs
> 
> - [Getting Started](https://moonshotai.github.io/kimi-code/en/guides/getting-started)
> - [Interaction and approvals](https://moonshotai.github.io/kimi-code/en/guides/interaction)
> - [Sessions](https://moonshotai.github.io/kimi-code/en/guides/sessions)
> - [Configuration](https://moonshotai.github.io/kimi-code/en/configuration/config-files)
> - [Command reference](https://moonshotai.github.io/kimi-code/en/reference/kimi-command)
> 
> ## Develop
> 
> Requirements: Node.js ≥ 24.15.0, pnpm 10.33.0.
> 
> ```sh
> git clone https://github.com/MoonshotAI/kimi-code.git
> cd kimi-code
> pnpm install
> ```
> 
> ```sh
> pnpm dev:cli    # run the CLI in dev mode
> pnpm test       # run tests
> pnpm typecheck  # TypeScript check
> pnpm lint       # oxlint
> pnpm build      # build all packages
> ```
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution guide.
> 
> ## Community
> 
> - [Issues](https://github.com/MoonshotAI/kimi-code/issues)
> - For security vulnerabilities, see [SECURITY.md](SECURITY.md).
> 
> ## Acknowledgements
> 
> Our TUI is built on top of [`pi-tui`](https://github.com/earendil-works/pi-mono/tree/main/packages/tui). We thank the authors of `pi-tui` for their valuable work.
> 
> ## License
> 
> Released under the [MIT License](LICENSE).

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/MoonshotAI/kimi-code) · [官方網站](https://moonshotai.github.io/kimi-code/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "MoonshotAI--kimi-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","AI 代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MoonshotAI--kimi-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MoonshotAI--kimi-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MoonshotAI" AND file.name != "MoonshotAI--kimi-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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
> const me = dv.page("Repos/MoonshotAI--kimi-code");
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

> **2026-05-26** — 首次收錄
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

- [[2026-05-26|2026-05-26]] — 首次收錄，500 stars
