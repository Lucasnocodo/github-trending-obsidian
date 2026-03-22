---
repo: Infatoshi/OpenSquirrel
url: https://github.com/Infatoshi/OpenSquirrel
owner: Infatoshi
owner_type: User
language: Rust
license: MIT
description: "For people who get distracted by agents. A native Rust/GPUI control plane for running Claude Code, Codex, Cursor, and OpenCode side by side — because if you're going to be squirrely, you might as well optimize for it."
homepage: ""
stars: 1236
stars_per_day: 206
forks: 74
open_issues: 4
created: 2026-03-15
pushed_at: 2026-03-18
first_seen: 2026-03-22
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "多代理管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-22
use_case: "為分心的開發者提供一個原生的 Rust/GPUI 控制平面，讓多個 AI 編碼代理能夠並行運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 48861
readme_length: 3709
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:1235,2026-03-22:1236"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "OpenSquirrel"
  - "Infatoshi/OpenSquirrel"
  - "為分心的開發者提供一個原生的 Rust/GPUI 控制平面，讓多個 AI 編碼代理能夠並行運行。"
---

# OpenSquirrel

**1.2k** stars · **206** stars/天 · 建立 6 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/Infatoshi--OpenSquirrel");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 為分心的開發者提供一個原生的 Rust/GPUI 控制平面，讓多個 AI 編碼代理能夠並行運行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (206 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 上高效運行多個 AI 編碼代理的開發者。
> **一句話重點** OpenSquirrel 的設計讓多個 AI 編碼代理的管理變得簡單而高效，特別適合需要同時運行多個工具的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理管理" && p.file.name !== "Infatoshi--OpenSquirrel" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的多代理管理，值得考慮。

> [!abstract] 核心創新
> 提供一個 GPU 渲染的多代理管理平台，無需 Electron。

## 專案簡介

OpenSquirrel 是一個用 Rust 和 GPUI 開發的原生控制平面，專為同時運行多個 AI 編碼代理而設計。用戶可以在一個響應式的平鋪佈局中運行 Claude Code、Codex、Cursor 和 OpenCode，並且這些代理會根據數量自動排列。其核心機制是透過主代理（Opus）自動生成子代理來處理特定任務，返回精簡的結果而非完整的對話紀錄，這樣可以提高效率。用戶還可以透過 SSH 連接本地或遠端機器，並在 `~/.osq/config.toml` 中配置機器設定。這個工具的賣點在於其持久會話功能，能夠在應用重啟後保留代理狀態、對話紀錄和提示，並且支持結構化輸出解析，這使得用戶能夠更好地管理和使用多個代理。

使用者只需執行 `cargo build --release` 和 `./target/release/opensquirrel` 來啟動，並且支持 macOS 的 GPU 渲染。其設計選擇了 GPUI 作為 UI 框架，這使得其在性能上表現優異，特別是在圖形渲染方面。相較於其他工具，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，OpenSquirrel 提供了更強的多代理管理能力和持久會話功能，適合需要高效能和多任務處理的開發者。這個工具的社群活躍度尚可，雖然目前有一些開放的問題，但其活躍的開發和更新顯示出潛在的穩定性。對於希望在 macOS 環境中高效運行多個 AI 編碼代理的開發者來說，OpenSquirrel 是一個值得考慮的選擇。

**技術棧**：`Rust 2024` · `GPUI 0.2` · `async-channel 2`

## 重點功能

- 多代理平鋪佈局 — 同時運行多個代理，根據數量自動排列。
- 協調者/工作者委派 — 主代理自動生成子代理以處理特定任務，返回精簡結果。
- 遠端機器目標 — 支持透過 SSH 連接本地或遠端機器，配置於 `~/.osq/config.toml`。
- 持久會話 — 代理狀態和對話紀錄在應用重啟後保留。
- 結構化輸出解析 — 解析所有運行時的 `stream-json` 輸出，支持自定義 Markdown 渲染。

## 快速開始

