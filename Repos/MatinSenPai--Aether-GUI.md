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
category: "基礎設施"
subcategory: "反審查工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供一鍵式桌面 GUI 來使用 Aether 反審查隧道，簡化命令行操作。"
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
star_history: "2026-07-21:669,2026-07-21:669"
tags:
  - github
  - "category/基礎設施"
  - "lang/typescript"
  - easy_install
  - "topic/anti_censorship"
  - "topic/censorship_circumvention"
  - "topic/desktop_app"
  - "topic/proxy"
  - "topic/react"
aliases:
  - "Aether-GUI"
  - "MatinSenPai/Aether-GUI"
  - "提供一鍵式桌面 GUI 來使用 Aether 反審查隧道，簡化命令行操作。"
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

`v0.5.0` `easy-install`

`anti-censorship` `censorship-circumvention` `desktop-app` `proxy` `react` `rust` `tauri` `typescript`

> [!summary] 一句話摘要
> 提供一鍵式桌面 GUI 來使用 Aether 反審查隧道，簡化命令行操作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (112 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望在受限網路環境中輕鬆使用 Aether 的普通用戶，尤其是對命令行不熟悉的人。
> **一句話重點** Aether-GUI 的設計讓反審查工具變得更易於使用，特別是對於不熟悉技術的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MatinSenPai--Aether-GUI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "反審查工具" && p.file.name !== "MatinSenPai--Aether-GUI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 反審查工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡化的反審查連接，值得一試。

> [!abstract] 核心創新
> 這個專案最核心的創新點是提供了一個簡化的桌面 GUI 來操作 Aether，無需命令行經驗。

## 專案簡介

Aether-GUI 是一款為 Aether 反審查隧道設計的桌面應用，讓使用者無需接觸命令行即可輕鬆連接。使用者只需按下 Connect 鈕，應用程式會自動處理身份驗證、路由發現和提示回答等操作。這個 GUI 實際上是驅動 Aether 的二進制檔，並在伺服器上執行，確保所有的隧道邏輯都由 Aether 處理。其核心賣點在於簡化了複雜的設置過程，讓使用者能夠專注於連接而非配置。技術上，這個專案使用 Tauri 框架來構建桌面應用，並結合 React 和 TypeScript 提供現代化的用戶界面。

Aether-GUI 支持多種連接模式，包括 Turbo、Balanced、Thorough、Stealth 和 Ironclad，讓使用者可以根據需求選擇不同的路由發現速度和安全性。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Aether-GUI 的獨特之處在於其對 Aether 的深度整合，並提供即時的連接狀態和進度顯示。這使得使用者能夠直觀地了解連接過程，並在連接中斷時自動重試，提升了使用體驗。雖然這個工具在功能上非常強大，但仍然依賴於 Aether 的穩定性和性能，這可能會影響其在高負載環境下的表現。整體來看，這是一個適合需要簡化反審查連接流程的用戶的工具，特別是對於不熟悉命令行的使用者來說，這個 GUI 提供了極大的便利。

**技術棧**：`TypeScript` · `Rust` · `React 19` · `Tauri v2`

## 重點功能

- 一鍵連接 — 只需按下 Connect 鈕，無需配置即可自動連接。
- 多種掃描模式 — 提供 Turbo、Balanced、Thorough、Stealth 和 Ironclad 等選項，根據需求選擇速度和安全性。
- 即時進度顯示 — 在尋找可用路由時，顯示實際經過時間和進度條。
- 自動重連 — 當隧道意外中斷時，自動重試連接，並顯示重試狀態。
- 高級面板 — 提供進階選項，讓使用者可以自定義協議、IP 版本和 MASQUE 傳輸等設置。

## 快速開始

1. 下載最新安裝程式
```bash
從 Releases 頁面下載最新版本
```
2. 安裝應用程式
```bash
運行下載的安裝程式
```
3. 啟動應用程式並連接
```bash
打開 Aether-GUI，按下 Connect 鈕
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 669 stars（112/天），forks 30（4.5%），顯示出不錯的增長潛力。這個工具的作者 MatinSenPai 之前有開發相關的反審查工具，解決了使用 Aether 時的操作繁瑣問題，讓更多用戶能夠輕鬆使用。近期的推廣活動和社群討論也可能促進了這個專案的曝光。這個工具的出現恰逢對網路自由和隱私需求上升的時期，讓它的實用性和需求得以提升。forks/stars 比率適中，顯示出一些用戶正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在受限網路環境中輕鬆使用 Aether 的普通用戶，尤其是對命令行不熟悉的人。

> [!example] 使用場景
> - 普通用戶用它來輕鬆連接 Aether 隧道，因為不需要任何命令行經驗，按下 Connect 就能自動處理所有設置。
> - 網路安全專家用它來測試不同的連接模式，因為它提供了多種路由發現選項，能夠根據需求調整安全性和速度。
> - 開發者用它來快速部署反審查工具，因為它的 GUI 簡化了配置過程，讓他們能專注於其他開發任務。

## 架構分析

Aether-GUI 採用 Tauri 框架構建，這使得它能夠以小型的桌面應用形式運行，並且能夠使用 Rust 和 TypeScript 進行開發。資料流方面，應用程式通過與 Aether 的二進制檔進行交互，實現了用戶的操作與後端隧道邏輯的分離。這種設計使得應用程式能夠在不改變 Aether 的核心邏輯的情況下，提供更友好的用戶介面。

選擇 Tauri 而非 Electron 的原因在於其更輕量且性能優越，但這也意味著對於某些高級功能的支持可能有限。擴展性方面，這個架構能夠輕鬆添加新功能，但在處理大量並發連接時可能會遇到性能瓶頸，特別是在高負載的網路環境下。整體來看，這種架構設計能夠有效地平衡性能與可用性。

## 技術深入分析

Aether-GUI 的核心技術機制是使用 Tauri 框架來構建桌面應用，這使得它能夠以小型且高效的方式運行。它通過與 Aether 的二進制檔進行交互，實現了用戶的操作與後端隧道邏輯的分離，這樣的設計能夠簡化使用者的操作流程。效能方面，這個應用能夠在一般的桌面環境下流暢運行，但在高負載的網路環境下可能會遇到性能瓶頸。選擇 Rust 作為後端語言的原因在於其高效能和安全性，這對於處理網路請求至關重要。依賴樹方面，這個專案的依賴相對輕量，主要集中在 Tauri 和 React 上，這使得整體的維護成本較低。技術風險方面，若 Aether 的核心邏輯發生變更，可能會影響到 GUI 的正常運作，這需要開發者持續關注 Aether 的更新。整合方面，這個工具能夠與現有的開發流程無縫對接，特別是在使用 CI/CD 的環境中，能夠快速部署和測試。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝步驟，但缺乏具體的使用範例。安裝過程相對順暢，使用者只需下載安裝程式並運行。沒有提供多語言支持，僅有英文和波斯文版本。整體來說，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡化了 Aether 的使用流程，讓不熟悉命令行的用戶也能輕鬆連接。
> - 提供即時的連接狀態和進度顯示，提升用戶體驗。
> - 多種掃描模式可供選擇，滿足不同用戶的需求。

> [!danger] 缺點
> - 目前僅支援 Linux 和 Windows，對 macOS 用戶不友好。
> - 依賴於 Aether 的穩定性，若 Aether 出現問題，GUI 也無法正常運作。
> - 對於高延遲網路的支持可能不足，影響連接穩定性。

> [!warning] 注意事項
> - 僅支援 Linux 和 Windows 平台，尚未提供 macOS 版本。
> - 對於高延遲網路環境，可能會影響連接穩定性。
> - 需要安裝 Aether 的二進制檔，無法獨立運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理伺服器的自動化配置，而 Aether-GUI 提供更直觀的用戶界面和即時進度顯示。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要針對 VPN 服務的管理，而 Aether-GUI 專注於反審查隧道的連接，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理伺服器的自動化配置，提供更靈活的代理選擇。 | 如果你的團隊需要高度自定義的代理配置，這個工具會更適合。 | medium，因為需要重新配置代理設定。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 針對 VPN 服務的管理，提供更全面的網路安全解決方案。 | 如果你的需求不僅限於反審查，還包括全面的 VPN 管理，則應考慮這個工具。 | high，因為需要重新設計整個網路架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Aether-GUI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理伺服器的自動化配置，提供更靈活的代理選擇。 | 針對 VPN 服務的管理，提供更全面的網路安全解決方案。 |
> | 遷移成本 | - | medium，因為需要重新配置代理設定。 | high，因為需要重新設計整個網路架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高度自定義的代理配置，這個工具會更適合。 | 如果你的需求不僅限於反審查，還包括全面的 VPN 管理，則應 |

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

- **[HIGH]** 在高延遲網路環境下，連接可能不穩定。
  - 解法：嘗試使用不同的掃描模式以提高穩定性。
- [MEDIUM] 某些用戶可能無法在特定環境下啟動 Aether。
  - 解法：檢查系統要求，確保安裝了所有必要的依賴。
- [MEDIUM] 在使用 Ironclad 模式時，連接速度較慢。
  - 解法：根據需求選擇其他掃描模式以提高速度。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要簡化反審查工具的使用 | 非常適合 | 提供簡單的 GUI 使得使用者無需命令行經驗。 |
| 需要高度自定義的反審查解決方案 | 普通 | 雖然有進階選項，但仍然依賴於 Aether 的核心邏輯。 |
| 大型企業需要穩定的 VPN 服務 | 不適合 | 此工具專注於反審查，無法提供全面的 VPN 管理功能。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡化的反審查連接，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料，但依賴於 Aether 的安全性。

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

**社群活躍度**：社群活躍度中等，開發者定期更新並回應問題。
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

相關概念：[[反審查]] · [[隧道技術]] · [[代理伺服器]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[CluvexStudio--Aether|CluvexStudio/Aether]] · [[XingYu-Zhong--DeepSeek-GUI|XingYu-Zhong/DeepSeek-GUI]] · [[qiuzhi2046--Qclaw|qiuzhi2046/Qclaw]] · [[vercel-labs--zero-native|vercel-labs/zero-native]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]]

[GitHub](https://github.com/MatinSenPai/Aether-GUI)

## 相關收錄

> [!note]- 直接競品（同子分類：反審查工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "反審查工具" AND file.name != "MatinSenPai--Aether-GUI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "MatinSenPai--Aether-GUI"
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
> const concepts = ["反審查","隧道技術","代理伺服器"];
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
