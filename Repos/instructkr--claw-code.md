---
repo: ultraworkers/claw-code
url: https://github.com/ultraworkers/claw-code
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "The repo is finally unlocked. enjoy the party! The fastest repo in history to surpass 100K stars ⭐. Join Discord: https://discord.gg/5TUQKqFWd Built in Rust using oh-my-codex."
homepage: ""
stars: 183477
stars_per_day: 14114
forks: 107867
open_issues: 1413
created: 2026-03-31
pushed_at: 2026-04-13
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
use_case: "提供一個 Rust 實作的 CLI 代理工具，專為與 Anthropic API 互動而設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "high"
issue_close_rate: 0
repo_size_kb: 8950
readme_length: 4852
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:63551,2026-04-06:171023,2026-04-07:174055,2026-04-08:176541,2026-04-09:178422,2026-04-10:179807,2026-04-11:180822,2026-04-12:181582,2026-04-13:182542,2026-04-14:183477"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "claw-code"
  - "ultraworkers/claw-code"
  - "提供一個 Rust 實作的 CLI 代理工具，專為與 Anthropic API 互動而設計。"
---

# claw-code

**183.5k** stars · **14.1k** stars/天 · 建立 13 天前 · Rust · 未標註授權

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
> 提供一個 Rust 實作的 CLI 代理工具，專為與 Anthropic API 互動而設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Viral (14.1k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要與 Anthropic API 進行高效互動的開發者，尤其是熟悉 Rust 的工程師。
> **一句話重點** Claw Code 是一個專為高效能 API 交互設計的 CLI 工具，特別適合需要與 Anthropic API 進行大量互動的開發者。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效能的 API 交互工具，值得投入。

> [!abstract] 核心創新
> 提供一個專為與 Anthropic API 互動而設計的高效 CLI 工具。

## 專案簡介

Claw Code 是一個用 Rust 實作的 CLI 代理工具，主要用於與 Anthropic API 進行互動。使用者首先需要從 GitHub 克隆此專案，然後在 `rust` 目錄中執行 `cargo build --workspace` 來編譯專案。接著，使用者需設置 API 金鑰，並透過 `./target/debug/claw doctor` 進行健康檢查，最後可以用 `./target/debug/claw prompt 'say hello'` 來發送請求。這個工具的賣點在於其高效能與 Rust 的安全性，適合需要高效能 API 交互的開發者。技術上，Claw Code 利用 Rust 的高效能和靜態類型特性，確保執行時的安全性，並且支援 Docker 容器化部署。

與其他類似工具相比，如 `0xGF/boneyard` 和 `AgriciDaniel/claude-obsidian`，Claw Code 提供了更為直接的 CLI 介面，並且專注於與 Anthropic API 的整合，這使得它在處理複雜請求時更具優勢。使用者在實際運行中可能會遇到 Windows 環境下的路徑問題，但官方文件提供了詳細的解決方案。這個專案目前仍在快速發展中，未來可能會增加更多功能和改進。適合需要高效能 API 交互的團隊，尤其是對於 Rust 有一定了解的開發者。整體來看，Claw Code 是一個值得投入的專案，特別是對於需要與 Anthropic API 進行大量互動的應用場景。

**技術棧**：`Rust` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- Rust 實作 — 提供高效能和安全性，適合高頻率 API 請求。
- CLI 介面 — 簡單易用，使用者可快速發送請求和獲取回應。
- Docker 支援 — 可容器化部署，方便整合到現有的 DevOps 流程中。
- 健康檢查工具 — `claw doctor` 可檢查環境設置是否正確，降低使用門檻。
- 詳細的使用文檔 — 提供多個 Markdown 文件說明使用方法和設置步驟。

## 快速開始

1. 克隆專案並編譯
```bash
git clone https://github.com/ultraworkers/claw-code && cd claw-code/rust && cargo build --workspace
```
2. 設置 API 金鑰
```bash
export ANTHROPIC_API_KEY='sk-ant-...'
```
3. 檢查設置是否正確
```bash
./target/debug/claw doctor
```
4. 發送請求
```bash
./target/debug/claw prompt 'say hello'
```

## 程式碼範例

```rust
{
  "前置條件": "已完成專案編譯並設置 API 金鑰",
  "指令": "./target/debug/claw prompt 'say hello'",
  "預期輸出": "Hello!"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 183477 stars（14114/天），forks 107867（58.8%），這是極端爆發式增長。這個專案的作者 Yeachan-Heo 及其團隊在開源社群中已有良好的聲譽，之前的專案如 `oh-my-codex` 也獲得了不少關注。Claw Code 解決了開發者在與 Anthropic API 互動時的複雜性，提供了簡單易用的 CLI 工具，讓開發者能夠快速上手。社群的活躍度也反映在 Discord 的建立上，促進了使用者之間的交流與支持。這些因素共同推動了專案的快速增長。

## 適合誰使用

**目標受眾**：需要與 Anthropic API 進行高效互動的開發者，尤其是熟悉 Rust 的工程師。

> [!example] 使用場景
> - 後端工程師用它來快速與 Anthropic API 互動，因為其 CLI 介面簡單易用，能夠快速發送請求並獲取回應。
> - DevOps 工程師用它來在 CI/CD 流程中自動化 API 測試，因為其支持 Docker 部署，能夠輕鬆整合到現有的工作流中。
> - 資料科學家用它來進行實驗，測試不同的 API 請求，因為其高效能能夠快速返回結果，節省時間。

## 架構分析

Claw Code 採用 Rust 作為主要開發語言，這使得它在效能和安全性上具有優勢。專案結構包括 `rust/` 目錄作為主要的工作區，並且包含多個 Markdown 文件來指導使用者。資料流方面，使用者透過 CLI 發送請求，系統則通過 Rust 的高效能處理請求並返回結果。

這樣的設計使得專案能夠快速響應用戶請求，並且在安全性上有良好的表現。選擇 Rust 而非 Python 或其他語言，主要是因為其在效能和記憶體管理上的優勢，雖然這也意味著開發者需要具備一定的 Rust 知識。整體而言，Claw Code 的架構設計旨在提供高效能的 API 交互，未來可能會增加更多功能以擴展其應用範圍。

## 技術深入分析

Claw Code 的核心技術機制基於 Rust，這使得它在效能和安全性上具有顯著優勢。專案使用了 Rust 的工作區功能來組織代碼，並且通過 CLI 介面與使用者互動。效能方面，Rust 的編譯特性使得執行速度非常快，適合高頻率的 API 請求。設計上，選擇 Rust 而非 Python 是因為其在記憶體管理和執行效率上的優勢，雖然這也意味著開發者需要具備一定的 Rust 知識。技術風險方面，因為專案仍在快速發展中，未來可能會面臨 API 變更的風險。整合方面，Claw Code 可以輕鬆與 Docker 結合，這使得它在 DevOps 流程中非常友好。與主流框架的整合難度較低，適合團隊快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，安裝過程順暢，特別是對於 Linux 和 macOS 使用者。Windows 使用者需注意路徑問題，但官方文件中有提供解決方案。整體來看，花 30 分鐘應該能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 高效能 — Rust 提供了優越的執行速度和安全性。
> - 簡單的 CLI 介面 — 使用者能快速上手，降低學習曲線。
> - 良好的文檔支持 — 提供詳細的使用指南和範例，便於新手學習。

> [!danger] 缺點
> - 僅支援特定 API — 目前僅針對 Anthropic API，未來擴展性尚不明確。
> - Windows 使用者需特別注意環境設置，可能會遇到路徑問題。
> - 需要自行編譯，對於不熟悉 Rust 的使用者來說，可能會增加使用門檻。

> [!warning] 注意事項
> - 僅支援 Linux 和 macOS，Windows 使用者需特別注意路徑問題。
> - 目前僅支援 Anthropic API，未來可能會擴展到其他 API。
> - 開發者需自行編譯專案，無法通過 `cargo install` 獲得最新版本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 CLI 功能，但不專注於 Anthropic API，適合需要多種 API 整合的使用者。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 雖然也與 Anthropic 相關，但主要針對資料存儲與管理，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 CLI 功能，但不專注於 Anthropic API，適合需要多種 API 整合的使用者。 | 如果你的團隊需要與多個 API 進行整合，而不僅僅是 Anthropic API。 | medium — 需要調整 API 認證和請求格式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 雖然也與 Anthropic 相關，但主要針對資料存儲與管理，功能範圍不同。 | 如果你的需求主要集中在資料管理而非直接的 API 交互。 | low — 主要是資料結構的調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 CLI 功能，但不專注於 Anthropic API，適合需要多種 API 整合的使用者。 | 雖然也與 Anthropic 相關，但主要針對資料存儲與管理，功能範圍不同。 |
> | 遷移成本 | - | medium — 需要調整 API 認證和請求格式。 | low — 主要是資料結構的調整。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要與多個 API 進行整合，而不僅僅是 Ant | 如果你的需求主要集中在資料管理而非直接的 API 交互。 |

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

- **[HIGH]** Windows 環境下路徑處理問題，可能導致執行失敗
  - 解法：使用 PowerShell 並確保使用正確的路徑格式
- [MEDIUM] API 金鑰未設置時無法啟動
  - 解法：確保在運行前設置 ANTHROPIC_API_KEY 環境變數
- **[HIGH]** 快速開發中可能會有 API 變更，導致不穩定性
  - 解法：定期檢查官方文檔以獲取最新更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 高效能且易於整合，適合小型團隊快速上手。 |
| 需要與多個 API 整合的大型企業 | 普通 | 雖然功能強大，但目前僅針對 Anthropic API，擴展性有限。 |
| 資料科學家進行實驗性研究 | 非常適合 | 高效能的 CLI 工具能快速返回結果，適合快速迭代。 |
| 大型專案的核心 API 交互 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效能的 API 交互工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，僅需設置 API 金鑰，且不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

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
| Forks | 107.9k |
| Open Issues | 1413 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 8.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ultraworkers/claw-code) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 96
>     "Python" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 462 |
> | [@code-yeongyu](https://github.com/code-yeongyu) | 211 |

## 社群與生態

**社群活躍度**：社群活躍，Discord 提供即時交流與支援。
**連結**：[文件](https://github.com/ultraworkers/claw-code) · [Discord](https://discord.gg/5TUQKqFWd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-13）
> **活躍天數** 2 天 · **最新 commit** Improve malformed hook failures so operators can diagnose broken JSON

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
> > [!WARNING]
> > **`cargo install claw-code` installs the wrong thing.** The `claw-code` crate on crates.io is a deprecated stub that places `claw-code-deprecated.exe` — not `claw`. Running it only prints `"claw-code has been renamed to agent-code"`. **Do not use `cargo install claw-code`.** Either build from source (this repo) or install the upstream binary:
> > ```bash
> > cargo install agent-code   # upstream binary — installs 'agent.exe' (Windows) / 'agent' (Unix), NOT 'agent-code'
> > ```
> > This repo (`ultraworkers/claw-code`) is **build-from-source only** — follow the steps below.
> 
> ```bash
> # 1. Clone and build
> git clone https://github.com/ultraworkers/claw-code
> cd claw-code/rust
> cargo build --workspace
> 
> # 2. Set your API key (Anthropic API key — not a Claude subscription)
> export ANTHROPIC_API_KEY="sk-ant-..."
> 
> # 3. Verify everything is wired correctly
> ./target/debug/claw doctor
> 
> # 4. Run a prompt
> ./target/debug/claw prompt "say hello"
> ```
> 
> > [!NOTE]
> > **Windows (PowerShell):** the binary is `claw.exe`, not `claw`. Use `.\target\debug\claw.exe` or run `cargo run -- prompt "say hello"` to skip the path lookup.
> 
> ### Windows setup
> 
> **PowerShell is a supported Windows path.** Use whichever shell works for you. The common onboarding issues on Windows are:
> 
> 1. **Install Rust first** — download from  and run the installer. Close and reopen your terminal when it finishes.
> 2. **Verify Rust is on PATH:**
>    ```powershell
>    cargo --version
>    ```
>    If this fails, reopen your terminal or run the PATH setup from the Rust installer output, then retry.
> 3. **Clone and build** (works in PowerShell, Git Bash, or WSL):
>    ```powershell
>    git clone https://github.com/ultraworkers/claw-code
>    cd claw-code/rust
>    cargo build --workspace
>    ```
> 4. **Run** (PowerShell — note `.exe` and backslash):
>    ```powershell
>    $env:ANTHROPIC_API_KEY = "sk-ant-..."
>    .\target\debug\claw.exe prompt "say hello"
>    ```
> 
> **Git Bash / WSL** are optional alternatives, not requirements. If you prefer bash-style paths (`/c/Users/you/...` instead of `C:\Users\you\...`), Git Bash (ships with Git for Windows) works well. In Git Bash, the `MINGW64` prompt is expected and normal — not a broken install.
> 
> > [!NOTE]
> > **Auth:** claw requires an **API key** (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, etc.) — Claude subscription login is not a supported auth path.
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

相關概念：[[CLI/TUI]] · [[容器化]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
> const concepts = ["CLI/TUI","容器化","API 設計"];
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
