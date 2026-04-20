---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 9423
stars_per_day: 673
forks: 1108
open_issues: 128
created: 2026-04-05
pushed_at: 2026-04-19
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "Agent"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "為 AI 代理提供記憶和知識管理能力，讓它在你睡覺時自動學習和增強。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-15"
contributor_count: 3
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 6148
readme_length: 9980
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572,2026-04-12:4848,2026-04-12:4867,2026-04-13:6382,2026-04-14:7448,2026-04-15:7864,2026-04-16:8341,2026-04-17:8693,2026-04-20:9423"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "為 AI 代理提供記憶和知識管理能力，讓它在你睡覺時自動學習和增強。"
---

# gbrain

**9.4k** stars · **673** stars/天 · 建立 14 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/garrytan--gbrain");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 為 AI 代理提供記憶和知識管理能力，讓它在你睡覺時自動學習和增強。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (673 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望快速構建智能代理並需要自動化知識管理的開發者。
> **一句話重點** GBrain 的自動化知識管理能力讓 AI 代理在用戶不在時也能持續學習和增強。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent" && p.file.name !== "garrytan--gbrain" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到自動化知識管理的效果，值得考慮。

> [!abstract] 核心創新
> GBrain 提供自動化的知識吸收和整合能力，顯著提升 AI 代理的智能水平。

## 專案簡介

GBrain 是一個針對 AI 代理的知識管理系統，旨在解決代理記憶不足的問題。它能夠自動吸收會議、電子郵件、推文等資料，並在背景中進行知識整合，讓代理在用戶醒來時變得更聰明。透過自動生成的知識圖譜，GBrain 能夠在不需要 LLM 調用的情況下，快速回答複雜問題，如「誰在 Acme AI 工作？」或「Bob 在這個季度投資了什麼？」。其核心賣點在於能夠提供高達 95% 的召回率和 45% 的精確率，顯著優於傳統的 grep 搜索。

技術上，GBrain 使用了 PostgreSQL 作為後端資料庫，並支援 PGLite 進行快速部署，整體安裝時間約 30 分鐘。這樣的設計使得用戶能夠快速上手，並且無需伺服器配置。與其他工具相比，GBrain 的自動化程度更高，能夠自動處理多種資料格式的導入，並提供每日簡報功能，這在同類工具中並不常見。使用者可以透過簡單的 CLI 指令進行操作，例如 `bun run src/cli.ts` 來啟動系統。雖然 GBrain 提供了強大的功能，但目前仍在活躍開發中，存在一些未解決的問題和功能需求。對於需要在短時間內建立智能代理的開發者來說，GBrain 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `PLpgSQL` · `Shell`

## 重點功能

- 自動知識吸收 — 能夠自動從會議、電子郵件等資料來源中吸收資訊，並整合成知識圖譜。
- 高效的查詢能力 — 透過向量搜索和自動生成的關聯鏈接，能夠快速回答複雜問題。
- 即時簡報功能 — 提供每日簡報，幫助用戶掌握重要資訊和行動項目。
- 快速部署 — 使用 PGLite 進行快速資料庫設置，無需伺服器配置。
- 多格式資料導入 — 支援從多種格式（如 CSV、JSON、Markdown）進行資料導入，提升靈活性。

## 快速開始

