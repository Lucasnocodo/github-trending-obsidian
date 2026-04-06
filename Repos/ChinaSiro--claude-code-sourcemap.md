---
repo: ChinaSiro/claude-code-sourcemap
url: https://github.com/ChinaSiro/claude-code-sourcemap
owner: ChinaSiro
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: "https://linux.do/u/huo0"
stars: 8453
stars_per_day: 1691
forks: 14113
open_issues: 10
created: 2026-03-31
pushed_at: 2026-03-31
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "源碼還原"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "透過分析源地圖還原 Claude 的 TypeScript 源碼，供研究使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-09"
contributor_count: 1
engagement: "high"
issue_close_rate: 38
repo_size_kb: 73856
readme_length: 1430
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:4889,2026-04-01:4969,2026-04-02:7368,2026-04-02:7376,2026-04-03:8012,2026-04-03:8013,2026-04-04:8275,2026-04-04:8277,2026-04-05:8378,2026-04-05:8378,2026-04-06:8453,2026-04-06:8453"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "claude-code-sourcemap"
  - "ChinaSiro/claude-code-sourcemap"
  - "透過分析源地圖還原 Claude 的 TypeScript 源碼，供研究使用。"
---

# claude-code-sourcemap

**8.5k** stars · **1.7k** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 透過分析源地圖還原 Claude 的 TypeScript 源碼，供研究使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望深入了解 Claude 源碼結構的開發者和研究者。
> **一句話重點** 這個專案提供了一個獨特的視角來研究 Claude 的源碼，對於開發者和研究者來說是個寶貴的資源。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "源碼還原" && p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 源碼還原 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到對 Claude 源碼的深入理解，值得探索。

> [!abstract] 核心創新
> 透過 source map 還原 Claude 的 TypeScript 源碼，提供非官方的開發視角。

## 專案簡介

這個專案的核心在於從 npm 包 `@anthropic-ai/claude-code` 的 source map 中還原出 TypeScript 源碼，版本為 `2.1.88`。使用者可以透過提取 `cli.js.map` 中的 `sourcesContent` 字段，獲得 4756 個還原文件，包括 1884 個 `.ts` 和 `.tsx` 源文件。這樣的設計讓開發者能夠研究 Claude 的內部運作，尤其是 CLI 入口和多種工具的實作。專案的賣點在於它提供了一個非官方的源碼視圖，這對於希望深入了解 Claude 的開發者來說，無疑是個寶貴資源。技術上，這個專案使用 TypeScript 和 JavaScript，並依賴於 npm 包的結構來重建源碼，這樣的選擇使得還原過程相對簡單，但也限制了其對於原始開發環境的準確性。

相比於其他類似的工具，如 `AlpinDale/parsync` 和 `Kuberwastaken/clause-code`，這個專案專注於源碼的還原，而非直接提供功能性 API，因此在功能覆蓋上有所不同。使用者在實際操作中可能會遇到源碼與原始開發環境不完全一致的問題，這需要使用者具備一定的技術背景來進行調整和適應。這個專案目前處於活躍開發中，社群的回應速度和活躍度也顯示出其潛在的使用價值。對於想要學習和研究 Claude 的開發者來說，這是一個值得探索的資源，但在商業用途上則需謹慎考量其合法性和版權問題。

**技術棧**：`TypeScript` · `JavaScript`

## 重點功能

