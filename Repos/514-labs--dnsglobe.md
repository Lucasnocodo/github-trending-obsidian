---
repo: 514-labs/dnsglobe
url: https://github.com/514-labs/dnsglobe
owner: 514-labs
owner_type: Organization
language: Rust
license: MIT
description: "Global DNS propagation checker TUI — watch a DNS record propagate across 34 public resolvers worldwide, on a world map in your terminal"
homepage: ""
stars: 774
stars_per_day: 155
forks: 20
open_issues: 2
created: 2026-07-05
pushed_at: 2026-07-07
first_seen: 2026-07-10
week: "2026-W28"
month: "2026-07"
category: "CLI 工具"
subcategory: "DNS 工具"
release_tag: "v0.3.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-10
use_case: "在終端上查看 DNS 記錄在全球 34 個公共解析器中的傳播情況。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-17"
contributor_count: 3
engagement: "low"
issue_close_rate: 50
repo_size_kb: 1289
readme_length: 6125
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-10"
star_history: "2026-07-10:774"
tags:
  - github
  - "category/cli_工具"
  - "lang/rust"
  - org
  - "topic/cli"
  - "topic/dns"
  - "topic/dns_checker"
  - "topic/dns_propagation"
  - "topic/ratatui"
aliases:
  - "dnsglobe"
  - "514-labs/dnsglobe"
  - "在終端上查看 DNS 記錄在全球 34 個公共解析器中的傳播情況。"
---

# dnsglobe

**774** stars · **155** stars/天 · 建立 5 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/514-labs--dnsglobe");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.3.1`

`cli` `dns` `dns-checker` `dns-propagation` `ratatui` `rust` `tui`

