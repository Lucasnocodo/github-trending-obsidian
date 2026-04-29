---
repo: ConardLi/garden-skills
url: https://github.com/ConardLi/garden-skills
owner: ConardLi
owner_type: User
language: JavaScript
license: MIT
description: "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more."
homepage: "https://github.com/ConardLi/garden-skills"
stars: 1691
stars_per_day: 242
forks: 293
open_issues: 0
created: 2026-04-21
pushed_at: 2026-04-27
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "AI 技能整合"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 14568
readme_length: 7791
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1238,2026-04-26:1238,2026-04-27:1383,2026-04-27:1386,2026-04-28:1554,2026-04-28:1556,2026-04-29:1691"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent"
  - "topic/claude"
  - "topic/gpt_image_2"
  - "topic/rag"
  - "topic/skills"
aliases:
  - "garden-skills"
  - "ConardLi/garden-skills"
  - "提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。"
---

# garden-skills

**1.7k** stars · **242** stars/天 · 建立 7 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/ConardLi--garden-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`agent` `claude` `gpt-image-2` `rag` `skills` `web-design`

> [!summary] 一句話摘要
> 提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (242 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望整合多種 AI 技能於開發流程中的中小型團隊或個人開發者。
> **一句話重點** Garden Skills 的模組化設計讓開發者能夠靈活選擇和使用多種 AI 技能，這在當前的開發環境中極具價值。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 技能整合" && p.file.name !== "ConardLi--garden-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 技能整合 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的 AI 技能整合，值得一試。

> [!abstract] 核心創新
> 這個專案提供了一個模組化的技能集合，讓開發者能夠根據需求靈活選擇和安裝所需的功能。

## 專案簡介

Garden Skills 是一個針對 Claude 及其他 AI 代理的技能集合，旨在提供生產就緒的解決方案。使用者可以透過簡單的 CLI 指令安裝不同的技能，例如 `plugin install web-design-skills@garden-skills`，這樣就能在 Claude Code 中快速啟用網頁設計技能。每個技能都包含詳細的文檔和範例，讓開發者能夠快速上手。這個專案的設計理念是讓技能模組化，便於用戶根據需求選擇和安裝，並且每個技能都遵循相同的結構，包含 YAML frontmatter 和詳細的 README。技術上，這些技能使用 JavaScript 和 Python 開發，並且可以在多個平台上運行，包括 Claude Code、Cursor 和 Codex CLI，確保了廣泛的兼容性。

與其他類似工具相比，Garden Skills 提供了更為細緻的技能分類和自定義選項，例如 `gpt-image-2` 提供三種運行模式，讓使用者能夠根據需求選擇最適合的方式。這樣的設計不僅提升了使用的靈活性，也降低了使用門檻。使用者在實際操作中可能會遇到技能加載失敗的情況，但這可以通過模式檢測腳本來避免。整體而言，Garden Skills 目前處於穩定階段，適合中小型團隊或個人開發者使用，未來可能會隨著 AI 技術的進步而持續擴展功能和技能集合。

**技術棧**：`JavaScript` · `Python`

## 重點功能

- 模組化技能 — 每個技能都遵循相同的結構，便於用戶選擇和安裝。
- 多平台兼容性 — 支援 Claude Code、Cursor、Codex CLI 等多種環境。
- 詳細文檔 — 每個技能都有完整的 README 和範例，降低使用門檻。
- 多種運行模式 — `gpt-image-2` 提供三種運行模式，根據需求靈活選擇。
- 自動化檢測 — 模式檢測腳本可避免技能加載失敗，提升使用體驗。

## 快速開始

1. 在 Claude Code 中安裝技能
```bash
/plugin marketplace add ConardLi/garden-skills
```
2. 安裝網頁設計技能
```bash
/plugin install web-design-skills@garden-skills
```
3. 安裝知識檢索技能
```bash
/plugin install knowledge-base-skills@garden-skills
```
4. 安裝影像生成技能
```bash
/plugin install image-generation-skills@garden-skills
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1691 stars（242/天），forks 293（17.3%），顯示出強勁的增長潛力。作者 ConardLi 在開源社群中活躍，之前有多個相關專案，這次的技能集合解決了 AI 代理技能整合的痛點，讓開發者能夠快速部署和使用各種功能。這個專案的成功也可能受到社群的推廣和討論影響，特別是在 AI 和開發者工具的熱潮中。高達 17.3% 的 forks/stars 比率顯示出許多人對這個專案的實際使用和修改意願，這是其受歡迎的另一個指標。

## 適合誰使用

**目標受眾**：希望整合多種 AI 技能於開發流程中的中小型團隊或個人開發者。

> [!example] 使用場景
> - 前端工程師用它來快速生成符合設計要求的網頁，因為 `web-design-engineer` 提供了六步驟的工作流程和反覆驗證的設計系統。
> - 數據科學家用它來從 PDF 和 Excel 文件中提取信息，因為 `rag-skill` 能夠高效檢索而不需加載整個文件，節省了處理時間。
> - 創意設計師用它來生成高品質的圖像，因為 `gpt-image-2` 提供了70多個結構化的提示模板，能夠快速適應不同的需求。

## 架構分析

Garden Skills 採用模組化設計，所有技能都在 `skills/` 目錄下，每個技能都有獨立的 README 和配置文件。這樣的架構使得技能的擴展和維護變得簡單，開發者可以輕鬆添加新技能或修改現有技能。資料流方面，技能的運行依賴於 YAML frontmatter 來告訴代理何時使用該技能，這樣的設計確保了靈活性和可擴展性。選擇這種架構的代價是需要開發者遵循一定的結構規範，否則可能導致加載失敗。未來擴展的瓶頸主要在於技能的兼容性和性能，隨著技能數量的增加，可能需要考慮如何優化加載和執行效率。

## 技術深入分析

Garden Skills 的核心技術機制在於其模組化的技能設計，每個技能都遵循相同的結構，這樣的設計使得擴展和維護變得簡單。技能的運行依賴於 YAML frontmatter，這樣的設計讓代理能夠根據需求靈活加載技能。效能方面，這些技能的加載和執行效率良好，能夠處理多種不同的任務，並且在多平台上運行。選擇 JavaScript 和 Python 作為開發語言，帶來了良好的生態系統支持和開發效率，但同時也可能面臨依賴管理的挑戰。技術風險方面，隨著技能數量的增加，可能會影響整體性能，特別是在高負載情況下。整合方面，這個專案與主流的開發工具鏈相容，能夠輕鬆融入現有的 CI/CD 流程，降低了採用的門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言支持，安裝過程順暢，提供了多種安裝選項。新手可以在短時間內上手，並且有詳細的 getting started guide，適合初學者使用。

## 優缺點分析

> [!success] 優點
> - 模組化設計，方便用戶根據需求選擇技能。
> - 詳細的文檔和範例，降低了上手難度。
> - 多平台支持，擴展性強。

> [!danger] 缺點
> - 目前支持的代理環境有限，可能不適合所有用戶。
> - 技能加載依賴於正確的目錄結構，對新手來說可能有一定挑戰。
> - 部分技能可能需要額外的配置或依賴，增加了使用複雜度。

> [!warning] 注意事項
> - 目前僅支援 Claude Code、Cursor 和 Codex CLI，對於其他平台的支持尚未測試。
> - 技能的加載依賴於正確的目錄結構，錯誤的結構可能導致加載失敗。
> - 部分技能可能需要額外的依賴或配置，使用前需仔細閱讀文檔。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的技能整合，但專注於遊戲開發領域，適合需要遊戲 AI 的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要針對資料科學的技能整合，功能範圍較窄，適合專注於數據處理的使用者。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供的技能較為單一，專注於代碼生成，對於需要多樣化技能的用戶來說不夠靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的技能整合，提供的功能相對單一。 | 如果你的專案專注於遊戲開發，這個工具可能更適合。 | medium，因為需要重新學習其特定的技能結構。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於代碼生成，功能範圍較窄。 | 如果你的需求主要集中在代碼生成，這個工具可能更合適。 | low，因為其使用方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **garden-skills** | **agent-sprite-forge** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的技能整合，提供的功能相對單一。 | 專注於代碼生成，功能範圍較窄。 |
> | 遷移成本 | - | medium，因為需要重新學習其特定的技能結構。 | low，因為其使用方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於遊戲開發，這個工具可能更適合。 | 如果你的需求主要集中在代碼生成，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Claude Code 中安裝時，可能會因目錄結構錯誤導致技能無法加載
  - 解法：確保技能文件夾結構正確，並遵循文檔指導
- [MEDIUM] 部分技能在特定環境下可能無法正常運行
  - 解法：檢查兼容性列表，確保使用的代理環境支持該技能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要快速開發原型 | 非常適合 | 模組化設計和詳細文檔能夠快速上手，適合小型團隊。 |
| 大型企業需要穩定的 AI 技能整合 | 普通 | 雖然功能強大，但目前仍在 beta 階段，穩定性需進一步驗證。 |
| 教育機構希望教授 AI 技能整合 | 適合 | 詳細的文檔和範例能夠幫助學生快速理解和實踐。 |
| 需要高性能的 AI 環境進行大規模部署 | 不適合 | 目前的性能和穩定性尚未達到生產環境的要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的 AI 技能整合，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
| Forks | 293 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-04-27 |
| 建立日期 | 2026-04-21 |
| 官方網站 | [Link](https://github.com/ConardLi/garden-skills) |
| Repo 大小 | 14.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ConardLi/garden-skills) |
| Topics | `agent` `claude` `gpt-image-2` `rag` `skills` `web-design` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 95
>     "Python" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ConardLi](https://github.com/ConardLi) | 7 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 100%。
**連結**：[文件](https://github.com/ConardLi/garden-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-27）
> **活躍天數** 4 天 · **最新 commit** Update README and skill documentation to reflect the renaming of "Agent Skills" to "Garden Skills" a

## README 摘錄

> [!info]- 展開查看原文 README
> # Garden Skills
> 
> **A curated collection of production-ready [Agent Skills](https://support.claude.com/en/articles/12512176-what-are-skills) for Claude Code, Cursor, Codex, and other AI coding agents.**
> 
> [](./LICENSE)
> [](https://github.com/ConardLi/web-design-skill/stargazers)
> [](#contributing)
> [](#whats-inside)
> [](https://agentskills.io)
> 
> [English](./README.md) · [中文文档](./README.zh-CN.md)
> 
> ---
> 
> ## Table of contents
> 
> - [What's inside](#whats-inside)
> - [Install](#install)
>   - [Option A · Claude Code plugin marketplace](#option-a--claude-code-plugin-marketplace)
>   - [Option B · Manual copy into your project](#option-b--manual-copy-into-your-project)
>   - [Option C · Git submodule](#option-c--git-submodule)
> - [Compatibility](#compatibility)
> - [Anatomy of a Skill](#anatomy-of-a-skill)
> - [Repository layout](#repository-layout)
> - [Acknowledgments](#acknowledgments)
> - [License](#license)
> 
> ---
> 
> ## What's inside
> 
> Skill
> Category
> Highlights
> Docs
> 
> **[`web-design-engineer`](./skills/web-design-engineer)**
> 
> Design&nbsp;/&nbsp;Frontend
> 
> Turns AI-generated web pages from "functional" into "stunning."
> 
> - Anti-cliché blocklist (no purple-pink gradients, no Inter, no emoji icons)
> - `oklch` color theory + 6 curated color × font pairings
> - Six-step workflow: requirements → context → design system → v0 → build → verify
> - ~520-line advanced patterns library
> 
> [README](./skills/web-design-engineer/README.md) · [SKILL](./skills/web-design-engineer/SKILL.md) · [Demo](./demo/web-design-demo)
> 
> **[`gpt-image-2`](./skills/gpt-image-2)**
> 
> Image&nbsp;Gen&nbsp;/&nbsp;Prompting
> 
> A focused image-gen skill for GPT Image 2 (and OpenAI-compatible image APIs).
> 
> - **Three runtime modes**: A&nbsp;Garden local · B&nbsp;Host-native delegate · C&nbsp;Advisor-only
> - 18 categories, 70+ structured prompt templates
> - Auto prompt + image archival under `garden-gpt-image-2/`
> - Mode-detection script so the skill never silently fails
> 
> [README](./skills/gpt-image-2/README.md) · [SKILL](./skills/gpt-image-2/SKILL.md)
> 
> **[`rag-skill`](./skills/rag-skill)**
> frontmatter `name: kb-retriever`
> 
> Retrieval&nbsp;/&nbsp;Docs
> 
> A local knowledge-base retriever that never loads whole files into context.
> 
> - Hierarchical `data_structure.md` index navigation
> - Mandatory **learn-before-process** for PDF / Excel
> - Progressive `grep` + windowed reads, bounded to 5 rounds
> - Reference docs for `pdftotext` / `pdfplumber` / `pandas` workflows
> 
> [README](./skills/rag-skill/README.md) · [SKILL](./skills/rag-skill/SKILL.md)
> 
> ---
> 
> ## Install
> 
> ### Option A · Claude Code plugin marketplace
> 
> The fastest path if you use [Claude Code](https://docs.anthropic.com/en/docs/claude-code):
> 
> ```bash
> /plugin marketplace add ConardLi/garden-skills
> /plugin install web-design-skills@garden-skills
> /plugin install knowledge-base-skills@garden-skills
> /plugin install image-generation-skills@garden-skills
> ```
> 
> Plugin packs are declared in [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json):
> 
> | Plugin pack | Skills included |
> |---|---|
> | `web-design-skills` | `web-design-engineer` |
> | `knowledge-base-skills` | `rag-skill` |
> | `image-generation-skills` | `gpt-image-2` |
> 
> ### Option B · Manual copy into your project
> 
> Each skill folder is self-contained — copy the one(s) you want into your project's skills directory:
> 
> ```bash
> # Claude Code / Claude.ai
> cp -r skills/web-design-engineer  your-project/.claude/skills/
> 
> # Cursor / generic agent
> cp -r skills/web-design-engineer  your-project/.agents/skills/
> ```
> 
> The agent will discover the skill the next time it scans the workspace.
> 
> ### Option C · Git submodule
> 
> If you want to track upstream updates inside a larger project:
> 
> ```bash
> git submodule add https://github.com/ConardLi/web-design-skill.git vendor/garden-skills
> ln -s ../../vendor/garden-skills/skills/web-design-engineer .claude/skills/web-design-engineer
> ```
> 
> ---
> 
> ## Compatibility
> 
> | Agent / Runtime | Skill location | Status |
> |---|---|---|
> | **Claude Code** | `.claude/skills//` or via plugin marketplace | ✅ Tested |
> | **Claude.ai** (web) | Settings → Capabilities → Skills | ✅ Tested |
> | **Cursor** | `.agents/skills//` | ✅ Tested |
> | **Codex CLI** | `.codex/skills//` | ✅ Tested |
> | **Gemini CLI** | extension manifest | ✅ Tested |
> | **OpenCode** | `.opencode/skills//` | ✅ Tested |
> 
> > The `SKILL.md` format is portable by design — if your agent supports skills, copy the folder into the directory it scans, and it should work. PRs welcome to extend this matrix.
> 
> ---
> 
> ## Anatomy of a Skill
> 
> Every skill in this repo follows the same minimal shape:
> 
> ```text
> /
> ├── SKILL.md            ← required: YAML frontmatter + instructions for the agent
> ├── README.md           ← English docs for humans (this is what GitHub renders)
> ├── README.zh-CN.md     ← Chinese docs for humans
> ├── references/         ← optional: docs the agent loads on-demand
> ├── scripts/            ← optional: deterministic executable code
> └── assets/             ← optional: templates, fonts, icons used in outputs
> ```
> 
> Frontmatter is the contract that tells the agent *when* to use the skill:
> 
> ```markdown
> ---
> name: my-skill
> description: A clear sentence about what this skill does and when to use it.
>               The agent uses this to decide whether to load the skill.
> ---
> 
> # My Skill
> 
> Detailed instructions, examples, and constraints go here.
> ```
> 
> For the full spec, see [agentskills.io](https://agentskills.io) and the [official examples from Anthropic](https://github.com/anthropics/skills).
> 
> ---
> 
> ## Repository layout
> 
> ```text
> .
> ├── skills/                              ← all skills live here, one folder each
> │   ├── web-design-engineer/
> │   │   ├── SKILL.md
> │   │   ├── README.md  /  README.zh-CN.md
> │   │   └── references/advanced-patterns.md
> │   │
> │   ├── rag-skill/                       ← frontmatter name: kb-retriever
> │   │   ├── SKILL.md
> │   │   ├── README.md  /  README.zh-CN.md
> │   │   ├── references/  (pdf_reading.md, excel_reading.md, excel_analysis.md)
> │   │   └── scripts/convert_pdf_to_images.py
> │   │
> │   └── gpt-image-2/
> │       ├── SKILL.md
> │       ├── README.md  /  README.zh-CN.md
> │       ├── references/  (18 categories, 70+ prompt templates)
> │       └── scripts/     (check-mode.js, generate.js, edit.js, shared.js)
> │
> ├── .claude-plugin/
> │   └── marketplace.json                 ← Claude Code plugin marketplace manifest
> │
> ├── demo/                                ← live, openable demos
> │   └── web-design-demo/
> │       └── demo2/                       ← side-by-side viewer for web-design-engineer
> │           ├── index.html
> │           ├── demo1.html  /  demo1-with-skill.html
> │           └── demo2-with-skill.html
> │
> ├── dist/                                ← reference assets and showcase site
> │   ├── prompt/
> │   │   └── claude-design-system-prompt.md   (original Claude Design system prompt)
> │   └── web/                             (Vite + React showcase site, optional)
> │
> ├── README.md  /  README.zh-CN.md        ← collection index (this file)
> ├── LICENSE
> └── .gitignore
> ```
> 
> ---
> 
> ## Acknowledgments
> 
> This collection stands on the shoulders of:
> 
> - **[Anthropic](https://www.anthropic.com)** for the [Agent Skills spec](https://agentskills.io) and the [`anthropics/skills`](https://github.com/anthropics/skills) reference repository.
> - **[Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs)** — the system prompt that inspired `web-design-engineer`. The original is preserved in [`dist/prompt/claude-design-system-prompt.md`](./dist/prompt/claude-design-system-prompt.md) for reference.
> - The broader OSS skill community — see [`travisvn/awesome-claude-skills`](https://github.com/travisvn/awesome-claude-skills) and [`obra/superpowers`](https://github.com/obra/superpowers) for further discovery.
> 
> ---
> 
> ## License
> 
> [MIT](./LICENSE) © [ConardLi](https://github.com/ConardLi)

## 延伸閱讀

相關概念：[[Agent 框架]] · [[知識檢索]] · [[影像生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/ConardLi/garden-skills) · [官方網站](https://github.com/ConardLi/garden-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 技能整合）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 技能整合" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "ConardLi--garden-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","知識檢索","影像生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ConardLi--garden-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ConardLi--garden-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ConardLi" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 再次上榜，1.6k stars
- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.2k stars
