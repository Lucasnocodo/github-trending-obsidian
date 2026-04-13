---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local MTProto proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 4855
stars_per_day: 124
forks: 220
open_issues: 151
created: 2026-03-04
pushed_at: 2026-04-11
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "代理工具"
release_tag: "v1.6.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供本地 MTProto 代理伺服器以部分繞過 Telegram 加載問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 67
repo_size_kb: 326
readme_length: 9625
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797,2026-03-13:910,2026-03-14:985,2026-03-15:1159,2026-03-16:1438,2026-03-17:1706,2026-03-18:2153,2026-03-19:2445,2026-03-20:2610,2026-03-21:2847,2026-03-22:3004,2026-03-23:3162,2026-03-24:3283,2026-03-25:3363,2026-03-26:3449,2026-03-27:3550,2026-03-28:3626,2026-03-29:3680,2026-03-30:3725,2026-03-31:3789,2026-04-01:3858,2026-04-02:3965,2026-04-03:4104,2026-04-04:4194,2026-04-05:4253,2026-04-06:4317,2026-04-07:4375,2026-04-08:4442,2026-04-09:4518,2026-04-10:4612,2026-04-11:4713,2026-04-12:4788,2026-04-13:4855"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供本地 MTProto 代理伺服器以部分繞過 Telegram 加載問題。"
---

# tg-ws-proxy

**4.9k** stars · **124** stars/天 · 建立 39 天前 · Python · MIT

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

`v1.6.1` `easy-install`

