---
repo: CluvexStudio/Aether
url: https://github.com/CluvexStudio/Aether
owner: CluvexStudio
owner_type: User
language: Rust
license: AGPL-3.0
description: ""
homepage: ""
stars: 1395
stars_per_day: 233
forks: 85
open_issues: 13
created: 2026-07-14
pushed_at: 2026-07-19
first_seen: 2026-07-17
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "網路代理"
release_tag: "v1.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-17
use_case: "提供一個用於繞過網路審查的 SOCKS5 代理客戶端。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-24"
contributor_count: 3
engagement: "low"
issue_close_rate: 72
repo_size_kb: 3708
readme_length: 4594
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-17"
star_history: "2026-07-17:941,2026-07-17:942,2026-07-18:1146,2026-07-18:1148,2026-07-19:1258,2026-07-19:1258,2026-07-20:1319,2026-07-20:1319,2026-07-21:1395"
tags:
  - github
  - "category/基礎設施"
  - "lang/rust"
  - easy_install
aliases:
  - "Aether"
  - "CluvexStudio/Aether"
  - "提供一個用於繞過網路審查的 SOCKS5 代理客戶端。"
---

# Aether

**1.3k** stars · **264** stars/天 · 建立 5 天前 · Rust · AGPL-3.0

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

`v1.3.0` `easy-install`

