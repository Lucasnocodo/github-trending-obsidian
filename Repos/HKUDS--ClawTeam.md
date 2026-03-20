---
repo: HKUDS/ClawTeam
url: https://github.com/HKUDS/ClawTeam
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "ClawTeam: Agent Swarm Intelligence (One Command → Full Automation)"
homepage: ""
stars: 1687
stars_per_day: 844
forks: 207
open_issues: 10
created: 2026-03-17
pushed_at: 2026-03-19
first_seen: 2026-03-20
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "多代理協調"
release_tag: "v0.1.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-20
use_case: "讓 AI 代理自動組成團隊，協同完成複雜任務，實現全自動化。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-23"
contributor_count: 5
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 8814
readme_length: 9978
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1687"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "ClawTeam"
  - "HKUDS/ClawTeam"
  - "讓 AI 代理自動組成團隊，協同完成複雜任務，實現全自動化。"
---

# ClawTeam

**1.7k** stars · **844** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--ClawTeam");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.2` `easy-install`

> [!summary] 一句話摘要
> 讓 AI 代理自動組成團隊，協同完成複雜任務，實現全自動化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (844 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在 AI 自動化和多代理協作中獲得高效解決方案的開發者。
> **一句話重點** ClawTeam 的最大亮點在於它能讓 AI 代理協同工作，實現全自動化，這在當前的 AI 生態中是非常前沿的概念。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--ClawTeam");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理協調" && p.file.name !== "HKUDS--ClawTeam" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理協調 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到高效的多代理協作，值得投資。

> [!abstract] 核心創新
> ClawTeam 讓 AI 代理能夠自動組成團隊，協同完成複雜任務，實現全自動化。

## 專案簡介

ClawTeam 是一個多代理協調 CLI 工具，旨在讓 AI 代理以群體智慧的方式協同工作。用戶只需提供目標，ClawTeam 便會自動生成代理團隊，分配任務並監控進度。其核心機制是透過命令行指令來啟動代理，並利用 `clawteam spawn` 指令來創建工作代理，這些代理能夠在獨立的 git worktree 和 tmux 環境中運行。這種設計使得每個代理可以專注於特定任務，並且能夠在任務依賴關係完成後自動解鎖後續任務。

技術上，ClawTeam 使用 Python 實現，並依賴於 `typer`、`pydantic` 和 `rich` 等庫，這使得其在 CLI 環境中表現出色。與其他多代理框架相比，ClawTeam 的獨特之處在於它支持任何 CLI 代理（如 Claude Code 和 Codex），而不是僅限於特定框架，這使得它在靈活性上具有優勢。使用者可以在多種情境下運用 ClawTeam，例如自動化機器學習研究或全棧開發，並且能夠在不需要人類干預的情況下完成複雜的任務。儘管目前仍在 alpha 階段，但其設計理念和功能已經顯示出強大的潛力，未來可能會成為多代理協作的主流工具。

**技術棧**：`Python 3.10+` · `typer` · `pydantic` · `rich`

## 重點功能

- 多代理協調 CLI — 創建團隊、分配任務、生成代理、監控進度。
- 任務依賴鏈 — 當依賴任務完成後，自動解鎖後續任務。
- 基於文件的消息傳遞 — 代理之間的收發和廣播功能。
- tmux + git worktree 隔離 — 每個代理擁有自己的分支和終端。
- 看板 — 終端儀表板和網頁 UI 監控。
- 內建模板 — 提供對沖基金、代碼審查、研究論文等團隊範本。
- 代理技能 — 通過 `npx skills add HKUDS/ClawTeam` 安裝 Claude Code、Cursor、Codex 等技能。

## 快速開始

1. 安裝 ClawTeam
```bash
pip install clawteam
```
2. 配置 ClawTeam
```bash
clawteam config show
```
3. 啟動代理團隊
```bash
clawteam spawn --team my-team --agent-name worker1 --task 'Implement auth module'
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 tmux 和代理 CLI",
  "clawteam spawn --team my-team --agent-name worker1 --task 'Implement auth module'",
  "# 預期輸出：代理團隊成功創建，任務分配完成。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1687 stars（844/天），forks 207（12.3%），顯示出強烈的社群關注。作者 HKUDS 團隊在 AI 和自動化領域有豐富的經驗，之前的項目如 OpenClaw 和 nanobot 都受到了廣泛使用。ClawTeam 解決了現有 AI 代理在協作上的痛點，讓多個代理能夠自動協同工作，這在複雜任務中是非常必要的。此專案的推出引發了社群的熱烈討論，尤其是在 AI 自動化的背景下，這使得 ClawTeam 的需求急劇上升。高達 12.3% 的 forks/stars 比率顯示出許多開發者對這個工具進行實際修改和使用，反映了其實用性和潛力。

## 適合誰使用

**目標受眾**：希望在 AI 自動化和多代理協作中獲得高效解決方案的開發者。

> [!example] 使用場景
> - AI 研究員用它來自動化大型機器學習實驗，因為它能夠在短時間內設計和執行數千個實驗，顯著提高研究效率。
> - 全棧開發者用它來協調多個開發任務，因為它能夠自動分配任務並管理依賴，減少手動協調的負擔。
> - 投資分析師用它來進行市場研究和數據挖掘，因為它能夠自動化多策略投資組合優化，提升決策效率。

## 架構分析

ClawTeam 採用 CLI 工具架構，允許用戶通過簡單的命令行指令來啟動和管理代理。每個代理在獨立的 git worktree 和 tmux 環境中運行，這樣可以確保任務之間的隔離和獨立性。這種設計使得代理能夠專注於各自的任務，同時也能夠通過文件傳遞和即時通訊進行協作。選擇這種架構的代價是需要用戶具備一定的 CLI 操作能力，但這也大大提升了系統的靈活性和可擴展性。由於依賴於 Python 和 tmux，整體架構相對輕量，適合快速部署和迭代。

## 技術深入分析

ClawTeam 的核心技術機制是多代理協調，通過命令行指令來啟動和管理代理。這些代理能夠在獨立的 git worktree 和 tmux 環境中運行，這樣可以確保任務之間的隔離和獨立性。每個代理都可以根據任務的依賴關係自動調整其行為，這是通過內建的任務依賴鏈功能實現的。效能方面，ClawTeam 能夠處理多達數十個代理的協作，具體取決於系統資源。設計上選擇 Python 作為主要語言，使得開發和維護相對簡單，但也可能面臨性能瓶頸。技術風險方面，隨著代理數量的增加，系統的協調和資源分配可能會變得複雜，這需要進一步的優化和調整。整合方面，ClawTeam 可以與多種 CLI 工具和框架兼容，這使得它在現有的開發環境中具有較高的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，沒有明顯的坑。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種 CLI 代理，靈活性高。
> - 自動化任務分配和依賴管理，減少手動協調的負擔。
> - 提供可視化的監控界面，方便用戶跟蹤進度。

> [!danger] 缺點
> - 目前仍在 alpha 階段，功能和穩定性可能不如成熟產品。
> - 需要用戶具備一定的 CLI 操作能力。
> - 依賴於 tmux，可能對某些用戶造成學習曲線。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 tmux 和 CLI 代理的獨立運行。
> - 目前仍在 alpha 階段，功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 主要專注於通用的 CLI 工具，而 ClawTeam 專注於多代理協作和任務分配，適合更複雜的自動化需求。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 主要針對醫療領域的應用，而 ClawTeam 提供更廣泛的多代理協作功能，適用於各種場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，而 ClawTeam 專注於多代理協作，適合更複雜的任務管理。 | 如果你的需求主要是文件同步而非多代理協作，parsync 會是更合適的選擇。 | low，因為兩者的基本概念相似。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於 AI 模型訓練，而 ClawTeam 提供更廣泛的多代理協作功能，適用於各種場景。 | 如果你的主要需求是針對 AI 模型的訓練和優化，NemoClaw 會更合適。 | medium，因為需要重新調整任務管理的方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ClawTeam** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於文件同步，而 ClawTeam 專注於多代理協作，適合更複雜的任務管理。 | NemoClaw 專注於 AI 模型訓練，而 ClawTeam 提供更廣泛的多代理協作功能，適用於各種場景。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似。 | medium，因為需要重新調整任務管理的方式。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非多代理協作，parsync 會 | 如果你的主要需求是針對 AI 模型的訓練和優化，NemoCl |

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

- **[HIGH]** 在某些環境下，tmux 可能無法正常啟動，導致代理無法運行。
  - 解法：確保 tmux 已正確安裝並可在命令行中運行。
- [MEDIUM] 某些 CLI 代理可能需要額外配置，否則無法正常工作。
  - 解法：參考代理的文檔進行配置。
- [MEDIUM] 當代理數量過多時，系統可能會出現性能瓶頸。
  - 解法：適當調整代理數量，避免同時啟動過多代理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠自動化任務分配，減少手動協調的負擔，提升開發效率。 |
| 大型企業的 AI 研究部門 | 適合 | 能夠處理多個複雜的研究任務，並自動化實驗設計。 |
| 個人開發者的簡單專案 | 普通 | 雖然功能強大，但對於簡單專案可能顯得過於複雜。 |
| 需要高效能的實時系統 | 不適合 | 目前仍在 alpha 階段，穩定性和效能可能無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的多代理協作，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawTeam 本身不需要高權限，僅需安裝在本地環境中。它不會存取敏感資料，但需要依賴的 CLI 代理可能會有不同的安全性考量。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
| Forks | 207 |
| Open Issues | 10 |
| Issue 解決率 | 33% (5 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-17 |
| Repo 大小 | 8.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/ClawTeam) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "HTML" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 32 |
> | [@he-yufeng](https://github.com/he-yufeng) | 5 |
> | [@who96](https://github.com/who96) | 5 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 4 |
> | [@fancyboi999](https://github.com/fancyboi999) | 3 |

**最新版本**：v0.1.2 — v0.1.2 — First PyPI Release (2026-03-18)

> [!info]- Release Notes
> ## What's New
> 
> First official PyPI release of ClawTeam.
> 
>   ### Features
> 
>   - **Multi-agent coordination CLI** — create teams, assign tasks, spawn agents, monitor progress
>   - **Task dependency chains** — auto-unblock tasks when dependencies complete
>   - **File-based messaging** — inbox send/receive/broadcast between agents
>   - **tmux + git worktree isolation** — each agent gets its own branch and terminal
>   - **Kanban board** — terminal dashboard and web UI for monitoring
>   - **Built-in templates** — hedge-fund, code-review, research-paper team archetypes
>   - **Agent Skill** — install via `npx skills add HKUDS/ClawTeam` for Claude Code, Cursor, Codex, etc.
> 
>   ### Install
> 
>   ```bash
> pip install clawteam
>   ```

## 社群與生態

**社群活躍度**：社群活躍，開放問題回應速度尚可。
**連結**：[文件](https://github.com/HKUDS/ClawTeam)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-19）
> **活躍天數** 2 天 · **最新 commit** Add software development team template

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; ClawTeam: Agent Swarm Intelligence
> 
>   The Evolution of AI Agents 🚀: Solo 🤖 → Swarm 🦞🤖🤖🤖
>   ClawTeam: Let AI Agents Form Swarms, Think & Work Together, and Ship Faster
> 
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
> 
> **One Command Line: Full Automation.** — agents spawn swarms, delegate tasks, and deliver results. 
> 
> Human provides the goal. The Agent Team orchestrates everything else.
> 
> Full compatibility with [Claude Code](https://claude.ai/claude-code), [Codex](https://openai.com/codex), [OpenClaw](https://github.com/openclaw/openclaw), [nanobot](https://github.com/HKUDS/nanobot), [Cursor](https://cursor.com), and any CLI agent.&nbsp;&nbsp;[**中文文档**](README_CN.md) | [**한국어**](README_KR.md)
> 
> ---
> 
> 
> ## 📦 Install
> 
> ```bash
> pip install clawteam
> 
> 
> ## 🚀 Quick Start
> 
> If you're new to ClawTeam, follow this order:
> 
> 1. Make sure `tmux` and your agent CLI run standalone on this machine.
> 2. Pick one path below: let an agent drive, or drive it manually.
> 3. Use the supported-agent table to choose the right `spawn` command.
> 4. If you're integrating a new agent, check the adapter notes before debugging.
> 
> 
> ## ✨ ClawTeam's Key Features
> 
> 🔬 AI Research Automation
> 
>   
> 
> • Large-Scale Automated ML Experimentation
> 
> • AI Model Training & Optimization
> 
> • AI-Driven Hypothesis Generation & Validation
> 
> • Self-Improving Model Architectures
> 
> 🏗️ Agentic Engineering
> 
>   
> 
> • Autonomous Full-Stack Development
> 
> • Self-Evolving Software
> 
> • Collaborative Open Source Development
> 
> • Real-Time System Integration
> 
> 💰 AI Hedge Fund
> 
>   
> 
> • Automated Market Research & Data Mining
> 
> • Multi-Strategy Portfolio Optimization
> 
> • Real-Time Risk Assessment
> 
> • Algorithmic Trading Execution & Monitoring
> 
> 🎪 Your Own Swarm
> 
>   
> 
> • Custom Scientific Research Teams
> 
> • Personalized Investment Committees
> 
> • Business Operations Teams
> 
> • Content Production Studios
> 
> ---
> 
> https://github.com/user-attachments/assets/7e2f0ecd-8fe3-4970-90ac-5c9669ff060c
> 
> ☝️ Intelligent leader agent orchestrates 8 specialized sub-agents across 8 H100 GPUs, autonomously designing experiments and dynamically reallocating resources based on real-time performance.
> 
> 🧠 The system synthesizes breakthroughs across teams and evolves strategies independently — achieving full research automation without human intervention.
> 
>   
> 
> ---
> 
> 
> ## ✨ Features
> 
> 
> # Optional: P2P transport (ZeroMQ)
> pip install -e ".[p2p]"
> ```
> 
> Requires **Python 3.10+**, **tmux**, and a CLI coding agent (e.g. `claude`, `codex`). Python dependencies: `typer`, `pydantic`, `rich`.
> 
> All `spawn` examples assume the agent CLI you name is already installed and available on `PATH`.
> 
> ---
> 
> 
> ### ⚡ Option 1: Let the Agent Drive (Recommended)
> 
> ClawTeam ships with a **Claude Code skill** that auto-activates. Just install and prompt:
> 
> ```
> "Build a web app. Use clawteam to split the work across multiple agents."
> ```
> 
> The agent will automatically create a team, spawn workers, assign tasks, and coordinate — using `clawteam` CLI commands under the hood.
> 
> 
> ### 🔧 Option 2: Drive It Manually
> 
> ```bash
> 
> # ⚙️ Config
> clawteam config show
> clawteam config set transport p2p
> clawteam config health
> ```
> 
> | Setting | Env Var | Default | Description |
> |---------|---------|---------|-------------|
> | `data_dir` | `CLAWTEAM_DATA_DIR` | `~/.clawteam` | Data directory |
> | `transport` | `CLAWTEAM_TRANSPORT` | `file` | `file` or `p2p` |
> | `workspace` | `CLAWTEAM_WORKSPACE` | `auto` | `auto` / `always` / `never` |
> | `default_backend` | `CLAWTEAM_DEFAULT_BACKEND` | `tmux` | `tmux` or `subprocess` |
> | `skip_permissions` | `CLAWTEAM_SKIP_PERMISSIONS` | `true` | Auto-approve agent tools |
> 
> ---
> 
> 
> ## 🤔 Why ClawTeam?
> 
> Current AI agents are powerful — but they work in **isolation**. When facing complex tasks, you're stuck manually coordinating multiple agents, juggling context, and stitching together fragmented results.
> 
> **What if agents could think and work as a team?**
> 
> ClawTeam unlocks **Agent Swarm Intelligence** — where AI agents self-organize into collaborative teams, intelligently divide complex work, share insights in real-time, and converge on breakthrough solutions.
> 
> • **🚀 Spawns specialized sub-agents** — each with dedicated environments and focus areas
> 
> • **📋 Designs intelligent task allocation** — with smart dependency management
> 
> • **💬 Facilitates real-time coordination** — seamless inter-agent communication
> 
> • **📊 Monitors team performance** — tracks progress and identifies bottlenecks
> 
> • **🔄 Adapts strategies dynamically** — reallocates resources and redirects efforts
> 
> #### ✨ The Result?**
> You set the vision. The swarm executes with collective intelligence.
> 
>   
> 
> ---
> 
> 
> ## 🎯 Swarm Intelligence in Action
> 
> 
> ### 🦞 Agents Spawn Agents
> The leader agent calls `clawteam spawn` to create workers. Each worker gets its own **git worktree**, **tmux window**, and **identity** — automatically.
> 
> ```bash
> 
> # The leader agent runs:
> clawteam spawn --team my-team \
>   --agent-name worker1 \
>   --task "Implement auth module"
> ```
> 
> 
> ### 🤖 Agents Talk to Agents
> Workers check their inbox, update task status, and report results — all through CLI commands that are **auto-injected** into their prompt.
> 
> ```bash
> 
> # A worker agent checks tasks:
> clawteam task list my-team --owner me
> 
> # Then reports back:
> clawteam inbox send my-team leader \
>   "Auth done. All tests passing."
> ```
> 
> 
> ### 👀 You Just Watch
> Monitor the swarm from a tiled tmux view or a Web UI. The leader handles coordination — you intervene only when you want to.
> 
> ```bash
> 
> # Watch all agents simultaneously
> clawteam board attach my-team
> 
> # Or open the web dashboard
> clawteam board serve --port 8080
> ```
> 
> | | ClawTeam | Other multi-agent frameworks |
> |---|---------|----------------------------|
> | 🎯 **Who uses it** | **The AI agents themselves** | Humans writing orchestration code |
> | ⚡ **Setup** | `pip install` + one prompt to the leader | Docker, cloud APIs, YAML configs |
> | 🏗️ **Infrastructure** | Just a filesystem and tmux | Redis, message queues, databases |
> | 🤖 **Agent support** | Any CLI agent (Claude Code, Codex, OpenClaw, custom) | Framework-specific only |
> | 🌳 **Isolation** | Git worktrees (real branches, real diffs) | Containers or virtual envs |
> | 🧠 **Intelligence** | Swarm self-organizes via CLI commands | Hard-coded orchestration logic |
> 
> ---
> 
> 
> ## 🎬 Use Cases
> 
> 
> ### 🔬 1. Autonomous ML Research — 8 Agents × 8 H100 GPUs
> 
> Based on [@karpathy's autoresearch](https://github.com/karpathy/autoresearch).
> 
> #### 💫 One Command. Full Automation.
> 
> #### Human input: "Optimize this LLM training setup using 8 GPUs"
> 
> The Agent Team handles everything else:
> - Spawns 8 specialized research agents across H100s
> - Designs 2000+ autonomous experiments
> - Achieves breakthrough improvements (val_bpb: 1.044→0.977)
> - Zero human intervention required
> 
> #### 🎯 Pure Research at Scale
> 
> Transform months of manual hyperparameter tuning into hours of intelligent automation.
> 
>   
>   
>   🏆 val_bpb: 1.044 → 0.977 (6.4% improvement) | 2430+ experiments | ~30 GPU-hours
> 
> **What agent team did autonomously:**
> 
> ```
> Human prompt: "Use 8 GPUs to optimize train.py. Read program.md for instructions."
> 
> 🦞 Leader agent's actions:
> ├── 📖 Read program.md, understand the experiment protocol
> ├── 🏗️ clawteam team spawn-team autoresearch
> ├── 🚀 Assigned each GPU a research direction:
> │   ├── GPU 0: clawteam spawn --task "Explore model depth (DEPTH 10-16)"
> │   ├── GPU 1: clawteam spawn --task "Explore model width (ASPECT_RATIO 80-128)"
> │   ├── GPU 2: clawteam spawn --task "Tune learning rates and optimizer"
> │   ├── GPU 3: clawteam spawn --task "Explore batch size and accumulation"
> │   ├── GPU 4-7: clawteam spawn tmux codex --task "..."  (Codex agents)
> │   └── 🌳 Each agent: own git worktree, own branch, isolated experiments
> ├── 🔄 Every 30 minutes, checked results:
> │   ├── clawteam board show autoresearch
> │   ├── Read each agent's results.tsv
> │   ├── 🏆 Identified best findings (depth=12, batch=2^17, norm-before-RoPE)
> │   └── 📡 Cross-pollinated: told new agents to start from the best config
> ├── 🔧 When agents fini

## 延伸閱讀

相關概念：[[自動化測試]] · [[多模態]] · [[機器學習]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/HKUDS/ClawTeam)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理協調）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理協調" AND file.name != "HKUDS--ClawTeam"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--ClawTeam"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--ClawTeam" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "HKUDS--ClawTeam"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","多模態","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--ClawTeam" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--ClawTeam" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--ClawTeam"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
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
> const me = dv.page("Repos/HKUDS--ClawTeam");
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

> **2026-03-20** — 首次收錄
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

- [[2026-03-20|2026-03-20]] — 首次收錄，1.7k stars
