---
repo: cosmicstack-labs/mercury-agent
url: https://github.com/cosmicstack-labs/mercury-agent
owner: cosmicstack-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI or Telegram."
homepage: "https://mercuryagent.sh/"
stars: 2473
stars_per_day: 65
forks: 252
open_issues: 36
created: 2026-04-20
pushed_at: 2026-05-25
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "AI 助手"
release_tag: "v1.1.9"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一個具備權限管理和多通道訪問的 AI 助手，隨時運行於 CLI 或 Telegram。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 4995
readme_length: 9920
bus_factor: 1
last_release_days: 10
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1117,2026-04-26:1124,2026-04-27:1416,2026-04-27:1422,2026-04-28:1549,2026-04-29:1649,2026-04-30:1774,2026-05-01:1837,2026-05-02:1880,2026-05-03:1910,2026-05-04:1946,2026-05-05:1962,2026-05-06:1974,2026-05-07:2008,2026-05-08:2020,2026-05-09:2034,2026-05-10:2053,2026-05-11:2069,2026-05-12:2112,2026-05-13:2142,2026-05-14:2169,2026-05-15:2194,2026-05-16:2210,2026-05-17:2230,2026-05-18:2245,2026-05-19:2272,2026-05-20:2336,2026-05-21:2392,2026-05-24:2417,2026-05-26:2449,2026-05-27:2455,2026-05-29:2473"
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
  - "提供一個具備權限管理和多通道訪問的 AI 助手，隨時運行於 CLI 或 Telegram。"
---

# mercury-agent

**2.5k** stars · **65** stars/天 · 建立 38 天前 · TypeScript · MIT

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

`ORG` `v1.1.9` `easy-install`

`ai-agent` `ai-assistant` `llm`

