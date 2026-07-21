---
repo: MatinSenPai/Aether-GUI
url: https://github.com/MatinSenPai/Aether-GUI
owner: MatinSenPai
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "One-click desktop GUI for the Aether censorship-circumvention tunnel — Tauri v2, React 19, Rust"
homepage: ""
stars: 669
stars_per_day: 112
forks: 30
open_issues: 8
created: 2026-07-14
pushed_at: 2026-07-20
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "其他"
subcategory: "桌面應用"
release_tag: "v0.5.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供一鍵式桌面 GUI 以便於使用 Aether 反審查隧道，免去命令行操作的麻煩。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-28"
contributor_count: 3
engagement: "low"
issue_close_rate: 20
repo_size_kb: 2413
readme_length: 6868
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:669"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/anti_censorship"
  - "topic/censorship_circumvention"
  - "topic/desktop_app"
  - "topic/proxy"
  - "topic/react"
aliases:
  - "Aether-GUI"
  - "MatinSenPai/Aether-GUI"
  - "提供一鍵式桌面 GUI 以便於使用 Aether 反審查隧道，免去命令行操作的麻煩。"
---

# Aether-GUI

**669** stars · **112** stars/天 · 建立 6 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/MatinSenPai--Aether-GUI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.0`

`anti-censorship` `censorship-circumvention` `desktop-app` `proxy` `react` `rust` `tauri` `typescript`

> [!summary] 一句話摘要
> 提供一鍵式桌面 GUI 以便於使用 Aether 反審查隧道，免去命令行操作的麻煩。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (112 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望在高限制網絡環境中輕鬆使用 Aether 的普通用戶和技術人員。
> **一句話重點** Aether-GUI 讓 Aether 的使用變得簡單，讓更多用戶能夠輕鬆應對網絡審查問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面應用" && p.file.name !== "MatinSenPai--Aether-GUI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，能快速上手反審查，值得嘗試。

> [!abstract] 核心創新
> Aether-GUI 將 Aether 的命令行工具包裝成一個易於使用的桌面應用，讓不熟悉命令行的用戶也能輕鬆使用。

## 專案簡介

Aether-GUI 是一款專為 Aether 反審查隧道設計的桌面應用程式，使用者只需點擊連接按鈕，後台會自動處理身份驗證、路由發現等操作。這款 GUI 實際上是通過偽終端驅動 Aether 的二進制檔案，並自動回答其互動提示，讓用戶無需接觸命令行。其核心賣點在於簡化了 Aether 的使用流程，讓不熟悉命令行的用戶也能輕鬆上手。應用支持多種協議和掃描模式，包括 Ironclad 模式，這是唯一能保證連接有效的模式，雖然速度較慢。

技術上，它使用 React 19 和 Rust，並通過 Tauri 框架進行 IPC 通訊，確保了應用的輕量化和高效能。與其他反審查工具相比，Aether-GUI 不僅提供了簡單的自動模式，還有進階面板供用戶調整各種參數，如協議選擇、掃描模式等，這使得它在功能上更具靈活性和控制力。使用者可以在 GUI 中實時查看連接進度，並在隧道意外斷開時自動重連，提升了用戶體驗。這款工具特別適合需要在高限制網絡環境中工作的人士，因為它提供了一個簡單的界面來管理複雜的反審查過程。

**技術棧**：`React 19` · `Rust` · `Tauri v2`

## 重點功能

- 一鍵連接 — 用戶只需點擊按鈕即可連接，不需任何配置。
- 多種協議選擇 — 支持 MASQUE、WireGuard 和 WARP-in-WARP 等協議。
- 掃描模式選擇 — 提供 Turbo、Balanced、Thorough、Stealth 和 Ironclad 模式供用戶選擇。
- 實時進度顯示 — 在連接過程中顯示實際進度和時間。
- 自動重連功能 — 隧道中斷時自動重連，並顯示重連進度。

## 快速開始

1. 下載最新安裝包
```bash
從 Releases 頁面下載 Aether-GUI_x.y.z_x64-setup.exe
```
2. 安裝應用程式
```bash
執行下載的安裝包並按照指示完成安裝
```
3. 啟動應用程式
```bash
點擊桌面上的 Aether-GUI 圖示啟動應用
```

## 程式碼範例

```ts
# 前置條件
# 確保已安裝 Node.js 和 Rust

# 安裝前端依賴
npm install

# 運行開發模式
npm run tauri dev

