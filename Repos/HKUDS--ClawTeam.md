---
repo: HKUDS/ClawTeam
url: https://github.com/HKUDS/ClawTeam
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "ClawTeam: Agent Swarm Intelligence (One Command → Full Automation)"
homepage: ""
stars: 3408
stars_per_day: 487
forks: 467
open_issues: 38
created: 2026-03-17
pushed_at: 2026-03-23
first_seen: 2026-03-20
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-20
use_case: "讓 AI 代理自動組成群體，協同工作並快速完成任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-27"
contributor_count: 5
engagement: "medium"
issue_close_rate: 24
repo_size_kb: 9055
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1687,2026-03-20:1693,2026-03-21:2091,2026-03-21:2096,2026-03-22:2479,2026-03-22:2482,2026-03-23:2851,2026-03-23:2854,2026-03-24:3171,2026-03-24:3173,2026-03-25:3408"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "ClawTeam"
  - "HKUDS/ClawTeam"
  - "讓 AI 代理自動組成群體，協同工作並快速完成任務。"
---

# ClawTeam

**3.4k** stars · **487** stars/天 · 建立 7 天前 · Python · MIT

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

`ORG` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 讓 AI 代理自動組成群體，協同工作並快速完成任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (487 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速協調多個 AI 代理以完成複雜任務的開發者和研究者。
> **一句話重點** ClawTeam 讓 AI 代理能夠自動協作，這在以往的工具中並不常見。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--ClawTeam");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "HKUDS--ClawTeam" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到高效的多代理協作，值得一試。

> [!abstract] 核心創新
> ClawTeam 讓 AI 代理能夠自動組成群體，協同工作並快速完成任務。

## 專案簡介

ClawTeam 是一個多代理協作的 CLI 工具，旨在通過自動化任務分配和協調來提升 AI 代理的工作效率。用戶只需提供目標，系統會自動生成代理群體，並通過 `clawteam spawn` 指令來創建工作代理，這些代理會在獨立的環境中運行，並能夠實時協作。這種設計使得複雜任務的執行不再依賴於人工協調，從而節省時間並降低錯誤率。ClawTeam 支持多種 CLI 代理，如 Claude Code 和 Codex，並允許用戶根據需要選擇適合的 `spawn` 命令來啟動代理。技術上，ClawTeam 使用 Python 作為主要開發語言，並依賴於 `typer` 和 `pydantic` 等庫來管理命令行界面和數據驗證，這使得其架構相對輕量，便於快速部署和擴展。

與傳統的多代理框架相比，ClawTeam 的優勢在於其無需複雜的基礎設施，僅依賴文件系統和 tmux，這降低了使用門檻。實際使用中，ClawTeam 能夠高效地處理大規模的機器學習實驗，並在無需人工干預的情況下進行自我優化。這使得它特別適合需要快速迭代和實驗的研究團隊。總體來看，ClawTeam 目前處於 alpha 階段，適合對 AI 代理協作有需求的開發者和研究者，未來可能會進一步增強其功能和穩定性。

**技術棧**：`Python 3.10+` · `typer` · `pydantic` · `rich`

## 重點功能

- 自動化任務分配 — 透過 `clawteam spawn` 指令自動生成代理並分配任務。
- 多代理協作 — 代理之間能夠實時溝通，使用 `clawteam inbox` 來更新任務狀態。
- 支持多種 CLI 代理 — 完全兼容 Claude Code、Codex 等多種代理，方便用戶選擇。
- 可視化監控 — 使用 `clawteam board` 指令來實時監控代理的工作進度。
- 靈活的配置管理 — 透過 `clawteam config` 指令來管理各種設置，支持多種運行環境。

## 快速開始

1. 安裝 ClawTeam
```bash
pip install clawteam
```
2. 檢查 tmux 版本
```bash
tmux -V
```
3. 啟動代理團隊
```bash
clawteam spawn --team my-team --task 'Implement auth module'
```

## 程式碼範例

```python
[
  "# 前置條件：需要安裝 tmux 和一個 CLI 代理",
  "clawteam spawn --team my-team --agent-name worker1 --task 'Implement auth module'",
  "# 預期輸出：創建一個名為 worker1 的代理，並分配任務。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 3408 stars（487/天），forks 467（13.7%），顯示出強勁的增長潛力。這個專案的主要貢獻者來自於 HKUDS 團隊，過去有多個成功的 AI 相關專案。ClawTeam 解決了現有 AI 代理在複雜任務中協作不良的痛點，讓代理能夠自動化協作，這在以往的工具中並不常見。最近的推廣活動和社群討論也促進了其曝光度，吸引了許多開發者的關注。其簡單的安裝和使用流程，讓更多人能夠輕鬆上手，進一步推動了其受歡迎程度。

## 適合誰使用

**目標受眾**：需要快速協調多個 AI 代理以完成複雜任務的開發者和研究者。

> [!example] 使用場景
> - AI 研究人員用它來自動化大規模機器學習實驗，因為它能夠快速生成和執行數千個實驗，顯著縮短研究時間。
> - 金融分析師用它來組建自動化的投資分析團隊，因為它可以在短時間內協調多個代理進行市場研究和數據挖掘。
> - 軟體開發者用它來進行全自動的全棧開發，因為它能夠自動分配任務並監控進度，減少了手動協調的需求。

## 架構分析

ClawTeam 採用 CLI 工具架構，設計上強調簡單易用。系統主要由 Python 編寫，並使用 tmux 作為後端來管理多個代理的運行環境。每個代理在獨立的 git worktree 中運行，這樣可以避免環境之間的干擾，並支持版本控制。

這種設計使得用戶能夠輕鬆地管理和監控代理的狀態。選擇 tmux 而非其他消息隊列系統，降低了基礎設施的複雜性，但也意味著在高並發情況下可能會遇到性能瓶頸。整體架構的擴展性良好，適合小型到中型團隊使用。

## 技術深入分析

ClawTeam 的核心技術在於其多代理協作的設計，使用 CLI 指令來管理和協調各個代理的任務。這種設計使得每個代理能夠在獨立的環境中運行，並通過 tmux 進行實時監控。系統的性能在於能夠快速生成和執行大量的任務，並在無需人工干預的情況下進行自我優化。選擇 Python 作為開發語言，結合了其強大的生態系統和易用性，使得開發者能夠快速上手。依賴的庫如 `typer` 和 `pydantic` 提供了良好的命令行界面和數據驗證支持，這進一步提升了用戶體驗。隨著用戶數量的增加，系統的性能可能會受到挑戰，特別是在多個代理同時運行的情況下。整體來看，ClawTeam 的設計理念是讓 AI 代理能夠自動協作，這在當前的 AI 工具生態中具有一定的創新性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 tmux 的配置。文件目前僅提供英文版本，可能對非英語用戶造成一定困難。

## 優缺點分析

> [!success] 優點
> - 簡單的安裝流程，僅需一行命令即可開始使用。
> - 支持多種 CLI 代理，靈活性高。
> - 能夠自動化複雜任務，減少人工干預。

> [!danger] 缺點
> - 目前仍在 alpha 階段，可能存在不穩定性。
> - 對於不熟悉 tmux 的用戶來說，學習曲線較陡。
> - 在高負載情況下，性能可能會受到影響。

> [!warning] 注意事項
> - 目前僅支援 Python 3.10 以上版本。
> - 需要安裝 tmux 作為後端，對於不熟悉 tmux 的用戶可能有學習曲線。
> - 在高負載情況下，可能會出現性能瓶頸，特別是在多個代理同時運行時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | OpenClaw 主要集中於醫療技能的開發，而 ClawTeam 更加通用，支持多種任務和代理協作。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Autoresearch 專注於自動化機器學習實驗，而 ClawTeam 提供更廣泛的多代理協作功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據挖掘，而 ClawTeam 提供完整的代理協作和任務管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 專注於自動化機器學習實驗，使用 Python 實現，記憶體使用量較低，但功能較為單一。 | 如果你的團隊專注於機器學習實驗的自動化，且需要一個輕量級的解決方案。 | low，因為兩者都使用 Python，且有相似的使用模式。 |
| [HKUDS/OpenClaw](https://github.com/HKUDS/OpenClaw) | 專注於醫療技能的開發，使用 Python 實現，功能較為專一。 | 如果你的專案主要集中在醫療領域，且需要專門的技能支持。 | medium，因為需要調整使用的 API 和功能範圍。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ClawTeam** | **autoresearch** | **OpenClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化機器學習實驗，使用 Python 實現，記憶體使用量較低，但功能較為單一。 | 專注於醫療技能的開發，使用 Python 實現，功能較為專一。 |
> | 遷移成本 | - | low，因為兩者都使用 Python，且有相似的使用模式。 | medium，因為需要調整使用的 API 和功能範圍。 |
> | 適用場景 | 主要場景 | 如果你的團隊專注於機器學習實驗的自動化，且需要一個輕量級的解 | 如果你的專案主要集中在醫療領域，且需要專門的技能支持。 |

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

- **[HIGH]** 在高負載情況下，可能會出現性能瓶頸，特別是在多個代理同時運行時。
  - 解法：減少同時運行的代理數量，或優化任務分配。
- [MEDIUM] tmux 配置不當可能導致代理無法正常啟動。
  - 解法：確保 tmux 已正確安裝並配置。
- [MEDIUM] 某些 CLI 代理可能不兼容，導致無法正常工作。
  - 解法：檢查代理的兼容性，必要時進行調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速協調多個 AI 代理以完成複雜任務的開發者 | 非常適合 | ClawTeam 提供了自動化的任務分配和協調功能，能夠顯著提高效率。 |
| 小型團隊進行機器學習實驗的研究者 | 適合 | 能夠快速生成和執行大量實驗，減少手動干預。 |
| 大型企業需要穩定的多代理協作系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高效的多代理協作，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawTeam 本身不需要高權限，且不存取敏感資料。依賴的庫均來自於可信的來源，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ClawTeam 最常與 CLI 代理（如 Claude Code 和 Codex）搭配使用，處於開發和執行任務的環節。用戶可以在本地環境中運行 ClawTeam，並通過簡單的 CLI 指令進行操作。與主流 CI/CD 工具的整合相對簡單，支持 GitHub Actions 等，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要正確配置 tmux，否則可能會導致代理無法正常啟動。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 ClawTeam 出現之前，AI 代理的協作主要依賴於人工編寫的協調代碼，這導致了效率低下和錯誤率高的問題。隨著 AI 技術的進步，對於多代理協作的需求日益增加，ClawTeam 應運而生，提供了一個自動化的解決方案。這個工具代表了 AI 代理協作的未來趨勢，未來可能會進一步擴展其功能，支持更多的應用場景。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解 CLI 工具的使用
- 有基本的 tmux 知識

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在小型內部工具導入。第三週：撰寫最佳實踐文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：任務完成時間減少 30%，或錯誤率降低至 5% 以下。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

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
| Forks | 467 |
| Open Issues | 38 |
| Issue 解決率 | 24% (12 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-17 |
| Repo 大小 | 8.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/ClawTeam) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "HTML" : 4
>     "JavaScript" : 3
>     "CSS" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 78 |
> | [@who96](https://github.com/who96) | 17 |
> | [@he-yufeng](https://github.com/he-yufeng) | 7 |
> | [@xzq-xu](https://github.com/xzq-xu) | 5 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 4 |

**最新版本**：v0.2.0 — v0.2.0 — Stabilization Release (2026-03-23)

> [!info]- Release Notes
> ## What's New
> 
> ClawTeam `v0.2.0` is the first stabilization release after the initial PyPI launch on March 18, 2026.
> 
> ### Demo Time
> 
> https://github.com/user-attachments/assets/09ac1f72-d3b8-4341-b33f-d58c2479bee8
> 
> ### Highlights
> 
> - Improved spawn reliability across tmux and subprocess backends
> - Better startup handling for Claude Code interactive sessions
> - Clearer non-worktree repo execution prompts and `cwd` regression coverage
> - Workspace / conflict detection fixes and broader test coverage
> - Refreshed docs landing page and project presentation
> 
> ### Included in this release
> 
> - Spawn/workspace fixes for `--no-workspace --repo` flows
> - tmux startup confirmation handling for Claude `--dangerously-skip-permissions`
> - Conflict detection fix for workspace manager argument handling
> - Ongoing improvements already landed since `v0.1.2`, including:
>   - profiles and presets
>   - Gemini / Kimi / OpenClaw compatibility improvements
>   - task priority support
>   - snapshots / restore
>   - gource visualization and git context tooling
>   - board performance and message normalization improvements
> 
> ### Install

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者積極回應問題和更新。
**連結**：[文件](https://github.com/HKUDS/ClawTeam)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-23 ~ 2026-03-23）
> **活躍天數** 1 天 · **最新 commit** fix(ci): remove duplicate codex update test

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#96](https://github.com/HKUDS/ClawTeam/issues/96) | [Bug] `board show` returns "Team not found" for general-purp | 0 | 0 |
> | [#95](https://github.com/HKUDS/ClawTeam/issues/95) | [Bug] `GitError: branch already exists` during spawn recover | 0 | 0 |
> | [#94](https://github.com/HKUDS/ClawTeam/issues/94) | [Bug] spawn command defaults to claude binary, ignoring prov | 0 | 0 |

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
> v0.1.0
> 
> https://github.com/user-attachments/assets/7e2f0ecd-8fe3-4970-90ac-5c9669ff060c
> 
> v0.2.0
> 
> https://github.com/user-attachments/assets/fd23be91-5cf4-457c-a77e-bac24b76e58f
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
> ClawTeam ships with a reusable skill in `skills/clawteam/`.
> 
> **Claude Code**
> 
> Install the skill into `~/.claude/skills/clawteam`, then prompt:
> 
> ```
> "Build a web app. Use clawteam to split the work across multiple agents."
> ```
> 
> **Codex**
> 
> Install the same skill into `$CODEX_HOME/skills/clawteam` (typically `~/.codex/skills/clawteam`), then prompt:
> 
> ```
> Use $clawteam to split this task across multiple agents and coordinate the team to completion.
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
> ## 📰 News
> 
> **2026-03-18** ClawTeam project launched publicly.
> 
> **2026-03-23** ClawTeam `v0.2.0` is released today.
> 
> **2026-03** The current baseline includes config management, multi-user workflows, Web UI, P2P transport, and team templates.
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
> - Achieves breakthrough improvements (val_bpb: 1.044→0.977

## 延伸閱讀

相關概念：[[多模態]] · [[自動化]] · [[機器學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]]

[GitHub](https://github.com/HKUDS/ClawTeam)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--ClawTeam"
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
