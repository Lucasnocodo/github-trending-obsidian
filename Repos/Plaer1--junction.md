---
repo: Plaer1/junction
url: https://github.com/Plaer1/junction
owner: Plaer1
owner_type: User
language: TypeScript
license: MIT
description: "VS Code chat sidebar for local AI coding agents"
homepage: ""
stars: 648
stars_per_day: 54
forks: 10
open_issues: 0
created: 2026-06-17
pushed_at: 2026-06-29
first_seen: 2026-06-20
week: "2026-W25"
month: "2026-06"
category: "AI"
subcategory: "Coding Assistant"
release_tag: "v0.1.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-20
use_case: "提供一個 VS Code 側邊欄，讓你能與本地 AI 編碼代理互動。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-01"
contributor_count: 5
engagement: "low"
issue_close_rate: -1
repo_size_kb: 3028
readme_length: 5412
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-20"
star_history: "2026-06-20:513,2026-06-20:513,2026-06-21:516,2026-06-21:516,2026-06-22:517,2026-06-22:518,2026-06-23:525,2026-06-23:526,2026-06-24:532,2026-06-24:532,2026-06-25:534,2026-06-26:650,2026-06-27:648,2026-06-28:648,2026-06-29:648,2026-06-30:648"
tags:
  - github
  - "category/ai"
  - "lang/typescript"
aliases:
  - "junction"
  - "Plaer1/junction"
  - "提供一個 VS Code 側邊欄，讓你能與本地 AI 編碼代理互動。"
---

# junction

**648** stars · **54** stars/天 · 建立 12 天前 · TypeScript · MIT

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

`v0.1.1`

