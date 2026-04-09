---
repo: ultraworkers/claw-code
url: https://github.com/ultraworkers/claw-code
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "The repo is finally unlocked. enjoy the party! The fastest repo in history to surpass 100K stars ⭐. Join Discord: https://discord.gg/5TUQKqFWd Built in Rust using oh-my-codex."
homepage: ""
stars: 178422
stars_per_day: 22303
forks: 105990
open_issues: 1413
created: 2026-03-31
pushed_at: 2026-04-09
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
use_case: "提供一個快速的 Rust 實作 CLI 工具，讓開發者能夠輕鬆使用和擴展。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "high"
issue_close_rate: 0
repo_size_kb: 8148
readme_length: 2968
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:63551,2026-04-06:171023,2026-04-07:174055,2026-04-08:176541,2026-04-09:178422"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "ultraworkers/claw-code"
  - "提供一個快速的 Rust 實作 CLI 工具，讓開發者能夠輕鬆使用和擴展。"
---

# claw-code

**178.4k** stars · **22.3k** stars/天 · 建立 8 天前 · Rust · 未標註授權

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
> 提供一個快速的 Rust 實作 CLI 工具，讓開發者能夠輕鬆使用和擴展。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Viral (22.3k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要快速開發和測試 CLI 工具的開發者，特別是使用 Rust 的開發者。
> **一句話重點** Claw Code 的設計不僅注重性能，還強調開發者的使用體驗，這使得它在 CLI 工具中脫穎而出。

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
> **結論** 花 10 小時學、5 小時整合，得到高效能的 CLI 工具，值得投資。

> [!abstract] 核心創新
> 提供了一個高效能的 Rust 實作 CLI 工具，專為開發者設計。

## 專案簡介

Claw Code 是一個用 Rust 實作的 CLI 工具，專為開發者設計，提供了簡單的命令行介面來進行各種操作。用戶可以透過 `cargo build --workspace` 建構專案，並使用 `./target/debug/claw --help` 獲取幫助資訊。這個專案的賣點在於其高效能和靈活性，特別適合需要快速開發和測試的場景。它的架構包含了 Rust 工作區和 Python 參考工作區，並且支援 API 金鑰或 OAuth 認證，這讓用戶可以輕鬆地進行身份驗證。這個專案的技術選型上，Rust 提供了高效能和安全性，而 Python 則用於參考和測試，這樣的組合使得開發過程更加流暢。

與其他 CLI 工具相比，如 `oh-my-codex`，Claw Code 的優勢在於其更高的擴展性和更簡單的使用流程，特別是在需要進行多個任務時。使用者可以通過 `cargo test --workspace` 來運行測試套件，確保工具的穩定性。這個專案目前仍在快速發展中，社群活躍度高，開發者可以期待未來的功能增強和改進。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，尤其是當需要快速實現原型或進行測試時。適合用於開發環境，但在生產環境中使用時需謹慎，因為目前的開發進度仍在進行中。

**技術棧**：`Rust` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- Rust 實作 — 提供高效能和安全性，適合需要快速響應的應用。
- 簡單的 CLI 命令 — 透過 `./target/debug/claw --help` 獲取幫助，易於上手。
- 支援 API 認證 — 可使用 API 金鑰或 OAuth 流程進行身份驗證。
- 完整的測試套件 — 使用 `cargo test --workspace` 確保工具的穩定性。
- 活躍的社群 — 加入 Discord 社群獲得即時支援和交流。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ultraworkers/claw-code
```
2. 進入 Rust 目錄
```bash
cd claw-code/rust
```
3. 建構專案
```bash
cargo build --workspace
```
4. 執行幫助命令
```bash
./target/debug/claw --help
```
5. 進行身份驗證
```bash
export ANTHROPIC_API_KEY="sk-ant-..."
```

## 程式碼範例

```rust
{
  "前置條件": "已經克隆專案並進入 rust 目錄",
  "指令": "./target/debug/claw prompt \"summarize this repository\"",
  "預期輸出": "將提供該專案的摘要。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 178422 stars（22303/天），forks 105990（59.4%），這顯示出極高的社群興趣。主要貢獻者 Yeachan-Heo 和 code-yeongyu 之前在開源社群中有良好的聲譽，這使得該專案一開始就受到關注。此專案解決了開發者在使用 CLI 工具時的複雜性問題，提供了簡單易用的介面和高效能的後端。社群的活躍度和快速增長的 stars 數量，顯示出開發者對於這個工具的需求和期待。這個專案的成功也反映了 Rust 語言在高效能應用中的潛力，並且在開發者社群中引發了廣泛的討論。

## 適合誰使用

**目標受眾**：需要快速開發和測試 CLI 工具的開發者，特別是使用 Rust 的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速構建和測試 CLI 工具，因為它提供了簡單的命令和高效能的執行環境。
> - 獨立開發者用它來進行原型開發，因為其 Rust 實作能夠快速響應並減少開發時間。
> - DevOps 工程師用它來整合到 CI/CD 流程中，因為它的測試套件可以確保代碼的穩定性和可靠性。

## 架構分析

Claw Code 採用 Rust 作為主要開發語言，這使得其在性能和安全性上具有優勢。整體架構分為 Rust 工作區和 Python 參考工作區，Rust 部分負責主要的 CLI 功能，而 Python 則用於測試和參考。這樣的設計使得開發者可以在高效能的環境中進行開發，同時保持測試的靈活性。

選擇 Rust 而非其他語言如 Python，能夠獲得更好的性能，但也增加了學習曲線。擴展性方面，Rust 的生態系統支持多種庫和工具，使得未來的功能擴展變得可行。整體而言，這個架構設計在性能和靈活性上取得了良好的平衡。

## 技術深入分析

Claw Code 的核心技術機制是基於 Rust 的 CLI 工具，利用 Rust 的高效能和安全性來實現快速的命令行操作。該專案的資料流設計上，Rust 工作區負責主要的 CLI 功能，而 Python 參考工作區則用於測試和輔助功能。這樣的設計使得開發者可以在高效能的環境中進行開發，同時保持測試的靈活性。效能方面，Rust 的編譯特性使得執行速度相較於解釋型語言快了數倍，並且在記憶體管理上也提供了更好的控制。選擇 Rust 而非其他語言如 Python，能夠獲得更好的性能，但也增加了學習曲線。技術風險方面，隨著專案的快速增長，開放的 Issues 數量也在增加，這可能影響未來的穩定性。整合方面，Claw Code 可以輕鬆地與現有的 CI/CD 流程整合，並且支援多種開發環境，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，對於新手來說非常友好。安裝過程需要從源碼建構，對於不熟悉 Rust 的使用者來說可能會有些挑戰。整體來說，文件清晰且有助於快速上手，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 高效能 — Rust 提供了優越的性能，適合需要快速響應的應用。
> - 靈活性 — 支援多種認證方式，適合不同的使用場景。
> - 活躍的社群 — 社群支持和即時交流有助於快速解決問題。

> [!danger] 缺點
> - 學習曲線 — Rust 相對於其他語言可能需要更多的學習時間。
> - 開放的 Issues 數量多，可能影響穩定性。
> - 功能仍在開發中，可能不適合生產環境。

> [!warning] 注意事項
> - 目前不支援 `cargo install clawcode`，必須從源碼建構。
> - 開放的 Issues 數量較多，解決率為 0%。
> - 仍在開發中，功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Yeachan-Heo/oh-my-codex](https://github.com/Yeachan-Heo/oh-my-codex) | 提供了類似的 CLI 工具，但 Claw Code 更專注於 Rust 實作，性能更佳。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 主要針對 AI 應用，而 Claw Code 更通用，適合各種 CLI 工具開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 使用 Python 實作，適合快速開發，但性能不如 Rust。 | 如果你的團隊已經熟悉 Python 並需要快速原型開發，選擇 Boneyard 會更合適。 | low — 由於語言相似，遷移成本較低。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 使用 Go 語言實作，提供了良好的並發性，但在 CLI 工具的靈活性上不如 Claw Code。 | 如果需要高並發處理，Parsync 會是更好的選擇，但在 CLI 使用上可能不如 Claw Code 方便。 | medium — 需要適應 Go 的語法和生態。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 使用 Python 實作，適合快速開發，但性能不如 Rust。 | Parsync 使用 Go 語言實作，提供了良好的並發性，但在 CLI 工具的靈活性上不如 Claw Code。 |
> | 遷移成本 | - | low — 由於語言相似，遷移成本較低。 | medium — 需要適應 Go 的語法和生態。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Python 並需要快速原型開發，選擇 | 如果需要高並發處理，Parsync 會是更好的選擇，但在 C |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 `cargo install` 安裝失敗，因為未在 crates.io 上發布。
  - 解法：必須從源碼建構，參考 README 中的指示。
- [MEDIUM] 開放的 Issues 數量多，可能影響穩定性。
  - 解法：定期檢查 Issues，並參與社群討論。
- [MEDIUM] 在某些環境下，Rust 的編譯時間可能較長。
  - 解法：確保使用最新版本的 Rust 和相關工具。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 CLI 工具開發 | 非常適合 | Rust 的性能和安全性使得開發過程高效且穩定。 |
| 大型企業的生產環境 | 不適合 | 目前仍在開發中，穩定性不足。 |
| 個人開發者的原型設計 | 適合 | 快速開發和測試的需求能夠得到滿足。 |
| 需要高並發處理的應用 | 普通 | 雖然性能優越，但並發處理的設計尚未優化。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到高效能的 CLI 工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴鏈的信任程度高，適合在 CI/CD 中使用。

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
| Forks | 106.0k |
| Open Issues | 1413 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 8.0 MB |
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
> | [@code-yeongyu](https://github.com/code-yeongyu) | 140 |

## 社群與生態

**社群活躍度**：社群活躍，經常有討論和更新。
**連結**：[文件](https://github.com/ultraworkers/claw-code) · [Discord](https://discord.gg/5TUQKqFWd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-09）
> **活躍天數** 2 天 · **最新 commit** docs(readme): warn that cargo install clawcode is not supported; show build-from-source path

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
> > [!NOTE]
> > **`cargo install clawcode` will not work** — this package is not published on crates.io. Build from source as shown below.
> 
> ```bash
> git clone https://github.com/ultraworkers/claw-code
> cd claw-code/rust
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

相關概念：[[CLI/TUI]] · [[Rust]] · [[自動化測試]]

相關專案：[[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

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
> const concepts = ["CLI/TUI","Rust","自動化測試"];
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
