---
repo: Yu9191/wloc
url: https://github.com/Yu9191/wloc
owner: Yu9191
owner_type: User
language: JavaScript
license: N/A
description: "修改 Apple 网络定位（gs-loc）返回坐标 · 支持 Surge / Quantumult X / Loon / Stash · 快捷指令一键设置/恢复定位"
homepage: "https://wloc-pages.pages.dev/"
stars: 6143
stars_per_day: 219
forks: 1207
open_issues: 48
created: 2026-06-24
pushed_at: 2026-06-27
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "CLI 工具"
subcategory: "定位工具"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "修改 Apple 网络定位返回坐标，支持多种代理工具，便捷设置和恢复定位。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-04"
contributor_count: 1
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 77
readme_length: 5472
bus_factor: 1
last_release_days: 28
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:457,2026-06-27:462,2026-06-28:644,2026-06-28:647,2026-06-29:1092,2026-06-29:1098,2026-06-30:1508,2026-06-30:1515,2026-07-01:1965,2026-07-01:1968,2026-07-02:2357,2026-07-03:2584,2026-07-04:2845,2026-07-05:2957,2026-07-06:3094,2026-07-07:3167,2026-07-08:3299,2026-07-09:3489,2026-07-10:3676,2026-07-11:3806,2026-07-12:3932,2026-07-13:4248,2026-07-14:4482,2026-07-15:4615,2026-07-16:4972,2026-07-17:5267,2026-07-18:5412,2026-07-19:5621,2026-07-20:5773,2026-07-21:5858,2026-07-23:6143"
tags:
  - github
  - "category/cli_工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "wloc"
  - "Yu9191/wloc"
  - "修改 Apple 网络定位返回坐标，支持多种代理工具，便捷设置和恢复定位。"
---

# wloc

**6.1k** stars · **219** stars/天 · 建立 28 天前 · JavaScript · 未標註授權

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

`個人專案` `v1.0.0` `easy-install`

