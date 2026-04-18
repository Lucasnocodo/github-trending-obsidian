---
repo: GitFrog1111/OpenWhip
url: https://github.com/GitFrog1111/OpenWhip
owner: GitFrog1111
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 2274
stars_per_day: 175
forks: 240
open_issues: 39
created: 2026-04-04
pushed_at: 2026-04-14
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "讓 Claude 更聽話的工具，透過簡單的點擊和命令來激勵 AI。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: 5
repo_size_kb: 590
readme_length: 710
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:1501,2026-04-09:1508,2026-04-10:1767,2026-04-10:1770,2026-04-11:1934,2026-04-11:1934,2026-04-12:2021,2026-04-13:2083,2026-04-14:2129,2026-04-15:2179,2026-04-16:2209,2026-04-17:2242,2026-04-18:2274"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "OpenWhip"
  - "GitFrog1111/OpenWhip"
  - "讓 Claude 更聽話的工具，透過簡單的點擊和命令來激勵 AI。"
---

# OpenWhip

**2.3k** stars · **175** stars/天 · 建立 13 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/GitFrog1111--OpenWhip");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude 更聽話的工具，透過簡單的點擊和命令來激勵 AI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (175 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望輕鬆與 AI 互動的開發者和使用者。
> **一句話重點** OpenWhip 讓與 AI 的互動變得輕鬆有趣，適合希望簡化 AI 使用過程的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "GitFrog1111--OpenWhip" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到輕鬆與 AI 互動的效果，值得一試。

> [!abstract] 核心創新
> 透過簡單的點擊和命令來激勵 AI，讓互動變得有趣。

## 專案簡介

OpenWhip 是一個用於激勵 AI Claude 的工具，透過簡單的 CLI 指令和圖示點擊來發送鼓勵訊息。使用者可以透過 `openwhip` 指令啟動應用，並透過點擊系統托盤圖示來發送激勵訊息，這些訊息會以 Ctrl-C 的方式中斷 Claude 的執行，並隨機發送五種鼓勵訊息之一。這種設計使得使用者能夠以輕鬆的方式與 AI 互動，並在需要時進行干預。技術上，OpenWhip 使用 Electron 框架來構建跨平台應用，支援 Windows、macOS 和 Linux（需額外安裝 xdotool）。這樣的選擇讓開發者能夠快速構建桌面應用，但也帶來了對 Electron 的依賴，可能影響應用的性能和資源使用。

與其他類似工具相比，如 0xGF/boneyard 和 GitFrog1111/badclaude，OpenWhip 提供了更直觀的用戶界面和簡單的操作方式，適合不想深入技術細節的使用者。使用者在使用過程中可能會面臨 Linux 環境下的安裝問題，因為需要額外安裝 xdotool。這個專案目前處於初始階段，未來可能會加入更多功能，如加密挖礦和更新的鞭打物理效果。整體而言，OpenWhip 是一個有趣的工具，適合想要輕鬆與 AI 互動的使用者，但在生產環境中使用時需謹慎考量其穩定性和性能。

**技術棧**：`Electron 33.0.0` · `Node.js >= 18.0.0`

## 重點功能

- 跨平台支援 — 同時支援 Windows、macOS 和 Linux，讓使用者能夠在不同系統上使用。
- 簡單的 CLI 指令 — 使用 `npm install -g openwhip` 安裝後，透過 `openwhip` 啟動應用。
- 系統托盤圖示 — 點擊托盤圖示可快速發送激勵訊息，提升使用者體驗。
- 隨機鼓勵訊息 — 每次鞭打會隨機發送五種鼓勵訊息，增加互動趣味。
- Linux 特殊需求 — 在 Linux 環境下需要安裝 `xdotool` 以支援鍵盤自動化。

## 快速開始

1. 安裝 OpenWhip
```bash
npm install -g openwhip
```
2. 啟動 OpenWhip
```bash
openwhip
```
3. 在 Linux 上安裝 xdotool
```bash
sudo apt install xdotool
```

## 程式碼範例

