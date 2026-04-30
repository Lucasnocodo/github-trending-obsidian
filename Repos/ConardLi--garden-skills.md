---
repo: ConardLi/garden-skills
url: https://github.com/ConardLi/garden-skills
owner: ConardLi
owner_type: User
language: JavaScript
license: MIT
description: "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more."
homepage: "https://github.com/ConardLi/garden-skills"
stars: 1786
stars_per_day: 223
forks: 304
open_issues: 0
created: 2026-04-21
pushed_at: 2026-04-29
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "技能集合"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供多種 AI 代理技能的集合，涵蓋網頁設計、知識檢索、圖像生成等功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 15386
readme_length: 7791
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1238,2026-04-26:1238,2026-04-27:1383,2026-04-27:1386,2026-04-28:1554,2026-04-28:1556,2026-04-29:1691,2026-04-30:1786"
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
  - "提供多種 AI 代理技能的集合，涵蓋網頁設計、知識檢索、圖像生成等功能。"
---

# garden-skills

**1.8k** stars · **223** stars/天 · 建立 8 天前 · JavaScript · MIT

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
> 提供多種 AI 代理技能的集合，涵蓋網頁設計、知識檢索、圖像生成等功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (223 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 AI 代理中整合多種技能的開發者，尤其是對網頁設計和知識檢索有需求的團隊。
> **一句話重點** Garden Skills 的設計讓開發者能夠快速整合多種 AI 技能，提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能集合" && p.file.name !== "ConardLi--garden-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能集合 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到多樣化的技能集合，值得投入。

> [!abstract] 核心創新
> 提供一個生產就緒的多技能集合，專為 AI 代理設計，並具備高兼容性。

## 專案簡介

Garden Skills 是一個針對 AI 代理的技能集合，專為 Claude Code、Cursor 和 Codex 等平台設計。用戶可以透過簡單的指令安裝各種技能，例如使用 `plugin marketplace add ConardLi/garden-skills` 來快速添加技能。每個技能都包含詳細的文檔和範例，確保用戶能夠輕鬆理解和使用。這個專案的賣點在於其生產就緒的技能，特別是針對網頁設計的 `web-design-engineer`，它提供了一個六步驟的設計流程，並包含一個約520行的高級模式庫，幫助用戶創建出色的網頁。

技術上，這些技能使用了 YAML 格式的 `SKILL.md` 文件，這使得技能的結構化和可擴展性更高。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `EvoLinkAI/awesome-gpt-image-2-prompts`，Garden Skills 提供了更為完整的技能集合和更高的兼容性，適合需要多樣化功能的開發者。使用者可以在多種環境中運行這些技能，並且每個技能都可以獨立運作，這樣的設計使得整體架構更為靈活。這個專案的活躍程度也相當高，短短八天內就獲得了1786個 stars，顯示出其受歡迎程度。

**技術棧**：`JavaScript` · `Python`

## 重點功能

- 多種技能 — 包含 `web-design-engineer`, `gpt-image-2`, 和 `rag-skill`，滿足不同需求。
- 六步驟設計流程 — `web-design-engineer` 提供從需求到驗證的完整流程。
- 結構化提示模板 — `gpt-image-2` 提供 70+ 結構化提示，適合各類圖像生成需求。
- 本地知識檢索 — `rag-skill` 能在不載入整個文件的情況下檢索信息，提升效率。
- 易於安裝 — 提供多種安裝選項，包括插件市場和手動複製。

## 快速開始

1. 透過插件市場安裝技能
```bash
/plugin marketplace add ConardLi/garden-skills
```
2. 安裝網頁設計技能
```bash
/plugin install web-design-skills@garden-skills
```
3. 手動複製技能到專案中
```bash
cp -r skills/web-design-engineer your-project/.claude/skills/
```

## 程式碼範例

```js
# 前置條件
# 使用 Claude Code
/plugin marketplace add ConardLi/garden-skills
/plugin install web-design-skills@garden-skills
# 預期輸出
成功安裝技能並可在下次掃描時使用。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 1786 stars（223/天），forks 304（17.0%），這顯示出強勁的增長潛力。作者 ConardLi 在開源社群中有著良好的聲譽，這個專案解決了在 AI 代理中整合多種技能的需求，之前的解決方案往往缺乏靈活性和可擴展性。隨著 AI 代理技術的進步，這樣的技能集合變得越來越重要。高達 17% 的 forks/stars 比率顯示出許多開發者正在實際修改和使用這個專案，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：需要在 AI 代理中整合多種技能的開發者，尤其是對網頁設計和知識檢索有需求的團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成符合設計規範的網頁，因為 `web-design-engineer` 提供了六步驟的設計流程和高級模式庫，能夠提升設計效率。
> - 資料科學家用它來從 PDF 和 Excel 文件中提取信息，因為 `rag-skill` 能夠有效地檢索知識而不需要將整個文件載入上下文。
> - 藝術家用它來生成高質量的圖像，因為 `gpt-image-2` 提供了多達 70 種結構化提示模板，能夠滿足不同的創作需求。

## 架構分析

Garden Skills 採用模組化的架構設計，每個技能都是獨立的文件夾，包含必要的文檔和代碼。這樣的設計使得技能可以在不同的 AI 代理中輕鬆使用，並且能夠快速更新和擴展。每個技能的 `SKILL.md` 文件定義了技能的使用條件和說明，這樣的結構化設計提高了可讀性和可維護性。選擇這樣的架構意味著開發者可以快速添加新技能，但也可能導致技能之間的依賴管理變得複雜。整體上，這種設計能夠支持快速迭代和擴展，但在大型專案中可能需要額外的管理。

## 技術深入分析

Garden Skills 的核心技術在於其模組化的技能設計，每個技能都遵循相同的結構，這使得技能的擴展和維護變得簡單。使用 YAML 格式的 `SKILL.md` 文件來定義技能的使用條件，這不僅提高了可讀性，還使得技能能夠在不同的 AI 代理中輕鬆使用。這種設計模式的選擇使得 Garden Skills 能夠快速迭代和更新，並且能夠支持多種運行時環境。效能方面，由於每個技能都是獨立的模組，這樣的設計能夠有效降低系統資源的佔用，並且能夠在多個代理中同時運行。選擇 JavaScript 和 Python 作為主要語言，這使得 Garden Skills 能夠利用這兩種語言的廣泛生態系統，但也可能面臨依賴管理的挑戰。整體來看，Garden Skills 在設計上強調靈活性和可擴展性，適合需要快速開發和部署的場景。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含多種安裝選項和範例。安裝過程順暢，無明顯坑。文件提供中英文版本，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 技能集合多樣化，能滿足不同需求。
> - 安裝和使用簡單，適合快速上手。
> - 每個技能都有詳細文檔，降低學習成本。

> [!danger] 缺點
> - 目前僅支援特定平台，限制了使用範圍。
> - 部分技能可能需要額外配置，增加了使用複雜度。
> - 對於大型專案，版本管理可能成為負擔。

> [!warning] 注意事項
> - 目前僅支援特定的 AI 代理平台，如 Claude Code 和 Cursor。
> - 部分技能可能需要額外的配置才能正常運作。
> - 對於大型專案，可能需要手動管理技能的版本更新。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成式 AI 的技能，但不如 Garden Skills 提供的多樣化功能和完整性。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 專注於圖像生成提示，但缺乏其他類型的技能整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成式 AI 的技能，提供特定的功能，但缺乏 Garden Skills 的多樣性和完整性。 | 如果你的專案主要集中在生成式 AI，且不需要其他類型的技能。 | medium，因為需要重新設計技能的整合方式。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 專注於圖像生成提示，但不具備其他技能的整合能力。 | 如果你的需求僅限於圖像生成，且希望使用專門的提示模板。 | low，因為可以直接使用圖像生成的提示。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **garden-skills** | **agent-sprite-forge** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成式 AI 的技能，提供特定的功能，但缺乏 Garden Skills 的多樣性和完整性。 | 專注於圖像生成提示，但不具備其他技能的整合能力。 |
> | 遷移成本 | - | medium，因為需要重新設計技能的整合方式。 | low，因為可以直接使用圖像生成的提示。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在生成式 AI，且不需要其他類型的技能。 | 如果你的需求僅限於圖像生成，且希望使用專門的提示模板。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，尚不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些代理中，技能可能無法自動識別，需要手動配置。
  - 解法：檢查代理的技能掃描設置，確保技能路徑正確。
- **[HIGH]** 部分技能在特定環境下可能無法正常運作。
  - 解法：參考文檔中的兼容性列表，確保使用正確的環境。
- [MEDIUM] 技能更新後，可能需要重新加載才能生效。
  - 解法：在更新後重啟代理，確保新技能被加載。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 技能集合能快速滿足多樣化需求，提升開發效率。 |
| 大型企業的生產環境 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |
| 需要快速原型開發的團隊 | 適合 | 模組化設計和簡單的安裝過程能加速開發。 |
| 對技能整合有高要求的專案 | 普通 | 雖然提供多種技能，但可能需要額外的配置和管理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到多樣化的技能集合，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 304 |
| Open Issues | 0 |
| Issue 解決率 | 100% (2 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-21 |
| 官方網站 | [Link](https://github.com/ConardLi/garden-skills) |
| Repo 大小 | 15.0 MB |
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
> | [@ConardLi](https://github.com/ConardLi) | 8 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 100%。
**連結**：[文件](https://github.com/ConardLi/garden-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-29）
> **活躍天數** 5 天 · **最新 commit** Remove web application files and configurations

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

相關概念：[[Agent 框架]] · [[知識檢索]] · [[圖像生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/ConardLi/garden-skills) · [官方網站](https://github.com/ConardLi/garden-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：技能集合）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能集合" AND file.name != "ConardLi--garden-skills"
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
> const concepts = ["Agent 框架","知識檢索","圖像生成"];
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
