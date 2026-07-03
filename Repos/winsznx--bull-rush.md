---
repo: winsznx/bull-rush
url: https://github.com/winsznx/bull-rush
owner: winsznx
owner_type: User
language: TypeScript
license: MIT
description: "🐂 BULL RUSH — a 3D neon endless runner for The Black Bull ($ANSEM). React Three Fiber game + Hono/Redis API + dynamic X share cards. Play → trybullrush.xyz"
homepage: "https://trybullrush.xyz"
stars: 681
stars_per_day: 114
forks: 1
open_issues: 0
created: 2026-06-25
pushed_at: 2026-07-01
first_seen: 2026-07-02
week: "2026-W27"
month: "2026-07"
category: "遊戲"
subcategory: "3D 遊戲"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-02
use_case: "一款 3D 霓虹無盡跑者遊戲，結合 Hono API 和 Redis，讓玩家挑戰全球排行榜。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-09"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 1540
readme_length: 2604
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-02"
star_history: "2026-07-02:681"
tags:
  - github
  - "category/遊戲"
  - "lang/typescript"
  - "topic/3d"
  - "topic/crypto"
  - "topic/endless_runner"
  - "topic/game"
  - "topic/hono"
aliases:
  - "bull-rush"
  - "winsznx/bull-rush"
  - "一款 3D 霓虹無盡跑者遊戲，結合 Hono API 和 Redis，讓玩家挑戰全球排行榜。"
---

# bull-rush

**681** stars · **114** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/winsznx--bull-rush");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`3d` `crypto` `endless-runner` `game` `hono` `memecoin` `react` `react-three-fiber` `redis` `solana` `threejs` `typescript` `vite` `web-game` `webgl`

