---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 7864
stars_per_day: 874
forks: 847
open_issues: 57
created: 2026-04-05
pushed_at: 2026-04-15
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "讓你的 AI 智能代理擁有個人化的知識庫，隨時隨地提升其智慧。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-15"
contributor_count: 3
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 4527
readme_length: 9941
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572,2026-04-12:4848,2026-04-12:4867,2026-04-13:6382,2026-04-14:7448,2026-04-15:7864"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "讓你的 AI 智能代理擁有個人化的知識庫，隨時隨地提升其智慧。"
---

# gbrain

**7.9k** stars · **874** stars/天 · 建立 9 天前 · TypeScript · MIT

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

`easy-install`

> [!summary] 一句話摘要
> 讓你的 AI 智能代理擁有個人化的知識庫，隨時隨地提升其智慧。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (874 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望為 AI 代理建立個人化知識庫的開發者，尤其是小型團隊或個人開發者。
> **一句話重點** GBrain 的真正價值在於它能夠讓 AI 代理隨著時間的推移不斷增長智慧，而不是僅僅依賴靜態的知識庫。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "garrytan--gbrain" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到一個持續增長的知識庫，值得嘗試。

> [!abstract] 核心創新
> GBrain 透過持續的知識更新和智能增長，讓 AI 代理在每次交互中變得更聰明。

## 專案簡介

GBrain 是一個基於 Postgres 的個人知識庫，旨在讓 AI 代理能夠持續學習和增長智慧。用戶可以透過 `gbrain init` 指令快速設置一個嵌入式的 PGLite 數據庫，並將會議、電子郵件、推文等信息整合進去。這個過程不需要伺服器，並且可以在 2 秒內完成初始化。GBrain 的設計理念是讓 AI 代理在每次交互中都能夠從知識庫中讀取和寫入信息，從而在每次對話後變得更加聰明。這種持續的知識積累使得代理能夠在未來的對話中提供更準確的上下文和建議。

技術上，GBrain 使用了嵌入式 Postgres 和 pgvector 來支持高效的向量搜索，並且依賴於多個現代化的 JavaScript 庫來實現其功能。與其他類似工具相比，如 OpenClaw 和 Hermes，GBrain 提供了更為簡單的本地部署選項，並且不需要額外的伺服器支持。這使得它特別適合小型團隊或個人使用，因為它能在不增加額外基礎設施的情況下，快速建立一個功能強大的知識庫。使用者在導入資料時，可以選擇不進行嵌入，這樣可以加快初始設置的速度。GBrain 目前仍在活躍開發中，社群的參與度也在逐步提升，對於希望提升 AI 代理智能的開發者來說，這是一個值得關注的工具。

**技術棧**：`TypeScript` · `PLpgSQL` · `Shell`

## 重點功能

- 快速初始化 — 使用 `gbrain init` 指令在 2 秒內設置 PGLite 數據庫。
- 資料導入 — 支持從 markdown 文件導入資料，使用 `gbrain import ~/notes/` 指令進行索引。
- 向量搜索 — 整合 pgvector 以支持高效的向量查詢，提升搜索質量。
- 自動更新 — 設定定期任務以自動同步和更新知識庫，使用 `gbrain sync` 指令。
- 多種整合 — 提供多種整合食譜，支持從 Gmail、日曆等服務自動導入資料。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/garrytan/gbrain.git && cd gbrain && bun install
```
2. 初始化 GBrain
```bash
gbrain init
```
3. 導入你的 markdown 文件
```bash
gbrain import ~/notes/
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 GBrain 並初始化",
  "指令": "gbrain query \"what themes show up across my notes?\"",
  "預期輸出": "返回與問題相關的主題和內容摘要。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 7864 stars（874/天），forks 847（10.8%），這顯示出強烈的社群興趣。Garry Tan 是這個專案的創建者，過去在 AI 和開源領域有豐富的經驗。GBrain 解決了 AI 代理缺乏個人化知識的痛點，之前的解決方案往往需要複雜的伺服器設置或無法有效整合多種資料來源。近期的推文和社群討論也進一步推動了這個專案的曝光率。隨著嵌入式數據庫技術的成熟，GBrain 的設計變得更加可行，並且能夠在本地環境中運行，降低了使用門檻。高達 10.8% 的 forks/stars 比率顯示出許多開發者對此專案進行實際修改和使用，這是對其實用性的一種肯定。

## 適合誰使用

**目標受眾**：希望為 AI 代理建立個人化知識庫的開發者，尤其是小型團隊或個人開發者。

> [!example] 使用場景
> - 個人開發者用它來建立一個個人知識庫，因為它能在不需要伺服器的情況下快速設置，並且能夠隨著時間的推移不斷增長智慧。
> - 小型團隊的產品經理用它來整合會議記錄和電子郵件，因為這樣可以在會議中快速查詢相關信息，提升決策效率。
> - 自由職業者用它來管理客戶資料和項目進度，因為它能夠自動更新知識庫，減少手動整理的時間。

## 架構分析

GBrain 採用嵌入式 Postgres 作為數據存儲，這樣的選擇使得用戶能夠在本地快速部署，無需伺服器支持。資料流經過初始化、導入和查詢三個主要步驟，使用者可以透過簡單的 CLI 指令進行操作。這種設計降低了使用門檻，但也意味著在處理大型資料集時可能會遇到性能瓶頸。為了擴展性，GBrain 提供了從本地數據庫遷移到 Supabase 的選項，這樣可以在需要時進行擴展。整體架構的輕量化使得 GBrain 特別適合小型團隊或個人使用，但在面對更大規模的數據時，可能需要額外的性能調整。

## 技術深入分析

GBrain 的核心技術機制是使用嵌入式 Postgres 數據庫，這使得用戶能夠在本地快速部署並進行資料管理。它利用 pgvector 進行向量搜索，這樣能夠提高查詢效率，特別是在處理大量文本數據時。效能方面，GBrain 在處理 7000 個文件的文本導入時，約需 30 秒，這顯示出其高效的資料處理能力。設計上，選擇 TypeScript 作為開發語言，使得代碼可讀性和維護性提高，並且能夠利用現有的 JavaScript 生態系統。這樣的選擇雖然增加了學習成本，但也帶來了更強的功能擴展性。技術風險方面，GBrain 目前仍在活躍開發中，可能會面臨 API 穩定性問題，特別是在未來的版本中。整合方面，GBrain 能夠與多種外部服務進行整合，這使得它能夠在現有的技術生態中靈活運用，並且能夠與 CI/CD 流程無縫對接。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指導。安裝過程相對順暢，但需要注意 Postgres 的版本要求。文件中有多個範例和指令，幫助新手快速上手。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 快速設置 — 嵌入式數據庫讓用戶能在幾秒內啟動。
> - 持續學習 — AI 代理能夠隨著時間的推移不斷增長智慧。
> - 簡單的 CLI 操作 — 用戶可透過簡單的指令進行所有操作，無需複雜的配置。

> [!danger] 缺點
> - 對於大型資料集的性能可能不佳，需要進行調整。
> - 不支持小型 AI 模型，限制了用戶的選擇。
> - 目前仍在活躍開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 需要使用較新的 Postgres 版本（17.5+）
> - 不支持小型 AI 模型，必須使用前沿模型如 Claude Opus 4.6 或 GPT-5.4 Thinking。
> - 對於大型資料集，可能需要額外的性能調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了類似的知識管理功能，但依賴於更複雜的伺服器架構，對於小型團隊來說不如 GBrain 方便。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於安全性和隱私保護，但在知識庫的持續增長和智能化方面不如 GBrain 直觀。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 提供了更強的文檔編輯功能，但缺乏 GBrain 的自動更新和知識增長機制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 使用了更複雜的伺服器架構，對於需要高可用性的應用場景更為適合。 | 如果你的團隊需要一個高可用性且可擴展的解決方案，Boneyard 可能更合適。 | medium，因為需要重新配置伺服器和數據庫連接。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於安全性，提供了更強的隱私保護，但在知識管理方面不如 GBrain 直觀。 | 如果你的應用場景對安全性要求極高，Codeburn 是更好的選擇。 | high，因為需要重新設計數據流和安全策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 使用了更複雜的伺服器架構，對於需要高可用性的應用場景更為適合。 | Codeburn 專注於安全性，提供了更強的隱私保護，但在知識管理方面不如 GBrain 直觀。 |
> | 遷移成本 | - | medium，因為需要重新配置伺服器和數據庫連接。 | high，因為需要重新設計數據流和安全策略。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個高可用性且可擴展的解決方案，Boneya | 如果你的應用場景對安全性要求極高，Codeburn 是更好的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在大型資料集上查詢速度可能變慢，特別是未經優化的情況下。
  - 解法：定期進行數據清理和優化，使用 `gbrain embed --stale` 指令。
- **[HIGH]** 在初始化過程中，若未正確設置 API 金鑰，將無法進行向量搜索。
  - 解法：確保在環境變數中正確設置 OPENAI_API_KEY。
- [MEDIUM] 在使用過程中，可能會遇到版本不兼容的問題。
  - 解法：定期檢查依賴版本，並更新至最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 1-3 人的小型創業團隊 | 非常適合 | 快速設置和持續學習的特性非常符合小型團隊的需求。 |
| 個人開發者的知識管理工具 | 非常適合 | 能夠在本地快速部署，並且不需要伺服器支持。 |
| 需要高可用性的企業級應用 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 需要處理大量資料的研究團隊 | 普通 | 雖然能夠處理資料，但性能可能需要進一步調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個持續增長的知識庫，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> GBrain 本身不需要高權限運行，但需要存取 API 金鑰。對於資料的存取和處理，需確保遵循最佳安全實踐。依賴鏈中未發現已知的供應鏈風險，整體安全性較高。

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
| Forks | 847 |
| Open Issues | 57 |
| Issue 解決率 | 11% (7 closed) |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 4.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@electric-sql/pglite` `@modelcontextprotocol/sdk` `gray-matter` `marked` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "PLpgSQL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 63 |
> | [@anurag](https://github.com/anurag) | 1 |
> | [@franmaranchello](https://github.com/franmaranchello) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和回應。
**連結**：[文件](https://github.com/garrytan/gbrain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** feat: search quality boost — compiled truth ranking + detail parameter (v0.8.1) (#64)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/garrytan/gbrain/issues/32) | Support PGLite with local file as DB | 2 | 1 |
> | [#91](https://github.com/garrytan/gbrain/issues/91) | vector serialization bug during migration to supabase `bug` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GBrain
> 
> Your AI agent is smart but it doesn't know anything about your life. GBrain fixes that. Meetings, emails, tweets, calendar events, voice calls, original ideas... all of it flows into a searchable knowledge base that your agent reads before every response and writes to after every conversation. The agent gets smarter every day.
> 
> > **~30 minutes to a fully working brain.** Your agent does the work. Database ready in 2 seconds (PGLite, no server). Schema, import, embeddings, and integrations take 15-30 minutes depending on brain size. You just answer questions about API keys.
> >
> > **Requires a frontier model.** Tested with **Claude Opus 4.6** and **GPT-5.4 Thinking**. Likely to break with smaller models.
> 
> 
> ## Setup details
> 
> `gbrain init` defaults to PGLite (embedded Postgres 17.5 via WASM). No accounts, no server. Config saved to `~/.gbrain/config.json`.
> 
> ```bash
> gbrain init                     # PGLite (default)
> gbrain init --supabase          # guided wizard for Supabase
> gbrain init --url         # any Postgres with pgvector
> ```
> 
> Import is idempotent. Re-running skips unchanged files (SHA-256 content hash). ~30s for text import of 7,000 files, ~10-15 min for embedding.
> 
> 
> ## Need an AI agent first?
> 
> GBrain is designed to be installed and operated by an AI agent. If you don't have one running yet:
> 
> - **[OpenClaw](https://openclaw.ai)** — Deploy [AlphaClaw on Render](https://render.com/deploy?repo=https://github.com/chrysb/alphaclaw) (one click, requires 8GB+ RAM instance)
> - **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** — Deploy on [Railway using this template](https://github.com/praveen-ks-2001/hermes-agent-template) (one click)
> 
> 
> ## Start here
> 
> **https://github.com/garrytan/gbrain** — clone this repo into your agent's filesystem. It's home base for docs, skills, upgrades, and recipes. To upgrade later: `git pull origin main && bun install`.
> 
> Copy this block into [OpenClaw](https://openclaw.ai), [Hermes](https://github.com/NousResearch/hermes-agent), or any persistent AI agent. The agent reads the docs, does the work, and asks you for API keys. ~30 minutes.
> 
> ```
> INSTALL:
> 
>   git clone https://github.com/garrytan/gbrain.git ~/gbrain && cd ~/gbrain
>   curl -fsSL https://bun.sh/install | bash
>   export PATH="$HOME/.bun/bin:$PATH"
>   bun install && bun link
>   Verify: gbrain --version
>   (If gbrain is not found, restart your shell or add the PATH export
>   to your shell profile.)
> 
> API KEYS — ask the user for these:
> 
>   export OPENAI_API_KEY=sk-...          # required for vector search
>   export ANTHROPIC_API_KEY=sk-ant-...   # optional, improves search quality
>   Save to shell profile or .env. Without OpenAI, keyword search still
>   works. Without Anthropic, search works but skips query expansion.
> 
> SET UP THE BRAIN:
> 
>   gbrain init                           # PGLite, no server needed
>   Verify: gbrain doctor --json          # all checks pass
> 
>   The user's markdown files (notes, docs, brain repo) are SEPARATE from
>   this tool repo. Ask the user where their files are, or create a new
>   brain repo: mkdir -p ~/brain && cd ~/brain && git init
> 
>   Read ~/gbrain/docs/GBRAIN_RECOMMENDED_SCHEMA.md — set up the MECE
>   directory structure (people/, companies/, concepts/, etc.) inside the
>   user's brain repo, NOT inside ~/gbrain.
> 
>   gbrain import ~/brain/ --no-embed     # import markdown files
>   gbrain embed --stale                  # generate vector embeddings
>   gbrain query "key themes across these documents?"
> 
> GO LIVE — read and permanently adopt these docs from ~/gbrain/:
> 
>   docs/GBRAIN_SKILLPACK.md — the full agent playbook. Save to your
>     memory: brain-first lookup on every message, entity detection,
>     back-linking. This changes how you behave permanently.
> 
>   Set up recurring jobs using your platform's scheduler (crontab,
>   OpenClaw cron, Railway cron, or a process manager):
>     - Live sync (every 15 min): gbrain sync --repo ~/brain && gbrain embed --stale
>     - Auto-update (daily): gbrain check-update --json (tell user, never auto-install)
>     - Dream cycle (nightly): read docs/guides/cron-schedule.md for the
>       full protocol — entity sweep, citation fixes, memory consolidation.
>       This is what makes the brain compound. Do not skip it.
>     - Weekly: gbrain doctor --json && gbrain embed --stale
> 
>   docs/GBRAIN_VERIFY.md — run all 6 verification checks. #4 (live sync
>     actually works) is the most important.
> 
> INTEGRATIONS — run gbrain integrations list. Each recipe in
>   ~/gbrain/recipes/ is a self-contained installer: it tells you what
>   credentials to ask for, how to validate, and what cron to register.
>   Ask the user which integrations they want (email, calendar, voice,
>   Twitter). Set up the ones they have credentials for.
>   Verify: gbrain integrations doctor (after at least one is configured)
> 
> UPGRADE: cd ~/gbrain && git pull origin main && bun install
> ```
> 
> 
> ### Without an agent (standalone CLI)
> 
> ```bash
> git clone https://github.com/garrytan/gbrain.git && cd gbrain && bun install && bun link
> gbrain init                     # local brain, ready in 2 seconds
> gbrain import ~/notes/          # index your markdown
> gbrain query "what themes show up across my notes?"
> ```
> 
> 
> ## Getting Data In
> 
> Once GBrain is installed, your agent needs data flowing in. GBrain ships integration recipes that your agent sets up for you. It reads the recipe, asks for API keys, validates each one, and runs a smoke test. [Markdown is code](docs/ethos/THIN_HARNESS_FAT_SKILLS.md)... the recipe IS the installer.
> 
> | Recipe | Requires | What It Does |
> |--------|----------|-------------|
> | [Public Tunnel](recipes/ngrok-tunnel.md) | — | Fixed URL for MCP + voice (ngrok Hobby $8/mo) |
> | [Credential Gateway](recipes/credential-gateway.md) | — | Gmail + Calendar access (ClawVisor or Google OAuth) |
> | [Voice-to-Brain](recipes/twilio-voice-brain.md) | ngrok-tunnel | Phone calls → brain pages (Twilio + OpenAI Realtime) |
> | [Email-to-Brain](recipes/email-to-brain.md) | credential-gateway | Gmail → entity pages (deterministic collector) |
> | [X-to-Brain](recipes/x-to-brain.md) | — | Twitter → brain pages (timeline + mentions + deletions) |
> | [Calendar-to-Brain](recipes/calendar-to-brain.md) | credential-gateway | Google Calendar → searchable daily pages |
> | [Meeting Sync](recipes/meeting-sync.md) | — | Circleback transcripts → brain pages with attendees |
> 
> Run `gbrain integrations` to see status. Dependencies resolve automatically. See [Getting Data In](docs/integrations/README.md) for the full guide.
> 
> 
> ## The Compounding Thesis
> 
> Most tools help you find things. GBrain makes you smarter over time.
> 
> ```
> Signal arrives (meeting, email, tweet, link)
>   → Agent detects entities (people, companies, ideas)
>   → READ: check the brain first (gbrain search, gbrain get)
>   → Respond with full context
>   → WRITE: update brain pages with new information
>   → Sync: gbrain indexes changes for next query
> ```
> 
> Every cycle through this loop adds knowledge. The agent enriches a person page after a meeting. Next time that person comes up, the agent already has context. You never start from zero.
> 
> An agent without this loop answers from stale context. An agent with it gets smarter every conversation. The difference compounds daily.
> 
> > "Who should I invite to dinner who knows both Pedro and Diana?"
> > — cross-references the social graph across 3,000+ people pages
> 
> > "What have I said about the relationship between shame and founder performance?"
> > — searches YOUR thinking, not the internet
> 
> > "Prep me for my meeting with Jordan in 30 minutes"
> > — pulls dossier, shared history, recent activity, open threads
> 
> 
> ## Voice: "Her" Out of the Box
> 
> The voice integration is the strongest demonstration of why a personal brain matters.
> Call a phone number. Your AI answers. It knows who's calling, pulls their full context
> from thousands of people pages, references your last meeting, and responds like someone
> who actually knows your world. When the call ends, a structured brain page appears with
> the transcript, entity de

## 延伸閱讀

相關概念：[[RAG]] · [[知識管理]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/garrytan/gbrain)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "garrytan--gbrain"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "garrytan--gbrain"
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
> const concepts = ["RAG","知識管理","自動化"];
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
