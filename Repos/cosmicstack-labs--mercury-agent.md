---
repo: cosmicstack-labs/mercury-agent
url: https://github.com/cosmicstack-labs/mercury-agent
owner: cosmicstack-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI or Telegram."
homepage: "https://mercuryagent.sh/"
stars: 2494
stars_per_day: 62
forks: 259
open_issues: 36
created: 2026-04-20
pushed_at: 2026-05-30
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
use_case: "提供一個具備權限管理的 AI 助手，能夠在 CLI 或 Telegram 上持續運行，並具備多種擴展技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 5033
readme_length: 9920
bus_factor: 1
last_release_days: 12
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1117,2026-04-26:1124,2026-04-27:1416,2026-04-27:1422,2026-04-28:1549,2026-04-29:1649,2026-04-30:1774,2026-05-01:1837,2026-05-02:1880,2026-05-03:1910,2026-05-04:1946,2026-05-05:1962,2026-05-06:1974,2026-05-07:2008,2026-05-08:2020,2026-05-09:2034,2026-05-10:2053,2026-05-11:2069,2026-05-12:2112,2026-05-13:2142,2026-05-14:2169,2026-05-15:2194,2026-05-16:2210,2026-05-17:2230,2026-05-18:2245,2026-05-19:2272,2026-05-20:2336,2026-05-21:2392,2026-05-24:2417,2026-05-26:2449,2026-05-27:2455,2026-05-29:2473,2026-05-30:2483,2026-05-31:2494"
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
  - "提供一個具備權限管理的 AI 助手，能夠在 CLI 或 Telegram 上持續運行，並具備多種擴展技能。"
---

# mercury-agent

