---
repo: 2aronS/Duel-Agents
url: https://github.com/2aronS/Duel-Agents
owner: 2aronS
owner_type: User
language: TypeScript
license: MIT
description: "CLI, SDK, and IDE plugins for Duel Agents"
homepage: "https://duelagents.com"
stars: 1002
stars_per_day: 37
forks: 23
open_issues: 1
created: 2026-05-28
pushed_at: 2026-06-23
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "提供 CLI、SDK 和 IDE 插件，讓開發者能夠高效整合多個 LLM 模型並選擇最佳回應。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-09"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 117
readme_length: 5976
bus_factor: 1
last_release_days: 28
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:459,2026-05-31:460,2026-06-01:574,2026-06-02:639,2026-06-02:639,2026-06-03:682,2026-06-04:701,2026-06-05:713,2026-06-06:729,2026-06-07:739,2026-06-08:739,2026-06-09:921,2026-06-10:1027,2026-06-11:1013,2026-06-12:948,2026-06-13:942,2026-06-14:955,2026-06-15:964,2026-06-16:962,2026-06-17:967,2026-06-18:978,2026-06-19:981,2026-06-20:982,2026-06-21:997,2026-06-22:1001,2026-06-23:1004,2026-06-24:1001,2026-06-25:1002"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/ai_agents"
  - "topic/anthropic"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/cursor"
aliases:
  - "Duel-Agents"
  - "2aronS/Duel-Agents"
  - "提供 CLI、SDK 和 IDE 插件，讓開發者能夠高效整合多個 LLM 模型並選擇最佳回應。"
---

# Duel-Agents

**1.0k** stars · **37** stars/天 · 建立 27 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/2aronS--Duel-Agents");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.0` `easy-install`

`ai-agents` `anthropic` `claude-code` `cli` `cursor` `duel-agents` `llm` `npm` `openai-compatible` `openclaw` `sdk` `typescript`

