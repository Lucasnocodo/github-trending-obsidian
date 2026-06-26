---
repo: kanavtwtgg/birds.cafe
url: https://github.com/kanavtwtgg/birds.cafe
owner: kanavtwtgg
owner_type: User
language: JavaScript
license: N/A
description: ""
homepage: ""
stars: 788
stars_per_day: 197
forks: 2
open_issues: 0
created: 2026-06-21
pushed_at: 2026-06-23
first_seen: 2026-06-23
week: "2026-W26"
month: "2026-06"
category: "遊戲"
subcategory: "模擬"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-23
use_case: "提供一個放鬆的鳥類模擬體驗，讓你在瀕臨海岸的天空中駕駛海鷗群。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-03"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 79
readme_length: 961
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-23"
star_history: "2026-06-23:550,2026-06-24:717,2026-06-25:767,2026-06-26:788"
tags:
  - github
  - "category/遊戲"
  - "lang/javascript"
  - easy_install
aliases:
  - "birds.cafe"
  - "kanavtwtgg/birds.cafe"
  - "提供一個放鬆的鳥類模擬體驗，讓你在瀕臨海岸的天空中駕駛海鷗群。"
---

# birds.cafe

**550** stars · **550** stars/天 · 建立 1 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> 提供一個放鬆的鳥類模擬體驗，讓你在瀕臨海岸的天空中駕駛海鷗群。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (550 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 喜歡放鬆和自然體驗的玩家，尤其是對飛行模擬有興趣的人。
> **一句話重點** 這個專案展示了如何透過簡單的設計來創造出放鬆的體驗，讓用戶能夠享受飛行的樂趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模擬" && p.file.name !== "kanavtwtgg--birds.cafe" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模擬 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案提供了一個無壓力的鳥類飛行模擬體驗，讓用戶能夠隨意探索。

## 專案簡介

這個專案是一個瀏覽器基於的鳥類模擬，讓用戶可以在沒有壓力的環境中，駕駛一群海鷗在海洋上空飛行。用戶可以使用鍵盤的方向鍵來操控飛行，並透過 `+` 和 `-` 鍵來調整速度，還能透過空白鍵切換 V 形隊形。這樣的設計讓用戶能夠享受飛行的樂趣，並體驗不同的天氣變化，如白天、夜晚、暴風雨等。這種物理驅動的飛行模擬不僅有趣，還能帶來放鬆的感受。使用 Three.js 和 WebGL 技術，這個專案能夠在瀏覽器中流暢運行，並且在移動設備上也有良好的觸控控制體驗。這個專案的賣點在於它提供了一個無壓力的環境，讓用戶可以隨意探索，而不是傳統遊戲中的競爭和分數系統。

與其他遊戲相比，這個專案不需要完成任務或達成目標，讓用戶能夠完全沉浸在飛行的過程中。這種設計使得它更像是一種藝術體驗，而非傳統意義上的遊戲。由於沒有開放的問題，這個專案的社群活躍度目前看起來良好，未來可能會吸引更多用戶來體驗這種獨特的模擬。整體而言，這是一個適合任何想要放鬆心情的人使用的工具，特別是對於喜歡自然和飛行的人來說。使用者可以在任何時候進入這個模擬，享受平靜的飛行體驗。

**技術棧**：`JavaScript` · `HTML` · `CSS` · `Three.js`

## 重點功能

- 瀏覽器運行 — 完全在瀏覽器中運行，無需安裝任何額外軟體。
- 物理基礎飛行 — 使用物理引擎實現的飛行體驗，讓飛行更真實。
- 動態天氣 — 支援白天、夜晚、暴風雨等多種天氣變化。
- 環境音樂 — 提供舒緩的背景音樂，增強沉浸感。
- 移動設備友好 — 在手機上也能流暢運行，並支援觸控操作。

## 快速開始

1. 下載專案並解壓
```bash
git clone https://github.com/kanavtwtgg/birds.cafe.git
```
2. 啟動靜態檔案伺服器
```bash
python -m http.server 8000
```
3. 在瀏覽器中打開
```bash
http://localhost:8000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 550 stars（550/天），forks 0（0.0%），這顯示出其初期的吸引力。作者 kanavtwtgg 似乎是個新興開發者，這個專案提供了一個獨特的放鬆體驗，解決了傳統遊戲中的壓力問題。沒有明顯的觸發事件，但這種無壓力的模擬遊戲在當前的遊戲市場中是相對少見的。這個工具的成功可能與人們對於放鬆和簡單娛樂的需求有關。由於目前沒有 forks，顯示出用戶對於修改或擴展的興趣尚未形成。

## 適合誰使用

**目標受眾**：喜歡放鬆和自然體驗的玩家，尤其是對飛行模擬有興趣的人。

> [!example] 使用場景
> - 休閒玩家用它來放鬆心情，因為它提供了一個無壓力的飛行體驗，讓人能夠暫時逃離日常生活的壓力。
> - 學生用它來減壓，因為在學習期間能夠透過這種簡單的模擬來放鬆大腦，提升專注力。
> - 藝術愛好者用它來尋找靈感，因為其獨特的視覺效果和音樂能夠激發創意。

## 架構分析

這個專案採用瀏覽器端的架構，利用 Three.js 和 WebGL 技術實現3D 渲染。這樣的設計使得用戶無需安裝任何軟體，直接在瀏覽器中即可體驗。資料流方面，使用者的輸入（如方向鍵和速度調整）會即時影響飛行的物理狀態，並透過動畫呈現出來。

這種設計的優勢在於降低了使用門檻，但可能在高負載情況下影響效能。由於專案目前沒有依賴其他大型框架，整體架構相對輕量，易於維護和擴展。未來若要增加更多功能（如多人模式），可能需要重新考量架構設計以支援更複雜的資料流和伺服器端邏輯。

## 技術深入分析

專案的核心技術機制是基於 Three.js 的 3D 渲染，利用 WebGL 提供的硬體加速來實現流暢的動畫效果。這種技術選擇使得專案能夠在現代瀏覽器中運行，並且支援各種設備。效能方面，由於專案主要依賴於瀏覽器的渲染能力，因此在高性能設備上能夠提供更佳的體驗，但在低性能設備上可能會出現卡頓現象。設計上選擇了輕量級的 JavaScript 框架，這樣的選擇使得專案易於維護，但在未來若要擴展功能，可能需要考慮更複雜的架構。技術風險方面，隨著使用者數量的增加，可能會對伺服器的負載造成壓力，尤其是在未來考慮增加多人模式時。整合方面，由於專案是獨立運行的，與主流框架的整合難度較低，但若要與其他工具鏈結合，可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了簡單的運行指令，讓新手能夠快速上手。安裝過程順暢，無需複雜的配置。雖然沒有詳細的入門指南，但基本的使用說明已經足夠讓用戶開始體驗。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 無壓力的遊戲體驗，適合放鬆心情。
> - 簡單易用，無需安裝即可運行。
> - 動態天氣和環境音樂增強沉浸感。

> [!danger] 缺點
> - 功能較為單一，缺乏競爭性元素。
> - 不支援多人遊玩，限制了社交互動。
> - 對於低性能設備的支援不足，可能影響體驗。

> [!warning] 注意事項
> - 僅支援現代瀏覽器，舊版瀏覽器可能無法正常運行。
> - 對於低性能設備，可能會影響流暢度。
> - 不支援多玩家模式，僅限單人體驗。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
| Forks | 0 |
| Open Issues | 0 |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-21 |
| Repo 大小 | 79 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kanavtwtgg/birds.cafe) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 92
>     "HTML" : 4
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kanavtwtgg](https://github.com/kanavtwtgg) | 2 |

## 社群與生態

**社群活躍度**：目前社群活躍度良好，無開放問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-21 ~ 2026-06-21）
> **活躍天數** 1 天 · **最新 commit** Add files via upload

## README 摘錄

> [!info]- 展開查看原文 README
> # birds.cafe ☕️🦜
> 
> **Imagine if you could just fly like a bird.**
> 
> No missions. No scores. No stress.
> 
> A relaxing, browser-based bird sim where you steer a flock of seagulls in V-formation over the ocean — through day, night, storms, rain, and lightning.
> 
> **Live:** [birds.cafe](http://birds.cafe)
> 
> It's not really a "game." It's a quiet, soothing experience.
> 
> ## Features
> 
> - Runs fully in the browser (WebGL / Three.js)
> - Physics-based flight with flock V-formation
> - Dynamic weather: day, night, storm, rain, lightning
> - Ambient music
> - Smooth on mobile with touch controls
> 
> ## Controls
> 
> | Input | Action |
> |-------|--------|
> | Arrow keys | Steer |
> | `+` / `-` | Speed up / slow down |
> | Space | Toggle V-formation |
> | Weather buttons | Day / Night / Storm |
> 
> On mobile, use the on-screen buttons.
> 
> ## Run locally
> 
> Serve the folder with any static file server:
> 
> ```bash
> python -m http.server 8000
> ```
> 
> Then open [http://localhost:8000](http://localhost:8000).

## 延伸閱讀

相關概念：[[遊戲設計]] · [[模擬]] · [[WebGL]]

相關專案：[[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[levy-street--world-of-claudecraft|levy-street/world-of-claudecraft]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]]

[GitHub](https://github.com/kanavtwtgg/birds.cafe)

## 相關收錄

> [!note]- 直接競品（同子分類：模擬）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模擬" AND file.name != "kanavtwtgg--birds.cafe"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "kanavtwtgg--birds.cafe"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "kanavtwtgg--birds.cafe" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "kanavtwtgg--birds.cafe"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲設計","模擬","WebGL"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "kanavtwtgg--birds.cafe" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kanavtwtgg--birds.cafe" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kanavtwtgg" AND file.name != "kanavtwtgg--birds.cafe"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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
> const me = dv.page("Repos/kanavtwtgg--birds.cafe");
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

> **2026-06-23** — 首次收錄
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

- [[2026-06-26|2026-06-26]] — 再次上榜，788 stars
- [[2026-06-25|2026-06-25]] — 再次上榜，767 stars
- [[2026-06-24|2026-06-24]] — 再次上榜，717 stars
- [[2026-06-23|2026-06-23]] — 首次收錄，550 stars
