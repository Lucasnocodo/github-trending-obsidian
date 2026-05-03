---
repo: cosmicstack-labs/mercury-agent
url: https://github.com/cosmicstack-labs/mercury-agent
owner: cosmicstack-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI or Telegram."
homepage: "https://mercury.cosmicstack.org/"
stars: 1910
stars_per_day: 159
forks: 197
open_issues: 18
created: 2026-04-20
pushed_at: 2026-05-02
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "AI 代理"
release_tag: "v1.1.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一個有靈魂驅動的 AI 代理，具備權限加強工具、代幣預算和多通道訪問功能，持續運行於 CLI 或 Telegram。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 2417
readme_length: 9945
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1117,2026-04-26:1124,2026-04-27:1416,2026-04-27:1422,2026-04-28:1549,2026-04-29:1649,2026-04-30:1774,2026-05-01:1837,2026-05-02:1880,2026-05-03:1910"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/ai_agent"
  - "topic/ai_assistant"
  - "topic/llm"
aliases:
  - "mercury-agent"
  - "cosmicstack-labs/mercury-agent"
  - "提供一個有靈魂驅動的 AI 代理，具備權限加強工具、代幣預算和多通道訪問功能，持續運行於 CLI 或 Telegram。"
---

# mercury-agent

**1.9k** stars · **159** stars/天 · 建立 12 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.1.5` `easy-install`

`ai-agent` `ai-assistant` `llm`

> [!summary] 一句話摘要
> 提供一個有靈魂驅動的 AI 代理，具備權限加強工具、代幣預算和多通道訪問功能，持續運行於 CLI 或 Telegram。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (159 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個安全且可擴展的 AI 代理，並希望在 CLI 或 Telegram 上進行互動的開發者。
> **一句話重點** Mercury Agent 的設計強調用戶控制和安全性，這在當前 AI 代理市場中是相對獨特的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "cosmicstack-labs--mercury-agent" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到高安全性和個性化的 AI 代理，值得一試。

> [!abstract] 核心創新
> Mercury Agent 的創新在於其靈魂驅動的設計，讓用戶能夠完全控制代理的行為和個性。

## 專案簡介

Mercury Agent 是一個靈魂驅動的 AI 代理，設計上強調用戶的控制和安全性。用戶可以透過 CLI 或 Telegram 進行互動，並且代理會在執行任何操作前詢問用戶的許可。這個代理具備 31 種內建工具，並且支持擴展技能，使用 SQLite 作為持久化的第二大腦記憶，能夠記錄用戶的偏好和習慣。使用者可以透過 `npx @cosmicstack/mercury-agent` 快速啟動，首次運行會引導用戶進行設置，包括輸入名稱和 API 金鑰。這種設計的優勢在於，Mercury 不僅能夠執行命令，還能夠記住用戶的需求，從而提供更個性化的服務。

技術上，Mercury 使用 TypeScript 開發，並依賴多個 AI SDK 來支持不同的 LLM 提供者，這樣的架構使得它能夠靈活地切換不同的 AI 模型。與其他 AI 代理相比，如 OpenAI 的 ChatGPT，Mercury 的獨特之處在於其強調的用戶許可和記憶功能，這使得它在安全性和個性化上有顯著優勢。使用者可以透過 `/budget` 命令來管理代幣預算，並且可以設定定期任務，這些功能讓 Mercury 在長期使用中更具效率。儘管如此，使用者仍需注意其依賴的外部 API 可能會影響性能，並且需要定期維護和更新其配置。整體而言，Mercury 是一個適合需要高安全性和個性化的 AI 代理解決方案，特別適合小型團隊或個人開發者使用。

**技術棧**：`TypeScript 5.7.0` · `Node.js >=20.0.0` · `SQLite`

## 重點功能

- 靈魂驅動 — 透過 markdown 文件定義代理的個性，讓用戶擁有完全的控制權。
- 權限加強 — 在執行命令前詢問用戶，並提供 shell 阻擋清單，避免危險操作。
- 第二大腦記憶 — 使用 SQLite 存儲用戶的偏好和習慣，支持多種記憶類型。
- 代幣預算管理 — 每日代幣預算的自動跟蹤與管理，確保不超支。
- 持續運行 — 可以作為後台守護進程運行，並在崩潰後自動重啟。

## 快速開始

1. 快速啟動 Mercury Agent
```bash
npx @cosmicstack/mercury-agent
```
2. 全局安裝 Mercury Agent
```bash
npm i -g @cosmicstack/mercury-agent
```
3. 啟動設置向導
```bash
mercury
```

## 程式碼範例

```ts
[
  "# 前置條件（安裝 Mercury Agent）",
  "npx @cosmicstack/mercury-agent",
  "# 預期輸出（啟動設置向導）"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 1910 stars（159/天），forks 197（10.3%），顯示出不錯的增長潛力。這個專案由 Cosmic Stack 團隊開發，專注於提供一個安全且靈活的 AI 代理。之前的類似工具多數缺乏用戶控制和記憶功能，Mercury 的設計填補了這一空白。近期的推廣活動和社群討論可能也促進了其知名度提升，尤其是在 Telegram 和 CLI 的使用者中。高達 10.3% 的 forks/stars 比率表明許多開發者對此專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要一個安全且可擴展的 AI 代理，並希望在 CLI 或 Telegram 上進行互動的開發者。

> [!example] 使用場景
> - 個人開發者用它來自動化日常任務，因為 Mercury 的記憶功能能夠記住用戶的偏好並自動執行。
> - 小型團隊用它來管理多個 API 金鑰，因為 Mercury 提供了簡單的配置和權限管理功能。
> - 技術愛好者用它來探索 AI 代理的潛力，因為其開放的架構和擴展性允許用戶自定義技能。

## 架構分析

Mercury Agent 採用模組化架構，主要由 CLI 和 Telegram 兩個通道組成，允許用戶根據需求選擇互動方式。所有的運行數據存儲在用戶的主目錄下，這樣的設計使得用戶能夠輕鬆管理配置和記憶。代理的核心功能由多個內建工具組成，這些工具可以根據用戶的需求進行擴展。

選擇 SQLite 作為記憶存儲的原因在於其輕量級和高效能，能夠快速檢索用戶的偏好和歷史記錄。這種設計的代價在於，隨著記憶數據的增長，可能需要定期進行清理以保持性能。整體而言，這種架構使得 Mercury Agent 在可擴展性和用戶控制上表現出色。

## 技術深入分析

Mercury Agent 的核心技術機制是其靈魂驅動的設計，這使得用戶可以通過 markdown 文件定義代理的個性，從而實現更高的個性化。代理使用 SQLite 作為其記憶存儲，這不僅提供了高效的數據檢索能力，還支持多種記憶類型，能夠自動提取和整理用戶的偏好。性能方面，Mercury 能夠在多個通道中實時處理請求，並且在後台運行時能夠自動重啟，這樣的設計確保了其穩定性。選擇 TypeScript 作為開發語言的原因在於其靜態類型檢查能夠提高代碼的可維護性，並且有助於減少潛在的錯誤。依賴樹方面，Mercury 主要依賴於幾個輕量級的庫，這使得其在安裝和運行時的資源占用相對較低。技術風險方面，隨著用戶數據的增長，記憶管理可能成為性能瓶頸，這需要定期進行維護和優化。整合方面，Mercury 可以輕鬆與現有的 CLI 工具鏈結合，並且支持在 CI/CD pipeline 中的使用，這使得其在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並包含了快速啟動的範例。安裝過程相對順暢，但初次設置可能需要用戶手動配置多個 API 金鑰。整體而言，文件結構合理，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高安全性，所有操作都需用戶確認，避免意外執行。
> - 靈活的記憶管理，能夠根據用戶的需求自動調整。
> - 支持多通道互動，無論是 CLI 還是 Telegram 都能方便使用。

> [!danger] 缺點
> - 初次設置可能較繁瑣，需要用戶手動輸入多個 API 金鑰。
> - 依賴外部 API 可能導致性能不穩定。
> - 在某些情況下，記憶功能可能需要手動清理以避免資料過載。

> [!warning] 注意事項
> - 依賴外部 API 可能導致性能波動。
> - 需要用戶手動配置 API 金鑰，初次設置可能較繁瑣。
> - 在某些情況下，記憶功能可能需要手動清理以避免資料過載。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的 AI 代理構建工具，適合喜歡圖形界面的用戶，而 Mercury 更加注重用戶控制和安全性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據分析和報告生成，適合需要數據處理的團隊，而 Mercury 更加靈活且可擴展。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的 AI 代理構建工具，適合喜歡圖形界面的用戶，而 Mercury 更加注重用戶控制和安全性。 | 如果你的團隊需要一個可視化的工具來快速構建 AI 代理，並且不太關心底層的控制細節。 | medium - 需要重新設計用戶交互流程以適應可視化界面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據分析和報告生成，適合需要數據處理的團隊，而 Mercury 更加靈活且可擴展。 | 如果你的專案主要集中在數據分析和報告生成上，並且需要強大的數據處理能力。 | high - 需要重構現有的數據處理流程以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mercury-agent** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供一個可視化的 AI 代理構建工具，適合喜歡圖形界面的用戶，而 Mercury 更加注重用戶控制和安全性。 | 專注於數據分析和報告生成，適合需要數據處理的團隊，而 Mercury 更加靈活且可擴展。 |
> | 遷移成本 | - | medium - 需要重新設計用戶交互流程以適應可視化界面。 | high - 需要重構現有的數據處理流程以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個可視化的工具來快速構建 AI 代理，並且 | 如果你的專案主要集中在數據分析和報告生成上，並且需要強大的數 |

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

- **[HIGH]** 初次設置時可能會因為 API 金鑰配置錯誤而無法啟動
  - 解法：確保所有 API 金鑰正確配置，並參考文檔進行設置
- [MEDIUM] 在高負載情況下，記憶管理可能導致性能下降
  - 解法：定期清理不必要的記憶數據以保持性能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的日常任務自動化 | 非常適合 | Mercury 的多通道支持和記憶功能能夠有效提升工作效率。 |
| 需要高安全性的 AI 代理應用 | 非常適合 | 其權限加強設計能夠有效防止意外操作。 |
| 大型企業的數據處理 | 不適合 | Mercury 更加適合小型團隊，對於大型數據處理需求可能不夠強大。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高安全性和個性化的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Mercury Agent 不需要高權限運行，並且所有敏感資料都存儲在用戶的主目錄下，降低了潛在的安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
| Forks | 197 |
| Open Issues | 18 |
| Issue 解決率 | 10% (2 closed) |
| 最後推送 | 2026-05-02 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://mercury.cosmicstack.org/) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cosmicstack-labs/mercury-agent) |
| Topics | `ai-agent` `ai-assistant` `llm` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ai-sdk/anthropic` `@ai-sdk/deepseek` `@ai-sdk/openai` `@grammyjs/auto-retry` `ai` `chalk` `commander` `dotenv` `grammy` `js-tiktoken` `marked` `node-cron` `ollama-ai-provider` `pino` `yaml`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "MDX" : 5
>     "CSS" : 3
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hotheadhacker](https://github.com/hotheadhacker) | 128 |
> | [@shehzensidiq](https://github.com/shehzensidiq) | 17 |
> | [@zaidbinmushtaq](https://github.com/zaidbinmushtaq) | 16 |
> | [@mercuryagent](https://github.com/mercuryagent) | 4 |
> | [@Chasen-Liao](https://github.com/Chasen-Liao) | 1 |

**最新版本**：v1.1.5 — v1.1.5 — Smoother Onboarding (2026-05-02)

> [!info]- Release Notes
> ## What's Changed
> 
> ### Fixed: Onboarding no longer blocks users without Ollama
> 
> The onboarding flow had a critical UX problem: if a user didn't have Ollama running locally or an API key handy, they'd get stuck in infinite loops with no way to skip. This release makes onboarding smooth and forgiving.
> 
> **Key changes:**
> 
> 1. **Ollama Local is now skippable** — If Ollama isn't running, you can skip it entirely or manually enter a model name. No more infinite retry loops.
> 
> 2. **All provider setups allow skipping** — Every API key prompt now offers manual model name entry when the provider API is unreachable, and a clear skip option. Error messages changed from red (failure) to yellow (warning).
> 
> 3. **"No provider" trap removed** — Previously, if you couldn't configure any provider, you were stuck in an infinite loop. Now you can type "skip" to save your config and return later with `mercury doctor`. A hint about DeepSeek's free API is shown.
> 
> 4. **Ollama Local default model cleared** — The default was `gpt-oss:20b` (a non-standard model). Now defaults to empty, and the preferred model list uses common names like `llama3.2`, `mistral`, `phi3`, etc.
> 
> 5. **Clearer first-run instructions** — The LLM Providers step now says "You can skip any provider by pressing Enter" and notes DeepSeek offers free keys.
> 
> ### Install
> 
> ```bash
> npm install -g @cosmicstack/mercury-agent
> ```
> 
> ### Upgrade
> 
> ```bash
> mercury upgrade
> ```
> 

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和問題回應。
**連結**：[文件](https://mercury.cosmicstack.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-29 ~ 2026-05-02）
> **活躍天數** 3 天 · **最新 commit** feat: non-blocking sub-agents, channel-aware notifications, fast-path commands, and multi-agent visi

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/cosmicstack-labs/mercury-agent/issues/12) | feat: add support for kimi, glm, custom openai/anthropic com | 2 | 3 |
> | [#2](https://github.com/cosmicstack-labs/mercury-agent/issues/2) | README opener could lead with the operator outcome before “s | 2 | 0 |
> | [#10](https://github.com/cosmicstack-labs/mercury-agent/issues/10) | feat: add Lark Suite channel support `enhancement` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access.
> 
>   Remembers what matters. Asks before it acts. Runs 24/7 from CLI or Telegram. 31 built-in tools, extensible skills, SQLite-backed Second Brain memory.
> 
>   
>   
>   
> 
>   English | 简体中文
> 
> ---
> 
> 
> ## Quick Start
> 
> ```bash
> npx @cosmicstack/mercury-agent
> ```
> 
> Or install globally:
> 
> ```bash
> npm i -g @cosmicstack/mercury-agent
> mercury
> ```
> 
> First run triggers the setup wizard — enter your name, an API key, and optionally a Telegram bot token. Takes 30 seconds.
> 
> To reconfigure later (change keys, name, settings):
> 
> ```bash
> mercury doctor
> ```
> 
> 
> ### Getting Started
> 
> 1. Fork the repo
> 2. Run `npm install`
> 3. Make your changes
> 4. Run `npm run build` to verify it compiles
> 5. Test with `mercury` locally
> 6. Open a PR with a clear description of what you changed and why
> 
> 
> ## Configuration
> 
> All runtime data lives in `~/.mercury/` — not in your project directory.
> 
> | Path | Purpose |
> |------|---------|
> | `~/.mercury/mercury.yaml` | Main config (providers, channels, budget) |
> | `~/.mercury/.env` | API keys and tokens (loaded alongside project .env) |
> | `~/.mercury/soul/*.md` | Agent personality (soul, persona, taste, heartbeat) |
> | `~/.mercury/permissions.yaml` | Capabilities and approval rules |
> | `~/.mercury/skills/` | Installed skills |
> | `~/.mercury/schedules.yaml` | Scheduled tasks |
> | `~/.mercury/token-usage.json` | Daily token usage tracking |
> | `~/.mercury/memory/short-term/` | Per-conversation JSON files |
> | `~/.mercury/memory/long-term/` | Auto-extracted facts (JSONL) |
> | `~/.mercury/memory/episodic/` | Timestamped event log (JSONL) |
> | `~/.mercury/memory/second-brain/` | Structured memory database (SQLite + FTS5) |
> | `~/.mercury/daemon.pid` | Background process PID |
> | `~/.mercury/daemon.log` | Daemon mode logs |
> 
> 
> ## Why Mercury?
> 
> Every AI agent can read files, run commands, and fetch URLs. Most do it silently. **Mercury asks first — and remembers what matters.**
> 
> - **Permission-hardened** — Shell blocklist (`sudo`, `rm -rf /`, etc. never execute). Folder-level read/write scoping. Pending approval flow. Ask Me or Allow All per session. No surprises.
> - **Second Brain** — Persistent, structured memory with SQLite + FTS5 full-text search. 10 memory types, auto-extraction, conflict resolution, auto-consolidation. Mercury learns your preferences, goals, and habits without manual entry.
> - **Soul-driven** — Personality defined by markdown files you own (`soul.md`, `persona.md`, `taste.md`, `heartbeat.md`). No corporate wrapper.
> - **Token-aware** — Daily budget enforcement. Auto-concise when over 70%. `/budget` command to check, reset, or override.
> - **Live streaming** — Real-time token streaming on CLI with cursor-save/restore and markdown re-rendering. Telegram streaming with editable status messages.
> - **Always on** — Run as a background daemon on any OS. Auto-restarts on crash. Starts on boot. Cron scheduling, heartbeat monitoring, and proactive notifications.
> - **Extensible** — Install community skills with a single command. Schedule skills as recurring tasks. Based on the [Agent Skills](https://agentskills.io) specification.
> 
> 
> ## Daemon Mode
> 
> **One command to make Mercury persistent:**
> 
> ```bash
> mercury up
> ```
> 
> This installs the system service (if not installed), starts the background daemon, and ensures Mercury is running. Use this as your go-to command.
> 
> If Mercury is already running, `mercury up` just confirms it and shows the PID.
> 
> 
> ### Other daemon commands
> 
> ```bash
> mercury restart      # Restart the background process
> mercury stop         # Stop the background process
> mercury start -d     # Start in background (without service install)
> mercury logs         # View recent daemon logs
> mercury status       # Show if daemon is running
> ```
> 
> Daemon mode includes built-in crash recovery — if the process crashes, it restarts automatically with exponential backoff (up to 10 restarts per minute).
> 
> 
> ### System Service (auto-start on boot)
> 
> `mercury up` installs this automatically. You can also manage it directly:
> 
> ```bash
> mercury service install
> ```
> 
> | Platform | Method | Requires Admin |
> |----------|--------|---------------|
> | **macOS** | LaunchAgent (`~/Library/LaunchAgents/`) | No |
> | **Linux** | systemd user unit (`~/.config/systemd/user/`) | No (linger for boot) |
> | **Windows** | Task Scheduler (`schtasks`) | No |
> 
> ```bash
> mercury service status     # Check if service is running
> mercury service uninstall  # Remove the system service
> ```
> 
> In daemon mode, Telegram becomes your primary channel — CLI is log-only since there's no terminal for input.
> 
> 
> ## CLI Commands
> 
> | Command | Description |
> |---------|-------------|
> | `mercury up` | **Recommended.** Install service + start daemon + ensure running |
> | `mercury` | Start the agent (same as `mercury start`) |
> | `mercury start` | Start in foreground |
> | `mercury start -d` | Start in background (daemon mode) |
> | `mercury restart` | Restart the background process |
> | `mercury stop` | Stop a background process |
> | `mercury logs` | View recent daemon logs |
> | `mercury doctor` | Reconfigure (Enter to keep current values) |
> | `mercury setup` | Re-run the setup wizard |
> | `mercury status` | Show config and daemon status |
> | `mercury help` | Show full manual |
> | `mercury upgrade` | Upgrade to latest version |
> | `mercury telegram list` | List approved and pending Telegram users |
> | `mercury telegram approve ` | Approve a pairing code or pending request |
> | `mercury telegram reject ` | Reject a pending Telegram access request |
> | `mercury telegram remove ` | Remove an approved Telegram user |
> | `mercury telegram promote ` | Promote a Telegram member to admin |
> | `mercury telegram demote ` | Demote a Telegram admin to member |
> | `mercury telegram reset` | Clear all Telegram access and start fresh |
> | `mercury service install` | Install as system service (auto-start on boot) |
> | `mercury service uninstall` | Uninstall system service |
> | `mercury service status` | Show system service status |
> | `mercury --verbose` | Start with debug logging |
> 
> 
> ## In-Chat Commands
> 
> Type these during a conversation — they don't consume API tokens. Work on both CLI and Telegram.
> 
> | Command | Description |
> |---------|-------------|
> | `/help` | Show the full manual |
> | `/status` | Show agent config, budget, and usage |
> | `/tools` | List all loaded tools |
> | `/skills` | List installed skills |
> | `/stream` | Toggle Telegram text streaming |
> | `/stream off` | Disable streaming (single message) |
> | `/budget` | Show token budget status |
> | `/budget override` | Override budget for one request |
> | `/budget reset` | Reset usage to zero |
> | `/budget set ` | Change daily token budget |
> | `/permissions` | Change permission mode (Ask Me / Allow All) |
> | `/tasks` | List scheduled tasks |
> | `/memory` | View and manage second brain memory |
> | `/unpair` | Telegram: reset all access |
> 
> 
> ## Built-in Tools
> 
> | Category | Tools |
> |----------|-------|
> | **Filesystem** | `read_file`, `write_file`, `create_file`, `edit_file`, `list_dir`, `delete_file`, `send_file`, `approve_scope` |
> | **Shell** | `run_command`, `cd`, `approve_command` |
> | **Messaging** | `send_message` |
> | **Git** | `git_status`, `git_diff`, `git_log`, `git_add`, `git_commit`, `git_push` |
> | **Web** | `fetch_url` |
> | **Skills** | `install_skill`, `list_skills`, `use_skill` |
> | **Scheduler** | `schedule_task`, `list_scheduled_tasks`, `cancel_scheduled_task` |
> | **System** | `budget_status` |
> 
> 
> ## Channels
> 
> | Channel | Features |
> |---------|----------|
> | **CLI** | Readline prompt, arrow-key command menus, real-time text streaming with markdown re-rendering, permission mode picker |
> | **Telegram** | HTML formatting, editable streaming messages, file uploads, typing indicators, multi-user access with admin/member roles |
> 
> 
> ### Telegram Access
> 
> Mercury uses an **organization access model** with admins and members.
> 
> - **First-time setup:** Send `/start` to your bot, receive a pairing code, enter it in the CLI with `mercury telegram

## 延伸閱讀

相關概念：[[AI 代理]] · [[第二大腦]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/cosmicstack-labs/mercury-agent) · [官方網站](https://mercury.cosmicstack.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cosmicstack-labs--mercury-agent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 代理","第二大腦","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cosmicstack-labs--mercury-agent" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cosmicstack-labs--mercury-agent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cosmicstack-labs" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.1k stars
