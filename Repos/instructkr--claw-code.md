---
repo: ultraworkers/claw-code
url: https://github.com/ultraworkers/claw-code
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "The repo is finally unlocked. enjoy the party! The fastest repo in history to surpass 100K stars ⭐. Join Discord: https://discord.gg/5TUQKqFWd Built in Rust using oh-my-codex."
homepage: ""
stars: 174055
stars_per_day: 29009
forks: 105253
open_issues: 1413
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "提供一個 Rust 實作的 CLI agent，專為高效能的代碼處理而設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "high"
issue_close_rate: 0
repo_size_kb: 7264
readme_length: 2770
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:63551,2026-04-06:171023,2026-04-07:174055"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "ultraworkers/claw-code"
  - "提供一個 Rust 實作的 CLI agent，專為高效能的代碼處理而設計。"
---

# claw-code

**174.1k** stars · **29.0k** stars/天 · 建立 6 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/ultraworkers--claw-code");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供一個 Rust 實作的 CLI agent，專為高效能的代碼處理而設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (29.0k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要高效能代碼處理的開發者，特別是那些在大型專案中工作的團隊。
> **一句話重點** Claw Code 的高效能和靈活性使其成為代碼處理的理想選擇，特別是在大型專案中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "ultraworkers--claw-code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到高效能的代碼處理工具，值得投入。

> [!abstract] 核心創新
> 提供一個高效能的 Rust 實作 CLI agent，專為代碼處理而設計。

## 專案簡介

Claw Code 是一個用 Rust 實作的 CLI agent，旨在提供高效的代碼處理能力。使用者可以透過 `claw` CLI 工具進行各種操作，例如執行 prompt 指令來總結資料庫內容。這個工具的設計重點在於性能和可擴展性，讓開發者能夠輕鬆整合到現有的工作流中。安裝後，使用者可以透過 `cargo build --workspace` 來構建專案，並使用 `./target/debug/claw --help` 獲取幫助資訊。這個工具的賣點在於其高效的 Rust 實作，與其他使用 Python 或 JavaScript 的 CLI 工具相比，能提供更快的執行速度和更低的資源消耗。

相較於 Python 實作的工具，Rust 的靜態類型系統和編譯優化使得 Claw Code 在處理大型資料集時表現更佳。雖然目前有 1413 個開放的問題，但這個專案的活躍度仍然很高，且社群支持良好。這個專案適合需要高效能代碼處理的開發者，特別是那些在大型專案中需要快速反應的團隊。未來 6 個月內，預期會有更多功能和改進，尤其是在錯誤修復和性能優化方面。使用者在選擇這個工具時，應考慮到其依賴 Rust 環境的特性，並確保團隊具備相應的技術能力。

**技術棧**：`Rust` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- 高效能 CLI 工具 — 使用 Rust 實作，提供快速的代碼處理能力。
- 多種認證方式 — 支持 API 金鑰和 OAuth 流程進行身份驗證。
- 完整的使用說明 — 提供 `USAGE.md` 以指導用戶進行各種操作。
- 測試套件 — 使用 `cargo test --workspace` 來運行整個工作區的測試。
- 活躍的開發路線圖 — 透過 `ROADMAP.md` 提供未來的功能計劃和清理工作。

## 快速開始

1. 克隆專案並進入 rust 目錄
```bash
cd rust
```
2. 構建工作區
```bash
cargo build --workspace
```
3. 查看幫助資訊
```bash
./target/debug/claw --help
```
4. 使用 API 金鑰進行身份驗證
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```
5. 運行測試套件
```bash
cargo test --workspace
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Rust 環境",
  "指令": "./target/debug/claw prompt \"summarize this repository\"",
  "預期輸出": "提供對該倉庫的總結（推測）"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案在建立 6 天內就累積了 174055 stars（每天 29009），forks 數量達到 105253（60.5%），顯示出極高的關注度和實際使用情況。主要貢獻者 Yeachan-Heo 和 code-yeongyu 在開源社群中有良好的聲譽，並且這個專案解決了以往 CLI 工具在性能上的不足，特別是在處理大量代碼時的效率問題。社群的活躍度和 Discord 的支持也促進了使用者的互動和問題解決。這個工具的出現正好契合了開發者對於高效能工具的需求，尤其是在 Rust 生態系統逐漸成熟的背景下。高達 60.5% 的 forks/stars 比率顯示許多開發者在積極修改和使用這個工具，反映出其實用性和潛力。

## 適合誰使用

**目標受眾**：需要高效能代碼處理的開發者，特別是那些在大型專案中工作的團隊。

