---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 6382
stars_per_day: 912
forks: 698
open_issues: 36
created: 2026-04-05
pushed_at: 2026-04-13
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "個人知識管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "讓 AI 代理擁有個人化的知識庫，隨時回應你的需求。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-15"
contributor_count: 3
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 4425
readme_length: 9941
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572,2026-04-12:4848,2026-04-12:4867,2026-04-13:6382"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - easy_install
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "讓 AI 代理擁有個人化的知識庫，隨時回應你的需求。"
---

# gbrain

**6.4k** stars · **912** stars/天 · 建立 7 天前 · TypeScript · MIT

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
> 讓 AI 代理擁有個人化的知識庫，隨時回應你的需求。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (912 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要整合多種資訊來源以提升 AI 代理效能的專業人士。
> **一句話重點** GBrain 的設計讓 AI 代理能夠在每次互動中持續學習，這是傳統知識管理工具無法實現的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gbrain");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "個人知識管理" && p.file.name !== "garrytan--gbrain" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 個人知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到持續增長的個人知識庫，值得一試。

> [!abstract] 核心創新
> GBrain 提供了一個嵌入式的個人知識庫，能夠隨著使用者的互動而持續增長智慧。

## 專案簡介

GBrain 是一個專為 AI 代理設計的個人知識庫，能夠將會議、電子郵件、推文等資訊整合進可搜尋的資料庫中，並在每次回應前進行檢索。用戶只需簡單的 API 金鑰設定，並透過 `gbrain init` 指令在 2 秒內啟動 PGLite 資料庫，接著可使用 `gbrain import` 將 Markdown 文件匯入，並透過 `gbrain query` 進行查詢。這個工具的賣點在於它能夠隨著使用者的互動而不斷增長智慧，形成一個自我增強的知識循環。技術上，GBrain 使用了嵌入式 Postgres (PGLite) 來儲存資料，並支援向量搜尋，這使得資料檢索速度快且無需伺服器。

與傳統的知識管理工具相比，GBrain 的設計使得用戶能夠在每次互動中持續累積知識，避免了從零開始的情況。這種設計使得 AI 代理能夠在每次對話中獲得更新，並能夠在未來的對話中提供更具上下文的回應。使用者需要注意的是，GBrain 目前僅支援較新的 AI 模型，如 Claude Opus 4.6 和 GPT-5.4，較小的模型可能會導致功能不穩定。整體而言，這個工具適合需要持續累積個人知識的使用者，尤其是那些依賴 AI 代理進行日常工作的專業人士。

**技術棧**：`TypeScript` · `PLpgSQL` · `Shell`

## 重點功能

- PGLite 資料庫 — 嵌入式 Postgres，無需伺服器，啟動時間僅需 2 秒。
- Markdown 匯入 — 使用 `gbrain import` 指令將 Markdown 文件匯入，支援 idempotent 匯入。
- 向量搜尋 — 整合 OpenAI 和 Anthropic API，提供高效的關鍵字搜尋和查詢擴展。
- 自我增強 — 每次互動後更新知識庫，讓 AI 代理隨著時間變得更聰明。
- 多種整合 — 支援 Gmail、Google Calendar 等多種服務的整合，透過預設的 recipe 自動化設定。

## 快速開始

1. 克隆 GBrain 倉庫
```bash
git clone https://github.com/garrytan/gbrain.git ~/gbrain && cd ~/gbrain
```
2. 安裝依賴
```bash
curl -fsSL https://bun.sh/install | bash && export PATH="$HOME/.bun/bin:$PATH" && bun install
```
3. 初始化資料庫
```bash
gbrain init
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 GBrain",
  "gbrain init                     # PGLite (default)",
  "# 預期輸出：資料庫初始化完成，無需伺服器"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 6382 stars（912/天），forks 698（10.9%），顯示出強烈的使用者興趣。Garry Tan 是這個專案的創始人，過去在 AI 和開源領域有豐富經驗。GBrain 解決了個人知識管理的痛點，讓 AI 代理能夠持續學習並提供更個性化的回應，這在傳統的知識管理工具中是難以實現的。社群的活躍度和開發者的參與度也顯示出這個專案的潛力和需求。這個工具的設計理念和功能特性吸引了許多希望提升 AI 代理能力的開發者。

## 適合誰使用

**目標受眾**：需要整合多種資訊來源以提升 AI 代理效能的專業人士。

> [!example] 使用場景
> - 企業主管用它來整合會議記錄和電子郵件，因為這樣可以快速查詢過去的決策背景，提升會議效率。
> - 自由工作者用它來管理客戶資料和項目進度，因為能夠隨時檢索相關資訊，減少重複工作。
> - 研究人員用它來整理文獻和實驗數據，因為能夠快速查找關鍵主題，提升研究效率。

## 架構分析

GBrain 採用嵌入式的 Postgres 資料庫 (PGLite)，這使得安裝和運行都非常簡便，無需伺服器。資料流從用戶的 Markdown 文件進入資料庫，透過向量搜尋技術提供快速查詢。這種設計不僅降低了使用門檻，也使得用戶能夠在本地環境中快速搭建個人知識庫。選擇 PGLite 而非傳統的伺服器架構，雖然犧牲了多用戶同時訪問的能力，但卻大幅簡化了部署過程。擴展性方面，當資料量增長到一定程度時，用戶可以選擇將資料遷移到雲端的 Postgres 環境，這樣可以保持靈活性和擴展性。

## 技術深入分析

GBrain 的核心技術在於其使用的嵌入式 Postgres 資料庫，這使得資料存取速度快且不需要伺服器。其資料流從用戶的 Markdown 文件進入資料庫，並透過向量搜尋技術進行查詢，這樣的設計讓用戶能夠快速獲取所需資訊。GBrain 的效能在於能夠處理大量的資料，並且在使用者的互動中不斷增強知識庫。選擇 TypeScript 作為開發語言，讓整個專案在型別安全上有更好的保障，並且能夠利用現有的 JavaScript 生態系統。這個選擇雖然增加了一定的學習曲線，但也讓未來的擴展和維護變得更加容易。技術風險方面，GBrain 依賴於外部 API，這可能在未來的使用中造成不穩定性，特別是當 API 發生變更時。整合方面，GBrain 能夠與多種服務進行整合，這使得它在實際應用中非常靈活，但也可能帶來額外的配置和維護成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，無需複雜的設定。文件主要以英文撰寫，對於非英語使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 快速啟動 — 僅需幾個指令即可完成安裝和初始化。
> - 自我增強 — 隨著使用者的互動，知識庫持續增長，提升 AI 代理的效能。
> - 無需伺服器 — 嵌入式資料庫設計使得使用者無需管理伺服器，降低了技術門檻。

> [!danger] 缺點
> - 僅支援較新的 AI 模型，對於舊模型的兼容性較差。
> - 依賴外部 API，若 API 不穩定可能影響功能。
> - 使用者需自行管理 API 金鑰，增加了使用的複雜性。

> [!warning] 注意事項
> - 僅支援較新的 AI 模型，如 Claude Opus 4.6 和 GPT-5.4。
> - 目前的整合功能依賴於外部 API，若 API 不穩定可能影響功能。
> - 使用者需自行管理 API 金鑰，未來若有變更需手動更新。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要聚焦於資料的存儲和檢索，而 GBrain 則強調與 AI 代理的整合和自我增強的知識循環。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 側重於資料的同步和備份，GBrain 則專注於個人知識的管理和增強。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於資料的存儲和檢索，使用較為傳統的資料庫架構，而 GBrain 則強調與 AI 代理的整合和自我增強的知識循環。 | 如果你的需求主要是資料的存儲和檢索，而不需要 AI 代理的功能，則 Boneyard 可能更合適。 | medium — 需要將資料格式轉換，並重新設計資料流。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 側重於資料的同步和備份，使用的是較為傳統的資料處理方式，而 GBrain 則專注於個人知識的管理和增強。 | 如果你的需求是資料的定期備份和同步，Parsync 會是更好的選擇。 | low — 主要是資料的轉移，不需要重構整個系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 專注於資料的存儲和檢索，使用較為傳統的資料庫架構，而 GBrain 則強調與 AI 代理的整合和自我增強的知識循環。 | Parsync 側重於資料的同步和備份，使用的是較為傳統的資料處理方式，而 GBrain 則專注於個人知識的管理和增強。 |
> | 遷移成本 | - | medium — 需要將資料格式轉換，並重新設計資料流。 | low — 主要是資料的轉移，不需要重構整個系統。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料的存儲和檢索，而不需要 AI 代理的功 | 如果你的需求是資料的定期備份和同步，Parsync 會是更好 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上，PGLite 的性能可能不如預期，特別是在資料量大時。
  - 解法：定期檢查資料庫性能，必要時考慮遷移到雲端資料庫。
- [MEDIUM] API 金鑰的管理可能會造成安全風險，若未妥善保管可能導致資料洩漏。
  - 解法：使用環境變數管理 API 金鑰，並定期更新。
- [MEDIUM] 在使用向量搜尋時，若資料庫未正確配置，可能導致查詢失敗。
  - 解法：確保在初始化時正確設定資料庫參數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速整合多種資訊來源，提升團隊的工作效率。 |
| 需要管理大量客戶資料的自由工作者 | 適合 | 能夠隨時檢索過去的互動記錄，減少重複工作。 |
| 大型企業的知識管理系統 | 不適合 | 目前的架構不支援多用戶同時訪問，可能無法滿足企業需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到持續增長的個人知識庫，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：GBrain 本身不需要高權限運行，但使用者需妥善管理 API 金鑰，避免資料洩漏的風險。

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
| Forks | 698 |
| Open Issues | 36 |
| Issue 解決率 | 8% (3 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 4.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@electric-sql/pglite` `@modelcontextprotocol/sdk` `gray-matter` `marked` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "PLpgSQL" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 61 |
> | [@anurag](https://github.com/anurag) | 1 |
> | [@franmaranchello](https://github.com/franmaranchello) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應速度尚可。
**連結**：[文件](https://github.com/garrytan/gbrain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-13）
> **活躍天數** 2 天 · **最新 commit** fix: create PGLite data dir before lock (#85)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/garrytan/gbrain/issues/32) | Support PGLite with local file as DB | 2 | 1 |
> | [#84](https://github.com/garrytan/gbrain/issues/84) | Add policy enforcement for destructive MCP tools (delete_pag | 0 | 0 |

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

相關概念：[[RAG]] · [[向量資料庫]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/garrytan/gbrain)

## 相關收錄

> [!note]- 直接競品（同子分類：個人知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "個人知識管理" AND file.name != "garrytan--gbrain"
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
> const concepts = ["RAG","向量資料庫","自動化"];
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
