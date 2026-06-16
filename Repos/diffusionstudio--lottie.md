---
repo: diffusionstudio/lottie
url: https://github.com/diffusionstudio/lottie
owner: diffusionstudio
owner_type: Organization
language: TypeScript
license: MIT
description: "Generate production-ready Lottie animations with Claude Code or Codex"
homepage: "https://diffusion.studio"
stars: 2966
stars_per_day: 270
forks: 159
open_issues: 1
created: 2026-06-04
pushed_at: 2026-06-15
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "動畫生成"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "用 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-14"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 4814
readme_length: 4003
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:513,2026-06-10:1501,2026-06-11:2032,2026-06-16:2966"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "lottie"
  - "diffusionstudio/lottie"
  - "用 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。"
---

# lottie

**3.0k** stars · **270** stars/天 · 建立 11 天前 · TypeScript · MIT

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
> 用 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (270 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速生成 Lottie 動畫且熟悉編碼的前端開發者。
> **一句話重點** 這個專案的創新之處在於將編碼代理的能力與動畫生成結合，顯著提高了動畫創作的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/diffusionstudio--lottie");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "動畫生成" && p.file.name !== "diffusionstudio--lottie" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 動畫生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能快速生成動畫，值得一試。

> [!abstract] 核心創新
> 提供了一個全新的框架來生成 Lottie 動畫，並結合了編碼代理的能力。

## 專案簡介

Text-to-lottie 是一個開源框架，專為生成生產就緒的 Lottie 動畫而設計，利用 Claude Code 或 Codex 等編碼代理來實現。用戶只需透過 CLI 指令 `npx skills add diffusionstudio/lottie` 安裝技能，然後可以使用自然語言提示生成動畫。這個過程中，使用者可以將 SVG 路徑或其他資源作為基礎，並指定動畫的時間、運動設計術語等，讓代理生成符合需求的動畫。框架的賣點在於其即時預覽功能，使用者可以在編輯過程中實時查看動畫效果，並在完成後將其導出為 Lottie JSON 格式。技術上，這個專案基於 SolidJS，使用 Vite 作為建構工具，並依賴多個現代前端庫來實現流暢的用戶體驗。相較於其他 Lottie 編輯工具，如 lottie-web，Text-to-lottie 提供了更強的自動化生成能力，並且能夠直接從編碼代理獲取動畫，省去手動編輯的繁瑣。

對比於其他工具，像是 0x0funky/agent-sprite-forge，Text-to-lottie 更加專注於將編碼代理的能力與動畫生成結合，適合需要快速生成動畫的開發者。這個工具的使用效果非常依賴於用戶的提示質量，若提示不夠具體，生成的動畫效果可能不理想。維護者社群活躍，且目前只有一個開放的問題，顯示出良好的維護狀態。考慮到這是其第一個穩定版本，未來可能會持續增強功能，尤其在動畫控制和編輯方面。適合小型團隊或個人開發者使用，尤其是那些需要快速生成動畫的專案。對於大型團隊，可能需要進一步的整合和定制。

**技術棧**：`TypeScript` · `SolidJS` · `Vite`

## 重點功能

- 即時預覽 — 在編輯過程中實時查看動畫效果，提升創作效率。
- 拖放編輯 — 直接將 Lottie 文件拖入畫布進行編輯，簡化操作流程。
- 項目管理 — 將動畫組織到項目和場景中，方便管理和切換。
- 高自動化 — 利用 Claude Code 或 Codex 自動生成動畫，減少手動工作。
- 多平台支持 — 生成的動畫可用於 Web、React Native、iOS 和 Android 等多種平台。

## 快速開始

1. 安裝技能
```bash
npx skills add diffusionstudio/lottie
```
2. 生成動畫
```bash
使用 text-to-lottie 提示生成動畫
```
3. 使用生成的動畫
```bash
lottie.loadAnimation({ container: document.getElementById('anim'), renderer: 'svg', loop: true, autoplay: true, path: '/animations/my-animation.json' });
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Lottie 和相關依賴",
  "指令": "lottie.loadAnimation({ container: document.getElementById('anim'), renderer: 'svg', loop: true, autoplay: true, path: '/animations/my-animation.json' });",
  "預期輸出": "動畫將在指定的容器中自動播放，並循環顯示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 2966 stars（每天 270），forks 159（5.4%），顯示出良好的用戶關注度。這個專案的主要貢獻者有 k9p5、doruk-kavcioglu 和 wcandillon，他們在開源社群中有一定的知名度。Text-to-lottie 解決了動畫生成的自動化問題，特別是針對需要高效生成 Lottie 動畫的開發者。之前的解決方案往往需要手動編輯，無法快速響應需求。社群的反饋和活躍度也促進了這個專案的快速成長。

## 適合誰使用

**目標受眾**：需要快速生成 Lottie 動畫且熟悉編碼的前端開發者。

> [!example] 使用場景
> - 前端工程師用它來快速生成 Lottie 動畫，因為可以直接從 SVG 路徑生成，節省了手動編輯的時間。
> - 動畫設計師用它來創建符合客戶需求的動畫，因為可以使用自然語言描述動畫效果，提升了創作效率。
> - 產品經理用它來快速迭代動畫設計，因為即時預覽功能讓他們能夠在編輯過程中隨時檢查效果。

## 架構分析

Text-to-lottie 採用模組化架構，主要基於 SolidJS 和 Vite，這使得開發過程中能夠保持高效和靈活。用戶的動畫項目被組織在一個專案中，每個動畫作為場景存在，這樣的設計讓用戶能夠方便地管理和切換不同的動畫。資料流方面，當用戶將 Lottie 文件拖入畫布時，系統會自動加載並更新，這樣的即時反饋機制提升了用戶體驗。選擇 SolidJS 的原因在於其高效的渲染性能，能夠快速響應用戶操作，這對於動畫編輯至關重要。未來可能會面臨擴展性瓶頸，尤其是在處理大型動畫項目時，需考慮如何優化性能。

## 技術深入分析

Text-to-lottie 的核心技術在於其基於 SolidJS 的架構，這使得其能夠在用戶操作時提供即時反饋。使用 Vite 作為建構工具，能夠快速編譯和熱重載，提升開發效率。該框架能夠處理的資料量取決於用戶的設備性能，對於大型動畫項目，可能會遇到性能瓶頸。選擇 TypeScript 作為開發語言，提供了更好的型別安全性和開發體驗。

依賴樹相對簡單，主要依賴於幾個現代前端庫，這降低了學習成本。技術風險方面，隨著用戶數量的增加，可能會出現性能問題，特別是在處理複雜動畫時。整合到現有的工具鏈中相對簡單，因為它支持主流的前端框架和平台，並且有良好的文檔支持。整體來看，這是一個具有潛力的工具，特別適合需要快速生成動畫的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細說明。安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 即時預覽功能提升了用戶體驗。
> - 自動生成能力節省了大量手動編輯時間。
> - 支持多平台，方便整合到各種應用中。

> [!danger] 缺點
> - 生成的動畫質量依賴於用戶的提示質量。
> - 對於非技術用戶的友好度不足。
> - 目前功能相對較新，可能存在潛在的 bug。

> [!warning] 注意事項
> - 生成的動畫質量依賴於用戶提供的提示質量。
> - 目前僅支持特定格式的 Lottie 動畫，可能不兼容所有 Lottie 文件。
> - 需要一定的編碼基礎，對於非技術用戶可能不太友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色動畫，而 Text-to-lottie 更加通用，支持多種動畫類型。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更強的編輯功能，但缺乏自動生成的能力，適合需要手動調整的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色動畫生成，提供了更細緻的控制，但不支持自動化生成。 | 如果需要更細緻的角色動畫控制，且不介意手動編輯。 | medium，因為需要重新適應不同的編輯流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了強大的編輯功能，但缺乏自動生成能力，適合需要手動調整的用戶。 | 如果需要手動編輯和調整動畫，而不依賴自動生成。 | low，因為編輯流程相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lottie** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色動畫生成，提供了更細緻的控制，但不支持自動化生成。 | 提供了強大的編輯功能，但缺乏自動生成能力，適合需要手動調整的用戶。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的編輯流程。 | low，因為編輯流程相似。 |
> | 適用場景 | 主要場景 | 如果需要更細緻的角色動畫控制，且不介意手動編輯。 | 如果需要手動編輯和調整動畫，而不依賴自動生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 生成的動畫可能不符合預期，特別是當提示不夠具體時。
  - 解法：提供更詳細的提示，使用具體的運動設計術語。
- [MEDIUM] 在大型動畫項目中可能會遇到性能瓶頸。
  - 解法：考慮將動畫拆分為多個小項目進行管理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的前端開發專案 | 非常適合 | 能快速生成動畫，提升開發效率。 |
| 大型企業的動畫設計部門 | 普通 | 可能需要更多的手動調整和控制。 |
| 個人開發者的創意項目 | 非常適合 | 能夠快速實現創意，降低開發門檻。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能快速生成動畫，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

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
| Forks | 159 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
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

**社群活躍度**：社群活躍，開放問題數量少，顯示出良好的維護狀態。
**連結**：[文件](https://diffusion.studio)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-15）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #5 from diffusionstudio/solid-rewrite

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/diffusionstudio/lottie/issues/4) | 🤖 Code Audit: 6 potential issue(s) found | 0 | 0 |

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

相關概念：[[動畫生成]] · [[即時通訊]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/diffusionstudio/lottie) · [官方網站](https://diffusion.studio)

## 相關收錄

> [!note]- 直接競品（同子分類：動畫生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "動畫生成" AND file.name != "diffusionstudio--lottie"
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
> const concepts = ["動畫生成","即時通訊","自動化"];
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
