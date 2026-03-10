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
first_seen: 2026-03-10
week: "2026-W11"
category: "基礎設施"
release_tag: "v0.2.0"
status: to-review
tags:
  - github
  - 基礎設施
  - rust
---

# parsync

**505** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

> [!summary] 一句話摘要
> 提供高效的 SSH 同步工具，支持斷點續傳和並行傳輸。

## 專案簡介

這個工具能夠在 SSH 遠端之間進行高效的文件同步，支持斷點續傳和並行傳輸，提升傳輸效率。它使用 Rust 實作，並且支持多種平台。與傳統的 rsync 工具相比，parsync 更加注重性能和用戶體驗，特別適合需要頻繁同步大文件的場景。非常值得一試，尤其是對於系統管理員和開發者。

## 重點功能

- 支持 SSH 遠端的高效文件同步，提升傳輸速度。
- 具備斷點續傳功能，避免重複傳輸。
- 支持並行文件傳輸，進一步提高效率。
- 可在多平台上運行，包括 Linux、macOS 和 Windows。

## 快速開始

使用 curl 安裝：`curl -fsSL https://alpindale.net/install.sh | bash`,使用命令進行文件同步：`parsync -vrPlu user@example.com:/remote/path /local/destination`

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個工具的高效性能和易用性吸引了許多需要文件同步的開發者，尤其是在大文件傳輸的需求上。

## 適合誰使用

**目標受眾**：需要高效文件同步的系統管理員和開發者。

> [!example] 使用場景
> - [系統管理員] 用它來備份伺服器數據，因為可以快速且可靠地同步大量文件。
> - [開發者] 用它來部署應用程式，因為支持斷點續傳，減少重複傳輸的時間。
> - [資料科學家] 用它來同步大型數據集，因為能夠高效處理大文件的傳輸。

> [!warning] 注意事項
> 在 Windows 平台上可能存在最佳化不足的情況。

## 類似工具比較

相關替代方案：rsync

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Rust |
| 授權 | MIT |
| Stars | 505 |
| Forks | 18 |
| Issues | 3 |
| 建立日期 | 2026-03-05 |

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
> - `--strict-

## 延伸閱讀

相關概念：#文件同步 · #SSH · #高效傳輸

[GitHub](https://github.com/AlpinDale/parsync)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
