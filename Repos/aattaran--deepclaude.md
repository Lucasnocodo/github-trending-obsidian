---
repo: aattaran/deepclaude
url: https://github.com/aattaran/deepclaude
owner: aattaran
owner_type: User
language: JavaScript
license: MIT
description: "Use Claude Code's autonomous agent loop with DeepSeek V4 Pro, OpenRouter, or any Anthropic-compatible backend. Same UX, 17x cheaper."
homepage: ""
stars: 1806
stars_per_day: 201
forks: 100
open_issues: 24
created: 2026-05-03
pushed_at: 2026-05-09
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
use_case: "使用 DeepSeek V4 Pro 以 17 倍更便宜的價格運行 Claude Code 的自主代理循環。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 4
repo_size_kb: 134
readme_length: 9574
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-05"
star_history: "2026-05-05:1036,2026-05-05:1042,2026-05-06:1329,2026-05-06:1334,2026-05-07:1490,2026-05-07:1492,2026-05-08:1595,2026-05-08:1597,2026-05-09:1642,2026-05-09:1643,2026-05-10:1676,2026-05-10:1676,2026-05-11:1715,2026-05-12:1777,2026-05-13:1806"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "deepclaude"
  - "aattaran/deepclaude"
  - "使用 DeepSeek V4 Pro 以 17 倍更便宜的價格運行 Claude Code 的自主代理循環。"
---

# deepclaude

