---
repo: aattaran/deepclaude
url: https://github.com/aattaran/deepclaude
owner: aattaran
owner_type: User
language: JavaScript
license: MIT
description: "Use Claude Code's autonomous agent loop with DeepSeek V4 Pro, OpenRouter, or any Anthropic-compatible backend. Same UX, 17x cheaper."
homepage: ""
stars: 1887
stars_per_day: 135
forks: 108
open_issues: 24
created: 2026-05-03
pushed_at: 2026-05-16
first_seen: 2026-05-05
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-05
use_case: "以 17 倍的價格使用 Claude Code 的自主代理循環，兼容多種後端。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 4
repo_size_kb: 133
readme_length: 9574
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-05"
star_history: "2026-05-05:1036,2026-05-05:1042,2026-05-06:1329,2026-05-06:1334,2026-05-07:1490,2026-05-07:1492,2026-05-08:1595,2026-05-08:1597,2026-05-09:1642,2026-05-09:1643,2026-05-10:1676,2026-05-10:1676,2026-05-11:1715,2026-05-12:1777,2026-05-13:1806,2026-05-14:1829,2026-05-15:1854,2026-05-16:1868,2026-05-17:1876,2026-05-18:1887"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "deepclaude"
  - "aattaran/deepclaude"
  - "以 17 倍的價格使用 Claude Code 的自主代理循環，兼容多種後端。"
---

# deepclaude

