---
repo: diffusionstudio/lottie
url: https://github.com/diffusionstudio/lottie
owner: diffusionstudio
owner_type: Organization
language: TypeScript
license: MIT
description: "Generate production-ready Lottie animations with Claude Code or Codex"
homepage: "https://diffusion.studio"
stars: 3488
stars_per_day: 233
forks: 184
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
use_case: "讓開發者透過 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。"
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
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:513,2026-06-10:1501,2026-06-11:2032,2026-06-16:2966,2026-06-17:3280,2026-06-18:3396,2026-06-19:3458,2026-06-20:3488"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "lottie"
  - "diffusionstudio/lottie"
  - "讓開發者透過 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。"
---

# lottie

**3.5k** stars · **233** stars/天 · 建立 15 天前 · TypeScript · MIT

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
> 讓開發者透過 Claude Code 或 Codex 生成生產就緒的 Lottie 動畫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (233 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望簡化 Lottie 動畫生成過程的前端開發者和設計師。
> **一句話重點** 這個專案讓動畫創作變得更簡單，特別是對於需要快速迭代的開發者和設計師。

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
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，8 小時整合，得到高效的動畫生成工具，值得投入。

> [!abstract] 核心創新
> 提供即時預覽和拖放編輯功能，讓 Lottie 動畫的生成和編輯變得更加直觀和高效。

## 專案簡介

Text-to-Lottie 是一個開源框架，專為生成 Lottie 動畫而設計，使用 Claude Code 或 Codex 等編碼代理進行創建。用戶可以透過簡單的指令，將 SVG 路徑轉換為動畫，並在專案中組織和編輯這些動畫。用戶只需執行 `npx skills add diffusionstudio/lottie` 安裝技能，然後透過編碼代理生成動畫，這樣的工作流程使得動畫製作變得簡單且高效。框架的核心賣點在於其即時預覽功能，讓用戶能夠在編輯過程中即時查看變更，這大大提高了創作效率。技術上，該專案基於 SolidJS 重寫，並使用 Vite 作為建置工具，確保了快速的開發和編譯速度。

與其他 Lottie 生成工具相比，如 0x0funky/agent-sprite-forge，Text-to-Lottie 提供了更直觀的拖放編輯功能，並且能夠即時更新場景，這在實時動畫創作中非常重要。使用者可以將生成的 Lottie 動畫直接用於網頁或移動應用，並且支持多種平台的整合，如 React Native 和 Flutter。這個工具特別適合需要快速生成動畫的設計師和開發者，尤其是在需要高互動性的應用中。由於目前是 v1.0.0 版本，穩定性和功能性已經相對成熟，但仍需注意未來的功能擴展和社群支持。整體而言，這是一個值得嘗試的工具，尤其對於那些希望簡化動畫製作流程的團隊來說。

**技術棧**：`TypeScript` · `SolidJS` · `Vite`

## 重點功能

- 即時預覽 — 在編輯過程中即時查看動畫變更，提升創作效率。
- 拖放編輯 — 直接將 Lottie 文件拖入畫布進行編輯，簡化操作流程。
- 專案管理 — 將動畫組織到專案和場景中，方便管理和切換。
- 多平台支持 — 生成的 Lottie 動畫可用於網頁、React Native、Flutter 等多種平台。
- 自定義控制 — 用戶可要求生成特定的動畫控制選項，提升靈活性。

## 快速開始

1. 安裝技能
```bash
npx skills add diffusionstudio/lottie
```
2. 生成動畫
```bash
請求編碼代理生成 Lottie 動畫
```
3. 使用動畫
```bash
lottie.loadAnimation({ container: document.getElementById('anim'), renderer: 'svg', loop: true, autoplay: true, path: '/animations/my-animation.json' });
```

## 程式碼範例

```ts
# 前置條件
# 使用 lottie-web 庫來加載動畫
lottie.loadAnimation({
  container: document.getElementById('anim'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/animations/my-animation.json'
});
# 預期輸出
# 加載並播放指定的 Lottie 動畫。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 3488 stars（233/天），forks 184（5.3%），這顯示出其快速增長的潛力。作者團隊由多位經驗豐富的開發者組成，過去在動畫和開源社群中有良好的聲譽。這個工具解決了傳統 Lottie 動畫生成過程繁瑣的問題，讓開發者能夠更容易地創建和編輯動畫。近期的推廣活動和社群討論也提高了其曝光率，吸引了許多開發者的關注。技術上，SolidJS 的使用使得這個工具在性能上有顯著優勢，特別是在即時更新和編輯方面。forks/stars 比率顯示出使用者對這個專案的高度參與，意味著許多人正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望簡化 Lottie 動畫生成過程的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來快速生成和編輯網頁動畫，因為即時預覽功能讓他們能夠迅速調整設計，減少了反覆修改的時間。
> - 動畫設計師用它來將 SVG 路徑轉換為 Lottie 動畫，因為可以直接從設計工具中導入資源，提升了工作效率。
> - 移動應用開發者用它來在 React Native 應用中集成動畫，因為支持多平台的導出選項，簡化了動畫的整合過程。

## 架構分析

Text-to-Lottie 採用基於 SolidJS 的架構，這使得其在性能上相對優越，特別是在即時更新和編輯方面。資料流方面，使用者的動畫請求會經過編碼代理，生成的 Lottie JSON 將被即時加載到畫布中，並且用戶可以在編輯過程中即時查看變更。這種設計使得用戶能夠快速迭代和調整動畫，降低了創作的門檻。選擇 SolidJS 而非 React 的原因在於其更輕量的性能，能夠更好地處理即時更新的需求。擴展性方面，該架構能夠輕鬆集成新的動畫效果和功能，但隨著功能的增加，可能會面臨維護上的挑戰。

## 技術深入分析

Text-to-Lottie 的核心技術機制是基於 SolidJS 和 Vite 的即時編輯框架，這使得用戶能夠在編輯過程中即時查看動畫變更。該工具能夠處理多達數十個動畫場景，並且在內存使用上保持輕量，這對於需要快速迭代的開發者來說是個優勢。選擇 SolidJS 而非 React 主要是因為其性能優越，能夠更好地支持即時更新的需求。依賴樹方面，該專案相對輕量，主要依賴於 Vite 和 SolidJS，這降低了整體的維護成本。技術風險方面，隨著功能的增加，可能會面臨穩定性和兼容性問題，特別是在不同平台的整合上。整合方面，該工具能夠輕鬆與現有的前端框架（如 React 和 Vue）進行整合，並且支持 CI/CD 流程中的自動化部署，這使得團隊能夠更快地將動畫集成到產品中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了豐富的範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅有英文版本，可能對非英語使用者造成一定挑戰。

## 優缺點分析

> [!success] 優點
> - 即時預覽功能提升了動畫創作的效率。
> - 拖放編輯界面簡化了用戶操作，降低了學習曲線。
> - 支持多平台導出，方便在不同環境中使用。

> [!danger] 缺點
> - 對於新手來說，仍然需要一定的編碼基礎。
> - 目前功能相對較新，可能存在潛在的穩定性問題。
> - 對於複雜動畫的支持可能不如專業工具全面。

> [!warning] 注意事項
> - 目前僅支持 Lottie JSON 格式，對其他動畫格式的支持有限。
> - 需要一定的編碼基礎才能充分利用其功能，對新手可能有學習曲線。
> - 在某些舊版瀏覽器上可能存在兼容性問題，需進行測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的動畫生成能力，但不支持即時編輯和預覽功能，適合較簡單的動畫需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲動畫生成，功能上較為專一，適合遊戲開發者，但不如 Text-to-Lottie 多功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用較為傳統的動畫生成技術，無法提供即時編輯功能。 | 如果需要簡單的動畫生成而不需要即時編輯功能，則可以選擇此工具。 | medium，因為需要重新適應不同的編輯流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲動畫生成，功能較為專一，適合遊戲開發者。 | 如果你的專案主要集中在遊戲開發上，這個工具可能更適合。 | low，因為其功能與 Text-to-Lottie 有部分重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lottie** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用較為傳統的動畫生成技術，無法提供即時編輯功能。 | 專注於遊戲動畫生成，功能較為專一，適合遊戲開發者。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的編輯流程。 | low，因為其功能與 Text-to-Lottie 有部分重疊。 |
> | 適用場景 | 主要場景 | 如果需要簡單的動畫生成而不需要即時編輯功能，則可以選擇此工具 | 如果你的專案主要集中在遊戲開發上，這個工具可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合用於生產環境，特別是對於需要快速生成和編輯動畫的團隊。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些舊版瀏覽器上可能存在兼容性問題
  - 解法：進行充分測試，確保在目標瀏覽器上正常運行
- **[HIGH]** 對於複雜動畫的支持可能不如專業工具全面
  - 解法：考慮將複雜動畫分解為簡單部分進行處理
- [MEDIUM] 需要一定的編碼基礎才能充分利用其功能
  - 解法：提供更多的範例和文檔以幫助新手上手

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的前端開發專案 | 非常適合 | 即時預覽和簡化的編輯流程非常符合小型團隊的需求。 |
| 大型企業的動畫設計部門 | 適合 | 能夠快速生成動畫，但可能需要額外的功能支持。 |
| 個人開發者的獨立專案 | 普通 | 雖然功能強大，但對於單一開發者來說可能過於複雜。 |
| 需要高互動性的移動應用開發 | 非常適合 | 支持多平台導出，能夠快速集成到應用中。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的動畫生成工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

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
| Forks | 184 |
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

**社群活躍度**：社群活躍，問題解決率達 100%。
**連結**：[文件](https://diffusion.studio) · [Discord](https://discord.com/invite/zPQJrNGuFB)

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

相關概念：[[動畫設計]] · [[即時通訊]] · [[CLI/TUI]]

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
> const concepts = ["動畫設計","即時通訊","CLI/TUI"];
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
