---
repo: VoltAgent/awesome-codex-subagents
url: https://github.com/VoltAgent/awesome-codex-subagents
owner: VoltAgent
owner_type: Organization
language: N/A
license: MIT
description: "A collection of 130+ specialized Codex subagents covering a wide range of development use cases."
homepage: "https://github.com/VoltAgent/voltagent"
stars: 1843
stars_per_day: 614
forks: 151
open_issues: 0
created: 2026-03-17
pushed_at: 2026-03-20
first_seen: 2026-03-20
week: "2026-W12"
month: "2026-03"
category: "AI/ML"
subcategory: "Codex 子代理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-20
use_case: "提供超過 130 種專業的 Codex 子代理，涵蓋廣泛的開發用例。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-24"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 241
readme_length: 9984
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-20"
star_history: "2026-03-20:1509,2026-03-20:1514,2026-03-21:1841,2026-03-21:1843"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
  - "topic/ai_agents"
  - "topic/awesome_list"
  - "topic/chatgpt"
  - "topic/codex"
  - "topic/codex_skills"
aliases:
  - "awesome-codex-subagents"
  - "VoltAgent/awesome-codex-subagents"
  - "提供超過 130 種專業的 Codex 子代理，涵蓋廣泛的開發用例。"
---

# awesome-codex-subagents

**1.8k** stars · **614** stars/天 · 建立 3 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai-agents` `awesome-list` `chatgpt` `codex` `codex-skills` `codex-subagents` `subagents`

> [!summary] 一句話摘要
> 提供超過 130 種專業的 Codex 子代理，涵蓋廣泛的開發用例。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (614 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Codex 中使用專業化 AI 助手來提高開發效率的軟體工程師。
> **一句話重點** 這個專案的價值在於提供了一個靈活且專業的開發助手，能夠顯著提高開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Codex 子代理" && p.file.name !== "VoltAgent--awesome-codex-subagents" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Codex 子代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到顯著的開發效率提升，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個全面的 Codex 子代理集合，專門針對不同開發任務進行優化。

## 專案簡介

這個專案是一個 Codex 子代理的集合，包含超過 130 種專門針對開發任務的 AI 助手。用戶可以將這些子代理配置到 Codex 中，通過簡單的 `.toml` 文件來定義每個子代理的角色和功能。使用者只需將所需的 `.toml` 文件複製到指定的代理目錄，然後在提示中明確調用，這樣就能在開發過程中利用這些專門的子代理來提高效率。這些子代理的設計考慮到了不同的工作需求，並根據任務的複雜性自動選擇合適的模型，如 `gpt-5.4` 用於深度推理，`gpt-5.3-codex-spark` 用於快速掃描和輕量研究。這樣的設計使得開發者能夠根據具體情況選擇最佳的工具，從而提高開發效率和質量。整體來看，這個專案的賣點在於其靈活性和專業性，能夠針對特定的開發任務提供量身定制的解決方案。

## 重點功能

- 多種專業子代理 — 包含 130+ 種針對特定開發任務的子代理，適用於各種開發場景。
- 簡單的配置方式 — 使用 `.toml` 格式定義子代理，輕鬆集成到 Codex 中。
- 智能模型路由 — 根據任務自動選擇合適的 Codex 模型，平衡質量與成本。
- 沙盒模式控制 — 根據需要設定子代理的檔案系統訪問權限，確保安全性。
- 範例工作流程 — 提供多種實際的工作流程範例，幫助用戶快速上手。

## 快速開始

1. 克隆此倉庫
```bash
git clone https://github.com/VoltAgent/awesome-codex-subagents.git
```
2. 將所需的 `.toml` 文件複製到代理目錄
```bash
cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
```
3. 重新啟動或刷新 Codex 會話
```bash
# 根據需要進行操作
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝 Codex 並配置好代理目錄",
  "指令": "mkdir -p ~/.codex/agents\ncp categories/01-core-development/backend-developer.toml ~/.codex/agents/",
  "預期輸出": "將 `backend-developer` 子代理成功添加到 Codex 代理中"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1843 stars（614/天），forks 151（8.2%），顯示出強勁的增長勢頭。專案的主要貢獻者 necatiozmen 和 haoxianhan 在 AI 和開發工具領域有豐富的經驗，這使得他們能夠針對開發者的需求設計出這樣的工具。這個專案解決了開發過程中對於專業化工具的需求，之前開發者通常需要手動配置和調整各種工具，這個集合簡化了這一過程。社群的反饋和需求也促進了這個專案的快速成長，特別是在 AI 助手日益普及的背景下，這個工具的實用性愈發凸顯。

## 適合誰使用

**目標受眾**：需要在 Codex 中使用專業化 AI 助手來提高開發效率的軟體工程師。