**2.5k** stars · **62** stars/天 · 建立 40 天前 · TypeScript · MIT

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
> 提供一個具備權限管理的 AI 助手，能夠在 CLI 或 Telegram 上持續運行，並具備多種擴展技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (62 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個安全且靈活的 AI 助手來管理多通道任務的開發者和團隊。
> **一句話重點** Mercury Agent 的設計不僅考慮了功能性，還強調了用戶的安全性和靈活性。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個靈活且安全的 AI 助手，值得投入。

> [!abstract] 核心創新
> Mercury Agent 的創新在於其權限管理和靈魂驅動的記憶系統，能夠在執行任務前詢問用戶。

## 專案簡介

Mercury Agent 是一個以「靈魂驅動」為核心的 AI 助手，具備權限管理工具、代幣預算和多通道訪問能力。它能夠在 CLI、Telegram 或網頁上持續運行，並具備 31 種內建工具和可擴展的技能系統。用戶可以透過 `mercury skills` 指令來安裝社群貢獻的技能，這些技能會被存放在 `~/.mercury/skills/` 目錄下，並在下次啟動時自動加載。這種設計讓 Mercury 能夠根據用戶的需求靈活擴展，並且在執行命令前會先詢問用戶，避免意外操作。技術上，Mercury 使用 SQLite 作為其持久化存儲，並支持多種記憶類型，這使得它能夠有效地學習用戶的偏好和習慣。與其他 AI 助手相比，Mercury 的權限管理更為嚴格，能夠防止潛在的危險命令執行，並且提供了代幣預算功能，幫助用戶控制 API 使用成本。這些特性使得 Mercury 在安全性和靈活性上都表現出色，特別適合需要長時間運行的任務或多通道交互的場景。

**技術棧**：`TypeScript 5.7.0` · `React 18.3.1` · `SQLite 3.42.0`

## 重點功能

- 靈魂驅動的記憶系統 — 使用 SQLite 存儲用戶的偏好和習慣，支持多種記憶類型。
- 權限管理 — 在執行命令前詢問用戶，防止意外操作。
- 代幣預算控制 — 自動追蹤每日代幣使用情況，並在超過預算時自動縮減請求。
- 多通道支持 — 能夠在 CLI、Telegram 和網頁上運行，提供靈活的交互方式。
- 社群技能擴展 — 允許用戶從社群貢獻的技能庫中安裝和管理技能，並支持自定義技能。

## 快速開始

1. 安裝 Mercury Agent
```bash
curl -fsSL https://mercuryagent.sh/install.sh | sh
```
2. 啟動 Mercury Agent
```bash
mercury up
```
3. 檢查狀態
```bash
mercury status
```

## 程式碼範例

```ts
[
  "# 安裝技能",
  "mercury skills install ai-ml/prompt-engineering",
  "# 預期輸出：安裝成功，技能已添加至 ~/.mercury/skills/"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 40 天內累積 2494 stars（62/天），forks 259（10.4%），顯示出穩定的增長趨勢。作者 Cosmic Stack 是一個專注於 AI 工具的團隊，之前已經推出過多個相關專案，這次的 Mercury Agent 解決了許多 AI 助手在權限管理和記憶功能上的不足。這個專案的推出引起了社群的廣泛關注，特別是在 Telegram 和 CLI 環境中的應用。高達 10.4% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要一個安全且靈活的 AI 助手來管理多通道任務的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來在 CI/CD 流程中自動化部署任務，因為 Mercury 能夠持續運行並管理多個任務，減少人為錯誤。
> - 產品經理用它來追蹤團隊的任務進度，因為內建的看板系統可以方便地管理和視覺化任務狀態。
> - 獨立開發者用它來在 Telegram 上進行即時交互，因為它支持多通道訪問，能夠隨時隨地進行操作。

## 架構分析

Mercury Agent 採用模組化設計，核心功能以 TypeScript 實現，並使用 SQLite 作為持久化存儲。這種設計使得開發者可以輕鬆擴展功能，並且所有的配置和數據存儲在用戶的家目錄下，避免了對專案目錄的污染。資料流方面，所有的命令和技能都通過 CLI 或 Telegram 接收，並在後台進行處理。選擇 SQLite 作為存儲解決方案的好處是其輕量和高效，但在處理大規模數據時可能會遇到性能瓶頸。整體而言，這種設計使得 Mercury Agent 在小型到中型專案中表現出色，但在大規模應用時可能需要考慮擴展性問題。

## 技術深入分析

Mercury Agent 的核心技術機制在於其靈魂驅動的記憶系統和權限管理功能。這些功能使得 Mercury 能夠在執行命令前詢問用戶，並記錄用戶的偏好和習慣。使用 SQLite 作為存儲解決方案，Mercury 能夠有效地管理多種記憶類型，並支持全文本搜索。這樣的設計使得 Mercury 在處理用戶的長期記憶時表現出色，能夠自動提取和整合信息。然而，這種設計也帶來了性能上的挑戰，特別是在處理大量數據時，可能會導致延遲。選擇 TypeScript 和 React 作為開發語言和框架，使得 Mercury 在前端和後端之間的交互更加流暢，並且便於維護。整體而言，Mercury Agent 在安全性和靈活性上都表現出色，特別適合需要長時間運行的任務或多通道交互的場景。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的詳細步驟，安裝過程相對順暢，但需要 Node.js 環境。文件中包含了多種語言的支持，對於新手來說，能夠在 30 分鐘內上手使用。

## 優缺點分析

> [!success] 優點
> - 靈活的多通道支持，能夠在不同平台上運行。
> - 強大的權限管理系統，能夠防止意外操作。
> - 社群技能擴展，能夠快速適應用戶需求。

> [!danger] 缺點
> - 需要 Node.js 環境，對於某些用戶來說可能會增加安裝複雜度。
> - 社群技能的質量參差不齊，使用前需自行評估。
> - 在 Windows 環境下的安裝可能會遇到問題。

> [!warning] 注意事項
> - 需要 Node.js 20 以上版本才能運行。
> - 社群貢獻的技能未經審核，使用前需自行檢查。
> - 在 Windows 環境下可能會遇到安裝問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了更靈活的插件系統，但缺乏 Mercury 的權限管理功能，適合需要高度自定義的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於簡化的 AI 交互，但不支持多通道訪問，適合小型專案。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel Agents 提供了多個 AI 代理的對抗學習，但在記憶管理上不如 Mercury 強大，適合研究用途。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了更靈活的插件系統，但缺乏 Mercury 的權限管理功能。 | 如果需要高度自定義的 AI 助手，且不太在意安全性，則可以選擇 Agent Sprite Forge。 | medium，因為需要重新設計插件系統的整合方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於簡化的 AI 交互，但不支持多通道訪問。 | 適合小型專案，且不需要複雜的多通道交互。 | low，因為功能上有很多重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mercury-agent** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Agent Sprite Forge 提供了更靈活的插件系統，但缺乏 Mercury 的權限管理功能。 | Boneyard 專注於簡化的 AI 交互，但不支持多通道訪問。 |
> | 遷移成本 | - | medium，因為需要重新設計插件系統的整合方式。 | low，因為功能上有很多重疊。 |
> | 適用場景 | 主要場景 | 如果需要高度自定義的 AI 助手，且不太在意安全性，則可以選 | 適合小型專案，且不需要複雜的多通道交互。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下安裝時可能會遇到安裝問題
  - 解法：使用 WSL 或在其他系統上安裝
- [MEDIUM] 社群技能的質量參差不齊，可能導致不穩定
  - 解法：在安裝前查看技能的評價和使用情況
- [MEDIUM] 在 CLI 模式下，中文輸入可能無法正常工作
  - 解法：使用英文輸入或在 Telegram 中進行交互

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | Mercury 的多通道支持和權限管理能夠有效提升團隊的工作效率。 |
| 大型企業的核心系統 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |
| 需要長時間運行的任務 | 非常適合 | Mercury 能夠作為後台守護進程運行，並提供自動重啟功能。 |
| 需要高度自定義的 AI 助手 | 適合 | 社群技能擴展功能能夠滿足特定需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個靈活且安全的 AI 助手，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具不需要高權限運行，並且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

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
| Forks | 259 |
| Open Issues | 36 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-05-30 |
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
> | [@hotheadhacker](https://github.com/hotheadhacker) | 181 |
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

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
**連結**：[文件](https://mercuryagent.sh/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-23 ~ 2026-05-30）
> **活躍天數** 5 天 · **最新 commit** feat: Token Saver Mode + bottom status bar overhaul + per-step spinners (#69)

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

相關概念：[[Agent 框架]] · [[自動化]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]]

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
> const concepts = ["Agent 框架","自動化","多模態"];
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
