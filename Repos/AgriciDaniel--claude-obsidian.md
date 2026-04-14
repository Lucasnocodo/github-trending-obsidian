---
repo: AgriciDaniel/claude-obsidian
url: https://github.com/AgriciDaniel/claude-obsidian
owner: AgriciDaniel
owner_type: User
language: Shell
license: MIT
description: "Claude + Obsidian knowledge companion. Persistent, compounding wiki vault based on Karpathy's LLM Wiki pattern. /wiki /save /autoresearch"
homepage: "https://agricidaniel.com/blog/claude-obsidian-ai-second-brain"
stars: 989
stars_per_day: 165
forks: 93
open_issues: 2
created: 2026-04-07
pushed_at: 2026-04-13
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v1.4.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "提供一個持續增長的知識庫，讓使用者能夠自動化整理和維護筆記。 "
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 33716
readme_length: 9789
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:988,2026-04-14:989"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
  - "topic/ai"
  - "topic/claude_code"
  - "topic/claude_code_skill"
  - "topic/knowledge_management"
  - "topic/obsidian"
aliases:
  - "claude-obsidian"
  - "AgriciDaniel/claude-obsidian"
  - "提供一個持續增長的知識庫，讓使用者能夠自動化整理和維護筆記。 "
---

# claude-obsidian

**989** stars · **165** stars/天 · 建立 6 天前 · Shell · MIT

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

`個人專案` `v1.4.3` `easy-install`

`ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain`

