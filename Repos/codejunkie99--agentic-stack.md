---
repo: codejunkie99/agentic-stack
url: https://github.com/codejunkie99/agentic-stack
owner: codejunkie99
owner_type: User
language: Python
license: Apache-2.0
description: "One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch."
homepage: ""
stars: 1619
stars_per_day: 162
forks: 202
open_issues: 5
created: 2026-04-15
pushed_at: 2026-04-25
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.9.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: "讓你的 AI 代理在不同工具之間切換時不會重置知識，保持一個可攜帶的記憶與技能層。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 62
repo_size_kb: 7584
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:1275,2026-04-23:1438,2026-04-24:1497,2026-04-25:1554,2026-04-26:1619"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "agentic-stack"
  - "codejunkie99/agentic-stack"
  - "讓你的 AI 代理在不同工具之間切換時不會重置知識，保持一個可攜帶的記憶與技能層。"
---

# agentic-stack

**1.6k** stars · **162** stars/天 · 建立 10 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/codejunkie99--agentic-stack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.9.1`

> [!summary] 一句話摘要
> 讓你的 AI 代理在不同工具之間切換時不會重置知識，保持一個可攜帶的記憶與技能層。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (162 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在多個 AI 編碼工具之間切換並保持記憶的獨立開發者或團隊。
> **一句話重點** 這個專案最厲害的地方在於它能夠在多個 AI 編碼工具之間保持知識的連貫性，極大提升了開發者的工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "codejunkie99--agentic-stack" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到跨工具的知識共享，值得。

> [!abstract] 核心創新
> 這個專案的創新點在於提供了一個可攜帶的記憶與技能層，能夠在多個編碼代理之間共享知識。

## 專案簡介

這個專案的核心機制是提供一個可攜帶的 `.agent/` 資料夾，裡面包含記憶、技能和協議，能夠與多種編碼代理工具（如 Claude Code、Cursor、Windsurf 等）無縫連接，讓使用者在不同工具之間切換時不會丟失知識。安裝後，使用者可以透過 `./install.sh` 命令來管理項目，並使用 `add`、`status`、`doctor` 等子命令來進行操作，這種設計使得管理多個代理變得簡單而直觀。技術上，專案使用 Python 和 Shell 腳本來實現跨平台的安裝和管理，並且依賴於 `anthropic` 和 `openai` 這兩個庫來支持 AI 功能。這種架構的選擇使得它能夠在不同的環境中運行，而不需要重複安裝或配置。

與其他類似工具相比，如 `0xGF/boneyard` 和 `AgriciDaniel/claude-obsidian`，這個專案提供了一個更為集中化的記憶管理系統，能夠在多個代理之間共享知識，而不是每個代理都需要獨立的記憶體。使用者在使用時可能會遇到的問題包括在升級過程中需要先運行 `./install.sh doctor` 來合併舊有的安裝設定，這是為了避免資料遺失。整體而言，這個專案在設計上考慮到了使用者的便利性和多樣性，適合需要在多個 AI 工具間切換的開發者。隨著功能不斷增強，未來可能會加入更多的適配器和功能，進一步提升其靈活性和可擴展性。

**技術棧**：`Python` · `Shell` · `PowerShell`

## 重點功能

- 可攜帶的 `.agent/` 資料夾 — 包含記憶、技能和協議，能夠與多種編碼代理工具連接。
- 多種子命令管理 — 使用 `./install.sh add <adapter>` 來添加適配器，或使用 `status` 查看當前狀態。
- 跨平台支持 — 同時支持 macOS、Linux 和 Windows，方便不同環境的開發者使用。
- 自動化的安裝和配置 — 使用者只需運行一次安裝命令，後續可通過簡單的命令進行管理。
- 記憶搜索功能 — 支持關鍵字搜索，方便快速查找記憶中的信息。

## 快速開始

1. 安裝 agentic-stack
```bash
brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack
```
2. 安裝 agentic-stack
```bash
brew install agentic-stack
```
3. 克隆並運行安裝程式
```bash
git clone https://github.com/codejunkie99/agentic-stack.git && cd agentic-stack && .\install.ps1 claude-code C:\path\to\your-project
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 1619 stars（162/天），forks 202（12.5%），顯示出相對高的使用者參與度。這個專案的作者 codejunkie99 之前有過多個開源專案，這次針對多工具間的知識共享需求提供了解決方案，之前的工具往往無法有效管理多個代理的記憶。這個專案的推出正好填補了這個空白，並且在社群中引起了討論，進一步推動了其流行。技術上，隨著 AI 代理的普及，這種跨工具的記憶管理需求也變得越來越迫切，促使開發者尋找更好的解決方案。forks/stars 比率為 12.5%，顯示出有相當比例的使用者對此專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要在多個 AI 編碼工具之間切換並保持記憶的獨立開發者或團隊。

