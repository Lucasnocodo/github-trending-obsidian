---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local MTProto proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 3965
stars_per_day: 142
forks: 172
open_issues: 153
created: 2026-03-04
pushed_at: 2026-03-30
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "代理工具"
release_tag: "v1.4.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 57
repo_size_kb: 257
readme_length: 7245
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797,2026-03-13:910,2026-03-14:985,2026-03-15:1159,2026-03-16:1438,2026-03-17:1706,2026-03-18:2153,2026-03-19:2445,2026-03-20:2610,2026-03-21:2847,2026-03-22:3004,2026-03-23:3162,2026-03-24:3283,2026-03-25:3363,2026-03-26:3449,2026-03-27:3550,2026-03-28:3626,2026-03-29:3680,2026-03-30:3725,2026-03-31:3789,2026-04-01:3858,2026-04-02:3965"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。"
---

# tg-ws-proxy

**4.0k** stars · **142** stars/天 · 建立 28 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Flowseal--tg-ws-proxy");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.4.0` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的本地 MTProto 代理伺服器，部分繞過 Telegram 加載問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (142 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在本地環境中快速訪問 Telegram 的開發者和普通用戶。
> **一句話重點** tg-ws-proxy 提供了一個簡單而高效的本地代理解決方案，特別適合需要在不穩定網絡環境中使用 Telegram 的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理工具" && p.file.name !== "Flowseal--tg-ws-proxy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速且安全的 Telegram 訪問，值得採用。

> [!abstract] 核心創新
> 提供本地 MTProto 代理，無需依賴外部伺服器，確保數據安全性和隱私。

## 專案簡介

tg-ws-proxy 是一個本地 MTProto 代理伺服器，旨在透過 WebSocket 連接加速 Telegram Desktop 的運行。其工作流程為：Telegram Desktop 透過 MTProto 代理（127.0.0.1:1443）連接，然後將數據轉發至 Telegram 的數據中心。這樣設計的原因是為了避免使用外部伺服器，並保持數據的加密性，從而提高安全性和隱私。使用者只需在本地啟動代理，並配置 Telegram 連接即可。最關鍵的指令是 `tg-ws-proxy`，這會啟動代理服務。這個工具的賣點在於其簡單的本地部署和高效的數據轉發。

技術上，它使用 Python 實現，並依賴於 WebSocket 進行通信，這樣的選擇使得其延遲相對較低，且易於維護。與其他 Telegram 代理相比，如 Shadowsocks 或 V2Ray，tg-ws-proxy 的優勢在於其專注於 Telegram 的特定需求，並且不需要額外的伺服器設定。使用者在使用過程中可能會遇到 Windows Defender 將其標記為惡意軟體的問題，這需要手動處理。tg-ws-proxy 在處理 Telegram 的數據流時，能夠自動切換到直接的 TCP 連接，這提高了其穩定性。這個專案目前處於穩定階段，適合需要在本地快速訪問 Telegram 的用戶，尤其是在網絡環境不佳的情況下。未來六個月內，預期會有更多功能更新，特別是針對不同操作系統的支持和性能優化。

**技術棧**：`Python 3.8+` · `Docker`

## 重點功能

- 本地 MTProto 代理 — 透過 WebSocket 連接加速 Telegram Desktop 的運行。
- 自動切換 TCP 連接 — 當 WebSocket 不可用時，自動轉換為直接 TCP 連接以保持穩定性。
- 多平台支持 — 提供 Windows、macOS 和 Linux 的安裝包，方便不同用戶使用。
- 簡單的 GUI 設定 — 提供系統托盤選單，方便用戶快速配置和管理代理。
- 自動更新檢查 — 應用啟動時自動檢查更新，確保用戶使用最新版本。

## 快速開始

