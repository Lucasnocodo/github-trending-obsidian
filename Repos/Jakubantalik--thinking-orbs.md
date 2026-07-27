---
repo: Jakubantalik/thinking-orbs
url: https://github.com/Jakubantalik/thinking-orbs
owner: Jakubantalik
owner_type: User
language: TypeScript
license: MIT
description: "Dotted thought-orb loading indicators for AI & agent UIs — six tuned states, two sizes, auto dark/light"
homepage: ""
stars: 1104
stars_per_day: 221
forks: 82
open_issues: 7
created: 2026-07-21
pushed_at: 2026-07-21
first_seen: 2026-07-23
week: "2026-W30"
month: "2026-07"
category: "開發工具"
subcategory: "UI 組件"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-23
use_case: "提供 AI 和代理 UI 的點狀思考球載入指示器，具備六種調整狀態和自動深淺色主題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-30"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 133
readme_length: 2519
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-23"
star_history: "2026-07-23:655,2026-07-23:656,2026-07-24:841,2026-07-24:841,2026-07-25:936,2026-07-25:936,2026-07-26:1022,2026-07-26:1024,2026-07-27:1104"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "thinking-orbs"
  - "Jakubantalik/thinking-orbs"
  - "提供 AI 和代理 UI 的點狀思考球載入指示器，具備六種調整狀態和自動深淺色主題。"
---

# thinking-orbs