```html
{
  "前置條件": "已安裝 Node.js 和 npm",
  "指令": "npm install -g openwhip\nopenwhip",
  "預期輸出": "啟動 OpenWhip 應用，並在系統托盤顯示圖示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 2274 stars（175/天），forks 240（10.6%），顯示出相對活躍的社群參與。開發者 GitFrog1111 以其幽默的方式吸引了使用者，並且解決了 AI 互動中缺乏趣味性的痛點。這個專案的獨特性在於它的娛樂性和互動性，讓使用者能夠以輕鬆的方式與 AI 進行互動。社群的熱烈反應也反映了這種新穎的互動方式的需求。

## 適合誰使用

**目標受眾**：希望輕鬆與 AI 互動的開發者和使用者。

> [!example] 使用場景
> - AI 開發者用它來快速激勵 Claude，因為透過簡單的點擊操作可以提高 AI 的反應速度。
> - 遊戲開發者用它來增加遊戲中 AI 角色的互動性，因為它能夠隨機發送鼓勵訊息，增加趣味性。
> - 教育工作者用它來教導學生如何與 AI 互動，因為這個工具提供了直觀的操作方式，適合初學者。

## 架構分析

OpenWhip 採用 Electron 框架構建，這使得它能夠跨平台運行，並且利用 JavaScript 和 HTML 來實現用戶界面。應用的核心邏輯在於透過點擊系統托盤圖示來觸發 AI 的反應，這種設計使得使用者可以輕鬆地與 AI 互動。選擇 Electron 的代價在於可能會增加應用的資源消耗，特別是在低性能設備上。

資料流方面，使用者的點擊事件會被捕捉並轉換為對 AI 的指令，這樣的設計讓整體互動過程變得流暢。對於擴展性，未來可能會加入更多功能，但目前的架構可能會限制這些功能的實現。整體而言，OpenWhip 的架構設計旨在提供簡單易用的互動方式，但在性能和擴展性上仍有進步空間。

## 技術深入分析

OpenWhip 的核心技術機制基於 Electron 框架，這使得它能夠使用 JavaScript 和 HTML 來構建用戶界面，並且能夠在多個操作系統上運行。應用的資料流設計讓使用者的點擊事件能夠直接轉換為對 AI 的指令，這樣的設計使得互動過程變得直觀且流暢。效能方面，由於依賴 Electron，可能會在低性能設備上出現資源消耗過高的問題，特別是在處理大量使用者互動時。設計上選擇了簡單的 CLI 和圖示操作，這樣的選擇使得初學者能夠輕鬆上手，但也可能限制了進一步的功能擴展。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高負載情況下。整合方面，OpenWhip 能夠與現有的 Node.js 環境無縫整合，但在 CI/CD pipeline 的友好度上仍有待加強。整體而言，OpenWhip 提供了一個有趣的方式來與 AI 互動，但在性能和擴展性上仍需進一步優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含必要的指令範例。安裝過程相對順暢，但 Linux 使用者需注意額外安裝 xdotool 的步驟。文件中沒有多語言支持，僅提供英文說明，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 和圖示操作，適合初學者。
> - 跨平台支援，能在多種作業系統上運行。
> - 隨機發送鼓勵訊息，增加互動趣味。

> [!danger] 缺點
> - 依賴 Electron，可能影響性能。
> - Linux 使用者需額外安裝 xdotool，增加安裝複雜度。
> - 功能目前較為簡單，未來可能需要更多增強。

> [!warning] 注意事項
> - Linux 環境需額外安裝 xdotool。
> - 目前功能較為簡單，未來可能需要更多功能增強。
> - 依賴 Electron，可能影響性能和資源使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 互動功能，但沒有 OpenWhip 的直觀圖示操作。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 專注於對 Claude 的負面互動，與 OpenWhip 的正面激勵形成對比。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 互動功能，但沒有 OpenWhip 的直觀圖示操作。 | 如果需要更高的自定義能力和控制，且不介意較複雜的操作。 | medium，因為需要重新學習操作流程和配置。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 專注於對 Claude 的負面互動，與 OpenWhip 的正面激勵形成對比。 | 如果希望探索 AI 的負面反應，並進行相應的測試和研究。 | low，因為都是由同一開發者維護，操作邏輯相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenWhip** | **boneyard** | **badclaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI 互動功能，但沒有 OpenWhip 的直觀圖示操作。 | 專注於對 Claude 的負面互動，與 OpenWhip 的正面激勵形成對比。 |
> | 遷移成本 | - | medium，因為需要重新學習操作流程和配置。 | low，因為都是由同一開發者維護，操作邏輯相似。 |
> | 適用場景 | 主要場景 | 如果需要更高的自定義能力和控制，且不介意較複雜的操作。 | 如果希望探索 AI 的負面反應，並進行相應的測試和研究。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和娛樂用途，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Linux 環境下未安裝 xdotool 會導致功能無法使用
  - 解法：在安裝前確保執行 `sudo apt install xdotool`
- [MEDIUM] 在高負載下可能會出現性能瓶頸
  - 解法：減少同時互動的使用者數量，或在性能較好的設備上運行
- [low] 使用者可能會對隨機發送的訊息感到困惑
  - 解法：提供更清晰的使用說明和範例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 應用 | 非常適合 | 簡單易用的操作方式，適合快速原型開發。 |
| 教育機構進行 AI 教學 | 適合 | 提供直觀的互動方式，適合初學者學習。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性和性能尚未達到生產要求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到輕鬆與 AI 互動的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限運行，且不會存取敏感資料，但需注意依賴的 Electron 框架的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenWhip 通常與 Node.js 環境搭配使用，適合在開發和測試階段進行 AI 互動。在一個使用 Node.js 的專案中，可以透過安裝 OpenWhip 並使用 `openwhip` 指令來啟動應用，進而與 AI 進行互動。支援 GitHub Actions 進行 CI/CD，但在與主流 IDE 的整合上仍需進一步開發。整合過程中，最常見的問題是 Linux 環境下的依賴安裝，需提前準備好相關工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
| Forks | 240 |
| Open Issues | 39 |
| Issue 解決率 | 5% (2 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-04 |
| Repo 大小 | 590 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GitFrog1111/OpenWhip) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `electron` `koffi`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 59
>     "JavaScript" : 41
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GitFrog1111](https://github.com/GitFrog1111) | 12 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個功能請求和問題回報。
**連結**：[文件](https://github.com/GitFrog1111/OpenWhip#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** Whipped

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/GitFrog1111/OpenWhip/issues/5) | Feature Request: Add Tom Scream Sound Effect | 42 | 3 |
> | [#12](https://github.com/GitFrog1111/OpenWhip/issues/12) | Feature Request: MCP integration | 15 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenWhip
> 
> Sometimes claude code is going too shlow, and you must whip him into shape..
> 
> ## Install + run
> 
> ```bash
> npm install -g openwhip
> openwhip
> ```
> 
> windows and mac supported out of the box, but Linux is a special snowflake so you need to install `xdotool` for keyboard automation
> 
> ```bash
> sudo apt install xdotool
> ```
> 
> ## Controls
> 
> - Click tray icon: spawn whip.
> - Click: drop whip.
> - Whip him 😩💢
> - It sends an interrupt (Ctrl-C) and one of 5 encouraging messages!
> 
> ## Roadmap
> 
> - [x] Initial release! 🥳
> - [x] Cease and desist letter from Anthropic
> - [ ] Crypto miner
> - [ ] Logs of how many times you whipped claude so when the robots come we can order people nicely for them
> - [ ] Updated whip physics

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 互動]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/GitFrog1111/OpenWhip)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "GitFrog1111--OpenWhip"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GitFrog1111--OpenWhip"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "GitFrog1111--OpenWhip" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "GitFrog1111--OpenWhip"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","AI 互動"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GitFrog1111--OpenWhip" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GitFrog1111--OpenWhip" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GitFrog1111" AND file.name != "GitFrog1111--OpenWhip"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-11|2026-04-11]] — 再次上榜，1.9k stars
- [[2026-04-10|2026-04-10]] — 再次上榜，1.8k stars
- [[2026-04-09|2026-04-09]] — 首次收錄，1.5k stars