> [!example] 使用場景
> - AI 開發者用它來在不同的編碼代理之間切換，保持記憶和技能的連貫性，因為這樣可以節省重複訓練的時間，提升開發效率。
> - 資料科學家用它來整合多個 AI 工具的學習成果，因為這樣可以快速獲取不同工具的最佳實踐，避免知識孤島。
> - DevOps 工程師用它來管理多個 CI/CD 流程中的 AI 代理，因為這樣可以確保每個流程都能利用最新的記憶和技能，提升自動化程度。

## 架構分析

這個專案採用了一個模組化的架構設計，主要由可攜帶的 `.agent/` 資料夾組成，裡面包含記憶、技能和協議。每個適配器都由 `adapter.json` 定義，並由共享的 Python 後端管理。使用者透過 `./install.sh` 命令來安裝和管理適配器，這種設計使得使用者能夠輕鬆地在不同的編碼代理之間切換而不會丟失知識。

這種模組化的架構也使得未來的擴展變得更加容易，使用者可以根據需求添加新的適配器。選擇 Python 作為主要開發語言，使得跨平台支持變得更加簡單，因為 Python 在不同操作系統上都有良好的兼容性。整體架構考慮到了使用者的便捷性和靈活性，未來可能會加入更多的適配器和功能以進一步提升其可擴展性。

## 技術深入分析

這個專案的核心技術機制在於使用一個可攜帶的 `.agent/` 資料夾來管理記憶、技能和協議，這使得在不同的編碼代理之間切換變得無縫。專案使用 Python 和 Shell 腳本來實現安裝和管理，並且依賴於 `anthropic` 和 `openai` 這兩個庫來支持 AI 功能。效能方面，這個系統能夠在不同的環境中運行，並且在多個代理之間共享知識，這樣的設計使得使用者能夠在不同的工具中保持一致的工作流程。設計取捨方面，選擇 Python 作為主要開發語言使得跨平台支持變得更加簡單，但也可能帶來一定的性能開銷。技術風險方面，未來在擴展時可能會遇到依賴管理的問題，特別是在添加新的適配器時。整合分析方面，這個專案與主流工具鏈（如 GitHub Actions）相容性良好，並且能夠輕鬆整合到現有的 CI/CD 流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並且包含了豐富的範例。安裝過程相對順暢，但需要注意在升級時運行 `./install.sh doctor`。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供跨工具的知識共享，避免重複訓練。
> - 模組化設計，便於擴展和管理。
> - 支持多平台，方便不同環境的開發者使用。

> [!danger] 缺點
> - 目前僅支援特定的 AI 編碼代理。
> - 需要使用者具備基本的命令行操作能力。
> - 升級過程中需注意資料遺失的風險。

> [!warning] 注意事項
> - 目前僅支援特定的 AI 編碼代理，未來可能會擴展到更多工具。
> - 需要使用者具備基本的命令行操作能力，對於不熟悉 CLI 的使用者可能有一定的學習曲線。
> - 在升級過程中，需注意運行 `./install.sh doctor` 以避免資料遺失。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一些類似的記憶管理功能，但不支持多工具間的知識共享，主要針對單一工具的使用場景。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的編碼工具，缺乏跨工具的靈活性和可攜帶性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一些類似的記憶管理功能，但不支持多工具間的知識共享，主要針對單一工具的使用場景。 | 如果你的團隊主要使用單一工具，並且不需要跨工具的知識管理。 | low，因為功能相似，遷移成本低。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的編碼工具，缺乏跨工具的靈活性和可攜帶性。 | 如果你的工作流程完全依賴於特定的編碼工具，且不需要與其他工具整合。 | medium，因為需要重新配置和適配。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agentic-stack** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供了一些類似的記憶管理功能，但不支持多工具間的知識共享，主要針對單一工具的使用場景。 | 專注於特定的編碼工具，缺乏跨工具的靈活性和可攜帶性。 |
> | 遷移成本 | - | low，因為功能相似，遷移成本低。 | medium，因為需要重新配置和適配。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用單一工具，並且不需要跨工具的知識管理。 | 如果你的工作流程完全依賴於特定的編碼工具，且不需要與其他工具 |

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

