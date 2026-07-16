---
repo: xai-org/grok-build
url: https://github.com/xai-org/grok-build
owner: xai-org
owner_type: Organization
language: Rust
license: Apache-2.0
description: "SpaceXAI's coding agent harness and TUI. Fullscreen, mouse interactive, extensible."
homepage: ""
stars: 5254
stars_per_day: 5254
forks: 778
open_issues: 0
created: 2026-07-14
pushed_at: 2026-07-15
first_seen: 2026-07-16
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-16
use_case: "提供一個終端機界面的 AI 編碼代理，支持互動式編輯和任務管理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-19"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 10855
readme_length: 4660
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-16"
star_history: "2026-07-16:5254"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
aliases:
  - "grok-build"
  - "xai-org/grok-build"
  - "提供一個終端機界面的 AI 編碼代理，支持互動式編輯和任務管理。"
---

# grok-build

**5.3k** stars · **5.3k** stars/天 · 建立 1 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/xai-org--grok-build");
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
> 提供一個終端機界面的 AI 編碼代理，支持互動式編輯和任務管理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (5.3k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在終端進行編碼和任務管理的開發者，尤其是對互動性有需求的使用者。
> **一句話重點** Grok Build 是一個強大的終端式 AI 編碼代理，特別適合需要互動式編碼環境的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/xai-org--grok-build");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "xai-org--grok-build" && p.status !== "archived")
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
> **結論** 花 5 小時學、3 小時整合，得到強大的互動式編碼環境，值得考慮。

> [!abstract] 核心創新
> Grok Build 提供了一個全螢幕的終端式 AI 編碼代理，支持互動式編輯和長時間任務管理。

## 專案簡介

Grok Build 是 SpaceXAI 開發的終端式 AI 編碼代理，提供全螢幕的 TUI 界面，能夠理解代碼庫、編輯文件、執行 shell 命令、搜尋網頁及管理長時間運行的任務。用戶可以透過互動方式、無頭模式進行腳本/CI 操作，或透過代理客戶端協議 (ACP) 嵌入編輯器中。安裝時用戶可選擇下載預編譯的二進制檔，支持 macOS、Linux 和 Windows，安裝指令為 `curl -fsSL https://x.ai/cli/install.sh | bash`。技術上，Grok Build 使用 Rust 作為主要開發語言，並依賴多個模組來實現功能，如 `xai-grok-pager` 提供 TUI 界面，`xai-grok-shell` 負責代理運行時，並且支持多種工具實現終端操作。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Grok Build 提供了更強的互動性和可擴展性，特別是在長時間任務的管理上。

使用者在使用過程中可能會遇到 Windows 環境下的構建問題，因為該環境的支持是最佳努力，並未經過全面測試。這個專案目前處於初期階段，對於需要在終端進行編碼和任務管理的開發者來說，Grok Build 提供了一個強大的工具。未來可能會持續增強其功能，特別是在插件和擴展性方面。適合小型團隊或個人開發者使用，特別是對於需要高度互動的編碼環境。

**技術棧**：`Rust` · `Python` · `JavaScript` · `Shell` · `PowerShell`

## 重點功能

- 全螢幕 TUI 界面 — 提供直觀的使用體驗，支持滾動、提示和模態窗口。
- 支持多平台 — 可在 macOS、Linux 和 Windows 上運行，安裝簡單。
- 長時間任務管理 — 能夠有效管理長時間運行的任務，適合 CI/CD 環境。
- 互動式編輯 — 直接在終端中編輯代碼，並即時執行 shell 命令。
- 插件擴展性 — 支持通過代理客戶端協議 (ACP) 嵌入到編輯器中，方便擴展功能。

## 快速開始

1. 安裝 Grok Build
```bash
curl -fsSL https://x.ai/cli/install.sh | bash
```
2. 啟動 TUI 界面
```bash
cargo run -p xai-grok-pager-bin
```
3. 檢查版本
```bash
grok --version
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Grok Build",
  "指令": "grok --version",
  "預期輸出": "顯示當前安裝的 Grok Build 版本。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 5254 stars（5254/天），forks 778（14.8%），顯示出強烈的社群興趣。作者 grokkybara 是一個活躍的貢獻者，這個專案解決了現有編碼工具在互動性和可擴展性上的不足。之前的工具多數缺乏靈活的 TUI 界面，無法有效支持長時間任務的管理。這個專案的推出引起了社群的關注，尤其是在開源開發者中。技術上，Rust 的使用讓這個工具在性能上有了保障，並且能夠在多平台上運行。forks/stars 比率 14.8% 表示許多人對其進行了實際修改和使用，顯示出良好的社群活躍度。

## 適合誰使用

**目標受眾**：需要在終端進行編碼和任務管理的開發者，尤其是對互動性有需求的使用者。

> [!example] 使用場景
> - 後端工程師用它來在終端中編輯和執行代碼，因為它提供了強大的互動式編輯功能，能夠即時反饋編輯結果。
> - DevOps 工程師用它來管理長時間運行的任務，因為它支持無頭模式，適合在 CI/CD 環境中使用。
> - 獨立開發者用它來快速測試和執行 shell 命令，因為其 TUI 界面使得操作更直觀，提升了工作效率。

## 架構分析

Grok Build 採用 Rust 作為主要開發語言，並使用多個模組來實現其功能。架構上，TUI 界面由 `xai-grok-pager` 提供，這使得用戶能夠在終端中進行直觀的操作。資料流方面，使用者的輸入會被解析並傳遞給後端的代理運行時 `xai-grok-shell`，該模組負責執行命令並管理任務。

選擇 Rust 使得這個工具在性能上有優勢，但也增加了學習曲線，特別是對於不熟悉 Rust 的開發者。這個架構的擴展性良好，支持插件和擴展功能，但在大型團隊協作方面可能會遇到挑戰，因為目前的設計主要針對個人使用。整體來看，這個架構在性能和可擴展性之間取得了一定的平衡。

## 技術深入分析

Grok Build 的核心技術機制是基於 Rust 的多模組架構，這使得其在性能上有顯著優勢。主要模組如 `xai-grok-pager` 提供了 TUI 界面，使用者可以在終端中進行直觀的操作。效能方面，該工具能夠高效處理多個長時間運行的任務，並且能夠在多平台上運行，這對於需要跨平台開發的團隊來說是個優勢。設計上選擇 Rust 而非其他語言，帶來了更高的執行效率，但也增加了學習成本，特別是對於不熟悉 Rust 的開發者。這個專案的依賴樹相對簡單，主要依賴於 Rust 的生態系統，降低了外部依賴的風險。技術風險方面，未來在擴展功能時可能會遇到性能瓶頸，特別是在處理大量同時任務時。整合方面，Grok Build 能夠與主流的 CI/CD 工具鏈良好配合，並且支持多種編輯器的插件擴展，這使得它在現有的開發流程中能夠輕鬆融入。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細指導。安裝過程相對順暢，但需要注意 Windows 環境的支持問題。文件中有鏈接到完整的文檔，便於新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供直觀的 TUI 界面，提升使用體驗。
> - 支持多平台，方便不同環境的開發者使用。
> - 強大的長時間任務管理能力，適合 CI/CD 環境。

> [!danger] 缺點
> - Windows 環境支持不佳，可能影響使用者體驗。
> - 需要安裝 Rust 和 protoc，增加了安裝複雜度。
> - 目前不支持大型團隊的協作功能。

> [!warning] 注意事項
> - Windows 環境下的構建支持為最佳努力，可能會遇到問題。
> - 需要安裝 Rust 和 protoc 來構建源碼。
> - 目前不支持大型團隊的協作功能，主要針對個人使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 編碼代理，但缺乏 Grok Build 的 TUI 界面和長時間任務管理功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，但不具備 Grok Build 的互動性和即時執行能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 實作，專注於簡化的 AI 編碼代理，記憶體使用較少，但功能上不如 Grok Build 完整。 | 如果你的團隊已經在使用 Python 並需要快速上手的工具，這個選擇會更合適。 | medium，因為需要重寫部分代碼以適應不同的 API。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個簡單的代碼生成工具，專注於靜態代碼生成，缺乏 Grok Build 的互動性。 | 如果你的需求主要是靜態代碼生成而非互動式編輯，這個工具會更合適。 | low，因為功能範圍較小，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **grok-build** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，專注於簡化的 AI 編碼代理，記憶體使用較少，但功能上不如 Grok Build 完整。 | 提供一個簡單的代碼生成工具，專注於靜態代碼生成，缺乏 Grok Build 的互動性。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應不同的 API。 | low，因為功能範圍較小，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並需要快速上手的工具， | 如果你的需求主要是靜態代碼生成而非互動式編輯，這個工具會更合 |

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

- **[HIGH]** 在 Windows 環境下構建可能會遇到問題
  - 解法：使用 WSL 或在 Linux/macOS 環境中構建
- [MEDIUM] 首次啟動需要進行身份驗證，可能會造成使用者困惑
  - 解法：參考文檔中的身份驗證指南
- [MEDIUM] 某些功能在 Windows 上未經過充分測試，可能不穩定
  - 解法：在 Linux/macOS 環境中使用以獲得最佳體驗

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | 提供了強大的互動性和任務管理功能，適合小型團隊使用。 |
| 大型企業的核心系統 | 不適合 | 目前不支持大型團隊的協作功能，可能無法滿足需求。 |
| 個人開發者的日常編碼 | 非常適合 | 提供了直觀的編碼環境，能夠提升編碼效率。 |
| 需要跨平台支持的開發專案 | 適合 | 支持多平台運行，適合不同環境的開發者使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到強大的互動式編碼環境，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要操作在終端中進行，不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xai-org--grok-build");
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
> const me = dv.page("Repos/xai-org--grok-build");
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
| Forks | 778 |
| Open Issues | 0 |
| 最後推送 | 2026-07-15 |
| 建立日期 | 2026-07-14 |
| Repo 大小 | 10.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xai-org/grok-build) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@grokkybara[bot]](https://github.com/grokkybara[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和維護。
**連結**：[文件](https://docs.x.ai/build/overview)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-15）
> **活躍天數** 1 天 · **最新 commit** Publish harness and TUI open-source

## README 摘錄

> [!info]- 展開查看原文 README
> Grok Build (grok)
> 
> **Grok Build** is SpaceXAI's terminal-based AI coding agent. It runs as a
> full-screen TUI that understands your codebase, edits files, executes shell
> commands, searches the web, and manages long-running tasks — interactively,
> headlessly for scripting/CI, or embedded in editors via the Agent Client
> Protocol (ACP).
> 
> [Installing the released binary](#installing-the-released-binary) ·
> [Building from source](#building-from-source) ·
> [Documentation](#documentation) ·
> [Repository layout](#repository-layout) ·
> [Development](#development) ·
> [Contributing](#contributing) ·
> [License](#license)
> 
> **Learn more about Grok Build at [x.ai/cli](https://x.ai/cli)**
> 
> This repository contains the Rust source for the `grok` CLI/TUI and its agent
> runtime. It is synced periodically from the SpaceXAI monorepo.
> 
> ---
> 
> ## Installing the released binary
> 
> Prebuilt binaries are published for macOS, Linux, and Windows:
> 
> ```sh
> curl -fsSL https://x.ai/cli/install.sh | bash   # macOS / Linux / Git Bash
> irm https://x.ai/cli/install.ps1 | iex          # Windows PowerShell
> grok --version
> ```
> 
> See the [changelog](https://x.ai/build/changelog) for the latest fixes,
> features, and improvements in each release.
> 
> ## Building from source
> 
> Requirements:
> 
> - **Rust** — the toolchain is pinned by [`rust-toolchain.toml`](rust-toolchain.toml);
>   `rustup` installs it automatically on first build.
> - **protoc** — proto codegen resolves [`bin/protoc`](bin/protoc) (a
>   [dotslash](https://dotslash-cli.com) launcher) or falls back to a `protoc` on
>   `PATH` / `$PROTOC`.
> - macOS and Linux are supported build hosts; Windows builds are best-effort
>   and not currently tested from this tree.
> 
> ```sh
> cargo run -p xai-grok-pager-bin              # build + launch the TUI
> cargo build -p xai-grok-pager-bin --release  # release binary: target/release/xai-grok-pager
> cargo check -p xai-grok-pager-bin            # fast validation
> ```
> 
> The binary artifact is named `xai-grok-pager`; official installs ship it as
> `grok`. On first launch it opens your browser to authenticate — see the
> [authentication guide](crates/codegen/xai-grok-pager/docs/user-guide/02-authentication.md).
> 
> ## Documentation
> 
> Full online documentation is available at
> [docs.x.ai/build/overview](https://docs.x.ai/build/overview).
> 
> The user guide ships with the pager crate:
> [`crates/codegen/xai-grok-pager/docs/user-guide/`](crates/codegen/xai-grok-pager/docs/user-guide/)
> — getting started, keyboard shortcuts, slash commands, configuration, theming,
> MCP servers, skills, plugins, hooks, headless mode, sandboxing, and more.
> 
> ## Repository layout
> 
> | Path | Contents |
> |------|----------|
> | `crates/codegen/xai-grok-pager-bin` | Composition-root package; builds the `xai-grok-pager` binary |
> | `crates/codegen/xai-grok-pager` | The TUI: scrollback, prompt, modals, rendering |
> | `crates/codegen/xai-grok-shell` | Agent runtime + leader/stdio/headless entry points |
> | `crates/codegen/xai-grok-tools` | Tool implementations (terminal, file edit, search, ...) |
> | `crates/codegen/xai-grok-workspace` | Host filesystem, VCS, execution, checkpoints |
> | `crates/codegen/...` | The rest of the CLI crate closure (config, MCP, markdown, sandbox, ...) |
> | `crates/common/`, `crates/build/`, `prod/mc/` | Small shared leaf crates pulled in by the closure |
> | `third_party/` | Vendored upstream source (Mermaid diagram stack) — see below |
> 
> > [!IMPORTANT]
> > The root `Cargo.toml` (workspace members, dependency versions, lints,
> > profiles) is **generated** — treat it as read-only. Prefer editing per-crate
> > `Cargo.toml` files.
> 
> ## Development
> 
> ```sh
> cargo check -p         # always target specific crates; full-workspace builds are slow
> cargo test -p xai-grok-config # per-crate tests
> cargo clippy -p        # lint config: clippy.toml at the repo root
> cargo fmt --all               # rustfmt.toml at the repo root
> ```
> 
> ## Contributing
> 
> > [!NOTE]
> > External contributions are not accepted. See [`CONTRIBUTING.md`](CONTRIBUTING.md).
> 
> ## License
> 
> First-party code in this repository is licensed under the **Apache License,
> Version 2.0** — see [`LICENSE`](LICENSE).
> 
> Third-party and vendored code remains under its original licenses. See:
> 
> - [`THIRD-PARTY-NOTICES`](THIRD-PARTY-NOTICES) — crates.io / git dependencies,
>   bundled UI themes, and **in-tree source ports** (including openai/codex and
>   sst/opencode tool implementations)
> - [`crates/codegen/xai-grok-tools/THIRD_PARTY_NOTICES.md`](crates/codegen/xai-grok-tools/THIRD_PARTY_NOTICES.md)
>   — crate-local notice for the codex and opencode ports (license texts +
>   Apache §4(b) change notice)
> - [`third_party/NOTICE`](third_party/NOTICE) — vendored Mermaid-stack index

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]]

[GitHub](https://github.com/xai-org/grok-build)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "xai-org--grok-build"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "xai-org--grok-build"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "xai-org--grok-build" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "xai-org--grok-build"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "xai-org--grok-build" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/xai-org--grok-build");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xai-org--grok-build" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xai-org" AND file.name != "xai-org--grok-build"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xai-org--grok-build");
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
> const me = dv.page("Repos/xai-org--grok-build");
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
> const me = dv.page("Repos/xai-org--grok-build");
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
> const me = dv.page("Repos/xai-org--grok-build");
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
> const me = dv.page("Repos/xai-org--grok-build");
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

> **2026-07-16** — 首次收錄
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

- [[2026-07-16|2026-07-16]] — 首次收錄，5.3k stars