> [!summary] 一句話摘要
> 提供本地 MTProto 代理伺服器以部分繞過 Telegram 加載問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (124 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網路環境中穩定使用 Telegram 的普通用戶和開發者。
> **一句話重點** tg-ws-proxy 讓 Telegram 用戶在不穩定的網路環境中獲得更好的使用體驗，特別是對於需要穩定連接的用戶。

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
> **結論** 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得採用。

> [!abstract] 核心創新
> 提供本地 MTProto 代理，無需依賴外部伺服器，並支持 WebSocket 連接。

## 專案簡介

tg-ws-proxy 是一個本地 MTProto 代理伺服器，旨在提升 Telegram Desktop 的性能，透過 WebSocket 連接來轉發流量。其工作流程為：Telegram Desktop 透過 MTProto 代理（127.0.0.1:1443）連接，然後將流量轉發至 Telegram 的數據中心。這樣的設計使得數據在傳輸過程中保持加密，並且不需要依賴外部伺服器，從而提高了安全性和穩定性。關鍵指令包括 `tg-ws-proxy` 來啟動代理，並可透過 `--port` 和 `--dc-ip` 參數自定義端口和數據中心 IP。這個工具的賣點在於其簡單易用的本地部署方式，適合需要穩定 Telegram 連接的用戶。技術上，它使用 Python 實現，並依賴於一些輕量級的庫，如 `pyperclip` 和 `psutil`，這使得整體依賴樹相對簡單。

與其他代理工具相比，如 `Shadowsocks` 和 `V2Ray`，tg-ws-proxy 專注於 Telegram 的特定需求，並提供了更簡單的設置過程。使用者在使用過程中可能會遇到媒體文件無法加載的問題，這通常與 Telegram 的設置有關，需手動調整代理設定。tg-ws-proxy 的社群活躍度不錯，開發者持續更新，並且有一定的問題解決率，顯示出其穩定性。這個專案目前處於穩定階段，適合任何需要在本地環境中提高 Telegram 使用體驗的用戶，特別是對於那些在網路環境不佳的地區。未來可能會增加更多的功能來提升用戶體驗。

**技術棧**：`Python 3.8+` · `Dockerfile`

## 重點功能

- 本地 MTProto 代理 — 提供快速且安全的 Telegram 連接，無需外部伺服器。
- WebSocket 支持 — 透過 WebSocket 連接提高數據傳輸的穩定性和速度。
- 自動切換連接 — 當 WebSocket 不可用時，自動切換至直接 TCP 連接。
- Fake TLS 模式 — 支持 Fake TLS，以便在某些網路環境中隱藏流量。
- 多平台支持 — 提供 Windows、macOS 和 Linux 的安裝包，方便不同用戶使用。

## 快速開始

1. 下載 Windows 版本
```bash
從 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy_windows.exe
```
2. 啟動代理
```bash
tg-ws-proxy
```
3. 在 Telegram 中設置代理
```bash
Telegram → 設定 → 進階設定 → 代理 → 添加 MTProto 代理，伺服器設置為 127.0.0.1，端口 1443
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 39 天內累積 4855 stars（124/天），forks 220（4.5%），這顯示出穩定的增長。作者 Flowseal 及其團隊在 Telegram 代理領域有一定的經驗，這個專案解決了 Telegram 用戶在某些地區無法穩定連接的問題，之前的解決方案往往需要依賴外部伺服器，且設置複雜。此專案的出現正好填補了這一空白，並且在社群中引發了討論。技術上，MTProto 代理的設計使得它能夠在不穩定的網路環境中提供更好的性能，這是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中穩定使用 Telegram 的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來在網路不穩定的環境中穩定使用 Telegram，因為它能夠繞過一些網路限制。
> - 開發者用它來測試 Telegram 應用的連接性能，因為它提供了簡單的本地代理設置，無需依賴外部伺服器。
> - 系統管理員用它來為公司內部的 Telegram 使用提供穩定的連接，因為它能夠在不影響安全性的情況下提高連接速度。

## 架構分析

tg-ws-proxy 採用簡單的本地代理架構，設計上旨在降低用戶的設置複雜度。它使用 Python 實現，並依賴於輕量級的庫來支持其功能。數據流從 Telegram Desktop 發送到本地代理，然後再轉發至 Telegram 的數據中心，這樣的設計使得用戶不需要配置外部伺服器，從而提高了安全性。

選擇 Python 作為開發語言使得開發和維護變得更加簡單，但也可能在高負載下面臨性能瓶頸。整體架構的擴展性良好，但在高流量情況下可能需要進一步優化。使用者在設置過程中可能會遇到與 Telegram 伺服器的連接問題，這需要用戶手動調整配置。

## 技術深入分析

tg-ws-proxy 的核心技術機制是基於 MTProto 協議，透過 WebSocket 連接來實現數據的快速轉發。這種設計使得數據在傳輸過程中保持加密，並且不需要依賴外部伺服器，從而提高了安全性。效能上，tg-ws-proxy 在低延遲環境中表現良好，但在高負載情況下可能會遇到性能瓶頸，特別是在處理大量連接時。選擇 Python 作為開發語言使得開發和維護變得更加簡單，但也可能在高負載下面臨性能挑戰。依賴樹相對簡單，主要依賴於幾個輕量級庫，這降低了整體的維護成本。技術風險方面，隨著用戶數量的增加，可能會出現連接不穩定的問題，這需要進一步的優化和調整。tg-ws-proxy 與主流框架的整合難度較低，但在 CI/CD pipeline 中的友好度尚需進一步提升，以便於自動化部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並包含了多個平台的安裝步驟。安裝過程相對順暢，但對於新手用戶來說，Telegram 的代理設置可能需要一些時間來理解。文件中沒有提供多語言支持，主要以俄文為主，對於非俄文用戶可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的本地代理設置，適合普通用戶。
> - 支持多平台，方便不同操作系統的用戶使用。
> - 提供 Fake TLS 模式，增加了隱私保護。
> - 社群活躍，持續更新和改進。

> [!danger] 缺點
> - 在某些網路環境中可能會遇到媒體文件無法加載的問題。
> - Windows Defender 可能會誤報為惡意軟體，需手動添加例外。
> - 對於新手用戶，Telegram 的代理設置可能存在學習曲線。
> - 在高負載情況下性能可能不如其他專業代理工具。

> [!warning] 注意事項
> - 僅支援 Python 3.8 以上版本。
> - 在某些網路環境中可能會遇到媒體文件無法加載的問題。
> - 需要手動設置 Telegram 的代理設定，對於新手用戶可能有一定的學習曲線。
> - Windows Defender 可能會誤報為惡意軟體，需手動添加例外。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一個更通用的代理解決方案，但沒有針對 Telegram 的優化，設置過程較為複雜。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 主要用於文件同步，並不專注於即時通訊的代理需求，功能範圍不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 是一個更全面的代理工具，支持多種協議，但設置和使用上比 tg-ws-proxy 更為複雜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Shadowsocks | Shadowsocks 提供了一個更通用的代理解決方案，支持多種協議，並且有著更廣泛的社群支持。 | 如果你的需求不僅限於 Telegram，並且需要支持多種應用的代理，Shadowsocks 會是更好的選擇。 | medium，因為需要重新配置和調整應用的代理設置。 |
| V2Ray | V2Ray 提供了更高級的功能，如多路由和流量混淆，適合對安全性有更高要求的用戶。 | 如果你需要更高級的功能和更強的隱私保護，V2Ray 會是更適合的選擇。 | high，因為其設置和配置相對複雜。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **Shadowsocks** | **V2Ray** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 提供了一個更通用的代理解決方案，支持多種協議，並且有著更廣泛的社群支持。 | V2Ray 提供了更高級的功能，如多路由和流量混淆，適合對安全性有更高要求的用戶。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整應用的代理設置。 | high，因為其設置和配置相對複雜。 |
> | 適用場景 | 主要場景 | 如果你的需求不僅限於 Telegram，並且需要支持多種應用 | 如果你需要更高級的功能和更強的隱私保護，V2Ray 會是更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人和小型團隊使用，穩定性良好，建議在非關鍵環境中試用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，媒體文件無法加載，特別是對於非 Premium 用戶的帳號。
  - 解法：手動調整 Telegram 的代理設定，刪除不必要的 DC IP。
- [MEDIUM] Windows Defender 可能會誤報為惡意軟體。
  - 解法：需手動添加例外或使用其他操作系統版本。
- [MEDIUM] 在高負載情況下，可能會出現連接不穩定的問題。
  - 解法：考慮使用更高效的硬體或優化配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊使用 Telegram 進行內部溝通 | 非常適合 | 提供穩定的連接，適合需要即時通訊的環境。 |
| 個人用戶在不穩定的網路環境中使用 Telegram | 適合 | 能夠有效提升使用體驗，減少連接問題。 |
| 大型企業需要高效的即時通訊解決方案 | 普通 | 雖然穩定，但在高負載下可能需要更高效的解決方案。 |
| 開發者需要測試 Telegram 應用的性能 | 非常適合 | 提供簡單的本地代理設置，方便測試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到穩定的 Telegram 使用體驗，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：tg-ws-proxy 本身不需要高權限，且不存取敏感資料，但需注意依賴鏈的安全性，建議定期檢查依賴庫的更新情況。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

tg-ws-proxy 最常與 Telegram Desktop 搭配使用，作為本地代理解決方案。在典型的工作流中，tg-ws-proxy 會在用戶啟動 Telegram Desktop 之前啟動，並在系統托盤中運行。實際整合範例：在一個使用 Windows 的環境中，安裝後用戶只需啟動 tg-ws-proxy，然後在 Telegram 中設置代理即可。tg-ws-proxy 支援與主流 CI 工具的整合，但在自動化部署方面的支持尚需加強，特別是在需要頻繁更新的情況下。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 tg-ws-proxy 出現之前，Telegram 用戶主要依賴於外部伺服器來穩定連接，這些方案往往設置複雜且不夠安全。隨著 MTProto 協議的發展，tg-ws-proxy 提供了一個簡單的本地解決方案，讓用戶能夠在不依賴外部伺服器的情況下穩定使用 Telegram。這個專案代表了即時通訊領域中對於安全性和穩定性的需求，未來可能會看到更多類似的本地代理解決方案出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Telegram 的使用
- 基本的網路知識
- 了解代理的基本概念

> [!tip] 導入策略
> 第一週：在個人環境中試用 tg-ws-proxy。第二週：在小型團隊內部進行測試，收集反饋。第三週：根據反饋調整設置，並撰寫使用手冊。第四週：在正式環境中部署，並監控性能。

**成功指標**：使用 Telegram 的連接穩定性提升 50%。

> [!warning] 退出計畫
> 如果需要退出，所有設定都存儲在標準 JSON 格式中，可以輕鬆轉移到其他代理工具。

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
| Forks | 220 |
| Open Issues | 151 |
| Issue 解決率 | 67% (303 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 326 KB |
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
> | [@Flowseal](https://github.com/Flowseal) | 121 |
> | [@IMDelewer](https://github.com/IMDelewer) | 3 |
> | [@KG7x](https://github.com/KG7x) | 2 |
> | [@qirashi](https://github.com/qirashi) | 2 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.6.1 — TG WS Proxy v1.6.1 (2026-04-11)

> [!info]- Release Notes
> - Исправлено тестирование автоматических CF-прокси доменов
> - Увеличил количество стандартных доменов (больше доступность)
> - Fake TLS режим для CLI ([подробнее тут](https://github.com/Flowseal/tg-ws-proxy?tab=readme-ov-file#fake-tls--nginx-upstream))

## 社群與生態

**社群活躍度**：社群活躍，定期更新，問題解決率約67%。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-11 ~ 2026-04-11）
> **活躍天數** 1 天 · **最新 commit** donate web link

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#492](https://github.com/Flowseal/tg-ws-proxy/issues/492) | [Предложение] Fake TLS для MTProto | 18 | 0 |
> | [#389](https://github.com/Flowseal/tg-ws-proxy/issues/389) | 📗 Вопросы и ответы `documentation` | 14 | 28 |
> | [#166](https://github.com/Flowseal/tg-ws-proxy/issues/166) | [Проблема] не грузит файлы медиа | 11 | 14 |

## README 摘錄

> [!info]- 展開查看原文 README
> > [!TIP]
> >
> > ### 🎉 Поддержать меня
> >
> > **USDT (TRC20)**: `TXPnKs2Ww1RD8JN6nChFUVmi5r2hqrWjuu`  
> > **BTC**: `bc1qr8vd6jelkyyry3m4mq6z5txdx4pl856fu6ss0w`  
> > **ETH**: `0x1417878fdc5047E670a77748B34819b9A49C72F1`  
> > **Другие монеты**: https://nowpayments.io/donation/flowseal
> 
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
> 5. Если WS недоступен (302 redirect) — автоматически переключается на CfProxy / прямое TCP-соединение
> 
> > [!IMPORTANT] 
> > ### Не грузит фото/видео?
> > **Удалите в настройках прокси в DC->IP всё, кроме `4:149.154.167.220`**  
> > **Если не помогло, то удалите вообще всё из этого поля**  
> > ####
> > Подобная проблема встречается на аккаунтах без Premium  
> > Если вам не помогло, то настраивайте свой домен по гайду отсюда: https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md
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
> - **Скопировать ссылку** — скопировать ссылку для подключения
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации (в т.ч. версия приложения, опциональная проверка обновлений с GitHub)
> - **Открыть логи** — открыть файл логов
> - **Выход** — остановить прокси и закрыть приложение
> 
> При первом запуске после старта может появиться запрос об открытии страницы релиза, если на GitHub вышла новая версия (отключается в настройках).
> 
> ### Настройка Telegram Desktop
> 
> ### Автоматически:
> 
> ПКМ по иконке в трее → **«Открыть в Telegram»**  
> Если не сработало (не открылся Telegram с подключением), то:
> 1. ПКМ по иконке в трее → **«Скопировать ссылку»** 
> 2. Отправьте ссылку себе в избранное в Telegram клиенте и нажмите по ней ЛКМ
> 3. Подключитесь
> 
> ### Вручную:
> 
> 1. Telegram → **Настройки** → **Продвинутые настройки** → **Тип подключения** → **Прокси**
> 2. Добавить прокси:
>    - **Тип:** MTProto
>    - **Сервер:** `127.0.0.1` (или переопределенный вами)
>    - **Порт:** `1443` (или переопределенный вами)
>    - **Secret:** из настроек или логов
> 
> ##
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
> | `--no-cfproxy` | `false` | Отключить попытку [проксирования через Cloudflare]((https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md)) |
> | `--cfproxy-domain` | | Указать свой домен для проксирования через Cloudfalre. [Подробнее тут](https://github.com/Flowseal/tg-ws-proxy/blob/main/docs/CfProxy.md) |
> | `--cfproxy-priority` | `true` | Пробовать проксировать через Cloudflare перед прямым TCP подключением |
> | `--fake-tls-domain` | | Включить Fake TLS (ee-secret) маскировку с указанным SNI-доменом |
> | `--proxy-protocol` | выкл. | Принимать HAProxy PROXY protocol v1 (для работы за nginx/haproxy с `proxy_protocol on`) |
> | `--buf-kb` | `256` | Размер буфера в КБ |
> | `--pool-size` | `4` | Количество заготовленных соединений на каждый DC |
> | `--log-file` | выкл. | Путь до файла, в который сохранять логи  |
> | `--log-max-mb` | `5` | Максимальный размер файла логов в МБ (после идёт перезапись) |
> | `--log-backups` | `0` | Количество сохранений логов после перезаписи |
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
> 
> # Fake TLS маскировка (ee-secret)
> tg-ws-proxy --fake-tls-domain example.com
> ```
> 
> ## Fake TLS + nginx upstream
> ### Домен (`--fake-tls-domain`) должен указывать на тот же IP, на котором стоит прокси
> 
> **Пример `nginx.conf` (stream):**
> 
> ```nginx
> upstream mtproto {
>     server 127.0.0.1:8446;
> }
> 
> map $ssl_preread_server_name $sni_name {
>     hostnames;
>     example.com mtproto;
>     # if you have xray with selfsni running:
>     # sub.example.com  www;
>     # default xray;
> }
> 
> # upstream xray {
> #     server 127.0.0.1:8443;
> # }
> # 
> # upstream www {
> #     server 127.0.0.1:7443;
> # }
> 
> server {
>     proxy_protocol on;
>     set_real_ip_from unix:;
>     listen          443;
>     proxy_pass      $sni_name;
>     ssl_preread     on;
> }
> ```
> 
> **Запуск прокси за nginx:**
> 
> ```bash
> python3 proxy/tg_ws_proxy.py \
>   --port 8446 \
>   --host 127.0.0.1 \
>   --fake-tls-domain example.com \
>   --proxy-protocol \
>   --secret 
> ``

## 延伸閱讀

相關概念：[[MTProto]] · [[WebSocket]] · [[代理工具]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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
> WHERE category = "其他" AND file.name != "Flowseal--tg-ws-proxy"
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
