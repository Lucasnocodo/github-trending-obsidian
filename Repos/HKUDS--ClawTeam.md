---
repo: HKUDS/ClawTeam
url: https://github.com/HKUDS/ClawTeam
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "ClawTeam: Agent Swarm Intelligence (One Command → Full Automation)"
homepage: ""
stars: 3171
stars_per_day: 529
forks: 432
open_issues: 25
created: 2026-03-17
pushed_at: 2026-03-23
first_seen: 2026-03-20
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-20
use_case: "讓 AI 代理自動協作，實現全自動化任務管理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-27"
contributor_count: 5
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 8892
readme_length: 10000
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1687,2026-03-20:1693,2026-03-21:2091,2026-03-21:2096,2026-03-22:2479,2026-03-22:2482,2026-03-23:2851,2026-03-23:2854,2026-03-24:3171"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "ClawTeam"
  - "HKUDS/ClawTeam"
  - "讓 AI 代理自動協作，實現全自動化任務管理。"
---

# ClawTeam

**2.9k** stars · **571** stars/天 · 建立 5 天前 · Python · MIT

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
> 讓 AI 代理自動協作，實現全自動化任務管理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (571 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 AI 研究或開發中實現高效協作的開發者和團隊。
> **一句話重點** ClawTeam 的創新在於讓 AI 代理能夠自我組織和協作，實現全自動化的任務管理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--ClawTeam");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "HKUDS--ClawTeam" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的任務管理，值得採用。

> [!abstract] 核心創新
> ClawTeam 透過代理自我組織和協作，實現了全自動化的任務管理。

## 專案簡介

ClawTeam 提供了一個多代理協作的 CLI 工具，讓使用者能夠透過簡單的指令來創建代理團隊、分配任務並監控進度。使用者只需設定目標，ClawTeam 會自動生成代理並協調其工作，這樣的設計能大幅減少人為干預，提升工作效率。其核心功能包括任務依賴鏈管理、文件基礎的消息傳遞以及 tmux 和 git worktree 隔離，這使得每個代理都能在獨立的環境中運行，避免了環境衝突。使用者可以透過 `clawteam spawn` 指令來創建代理，並使用 `clawteam board` 來監控進度，這樣的設計讓整個過程變得直觀且高效。

技術上，ClawTeam 使用 Python 作為主要語言，並依賴於 Typer、Pydantic 和 Rich 等庫來處理 CLI 交互和數據驗證。這些選擇使得 ClawTeam 在功能上保持靈活性，並且能夠輕鬆集成各種 CLI 代理。

相較於其他多代理框架，ClawTeam 的設計更注重於代理之間的自我組織和智能協作，而不是依賴於人為的編排邏輯。

在實際使用中，ClawTeam 可以處理大規模的自動化任務，並且能夠在多個 GPU 上運行，這對於需要高性能計算的用例（如機器學習研究）特別有用。使用者可能會遇到的問題包括代理之間的通信延遲或任務依賴未正確設置，這些都可以通過 ClawTeam 的配置選項來調整。社群活躍度良好，開發者在短短幾天內就獲得了超過 2800 顆星，顯示出其潛在的廣泛應用。

總體來看，ClawTeam 目前處於 alpha 階段，適合對自動化和多代理系統有需求的開發者，尤其是那些希望在 AI 研究或開發中實現高效協作的團隊。未來六個月內，隨著功能的增強和社群的擴大，ClawTeam 有潛力成為多代理協作的主流工具。

**技術棧**：`Python 3.10+` · `Typer` · `Pydantic` · `Rich`

## 重點功能

- 多代理協作 CLI — 創建團隊、分配任務、生成代理、監控進度。
- 任務依賴鏈 — 自動解鎖依賴完成的任務。
- 文件基礎消息傳遞 — 代理之間的收發和廣播消息。
- tmux + git worktree 隔離 — 每個代理擁有自己的分支和終端。
- 看板 — 終端儀表板和網頁 UI 監控。
- 內建模板 — 提供對沖基金、代碼審查、研究論文等團隊範本。
- 代理技能 — 透過 `npx skills add HKUDS/ClawTeam` 安裝 Claude Code、Cursor、Codex 等技能。

## 快速開始

1. 安裝 ClawTeam
```bash
pip install clawteam
```
2. 確認 tmux 和代理 CLI 可獨立運行
```bash
tmux -V
```
3. 創建團隊並分配任務
```bash
clawteam spawn tmux --team my-team --agent-name worker1 --task 'Implement auth module'
```

## 程式碼範例

```python
[
  "# 前置條件\n# 確保已安裝 tmux 和代理 CLI\nclawteam spawn --team my-team --agent-name worker1 --task 'Implement auth module'\n# 預期輸出\n# 代理將在 tmux 環境中運行，並開始執行指定任務。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2854 stars（571/天），forks 367（12.9%），這顯示出其快速增長的潛力。作者 HKUDS 團隊在 AI 和多代理系統方面有豐富的經驗，這個專案解決了現有 AI 代理在協作過程中的孤立問題，讓多個代理能夠自動協作，從而提升效率。近期的推廣活動和社群討論也促進了其曝光率。技術上，隨著 Python 生態系的成熟，ClawTeam 的運行和整合變得更加可行，這吸引了許多開發者的注意。forks/stars 比率為 12.9%，顯示出許多人在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 AI 研究或開發中實現高效協作的開發者和團隊。

> [!example] 使用場景
> - AI 研究人員用它來自動化大規模機器學習實驗，因為它能夠在多個 GPU 上高效運行，並自動調整資源分配。
> - 後端開發者用它來協調多個代理進行全棧開發，因為它能夠自動分配任務並監控進度，減少手動干預。
> - 投資分析師用它來快速組建和管理投資團隊，因為它提供了預設的模板和自動化的任務分配功能。

## 架構分析

ClawTeam 採用 CLI 工具架構，使用者透過簡單的指令來創建和管理代理團隊。這種設計使得使用者不需要深入理解底層邏輯，只需關注任務和目標。每個代理在獨立的 git worktree 和 tmux 環境中運行，這樣的隔離設計避免了環境衝突，並允許多個代理同時運行而不互相干擾。這種架構的代價在於需要使用者具備基本的 CLI 操作能力，並且依賴於 tmux 的運行環境。整體而言，這種設計使得 ClawTeam 在多代理協作上具備高效性和靈活性，但在資源管理和監控上可能需要額外的配置和調整。

## 技術深入分析

ClawTeam 的核心技術機制在於其多代理協作的設計，使用者可以透過 CLI 指令來創建和管理代理團隊。這些代理能夠自我組織，並根據任務依賴關係進行智能分配，這樣的設計使得整個過程更加高效。每個代理在獨立的 git worktree 和 tmux 環境中運行，這樣的隔離設計避免了環境衝突，並允許多個代理同時運行而不互相干擾。效能方面，ClawTeam 能夠在多個 GPU 上運行，適合大規模計算需求，並且可以自動調整資源分配。選擇 Python 作為開發語言使得 ClawTeam 在功能上保持靈活性，但也帶來了對於 Python 環境的依賴。技術風險方面，隨著使用者數量的增加，代理之間的通信延遲可能成為瓶頸，特別是在高負載的情況下。整合方面，ClawTeam 與主流的 CLI 工具鏈相容性良好，但對於不熟悉 CLI 的使用者可能存在學習曲線。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程順暢，只需執行 pip install 指令即可。文件中包含了中文和韓文的支持，方便不同語言的使用者上手。整體而言，花 30 分鐘內能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 接口，快速上手。
> - 支持多種代理，靈活性高。
> - 任務依賴管理功能，減少手動干預。
> - 能夠在多個 GPU 上運行，適合大規模計算。

> [!danger] 缺點
> - 目前仍在 alpha 階段，功能可能不穩定。
> - 需要額外的環境配置，如 tmux。
> - 對於不熟悉 CLI 的使用者可能有學習曲線。
> - 依賴於外部代理的可用性和性能。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要 tmux 作為後端支持。
> - 目前處於 alpha 階段，API 可能不穩定。
> - 依賴於 CLI 代理的可用性，需確保所需代理已安裝。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 自動化功能，但不專注於多代理協作，適合單一任務自動化。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的多代理協作，功能上更具針對性，但不如 ClawTeam 通用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供多代理協作，但缺乏 ClawTeam 的任務依賴管理和自動化功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的多代理協作功能，但專注於文件同步和傳輸，並不支持複雜的任務依賴管理。 | 如果你的主要需求是文件同步而非任務管理，則可以考慮它。 | medium，因為需要重新設計任務流和代理協作邏輯。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的多代理協作，提供針對性的功能，但不如 ClawTeam 通用。 | 如果你的工作主要集中在醫療領域，這個工具可能更適合。 | low，因為功能上有一定重疊，但需要調整使用場景。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ClawTeam** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的多代理協作功能，但專注於文件同步和傳輸，並不支持複雜的任務依賴管理。 | 專注於醫療領域的多代理協作，提供針對性的功能，但不如 ClawTeam 通用。 |
> | 遷移成本 | - | medium，因為需要重新設計任務流和代理協作邏輯。 | low，因為功能上有一定重疊，但需要調整使用場景。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是文件同步而非任務管理，則可以考慮它。 | 如果你的工作主要集中在醫療領域，這個工具可能更適合。 |

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

- [MEDIUM] 在高負載情況下，代理之間的通信延遲可能會影響整體性能。
  - 解法：可以通過調整任務分配策略來減少同時運行的代理數量。
- **[HIGH]** 某些代理在特定環境下可能無法正常啟動。
  - 解法：確保所有代理 CLI 已正確安裝並可獨立運行。
- [MEDIUM] 任務依賴未正確設置可能導致任務無法自動解鎖。
  - 解法：仔細檢查任務依賴設置，並使用 `clawteam config` 進行調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | ClawTeam 能夠自動化任務分配，提升開發效率。 |
| 大型企業的 AI 研究團隊 | 適合 | 能夠在多個 GPU 上運行，適合大規模計算需求。 |
| 對 CLI 不熟悉的開發者 | 不適合 | 需要一定的 CLI 操作能力，對新手有學習曲線。 |
| 需要快速原型開發的小型團隊 | 非常適合 | 能夠快速創建和管理代理團隊，減少手動干預。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的任務管理，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawTeam 本身不需要高權限運行，且不會存取敏感資料。依賴的第三方代理需自行評估安全性。

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
| Forks | 367 |
| Open Issues | 22 |
| Issue 解決率 | 29% (9 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-17 |
| Repo 大小 | 8.7 MB |
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
> | [@tjb-tech](https://github.com/tjb-tech) | 61 |
> | [@who96](https://github.com/who96) | 16 |
> | [@he-yufeng](https://github.com/he-yufeng) | 7 |
> | [@xzq-xu](https://github.com/xzq-xu) | 5 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 4 |

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

**社群活躍度**：社群活躍，開發者回應速度快，問題解決率為 29%。
**連結**：[文件](https://github.com/HKUDS/ClawTeam)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-21 ~ 2026-03-22）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #58 from HKUDS/pr-58

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#73](https://github.com/HKUDS/ClawTeam/issues/73) | Bug: _ws_manager() called with wrong arguments in conflicts. | 0 | 0 |
> | [#72](https://github.com/HKUDS/ClawTeam/issues/72) | [Feature Request] MCP support `enhancement` | 0 | 0 |

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
>   
>     Watch the demo video
>   
> 
>   Open the demo video directly
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
> # A configured profile (recommended for non-default providers/models)
> clawteam spawn tmux --profile claude-kimi --team my-team --agent-name dave --task "Refactor the auth flow"
> ```
> 
> Notes:
> 
> - `tmux` is the default backend and is the best choice when you want to watch interactive agent UIs.
> - `subprocess` is better for one-shot tools or non-interactive scripts.
> - `nanobot` is normalized internally to `nanobot agent`, so the command above is the correct ClawTeam entrypoint.
> - Claude Code and Codex trust prompts in fresh worktrees are auto-confirmed by the tmux backend.
> - For non-default providers/models, prefer `--profile ` over manually exporting env vars inline.
> 
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
> #### ✨ The Result?
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
> │   ├── GPU 1: cl

## 延伸閱讀

相關概念：[[多模態]] · [[自動化]] · [[機器學習]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]]

[GitHub](https://github.com/HKUDS/ClawTeam)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "HKUDS--ClawTeam"
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
> const concepts = ["多模態","自動化","機器學習"];
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

- [[2026-03-24|2026-03-24]] — 再次上榜，3.2k stars
- [[2026-03-23|2026-03-23]] — 再次上榜，2.9k stars
- [[2026-03-22|2026-03-22]] — 再次上榜，2.5k stars
- [[2026-03-21|2026-03-21]] — 再次上榜，2.1k stars
- [[2026-03-20|2026-03-20]] — 首次收錄，1.7k stars