# 預期輸出
應用將在開發模式下啟動，並可進行即時測試。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 669 stars（112/天），forks 30（4.5%），顯示出穩定的增長潛力。這個專案由 MatinSenPai 和其他幾位貢獻者共同開發，解決了用戶在使用 Aether 時需要手動操作命令行的痛點。之前的解決方案多數依賴於命令行工具，對於不熟悉技術的用戶來說，使用門檻較高。這個專案的推出，讓更多人能夠輕鬆使用 Aether 進行反審查，並且在社群中引起了討論，進一步推動了其流行。技術上，Tauri 框架的使用讓這個桌面應用變得輕量且高效，適合在各種平台上運行。

## 適合誰使用

**目標受眾**：希望在高限制網絡環境中輕鬆使用 Aether 的普通用戶和技術人員。

> [!example] 使用場景
> - 普通用戶用它來快速連接到 Aether 隧道，因為不需要學習命令行操作，直接點擊即可連接。
> - 網路安全專家用它來測試不同的反審查配置，因為它提供了多種協議和掃描模式的選擇。
> - 開發者用它來觀察 Aether 的運行狀態和日誌輸出，因為 GUI 提供了即時的進度和錯誤信息，便於調試。

## 架構分析

Aether-GUI 採用 Tauri 框架，將前端和後端分開設計。前端使用 React 和 Tailwind 進行開發，並通過 IPC 與 Rust 實現的後端進行通訊。這種設計使得 GUI 可以輕量運行，並在不影響性能的情況下提供豐富的用戶體驗。

後端使用 Rust 和 portable-pty 庫來啟動 Aether 的二進制檔案，並通過偽終端與其交互。這樣的設計使得用戶不必直接面對命令行，並且能夠自動處理 Aether 的互動提示。這種架構的代價在於需要用戶安裝額外的依賴，但這樣的設計也使得應用能夠在多平台上運行，並提供一致的用戶體驗。

## 技術深入分析

Aether-GUI 的核心技術在於其使用的 Tauri 框架，這使得它能夠將前端和後端分開，並使用 Rust 進行高效的後端處理。前端使用 React 19 和 Tailwind 進行開發，提供了一個現代化的用戶界面。後端則使用 portable-pty 庫來啟動 Aether 的二進制檔案，這樣的設計使得用戶不必直接與命令行互動。這種架構的優勢在於能夠提供一致的用戶體驗，並且在多平台上運行。

效能方面，應用在運行時的資源佔用相對較低，因為它會在窗口不聚焦時暫停動畫。設計取捨方面，選擇 Rust 作為後端語言能夠提供高效能，但也要求開發者具備一定的 Rust 知識。技術風險方面，隨著用戶量的增加，可能會面臨性能瓶頸，特別是在高流量的使用情境下。整合方面，Aether-GUI 可以輕鬆與現有的開發環境結合，並且支持在 CI/CD 流程中進行測試和部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝步驟和使用說明。安裝過程相對順暢，但需要用戶具備 Node.js 和 Rust 的基本知識。文件目前僅提供英文版本，對於非英語用戶可能會有一定障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 GUI，適合不熟悉命令行的用戶。
> - 支持多種協議和掃描模式，提供靈活性。
> - 實時進度顯示，增強用戶體驗。

> [!danger] 缺點
> - 目前僅支援 Windows x64，對於其他平台的支持有限。
> - 需要安裝 Node.js 和 Rust，對新手有一定的學習曲線。
> - 在某些網絡環境下可能會遇到連接不穩定的問題。

