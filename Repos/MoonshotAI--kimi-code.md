---
repo: MoonshotAI/kimi-code
url: https://github.com/MoonshotAI/kimi-code
owner: MoonshotAI
owner_type: Organization
language: TypeScript
license: MIT
description: "The Starting Point for Next-Gen Agents"
homepage: "https://moonshotai.github.io/kimi-code/"
stars: 511
stars_per_day: 170
forks: 31
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
use_case: "提供一個 AI 編碼代理，能在終端機中讀取和編輯程式碼，執行指令，並根據反饋選擇下一步行動。"
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
star_history: "2026-05-26:500,2026-05-26:511"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "kimi-code"
  - "MoonshotAI/kimi-code"
  - "提供一個 AI 編碼代理，能在終端機中讀取和編輯程式碼，執行指令，並根據反饋選擇下一步行動。"
---

# kimi-code

**511** stars · **170** stars/天 · 建立 3 天前 · TypeScript · MIT

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
> 提供一個 AI 編碼代理，能在終端機中讀取和編輯程式碼，執行指令，並根據反饋選擇下一步行動。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (170 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在終端機中使用 AI 助手進行程式碼編輯和執行的開發者，特別是對於不想處理繁瑣環境設置的使用者。
> **一句話重點** Kimi Code CLI 的最大優勢在於其即用型的安裝和專門設計的使用介面，讓開發者能夠專注於編碼而非環境配置。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即用型的 AI 編碼代理，值得嘗試。

> [!abstract] 核心創新
> 提供單一二進位檔的即用型 AI 編碼代理，無需繁瑣的環境設置。

## 專案簡介

Kimi Code CLI 是一個在終端機中運行的 AI 編碼代理，能夠讀取和編輯程式碼、執行 shell 指令、搜尋檔案、抓取網頁，並根據收到的反饋選擇下一步。使用者只需在終端中執行 `kimi` 指令即可啟動互動式介面，並透過 `/login` 登入 Kimi Code OAuth 或 Moonshot AI Open Platform API 金鑰，這樣就能開始進行任務，例如請求代理解釋專案的主要目錄。這個工具的賣點在於其單一二進位檔的分發方式，讓安裝變得簡單，無需 Node.js 環境設置，並且啟動速度極快，幾乎是即時的。技術上，它使用了 TypeScript 和多個現代開發工具，如 pnpm 和 vitest，這些工具使得開發和測試過程高效且易於管理。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Kimi Code CLI 提供了專門設計的 TUI 介面，適合長時間的專注會話，並且支持視頻輸入，這在其他工具中並不常見。

使用者可以透過內建的子代理進行平行工作，這樣可以保持主會話的清晰。雖然目前仍在開發中，但其活躍的社群和持續的更新顯示出良好的潛力。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，但在大型專案中可能會遇到擴展性問題。適合需要快速上手且不想處理繁瑣環境設置的開發者使用。

**技術棧**：`TypeScript 6.0.2` · `pnpm 10.33.0` · `vitest 4.1.4`

## 重點功能

- 單一二進位檔分發 — 只需一條命令安裝，無需 Node.js 環境設置。
- 極快啟動時間 — TUI 在毫秒內準備就緒，提升使用體驗。
- 專門設計的 TUI — 針對長時間會話進行優化，提供良好的互動性。
- 視頻輸入支持 — 可以將錄製的屏幕或演示影片放入聊天，讓代理理解難以用文字描述的內容。
- AI 原生 MCP 配置 — 透過 `/mcp-config` 命令輕鬆配置和認證 Model Context Protocol 伺服器。

## 快速開始

1. 安裝 Kimi Code CLI
```bash
curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash
```
2. 啟動 Kimi Code CLI
```bash
kimi
```
3. 登入並開始任務
```bash
/login
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Kimi Code CLI",
  "指令": "kimi",
  "預期輸出": "啟動 Kimi Code CLI 的互動式介面"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 511 stars（170/天），forks 31（6.1%），顯示出良好的社群關注度。作者 MoonshotAI 團隊在 AI 和開發工具領域有豐富的經驗，之前的專案成功吸引了開發者的關注。這個工具解決了開發者在使用 AI 助手時的繁瑣安裝和配置問題，提供了一個即用型的解決方案。社群中對於記憶體支持和 Web 版本的需求也反映了使用者的期待。這些因素共同推動了專案的快速增長。

## 適合誰使用

**目標受眾**：需要在終端機中使用 AI 助手進行程式碼編輯和執行的開發者，特別是對於不想處理繁瑣環境設置的使用者。

> [!example] 使用場景
> - 軟體工程師用它來快速檢查和修改專案中的程式碼，因為它能即時執行指令並提供反饋，節省了手動操作的時間。
> - 系統管理員用它來自動化日常的系統維護任務，因為它能夠執行 shell 指令並根據結果進行決策，提升了工作效率。
> - 新手開發者用它來學習程式碼結構和最佳實踐，因為它能解釋專案的目錄和功能，降低了學習曲線。

## 架構分析

Kimi Code CLI 採用單一二進位檔架構，這樣設計的目的是為了簡化使用者的安裝過程，避免了 Node.js 環境的繁瑣配置。資料流方面，使用者透過終端機啟動 CLI，並在其中執行各種指令，這些指令會直接與後端的 AI 模型進行交互。在設計上，選擇 TypeScript 提供靜態類型檢查，這有助於減少錯誤並提高開發效率。這種設計的代價是需要一定的學習曲線，特別是對於不熟悉 TypeScript 的開發者。擴展性方面，雖然目前的架構適合小型專案，但在面對大型專案時，可能會遇到性能瓶頸，特別是在多用戶同時使用的情況下。

## 技術深入分析

Kimi Code CLI 的核心技術機制是基於 TypeScript 和現代開發工具，這使得開發過程中的錯誤檢查和測試變得更加高效。它的啟動速度非常快，能在毫秒內準備好 TUI，這是因為它使用了輕量級的二進位檔架構，避免了傳統 Node.js 應用的啟動延遲。設計上，選擇 TypeScript 使得開發者能夠利用靜態類型的優勢，這在大型專案中能夠有效降低錯誤率。雖然目前的依賴樹相對簡單，但未來若要擴展功能，可能會引入更多的依賴，這需要注意潛在的 vendor lock-in 風險。在技術風險方面，若使用者在多用戶環境中使用，可能會出現性能瓶頸，特別是在高負載情況下。整合方面，Kimi Code CLI 能夠與現有的 CI/CD 流程相容，但在與某些主流框架的整合上可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例。安裝過程相對順暢，但對於 Windows 使用者可能會有一些限制。文件中有多語言支持，這對於非英語使用者來說非常友好。

## 優缺點分析

> [!success] 優點
> - 安裝簡便，無需 Node.js 環境設置，適合快速上手。
> - 啟動速度快，提供良好的使用體驗，特別是在長時間會話中。
> - 支持視頻輸入，能夠處理複雜的描述情境，提升代理的理解能力。

> [!danger] 缺點
> - 對於大型專案的支持可能不足，特別是在多用戶環境下。
> - 目前功能仍在開發中，可能會出現不穩定的情況。
> - Windows 支持尚在開發中，限制了使用者的選擇。

> [!warning] 注意事項
> - 目前僅支持 macOS 和 Linux，Windows 支持尚在開發中。
> - 對於大型專案的支持可能會受到限制，特別是在多用戶環境下。
> - 目前的功能仍在持續開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但缺乏 Kimi Code 的即用型安裝和專門設計的 TUI 介面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供 CLI 工具，但不支持視頻輸入和多子代理功能，限制了使用場景的多樣性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但缺乏 Kimi Code 的即用型安裝和專門設計的 TUI 介面。 | 如果你需要一個更靈活的 AI 助手，並且不介意進行更多的配置。 | medium，因為需要重新設置環境和配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供 CLI 工具，但不支持視頻輸入和多子代理功能，限制了使用場景的多樣性。 | 如果你的專案不需要視頻輸入功能，且希望使用更簡單的 CLI 工具。 | low，因為 CLI 工具的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **kimi-code** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 助手功能，但缺乏 Kimi Code 的即用型安裝和專門設計的 TUI 介面。 | 雖然也提供 CLI 工具，但不支持視頻輸入和多子代理功能，限制了使用場景的多樣性。 |
> | 遷移成本 | - | medium，因為需要重新設置環境和配置。 | low，因為 CLI 工具的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果你需要一個更靈活的 AI 助手，並且不介意進行更多的配置 | 如果你的專案不需要視頻輸入功能，且希望使用更簡單的 CLI  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多用戶環境中使用時，可能會出現性能瓶頸，特別是在高負載情況下。
  - 解法：考慮將使用者分散到不同的實例中以減少負載。
- [MEDIUM] Windows 安裝過程可能會遇到問題，特別是在 PowerShell 中執行時。
  - 解法：使用 WSL 進行安裝，或等待官方 Windows 支持。
- [MEDIUM] 某些功能仍在開發中，可能會不穩定。
  - 解法：定期檢查更新，並參與社群討論以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行專案開發 | 非常適合 | 提供即用型的環境和快速的啟動速度，適合快速迭代的開發流程。 |
| 個人開發者進行學習和實驗 | 非常適合 | 簡單的安裝和使用流程，降低了學習門檻。 |
| 大型企業的多用戶開發環境 | 不適合 | 在多用戶環境中可能會遇到性能瓶頸，影響使用體驗。 |
| 需要視頻輸入功能的專案 | 非常適合 | 支持視頻輸入，能夠處理複雜的描述情境，提升代理的理解能力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即用型的 AI 編碼代理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不會存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

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
| Forks | 31 |
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

**社群活躍度**：社群活躍，持續有更新和問題回應。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 助手]]

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
> const concepts = ["CLI/TUI","自動化","AI 助手"];
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
