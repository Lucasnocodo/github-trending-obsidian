---
repo: HKUDS/OpenSpace
url: https://github.com/HKUDS/OpenSpace
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving\" -- Community: https://open-space.cloud/"
homepage: ""
stars: 883
stars_per_day: 883
forks: 92
open_issues: 5
created: 2026-03-24
pushed_at: 2026-03-25
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "讓 AI 代理自動進化，提升效能與降低成本。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-29"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 55416
readme_length: 9996
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:883"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "OpenSpace"
  - "HKUDS/OpenSpace"
  - "讓 AI 代理自動進化，提升效能與降低成本。"
---

# OpenSpace

**883** stars · **883** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--OpenSpace");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 讓 AI 代理自動進化，提升效能與降低成本。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (883 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在 AI 代理中實現自我進化但缺乏相關工具的開發者。
> **一句話重點** OpenSpace 的自我演化能力使其在 AI 代理領域中具備獨特的競爭優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenSpace");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "HKUDS--OpenSpace" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到一個能夠自我演化的 AI 代理，值得嘗試。

> [!abstract] 核心創新
> OpenSpace 的核心創新在於其自我演化的技能系統，能夠自動修復和優化代理的執行能力。

## 專案簡介

OpenSpace 是一個設計用來讓 AI 代理自我進化的框架，透過自動修復、改進和學習的技能系統，提升代理的效能和成本效益。用戶可以透過簡單的命令來安裝和啟動後端 API，例如使用 `openspace-dashboard --port 7788` 來啟動服務。這個系統的核心在於其自我演化的能力，能夠在使用過程中自動修正錯誤和優化成功的工作流程，這樣的設計使得每次執行都能讓代理變得更聰明。技術上，OpenSpace 使用了 Python 和多個依賴庫，如 Flask 和 Pydantic，來構建其後端服務，並且整合了多種工具以支持不同的操作環境。

與其他工具相比，OpenSpace 的自我演化能力使其在處理複雜任務時更具優勢，特別是在需要高效能和低成本的情境下。這個專案的效能數據顯示，與同樣的 LLM 模型相比，OpenSpace 在任務執行中能夠提高 4.2 倍的收入，並且在第二階段的 token 使用量減少了 45.9%。然而，這個專案目前仍在初期階段，社群活躍度不高，解決問題的速度較慢，可能會影響使用者的體驗。對於希望在 AI 代理中實現自我進化的開發者來說，OpenSpace 提供了一個有趣的解決方案，但在穩定性和社群支持方面仍需觀察其未來發展。

**技術棧**：`Flask` · `Pydantic` · `litellm` · `numpy`

## 重點功能

