---
repo: Infatoshi/OpenSquirrel
url: https://github.com/Infatoshi/OpenSquirrel
owner: Infatoshi
owner_type: User
language: Rust
license: MIT
description: "For people who get distracted by agents. A native Rust/GPUI control plane for running Claude Code, Codex, Cursor, and OpenCode side by side — because if you're going to be squirrely, you might as well optimize for it."
homepage: ""
stars: 1235
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
use_case: "為多個 AI 編碼代理提供原生的 Rust/GPUI 控制平面，讓你能夠並行運行多個代理。"
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
star_history: "2026-03-22:1235"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "OpenSquirrel"
  - "Infatoshi/OpenSquirrel"
  - "為多個 AI 編碼代理提供原生的 Rust/GPUI 控制平面，讓你能夠並行運行多個代理。"
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
> 為多個 AI 編碼代理提供原生的 Rust/GPUI 控制平面，讓你能夠並行運行多個代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (206 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要同時運行多個 AI 編碼代理的開發者，特別是在 macOS 環境中。
> **一句話重點** OpenSquirrel 的設計讓多代理管理變得更高效，特別是在需要同時處理多個任務的情境下。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，4 小時整合，得到高效的多代理管理，值得考慮。

> [!abstract] 核心創新
> 提供 GPU 渲染的多代理管理控制平面，無需 Electron。

## 專案簡介

OpenSquirrel 是一個用於同時運行多個 AI 編碼代理的控制平面，特別適合需要同時處理多個任務的開發者。用戶可以透過 SSH 連接到本地或遠端機器，並在一個響應式的平鋪佈局中運行 Claude Code、Codex、Cursor 和 OpenCode 等代理。這個工具的賣點在於其自動代理委派功能，主代理（Opus）可以自動生成子代理來處理特定任務，並返回精簡的結果而不是完整的對話紀錄。技術上，OpenSquirrel 使用 Rust 和 GPUI 框架進行 GPU 渲染，這使得它在 macOS 上的性能表現優異，並且避免了 Electron 的重量。

與其他工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，OpenSquirrel 提供了更靈活的多代理管理和持久會話功能，能夠在應用重啟後保持代理狀態和對話紀錄。使用者可以透過簡單的命令行指令來構建和運行應用，並且支持多種主題和自定義配置。這個工具的設計考量了用戶的多任務需求，並提供了直觀的鍵盤快捷鍵來提高操作效率。對於需要同時處理多個 AI 代理的開發者來說，OpenSquirrel 是一個非常有價值的選擇。

**技術棧**：`Rust` · `GPUI`

## 重點功能

- 多代理平鋪 — 同時運行多個代理，並根據數量自動排列。
- 代理委派 — 主代理可自動生成子代理以處理特定任務，返回精簡結果。
- 遠端機器目標 — 支持透過 SSH 連接到本地或遠端機器。
- 持久會話 — 代理狀態、對話紀錄和滾動位置在應用重啟後仍然保持。
- 結構化輸出解析 — 支持解析多種運行時的輸出，並提供自定義的 Markdown 渲染。

## 快速開始

1. 安裝 Rust 工具鏈
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
2. 構建 OpenSquirrel
```bash
cargo build --release
```
3. 運行 OpenSquirrel
```bash
./target/release/opensquirrel
```

## 程式碼範例

```rust
{
  "前置條件": "需要 Rust 工具鏈和 macOS (Metal GPU)。",
  "指令": "cargo build --release\n./target/release/opensquirrel",
  "預期輸出": "啟動 OpenSquirrel 應用，顯示多代理管理界面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1235 stars（206/天），forks 74（6.0%），這顯示出相對穩定的關注度。作者 Infatoshi 在開源社群中有一定的影響力，並且這個專案解決了多代理管理的痛點，特別是在需要同時運行多個 AI 編碼代理的情境下。之前的解決方案往往無法有效管理多個代理的狀態和輸出，OpenSquirrel 的設計正好填補了這一空白。社群的反饋也顯示出對於其功能的需求，尤其是持久會話和自動代理委派的特性。這些功能在當前的 AI 開發環境中是非常重要的，特別是在處理複雜任務時。

## 適合誰使用

**目標受眾**：需要同時運行多個 AI 編碼代理的開發者，特別是在 macOS 環境中。

> [!example] 使用場景
> - 後端工程師用它來同時運行 Claude Code 和 Codex，因為這樣可以快速比較不同 AI 的輸出，提升開發效率。
> - AI 研究人員用它來測試多個模型的表現，因為持久會話功能可以讓他們在多次測試中保持上下文，減少重複工作。
> - DevOps 工程師用它來遠端管理多台伺服器上的 AI 代理，因為 SSH 支持讓他們能夠靈活地配置和調整代理的運行環境。

## 架構分析

OpenSquirrel 的架構基於 Rust 和 GPUI，使用 GPU 渲染來提供流暢的用戶界面。應用的主要邏輯分為三個檔案：`src/main.rs` 負責 UI 和代理生命週期管理，`src/lib.rs` 處理行為分類和 Markdown 解析，`tests/state_tests.rs` 包含多達 30 個整合測試以確保功能穩定。選擇 Rust 使得應用在性能和安全性上有良好表現，但也帶來了學習曲線的挑戰。整體架構設計考量了未來的擴展性，能夠輕鬆集成新的代理和功能。

## 技術深入分析

OpenSquirrel 的核心技術機制是基於 Rust 和 GPUI，這使得它能夠利用 GPU 渲染來提供高效的用戶界面。應用的資料流設計允許用戶同時運行多個代理，並透過 SSH 連接到遠端機器，這在開發環境中非常實用。效能方面，因為使用了 GPU 渲染，應用在處理多個代理時的反應速度非常快，並且能夠支持持久會話功能，這對於需要長時間運行的任務尤為重要。選擇 Rust 作為開發語言不僅提高了性能，還增強了應用的安全性，然而這也可能使得新手在學習上遇到挑戰。技術風險方面，未來在擴展支持更多代理類型時，可能會遇到兼容性問題。整合方面，OpenSquirrel 可以與現有的開發工具鏈無縫對接，特別是在 macOS 環境中，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟。安裝過程相對順暢，但需要確保 Rust 工具鏈已正確安裝。文件中有基本的使用範例，對於新手來說，學習曲線可能略陡峭。

## 優缺點分析

> [!success] 優點
> - GPU 渲染提供流暢的用戶體驗。
> - 支持多代理同時運行，提升開發效率。
> - 持久會話功能減少重複工作。

> [!danger] 缺點
> - 僅限於 macOS 平台，無法在其他系統上使用。
> - 需要手動配置，對新手不太友好。
> - 目前支持的代理類型有限。

> [!warning] 注意事項
> - 僅支援 macOS (Metal GPU)。
> - 目前只支持特定的 AI 代理運行時。
> - 需要手動配置 SSH 連接的機器。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的多代理管理功能，但不支持 GPU 渲染，性能上可能不如 OpenSquirrel。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於特定的代理類型，功能較為單一，無法實現 OpenSquirrel 的多樣化代理管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Python 實作，記憶體用量較高，但功能較為簡單。 | 如果你的團隊已經在用 Python 且不需要 GPU 渲染的性能。 | medium，因為需要重新學習 Python 的生態。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於特定代理類型，功能較為單一，無法實現 OpenSquirrel 的多樣化代理管理。 | 如果你的需求僅限於特定代理，且不需要多代理管理的靈活性。 | low，因為功能簡單，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSquirrel** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，記憶體用量較高，但功能較為簡單。 | 專注於特定代理類型，功能較為單一，無法實現 OpenSquirrel 的多樣化代理管理。 |
> | 遷移成本 | - | medium，因為需要重新學習 Python 的生態。 | low，因為功能簡單，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Python 且不需要 GPU 渲染的 | 如果你的需求僅限於特定代理，且不需要多代理管理的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** macOS .app 包不會繼承 shell PATH，可能找不到某些命令
  - 解法：直接運行二進位檔，而非透過 .app 包啟動
- [MEDIUM] 需要手動配置 SSH 連接，對新手不友好
  - 解法：參考官方文檔進行配置
- [MEDIUM] 目前支持的代理類型有限，未來可能需要擴展
  - 解法：持續關注更新，並參與社群討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要同時運行多個 AI 編碼代理的開發團隊 | 非常適合 | 能夠高效管理多個代理，提升開發效率。 |
| 個人開發者需要測試不同的 AI 模型 | 適合 | 支持持久會話，方便進行多次測試。 |
| 小型團隊使用非 macOS 系統 | 不適合 | 僅支援 macOS 平台，無法使用。 |
| 需要快速原型開發的創業團隊 | 普通 | 雖然功能強大，但學習曲線可能影響開發速度。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，4 小時整合，得到高效的多代理管理，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，主要依賴於本地環境的安全性。對於 SSH 連接，需確保使用安全的密鑰管理。

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

**社群活躍度**：社群活躍度中等，最近有更新和問題回應。
**連結**：[文件](https://github.com/Infatoshi/OpenSquirrel)

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

相關概念：[[多模態]] · [[自動化]] · [[CLI/TUI]]

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
> const concepts = ["多模態","自動化","CLI/TUI"];
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