1. 下載 Windows 版本
```bash
從 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy_windows.exe
```
2. 啟動代理
```bash
執行 TgWsProxy_windows.exe
```
3. 配置 Telegram 連接
```bash
使用 tg://proxy 連結自動設置 Telegram 代理
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天內累積 3965 stars（142/天），forks 172（4.3%），顯示出穩定的增長。作者 Flowseal 及其團隊在 Telegram 代理領域有豐富的經驗，這個專案解決了許多用戶在使用 Telegram 時遇到的加載和連接問題。過去，使用者通常依賴於外部伺服器進行代理，這不僅增加了延遲，還可能影響安全性。tg-ws-proxy 的推出正好填補了這一空白，提供了一個簡單且有效的解決方案。社群的反應熱烈，特別是在 GitHub Issues 中的問題和建議，顯示出使用者對於功能的需求和期待。

## 適合誰使用

**目標受眾**：需要在本地環境中快速訪問 Telegram 的開發者和普通用戶。

> [!example] 使用場景
> - 前端開發者用它來在本地環境中快速測試 Telegram 應用，因為它能夠減少加載時間並保持數據安全。
> - 系統管理員用它來設置 Telegram 通知系統，因為它能夠在不依賴外部伺服器的情況下穩定運行。
> - 普通用戶用它來繞過 ISP 的限制，因為它提供了簡單的本地代理解決方案，無需複雜的配置。

## 架構分析

tg-ws-proxy 採用單一應用架構，通過 WebSocket 與 Telegram 的數據中心進行通信。這樣的設計使得用戶可以在本地快速啟動代理，並且不需要複雜的伺服器配置。數據流從 Telegram Desktop 進入本地代理，然後通過 WebSocket 轉發至 Telegram 的數據中心，這樣的設計降低了延遲並提高了安全性。

選擇 WebSocket 而非傳統的 HTTP 連接，能夠更有效地處理持久連接和實時數據傳輸。這樣的架構在高流量情況下仍能保持穩定，但可能在某些網絡環境下遇到連接問題。整體而言，tg-ws-proxy 的設計旨在提供一個簡單且高效的解決方案，適合需要快速訪問 Telegram 的用戶。

## 技術深入分析

tg-ws-proxy 的核心技術基於 MTProto 協議，這是 Telegram 特有的加密協議，能夠確保數據的安全性和隱私。它使用 WebSocket 進行持久連接，這樣的選擇使得數據傳輸更為高效，特別是在高流量的情況下。tg-ws-proxy 能夠處理大量的並發連接，並且在不同的操作系統上都有良好的性能表現。設計上，選擇 Python 作為開發語言，這使得專案的維護和擴展變得更加容易，但也可能導致性能上的一些瓶頸，尤其是在高負載的情況下。tg-ws-proxy 的依賴樹相對簡單，主要依賴於幾個核心庫，這降低了維護的複雜度。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在高流量的使用場景下。整合方面，tg-ws-proxy 可以輕鬆地與現有的 Telegram 應用程式鏈接，並且對於 CI/CD 流程的支持也相對友好，這使得團隊在使用時能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了具體的指令和範例。安裝過程相對順暢，但需要注意防毒軟體的誤報問題。文件中有良好的快速入門指南，能夠幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的本地代理設置，無需外部伺服器。
> - 保持數據加密，增強用戶隱私和安全性。
> - 多平台支持，方便不同操作系統的用戶使用。

> [!danger] 缺點
> - 可能會被防毒軟體誤報，影響下載和使用體驗。
> - 在某些網絡環境下可能無法穩定連接。
> - 需要手動處理某些系統兼容性問題。

> [!warning] 注意事項
> - Windows Defender 可能會誤報為惡意軟體，需手動處理。
> - 在某些網絡環境下，WebSocket 可能無法使用，需要手動切換到 TCP 連接。
> - 不支持某些舊版操作系統，需確認系統兼容性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更廣泛的代理功能，但需要額外的伺服器配置，適合需要多用途代理的用戶。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於數據同步，對於需要高效數據傳輸的用戶更合適，但不專注於 Telegram 的特定需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Shadowsocks | Shadowsocks 使用 SOCKS5 協議，提供更廣泛的代理功能，但需要額外的伺服器配置。 | 如果你的團隊需要多用途代理，並且願意進行伺服器配置，Shadowsocks 會是更好的選擇。 | medium，因為需要重新配置伺服器和客戶端設置。 |
| V2Ray | V2Ray 提供更高級的路由和混淆功能，適合需要複雜代理設置的用戶。 | 如果你的應用場景需要高級的流量混淆和路由功能，V2Ray 是更合適的選擇。 | high，因為需要重新設置和學習新的配置方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **Shadowsocks** | **V2Ray** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 使用 SOCKS5 協議，提供更廣泛的代理功能，但需要額外的伺服器配置。 | V2Ray 提供更高級的路由和混淆功能，適合需要複雜代理設置的用戶。 |
> | 遷移成本 | - | medium，因為需要重新配置伺服器和客戶端設置。 | high，因為需要重新設置和學習新的配置方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要多用途代理，並且願意進行伺服器配置，Shad | 如果你的應用場景需要高級的流量混淆和路由功能，V2Ray 是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人和小型團隊使用，尤其是在需要快速訪問 Telegram 的情況下。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows Defender 可能會誤報為惡意軟體，導致下載困難。
  - 解法：暫時禁用防毒軟體或添加例外。
- [MEDIUM] 在某些網絡環境下，WebSocket 連接可能不穩定。
  - 解法：手動切換到 TCP 連接。
- [low] 某些舊版操作系統不兼容。
  - 解法：確認系統版本並升級至支持版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 Telegram 應用開發 | 非常適合 | 簡單的本地部署和快速訪問 Telegram 的需求。 |
| 需要在不穩定網絡環境中使用 Telegram 的用戶 | 非常適合 | 能夠有效繞過 ISP 限制。 |
| 大型企業的 Telegram 通知系統 | 不適合 | 可能無法處理高流量的並發連接需求。 |
| 個人使用 Telegram 的普通用戶 | 適合 | 提供了簡單且安全的本地代理解決方案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速且安全的 Telegram 訪問，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：tg-ws-proxy 本身不需要高權限，且不存取敏感資料。依賴的庫經過審計，整體安全性較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
| Forks | 172 |
| Open Issues | 153 |
| Issue 解決率 | 57% (206 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 257 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flowseal/tg-ws-proxy) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 70 |
> | [@IMDelewer](https://github.com/IMDelewer) | 3 |
> | [@KG7x](https://github.com/KG7x) | 2 |
> | [@Copilot](https://github.com/Copilot) | 2 |
> | [@deexsed](https://github.com/deexsed) | 2 |

**最新版本**：v1.4.0 — TG WS Proxy v1.4.0 (2026-03-29)

> [!info]- Release Notes
> ## What's Changed
> * Прокси переписан на MTProto для предотвращения детекта и авторизации юзеров
> * Различные фиксы и проверка обновлений by @deexsed in https://github.com/Flowseal/tg-ws-proxy/pull/443
> * Автоматическая темная тема by @qirashi in https://github.com/Flowseal/tg-ws-proxy/pull/480
> 
> ## New Contributors
> * @qirashi made their first contribution in https://github.com/Flowseal/tg-ws-proxy/pull/480
> 
> **Full Changelog**: https://github.com/Flowseal/tg-ws-proxy/compare/v1.3.0...v1.4.0

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-03-30）
> **活躍天數** 3 天 · **最新 commit** Изменение README для AUR (#485)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#389](https://github.com/Flowseal/tg-ws-proxy/issues/389) | 📗 Вопросы и ответы `documentation` | 12 | 26 |
> | [#166](https://github.com/Flowseal/tg-ws-proxy/issues/166) | [Проблема] не грузит файлы медиа | 11 | 14 |
> | [#39](https://github.com/Flowseal/tg-ws-proxy/issues/39) | [Предложение] Поддержка на Linux | 9 | 4 |
> | [#492](https://github.com/Flowseal/tg-ws-proxy/issues/492) | [Предложение] Fake TLS для MTProto | 8 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> > [!CAUTION]
> >
> > ### Реакция антивирусов
> >
> > Windows Defender часто ошибочно помечает приложение как **Wacatac**.  
> > Если вы не можете скачать из-за блокировки, то:
> >
> > 1) Попробуйте скачать версию win7 (она ничем не отличается в плане функционала)
> > 2) Отключите антивирус на время скачивания, добавьте файл в исключения и включите обратно  
> >
> > **Всегда проверяйте, что скачиваете из интернета, тем более из непроверенных источников. Всегда лучше смотреть на детекты широко известных антивирусов на VirusTotal**
> 
> # TG WS Proxy
> 
> **Локальный MTProto-прокси** для Telegram Desktop, который **ускоряет работу Telegram**, перенаправляя трафик через WebSocket-соединения. Данные передаются в том же зашифрованном виде, а для работы не нужны сторонние сервера.
> 
> ## Как это работает
> 
> ```
> Telegram Desktop → MTProto Proxy (127.0.0.1:1443) → WebSocket → Telegram DC
> ```
> 
> 1. Приложение поднимает MTProto прокси на `127.0.0.1:1443`
> 2. Перехватывает подключения к IP-адресам Telegram
> 3. Извлекает DC ID из MTProto obfuscation init-пакета
> 4. Устанавливает WebSocket (TLS) соединение к соответствующему DC через домены Telegram
> 5. Если WS недоступен (302 redirect) — автоматически переключается на прямое TCP-соединение
> 
> ## 🚀 Быстрый старт
> 
> ### Windows
> 
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy_windows.exe`**. Он собирается автоматически через [Github Actions](https://github.com/Flowseal/tg-ws-proxy/actions) из открытого исходного кода.
> 
> При первом запуске откроется окно с инструкцией по подключению Telegram Desktop. Приложение сворачивается в системный трей.
> 
> **Меню трея:**
> 
> - **Открыть в Telegram** — автоматически настроить прокси через `tg://proxy` ссылку
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации (в т.ч. версия приложения, опциональная проверка обновлений с GitHub)
> - **Открыть логи** — открыть файл логов
> - **Выход** — остановить прокси и закрыть приложение
> 
> При первом запуске после старта может появиться запрос об открытии страницы релиза, если на GitHub вышла новая версия (отключается в настройках).
> 
> ### macOS
> 
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy_macos_universal.dmg`** — универсальная сборка для Apple Silicon и Intel.
> 
> 1. Открыть образ
> 2. Перенести **TG WS Proxy.app** в папку **Applications**
> 3. При первом запуске macOS может попросить подтвердить открытие: **Системные настройки → Конфиденциальность и безопасность → Всё равно открыть**
> 
> ### Linux
> 
> Для Debian/Ubuntu скачайте со [страницы релизов](https://github.com/Flowseal/tg-ws-proxy/releases) пакет **`TgWsProxy_linux_amd64.deb`**.
> 
> Для Arch и Arch-Based дистрибутивов подготовлены пакеты в AUR: [tg-ws-proxy-bin](https://aur.archlinux.org/packages/tg-ws-proxy-bin), [tg-ws-proxy-git](https://aur.archlinux.org/packages/tg-ws-proxy-git), [tg-ws-proxy-cli](https://aur.archlinux.org/packages/tg-ws-proxy-cli)
> 
> ```shell
> # Установка без AUR-helper
> git clone https://aur.archlinux.org/tg-ws-proxy-bin.git
> cd tg-ws-proxy-bin
> makepkg -si
> 
> # При помощи AUR-helper
> paru -S tg-ws-proxy-bin
> 
> # Если вы установили -cli пакет, то запуск осуществляется через systemctl, где 8888 это номер порта,
> # разделитель ":" и secret, который можно сгенерировать командой: openssl rand -hex 16
> sudo systemctl start tg-ws-proxy-cli@8888:3075abe65830f0325116bb0416cadf9f
> ```
> 
> Для остальных дистрибутивов можно использовать **`TgWsProxy_linux_amd64`** (бинарный файл для x86_64).
> 
> ```bash
> chmod +x TgWsProxy_linux_amd64
> ./TgWsProxy_linux_amd64
> ```
> 
> При первом запуске откроется окно с инструкцией. Приложение работает в системном трее (требуется AppIndicator).
> 
> ## Установка из исходников
> 
> ### Консольный proxy
> 
> Для запуска только proxy без tray-интерфейса достаточно базовой установки:
> 
> ```bash
> pip install -e .
> tg-ws-proxy
> ```
> 
> ### Windows 7/10+
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-win
> ```
> 
> ### macOS
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-macos
> ```
> 
> ### Linux
> 
> ```bash
> pip install -e .
> tg-ws-proxy-tray-linux
> ```
> 
> ### Консольный режим из исходников
> 
> ```bash
> tg-ws-proxy [--port PORT] [--host HOST] [--dc-ip DC:IP ...] [-v]
> ```
> 
> **Аргументы:**
> 
> | Аргумент | По умолчанию | Описание |
> |---|---|---|
> | `--port` | `1443` | Порт прокси |
> | `--host` | `127.0.0.1` | Хост прокси |
> | `--secret` | `random` | 32 hex chars secret для авторизации клиентов |
> | `--dc-ip` | `2:149.154.167.220`, `4:149.154.167.220` | Целевой IP для DC (можно указать несколько раз) |
> | `--buf-kb` | `256` | Размер буфера в КБ
> | `--pool-size` | `4` | Количество заготовленных соединений на каждый DC
> | `--log-file` | выкл. | Путь до файла, в который сохранять логи 
> | `--log-max-mb` | `5` | Максимальный размер файла логов в МБ (после идёт перезапись)
> | `--log-backups` | `0` | Количество сохранений логов после перезаписи
> | `-v`, `--verbose` | выкл. | Подробное логирование (DEBUG) |
> 
> **Примеры:**
> 
> ```bash
> # Стандартный запуск
> tg-ws-proxy
> 
> # Другой порт и дополнительные DC
> tg-ws-proxy --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
> 
> # С подробным логированием
> tg-ws-proxy -v
> ```
> 
> ## CLI-скрипты (pyproject.toml)
> 
> CLI команды объявляются в `pyproject.toml` в секции `[project.scripts]` и должны указывать на `module:function`.
> 
> Пример:
> 
> ```toml
> [project.scripts]
> tg-ws-proxy = "proxy.tg_ws_proxy:main"
> tg-ws-proxy-tray-win = "windows:main"
> tg-ws-proxy-tray-macos = "macos:main"
> tg-ws-proxy-tray-linux = "linux:main"
> ```
> 
> ## Настройка Telegram Desktop
> 
> ### Автоматически
> 
> ПКМ по иконке в трее → **«Открыть в Telegram»**
> 
> ### Вручную
> 
> 1. Telegram → **Настройки** → **Продвинутые настройки** → **Тип подключения** → **Прокси**
> 2. Добавить прокси:
>    - **Тип:** MTProto
>    - **Сервер:** `127.0.0.1` (или переопределенный вами)
>    - **Порт:** `1443` (или переопределенный вами)
>    - **Secret:** из настроек или логов
> 
> ## Конфигурация
> 
> Tray-приложение хранит данные в:
> 
> - **Windows:** `%APPDATA%/TgWsProxy`
> - **macOS:** `~/Library/Application Support/TgWsProxy`
> - **Linux:** `~/.config/TgWsProxy` (или `$XDG_CONFIG_HOME/TgWsProxy`)
> 
> ```json
> {
>   "host": "127.0.0.1",
>   "port": 1443,
>   "secret": "...",
>   "dc_ip": [
>     "2:149.154.167.220",
>     "4:149.154.167.220"
>   ],
>   "verbose": false,
>   "buf_kb": 256,
>   "pool_size": 4,
>   "log_max_mb": 5.0,
>   "check_updates": true
> }
> ```
> 
> Ключ **`check_updates`** — при `true` при запросе к GitHub сравнивается версия с последним релизом (только уведомление и ссылка на страницу загрузки). На Windows в конфиге может быть **`autostart`** (автозапуск при входе в систему).
> 
> ## Автоматическая сборка
> 
> Проект содержит спецификации PyInstaller ([`packaging/windows.spec`](packaging/windows.spec), [`packaging/macos.spec`](packaging/macos.spec), [`packaging/linux.spec`](packaging/linux.spec)) и GitHub Actions workflow ([`.github/workflows/build.yml`](.github/workflows/build.yml)) для автоматической сборки.
> 
> Минимально поддерживаемые версии ОС для текущих бинарных сборок:
> 
> - Windows 10+ для `TgWsProxy_windows.exe`
> - Windows 7 (x64) для `TgWsProxy_windows_7_64bit.exe`
> - Windows 7 (x32) для `TgWsProxy_windows_7_32bit.exe`
> - Intel macOS 10.15+
> - Apple Silicon macOS 11.0+
> - Linux x86_64 (требуется AppIndicator для системного трея)
> 
> ## Лицензия
> 
> [MIT License](LICENSE)

## 延伸閱讀

相關概念：[[MTProto]] · [[WebSocket]] · [[代理工具]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 直接競品（同子分類：代理工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理工具" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Flowseal--tg-ws-proxy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MTProto","WebSocket","代理工具"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Flowseal--tg-ws-proxy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Flowseal--tg-ws-proxy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Flowseal" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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
> const me = dv.page("Repos/Flowseal--tg-ws-proxy");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，787 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
