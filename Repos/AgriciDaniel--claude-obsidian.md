---
repo: AgriciDaniel/claude-obsidian
url: https://github.com/AgriciDaniel/claude-obsidian
owner: AgriciDaniel
owner_type: User
language: Python
license: MIT
description: "Self-organizing AI second brain for Obsidian + Claude Code. Drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own. AI note-taking, personal knowledge management (PKM), and an open-source Notion alternative. Based on Karpathy's LLM Wiki pattern."
homepage: "https://agricidaniel.com/blog/claude-obsidian-ai-second-brain"
stars: 5696
stars_per_day: 112
forks: 650
open_issues: 43
created: 2026-04-07
pushed_at: 2026-05-28
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v1.9.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "讓 AI 自動整理與連結你的知識，打造個人化的 Markdown 知識圖譜。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 34211
readme_length: 9951
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:988,2026-04-14:989,2026-04-15:1184,2026-04-16:1364,2026-04-17:1488,2026-04-18:1696,2026-04-19:1915,2026-04-20:2134,2026-04-21:2308,2026-04-22:2685,2026-04-23:2902,2026-04-24:3114,2026-04-25:3257,2026-04-26:3330,2026-04-27:3415,2026-04-28:3516,2026-04-29:3616,2026-04-30:3707,2026-05-01:3778,2026-05-02:3905,2026-05-03:3981,2026-05-04:4094,2026-05-05:4179,2026-05-06:4272,2026-05-07:4411,2026-05-08:4491,2026-05-09:4552,2026-05-10:4625,2026-05-11:4680,2026-05-12:4757,2026-05-13:4840,2026-05-14:4956,2026-05-15:5010,2026-05-16:5039,2026-05-17:5076,2026-05-18:5117,2026-05-19:5159,2026-05-20:5206,2026-05-21:5263,2026-05-22:5321,2026-05-23:5364,2026-05-24:5406,2026-05-25:5457,2026-05-26:5516,2026-05-27:5593,2026-05-28:5638,2026-05-29:5696"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/agent_skills"
  - "topic/ai_note_taking"
  - "topic/ai_second_brain"
  - "topic/claude_code"
  - "topic/claude_code_skill"
aliases:
  - "claude-obsidian"
  - "AgriciDaniel/claude-obsidian"
  - "讓 AI 自動整理與連結你的知識，打造個人化的 Markdown 知識圖譜。"
---

# claude-obsidian