- **[HIGH]** 升級過程中可能會遺失舊有的安裝設定
  - 解法：在升級前運行 `./install.sh doctor` 以合併舊有設定
- [MEDIUM] 在某些環境下可能無法正確識別適配器
  - 解法：確保所有適配器的配置文件正確無誤

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在多個 AI 編碼工具之間切換的開發團隊 | 非常適合 | 能夠保持知識的連貫性，提升工作效率。 |
| 單一工具的開發者 | 不適合 | 缺乏對單一工具的專門優化。 |
| 需要快速整合多個 AI 工具的研究團隊 | 適合 | 能夠快速整合和共享知識。 |
| 對命令行不熟悉的使用者 | 普通 | 需要一定的命令行操作能力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到跨工具的知識共享，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，依賴鏈也相對簡單，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與多種 AI 編碼工具搭配使用，處於開發和部署的環節。在一個使用 Claude Code 的專案中，你可以用這個工具來管理多個代理，具體做法是運行 `./install.sh` 來安裝所需的適配器。這個工具支援 GitHub Actions 等主流 CI 工具，並且可以與 VS Code 等 IDE 整合。最常見的整合問題是適配器的配置文件需正確設置，否則可能無法識別。整體來說，這個工具能夠輕鬆融入現有的技術生態。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
| Forks | 202 |
| Open Issues | 5 |
| Issue 解決率 | 62% (8 closed) |
| 最後推送 | 2026-04-25 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 7.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/codejunkie99/agentic-stack) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `anthropic` `openai`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "TypeScript" : 4
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@codejunkie99](https://github.com/codejunkie99) | 31 |
> | [@aliirz](https://github.com/aliirz) | 2 |
> | [@hovhannest](https://github.com/hovhannest) | 2 |
> | [@ImgBotApp](https://github.com/ImgBotApp) | 1 |
> | [@JagritGumber](https://github.com/JagritGumber) | 1 |

**最新版本**：v0.9.1 — v0.9.1 — pi adapter fixes + tz correctness (2026-04-25)

> [!info]- Release Notes
> Patch release that closes the gap between v0.9.0 and a working pi adapter. Every brew user on v0.9.0 hit the first bug; the rest are quieter but make the dream cycle and the cross-harness episodic log actually correct.
> 
> ## Highlights
> 
> - **`agentic-stack pi` no longer crashes for brew users.** The v0.9.0 Formula didn't include `harness_manager/` in `pkgshare.install`. Now it does.
> - **Pi's dream cycle actually runs.** `session_shutdown` handler filtered on `event.reason`, but Pi's `SessionShutdownEvent` carries no `reason` field. The filter rejected every event; `auto_dream.py` never ran. Filter dropped, re-entrancy guard added.
> - **Pi edit reflections capture the diff again.** Hook expected MultiEdit's `edits[]` array; Pi's `EditToolInput` is flat `{path, oldText, newText}`. Reflections silently degraded to `Edited <path>`. Now reads the flat fields.
> - **No more aware-vs-naive crashes on clean pi exit.** `decay.py` cutoff is UTC; entry timestamps normalised to UTC before comparison.
> - **Timezone sweep across every Python writer + reader.** `post_execution`, `on_failure`, `learn`, `graduate`, `promote`, `review_state`, `render_lessons` all wrote naive-local; readers normalise mixed shapes.
> - **`auto_dream` no longer loses entries that land mid-cycle.** Single exclusive `flock` held across the entire read-modify-write window via `_episodic_locked()`. Mutually exclusive with `_episodic_io.append_jsonl`.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/codejunkie99/agentic-stack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-25）
> **活躍天數** 2 天 · **最新 commit** docs(changelog): add v0.9.1 release info — tag, GH release URL, brew sha

## README 摘錄

> [!info]- 展開查看原文 README
> # agentic-stack
> 
> **Keep one portable memory-and-skills layer across coding-agent harnesses, so switching tools doesn't reset how your agent works.**
> 
> A portable `.agent/` folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, Pi Coding Agent, Codex, Antigravity, or a DIY Python loop — and keeps its knowledge when you switch.
> 
>   
> 
>   
> 
> 
> ## Quickstart
> 
> 
> # tap + install (one-time — both lines required)
> brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack
> brew install agentic-stack
> 
> 
> # clone + run the native installer
> git clone https://github.com/codejunkie99/agentic-stack.git
> cd agentic-stack
> .\install.ps1 claude-code C:\path\to\your-project
> ```
> 
> 
> ### Already installed?
> 
> ```bash
> brew update && brew upgrade agentic-stack
> ```
> 
> 
> # or on Windows PowerShell: .\install.ps1 claude-code
> 
> ### Once installed: manage what's wired
> 
> After the first `./install.sh `, manage your project with
> verb-style subcommands (works with both `install.sh` and `install.ps1`):
> 
> ```bash
> ./install.sh add cursor          # add a second adapter (Claude Code + Cursor in same repo)
> ./install.sh status              # one-screen view: which adapters, brain stats
> ./install.sh doctor              # read-only audit; green / yellow / red per adapter
> ./install.sh manage              # interactive TUI: header pane + menu loop for add/remove/audit
> ./install.sh remove cursor       # confirm prompt + delete; no quarantine, no undo
> ```
> 
> Bare `./install.sh` (no arguments) opens a **multi-select wizard** on
> a fresh project — check every harness you actually use, hit enter,
> each one gets installed. The wizard auto-detects harnesses already on
> disk and pre-checks them. On a project that already has an
> `install.json`, bare `./install.sh` lists what's still installable.
> In non-TTY shells (CI), it prints usage and exits with code 2.
> 
> Upgrading from pre-v0.9? Run `./install.sh doctor` first — it
> synthesizes `install.json` from on-disk adapter signals so the new
> backend can track them. Installing on top without migration would
> orphan the prior installs.
> 
> 
> # enable during onboarding (or set manually in .agent/memory/.features.json)
> python3 .agent/memory/memory_search.py "deploy failure"
> python3 .agent/memory/memory_search.py --status
> python3 .agent/memory/memory_search.py --rebuild
> ```
> 
> Falls back to **ripgrep** (`rg`) if installed, then to `grep` — both
> restricted to `.md` / `.jsonl` so source files never pollute results.
> The index is stored at `.agent/memory/.index/` and gitignored.
> 
> 
> ### New in v0.9.1 — pi adapter fixes + tz correctness
> 
> Patch release. Closes the gap between v0.9.0 and a working pi adapter,
> plus a timezone sweep across every Python writer/reader so the dream
> cycle stops drifting against the UTC decay window.
> 
> - Brew users on v0.9.0 hit `ModuleNotFoundError: harness_manager` on
>   first run. Formula now installs `harness_manager/` correctly.
> - Pi's dream cycle never fired (`session_shutdown` filter rejected every
>   event because `SessionShutdownEvent` has no `reason` field). Now runs.
> - Pi's edit reflections were missing the diff (hook expected MultiEdit
>   shape; Pi's edit input is flat). Now captures `oldText` / `newText`.
> - Naive-local Python timestamps reinterpreted at decay time as UTC
>   caused silent drift. Every writer now emits aware UTC; every reader
>   normalises naive entries before comparing.
> - `auto_dream` held no lock across its read-modify-write window —
>   concurrent appenders could be silently truncated. Now holds a single
>   `flock(LOCK_EX)` on the episodic log for the full cycle.
> 
> See [CHANGELOG.md](CHANGELOG.md) for the full list.
> 
> 
> ### v0.9.0 — harness manager
> 
>   
> 
> Manifest-driven adapter system: every harness is now declared by an
> `adapter.json`, applied by a shared Python backend, and managed via
> verb subcommands or an interactive TUI. Cross-platform (POSIX +
> Windows) with concurrent-write protection, pre-v0.9 migration via
> `./install.sh doctor`, and shared-file ownership tracking so removing
> one adapter never orphans another.
> 
> [](https://github.com/codejunkie99/agentic-stack/releases)
> [](LICENSE)
> Made by https://x.com/Av1dlive
> 
> 
> ### macOS / Linux
> 
> ```bash
> 
> # drop the brain into any project — the onboarding wizard runs automatically
> cd your-project
> agentic-stack claude-code
> 
> # or: cursor | windsurf | opencode | openclaw | hermes | pi | codex | standalone-python | antigravity
> ```
> 
> 
> ### Windows (PowerShell)
> 
> ```powershell
> 
> ### Clone instead?
> 
> ```bash
> git clone https://github.com/codejunkie99/agentic-stack.git
> cd agentic-stack && ./install.sh claude-code         # mac / linux / git-bash
> 
> # adapters: claude-code | cursor | windsurf | opencode | openclaw | hermes | pi | codex | standalone-python | antigravity
> ```
> 
> 
> ## Onboarding wizard
> 
> If you ran bare `./install.sh` (no adapter name), the wizard starts
> with a **multi-select harness step**: it lists all 10 adapters, pre-
> checks any it detects on disk, and installs each one you confirm with
> space + enter. After the install(s), the preferences flow runs.
> 
> If you ran `./install.sh ` directly, only the preferences
> flow runs.
> 
> Either way, the preferences step populates
> `.agent/memory/personal/PREFERENCES.md` — the **first file your AI reads
> at the start of every session** — and writes a feature-toggle file at
> `.agent/memory/.features.json`.
> 
> Six preference questions (each skippable with Enter):
> 
> | Question | Default |
> |---|---|
> | What should I call you? | *(skip)* |
> | Primary language(s)? | `unspecified` |
> | Explanation style? | `concise` |
> | Test strategy? | `test-after` |
> | Commit message style? | `conventional commits` |
> | Code review depth? | `critical issues only` |
> 
> Plus one **Optional features** step (opt-in, off by default):
> 
> | Feature | Default |
> |---|---|
> | Enable FTS memory search `[BETA]` | `no` |
> 
> **Flags:**
> 
> ```bash
> agentic-stack claude-code --yes          # accept all defaults, beta off (CI/scripted)
> agentic-stack claude-code --reconfigure  # re-run the wizard on an existing project
> ```
> 
> Edit `.agent/memory/personal/PREFERENCES.md` any time to refine your
> conventions, or `.agent/memory/.features.json` to flip feature toggles.
> 
> 
> ## Review protocol (host-agent CLI)
> 
> The nightly `auto_dream.py` cycle only **stages** candidate lessons. It
> does not mark anything accepted or modify semantic memory. Your host
> agent does the review in-session:
> 
> ```bash
> 
> # list pending candidates, sorted by priority
> python3 .agent/tools/list_candidates.py
> 
> 
> # accept with rationale (required)
> python3 .agent/tools/graduate.py  --rationale "evidence holds, matches PREFERENCES"
> 
> 
> # reject with reason (required); preserves decision history
> python3 .agent/tools/reject.py  --reason "too specific to generalize"
> 
> 
> # requeue a previously-rejected candidate
> python3 .agent/tools/reopen.py 
> ```
> 
> Graduated lessons land in `semantic/lessons.jsonl` (source of truth) and
> are rendered to `semantic/LESSONS.md`. Rejected candidates retain full
> decision history so recurring churn is visible, not fresh.
> 
> See [`docs/architecture.md`](docs/architecture.md) for the full lifecycle.
> 
> ---
> 
> 
> ## What this is
> 
> Every guide shows the folder structure. This repo gives you the folder
> structure **plus the files that actually go inside**: a working portable
> brain with five seed skills, four memory layers, enforced permissions, a
> nightly staging cycle, host-agent review tools, and adapters for multiple
> harnesses.
> 
> - **Memory** — `working/`, `episodic/`, `semantic/`, `personal/`. Each
>   layer has its own retention policy. Query-aware retrieval (salience ×
>   relevance); nightly compression into reviewable candidates.
> - **Review protocol** — `auto_dream.py` stages candidate lessons
>   mechanically. Your host agent reviews them via CLI tools
>   (`graduate.py`, `reject.py`, `reopen.py`) and commits decisions with
>   a required rationale. No unattended reasoning, no provider coupling.
> - **Skills** — progressive disclosure. A lightweight manifest always
>   loads; full `SKILL.md` files only load when trigge

## 延伸閱讀

相關概念：[[自動化]] · [[多模態]] · [[記憶管理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/codejunkie99/agentic-stack)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "codejunkie99--agentic-stack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","多模態","記憶管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "codejunkie99--agentic-stack" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "codejunkie99--agentic-stack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "codejunkie99" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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
> const me = dv.page("Repos/codejunkie99--agentic-stack");
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

> **2026-04-22** — 首次收錄
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

- [[2026-04-22|2026-04-22]] — 首次收錄，1.3k stars
