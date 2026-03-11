---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 508
stars_per_day: 102
forks: 18
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "檔案同步"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供高效的 SSH 檔案同步，支持斷點續傳與並行傳輸。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:508"
tags:
  - github
  - "category/基礎設施"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效的 SSH 檔案同步，支持斷點續傳與並行傳輸。"
---

# parsync

**508** stars · **102** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的 SSH 檔案同步，支持斷點續傳與並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要高效檔案同步和斷點續傳功能的系統管理員和開發者。
> **一句話重點** parsync 的高效性和斷點續傳功能使其成為檔案同步的理想選擇，特別是在需要處理大檔案的情況下。

> [!abstract] 核心創新
> parsync 提供高吞吐量的並行檔案同步，並支持斷點續傳，解決了傳輸過程中的效率問題。

## 專案簡介

這個工具讓使用者能夠從 SSH 遠端伺服器進行高效的檔案同步，支持斷點續傳和並行傳輸。使用者只需輸入 `parsync -vrPlu user@example.com:/remote/path /local/destination`，即可將遠端檔案同步到本地。它使用 Rust 實現，並支持多種平台，包括 Linux、macOS 和 Windows。性能上，使用者可以透過 `--jobs` 和 `--chunk-size` 來調整並行傳輸的數量和每個塊的大小，並可選擇啟用嚴格模式以確保數據一致性。相較於傳統的 rsync，parsync 提供了更高的傳輸速度，並且支持在傳輸過程中自動跳過已存在的檔案，這樣可以節省時間和帶寬。它還允許用戶在 Windows 環境中使用，但對於某些元數據的支持有限。這個專案目前處於穩定版本，適合需要高效檔案同步的團隊使用。對於小型團隊或個人使用者，這個工具的安裝和使用都相對簡單，建議在需要快速同步大量檔案時使用，但對於需要完整元數據支持的情況，可能需要考慮其他工具。

**技術棧**：`Rust` · `Shell` · `PowerShell` · `Makefile`

## 重點功能

- 高吞吐量的檔案同步 — 透過並行傳輸提高傳輸速度，支持多達 16 個並行作業。
- 斷點續傳 — 支持在傳輸中斷後繼續傳輸，避免重複傳輸已完成的檔案。
- 可調整的塊大小 — 使用 `--chunk-size` 參數設定每個檔案的傳輸塊大小，默認為 16MB。
- Windows 支援 — 提供 Windows 環境下的最佳努力元數據支持，並可選擇嚴格模式以處理不支持的行為。
- 性能調整選項 — 使用 `--strict-durability` 和 `--verify-existing` 來提高數據一致性和準確性。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 從遠端同步檔案
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```
3. 使用自定義 SSH 端口
```bash
parsync -vrPlu user@example.com:2222:/remote/path /local/destination
```

## 程式碼範例

parsync -vrPlu --jobs 16 --chunk-size 16777216 user@host:/src /dst  # 將遠端資料夾同步到本地，使用 16 個並行作業，每個塊大小為 16MB。

## 為什麼值得關注

> [!tip] 爆紅原因
> AlpinDale 是一位活躍的開發者，過去參與了多個開源專案，這次推出的 parsync 針對 SSH 檔案同步的高效性和斷點續傳功能，解決了許多使用者在大檔案傳輸時的痛點。最近在 GitHub 上的討論和分享也讓這個專案獲得了更多的關注。隨著遠端工作和雲端存儲的普及，對於高效檔案同步的需求日益增加，使得這個工具在當前環境下變得更加實用。

## 適合誰使用

**目標受眾**：需要高效檔案同步和斷點續傳功能的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來從遠端伺服器同步備份檔案，因為它支持斷點續傳，能夠節省帶寬和時間。
> - 開發者用它來快速部署應用程式到伺服器，因為它的並行傳輸功能能夠顯著提高上傳速度。
> - 資料科學家用它來從雲端存儲同步大型數據集，因為它支持大檔案的分塊傳輸，避免了傳輸失敗的風險。

## 架構分析

parsync 採用單體架構，核心資料流為用戶輸入 → 檔案處理 → 輸出到本地。它使用 Rust 語言來實現高效的檔案傳輸，並支持多種平台。專案目錄結構中，主要的執行檔和安裝腳本位於根目錄，並包含 Makefile 以支持從源碼編譯。

## 技術深入分析

parsync 的核心技術在於其高效的並行檔案傳輸機制，使用 Rust 語言實現以獲得最佳性能。它支持多達 16 個並行作業，並可根據需求調整塊大小，這使得在大檔案傳輸時能夠顯著提高效率。該工具能夠處理大規模的檔案同步需求，並在傳輸過程中自動跳過已存在的檔案，這樣可以節省時間和帶寬。選擇 Rust 作為開發語言的好處在於其內存安全性和性能優勢，但這也可能使得學習曲線稍微陡峭。設計上，parsync 需要考慮到不同平台之間的元數據支持差異，這可能會在未來的版本中引入技術債。整體而言，parsync 是一個針對高效檔案同步需求而設計的工具，適合需要頻繁進行大檔案傳輸的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，無明顯坑。文件沒有多語言支持，但對於英語使用者來說，理解上沒有太大問題。

## 優缺點分析

> [!success] 優點
> - 高效的並行傳輸，能夠顯著提高傳輸速度。
> - 支持斷點續傳，避免重複傳輸已完成的檔案。
> - 跨平台支持，能夠在多種操作系統上運行。

> [!danger] 缺點
> - 對於某些元數據的支持有限，特別是在 Windows 環境中。
> - 需要管理員權限來創建 symlink，增加了使用的複雜性。
> - 某些功能在不同平台上的行為可能不一致，增加了使用的難度。

> [!warning] 注意事項
> - 對於某些 Windows 元數據的支持有限，可能會跳過 symlink。
> - 在 Windows 環境中需要管理員權限來創建 symlink。
> - 不支持某些 Linux 和 macOS 的元數據選項，如 -A 和 -X。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了類似的檔案同步功能，但主要針對隱私保護和安全性，適合需要加密的使用場景。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 主要用於 Telegram 的代理功能，並不專注於檔案同步，因此不適合用於大檔案的傳輸。 |

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

相關概念：[[自動化]] · [[檔案傳輸]] · [[SSH]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[zornade--visura-api|zornade/visura-api]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "AlpinDale--parsync"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，508 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
