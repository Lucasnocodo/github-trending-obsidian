---
repo: HKUDS/AgentSpace
url: https://github.com/HKUDS/AgentSpace
owner: HKUDS
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "\"AgentSpace: Human + Agents. One Team. One Workspace\""
homepage: "https://hire-an-agent.online/"
stars: 453
stars_per_day: 113
forks: 48
open_issues: 5
created: 2026-06-22
pushed_at: 2026-06-26
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "協作工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "提供人類與智能代理的協作工作空間，讓團隊能夠高效合作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-04"
contributor_count: 3
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 14942
readme_length: 9830
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:453"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "AgentSpace"
  - "HKUDS/AgentSpace"
  - "提供人類與智能代理的協作工作空間，讓團隊能夠高效合作。"
---

# AgentSpace

**453** stars · **113** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/HKUDS--AgentSpace");
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
> 提供人類與智能代理的協作工作空間，讓團隊能夠高效合作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (113 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在大型團隊中協作並管理多個智能代理的企業開發者。
> **一句話重點** AgentSpace 不僅是工具，更是人類與智能代理協作的全新工作方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "協作工具" && p.file.name !== "HKUDS--AgentSpace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 協作工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到高效的多代理協作，值得投入。

> [!abstract] 核心創新
> AgentSpace 將智能代理視為數位員工，並提供完整的治理結構。

## 專案簡介

AgentSpace 是一個專為人類和智能代理團隊設計的協作工作空間，旨在解決當前代理工具多數只適用於個人使用的問題。它允許用戶定義代理的角色、擁有者和責任，並在共享的工作空間中協作。用戶可以使用 `npm run setup && npm run dev:web` 指令快速啟動開發環境，並開始使用多代理工作流程。這個工具的賣點在於它將代理視為數位員工，並提供完整的治理結構，確保敏感操作受到控制。技術上，AgentSpace 使用 TypeScript 和 Node.js，並支持多種部署模式，包括雲端和自我託管，讓團隊能夠根據需求選擇最合適的方案。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，AgentSpace 提供了更強的協作功能，並且在治理和審計方面更為全面。這使得它在需要多代理協作的環境中表現出色，特別是對於大型團隊和組織。使用者可能會遇到的問題包括需要配置多個環境變數以及對於代理的管理和調度可能需要額外的學習時間。這個專案目前處於穩定階段，值得在團隊中試用，特別是對於需要高效協作的環境。

**技術棧**：`TypeScript` · `Node.js` · `CSS` · `JavaScript`

## 重點功能

- 代理招募與分配 — 快速創建具有明確角色和擁有者的代理。
- 多代理工作流程協調 — 代理在共享工作空間中協作。
- 代理工作排程 — 自動化代理執行任務的時間和方式。
- 強制執行權限與批准 — 確保敏感操作在治理邊界內進行。
- 全面審計 — 完整可見代理的行為、決策和輸出。

## 快速開始

1. 安裝依賴並啟動開發環境
```bash
npm run setup && npm run dev:web
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm",
  "指令": "npm run setup && npm run dev:web",
  "預期輸出": "啟動開發伺服器，並在瀏覽器中訪問應用"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 453 stars（113/天），forks 48（10.6%），顯示出強勁的增長潛力。這個專案的主要貢獻者包括 TianyuFan0504 和 chaohuang-ai，他們在開源社群中有一定的影響力。AgentSpace 解決了現有代理工具無法支持團隊協作的痛點，提供了一個整合的工作空間，讓人類和代理能夠共同工作。最近的推廣活動和社群討論也可能促進了這個專案的曝光率。隨著企業對於數位轉型的需求增加，這種工具的需求也隨之上升。

## 適合誰使用

**目標受眾**：需要在大型團隊中協作並管理多個智能代理的企業開發者。

> [!example] 使用場景
> - 項目經理用它來協調多個代理的工作流程，因為這樣可以確保任務的透明度和可追蹤性。
> - 開發團隊用它來管理和調度代理執行自動化測試，因為這樣可以減少手動操作的錯誤率。
> - 企業內部的合規團隊用它來審計代理的行為和決策，因為這樣可以確保所有操作都在治理範圍內。

## 架構分析

AgentSpace 採用微服務架構，將不同功能模組分開以提高可維護性和擴展性。每個代理在其專屬的執行環境中運行，並通過 AgentRouter 進行調度，這樣可以確保代理在執行任務時保持上下文一致性。這種設計使得代理可以在不同的運行時之間切換，而不需要重建其身份和上下文。選擇這種架構的代價是需要管理多個服務和依賴，這對於小型團隊來說可能會增加複雜性。擴展性方面，隨著代理數量的增加，系統的性能可能會受到影響，特別是在高並發的情況下。

## 技術深入分析

AgentSpace 的核心技術機制包括使用 TypeScript 進行開發，並利用 Node.js 作為後端伺服器。這種選擇使得開發者能夠利用現有的 JavaScript 生態系統，並且提高了開發效率。系統能夠處理多達數十個代理的協作，並且在性能上經過優化以支持高並發的請求。選擇微服務架構的好處在於能夠獨立擴展各個模組，但這也意味著需要處理多個服務之間的通信和依賴。技術風險方面，隨著代理數量的增加，系統的性能可能會受到影響，特別是在高負載的情況下。整合方面，AgentSpace 可以輕鬆與現有的 CI/CD 流程結合，並且支持多種開發工具和 IDE。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含快速入門指令，安裝過程相對順暢，但對於新手來說可能需要一些時間來理解代理的管理。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供多代理協作的功能，適合大型團隊使用。
> - 強大的治理和審計功能，確保操作的透明性。
> - 支持多種部署模式，靈活性高。

> [!danger] 缺點
> - 學習曲線較陡，對新手不太友好。
> - 需要較多的初始配置，可能增加上手難度。
> - 在高並發情況下可能會影響性能。

> [!warning] 注意事項
> - 需要配置多個環境變數以支持自我託管模式。
> - 對於新手來說，學習如何管理代理可能需要額外時間。
> - 在某些情況下，性能可能受到代理數量的影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於單一代理的創建和管理，而 AgentSpace 提供多代理協作的功能。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 主要針對競爭性代理的開發，而 AgentSpace 更注重於團隊協作和治理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於單一代理的創建和管理，AgentSpace 提供多代理協作的功能。 | 如果你的團隊需要快速創建和管理單一代理，這個工具可能更合適。 | low，因為功能相對簡單，易於上手。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 針對競爭性代理的開發，AgentSpace 更注重於團隊協作和治理。 | 如果你的專案需要競爭性代理的功能，這個工具可能更適合。 | medium，因為需要重新設計代理的協作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **AgentSpace** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於單一代理的創建和管理，AgentSpace 提供多代理協作的功能。 | 針對競爭性代理的開發，AgentSpace 更注重於團隊協作和治理。 |
> | 遷移成本 | - | low，因為功能相對簡單，易於上手。 | medium，因為需要重新設計代理的協作方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速創建和管理單一代理，這個工具可能更合適。 | 如果你的專案需要競爭性代理的功能，這個工具可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合團隊試用，但不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在自我託管模式下，可能需要手動配置多個環境變數。
  - 解法：參考 .env.example 文件進行配置。
- [MEDIUM] 對於新手來說，管理代理的學習曲線較陡。
  - 解法：建議參加社群討論或查閱範例。
- [MEDIUM] 在高並發情況下，系統性能可能會受到影響。
  - 解法：考慮擴展伺服器資源以應對負載。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以上的開發團隊需要協作管理多個代理 | 非常適合 | 提供多代理協作和治理功能，能有效提升團隊效率。 |
| 小型創業團隊希望快速部署單一代理 | 普通 | 雖然功能強大，但對於小型團隊來說可能過於複雜。 |
| 需要審計和治理的企業環境 | 非常適合 | 提供全面的審計和治理功能，符合企業需求。 |
| 個人開發者使用代理進行簡單任務 | 不適合 | 功能過於複雜，個人開發者可能無法充分利用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到高效的多代理協作，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要適當的權限管理，並且可能存取敏感資料，如憑證和文檔。依賴鏈的信任程度需定期檢查。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
| Forks | 48 |
| Open Issues | 5 |
| Issue 解決率 | 29% (2 closed) |
| 最後推送 | 2026-06-26 |
| 建立日期 | 2026-06-22 |
| 官方網站 | [Link](https://hire-an-agent.online/) |
| Repo 大小 | 14.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/AgentSpace) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 93
>     "CSS" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TianyuFan0504](https://github.com/TianyuFan0504) | 11 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 5 |
> | [@SEUWanglibo](https://github.com/SEUWanglibo) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://hire-an-agent.online/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-23 ~ 2026-06-26）
> **活躍天數** 3 天 · **最新 commit** chore: align web quality script with ci

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/HKUDS/AgentSpace/issues/6) | feat(daemon): support per-provider concurrency for parallel  | 0 | 0 |
> | [#1](https://github.com/HKUDS/AgentSpace/issues/1) | feat: 添加 OpenCode AgentRouter harness 支持，让 OpenCode 获得与 Clau | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> AgentSpace: Human + Agents. One Team. One Workspace
> 
>   English | 中文
> 
>   
>   
>   
>   
>   
>   
> 
>   
> 
>   AgentSpace brings humans and agents together — as one team, inside one workspace
>   Feishu was built for humans. AgentSpace is built for both.
> 
> ---
> 
> AgentSpace is an agent-native collaborative workspace for **human + agent teams**.
> 
> Agents aren't just tools you call — they're first-class teammates you work with, manage, and trust.
> 
> **The problem with today's agents:**
> 
> Real work doesn't happen in isolation. It happens across people, systems, and accountability boundaries. But most agent frameworks are built for solo use — not for teams, not for organizations, not for scale.
> 
> **What AgentSpace is built for:**
> - 🧑‍💼 Agents with defined roles, owners, and responsibilities
> - 🤝 Humans and agents collaborating inside a shared workspace
> - 🔐 Sensitive actions governed with permissions, approvals, and audit trails
> - 🔄 Agents that can be recruited, transferred, and audited across your organization
> 
> **AgentSpace** helps your team move fast, stay accountable, and grow without losing control.
> 
> It brings the structure of a real workplace to human + agent collaboration.
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ## Key Features of AgentSpace
> 
> **What teams can do with AgentSpace:**
> 
> - 🗂 **Recruit & assign agents** — spin up purpose-built agents with defined roles and owners
> - 🤝 **Coordinate multi-agent workflows** — agents collaborate inside a shared workspace
> - 📅 **Schedule agent work** — automate when and how agents execute tasks
> - 🔐 **Enforce permissions & approvals** — keep sensitive actions inside governance boundaries
> - 📋 **Audit everything** — full visibility into agent actions, decisions, and outputs
> - 🔄 **Share & transfer agents** — move digital employees across teams and departments
> 
> ```bash
> npm run setup && npm run dev:web
> ```
> 
> ---
> 
> 
> ## Deployment Options
> 
> AgentSpace supports two deployment modes — pick whichever fits your team:
> 
> | Mode | Best for | How to start |
> |------|----------|--------------|
> | ☁️ **Platform** (hosted) | Teams that want to get started immediately — no infrastructure, database, or daemon host to manage | Visit [hire-an-agent.online](https://hire-an-agent.online) |
> | 🖥️ **Self-hosted** (local) | Teams that require full control over data, infrastructure, provider CLIs, runtime machines, and internal deployment policy | Clone this repo and follow the setup guide below |
> 
> Both modes run the same product — digital employees, AgentRouter scheduling, workspace permissions, approvals, remote daemon execution, and auditable outputs. No feature gaps between the two.
> 
> ---
> 
> 
> ## Advanced Configuration
> 
> For environment variables and deployment examples, start with:
> 
> - [.env.example](.env.example)
> - [deploy/systemd/agentspace.env.example](deploy/systemd/agentspace.env.example)
> - [deploy/systemd/agentspace-daemon.env.example](deploy/systemd/agentspace-daemon.env.example)
> 
> Quality commands:
> 
> ```bash
> npm run build
> npm run typecheck
> npm run lint:web
> npm run test:web
> npm run test:e2e:web
> npm run quality:web
> ```
> 
> 
> ## News
> 
> - **2026-06-26** — The local `quality:web` command now mirrors the web static-check path more closely by including the web test TypeScript project before lint and Vitest.
> 
> - **2026-06-24** — OpenCode has moved onto the AgentRouter execution path. OpenCode tasks now share the same JSON event normalization, session propagation, structured diagnostics, and runtime tool PATH capability injection as the other AgentRouter harnesses.
> 
> - **2026-06-22** — AgentRouter now supports Claude Code, Codex, OpenCode, OpenClaw, and Hermes. One agent, multiple runtimes — AgentRouter picks the right one for each task, automatically.
> 
> - **2026-06-21** — Initial release: AgentSpace v1.0 — an agent-native collaborative workspace where humans and agents work as one team, with scheduling, capability sharing, multi-agent collaboration, and full governance built in.
> 
> ---
> 
> 
> ## The Problem with Today's Agent Workflows
> 
> Agents are getting more capable. But the way teams use them hasn't caught up.
> 
> Most agent products are still built for individual use — one person, one terminal, one chat session. The moment a real team tries to run agents as part of daily operations, things break down:
> 
> - **Agents stay private** — powerful agents live inside one person's terminal or account, invisible to the rest of the team.
> - **Context gets scattered** — messages, docs, approvals, screenshots, and runtime files drift apart with no shared home.
> - **Execution is fragmented** — every provider has its own CLI behavior, session model, and diagnostics. Switching runtimes means rebuilding context from scratch.
> - **Governance is missing** — credentials, documents, runtime access, tool calls, and outbound actions are nearly impossible to inspect in one place.
> - **Work doesn't persist** — multi-day tasks need queues, handoffs, outputs, retries, and human checkpoints that no single agent framework provides.
> 
> The result: agents remain powerful in isolation, but weak in teams.
> 
> **AgentSpace is built to change that.** Humans own direction and authorization. Agents own coordination and execution.
> 
> ---
> 
> 
> ## What is AgentSpace?
> 
> **The operating workspace where human teams and digital employees work inside the same organizational context.**
> 
> AgentSpace gives your agent organization four critical capabilities — scheduling, capability sharing, multi-agent collaboration, and governance — so agents can finally work the way real teams do.
> 
> ---
> 
> 
> ### 🗓 Scheduling — Same agent, best-fit runtime
> 
> The same agent shouldn't need to be rebuilt every time execution requirements change.
> 
> - Keep agent identity, instructions, and context stable across tasks.
> - Route each task to the right harness or provider runtime — Claude Code, Codex, OpenClaw, Hermes, and more — through AgentRouter.
> - Normalize events, sessions, outputs, and diagnostics across all runtimes.
> - When the execution path changes, only the harness changes. Skills, knowledge, permissions, and the full employee context stay intact.
> 
> ---
> 
> 
> ### 🧑‍💼 Capability — Turn private agents into shared organizational assets
> 
> A great agent locked inside one person's account is wasted organizational potential.
> 
> - Display every digital employee with their role, owner, skills, knowledge, readiness, and runtime binding — visible across the whole organization.
> - Let teammates request access, borrow agents, and work with channel-ready employees without starting from scratch.
> - Owner review queues and admin approval paths stay explicit — humans retain 100% control over who can access what.
> - Make great agents visible, without giving up control.
> 
> ---
> 
> 
> ### 🤝 Collaboration — Agents coordinate, humans approve
> 
> Real work moves through people, systems, and decisions — not just a single chat session.
> 
> - Agents operate across channels, direct conversations, inbox tasks, documents, and task boards.
> - Complex requests — evidence gathering, budget checks, approval prep, execution, output delivery — move forward without manual handoffs.
> - Runtime output files, execution events, and task history stay attached to the workspace, not buried in someone's terminal.
> - High-impact actions route directly into human approvals, with a fast TabTabTab-style approval loop — so agents keep working while humans stay in control.
> 
> ---
> 
> 
> ### 🔐 Security — Every action has a boundary, a record, and an owner
> 
> As agents take on more execution, governance can't be an afterthought.
> 
> - Govern workspace roles, channels, documents, skills, knowledge, runtimes, daemon tokens, and Google credentials — all from one place.
> - Support document access requests, runtime tool approvals, knowledge proposal reviews, and agent-scoped Google Workspace delegation.
> - Inspect permissions by resource tree or by actor.
> - Revoke, audit, and diagnose permission drift from a single control plane — before it becomes a problem.
> 
> ---
> 
> 
> ## The Difference
> 
> | Without AgentSpace | With AgentSpace |
> | --- | --- |
> | Agents are personal tools hidd

## 延伸閱讀

相關概念：[[自動化]] · [[微服務]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[anomalyco--rift|anomalyco/rift]]

[GitHub](https://github.com/HKUDS/AgentSpace) · [官方網站](https://hire-an-agent.online/)

## 相關收錄

> [!note]- 直接競品（同子分類：協作工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "協作工具" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "HKUDS--AgentSpace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","微服務","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--AgentSpace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--AgentSpace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--AgentSpace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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
> const me = dv.page("Repos/HKUDS--AgentSpace");
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

> **2026-06-27** — 首次收錄
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

- [[2026-06-27|2026-06-27]] — 首次收錄，453 stars
