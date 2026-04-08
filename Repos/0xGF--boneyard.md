---
repo: 0xGF/boneyard
url: https://github.com/0xGF/boneyard
owner: 0xGF
owner_type: User
language: TypeScript
license: MIT
description: "Auto generated skeleton loading framework"
homepage: "https://boneyard.vercel.app/"
stars: 3525
stars_per_day: 588
forks: 121
open_issues: 1
created: 2026-04-01
pushed_at: 2026-04-07
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.6.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "自動生成的骨架加載框架，無需手動測量，完美呈現 UI 加載效果。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "low"
issue_close_rate: 90
repo_size_kb: 863
readme_length: 3318
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:3525"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "boneyard"
  - "0xGF/boneyard"
  - "自動生成的骨架加載框架，無需手動測量，完美呈現 UI 加載效果。"
---

# boneyard

**3.5k** stars · **588** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/0xGF--boneyard");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.6.5` `easy-install`

> [!summary] 一句話摘要
> 自動生成的骨架加載框架，無需手動測量，完美呈現 UI 加載效果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (588 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成高效骨架加載畫面的前端開發者，尤其是使用 React、Svelte 或 React Native 的團隊。
> **一句話重點** boneyard 的自動化骨架生成能力，讓開發者能夠專注於功能開發，而不是 UI 加載效果的調整。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/0xGF--boneyard");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "0xGF--boneyard" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到自動化骨架生成的效果，值得嘗試。

> [!abstract] 核心創新
> 無需手動測量，透過自動化工具生成精確的骨架加載畫面。

## 專案簡介

boneyard 是一個專為 React、Svelte 5 和 React Native 設計的骨架加載框架，透過 CLI 工具自動捕捉 UI 的佈局，生成精確的加載畫面。用戶只需安裝 `boneyard-js`，然後透過 `npx boneyard-js build` 指令來生成骨架，無需手動調整。這個工具的賣點在於其無縫的跨平台支持，無論是 Web 還是原生應用，都能自動捕捉佈局並生成 `.bones.json` 格式的數據，確保一致性。技術上，boneyard 使用 headless 瀏覽器來訪問應用，並在多個斷點下捕捉佈局，這樣的設計使得開發者能夠快速生成高效的加載效果。

CLI 提供了多種選項，如 `--native` 來支持 React Native，並且可以自定義斷點和輸出路徑，這些都使得使用者能夠靈活地適應不同的需求。與其他工具相比，如 AlpinDale/parsync，boneyard 提供了更為簡單的自動化流程，無需手動設置佈局參數，並且支持即時熱重載。使用者在實際操作中，可能會遇到需要調整配置文件的情況，這可能會影響到生成的骨架效果。這個專案目前處於穩定階段，適合中小型團隊快速導入，未來可能會增加更多的適配器和功能擴展。

**技術棧**：`TypeScript` · `JavaScript` · `Vue` · `Svelte` · `CSS`

## 重點功能

- 自動捕捉 UI 佈局 — 使用 headless 瀏覽器自動生成骨架，無需手動測量。
- 跨平台支持 — 同時支持 Web 和 React Native，生成相同格式的骨架數據。
- CLI 工具 — 提供多種指令選項，如 `--native` 和自定義斷點。
- 即時熱重載 — `--watch` 標誌可在應用變更時自動更新骨架。
- 配置文件支持 — 可通過 `boneyard.config.json` 自定義骨架生成參數。

## 快速開始

1. 安裝 boneyard-js
```bash
npm install boneyard-js
```
2. 生成骨架
```bash
npx boneyard-js build
```
3. 在應用入口處添加註冊
```bash
import './bones/registry'
```

## 程式碼範例

```ts
{
  "前置條件": "安裝 boneyard-js",
  "指令": "npx boneyard-js build",
  "預期輸出": "生成骨架數據，存儲為 .bones.json 格式"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 3525 stars（588/天），forks 121（3.4%），顯示出強勁的增長潛力。作者 0xGF 及其團隊在開源社群中有一定的影響力，之前也有過成功的專案。這個工具解決了開發者在創建骨架加載畫面時的繁瑣手動測量問題，提供了一個自動化的解決方案。近期的推廣和社群討論也可能促進了它的曝光率。技術上，隨著前端框架如 React 和 Svelte 的普及，對於高效加載效果的需求日益增加，這使得 boneyard 的市場需求上升。forks/stars 比率為 3.4%，顯示出使用者對於這個工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速生成高效骨架加載畫面的前端開發者，尤其是使用 React、Svelte 或 React Native 的團隊。

> [!example] 使用場景
> - 前端工程師用它來自動生成 React 應用的骨架加載畫面，因為手動設置佈局繁瑣且容易出錯。
> - Svelte 開發者用它來捕捉應用的 UI 佈局，並生成對應的骨架，因為這樣可以節省大量的測試時間。
> - 移動端開發者用它來快速生成 React Native 的骨架加載效果，因為這樣可以提高用戶體驗，減少加載時間的感知。

## 架構分析

boneyard 採用 monorepo 架構，將不同的適配器和應用組件分開管理，這樣的設計使得各個部分可以獨立開發和維護。CLI 工具是整個系統的核心，負責自動捕捉 UI 佈局並生成骨架數據。資料流方面，CLI 透過 headless 瀏覽器訪問應用，並在多個斷點下捕捉佈局，這樣的設計使得生成的骨架能夠適應不同的設備和螢幕尺寸。選擇 monorepo 的代價在於可能會增加依賴管理的複雜性，但這樣的架構使得團隊能夠更靈活地擴展功能。擴展性方面，隨著更多框架的支持，未來可能會增加更多的適配器和功能。

## 技術深入分析

boneyard 的核心技術機制是透過 CLI 工具自動捕捉 UI 佈局，使用 headless 瀏覽器來訪問應用並生成骨架數據。這樣的設計使得開發者能夠快速生成高效的加載效果，並且支持多個前端框架。效能方面，CLI 工具在捕捉佈局時會考慮多個斷點，這樣可以保證生成的骨架在不同設備上的一致性。設計上選擇了 monorepo 架構，這樣可以讓各個適配器和應用組件獨立開發，降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在大型應用中。整合方面，boneyard 與主流的前端框架如 React 和 Svelte 的整合非常友好，使用者只需簡單的指令即可完成設置。整體來說，boneyard 提供了一個高效的解決方案，能夠在快速開發中提升用戶體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用範例；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 自動化生成骨架，節省開發時間。
> - 跨平台支持，適用於多種前端框架。
> - CLI 工具易於使用，提供多種自定義選項。

> [!danger] 缺點
> - 目前僅支持特定的前端框架，限制了使用範圍。
> - 在某些情況下，生成的骨架可能需要手動調整。
> - 需要 Node.js 環境，對於某些開發者來說可能增加了門檻。

> [!warning] 注意事項
> - 僅支持 React、Svelte 5 和 React Native。
> - 需要 Node.js 環境來運行 CLI 工具。
> - 在某些情況下，可能需要手動調整生成的骨架以適應特定樣式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的自動化骨架生成，但不支持 React Native，僅限於 Web 應用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於 UI 渲染性能優化，與 boneyard 的骨架生成有不同的技術路線。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和資源管理，與 boneyard 的骨架生成無直接關聯。 | 如果你的需求主要是文件同步而非 UI 加載效果，則應選擇它。 | low，因為兩者的功能範疇不同，無需直接遷移。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於 UI 渲染性能優化，與 boneyard 的骨架生成有不同的技術路線。 | 如果你的專案需要更深入的 UI 性能優化，則應考慮使用它。 | medium，因為需要重新考慮 UI 渲染策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **boneyard** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和資源管理，與 boneyard 的骨架生成無直接關聯。 | 專注於 UI 渲染性能優化，與 boneyard 的骨架生成有不同的技術路線。 |
> | 遷移成本 | - | low，因為兩者的功能範疇不同，無需直接遷移。 | medium，因為需要重新考慮 UI 渲染策略。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非 UI 加載效果，則應選擇它。 | 如果你的專案需要更深入的 UI 性能優化，則應考慮使用它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些瀏覽器中，headless 模式可能無法正常工作。
  - 解法：使用支持的瀏覽器進行測試。
- [MEDIUM] 生成的骨架在某些情況下可能不符合預期。
  - 解法：手動調整配置文件以適應特定樣式。
- [MEDIUM] CLI 工具在大型應用中可能會有性能瓶頸。
  - 解法：考慮將應用拆分為多個小型模組。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司前端開發 | 非常適合 | 自動化生成骨架能夠節省大量開發時間。 |
| 大型企業的核心應用開發 | 不適合 | 目前處於 beta 階段，穩定性尚待提高。 |
| 需要快速原型開發的小型專案 | 適合 | 能夠快速生成 UI 加載效果，提升開發效率。 |
| 需要高性能 UI 渲染的應用 | 普通 | 雖然提供骨架生成，但性能優化方面仍需考量。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到自動化骨架生成的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時不會對系統造成安全威脅。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

boneyard 最常與 React、Svelte 和 React Native 搭配使用，作為前端開發中的骨架加載解決方案。在一個使用 Next.js 的專案中，你可以通過 `npx boneyard-js build` 指令來生成骨架，並在應用中引用。支持的 CI 工具包括 GitHub Actions，並且與 VS Code 有良好的整合。最常見的整合問題是 CLI 工具的配置，可能需要根據專案需求進行調整。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 boneyard 出現之前，開發者通常需要手動設置骨架加載效果，這導致了大量的重複工作和潛在的錯誤。隨著前端框架的進步，對於自動化工具的需求愈加迫切。boneyard 的出現正好填補了這一空白，提供了一種高效的解決方案，未來可能會隨著更多框架的支持而進一步擴展。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/0xGF--boneyard");
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
> const me = dv.page("Repos/0xGF--boneyard");
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
| Forks | 121 |
| Open Issues | 1 |
| Issue 解決率 | 90% (9 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-01 |
| 官方網站 | [Link](https://boneyard.vercel.app/) |
| Repo 大小 | 863 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/0xGF/boneyard) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 89
>     "JavaScript" : 8
>     "Vue" : 1
>     "Svelte" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@0xGF](https://github.com/0xGF) | 50 |
> | [@JanoTheDev](https://github.com/JanoTheDev) | 22 |
> | [@claude](https://github.com/claude) | 19 |
> | [@Minterl](https://github.com/Minterl) | 8 |
> | [@Jboltle](https://github.com/Jboltle) | 1 |

**最新版本**：v1.6.5 (2026-04-07)

> [!info]- Release Notes
> ## What's new
> 
> ### Angular adapter
> New `boneyard-js/angular` export with a standalone Angular 14+ component. OnPush change detection, dark mode auto-detection, content projection with `[fixture]` and `[fallback]` selectors, and `configureBoneyard()` for global defaults.
> 
> ### Watch mode
> `--watch` flag keeps the browser open and re-captures skeletons when your app changes. Listens for HMR events from Vite, Next.js, and Webpack.
> 
> ### Filesystem route scanning
> The CLI now scans route folders to discover pages not linked in navigation. Supports Next.js (App + Pages Router), SvelteKit, Nuxt, and Remix. Use `--no-scan` to opt out.
> 
> ### Table skeletons
> Removed `tr` from default leaf tags — table skeletons now render per-cell instead of per-row.
> 
> ### Svelte 5 attachments
> Refactored Svelte adapter to use `{@attach}` directives instead of `onMount`. Added shimmer/solid animation modes and `configureBoneyard()`. Requires Svelte >= 5.29.
> 
> ### Bun env file support
> `--env-file` flag loads environment variables from a file, useful for Bun runtime where env vars aren't inherited by subprocesses.
> 
> ### Framework auto-detection
> The CLI reads your `package.json` to detect Vue, Svelte, Angular, or React and generates the correct registry imports automatically.
> 
> ### Bug fixes
> - Fixed `initialBones` not rendering on first frame in React (waited for ResizeObserver unnecessarily)
> - Fixed Vue registry importing `registerBones` from `boneyard-js/react` instead of the detected framework
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，已解決 90% 的開放問題。
**連結**：[文件](https://boneyard.vercel.app/overview)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-07）
> **活躍天數** 1 天 · **最新 commit** Bump version to v1.6.7

## README 摘錄

> [!info]- 展開查看原文 README
> # boneyard
> 
> Pixel-perfect skeleton loading screens, extracted from your real UI. No manual measurement, no hand-tuned placeholders.
> 
> Works with **React**, **Svelte 5**, and **React Native**.
> 
> ## Quick start
> 
> ```bash
> npm install boneyard-js
> ```
> 
> ### React
> 
> ```tsx
> import { Skeleton } from 'boneyard-js/react'
> 
> function BlogPage() {
>   const { data, isLoading } = useFetch('/api/post')
>   return (
>     
>       {data && }
>     
>   )
> }
> ```
> 
> ```bash
> npx boneyard-js build
> ```
> 
> ```ts
> // Add once in your app entry
> import './bones/registry'
> ```
> 
> ### Svelte 5
> 
> ```svelte
> 
>   import Skeleton from 'boneyard-js/svelte'
>   import '../bones/registry'
>   let loading = true
> 
>   
> 
> ```
> 
> ```bash
> npx boneyard-js build
> ```
> 
> ### React Native
> 
> ```tsx
> import { Skeleton } from 'boneyard-js/native'
> 
>   
> 
> ```
> 
> ```bash
> npx boneyard-js build --native --out ./bones
> # Open your app on device — bones capture automatically
> ```
> 
> ```ts
> // Add once in your app entry, then reload
> import './bones/registry'
> ```
> 
> No browser needed. The `--native` flag scans the actual native layout on your device via the React fiber tree.
> 
> ## How it works
> 
> **Web (React / Svelte):** The CLI opens a headless browser, visits your app, finds every ``, and snapshots their layout at multiple breakpoints.
> 
> **React Native:** The `` component auto-scans in dev mode when the CLI is running. It walks the fiber tree, measures views via `UIManager`, and sends bone data to the CLI. Zero overhead in production.
> 
> Both output the same `.bones.json` format — cross-platform compatible.
> 
> ## CLI
> 
> ```bash
> npx boneyard-js build                              # auto-detect dev server
> npx boneyard-js build http://localhost:3000         # explicit URL
> npx boneyard-js build --native --out ./bones        # React Native
> npx boneyard-js build --breakpoints 390,820,1440    # custom breakpoints
> npx boneyard-js build --force                       # skip incremental cache
> ```
> 
> ## Props
> 
> | Prop | Type | Default | Description |
> |------|------|---------|-------------|
> | `loading` | boolean | — | Show skeleton or real content |
> | `name` | string | — | Unique name (generates `name.bones.json`) |
> | `color` | string | `rgba(0,0,0,0.08)` | Bone fill color |
> | `darkColor` | string | `rgba(255,255,255,0.06)` | Bone color in dark mode |
> | `animate` | `'pulse'` \| `'shimmer'` \| `'solid'` | `'pulse'` | Animation style |
> | `fixture` | ReactNode / Snippet | — | Mock content for CLI capture (dev only) |
> | `initialBones` | ResponsiveBones | — | Pass bones directly (overrides registry) |
> | `fallback` | ReactNode / Snippet | — | Shown when loading but no bones available |
> 
> ## Config file
> 
> ```json
> {
>   "breakpoints": [375, 768, 1280],
>   "out": "./src/bones",
>   "wait": 800,
>   "color": "#e5e5e5",
>   "animate": "pulse"
> }
> ```
> 
> Save as `boneyard.config.json`. Per-component props override config values.
> 
> ## Package exports
> 
> | Import | Use |
> |--------|-----|
> | `boneyard-js` | `snapshotBones`, `renderBones`, `computeLayout` |
> | `boneyard-js/react` | React `` |
> | `boneyard-js/native` | React Native `` |
> | `boneyard-js/svelte` | Svelte `` |
> 
> ## Links
> 
> - [Docs](https://boneyard.vercel.app/overview)
> - [npm](https://www.npmjs.com/package/boneyard-js)
> - [Twitter](https://x.com/0xGoodfuture/status/2039818750568878245)
> 
> ## Star History
> 
> [](https://star-history.com/#0xGF/boneyard&Date)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[前端框架]] · [[UI 渲染]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/0xGF/boneyard) · [官方網站](https://boneyard.vercel.app/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "0xGF--boneyard"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "0xGF--boneyard"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "0xGF--boneyard" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "0xGF--boneyard"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","前端框架","UI 渲染"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "0xGF--boneyard" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/0xGF--boneyard");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "0xGF--boneyard" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "0xGF" AND file.name != "0xGF--boneyard"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/0xGF--boneyard");
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
> const me = dv.page("Repos/0xGF--boneyard");
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
> const me = dv.page("Repos/0xGF--boneyard");
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
> const me = dv.page("Repos/0xGF--boneyard");
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
> const me = dv.page("Repos/0xGF--boneyard");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，3.5k stars
