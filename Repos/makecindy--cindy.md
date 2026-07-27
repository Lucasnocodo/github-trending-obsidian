---
repo: makecindy/cindy
url: https://github.com/makecindy/cindy
owner: makecindy
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Consider it done. The open-source AI agent that works out of the box · 想到，就能做到。开源、开箱即用的 AI Agent。"
homepage: "https://cindy.app"
stars: 615
stars_per_day: 154
forks: 73
open_issues: 157
created: 2026-07-22
pushed_at: 2026-07-27
first_seen: 2026-07-27
week: "2026-W31"
month: "2026-07"
category: "AI/ML"
subcategory: "AI 代理"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-27
use_case: "開源的 AI 代理，開箱即用，能夠自動執行各種任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-03"
contributor_count: 5
engagement: "medium"
issue_close_rate: 57
repo_size_kb: 47675
readme_length: 8045
bus_factor: 2
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-27"
star_history: "2026-07-27:615"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - org
  - "topic/agent"
  - "topic/ai_agent"
  - "topic/ai_assistant"
  - "topic/android"
  - "topic/claude_code"
aliases:
  - "cindy"
  - "makecindy/cindy"
  - "開源的 AI 代理，開箱即用，能夠自動執行各種任務。"
---

# cindy

**615** stars · **154** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/makecindy--cindy");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0`

`agent` `ai-agent` `ai-assistant` `android` `claude-code` `codex` `electron` `ios` `llm` `macos` `react-native` `typescript` `windows`

