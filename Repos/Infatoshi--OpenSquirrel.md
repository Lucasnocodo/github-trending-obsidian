---
repo: Infatoshi/OpenSquirrel
url: https://github.com/Infatoshi/OpenSquirrel
owner: Infatoshi
owner_type: User
language: Rust
license: MIT
description: "For people who get distracted by agents. A native Rust/GPUI control plane for running Claude Code, Codex, Cursor, and OpenCode side by side — because if you're going to be squirrely, you might as well optimize for it."
homepage: ""
stars: 1343
stars_per_day: 46
forks: 83
open_issues: 4
created: 2026-03-15
pushed_at: 2026-03-24
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
use_case: "為了讓使用者能夠更有效率地運行多個 AI 編碼代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-25"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 48972
readme_length: 3792
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:1235,2026-03-22:1236,2026-03-23:1270,2026-03-24:1290,2026-03-25:1312,2026-03-26:1316,2026-03-27:1315,2026-03-28:1314,2026-03-29:1315,2026-03-30:1317,2026-03-31:1321,2026-04-01:1326,2026-04-02:1327,2026-04-03:1333,2026-04-04:1336,2026-04-05:1340,2026-04-06:1342,2026-04-07:1341,2026-04-08:1342,2026-04-09:1345,2026-04-10:1344,2026-04-11:1341,2026-04-12:1343,2026-04-13:1343,2026-04-14:1343"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "OpenSquirrel"
  - "Infatoshi/OpenSquirrel"
  - "為了讓使用者能夠更有效率地運行多個 AI 編碼代理。"
---

# OpenSquirrel