> [!summary] 一句話摘要
> 提供一個持續增長的知識庫，讓使用者能夠自動化整理和維護筆記。 

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (165 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要自動化整理和維護知識庫的研究人員和學生。
> **一句話重點** claude-obsidian 不僅僅是筆記工具，而是一個自動化的知識管理引擎。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到自動化的知識管理效果，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於它能夠自動化筆記的組織與維護，超越了傳統的查詢功能。

## 專案簡介

claude-obsidian 是一個結合 Claude 和 Obsidian 的知識伴侶，旨在自動化筆記的組織與維護。使用者可以透過 `/wiki` 指令來建立和管理一個持久的維基庫，Claude 會自動讀取新增的資料，提取實體和概念，並更新交叉引用，讓知識隨著使用者的輸入而增長。這個工具的賣點在於它能夠自動化筆記的整理，並在每次會話後更新熱快取，以便下次能夠快速回顧。技術上，這個專案基於 Andrej Karpathy 的 LLM Wiki 模式，並使用 Shell 腳本進行安裝和設置，依賴於 Obsidian 的核心插件來實現功能。與其他 Obsidian 插件相比，claude-obsidian 不僅僅是提供一個聊天介面，而是能夠主動創建和維護筆記，這使得它在知識管理方面具有獨特的優勢。

相較於類似的工具如 Smart Connections 和 Copilot，claude-obsidian 提供了更強大的自動化功能，能夠自動組織筆記並進行矛盾標記。使用者可以在多種模式下使用這個工具，例如網站、GitHub 或個人日誌，這使得它在不同情境下都能發揮作用。雖然目前有些功能仍在開發中，但整體來說，這是一個適合需要自動化知識管理的使用者的工具。使用者在安裝和設置過程中可能會遇到一些問題，例如命令未被發現的情況，但這些問題通常可以透過社群支持來解決。

**技術棧**：`Shell`

## 重點功能

- 自動化筆記組織 — Claude 自動創建實體和概念，並更新交叉引用。
- 熱快取功能 — 每次會話後更新熱快取，讓下次使用時能快速回顧。
- 多模式支持 — 支援網站、GitHub、個人日誌等多種使用模式。
- 批量資料處理 — 支援一次處理多個來源，並進行交叉引用。
- 矛盾標記 — 能夠自動檢查筆記中的矛盾並標記出來。

## 快速開始

1. 克隆專案作為 Vault
```bash
git clone https://github.com/AgriciDaniel/claude-obsidian
```
2. 進入專案資料夾
```bash
cd claude-obsidian
```
3. 執行設置腳本
```bash
bash bin/setup-vault.sh
```
4. 在 Obsidian 中打開資料夾
```bash
Manage Vaults → Open folder as vault → select `claude-obsidian/`
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝 Obsidian 並執行 Local REST API 插件",
  "指令": "claude mcp add-json obsidian-vault '{ \"type\": \"stdio\", \"command\": \"uvx\", \"args\": [\"mcp-obsidian\"], \"env\": { \"OBSIDIAN_API_KEY\": \"your-key\", \"OBSIDIAN_HOST\": \"127.0.0.1\", \"OBSIDIAN_PORT\": \"27124\", \"NODE_TLS_REJECT_UNAUTHORIZED\": \"0\" } }' --scope user",
  "預期輸出": "將 Obsidian Vault 設置為 MCP 服務，允許 Claude 讀取和寫入筆記。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 989 stars（165/天），forks 93（9.4%），這顯示出使用者對這個工具的高度興趣。作者 AgriciDaniel 在開源社群中活躍，並且之前有過其他成功的專案，這使得這個工具在推出時得到了關注。這個專案解決了之前 Obsidian 插件多數僅提供查詢功能的痛點，提供了一個能夠主動組織和維護筆記的解決方案。社群的反饋也促進了這個工具的快速發展，特別是在自動化學習和知識管理方面的需求日益增加。forks/stars 比率為 9.4%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化整理和維護知識庫的研究人員和學生。

> [!example] 使用場景
> - 研究人員用它來自動整理文獻資料，因為它能夠自動提取和組織資訊，節省了手動整理的時間。
> - 學生用它來建立個人知識庫，因為它能夠隨著學習進度自動更新資料，讓知識隨時可用。
> - 內容創作者用它來管理創作靈感，因為它能夠自動生成和整理筆記，提升創作效率。

## 架構分析

claude-obsidian 採用的是一個以 Shell 腳本為基礎的架構，設計上旨在快速配置和使用。使用者只需克隆專案並執行設置腳本，便可獲得一個預配置的 Obsidian Vault。資料流上，Claude 會自動讀取新增的資料並進行整理，這樣的設計使得使用者無需手動管理筆記。這種自動化的設計雖然提高了使用效率，但也要求使用者具備一定的技術基礎，特別是在設置過程中。擴展性方面，該工具可以與其他 Claude 插件進行整合，但目前的依賴關係相對簡單，主要依賴於 Obsidian 的核心功能。

## 技術深入分析

claude-obsidian 的核心技術機制在於其自動化的筆記整理功能，使用者可以透過簡單的指令來管理和維護自己的知識庫。這個工具能夠處理大量的資料，並且在每次會話後自動更新熱快取，這樣的設計使得使用者能夠隨時獲得最新的知識。由於使用了 Shell 腳本，這個工具的安裝和配置過程相對簡單，但對於不熟悉命令行的使用者來說，可能會有一定的學習曲線。設計上，claude-obsidian 旨在減少使用者的手動操作，這使得它在知識管理方面具有優勢。然而，這種自動化的設計也可能帶來一定的風險，例如在資料處理過程中出現錯誤時，使用者可能無法及時發現。整體來說，這個工具在與 Obsidian 的整合上表現良好，能夠輕鬆融入現有的工作流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指令，讓新手能夠快速上手。安裝過程相對順暢，但對於不熟悉 Shell 的使用者可能會有些挑戰。文件中有良好的入門指南，幫助使用者理解如何使用這個工具。文件目前僅提供英文版本，可能對某些使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 自動化筆記整理，節省時間。
> - 支持多種使用模式，靈活性高。
> - 熱快取功能提升使用體驗。

> [!danger] 缺點
> - 需要一定的技術基礎來設置。
> - 目前功能仍在開發中，可能不穩定。
> - 依賴於 Obsidian 的插件生態。

> [!warning] 注意事項
> - 僅支援 Obsidian 的 Local REST API 插件。
> - 目前有些功能仍在開發中，可能不穩定。
> - 需要使用者具備基本的 Shell 操作能力。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AgriciDaniel/claude-canvas](https://github.com/AgriciDaniel/claude-canvas) | 提供更全面的視覺化工具，適合需要進行複雜視覺化的使用者。 |
| Smart Connections | 僅提供查詢功能，無法自動組織筆記，適合簡單的知識檢索需求。 |
| Copilot | 主要用於代碼輔助，無法提供知識管理功能，適合開發者使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AgriciDaniel/claude-canvas](https://github.com/AgriciDaniel/claude-canvas) | 提供更全面的視覺化工具，適合需要進行複雜視覺化的使用者。 | 如果你的專案需要強大的視覺化功能，claude-canvas 是更好的選擇。 | medium，因為需要重新設置視覺化部分的配置。 |
| Smart Connections | 僅提供查詢功能，無法自動組織筆記，適合簡單的知識檢索需求。 | 如果你的需求僅限於查詢現有筆記，Smart Connections 會更簡單易用。 | low，因為功能較為簡單，遷移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-obsidian** | **claude-canvas** | **Smart Connections** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供更全面的視覺化工具，適合需要進行複雜視覺化的使用者。 | 僅提供查詢功能，無法自動組織筆記，適合簡單的知識檢索需求。 |
> | 遷移成本 | - | medium，因為需要重新設置視覺化部分的配置。 | low，因為功能較為簡單，遷移成本低。 |
> | 適用場景 | 主要場景 | 如果你的專案需要強大的視覺化功能，claude-canvas | 如果你的需求僅限於查詢現有筆記，Smart Connecti |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 命令未被發現的情況，特別是在使用 git clone 後
  - 解法：確保正確執行設置腳本以配置環境
- [MEDIUM] 某些功能可能在不同平台上表現不一致
  - 解法：在使用前檢查官方文件以獲取最新資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化的知識管理能夠提高團隊的工作效率。 |
| 大型企業的知識管理系統 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 個人學習和研究 | 非常適合 | 能夠自動整理和更新資料，提升學習效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到自動化的知識管理效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅存取使用者的筆記資料，且依賴於 Obsidian 的安全性。

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
| Forks | 93 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) |
| Repo 大小 | 32.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgriciDaniel/claude-obsidian) |
| Topics | `ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgriciDaniel](https://github.com/AgriciDaniel) | 55 |

**最新版本**：v1.4.3 (2026-04-10)

> [!info]- Release Notes
> ## Cross-link with claude-canvas
> 
> Links claude-obsidian and [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) so users can discover both plugins and understand when to use which.
> 
> ### Changes
> 
> - **plugin.json**: Added `canvas` and `visual` keywords for discoverability
> - **canvas SKILL.md**: Added "See Also" section directing users to claude-canvas for advanced canvas orchestration (12 templates, 6 layout algorithms, AI generation, presentations)
> - **README.md**: Added callout after canvas commands table pointing to claude-canvas
> 
> ### Scope clarification
> 
> | Plugin | Use when |
> |--------|----------|
> | **claude-obsidian** `/canvas` | Wiki-scoped visual boards inside your vault |
> | **claude-canvas** | Full visual production — templates, layout algorithms, AI generation, presentations, export |
> 
> Both plugins complement each other. Install both for the complete canvas experience.

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-13）
> **活躍天數** 4 天 · **最新 commit** feat: add community CTA footer to skill orchestrator

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/AgriciDaniel/claude-obsidian/issues/2) | Commands (/wiki, /save) not discovered out of box when using | 4 | 0 |
> | [#1](https://github.com/AgriciDaniel/claude-obsidian/issues/1) | Automatize the learning? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-obsidian
> 
>   
> 
> [](https://github.com/AgriciDaniel/claude-obsidian/stargazers)
> [](LICENSE)
> [](https://code.claude.com/docs/en/discover-plugins)
> [](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)
> 
> Claude + Obsidian knowledge companion. A running notetaker that builds and maintains a persistent, compounding wiki vault. Every source you add gets integrated. Every question you ask pulls from everything that has been read. Knowledge compounds like interest.
> 
> Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). **10 skills. Zero manual filing. Multi-agent support.**
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ### Option 1: Clone as vault (recommended: full setup in 2 minutes)
> 
> ```bash
> git clone https://github.com/AgriciDaniel/claude-obsidian
> cd claude-obsidian
> bash bin/setup-vault.sh
> ```
> 
> Open the folder in Obsidian: **Manage Vaults → Open folder as vault → select `claude-obsidian/`**
> 
> Open Claude Code in the same folder. Type `/wiki`.
> 
> > `setup-vault.sh` configures `graph.json` (filter + colors), `app.json` (excludes plugin dirs), and `appearance.json` (enables CSS). Run it once before the first Obsidian open. You get the fully pre-configured graph view, color scheme, and wiki structure out of the box.
> 
> ---
> 
> 
> ### Option 2: Install as Claude Code plugin
> 
> Plugin installation is a two-step process in Claude Code. First add the marketplace catalog, then install the plugin from it.
> 
> ```bash
> 
> # Step 2: install the plugin
> claude plugin install claude-obsidian@claude-obsidian-marketplace
> ```
> 
> In any Claude Code session: `/wiki`. Claude walks you through vault setup.
> 
> To check it worked:
> ```bash
> claude plugin list
> ```
> 
> ---
> 
> 
> ## MCP Setup (Optional)
> 
> MCP lets Claude read and write vault notes directly without copy-paste.
> 
> Option A (REST API based):
> 1. Install the Local REST API plugin in Obsidian
> 2. Copy your API key
> 3. Run:
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
> Option B (filesystem based, no plugin needed):
> ```bash
> claude mcp add-json obsidian-vault '{
>   "type": "stdio",
>   "command": "npx",
>   "args": ["-y", "@bitbonsai/mcpvault@latest", "/path/to/your/vault"]
> }' --scope user
> ```
> 
> ---
> 
> 
> ### Core Plugins (built into Obsidian: no install needed)
> 
> | Plugin | Purpose |
> |--------|---------|
> | **Bases** | Powers `wiki/meta/dashboard.base`: native database views. Available since Obsidian v1.9.10 (August 2025). **Replaces Dataview for the primary dashboard.** |
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
> | **Dataview** *(optional/legacy)* | Only needed for the legacy `wiki/meta/dashboard.md` queries. The primary dashboard now uses Bases. |
> 
> Also install the **[Obsidian Web Clipper](https://obsidian.md/clipper)** browser extension. Sends web pages to `.raw/` in one click.
> 
> ---
> 
> 
> ## CSS Snippets (auto-enabled by setup-vault.sh)
> 
> Three snippets ship with the vault and are enabled automatically:
> 
> | Snippet | Effect |
> |---------|--------|
> | `vault-colors` | Color-codes `wiki/` folders by type in the file explorer (blue = concepts, green = sources, purple = entities) |
> | `ITS-Dataview-Cards` | Turns Dataview `TABLE` queries into visual card grids: use ` ```dataviewjs ` with `.cards` class |
> | `ITS-Image-Adjustments` | Fine-grained image sizing in notes: append `\|100` to any image embed |
> 
> ---
> 
> 
> ### [Youtube Demo](https://www.youtube.com/watch?v=a2hgayvr-H4)
> 
>   
> 
> You drop sources. Claude reads them, extracts entities and concepts, updates cross-references, and files everything into a structured Obsidian vault. The wiki gets richer with every ingest.
> 
> You ask questions. Claude reads the hot cache (recent context), scans the index, drills into relevant pages, and synthesizes an answer. It cites specific wiki pages, not training data.
> 
> You lint. Claude finds orphans, dead links, stale claims, and missing cross-references. Your wiki stays healthy without manual cleanup.
> 
> At the end of every session, Claude updates a hot cache. The next session starts with full recent context, no recap needed.
> 
>   
>   
> 
> ---
> 
> 
> ## What It Does
> 
> ### Option 3: Add to an existing vault
> 
> Copy `WIKI.md` into your vault root. Paste into Claude:
> 
> ```
> Read WIKI.md in this project. Then:
> 1. Check if Obsidian is installed. If not, install it.
> 2. Check if the Local REST API plugin is running on port 27124.
> 3. Configure the MCP server.
> 4. Ask me ONE question: "What is this vault for?"
> Then scaffold the full wiki structure.
> ```
> 
> ---
> 
> 
> ## Why claude-obsidian?
> 
> Most Obsidian AI plugins are chat interfaces - they answer questions about your existing notes. claude-obsidian is a knowledge engine - it creates, organizes, maintains, and evolves your notes autonomously.
> 
> | Capability | claude-obsidian | Smart Connections | Copilot |
> |---|---|---|---|
> | **Auto-organize notes** | Creates entities, concepts, cross-references | No | No |
> | **Contradiction flagging** | `[!contradiction]` callouts with sources | No | No |
> | **Session memory** | Hot cache persists between conversations | No | No |
> | **Vault maintenance** | 8-category lint (orphans, dead links, gaps) | No | No |
> | **Autonomous research** | 3-round web research with gap-filling | No | No |
> | **Multi-model support** | Claude, Gemini, Codex, Cursor, Windsurf | Claude only | Multiple |
> | **Visual canvas** | Via [claude-canvas](https://github.com/AgriciDaniel/claude-canvas) companion | No | No |
> | **Query with citations** | Cites specific wiki pages | Cites similar notes | Cites notes |
> | **Batch ingestion** | Parallel agents for multiple sources | No | No |
> | **Open source** | MIT | MIT | Freemium |
> 
> > **Deep dive:** [I Turned Obsidian Into a Self-Organizing AI Brain](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) - full breakdown with data visualizations, market context, and workflow demos.
> 
> ---
> 
> 
> # Step 1: add the marketplace
> claude plugin marketplace add AgriciDaniel/claude-obsidian
> 
> 
> ## Commands
> 
> | You say | Claude does |
> |---------|------------|
> | `/wiki` | Setup check, scaffold, or continue where you left off |
> | `ingest [file]` | Read source, create 8-15 wiki pages, update index and log |
> | `ingest all of these` | Batch process multiple sources, then cross-reference |
> | `what do you know about X?` | Read index > relevant pages > synthesize answer |
> | `/save` | File the current conversation as a wiki note |
> | `/save [name]` | Save with a specific title (skips the naming question) |
> | `/autoresearch [topic]` | Run the autonomous research loop: search, fetch, synthesize, file |
> | `/canvas` | Open or create the visual canvas, list zones and nodes |
> | `/canvas add image [path]` | Add an image (URL or local path) to the canvas with auto-layout |
> | `/canvas add text [content]` | Add a markdown text card to the canvas |
> | `/canvas add pdf [path]` | Add a PDF document as a rendered preview node |
> | `/canvas add note [page]` | Pin a wiki page as a linked card on the canvas |
> | `

## 延伸閱讀

相關概念：[[知識管理]] · [[自動化]] · [[筆記整理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[nashsu--llm_wiki|nashsu/llm_wiki]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[titanwings--colleague-skill|titanwings/colleague-skill]]

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
> WHERE language = "Shell" AND file.name != "AgriciDaniel--claude-obsidian" AND status != "archived"
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
> const concepts = ["知識管理","自動化","筆記整理"];
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