**1.8k** stars · **201** stars/天 · 建立 9 天前 · JavaScript · MIT

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
> 使用 DeepSeek V4 Pro 以 17 倍更便宜的價格運行 Claude Code 的自主代理循環。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (201 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在成本可控的情況下運行複雜編程任務的開發者。
> **一句話重點** deepclaude 讓開發者能以更低的成本運行複雜的編程任務，並提供靈活的後端選擇。

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
> **結論** 花 3 小時學、2 小時整合，得到顯著的成本節省，值得採用。

> [!abstract] 核心創新
> deepclaude 提供了低成本的自主編程解決方案，並支持即時切換後端。

## 專案簡介

deepclaude 將 Claude Code 的自主代理循環與 DeepSeek V4 Pro 整合，讓使用者能以更低的成本運行複雜的編程任務。用戶只需設置 API 金鑰並啟動代理，便可在 Claude Code 中無縫切換不同的後端服務。這個工具的核心賣點是其成本效益，DeepSeek 的計費為每百萬輸出令牌 $0.87，而 Anthropic 則為 $15，這意味著在相同的使用情境下，使用 deepclaude 可以節省高達 90% 的費用。技術上，這個工具使用 Node.js 作為代理伺服器，並透過環境變數來管理 API 認證，確保使用者的設定不會被永久改變。

使用者可以選擇不同的後端服務，如 OpenRouter 和 Fireworks AI，並且可以在會話中即時切換，這在需要不同計算能力時非常方便。與其他類似工具相比，deepclaude 提供了更靈活的後端選擇和更低的運行成本，特別適合需要長時間運行的自動化任務。使用者在使用過程中可能會遇到一些限制，例如不支持圖像輸入和並行工具使用，但對於大多數編程任務來說，這些限制影響不大。整體來看，這個專案非常適合需要高效能且成本可控的開發者，尤其是在面對複雜的編程挑戰時。

**技術棧**：`Node.js 18+`

## 重點功能

- 多後端支持 — 支持 DeepSeek、OpenRouter 和 Fireworks AI，讓用戶根據需求選擇最合適的後端。
- 即時切換後端 — 用戶可以在會話中隨時切換後端，無需重啟會話。
- 自動上下文快取 — DeepSeek 的自動快取功能使得重複請求的成本大幅降低。
- CLI 和 VS Code 整合 — 提供命令行和 VS Code 的快捷鍵支持，方便開發者使用。
- 詳細的成本比較 — 提供不同後端的使用成本比較，幫助用戶做出明智的選擇。

## 快速開始

1. 安裝 Node.js 18+ 並設置 API 金鑰
```bash
setx DEEPSEEK_API_KEY "sk-..."
```
2. 啟動 deepclaude
```bash
deepclaude
```
3. 檢查後端狀態
```bash
deepclaude --status
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 deepclaude 並設置 API 金鑰",
  "deepclaude --switch deepseek  # 切換到 DeepSeek 後端",
  "# 預期輸出：切換到 DeepSeek."
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1806 stars（201/天），forks 100（5.5%），這顯示出對於成本效益的強烈需求。該專案的主要貢獻者 aliyarattaran-debug 之前在開源社群中活躍，這次專案解決了高成本的 AI 編程工具使用問題，讓開發者能以更低的價格獲得相似的功能。社群中對於其優勢的討論也引發了關注，尤其是對於如何在不降低性能的情況下減少開支的需求。這個工具的出現正好符合了開發者對於高效能和低成本的追求。

## 適合誰使用

**目標受眾**：需要在成本可控的情況下運行複雜編程任務的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 CI/CD 流程中自動執行代碼生成，因為使用 deepclaude 可以將成本從每月 $200 降至 $20。
> - 獨立開發者用它來進行多步驟的編程任務，因為它支持即時切換後端，能夠根據需求調整計算資源。
> - 資料科學家用它來快速測試不同的模型，因為其低廉的運行成本使得頻繁的實驗變得可行。

## 架構分析

deepclaude 的架構基於 Node.js，使用環境變數來管理 API 金鑰，並設置一個本地代理伺服器來處理 API 請求。這種設計使得用戶可以在不改變全局設定的情況下靈活切換後端。代理伺服器運行在 localhost:3200，並攔截所有 API 請求，這樣用戶可以在會話中隨時切換後端，這樣的設計帶來了更高的靈活性，但也可能增加了系統的複雜性。由於使用了 Node.js，這個工具的依賴相對較少，適合快速部署，但在高負載情況下可能會面臨性能瓶頸。整體來看，這種架構設計適合需要高效能和低成本的開發環境。

## 技術深入分析

deepclaude 的核心技術機制是基於 Node.js 的代理伺服器，這使得用戶能夠靈活地在不同的 AI 後端之間切換。這個代理伺服器攔截所有 API 請求，並根據用戶的設定將請求發送到相應的後端。這種設計不僅提高了靈活性，還能在不同的後端之間進行成本比較，讓用戶能夠選擇最具成本效益的方案。根據 README，DeepSeek 的自動上下文快取功能使得重複請求的成本大幅降低，這對於需要長時間運行的自動化任務特別有利。在性能方面，DeepSeek 的計費為每百萬輸出令牌 $0.87，這對於需要大量計算的任務來說是非常具吸引力的選擇。設計上，這個工具的依賴相對較少，適合快速部署，但在高負載情況下可能會面臨性能瓶頸。這種設計使得整合到現有的開發環境中相對容易，特別是在使用 VS Code 等主流 IDE 時，能夠快速配置和使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中有針對不同操作系統的指導，適合各種環境的使用者。

## 優缺點分析

> [!success] 優點
> - 極具成本效益，能顯著降低編程任務的開支。
> - 靈活的後端選擇，滿足不同需求的計算能力。
> - 支持即時切換後端，方便用戶根據需求調整。

> [!danger] 缺點
> - 不支持圖像輸入，限制了某些應用場景。
> - 在處理複雜推理時性能不如 Anthropic。
> - 依賴於本地代理伺服器，可能增加系統複雜性。

> [!warning] 注意事項
> - 不支持圖像輸入，僅限文本處理。
> - 在處理複雜推理時，DeepSeek 的表現不如 Anthropic。
> - 不支持並行工具使用，所有工具按順序執行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自主代理功能，但缺乏多後端支持，適合簡單任務的自動化。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的編程任務，無法像 deepclaude 一樣靈活切換後端。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 提供類似的功能，但成本較高，且不支持即時切換後端。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自主代理功能，但缺乏多後端支持，適合簡單任務的自動化。 | 如果你的需求較簡單，且不需要切換後端，這個工具會更輕量。 | low，因為功能相似，且設置較簡單。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的編程任務，無法像 deepclaude 一樣靈活切換後端。 | 如果你的任務非常專一且不需要多樣化的後端，這個工具可能更合適。 | medium，因為需要重新調整工作流程。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 提供類似的功能，但成本較高，且不支持即時切換後端。 | 如果你的團隊已經在使用此工具，且不需要切換後端，則可以繼續使用。 | high，因為需要全面評估和調整現有系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **deepclaude** | **agent-sprite-forge** | **claude-obsidian** | **claude-code** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的自主代理功能，但缺乏多後端支持，適合簡單任務的自動化。 | 專注於特定的編程任務，無法像 deepclaude 一樣靈活切換後端。 | 提供類似的功能，但成本較高，且不支持即時切換後端。 |
> | 遷移成本 | - | low，因為功能相似，且設置較簡單。 | medium，因為需要重新調整工作流程。 | high，因為需要全面評估和調整現有系統。 |
> | 適用場景 | 主要場景 | 如果你的需求較簡單，且不需要切換後端，這個工具會更輕量。 | 如果你的任務非常專一且不需要多樣化的後端，這個工具可能更合適 | 如果你的團隊已經在使用此工具，且不需要切換後端，則可以繼續使 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，代理伺服器可能會出現性能瓶頸。
  - 解法：監控系統資源，必要時升級硬體。
- [MEDIUM] 切換後端時可能會導致短暫的請求延遲。
  - 解法：提前測試切換，避免在高峰期進行。
- [MEDIUM] 不支持圖像輸入，限制某些應用場景。
  - 解法：使用其他工具處理圖像，然後再進行文本處理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 成本效益高，適合小型團隊的需求。 |
| 需要長時間運行的自動化任務 | 非常適合 | DeepSeek 的快取功能能顯著降低運行成本。 |
| 大型企業的核心系統 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 需要處理圖像的 AI 任務 | 不適合 | 不支持圖像輸入，限制了應用範圍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到顯著的成本節省，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取環境變數和 API 金鑰，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。安全性考量相對較低，因為不涉及敏感數據。

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
| Forks | 100 |
| Open Issues | 24 |
| Issue 解決率 | 4% (1 closed) |
| 最後推送 | 2026-05-09 |
| 建立日期 | 2026-05-03 |
| Repo 大小 | 134 KB |
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

**社群活躍度**：社群活躍度中等，開發者在 9 天內解決了 1 個問題。
**連結**：[文件](https://github.com/aatttaran/deepclaude)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-03 ~ 2026-05-05）
> **活躍天數** 3 天 · **最新 commit** fix: strip thinking blocks on backend switch — close DeepSeek/Anthropic 400s

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/aattaran/deepclaude/issues/1) | What's the advantage of this? | 10 | 3 |
> | [#4](https://github.com/aattaran/deepclaude/issues/4) | Suggestion: Name Change | 1 | 3 |
> | [#27](https://github.com/aattaran/deepclaude/issues/27) | API Error: InvalidHTTPResponse | 0 | 1 |
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]]

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