> [!example] 使用場景
> - 後端工程師用它來自動化 PR 審查流程，因為可以同時調用多個子代理來檢查代碼的正確性和安全性。
> - 前端開發者用它來快速調查和修復 UI 問題，因為可以利用專門的 UI 修復代理來提供最小的安全補丁。
> - 全棧開發者用它來規劃和設計新功能，因為能夠調用多個專家代理來獲得全面的設計建議和行動計劃。

## 架構分析

這個專案的架構基於 Codex 的子代理系統，使用 `.toml` 格式來定義每個子代理的角色和功能。每個子代理都可以根據任務的需求自動選擇合適的模型，這樣的設計使得開發者能夠靈活應對不同的開發挑戰。這種架構的優勢在於它的可擴展性，開發者可以根據需要添加新的子代理。另一方面，這也帶來了一定的維護成本，因為每個子代理的配置和更新都需要手動進行。整體來看，這個架構在靈活性和專業性之間取得了良好的平衡。

## 技術深入分析

這個專案的核心技術機制是基於 Codex 的子代理系統，使用 `.toml` 格式來定義每個子代理的角色和功能。每個子代理都能根據任務的需求自動選擇合適的模型，這樣的設計使得開發者能夠靈活應對不同的開發挑戰。效能上，這些子代理能夠在短時間內提供專業的建議和解決方案，具體的性能數據在 README 中未提供，但從設計上看，這些子代理的運行效率應該是相對較高的。設計取捨方面，選擇使用 Codex 作為基礎，使得這個專案能夠利用 Codex 的強大能力，但同時也限制了其在其他 AI 平台上的應用。技術風險方面，隨著 Codex 的更新，這些子代理可能需要進行相應的調整，以保持其有效性。整合方面，這個專案能夠輕鬆與現有的開發工具鏈結合，特別是在使用 Codex 的環境中，能夠無縫集成到 CI/CD pipeline 中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程順暢，沒有明顯的坑。文件主要以英文撰寫，缺乏多語言支持，但基本概念易於理解。

## 優缺點分析

> [!success] 優點
> - 提供多種專業化的子代理，能夠針對特定任務進行優化。
> - 簡單的配置方式，方便開發者快速上手。
> - 智能模型路由，根據需求自動選擇最佳模型。

> [!danger] 缺點
> - 需要手動配置，對於新手可能有一定的學習曲線。
> - 目前僅支持 Codex 環境，無法在其他平台使用。
> - 可能需要隨著 Codex 更新而調整子代理配置。

> [!warning] 注意事項
> - 需要手動配置每個子代理，對於新手可能有一定的學習曲線。
> - 目前僅支持 Codex 環境，無法在其他 AI 平台上使用。
> - 子代理的功能和效果依賴於 Codex 的性能，若 Codex 更新，可能需要調整子代理配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不專注於開發任務的專業化子代理。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音和語言處理，與本專案的開發專業化方向不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供安全性分析工具，但不具備多種專業子代理的靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步功能，與本專案的開發專業化方向不同。 | 如果你的需求主要是文件同步而非開發任務的專業化助手。 | low，因為兩者的功能範圍不同，遷移不會很複雜。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於語音和語言處理，無法提供開發任務的專業化支持。 | 如果你的工作重心在語音處理或自然語言處理領域。 | medium，因為需要重新適應不同的工具和工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-codex-subagents** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步功能，與本專案的開發專業化方向不同。 | 專注於語音和語言處理，無法提供開發任務的專業化支持。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會很複雜。 | medium，因為需要重新適應不同的工具和工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非開發任務的專業化助手。 | 如果你的工作重心在語音處理或自然語言處理領域。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在配置子代理時，可能會遇到命名衝突的問題
  - 解法：確保使用唯一的子代理名稱以避免衝突
- **[HIGH]** 某些子代理可能需要特定的 Codex 版本才能正常運作
  - 解法：定期檢查 Codex 更新並調整子代理配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行快速迭代的專案 | 非常適合 | 能夠快速調用專業子代理來提高開發效率。 |
