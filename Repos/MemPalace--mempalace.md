---
repo: MemPalace/mempalace
url: https://github.com/MemPalace/mempalace
owner: MemPalace
owner_type: Organization
language: Python
license: MIT
description: "The highest-scoring AI memory system ever benchmarked. And it's free."
homepage: ""
stars: 41809
stars_per_day: 5973
forks: 5345
open_issues: 384
created: 2026-04-05
pushed_at: 2026-04-11
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: "v3.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "讓 AI 擁有記憶，將專案和對話挖掘成可搜尋的宮殿，無需 API 金鑰。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-15"
contributor_count: 5
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 1351
readme_length: 10000
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:41802,2026-04-12:41809"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - easy_install
  - "topic/ai"
  - "topic/chromadb"
  - "topic/llm"
  - "topic/mcp"
  - "topic/memory"
aliases:
  - "mempalace"
  - "MemPalace/mempalace"
  - "讓 AI 擁有記憶，將專案和對話挖掘成可搜尋的宮殿，無需 API 金鑰。"
---

# mempalace

**41.8k** stars · **6.0k** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/MemPalace--mempalace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v3.1.0` `easy-install`

`ai` `chromadb` `llm` `mcp` `memory` `python`

> [!summary] 一句話摘要
> 讓 AI 擁有記憶，將專案和對話挖掘成可搜尋的宮殿，無需 API 金鑰。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (6.0k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在多個專案間管理記憶和資料的開發者，尤其是對 AI 記憶系統有需求的團隊。
> **一句話重點** MemPalace 的設計理念在於將所有對話和決策記錄下來，避免資料遺失，並提供高效的檢索方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶系統" && p.file.name !== "MemPalace--mempalace" && p.status !== "archived")
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
> **結論** 花 2 小時學習，3 小時整合，得到高效的記憶管理系統，值得投資。

> [!abstract] 核心創新
> MemPalace 是目前唯一一個在 LongMemEval 測試中達到 96.6% 的本地 AI 記憶系統。

## 專案簡介

MemPalace 是一個 AI 記憶系統，旨在將所有對話和專案資料儲存為可搜尋的結構，避免資料遺失。用戶可以透過 `mempalace init` 進行設置，並使用 `mempalace mine` 指令將資料挖掘到系統中。其核心機制是將對話儲存在 ChromaDB 中，並透過結構化的「宮殿」概念來組織這些資料，讓用戶能夠快速找到所需的資訊。這種設計的賣點在於不需要 AI 自行決定哪些資訊值得記住，而是將所有資訊保留，並透過語意搜尋來進行檢索。

技術上，MemPalace 使用 Python 和 Shell，並依賴 ChromaDB 作為資料庫，這使得它在處理資料時不需依賴外部 API，提供了更高的隱私性和控制權。與其他記憶系統相比，如 Supermemory ASMR 和 Mastra，MemPalace 提供了免費的本地解決方案，並且在 LongMemEval 基準測試中達到 96.6% 的高分，這是目前最高的成績。使用者在實際操作中可能會遇到一些問題，如 README 中的描述與實際代碼不符，但開發團隊積極回應並修正這些問題。總體來看，MemPalace 適合需要長期記憶和快速檢索的開發者，特別是在多專案管理的情況下。

**技術棧**：`Python 3.9+` · `ChromaDB`

## 重點功能

- 全本地運行 — 完全在用戶機器上運行，無需外部 API 或雲端服務。
- 結構化記憶 — 將對話和資料組織成宮殿結構，提供更高的檢索效率。
- 高效搜尋 — 使用 ChromaDB 儲存原始對話，並支持語意搜尋，達到 96.6% 的 LongMemEval 分數。
- 多種挖掘模式 — 支持對專案和對話的不同挖掘模式，滿足不同需求。
- 開源社群支持 — 積極回應社群反饋，持續改進和修正問題。

## 快速開始

1. 安裝 MemPalace
```bash
pip install mempalace
```
2. 初始化設置
```bash
mempalace init
```
3. 挖掘資料
```bash
mempalace mine ~/projects/myapp
```

## 程式碼範例

```python
# 前置條件
# 使用 pip 安裝 MemPalace
pip install mempalace

# 初始化設置
mempalace init

# 挖掘資料
mempalace mine ~/projects/myapp
# 預期輸出
初始化成功，開始挖掘資料。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 41809 stars（5973/天），forks 5345（12.8%），這顯示出強烈的社群興趣。作者 Milla Jovovich 和 Ben Sigman 具備開源背景，且解決了記憶系統中普遍存在的資料遺失問題。此專案的推出引起了社群的廣泛討論，特別是在 AI 記憶和資料管理的需求上。技術上，隨著 ChromaDB 的成熟，這個工具的可行性大幅提升。高達 12.8% 的 forks/stars 比率顯示出許多開發者在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在多個專案間管理記憶和資料的開發者，尤其是對 AI 記憶系統有需求的團隊。