> [!summary] 一句話摘要
> 一款 3D 霓虹無盡跑者遊戲，結合 Hono API 和 Redis，讓玩家挑戰全球排行榜。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (114 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 Web 環境中開發 3D 遊戲的前端工程師和遊戲開發者。
> **一句話重點** 這款遊戲展示了如何將 3D 技術與社交元素結合，創造出一個有趣且具挑戰性的遊戲體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/winsznx--bull-rush");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 遊戲" && p.file.name !== "winsznx--bull-rush" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 遊戲 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到一個有趣的 3D 遊戲體驗，值得嘗試。

> [!abstract] 核心創新
> 結合了即時排行榜和社交分享功能的 3D 無盡跑者遊戲。

## 專案簡介

BULL RUSH 是一款 3D 霓虹無盡跑者遊戲，玩家需要在遊戲中快速前進，躲避障礙物並收集增強道具，最終登上全球排行榜。遊戲前端使用 React 19 和 React Three Fiber，搭配 three.js 和 zustand 進行狀態管理，並透過 Vite 進行快速開發和部署。後端使用 Hono 框架搭建 API，並利用 Redis 進行排行榜管理和速率限制，數據存儲則使用 Postgres。這樣的架構設計使得遊戲能夠在高效能的環境中運行，並且能夠輕鬆擴展。遊戲的分享卡片功能則是透過伺服器端動態渲染 OG 圖片來實現，這樣玩家可以輕鬆分享自己的成就。

這款遊戲的賣點在於其流暢的遊玩體驗和即時的排行榜競爭。相較於其他類似無盡跑者遊戲，BULL RUSH 的技術選型使其在效能和可擴展性上更具優勢，特別是在處理大量即時數據時。使用者在遊玩過程中可能會遇到音樂文件缺失的問題，因為遊戲的音樂需要玩家自行添加。整體來看，這款遊戲適合喜愛競技和挑戰的玩家，並且在社交分享方面提供了良好的支持。

**技術棧**：`React 19` · `React Three Fiber` · `three.js` · `Vite` · `Hono` · `Redis` · `Postgres`

## 重點功能

- 3D 遊戲引擎 — 使用 React Three Fiber 和 three.js 實現流暢的 3D 遊戲體驗。
- 即時排行榜 — 利用 Redis 的排序集合功能，實現即時更新的全球排行榜。
- 自定義分享卡片 — 動態生成 OG 圖片，方便玩家分享成就至社交媒體。
- 增強道具系統 — 玩家可以在遊戲中收集各種增強道具，提升遊玩體驗。
- 音效合成 — 遊戲中的音效由瀏覽器合成，無需額外音樂文件即可運行。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動遊戲
```bash
npm run dev
```
3. 啟動 API
```bash
cd server && railway run npm run dev
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm run dev          # http://localhost:8080",
  "預期輸出": "啟動本地開發伺服器，並在瀏覽器中顯示遊戲。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 681 stars（114/天），forks 1（0.1%），顯示出穩定的增長。該專案由 winsznx 開發，專注於結合遊戲和加密貨幣的創新玩法，解決了傳統無盡跑者遊戲在社交分享和即時競爭上的不足。遊戲的獨特設計和技術架構吸引了不少玩家和開發者的關注。隨著 WebGL 和 React Three Fiber 的普及，這種結合的遊戲形式越來越受到青睞。forks/stars 比率低，顯示出目前使用者主要是觀望，尚未進行大規模修改。

## 適合誰使用

**目標受眾**：希望在 Web 環境中開發 3D 遊戲的前端工程師和遊戲開發者。

> [!example] 使用場景
> - 遊戲開發者用它來學習如何使用 React Three Fiber 開發 3D 遊戲，因為它提供了完整的範例和結構化的代碼。
> - 前端工程師用它來探索如何將 Hono API 與 Redis 整合，因為這樣的架構能夠有效管理即時數據和排行榜。
> - 玩家用它來挑戰自己的遊戲成績並分享至社交媒體，因為遊戲的分享卡片功能讓成就展示變得簡單而有趣。

## 架構分析

BULL RUSH 採用前後端分離的架構，前端使用 React 和 React Three Fiber 進行 3D 遊戲開發，後端則使用 Hono 框架搭建 API。這樣的設計使得前端能夠專注於遊戲的視覺效果和用戶互動，而後端則負責數據的管理和即時更新。遊戲的數據流通過 API 進行，前端透過 API 獲取排行榜數據和遊戲狀態。這種架構的代價在於需要維護兩個獨立的系統，並確保它們之間的通訊穩定。擴展性方面，這種設計能夠輕鬆增加新功能和擴展遊戲內容，但也可能導致後端的負擔增加，特別是在高流量時期。

## 技術深入分析

BULL RUSH 的核心技術機制是基於 React 和 React Three Fiber，這使得開發者能夠利用 React 的組件化優勢來構建 3D 遊戲。遊戲中使用了 three.js 來處理 3D 渲染，並且結合了 zustand 進行狀態管理，這樣的選擇使得遊戲在性能上表現良好。後端使用 Hono 框架搭建 API，並利用 Redis 進行即時數據處理，這樣的設計能夠支持高並發的用戶請求。遊戲的效能在於能夠快速響應玩家的操作，並且在高流量時期仍能保持穩定。設計上選擇了現代的 JavaScript 技術棧，這使得開發者能夠快速上手，但也帶來了對於新技術的學習曲線。技術風險方面，隨著用戶量的增加，後端可能面臨性能瓶頸，特別是在排行榜更新的時候。整合方面，這款遊戲可以與現有的 Web 生態系統良好整合，特別是與其他使用 React 的應用程式。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了完整的安裝和使用說明，並包含範例指令。安裝過程相對順暢，但需要注意後端的依賴配置。文件目前僅提供英文，缺乏多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 流暢的 3D 遊戲體驗，適合喜愛競技的玩家。
> - 即時排行榜功能，增加了遊戲的競爭性和社交性。
> - 使用現代技術棧，便於開發和維護。

> [!danger] 缺點
> - 音樂和音效需要玩家自行添加，影響遊戲的完整性。
> - 後端架構較為複雜，對於小型開發者可能不太友好。
> - 目前社群活躍度較低，可能缺乏即時的技術支持。

> [!warning] 注意事項
> - 遊戲音樂需要玩家自行添加，缺乏內建音樂文件。
> - 後端需要 Redis 和 Postgres 的支持，對於小型專案可能過於複雜。
> - 僅支援現代瀏覽器，舊版瀏覽器可能無法正常運行。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人開發者進行探索和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 遊戲音樂需要玩家自行添加，缺乏內建音樂文件
  - 解法：玩家需自行將音樂文件放入指定資料夾
- **[HIGH]** 後端需要 Redis 和 Postgres 的支持，對於小型專案可能過於複雜
  - 解法：考慮使用簡化的後端架構進行開發
- [MEDIUM] 僅支援現代瀏覽器，舊版瀏覽器可能無法正常運行
  - 解法：建議使用最新版本的 Chrome 或 Firefox

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 提供了完整的技術棧和範例，便於快速開發。 |
| 個人開發者進行學習 | 適合 | 能夠學習到現代 3D 遊戲開發的技術和架構。 |
| 大型商業遊戲開發 | 不適合 | 目前尚未成熟，缺乏穩定的社群支持和文檔。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到一個有趣的 3D 遊戲體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：遊戲本身不需要高權限運行，且不存取敏感資料。依賴的第三方服務需確保安全性，特別是在使用 Redis 和 Postgres 時。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/winsznx--bull-rush");
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
> const me = dv.page("Repos/winsznx--bull-rush");
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
| Forks | 1 |
| Open Issues | 0 |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-25 |
| 官方網站 | [Link](https://trybullrush.xyz) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/winsznx/bull-rush) |
| Topics | `3d` `crypto` `endless-runner` `game` `hono` `memecoin` `react` `react-three-fiber` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@react-three/drei` `@react-three/fiber` `@react-three/postprocessing` `howler` `react` `react-dom` `three` `zustand` `@types/howler` `@types/react` `@types/react-dom` `@types/three` `@vitejs/plugin-react` `terser` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 81
>     "CSS" : 15
>     "JavaScript" : 2
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@winsznx](https://github.com/winsznx) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度一般，尚未形成大型用戶基礎。
**連結**：[文件](https://trybullrush.xyz)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-01）
> **活躍天數** 1 天 · **最新 commit** BULL RUSH — 3D neon endless runner (game + Hono API + share cards)

## README 摘錄

> [!info]- 展開查看原文 README
> # 🐂 BULL RUSH
> 
> A fast, dramatic **3D neon endless runner** for The Black Bull ($ANSEM) and the memecoin trenches. Charge forward, dodge Jeets / Snipers / MEV, grab powerups, and climb a global leaderboard — then share your run as a custom card.
> 
> **Play:** [trybullrush.xyz](https://trybullrush.xyz)
> 
> ---
> 
> ## Stack
> 
> - **Game (frontend):** React 19 + [React Three Fiber](https://github.com/pmndrs/react-three-fiber) + three.js + `@react-three/postprocessing` (bloom) + zustand + Vite. Deployed as a static site on **Cloudflare Pages**.
> - **API (backend):** [Hono](https://hono.dev) on Node + **Redis** (leaderboards via sorted sets, rate limiting, one-time run tokens) + **Postgres** (source of truth). Deployed on **Railway**.
> - **Share cards:** dynamic OG image rendered server-side with `@napi-rs/canvas`.
> 
> ## Project layout
> 
> ```
> src/                 # the game (R3F)
>   three/             # Canvas, Bull, Track, Obstacles, Game
>   ui/                # HTML/CSS overlays (menu, gate, HUD, board, share)
>   data/              # questions, ranks, hazards
>   store.ts           # zustand game state + per-frame refs
>   api.ts             # thin client for the API (offline-safe)
> functions/           # Cloudflare Pages Function (/s share page)
> server/              # the Hono API (routes, redis, postgres, anti-cheat, OG card)
> public/              # static assets (skybox, textures, logo, favicon, styles)
> ```
> 
> ## Local development
> 
> **Game:**
> ```bash
> npm install
> npm run dev          # http://localhost:8080
> ```
> 
> **API** (needs Redis + Postgres; uses the Railway ones via the CLI):
> ```bash
> cd server
> npm install
> railway run npm run dev
> ```
> 
> Environment: the game reads `VITE_API_URL` (in `.env.production`) — the public API base. The API reads `DATABASE_URL`, `REDIS_URL`, `HMAC_SECRET`, `ALLOWED_ORIGIN`, `GAME_URL` (all set in Railway, never committed).
> 
> ## Build & deploy
> 
> ```bash
> npm run build                                   # game -> dist/
> npx wrangler pages deploy dist --project-name bull-rush --branch main   # -> Cloudflare Pages
> 
> cd server && railway up --service bull-rush-api # API -> Railway
> ```
> 
> ## A note on the music 🎵
> 
> The soundtrack (Ansem's favorite tracks) is **not** included in this repo — those files are copyrighted and kept local only. Drop your own `.mp3`s into `public/assets/audio/music/` matching the names in `src/audio.ts` (`super-rush`, `butterfly-war`, `night-cloud`, `green-motion`, `vamp-charge`). SFX are synthesized in-browser, so the game runs fine without them.
> 
> ## License
> 
> [MIT](./LICENSE)
> 
> *Fan-made arcade game. Not financial advice, not an official endorsement.*

## 延伸閱讀

相關概念：[[WebGL]] · [[React]] · [[3D 遊戲開發]]

相關專案：[[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[kanavtwtgg--birds.cafe|kanavtwtgg/birds.cafe]] · [[levy-street--world-of-claudecraft|levy-street/world-of-claudecraft]]

[GitHub](https://github.com/winsznx/bull-rush) · [官方網站](https://trybullrush.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 遊戲）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 遊戲" AND file.name != "winsznx--bull-rush"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "winsznx--bull-rush"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "winsznx--bull-rush" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "winsznx--bull-rush"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["WebGL","React","3D 遊戲開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "winsznx--bull-rush" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/winsznx--bull-rush");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "winsznx--bull-rush" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "winsznx" AND file.name != "winsznx--bull-rush"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/winsznx--bull-rush");
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
> const me = dv.page("Repos/winsznx--bull-rush");
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
> const me = dv.page("Repos/winsznx--bull-rush");
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
> const me = dv.page("Repos/winsznx--bull-rush");
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
> const me = dv.page("Repos/winsznx--bull-rush");
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

> **2026-07-02** — 首次收錄
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

- [[2026-07-02|2026-07-02]] — 首次收錄，681 stars
