---
repo: garrytan/gbrain
url: https://github.com/garrytan/gbrain
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Garry's Opinionated OpenClaw/Hermes Agent Brain"
homepage: ""
stars: 2528
stars_per_day: 506
forks: 274
open_issues: 20
created: 2026-04-05
pushed_at: 2026-04-11
first_seen: 2026-04-11
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "知識管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-11
use_case: "提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，幫助用戶更有效地管理和檢索信息。"
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
star_history: "2026-04-11:2528"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "gbrain"
  - "garrytan/gbrain"
  - "提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，幫助用戶更有效地管理和檢索信息。"
---

# gbrain

**2.5k** stars · **506** stars/天 · 建立 5 天前 · TypeScript · MIT

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
> 提供一個基於 Postgres 的個人知識管理系統，結合關鍵字和向量搜索，幫助用戶更有效地管理和檢索信息。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (506 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效管理和檢索大量信息的專業人士，如企業管理者、研究人員或自由職業者。
> **一句話重點** GBrain 不僅是個知識管理工具，更是隨著使用者的互動而不斷增長的智能系統。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的知識管理系統，值得考慮。

> [!abstract] 核心創新
> GBrain 提供了一個基於 Postgres 的混合搜索系統，能夠在大量 markdown 文件中快速檢索信息。

## 專案簡介

GBrain 是一個基於 Postgres 的個人知識管理系統，旨在幫助用戶有效地管理和檢索信息。用戶可以通過 CLI 指令 `gbrain import /path/to/brain/` 將 markdown 文件導入系統，並利用混合搜索技術（關鍵字和向量搜索）來快速檢索信息。這種設計使得用戶能夠在面對大量數據時，仍能快速找到所需的內容，避免了傳統 grep 工具在大數據量下的性能瓶頸。GBrain 的架構包括一個 markdown 文件庫作為真實數據源，Postgres 作為數據庫，並透過 AI Agent 進行數據的讀取和寫入，形成一個持續增長的知識庫。這種設計使得用戶的知識隨著時間推移而不斷增長，形成一個智能的知識管理系統。GBrain 的賣點在於它能夠讓用戶在日常使用中，不斷累積和更新知識，並且能夠在需要時迅速查詢。

其技術實作上，GBrain 使用了 Postgres 和 pgvector 來支持高效的數據檢索，並且依賴於一系列的 npm 包來實現功能，整體依賴樹相對輕量。與其他工具相比，GBrain 的混合搜索能力使其在處理大量 markdown 文件時，能夠提供更快的查詢響應時間，特別適合需要管理大量信息的用戶。使用 GBrain 時，常見的挑戰包括設置和維護 Postgres 數據庫，並確保數據的持續同步。這個專案目前處於 beta 階段，對於需要長期管理和檢索信息的用戶來說，GBrain 是一個值得考慮的選擇。適合的使用場景包括需要管理大量會議記錄、電子郵件和文檔的專業人士，或是希望建立個人知識庫的研究者。

**技術棧**：`PostgreSQL` · `pgvector` · `Bun`

## 重點功能

- 混合搜索 — 結合關鍵字和向量搜索，提供更精確的檢索結果。
- Markdown 文件導入 — 使用 `gbrain import /path/to/brain/` 指令輕鬆導入 markdown 文件。
- 自動更新 — AI Agent 能夠自動更新知識庫，保持信息的最新狀態。
- 數據同步 — 使用 `gbrain sync --watch` 指令自動同步 markdown 文件的變更。
- 文件存儲遷移 — 支持將二進制文件遷移到雲端，減少 git repo 的大小。

## 快速開始

1. 安裝 GBrain
```bash
bun update gbrain
```
2. 運行設置向導
```bash
gbrain init --url postgresql://user:pass@host:5432/dbname
```
3. 導入 markdown 文件
```bash
gbrain import /path/to/brain/
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 GBrain 並設置好 Postgres 數據庫",
  "指令": "gbrain import /path/to/brain/",
  "預期輸出": "導入過程中顯示進度條，並在完成後顯示導入成功的消息。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2528 stars（506/天），forks 274（10.8%），顯示出強烈的社群關注。作者 Garry Tan 以其在 OpenClaw 領域的專業背景，針對知識管理的痛點提出了這個解決方案。GBrain 的出現填補了傳統工具在面對大量數據時的不足，提供了更高效的檢索方式。社群的反饋和需求促進了這個專案的快速成長，並且在技術生態中，Postgres 的使用使得這個工具的可行性大幅提升。forks/stars 比率為 10.8%，顯示出許多用戶對於這個工具的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要高效管理和檢索大量信息的專業人士，如企業管理者、研究人員或自由職業者。

> [!example] 使用場景
> - 企業管理者用它來快速查詢過去的會議記錄和決策，因為能夠在數千條記錄中迅速找到相關信息，節省了大量時間。
> - 研究人員用它來整理和檢索文獻資料，因為 GBrain 的混合搜索技術能夠提供更精確的結果，提升研究效率。
> - 自由職業者用它來管理客戶資料和項目進度，因為能夠自動更新和整理信息，減少了手動維護的負擔。

## 架構分析

GBrain 的架構由三個主要部分組成：一個 markdown 文件庫作為真實數據源，Postgres 作為數據庫，和 AI Agent 負責數據的讀取和寫入。這種設計使得用戶能夠在日常使用中不斷累積和更新知識。資料流方面，markdown 文件經由 `gbrain import` 導入到 Postgres 中，然後 AI Agent 透過混合搜索技術進行查詢和更新。

選擇 Postgres 和 pgvector 是因為它們能夠提供高效的數據檢索能力，這對於處理大量文本數據至關重要。這樣的設計雖然增加了系統的複雜度，但卻能顯著提升檢索性能。擴展性方面，隨著數據量的增加，可能需要進行性能調優，以確保系統能夠持續高效運行。

## 技術深入分析

GBrain 的核心技術機制包括使用 Postgres 作為後端數據庫，並結合 pgvector 提供高效的向量檢索能力。這使得 GBrain 能夠在面對大量 markdown 文件時，仍能保持快速的查詢響應時間。效能方面，GBrain 能夠處理數千個 markdown 文件，並在導入過程中保持良好的性能。設計取捨方面，選擇 Postgres 而非 NoSQL 數據庫是因為其在處理複雜查詢和關聯數據時的優勢，雖然這樣可能增加了系統的複雜度。技術風險方面，隨著數據量的增加，可能會面臨性能瓶頸，特別是在高並發查詢的情況下。整合分析方面，GBrain 與主流的開發框架（如 React 或 Vue）整合難度較低，但需要用戶具備一定的數據庫知識以便於設置和維護。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體指導。安裝過程相對順暢，但需要用戶具備一定的數據庫知識。文件中包含了多個範例和指令，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 高效的混合搜索能力，能夠快速檢索大量信息。
> - 支持自動更新和同步，減少手動維護的工作量。
> - 結合 markdown 文件的靈活性，適合多種使用場景。

> [!danger] 缺點
> - 需要安裝和配置 Postgres，對於不熟悉數據庫的用戶可能有挑戰。
> - 在處理極大數據集時，可能需要進行性能調整。
> - 目前僅支持 Postgres，對於其他數據庫的支持尚未實現。

> [!warning] 注意事項
> - 需要安裝 Postgres 和 pgvector，對於不熟悉數據庫的用戶可能有一定的學習曲線。
> - 在處理非常大的數據集時，可能需要額外的性能調優。
> - 目前僅支持 Postgres 作為後端，對於其他數據庫的支持尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要針對大型數據集的管理，使用了不同的數據存儲技術，適合需要處理大規模數據的用戶。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於並行數據同步，而 GBrain 更加重視知識的增長和檢索，適合不同的使用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw-Medical-Skills 專注於醫療領域的知識管理，GBrain 則提供更通用的知識管理解決方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 使用不同的數據存儲技術，專注於大型數據集的管理，適合需要處理大規模數據的用戶。 | 如果你的項目需要處理超過 10,000 條記錄，並且需要高效的數據管理。 | medium，因為需要重新設計數據結構。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於並行數據同步，與 GBrain 的知識增長和檢索功能有所不同。 | 如果你的應用需要高效的數據同步而非知識管理。 | low，因為可以直接使用類似的數據結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gbrain** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 使用不同的數據存儲技術，專注於大型數據集的管理，適合需要處理大規模數據的用戶。 | Parsync 專注於並行數據同步，與 GBrain 的知識增長和檢索功能有所不同。 |
> | 遷移成本 | - | medium，因為需要重新設計數據結構。 | low，因為可以直接使用類似的數據結構。 |
> | 適用場景 | 主要場景 | 如果你的項目需要處理超過 10,000 條記錄，並且需要高效 | 如果你的應用需要高效的數據同步而非知識管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在導入大量文件時，可能會遇到性能瓶頸，導致導入過程變慢。
  - 解法：分批導入文件，並監控性能。
- [MEDIUM] Postgres 配置不當可能導致連接問題。
  - 解法：確保使用正確的連接字符串和配置參數。
- [MEDIUM] 在高並發查詢時，可能會出現性能下降。
  - 解法：考慮使用緩存層來減少查詢負擔。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要管理大量會議記錄的企業管理者 | 非常適合 | GBrain 能夠快速檢索和更新會議記錄，提升工作效率。 |
| 研究人員需要整理文獻資料 | 適合 | GBrain 的混合搜索技術能夠提供精確的檢索結果。 |
| 自由職業者管理客戶資料 | 普通 | 雖然 GBrain 提供了良好的管理功能，但對於小型項目可能過於複雜。 |
| 小型團隊需要簡單的知識管理工具 | 不適合 | GBrain 的設置和維護對於小型團隊來說可能過於繁瑣。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的知識管理系統，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：GBrain 需要連接到 Postgres 數據庫，可能會存取敏感資料，使用時需注意數據安全性。

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
| Forks | 274 |
| Open Issues | 20 |
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

**社群活躍度**：社群活躍度中等，最近有更新和開發活動。
**連結**：[文件](https://github.com/garrytan/gbrain/blob/main/README.md)

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

相關概念：[[知識管理]] · [[AI Agent]] · [[向量資料庫]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]]

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
> WHERE category = "其他" AND file.name != "garrytan--gbrain"
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
> const concepts = ["知識管理","AI Agent","向量資料庫"];
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
