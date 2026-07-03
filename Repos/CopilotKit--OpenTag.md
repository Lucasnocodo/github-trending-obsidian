---
repo: CopilotKit/OpenTag
url: https://github.com/CopilotKit/OpenTag
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "OpenTag"
homepage: ""
stars: 521
stars_per_day: 74
forks: 63
open_issues: 2
created: 2026-06-26
pushed_at: 2026-07-01
first_seen: 2026-07-03
week: "2026-W27"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-03
use_case: "讓使用者在 Slack 中自架 AI 代理，無需擔心使用費用或鎖定問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2255
readme_length: 6623
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:521"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "OpenTag"
  - "CopilotKit/OpenTag"
  - "讓使用者在 Slack 中自架 AI 代理，無需擔心使用費用或鎖定問題。"
---

# OpenTag

**521** stars · **74** stars/天 · 建立 7 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/CopilotKit--OpenTag");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 讓使用者在 Slack 中自架 AI 代理，無需擔心使用費用或鎖定問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在 Slack 中自架 AI 代理並控制數據的中小型企業或團隊。
> **一句話重點** OpenTag 讓使用者能在 Slack 中自架 AI 代理，完全掌控運行環境和數據，適合需要靈活解決方案的團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "CopilotKit--OpenTag" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到靈活的自架 AI 代理，值得投入。

> [!abstract] 核心創新
> OpenTag 提供了一個開源的、自架的 AI 代理解決方案，使用者可以完全掌控運行環境和數據。

## 專案簡介

OpenTag 是一個開源的自架 AI 代理，專為 Slack 設計，能夠讀取對話串、回應問題、調用工具並在對話中呈現豐富的結果。用戶可以完全掌控運行環境，無需擔心每位用戶的定價或鎖定問題。其核心機制是基於 CopilotKit 的 SDK，這意味著用戶可以在 Slack、Discord、Telegram 和 WhatsApp 等多個平台上運行相同的代碼。安裝過程中，使用者需要創建 Slack 應用並設置環境變數，然後通過 `pnpm install` 安裝所需的依賴包，並啟動代理和機器人。這個工具的賣點在於其開源性和自我托管的靈活性，讓用戶能夠使用自己的模型和工具。技術上，OpenTag 使用了多個 CopilotKit 包來實現功能，包括平台無關的機器人引擎和豐富消息的跨平台 UI。

與其他類似工具相比，如 AgentSpriteForge 和 Claude，OpenTag 提供了更大的自定義空間和控制權，因為用戶可以完全掌握其運行環境和數據。使用上，OpenTag 需要一定的技術背景來設置和維護，尤其是在自架環境中，這可能會對不熟悉 DevOps 的用戶造成挑戰。儘管如此，對於需要在 Slack 中集成 AI 的團隊來說，OpenTag 提供了一個強大的解決方案，特別是對於希望避免高昂的商業服務費用的團隊。隨著 CopilotKit 的持續發展，未來可能會推出更多的功能和改進，值得關注其進一步的發展。適合的使用場景包括小型團隊希望自架 AI 代理的情境，而不適合的情境則是對自架維護能力要求較高的環境。

**技術棧**：`@copilotkit/bot` · `@copilotkit/runtime` · `@copilotkit/bot-ui` · `@slack/bolt`

## 重點功能

- 自架 AI 代理 — 用戶可以在自己的基礎設施上運行 AI 代理，完全掌控運行環境。
- 多平台支持 — 同一代碼可在 Slack、Discord、Telegram 和 WhatsApp 上運行。
- 豐富消息呈現 — 使用 CopilotKit 的 UI 組件，支持在對話中呈現表格和圖表。
- 靈活的自定義 — 用戶可以修改代理行為，只需更改一個系統提示。
- 持久性存儲選項 — 可選擇使用 Redis 來持久化對話串，避免重啟後數據丟失。

## 快速開始

1. 創建 Slack 應用
```bash
在 api.slack.com/apps 創建應用並獲取 OAuth Token
```
2. 設置環境變數
```bash
cp .env.example .env && nano .env
```
3. 安裝依賴並啟動代理
```bash
pnpm install && pnpm --filter slack-example runtime && pnpm --filter slack-example dev
```

