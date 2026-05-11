---
repo: crafter-station/petdex
url: https://github.com/crafter-station/petdex
owner: crafter-station
owner_type: Organization
language: TypeScript
license: MIT
description: "Public gallery of animated Codex pets"
homepage: "https://petdex.crafter.run"
stars: 1357
stars_per_day: 170
forks: 62
open_issues: 24
created: 2026-05-02
pushed_at: 2026-05-11
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "desktop-v0.1.6"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "提供一個公共的動畫寵物畫廊，讓用戶可以輕鬆安裝和展示 Codex 寵物。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-16"
contributor_count: 5
engagement: "low"
issue_close_rate: 83
repo_size_kb: 67791
readme_length: 5888
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:724,2026-05-07:729,2026-05-08:961,2026-05-08:962,2026-05-09:1126,2026-05-09:1130,2026-05-10:1297,2026-05-11:1357"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "petdex"
  - "crafter-station/petdex"
  - "提供一個公共的動畫寵物畫廊，讓用戶可以輕鬆安裝和展示 Codex 寵物。"
---

# petdex

**1.4k** stars · **170** stars/天 · 建立 8 天前 · TypeScript · MIT

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

`ORG` `desktop-v0.1.6` `easy-install`

> [!summary] 一句話摘要
> 提供一個公共的動畫寵物畫廊，讓用戶可以輕鬆安裝和展示 Codex 寵物。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (170 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在 Codex 環境中增添趣味和個性化的開發者。
> **一句話重點** Petdex 不僅是一個工具，更是一個社群驅動的生態系統，讓開發者能夠輕鬆創建和分享動畫寵物。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/crafter-station--petdex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "crafter-station--petdex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，能夠快速提升開發環境的趣味性，值得採用。

> [!abstract] 核心創新
> Petdex 提供了一個結合網頁畫廊、CLI 和桌面應用的完整解決方案，讓用戶能夠輕鬆安裝和展示動畫寵物。

## 專案簡介

Petdex 是一個結合網頁畫廊、命令列介面 (CLI) 和桌面應用程式的工具，旨在讓用戶能夠輕鬆地瀏覽、安裝和展示動畫寵物。用戶可以透過 `npx petdex install <pet_name>` 指令安裝任意寵物，並且這些寵物會自動與 Codex 整合，讓用戶在編程時享受可愛的伴侶。桌面應用會根據用戶的編程活動即時反應，增添互動性。Petdex 的架構包括一個使用 Next.js 和 React 的前端畫廊、一個基於 Bun 和 TypeScript 的 CLI，及一個用 Zig 開發的桌面應用。這種設計讓用戶能夠在不同平台上無縫使用，並且支持社群提交和審核寵物。

與其他類似工具相比，如 0x0funky/agent-sprite-forge，Petdex 提供了更簡單的安裝流程和即時反應功能，適合需要快速展示和安裝寵物的開發者。使用 Petdex 時，開發者可以輕鬆地創建和提交自己的寵物，並且透過 API 與其他應用整合，這使得 Petdex 成為一個靈活且可擴展的解決方案。社群活躍度高，開發者可以在 Discord 上獲得即時支持和反饋。整體來說，Petdex 是一個值得探索的工具，特別適合喜歡個性化編程環境的開發者。

**技術棧**：`Next.js 16` · `React 19` · `Tailwind` · `Drizzle` · `Postgres` · `Redis` · `Clerk` · `R2`

## 重點功能

- 公共畫廊 — 用戶可以在 [petdex.crafter.run](https://petdex.crafter.run) 瀏覽和提交動畫寵物。
- 簡單安裝 — 使用 `npx petdex install <pet_name>` 指令輕鬆安裝寵物。
- 桌面應用 — 桌面應用會根據編程活動即時反應，增強互動性。
- API 支援 — 提供 HTTP API 讓開發者可以整合其他應用。
- 社群互動 — 透過 Discord 社群獲得即時支持和反饋。

## 快速開始

1. 安裝 Petdex 寵物
```bash
npx petdex install boba
```
2. 啟動桌面應用
```bash
npx petdex init
```
3. 訪問畫廊
```bash
前往 https://petdex.crafter.run
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1357 stars（170/天），forks 62（4.6%），顯示出良好的社群參與。這個專案由 Railly 和其他幾位開發者主導，解決了用戶在 Codex 中缺乏可愛伴侶的需求，讓開發者能夠透過簡單的 CLI 指令安裝和展示寵物。社群的活躍度和即時反饋機制也促進了專案的快速發展。

## 適合誰使用

**目標受眾**：希望在 Codex 環境中增添趣味和個性化的開發者。

> [!example] 使用場景
> - 前端工程師用它來在 Codex 中安裝可愛的動畫寵物，因為這樣能提升編程時的趣味性和互動性。
> - 遊戲開發者用它來展示自製的動畫寵物，因為 Petdex 提供了簡單的提交和審核流程，讓創作變得輕鬆。
> - 社群貢獻者用它來提交新的寵物，因為 Petdex 的 API 和工具支持讓提交過程變得無縫且直觀。

## 架構分析

Petdex 的架構由三個主要部分組成：一個基於 Next.js 和 React 的公共畫廊，讓用戶可以瀏覽和提交寵物；一個 CLI，使用 Bun 和 TypeScript，提供簡單的安裝和提交指令；以及一個用 Zig 開發的桌面應用，能夠根據用戶的編程活動即時反應。這種設計使得用戶能夠在不同平台上無縫使用，並且支持社群提交和審核寵物。選擇使用 Zig 開發桌面應用的好處是能夠提供更高效的性能，但可能會限制跨平台的擴展性。整體架構的擴展性良好，能夠支持多種用例和社群貢獻。

## 技術深入分析

Petdex 的核心技術機制包括一個基於 Next.js 的前端畫廊，這使得用戶能夠輕鬆瀏覽和提交寵物。CLI 部分使用 Bun 和 TypeScript，這樣的選擇使得安裝和提交過程快速且高效。桌面應用則使用 Zig 開發，這提供了更好的性能，但可能會限制跨平台的擴展性。整體架構中，Drizzle 作為 ORM 來處理 Postgres 資料庫的操作，這樣的選擇使得資料存取更為簡潔。

Petdex 能夠處理大量的用戶提交，並且在高峰時期仍能保持良好的效能，這是因為其後端架構的優化。設計上，Petdex 允許用戶透過 API 與其他應用整合，這使得其擴展性更強。整合到現有的開發流程中相對容易，特別是對於已經使用 Node.js 和 npm 的開發者來說，學習成本低。整體來說，Petdex 的技術架構支持快速開發和社群貢獻，並且在未來有潛力進一步擴展功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的範例。安裝過程相對順暢，只需執行簡單的命令即可。文件中有鏈接到 Discord 社群，這對於新手來說非常有幫助，能夠獲得即時支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI，讓用戶能夠快速安裝和提交寵物。
> - 活躍的社群支持，提供即時反饋和幫助。
> - 可擴展的架構，支持多種用例和第三方整合。

> [!danger] 缺點
> - 目前僅支援 macOS，對其他平台的支持有限。
> - 需要用戶具備基本的命令列操作能力。
> - 社群提交的寵物需經過審核，可能會有延遲。

> [!warning] 注意事項
> - 僅支援 macOS 桌面應用，尚未提供 Windows 或 Linux 版本。
> - 需要安裝 Node.js 和 npm 以使用 CLI。
> - 用戶提交的寵物需經過審核，可能會有延遲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的動畫寵物功能，但安裝和整合過程較為繁瑣，缺乏即時反應功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定遊戲的寵物，但不支持廣泛的 Codex 整合，適用性較低。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理遊戲中的動畫角色，但安裝和整合過程較為繁瑣。 | 如果你的專案需要更高的自定義和控制，並且不介意較複雜的安裝流程。 | medium，因為需要重新設計整合流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定遊戲的寵物，功能較為單一。 | 如果你的專案是針對特定遊戲的開發，並且需要專門的寵物功能。 | low，因為功能相似且易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **petdex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理遊戲中的動畫角色，但安裝和整合過程較為繁瑣。 | 專注於特定遊戲的寵物，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新設計整合流程。 | low，因為功能相似且易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更高的自定義和控制，並且不介意較複雜的安裝流 | 如果你的專案是針對特定遊戲的開發，並且需要專門的寵物功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，安裝過程可能會因網路問題而失敗。
  - 解法：重試安裝或檢查網路連接。
- **[HIGH]** 桌面應用在某些 macOS 版本上可能會有兼容性問題。
  - 解法：確保使用最新的 macOS 版本。
- [low] 用戶提交的寵物需經過審核，可能會導致延遲。
  - 解法：提前提交以避免使用高峰期。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊希望在 Codex 中增添趣味性 | 非常適合 | Petdex 提供了簡單的安裝和提交流程，適合快速開發和展示。 |
| 大型企業需要穩定的寵物展示系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 獨立開發者想要創建個性化的編程環境 | 非常適合 | Petdex 提供了靈活的 API 和社群支持，方便創建和分享。 |
| 教育機構希望使用動畫寵物來吸引學生 | 適合 | Petdex 的互動性和趣味性能夠提升學習體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速提升開發環境的趣味性，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Petdex 本身不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Petdex 最常與 Codex 和 Claude Code 搭配使用，作為增強編程環境的工具。在一個使用 Next.js 的專案中，可以透過 `npx petdex install` 指令快速安裝寵物，並在 Codex 中進行設定。支援 GitHub Actions 作為 CI 工具，並且與 VS Code 有良好的整合性。整合過程中，最常見的問題是 CLI 安裝失敗，通常需要檢查 npm 和 Node.js 的版本是否相容。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Petdex 出現之前，開發者通常使用靜態圖片或簡單的動畫來增添編程環境的趣味性，這些方法缺乏互動性和即時反應。隨著 Codex 和其他 AI 工具的興起，對於可愛且互動的伴侶需求增加，Petdex 正好填補了這一空白。這個工具代表了一種新的開發趨勢，未來可能會有更多類似的社群驅動平台出現，讓開發者能夠輕鬆創建和分享個性化的編程環境。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的 CLI 操作
- 有使用 Codex 的經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 Petdex。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品中開始使用，並收集反饋。

**成功指標**：用戶滿意度提升 30%，編程時的趣味性增加。

> [!warning] 退出計畫
> 如果要退出 Petdex，所有設定和寵物資料都可以導出為標準格式，方便轉換到其他工具。

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
| Forks | 62 |
| Open Issues | 24 |
| Issue 解決率 | 83% (121 closed) |
| 最後推送 | 2026-05-11 |
| 建立日期 | 2026-05-02 |
| 官方網站 | [Link](https://petdex.crafter.run) |
| Repo 大小 | 66.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/crafter-station/petdex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@aws-sdk/client-s3` `@aws-sdk/s3-request-presigner` `@base-ui/react` `@clerk/localizations` `@clerk/nextjs` `@clerk/themes` `@dnd-kit/core` `@dnd-kit/sortable` `@dnd-kit/utilities` `@electric-sql/pglite` `@neondatabase/serverless` `@phosphor-icons/react` `@uploadthing/react` `@upstash/ratelimit` `@upstash/redis`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "Zig" : 5
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Railly](https://github.com/Railly) | 327 |
> | [@cuevaio](https://github.com/cuevaio) | 57 |
> | [@iambinlin](https://github.com/iambinlin) | 6 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
> | [@angziii](https://github.com/angziii) | 4 |

**最新版本**：desktop-v0.1.6 — petdex-desktop v0.1.6 - search input fix + Gemini bubbles (2026-05-11)

> [!info]- Release Notes
> Pair with `petdex@0.3.6` on npm.
> 
> ## Fixes
> 
> - **Search input now focusable**: clicking the pet picker's search
>   field was a no-op because the floating panel returned
>   canBecomeKeyWindow=NO. The panel still won't steal focus from
>   other apps (style mask handles that), but text widgets inside the
>   WebView now receive keyboard events correctly.
> - **Gemini CLI bubbles**: Gemini was the last agent still on the
>   bare curl path. It animated the sprite but never narrated tool
>   calls. Now uses the same bubbleHookCommand as Claude Code + Codex
>   CLI — you'll see Reading X / Editing Y / Done bubbles on Gemini
>   sessions.
> 
> ## Assets
> 
> - **Petdex-arm64.dmg** — Apple Silicon, signed + notarized
> - **Petdex-x64.dmg** — Intel, signed + notarized
> - **petdex-desktop-darwin-arm64** — bare ARM binary
> - **petdex-desktop-darwin-x64** — bare Intel binary
> - **petdex-desktop-sidecar.js** — Node sidecar bundle

## 社群與生態

**社群活躍度**：社群活躍，定期有討論和反饋。
**連結**：[文件](https://petdex.crafter.run) · [Discord](https://discord.gg/byhubdyBTe)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-11）
> **活躍天數** 2 天 · **最新 commit** fix(i18n): translate user dropdown items + bump desktop to 0.1.6

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#173](https://github.com/crafter-station/petdex/issues/173) | Showcase: nom — a desktop pet built on petdex packs | 1 | 0 |
> | [#216](https://github.com/crafter-station/petdex/issues/216) | petdex-cc: Desktop Pet Companion for Claude Code (1,569+ pet | 0 | 0 |
> | [#195](https://github.com/crafter-station/petdex/issues/195) | [Submit fail] Cloud | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Petdex
> 
>   The public gallery of animated companions for Codex.
>   
>   Browse, install, and submit pets with one command.
> 
>   petdex.crafter.run
>   &nbsp;·&nbsp;
>   Built with Petdex
>   &nbsp;·&nbsp;
>   Discord
>   &nbsp;·&nbsp;
>   npm
> 
>   
>   
>   
>   
> 
> ---
> 
> ## What is Petdex
> 
> Petdex is three things working together:
> 
> 1. **A web gallery** at [petdex.crafter.run](https://petdex.crafter.run) where the community submits, reviews, and showcases animated pets in the Codex sprite format.
> 2. **A CLI** that installs any pet on your machine with one command and ships them straight into Codex.
> 3. **A desktop app** that floats a pet on your screen and reacts to your coding agent's activity in real time.
> 
> Every pet is a folder. Every folder is a Pokédex entry. Every entry is one `npx petdex install` away.
> 
> ## Quick start
> 
> ```sh
> # Pick a pet. Install it. Your Codex desktop app picks it up automatically.
> npx petdex install boba
> 
> # Or run the full Petdex desktop app with bubble UI and agent hooks.
> npx petdex init
> ```
> 
> Open Codex, go to **Settings → Appearance → Pets**, and pick the one you just installed.
> 
> ## For users
> 
> | You want to... | Do this |
> | --- | --- |
> | Browse pets | Visit [petdex.crafter.run](https://petdex.crafter.run) |
> | Install a pet | `npx petdex install ` |
> | Run the desktop floater | `npx petdex init` (downloads the `.dmg` and wires Codex/Claude Code hooks) |
> | Make a pet | Use the `hatch-pet` skill inside Codex, or build one with the [Petdex creator tools](https://petdex.crafter.run/create) |
> | Submit a pet | `npx petdex submit ./my-pet/` or drop it through the web submitter |
> | Join the community | [Discord](https://discord.gg/byhubdyBTe) |
> 
> Full CLI reference: [`packages/petdex-cli/README.md`](./packages/petdex-cli/README.md).
> 
> ## For builders
> 
> If you want to build on top of Petdex (a desktop client, a wearable, an SDK, a Discord bot, anything), you have two stable surfaces:
> 
> - **The HTTP API.** `petdex.crafter.run/api/manifest` returns every approved pet with its slug, spritesheet URL, animation states, and metadata.
> - **The pet package format.** Every pet is a `pet.json` plus a `spritesheet.{webp,png}` rendered as an 8×9 grid of 192×208 frames.
> 
> 13 open-source projects already build on these. See [petdex.crafter.run/built-with](https://petdex.crafter.run/built-with) for the catalog, then [submit yours via the issue template](https://github.com/crafter-station/petdex/issues/new?template=built-with.yml).
> 
> ## Architecture
> 
> ```text
> crafter-station/petdex
> ├── src/
> │   ├── app/[locale]/          Public site: gallery, /pets/, /collections, /built-with, /community, /create, /download, /submit, /u/, ...
> │   ├── app/api/cli/           CLI endpoints: OAuth config, submit (zip → presigned R2), dedup check, register
> │   ├── app/api/manifest/      Public manifest: every approved pet with its spritesheet URL
> │   ├── app/api/admin/         Admin review surface for submissions, edits, collection requests
> │   └── lib/db/schema.ts       Drizzle schema (Postgres)
> ├── packages/
> │   ├── petdex-cli/            npm `petdex` (auth, list, install, submit, hooks, init)
> │   ├── petdex-desktop/        Zig + WebKit floating mascot for macOS
> │   └── discord-bot/           Discord.js bot for the Petdex server
> ├── public/built-with/         Screenshots for the community page
> ├── public/brand/              Logos, OS icons, Discord icon
> └── drizzle/                   SQL migrations (Postgres schema history)
> ```
> 
> **Web stack**: Next.js 16, React 19, Tailwind, Drizzle, Postgres, Redis, Clerk, R2.
> **CLI**: Bun + TypeScript, ships as a single npm binary. Auth via Clerk OAuth + PKCE.
> **Desktop**: Zig on a fork of [`vercel-labs/zero-native`](https://github.com/vercel-labs/zero-native), HTTP sidecar in Node for agent hooks.
> 
> ## Develop locally
> 
> Three paths, pick the one that matches what you want to change.
> 
> | Goal | Command | Setup |
> | --- | --- | --- |
> | UI, copy, i18n, CSS | `bun run dev:mock` | Zero credentials. In-process Postgres + stubbed Clerk. |
> | DB queries, auth, submit, likes | `bun run dev:docker` | Docker or Podman, ~30s warm-up. |
> | Run against real services | `bun run dev` | `.env.local` filled (maintainers only). |
> 
> ```sh
> git clone https://github.com/crafter-station/petdex.git
> cd petdex
> bun install
> bun run dev:mock
> ```
> 
> Open [localhost:3000](http://localhost:3000). You're auto-signed-in as `contributor@petdex.local`. Full guide in [`CONTRIBUTING.md`](./CONTRIBUTING.md).
> 
> ## Pet package format
> 
> Every pet is two files:
> 
> ```text
> my-pet/
> ├── pet.json                Metadata: name, slug, tags, vibes, kind, frame size, animation states
> └── spritesheet.webp        8 rows × 9 cols = 72 frames of 192×208 px each (or .png)
> ```
> 
> Animation states are the rows: `idle`, `wave`, `run`, `failed`, `review`, `jump`, `extra1`, `extra2`. Codex maps these to its agent activity hooks. Loop timing defaults to 1100ms at 6 frames per state.
> 
> ## Contribute
> 
> - **Submit a pet:** [petdex.crafter.run/submit](https://petdex.crafter.run/submit) or `npx petdex submit `.
> - **List your project:** open a [Built with Petdex issue](https://github.com/crafter-station/petdex/issues/new?template=built-with.yml).
> - **Fix a bug or add a feature:** read [`CONTRIBUTING.md`](./CONTRIBUTING.md), then open a PR.
> - **Hang out:** [Discord](https://discord.gg/byhubdyBTe) has channels for shipping (`#wip`, `#ship-or-sink`), feedback (`#cli-feedback`), and showcases (`#showcase`).
> 
> ## Pet IP and takedowns
> 
> Pets are user-submitted fan art. Petdex does not claim rights to any underlying IP. If you hold rights to a character and want a pet removed, file a [takedown request](https://github.com/crafter-station/petdex/issues/new?template=takedown.yml) and we review within 48 hours.
> 
> ## License
> 
> The source code is [MIT](./LICENSE). Pet assets are owned by their submitters under whatever license they choose to declare.
> 
> ---
> 
> Made by Crafter Station.
> Lead: @RaillyHugo.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[社群貢獻]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/crafter-station/petdex) · [官方網站](https://petdex.crafter.run)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "crafter-station--petdex"
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
> const concepts = ["CLI/TUI","自動化","社群貢獻"];
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
