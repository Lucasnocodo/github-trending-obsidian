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
use_case: "在終端機上檢查 DNS 記錄的全球傳播情況，並在世界地圖上顯示。"
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
star_history: "2026-07-10:774,2026-07-10:774"
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
  - "在終端機上檢查 DNS 記錄的全球傳播情況，並在世界地圖上顯示。"
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
> 在終端機上檢查 DNS 記錄的全球傳播情況，並在世界地圖上顯示。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (155 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在終端中監控 DNS 記錄變化的網路管理員或開發者。
> **一句話重點** dnsglobe 是一個將 DNS 查詢與視覺化結合的創新工具，讓用戶能在終端中輕鬆監控 DNS 記錄的變化。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時監控 DNS 記錄的能力，值得投入。

> [!abstract] 核心創新
> 提供了一個即時更新的終端 DNS 查詢工具，並且在地圖上視覺化顯示各解析器的狀態。

## 專案簡介

dnsglobe 是一個用 Rust 實作的終端用戶界面 (TUI) 工具，能夠同時查詢 34 個公共 DNS 解析器，並在世界地圖上顯示 DNS 記錄的傳播情況。用戶可以透過簡單的命令如 `dnsglobe example.com` 來立即查詢並觀察記錄的傳播進度，並且在每次查詢後自動更新結果。這個工具的賣點在於其能夠直接查詢每個解析器的當前狀態，並且不使用快取，確保顯示的結果是最新的。技術上，dnsglobe 使用了 Rust 的 `tokio` 來實現並行查詢，並且利用 `ratatui` 來構建終端界面，這使得它在性能上相當優越，能夠快速響應用戶的請求。與其他類似工具如 dnschecker.org 相比，dnsglobe 提供了更直觀的視覺化界面，並且能夠在終端中持續監控 DNS 記錄的變化。

這對於需要即時監控 DNS 記錄的網路管理員來說，無疑是一個強大的工具。使用者可以自定義解析器，並且支持多種記錄類型（如 A、AAAA、CNAME 等），這使得它在靈活性上也具備優勢。dnsglobe 的使用限制主要在於需要終端支持，且對於不熟悉命令行的用戶可能需要一些學習成本。整體而言，這是一個穩定的工具，適合需要監控 DNS 記錄的開發者和網路管理員，未來可能會持續增強其功能以支持更多的 DNS 相關操作。

**技術棧**：`Rust 1.85` · `tokio` · `ratatui`

## 重點功能

- 全球查詢 — 同時查詢 34 個公共 DNS 解析器，顯示各自的解析結果。
- 即時更新 — 支持監控模式，每 30 秒自動重新查詢，直到所有解析器達到 100% 傳播。
- 視覺化地圖 — 在終端中顯示世界地圖，根據解析器的狀態顯示不同顏色的點。
- 自定義解析器 — 允許用戶添加或替換內建的解析器列表，支持自定義配置。
- 多種記錄類型 — 支持查詢 A、AAAA、CNAME、MX、NS、TXT、SOA 等多種 DNS 記錄類型。

## 快速開始

1. 安裝 dnsglobe
```bash
brew install 514-labs/tap/dnsglobe
```
2. 查詢 DNS 記錄
```bash
dnsglobe example.com
```
3. 查看 TXT 記錄
```bash
dnsglobe example.com TXT
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 774 stars（155/天），forks 20（2.6%），這顯示出相對穩定的增長。作者 callicles 和其他貢獻者在 Rust 生態系中有一定的影響力，這個工具解決了傳統 DNS 查詢工具缺乏即時性和視覺化的痛點。之前的解決方案多數依賴於網頁介面，無法在終端中提供即時更新的視覺效果。這個工具的出現，讓用戶可以在終端中輕鬆監控 DNS 記錄的變化，並且提供了直觀的地圖視覺化，這在技術社群中引起了關注。forks/stars 比率相對較低，顯示出大部分用戶對這個工具的興趣仍然停留在觀望階段。

## 適合誰使用

**目標受眾**：需要在終端中監控 DNS 記錄變化的網路管理員或開發者。

> [!example] 使用場景
> - 網路管理員用它來即時監控 DNS 記錄的變化，因為可以在終端中快速獲得各個解析器的狀態，避免了手動查詢的繁瑣。
> - DevOps 工程師用它來自動化 DNS 記錄的檢查，因為它支持多種記錄類型並且可以持續監控，減少了人工干預的需求。
> - 開發者用它來測試新部署的應用的 DNS 設定，因為它能夠快速顯示不同地區的解析結果，幫助確認設定是否正確。

## 架構分析

dnsglobe 採用 Rust 語言實作，使用 tokio 進行異步查詢，這使得它能夠同時向多個 DNS 解析器發送請求而不會阻塞。資料流方面，工具首先從用戶輸入的域名開始，然後發送查詢請求到各個解析器，接著收集回應並在終端中顯示結果。選擇 Rust 的原因在於其高效能和安全性，這對於網路工具來說至關重要。這個架構的 trade-off 是，雖然 Rust 提供了優越的性能，但對於不熟悉這個語言的開發者來說，學習曲線可能較陡。擴展性方面，dnsglobe 允許用戶自定義解析器，這使得它在不同環境下的適應性更強。

## 技術深入分析

dnsglobe 的核心技術機制是使用 Rust 語言的異步特性，透過 tokio 框架實現高效的並行查詢。這使得它能夠在短時間內向多個 DNS 解析器發送請求，並且能夠即時更新結果。效能方面，dnsglobe 能夠處理多達 34 個解析器的查詢，並且在大多數情況下能在幾秒鐘內返回結果。設計上選擇 Rust 而非其他語言（如 Python 或 Go），主要是因為 Rust 提供了更好的性能和內存安全性，這對於網路工具至關重要。依賴樹方面，dnsglobe 的依賴相對輕量，主要依賴於 tokio 和 ratatui，這使得整體安裝和運行的複雜度較低。技術風險方面，隨著用戶數量的增加，可能會對查詢的速度和準確性造成影響，特別是在高負載的情況下。整合方面，dnsglobe 可以輕鬆與現有的 CI/CD 流程整合，並且能夠與其他命令行工具搭配使用，這使得它在開發和運維中都能發揮作用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並且包含了範例命令。安裝過程相對順暢，沒有明顯的坑。文件中沒有提供多語言支持，但英文內容清晰易懂，適合大多數開發者。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供即時更新的 DNS 查詢結果，適合需要快速反饋的使用場景。
> - 視覺化的地圖界面使得結果更易於理解，特別是在處理多個解析器時。
> - 支持多種 DNS 記錄類型，靈活性高。

> [!danger] 缺點
> - 對於不熟悉命令行的用戶，學習成本較高。
> - 僅支援 macOS 和 Linux，Windows 用戶無法使用。
> - 需要穩定的網路連接，否則查詢結果可能不準確。

> [!warning] 注意事項
> - 僅支援在終端中運行，對於不熟悉命令行的用戶可能有學習曲線。
> - 需要穩定的網路連接以查詢各個解析器，網路不穩定時可能影響結果。
> - 不支持 Windows 環境，主要針對 macOS 和 Linux 用戶。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 DNS 查詢功能，但主要針對自動化代理的管理，適合需要高頻率查詢的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 DNS 記錄的歷史查詢，適合需要追蹤 DNS 記錄變化的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理管理，使用 Rust 實作，適合需要高頻率查詢的場景。 | 如果你的團隊需要高頻率的 DNS 查詢並且已經在使用 Rust 生態系，則這個工具會更合適。 | medium，因為需要重新學習新的命令和配置方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於 DNS 記錄的歷史查詢，使用 Python 實作，適合需要追蹤 DNS 記錄變化的用戶。 | 如果你的需求是追蹤 DNS 記錄的歷史變化，則 boneyard 會更適合。 | low，因為命令行介面相似，且 Python 的學習曲線較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **dnsglobe** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於自動化代理管理，使用 Rust 實作，適合需要高頻率查詢的場景。 | 這個工具專注於 DNS 記錄的歷史查詢，使用 Python 實作，適合需要追蹤 DNS 記錄變化的用戶。 |
> | 遷移成本 | - | medium，因為需要重新學習新的命令和配置方式。 | low，因為命令行介面相似，且 Python 的學習曲線較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高頻率的 DNS 查詢並且已經在使用 Rus | 如果你的需求是追蹤 DNS 記錄的歷史變化，則 boneya |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在開發環境中試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下，可能無法查詢特定的公共 DNS 解析器，導致結果不完整。
  - 解法：嘗試使用不同的網路環境或手動添加其他解析器。
- [MEDIUM] 如果終端寬度小於 150 列，地圖顯示會受到限制。
  - 解法：擴大終端窗口以獲得最佳顯示效果。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的網路管理團隊 | 非常適合 | 能夠快速監控多個 DNS 記錄的變化，及時發現問題。 |
| 大型企業的 DevOps 團隊 | 適合 | 支持自定義解析器，能夠滿足複雜的需求。 |
| 個人開發者進行 DNS 測試 | 普通 | 雖然功能強大，但命令行介面對於新手可能有些挑戰。 |
| 需要 Windows 支援的用戶 | 不適合 | 目前僅支援 macOS 和 Linux。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時監控 DNS 記錄的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：dnsglobe 本身不需要高權限運行，且不存取敏感資料。依賴的庫均為已知的安全庫，適合在 CI/CD 中使用。

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

**社群活躍度**：社群活躍度中等，開發者積極回應問題。
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

相關概念：[[CLI/TUI]] · [[DNS]] · [[網路編程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[baairon--torlink|baairon/torlink]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]]

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
> const concepts = ["CLI/TUI","DNS","網路編程"];
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
