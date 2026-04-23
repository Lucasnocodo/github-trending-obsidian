---
repo: codejunkie99/agentic-stack
url: https://github.com/codejunkie99/agentic-stack
owner: codejunkie99
owner_type: User
language: Python
license: Apache-2.0
description: "One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch."
homepage: ""
stars: 1438
stars_per_day: 205
forks: 172
open_issues: 5
created: 2026-04-15
pushed_at: 2026-04-22
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "記憶管理"
release_tag: "v0.8.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: "讓多個編碼代理工具共享同一個記憶和技能層，避免切換工具時重置代理的知識。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 5224
readme_length: 9857
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:1275,2026-04-23:1438"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "agentic-stack"
  - "codejunkie99/agentic-stack"
  - "讓多個編碼代理工具共享同一個記憶和技能層，避免切換工具時重置代理的知識。"
---

# agentic-stack

**1.4k** stars · **205** stars/天 · 建立 7 天前 · Python · Apache-2.0

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

`v0.8.0`

> [!summary] 一句話摘要
> 讓多個編碼代理工具共享同一個記憶和技能層，避免切換工具時重置代理的知識。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (205 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在多個編碼代理工具之間切換並保持知識一致性的開發者。
> **一句話重點** 這個專案的設計讓多個編碼代理之間的知識共享變得簡單而高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶管理" && p.file.name !== "codejunkie99--agentic-stack" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到多工具環境中的一致性和效率，值得投資。

> [!abstract] 核心創新
> 提供一個可攜帶的記憶和技能層，支持多個編碼代理工具的無縫切換。

## 專案簡介

agentic-stack 提供一個可攜帶的 `.agent/` 資料夾，整合記憶、技能和協議，能夠與多個編碼代理工具（如 Claude Code、Cursor、Windsurf 等）無縫切換，並保持知識的持久性。使用者只需透過 `brew install agentic-stack` 安裝，或是透過 `git clone` 和 PowerShell 安裝腳本來設置。這個工具的核心賣點在於它的便攜性和多工具兼容性，讓使用者能夠在不同的環境中保持一致的工作流程。技術上，它使用 Python 和 PowerShell，並依賴於 `anthropic` 和 `openai` 等庫來實現功能。每個工具的適配器都能夠讀取特定的配置文件，並提供相應的鉤子支持，這使得 agentic-stack 在不同的編碼環境中都能靈活運作。

與其他工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，agentic-stack 提供了更全面的記憶管理和技能記錄功能，能夠自動記錄工具的使用情況，並在會話中進行回顧和學習。使用者可以透過 `python3 .agent/memory/memory_search.py` 來進行記憶搜索，這樣的設計讓記憶檢索變得高效且精確。這個工具的設計考量了多種使用場景，特別適合需要在多個編碼代理之間切換的開發者。整體來說，agentic-stack 是一個在多工具環境中保持一致性和效率的強大解決方案。

**技術棧**：`Python` · `PowerShell` · `Shell`

## 重點功能

- 可攜帶的 `.agent/` 資料夾 — 整合記憶、技能和協議，支持多個編碼代理工具。
- 豐富的記憶搜索功能 — 使用 `python3 .agent/memory/memory_search.py` 進行關鍵字搜索，支持全文檢索。
- 自動記錄工具使用情況 — 透過 `PostToolUse` 鉤子自動記錄每次工具調用的詳細信息。
- 適配多種編碼代理 — 支持 Claude Code、Cursor、Windsurf 等多個工具的適配器。
- 夜間自動回顧 — 使用 `auto_dream.py` 進行候選學習的自動化管理，提升學習效率。

## 快速開始

1. 安裝 agentic-stack
```bash
brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack && brew install agentic-stack
```
2. 克隆專案並運行安裝器
```bash
git clone https://github.com/codejunkie99/agentic-stack.git && cd agentic-stack && .\install.ps1 claude-code C:\path\to\your-project
```
3. 啟用記憶搜索功能
```bash
python3 .agent/memory/memory_search.py --status
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 agentic-stack 並配置好專案",
  "指令": "python3 .agent/memory/memory_search.py \"deploy failure\"",
  "預期輸出": "顯示與 'deploy failure' 相關的記憶條目"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1438 stars（205/天），forks 172（12.0%），顯示出強勁的增長潛力。作者 codejunkie99 之前在開源社區活躍，這個專案解決了多工具環境中記憶和技能共享的痛點，之前的解決方案往往無法保持知識的持續性。近期的推廣活動和社群討論也提升了專案的曝光率。技術上，這個工具的設計使得在多個編碼環境中保持一致性成為可能，這在當前的開發生態中是非常有價值的。forks/stars 比率為 12.0%，顯示出許多使用者對此專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要在多個編碼代理工具之間切換並保持知識一致性的開發者。

> [!example] 使用場景
> - 後端工程師用它來在多個編碼代理之間切換，因為這樣能夠保持一致的記憶和技能，避免重複學習。
> - DevOps 工程師用它來管理多個專案的記憶和技能，因為這樣能夠提高工作效率，減少切換成本。
> - AI 開發者用它來整合不同的 AI 工具，因為這樣能夠快速適應不同的開發環境，並保持知識的持久性。

## 架構分析

agentic-stack 採用模組化設計，核心是 `.agent/` 資料夾，包含記憶、技能和協議等多個子目錄。記憶管理分為工作記憶、情節記憶、語義記憶和個人記憶，每層有不同的保留政策。使用者可以透過適配器將其記憶和技能整合到不同的編碼代理中，這樣的設計使得在不同的開發環境中保持一致性成為可能。每個適配器都能夠讀取特定的配置文件，並提供相應的鉤子支持，這樣的設計考量了多種使用場景，特別適合需要在多個編碼代理之間切換的開發者。整體架構的設計使得擴展性良好，未來可以輕鬆添加新的適配器或功能。

## 技術深入分析

agentic-stack 的核心在於其模組化的記憶管理系統，使用 Python 作為主要開發語言，並依賴於多個外部庫來實現其功能。它的記憶管理分為多個層次，能夠根據使用者的需求進行調整。這種設計使得使用者能夠在不同的編碼代理之間保持一致的知識體系。效能上，這個系統能夠處理大量的記憶條目，並且在檢索時能夠快速響應。

設計上，選擇 Python 是因為其生態系統豐富，能夠輕鬆集成各種庫和工具。這個選擇雖然帶來了較高的學習曲線，但也使得系統的擴展性和靈活性大大提升。技術風險方面，記憶管理系統的複雜性可能在未來的擴展中帶來挑戰，特別是在多工具環境中的兼容性問題。整合方面，與主流的開發工具鏈（如 VS Code、GitHub Actions）相容性良好，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指南。安裝過程相對順暢，但對於不熟悉 PowerShell 的使用者可能會有些挑戰。文件中有良好的 getting started guide，幫助新手快速上手。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 多工具兼容性，能夠在不同的編碼環境中保持一致性。
> - 強大的記憶管理功能，自動記錄和回顧學習過程。
> - 可攜帶的設計，方便在不同專案之間切換。

> [!danger] 缺點
> - 目前僅支持特定的編碼代理工具，對於不在支持列表中的工具無法使用。
> - 記憶搜索功能仍在 beta 階段，可能存在不穩定的情況。
> - 需要安裝特定的 Python 依賴，對於不熟悉 Python 的使用者可能有一定的學習曲線。

> [!warning] 注意事項
> - 目前僅支持特定的編碼代理工具，對於不在支持列表中的工具無法使用。
> - 記憶搜索功能仍在 beta 階段，可能存在不穩定的情況。
> - 需要安裝特定的 Python 依賴，對於不熟悉 Python 的使用者可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的記憶管理功能，但缺乏多工具支持，適合單一環境使用。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於安全性和隱私保護，對於需要高安全性的環境更為合適。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供更強大的筆記和文檔管理功能，但不支持多工具的記憶共享。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記憶管理，但僅限於單一環境，無法實現多工具共享。 | 如果你的專案只使用單一編碼代理，且需要強大的記憶管理功能。 | low，因為功能相似，遷移成本低。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於安全性和隱私，適合需要高安全性的環境。 | 如果你的專案對安全性要求極高，且不需要多工具支持。 | medium，因為需要重新考慮記憶管理的方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供強大的筆記和文檔管理功能，但不支持多工具的記憶共享。 | 如果你的專案需要強大的文檔管理功能，而不在意多工具支持。 | medium，因為需要重新設計記憶管理的流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agentic-stack** | **boneyard** | **codeburn** | **claude-obsidian** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於記憶管理，但僅限於單一環境，無法實現多工具共享。 | 專注於安全性和隱私，適合需要高安全性的環境。 | 提供強大的筆記和文檔管理功能，但不支持多工具的記憶共享。 |
> | 遷移成本 | - | low，因為功能相似，遷移成本低。 | medium，因為需要重新考慮記憶管理的方式。 | medium，因為需要重新設計記憶管理的流程。 |
> | 適用場景 | 主要場景 | 如果你的專案只使用單一編碼代理，且需要強大的記憶管理功能。 | 如果你的專案對安全性要求極高，且不需要多工具支持。 | 如果你的專案需要強大的文檔管理功能，而不在意多工具支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境下，記憶搜索功能可能會出現不穩定的情況。
  - 解法：使用 `--status` 檢查當前狀態，必要時重啟工具。
- **[HIGH]** 某些適配器的配置文件可能不完整，導致功能無法正常使用。
  - 解法：檢查並手動補全配置文件。
- **[HIGH]** 在 Windows 環境下，PowerShell 的執行策略可能會阻止腳本運行。
  - 解法：需要以管理員身份運行 PowerShell 並設置執行策略。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠在多個編碼代理之間快速切換，保持一致的記憶和技能。 |
| 大型企業的 DevOps 團隊 | 適合 | 能夠管理多個專案的記憶，提升工作效率。 |
| 個人開發者的 AI 專案 | 普通 | 雖然功能強大，但可能對於小型專案來說過於複雜。 |
| 需要高安全性的金融應用 | 不適合 | 目前的設計未考慮到安全性和隱私保護的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到多工具環境中的一致性和效率，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，該工具本身不需要高權限，但在使用過程中可能會存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

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
| Forks | 172 |
| Open Issues | 5 |
| Issue 解決率 | 50% (5 closed) |
| 最後推送 | 2026-04-22 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 5.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/codejunkie99/agentic-stack) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `anthropic` `openai`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 92
>     "PowerShell" : 4
>     "Shell" : 3
>     "Ruby" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@codejunkie99](https://github.com/codejunkie99) | 26 |
> | [@aliirz](https://github.com/aliirz) | 1 |
> | [@JagritGumber](https://github.com/JagritGumber) | 1 |
> | [@mimed95](https://github.com/mimed95) | 1 |
> | [@smartsastram](https://github.com/smartsastram) | 1 |

**最新版本**：v0.8.0 — v0.8.0 — Antigravity adapter + rich episodic logging (2026-04-21)

> [!info]- Release Notes
> First release since v0.7.2. Brings the Antigravity harness, makes Claude Code's episodic memory actually useful, and consolidates per-version notes into [CHANGELOG.md](https://github.com/codejunkie99/agentic-stack/blob/master/CHANGELOG.md).
> 
> ## Added
> - **Google Antigravity adapter** (`./install.sh antigravity`). Drops `ANTIGRAVITY.md` into the project root so Antigravity agents pick up the portable brain in `.agent/`. Brings the supported-harness count to 9. Thanks to @smartsastram (#9).
> - **Rich `PostToolUse` episodic logging for Claude Code.** New `.agent/harness/hooks/claude_code_post_tool.py` reads the JSON payload Claude Code sends via stdin and derives a real action label, importance score, and non-empty reflection per tool call. Replaces the old hardcoded `post-tool ok` that produced identical entries every session and left the dream cycle with nothing to cluster on. Ships with a 54-test validation suite. Thanks to @aliirz (#8).
> - **User-owned stack tuning via `hook_patterns.json`.** Drop your own high-stakes and medium-stakes patterns into `.agent/protocols/hook_patterns.json` so the hook scores `vercel deploy`, `supabase migrate`, etc. correctly for your stack. Ships with empty arrays and an `_examples` section.
> - **`on_failure()` severity overrides.** A failed production deploy records its real severity instead of the flat `importance=7 / pain_score=8` defaults.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/codejunkie99/agentic-stack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-22）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #15 from codejunkie99/fix/openclaw-auto-wire

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/codejunkie99/agentic-stack/issues/13) | pi adapter is missing automatic tool-call logging | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # agentic-stack
> 
> **Keep one portable memory-and-skills layer across coding-agent harnesses, so switching tools doesn't reset how your agent works.**
> 
> A portable `.agent/` folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, Pi Coding Agent, or a DIY Python loop — and keeps its knowledge when you switch.
> 
>   
> 
>   
> 
> [](https://github.com/codejunkie99/agentic-stack/releases)
> [](LICENSE)
> Made by https://x.com/Av1dlive
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
> ### macOS / Linux
> 
> ```bash
> 
> # drop the brain into any project — the onboarding wizard runs automatically
> cd your-project
> agentic-stack claude-code
> 
> # or: cursor | windsurf | opencode | openclaw | hermes | pi | standalone-python | antigravity
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
> # adapters: claude-code | cursor | windsurf | opencode | openclaw | hermes | pi | standalone-python | antigravity
> ```
> 
> 
> ## Onboarding wizard
> 
> After the adapter is installed, a terminal wizard populates
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
> nightly staging cycle, host-agent review tools, and adapters for eight
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
> ## Repo layout
> 
> ```
> .agent/                         # the portable brain (same across harnesses)
> ├── AGENTS.md                   # the map
> ├── harness/                    # conductor + hooks (standalone path)
> │   └── hooks/
> │       ├── claude_code_post_tool.py  # rich PostToolUse logging (v0.8+)
> │       ├── pre_tool_call.py    # permissions enforcement
> │       ├── post_execution.py   # log_execution() entry point
> │       └── on_failure.py       # failure write + repeated-failure rewrite flag
> ├── memory/                     # working / episodic / semantic / personal
> │   ├── auto_dream.py           # staging-only dream cycle
> │   ├── cluster.py              # content clustering + pattern extraction
> │   ├── promote.py              # stage candidates
> │   ├── validate.py             # heuristic prefilter (length + exact duplicate)
> │   ├── review_state.py         # candidate lifecycle + decision log
> │   ├── render_lessons.py       # lessons.jsonl → LESSONS.md
> │   └── memory_search.py        # [BETA] FTS5 search (opt-in)
> ├── skills/                     # _index.md + _manifest.jsonl + SKILL.md files
> ├── protocols/                  # permissions + tool schemas + delegation
> │   └── hook_patterns.json      # user-owned high/medium-stakes regex (v0.8+)
> └── tools/                      # host-agent CLI + memory_reflect + skill_loader
>     ├── learn.py                # one-shot lesson teaching (stage + graduate)
>     ├── recall.py               # surface lessons relevant to an intent
>     ├── show.py                 # colorful brain-state dashboard
>     ├── list_candidates.py
>     ├── graduate.py
>     ├── reject.py
>     └── reopen.py
> 
> adapters/                       # one small shim per harness
> ├── claude-code/   (CLAUDE.md + settings.json hooks)
> ├── cursor/        (.cursor/rules/*.mdc)
> ├── windsurf/      (.windsurfrules)
> ├── opencode/      (AGENTS.md + opencode.json)
> ├── openclaw/      (AGENTS.md + system-prompt include; auto-registers per-project agent)
> ├── hermes/        (AGENTS.md)
> ├── pi/            (AGENTS.md + .pi/skills symlink)
> ├── standalone-python/  (DIY conductor entrypoint)
> └── antigravity/   (ANTIGRAVITY.md)
> 
> docs/                           # architecture, getting-started, per-harness
> install.sh                      # mac / linux / git-bash installer
> install.ps1                     # Windows PowerShell installer
> CHANGELOG.md                    # per-version release notes (v0.1.0 onward)
> onboard.py                      # onboarding wizard entry point
> onboard_features.py             # .features.json read/write
> onboard_ui.py                   # ANSI palette, banner, clack-style layout
> onboard_widgets.py              # arrow-key prompts (text, select, confirm)
> onboard_render.py               # answers → PREFERENCES.md content
> onboard_write.py                # atomic file write with 

## 延伸閱讀

相關概念：[[記憶管理]] · [[多模態]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/codejunkie99/agentic-stack)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶管理" AND file.name != "codejunkie99--agentic-stack"
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
> const concepts = ["記憶管理","多模態","自動化"];
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