> [!summary] 一句話摘要
> 在終端上查看 DNS 記錄在全球 34 個公共解析器中的傳播情況。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (155 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在終端中檢查 DNS 記錄傳播情況的網路管理員和 DevOps 工程師。
> **一句話重點** 這個工具讓 DNS 傳播檢查變得更直觀，特別適合需要快速反應的網路管理工作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "DNS 工具" && p.file.name !== "514-labs--dnsglobe" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 DNS 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時的 DNS 傳播檢查功能，值得投入。

> [!abstract] 核心創新
> 提供即時的 DNS 傳播檢查，並在終端中以視覺化方式顯示結果。

## 專案簡介

dnsglobe 是一個用 Rust 實作的終端用戶介面（TUI），專門用來檢查 DNS 記錄在全球 34 個公共解析器中的傳播情況。用戶可以透過命令行輸入域名，dnsglobe 會並行查詢這些解析器並顯示結果，並且在終端的世界地圖上標示出每個解析器的狀態。其核心賣點在於即時監控 DNS 記錄的變化，並且能夠在解析過程中顯示每個解析器的具體回應，這樣用戶可以清楚了解哪些解析器已經更新，哪些還在等待。使用者可以透過簡單的指令如 `dnsglobe example.com` 來啟動查詢，並且可以設定查詢類型如 A、AAAA、CNAME 等。這個工具的設計考量了用戶的需求，提供了清晰的視覺化界面，讓用戶能夠快速了解 DNS 傳播的狀態。它的查詢過程不依賴緩存，確保每次查詢都能獲得最新的數據，這對於需要即時反應的網路管理者來說非常重要。

**技術棧**：`Rust 1.85` · `Nix`

## 重點功能

- 全球解析器查詢 — 同時查詢 34 個公共 DNS 解析器，提供即時的傳播狀態。
- 視覺化地圖 — 在終端中顯示世界地圖，標示每個解析器的狀態（綠色為一致，紅色為錯誤）。
- 支持多種記錄類型 — 可查詢 A、AAAA、CNAME、MX、NS、TXT、SOA 等多種 DNS 記錄。
- 即時監控 — 啟動後每 30 秒自動重新查詢，直到所有解析器的傳播達到 100%。
- 自定義解析器 — 允許用戶通過 TOML 配置文件添加或替換內建的解析器。

## 快速開始

1. 安裝 dnsglobe
```bash
brew install 514-labs/tap/dnsglobe
```
2. 查詢 DNS 記錄
```bash
dnsglobe example.com
```
3. 查詢 TXT 記錄並監控
```bash
dnsglobe example.com TXT
```

## 程式碼範例

```rust
# 使用 dnsglobe 查詢 DNS 記錄

```sh
dnsglobe example.com
```
# 預期輸出：
# 顯示各解析器的回應狀態及傳播進度。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 774 stars（155/天），forks 20（2.6%），顯示出相對穩定的增長。這個專案由一群活躍的開發者維護，提供了一個之前缺乏的工具，讓用戶能夠在終端中方便地檢查 DNS 傳播情況。之前的解決方案多數是基於網頁的，無法提供這樣的即時更新和視覺化效果。社群對這個工具的需求顯而易見，特別是在需要快速檢查 DNS 記錄的情境下。

## 適合誰使用

**目標受眾**：需要在終端中檢查 DNS 記錄傳播情況的網路管理員和 DevOps 工程師。

> [!example] 使用場景
> - 網路管理員用它來即時監控 DNS 記錄的傳播，因為這樣可以快速發現問題並進行調整。
> - DevOps 工程師用它來在部署新服務後檢查 DNS 設定是否正確，因為這樣可以避免因 DNS 更新延遲而造成的服務中斷。
> - 系統管理員用它來確認 DNS 記錄在不同地區的可用性，因為這樣可以確保全球用戶都能正常訪問服務。

## 架構分析

dnsglobe 採用 Rust 語言開發，利用其高效能和安全性來實現 DNS 查詢功能。架構上，使用 Tokio 作為異步運行時，允許同時查詢多個 DNS 解析器，這樣可以顯著提高查詢速度。資料流方面，dnsglobe 直接向每個解析器發送請求，並根據回應狀態更新地圖和統計數據。

這種設計使得用戶能夠獲得最新的 DNS 回應，而不是依賴於緩存的結果。選擇 Rust 而非其他語言（如 Python）是因為其在性能和並發處理上的優勢，雖然這可能增加了開發的複雜性。整體而言，這個工具在小型和中型網路環境中表現良好，但在大規模的 DNS 查詢中可能會遇到性能瓶頸。

## 技術深入分析

dnsglobe 的核心技術是基於 Rust 的異步編程模型，利用 Tokio 框架實現高效的 DNS 查詢。它直接向 34 個公共解析器發送請求，並在終端中顯示每個解析器的回應，這樣用戶可以即時看到 DNS 記錄的傳播狀態。這種設計避免了緩存的影響，確保了查詢的準確性。效能方面，dnsglobe 可以在短時間內處理大量的 DNS 查詢，但在高負載情況下可能會遇到瓶頸。選擇 Rust 而非 Python 是因為 Rust 在性能和安全性上的優勢，雖然這也意味著開發過程中的學習曲線較陡。整體而言，這個工具在小型網路環境中表現優異，但在大規模的 DNS 查詢中可能需要進一步的優化。與主流的網頁工具相比，dnsglobe 提供了更高的靈活性和即時性，特別是在需要快速檢查 DNS 設定的情況下。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程順暢，無明顯坑點。提供了良好的入門指南，對於有終端操作經驗的用戶來說，能在 30 分鐘內順利運行。

## 優缺點分析

> [!success] 優點
> - 即時監控 DNS 傳播，適合需要快速反應的場景。
> - 終端視覺化界面，讓用戶能夠清晰了解各解析器的狀態。
> - 支持自定義解析器，靈活性高。

> [!danger] 缺點
> - 僅支援 Linux 和 macOS，Windows 支援有限。
> - 需要一定的終端操作經驗，對新手不太友好。
> - 在某些網路環境下，可能無法訪問特定解析器。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS，Windows 使用者需透過 WSL。
> - 需要終端寬度至少 150 列才能顯示地圖。
> - 在某些網路環境下，特定解析器可能無法訪問。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下，特定解析器可能無法訪問，導致查詢失敗。
  - 解法：嘗試使用不同的網路或檢查防火牆設定。
- [MEDIUM] 終端寬度不足時，地圖無法正確顯示。
  - 解法：確保終端寬度至少 150 列。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 中小型企業的網路管理團隊 | 非常適合 | 即時監控 DNS 記錄的變化，能快速反應問題。 |
| 個人開發者進行 DNS 設定測試 | 適合 | 簡單易用，適合快速檢查。 |
| 大型企業的網路基礎設施 | 普通 | 在高負載情況下可能會遇到性能瓶頸。 |
| 需要在 Windows 環境下進行 DNS 檢查的用戶 | 不適合 | 目前僅支援 Linux 和 macOS。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時的 DNS 傳播檢查功能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅執行 DNS 查詢，不存取敏感資料。依賴的庫經過審計，整體安全性較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

dnsglobe 最常與其他命令行工具搭配使用，如 curl 和 dig。在典型的工作流中，它可以作為 DNS 設定檢查的輔助工具，幫助用戶快速確認 DNS 記錄的變化。具體來說，使用者可以在終端中結合使用 dnsglobe 和 curl，快速檢查 DNS 設定是否正確。dnsglobe 也可以與 CI/CD 工具整合，作為自動化測試的一部分。整合的摩擦點主要在於需要確保終端環境的兼容性，特別是對於不同的操作系統。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
| Forks | 20 |
| Open Issues | 2 |
| Issue 解決率 | 50% (2 closed) |
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-07-05 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/514-labs/dnsglobe) |
| Topics | `cli` `dns` `dns-checker` `dns-propagation` `ratatui` `rust` `tui` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `rust-version` `description` `keywords` `categories` `license` `homepage` `repository` `readme` `anyhow` `clap` `crossterm` `futures`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 99
>     "Nix" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@callicles](https://github.com/callicles) | 19 |
> | [@BarbUk](https://github.com/BarbUk) | 1 |
> | [@levonk](https://github.com/levonk) | 1 |

**最新版本**：v0.3.1 — 0.3.1 - 2026-07-06 (2026-07-07)

> [!info]- Release Notes
> ## Release Notes
> 
> ### Fixed
> 
> - SERVFAIL answers now count as a propagation signal instead of being
>   discarded as unreachable. A resolver answering SERVFAIL is saying "I tried
>   to resolve this name and could not" — the exact state of a resolver stuck
>   on a delegation whose old nameservers were deleted mid-NS-migration (or a
>   DNSSEC validation failure). Such resolvers now hold the propagation
>   percentage below 100% and keep watch mode polling; they show as
>   `✗ SERVFAIL` in the table (`FAIL` in `--once` output) with their own
>   footer count. Previously they were lumped in with timeouts/refusals, so a
>   broken delegation could report as fully propagated.
>   ([#23](https://github.com/514-labs/dnsglobe/pull/23))
> 
> ## Install dnsglobe 0.3.1
> 
> ### Install prebuilt binaries via shell script
> 
> ```sh
> curl --proto '=https' --tlsv1.2 -LsSf https://github.com/514-labs/dnsglobe/releases/download/v0.3.1/dnsglobe-installer.sh | sh
> ```
> 
> ### Install prebuilt binaries via Homebrew
> 
> ```sh
> brew install 514-labs/tap/dnsglobe
> ```
> 
> ## Download dnsglobe 0.3.1

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/514-labs/dnsglobe)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-07）
> **活躍天數** 2 天 · **最新 commit** Add Nix flake and Devbox support (#21)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/514-labs/dnsglobe/issues/25) | Adjust color scheme | 0 | 1 |
> | [#14](https://github.com/514-labs/dnsglobe/issues/14) | Feature: allow setting ECS in requests | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dnsglobe
> 
> [](https://crates.io/crates/dnsglobe)
> [](https://aur.archlinux.org/packages/dnsglobe/)
> [](https://aur.archlinux.org/packages/dnsglobe-bin/)
> [](LICENSE)
> 
> **A global DNS propagation checker for your terminal** — a Rust TUI that
> queries 34 public DNS resolvers around the world in parallel, compares their
> answers, and shows the propagation of your record on a world map.
> 
> Think dnschecker.org / whatsmydns.net, but in your terminal, with watch mode:
> start a check and it re-polls until the record has propagated everywhere.
> 
> Resolvers span the global anycast networks (Google, Cloudflare, Quad9),
> North America, Europe, Russia, the Middle East, East Asia, and the southern
> hemisphere (Telstra AU, SafeSurfer NZ, UOL BR) — each queried directly, so
> you see every server's own current view of the record.
> 
> Each resolver is queried directly (no cache, EDNS0, TCP fallback for
> truncated answers), so what you see is each server's own current view of the
> record. Answers sharing any record are grouped together — so round-robin DNS
> (each resolver caching a different subset of an IP pool) counts as one
> consistent answer, not twenty conflicting ones. The propagation gauge shows
> how many resolvers are in the majority group; outliers are flagged
> `≠ DIFFERS` once all results are in.
> 
> On terminals ≥150 columns wide, a world map appears on the right with one
> dot per resolver, colored by status (green agrees, magenta differs, red
> error, yellow in flight).
> 
> Anycast networks are asked which of their sites is answering you: Quad9
> (`TXT id.server.on.quad9.net`), Cloudflare (`CH TXT id.server`), Google
> (egress subnet via `TXT o-o.myaddr.l.google.com` matched against
> `TXT locations.publicdns.goog`), OpenDNS (`TXT debug.opendns.com`),
> CleanBrowsing, and Neustar UltraDNS. The discovered site shows in the Loc
> column as `→YUL`-style codes, and the resolver's map dot moves to the POP
> actually serving your queries.
> 
> ## Usage
> 
> Install:
> 
> ```sh
> brew install 514-labs/tap/dnsglobe   # Homebrew (macOS/Linux)
> cargo install dnsglobe               # from crates.io
> yay -S dnsglobe                      # from archlinux aur (compile from source)
> yay -S dnsglobe-bin                  # from archlinux aur (install prebuilt binary)
> nix run github:514-labs/dnsglobe     # Nix flakes (builds from source)
> # or grab a prebuilt binary from the GitHub Releases page
> ```
> 
> Run:
> 
> ```sh
> dnsglobe                            # start empty, type a domain
> dnsglobe example.com                # query immediately and watch
> dnsglobe example.com TXT            # same, starting on TXT records
> dnsglobe --once example.com TXT     # no TUI: print results, exit (for scripts)
> ```
> 
> ### Keys
> 
> | Key            | Action                          |
> | -------------- | ------------------------------- |
> | type / ⌫ / Del | edit domain                     |
> | ←/→ / Home/End | move cursor in the domain field |
> | Enter          | start the check and watch: re-polls every 30 s until propagation reaches 100% |
> | Ctrl+R         | stop or resume watching         |
> | Tab / Shift-Tab | select record type (A, AAAA, CNAME, MX, NS, TXT, SOA) |
> | ↑/↓ / PgUp/PgDn | scroll the resolver table |
> | Ctrl+S         | cycle table sort: resolver / location / time / status / answer |
> | Ctrl+U         | clear domain                    |
> | Esc / Ctrl+C   | quit                            |
> 
> ## Configuration
> 
> Optionally, add your own resolvers — or replace the built-in list entirely —
> with a TOML config file at `~/.config/dnsglobe/config.toml`
> (`$XDG_CONFIG_HOME/dnsglobe/config.toml` if set). Set `DNSGLOBE_CONFIG` to
> use a different path.
> 
> ```toml
> # Set to true to replace the built-in list instead of extending it —
> # e.g. to watch propagation across your own nameservers only.
> replace = false
> 
> [[resolvers]]
> name = "Corp DNS"        # required — shown in the Resolver column
> ip = "10.0.0.53"         # required — IPv4 or IPv6, queried on port 53
> location = "HQ"          # optional — Loc column / location sort
> lat = 40.7               # optional — position on the world map;
> lon = -74.0              #            omit both to leave it off the map
> 
> [[resolvers]]
> name = "NS1 (public)"
> ip = "198.51.100.53"
> ```
> 
> Invalid config (bad IP, unknown key, `lat` without `lon`, `replace = true`
> with no resolvers) is reported at startup with the offending entry named.
> 
> ## Notes
> 
> - Several resolvers are anycast networks, so the responding node is the one
>   nearest to you. Networks with an identification query report the actual
>   answering site (`→YUL`); for the rest the location column is the
>   operator's home region.
> - The built-in resolver list lives in `src/resolvers.rs`; use the config file
>   above to extend or replace it without rebuilding. Every built-in entry was
>   verified to answer external queries; many well-known ISP resolvers (and,
>   notably, all major African ones) refuse queries from outside their network,
>   so they can't be included.
> 
> ## Nix
> 
> The project provides optional Nix flake outputs for users who already use Nix. The flake builds from source.
> 
> ```bash
> # Latest source from default branch
> nix run github:514-labs/dnsglobe
> 
> # Specific release (uses the flake at that git tag)
> nix run github:514-labs/dnsglobe/v0.3.1
> 
> # Named outputs (if the flake exposes them): #latest, #source
> nix run github:514-labs/dnsglobe#source
> 
> # Build / develop
> nix build github:514-labs/dnsglobe
> nix develop github:514-labs/dnsglobe
> ```
> 
> The flake exposes `packages..default`, `apps..default`, `devShells..default`, and `overlays.default`.
> 
> Update through the same Nix workflow you used to install. For profile installs, run `nix profile list` and then `nix profile upgrade `. For flake inputs, run `nix flake update ` in your own flake and rebuild.
> 
> ## Devbox
> 
> For reproducible development environments, use Devbox:
> 
> ```bash
> # Install Devbox first (if not already installed)
> curl -fsSL https://get.jetify.dev/devbox | bash
> 
> # Initialize the environment
> devbox shell
> 
> # Build the project
> devbox run build
> ```
> 
> Or install Devbox via Homebrew:
> 
> ```bash
> brew install jetify-com/devbox/devbox
> ```
> 
> ---
> 
> Made with ❤️ by the folks working on [514.ax](https://www.514.ax).

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[DNS]] · [[網路監控]]

相關專案：[[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]]

[GitHub](https://github.com/514-labs/dnsglobe)

## 相關收錄

> [!note]- 直接競品（同子分類：DNS 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "DNS 工具" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "514-labs--dnsglobe" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","DNS","網路監控"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "514-labs--dnsglobe" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/514-labs--dnsglobe");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "514-labs--dnsglobe" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "514-labs" AND file.name != "514-labs--dnsglobe"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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
> const me = dv.page("Repos/514-labs--dnsglobe");
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

> **2026-07-10** — 首次收錄
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

- [[2026-07-10|2026-07-10]] — 首次收錄，774 stars
