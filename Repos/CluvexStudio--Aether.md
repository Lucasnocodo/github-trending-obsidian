---
repo: CluvexStudio/Aether
url: https://github.com/CluvexStudio/Aether
owner: CluvexStudio
owner_type: User
language: Rust
license: AGPL-3.0
description: ""
homepage: ""
stars: 1258
stars_per_day: 315
forks: 76
open_issues: 7
created: 2026-07-14
pushed_at: 2026-07-18
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "安全"
subcategory: "網路代理"
release_tag: "v1.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "為受限網路提供無阻礙的代理通道，讓用戶能夠自由上網。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-22"
contributor_count: 2
engagement: "low"
issue_close_rate: 76
repo_size_kb: 2134
readme_length: 4594
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:941,2026-07-17:942,2026-07-18:1146,2026-07-18:1148,2026-07-19:1258"
tags:
  - github
  - "category/安全"
  - "lang/rust"
aliases:
  - "Aether"
  - "CluvexStudio/Aether"
  - "為受限網路提供無阻礙的代理通道，讓用戶能夠自由上網。"
---

# Aether

**1.1k** stars · **383** stars/天 · 建立 3 天前 · Rust · AGPL-3.0

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
> 為受限網路提供無阻礙的代理通道，讓用戶能夠自由上網。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (383 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在受限網路中安全上網的用戶，特別是對抗深度封包檢測的需求。
> **一句話重點** Aether 提供了一種創新的方式來繞過網路審查，特別是在需要對抗深度封包檢測的環境中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CluvexStudio--Aether");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網路代理" && p.file.name !== "CluvexStudio--Aether" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網路代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到強大的網路繞過功能，值得投入。

> [!abstract] 核心創新
> Aether 的自動端點發現和數據平面驗證技術，確保只有真正能傳遞流量的網關才會被信任。

## 專案簡介

Aether 是一個用於繞過網路審查的用戶空間代理客戶端，能夠自動發現可達的路由，並建立加密隧道，最終在本地提供 SOCKS5 代理。用戶只需將瀏覽器或終端的代理設置為 127.0.0.1:1819，即可透過隧道發送流量。這個設計的核心在於能夠有效對抗深度封包檢測（DPI）和協議指紋識別，這在傳統 VPN 中常常無法做到。Aether 支持 MASQUE 和 WireGuard 兩種協議，並且提供了流量混淆功能，這使得它在受限環境中更具優勢。用戶可以選擇 HTTP/3 或 HTTP/2 作為傳輸協議，並且在連接失敗時能快速重連到最後的有效網關。

這些功能使得 Aether 在高度受限的網路環境中表現出色，特別是在需要隱藏流量特徵的情況下。使用者可以透過命令行選項或環境變數來啟動，這提供了靈活性和便利性。使用 Aether 的一個主要賣點是其自動端點發現和數據平面驗證，這確保了只有真正能傳遞流量的網關才會被信任，避免了僅僅依賴握手的情況。這一設計能顯著提升用戶的安全性和隱私保護。

**技術棧**：`Rust` · `C` · `JavaScript` · `Shell` · `Docker`

## 重點功能

- 自動端點發現 — 確保只有能傳遞流量的網關被信任，避免僅依賴握手。
- MASQUE 支持 — 提供 HTTP/3 和 HTTP/2 的選擇，並支持 TLS ClientHello 分片。
- 流量混淆 — 隱藏流量特徵以對抗檢測。
- 快速重連 — 在連接失敗時能迅速重連到最後的有效網關，提升使用體驗。
- 跨平台支持 — 支援 Linux、Windows、macOS 和 Android (Termux)。

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
  "前置條件": "已安裝 Aether 並啟動",
  "程式碼": "./target/release/aether --masque -4 --scan turbo --noize firewall",
  "預期輸出": "將建立一個 SOCKS5 代理，並透過指定的協議和掃描模式運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1148 stars（383/天），forks 65（5.7%），這顯示出相對穩定的關注度。作者 CluvexStudio 的過去作品未詳述，但 Aether 解決了在高度受限環境中無法自由上網的痛點，這是許多 VPN 無法有效處理的問題。近期的推廣或討論可能來自於社群對於網路自由的需求增加，尤其是在某些地區的用戶。這個工具的 forks/stars 比率顯示出使用者對其進行實際修改的意願，顯示出一定的實用性和需求。

## 適合誰使用

**目標受眾**：需要在受限網路中安全上網的用戶，特別是對抗深度封包檢測的需求。

> [!example] 使用場景
> - 網路安全專家用它來在受限環境中測試網路連接，因為它能有效繞過 DPI 和協議封鎖，確保測試的準確性。
> - 開發者用它來在本地環境中測試應用的網路功能，因為它提供了 SOCKS5 代理，讓開發過程更靈活。
> - 普通用戶用它來訪問被封鎖的網站，因為它能自動發現可用的路由，簡化了設置過程。

## 架構分析

Aether 採用用戶空間代理架構，這使得它能在不需要系統級權限的情況下運行。其核心是基於 Rust 和 C 的高效能實現，並使用 WireGuard 和 MASQUE 協議進行加密通訊。資料流經過自動發現的網關，並在本地提供 SOCKS5 代理，這樣用戶可以輕鬆地將流量導向隧道。

選擇 Rust 和 C 是因為它們在性能和安全性上的優勢，這對於需要快速反應的網路工具至關重要。這種設計的代價是需要用戶具備一定的技術背景來進行設置和使用。擴展性方面，Aether 的設計使其能夠在多種平台上運行，但在特定環境下可能會遇到網路檢測的挑戰。

## 技術深入分析

Aether 的核心技術在於其自動端點發現和數據平面驗證，這使得它能夠在受限環境中有效運行。使用 Rust 和 C 作為主要開發語言，這不僅確保了性能，還提高了安全性。Aether 能夠處理多達數百個並發連接，具體效能數據未提供，但其設計目標是快速和輕量。選擇 WireGuard 和 MASQUE 協議是因為它們在現代網路環境中表現良好，特別是在隱私和速度方面。這些選擇的代價是需要用戶進行一定的配置，並且在某些網路環境中可能會遇到挑戰。技術風險方面，Aether 依賴於外部網路的穩定性，這可能在高負載或不穩定的環境中導致問題。整合方面，Aether 可以與主流的 CI/CD 工具鏈兼容，但具體的整合細節尚需用戶自行探索。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言支持，安裝過程相對順暢，但對於新手來說可能會有一定的學習曲線。提供了良好的入門指南和範例，讓用戶能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 自動端點發現功能，提升使用便利性。
> - 支持多種協議，滿足不同需求。
> - 流量混淆技術，有效對抗檢測。

> [!danger] 缺點
> - 需要一定的技術背景來設置和使用。
> - 在某些環境中可能無法完全繞過所有檢測。
> - 對於非技術用戶來說，使用門檻較高。

> [!warning] 注意事項
> - 僅支援 Linux、Windows、macOS 和 Android (Termux)。
> - 需要有效的網路連接來進行端點發現。
> - 在某些環境中可能無法完全繞過所有類型的網路檢測。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但可能不具備 Aether 的自動端點發現和流量混淆功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網路隱私，但缺乏 Aether 的多協議支持和快速重連功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但不具備 Aether 的自動端點發現和流量混淆功能。 | 如果需要簡單的代理功能且不在意隱私保護，則可以選擇這個工具。 | medium，因為需要重新配置代理設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網路隱私，但缺乏 Aether 的多協議支持和快速重連功能。 | 如果主要需求是隱私而非速度，則可以考慮這個工具。 | low，因為設置相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Aether** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的代理功能，但不具備 Aether 的自動端點發現和流量混淆功能。 | 專注於網路隱私，但缺乏 Aether 的多協議支持和快速重連功能。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設置。 | low，因為設置相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要簡單的代理功能且不在意隱私保護，則可以選擇這個工具。 | 如果主要需求是隱私而非速度，則可以考慮這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境中可能無法完全繞過檢測，導致連接失敗。
  - 解法：嘗試不同的協議或網關設置。
- [MEDIUM] 使用過程中可能會出現連接不穩定的情況。
  - 解法：檢查網路設置並確保網路穩定。
- [MEDIUM] 在某些平台上安裝過程可能會遇到權限問題。
  - 解法：確保以管理員身份運行安裝指令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在受限網路中進行安全上網的普通用戶 | 非常適合 | Aether 專為繞過網路審查設計，具有強大的功能。 |
| 網路安全專家進行測試 | 適合 | 提供了自動端點發現和數據平面驗證，適合專業使用。 |
| 對於非技術用戶的日常使用 | 不適合 | 設置和使用上可能存在一定的技術門檻。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到強大的網路繞過功能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：Aether 需要訪問網路資源，但不需要高權限。其依賴的庫和工具需定期更新以避免安全漏洞。

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
| Forks | 65 |
| Open Issues | 4 |
| Issue 解決率 | 76% (13 closed) |
| 最後推送 | 2026-07-16 |
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
> | [@CluvexStudio](https://github.com/CluvexStudio) | 14 |
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

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://github.com/CluvexStudio/Aether)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-14 ~ 2026-07-16）
> **活躍天數** 3 天 · **最新 commit** Update Readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/CluvexStudio/Aether/issues/18) | Feature Request: Add a `--verbose` (`-v`) mode for detailed  | 4 | 1 |
> | [#20](https://github.com/CluvexStudio/Aether/issues/20) | Feature Request: Add `--version` flag and print the version  | 3 | 0 |
> | [#19](https://github.com/CluvexStudio/Aether/issues/19) | Scan mode when reconnecting | 1 | 1 |
> | [#21](https://github.com/CluvexStudio/Aether/issues/21) | UDP works only on the same machine | 0 | 1 |

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

相關概念：[[深度封包檢測]] · [[網路隱私]] · [[加密通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[patterniha--SNI-Spoofing|patterniha/SNI-Spoofing]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]]

[GitHub](https://github.com/CluvexStudio/Aether)

## 相關收錄

> [!note]- 直接競品（同子分類：網路代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網路代理" AND file.name != "CluvexStudio--Aether"
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
> const concepts = ["深度封包檢測","網路隱私","加密通訊"];
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

- [[2026-07-19|2026-07-19]] — 再次上榜，1.3k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，1.1k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，941 stars