> [!example] 使用場景
> - 獨立開發者用它來挖掘和管理多個專案的資料，因為它能夠將所有對話和決策記錄下來，避免重複工作。
> - 團隊領導用它來追蹤會議記錄和專案進展，因為它提供了結構化的檢索方式，能快速找到過去的討論。
> - 資料科學家用它來儲存和檢索實驗結果，因為它不依賴外部 API，確保了數據的隱私性和安全性。

## 架構分析

MemPalace 採用本地運行的架構，所有資料儲存在 ChromaDB 中，這樣的設計使得用戶能夠完全控制自己的資料。資料流從用戶的對話和專案資料進入系統，經過挖掘和結構化後存儲在資料庫中。這樣的架構避免了對外部 API 的依賴，提供了更高的隱私性。選擇 ChromaDB 作為資料庫是因為它支持高效的語意搜尋，而不需要對資料進行過多的處理。這樣的設計雖然在資料量增大時可能會面臨效能挑戰，但對於大多數用戶來說，這種本地化的解決方案能夠提供更好的使用體驗。

## 技術深入分析

MemPalace 的核心技術機制是將所有對話原文儲存在 ChromaDB 中，這樣的設計讓用戶能夠完全控制自己的資料，並且不需要依賴外部 API。這種方法的效能在 LongMemEval 測試中表現優異，達到 96.6% 的高分。資料的結構化設計使得檢索效率顯著提升，使用者能夠快速找到所需的資訊。選擇 Python 作為開發語言，因為它在資料處理和機器學習領域有廣泛的應用，並且擁有強大的社群支持。依賴 ChromaDB 的選擇是基於其高效的搜尋性能，但在資料量增大時可能會面臨效能瓶頸。技術風險方面，若未來用戶數量激增，可能會影響系統的穩定性和效能。整合方面，MemPalace 能夠與多種 AI 工具兼容，這使得它在多樣化的使用場景中具有良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，包含範例和配置說明。安裝過程相對順暢，但用戶需確保 Python 環境符合要求。整體而言，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需依賴外部服務，確保資料隱私。
> - 結構化的記憶系統，提升檢索效率。
> - 免費使用，無需訂閱費用。

> [!danger] 缺點
> - 對於大型資料集的效能可能不足。
> - 目前僅支持 ChromaDB，未來可能需要擴展資料庫選擇。
> - 社群支持仍在建立中，可能會遇到一些未解決的問題。

