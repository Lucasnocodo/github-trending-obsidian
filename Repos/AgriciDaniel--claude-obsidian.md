---
repo: AgriciDaniel/claude-obsidian
url: https://github.com/AgriciDaniel/claude-obsidian
owner: AgriciDaniel
owner_type: User
language: Python
license: MIT
description: "Claude + Obsidian knowledge companion. Persistent, compounding wiki vault based on Karpathy's LLM Wiki pattern. /wiki /save /autoresearch"
homepage: "https://agricidaniel.com/blog/claude-obsidian-ai-second-brain"
stars: 3415
stars_per_day: 180
forks: 407
open_issues: 13
created: 2026-04-07
pushed_at: 2026-04-24
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "知識管理"
release_tag: "v1.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "讓 Claude 和 Obsidian 結合，打造一個持久且自我增長的知識庫。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 24
repo_size_kb: 33722
readme_length: 9950
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:988,2026-04-14:989,2026-04-15:1184,2026-04-16:1364,2026-04-17:1488,2026-04-18:1696,2026-04-19:1915,2026-04-20:2134,2026-04-21:2308,2026-04-22:2685,2026-04-23:2902,2026-04-24:3114,2026-04-25:3257,2026-04-26:3330,2026-04-27:3415"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/ai"
  - "topic/claude_code"
  - "topic/claude_code_skill"
  - "topic/knowledge_management"
  - "topic/obsidian"
aliases:
  - "claude-obsidian"
  - "AgriciDaniel/claude-obsidian"
  - "讓 Claude 和 Obsidian 結合，打造一個持久且自我增長的知識庫。"
---

# claude-obsidian

**3.4k** stars · **180** stars/天 · 建立 19 天前 · Python · MIT

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

`個人專案` `v1.6.0`

`ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain`

