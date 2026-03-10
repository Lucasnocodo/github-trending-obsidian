---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 506
stars_per_day: 101
forks: 18
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效能的 SSH 檔案同步，支援重啟和並行傳輸。"
---

# parsync

**506** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的 SSH 檔案同步，支援重啟和並行傳輸。

> [!abstract] 核心創新
> 提供高效能的並行檔案傳輸和增量同步功能，特別針對 SSH 遠端檔案同步進行優化。

## 專案簡介

它讓使用者能夠從 SSH 遠端高效地拉取檔案，並且支援重啟功能。這個工具使用 Rust 語言開發，並透過並行檔案傳輸來提升速度，還可以選擇區塊增量同步，減少傳輸量。與傳統的 rsync 相比，parsync 在性能上有顯著提升，特別是在處理大量小檔案時。使用者可以透過調整工作數量和區塊大小來優化傳輸效能。雖然它在 Windows 上的元資料支援有限，但對於 Linux 和 macOS 用戶來說，功能相當完整。整體來說，這是一個值得嘗試的工具，特別適合需要頻繁同步大檔案或多檔案的專案。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 支援高效能的並行檔案傳輸。
- 具備重啟功能，避免傳輸中斷造成的資料損失。
- 選擇性區塊增量同步，減少不必要的傳輸量。
- 可調整工作數量和區塊大小以優化效能。
- 支援多平台，包括 Linux、macOS 和 Windows。

## 快速開始

1. 使用 curl 安裝
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 使用 PowerShell 安裝 (Windows)
```bash
powershell -ExecutionPolicy Bypass -c "irm https://alpindale.net/install.ps1 | iex"
```
3. 使用 cargo 安裝
```bash
cargo install parsync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 AlpinDale 在開源社群中有一定的影響力，這個工具切合了對高效檔案同步的需求，特別是在雲端和伺服器管理日益普及的情況下。最近的更新也顯示出活躍的開發進度，吸引了更多使用者的注意。

## 適合誰使用

**目標受眾**：需要高效能檔案同步的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來快速同步伺服器上的備份檔案，因為它支援重啟和高效能傳輸。
> - 開發者用它來在多台機器之間同步程式碼，因為它能有效管理大量小檔案的傳輸。
> - 資料科學家用它來從遠端伺服器拉取大型數據集，因為它的增量同步功能能節省帶寬。

## 架構分析

這個專案主要由一個命令行工具組成，使用 Rust 開發，並透過 SSH 進行檔案傳輸。使用者可以透過簡單的命令行參數來調整傳輸行為和效能設定。

## 優缺點分析

> [!success] 優點
> - 高效能的檔案傳輸，特別適合大檔案和多檔案情境。
> - 支援重啟功能，避免傳輸中斷的問題。
> - 靈活的效能調整選項，適合不同需求的使用者。

> [!danger] 缺點
> - Windows 上的功能支援有限，可能影響使用體驗。
> - 需要一定的 SSH 知識來配置和使用。
> - 在極端情況下仍可能遇到效能瓶頸。

> [!warning] 注意事項
> - Windows 上的元資料支援有限。
> - 需要適當的 SSH 設定才能正常運作。
> - 在處理極大量檔案時，仍可能面臨效能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 是傳統的檔案同步工具，但不支援並行傳輸和增量同步。 |
| rclone | rclone 更專注於雲端存儲的同步，而 parsync 更適合 SSH 傳輸。 |

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

相關概念：[[檔案同步]] · [[SSH]] · [[並行處理]] · [[增量備份]] · [[網路效能優化]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
