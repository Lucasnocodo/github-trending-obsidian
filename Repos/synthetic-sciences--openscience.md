---
repo: synthetic-sciences/openscience
url: https://github.com/synthetic-sciences/openscience
owner: synthetic-sciences
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "The open-source AI workbench for scientific research"
homepage: "https://openscience.sh"
stars: 1431
stars_per_day: 358
forks: 199
open_issues: 18
created: 2026-07-03
pushed_at: 2026-07-07
first_seen: 2026-07-07
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "科學研究工具"
release_tag: "v1.2.10"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-07
use_case: "提供一個 AI 工作平台，讓科學研究自動化進行文獻回顧、實驗和結果撰寫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-11"
contributor_count: 4
engagement: "medium"
issue_close_rate: 81
repo_size_kb: 49910
readme_length: 6508
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-07"
star_history: "2026-07-07:852,2026-07-08:1431"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/agent"
  - "topic/ai"
  - "topic/ai_agent"
  - "topic/bun"
  - "topic/cli"
aliases:
  - "openscience"
  - "synthetic-sciences/openscience"
  - "提供一個 AI 工作平台，讓科學研究自動化進行文獻回顧、實驗和結果撰寫。"
---

# openscience

**852** stars · **284** stars/天 · 建立 3 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/synthetic-sciences--openscience");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.2.10` `easy-install`

`agent` `ai` `ai-agent` `bun` `cli` `co-scientist` `llm` `ml` `ml-engineering` `open-source` `research` `research-tools` `science` `scientific-computing` `typescript`

