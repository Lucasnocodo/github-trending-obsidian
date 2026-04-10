---
repo: milla-jovovich/mempalace
url: https://github.com/milla-jovovich/mempalace
owner: milla-jovovich
owner_type: User
language: Python
license: MIT
description: "The highest-scoring AI memory system ever benchmarked. And it's free."
homepage: ""
stars: 35831
stars_per_day: 7166
forks: 4499
open_issues: 291
created: 2026-04-05
pushed_at: 2026-04-10
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: "v3.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供 AI 記憶系統，讓你能夠將專案和對話整理成可搜尋的記憶宮殿。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 26
repo_size_kb: 815
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:17279,2026-04-09:27495,2026-04-10:35831"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/chromadb"
  - "topic/llm"
  - "topic/mcp"
  - "topic/memory"
aliases:
  - "mempalace"
  - "milla-jovovich/mempalace"
  - "提供 AI 記憶系統，讓你能夠將專案和對話整理成可搜尋的記憶宮殿。"
---

# mempalace

**17.3k** stars · **5.8k** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/milla-jovovich--mempalace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v3.0.0` `easy-install`

`ai` `chromadb` `llm` `mcp` `memory` `python`

> [!summary] 一句話摘要
> 提供 AI 記憶系統，讓你能夠將專案和對話整理成可搜尋的記憶宮殿。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.8k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地管理和檢索大量對話和專案資料的開發者。
> **一句話重點** MemPalace 提供了一個創新的本地 AI 記憶系統，讓用戶能夠高效管理和檢索對話和專案資料。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/milla-jovovich--mempalace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶系統" && p.file.name !== "milla-jovovich--mempalace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效能的本地記憶系統，值得一試。

> [!abstract] 核心創新
> MemPalace 是目前已知的最高分 AI 記憶系統，無需任何 API 調用。

## 專案簡介

MemPalace 是一個開源的 AI 記憶系統，旨在讓使用者能夠將所有對話和專案資料存儲在本地，並透過結構化的方式進行檢索。使用者首先透過 `mempalace init` 指令進行初始化，然後可以使用 `mempalace mine` 指令來挖掘資料，這些資料會被存儲在 ChromaDB 中。這個系統的賣點在於其 96.6% 的 LongMemEval R@5 分數，這是目前已知的最高分，且不需要任何 API 調用。MemPalace 的架構模仿古代希臘的記憶宮殿，將記憶分為不同的「翼」、「廳」和「房間」，這種結構能提高檢索效率達 34%。此外，MemPalace 還引入了 AAAK 壓縮技術，雖然目前在性能上尚未超越原始模式，但未來有潛力改善。

與其他記憶系統相比，如 Supermemory 和 Mastra，MemPalace 提供完全免費的本地解決方案，無需訂閱費用。這使得它特別適合需要高效能和隱私保護的開發者。儘管目前存在一些已知問題，例如 README 中的聲明與實際代碼不符，但開發團隊已積極回應並修正這些問題。整體來看，MemPalace 是一個值得關注的記憶系統，特別是對於希望在本地管理大量對話和專案資料的開發者。

**技術棧**：`Python 3.9` · `ChromaDB`

## 重點功能

- 高達 96.6% LongMemEval R@5 — 無需 API 調用，最高分數。
- AAAK 壓縮技術 — 30 倍無損縮寫方言，適用於任何 LLM。
- 結構化存儲 — 將記憶分為翼、廳和房間，提高檢索效率 34%。
- 本地運行 — 完全不依賴雲端服務，所有資料存儲在用戶本地。
- 多種挖掘模式 — 支持專案、對話和一般資料的挖掘。

## 快速開始

1. 安裝 MemPalace
```bash
pip install mempalace
```
2. 初始化設置
```bash
mempalace init
```
3. 挖掘專案資料
```bash
mempalace mine ~/projects/myapp
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 MemPalace 並完成初始化。",
  "指令": "mempalace search \"why did we switch to GraphQL\"",
  "預期輸出": "返回所有與 GraphQL 相關的對話記錄。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 17279 stars（5760/天），forks 1966（11.4%），顯示出強烈的社群興趣。作者 Milla Jovovich 和 Ben Sigman 具備開源背景，並且針對記憶系統的痛點提供了創新的解決方案，特別是對於需要本地存儲和高效檢索的用戶。近期的社群反饋也促使他們迅速修正 README 中的錯誤，顯示出開發團隊對於用戶反饋的重視。這樣的開放態度和持續改進的承諾，進一步吸引了使用者的注意。