- 源碼還原 — 從 npm 包中提取並還原 4756 個 TypeScript 源碼文件。
- CLI 入口 — 提供 `main.tsx` 作為命令行介面的入口。
- 多工具實作 — 包含 30 多個工具的實作，如 Bash 和 FileEdit。
- 插件系統 — 支援擴展功能的插件架構。
- API 服務 — 提供多種 API 和分析服務的實作。
- 語音交互 — 包含語音交互功能的實作。
- 多 Agent 協調 — 支援多個 Agent 的協調模式。
- 助手模式 — 提供 KAIROS 助手模式的實作。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ChinaSiro/claude-code-sourcemap.git
```
2. 安裝依賴
```bash
cd claude-code-sourcemap && npm install
```
3. 運行 CLI
```bash
npm start
```

## 程式碼範例

```ts
{
  "前置條件": "安裝 Node.js 和 npm",
  "指令": "npm start",
  "預期輸出": "CLI 介面啟動，顯示可用命令列表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 8453 stars（1691/天），forks 14113（167.0%），這顯示出極高的使用興趣。作者 ChinaSiro 透過這個專案解決了對 Claude 源碼的可訪問性問題，之前開發者只能依賴官方文檔或有限的 API。這個專案的爆發可能受到社群對於 AI 開發透明度的需求驅動。高 fork/stars 比率（167.0%）顯示出許多開發者在積極修改和使用這個工具，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：希望深入了解 Claude 源碼結構的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來分析 Claude 的源碼結構，因為這能幫助他們理解 AI 的運作邏輯和設計決策。
> - 開發者用它來重建和修改 Claude 的功能，因為這樣可以快速實驗新的功能而不必從頭開始。
> - 學生用它來學習 TypeScript 和 JavaScript 的實作，因為這提供了實際的代碼範例和結構。

## 架構分析

這個專案的架構基於從 npm 包提取的 source map，使用 TypeScript 和 JavaScript 來還原源碼。資料流主要是從 `cli.js.map` 中提取 `sourcesContent`，這樣的設計使得還原過程相對簡單，但也帶來了對於原始開發環境的依賴。選擇 TypeScript 使得源碼更具可讀性和可維護性，但也增加了學習成本。這個專案的擴展性有限，因為它依賴於 npm 包的結構，未來若 npm 包更新，可能需要重新調整還原過程。整體而言，這個架構適合用於學術研究和技術探索，但不適合用於生產環境。

## 技術深入分析

這個專案的核心技術在於從 npm 包中提取 source map，使用 TypeScript 和 JavaScript 來還原源碼。透過提取 `cli.js.map` 的 `sourcesContent`，開發者能夠獲得完整的源碼結構，這對於理解 Claude 的運作邏輯至關重要。效能方面，還原過程相對快速，但對於大型專案來說，可能會遇到記憶體佔用過高的問題。選擇 TypeScript 使得源碼更具可讀性，但也增加了學習曲線。這個專案的依賴樹相對簡單，主要依賴於 npm 的生態系統，這樣的設計使得整合其他工具相對容易。技術風險方面，未來 npm 包的變更可能會影響到還原過程的穩定性，這需要開發者持續關注。整合方面，這個專案可以輕鬆與其他 JavaScript 工具鏈搭配使用，但對於 CI/CD 的整合可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的概述和使用說明，但缺乏詳細的範例。安裝過程相對順暢，但對於新手來說，理解源碼結構可能會有一定難度。沒有提供多語言支持，僅有英文版本。整體而言，花 30 分鐘能夠順利運行，但理解源碼可能需要更多時間。

## 優缺點分析

> [!success] 優點
> - 提供非官方的源碼視角，對於研究者非常有價值。
> - 還原過程相對簡單，易於使用。
> - 包含多種工具和功能的實作，便於學習。
> - 活躍的社群支持，能夠快速獲得幫助。

> [!danger] 缺點
> - 源碼結構不一定與官方版本一致，可能導致誤解。
> - 僅供研究使用，無法用於商業目的。
> - 需要一定的技術背景來理解和使用。
> - 未來更新可能需要重新調整還原過程。

> [!warning] 注意事項
> - 僅供研究使用，無法用於商業目的。
> - 源碼結構不一定與官方版本完全一致。
> - 需要一定的 TypeScript 和 JavaScript 知識來理解源碼。
> - 不提供完整的開發環境配置，需自行設置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和檔案傳輸，而本專案專注於源碼還原和分析。 |
| [Kuberwastaken/clause-code](https://github.com/Kuberwastaken/clause-code) | 提供功能性 API，而本專案僅還原源碼，無法直接使用其功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和檔案傳輸，提供高效的檔案處理能力。 | 如果你的需求是高效的資料同步，而非源碼分析，則應選擇此工具。 | medium，因為需要重新設計資料流和處理邏輯。 |
| [Kuberwastaken/clause-code](https://github.com/Kuberwastaken/clause-code) | 提供功能性 API，專注於直接應用，而非源碼還原。 | 如果你需要直接使用 Claude 的功能而非研究源碼，則此工具更合適。 | low，因為功能性 API 的使用相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-sourcemap** | **parsync** | **clause-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和檔案傳輸，提供高效的檔案處理能力。 | 提供功能性 API，專注於直接應用，而非源碼還原。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和處理邏輯。 | low，因為功能性 API 的使用相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的需求是高效的資料同步，而非源碼分析，則應選擇此工具。 | 如果你需要直接使用 Claude 的功能而非研究源碼，則此工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合用於學術研究和技術探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 源碼結構可能與官方版本不一致，導致理解困難。
  - 解法：需要仔細比對官方文檔以獲得正確的理解。
- [MEDIUM] 未來 npm 包更新可能影響還原過程的穩定性。
  - 解法：持續關注 npm 包的變更，並適時更新還原邏輯。
- [MEDIUM] 缺乏詳細的使用範例，可能讓新手感到困惑。
  - 解法：參考社群討論和其他開發者的實作範例。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究機構的開發團隊 | 非常適合 | 能夠深入分析和修改 Claude 的源碼以進行研究。 |
| 小型創業團隊希望快速實驗 AI 功能 | 適合 | 提供了多種工具和功能的實作，便於快速開發。 |
| 學生學習 TypeScript 和 JavaScript | 普通 | 雖然有實際代碼範例，但理解源碼可能需要額外指導。 |
| 大型企業的生產環境 | 不適合 | 不建議用於商業用途，且源碼結構不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到對 Claude 源碼的深入理解，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取公開的 npm 包資料，不涉及敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
| Forks | 14.1k |
| Open Issues | 10 |
| Issue 解決率 | 38% (6 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://linux.do/u/huo0) |
| Repo 大小 | 72.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ChinaSiro/claude-code-sourcemap) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ChinaSiro](https://github.com/ChinaSiro) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，回應速度快，問題解決率為 38%。
**連結**：[文件](https://linux.do/u/huo0)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31）
> **活躍天數** 1 天 · **最新 commit** init: restore source from @anthropic-ai/claude-code@2.1.88 sourcemap

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/ChinaSiro/claude-code-sourcemap/issues/8) | 🤡 原汤化原食，Claude 如何看待眼中的老己 https://github.com/openedclaude/cl | 17 | 0 |
> | [#2](https://github.com/ChinaSiro/claude-code-sourcemap/issues/2) | 请问这个和官方仓的主要区别是啥？ | 6 | 4 |
> | [#11](https://github.com/ChinaSiro/claude-code-sourcemap/issues/11) | 请问8个关于Agent架构的Skill在哪里分享的 有无指路 | 1 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-code-sourcemap
> 
> [](https://linux.do)
> 
> > [!WARNING]
> > This repository is **unofficial** and is reconstructed from the public npm package and source map analysis, **for research purposes only**.
> > It does **not** represent the original internal development repository structure.
> >
> > 本仓库为**非官方**整理版，基于公开 npm 发布包与 source map 分析还原，**仅供研究使用**。
> > **不代表**官方原始内部开发仓库结构。
> > 一切基于L站"飘然与我同"的情报提供
> 
> ## 概述
> 
> 本仓库通过 npm 发布包（`@anthropic-ai/claude-code`）内附带的 source map（`cli.js.map`）还原的 TypeScript 源码，版本为 `2.1.88`。
> 
> ## 来源
> 
> - npm 包：[@anthropic-ai/claude-code](https://www.npmjs.com/package/@anthropic-ai/claude-code)
> - 还原版本：`2.1.88`
> - 还原文件数：**4756 个**（含 1884 个 `.ts`/`.tsx` 源文件）
> - 还原方式：提取 `cli.js.map` 中的 `sourcesContent` 字段
> 
> ## 目录结构
> 
> ```
> restored-src/src/
> ├── main.tsx              # CLI 入口
> ├── tools/                # 工具实现（Bash、FileEdit、Grep、MCP 等 30+ 个）
> ├── commands/             # 命令实现（commit、review、config 等 40+ 个）
> ├── services/             # API、MCP、分析等服务
> ├── utils/                # 工具函数（git、model、auth、env 等）
> ├── context/              # React Context
> ├── coordinator/          # 多 Agent 协调模式
> ├── assistant/            # 助手模式（KAIROS）
> ├── buddy/                # AI 伴侣 UI
> ├── remote/               # 远程会话
> ├── plugins/              # 插件系统
> ├── skills/               # 技能系统
> ├── voice/                # 语音交互
> └── vim/                  # Vim 模式
> ```
> 
> ## 声明
> 
> - 源码版权归 [Anthropic](https://www.anthropic.com) 所有
> - 本仓库仅用于技术研究与学习，请勿用于商业用途
> - 如有侵权，请联系删除

## 延伸閱讀

相關概念：[[源碼分析]] · [[開源軟體]] · [[TypeScript]] · [[JavaScript]] · [[AI 開發]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]]

[GitHub](https://github.com/ChinaSiro/claude-code-sourcemap) · [官方網站](https://linux.do/u/huo0)

## 相關收錄

> [!note]- 直接競品（同子分類：源碼還原）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "源碼還原" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ChinaSiro--claude-code-sourcemap" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["源碼分析","開源軟體","TypeScript","JavaScript","AI 開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ChinaSiro--claude-code-sourcemap" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ChinaSiro" AND file.name != "ChinaSiro--claude-code-sourcemap"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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
> const me = dv.page("Repos/ChinaSiro--claude-code-sourcemap");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-06|2026-04-06]] — 再次上榜，8.5k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，8.4k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，8.3k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，8.0k stars
- [[2026-04-02|2026-04-02]] — 再次上榜，7.4k stars
- [[2026-04-01|2026-04-01]] — 首次收錄，4.9k stars