**1.3k** stars · **46** stars/天 · 建立 29 天前 · Rust · MIT

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
> 為了讓使用者能夠更有效率地運行多個 AI 編碼代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (46 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 20 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要同時運行多個 AI 編碼代理但不想使用複雜 GUI 的開發者。
> **一句話重點** 這個專案證明了對於多代理編碼，終端機的靈活性遠超過任何固定的 GUI 設計。

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
> **成熟度** archived · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到靈活的多代理管理，值得有一定 Rust 基礎的開發者使用。

> [!abstract] 核心創新
> 這個專案的核心創新在於將多個 AI 編碼代理的管理整合到一個 GPU 渲染的平鋪管理器中。

## 專案簡介

OpenSquirrel 是一個基於 Rust 和 GPUI 的原生 GPU 渲染平鋪管理器，旨在同時運行多個 AI 編碼代理（如 Claude Code、Codex、Cursor 和 OpenCode）。用戶可以透過 SSH 遠端目標機器，並享有持久會話的便利。這個專案的核心賣點在於其自動子代理委派功能，讓用戶能夠在不同的 AI 代理之間進行無縫切換。然而，開發者最終發現，使用終端機的原生 TUI 來處理這些代理的輸出，實際上比創建一個全新的 GUI 更有效率。這是因為終端機已經是用戶熟悉的環境，並且能夠靈活地處理各種指令。

專案的技術實作使用了 Rust 語言，並依賴於 GPUI 進行 GPU 渲染，這使得其在性能上有一定的優勢，但也帶來了開發上的挑戰。與其他類似工具相比，如 CodexBar，OpenSquirrel 提供了一個更為集中的管理界面，但最終發現這樣的設計並不符合用戶的實際需求。使用者可以透過簡單的配置文件來管理多個代理，而不需要額外的 GUI。這個專案在開發過程中遇到的挑戰，讓開發者認識到，對於多代理編碼的工作流程，終端機的靈活性遠超過任何固定的 UI 設計。雖然這個專案已經被歸檔，但它的學習經驗對於未來的開發仍然具有參考價值。

**技術棧**：`Rust 1.85+` · `GPUI`

## 重點功能

- GPU 渲染 — 使用 GPUI 提供高效能的圖形渲染。
- 自動子代理委派 — 透過簡單的配置文件自動管理多個 AI 代理。
- SSH 遠端管理 — 支持透過 SSH 遠端控制多個機器。
- 持久會話 — 允許用戶在不同的會話中保持狀態。
- 多主題支持 — 提供多種主題選擇，滿足不同用戶需求。

## 快速開始

1. 安裝依賴
```bash
cargo build --release
```
2. 運行應用
```bash
cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel-bin
```
3. 啟動應用
```bash
open dist/OpenSquirrel.app
```

## 程式碼範例

```rust
{
  "前置條件": "需要 Rust 1.85+ 和 macOS (Metal GPU)。",
  "指令": "cargo build --release",
  "預期輸出": "編譯成功，生成可執行檔案。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 1343 stars（46/天），forks 83（6.2%），顯示出一定的社群關注度。作者 Infatoshi 之前在 Rust 和 GPU 渲染方面有一定的經驗，這個專案解決了多代理編碼的協調問題，然而最終發現，使用終端機的原生 TUI 更為有效。此專案的關鍵問題在於，使用者不需要額外的 GUI 來管理代理，這一點在開發過程中被充分驗證。這個專案的快速增長可能也受到社群對於 AI 編碼工具需求增加的影響。

## 適合誰使用

**目標受眾**：需要同時運行多個 AI 編碼代理但不想使用複雜 GUI 的開發者。

> [!example] 使用場景
> - 後端工程師用它來同時運行多個 AI 編碼代理，因為這樣可以提高工作效率，減少在不同工具間切換的時間。
> - DevOps 工程師用它來遠端管理多個機器上的 AI 代理，因為它支持 SSH 和持久會話，讓管理變得更簡單。
> - AI 研究人員用它來測試不同的編碼代理，因為它能夠自動委派任務，讓他們專注於結果而不是管理工具。

## 架構分析

OpenSquirrel 的架構基於 Rust 和 GPUI，設計目的是為了提供一個高效能的 GPU 渲染環境來管理多個 AI 編碼代理。其資料流從用戶的指令開始，通過 GPUI 渲染出多個代理的輸出。這樣的設計選擇使得其在性能上有優勢，但也帶來了開發上的複雜性。選擇 Rust 作為開發語言是因為其高效能和安全性，但這也使得開發過程中遇到的挑戰增加。這個專案的擴展性受到其依賴的 GPUI 和 Rust 的限制，未來在面對更複雜的多代理管理需求時，可能需要重新考慮架構設計。

## 技術深入分析

OpenSquirrel 的核心技術機制在於使用 Rust 和 GPUI 來實現 GPU 渲染，這使得其在性能上具有優勢。專案的設計選擇使得用戶能夠同時運行多個 AI 編碼代理，並透過 SSH 進行遠端管理。雖然這樣的設計在理論上是可行的，但實際上開發過程中遇到的挑戰使得每個功能的實現都變得異常困難，特別是在處理 JSON 輸出和渲染的過程中。這導致了開發者對於使用終端機的原生 TUI 的重新評估，認識到其靈活性和高效性。這個專案的技術風險在於未來可能面臨的安全性問題，因為不再主動維護，可能存在未修復的漏洞。在與主流工具的整合上，OpenSquirrel 可能會遇到一些摩擦點，特別是在需要與其他工具鏈（如 CI/CD）進行整合時，可能需要額外的適配層來解決相容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，但由於專案已經不再主動維護，可能會讓新手感到困惑。安裝過程相對順暢，但對於不熟悉 Rust 的用戶來說，可能需要額外的學習時間。整體來說，花 30 分鐘能夠成功運行起來，但需要對 Rust 有一定的了解。

## 優缺點分析

> [!success] 優點
> - 高效能的 GPU 渲染，適合需要即時反饋的應用。
> - 靈活的配置選項，能夠快速調整多代理的運行環境。
> - 支持 SSH 遠端操作，方便用戶管理多個機器。

> [!danger] 缺點
> - 不再主動維護，未來可能面臨安全風險。
> - 對於不熟悉 Rust 的用戶來說，學習曲線較陡。
> - 缺乏 GUI 可能使某些用戶感到不便。

> [!warning] 注意事項
> - 不再主動維護，可能存在未修復的 bug。
> - 僅支持 macOS 和 Linux，Windows 不兼容。
> - 需要對 Rust 有一定的了解才能進行自定義。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多代理管理功能，但主要針對 CLI 工具，使用上更為簡單。 |
| CodexBar | 專注於 token 追蹤，提供更輕量的解決方案，適合不需要 GUI 的用戶。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供更為完整的 GUI 方案，但可能不如終端機靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| CodexBar | 專注於 token 追蹤，使用簡單的 menu bar 應用來顯示多個代理的使用情況。 | 如果只需要追蹤多個 AI 代理的 token 使用情況，而不需要複雜的管理界面。 | low，因為只需安裝一個輕量級的應用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多代理管理功能，但主要針對 CLI 工具，使用上更為簡單。 | 如果你的工作流程主要依賴 CLI 工具，而不需要圖形界面。 | medium，因為需要重新適應 CLI 工具的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenSquirrel** | **CodexBar** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 token 追蹤，使用簡單的 menu bar 應用來顯示多個代理的使用情況。 | 提供類似的多代理管理功能，但主要針對 CLI 工具，使用上更為簡單。 |
> | 遷移成本 | - | low，因為只需安裝一個輕量級的應用。 | medium，因為需要重新適應 CLI 工具的使用方式。 |
> | 適用場景 | 主要場景 | 如果只需要追蹤多個 AI 代理的 token 使用情況，而不 | 如果你的工作流程主要依賴 CLI 工具，而不需要圖形界面。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | archived |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，因為專案已經不再主動維護，可能存在安全風險。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 不再主動維護，可能存在未修復的 bug
  - 解法：使用者需自行修復或尋找替代方案
- [MEDIUM] 對於不熟悉 Rust 的用戶來說，學習曲線較陡
  - 解法：建議先學習 Rust 基礎再進行使用
- [low] 缺乏 GUI 可能使某些用戶感到不便
  - 解法：使用終端機的原生 TUI 進行操作

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要同時管理多個 AI 代理 | 適合 | 能夠靈活地配置多個代理，並透過 SSH 遠端管理。 |
| 大型企業需要穩定的多代理管理方案 | 不適合 | 專案已經不再主動維護，存在安全風險。 |
| 個人開發者希望快速測試多個 AI 代理 | 普通 | 雖然能夠運行多個代理，但需要一定的 Rust 知識。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到靈活的多代理管理，值得有一定 Rust 基礎的開發者使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：專案不再主動維護，可能存在未修復的安全漏洞，使用時需謹慎。

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
| Forks | 83 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-03-24 |
| 建立日期 | 2026-03-15 |
| Repo 大小 | 47.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Infatoshi/OpenSquirrel) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `gpui` `async-channel` `serde` `serde_json` `toml` `anyhow` `gpui-terminal` `portable-pty` `ctrlc` `libc`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Infatoshi](https://github.com/Infatoshi) | 17 |

## 社群與生態

**社群活躍度**：社群活躍度一般，開發者在最近一周有持續的更新。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-24）
> **活躍天數** 4 天 · **最新 commit** Archive project: update README with learnings, fix assistant message parsing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Infatoshi/OpenSquirrel/issues/9) | Screenshots? | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> OpenSquirrel
> 
>   This project is no longer actively maintained.
>   Fork it, customize it, make it yours.
> 
>   
> 
> ## What it was
> 
> A native, GPU-rendered tiling manager for AI coding agents. Rust + GPUI. Run Claude Code, Codex, Cursor, Gemini, and OpenCode side by side with automatic sub-agent delegation, remote machine targeting via SSH, and persistent sessions.
> 
> ## Why it's archived
> 
> After a week of building this, I arrived at a simpler conclusion: **you don't need a custom GUI to orchestrate AI agents.**
> 
> Here's what I learned:
> 
> **The terminal already won.** Every AI coding CLI (Claude Code, Codex, Cursor Agent, Gemini CLI, OpenCode) ships with a polished terminal TUI. Building a Rust GUI that parses their JSON output and re-renders it will always be worse than just... using the native TUI. Users are comfortable in their terminal. They don't want a new window.
> 
> **Delegation is a prompt, not a product.** The entire coordinator/worker delegation system -- spawning sub-agents across runtimes, collecting results, feeding them back -- can be done with 4 lines in a `CLAUDE.md` file telling the model to use `cursor agent --print` or `codex exec` via Bash. No orchestration daemon needed. No hooks. No middleware. Claude Code's Agent tool already handles internal delegation. For external CLIs, just run them headless.
> 
> **Token tracking already exists.** [CodexBar](https://github.com/steipete/CodexBar) sits in your macOS menu bar and tracks usage across Claude, Codex, Cursor, Gemini, and more by reading their local data files. No need to build this into a GUI.
> 
> **The architectural mismatch.** Using Claude Code (a Node/Bun process) to build and iterate on a Rust GPU application through JSON stream parsing is a bizarre feedback loop. The model is trained on terminal interactions, not on debugging GPUI render pipelines. Every feature took 10x longer than it should have because the tooling fought the workflow.
> 
> **Models aren't good enough yet for opinionated UX.** Nobody knows the right workflow for multi-agent coding. Building a rigid UI around one workflow locks you in. The terminal is infinitely flexible. Wait for patterns to emerge before building products around them.
> 
> ## What works instead
> 
> The setup I actually use now:
> 
> - **Terminal**: Ghostty (or whatever you prefer)
> - **Agents**: Run them directly -- `claude`, `codex`, `cursor agent`, `gemini`
> - **Delegation**: Instructions in `~/.claude/CLAUDE.md` telling Claude to run external CLIs via Bash when asked
> - **Token tracking**: CodexBar (menu bar app, reads local files)
> - **Multi-agent**: Just open multiple terminal tabs/panes
> 
> That's it. No custom software. The orchestration layer is a config file.
> 
> ## If you want to use or fork this
> 
> The code works. The `legacy` branch at commit `78f1bf2` has the full feature set:
> 
> - Multi-agent grid with auto-layout
> - Coordinator/worker delegation across runtimes
> - Remote SSH targeting with tmux session persistence
> - Reusable UI components (FuzzyList, modal builders, selectable rows)
> - Model picker with fuzzy search (Cmd+M)
> - Token/cost tracking per agent
> - 7 themes, persistent state, MCP integration
> - 93 passing tests
> 
> ### Build & run
> 
> ```bash
> cargo build --release
> # Run as .app bundle:
> cp target/release/opensquirrel dist/OpenSquirrel.app/Contents/MacOS/OpenSquirrel-bin
> open dist/OpenSquirrel.app
> ```
> 
> Requires Rust 1.85+ and macOS (Metal GPU). Linux (Vulkan) compiles and tests pass.
> 
> ### Config
> 
> `~/.osq/config.toml` -- runtimes, machines, MCPs, themes, settings.
> 
> ### Supported runtimes
> 
> | Runtime | CLI | Mode |
> |---------|-----|------|
> | Claude Code | `claude` | Persistent multi-turn |
> | Codex | `codex` | One-shot |
> | Cursor Agent | `cursor agent` | One-shot |
> | Gemini CLI | `gemini` | One-shot |
> | OpenCode | `opencode` | One-shot |
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[多模態]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

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
> const concepts = ["CLI/TUI","多模態","自動化"];
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
