---
repo: aidenybai/cnfast
url: https://github.com/aidenybai/cnfast
owner: aidenybai
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Fast drop in replacement for `cn`"
homepage: ""
stars: 1029
stars_per_day: 103
forks: 10
open_issues: 9
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
use_case: "提供 `cn` 的快速替代方案，提升 Tailwind CSS 的性能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-03"
contributor_count: 3
engagement: "low"
issue_close_rate: 10
repo_size_kb: 2320
readme_length: 3440
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-23"
star_history: "2026-06-23:664,2026-06-23:665,2026-06-24:790,2026-06-24:792,2026-06-25:880,2026-06-25:881,2026-06-26:933,2026-06-26:934,2026-06-27:964,2026-06-28:984,2026-06-29:1002,2026-06-30:1029"
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
  - "提供 `cn` 的快速替代方案，提升 Tailwind CSS 的性能。"
---

# cnfast

**1.0k** stars · **103** stars/天 · 建立 10 天前 · TypeScript · NOASSERTION

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
> 提供 `cn` 的快速替代方案，提升 Tailwind CSS 的性能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (103 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 7 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在大型 Tailwind CSS 專案中提升性能的前端開發者。
> **一句話重點** cnfast 的性能優化設計讓它在大型 Tailwind CSS 專案中成為不可或缺的工具。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到顯著的性能提升，值得嘗試。

> [!abstract] 核心創新
> cnfast 在性能上比 tailwind-merge 快 3.8 倍，並且提供相同的輸出結果。

## 專案簡介

cnfast 是一個快速的 `cn` 替代方案，專為 Tailwind CSS 設計，能在不改變 API 的情況下，提供高達 7 倍的性能提升。使用者只需將原有的 `cn` 替換為 `cnfast`，即可享受更快的運算速度，特別是在重組件的情況下，cnfast 在 V8 引擎上表現出色，能達到 8,709 ops/s 的性能。這個工具的核心機制是透過優化的緩存機制，減少重複計算，並且在多次渲染相同類別時，顯著降低性能損耗。使用者可以透過 `npx cnfast migrate` 一鍵遷移現有的 `clsx` 或 `tailwind-merge` 專案，簡化過渡過程。cnfast 的設計選擇使其在大型應用中表現優異，尤其是在需要頻繁渲染的情境下。

與其他同類工具相比，cnfast 的性能提升顯著，特別是在重渲染時，這使得它在需要高效能的前端應用中更具吸引力。雖然目前存在一些開發者反映的安裝大小問題，但整體來說，cnfast 提供了更佳的性能和相容性。這個專案仍在快速發展中，未來可能會進一步優化配置和擴展功能。適合需要高效能 Tailwind CSS 解決方案的開發者，尤其是大型專案或頻繁更新的應用。

**技術棧**：`TypeScript` · `Node.js >=22` · `pnpm >=8`

## 重點功能

- 性能提升 — cnfast 在多次渲染相同類別時，能達到最高 7 倍的性能提升。
- 簡單遷移 — 使用 `npx cnfast migrate` 一鍵遷移現有的 clsx 或 tailwind-merge 專案。
- API 相容性 — 與原有的 `cn` API 完全相容，無需修改現有代碼。
- 緩存機制 — 透過緩存重複計算的結果，提升渲染速度。
- 可擴展性 — 支援自定義 Tailwind 配置，適合不同專案需求。

## 快速開始

1. 安裝 cnfast
```bash
npm install cnfast
```
2. 遷移現有專案
```bash
npx cnfast migrate
```
3. 使用 cnfast 替換 cn
```bash
export { cn } from 'cnfast';
```

## 程式碼範例

```ts
[
  "# 使用 cnfast 替代 cn 的範例",
  "import { cn } from 'cnfast';",
  "cn('px-2 py-1', isActive && 'px-4', { 'text-red-500': hasError });",
  "# 預期輸出：'py-1 px-4 text-red-500'"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 1029 stars（103/天），forks 10（1.0%），這顯示出穩定的增長趨勢。作者 aidenybai 之前在開源社群中活躍，這次推出的 cnfast 解決了 tailwind-merge 性能不足的痛點，特別是在大型應用中，這類性能優化的需求非常迫切。社群對於性能的關注和需求，促使了這個專案的快速成長。

## 適合誰使用

**目標受眾**：需要在大型 Tailwind CSS 專案中提升性能的前端開發者。

> [!example] 使用場景
> - 前端工程師用它來提升大型應用的渲染性能，因為 cnfast 在重渲染時的速度提升可達 4.3 倍，顯著改善用戶體驗。
> - 開發者用它來簡化 Tailwind CSS 的類別合併，因為一鍵遷移功能讓從 clsx 或 tailwind-merge 過渡變得輕鬆。
> - UI 設計師用它來優化設計系統的性能，因為 cnfast 在多次渲染相同組件時能有效減少性能損耗。

## 架構分析

cnfast 採用模組化設計，主要由 TypeScript 實作，並使用 pnpm 作為包管理工具。其架構設計重點在於性能優化，通過緩存機制來減少重複計算，從而提升渲染速度。資料流上，cnfast 會在每次調用時檢查輸入類別，並根據緩存結果進行快速合併，這樣的設計使得在重渲染的情境下能夠顯著降低性能損耗。選擇 TypeScript 使得代碼更具可維護性和可擴展性，但也增加了學習成本。整體而言，cnfast 的設計使其在大型應用中表現優異，但在小型專案中可能無法充分發揮其優勢。

## 技術深入分析

cnfast 的核心技術機制在於其優化的緩存策略，這使得在多次渲染相同類別時能夠顯著提升性能。它使用了 TypeScript 進行開發，這不僅提高了代碼的可讀性，也使得未來的擴展變得更加容易。根據測試數據，cnfast 在 V8 引擎上能達到 8,709 ops/s 的性能，這對於需要頻繁渲染的應用來說是個巨大的優勢。設計上，cnfast 透過緩存重複計算的結果，降低了性能損耗，這在大型應用中尤為明顯。雖然使用 TypeScript 增加了一定的學習曲線，但這也使得代碼在長期維護上更具優勢。未來的擴展可能會集中在進一步減少安裝大小和增強配置靈活性上。整體而言，cnfast 提供了一個高效能的解決方案，特別適合需要高頻渲染的前端應用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手快速上手；文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 性能顯著提升，特別是在重渲染情境下。
> - 簡單的遷移過程，降低了使用門檻。
> - API 相容性高，無需大幅修改現有代碼。

> [!danger] 缺點
> - 安裝大小較大，可能影響初次下載時間。
> - 對於小型專案，性能提升不明顯。
> - 目前社群活躍度較低，解決問題的資源有限。

> [!warning] 注意事項
> - 安裝大小較大，約為 tailwind-merge 的兩倍。
> - 目前不支援自定義 tailwind-merge 配置。
> - 對於小型專案，性能提升不明顯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) | tailwind-merge 使用傳統的合併方式，性能較低，特別是在重渲染時，cnfast 提供更快的速度和更好的性能。 |
| [lukeed/clsx](https://github.com/lukeed/clsx) | clsx 主要用於類別合併，但在性能上不如 cnfast，特別是在大型應用中。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) | tailwind-merge 使用傳統的合併方式，性能較低，特別是在重渲染時。 | 如果你的專案不需要高頻渲染，tailwind-merge 可能已經足夠。 | low，因為兩者 API 相似。 |
| [lukeed/clsx](https://github.com/lukeed/clsx) | clsx 主要用於類別合併，但在性能上不如 cnfast，特別是在大型應用中。 | 如果你的專案需要簡單的類別合併，clsx 是個不錯的選擇。 | medium，因為需要重構部分代碼。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cnfast** | **tailwind-merge** | **clsx** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | tailwind-merge 使用傳統的合併方式，性能較低，特別是在重渲染時。 | clsx 主要用於類別合併，但在性能上不如 cnfast，特別是在大型應用中。 |
> | 遷移成本 | - | low，因為兩者 API 相似。 | medium，因為需要重構部分代碼。 |
> | 適用場景 | 主要場景 | 如果你的專案不需要高頻渲染，tailwind-merge 可 | 如果你的專案需要簡單的類別合併，clsx 是個不錯的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝大小過大，可能影響初次下載時間
  - 解法：考慮使用更小的替代方案，如 tailwind-merge
- [MEDIUM] 對於小型專案，性能提升不明顯
  - 解法：在小型專案中使用 clsx 可能更合適
- [MEDIUM] 社群活躍度低，解決問題的資源有限
  - 解法：參考官方文檔和 GitHub Issues 尋找解決方案

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型前端應用，需頻繁渲染的資料表 | 非常適合 | cnfast 在重渲染時性能優越，能顯著提升用戶體驗。 |
| 小型專案，偶爾更新的靜態頁面 | 不適合 | 性能提升不明顯，使用 clsx 更為合適。 |
| 需要快速遷移現有 Tailwind 專案 | 適合 | 提供一鍵遷移功能，簡化過渡過程。 |
| 需要高性能的 UI 設計系統 | 非常適合 | cnfast 的性能優化設計能滿足高效能需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的性能提升，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：cnfast 本身不需要高權限，且不存取敏感資料，依賴鏈信任程度高，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

cnfast 通常與 Tailwind CSS 一起使用，作為類別合併的工具。在一個使用 Next.js 的專案中，開發者可以將 cnfast 作為類別合併的解決方案，具體做法是將 `cn` 替換為 `cnfast`。它與主流的 CI 工具（如 GitHub Actions）相容，並且可以輕鬆整合到現有的開發流程中。整合的摩擦點主要在於安裝大小和配置的靈活性，這可能需要一些額外的調整。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 cnfast 出現之前，開發者主要依賴 clsx 和 tailwind-merge 來處理 Tailwind CSS 的類別合併，但這些工具在性能上存在瓶頸。隨著前端應用對性能的需求不斷上升，cnfast 的出現正好填補了這一空白。這個工具代表了前端性能優化的趨勢，未來可能會有更多類似的解決方案出現。

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
| Open Issues | 9 |
| Issue 解決率 | 10% (1 closed) |
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

**社群活躍度**：社群活躍度中等，最近有更新，但開放問題解決率低。
**連結**：[文件](https://npmjs.com/package/cnfast)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-22）
> **活躍天數** 1 天 · **最新 commit** fix: bound conflict-key registry to prevent unbounded memory growth

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/aidenybai/cnfast/issues/5) | Big install size (2x of tailwind-merge + clsx) | 45 | 0 |
> | [#6](https://github.com/aidenybai/cnfast/issues/6) | Support for custom tailwind-merge configuration | 15 | 1 |
> | [#8](https://github.com/aidenybai/cnfast/issues/8) | Expose config extension (custom classGroups) for projects wi | 4 | 1 |
> | [#12](https://github.com/aidenybai/cnfast/issues/12) | Is it compatible with UnoCSS? | 0 | 0 |

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

相關概念：[[性能優化]] · [[CSS-in-JS]] · [[前端框架]]

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
> const concepts = ["性能優化","CSS-in-JS","前端框架"];
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
