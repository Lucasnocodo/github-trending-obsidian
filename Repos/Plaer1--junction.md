---
repo: Plaer1/junction
url: https://github.com/Plaer1/junction
owner: Plaer1
owner_type: User
language: TypeScript
license: MIT
description: "VS Code chat sidebar for local AI coding agents"
homepage: ""
stars: 534
stars_per_day: 76
forks: 9
open_issues: 0
created: 2026-06-17
pushed_at: 2026-06-25
first_seen: 2026-06-20
week: "2026-W25"
month: "2026-06"
category: "AI"
subcategory: "聊天工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-20
use_case: "提供 VS Code 聊天側邊欄，連接本地 AI 編碼代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-01"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 2840
readme_length: 5487
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-20"
star_history: "2026-06-20:513,2026-06-20:513,2026-06-21:516,2026-06-21:516,2026-06-22:517,2026-06-22:518,2026-06-23:525,2026-06-23:526,2026-06-24:532,2026-06-24:532,2026-06-25:534"
tags:
  - github
  - "category/ai"
  - "lang/typescript"
  - easy_install
aliases:
  - "junction"
  - "Plaer1/junction"
  - "提供 VS Code 聊天側邊欄，連接本地 AI 編碼代理。"
---

# junction

**534** stars · **76** stars/天 · 建立 7 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Plaer1--junction");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供 VS Code 聊天側邊欄，連接本地 AI 編碼代理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (76 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 VS Code 中與本地 AI 編碼代理互動的開發者。
> **一句話重點** Junction 的設計讓開發者能夠更輕鬆地與本地 AI 代理互動，提升了編碼效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Plaer1--junction");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "聊天工具" && p.file.name !== "Plaer1--junction" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 聊天工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時的 AI 代碼建議，值得嘗試。

> [!abstract] 核心創新
> 提供一個統一介面，讓開發者能夠無縫切換多個本地 AI 編碼代理。

## 專案簡介

Junction 是一個 VS Code 擴充功能，提供一個聊天側邊欄，讓開發者可以與本地 AI 編碼代理進行互動。使用者可以透過命令面板 `Junction: Open Sidebar` 開啟側邊欄，並在其中與多個 AI 代理進行對話，無需改變工作流程。它支持多達七種後端，包括 OpenClaw、Hermes 和 Souveraine，這些後端各自提供不同的連接和管理功能，讓開發者能夠靈活選擇。Junction 的一大賣點是其工作區上下文功能，允許用戶將文件拖放到聊天輸入中，或右鍵選擇文件以添加到當前對話線程中。

技術上，它使用 WebSocket 和 HTTP 協議來實現與後端的即時通訊，並且具備自動重連功能，確保連接穩定。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Junction 提供了更為直觀的用戶界面和多種主題選擇，讓使用者可以根據自己的需求調整視覺效果。使用者可以在兩種佈局模式之間切換，分別為緊湊模式和時間線模式，這樣的設計使得訊息流動更加清晰。雖然目前仍在預覽階段，但其活躍的開發和社群支持顯示出未來的潛力。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML` · `Shell`

## 重點功能

- 多後端支持 — 連接 OpenClaw、Hermes、Souveraine 等七種本地代理。
- 工作區上下文 — 拖放文件或右鍵選擇文件添加到當前對話線程。
- Markdown 渲染 — 助手回應和工具調用卡片支持語法高亮。
- 聊天佈局切換 — 提供緊湊模式和時間線模式以適應不同需求。
- 自動重連 — 連接中斷時自動重連，無需手動操作。

## 快速開始

1. 安裝 Junction 擴充功能
```bash
在 VS Code 中搜尋 Junction 並安裝
```
2. 開啟側邊欄
```bash
使用命令面板輸入 'Junction: Open Sidebar'
```
3. 選擇後端
```bash
在側邊欄中選擇想要使用的 AI 代理
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 534 stars（76/天），forks 9（1.7%），這顯示出一定的關注度。開發者 Plaer1 和 xiaomi-mimo 具備相關背景，且專案能夠解決開發者在使用本地 AI 代理時的整合問題，這在市場上尚未有成熟的解決方案。近期的推廣活動和社群討論可能進一步推動了其流行。這個工具的出現正好契合了開發者對於更高效的編碼助手的需求，尤其是在本地環境中運行的 AI 代理。forks/stars 比率偏低，顯示目前使用者多為觀望者。

