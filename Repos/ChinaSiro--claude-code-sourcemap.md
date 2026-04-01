---
repo: ChinaSiro/claude-code-sourcemap
url: https://github.com/ChinaSiro/claude-code-sourcemap
owner: ChinaSiro
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: "https://linux.do/u/huo0"
stars: 4969
stars_per_day: 4969
forks: 8979
open_issues: 3
created: 2026-03-31
pushed_at: 2026-03-31
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "其他"
subcategory: "源碼還原"
release_tag: ""
install_complexity: "easy"
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
appearances: 1
next_review: "2026-04-04"
contributor_count: 1
engagement: "high"
issue_close_rate: 67
repo_size_kb: 73856
readme_length: 1430
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:4889,2026-04-01:4969"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
aliases:
  - "claude-code-sourcemap"
  - "ChinaSiro/claude-code-sourcemap"
  - "還原 Claude 的 TypeScript 源碼，供研究使用。"
---

# claude-code-sourcemap

**5.0k** stars · **5.0k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

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

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 還原 Claude 的 TypeScript 源碼，供研究使用。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.0k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Claude 源碼有研究需求的開發者和研究者。
> **一句話重點** 這個專案讓開發者能夠深入研究 Claude 的內部運作，提供了一個非官方的源碼結構。

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
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案是基於公開 npm 包和 source map 分析還原的非官方源碼版本。

## 專案簡介

這個專案通過分析 npm 包 `@anthropic-ai/claude-code` 內的 source map 來還原 Claude 的 TypeScript 源碼，版本為 `2.1.88`。使用者可以從 `cli.js.map` 中提取 `sourcesContent` 字段，得到 4756 個還原文件，包括 1884 個 `.ts` 和 `.tsx` 源文件。這樣的設計使得開發者能夠研究 Claude 的內部運作，並且不需要直接訪問官方的內部代碼庫。這個工具的賣點在於它提供了一個非官方的、可供研究的源碼結構，對於想要了解 Claude 的開發者來說，這是一個寶貴的資源。技術上，這個專案依賴於 TypeScript 和 JavaScript，並且結構清晰，包含 CLI 入口、工具實現、命令實現等多個模組，這樣的模組化設計使得代碼的可讀性和可維護性都得到了提升。

與其他類似工具相比，如 `Kuberwastaken/claude-code`，這個專案專注於源碼的還原而非功能擴展，適合對 Claude 的內部邏輯進行深入研究的開發者。使用這個工具時，開發者需要注意它僅供研究用途，並不適合用於商業項目。社群活躍度相對較高，開放的 issues 數量也顯示出使用者對於功能的關注。整體來看，這是一個適合技術研究的工具，但不建議用於生產環境。

**技術棧**：`TypeScript` · `JavaScript`

## 重點功能

- 源碼還原 — 從 npm 包 `@anthropic-ai/claude-code` 的 source map 中還原 TypeScript 源碼。
- 模組化結構 — 包含 CLI 入口、工具實現、命令實現等多個模組，便於維護和擴展。
- 研究用途 — 僅供研究使用，適合對 Claude 的內部邏輯進行深入分析。
- 開放社群 — 活躍的社群和開放的 issues，便於用戶交流和問題解決。
- 版本控制 — 還原的版本為 `2.1.88`，確保用戶使用的是最新的源碼結構。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ChinaSiro/claude-code-sourcemap.git
```
2. 進入專案目錄
```bash
cd claude-code-sourcemap
```
3. 安裝依賴
```bash
npm install
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 npm。",
  "指令": "npm install @anthropic-ai/claude-code",
  "預期輸出": "成功安裝 @anthropic-ai/claude-code 包。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 4969 stars（4969/天），forks 8979（180.7%），這是極端爆發式增長。作者 ChinaSiro 透過這個專案解決了對於 Claude 源碼的研究需求，之前開發者只能依賴官方的文檔和有限的資源。這個專案的出現讓開發者能夠更深入地了解 Claude 的運作邏輯，並且能夠進行自定義的實驗和開發。社群的反應熱烈，特別是對於源碼的還原和使用場景的討論。這個工具的可行性得益於 TypeScript 和 JavaScript 的普及，使得開發者能夠輕鬆上手。forks/stars 比率高達 180.7%，顯示出許多人對於這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：對 Claude 源碼有研究需求的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來分析 Claude 的內部邏輯，因為這個工具提供了完整的 TypeScript 源碼，讓研究者能夠深入理解其運作原理。
