---
repo: HKUDS/OpenSpace
url: https://github.com/HKUDS/OpenSpace
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenSpace: Make Your Agents: Smarter, Low-Cost, Self-Evolving\" -- Community: https://open-space.cloud/"
homepage: ""
stars: 1473
stars_per_day: 491
forks: 166
open_issues: 27
created: 2026-03-24
pushed_at: 2026-03-27
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
use_case: "讓你的 AI 代理更聰明、低成本、自我進化。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-31"
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
star_history: "2026-03-26:883,2026-03-26:888,2026-03-27:1284,2026-03-28:1473"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "OpenSpace"
  - "HKUDS/OpenSpace"
  - "讓你的 AI 代理更聰明、低成本、自我進化。"
---

# OpenSpace

**888** stars · **888** stars/天 · 建立 1 天前 · Python · MIT

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
> 讓你的 AI 代理更聰明、低成本、自我進化。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (888 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要開發自我進化 AI 代理的工程師和研究人員。
> **一句話重點** OpenSpace 的自我進化能力讓每個代理在執行任務後都能持續變得更聰明和高效。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到持續進化的 AI 代理，值得一試。

> [!abstract] 核心創新
> OpenSpace 提供了一個自我進化的 AI 代理框架，能夠在每次任務執行後自動捕捉成功的工作流程。

## 專案簡介

OpenSpace 是一個自我進化的 AI 代理框架，旨在通過自動修復、自動改進和自動學習來提升代理的技能。用戶可以通過一條命令啟動所有 AI 代理的進化，並使用 `openspace-mcp` 指令來驗證安裝。這個工具的核心在於其技能演化系統，能夠在每次任務執行後自動捕捉成功的工作流程，並持續優化技能，這樣的設計使得每個失敗都能轉化為改進的機會。技術上，OpenSpace 使用了 Flask 作為後端 API 伺服器，並結合了多種 Python 庫來實現其功能，如 `litellm` 和 `numpy`。

與其他類似工具相比，如 EvoMap 和 Evolver，OpenSpace 提供了更強的自我進化能力，能夠在執行過程中自動調整技能，而這些工具則可能需要手動調整。實際使用中，OpenSpace 在 GDPVal 基準測試中表現出色，顯示出其在真實世界任務中的高效能和經濟價值，特別是在文檔和合規性任務中。這個工具適合需要高效能和持續改進的團隊，尤其是那些在 AI 代理開發上有需求的開發者。未來六個月內，預期 OpenSpace 將持續增強其社群功能和技能庫，進一步提升用戶體驗。

**技術棧**：`Flask` · `litellm` · `numpy`

## 重點功能

- 自我進化技能 — 能自動修復和改進自身技能，提升代理的學習能力。
- 一鍵啟動 — 使用 `openspace-mcp` 指令輕鬆啟動所有代理的進化。
- 後端 API 支持 — 使用 Flask 作為後端伺服器，方便集成和擴展。
- 技能質量監控 — 追蹤技能表現和錯誤率，確保技能持續優化。
- 社群技能分享 — 用戶可以在雲端社群中分享和獲取技能，促進合作。

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
  "前置條件": "已安裝 OpenSpace",
  "指令": "openspace-dashboard --port 7788",
  "預期輸出": "啟動後端 API 伺服器，並在指定端口提供服務。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 888 stars（888/天），forks 93（10.5%），這是相對較高的增長率。開發者 HKUDS 之前在 AI 代理領域有多個成功專案，這使得 OpenSpace 能夠迅速吸引使用者。這個專案解決了現有 AI 代理工具在技能自我進化方面的不足，提供了一個更為自動化的解決方案。社群的活躍度和對於技能演化的需求也促進了這個專案的快速成長。forks/stars 比率為 10.5%，顯示出有相當比例的用戶對此專案進行了實際的修改或擴展。

## 適合誰使用

**目標受眾**：需要開發自我進化 AI 代理的工程師和研究人員。

> [!example] 使用場景
> - AI 開發者用它來提升代理的自我學習能力，因為每次任務執行後都能自動捕捉成功模式，提升效率。
> - 企業團隊用它來自動化文檔生成，因為其在文檔任務中顯示出 71% 的收入增長和 56% 的令牌減少。
> - 教育機構用它來開發智能教學助手，因為其技能自我進化的特性能夠持續改善教學效果。

## 架構分析

OpenSpace 採用模組化架構，核心是自我進化的技能系統，能夠在執行過程中自動調整技能。後端使用 Flask 提供 API 支持，並結合多個 Python 庫來實現功能。資料流方面，技能的演化依賴於用戶的實際使用情況，這樣的設計使得每次失敗都能轉化為改進的機會。選擇 Flask 作為後端框架是因為其輕量和易於擴展，但這也意味著在高負載情況下可能會出現瓶頸。整體來看，這樣的架構設計使得 OpenSpace 能夠快速迭代和擴展。

## 技術深入分析

OpenSpace 的核心技術機制在於其自我進化的技能系統，這一系統能夠在每次任務執行後自動捕捉成功的工作流程，並持續優化技能。使用的演算法包括 BM25 和嵌入式向量搜索，這使得技能的檢索和匹配更為高效。效能方面，OpenSpace 在 GDPVal 基準測試中顯示出 4.2 倍的收入增長，並且在令牌使用上減少了 45.9%。選擇 Flask 作為後端框架是因為其輕量和易於擴展，但這也意味著在高負載情況下可能會出現瓶頸。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在技能演化過程中需要大量計算資源。整合方面，OpenSpace 與主流的 AI 框架如 TensorFlow 和 PyTorch 的整合難度較低，適合快速部署和擴展。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程順暢，但對於新手可能有一定的學習曲線；有良好的入門指南，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 自我進化能力強，能夠自動學習和改進技能。
> - 社群分享功能促進合作和技能擴展。
> - 使用簡單，快速啟動和驗證安裝。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 支援有限。
> - 需要安裝多個依賴，對新手有一定挑戰。
> - 社群活躍度尚需提升，部分功能可能缺乏即時支援。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 支援仍在開發中。
> - 需要安裝多個 Python 依賴，對於新手可能有一定學習曲線。
> - 社群活躍度尚需提升，部分功能可能缺乏即時支援。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/ClawTeam](https://github.com/HKUDS/ClawTeam) | ClawTeam 提供了一個集成的 AI 代理平台，但缺乏 OpenSpace 的自我演化能力，適合需要快速部署的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療領域的技能，但不具備 OpenSpace 的通用性和自我進化特性。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了一個強大的代理框架，但在技能自我學習和演化方面不如 OpenSpace 靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| EvoMap | EvoMap 提供了一個類似的自我進化框架，但不如 OpenSpace 的自動學習和改進能力強。 | 如果你的團隊需要一個簡單的自我進化框架，EvoMap 可能是更好的選擇。 | medium，因為需要重新適配技能和工作流程。 |
| Evolver | Evolver 專注於特定任務的演化，但在通用性上不如 OpenSpace。 | 如果你的需求是針對特定任務的演化，Evolver 可能更合適。 | high，因為需要重新設計整個技能系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSpace** | **EvoMap** | **Evolver** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | EvoMap 提供了一個類似的自我進化框架，但不如 OpenSpace 的自動學習和改進能力強。 | Evolver 專注於特定任務的演化，但在通用性上不如 OpenSpace。 |
> | 遷移成本 | - | medium，因為需要重新適配技能和工作流程。 | high，因為需要重新設計整個技能系統。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個簡單的自我進化框架，EvoMap 可能是 | 如果你的需求是針對特定任務的演化，Evolver 可能更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Linux 發行版上安裝依賴時可能會出現問題
  - 解法：確保所有系統依賴都已安裝
- [MEDIUM] 技能演化過程中可能會出現性能瓶頸
  - 解法：在高負載情況下考慮擴展伺服器資源
- **[HIGH]** Windows 環境下的功能支持有限
  - 解法：使用 WSL 或考慮在 Linux 環境中運行

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發 AI 代理 | 非常適合 | 自我進化能力能夠快速提升代理的效能和效率。 |
| 大型企業的核心業務系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 教育機構開發智能教學助手 | 適合 | 能夠持續改進教學效果，適合教育場景。 |
| 需要快速部署的 AI 解決方案 | 普通 | 雖然使用簡單，但仍需考慮依賴安裝的挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到持續進化的 AI 代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenSpace 本身不需要高權限，並且不存取敏感資料；依賴鏈的信任程度較高，但仍需注意外部依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenSpace 最常與 Flask 和其他 Python 庫搭配使用，通常在開發和部署階段進行整合。在一個使用 Flask 的專案中，你可以用 OpenSpace 來自動化任務，具體做法是通過 `openspace-dashboard` 啟動後端，並使用 API 進行交互。支援 GitHub Actions 進行 CI/CD 流程，並且與 VS Code 有良好的整合。整合的摩擦點主要在於依賴的安裝和配置，這可能會對新手造成困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenSpace 出現之前，AI 代理的自我學習和演化通常需要手動調整，這導致了效率低下和高成本。隨著機器學習技術的進步，特別是在自動化和自我學習領域，OpenSpace 提供了一個更為自動化的解決方案。這個工具代表了 AI 代理技術的未來趨勢，未來可能會有更多類似的自我進化工具出現，進一步提升 AI 的效能和應用範圍。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的 AI 代理概念
- 有一定的依賴管理經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 OpenSpace。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文件，並分享給團隊。第四週：在主產品的非核心模組中開始使用。

**成功指標**：任務完成時間減少 30%，代理的自我學習能力提升。

> [!warning] 退出計畫
> 所有設定和技能都以標準格式存儲，方便未來的遷移或替換。

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
| Forks | 93 |
| Open Issues | 8 |
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

**社群活躍度**：社群活躍度尚需提升，部分功能可能缺乏即時支援。
**連結**：[文件](https://open-space.cloud/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-24 ~ 2026-03-25）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/HKUDS/OpenSpace/issues/5) | Public clarification requested on substantial overlap with E | 0 | 0 |

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

相關概念：[[自動化]] · [[Agent 框架]] · [[機器學習]]

相關專案：[[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]]

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
> const concepts = ["自動化","Agent 框架","機器學習"];
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

- [[2026-03-28|2026-03-28]] — 再次上榜，1.5k stars
- [[2026-03-27|2026-03-27]] — 再次上榜，1.3k stars
- [[2026-03-26|2026-03-26]] — 首次收錄，883 stars
