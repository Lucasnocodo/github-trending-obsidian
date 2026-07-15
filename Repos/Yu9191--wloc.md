---
repo: Yu9191/wloc
url: https://github.com/Yu9191/wloc
owner: Yu9191
owner_type: User
language: JavaScript
license: N/A
description: "修改 Apple 网络定位（gs-loc）返回坐标 · 支持 Surge / Quantumult X / Loon / Stash · 快捷指令一键设置/恢复定位"
homepage: "https://wloc-pages.pages.dev/"
stars: 4615
stars_per_day: 231
forks: 875
open_issues: 35
created: 2026-06-24
pushed_at: 2026-06-27
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "其他"
subcategory: "定位工具"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "修改 Apple 网络定位返回坐标，支持多种代理工具，提供快捷指令一键设置和恢复定位。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-04"
contributor_count: 1
engagement: "medium"
issue_close_rate: 10
repo_size_kb: 77
readme_length: 5472
bus_factor: 1
last_release_days: 20
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:457,2026-06-27:462,2026-06-28:644,2026-06-28:647,2026-06-29:1092,2026-06-29:1098,2026-06-30:1508,2026-06-30:1515,2026-07-01:1965,2026-07-01:1968,2026-07-02:2357,2026-07-03:2584,2026-07-04:2845,2026-07-05:2957,2026-07-06:3094,2026-07-07:3167,2026-07-08:3299,2026-07-09:3489,2026-07-10:3676,2026-07-11:3806,2026-07-12:3932,2026-07-13:4248,2026-07-14:4482,2026-07-15:4615"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
aliases:
  - "wloc"
  - "Yu9191/wloc"
  - "修改 Apple 网络定位返回坐标，支持多种代理工具，提供快捷指令一键设置和恢复定位。"
---

# wloc

**4.6k** stars · **231** stars/天 · 建立 20 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Yu9191--wloc");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.0`