1. 安裝 GBrain
```bash
bun install
```
2. 啟動 GBrain CLI
```bash
bun run src/cli.ts
```
3. 進行初始設置
```bash
gbrain setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 9423 stars（673/天），forks 1108（11.8%），顯示出強勁的增長勢頭。Garry Tan 作為 Y Combinator 的總裁，開發這個工具以支持他的 AI 代理，解決了過去缺乏有效記憶管理的痛點。之前的解決方案往往依賴於手動輸入和簡單的資料庫，而 GBrain 則通過自動化的知識圖譜和高效的資料處理來提升代理的智能。社群的反饋和需求也促使了這個專案的快速發展，特別是在功能擴展和錯誤修正方面。

## 適合誰使用

**目標受眾**：希望快速構建智能代理並需要自動化知識管理的開發者。

> [!example] 使用場景
> - 產品經理用它來自動整理會議記錄和行動項目，因為 GBrain 能夠在背景中自動吸收資訊，減少手動整理的時間。
> - 開發者用它來快速建立智能代理，因為只需 30 分鐘即可完成安裝並開始使用，無需複雜的伺服器配置。
> - 研究人員用它來整合多種資料來源，因為 GBrain 支援從 Obsidian、Notion 等多種格式的資料導入，提升資料的可用性。

## 架構分析

GBrain 採用模組化設計，核心使用 TypeScript 實現，並以 PostgreSQL 作為資料庫。這樣的架構使得系統能夠快速部署且易於擴展。資料流方面，系統在接收到資料後，會自動進行解析並生成知識圖譜，這樣的設計使得用戶能夠快速查詢和獲取資訊。選擇 PostgreSQL 作為後端資料庫的好處在於其強大的查詢能力和資料完整性，而代價則是需要一定的學習成本來熟悉 SQL 語法。系統的擴展性良好，但在處理特大型資料集時可能會遇到性能瓶頸。

## 技術深入分析

GBrain 的核心技術機制在於其自動化的知識吸收和整合能力，使用 TypeScript 實現的模組化架構使得系統易於擴展和維護。系統能夠處理多種資料來源，並將其轉換為結構化的知識圖譜，這樣的設計使得用戶能夠快速獲取所需資訊。性能方面，GBrain 在處理小型到中型資料集時表現良好，但在面對超大型資料集時可能會出現性能瓶頸。選擇 PostgreSQL 作為資料庫的好處在於其強大的查詢能力，但也意味著用戶需要具備一定的 SQL 知識。技術風險方面，系統的自動化功能可能在某些情況下導致錯誤的知識整合，這需要用戶定期進行檢查和維護。整合方面，GBrain 能夠與多種現有工具鏈無縫對接，並且提供 CLI 支援，這使得它在 CI/CD 流程中也能輕鬆使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，安裝過程相對順暢，沒有明顯的坑。文件中包含了基本的使用範例，對於新手來說能夠快速上手。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠減少手動操作的需求。
> - 快速部署，適合需要即時使用的場景。
> - 提供即時簡報功能，幫助用戶掌握重要資訊。

> [!danger] 缺點
> - 仍在開發中，存在未解決的問題和功能需求。
> - 對於大型資料集的性能可能不足。
> - 需要一定的技術背景來進行設置和故障排除。

> [!warning] 注意事項
> - 目前仍在活躍開發中，存在未解決的功能需求和 bug。
> - 對於非常大型的資料集，性能可能會受到影響。
> - 需要一定的技術背景來進行初始設置和故障排除。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的知識管理功能，但缺乏 GBrain 的自動化知識吸收能力，適合對資料來源有嚴格要求的用戶。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於安全性和隱私保護，而 GBrain 更加注重知識的自動化整合，適合需要快速部署的場景。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供手動資料管理功能，但不具備 GBrain 的自動化和即時簡報能力，適合對資料管理有高度自定義需求的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供知識管理功能，但缺乏 GBrain 的自動化知識吸收能力。 | 如果需要對資料來源有嚴格要求，且不需要自動化功能，則可選擇 Boneyard。 | medium，因為需要手動配置資料來源。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於安全性和隱私保護，而 GBrain 更加注重知識的自動化整合。 | 如果安全性是首要考量，且需要更高的隱私保護，則選擇 Codeburn。 | low，因為其設置過程相對簡單。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供手動資料管理功能，但不具備 GBrain 的自動化和即時簡報能力。 | 如果對資料管理有高度自定義需求，且不需要自動化功能，則可選擇 Claude-Obsidian。 | high，因為需要手動導入資料。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **boneyard** | **codeburn** | **claude-obsidian** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供知識管理功能，但缺乏 GBrain 的自動化知識吸收能力。 | Codeburn 專注於安全性和隱私保護，而 GBrain 更加注重知識的自動化整合。 | Claude-Obsidian 提供手動資料管理功能，但不具備 GBrain 的自動化和即時簡報能力。 |
> | 遷移成本 | - | medium，因為需要手動配置資料來源。 | low，因為其設置過程相對簡單。 | high，因為需要手動導入資料。 |
> | 適用場景 | 主要場景 | 如果需要對資料來源有嚴格要求，且不需要自動化功能，則可選擇  | 如果安全性是首要考量，且需要更高的隱私保護，則選擇 Code | 如果對資料管理有高度自定義需求，且不需要自動化功能，則可選擇 |

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

- **[HIGH]** 在資料導入過程中，可能會遇到格式不兼容的情況
  - 解法：檢查資料格式並進行轉換
- [MEDIUM] 某些自動化功能可能會導致知識整合錯誤
  - 解法：定期檢查和維護知識圖譜
- [MEDIUM] 安裝過程中可能需要額外的依賴包
  - 解法：確保所有依賴包已正確安裝

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速部署並提供自動化的知識管理功能。 |
| 大型企業的知識管理系統 | 普通 | 在處理超大型資料集時可能會遇到性能瓶頸。 |
| 需要快速原型開發的團隊 | 非常適合 | 安裝和上手時間短，能迅速滿足需求。 |
| 對資料安全性要求極高的應用 | 不適合 | 目前的安全性措施可能不足以滿足高安全需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到自動化知識管理的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要一定的權限來存取資料庫，並且可能會存取敏感資料。依賴鏈的信任程度尚可，但需定期檢查更新以避免安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

GBrain 最常與 PostgreSQL 和 PGLite 搭配使用，通常在資料管理和知識整合的環節中發揮作用。在一個使用 Next.js 的專案中，你可以用 GBrain 來自動整理會議記錄，具體做法是透過 CLI 指令進行資料導入和查詢。GBrain 支援與 GitHub Actions 整合，便於在 CI/CD 流程中使用。整合的摩擦點主要在於需要確保所有依賴包已正確安裝，否則可能會影響系統的正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 GBrain 出現之前，許多 AI 代理的記憶管理主要依賴於手動輸入和簡單的資料庫，這導致了效率低下和知識整合不完整的問題。隨著資料量的增加，這些傳統方法逐漸顯得力不從心。GBrain 的出現正是針對這一痛點，提供了自動化的知識吸收和整合能力，讓 AI 代理能夠在用戶不在時也能持續學習。

未來，隨著 AI 技術的進步，這類工具的需求將會持續增長，GBrain 也有潛力成為市場上的領導者。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解 PostgreSQL 基本操作
- 有 CLI 工具使用經驗

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：寫出 best practices 文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：知識管理效率提升 30%，手動輸入錯誤減少 50%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他知識管理工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
| Forks | 1.1k |
| Open Issues | 128 |
| Issue 解決率 | 9% (13 closed) |
| 最後推送 | 2026-04-19 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 6.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@electric-sql/pglite` `@modelcontextprotocol/sdk` `gray-matter` `marked` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "PLpgSQL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 73 |
> | [@anurag](https://github.com/anurag) | 1 |
> | [@franmaranchello](https://github.com/franmaranchello) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和問題回覆。
**連結**：[文件](https://github.com/garrytan/gbrain#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-19）
> **活躍天數** 4 天 · **最新 commit** feat: Knowledge Runtime — Resolver SDK + BrainWriter + integrity + Budget + scheduler polish (v0.13.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#94](https://github.com/garrytan/gbrain/issues/94) | Plans for a Claude Code-native mode (no API keys, like gstac | 1 | 0 |
> | [#91](https://github.com/garrytan/gbrain/issues/91) | vector serialization bug during migration to supabase `bug` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GBrain
> 
> Your AI agent is smart but forgetful. GBrain gives it a brain.
> 
> Built by the President and CEO of Y Combinator to run his actual AI agents. The production brain powering his OpenClaw and Hermes deployments: **17,888 pages, 4,383 people, 723 companies**, 21 cron jobs running autonomously, built in 12 days. The agent ingests meetings, emails, tweets, voice calls, and original ideas while you sleep. It enriches every person and company it encounters. It fixes its own citations and consolidates memory overnight. You wake up and the brain is smarter than when you went to bed.
> 
> The brain wires itself. Every page write extracts entity references and creates typed links (`attended`, `works_at`, `invested_in`, `founded`, `advises`) with zero LLM calls. Hybrid search. Self-wiring knowledge graph. Structured timeline. Backlink-boosted ranking. Ask "who works at Acme AI?" or "what did Bob invest in this quarter?" and get answers vector search alone can't reach. Benchmarked end-to-end: **Recall@5 jumps from 83% to 95%, Precision@5 from 39% to 45%, +30 more correct answers in the agent's top-5 reads** on a 240-page Opus-generated rich-prose corpus. Graph-only F1: **86.6% vs grep's 57.8%** (+28.8 pts). [Full report](docs/benchmarks/2026-04-18-brainbench-v1.md).
> 
> GBrain is those patterns, generalized. 26 skills. Install in 30 minutes. Your agent does the work. As Garry's personal agent gets smarter, so does yours.
> 
> > **~30 minutes to a fully working brain.** Database ready in 2 seconds (PGLite, no server). You just answer questions about API keys.
> 
> 
> ## Install
> 
> 
> ### Identity and setup
> 
> | Skill | What it does |
> |-------|-------------|
> | **soul-audit** | 6-phase interview generating SOUL.md (agent identity), USER.md (user profile), ACCESS_POLICY.md (4-tier privacy), HEARTBEAT.md (operational cadence). |
> | **setup** | Auto-provision PGLite or Supabase. First import. GStack detection. |
> | **migrate** | Universal migration from Obsidian, Notion, Logseq, markdown, CSV, JSON, Roam. |
> | **briefing** | Daily briefing with meeting context, active deals, and citation tracking. |
> 
> 
> # Audit a feature's skill completeness (10-item checklist)
> bun run scripts/skillify-check.ts src/commands/publish.ts
> 
> 
> # In CI: fail the build when a new feature isn't properly skilled
> bun run scripts/skillify-check.ts --json --recent
> 
> 
> ### Why this is the right answer for OpenClaw
> 
> Auto-generated skills are a liability the first time a behavior breaks. Was it the skill? The test? The resolver trigger? The eval? You don't know, because you never read it. Debugging a black box is pure guesswork.
> 
> Skillify makes the black box legible. Every skill in your tree has: a contract (SKILL.md), tests that exercise that contract, an eval that grades LLM output against a rubric, a resolver trigger the user actually types, and a test that confirms the trigger routes right. If something breaks, you know which layer to look at. If anything goes stale, `check-resolvable` says so.
> 
> In practice this combo produces **zero orphaned skills, every feature with tests + evals + resolver triggers + evals of the triggers.** Compounding quality instead of compounding entropy.
> 
> ```bash
> 
> ## Why it works: many strategies in concert
> 
> The brain isn't one trick. Every retrieval question goes through ~20 deterministic
> techniques layered together. No single one is magic; the win comes from stacking
> them so each layer covers what the others miss.
> 
> ```
> Question
>   │
>   ├─ INGESTION (every put_page)
>   │    ├─ Recursive markdown chunking (or semantic / LLM-guided)
>   │    ├─ Embedding cache invalidation on edit
>   │    └─ Idempotent imports (content-hash dedup)
>   │
>   ├─ GRAPH EXTRACTION (auto-link post-hook, zero LLM)
>   │    ├─ Entity-ref regex (markdown links + bare slugs)
>   │    ├─ Code-fence stripping (no false-positive slugs in code blocks)
>   │    ├─ Typed inference cascade (FOUNDED → INVESTED → ADVISES → WORKS_AT)
>   │    ├─ Page-role priors (partner-bio language → invested_in)
>   │    ├─ Within-page dedup (same target collapses to one link)
>   │    ├─ Stale-link reconciliation (edits remove dropped refs)
>   │    └─ Multi-type link constraint (same person can works_at AND advises)
>   │
>   ├─ SEARCH PIPELINE (every query)
>   │    ├─ Intent classifier (entity / temporal / event / general — auto-routes)
>   │    ├─ Multi-query expansion (Haiku rephrases the question 3 ways)
>   │    ├─ Vector search (HNSW cosine over OpenAI embeddings)
>   │    ├─ Keyword search (Postgres tsvector + websearch_to_tsquery)
>   │    ├─ Reciprocal Rank Fusion (score = sum 1/(60+rank) across both)
>   │    ├─ Cosine re-scoring (re-rank chunks against actual query embedding)
>   │    ├─ Compiled-truth boost (assessments outrank timeline noise)
>   │    ├─ Backlink boost (well-connected entities rank higher)
>   │    └─ Source-aware dedup (one CT chunk per page guaranteed)
>   │
>   ├─ GRAPH TRAVERSAL (relational queries)
>   │    ├─ Recursive CTE with cycle prevention (visited-array check)
>   │    ├─ Type-filtered edges (--type works_at, attended, etc.)
>   │    ├─ Direction control (in / out / both)
>   │    └─ Depth-capped (≤10 for remote MCP; DoS prevention)
>   │
>   └─ AGENT WORKFLOW (graph-confident hybrid)
>        ├─ Graph-query first (high-precision typed answers)
>        ├─ Grep fallback when graph returns nothing
>        └─ Graph hits ranked first in top-K (better P@K and R@K)
> ```
> 
> End-to-end on the BrainBench v1 corpus (240 rich-prose pages, before/after PR #188):
> 
> | Metric                  | BEFORE PR #188 | AFTER PR #188 | Δ           |
> |-------------------------|----------------|---------------|-------------|
> | **Precision@5**         | 39.2%          | **44.7%**     | **+5.4 pts**|
> | **Recall@5**            | 83.1%          | **94.6%**     | **+11.5 pts**|
> | Correct in top-5        | 217            | 247           | **+30**     |
> | Graph-only F1 (ablation)| 57.8% (grep)   | **86.6%**     | **+28.8 pts**|
> 
> Plus 5 orthogonal capability checks (identity resolution, temporal queries,
> performance at 10K-page scale, robustness to malformed input, MCP operation
> contract). All pass. [Full report.](docs/benchmarks/2026-04-18-brainbench-v1.md)
> 
> The point: each technique handles a class of inputs the others miss. Vector
> search misses exact slug refs; keyword catches them. Keyword misses conceptual
> matches; vector catches them. RRF picks the best of both. Compiled-truth boost
> keeps assessments above timeline noise. Auto-link extraction wires the graph
> that lets backlink boost rank well-connected entities higher. Graph traversal
> answers questions search alone can't reach. The agent picks graph-first for
> precision and falls back to keyword for recall. **All deterministic, all in
> concert, all measured.**
> 
> 
> ### On an agent platform (recommended)
> 
> GBrain is designed to be installed and operated by an AI agent. If you don't have one running yet:
> 
> - **[OpenClaw](https://openclaw.ai)** ... Deploy [AlphaClaw on Render](https://render.com/deploy?repo=https://github.com/chrysb/alphaclaw) (one click, 8GB+ RAM)
> - **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** ... Deploy on [Railway](https://github.com/praveen-ks-2001/hermes-agent-template) (one click)
> 
> Paste this into your agent:
> 
> ```
> Retrieve and follow the instructions at:
> https://raw.githubusercontent.com/garrytan/gbrain/master/INSTALL_FOR_AGENTS.md
> ```
> 
> That's it. The agent clones the repo, installs GBrain, sets up the brain, loads 26 skills, and configures recurring jobs. You answer a few questions about API keys. ~30 minutes.
> 
> 
> ### Standalone CLI (no agent)
> 
> ```bash
> git clone https://github.com/garrytan/gbrain.git && cd gbrain && bun install && bun link
> gbrain init                     # local brain, ready in 2 seconds
> gbrain import ~/notes/          # index your markdown
> gbrain query "what themes show up across my notes?"
> ```
> 
> ```
> 3 results (hybrid search, 0.12s):
> 
> 1. concepts/do-things-that-dont-scale (score: 0.94)
>    PG's argument that unscalable effort teaches you what users want.
>    [Source: paulgraham.com, 2013-07-01]
> 
> 2. 

## 延伸閱讀

相關概念：[[RAG]] · [[Agent 框架]] · [[資料視覺化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/garrytan/gbrain)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "garrytan--gbrain" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","Agent 框架","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "garrytan--gbrain" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "garrytan--gbrain" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "garrytan" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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
> const me = dv.page("Repos/garrytan--gbrain");
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

> **2026-04-11** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 再次上榜，4.8k stars
- [[2026-04-11|2026-04-11]] — 首次收錄，2.5k stars
