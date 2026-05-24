---
repo: DenisSergeevitch/agents-best-practices
url: https://github.com/DenisSergeevitch/agents-best-practices
owner: DenisSergeevitch
owner_type: User
language: N/A
license: MIT
description: "Provider-neutral Agent Skill for Codex, Claude Code, and agentic harness design."
homepage: ""
stars: 1025
stars_per_day: 128
forks: 93
open_issues: 4
created: 2026-05-15
pushed_at: 2026-05-15
first_seen: 2026-05-18
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "代理技能"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-18
use_case: "提供一個中立的代理技能設計框架，適用於多種 AI 模型與工作流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-29"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 157
readme_length: 9820
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-18"
star_history: "2026-05-18:721,2026-05-18:721,2026-05-19:816,2026-05-19:816,2026-05-20:853,2026-05-20:853,2026-05-21:902,2026-05-21:902,2026-05-22:944,2026-05-22:944,2026-05-23:969,2026-05-24:1025"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
  - "topic/agent_skill"
  - "topic/agent_skills"
  - "topic/agentic_workflows"
  - "topic/agents"
  - "topic/ai_agents"
aliases:
  - "agents-best-practices"
  - "DenisSergeevitch/agents-best-practices"
  - "提供一個中立的代理技能設計框架，適用於多種 AI 模型與工作流程。"
---

# agents-best-practices

**1.0k** stars · **128** stars/天 · 建立 8 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`agent-skill` `agent-skills` `agentic-workflows` `agents` `ai-agents` `anthropic` `claude` `claude-code` `codex` `codex-skill` `mcp` `prompt-engineering`