## 適合誰使用

**目標受眾**：需要在 VS Code 中與本地 AI 編碼代理互動的開發者。

> [!example] 使用場景
> - 前端工程師用它來與本地 AI 代理進行即時代碼建議，因為可以快速將文件拖入聊天框，提升工作效率。
> - 後端開發者用它來調試 API，因為能夠在側邊欄中直接與 AI 代理互動，獲得即時反饋。
> - 資料科學家用它來生成數據分析報告，因為可以選擇不同的模型進行推理，並在同一界面中查看結果。

## 架構分析

Junction 採用 VS Code 擴充架構，通過 WebSocket 和 HTTP 協議實現與多個本地 AI 代理的即時通訊。其核心設計是將多個後端整合到一個統一的聊天界面中，這樣的設計使得開發者可以在不改變工作流程的情況下，靈活選擇不同的代理進行交互。資料流方面，使用者的輸入會通過 WebSocket 傳送到選定的後端，後端處理後的回應則會即時返回並顯示在側邊欄中。這樣的設計雖然提高了使用的便利性，但也可能在多後端切換時增加延遲。擴展性方面，隨著更多後端的加入，Junction 仍然能保持良好的性能，但需要注意每個後端的資源需求和兼容性問題。

## 技術深入分析

Junction 的核心技術機制是透過 WebSocket 和 HTTP 協議與多個本地 AI 代理進行即時通訊。這種設計使得開發者可以在 VS Code 中無縫切換不同的代理，並且能夠即時獲得回應。效能方面，由於使用了 WebSocket，Junction 能夠在低延遲的情況下進行資料傳輸，這對於需要快速反饋的開發環境至關重要。設計上，選擇 TypeScript 作為主要開發語言，這不僅提高了代碼的可維護性，也讓開發者能夠利用靜態類型檢查來減少錯誤。依賴樹相對簡單，主要依賴於 VS Code 的 API 和一些輕量級的庫，這降低了整體的複雜度。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在多個代理同時運行的情況下。與主流框架的整合上，Junction 能夠與 VS Code 的生態系統良好配合，並且支持多種 CI/CD 流程，這使得它在團隊開發中具有良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝和使用說明，對於新手來說相對友好。安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 直觀的用戶界面，提升開發者的使用體驗。
> - 支持多種本地 AI 代理，靈活性高。
> - 即時通訊功能，無需手動重連。

> [!danger] 缺點
> - 目前仍在預覽階段，可能存在不穩定性。
> - 需要手動配置後端，對新手不太友好。
> - 功能尚未完全成熟，缺乏一些高級功能。

> [!warning] 注意事項
> - 目前僅支持 VS Code 版本 1.120.0 以上。
> - 需要本地安裝相應的 AI 代理後端。
> - 在某些情況下，可能需要手動配置後端連接。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理整合，但缺乏直觀的用戶界面和多種主題選擇。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 代理，但不支持多後端切換，限制了靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但缺乏多後端支持。 | 如果需要更高效的記憶體管理且不需要多後端切換。 | medium，因為需要重新配置後端連接。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 代理，功能較為單一。 | 如果你的團隊已經在使用特定的 AI 代理，且不需要其他選項。 | low，因為使用的 API 可能相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **junction** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但缺乏多後端支持。 | 專注於特定的 AI 代理，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新配置後端連接。 | low，因為使用的 API 可能相似。 |
> | 適用場景 | 主要場景 | 如果需要更高效的記憶體管理且不需要多後端切換。 | 如果你的團隊已經在使用特定的 AI 代理，且不需要其他選項。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，後端連接可能會不穩定
  - 解法：檢查網絡設置，確保 WebSocket 端口開放