**5.7k** stars · **112** stars/天 · 建立 51 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.9.2`

`agent-skills` `ai-note-taking` `ai-second-brain` `claude-code` `claude-code-skill` `claude-memory` `claude-plugin` `karpathy-llm-wiki` `knowledge-graph` `knowledge-management` `note-taking` `notion-alternative` `obsidian` `obsidian-ai` `obsidian-plugin` `obsidian-second-brain` `open-source` `personal-knowledge-management` `pkm` `second-brain`

> [!summary] 一句話摘要
> 讓 AI 自動整理與連結你的知識，打造個人化的 Markdown 知識圖譜。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Hot (112 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效整理和管理知識的研究人員和學生。
> **一句話重點** 這個專案的創新在於將 AI 整合進個人知識管理，實現自動化的資料整理與連結。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "知識管理" && p.file.name !== "AgriciDaniel--claude-obsidian" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 知識管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的知識管理工具，值得一試。

> [!abstract] 核心創新
> 基於 Karpathy 的 LLM Wiki 模式，提供自動化的知識管理和資料整理功能。

## 專案簡介

claude-obsidian 是一個結合 Obsidian 和 Claude Code 的自組織 AI 第二大腦，能夠自動讀取、連結並整理任何來源的資訊，最終形成一個你擁有的 Markdown 知識圖譜。使用者只需將資料丟入，Claude 便會分析內容，更新交叉引用，並將所有資料整理到 Obsidian 的結構化資料庫中。這個工具的賣點在於其自動化的知識管理能力，讓使用者能夠隨時查詢並獲取最新的知識，並且不需要手動維護資料的完整性。使用者可以透過 `/wiki` 命令進行初始設置，並在後續會話中持續更新和檢查資料庫的健康狀況。

技術上，這個專案使用了 Python 和 Shell，並且整合了多種檢索技術（如 BM25 和 cosine rerank），以提升查詢的準確性和效率。與其他知識管理工具相比，claude-obsidian 提供了更高的自動化程度和靈活性，特別是在多用戶環境中，能有效避免資料損壞的風險。實際使用中，使用者可能會遇到一些安裝和配置上的挑戰，特別是在使用 Obsidian 插件時。這個專案目前處於穩定階段，適合需要高效知識管理的個人或小型團隊，未來可能會持續增加更多功能以擴展其應用範圍。

**技術棧**：`Python` · `Shell` · `Makefile`

## 重點功能

- 自動化知識整理 — Claude 會自動讀取並整理資料，形成結構化的 Markdown 知識圖譜。
- 多用戶安全 — v1.7 引入的每檔案建議鎖定功能，避免多用戶環境下的資料損壞。
- 多種方法論支持 — 支援 LYT、PARA、Zettelkasten 等組織方法，讓使用者依需求選擇最佳方式。
- 即時查詢 — 使用 `/wiki` 命令可快速設置和查詢資料，提升使用效率。
- 熱更新功能 — 每次會話結束時，Claude 會更新熱快取，保留最新的上下文資料。

## 快速開始

1. 克隆專案並設置
```bash
git clone https://github.com/AgriciDaniel/claude-obsidian && cd claude-obsidian && bash bin/setup-vault.sh
```
2. 在 Obsidian 中打開資料夾
```bash
Manage Vaults → Open folder as vault → select `claude-obsidian/`
```
3. 啟動 Claude Code 並輸入命令
```bash
/wiki
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 51 天就累積 5696 stars（112/天），forks 650（11.4%），顯示出強勁的用戶興趣。作者 AgriciDaniel 之前有開發其他知識管理工具，這次專案解決了傳統筆記工具在資料整合和自動化上的不足。近期的社群討論和 YouTube 示範也提升了其曝光率。技術上，隨著 AI 和知識管理需求的增長，這個工具的實用性和創新性使其成為熱門選擇。高達 11.4% 的 forks/stars 比率顯示出許多用戶正在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要高效整理和管理知識的研究人員和學生。

> [!example] 使用場景
> - 學生用它來整理課堂筆記，因為 Claude 能自動連結相關概念，讓學習更有效率。
> - 研究人員用它來管理文獻資料，因為每次新增資料時，Claude 都會更新交叉引用，避免資料遺漏。
> - 自由工作者用它來建立個人知識庫，因為它提供的自動化功能能節省大量手動整理的時間。

## 架構分析

claude-obsidian 採用模組化設計，主要由 Obsidian 插件和 Claude Code 組成。使用者透過 Obsidian 界面與 Claude 互動，Claude 負責資料的讀取和整理。資料流從使用者輸入開始，Claude 透過多種檢索技術（如 BM25 和 cosine rerank）分析資料，並將結果更新到 Obsidian 的 Markdown 檔案中。這種設計使得使用者能夠在不干擾資料完整性的情況下，持續增強知識庫。選擇這種架構的代價是需要使用者具備一定的技術背景來進行初始設置，且在多用戶環境中可能會面臨資料同步的挑戰。

## 技術深入分析