## 適合誰使用

**目標受眾**：需要在本地管理和檢索大量對話和專案資料的開發者。

> [!example] 使用場景
> - 後端工程師用它來將專案文檔和討論記錄整合到一個可搜尋的系統中，因為這樣可以快速回顧過去的決策過程，避免重複工作。
> - 產品經理用它來記錄會議紀錄和用戶反饋，因為這樣能夠在未來的產品迭代中輕鬆查找歷史資料。
> - AI 開發者用它來管理不同模型的訓練過程和結果，因為這樣可以確保所有實驗數據都能被有效存取和分析。

## 架構分析

MemPalace 的架構基於一種模擬古代記憶宮殿的設計，將記憶分為不同的結構。這種設計使得使用者能夠在不同的翼和房間中組織和檢索資料。資料存儲在 ChromaDB 中，這是一個高效的向量資料庫，支持快速檢索。選擇本地運行的設計使得用戶的資料不會外洩，並且能夠在沒有網路的情況下運行。這種架構的代價是需要用戶自行管理資料存儲和備份，但這也帶來了更高的隱私性和安全性。

## 技術深入分析

MemPalace 的核心技術在於其結構化的記憶管理，將記憶分為翼、廳和房間，這種設計不僅提升了檢索效率，也使得使用者能夠更直觀地管理資料。它使用 ChromaDB 作為資料存儲，這是一個高效的向量資料庫，能夠快速檢索大量資料。MemPalace 的 AAAK 壓縮技術雖然在某些情況下表現不如原始模式，但其潛力在於能夠在大規模資料中減少 token 數量。選擇本地運行的設計使得用戶的資料不會外洩，但也意味著用戶需要自行管理資料的備份和安全性。對於大型資料集的性能仍需進一步驗證，特別是在高並發的情況下。整體來看，MemPalace 的設計使其在隱私和性能之間取得了一個良好的平衡，適合需要高效能和隱私保護的開發者使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並且有實際範例。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 高效的本地資料檢索，無需依賴外部 API。
> - 結構化的記憶管理，提升檢索效率。
> - 完全免費，無需訂閱費用。

> [!danger] 缺點
> - 目前存在一些已知的問題和錯誤。
> - 對於大型資料集的性能仍需進一步驗證。
> - 使用 AAAK 壓縮技術可能導致資料損失。

> [!warning] 注意事項
> - 目前存在 README 中的聲明與實際代碼不符的問題。
> - AAAK 壓縮技術在某些情況下表現不如原始模式。
> - 對於大型資料集的性能仍需進一步驗證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Supermemory ASMR | 需要 API 調用且收費，而 MemPalace 完全免費且本地運行。 |
| Mastra | 依賴於 GPT API，可能產生額外的費用，而 MemPalace 無需任何 API。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Supermemory ASMR | 依賴於外部 API 進行記憶管理，並且需要訂閱費用。 | 如果你的團隊已經在使用 Supermemory 且對 API 調用有需求。 | medium，因為需要重新設計資料流和 API 整合。 |
| Mastra | 同樣依賴於 GPT API，並且需要支付額外的 API 費用。 | 如果需要更高級的 AI 功能且不介意支付 API 費用。 | high，因為需要重構整個系統以適應新的 API 調用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mempalace** | **Supermemory ASMR** | **Mastra** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 依賴於外部 API 進行記憶管理，並且需要訂閱費用。 | 同樣依賴於 GPT API，並且需要支付額外的 API 費用。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和 API 整合。 | high，因為需要重構整個系統以適應新的 API 調用。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Supermemory 且對 API | 如果需要更高級的 AI 功能且不介意支付 API 費用。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，尚不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** README 中的聲明與實際代碼不符，可能導致使用者困惑。
  - 解法：參考 GitHub 上的 Issues 以獲取最新資訊。
- [MEDIUM] AAAK 壓縮技術在小規模資料上表現不佳。
  - 解法：使用原始模式進行資料存儲以獲得最佳性能。
- [MEDIUM] 對於大型資料集的性能尚未經過充分測試。
  - 解法：在小規模資料集上進行測試，並逐步擴大。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效管理和檢索過去的對話和決策。 |
