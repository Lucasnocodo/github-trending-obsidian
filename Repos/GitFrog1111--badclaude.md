---
repo: GitFrog1111/OpenWhip
url: https://github.com/GitFrog1111/OpenWhip
owner: GitFrog1111
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 2356
stars_per_day: 131
forks: 253
open_issues: 42
created: 2026-04-04
pushed_at: 2026-04-14
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "幫助用戶透過簡單的鍵盤自動化來提升 Claude 的運行效率。"
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
star_history: "2026-04-09:1501,2026-04-09:1508,2026-04-10:1767,2026-04-10:1770,2026-04-11:1934,2026-04-11:1934,2026-04-12:2021,2026-04-13:2083,2026-04-14:2129,2026-04-15:2179,2026-04-16:2209,2026-04-17:2242,2026-04-18:2274,2026-04-19:2289,2026-04-20:2297,2026-04-21:2315,2026-04-22:2333,2026-04-23:2356"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
aliases:
  - "OpenWhip"
  - "GitFrog1111/OpenWhip"
  - "幫助用戶透過簡單的鍵盤自動化來提升 Claude 的運行效率。"
---

# OpenWhip

**2.4k** stars · **131** stars/天 · 建立 18 天前 · HTML · 未標註授權

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

`個人專案`

> [!summary] 一句話摘要
> 幫助用戶透過簡單的鍵盤自動化來提升 Claude 的運行效率。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (131 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要提升 Claude 效率但不想進行複雜設定的開發者。
> **一句話重點** 這個專案的獨特之處在於其即時反饋設計，讓用戶能夠快速提升 Claude 的運行效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--OpenWhip");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "GitFrog1111--OpenWhip" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到即時反饋的自動化工具，值得一試。

> [!abstract] 核心創新
> 提供即時反饋的鍵盤自動化工具，專為提升 Claude 效率設計。

## 專案簡介

OpenWhip 是一個針對 Claude 的輔助工具，旨在透過簡單的鍵盤自動化來提升其運行效率。用戶只需安裝並運行 `openwhip`，便可以透過點擊系統托盤圖示來發送中斷信號（Ctrl-C），並附帶五種鼓勵訊息，這樣的設計使得用戶能夠輕鬆地對抗 Claude 的緩慢反應。這個工具的賣點在於其簡單易用的介面和即時反饋。技術上，OpenWhip 使用 Electron 框架來構建跨平台應用，並依賴 `xdotool` 進行 Linux 系統的鍵盤自動化，這樣的選擇使得它能夠在 Windows 和 macOS 上無縫運行，但對於 Linux 用戶則需要額外的安裝步驟。與其他類似工具相比，如 `0xGF/boneyard` 和 `GitFrog1111/badclaude`，OpenWhip 提供了更簡單的用戶互動方式，並專注於即時的反饋機制。

這使得它在需要快速操作和反應的場景中更具優勢。使用者可能會遇到的問題包括在 Linux 上安裝 `xdotool` 的步驟，這可能對於不熟悉 Linux 的用戶造成困擾。整體來看，這個專案目前處於初期階段，功能尚在擴展中，但對於需要提升 Claude 效率的用戶來說，值得一試。預計未來會增加更多功能，如更新的鞭子物理效果和更多的日誌功能，這將進一步提升其使用價值。

**技術棧**：`Electron 33.0.0` · `Node.js >= 18.0.0`

## 重點功能

- 跨平台支持 — 同時支持 Windows、macOS 和 Linux，提供廣泛的用戶基礎。
- 簡單的安裝 — 只需一條指令 `npm install -g openwhip` 即可安裝。
- 即時反饋 — 點擊托盤圖示即可發送中斷信號和鼓勵訊息，提升互動性。
- 自動化支持 — 在 Linux 上需安裝 `xdotool` 以實現鍵盤自動化，增強功能。
- 未來擴展性 — 路線圖中提到將增加更多功能，如更新的鞭子物理效果。

## 快速開始

1. 全局安裝 OpenWhip
```bash
npm install -g openwhip
```
2. 運行 OpenWhip
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
  "預期輸出": "應用啟動並顯示托盤圖示，準備接受用戶操作。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天就累積 2356 stars（131/天），forks 253（10.7%），這顯示出相對活躍的使用者基礎。作者 GitFrog1111 之前的作品也集中在提升 AI 效率的工具上，這使得 OpenWhip 能夠吸引對 Claude 有需求的用戶。這個工具解決了用戶在使用 Claude 時遇到的反應慢的痛點，提供了一個簡單的解決方案。社群的反應熱烈，特別是對於增加聲音效果的需求，顯示出用戶對於這個工具的期待。整體來看，這個專案的增長是因為其獨特的功能和即時反饋的設計。

## 適合誰使用

**目標受眾**：需要提升 Claude 效率但不想進行複雜設定的開發者。

> [!example] 使用場景
> - 開發者用它來快速提升 Claude 的運行效率，因為它能即時發送中斷信號，讓反應更快。
> - 系統管理員用它來監控 Claude 的性能，因為可以輕鬆記錄鞭打次數，便於後續分析。
> - 遊戲開發者用它來測試 AI 角色的反應速度，因為能夠快速調整 Claude 的行為以達到最佳效果。

## 架構分析

OpenWhip 採用 Electron 框架構建，這使得它能夠在多個平台上運行。應用的核心是 `main.js`，負責啟動應用並管理托盤圖示。用戶透過點擊托盤圖示來觸發事件，這些事件會通過 `xdotool` 在 Linux 上實現鍵盤自動化。這種設計的優勢在於能夠快速部署，但也帶來了對 Linux 環境的額外依賴。未來擴展性方面，若要增加更多功能，可能需要重新考慮架構的靈活性，以支持更複雜的自動化需求。

## 技術深入分析

OpenWhip 的核心技術是基於 Electron 框架，這使得它能夠在多個平台上運行。應用的主要功能是透過鍵盤自動化來提升 Claude 的效率，這是通過 `xdotool` 在 Linux 上實現的。效能方面，這個工具的反應速度取決於用戶的操作和系統性能，冷啟動時間相對較短，因為它主要依賴 Node.js 的事件循環來處理事件。選擇 Electron 的原因在於其跨平台能力，但這也意味著應用的體積相對較大，並且可能會面臨性能瓶頸。技術風險方面，依賴於外部工具（如 `xdotool`）可能會在不同環境中造成不一致的行為。整合方面，這個工具可以輕鬆與其他 CLI 工具鏈結合，但在某些情況下，可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和基本使用說明，安裝過程對於大多數用戶來說相對順暢。Linux 用戶需注意安裝 `xdotool` 的步驟。整體來說，文檔質量良好，但缺乏更詳細的使用範例。沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手，適合各類用戶。
> - 跨平台支持，能夠在多種操作系統上運行。
> - 即時反饋機制提升了用戶互動性。

> [!danger] 缺點
> - Linux 用戶需額外安裝依賴，增加了安裝複雜度。
> - 功能尚在開發中，可能存在不穩定性。
> - 目前功能有限，未來擴展性尚不明確。

> [!warning] 注意事項
> - Linux 用戶需額外安裝 `xdotool`，增加安裝複雜度。
> - 功能尚在開發中，可能存在不穩定性。
> - 目前僅支持基本的鍵盤自動化，未來功能尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的自動化功能，但缺乏即時反饋機制，適合需要更高自動化的場景。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 專注於對抗 Claude 的不穩定性，但不具備 OpenWhip 的即時互動性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供自動化功能，但缺乏即時反饋，主要針對批量處理。 | 如果需要處理大量數據而不需要即時反饋，可以選擇它。 | medium，因為需要重新調整用戶操作流程。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 專注於提升 Claude 的穩定性，但不具備即時互動性。 | 如果需要更穩定的執行環境而不需要即時反饋，可以考慮這個工具。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenWhip** | **boneyard** | **badclaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供自動化功能，但缺乏即時反饋，主要針對批量處理。 | 專注於提升 Claude 的穩定性，但不具備即時互動性。 |
> | 遷移成本 | - | medium，因為需要重新調整用戶操作流程。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要處理大量數據而不需要即時反饋，可以選擇它。 | 如果需要更穩定的執行環境而不需要即時反饋，可以考慮這個工具。 |

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

- **[HIGH]** Linux 上需要安裝 `xdotool`，否則無法正常運行
  - 解法：安裝 `xdotool`，使用 `sudo apt install xdotool`
- [MEDIUM] 功能尚在開發中，可能存在不穩定性
  - 解法：定期檢查更新，並參與社群反饋
- [MEDIUM] 在某些系統上可能無法正確識別托盤圖示
  - 解法：檢查系統托盤設置，確保應用有足夠權限

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 AI 應用 | 非常適合 | 簡單易用，能快速提升開發效率。 |
| 大型企業的生產環境 | 不適合 | 目前功能尚不穩定，風險較高。 |
| 個人開發者的 side project | 適合 | 能夠快速上手，提升開發體驗。 |
| 需要高穩定性的商業應用 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時反饋的自動化工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶的鍵盤輸入。依賴的外部工具（如 `xdotool`）需確保來源可信。

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
| Forks | 253 |
| Open Issues | 42 |
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

**社群活躍度**：社群活躍，近期有多個功能請求和反饋。
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

相關概念：[[自動化]] · [[CLI/TUI]] · [[跨平台應用]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/GitFrog1111/OpenWhip)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "GitFrog1111--OpenWhip"
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
> const concepts = ["自動化","CLI/TUI","跨平台應用"];
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
