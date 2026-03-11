---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 509
stars_per_day: 102
forks: 18
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "檔案同步"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供高效、可恢復的 SSH 檔案同步，支援並行傳輸。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:508,2026-03-11:509"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效、可恢復的 SSH 檔案同步，支援並行傳輸。"
---

# parsync

**509** stars · **102** stars/天 · 建立 5 天前 · Rust · MIT

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效、可恢復的 SSH 檔案同步，支援並行傳輸。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能檔案同步解決方案的系統管理員和開發者。
> **一句話重點** parsync 透過並行處理和恢復功能，為檔案同步提供了一個高效且靈活的解決方案。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效能的檔案同步效果，值得嘗試。

> [!abstract] 核心創新
> 提供高吞吐量的可恢復檔案同步，並支援並行傳輸。

## 專案簡介

parsync 是一個高效的檔案同步工具，透過 SSH 進行並行檔案傳輸，並支援恢復功能。使用者只需執行 `parsync -vrPlu user@example.com:/remote/path /local/destination`，即可將遠端檔案同步到本地。這個工具的設計重點在於高吞吐量，並且提供了可調整的參數來優化性能，例如 `--jobs` 和 `--chunk-size`，可根據需求調整並行作業數量和檔案塊大小。技術上，parsync 使用 Rust 語言開發，並依賴於多個庫來處理 SSH 連接、檔案傳輸和錯誤處理，這使得它在效能和穩定性上有良好的表現。與傳統的 rsync 相比，parsync 的並行處理能力顯著提高了傳輸速度，特別是在處理大量小檔案時。相較於其他工具如 `rsync` 和 `scp`，parsync 提供了更強的恢復能力和性能調整選項，適合需要高效能檔案同步的使用者。使用者在 Windows 環境下可能會遇到一些元數據處理的限制，這需要透過 `--strict-windows-metadata` 來強制檢查。這個工具目前仍在快速發展中，適合中小型團隊或個人專案使用，未來可能會加入更多平台的支援和功能擴展。

**技術棧**：`Rust 1.60` · `Cargo 1.60` · `Makefile`

## 重點功能

- 高吞吐量傳輸 — 支援並行檔案傳輸，顯著提高傳輸速度。
- 可恢復功能 — 在傳輸中斷後可繼續進行，避免重複傳輸。
- 性能調整選項 — 使用 `--jobs` 和 `--chunk-size` 參數來優化傳輸性能。
- SSH 支援 — 透過 SSH 進行安全的檔案傳輸。
- Windows 支援 — 提供最佳努力的 Windows 元數據處理，並支援 symlink。

## 快速開始