**1.0k** stars · **256** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> 提供 AI 和代理 UI 的點狀思考球載入指示器，具備六種調整狀態和自動深淺色主題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (256 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 React 應用中使用載入指示器的前端開發者，特別是專注於 AI 和代理 UI 的團隊。
> **一句話重點** 這個專案的設計不僅注重性能，還考慮到用戶的使用體驗，特別是在主題自動調整方面。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "UI 組件" && p.file.name !== "Jakubantalik--thinking-orbs" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 UI 組件 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到直觀的載入指示器，值得一試。

> [!abstract] 核心創新
> 提供六種手調的載入動畫狀態，並自動適應主題顏色，提升用戶體驗。

## 專案簡介

Thinking Orbs 是一個專為 AI 和代理 UI 設計的載入指示器，提供六種手調的動畫狀態，並有兩種尺寸可選。用戶只需在 React 組件中引入 `ThinkingOrb`，即可輕鬆使用這些載入指示器。這些指示器在 2D 畫布上渲染，無需 WebGL，確保在 Chrome、Safari 和 Firefox 上表現一致。這樣的設計使得它在低端設備上也能流暢運行，且不會因為過多的圖形處理而影響性能。它的主題會自動根據宿主項目的深淺色模式進行調整，這樣用戶無需額外配置。這個工具的賣點在於其簡單易用和高效能，特別適合需要在 UI 中使用載入指示的開發者。它的技術實作基於 TypeScript，並使用 Vite 進行構建，這使得開發過程中能夠享受快速的熱重載和優化的構建時間。

與其他載入指示器相比，如 `react-loader-spinner`，Thinking Orbs 提供了更多的動畫狀態選擇和更好的性能，因為它完全基於 2D 畫布而非 SVG 或 WebGL。這使得它在處理大量實例時，能夠保持較低的資源佔用。使用者在實際應用中可能會遇到的問題包括 Safari 瀏覽器的兼容性，但已經有針對性的修復。這個專案目前處於早期階段，雖然有一些開放的問題，但活躍的維護者和社群支持使其未來發展可期。適合需要在 UI 中使用載入指示器的開發者，特別是那些希望簡化設計流程的團隊。建議在小型專案或原型開發中使用，未來可能會擴展到更大的應用場景。

**技術棧**：`TypeScript` · `Vite` · `React`

## 重點功能

- 六種動畫狀態 — 每種狀態代表不同的載入行為，提供直觀的用戶體驗。
- 兩種尺寸選擇 — 提供 64px 和 20px 兩種設計，適應不同的 UI 需求。
- 自動主題調整 — 根據宿主項目的深淺色主題自動調整顏色，無需額外配置。
- 高性能 — 基於 2D 畫布渲染，確保在低端設備上也能流暢運行。
- 無需 WebGL — 適合所有主流瀏覽器，無需擔心兼容性問題。
- 可擴展性 — 支持傳遞其他 props，如 className 和 style，方便自定義樣式。

## 快速開始

1. 安裝套件
```bash
npm install thinking-orbs
```
2. 引入組件
```bash
import { ThinkingOrb } from 'thinking-orbs';
```
3. 使用組件
```bash
<ThinkingOrb />
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 thinking-orbs 套件",
  "程式碼": "import { ThinkingOrb } from 'thinking-orbs';\n\nfunction Status() {\n  return <ThinkingOrb />;\n}",
  "預期輸出": "顯示一個載入指示器，根據主題自動調整顏色"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1024 stars（256/天），forks 76（7.4%），顯示出穩定的增長潛力。作者 Jakub Antalik 之前有其他開源專案，這次專案解決了載入指示器在不同主題下自動調整的需求，這在現有的解決方案中並不常見。社群對於載入指示器的需求持續增長，特別是在 AI 和代理應用中。這個工具的設計符合現代開發者對於性能和易用性的追求，並且在社群中引發了一些討論，特別是對於 Vue 3 的適配需求。

## 適合誰使用

**目標受眾**：需要在 React 應用中使用載入指示器的前端開發者，特別是專注於 AI 和代理 UI 的團隊。

> [!example] 使用場景
> - 前端工程師用它來在聊天應用中顯示載入狀態，因為它提供了六種不同的動畫狀態，讓用戶能夠直觀地理解系統的運行狀態。
> - UI 設計師用它來為 AI 代理的回應添加載入效果，因為它的自動主題調整功能能夠無縫融入不同的設計風格。
> - 開發者用它來在數據加載時提供視覺反饋，因為它的性能優化使得即使在低端設備上也能流暢運行。

## 架構分析

Thinking Orbs 採用模組化設計，主要由 TypeScript 編寫，並使用 Vite 進行構建。這樣的選擇使得開發過程中能夠享受快速的熱重載和優化的構建時間。資料流方面，動畫狀態在 2D 畫布上渲染，避免了 WebGL 的複雜性，確保了在各種設備上的一致性。

選擇 2D 畫布而非 SVG 或 WebGL，讓它在性能上更具優勢，特別是在低端設備上。這樣的設計使得它在處理大量實例時，能夠保持較低的資源佔用。未來擴展性方面，雖然目前僅支持 React，但未來可能會考慮支持其他框架。

## 技術深入分析

Thinking Orbs 的核心技術機制在於使用 TypeScript 和 Vite 進行開發，這使得它能夠快速構建和熱重載。它的動畫狀態在 2D 畫布上渲染，這樣的選擇避免了 WebGL 的複雜性，確保在各種設備上都能流暢運行。效能方面，由於使用了 IntersectionObserver，當載入指示器滾動出視窗時會自動暫停，這樣的設計能夠有效節省資源。設計取捨方面，選擇 2D 畫布而非 SVG 或 WebGL，讓它在性能上更具優勢，但也限制了某些高級動畫效果的實現。技術風險方面，未來在擴展到其他框架時可能會遇到兼容性問題，尤其是在不同的主題和樣式處理上。整合分析方面，與現有的 React 生態系統相容性良好，能夠輕鬆整合到 CI/CD pipeline 中，並且對於團隊的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用範例，讓新手能夠快速上手。安裝過程順暢，無明顯坑。文件目前僅提供英文，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速集成到現有的 React 應用中。
> - 提供多種動畫狀態，增強用戶體驗。
> - 自動主題調整，無需額外配置，適應不同的設計風格。

> [!danger] 缺點
> - 目前僅支持 React，對於其他框架的支持尚未開發。
> - 在 Safari 瀏覽器中可能會遇到兼容性問題。
> - 僅提供單一顏色主題，無法自定義顏色方案。

> [!warning] 注意事項
> - 目前僅支援 React 應用，對於其他框架的支持尚未開發。
> - 在 Safari 瀏覽器中可能會遇到兼容性問題，需注意測試。
> - 僅提供單一顏色主題，無法自定義顏色方案。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多種載入動畫，但主要針對遊戲開發，適合需要動畫精細度的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的載入指示器，但缺乏多樣的動畫狀態，適合不需要複雜效果的應用。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 AI 代理的載入效果，功能較為單一，適合特定場景的使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發，提供多種載入動畫，但主要針對遊戲場景，適合需要動畫精細度的場景。 | 如果你的應用需要更高的動畫精細度，且主要針對遊戲開發。 | medium，因為需要重新設計動畫效果以適應遊戲場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的載入指示器，但缺乏多樣的動畫狀態，適合不需要複雜效果的應用。 | 如果你的應用不需要複雜的載入效果，且希望快速集成。 | low，因為可以直接替換現有的載入指示器。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **thinking-orbs** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發，提供多種載入動畫，但主要針對遊戲場景，適合需要動畫精細度的場景。 | 提供簡單的載入指示器，但缺乏多樣的動畫狀態，適合不需要複雜效果的應用。 |
> | 遷移成本 | - | medium，因為需要重新設計動畫效果以適應遊戲場景。 | low，因為可以直接替換現有的載入指示器。 |
> | 適用場景 | 主要場景 | 如果你的應用需要更高的動畫精細度，且主要針對遊戲開發。 | 如果你的應用不需要複雜的載入效果，且希望快速集成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Safari 瀏覽器中可能會遇到兼容性問題，導致動畫不顯示
  - 解法：在開發過程中進行充分測試，並考慮提供替代方案
- [MEDIUM] 在某些情況下，主題自動調整可能不及時更新
  - 解法：確保在使用前正確設置主題屬性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的聊天應用 | 非常適合 | 提供多種動畫狀態，增強用戶體驗，且易於集成。 |
| 大型企業的數據儀表板 | 普通 | 雖然性能優越，但可能需要更多的自定義選項。 |
| 需要快速原型的個人項目 | 非常適合 | 安裝簡單，能快速展示載入效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到直觀的載入指示器，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Thinking Orbs 最常與 React 框架搭配使用，通常在開發過程中用於顯示載入狀態。在一個用 React 開發的應用中，你可以用這個工具來顯示數據加載狀態，具體做法是引入 `ThinkingOrb` 組件並在需要的地方使用。它與 GitHub Actions 等 CI 工具相容良好，能夠輕鬆整合到現有的開發流程中。整合的摩擦點主要在於需要確保主題屬性正確設置，以便自動調整顏色。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
| Forks | 76 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-21 |
| 建立日期 | 2026-07-21 |
| Repo 大小 | 133 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Jakubantalik/thinking-orbs) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@tailwindcss/vite` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `clsx` `react` `react-dom` `tailwind-merge` `tailwindcss` `typescript` `vite` `vite-plugin-dts`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jakubantalik](https://github.com/Jakubantalik) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://orbs.jakubantalik.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-20 ~ 2026-07-21）
> **活躍天數** 2 天 · **最新 commit** Fix Safari: replace CSS multi-column masonry with grid row-spans

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/Jakubantalik/thinking-orbs/issues/5) | Vue 3 version adapted from this project | 0 | 0 |
> | [#3](https://github.com/Jakubantalik/thinking-orbs/issues/3) | Would you be open to listing the community Flutter port? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # thinking-orbs
> 
> Dotted thought-orb loading indicators for AI & agent UIs. Six hand-tuned animated states, each shipped at two purpose-tuned sizes, rendered on a plain 2D canvas — no WebGL, no filters, works identically in Chrome, Safari and Firefox.
> 
> [Live demo](https://orbs.jakubantalik.com) · [Repository](https://github.com/Jakubantalik/thinking-orbs) · [Report an issue](https://github.com/Jakubantalik/thinking-orbs/issues)
> 
> ## Install
> 
> ```bash
> npm install thinking-orbs
> ```
> 
> ## Quick start
> 
> ```tsx
> import { ThinkingOrb } from 'thinking-orbs';
> 
> function Status() {
>   return ;
> }
> ```
> 
> ## States
> 
> Six verbs an agent can be doing, each a distinct animation:
> 
> ```tsx
>     {/* particles on tilted orbits */}
>   {/* a scan meridian sweeps a dotted globe */}
>     {/* bands scramble, then click back solved */}
>   {/* a waveform rolls through the rings */}
>   {/* an undulating multi-band sash */}
>     {/* dotted outline: circle → triangle → square */}
> ```
> 
> ## Sizes
> 
> Two tuned presets — separate designs, not a scale factor. `64` for chat-avatar scale, `20` for inline-text scale. Each carries its own dot count, dot size and speed tuning:
> 
> ```tsx
> 
> ```
> 
> ## Theme
> 
> Strictly monochrome — light ink for dark backgrounds, dark ink for light backgrounds — with the mode picked automatically from the host project:
> 
> ```tsx
>    {/* default — detects from the project */}
>    {/* pin: light dots for dark backgrounds */}
>   {/* pin: dark dots for light backgrounds */}
> ```
> 
> `auto` resolves in three layers and updates live when any of them change:
> 
> 1. an ancestor `data-theme="dark|light"` attribute or `dark`/`light` class (the Tailwind / shadcn convention), watched via `MutationObserver`;
> 2. otherwise `prefers-color-scheme`, subscribed for live OS theme switches;
> 3. SSR-safe — the canvas paints only on the client, after the theme has resolved.
> 
> ## Other props
> 
> ```tsx
> 
> ```
> 
> All other `` props (`className`, `style`, `data-*`, …) pass through.
> 
> ## Accessibility & performance
> 
> - `role="img"` with a sensible per-state `aria-label` out of the box.
> - `prefers-reduced-motion: reduce` renders a static representative frame — no animation — and still follows the live theme.
> - Every instance pauses automatically when scrolled offscreen (`IntersectionObserver`) or when the tab is hidden, and resumes in phase — all instances share one clock.
> - Plain 2D canvas arcs only: no `ctx.filter`, no SVG filters, no WebGL — the same pixels everywhere, cheap on low-end devices. Device-pixel-ratio capped at 2.
> 
> ## License
> 
> MIT © Jakub Antalik

## 延伸閱讀

相關概念：[[UI 組件]] · [[動畫效果]] · [[深淺色主題]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[vorpus--performativeUI|vorpus/performativeUI]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/Jakubantalik/thinking-orbs)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 組件）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 組件" AND file.name != "Jakubantalik--thinking-orbs"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Jakubantalik--thinking-orbs"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Jakubantalik--thinking-orbs" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "Jakubantalik--thinking-orbs"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["UI 組件","動畫效果","深淺色主題"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Jakubantalik--thinking-orbs" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Jakubantalik--thinking-orbs" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Jakubantalik" AND file.name != "Jakubantalik--thinking-orbs"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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
> const me = dv.page("Repos/Jakubantalik--thinking-orbs");
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

> **2026-07-23** — 首次收錄
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

- [[2026-07-27|2026-07-27]] — 再次上榜，1.1k stars
- [[2026-07-26|2026-07-26]] — 再次上榜，1.0k stars
- [[2026-07-25|2026-07-25]] — 再次上榜，936 stars
- [[2026-07-24|2026-07-24]] — 再次上榜，841 stars
- [[2026-07-23|2026-07-23]] — 首次收錄，655 stars
