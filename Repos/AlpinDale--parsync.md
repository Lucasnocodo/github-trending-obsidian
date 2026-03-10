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
  - "提供高效的 SSH 檔案同步，支持恢復和並行傳輸。"
---

# parsync

**506** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支持恢復和並行傳輸。

> [!abstract] 核心創新
> 提供高效的並行檔案傳輸和恢復功能，超越傳統的 rsync 工具。

## 專案簡介

它讓使用者能夠通過 SSH 進行高效的檔案同步，並支持恢復功能。這個工具使用 Rust 實現，並透過並行傳輸來提升速度，還可以選擇區塊增量同步以節省帶寬。與傳統的 rsync 相比，parsync 在處理大量小檔案時表現更佳，因為它可以同時傳輸多個檔案。實際使用中，使用者可以根據需求調整並行作業數量和區塊大小，以達到最佳效能。這個工具適合需要頻繁同步大量檔案的開發者或系統管理員，特別是在大規模資料遷移或備份的情境下。整體來說，parsync 是一個值得嘗試的工具，尤其對於需要高效能檔案同步的專案非常合適。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 高效的並行檔案傳輸，顯著提升同步速度。
- 支持恢復功能，避免傳輸中斷造成的資料損失。
- 可選擇區塊增量同步，節省帶寬和時間。
- 支持多平台，包括 Linux、macOS 和 Windows。
- 靈活的性能調整選項，使用者可自定義並行作業數量和區塊大小。

## 快速開始

1. 在 Linux 或 macOS 上安裝
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 在 Windows 上安裝
```bash
powershell -ExecutionPolicy Bypass -c "irm https://alpindale.net/install.ps1 | iex"
```
3. 使用 cargo 安裝
```bash
cargo install parsync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 AlpinDale 在開源社群中活躍，專注於高效能工具的開發。隨著遠端工作和雲端服務的普及，對於高效檔案同步的需求日益增加，這使得 parsync 的功能正好切中痛點。近期的更新也讓使用者看到持續的改進和支持，進一步提升了其吸引力。

## 適合誰使用

**目標受眾**：需要高效檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員 用它來 同步伺服器上的配置檔，因為它能夠快速且可靠地處理大量檔案。
> - 開發者 用它來 備份專案資料夾，因為它支持恢復功能，避免資料遺失。
> - 資料科學家 用它來 同步大型數據集，因為並行傳輸能顯著縮短時間。

## 架構分析

該專案採用單一執行檔架構，通過 SSH 進行檔案傳輸，並支持多執行緒以提高效能。

## 優缺點分析

> [!success] 優點
> - 高效的並行檔案傳輸，顯著提升速度。
> - 支持恢復功能，避免資料損失。
> - 靈活的性能調整選項，適合不同需求。

> [!danger] 缺點
> - Windows 上的某些功能支持有限。
> - 對於大型檔案，可能需要進行性能調整。
> - 目前僅支持特定的 SSH 配置，對於複雜情況可能不夠靈活。

> [!warning] 注意事項
> - Windows 上的某些元數據功能不完全支持。
> - 對於大型檔案，可能需要根據環境調整參數以獲得最佳效能。
> - 目前僅支持特定的 SSH 配置，對於複雜的 SSH 設定可能需要額外調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 是一個成熟的工具，但不支持並行傳輸和增量同步。 |
| scp | scp 雖然簡單，但不支持恢復和高效的檔案同步。 |

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

**社群活躍度**：每週有穩定的更新，社群活躍度良好。
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

相關概念：[[CI/CD]] · [[容器化]] · [[效能優化]]

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

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