> [!summary] 一句話摘要
> 提供一個 VS Code 側邊欄，讓你能與本地 AI 編碼代理互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (54 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 VS Code 中整合多個本地 AI 編碼代理的開發者。
> **一句話重點** Junction 的多代理整合能力讓開發者能夠更高效地利用本地 AI 編碼代理，提升工作流的靈活性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Plaer1--junction");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Coding Assistant" && p.file.name !== "Plaer1--junction" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Coding Assistant 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，3 小時整合，得到靈活的多代理開發環境，值得嘗試。

> [!abstract] 核心創新
> Junction 提供了一個統一的介面來連接多個本地 AI 編碼代理，簡化了開發者的工作流程。

## 專案簡介

Junction 是一個專為 VS Code 設計的聊天側邊欄，能夠連接本地運行的 AI 編碼代理。用戶可以透過統一的介面與多個代理後端進行互動，無需改變工作流程。使用者可以在側邊欄中選擇代理模型，並設定推理努力程度，這樣能夠根據需求調整 AI 的反應速度和準確性。Junction 支援多種後端，包括 OpenClaw、Hermes 和 Souveraine，這些後端各自提供不同的連接方式和功能，讓用戶可以根據需求選擇最合適的代理。這個工具的賣點在於它的多樣性和靈活性，能夠在一個界面中整合多個 AI 代理的功能。

技術上，Junction 使用 TypeScript 和 WebSocket 來實現即時通訊，並且具備自動重連功能，確保連接穩定。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Junction 提供了更豐富的用戶界面和多樣的後端選擇，這使得它在多代理環境中更具優勢。使用者可以透過簡單的命令來開啟側邊欄，並且支持將文件拖放到聊天輸入中，這樣的設計提高了使用的便利性。雖然目前仍在 beta 階段，但它的功能已經相當完整，適合需要與多個 AI 編碼代理互動的開發者使用。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，特別是在需要快速迭代的開發環境中。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML` · `Shell`

## 重點功能

- 多後端支援 — 支援 OpenClaw、Hermes、Souveraine 等多個本地代理。
- 即時聊天功能 — 透過 VS Code 側邊欄與 AI 代理進行即時對話。
- 工作區上下文 — 可將文件拖放到聊天輸入中，方便分享和討論。
- 多種佈局選擇 — 提供緊湊模式和時間線模式，滿足不同的使用需求。
- 自動重連功能 — 連接中斷時自動重連，無需手動操作。
- 動畫效果 — 開場動畫和退出動畫可自定義，增強用戶體驗。
- Markdown 渲染 — 支援助手回應的 Markdown 格式，提升可讀性。
- 配置選項 — 可根據需求設定推理努力程度和跟隨模式。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 編譯並安裝擴展
```bash
./compile-and-install.sh
```
3. 重載 VS Code 窗口
```bash
Ctrl+Shift+P → Developer: Reload Window
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 648 stars（54/天），forks 10（1.5%），這顯示出一定的關注度。作者 Plaer1 和其他貢獻者在開源社群中有一定的影響力，之前的專案如 openclaw_vscode 也獲得了良好的反響。這個專案解決了開發者在使用多個 AI 編碼代理時的整合問題，之前的解決方案往往需要切換不同的工具，效率低下。Junction 的出現讓這一過程變得更加流暢和直觀。技術上，WebSocket 的使用使得即時通訊成為可能，這在過去的工具中並不常見。這個工具的高 fork/stars 比率顯示出用戶對其功能的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要在 VS Code 中整合多個本地 AI 編碼代理的開發者。

> [!example] 使用場景
> - 前端工程師用它來在 VS Code 中與本地 AI 編碼代理互動，因為可以即時獲得代碼建議，提升開發效率。
> - 獨立開發者用它來快速測試不同的 AI 模型，因為可以在同一界面中切換多個代理，節省時間。
> - 團隊成員用它來協作編碼，因為能夠將文件直接拖入聊天中，方便分享和討論。

## 架構分析

Junction 採用模組化的設計，將不同的 AI 代理整合到一個統一的界面中。它使用 WebSocket 來實現即時通訊，確保用戶能夠快速獲得反應。每個代理的連接都被封裝在一個獨立的模組中，這樣可以根據需求靈活切換。

這種設計的好處是能夠快速擴展新代理，但代價是需要額外的配置和管理。資料流方面，當用戶發送消息時，Junction 會將請求轉發到相應的代理，並在收到回應後更新界面。這樣的架構使得整體性能良好，但在高負載情況下可能會出現延遲。

擴展性方面，由於每個代理都是獨立的，未來可以輕鬆添加新的代理，但也需要考慮到整體的資源使用。這種設計使得 Junction 在多代理環境中具有優勢。

## 技術深入分析

Junction 的核心技術在於其模組化架構，能夠支持多個 AI 代理的即時通訊。它使用 WebSocket 進行資料傳輸，這使得用戶能夠在 VS Code 中獲得即時反應。效能方面，Junction 能夠處理多個代理的請求，但在高負載時可能會出現延遲。設計上，選擇 TypeScript 提升了開發效率和可維護性，但也增加了學習曲線。依賴樹相對簡單，主要依賴於 VS Code 的 API 和 WebSocket。技術風險方面，未來在擴展新代理時可能會遇到相容性問題，特別是不同代理之間的資料格式和通訊協議。整合方面，Junction 與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，安裝過程相對順暢，但需要注意本地代理的配置。文件中有豐富的範例和說明，能幫助新手快速上手。整體而言，花 30 分鐘應該能夠成功運行。

## 優缺點分析

> [!success] 優點
> - 多後端支援，靈活性高
> - 即時通訊功能，提升開發效率
> - 可自定義的動畫效果，增強用戶體驗

> [!danger] 缺點
> - 仍在 beta 階段，可能不穩定
> - 需要本地代理運行，無法獨立使用
> - 安裝和配置過程相對複雜

> [!warning] 注意事項
> - 僅支援 VS Code 1.120.0 或更高版本
> - 需要本地代理運行，無法獨立使用
> - 目前仍在 beta 階段，可能存在不穩定的情況

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理整合，但缺乏多後端支援和即時聊天功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 代理，無法像 Junction 一樣靈活切換多個代理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於單一 AI 代理的整合，缺乏多後端支援的靈活性。 | 如果你的需求僅限於一個特定的 AI 代理，且希望簡化配置過程。 | low，因為只需轉換到單一代理的配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的 AI 代理功能，但不具備即時聊天和多代理切換的能力。 | 如果你的團隊需要一個簡單的解決方案，不需要多代理的靈活性。 | medium，因為需要重新設計工作流程以適應單一代理的使用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **junction** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於單一 AI 代理的整合，缺乏多後端支援的靈活性。 | 提供基本的 AI 代理功能，但不具備即時聊天和多代理切換的能力。 |
> | 遷移成本 | - | low，因為只需轉換到單一代理的配置。 | medium，因為需要重新設計工作流程以適應單一代理的使用。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於一個特定的 AI 代理，且希望簡化配置過程 | 如果你的團隊需要一個簡單的解決方案，不需要多代理的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，代理連接可能會不穩定
  - 解法：檢查網路連接，並確保代理運行正常
- [MEDIUM] 某些功能在不同代理間可能表現不一致
  - 解法：根據使用的代理調整期望功能
- [MEDIUM] 安裝過程中可能需要額外的配置步驟
  - 解法：參考 README 中的詳細安裝說明

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速迭代的開發環境 | 非常適合 | 多代理的靈活性和即時通訊功能能夠提升開發效率。 |
| 獨立開發者希望在本地測試多個 AI 模型 | 非常適合 | 能夠在同一界面中快速切換不同的 AI 代理。 |
| 大型企業需要穩定的生產環境 | 不適合 | 目前仍在 beta 階段，可能不穩定。 |
| 需要與多個 AI 代理進行複雜交互的專案 | 非常適合 | 提供了多後端支援和即時反應的能力。 |
| 對於不熟悉配置的開發者 | 普通 | 安裝和配置過程相對複雜，可能需要額外的學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，3 小時整合，得到靈活的多代理開發環境，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取本地代理的資料，無需擔心敏感資料的洩露。

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
| Forks | 10 |
| Open Issues | 0 |
| 最後推送 | 2026-06-29 |
| 建立日期 | 2026-06-17 |
| Repo 大小 | 3.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Plaer1/junction) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 50
>     "JavaScript" : 40
>     "CSS" : 9
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Plaer1](https://github.com/Plaer1) | 75 |
> | [@xiaomi-mimo](https://github.com/xiaomi-mimo) | 3 |
> | [@CodeX-OpenAI](https://github.com/CodeX-OpenAI) | 2 |
> | [@Copilot](https://github.com/Copilot) | 2 |
> | [@codex](https://github.com/codex) | 2 |

**最新版本**：v0.1.1 — v0.1.1 - Junction (2026-06-29)

> [!info]- Release Notes
> ## v0.1.1
> 
> - 20 locales: NLS + l10n bundle + README translations
> - Queue display mode setting (timeline/compact/auto)
> - Sticky post truncation with show-more button
> - Tool pill truncation with show-more modal
> - Splash screen font pop-in fix
> - Workspace context always prepended (never separate message)
> - Context bleed fix (adoptViewSession persist/restore)
> - Pi bridge prompt timeout: 30s → 999s
> - Gateway default timeout: 30s → 9999s
> - Copy/share menu separation with history support
> - 80+ co-authors from GitHub bots and organizations

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和貢獻。
**連結**：[文件](https://github.com/Plaer1/junction)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28 ~ 2026-06-29）
> **活躍天數** 2 天 · **最新 commit** feat: localization, queue display, show-more, splash fix, context bleed fix

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

相關概念：[[AI]] · [[Chat]] · [[Coding Assistant]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/Plaer1/junction)

## 相關收錄

> [!note]- 直接競品（同子分類：Coding Assistant）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Coding Assistant" AND file.name != "Plaer1--junction"
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
> const concepts = ["AI","Chat","Coding Assistant"];
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
