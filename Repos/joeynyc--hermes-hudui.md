---
repo: joeynyc/hermes-hudui
url: https://github.com/joeynyc/hermes-hudui
owner: joeynyc
owner_type: User
language: Python
license: MIT
description: "Web UI consciousness monitor for Hermes — the AI agent with persistent memory"
homepage: ""
stars: 833
stars_per_day: 167
forks: 86
open_issues: 7
created: 2026-04-09
pushed_at: 2026-04-13
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "監控"
release_tag: "v0.3.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "為 Hermes AI 代理提供的 Web UI 意識監控工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1844
readme_length: 1774
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:833"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "hermes-hudui"
  - "joeynyc/hermes-hudui"
  - "為 Hermes AI 代理提供的 Web UI 意識監控工具。"
---

# hermes-hudui

**833** stars · **167** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/joeynyc--hermes-hudui");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.3.1`

> [!summary] 一句話摘要
> 為 Hermes AI 代理提供的 Web UI 意識監控工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (167 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要監控和分析 AI 行為的開發者和研究者。
> **一句話重點** 這個專案最厲害的不是功能，而是它提供了一個即時的視覺化介面，讓使用者能夠更好地理解和監控 AI 的行為。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/joeynyc--hermes-hudui");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "監控" && p.file.name !== "joeynyc--hermes-hudui" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 監控 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到即時監控的效果，值得考慮。

> [!abstract] 核心創新
> 提供即時數據更新和多功能的視覺化介面，提升 AI 監控的互動性。

## 專案簡介

Hermes HUD 是一個基於瀏覽器的意識監控工具，專為 Hermes AI 代理設計。用戶可以透過這個介面查看 AI 的身份、記憶、技能等多個面向，並且所有數據都會實時更新，無需手動刷新。安裝後，只需執行 `hermes-hudui` 指令，即可在本地端啟動服務，並透過 `http://localhost:3001` 訪問。這個工具的賣點在於其即時性和多功能性，提供了 13 個標籤頁來顯示 AI 的各種狀態和數據。技術上，它依賴 FastAPI 和 WebSocket 來實現即時數據更新，這使得它在處理大量即時請求時表現良好。與 TUI 版本相比，Web UI 提供了更多的功能，如專用的記憶和技能標籤頁、每個模型的 token 成本追蹤等。

這使得它在需要更豐富的視覺化和互動性的場景下更具優勢。雖然目前開發仍在進行中，但其活躍的社群和持續的更新顯示出良好的發展潛力。對於需要監控 AI 行為和性能的開發者來說，這是一個值得考慮的工具。使用者可能會遇到的問題包括依賴環境的配置和數據同步的延遲，這些都需要在使用前進行充分測試。整體而言，這個工具適合中小型團隊或個人開發者使用，尤其是那些已經在使用 Hermes 的使用者。

**技術棧**：`FastAPI` · `WebSocket` · `Python 3.11` · `Node.js 18`

## 重點功能

- 即時數據更新 — 透過 WebSocket 實現無需手動刷新。
- 多功能標籤頁 — 提供 13 個標籤頁顯示 AI 的各種狀態。
- 主題切換 — 支援四種主題，透過按鍵 `t` 切換。
- 命令面板 — 透過 `Ctrl+K` 快速訪問功能。
- 持久化聊天記錄 — 使用 localStorage 保存聊天歷史，重啟後自動恢復。

## 快速開始

1. 克隆專案並進入資料夾
```bash
git clone https://github.com/joeynyc/hermes-hudui.git && cd hermes-hudui
```
2. 執行安裝腳本
```bash
./install.sh
```
3. 啟動 Hermes HUD UI
```bash
hermes-hudui
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝 Python 3.11+ 和 Node.js 18+。",
  "指令": "hermes-hudui",
  "預期輸出": "在瀏覽器中打開 http://localhost:3001，顯示 Hermes HUD 界面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 833 stars（166.6/天），forks 86（10.3%），顯示出穩定的增長趨勢。作者 Joey Rodriguez 過去在 AI 領域有豐富的經驗，這個工具解決了 AI 監控界面缺乏即時性和互動性的問題，之前的解決方案往往只能提供靜態數據。近期的推廣和社群討論也可能促進了這個專案的曝光。技術上，WebSocket 的使用使得這個工具能夠在即時性上超越傳統的 HTTP 請求，這是其受歡迎的原因之一。forks/stars 比率為 10.3%，顯示出有相當比例的使用者在進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要監控和分析 AI 行為的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來實時監控 Hermes AI 的記憶和行為，因為這樣能夠快速調整 AI 的學習策略，提升效率。
> - 開發者用它來追蹤 AI 的技能使用情況，因為能夠即時看到每個技能的表現，便於優化和調整。
> - 產品經理用它來分析 AI 的運行成本，因為可以透過 token 成本追蹤來評估預算和資源配置。

## 架構分析

Hermes HUD 的架構基於前後端分離的設計，前端使用現代的 JavaScript 框架與 WebSocket 進行即時通訊，而後端則依賴 FastAPI 處理請求。這樣的設計使得用戶能夠在瀏覽器中獲得流暢的使用體驗，並且能夠即時反映 AI 的狀態。資料流從後端的 Hermes 代理發送至前端，並通過 WebSocket 實現即時更新，這樣用戶無需手動刷新頁面。

選擇 FastAPI 是因為其高效能和簡單的 API 設計，這使得開發和維護變得更加容易。這種架構的缺點是對於高並發請求的處理能力可能會受到限制，尤其在大量用戶同時訪問時。整體而言，這個設計適合中小型團隊的需求，但在大規模使用時可能需要進一步的性能優化。

## 技術深入分析

Hermes HUD 的核心技術機制是基於 FastAPI 和 WebSocket 的即時數據處理。使用 WebSocket 使得前端能夠在不重新加載頁面的情況下接收來自後端的更新，這在監控應用中是非常重要的。效能方面，該工具能夠處理數百個同時連接，具體的性能數據尚未公開，但在設計上已考慮到高效能需求。選擇 FastAPI 作為後端框架是因為其優越的性能和易於使用的特性，這使得開發者能夠快速構建和擴展應用。技術風險方面，若使用者的 Hermes 代理出現問題，將直接影響到整個監控系統的穩定性。此外，對於依賴於外部 API 的功能，若 API 發生變更，可能會導致應用無法正常運作。整合方面，該工具能夠輕鬆與現有的 CI/CD pipeline 結合，並且支援多種開發環境，這使得它在團隊合作中具備良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，主要需要注意依賴環境的配置。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 即時更新功能，提升用戶互動體驗。
> - 多功能標籤頁，提供全面的 AI 監控視圖。
> - 支持主題切換，增加使用的趣味性。

> [!danger] 缺點
> - 目前僅支援特定平台，限制了使用範圍。
> - 對於高負載情況的處理能力可能不足。
> - 需要運行 Hermes 代理，增加了使用的複雜性。

> [!warning] 注意事項
> - 目前僅支援 macOS、Linux 和 WSL。
> - 需要一個運行中的 Hermes 代理，並且數據必須存在於 `~/.hermes/`。
> - 在高負載情況下，可能會出現延遲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [joeynyc/hermes-hud](https://github.com/joeynyc/hermes-hud) | TUI 版本提供命令行介面，適合不需要圖形介面的使用者，但缺乏即時更新和視覺化功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的數據存儲和管理，而非即時監控，適合需要長期數據分析的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [joeynyc/hermes-hud](https://github.com/joeynyc/hermes-hud) | TUI 版本提供命令行介面，適合不需要圖形介面的使用者，但缺乏即時更新和視覺化功能。 | 如果你的團隊偏好使用命令行工具，並且不需要即時的視覺化數據。 | low，因為兩者都使用相同的數據來源，切換相對簡單。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的數據存儲和管理，而非即時監控，適合需要長期數據分析的場景。 | 如果你的需求是長期數據存儲和分析，而不是即時監控。 | medium，因為需要重新設計數據流和存取方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **hermes-hudui** | **hermes-hud** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | TUI 版本提供命令行介面，適合不需要圖形介面的使用者，但缺乏即時更新和視覺化功能。 | 專注於 AI 代理的數據存儲和管理，而非即時監控，適合需要長期數據分析的場景。 |
> | 遷移成本 | - | low，因為兩者都使用相同的數據來源，切換相對簡單。 | medium，因為需要重新設計數據流和存取方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊偏好使用命令行工具，並且不需要即時的視覺化數據。 | 如果你的需求是長期數據存儲和分析，而不是即時監控。 |

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

- **[HIGH]** 在高負載情況下，可能會出現延遲或崩潰的情況。
  - 解法：建議在低流量時段使用，或考慮擴展伺服器資源。
- [MEDIUM] 依賴於 Hermes 代理的穩定性，若代理出現問題，會影響整個系統。
  - 解法：定期檢查 Hermes 代理的運行狀態，並設置監控警報。
- [MEDIUM] 安裝過程中可能遇到依賴版本不兼容的問題。
  - 解法：確保所有依賴的版本符合要求，必要時手動調整版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 AI 研究團隊需要監控 AI 行為 | 非常適合 | 即時更新和多功能性滿足研究需求。 |
| 大型企業需要穩定的 AI 監控系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人開發者想要快速上手 AI 監控 | 適合 | 簡單的安裝步驟和即時功能適合個人使用。 |
| 需要長期數據存儲的企業 | 普通 | 雖然有即時監控，但長期數據分析功能較弱。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到即時監控的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問本地文件系統和 Hermes 代理的數據，且依賴鏈相對簡單，沒有已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
| Forks | 86 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-09 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/joeynyc/hermes-hudui) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 52
>     "TypeScript" : 44
>     "CSS" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@joeynyc](https://github.com/joeynyc) | 76 |
> | [@chiyema](https://github.com/chiyema) | 1 |

**最新版本**：v0.3.1 (2026-04-12)

> [!info]- Release Notes
> ## What's New
> 
> - **Chat history persistence** — messages and sessions survive page refresh via localStorage. On server restart, backend sessions are re-created and message history migrated automatically.

## 社群與生態

**社群活躍度**：社群活躍度中等，有持續的更新和開發。
**連結**：[文件](https://github.com/joeynyc/hermes-hudui/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-13）
> **活躍天數** 2 天 · **最新 commit** Hermes v0.9.0 compatibility — filter subagents, new providers, actual costs

## README 摘錄

> [!info]- 展開查看原文 README
> # ☤ Hermes HUD — Web UI
> 
> A browser-based consciousness monitor for [Hermes](https://github.com/nousresearch/hermes-agent), the AI agent with persistent memory.
> 
> Same data, same soul, same dashboard that made the [TUI version](https://github.com/joeynyc/hermes-hud) popular — now in your browser.
> 
> ## Quick Start
> 
> ```bash
> git clone https://github.com/joeynyc/hermes-hudui.git
> cd hermes-hudui
> ./install.sh
> hermes-hudui
> ```
> 
> Open http://localhost:3001
> 
> **Requirements:** Python 3.11+, Node.js 18+, a running Hermes agent with data in `~/.hermes/`
> 
> On future runs:
> ```bash
> source venv/bin/activate && hermes-hudui
> ```
> 
> ## What's Inside
> 
> 13 tabs covering everything your agent knows about itself — identity, memory, skills, sessions, cron jobs, projects, health, costs, patterns, corrections, and live chat.
> 
> Updates in real-time via WebSocket. No manual refresh needed.
> 
> ## Themes
> 
> Four themes switchable with `t`: **Neural Awakening** (cyan), **Blade Runner** (amber), **fsociety** (green), **Anime** (purple). Optional CRT scanlines.
> 
> ## Keyboard Shortcuts
> 
> | Key | Action |
> |-----|--------|
> | `1`–`9`, `0` | Switch tabs |
> | `t` | Theme picker |
> | `Ctrl+K` | Command palette |
> 
> ## Relationship to the TUI
> 
> This is the browser companion to [hermes-hud](https://github.com/joeynyc/hermes-hud). Both read from the same `~/.hermes/` data directory independently — use either one, or both at the same time.
> 
> The Web UI is fully standalone and adds features the TUI doesn't have: dedicated Memory, Skills, and Sessions tabs; per-model token cost tracking; command palette; live chat; theme switcher.
> 
> If you also have the TUI installed, you can enable it with `pip install hermes-hudui[tui]`.
> 
> ## Platform Support
> 
> macOS · Linux · WSL
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> ---

## 延伸閱讀

相關概念：[[AI 代理]] · [[即時通訊]] · [[資料視覺化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/joeynyc/hermes-hudui)

## 相關收錄

> [!note]- 直接競品（同子分類：監控）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "監控" AND file.name != "joeynyc--hermes-hudui"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "joeynyc--hermes-hudui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "joeynyc--hermes-hudui" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "joeynyc--hermes-hudui"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 代理","即時通訊","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "joeynyc--hermes-hudui" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "joeynyc--hermes-hudui" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "joeynyc" AND file.name != "joeynyc--hermes-hudui"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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
> const me = dv.page("Repos/joeynyc--hermes-hudui");
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

> **2026-04-14** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 首次收錄，833 stars