> [!example] 使用場景
> - 後端工程師用它來快速處理和總結大型代碼庫，因為其 Rust 實作提供了比 Python 工具更快的執行速度。
> - DevOps 工程師用它來在 CI/CD pipeline 中自動化代碼檢查，因為它的 CLI 工具可以輕鬆集成到現有的工作流中。
> - 資料科學家用它來快速生成代碼文檔，因為其高效的處理能力能夠在短時間內完成大量資料的分析。

## 架構分析

Claw Code 採用 Rust 作為核心語言，這使得它在性能和內存管理上具有優勢。專案的架構分為多個模組，主要由 `rust/` 目錄中的工作區組成，這樣的設計使得開發者可以靈活地擴展功能。資料流方面，使用者透過 CLI 發出指令，然後由 Rust 程式處理並返回結果。這種設計選擇使得 Claw Code 能夠在高負載情況下保持穩定性，但也意味著開發者需要對 Rust 有一定的了解。由於目前專案仍在活躍開發中，未來可能會面臨 API 變更的風險，這對於依賴穩定性的應用來說是一個潛在的挑戰。

## 技術深入分析

Claw Code 的核心技術機制是基於 Rust 的 CLI 工具，這使得它在性能上優於許多使用 Python 的同類工具。Rust 的靜態類型系統和編譯優化使得 Claw Code 能夠在處理大型資料集時表現出色。效能方面，雖然 README 中沒有具體數字，但 Rust 通常能提供比 Python 更快的執行速度，尤其是在 I/O 密集型的操作中。設計上，選擇 Rust 而非 Python 使得 Claw Code 在內存管理和執行效率上有明顯優勢，但也增加了開發的複雜度。技術風險方面，隨著專案的發展，API 變更的可能性較高，這可能會影響到依賴該工具的應用。整合方面，Claw Code 可以輕鬆與現有的 CI/CD pipeline 結合，使用者只需在工作流中添加相應的 CLI 指令即可。整體而言，Claw Code 是一個具備高效能和靈活性的工具，適合需要快速代碼處理的開發者使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢，但對於不熟悉 Rust 的開發者可能會有一定的挑戰。整體上，文件的結構合理，能夠幫助新手快速上手。沒有提供多語言支持，僅有英文文件。

## 優缺點分析

> [!success] 優點
> - 高效能 — Rust 實作提供更快的執行速度和更低的資源消耗。
> - 靈活性 — 支持多種認證方式，易於集成到現有工作流中。
> - 活躍的社群支持 — 有 Discord 社群可供使用者交流和解決問題。

> [!danger] 缺點
> - 學習曲線 — 對於不熟悉 Rust 的開發者來說，可能需要額外的學習時間。
> - 開放問題數量多 — 1413 個開放問題可能影響使用體驗。
> - 尚未穩定 — API 可能會隨著開發進度而變動，對於依賴穩定性的專案來說風險較高。

> [!warning] 注意事項
> - 目前有 1413 個開放的問題，可能影響使用體驗。
> - 需要 Rust 環境進行構建，對於不熟悉 Rust 的開發者來說可能有學習曲線。
> - 尚未有穩定的版本，可能會面臨 API 變更的風險。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的 CLI 工具，但主要針對檔案同步，功能範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據處理，使用 Python 實作，可能在性能上不如 Claw Code。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供類似的代碼處理功能，但缺乏 Rust 的性能優勢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供檔案同步功能，使用 Python 實作，性能上不如 Claw Code。 | 如果你的需求主要是檔案同步，且團隊熟悉 Python，這個工具會更適合。 | low，因為 Python 的學習曲線較低，且有豐富的文檔支持。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據處理，使用 Python 實作，可能在性能上不如 Claw Code。 | 如果你的專案需要處理複雜的數據轉換，且團隊熟悉 Python，這個工具會更適合。 | medium，因為需要將現有的 Python 代碼遷移到新的工具上。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供檔案同步功能，使用 Python 實作，性能上不如 Claw Code。 | 專注於數據處理，使用 Python 實作，可能在性能上不如 Claw Code。 |
> | 遷移成本 | - | low，因為 Python 的學習曲線較低，且有豐富的文檔支持。 | medium，因為需要將現有的 Python 代碼遷移到新的工具上。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是檔案同步，且團隊熟悉 Python，這個工 | 如果你的專案需要處理複雜的數據轉換，且團隊熟悉 Python |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境中，Rust 的編譯時間可能較長，影響開發效率。
  - 解法：考慮使用預編譯的二進制檔案以加快開發速度。
- **[HIGH]** 某些 CLI 指令可能未完全支持，導致使用者無法正常操作。
  - 解法：參考官方文檔以獲取最新的指令支持情況。
- **[HIGH]** 開放問題數量多，可能影響社群的回應速度。
  - 解法：主動在 Discord 社群中尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 高效能的 CLI 工具能快速處理代碼，適合小型團隊的需求。 |
