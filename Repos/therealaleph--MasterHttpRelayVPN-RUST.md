---
repo: therealaleph/MasterHttpRelayVPN-RUST
url: https://github.com/therealaleph/MasterHttpRelayVPN-RUST
owner: therealaleph
owner_type: User
language: Rust
license: MIT
description: "Rust port of @masterking32's MasterHttpRelayVPN — all credit to @masterking32 for the original idea and Python implementation. Free DPI bypass via a Google Apps Script relay with TLS SNI concealment. CLI + cross-platform desktop UI, HTTP + SOCKS5 proxy, no runtime deps."
homepage: "https://github.com/masterking32/MasterHttpRelayVPN"
stars: 855
stars_per_day: 143
forks: 110
open_issues: 49
created: 2026-04-21
pushed_at: 2026-04-28
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "安全"
subcategory: "DPI 繞過"
release_tag: "v1.8.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "透過 Google Apps Script 中繼實現免費的 DPI 迴避，無需運行時依賴。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-05"
contributor_count: 5
engagement: "medium"
issue_close_rate: 83
repo_size_kb: 913350
readme_length: 9929
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:855"
tags:
  - github
  - "category/安全"
  - "lang/rust"
  - easy_install
  - "topic/anti_censorship"
  - "topic/censorship_circumvention"
  - "topic/cross_platform"
  - "topic/desktop_app"
  - "topic/domain_fronting"
aliases:
  - "MasterHttpRelayVPN-RUST"
  - "therealaleph/MasterHttpRelayVPN-RUST"
  - "透過 Google Apps Script 中繼實現免費的 DPI 迴避，無需運行時依賴。"
---

# MasterHttpRelayVPN-RUST