> [!summary] 一句話摘要
> 提供一個用於繞過網路審查的 SOCKS5 代理客戶端。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (264 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在高度受限網路環境中安全上網的用戶。
> **一句話重點** Aether 的自動端點發現和數據平面驗證功能，讓它在受限網路環境中比傳統 VPN 更具優勢。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學、2 小時整合，得到強大的隱私保護，值得。

> [!abstract] 核心創新
> Aether 提供了自動端點發現和端到端數據平面驗證的功能，確保網關能夠實際傳遞流量。

## 專案簡介

Aether 是一個用於繞過網路審查的用戶空間代理客戶端，能夠自動發現可達的路由，建立加密隧道，並在本地提供 SOCKS5 代理。用戶只需將瀏覽器或終端的代理設置為 127.0.0.1:1819，即可通過隧道發送流量。其核心賣點在於能夠在受到深度封包檢測（DPI）和協議指紋識別的環境中運行，並且在連接之前進行端到端的數據平面驗證，確保網關能夠實際傳遞流量。Aether 支持 MASQUE 和 WireGuard 協議，並提供流量混淆功能，能夠有效應對各種網路限制。使用者可以通過命令行參數或環境變數進行配置，並且支持 Linux、Windows、macOS 和 Android 系統。

相較於傳統 VPN，Aether 更加專注於在高限制環境中的穩定性和安全性，其「ironclad」掃描模式能夠進一步提高網關的可靠性。這使得 Aether 在需要穩定連接的情況下，成為一個更優的選擇。使用者在使用過程中可能會遇到 RAM 消耗過高的問題，但整體的自動重連和快速重連功能能夠減少連接中斷的影響。這個專案目前處於穩定階段，適合需要在受限網路環境中進行安全通信的用戶。

**技術棧**：`Rust` · `C` · `CMake` · `Docker`

## 重點功能

- 自動端點發現 — 透過端到端數據平面驗證，確保網關能夠實際傳遞流量。
- MASQUE 和 WireGuard 支持 — 提供多種協議選擇以應對不同的網路環境。
- 流量混淆 — 使流量類似於普通 HTTPS 流量，增加隱私保護。
- 快速重連功能 — 在連接中斷後能夠快速恢復到上次有效的網關，避免重新掃描。
- 本地 SOCKS5 代理 — 方便用戶將流量通過本地代理發送，支持多種應用。

## 快速開始

1. 安裝 Aether
```bash
curl -fsSL https://raw.githubusercontent.com/CluvexStudio/aether/main/aether.sh -o aether.sh && chmod +x aether.sh && ./aether.sh install
```
2. 啟動 Aether
```bash
./target/release/aether
```
3. 使用 SOCKS5 代理
```bash
curl -x socks5h://127.0.0.1:1819 https://www.cloudflare.com/cdn-cgi/trace
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Aether 並啟動。",
  "指令": "curl -x socks5h://127.0.0.1:1819 https://www.cloudflare.com/cdn-cgi/trace",
  "預期輸出": "Cloudflare 的 IP 和地理位置資訊。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1319 stars（263.8/天），forks 78（5.9%），這顯示出相對穩定的增長。作者 CluvexStudio 專注於網路安全和隱私技術，解決了在高度限制的網路環境中，傳統 VPN 無法有效工作的痛點。Aether 提供的自動網關驗證和流量混淆功能，讓用戶能夠在受到嚴格監控的網路中安全地訪問內容。社群對於其性能和穩定性的需求也促進了這個專案的快速成長。

## 適合誰使用

**目標受眾**：需要在高度受限網路環境中安全上網的用戶。

> [!example] 使用場景
> - 網路安全專家用它來在受限環境中測試網路連接，因為它能夠自動發現可用的網關並驗證其有效性。
> - 開發者用它來在開發過程中測試應用的網路功能，因為它提供了本地 SOCKS5 代理，方便快速調試。
> - 隱私意識強的用戶用它來保護自己的上網行為，因為它的流量混淆功能能夠有效對抗監控和封鎖。

## 架構分析

Aether 採用用戶空間代理設計，這樣的架構能夠避免對系統核心的直接干預，降低了安全風險。資料流經過加密隧道，使用 MASQUE 或 WireGuard 協議進行封裝，這樣的設計使得流量看起來像普通的 HTTPS 流量，增加了隱私性。自動端點發現功能則是透過實際的 HTTP 請求來驗證網關的可用性，這樣的設計能夠確保用戶連接的網關是可靠的。選擇 Rust 作為開發語言，提供了高效能和安全性，但可能會增加學習成本。整體架構的擴展性良好，但在極端的網路環境中，可能會面臨連接不穩定的問題。

## 技術深入分析

Aether 的核心技術機制在於其自動端點發現和數據平面驗證，這使得用戶在連接之前能夠確保網關的可用性。它使用 MASQUE 和 WireGuard 協議進行流量封裝，這些協議能夠有效對抗深度封包檢測。效能方面，Aether 在高流量情況下仍能保持穩定，但在使用 ironclad 模式時，可能會導致較高的 RAM 使用量。選擇 Rust 作為開發語言，提供了高效能和安全性，但可能會增加學習成本。整體架構的依賴關係較為簡單，主要依賴於 Rust 標準庫和 C/C++ 編譯器，這使得安裝和維護都相對容易。技術風險方面，Aether 在極端網路環境中可能會面臨連接不穩定的問題，這需要進一步的優化。整合方面，Aether 能夠與主流的 CI/CD 工具相容，並且可以輕鬆地集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並包含多種語言的指南。安裝過程相對順暢，但對於非技術用戶可能會有一定的學習曲線。整體上，文件質量良好，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠快速發現可用的網關。
> - 支持多種協議，靈活應對不同的網路環境。
> - 提供流量混淆功能，增強隱私保護。

> [!danger] 缺點
> - RAM 消耗可能較高，特別是在使用 ironclad 模式時。
> - 命令行介面對於非技術用戶不夠友好。
> - 在某些極端環境中可能無法連接。

> [!warning] 注意事項
> - 可能會有較高的 RAM 消耗，特別是在使用 ironclad 模式時。
> - 在某些極端的網路環境中，仍然可能無法連接。
> - 對於非技術用戶，命令行介面可能不夠友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但主要針對遊戲流量的優化，適合遊戲玩家使用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於隱私保護的代理工具，功能上較為簡單，適合一般用戶。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 API 代理功能，適合開發者在 API 測試中使用，但不如 Aether 的自動化程度高。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲流量的優化，提供專門的代理解決方案。 | 如果你的主要需求是遊戲流量的優化，這個工具會更合適。 | medium，因為需要重新配置遊戲相關的設置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的隱私保護代理，功能較為基本。 | 如果你的需求較為簡單，且不需要高級功能，這個工具會更適合。 | low，因為功能簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Aether** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲流量的優化，提供專門的代理解決方案。 | 提供簡單的隱私保護代理，功能較為基本。 |
> | 遷移成本 | - | medium，因為需要重新配置遊戲相關的設置。 | low，因為功能簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是遊戲流量的優化，這個工具會更合適。 | 如果你的需求較為簡單，且不需要高級功能，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，可能無法成功連接到網關。
  - 解法：嘗試使用不同的掃描模式。
- [MEDIUM] RAM 消耗過高，特別是在 ironclad 模式下。
  - 解法：考慮使用其他掃描模式以減少資源消耗。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在受限網路環境中安全上網的用戶 | 非常適合 | Aether 提供了強大的隱私保護和自動化的網關發現功能。 |
| 普通家庭用戶 | 普通 | 雖然功能強大，但對於非技術用戶來說，命令行介面可能不夠友好。 |
| 開發者需要測試網路功能 | 非常適合 | 提供了 SOCKS5 代理，方便快速調試。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到強大的隱私保護，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Aether 本身不需要高權限，且不存取敏感資料，依賴鏈相對簡單，適合在 CI/CD 中使用。

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
| Forks | 78 |
| Open Issues | 7 |
| Issue 解決率 | 72% (18 closed) |
| 最後推送 | 2026-07-19 |
| 建立日期 | 2026-07-14 |
| Repo 大小 | 3.6 MB |
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
> | [@CluvexStudio](https://github.com/CluvexStudio) | 22 |
> | [@Vonarian](https://github.com/Vonarian) | 3 |
> | [@AzureLeMoon](https://github.com/AzureLeMoon) | 3 |

**最新版本**：v1.3.0 (2026-07-19)

> [!info]- Release Notes
> Aether v1.3.0
> 
> Aether is a user-space proxy client. It tunnels traffic out of a filtered network and exposes a local SOCKS5 proxy on 127.0.0.1:1819. Point a browser, terminal, or system proxy at that address and your traffic leaves through the tunnel.
> 
> What's new in v1.3.0:
> 
> - New "ironclad" scan mode. The existing scan modes only check that a candidate gateway answers a handshake; ironclad goes further and opens a real tunnel through each candidate, then sends a real HTTP request end to end before trusting it. Slower than the other modes, but it's the only one that guarantees the gateway actually works before you connect.
> - MASQUE and WireGuard both reconnect smarter after a drop. Instead of always kicking off a full rescan (which can take minutes in ironclad mode), Aether now first re-checks the gateway that was working a moment ago, and only falls back to a fresh scan if that one is actually dead.
> - Fixed a bug where probe tunnels opened during scanning could keep running in the background after their timeout, which showed up as a wall of "connection closed" log lines during a scan.
> - Fixed UDP over SOCKS5 not working when exposing the proxy to your local network (AETHER_SOCKS set to a non-loopback address). The UDP relay was always binding to 127.0.0.1 regardless of what address SOCKS5 was actually listening on, so TCP worked from other devices on the network but UDP silently dropped everything.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/CluvexStudio/Aether/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-18 ~ 2026-07-19）
> **活躍天數** 2 天 · **最新 commit** fix time_t mismatch on armv7 musl build

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/CluvexStudio/Aether/issues/24) | too much RAM consumption  | 1 | 0 |

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

相關概念：[[深度封包檢測]] · [[流量混淆]] · [[網路隱私]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[patterniha--SNI-Spoofing|patterniha/SNI-Spoofing]]

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
> WHERE category = "基礎設施" AND file.name != "CluvexStudio--Aether"
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
> const concepts = ["深度封包檢測","流量混淆","網路隱私"];
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

- [[2026-07-21|2026-07-21]] — 再次上榜，1.4k stars
- [[2026-07-20|2026-07-20]] — 再次上榜，1.3k stars
- [[2026-07-19|2026-07-19]] — 再次上榜，1.3k stars
- [[2026-07-18|2026-07-18]] — 再次上榜，1.1k stars
- [[2026-07-17|2026-07-17]] — 首次收錄，941 stars
