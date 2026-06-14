---
repo: anomalyco/rift
url: https://github.com/anomalyco/rift
owner: anomalyco
owner_type: Organization
language: Rust
license: N/A
description: ""
homepage: ""
stars: 567
stars_per_day: 44
forks: 11
open_issues: 0
created: 2026-05-31
pushed_at: 2026-06-03
first_seen: 2026-06-06
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "工作區管理"
release_tag: "v0.0.10"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-06
use_case: "提供更好的 git worktrees 替代方案，透過 copy-on-write 技術節省空間並快速創建工作區。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-14"
contributor_count: 5
engagement: "low"
issue_close_rate: -1
repo_size_kb: 234
readme_length: 8427
bus_factor: 1
last_release_days: 11
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-06"
star_history: "2026-06-06:532,2026-06-06:532,2026-06-07:548,2026-06-07:548,2026-06-08:555,2026-06-09:557,2026-06-10:561,2026-06-11:564,2026-06-12:566,2026-06-13:566,2026-06-14:567"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
  - easy_install
aliases:
  - "rift"
  - "anomalyco/rift"
  - "提供更好的 git worktrees 替代方案，透過 copy-on-write 技術節省空間並快速創建工作區。"
---

# rift

**567** stars · **44** stars/天 · 建立 13 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/anomalyco--rift");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.0.10` `easy-install`