- [MEDIUM] 某些 AI 代理的配置可能需要手動調整
  - 解法：參考官方文檔進行配置
- [MEDIUM] 使用過程中可能會遇到性能瓶頸
  - 解法：減少同時運行的代理數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠快速整合多種 AI 代理，提升開發效率。 |
| 大型企業的核心產品開發 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人開發者的 side project | 適合 | 簡單易用，適合快速實驗和開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時的 AI 代碼建議，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取本地資源，依賴鏈簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Plaer1--junction");
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
> const me = dv.page("Repos/Plaer1--junction");
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
| Open Issues | 0 |
| 最後推送 | 2026-06-25 |
| 建立日期 | 2026-06-17 |
| Repo 大小 | 2.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Plaer1/junction) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 45
>     "JavaScript" : 43
>     "CSS" : 10
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Plaer1](https://github.com/Plaer1) | 42 |
> | [@xiaomi-mimo](https://github.com/xiaomi-mimo) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/Plaer1/junction#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-12 ~ 2026-06-25）
> **活躍天數** 5 天 · **最新 commit** feat: publish prep + modular bridge/model-picker branch snapshot

## README 摘錄

> [!info]- 展開查看原文 README
> # Junction
> 
> A VS Code chat sidebar that connects your editor to local AI coding agents.
> 
> `7 backends` · `Chat sidebar` · `Workspace context` · `Animated splash` · `MIT License`
> 
> Junction is a chat panel for VS Code that connects to local AI coding agents running on your machine.
> It speaks to multiple agent backends through one unified interface — switch between them without changing your workflow.
> 
> ## Supported Backends
> 
> Junction connects to any of these local agent runtimes:
> 
> - **OpenClaw** — WebSocket gateway integration with session and model management
> - **Hermes** — native dashboard WebSocket and REST API support
> - **Souveraine** — HTTP server integration with managed runtime spawning
> - **MiMoCode** — auto-spawned or pre-configured MiMo server connection
> - **Goose** — data directory and secret key configuration
> - **OpenCode** — binary path and config home settings
> - **OpenHands** — server launcher and home directory configuration
> 
> ## Features
> 
> ### Chat Sidebar
> Talk to your active agent from VS Code's secondary sidebar. Open via Command Palette: `Junction: Open Sidebar`.
> 
> ### Workspace Context
> Drag and drop files into the chat input, or right-click a file or selection to add it to the current thread.
> 
> ### Model & Reasoning Picker
> Select a model and set reasoning effort per session from the sidebar header.
> 
> ### Markdown Rendering
> Assistant responses, tool call cards, reasoning blocks, and diffs render inline with syntax highlighting.
> 
> ### Chat Layouts
> Switch between compact mode (activity folded into accordions) and timeline mode (chronological reasoning flow with sticky user prompts).
> 
> ### Follow-Up Modes
> Queue messages for when the agent finishes, steer mid-turn, or interrupt and redirect. Configurable globally or per-bridge.
> 
> ### Auto-Reconnection
> Junction reconnects to the runtime automatically if the connection drops. No manual restart needed.
> 
> ## Themes
> 
> Junction includes two built-in layouts. **Compact** mode folds activity into summary accordions for a dense view.
> **Timeline** mode shows a chronological activity rail with dot indicators, reasoning disclosure, and an orange accent theme.
> Both layouts adapt to your VS Code color theme.
> 
> ## Splash Screen & Animations
> 
> Junction opens with an animated splash screen featuring a matrix-style rain effect behind the wordmark.
> The splash screen is fully customizable through the in-editor animation settings panel.
> 
> ### Character Sets
> The rain effect supports 10 character sets: Katakana, Matrix Latin, Latin, Hiragana, CJK, Hangul, Emoji, Binary, Symbols, and Custom.
> Mix in emoji drops at configurable rarity, or supply your own character set.
> 
> ### Rain Controls
> - **Direction** — toggle rain falling up or down
> - **Reverse chance** — set a percentage for drops to go the opposite direction
> - **Bounce sides** — rain bounces off left/right edges instead of falling off screen
> - **Gravity, bounce, collision, speed** — adjust how the drops move and interact with the wordmark
> - **Quantity, size variance, color variance, opacity range** — control the density and look of the rain
> - **Custom color** — pick a color and alpha for the rain and wordmark
> - **Emoji mixing** — toggle on and set rarity as 1/N (1 = all emoji, 1000000 = one in a million)
> 
> ### Exit Animations
> When the splash dismisses, the wordmark exits through one of 9 animation modes.
> Each mode has its own set of control sliders that swap in when you select it from the dropdown.
> 
> - **Spiral out** — letters spiral outward from the center
> - **Spiral in** — letters converge into a tightening spiral with configurable radius and length
> - **Explode** — letters burst outward with gravity
> - **Explode 2** — physics-based explosion with bouncing off edges, configurable force, chaos, and per-axis momentum
> - **Float away** — letters drift upward with direction-based tilt
> - **Horizontal flatten** — letters spread horizontally and crush to a 1px line with configurable hold time
> - **Explode weak** — a softer explosion with less force
> - **Starwars crawl** — letters converge to a vanishing point with configurable target Y position
> - **Explode 3** — the wordmark shatters into individual pixels with per-axis momentum control
> - **Rain push** — letters detach and the rain physically pushes them off screen
> - **Random** — picks a different mode each time
> 
> ### Animation Settings Panel
> Open the animation settings from the chat header gear icon. It has three tabs — Chat, Bobber, and Splash.
> The Splash tab contains two collapsible accordions (Appearance and Motion), the exit mode dropdown with per-mode sliders, and a live preview canvas you can click to test animations.
> The panel is fully draggable and resizable with no height limit.
> 
> ## Installation
> 
> ### From source
> ```bash
> npm install
> ./compile-and-install.sh
> # Then: Ctrl+Shift+P → Developer: Reload Window
> ```
> 
> ### Requirements
> - VS Code 1.120.0 or higher
> - A local agent runtime running (e.g. OpenClaw Gateway, Hermes dashboard, Souveraine server)
> 
> ---
> 
> > There are easter eggs. They are not documented here. That is the point.
> 
> ## Credits
> 
> Based on [openclaw_vscode](https://github.com/Owen-Liuyuxuan/openclaw_vscode) by Owen-Liuyuxuan (MIT).
> The WebSocket/gateway plumbing traces back to that project.
> The multi-bridge architecture, modular webview UI, animation engine, and model/session managers are original to Junction.
> 
> ---
> 
> MIT License. © Owen-Liuyuxuan (original openclaw_vscode), © Plaer1 (Junction).
> [github.com/Plaer1/junction](https://github.com/Plaer1/junction)

## 延伸閱讀

相關概念：[[AI]] · [[聊天機器人]] · [[本地代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/Plaer1/junction)

## 相關收錄

> [!note]- 直接競品（同子分類：聊天工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "聊天工具" AND file.name != "Plaer1--junction"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI" AND file.name != "Plaer1--junction"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Plaer1--junction" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "Plaer1--junction"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI","聊天機器人","本地代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Plaer1--junction" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Plaer1--junction");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Plaer1--junction" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Plaer1" AND file.name != "Plaer1--junction"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Plaer1--junction");
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
> const me = dv.page("Repos/Plaer1--junction");
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
> const me = dv.page("Repos/Plaer1--junction");
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
> const me = dv.page("Repos/Plaer1--junction");
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
> const me = dv.page("Repos/Plaer1--junction");
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

> **2026-06-20** — 首次收錄
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

- [[2026-06-24|2026-06-24]] — 再次上榜，532 stars
- [[2026-06-23|2026-06-23]] — 再次上榜，525 stars
- [[2026-06-22|2026-06-22]] — 再次上榜，517 stars
- [[2026-06-21|2026-06-21]] — 再次上榜，516 stars
- [[2026-06-20|2026-06-20]] — 首次收錄，513 stars
