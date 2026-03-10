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
  - "提供高效的 SSH 檔案同步，支援斷點續傳與並行傳輸。"
---

# parsync

**506** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支援斷點續傳與並行傳輸。

> [!abstract] 核心創新
> 提供高效能的並行檔案傳輸和斷點續傳功能。

## 專案簡介

它讓使用者能夠從 SSH 遠端高效地同步檔案，並在傳輸中斷時可以繼續。這個工具使用 Rust 實作，並透過並行傳輸技術來提升速度，支持可選的區塊增量同步。與傳統的 rsync 相比，parsync 提供了更高的吞吐量和可調整的性能參數，讓用戶可以根據需求調整傳輸的工作數量和區塊大小。實際使用中，parsync 在大檔案傳輸時的效能表現優於 rsync，特別是在網路不穩定的情況下。這個專案已經達到穩定版本，適合需要頻繁進行大規模檔案同步的使用者或團隊。

**技術棧**：`Rust` · `Shell` · `Makefile`

## 重點功能

- 高吞吐量的檔案同步，支援 SSH。
- 斷點續傳功能，避免重複傳輸。
- 可調整的並行工作數量，提升傳輸效率。
- 支援區塊增量同步，減少資料傳輸量。
- 跨平台支援，包括 Linux、macOS 和 Windows。

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
> 作者 AlpinDale 在開源社群中有一定的影響力，這個專案切中了對高效檔案同步的需求，尤其是在雲端和分散式系統日益普及的背景下。最近的更新和功能增強使得它在使用者中獲得了關注。

## 適合誰使用

**目標受眾**：需要高效檔案同步的系統管理員和開發團隊。

> [!example] 使用場景
> - 系統管理員用它來備份伺服器檔案，因為它能夠在網路中斷後自動恢復傳輸。
> - 開發者用它來同步大型專案檔案，因為其高效的並行傳輸大幅縮短了同步時間。
> - 數據科學家用它來從遠端伺服器拉取數據集，因為它支援增量同步，減少了不必要的資料傳輸。

## 架構分析

專案採用單一執行檔架構，通過 SSH 進行檔案傳輸，並使用 Rust 實作高效能的傳輸邏輯。

## 優缺點分析

> [!success] 優點
> - 高效能的檔案同步，適合大檔案傳輸。
> - 支援斷點續傳，提升使用體驗。
> - 可調整的性能參數，靈活應對不同需求。

> [!danger] 缺點
> - Windows 上的某些功能支援有限。
> - 需要使用者具備 SSH 知識進行設定。
> - 對於小檔案，性能提升不明顯。

> [!warning] 注意事項
> - Windows 上的某些元數據行為可能不完全支援。
> - 需要適當的 SSH 設定才能正常運作。
> - 對於小檔案，性能提升可能不明顯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 不支援斷點續傳和並行傳輸，效率較低。 |
| scp | scp 缺乏增量同步功能，無法有效利用帶寬。 |

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
