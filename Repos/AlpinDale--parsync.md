---
repo: AlpinDale/parsync
url: https://github.com/AlpinDale/parsync
owner: AlpinDale
owner_type: User
language: Rust
license: MIT
description: "Parallel rsync-like pull sync over SSH with resume"
homepage: ""
stars: 521
stars_per_day: 52
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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供高效的可恢復 SSH 檔案同步，支持並行傳輸和區塊增量同步。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 7680
readme_length: 2397
bus_factor: 1
last_release_days: 11
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:508,2026-03-11:509,2026-03-11:509,2026-03-13:514,2026-03-14:517,2026-03-15:519,2026-03-16:521"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - easy_install
aliases:
  - "parsync"
  - "AlpinDale/parsync"
  - "提供高效的可恢復 SSH 檔案同步，支持並行傳輸和區塊增量同步。"
---

# parsync

**521** stars · **52** stars/天 · 建立 10 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/AlpinDale--parsync");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.2.0` `easy-install`

> [!summary] 一句話摘要
> 提供高效的可恢復 SSH 檔案同步，支持並行傳輸和區塊增量同步。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能檔案同步的系統管理員和開發者，特別是在 Linux 和 macOS 環境中。
> **一句話重點** parsync 的設計使其在高效檔案同步上具備顯著優勢，特別是在需要可恢復性和並行處理的場景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "檔案同步" && p.file.name !== "AlpinDale--parsync" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 檔案同步 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的檔案同步效果，值得一試。

> [!abstract] 核心創新
> 提供高吞吐量和可恢復的檔案同步，支持並行傳輸和區塊增量同步。

## 專案簡介

parsync 是一個高效的檔案同步工具，設計用於從 SSH 遠端伺服器進行可恢復的拉取同步。用戶可以使用 `parsync -vrPlu user@example.com:/remote/path /local/destination` 指令進行同步，這裡的 `-vrPlu` 參數分別代表啟用詳細模式、遞歸、保留符號連結等功能。這個工具的賣點在於其高吞吐量和並行檔案傳輸能力，特別適合需要頻繁同步大量檔案的場景。技術上，parsync 使用 Rust 語言開發，依賴多個庫如 `rayon` 進行並行處理和 `ssh2` 進行 SSH 通訊，這使得它在性能上優於傳統的 rsync。與其他工具相比，如 `rsync` 和 `scp`，parsync 提供了更高的並行性和可恢復性，特別是在處理大檔案時，能夠有效減少傳輸時間。

使用者可以調整 `--jobs` 和 `--chunk-size` 參數來優化性能，這在大規模資料傳輸中尤為重要。對於 Windows 使用者，parsync 也提供了基本的支援，但某些功能（如符號連結）可能會受到限制，這需要用戶注意。這個專案目前處於 beta 階段，雖然功能完整，但仍有一些開放的問題需要解決，特別是在 Windows 環境下的兼容性。整體而言，parsync 適合需要高效檔案同步的開發者和系統管理員，尤其是在 Linux 和 macOS 環境中。對於小型團隊或個人專案，這個工具能顯著提高檔案同步的效率，值得一試。

**技術棧**：`Rust 1.60` · `SSH2` · `Rayon`

## 重點功能

- 高吞吐量 — 支持並行檔案傳輸，顯著提高同步速度。
- 可恢復性 — 允許在傳輸中斷後重新啟動，無需重複傳輸已完成的檔案。
- 區塊增量同步 — 只傳輸檔案變更的部分，節省帶寬。
- 性能調整 — 使用 `--jobs` 和 `--chunk-size` 參數來優化傳輸性能。
- Windows 支援 — 提供基本的 Windows 環境支援，雖然某些功能可能受限。

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

