---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 505
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
  - 開發工具
  - rust
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效的 SSH 檔案同步，支援恢復和並行傳輸。"
---

# parsync

**505** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支援恢復和並行傳輸。

> [!abstract] 核心創新
> 提供高吞吐量的檔案同步，並支援恢復和並行傳輸。

## 專案簡介

這個工具讓你能夠從 SSH 遠端進行高效的檔案同步，並支援恢復功能。它使用 Rust 實作，透過並行傳輸和區塊增量同步來提升效能。與傳統的 rsync 相比，parsync 在處理大量檔案時能夠更有效率，特別是在網路不穩定的情況下。使用者可以自訂傳輸的並行度和區塊大小，這對於大檔案的傳輸特別有幫助。實際使用中，parsync 的吞吐量表現優於一般的 rsync，尤其在大型資料集的同步上。這個專案相對成熟，適合需要高效能檔案同步的專案使用。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 支援高吞吐量的檔案同步。
- 具備恢復功能，適合不穩定的網路環境。
- 支援並行檔案傳輸，提升傳輸效率。
- 可自訂傳輸的並行度和區塊大小。
- 提供詳細的性能調整選項。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 使用 parsync 同步檔案
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```

## 為什麼值得關注

> [!tip] 爆紅原因
> AlpinDale 是一位活躍的開發者，專注於高效能工具的開發。這個專案切中需要高效能檔案同步的需求，特別是在遠端伺服器管理中。隨著雲端服務的普及，對於高效能同步工具的需求日益增加，這使得 parsync 在市場上受到關注。

## 適合誰使用

**目標受眾**：需要高效能檔案同步的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來快速同步伺服器上的檔案，因為它能夠在不穩定的網路環境中恢復傳輸。
> - 開發者用它來備份大型專案資料夾，因為它支援並行傳輸，顯著縮短備份時間。
> - 資料科學家用它來同步分析結果，因為它的增量同步功能可以節省帶寬和時間。

## 架構分析

parsync 採用客戶端-伺服器架構，透過 SSH 進行安全的檔案傳輸，並利用 Rust 的高效能特性來處理並行傳輸和恢復功能。

## 優缺點分析

> [!success] 優點
> - 高效能的檔案同步，適合大檔案傳輸。
> - 支援恢復功能，增強了可靠性。
> - 靈活的性能調整選項，適應不同需求。

> [!danger] 缺點
> - 對於某些元資料的支援有限，特別是在 Windows 上。
> - 需要一定的技術背景來進行性能調整。
> - 在某些情況下，可能需要額外的權限來執行。

> [!warning] 注意事項
> - 對於 Windows 的某些元資料支援有限。
> - 需要適當的權限來創建 symlink。
> - 在某些情況下，性能調整可能需要額外的測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | parsync 提供更高的並行性和恢復功能，特別適合大檔案傳輸。 |
| rclone | rclone 更加專注於雲端存儲的同步，而 parsync 更適合 SSH 傳輸。 |

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

相關概念：[[檔案同步]] · [[SSH]] · [[並行處理]] · [[增量備份]]

[GitHub](https://github.com/AlpinDale/parsync)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