**855** stars · **143** stars/天 · 建立 6 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.8.0` `easy-install`

`anti-censorship` `censorship-circumvention` `cross-platform` `desktop-app` `domain-fronting` `dpi-bypass` `egui` `google-apps-script` `gui` `http-proxy` `iran` `mitm` `proxy` `rust` `sni` `socks5` `tls`

> [!summary] 一句話摘要
> 透過 Google Apps Script 中繼實現免費的 DPI 迴避，無需運行時依賴。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (143 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在高封鎖環境中快速設置 VPN 的個人用戶或小型團隊。
> **一句話重點** 這個專案的最大優勢在於其簡單的安裝和使用方式，特別適合在高封鎖環境中需要快速部署的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "DPI 繞過" && p.file.name !== "therealaleph--MasterHttpRelayVPN-RUST" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 DPI 繞過 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到簡單易用的 DPI 繞過工具，值得。

> [!abstract] 核心創新
> 透過 Google Apps Script 中繼實現免費的 DPI 迴避，無需運行時依賴。

## 專案簡介

**核心機制**

MasterHttpRelayVPN-RUST 是一個用 Rust 實現的 VPN 工具，旨在通過 Google Apps Script 中繼來繞過深度封包檢測（DPI）。用戶只需將 Apps Script 部署到自己的 Google 帳戶，然後通過本地的 CLI 或桌面 UI 來發送請求。具體流程為：用戶的瀏覽器或應用發送請求到本地的 mhrv-rs，然後這個工具會將請求轉發到 Google 的伺服器，並利用 TLS SNI 隱藏實際的目標網站。這樣，ISP 只能看到流量指向 `www.google.com`，而實際請求則由 Google Apps Script 轉發到真實的網站。這個工具的賣點在於其簡單的安裝過程和無需額外依賴，僅需下載一個小型可執行檔即可運行。

**技術實作**



技術上，這個專案使用了 Rust 語言，並依賴於 tokio 進行異步處理，這使得它在高併發場景下能夠保持良好的性能。依賴樹相對簡單，主要依賴於 tokio 和 rustls 等庫，這些都是 Rust 生態中成熟且穩定的選擇。與 Python 版本相比，這個 Rust 版本的優勢在於更小的執行檔和更快的啟動時間，因為它不需要額外的 Python 環境。

與其他類似工具相比，如 `shadowsocks` 和 `v2ray`，MasterHttpRelayVPN-RUST 的主要差異在於其使用 Google Apps Script 作為中繼，這使得它能夠在某些網絡環境中更有效地繞過封鎖。`shadowsocks` 需要配置伺服器，而這個工具則完全依賴於 Google 的基礎設施，降低了設置的複雜性。

**競品比較**



實際使用中，這個工具能夠處理多達 30 個並發請求，這是 Google Apps Script 的限制。用戶需要注意的是，使用過程中可能會遇到的問題包括 Google 帳戶的限制和 Apps Script 的執行時間限制。社群活躍度良好，開發者對於問題的回應速度也相對較快。

這個專案目前處於 beta 階段，適合對於需要在高封鎖環境中使用的用戶，特別是那些不想花太多時間在設置上。未來幾個月內，預計會有更多功能的加入，如流量分割和主動探測防禦。

**效果與限制**



建議使用場景包括：需要在高封鎖環境中訪問被限制網站的個人用戶，或是小型團隊需要快速設置的情況。對於大型企業或需要高可用性的應用場景，可能需要考慮更穩定的解決方案如 `v2ray`。

**技術棧**：`Rust 1.60` · `Tokio 1.0` · `Rustls 0.23`

## 重點功能

- 免費的 DPI 繞過 — 使用 Google Apps Script 作為中繼，隱藏實際流量。
- 無需運行時依賴 — 只需下載一個小型可執行檔即可運行。
- CLI 和桌面 UI — 提供命令行和圖形界面，方便不同用戶需求。
- 支持 HTTP 和 SOCKS5 代理 — 用戶可以根據需求選擇不同的代理模式。
- TLS SNI 隱藏 — 使得 ISP 只能看到流量指向 `www.google.com`，增加隱私性。

## 快速開始

1. 部署 Google Apps Script
```bash
部署 `CodeFull.gs` 作為 Web App。
```
2. 運行 Docker 映像
```bash
docker run -d --name mhrv-tunnel --restart unless-stopped -p 8080:8080 -e TUNNEL_AUTH_KEY=your-strong-secret ghcr.io/therealaleph/mhrv-tunnel-node:latest
```
3. 配置本地工具
```bash
設置 `config.json` 中的 `mode` 和 `script_id`。
```

## 程式碼範例

```rust
{
  "前置條件": "已經部署 Google Apps Script 並運行 Docker 映像。",
  "指令": "mhrv-rs --install-cert",
  "預期輸出": "安裝成功並信任本地 CA。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 855 stars（143/天），forks 110（12.9%），這顯示出相對穩定的增長。作者 therealaleph 是一位活躍的開發者，之前已經有相關的開源項目。這個專案解決了在高封鎖環境中，使用者難以設置 VPN 的痛點，特別是對於不熟悉技術的用戶來說，簡化了安裝過程。最近的推廣活動和社群討論也促進了這個專案的曝光率。技術上，Rust 的性能優勢和簡化的安裝流程使得這個工具在當前的環境中更具吸引力。

## 適合誰使用

**目標受眾**：需要在高封鎖環境中快速設置 VPN 的個人用戶或小型團隊。

> [!example] 使用場景
> - 學生用它來繞過學校的網絡限制，安全地訪問被封鎖的學術資源，因為它不需要複雜的設置和運行時依賴。
> - 自由工作者用它來訪問被封鎖的網站，保持工作流不受影響，因為它能夠快速部署並且不需要伺服器。
> - 小型團隊用它來在高風險地區進行安全通信，因為它的簡單性和低成本使得團隊能夠快速上手。

## 架構分析

這個專案採用 Rust 語言實現，核心架構是基於異步處理的 tokio 框架，這使得它能夠高效處理多個請求。資料流方面，請求首先進入本地的 mhrv-rs，然後通過 TLS 加密發送到 Google 的伺服器，最終由 Apps Script 中繼到實際的目標網站。這種設計的好處在於隱藏了實際的流量來源，但代價是依賴於 Google 的基礎設施。擴展性方面，這個工具能夠支持多個 Google 帳戶的部署，從而提高並發請求的能力。

## 技術深入分析

MasterHttpRelayVPN-RUST 的核心技術在於使用 Google Apps Script 作為中繼，這使得它能夠在高封鎖環境中有效繞過 DPI。它的資料流設計是將用戶的請求通過本地的 mhrv-rs 進行處理，然後發送到 Google 的伺服器，這樣 ISP 只能看到流量指向 `www.google.com`。這個設計的優勢在於隱藏了實際的流量來源，並且簡化了使用者的設置過程。效能方面，這個工具能夠支持多達 30 個並發請求，這是 Google Apps Script 的限制，對於大多數個人用戶來說已經足夠。

選擇 Rust 作為開發語言的原因在於其高效的性能和低內存佔用，這使得它在處理高併發請求時表現出色。這個專案的依賴樹相對簡單，主要依賴於 tokio 和 rustls，這些都是 Rust 生態系統中成熟且穩定的選擇。技術風險方面，依賴 Google 的基礎設施可能會在未來帶來不確定性，特別是在 Google 政策變更的情況下。整合方面，這個工具可以輕鬆與現有的開發流程結合，並且不需要額外的 CI/CD 設置，這對於小型團隊來說是一個重要的優勢。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指南。安裝過程相對順暢，但需要管理權限來安裝本地 CA。文檔有多語言支持，對於不同語言的用戶都很友好。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的伺服器配置。
> - 小型可執行檔，快速部署。
> - 有效的 DPI 繞過，適合高封鎖環境。

> [!danger] 缺點
> - 依賴 Google Apps Script，可能受到 Google 的限制。
> - 每個帳戶的請求數量有限，無法滿足高流量需求。
> - 需要管理本地 CA，對於某些用戶來說可能較為繁瑣。

> [!warning] 注意事項
> - 僅支援 Google Apps Script 作為中繼，無法使用其他服務。
> - 每個 Google 帳戶的請求數量有限制，最多 30 個並發請求。
> - 需要在首次運行時安裝本地 CA，可能需要管理權限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 需要伺服器端的設置，而 MasterHttpRelayVPN-RUST 只需用戶端配置，降低了使用門檻。 |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | V2Ray 提供更全面的功能和協議支持，但配置較為複雜，適合技術更熟練的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [shadowsocks/shadowsocks](https://github.com/shadowsocks/shadowsocks) | Shadowsocks 需要伺服器端的設置，而 MasterHttpRelayVPN-RUST 只需用戶端配置，降低了使用門檻。 | 如果你的團隊已經在用 Shadowsocks 且需要更全面的功能支持。 | medium，因為需要重新配置伺服器和客戶端。 |
| [v2ray/v2ray-core](https://github.com/v2ray/v2ray-core) | V2Ray 提供更全面的功能和協議支持，但配置較為複雜，適合技術更熟練的用戶。 | 如果需要更高的靈活性和多樣的協議支持。 | high，因為需要重新設置和學習新的配置方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **MasterHttpRelayVPN-RUST** | **shadowsocks** | **v2ray-core** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Shadowsocks 需要伺服器端的設置，而 MasterHttpRelayVPN-RUST 只需用戶端配置，降低了使用門檻。 | V2Ray 提供更全面的功能和協議支持，但配置較為複雜，適合技術更熟練的用戶。 |
> | 遷移成本 | - | medium，因為需要重新配置伺服器和客戶端。 | high，因為需要重新設置和學習新的配置方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Shadowsocks 且需要更全面的 | 如果需要更高的靈活性和多樣的協議支持。 |

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

- **[HIGH]** 首次運行時需要管理權限來安裝本地 CA，可能會遇到權限問題。
  - 解法：確保使用者有足夠的管理權限。
- [MEDIUM] Google Apps Script 的請求數量限制可能會導致性能瓶頸。
  - 解法：使用多個 Google 帳戶來分散請求。
- [MEDIUM] 某些防火牆可能會阻止 Google Apps Script 的流量。
  - 解法：嘗試使用不同的 Google IP 地址。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在高封鎖環境中訪問被限制網站的個人用戶 | 非常適合 | 簡單易用，無需複雜的伺服器配置。 |
| 小型團隊需要快速設置的情況 | 適合 | 快速部署且無需運行時依賴。 |
| 大型企業需要高可用性的應用場景 | 不適合 | 依賴 Google 的基礎設施，無法滿足高流量需求。 |
| 自由工作者需要安全通信 | 非常適合 | 能夠快速設置並保持工作流不受影響。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到簡單易用的 DPI 繞過工具，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個工具需要安裝本地 CA，這意味著它需要一定的權限來管理系統信任的證書。它不會存取敏感資料，但使用者需要確保 CA 的安全性。依賴鏈的信任程度高，因為主要依賴於 Rust 生態系統中的成熟庫。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
| Forks | 110 |
| Open Issues | 49 |
| Issue 解決率 | 83% (245 closed) |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-21 |
| 官方網站 | [Link](https://github.com/masterking32/MasterHttpRelayVPN) |
| Repo 大小 | 891.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/therealaleph/MasterHttpRelayVPN-RUST) |
| Topics | `anti-censorship` `censorship-circumvention` `cross-platform` `desktop-app` `domain-fronting` `dpi-bypass` `egui` `google-apps-script` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `name` `path` `crate-type` `name` `path` `name` `path` `required-features` `default` `ui`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 79
>     "Kotlin" : 18
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@therealaleph](https://github.com/therealaleph) | 166 |
> | [@dazzling-no-more](https://github.com/dazzling-no-more) | 18 |
> | [@freeinternet865](https://github.com/freeinternet865) | 14 |
> | [@v4g4b0nd-0x76](https://github.com/v4g4b0nd-0x76) | 10 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |

**最新版本**：v1.8.0 (2026-04-27)

> [!info]- Release Notes
> • Padding random برای پایلود Apps Script ([#313](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/313)، [#365](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/365) Section 1): هر request به Apps Script حالا یک فیلد `_pad` با طول uniform-random بین ۰-۱۰۲۴ بایت اضافه می‌کنه — به‌صورت base64 encoded. بدون این، طول request body در هر mode تقریباً ثابت می‌مونه + DPI ایران می‌تونه بر اساس distribution طول fingerprint بزنه. حالا packet sizes uniformly distributed هستن + length-clustering match نمی‌کنه. تأثیر bandwidth: متوسط ۵۱۲ بایت اضافه به batch ~۲KB = +۲۵٪، negligible در برابر floor latency Apps Script. backward-compatible: Code.gs قدیم هم کار می‌کنه (unknown JSON fields ignore می‌شن).
> • Defense active probing: decoy 200 HTML در Code.gs / CodeFull.gs روی AUTH_KEY بد ([#365](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/365) Section 3): قبلاً request بدون auth `{"e":"unauthorized"}` JSON برمی‌گردوند — fingerprint مشخص "این یه API endpoint هست". حالا یه HTML benign placeholder برمی‌گردونه که شبیه یه Apps Script web app forgotten-but-public هست. scanner active که با AUTH_KEY ساختگی POST می‌کنه categorize می‌کنه به‌عنوان "non-tunnel، nothing interesting". flag `DIAGNOSTIC_MODE` برای setup که response قدیمی JSON رو برمی‌گردونه — default `false` (production-strong)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，回應問題速度快。
**連結**：[文件](https://github.com/therealaleph/MasterHttpRelayVPN-RUST)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-04-28）
> **活躍天數** 2 天 · **最新 commit** ci(telegram): use public mhrv_rs link in main-channel post + add invite

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#375](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/375) | full tunnel usage estimated | 1 | 1 |
> | [#369](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/369) | [RFC] Roadmap to v1.9: xmux-style Stream Splitting, Temporal `enhancement` | 1 | 1 |
> | [#366](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/366) | لطفا یک in-app updater تدارک ببینید `enhancement` | 1 | 2 |
> | [#211](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/211) | اتصال بقیه دستگاه ها به دستگاه کانکت شده | 1 | 9 |
> | [#378](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues/378) | 502 error | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MasterHttpRelayVPN-RUST
> 
> [](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/releases/latest)
> [](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/releases)
> [](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/actions/workflows/release.yml)
> [](LICENSE)
> [](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/stargazers)
> [](https://sh1n.org/donate)
> 
> Rust port of [@masterking32's MasterHttpRelayVPN](https://github.com/masterking32/MasterHttpRelayVPN). **All credit for the original idea and the Python implementation goes to [@masterking32](https://github.com/masterking32).** This is a faithful reimplementation of the `apps_script` mode, packaged as two tiny binaries (CLI + desktop UI) with no runtime dependencies.
> 
> Free DPI bypass via Google Apps Script as a remote relay, with TLS SNI concealment. Your ISP's censor sees traffic going to `www.google.com`; behind the scenes a free Google Apps Script that you deploy in your own Google account fetches the real website for you.
> 
> > **Heads up on authorship:** the bulk of this Rust port was written with [Anthropic's Claude](https://claude.com) driving, reviewed by a human on every commit. Bug reports, fixes, and contributions are all welcome — see the [issues page](https://github.com/therealaleph/MasterHttpRelayVPN-RUST/issues).
> 
> **[Quick Start (English)](SF_README.md#quick-start)** | **[English Guide](#setup-guide)** | **[راهنمای خلاصه فارسی](SF_README.md#راهنمای-خلاصه-فارسی)** | **[راهنمای کامل فارسی](#راهنمای-فارسی)**
> 
> > **New here?** The Quick Start versions are short, plain-language, and cover the most common questions. The full guides have everything else (config options, full tunnel mode, OpenWRT, security notes).
> 
> 
> ## Setup Guide
> 
> 
> ### Step 3 — First run: install the MITM CA
> 
> To route your browser's HTTPS traffic through the Apps Script relay, `mhrv-rs` has to terminate TLS locally on your machine, forward the request through the relay, and re-encrypt the response with a certificate your browser trusts. That requires a small **local** Certificate Authority.
> 
> **What actually happens on first run:**
> 
> - A fresh CA keypair (`ca/ca.crt` + `ca/ca.key`) is generated **on your machine**, in your user-data dir.
> - The public `ca.crt` is added to your system trust store so browsers accept the per-site certificates `mhrv-rs` mints on the fly. This is the step that needs sudo / Administrator.
> - The private `ca.key` **never leaves your machine**. Nothing uploads it, nothing phones home, and no remote party — including the Apps Script relay — can use it to impersonate sites to you.
> - You can revoke it at any time with `mhrv-rs --remove-cert` (or the **Remove CA** button in the UI) — it clears the CA from the OS trust store, verifies the revocation by name before touching disk, and deletes the on-disk `ca/` folder. NSS cleanup (Firefox profiles + Chrome/Chromium on Linux) is best-effort: if `certutil` from libnss3-tools isn't on PATH or a browser has the NSS DB locked, the tool logs a manual-cleanup hint. `config.json` and your Apps Script deployment are not touched, so regenerating the CA never requires redeploying `Code.gs`. Manual fallback: the certificate's Common Name is `MasterHttpRelayVPN` (not `mhrv-rs` — that's the app name, not the cert name). Delete by that CN in your OS keychain (macOS: Keychain Access → System → delete `MasterHttpRelayVPN`), Windows `certmgr.msc` → Trusted Root Certification Authorities, or `/usr/local/share/ca-certificates/MasterHttpRelayVPN.crt` + `sudo update-ca-certificates` on Linux; remove the `MasterHttpRelayVPN` entry from each browser's cert settings; and remove the `ca/` folder under the user-data dir.
> 
> The launcher does all of this for you and then starts the UI:
> 
> | platform | how |
> |---|---|
> | macOS | double-click `run.command` in Finder (or `./run.command` in a terminal) |
> | Linux | `./run.sh` from a terminal |
> | Windows | double-click `run.bat` |
> 
> It will ask for your password (sudo / UAC) **only** to trust the CA. After that the launcher also starts `mhrv-rs-ui`. On later runs you don't need the launcher — the CA is already trusted, so you can open `mhrv-rs.app` / `mhrv-rs-ui.exe` / `mhrv-rs-ui` directly.
> 
> If you prefer to do the CA step by hand:
> 
> ```bash
> 
> ### Quick start
> 
> 1. Deploy [`CodeFull.gs`](assets/apps_script/CodeFull.gs) as a **Web App deployment** on each Google account (same steps as `Code.gs`, but use the full-mode script that forwards to your tunnel-node). Use **one deployment per Google account** — the 30-concurrent-request limit is per account, so multiple deployments on the same account share the same pool and don't add concurrency. To scale, add more accounts:
>    - **Solo use** → 1–2 accounts is plenty
>    - **Shared with ~3 people** → 3 accounts
>    - **Shared with a group** → one account per heavy user
> 2. Deploy the [tunnel-node](tunnel-node/) on a VPS. The fastest path is the prebuilt Docker image:
>    ```bash
>    docker run -d --name mhrv-tunnel --restart unless-stopped \
>      -p 8080:8080 -e TUNNEL_AUTH_KEY=your-strong-secret \
>      ghcr.io/therealaleph/mhrv-tunnel-node:latest
>    ```
>    Multi-arch (linux/amd64 + linux/arm64), runs as a non-root user, ~32 MB compressed. Pin a version tag (`:1.5.0`) for production. See [tunnel-node/README.md](tunnel-node/README.md) for Cloud Run, docker-compose, and source-build alternatives.
> 3. Set `"mode": "full"` in your config with all deployment IDs:
> 
> ```json
> {
>   "mode": "full",
>   "script_id": ["id1", "id2", "id3", "id4", "id5", "id6"],
>   "auth_key": "your-secret"
> }
> ```
> 
> 
> ### Step 4 — Configure in the UI
> 
> Open the UI and fill in the form:
> 
> - **Apps Script ID** — the Deployment ID from Step 1. Add multiple IDs (one per line in the UI, or a JSON array in `config.json`) for higher quota **and** lower latency. In `apps_script` mode, IDs are round-robined. In `full` mode, each deployment gets its own pool of 30 concurrent requests (the Apps Script per-account limit), so more IDs = more total throughput (see [Full tunnel mode](#full-tunnel-mode) below).
> - **Auth key** — the same secret you set in `Code.gs`.
> - **Google IP** — `216.239.38.120` is a solid default. Use the **scan** button to probe for a faster one from your network.
> - **Front domain** — keep `www.google.com`.
> - **HTTP port** / **SOCKS5 port** — defaults `8085` / `8086`.
> 
> Hit **Save**, then **Start**. Use **Test** any time to send one request end-to-end through the relay and report the result.
> 
> 
> ## Telegram, IMAP, SSH — pair with xray (optional)
> 
> The Apps Script relay only speaks HTTP request/response, so non-HTTP protocols (Telegram MTProto, IMAP, SSH, arbitrary raw TCP) can't travel through it. Without anything else, those flows hit the direct-TCP fallback — which means they're not actually tunneled, and an ISP that blocks Telegram will still block them.
> 
> Fix: run a local [xray](https://github.com/XTLS/Xray-core) (or v2ray / sing-box) with a VLESS/Trojan/Shadowsocks outbound that goes to a VPS of your own, and point mhrv-rs at xray's SOCKS5 inbound via the **Upstream SOCKS5** field (or the `upstream_socks5` config key). When set, raw-TCP flows coming through mhrv-rs's SOCKS5 listener get chained into xray → the real tunnel, instead of connecting directly.
> 
> ```
> Telegram  ┐                                                    ┌─ Apps Script ── HTTP/HTTPS
>           ├─ SOCKS5 :8086 ─┤ mhrv-rs ├─ SNI rewrite ─── google.com, youtube.com, …
> Browser   ┘                                                    └─ upstream SOCKS5 ─ xray ── VLESS ── your VPS   (Telegram, IMAP, SSH, raw TCP)
> ```
> 
> Example config fragment (both UI and JSON):
> 
> ```json
> {
>   "upstream_socks5": "127.0.0.1:50529"
> }
> ```
> 
> HTTP/HTTPS continues to route through the Apps Script relay (no change), and the SNI-rewrite tunnel for `google.com` / `youtube.com` / etc. keeps bypassing both — so YouTube stays as fast as before while Telegram gets a real tunnel.
> 
> 
> ## Why this exists
> 
> The original Python project is excellent but requires Python + `pip install cryptography h2` + system deps. For u

## 延伸閱讀

相關概念：[[DPI 繞過]] · [[HTTP 代理]] · [[TLS SNI 隱藏]]

相關專案：[[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[masterking32--MasterHttpRelayVPN|masterking32/MasterHttpRelayVPN]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[openai--privacy-filter|openai/privacy-filter]] · [[patterniha--SNI-Spoofing|patterniha/SNI-Spoofing]]

[GitHub](https://github.com/therealaleph/MasterHttpRelayVPN-RUST) · [官方網站](https://github.com/masterking32/MasterHttpRelayVPN)

## 相關收錄

> [!note]- 直接競品（同子分類：DPI 繞過）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "DPI 繞過" AND file.name != "therealaleph--MasterHttpRelayVPN-RUST"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "therealaleph--MasterHttpRelayVPN-RUST"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "therealaleph--MasterHttpRelayVPN-RUST" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "therealaleph--MasterHttpRelayVPN-RUST"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["DPI 繞過","HTTP 代理","TLS SNI 隱藏"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "therealaleph--MasterHttpRelayVPN-RUST" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "therealaleph--MasterHttpRelayVPN-RUST" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "therealaleph" AND file.name != "therealaleph--MasterHttpRelayVPN-RUST"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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
> const me = dv.page("Repos/therealaleph--MasterHttpRelayVPN-RUST");
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

> **2026-04-28** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 首次收錄，855 stars