claude-obsidian 的核心技術機制在於其自動化的知識整理能力，使用了多種檢索技術來提升查詢的準確性。其資料流從使用者輸入開始，Claude 會分析資料並更新到 Obsidian 的 Markdown 檔案中。這個工具能夠處理大量資料，並且在每次會話結束時更新熱快取，確保使用者能夠隨時獲取最新的資訊。選擇 Python 作為主要開發語言使得開發過程更加靈活，但也可能導致性能上的瓶頸，特別是在處理大型資料集時。這個專案的依賴樹相對簡單，主要依賴於 Obsidian 的生態系統，降低了使用者的學習成本。從技術風險的角度來看，隨著使用者數量的增加，資料同步和版本控制可能成為未來的挑戰。在整合方面，claude-obsidian 能夠與主流的知識管理工具無縫對接，並且支援 CI/CD 流程的整合，讓團隊能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例；安裝過程相對順暢，但對新手可能有一定的挑戰；有良好的入門指南，幫助使用者快速上手；文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少手動整理的時間。
> - 支援多種知識管理方法，靈活性強。
> - 能夠持續更新和維護資料庫的健康狀態。

> [!danger] 缺點
> - 初始設置過程對新手來說可能較為複雜。
> - 在多用戶環境中，資料版本控制仍需謹慎管理。
> - 目前僅支援 Markdown 格式，對其他格式的支援有限。

> [!warning] 注意事項
> - 需要安裝 Obsidian 和 Local REST API 插件以實現完整功能。
> - 在多用戶環境中，仍需注意資料的版本控制和同步問題。
> - 目前僅支援 Markdown 格式，對其他格式的支援有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理任務，而 claude-obsidian 更加注重知識管理和資料連結。 |
| Notion | Notion 提供更豐富的模板和視覺化功能，但缺乏 claude-obsidian 的自動化知識整合能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Notion | Notion 提供了強大的視覺化界面和多樣化的模板，而 claude-obsidian 專注於自動化的知識整理和資料連結。 | 如果需要強大的視覺化和模板支持，Notion 會是更好的選擇。 | medium，因為需要將資料從 Notion 轉移到 Markdown 格式。 |
| Roam Research | Roam Research 提供了雙向鏈接的知識管理，而 claude-obsidian 則結合了 AI 的自動化能力。 | 如果需要強調知識之間的連結，Roam Research 是不錯的選擇。 | high，因為需要手動重建資料結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-obsidian** | **Notion** | **Roam Research** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Notion 提供了強大的視覺化界面和多樣化的模板，而 claude-obsidian 專注於自動化的知識整理和資料連結。 | Roam Research 提供了雙向鏈接的知識管理，而 claude-obsidian 則結合了 AI 的自動化能力。 |
> | 遷移成本 | - | medium，因為需要將資料從 Notion 轉移到 Markdown 格式。 | high，因為需要手動重建資料結構。 |
> | 適用場景 | 主要場景 | 如果需要強大的視覺化和模板支持，Notion 會是更好的選擇 | 如果需要強調知識之間的連結，Roam Research 是不 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型團隊，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 使用 git clone 後，某些命令無法自動發現。
  - 解法：需手動執行安裝步驟以確保所有命令可用。
- **[HIGH]** SessionStart prompt-type hook 可能會失敗。
  - 解法：檢查 Claude Code 的版本並確保符合要求。
- **[HIGH]** 在多用戶環境中，資料同步可能會出現問題。
  - 解法：定期檢查資料版本並進行手動合併。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化知識管理，減少手動整理的時間。 |