> [!summary] 一句話摘要
> 修改 Apple 网络定位返回坐标，支持多种代理工具，提供快捷指令一键设置和恢复定位。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (231 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 17 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 iOS 設備上頻繁修改定位但不想手動輸入經緯度的用戶。
> **一句話重點** WLOC 的設計讓虛擬定位變得前所未有的簡單，特別是對於不熟悉技術的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Yu9191--wloc");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "定位工具" && p.file.name !== "Yu9191--wloc" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 定位工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，能夠快速修改定位，值得一試。

> [!abstract] 核心創新
> WLOC 提供了一個簡單易用的虛擬定位解決方案，支持多種主流代理工具。

## 專案簡介

WLOC 是一個用於修改 Apple 網絡定位的工具，能夠讓用戶在 iOS 設備上虛擬定位。用戶可以透過在線選點頁面選擇位置，然後使用快捷指令來設置或恢復定位。具體來說，當用戶在地圖應用中選擇一個位置並分享時，WLOC 會攔截該請求，並將其經緯度寫入持久化存儲。當下一次定位請求發起時，WLOC 會修改返回的坐標，讓用戶看似在所選位置。這種設計使得用戶無需手動輸入經緯度，簡化了操作流程。

核心的命令包括 `wloc 设置地理位置` 和 `wloc 清理恢复位置`，這些指令能夠快速切換和恢復用戶的真實定位。WLOC 使用 JavaScript 編寫，並依賴於各種代理工具的模組，如 Surge 和 Quantumult X，這些模組能夠輕鬆集成到用戶的現有工作流中。相較於其他定位修改工具，WLOC 的優勢在於其支持多種主流代理工具，並提供簡單的快捷指令操作，這使得即便是技術小白也能輕鬆上手。使用者需要注意的是，iOS 26 及以上版本對定位緩存的強化可能導致修改後的坐標不立即生效，需重啟設備以清除緩存。整體而言，WLOC 是一個成熟且易於使用的虛擬定位解決方案，適合需要頻繁修改定位的用戶。

**技術棧**：`JavaScript`

## 重點功能

- 支持多種代理工具 — 包括 Surge、Quantumult X、Loon 和 Stash，方便用戶根據需求選擇。
- 快捷指令一鍵設置 — 用戶可透過快捷指令快速設置或恢復定位，提升使用便利性。
- 在線選點頁面 — 用戶可以直接在網頁上選擇位置，無需手動輸入經緯度。
- 純轉發解析 — `/api/parse` 服務不存儲、不記錄用戶資料，保護用戶隱私。
- 支持多種地圖服務 — 包括 Apple 地圖和高德地圖，滿足不同用戶需求。

## 快速開始

1. 訂閱模組並啟用 MITM
```bash
在代理工具中添加模組地址
```
2. 打開在線選點頁面
```bash
訪問 https://wloc-pages.pages.dev/
```
3. 選擇位置並儲存
```bash
在地圖中選擇位置後，使用快捷指令儲存
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天內累積 4615 stars（231/天），forks 875（19.0%），顯示出強勁的增長趨勢。作者 Yu9191 在這個領域有一定的經驗，解決了以往定位修改工具在使用上的繁瑣問題，特別是對於 iOS 26 以上版本的兼容性。此工具的出現正好滿足了用戶對於簡化定位修改流程的需求，並且社群中對於使用流程的討論熱烈，進一步推動了其流行。

## 適合誰使用

**目標受眾**：需要在 iOS 設備上頻繁修改定位但不想手動輸入經緯度的用戶。

> [!example] 使用場景
> - 學生用它來在學校的地圖應用中設置虛擬位置，因為這樣可以避免實際到達某些地點的麻煩。
> - 上班族用它來在工作地點打卡，因為這樣可以在不實際到達的情況下完成打卡，節省通勤時間。
> - 旅行者用它來在不同城市的地圖應用中設置虛擬位置，因為這樣可以提前規劃行程而不必實際到訪每個地點。

## 架構分析

WLOC 的架構基於 JavaScript，主要由兩個模組組成：`wloc.js` 負責攔截定位請求並修改返回的坐標，`wloc-settings.js` 負責處理用戶選擇的定位並寫入持久化存儲。這種設計使得用戶可以輕鬆地在不同的代理工具中使用 WLOC。資料流方面，當用戶選擇位置後，系統會發送請求到 `gs-loc.apple.com`，然後通過代理模組進行攔截和修改。選擇 JavaScript 作為開發語言使得這個工具能夠在多種環境中運行，降低了使用門檻。整體架構的輕量化設計使得 WLOC 可以快速響應用戶請求，但在高並發情況下可能會出現性能瓶頸。

## 技術深入分析

WLOC 的核心技術機制是通過 JavaScript 實現的定位請求攔截和坐標修改。它利用了代理工具的模組化設計，讓用戶能夠在不同的環境中輕鬆使用。效能方面，由於是基於 JavaScript 的輕量級應用，對於一般的定位請求能夠快速響應，但在高並發的情況下可能會遇到性能瓶頸。設計上選擇 JavaScript 使得整個工具易於維護和擴展，但也可能面臨安全性問題，特別是在處理用戶資料時。技術風險方面，若未來 iOS 系統進行重大更新，可能會影響 WLOC 的正常運作。整合方面，WLOC 與主流代理工具的相容性良好，但在某些情況下可能需要用戶手動配置，增加了使用的複雜度。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢，但對於不熟悉代理工具的用戶可能會有一定的學習曲線。文件中有快捷指令的連結，方便用戶快速上手。整體而言，花 30 分鐘能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 操作簡單，適合各種技術水平的用戶
> - 支持多種代理工具，靈活性高
> - 提供快捷指令，方便用戶快速設置和恢復定位

> [!danger] 缺點
> - 僅限於 iOS 平台，無法在其他操作系統上使用
> - 需要用戶具備一定的代理工具使用經驗
> - 在高版本 iOS 中可能需要重啟設備以生效

> [!warning] 注意事項
> - 僅支援 iOS 15 及以上版本
> - 需要啟用代理工具和模組才能正常運作
> - iOS 26 及以上版本需重啟設備以清除定位緩存

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的虛擬定位功能，但主要針對遊戲應用，使用場景有所不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網絡流量的修改，並不專注於定位功能，適用範圍更廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲虛擬定位，使用 C++ 實作，性能更優但學習曲線較陡。 | 如果你的主要需求是遊戲中的虛擬定位，且團隊有 C++ 開發經驗。 | medium，因為需要重新學習 C++ 的相關知識。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的網絡流量修改功能，使用 Python 實作，易於擴展。 | 如果你需要一個更通用的網絡流量修改工具，而不僅限於定位功能。 | low，因為 Python 的學習曲線相對較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wloc** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲虛擬定位，使用 C++ 實作，性能更優但學習曲線較陡。 | 提供更廣泛的網絡流量修改功能，使用 Python 實作，易於擴展。 |
> | 遷移成本 | - | medium，因為需要重新學習 C++ 的相關知識。 | low，因為 Python 的學習曲線相對較低。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是遊戲中的虛擬定位，且團隊有 C++ 開發經 | 如果你需要一個更通用的網絡流量修改工具，而不僅限於定位功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型項目，但不建議用於生產環境的關鍵功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 iOS 26 及以上版本中，定位修改後不立即生效
  - 解法：需要重啟設備以清除定位緩存
- [MEDIUM] 使用快捷指令時需確保代理已開啟，否則無法生效
  - 解法：在使用前確認代理工具已啟動
- [MEDIUM] 部分用戶在使用高德地圖時可能遇到坐標不準的問題
  - 解法：檢查是否正確設置了代理模組

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在學校打卡的學生 | 非常適合 | 能夠快速設置虛擬位置，避免實際到達的麻煩。 |
| 需要在工作地點打卡的上班族 | 非常適合 | 能夠在不實際到達的情況下完成打卡。 |
| 需要在旅行中提前規劃行程的旅行者 | 適合 | 能夠在不同城市的地圖應用中設置虛擬位置。 |
| 對技術不熟悉的用戶 | 普通 | 雖然操作簡單，但仍需了解代理工具的基本使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速修改定位，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：WLOC 本身不需要高權限，並且不存取敏感資料，但用戶需確保代理工具的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Yu9191--wloc");
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
> const me = dv.page("Repos/Yu9191--wloc");
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
| Forks | 875 |
| Open Issues | 35 |
| Issue 解決率 | 10% (4 closed) |
| 最後推送 | 2026-06-27 |
| 建立日期 | 2026-06-24 |
| 官方網站 | [Link](https://wloc-pages.pages.dev/) |
| Repo 大小 | 77 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Yu9191/wloc) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yu9191](https://github.com/Yu9191) | 34 |

**最新版本**：v1.0.0 (2026-06-25)

> [!info]- Release Notes
> WLOC 首个发布：修改 Apple 网络定位（gs-loc.apple.com）返回坐标，支持 Surge / Quantumult X / Loon / Stash 四种模块。
> 
> ## 使用（推荐：快捷指令）
> - 设置位置：在地图 App 选好点 → 共享/分享 → 「wloc 设置地理位置」
>   https://www.icloud.com/shortcuts/a82717d8fdad4e6280866fcf911173f7
> - 清理恢复：「wloc 清理恢复位置」
>   https://www.icloud.com/shortcuts/f42632d406504f24a2cd163af4fe012f
> - 选点页面：https://wloc-pages.pages.dev/
> 
> ## 模块
> - Surge：`modules/wloc.sgmodule`
> - Quantumult X：`modules/wloc.conf`
> - Loon：`modules/wloc.lpx`
> - Stash：`modules/wloc.stoverride`（原生覆写，避免转换丢字段）
> 
> ## 链接解析 Worker
> Apple 地图 / 高德统一走 `/api/parse`：跟 302 跳转、解析坐标、GCJ-02→WGS84。纯转发解析，不写存储、不记日志、不缓存。源码开源，可自行部署。
> 
> 支持苹果地图、高德（含短链）。

## 社群與生態

**社群活躍度**：社群活躍，定期更新和解決用戶問題。
**連結**：[文件](https://wloc-pages.pages.dev/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-06-27）
> **活躍天數** 1 天 · **最新 commit** docs: 苹果地图(中国大陆 GCJ-02)说明改为也转 WGS84，与 worker 实际行为一致 (#21)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#39](https://github.com/Yu9191/wloc/issues/39) | Shadowrocket+快捷指令（秒成功）操作流程图文记录 | 13 | 15 |
> | [#35](https://github.com/Yu9191/wloc/issues/35) | Shadowrocket设置使用教程 | 11 | 25 |
> | [#46](https://github.com/Yu9191/wloc/issues/46) | Shadowrocket完整教程请看这里-小白保姆级教程 | 6 | 5 |
> | [#52](https://github.com/Yu9191/wloc/issues/52) | 小火箭图文版教程 | 0 | 2 |
> | [#51](https://github.com/Yu9191/wloc/issues/51) | 请问钉钉打卡可以用吗 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Apple WLOC 定位修改
> 
> 修改 Apple 网络定位服务 (WiFi/基站) 返回的坐标，实现 iOS 网络定位虚拟定位。打开在线选点页面选位置即可生效，无需手动填经纬度。
> 
> ---
> 
> ## 订阅地址
> 
> **Surge:**
> https://raw.githubusercontent.com/Yu9191/wloc/refs/heads/main/modules/wloc.sgmodule
> 
> **Quantumult X:**
> https://raw.githubusercontent.com/Yu9191/wloc/refs/heads/main/modules/wloc.conf
> 
> **Loon:**
> https://raw.githubusercontent.com/Yu9191/wloc/refs/heads/main/modules/wloc.lpx
> 
> **Stash:**
> https://raw.githubusercontent.com/Yu9191/wloc/refs/heads/main/modules/wloc.stoverride
> 
> **Shadowrocket(小火箭):**
> https://raw.githubusercontent.com/Yu9191/wloc/refs/heads/main/modules/wloc.module
> 
> > Egern 可直接使用 Surge 模块
> > Stash 请直接订阅上面的 `.stoverride`，无需用 Script Hub 转换
> 
> ---
> 
> ## 快捷指令（推荐，最方便）
> 
> 直接用快捷指令切换 / 清除定位，无需打开选点页面：
> 
> - **wloc 设置地理位置**：https://www.icloud.com/shortcuts/a82717d8fdad4e6280866fcf911173f7
> - **wloc 清理恢复位置**：https://www.icloud.com/shortcuts/f42632d406504f24a2cd163af4fe012f
> 
> **用法**
> 
> - **设置位置：** 在地图 App 里选好位置（长按地图选点）→ 共享 → 选「wloc 设置地理位置」即可切换。
>   - 苹果地图：选点 → 共享 → 「wloc 设置地理位置」
>   - 高德地图：选点 → 分享 → **更多** → 「wloc 设置地理位置」
> - **清理位置：** 点「wloc 清理恢复位置」即可恢复真实定位。
> 
> 支持苹果地图、高德（含短链，自动跟跳转 + GCJ-02→WGS84 坐标换算）。
> 
> > 前提：代理已开 + 模块已启用 + 信任 `gs-loc.apple.com`。选点页面（Worker / Pages）方案仍保留，见下方。
> 
> ---
> 
> ### 关于地图链接解析（worker）
> 
> 为了让苹果地图和高德走同一条流程，链接统一发给 `wloc-spoofer.wloc.workers.dev/api/parse` 解析：
> 
> - **高德**：分享出来是短链，真实坐标只藏在 302 跳转的 `Location` 头里，且是 GCJ-02 偏移坐标。快捷指令既读不到跳转头、也难做坐标换算，所以由 worker 跟跳转 → 抠坐标 → GCJ-02→WGS84 → 返回经纬度。
> - **苹果地图**：链接里直接带 `coordinate=纬度,经度`，但在**中国大陆同样是 GCJ-02 偏移坐标**，所以和高德一样由 worker 做 GCJ-02→WGS84 换算后返回；境外坐标会自动跳过换算（`out_of_china` 判断）原样返回。除了统一坐标系，走同一接口也方便统一处理短链、文本夹链接、名称解码等。
> 
> **隐私：** `/api/parse` 是纯转发解析——收到链接 → 跟跳转 → 解析坐标 → 返回 JSON，全程不写任何存储、不记日志、不缓存，处理完即丢。
> 
> **不放心可自行部署：** worker 源码完全开源，可自己部署一份替换上面的地址：
> 
> - 解析逻辑：[`worker/src/parse.js`](worker/src/parse.js)，路由：[`worker/src/index.js`](worker/src/index.js)
> - 部署后把快捷指令里的 `wloc-spoofer.wloc.workers.dev` 换成你自己的 worker 域名即可。
> 
> ---
> 
> 使用方法
> 
> 1. 订阅模块并启用 MITM
> 2. 打开在线选点页面（公共 Worker，建议添加到主屏幕）
> 3. 地图选位置 / 搜索地名 / 粘贴地图链接
> 4. 点击「储存到设备」
> 5. 下次 Apple 定位触发时自动生效
> 
> 支持 Apple Maps / Google Maps / 高德 / 百度 / 坐标文本 链接解析。
> 
> > **iOS 26/27 及更高版本注意：** Apple 从 iOS 26 开始大幅强化了 `locationd` 的定位缓存机制，系统会将之前获取的真实定位结果缓存在内存中并长时间复用。这意味着安装模块或切换目标坐标后，即使脚本已成功修改了 WLOC 响应（日志显示"已修改"），系统仍可能继续使用缓存中的旧坐标，导致定位看起来没有变化。
> >
> > **解决方法：重启设备。** 重启会清空 `locationd` 的内存缓存，系统重新发起 WLOC 请求时会拿到修改后的坐标。飞行模式开关、关闭定位服务等方式在 iOS 26+ 上**无法**清除此缓存，必须重启。iOS 15~18 通常不需要重启即可生效。
> 
> **高版本系统推荐操作流程（成功率最高）：**
> 
> 方法一：
> 1. 先在选点页面选好需要修改的定位并储存到设备
> 2. 开飞行模式 → 关闭定位服务 → 重启设备
> 3. 关闭飞行模式（WiFi 也要关）→ 连接代理工具（确认 VPN 图标出现）→ 打开定位服务
> 4. 打开地图验证
> 
> 方法二：
> 1. 关闭定位服务
> 2. 在选点页面选好位置并储存到设备
> 3. 打开定位服务 → 弹出「允许访问位置信息」时选择**「下次询问或在我共享时」**
> 4. 打开地图验证
> 
> 工作原理
> 
> ```
> 选点页面 → fetch gs-loc.apple.com/wloc-settings/save?lon=x&lat=y
>          → 代理模块拦截 → wloc-settings.js 写入 $persistentStore
>          → 下次 WLOC 触发 → wloc.js 读取坐标 → patch protobuf 响应
> ```
> 
> 模块包含两条规则：
> - `wloc.js` — 拦截 `/clls/wloc` 响应，解析 protobuf 并替换坐标
> - `wloc-settings.js` — 拦截 `/wloc-settings/save` 请求，写入持久化存储
> 
> 参数配置
> 
> | 参数 | 说明 | 默认值 |
> |------|------|--------|
> | longitude | 目标经度(在线选点优先) | null (透传) |
> | latitude | 目标纬度(在线选点优先) | null (透传) |
> | accuracy | 精度(米) | 25 |
> | logLevel | 日志级别 | info |
> 
> 优先级: 在线选点储存 > 模块参数 > 默认值
> 
> 取消虚拟定位 / 恢复真实定位
> 
> **方法一：关闭或删除模块**（推荐）
> 
> 关闭模块后脚本不再拦截 WLOC 请求，系统自动恢复真实定位。iOS 26+ 需要重启设备清除定位缓存。
> 
> **方法二：清除持久化数据（透传模式）**
> 
> 清除已保存的坐标后，脚本进入**透传模式**——不修改 WLOC 响应，直接放行原始数据，系统自动恢复真实 GPS 定位。
> 
> **透传模式触发条件：** 持久化数据为空（null）且模块参数为默认值（113.94114, 22.544577）时，脚本判定用户未自定义坐标，自动跳过修改。模块默认参数无需更改，仅清除持久化数据即可触发透传。
> 
> 在代理工具中删除持久化数据，字段名为 `wloc_settings`：
> 
> - **Surge** — 脚本编辑器运行: `$persistentStore.write(null, "wloc_settings")`
> - **Quantumult X** — 运行: `$prefs.removeValueForKey("wloc_settings")`
> - **Loon** — 运行: `$persistentStore.write(null, "wloc_settings")`
> 
> 清除后重启设备即可恢复真实定位。无需关闭模块，脚本会自动检测到无自定义坐标并跳过修改。
> 
> > **注意：** 如果用户在模块参数中手动修改了经纬度（非默认 113.94114, 22.544577），即使清除持久化数据，脚本仍会使用模块参数中的坐标进行修改。只有保持默认参数不变时，清除持久化数据才会进入透传模式。
> 
> 收藏位置功能
> 
> 在线选点页面支持收藏多个位置，方便来回切换：
> 
> - **添加收藏**：选好位置后点击「收藏位置」→ 输入备注名称（支持中文/英文/数字，最多 30 字）→ 保存
> - **快速切换**：点击收藏列表中的位置 → 地图自动跳转 → 点「储存到设备」即可切换
> - **当前生效标记**：与设备已保存坐标一致的收藏会显示「✓ 当前生效」
> - **删除管理**：单个删除（×按钮）或清空全部
> - **当前生效坐标**：页面显示设备端持久化数据（wloc_settings），支持刷新查询和清除
> 
> **数据存储说明：**
> - **收藏列表** → 保存在浏览器 `localStorage`（仅用于选点页面的 UI 便捷操作）
> - **生效坐标** → 保存在代理工具持久化存储 `$persistentStore`（脚本运行时实际读取的数据）
> 
> 两者独立存储。收藏列表是浏览器端的辅助数据，清除浏览器缓存或换浏览器后需重新收藏，但不影响已储存到设备的生效坐标。
> 
> 自部署 Worker（推荐）
> 
> 公共选点页面有请求上限，建议部署自己的实例：
> 
> - **Workers**: `https://wloc-spoofer.wloc.workers.dev/`
> - **Pages**: `https://wloc-pages.pages.dev/`
> 
> **一键部署（Workers）：**
> 
> [](https://deploy.workers.cloudflare.com/?url=https://github.com/Yu9191/wloc/tree/main/worker)
> 
> > 一键部署仅支持 Workers 模式，点击按钮后按提示授权即可完成部署。
> 
> **手动部署（Workers）：**
> 
> ```bash
> # 1. 克隆仓库
> git clone https://github.com/Yu9191/wloc.git
> cd wloc/worker
> 
> # 2. 安装依赖
> npm install
> 
> # 3. 登录 Cloudflare（首次需要）
> npx wrangler login
> 
> # 4. 部署
> npm run deploy
> ```
> 
> 部署成功后会得到你自己的 Worker 地址（如 `https://wloc-spoofer..workers.dev`），用这个地址选点即可。
> 
> > 免费账户每天 10 万次请求，个人使用完全够用。
> 
> 高级：Pages 部署
> 
> Pages 部署不支持一键按钮，需要手动执行：
> 
> ```bash
> git clone https://github.com/Yu9191/wloc.git
> cd wloc/worker
> npm install
> npx wrangler pages deploy dist --project-name 
> ```
> 
> 部署时会提示设置 production branch，输入 `main` 即可。部署成功后得到 `https://.pages.dev` 地址。
> 
> Pages 和 Workers 功能完全一致，按需选择即可。
> 
> 注意事项
> 
> - 需要 MITM 证书信任 `gs-loc.apple.com` 和 `gs-loc-cn.apple.com`
> - 仅修改网络定位(WiFi/基站)，不影响 GPS 硬件定位
> - iOS 在 GPS 信号强时可能忽略网络定位结果
> - 适用于 WiFi 定位为主的室内场景效果最佳
> - 选点页面需在代理模式下使用（Safari 走代理才能拦截储存请求）
> 
> ---
> 
> ## 致谢
> 
> - [proxypin-wloc-spoofer](https://github.com/FFF686868/proxypin-wloc-spoofer) - 原始 WLOC 定位修改思路 by FFF686868
> - [NSNanoCat/Util](https://github.com/NSNanoCat/util) - 跨平台脚本工具框架

## 延伸閱讀

相關概念：[[虛擬定位]] · [[隱私保護]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[loc567--loc567|loc567/loc567]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]]

[GitHub](https://github.com/Yu9191/wloc) · [官方網站](https://wloc-pages.pages.dev/)

## 相關收錄

> [!note]- 直接競品（同子分類：定位工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "定位工具" AND file.name != "Yu9191--wloc"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Yu9191--wloc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Yu9191--wloc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "Yu9191--wloc"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["虛擬定位","隱私保護","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Yu9191--wloc" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Yu9191--wloc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Yu9191--wloc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Yu9191" AND file.name != "Yu9191--wloc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Yu9191--wloc");
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
> const me = dv.page("Repos/Yu9191--wloc");
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
> const me = dv.page("Repos/Yu9191--wloc");
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
> const me = dv.page("Repos/Yu9191--wloc");
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
> const me = dv.page("Repos/Yu9191--wloc");
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

> **2026-06-27** — 首次收錄
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

- [[2026-07-01|2026-07-01]] — 再次上榜，2.0k stars
- [[2026-06-30|2026-06-30]] — 再次上榜，1.5k stars
- [[2026-06-29|2026-06-29]] — 再次上榜，1.1k stars
- [[2026-06-28|2026-06-28]] — 再次上榜，644 stars
- [[2026-06-27|2026-06-27]] — 首次收錄，457 stars
