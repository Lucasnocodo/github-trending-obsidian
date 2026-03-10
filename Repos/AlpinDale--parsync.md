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
  - "提供高效的 SSH 檔案同步，支援恢復和並行傳輸。"
---

# parsync

**507** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支援恢復和並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **適合** 需要高效能檔案同步解決方案的系統管理員和開發者。
> **一句話重點** parsync 讓檔案同步變得更快、更可靠，特別適合需要高效能的使用者。

> [!abstract] 核心創新
> parsync 提供了高效的並行檔案傳輸和恢復功能，顯著提升了檔案同步的速度和可靠性。

## 專案簡介

parsync 透過 SSH 進行高效的檔案拉取同步，支援恢復功能，並且能夠同時傳輸多個檔案。使用者只需執行 `parsync -vrPlu user@example.com:/remote/path /local/destination` 指令，即可開始同步，並可透過 `--jobs` 和 `--chunk-size` 參數調整性能。該工具使用 Rust 編寫，並支援 Linux、macOS 和 Windows 平台，能夠處理大檔案的分塊傳輸。與傳統的 rsync 相比，parsync 提供了更高的傳輸速度和更靈活的配置選項，特別適合需要高效能檔案同步的場景。使用者可以設定多達 16 個並行作業，並透過 `--strict-durability` 開啟嚴格模式以確保檔案完整性。該工具的效能在大檔案傳輸上表現優異，但在 Windows 環境下對於某些元資料的支援有限。這個專案目前處於 beta 階段，適合需要快速檔案同步的中小型團隊使用。建議在需要高效能檔案同步時使用，但若對 Windows 元資料有高需求，則需謹慎考量。

**技術棧**：`Rust` · `Shell` · `Makefile`

## 重點功能

- 高效的並行檔案傳輸 — 同時傳輸多個檔案，使用 `--jobs` 參數設定並行數量。
- 支援恢復功能 — 在傳輸中斷後可從中斷點繼續，無需重新開始。
- 可調整的分塊大小 — 使用 `--chunk-size` 參數設定每個檔案的分塊大小，預設為 16MB。
- 靈活的性能調整 — `--strict-durability` 參數可啟用嚴格模式以確保檔案完整性。
- 跨平台支援 — 可在 Linux、macOS 和 Windows 上運行，並提供安裝腳本。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 執行同步指令
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
> 作者 AlpinDale 具備豐富的開發經驗，專注於高效能工具的開發。隨著遠端工作和雲端存儲的普及，對高效檔案同步工具的需求日益增加。這個專案的推出恰好滿足了這一需求，並且在 GitHub 上獲得了不錯的關注度。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來快速同步伺服器檔案，因為相比 rsync，parsync 提供了更高的傳輸速度和恢復能力。
> - 開發者用它來在多個環境之間同步大型專案檔案，因為它支援並行傳輸，能顯著減少同步時間。
> - 資料科學家用它來從遠端伺服器快速拉取數據集，因為它的分塊傳輸能有效處理大檔案。

## 架構分析

該專案採用 CLI 架構，使用者透過命令行介面進行操作。用戶輸入 → parsync 處理 SSH 連接與檔案傳輸 → 輸出同步結果。核心技術決策包括使用 Rust 以提升性能，並支援多平台運行。關鍵檔案包括 install.sh 和 main.rs。

## 優缺點分析

> [!success] 優點
> - 高效的並行檔案傳輸，顯著縮短同步時間。
> - 支援恢復功能，避免重複傳輸。
> - 跨平台支援，方便不同環境使用。

> [!danger] 缺點
> - Windows 環境下對元資料支援有限。
> - 需要根據環境調整性能參數以達到最佳效果。
> - 對於某些特殊檔案類型的支援可能不足。

> [!warning] 注意事項
> - 對於某些 Windows 元資料的支援有限。
> - 在高負載情況下可能需要調整性能參數以達到最佳效果。
> - 僅支援特定的 SSH 配置，可能不適用於所有環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[WayneHarris--rsync\|WayneHarris/rsync]] | rsync 是一個經典的檔案同步工具，但不支援並行傳輸，速度較慢。 |
| [[lxc--lxc\|lxc/lxc]] | LXC 提供容器化的檔案傳輸，但不具備 parsync 的高效能和恢復功能。 |

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
