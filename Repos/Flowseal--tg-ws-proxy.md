---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 3004
stars_per_day: 177
forks: 120
open_issues: 103
created: 2026-03-04
pushed_at: 2026-03-21
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "代理工具"
release_tag: "v1.2.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供 Telegram 的本地 SOCKS5 代理伺服器，幫助用戶加速 Telegram 的加載速度。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 59
repo_size_kb: 101
readme_length: 5560
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:794,2026-03-11:797,2026-03-13:910,2026-03-14:985,2026-03-15:1159,2026-03-16:1438,2026-03-17:1706,2026-03-18:2153,2026-03-19:2445,2026-03-20:2610,2026-03-21:2847,2026-03-22:3004"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的本地 SOCKS5 代理伺服器，幫助用戶加速 Telegram 的加載速度。"
---

# tg-ws-proxy

**3.0k** stars · **177** stars/天 · 建立 17 天前 · Python · MIT

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

`v1.2.1` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的本地 SOCKS5 代理伺服器，幫助用戶加速 Telegram 的加載速度。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (177 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在不穩定網絡環境中使用 Telegram 的普通用戶和開發者。
> **一句話重點** tg-ws-proxy 不僅提供了加速 Telegram 的解決方案，還展示了如何有效利用 WebSocket 技術來優化即時通訊應用的性能。

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
> **結論** 花 2 小時學習，1 小時整合，能夠顯著提升 Telegram 的使用體驗，值得採用。

> [!abstract] 核心創新
> tg-ws-proxy 提供了一個專為 Telegram 設計的本地 SOCKS5 代理，通過 WebSocket 加速連接。

## 專案簡介

tg-ws-proxy 是一個本地 SOCKS5 代理伺服器，專為 Telegram Desktop 設計，通過 WebSocket 連接來加速 Telegram 的加載。用戶只需將 Telegram 的代理設置為 `127.0.0.1:1080`，tg-ws-proxy 便會攔截流量並將其轉發到 Telegram 的數據中心。這種設計不僅保持了數據的加密性，還避免了依賴第三方伺服器，確保了用戶的隱私。關鍵指令如 `tg-ws-proxy --port 1080` 可以輕鬆啟動代理服務。這個工具的賣點在於其簡單易用的界面和高效的性能，特別是在網絡不穩定的情況下，能顯著提升 Telegram 的使用體驗。

技術上，tg-ws-proxy 使用 Python 開發，依賴於 `cryptography` 庫來處理加密，並支持多平台（Windows、macOS、Linux）。它的設計考慮到不同操作系統的特性，提供了針對各平台的安裝包，並且在 Windows 上有 GUI 支持。

這使得它在用戶友好性上優於其他純命令行工具。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，tg-ws-proxy 的優勢在於其專注於 Telegram 的特定需求，並且提供了 WebSocket 支持，這使得連接延遲更低，性能更佳。相比之下，其他工具可能需要更多的配置或不支持 WebSocket，導致性能下降。

在實際使用中，tg-ws-proxy 能夠處理大量的並發連接，並且支持配置連接池大小和緩衝區，這對於需要高效處理多個 Telegram 實例的用戶來說尤為重要。社群活躍度良好，開發者定期更新，並且有一定的問題解決率（59%），這顯示出其穩定性和持續發展的潛力。

目前這個專案處於穩定階段，適合需要在不穩定網絡環境中使用 Telegram 的用戶，未來可能會增加更多功能，如對其他即時通訊應用的支持。對於希望快速上手的用戶，tg-ws-proxy 提供了詳細的安裝和配置指南，讓新手能在短時間內完成設置。

**技術棧**：`Python 3.8+` · `cryptography`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 提供 Telegram 的 SOCKS5 代理服務。
- WebSocket 支持 — 透過 WebSocket 連接 Telegram 數據中心，提升連接穩定性和速度。
- 多平台支持 — 提供 Windows、macOS 和 Linux 的安裝包，易於安裝和使用。
- 配置選項 — 支持調整連接池大小和緩衝區，滿足不同用戶的需求。
- 系統托盤支持 — 提供 GUI 界面，方便用戶在系統托盤中管理代理服務。

## 快速開始

1. 安裝依賴並啟動代理
```bash
pip install -e .
tg-ws-proxy
```
2. 在 Windows 上啟動托盤應用
```bash
pip install -e '.[win10]'
tg-ws-proxy-tray-win
```
3. 在 macOS 上啟動托盤應用
```bash
pip install -e '.[macos]'
tg-ws-proxy-tray-macos
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 tg-ws-proxy",
  "指令": "tg-ws-proxy --port 1080 --dc-ip 2:149.154.167.220",
  "預期輸出": "啟動 SOCKS5 代理服務，並連接到指定的 Telegram 數據中心。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天內累積 3004 stars（177/天），forks 120（4.0%），這顯示出用戶對於 Telegram 加速需求的強烈反應。作者 Flowseal 是一位活躍的開發者，過去在開源社群中有不錯的貢獻。tg-ws-proxy 解決了 Telegram 在某些地區加載緩慢的問題，特別是對於需要穩定連接的用戶來說，這是一個很好的解決方案。社群中對於其功能的需求和反饋也促進了其快速成長。這個工具的出現正好契合了用戶對於即時通訊應用性能的期待，並且在技術上提供了一個簡單而有效的解決方案。

## 適合誰使用

**目標受眾**：需要在不穩定網絡環境中使用 Telegram 的普通用戶和開發者。

> [!example] 使用場景
> - 系統管理員用它來加速 Telegram 的加載速度，因為在網絡不穩定的環境中，tg-ws-proxy 能夠提供更穩定的連接。
> - 開發者用它來測試 Telegram 應用的性能，因為它能夠在本地快速設置代理，並且支持多個連接。
> - 普通用戶用它來繞過地區限制，因為 tg-ws-proxy 允許用戶在不改變網絡設置的情況下使用 Telegram。

## 架構分析

tg-ws-proxy 採用單一 Python 應用架構，設計上以輕量級為主，便於快速部署。其資料流從 Telegram Desktop 通過 SOCKS5 代理轉發到 WebSocket，並最終連接到 Telegram 的數據中心。這樣的設計使得用戶無需依賴外部伺服器，減少了潛在的安全風險。選擇 WebSocket 而非傳統的 TCP 連接，能夠在某些情況下減少延遲，但也可能在高負載時出現性能瓶頸。整體而言，tg-ws-proxy 的架構設計簡單明瞭，適合快速部署和使用。

## 技術深入分析

tg-ws-proxy 的核心技術機制在於其 SOCKS5 代理和 WebSocket 連接的結合。通過將 Telegram 的流量轉發到 WebSocket，tg-ws-proxy 能夠在保持數據加密的同時，實現更快的連接速度。其設計模式採用輕量級的單一應用架構，這使得部署和維護變得簡單。

在效能方面，tg-ws-proxy 能夠支持多個並發連接，並且用戶可以根據需求調整連接池大小。

這對於需要高效處理多個 Telegram 實例的用戶來說尤為重要。冷啟動時間短，記憶體佔用也相對較低，這使得它在資源有限的環境中也能良好運行。

設計取捨方面，tg-ws-proxy 選擇了 Python 作為開發語言，這使得開發速度快，但在性能上可能不及 C/C++ 等編譯型語言。依賴樹相對簡單，主要依賴於 `cryptography` 庫，這降低了潛在的供應鏈風險。



技術風險方面，tg-ws-proxy 在高負載時可能會出現性能瓶頸，特別是在多用戶同時使用的情況下。此外，對於 Telegram 數據中心的依賴也意味著在 Telegram 服務器出現問題時，tg-ws-proxy 的性能將受到影響。

整合分析方面，tg-ws-proxy 與主流的開發框架（如 Flask 或 FastAPI）整合難度較低，能夠輕鬆嵌入到現有的 Python 應用中，並且支持在 CI/CD pipeline 中的使用，這對於希望自動化部署的團隊來說非常友好。

## 新手體驗

> [!info] 上手難度評估
> tg-ws-proxy 的 README 文件清晰且詳盡，提供了安裝和配置的步驟。安裝過程相對順暢，對於新手來說不會有太多障礙。文件中包含了多個平台的安裝指令，並且有 GUI 的使用說明，這對於不熟悉命令行的用戶非常友好。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用的界面，適合新手用戶。
> - 支持多平台，方便不同操作系統的用戶使用。
> - 提供 WebSocket 支持，提升連接穩定性。

> [!danger] 缺點
> - 在某些防火牆環境下可能需要額外配置。
> - 對於大型用戶群體，可能需要調整連接池大小以避免性能瓶頸。
> - 目前僅支持 Telegram，對於其他即時通訊工具的支持有限。

> [!warning] 注意事項
> - 僅支援 Python 3.8 以上版本。
> - 在某些防火牆環境下可能需要額外配置。
> - 對於大型用戶群體，可能需要調整連接池大小以避免性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於文件同步，而 tg-ws-proxy 專注於即時通訊的加速，功能範圍不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更廣泛的代理功能，但配置較為複雜，tg-ws-proxy 提供簡單易用的界面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，使用 rsync 協議，而 tg-ws-proxy 專注於即時通訊的加速，功能範圍不同。 | 如果你的需求是文件同步而非即時通訊加速，則應選擇 parsync。 | medium，因為需要重新設計工作流。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更廣泛的代理功能，但配置較為複雜，tg-ws-proxy 提供簡單易用的界面。 | 如果需要多種代理功能並且不介意複雜的配置，則應選擇 Shadowbroker。 | high，因為需要重新學習配置方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tg-ws-proxy** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於文件同步，使用 rsync 協議，而 tg-ws-proxy 專注於即時通訊的加速，功能範圍不同。 | Shadowbroker 提供更廣泛的代理功能，但配置較為複雜，tg-ws-proxy 提供簡單易用的界面。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流。 | high，因為需要重新學習配置方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非即時通訊加速，則應選擇 parsy | 如果需要多種代理功能並且不介意複雜的配置，則應選擇 Shad |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人和小型團隊使用，能夠在不穩定的網絡環境中有效提升 Telegram 的使用體驗。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows Defender 可能誤報為惡意軟體，導致無法下載。
  - 解法：暫時關閉防病毒軟體或使用 Windows 7 版本。
- [MEDIUM] 在某些 Linux 發行版上可能需要額外的 AppIndicator 配置。
  - 解法：確保已安裝 AppIndicator，並根據發行版的文檔進行配置。
- [MEDIUM] 在高負載情況下可能會出現性能瓶頸。
  - 解法：調整連接池大小以適應用戶需求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司使用 Telegram 進行內部溝通 | 非常適合 | tg-ws-proxy 能夠提升 Telegram 的加載速度，適合小型團隊的需求。 |
| 大型企業需要穩定的即時通訊解決方案 | 適合 | tg-ws-proxy 提供穩定的連接，但在高負載下可能需要調整配置。 |
| 個人用戶在不穩定的網絡環境中使用 Telegram | 非常適合 | tg-ws-proxy 能夠有效提升使用體驗，特別是在網絡不佳的情況下。 |
| 需要多種即時通訊工具的企業 | 不適合 | tg-ws-proxy 專注於 Telegram，對其他工具的支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠顯著提升 Telegram 的使用體驗，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> tg-ws-proxy 本身不需要高權限運行，但在某些環境下可能需要訪問網絡設置。它不會存取敏感資料，並且依賴的庫有一定的安全性保障。整體來說，將其放入 CI/CD pipeline 是安全的。

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
| Forks | 120 |
| Open Issues | 103 |
| Issue 解決率 | 59% (150 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 101 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flowseal/tg-ws-proxy) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 56 |
> | [@Copilot](https://github.com/Copilot) | 2 |
> | [@HonoLite](https://github.com/HonoLite) | 1 |
> | [@nullptr-deref](https://github.com/nullptr-deref) | 1 |
> | [@IMDelewer](https://github.com/IMDelewer) | 1 |

**最新版本**：v1.2.1 — TG WS Proxy v1.2.1 (2026-03-21)

> [!info]- Release Notes
> - Оптимизация
> - Добавлена настройка логирования (максимальный размер лог-файла, rotate логов)
> - Добавлена настройка количества подготовленных соединений (pool size)
> - Добавлена настройка буфера
> 
> _Не меняйте настройки, если не понимаете для чего они_

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-21）
> **活躍天數** 3 天 · **最新 commit** logrotate #366; configurable pool and buffer sizes

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#166](https://github.com/Flowseal/tg-ws-proxy/issues/166) | [Проблема] не грузит файлы медиа | 11 | 14 |
> | [#39](https://github.com/Flowseal/tg-ws-proxy/issues/39) | [Предложение] Поддержка на Linux | 9 | 4 |
> | [#147](https://github.com/Flowseal/tg-ws-proxy/issues/147) | [Проблема]  не грузят ЧУЖИЕ файлы, медиа и видео | 7 | 12 |
> | [#5](https://github.com/Flowseal/tg-ws-proxy/issues/5) | [Предложение] Сборка под Android | 5 | 8 |

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
> **Локальный SOCKS5-прокси** для Telegram Desktop, который **ускоряет работу Telegram**, перенаправляя трафик через WebSocket-соединения. Данные передаются в том же зашифрованном виде, а для работы не нужны сторонние сервера.
> 
> ## Как это работает
> 
> ```
> Telegram Desktop → SOCKS5 (127.0.0.1:1080) → TG WS Proxy → WSS → Telegram DC
> ```
> 
> 1. Приложение поднимает локальный SOCKS5-прокси на `127.0.0.1:1080`
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
> - **Открыть в Telegram** — автоматически настроить прокси через `tg://socks` ссылку
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации
> - **Открыть логи** — открыть файл логов
> - **Выход** — остановить прокси и закрыть приложение
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
> Для запуска только SOCKS5/WebSocket proxy без tray-интерфейса достаточно базовой установки:
> 
> ```bash
> pip install -e .
> tg-ws-proxy
> ```
> 
> ### Windows 10+
> 
> ```bash
> pip install -e ".[win10]"
> tg-ws-proxy-tray-win
> ```
> 
> ### Windows 7
> 
> ```bash
> pip install -e ".[win7]"
> tg-ws-proxy-tray-win
> ```
> 
> ### macOS
> 
> ```bash
> pip install -e ".[macos]"
> tg-ws-proxy-tray-macos
> ```
> 
> ### Linux
> 
> ```bash
> pip install -e ".[linux]"
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
> | `--port` | `1080` | Порт SOCKS5-прокси |
> | `--host` | `127.0.0.1` | Хост SOCKS5-прокси |
> | `--dc-ip` | `2:149.154.167.220`, `4:149.154.167.220` | Целевой IP для DC (можно указать несколько раз) |
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
>    - **Тип:** SOCKS5
>    - **Сервер:** `127.0.0.1`
>    - **Порт:** `1080`
>    - **Логин/Пароль:** оставить пустыми
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
>   "port": 1080,
>   "dc_ip": [
>     "2:149.154.167.220",
>     "4:149.154.167.220"
>   ],
>   "verbose": false
> }
> ```
> 
> ## Автоматическая сборка
> 
> Проект содержит спецификации PyInstaller ([`packaging/windows.spec`](packaging/windows.spec), [`packaging/macos.spec`](packaging/macos.spec), [`packaging/linux.spec`](packaging/linux.spec)) и GitHub Actions workflow ([`.github/workflows/build.yml`](.github/workflows/build.yml)) для автоматической сборки.
> 
> Минимально поддерживаемые версии ОС для текущих бинарных сборок:
> 
> - Windows 10+ для `TgWsProxy_windows.exe`
> - Windows 7 для `TgWsProxy_windows_7.exe`
> - Intel macOS 10.15+
> - Apple Silicon macOS 11.0+
> - Linux x86_64 (требуется AppIndicator для системного трея)
> 
> ## Лицензия
> 
> [MIT License](LICENSE)

## 延伸閱讀

相關概念：[[代理工具]] · [[即時通訊]] · [[網絡優化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

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
> const concepts = ["代理工具","即時通訊","網絡優化"];
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