| 大型研究機構的文獻管理 | 適合 | 支援多用戶環境，但需注意資料版本控制。 |
| 個人學習筆記 | 非常適合 | 自動整理功能能提升學習效率。 |
| 需要團隊協作的專案 | 普通 | 雖然支援多用戶，但在資料同步上可能有挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的知識管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取本地 Markdown 檔案，不涉及敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
| Forks | 650 |
| Open Issues | 43 |
| Issue 解決率 | 10% (5 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) |
| Repo 大小 | 33.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgriciDaniel/claude-obsidian) |
| Topics | `agent-skills` `ai-note-taking` `ai-second-brain` `claude-code` `claude-code-skill` `claude-memory` `claude-plugin` `karpathy-llm-wiki` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 70
>     "Shell" : 28
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgriciDaniel](https://github.com/AgriciDaniel) | 212 |

**最新版本**：v1.9.2 — v1.9.2: Compound Vault, Methodology Modes, and the Thinking Framework (2026-05-28)

> [!info]- Release Notes
> This release brings the public repo current with the full **v1.7 to v1.9.2** line. claude-obsidian is a self-organizing AI second brain for Obsidian + Claude Code: drop any source and Claude reads, links, and files it into one connected knowledge graph of plain Markdown you own.
> 
> ## Highlights since v1.6.0
> 
> - **v1.7 "Compound Vault"**: Obsidian CLI as the default transport, hybrid retrieval (contextual prefix + BM25 + cosine rerank, per Anthropic's Sept 2024 contextual retrieval research), and per-file advisory locking that closes a latent multi-writer corruption hole. Verified at +32pp top-1 accuracy over the v1.6 baseline on a 50-query benchmark.
> - **v1.8 Methodology Modes**: first-class organizational support for LYT, PARA, Zettelkasten, and Generic. New pages route automatically based on the mode you pick.
> - **v1.9 Thinking Framework**: the 10-principle thinking loop as an invocable `/think` skill, plus audit hardening across the plugin.
> - **v1.9.2**: Anthropic prompt-cache hardening and path-handling robustness in the contextual-prefix generator. Cache markers now attach only above the Haiku cacheable floor, with integer-only cache telemetry that preserves the opt-in data-egress posture. `make test` is 9 hermetic suites green.
> 
> ## Install
> 
> ```bash
> claude plugin marketplace add AgriciDaniel/claude-obsidian
> claude plugin install claude-obsidian@agricidaniel-claude-obsidian
> ```
> 
> Or clone as a vault:
> 
> ```bash
> git clone https://github.com/AgriciDaniel/claude-obsidian
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，近期有多個更新和討論。
**連結**：[文件](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-18 ~ 2026-05-28）
> **活躍天數** 3 天 · **最新 commit** chore(assets): add 1280x640 social preview card

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/AgriciDaniel/claude-obsidian/issues/2) | Commands (/wiki, /save) not discovered out of box when using | 9 | 3 |
> | [#29](https://github.com/AgriciDaniel/claude-obsidian/issues/29) | SessionStart prompt-type hook fails with 'ToolUseContext is  | 4 | 7 |
> | [#48](https://github.com/AgriciDaniel/claude-obsidian/issues/48) | SessionStart/PostCompact prompt-type hooks rejected by Claud | 2 | 0 |
> | [#40](https://github.com/AgriciDaniel/claude-obsidian/issues/40) | SessionStart prompt hook fails with "ToolUseContext is requi | 2 | 4 |
> | [#36](https://github.com/AgriciDaniel/claude-obsidian/issues/36) | How to using Obsidian Web Clipper save to Obsidian | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-obsidian: Self-Organizing AI Second Brain for Obsidian + Claude Code
> 
>   
> 
> [](https://github.com/AgriciDaniel/claude-obsidian/stargazers)
> [](LICENSE)
> [](https://github.com/AgriciDaniel/claude-obsidian/releases/latest)
> [](https://github.com/AgriciDaniel/claude-obsidian/actions/workflows/test.yml)
> [](https://code.claude.com/docs/en/discover-plugins)
> [](https://obsidian.md)
> [](https://agentskills.io)
> [](https://www.skool.com/ai-marketing-hub-pro)
> [](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)
> 
> Claude + Obsidian knowledge companion and self-organizing AI second brain. A running AI notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest.
> 
> Open-source Obsidian AI plugin for AI note-taking, personal knowledge management (PKM), second-brain workflows, and a private Notion alternative. **15 Claude Code skills**, multi-agent support, multi-writer safe (v1.7+), first-class methodology modes (LYT / PARA / Zettelkasten / Generic via v1.8), and the 10-principle thinking framework (v1.9). Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).
> 
> > **Two ways to get this skill.** Pick the one that fits how you work.
> >
> > - 🌐 **Public open-source build** (latest: `v1.9.2`, recommended): the free, MIT-licensed release on [Daniel Agrici's GitHub](https://github.com/AgriciDaniel/claude-obsidian). Open to anyone, no membership required. Ships everything: v1.7 Compound Vault, v1.8 methodology modes, and the v1.9 thinking framework plus audit hardening.
> > - ⚡ **AI Marketing Hub Pro**: the same MIT-licensed core, plus earliest access to in-development features before they land here, direct collaboration, and the [Pro community](https://www.skool.com/ai-marketing-hub-pro). Pro members install from the [AI Marketing Hub](https://github.com/AI-Marketing-Hub) org mirror (swap note under Option 2 below).
> 
> > ✨ **v1.7 "Compound Vault" refoundation**: Obsidian CLI as default transport, hybrid retrieval (contextual prefix + BM25 + cosine rerank per [Anthropic's Sept 2024 research](https://www.anthropic.com/news/contextual-retrieval)), per-file advisory locking that closes a latent multi-writer corruption hole, and substrate alignment with [kepano/obsidian-skills](https://github.com/kepano/obsidian-skills). Full guide: [docs/compound-vault-guide.md](docs/compound-vault-guide.md). Optional [DragonScale Memory](docs/dragonscale-guide.md) extension (log folds, deterministic page addresses, semantic tiling lint, boundary-first autoresearch).
> 
> ---
> 
> 
> ## Quick Start
> 
> > ℹ️ The commands below install the **public open-source build** from `AgriciDaniel/claude-obsidian` (recommended, no membership needed). **AI Marketing Hub Pro members** who want early access to in-development features can swap `AgriciDaniel/claude-obsidian` for `AI-Marketing-Hub/claude-obsidian` (Option 2 also swaps the plugin slug; see the note under that option).
> 
> 
> ### Option 1: Clone as vault (recommended, full setup in 2 minutes)
> 
> ```bash
> git clone https://github.com/AgriciDaniel/claude-obsidian
> cd claude-obsidian
> bash bin/setup-vault.sh
> ```
> 
> Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**.
> 
> Open Claude Code in the same folder. Type `/wiki`.
> 
> > ℹ️ `setup-vault.sh` configures `graph.json` (filter + colors), `app.json` (excludes plugin dirs), and `appearance.json` (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.
> 
> ---
> 
> 
> ### Option 2: Install as Claude Code plugin
> 
> Plugin installation is a two-step process. First add the marketplace catalog, then install the plugin from it.
> 
> > ℹ️ **Which version are you installing?**
> >
> > - **Public (recommended, no membership):** the commands below install the free, MIT-licensed release from [`AgriciDaniel/claude-obsidian`](https://github.com/AgriciDaniel/claude-obsidian). Nothing to sign up for.
> > - **AI Marketing Hub Pro member?** For early access to in-development features, swap `AgriciDaniel/claude-obsidian` for `AI-Marketing-Hub/claude-obsidian` and the plugin slug `claude-obsidian@agricidaniel-claude-obsidian` for `claude-obsidian@ai-marketing-hub-claude-obsidian`. The org mirror requires an authenticated `gh auth login` (or GitHub PAT) with access to the `AI-Marketing-Hub` org. If `/plugin marketplace add` returns a 404, your account is not in the org yet. DM in the [Skool community](https://www.skool.com/ai-marketing-hub-pro) to get added.
> 
> ```bash
> 
> # Step 2: install the plugin
> claude plugin install claude-obsidian@agricidaniel-claude-obsidian
> ```
> 
> In any Claude Code session: `/wiki`. Claude walks you through vault setup.
> 
> To check it worked:
> 
> ```bash
> claude plugin list
> ```
> 
> ---
> 
> 
> ### `/wiki`: setup, scaffold, continue
> 
> First-run setup walks through:
> 
> 1. Check Obsidian is installed
> 2. Check Local REST API plugin (if MCP transport desired)
> 3. Ask "What is this vault for?" (one question, drives the scaffold)
> 4. Scaffold per chosen [Methodology Mode](#methodology-modes-v18) and [Vault Use Case](#vault-use-cases-v10)
> 5. Seed `hot.md`, `index.md`, `log.md`, `wiki/meta/dashboard.base`
> 6. Suggest the first ingest
> 
> On subsequent runs, `/wiki` continues where you left off. It checks vault health, surfaces stale claims, and shows recent activity from `hot.md`.
> 
> 
> ## MCP Setup (Optional)
> 
> MCP lets Claude read and write vault notes directly without copy-paste.
> 
> **Option A (REST API based):**
> 
> 1. Install the Local REST API plugin in Obsidian
> 2. Copy your API key
> 3. Run:
> 
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "uvx",
>   "args": ["mcp-obsidian"],
>   "env": {
>     "OBSIDIAN_API_KEY": "your-key",
>     "OBSIDIAN_HOST": "127.0.0.1",
>     "OBSIDIAN_PORT": "27124",
>     "NODE_TLS_REJECT_UNAUTHORIZED": "0"
>   }
> }' --scope user
> ```
> 
> **Option B (filesystem based, no plugin needed):**
> 
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "npx",
>   "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
> }' --scope user
> ```
> 
> > ℹ️ Both transports are auto-detected by `scripts/detect-transport.sh`. The result lands in `.vault-meta/transport.json`. To pin a manual choice, edit that file and set `"manual_override": true` (v1.8.2+ honors it).
> 
> ---
> 
> 
> ### Core Plugins (built into Obsidian, no install needed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Bases** | Powers `wiki/meta/dashboard.base`: native database views. Available since Obsidian v1.9.10 (August 2025). Replaces Dataview for the primary dashboard. |
> | **Properties** | Visual frontmatter editor |
> | **Backlinks**, **Outline**, **Graph view** | Standard navigation |
> 
> 
> ### Pre-installed Community Plugins (ship with this vault)
> 
> Enable in **Settings → Community Plugins → enable**:
> 
> | Plugin | Purpose | Notes |
> |--------|---------|-------|
> | **Calendar** | Right-sidebar calendar with word count + task dots | Pre-installed |
> | **Thino** | Quick memo capture panel | Pre-installed |
> | **Excalidraw** | Freehand drawing canvas, annotate images | Pre-installed* |
> | **Banners** | Notion-style header image via `banner:` frontmatter | Pre-installed |
> 
> \* Excalidraw `main.js` (8MB) is downloaded automatically by `setup-vault.sh`. It is not tracked in git.
> 
> 
> ### Also install from Community Plugins (not pre-installed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Templater** | Auto-fills frontmatter from `_templates/` |
> | **Obsidian Git** | Auto-commits vault every 15 minutes |
> | **Dataview** *(optional, legacy)* | Only needed for the legacy `wiki/meta/dashboard.md` queries. The primary dashboard now uses Bases. |
> 
> Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to `.raw/` in one click.
> 
> ---
> 
> 
> ## CSS Snippets (auto-enabled by setup-vault.sh)
> 
> Three snippets 

## 延伸閱讀

相關概念：[[知識圖譜]] · [[個人知識管理]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/AgriciDaniel/claude-obsidian) · [官方網站](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 相關收錄

> [!note]- 直接競品（同子分類：知識管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "知識管理" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "AgriciDaniel--claude-obsidian" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["知識圖譜","個人知識管理","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AgriciDaniel--claude-obsidian" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AgriciDaniel" AND file.name != "AgriciDaniel--claude-obsidian"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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
> const me = dv.page("Repos/AgriciDaniel--claude-obsidian");
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

> **2026-04-14** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 首次收錄，988 stars
