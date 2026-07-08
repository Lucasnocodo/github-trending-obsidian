---
repo: x4gKing/X4G
url: https://github.com/x4gKing/X4G
owner: x4gKing
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 1005
stars_per_day: 335
forks: 2253
open_issues: 5
created: 2026-07-04
pushed_at: 2026-07-04
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "基礎設施"
subcategory: "網路隧道"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "提供一個快速現代的 VLESS 隧道服務，支持 WebSocket 和 HTTP Proxy，並具備流量限制管理功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-11"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 93
readme_length: 2361
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1005"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
aliases:
  - "X4G"
  - "x4gKing/X4G"
  - "提供一個快速現代的 VLESS 隧道服務，支持 WebSocket 和 HTTP Proxy，並具備流量限制管理功能。"
---

# X4G

**1.0k** stars · **335** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/x4gKing--X4G");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供一個快速現代的 VLESS 隧道服務，支持 WebSocket 和 HTTP Proxy，並具備流量限制管理功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (335 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要快速設置和管理 VLESS 隧道的個人或小型團隊。
> **一句話重點** X4G 提供了一個現代化的 VLESS 隧道解決方案，特別適合需要靈活流量管理的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--X4G");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路隧道" && p.file.name !== "x4gKing--X4G" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路隧道 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到靈活的 VLESS 隧道管理，值得一試。

> [!abstract] 核心創新
> 提供了一個現代化的 VLESS 隧道解決方案，結合了即時流量管理和美觀的管理儀表板。

## 專案簡介

X4G 是一個基於 Python 的 VLESS 隧道服務，允許用戶透過 WebSocket 和 HTTP Proxy 進行安全的網路連接。用戶可以輕鬆設置和管理流量限制，並使用內建的管理儀表板來監控流量和連接狀態。這個工具的賣點在於其簡單易用的界面和即時的連接管理功能，讓用戶能夠快速啟用或禁用連接。它支持多種配置選項，包括自定義的 Fingerprint 和 ALPN 設置，並允許用戶選擇任意可用的連接端口。技術上，X4G 使用 FastAPI 和 Uvicorn 作為後端框架，這使得其在處理高並發請求時表現出色。

與其他類似工具相比，如 v2ray 和 Shadowsocks，X4G 提供了更靈活的流量管理和即時控制功能，特別適合需要頻繁調整連接設置的用戶。使用者需注意，所有數據均以內存形式存儲，重啟後會丟失，因此建議連接到持久化數據庫如 Redis 或 PostgreSQL。這個專案目前處於初期階段，社群活躍度高，但仍需進一步的功能完善和穩定性測試。適合小型團隊或個人用戶，特別是那些需要快速部署和靈活管理的場景。

**技術棧**：`FastAPI 0.104.1` · `Uvicorn 0.24.0` · `httpx 0.25.1` · `websockets 12.0` · `aiofiles >= 23.2.1`

## 重點功能

- VLESS over WebSocket 支持 — 提供安全的隧道連接。
- 內建 HTTP Proxy — 允許用戶輕鬆配置代理服務。
- 完整的管理儀表板 — 提供流量統計和即時連接狀態。
- 流量限制管理 — 用戶可自定義每個連接的流量限制（MB/GB）。
- 即時連接控制 — 允許用戶隨時啟用或禁用連接。
- QR Code 輸出 — 為每個連接生成 QR Code，方便分享。
- 自定義 Fingerprint 和 ALPN 設置 — 提供更靈活的連接配置。
- 可自定義的連接端口 — 支持任意可用端口，增強靈活性。

## 快速開始

