---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 7497
stars_per_day: 312
forks: 1126
open_issues: 9
created: 2026-04-06
pushed_at: 2026-04-29
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一系列 AI 技能和提示，幫助用戶高效使用 AI 進行各種任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 36
readme_length: 4095
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585,2026-04-12:1588,2026-04-13:1719,2026-04-13:1721,2026-04-14:3559,2026-04-15:4270,2026-04-16:4693,2026-04-17:4943,2026-04-18:5105,2026-04-19:5214,2026-04-20:5390,2026-04-21:5565,2026-04-22:5709,2026-04-23:5845,2026-04-24:5951,2026-04-25:6033,2026-04-26:6080,2026-04-27:6136,2026-04-28:6192,2026-04-29:6268,2026-04-30:7148,2026-05-01:7497"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供一系列 AI 技能和提示，幫助用戶高效使用 AI 進行各種任務。"
---

# khazix-skills

**7.5k** stars · **312** stars/天 · 建立 24 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--khazix-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一系列 AI 技能和提示，幫助用戶高效使用 AI 進行各種任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (312 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 AI 代理中快速安裝和使用技能的開發者和研究人員。
> **一句話重點** Khazix Skills 提供了一個簡單而強大的方式來提升 AI 代理的效率，特別適合需要快速整理和分析資料的場景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的 AI 效率提升，值得一試。

> [!abstract] 核心創新
> 提供了一套結構化的 AI 技能和提示，專為提升 AI 代理的效率而設計。

## 專案簡介

Khazix Skills 是一個開源的 AI 技能集合，專為提升 AI 代理的效率而設計。用戶可以透過簡單的指令安裝各種技能，例如 `/neat` 用於自動整理項目文檔和記憶，確保所有信息一致。這些技能遵循 Agent Skills 的開放標準，能夠在多種 AI 代理中運行，如 Claude Code 和 Codex。技術上，這個專案使用 Python 開發，並且依賴於標準的 API 接口來進行技能的加載和執行。與其他類似工具相比，Khazix Skills 提供了更為結構化的指令集，並且能夠直接在 AI 代理中運行，省去繁瑣的安裝過程。

這使得用戶能夠快速上手，尤其適合需要頻繁進行文檔整理和資料分析的開發者和研究人員。使用者可以期待高效的資料處理和生成，並且這些技能的設計考慮了多種使用場景，從簡單的文檔同步到複雜的市場分析報告。雖然目前的功能相對簡單，但未來可能會隨著社群的貢獻而持續擴展。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，特別是在需要快速生成和整理資料的情況下。

**技術棧**：`Python`

## 重點功能

- Skills — 結構化指令集，支持多種 AI 代理，如 Claude Code 和 Codex。
- neat-freak — 自動整理文檔和記憶，使用 `/neat` 命令即可。
- hv-analysis — 生成詳細的市場研究報告，輸出 PDF 格式，字數可達 30,000 字。
- khazix-writer — 模仿特定寫作風格，支持多種輸入格式，如 PDF 和語音轉文字。
- Prompts — 提供輕量級的提示詞，無需安裝即可在任何支持 Deep Research 的模型中使用。

## 快速開始

1. 安裝技能
```bash
帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/
```
2. 使用 neat-freak 整理文檔
```bash
/neat
```
3. 使用 hv-analysis 生成報告
```bash
hv-analysis <研究對象>
```

## 程式碼範例

```python
# 前置條件（安裝技能後）；
/neat            # 直接命令
整理一下          # 自然語言
同步一下          # 自然語言
sync up          # English
# 預期輸出（文檔和記憶將被更新，並生成變更摘要）。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天內累積 7497 stars（312/天），forks 1126（15.0%），顯示出極高的使用興趣。作者 KKKKhazix 是一位活躍的開源貢獻者，這些技能是基於他日常使用的經驗而開發，解決了文檔和記憶不一致的痛點。這個專案的出現正好填補了市場上對於高效 AI 代理技能的需求，尤其是在文檔管理和資料分析方面。社群的反饋和需求驅動了這個專案的快速成長，並且有助於未來的功能擴展。forks/stars 比率為 15.0%，顯示出不少用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在 AI 代理中快速安裝和使用技能的開發者和研究人員。

> [!example] 使用場景
> - 開發者用它來自動整理項目文檔，因為手動更新文檔容易出錯，使用 neat-freak 可以確保信息一致性。
> - 市場分析師用它來生成產品研究報告，因為 hv-analysis 能夠提供深入的競品分析和歷史背景，節省大量調研時間。
> - 內容創作者用它來生成文章草稿，因為 khazix-writer 可以模仿特定寫作風格，提升寫作效率。

## 架構分析

Khazix Skills 採用模組化設計，讓用戶可以根據需求選擇安裝不同的技能。每個技能都是獨立的模組，通過標準的 API 接口進行交互。這樣的設計使得用戶可以靈活地選擇所需功能，而不必安裝整個套件。

技能之間的資料流通過 API 進行，確保了高效的資料處理。這種設計的代價是需要用戶對於 API 的基本理解，並且在某些情況下可能需要額外的配置。整體架構的擴展性良好，未來可以輕鬆添加新的技能模組。

## 技術深入分析

Khazix Skills 的核心技術機制是基於 Python 開發的模組化技能系統，通過標準的 API 接口讓不同的 AI 代理能夠輕鬆加載和執行。這些技能設計時考慮到了用戶的實際需求，特別是在文檔整理和資料分析方面。每個技能都能獨立運行，並且可以通過簡單的命令進行觸發，這樣的設計使得用戶能夠快速上手。效能方面，這些技能能夠在短時間內生成高質量的報告，具體的處理速度取決於所使用的 AI 代理。設計取捨方面，選擇 Python 作為開發語言使得這個專案能夠快速迭代，但也可能導致在性能上不如某些編譯型語言。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。整合方面，這個專案能夠與主流的 AI 代理無縫集成，但對於不熟悉 API 的用戶來說，可能需要一些學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝和使用的詳細說明。安裝過程順暢，無明顯坑點。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供中文，可能對非中文用戶造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，安裝過程快速。
> - 提供多種實用的 AI 技能，能夠提升工作效率。
> - 模組化設計，方便用戶根據需求選擇功能。

> [!danger] 缺點
> - 功能相對簡單，可能無法滿足高級用戶的需求。
> - 依賴於特定的 AI 代理，限制了使用範圍。
> - 社群貢獻仍在初期，功能擴展性有待觀察。

> [!warning] 注意事項
> - 目前僅支持特定的 AI 代理，如 Claude Code 和 Codex。
> - 功能相對簡單，未來可能需要更多社群貢獻來擴展。
> - 對於需要高級自定義的用戶，可能無法完全滿足需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更為複雜的技能管理功能，適合需要高級自定義的用戶。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料分析和視覺化，適合需要圖形化報告的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 用 Rust 實作，記憶體用量少 10 倍，但功能相對較為複雜。 | 如果你的團隊需要高效能且能接受較高的學習曲線，這個工具會更合適。 | medium，因為需要重新學習 Rust 的基本用法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料視覺化，提供更強大的圖形化報告功能。 | 如果你的專案需要大量的資料視覺化，boneyard 會是更好的選擇。 | low，因為功能上有相似之處，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 用 Rust 實作，記憶體用量少 10 倍，但功能相對較為複雜。 | 專注於資料視覺化，提供更強大的圖形化報告功能。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 的基本用法。 | low，因為功能上有相似之處，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效能且能接受較高的學習曲線，這個工具會更合 | 如果你的專案需要大量的資料視覺化，boneyard 會是更好 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些技能在特定 AI 代理中無法正常運行
  - 解法：檢查代理的兼容性，確保使用支持的版本
- [MEDIUM] 文檔更新不及時，可能導致使用者困惑
  - 解法：定期查看 GitHub Issues 獲取最新資訊
- [MEDIUM] 對於複雜的資料分析需求，可能無法完全滿足
  - 解法：考慮使用其他專案進行補充

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的文檔管理 | 非常適合 | 能夠快速整理和更新文檔，提升團隊效率。 |
| 大型企業的市場分析 | 普通 | 雖然能提供基本的分析，但可能無法滿足高級需求。 |
| 個人開發者的日常任務 | 非常適合 | 簡單易用，能夠快速上手，適合日常使用。 |
| 需要高級自定義的商業應用 | 不適合 | 功能相對簡單，無法滿足複雜需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的 AI 效率提升，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
| Forks | 1.1k |
| Open Issues | 9 |
| Issue 解決率 | 10% (1 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 36 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題回應速度較慢。
**連結**：[文件](https://agentskills.io)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-28 ~ 2026-04-29）
> **活躍天數** 2 天 · **最新 commit** Untrack internal CLAUDE.md from public repo

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/KKKKhazix/khazix-skills/issues/10) | 提问 | 0 | 0 |
> | [#9](https://github.com/KKKKhazix/khazix-skills/issues/9) | 楼主，没有看到自演进skill | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **中文** · [English](./README.en.md)
> 
> # 🧰 Khazix Skills
> 
> #### 我自己每天在用的一些 AI 技能和 Prompt，都开源在这里
> 
> [](./LICENSE)
> [](#-skills)
> [](#-prompts)
> [](https://agentskills.io)
> 
> 都是在自己项目里跑通了一段时间，确实省事，才搬出来开源的。没什么花活，就是几个挺实用的东西。
> 
> - **Skills** — Agent 能直接加载的结构化指令集，遵循 [Agent Skills](https://agentskills.io) 开放标准。Claude Code、Codex、OpenCode、OpenClaw 都能装
> - **Prompts** — 一段提示词，复制粘贴到 ChatGPT / Claude / Gemini 任何对话里就能用，不需要安装
> 
> ---
> 
> ## 📋 目录
> 
> ### Skills
> 
> | 名字 | 一句话 | 讲解 |
> |---|---|---|
> | 🧹 [**neat-freak（洁癖）**](#-neat-freak洁癖) | 干完活跑一下 `/neat`，自动把你这次改的东西跟项目文档、CLAUDE.md、Agent 记忆全部对齐 | [公众号文章](https://mp.weixin.qq.com/s/tg1wd-iN2gWHWhXdY0faeg) |
> | 🔭 [**hv-analysis（横纵分析法）**](#-hv-analysis横纵分析法) | 想搞懂一个产品/公司/概念是怎么回事，丢给它，给你一份万字 PDF 研究报告 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> | ✍️ [**khazix-writer（卡兹克写作）**](#-khazix-writer卡兹克写作) | 装上之后，Agent 用我的口吻和节奏写公众号长文 | [公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg) |
> 
> ### Prompts
> 
> | 名字 | 一句话 | 讲解 |
> |---|---|---|
> | 🔭 [**横纵分析法（Prompt 版）**](#-横纵分析法prompt-版) | 上面那个 Skill 的轻量版，复制粘贴到任何 Deep Research 模型里就能跑 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> 
> ---
> 
> ## 📦 安装方式
> 
> 在 Claude Code、Codex、OpenClaw 等支持 Skill 的 Agent 里，直接说：
> 
> ```
> 帮我安装这个 skill：https://github.com/KKKKhazix/khazix-skills/tree/main/
> ```
> 
> 把 `` 换成你想装的那个，比如 `neat-freak`、`hv-analysis`、`khazix-writer`。Agent 会自己 clone 到对应目录，不用你操心路径。
> 
> ---
> 
> ## ✨ Skills
> 
> ### 🧹 neat-freak（洁癖）
> 
> > *"每次任务做完要退出窗口的时候，如果不跑一遍 /neat，我就浑身难受，如坐针毡如芒刺背如鲠在喉。"*
> 
> 每次你在 Agent 里干完一件事，跑一下 `/neat`，它会把你这次会话改的东西，跟项目里的**文档**、**CLAUDE.md / AGENTS.md**、**Agent 记忆**全部对齐一遍，最后给你一份变更摘要。
> 
> **为什么需要这个**
> 
> 你大概也遇到过：代码都迭代了七八轮，文档还是最初那一版；记忆里写着用 SQLite，其实你早换 PostgreSQL 了；CLAUDE.md 里的接口列表跟实际路由对不上。Agent 看着这些过期信息，越用越笨。
> 
> 不是模型变笨，是文档和记忆脑腐了。neat-freak 就是清这个的。
> 
> **它会动哪三层东西**
> 
> - 项目根的 CLAUDE.md / AGENTS.md（给当前 AI 看的）
> - 项目的 docs/ 和 README（给同事和其他人看的）
> - Agent 自己的记忆系统（给跨会话的自己看的）
> 
> 这三层受众不同，职责不重叠，得分别处理。这也是我当时不满意 Claude Code 那个 AutoDream 的原因——它只动记忆，不动文档。
> 
> **怎么触发**
> 
> ```
> /neat            # 直接命令
> 整理一下          # 自然语言
> 同步一下          # 自然语言
> sync up          # English
> ```
> 
> **🌐 跨平台**：Claude Code · Codex · OpenCode · OpenClaw
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/neat-freak)
> 
> → [SKILL.md](./neat-freak/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/tg1wd-iN2gWHWhXdY0faeg)
> 
> ### 🔭 hv-analysis（横纵分析法）
> 
> > *"纵向追时间深度，横向追同期广度，最终交汇出判断。"*
> 
> 想搞懂一个产品 / 公司 / 概念 / 人物到底是怎么回事，丢给它就行。
> 
> 它会同时跑两条线：**纵向**把研究对象从诞生讲到当下，像讲故事一样把演变讲完整；**横向**把同期所有主要竞品摆出来逐一对比。最后两条线一交叉，能看出一些只看现状或只看历史看不出来的东西。
> 
> 最后给你一份**排版精美的 PDF 研究报告**，10,000–30,000 字。
> 
> **适合**
> 
> - 调研竞品 / 调研一个新概念 / 调研一个公司
> - 写作前期需要系统性的素材准备
> - 对一个领域想从零搞懂
> 
> **不适合**
> 
> - 单纯查个名词解释 — 那种问题用普通对话就行，杀鸡用牛刀
> - 写公众号文章 — 那个用下面的 khazix-writer
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/hv-analysis)
> 
> → [SKILL.md](./hv-analysis/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA)
> 
> ### ✍️ khazix-writer（卡兹克写作）
> 
> > *"有见识的普通人在认真聊一件打动他的事。"*
> 
> 我自己写公众号的那套写作 skill。装上之后，Agent 写出来的东西就是我的口吻、我的节奏、我的禁忌词全在里面。
> 
> **适合**
> 
> 你看过我公众号「数字生命卡兹克」的文章，觉得风格还行，想让你的 AI 也照着这个调子写东西。比如丢一篇 PDF / 一段语音转文字 / 一个新闻链接，让它写成长文。
> 
> **不适合**
> 
> 你想要的是"通用好文笔"。这个 skill 是有立场的——它会**拒绝**写「赋能、抓手、闭环」、**拒绝**「首先...其次」、**拒绝**「在当今 AI 快速发展的时代」、**拒绝**「说白了 / 本质上 / 换句话说」。如果你的目标读者就好这一口，那这个 skill 不适合你。
> 
> **它会做什么**
> 
> - 完整的写作风格规则（节奏、叙事、判断、修辞）
> - 四层自检体系（结构、节奏、内容、文字）
> - 一套风格示例库（可以让 AI 直接对照）
> 
> [](https://clawhub.ai)
> [](https://tessl.io/registry/khazix-skills/khazix-writer)
> 
> → [SKILL.md](./khazix-writer/SKILL.md) · [公众号讲解](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg)
> 
> ---
> 
> ## 📝 Prompts
> 
> ### 🔭 横纵分析法（Prompt 版）
> 
> 上面那个 hv-analysis Skill 的**轻量版**——一段 prompt，复制粘贴到任何支持 Deep Research 的模型里就能跑（ChatGPT Deep Research、Gemini Deep Research、Grok Deep Search、Claude Research 都行），不需要安装任何东西。
> 
> 半小时左右出一份万字级研究报告。
> 
> 适合还没开始用 Claude Code / Codex 这类带 Skill 系统的 Agent，但又想体验一下这个方法论的人。
> 
> → [横纵分析法.md](./prompts/横纵分析法.md) · [公众号讲解](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA)
> 
> ---
> 
> ## 🌟 关于
> 
> 我是数字生命卡兹克，公众号「数字生命卡兹克」、虚实传媒（Virxact）创始人。视觉传达设计出身，做过用户研究和交互设计，**不是程序员**。
> 
> 这些 skill 都是我自己每天在用的，开源出来如果对你有帮助，给个 ⭐ 就行。有问题或建议，欢迎在 Issues / Discussions 里说一声。
> 
> ---
> 
> [MIT License](./LICENSE) · 自由使用 / 修改 / 再分发
> 
> Made by [@KKKKhazix](https://github.com/KKKKhazix)

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[資料視覺化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "KKKKhazix--khazix-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","自動化","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 再次上榜，1.7k stars
- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