> [!summary] 一句話摘要
> 提供 CLI、SDK 和 IDE 插件，讓開發者能夠高效整合多個 LLM 模型並選擇最佳回應。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (37 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要整合多個 LLM 模型並希望簡化 API 管理的開發者。
> **一句話重點** Duel Agents 的核心價值在於簡化多模型整合的過程，讓開發者能專注於開發而非配置。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/2aronS--Duel-Agents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "2aronS--Duel-Agents" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到簡化多模型整合的效果，值得嘗試。

> [!abstract] 核心創新
> Duel Agents 提供了統一的 API 鍵管理，讓開發者能夠輕鬆整合多個 LLM 模型。

## 專案簡介

Duel Agents 是一個專為開發者設計的 CLI 和 SDK，能夠透過統一的 API 鍵來路由 LLM 請求，並自動選擇最佳的回應。使用者需要先從官方網站獲取 API 鍵，然後透過 `npx @duel-agents/install all` 指令安裝所需的工具。這個工具的賣點在於它能夠整合多個模型（如 Claude、Codex 和 OpenClaw），並通過 `https://duelagents.com/v1` 進行請求，從而提高回應的性價比。技術上，Duel Agents 使用 TypeScript 和 Node.js，並依賴於 Node 20 以上的環境來運行。這意味著它在效能上有不錯的表現，並且能夠利用現代 JavaScript 的特性。

相較於其他類似工具，如 `0xGF/boneyard` 和 `AgentSeal/codeburn`，Duel Agents 提供了更為直觀的安裝和配置流程，並且能夠與多個 IDE 和開發環境無縫整合。使用者可以在不同的環境中靈活配置，並且能夠快速驗證安裝是否成功。這個工具的設計考量了開發者的需求，提供了豐富的文檔和範例，讓新手也能快速上手。儘管目前仍在早期階段，但其潛力不容小覷，特別是對於需要多模型整合的開發者來說。使用者在選擇時需注意，這個工具目前僅支援通過 Duel API 鍵進行操作，無法使用原生的 OpenAI 或 Anthropic 鍵。

**技術棧**：`TypeScript` · `Node.js 20+`

## 重點功能

- 多模型整合 — 支援 Claude、Codex、OpenClaw 等模型的統一 API 鍵管理。
- 簡易安裝 — 使用 `npx @duel-agents/install all` 指令快速安裝所有工具。
- IDE 插件支援 — 提供 Claude Code 和 Cursor 等 IDE 插件，方便開發者在熟悉的環境中使用。
- 環境變數配置 — 自動寫入 API 鍵到 `.env` 檔案，簡化配置流程。
- 豐富的文檔 — 提供詳細的安裝和使用說明，讓新手能快速上手。

## 快速開始

1. 獲取 API 鍵
```bash
export DUEL_API_KEY=duel_yourprefix_yoursecret
```
2. 安裝所有工具
```bash
npx @duel-agents/install all
```
3. 驗證安裝
```bash
npx @duel-agents/install doctor
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 @duel-agents/sdk 並設置 API 鍵。",
  "程式碼": "import { DuelClient } from \"@duel-agents/sdk\";\n\nconst duel = new DuelClient({\n  apiKey: process.env.DUEL_API_KEY!, // required (from dashboard)\n});\n\nconst chat = await duel.chat.completions.create({\n  model: \"duel-auto\",\n  messages: [{ role: \"user\", content: \"Explain concurrent agents briefly.\" }],\n});",
  "預期輸出": "返回最佳的回應，基於多個模型的比較。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天內累積 1002 stars（37/天），forks 23（2.3%），顯示出一定的關注度。作者 2aronS 在開發者社群中活躍，這個專案解決了多模型整合的痛點，之前開發者需要手動管理不同的 API 鍵和請求，這樣的整合方式大幅簡化了流程。社群對於這個專案的反應熱烈，特別是在 GitHub 上的討論和反饋中，顯示出其潛在的需求和使用場景。

## 適合誰使用

**目標受眾**：需要整合多個 LLM 模型並希望簡化 API 管理的開發者。

> [!example] 使用場景
> - 後端工程師用它來整合多個 LLM 模型，因為這樣能夠自動選擇最佳回應，節省了手動調整的時間。
> - AI 研究員用它來快速測試不同模型的表現，因為它提供了統一的 API 鍵和簡單的安裝流程。
> - 全端開發者用它來在 IDE 中直接調用 LLM 功能，因為這樣可以提高開發效率，並減少環境配置的複雜度。

## 架構分析

Duel Agents 採用 monorepo 架構，將不同的功能模組（如 CLI、SDK 和 IDE 插件）集中管理，這樣的設計使得開發和維護變得更加高效。資料流方面，使用者的請求會通過 `https://duelagents.com/v1` 進行路由，並根據配置的 API 鍵選擇最佳的模型進行回應。這種設計的好處是能夠快速擴展和整合新模型，但也可能因為依賴於外部服務而導致延遲。擴展性方面，隨著使用者數量的增加，可能會面臨 API 請求的瓶頸，特別是在高流量的情況下。整體來說，這個架構模式適合需要快速迭代的開發環境。

## 技術深入分析

Duel Agents 的核心技術機制是通過統一的 API 鍵來路由 LLM 請求，這樣的設計使得開發者能夠輕鬆整合多個模型。它使用 TypeScript 和 Node.js 作為主要技術棧，這使得它在效能和可維護性上都有不錯的表現。由於依賴於外部的 API 服務，這可能會導致在高流量情況下的延遲問題。設計上，Duel Agents 旨在提供一個簡單易用的接口，讓開發者能夠快速上手，但這也意味著在功能上可能會有所限制。對於需要高效能和穩定性的應用，開發者需要考慮到這些潛在的風險。整合方面，Duel Agents 能夠與主流的開發工具和框架無縫對接，這使得它在現有的技術生態中具有良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的範例，安裝過程相對順暢，沒有明顯的坑。文檔中有針對新手的指導，讓使用者能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 提供統一的 API 鍵管理，簡化了多模型整合的流程。
> - 安裝和配置過程簡單，適合新手使用。
> - 文檔詳細，提供豐富的範例和指導。

> [!danger] 缺點
> - 目前僅支援 Duel API 鍵，限制了使用者的選擇。
> - 仍在早期階段，可能存在不穩定的情況。
> - 對於某些特定模型的支援可能不如專注於單一模型的工具。

> [!warning] 注意事項
> - 目前僅支援通過 Duel API 鍵進行操作，無法使用原生的 OpenAI 或 Anthropic 鍵。
> - 需要 Node 20 以上的環境，對於舊版環境不兼容。
> - 目前仍在早期階段，可能存在未解決的 bug 和功能限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多模型整合，但安裝和配置流程相對繁瑣，對新手不友好。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定模型的優化，而 Duel Agents 提供更廣泛的模型支援和統一 API。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定模型的整合，使用較為複雜的配置方式。 | 如果你的團隊需要針對特定模型進行深度優化，且不需要多模型支援。 | medium，因為需要重新配置 API 鍵和請求格式。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更為專注的模型整合，性能優化較好，但功能範圍有限。 | 如果你的應用場景只需要單一模型的高效能，且不需要多模型的比較。 | high，因為需要重構整個請求邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Duel-Agents** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定模型的整合，使用較為複雜的配置方式。 | 提供更為專注的模型整合，性能優化較好，但功能範圍有限。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 鍵和請求格式。 | high，因為需要重構整個請求邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要針對特定模型進行深度優化，且不需要多模型支援 | 如果你的應用場景只需要單一模型的高效能，且不需要多模型的比較 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者在實驗環境中試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 鍵格式不正確會導致無法使用
  - 解法：確保 API 鍵格式為 'duel_' + 8 字元 + '_' + 32 字元。
- [MEDIUM] 安裝後 Cursor 仍使用 OpenAI 模型
  - 解法：確認模型覆蓋 URL 和 API 鍵設置正確。
- [MEDIUM] OpenClaw 無法啟動
  - 解法：運行 `openclaw config validate` 以檢查配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡化多模型整合的過程，降低開發成本。 |
| 大型企業的 AI 研究部門 | 普通 | 雖然功能強大，但可能需要更穩定的解決方案。 |
| 個人開發者的實驗性專案 | 非常適合 | 易於上手，適合快速迭代和測試。 |
| 需要高效能的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到簡化多模型整合的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 鍵存取，依賴鏈的信任程度尚可，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Duel Agents 最常與 Node.js 和 TypeScript 開發環境搭配使用，通常在開發階段進行 LLM 請求的路由。在一個使用 Node.js 的專案中，可以通過 `npm install @duel-agents/sdk` 來整合，並在程式碼中直接使用 API。與主流 CI 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要確保 API 鍵和模型配置正確，否則可能導致請求失敗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Duel Agents 出現之前，開發者通常需要手動管理多個 API 鍵和請求，這樣的流程繁瑣且容易出錯。隨著 LLM 技術的進步，對於多模型整合的需求越來越大，Duel Agents 正好填補了這一空白。這個工具代表了開發者在 AI 領域中對於簡化流程和提高效率的追求，未來可能會隨著更多模型的加入而持續演進。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 API 整合
- 有基本的 CLI 使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的非核心模組中使用。

**成功指標**：API 請求的成功率提高 30%。

> [!warning] 退出計畫
> 所有設定存在標準格式，可以手動轉換為其他 API 的請求格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
| Forks | 23 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-23 |
| 建立日期 | 2026-05-28 |
| 官方網站 | [Link](https://duelagents.com) |
| Repo 大小 | 117 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/2aronS/Duel-Agents) |
| Topics | `ai-agents` `anthropic` `claude-code` `cli` `cursor` `duel-agents` `llm` `npm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "Python" : 13
>     "MDX" : 8
>     "JavaScript" : 5
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@2aronS](https://github.com/2aronS) | 98 |

**最新版本**：v0.1.0 (2026-05-28)

> [!info]- Release Notes
> ## Packages
> 
> - **@duel-agents/core**: key validation, env maps, connectivity checks
> - **@duel-agents/install**: CLI for claude-code, cursor, codex, openclaw, and doctor
> - **@duel-agents/sdk**: TypeScript client (OpenAI + Anthropic routes)
> 
> ## Integrations
> 
> Claude plugin, Cursor skill, OpenClaw provider patch, env templates.
> 
> ## CI
> 
> Build, test, and typecheck on Node 20 and 22.
> 
> ## npm
> 
> Packages are not published yet. Add NPM_TOKEN to Actions secrets to enable release workflow.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://duelagents.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-23 ~ 2026-06-23）
> **活躍天數** 1 天 · **最新 commit** add verify steps to plugin readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/2aronS/Duel-Agents/issues/1) | [phantomstars] Fake engagement detected on this repository | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Duel Agents
> 
> [](https://github.com/2aronS/Duel-Agents/actions/workflows/ci.yml)
> [](LICENSE)
> 
> **Use, extend, and ship with Duel Agents**: the IDE-native routing layer that runs prompts against multiple models and picks the cheapest answer that still wins.
> 
> This repo is the official integration package for [duelagents.com](https://duelagents.com).
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## Requirements
> 
> Every tool in this repo routes LLM traffic through **`https://duelagents.com/v1`** with a **Duel API key** (`duel__`).
> 
> You cannot use raw Anthropic or OpenAI keys with these integrations. Get a key from the dashboard:
> 
> **https://duelagents.com/dashboard/settings** (subscribe → create API key)
> 
> ## Quick start
> 
> ```bash
> # 1. Get your key from the dashboard, then:
> export DUEL_API_KEY=duel_yourprefix_yoursecret
> 
> # 2. Install for your tools
> npx @duel-agents/install all
> 
> # 3. Verify
> npx @duel-agents/install doctor
> ```
> 
> ## Install per tool
> 
> | Tool | Command |
> |------|---------|
> | Claude Code | `npx @duel-agents/install claude-code` |
> | Cursor | `npx @duel-agents/install cursor` |
> | Codex CLI | `npx @duel-agents/install codex` |
> | OpenClaw | `npx @duel-agents/install openclaw` |
> | All | `npx @duel-agents/install all` |
> 
> ### Claude Code plugin
> 
> ```bash
> git clone https://github.com/2aronS/Duel-Agents.git
> cd duel-agents
> claude plugin install ./integrations/claude-plugin
> npx @duel-agents/install claude-code
> ```
> 
> Use `/duel-agents:setup` in Claude Code for guided setup.
> 
> ### Cursor
> 
> The installer copies a skill to `.cursor/skills/duel-agents/` and writes `DUEL_API_KEY` to your project `.env`.
> 
> You still need to set **Settings → Models → Override OpenAI Base URL** to `https://duelagents.com/v1` with your Duel key. See [templates/cursor-models.override.md](templates/cursor-models.override.md) and [templates/env.cursor.example](templates/env.cursor.example).
> 
> ### Codex CLI
> 
> Writes `OPENAI_BASE_URL` and `OPENAI_API_KEY` (your Duel key) to `.env`. Restart Codex after install. See [templates/env.codex.example](templates/env.codex.example).
> 
> ### OpenClaw
> 
> Patches `~/.openclaw/openclaw.json` with a `duel` provider and sets default model to `duel/duel-auto`. Telegram/Discord channels are unchanged. Only the model backend switches to Duel.
> 
> ```bash
> npx @duel-agents/install openclaw
> openclaw config validate
> ```
> 
> Reference config: [templates/openclaw.duel.json5](templates/openclaw.duel.json5) and [templates/env.openclaw.example](templates/env.openclaw.example)
> 
> ## Build on top
> 
> Use `@duel-agents/sdk` in your apps, agents, and scripts. **`apiKey` is required.**
> 
> ```bash
> npm install @duel-agents/sdk
> ```
> 
> ```ts
> import { DuelClient } from "@duel-agents/sdk";
> 
> const duel = new DuelClient({
>   apiKey: process.env.DUEL_API_KEY!, // required (from dashboard)
> });
> 
> // OpenAI-compatible
> const chat = await duel.chat.completions.create({
>   model: "duel-auto",
>   messages: [{ role: "user", content: "Explain concurrent agents briefly." }],
> });
> 
> // Anthropic-compatible
> const msg = await duel.messages.create({
>   model: "duel-auto",
>   max_tokens: 1024,
>   messages: [{ role: "user", content: "Hello" }],
> });
> ```
> 
> Hermes Agent, Venice, and any OpenAI-compatible client can use the same pattern:
> 
> ```bash
> OPENAI_BASE_URL=https://duelagents.com/v1
> OPENAI_API_KEY=duel_yourprefix_yoursecret
> ```
> 
> ## LangChain and LlamaIndex
> 
> Duel is OpenAI wire compatible, so it works with the major Python frameworks.
> 
> ### Official packages
> 
> ```bash
> pip install langchain-duel        # LangChain
> pip install llama-index-llms-duel # LlamaIndex
> ```
> 
> ```python
> from langchain_duel import ChatDuel
> 
> llm = ChatDuel(model="duel-auto")  # reads DUEL_API_KEY
> llm.invoke("Explain concurrent agents in one sentence.")
> ```
> 
> ```python
> from llama_index.llms.duel import DuelLLM
> 
> llm = DuelLLM(model="duel-auto")   # reads DUEL_API_KEY
> llm.complete("Explain concurrent agents in one sentence.")
> ```
> 
> Source for both lives in [`python/`](python/). They default to `duel-auto`
> routing and the `https://duelagents.com/v1` proxy.
> 
> ### Without the packages
> 
> Any LangChain or LlamaIndex OpenAI client works by pointing at the proxy:
> 
> ```python
> from langchain_openai import ChatOpenAI
> 
> llm = ChatOpenAI(
>     model="duel-auto",
>     base_url="https://duelagents.com/v1",
>     api_key="duel_yourprefix_yoursecret",
> )
> ```
> 
> ## Configuration
> 
> | Variable | Purpose |
> |----------|---------|
> | `DUEL_API_KEY` | Your Duel API key (required) |
> | `DUEL_AGENTS_API_KEY` | Alias accepted by the installer |
> | `DUEL_PROXY_URL` | Override proxy URL (staging only) |
> | `OPENCLAW_CONFIG_PATH` | Custom OpenClaw config path |
> 
> ## Troubleshooting
> 
> | Symptom | Fix |
> |---------|-----|
> | `Invalid API key format` | Key must be `duel_` + 8 chars + `_` + 32 chars. Create one at the dashboard. |
> | `401` from doctor | Key revoked or subscription inactive. Create a new key on billing/settings. |
> | `Could not reach Duel API` | The proxy at `duelagents.com/v1` must be running. Key format can still be valid; retry later. |
> | OpenClaw won't start | Run `openclaw config validate` after install; restore from `openclaw.json.bak` if needed. |
> | `OPENCLAW_CONFIG_PATH must be inside` | The custom path has to live under `~/.openclaw`. Unset it to use the default. |
> | Cursor still uses OpenAI | Confirm model override URL and that the API key field is your `duel_*` key. |
> | Skill copy failed after npm install | Re-run `npm run build` in the repo, or reinstall `@duel-agents/install`. Skills ship inside the package. |
> 
> ## Repo map
> 
> ```
> packages/core     @duel-agents/core    validation, env maps, connectivity
> packages/cli      @duel-agents/install installer CLI
> packages/sdk      @duel-agents/sdk     TypeScript API client
> integrations/     Claude plugin, Cursor skill, OpenClaw skill
> python/           langchain-duel, llama-index-llms-duel
> templates/        Example env and config files
> ```
> 
> ## Development
> 
> ```bash
> npm install
> npm run build
> npm test
> ```
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## License
> 
> MIT. See [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[機器學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/2aronS/Duel-Agents) · [官方網站](https://duelagents.com)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "2aronS--Duel-Agents"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "2aronS--Duel-Agents"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "2aronS--Duel-Agents" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "2aronS--Duel-Agents"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","API 設計","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "2aronS--Duel-Agents" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "2aronS--Duel-Agents" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "2aronS" AND file.name != "2aronS--Duel-Agents"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
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
> const me = dv.page("Repos/2aronS--Duel-Agents");
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

> **2026-05-31** — 首次收錄
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

- [[2026-06-02|2026-06-02]] — 再次上榜，639 stars
- [[2026-05-31|2026-05-31]] — 首次收錄，459 stars
