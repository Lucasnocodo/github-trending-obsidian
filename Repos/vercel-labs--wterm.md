---
repo: vercel-labs/wterm
url: https://github.com/vercel-labs/wterm
owner: vercel-labs
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "A terminal emulator for the web"
homepage: "https://wterm.dev"
stars: 2210
stars_per_day: 368
forks: 83
open_issues: 7
created: 2026-04-14
pushed_at: 2026-04-19
first_seen: 2026-04-17
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "終端模擬器"
release_tag: "v0.1.8"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-17
use_case: "提供一個基於網頁的終端模擬器，具備高效能和豐富功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 767
readme_length: 2417
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-17"
star_history: "2026-04-17:1043,2026-04-18:1337,2026-04-19:1565,2026-04-20:2081,2026-04-21:2210"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "wterm"
  - "vercel-labs/wterm"
  - "提供一個基於網頁的終端模擬器，具備高效能和豐富功能。"
---

# wterm

**1.0k** stars · **522** stars/天 · 建立 2 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--wterm");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.8`

> [!summary] 一句話摘要
> 提供一個基於網頁的終端模擬器，具備高效能和豐富功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (522 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在網頁應用中嵌入高效能終端功能的前端開發者。
> **一句話重點** 這個專案展示了如何利用 WebAssembly 和 Zig 語言來構建高效能的網頁終端模擬器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--wterm");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "終端模擬器" && p.file.name !== "vercel-labs--wterm" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 終端模擬器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到高效能的終端功能，值得考慮。

> [!abstract] 核心創新
> 核心使用 Zig 語言編寫並編譯為 WASM，提供接近原生的性能。

## 專案簡介

wterm 是一個用於網頁的終端模擬器，核心使用 Zig 語言編寫並編譯為 WASM，提供接近原生的性能。用戶可以透過 DOM 渲染來享受原生文本選擇、複製/粘貼、查找和無障礙功能。該工具支持多種功能，包括 24 位顏色、主題自定義、滾動歷史記錄和 WebSocket 傳輸，允許用戶連接到 PTY 後端。關鍵指令如 `pnpm install` 用於安裝依賴，`zig build` 用於構建 WASM 二進制文件。這個工具的賣點在於其輕量級的設計和高效能，適合需要在網頁中嵌入終端功能的應用場景。

**技術棧**：`Zig 0.16.0` · `Node.js 20` · `pnpm 10`

## 重點功能

- Zig + WASM 核心 — 提供約 12 KB 的輕量級二進制檔案，支持 VT100/VT220/xterm 轉義序列。
- DOM 渲染 — 支持原生文本選擇、剪貼板、瀏覽器查找和屏幕閱讀器。
- 主題支持 — 提供多種主題選擇，包括 Default、Solarized Dark、Monokai 和 Light。
- WebSocket 傳輸 — 允許用戶連接到 PTY 後端，支持二進制幀和重連。
- Markdown 渲染 — 支持在終端中渲染 Markdown 格式的文本。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 構建 WASM 二進制文件
```bash
zig build
```
3. 運行 Next.js 示例
```bash
pnpm --filter nextjs dev
```

## 程式碼範例

```ts
{
  "前置條件": "需要 Zig 和 Node.js 環境",
  "指令": "zig build",
  "預期輸出": "生成 WASM 二進制文件以供使用"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1043 stars（522/天），forks 34（3.3%），顯示出強烈的初期興趣。作者 ctate 之前在 Vercel 有過其他開源貢獻，這次專案解決了傳統終端模擬器在網頁環境中的性能和功能限制。這個專案的推出正值 WebAssembly 技術逐漸成熟，能夠提供更高效的執行性能。forks/stars 比率相對較低，顯示出目前大多數用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：需要在網頁應用中嵌入高效能終端功能的前端開發者。

> [!example] 使用場景
> - 前端工程師用它來在網頁應用中嵌入終端功能，因為它提供了原生的文本選擇和複製粘貼支持，提升用戶體驗。
> - DevOps 工程師用它來在內部工具中實現即時命令行操作，因為它的 WebSocket 支持能夠實現即時數據交互。
> - 教育工作者用它來展示編程教學，因為它支持 Markdown 流式輸出，能夠在終端中顯示教學內容。

## 架構分析

wterm 採用 Zig 語言編寫，並編譯為 WASM，這樣的設計使其在性能上接近原生應用，適合需要高效能的終端模擬器。資料流方面，使用 WebSocket 進行即時數據傳輸，並透過 DOM 渲染來實現用戶界面。這種架構的代價在於需要用戶安裝 Zig 環境來構建二進制文件，對於不熟悉的開發者來說可能會增加學習成本。擴展性方面，使用 WebSocket 使得連接到後端的能力強大，但在高並發的情況下可能會遇到性能瓶頸。

## 技術深入分析

wterm 的核心技術機制在於使用 Zig 語言編寫的 VT100/VT220/xterm 轉義序列解析器，並編譯為 WASM，這使得其在性能上接近原生應用。效能方面，wterm 能夠處理多達數千行的終端輸出，並且由於使用了 requestAnimationFrame 進行渲染，能夠保持流暢的用戶體驗。設計上選擇 Zig 而非其他語言如 C++，主要是因為 Zig 提供了更好的內存安全性和簡潔的語法，這對於開發者來說是一個優勢。依賴樹相對簡單，主要依賴於 Zig 和 Node.js，這降低了維護的複雜度。技術風險方面，隨著使用者數量的增加，WebSocket 連接可能成為性能瓶頸，這需要進一步的優化。整合方面，wterm 可以輕鬆與現有的前端框架如 React 整合，並且在 CI/CD pipeline 中的使用也相對簡單。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但需要安裝 Zig 環境可能對新手造成困難。文件中有良好的快速入門指南，支持多語言。

## 優缺點分析

> [!success] 優點
> - 高效能 — 使用 Zig 和 WASM 提供接近原生的執行速度。
> - 豐富的功能 — 支持多種終端功能，如主題、Markdown 渲染等。
> - 良好的可擴展性 — 支持 WebSocket 連接，適合即時應用。

> [!danger] 缺點
> - 需要安裝 Zig 環境，對新手不友好。
> - 文檔尚不完善，部分功能缺乏詳細說明。
> - 對於大型應用的性能優化仍需進一步努力。

> [!warning] 注意事項
> - 目前僅支持 Zig 0.16.0+ 和 Node.js 20+。
> - 對於大型終端應用，可能需要進一步的性能優化。
> - 目前的文檔仍在完善中，部分功能可能缺乏詳細說明。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一個更為傳統的終端模擬器，適合需要本地執行的場景，而 wterm 則專注於網頁環境的即時交互。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 提供了廣泛的命令行工具集成，而 wterm 專注於終端模擬和性能優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 使用 C++ 實作，性能上可能更優，但生態系相對較小。 | 如果你的團隊熟悉 C++ 並需要更高的性能，boneyard 可能是更好的選擇。 | medium，因為需要重寫部分代碼以適應不同的架構。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 提供了更廣泛的命令行工具支持，適合需要多樣化功能的用戶。 | 如果你的應用需要集成多種命令行工具，CLI-Anything 是更合適的選擇。 | low，因為其 API 設計相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wterm** | **boneyard** | **CLI-Anything** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 使用 C++ 實作，性能上可能更優，但生態系相對較小。 | CLI-Anything 提供了更廣泛的命令行工具支持，適合需要多樣化功能的用戶。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應不同的架構。 | low，因為其 API 設計相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊熟悉 C++ 並需要更高的性能，boneyard | 如果你的應用需要集成多種命令行工具，CLI-Anything |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目或實驗性質的開發，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些瀏覽器中，WebSocket 連接可能不穩定，導致終端無法正常工作。
  - 解法：檢查瀏覽器的 WebSocket 支持，並考慮使用其他瀏覽器。
- [MEDIUM] 對於大型終端應用，可能會遇到性能瓶頸。
  - 解法：考慮優化終端輸出或減少同時連接的數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部工具開發 | 非常適合 | wterm 提供了高效能和易於集成的終端功能，適合內部工具的需求。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未達到生產要求。 |
| 教育機構的編程教學 | 適合 | 支持 Markdown 流式輸出，能夠在教學中提供良好的用戶體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到高效能的終端功能，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但在使用 WebSocket 時需注意安全性配置。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

wterm 最常與 React 和 Next.js 搭配使用，能夠在開發過程中提供即時的終端功能。在一個使用 Next.js 的專案中，可以將 wterm 嵌入到頁面中，具體做法是將生成的 wterm.wasm 文件放入 public 目錄，並在頁面中加載。該工具支持與 GitHub Actions 和其他 CI 工具的整合，能夠在自動化流程中使用。整合的摩擦點主要在於需要用戶安裝 Zig 環境，這可能會對某些開發者造成困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 wterm 出現之前，網頁終端模擬器多數依賴 JavaScript 實現，性能和功能上受到限制。隨著 WebAssembly 的興起，開發者開始探索如何利用其高效能特性來構建更強大的應用。wterm 代表了這一技術趨勢的前沿，未來可能會有更多基於 WASM 的終端模擬器出現，進一步推動網頁應用的性能提升。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--wterm");
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
> const me = dv.page("Repos/vercel-labs--wterm");
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
| Forks | 34 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-16 |
| 建立日期 | 2026-04-14 |
| 官方網站 | [Link](https://wterm.dev) |
| Repo 大小 | 767 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/wterm) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@playwright/test` `@vitest/coverage-v8` `prettier` `turbo` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 67
>     "Zig" : 16
>     "MDX" : 12
>     "CSS" : 3
>     "HTML" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ctate](https://github.com/ctate) | 43 |

**最新版本**：v0.1.8 (2026-04-16)

> [!info]- Release Notes
> ### New Features
> 
> - **E2E browser tests** — added Playwright test suite with 11 tests covering rendering, keyboard input, focus, cursor movement, scrollback, and resize (#25)
> - **Vite example** — minimal vanilla TypeScript terminal with `@wterm/dom` and `@wterm/just-bash`, no framework needed (#24)
> - **Markdown Streaming example** — Next.js app using `@wterm/react`, `@wterm/markdown`, and AI SDK to stream LLM output into a terminal (#24)
> - **API Reference page** — single consolidated reference for all terminal options, React props, WTerm methods, imperative handle, WebSocketTransport, and WasmBridge (#25)
> - **Just Bash docs** — install, quick start, options, virtual FS, network access, and keyboard shortcuts (#23)
> - **Markdown docs** — streaming examples (vanilla + React), supported syntax, and LLM output guide (#23)
> - **Core / Advanced docs** — WasmBridge API, types, headless example, and WebSocketTransport with remote shell example (#23)
> 
> ### Improvements
> 
> - **Zig 0.16.0** — migrated build system and rebuilt `wterm.wasm` with Zig 0.16.0
> - **Vitest workspace** — 165 unit tests across all five packages with V8 coverage and Turbo integration (#21)
> - **Zig CI** — added Zig test step and WASM drift check to CI workflow (#22)
> - **WTerm integration tests** — 33 tests for the DOM orchestrator (#22)
> 
> ### Bug Fixes
> 
> - Fixed **just-bash README** — corrected broken usage example (#22)
> 
> ### Contributors
> 
> - @ctate

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在積極更新和維護。
**連結**：[文件](https://wterm.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-16）
> **活躍天數** 2 天 · **最新 commit** fix zig version (#28)

## README 摘錄

> [!info]- 展開查看原文 README
> # wterm
> 
> A terminal emulator for the web.
> 
> wterm ("dub-term") renders to the DOM — native text selection, copy/paste, find, and accessibility come for free. The core is written in Zig and compiled to WASM for near-native performance.
> 
> ## Packages
> 
> | Package | Description |
> |---|---|
> | [`@wterm/core`](packages/@wterm/core) | Headless WASM bridge + WebSocket transport |
> | [`@wterm/dom`](packages/@wterm/dom) | DOM renderer, input handler — vanilla JS terminal |
> | [`@wterm/react`](packages/@wterm/react) | React component + `useTerminal` hook (TypeScript) |
> | [`@wterm/just-bash`](packages/@wterm/just-bash) | In-browser Bash shell powered by just-bash |
> | [`@wterm/markdown`](packages/@wterm/markdown) | Render Markdown in the terminal |
> 
> ## Features
> 
> - **Zig + WASM core** — VT100/VT220/xterm escape sequence parser compiled to a ~12 KB `.wasm` binary (release build)
> - **DOM rendering** — native text selection, clipboard, browser find, and screen reader support
> - **Dirty-row tracking** — only touched rows are re-rendered each frame via `requestAnimationFrame`
> - **Themes** — CSS custom properties with built-in Default, Solarized Dark, Monokai, and Light themes
> - **Alternate screen buffer** — `vim`, `less`, `htop`, and similar apps work correctly
> - **Scrollback history** — configurable ring buffer
> - **24-bit color** — full RGB SGR support
> - **Auto-resize** — `ResizeObserver`-based terminal resizing
> - **WebSocket transport** — connect to a PTY backend with binary framing and reconnection
> 
> ## Development
> 
> ### Prerequisites
> 
> - [Zig](https://ziglang.org/) 0.16.0+
> - [Node.js](https://nodejs.org/) 20+
> - [pnpm](https://pnpm.io/) 10+
> - [portless](https://github.com/vercel-labs/portless) — `npm i -g portless`
> 
> ### Setup
> 
> ```bash
> pnpm install
> ```
> 
> ### Build the WASM binary
> 
> ```bash
> zig build
> ```
> 
> For a release build:
> 
> ```bash
> zig build -Doptimize=ReleaseSmall
> ```
> 
> ### Build all packages
> 
> ```bash
> pnpm build
> ```
> 
> ### Run the vanilla demo
> 
> Serve the `web/` directory with any static file server:
> 
> ```bash
> cd web && python3 -m http.server 8000
> ```
> 
> ### Run the Next.js example
> 
> All dev servers use [portless](https://github.com/vercel-labs/portless) to avoid hardcoded ports. Each app is served at a `.localhost` URL (e.g. `nextjs-example.wterm.localhost`).
> 
> ```bash
> cp web/wterm.wasm examples/nextjs/public/
> pnpm --filter nextjs dev
> ```
> 
> ### Run Zig tests
> 
> ```bash
> zig build test
> ```
> 
> ## License
> 
> Apache-2.0

## 延伸閱讀

相關概念：[[WebAssembly]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/vercel-labs/wterm) · [官方網站](https://wterm.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：終端模擬器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "終端模擬器" AND file.name != "vercel-labs--wterm"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel-labs--wterm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "vercel-labs--wterm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "vercel-labs--wterm"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["WebAssembly","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--wterm" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--wterm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--wterm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--wterm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--wterm");
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
> const me = dv.page("Repos/vercel-labs--wterm");
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
> const me = dv.page("Repos/vercel-labs--wterm");
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
> const me = dv.page("Repos/vercel-labs--wterm");
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
> const me = dv.page("Repos/vercel-labs--wterm");
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

> **2026-04-17** — 首次收錄
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

- [[2026-04-21|2026-04-21]] — 再次上榜，2.2k stars
- [[2026-04-20|2026-04-20]] — 再次上榜，2.1k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.6k stars
- [[2026-04-18|2026-04-18]] — 再次上榜，1.3k stars
- [[2026-04-17|2026-04-17]] — 首次收錄，1.0k stars