> [!summary] 一句話摘要
> 開源的 AI 代理，開箱即用，能夠自動執行各種任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (154 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在本地環境中運行 AI 代理並自動化任務的開發者。
> **一句話重點** Cindy 的靈活性和本地運行能力使其成為一個強大的 AI 代理選擇，特別適合需要高自定義的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/makecindy--cindy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "makecindy--cindy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 AI 代理解決方案，值得考慮。

> [!abstract] 核心創新
> Cindy 能夠在本地運行並支持多模型切換，提供了高靈活性的 AI 代理解決方案。

## 專案簡介

Cindy 是一個開源的 AI 代理，設計為開箱即用，能夠在本地運行並與用戶的應用程式和檔案互動。用戶可以透過簡單的指令來啟動 Cindy，並利用其多種模型（如 Claude Code 和 Codex）來完成各種任務。這個工具的賣點在於其靈活性，支持在執行過程中切換模型，並能夠同時處理多個任務。Cindy 的架構基於 pnpm monorepo，包含桌面和移動應用，並且支持多種平台（Windows、macOS、Linux）。在技術實作上，Cindy 使用 Electron 作為桌面應用的基礎，並且依賴於 Node.js 和 pnpm 進行包管理。相較於其他 AI 代理工具，Cindy 不僅支持本地運行，還能夠無縫接入用戶的現有服務，避免了重複計費的問題。

與 OpenAI 的 Codex 和其他類似工具相比，Cindy 提供了更高的自定義性和靈活性，特別是在多任務處理和模型切換方面。使用者可以透過簡單的 CLI 指令來啟動和管理 Cindy，例如 `pnpm restart:desktop:remote --region=global`。在實際使用中，Cindy 能夠處理大量資料和多個任務，但仍需注意其對系統資源的需求，特別是在大型項目中。社群活躍度尚可，開放的貢獻方式鼓勵開發者參與改進。這個專案目前處於 v1.0.0 的穩定版本，適合對 AI 代理有需求的開發者，尤其是希望在本地環境中運行的使用者。

**技術棧**：`Node.js 22.x` · `pnpm 10.x` · `Electron`

## 重點功能

- 多模型支持 — 支持 Claude Code 和 Codex，並能夠在任務執行中切換。
- 本地運行 — 能夠在用戶的本地機器上運行，無需依賴雲端服務。
- 多任務處理 — 能夠同時執行多個任務，並在不同模型間自由切換。
- 插件系統 — 支持未來的插件市場，允許用戶自定義功能和界面。
- 自動化功能 — 能夠自動安排和執行重複性任務，並提供回報。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/makecindy/cindy.git && cd cindy && git submodule update --init --recursive cindy-protocol && git lfs pull && pnpm install
```
2. 啟動桌面客戶端
```bash
pnpm restart:desktop:remote --region=global
```
3. 使用本地模式
```bash
選擇 'Local mode' 在登錄畫面
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 pnpm",
  "指令": "pnpm restart:desktop:remote --region=global",
  "預期輸出": "啟動 Cindy 桌面客戶端並連接到全球服務"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 615 stars（154/天），forks 73（11.9%），顯示出不錯的增長潛力。作者 MagicLizi 及其團隊在開源領域有一定的經驗，這次專案解決了許多開發者在使用 AI 代理時的靈活性和成本問題。之前的解決方案往往需要重複付費或無法在本地運行，而 Cindy 則提供了本地運行的選項，並且能夠無縫接入現有的服務。社群的活躍度和開放的貢獻方式也是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：希望在本地環境中運行 AI 代理並自動化任務的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動化日常任務，因為 Cindy 能夠與現有的應用程式無縫整合，減少手動操作的時間。
> - 產品經理用它來快速生成報告和分析，因為 Cindy 可以同時處理多個任務並提供即時反饋。
> - 開發者用它來進行代碼生成和測試，因為 Cindy 支持多種模型切換，能夠適應不同的開發需求。

## 架構分析

Cindy 的架構基於 pnpm monorepo，包含桌面和移動應用，並使用 Electron 作為桌面應用的基礎。這種設計使得不同平台的應用能夠共享代碼和功能，降低了開發和維護的成本。資料流方面，Cindy 能夠與用戶的本地檔案和應用程式互動，並透過 API 連接到雲端服務。

選擇 pnpm 作為包管理工具的原因在於其高效的依賴管理和快速的安裝速度，但這也意味著對 Node.js 和 pnpm 的版本有嚴格要求。擴展性方面，Cindy 計劃推出插件市場，這將使得用戶能夠自定義功能，但目前尚未實現。整體而言，Cindy 的設計旨在提供靈活性和可擴展性，適應不同用戶的需求。

## 技術深入分析

Cindy 的核心技術機制是基於 Electron 框架構建的桌面應用，並使用 Node.js 進行後端邏輯處理。這使得 Cindy 能夠在多平台上運行，並且能夠與用戶的本地檔案系統進行互動。效能方面，Cindy 能夠支持多任務處理，具體的性能數據尚未提供，但其設計目標是能夠在本地高效運行。選擇 pnpm 作為包管理工具的原因在於其快速的安裝速度和高效的依賴管理，但這也意味著對 Node.js 和 pnpm 的版本有嚴格要求。技術風險方面，Cindy 目前的設計在擴展性上仍有待加強，特別是在插件市場尚未建立的情況下，功能擴展的可能性受到限制。與主流框架的整合方面，Cindy 能夠與現有的開發工具鏈（如 VS Code）進行良好的整合，並且支持 CI/CD 流程，但具體的整合細節尚需進一步探索。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導；安裝過程相對順暢，但對環境有特定要求；有良好的入門指南，適合新手快速上手；目前僅提供英文文件，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 開箱即用，無需複雜的配置。
> - 支持多模型切換，靈活應對不同任務需求。
> - 能夠本地運行，保護用戶的數據隱私。

> [!danger] 缺點
> - 對環境要求較高，需要安裝 Node.js 和 pnpm。
> - 在本地模式下功能受限，無法使用雲端服務。
> - 插件市場尚未建立，功能擴展有限。

> [!warning] 注意事項
> - 需要 Node.js 22.x 和 pnpm 10.x，對環境有一定要求。
> - 在本地模式下，無法使用伺服器支持的功能。
> - 目前的插件市場尚未建立，功能擴展有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理功能，但主要集中在遊戲開發的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於自動化任務的 AI 代理，但缺乏 Cindy 的多模型支持和靈活性。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於 Codex 的接口封裝，功能較為單一，無法提供 Cindy 的多任務處理能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 代理，提供特定於遊戲的功能和工具。 | 如果你的專案主要集中在遊戲開發，並需要針對遊戲的特定功能，則應選擇此工具。 | medium，因為需要重新設計部分功能以適應遊戲開發的需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於自動化任務的 AI 代理，功能較為單一，無法提供 Cindy 的多模型支持。 | 如果你的需求僅限於簡單的任務自動化，且不需要多模型支持，則可以考慮此工具。 | low，因為功能較為簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cindy** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 代理，提供特定於遊戲的功能和工具。 | 專注於自動化任務的 AI 代理，功能較為單一，無法提供 Cindy 的多模型支持。 |
> | 遷移成本 | - | medium，因為需要重新設計部分功能以適應遊戲開發的需求。 | low，因為功能較為簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，並需要針對遊戲的特定功能，則 | 如果你的需求僅限於簡單的任務自動化，且不需要多模型支持，則可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能會遇到依賴問題，特別是 Node.js 和 pnpm 的版本不匹配。
  - 解法：確保使用正確版本的 Node.js 和 pnpm，並查看官方文檔以獲取最新的安裝指南。
- [MEDIUM] 在本地模式下，無法使用雲端服務的功能，可能會限制某些用戶的使用體驗。
  - 解法：如果需要雲端功能，請使用註冊的 Cindy 帳戶登入。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | Cindy 提供了靈活的 AI 代理功能，能夠快速適應小型團隊的需求。 |
| 大型企業的核心系統 | 不適合 | 目前處於 beta 階段，穩定性和功能尚未完全成熟。 |
| 需要快速原型開發的團隊 | 適合 | Cindy 的開箱即用特性能夠加速開發流程。 |
| 需要高自定義的 AI 代理解決方案的開發者 | 非常適合 | Cindy 支持多模型和插件系統，能夠滿足高自定義需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 AI 代理解決方案，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> Cindy 本身不需要高權限運行，但在使用過程中可能會存取用戶的應用程式和檔案系統。依賴鏈的信任程度較高，因為使用了主流的開源庫。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/makecindy--cindy");
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
> const me = dv.page("Repos/makecindy--cindy");
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
| Forks | 73 |
| Open Issues | 157 |
| Issue 解決率 | 57% (207 closed) |
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-07-22 |
| 官方網站 | [Link](https://cindy.app) |
| Repo 大小 | 46.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/makecindy/cindy) |
| Topics | `agent` `ai-agent` `ai-assistant` `android` `claude-code` `codex` `electron` `ios` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "JavaScript" : 3
>     "Swift" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MagicLizi](https://github.com/MagicLizi) | 90 |
> | [@dashhuang](https://github.com/dashhuang) | 82 |
> | [@GaoWeiLiuXD](https://github.com/GaoWeiLiuXD) | 22 |
> | [@PraiseZhu](https://github.com/PraiseZhu) | 21 |
> | [@zqchris](https://github.com/zqchris) | 17 |

**最新版本**：v1.0.0 — Cindy 1.0.0 (2026-07-25)

> [!info]- Release Notes
> 想到，就能做到。 / Consider it done.
> 
> ## 下载 / Download
> 
> - Download：https://cindy.app/download/
> - 中国大陆版 / Mainland China edition：https://cindy.cn/download/
> 
> 官方安装包由官网与官方 CDN 分发并自动更新；本 Release 标记 1.0.0 版本期的开源客户端源码快照。
> 
> Official installers are distributed and auto-updated through the official sites and CDN; this release marks the open-source client source snapshot for the 1.0.0 line.

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放的貢獻方式鼓勵開發者參與改進。
**連結**：[文件](https://cindy.app)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-27）
> **活躍天數** 1 天 · **最新 commit** feat(desktop): 市场插件装完即开,不再需要用户手动开启 (#482)

## README 摘錄

> [!info]- 展開查看原文 README
> English · 简体中文
> 
>   
>   
>   
>   
> 
>   🌐 cindy.app &nbsp;·&nbsp; ⬇️ Download
> 
> Cindy is an open-source AI agent that works out of the box. She brings multiple
> harnesses, models and tools into one agent that finishes real work in your
> projects and apps. Ready from day one, yours to shape over time.
> 
> Cindy runs locally on your own machine, using your real files and logged-in
> apps. The first supported harnesses are **Claude Code** and **Codex** — more are
> being added, and a native harness is in the works. Models and harnesses mix
> freely and can switch mid-task while your workspace, memory, skills and tools
> stay continuous; one task can even be planned, executed in parallel, and
> reviewed by agents on different harness × model combos. She can drive your
> browser, computer and phone, and take work from IM and schedules.
> 
> This repository is the open-source **client** for Cindy — the desktop and mobile
> apps plus their shared packages, organized as a pnpm monorepo.
> 
> The client is free to use, and its source code is open under Apache-2.0. Bring
> models your way: sign in to the official Cindy service (usage deducted
> transparently), authorize the **Claude Code / Codex Coding Plan** you already
> pay for and keep using it inside Cindy — no duplicate bill — connect your own
> API keys, or use local models.
> See [cindy.app](https://cindy.app) for service details,
> [pricing](https://cindy.app/#pricing), and [downloads](https://cindy.app/download/).
> 
> ## Yours to shape
> 
> Open source means more than visible — it means changeable:
> 
> - **Memory** — correct her once and she does it right from then on, shared across harnesses.
> - **Skills** — teach a way of working once and reuse it everywhere; handing them to your team is in the making.
> - **Automation** — recurring work schedules itself, runs itself, reports back.
> - **MCP** — wire your internal tools and business systems into her reach.
> - **Plugins** — reshape features, UI and interactions, shared through an open marketplace *(in the making)*.
> - **Source** — audit, fork, extend, and contribute improvements back under Apache-2.0.
> 
> Ready out of the box, never boxed in — start with
> [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md) and build Cindy with us.
> 
> ## What's in this repo
> 
> | Path | Description |
> | --- | --- |
> | `apps/desktop` | Electron desktop client |
> | `apps/mobile` | Expo / React Native mobile client |
> | `packages/*` | Shared client capabilities (auth, device-link, agent orchestration, model providers, …) |
> | `apps/*-bin` | Tool binaries shipped with the desktop app; none are committed — claude-code, codex, and ripgrep are downloaded per platform by `pnpm install`, and the Android platform-tools binaries are fetched (pinned version, sha256-verified) before Windows packaging |
> | `cindy-protocol/` | Wire protocol shared with the server (git submodule) |
> 
> **Not in this repo:** the backend service lives in a separate
> repository and is not part of this monorepo.
> 
> | Mode | Account requirement | Availability |
> | --- | --- | --- |
> | Hosted service | Cindy cloud account | Use Cindy's full hosted service. See [pricing](https://cindy.app/#pricing). |
> | Local mode | No Cindy sign-in required | Choose “Local mode” on the login screen to use local agents. Server-backed capabilities are unavailable in this mode. |
> 
> ## Prerequisites
> 
> - **Node.js** 22.x
> - **pnpm** 10.x (v11 is not yet supported)
> - **Git LFS**
> 
> ## Getting started
> 
> Contributor setup, public submodule initialization, Git LFS, dependency updates,
> and access requirements are maintained in
> [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md).
> The public checkout only needs the protocol submodule; plugins are installed through
> SkillHub or manually.
> 
> Minimal entry point:
> 
> ```bash
> git clone https://github.com/makecindy/cindy.git
> cd cindy
> git submodule update --init --recursive cindy-protocol
> git lfs pull
> pnpm install
> ```
> 
> ## Development entry points
> 
> ```bash
> # Mainland China Cindy account
> pnpm restart:desktop:remote --region=cn
> 
> # Global Cindy account
> pnpm restart:desktop:remote --region=global
> ```
> 
> Remote development uses your own Cindy cloud account and existing login state, so
> you can continue existing sessions and work while developing the client. Use `cn`
> for Mainland China accounts and `global` for everyone else; do not rely
> on the internal default. Full desktop, mobile, data-isolation, and validation
> workflows are in [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md).
> 
> “Local mode” on the login screen is an unauthenticated local-agent mode, not a
> connection to a local server. Server-backed capabilities are unavailable in this
> mode.
> 
> **About the default servers:** the client connects to Cindy's official cloud
> services by default (endpoint manifests in
> [`config/endpoint.json`](config/endpoint.json) and
> [`config/endpoint.global.json`](config/endpoint.global.json); desktop
> auto-updates also come from the official CDN). This is intentional — external
> developers don't need to self-host a server: sign in with your own Cindy
> account in a dev build and develop / test directly against the official
> servers.
> 
> ## Architecture
> 
> - [`DESIGN.md`](DESIGN.md) — visual design system, color tokens, and UI conventions
> - [`docs/README.md`](docs/README.md) — complete documentation and rules index
> - [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md) — contributor setup, validation, and submission workflow
> - [`AGENTS.md`](AGENTS.md) — engineering rules, launch/runtime contracts, and module boundaries
> - [`docs/dev-rules/`](docs/dev-rules/) — deep-dive architecture docs (e.g. Orca multi-agent orchestration)
> 
> ## Contributing
> 
> Contributions go through pull requests into `main`. Read
> [`CONTRIBUTING.en.md`](CONTRIBUTING.en.md) first, then use
> [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md).
> Every commit needs a [Developer Certificate of Origin](DCO) sign-off
> (`git commit -s`); a DCO check on each pull request enforces it, and no CLA is
> required.
> Please also follow [`CODE_OF_CONDUCT.en.md`](CODE_OF_CONDUCT.en.md). For ordinary
> usage questions, see [`SUPPORT.en.md`](SUPPORT.en.md); report security issues
> privately through [`SECURITY.en.md`](SECURITY.en.md).
> 
> ## Security
> 
> Never commit credentials or authorization files to the working tree. If you
> discover a security issue, follow [`SECURITY.en.md`](SECURITY.en.md) to report it
> privately rather than opening a public issue.
> 
> ## Privacy & telemetry
> 
> **Official distribution builds** include [TapDB](https://www.taptap.io/tapdb)
> usage analytics for product-level aggregate statistics (device / OS / app-version
> metadata; associated with your account ID after sign-in). It does **not** collect
> chat content, file content, or working-directory data. In addition, while signed
> in to a cloud account the client sends an online heartbeat to Cindy services
> (account ID, platform, and version only). Crash dumps stay on the local machine
> and are never uploaded automatically.
> 
> **Building from source?** You are not required to keep analytics:
> 
> - Mobile is off by default — without TapDB credentials (`clientId` /
>   `clientToken`) injected at build time, `apps/mobile/src/analytics/mobileTapdb.ts`
>   is a no-op;
> - Desktop can be fully stripped by removing the `initTapdb()` call in
>   `apps/desktop/src/renderer/index.tsx` (implementation lives in
>   `apps/desktop/src/renderer/analytics/`).
> 
> ## License / 许可证
> 
> Except as otherwise noted, the source code in this repository is licensed under
> the [Apache License, Version 2.0](LICENSE). Individual source files do not
> carry per-file license headers; the repository-root `LICENSE` governs.
> 
> Model weights, datasets, prompts, trademarks, and other separately identified
> materials may be subject to their own license terms and are not automatically
> covered by the repository-level Apache-2.0 grant. Third-party open-source
> components retain their own copyright and license. Their attribution notices and
> SPDX SBOMs are managed under [`docs/legal/`](docs/legal/), with artifact-specific
> outputs in [`docs/legal/notices/`](docs/legal/notices/). See [`NOTICE`](NOTICE)
> for this pro

## 延伸閱讀

相關概念：[[自動化]] · [[AI 代理]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[OpenBMB--PilotDeck|OpenBMB/PilotDeck]] · [[Blaizzy--nativ|Blaizzy/nativ]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[AlephAITech--WorkBuddyGuide|AlephAITech/WorkBuddyGuide]] · [[CopilotKit--OpenTag|CopilotKit/OpenTag]]

[GitHub](https://github.com/makecindy/cindy) · [官方網站](https://cindy.app)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "makecindy--cindy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "makecindy--cindy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "makecindy--cindy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "makecindy--cindy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 代理","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "makecindy--cindy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/makecindy--cindy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "makecindy--cindy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "makecindy" AND file.name != "makecindy--cindy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/makecindy--cindy");
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
> const me = dv.page("Repos/makecindy--cindy");
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
> const me = dv.page("Repos/makecindy--cindy");
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
> const me = dv.page("Repos/makecindy--cindy");
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
> const me = dv.page("Repos/makecindy--cindy");
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

> **2026-07-27** — 首次收錄
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

- [[2026-07-27|2026-07-27]] — 首次收錄，615 stars