| 大型企業的核心系統開發 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 需要多種專業技能的開發任務 | 適合 | 提供多種專業子代理，能夠滿足不同需求。 |
| 對於新手開發者的學習項目 | 普通 | 雖然有學習曲線，但提供了良好的範例和文檔。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到顯著的開發效率提升，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：子代理的設計不需要高權限，且不會存取敏感資料。整體依賴鏈相對簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
| Forks | 151 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-17 |
| 官方網站 | [Link](https://github.com/VoltAgent/voltagent) |
| Repo 大小 | 241 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-codex-subagents) |
| Topics | `ai-agents` `awesome-list` `chatgpt` `codex` `codex-skills` `codex-subagents` `subagents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 11 |
> | [@haoxianhan](https://github.com/haoxianhan) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，已解決所有開放問題。
**連結**：[文件](https://github.com/VoltAgent/awesome-codex-subagents)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-20）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #11 from haoxianhan/main

## README 摘錄

> [!info]- 展開查看原文 README
> The awesome collection of 136+ Codex subagents across 10 categories.
>     
>     
> 
>    
> 
>     
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-codex-subagents)
> [](https://s.voltagent.dev/discord)
> 
>     More awesome collections for developers
>     
>     
> 
> [](https://github.com/VoltAgent/awesome-agent-skills)
> [](https://github.com/VoltAgent/awesome-claude-code-subagents)
> [](https://github.com/VoltAgent/awesome-openclaw-skills)
> [](https://github.com/VoltAgent/awesome-ai-agent-papers)
> 
> 
> ## Installation
> 
> Use Codex custom agent directories exactly as documented:
> 
> - `~/.codex/agents/` for global agents (available in all projects)
> - `.codex/agents/` for project-specific agents (higher precedence in that repo)
> 
> 1. Clone this repository.
> 2. Copy the `.toml` agent files you want into one of the directories above.
> 3. Restart or refresh your Codex session if needed.
> 4. Delegate explicitly in prompts (Codex does not auto-spawn custom subagents).
> 
> Examples:
> ```bash
> mkdir -p ~/.codex/agents
> cp categories/01-core-development/backend-developer.toml ~/.codex/agents/
> ```
> 
> ```bash
> mkdir -p .codex/agents
> cp categories/04-quality-security/reviewer.toml .codex/agents/
> ```
> 
> If you use agent configuration in Codex, keep it in `.codex/config.toml` under `[agents]` as described in the official docs.
> 
> 
> ### Example Workflows
> 
> **PR review workflow:**
> ```text
> Review this branch with parallel subagents. Have reviewer look for correctness, security, and missing tests. Have docs_researcher verify the framework APIs this patch depends on. Wait for both and summarize the findings with file references.
> ```
> 
> **Bug investigation workflow:**
> ```text
> Investigate the broken settings flow. Have code_mapper trace the owning code paths, browser_debugger reproduce the bug in the browser, and frontend_developer propose the smallest fix after the failure is understood. Wait for the read-heavy agents first, then continue.
> ```
> 
> **Repo exploration and planning workflow:**
> ```text
> Use search_specialist to locate the code related to payment retries, knowledge_synthesizer to summarize the current design, and refactoring_specialist to propose a minimal refactor plan. Return a concrete action list.
> ```
> 
> # Awesome Codex Subagents
> 
> This repository serves as the definitive collection of [Codex Subagents](https://developers.openai.com/codex/subagents), specialized AI assistants designed for specific development tasks. Written specifically for Codex and aligned with the official docs.
> 
> 
> ### Subagent Storage Locations
> 
> | Type | Path | Availability | Precedence |
> |------|------|--------------|------------|
> | Project Subagents | `.codex/agents/` | Current project only | Higher |
> | Global Subagents | `~/.codex/agents/` | All projects | Lower |
> 
> Note: When naming conflicts occur, project-specific subagents override global ones.
> 
> 
> ## Subagent Structure
> 
> Each subagent uses a Codex-native `.toml` format:
> 
> ```toml
> name = "subagent-name"
> description = "When this agent should be invoked"
> model = "gpt-5.3-codex-spark"
> model_reasoning_effort = "medium"
> sandbox_mode = "read-only"
> 
> [instructions]
> text = """
> You are a [role description and expertise areas]...
> 
> [Agent-specific checklists, patterns, and guidelines]...
> """
> ```
> 
> 
> ### Smart Model Routing
> 
> Each subagent includes a `model` field that automatically routes it to the right model -- balancing quality and cost:
> 
> | Model | When It's Used | Examples |
> |-------|----------------|----------|
> | `gpt-5.4` | Deep reasoning -- architecture reviews, security audits, financial logic | `security-auditor`, `architect-reviewer`, `fintech-engineer` |
> | `gpt-5.3-codex-spark` | Fast scanning, synthesis, and lighter research tasks | `search-specialist`, `docs-researcher`, `agent-installer` |
> 
> 
> ### Sandbox Mode Philosophy
> 
> Each subagent's `sandbox_mode` field controls filesystem access:
> - **Read-only agents** (reviewers, auditors): `sandbox_mode = "read-only"` - analyze without modifying
> - **Workspace-write agents** (developers, engineers): `sandbox_mode = "workspace-write"` - create and modify files
> 
> 
> ## Categories
> 
> 
> ### [01. Core Development](categories/01-core-development/)
> 
> Essential development subagents for everyday coding tasks.
> 
> - [**api-designer**](categories/01-core-development/api-designer.toml) - REST and GraphQL API architect
> - [**backend-developer**](categories/01-core-development/backend-developer.toml) - Server-side expert for scalable APIs
> - [**code-mapper**](categories/01-core-development/code-mapper.toml) - Code path mapping and ownership boundary analysis
> - [**electron-pro**](categories/01-core-development/electron-pro.toml) - Desktop application expert
> - [**frontend-developer**](categories/01-core-development/frontend-developer.toml) - UI/UX specialist for React, Vue, and Angular
> - [**fullstack-developer**](categories/01-core-development/fullstack-developer.toml) - End-to-end feature development
> - [**graphql-architect**](categories/01-core-development/graphql-architect.toml) - GraphQL schema and federation expert
> - [**microservices-architect**](categories/01-core-development/microservices-architect.toml) - Distributed systems designer
> - [**mobile-developer**](categories/01-core-development/mobile-developer.toml) - Cross-platform mobile specialist
> - [**ui-designer**](categories/01-core-development/ui-designer.toml) - Visual design and interaction specialist
> - [**ui-fixer**](categories/01-core-development/ui-fixer.toml) - Smallest safe patch for reproduced UI issues
> - [**websocket-engineer**](categories/01-core-development/websocket-engineer.toml) - Real-time communication specialist
> 
> 
> ### [02. Language Specialists](categories/02-language-specialists/)
> 
> Language-specific experts with deep framework knowledge.
> - [**angular-architect**](categories/02-language-specialists/angular-architect.toml) - Angular 15+ enterprise patterns expert
> - [**cpp-pro**](categories/02-language-specialists/cpp-pro.toml) - C++ performance expert
> - [**csharp-developer**](categories/02-language-specialists/csharp-developer.toml) - .NET ecosystem specialist
> - [**django-developer**](categories/02-language-specialists/django-developer.toml) - Django 4+ web development expert
> - [**dotnet-core-expert**](categories/02-language-specialists/dotnet-core-expert.toml) - .NET 8 cross-platform specialist
> - [**dotnet-framework-4.8-expert**](categories/02-language-specialists/dotnet-framework-4.8-expert.toml) - .NET Framework legacy enterprise specialist
> - [**elixir-expert**](categories/02-language-specialists/elixir-expert.toml) - Elixir and OTP fault-tolerant systems expert
> - [**erlang-expert**](categories/02-language-specialists/erlang-expert.toml) - Erlang/OTP and rebar3 engineering expert
> - [**flutter-expert**](categories/02-language-specialists/flutter-expert.toml) - Flutter 3+ cross-platform mobile expert
> - [**golang-pro**](categories/02-language-specialists/golang-pro.toml) - Go concurrency specialist
> - [**java-architect**](categories/02-language-specialists/java-architect.toml) - Enterprise Java expert
> - [**javascript-pro**](categories/02-language-specialists/javascript-pro.toml) - JavaScript development expert
> - [**kotlin-specialist**](categories/02-language-specialists/kotlin-specialist.toml) - Modern JVM language expert
> - [**laravel-specialist**](categories/02-language-specialists/laravel-specialist.toml) - Laravel 10+ PHP framework expert
> - [**nextjs-developer**](categories/02-language-specialists/nextjs-developer.toml) - Next.js 14+ full-stack specialist
> - [**php-pro**](categories/02-language-specialists/php-pro.toml) - PHP web development expert
> - [**powershell-5.1-expert**](categories/02-language-specialists/powershell-5.1-expert.toml) - Windows PowerShell 5.1 and full .NET Framework automation specialist
> - [**powershell-7-expert**](categories/02-language-specialists/powershell-7-expert.toml) - Cross-platform PowerShell 7+ automation and modern .NET specialist
> - [**python-pro**](categories/02-language-specialists/python-pro.toml) - Python ecosystem master
> - [**rails-expert**](categories/

## 延伸閱讀

相關概念：[[Agent 框架]] · [[Codex]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/VoltAgent/awesome-codex-subagents) · [官方網站](https://github.com/VoltAgent/voltagent)

## 相關收錄

> [!note]- 直接競品（同子分類：Codex 子代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Codex 子代理" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "VoltAgent--awesome-codex-subagents" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","Codex","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-codex-subagents" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-codex-subagents" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-codex-subagents"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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
> const me = dv.page("Repos/VoltAgent--awesome-codex-subagents");
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

- [[2026-03-21|2026-03-21]] — 再次上榜，1.8k stars
- [[2026-03-20|2026-03-20]] — 首次收錄，1.5k stars
