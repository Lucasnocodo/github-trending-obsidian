---
repo: 2aronS/Duel-Agents
url: https://github.com/2aronS/Duel-Agents
owner: 2aronS
owner_type: User
language: TypeScript
license: MIT
description: "CLI, SDK, and IDE plugins for Duel Agents"
homepage: "https://duelagents.com"
stars: 1027
stars_per_day: 86
forks: 19
open_issues: 1
created: 2026-05-28
pushed_at: 2026-06-05
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
use_case: "提供 CLI、SDK 和 IDE 插件，讓開發者能夠輕鬆整合多個 LLM 模型，並選擇最便宜的回應。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-09"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 73
readme_length: 5576
bus_factor: 1
last_release_days: 13
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:459,2026-05-31:460,2026-06-01:574,2026-06-02:639,2026-06-02:639,2026-06-03:682,2026-06-04:701,2026-06-05:713,2026-06-06:729,2026-06-07:739,2026-06-08:739,2026-06-09:921,2026-06-10:1027"
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
  - "提供 CLI、SDK 和 IDE 插件，讓開發者能夠輕鬆整合多個 LLM 模型，並選擇最便宜的回應。"
---

# Duel-Agents

**1.0k** stars · **86** stars/天 · 建立 12 天前 · TypeScript · MIT

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
> 提供 CLI、SDK 和 IDE 插件，讓開發者能夠輕鬆整合多個 LLM 模型，並選擇最便宜的回應。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (86 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望整合多個 LLM 模型但不想處理複雜配置的開發者。
> **一句話重點** Duel Agents 透過簡化 LLM 整合過程，讓開發者能夠專注於應用開發，而非底層技術細節。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到靈活的 LLM 整合方案，值得一試。

> [!abstract] 核心創新
> 能夠在多個 LLM 模型之間自動選擇最便宜的回應。

## 專案簡介

Duel Agents 是一個整合多個 LLM 模型的工具，透過 CLI 和 SDK，開發者可以輕鬆地將其應用於各種環境。使用者需要先從官方網站獲取 API 金鑰，然後透過 `npx @duel-agents/install all` 指令安裝所需的工具，並使用 `npx @duel-agents/install doctor` 來驗證安裝是否成功。這個工具的賣點在於它能夠自動選擇最便宜且有效的模型回應，從而節省成本。技術上，Duel Agents 使用 TypeScript 和 Node.js 進行開發，並且需要 Node 20 或以上版本。它的依賴樹相對簡單，主要集中在核心功能的實現上，這使得整體安裝和使用都相對輕鬆。

與其他類似工具相比，如 0xGF/boneyard 和 432539/gpt2api，Duel Agents 提供了更高的靈活性，因為它能夠在多個模型之間進行路由，而不僅僅是單一模型的調用。實際使用中，Duel Agents 能夠處理多達 1024 個 tokens 的請求，並且在性能上能夠滿足大多數開發需求。社群活躍度尚可，但目前僅有一個開放的 issue，顯示出開發者對於問題的回應速度較快。這個專案目前處於 alpha 階段，適合小型團隊或個人開發者進行試用，但不建議用於生產環境的核心應用。未來六個月內，隨著功能的增強和社群的擴展，這個專案有潛力成為更成熟的解決方案。

**技術棧**：`TypeScript` · `Node.js 20+`

## 重點功能

- 多模型路由 — 能夠自動選擇最便宜且有效的模型回應。
- CLI 安裝 — 使用 `npx @duel-agents/install all` 一鍵安裝所有工具。
- TypeScript SDK — 提供 TypeScript 客戶端，簡化 API 調用。
- 環境變數配置 — 自動將 API 金鑰寫入 `.env` 檔案，方便管理。
- 與主流框架相容 — 支援 LangChain 和 LlamaIndex 等 Python 框架的整合。

## 快速開始

1. 獲取 API 金鑰
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
  "前置條件": "需要安裝 @duel-agents/sdk 並設置 API 金鑰。",
  "程式碼": "const duel = new DuelClient({ apiKey: process.env.DUEL_API_KEY! });\nconst chat = await duel.chat.completions.create({ model: 'duel-auto', messages: [{ role: 'user', content: 'Explain concurrent agents briefly.' }] });",
  "預期輸出": "返回模型對於問題的回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 1027 stars（86/天），forks 19（1.9%），顯示出一定的關注度。作者 2aronS 之前在開源領域有過其他貢獻，這次專案解決了 LLM 整合過程中的複雜性問題，讓開發者能夠更輕鬆地選擇模型。雖然目前沒有明顯的觸發事件，但在開源社群中對於 AI 模型的需求持續增長，使得這個工具的出現正好符合市場需求。forks/stars 比率低，顯示出目前使用者主要是觀望，尚未大量修改使用。

## 適合誰使用

**目標受眾**：希望整合多個 LLM 模型但不想處理複雜配置的開發者。

> [!example] 使用場景
> - 後端工程師用它來整合多個 LLM 模型，因為可以自動選擇最便宜的回應，節省成本。
> - AI 開發者用它來快速測試不同模型的效果，因為只需簡單的 CLI 指令就能完成安裝和配置。
> - 獨立開發者用它來在小型專案中實現 LLM 功能，因為它的安裝和使用門檻低，適合快速迭代。

## 架構分析

Duel Agents 採用 monorepo 架構，將 CLI、SDK 和插件整合在同一個專案中，這樣的設計使得開發和維護變得更為集中和高效。資料流方面，所有 LLM 請求都經由 `https://duelagents.com/v1` 進行路由，並需要有效的 API 金鑰。這樣的設計選擇使得使用者無需關心底層模型的切換，僅需專注於如何使用 API。選擇 monorepo 的代價是可能會增加初期的學習成本，但隨著專案的發展，這樣的架構能夠更容易地擴展新功能。擴展性方面，隨著更多模型的加入，可能需要考慮如何管理和優化路由邏輯，以避免性能瓶頸。

## 技術深入分析

Duel Agents 的核心技術機制在於其能夠透過 API 金鑰來路由 LLM 請求，並自動選擇最便宜的模型回應。這樣的設計使得開發者無需手動管理多個模型的調用，提升了開發效率。效能上，該工具能夠處理多達 1024 個 tokens 的請求，並且在大多數情況下能夠快速響應。選擇 TypeScript 作為開發語言的原因在於其靜態類型特性能夠提高代碼的可維護性，並降低潛在的錯誤。

依賴樹相對簡單，主要集中在核心功能的實現上，這使得整體安裝和使用都相對輕鬆。技術風險方面，隨著使用者數量的增加，可能會面臨 API 請求的瓶頸問題，這需要未來進一步的優化和擴展。整合方面，Duel Agents 能夠與主流框架如 LangChain 和 LlamaIndex 無縫對接，這為開發者提供了更多的靈活性。整體來看，這個專案在技術上具有良好的潛力，未來可能會吸引更多的使用者和貢獻者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，僅需設定 API 金鑰即可。文件目前僅提供英文版本，缺乏多語言支持，但整體上能夠讓新手在 30 分鐘內順利上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 安裝流程，降低了使用門檻。
> - 能夠自動選擇最便宜的模型回應，節省開發成本。
> - 與多個主流框架相容，便於整合進現有專案。

> [!danger] 缺點
> - 目前僅支援 Node 20+，限制了使用者的環境選擇。
> - 需要從官方網站獲取 API 金鑰，增加了使用的複雜性。
> - 社群活躍度尚可，但問題解決率為 0%，可能影響使用者體驗。

> [!warning] 注意事項
> - 目前僅支援 Node 20+。
> - 需要從官方網站獲取 API 金鑰，無法使用原生的 OpenAI 或 Anthropic 金鑰。
> - 目前僅有一個開放的 issue，顯示出社群活躍度尚可，但可能缺乏即時支援。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 LLM 整合，但不具備自動選擇最便宜模型的功能，適合需要固定模型的情境。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，無法處理多模型路由，適合對 GPT-2 有特定需求的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 LLM 整合，但不具備自動選擇最便宜模型的功能。 | 如果需要固定模型的調用，且不需要自動選擇功能。 | medium，因為需要重新設計調用邏輯。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，無法處理多模型路由。 | 如果對 GPT-2 有特定需求，且不需要多模型的靈活性。 | low，因為只需調整 API 接入方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Duel-Agents** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 LLM 整合，但不具備自動選擇最便宜模型的功能。 | 專注於 GPT-2 模型的 API 接入，無法處理多模型路由。 |
> | 遷移成本 | - | medium，因為需要重新設計調用邏輯。 | low，因為只需調整 API 接入方式。 |
> | 適用場景 | 主要場景 | 如果需要固定模型的調用，且不需要自動選擇功能。 | 如果對 GPT-2 有特定需求，且不需要多模型的靈活性。 |

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

- **[HIGH]** API 金鑰格式不正確時會出現錯誤
  - 解法：確保金鑰格式為 'duel_' + 8 字元 + '_' + 32 字元。
- [MEDIUM] 安裝後 OpenClaw 無法啟動
  - 解法：執行 'openclaw config validate' 以確認配置正確。
- [MEDIUM] Cursor 仍使用 OpenAI 模型
  - 解法：確認模型覆蓋 URL 和 API 金鑰設置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單的 CLI 安裝和多模型路由功能能夠快速滿足需求。 |
| 大型企業的核心應用 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未經過充分測試。 |
| 個人開發者的實驗性專案 | 適合 | 低門檻的安裝和使用方式，適合快速迭代。 |
| 需要高可用性的商業應用 | 不適合 | 尚未達到生產環境的穩定性要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到靈活的 LLM 整合方案，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 金鑰，且不存取敏感資料。依賴鏈的信任程度尚可，但需注意未經審計的依賴項。

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
| Forks | 19 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-05 |
| 建立日期 | 2026-05-28 |
| 官方網站 | [Link](https://duelagents.com) |
| Repo 大小 | 73 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/2aronS/Duel-Agents) |
| Topics | `ai-agents` `anthropic` `claude-code` `cli` `cursor` `duel-agents` `llm` `npm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 68
>     "Python" : 15
>     "MDX" : 10
>     "JavaScript" : 6
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@2aronS](https://github.com/2aronS) | 57 |

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

**社群活躍度**：社群活躍度尚可，僅有一個開放的 issue。
**連結**：[文件](https://duelagents.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-05 ~ 2026-06-05）
> **活躍天數** 1 天 · **最新 commit** update docs to chat mdx

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/2aronS/Duel-Agents/issues/1) | [phantomstars] Fake engagement detected on this repository | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Duel Agents
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
> You still need to set **Settings → Models → Override OpenAI Base URL** to `https://duelagents.com/v1` with your Duel key. See [templates/cursor-models.override.md](templates/cursor-models.override.md).
> 
> ### Codex CLI
> 
> Writes `OPENAI_BASE_URL` and `OPENAI_API_KEY` (your Duel key) to `.env`. Restart Codex after install.
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
> Reference config: [templates/openclaw.duel.json5](templates/openclaw.duel.json5)
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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
> const concepts = ["CLI/TUI","自動化測試","API 設計"];
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
