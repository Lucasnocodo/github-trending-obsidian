---
repo: phuryn/claude-usage
url: https://github.com/phuryn/claude-usage
owner: phuryn
owner_type: User
language: Python
license: MIT
description: "A local dashboard for tracking your Claude Code token usage, costs, and session history. Pro and Max subscribers get a progress bar. This gives you the full picture."
homepage: "https://www.productcompass.pm/"
stars: 878
stars_per_day: 176
forks: 128
open_issues: 10
created: 2026-04-07
pushed_at: 2026-04-09
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "提供本地儀表板來追蹤 Claude Code 的 token 使用情況、成本和會話歷史。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-20"
contributor_count: 5
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 1484
readme_length: 4476
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:878"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/claude_code"
aliases:
  - "claude-usage"
  - "phuryn/claude-usage"
  - "提供本地儀表板來追蹤 Claude Code 的 token 使用情況、成本和會話歷史。"
---

# claude-usage

**878** stars · **176** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/phuryn--claude-usage");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`claude-code`

> [!summary] 一句話摘要
> 提供本地儀表板來追蹤 Claude Code 的 token 使用情況、成本和會話歷史。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (176 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要追蹤 Claude Code 使用情況並優化成本的開發者和團隊。
> **一句話重點** 這個專案讓用戶能夠在本地輕鬆追蹤和管理 Claude Code 的使用情況，提供了官方 UI 所缺乏的透明度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/phuryn--claude-usage");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "phuryn--claude-usage" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時的使用數據和成本估算，值得採用。

> [!abstract] 核心創新
> 這個專案提供了本地化的使用追蹤和成本估算功能，超越了官方 UI 的限制。

## 專案簡介

Claude Code Usage Dashboard 是一個用於追蹤 Claude Code 使用情況的本地儀表板，能夠讀取本地生成的 JSONL 日誌，並將其轉換為可視化的圖表和成本估算。用戶可以通過 CLI 指令如 `python cli.py scan` 來掃描 JSONL 文件，並使用 `python cli.py dashboard` 啟動儀表板，這樣就能在本地伺服器上查看使用情況。這個工具的賣點在於它能提供 Anthropic UI 所無法顯示的詳細數據，讓用戶清楚了解自己的 token 使用情況。它支持 API、Pro 和 Max 計劃，並能捕捉來自 CLI、VS Code 擴展和 Dispatched Code 會話的使用數據。

技術上，這個專案使用 Python 標準庫，無需第三方包，這使得安裝和運行都非常簡單。與其他工具相比，如使用 Anthropic 的官方 UI，這個儀表板提供了更細緻的使用數據和成本估算，特別是對於需要精細管理 token 使用的開發者來說，這是非常有價值的。實際使用中，這個工具能夠快速掃描和更新數據，並在本地伺服器上提供即時的使用統計，這對於需要即時反饋的開發環境非常有幫助。儘管目前仍在早期階段，但其設計簡潔且功能明確，適合小型團隊或個人開發者使用。

**技術棧**：`Python 3.8+`

## 重點功能

- 本地儀表板 — 提供即時的使用數據和成本估算，無需依賴外部服務。
- 支持多種計劃 — 能夠捕捉 API、Pro 和 Max 計劃的使用數據。
- 增量掃描 — 只處理新或變更的文件，提高掃描效率。
- 自定義項目目錄 — 允許用戶指定自定義的項目目錄進行掃描。
- 實時更新 — 儀表板每 30 秒自動刷新，提供最新數據。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/phuryn/claude-usage && cd claude-usage
```
2. 掃描 JSONL 文件並填充數據庫
```bash
python cli.py scan
```
3. 啟動儀表板
```bash
python cli.py dashboard
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 Python 3.8+",
  "python cli.py scan",
  "# 預期輸出：掃描 JSONL 文件並填充數據庫"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 878 stars（176/天），forks 128（14.6%），顯示出穩定的增長趨勢。這個專案由 The Product Compass 團隊開發，旨在解決用戶對於 Claude Code 使用情況缺乏透明度的問題。之前用戶只能依賴官方 UI，無法獲得詳細的使用數據和成本估算。這個工具的出現使得用戶能夠更好地管理和優化他們的 token 使用，特別是在 API 使用量大的情況下。社群的反饋也顯示出對於這類工具的需求，尤其是在開發者之間的討論中。forks/stars 比率為 14.6%，顯示出有相當一部分用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要追蹤 Claude Code 使用情況並優化成本的開發者和團隊。

> [!example] 使用場景
> - 獨立開發者用它來追蹤自己的 Claude Code token 使用情況，因為這樣可以避免超出預算的成本。
> - 小型團隊用它來分析不同模型的使用情況，因為這能幫助他們優化 API 調用，降低運營成本。
> - 數據分析師用它來生成使用報告，因為這樣可以快速獲得關鍵指標，並做出數據驅動的決策。

## 架構分析

這個專案採用單一 Python 腳本架構，因為這樣可以簡化安裝和使用過程。數據流從 JSONL 文件到 SQLite 數據庫，再到本地 HTTP 伺服器，這樣的設計使得用戶能夠快速獲取使用數據。選擇 SQLite 作為數據存儲解決方案，因為它輕量且易於管理，但在處理大規模數據時可能會遇到性能瓶頸。

儀表板使用 Chart.js 來呈現數據，這使得視覺化效果良好，但依賴於外部 CDN，可能會影響加載速度。整體架構簡單，適合小型專案，但在擴展性上可能需要重新考慮。若未來需要支持更多用戶或更高頻率的數據更新，可能需要考慮更強大的數據庫解決方案。

## 技術深入分析

這個專案的核心技術機制是通過解析 Claude Code 生成的 JSONL 文件來獲取使用數據，並將其存儲在 SQLite 數據庫中。使用 Python 標準庫進行開發，避免了對第三方包的依賴，這使得安裝和使用都非常簡單。儘管如此，這也限制了某些功能的擴展性，例如在數據處理上可能不如使用更強大的數據庫系統。效能方面，因為使用 SQLite，當數據量增大時，查詢速度可能會變慢，特別是在高頻率的使用場景中。設計上，選擇單一腳本架構來簡化使用流程，但這也意味著在功能擴展上可能會遇到挑戰。對於小型團隊或個人開發者來說，這樣的設計是合適的，但若未來需要支持更高的使用量，可能需要重新考慮架構選擇。整合到現有的開發流程中相對簡單，因為它不需要複雜的配置或依賴，適合快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，包含安裝步驟和使用範例。安裝過程順暢，無需額外的依賴或配置。提供的快速入門指南簡單易懂，適合新手使用。文件目前僅有英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的安裝步驟。
> - 提供詳細的使用數據，幫助用戶優化成本。
> - 本地化儀表板，無需依賴外部服務。

> [!danger] 缺點
> - 不支持 Cowork 會話的數據捕捉，功能有限。
> - 僅支持 Python 3.8+，對於其他環境不友好。
> - 在處理大量數據時可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 不支持 Cowork 會話的數據捕捉，因為這些會話在伺服器端運行。
> - 儀表板僅顯示 API 計劃的成本估算，Pro 和 Max 計劃的成本結構不同。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 提供類似的使用追蹤功能，但可能不如本專案簡單易用。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 專注於源碼映射，功能範圍不同，適合需要源碼分析的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 這個工具專注於使用 Claude Code 的基本功能，但不如本專案提供詳細的使用數據和成本估算。 | 如果你的需求僅限於基本的使用追蹤，而不需要詳細的成本分析，則可以選擇它。 | low，因為功能相似，轉移過程相對簡單。 |
| [ChinaSiro/claude-code-sourcemap](https://github.com/ChinaSiro/claude-code-sourcemap) | 這個工具專注於源碼映射，與本專案的功能範圍不同，主要針對需要源碼分析的用戶。 | 如果你的需求是進行源碼映射和分析，而不是使用追蹤，則應選擇它。 | medium，因為功能和數據結構有所不同，可能需要調整使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-usage** | **claude-code** | **claude-code-sourcemap** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於使用 Claude Code 的基本功能，但不如本專案提供詳細的使用數據和成本估算。 | 這個工具專注於源碼映射，與本專案的功能範圍不同，主要針對需要源碼分析的用戶。 |
> | 遷移成本 | - | low，因為功能相似，轉移過程相對簡單。 | medium，因為功能和數據結構有所不同，可能需要調整使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於基本的使用追蹤，而不需要詳細的成本分析，則 | 如果你的需求是進行源碼映射和分析，而不是使用追蹤，則應選擇它 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在掃描大型 JSONL 文件時可能會導致性能下降
  - 解法：分割文件或限制掃描範圍
- **[HIGH]** 未能捕捉 Cowork 會話的數據
  - 解法：使用其他工具來補充這部分數據
- [MEDIUM] 在特定環境下可能無法啟動儀表板
  - 解法：檢查 Python 環境和依賴配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要追蹤 API 使用情況 | 非常適合 | 提供詳細的使用數據和成本估算，幫助團隊優化開支。 |
| 個人開發者想要簡單的使用追蹤工具 | 非常適合 | 安裝簡單，無需複雜配置，快速上手。 |
| 大型企業需要高效的數據處理和分析 | 不適合 | 目前架構在處理大量數據時可能會遇到性能瓶頸。 |
| 需要捕捉 Cowork 會話的使用情況 | 不適合 | 無法捕捉此類數據，功能有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時的使用數據和成本估算，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限運行，僅存取本地文件和數據庫，不會存取敏感資料。依賴鏈簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/phuryn--claude-usage");
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
> const me = dv.page("Repos/phuryn--claude-usage");
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
| Forks | 128 |
| Open Issues | 10 |
| Issue 解決率 | 33% (5 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://www.productcompass.pm/) |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/phuryn/claude-usage) |
| Topics | `claude-code` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@phuryn](https://github.com/phuryn) | 22 |
> | [@andrelsjunior](https://github.com/andrelsjunior) | 1 |
> | [@ianneub](https://github.com/ianneub) | 1 |
> | [@barakplasma](https://github.com/barakplasma) | 1 |
> | [@zxiiro](https://github.com/zxiiro) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應問題的速度較慢。
**連結**：[文件](https://www.productcompass.pm/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-09）
> **活躍天數** 1 天 · **最新 commit** docs: add CHANGELOG.md (#36)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#39](https://github.com/phuryn/claude-usage/issues/39) | Feature: Hourly activity distribution chart with peak hours | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Usage Dashboard
> 
> [](LICENSE)
> [](https://claude.ai/code)
> 
> **Pro and Max subscribers get a progress bar. This gives you the full picture.**
> 
> Claude Code writes detailed usage logs locally — token counts, models, sessions, projects — regardless of your plan. This dashboard reads those logs and turns them into charts and cost estimates. Works on API, Pro, and Max plans.
> 
> **Created by:** [The Product Compass Newsletter](https://www.productcompass.pm)
> 
> ---
> 
> ## What this tracks
> 
> Works on **API, Pro, and Max plans** — Claude Code writes local usage logs regardless of subscription type. This tool reads those logs and gives you visibility that Anthropic's UI doesn't provide.
> 
> Captures usage from:
> - **Claude Code CLI** (`claude` command in terminal)
> - **VS Code extension** (Claude Code sidebar)
> - **Dispatched Code sessions** (sessions routed through Claude Code)
> 
> **Not captured:**
> - **Cowork sessions** — these run server-side and do not write local JSONL transcripts
> 
> ---
> 
> ## Requirements
> 
> - Python 3.8+
> - No third-party packages — uses only the standard library (`sqlite3`, `http.server`, `json`, `pathlib`)
> 
> > Anyone running Claude Code already has Python installed.
> 
> ## Quick Start
> 
> No `pip install`, no virtual environment, no build step.
> 
> ### Windows
> ```
> git clone https://github.com/phuryn/claude-usage
> cd claude-usage
> python cli.py dashboard
> ```
> 
> ### macOS / Linux
> ```
> git clone https://github.com/phuryn/claude-usage
> cd claude-usage
> python3 cli.py dashboard
> ```
> 
> ---
> 
> ## Usage
> 
> > On macOS/Linux, use `python3` instead of `python` in all commands below.
> 
> ```
> # Scan JSONL files and populate the database (~/.claude/usage.db)
> python cli.py scan
> 
> # Show today's usage summary by model (in terminal)
> python cli.py today
> 
> # Show all-time statistics (in terminal)
> python cli.py stats
> 
> # Scan + open browser dashboard at http://localhost:8080
> python cli.py dashboard
> 
> # Custom host and port via environment variables
> HOST=0.0.0.0 PORT=9000 python cli.py dashboard
> 
> # Scan a custom projects directory
> python cli.py scan --projects-dir /path/to/transcripts
> ```
> 
> The scanner is incremental — it tracks each file's path and modification time, so re-running `scan` is fast and only processes new or changed files.
> 
> By default, the scanner checks both `~/.claude/projects/` and the Xcode Claude integration directory (`~/Library/Developer/Xcode/CodingAssistant/ClaudeAgentConfig/projects/`), skipping any that don't exist. Use `--projects-dir` to scan a custom location instead.
> 
> ---
> 
> ## How it works
> 
> Claude Code writes one JSONL file per session to `~/.claude/projects/`. Each line is a JSON record; `assistant`-type records contain:
> - `message.usage.input_tokens` — raw prompt tokens
> - `message.usage.output_tokens` — generated tokens
> - `message.usage.cache_creation_input_tokens` — tokens written to prompt cache
> - `message.usage.cache_read_input_tokens` — tokens served from prompt cache
> - `message.model` — the model used (e.g. `claude-sonnet-4-6`)
> 
> `scanner.py` parses those files and stores the data in a SQLite database at `~/.claude/usage.db`.
> 
> `dashboard.py` serves a single-page dashboard on `localhost:8080` with Chart.js charts (loaded from CDN). It auto-refreshes every 30 seconds and supports model filtering with bookmarkable URLs. The bind address and port can be overridden with `HOST` and `PORT` environment variables (defaults: `localhost`, `8080`).
> 
> ---
> 
> ## Cost estimates
> 
> Costs are calculated using **Anthropic API pricing as of April 2026** ([claude.com/pricing#api](https://claude.com/pricing#api)).
> 
> **Only models whose name contains `opus`, `sonnet`, or `haiku` are included in cost calculations.** Local models, unknown models, and any other model names are excluded (shown as `n/a`).
> 
> | Model | Input | Output | Cache Write | Cache Read |
> |-------|-------|--------|------------|-----------|
> | claude-opus-4-6 | $5.00/MTok | $25.00/MTok | $6.25/MTok | $0.50/MTok |
> | claude-sonnet-4-6 | $3.00/MTok | $15.00/MTok | $3.75/MTok | $0.30/MTok |
> | claude-haiku-4-5 | $1.00/MTok | $5.00/MTok | $1.25/MTok | $0.10/MTok |
> 
> > **Note:** These are API prices. If you use Claude Code via a Max or Pro subscription, your actual cost structure is different (subscription-based, not per-token).
> 
> ---
> 
> ## Files
> 
> | File | Purpose |
> |------|---------|
> | `scanner.py` | Parses JSONL transcripts, writes to `~/.claude/usage.db` |
> | `dashboard.py` | HTTP server + single-page HTML/JS dashboard |
> | `cli.py` | `scan`, `today`, `stats`, `dashboard` commands |

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[資料視覺化]]

相關專案：[[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/phuryn/claude-usage) · [官方網站](https://www.productcompass.pm/)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "phuryn--claude-usage"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "phuryn--claude-usage"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "phuryn--claude-usage" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "phuryn--claude-usage"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","API 設計","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "phuryn--claude-usage" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/phuryn--claude-usage");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "phuryn--claude-usage" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "phuryn" AND file.name != "phuryn--claude-usage"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/phuryn--claude-usage");
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
> const me = dv.page("Repos/phuryn--claude-usage");
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
> const me = dv.page("Repos/phuryn--claude-usage");
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
> const me = dv.page("Repos/phuryn--claude-usage");
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
> const me = dv.page("Repos/phuryn--claude-usage");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 首次收錄，878 stars
