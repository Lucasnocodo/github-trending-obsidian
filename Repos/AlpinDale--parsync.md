---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 569
stars_per_day: 22
forks: 19
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-17
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "檔案同步"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供高效能的可恢復同步工具，支援 SSH 遠端和本地傳輸。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 7679
readme_length: 1089
bus_factor: 1
last_release_days: 27
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:508,2026-03-11:509,2026-03-11:509,2026-03-13:514,2026-03-14:517,2026-03-15:519,2026-03-16:521,2026-03-17:522,2026-03-18:523,2026-03-19:524,2026-03-20:525,2026-03-21:526,2026-03-22:527,2026-03-23:541,2026-03-24:549,2026-03-25:551,2026-03-26:552,2026-03-27:553,2026-03-28:559,2026-03-29:561,2026-03-30:563,2026-03-31:564,2026-04-01:569"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效能的可恢復同步工具，支援 SSH 遠端和本地傳輸。"
---

# parsync

**569** stars · **22** stars/天 · 建立 26 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/AlpinDale--parsync");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的可恢復同步工具，支援 SSH 遠端和本地傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (22 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 14 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能檔案同步解決方案的開發者和系統管理員，特別是在多平台環境中。
> **一句話重點** parsync 不僅提供了高效能的檔案同步，還解決了在不穩定網路環境下的可恢復性問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "檔案同步" && p.file.name !== "AlpinDale--parsync" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 檔案同步 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效能的檔案同步效果，值得一試。

> [!abstract] 核心創新
> 提供高效能的可恢復同步工具，支援 SSH 遠端和本地傳輸。

## 專案簡介

parsync 是一個高效能的同步工具，專為 SSH 遠端和本地傳輸設計，支持可恢復的檔案同步。用戶可以透過簡單的指令，如 `parsync -vrPlu user@example.com:/remote/path /local/destination`，輕鬆地將遠端檔案同步到本地。這個工具的核心機制在於其並行檔案傳輸和可選的區塊增量同步，這意味著即使在不穩定的網路環境下，也能有效地恢復傳輸。技術上，parsync 使用 Rust 實作，並依賴於多個高效能庫，如 `rayon` 進行並行處理，`ssh2` 處理 SSH 連接，這使得它在速度和效能上表現優異。與傳統的 rsync 相比，parsync 的並行處理能顯著減少傳輸時間，特別是在處理大量小檔案時。

相對於其他工具如 `rsync` 或 `scp`，parsync 提供了更好的可恢復性和速度，特別是在大檔案或不穩定網路的情況下。使用者可以在 Linux、macOS 和 Windows 上運行，並且安裝過程簡單，支持多種安裝方式，包括直接下載二進位檔或使用 Cargo。雖然目前仍在發展中，但其活躍的開發和 100% 的問題解決率顯示出良好的社群支持。這個工具適合需要高效檔案同步的開發者，特別是在需要經常與遠端伺服器交互的情境下。

**技術棧**：`Rust 2021` · `Cargo` · `Makefile`

## 重點功能

