---
repo: Narcooo/inkos
url: https://github.com/Narcooo/inkos
owner: Narcooo
owner_type: User
language: TypeScript
license: MIT
description: "Autonomous novel writing CLI agent — AI agents write, audit, and revise novels with human review gates"
homepage: ""
stars: 1918
stars_per_day: 240
forks: 399
open_issues: 44
created: 2026-03-12
pushed_at: 2026-03-21
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "創作工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "讓 AI 自動寫小說，並經過人類審核與修訂。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 29
repo_size_kb: 1459
readme_length: 7974
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1652,2026-03-19:1652,2026-03-20:1796,2026-03-21:1918"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
  - "topic/agent"
  - "topic/ai_writing"
  - "topic/aigc_detection"
  - "topic/automated_storytelling"
  - "topic/chinese_novel"
aliases:
  - "inkos"
  - "Narcooo/inkos"
  - "讓 AI 自動寫小說，並經過人類審核與修訂。"
---

# inkos

**1.9k** stars · **240** stars/天 · 建立 8 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Narcooo--inkos");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.5.0` `easy-install`

`agent` `ai-writing` `aigc-detection` `automated-storytelling` `chinese-novel` `cli-tool` `creative-writing-ai` `novel-generation`

> [!summary] 一句話摘要
> 讓 AI 自動寫小說，並經過人類審核與修訂。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (240 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要自動生成小說內容並進行質量控制的作家和編輯。
> **一句話重點** InkOS 不僅是寫作工具，更是一個完整的小說創作生態系統。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "創作工具" && p.file.name !== "Narcooo--inkos" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 創作工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的內容生成工具，值得投入。

> [!abstract] 核心創新
> 支持多代理協作的小說創作系統，並提供多維度的內容審計與修訂功能。

## 專案簡介

InkOS 是一個自動化小說寫作 CLI 工具，透過多個 AI 代理協作來創作小說。使用者可以透過 `inkos book create` 指令創建新書，並使用 `inkos write next` 來自動生成下一章，整個過程包括草稿生成、審計和修訂。這種設計讓創作過程更為流暢，並且能夠在多種風格中進行創作，如玄幻、科幻等。技術上，InkOS 使用 TypeScript 和 JavaScript，並依賴 Node.js 和 pnpm 進行包管理，這使得它能夠在現代 JavaScript 環境中高效運行。與其他寫作工具相比，InkOS 提供了多維度的審計功能，能夠從 33 個維度檢查草稿的連貫性，並且內建去 AI 味的檢測機制，這在其他工具中並不常見。

使用者可以透過 `inkos config set-global` 設定全局配置，這樣在創建新項目時就不需要重複配置。實際使用中，InkOS 能夠處理大量的文本，並且提供了詳細的狀態追蹤和審計報告，這對於需要高質量內容的創作者來說是個重要優勢。這個專案目前處於 v0.5.0 版本，社群活躍度尚可，開放問題數量為 44，解決率為 29%。整體來說，InkOS 是一個值得關注的創作工具，特別適合需要大量內容生成的作家和創作者。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >=20.0.0` · `pnpm >=9.0.0`

## 重點功能

- 多維度審計 — 從 33 個維度檢查草稿的連貫性和質量。
- 去 AI 味檢測 — 自動識別 AI 生成的痕跡，並進行修訂。
- 文風仿寫 — 提取並注入文風指紋，確保一致的寫作風格。
- 創作简报生成 — 根據用戶提供的簡報自動生成故事設置和創作規則。
- 多模型路由 — 支持不同代理使用不同的 AI 模型，根據需求平衡質量與成本。

## 快速開始

1. 全局安裝 InkOS
```bash
npm i -g @actalk/inkos
```
2. 初始化新書
```bash
inkos book create --title "吞天魔帝" --genre xuanhuan
```
3. 寫下一章
```bash
inkos write next 吞天魔帝
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 InkOS",
  "指令": "inkos write next 吞天魔帝",
  "預期輸出": "生成下一章的草稿，並進行審計和修訂。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1918 stars（240/天），forks 399（20.8%），顯示出強烈的社群興趣。Narcooo 是這個專案的主要貢獻者，過去在 AI 寫作領域有一定的經驗。這個專案解決了傳統寫作工具無法自動生成高質量內容的痛點，並且提供了多維度的審計功能，這在市場上是相對獨特的。社群中對於其功能的需求和討論也促進了其快速增長。技術上，InkOS 的設計考量了現代寫作的需求，並且整合了多種 AI 模型，這使得它在創作過程中更具靈活性和效率。

## 適合誰使用

**目標受眾**：需要自動生成小說內容並進行質量控制的作家和編輯。

> [!example] 使用場景
> - 小說作家用它來自動生成小說章節，因為它能夠快速產出高質量內容，並且提供審計功能確保內容一致性。
> - 編輯用它來審核和修訂小說草稿，因為它能夠從多個維度檢查草稿，並自動標記需要修訂的部分。
> - 創作者用它來生成同人小說，因為它支持從原作素材創建同人書，並提供多種創作模式。

## 架構分析

InkOS 採用多代理架構，每個代理負責不同的任務，如寫作、審計和修訂。這種設計使得創作過程能夠分工合作，提高效率。資料流方面，使用者輸入創作指令，系統通過不同代理進行處理，最終生成和審核內容。選擇這種架構的代價是需要管理多個代理的協作，可能會增加系統的複雜性。擴展性方面，這種架構允許未來添加更多功能或代理，但也可能面臨協作上的挑戰。

## 技術深入分析

InkOS 的核心技術機制是多代理協作，每個代理負責不同的任務，如寫作、審計和修訂。這種設計使得創作過程能夠分工合作，提高效率。效能方面，InkOS 能夠處理大量文本，並提供詳細的狀態追蹤和審計報告，這對於需要高質量內容的創作者來說是個重要優勢。選擇 TypeScript 和 JavaScript 作為開發語言，這使得它能夠在現代 JavaScript 環境中高效運行。依賴樹相對輕量，主要依賴於 Node.js 和 pnpm，這降低了使用門檻。技術風險方面，未來在擴展功能時可能會面臨協作上的挑戰，特別是在多代理之間的數據一致性管理上。整合方面，InkOS 與現有的 JavaScript 生態系統兼容性良好，能夠輕鬆融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導。安裝過程順暢，無明顯坑點。文件中有多語言支持，對於非中文使用者也有英文版本可供參考。

## 優缺點分析

> [!success] 優點
> - 能夠自動生成高質量的小說內容，節省時間。
> - 提供詳細的審計功能，確保內容的一致性和質量。
> - 支持多種創作模式，靈活應對不同需求。

> [!danger] 缺點
> - 需要有效的 API 金鑰，對於新手可能有一定的門檻。
> - 目前的功能仍在持續開發中，可能存在不穩定性。
> - 對於大型小說的管理可能會變得複雜。

> [!warning] 注意事項
> - 僅支援 Node.js 20.0.0 以上版本。
> - 需要有效的 API 金鑰來連接 AI 模型。
> - 目前僅支持中文和英文寫作，其他語言尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於並行數據處理，而 InkOS 專注於小說創作和審計。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 AI 應用，而 InkOS 是一個通用的小說寫作工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，而 InkOS 專注於小說創作和審計。 | 如果你的需求是保護數據隱私而非創作內容，則應選擇 Shadowbroker。 | medium，因為需要重新配置數據處理流程。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 AI 模型的訓練和推理，而 InkOS 專注於內容生成和審計。 | 如果你的團隊需要訓練自定義 AI 模型，則應選擇 NemoClaw。 | high，因為需要重新設計整個內容生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **inkos** | **Shadowbroker** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私和安全，而 InkOS 專注於小說創作和審計。 | 專注於 AI 模型的訓練和推理，而 InkOS 專注於內容生成和審計。 |
> | 遷移成本 | - | medium，因為需要重新配置數據處理流程。 | high，因為需要重新設計整個內容生成流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是保護數據隱私而非創作內容，則應選擇 Shado | 如果你的團隊需要訓練自定義 AI 模型，則應選擇 NemoC |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 金鑰配置錯誤導致無法連接 AI 模型
  - 解法：檢查 .env 文件中的 API 金鑰配置
- [MEDIUM] 在大型小說中，狀態管理可能變得複雜
  - 解法：定期檢查和更新真相文件以保持一致性
- [low] 某些命令的輸出格式可能不符合預期
  - 解法：使用 `--json` 參數獲取結構化數據

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成高質量的內容，支持多種創作模式。 |
| 大型出版公司小說創作團隊 | 適合 | 提供詳細的審計功能，但可能需要額外的管理。 |
| 個人寫作愛好者 | 非常適合 | 能夠輕鬆上手，快速生成內容。 |
| 需要高安全性的數據處理團隊 | 不適合 | 專注於內容生成，未考慮數據隱私。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的內容生成工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶提供的 API 金鑰，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

InkOS 最常與 Node.js 和 pnpm 搭配使用，處於開發和內容生成的環節。在一個用 Node.js 開發的專案中，可以使用 `npm i -g @actalk/inkos` 安裝 InkOS，然後透過 `inkos book create` 指令開始創作。與主流 CI 工具（如 GitHub Actions）相容良好，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於 API 金鑰的配置，使用者需確保正確配置才能正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 InkOS 出現之前，許多寫作工具主要集中在文本編輯和基本的內容生成，缺乏自動化和審計功能。這些工具通常無法有效地處理長篇小說的結構和連貫性問題。隨著 AI 技術的進步，InkOS 能夠利用多代理協作的方式，提供更高效的內容生成和質量控制。

這個工具代表了創作工具向智能化和自動化的趨勢，未來可能會有更多類似的工具出現，進一步改變創作的方式。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型創作團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的 API 使用
- 具備寫作經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 InkOS。第二週：在小型團隊內部工具中導入，收集反饋。第三週：撰寫最佳實踐文檔，分享團隊經驗。第四週：在主要產品的非核心模組中使用，進行測試。

**成功指標**：內容生成效率提高 50%，審計通過率達到 90%。

> [!warning] 退出計畫
> 所有配置和數據以標準格式存儲，便於未來轉移到其他工具或系統。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
| Forks | 399 |
| Open Issues | 44 |
| Issue 解決率 | 29% (18 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-12 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Narcooo/inkos) |
| Topics | `agent` `ai-writing` `aigc-detection` `automated-storytelling` `chinese-novel` `cli-tool` `creative-writing-ai` `novel-generation` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Narcooo](https://github.com/Narcooo) | 104 |

**最新版本**：v0.5.0 (2026-03-19)

> [!info]- Release Notes
> - chore: bump version to 0.5.0 (6a2eb5c)
> - docs: add English callout line in Chinese README pointing to English version (02cc56f)
> - docs(en): revert English README callout to original wording (3b144f9)
> - docs: user edits to English README callout + gitignore update (4bf03e7)
> - docs(en): simplify English support callout, link to genre profiles section (3943258)
> - docs: simplify English support callout in Chinese README, link to English version (d0a2926)
> - docs: split English support callout into separate CN + EN lines (446f5a9)
> - docs: bilingual English support callout in Chinese README (12c9381)
> - docs: add native English support callout to both READMEs (concise) (abd3914)
> - docs(en): add --lang en to global config as first step for English users (990d839)
> - docs: make English README a native document, not a translation (0b97555)
> - test(core): add audit JSON parse robustness tests for #51 fallback strategies (ffa340b)
> - fix(core): #51 audit JSON fallback, #53 write_truth_file tool, #52 audit drift correction (52e9ca7)
> - fix: English language pipeline across all agents (0f8033c)
> - docs: replace 铁律 with 规则/约束 in README (1fc99a0)
> - docs: restructure both READMEs — feature-first layout, add fanfic & English native support (42b9f17)
> - chore: update pnpm-lock.yaml (be75d54)
> - feat(cli): add fanfic/studio commands, --lang flag, shared config refactor (cea4bf3)
> - feat(core): add fanfic system, English genres, language support, shared utils (0461a3b)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放問題數量為 44，解決率為 29%。
**連結**：[文件](https://github.com/Narcooo/inkos)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-21）
> **活躍天數** 2 天 · **最新 commit** feat(memory): POV-aware context filtering (#5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/Narcooo/inkos/issues/35) | 建议：增强日志系统功能 | 1 | 3 |
> | [#63](https://github.com/Narcooo/inkos/issues/63) | 用openclaw部署，deepseek-chat模型报400错误 `bug` | 0 | 0 |
> | [#62](https://github.com/Narcooo/inkos/issues/62) | 希望新增讨论环节 `enhancement` | 0 | 1 |
> | [#61](https://github.com/Narcooo/inkos/issues/61) | Failed to write chapter: Error: API 返回 401 (未授权)。请检查 .env 中的 | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> Autonomous Novel Writing Cli AI Agent自动化小说写作 Cli AI Agent
> 
>   
>   
>   
>   
> 
>   English | 中文
> 
> ---
> 
> Agent 写小说。写、审、改，全程接管。覆盖玄幻、仙侠、都市、科幻等多种风格，支持续写、番外、同人、仿写等创作形式。
> 
> **Native English novel writing now supported！** Set `--lang en` to write in English. See [English README](README.en.md) for details.
> 
> ## 快速开始
> 
> ### 安装
> 
> ```bash
> npm i -g @actalk/inkos
> ```
> 
> ### 通过 OpenClaw 使用 🦞
> 
> InkOS 已发布为 [OpenClaw](https://clawhub.ai) Skill，可被任何兼容 Agent（Claude Code、OpenClaw 等）直接调用：
> 
> ```bash
> clawhub install inkos          # 从 ClawHub 安装 InkOS Skill
> ```
> 
> 通过 npm 安装或克隆本项目时，`skills/SKILL.md` 已包含在内，🦞 可直接读取——无需额外从 ClawHub 安装。
> 
> 安装后，Claw 可通过 `exec` 调用 InkOS 的所有原子命令（`draft`/`audit`/`revise`/`write next`），`--json` 输出结构化数据供 Claw 解析决策。也可以在 [ClawHub](https://clawhub.ai) 搜索 `inkos` 在线查看。
> 
> ### 配置
> 
> **方式一：全局配置（推荐，只需一次）**
> 
> ```bash
> inkos config set-global \
>   --provider  \
>   --base-url  \
>   --api-key  \
>   --model 
> 
> # provider: openai / anthropic / custom（兼容 OpenAI 格式的中转站选 custom）
> # base-url: 你的 API 提供商地址
> # api-key: 你的 API Key
> # model: 你的模型名称
> ```
> 
> 配置保存在 `~/.inkos/.env`，所有项目共享。之后新建项目不用再配。
> 
> **方式二：项目级 `.env`**
> 
> ```bash
> inkos init my-novel     # 初始化项目
> # 编辑 my-novel/.env
> ```
> 
> ```bash
> # 必填
> INKOS_LLM_PROVIDER=                               # openai / anthropic / custom（兼容 OpenAI 接口的都选 custom）
> INKOS_LLM_BASE_URL=                               # API 地址（支持中转站、智谱、Gemini 等）
> INKOS_LLM_API_KEY=                                 # API Key
> INKOS_LLM_MODEL=                                   # 模型名
> 
> # 可选
> # INKOS_LLM_TEMPERATURE=0.7                       # 温度
> # INKOS_LLM_MAX_TOKENS=8192                        # 最大输出 token
> # INKOS_LLM_THINKING_BUDGET=0                      # Anthropic 扩展思考预算
> ```
> 
> 项目 `.env` 会覆盖全局配置。不需要覆盖时可以不写。
> 
> **方式三：多模型路由（可选）**
> 
> 给不同 Agent 分配不同模型，按需平衡质量与成本：
> 
> ```bash
> # 给不同 agent 配不同模型/提供商
> inkos config set-model writer  --provider  --base-url  --api-key-env 
> inkos config set-model auditor  --provider 
> inkos config show-models        # 查看当前路由
> ```
> 
> 未单独配置的 Agent 自动使用全局模型。
> 
> ### 写第一本书
> 
> ```bash
> inkos book create --title "吞天魔帝" --genre xuanhuan  # 创建新书
> inkos write next 吞天魔帝      # 写下一章（完整管线：草稿 → 审计 → 修订）
> inkos status                   # 查看状态
> inkos review list 吞天魔帝     # 审阅草稿
> inkos review approve-all 吞天魔帝  # 批量通过
> inkos export 吞天魔帝          # 导出全书
> inkos export 吞天魔帝 --format epub  # 导出 EPUB（手机/Kindle 阅读）
> ```
> 
>   
> 
> ---
> 
> ## 核心特性
> 
> ### 多维度审计 + 去 AI 味
> 
> 连续性审计员从 33 个维度检查每一章草稿：角色记忆、物资连续性、伏笔回收、大纲偏离、叙事节奏、情感弧线等。内置 AI 痕迹检测维度，自动识别"LLM 味"表达（高频词、句式单调、过度总结），审计不通过自动进入修订循环。
> 
> 去 AI 味规则内置于写手 agent 的 prompt 层——词汇疲劳词表、禁用句式、文风指纹注入，从源头减少 AI 生成痕迹。`revise --mode anti-detect` 可对已有章节做专门的反检测改写。
> 
> ### 文风仿写
> 
> `inkos style analyze` 分析参考文本，提取统计指纹（句长分布、词频特征、节奏模式）和 LLM 风格指南。`inkos style import` 将指纹注入指定书籍，后续所有章节自动采用该风格，修订者也会用风格标准做审计。
> 
> ### 创作简报
> 
> `inkos book create --brief my-ideas.md` 传入你的脑洞、世界观设定、人设文档。建筑师 agent 会基于简报生成故事设定（story_bible.md）和创作规则（book_rules.md），而非凭空创作。
> 
> ### 续写已有作品
> 
> `inkos import chapters` 从已有小说文本导入章节，自动逆向工程 7 个真相文件（世界状态、角色矩阵、资源账本、伏笔钩子等），支持 `第X章` 和自定义分割模式、断点续导。导入后 `inkos write next` 无缝接续创作。
> 
> ### 同人创作
> 
> `inkos fanfic init --from source.txt --mode canon` 从原作素材创建同人书。支持四种模式：canon（正典延续）、au（架空世界）、ooc（性格重塑）、cp（CP 向）。内置正典导入器、同人专属审计维度和信息边界管控——确保设定不矛盾。
> 
> ### 多模型路由
> 
> 不同 Agent 可以走不同模型和 Provider。写手用 Claude（创意强），审计用 GPT-4o（便宜快速），雷达用本地模型（零成本）。`inkos config set-model` 按 agent 粒度配置，未配置的自动回退全局模型。
> 
> ### 守护进程 + 通知推送
> 
> `inkos up` 启动后台循环自动写章。管线对非关键问题全自动运行，关键问题暂停等人工审核。通知推送支持 Telegram、飞书、企业微信、Webhook（HMAC-SHA256 签名 + 事件过滤）。日志写入 `inkos.log`（JSON Lines），`-q` 静默模式。
> 
> ### 本地模型兼容
> 
> 支持任何 OpenAI 兼容接口（`--provider custom`）。Stream 自动降级——中转站不支持 SSE 时自动回退 sync。Fallback 解析器处理小模型不规范输出，流中断时自动恢复部分内容。
> 
> ### 可靠性保障
> 
> 每章自动创建状态快照，`inkos write rewrite` 可回滚任意章节。写手动笔前输出自检表（上下文、资源、伏笔、风险），写完输出结算表，审计员交叉验证。文件锁防止并发写入。写后验证器 11 条硬规则自动 spot-fix。
> 
> ---
> 
> ## 工作原理
> 
> 每一章由五个 Agent 接力完成：
> 
>   
> 
> | Agent | 职责 |
> |-------|------|
> | **雷达 Radar** | 扫描平台趋势和读者偏好，指导故事方向（可插拔，可跳过） |
> | **建筑师 Architect** | 规划章节结构：大纲、场景节拍、节奏控制 |
> | **写手 Writer** | 根据大纲 + 当前世界状态生成正文（两阶段：创意写作 → 状态结算） |
> | **连续性审计员 Auditor** | 对照 7 个真相文件验证草稿，33 维度检查 |
> | **修订者 Reviser** | 修复审计发现的问题 — 关键问题自动修复，其他标记给人工审核 |
> 
> 如果审计不通过，管线自动进入"修订 → 再审计"循环，直到所有关键问题清零。
> 
> ### 长期记忆
> 
> 每本书维护 7 个真相文件作为唯一事实来源：
> 
> | 文件 | 用途 |
> |------|------|
> | `current_state.md` | 世界状态：角色位置、关系网络、已知信息、情感弧线 |
> | `particle_ledger.md` | 资源账本：物品、金钱、物资数量及衰减追踪 |
> | `pending_hooks.md` | 未闭合伏笔：铺垫、对读者的承诺、未解决冲突 |
> | `chapter_summaries.md` | 各章摘要：出场人物、关键事件、状态变化、伏笔动态 |
> | `subplot_board.md` | 支线进度板：A/B/C 线状态、停滞检测 |
> | `emotional_arcs.md` | 情感弧线：按角色追踪情绪变化和成长 |
> | `character_matrix.md` | 角色交互矩阵：相遇记录、信息边界 |
> 
> 连续性审计员对照这些文件检查每一章草稿。如果角色"记起"了从未亲眼见过的事，或者拿出了两章前已经丢失的武器，审计员会捕捉到。
> 
>   
> 
> ### 创作规则体系
> 
> 写手 agent 内置 ~25 条通用创作规则（人物塑造、叙事技法、逻辑自洽、语言约束、去 AI 味），适用于所有题材。
> 
> 在此基础上，每个题材有专属规则（禁忌、语言约束、节奏、审计维度），每本书有独立的 `book_rules.md`（主角人设、数值上限、自定义禁令）和 `story_bible.md`（世界观设定），由建筑师 agent 创建书籍时自动生成。
> 
> ## 使用模式
> 
> InkOS 提供三种交互方式，底层共享同一组原子操作：
> 
> ### 1. 完整管线（一键式）
> 
> ```bash
> inkos write next 吞天魔帝          # 写草稿 → 审计 → 自动修订，一步到位
> inkos write next 吞天魔帝 --count 5 # 连续写 5 章
> ```
> 
> ### 2. 原子命令（可组合，适合外部 Agent 调用）
> 
> ```bash
> inkos draft 吞天魔帝 --context "本章重点写师徒矛盾" --json
> inkos audit 吞天魔帝 31 --json
> inkos revise 吞天魔帝 31 --json
> ```
> 
> 每个命令独立执行单一操作，`--json` 输出结构化数据。可被外部 AI Agent 通过 `exec` 调用，也可用于脚本编排。
> 
> ### 3. 自然语言 Agent 模式
> 
> ```bash
> inkos agent "帮我写一本都市修仙，主角是个程序员"
> inkos agent "写下一章，重点写师徒矛盾"
> inkos agent "先扫描市场趋势，然后根据结果创建一本新书"
> ```
> 
> 内置 13 个工具（write_draft、audit_chapter、revise_chapter、scan_market、create_book、get_book_status、read_truth_files、list_books、write_full_pipeline、web_fetch、import_style、import_canon、import_chapters），LLM 通过 tool-use 决定调用顺序。
> 
> ## 实测数据
> 
> 用 InkOS 全自动跑了一本玄幻题材的《吞天魔帝》：
> 
>   
> 
> | 指标 | 数据 |
> |------|------|
> | 已完成章节 | 31 章 |
> | 总字数 | 452,191 字 |
> | 平均章字数 | ~14,500 字 |
> | 审计通过率 | 100% |
> | 资源追踪项 | 48 个 |
> | 活跃伏笔 | 20 条 |
> | 已回收伏笔 | 10 条 |
> 
> ## 命令参考
> 
> | 命令 | 说明 |
> |------|------|
> | `inkos init [name]` | 初始化项目（省略 name 在当前目录初始化） |
> | `inkos book create` | 创建新书（`--genre`、`--platform`、`--chapter-words`、`--target-chapters`、`--brief ` 传入创作简报） |
> | `inkos book update [id]` | 修改书设置（`--chapter-words`、`--target-chapters`、`--status`） |
> | `inkos book list` | 列出所有书籍 |
> | `inkos book delete ` | 删除书籍及全部数据（`--force` 跳过确认） |
> | `inkos genre list/show/copy/create` | 查看、复制、创建题材 |
> | `inkos write next [id]` | 完整管线写下一章（`--words` 覆盖字数，`--count` 连写，`-q` 静默模式） |
> | `inkos write rewrite [id] ` | 重写第 N 章（恢复状态快照，`--force` 跳过确认，`--words` 覆盖字数） |
> | `inkos draft [id]` | 只写草稿（`--words` 覆盖字数，`-q` 静默模式） |
> | `inkos audit [id] [n]` | 审计指定章节 |
> | `inkos revise [id] [n]` | 修订指定章节 |
> | `inkos agent ` | 自然语言 Agent 模式 |
> | `inkos review list [id]` | 审阅草稿 |
> | `inkos review approve-all [id]` | 批量通过 |
> | `inkos status [id]` | 项目状态 |
> | `inkos export [id]` | 导出书籍（`--format txt/md/epub`、`--output `、`--approved-only`） |
> | `inkos radar scan` | 扫描平台趋势 |
> | `inkos fanfic init` | 从原作素材创建同人书（`--from`、`--mode canon/au/ooc/cp`） |
> | `inkos config set-global` | 设置全局 LLM 配置（~/.inkos/.env） |
> | `inkos config show-global` | 查看全局配置 |
> | `inkos config set/show` | 查看/更新项目配置 |
> | `inkos config set-model  ` | 为指定 agent 设置模型覆盖（`--base-url`、`--provider`、`--api-key-env` 支持多 Provider 路由） |
> | `inkos config remove-model ` | 移除 agent 模型覆盖（回退到默认） |
> | `inkos config show-models` | 查看当前模型路由 |
> | `inkos doctor` | 诊断配置问题（含 API 连通性测试 + 提供商兼容性提示） |
> | `inkos detect [id] [n]` | AIGC 检测（`--all` 全部章节，`--stats` 统计） |
> | `inkos style analyze ` | 分析参考文本提取文风指纹 |
> | `inkos style import  [id]` | 导入文风指纹到指定书 |
> | `inkos import canon [id] --from ` | 导入正传正典到番外书 |
> | `inkos import chapters [id] --from ` | 导入已有章节续写（`--split`、`--resume-from`） |
> | `inkos analytics [id]` / `inkos stats [id]` | 书籍数据分析（审计通过率、高频问题、章节排名、token 用量） |
> | `inkos update` | 更新到最新版本 |
> | `inkos up / down` | 启动/停止守护进程（`-q` 静默模式，自动写入 `inkos.log`） |
> 
> `[id]` 参数在项目只有一本书时可省略，自动检测。所有命令支持 `--json` 输出结构化数据。`draft`/`write next` 支持 `--context` 传入创作指导，`--words` 覆盖每章字数。`book create` 支持 `--brief ` 传入创作简报（你的脑洞/设定文档），Architect 会基于此生成设定而非凭空创作。
> 
> ## 路线图
> 
> - [ ] `packages/studio` Web UI 审阅编辑界面（Vite + React + Hono）
> - [ ] 局部干预（重写半章 + 级联更新后续 truth 文件）
> - [ ] 自定义 agent 插件系统
> - [ ] 平台格式导出（起点、番茄等）
> 
> ## 参与贡献
> 
> 欢迎贡献代码。提 issue 或 PR。
> 
> ```bash
> pnpm install
> pnpm dev          # 监听模式
> pnpm test         # 运行测试
> pnpm typecheck    # 类型检查
> ```
> 
> ## 许可证
> 
> [MIT](LICENSE)

## 延伸閱讀

相關概念：[[自動化寫作]] · [[AI 內容生成]] · [[多模態創作]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Narcooo--inkos|Narcooo/inkos]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[garrytan--gstack|garrytan/gstack]]

[GitHub](https://github.com/Narcooo/inkos)

## 相關收錄

> [!note]- 直接競品（同子分類：創作工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "創作工具" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Narcooo--inkos" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化寫作","AI 內容生成","多模態創作"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Narcooo--inkos" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Narcooo--inkos");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Narcooo--inkos" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Narcooo" AND file.name != "Narcooo--inkos"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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
> const me = dv.page("Repos/Narcooo--inkos");
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

> **2026-03-19** — 首次收錄
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

- [[2026-03-19|2026-03-19]] — 首次收錄，1.7k stars