- 自我演化技能 — 能夠自動修復、改進和學習，提升代理的效能。
- 多平台支持 — 支援 Windows、macOS 和 Linux 環境，使用者可根據需求選擇適合的系統。
- 後端 API 啟動 — 使用 `openspace-dashboard --port 7788` 指令啟動後端服務，便於整合。
- 技能質量監控 — 追蹤技能表現、錯誤率和執行成功率，確保代理的穩定性。
- 社群技能分享 — 透過 [open-space.cloud](https://open-space.cloud) 瀏覽社群技能和演化歷程。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/HKUDS/OpenSpace.git && cd OpenSpace && pip install -e .
```
2. 啟動後端 API
```bash
openspace-dashboard --port 7788
```
3. 驗證安裝
```bash
openspace-mcp --help
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 OpenSpace 並啟動後端 API",
  "指令": "openspace-dashboard --port 7788",
  "預期輸出": "啟動後端服務，並在指定端口上運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 883 stars（883/天），forks 92（10.4%），這顯示出強勁的初期吸引力。作者 HKUDS 團隊在 AI 和自動化領域有豐富的經驗，這個專案解決了現有 AI 代理在自我學習和進化方面的不足，之前的方案往往需要手動調整和優化。近期的推廣活動和社群討論可能也促進了這個專案的曝光。技術上，AI 代理的自我進化能力在當前市場中尚屬新穎，這使得 OpenSpace 在技術生態中具備了獨特的價值。forks/stars 比率為 10.4%，這意味著相對於觀望者，有相當比例的用戶在嘗試修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望在 AI 代理中實現自我進化但缺乏相關工具的開發者。

> [!example] 使用場景
> - AI 開發者用它來構建自我進化的代理，因為它能夠自動修復和優化技能，提升工作效率。
> - 企業內部團隊用它來自動化日常任務，因為其高效的技能演化能顯著降低人力成本。
> - 研究人員用它來探索 AI 代理的自我學習能力，因為它提供了一個開放的框架來測試和驗證各種技能。

## 架構分析

OpenSpace 採用模組化設計，核心由 Python 實現，並使用 Flask 作為後端框架，這使得其能夠在多平台上運行。資料流從用戶請求進入後端 API，經過技能演化系統進行處理，最終返回結果。這樣的設計允許靈活擴展和維護，但也可能導致初期配置較為複雜。選擇 Python 使得開發者能夠快速迭代，但在性能上可能不如某些編譯型語言。擴展性方面，隨著功能增多，可能會面臨性能瓶頸，特別是在高並發的情況下。

## 技術深入分析

OpenSpace 的核心技術機制在於其自我演化的技能系統，這個系統利用了多種演算法來實現技能的自動修復和優化。其後端使用 Flask 框架，能夠快速響應用戶請求，並且支援多種操作系統。效能方面，OpenSpace 在 GDPVal 基準測試中顯示出顯著的優勢，能夠在相同的 LLM 模型下提高 4.2 倍的收入。設計上，選擇 Python 作為開發語言使得開發過程更加靈活，但在性能上可能會受到限制。技術風險方面，隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，OpenSpace 能夠輕鬆與現有的 AI 工具鏈結合，但初期的配置可能需要較多的時間和精力。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但對於新手來說可能需要一些技術背景。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 自我演化能力強，能夠隨著使用不斷優化。
> - 多平台支持，適合不同操作系統的用戶。
> - 社群技能分享平台，能夠快速獲取和分享技能。

> [!danger] 缺點
> - 目前仍在 alpha 階段，功能不穩定。
> - 社群活躍度低，問題解決速度慢。
> - 需要一定的技術背景才能充分利用。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，功能和 API 可能不穩定。
> - 社群活躍度不高，解決問題的速度較慢。
> - 需要一定的技術背景才能充分利用自我演化功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | ClawTeam 提供了一個更專注於任務執行的框架，而 OpenSpace 更強調自我演化的能力。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的技能，而 OpenSpace 則是通用的自我演化框架。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於高效的數據同步，而 OpenSpace 則專注於 AI 代理的自我演化。 | 如果你的需求是高效的數據同步而非 AI 代理的進化，則應選擇 parsync。 | low，因為兩者的功能範圍不同，遷移不會涉及太多重複的邏輯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了更強的安全性和隱私保護，而 OpenSpace 更加關注於技能的自我演化。 | 如果你的應用場景需要高安全性和隱私保護，則應選擇 Shadowbroker。 | medium，因為需要重新設計部分功能以符合安全性要求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSpace** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於高效的數據同步，而 OpenSpace 則專注於 AI 代理的自我演化。 | Shadowbroker 提供了更強的安全性和隱私保護，而 OpenSpace 更加關注於技能的自我演化。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會涉及太多重複的邏輯。 | medium，因為需要重新設計部分功能以符合安全性要求。 |
> | 適用場景 | 主要場景 | 如果你的需求是高效的數據同步而非 AI 代理的進化，則應選擇 | 如果你的應用場景需要高安全性和隱私保護，則應選擇 Shado |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，適合用於探索和測試階段。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 啟動後端服務時可能會遇到命令未找到的錯誤
  - 解法：確保已正確安裝所有依賴，並檢查環境變數設定。
- [MEDIUM] 自我演化功能在某些情況下可能無法正常運作
  - 解法：定期檢查技能的質量監控報告，並手動調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望自動化日常任務 | 非常適合 | OpenSpace 的自我演化能力能夠隨著使用不斷優化。 |
| 大型企業需要穩定的 AI 代理系統 | 不適合 | 目前仍在 alpha 階段，功能不穩定。 |
| 研究機構希望探索 AI 代理的自我學習能力 | 適合 | 提供了一個開放的框架來測試和驗證各種技能。 |
| 需要高安全性和隱私保護的應用場景 | 不適合 | 目前的設計未專注於安全性和隱私保護。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到一個能夠自我演化的 AI 代理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenSpace 本身不需要高權限操作，但使用過程中可能會存取環境變數和 API 金鑰，需謹慎管理依賴。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
| Forks | 92 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-25 |
| 建立日期 | 2026-03-24 |
| Repo 大小 | 54.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenSpace) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `litellm` `python-dotenv` `openai` `jsonschema` `mcp` `anthropic` `pillow` `numpy` `colorama` `flask` `pyautogui` `pydantic` `requests`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 75
>     "TypeScript" : 20
>     "CSS" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xlrrrr](https://github.com/xlrrrr) | 7 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 2 |
> | [@Dennis-yxchen](https://github.com/Dennis-yxchen) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度不高，解決問題的速度較慢。
**連結**：[文件](https://open-space.cloud)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-24 ~ 2026-03-25）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/HKUDS/OpenSpace/issues/5) | Public clarification requested on substantial overlap with E | 0 | 0 |
> | [#3](https://github.com/HKUDS/OpenSpace/issues/3) | silent fail | 0 | 0 |
> | [#1](https://github.com/HKUDS/OpenSpace/issues/1) | openspace-dashboard --port 7788 提示未找到命令 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ## ✨ OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving ✨
> 
> | 🔋 **46% Fewer Tokens** | **💰 $11K earned in 6 Hours** | 🧬 **Self-Evolving Skills** | 🌐 **Agents Experience Sharing** |
> 
> [](https://modelcontextprotocol.io/)
> [](https://www.python.org/)
> [](https://opensource.org/licenses/MIT/)
> [](./COMMUNICATION.md)
> [](./COMMUNICATION.md)
> [](./README_CN.md)
> 
> **One Command to Evolve All Your AI Agents**: OpenClaw, nanobot, Claude Code, Codex, Cursor and etc.
> 
> ---
> 
> 
> ## ⚡ Quick Start
> 
> 🌐 **Just want to explore?** Browse community skills, evolution lineage at **[open-space.cloud](https://open-space.cloud)** — no installation needed.
> 
> ```bash
> git clone https://github.com/HKUDS/OpenSpace.git && cd OpenSpace
> pip install -e .
> openspace-mcp --help   # verify installation
> ```
> 
> **Choose your path:**
> - **[Path A](#-path-a-for-your-agent)** — Plug OpenSpace into your agent
> - **[Path B](#-path-b-as-your-co-worker)** — Use OpenSpace directly as your AI co-worker
> 
> 
> # Terminal 1. Start backend API
> openspace-dashboard --port 7788
> 
> 
> ## 🔧 Advanced Configuration
> 
> For most users, [Quick Start](#-quick-start) is all you need. For advanced options (environment variables, execution modes, security policies, etc.), see [`openspace/config/README.md`](openspace/config/README.md).
> 
> ---
> 
> 📖 Code Structure
> 
> > **Legend**: ⚡ Core modules &nbsp;|&nbsp; 🧬 Skill evolution &nbsp;|&nbsp; 🌐 Cloud &nbsp;|&nbsp; 🔧 Supporting modules
> 
> ```
> OpenSpace/
> ├── openspace/
> │   ├── tool_layer.py                     # OpenSpace main class & OpenSpaceConfig
> │   ├── mcp_server.py                     # MCP Server (4 tools for your agent)
> │   ├── __main__.py                       # CLI entry point (python -m openspace)
> │   ├── dashboard_server.py               # Web dashboard API server
> │   │
> │   ├── ⚡ agents/                         # Agent System
> │   │   ├── base.py                       # Base agent class
> │   │   └── grounding_agent.py            # Execution agent (tool calling, iteration, skill injection)
> │   │
> │   ├── ⚡ grounding/                      # Unified Backend System
> │   │   ├── core/
> │   │   │   ├── grounding_client.py       # Unified interface across all backends
> │   │   │   ├── search_tools.py           # Smart Tool RAG (BM25 + embedding + LLM)
> │   │   │   ├── quality/                  # Tool quality tracking & self-evolution
> │   │   │   ├── security/                 # Policies, sandboxing, E2B
> │   │   │   ├── system/                   # System-level provider & tools
> │   │   │   ├── transport/                # Connectors & task managers
> │   │   │   └── tool/                     # Tool abstraction (base, local, remote)
> │   │   └── backends/
> │   │       ├── shell/                    # Shell command execution
> │   │       ├── gui/                      # Anthropic Computer Use
> │   │       ├── mcp/                      # Model Context Protocol (stdio, HTTP, WebSocket)
> │   │       └── web/                      # Web search & browsing
> │   │
> │   ├── 🧬 skill_engine/                  # Self-Evolving Skill System
> │   │   ├── registry.py                   # Discovery, BM25+embedding pre-filter, LLM selection
> │   │   ├── analyzer.py                   # Post-execution analysis (agent loop + tool access)
> │   │   ├── evolver.py                    # FIX / DERIVED / CAPTURED evolution (3 triggers)
> │   │   ├── patch.py                      # Multi-file FULL / DIFF / PATCH application
> │   │   ├── store.py                      # SQLite persistence, version DAG, quality metrics
> │   │   ├── skill_ranker.py               # BM25 + embedding hybrid ranking
> │   │   ├── retrieve_tool.py              # Skill retrieval tool for agents
> │   │   ├── fuzzy_match.py                # Fuzzy matching for skill discovery
> │   │   ├── conversation_formatter.py     # Format execution history for analysis
> │   │   ├── skill_utils.py                # Shared skill utilities
> │   │   └── types.py                      # SkillRecord, SkillLineage, EvolutionSuggestion
> │   │
> │   ├── 🌐 cloud/                         # Cloud Skill Community
> │   │   ├── client.py                     # HTTP client (upload, download, search)
> │   │   ├── search.py                     # Hybrid search engine
> │   │   ├── embedding.py                  # Embedding generation for skill search
> │   │   ├── auth.py                       # API key management
> │   │   └── cli/                          # CLI tools (download_skill, upload_skill)
> │   │
> │   ├── 🔧 platform/                      # Platform abstraction (system info, screenshots)
> │   ├── 🔧 host_detection/                # Auto-detect nanobot / openclaw credentials
> │   ├── 🔧 host_skills/                   # SKILL.md definitions for agent integration
> │   │   ├── delegate-task/SKILL.md        # Teaches agent: execute, fix, upload
> │   │   └── skill-discovery/SKILL.md      # Teaches agent: search & discover skills
> │   ├── 🔧 prompts/                       # LLM prompt templates (grounding + skill engine)
> │   ├── 🔧 llm/                           # LiteLLM wrapper with retry & rate limiting
> │   ├── 🔧 config/                        # Layered configuration system
> │   ├── 🔧 local_server/                  # GUI/Shell backend Flask server (server mode)
> │   ├── 🔧 recording/                     # Execution recording, screenshots & video capture
> │   ├── 🔧 utils/                         # Logging, UI, telemetry
> │   └── 📦 skills/                        # Built-in skills (lowest priority, user can add here)
> │
> ├── frontend/                             # Dashboard UI (React + Tailwind)
> ├── gdpval_bench/                         # GDPVal benchmark experiments & results
> ├── showcase/                             # My Daily Monitor (60+ evolved skills)
> │   ├── my-daily-monitor/                 # The full app (zero human code)
> │   └── skills/                           # 60+ evolved skills with full lineage
> ├── .openspace/                           # Runtime: embedding cache + skill DB
> └── logs/                                 # Execution logs & recordings
> ```
> 
> ---
> 
> 
> ## 📈 Benchmark: GDPVal
> 
> We evaluate OpenSpace on [GDPVal](https://huggingface.co/datasets/openai/gdpval) — 220 real-world professional tasks spanning 44 occupations — using the [ClawWork](https://github.com/HKUDS/ClawWork) evaluation protocol with identical productivity tools and LLM-based scoring. Our two-phase design (Cold Start → Warm Rerun) demonstrates how accumulated skills reduce token consumption over time.
> 
> Fair Benchmark: OpenSpace uses Qwen 3.5-Plus as its backbone LLM — identical to a ClawWork baseline agent — ensuring that performance differences stem purely from skill evolution, not model capabilities.
> 
> Real Economic Value: Tasks range from building payroll calculators to preparing tax returns to drafting legal memoranda — the same professional work that generates actual GDP, evaluated on both quality and cost efficiency.
> 
> - **4.2× Higher Income** vs ClawWork with the same backbone LLM (Qwen 3.5-Plus)
> - **72.8% Value Capture** — $11,484 earned out of $15,764 task value, outperforming all agents
> - **70.8% Average Quality** — +30pp above the best ClawWork agent (40.8%)
> − **45.9% Token Usage** in Phase 2 vs Phase 1 — better results with dramatically lower costs
> 
> 
> ## 🎯 Where Evolution Delivers Maximum Impact — And Why:
> 
> | Category | Income Δ | Token Δ | Why |
> |---|---|---|---|
> | **📝 Documents & Correspondence** (7) | 71→74% (+3.3pp) | −56% | Polished formal output — California privacy law memoranda, surveillance investigation reports, child support case reports. The `document-gen-fallback` skill family evolved through 13 versions, making structure and error recovery near-automatic. |
> | **📋 Compliance & Form** (11) | 51→70% (+18.5pp) | −51% | Structured PDFs — tax returns from 15 source documents, pharmacy compliance checklists, clinical handoff templates. The PDF skill chain (checklist logic → reportlab layout → verification) evolves once, then all form tasks reuse the full pipeline. |
> | **🎬 Media Production** (3) | 53→58% (+5.8pp) | −46% | A

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[Agent 框架]]

相關專案：[[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]] · [[karpathy--autoresearch|karpathy/autoresearch]]

[GitHub](https://github.com/HKUDS/OpenSpace)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "HKUDS--OpenSpace"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "HKUDS--OpenSpace"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--OpenSpace" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "HKUDS--OpenSpace"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","Agent 框架"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--OpenSpace" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--OpenSpace" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--OpenSpace"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
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
> const me = dv.page("Repos/HKUDS--OpenSpace");
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

> **2026-03-26** — 首次收錄
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

- [[2026-03-26|2026-03-26]] — 首次收錄，883 stars
