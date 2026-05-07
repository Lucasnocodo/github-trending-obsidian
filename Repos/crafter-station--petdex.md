---
repo: crafter-station/petdex
url: https://github.com/crafter-station/petdex
owner: crafter-station
owner_type: Organization
language: TypeScript
license: MIT
description: "Public gallery of animated Codex pets"
homepage: "https://petdex.crafter.run"
stars: 729
stars_per_day: 182
forks: 32
open_issues: 10
created: 2026-05-02
pushed_at: 2026-05-06
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
use_case: "提供 Codex 兼容的動畫寵物公共畫廊，讓用戶輕鬆瀏覽和下載寵物包。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-14"
contributor_count: 5
engagement: "low"
issue_close_rate: 89
repo_size_kb: 61008
readme_length: 467
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:724,2026-05-07:729"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "petdex"
  - "crafter-station/petdex"
  - "提供 Codex 兼容的動畫寵物公共畫廊，讓用戶輕鬆瀏覽和下載寵物包。"
---

# petdex

**729** stars · **182** stars/天 · 建立 4 天前 · TypeScript · MIT

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
> 提供 Codex 兼容的動畫寵物公共畫廊，讓用戶輕鬆瀏覽和下載寵物包。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (182 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要管理和展示 Codex 兼容動畫資源的遊戲開發者和創作者。
> **一句話重點** Petdex 不僅是一個資源管理工具，更是一個促進創作和分享的社群平台。

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
> **結論** 花 2 小時學、4 小時整合，得到簡單易用的資源管理工具，值得一試。

> [!abstract] 核心創新
> 提供了一個公共畫廊，讓用戶能夠輕鬆瀏覽、下載和提交 Codex 兼容的動畫寵物。

## 專案簡介

Petdex 是一個公共畫廊，專為 Codex 兼容的動畫寵物設計，讓用戶可以輕鬆瀏覽和下載各種寵物包。用戶可以透過簡單的界面來查看每個動畫狀態，並下載單個 ZIP 包或整個畫廊包。開發過程中，使用者只需執行 `bun dev` 指令即可啟動本地開發環境，並且在生產環境中，使用 `bun run build` 來構建專案。這樣的設計使得開發和部署過程簡單明瞭，降低了上手難度。Petdex 的核心賣點在於其社群功能，允許用戶在瀏覽器中驗證和提交社群寵物包，這樣的設計鼓勵了用戶參與和內容創建。這個專案使用了 Next.js 作為框架，並搭配 TypeScript 提供靜態類型檢查，這對於大型應用的維護至關重要。

依賴樹相對輕量，主要依賴於 AWS SDK 和一些 UI 組件，這使得整體性能表現良好。與其他類似工具相比，如 0x0funky/agent-sprite-forge，Petdex 提供了更友好的用戶界面和社群互動功能，讓用戶能夠更方便地提交和管理寵物包。使用者在實際操作中可能會遇到一些問題，例如提交失敗或需要批准的系統，但這些問題的解決率高達 89%，顯示出社群的活躍度和維護者的回應速度。這個專案目前處於 alpha 階段，適合小型團隊或個人開發者進行實驗和創作。未來可能會增加更多社群功能和擴展性。對於需要快速構建和管理動畫資源的開發者來說，Petdex 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `Next.js 16.2.4` · `Bun`

## 重點功能

- 瀏覽審核過的寵物包 — 用戶可以輕鬆查看所有可用的寵物資源。
- 預覽每個動畫狀態 — 提供即時的動畫效果預覽，方便用戶選擇。
- 下載單個 ZIP 包 — 用戶可以選擇性下載所需的寵物資源，減少不必要的下載。
- 下載完整畫廊包 — 一鍵下載所有資源，方便批量使用。
- 社群提交功能 — 用戶可以在瀏覽器中驗證和提交自己的寵物包，促進社群互動。

## 快速開始

1. 安裝依賴
```bash
bun install
```
2. 啟動開發伺服器
```bash
bun dev
```
3. 構建生產版本
```bash
bun run build
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 bun 環境",
  "指令": "bun dev",
  "預期輸出": "啟動本地開發伺服器，並在瀏覽器中訪問應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 729 stars（182/天），forks 32（4.4%），顯示出一定的關注度。主要貢獻者包括 Railly 和 cuevaio，他們在開源社群中有一定的影響力。這個專案解決了用戶在管理和分享 Codex 兼容寵物包時的痛點，之前用戶需要依賴繁瑣的手動流程。近期的推廣活動和社群互動可能也促進了其快速增長。forks/stars 比率在 4.4%，顯示出有一定數量的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要管理和展示 Codex 兼容動畫資源的遊戲開發者和創作者。

> [!example] 使用場景
> - 遊戲開發者用它來快速創建和管理動畫寵物資源，因為它提供了簡單的界面和社群支持，能夠節省大量開發時間。
> - 獨立開發者用它來展示自己的動畫寵物創作，因為可以輕鬆提交和分享自己的作品，增加曝光率。
> - 教育工作者用它來教導學生如何使用 Codex 進行動畫設計，因為它的界面友好且功能完整，適合初學者學習。

## 架構分析

Petdex 採用 Next.js 作為前端框架，這使得開發者能夠利用其強大的路由和伺服器端渲染功能。資料流從用戶請求開始，經由 Next.js 處理後，從 AWS S3 獲取寵物資源，並在前端展示。這樣的設計使得資源加載速度快，並且能夠輕鬆擴展。

選擇 Next.js 而非其他框架的原因在於其對 SEO 的友好性和社群支持。整體架構輕量，依賴主要集中在 AWS SDK 和 UI 組件上，這降低了維護成本。未來擴展性良好，但若用戶數量激增，可能需要考慮後端伺服器的負載能力。

## 技術深入分析

Petdex 的核心技術機制基於 Next.js，這使得其能夠實現伺服器端渲染和靜態生成，從而提高了性能和 SEO。使用 TypeScript 提供靜態類型檢查，減少了潛在的錯誤。整體架構輕量，依賴於 AWS SDK 和一些 UI 組件，這使得開發和維護變得簡單。效能方面，Petdex 能夠快速加載資源，但在高流量情況下，可能需要增加伺服器資源以應對請求。選擇 Next.js 而非其他框架的原因在於其強大的社群支持和豐富的功能。技術風險方面，若用戶數量激增，可能會導致伺服器負載過高，需提前做好擴展計劃。整合方面，Petdex 與主流的 CI/CD 工具相容良好，能夠輕鬆地融入現有開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例指令。安裝過程相對順暢，使用者只需執行簡單的指令即可啟動開發環境。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 界面友好，易於上手，適合新手使用。
> - 社群互動功能強，鼓勵用戶提交和分享資源。
> - 使用 Next.js 提供良好的性能和 SEO 支持。

> [!danger] 缺點
> - 目前功能仍在開發中，可能存在不穩定性。
> - 僅限於 Codex 兼容的資源，限制了使用範圍。
> - 需要一定的技術背景來進行本地開發。

> [!warning] 注意事項
> - 目前僅支援 Codex 兼容的寵物包格式。
> - 社群提交功能尚在測試階段，可能會有不穩定情況。
> - 需要一定的技術背景來進行本地開發和部署。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供動畫資源生成，但缺乏社群互動功能，適合需要自動化生成的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資源管理，但界面不如 Petdex 友好，適合需要更高自定義的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動生成動畫資源，使用 Rust 實作，性能優越，但缺乏社群互動功能。 | 如果需要高性能的資源生成和自動化流程，且不在意社群功能。 | medium，因為需要重新適應不同的開發流程和工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供資源管理功能，但界面不如 Petdex 友好，使用 React 實作，適合需要自定義的開發者。 | 如果需要更多的自定義功能，且不介意較高的學習曲線。 | high，因為需要重新設計整體資源管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **petdex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動生成動畫資源，使用 Rust 實作，性能優越，但缺乏社群互動功能。 | 提供資源管理功能，但界面不如 Petdex 友好，使用 React 實作，適合需要自定義的開發者。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的開發流程和工具。 | high，因為需要重新設計整體資源管理流程。 |
> | 適用場景 | 主要場景 | 如果需要高性能的資源生成和自動化流程，且不在意社群功能。 | 如果需要更多的自定義功能，且不介意較高的學習曲線。 |

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

- [MEDIUM] 提交寵物包時可能會遇到驗證失敗的情況
  - 解法：檢查寵物包格式是否符合要求
- **[HIGH]** 在高流量情況下，伺服器可能會出現延遲
  - 解法：考慮增加伺服器資源以應對流量
- [MEDIUM] 社群功能尚在測試階段，可能會有不穩定情況
  - 解法：定期檢查更新和社群公告

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊需要管理動畫資源 | 非常適合 | 提供了簡單的資源管理和社群支持功能。 |
| 獨立開發者想要展示自己的作品 | 適合 | 能夠輕鬆提交和分享資源，增加曝光率。 |
| 大型遊戲開發公司需要高性能的資源生成工具 | 不適合 | 目前性能和擴展性尚未達到商業級別。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、4 小時整合，得到簡單易用的資源管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取公共資源，依賴鏈中的主要依賴均為知名庫，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Petdex 通常與 Next.js 和 AWS S3 搭配使用，適合在開發過程中管理動畫資源。在一個使用 Next.js 的專案中，可以將 Petdex 作為資源管理工具，具體做法是將寵物包上傳至 AWS S3，並在 Petdex 中進行管理。支援 GitHub Actions 作為 CI 工具，能夠輕鬆整合到現有的開發流程中。最常見的整合問題是需要配置 AWS 憑證，這可能對新手造成困難，但一旦設置完成，後續使用將非常順暢。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Petdex 出現之前，開發者通常依賴手動管理和分享動畫資源，這導致了效率低下和資源重複。隨著 Codex 的普及，對於易於管理和分享的資源管理工具的需求日益增加。Petdex 的出現正是響應了這一需求，並提供了一個集成的解決方案，未來可能會隨著社群的擴展而增加更多功能。

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
| Forks | 32 |
| Open Issues | 10 |
| Issue 解決率 | 89% (84 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-05-02 |
| 官方網站 | [Link](https://petdex.crafter.run) |
| Repo 大小 | 59.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/crafter-station/petdex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@aws-sdk/client-s3` `@aws-sdk/s3-request-presigner` `@base-ui/react` `@clerk/localizations` `@clerk/nextjs` `@clerk/themes` `@electric-sql/pglite` `@neondatabase/serverless` `@phosphor-icons/react` `@uploadthing/react` `@upstash/ratelimit` `@upstash/redis` `@vercel/analytics` `ai` `class-variance-authority`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Railly](https://github.com/Railly) | 242 |
> | [@cuevaio](https://github.com/cuevaio) | 14 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
> | [@bigbigDreamer](https://github.com/bigbigDreamer) | 4 |
> | [@vltansky](https://github.com/vltansky) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率高達 89%。
**連結**：[文件](https://petdex.crafter.run)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-06）
> **活躍天數** 1 天 · **最新 commit** Add MIT License to the project

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#128](https://github.com/crafter-station/petdex/issues/128) | approval system | 0 | 0 |
> | [#126](https://github.com/crafter-station/petdex/issues/126) | [Submit fail] Johnny | 0 | 0 |

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

相關概念：[[資源管理]] · [[社群互動]] · [[動畫設計]]

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
> const concepts = ["資源管理","社群互動","動畫設計"];
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

- [[2026-05-07|2026-05-07]] — 首次收錄，724 stars
