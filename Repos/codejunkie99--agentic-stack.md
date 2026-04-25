---
repo: codejunkie99/agentic-stack
url: https://github.com/codejunkie99/agentic-stack
owner: codejunkie99
owner_type: User
language: Python
license: Apache-2.0
description: "One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch."
homepage: ""
stars: 1554
stars_per_day: 173
forks: 188
open_issues: 5
created: 2026-04-15
pushed_at: 2026-04-24
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.9.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: "讓多個編碼代理工具共享同一個可攜式記憶和技能層，避免切換工具時重置代理的工作方式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 58
repo_size_kb: 7556
readme_length: 9884
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:1275,2026-04-23:1438,2026-04-24:1497,2026-04-25:1554"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "agentic-stack"
  - "codejunkie99/agentic-stack"
  - "讓多個編碼代理工具共享同一個可攜式記憶和技能層，避免切換工具時重置代理的工作方式。"
---

# agentic-stack

**1.6k** stars · **173** stars/天 · 建立 9 天前 · Python · Apache-2.0

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

`v0.9.0`

> [!summary] 一句話摘要
> 讓多個編碼代理工具共享同一個可攜式記憶和技能層，避免切換工具時重置代理的工作方式。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (173 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在多個編碼環境中保持一致性的開發者，特別是使用多種編碼代理工具的團隊。
> **一句話重點** 這個專案的核心在於提供一個可攜式的記憶和技能層，讓使用者在不同的編碼環境中保持一致性。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、2 小時整合，得到一致的編碼代理記憶，值得嘗試。

> [!abstract] 核心創新
> 提供了一個可攜式的記憶和技能層，讓使用者在多個編碼代理工具間無縫切換。

## 專案簡介

Agentic Stack 提供了一個可攜式的 `.agent/` 資料夾，讓使用者能夠在多個編碼代理工具之間切換，而不會丟失記憶和技能。使用者可以透過 `brew install agentic-stack` 或 `git clone` 來安裝，並使用 `./install.sh` 指令來管理適配器。這個工具的核心賣點在於它的適配器管理系統，允許用戶輕鬆添加或移除適配器，並在不同的編碼環境中保持一致的記憶體和技能。其背後的設計理念是使用 JSON 檔案來描述每個適配器的配置，這樣用戶可以透過簡單的 PR 來擴展功能，而不需要修改 Python 代碼。這種設計使得擴展性和可維護性大幅提升，並且支援跨平台操作，無論是 POSIX 還是 Windows 環境。

與其他工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，Agentic Stack 的優勢在於其簡單的適配器管理和無需重啟的即時更新能力。使用者在實際操作中可能會遇到需要手動確認刪除的情況，這是為了避免意外刪除重要文件。整體來說，這是一個適合需要在多個編碼環境中工作的開發者的工具，特別是那些希望保持工作流程一致性的團隊。隨著專案的發展，未來可能會增加更多的適配器和功能，讓使用者能夠更靈活地管理其編碼代理。

**技術棧**：`Python` · `TypeScript` · `PowerShell` · `Shell` · `Ruby`

## 重點功能

- 可攜式 `.agent/` 資料夾 — 保存記憶、技能和協議，隨時切換編碼工具。
- 適配器管理系統 — 使用 JSON 檔案來描述每個適配器的配置，簡化擴展過程。
- `./install.sh add <adapter>` — 方便地將新適配器添加到現有專案中。
- `./install.sh remove <adapter>` — 確認刪除適配器，並自動執行後安裝動作。
- `./install.sh doctor` — 進行只讀審計，檢查適配器狀態和健康度。

## 快速開始

1. 安裝 Homebrew 並安裝 agentic-stack
```bash
brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack && brew install agentic-stack
```
2. 克隆專案並運行安裝程式
```bash
git clone https://github.com/codejunkie99/agentic-stack.git && cd agentic-stack && .\install.ps1 claude-code C:\path\to\your-project
```
3. 更新已安裝的 agentic-stack
```bash
brew update && brew upgrade agentic-stack
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 agentic-stack",
  "./install.sh add cursor          # 添加第二個適配器（Claude Code + Cursor 在同一個 repo）",
  "# 預期輸出：適配器成功添加，並顯示當前狀態"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1554 stars（173/天），forks 188（12.1%），顯示出強勁的增長潛力。作者 codejunkie99 之前在開源社群活躍，這個專案解決了在多個編碼工具間切換時記憶和技能丟失的痛點，之前的解決方案往往需要重複配置或手動管理。這個工具的出現正好滿足了開發者對於高效能和靈活性的需求，並且在社群中引發了討論和關注。其設計理念和實現方式也符合當前開發生態對於可攜式和模組化工具的趨勢。

## 適合誰使用

**目標受眾**：需要在多個編碼環境中保持一致性的開發者，特別是使用多種編碼代理工具的團隊。

> [!example] 使用場景
> - 後端工程師用它來在多個編碼代理工具間切換，因為這樣可以保持相同的記憶和技能，避免重複配置。
> - 全端開發者用它來整合不同的編碼環境，因為它的適配器管理系統讓他們能夠快速添加或移除工具。
> - AI 研究人員用它來在不同的 AI 開發平台上測試模型，因為它能保持一致的記憶體和技能，提升測試效率。

## 架構分析

Agentic Stack 採用模組化的設計，核心是 `.agent/` 資料夾，裡面包含記憶、技能和協議的配置。每個適配器透過 JSON 檔案進行描述，這樣的設計使得擴展和維護變得簡單。資料流從用戶的命令行輸入開始，經過適配器的管理系統，最終將配置應用到指定的編碼工具上。這種設計的代價在於需要用戶對 JSON 配置有一定的理解，並且在添加新適配器時需要遵循特定的格式。整體架構的擴展性良好，但在高並發情況下可能會遇到資源競爭的問題。

## 技術深入分析

Agentic Stack 的核心技術在於其模組化的適配器管理系統，這使得用戶能夠透過 JSON 檔案輕鬆地添加或移除適配器。這種設計不僅提高了擴展性，還降低了維護成本。效能方面，因為適配器的管理是基於 JSON 檔案的，所以在添加新適配器時不需要重啟整個系統，這樣能夠節省時間。選擇 Python 作為主要語言的原因在於其廣泛的應用和良好的社群支持，這使得開發者能夠快速上手並進行擴展。儘管如此，這也帶來了依賴管理的挑戰，特別是在多個適配器同時運行時，可能會出現資源競爭的問題。對於未來的擴展，這個專案可能需要考慮如何在高並發情況下保持穩定性和效能。整合方面，這個工具能夠與主流的編碼環境良好協作，但在某些情況下可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但需要用戶對 JSON 配置有一定的理解。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 支持多種編碼代理工具，提供靈活的切換選項。
> - 適配器管理系統簡化了擴展過程，降低了學習成本。
> - 跨平台支援，適合不同操作系統的開發者。

> [!danger] 缺點
> - 需要用戶對 JSON 配置有一定的理解，對新手來說可能有學習曲線。
> - 在某些環境下，適配器的刪除需要手動確認，增加了操作步驟。
> - 不支援某些舊版的編碼代理工具，需確認兼容性。

> [!warning] 注意事項
> - 需要安裝 Homebrew 或 Git 來進行安裝。
> - 在某些環境下，適配器的刪除可能需要手動確認，增加操作步驟。
> - 不支援某些舊版的編碼代理工具，需確認兼容性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具主要用於管理 AI 訓練資料，而 agentic-stack 專注於編碼代理的記憶和技能共享。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了更為全面的 AI 代理功能，但缺乏 agentic-stack 的輕量級適配器管理系統。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於管理 AI 訓練資料，專注於資料的整理和存取，而 agentic-stack 專注於編碼代理的記憶和技能共享。 | 如果你的專案主要集中在 AI 訓練資料的管理，而不是編碼代理的記憶共享，則應選擇 boneyard。 | medium，因為需要重新設計資料流和管理方式。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供了更為全面的 AI 代理功能，但缺乏 agentic-stack 的輕量級適配器管理系統。 | 如果需要更全面的 AI 代理功能，並且不在意適配器管理的靈活性，則可以選擇 codeburn。 | high，因為需要重新設計整個代理架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agentic-stack** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要用於管理 AI 訓練資料，專注於資料的整理和存取，而 agentic-stack 專注於編碼代理的記憶和技能共享。 | 提供了更為全面的 AI 代理功能，但缺乏 agentic-stack 的輕量級適配器管理系統。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和管理方式。 | high，因為需要重新設計整個代理架構。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在 AI 訓練資料的管理，而不是編碼代理 | 如果需要更全面的 AI 代理功能，並且不在意適配器管理的靈活 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，適配器的刪除需要手動確認，可能導致誤刪除重要文件
  - 解法：在刪除前仔細檢查確認提示
- [MEDIUM] 安裝過程中可能會遇到依賴衝突，特別是在多個適配器同時運行時
  - 解法：確保所有適配器的依賴版本兼容
- [MEDIUM] 不支援某些舊版的編碼代理工具，可能導致兼容性問題
  - 解法：在安裝前確認所需工具的版本

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 輕量級的適配器管理系統能夠快速適應變化的需求。 |
| 需要在多個編碼環境中保持一致性的開發團隊 | 適合 | 可攜式的記憶和技能層能夠提升團隊效率。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍處於 beta 階段，穩定性和安全性尚未達到生產環境的要求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、2 小時整合，得到一致的編碼代理記憶，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限操作，僅需訪問本地檔案系統，依賴的庫也相對穩定，適合在 CI/CD 環境中使用。

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
| Forks | 188 |
| Open Issues | 5 |
| Issue 解決率 | 58% (7 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 7.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/codejunkie99/agentic-stack) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `anthropic` `openai`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 97
>     "TypeScript" : 2
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@codejunkie99](https://github.com/codejunkie99) | 31 |
> | [@hovhannest](https://github.com/hovhannest) | 2 |
> | [@aliirz](https://github.com/aliirz) | 1 |
> | [@ImgBotApp](https://github.com/ImgBotApp) | 1 |
> | [@JagritGumber](https://github.com/JagritGumber) | 1 |

**最新版本**：v0.9.0 — v0.9.0 — Harness manager: manifest-driven adapter system (2026-04-24)

> [!info]- Release Notes
> ### Added
> - **Harness manager: manifest-driven adapter system.** Each adapter now
>   ships an `adapters/<name>/adapter.json` declaring its files,
>   collision policy, optional skills directory mirror, and named
>   post-install actions. Adding a new adapter is now a JSON-only PR —
>   no Python code, no test wiring, no class registration. Lives in the
>   new `harness_manager/` Python package.
> - **`./install.sh add <adapter>`** — append an adapter to an existing
>   project without re-running the onboarding wizard.
> - **`./install.sh remove <adapter>`** — confirmation prompt lists every
>   file before deletion. Hard delete (no quarantine, no undo — git is
>   the safety net). Reverses post-install actions automatically (e.g.,
>   `openclaw agents remove`).
> - **`./install.sh doctor`** — read-only audit of installed adapters.
>   Verifies tracked files exist, post-install state is valid, `.agent/`
>   brain is intact. Exits 0 on green, 1 on red. First run on a
>   pre-v0.9.0 project asks before synthesizing `install.json` — never
>   silently mutates.
> - **`./install.sh status`** — one-screen view of installed adapters,
>   brain stats (skills/episodic/lessons), last-updated timestamp.
> - **`.agent/install.json`** — authoritative record of what's installed.
>   Schema-versioned. Atomic write via tempfile + rename, fcntl-locked
>   on POSIX.
> - **PowerShell parity from day one.** `install.ps1` is now a 70-line
>   thin dispatcher to the same Python backend `install.sh` uses. The
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新並回應問題。
**連結**：[文件](https://github.com/codejunkie99/agentic-stack/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-24）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #23 from codejunkie99/imgbot

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/codejunkie99/agentic-stack/issues/20) | VS Code Copilot support `Medium Priority` | 0 | 1 |

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
> ### New in v0.9.0 — harness manager
> 
>   
> 
> Manifest-driven adapter system: every harness is now declared by an
> `adapter.json`, applied by a shared Python backend, and managed via
> verb subcommands or an interactive TUI. Cross-platform (POSIX +
> Windows) with concurrent-write protection, pre-v0.9 migration via
> `./install.sh doctor`, and shared-file ownership tracking so removing
> one adapter never orphans another. See [CHANGELOG.md](CHANGELOG.md)
> for the full list.
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
>   loads; full `SKILL.md` files only load when triggers match the task.
>   Every skill ships with a self-rewrite hook.
> - **Protocols** — typed tool schemas, a `permissions.md` that the
>   pre-tool-call hook enforces, and a delegation contract for sub-agents.
> 
> 
> ## Memory search `[BETA]`
> 
> Opt-in FTS5 keyword search over all memory documents:
> 
> ```bash
> 
> ## Supported harnesses
> 
> | Harness | Config file it reads | Hook support |
> |---|---|---|
> | **Claude Code** | `CLAUDE.md` + `.claude/settings.json` | yes (PostToolUse, Stop) |
> | **Cursor** | `.cursor/rules/*.mdc` | no (manual reflect calls) |
> | **Windsurf** | `.windsurfrules` | no (manual reflect calls) |
> | **OpenCode** | `AGENTS.md` + `opencode.json` | partial (permission rules) |
> | **OpenClaw** | `AGENTS.md` (auto-injected) + per-project `openclaw agents add --workspace` | varies by fork |
> | **Hermes Agent** | `AGENTS.md` (agentskills.io compatible) | partial (own memory) |
> | **Pi Coding Agent** | `AGENTS.md` + `.pi/skills/` + `.pi/extensions/` | yes (`tool_result` event) |
> | **Codex** | `AGENTS.md` + `.agents/skills/` | no (manual ref

## 延伸閱讀

相關概念：[[自動化]] · [[微服務]] · [[容器化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

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
> const concepts = ["自動化","微服務","容器化"];
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