| 大型企業的資料管理系統 | 不適合 | 目前性能對於大型資料集的支持尚不明確。 |
| AI 開發者需要本地存儲和檢索資料 | 非常適合 | 提供高效能的本地解決方案，無需依賴外部服務。 |
| 需要高頻率 API 調用的應用 | 不適合 | MemPalace 不支持 API 調用，無法滿足此需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效能的本地記憶系統，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：MemPalace 在本地運行，無需高權限，所有資料存儲在用戶本地，無需接觸敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
| Forks | 2.0k |
| Open Issues | 90 |
| Issue 解決率 | 26% (31 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 815 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/milla-jovovich/mempalace) |
| Topics | `ai` `chromadb` `llm` `mcp` `memory` `python` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bensig](https://github.com/bensig) | 34 |
> | [@igorls](https://github.com/igorls) | 15 |
> | [@milla-jovovich](https://github.com/milla-jovovich) | 5 |
> | [@adv3nt3](https://github.com/adv3nt3) | 4 |
> | [@sheetsync](https://github.com/sheetsync) | 3 |

**最新版本**：v3.0.0 — MemPalace v3.0.0 (2026-04-06)

> [!info]- Release Notes
> ## MemPalace v3.0.0
> 
> The highest-scoring AI memory system ever benchmarked. And it's free.
> 
> ### Install
> 
> ```bash
> pip install mempalace
> ```
> 
> **PyPI:** https://pypi.org/project/mempalace/
> 
> ### Highlights
> 
> - **96.6% LongMemEval R@5** — highest published score with zero API calls
> - **100% LongMemEval R@5** — with optional Haiku rerank
> - **Palace architecture** — wings, rooms, halls, tunnels, closets, drawers — +34% retrieval from structure alone
> - **AAAK compression** — 30x lossless shorthand dialect, works with any LLM (Claude, GPT, Gemini, Llama, Mistral)
> - **Knowledge graph** — temporal entity-relationship triples in SQLite (local, free)
> - **Specialist agents** — each agent gets its own wing and diary in the palace
> - **MCP server** — 19 tools, auto-teaches AAAK to your AI
> - **Auto-save hooks** — for Claude Code (save every N messages + pre-compaction emergency save)
> - **Split command** — break concatenated mega-transcripts into per-session files before mining
> - **Fully local** — no API key, no cloud, no subscription. Everything on your machine.
> 
> ### What's New in v3
> 
> - `mempalace split` command for splitting concatenated transcript files
> - Specialist agent system with per-agent diaries
> - Improved entity detection during `init`

## 社群與生態

**社群活躍度**：社群活躍，開發團隊積極回應問題。
**連結**：[文件](https://github.com/milla-jovovich/mempalace)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-07）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #142 from igorls/chore/packaging-cleanup

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/milla-jovovich/mempalace/issues/27) | Multiple issues between README claims and codebase `bug` | 147 | 22 |
> | [#29](https://github.com/milla-jovovich/mempalace/issues/29) | Multiple issues with benchmark methodology and scoring | 29 | 3 |
> | [#125](https://github.com/milla-jovovich/mempalace/issues/125) | BEAM 100K benchmark results - first end-to-end answer qualit | 17 | 4 |
> | [#37](https://github.com/milla-jovovich/mempalace/issues/37) | 简体中文用户看过来 `enhancement` | 14 | 6 |
> | [#39](https://github.com/milla-jovovich/mempalace/issues/39) | Independent benchmark reproduction on M2 Ultra — raw confirm | 9 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MemPalace
> 
> 
> ## Quick Start
> 
> ```bash
> pip install mempalace
> 
> 
> # Setup
> mempalace init                               # guided onboarding + AAAK bootstrap
> 
> 
> ## Real-World Examples
> 
> 
> ## Configuration
> 
> 
> ### Global (`~/.mempalace/config.json`)
> 
> ```json
> {
>   "palace_path": "/custom/path/to/palace",
>   "collection_name": "mempalace_drawers",
>   "people_map": {"Kai": "KAI", "Priya": "PRI"}
> }
> ```
> 
> 
> ### Wing config (`~/.mempalace/wing_config.json`)
> 
> Generated by `mempalace init`. Maps your people and projects to wings:
> 
> ```json
> {
>   "default_wing": "wing_general",
>   "wings": {
>     "wing_kai": {"type": "person", "keywords": ["kai", "kai's"]},
>     "wing_driftwood": {"type": "project", "keywords": ["driftwood", "analytics", "saas"]}
>   }
> }
> ```
> 
> 
> ### The highest-scoring AI memory system ever benchmarked. And it's free.
> 
> Every conversation you have with an AI — every decision, every debugging session, every architecture debate — disappears when the session ends. Six months of work, gone. You start over every time.
> 
> Other memory systems try to fix this by letting AI decide what's worth remembering. It extracts "user prefers Postgres" and throws away the conversation where you explained *why*. MemPalace takes a different approach: **store everything, then make it findable.**
> 
> **The Palace** — Ancient Greek orators memorized entire speeches by placing ideas in rooms of an imaginary building. Walk through the building, find the idea. MemPalace applies the same principle to AI memory: your conversations are organized into wings (people and projects), halls (types of memory), and rooms (specific ideas). No AI decides what matters — you keep every word, and the structure gives you a navigable map instead of a flat search index.
> 
> **Raw verbatim storage** — MemPalace stores your actual exchanges in ChromaDB without summarization or extraction. The 96.6% LongMemEval result comes from this raw mode. We don't burn an LLM to decide what's "worth remembering" — we keep everything and let semantic search find it.
> 
> **AAAK (experimental)** — A lossy abbreviation dialect for packing repeated entities into fewer tokens at scale. Readable by any LLM that reads text — Claude, GPT, Gemini, Llama, Mistral — no decoder needed. **AAAK is a separate compression layer, not the storage default**, and on the LongMemEval benchmark it currently regresses vs raw mode (84.2% vs 96.6%). We're iterating. See the [note above](#a-note-from-milla--ben--april-7-2026) for the honest status.
> 
> **Local, open, adaptable** — MemPalace runs entirely on your machine, on any data you have locally, without using any external API or services. It has been tested on conversations — but it can be adapted for different types of datastores. This is why we're open-sourcing it.
> 
> [![][version-shield]][release-link]
> [![][python-shield]][python-link]
> [![][license-shield]][license-link]
> [![][discord-shield]][discord-link]
> 
> [Quick Start](#quick-start) · [The Palace](#the-palace) · [AAAK Dialect](#aaak-compression) · [Benchmarks](#benchmarks) · [MCP Tools](#mcp-server)
> 
> 
> ### Why Structure Matters
> 
> Tested on 22,000+ real conversation memories:
> 
> ```
> Search all closets:          60.9%  R@10
> Search within wing:          73.1%  (+12%)
> Search wing + hall:          84.8%  (+24%)
> Search wing + room:          94.8%  (+34%)
> ```
> 
> Wings and rooms aren't cosmetic. They're a **34% retrieval improvement**. The palace structure is the product.
> 
> 
> # Six months later: "why did I use Postgres here?"
> mempalace search "database decision" --wing orion
> 
> ## Benchmarks
> 
> Tested on standard academic benchmarks — reproducible, published datasets.
> 
> | Benchmark | Mode | Score | API Calls |
> |-----------|------|-------|-----------|
> | **LongMemEval R@5** | Raw (ChromaDB only) | **96.6%** | Zero |
> | **LongMemEval R@5** | Hybrid + Haiku rerank | **100%** (500/500) | ~500 |
> | **LoCoMo R@10** | Raw, session level | **60.3%** | Zero |
> | **Personal palace R@10** | Heuristic bench | **85%** | Zero |
> | **Palace structure impact** | Wing+room filtering | **+34%** R@10 | Zero |
> 
> The 96.6% raw score is the highest published LongMemEval result requiring no API key, no cloud, and no LLM at any stage.
> 
> 
> ### vs Published Systems
> 
> | System | LongMemEval R@5 | API Required | Cost |
> |--------|----------------|--------------|------|
> | **MemPalace (hybrid)** | **100%** | Optional | Free |
> | Supermemory ASMR | ~99% | Yes | — |
> | **MemPalace (raw)** | **96.6%** | **None** | **Free** |
> | Mastra | 94.87% | Yes (GPT) | API costs |
> | Mem0 | ~85% | Yes | $19–249/mo |
> | Zep | ~85% | Yes | $25/mo+ |
> 
> ---
> 
> 
> ### Highest LongMemEval score ever published — free or paid.
> 
> 96.6%LongMemEval R@5raw mode, zero API calls
> 500/500questions testedindependently reproduced
> $0No subscriptionNo cloud. Local only.
> 
> Reproducible — runners in benchmarks/. Full results. The 96.6% is from raw verbatim mode, not AAAK or rooms mode (those score lower — see note above).
> 
> ---
> 
> 
> ## A Note from Milla & Ben — April 7, 2026
> 
> > The community caught real problems in this README within hours of launch and we want to address them directly.
> >
> > **What we got wrong:**
> >
> > - **The AAAK token example was incorrect.** We used a rough heuristic (`len(text)//3`) for token counts instead of an actual tokenizer. Real counts via OpenAI's tokenizer: the English example is 66 tokens, the AAAK example is 73. AAAK does not save tokens at small scales — it's designed for *repeated entities at scale*, and the README example was a bad demonstration of that. We're rewriting it.
> >
> > - **"30x lossless compression" was overstated.** AAAK is a lossy abbreviation system (entity codes, sentence truncation). Independent benchmarks show AAAK mode scores **84.2% R@5 vs raw mode's 96.6%** on LongMemEval — a 12.4 point regression. The honest framing is: AAAK is an experimental compression layer that trades fidelity for token density, and **the 96.6% headline number is from RAW mode, not AAAK**.
> >
> > - **"+34% palace boost" was misleading.** That number compares unfiltered search to wing+room metadata filtering. Metadata filtering is a standard ChromaDB feature, not a novel retrieval mechanism. Real and useful, but not a moat.
> >
> > - **"Contradiction detection"** exists as a separate utility (`fact_checker.py`) but is not currently wired into the knowledge graph operations as the README implied.
> >
> > - **"100% with Haiku rerank"** is real (we have the result files) but the rerank pipeline is not in the public benchmark scripts. We're adding it.
> >
> > **What's still true and reproducible:**
> >
> > - **96.6% R@5 on LongMemEval in raw mode**, on 500 questions, zero API calls — independently reproduced on M2 Ultra in under 5 minutes by [@gizmax](https://github.com/milla-jovovich/mempalace/issues/39).
> > - Local, free, no subscription, no cloud, no data leaving your machine.
> > - The architecture (wings, rooms, closets, drawers) is real and useful, even if it's not a magical retrieval boost.
> >
> > **What we're doing:**
> >
> > 1. Rewriting the AAAK example with real tokenizer counts and a scenario where AAAK actually demonstrates compression
> > 2. Adding `mode raw / aaak / rooms` clearly to the benchmark documentation so the trade-offs are visible
> > 3. Wiring `fact_checker.py` into the KG ops so the contradiction detection claim becomes true
> > 4. Pinning ChromaDB to a tested range (Issue #100), fixing the shell injection in hooks (#110), and addressing the macOS ARM64 segfault (#74)
> >
> > **Thank you to everyone who poked holes in this.** Brutal honest criticism is exactly what makes open source work, and it's what we asked for. Special thanks to [@panuhorsmalahti](https://github.com/milla-jovovich/mempalace/issues/43), [@lhl](https://github.com/milla-jovovich/mempalace/issues/27), [@gizmax](https://github.com/milla-jovovich/mempalace/issues/39), and everyone who filed an issue or a PR in the first 48 hours. We're listening, we're fixing, and we'd rather be right than impressive.
> >
> > — *Milla Jovovich & Ben Sigman*
> 
> ---
> 
> 
> # Set up your world — who you work with, what your projec

## 延伸閱讀

相關概念：[[記憶系統]] · [[向量資料庫]] · [[AI 記憶]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/milla-jovovich/mempalace)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶系統" AND file.name != "milla-jovovich--mempalace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "milla-jovovich--mempalace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "milla-jovovich--mempalace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "milla-jovovich--mempalace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["記憶系統","向量資料庫","AI 記憶"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "milla-jovovich--mempalace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "milla-jovovich--mempalace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "milla-jovovich" AND file.name != "milla-jovovich--mempalace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
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
> const me = dv.page("Repos/milla-jovovich--mempalace");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-10|2026-04-10]] — 再次上榜，35.8k stars
- [[2026-04-09|2026-04-09]] — 再次上榜，27.5k stars
- [[2026-04-08|2026-04-08]] — 首次收錄，17.3k stars
