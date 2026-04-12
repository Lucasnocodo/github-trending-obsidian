---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 4867
stars_per_day: 811
forks: 545
open_issues: 24
created: 2026-04-05
pushed_at: 2026-04-11
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
use_case: "將個人知識轉化為可搜尋的資料庫，讓 AI 助手更聰明。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 4473
readme_length: 9929
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572,2026-04-12:4848,2026-04-12:4867"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - easy_install
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "將個人知識轉化為可搜尋的資料庫，讓 AI 助手更聰明。"
---

# gbrain

**4.9k** stars · **811** stars/天 · 建立 6 天前 · TypeScript · MIT

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

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 將個人知識轉化為可搜尋的資料庫，讓 AI 助手更聰明。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (811 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速設置個人化 AI 助手並整合多種資訊來源的獨立開發者或小型團隊。
> **一句話重點** GBrain 的設計讓個人知識管理變得簡單且高效，特別適合需要快速部署 AI 助手的用戶。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到一個高效的個人知識管理系統，值得投入。

> [!abstract] 核心創新
> GBrain 是一個基於 PGLite 的個人知識管理系統，支持循環學習和多種整合。這種設計使得 AI 助手能夠隨著時間變得更聰明。

## 專案簡介

GBrain 是一個針對個人知識管理的 AI 助手，專為整合會議、電子郵件、推文等資訊而設計。用戶可以透過簡單的 CLI 指令 `gbrain init` 快速設置一個基於 PGLite 的資料庫，無需伺服器，並在 2 秒內完成初始化。接著用戶可以透過 `gbrain import` 將 Markdown 文件導入資料庫，並使用 `gbrain embed` 生成向量嵌入以支持更複雜的查詢。GBrain 的核心賣點在於它的循環學習能力，透過不斷更新知識庫，讓 AI 助手能夠在每次對話中提供更具上下文的回應。這樣的設計使得 AI 助手能夠在每次互動中獲得新知識，避免了使用過時資訊的情況。

GBrain 使用 TypeScript 和 PLpgSQL，並依賴 PGLite 作為資料庫，這使得它在資源使用上非常輕量，適合個人或小型團隊使用。與其他類似工具相比，如 OpenClaw 和 Hermes Agent，GBrain 提供了更為簡便的設置流程和更強的個人化知識管理能力，特別適合需要快速部署 AI 助手的用戶。儘管目前仍在開發中，但其設計理念和功能已經相當成熟，適合對個人知識管理有需求的開發者和創業者。使用者在導入過程中可能會遇到需要調整的資料結構，但這是設計上的考量，能夠確保資料的整合性和可搜尋性。未來的發展方向可能會集中在擴展更多的整合選項和增強 AI 的理解能力上。

**技術棧**：`TypeScript` · `PLpgSQL` · `Shell`

## 重點功能

- 快速初始化 — 使用 `gbrain init` 兩秒內設置 PGLite 資料庫，無需伺服器。
- Markdown 導入 — 使用 `gbrain import` 將 Markdown 文件導入資料庫，支持文本和嵌入。
- 向量嵌入生成 — 使用 `gbrain embed` 生成向量嵌入，支持語義查詢。
- 循環學習 — 每次查詢後自動更新知識庫，讓 AI 助手隨時間變得更聰明。
- 多種整合選項 — 支持與 Gmail、Twitter 等多種服務的整合，通過 `gbrain integrations` 管理。

## 快速開始

1. 安裝 GBrain
```bash
bun add github:garrytan/gbrain
```
2. 初始化資料庫
```bash
gbrain init
```
3. 導入 Markdown 文件
```bash
gbrain import /path/to/markdown
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 GBrain",
  "指令": "gbrain init --supabase",
  "預期輸出": "初始化 Supabase 資料庫，並配置所有必要的設置。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 4867 stars（811/天），forks 545（11.2%），顯示出強烈的社群興趣。Garry Tan 是知名的開源貢獻者，過去在 AI 和開源工具方面有豐富的經驗。GBrain 解決了個人知識管理中 AI 助手缺乏上下文理解的問題，讓使用者能夠更有效地利用過去的資訊。這種需求在當前的 AI 生態中越來越明顯，特別是在遠端工作和個人效率提升的背景下。社群的反應和使用案例也促進了其快速成長。

## 適合誰使用

**目標受眾**：需要快速設置個人化 AI 助手並整合多種資訊來源的獨立開發者或小型團隊。

> [!example] 使用場景
> - 自由職業者用它來整合會議記錄和客戶電子郵件，因為這樣可以快速查詢過去的對話並準備會議。
> - 小型創業團隊用它來管理產品開發文檔，因為可以輕鬆導入 Markdown 文件並進行版本控制。
> - 研究人員用它來整理文獻資料，因為能夠快速查詢和交叉比對不同的研究主題。

## 架構分析

GBrain 採用單一應用架構，使用 PGLite 作為資料庫，這樣的設計使得部署過程簡單且無需伺服器。資料流從用戶輸入 Markdown 文件開始，經過初始化和導入，最終生成可查詢的知識庫。選擇 PGLite 而非傳統的伺服器型資料庫，能夠降低資源需求，但在處理大量資料時可能會遇到性能瓶頸。整體架構輕量且易於擴展，未來可以考慮支持更多的資料庫選項以提高靈活性。

## 技術深入分析

GBrain 的核心技術基於 PGLite，這是一個嵌入式的 Postgres 資料庫，能夠快速初始化並支持向量嵌入。這使得 GBrain 在資源使用上非常輕量，適合個人或小型團隊。效能方面，GBrain 能夠處理數千個 Markdown 文件，但在處理超過 1000 個文件時，建議使用 Supabase 以獲得更好的性能。設計上選擇 TypeScript 使得開發過程更為靈活，並且能夠利用現有的 JavaScript 生態系統。技術風險方面，GBrain 目前對於大型資料集的支持仍有待加強，未來可能需要考慮如何擴展資料庫的能力。與主流框架的整合難度相對較低，因為其 CLI 工具可以輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，提供了詳細的安裝步驟和範例。安裝過程相對順暢，無需複雜的配置。提供了清晰的入門指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 快速設置，能在短時間內建立完整的知識庫。
> - 支持 Markdown 文件，方便用戶導入現有資料。
> - 循環學習能力，讓 AI 助手隨著使用變得更聰明。

> [!danger] 缺點
> - 對於大型資料集的支持有限，需要升級到 Supabase。
> - 依賴特定的 AI 模型，可能不適用於所有用戶。
> - 需要用戶具備一定的技術背景來管理 API 金鑰。

> [!warning] 注意事項
> - 僅支援 PGLite 作為資料庫，對於大型資料集可能需要升級到 Supabase。
> - 需要使用者具備基本的 API 金鑰管理能力。
> - 目前僅支持特定的 AI 模型，可能與其他模型不兼容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | OpenClaw 提供了更廣泛的 AI 助手功能，但設置過程較為複雜，適合需要多功能的用戶。 |
| [hermes-agent/hermes-agent](https://github.com/hermes-agent/hermes-agent) | Hermes Agent 更加專注於任務導向的 AI 助手，但缺乏 GBrain 的個人知識管理能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更為靈活的知識管理系統，但需要較高的技術門檻來設置。 | 如果你的團隊需要更高的自定義能力和靈活性，Boneyard 會是更好的選擇。 | medium，因為需要重新設計資料結構以符合 Boneyard 的要求。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於資料同步，但不具備 GBrain 的知識管理功能，適合需要資料備份的場景。 | 如果你的主要需求是資料同步而非知識管理，Parsync 會更合適。 | low，因為資料結構相對簡單，易於轉移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了一個更為靈活的知識管理系統，但需要較高的技術門檻來設置。 | Parsync 專注於資料同步，但不具備 GBrain 的知識管理功能，適合需要資料備份的場景。 |
> | 遷移成本 | - | medium，因為需要重新設計資料結構以符合 Boneyard 的要求。 | low，因為資料結構相對簡單，易於轉移。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高的自定義能力和靈活性，Boneyard  | 如果你的主要需求是資料同步而非知識管理，Parsync 會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在導入大量 Markdown 文件時，可能會遇到性能瓶頸。
  - 解法：考慮分批導入文件，或使用 Supabase 進行管理。
- [MEDIUM] 某些 API 金鑰的管理可能會導致配置錯誤。
  - 解法：仔細檢查 API 金鑰的格式和有效性。
- [MEDIUM] 在使用特定 AI 模型時，可能會出現兼容性問題。
  - 解法：確保使用推薦的 AI 模型，並定期檢查更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的創業團隊進行知識管理 | 非常適合 | GBrain 提供了快速設置和循環學習的能力，能夠有效支持小型團隊的需求。 |
| 大型企業的知識管理系統 | 不適合 | 對於大型資料集的支持有限，可能無法滿足企業級需求。 |
| 自由職業者的項目管理 | 適合 | 能夠快速整合多種資訊來源，提升工作效率。 |
| 學術研究團隊的文獻管理 | 普通 | 雖然能夠支持文獻管理，但對於特定的學術需求可能不夠靈活。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到一個高效的個人知識管理系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：GBrain 不需要高權限，僅存取用戶的 Markdown 文件和 API 金鑰，依賴鏈中無已知的供應鏈風險。

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
| Forks | 545 |
| Open Issues | 24 |
| Issue 解決率 | 8% (2 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 4.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@electric-sql/pglite` `@modelcontextprotocol/sdk` `gray-matter` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "PLpgSQL" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 44 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/garrytan/gbrain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-11）
> **活躍天數** 2 天 · **最新 commit** feat: Voice v0.8.0 + feature discovery + Edge Function removal (#55)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/garrytan/gbrain/issues/32) | Support PGLite with local file as DB | 2 | 0 |
> | [#57](https://github.com/garrytan/gbrain/issues/57) | Use wick_search and wick_fetch `enhancement` | 0 | 0 |

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
> # Installed via bun (standalone or library)
> bun update gbrain
> 
> 
> # Installed via ClawHub
> clawhub update gbrain
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
> - **[OpenClaw](https://openclaw.ai)** — Deploy [AlphaClaw on Render](https://render.com/deploy?repo=https://github.com/openclaw/alphaclaw) (one click, requires 8GB+ RAM instance)
> - **[Hermes Agent](https://github.com/NousResearch/hermes-agent)** — Deploy on [Railway using this template](https://github.com/praveen-ks-2001/hermes-agent-template) (one click)
> 
> 
> ## Start here: paste this into your agent
> 
> Copy this block into OpenClaw or Hermes Agent. The agent will install GBrain, set up the brain schema, import your files, configure all integrations, and verify everything works. GBrain needs a persistent agent that can run cron jobs and background sync.
> 
> ```
> GOAL: I want an opinionated AI agent setup that actually works. Get me
> there. Install GBrain, set up the brain schema, import my files,
> configure all integrations, and verify everything works. Do not skip
> steps. Verify each step before proceeding. If a step fails, stop
> and fix it.
> 
> You don't need a server to start. gbrain init defaults to PGLite
> (embedded Postgres 17.5 via WASM). No Supabase account, no Docker,
> no connection strings. One command and you have a full Postgres brain
> with pgvector, hybrid search, and all 37 operations. When your brain
> outgrows local (1000+ files), gbrain migrate --to supabase moves
> everything to managed Postgres in one shot.
> 
> The knowledge model is markdown files in a git repo. Read
> docs/GBRAIN_SKILLPACK.md for the full agent playbook and
> docs/GBRAIN_RECOMMENDED_SCHEMA.md for the brain directory structure.
> 
> STEP 1 — INSTALL
>   curl -fsSL https://bun.sh/install | bash && source ~/.bashrc
>   bun add github:garrytan/gbrain
>   Verify: gbrain --version
> 
> STEP 2 — DATABASE
>   Run: gbrain init
>   This creates a local PGLite brain (embedded Postgres, no server).
>   Brain ready in ~2 seconds. No accounts, no connection strings.
>   Verify: gbrain doctor --json (all checks pass)
> 
>   For large brains (1000+ files) or remote access, use Supabase:
>     gbrain init --supabase
>   You can migrate anytime: gbrain migrate --to supabase
> 
> STEP 3 — SCHEMA
>   Read docs/GBRAIN_RECOMMENDED_SCHEMA.md — this is the brain's directory
>   structure. Set up the MECE directories (people/, companies/, deals/,
>   concepts/, etc.) with README.md resolvers in each. The schema tells
>   you exactly what goes where and how to resolve ambiguity.
>   The agent maintains this structure automatically after setup.
> 
> STEP 4 — IMPORT
>   Find markdown: find ~/git ~/Documents ~/notes -maxdepth 3 -name "*.md" | head -30
>   Tell user what you found. Import: gbrain import /path/ --no-embed
>   Verify: gbrain stats (page count > 0)
> 
> STEP 5 — SEARCH
>   Run: gbrain embed --stale (generates vector embeddings, ~1 min per 1000 pages)
>   Then: gbrain query "what are the key themes across these documents?"
>   Show the user the results. This is the magic moment.
>   Verify: results include semantic matches, not just keyword hits
> 
> STEP 6 — GO LIVE
>   a. Read docs/GBRAIN_SKILLPACK.md — adopt brain-first lookup, entity
>      detection, and back-linking into your behavior immediately
>   b. Set up live sync: gbrain sync --repo /path/ && gbrain embed --stale
>      (see docs/guides/live-sync.md for cron/watch/webhook options)
>   c. Set up auto-update: gbrain check-update --json on a daily cron
>      (never auto-install — always ask the user first)
>   d. Run verification: read and execute docs/GBRAIN_VERIFY.md
> 
> STEP 7 — INTEGRATIONS
>   Run: gbrain integrations list
>   For EVERY available recipe, set it up. Each recipe is a markdown file
>   that tells the agent exactly what credentials to ask for, how to
>   validate them, and how to wire the integration. The agent reads the
>   recipe, asks the user for API keys, and handles the rest.
>   Voice, email, calendar, Twitter — install them all.
>   Verify: gbrain integrations doctor (all health checks pass)
> 
> DONE. Tell the user: "GBrain is live. You have [N] pages with hybrid
> search. I now check the brain before answering questions. All available
> integrations are configured."
> ```
> 
> 
> ### Without an agent (standalone CLI)
> 
> ```bash
> bun add -g github:garrytan/gbrain
> gbrain init                     # local brain, ready in 2 seconds
> gbrain import ~/git/brain/      # index your markdown
> gbrain query "what themes show up across my notes?"
> ```
> 
> Run `gbrain --help` for all commands. See [MCP setup](docs/mcp/DEPLOY.md) for connecting Claude Desktop, Perplexity, etc.
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
> > "What have I said about the relationship 

## 延伸閱讀

相關概念：[[RAG]] · [[CLI/TUI]] · [[自動化]]

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
> const concepts = ["RAG","CLI/TUI","自動化"];
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