> [!summary] 一句話摘要
> 提供更好的 git worktrees 替代方案，透過 copy-on-write 技術節省空間並快速創建工作區。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (44 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 10 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Linux 或 macOS 上高效管理 Git 工作區的開發者。
> **一句話重點** Rift 利用 copy-on-write 技術，為 Git 工作區管理提供了一個高效且節省空間的解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/anomalyco--rift");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "工作區管理" && p.file.name !== "anomalyco--rift" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 工作區管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效的工作區管理，值得嘗試。

> [!abstract] 核心創新
> Rift 提供了基於 copy-on-write 的工作區管理，能在 Linux 和 macOS 上快速創建和管理工作區。

## 專案簡介

Rift 是一個用於管理工作區的工具，特別針對 Git 開發者設計。它的核心機制是利用 copy-on-write 技術，讓使用者能夠在 Linux 和 macOS 上快速創建和管理工作區，並且在 10GB 的資料夾上創建新工作區的時間不超過 0.1 秒。使用者可以透過 `rift init` 指令來初始化工作區，並使用 `rift create` 指令來創建新的工作區，這些工作區會自動記錄父子關係，方便管理。Rift 的一句話賣點是「快速且節省空間的工作區管理」。技術上，Rift 使用 Rust 和 JavaScript 實現，並依賴於 btrfs 或 APFS 的原生支持來實現高效的資料管理。這使得它在處理大型專案時能夠保持高效能，並且在資源使用上相對輕量。

與傳統的 Git worktrees 相比，Rift 提供了更快的創建速度和更低的空間佔用，特別適合需要頻繁切換工作環境的開發者。雖然目前僅支援 Linux 和 macOS，但未來會擴展到更多平台。使用者在使用過程中可能會遇到需要手動處理的情況，特別是在初始化和創建工作區時，需確保所用的檔案系統支持所需的功能。這個專案目前處於實驗階段，功能和接口可能會隨時變動，因此不建議在生產環境中使用。對於希望快速實現工作區管理的開發者，Rift 是一個值得關注的選擇，但需注意其不穩定性和潛在的變動。適合小型團隊或個人開發者，尤其是那些經常需要在不同工作環境間切換的使用者。

**技術棧**：`Rust` · `JavaScript` · `Shell`

## 重點功能

- 快速初始化 — 使用 `rift init` 指令在 10GB 的資料夾上創建工作區，時間不超過 0.1 秒。
- copy-on-write 技術 — 透過 btrfs 或 APFS 的原生支持，節省空間並提高效率。
- CLI 支援 — 提供多種 CLI 指令如 `rift create`, `rift list`, `rift remove` 來管理工作區。
- 支援 postcreate hooks — 可以在創建工作區後自動執行命令，方便自動化流程。
- 跨平台支援 — 目前支援 Linux 和 macOS，未來計畫擴展到更多平台。

## 快速開始

1. 全域安裝 Rift
```bash
npm install -g rift-snapshot
```
2. 初始化工作區
```bash
cd ~/code/app && rift init
```
3. 創建新工作區
```bash
rift create --name parser-fix
```

## 程式碼範例

```rust
{
  "前置條件": "需安裝 Node.js 26.1 或以上版本，並啟用 FFI。",
  "指令": "import { create, list, remove, gc } from \"rift-snapshot\";\n\nconst workspace = create({ from: process.cwd(), name: \"schema-work\" });\nconsole.log(list({ of: process.cwd() }));\nremove({ at: workspace });\ngc();",
  "預期輸出": "列出當前工作區的列表，並刪除指定的工作區。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 567 stars（44/天），forks 11（1.9%），這顯示出一定的關注度。作者 nexxeln 和其他貢獻者在開源社群中有一定的影響力，這個專案解決了 Git worktrees 在性能和空間使用上的不足，特別是對於大型專案的開發者來說。雖然目前沒有明顯的觸發事件，但其技術創新和實用性吸引了開發者的注意。Rift 的出現正好填補了在 Git 工作流中對於高效管理工作區的需求，尤其是在 Linux 和 macOS 環境下。forks/stars 比率相對較低，可能顯示出大多數用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：需要在 Linux 或 macOS 上高效管理 Git 工作區的開發者。

> [!example] 使用場景
> - 前端開發者用它來快速創建和管理多個工作區，因為可以在 10GB 的資料夾上快速創建新工作區，節省時間。
> - 後端工程師用它來在不同的 Git 分支間切換，因為它的 copy-on-write 技術讓他們能夠快速切換而不浪費空間。
> - DevOps 工程師用它來測試不同的部署環境，因為它支持在 macOS 和 Linux 上使用，並且能快速初始化和創建工作區。

## 架構分析

Rift 的架構基於 Rust 和 JavaScript，利用 Rust 提供的高效能和安全性，並結合 JavaScript 的靈活性來實現 CLI 和 API。其核心功能是透過 copy-on-write 技術來管理工作區，這意味著每次創建新工作區時，實際上是對現有資料的輕量級引用，從而節省了存儲空間。資料流方面，使用者透過 CLI 指令與 Rift 互動，指令會觸發相應的 Rust 程式碼來處理工作區的初始化、創建和管理。

這種設計使得 Rift 在處理大型專案時能夠保持高效能，並且在資源使用上相對輕量。選擇 Rust 而非其他語言的原因在於其對性能的優化和對記憶體安全的保障，這對於需要高效能的工作區管理至關重要。擴展性方面，Rift 目前依賴於特定的檔案系統，這可能在未來成為一個瓶頸，但未來計畫擴展對更多檔案系統的支持。

## 技術深入分析

Rift 的核心技術機制是基於 Rust 的 copy-on-write 實現，這使得每次創建新工作區時，僅需對現有資料進行輕量級引用，而不是進行完整的資料複製。這樣的設計不僅提高了創建速度，還有效節省了存儲空間。效能方面，Rift 能在 10GB 的資料夾上快速創建新工作區，時間不超過 0.1 秒，這在大型專案中尤為重要。選擇 Rust 作為主要開發語言是因為其性能優化和安全性，這對於需要高效能的工作區管理至關重要。依賴樹方面，Rift 依賴於多個 Rust 套件，如 `clap` 和 `serde`，這些都是輕量且常用的庫，並不會造成過多的依賴負擔。技術風險方面，Rift 目前的設計可能在未來面臨擴展性瓶頸，特別是在對更多檔案系統的支持上。整合方面，Rift 提供 CLI 工具，與現有的開發流程相容性良好，並且能夠輕鬆集成到 CI/CD pipeline 中，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，包含多個範例。安裝過程相對順暢，使用者只需執行簡單的 npm 指令即可完成安裝。文件中沒有多語言支持，但內容簡潔易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高效的工作區管理，能快速創建和初始化。
> - 節省存儲空間，使用 copy-on-write 技術。
> - CLI 友好，提供多種指令以便管理工作區。

> [!danger] 缺點
> - 目前僅支援特定檔案系統，限制了使用範圍。
> - 處於實驗階段，功能和接口可能不穩定。
> - Windows 支援尚未實現，限制了跨平台使用。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 尚未實現工作區創建功能。
> - 處於實驗階段，功能和接口可能隨時變動，使用時需謹慎。
> - 依賴於特定檔案系統（如 btrfs 或 APFS），不支援所有檔案系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的工作區管理功能，但主要針對 AI agent 的開發，適合需要 AI 集成的專案。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 Git 工作流的管理，但不具備 copy-on-write 技術，可能在空間使用上不如 Rift 高效。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供 CLI 工具的管理，但不專注於工作區的創建和管理，適合一般 CLI 工具的使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，提供類似的工作區管理功能，但不具備 copy-on-write 技術，可能在空間使用上不如 Rift 高效。 | 如果你的專案需要集成 AI agent 的功能，並且不需要高效的工作區管理，則可以選擇此工具。 | medium，因為需要重新調整工作流以適應不同的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 Git 工作流的管理，但不具備 copy-on-write 技術，可能在空間使用上不如 Rift 高效。 | 如果你的專案主要依賴於 Git 的工作流管理，而不需要高效的空間使用，則可以考慮此工具。 | low，因為其功能與 Git 工作流相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **rift** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的開發，提供類似的工作區管理功能，但不具備 copy-on-write 技術，可能在空間使用上不如 Rift 高效。 | 專注於 Git 工作流的管理，但不具備 copy-on-write 技術，可能在空間使用上不如 Rift 高效。 |
> | 遷移成本 | - | medium，因為需要重新調整工作流以適應不同的工具。 | low，因為其功能與 Git 工作流相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的專案需要集成 AI agent 的功能，並且不需要高 | 如果你的專案主要依賴於 Git 的工作流管理，而不需要高效的 |

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

- **[HIGH]** 在某些檔案系統上，初始化過程可能會失敗，特別是當不支援 reflink 時。
  - 解法：確保使用的檔案系統支持 reflink，或在支援的環境中運行。
- [MEDIUM] 在 macOS 上，APFS 的某些版本可能存在不穩定性。
  - 解法：使用最新版本的 macOS 以確保最佳兼容性。
- [MEDIUM] 使用者在創建工作區時，若未正確設置 hooks，可能導致創建失敗。
  - 解法：檢查 `.rift.toml` 配置文件，確保 hooks 設置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發專案 | 非常適合 | Rift 提供快速的工作區創建和管理，適合頻繁切換的開發流程。 |
| 大型企業的核心系統開發 | 不適合 | 目前處於實驗階段，功能不穩定，不適合關鍵系統。 |
| 個人開發者的 side project | 適合 | 提供高效的工作區管理，適合個人使用。 |
| 需要跨平台支持的開發專案 | 普通 | 目前僅支援 Linux 和 macOS，Windows 尚未實現。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的工作區管理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Rift 本身不需要高權限操作，僅需存取使用者的檔案系統，並不涉及敏感資料的處理。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/anomalyco--rift");
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
> const me = dv.page("Repos/anomalyco--rift");
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
| Forks | 11 |
| Open Issues | 0 |
| 最後推送 | 2026-06-03 |
| 建立日期 | 2026-05-31 |
| Repo 大小 | 234 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/anomalyco/rift) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `edition` `license` `version` `clap` `dirs` `libc` `rand` `rusqlite` `serde` `serde_json` `tempfile` `thiserror` `toml`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 93
>     "JavaScript" : 4
>     "Shell" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nexxeln](https://github.com/nexxeln) | 40 |
> | [@thdxr](https://github.com/thdxr) | 30 |
> | [@jlongster](https://github.com/jlongster) | 4 |
> | [@MarkusZoppelt](https://github.com/MarkusZoppelt) | 2 |
> | [@mirsella](https://github.com/mirsella) | 1 |

**最新版本**：v0.0.10 (2026-06-03)

> [!info]- Release Notes
> ## What's Changed
> * test: expand linux filesystem ci by @nexxeln in https://github.com/anomalyco/rift/pull/11
> * feat: add postclone hooks by @nexxeln in https://github.com/anomalyco/rift/pull/12
> * test: harden linux filesystem fixtures by @nexxeln in https://github.com/anomalyco/rift/pull/13
> * test: add filesystem cli e2e coverage by @nexxeln in https://github.com/anomalyco/rift/pull/14
> * test: verify native cow behavior by @nexxeln in https://github.com/anomalyco/rift/pull/15
> * test: broaden failure cleanup coverage by @nexxeln in https://github.com/anomalyco/rift/pull/16
> * refactor: rename hook to postcreate by @nexxeln in https://github.com/anomalyco/rift/pull/17
> 
> 
> **Full Changelog**: https://github.com/anomalyco/rift/compare/v0.0.9...v0.0.10

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續提交更新和修復。
**連結**：[文件](https://github.com/anomalyco/rift)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-03 ~ 2026-06-03）
> **活躍天數** 1 天 · **最新 commit** chore: release 0.0.10

## README 摘錄

> [!info]- 展開查看原文 README
> > **Warning: Experimental repository**
> >
> > This repository is experimental and is not ready for use. We are exploring a variety of ideas here, and behavior, interfaces, and implementation details may change without notice.
> 
> rift: better alternative to git worktrees
> 
> - copy on write (saves space)
> - instant (< 0.1s on 10gb folder)
> - fast cli
> - use as FFI lib with bun or node
> 
> mac and linux with btrfs or native reflinks for now
> more support soon
> 
> ## Install
> 
> ```bash
> npm install -g rift-snapshot
> # or
> bun add -g rift-snapshot
> ```
> 
> Release archives are available from [GitHub Releases](https://github.com/anomalyco/rift/releases/latest).
> 
> ## Platforms
> 
> | Platform          | Backend                             | Behavior                                                           |
> | ----------------- | ----------------------------------- | ------------------------------------------------------------------ |
> | Linux x64         | Writable btrfs snapshots            | `rift init` converts an ordinary directory into a btrfs subvolume. |
> | Linux x64         | Native per-file reflinks            | `rift init` verifies reflink support and registers the directory.  |
> | macOS arm64 / x64 | APFS `clonefile`                    | `rift init` registers the source directory.                        |
> | Windows x64       | None                                | The package is published; workspace creation is not implemented.   |
> 
> ## CLI
> 
> ### Initialize
> 
> ```bash
> cd ~/code/app
> rift init
> ```
> 
> `rift init` selects an existing Rift root above the current directory, or the nearest Git root when no Rift root exists. Use `--here` to initialize exactly the selected directory.
> 
> On Linux, first initialization of an ordinary btrfs directory performs a reflink import into a new btrfs subvolume and swaps it into the same path. On other Linux filesystems, initialization verifies native reflink support and registers the directory in place. This includes XFS and other filesystems when their `FICLONE` support succeeds. If the selected root is registered already, no conversion occurs. If its `.rift` marker is missing, `rift init` restores it and completes any required setup.
> 
> ### Create
> 
> ```bash
> rift create
> rift create --name parser-fix
> rift create --into /fast/rifts
> rift create --copy-all
> rift create --no-hooks
> ```
> 
> `rift create` searches upward for `.rift`, copies that managed workspace, records the immediate parent, and prints the new workspace path to stdout.
> 
> By default, creation omits heavyweight regenerable dependency and build artifacts such as `node_modules`, `target`, virtualenvs, framework caches, `dist`, `build`, and `coverage`. Manifests and lockfiles are preserved. Use `--copy-all` to keep the previous exact-copy behavior.
> 
> On btrfs, exact copies use writable subvolume snapshots and filtered copies use a reflink import into a new subvolume. On other reflink-capable Linux filesystems, Rift reflink-clones the selected directory tree. On macOS, exact copies use APFS `clonefile`, and filtered copies clone included entries.
> 
> When the workspace is a Git repository, the new workspace has detached `HEAD` and retains index and working-tree state.
> 
> If the source contains `.rift.toml`, `rift create` runs configured postcreate hooks after the workspace is created, registered, and prepared. Use `--no-hooks` to skip them.
> 
> ```toml
> version = 1
> 
> [[hooks.postcreate]]
> run = "pnpm install --frozen-lockfile"
> 
> [[hooks.postcreate]]
> run = "pnpm run codegen"
> ```
> 
> Postcreate commands run in the new workspace root. If a hook fails, the workspace remains registered and `rift create` exits with an error.
> 
> ### List And Ancestors
> 
> ```bash
> rift list
> rift ancestors
> ```
> 
> `list` prints direct active child workspaces. `ancestors` prints parent workspaces, nearest first.
> 
> ### Remove And Garbage Collection
> 
> ```bash
> rift remove                         # trash the current created rift subtree
> rift remove -f ~/code/app           # unregister a source root
> rift remove --children ~/code/app   # trash descendants, preserve the selected workspace
> rift gc                             # physically delete trash and prune missing entries
> ```
> 
> Removing a created rift moves its active subtree into adjacent `.trash` storage. `rift gc` deletes that storage later.
> 
> Removing a source root requires `-f` in the CLI. The source directory remains on disk. Its `.rift` marker is removed. Existing registered descendants are moved into trash. Missing descendants are removed from the registry.
> 
> ### Shell Integration
> 
> ```bash
> eval "$(rift shell-init zsh)" # or bash
> ```
> 
> ```nushell
> rift shell-init nushell | save -f (($nu.user-autoload-dirs | first) | path join "rift.nu")
> ```
> 
> The shell wrapper changes directory after `init` conversion, `create`, or removal of the current created rift.
> 
> ## Storage
> 
> Each managed workspace has a `.rift` marker containing its identifier. An SQLite registry stores paths, parent identifiers, and trash entries.
> 
> Default created-workspace storage is adjacent to the registered source root:
> 
> ```text
> ~/code/app/                         source workspace
> ~/code/.rifts/app/parser-fix/       created workspace
> ~/code/.rifts/app/.trash/            removed workspace storage
> ```
> 
> ## JavaScript API
> 
> The package selects a Bun or Node FFI binding through conditional exports.
> 
> ```ts
> import { create, list, remove, gc } from "rift-snapshot";
> 
> const workspace = create({ from: process.cwd(), name: "schema-work" });
> console.log(list({ of: process.cwd() }));
> remove({ at: workspace });
> gc();
> ```
> 
> ### Node.js
> 
> The Node binding requires the experimental FFI API in Node.js 26.1 or later:
> 
> ```bash
> node --experimental-ffi app.mjs
> ```
> 
> With Node's permission model, also pass `--allow-ffi`.
> 
> ### Functions
> 
> ```ts
> init(options?: { at?: string; database?: string }): null
> create(options?: { from?: string; name?: string; into?: string; copyAll?: boolean; hooks?: boolean; database?: string }): string
> remove(options?: { at?: string; all?: false; database?: string }): void
> remove(options: { at?: string; all: true; database?: string }): string[]
> list(options?: { of?: string; database?: string }): string[]
> ancestors(options?: { of?: string; database?: string }): string[]
> gc(options?: { database?: string }): string[]
> ```
> 
> The JavaScript `init` function initializes exactly `at`; Git-root selection and `--here` are CLI behavior.
> 
> Operation failures throw `RiftError` with a `code` and, when relevant, `path`.
> 
> ## Development
> 
> ```bash
> cargo test --workspace --locked
> ./scripts/install.sh
> ```
> 
> `scripts/install.sh` installs an optimized CLI binary to `${CARGO_HOME:-$HOME/.cargo}/bin/rift`.
> 
> ### Benchmark
> 
> Benchmark a single real `rift create` operation against a directory:
> 
> ```bash
> cargo bench --bench create -- /path/to/linux
> ```
> 
> The benchmark initializes the supplied directory before timing, times only creation of the new rift, and then removes the created workspace outside the measured interval. On first use, initialization of an ordinary Linux btrfs directory converts it into a subvolume before measurement. The benchmark uses the production filesystem strategy, so results measure APFS cloning on macOS, btrfs snapshots on btrfs, and per-file reflinks on reflink-capable Linux filesystems.
> 
> Establish a baseline by measuring multiple independent rift creations and writing an aggregate machine-readable result file. Keep results outside the source workspace so they do not alter future measurements:
> 
> ```bash
> cargo bench --bench create -- /path/to/linux --samples 10 --output /path/to/results/baseline.json
> ```
> 
> The JSON result includes each timing sample and the median, minimum, and maximum elapsed time. A future experiment loop can run the same command in candidate workspaces and compare their median results to this baseline.
> 
> Compare multiple candidate `rift` code workspaces that contain this benchmark target:
> 
> ```bash
> cargo bench --bench compare -- /path/to/linux \
>   --candidate /path/to/rift-baseline \
>   --candidate /path/to/rift-candidate-a \
>   --candidate /path/to/

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[微服務]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/anomalyco/rift)

## 相關收錄

> [!note]- 直接競品（同子分類：工作區管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "工作區管理" AND file.name != "anomalyco--rift"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "anomalyco--rift"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "anomalyco--rift" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "anomalyco--rift"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","微服務","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "anomalyco--rift" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/anomalyco--rift");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "anomalyco--rift" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "anomalyco" AND file.name != "anomalyco--rift"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/anomalyco--rift");
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
> const me = dv.page("Repos/anomalyco--rift");
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
> const me = dv.page("Repos/anomalyco--rift");
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
> const me = dv.page("Repos/anomalyco--rift");
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
> const me = dv.page("Repos/anomalyco--rift");
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

> **2026-06-06** — 首次收錄
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

- [[2026-06-07|2026-06-07]] — 再次上榜，548 stars
- [[2026-06-06|2026-06-06]] — 首次收錄，532 stars