> [!summary] 一句話摘要
> 提供一個具備權限管理和多通道訪問的 AI 助手，隨時運行於 CLI 或 Telegram。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (65 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個靈活且具備自我學習能力的 AI 助手的開發者和小型團隊。
> **一句話重點** Mercury Agent 的設計理念在於用戶主導的 AI 交互，這在當前的 AI 生態中是相當獨特的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 助手" && p.file.name !== "cosmicstack-labs--mercury-agent" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到靈活的 AI 助手，值得一試。

> [!abstract] 核心創新
> Mercury 是一個靈魂驅動的 AI 助手，具備權限管理和持久記憶功能。

## 專案簡介

Mercury Agent 是一個以「靈魂驅動」為概念的 AI 助手，具備權限管理工具、代幣預算和多通道訪問功能。用戶可以透過 CLI、Telegram 或 Web 界面與其互動。其核心機制是持久的 SQLite 支持的記憶體系統，能夠記住用戶的偏好和行為，並在執行任務前詢問用戶的許可，這樣的設計能有效避免意外操作。安裝和使用都非常簡單，僅需一行指令 `curl -fsSL https://mercuryagent.sh/install.sh | sh` 即可安裝。這個工具的賣點在於其「第二大腦」功能，能夠自動提取和記錄重要信息，並提供多達 31 種內建工具以供使用。技術上，Mercury 使用 TypeScript 和 React，並且依賴於多個現代庫，如 `grammy` 和 `node-cron`，這使得其在性能和擴展性上有不錯的表現。

與同類工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Mercury 提供了更強的記憶管理和用戶交互設計，特別是其權限管理機制能有效防止未經授權的操作。實際使用中，Mercury 能夠處理高達 126 種社區貢獻的技能，並且支持用戶自定義技能。這使得其在個性化和擴展性上優於許多競爭對手。雖然當前版本仍在 beta 階段，但其穩定性和功能性已經足夠應用於小型團隊或個人項目。未來幾個月內，預計會進一步增強功能和修復已知問題，特別是在 CLI 和 Telegram 的兼容性方面。對於需要一個靈活且具備自我學習能力的 AI 助手的開發者，Mercury 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `React` · `SQLite`

## 重點功能

- 靈魂驅動的個性化 — 用戶可以透過 Markdown 文件定義 AI 的個性和行為。
- 權限管理系統 — 具備 Shell 阻擋功能，防止未經授權的操作。
- 持久記憶系統 — 使用 SQLite 來存儲和檢索用戶的偏好和歷史記錄。
- 多通道訪問 — 支持 CLI、Telegram 和 Web 界面，方便用戶隨時隨地使用。
- 社區技能安裝 — 用戶可以輕鬆安裝和管理來自社區的技能，提升功能擴展性。

## 快速開始

1. 安裝 Mercury Agent
```bash
curl -fsSL https://mercuryagent.sh/install.sh | sh
```
2. 啟動 Mercury Agent
```bash
mercury up
```
3. 查看可用技能
```bash
mercury skills list
```

## 程式碼範例

```ts
{
  "前置條件": "安裝 Mercury Agent",
  "指令": "mercury skills install ai-ml/prompt-engineering",
  "預期輸出": "安裝成功，技能將在下次啟動時被識別。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 38 天內累積 2473 stars（65/天），forks 252（10.2%），顯示出強勁的增長勢頭。作者 Cosmic Stack 擁有多個開源項目背景，專注於 AI 和工具開發，這使得他們能夠針對市場需求開發出這個工具。Mercury 解決了許多現有 AI 助手在權限管理和個性化方面的不足，之前的方案往往缺乏用戶交互和記憶功能。最近的推廣活動和社群反饋也促進了其快速增長，特別是在 Telegram 和 CLI 的使用者中。這個工具的設計理念和功能組合，讓它在當前的 AI 生態中脫穎而出，特別是針對個人和小型團隊的需求。

## 適合誰使用

**目標受眾**：需要一個靈活且具備自我學習能力的 AI 助手的開發者和小型團隊。

> [!example] 使用場景
> - AI 研究者用它來管理實驗和數據，因為它的記憶功能能夠自動記錄重要的實驗參數和結果。
> - 自由職業者用它來跟蹤客戶需求和任務進度，因為其 Kanban 板功能能夠清晰地展示任務狀態。
> - 開發者用它來自動化日常任務和提醒，因為它能夠設定定時任務並在需要時主動通知。
> - 小型團隊用它來協作和共享知識，因為其支持多用戶和多通道的特性能夠提升團隊效率。

## 架構分析

Mercury Agent 採用模組化設計，核心功能由 TypeScript 實現，並使用 SQLite 作為持久化存儲。這樣的設計使得系統能夠在多平台上運行，並且易於擴展。資料流方面，所有的用戶交互和記憶存儲都通過 CLI 和 Telegram 進行，並在後端使用 SQLite 進行管理。選擇 SQLite 使得記憶檔案的讀寫速度快且易於查詢，但在高並發情況下可能會成為瓶頸。整體架構的擴展性良好，能夠支持未來的功能增強和社區技能的集成。

## 技術深入分析

Mercury Agent 的核心技術機制是基於 TypeScript 和 React 的模組化設計，這使得其在功能擴展上具備良好的靈活性。其記憶系統使用 SQLite 來存儲用戶的偏好和歷史記錄，這樣的設計能夠支持高效的查詢和數據管理。效能方面，Mercury 能夠在多通道上同時運行，並且支持高達 126 種社區技能的安裝，這使得其在功能上非常強大。設計取捨方面，選擇 SQLite 作為存儲解決方案雖然能夠提供快速的讀寫性能，但在高並發的使用場景下可能會出現瓶頸。技術風險方面，隨著用戶數量的增加，記憶管理和權限控制的複雜性也會增加，這需要持續的優化和維護。整合方面，Mercury 能夠與現有的 CI/CD 流程無縫對接，並且支持多種開發環境，這使得其在實際應用中非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝和使用說明，安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，並且有多語言支持，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 靈活的多通道訪問，適合不同使用場景。
> - 強大的記憶管理功能，能夠自動記錄用戶的偏好。
> - 良好的社區支持，能夠快速獲得新技能和功能。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性。
> - 部分功能在 Windows 環境下的兼容性不足。
> - 社區技能的質量參差不齊，需謹慎選擇。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 部分社區技能未經審核，使用前需仔細檢查。
> - 在 Windows 環境下安裝可能會遇到兼容性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更簡單的技能管理，但缺乏 Mercury 的記憶和權限管理功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定任務的 AI，但不具備 Mercury 的多通道訪問和個性化設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 採用更簡單的技能管理系統，但缺乏 Mercury 的記憶和權限管理功能。 | 如果需要一個簡單的 AI 助手且不需要複雜的記憶管理，選擇這個工具會更合適。 | low，因為功能上相似，遷移成本低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定任務的 AI，但不具備 Mercury 的多通道訪問和個性化設計。 | 如果你的需求是針對特定任務的 AI，這個工具會更有效率。 | medium，因為需要重構部分功能以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mercury-agent** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 採用更簡單的技能管理系統，但缺乏 Mercury 的記憶和權限管理功能。 | 專注於特定任務的 AI，但不具備 Mercury 的多通道訪問和個性化設計。 |
> | 遷移成本 | - | low，因為功能上相似，遷移成本低。 | medium，因為需要重構部分功能以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的 AI 助手且不需要複雜的記憶管理，選擇這 | 如果你的需求是針對特定任務的 AI，這個工具會更有效率。 |

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

- **[HIGH]** 在 CLI 模式下，中文輸入不工作
  - 解法：使用英文輸入或在 Telegram 中操作
- [MEDIUM] Windows 上的安裝過程可能會崩潰
  - 解法：確保使用 Node 版本 20 以上，並檢查依賴問題
- [MEDIUM] 社區技能的質量參差不齊，可能導致功能不穩定
  - 解法：在安裝前仔細檢查技能的評價和使用情況

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的日常任務管理 | 非常適合 | 具備 Kanban 板和記憶功能，能夠有效跟蹤任務進度。 |
| 個人開發者的 AI 助手 | 適合 | 靈活的多通道訪問和個性化設計，能夠滿足個人需求。 |
| 大型企業的複雜任務調度 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 需要高安全性的任務執行 | 普通 | 雖然有權限管理，但仍需進一步測試其安全性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到靈活的 AI 助手，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，但仍需注意社區技能的安全性。

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
| Forks | 252 |
| Open Issues | 36 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://mercuryagent.sh/) |
| Repo 大小 | 4.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cosmicstack-labs/mercury-agent) |
| Topics | `ai-agent` `ai-assistant` `llm` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ai-sdk/anthropic` `@ai-sdk/deepseek` `@ai-sdk/openai` `@grammyjs/auto-retry` `@hono/node-server` `ai` `bcryptjs` `chalk` `commander` `dotenv` `grammy` `hono` `ink` `marked` `node-cron`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 89
>     "MDX" : 7
>     "CSS" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hotheadhacker](https://github.com/hotheadhacker) | 175 |
> | [@shehzensidiq](https://github.com/shehzensidiq) | 17 |
> | [@zaidbinmushtaq](https://github.com/zaidbinmushtaq) | 16 |
> | [@mercuryagent](https://github.com/mercuryagent) | 4 |
> | [@Chasen-Liao](https://github.com/Chasen-Liao) | 2 |

**最新版本**：v1.1.9 — v1.1.9 — Mercury Web, Kanban & Subconscious Memory (2026-05-19)

> [!info]- Release Notes
> Release `1.1.9` introduces the **Mercury Web Dashboard** — a full React SPA at `localhost:6174` — alongside a persistent **Kanban board system**, an in-browser **Workspace IDE** with Git and AI commit messages, a **dual-layer (conscious + subconscious) Second Brain**, intelligent **skill batching**, and a cross-platform build pipeline.
> 
> > **Note:** Version `1.1.8` was published briefly and then unpublished before reaching wide distribution due to a dependency-tree issue (a transitive `next` dependency inflating install size by ~285 MB). `1.1.9` ships the same feature set with a leaner dependency graph — install footprint dropped from ~429 MB to ~87 MB (**−80%**).
> 
> ## Highlights
> 
> - **Mercury Web Dashboard** — React SPA with PWA install, login, dark/light theme, multi-thread chat with SSE streaming.
> - **Workspace IDE** — file tree, multi-tab editor, integrated terminal, Source Control panel with **AI-generated conventional commit messages**, and a maximizable bottom panel.
> - **Kanban Boards (Beta)** — persistent SQLite-backed task boards with Markdown descriptions, AI execution plans, cascade & smart execution, board context, attachments, comments, dependencies, and a `question`-status feedback loop.
> - **Second Brain — Conscious + Subconscious** — dual-tier memory model, person tracking with aliases & relationships, goals view, and graph visualization.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應問題的速度較快。
**連結**：[文件](https://mercuryagent.sh/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-19 ~ 2026-05-25）
> **活躍天數** 5 天 · **最新 commit** Feat/mercury skills (#67)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#41](https://github.com/cosmicstack-labs/mercury-agent/issues/41) | Chinese (CJK) input does not work in CLI mode | 2 | 1 |
> | [#12](https://github.com/cosmicstack-labs/mercury-agent/issues/12) | feat: add support for kimi, glm, custom openai/anthropic com | 2 | 3 |
> | [#2](https://github.com/cosmicstack-labs/mercury-agent/issues/2) | README opener could lead with the operator outcome before “s | 2 | 0 |
> | [#64](https://github.com/cosmicstack-labs/mercury-agent/issues/64) | Setup wizard crashes silently after GitHub step on Windows + | 1 | 0 |
> | [#57](https://github.com/cosmicstack-labs/mercury-agent/issues/57) | Feature: LM Studio Provider | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access.
> 
>   Remembers what matters. Asks before it acts. Runs 24/7 from CLI, Telegram, or Web. 31 built-in tools, Kanban boards, extensible skills, SQLite-backed Second Brain memory.
> 
>   
>   
>   
> 
>   🔖 Current Stable: v1.1.9
> 
>   English | 简体中文
> 
> ---
> 
> 
> ## Quick Start
> 
> **One-liner install (no Node.js required)** — downloads the latest standalone binary for your OS:
> 
> ```bash
> 
> ## Installing Skills
> 
> Mercury can pull community-contributed skills from the registry at
> **[skills.mercuryagent.sh](https://skills.mercuryagent.sh)** (126+ skills, no auth required).
> 
> ```bash
> mercury skills search prompt                  # search the registry
> mercury skills browse ai-ml                   # browse by category
> mercury skills view ai-ml/prompt-engineering  # render SKILL.md in the terminal
> mercury skills view ai-ml/prompt-engineering --web   # open the registry page
> mercury skills install ai-ml/prompt-engineering      # install to ~/.mercury/skills/
> mercury skills list                           # show installed skills
> mercury skills update                         # refresh all installed skills
> mercury skills remove ai-ml/prompt-engineering
> mercury skills doctor                         # check install root + registry
> ```
> 
> Installed skills land at `~/.mercury/skills///SKILL.md` and are
> picked up by the agent on the next boot — they're treated identically to
> built-in skills.
> 
> > **Review before you ship.** Skills are community-contributed and unaudited.
> > Run `mercury skills view ` before installing.
> 
> Overrides: `--registry ` (or `MERCURY_SKILLS_REGISTRY`) for self-hosted
> registries, `MERCURY_SKILLS_INSTALL_ROOT` for an alternate install path,
> `--json` for machine-readable output.
> 
> **Also installable from:**
> 
> - **Web dashboard** — `http://127.0.0.1:6174/skills` has a registry installer (paste `category/slug`) and a URL installer side by side.
> - **Telegram** — `/skills`, `/skills search `, `/skills view `, `/skills install ` (admin-only). Every result includes the registry URL so you can review before installing.
> 
> See the [Skills reference](https://mercuryagent.sh/docs/reference/skills) for the full command surface, frontmatter spec, and API endpoints.
> 
> 
> ### Prerequisites
> 
> - **Node.js ≥ 20** (for the build toolchain)
> - **[Bun](https://bun.sh) ≥ 1.3** (only required for standalone binaries; install with `curl -fsSL https://bun.sh/install | bash`)
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
> | `~/.mercury/boards.db` | Kanban boards database (SQLite) |
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
> Mercury now seeds a default `web-search` skill on first run in `~/.mercury/skills/web-search/SKILL.md`.
> 
> 
> # macOS / Linux
> curl -fsSL https://mercuryagent.sh/install.sh | sh
> ```
> 
> ```powershell
> 
> # Windows
> irm https://mercuryagent.sh/install.ps1 | iex
> ```
> 
> Or via npm if you already have Node.js 20+:
> 
> ```bash
> npx @cosmicstack/mercury-agent
> ```
> 
> Or install the npm package globally:
> 
> ```bash
> npm i -g @cosmicstack/mercury-agent
> mercury
> ```
> 
> First run triggers the setup wizard (name, provider, optional Telegram). After setup, Mercury opens the Ink TUI startup screen and asks for your permission mode (`Ask Me` or `Allow All`) before chat starts.
> 
> To reconfigure later (change keys, name, settings):
> 
> ```bash
> mercury doctor
> mercury doctor --platform
> ```
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
> | `mercury doctor` | Reconfigure setup (name, providers, channels, permissions defaults) |
> | `mercury doctor --platform` | Show cross-platform terminal/daemon compatibility diagnostics |
> | `mercury setup` | Re-run the setup wizard |
> | `mercury status` | Show config and daemon status |
> | `mercury help` |

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[記憶管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/cosmicstack-labs/mercury-agent) · [官方網站](https://mercuryagent.sh/)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 助手" AND file.name != "cosmicstack-labs--mercury-agent"
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
> const concepts = ["Agent 框架","自動化","記憶管理"];
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