> [!summary] 一句話摘要
> 修改 Apple 网络定位返回坐标，支持多种代理工具，便捷设置和恢复定位。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (219 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 25 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 iOS 設備上虛擬定位但不想手動填寫經緯度的開發者和測試人員。
> **一句話重點** WLOC 不僅是一個虛擬定位工具，更是一個隱私保護的解決方案，讓用戶能夠靈活控制自己的地理位置。

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
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供了一個簡單的方式來修改 Apple 網絡定位返回的坐標，並支持多種代理工具。

## 專案簡介

WLOC 是一個專門用來修改 Apple 網絡定位服務返回的坐標的工具，讓用戶能夠在 iOS 設備上進行虛擬定位。用戶可以通過選擇地圖上的位置並使用快捷指令來設置新的地理位置，這樣就能在不改變實際位置的情況下，讓應用程序認為用戶在不同的地點。使用者只需在地圖應用中選擇位置，然後分享給 WLOC，即可完成設置。這個工具的賣點在於其簡單易用的快捷指令，讓定位的設置和清除變得非常方便。技術上，WLOC 利用 JavaScript 編寫，並支持 Surge、Quantumult X、Loon 和 Stash 等多種代理工具，通過攔截和修改網絡請求來實現定位的虛擬化。

這種方法的優勢在於不需要用戶手動填寫經緯度，並且可以自動處理坐標轉換，從 GCJ-02 轉換到 WGS84，確保定位的準確性。與其他類似工具相比，如 Shadowrocket，WLOC 提供了更為直觀的設置流程，並且支持多種地圖服務的解析。使用 WLOC 時，需注意 iOS 26 及以上版本的定位緩存問題，可能需要重啟設備以清除舊的定位數據。整體來看，這是一個針對需要虛擬定位的用戶設計的高效工具，特別適合經常需要更改位置的開發者或測試人員。

**技術棧**：`JavaScript`

## 重點功能

- 虛擬定位 — 直接修改 Apple 網絡定位返回的坐標，支持多種代理工具。
- 快捷指令支持 — 提供便捷的快捷指令來設置和清除定位，無需手動操作。
- 多平台支持 — 支持 Surge、Quantumult X、Loon 和 Stash 等多種代理工具的模塊。
- 自動坐標轉換 — 自動將 GCJ-02 坐標轉換為 WGS84，確保定位準確性。
- 隱私保護 — 解析過程不記錄任何數據，確保用戶隱私。

## 快速開始

1. 訂閱並啟用代理模塊
```bash
在代理工具中添加模塊訂閱地址
```
2. 選擇地圖位置
```bash
在地圖應用中長按選擇位置
```
3. 使用快捷指令設置位置
```bash
分享選擇的地點給 'wloc 设置地理位置'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天內累積 6143 stars（219/天），forks 1207（19.6%），這顯示出其在用戶中的高需求。作者 Yu9191 是一位活躍的開發者，專注於網絡定位相關的工具開發。這個專案解決了之前用戶在虛擬定位方面的痛點，尤其是在 iOS 設備上，許多用戶需要更改位置但缺乏簡單的解決方案。最近的推廣活動和社群討論也促進了這個專案的曝光度。技術上，這個工具的出現得益於 JavaScript 的靈活性和代理工具的普及，使得虛擬定位變得可行且易於使用。高達 19.6% 的 forks/stars 比率表明許多用戶在實際修改和使用這個工具，顯示出其實用性。

## 適合誰使用

**目標受眾**：需要在 iOS 設備上虛擬定位但不想手動填寫經緯度的開發者和測試人員。

> [!example] 使用場景
> - 開發者用它來在測試應用時虛擬定位，因為這樣可以快速驗證地理位置相關功能，而不需要實際移動到不同地點。
> - 測試人員用它來模擬不同地理位置的用戶行為，因為這樣能夠更全面地測試應用的定位功能，提升測試效率。
> - 普通用戶用它來在社交媒體上隱藏真實位置，因為這樣可以保護隱私，並且不影響使用體驗。

## 架構分析

WLOC 的架構基於 JavaScript 和多種代理工具的模塊設計，這使得用戶可以靈活地選擇適合自己的工具。整個流程中，使用者通過地圖選擇位置，然後利用代理模塊攔截網絡請求，實現坐標的修改。這種設計的好處在於用戶不需要深入理解底層技術，只需簡單操作即可完成定位修改。

選擇 JavaScript 作為開發語言，使得工具能夠輕鬆集成到各種環境中，並且易於維護和擴展。這種架構的缺點是對於某些複雜的定位需求，可能需要額外的配置和調整。整體來看，這種設計使得 WLOC 在用戶友好性和技術靈活性之間取得了良好的平衡。

## 技術深入分析

WLOC 的核心技術機制是通過 JavaScript 攔截 Apple 網絡定位的請求，並修改返回的坐標。這種方法利用了代理工具的能力，能夠在不改變用戶實際位置的情況下，實現虛擬定位。效能上，這個工具能夠快速響應用戶的定位請求，並且支持多種地圖服務的解析。由於使用了純轉發解析的方式，WLOC 在處理請求時不會產生額外的延遲，並且不會對用戶的隱私造成威脅。

設計上，選擇 JavaScript 作為開發語言，這使得工具的維護和擴展變得更加容易，且能夠快速適應不同的環境需求。對於依賴於定位的應用來說，WLOC 提供了一個高效的解決方案，特別是在需要頻繁更改位置的場景中。技術風險方面，WLOC 可能在高版本 iOS 中遇到定位緩存的問題，這需要用戶注意並進行相應的操作來清除緩存。整合方面，WLOC 與主流的代理工具和地圖服務有良好的兼容性，能夠輕鬆融入現有的開發和測試流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含使用範例，安裝過程相對順暢，沒有明顯的坑。提供了良好的快捷指令支持，讓新手能夠快速上手。整體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 簡單易用的快捷指令，讓定位設置變得方便。
> - 支持多種代理工具，靈活性高。
> - 隱私保護良好，無數據存儲和記錄。

> [!danger] 缺點
> - 僅限於 iOS 設備使用，無法跨平台。
> - 在高版本 iOS 中可能需要重啟設備以清除緩存。
> - 對於某些應用的定位行為無法直接修改。

> [!warning] 注意事項
> - 僅支援 iOS 設備，無法在 Android 上使用。
> - 在 iOS 26 及以上版本中，可能需要重啟設備以清除定位緩存。
> - 不支持直接修改某些應用的定位行為，需依賴代理工具的支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) | 提供類似的虛擬定位功能，但主要針對開發者，缺乏便捷的快捷指令支持。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於更高級的定位模擬，適合需要複雜定位場景的用戶，但使用上較為繁瑣。 |

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
| Forks | 1.2k |
| Open Issues | 48 |
| Issue 解決率 | 11% (6 closed) |
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

**社群活躍度**：社群活躍，經常有新問題和教程分享。
**連結**：[文件](https://wloc-pages.pages.dev/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-27 ~ 2026-06-27）
> **活躍天數** 1 天 · **最新 commit** docs: 苹果地图(中国大陆 GCJ-02)说明改为也转 WGS84，与 worker 实际行为一致 (#21)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#39](https://github.com/Yu9191/wloc/issues/39) | Shadowrocket+快捷指令（秒成功）操作流程图文记录 | 14 | 21 |
> | [#35](https://github.com/Yu9191/wloc/issues/35) | Shadowrocket设置使用教程 | 11 | 25 |
> | [#46](https://github.com/Yu9191/wloc/issues/46) | Shadowrocket完整教程请看这里-小白保姆级教程 | 7 | 6 |
> | [#54](https://github.com/Yu9191/wloc/issues/54) | 借个楼，正在开发iOS端和Mac端，网页端可在线体验 | 1 | 1 |

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

相關概念：[[虛擬定位]] · [[API 解析]] · [[隱私保護]]

相關專案：[[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[loc567--loc567|loc567/loc567]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

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
> WHERE category = "CLI 工具" AND file.name != "Yu9191--wloc"
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
> const concepts = ["虛擬定位","API 解析","隱私保護"];
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