## 程式碼範例

```ts
[
  "# 前置條件：已設置環境變數和安裝依賴",
  "pnpm --filter slack-example runtime   # 啟動代理後端，運行在 :8200",
  "# 預期輸出：代理後端成功啟動，準備接收請求"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 521 stars（74/天），forks 63（12.1%），顯示出相對活躍的社群反應。作者是 CopilotKit 團隊，過去已經開發了多個相關的開源工具，這使得 OpenTag 能夠快速吸引使用者。這個專案解決了使用商業 AI 代理的高成本和鎖定問題，讓用戶能夠自架自己的解決方案。最近的推文和社群討論也增加了其曝光率，尤其是在 Slack 和 Discord 的開發者社群中。技術上，開源的趨勢和自我托管的需求也讓這個工具的可行性大大提升。forks/stars 比率為 12.1%，顯示出許多開發者對其進行實際修改和使用的意願。

## 適合誰使用

**目標受眾**：希望在 Slack 中自架 AI 代理並控制數據的中小型企業或團隊。

> [!example] 使用場景
> - 小型團隊的開發者用它來在 Slack 中自動化任務回應，因為這樣可以節省人力成本，並提升工作效率。
> - 產品經理用它來整合 AI 代理以快速回應客戶查詢，因為這樣可以減少等待時間並提升客戶滿意度。
> - 技術支持團隊用它來在 Slack 中自動生成問題解決方案，因為這樣可以提高問題解決的速度和準確性。

## 架構分析

OpenTag 的架構基於 CopilotKit 的多個包，提供了一個靈活的自架 AI 代理解決方案。其核心是 `@copilotkit/bot`，負責處理多平台的訊息和工具調用，並通過 `@copilotkit/runtime` 提供 LLM 後端支持。資料流從用戶的請求開始，經過代理處理後，調用相應的工具，最後將結果返回給用戶。

這種設計使得用戶能夠自由選擇運行環境和數據來源，並且可以根據需求進行擴展。選擇自架的代價在於用戶需要自行管理基礎設施和安全性，這對於小型團隊可能是一個挑戰。擴展性方面，OpenTag 可以根據需要添加更多平台的支持，但這需要額外的開發工作。

整體來說，這種架構設計提供了靈活性和控制權，但也要求用戶具備一定的技術能力。

## 技術深入分析

OpenTag 的核心技術基於 CopilotKit 的多個包，使用 TypeScript 實現，並依賴於 `@copilotkit/bot` 提供的多平台支持。這使得 OpenTag 能夠在 Slack、Discord、Telegram 和 WhatsApp 等平台上運行，並且能夠通過 `@copilotkit/runtime` 提供的 LLM 後端進行智能回應。效能方面，OpenTag 能夠處理即時的用戶請求，但對於大量並發請求的支持仍需進一步測試。設計選擇上，使用 TypeScript 提供了靜態類型檢查的優勢，但也增加了一定的學習曲線。

依賴樹相對簡單，主要依賴於 CopilotKit 的生態系統，這降低了供應鏈風險。技術風險方面，若使用者未能妥善配置安全性，可能會導致數據洩漏。整合方面，OpenTag 與 Slack 的 API 整合良好，但對於其他平台的支持可能需要額外的適配工作。整體來看，OpenTag 提供了一個靈活且可擴展的解決方案，但用戶需要具備一定的技術能力來充分利用其潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，對於新手來說相對友好。安裝過程中，使用 pnpm 安裝依賴相對順暢，但對於不熟悉命令行的用戶可能會有一定挑戰。整體來說，花 30 分鐘能夠成功運行起來的機會較高，特別是對於有一定技術背景的用戶。

## 優缺點分析

> [!success] 優點
> - 開源且自架，無需擔心商業服務的鎖定問題。
> - 支持多平台，能夠在不同的聊天應用中運行。
> - 靈活的自定義選項，使用者可以根據需求調整代理行為。

> [!danger] 缺點
> - 設置和維護過程較為複雜，對於不熟悉 DevOps 的用戶可能會有挑戰。
> - 需要用戶自行處理安全性和數據隱私問題。
> - 目前的社群支持和文檔仍在發展中，可能會遇到一些問題。

> [!warning] 注意事項
> - 需要一定的技術背景來設置和維護，對於不熟悉 DevOps 的用戶可能會有挑戰。
> - 目前僅支持 Slack、Discord、Telegram 和 WhatsApp，對於其他平台的支持可能需要額外開發。
> - 自架環境需要用戶自行處理安全性和數據隱私問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的 AI 代理設計工具，但不支持自架，適合需要快速原型的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的記憶功能，適合需要長期記憶的應用場景，但不如 OpenTag 靈活。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，適合需要多代理互動的場景，但設置較為複雜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供可視化的 AI 代理設計工具，適合快速原型開發，但不支持自架。 | 如果需要快速原型並且不想處理自架的複雜性，這是更好的選擇。 | low，因為兩者的功能相似，且都專注於 AI 代理的開發。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的記憶功能，適合需要長期記憶的應用場景，但不如 OpenTag 靈活。 | 如果需要強大的記憶功能而不需要自架，這是更合適的選擇。 | medium，因為需要調整使用場景和功能。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，適合需要多代理互動的場景，但設置較為複雜。 | 如果需要多代理互動的功能而不介意複雜的設置，這是更好的選擇。 | high，因為需要重新設計整體架構以支持多代理。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenTag** | **agent-sprite-forge** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供可視化的 AI 代理設計工具，適合快速原型開發，但不支持自架。 | 專注於 AI 代理的記憶功能，適合需要長期記憶的應用場景，但不如 OpenTag 靈活。 | 提供多代理協作的功能，適合需要多代理互動的場景，但設置較為複雜。 |
> | 遷移成本 | - | low，因為兩者的功能相似，且都專注於 AI 代理的開發。 | medium，因為需要調整使用場景和功能。 | high，因為需要重新設計整體架構以支持多代理。 |
> | 適用場景 | 主要場景 | 如果需要快速原型並且不想處理自架的複雜性，這是更好的選擇。 | 如果需要強大的記憶功能而不需要自架，這是更合適的選擇。 | 如果需要多代理互動的功能而不介意複雜的設置，這是更好的選擇。 |

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

- **[HIGH]** 在設置過程中，環境變數未正確配置可能導致啟動失敗
  - 解法：仔細檢查 .env 文件中的配置
- [MEDIUM] 在高並發情況下，可能會出現性能瓶頸
  - 解法：考慮使用 Redis 來持久化數據
- [MEDIUM] 缺乏對某些平台的支持，可能需要額外開發
  - 解法：查看官方文檔以獲取最新的適配信息

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望在 Slack 中自動化客戶支持 | 非常適合 | 因為 OpenTag 提供了靈活的自架解決方案，能夠控制數據和成本。 |
| 大型企業需要在多個平台上運行 AI 代理 | 普通 | 雖然支持多平台，但設置和維護要求較高。 |
| 希望快速原型開發的團隊 | 不適合 | 因為設置過程較為複雜，可能不適合需要快速迭代的情境。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的自架 AI 代理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要用戶自行管理安全性，並處理敏感數據的存取。對於自架環境，安全配置至關重要，建議使用者仔細檢查設置。整體來看，若能妥善配置，使用於 CI/CD pipeline 是安全的。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenTag 最常與 Slack API 和 CopilotKit 生態系統中的其他工具搭配使用。在典型的工作流中，OpenTag 充當 AI 代理，處理來自 Slack 的請求並返回結果。實際整合範例是，在一個用 CopilotKit 部署的 Slack 應用中，使用者可以通過 @OpenTag 來啟動代理，並在對話中獲得即時回應。與主流 CI 工具如 GitHub Actions 的整合相對簡單，但對於需要自架的用戶，可能需要額外的配置和調整。整合的摩擦點主要在於環境變數的設置和依賴包的管理，這對於不熟悉命令行的用戶來說可能會造成困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenTag 出現之前，許多團隊依賴商業 AI 代理，這些代理通常有高昂的使用費用和數據鎖定問題。隨著開源和自架解決方案的興起，OpenTag 提供了一個靈活且可控的替代方案。技術上，近年來的 LLM 進步和多平台支持的需求使得這種解決方案變得可行。

OpenTag 代表了一種趨勢，即用戶越來越希望掌控自己的數據和運行環境，未來可能會有更多類似的開源解決方案出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
| Forks | 63 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CopilotKit/OpenTag) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@copilotkit/bot` `@copilotkit/bot-discord` `@copilotkit/bot-slack` `@copilotkit/bot-store-redis` `@copilotkit/bot-telegram` `@copilotkit/bot-ui` `@copilotkit/bot-whatsapp` `@copilotkit/runtime` `@tanstack/ai` `@tanstack/ai-mcp` `@tanstack/ai-openai` `@slack/bolt` `@slack/types` `playwright` `zod`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jerelvelarde](https://github.com/jerelvelarde) | 15 |
> | [@NathanTarbert](https://github.com/NathanTarbert) | 4 |
> | [@samjulien](https://github.com/samjulien) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有合併請求和問題回應，但仍有未解決的問題。
**連結**：[文件](https://docs.copilotkit.ai/slack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-06-29）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #3 from CopilotKit/docs/readme-package-list

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenTag: an open-source alternative to Claude in Slack
> 
> Run your own AI agent inside Slack: it reads a thread, answers, calls your tools, and
> renders rich results right in the conversation. Think of it as having Claude in your
> workspace, except **open-source and self-hosted**: you own the runtime, bring your own
> model, and wire it to your own tools. No per-seat pricing, no lock-in.
> 
> It's built on **[`@copilotkit/bot`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot)** —
> CopilotKit's open SDK for chat-platform agents (Slack first; the same code also runs on
> Discord, Telegram, and WhatsApp). Clone it, point it at your model and tools, and you own
> the whole stack.
> 
> ## See it in action
> 
> https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135
> 
> ▶️ **[Watch the demo](https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135)** (~50s) — an OpenTag agent working a Slack thread: it renders a breakdown, a table, and a bar chart inline (**generative UI**) and files a ticket only after an **Approve** gate (**human-in-the-loop**).
> 
> > **Two ways to run it:** **host it on your own** with the open-source SDK below — or skip the ops and **[sign up for the managed service →](https://go.copilotkit.ai/opentag-managed-gh)** coming soon from CopilotKit. The managed service will be part of our Enterprise Intelligence platform. You'll be able to use our cloud-hosting or enterprises can host it on their own infra.
> 
> ## Quick start (self-hosted)
> 
> OpenTag ships inside the [CopilotKit monorepo](https://github.com/CopilotKit/CopilotKit) as a
> first-class example (`examples/slack`). That's the dependable way to run it today while the
> bot SDK packages finish publishing to npm. (A standalone `npm install` from this repo lights
> up the moment they land — see [setup.md](./setup.md).)
> 
> You'll run two processes: the **agent** (the LLM backend) and the **bot** (the Slack
> connection) — and set three secrets.
> 
> ### The packages
> 
> OpenTag is a thin layer on top of a handful of CopilotKit packages. The `pnpm install` in step 3 installs all of them for you — this is what each one does, so you know what you're running and which ones are optional.
> 
> **Required** — every OpenTag install needs these four:
> 
> | Package | Role |
> | --- | --- |
> | [`@copilotkit/bot`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot) | The platform-agnostic bot engine — threading, tool calls, the human-in-the-loop gate. |
> | [`@copilotkit/runtime`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/runtime) | The AG-UI agent backend that runs your LLM and tools. |
> | [`@copilotkit/bot-ui`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-ui) | Cross-platform JSX for rich messages (Block Kit on Slack, Components V2 on Discord, HTML on Telegram). |
> | [`@copilotkit/bot-slack`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-slack) | The Slack adapter — or swap it for the platform you're targeting (below). |
> 
> **Optional** — add only what you use:
> 
> | Package | When you need it |
> | --- | --- |
> | [`@copilotkit/bot-discord`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-discord) · [`-telegram`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-telegram) · [`-whatsapp`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-whatsapp) | Running on a platform other than Slack — one adapter per platform. |
> | [`@copilotkit/bot-store-redis`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-store-redis) | Durable thread persistence across restarts (defaults to in-memory without it). |
> 
> **1. Create a Slack app.** At [api.slack.com/apps](https://api.slack.com/apps?new_app=1) →
> *From a manifest* → paste [`slack-app-manifest.yaml`](./slack-app-manifest.yaml). Install it,
> then grab the **Bot User OAuth Token** (`xoxb-…`) and an **App-Level Token** (`xapp-…`, with the
> `connections:write` scope). Step-by-step in [setup.md](./setup.md#1-create-a-slack-app).
> 
> **2. Set three secrets** in `.env` (`cp .env.example .env`):
> 
> ```bash
> SLACK_BOT_TOKEN=xoxb-...
> SLACK_APP_TOKEN=xapp-...
> OPENAI_API_KEY=sk-...      # or ANTHROPIC_API_KEY — bring your own model
> ```
> 
> **3. Run it** from the CopilotKit monorepo root:
> 
> ```bash
> pnpm install
> pnpm --filter slack-example runtime   # the agent backend, on :8200
> pnpm --filter slack-example dev        # the bot
> ```
> 
> **4. Talk to it.** @mention the bot in any channel thread:
> 
> > @OpenTag summarize this thread and file it as a bug
> 
> That's the whole loop. To wire up Linear, Notion, inline charts, Redis persistence, or to run
> on Discord / Telegram / WhatsApp, see **[setup.md](./setup.md)**.  
> 
> We won't lie to you, though. Setting up hosting for chat agents is not easy. To skip all of that heartache, go [join the waitlist](https://go.copilotkit.ai/opentag-managed-gh) for the CopilotKit managed service as part of our Intelligence platform, both cloud-hosted or self-hosted.
> 
> ## Make it your own
> 
> OpenTag is deliberately small and hackable:
> 
> - **Change what it does.** The agent's behavior is steered by a single system prompt in
>   [`runtime.ts`](./runtime.ts) — rewrite it and you have a different agent.
> - **Copy `app/` to start your own bot.** It's the platform-agnostic bot (tools, components, the
>   human-in-the-loop gate). `runtime.ts` is the agent backend: one CopilotKit `BuiltInAgent` (an
>   LLM + optional MCP tools — no Python, no LangGraph), served over AG-UI.
> - **One platform, or all of them.** `createBot` takes an array of adapters; set the secrets for
>   whichever platform(s) you want and the bot starts an adapter for each.
> 
> The full architecture, the file-by-file map, and every integration live in
> **[setup.md](./setup.md)**.
> 
> ## Don't want to host it yourself?
> 
> Self-hosting means you run and scale the runtime, persistence, and inspection tooling yourself.
> A **managed CopilotKit service** is on its way. It's the same agent, without the ops: durable
> threads, persistence, hosted inspection, and agents that improve from feedback (**Continuous
> Learning from Human Feedback**). 
> 
> - **[Join the waitlist →](https://go.copilotkit.ai/opentag-managed-gh)** — be first in when the managed service opens.
> - **[Talk to an engineer →](https://copilotkit.ai/talk-to-an-engineer)** — building something real on this? We'd love to help you ship it.
> 
> ## Learn more
> 
> The **[CopilotKit Slack quickstart](https://docs.copilotkit.ai/slack)** is the canonical guide
> to building a Slack agent — read it alongside this starter. Detailed setup and configuration
> lives in **[setup.md](./setup.md)**.
> 
> ## License
> 
> MIT — see [LICENSE](./LICENSE).

## 延伸閱讀

相關概念：[[自動化]] · [[微服務]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[EEliberto--IPA-Download|EEliberto/IPA-Download]]

[GitHub](https://github.com/CopilotKit/OpenTag)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "CopilotKit--OpenTag" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","微服務","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "CopilotKit--OpenTag" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CopilotKit--OpenTag" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CopilotKit" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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

> **2026-07-03** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 首次收錄，521 stars