> - 開發者用它來進行功能擴展和自定義，因為源碼的開放性使得他們能夠根據自己的需求進行修改。
> - 學生用它來學習 TypeScript 和 JavaScript 的最佳實踐，因為這個專案的結構清晰，適合用作學習範本。

## 架構分析

這個專案採用模組化的架構設計，將源碼分為多個功能模組，如 CLI 入口、工具實現、命令實現等。這樣的設計使得代碼結構清晰，便於維護和擴展。資料流方面，使用者可以通過 npm 包安裝，然後直接使用 CLI 進行操作。

選擇 TypeScript 作為主要語言，因為它提供了靜態類型檢查，有助於減少錯誤並提高代碼質量。這個選擇的代價是學習曲線相對較陡，但對於有經驗的開發者來說，這是值得的。擴展性方面，模組化設計使得未來可以輕鬆添加新功能或修改現有功能，這對於持續的開發和研究非常重要。

## 技術深入分析

這個專案的核心技術機制是通過分析 npm 包的 source map 來還原源碼，這樣的方式使得開發者能夠在不接觸官方代碼的情況下，獲得 Claude 的內部邏輯。效能方面，這個專案能夠處理大量的源碼文件，並且結構清晰，便於快速定位和修改。選擇 TypeScript 作為主要語言，帶來了靜態類型檢查的優勢，這對於大型專案的維護非常重要，但也增加了學習成本。技術風險方面，由於這個專案是非官方的，未來可能會面臨源碼不完整或不一致的問題。整合方面，這個專案與現有的 JavaScript 生態系統相容良好，並且可以與多種工具鏈進行整合，對於開發者來說，這是一個友好的環境。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的基本步驟。安裝過程相對順暢，但需要注意 npm 的依賴問題。文件沒有多語言支持，僅提供英文和中文。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供完整的 TypeScript 源碼，便於研究和學習。
> - 模組化設計，易於維護和擴展。
> - 活躍的社群支持，便於解決問題。

> [!danger] 缺點
> - 僅供研究使用，無法用於商業項目。
> - 不代表官方的內部結構，可能存在不完整性。
> - 需要一定的技術基礎才能有效利用。

> [!warning] 注意事項
> - 僅供研究使用，不適合商業用途。
> - 不代表官方的內部開發結構，可能存在不完整性。
> - 需要一定的 TypeScript 和 JavaScript 知識才能有效利用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 這個工具專注於源碼的還原，而非功能擴展，適合對 Claude 的內部邏輯進行深入研究。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供了一些功能擴展，而本專案則專注於源碼的還原，適合需要深入分析的開發者。 |

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
| Forks | 9.0k |
| Open Issues | 3 |
| Issue 解決率 | 67% (6 closed) |
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

**社群活躍度**：社群活躍，有多個開放的 issues 和討論。
**連結**：[文件](https://linux.do/u/huo0)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31）
> **活躍天數** 1 天 · **最新 commit** init: restore source from @anthropic-ai/claude-code@2.1.88 sourcemap

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/ChinaSiro/claude-code-sourcemap/issues/2) | 请问这个和官方仓的主要区别是啥？ | 6 | 3 |
> | [#8](https://github.com/ChinaSiro/claude-code-sourcemap/issues/8) | 🤡 原汤化原食，Claude 如何看待眼中的老己 https://github.com/openedclaude/cl | 5 | 0 |

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

相關概念：[[源碼還原]] · [[TypeScript]] · [[開源研究]]

相關專案：[[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]]

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
> const concepts = ["源碼還原","TypeScript","開源研究"];
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

- [[2026-04-01|2026-04-01]] — 首次收錄，4.9k stars
