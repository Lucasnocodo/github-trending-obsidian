---
repo: lcoutodemos/clui-cc
url: https://github.com/lcoutodemos/clui-cc
owner: lcoutodemos
owner_type: User
language: TypeScript
license: MIT
description: "Clui CC — Command Line User Interface for Claude Code"
homepage: ""
stars: 1009
stars_per_day: 144
forks: 134
open_issues: 23
created: 2026-03-16
pushed_at: 2026-03-20
first_seen: 2026-03-22
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-22
use_case: "為 Claude Code 提供的命令行用戶界面，讓使用者能夠以視覺化方式操作。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-30"
contributor_count: 1
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 483
readme_length: 7694
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-22"
star_history: "2026-03-22:968,2026-03-23:1009"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clui-cc"
  - "lcoutodemos/clui-cc"
  - "為 Claude Code 提供的命令行用戶界面，讓使用者能夠以視覺化方式操作。"
---

# clui-cc

**968** stars · **161** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> 為 Claude Code 提供的命令行用戶界面，讓使用者能夠以視覺化方式操作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (161 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 macOS 上使用 Claude Code 並希望有更直觀操作介面的開發者。
> **一句話重點** Clui CC 將命令行的強大功能與直觀的桌面介面結合，讓開發者能更有效率地進行多任務操作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lcoutodemos--clui-cc");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "lcoutodemos--clui-cc" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到更直觀的操作介面，值得嘗試。

> [!abstract] 核心創新
> Clui CC 提供了一個透明的桌面覆蓋層，將 Claude Code 的命令行功能視覺化，並加入了多標籤和權限審核的功能。

## 專案簡介

Clui CC 是一個針對 Claude Code 的命令行用戶界面，旨在提供更直觀的操作體驗。使用者可以透過透明的浮動介面來進行多標籤會話，每個標籤都獨立運行 `claude -p` 進程，並且可以即時審核和批准工具調用。這個設計讓使用者能夠在不離開應用的情況下，快速訪問過去的會話和安裝插件。其核心機制是將 UI 輸入轉換為後端的 NDJSON 流，並透過 HTTP hooks 進行權限審核。這樣的設計不僅保留了命令行的強大功能，還提供了更友好的桌面使用體驗，特別適合需要頻繁進行工具調用的開發者。主要指令包括 `./commands/start.command` 用於啟動應用，並可使用 `⌥ + Space` 切換浮動介面，讓操作更加便捷。

**技術棧**：`TypeScript` · `Electron` · `React` · `Node.js`

## 重點功能

- 浮動覆蓋 — 透明的點擊穿透窗口，使用 `⌥ + Space` 切換顯示。
- 多標籤會話 — 每個標籤獨立運行 `claude -p` 進程，保持獨立的會話狀態。
- 權限審核 UI — 通過 PreToolUse HTTP hooks 審核工具調用，確保安全性。
- 會話歷史 — 瀏覽和恢復過去的 Claude Code 會話。
- 技能市場 — 直接從 Clui CC 安裝插件，無需離開應用。
- 語音輸入 — 使用 Whisper 進行本地語音轉文字。
- 文件和截圖附件 — 直接粘貼圖片或附加文件。
- 雙主題 — 支援深色/淺色模式，並可跟隨系統設置。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/lcoutodemos/clui-cc.git
```
2. 進入目錄
```bash
cd clui-cc
```
3. 執行安裝命令
```bash
./commands/setup.command
```
4. 啟動應用
```bash
./commands/start.command
```
5. 使用快捷鍵顯示/隱藏浮動介面
```bash
⌥ + Space
```

## 程式碼範例

```ts
{
  "前置條件": "需要在 macOS 上安裝 Node.js 和 Claude Code CLI。",
  "指令": "./commands/start.command",
  "預期輸出": "啟動 Clui CC 應用並顯示浮動介面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 968 stars（161/天），forks 129（13.3%），顯示出不錯的增長潛力。作者 lcoutodemos 是一位活躍的開發者，專注於提升 Claude Code 的使用體驗。這個工具解決了使用 CLI 時缺乏可視化操作的痛點，讓開發者能夠更有效地管理會話和工具調用。社群對於這個工具的反應熱烈，特別是對於其多標籤和權限審核的功能。技術上，Clui CC 利用 Electron 和 React 框架，這使得它能夠在 macOS 上提供流暢的使用體驗。

## 適合誰使用

**目標受眾**：需要在 macOS 上使用 Claude Code 並希望有更直觀操作介面的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 macOS 上快速管理 Claude Code 的多個會話，因為它的多標籤設計讓他能夠同時處理多個任務，提升工作效率。
> - AI 開發者用它來即時審核工具調用，因為內建的權限審核介面讓他能夠在執行之前確認每個操作，避免潛在的錯誤。
> - 產品經理用它來查看和回顧過去的 Claude Code 會話，因為它的會話歷史功能讓他能夠輕鬆找到之前的討論和決策依據。

## 架構分析

Clui CC 採用 Electron 作為桌面應用框架，結合 React 提供前端界面。每個標籤會話透過 `claude -p` 進程獨立運行，這樣設計使得每個會話都能保持獨立狀態，並且可以隨時恢復。使用 HTTP hooks 來處理工具調用的權限審核，這樣的設計增加了安全性，避免了不必要的錯誤。整體架構的選擇使得應用能夠在本地運行，無需依賴雲端服務，這樣的設計也減少了潛在的延遲和隱私風險。由於使用了 Electron，這也意味著應用的跨平台能力受到限制，未來擴展到其他操作系統可能需要重構部分代碼。

## 技術深入分析

Clui CC 的核心技術機制是基於 Electron 和 React 的桌面應用架構，利用 Node.js 進行後端處理。每個標籤會話透過 `claude -p --output-format stream-json` 進程獨立運行，這樣的設計使得每個會話都能保持獨立的狀態，並且可以隨時恢復。NDJSON 事件流由 `RunManager` 解析，並由 `EventNormalizer` 正規化，確保數據的一致性。整體架構的選擇使得應用能夠在本地運行，無需依賴雲端服務，這樣的設計也減少了潛在的延遲和隱私風險。由於使用了 Electron，這也意味著應用的跨平台能力受到限制，未來擴展到其他操作系統可能需要重構部分代碼。對於資源需求，應用在運行時會消耗一定的 CPU 和記憶體，但具體數字未提供，建議在開發環境中進行性能測試以獲取更準確的數據。整合方面，Clui CC 可以與現有的 CLI 工具鏈無縫配合，並且支援在 CI/CD pipeline 中使用，但具體的整合方式可能需要根據實際情況進行調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指令，對於新手來說相對友好。安裝過程中可能會遇到 macOS 的安全設置問題，但有提供解決方案。整體上，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供直觀的多標籤會話管理，提升使用效率。
> - 內建權限審核功能，增強操作安全性。
> - 支持本地語音輸入，提升交互體驗。

> [!danger] 缺點
> - 僅限於 macOS，無法在其他操作系統使用。
> - 需要依賴 Claude Code CLI，無法獨立運行。
> - 目前缺乏應用日誌，難以進行錯誤排查。

> [!warning] 注意事項
> - 僅支援 macOS，無法在 Windows/Linux 上運行。
> - 需要安裝 Claude Code CLI，無法獨立使用。
> - 使用 `--permission-mode default`，可能影響某些功能的可用性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 界面，但不支援多標籤會話和權限審核功能。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 AI 模型的管理，但缺乏 Clui CC 的可視化操作和插件市場。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 界面，但不支援多標籤會話和權限審核功能。 | 如果需要一個簡單的 CLI 工具，而不需要多標籤或權限管理功能。 | low，因為兩者的使用方式相似。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 AI 模型的管理，但缺乏 Clui CC 的可視化操作和插件市場。 | 如果你的主要需求是管理 AI 模型，而不需要可視化的操作介面。 | medium，因為需要適應不同的操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clui-cc** | **CLI-Anything** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 CLI 界面，但不支援多標籤會話和權限審核功能。 | 專注於 AI 模型的管理，但缺乏 Clui CC 的可視化操作和插件市場。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要適應不同的操作流程。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的 CLI 工具，而不需要多標籤或權限管理功 | 如果你的主要需求是管理 AI 模型，而不需要可視化的操作介面 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者進行測試和探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次啟動時 macOS 可能阻擋應用，需手動允許
  - 解法：前往系統設置中允許應用運行
- [MEDIUM] 缺乏應用日誌，難以排查問題
  - 解法：使用 `npm run doctor` 進行環境檢查
- [MEDIUM] 需要安裝多個依賴，過程繁瑣
  - 解法：仔細按照 README 中的步驟進行安裝

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊使用 Claude Code 進行 AI 開發 | 非常適合 | 多標籤和權限審核功能能夠有效管理多個會話。 |
| 個人開發者希望簡化命令行操作 | 適合 | 提供了可視化的操作介面，提升使用體驗。 |
| 大型企業需要跨平台的解決方案 | 不適合 | 目前僅支援 macOS，無法在其他系統上運行。 |
| 需要快速部署的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到更直觀的操作介面，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Clui CC 本身不需要高權限運行，且不會存取敏感資料，所有操作均在本地進行。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
| Forks | 129 |
| Open Issues | 24 |
| Issue 解決率 | 20% (6 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-16 |
| Repo 大小 | 483 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lcoutodemos/clui-cc) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@phosphor-icons/react` `framer-motion` `node-pty` `react-markdown` `remark-gfm` `zustand` `@tailwindcss/vite` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `autoprefixer` `electron` `electron-builder` `electron-vite` `postcss`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 94
>     "Shell" : 4
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lcoutodemos](https://github.com/lcoutodemos) | 24 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在持續更新和解決問題。
**連結**：[文件](https://github.com/lcoutodemos/clui-cc#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #35 from lcoutodemos/develop

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/lcoutodemos/clui-cc/issues/3) | No application logging — impossible to debug crashes or misb | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Clui CC — Command Line User Interface for Claude Code
> 
> A lightweight, transparent desktop overlay for [Claude Code](https://docs.anthropic.com/en/docs/claude-code) on macOS. Clui CC wraps the Claude Code CLI in a floating pill interface with multi-tab sessions, a permission approval UI, voice input, and a skills marketplace.
> 
> ## Demo
> 
> [](https://www.youtube.com/watch?v=NqRBIpaA4Fk)
> 
> ▶ Watch the full demo on YouTube
> 
> ## Features
> 
> - **Floating overlay** — transparent, click-through window that stays on top. Toggle with `⌥ + Space` (fallback: `Cmd+Shift+K`).
> - **Multi-tab sessions** — each tab spawns its own `claude -p` process with independent session state.
> - **Permission approval UI** — intercepts tool calls via PreToolUse HTTP hooks so you can review and approve/deny from the UI.
> - **Conversation history** — browse and resume past Claude Code sessions.
> - **Skills marketplace** — install plugins from Anthropic's GitHub repos without leaving Clui CC.
> - **Voice input** — local speech-to-text via Whisper (required, installed automatically).
> - **File & screenshot attachments** — paste images or attach files directly.
> - **Dual theme** — dark/light mode with system-follow option.
> 
> ## Why Clui CC
> 
> - **Claude Code, but visual** — keep CLI power while getting a fast desktop UX for approvals, history, and multitasking.
> - **Human-in-the-loop safety** — tool calls are reviewed and approved in-app before execution.
> - **Session-native workflow** — each tab runs an independent Claude session you can resume later.
> - **Local-first** — everything runs through your local Claude CLI. No telemetry, no cloud dependency.
> 
> ## How It Works
> 
> ```
> UI prompt → Main process spawns claude -p → NDJSON stream → live render
>                                          → tool call? → permission UI → approve/deny
> ```
> 
> See [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for the full deep-dive.
> 
> ## Install App (Recommended)
> 
> The fastest way to get Clui CC running as a regular Mac app. This installs dependencies, voice support (Whisper), builds the app, copies it to `/Applications`, and launches it.
> 
> **1) Clone the repo**
> 
> ```bash
> git clone https://github.com/lcoutodemos/clui-cc.git
> ```
> 
> **2) Double-click `install-app.command`**
> 
> Open the `clui-cc` folder in Finder and double-click `install-app.command`.
> 
> > **First launch:** macOS may block the app because it's unsigned. Go to **System Settings → Privacy & Security → Open Anyway**. You only need to do this once.
> > **Folder cleanup:** the installer removes temporary `dist/` and `release/` folders after a successful install to keep the repo tidy.
> 
> After the initial install, just open **Clui CC** from your Applications folder or Spotlight.
> 
> Terminal / Developer Commands
> 
> Only `install-app.command` is kept at root intentionally for non-technical users. Developer scripts live in `commands/`.
> 
> ### Quick Start (Terminal)
> 
> ```bash
> git clone https://github.com/lcoutodemos/clui-cc.git
> ```
> 
> ```bash
> cd clui-cc
> ```
> 
> ```bash
> ./commands/setup.command
> ```
> 
> ```bash
> ./commands/start.command
> ```
> 
> > Press **⌥ + Space** to show/hide the overlay. If your macOS input source claims that combo, use **Cmd+Shift+K**.
> 
> To stop:
> 
> ```bash
> ./commands/stop.command
> ```
> 
> ### Developer Workflow
> 
> ```bash
> npm install
> ```
> 
> ```bash
> npm run dev
> ```
> 
> Renderer changes update instantly. Main-process changes require restarting `npm run dev`.
> 
> ### Other Commands
> 
> | Command | Purpose |
> |---------|---------|
> | `./commands/setup.command` | Environment check + install dependencies |
> | `./commands/start.command` | Build and launch from source |
> | `./commands/stop.command` | Stop all Clui CC processes |
> | `npm run build` | Production build (no packaging) |
> | `npm run dist` | Package as macOS `.app` into `release/` |
> | `npm run doctor` | Run environment diagnostic |
> 
> Setup Prerequisites (Detailed)
> 
> You need **macOS 13+**. Then install these one at a time — copy each command and paste it into Terminal.
> 
> **Step 1.** Install Xcode Command Line Tools (needed to compile native modules):
> 
> ```bash
> xcode-select --install
> ```
> 
> **Step 2.** Install Node.js (recommended: current LTS such as 20 or 22; minimum supported: 18). Download from [nodejs.org](https://nodejs.org), or use Homebrew:
> 
> ```bash
> brew install node
> ```
> 
> Verify it's on your PATH:
> 
> ```bash
> node --version
> ```
> 
> **Step 3.** Make sure Python has `setuptools` (needed by the native module compiler). On Python 3.12+ this is missing by default:
> 
> ```bash
> python3 -m pip install --upgrade pip setuptools
> ```
> 
> **Step 4.** Install Claude Code CLI:
> 
> ```bash
> npm install -g @anthropic-ai/claude-code
> ```
> 
> **Step 5.** Authenticate Claude Code (follow the prompts that appear):
> 
> ```bash
> claude
> ```
> 
> **Step 6.** Install Whisper for voice input:
> 
> ```bash
> # Apple Silicon (M1/M2/M3/M4) — preferred:
> brew install whisperkit-cli
> # Apple Silicon fallback, or Intel Mac:
> brew install whisper-cpp
> ```
> 
> > **No API keys or `.env` file required.** Clui CC uses your existing Claude Code CLI authentication (Pro/Team/Enterprise subscription).
> 
> Architecture and Internals
> 
> ### Project Structure
> 
> ```
> src/
> ├── main/                   # Electron main process
> │   ├── claude/             # ControlPlane, RunManager, EventNormalizer
> │   ├── hooks/              # PermissionServer (PreToolUse HTTP hooks)
> │   ├── marketplace/        # Plugin catalog fetching + install
> │   ├── skills/             # Skill auto-installer
> │   └── index.ts            # Window creation, IPC handlers, tray
> ├── renderer/               # React frontend
> │   ├── components/         # TabStrip, ConversationView, InputBar, etc.
> │   ├── stores/             # Zustand session store
> │   ├── hooks/              # Event listeners, health reconciliation
> │   └── theme.ts            # Dual palette + CSS custom properties
> ├── preload/                # Secure IPC bridge (window.clui API)
> └── shared/                 # Canonical types, IPC channel definitions
> ```
> 
> ### How It Works
> 
> 1. Each tab creates a `claude -p --output-format stream-json` subprocess.
> 2. NDJSON events are parsed by `RunManager` and normalized by `EventNormalizer`.
> 3. `ControlPlane` manages tab lifecycle (connecting → idle → running → completed/failed/dead).
> 4. Tool permission requests arrive via HTTP hooks to `PermissionServer` (localhost only).
> 5. The renderer polls backend health every 1.5s and reconciles tab state.
> 6. Sessions are resumed with `--resume ` for continuity.
> 
> ### Network Behavior
> 
> Clui CC operates almost entirely offline. The only outbound network calls are:
> 
> | Endpoint | Purpose | Required |
> |----------|---------|----------|
> | `raw.githubusercontent.com/anthropics/*` | Marketplace catalog (cached 5 min) | No — graceful fallback |
> | `api.github.com/repos/anthropics/*/tarball/*` | Skill auto-install on startup | No — skipped on failure |
> 
> No telemetry, analytics, or auto-update mechanisms. All core Claude Code interaction goes through the local CLI.
> 
> ## Troubleshooting
> 
> For setup issues and recovery commands, see [`docs/TROUBLESHOOTING.md`](docs/TROUBLESHOOTING.md).
> 
> Quick self-check:
> 
> ```bash
> npm run doctor
> ```
> 
> ## Tested On
> 
> | Component | Version |
> |-----------|---------|
> | macOS | 15.x (Sequoia) |
> | Node.js | 20.x LTS, 22.x |
> | Python | 3.12 (with setuptools installed) |
> | Electron | 33.x |
> | Claude Code CLI | 2.1.71 |
> 
> ## Known Limitations
> 
> - **macOS only** — transparent overlay, tray icon, and node-pty are macOS-specific. Windows/Linux support is not currently implemented.
> - **Requires Claude Code CLI** — Clui CC is a UI layer, not a standalone AI client. You need an authenticated `claude` CLI.
> - **Permission mode** — uses `--permission-mode default`. The PTY interactive transport is legacy and disabled by default.
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[語音合成]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[jshachm--pi-rs|jshachm/pi-rs]] · [[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/lcoutodemos/clui-cc)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "lcoutodemos--clui-cc"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "lcoutodemos--clui-cc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "lcoutodemos--clui-cc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "lcoutodemos--clui-cc"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","語音合成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lcoutodemos--clui-cc" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lcoutodemos--clui-cc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lcoutodemos" AND file.name != "lcoutodemos--clui-cc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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
> const me = dv.page("Repos/lcoutodemos--clui-cc");
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

- [[2026-03-23|2026-03-23]] — 再次上榜，1.0k stars
- [[2026-03-22|2026-03-22]] — 首次收錄，968 stars