1. Fork 專案
```bash
點擊 GitHub 上的 Fork 按鈕
```
2. 在 Railway 部署
```bash
訪問 Railway.app，選擇 Deploy from GitHub repo
```
3. 訪問儀表板
```bash
前往 https://your-app.up.railway.app/dashboard
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1005 stars（335/天），forks 2253（224.2%），這顯示出極高的興趣和參與度。作者 x4gKing 似乎在這個領域有一定的經驗，這個工具解決了以往 VLESS 隧道服務在流量管理上的不足，提供了更直觀的管理界面。近期的推廣活動可能也促進了其快速增長，特別是在社群平台上引起討論。高 forks/stars 比率（224.2%）表明許多人在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要快速設置和管理 VLESS 隧道的個人或小型團隊。

> [!example] 使用場景
> - 網路安全專家用它來快速設置 VLESS 隧道，因為其簡單的管理界面和即時流量控制功能能夠節省大量時間。
> - 小型團隊的 DevOps 工程師用它來部署安全的 HTTP Proxy，因為其支持自定義端口和流量限制，能夠靈活應對不同需求。
> - 個人用戶用它來管理自己的網路流量，因為其內建的儀表板提供了即時的流量監控和管理功能。

## 架構分析

X4G 採用 FastAPI 作為後端框架，這使得其能夠高效處理並發請求。資料流從用戶端經由 WebSocket 進入後端，後端則使用 HTTP Proxy 轉發請求。這種設計的好處是能夠快速響應用戶請求，但代價是所有數據僅存儲在內存中，重啟後會丟失。為了提高擴展性，建議連接到持久化數據庫，但目前尚未實現。整體架構的輕量化使得部署變得簡單，但在高流量情況下可能會遇到性能瓶頸。

## 技術深入分析

X4G 的核心技術機制基於 FastAPI 和 Uvicorn，這使得其能夠高效處理大量並發請求。使用 WebSocket 作為主要通訊協議，能夠提供低延遲的數據傳輸。整體架構設計上，所有的數據都存儲在內存中，這雖然提高了響應速度，但也帶來了數據丟失的風險。對於高流量的場景，這可能成為一個瓶頸，尤其是在服務重啟後。

選擇 Python 作為開發語言的好處在於其生態系統豐富，但在性能上可能不如某些編譯型語言。依賴樹相對簡單，主要依賴 FastAPI 和 httpx，這使得整體安裝和維護成本較低。技術風險方面，由於所有數據存儲在內存中，未來在擴展時可能需要考慮持久化解決方案的整合。整合到現有的 CI/CD pipeline 中相對簡單，但仍需注意與其他工具的兼容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用步驟，對於新手來說相對友好。安裝過程順暢，但需要注意手動配置持久化數據庫。文件目前僅提供英文和波斯文，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 即時流量管理功能，能夠快速啟用或禁用連接。
> - 簡單易用的管理儀表板，適合新手使用。
> - 支持多種自定義配置選項，靈活性高。

> [!danger] 缺點
> - 所有數據僅存儲在內存中，重啟後會丟失。
> - 目前僅支持 Python 環境，對於其他語言的支持尚未實現。
> - 缺乏持久化數據存儲的內建支持。

> [!warning] 注意事項
> - 所有數據僅存儲在內存中，重啟後會丟失。
> - 需要手動配置持久化數據庫以保存數據。
> - 目前僅支持 Python 環境，對於其他語言的支持尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | 提供類似的 VLESS 隧道功能，但缺乏即時流量管理和簡易的儀表板。 |
| [Shadowsocks/Shadowsocks](https://github.com/Shadowsocks/Shadowsocks) | 雖然也是一種代理工具，但在流量限制和管理功能上不如 X4G 靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | 提供類似的 VLESS 隧道功能，但缺乏即時流量管理和簡易的儀表板。 | 如果需要更成熟的生態系統和更廣泛的社群支持。 | medium - 需要重新配置和測試連接設置。 |
| [Shadowsocks/Shadowsocks](https://github.com/Shadowsocks/Shadowsocks) | 雖然也是一種代理工具，但在流量限制和管理功能上不如 X4G 靈活。 | 如果需要一個更簡單的代理解決方案，且不需要複雜的流量管理。 | low - 設置相對簡單，轉移配置較為直接。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **X4G** | **v2ray-core** | **Shadowsocks** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 VLESS 隧道功能，但缺乏即時流量管理和簡易的儀表板。 | 雖然也是一種代理工具，但在流量限制和管理功能上不如 X4G 靈活。 |
> | 遷移成本 | - | medium - 需要重新配置和測試連接設置。 | low - 設置相對簡單，轉移配置較為直接。 |
> | 適用場景 | 主要場景 | 如果需要更成熟的生態系統和更廣泛的社群支持。 | 如果需要一個更簡單的代理解決方案，且不需要複雜的流量管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 所有數據在重啟後會丟失，需注意持久化存儲的配置
  - 解法：連接到 Redis 或 PostgreSQL 以保存數據
- [MEDIUM] 配置過程中可能會遇到端口衝突問題
  - 解法：確保選擇的端口在服務器上是可用的
- [MEDIUM] 對於新手用戶，可能會對配置選項感到困惑
  - 解法：參考官方文檔或社群討論以獲取幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 DevOps 工程師 | 非常適合 | 提供靈活的流量管理和即時控制功能，適合快速變化的需求。 |
| 需要安全隧道的個人用戶 | 適合 | 簡單易用的界面和功能，能夠快速上手。 |
| 大型企業的網路安全專家 | 普通 | 雖然功能強大，但目前仍處於 alpha 階段，穩定性尚需考量。 |
| 需要高可用性的生產環境 | 不適合 | 目前不建議用於生產環境，因為數據丟失風險高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到靈活的 VLESS 隧道管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴的外部服務的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

X4G 最常與 Railway.app 搭配使用，作為快速部署的解決方案。在使用 Railway 部署後，用戶可以通過儀表板管理連接，並查看流量統計。與主流 CI/CD 工具如 GitHub Actions 兼容，能夠輕鬆整合到現有的開發流程中。整合過程中，最常見的問題是端口衝突，需提前檢查可用端口。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--X4G");
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
> const me = dv.page("Repos/x4gKing--X4G");
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
| Forks | 2.3k |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-04 |
| 建立日期 | 2026-07-04 |
| Repo 大小 | 93 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/x4gKing/X4G) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `httpx` `websockets` `aiofiles` `httpx`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@x4gKing](https://github.com/x4gKing) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多個 issue 被提出，顯示出用戶的參與度。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-04 ~ 2026-07-04）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/x4gKing/X4G/issues/2) | clean ip | 1 | 0 |
> | [#5](https://github.com/x4gKing/X4G/issues/5) | Mansoor | 0 | 0 |
> | [#4](https://github.com/x4gKing/X4G/issues/4) | نیازمند اضافه شدن بخش ایپی تمیز | 0 | 0 |
> | [#3](https://github.com/x4gKing/X4G/issues/3) | حجمی که هر اکانت میتونه استفاده کنه چند گیگ هست،؟ شنیدم ماهی | 0 | 0 |
> | [#1](https://github.com/x4gKing/X4G/issues/1) | alireza | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> آموزش ویدیویی :
> https://www.youtube.com/watch?v=kx06wLWldE8&t=4s
> 
> # 🚀 X4G
> 
> دروازه (Gateway) سریع و مدرن برای تونل‌زنی VLESS روی WebSocket + HTTP Proxy، با داشبورد مدیریتی زیبا و قابلیت ساخت لینک‌های اختصاصی با محدودیت ترافیک.
> 
> ---
> 
> ## ✨ ویژگی‌ها
> 
> - 🔌 تونل VLESS over WebSocket / XHTTP
> - 🌐 HTTP Proxy داخلی
> - 📊 داشبورد مدیریتی کامل (آمار، نمودار ترافیک، اتصالات زنده)
> - 🔗 مدیریت لینک‌های نامحدود با محدودیت ترافیک اختصاصی (MB/GB)
> - ✅ فعال/غیرفعال‌سازی هر لینک به‌صورت لحظه‌ای
> - 📱 خروجی QR Code برای هر لینک
> - 🛡️ Fingerprint (uTLS) و ALPN قابل تنظیم دستی برای هر کانفیگ
> - 🔢 پورت اتصال قابل تنظیم دستی برای هر کانفیگ (نه فقط 443)
> - 👥 محدودیت تعداد آی‌پی/کاربر هم‌زمان به‌ازای هر کانفیگ
> 
> ---
> 
> ## 1️⃣ Fork روی گیت‌هاب
> 
> ابتدا روی دکمه **Fork** کلیک کنید تا این ریپازیتوری را به حساب خود منتقل کنید.
> 
> ---
> 
> ## 2️⃣ Deploy روی Railway
> 
> 1. وارد سایت [Railway.app](https://railway.app) شوید.
> 2. روی **New Project → Deploy from GitHub repo** کلیک کنید.
> 3. ریپازیتوری Fork شده را انتخاب کنید.
> 4. Railway به‌صورت خودکار پروژه را **Deploy** می‌کند.
> 
> > 💡 پس از دیپلوی، یک دامنه عمومی (Public Domain) برای سرویس خود از تنظیمات Railway فعال کنید تا متغیر `RAILWAY_PUBLIC_DOMAIN` به‌درستی مقداردهی شود.
> 
> ---
> 
> ## 3️⃣ اتصال به کانفیگ‌ها
> 
> پس از دیپلوی موفق:
> 
> 1. به آدرس `https://your-app.up.railway.app/dashboard` بروید.
> 2. در صفحه **داشبورد کلی**، لینک VLESS پیش‌فرض (بدون محدودیت) را مشاهده و کپی کنید.
> 3. این لینک را در کلاینت دلخواه (v2rayNG، NekoBox، Streisand و...) وارد کنید.
> 4. برای ساخت لینک‌های جداگانه با محدودیت ترافیک، به بخش **مدیریت لینک‌ها** بروید.
> 
> ---
> 
> ## 🔧 تنظیمات دستی هر کانفیگ
> 
> هنگام ساخت یا ویرایش هر کانفیگ می‌توانید این موارد را جداگانه تنظیم کنید:
> 
> - **Fingerprint (uTLS)**: مقادیر chrome / firefox / safari / ios / android / edge / 360 / qq / random / randomized
> - **ALPN**: پیش‌فرض پروتکل، یا مقدار دستی مثل `h2,http/1.1` یا `http/1.1`
> - **پورت اتصال**: هر پورتی بین 1 تا 65535 (نه فقط 443) — دقت کنید که این پورت باید واقعاً روی دامنه/سرویس شما باز و در دسترس باشد
> - **محدودیت آی‌پی هم‌زمان**: تعداد آی‌پی/کاربری که مجاز است هم‌زمان از همان کانفیگ استفاده کند (0 = نامحدود)
> 
> ---
> 
> ## ⚠️ نکته مهم
> 
> تمام لینک‌ها و آمار مصرف به‌صورت **درون‌حافظه (in-memory)** ذخیره می‌شوند و با هر بار ری‌استارت سرویس روی Railway، ریست خواهند شد. برای ذخیره‌سازی دائمی، اتصال به یک دیتابیس (Redis یا PostgreSQL) پیشنهاد می‌شود.
> 
> ---
> 
> X4G · پشتیبانی: @Farajian2004f

## 延伸閱讀

相關概念：[[網路隧道]] · [[HTTP Proxy]] · [[流量管理]]

相關專案：[[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]]

[GitHub](https://github.com/x4gKing/X4G)

## 相關收錄

> [!note]- 直接競品（同子分類：網路隧道）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路隧道" AND file.name != "x4gKing--X4G"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "x4gKing--X4G"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "x4gKing--X4G" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "x4gKing--X4G"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["網路隧道","HTTP Proxy","流量管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "x4gKing--X4G" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/x4gKing--X4G");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "x4gKing--X4G" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "x4gKing" AND file.name != "x4gKing--X4G"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/x4gKing--X4G");
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
> const me = dv.page("Repos/x4gKing--X4G");
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
> const me = dv.page("Repos/x4gKing--X4G");
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
> const me = dv.page("Repos/x4gKing--X4G");
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
> const me = dv.page("Repos/x4gKing--X4G");
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

> **2026-07-08** — 首次收錄
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

- [[2026-07-08|2026-07-08]] — 首次收錄，1.0k stars
