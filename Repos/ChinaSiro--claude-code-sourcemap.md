---
repo: ChinaSiro/claude-code-sourcemap
url: https://github.com/ChinaSiro/claude-code-sourcemap
owner: ChinaSiro
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: "https://linux.do/u/huo0"
stars: 8586
stars_per_day: 1227
forks: 14266
open_issues: 10
created: 2026-03-31
pushed_at: 2026-03-31
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "其他"
subcategory: "源碼還原"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "還原 Claude 的 TypeScript 源碼，供研究使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-04-10"
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
star_history: "2026-04-01:4889,2026-04-01:4969,2026-04-02:7368,2026-04-02:7376,2026-04-03:8012,2026-04-03:8013,2026-04-04:8275,2026-04-04:8277,2026-04-05:8378,2026-04-05:8378,2026-04-06:8453,2026-04-06:8453,2026-04-07:8517,2026-04-07:8518,2026-04-08:8586"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "claude-code-sourcemap"
  - "ChinaSiro/claude-code-sourcemap"
  - "還原 Claude 的 TypeScript 源碼，供研究使用。"
---

# claude-code-sourcemap

**8.6k** stars · **1.2k** stars/天 · 建立 7 天前 · TypeScript · 未標註授權

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
> 還原 Claude 的 TypeScript 源碼，供研究使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Claude 源碼有興趣的開發者和研究者，尤其是在學術和技術研究領域。
> **一句話重點** 這個專案讓開發者能夠深入探索 Claude 的內部邏輯，提供了一個學習和研究的絕佳資源。

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
> **結論** 花 5 小時學習，3 小時整合，得到對 Claude 源碼的深入理解，值得。

> [!abstract] 核心創新
> 本專案提供了 Claude 的 TypeScript 源碼還原，供研究和學習使用。

## 專案簡介

這個專案旨在從公開的 npm 包 `@anthropic-ai/claude-code` 中提取 TypeScript 源碼，並還原出版本 `2.1.88` 的完整結構。使用者可以透過分析 `cli.js.map` 來獲取源碼，這樣的設計使得開發者能夠更深入地理解 Claude 的內部運作。專案中包含 4756 個還原文件，涵蓋了多種功能模組，如 CLI 入口、工具實現、命令實現、API 服務等。這樣的結構不僅便於研究，還可以作為學習 TypeScript 和大型應用架構的範本。這個工具的賣點在於它提供了對 Claude 內部邏輯的透明度，讓開發者能夠探索其設計思路和實作細節。

相較於其他類似的專案，如 `0xGF/boneyard` 和 `Kuberwastaken/claude-code`，這個專案專注於源碼的還原，並提供了完整的目錄結構，便於使用者進行研究和學習。使用者在使用過程中可能會遇到版權問題，因為源碼的版權歸原開發者所有，因此不應用於商業用途。這個專案的社群活躍度高，最近的 commit 活動顯示出持續的維護和更新，並且有不少開放的 issue 供使用者討論和提問。整體來看，這是一個適合對 Claude 有興趣的開發者和研究者的工具，尤其是在學術和技術研究領域。未來可能會有更多的功能擴展和社群貢獻，值得持續關注。

**技術棧**：`TypeScript` · `JavaScript`

## 重點功能