> [!warning] 注意事項
> - 目前僅支援 Windows x64 平台，其他平台需從源碼編譯。
> - 需要安裝 Node.js 和 Rust 的開發環境，對新手可能有一定的學習曲線。
> - 在某些網絡環境下，可能會遇到連接不穩定的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [CluvexStudio/Aether](https://github.com/CluvexStudio/Aether) | Aether 是底層的反審查工具，無 GUI，適合技術用戶直接操作。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這是一個針對代理的工具，專注於代理的管理和配置，而不是反審查。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [CluvexStudio/Aether](https://github.com/CluvexStudio/Aether) | Aether 是一個命令行工具，專注於反審查的底層邏輯，而 Aether-GUI 則提供了一個易於使用的界面。 | 如果你熟悉命令行並希望直接控制反審查過程，選擇 Aether 會更靈活。 | low，因為 Aether 的命令行參數可以直接在 GUI 中找到對應選項。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這是一個針對代理的工具，專注於代理的管理和配置，而不是反審查，功能上與 Aether-GUI 有所不同。 | 如果你的需求主要是代理管理而非反審查，這個工具會更合適。 | medium，因為需要重新學習不同的配置方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Aether-GUI** | **Aether** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Aether 是一個命令行工具，專注於反審查的底層邏輯，而 Aether-GUI 則提供了一個易於使用的界面。 | 這是一個針對代理的工具，專注於代理的管理和配置，而不是反審查，功能上與 Aether-GUI 有所不同。 |
> | 遷移成本 | - | low，因為 Aether 的命令行參數可以直接在 GUI 中找到對應選項。 | medium，因為需要重新學習不同的配置方式。 |
> | 適用場景 | 主要場景 | 如果你熟悉命令行並希望直接控制反審查過程，選擇 Aether | 如果你的需求主要是代理管理而非反審查，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網絡環境下，連接可能不穩定，導致頻繁掉線。
  - 解法：嘗試切換掃描模式或協議以改善連接穩定性。
- [MEDIUM] 首次啟動時可能需要較長時間進行路由掃描。
  - 解法：使用快速重連功能來減少重複掃描時間。
- [MEDIUM] 需要手動下載 Aether 的二進制檔案，對新手不友好。
  - 解法：參考 README 中的指導步驟進行下載和安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要在受限網絡中進行安全通信 | 非常適合 | Aether-GUI 提供了簡單的界面來管理複雜的反審查過程，適合不熟悉命令行的用戶。 |
| 大型企業需要穩定的反審查解決方案 | 不適合 | 目前僅支援 Windows x64，對於多平台部署不友好。 |
| 個人用戶希望快速連接到 Aether 隧道 | 非常適合 | 一鍵連接的設計讓普通用戶能輕鬆使用。 |
| 技術人員需要深入調試反審查工具 | 普通 | 雖然提供了 GUI，但對於需要細節的技術人員可能不夠靈活。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，能快速上手反審查，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，僅需訪問本地網絡。依賴的 Aether 二進制檔案需自行下載，需注意其來源的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
| Forks | 30 |
| Open Issues | 8 |
| Issue 解決率 | 20% (2 closed) |
| 最後推送 | 2026-07-20 |
| 建立日期 | 2026-07-14 |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MatinSenPai/Aether-GUI) |
| Topics | `anti-censorship` `censorship-circumvention` `desktop-app` `proxy` `react` `rust` `tauri` `typescript` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@fontsource-variable/inter` `@fontsource-variable/jetbrains-mono` `@tailwindcss/vite` `@tauri-apps/api` `class-variance-authority` `clsx` `lucide-react` `motion` `radix-ui` `react` `react-dom` `shadcn` `tailwind-merge` `tailwindcss` `tw-animate-css`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 51
>     "Rust" : 42
>     "CSS" : 5
>     "Shell" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MatinSenPai](https://github.com/MatinSenPai) | 18 |
> | [@rqzbeh](https://github.com/rqzbeh) | 3 |
> | [@ZethRise](https://github.com/ZethRise) | 1 |

**最新版本**：v0.5.0 (2026-07-20)

> [!info]- Release Notes
> ## Aether core updated to v1.3.0
> 
> - **New "ironclad" scan mode** — the other modes only check that a candidate gateway answers a handshake; ironclad opens a real tunnel through each candidate and sends a real HTTP request end to end before trusting it. Slowest of the five, but the only one that guarantees the gateway actually works before you connect.
> - **Smarter reconnect after a drop** — instead of always starting a full rescan (which can take minutes in ironclad mode), Aether now first re-checks the gateway that was working a moment ago and only rescans if it's actually dead.
> - Fixed probe tunnels leaking past their timeout during scans (the wall of "connection closed" log lines), and fixed UDP over SOCKS5 when the proxy is exposed to the local network.
> 
> ## New in the GUI
> 
> - **Ironclad** joins the Scan Mode toggle.
> - **Obfuscation** toggle — how heavily the handshake is disguised from DPI. Profiles adapt to the selected protocol (Firewall/GFW/Off for MASQUE, Balanced/Aggressive/Light/Off for WireGuard & gool); escalate if the default can't get through.
> - **Custom SOCKS5 bind address** — change the port, or bind to `0.0.0.0` to share the proxy with other devices on your network (works properly for UDP too, thanks to the core fix above).
> - **Minimize to system tray** — optionally keep Aether-GUI running in the tray when you close the window.
> - Connect timeouts now scale with the scan mode, so a thorough or ironclad scan is never cut off while still legitimately searching.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新和回應問題。
**連結**：[文件](https://github.com/MatinSenPai/Aether-GUI)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-20 ~ 2026-07-20）
> **活躍天數** 1 天 · **最新 commit** Release v0.5.0: Aether 1.3.0, ironclad scan, obfuscation, LAN bind, tray

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/MatinSenPai/Aether-GUI/issues/17) | Allow custom window width and height `enhancement` | 0 | 0 |
> | [#16](https://github.com/MatinSenPai/Aether-GUI/issues/16) | DeBug [ Proxy & Cash Data ] `bug` | 0 | 0 |
> | [#10](https://github.com/MatinSenPai/Aether-GUI/issues/10) | warp in warp problem `bug` | 0 | 0 |
> | [#7](https://github.com/MatinSenPai/Aether-GUI/issues/7) | add prebuilded release for linux `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Aether-GUI
> 
> [](https://github.com/MatinSenPai/Aether-GUI/releases)
> [](LICENSE)
> 
> **English** · [فارسی](README_fa.md)
> 
> A one-click desktop GUI for [**Aether**](https://github.com/CluvexStudio/Aether), a censorship-circumvention tunnel built for heavily restricted networks. Aether itself is a terminal tool: it discovers a working route out, establishes an encrypted tunnel, and exposes a local SOCKS5 proxy. Aether-GUI wraps that terminal tool in a small, animated desktop app so you don't have to touch a command line to use it — press Connect, and everything else (identity provisioning, route discovery, prompt answering) happens automatically in the background.
> 
> This project does not reimplement any of Aether's tunneling logic. It drives the real `aether` binary in a pseudo-terminal, answers its interactive setup prompts on your behalf, and watches its output to tell you what's happening. All the actual censorship-circumvention work — MASQUE/QUIC obfuscation, WireGuard, route probing — is [Aether's](https://github.com/CluvexStudio/Aether), not this repo's.
> 
>   
> 
> ## Features
> 
> - **Auto mode** — the default screen is just a single button. No configuration is required; it connects using your last-successful settings (or sensible defaults on first run).
> - **Advanced panel** — for when you want control, a collapsible panel exposes the real options Aether's setup supports:
>   - **Protocol**: MASQUE (disguises traffic as normal HTTPS), WireGuard (lighter, faster), or WARP-in-WARP/gool (two nested WireGuard tunnels for extra security at a speed cost)
>   - **Scan Mode**: Turbo, Balanced, Thorough, Stealth, or Ironclad — trading route-discovery speed against how much probe traffic it generates; Ironclad opens a real tunnel through each candidate and sends a real HTTP request before trusting it (slowest, but guaranteed working)
>   - **IP Version**: IPv4, IPv6, or both
>   - **MASQUE Transport**: HTTP/3 (QUIC — fastest handshake) or HTTP/2 (TCP — looks like ordinary HTTPS, works where UDP is blocked or throttled)
>   - **Obfuscation**: how heavily the handshake is disguised from DPI — profiles adapt to the selected protocol; escalate if the default can't get through
>   - **Quick reconnect**: remember the last working gateway and re-test it first, skipping the full scan when it still works
>   
>   Each option has an explanation on hover.
> - **Live progress** — while Aether searches for a working route, the GUI shows real elapsed time and, once Aether reports its own scan budget, an actual percentage and progress bar — not just a spinner.
> - **Automatic reconnect** — if the tunnel drops unexpectedly mid-session (observed occasionally with WARP-in-WARP, but handled the same way for every protocol), the GUI retries automatically with backoff, shown as a visible "Reconnecting… (attempt N of 3)" rather than silently dying or dumping you back to a bare error. A user-requested disconnect is never retried.
> 
> ## Installing
> 
> Grab the latest installer from the [Releases page](https://github.com/MatinSenPai/Aether-GUI/releases):
> 
> - `Aether-GUI_x.y.z_x64-setup.exe` — standard installer (recommended)
> - `Aether-GUI_x.y.z_x64_en-US.msi` — MSI package, for scripted or enterprise installs
> 
> Windows x64 only for now — see [Building from source](#building-from-source) for other platforms.
> 
> ## Building from source
> 
> 1. **Prerequisites**
>    - [Node.js](https://nodejs.org/) and npm
>    - [Rust](https://rustup.rs/) (stable toolchain)
>    - Tauri's platform prerequisites — see the [Tauri v2 prerequisites guide](https://v2.tauri.app/start/prerequisites/) (on Windows this is the MSVC C++ Build Tools + WebView2 Runtime, both usually already present; macOS needs Xcode Command Line Tools; Linux needs `webkit2gtk` and friends)
> 
> 2. **Install frontend dependencies**
> 
>    ```sh
>    npm install
>    ```
> 
> 3. **Fetch the Aether binary**
> 
>    Aether-GUI bundles the real `aether` binary from [CluvexStudio/Aether releases](https://github.com/CluvexStudio/Aether/releases) rather than building it — this repo only ships the GUI. Fetch and checksum-verify it for your platform:
> 
>    ```sh
>    ./src-tauri/binaries/fetch-aether.sh
>    ```
> 
>    This script covers Linux and macOS directly. On Windows, download the matching `aether-windows-*.zip` from the [Aether releases page](https://github.com/CluvexStudio/Aether/releases) yourself, verify it against the published `SHA256SUMS.txt`, and extract `aether.exe` into `src-tauri/binaries/`.
> 
> 4. **Run in development mode**
> 
>    ```sh
>    npm run tauri dev
>    ```
> 
> 5. **Build a release installer**
> 
>    ```sh
>    npm run tauri build
>    ```
> 
>    Installers land under `src-tauri/target/release/bundle/` (NSIS `.exe` and `.msi` on Windows; `.dmg`/`.app` on macOS; `.deb`/`.AppImage`/`.rpm` on Linux — cross-platform bundles must each be built on their own OS, or via CI).
> 
> ## How it works
> 
> - **Frontend**: React 19 + Tailwind v4, state managed with Zustand, animated with [Motion](https://motion.dev/) — all talking to the Rust backend over Tauri's IPC. Deliberately lightweight: the ambient background is two compositor-only CSS gradient orbs, and every looping animation freezes while the window is unfocused, so the app costs next to nothing sitting in the background.
> - **Backend**: Rust, using [`portable-pty`](https://docs.rs/portable-pty) to spawn the real `aether` binary (v1.3.0) in a genuine pseudo-terminal. Your chosen profile — protocol, scan mode, IP version, MASQUE transport (HTTP/3 or HTTP/2), obfuscation profile, quick reconnect — is passed as CLI flags/environment up front, so Aether's interactive prompts normally never appear; a background thread still watches the output and can answer any prompt that does, while forwarding every line live to the GUI's log panel.
> - **Ground truth for "connected"**: the GUI doesn't trust Aether's log wording alone (that's fragile across releases) — it treats a successful TCP connection to the local SOCKS5 port (`127.0.0.1:1819`) as the actual proof the tunnel is up.
> - **State machine**: `Idle → Launching → Connecting → Connected`, with `Reconnecting` and `Error` as the two ways a connection attempt can end up needing your attention — `Reconnecting` retries automatically (with backoff, capped at 3 attempts), `Error` is the final word once retries are exhausted or something isn't retriable (e.g. the binary itself is missing).
> 
> ## About Aether
> 
> [Aether](https://github.com/CluvexStudio/Aether) is the actual censorship-circumvention engine this app wraps — a standalone terminal tool that discovers reachable routes and establishes the tunnel, independent of any GUI. If you'd rather use it directly from a terminal, or want to understand exactly what it's doing under the hood, that's the repo to read. Aether-GUI exists purely to make that tool one click away for people who don't want to live in a terminal.
> 
> ## License
> 
> [GNU Affero General Public License v3.0](LICENSE).

## 延伸閱讀

相關概念：[[反審查]] · [[代理]] · [[桌面應用]]

相關專案：[[CluvexStudio--Aether|CluvexStudio/Aether]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[XingYu-Zhong--DeepSeek-GUI|XingYu-Zhong/DeepSeek-GUI]] · [[qiuzhi2046--Qclaw|qiuzhi2046/Qclaw]] · [[vercel-labs--zero-native|vercel-labs/zero-native]]

[GitHub](https://github.com/MatinSenPai/Aether-GUI)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面應用" AND file.name != "MatinSenPai--Aether-GUI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "MatinSenPai--Aether-GUI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "MatinSenPai--Aether-GUI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "MatinSenPai--Aether-GUI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["反審查","代理","桌面應用"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MatinSenPai--Aether-GUI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MatinSenPai--Aether-GUI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MatinSenPai" AND file.name != "MatinSenPai--Aether-GUI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
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

> **2026-07-21** — 首次收錄
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

- [[2026-07-21|2026-07-21]] — 首次收錄，669 stars