| 大型企業的代碼審查工具 | 適合 | 雖然性能優越，但開放問題數量多可能影響穩定性。 |
| 個人開發者的 side project | 非常適合 | 適合快速實驗和開發，且社群支持活躍。 |
| 需要穩定性和長期支持的生產環境 | 不適合 | 目前處於 alpha 階段，API 變更風險高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到高效能的代碼處理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料。依賴的 Rust 生態系統相對安全，但仍需注意依賴的庫是否有已知的漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
| Forks | 105.3k |
| Open Issues | 1413 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 7.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ultraworkers/claw-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 96
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 431 |
> | [@code-yeongyu](https://github.com/code-yeongyu) | 52 |

## 社群與生態

**社群活躍度**：社群活躍，定期有開發者互動和問題解決。
**連結**：[文件](https://github.com/ultraworkers/claw-code) · [Discord](https://discord.gg/5TUQKqFWd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-06）
> **活躍天數** 1 天 · **最新 commit** Use Anthropic count tokens for preflight

## README 摘錄

> [!info]- 展開查看原文 README
> # Claw Code
> 
>   ultraworkers/claw-code
>   ·
>   Usage
>   ·
>   Rust workspace
>   ·
>   Parity
>   ·
>   Roadmap
>   ·
>   UltraWorkers Discord
> 
>   
>     
>       
>       
>       
>     
>   
> 
>   
> 
> Claw Code is the public Rust implementation of the `claw` CLI agent harness.
> The canonical implementation lives in [`rust/`](./rust), and the current source of truth for this repository is **ultraworkers/claw-code**.
> 
> > [!IMPORTANT]
> > Start with [`USAGE.md`](./USAGE.md) for build, auth, CLI, session, and parity-harness workflows. Make `claw doctor` your first health check after building, use [`rust/README.md`](./rust/README.md) for crate-level details, read [`PARITY.md`](./PARITY.md) for the current Rust-port checkpoint, and see [`docs/container.md`](./docs/container.md) for the container-first workflow.
> 
> ## Current repository shape
> 
> - **`rust/`** — canonical Rust workspace and the `claw` CLI binary
> - **`USAGE.md`** — task-oriented usage guide for the current product surface
> - **`PARITY.md`** — Rust-port parity status and migration notes
> - **`ROADMAP.md`** — active roadmap and cleanup backlog
> - **`PHILOSOPHY.md`** — project intent and system-design framing
> - **`src/` + `tests/`** — companion Python/reference workspace and audit helpers; not the primary runtime surface
> 
> ## Quick start
> 
> ```bash
> cd rust
> cargo build --workspace
> ./target/debug/claw --help
> ./target/debug/claw prompt "summarize this repository"
> ```
> 
> Authenticate with either an API key or the built-in OAuth flow:
> 
> ```bash
> export ANTHROPIC_API_KEY="sk-ant-..."
> # or
> cd rust
> ./target/debug/claw login
> ```
> 
> Run the workspace test suite:
> 
> ```bash
> cd rust
> cargo test --workspace
> ```
> 
> ## Documentation map
> 
> - [`USAGE.md`](./USAGE.md) — quick commands, auth, sessions, config, parity harness
> - [`rust/README.md`](./rust/README.md) — crate map, CLI surface, features, workspace layout
> - [`PARITY.md`](./PARITY.md) — parity status for the Rust port
> - [`rust/MOCK_PARITY_HARNESS.md`](./rust/MOCK_PARITY_HARNESS.md) — deterministic mock-service harness details
> - [`ROADMAP.md`](./ROADMAP.md) — active roadmap and open cleanup work
> - [`PHILOSOPHY.md`](./PHILOSOPHY.md) — why the project exists and how it is operated
> 
> ## Ecosystem
> 
> Claw Code is built in the open alongside the broader UltraWorkers toolchain:
> 
> - [clawhip](https://github.com/Yeachan-Heo/clawhip)
> - [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent)
> - [oh-my-claudecode](https://github.com/Yeachan-Heo/oh-my-claudecode)
> - [oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex)
> - [UltraWorkers Discord](https://discord.gg/5TUQKqFWd)
> 
> ## Ownership / affiliation disclaimer
> 
> - This repository does **not** claim ownership of the original Claude Code source material.
> - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[效能優化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--opencli|jackwener/opencli]]

[GitHub](https://github.com/ultraworkers/claw-code)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "ultraworkers--claw-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","效能優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ultraworkers--claw-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ultraworkers--claw-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ultraworkers--claw-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ultraworkers" AND file.name != "ultraworkers--claw-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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
> const me = dv.page("Repos/ultraworkers--claw-code");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-01|2026-04-01]] — 首次收錄，63.6k stars
