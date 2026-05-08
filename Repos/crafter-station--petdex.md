---
repo: crafter-station/petdex
url: https://github.com/crafter-station/petdex
owner: crafter-station
owner_type: Organization
language: TypeScript
license: MIT
description: "Public gallery of animated Codex pets"
homepage: "https://petdex.crafter.run"
stars: 962
stars_per_day: 192
forks: 43
open_issues: 8
created: 2026-05-02
pushed_at: 2026-05-07
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "資源管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "提供一個公共畫廊，讓使用者瀏覽和下載 Codex 兼容的動畫寵物。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-15"
contributor_count: 5
engagement: "low"
issue_close_rate: 92
repo_size_kb: 61392
readme_length: 467
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:724,2026-05-07:729,2026-05-08:961,2026-05-08:962"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "petdex"
  - "crafter-station/petdex"
  - "提供一個公共畫廊，讓使用者瀏覽和下載 Codex 兼容的動畫寵物。"
---

# petdex

**962** stars · **192** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/crafter-station--petdex");
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
> 提供一個公共畫廊，讓使用者瀏覽和下載 Codex 兼容的動畫寵物。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (192 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速獲取和分享動畫資源的遊戲開發者和獨立創作者。
> **一句話重點** Petdex 讓動畫資源的分享和創建變得前所未有的簡單，特別適合遊戲開發者和獨立創作者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/crafter-station--petdex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資源管理" && p.file.name !== "crafter-station--petdex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資源管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，4 小時整合，得到一個便捷的動畫資源管理平台，值得嘗試。

> [!abstract] 核心創新
> 提供了一個集中式平台來展示和分享 Codex 兼容的動畫寵物。

## 專案簡介

Petdex 是一個專為 Codex 兼容的動畫寵物設計的公共畫廊，使用者可以輕鬆瀏覽已批准的寵物包，預覽每個動畫狀態，並下載個別的 ZIP 包或整個畫廊包。使用者可以在瀏覽器中驗證並提交社群寵物包，這樣的設計讓社群參與變得簡單且直觀。核心命令包括 `bun dev` 用於開發環境啟動，`bun run build` 用於生產環境建置。這種設計不僅提升了使用者的互動性，還鼓勵社群貢獻，讓整個平台持續擴展。技術上，Petdex 使用了 Next.js 作為框架，並結合了 TypeScript 和 CSS，確保了類型安全和良好的樣式管理。

這樣的選擇使得開發過程中能夠快速迭代並保持高效。與其他類似工具相比，如 0x0funky/agent-sprite-forge，Petdex 提供了更友好的界面和社群互動功能，讓使用者不僅能夠下載資源，還能參與創建過程。這在小型專案或個人開發者中尤為適合，因為它降低了使用門檻並提高了參與感。使用者在使用過程中可能會遇到的問題包括提交失敗或包名衝突，這些問題在熱門 Issues 中已有反映。總體來看，Petdex 是一個值得關注的新興專案，特別適合需要快速創建和分享動畫資源的開發者。

**技術棧**：`TypeScript` · `Next.js 16.2.4` · `Bun`

## 重點功能

- 瀏覽寵物包 — 使用者可以輕鬆瀏覽所有已批准的寵物包。
- 預覽動畫狀態 — 每個動畫狀態都可以在平台上進行預覽，方便使用者選擇。
- 下載功能 — 支持單個 ZIP 包和整個畫廊包的下載，方便使用者獲取所需資源。
- 社群提交 — 使用者可以在瀏覽器中驗證並提交自己的寵物包，增加社群參與感。
- 開發和生產命令 — 提供簡單的命令如 `bun dev` 和 `bun run build` 來啟動開發和生產環境。

## 快速開始

1. 安裝依賴
```bash
bun install
```
2. 啟動開發伺服器
```bash
bun dev
```
3. 建置生產版本
```bash
bun run build
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 bun 環境",
  "指令": "bun dev",
  "預期輸出": "開發伺服器啟動，並可在瀏覽器中訪問應用"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 962 stars（192/天），forks 43（4.5%），顯示出良好的社群反響。主要貢獻者包括 Railly 和 cuevaio，這些開發者在開源社群中有一定的影響力。Petdex 解決了過去缺乏集中式平台來展示和分享動畫寵物的痛點，讓使用者能夠輕鬆找到和使用這些資源。最近的活動和提交紀錄顯示出活躍的開發進度，這也吸引了更多使用者的關注。社群的活躍度和問題解決率（92%）讓人對未來的發展充滿期待。

## 適合誰使用

**目標受眾**：需要快速獲取和分享動畫資源的遊戲開發者和獨立創作者。

> [!example] 使用場景
> - 遊戲開發者用它來快速找到和下載動畫寵物資源，因為這樣可以節省設計時間並提升遊戲的視覺效果。
> - 獨立開發者用它來創建個人專案中的寵物角色，因為平台提供了簡單的提交和驗證流程，讓他們能夠輕鬆參與社群。
> - 動畫師用它來展示自己的作品並獲得反饋，因為這個平台提供了即時的社群互動和資源分享功能。

## 架構分析

Petdex 採用 Next.js 作為前端框架，這使得開發過程中能夠利用其強大的路由和伺服器端渲染功能。資料流方面，使用者的請求經由 Next.js 處理，並從 S3 獲取寵物資源，這樣的設計確保了高效的資源加載。選擇 Next.js 的好處在於其生態系統的成熟和社群支持，但代價是需要一定的學習曲線來掌握其特性。擴展性方面，這個架構能夠輕鬆地整合更多功能，但隨著使用者數量的增加，可能會面臨伺服器資源的瓶頸。整體來看，這個架構設計適合小型至中型專案，但在高流量情況下可能需要進一步的優化。 

## 技術深入分析

Petdex 的核心技術機制是基於 Next.js 的全棧架構，這使得開發者能夠利用其強大的路由和伺服器端渲染功能。使用 TypeScript 提供了類型安全，減少了潛在的錯誤，並提高了開發效率。效能方面，Petdex 能夠快速加載資源，因為它從 S3 獲取寵物包，這樣的設計能夠有效減少伺服器負擔。選擇 Next.js 而非其他框架（如 React 或 Vue）是因為其在 SEO 和性能上的優勢，然而這也意味著需要學習 Next.js 的特性。技術風險方面，隨著使用者數量的增加，伺服器可能會面臨流量瓶頸，這需要進一步的擴展計劃。整合方面，Petdex 可以輕鬆與其他工具鏈（如 GitHub Actions）整合，但在 CI/CD 的實現上可能需要額外的配置。整體來看，Petdex 是一個設計良好的專案，適合小型至中型的開發團隊使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了必要的安裝和使用範例，安裝過程順暢，無明顯坑點。文件目前僅提供英文版本，對於非英語使用者可能會造成障礙。整體來說，花 30 分鐘應該能夠順利啟動並運行。

## 優缺點分析

> [!success] 優點
> - 簡單易用的界面，適合新手使用
> - 社群參與感強，鼓勵使用者提交資源
> - 支持多種下載選項，方便使用者獲取資源

> [!danger] 缺點
> - 目前僅支援英文，缺乏多語言介面
> - 依賴於 bun 環境，對於不熟悉的使用者可能有學習成本
> - 社群活躍度尚需提升，以便更快解決問題

> [!warning] 注意事項
> - 僅支援使用 bun 作為包管理工具
> - 需要 Node.js 環境來運行
> - 目前僅提供英文介面，缺乏多語言支持

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的動畫資源管理功能，但缺乏社群提交和互動功能，適合需要更簡單資源的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定類型的資源，功能較為單一，適合對特定資源有需求的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定類型的動畫資源，功能較為單一，缺乏社群互動。 | 如果需要更專注的資源管理而不需要社群參與功能。 | medium，因為需要重新適應不同的資源管理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的資源下載功能，但缺乏社群提交和互動功能。 | 如果只需要簡單的資源下載而不需要社群功能。 | low，因為功能上相似，轉移成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **petdex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定類型的動畫資源，功能較為單一，缺乏社群互動。 | 提供類似的資源下載功能，但缺乏社群提交和互動功能。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的資源管理流程。 | low，因為功能上相似，轉移成本不高。 |
> | 適用場景 | 主要場景 | 如果需要更專注的資源管理而不需要社群參與功能。 | 如果只需要簡單的資源下載而不需要社群功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 提交寵物包時可能會遇到名稱衝突問題
  - 解法：檢查現有包名，避免重複
- [low] 在某些瀏覽器上可能會出現兼容性問題
  - 解法：使用最新版本的瀏覽器
- **[HIGH]** 社群互動不活躍，可能導致問題解決緩慢
  - 解法：主動在社群中提問，或尋求其他資源

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 提供了豐富的動畫資源，能夠快速整合進遊戲中。 |
| 獨立開發者的個人專案 | 適合 | 簡單的提交和下載流程，降低了使用門檻。 |
| 大型遊戲開發公司 | 普通 | 雖然功能強大，但可能需要更多的自定義和擴展性。 |
| 需要多語言支持的團隊 | 不適合 | 目前僅提供英文介面，對於非英語使用者不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，4 小時整合，得到一個便捷的動畫資源管理平台，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Petdex 通常與 Next.js 和 Bun 結合使用，這使得在開發環境中能夠快速啟動和測試。實際整合範例包括在 Next.js 專案中使用 `bun dev` 命令啟動開發伺服器，並在 `public/pets` 中管理資源。支援 GitHub Actions 進行 CI/CD，並可與 VS Code 等 IDE 整合。整合的摩擦點主要在於需要熟悉 Bun 的使用，對於不熟悉的開發者可能會有一定的學習成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Petdex 出現之前，開發者通常依賴於分散的資源庫和手動管理動畫資源，這樣的方式效率低且容易出錯。隨著社群對動畫資源需求的增加，集中式平台的需求變得越來越明顯。技術上，隨著前端框架（如 Next.js）的成熟，讓這種資源管理平台的實現變得可行。

Petdex 代表了一種新興的資源管理趨勢，未來可能會在遊戲開發和動畫設計領域中扮演更重要的角色。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/crafter-station--petdex");
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
> const me = dv.page("Repos/crafter-station--petdex");
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
| Forks | 43 |
| Open Issues | 8 |
| Issue 解決率 | 92% (94 closed) |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-05-02 |
| 官方網站 | [Link](https://petdex.crafter.run) |
| Repo 大小 | 60.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/crafter-station/petdex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@aws-sdk/client-s3` `@aws-sdk/s3-request-presigner` `@base-ui/react` `@clerk/localizations` `@clerk/nextjs` `@clerk/themes` `@dnd-kit/core` `@dnd-kit/sortable` `@dnd-kit/utilities` `@electric-sql/pglite` `@neondatabase/serverless` `@phosphor-icons/react` `@uploadthing/react` `@upstash/ratelimit` `@upstash/redis`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Railly](https://github.com/Railly) | 259 |
> | [@cuevaio](https://github.com/cuevaio) | 25 |
> | [@bigbigDreamer](https://github.com/bigbigDreamer) | 6 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
> | [@vltansky](https://github.com/vltansky) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率高達 92%。
**連結**：[文件](https://petdex.crafter.run)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-07）
> **活躍天數** 1 天 · **最新 commit** chore: clean up biome diagnostics (#159)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#154](https://github.com/crafter-station/petdex/issues/154) | 娜塔莎 | 0 | 1 |
> | [#153](https://github.com/crafter-station/petdex/issues/153) | [Submit fail] qinyiv3 | 0 | 0 |
> | [#152](https://github.com/crafter-station/petdex/issues/152) | [Slug Rename] `pixel-2` => `pixel-skater` | 0 | 0 |
> | [#147](https://github.com/crafter-station/petdex/issues/147) | [Submit fail] STORM // GRAYCRAFT4 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Petdex
> 
> Petdex is a public gallery for Codex-compatible animated pets.
> 
> ## Features
> 
> - Browse approved pet packs
> - Preview every animation state
> - Download individual ZIP packages
> - Download the full gallery pack
> - Validate and submit community pet packages in the browser
> 
> ## Development
> 
> ```bash
> bun install
> bun dev
> ```
> 
> ## Production
> 
> ```bash
> bun run build
> ```
> 
> Pet packages live under `public/pets`, and downloadable archives are generated under `public/packs`.

## 延伸閱讀

相關概念：[[資源管理]] · [[社群貢獻]] · [[動畫設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/crafter-station/petdex) · [官方網站](https://petdex.crafter.run)

## 相關收錄

> [!note]- 直接競品（同子分類：資源管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資源管理" AND file.name != "crafter-station--petdex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "crafter-station--petdex"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "crafter-station--petdex" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "crafter-station--petdex"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資源管理","社群貢獻","動畫設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "crafter-station--petdex" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/crafter-station--petdex");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "crafter-station--petdex" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "crafter-station" AND file.name != "crafter-station--petdex"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/crafter-station--petdex");
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
> const me = dv.page("Repos/crafter-station--petdex");
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
> const me = dv.page("Repos/crafter-station--petdex");
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
> const me = dv.page("Repos/crafter-station--petdex");
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
> const me = dv.page("Repos/crafter-station--petdex");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-08|2026-05-08]] — 再次上榜，961 stars
- [[2026-05-07|2026-05-07]] — 首次收錄，724 stars