1. 安裝 Rust 工具鏈
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
2. 構建專案
```bash
cargo build --release
```
3. 運行應用
```bash
./target/release/opensquirrel
```

## 程式碼範例

```rust
{
  "前置條件": "已安裝 Rust 工具鏈和 macOS 環境",
  "指令": "./target/release/opensquirrel",
  "預期輸出": "啟動 OpenSquirrel 應用，顯示多代理管理界面"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1236 stars（206/天），forks 74（6.0%），顯示出不錯的增長潛力。作者 Infatoshi 之前在開源社群中活躍，這個專案解決了多代理同時運行的需求，之前的工具往往無法有效管理多個 AI 代理的狀態和輸出。雖然沒有明顯的觸發事件，但其獨特的功能組合吸引了不少開發者的注意。GPUI 的使用使得這個工具在性能上有了顯著提升，這在目前的技術生態中是相對少見的。forks/stars 比率在 6% 的範圍內，顯示出一些開發者正在實際使用和修改這個工具。

## 適合誰使用

**目標受眾**：需要在 macOS 上高效運行多個 AI 編碼代理的開發者。

> [!example] 使用場景
> - 後端工程師用它來同時運行多個 AI 編碼代理，因為這樣可以提高開發效率，避免在不同工具間切換的時間浪費。
> - DevOps 工程師用它來管理遠端伺服器上的多個 AI 工具，因為它支持 SSH 連接，能夠在一個界面中完成多項任務。
> - AI 研究人員用它來進行多任務實驗，因為持久會話功能能夠保留過去的對話紀錄，方便後續分析。

## 架構分析

OpenSquirrel 的架構基於 Rust 和 GPUI，設計為一個輕量級的應用，約 7,200 行代碼。其主要組件包括 `src/main.rs` 負責 UI 和代理生命週期管理，`src/lib.rs` 處理行分類和 Markdown 解析，並且有 30 個集成測試確保功能穩定。選擇 GPUI 作為 UI 框架是因為其性能優越，特別是在圖形渲染方面，這使得應用在處理多個代理時依然流暢。

這樣的設計選擇雖然提高了性能，但也增加了學習曲線，特別是對於不熟悉 Rust 的開發者來說。整體架構支持擴展性，但在高負載情況下，可能會遇到性能瓶頸，特別是在多個代理同時運行時。整合到現有的開發流程中相對簡單，但仍需考慮到 macOS 環境的特定配置。

這樣的設計使得 OpenSquirrel 在多代理管理上具有獨特的優勢。

## 技術深入分析

OpenSquirrel 的核心技術機制基於 Rust 語言和 GPUI 框架，這使得其在性能上有顯著優勢。其使用了 GPU 渲染技術，能夠在 macOS 上提供流暢的用戶界面，這在多代理管理的場景中尤為重要。應用能夠處理的資料量取決於系統資源，尤其是 GPU 性能，這意味著在高負載情況下可能會出現性能瓶頸。設計上，選擇 Rust 作為開發語言是因為其內存安全性和高效能，這對於需要長時間運行的應用來說至關重要。依賴樹相對簡單，主要依賴於 GPUI 和一些輔助庫，這降低了潛在的供應鏈風險。技術風險方面，隨著使用者數量的增加，可能會面臨的問題包括性能優化和錯誤處理的挑戰。整合到現有的開發流程中相對容易，特別是對於已經在使用 Rust 的團隊，但對於不熟悉 Rust 的開發者來說，學習成本可能會較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝指令，安裝過程相對順暢，但需要用戶熟悉 Rust 環境。沒有提供詳細的入門指南，對於新手來說可能需要額外的學習時間。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - GPU 渲染提供流暢的用戶體驗。
> - 持久會話功能使得用戶能夠隨時恢復工作進度。
> - 自動代理委派提高了多任務處理的效率。

> [!danger] 缺點
> - 目前僅支援 macOS，限制了使用範圍。
> - 配置文件的設置對新手來說可能較為複雜。
> - 開放的問題數量相對較少，社群支持尚在發展中。

> [!warning] 注意事項
> - 僅支援 macOS 環境，需使用 Metal GPU。
> - 目前僅有基本的錯誤處理，可能會在某些情況下崩潰。
> - 對於新用戶，配置文件的設置可能需要一些時間來熟悉。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，而 OpenSquirrel 專注於多代理管理，適合需要同時運行多個 AI 工具的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據傳輸，而 OpenSquirrel 提供了多代理的持久會話和自動委派功能，適合需要高效能的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 Telegram 的 WebSocket 代理，而 OpenSquirrel 專注於多代理管理，適合需要同時運行多個 AI 工具的場景。 | 如果你的工作主要集中在 Telegram 應用的自動化上，tg-ws-proxy 會是更合適的選擇。 | low，因為兩者的使用場景不同，遷移不會影響現有工作流。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NemoClaw 專注於 AI 模型的訓練和推理，而 OpenSquirrel 提供了多代理的持久會話和自動委派功能。 | 如果你的需求是專注於 AI 模型的訓練和推理，NemoClaw 會是更好的選擇。 | medium，因為需要重新設計工作流以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSquirrel** | **tg-ws-proxy** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要用於 Telegram 的 WebSocket 代理，而 OpenSquirrel 專注於多代理管理，適合需要同時運行多個 AI 工具的場景。 | NemoClaw 專注於 AI 模型的訓練和推理，而 OpenSquirrel 提供了多代理的持久會話和自動委派功能。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，遷移不會影響現有工作流。 | medium，因為需要重新設計工作流以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你的工作主要集中在 Telegram 應用的自動化上，t | 如果你的需求是專注於 AI 模型的訓練和推理，NemoCla |

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

- **[HIGH]** 在 macOS 上運行時可能會遇到 GPU 驅動問題，導致應用崩潰。
  - 解法：確保 GPU 驅動是最新版本，或使用較舊的 macOS 版本。
- [MEDIUM] 配置文件的格式要求嚴格，任何小錯誤都可能導致應用無法啟動。
  - 解法：仔細檢查配置文件，使用範本進行設置。
- [MEDIUM] 多代理同時運行時，可能會出現性能下降的情況。
  - 解法：限制同時運行的代理數量，或升級硬體資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要同時運行多個 AI 編碼代理的開發團隊 | 非常適合 | 其多代理平鋪佈局和持久會話功能能夠有效提高工作效率。 |
| 單一開發者進行 AI 研究 | 適合 | 能夠在一個界面中管理多個工具，方便進行實驗。 |
| 需要在 Windows 環境下運行的開發者 | 不適合 | 目前僅支援 macOS，無法在 Windows 上運行。 |
| 小型團隊進行快速原型開發 | 普通 | 雖然功能強大，但學習曲線可能會影響快速開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的多代理管理，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶的配置文件和狀態資料，依賴鏈相對簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
| Forks | 74 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 47.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Infatoshi/OpenSquirrel) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `gpui` `async-channel` `serde` `serde_json` `toml` `anyhow` `gpui-terminal` `portable-pty` `ctrlc` `libc`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Infatoshi](https://github.com/Infatoshi) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-18）
> **活躍天數** 2 天 · **最新 commit** Add 26 security and edge-case tests from audit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Infatoshi/OpenSquirrel/issues/9) | Screenshots? | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> OpenSquirrel
> 
> Native, GPU-rendered control plane for AI coding agents. Rust + GPUI. No Electron.
> 
> Run Claude Code, Codex, Cursor, and OpenCode side by side with automatic sub-agent delegation, remote machine targeting via SSH, and persistent multi-turn sessions.
> 
> ## What it does
> 
> - **Multi-agent grid** — Run multiple agents simultaneously in a responsive tiled layout. Agents auto-arrange based on count (1=full, 2=split, 4=2×2, etc).
> - **Coordinator/worker delegation** — A primary agent (Opus) can automatically spawn sub-agents for focused tasks. Workers return condensed results, not full transcripts.
> - **Remote machine targeting** — Agents can target local or remote machines via SSH + tmux. Configure machines in `~/.osq/config.toml`.
> - **MCP integration** — MCP servers (Playwright, browser-use, etc.) are wired directly to agent CLI args. Select per-agent during setup.
> - **Persistent sessions** — Agent state, transcripts, scroll positions, and pending prompts survive app restarts. Interrupted turns can be resumed.
> - **Structured output parsing** — Parses `stream-json` output from all runtimes. Custom markdown rendering with code blocks, diffs, headings, bullets.
> 
> ## Supported runtimes
> 
> | Runtime | Mode | Permission bypass |
> |---------|------|-------------------|
> | Claude Code | Persistent stdin (multi-turn) | `--dangerously-skip-permissions` |
> | Codex | One-shot per prompt | `--dangerously-bypass-approvals-and-sandbox` |
> | Cursor Agent | One-shot per prompt | `--yolo` |
> | OpenCode | One-shot per prompt | Auto-approved in `run` mode |
> 
> ## Build & run
> 
> ```bash
> cargo build --release
> ./target/release/opensquirrel
> ```
> 
> Requires Rust toolchain and macOS (Metal GPU).
> 
> To run as a proper macOS `.app` bundle with the squirrel icon:
> 
> ```bash
> # Build
> cargo build --release
> 
> # Create .app bundle
> mkdir -p dist/OpenSquirrel.app/Contents/{MacOS,Resources}
> cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel
> cp assets/OpenSquirrel.icns dist/OpenSquirrel.app/Contents/Resources/
> 
> # Launch
> open dist/OpenSquirrel.app
> ```
> 
> Note: macOS `.app` bundles don't inherit your shell PATH. If agents like `claude` or `npx` aren't found, run the binary directly instead of via the `.app` bundle.
> 
> ## Keybinds
> 
> No vim modes — text input is always active. All actions use standard Cmd- keybinds.
> 
> | Key | Action |
> |-----|--------|
> | `Enter` | Send prompt |
> | `Escape` | Dismiss overlay (palette, setup wizard, search) |
> | `Cmd-N` | New agent (opens setup wizard) |
> | `Cmd-K` | Command palette (themes, settings, compact context, kill, views) |
> | `Cmd-F` | Search transcripts |
> | `Cmd-]` / `Cmd-[` | Next / prev pane within group |
> | `Cmd-}` / `Cmd-{` | Next / prev group |
> | `Cmd-V` | Paste from clipboard |
> | `Cmd-=` / `Cmd--` | Zoom in / out |
> 
> **Setup wizard:** Arrow keys to navigate, `Enter` to drill into directories, `Backspace` to go up, `Tab` to advance step, `Shift-Tab` to go back.
> 
> ## Configuration
> 
> Config lives at `~/.osq/config.toml`. Defines runtimes, models, MCP servers, machines, themes, and settings.
> 
> State is persisted at `~/.osq/state.json` (agents, transcripts, scroll positions).
> 
> ## Architecture
> 
> ~7,200 lines of Rust across 3 files:
> - `src/main.rs` — UI, agent lifecycle, rendering, keybinds, persistence
> - `src/lib.rs` — Line classification, markdown parsing, diff summarization, helpers
> - `tests/state_tests.rs` — 30 integration tests covering navigation, scrolling, themes, search, agent lifecycle
> 
> Built on [GPUI](https://crates.io/crates/gpui) (the UI framework from Zed, used as a standalone crate). GPU-rendered via Metal on macOS.
> 
> ## Themes
> 
> midnight, charcoal, gruvbox, solarized-dark, light, solarized-light, ops, monokai-pro
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[多模態]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/Infatoshi/OpenSquirrel)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理管理" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Infatoshi--OpenSquirrel" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Infatoshi--OpenSquirrel" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Infatoshi" AND file.name != "Infatoshi--OpenSquirrel"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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
> const me = dv.page("Repos/Infatoshi--OpenSquirrel");
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

> **2026-03-22** — 首次收錄
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

- [[2026-03-22|2026-03-22]] — 首次收錄，1.2k stars