> [!summary] 一句話摘要
> 提供一個 AI 工作平台，讓科學研究自動化進行文獻回顧、實驗和結果撰寫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (284 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要自動化科學研究流程並希望整合多種模型的研究團隊或獨立研究者。
> **一句話重點** OpenScience 讓科學研究的自動化變得更簡單，從文獻檢索到結果撰寫都能在一個平台上完成。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/synthetic-sciences--openscience");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "科學研究工具" && p.file.name !== "synthetic-sciences--openscience" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 科學研究工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的研究自動化，值得投資。

> [!abstract] 核心創新
> OpenScience 是一個模型無關的開源平台，能夠自動化整個科學研究過程。

## 專案簡介

OpenScience 是一個開源的 AI 工作平台，專為科學研究而設計。用戶只需設定一個目標，系統便能自動進行文獻回顧、形成假設、撰寫並執行代碼、進行實驗，最後撰寫結果。這個工具的賣點在於其能在一個連續的會話中完成整個研究流程，從文獻檢索到實驗分析，並且支持多種科學領域的專業代理（如生物學、物理學和機器學習）。技術上，OpenScience 使用 TypeScript 和 Bun 作為主要開發框架，並且能與多個科學數據庫（如 UniProt、PubChem 等）直接交互，這使得用戶能夠方便地查詢數據。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，OpenScience 提供了更完整的研究循環，並且具備更高的可擴展性，支持自定義代理和命令。使用者在實際操作中，可能會遇到需要配置 API 金鑰的情況，這對於初學者來說可能稍顯繁瑣，但整體來說，這個工具的設計是為了簡化科學研究的流程。社群活躍度良好，開發者能夠在 GitHub 上找到即時的支援和更新。這個專案目前處於穩定階段，適合需要進行機器學習或科學計算的研究團隊使用，未來可能會進一步擴展其功能和支持的模型。

**技術棧**：`TypeScript` · `Bun 1.3` · `Node.js`

## 重點功能

- 全流程自動化 — 從文獻回顧到結果撰寫，所有步驟在一個會話中完成。
- 多專業代理 — 包含生物學、物理學和機器學習等專業代理，支持不同領域的研究。
- 290+ 技能 — 涵蓋訓練、評估、數據集處理等多種功能，適合多種科學領域。
- 科學數據庫查詢 — 直接查詢 UniProt、PubChem 等 30 多個科學數據庫。
- 可擴展性 — 支持自定義代理、命令和插件，並提供 TypeScript SDK。

## 快速開始

1. 全局安裝 OpenScience
```bash
npm install -g @synsci/openscience
```
2. 啟動工作區
```bash
openscience
```
3. 設置 API 金鑰
```bash
export ANTHROPIC_API_KEY=sk-ant-... && openscience
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 852 stars（284/天），forks 109（12.8%），顯示出相對活躍的社群參與。開發者來自 Synthetic Sciences，這是一個專注於 AI 和科學研究的團隊，之前有多個相關專案。這個工具解決了科學研究中自動化流程的痛點，特別是在文獻回顧和實驗執行方面，之前的工具往往無法提供完整的研究循環。社群的反饋和需求也促進了這個專案的快速發展，特別是對於開源 AI 工具的需求日益增加。forks/stars 比率為 12.8%，顯示出不少用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化科學研究流程並希望整合多種模型的研究團隊或獨立研究者。

> [!example] 使用場景
> - 生物學研究人員用它來自動化文獻回顧和實驗設計，因為這樣可以節省大量時間並提高實驗的準確性。
> - 物理學家用它來快速生成和測試假設，因為它能夠即時查詢相關數據庫並執行計算，從而加快研究進度。
> - 機器學習工程師用它來整合多個模型進行實驗，因為它支持多種 API 金鑰和模型切換，靈活性高。

## 架構分析

OpenScience 採用單一的本地伺服器架構，將工作區 UI、代理運行時和工具層集成在一起。這樣的設計使得用戶能夠在瀏覽器中直接操作，並且所有請求都能即時處理。資料流方面，代理會根據用戶的需求調用不同的工具（如編輯器、科學數據庫等），並將結果即時返回給用戶。這種設計的優勢在於簡化了用戶的操作流程，但代價是對於大型數據集的處理能力可能會受到限制。擴展性方面，使用者可以通過自定義代理和插件來擴展功能，但這也可能增加維護的複雜度。

## 技術深入分析

OpenScience 的核心技術機制是其模型無關的設計，這使得用戶可以靈活選擇不同的 AI 模型來完成任務。使用 TypeScript 和 Bun 作為開發框架，這不僅提高了開發效率，也使得整體系統的性能得以優化。效能方面，OpenScience 能夠處理多個請求並即時返回結果，但在處理大型數據集時可能會遇到瓶頸。設計上，選擇單一伺服器架構的好處是簡化了用戶的操作流程，但在擴展性和維護上可能會增加挑戰。技術風險方面，未來可能會面臨對外部 API 的依賴問題，若這些服務出現變化，將影響整體功能。與主流框架的整合方面，OpenScience 能夠與多種科學數據庫和工具進行良好整合，並且支持 CI/CD 流程，但對於某些特定的開發環境可能需要進行額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢。新手可以通過簡單的指令快速上手，但對於 API 金鑰的配置可能需要額外的指導。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 全自動化的研究流程，節省時間和精力。
> - 支持多種科學領域，靈活性高。
> - 開源且可擴展，社群活躍。

> [!danger] 缺點
> - 需要配置 API 金鑰，對新手不太友好。
> - 不支持離線使用，依賴網絡。
> - 某些功能可能需要額外的學習成本。

> [!warning] 注意事項
> - 需要配置 API 金鑰才能使用某些功能。
> - 不支持在無網絡環境下運行，因為需要訪問外部數據庫。
> - 目前僅支持特定的科學領域，對於其他領域的擴展性尚未測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的自動化功能，但缺乏完整的研究循環支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 應用，但不具備 OpenScience 的多專業代理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的自動化任務，無法提供完整的研究循環。 | 如果你的需求僅限於特定任務的自動化，而不需要完整的研究流程。 | medium，因為需要重新設計工作流。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了針對 AI 應用的工具，但缺乏多專業支持。 | 如果你的團隊已經在使用特定的 AI 工具，並希望保持一致性。 | low，因為可以輕鬆整合現有工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openscience** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的自動化任務，無法提供完整的研究循環。 | 提供了針對 AI 應用的工具，但缺乏多專業支持。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流。 | low，因為可以輕鬆整合現有工具。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於特定任務的自動化，而不需要完整的研究流程。 | 如果你的團隊已經在使用特定的 AI 工具，並希望保持一致性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行實驗性質的研究，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 金鑰配置不當可能導致無法正常使用某些功能
  - 解法：仔細檢查 API 金鑰的設置，並參考官方文檔。
- [MEDIUM] 在大型數據集上運行時可能會遇到性能瓶頸
  - 解法：考慮將數據集分批處理，或使用更強大的計算資源。
- [MEDIUM] 某些功能可能需要額外的學習成本
  - 解法：參加社群討論或查閱更多的使用範例。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行科學研究 | 非常適合 | 提供全自動化的研究流程，能夠節省時間和資源。 |
| 大型研究機構需要處理大量數據 | 普通 | 雖然功能強大，但在性能上可能會遇到瓶頸。 |
| 獨立研究者希望快速完成實驗 | 非常適合 | 簡化了研究流程，能夠快速上手。 |
| 需要在無網絡環境下進行研究的團隊 | 不適合 | 依賴外部數據庫，無法離線使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的研究自動化，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：雖然代理的權限系統能夠保持透明，但不建議在未經沙盒化的環境中運行。使用者應考慮在容器或虛擬機中運行以獲得更高的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenScience 最常與科學數據庫和機器學習模型搭配使用，通常在研究的開發和執行階段發揮作用。在一個使用 Next.js 和 Vercel 部署的專案中，使用者可以通過 `openscience` 命令快速啟動工作區，並在其中進行實驗和數據分析。它支持與 GitHub Actions 等 CI 工具的整合，並且能夠與 VS Code 等 IDE 進行良好配合。整合過程中，最常見的問題是 API 金鑰的配置，這需要用戶仔細檢查設置以避免錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenScience 出現之前，科學研究通常依賴多個獨立工具進行文獻檢索、實驗設計和數據分析，這導致了效率低下和協作困難。隨著 AI 技術的進步，特別是在自然語言處理和機器學習領域，OpenScience 提供了一個集成的解決方案，能夠自動化這些繁瑣的過程。這個工具代表了科學研究自動化的趨勢，未來可能會隨著 AI 模型的進步而進一步演化。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型研究團隊

**前置技能**：
- 熟悉基本的科學研究流程
- 了解 API 金鑰配置
- 具備基本的編程能力

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔，分享使用經驗。第四週：在主要研究項目中開始使用。

**成功指標**：研究效率提高 30%，實驗準確性提升。

> [!warning] 退出計畫
> 所有設定以標準 JSON 格式保存，便於轉移至其他工具或平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
| Forks | 109 |
| Open Issues | 10 |
| Issue 解決率 | 81% (44 closed) |
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-07-03 |
| 官方網站 | [Link](https://openscience.sh) |
| Repo 大小 | 48.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/synthetic-sciences/openscience) |
| Topics | `agent` `ai` `ai-agent` `bun` `cli` `co-scientist` `llm` `ml` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 54
>     "Python" : 32
>     "TeX" : 9
>     "CSS" : 3
>     "BibTeX Style" : 2
>     "Shell" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@aayambansal](https://github.com/aayambansal) | 60 |
> | [@ishaan1124](https://github.com/ishaan1124) | 51 |
> | [@KB-syntheticsciences](https://github.com/KB-syntheticsciences) | 1 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 1 |

**最新版本**：v1.2.10 (2026-07-06)

> [!info]- Release Notes
> Initial release

## 社群與生態

**社群活躍度**：社群活躍，有定期更新和問題回應。
**連結**：[文件](https://openscience.sh/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-07）
> **活躍天數** 1 天 · **最新 commit** fix(openscience): atomic + locked session writes, distinguish logout from read error (#131)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#117](https://github.com/synthetic-sciences/openscience/issues/117) | Use Local models via Ollama `question` | 0 | 1 |
> | [#103](https://github.com/synthetic-sciences/openscience/issues/103) | Proposal: integrate LAR-1 provenance and /3 agent signals in | 0 | 0 |
> | [#102](https://github.com/synthetic-sciences/openscience/issues/102) | bug `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ### The open-source AI workbench for scientific research
> 
> Give it a goal. It reads the literature, writes and runs code, runs the experiments, and writes up what it found.
> 
> [](https://github.com/synthetic-sciences/OpenScience/actions/workflows/ci.yml)
> [](https://www.npmjs.com/package/@synsci/openscience)
> [](LICENSE)
> [](https://openscience.sh/docs)
> 
> [Install](#install) · [Quickstart](#quickstart) · [Docs](https://openscience.sh/docs) · [Atlas](#atlas)
> 
> ---
> 
> OpenScience is an AI workbench for scientific research. You give it a goal, and it works through the research loop the way a capable collaborator would. It reads the papers that matter, forms a hypothesis, writes and runs code, runs experiments on real compute, queries the major scientific databases, and writes up the result. It runs as a workspace in your browser and works with any frontier or open-weight model from Anthropic, OpenAI, Google, and dozens of other providers, using your own API keys. No account is required.
> 
> It is model-agnostic, open source, and built to do real work in machine learning, biology, physics, and chemistry.
> 
> ## What it does
> 
> - **Runs the whole loop.** Literature review, hypothesis, code, experiment, analysis, and write-up, in one continuous session.
> - **Research agents.** A `research` agent by default, plus `biology`, `physics`, and `ml` specialists, with critique and literature-review sub-agents and a read-only plan mode.
> - **290+ skills.** Training (DeepSpeed, PEFT, TRL), evaluation, dataset work, molecular and clinical biology, cheminformatics, papers and LaTeX, figures, and cloud compute (Modal, Tinker, and others).
> - **Scientific databases as tools.** UniProt, PDB, Ensembl, ChEMBL, PubChem, arXiv, OpenAlex, Semantic Scholar, and around 30 more, queryable directly by the agent.
> - **A real workspace.** A browser UI with a file tree, an editor, a terminal, session history, and inline rendering for molecules, structures, genomes, and plots.
> - **Extensible.** LSP integration, MCP servers, plugins, custom agents and commands, and a TypeScript SDK.
> 
> ## Install
> 
> Install with npm, then open the workspace:
> 
> ```bash
> npm install -g @synsci/openscience
> openscience
> ```
> 
> The command is `openscience`, and it opens the workspace in your browser. The first time you run it, a short setup walks you through how to power the models — Atlas managed models, your own provider keys, or skip and start on the free demo models. If you would rather not install it globally, `npx synsci` does the same thing in a single step:
> 
> ```bash
> npx synsci
> ```
> 
> Platform binaries are also attached to [GitHub Releases](https://github.com/synthetic-sciences/OpenScience/releases); see the [changelog](CHANGELOG.md) for what's new in each version.
> 
> ## Quickstart
> 
> Set an API key from any provider (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, and so on) and start the workspace:
> 
> ```bash
> export ANTHROPIC_API_KEY=sk-ant-...
> openscience
> ```
> 
> `openscience` opens the workspace in your browser. Your keys stay on your machine and requests go straight to the provider. You can also run `openscience keys add` to store a key from the terminal, add keys from the Credentials panel, and pick a model from the model selector. To open the workspace in a specific project:
> 
> ```bash
> openscience ~/code/my-project
> ```
> 
> ## Atlas
> 
> [Atlas](https://app.syntheticsciences.ai) is Synthetic Sciences' managed platform. It gives you a curated set of frontier models billed from a prepaid wallet, so you do not need per-provider keys, plus a persistent research graph and cloud compute. OpenScience works with Atlas but never requires it.
> 
> ```bash
> openscience login          # connect your Atlas account
> openscience wallet         # check your balance and top up
> ```
> 
> Bring-your-own-key usage is always free and is never gated — Atlas only meters the models it serves. Use `openscience status` to see what you are connected to, and `openscience logout` to disconnect.
> 
> ## How it works
> 
> OpenScience runs a local server that hosts the workspace UI, the agent runtime, and the tool layer. The agent plans with a research harness, calls tools (shell, editor, LSP, MCP servers, scientific connectors, and skills), and streams its work back to the browser. Models are routed per request, so you can switch between providers or run local models without changing anything else. Sessions, artifacts, and provenance are stored on disk and can be shared as links.
> 
> | Path                 | Contents                                                     |
> | -------------------- | ------------------------------------------------------------ |
> | `backend/cli`        | The CLI, server, provider integrations, sessions, and skills |
> | `frontend/workspace` | The browser workspace UI, served by the CLI                  |
> | `frontend/docs`      | The documentation and session-share site                     |
> | `tooling/sdk/js`     | The TypeScript SDK                                           |
> | `tooling/plugin`     | The plugin runtime                                           |
> 
> ## Configuration
> 
> Global config lives in `~/.config/openscience/openscience.json`. Project config lives in `openscience.json` or a `.openscience/` directory at the repo root ([schema](https://openscience.sh/config.json)). Custom agents, commands, tools, plugins, and themes load from those directories.
> 
> ## Development
> 
> You need [Bun](https://bun.sh) 1.3 or newer.
> 
> ```bash
> bun install
> bun dev
> bun run typecheck
> bun run --cwd backend/cli test
> bun run --cwd backend/cli build
> ```
> 
> `bun dev` runs the workspace from source, and `bun run --cwd backend/cli build` produces the platform binaries.
> 
> See [ARCHITECTURE.md](ARCHITECTURE.md) for how the system fits together, [CONTRIBUTING.md](CONTRIBUTING.md) for how to contribute, [AGENTS.md](AGENTS.md) for the style guide, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for community standards.
> 
> ## Security
> 
> The agent is not sandboxed. The permission system keeps you aware of what the agent is doing; it is not an isolation boundary. Run inside a container or VM if you need isolation. Provider and synced credentials are filtered out of subprocess environments and redacted from output. To report a vulnerability, see [SECURITY.md](SECURITY.md).
> 
> ## License
> 
> Apache License 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
> 
> OpenScience is an independent project. It is not affiliated with, endorsed by, or sponsored by Anthropic. "Claude" is a trademark of Anthropic, PBC, used here only to describe compatibility.

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[科學計算]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[GordenSun--GordenSuperPPTSkills|GordenSun/GordenSuperPPTSkills]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/synthetic-sciences/openscience) · [官方網站](https://openscience.sh)

## 相關收錄

> [!note]- 直接競品（同子分類：科學研究工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "科學研究工具" AND file.name != "synthetic-sciences--openscience"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "synthetic-sciences--openscience"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "synthetic-sciences--openscience" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "synthetic-sciences--openscience"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","機器學習","科學計算"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "synthetic-sciences--openscience" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "synthetic-sciences--openscience" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "synthetic-sciences" AND file.name != "synthetic-sciences--openscience"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
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
> const me = dv.page("Repos/synthetic-sciences--openscience");
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

> **2026-07-07** — 首次收錄
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

- [[2026-07-08|2026-07-08]] — 再次上榜，1.4k stars
- [[2026-07-07|2026-07-07]] — 首次收錄，852 stars
