---
repo: aidenybai/cnfast
url: https://github.com/aidenybai/cnfast
owner: aidenybai
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Fast drop in replacement for `cn`"
homepage: ""
stars: 1002
stars_per_day: 111
forks: 10
open_issues: 8
created: 2026-06-19
pushed_at: 2026-06-22
first_seen: 2026-06-23
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "CSS 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-23
use_case: "提供一個快速的 `cn` 替代方案，提升 Tailwind CSS 的類別合併效能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-03"
contributor_count: 3
engagement: "low"
issue_close_rate: 11
repo_size_kb: 2320
readme_length: 3440
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-23"
star_history: "2026-06-23:664,2026-06-23:665,2026-06-24:790,2026-06-24:792,2026-06-25:880,2026-06-25:881,2026-06-26:933,2026-06-26:934,2026-06-27:964,2026-06-28:984,2026-06-29:1002"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/clsx"
  - "topic/cn"
  - "topic/tailwindcss"
aliases:
  - "cnfast"
  - "aidenybai/cnfast"
  - "提供一個快速的 `cn` 替代方案，提升 Tailwind CSS 的類別合併效能。"
---

# cnfast

**1.0k** stars · **111** stars/天 · 建立 9 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/aidenybai--cnfast");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`clsx` `cn` `tailwindcss`

