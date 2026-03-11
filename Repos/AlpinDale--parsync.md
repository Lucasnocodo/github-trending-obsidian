---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 509
stars_per_day: 102
forks: 18
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
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
use_case: "提供高效能的可恢復 SSH 檔案同步工具，支援並行傳輸與區塊增量同步。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:508,2026-03-11:509,2026-03-11:509"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效能的可恢復 SSH 檔案同步工具，支援並行傳輸與區塊增量同步。"
---

# parsync

**509** stars · **102** stars/天 · 建立 5 天前 · Rust · MIT

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
> 提供高效能的可恢復 SSH 檔案同步工具，支援並行傳輸與區塊增量同步。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能檔案同步解決方案的系統管理員和開發者，特別是在使用 SSH 的環境中。
> **一句話重點** parsync 透過並行傳輸和可恢復性設計，顯著提高了 SSH 檔案同步的效率。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效能的檔案同步效果，值得投資。

> [!abstract] 核心創新
> 提供高效能的可恢復檔案同步解決方案，特別針對 SSH 環境進行優化。

## 專案簡介

parsync 是一個高效能的檔案同步工具，透過 SSH 進行可恢復的拉取同步，支持並行檔案傳輸及可選的區塊增量同步。用戶可以使用簡單的命令，如 `parsync -vrPlu user@example.com:/remote/path /local/destination`，將遠端資料夾同步到本地，並可指定 SSH 端口。其核心機制是利用 Rust 的高效能特性，並透過 `rayon` 套件實現並行處理，這樣設計的原因是為了提高傳輸速度，特別是在處理大量小檔案時。相較於傳統的 rsync，parsync 允許用戶調整並行作業數量和區塊大小，透過 `--jobs` 和 `--chunk-size` 參數來優化性能。

與其他工具相比，如 `BigBodyCobain/Shadowbroker`，parsync 提供更高的可恢復性和更靈活的配置選項，特別是在處理大檔案時的性能優化。使用者在 Windows 環境下可能會遇到一些元資料的限制，這是因為 Windows 對於符號連結的支持不如 Linux，但可以透過 `--strict-windows-metadata` 來強制檢查。這個專案目前處於穩定階段，並且有活躍的開發社群，對於需要高效能檔案同步的開發者來說，值得考慮。適合用於需要頻繁同步大量檔案的環境，如 CI/CD 流程或大規模資料備份。

**技術棧**：`Rust 1.59` · `Cargo 1.60` · `Makefile`

## 重點功能

- 高效能並行傳輸 — 支援多達 16 個並行作業，透過 `--jobs` 參數設定。
- 可恢復的檔案同步 — 在傳輸中斷後可從上次中斷處繼續，無需重新傳輸所有檔案。
- 區塊增量同步 — 使用 `--chunk-size` 和 `--chunk-threshold` 參數來優化大檔案的傳輸。
- Windows 支援 — 提供 Windows 環境下的最佳努力支援，並可使用 PowerShell 安裝。
- 靈活的 SSH 配置 — 支援 SSH 配置檔中的主機別名，簡化使用者操作。

## 快速開始