> [!warning] 注意事項
> - 僅支援 Python 3.9 以上版本。
> - 在大型資料集上可能會遇到效能瓶頸，需進行優化。
> - 目前僅支持 ChromaDB 作為資料庫，未來可能增加其他選項。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Supermemory/supermemory](https://github.com/Supermemory/supermemory) | Supermemory 需要外部 API 支持，且是付費服務，而 MemPalace 完全免費且本地運行。 |
| [Mastra/mastra](https://github.com/Mastra/mastra) | Mastra 依賴 GPT API，會產生額外的成本，而 MemPalace 無需 API，保持資料私密性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Supermemory/supermemory](https://github.com/Supermemory/supermemory) | Supermemory 依賴外部 API 來提供記憶功能，而 MemPalace 則完全在本地運行，無需 API 金鑰。 | 如果你的團隊需要依賴雲端服務進行記憶管理，且不介意支付費用，Supermemory 可能是更好的選擇。 | medium，因為需要將資料從本地轉移到雲端服務。 |
| [Mastra/mastra](https://github.com/Mastra/mastra) | Mastra 需要使用 GPT API 進行記憶處理，而 MemPalace 則無需外部 API，保持資料私密性。 | 如果你的專案已經依賴 GPT 進行其他操作，Mastra 可能更容易整合。 | high，因為需要重新設計資料流和 API 調用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mempalace** | **supermemory** | **mastra** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Supermemory 依賴外部 API 來提供記憶功能，而 MemPalace 則完全在本地運行，無需 API 金鑰。 | Mastra 需要使用 GPT API 進行記憶處理，而 MemPalace 則無需外部 API，保持資料私密性。 |
> | 遷移成本 | - | medium，因為需要將資料從本地轉移到雲端服務。 | high，因為需要重新設計資料流和 API 調用。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要依賴雲端服務進行記憶管理，且不介意支付費用， | 如果你的專案已經依賴 GPT 進行其他操作，Mastra 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人和小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** README 中的描述與實際代碼不符，可能會導致用戶困惑。
  - 解法：參考 GitHub Issues 確認最新的問題和修正。
- [MEDIUM] 在大型資料集上可能會遇到效能瓶頸。
  - 解法：考慮將資料分批處理或優化查詢。
- **[HIGH]** Windows 環境下可能會遇到 Unicode 錯誤。
  - 解法：使用 WSL 或確保環境變數設置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效管理和檢索專案資料，避免重複工作。 |
| 大型企業的資料管理系統 | 不適合 | 在大型資料集上可能會遇到效能瓶頸。 |
| 需要長期記憶的開發者 | 適合 | 提供了完整的記憶管理功能，無需依賴外部服務。 |
| 學術研究團隊進行資料挖掘 | 普通 | 雖然能夠儲存資料，但可能不符合特定的學術需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的記憶管理系統，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本地運行，不需要高權限，且不會存取敏感資料。依賴的 ChromaDB 需定期更新以避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MemPalace 最常與本地 AI 工具搭配使用，如 Claude 和 ChatGPT。在典型的工作流中，使用者可以在專案中挖掘資料後，透過 AI 進行檢索和管理。實際整合範例是，在一個使用 Claude 的專案中，使用 `mempalace init` 設定環境，然後透過 `mempalace mine` 將資料導入系統。與主流 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於配置過程，需確保所有設定正確無誤。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
| Forks | 5.3k |
| Open Issues | 384 |
| Issue 解決率 | 20% (96 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MemPalace/mempalace) |
| Topics | `ai` `chromadb` `llm` `mcp` `memory` `python` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bensig](https://github.com/bensig) | 84 |
> | [@igorls](https://github.com/igorls) | 28 |
> | [@tmuskal](https://github.com/tmuskal) | 26 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 20 |
> | [@milla-jovovich](https://github.com/milla-jovovich) | 9 |

**最新版本**：v3.1.0 — MemPalace v3.1.0 (2026-04-09)

> [!info]- Release Notes
> First PyPI cut since v3.0.0 on 2026-04-06 — **39 merged PRs**. This release closes the pip/plugin version drift (#290, #296) and lands the first-week community fixes.
> 
> ## 🔒 Security
> - **#387** Input validation at MCP entry points, shell-injection fix in save hook, file size guard + symlink skip, SQLite connection leak fix, WAL audit trail, hardened file perms
> - **#141** Sanitize `SESSION_ID` in save hook
> - **#139** Sanitize MCP error responses, remove `sys.exit` from library code
> 
> ## 🐛 Bug fixes (highlights)
> - **#399** MCP null args hang, `cmd_repair` infinite recursion, 500 MB OOM guard
> - **#270** **Claude + Codex plugin packaging** — one-step install (closes #187)
> - **#137** 10K safety cap on unbounded ChromaDB metadata fetches (closes #180)
> - **#129** Windows Unicode crash fix (closes #47)
> - **#123** `--yes` flag bypasses all init prompts (closes #179)
> - **#78** Respect nested `.gitignore` rules during mining (closes #233)
> - **#236** Silence ChromaDB telemetry + Apple Silicon CoreML segfault (closes #163)
> - **#324** Negotiate MCP protocol version instead of hardcoding
> - **#145** Room detection checks keywords against folder paths
> - **#136** SQLite WAL mode + consistent LIMIT in KG timeline
> - **#66** Batch ChromaDB reads to avoid SQLite variable limit
> - **#140** Upsert + deterministic IDs prevent data stagnation
> - Plus more — see full commit log
> 
> ## ✨ Features
> - **#61** OpenAI Codex CLI JSONL normalizer (first in the #59 import format umbrella)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開發者積極回應問題和反饋。
**連結**：[文件](https://github.com/milla-jovovich/mempalace)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-11 ~ 2026-04-11）
> **活躍天數** 1 天 · **最新 commit** fix: use epsilon comparison for mtime to prevent unnecessary re-mining (#610)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/MemPalace/mempalace/issues/27) | Multiple issues between README claims and codebase `bug` | 305 | 36 |
> | [#125](https://github.com/MemPalace/mempalace/issues/125) | BEAM 100K benchmark results - first end-to-end answer qualit | 28 | 9 |
> | [#37](https://github.com/MemPalace/mempalace/issues/37) | 简体中文用户看过来 `enhancement` | 22 | 7 |
> | [#39](https://github.com/MemPalace/mempalace/issues/39) | Independent benchmark reproduction on M2 Ultra — raw confirm | 15 | 13 |
> | [#342](https://github.com/MemPalace/mempalace/issues/342) | [Feature] Native OpenCode integration for MemPalace (Plugin  | 12 | 4 |

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
> [Quick Start](#quick-start) · [The Palace](#the-palace) · [AAAK Dialect](#aaak-dialect-experimental) · [Benchmarks](#benchmarks) · [MCP Tools](#mcp-server)
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
> ## An important follow up note regarding fake Me

## 延伸閱讀

相關概念：[[RAG]] · [[向量資料庫]] · [[記憶系統]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/MemPalace/mempalace)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶系統" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "MemPalace--mempalace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","向量資料庫","記憶系統"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MemPalace--mempalace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MemPalace--mempalace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MemPalace--mempalace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MemPalace" AND file.name != "MemPalace--mempalace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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
> const me = dv.page("Repos/MemPalace--mempalace");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 首次收錄，41.8k stars