> [!summary] 一句話摘要
> 讓 Claude 和 Obsidian 結合，打造一個持久且自我增長的知識庫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (180 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要自動化知識管理流程的研究人員和內容創作者。
> **一句話重點** claude-obsidian 不僅是個筆記工具，更是一個自動化的知識引擎，能夠隨著使用者的需求不斷增長和演化。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到自動化的知識管理，值得投資。

> [!abstract] 核心創新
> DragonScale 記憶層提供了多種增強維基運作的機制，如折疊滾動和邊界優先的自動研究。

## 專案簡介

**核心機制**

claude-obsidian 是一個結合 Claude AI 和 Obsidian 的知識管理工具，旨在自動化筆記的創建、組織和維護。用戶只需將資料來源添加進來，Claude 會自動提取實體和概念，並更新交叉引用，最終形成一個結構化的維基庫。這個過程中，Claude 會利用熱快取來保持上下文，並在每次會話結束時更新資料，讓下一次使用時無需重複回顧。核心命令如 `/wiki` 用於設置和繼續上次的工作，而 `/save` 則可將當前對話存檔為維基筆記。這種設計使得知識的增長如同利息累積，隨著使用時間的增加，維基庫的價值也會隨之提升。

**技術實作**



技術上，claude-obsidian 使用 Python 和 Shell，並依賴於 Obsidian 的內建功能和社群插件來實現其功能。它的 DragonScale 記憶層提供了多種機制來增強維基的運作，像是折疊滾動和邊界優先的自動研究。這些技術選擇使得該工具在處理資料時具備高效能，能夠快速響應用戶的查詢。

與其他類似工具相比，claude-obsidian 的自動組織和維護功能是其最大的優勢。傳統的 Obsidian 插件多數僅提供查詢功能，而這個工具則能主動創建和整理筆記，並且支持多模型的查詢，這使得它在知識管理上更具優勢。

**競品比較**

對於需要持續更新和維護知識庫的用戶來說，claude-obsidian 是一個理想的選擇。

在實際使用中，該工具能夠處理大量資料，並且在維護維基的健康狀態上表現良好。用戶可能會遇到的常見問題包括初次設置時的命令未被發現，這可以通過正確的安裝步驟來解決。社群活躍度適中，開發者對於問題的回應速度也相對及時。

目前該專案處於 beta 階段，適合小型團隊或個人使用，未來可能會進一步增強功能和穩定性。

**效果與限制**

對於需要快速建立和維護知識庫的用戶，這是一個值得考慮的工具。

**技術棧**：`Python` · `Shell` · `Makefile`

## 重點功能

- 自動組織筆記 — Claude 自動創建實體和概念，並更新交叉引用。
- 熱快取 — 會話間保持上下文，無需重複回顧。
- 多模型支持 — 支持 Claude、Gemini、Codex 等多種模型進行查詢。
- 維基健康檢查 — 自動檢查孤立頁面、死鏈接和缺失的交叉引用。
- 自動研究 — 進行三輪網路研究，填補知識空白。

## 快速開始

1. 克隆專案並設置 Vault
```bash
git clone https://github.com/AgriciDaniel/claude-obsidian
cd claude-obsidian
bash bin/setup-vault.sh
```
2. 在 Obsidian 中打開 Vault
```bash
Manage Vaults → Open folder as vault → select `claude-obsidian/`
```
3. 在 Claude Code 中使用 `/wiki` 命令
```bash
/wiki
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Obsidian 和 Claude Code。",
  "指令": "claude plugin install claude-obsidian@claude-obsidian-marketplace",
  "預期輸出": "安裝成功後，可以使用 `/wiki` 命令進行設置。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天內累積 3415 stars（180/天），forks 407（11.9%），顯示出強勁的增長潛力。作者 AgriciDaniel 在 AI 和知識管理領域有著豐富的經驗，這個工具解決了傳統維基管理的痛點，特別是自動化和智能化的需求。這個專案的推出引起了社群的廣泛關注，尤其是在知識管理和 AI 整合的討論中。技術生態的變化使得這種工具的實現成為可能，特別是 Claude AI 的進步使得知識管理的自動化變得可行。forks/stars 比率為 11.9%，顯示出使用者對於修改和自定義的需求。

## 適合誰使用

**目標受眾**：需要自動化知識管理流程的研究人員和內容創作者。

> [!example] 使用場景
> - 研究人員用它來自動整理文獻和筆記，因為它能夠自動提取關鍵概念並更新交叉引用，節省了大量手動整理的時間。
> - 學生用它來建立個人知識庫，因為它可以根據上課內容自動生成相關的維基頁面，讓學習變得更高效。
> - 內容創作者用它來管理靈感和資料來源，因為它的自動化功能能夠幫助他們快速整理和查找所需的資料。

## 架構分析

claude-obsidian 採用模組化設計，核心功能由 Claude AI 驅動，並透過 Obsidian 的插件架構進行擴展。資料流經由用戶輸入的資料來源，Claude 解析後生成維基頁面，並更新交叉引用。這種設計使得知識的增長和維護變得自動化，減少了手動操作的需求。選擇 Python 作為主要開發語言，因其在 AI 和數據處理上的優勢，然而這也可能導致較高的資源消耗。擴展性方面，該工具能夠支持多模型查詢，但在處理大量資料時可能會面臨性能瓶頸。

## 技術深入分析

claude-obsidian 的核心技術機制是基於 Claude AI 的自動化知識管理，通過解析用戶提供的資料來源，自動生成維基頁面。這個過程中，Claude 會提取實體和概念，並更新交叉引用，形成一個動態的知識庫。該工具能夠處理大量資料，並在每次會話結束時更新熱快取，以保持上下文的連貫性。選擇 Python 作為開發語言是因為它在 AI 和數據處理上的優勢，但這也可能導致較高的資源消耗。設計上，claude-obsidian 需要依賴 Obsidian 的插件架構，這使得其在功能擴展上具備靈活性，但也可能面臨穩定性挑戰。技術風險方面，隨著資料量的增加，性能瓶頸可能成為一個潛在問題，特別是在高頻率的查詢和更新操作中。整合方面，與主流的開發工具鏈（如 VS Code 和 GitHub）相容性良好，但在 CI/CD 流程中的整合可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用指令，整體清晰易懂。安裝過程相對順暢，但初次設置時可能會遇到命令未被發現的問題。文件中包含了快速入門指南，對於新手來說非常友好。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化知識管理，減少手動維護的需求。
> - 支持多模型查詢，提供靈活的使用選擇。
> - 維基健康檢查功能，保持資料的完整性和準確性。

> [!danger] 缺點
> - 初次設置可能會遇到命令未被發現的問題。
> - 需要依賴社群插件，可能影響穩定性。
> - 對於大型資料集的處理性能可能不足。

> [!warning] 注意事項
> - 初次設置時可能會遇到命令未被發現的問題。
> - 需要正確配置 MCP 服務才能實現 Claude 直接讀寫 Vault 筆記。
> - 部分功能需要依賴社群插件，可能會影響穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了類似的知識管理功能，但主要集中在靜態筆記的組織，而 claude-obsidian 則強調自動化和智能化的維護。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 提供了基於 GPT-2 的文本生成，但缺乏 claude-obsidian 的自動組織和維護功能，適合需要生成文本的場景。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | codeburn 專注於代碼管理，而 claude-obsidian 專注於知識管理，兩者的應用場景和功能需求有明顯不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了靜態筆記的組織功能，但缺乏 claude-obsidian 的自動化維護能力。 | 如果需要一個簡單的筆記管理工具，並且不需要自動化功能，boneyard 是不錯的選擇。 | low，因為兩者的資料結構相似，遷移相對簡單。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 專注於文本生成，並不具備知識管理的功能。 | 如果需要生成文本而非管理知識，gpt2api 更加合適。 | medium，因為需要重新設計資料流和結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-obsidian** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 提供了靜態筆記的組織功能，但缺乏 claude-obsidian 的自動化維護能力。 | gpt2api 專注於文本生成，並不具備知識管理的功能。 |
> | 遷移成本 | - | low，因為兩者的資料結構相似，遷移相對簡單。 | medium，因為需要重新設計資料流和結構。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的筆記管理工具，並且不需要自動化功能，bon | 如果需要生成文本而非管理知識，gpt2api 更加合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊或個人使用，未來可能會進一步增強功能和穩定性。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 初次設置時可能會遇到命令未被發現的問題。
  - 解法：確保按照 README 中的安裝步驟進行設置。
- [MEDIUM] 需要正確配置 MCP 服務才能實現 Claude 直接讀寫 Vault 筆記。
  - 解法：參考官方文檔進行 MCP 配置。
- [MEDIUM] 部分功能需要依賴社群插件，可能會影響穩定性。
  - 解法：定期檢查插件更新，保持環境穩定。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化知識管理能夠提升團隊的工作效率。 |
| 大型研究機構的知識庫管理 | 適合 | 能夠處理大量資料並保持資料的健康狀態。 |
| 個人使用的筆記工具 | 非常適合 | 自動化功能能夠減少手動維護的需求。 |
| 需要高頻率更新的商業專案 | 普通 | 在高頻率查詢時可能會面臨性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到自動化的知識管理，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度良好，無已知供應鏈風險。

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
| Forks | 407 |
| Open Issues | 13 |
| Issue 解決率 | 24% (4 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-07 |
| 官方網站 | [Link](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain) |
| Repo 大小 | 32.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AgriciDaniel/claude-obsidian) |
| Topics | `ai` `claude-code` `claude-code-skill` `knowledge-management` `obsidian` `open-source` `second-brain` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 69
>     "Shell" : 29
>     "Makefile" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AgriciDaniel](https://github.com/AgriciDaniel) | 155 |

**最新版本**：v1.6.0 — v1.6 (2026-04-24)

> [!info]- Release Notes
> > DragonScale is now a four-mechanism, opt-in memory layer for LLM wiki vaults.
> 
> ![DragonScale Memory mechanism overview](https://raw.githubusercontent.com/AgriciDaniel/claude-obsidian/main/wiki/meta/dragonscale-mechanism-overview.png)
> 
> ## TL;DR
> 
> - Shipped: DragonScale now has fold rollups, deterministic page addresses, semantic tiling lint, and boundary-first autoresearch.
> - Gated on: `bash bin/setup-dragonscale.sh`, plus local dependencies per mechanism.
> - Did not ship: fold-of-folds, calibrated tiling thresholds, hosted mode, or multi-vault rollup.
> 
> ## Same-day release sequence
> 
> The plugin version is `1.6.0` and the annotated tag `v1.6.0` points at the release commit on `main`.
> 
> The narrative below includes `1.5.0`, `1.5.1`, and `1.6.0` because 2026-04-24 bundled three local release states into one cycle.
> 
> `1.5.0` was Phase 3.5.
> It hardened the DragonScale base.
> It added the installer, test harness, changelog, Makefile targets, and opt-in wiring for the first three mechanisms.
> It also synced plugin metadata to `1.5.0`.
> 
> `1.5.1` was Phase 3.6.
> It fixed five narrow issues before Phase 4.
> Those fixes covered tiling report path confinement, rollout baseline date, AGENTS wording, `.raw/` manifest wording, and install-guide version drift.
> 
> `1.6.0` was Phase 4.
> It shipped Mechanism 4: boundary-first autoresearch.
> It added `scripts/boundary-score.py`, wired no-topic `/autoresearch` into frontier suggestions, added boundary-score tests, and bumped the DragonScale spec to v0.4.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度適中，開發者對問題的回應速度相對及時。
**連結**：[文件](https://agricidaniel.com/blog/claude-obsidian-ai-second-brain)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-24）
> **活躍天數** 1 天 · **最新 commit** docs: fix v1.6.0 release body rendering on GitHub

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/AgriciDaniel/claude-obsidian/issues/2) | Commands (/wiki, /save) not discovered out of box when using | 8 | 2 |

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
> Based on [Andrej Karpathy's LLM Wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f). **11 skills. Zero manual filing. Multi-agent support. Optional [DragonScale Memory](docs/dragonscale-guide.md) extension** (log folds, deterministic page addresses, semantic tiling lint, boundary-first autoresearch).
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
> | `/canvas add text [content]` | Add a markdown text card to the canvas 

## 延伸閱讀

相關概念：[[知識管理]] · [[自動化]] · [[AI 助手]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[nashsu--llm_wiki|nashsu/llm_wiki]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

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
> const concepts = ["知識管理","自動化","AI 助手"];
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
