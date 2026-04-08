---
repo: HKUDS/OpenHarness
url: https://github.com/HKUDS/OpenHarness
owner: HKUDS
owner_type: Organization
language: Python
license: MIT
description: "\"OpenHarness: Open Agent Harness\""
homepage: ""
stars: 7142
stars_per_day: 1190
forks: 1238
open_issues: 17
created: 2026-04-01
pushed_at: 2026-04-07
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "提供輕量級的代理基礎設施，支持多種工具和多代理協調。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "medium"
issue_close_rate: 41
repo_size_kb: 9469
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:7142"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "OpenHarness"
  - "HKUDS/OpenHarness"
  - "提供輕量級的代理基礎設施，支持多種工具和多代理協調。"
---

# OpenHarness

**7.1k** stars · **1.2k** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/HKUDS--OpenHarness");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供輕量級的代理基礎設施，支持多種工具和多代理協調。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速整合多個 LLM API 並希望進行實驗的開發者。
> **一句話重點** OpenHarness 不僅是一個工具，更是一個開放的實驗平台，讓開發者能夠探索和擴展 AI 代理的潛力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "HKUDS--OpenHarness" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 AI 代理開發平台，值得一試。

> [!abstract] 核心創新
> 提供了一個完整的代理基礎設施，支持多種工具和多代理協調。

## 專案簡介

OpenHarness 是一個開源的代理架構，旨在為開發者提供一個完整的基礎設施來運行和管理 AI 代理。用戶可以通過一個命令（`oh`）啟動 OpenHarness，並整合多種 CLI 代理，如 OpenClaw 和 Cursor。這個工具的核心功能包括流式工具調用循環、API 重試機制、並行工具執行以及成本追蹤，這些設計使得代理的運行更加高效和可靠。技術上，OpenHarness 使用 Python 和 TypeScript，並依賴於多個庫如 `anthropic` 和 `openai`，這使得它能夠與主流的 LLM API 兼容。與其他類似工具相比，OpenHarness 提供了更靈活的工作流配置選項，支持多種 API 格式，並能夠根據用戶需求動態加載技能和工具。

這使得它在需要快速適應不同 LLM 的場景中更具優勢。實際使用中，OpenHarness 需要 Python 3.10 以上和 Node.js 18 以上，並且能夠處理多個 API 鍵，這對於需要管理多個 LLM 的開發者來說非常方便。儘管目前仍在活躍開發中，社群的回應速度和問題解決率都顯示出良好的活躍度。這個專案適合對 AI 代理開發有興趣的開發者，尤其是那些希望在開發過程中進行實驗和擴展的使用者。

**技術棧**：`Python 3.10` · `TypeScript` · `Node.js 18`

## 重點功能

- 一鍵安裝 — 使用 `curl` 命令快速安裝 OpenHarness，支持 OS 檢測和依賴檢查。
- 流式工具調用循環 — 支持並行執行多個工具，提升效率。
- 多種 API 兼容性 — 支持 Anthropic 和 OpenAI 的多種 API 格式，方便用戶選擇。
- 動態技能加載 — 允許用戶根據需求加載和配置技能，靈活應對不同場景。
- 多代理協調 — 支持代理之間的協作和任務管理，適合複雜的工作流。

## 快速開始

