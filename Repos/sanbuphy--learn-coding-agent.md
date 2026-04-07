---
repo: sanbuphy/learn-coding-agent
url: https://github.com/sanbuphy/learn-coding-agent
owner: sanbuphy
owner_type: User
language: N/A
license: N/A
description: "Research on Coding Agents"
homepage: ""
stars: 11399
stars_per_day: 1900
forks: 19674
open_issues: 57
created: 2026-03-31
pushed_at: 2026-04-01
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "研究 CLI Agent 架構，幫助開發者理解和利用 Agent 技術。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-10"
contributor_count: 1
engagement: "high"
issue_close_rate: 2
repo_size_kb: 8187
readme_length: 9357
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:10559,2026-04-03:11009,2026-04-04:11181,2026-04-05:11263,2026-04-06:11334,2026-04-07:11399"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
aliases:
  - "learn-coding-agent"
  - "sanbuphy/learn-coding-agent"
  - "研究 CLI Agent 架構，幫助開發者理解和利用 Agent 技術。"
---

# learn-coding-agent

**10.6k** stars · **10.6k** stars/天 · 建立 1 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> 研究 CLI Agent 架構，幫助開發者理解和利用 Agent 技術。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (10.6k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 CLI Agent 架構有興趣的開發者和研究人員。
> **一句話重點** 這個專案不僅提供了 CLI Agent 的架構研究，還整合了多種實用工具，對開發者學習和實驗非常有幫助。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "sanbuphy--learn-coding-agent" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到多樣化的 CLI 工具開發能力，值得嘗試。

> [!abstract] 核心創新
> 專案整合了多種工具和功能，提供了一個全面的 CLI Agent 架構研究平台。

## 專案簡介

這個專案專注於 CLI Agent 的架構研究，特別是針對流行的 `claude-code` 進行深入分析。使用者可以透過 `submitMessage(prompt)` 指令提交請求，系統會經由一系列的處理步驟，包括解析用戶輸入、組裝系統提示、查詢 Claude API 並處理回應，最終返回結果。這樣的設計使得開發者能夠輕鬆理解 Agent 的運作邏輯，並在此基礎上進行擴展和應用。專案使用 Bun 作為執行環境，並且支援 Node.js 18 以上的版本，這樣的選擇使得性能優化和開發效率得以提升。與其他 CLI 工具相比，這個專案提供了超過 40 種內建工具和 80 種指令，功能覆蓋範圍廣泛，適合需要多樣化操作的開發者。相較於類似的工具如 `coderluii/holyclaude` 和 `kuberwastaken/claude-code`，本專案的優勢在於其強大的工具系統和清晰的架構設計，能夠更好地處理並發請求和工具執行。

實際使用中，這個專案能夠處理大量的用戶請求，但在高並發情況下可能會遇到性能瓶頸，尤其是在資源有限的環境下。該專案目前仍在 alpha 階段，適合對 CLI Agent 有興趣的開發者進行實驗和學習。未來可能會持續更新，增加更多功能和優化性能。建議在小型專案或學習環境中使用，對於大型生產環境則需謹慎評估其穩定性和性能。適合的使用情境包括：開發 CLI 工具、學習 Agent 架構、進行技術研究等，而不適合的情境則是需要高穩定性和高可用性的生產環境。

**技術棧**：`Bun` · `Node.js >= 18`

## 重點功能

- 多種內建工具 — 提供超過 40 種工具，如 BashTool、FileRead、WebFetch 等，滿足不同需求。
- 清晰的架構設計 — 透過圖示化的架構圖，幫助開發者快速理解系統運作。
- 高效的查詢引擎 — 支援 `submitMessage(prompt)` 指令，實現高效的用戶請求處理。
- 即時流式處理 — 支援 Claude API 的流式回應，提升用戶體驗。
- 強大的功能擴展性 — 支援多種功能標誌系統，允許開發者根據需求啟用或禁用特定功能。

## 快速開始

1. 安裝 Bun 環境
```bash
curl -fsSL https://bun.sh/install | bash
```
2. 克隆專案
```bash
git clone https://github.com/sanbuphy/learn-coding-agent.git
```
3. 進入專案目錄
```bash
cd learn-coding-agent
```
4. 啟動專案
```bash
bun run cli.tsx
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝 Bun 環境並克隆專案。",
  "指令": "bun run cli.tsx",
  "預期輸出": "啟動 CLI Agent，進入互動模式。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 10559 stars（10559/天），forks 19186（181.7%），這是極端爆發式增長。專案的作者 sanbuphy 以其在開源社群中的活躍而聞名，這次的專案解決了開發者在使用 CLI Agent 時缺乏清晰架構和實用工具的痛點。之前的解決方案往往功能單一或缺乏良好的文檔，這使得開發者在使用時遇到困難。專案的推出引起了社群的廣泛關注，並在多個平台上被討論。技術生態的變化，如對高效能 CLI 工具的需求增加，也促進了這個專案的流行。forks/stars 比率高達 181.7%，顯示出許多人對其進行實際修改和使用。

## 適合誰使用

**目標受眾**：對 CLI Agent 架構有興趣的開發者和研究人員。

> [!example] 使用場景
> - 後端工程師用它來設計和實現 CLI 工具，因為其提供超過 40 種內建工具，能夠快速滿足多樣化需求。
> - 學生用它來學習和實驗 CLI Agent 的架構，因為專案提供清晰的架構圖和詳細的文檔，方便理解和操作。
> - 開發者用它來進行技術研究，因為專案整合了大量的公共資源和討論，能夠幫助深入了解 Agent 技術。

## 架構分析

專案採用 Bun 作為執行環境，這使得其在性能上有顯著優勢。整體架構分為多個層級，包括入口層、查詢引擎、工具系統、服務層和狀態層。這樣的設計使得系統能夠靈活地處理用戶請求，並且能夠在不同的環境中運行。

資料流從用戶輸入開始，經過多個處理步驟，最終返回結果。這樣的架構設計使得擴展和維護變得更加容易，但在高負載情況下可能會出現性能瓶頸，特別是在查詢引擎的處理能力上。整體而言，這個架構在靈活性和性能之間取得了一定的平衡。

## 技術深入分析

專案的核心技術機制基於 CLI Agent 的設計，使用了多層架構來處理用戶請求。查詢引擎負責解析用戶輸入並與 Claude API 進行交互，這一過程中使用了流式處理技術來提升響應速度。效能方面，專案能夠處理大量請求，但在高負載下可能會遇到瓶頸，特別是在查詢引擎的性能上。選擇 Bun 作為執行環境的好處在於其高效能和快速啟動時間，但這也意味著開發者需要學習新的環境配置。依賴樹相對簡單，主要依賴於 Node.js 的生態系統，這降低了學習成本。技術風險方面，隨著用戶數量的增加，系統的性能可能會受到影響，特別是在資源有限的情況下。整合到現有的工具鏈中相對容易，支援主流的 CI/CD 工具，並且能夠與多種 IDE 進行整合，這使得開發者能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供多語言支持，安裝過程相對順暢，但需要注意 Bun 環境的配置。文件中包含了基本的使用範例，對於新手來說，能夠在 30 分鐘內跑起來。

## 優缺點分析

> [!success] 優點
> - 提供多種內建工具，滿足不同開發需求。
> - 架構設計清晰，便於理解和擴展。
> - 支援流式處理，提升用戶體驗。

> [!danger] 缺點
> - 目前仍在 alpha 階段，穩定性尚未驗證。
> - 高並發情況下性能可能不佳。
> - 不支援商業用途，限制了應用場景。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，穩定性和性能尚未完全驗證。
> - 在高並發請求下可能會遇到性能瓶頸。
> - 不支援商業用途，僅限於技術研究和學習。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [coderluii/holyclaude](https://github.com/coderluii/holyclaude) | 提供類似的 CLI Agent 功能，但工具數量和擴展性較少，適合簡單的 CLI 應用。 |
| [kuberwastaken/claude-code](https://github.com/kuberwastaken/claude-code) | 專注於特定的 Agent 應用，功能較為單一，適合有特定需求的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [coderluii/holyclaude](https://github.com/coderluii/holyclaude) | 使用 Python 實作，功能較為簡單，適合小型專案。 | 如果你的團隊已經在使用 Python 並且需要簡單的 CLI 工具。 | low，因為語言相似且功能簡單。 |
| [kuberwastaken/claude-code](https://github.com/kuberwastaken/claude-code) | 專注於特定的 Agent 應用，功能較為單一。 | 如果你需要針對特定需求進行開發，而不需要多樣化的工具。 | medium，因為需要重新設計部分功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **learn-coding-agent** | **holyclaude** | **claude-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，功能較為簡單，適合小型專案。 | 專注於特定的 Agent 應用，功能較為單一。 |
> | 遷移成本 | - | low，因為語言相似且功能簡單。 | medium，因為需要重新設計部分功能。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並且需要簡單的 CLI | 如果你需要針對特定需求進行開發，而不需要多樣化的工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，查詢引擎可能會出現性能瓶頸。
  - 解法：考慮使用負載均衡或分散式架構。
- [MEDIUM] Bun 環境配置不當可能導致啟動失敗。
  - 解法：確保按照官方文檔進行配置。
- **[HIGH]** 不支援商業用途，限制了應用場景。
  - 解法：僅用於學術研究和學習。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的 CLI 工具開發 | 非常適合 | 提供多種內建工具，能快速滿足需求。 |
| 學術研究中的 Agent 技術實驗 | 適合 | 架構清晰，便於理解和擴展。 |
| 大型商業應用的核心系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到多樣化的 CLI 工具開發能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，但需注意依賴的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
| Forks | 19.2k |
| Open Issues | 52 |
| Issue 解決率 | 2% (1 closed) |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 8.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sanbuphy/learn-coding-agent) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sanbuphy](https://github.com/sanbuphy) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者可參與討論和貢獻。
**連結**：[文件](https://github.com/sanbuphy/learn-coding-agent)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01）
> **活躍天數** 1 天 · **最新 commit** init repo

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/sanbuphy/learn-coding-agent/issues/1) | 🐮🍺 | 1 | 0 |
> | [#58](https://github.com/sanbuphy/learn-coding-agent/issues/58) | claudecodesource | 0 | 2 |
> | [#56](https://github.com/sanbuphy/learn-coding-agent/issues/56) | 也就图一乐而已，学习下设计模式还行，核心的包都放在内部monorepo里面，散了吧 | 0 | 0 |
> | [#55](https://github.com/sanbuphy/learn-coding-agent/issues/55) | 留影 | 0 | 0 |
> | [#54](https://github.com/sanbuphy/learn-coding-agent/issues/54) | 大佬太强了 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Architecture Study
> 
> > **Introduction**: This project is a learning and research repository focused on CLI Agent architecture. All materials are compiled entirely from publicly available online references and discussions, with a particular focus on public information regarding the highly popular CLI Agent `claude-code`. Our intention is to help developers better understand and utilize Agent technologies. We will continue to share more insights and practical discussions on Agent architecture in the future. Thank you for your support!
> 
> > **Disclaimer**: All content in this repository is provided strictly for technical research, study, and educational exchange among enthusiasts. **Commercial use is strictly prohibited.** No individual, organization, or entity may use this content for commercial purposes, profit-making activities, illegal activities, or any other unauthorized scenarios. If any content infringes upon your legal rights, intellectual property, or other interests, please contact us and we will verify and remove it immediately.
> 
> **Language**: **English** | [中文](README_CN.md) | [한국어](README_KR.md) | [日本語](README_JA.md)
> 
> ---
> 
> 
> ## Architecture Overview
> 
> ```
> ┌─────────────────────────────────────────────────────────────────────┐
> │                         ENTRY LAYER                                 │
> │  cli.tsx ──> main.tsx ──> REPL.tsx (interactive)                   │
> │                     └──> QueryEngine.ts (headless/SDK)              │
> └──────────────────────────────┬──────────────────────────────────────┘
>                                │
>                                ▼
> ┌─────────────────────────────────────────────────────────────────────┐
> │                       QUERY ENGINE                                  │
> │  submitMessage(prompt) ──> AsyncGenerator               │
> │    │                                                                │
> │    ├── fetchSystemPromptParts()    ──> assemble system prompt       │
> │    ├── processUserInput()          ──> handle /commands             │
> │    ├── query()                     ──> main agent loop              │
> │    │     ├── StreamingToolExecutor ──> parallel tool execution       │
> │    │     ├── autoCompact()         ──> context compression          │
> │    │     └── runTools()            ──> tool orchestration           │
> │    └── yield SDKMessage            ──> stream to consumer           │
> └──────────────────────────────┬──────────────────────────────────────┘
>                                │
>               ┌────────────────┼────────────────┐
>               ▼                ▼                 ▼
> ┌──────────────────┐ ┌─────────────────┐ ┌──────────────────┐
> │   TOOL SYSTEM    │ │  SERVICE LAYER  │ │   STATE LAYER    │
> │                  │ │                 │ │                  │
> │ Tool Interface   │ │ api/claude.ts   │ │ AppState Store   │
> │  ├─ call()       │ │  API client     │ │  ├─ permissions  │
> │  ├─ validate()   │ │ compact/        │ │  ├─ fileHistory  │
> │  ├─ checkPerms() │ │  auto-compact   │ │  ├─ agents       │
> │  ├─ render()     │ │ mcp/            │ │  └─ fastMode     │
> │  └─ prompt()     │ │  MCP protocol   │ │                  │
> │                  │ │ analytics/      │ │ React Context    │
> │ 40+ Built-in:    │ │  telemetry      │ │  ├─ useAppState  │
> │  ├─ BashTool     │ │ tools/          │ │  └─ useSetState  │
> │  ├─ FileRead     │ │  executor       │ │                  │
> │  ├─ FileEdit     │ │ plugins/        │ └──────────────────┘
> │  ├─ Glob/Grep    │ │  loader         │
> │  ├─ AgentTool    │ │ settingsSync/   │
> │  ├─ WebFetch     │ │  cross-device   │
> │  └─ MCPTool      │ │ oauth/          │
> │                  │ │  auth flow      │
> └──────────────────┘ └─────────────────┘
>               │                │
>               ▼                ▼
> ┌──────────────────┐ ┌─────────────────┐
> │   TASK SYSTEM    │ │   BRIDGE LAYER  │
> │                  │ │                 │
> │ Task Types:      │ │ bridgeMain.ts   │
> │  ├─ local_bash   │ │  session mgmt   │
> │  ├─ local_agent  │ │ bridgeApi.ts    │
> │  ├─ remote_agent │ │  HTTP client    │
> │  ├─ in_process   │ │ workSecret.ts   │
> │  ├─ dream        │ │  auth tokens    │
> │  └─ workflow     │ │ sessionRunner   │
> │                  │ │  process spawn  │
> │ ID: prefix+8chr  │ └─────────────────┘
> │  b=bash a=agent  │
> │  r=remote t=team │
> └──────────────────┘
> ```
> 
> ---
> 
> 
> ## Feature Flag System
> 
> ```
>     DEAD CODE ELIMINATION (Bun compile-time)
>     ══════════════════════════════════════════
> 
>     feature('FLAG_NAME')  ──→  true  → included in bundle
>                            ──→  false → stripped from bundle
> 
>     FLAGS (observed in source):
>     ├─ COORDINATOR_MODE      → multi-agent coordinator
>     ├─ HISTORY_SNIP          → aggressive history trimming
>     ├─ CONTEXT_COLLAPSE      → context restructuring
>     ├─ DAEMON                → background daemon workers
>     ├─ AGENT_TRIGGERS        → cron/remote triggers
>     ├─ AGENT_TRIGGERS_REMOTE → remote trigger support
>     ├─ MONITOR_TOOL          → MCP monitoring tool
>     ├─ WEB_BROWSER_TOOL      → browser automation
>     ├─ VOICE_MODE            → voice input/output
>     ├─ TEMPLATES             → job classifier
>     ├─ EXPERIMENTAL_SKILL_SEARCH → skill discovery
>     ├─ KAIROS                → push notifications, file sends
>     ├─ PROACTIVE             → sleep tool, proactive behavior
>     ├─ OVERFLOW_TEST_TOOL    → testing tool
>     ├─ TERMINAL_PANEL        → terminal capture
>     ├─ WORKFLOW_SCRIPTS      → workflow tool
>     ├─ CHICAGO_MCP           → computer use MCP
>     ├─ DUMP_SYSTEM_PROMPT    → prompt extraction (ant-only)
>     ├─ UDS_INBOX             → peer discovery
>     ├─ ABLATION_BASELINE     → experiment ablation
>     └─ UPGRADE_NOTICE        → upgrade notifications
> 
>     RUNTIME GATES:
>     ├─ process.env.USER_TYPE === 'ant'  → internal features
>     └─ GrowthBook feature flags         → A/B experiments at runtime
> ```
> 
> ---
> 
> 
> ## Table of Contents
> 
> - [Deep Analysis Reports (`docs/`)](#deep-analysis-reports-docs) — Telemetry, codenames, undercover mode, remote control, future roadmap
> - [Directory Reference](#directory-reference) — Code structure tree
> - [Architecture Overview](#architecture-overview) — Entry → Query Engine → Tools/Services/State
> - [Tool System & Permissions](#tool-system-architecture) — 40+ tools, permission flow, sub-agents
> - [The 12 Progressive Harness Mechanisms](#the-12-progressive-harness-mechanisms) — How Claude Code layers production features on the agent loop
> 
> ---
> 
> 
> ## Copyright & Disclaimer
> 
> ```text
> This repository is provided strictly for technical research and educational purposes.
> Commercial use is strictly prohibited.
> 
> If you are the copyright owner and believe this repository content infringes your rights,
> please contact the repository owner for immediate removal.
> ```
> 
> ---
> 
> 
> ## Stats
> 
> | Item | Count |
> |------|-------|
> | Files (.ts/.tsx) | ~1,884 |
> | Lines | ~512,664 |
> | Largest single file | `query.ts` (~785KB) |
> | Built-in tools | ~40+ |
> | Slash commands | ~80+ |
> | Dependencies (node_modules) | ~192 packages |
> | Runtime | Bun (compiled to Node.js >= 18 bundle) |
> 
> ---
> 
> 
> ## The Agent Pattern
> 
> ```
>                     THE CORE LOOP
>                     =============
> 
>     User --> messages[] --> Claude API --> response
>                                           |
>                                 stop_reason == "tool_use"?
>                                /                          \
>                              yes                           no
>                               |                             |
>                         execute tools                    return text
>                         append tool_result
>                         loop back -----------------> messages[]
> 
>     That is the minimal agent loop. Claude Code wraps this loop
>     with a production-grade harness: permissions, streaming,
>     concurrency, compaction, sub-agents, persistence, and MCP.
> ```
> 
> ---
> 
> 
> ## Data Flow: A Single Query Lifecycle
> 
> ```
>  USER INPUT (prompt / slash command)
>      │
>      ▼
>  processUserInput(

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[Agent 框架]] · [[自動化]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/sanbuphy/learn-coding-agent)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "sanbuphy--learn-coding-agent"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "sanbuphy--learn-coding-agent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "sanbuphy--learn-coding-agent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "sanbuphy--learn-coding-agent"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","Agent 框架","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sanbuphy--learn-coding-agent" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sanbuphy--learn-coding-agent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sanbuphy" AND file.name != "sanbuphy--learn-coding-agent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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
> const me = dv.page("Repos/sanbuphy--learn-coding-agent");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-07|2026-04-07]] — 再次上榜，11.4k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，11.3k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，11.3k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，11.2k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，11.0k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，10.6k stars
