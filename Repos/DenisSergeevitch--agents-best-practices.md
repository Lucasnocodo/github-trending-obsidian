---
repo: DenisSergeevitch/agents-best-practices
url: https://github.com/DenisSergeevitch/agents-best-practices
owner: DenisSergeevitch
owner_type: User
language: N/A
license: MIT
description: "Provider-neutral Agent Skill for Codex, Claude Code, and agentic harness design."
homepage: ""
stars: 721
stars_per_day: 361
forks: 60
open_issues: 4
created: 2026-05-15
pushed_at: 2026-05-15
first_seen: 2026-05-18
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-18
use_case: "提供中立的代理技能設計，適用於 Codex 和 Claude Code。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-21"
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
star_history: "2026-05-18:721"
tags:
  - github
  - "category/ai_ml"
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
  - "提供中立的代理技能設計，適用於 Codex 和 Claude Code。"
---

# agents-best-practices

**721** stars · **361** stars/天 · 建立 2 天前 · N/A · MIT

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
> 提供中立的代理技能設計，適用於 Codex 和 Claude Code。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (361 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要設計和優化 AI 代理系統的開發者和產品經理。
> **一句話重點** 這個專案提供了一個中立的框架，讓開發者能夠快速設計和優化 AI 代理系統。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DenisSergeevitch--agents-best-practices");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "DenisSergeevitch--agents-best-practices" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到靈活的代理設計框架，值得一試。

> [!abstract] 核心創新
> 提供了一個中立的代理技能設計框架，適用於多種代理系統。

## 專案簡介

這個專案提供了一個中立的代理技能設計框架，旨在幫助用戶生成、審核和重構代理系統的藍圖。用戶可以透過簡單的命令安裝這個技能，並在對話中啟用它，當涉及到代理架構、工具許可、計畫模式等主題時，這個技能會自動激活。核心機制是通過一個嚴謹的運行時循環，包括指令、上下文構建、模型調用、工具提案、驗證和執行，這樣的設計確保了代理的安全性和可靠性。安裝過程簡單，使用者只需運行 `npx skills add DenisSergeevitch/agents-best-practices -g` 即可全局安裝。

技術上，這個專案不僅限於編碼代理，還涵蓋了研究、支持、運營等多個領域，展示了其廣泛的適用性。與其他工具相比，這個專案強調了運行時的許可檢查和狹窄的工具類型，這使得它在安全性上優於許多傳統的代理設計方案。使用者可以生成最小可行產品（MVP）代理藍圖，並進行現有代理的審核，這在實際應用中能夠顯著提高效率和安全性。這個專案的社群活躍度尚可，開放問題數量不多，顯示出一定的穩定性和持續發展潛力。

## 重點功能

- 生成 MVP 代理藍圖 — 透過簡單的對話生成針對特定需求的代理設計。
- 審核現有代理系統 — 提供針對現有系統的詳細審核建議，幫助識別問題。
- 設計工具和許可 — 定義工具的使用範圍和許可，確保安全性。
- 支持多種應用場景 — 適用於研究、運營、財務等多個領域的代理設計。
- 中立的運行時循環 — 確保模型、工具和觀察之間的安全交互。

## 快速開始

1. 全局安裝技能
```bash
npx skills add DenisSergeevitch/agents-best-practices -g
```
2. 為 Codex 安裝技能
```bash
git clone https://github.com/DenisSergeevitch/agents-best-practices.git $HOME/.codex/skills/agents-best-practices
```
3. 為 Claude Code 安裝技能
```bash
git clone https://github.com/DenisSergeevitch/agents-best-practices.git $HOME/.claude/skills/agents-best-practices
```

## 程式碼範例

```bash
{
  "前置條件": "安裝完成後，啟用代理技能",
  "指令": "You > Build an agent for account renewal risk. It should read CRM, support tickets, and usage data, then draft renewal actions.",
  "預期輸出": "Agent > Start with an approval-gated Level 2 harness. The MVP has one job: produce a renewal-risk brief plus draft next actions for a human account owner."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 721 stars（361/天），forks 60（8.3%），顯示出不錯的增長潛力。作者 DenisSergeevitch 在代理技能設計方面有一定的專業背景，這個專案解決了之前代理設計中缺乏統一框架的問題，讓開發者能夠更快速地建立和審核代理系統。此專案的推出正值 AI 代理技術快速發展的時期，需求日益增加。高達 8.3% 的 forks/stars 比率表明許多人對這個專案進行了實際的修改和使用，顯示出其實用性和潛在的影響力。

## 適合誰使用

**目標受眾**：需要設計和優化 AI 代理系統的開發者和產品經理。

> [!example] 使用場景
> - 產品經理用它來生成針對客戶續約風險的代理藍圖，因為這可以幫助他們快速識別和處理潛在的客戶流失問題。
> - 開發者用它來審核現有的代理系統，因為這能夠幫助他們識別系統中的脆弱點，並進行優化。
> - 運營經理用它來設計與內部 API 的工具和許可，因為這能夠確保操作的安全性，並降低風險。

## 架構分析

這個專案採用了一個中立的運行時循環架構，設計目的是讓不同的代理系統能夠共享和重用技能。每個技能都包含一個 `SKILL.md` 作為入口點，並能夠在 Codex 和 Claude Code 等多個平台上運行。這樣的設計使得技能的安裝和使用變得簡單，並且能夠在多個場景中靈活運用。選擇這種架構的代價是需要用戶在不同平台上進行一些配置，但這也使得系統的可擴展性和靈活性大大提高。整體架構的擴展性良好，但在處理複雜的代理系統時，可能需要額外的設計考量。

## 技術深入分析

這個專案的核心技術機制是基於一個中立的運行時循環，這個循環包括指令、上下文構建、模型調用、工具提案、驗證和執行等步驟。這樣的設計確保了代理系統的安全性和可靠性，並且能夠在多個領域中靈活應用。效能方面，該系統能夠處理多種不同的代理需求，但在面對複雜的代理系統時，可能需要額外的設計考量。選擇使用這種架構的好處是能夠實現高效的技能重用，但代價是需要用戶在不同平台上進行一些配置。技術風險方面，這個專案可能在擴展時面臨一些挑戰，特別是在處理多種不同的 API 和工具時。整合方面，這個專案能夠與主流的代理系統進行良好的整合，但在某些情況下，可能需要額外的適配層來處理不同平台之間的差異。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但用戶需要具備一定的代理設計知識。文件目前僅提供英文版本，可能對非英語用戶造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的安裝流程，適合快速上手。
> - 提供多種應用場景的支持，靈活性高。
> - 強調安全性和許可檢查，降低風險。

> [!danger] 缺點
> - 對於新手來說，可能需要一定的學習曲線。
> - 在某些情境下可能無法完全取代現有的授權和審核流程。
> - 缺乏針對特定平台的深度優化。

> [!warning] 注意事項
> - 不僅限於編碼代理，還需考慮其他領域的應用。
> - 需要用戶具備一定的代理設計知識。
> - 在某些情境下可能無法完全取代現有的授權和審核流程。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建可視化的代理設計，而本專案則提供文本基礎的藍圖生成。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | OpenHarness 提供了一個開放的代理框架，而本專案則強調中立性和可擴展性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於可視化的代理設計，而本專案則提供文本基礎的藍圖生成。 | 如果需要直觀的可視化設計工具而非文本描述，則應選擇此工具。 | medium，因為需要將設計思路轉換為可視化格式。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 提供了一個開放的代理框架，而本專案則強調中立性和可擴展性。 | 如果需要一個完全開放的框架來進行深度定制，則應選擇此工具。 | high，因為需要重新設計整個代理系統以符合新框架。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agents-best-practices** | **agent-sprite-forge** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於可視化的代理設計，而本專案則提供文本基礎的藍圖生成。 | 提供了一個開放的代理框架，而本專案則強調中立性和可擴展性。 |
> | 遷移成本 | - | medium，因為需要將設計思路轉換為可視化格式。 | high，因為需要重新設計整個代理系統以符合新框架。 |
> | 適用場景 | 主要場景 | 如果需要直觀的可視化設計工具而非文本描述，則應選擇此工具。 | 如果需要一個完全開放的框架來進行深度定制，則應選擇此工具。 |

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

- [MEDIUM] 在某些平台上安裝後可能無法正確識別技能路徑
  - 解法：手動檢查安裝路徑並進行調整
- **[HIGH]** 對於複雜的代理系統，可能需要額外的設計考量
  - 解法：在設計前進行充分的需求分析

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成和優化代理系統，降低開發成本。 |
| 大型企業的複雜代理系統 | 普通 | 雖然功能強大，但可能需要額外的設計考量。 |
| 個人開發者的 AI 代理實驗 | 非常適合 | 簡單易用，適合快速上手。 |
| 需要高安全性的金融系統 | 不適合 | 可能無法完全取代現有的授權和審核流程。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的代理設計框架，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 60 |
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

**社群活躍度**：社群活躍度尚可，開放問題數量不多。

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

相關概念：[[MCP Protocol]] · [[Prompt Engineering]] · [[Agent 框架]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[WenyuChiou--awesome-agentic-ai-zh|WenyuChiou/awesome-agentic-ai-zh]]

[GitHub](https://github.com/DenisSergeevitch/agents-best-practices)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "DenisSergeevitch--agents-best-practices"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "DenisSergeevitch--agents-best-practices"
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
> const concepts = ["MCP Protocol","Prompt Engineering","Agent 框架"];
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

- [[2026-05-18|2026-05-18]] — 首次收錄，721 stars
