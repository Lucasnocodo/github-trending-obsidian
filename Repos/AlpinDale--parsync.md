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
  - "提供高效能的 SSH 檔案同步，支持斷點續傳和並行傳輸。"
---

# parsync

**507** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的 SSH 檔案同步，支持斷點續傳和並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **適合** 需要高效能檔案同步解決方案的系統管理員和開發者。
> **一句話重點** parsync 的並行傳輸和區塊差異同步功能，讓它在大檔案同步的場景中脫穎而出。

> [!abstract] 核心創新
> parsync 提供了高效能的並行檔案傳輸和區塊差異同步功能，特別適合大檔案的同步需求。

## 專案簡介

parsync 是一個高效能的檔案同步工具，專為 SSH 遠端檔案的拉取設計。它支持並行檔案傳輸，並且能夠在傳輸過程中進行區塊差異同步，這樣即使在大檔案的情況下也能保持高效。使用者可以透過簡單的命令行介面來執行同步，例如 `parsync -vrPlu user@example.com:/remote/path /local/destination`，並且可自定義 SSH 端口和其他參數。與 rsync 相比，parsync 的主要優勢在於其並行處理能力和對大檔案的優化，特別是在網路不穩定的情況下。它的性能調整選項如 `--jobs` 和 `--chunk-size` 讓使用者能夠針對不同的環境進行優化。雖然目前 Windows 的元資料支持有限，但提供了最佳努力的處理方式。這個專案目前處於穩定版本，適合需要高效能檔案同步的團隊使用。對於需要在多個平台上進行檔案同步的開發者來說，parsync 是一個值得考慮的選擇。使用者應該在需要高效能和穩定性的情況下選擇此工具，而在簡單的檔案同步需求下可能不需要這麼複雜的解決方案。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 高效能並行傳輸 — 支持同時多個檔案的傳輸，提升整體同步速度。
- 斷點續傳 — 在傳輸過程中斷時能夠從中斷處繼續，避免重複傳輸。
- 區塊差異同步 — 只傳輸變更的區塊，適合大檔案的高效同步。
- 性能調整選項 — 可透過 `--jobs` 和 `--chunk-size` 參數調整性能以適應不同環境。
- Windows 支持 — 雖然元資料支持有限，但提供最佳努力的處理方式，適合多平台使用。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 使用基本命令進行同步
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```
3. 調整性能參數進行同步
```bash
parsync -vrPlu --jobs 16 --chunk-size 16777216 user@host:/src /dst
```

## 程式碼範例

```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```

## 為什麼值得關注

> [!tip] 爆紅原因
> AlpinDale 是一位活躍的開發者，專注於高效能工具的開發。parsync 針對 SSH 檔案同步的需求提供了創新的解決方案，特別是在多檔案和大檔案的情況下。隨著遠端工作和雲端儲存的普及，對於高效能檔案同步的需求也隨之增加，這使得 parsync 在市場上受到關注。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來從遠端伺服器同步備份檔案，因為它的並行傳輸能大幅減少傳輸時間，特別是在大型檔案的情況下。
> - 開發者用它來快速同步代碼庫到本地環境，因為其支持斷點續傳功能，能夠在網路不穩定時保持同步進度。
> - 資料科學家用它來從雲端資料庫拉取大數據集，因為其區塊差異同步能有效減少不必要的數據傳輸，節省時間和帶寬。

## 優缺點分析

> [!success] 優點
> - 高效能的並行檔案傳輸，能顯著提高同步速度。
> - 支持斷點續傳，減少重複傳輸的時間和帶寬。
> - 提供多種性能調整選項，適應不同的使用場景。

> [!danger] 缺點
> - Windows 上的元資料支持有限，可能影響某些功能的使用。
> - 需要正確配置 SSH 設定，對新手來說可能有一定的學習曲線。
> - 在某些環境下，對於符號連結的支持可能會遇到權限問題。

> [!warning] 注意事項
> - Windows 上的元資料支持有限，某些功能可能無法使用。
> - 需要正確配置 SSH 設定以支持連接。
> - 在某些環境下，可能需要額外的權限來創建符號連結。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[ozler--rsync\|ozler/rsync]] | rsync 是一個經典的檔案同步工具，但不支持並行傳輸和區塊差異同步，對於大檔案的傳輸效率較低。 |
| [[rsync--rsync\|rsync/rsync]] | rsync 提供了廣泛的功能，但在高效能和斷點續傳方面不如 parsync，特別是在多檔案傳輸時。 |

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

相關概念：[[CI/CD]] · [[容器化]] · [[自動化測試]]

相關專案：[[ozler--rsync|ozler/rsync]] · [[rsync--rsync|rsync/rsync]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlpinDale--parsync"
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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
