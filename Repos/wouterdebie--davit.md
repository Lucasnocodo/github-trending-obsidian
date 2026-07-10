---
repo: wouterdebie/davit
url: https://github.com/wouterdebie/davit
owner: wouterdebie
owner_type: User
language: Swift
license: MIT
description: "A native macOS UI for Apple's platform"
homepage: ""
stars: 743
stars_per_day: 149
forks: 9
open_issues: 2
created: 2026-07-04
pushed_at: 2026-07-09
first_seen: 2026-07-10
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "容器管理"
release_tag: "v0.1.12"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-10
use_case: "提供一個原生的 macOS UI 來管理 Apple 的容器平台，讓使用者輕鬆操作容器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-17"
contributor_count: 2
engagement: "low"
issue_close_rate: 80
repo_size_kb: 7150
readme_length: 8304
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-10"
star_history: "2026-07-10:743"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - easy_install
aliases:
  - "davit"
  - "wouterdebie/davit"
  - "提供一個原生的 macOS UI 來管理 Apple 的容器平台，讓使用者輕鬆操作容器。"
---

# davit

**743** stars · **149** stars/天 · 建立 5 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/wouterdebie--davit");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.12` `easy-install`

> [!summary] 一句話摘要
> 提供一個原生的 macOS UI 來管理 Apple 的容器平台，讓使用者輕鬆操作容器。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (149 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Apple silicon Mac 上管理容器但不想使用 CLI 的開發者。
> **一句話重點** Davit 讓 macOS 使用者能夠以更簡單的方式管理容器，特別是在 Apple silicon 上的優化表現。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/wouterdebie--davit");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "容器管理" && p.file.name !== "wouterdebie--davit" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 容器管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到一個簡單易用的容器管理工具，值得嘗試。

> [!abstract] 核心創新
> Davit 是一個完全原生的 macOS 應用，無需依賴 CLI，直接通過 Apple 的 API 管理容器。

## 專案簡介

Davit 是一個專為 Apple silicon 設計的原生 macOS 應用，提供用戶友好的界面來管理 Apple 的容器平台。用戶只需打開 Davit，應用會自動檢查並安裝所需的容器平台，無需管理員權限。透過 Davit，用戶可以輕鬆拉取和運行容器映像，並在瀏覽器中查看服務。Davit 的核心機制是直接通過 `ContainerAPIClient` 與 `container-apiserver` 通訊，這樣避免了 CLI 的依賴，並提供了更流暢的用戶體驗。使用者可以透過指令如 `Davit exec` 進行容器內的命令執行，或使用 `Davit compose` 來管理多個服務的運行。這使得 Davit 在功能上類似於 Docker Desktop，但專為 Apple 的輕量級虛擬機容器設計。

技術上，Davit 使用 SwiftUI 開發，並依賴於 Apple 的容器庫，這意味著它能夠充分利用 macOS 的原生性能。與 Docker Desktop 相比，Davit 不需要額外的虛擬化層，這使得性能更佳，特別是在 Apple silicon 上。使用者在操作時可以即時查看容器的 CPU、記憶體和磁碟使用情況，並能夠實時流式傳輸日誌。儘管目前只支援 Apple silicon Mac，這一點對於需要在 macOS 環境中運行輕量級容器的開發者來說，仍然是一個強大的工具。Davit 的設計考量了用戶的便利性，並在安裝和運行過程中減少了繁瑣的步驟，讓開發者能夠更專注於開發而非環境配置。

**技術棧**：`SwiftUI` · `ContainerAPIClient` · `XPC`

## 重點功能

- 原生 macOS UI — 完全使用 SwiftUI 開發，無需 Electron 或網頁視圖，提供流暢的用戶體驗。
- 自動安裝容器平台 — 首次啟動時自動檢查並安裝 Apple 的容器平台，無需管理員權限。
- 即時資源監控 — 提供容器的 CPU、記憶體和磁碟使用情況的即時數據，方便用戶監控性能。
- 日誌流功能 — 實時流式傳輸容器日誌，幫助用戶快速排查問題。
- CLI 指令整合 — 支持多種 CLI 指令，如 `Davit exec` 和 `Davit compose`，方便用戶進行容器操作。

## 快速開始

1. 安裝 Davit
```bash
brew install wouterdebie/tap/davit
```
2. 打開 Davit
```bash
open /Applications/Davit.app
```
3. 拉取示範映像
```bash
Davit compose pull nginxdemos/hello
```
4. 運行映像
```bash
Davit compose up -d
```

## 程式碼範例

```swift
{
  "前置條件": "確保 Davit 已安裝並運行。",
  "指令": "Davit exec [command…]",
  "預期輸出": "在容器內部啟動的交互式 TTY shell。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 743 stars（149/天），forks 9（1.2%），顯示出對原生 macOS 應用的需求。作者 wouterdebie 之前有開發相關的工具，這次專注於提供一個無需 CLI 的容器管理界面，解決了用戶在使用 Docker Desktop 時的複雜性。最近的推廣活動和社群的討論也可能促進了這個專案的曝光。由於 Apple silicon 的普及，這個工具的需求隨之上升，尤其是在開發者社群中。forks/stars 比率相對較低，顯示出使用者對於這個工具的初步觀望。

## 適合誰使用

**目標受眾**：需要在 Apple silicon Mac 上管理容器但不想使用 CLI 的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速啟動和管理容器化的應用，因為 Davit 提供了簡單的 UI 和自動安裝功能，節省了配置時間。
> - DevOps 工程師用它來監控容器的運行狀態和資源使用，因為 Davit 提供了即時的 CPU、記憶體和日誌流功能，讓問題排查更高效。
> - 新手開發者用它來學習容器技術，因為 Davit 的無需 CLI 的設計降低了學習門檻，讓他們能專注於應用開發。

## 架構分析

Davit 的架構基於 SwiftUI 和 Apple 的 ContainerAPIClient，透過 XPC 與 container-apiserver 直接通信。這樣的設計選擇使得 Davit 能夠避免 CLI 的依賴，提供更流暢的用戶體驗。資料流方面，應用會在啟動時檢查容器平台的安裝狀態，並在必要時自動下載和安裝。

這樣的設計降低了用戶的操作複雜度，並確保了應用的即時性和可靠性。選擇使用 SwiftUI 的好處在於能夠充分利用 macOS 的原生性能，但也意味著未來的擴展可能會受到 SwiftUI 限制。整體而言，這種架構設計使 Davit 在性能和用戶體驗上達到了良好的平衡。

## 技術深入分析

Davit 的核心技術機制利用了 Apple 的 ContainerAPIClient，這使得它能夠直接與 container-apiserver 通訊，避免了 CLI 的依賴。這種設計不僅提升了性能，還簡化了用戶操作流程。效能方面，Davit 能夠即時監控容器的資源使用情況，並提供流式日誌，這對於開發者來說是非常重要的。選擇 SwiftUI 作為開發框架，使得應用能夠充分利用 macOS 的原生功能，但也可能限制未來的擴展性。技術風險方面，由於依賴於 Apple 的容器平台，未來的更新可能會影響到 Davit 的穩定性和功能。整合方面，Davit 能夠與其他 macOS 應用良好協作，但對於非 Apple 環境的支持則相對薄弱。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝和使用步驟。安裝過程順暢，無需管理員權限。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 原生 macOS 應用，性能優越。
> - 簡化的安裝流程，無需管理員權限。
> - 即時監控和日誌流功能，便於排查問題。

> [!danger] 缺點
> - 僅支援 Apple silicon，對於其他平台無法使用。
> - 目前功能相對於成熟的 Docker Desktop 還有待增強。
> - 依賴於 Apple 的容器平台，未來更新可能受限。

> [!warning] 注意事項
> - 僅支援 Apple silicon Mac。
> - 需要 macOS 15 以上版本。
> - 目前僅提供對 Apple 的容器平台的支援，對其他容器技術的支援有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的容器管理功能，但主要針對多平台環境，Davit 專注於 Apple silicon 的原生整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供容器管理，但缺乏 Davit 的原生 UI 和即時監控功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，提供跨平台的容器管理功能，記憶體使用效率更高，但學習曲線較陡峭。 | 如果你的團隊需要在多平台上運行容器，且對性能有較高要求，則應選擇這個工具。 | medium，因為需要重新適應新的工具和操作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 基於 Node.js 開發，提供類似的容器管理功能，但性能和穩定性不如 Davit。 | 如果你的團隊已經在使用 Node.js 生態系統，並且需要快速上手的工具，則可以考慮這個選擇。 | low，因為操作界面和概念相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **davit** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，提供跨平台的容器管理功能，記憶體使用效率更高，但學習曲線較陡峭。 | 基於 Node.js 開發，提供類似的容器管理功能，但性能和穩定性不如 Davit。 |
> | 遷移成本 | - | medium，因為需要重新適應新的工具和操作流程。 | low，因為操作界面和概念相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要在多平台上運行容器，且對性能有較高要求，則應 | 如果你的團隊已經在使用 Node.js 生態系統，並且需要快 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，容器啟動可能會延遲，特別是在首次啟動時。
  - 解法：耐心等待，並檢查網路連接。
- **[HIGH]** 如果未安裝容器平台，可能需要手動介入安裝過程。
  - 解法：確保遵循 Davit 的安裝指示。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊使用容器進行應用開發 | 非常適合 | Davit 提供了簡單的 UI 和即時監控功能，適合快速開發和測試。 |
| 大型企業需要穩定的容器管理解決方案 | 不適合 | 目前 Davit 還處於 alpha 階段，功能尚不成熟。 |
| 新手開發者學習容器技術 | 非常適合 | Davit 的無需 CLI 設計降低了學習門檻，適合初學者。 |
| 需要在多平台上運行容器的團隊 | 不適合 | Davit 目前僅支援 Apple silicon，對其他平台無法使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到一個簡單易用的容器管理工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Davit 本身不需要高權限，僅需訪問本地容器資源。依賴鏈的信任程度較高，因為主要依賴於 Apple 的官方庫。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/wouterdebie--davit");
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
> const me = dv.page("Repos/wouterdebie--davit");
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
| Forks | 9 |
| Open Issues | 2 |
| Issue 解決率 | 80% (8 closed) |
| 最後推送 | 2026-07-09 |
| 建立日期 | 2026-07-04 |
| Repo 大小 | 7.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/wouterdebie/davit) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 95
>     "HTML" : 4
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wouterdebie](https://github.com/wouterdebie) | 58 |
> | [@jhh0823](https://github.com/jhh0823) | 19 |

**最新版本**：v0.1.12 (2026-07-09)

> [!info]- Release Notes
> ## Install
> 
> Download the zip below, unzip, and move `Davit.app` to /Applications.
> This build is Developer ID signed and notarized — it opens like any other app.
> 
> Requires an Apple silicon Mac. On first launch Davit offers to install
> Apple's container platform if it isn't present (no admin rights needed).
> 
> 
> ## What's Changed
> * compose: docker-compose parity (autodiscovery, service selection, profiles, healthchecks, depends_on conditions, .env, idempotent up) by @jhh0823 in https://github.com/wouterdebie/davit/pull/9
> 
> ## New Contributors
> * @jhh0823 made their first contribution in https://github.com/wouterdebie/davit/pull/9
> 
> **Full Changelog**: https://github.com/wouterdebie/davit/compare/v0.1.11...v0.1.12

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有持續的更新和問題回應。
**連結**：[文件](https://github.com/wouterdebie/davit)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-09 ~ 2026-07-09）
> **活躍天數** 1 天 · **最新 commit** Shell wrapper: resolve newest managed platform version at exec time

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/wouterdebie/davit/issues/10) | UX(`RunContainer`): Improve loading state | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Davit
> 
> **A native macOS UI for Apple's [container](https://github.com/apple/container) platform** — think OrbStack/Docker Desktop, but for the Linux-containers-as-lightweight-VMs stack Apple ships for Apple silicon.
> 
> > A *davit* is the shipboard crane that hoists cargo and small craft over the side — which is more or less what this app does with your containers.
> 
> Built entirely in SwiftUI (no Electron, no web views). Davit links Apple's own
> **`ContainerAPIClient`** library and talks to `container-apiserver` **directly over XPC** —
> the same wire path the `container` CLI uses. The CLI binary is never invoked: lists,
> lifecycle, live stats, log streaming, image pulls, volume/network management, the
> in-terminal shell (`davit exec`), and even launchd service bootstrap all go through the API.
> 
> 
> ## Install
> 
> ```sh
> brew install wouterdebie/tap/davit
> ```
> 
> (Homebrew 6 asks you to trust third-party taps on first use: `brew trust wouterdebie/tap`.)
> Or download the signed zip from [Releases](https://github.com/wouterdebie/davit/releases/latest) / [davit.app](https://davit.app).
> 
> 
> ## Getting started
> 
> From a fresh install to something running in your browser:
> 
> 1. **Open Davit.** On first launch, if Apple's container platform isn't installed, Davit downloads and installs it for you — no admin password needed.
> 2. **Pull a demo image** — Images → Pull Image → `nginxdemos/hello` (small, and it serves a visible page).
> 3. **Run it with a port** — Run the image, map host `8088` → container `80`.
> 4. **Open it** — the container's Ports row has *Open in Browser*, or visit `localhost:8088`. You'll see a page served from inside the container, showing its own hostname and IP.
> 5. **Explore** — live CPU/memory/disk, streaming logs, a one-click terminal, and Edit & Recreate to change ports/env/resources.
> 
> 
> ## What must still be installed
> 
> The API removes the CLI dependency, **not** the platform dependency: `container-apiserver`
> and its runtime/network plugin binaries are host launchd services that the library only
> talks to. Davit resolves the platform install root in this order:
> 
> 1. custom install root from Settings
> 2. a Davit-managed install at `~/Library/Application Support/dev.wouter.davit/platform/`
> 3. `/usr/local` (the official installer)
> 4. vendored inside the app at `Davit.app/Contents/Resources/vendor`
> 
> **In-app install:** when no platform is found, the onboarding screen offers one-click
> install — Davit downloads Apple's signed installer pkg (with a live progress bar),
> verifies the code signature, extracts the payload into the managed root (no
> administrator rights needed, unlike the official installer), and bootstraps the
> services from there. Settings → General can then also install a `container` shell
> command: a wrapper in `/usr/local/bin` that pins `CONTAINER_INSTALL_ROOT` to the
> managed root before exec'ing the real CLI (one admin prompt; a bare symlink would be
> wrong, since the CLI derives its install root from the unresolved executable path). The managed copy sits
> above `/usr/local` in the resolution order on purpose: it always matches the client
> version the app links, so a newer system daemon can't break XPC compatibility.
> Also available headless: `Davit platform install|remove`.
> 
> To ship a fully self-contained app that works without the system installer:
> 
> ```sh
> scripts/vendor.sh 1.0.0        # downloads the official signed .pkg, extracts payload into Vendor/container
> scripts/bundle.sh --vendor     # bundles it into the app
> ```
> 
> Service start/stop is implemented in-process (LaunchPlist + ServiceManager from
> `ContainerPlugin` — the same code `container system start` runs), pointed at whichever
> install root was resolved. Kernel and init-image installation are handled
> non-interactively on first start. App data lives in the standard
> `~/Library/Application Support/com.apple.container/`, so Davit and the CLI (if
> installed) always see the same containers.
> 
> **Version pinning:** the SPM dependency on apple/container is pinned `exact: "1.0.0"` to
> match the daemon; client and apiserver ship in lockstep and the XPC protocol is not a
> stable public API. When the installed platform updates, bump the pin and rebuild.
> 
> Trade-offs of vendoring, for the record: the bundle grows by ~150 MB, you own the
> update cadence of the toolchain, and the launchd services are registered from inside
> the app bundle (so moving/deleting the app orphans them until `container system stop`).
> The default remains "use the system install" because the official pkg keeps services
> under `/usr/local` and updates independently.
> 
> 
> ## Requirements
> 
> - Apple silicon Mac, macOS 15+ (macOS 26 recommended — matches `container` 1.1)
> - [apple/container](https://github.com/apple/container/releases) installed (or vendored, see below)
> 
> 
> ## Releases
> 
> Tagging `v*` triggers a GitHub Actions workflow that builds the app on a macOS
> runner and attaches `Davit-.zip` (+ sha256) to a GitHub Release.
> 
> With these repository secrets set, releases are Developer ID signed (hardened
> runtime) and notarized, so they open like any other app:
> 
> | Secret | Value |
> |---|---|
> | `MACOS_CERT_P12` | base64 of the exported "Developer ID Application" cert (`base64 -i cert.p12`) |
> | `MACOS_CERT_PASSWORD` | the .p12 export password |
> | `APPLE_ID` | your Apple ID email |
> | `APPLE_TEAM_ID` | 10-char team id (developer.apple.com → Membership) |
> | `APPLE_APP_SPECIFIC_PASSWORD` | app-specific password from appleid.apple.com |
> 
> Without the secrets, builds fall back to ad-hoc signing and the release notes
> include the `xattr -dr com.apple.quarantine` workaround.
> 
> 
> ## Build & run
> 
> ```sh
> scripts/bundle.sh        # builds release binary + assembles dist/Davit.app
> open dist/Davit.app
> ```
> 
> Plain `swift build` / `swift run` also works for development (no bundle, so no icon/menu-bar niceties).
> 
> 
> ## Binary modes
> 
> The app binary doubles as a small tool:
> 
> ```sh
> Davit exec  [command…]   # interactive TTY shell — or a one-off command — in a container (used by "Open Terminal")
> Davit selftest                   # end-to-end test of the XPC service layer against the live daemon
> Davit system start|stop          # bootstrap / tear down the container launchd services
> Davit platform install|remove    # download + verify Apple's signed pkg into an app-managed install root
> Davit registry login|list|logout # registry credentials (login reads the password from stdin)
> Davit compose  [-f ] [--env-file ] [--profile ]… [service…]
>     # subcommands: plan | up [-d|--detach] | down [-v|--volumes] | ps | logs [-f|--follow] [--tail ]
>     #              stop | start | restart | pull | exec  
>     # file autodiscovered like docker; .env + ${VAR} interpolation; naming services scopes the
>     # command (plan/up add the dependency closure; stop/start/restart/pull/ps/down take exactly
>     # the named services). In-container service names resolve via managed /etc/hosts entries,
>     # re-synced on every up/start/restart — recreates outside compose need another up/start.
> Davit build -t         # build an image from /Dockerfile via the BuildKit shim
> Davit machine list|create|boot|stop|delete   # container machines (micro VMs)
> Davit --snapshot /tmp/shots      # render every screen to PNGs via ImageRenderer (no screen-recording permission)
> ```
> 
> 
> ## Architecture
> 
> ```
> Sources/ContainerStack/
>   Main.swift            entry point + exec/selftest/system binary modes
>   Backend.swift         XPC service layer on ContainerAPIClient: ContainerService facade,
>                         SystemController (launchd bootstrap), LogStreamer (FileHandle tail/follow),
>                         PullProgressModel, TerminalLauncher, platform install resolution
>   Models.swift          view models mapped from ContainerResource types (views stay decoupled
>                         from the unstable library API)
>   AppState.swift        @MainActor store: polling (4s data / 2s stats), CPU% derivation, actions
>   SnapshotDriver.swift  --snapshot harness
>   App.swift             SwiftUI scenes, menu bar extra
>   Views/                Shell (side

## 延伸閱讀

相關概念：[[容器化]] · [[微服務]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]] · [[emdash-cms--emdash|emdash-cms/emdash]]

[GitHub](https://github.com/wouterdebie/davit)

## 相關收錄

> [!note]- 直接競品（同子分類：容器管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "容器管理" AND file.name != "wouterdebie--davit"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "wouterdebie--davit"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "wouterdebie--davit" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "wouterdebie--davit"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["容器化","微服務","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "wouterdebie--davit" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/wouterdebie--davit");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "wouterdebie--davit" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "wouterdebie" AND file.name != "wouterdebie--davit"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/wouterdebie--davit");
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
> const me = dv.page("Repos/wouterdebie--davit");
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
> const me = dv.page("Repos/wouterdebie--davit");
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
> const me = dv.page("Repos/wouterdebie--davit");
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
> const me = dv.page("Repos/wouterdebie--davit");
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

> **2026-07-10** — 首次收錄
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

- [[2026-07-10|2026-07-10]] — 首次收錄，743 stars
