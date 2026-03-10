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
  - "提供高效能的 SSH 檔案同步，支援斷點續傳與平行傳輸。"
---

# parsync

**506** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的 SSH 檔案同步，支援斷點續傳與平行傳輸。

> [!abstract] 核心創新
> 提供高效能的平行檔案傳輸和斷點續傳功能，超越傳統的 rsync 工具。

## 專案簡介

這個工具讓用戶能夠從 SSH 遠端進行高效能的檔案同步，並支援斷點續傳。它使用 Rust 語言實作，並透過平行傳輸來提升傳輸速度，使用者可以自訂傳輸的工作數量和區塊大小以達到最佳效能。與傳統的 rsync 相比，parsync 在處理大型檔案時能夠更有效率，特別是在需要多次同步的情境下。使用者可以透過簡單的命令行介面來執行同步，並且可以調整多項參數來優化性能。這個工具的效能在大檔案傳輸上表現良好，但在 Windows 環境下可能會遇到一些元資料的限制。總體來說，parsync 是一個值得嘗試的工具，特別適合需要高效能檔案同步的開發者和系統管理員。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 支援平行檔案傳輸以提升速度。
- 具備斷點續傳功能，避免重複傳輸。
- 可自訂傳輸的工作數量和區塊大小。
- 支援多種平台，包括 Linux、macOS 和 Windows。
- 提供簡單的命令行介面，易於使用。

## 快速開始

1. 在 Linux 或 macOS 上安裝
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 在 Windows 上安裝
```bash
powershell -ExecutionPolicy Bypass -c "irm https://alpindale.net/install.ps1 | iex"
```
3. 使用 Cargo 安裝
```bash
cargo install parsync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 AlpinDale 在開源社群中活躍，這個專案切合了對高效能檔案同步的需求，特別是在遠端工作日益普及的情況下。隨著使用者對於檔案同步工具的需求增加，parsync 提供了一個簡單且高效的解決方案，這使得它在短時間內獲得了關注。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員 用它來 同步伺服器檔案，因為它能夠有效率地處理大量資料。
> - 開發者 用它來 備份專案檔案，因為它支援斷點續傳，避免重複上傳。
> - 資料科學家 用它來 同步大型數據集，因為它的平行傳輸能夠加速數據獲取過程。

## 架構分析

使用命令行介面進行檔案同步，透過 SSH 進行安全的遠端連接，並支援多執行緒的平行傳輸。資料流是 用戶命令 → SSH 連接 → 檔案傳輸。

## 優缺點分析

> [!success] 優點
> - 高效能的平行檔案傳輸。
> - 支援斷點續傳，避免重複上傳。
> - 簡單易用的命令行介面。

> [!danger] 缺點
> - Windows 環境下的元資料支援有限。
> - 需要用戶調整參數以達到最佳效能。
> - 對於小檔案的效能提升不如大檔案明顯。

> [!warning] 注意事項
> - 在 Windows 環境下對某些元資料的支援有限。
> - 對於小檔案的效能提升不如大檔案明顯。
> - 需要用戶自行調整參數以達到最佳效能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 不支援平行傳輸，效能在大檔案傳輸上較差。 |
| scp | scp 缺乏斷點續傳功能，無法有效處理中斷的傳輸。 |

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

**社群活躍度**：專案活躍，持續更新中。
**連結**：[文件](https://github.com/AlpinDale/parsync)

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

相關概念：[[檔案同步]] · [[SSH]] · [[平行處理]] · [[斷點續傳]]

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