> [!summary] 一句話摘要
> 提供一個快速的 `cn` 替代方案，提升 Tailwind CSS 的類別合併效能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (111 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 6 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要提升 Tailwind CSS 類別合併性能的前端開發者，特別是在大型或動態更新的應用中。
> **一句話重點** cnfast 的性能優化使其成為需要高效能的 Tailwind CSS 使用者的理想選擇。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/aidenybai--cnfast");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CSS 工具" && p.file.name !== "aidenybai--cnfast" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CSS 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到顯著的性能提升，值得採用。

> [!abstract] 核心創新
> cnfast 提供了比現有解決方案更快的類別合併性能，特別是在重渲染的場景中。

## 專案簡介

cnfast 是一個針對 Tailwind CSS 的類別合併工具，設計為 `cn` 的快速替代品。它的核心機制是透過優化的演算法來加速類別合併過程，實現平均 3.8 倍的速度提升，對於組件密集的代碼，速度提升可達 7 倍。使用者只需將 `cn` 的引用替換為 `cnfast`，即可享受相同的 API 並獲得更快的性能。安裝過程簡單，只需執行 `npm install cnfast`，並可透過 `npx cnfast migrate` 一鍵遷移現有的 `clsx` 或 `tailwind-merge` 專案。技術上，cnfast 使用了 V8 引擎的優化特性，對於重複調用的情況，能夠顯著減少運算時間，特別是在需要頻繁重渲染的應用中。

與 `tailwind-merge` 相比，cnfast 在多個性能基準測試中表現更佳，尤其是在處理大量重複類別時，能夠顯著降低渲染延遲。這使得它特別適合用於需要高效能的前端應用，如數據網格或即時更新的儀表板。雖然目前的安裝包大小為 9.43 KB，略大於基準的 8.45 KB，但其性能優勢明顯。使用者在選擇時應考慮到這些性能提升是否符合他們的需求，尤其是在大型應用中。整體而言，cnfast 是一個成熟且值得考慮的選擇，特別是對於需要高效能的 Tailwind CSS 使用者。

**技術棧**：`TypeScript` · `Shell` · `JavaScript`

## 重點功能

- 性能優化 — cnfast 平均速度提升 3.8 倍，對於重複調用可達 7 倍。
- 簡單遷移 — 透過 `npx cnfast migrate` 一鍵遷移現有專案。
- 相容性 — 提供與 `clsx` 和 `tailwind-merge` 相同的 API，無需修改現有代碼。
- 標記模板支持 — 作為標記模板使用時，能夠在穩定的調用位置上進一步提升性能。
- 無錯誤輸出 — 生成的類別輸出與 `tailwind-merge` 完全相同，確保兼容性。

## 快速開始

1. 安裝 cnfast
```bash
npm install cnfast
```
2. 遷移現有專案
```bash
npx cnfast migrate
```
3. 在代碼中替換 cn 的引用
```bash
export { cn } from 'cnfast';
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 cnfast",
  "指令": "import { cn } from 'cnfast';\ncn('px-2 py-1', isActive && 'px-4', { 'text-red-500': hasError });",
  "預期輸出": "\"py-1 px-4 text-red-500\""
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1002 stars（111/天），forks 10（1.0%），顯示出穩定的增長趨勢。作者 aidenybai 之前在開源社群有活躍貢獻，這個專案解決了現有 `tailwind-merge` 性能不足的痛點，特別是在需要頻繁更新的前端應用中。社群對於性能的需求加上這個工具的優化，使得它迅速受到關注。近期的社群討論集中在安裝大小和自定義配置的支持上，顯示出使用者對於性能和靈活性的重視。

## 適合誰使用

**目標受眾**：需要提升 Tailwind CSS 類別合併性能的前端開發者，特別是在大型或動態更新的應用中。

> [!example] 使用場景
> - 前端工程師用它來加速大型應用中的 Tailwind CSS 類別合併，因為 cnfast 在重渲染時的性能提升可達 7 倍，顯著減少了頁面延遲。
> - 開發者用它來簡化現有的 `clsx` 或 `tailwind-merge` 專案，因為只需一條命令 `npx cnfast migrate` 即可完成遷移，節省了大量的重構時間。
> - UI 設計師用它來提升設計系統的性能，因為 cnfast 在處理大量組件時能保持流暢的用戶體驗，特別是在數據驅動的界面中。

## 架構分析

cnfast 的架構設計以性能為核心，使用了 V8 引擎的優化特性來加速類別合併過程。它的資料流從用戶輸入的類別開始，經過優化的合併算法，最終生成合併後的類別字串。這種設計使得在重複調用的情況下，能夠顯著減少計算時間，特別適合用於需要頻繁更新的前端應用。選擇使用 TypeScript 和現有的 clsx、tailwind-merge 代碼基礎，降低了開發成本，但也帶來了安裝包大小的增加。整體而言，cnfast 在性能和可用性之間取得了良好的平衡，適合大多數前端開發場景。

## 技術深入分析

cnfast 的核心技術機制是基於 V8 引擎的優化，透過改進的類別合併算法來提升性能。它能夠在多個性能基準測試中表現出色，特別是在處理重複類別的情況下，顯示出 3.8 倍的速度提升。這些性能優勢使得 cnfast 特別適合用於需要頻繁更新的前端應用，如數據網格或即時更新的儀表板。選擇 TypeScript 作為開發語言，讓開發過程更為順暢，但也增加了安裝包的大小。技術風險方面，cnfast 目前的安裝包大小可能會影響某些使用者的選擇，特別是在對性能有高要求的應用中。整合方面，cnfast 與現有的前端工具鏈相容性良好，能夠輕鬆融入現有的開發流程，無需重構大量代碼。整體而言，cnfast 是一個值得考慮的高效能類別合併工具，特別適合大型或動態更新的應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，無明顯的坑。文件中有詳細的遷移指南，對於從其他工具轉換的使用者非常友好。

## 優缺點分析

> [!success] 優點
> - 性能顯著提升，特別是在重渲染的場景中。
> - 簡單的遷移過程，降低了使用門檻。
> - 與現有工具的相容性高，無需大幅修改代碼。

> [!danger] 缺點
> - 安裝包大小較大，可能影響某些使用者的選擇。
> - 尚未支持自定義的 tailwind-merge 配置。
> - 對於小型應用，性能提升可能不明顯。

> [!warning] 注意事項
> - 目前尚未支持自定義的 tailwind-merge 配置。
> - 安裝包大小較大，可能影響某些使用者的選擇。
> - 對於小型或不頻繁更新的頁面，性能提升可能不明顯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) | tailwind-merge 是一個成熟的類別合併工具，但在性能上不如 cnfast，特別是在重複調用的情況下。 |
| [lukeed/clsx](https://github.com/lukeed/clsx) | clsx 提供類別合併功能，但缺乏 cnfast 的性能優化，對於需要高效能的應用來說，cnfast 是更好的選擇。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) | tailwind-merge 使用傳統的類別合併算法，性能上不如 cnfast，特別是在重複調用的情況下。 | 如果你的專案不需要高頻率的類別合併，tailwind-merge 仍然是一個穩定的選擇。 | low，因為 tailwind-merge 的 API 與 cnfast 相似，遷移成本低。 |
| [lukeed/clsx](https://github.com/lukeed/clsx) | clsx 提供了基本的類別合併功能，但缺乏 cnfast 的性能優化，對於需要高效能的應用來說，cnfast 是更好的選擇。 | 如果你的專案對性能要求不高，clsx 仍然是一個簡單易用的選擇。 | medium，因為需要重構現有的類別合併邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cnfast** | **tailwind-merge** | **clsx** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | tailwind-merge 使用傳統的類別合併算法，性能上不如 cnfast，特別是在重複調用的情況下。 | clsx 提供了基本的類別合併功能，但缺乏 cnfast 的性能優化，對於需要高效能的應用來說，cnfast 是更好的選擇。 |
> | 遷移成本 | - | low，因為 tailwind-merge 的 API 與 cnfast 相似，遷移成本低。 | medium，因為需要重構現有的類別合併邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案不需要高頻率的類別合併，tailwind-mer | 如果你的專案對性能要求不高，clsx 仍然是一個簡單易用的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人專案試用，尚未建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 安裝包大小較大，可能影響某些使用者的選擇
  - 解法：考慮使用更小的替代方案，如 clsx 或 tailwind-merge
- **[HIGH]** 尚未支持自定義的 tailwind-merge 配置
  - 解法：等待未來版本更新，或考慮使用其他工具
- [low] 對於小型應用，性能提升可能不明顯
  - 解法：在大型或動態更新的應用中使用 cnfast，以獲得最佳效果

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型前端應用的類別合併 | 非常適合 | cnfast 提供了顯著的性能提升，特別是在重渲染的場景中。 |
| 小型靜態網站 | 不適合 | 對於小型應用，性能提升可能不明顯，且安裝包大小較大。 |
| 需要頻繁更新的數據驅動應用 | 非常適合 | cnfast 在重複調用的情況下能顯著提升性能，保持流暢的用戶體驗。 |
| 現有使用 clsx 的專案 | 適合 | 透過簡單的遷移過程，能夠快速提升性能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的性能提升，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：cnfast 本身不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/aidenybai--cnfast");
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
> const me = dv.page("Repos/aidenybai--cnfast");
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
| Forks | 10 |
| Open Issues | 8 |
| Issue 解決率 | 11% (1 closed) |
| 最後推送 | 2026-06-22 |
| 建立日期 | 2026-06-19 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/aidenybai/cnfast) |
| Topics | `clsx` `cn` `tailwindcss` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@changesets/cli` `@types/node` `@types/validate-npm-package-name` `@types/whois-json` `@voidzero-dev/vite-plus-core` `tsx` `turbo` `typescript` `validate-npm-package-name` `vite-plus` `whois-json`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@aidenybai](https://github.com/aidenybai) | 25 |
> | [@cursoragent](https://github.com/cursoragent) | 1 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續回應問題與更新。
**連結**：[文件](https://npmjs.com/package/cnfast)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-22）
> **活躍天數** 1 天 · **最新 commit** fix: bound conflict-key registry to prevent unbounded memory growth

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/aidenybai/cnfast/issues/5) | Big install size (2x of tailwind-merge + clsx) | 41 | 0 |
> | [#6](https://github.com/aidenybai/cnfast/issues/6) | Support for custom tailwind-merge configuration | 13 | 1 |
> | [#8](https://github.com/aidenybai/cnfast/issues/8) | Expose config extension (custom classGroups) for projects wi | 4 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # cnfast
> 
> [](https://npmjs.com/package/cnfast)
> [](https://npmjs.com/package/cnfast)
> 
> Fast drop-in replacement for `cn`.
> 
> cnfast runs **3.8x faster** on average than `tailwind-merge`, up to **7x** on component-heavy code, with byte-identical output. Same API, no code changes.
> 
> ```ts
> import { cn } from "cnfast";
> 
> cn("px-2 py-1", isActive && "px-4", { "text-red-500": hasError });
> // "py-1 px-4 text-red-500"
> ```
> 
> ## Install
> 
> ```bash
> npm install cnfast
> ```
> 
> Migrate an existing `clsx`, `classnames`, or `tailwind-merge` project in one command:
> 
> ```bash
> npx cnfast migrate
> ```
> 
> On a shadcn/ui project, add or replace your `cn` utility through the registry. This rewrites `lib/utils.ts` to re-export cnfast and installs the package:
> 
> ```bash
> npx shadcn@latest add aidenybai/cnfast/cn
> ```
> 
> ## Usage
> 
> Swap the shadcn/ui `cn` helper for cnfast:
> 
> ```ts
> // before
> import { clsx, type ClassValue } from "clsx";
> import { twMerge } from "tailwind-merge";
> export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
> 
> // after
> export { cn } from "cnfast";
> ```
> 
> cnfast also exports `clsx`, `twMerge`, and `twJoin`.
> 
> ## Tagged templates
> 
> As a tagged template, `cn` caches by call-site identity, skipping the join and hash on every repeat. A stable call site runs 4.3x faster than `tailwind-merge`. The `cn(...)` call form already caches its arguments on V8, so on that engine the template form is only 1.2x ahead; the gap is wider on engines without that cache.
> 
> ```ts
> cn`px-2 px-4 ${isActive && "bg-blue-500"}`; // "px-4 bg-blue-500"
> ```
> 
> ## Comparing against cn
> 
> cnfast produces byte-identical output to `tailwind-merge` and computes it faster, with the largest gains on re-rendering call sites where the same class arguments recur:
> 
> Across the wider suite, operations per second on V8 (Node and Chrome), best-of-3:
> 
> | Workload           | tailwind-merge        | cnfast       | Speedup  |
> | ------------------ | --------------------- | ------------ | -------- |
> | Cached re-render   | 2,025 ops/s           | 8,709 ops/s  | **4.3x** |
> | Merge engine, cold | 1,440 ops/s           | 5,411 ops/s  | **3.8x** |
> | Component corpus   | 1,585 ops/s           | 6,506 ops/s  | **4.1x** |
> | Page render        | 4,249 ops/s           | 11,908 ops/s | **2.8x** |
> | Live data grid     | 500 ops/s             | 2,185 ops/s  | **4.4x** |
> 
> Across 65 workloads the geometric mean is **3.8x**, with 0 mismatches over 113,291 real-world call groups. The bundle is 9.43 KB gzipped against 8.45 KB for the baseline. Figures come from V8; see the [benchmark suite](./packages/cnfast/bench/README.md) for the Bun breakdown and the per-engine caveats.
> 
> `cn` runs once per element, so its cost scales with how much you render. Server-rendering a large page calls it across the whole tree; a client app that re-renders often (data grids, virtualized tables, live dashboards) calls it thousands of times per second, where a faster `cn` keeps frames within budget. On a small or rarely updated page, the saving stays within run-to-run noise.
> 
> Regenerate the chart with `pnpm --filter cnfast bench:chart`. See the [architecture guide](./docs/architecture.md) for how it works.
> 
> ## Development
> 
> ```bash
> pnpm install
> pnpm build
> pnpm test
> ```
> 
> ## Credits
> 
> cnfast adapts MIT-licensed code from [clsx](https://github.com/lukeed/clsx) (Luke Edwards) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) (Dany Castillo). See [LICENSE](./LICENSE).
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CSS 工具]] · [[性能優化]] · [[前端開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/aidenybai/cnfast)

## 相關收錄

> [!note]- 直接競品（同子分類：CSS 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CSS 工具" AND file.name != "aidenybai--cnfast"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "aidenybai--cnfast"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "aidenybai--cnfast" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "aidenybai--cnfast"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CSS 工具","性能優化","前端開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "aidenybai--cnfast" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/aidenybai--cnfast");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "aidenybai--cnfast" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "aidenybai" AND file.name != "aidenybai--cnfast"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/aidenybai--cnfast");
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
> const me = dv.page("Repos/aidenybai--cnfast");
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
> const me = dv.page("Repos/aidenybai--cnfast");
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
> const me = dv.page("Repos/aidenybai--cnfast");
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
> const me = dv.page("Repos/aidenybai--cnfast");
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

> **2026-06-23** — 首次收錄
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

- [[2026-06-26|2026-06-26]] — 再次上榜，933 stars
- [[2026-06-25|2026-06-25]] — 再次上榜，880 stars
- [[2026-06-24|2026-06-24]] — 再次上榜，790 stars
- [[2026-06-23|2026-06-23]] — 首次收錄，664 stars
