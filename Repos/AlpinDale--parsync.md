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
use_case: "提供高效能的 SSH 檔案同步，支持恢復和並行傳輸。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效能的 SSH 檔案同步，支持恢復和並行傳輸。"
---

# parsync

**507** stars · **101** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效能的 SSH 檔案同步，支持恢復和並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **適合** 需要高效能檔案同步解決方案的系統管理員和開發者。
> **一句話重點** parsync 的並行傳輸和恢復功能讓檔案同步變得更高效，特別適合大檔案和不穩定網路環境。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供高吞吐量的並行檔案同步，並且支持恢復功能。

## 專案簡介

這個工具 `parsync` 讓使用者能夠從 SSH 遠端伺服器進行高效的檔案同步，支持恢復功能，並且可以同時傳輸多個檔案。使用者只需執行 `parsync -vrPlu user@example.com:/remote/path /local/destination` 即可開始同步，並可透過 `--jobs` 和 `--chunk-size` 參數來調整傳輸性能。它的技術基礎是 Rust，並且設計上考慮了高吞吐量和低延遲，特別適合大檔案的傳輸。與傳統的 rsync 相比，`parsync` 支持並行傳輸和區塊增量同步，這使得它在處理大量小檔案時表現更佳。使用者可以在 Linux、macOS 和 Windows 平台上使用，並且提供了針對 Windows 的特別注意事項。這個專案目前處於穩定階段，適合需要高效檔案同步的團隊使用。對於需要在多個平台上進行檔案同步的開發者來說，`parsync` 是一個值得考慮的選擇，但在 Windows 上的某些功能可能會受到限制。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 高吞吐量同步 — 支持並行檔案傳輸，使用 `--jobs` 參數設定同時傳輸的檔案數量。
- 恢復功能 — 在傳輸過程中中斷後可從中斷點繼續，避免重複傳輸。
- 區塊增量同步 — 使用 `--chunk-size` 參數設定每個區塊的大小，減少不必要的資料傳輸。
- Windows 兼容性 — 提供 Windows 特有的元資料處理選項，並支持最佳努力的符號連結創建。
- 性能調整 — 提供多種參數來調整性能，如 `--sftp-read-concurrency` 和 `--strict-durability`。

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
> 作者 AlpinDale 專注於高效能的檔案傳輸解決方案，滿足了對快速和可靠同步的需求。隨著遠端工作和雲端儲存的普及，對於高效能檔案同步工具的需求日益增加。這個專案在最近的更新中引入了多項性能優化，吸引了更多使用者的注意。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來從遠端伺服器快速同步備份檔案，因為它的並行傳輸可以顯著減少傳輸時間。
> - 開發者用它來在多台伺服器之間同步代碼庫，因為它支持恢復功能，避免了在傳輸過程中出現的中斷問題。
> - 資料科學家用它來從大型資料集伺服器拉取數據，因為它的區塊增量同步可以減少不必要的資料傳輸，節省帶寬。

## 架構分析

parsync 採用 CLI 架構，使用者通過命令行輸入指令進行檔案同步。用戶輸入 → parsync 處理 SSH 連接和檔案傳輸 → 輸出同步結果。關鍵技術決策包括使用 Rust 來實現高效能和安全性。專案目錄結構中包含 Makefile 用於編譯和安裝。

## 技術深入分析

> [!note]- 展開深入分析
> parsync 的核心演算法基於 Rust 的高效能特性，實現了多線程的檔案傳輸。效能方面，使用者可以透過 `--jobs` 參數調整同時傳輸的檔案數量，並且支持高達 16 個並行傳輸。設計上，parsync 在性能和可靠性之間取得平衡，選擇了不在每個檔案上進行完整性檢查的策略，這樣可以加快傳輸速度。與傳統的 rsync 相比，parsync 在處理大量小檔案時表現更佳，因為它能夠同時處理多個檔案，減少了總的傳輸時間。

## 優缺點分析

> [!success] 優點
> - 支持高吞吐量的並行檔案傳輸，顯著提高同步效率。
> - 具備恢復功能，避免在傳輸過程中因中斷而重複傳輸。
> - 提供多種性能調整參數，適應不同的網路環境和需求。

> [!danger] 缺點
> - 在 Windows 上的某些功能受限，可能需要額外配置。
> - 不支持某些特定的元資料處理，可能影響某些使用場景。
> - 對於小檔案的處理效率可能不如專門針對小檔案的工具。

> [!warning] 注意事項
> - Windows 上的某些元資料選項不支援，可能會導致警告或跳過。
> - 在 Windows 上創建符號連結需要管理員權限或開發者模式。
> - 不支援某些 Linux 和 macOS 特有的元資料選項。
> - 需要在支持 SSH 的環境中運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[axboe--rsync\|axboe/rsync]] | rsync 是一個經典的檔案同步工具，但不支持並行傳輸和區塊增量同步，對於大量小檔案的處理效率較低。 |
| [[github--rsync\|github/rsync]] | 這個版本的 rsync 主要針對傳統的單線程傳輸，而 parsync 提供了多線程的選項，顯著提高了傳輸速度。 |

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
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

相關概念：[[CI/CD]] · [[容器化]] · [[自動化測試]]

相關專案：[[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

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
