---
repo: CluvexStudio/Aether
url: https://github.com/CluvexStudio/Aether
owner: CluvexStudio
owner_type: User
language: Rust
license: AGPL-3.0
description: ""
homepage: ""
stars: 1319
stars_per_day: 264
forks: 78
open_issues: 7
created: 2026-07-14
pushed_at: 2026-07-19
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "安全"
subcategory: "網路隱私"
release_tag: "v1.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "提供一個用於繞過網路審查的代理客戶端，讓使用者能夠在受限網路中自由上網。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-23"
contributor_count: 3
engagement: "low"
issue_close_rate: 67
repo_size_kb: 2166
readme_length: 4594
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:941,2026-07-17:942,2026-07-18:1146,2026-07-18:1148,2026-07-19:1258,2026-07-19:1258,2026-07-20:1319"
tags:
  - github
  - "category/安全"
  - "lang/rust"
aliases:
  - "Aether"
  - "CluvexStudio/Aether"
  - "提供一個用於繞過網路審查的代理客戶端，讓使用者能夠在受限網路中自由上網。"
---

# Aether

**1.3k** stars · **315** stars/天 · 建立 4 天前 · Rust · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/CluvexStudio--Aether");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.2.0`

> [!summary] 一句話摘要
> 提供一個用於繞過網路審查的代理客戶端，讓使用者能夠在受限網路中自由上網。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (315 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在受限網路中安全訪問網路資源的用戶，尤其是隱私意識強烈的個人或專業人士。
> **一句話重點** Aether 的設計讓用戶能在受限環境中自由上網，這在當前隱私意識高漲的時代尤為重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CluvexStudio--Aether");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路隱私" && p.file.name !== "CluvexStudio--Aether" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路隱私 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到穩定的隱私保護效果，值得考慮。

> [!abstract] 核心創新
> Aether 的自動端點發現和數據平面驗證機制，確保隧道在傳輸數據時的可靠性。

## 專案簡介

Aether 是一個用於繞過網路審查的用戶空間代理客戶端，設計目的是在受到深度封包檢測（DPI）和協議指紋識別的環境中運作。用戶只需將瀏覽器或終端的代理設置為本地 SOCKS5 代理（127.0.0.1:1819），Aether 會自動發現可達的路由並建立加密隧道。這樣的設計能確保流量不僅僅是通過握手，而是真正能夠傳輸數據，這在傳統 VPN 中常常無法做到。Aether 支持 MASQUE 協議（HTTP/3 和 HTTP/2），並提供流量混淆功能以避免檢測。用戶可以選擇使用命令行標誌或環境變數來控制運行方式，並且支援 Linux、Windows、macOS 和 Android。

這使得 Aether 在多平台上都能保持一致的使用體驗。相較於其他 VPN 工具，Aether 更加專注於在高風險環境中的穩定性和安全性，特別是在需要快速重連的情況下。使用者可以透過簡單的命令行指令啟動服務，並且可以根據需要調整協議和掃描模式。這樣的靈活性使其在需要隱私和安全的場景中表現優異。

**技術棧**：`Rust` · `C` · `JavaScript` · `Shell` · `Docker`

## 重點功能

- 自動端點發現 — 確保隧道在傳輸數據時可靠，並且不僅僅依賴握手。
- MASQUE 支持 — 提供 HTTP/3 和 HTTP/2 協議選擇，並可進行 TLS ClientHello 分段。
- WireGuard 支持 — 提供快速輕量的傳輸選擇，適合低檢測環境。
- 流量混淆 — 使流量看起來像普通的 HTTPS 流量，降低被檢測的風險。
- 快速重連 — 在斷線後能迅速連接到上次成功的網關，節省重新掃描的時間。

## 快速開始

1. 安裝 Aether
```bash
curl -fsSL https://raw.githubusercontent.com/CluvexStudio/aether/main/aether.sh -o aether.sh && chmod +x aether.sh && ./aether.sh install
```
2. 啟動 Aether
```bash
./target/release/aether
```
3. 設置 SOCKS5 代理
```bash
curl -x socks5h://127.0.0.1:1819 https://www.cloudflare.com/cdn-cgi/trace
```

## 程式碼範例

```rust
{
  "前置條件": "必須先安裝 Aether 並啟動服務。",
  "指令": "curl -x socks5h://127.0.0.1:1819 https://www.cloudflare.com/cdn-cgi/trace",
  "預期輸出": "顯示 Cloudflare 的追蹤信息。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1258 stars（315/天），forks 76（6.0%），顯示出穩定的增長趨勢。開發者 CluvexStudio 專注於提供高效的網路隱私解決方案，解決了在受限網路環境中無法穩定連接的痛點。之前的 VPN 解決方案在面對 DPI 和協議封鎖時經常失效，而 Aether 的設計使其能夠自動發現可用路由並建立加密隧道。社群對於其功能的需求和反饋也促進了其快速發展，尤其是在隱私意識日益增強的背景下。

## 適合誰使用

**目標受眾**：需要在受限網路中安全訪問網路資源的用戶，尤其是隱私意識強烈的個人或專業人士。

> [!example] 使用場景
> - 網路安全專家用它來在受限環境中測試網路連接，因為 Aether 提供了穩定的隧道和 SOCKS5 代理，讓他們能夠自由訪問網路資源。
> - 開發者用它來測試應用程式在不同網路環境下的表現，因為 Aether 的多協議支持和快速重連功能能夠模擬多種情境。
> - 普通用戶用它來繞過地區限制訪問內容，因為 Aether 能夠在受到檢測的環境中保持隱私和安全。

## 架構分析

Aether 採用用戶空間代理的架構，這使得它能夠在不需要高權限的情況下運作。其核心是基於 Rust 的網路庫，並使用 WireGuard 和 MASQUE 協議來建立隧道。數據流經過加密隧道，並在本地提供 SOCKS5 代理。

這樣的設計使得 Aether 能夠在受到 DPI 和協議封鎖的環境中保持穩定性。選擇 Rust 作為開發語言是因為其性能和安全性，這對於處理網路流量至關重要。隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在高流量的情況下。

## 技術深入分析

Aether 的核心技術機制包括自動端點發現和數據平面驗證，這使得它在建立隧道時不僅依賴於握手，而是確保實際能夠傳輸數據。使用 Rust 作為開發語言，Aether 能夠在性能和安全性上達到較高的標準。其效能特性使其能夠在多平台上運行，並且在高流量的情況下仍能保持穩定。設計上，選擇了 WireGuard 和 MASQUE 協議來提供快速和安全的數據傳輸。這些選擇雖然提升了安全性，但在某些情況下可能會增加複雜性。技術風險方面，隨著用戶數量的增加，可能會面臨性能瓶頸，特別是在高流量的情況下。整合方面，Aether 能夠與主流的網路工具鏈相容，並且在 CI/CD 流程中也能夠輕鬆集成。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並包含範例指令。安裝過程相對順暢，但對於不熟悉命令行的用戶來說可能會有挑戰。文件有英文和波斯文版本，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 多平台支持，能在 Linux、Windows、macOS 和 Android 上運行。
> - 提供流量混淆功能，降低被檢測的風險。
> - 自動重連功能，提升用戶體驗。

> [!danger] 缺點
> - 在某些網路環境下仍可能無法完全繞過檢測。
> - 對於不熟悉命令行的用戶來說，學習曲線較陡。
> - 需要手動設置 SOCKS5 代理，增加了使用的複雜性。

> [!warning] 注意事項
> - 在某些網路環境下可能仍然無法完全繞過所有檢測。
> - 需要用戶手動設置 SOCKS5 代理，對於不熟悉的用戶可能有一定的學習曲線。
> - 在高延遲網路環境中，可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的隧道功能，但 Aether 更專注於在受限環境中的穩定性和安全性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供代理功能，但 Aether 的自動端點發現和流量混淆技術使其在高風險環境中更具優勢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的隧道功能，但 Aether 更專注於在受限環境中的穩定性和安全性。 | 如果需要一個簡單的代理工具，且不需要高級的隱私功能，可以考慮這個工具。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供代理功能，但 Aether 的自動端點發現和流量混淆技術使其在高風險環境中更具優勢。 | 如果需要更簡單的設置和使用，且不需要流量混淆功能，可以考慮這個工具。 | medium，因為需要重新配置代理設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Aether** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的隧道功能，但 Aether 更專注於在受限環境中的穩定性和安全性。 | 雖然也提供代理功能，但 Aether 的自動端點發現和流量混淆技術使其在高風險環境中更具優勢。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要重新配置代理設置。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的代理工具，且不需要高級的隱私功能，可以考慮 | 如果需要更簡單的設置和使用，且不需要流量混淆功能，可以考慮這 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和測試，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下可能無法完全繞過檢測，導致連接失敗。
  - 解法：嘗試更換不同的協議或網關。
- [MEDIUM] 使用過程中可能會遇到高 RAM 消耗的問題。
  - 解法：監控系統資源，必要時重啟 Aether。
- [MEDIUM] 在高延遲的網路環境中，可能影響使用體驗。
  - 解法：選擇更接近的網關以降低延遲。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在受限網路中自由訪問的個人用戶 | 非常適合 | Aether 專為此類環境設計，提供穩定的隧道和 SOCKS5 代理。 |
| 需要測試應用程式在不同網路環境下的開發者 | 適合 | Aether 的多協議支持和快速重連功能能夠模擬多種情境。 |
| 在高風險環境中工作的企業用戶 | 普通 | 雖然 Aether 提供隱私保護，但可能不符合企業級的安全需求。 |
| 對於不熟悉命令行的普通用戶 | 不適合 | Aether 的使用需要一定的命令行知識，對於新手來說可能較為困難。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到穩定的隱私保護效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Aether 本身不需要高權限運行，但需要存取網路資源。依賴的庫和工具需定期更新以避免潛在的安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CluvexStudio--Aether");
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
> const me = dv.page("Repos/CluvexStudio--Aether");
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
| Forks | 76 |
| Open Issues | 7 |
| Issue 解決率 | 67% (14 closed) |
| 最後推送 | 2026-07-18 |
| 建立日期 | 2026-07-14 |
| Repo 大小 | 2.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CluvexStudio/Aether) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 96
>     "C" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@CluvexStudio](https://github.com/CluvexStudio) | 15 |
> | [@Vonarian](https://github.com/Vonarian) | 3 |
> | [@AzureLeMoon](https://github.com/AzureLeMoon) | 3 |

**最新版本**：v1.2.0 (2026-07-16)

> [!info]- Release Notes
> Aether v1.2.0
> 
> Aether is a user-space proxy client. It tunnels traffic out of a filtered network and exposes a local SOCKS5 proxy on 127.0.0.1:1819. Point a browser, terminal, or system proxy at that address and your traffic leaves through the tunnel.
> 
> What's new in v1.2.0:
> 
> - Fixed a false-positive in the data-plane check for MASQUE and WireGuard. The probe packet used to be sent to 1.1.1.1, which is inside Cloudflare's own network, so a gateway could pass just by routing internally without ever reaching the real internet. It now targets an external resolver, and needs two successful round-trips in a row instead of one. This was the cause behind reports of a tunnel showing as "connected" while actual traffic just hung.
> - MASQUE now lets you pick HTTP/3 (QUIC) or HTTP/2 (TCP) up front, with a short note on when each helps: HTTP/3 for the fastest handshake on healthy networks, HTTP/2 for networks that block or throttle UDP.
> 
> This release includes prebuilt binaries for:
> 
> - Linux x86_64, built on Fedora latest (aether-linux-x86_64.tar.gz)
> - Linux arm64 / aarch64, built on Fedora latest (aether-linux-arm64.tar.gz)
> - Linux armv7 / 32-bit ARM, e.g. Raspberry Pi 2/3 (aether-linux-armv7.tar.gz)
> - macOS arm64 / Apple Silicon (aether-macos-arm64.tar.gz)
> - macOS x86_64 / Intel (aether-macos-x86_64.tar.gz)
> - Windows x86_64 (aether-windows-x86_64.zip)
> - Android / Termux arm64 (aether-android-arm64.tar.gz)
> - Android / Termux armv7 (aether-android-armv7.tar.gz)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://github.com/CluvexStudio/Aether)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-15 ~ 2026-07-18）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #23 from Vonarian/feat/version-flag

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/CluvexStudio/Aether/issues/18) | Feature Request: Add a `--verbose` (`-v`) mode for detailed  | 4 | 1 |
> | [#24](https://github.com/CluvexStudio/Aether/issues/24) | too much RAM consumption  | 1 | 0 |
> | [#19](https://github.com/CluvexStudio/Aether/issues/19) | Scan mode when reconnecting | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Aether
> 
> ### اینترنت آزاد برای همه :))
> **[راهنمای فارسی](README.fa.md)** · **[English Guide](Docs/GUIDE.en.md)** · **[راهنمای کامل فارسی](Docs/GUIDE.fa.md)**
> 
> Telegram: https://t.me/CluvexStudio
> 
> Aether is a censorship circumvention client designed for heavily restricted networks. It automatically discovers reachable routes, establishes an encrypted tunnel, and exposes a local SOCKS5 proxy for your applications.
> 
> Unlike traditional VPN clients, Aether is built for environments where Deep Packet Inspection (DPI), protocol fingerprinting, UDP throttling, and endpoint blocking are common.
> 
> ## Features
> 
> - Automatic endpoint discovery, with end-to-end data-plane validation so a gateway is only trusted once it actually passes traffic, not just once it answers the handshake
> - MASQUE (HTTP/3 & HTTP/2), with optional TLS ClientHello fragmentation on HTTP/2
> - WireGuard support
> - Nested WireGuard mode (`gool`)
> - Traffic obfuscation
> - Automatic reconnection, and quick-reconnect to your last known-good gateway to skip rescanning
> - Local SOCKS5 proxy
> - Command-line flags, environment variables, or interactive prompts — your choice
> - Linux, Windows, macOS and Android (Termux)
> 
> ## Download
> 
> Prebuilt binaries are available on the Releases page for:
> 
> - Linux
> - Windows
> - macOS
> - Android (Termux)
> 
> ### Termux (Android) — one-line install
> 
> ```bash
> curl -fsSL https://raw.githubusercontent.com/CluvexStudio/aether/main/aether.sh -o aether.sh && chmod +x aether.sh && ./aether.sh install
> ```
> 
> This detects your device architecture, downloads the matching release, verifies its checksum, and installs `aether` into `$PREFIX/bin`. Run it afterwards with:
> 
> ```bash
> aether
> ```
> 
> To update later, run `./aether.sh update`. To remove it, run `./aether.sh uninstall`.
> 
> ## Build
> 
> ### Requirements
> 
> - Rust (latest stable)
> - C/C++ compiler
> - CMake
> 
> The `quiche` repository must be placed alongside `aether`:
> 
> ```text
> /
>   aether/
>   quiche/
> ```
> 
> Build:
> 
> ```bash
> cargo build --release
> ```
> 
> Binary:
> 
> ```text
> target/release/aether
> ```
> 
> ## Docker
> 
> You can run Aether in an isolated environment using Docker. The official image is available on GitHub Container Registry (GHCR).
> 
> Pull and run the pre-built image (interactive mode is required for initial setup):
> 
> ```bash
> docker run -it -p 1819:1819 ghcr.io/cluvexstudio/aether:latest
> ```
> 
> You can also bypass prompts by providing environment variables:
> 
> ```bash
> docker run -it -p 1819:1819 \
>   -e AETHER_PROTOCOL=masque \
>   -e AETHER_SCAN=balanced \
>   ghcr.io/cluvexstudio/aether:latest
> ```
> 
> If you prefer to build the image manually from source:
> 
> ```bash
> docker build -t aether .
> docker run -it -p 1819:1819 aether
> ```
> 
> ## Usage
> 
> Run with no arguments and answer the prompts:
> 
> ```bash
> ./target/release/aether
> ```
> 
> Or skip the prompts with flags:
> 
> ```bash
> ./target/release/aether --masque -4 --scan turbo --noize firewall
> ```
> 
> On Windows, double-click `run-aether.bat` (included in the release zip) instead — it opens a terminal, runs `aether.exe`, and keeps the window open afterwards so you can read any errors.
> 
> Every prompt has a flag and an environment variable equivalent. Run `./target/release/aether --help` for the full list, or see the guides linked below.
> 
> After startup, a SOCKS5 proxy will be available at:
> 
> ```
> 127.0.0.1:1819
> ```
> 
> Example:
> 
> ```bash
> curl -x socks5h://127.0.0.1:1819 https://www.cloudflare.com/cdn-cgi/trace
> ```
> 
> ## Supported Protocols
> 
> ### MASQUE (Recommended)
> 
> Encapsulates traffic over HTTP/3 (QUIC) or HTTP/2 (TLS), making it resemble ordinary HTTPS traffic.
> 
> ### WireGuard
> 
> Fast and lightweight transport for networks with less aggressive inspection.
> 
> ### Nested WireGuard (`gool`)
> 
> A WireGuard tunnel running inside another WireGuard tunnel, providing an additional encryption layer.
> 
> ## Documentation
> 
> Detailed documentation is available in:
> 
> - [Docs/GUIDE.en.md](Docs/GUIDE.en.md) — English guide
> - [Docs/GUIDE.fa.md](Docs/GUIDE.fa.md) — راهنمای فارسی
> 
> ## Credits
> 
> Developed by **CluvexStudio**. :))
> 
> MASQUE support is built on top of Cloudflare's **Quiche** library.
> 
> ## Contributing
> 
> > **Experienced network developers and protocol engineers are welcome to contribute.**
> 
> > **Please keep the codebase clean, maintainable, and well-engineered. Low-quality or vibe-coded contributions will not be accepted.**
> 
> ## Donate
> 
> If Aether has been useful to you, consider supporting its development:
> 
> - **TRX (Tron):** `TRxVSHcoADZnBfztFmFb2TQopusAwWYEVR`
> - **BTC:** `bc1qnjnvzsa5avgj7n0uy383cv5zdxfjnvvp257egm`
> - **TON:** `UQAH75bXaaRUhZMwiF0ZujOXFDDmvLSPASKoOsWF0HNasiaM`
> 
> ## License
> 
> See the LICENSE file for licensing information.

## 延伸閱讀

相關概念：[[深度封包檢測]] · [[隱私保護]] · [[網路安全]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[patterniha--SNI-Spoofing|patterniha/SNI-Spoofing]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]]

[GitHub](https://github.com/CluvexStudio/Aether)

## 相關收錄

> [!note]- 直接競品（同子分類：網路隱私）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路隱私" AND file.name != "CluvexStudio--Aether"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "CluvexStudio--Aether"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "CluvexStudio--Aether" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "CluvexStudio--Aether"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["深度封包檢測","隱私保護","網路安全"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "CluvexStudio--Aether" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/CluvexStudio--Aether");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CluvexStudio--Aether" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CluvexStudio" AND file.name != "CluvexStudio--Aether"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CluvexStudio--Aether");
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
> const me = dv.page("Repos/CluvexStudio--Aether");
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
> const me = dv.page("Repos/CluvexStudio--Aether");
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
> const me = dv.page("Repos/CluvexStudio--Aether");
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
> const me = dv.page("Repos/CluvexStudio--Aether");
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

> **2026-07-17** — 首次收錄
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

- [[2026-07-20|2026-07-20]] — 再次上榜，1.3k stars
- [[2026-07-19|2026-07-19]] — 再次上榜，1.3k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，1.1k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，941 stars