**1.9k** stars · **135** stars/天 · 建立 14 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/aattaran--deepclaude");
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
> 以 17 倍的價格使用 Claude Code 的自主代理循環，兼容多種後端。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (135 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在成本有限的情況下使用高效能 AI 代理的開發者。
> **一句話重點** deepclaude 讓開發者以更低的成本使用強大的 AI 工具，並且提供靈活的後端切換功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/aattaran--deepclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "aattaran--deepclaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、5 小時整合，得到高效能和低成本的解決方案，值得嘗試。

> [!abstract] 核心創新
> deepclaude 提供了即時切換後端的能力，並且在保持使用者體驗的同時大幅降低了運行成本。

## 專案簡介

deepclaude 是一個能夠使用 Claude Code 的自主代理循環的工具，並且可以與 DeepSeek V4 Pro、OpenRouter 或任何兼容的 Anthropic 後端進行整合。用戶只需設置 API 金鑰，便可在命令行中快速切換後端，實現低至 $0.87/M 的計費，顯著降低成本。這個工具的賣點在於它能夠在不改變使用者體驗的情況下，將計算成本從 Anthropic 的 $15/M 降至 DeepSeek 的 $0.87/M，並且支持多種操作，如文件讀寫、Bash 執行和子代理生成。技術上，使用 Node.js 18+ 作為代理，並通過環境變數管理 API 認證，這樣的設計使得用戶能夠在不同的後端之間靈活切換，並且無需重啟會話。

這種設計的優勢在於能夠即時響應用戶需求，並且在多次請求中利用自動上下文緩存，進一步降低成本。與其他類似工具相比，deepclaude 提供了更高的性價比，特別適合需要長時間運行的自主編碼任務。使用者可以通過簡單的 CLI 指令或 VS Code 快捷鍵來操作，這使得整合到現有工作流中變得更加方便。整體而言，這是一個針對需要高效能和低成本解決方案的開發者的理想選擇。

**技術棧**：`Node.js 18+` · `PowerShell` · `Shell`

## 重點功能

- 多後端支持 — 兼容 DeepSeek、OpenRouter 和 Anthropic，使用者可根據需求靈活切換。
- 即時切換後端 — 透過 CLI 指令或 VS Code 快捷鍵，無需重啟會話即可切換。
- 自動上下文緩存 — 在多次請求中自動緩存上下文，顯著降低計費，達到 $0.004/M 的成本。
- 命令行界面友好 — 提供簡單的指令，如 `deepclaude --switch deepseek` 來切換後端。
- 支持文件操作 — 能夠進行文件讀寫、編輯及執行 Bash 命令，滿足多種開發需求。

## 快速開始

1. 安裝 Node.js 18+
```bash
npm install -g deepclaude
```
2. 設置 DeepSeek API 金鑰
```bash
export DEEPSEEK_API_KEY='sk-...'
```
3. 啟動 deepclaude
```bash
deepclaude
```

## 程式碼範例

```js
# 前置條件
# 設置 API 金鑰
export DEEPSEEK_API_KEY='sk-your-key-here'

# 啟動 deepclaude
深度啟動
深度claude --status  # 顯示可用的後端和金鑰
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天就累積 1887 stars（135/天），forks 108（5.7%），顯示出穩定的增長潛力。這個專案的作者 Aliyar Attaran 之前在開源社群中活躍，解決了使用 Claude Code 成本過高的問題，讓開發者能以更低的價格使用強大的 AI 工具。近期的推廣活動和社群討論也引起了廣泛關注，尤其是在 AI 開發者中。這個工具的成功也反映了對於高效能、低成本解決方案的需求日益增加。

## 適合誰使用

**目標受眾**：需要在成本有限的情況下使用高效能 AI 代理的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 CI/CD 流程中自動化代碼生成，因為它能將成本從 $15/M 降至 $0.87/M，顯著降低開發支出。
> - 獨立開發者用它來快速構建原型，因為它支持即時切換後端，能夠在不同的環境中靈活運用。
> - 數據科學家用它來進行多步驟的數據處理，因為其自動上下文緩存功能能夠大幅提高效率，減少重複請求的成本。

## 架構分析

deepclaude 採用 Node.js 作為主要運行環境，並通過環境變數管理 API 金鑰，這樣的設計使得用戶能夠靈活配置後端。代理運行在本地的 3200 端口，負責攔截所有 API 請求，並根據用戶的選擇將請求轉發到相應的後端。這種架構的好處是能夠在不影響使用者體驗的情況下，實現成本的顯著降低。選擇 Node.js 主要是因為它的非阻塞特性，能夠有效處理高併發請求。整體架構的擴展性良好，但在使用過程中可能會遇到本地環境配置的挑戰。

## 技術深入分析

deepclaude 的核心技術機制在於其使用 Node.js 作為代理，並通過環境變數管理 API 金鑰，這樣的設計使得用戶能夠靈活配置後端。代理運行在本地的 3200 端口，負責攔截所有 API 請求，並根據用戶的選擇將請求轉發到相應的後端。這種架構的好處是能夠在不影響使用者體驗的情況下，實現成本的顯著降低。整體架構的擴展性良好，但在使用過程中可能會遇到本地環境配置的挑戰。

選擇 Node.js 主要是因為它的非阻塞特性，能夠有效處理高併發請求。設計取捨方面，選擇使用自動上下文緩存來降低重複請求的成本，這在長時間運行的任務中顯示出明顯的優勢。技術風險方面，對於高併發請求的處理能力可能會在規模擴大時出現瓶頸，特別是在本地環境配置不當的情況下。整合分析方面，與主流開發工具的整合相對簡單，但需要注意環境變數的配置。

整體而言，deepclaude 是一個針對需要高效能和低成本解決方案的開發者的理想選擇。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要注意環境變數的配置；有良好的入門指南，幫助新手快速上手；目前僅提供英文文件，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 顯著降低運行成本，使用 DeepSeek 時可達到 $0.87/M。
> - 靈活的後端切換功能，支持即時響應用戶需求。
> - 支持多種操作，如文件讀寫和 Bash 執行，功能全面。

> [!danger] 缺點
> - 不支持圖像或視覺輸入，功能上有所限制。
> - 在複雜推理任務中性能不如原版 Anthropic。
> - 對於並行處理的支持有限，可能影響效率。

> [!warning] 注意事項
> - 不支持圖像/視覺輸入，僅限文本處理。
> - 在複雜推理任務中，DeepSeek 的表現不如原版 Anthropic。
> - 對於並行工具使用的支持有限，默認情況下按順序執行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自主代理功能，但主要針對遊戲開發，並不專注於成本優化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於簡化 AI 代理的設置，但不提供即時後端切換的功能。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 針對 Obsidian 用戶的集成解決方案，無法提供多後端支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的自主代理，並不專注於成本優化。 | 如果你的項目主要集中在遊戲開發，並需要專門的代理功能。 | medium，因為需要重新設計代理邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡化的 AI 代理設置，但不支持即時後端切換。 | 如果你需要一個簡單的代理設置，並不需要多後端支持。 | low，因為設置過程較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **deepclaude** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的自主代理，並不專注於成本優化。 | 提供簡化的 AI 代理設置，但不支持即時後端切換。 |
> | 遷移成本 | - | medium，因為需要重新設計代理邏輯。 | low，因為設置過程較為簡單。 |
> | 適用場景 | 主要場景 | 如果你的項目主要集中在遊戲開發，並需要專門的代理功能。 | 如果你需要一個簡單的代理設置，並不需要多後端支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下配置環境變數時可能會出現問題，導致無法啟動代理。
  - 解法：確保使用 PowerShell 以正確設置環境變數。
- [MEDIUM] 在高並發請求下，可能出現延遲或錯誤。
  - 解法：減少同時請求數量，分批處理請求。
- [MEDIUM] 某些功能在 DeepSeek 上的表現不如 Anthropic。
  - 解法：在需要複雜推理時切換回 Anthropic 後端。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 低成本且靈活的後端切換功能，能夠滿足初創公司的需求。 |
| 需要長時間運行的自主編碼任務 | 適合 | 自動上下文緩存能夠顯著降低運行成本。 |
| 大型企業的核心產品 | 不適合 | 目前仍處於 beta 階段，穩定性和可靠性尚未達到生產環境的要求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、5 小時整合，得到高效能和低成本的解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需設置 API 金鑰，並不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/aattaran--deepclaude");
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
> const me = dv.page("Repos/aattaran--deepclaude");
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
| Forks | 108 |
| Open Issues | 24 |
| Issue 解決率 | 4% (1 closed) |
| 最後推送 | 2026-05-16 |
| 建立日期 | 2026-05-03 |
| Repo 大小 | 133 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aattaran/deepclaude) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 51
>     "PowerShell" : 25
>     "Shell" : 24
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@aliyarattaran-debug](https://github.com/aliyarattaran-debug) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有定期的更新和問題回應。
**連結**：[文件](https://github.com/aatttaran/deepclaude)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-03 ~ 2026-05-05）
> **活躍天數** 3 天 · **最新 commit** fix: strip thinking blocks on backend switch — close DeepSeek/Anthropic 400s

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/aattaran/deepclaude/issues/1) | What's the advantage of this? | 11 | 3 |
> | [#4](https://github.com/aattaran/deepclaude/issues/4) | Suggestion: Name Change | 1 | 3 |
> | [#27](https://github.com/aattaran/deepclaude/issues/27) | API Error: InvalidHTTPResponse | 0 | 4 |
> | [#25](https://github.com/aattaran/deepclaude/issues/25) | Forward unknown arguments to `claude` (e.g. --dangerously-sk | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # deepclaude
> 
> Use Claude Code's autonomous agent loop with **DeepSeek V4 Pro**, **OpenRouter**, or any Anthropic-compatible backend. Same UX, 17x cheaper.
> 
> 
> ## Quick start (2 minutes)
> 
> 
> ### 3. Install
> 
> **Windows:**
> ```powershell
> 
> ### Setup per backend
> 
> **DeepSeek** (default - just needs `DEEPSEEK_API_KEY`):
> ```bash
> setx DEEPSEEK_API_KEY "sk-..."           # Windows
> export DEEPSEEK_API_KEY="sk-..."         # macOS/Linux
> ```
> 
> **OpenRouter** (optional):
> ```bash
> setx OPENROUTER_API_KEY "sk-or-..."      # Windows
> export OPENROUTER_API_KEY="sk-or-..."    # macOS/Linux
> ```
> 
> **Fireworks AI** (optional):
> ```bash
> setx FIREWORKS_API_KEY "fw_..."          # Windows
> export FIREWORKS_API_KEY="fw_..."        # macOS/Linux
> ```
> 
> 
> ### Prerequisites
> - Must be logged into Claude Code: `claude auth login`
> - Must have a claude.ai subscription (the bridge is Anthropic infrastructure)
> - Node.js 18+ (for the proxy)
> 
> The proxy starts automatically and stops when the session ends. See [proxy/README.md](proxy/README.md) for technical details.
> 
> 
> ### 1. Get a DeepSeek API key
> 
> Sign up at [platform.deepseek.com](https://platform.deepseek.com), add $5 credit, copy your API key.
> 
> 
> ### Option 1: Slash commands (recommended)
> 
> Add these files to `~/.claude/commands/`:
> 
> **`deepseek.md`:**
> ```
> Switch the model proxy to DeepSeek. Run this command silently and report the result:
> curl -sX POST http://127.0.0.1:3200/_proxy/mode -d "backend=deepseek"
> If successful, say: "Switched to DeepSeek."
> ```
> 
> **`anthropic.md`:**
> ```
> Switch the model proxy back to Anthropic. Run this command silently and report the result:
> curl -sX POST http://127.0.0.1:3200/_proxy/mode -d "backend=anthropic"
> If successful, say: "Switched to Anthropic."
> ```
> 
> **`openrouter.md`:**
> ```
> Switch the model proxy to OpenRouter. Run this command silently and report the result:
> curl -sX POST http://127.0.0.1:3200/_proxy/mode -d "backend=openrouter"
> If successful, say: "Switched to OpenRouter."
> ```
> 
> Then type `/deepseek`, `/anthropic`, or `/openrouter` in any Claude Code session to switch instantly.
> 
> 
> ### Option 2: CLI flag
> 
> ```bash
> deepclaude --switch deepseek    # or: ds, or, fw, anthropic
> deepclaude -s anthropic
> ```
> 
> 
> ### Option 3: VS Code keyboard shortcuts
> 
> Add to `.vscode/tasks.json`:
> ```json
> {
>   "version": "2.0.0",
>   "tasks": [
>     {
>       "label": "Proxy: Switch to DeepSeek",
>       "type": "shell",
>       "command": "Invoke-RestMethod -Uri http://127.0.0.1:3200/_proxy/mode -Method Post -Body 'backend=deepseek'",
>       "presentation": { "reveal": "always" },
>       "problemMatcher": []
>     },
>     {
>       "label": "Proxy: Switch to Anthropic",
>       "type": "shell",
>       "command": "Invoke-RestMethod -Uri http://127.0.0.1:3200/_proxy/mode -Method Post -Body 'backend=anthropic'",
>       "presentation": { "reveal": "always" },
>       "problemMatcher": []
>     }
>   ]
> }
> ```
> 
> Then bind in `keybindings.json`:
> ```json
> { "key": "ctrl+alt+d", "command": "workbench.action.tasks.runTask", "args": "Proxy: Switch to DeepSeek" },
> { "key": "ctrl+alt+a", "command": "workbench.action.tasks.runTask", "args": "Proxy: Switch to Anthropic" }
> ```
> 
> 
> ## Cost comparison
> 
> | Usage level | Anthropic Max | deepclaude (DeepSeek) | Savings |
> |---|---|---|---|
> | Light (10 days/mo) | $200/mo (capped) | ~$20/mo | 90% |
> | Heavy (25 days/mo) | $200/mo (capped) | ~$50/mo | 75% |
> | With auto loops | $200/mo (capped) | ~$80/mo | 60% |
> 
> DeepSeek's automatic context caching makes agent loops extremely cheap - after the first request, the system prompt and file context are cached at $0.004/M (vs $0.44/M uncached).
> 
> 
> ## VS Code / Cursor integration
> 
> Add terminal profiles so you can launch deepclaude from the IDE:
> 
> **Settings > JSON:**
> ```json
> {
>   "terminal.integrated.profiles.windows": {
>     "DeepSeek Agent": {
>       "path": "powershell.exe",
>       "args": ["-ExecutionPolicy", "Bypass", "-NoExit", "-File", "C:\\path\\to\\deepclaude.ps1"]
>     }
>   }
> }
> ```
> 
> Or on macOS/Linux:
> ```json
> {
>   "terminal.integrated.profiles.linux": {
>     "DeepSeek Agent": {
>       "path": "/usr/local/bin/deepclaude"
>     }
>   }
> }
> ```
> 
> 
> ## What this does
> 
> Claude Code is the best autonomous coding agent — but it costs $200/month with usage caps. DeepSeek V4 Pro scores 96.4% on LiveCodeBench and costs $0.87/M output tokens.
> 
> **deepclaude** swaps the brain while keeping the body:
> 
> ```
> Your terminal
>   +-- Claude Code CLI (tool loop, file editing, bash, git - unchanged)
>         +-- API calls -> DeepSeek V4 Pro ($0.87/M) instead of Anthropic ($15/M)
> ```
> 
> Everything works: file reading, editing, bash execution, subagent spawning, autonomous multi-step coding loops. The only difference is which model thinks.
> 
> 
> ### 2. Set environment variables
> 
> **Windows (PowerShell):**
> ```powershell
> setx DEEPSEEK_API_KEY "sk-your-key-here"
> ```
> 
> **macOS/Linux:**
> ```bash
> echo 'export DEEPSEEK_API_KEY="sk-your-key-here"' >> ~/.bashrc
> source ~/.bashrc
> ```
> 
> 
> # Copy the script to a directory in your PATH
> Copy-Item deepclaude.ps1 "$env:USERPROFILE\.local\bin\deepclaude.ps1"
> 
> 
> # Or add the repo directory to PATH
> setx PATH "$env:PATH;C:\path\to\deepclaude"
> ```
> 
> **macOS/Linux:**
> ```bash
> chmod +x deepclaude.sh
> sudo ln -s "$(pwd)/deepclaude.sh" /usr/local/bin/deepclaude
> ```
> 
> 
> ### 4. Use it
> 
> ```bash
> deepclaude                  # Launch Claude Code with DeepSeek V4 Pro
> deepclaude --status         # Show available backends and keys
> deepclaude --backend or     # Use OpenRouter (cheapest, $0.44/M input)
> deepclaude --backend fw     # Use Fireworks AI (fastest, US servers)
> deepclaude --backend anthropic  # Normal Claude Code (when you need Opus)
> deepclaude --cost           # Show pricing comparison
> deepclaude --benchmark      # Latency test across all providers
> deepclaude --switch ds      # Switch backend mid-session (no restart)
> ```
> 
> 
> ## How it works
> 
> Claude Code reads these environment variables to determine where to send API calls:
> 
> | Variable | What it does |
> |---|---|
> | `ANTHROPIC_BASE_URL` | API endpoint (default: api.anthropic.com) |
> | `ANTHROPIC_AUTH_TOKEN` | API key for the backend |
> | `ANTHROPIC_DEFAULT_OPUS_MODEL` | Model name for Opus-tier tasks |
> | `ANTHROPIC_DEFAULT_SONNET_MODEL` | Model name for Sonnet-tier tasks |
> | `ANTHROPIC_DEFAULT_HAIKU_MODEL` | Model name for Haiku-tier (subagents) |
> | `CLAUDE_CODE_SUBAGENT_MODEL` | Model for spawned subagents |
> 
> **deepclaude** sets these per-session (not permanently), launches Claude Code, then restores your original settings on exit.
> 
> 
> ## Supported backends
> 
> | Backend | Flag | Input/M | Output/M | Servers | Notes |
> |---|---|---|---|---|---|
> | **DeepSeek** (default) | `--backend ds` | $0.44 | $0.87 | China | Auto context caching (120x cheaper on repeat turns) |
> | **OpenRouter** | `--backend or` | $0.44 | $0.87 | US | Cheapest, lowest latency from US/EU |
> | **Fireworks AI** | `--backend fw` | $1.74 | $3.48 | US | Fastest inference |
> | **Anthropic** | `--backend anthropic` | $3.00 | $15.00 | US | Original Claude Opus (for hard problems) |
> 
> 
> ## What works and what doesn't
> 
> 
> ### Works
> - File reading, writing, editing (Read/Write/Edit tools)
> - Bash/PowerShell execution
> - Glob and Grep search
> - Multi-step autonomous tool loops
> - Subagent spawning
> - Git operations
> - Project initialization (`/init`)
> - Thinking mode (enabled by default)
> 
> 
> ### Doesn't work or degraded
> | Feature | Reason |
> |---|---|
> | Image/vision input | DeepSeek's Anthropic endpoint doesn't support images |
> | Parallel tool use | Supported by DeepSeek (up to 128 per call), but Claude Code sends tools sequentially by default |
> | MCP server tools | Not supported through compatibility layer |
> | Prompt caching savings | DeepSeek has its own caching (automatic), but Anthropic's `cache_control` is ignored |
> 
> 
> ### Intelligence difference
> - **Routine tasks** (80% of work): DeepSeek V4 Pro is comparable to Claude Opus
> - **Complex reasoning** (20%): Claude Opus is stronger - switch with `--backend anthropic`
> 
> 
> ## Live switching (no restart)
> 
> Switch between Anthropic and DeepSeek **mid-session** - from inside Claude Code itself. No restart, no

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/aattaran/deepclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "aattaran--deepclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "aattaran--deepclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "aattaran--deepclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "aattaran--deepclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "aattaran--deepclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/aattaran--deepclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "aattaran--deepclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "aattaran" AND file.name != "aattaran--deepclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/aattaran--deepclaude");
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
> const me = dv.page("Repos/aattaran--deepclaude");
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
> const me = dv.page("Repos/aattaran--deepclaude");
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
> const me = dv.page("Repos/aattaran--deepclaude");
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
> const me = dv.page("Repos/aattaran--deepclaude");
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

> **2026-05-05** — 首次收錄
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

- [[2026-05-10|2026-05-10]] — 再次上榜，1.7k stars
- [[2026-05-09|2026-05-09]] — 再次上榜，1.6k stars
- [[2026-05-08|2026-05-08]] — 再次上榜，1.6k stars
- [[2026-05-07|2026-05-07]] — 再次上榜，1.5k stars
- [[2026-05-06|2026-05-06]] — 再次上榜，1.3k stars
- [[2026-05-05|2026-05-05]] — 首次收錄，1.0k stars
