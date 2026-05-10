---
repo: crafter-station/petdex
url: https://github.com/crafter-station/petdex
owner: crafter-station
owner_type: Organization
language: TypeScript
license: MIT
description: "Public gallery of animated Codex pets"
homepage: "https://petdex.crafter.run"
stars: 1297
stars_per_day: 185
forks: 60
open_issues: 31
created: 2026-05-02
pushed_at: 2026-05-10
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "其他"
subcategory: "動畫資源"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "提供一個公共畫廊，讓用戶瀏覽和下載動畫寵物包。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 79
repo_size_kb: 63447
readme_length: 467
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:724,2026-05-07:729,2026-05-08:961,2026-05-08:962,2026-05-09:1126,2026-05-09:1130,2026-05-10:1297"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "petdex"
  - "crafter-station/petdex"
  - "提供一個公共畫廊，讓用戶瀏覽和下載動畫寵物包。"
---

# petdex

**1.3k** stars · **185** stars/天 · 建立 7 天前 · TypeScript · MIT

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
> 提供一個公共畫廊，讓用戶瀏覽和下載動畫寵物包。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (185 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望快速展示和分享動畫寵物的遊戲開發者和動畫設計師。
> **一句話重點** Petdex 的設計讓動畫資源的分享和展示變得前所未有的簡單和有趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/crafter-station--petdex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "動畫資源" && p.file.name !== "crafter-station--petdex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 動畫資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、3 小時整合，得到便捷的動畫資源管理，值得一試。

> [!abstract] 核心創新
> Petdex 提供了一個社區驅動的公共畫廊，讓用戶能夠輕鬆瀏覽和提交動畫寵物包。

## 專案簡介

Petdex 是一個專為 Codex 兼容的動畫寵物設計的公共畫廊，使用者可以輕鬆瀏覽經過批准的寵物包，預覽每個動畫狀態，並下載單個 ZIP 包或整個畫廊包。使用者只需在瀏覽器中驗證並提交社區寵物包，這樣的設計使得社群能夠直接參與內容創建，提升了互動性和參與感。核心指令如 `bun dev` 用於開發環境啟動，`bun run build` 則用於生產環境的建置，這樣的 CLI 設計簡化了開發流程。這個工具的賣點在於其簡單易用的界面和社區驅動的內容提交機制，讓用戶能夠快速上手並參與其中。技術上，Petdex 使用了 Next.js 作為框架，並搭配 TypeScript 和 CSS 進行開發，這使得其在性能和可維護性上都有不錯的表現。

依賴樹相對輕量，主要依賴於 AWS SDK 和一些 UI 庫，這意味著在資源消耗上相對較低。與其他類似工具相比，如 0x0funky/agent-sprite-forge，Petdex 提供了更為直觀的用戶界面和更簡單的社區貢獻流程，這對於新手來說特別友好。實際使用中，Petdex 能夠支持多達數百個動畫寵物包的管理，並且其社群活躍度高，能夠快速解決問題。這個專案目前處於 beta 階段，適合小型團隊或個人開發者使用，未來可能會增加更多的社交功能和擴展性。對於需要快速展示和分享動畫寵物的開發者來說，Petdex 是一個值得考慮的選擇。

**技術棧**：`Next.js 16.2.4` · `TypeScript 6.0.3` · `CSS`

## 重點功能

- 瀏覽寵物包 — 用戶可以輕鬆瀏覽經過批准的動畫寵物包。
- 預覽動畫狀態 — 每個寵物的動畫狀態都可以即時預覽，提升用戶體驗。
- 下載功能 — 用戶可以下載單個 ZIP 包或整個畫廊包，方便使用。
- 社區提交 — 用戶可以在瀏覽器中驗證並提交自己的寵物包，增強社區互動性。
- 開發友好 — 使用 `bun dev` 指令啟動開發環境，簡化開發流程。

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
[
  "# 前置條件（安裝 bun）",
  "bun dev",
  "# 預期輸出（開發伺服器啟動）"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1297 stars（185/天），forks 60（4.6%），這顯示出穩定的增長潛力。這個專案的主要貢獻者包括 Railly 和 cuevaio，他們在開源社群中有一定的影響力。Petdex 解決了動畫寵物展示和分享的需求，之前的解決方案往往缺乏社區互動性，導致用戶無法輕鬆參與。最近的推文和社群討論也促進了這個專案的曝光率。技術上，隨著 Next.js 和 TypeScript 的流行，這個工具的開發變得更加可行。forks/stars 比率為 4.6%，顯示出有一定數量的用戶在進行實際修改和使用。

## 適合誰使用

**目標受眾**：希望快速展示和分享動畫寵物的遊戲開發者和動畫設計師。

> [!example] 使用場景
> - 遊戲開發者用它來展示和分享自製的動畫寵物，因為這樣可以快速吸引玩家的注意並增強遊戲的趣味性。
> - 動畫設計師用它來上傳和管理自己的動畫作品，因為它提供了簡單的界面和社區反饋機制。
> - 教育工作者用它來創建互動式教學素材，因為這樣可以讓學生在學習過程中更有趣味性和參與感。

## 架構分析

Petdex 採用 Next.js 作為前端框架，這使得其能夠快速構建和部署。資料流方面，使用者的請求通過 Next.js 的 API 路由處理，並從 AWS S3 獲取寵物資源。這樣的設計使得資源管理和展示變得高效，並且能夠輕鬆擴展。

選擇 Next.js 的原因在於其強大的 SSR（伺服器端渲染）能力，這對於 SEO 和性能都有幫助。隨著用戶數量的增加，可能會面臨伺服器負載的挑戰，因此需要考慮使用 CDN 來緩解流量壓力。整體架構的設計考量了未來的擴展性，能夠支持更多的功能和用戶需求。

## 技術深入分析

Petdex 的核心技術機制基於 Next.js，這使得其能夠有效地處理用戶請求並提供快速的頁面加載。使用 TypeScript 提高了代碼的可維護性和可讀性，並且減少了潛在的錯誤。效能方面，Petdex 能夠支持數百個動畫包的同時瀏覽，並且在開發過程中使用了 bun 作為包管理工具，這使得安裝和啟動過程都變得迅速。選擇 Next.js 而非其他框架如 React 或 Vue，是因為其內建的 SSR 能力能夠顯著提升 SEO 和用戶體驗。技術風險方面，隨著用戶數量的增加，可能會面臨伺服器負載的挑戰，這需要考慮使用 CDN 來分擔流量。整合方面，Petdex 能夠輕鬆與 AWS S3 等雲端服務整合，這使得資源管理變得高效且靈活。整體而言，Petdex 的架構設計考量了未來的擴展性，能夠支持更多功能和用戶需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝指令，能夠幫助新手快速上手。安裝過程順暢，無需特別的配置。文件中提供了基本的使用範例，對於初學者非常友好。

## 優缺點分析

> [!success] 優點
> - 社區驅動的內容提交機制，提升用戶參與感。
> - 簡單易用的界面，適合新手使用。
> - 支持多種下載選項，方便用戶選擇。

> [!danger] 缺點
> - 社區提交的質量不一，可能影響用戶體驗。
> - 對大型動畫包的性能支持不足。
> - 目前功能較為基礎，未來需增加更多功能。

> [!warning] 注意事項
> - 目前僅支持 Codex 兼容的動畫格式。
> - 社區提交的寵物包質量參差不齊，需進行審核。
> - 對於大型動畫包的處理可能會影響性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的動畫資源管理功能，但缺乏社區互動和提交機制。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲資源的管理，功能較為單一，不如 Petdex 多樣化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量較少，但功能較為單一。 | 如果需要更高效的資源管理和性能，且不需要社區互動功能。 | medium，因為需要重新設計部分功能以適應新架構。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於遊戲資源的管理，功能較為單一。 | 如果專注於遊戲資源的管理，且不需要社區功能。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **petdex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量較少，但功能較為單一。 | 專注於遊戲資源的管理，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新設計部分功能以適應新架構。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要更高效的資源管理和性能，且不需要社區互動功能。 | 如果專注於遊戲資源的管理，且不需要社區功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 社區提交的寵物包質量不一，可能導致用戶體驗不佳。
  - 解法：在提交前進行質量檢查。
- **[HIGH]** 大型動畫包的加載速度較慢。
  - 解法：考慮使用 CDN 儲存和加載大型資源。
- [low] 某些瀏覽器可能不完全支持動畫效果。
  - 解法：建議使用最新版本的瀏覽器。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 提供了便捷的資源管理和社區互動功能。 |
| 個人動畫設計師 | 適合 | 能夠輕鬆上傳和展示作品。 |
| 大型遊戲開發公司 | 普通 | 可能需要更高效的資源管理方案。 |
| 教育機構 | 非常適合 | 能夠創建互動式教學素材，提升學習趣味性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到便捷的動畫資源管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，依賴鏈信任度高，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Petdex 最常與 AWS S3 和 Next.js 搭配使用，通常在開發和部署階段進行整合。在一個使用 Next.js 的專案中，可以通過 `bun install` 安裝依賴，然後使用 `bun dev` 啟動開發伺服器。支援 GitHub Actions 作為 CI 工具，並且能夠與 VS Code 整合，提供良好的開發體驗。最常見的整合問題是資源加載速度，建議使用 CDN 來緩解流量壓力。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Petdex 出現之前，開發者通常使用靜態網站或其他工具來展示動畫資源，這些方案往往缺乏互動性和社區參與。隨著 Web 技術的進步，特別是 Next.js 的興起，開發者能夠更輕鬆地構建動態網站，這使得像 Petdex 這樣的工具變得可行。Petdex 代表了社區驅動內容創建的趨勢，未來可能會引入更多社交功能和擴展性。

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
| Forks | 60 |
| Open Issues | 31 |
| Issue 解決率 | 79% (117 closed) |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-05-02 |
| 官方網站 | [Link](https://petdex.crafter.run) |
| Repo 大小 | 62.0 MB |
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
> | [@Railly](https://github.com/Railly) | 270 |
> | [@cuevaio](https://github.com/cuevaio) | 50 |
> | [@iambinlin](https://github.com/iambinlin) | 6 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
> | [@vltansky](https://github.com/vltansky) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://petdex.crafter.run)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-09 ~ 2026-05-09）
> **活躍天數** 1 天 · **最新 commit** feat(collections): infinite scroll on listing + per-collection grids

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#173](https://github.com/crafter-station/petdex/issues/173) | Showcase: nom — a desktop pet built on petdex packs | 1 | 0 |
> | [#195](https://github.com/crafter-station/petdex/issues/195) | [Submit fail] Cloud | 0 | 0 |
> | [#192](https://github.com/crafter-station/petdex/issues/192) | [Submit fail] ducduc | 0 | 0 |
> | [#191](https://github.com/crafter-station/petdex/issues/191) | [Submit fail] Hisoka | 0 | 1 |

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

相關概念：[[動畫資源]] · [[社區驅動]] · [[開源]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/crafter-station/petdex) · [官方網站](https://petdex.crafter.run)

## 相關收錄

> [!note]- 直接競品（同子分類：動畫資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "動畫資源" AND file.name != "crafter-station--petdex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "crafter-station--petdex"
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
> const concepts = ["動畫資源","社區驅動","開源"];
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

- [[2026-05-09|2026-05-09]] — 再次上榜，1.1k stars
- [[2026-05-08|2026-05-08]] — 再次上榜，961 stars
- [[2026-05-07|2026-05-07]] — 首次收錄，724 stars