1. 安裝 parsync
```bash
curl -fsSL https://alpindale.net/install.sh | bash
```
2. 使用 parsync 同步檔案
```bash
parsync -vrPlu user@example.com:/remote/path /local/destination
```
3. 調整性能參數
```bash
parsync -vrPlu --jobs 16 --chunk-size 16777216 user@host:/src /dst
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 509 stars（102/天），forks 18（3.5%），顯示出不錯的增長潛力。作者 AlpinDale 似乎是個活躍的開發者，專注於高效能的檔案同步解決方案。這個工具解決了傳統 rsync 在高吞吐量和恢復能力上的不足，特別是在需要處理大量小檔案的情況下。近期的推廣活動和社群反饋可能也促進了這個專案的曝光率。這個工具的出現正好符合了對高效能檔案同步需求的增長，尤其是在遠端工作和雲端存儲日益普及的背景下。

## 適合誰使用

**目標受眾**：需要高效能檔案同步解決方案的系統管理員和開發者。

> [!example] 使用場景
> - 系統管理員用它來快速同步伺服器上的備份檔案，因為它的並行傳輸能力能顯著減少同步時間。
> - 開發者用它來在多個開發環境之間同步代碼，因為它支援恢復功能，能在傳輸中斷後繼續進行。
> - 資料科學家用它來從遠端伺服器拉取大型數據集，因為它的性能調整選項能有效處理大檔案的傳輸。

## 架構分析

parsync 採用 Rust 語言開發，利用其高效能和安全性來實現檔案同步功能。它的架構設計為並行處理，使用 Rayon 庫來管理多執行緒的檔案傳輸，這樣可以在處理大量檔案時提高吞吐量。資料流方面，parsync 透過 SSH 連接來進行檔案的拉取，並且支援可選的區塊增量同步，這樣可以減少不必要的資料傳輸。選擇 Rust 作為開發語言的好處在於其記憶體安全性和效能，但相對的也增加了學習曲線。這個工具的擴展性在於可以透過參數調整來適應不同的使用場景，但在 Windows 環境下的元數據處理可能會成為瓶頸。

## 技術深入分析

parsync 的核心技術機制是基於 Rust 語言的高效能設計，透過 Rayon 庫實現並行檔案傳輸。這種設計使得在處理大量小檔案時，能夠顯著提升傳輸速度。效能方面，parsync 可以根據使用者需求調整並行作業數量和檔案塊大小，這樣能夠在不同的網路環境下達到最佳的傳輸效果。選擇 Rust 作為開發語言的好處在於其記憶體安全性和執行效率，但這也意味著開發者需要具備一定的 Rust 知識。設計上，parsync 也考慮到 Windows 環境的特殊性，雖然支援有限，但仍提供最佳努力的元數據處理。技術風險方面，對於某些特定的檔案屬性，可能會在未來的版本中進行改進。整合方面，parsync 可以輕鬆融入現有的 CI/CD 流程，並且支援與其他工具的搭配使用，這使得它在現代開發環境中具有良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，對於新手友好。安裝過程相對順暢，使用者只需執行簡單的指令即可完成安裝。文件中有針對 Windows 環境的注意事項，對於可能的問題提供了解決方案，整體上適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高效能：透過並行傳輸顯著提高檔案同步速度。
> - 可恢復性：在傳輸中斷後可繼續，避免重複傳輸。
> - 靈活的性能調整：使用者可以根據需求調整參數以獲得最佳性能。

> [!danger] 缺點
> - Windows 環境下的元數據支援有限，可能導致某些功能無法使用。
> - 對於大型檔案的處理可能需要額外的性能調整。
> - 相較於傳統 rsync，學習曲線可能較高。

> [!warning] 注意事項
> - Windows 環境下對某些元數據的支援有限。
> - 不支援某些 Linux 和 macOS 的檔案屬性。
> - 在高負載情況下可能需要調整參數以獲得最佳性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的檔案同步功能，但主要針對特定的雲端環境，對於多平台支援較弱。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然也涉及檔案傳輸，但主要用於即時通訊的代理，不專注於檔案同步的性能優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| rsync | rsync 使用單一線程進行檔案傳輸，這使得在處理大量小檔案時效率較低。 | 如果你的環境已經廣泛使用 rsync，且不需要高吞吐量的需求。 | low，因為 rsync 是一個廣泛使用的工具，轉換成本低。 |
| scp | scp 主要用於安全檔案傳輸，但不支援恢復和並行傳輸。 | 如果你的需求只是簡單的檔案傳輸，且不需要高效能。 | medium，因為需要調整使用習慣和指令。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **parsync** | **rsync** | **scp** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | rsync 使用單一線程進行檔案傳輸，這使得在處理大量小檔案時效率較低。 | scp 主要用於安全檔案傳輸，但不支援恢復和並行傳輸。 |
> | 遷移成本 | - | low，因為 rsync 是一個廣泛使用的工具，轉換成本低。 | medium，因為需要調整使用習慣和指令。 |
> | 適用場景 | 主要場景 | 如果你的環境已經廣泛使用 rsync，且不需要高吞吐量的需求 | 如果你的需求只是簡單的檔案傳輸，且不需要高效能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在非關鍵環境中試用，尚需進一步穩定性測試。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，symlink 可能因權限不足而失敗
  - 解法：確保使用者具有管理員權限或啟用開發者模式
- [MEDIUM] 在高負載情況下，可能需要調整性能參數以避免傳輸延遲
  - 解法：根據實際情況調整 `--jobs` 和 `--chunk-size` 參數
- [MEDIUM] 某些 Linux 和 macOS 的檔案屬性不支援
  - 解法：在使用前檢查支援的檔案屬性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以上的開發團隊需要快速同步代碼 | 非常適合 | 並行傳輸能顯著提高同步速度，適合多檔案的情況。 |
| 小型專案的個人開發者 | 適合 | 雖然功能強大，但學習曲線可能較高，適合有一定基礎的使用者。 |
| 需要在 Windows 環境下進行檔案同步的使用者 | 普通 | 支援有限，可能會遇到元數據處理的問題。 |
| 大型企業的檔案同步需求 | 不適合 | 目前仍在 beta 階段，穩定性尚需提高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效能的檔案同步效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：parsync 本身不需要高權限，且不存取敏感資料，但在 Windows 環境下可能需要管理員權限來創建 symlink。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 18 |
| Open Issues | 3 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 7.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlpinDale/parsync) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `repository` `homepage` `documentation` `anyhow` `base64` `clap` `ctrlc` `filetime` `glob` `indicatif`

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

**社群活躍度**：社群活動頻繁，最近有多次提交和更新。
**連結**：[文件](https://docs.rs/parsync)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-06）
> **活躍天數** 2 天 · **最新 commit** feat: receiver-side destination validator (#5)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/AlpinDale/parsync/issues/7) | Support Windows with Drive Letter? | 0 | 0 |

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[檔案傳輸]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[axboe--rsync|axboe/rsync]] · [[github--rsync|github/rsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/AlpinDale/parsync)

## 相關收錄

> [!note]- 直接競品（同子分類：檔案同步）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "檔案同步" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "AlpinDale--parsync" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","檔案傳輸"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlpinDale--parsync" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "AlpinDale" AND file.name != "AlpinDale--parsync"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，508 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，505 stars