1. 快速安裝 OpenHarness
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
```
2. 從源碼安裝
```bash
curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --from-source
```
3. 啟動 OpenHarness
```bash
oh
```

## 程式碼範例

```python
{
  "前置條件": "需要設置 ANTHROPIC_API_KEY 環境變數",
  "指令": "ANTHROPIC_API_KEY=your_key uv run oh -p \"Inspect this repository and list the top 3 refactors\"",
  "預期輸出": "返回檢查結果和建議的重構列表（推測）"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 7142 stars（1190/天），forks 1238（17.3%），顯示出強勁的增長勢頭。作者團隊由多位開源貢獻者組成，過去在 AI 和開源社群中有良好的聲譽。這個專案解決了多代理協調和工具整合的痛點，之前的工具往往缺乏靈活性和擴展性。近期的推廣活動和社群討論也促進了其曝光率，技術生態的變化使得這種開放式架構更具可行性。高達 17.3% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要快速整合多個 LLM API 並希望進行實驗的開發者。

> [!example] 使用場景
> - AI 研究者用它來快速整合多個 LLM API，因為它支持多種 API 格式和動態技能加載。
> - 開發者用它來構建自定義的 AI 代理，因為它提供了靈活的工作流配置和多代理協調功能。
> - 產品經理用它來測試不同的 AI 工具整合，因為它能夠快速部署和管理多個代理的環境。

## 架構分析

OpenHarness 採用模組化設計，核心是 Python 實現的代理架構，並使用 TypeScript 提供前端支持。這樣的設計使得用戶可以輕鬆擴展和自定義功能。資料流方面，代理通過 API 調用與 LLM 進行交互，並使用 `uv` 進行任務管理和執行。

選擇 Python 作為主要語言是因為其在 AI 領域的廣泛應用，而 TypeScript 則提供了更好的前端開發體驗。這樣的選擇使得整體架構既能保持靈活性又能確保性能。擴展性方面，使用插件系統支持動態加載技能和工具，但這也可能導致在某些情況下性能下降，特別是在大量插件同時運行時。

整體來看，這種架構設計適合快速迭代和實驗，但在大規模部署時可能需要進一步優化。

## 技術深入分析

OpenHarness 的核心技術在於其模組化的代理架構，使用 Python 和 TypeScript 進行開發。這種設計使得用戶可以輕鬆地擴展功能，並根據需求動態加載技能和工具。效能方面，OpenHarness 能夠處理多個並行的 API 請求，這對於需要高效能的 AI 應用來說至關重要。選擇 Python 是因為其在 AI 領域的廣泛應用，而 TypeScript 則提供了更好的前端開發體驗。

這樣的選擇使得整體架構既能保持靈活性又能確保性能。技術風險方面，隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在大量插件同時運行時。整合方面，OpenHarness 與主流的 CI/CD 工具兼容，並能夠輕鬆集成到現有的開發流程中，這使得它在開發團隊中具有很高的適用性。整體來看，這個專案在未來有潛力成為 AI 代理開發的重要工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但需要注意 Python 和 Node.js 的版本要求。文件中有基本的快速入門指南，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 靈活的工作流配置，支持多種 API 格式
> - 強大的多代理協調功能，適合複雜任務
> - 開源社群活躍，持續更新和改進

> [!danger] 缺點
> - 需要一定的技術背景才能充分利用
> - 目前功能仍在開發中，可能不穩定
> - 對於不熟悉 CLI 的用戶，學習曲線較陡

> [!warning] 注意事項
> - 需要 Python 3.10 以上和 Node.js 18 以上環境
> - 目前仍在開發中，可能存在不穩定的功能
> - 對於不熟悉 CLI 工具的用戶，學習曲線可能較陡峭

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 工具集成，但不支持多代理協調功能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能集成，功能範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的代理功能，但缺乏 OpenHarness 的靈活性和擴展性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw](https://github.com/FreedomIntelligence/OpenClaw) | 專注於醫療領域的技能集成，功能範圍較窄，無法支持多代理協調。 | 如果你的應用專注於醫療領域，且需要特定的醫療技能集成。 | medium，因為需要重新配置和適應不同的 API 格式。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的代理功能，但缺乏 OpenHarness 的靈活性和擴展性。 | 如果你的需求較為簡單，且不需要多代理協調功能。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenHarness** | **OpenClaw** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的技能集成，功能範圍較窄，無法支持多代理協調。 | 提供類似的代理功能，但缺乏 OpenHarness 的靈活性和擴展性。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應不同的 API 格式。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的應用專注於醫療領域，且需要特定的醫療技能集成。 | 如果你的需求較為簡單，且不需要多代理協調功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上安裝時可能會遇到依賴問題
  - 解法：確保所有依賴都已正確安裝，並檢查 Python 和 Node.js 版本
- [MEDIUM] CLI 命令可能不夠直觀，特別是對新手來說
  - 解法：參考官方文檔和範例，熟悉基本命令
- [MEDIUM] 在高負載下可能會出現性能瓶頸
  - 解法：考慮優化插件使用或減少同時運行的代理數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供靈活的 API 整合和多代理協調功能，適合小型團隊的需求。 |
| 大型企業的 AI 代理開發 | 普通 | 雖然功能強大，但目前仍在開發中，穩定性可能不足。 |
| 個人開發者的 AI 實驗項目 | 非常適合 | 開源且易於擴展，適合進行實驗和學習。 |
| 需要穩定商業應用的團隊 | 不適合 | 目前處於 alpha 階段，生產環境的穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 AI 代理開發平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 鍵來訪問 LLM。依賴鏈中有一些常見的庫，但沒有已知的供應鏈風險。在 CI/CD 中使用時，需確保 API 鍵的安全管理。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
| Forks | 1.2k |
| Open Issues | 17 |
| Issue 解決率 | 41% (12 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/HKUDS/OpenHarness) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "TypeScript" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjb-tech](https://github.com/tjb-tech) | 110 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 32 |
> | [@glitch-ux](https://github.com/glitch-ux) | 4 |
> | [@yohaann196](https://github.com/yohaann196) | 4 |
> | [@siaochuan](https://github.com/siaochuan) | 4 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題
**連結**：[文件](https://github.com/HKUDS/OpenHarness)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-07）
> **活躍天數** 1 天 · **最新 commit** fix(ui): avoid blocking paste and permission responses in terminal

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/HKUDS/OpenHarness/issues/18) | [Discussion] Run-level evidence layer: structured archive fo | 1 | 0 |
> | [#59](https://github.com/HKUDS/OpenHarness/issues/59) | [Feature]: Add visual feedback from the spawned agents (agen `enhancement` | 0 | 0 |
> | [#57](https://github.com/HKUDS/OpenHarness/issues/57) | [Feature]: Add double-Esc to clear text from console `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; oh — OpenHarness: Open Agent Harness
> 
>   English ·
>   简体中文
> 
> **OpenHarness** delivers core lightweight agent infrastructure: tool-use, skills, memory, and multi-agent coordination.
> 
> **Join the community**: contribute **Harness** for open agent development.
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
>   
>   
> 
> One Command (**oh**) to Launch **OpenHarness** and Unlock All Agent Harnesses. 
> 
> Supports CLI agent integration including OpenClaw, nanobot, Cursor, and more.
> 
>   
> 
>   
> 
> ---
> 
> ## 🚀 Quick Start
> 
> 
> ### One-Click Install
> 
> The fastest way to get started — a single command handles OS detection, dependency checks, and installation:
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash
> ```
> 
> **Options:**
> 
> | Flag | Description |
> |------|-------------|
> | `--from-source` | Clone from GitHub and install in editable mode (`pip install -e .`) |
> | `--with-channels` | Also install IM channel dependencies (`slack-sdk`, `python-telegram-bot`, `discord.py`) |
> 
> ```bash
> 
> # Install from source (for contributors / latest code)
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --from-source
> 
> 
> # Install with IM channel support
> curl -fsSL https://raw.githubusercontent.com/HKUDS/OpenHarness/main/scripts/install.sh | bash -s -- --with-channels
> 
> 
> ### Prerequisites
> 
> - **Python 3.10+** and [uv](https://docs.astral.sh/uv/)
> - **Node.js 18+** (optional, for the React terminal UI)
> - An LLM API key
> 
> 
> ### Install & Run
> 
> ```bash
> 
> # Clone and install
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> 
> 
> # Development setup
> git clone https://github.com/HKUDS/OpenHarness.git
> cd OpenHarness
> uv sync --extra dev
> uv run pytest -q  # Verify everything works
> ```
> 
> Useful contributor entry points:
> 
> - [`CONTRIBUTING.md`](CONTRIBUTING.md) for setup, checks, and PR expectations
> - [`CHANGELOG.md`](CHANGELOG.md) for user-visible changes
> - [`docs/SHOWCASE.md`](docs/SHOWCASE.md) for real-world usage patterns worth documenting
> 
> ---
> 
> 
> ### One-Command Demo
> 
> ```bash
> ANTHROPIC_API_KEY=your_key uv run oh -p "Inspect this repository and list the top 3 refactors"
> ```
> 
> 
> # Example: use Kimi as the backend
> export ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic
> export ANTHROPIC_API_KEY=your_kimi_api_key
> export ANTHROPIC_MODEL=kimi-k2.5
> 
> 
> ## ✨ OpenHarness's Key Harness Features
> 
> 🔄 Agent Loop
> 
>   
> 
> • Streaming Tool-Call Cycle
> • API Retry with Exponential Backoff
> • Parallel Tool Execution
> • Token Counting & Cost Tracking
> 
> 🔧 Harness Toolkit
> 
>   
> 
> • 43 Tools (File, Shell, Search, Web, MCP)
> • On-Demand Skill Loading (.md)
> • Plugin Ecosystem (Skills + Hooks + Agents)
> • Compatible with anthropics/skills & plugins
> 
> 🧠 Context & Memory
> 
>   
> 
> • CLAUDE.md Discovery & Injection
> • Context Compression (Auto-Compact)
> • MEMORY.md Persistent Memory
> • Session Resume & History
> 
> 🛡️ Governance
> 
>   
> 
> • Multi-Level Permission Modes
> • Path-Level & Command Rules
> • PreToolUse / PostToolUse Hooks
> • Interactive Approval Dialogs
> 
> 🤝 Swarm Coordination
> 
>   
> 
> • Subagent Spawning & Delegation
> • Team Registry & Task Management
> • Background Task Lifecycle
> • ClawTeam Integration (Roadmap)
> 
> ---
> 
> 
> ## ✨ Features
> 
> 
> ### Configure A Workflow
> 
> Use the unified setup flow instead of manually thinking about `auth -> provider -> model`:
> 
> ```bash
> uv run oh setup
> ```
> 
> `oh setup` walks through:
> 
> 1. Choose a workflow:
>    - `Anthropic-Compatible API`
>    - `Claude Subscription`
>    - `OpenAI-Compatible API`
>    - `Codex Subscription`
>    - `GitHub Copilot`
> 2. For compatible API families, choose a concrete backend preset
> 3. If needed, authenticate the selected workflow
> 4. Pick or confirm the model
> 5. Save and activate the profile
> 
> Compatible API families currently guide you through presets such as:
> 
> - `Anthropic-Compatible API`:
>   - Claude official
>   - Moonshot / Kimi
>   - Zhipu / GLM
>   - MiniMax
> - `OpenAI-Compatible API`:
>   - OpenAI official
>   - OpenRouter
> 
> Arbitrary compatible endpoints are still supported through advanced profile commands:
> 
> ```bash
> oh provider add my-endpoint \
>   --label "My Endpoint" \
>   --provider anthropic \
>   --api-format anthropic \
>   --auth-source anthropic_api_key \
>   --model my-model \
>   --base-url https://example.com/anthropic
> ```
> 
> OpenHarness stores API-key-backed compatible profiles with profile-scoped credentials when appropriate, so different compatible endpoints do not have to share one global key.
> 
>   
> 
> 
> ### Compatible API Families
> 
> #### Anthropic-Compatible API
> 
> Typical examples:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **Claude official** | `https://api.anthropic.com` | `claude-sonnet-4-6`, `claude-opus-4-6` |
> | **Moonshot / Kimi** | `https://api.moonshot.cn/anthropic` | `kimi-k2.5` |
> | **Zhipu / GLM** | custom Anthropic-compatible endpoint | `glm-4.5` |
> | **MiniMax** | custom Anthropic-compatible endpoint | `minimax-m1` |
> 
> #### OpenAI-Compatible API
> 
> Any provider implementing the OpenAI `/v1/chat/completions` style API works:
> 
> | Backend | Base URL | Example models |
> |---------|----------|----------------|
> | **OpenAI** | `https://api.openai.com/v1` | `gpt-5.4`, `gpt-4.1` |
> | **OpenRouter** | `https://openrouter.ai/api/v1` | provider-specific |
> | **Alibaba DashScope** | `https://dashscope.aliyuncs.com/compatible-mode/v1` | `qwen3.5-flash`, `qwen3-max`, `deepseek-r1` |
> | **DeepSeek** | `https://api.deepseek.com` | `deepseek-chat`, `deepseek-reasoner` |
> | **GitHub Models** | `https://models.inference.ai.azure.com` | `gpt-4o`, `Meta-Llama-3.1-405B-Instruct` |
> | **SiliconFlow** | `https://api.siliconflow.cn/v1` | `deepseek-ai/DeepSeek-V3` |
> | **Groq** | `https://api.groq.com/openai/v1` | `llama-3.3-70b-versatile` |
> | **Ollama (local)** | `http://localhost:11434/v1` | any local model |
> 
> 
> ### GitHub Copilot Format (`--api-format copilot`)
> 
> Use your existing GitHub Copilot subscription as the LLM backend. Authentication uses GitHub's OAuth device flow — no API keys needed.
> 
> ```bash
> 
> # Configure gateway channels and pick a provider profile
> ohmo config
> 
> 
> ## 🤔 What is an Agent Harness?
> 
> An **Agent Harness** is the complete infrastructure that wraps around an LLM to make it a functional agent. The model provides intelligence; the harness provides **hands, eyes, memory, and safety boundaries**.
> 
>   
> 
> OpenHarness is an open-source Python implementation designed for **researchers, builders, and the community**:
> 
> - **Understand** how production AI agents work under the hood
> - **Experiment** with cutting-edge tools, skills, and agent coordination patterns
> - **Extend** the harness with custom plugins, providers, and domain knowledge
> - **Build** specialized agents on top of proven architecture
> 
> ---
> 
> 
> ## 📰 What's New
> 
> - **2026-04-06** 🚀 **v0.1.2** — Unified setup flows and `ohmo` personal-agent app:
>   - `oh setup` now guides provider selection as workflows instead of exposing raw auth/provider internals
>   - Compatible API setup is now profile-scoped, so Anthropic/OpenAI-compatible endpoints can keep separate keys
>   - `ohmo` ships as a packaged app with `~/.ohmo` workspace, gateway, bootstrap prompts, and channel config flow
> - **2026-04-01** 🎨 **v0.1.0** — Initial **OpenHarness** open-source release featuring complete Harness architecture: 
> 
>   Start here:
>   Quick Start ·
>   Provider Compatibility ·
>   Showcase ·
>   Contributing ·
>   Changelog
> 
> ---
> 
> 
> # Or run locally after cloning
> bash scripts/install.sh --from-source --with-channels
> ```
> 
> The script will:
> 1. Detect your OS (Linux / macOS / WSL)
> 2. Verify Python ≥ 3.10 and Node.js ≥ 18
> 3. Install OpenHarness via `pip`
> 4. Set up the React TUI (`npm install`) if Node.js is available
> 5. Create `~/.openharness/` config directory
> 6. Confirm with `oh --version`
> 
> 
> # Launch
> oh                    # if venv is activated
> uv run oh             # without activating venv
> ```
> 
> 
> ### Non-Interactive Mode (Pipes & Scripts)
> 
> ```bash
> 
> # Single prompt → stdout
> oh -p "Explain this codebase"
> 
> 
> # JSON output for programmatic use
> oh -p "List all functions in main.py

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[Agent 框架]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[NanmiCoder--claude-code-haha|NanmiCoder/claude-code-haha]]

[GitHub](https://github.com/HKUDS/OpenHarness)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "HKUDS--OpenHarness" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","多模態","Agent 框架"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "HKUDS--OpenHarness" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "HKUDS--OpenHarness" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "HKUDS" AND file.name != "HKUDS--OpenHarness"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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
> const me = dv.page("Repos/HKUDS--OpenHarness");
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

- [[2026-04-08|2026-04-08]] — 首次收錄，7.1k stars
