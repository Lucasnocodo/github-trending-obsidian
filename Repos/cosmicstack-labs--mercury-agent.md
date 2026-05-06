---
repo: cosmicstack-labs/mercury-agent
url: https://github.com/cosmicstack-labs/mercury-agent
owner: cosmicstack-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI or Telegram."
homepage: "https://mercury.cosmicstack.org/"
stars: 1974
stars_per_day: 132
forks: 205
open_issues: 24
created: 2026-04-20
pushed_at: 2026-05-05
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "AI 助手"
release_tag: "v1.1.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一個具備權限管理、記憶功能和多通道訪問的 AI 助手，隨時隨地運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 2391
readme_length: 9945
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1117,2026-04-26:1124,2026-04-27:1416,2026-04-27:1422,2026-04-28:1549,2026-04-29:1649,2026-04-30:1774,2026-05-01:1837,2026-05-02:1880,2026-05-03:1910,2026-05-04:1946,2026-05-05:1962,2026-05-06:1974"
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
  - "提供一個具備權限管理、記憶功能和多通道訪問的 AI 助手，隨時隨地運行。"
---

# mercury-agent

**2.0k** stars · **132** stars/天 · 建立 15 天前 · TypeScript · MIT

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
> 提供一個具備權限管理、記憶功能和多通道訪問的 AI 助手，隨時隨地運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (132 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個具備高安全性和個性化功能的 AI 助手的中小型團隊或個人。
> **一句話重點** Mercury Agent 的設計不僅注重功能性，還強調使用者的安全和個性化需求。

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
> **結論** 花 5 小時學、3 小時整合，得到一個高安全性和個性化的 AI 助手，值得投入。

> [!abstract] 核心創新
> Mercury Agent 是一個靈魂驅動的 AI 助手，具備權限管理和持久性記憶功能。

## 專案簡介

Mercury Agent 是一個以使用者需求為核心的 AI 助手，具備權限管理、記憶功能和多通道訪問能力。使用者可以透過 CLI 或 Telegram 與其互動，並且擁有 31 種內建工具，支持自定義擴展。其核心機制是基於 SQLite 的持久性記憶，能夠自動提取和記錄使用者的偏好和習慣，並在執行命令前詢問使用者確認。這樣的設計不僅提高了安全性，還能避免意外操作。關鍵指令如 `mercury up` 可以啟動後台守護進程，確保 Mercury 隨時在線。技術上，Mercury 使用 TypeScript 開發，並依賴多個 AI 提供者（如 OpenAI 和 Anthropic），在提供服務時能自動切換，確保穩定性。

與其他 AI 助手相比，Mercury 的獨特之處在於其「靈魂驅動」的設計，允許使用者自定義個性，並且具有嚴格的權限控制。這使得 Mercury 更適合需要高安全性和個性化的使用情境。實際使用中，Mercury 能夠處理多達 10 種記憶類型，並支持自動化任務調度，這對於需要定期執行任務的使用者來說非常方便。社群活躍度中等，開發者對於問題的回應速度尚可。整體來看，這是一個適合中小型團隊或個人使用的穩定工具，未來可能會進一步擴展更多的 AI 提供者和功能。

**技術棧**：`TypeScript 5.7` · `Node.js 20+` · `SQLite`

## 重點功能

- 權限管理 — 透過 shell blocklist 和會話確認，防止意外執行危險命令。
- 持久性記憶 — 使用 SQLite 儲存多達 10 種記憶類型，支持自動提取和衝突解決。
- 多通道訪問 — 支持 CLI 和 Telegram 互動，允許多用戶訪問和管理。
- 自定義個性 — 使用者可以透過 markdown 文件定義 AI 的個性和偏好。
- 任務調度 — 支持 cron 表達式的定期任務安排，方便自動化工作流程。

## 快速開始

1. 全局安裝 Mercury Agent
```bash
npm i -g @cosmicstack/mercury-agent
```
2. 啟動設置嚮導
```bash
mercury
```
3. 重新配置設置
```bash
mercury doctor
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Mercury Agent",
  "mercury up",
  "# 預期輸出：安裝系統服務並啟動後台守護進程"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天就累積 1974 stars（132/天），forks 205（10.4%），顯示出穩定的增長潛力。作者 Cosmic Stack 的團隊在 AI 和開源領域有一定的經驗，這個專案解決了許多 AI 助手在安全性和個性化上的不足，提供了權限管理和記憶功能，讓使用者能夠更安心地使用 AI。社群的反饋也顯示出對於功能擴展的需求，例如對於不同 API 提供者的支持。這些因素共同推動了專案的流行。

## 適合誰使用

**目標受眾**：需要一個具備高安全性和個性化功能的 AI 助手的中小型團隊或個人。

> [!example] 使用場景
> - 自由職業者用它來管理每日任務，因為它能夠自動記錄和提醒重要事項，避免遺漏。
> - 小型團隊的開發者用它來協調團隊溝通，因為它支持 Telegram 多用戶訪問，方便管理和分配任務。
> - AI 研究者用它來測試不同的 LLM 提供者，因為它能夠自動切換 API 提供者，提升測試效率。

## 架構分析

Mercury Agent 採用模組化設計，主要由 CLI 和 Telegram 兩個通道組成，並透過 SQLite 來管理記憶資料。這樣的設計使得使用者可以靈活選擇交互方式，並且在後台持續運行，提供即時反饋。資料流方面，所有的命令和請求都會經過權限檢查，確保安全性。選擇 SQLite 作為記憶存儲的好處在於其輕量和高效，但在處理大量資料時可能會遇到性能瓶頸。擴展性方面，Mercury 支持安裝社群技能，這意味著未來可以輕鬆增加新功能，但也可能因為依賴外部技能而引入不穩定性。

## 技術深入分析

Mercury Agent 的核心技術機制是其靈魂驅動的設計，這意味著使用者可以透過 markdown 文件定義 AI 的個性，這在其他 AI 助手中並不常見。它使用 SQLite 作為記憶存儲，這使得資料的讀取和寫入速度都非常快，但在處理大量資料時可能會遇到性能瓶頸。設計上，Mercury 採用了模組化的架構，這使得未來可以輕鬆擴展新功能，但也可能因為依賴外部技能而引入不穩定性。對於性能和資源需求，Mercury 在運行時需要 Node.js 20 以上的環境，這對於某些老舊系統可能造成限制。安全性方面，Mercury 的權限管理設計能夠有效防止意外操作，這對於需要高安全性的使用者來說是個重要優勢。整合方面，Mercury 可以與現有的 CI/CD 流程相容，但需要一定的配置時間來確保所有功能正常運行。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝和使用範例，安裝過程相對順暢。設置嚮導能夠引導使用者完成初始配置，但對於新手來說仍需花一些時間理解各項功能。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 具備強大的記憶管理功能，能夠自動記錄和提取使用者偏好。
> - 提供多通道訪問，方便不同場景下的使用。
> - 權限管理設計提高了安全性，避免意外操作。

> [!danger] 缺點
> - 目前僅支持 CLI 和 Telegram，缺乏對其他通訊工具的支持。
> - 對於大型資料集的處理性能可能會受到限制。
> - 需要一定的設置時間和學習成本，特別是對於新手。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本
> - 需要 Telegram Bot Token 進行多用戶管理
> - 目前僅支持 CLI 和 Telegram 作為通道，不支持其他即時通訊工具

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建 AI 代理的可視化界面，而 Mercury 則提供 CLI 和 Telegram 的多通道支持，適合不同的使用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 更加專注於數據管理和分析，而 Mercury 提供更全面的 AI 助手功能，包含記憶和權限管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於可視化界面，而 Mercury 提供 CLI 和 Telegram 的多通道支持。 | 如果你需要一個可視化的 AI 代理管理工具，而不是 CLI 操作。 | medium，因為需要重新學習界面操作。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據管理和分析，而 Mercury 提供更全面的 AI 助手功能。 | 如果你的主要需求是數據分析，而不是 AI 助手的多功能性。 | high，因為需要重構整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mercury-agent** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於可視化界面，而 Mercury 提供 CLI 和 Telegram 的多通道支持。 | 專注於數據管理和分析，而 Mercury 提供更全面的 AI 助手功能。 |
> | 遷移成本 | - | medium，因為需要重新學習界面操作。 | high，因為需要重構整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你需要一個可視化的 AI 代理管理工具，而不是 CLI  | 如果你的主要需求是數據分析，而不是 AI 助手的多功能性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次設置過程中，若未提供 API 金鑰會導致無法進行後續操作
  - 解法：確保在設置過程中提供有效的 API 金鑰
- [MEDIUM] 當使用者未正確配置 Telegram Bot Token 時，無法進行多用戶管理
  - 解法：在設置過程中仔細檢查 Telegram Bot Token 的配置
- [MEDIUM] 在高負載情況下，可能會出現性能瓶頸，導致反應延遲
  - 解法：定期檢查和優化記憶資料的大小和結構

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的創業團隊需要一個 AI 助手來管理任務 | 非常適合 | Mercury 的多通道支持和記憶功能能夠有效協助團隊協作。 |
| 需要高安全性的企業環境 | 適合 | 其權限管理設計能夠防止意外操作，適合企業使用。 |
| 大型企業的 AI 研究部門 | 普通 | 雖然功能強大，但在處理大量資料時可能會遇到性能瓶頸。 |
| 個人開發者需要一個簡單的 AI 助手 | 非常適合 | 安裝簡單且功能全面，能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到一個高安全性和個性化的 AI 助手，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：Mercury 需要存取 API 金鑰和 Telegram Bot Token，這些敏感資料需妥善管理。依賴於外部 API 可能存在供應鏈風險，建議在 CI/CD 中使用時進行額外的安全審查。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Mercury Agent 最常與 CLI 工具和 Telegram 搭配使用，通常在開發和部署階段進行互動。在一個使用 Node.js 的專案中，開發者可以透過 `mercury` 指令來啟動代理並進行任務管理。與 GitHub Actions 等 CI 工具的整合相對簡單，能夠輕鬆地在自動化流程中使用。最常見的整合問題是配置 Telegram Bot Token，這需要在設置過程中仔細檢查，否則會影響多用戶管理的功能。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Mercury Agent 出現之前，許多 AI 助手缺乏靈活的權限管理和個性化功能，導致使用者在操作時感到不安全。隨著對 AI 安全性和個性化需求的增加，Mercury 提供了一個全新的解決方案。技術上，SQLite 的使用讓持久性記憶變得可行，這在其他同類工具中並不常見。

未來，隨著更多 AI 提供者的加入，Mercury 可能會成為一個更具競爭力的選擇。

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
| Forks | 205 |
| Open Issues | 24 |
| Issue 解決率 | 8% (2 closed) |
| 最後推送 | 2026-05-05 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://mercury.cosmicstack.org/) |
| Repo 大小 | 2.3 MB |
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

**社群活躍度**：社群活躍度中等，開發者對問題的回應速度尚可。
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

相關概念：[[LLM 推論]] · [[自動化]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/cosmicstack-labs/mercury-agent) · [官方網站](https://mercury.cosmicstack.org/)

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
> const concepts = ["LLM 推論","自動化","多模態"];
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
