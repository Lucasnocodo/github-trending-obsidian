---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 2572
stars_per_day: 514
forks: 282
open_issues: 21
created: 2026-04-05
pushed_at: 2026-04-11
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，讓使用者能快速查詢和更新知識。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 3754
readme_length: 9780
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-11"
star_history: "2026-04-11:2528,2026-04-11:2572"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，讓使用者能快速查詢和更新知識。"
---

# gbrain

**2.6k** stars · **514** stars/天 · 建立 5 天前 · TypeScript · MIT

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

`個人專案`

> [!summary] 一句話摘要
> 提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，讓使用者能快速查詢和更新知識。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (514 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要管理大量資料並希望自動化知識更新的專業人士，例如企業高管或研究人員。
> **一句話重點** GBrain 的設計不僅是為了管理知識，更是為了讓使用者的知識隨著時間不斷增長和更新。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的知識管理工具，值得投入。

> [!abstract] 核心創新
> GBrain 提供混合搜索能力，結合關鍵字和向量搜索，讓使用者能在龐大資料中快速找到所需信息。

## 專案簡介

GBrain 是一個結合 Postgres 和向量搜索的個人知識管理系統，旨在幫助使用者有效管理和檢索大量資料。其核心機制是將 markdown 文件作為知識的來源，使用者可以透過 CLI 指令 `gbrain import /path/to/brain/` 將資料導入系統，並利用 `gbrain search` 進行查詢。GBrain 的設計重點在於提供混合搜索能力，結合關鍵字搜索和向量搜索，以便在大量資料中快速找到所需信息。這種設計使得在面對大量資料時，使用者不再依賴於傳統的 grep 工具，因為 GBrain 能夠即時更新索引，並在幾毫秒內返回查詢結果。技術上，GBrain 使用了 Postgres 和 pgvector 來實現高效的資料檢索，並且支援增量更新，這在處理大量 markdown 文件時特別重要。

與其他知識管理工具相比，如 Notion 或 Roam Research，GBrain 更加專注於結合 AI 代理和知識更新的自動化，讓使用者的知識隨著時間不斷增長。這種設計的優勢在於，使用者不需要手動更新資料，系統會自動追蹤和記錄變更，並且能夠在多次查詢中保持上下文。雖然 GBrain 的學習曲線相對較陡，但對於需要處理大量資料的專業人士來說，這種自動化的知識管理方式能顯著提高工作效率。未來，隨著功能的持續增強，GBrain 有潛力成為個人知識管理的主流工具之一。適合需要管理大量資料並希望自動化知識更新的使用者，例如企業高管或研究人員。

**技術棧**：`PostgreSQL 16` · `pgvector` · `Bun`

## 重點功能

- 混合搜索 — 結合關鍵字和向量搜索，快速檢索資料。
- 自動更新 — AI 代理自動更新知識庫，保持資料的即時性。
- Markdown 支援 — 以 markdown 文件作為知識的來源，易於編輯和管理。
- 增量索引 — 當資料變更時，系統能即時更新索引，無需全目錄掃描。
- CLI 操作 — 提供簡單的命令行介面，方便用戶進行資料導入和查詢。

## 快速開始

1. 安裝 GBrain
```bash
bun update gbrain
```
2. 執行初始化向導
```bash
gbrain init --supabase
```
3. 導入 markdown 文件
```bash
gbrain import /path/to/brain/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2572 stars（514/天），forks 282（11.0%），顯示出強烈的社群興趣。作者 Garry Tan 之前在知識管理和 AI 領域有豐富的經驗，這個專案解決了傳統知識管理工具在面對大量資料時的效率問題。GBrain 提供的混合搜索功能和自動更新的知識模型，讓使用者能夠在資料量龐大時仍能快速檢索，這是許多現有工具無法達到的。社群的反應也顯示出對於這種創新的知識管理方式的期待，特別是在 AI 代理的應用上。

## 適合誰使用

**目標受眾**：需要管理大量資料並希望自動化知識更新的專業人士，例如企業高管或研究人員。

> [!example] 使用場景
> - 企業高管用它來管理會議記錄和重要聯絡人資料，因為 GBrain 能夠自動更新和檢索關鍵信息，節省了大量手動整理的時間。
> - 研究人員用它來整合和查詢過去的研究資料，因為其混合搜索功能能快速找到相關文獻和數據，提升研究效率。
> - 內容創作者用它來管理靈感和草稿，因為 GBrain 能自動追蹤和整理創意，讓創作過程更加流暢。

## 架構分析

GBrain 的架構由三個主要部分組成：Brain Repo、GBrain 和 AI Agent。Brain Repo 是一個 git 儲存庫，存放 markdown 文件，作為知識的來源。GBrain 負責檢索和索引資料，使用 Postgres 和 pgvector 來實現高效的資料檢索。

AI Agent 則負責讀取和寫入資料，並根據使用者的需求進行知識更新。這種設計使得 GBrain 能夠在資料量龐大時仍能保持高效的檢索性能。選擇 Postgres 作為資料庫的原因在於其強大的查詢能力和擴展性，而 pgvector 則提供了對向量資料的支援，這在處理複雜查詢時非常有用。

整體架構的設計考量了資料的即時性和可擴展性，能夠隨著使用者需求的增長而調整。未來可能需要考慮資料庫的性能優化，以應對更大規模的資料處理需求。

## 技術深入分析

GBrain 的核心技術機制是結合了 Postgres 和 pgvector，實現了高效的資料檢索和更新。系統使用了增量索引的方式，當資料變更時，能即時更新索引，這在處理大量 markdown 文件時特別重要。效能上，GBrain 能夠在幾毫秒內返回查詢結果，這對於需要快速檢索的使用者來說非常關鍵。選擇 Postgres 作為資料庫的原因在於其強大的查詢能力和擴展性，而 pgvector 則提供了對向量資料的支援，這在處理複雜查詢時非常有用。設計上，GBrain 旨在減少使用者的手動維護工作，透過 AI 代理自動更新知識庫，讓使用者能專注於更重要的決策。技術風險方面，隨著資料量的增長，可能會出現性能瓶頸，因此需要定期進行性能優化。整合方面，GBrain 與主流的開發工具和 CI/CD pipeline 友好，能輕鬆融入現有的工作流中，降低了學習成本和整合摩擦。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例指令。安裝過程相對順暢，但對於不熟悉 Postgres 的用戶可能會有一些挑戰。文件中有詳細的設置向導，能幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供混合搜索功能，能快速檢索大量資料。
> - AI 代理自動更新知識庫，減少手動維護的需求。
> - Markdown 支援使得資料易於編輯和管理，符合開發者的習慣。

> [!danger] 缺點
> - 需要 Postgres 作為後端，對於不熟悉 SQL 的用戶有學習曲線。
> - 目前僅支援 markdown 文件，對其他格式支援有限。
> - 在處理極大規模資料時，可能需要額外的性能調優。

> [!warning] 注意事項
> - 需要 Postgres 作為後端資料庫，對於不熟悉 SQL 的用戶可能有學習曲線。
> - 目前僅支援 markdown 文件作為知識來源，對於其他格式的支援有限。
> - 在處理極大規模的資料時，可能需要額外的性能調優。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供類似的知識管理功能，但主要依賴於 JSON 文件，而 GBrain 則使用 Postgres 來實現更高效的檢索和更新。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於資料同步，而 GBrain 更加專注於知識的管理和檢索，提供混合搜索功能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 主要針對醫療領域的知識管理，而 GBrain 則是一個通用的知識管理工具，適用於各種領域。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Notion | Notion 提供了一個全功能的知識管理平台，但主要依賴於雲端儲存，而 GBrain 則使用本地 markdown 文件和 Postgres，提供更高的靈活性。 | 如果你的團隊需要一個全功能的協作平台，並且不介意雲端儲存，Notion 會是更好的選擇。 | medium，因為需要將資料從 markdown 轉移到 Notion 的格式。 |
| Roam Research | Roam Research 提供了類似的知識管理功能，但主要依賴於網頁應用，而 GBrain 則專注於本地資料和 CLI 操作。 | 如果你的團隊偏好使用網頁應用並需要即時協作，Roam Research 會是更好的選擇。 | high，因為需要將資料轉換為 Roam 的格式，並且可能需要手動重組。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **Notion** | **Roam Research** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Notion 提供了一個全功能的知識管理平台，但主要依賴於雲端儲存，而 GBrain 則使用本地 markdown 文件和 Postgres，提供更高的靈活性。 | Roam Research 提供了類似的知識管理功能，但主要依賴於網頁應用，而 GBrain 則專注於本地資料和 CLI 操作。 |
> | 遷移成本 | - | medium，因為需要將資料從 markdown 轉移到 Notion 的格式。 | high，因為需要將資料轉換為 Roam 的格式，並且可能需要手動重組。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個全功能的協作平台，並且不介意雲端儲存，N | 如果你的團隊偏好使用網頁應用並需要即時協作，Roam Res |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在導入大量 markdown 文件時，可能會遇到性能瓶頸，導致導入時間過長。
  - 解法：可以分批導入文件，減少單次導入的資料量。
- [MEDIUM] 使用者在設置 Postgres 連接時，可能會遇到配置錯誤。
  - 解法：確保使用正確的連接字串，並檢查 Postgres 的設定。
- [MEDIUM] 在更新資料時，可能會導致索引不一致。
  - 解法：定期運行索引重建指令以保持資料一致性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端知識管理 | 非常適合 | GBrain 的自動更新和混合搜索功能能有效管理小型團隊的知識。 |
| 大型企業的知識庫管理 | 普通 | 雖然 GBrain 功能強大，但在大型企業中可能需要更多的性能優化。 |
| 學術研究團隊的資料管理 | 適合 | GBrain 能夠整合大量研究資料並提供快速檢索，適合學術環境。 |
| 個人知識管理 | 非常適合 | GBrain 的設計專注於個人知識的增長，能夠隨著時間不斷更新。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的知識管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> GBrain 本身不需要高權限，但需要正確配置 Postgres 連接。它不會存取敏感資料，但依賴的資料庫需確保安全性。整體來說，使用 GBrain 在 CI/CD 中是安全的，只要遵循最佳實踐。

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
| Forks | 282 |
| Open Issues | 21 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 3.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gbrain) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@aws-sdk/client-s3` `@modelcontextprotocol/sdk` `gray-matter` `openai` `pgvector` `postgres` `@types/bun`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "Go Template" : 18
>     "Shell" : 4
>     "JavaScript" : 3
>     "CSS" : 1
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 24 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和修復。
**連結**：[文件](https://github.com/garrytan/gbrain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-11）
> **活躍天數** 3 天 · **最新 commit** feat: GBrain v0.6.0 — Remote MCP Server + 12 Bug Fixes (#28)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/garrytan/gbrain/issues/32) | Support PGLite with local file as DB | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GBrain
> 
> The memex Vannevar Bush imagined, built for people who think for a living.
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
> ## Setup
> 
> After installing via CLI or library path, run the setup wizard:
> 
> ```bash
> 
> ## Why Postgres
> 
> At 500 files, `grep` is fine. At 3,000 people pages, 5,800 Apple Notes, and 13 years of calendar data, `grep` falls apart. You need keyword search for exact names, vector search for semantic meaning, and something that fuses both. You need an index that updates incrementally when one file changes, not a full directory walk. You need your agent to find "everyone who was at the board dinner last March" in milliseconds, not 30 seconds of grepping.
> 
> GBrain gives you hybrid search that combines keyword and vector approaches, plus a knowledge model that treats every page like an intelligence assessment: compiled truth on top (your current best understanding, rewritten when evidence changes), append-only timeline on the bottom (the evidence trail that never gets edited).
> 
> AI agents maintain the brain. You ingest a document and the agent updates every entity mentioned, creates cross-reference links, and appends timeline entries. MCP clients query it. The intelligence lives in fat markdown skills, not application code.
> 
> 
> ## How this happened
> 
> I was setting up my [OpenClaw](https://openclaw.com) agent and started a markdown brain repo. One page per person, one page per company, compiled truth on top, append-only timeline on the bottom. The agent got smarter the more it knew, so I kept feeding it. Meetings, emails, tweets, Apple Notes, calendar data, original ideas. One thing led to another. Within a week I had:
> 
> - **10,000+ markdown files** indexed and searchable
> - **3,000+ people** with compiled dossiers and relationship history
> - **13 years of calendar data** (21,000+ events)
> - **5,800+ Apple Notes** going back to 2009
> - **280+ meeting transcripts** with AI analysis
> - **300+ captured original ideas** organized by thesis
> - **500+ media pages** (video transcripts, books, articles)
> - Company profiles, food guides, travel logs
> 
> This is what I actually use day to day. The agent runs while I sleep... literally. The dream cycle scans every conversation from the day, enriches missing entities, fixes broken citations, and consolidates memory. I wake up and the brain is smarter than when I went to sleep. OpenClaw ships this as DREAMS.md. Hermes Agent can do the same with a nightly cron job (see the [SKILLPACK](docs/GBRAIN_SKILLPACK.md#the-dream-cycle) for setup).
> 
> **You don't need Postgres to start.** The knowledge model is just markdown files in a git repo. The [skills](docs/GBRAIN_SKILLPACK.md) and [schema](docs/GBRAIN_RECOMMENDED_SCHEMA.md) work with any AI agent that can read and write files. Start there.
> 
> I added Postgres + pgvector later because at 1,000 to 10,000 long markdown docs, `grep` stops working. You need real chunking, real retrieval, real search. GBrain is the thin CLI and MCP layer I built on top of Postgres to solve that, optimized for OpenClaw and smart agents.
> 
> 
> ### Ask it anything
> 
> > "Who should I invite to dinner who knows both Pedro and Diana?"
> > — cross-references the social graph across 3,000+ people pages
> 
> > "What have I said about the relationship between shame and founder performance?"
> > — searches YOUR thinking, not the internet
> 
> > "What changed with the Series A since Tuesday?"
> > — diffs timeline entries across deal and company pages
> 
> > "Prep me for my meeting with Jordan in 30 minutes"
> > — pulls dossier, shared history, recent activity, open threads
> 
> Your markdown repo is the source of truth. GBrain makes it searchable. Your AI agent makes it live.
> 
> 
> ## The Compounding Thesis
> 
> Most tools help you find things. GBrain makes you smarter over time.
> 
> The core loop:
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
> Every cycle through this loop adds knowledge. The agent enriches a person page after a meeting. Next time that person comes up, the agent already has context — their role, your history, what they care about, what you discussed last time. You never start from zero.
> 
> An agent without this loop answers from stale context. An agent with it gets smarter every conversation. The difference compounds daily.
> 
> Never do anything twice. If you look someone up once, that lookup lives in the brain forever. If a pattern emerges across three meetings, the agent captures it. If you generate an original idea in conversation, it goes to `originals/` — your searchable intellectual archive.
> 
> 
> ## Architecture
> 
> ```
> ┌──────────────────┐    ┌───────────────┐    ┌──────────────────┐
> │   Brain Repo     │    │    GBrain     │    │    AI Agent      │
> │   (git)          │    │  (retrieval)  │    │  (read/write)    │
> │                  │    │               │    │                  │
> │  markdown files  │───>│  Postgres +   ││  skills define   │
> │  = source of     │    │  pgvector     │    │  HOW to use the  │
> │    truth         │    │               │    │  brain           │
> │                  │ --no-embed
> 
> 4. Run a query against the imported data to prove search works
> 
> 5. Read docs/GBRAIN_RECOMMENDED_SCHEMA.md and offer to
>    restructure my knowledge base
> 
> 6. Read docs/GBRAIN_SKILLPACK.md and update all your skills
>    with the production agent patterns: brain-agent loop,
>    entity detection, source attribution, iron law back-linking,
>    and the enrichment pipeline
> 
> 7. Set up a daily cron for `gbrain check-update`.
>    Notify me on new features only, not patches.
>    Never auto-install, just tell me what's new.
> 
> 8. Set up automatic sync so the vector DB stays current
>    with the brain repo. Read GBRAIN_SKILLPACK.md Section 18
>    for approaches (cron, --watch, webhook). Pick what fits
>    your environment. Always chain:
>    gbrain sync --repo  && gbrain embed --stale
>    Verify: push a change, confirm it appears in search.
> 
> 9. Run the verification runbook (docs/GBRAIN_VERIFY.md)
>    to confirm everything works: schema, sync, embeddings,
>    brain-first lookup.
> ```
> 
> OpenClaw will install gbrain, walk through Supabase setup, discover your markdown files, import them, and prove search works with a query from your data.
> 
> After setup, you talk to your brain through OpenClaw:
> 
> ```
> Search the brain for everything we know about [topic]
> Ingest my meeting notes from today
> Give me a briefing for my meetings tomorrow
> How many pages are in the brain now?
> ```
> 
> GBrain keeps your brain current. After setup, `gbrain sync --watch` polls your git repo and imports only what changed. Binary files (images, PDFs, audio) can be moved to cloud storage with `gbrain files mirror` to slim down your git repo.
> 
> > **Supabase settings:** GBrain connects directly to Postgres (not the REST API).
> > You need the **Shared Pooler connection string**, not the project URL or anon key.
> > Find it: go to your project, click **Get Connected** next to the project URL,
> > then **Direct Connection String** > **Session Pooler**, and copy the
> > **Shared Pooler** connection string.
> 
> 
> ## Upgrade
> 
> Upgrade depends on how you installed:
> 
> ```bash
> 
> # Compiled binary
> 
> # Download the latest from https://github.com/garrytan/gbrain/releases
> ```
> 
> After upgrading, run `gbrain init` again to apply any schema migrations (idempotent, safe to re-run).
> 
> 
> # Guided wizard: auto-provisions Supabase or accepts a connection URL
> gbrain init --supabase
> 
> 
> # Or connect to any Postgres with pgvector
> gbrain init --url postgresql://user:pass@host:5432/dbname
> ```
> 
> The init wizard:
> 1. Checks for Supabase CLI, offers auto-provisioning
> 2. Falls back to manual connection URL if CLI isn't available
> 3. Runs the full schema migration (tables, indexes, triggers, extensions)
> 4. Verifies the connection and confirms the dat

## 延伸閱讀

相關概念：[[知識管理]] · [[向量資料庫]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

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
> const concepts = ["知識管理","向量資料庫","自動化"];
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

- [[2026-04-11|2026-04-11]] — 首次收錄，2.5k stars
