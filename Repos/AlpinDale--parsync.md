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
  - "提供高效的 SSH 檔案同步，支援恢復與並行傳輸。"
---

# parsync

**507** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支援恢復與並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **適合** 需要高效能檔案同步的系統管理員和開發者。
> **一句話重點** parsync 的並行傳輸和恢復功能讓大檔案同步變得更高效，特別適合不穩定的網路環境。

> [!abstract] 核心創新
> parsync 提供高效能的並行檔案傳輸和恢復功能，專為大檔案同步設計。

## 專案簡介

parsync 透過 SSH 進行高效的檔案同步，支援恢復功能，並能同時處理多個檔案的傳輸。使用者只需執行 `parsync -vrPlu user@example.com:/remote/path /local/destination`，即可從遠端伺服器同步檔案至本地。該工具使用 Rust 實作，並提供了多種性能調整選項，如 `--jobs` 和 `--chunk-size`，可根據需求調整並行作業數量和每個檔案的傳輸塊大小。與傳統的 rsync 相比，parsync 的並行傳輸和可恢復性使其在大檔案傳輸時更具優勢，特別是在不穩定的網路環境下。使用者在 Windows 環境下可能會遇到元數據處理的限制，但可以透過嚴格模式來強制檢查不支援的行為。這個專案目前處於 beta 階段，適合需要高效檔案同步的中小型團隊使用。對於需要簡單檔案同步的使用者，可能不需要這麼複雜的工具。

**技術棧**：`Rust` · `Shell`

## 重點功能

- 高效能並行傳輸 — 支援同時傳輸多個檔案，使用 `--jobs` 參數調整並行作業數量。
- 恢復功能 — 允許在傳輸中斷後重新開始，使用 `-vrPlu` 指令進行同步。
- 性能調整選項 — 可設定 `--chunk-size` 和 `--chunk-threshold` 來優化傳輸效率。
- SSH 支援 — 透過 SSH 進行安全的檔案傳輸，支援非預設端口的連接。
- 元數據處理 — 提供 Windows 環境下的元數據處理選項，並可啟用嚴格模式進行檢查。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 從遠端伺服器同步檔案
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
> 作者 AlpinDale 專注於高效能檔案傳輸，滿足了對於大檔案同步的需求。隨著遠端工作和雲端服務的普及，對於高效檔案同步的需求日益增加，這使得 parsync 成為一個值得關注的工具。

## 適合誰使用

**目標受眾**：需要高效能檔案同步的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來定期備份伺服器資料，因為它的並行傳輸能顯著減少備份時間。
> - 開發者用它來同步大型專案檔案至本地環境，因為它支援恢復功能，避免因網路中斷而重複傳輸。
> - 資料科學家用它來從遠端伺服器下載大量數據集，因為它的性能調整選項能優化傳輸效率。

## 架構分析

parsync 是一個 CLI 工具，採用單體架構。用戶輸入 → SSH 連接 → 檔案同步。核心技術決策是使用 Rust 實現高效能，並支援多平台。專案目錄結構包含 `src` 目錄和 `Makefile` 以便於構建和安裝。

## 優缺點分析

> [!success] 優點
> - 高效能的並行檔案傳輸，顯著減少傳輸時間。
> - 支援恢復功能，避免因網路中斷而重複傳輸。
> - 多種性能調整選項，適合不同的使用場景。

> [!danger] 缺點
> - 在 Windows 環境下的元數據處理有限。
> - 對於小型檔案傳輸可能過於複雜。
> - 需要使用者具備一定的 SSH 知識。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS，Windows 支援有限。
> - 在 Windows 環境下，某些元數據功能不支援。
> - 需要適當的 SSH 設定，否則可能無法連接遠端伺服器。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| rsync | rsync 是傳統的檔案同步工具，parsync 提供了並行傳輸和恢復功能，適合大檔案傳輸。 |
| rclone | rclone 專注於雲端存儲的檔案同步，而 parsync 更適合於直接的 SSH 檔案傳輸。 |

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