> [!summary] 一句話摘要
> 提供一個中立的代理技能設計框架，適用於多種 AI 模型與工作流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (128 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要設計和優化代理系統的開發者和產品經理。
> **一句話重點** 這個專案不僅提供技能設計框架，還強調了安全性和可觀察性，適合需要設計複雜代理系統的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理技能" && p.file.name !== "DenisSergeevitch--agents-best-practices" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理技能 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到一個全面的代理設計框架，值得採用。

> [!abstract] 核心創新
> 提供了一個中立的代理技能設計框架，適用於多種 AI 模型與工作流程。

## 專案簡介

這個專案提供了一個中立的代理技能設計框架，旨在幫助開發者設計、生成 MVP 藍圖、審核、重構和解釋代理系統的運作。使用者可以透過安裝這個技能來啟動與代理架構、工具權限、計畫模式等相關的對話。安裝過程簡單，使用 `npx skills add DenisSergeevitch/agents-best-practices -g` 指令即可全域安裝，或手動將其克隆到指定的技能目錄。這個技能的核心賣點在於它能夠生成具體的生產安全代理藍圖，並提供審核現有代理的能力，這在許多行業中都能找到應用，包括研究、財務和醫療等。

技術上，這個專案使用了一個可攜式的 `SKILL.md` 作為入口點，並且能夠與 Codex 和 Claude Code 等多種代理兼容運行。相較於其他工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，本專案提供了更為全面的設計框架，並且專注於安全性和可觀察性。使用者在實際應用中可能會遇到代理運行不穩定或工具使用不當的問題，這需要透過審核和設計改進來解決。這個專案目前處於早期階段，適合對代理系統設計有興趣的開發者，未來可能會進一步擴展功能和應用場景。

## 重點功能

- 生成 MVP 代理藍圖 — 提供具體的生產安全代理設計，包含核心運作流程和工具需求。
- 審核現有代理 — 幫助識別代理運行中的問題，並提供具體的改進建議。
- 設計工具和權限 — 確保代理在與實際系統互動時的安全性，避免廣泛的工具暴露。
- 支持多種 AI 模型 — 能夠與 Codex、Claude Code 等多種代理兼容運行。
- 可攜式 SKILL.md 入口 — 方便用戶在不同環境中安裝和使用。

## 快速開始

1. 全域安裝技能
```bash
npx skills add DenisSergeevitch/agents-best-practices -g
```
2. 克隆到 Codex 技能目錄
```bash
git clone https://github.com/DenisSergeevitch/agents-best-practices.git ~/.codex/skills/agents-best-practices
```
3. 克隆到 Claude Code 用戶目錄
```bash
git clone https://github.com/DenisSergeevitch/agents-best-practices.git ~/.claude/skills/agents-best-practices
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 1025 stars（128/天），forks 93（9.1%），顯示出強勁的增長潛力。作者 DenisSergeevitch 專注於代理技能的設計，過去的經驗使其能夠針對市場上缺乏的中立代理技能提供解決方案。這個專案的推出恰逢 AI 代理需求上升，特別是在多種行業中需要整合不同模型的情況。forks/stars 比率為 9.1%，顯示出有相當比例的開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要設計和優化代理系統的開發者和產品經理。

> [!example] 使用場景
> - 產品經理用它來生成針對客戶續約風險的 MVP 代理藍圖，因為這能快速提供具體的行動計畫，避免模糊的最佳實踐列表。
> - 開發者用它來審核現有的研究代理，因為這可以幫助識別運行中的問題，並提供具體的改進建議。
> - 運營團隊用它來設計與 Slack 和 Google Drive 的工具和權限，因為這樣能確保操作的安全性和可控性。

## 架構分析

這個專案採用一個可攜式的 SKILL.md 作為入口點，設計上旨在讓不同的 AI 模型能夠輕鬆地使用這些技能。資料流從用戶輸入開始，經過上下文構建、模型調用、工具提議、驗證、權限決策，最終執行或暫停。這樣的設計使得代理的運行變得更加嚴謹，並且能夠在不同的環境中保持一致性。

選擇使用 SKILL.md 使得技能的管理和擴展變得簡單，但可能在某些情況下限制了功能的靈活性。整體架構的擴展性良好，能夠隨著需求的變化而調整。未來可能會增加對其他模型的支援，進一步擴展其應用範圍。

## 技術深入分析

這個專案的核心技術機制在於其提供的代理技能設計框架，使用者可以透過 SKILL.md 來定義和管理技能。這樣的設計使得代理的運行過程中，能夠確保每一步的驗證和權限檢查，從而提高安全性。效能方面，這個框架能夠支持多種行業的應用，並且在處理複雜的代理系統時，能夠保持穩定的運行。設計上選擇了可攜式的 SKILL.md，這使得技能的管理變得簡單，但在某些情況下可能會限制功能的靈活性。技術風險方面，隨著代理系統的複雜度增加，可能會出現性能瓶頸或安全性問題。整合方面，這個專案能夠與現有的 AI 模型良好整合，但對於其他模型的支援尚需進一步開發。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和使用範例；安裝過程順暢，沒有明顯的坑；文件中沒有多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 提供全面的代理設計框架，適用於多種行業。
> - 安裝簡單，使用者友好，適合快速上手。
> - 能夠生成具體的生產安全藍圖，避免模糊的最佳實踐。

> [!danger] 缺點
> - 目前僅支援 Codex 和 Claude Code，對其他模型的支援尚未實現。
> - 對於新手使用者，可能需要時間熟悉代理設計的概念。
> - 在設計複雜代理時，可能需要額外的手動調整。

> [!warning] 注意事項
> - 目前僅支援 Codex 和 Claude Code，對其他模型的支援尚未實現。
> - 在設計複雜代理時，可能需要額外的手動調整。
> - 對於新手使用者，可能需要時間熟悉代理設計的概念。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個針對代理的可視化設計工具，但不如本專案全面，缺乏具體的審核和改進建議。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代理的執行環境，但缺乏本專案對於設計和安全性的重視。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的代理設計工具，專注於簡化設計過程，但不如本專案全面。 | 如果你的團隊需要一個可視化的設計工具，而不僅僅是文本基礎的框架。 | low，因為兩者都專注於代理設計，但使用方式不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代理的執行環境，提供運行時的支持，但缺乏本專案的設計和安全性考量。 | 如果你的需求主要集中在代理的運行而非設計，這個工具可能更合適。 | medium，因為需要重新考慮設計思路和架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agents-best-practices** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供一個可視化的代理設計工具，專注於簡化設計過程，但不如本專案全面。 | 專注於代理的執行環境，提供運行時的支持，但缺乏本專案的設計和安全性考量。 |
> | 遷移成本 | - | low，因為兩者都專注於代理設計，但使用方式不同。 | medium，因為需要重新考慮設計思路和架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個可視化的設計工具，而不僅僅是文本基礎的框 | 如果你的需求主要集中在代理的運行而非設計，這個工具可能更合適 |

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

- [MEDIUM] 安裝過程中可能會出現路徑問題，特別是在不同操作系統上。
  - 解法：確保使用正確的目錄結構，並檢查環境變數。
- **[HIGH]** 對於新手使用者，可能會對代理設計的概念感到困惑。
  - 解法：建議先閱讀相關文檔，了解基本概念。
- [MEDIUM] 在審核現有代理時，可能會遇到性能瓶頸。
  - 解法：建議逐步優化，先解決最明顯的問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發簡單的代理系統 | 非常適合 | 提供簡單的安裝和使用流程，適合快速上手。 |
| 大型企業需要設計複雜的代理系統 | 適合 | 雖然功能全面，但可能需要額外的手動調整。 |
| 對代理系統設計不熟悉的開發者 | 不適合 | 需要一定的學習曲線，對新手不夠友好。 |
| 需要快速生成 MVP 代理藍圖的產品經理 | 非常適合 | 能夠提供具體的行動計畫，避免模糊的最佳實踐。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到一個全面的代理設計框架，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不存取敏感資料，但在使用過程中需注意代理的安全性和可觀察性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Codex 和 Claude Code 搭配使用，通常在開發和設計階段進行整合。在一個使用 Codex 的專案中，可以用這個工具來生成代理藍圖，具體做法是透過 `npx` 指令安裝技能，然後根據需求生成設計文檔。支援 GitHub Actions 等 CI 工具，並且能夠與主流 IDE（如 VS Code）整合。整合的摩擦點主要在於不同環境的路徑配置，需確保正確設置技能目錄。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴於單一模型的設計，缺乏針對多種模型的統一框架。隨著 AI 技術的進步，特別是多模型的需求上升，這個工具的出現填補了市場的空白。它代表了一種新的技術趨勢，即在設計代理系統時，強調安全性和可觀察性，未來可能會隨著更多行業的需求而進一步演變。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的代理設計知識
- 熟悉 AI 模型的運作
- 有一定的程式設計能力

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品中進行小範圍測試。

**成功指標**：代理系統的設計時間減少 30%，並且能夠生成具體的行動計畫。

> [!warning] 退出計畫
> 所有設定存在標準格式，可以用官方工具轉換為其他設計框架。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-15 |
| 建立日期 | 2026-05-15 |
| Repo 大小 | 157 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DenisSergeevitch/agents-best-practices) |
| Topics | `agent-skill` `agent-skills` `agentic-workflows` `agents` `ai-agents` `anthropic` `claude` `claude-code` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DenisSergeevitch](https://github.com/DenisSergeevitch) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但目前只有 4 個開放問題，解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-15 ~ 2026-05-15）
> **活躍天數** 1 天 · **最新 commit** Reformat README like native-feel skill

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/DenisSergeevitch/agents-best-practices/issues/2) | SKILL.md inlines a blueprint template that duplicates refere | 0 | 0 |
> | [#1](https://github.com/DenisSergeevitch/agents-best-practices/issues/1) | SKILL.md inlines source links that duplicate references/sour | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # agents-best-practices
> 
> > *"The model proposes actions; the harness validates, authorizes, executes, records, and returns observations."*
> 
> [](LICENSE)
> [](SKILL.md)
> [](SKILL.md)
> [](SKILL.md)
> 
> **A provider-neutral Agent Skill for designing, generating MVP blueprints for, auditing, refactoring, and explaining agentic harnesses.**
> 
> It applies beyond coding agents: research, support, operations, sales, finance, data analysis, procurement, legal workflows, healthcare workflows, education, and workflow automation agents all need the same core runtime discipline.
> 
> **Install** - pick one:
> 
> **A. With [`skills`](https://github.com/vercel-labs/skills) (any compatible agent):**
> 
> ```bash
> npx skills add DenisSergeevitch/agents-best-practices -g
> ```
> 
> The `-g` flag installs globally at user level so every project can discover it.
> 
> **B. Or paste this prompt to your AI agent:**
> 
> ```text
> Install the agents-best-practices skill for me:
> 
> 1. Clone https://github.com/DenisSergeevitch/agents-best-practices into my
>    user-level skills directory as `agents-best-practices/`.
>    Use the skill directory my agent reads on this machine, for example:
>    - Codex: ~/.codex/skills/
>    - Claude Code: ~/.claude/skills/
> 2. Verify that SKILL.md, icon.jpeg, and the references/ directory are present.
> 3. Confirm the install path when done.
> ```
> 
> **C. Manual install paths:**
> 
> ```bash
> 
> ## About Agent Skills
> 
> Agent Skills package reusable domain knowledge so compatible agents can discover, load, and apply a workflow only when it is relevant. This repository uses the portable `SKILL.md` entrypoint and works as a Codex skill, a Claude Code skill, or a skill for other Agent-Skill-aware runtimes.
> 
> 
> # Codex
> mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
> git clone https://github.com/DenisSergeevitch/agents-best-practices.git \
>   "${CODEX_HOME:-$HOME/.codex}/skills/agents-best-practices"
> 
> 
> # Claude Code, user-level
> mkdir -p "$HOME/.claude/skills"
> git clone https://github.com/DenisSergeevitch/agents-best-practices.git \
>   "$HOME/.claude/skills/agents-best-practices"
> 
> 
> # Claude Code, project-level
> mkdir -p .claude/skills
> git clone https://github.com/DenisSergeevitch/agents-best-practices.git \
>   .claude/skills/agents-best-practices
> ```
> 
> [Use cases](#use-cases) · [What this is](#what-this-is) · [Philosophy](#philosophy) · [Layout](#layout) · [Sources](#sources)
> 
> ---
> 
> 
> ## Use cases
> 
> Once installed, the skill activates when a conversation touches agent architecture, harness design, tool permissions, planning mode, context and memory, skills, connectors, observability, evals, prompt caching, or production readiness. Three common ways to use it:
> 
> 
> ### Case 1 - Generate an MVP agent blueprint
> 
> You have a domain and need the smallest useful production-safe agent harness, not a vague list of best practices.
> 
> ```text
> You    > Build an agent for account renewal risk. It should read CRM,
>          support tickets, and usage data, then draft renewal actions.
> 
> Agent  > Start with an approval-gated Level 2 harness.
>          The MVP has one job: produce a renewal-risk brief plus draft
>          next actions for a human account owner.
> 
>          Core loop:
>            user/task -> context builder -> model call -> typed tool call
>            -> schema validation -> permission check -> execution or pause
>            -> structured observation -> next step or final brief
> 
>          Minimal tools:
>            - read_account_profile      read_private_data
>            - list_support_tickets      read_private_data
>            - fetch_usage_summary       read_private_data
>            - draft_customer_email      draft_external_message
>            - request_approval          approval_gate
> 
>          Launch gate:
>            20 historical accounts, trace review, no unapproved external
>            sends, and human acceptance on at least 80% of draft actions.
> ```
> 
> The primary reference is [`references/mvp-agent-blueprint.md`](references/mvp-agent-blueprint.md).
> 
> 
> ### Case 2 - Audit an existing agent harness
> 
> You already have a working agent, but it is brittle, expensive, too broad, or hard to debug.
> 
> ```text
> You    > Our research agent sometimes runs tools forever and forgets why
>          it made a decision after context compaction. Audit the harness.
> 
> Agent  > The failure points are runtime-level, not prompt-level:
>            - no hard step/tool/time/cost budget
>            - compaction preserves prose but loses active approvals
>            - tool results are unbounded and mix trusted/untrusted data
>            - no event trace for model output -> tool call -> observation
> 
>          Fix order:
>            1. Add loop budgets and termination reasons.
>            2. Store plan, approvals, todos, and artifacts outside the prompt.
>            3. Make compaction rehydrate active state, not chat history.
>            4. Add evals for injection, missing tool result, timeout, and
>               budget exhaustion.
> ```
> 
> Start with [`references/agentic-loop.md`](references/agentic-loop.md), [`references/context-memory-compaction.md`](references/context-memory-compaction.md), and [`references/security-evals-observability.md`](references/security-evals-observability.md).
> 
> 
> ### Case 3 - Design tools, permissions, and connectors
> 
> You need an agent to work with real systems without turning every API into an unsafe broad tool.
> 
> ```text
> You    > The ops agent needs Slack, Linear, Google Drive, and our internal
>          deploy API. How should tools and permissions work?
> 
> Agent  > Split by risk class. Reads can be autonomous when scoped.
>          Drafts can be autonomous when labeled. External writes, deploys,
>          destructive actions, privileged access, and financial operations
>          require an approval record outside the model.
> 
>          Do not expose generic send_message, write_database, or run_command.
>          Wrap each action as a narrow typed tool with structured results and
>          deterministic permission checks.
> ```
> 
> Use [`references/tools-and-permissions.md`](references/tools-and-permissions.md) and [`references/skills-and-connectors.md`](references/skills-and-connectors.md).
> 
> 
> ### Other things the skill is good for
> 
> - **"How do I add planning mode without making the agent passive?"** -> use [`references/planning-and-goals.md`](references/planning-and-goals.md).
> - **"How should auto-compaction preserve active work?"** -> use [`references/context-memory-compaction.md`](references/context-memory-compaction.md).
> - **"How do I make prompt caching work in a long-running agent?"** -> use [`references/prompt-caching-and-cost.md`](references/prompt-caching-and-cost.md).
> - **"How do I support OpenAI, Anthropic, and OpenAI-compatible APIs?"** -> use [`references/provider-api-patterns.md`](references/provider-api-patterns.md).
> - **"What should I check before launch?"** -> use [`references/checklists.md`](references/checklists.md).
> 
> ---
> 
> > *"Keep the loop simple and make the runtime rigorous."*
> 
> 
> ## What this is
> 
> A reference for people building agentic systems where the model is only one part of the runtime. It helps design a harness that includes:
> 
> - a provider-neutral model-tool-observation loop,
> - narrow typed tools and structured tool results,
> - runtime permission checks outside the model,
> - planning mode and approval-gated execution,
> - goal-like loops with budgets, checkpoints, validation, and stop rules,
> - context, memory, retrieval, and auto-compaction,
> - skills, MCP, and external connector governance,
> - prompt-cache-aware context layout and cost telemetry,
> - observability, evals, launch gates, and incident response.
> 
> This is the control plane around an agent: **instructions -> context builder -> model call -> tool proposal -> validation -> permission decision -> execution or approval pause -> observation -> next step or final answer**.
> 
> 
> ## What this is not
> 
> - Not only for coding agents.
> - Not a multi-agent framework by default.
> - Not a replacement for runtime authorization, sandboxing, or audit logs.
> - Not a prompt-only safety strategy.
> - Not a reason to expo

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[Prompt Engineering]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]]

[GitHub](https://github.com/DenisSergeevitch/agents-best-practices)

## 相關收錄

> [!note]- 直接競品（同子分類：代理技能）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理技能" AND file.name != "DenisSergeevitch--agents-best-practices"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "DenisSergeevitch--agents-best-practices"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "DenisSergeevitch--agents-best-practices" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "DenisSergeevitch--agents-best-practices"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","Prompt Engineering","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DenisSergeevitch--agents-best-practices" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DenisSergeevitch--agents-best-practices" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DenisSergeevitch" AND file.name != "DenisSergeevitch--agents-best-practices"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
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

> **2026-05-18** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 再次上榜，944 stars
- [[2026-05-21|2026-05-21]] — 再次上榜，902 stars
- [[2026-05-20|2026-05-20]] — 再次上榜，853 stars
- [[2026-05-19|2026-05-19]] — 再次上榜，816 stars
- [[2026-05-18|2026-05-18]] — 首次收錄，721 stars