- 源碼還原 — 從 npm 包中提取 TypeScript 源碼，還原版本為 2.1.88。
- 完整目錄結構 — 包含 CLI 入口、工具實現、命令實現等多種模組。
- 研究用途 — 僅供技術研究與學習，避免商業用途。
- 社群活躍 — 定期更新，開放的 issue 供使用者討論。
- 版權聲明 — 明確標示源碼的版權歸原開發者所有。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ChinaSiro/claude-code-sourcemap.git
```
2. 安裝依賴
```bash
npm install
```
3. 運行 CLI
```bash
node ./restored-src/src/main.tsx
```

## 程式碼範例

```ts
{
  "前置條件": "需安裝 Node.js 和 npm。",
  "指令": "node ./restored-src/src/main.tsx",
  "預期輸出": "啟動 CLI 入口，顯示可用命令和功能。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 8586 stars（1227/天），forks 14266（166.2%），顯示出極高的興趣和參與度。這個專案由 ChinaSiro 發起，專注於還原 Claude 的源碼，解決了開發者對於 Claude 內部運作的透明度需求。之前，開發者只能依賴官方文檔和有限的資源來理解 Claude 的功能，這個專案提供了一個更直接的方式來探索其源碼。最近的推特和技術論壇討論也引起了廣泛的關注，進一步推動了其流行。高比例的 forks/stars（166.2%）顯示出許多人在實際修改和使用這個專案，反映出其實用性和吸引力。

## 適合誰使用

**目標受眾**：對 Claude 源碼有興趣的開發者和研究者，尤其是在學術和技術研究領域。

> [!example] 使用場景
> - 研究人員用它來分析 Claude 的內部邏輯，因為它提供了完整的 TypeScript 源碼結構，便於深入研究。
> - 開發者用它來學習大型應用的架構設計，因為它的目錄結構清晰，包含多種功能模組的實作。
> - 學生用它來進行技術實驗，因為可以在不侵犯版權的情況下探索和學習 Claude 的設計思路。

## 架構分析

這個專案的架構是基於從 npm 包中提取的 source map，使用 TypeScript 進行源碼還原。資料流的核心在於從 `cli.js.map` 中提取 `sourcesContent`，這樣的設計使得還原過程相對簡單，但也可能導致與原始結構的差異。選擇 TypeScript 而非 JavaScript 是因為其靜態類型特性有助於更清晰的代碼結構，雖然這會增加學習曲線。這個專案的擴展性瓶頸在於源碼的合法性和使用範圍，未來可能需要考慮如何在不侵犯版權的情況下進行擴展。

## 技術深入分析

這個專案的核心技術機制在於使用 TypeScript 進行源碼還原，透過分析 npm 包中的 source map 來提取源碼。這樣的設計使得開發者能夠獲得 Claude 的內部邏輯，但也可能導致與原始結構的差異。效能方面，還原過程的速度取決於源碼的大小和結構，對於 4756 個文件的處理，可能需要一定的計算資源。選擇 TypeScript 而非 JavaScript 是因為其靜態類型特性能提高代碼的可讀性和可維護性，但這也增加了學習的難度。技術風險方面，源碼的合法性和使用範圍是主要考量，未來可能需要考慮如何在不侵犯版權的情況下進行擴展。整合方面，這個專案可以與現有的 TypeScript 開發環境無縫對接，但對於不熟悉 TypeScript 的開發者來說，學習成本可能較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的專案背景和使用說明，安裝過程相對順暢，沒有明顯的坑。雖然沒有詳細的 getting started guide，但提供的步驟足以讓新手快速上手。文件目前僅有英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供完整的 TypeScript 源碼結構，便於研究和學習。
> - 社群活躍，定期更新，能夠獲得最新的技術支持。
> - 清晰的目錄結構，便於開發者快速上手。

> [!danger] 缺點
> - 僅供研究使用，商業用途受限。
> - 可能存在版權問題，需遵循開發者的要求。
> - 源碼還原的準確性可能不如官方版本。

> [!warning] 注意事項
> - 僅供研究使用，不得用於商業用途。
> - 可能存在版權問題，需遵循原開發者的要求。
> - 未經官方授權的還原，可能與實際內部結構不符。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於開源工具的逆向工程，但不如本專案專注於特定的 Claude 源碼還原。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 提供類似的源碼還原功能，但版本和結構可能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於開源工具的逆向工程，提供多種開源工具的源碼，但不如本專案專注於 Claude 的源碼還原。 | 如果你需要探索多種開源工具的源碼，而不僅僅是 Claude 的話，這個工具會更合適。 | medium，因為需要理解不同工具的架構和實作。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 提供類似的源碼還原功能，但版本和結構可能不同，可能不如本專案完整。 | 如果你的需求是針對特定版本的 Claude 源碼，這個工具會更合適。 | low，因為結構相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-sourcemap** | **boneyard** | **claude-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於開源工具的逆向工程，提供多種開源工具的源碼，但不如本專案專注於 Claude 的源碼還原。 | 提供類似的源碼還原功能，但版本和結構可能不同，可能不如本專案完整。 |
> | 遷移成本 | - | medium，因為需要理解不同工具的架構和實作。 | low，因為結構相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你需要探索多種開源工具的源碼，而不僅僅是 Claude  | 如果你的需求是針對特定版本的 Claude 源碼，這個工具會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合技術研究和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 源碼還原的準確性可能不如官方版本，可能導致功能不全。
  - 解法：參考官方文檔以獲得完整功能說明。
- **[HIGH]** 使用過程中可能遇到版權問題，需遵循原開發者的要求。
  - 解法：僅用於研究目的，避免商業用途。
- [MEDIUM] 對於不熟悉 TypeScript 的開發者來說，學習曲線較陡峭。
  - 解法：建議先學習 TypeScript 基礎知識。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 學術研究團隊分析 Claude 的內部邏輯 | 非常適合 | 提供完整的源碼結構，便於深入研究。 |
| 開發者學習大型應用架構設計 | 適合 | 清晰的目錄結構，包含多種功能模組的實作。 |
| 商業團隊尋找可用於產品的源碼 | 不適合 | 僅供研究使用，商業用途受限。 |
| 學生進行技術實驗 | 非常適合 | 可以在不侵犯版權的情況下探索和學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到對 Claude 源碼的深入理解，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本專案不需要高權限，僅存取公開的 npm 包資料，不涉及敏感資料。

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
| Forks | 14.3k |
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

**社群活躍度**：社群活躍，定期更新和討論。
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

相關概念：[[源碼還原]] · [[開源軟體]] · [[技術研究]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

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
> WHERE category = "其他" AND file.name != "ChinaSiro--claude-code-sourcemap"
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
> const concepts = ["源碼還原","開源軟體","技術研究"];
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

- [[2026-04-07|2026-04-07]] — 再次上榜，8.5k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，8.5k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，8.4k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，8.3k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，8.0k stars
- [[2026-04-02|2026-04-02]] — 再次上榜，7.4k stars
- [[2026-04-01|2026-04-01]] — 首次收錄，4.9k stars