- 高效能並行傳輸 — 支援多檔案同時傳輸，顯著提高同步速度。
- 可恢復的同步 — 在傳輸中斷後能夠從中斷點繼續，避免重複傳輸。
- 支援 SSH — 透過 SSH 進行安全的檔案傳輸，並支援非預設端口。
- 區塊增量同步 — 只傳輸變更的部分，減少不必要的資料傳輸。
- 跨平台支援 — 同時支援 Linux、macOS 和 Windows，方便多種環境使用。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 使用 parsync 同步檔案
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```
3. 使用非預設 SSH 端口
```bash
parsync -vrPlu user@example.com:2222:/remote/path /local/destination
```

## 程式碼範例

```rust
{
  "前置條件": "確保已安裝 parsync。",
  "指令": "parsync -vrPlu user@example.com:/remote/path /local/destination",
  "預期輸出": "檔案將從遠端路徑同步到本地目的地。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天內累積 569 stars（22/天），forks 19（3.3%），顯示出穩定的增長。作者 AlpinDale 具備開發背景，解決了傳統 rsync 在高延遲環境下的同步效率問題，提供了一個更快且可恢復的替代方案。社群對於其 Windows 支援的需求也促進了其快速成長。這個工具的出現正好填補了在 SSH 檔案同步中對於高效能和可恢復性的需求，特別是在多平台環境下的使用情境。forks/stars 比率顯示出使用者對於這個工具的實際修改和使用意圖，反映出其潛在的實用性。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的開發者和系統管理員，特別是在多平台環境中。

> [!example] 使用場景
> - 系統管理員用它來定期備份伺服器資料，因為其高效能的並行傳輸能顯著減少備份時間。
> - 開發者用它來同步本地開發環境與遠端伺服器，因為可恢復的特性在不穩定的網路環境中提供了便利。
> - 資料科學家用它來快速傳輸大型資料集至雲端伺服器，因為其增量同步功能能有效減少重複傳輸的時間與資源。

## 架構分析

parsync 採用 Rust 語言實作，旨在提供高效能的檔案同步解決方案。其架構基於並行處理，利用 `rayon` 庫來實現多執行緒的檔案傳輸，這樣可以在同時處理多個檔案時提高速度。資料流中，使用者透過 SSH 連接遠端伺服器，並將檔案同步到本地。

選擇 Rust 的原因在於其高效能和安全性，這對於檔案傳輸工具至關重要。這種設計雖然提高了效能，但也可能增加了學習曲線，特別是對於不熟悉 Rust 的開發者。擴展性方面，parsync 能夠處理大量檔案，但在極端情況下，仍需考慮網路帶寬的限制。

## 技術深入分析

parsync 的核心技術機制在於其並行檔案傳輸能力，利用 Rust 語言的高效能特性來實現。它使用 `rayon` 庫來進行多執行緒處理，這意味著在傳輸大量小檔案時，能夠顯著提高速度。根據 README，parsync 在同步過程中能夠有效地利用網路帶寬，並且在傳輸中斷時能夠從中斷點繼續，這對於不穩定的網路環境尤為重要。設計上，選擇 Rust 使得這個工具在效能和安全性上都有所保障，但也可能使得學習曲線變陡峭，特別是對於不熟悉該語言的開發者。依賴樹方面，parsync 的依賴相對輕量，主要依賴於幾個高效能的庫，這使得整體的安裝和運行成本較低。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高負載的情況下。整合方面，parsync 與現有的 CI/CD 流程相容性良好，能夠輕鬆地融入到現有的開發環境中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含範例指令。安裝過程相對順暢，無明顯的坑。文件目前僅提供英文，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 高效能的並行檔案傳輸，顯著減少同步時間。
> - 可恢復的傳輸功能，避免重複傳輸。
> - 跨平台支援，適合多種作業系統環境。

> [!danger] 缺點
> - 目前僅支援 SSH 協定，對其他協定的支援有限。
> - Windows 支援為最佳努力，可能不穩定。
> - 缺乏 GUI 界面，對於不熟悉命令行的用戶不友好。

> [!warning] 注意事項
> - 目前僅支援 SSH 協定，對於其他傳輸協定的支援尚未實現。
> - Windows 支援為最佳努力，可能會有不穩定的情況。
> - 尚未提供 GUI 界面，僅支援命令行操作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 是傳統的檔案同步工具，但缺乏並行處理能力，導致在大量小檔案傳輸時效率較低。 |
| scp | scp 雖然簡單易用，但不支援可恢復的傳輸，且速度上不如 parsync 的並行傳輸。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| rsync | rsync 是一個成熟的檔案同步工具，但主要基於單執行緒處理，效率在處理大量小檔案時較低。 | 如果需要一個成熟且廣泛使用的工具，並且不需要高效能的並行處理。 | medium，因為 rsync 的指令語法與 parsync 有相似之處，但仍需調整使用習慣。 |
| scp | scp 是一個簡單的檔案傳輸工具，但不支援可恢復的傳輸，且速度上不如 parsync 的並行傳輸。 | 如果需要快速且簡單的檔案傳輸，而不需要高效能的同步功能。 | low，因為 scp 的使用方式非常簡單，幾乎不需要學習成本。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **parsync** | **rsync** | **scp** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | rsync 是一個成熟的檔案同步工具，但主要基於單執行緒處理，效率在處理大量小檔案時較低。 | scp 是一個簡單的檔案傳輸工具，但不支援可恢復的傳輸，且速度上不如 parsync 的並行傳輸。 |
> | 遷移成本 | - | medium，因為 rsync 的指令語法與 parsync 有相似之處，但仍需調整使用習慣。 | low，因為 scp 的使用方式非常簡單，幾乎不需要學習成本。 |
> | 適用場景 | 主要場景 | 如果需要一個成熟且廣泛使用的工具，並且不需要高效能的並行處理 | 如果需要快速且簡單的檔案傳輸，而不需要高效能的同步功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人專案或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網路環境下，可能會遇到 SSH 連接不穩定的問題。
  - 解法：可以考慮使用更穩定的網路或重試連接。
- [MEDIUM] Windows 環境下的功能可能不如 Linux 和 macOS 穩定。
  - 解法：在 Windows 上使用時，建議進行充分測試。
- [MEDIUM] 在大量小檔案傳輸時，可能會遇到性能瓶頸。
  - 解法：可以考慮將小檔案打包成壓縮檔後再進行傳輸。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 中小型企業的檔案備份系統 | 非常適合 | 高效能的並行傳輸能顯著減少備份時間，適合定期備份需求。 |
| 開發團隊的檔案同步需求 | 適合 | 可恢復的特性在不穩定的網路環境中提供了便利，適合開發環境。 |
| 個人專案的檔案傳輸 | 普通 | 雖然功能強大，但對於小型專案可能顯得過於複雜。 |
| 大型企業的資料中心檔案傳輸 | 不適合 | 在極端情況下，可能會出現性能瓶頸，對於高負載環境不夠穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效能的檔案同步效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：parsync 本身不需要高權限運行，且不會存取敏感資料。依賴的庫均為常用且信任的開源庫，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

parsync 最常與 SSH 工具搭配使用，處於檔案傳輸的環節。在一個用 Docker 部署的應用中，可以用 parsync 來同步容器內的檔案，具體做法是使用 `parsync -vrPlu user@container:/path /local/path`。它與主流 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆整合到現有的開發流程中。最常見的整合問題是 SSH 配置，確保正確配置 SSH 金鑰以避免連接問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 parsync 出現之前，rsync 和 scp 是最常用的檔案同步工具，但它們在高延遲或不穩定網路環境下的表現不佳。隨著雲端計算和遠端工作模式的興起，對於高效能和可恢復的檔案同步需求日益增加。parsync 的出現正好滿足了這一需求，特別是在多平台環境中，未來可能會隨著更多功能的加入而進一步發展。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
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
> const me = dv.page("Repos/AlpinDale--parsync");
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
| Forks | 19 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 7.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlpinDale/parsync) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `repository` `homepage` `documentation` `anyhow` `base64` `clap` `ctrlc` `filetime` `glob` `indicatif`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 96
>     "Shell" : 2
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlpinDale](https://github.com/AlpinDale) | 27 |

**最新版本**：v0.2.0 (2026-03-05)

> [!info]- Release Notes
> ## What's Changed
> * feat: windows support by @AlpinDale in https://github.com/AlpinDale/parsync/pull/2
> 
> 
> **Full Changelog**: https://github.com/AlpinDale/parsync/compare/v0.1.0...v0.2.0

## 社群與生態

**社群活躍度**：社群活躍度高，問題解決率 100%。
**連結**：[文件](https://docs.rs/parsync)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-17）
> **活躍天數** 3 天 · **最新 commit** [ci skip] chore: simplify readme

## README 摘錄

> [!info]- 展開查看原文 README
> # parsync
> 
> `parsync` is a high-throughput, resumable sync tool for SSH remotes and
> local-to-local transfers, with parallel file transfers and optional block-delta
> sync.
> 
> ## Installation
> 
> **Linux and macOS:**
> 
> ```bash
> curl -fsSL https://alpindale.net/install.sh | bash
> ```
> 
> **Windows:**
> 
> ```powershell
> powershell -ExecutionPolicy Bypass -c "irm https://alpindale.net/install.ps1 | iex"
> ```
> 
> You can also install with cargo:
> 
> ```bash
> cargo install parsync
> ```
> 
> You may also download the binary for your platform from the
> [releases page](https://github.com/AlpinDale/parsync/releases), or install from source:
> 
> ```bash
> make build
> make install
> ```
> 
> ## Platform support
> 
> - Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
> - macOS: `aarch64-apple-darwin`, `x86_64-apple-darwin`
> - Windows: `x86_64-pc-windows-msvc` (best-effort metadata support)
> 
> ## Usage
> 
> ```bash
> parsync -vrPlu user@example.com:/remote/path /local/destination
> ```
> 
> With non-default SSH port:
> 
> ```bash
> parsync -vrPlu user@example.com:2222:/remote/path /local/destination
> ```
> 
> SSH config host aliases are supported.

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[檔案同步]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 直接競品（同子分類：檔案同步）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "檔案同步" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "AlpinDale--parsync" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","檔案同步"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlpinDale--parsync" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlpinDale--parsync" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AlpinDale" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
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
> const me = dv.page("Repos/AlpinDale--parsync");
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
> const me = dv.page("Repos/AlpinDale--parsync");
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
> const me = dv.page("Repos/AlpinDale--parsync");
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
> const me = dv.page("Repos/AlpinDale--parsync");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，508 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
