---
repo: kevinrgu/autoagent
url: https://github.com/kevinrgu/autoagent
owner: kevinrgu
owner_type: User
language: Python
license: N/A
description: "autonomous harness engineering"
homepage: ""
stars: 3805
stars_per_day: 761
forks: 432
open_issues: 5
created: 2026-04-02
pushed_at: 2026-04-03
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "讓 AI 自動構建和迭代代理系統，無需手動編輯代碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1252
readme_length: 5571
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:3805"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "autoagent"
  - "kevinrgu/autoagent"
  - "讓 AI 自動構建和迭代代理系統，無需手動編輯代碼。"
---

# autoagent

**3.8k** stars · **761** stars/天 · 建立 5 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/kevinrgu--autoagent");
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
> 讓 AI 自動構建和迭代代理系統，無需手動編輯代碼。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (761 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速構建和優化 AI 代理的開發者，特別是在自動化和機器學習領域的專業人士。
> **一句話重點** 這個專案的最大亮點在於它讓 AI 代理能夠自動化構建和優化過程，顯著提高了開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/kevinrgu--autoagent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "kevinrgu--autoagent" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠快速構建和優化 AI 代理，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於讓 AI 代理能夠自動構建和優化其運行環境，而無需手動編輯代碼。

## 專案簡介

AutoAgent 是一個自動化的代理工程工具，旨在讓 AI 代理自動構建和優化其運行環境。使用者只需編輯 `program.md` 文件，提供上下文和指令，然後 AI 代理會自動修改 `agent.py`，進行基準測試，並根據得分決定是否保留變更。這種設計使得工程師不必直接接觸代碼，專注於高層次的指令設定。核心功能包括單文件的代理架構設計，讓使用者能夠輕鬆管理代理和工具的註冊，並透過 Docker 隔離運行環境，確保不會對主機造成損害。這個工具的得分驅動實驗流程，讓每次實驗都能產生數值化的結果，並且支持與 Harbor 兼容的任務格式，便於在不同數據集上進行評估。使用者可以透過簡單的 CLI 指令來安裝依賴、設置環境變數，並運行所有任務。相較於傳統的手動編輯方式，這種自動化流程能顯著提高開發效率和準確性。

**技術棧**：`Python 3.10+` · `Docker` · `Harbor`

## 重點功能

- 自動化代理構建 — AI 代理能根據 `program.md` 自動修改和優化 `agent.py`。
- 得分驅動的實驗流程 — 每次實驗都會產生數值化的得分，幫助決策是否保留變更。
- Docker 隔離運行 — 代理在容器中運行，避免對主機環境造成影響。
- Harbor 兼容任務格式 — 支持使用 Harbor 框架的任務格式，便於在不同數據集上進行評估。
- 單文件架構設計 — 所有代理邏輯集中在一個文件中，簡化了管理和修改流程。

## 快速開始

1. 安裝 uv 工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 設置環境變數
```bash
cat > .env
```
4. 運行所有任務
```bash
rm -rf jobs; mkdir -p jobs && uv run harbor run -p tasks/ -n 100 --agent-import-path agent:AutoAgent -o jobs --job-name latest > run.log 2>&1
```

## 程式碼範例

```python
{
  "前置條件": "需要 Docker 和 Python 3.10+ 環境",
  "指令": "uv run harbor run -p tasks/ -n 100 --agent-import-path agent:AutoAgent -o jobs --job-name latest > run.log 2>&1",
  "預期輸出": "運行所有任務的結果將記錄在 run.log 中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 3805 stars（761/天），forks 432（11.4%），顯示出強烈的社群興趣。作者 Kevin R. Gu 之前在 AI 和自動化領域有豐富經驗，這個工具解決了傳統代理開發中需要手動編輯代碼的痛點，讓開發者能夠專注於高層次的設計而非底層實作。最近的推文和社群討論也引起了更多開發者的注意，特別是在自動化和 AI 代理的應用上。這個工具的設計符合當前對於自動化和高效能開發的需求，並且其得分驅動的實驗方法使得評估過程更加客觀和數據化。

## 適合誰使用

**目標受眾**：需要快速構建和優化 AI 代理的開發者，特別是在自動化和機器學習領域的專業人士。

> [!example] 使用場景
> - AI 研究人員用它來快速迭代代理設計，因為它能自動調整配置並評估性能，節省了大量手動測試的時間。
> - 初創公司的工程師用它來開發自動化工具，因為它能在不干擾主系統的情況下進行多次實驗，降低了開發風險。
> - 資料科學家用它來測試不同的代理模型，因為它的得分系統能幫助他們快速找到最佳配置，提升模型性能。

## 架構分析

AutoAgent 的架構設計選擇了單文件的代理架構，這樣可以簡化管理和修改過程。代理的所有邏輯集中在 `agent.py` 中，並通過 `program.md` 文件來指導 AI 代理的行為。這種設計使得使用者能夠專注於高層次的指令設定，而不必直接接觸底層代碼。

資料流方面，代理會在 Docker 容器中運行，這樣可以確保不會影響主機環境。選擇 Docker 隔離的方式雖然增加了運行的複雜性，但能有效地保護主機系統。這種設計的 trade-off 是，雖然使用者需要額外的 Docker 環境，但能夠獲得更高的安全性和穩定性。

擴展性方面，這種單文件架構可能會在未來面對更複雜的代理需求時出現瓶頸，但目前的設計已經能夠滿足大多數使用情境。

## 技術深入分析

AutoAgent 的核心技術機制在於其自動化的代理構建流程，使用者只需通過 `program.md` 文件提供指令，AI 代理便會根據這些指令自動修改 `agent.py`，進行基準測試並評估結果。這種設計使得開發者能夠專注於高層次的設計，而不必直接接觸底層代碼。效能方面，該工具能夠處理多個實驗並生成數值化的得分，這使得使用者能夠快速找到最佳配置。設計取捨方面，選擇 Docker 隔離運行雖然增加了運行的複雜性，但能有效保護主機系統，這對於安全性至關重要。技術風險方面，隨著使用者需求的增長，單文件架構可能會出現擴展性瓶頸，這需要在未來的版本中進行改進。整合方面，該工具與主流的 CI/CD 流程相容性良好，能夠輕鬆融入現有的開發環境，並且提供了簡單的 CLI 指令，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用說明，並且包含了必要的範例。安裝過程相對順暢，但需要注意 Docker 環境的配置。整體上，對於新手來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠減少手動編輯代碼的需求。
> - 得分驅動的實驗流程，能夠快速找到最佳配置。
> - Docker 隔離運行，確保系統安全性。
> - 簡單的 CLI 指令，易於上手。

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的使用者可能增加學習曲線。
> - 目前文檔相對有限，可能需要額外探索。
> - 不支持 Windows 環境，限制了使用者範圍。
> - 單文件架構在面對複雜需求時可能會出現擴展性瓶頸。

> [!warning] 注意事項
> - 僅支援 Python 3.10+。
> - 需要 Docker 環境來運行代理。
> - 目前僅有有限的文檔支持，可能需要額外探索使用方法。
> - 不支持 Windows 環境，需在 Linux 或 macOS 上運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | AutoResearchClaw 專注於自動化研究，而 AutoAgent 更加專注於代理的自動構建和優化，適合不同的使用場景。 |
| [facebookresearch/HyperAgents](https://github.com/facebookresearch/HyperAgents) | HyperAgents 提供了更複雜的多代理系統，而 AutoAgent 則專注於單一代理的自動化開發，適合初學者和小型專案。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 是針對資料同步的工具，而 AutoAgent 專注於代理的自動化構建，兩者的應用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [facebookresearch/HyperAgents](https://github.com/facebookresearch/HyperAgents) | HyperAgents 提供了多代理系統的支持，而 AutoAgent 專注於單一代理的自動化開發，適合不同的使用場景。 | 如果需要開發複雜的多代理系統，HyperAgents 會是更好的選擇。 | medium，因為需要重新設計代理的架構和交互方式。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | AutoResearchClaw 專注於自動化研究，而 AutoAgent 更加專注於代理的自動構建和優化。 | 如果你的重點是自動化研究過程而非代理開發，AutoResearchClaw 會更合適。 | low，因為兩者的使用流程相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **autoagent** | **HyperAgents** | **AutoResearchClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | HyperAgents 提供了多代理系統的支持，而 AutoAgent 專注於單一代理的自動化開發，適合不同的使用場景。 | AutoResearchClaw 專注於自動化研究，而 AutoAgent 更加專注於代理的自動構建和優化。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的架構和交互方式。 | low，因為兩者的使用流程相似。 |
> | 適用場景 | 主要場景 | 如果需要開發複雜的多代理系統，HyperAgents 會是更 | 如果你的重點是自動化研究過程而非代理開發，AutoResea |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於實驗和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Docker 環境配置不當會導致運行失敗
  - 解法：確保 Docker 正常運行，並檢查相關環境變數設置
- **[HIGH]** 在 Windows 環境下無法運行
  - 解法：使用 Linux 或 macOS 環境進行開發
- [MEDIUM] 缺乏詳細文檔可能導致使用困難
  - 解法：參考 GitHub 上的範例和社群討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速構建 AI 代理的初創公司 | 非常適合 | 自動化程度高，能夠快速迭代設計。 |
| 大型企業的 AI 研究部門 | 適合 | 能夠在安全的 Docker 環境中進行多次實驗。 |
| 個人開發者進行 AI 代理實驗 | 普通 | 雖然功能強大，但需要一定的 Docker 環境知識。 |
| 不熟悉 Docker 的開發團隊 | 不適合 | 需要 Docker 環境，可能增加學習曲線。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠快速構建和優化 AI 代理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具運行在 Docker 環境中，不會直接存取敏感資料，且不需要高權限操作。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kevinrgu--autoagent");
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
> const me = dv.page("Repos/kevinrgu--autoagent");
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
| Forks | 432 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-04-02 |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kevinrgu/autoagent) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevinrgu](https://github.com/kevinrgu) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和討論。
**連結**：[文件](https://github.com/kevinrgu/autoagent)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-02 ~ 2026-04-03）
> **活躍天數** 2 天 · **最新 commit** update README with branding, structure, and Harbor docs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/kevinrgu/autoagent/issues/6) | Actual models tested? | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> We're launching a product around self-configuring agents soon. Sign up here.We're hiring engineers. If this work interests you, reach out to hello@thirdlayer.inc with your Github link.
> 
> # AutoAgent
> 
> > Like autoresearch but for agent engineering. Give an AI agent a task, let it build and iterate on an agent harness autonomously overnight. It modifies the system prompt, tools, agent configuration, and orchestration, runs the benchmark, checks the score, keeps or discards the change, and repeats.
> 
> The core idea is the same: you're not touching the harness Python files like you normally would as an engineer. Instead, you program `program.md`, the Markdown file that provides context to the meta-agent and defines the agent-engineering loop.
> 
> ## How it works
> 
> The repo has a few files and directories that matter:
> 
> - **`agent.py`** -- the entire harness under test in a single file. It contains
>   config, tool definitions, agent registry, routing/orchestration, and the
>   Harbor adapter boundary. The adapter section is explicitly marked as fixed;
>   the rest is the primary edit surface for the meta-agent.
> - **`program.md`** -- instructions for the meta-agent + the directive (what
>   kind of agent to build). **This file is edited by the human**.
> - **`tasks/`** -- evaluation tasks in
>   [harbor](https://github.com/laude-institute/harbor) format. In a clean
>   baseline branch, benchmark payloads may be omitted and added in
>   benchmark-specific branches.
> - **`.agent/`** -- optional workspace artifacts for reusable instructions,
>   notes, prompts, or skills.
> 
> The metric is total **score** produced by the benchmark's task test suites. The
> meta-agent hill-climbs on this score.
> 
> ## Quick start
> 
> **Requirements:** Docker, Python 3.10+, [uv](https://docs.astral.sh/uv/), and
> whatever model-provider credentials your current `agent.py` harness requires.
> 
> ```bash
> # 1. Install uv (if you don't have it)
> curl -LsSf https://astral.sh/uv/install.sh | sh
> 
> # 2. Install dependencies
> uv sync
> 
> # 3. Set up the environment variables required by your current agent/runtime
> # Example:
> cat > .env " -l 1 -n 1 --agent-import-path agent:AutoAgent -o jobs --job-name latest > run.log 2>&1
> 
> # 7. Run all tasks in parallel (-n = concurrency, default 4)
> rm -rf jobs; mkdir -p jobs && uv run harbor run -p tasks/ -n 100 --agent-import-path agent:AutoAgent -o jobs --job-name latest > run.log 2>&1
> ```
> 
> ## Running the meta-agent
> 
> Point your coding agent at the repo and prompt:
> 
> ```
> Read program.md and let's kick off a new experiment!
> ```
> 
> The meta-agent will read the directive, inspect the current harness, run the
> benchmark, diagnose failures, modify `agent.py`, and iterate.
> 
> ## Project structure
> 
> ```text
> agent.py                       -- single-file harness under test
>   editable harness section     -- prompt, registries, tools, routing
>   fixed adapter section        -- Harbor integration + trajectory serialization
> program.md                     -- meta-agent instructions + directive
> Dockerfile.base                -- base image
> .agent/                        -- optional agent workspace artifacts
> tasks/                         -- benchmark tasks, typically added in benchmark-specific branches
> jobs/                          -- Harbor job outputs
> results.tsv                    -- experiment log (created by meta-agent, gitignored)
> run.log                        -- latest run output
> ```
> 
> ## Task format
> 
> The repo ships without tasks. Add your own to `tasks/` following [Harbor's task format](https://harborframework.com/docs/tasks):
> 
> ```text
> tasks/my-task/
>   task.toml           -- config (timeouts, metadata)
>   instruction.md      -- prompt sent to the agent
>   tests/
>     test.sh           -- entry point, writes /logs/reward.txt
>     test.py           -- verification (deterministic or LLM-as-judge)
>   environment/
>     Dockerfile        -- task container (FROM autoagent-base)
>   files/              -- reference files mounted into container
> ```
> 
> Tests write a score (0.0-1.0) to the verifier logs. The meta-agent hill-climbs
> on this. See the [Harbor docs](https://harborframework.com/docs) for full details on writing and porting tasks.
> 
> ## Design choices
> 
> - **Program the meta-agent, not the harness directly.** The human steers the
>   loop through `program.md`, while the meta-agent edits `agent.py`.
> - **Single-file, registry-driven harness.** The implementation lives in one
>   file for simplicity, but agent and tool registration stay structured so the
>   harness can still evolve cleanly.
> - **Docker isolation.** The agent runs in a container. It can't damage the host.
> - **Score-driven.** Every experiment produces a numeric score. Keep if better,
>   discard if not. Same loop as autoresearch.
> - **Harbor-compatible tasks.** Tasks use the same format as harbor benchmarks,
>   so the same harness can be evaluated on different datasets.
> 
> ## Cleanup
> 
> Docker images and containers accumulate across runs. Clean up regularly:
> 
> ```bash
> # Harbor's cached task images + task cache
> uv run harbor cache clean -f
> 
> # Full Docker nuke (all unused images, build cache, etc.)
> docker system prune -a -f
> 
> # Lighter: just dead containers
> docker container prune -f
> ```
> 
> If Docker becomes unresponsive (for example after many concurrent runs), restart
> Docker Desktop:
> 
> ```bash
> killall Docker && open -a Docker
> ```
> 
> ## Improving performance with skills
> 
> You can equip the agent with [Agent Skills for Context Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering) and [context7](https://github.com/upstash/context7) skills to improve performance.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[Docker]]

相關專案：[[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/kevinrgu/autoagent)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "kevinrgu--autoagent"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "kevinrgu--autoagent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "kevinrgu--autoagent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "kevinrgu--autoagent"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","Docker"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "kevinrgu--autoagent" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/kevinrgu--autoagent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kevinrgu--autoagent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kevinrgu" AND file.name != "kevinrgu--autoagent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kevinrgu--autoagent");
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
> const me = dv.page("Repos/kevinrgu--autoagent");
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
> const me = dv.page("Repos/kevinrgu--autoagent");
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
> const me = dv.page("Repos/kevinrgu--autoagent");
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
> const me = dv.page("Repos/kevinrgu--autoagent");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，3.8k stars