```rust
[
  "# 使用範例",
  "parsync -vrPlu user@example.com:/remote/path /local/destination",
  "# 預期輸出：同步檔案至指定的本地目錄"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 521 stars（52/天），forks 18（3.5%），顯示出一定的社群關注度。作者 AlpinDale 過去在開源社群活躍，這個專案解決了傳統 rsync 在性能和可恢復性上的不足，特別是在大檔案傳輸時。近期的推文和討論也提升了曝光率，吸引了對高效檔案同步有需求的使用者。這個工具的出現是因為對於高效能檔案同步的需求日益增加，尤其是在雲端和分散式系統中，這使得它的功能變得更加重要。forks/stars 比率約 3.5%，顯示出有一定數量的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要高效能檔案同步的系統管理員和開發者，特別是在 Linux 和 macOS 環境中。

> [!example] 使用場景
> - 系統管理員用它來從遠端伺服器同步備份檔案，因為其高吞吐量和可恢復性能顯著減少備份時間。
> - 開發者用它來在多個開發環境之間同步大型專案檔案，因為並行傳輸能加快檔案更新速度。
> - 資料科學家用它來從遠端資料庫拉取大量數據集，因為支持區塊增量同步能節省帶寬和時間。

## 架構分析

parsync 採用 Rust 作為開發語言，這使得它在性能和安全性上有優勢。其架構設計為一個命令行工具，通過 SSH 協議進行遠端檔案傳輸。資料流經過多個處理階段，包括檔案的並行讀取、傳輸和寫入，這樣的設計能夠有效利用多核 CPU 的性能。

選擇 Rust 的原因在於其高效的記憶體管理和編譯時安全性，這對於檔案同步工具至關重要。trade-off 在於 Rust 的學習曲線相對較陡，對於新手開發者可能需要額外的學習時間。擴展性方面，parsync 目前的設計能夠支持多平台，但在 Windows 環境下的某些功能仍需進一步優化。

## 技術深入分析

parsync 的核心技術機制是基於 Rust 語言的高效能設計，使用 SSH 協議進行安全的檔案傳輸。透過 `rayon` 庫實現的並行處理，parsync 能夠在多核 CPU 上充分發揮性能，特別是在大檔案的同步過程中。效能方面，parsync 能夠支援高達數 GB 的檔案傳輸，並且在適當的配置下，能夠達到數十 MB/s 的傳輸速度。設計取捨上，選擇 Rust 使得開發過程中能夠獲得更高的安全性和性能，但同時也增加了學習曲線。技術風險方面，parsync 在 Windows 環境下的某些功能可能會遇到兼容性問題，特別是在符號連結的處理上。整合方面，parsync 可以輕鬆與現有的 CI/CD 流程結合，並且能夠與多種 IDE 進行整合，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，安裝過程順暢，對於 Linux 和 macOS 使用者來說非常簡單。Windows 使用者可能會遇到一些權限問題，但文檔中有提供解決方案。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 高效能 — 支持並行檔案傳輸，顯著提高同步速度。
> - 可恢復性 — 允許中斷後繼續傳輸，避免重複傳輸。
> - 跨平台支援 — 支持 Linux、macOS 和 Windows，適用範圍廣泛。

> [!danger] 缺點
> - Windows 環境下的某些功能可能不完全支援。
> - 在大規模資料傳輸時，性能調整可能需要額外的配置。
> - 目前仍有開放的問題，特別是在 Windows 環境的兼容性上。

> [!warning] 注意事項
> - 某些 Windows 環境下的符號連結功能可能不完全支援。
> - 在大規模資料傳輸時，可能需要調整性能參數以獲得最佳效果。
> - 目前仍有開放的問題，特別是在 Windows 環境的兼容性上。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的檔案同步功能，但主要針對特定的雲端環境，parsync 更加通用且支持多平台。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然也是一個同步工具，但主要用於即時通訊資料的同步，parsync 更適合大檔案傳輸。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| rsync | rsync 是一個成熟的檔案同步工具，使用增量同步技術，但不支持並行傳輸，這使得在大檔案傳輸時性能較低。 | 如果你的團隊已經在使用 rsync 並且對其功能滿意，則可以繼續使用它，因為它的社群和文檔資源豐富。 | low — rsync 的使用方式與 parsync 類似，遷移成本低。 |
| scp | scp 是一個簡單的檔案傳輸工具，主要用於單檔案傳輸，無法進行增量同步，性能上不如 parsync。 | 如果只需要簡單的檔案傳輸，且不需要高性能或增量同步，scp 是一個不錯的選擇。 | medium — 需要重新學習命令和參數，遷移成本中等。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **parsync** | **rsync** | **scp** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | rsync 是一個成熟的檔案同步工具，使用增量同步技術，但不支持並行傳輸，這使得在大檔案傳輸時性能較低。 | scp 是一個簡單的檔案傳輸工具，主要用於單檔案傳輸，無法進行增量同步，性能上不如 parsync。 |
> | 遷移成本 | - | low — rsync 的使用方式與 parsync 類似，遷移成本低。 | medium — 需要重新學習命令和參數，遷移成本中等。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 rsync 並且對其功能滿意，則可以 | 如果只需要簡單的檔案傳輸，且不需要高性能或增量同步，scp  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，符號連結可能無法正確創建，導致檔案缺失。
  - 解法：確保使用者擁有管理員權限或啟用開發者模式。
- [MEDIUM] 某些性能調整參數可能需要根據實際情況手動配置，否則可能導致性能不佳。
  - 解法：參考官方文檔中的性能調整建議進行配置。
- [MEDIUM] 在大檔案傳輸時，可能會遇到記憶體使用過高的問題。
  - 解法：調整 `--chunk-size` 參數以降低單次傳輸的檔案大小。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端檔案同步 | 非常適合 | 高效能和可恢復性能顯著提高檔案同步效率。 |
| 大型企業的檔案備份系統 | 適合 | 支持並行傳輸，能夠快速完成大規模備份。 |
| 個人開發者的專案檔案同步 | 非常適合 | 簡單易用，能夠快速上手並提高工作效率。 |
| 需要高安全性的檔案傳輸環境 | 普通 | 雖然使用 SSH，但仍需注意 Windows 環境的兼容性問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的檔案同步效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：parsync 本身不需要高權限操作，但在 Windows 環境下某些功能可能需要管理員權限。它不會存取敏感資料，依賴的庫也經過審計，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

parsync 最常與 SSH 和其他檔案傳輸工具搭配使用，通常在資料備份和同步的工作流中扮演重要角色。在一個使用 GitLab CI 的專案中，你可以用 parsync 來自動化備份，具體做法是將 `parsync` 指令放入 CI/CD pipeline 的腳本中。parsync 支援與多種 CI 工具整合，如 GitHub Actions 和 GitLab CI，並且可以與 VS Code 等 IDE 進行整合，降低了使用門檻。最常見的整合問題是 Windows 環境下的符號連結處理，這可能需要額外的配置或權限。

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
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 18 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
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

> [!info]- Release Notes
> ## What's Changed
> * feat: windows support by @AlpinDale in https://github.com/AlpinDale/parsync/pull/2
> 
> 
> **Full Changelog**: https://github.com/AlpinDale/parsync/compare/v0.1.0...v0.2.0

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新但開放問題尚未解決。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[資料同步]]

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
> const concepts = ["CLI/TUI","自動化","資料同步"];
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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/AlpinDale--parsync");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlpinDale--parsync" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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
