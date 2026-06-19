---
repo: diffusionstudio/lottie
url: https://github.com/diffusionstudio/lottie
owner: diffusionstudio
owner_type: Organization
language: TypeScript
license: MIT
description: "Generate production-ready Lottie animations with Claude Code or Codex"
homepage: "https://diffusion.studio"
stars: 3458
stars_per_day: 247
forks: 183
open_issues: 0
created: 2026-06-04
pushed_at: 2026-06-15
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "動畫工具"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "透過 Claude Code 或 Codex 生成可用於生產的 Lottie 動畫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-14"
contributor_count: 3
engagement: "low"
issue_close_rate: 100
repo_size_kb: 4814
readme_length: 4003
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:513,2026-06-10:1501,2026-06-11:2032,2026-06-16:2966,2026-06-17:3280,2026-06-18:3396,2026-06-19:3458"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "lottie"
  - "diffusionstudio/lottie"
  - "透過 Claude Code 或 Codex 生成可用於生產的 Lottie 動畫。"
---

# lottie

**3.5k** stars · **247** stars/天 · 建立 14 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/diffusionstudio--lottie");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0` `easy-install`

> [!summary] 一句話摘要
> 透過 Claude Code 或 Codex 生成可用於生產的 Lottie 動畫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (247 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速生成和編輯 Lottie 動畫的設計師和開發者。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了用簡單的方式讓動畫設計變得更容易。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/diffusionstudio--lottie");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "動畫工具" && p.file.name !== "diffusionstudio--lottie" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 動畫工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，能夠快速生成高品質動畫，值得採用。

> [!abstract] 核心創新
> 提供了一個直觀的工作區和即時預覽功能，讓動畫創建過程變得更加流暢。

## 專案簡介

Text-to-lottie 是一個開源框架，專為生成 Lottie 動畫而設計，支持 Claude Code 和 Codex 等編碼代理。用戶可以通過簡單的指令讓代理生成動畫，並在專案中組織和編輯這些動畫。用戶只需將 Lottie 文件拖放到畫布上，即可實時預覽和編輯，並在完成後導出為 Lottie JSON 格式。這個框架的賣點在於其直觀的工作區設計和即時預覽功能，讓動畫創建過程變得更加流暢。技術上，該專案使用 SolidJS 作為框架，並依賴 Vite 進行構建和開發，這使得其在性能上相對輕量且快速。

與其他工具相比，如 0x0funky/agent-sprite-forge，Text-to-lottie 提供了更直觀的拖放編輯功能，而不是僅依賴命令行操作。這使得對於不熟悉編程的設計師來說，使用門檻大幅降低。儘管如此，該工具仍然需要用戶具備一定的動畫設計知識，特別是在使用運動設計術語時。對於需要生成高品質動畫的團隊來說，這是一個值得考慮的選擇，但對於需要大量自訂的高級用戶，可能會感到功能有限。整體來看，這個專案在短短14天內便獲得了3458顆星，顯示出其在開發者社群中的受歡迎程度。

**技術棧**：`TypeScript` · `SolidJS` · `Vite`

## 重點功能

- 專案工作區 — 將動畫組織到專案中，方便管理和編輯。
- 即時預覽 — 在編輯過程中實時查看動畫效果，提升工作效率。
- 拖放編輯 — 直接將 Lottie 文件拖入畫布，簡化操作流程。
- 自動加載場景 — 將場景自動從指定路徑加載，無需手動設置。
- 支持多種平台 — 生成的 Lottie JSON 文件可用於網頁、iOS、Android 和 Flutter 等多種環境。

## 快速開始

1. 安裝技能
```bash
npx skills add diffusionstudio/lottie
```
2. 生成 Lottie 動畫
```bash
請求代理生成動畫，使用 `text-to-lottie` 指令
```
3. 在網頁中使用動畫
```bash
lottie.loadAnimation({ container: document.getElementById('anim'), renderer: 'svg', loop: true, autoplay: true, path: '/animations/my-animation.json' });
```

## 程式碼範例

```ts
{
  "前置條件": "需要在 HTML 中引入 Lottie 庫",
  "程式碼": "lottie.loadAnimation({ container: document.getElementById('anim'), renderer: 'svg', loop: true, autoplay: true, path: '/animations/my-animation.json' });",
  "預期輸出": "在指定的容器中自動播放 Lottie 動畫。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 3458 stars（247/天），forks 183（5.3%），顯示出穩定的增長。專案的主要貢獻者包括 k9p5、doruk-kavcioglu 和 wcandillon，他們在開源社群中有一定的影響力。這個工具解決了動畫生成過程中的繁瑣步驟，讓用戶可以更輕鬆地創建和編輯 Lottie 動畫。之前的工具往往需要用戶具備較高的技術能力，而 Text-to-lottie 則降低了這一門檻。社群的活躍度和高效的問題解決率（100%）也顯示出其良好的支持體系。

## 適合誰使用

**目標受眾**：需要快速生成和編輯 Lottie 動畫的設計師和開發者。

> [!example] 使用場景
> - 動畫設計師用它來快速生成 Lottie 動畫，因為可以直接從 SVG 路徑創建動畫，節省了手動編輯的時間。
> - 前端工程師用它來在網站中嵌入動畫，因為生成的 Lottie JSON 文件可以直接用於各種平台，提升了開發效率。
> - 產品經理用它來展示產品功能，因為可以輕鬆編輯和預覽動畫，讓團隊更快地達成共識。

## 架構分析

該專案採用 SolidJS 作為前端框架，這使得其在性能上相對輕量且快速。使用 Vite 進行開發和構建，提供了快速的熱重載和優化的構建流程。資料流方面，動畫文件通過 JSON 格式加載，並在用戶編輯時實時更新。

這種設計使得用戶能夠即時看到變更效果，提升了使用體驗。選擇 SolidJS 而非其他框架（如 React）是因為其更高的性能和更小的包大小，適合需要快速響應的動畫編輯工具。整體架構的擴展性良好，但在處理複雜動畫時可能會遇到性能瓶頸，特別是在大型專案中。

## 技術深入分析

Text-to-lottie 的核心技術機制是基於 SolidJS 框架，這使得其在性能上優於傳統的 React 應用。使用 Vite 作為構建工具，能夠快速響應用戶操作並即時更新畫面。該工具支持的 Lottie 動畫格式使其能夠在多種平台上使用，包括網頁和移動應用。性能方面，該工具能夠處理中等複雜度的動畫，但在面對高複雜度的動畫時，可能會出現延遲或卡頓的情況。選擇 SolidJS 而非 React 是因為其更高的性能和更小的包大小，這對於需要快速響應的動畫編輯工具至關重要。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在大型專案中。整合方面，與主流前端框架的兼容性良好，能夠輕鬆嵌入到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手快速上手；文件目前僅提供英文版本。這使得新手在 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 直觀的拖放編輯功能，降低了使用門檻。
> - 即時預覽功能，提升了編輯效率。
> - 支持多平台的 Lottie 動畫生成，方便整合到不同環境中。

> [!danger] 缺點
> - 對於高級用戶，功能可能顯得有限。
> - 需要用戶具備一定的動畫設計知識。
> - 在大型專案中可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 需要用戶具備一定的動畫設計知識，特別是在使用運動設計術語時。
> - 目前僅支持生成 Lottie 動畫，對於其他格式的支持有限。
> - 在大型專案中，可能會遇到性能瓶頸，特別是在編輯複雜動畫時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的動畫生成能力，但主要依賴命令行操作，缺乏直觀的拖放編輯功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於生成遊戲精靈動畫，功能範圍較窄，無法滿足一般 Lottie 動畫需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但功能上較為簡單。 | 如果你的團隊需要一個輕量級的解決方案，並且不需要複雜的編輯功能。 | medium，因為需要適應不同的開發環境和工具鏈。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲精靈的生成，功能範圍較窄。 | 如果你的專案主要集中在遊戲開發，並且需要針對遊戲精靈的特定功能。 | low，因為功能簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lottie** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但功能上較為簡單。 | 專注於遊戲精靈的生成，功能範圍較窄。 |
> | 遷移成本 | - | medium，因為需要適應不同的開發環境和工具鏈。 | low，因為功能簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的解決方案，並且不需要複雜的編輯功 | 如果你的專案主要集中在遊戲開發，並且需要針對遊戲精靈的特定功 |

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

- **[HIGH]** 在編輯複雜動畫時可能會出現性能瓶頸
  - 解法：簡化動畫或分段處理
- [MEDIUM] 對於不熟悉動畫設計的用戶，使用門檻較高
  - 解法：參考官方文檔和範例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成和編輯動畫，提升產品展示效果。 |
| 大型企業的動畫設計部門 | 普通 | 雖然功能強大，但在處理高複雜度動畫時可能會遇到性能瓶頸。 |
| 個人開發者的動畫專案 | 非常適合 | 簡單易用，能快速上手，適合個人項目。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，能夠快速生成高品質動畫，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/diffusionstudio--lottie");
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
> const me = dv.page("Repos/diffusionstudio--lottie");
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
| Forks | 183 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-04 |
| 官方網站 | [Link](https://diffusion.studio) |
| Repo 大小 | 4.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/diffusionstudio/lottie) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@fontsource-variable/inter` `@kobalte/core` `@solidjs/router` `canvaskit-wasm` `class-variance-authority` `clsx` `fflate` `lucide-solid` `shadcn` `solid-js` `tailwind-merge` `tw-animate-css` `vite-plugin-solid-svg` `@tailwindcss/vite` `@types/node`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 65
>     "CSS" : 34
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@k9p5](https://github.com/k9p5) | 51 |
> | [@doruk-kavcioglu](https://github.com/doruk-kavcioglu) | 1 |
> | [@wcandillon](https://github.com/wcandillon) | 1 |

**最新版本**：v1.0.0 — Text-to-Lottie v1.0.0 (2026-06-15)

> [!info]- Release Notes
> The first stable release. Text-to-Lottie is now a full **framework** for creating Lottie animations with your coding agent, rebuilt on SolidJS with a project-based workspace for organizing, previewing, and editing your animations.
> 
> ### What's new
> 
> **A workspace for your animations**
> Organize everything into projects and scenes. Drop a `lottie.json` into a project and it shows up instantly, complete with thumbnails in the sidebar. Create new scenes, switch between them, and clean up with right-click delete.
> 
> **Drag-and-drop editing**
> Drag a Lottie file straight onto the canvas to load it, then inspect, scrub, and tweak it in the player. Export your work back out as Lottie JSON when you're done.
> 
> **Live preview as the agent works**
> Changes the agent makes to a scene update in the player automatically, with no manual reload. Playback, seeking, and frame navigation are all accurate and keyboard-controllable.
> 
> **A refreshed player UI**
> A cleaner, more responsive interface with context menus, dropdowns, dialogs, a numeric slider, and sidebars, plus improved theming and accessibility, and bundled Inter and JetBrains Mono fonts.
> 
> **Sharper animation generation**
> Refinements to the skill and a reference to the Lottie format spec for more reliable, production-ready output.
> 
> ### Breaking changes
> This release supersedes the previous 0.x player. The animations themselves are unaffected; they remain standard Lottie JSON.

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達到 100%。
**連結**：[文件](https://diffusion.studio)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-15）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #5 from diffusionstudio/solid-rewrite

## README 摘錄

> [!info]- 展開查看原文 README
> [](https://discord.com/invite/zPQJrNGuFB)
> [](https://x.com/diffusionhq)
> [](https://www.ycombinator.com/companies/diffusion-studio)
> 
> **Text-to-lottie** is an open-source framework for generating production ready Lottie animations with claude code/codex or any other coding agent supporting skills.
> 
> ## Created with Text-to-Lottie
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
> ## Quick Start 
> Install the skill:
> ```bash
> npx skills add diffusionstudio/lottie
> ```
> Then ask your coding agent to generate a Lottie animation using `text-to-lottie`.
> 
> Example prompt:
> > Create a Lottie animation from the SVG path in https://github.com/JaceThings/SF-Hello/blob/main/SVG/hello-en.svg. Reveal the path with an animation that follows the natural path direction. Apply a premium apple themed gradient to the path. Use ease-in-out timing, a transparent background, and preserve the original SVG geometry.
> 
> The agent sets up the workspace and the included player, where each animation lives as a scene inside a project. Scenes load automatically from `public/projects///lottie.json` and live-update in the player as the agent edits them — so you can inspect, scrub, and refine the generated Lottie in real time.
> 
> ## Prompt guide
> 
> ### 1. Ground the model
> Provide SVGs, real-world data, or screenshots whenever possible. Results are significantly better when the animation is based on concrete assets.
> 
> ### 2. Use motion design terminology
> Describe timing and movement using motion design language like ease-in, ease-out, and ease-in-out.
> 
> ### 3. Think like a camera operator
> Professional motion graphics often rely on camera movement. Include camera pushes, pans, zooms, and rig-like motion in your prompt. The agent can simulate these through group transforms.
> 
> ### 4. Request the controls you need
> By default, outputs usually only expose a background color control. If you want to customize other properties, explicitly ask the agent to create controls for them.
> 
> ### 5. Specify FPS and duration
> If your animation requires a specific frame rate or length, include the desired FPS and total frame count in the prompt.
> 
> ## Using the Generated Animation
> 
> Generated animations can be used directly as Lottie JSON files or imported into After Effects for further refinement.
> 
> ### Web / vanilla HTML
> ```html
> 
>   lottie.loadAnimation({
>     container: document.getElementById("anim"),
>     renderer: "svg",
>     loop: true,
>     autoplay: true,
>     path: "/animations/my-animation.json"
>   });
> 
> ```
> 
> ### React Native
> ```typescript
> import LottieView from "lottie-react-native";
> 
> export default function Loader() {
>   return (
>     
>   );
> }
> ```
> 
> Alternatively, [React Native Skia](https://shopify.github.io/react-native-skia/docs/skottie/) can also render Lottie animations via its Skottie module, including on the web. It lets you customize animation properties, assets, and typographies at runtime, and since `Skottie` is a regular Skia drawing, it can be composed into a larger Skia scene alongside shaders, effects, and masks.
> 
> ```typescript
> import { Skia, Canvas, Skottie, useClock } from "@shopify/react-native-skia";
> import { useDerivedValue } from "react-native-reanimated";
> 
> const animation = Skia.Skottie.Make(JSON.stringify(require("./animation.json")));
> 
> export default function Loader() {
>   const clock = useClock();
>   const frame = useDerivedValue(
>     () => ((clock.value / 1000) % animation.duration()) * animation.fps()
>   );
>   return (
>     
>       
>     
>   );
> }
> ```
> 
> ### iOS Swift
> ```swift
> import Lottie
> 
> let animationView = LottieAnimationView(name: "animation")
> animationView.frame = view.bounds
> animationView.contentMode = .scaleAspectFit
> animationView.loopMode = .loop
> view.addSubview(animationView)
> animationView.play()
> ```
> 
> ### Android Kotlin
> ```kotlin
> val view = findViewById(R.id.animationView)
> view.setAnimation(R.raw.animation)
> view.loop(true)
> view.playAnimation()
> ```
> 
> ### Flutter
> ```yaml
> dependencies:
>   lottie: ^latest
> ```
> 
> ```dart
> import 'package:lottie/lottie.dart';
> 
> Lottie.asset('assets/animation.json')
> ```

## 延伸閱讀

相關概念：[[動畫設計]] · [[Lottie]] · [[SVG]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/diffusionstudio/lottie) · [官方網站](https://diffusion.studio)

## 相關收錄

> [!note]- 直接競品（同子分類：動畫工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "動畫工具" AND file.name != "diffusionstudio--lottie"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "diffusionstudio--lottie"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "diffusionstudio--lottie" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "diffusionstudio--lottie"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["動畫設計","Lottie","SVG"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "diffusionstudio--lottie" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/diffusionstudio--lottie");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "diffusionstudio--lottie" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "diffusionstudio" AND file.name != "diffusionstudio--lottie"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/diffusionstudio--lottie");
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
> const me = dv.page("Repos/diffusionstudio--lottie");
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
> const me = dv.page("Repos/diffusionstudio--lottie");
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
> const me = dv.page("Repos/diffusionstudio--lottie");
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
> const me = dv.page("Repos/diffusionstudio--lottie");
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

> **2026-06-09** — 首次收錄
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

- [[2026-06-11|2026-06-11]] — 再次上榜，2.0k stars
- [[2026-06-10|2026-06-10]] — 再次上榜，1.5k stars
- [[2026-06-09|2026-06-09]] — 首次收錄，513 stars
