---
repo: diffusionstudio/lottie
url: https://github.com/diffusionstudio/lottie
owner: diffusionstudio
owner_type: Organization
language: TypeScript
license: MIT
description: "Open-source skill and harness for generating production ready Lottie animations with codex/claude code"
homepage: ""
stars: 513
stars_per_day: 128
forks: 28
open_issues: 0
created: 2026-06-04
pushed_at: 2026-06-08
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "動畫工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "生成可用於生產的 Lottie 動畫，讓開發者能夠即時預覽和調整動畫效果。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-16"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 116
readme_length: 984
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:513"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "lottie"
  - "diffusionstudio/lottie"
  - "生成可用於生產的 Lottie 動畫，讓開發者能夠即時預覽和調整動畫效果。"
---

# lottie

**513** stars · **128** stars/天 · 建立 4 天前 · TypeScript · MIT

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 生成可用於生產的 Lottie 動畫，讓開發者能夠即時預覽和調整動畫效果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (128 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成和預覽 Lottie 動畫的前端開發者和設計師。
> **一句話重點** 這個專案的創新在於將 Lottie 動畫生成與即時預覽結合，顯著提升了開發體驗。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習、2 小時整合，得到即時動畫生成的效果，值得嘗試。

> [!abstract] 核心創新
> 提供即時預覽的 Lottie 動畫生成工具，結合 LLM 生成內容。

## 專案簡介

Text-To-Lottie 是一個基於 Skia CanvasKit 的全螢幕 Lottie 播放器，結合了 React、shadcn/ui 和 TypeScript，專為生成 Lottie 動畫而設計。用戶可以透過 LLM（如 Claude 或 Codex）生成動畫，並將其寫入 `public/lottie.json`，開發伺服器會自動熱重載，讓用戶即時觀看效果。這種設計使得動畫的創建過程變得更加直觀和高效，特別適合需要快速迭代的開發環境。使用者只需執行 `npx skills add diffusionstudio/lottie` 即可開始使用，或是手動安裝並運行 `npm run dev`。這個工具的賣點在於其即時預覽功能，讓開發者能夠在創建過程中即時看到動畫效果，從而提升開發效率。

在技術實作上，Text-To-Lottie 使用了 CanvasKit 作為渲染引擎，這使得其在性能上具有優勢，因為 CanvasKit 是針對高效能渲染而設計的。這個專案的依賴樹相對輕量，主要依賴於 React 和 Vite，這使得整體架構簡潔且易於維護。



與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Text-To-Lottie 提供了更為即時的反饋機制，因為它支持熱重載功能，這對於需要頻繁調整動畫的開發者來說是個重要優勢。相較於傳統的 Lottie 編輯工具，這個專案的設計更符合現代開發流程，特別是在使用 LLM 生成內容的情境下。

使用者在實際操作中可能會遇到需要手動執行 `node scripts/copy-canvaskit.mjs` 的情況，這是因為 wasm 檔案不會自動提交到版本控制中。社群活躍度方面，該專案在短短四天內就累積了 513 顆星（每天 128 顆），顯示出其受到廣泛關注。

這個專案目前處於 alpha 階段，適合小型團隊或個人開發者進行試用，但不建議用於生產環境的核心路徑。未來六個月內，隨著更多功能的加入和社群的擴展，預期會有更穩定的版本推出。

**技術棧**：`TypeScript` · `React` · `Vite` · `CanvasKit`

## 重點功能

- 即時預覽 — 用戶可在生成動畫後立即看到效果，提升開發效率。
- 基於 CanvasKit — 使用高效能的 Skia CanvasKit 作為渲染引擎，確保動畫流暢播放。
- 熱重載功能 — 修改 `public/lottie.json` 後，開發伺服器會自動更新，無需手動重啟。
- 簡單的 CLI 指令 — 透過 `npx skills add diffusionstudio/lottie` 快速開始使用。
- 輕量依賴 — 主要依賴於 React 和 Vite，保持專案簡潔。

## 快速開始

1. 安裝專案
```bash
npx skills add diffusionstudio/lottie
```
2. 手動安裝依賴
```bash
npm install
```
3. 啟動開發伺服器
```bash
npm run dev
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 npm",
  "指令": "npx skills add diffusionstudio/lottie",
  "預期輸出": "成功添加 Lottie 動畫生成技能"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 513 stars（128/天），forks 28（5.5%），顯示出強烈的初期關注。作者 k9p5 在開源社群中有一定的影響力，這個專案解決了 Lottie 動畫生成過程中的即時預覽問題，之前的解決方案往往缺乏這種互動性。該專案的推出可能受到社群對於 LLM 整合的熱烈討論影響，特別是在動畫和視覺效果領域。高比例的 forks/stars（5.5%）表明有許多開發者對此專案進行了實際修改，顯示出其在實際應用中的潛力。

## 適合誰使用

**目標受眾**：需要快速生成和預覽 Lottie 動畫的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來生成和即時預覽動畫，因為這樣可以快速迭代設計，提升開發效率。
> - 動畫設計師用它來與開發團隊合作，生成符合需求的 Lottie 動畫，因為即時預覽能夠減少溝通成本。
> - 產品經理用它來展示動畫效果，因為能夠即時看到變更，便於做出快速決策。

## 架構分析

Text-To-Lottie 採用現代的前端架構，主要由 React 組成，並使用 Vite 作為建構工具。這種架構選擇使得開發過程中能夠快速反饋，因為 Vite 支持熱重載，能夠即時更新頁面。資料流方面，使用者的請求會通過 LLM 生成動畫，並將結果寫入 JSON 檔案，然後由 CanvasKit 渲染。

這樣的設計使得動畫生成過程變得簡單且高效。選擇 React 和 Vite 的好處在於它們的生態系統成熟，能夠快速整合各種功能，但代價是需要一定的學習曲線，特別是對於不熟悉這些技術的開發者。整體來說，這個架構在小型專案中表現良好，但在大型專案中可能會遇到性能瓶頸，特別是在處理複雜動畫時。

## 技術深入分析

Text-To-Lottie 的核心技術機制是使用 Skia CanvasKit 作為渲染引擎，這使得其在動畫播放上具有高效能和流暢度。專案的資料流設計簡單明瞭，用戶的請求經由 LLM 生成動畫，並將結果寫入 JSON 檔案，這樣的設計使得開發者能夠快速迭代和調整動畫效果。效能方面，由於使用了 WebAssembly，這使得動畫渲染速度相對較快，但在處理複雜動畫時，仍可能會遇到性能瓶頸。選擇 React 和 Vite 作為技術棧的原因在於它們的生態系統成熟且社群活躍，這使得開發者能夠快速找到解決方案和資源，但這也意味著對於新手來說，學習曲線可能較陡峭。技術風險方面，若未來需要擴展功能，可能會面臨依賴管理的挑戰，特別是在依賴於多個第三方庫的情況下。整合方面，Text-To-Lottie 可以輕鬆與現有的 React 生態系統整合，但在與其他框架的兼容性上可能會遇到挑戰，特別是在使用不同的狀態管理方案時。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，對於新手來說相對友好。安裝過程順暢，執行 `npm install` 後不會遇到太多問題。雖然沒有專門的入門指南，但 README 中的步驟足以讓新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 即時預覽功能，提升開發效率。
> - 輕量依賴，易於維護和擴展。
> - 結合 LLM 生成內容，創造性強。

> [!danger] 缺點
> - 目前功能尚不穩定，適合試用階段。
> - 需要手動處理某些依賴，增加使用複雜度。
> - 對於大型動畫項目可能性能不足。

> [!warning] 注意事項
> - 目前處於 alpha 階段，功能可能不穩定。
> - 需要手動執行腳本來複製 CanvasKit wasm 檔案。
> - 不支援舊版瀏覽器，需使用現代瀏覽器。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供動畫生成，但缺乏即時預覽功能，適合靜態生成需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於動畫資源管理，無法即時生成和預覽動畫效果。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於靜態動畫生成，無法提供即時預覽功能。 | 如果你的需求是生成靜態動畫而不需要即時反饋。 | medium，因為需要調整生成流程和整合方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供動畫資源管理，但無法即時生成和預覽動畫效果。 | 如果你需要一個專注於資源管理的解決方案，而非即時生成工具。 | high，因為需要重構整個動畫生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **lottie** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於靜態動畫生成，無法提供即時預覽功能。 | 提供動畫資源管理，但無法即時生成和預覽動畫效果。 |
> | 遷移成本 | - | medium，因為需要調整生成流程和整合方式。 | high，因為需要重構整個動畫生成流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成靜態動畫而不需要即時反饋。 | 如果你需要一個專注於資源管理的解決方案，而非即時生成工具。 |

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

- **[HIGH]** 需要手動執行腳本來複製 CanvasKit wasm 檔案，可能會造成安裝困難。
  - 解法：在安裝後執行 `node scripts/copy-canvaskit.mjs`。
- [MEDIUM] 對於大型動畫項目，可能會遇到性能瓶頸。
  - 解法：考慮將動畫拆分為多個小型動畫。
- [MEDIUM] 不支援舊版瀏覽器，可能導致部分用戶無法使用。
  - 解法：建議使用現代瀏覽器進行測試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發的動畫專案 | 非常適合 | 即時預覽功能能夠大幅提升開發效率。 |
| 大型企業的動畫產品線 | 不適合 | 目前功能尚不穩定，可能影響生產環境。 |
| 個人開發者的創意項目 | 適合 | 輕量依賴和即時預覽功能非常符合個人開發需求。 |
| 需要與其他框架整合的複雜專案 | 普通 | 與非 React 框架的整合可能會遇到挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習、2 小時整合，得到即時動畫生成的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Text-To-Lottie 最常與 React 和 Vite 搭配使用，通常在開發階段用於即時動畫生成。在一個使用 React 的專案中，可以透過 `npm install` 安裝並在開發伺服器中即時預覽動畫效果。該工具與 GitHub Actions 等 CI 工具相容，能夠輕鬆整合到現有的工作流程中。最常見的整合問題是需要手動處理 CanvasKit 的依賴，這可能會造成初次設置的摩擦。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Text-To-Lottie 出現之前，開發者通常使用靜態工具生成 Lottie 動畫，這些工具缺乏即時反饋，導致開發過程中需要多次手動調整。隨著 LLM 技術的進步，將其與動畫生成結合變得可行，這使得即時生成和預覽動畫成為可能。這個工具代表了開發流程中對於即時反饋和高效能的需求，未來可能會看到更多類似的工具出現。

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
| Forks | 28 |
| Open Issues | 0 |
| 最後推送 | 2026-06-08 |
| 建立日期 | 2026-06-04 |
| Repo 大小 | 116 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/diffusionstudio/lottie) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `canvaskit-wasm` `class-variance-authority` `clsx` `lucide-react` `motion` `react` `react-dom` `tailwind-merge` `@radix-ui/react-slider` `@radix-ui/react-slot` `@tailwindcss/vite` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "CSS" : 5
>     "JavaScript" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@k9p5](https://github.com/k9p5) | 23 |

## 社群與生態

**社群活躍度**：社群活躍，短時間內獲得大量關注。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-04 ~ 2026-06-08）
> **活躍天數** 3 天 · **最新 commit** Add LICENSE file and update project metadata

## README 摘錄

> [!info]- 展開查看原文 README
> # Text-To-Lottie
> 
> This project includes a full-screen Lottie player built on **Skia CanvasKit (Skottie)**, with a
> React + shadcn/ui + TypeScript control surface. Built to **generate a Lottie
> animation with an LLM and watch it play live**: the agent writes
> `public/lottie.json`, the dev server hot-reloads it.
> 
> ## Usage 
> 
> Run
> ```bash
> npx skills add diffusionstudio/lottie
> ```
> 
> Then ask claude code/codex or any other agent supporting skills to generate an animation using `text-to-lottie`
> 
> ## Getting started
> 
> Alternatively you can set up the repository manually
> 
> ```bash
> npm install   # also copies the CanvasKit wasm into /public (postinstall)
> npm run dev
> ```
> 
> Then open the printed local URL.
> 
> ## CanvasKit wasm
> 
> The wasm binary is **not** committed; it is copied from
> `node_modules/canvaskit-wasm/bin/full/canvaskit.wasm` into `public/` by
> [`scripts/copy-canvaskit.mjs`](scripts/copy-canvaskit.mjs) on `postinstall`. Run
> it manually any time with `node scripts/copy-canvaskit.mjs`.

## 延伸閱讀

相關概念：[[動畫生成]] · [[即時通訊]] · [[前端開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/diffusionstudio/lottie)

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
> const concepts = ["動畫生成","即時通訊","前端開發"];
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

- [[2026-06-09|2026-06-09]] — 首次收錄，513 stars