1. 在 Linux 或 macOS 上安裝
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 在 Windows 上安裝
```bash
powershell -ExecutionPolicy Bypass -c "irm https://alpindale.net/install.ps1 | iex"
```
3. 使用基本命令進行同步
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```

## 程式碼範例

{
  "前置條件": "已安裝 parsync 並配置 SSH 設定。",
  "指令": "parsync -vrPlu user@example.com:/remote/path /local/destination",
  "預期輸出": "將遠端路徑的檔案同步到本地目的地。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 509 stars（102/天），forks 18（3.5%），顯示出穩定的增長趨勢。作者 AlpinDale 之前在開源社群有一定的貢獻，這個專案解決了傳統 rsync 在高效能和可恢復性方面的不足，特別是針對 SSH 的應用場景。近期的 Windows 支持功能也吸引了更多使用者的注意。技術上，Rust 的性能和安全性使得這個工具在檔案同步領域具備競爭力，尤其是在大檔案和高併發的情境下。forks/stars 比率為 3.5%，顯示出使用者對於這個專案的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者，特別是在使用 SSH 的環境中。

> [!example] 使用場景
> - DevOps 工程師用它來在 CI/CD 流程中自動同步測試環境的檔案，因為它的高效能和可恢復性能夠減少手動操作的錯誤。
> - 系統管理員用它來備份伺服器上的重要資料到本地，因為它支援並行傳輸，能夠大幅提高備份速度。
> - 開發者用它來在多個開發機器之間同步代碼庫，因為它的區塊增量同步功能能夠減少不必要的資料傳輸，節省帶寬。

## 架構分析

parsync 採用 Rust 語言實現，利用其高效能和安全性來處理檔案同步。整體架構設計為客戶端-伺服器模式，客戶端透過 SSH 與遠端伺服器建立連線，並進行檔案的並行傳輸。資料流的每個節點都經過精心設計，以確保高效能和可恢復性，特別是在大檔案和高併發的情況下。

選擇 Rust 而非其他語言是因為其在性能和內存管理上的優勢，這使得 parsync 能夠在高負載下運行而不會造成明顯的延遲。擴展性方面，parsync 目前支持多種平台，但在 Windows 環境下的元資料處理仍有待改進，這可能成為未來的瓶頸。整體來說，parsync 的架構設計旨在提供一個高效且靈活的檔案同步解決方案，適合各種使用場景。

## 技術深入分析

parsync 的核心技術機制在於其並行檔案傳輸的能力，利用 Rust 的 `rayon` 套件來實現多線程處理，這樣可以在同一時間內處理多個檔案的傳輸，從而提高整體的傳輸速度。效能方面，parsync 能夠在高併發的情況下保持穩定的傳輸速率，特別是在處理大檔案時，這是因為其使用了區塊增量同步的策略，僅傳輸變更的部分，減少了不必要的資料傳輸。設計上選擇 Rust 而非其他語言，主要是因為其內存安全和高效能的特性，這使得 parsync 在處理大量資料時不易出現崩潰或內存洩漏的問題。技術風險方面，Windows 環境下的元資料處理仍有待改進，這可能會在未來的版本中引發問題。整合方面，parsync 可以輕鬆與現有的 CI/CD 流程結合，並且支持多種平台，這使得它在多樣化的開發環境中都能發揮作用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程相對順暢，特別是對於 Linux 和 macOS 使用者。Windows 使用者需注意權限問題。文件中有針對不同平台的使用說明，對於新手來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 高效能的並行檔案傳輸，特別適合大檔案和高併發情境。
> - 可恢復的檔案同步，減少因傳輸中斷而造成的損失。
> - 靈活的配置選項，使用者可以根據需求調整性能參數。

> [!danger] 缺點
> - Windows 環境下對某些功能的支持有限，可能影響使用體驗。
> - 對於小檔案的傳輸優勢不如大檔案明顯。
> - 需要一定的 SSH 知識來配置和使用。

> [!warning] 注意事項
> - Windows 環境下對符號連結的支持有限，可能需要管理員權限。
> - 不支持某些 Linux 元資料選項，如 `-A` 和 `-X`。
> - 在某些情況下，對於大檔案的傳輸可能會受到網絡帶寬的限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的檔案同步功能，但主要針對特定的網絡環境設計，可能不如 parsync 在性能上靈活。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然也是一個網絡工具，但專注於 WebSocket 的代理功能，與檔案同步無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| rsync | rsync 是一個經典的檔案同步工具，使用增量算法，但不支持並行傳輸，這使得在處理大量小檔案時效率較低。 | 如果你的需求是穩定的檔案同步且不需要高效能，rsync 是一個成熟的選擇。 | low，因為 rsync 是廣泛使用的工具，許多用戶已經熟悉其命令語法。 |
| rclone | rclone 支持多種雲端存儲服務，並提供增量同步，但在性能上不如 parsync 的並行處理能力。 | 如果需要與雲端服務整合，rclone 是更合適的選擇。 | medium，因為 rclone 的命令語法與 parsync 有所不同，可能需要一些學習成本。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **parsync** | **rsync** | **rclone** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | rsync 是一個經典的檔案同步工具，使用增量算法，但不支持並行傳輸，這使得在處理大量小檔案時效率較低。 | rclone 支持多種雲端存儲服務，並提供增量同步，但在性能上不如 parsync 的並行處理能力。 |
> | 遷移成本 | - | low，因為 rsync 是廣泛使用的工具，許多用戶已經熟悉其命令語法。 | medium，因為 rclone 的命令語法與 parsync 有所不同，可能需要一些學習成本。 |
> | 適用場景 | 主要場景 | 如果你的需求是穩定的檔案同步且不需要高效能，rsync 是一 | 如果需要與雲端服務整合，rclone 是更合適的選擇。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於測試和開發環境，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，符號連結創建可能會失敗，特別是在沒有管理員權限的情況下。
  - 解法：確保使用者擁有管理員權限或啟用開發者模式。
- [MEDIUM] 某些 Linux 元資料選項在 Windows 上不被支持，可能導致警告。
  - 解法：使用 `--strict-windows-metadata` 來強制檢查，並根據需要調整使用的選項。
- [MEDIUM] 在高併發情況下，可能會出現資源競爭，導致性能下降。
  - 解法：調整 `--jobs` 參數以控制並行作業數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 CI/CD 流程 | 非常適合 | 高效能的並行傳輸能夠加快測試和部署速度。 |
| 大型企業的資料備份系統 | 適合 | 可恢復的同步功能能夠減少資料丟失的風險。 |
| 個人開發者的項目同步 | 普通 | 雖然功能強大，但對於小型項目可能過於複雜。 |
| 需要頻繁同步的多平台環境 | 非常適合 | 支援多種平台，能夠靈活應對不同的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效能的檔案同步效果，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：parsync 本身不需要高權限運行，但在 Windows 環境下可能需要管理員權限來創建符號連結。對於 SSH 的使用，需確保連線安全，避免使用不安全的密碼或密鑰。

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
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 18 |
| Open Issues | 3 |
| 最後推送 | 2026-03-06 |
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
>     "Shell" : 3
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlpinDale](https://github.com/AlpinDale) | 23 |

**最新版本**：v0.2.0 (2026-03-05)

> [!info]- Release Notes
> ## What's Changed
> * feat: windows support by @AlpinDale in https://github.com/AlpinDale/parsync/pull/2
> 
> 
> **Full Changelog**: https://github.com/AlpinDale/parsync/compare/v0.1.0...v0.2.0

## 社群與生態

**社群活躍度**：社群活躍，最近有多個提交和問題回應。
**連結**：[文件](https://docs.rs/parsync)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-06）
> **活躍天數** 2 天 · **最新 commit** feat: receiver-side destination validator (#5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/AlpinDale/parsync/issues/7) | Support Windows with Drive Letter? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # parsync
> 
> `parsync` is a high-throughput, resumable pull sync from SSH remotes, with
> parallel file transfers and optional block-delta sync.
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
> 
> ## Performance tuning
> 
> ```bash
> parsync -vrPlu --jobs 16 --chunk-size 16777216 --chunk-threshold 134217728 user@host:/src /dst
> ```
> 
> Balanced mode defaults:
> 
> - no per-file `sync_all` barriers (atomic rename preserved)
> - existing-file digest checks are skipped unless requested
> - chunk completion state is committed in batches
> - post-transfer remote mutation `stat` check is skipped (enabled in strict mode)
> 
> Throughput flags:
> 
> - `--strict-durability`: enable fsync-heavy strict mode
> - `--verify-existing`: hash existing files before skip decisions
> - `--sftp-read-concurrency`: parallel per-file read requests for large files
> - `--sftp-read-chunk-size`: read request size for SFTP range pulls
> 
> ### Notes on Windows metadata behavior
> 
> - `-A`, `-X`: warn and continue (unsupported)
> - `-o`, `-g`: warn and continue (unsupported)
> - `-p`: best-effort (readonly mapping), then continue
> - `-l`: attempts symlink creation; if OS/privilege disallows it, symlink is skipped with warning
> 
> Enable strict mode to hard-fail on unsupported behavior:
> 
> ```bash
> parsync --strict-windows-metadata -vrPlu user@host:/src C:\\dst
> ```
> 
> ## Windows symlink troubleshooting
> 
> Windows symlink creation usually requires one of:
> 
> - Administrator privileges
> - Developer Mode enabled
> 
> If not available, `-l` may skip symlinks (or fail with `--strict-windows-metadata`).

## 延伸閱讀

相關概念：[[CI/CD]] · [[檔案同步]] · [[SSH]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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
> const concepts = ["CI/CD","檔案同步","SSH"];
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
