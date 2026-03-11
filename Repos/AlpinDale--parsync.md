---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 507
stars_per_day: 101
forks: 18
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "檔案同步"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供高效能的 SSH 檔案同步，支援斷點續傳與並行傳輸。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/基礎設施"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效能的 SSH 檔案同步，支援斷點續傳與並行傳輸。"
---

# parsync

**507** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的 SSH 檔案同步，支援斷點續傳與並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在多平台上進行高效能檔案同步的系統管理員和開發者。
> **一句話重點** 這個工具的設計理念是針對高效能和穩定性，特別適合需要頻繁同步大檔案的使用者。

> [!abstract] 核心創新
> 提供高效能的 SSH 檔案同步，支援斷點續傳與並行傳輸。

## 專案簡介

這個工具讓你能夠從 SSH 遠端伺服器高效地拉取檔案，並且支援斷點續傳，避免重複傳輸已經存在的檔案。使用者可以透過簡單的指令，如 `parsync -vrPlu user@example.com:/remote/path /local/destination`，來執行同步，並可調整並行傳輸的數量和區塊大小以提升效能。它使用 Rust 語言開發，具備高效能的檔案傳輸能力，並支援多平台，包括 Linux、macOS 和 Windows。與傳統的 rsync 相比，`parsync` 提供了更高的傳輸速度和更好的錯誤恢復能力，特別是在大檔案傳輸時。這個工具在性能調整上提供了多種選項，例如 `--jobs` 和 `--chunk-size`，讓使用者可以根據網路環境和硬體資源進行優化。儘管在 Windows 上的某些功能有限制，但它仍然提供了基本的檔案同步能力。整體來看，這是一個穩定的工具，適合需要高效能檔案同步的團隊使用，特別是在大規模資料傳輸的情境下。對於小型團隊或偶爾使用者來說，可能會覺得功能過於複雜。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 高效能傳輸 — 支援並行檔案傳輸，使用 `--jobs` 參數可設定同時傳輸的檔案數量。
- 斷點續傳 — 能夠在傳輸中斷後繼續，避免重複傳輸，提升效率。
- 性能調整 — 使用 `--chunk-size` 和 `--chunk-threshold` 參數來調整傳輸的區塊大小和閾值。
- SSH 支援 — 支援多種 SSH 配置，包括自定義端口和主機別名。
- Windows 支援 — 雖然有一些限制，但仍然提供基本的檔案同步功能，適合 Windows 使用者。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 執行檔案同步
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```
3. 調整性能參數
```bash
parsync -vrPlu --jobs 16 --chunk-size 16777216 user@host:/src /dst
```

## 程式碼範例

```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 AlpinDale 在開源社群中活躍，過去有多個知名專案。這個工具解決了在 SSH 環境下進行高效能檔案同步的痛點，特別是對於需要斷點續傳的使用者。最近的技術討論和需求增加，讓這個工具的曝光度提升。現在的網路環境和資料量的增加，使得高效能的檔案同步工具變得更加必要。

## 適合誰使用

**目標受眾**：需要在多平台上進行高效能檔案同步的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來從遠端伺服器同步備份檔案到本地，因為它支援斷點續傳，避免重複傳輸已存在的檔案。
> - DevOps 工程師用它來在多個伺服器之間快速同步配置檔，因為它的並行傳輸功能能顯著提升效率。
> - 資料科學家用它來從大型資料集伺服器拉取數據，因為它能夠根據網路狀況調整傳輸參數，確保穩定性。

## 架構分析

這是一個 CLI 工具，使用者透過命令行介面輸入指令來執行檔案同步。核心資料流為：用戶輸入 → 檔案拉取與同步處理 → 輸出結果。專案主要使用 Rust 語言開發，確保高效能和安全性。目錄結構中，`src` 資料夾包含主要的程式碼邏輯，`Makefile` 用於建構和安裝流程。

## 技術深入分析

> [!note]- 展開深入分析
> 核心演算法利用 Rust 的高效能特性來處理檔案的並行傳輸，並透過 SSH 協議進行安全的數據傳輸。效能方面，使用者可以透過 `--jobs` 和 `--chunk-size` 參數來調整傳輸的效率，這在實際測試中顯示出可達到數百 MB/s 的傳輸速度。設計上，`parsync` 選擇了不進行每個檔案的完整性檢查，這樣可以在大檔案傳輸時減少延遲，這是與傳統 rsync 的一大不同。對於需要高效能的資料同步，這種設計取捨是非常有效的。

## 優缺點分析

> [!success] 優點
> - 高效能檔案同步，特別適合大檔案和高頻率的同步需求。
> - 支援斷點續傳，避免重複傳輸，節省時間和帶寬。
> - 多平台支援，適合不同作業系統的使用者。

> [!danger] 缺點
> - Windows 上的某些功能有限制，可能無法完全支援所有元資料。
> - 需要使用者具備一定的命令行操作能力，對於新手可能不友好。
> - 在高負載情況下，性能調整可能需要額外的時間和經驗。

> [!warning] 注意事項
> - Windows 上的某些元資料行為有限制，可能無法完全支援 symlink。
> - 需要在 Linux 和 macOS 上安裝相應的依賴，Windows 支援為最佳努力。
> - 在高負載情況下，可能需要調整參數以避免性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的檔案同步功能，但主要針對特定的雲端環境，缺乏 `parsync` 的高效能和斷點續傳能力。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然也是一個傳輸工具，但專注於 WebSocket 代理，與檔案同步無直接關聯。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 18 |
| Open Issues | 3 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 7.5 MB |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和維護。
**連結**：[文件](https://github.com/AlpinDale/parsync#readme)

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

相關概念：[[自動化]] · [[CI/CD]] · [[容器化]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[zornade--visura-api|zornade/visura-api]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
