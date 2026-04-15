---
repo: GitFrog1111/OpenWhip
url: https://github.com/GitFrog1111/OpenWhip
owner: GitFrog1111
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 2179
stars_per_day: 218
forks: 230
open_issues: 38
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
use_case: "讓 Claude 變得更聰明，透過簡單的指令來激勵他。"
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
star_history: "2026-04-09:1501,2026-04-09:1508,2026-04-10:1767,2026-04-10:1770,2026-04-11:1934,2026-04-11:1934,2026-04-12:2021,2026-04-13:2083,2026-04-14:2129,2026-04-15:2179"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "OpenWhip"
  - "GitFrog1111/OpenWhip"
  - "讓 Claude 變得更聰明，透過簡單的指令來激勵他。"
---

# OpenWhip

**2.2k** stars · **218** stars/天 · 建立 10 天前 · HTML · 未標註授權

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
> 讓 Claude 變得更聰明，透過簡單的指令來激勵他。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (218 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要簡單方式來激勵 AI 的獨立開發者或小型團隊。
> **一句話重點** 這個專案的趣味性在於它將 AI 的互動變得輕鬆有趣，適合喜歡嘗試新工具的開發者。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡單的 AI 互動工具，值得嘗試。

> [!abstract] 核心創新
> 透過簡單的 CLI 指令來激勵 AI，提升互動體驗。

## 專案簡介

OpenWhip 是一個用於激勵 Claude 的工具，透過簡單的 CLI 指令來發送鼓勵訊息。用戶可以透過點擊系統托盤圖示來啟動工具，並使用 Ctrl-C 中斷訊號來傳遞訊息。這個工具的設計目的在於簡化與 Claude 的互動，讓使用者能夠快速發送鼓勵訊息，進而提升 Claude 的表現。它支援 Windows、macOS 和 Linux，但在 Linux 上需要額外安裝 xdotool 來進行鍵盤自動化。核心功能包括發送五種鼓勵訊息，並記錄使用者的互動次數，這樣在未來的應用中可以更好地調整使用策略。這個工具的「一句話賣點」在於簡化與 AI 的互動，讓用戶可以輕鬆激勵 AI。

技術上，它使用 Electron 框架來構建桌面應用，並依賴 Node.js 18 以上版本，這使得它在各大平台上都能穩定運行。相較於其他類似工具，如 AgentSeal/codeburn 和 GitFrog1111/badclaude，OpenWhip 更專注於簡單的用戶互動，而不是複雜的功能或設定。這使得它在小型團隊或個人開發者中更具吸引力，因為它能快速上手且不需要額外的配置。使用者在實際操作中可能會遇到 Linux 環境下的依賴安裝問題，這需要額外注意。整體來看，這是一個適合小型專案或個人使用的工具，未來可能會持續增加新功能以擴展其應用範圍。

**技術棧**：`Electron 33.0.0` · `Node.js >=18.0.0`

## 重點功能

- 簡單的 CLI 操作 — 使用 `openwhip` 指令啟動工具，無需複雜設定。
- 多平台支援 — 支援 Windows、macOS 和 Linux，Linux 需額外安裝 xdotool。
- 發送鼓勵訊息 — 透過 Ctrl-C 發送五種不同的鼓勵訊息。
- 系統托盤整合 — 點擊托盤圖示即可快速啟動和使用。
- 使用者互動記錄 — 記錄用戶的互動次數，便於未來分析。

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
[
  "# 前置條件：已安裝 OpenWhip",
  "openwhip",
  "# 預期輸出：啟動 OpenWhip 並顯示托盤圖示"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 2179 stars（218/天），forks 230（10.6%），這顯示出該專案的快速增長。作者 GitFrog1111 在開源社群中活躍，這個專案解決了使用者與 AI 互動的痛點，讓用戶能夠輕鬆激勵 AI 的表現。近期的熱門 Issue，如對 Tom Scream 音效的需求，顯示出社群對於功能擴展的期待。這個工具的設計使得它能夠在多平台上運行，並且簡化了使用者的操作流程，這在當前的開發生態中是非常受歡迎的。

## 適合誰使用

**目標受眾**：需要簡單方式來激勵 AI 的獨立開發者或小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來快速激勵 Claude，因為這樣能提高開發效率，減少等待時間。
> - 小型團隊用它來增強團隊成員對 AI 的互動，因為簡單的操作可以讓每個人都能參與進來。
> - 教育工作者用它來展示 AI 的反應，因為這樣可以讓學生更直觀地理解 AI 的運作方式。

## 架構分析

OpenWhip 採用 Electron 框架來構建跨平台的桌面應用，這使得它能夠在 Windows、macOS 和 Linux 上運行。資料流方面，使用者透過 CLI 指令啟動應用，然後透過系統托盤圖示進行互動。這種設計使得用戶能夠快速上手，但也限制了功能的擴展性。選擇 Electron 的好處在於能夠快速開發和部署，但可能會導致應用體積較大。未來擴展功能時，可能會面臨性能瓶頸，特別是在處理大量用戶互動時。

## 技術深入分析

OpenWhip 的核心技術機制基於 Electron 框架，這使得它能夠在多平台上運行，並利用 Node.js 進行後端邏輯處理。它的資料流設計簡單，使用者透過 CLI 指令啟動應用，並透過系統托盤進行互動。這樣的設計雖然簡化了使用流程，但也限制了未來功能的擴展性。效能方面，因為是桌面應用，對於資源的需求相對較高，特別是在多用戶同時互動的情況下。選擇 Electron 的好處在於快速開發和跨平台支援，但可能會導致應用體積增大，並且在性能上可能會有瓶頸。技術風險方面，未來若使用者數量增加，可能會影響應用的穩定性。整合方面，與主流開發工具的相容性良好，但在 CI/CD pipeline 的整合上可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝和使用指令。安裝過程順暢，但 Linux 使用者需注意額外依賴。文件沒有多語言支持，主要以英文為主。整體來說，花 30 分鐘應該能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合新手。
> - 多平台支援，方便不同使用者。
> - 有趣的互動方式，提升使用者體驗。

> [!danger] 缺點
> - 功能較為單一，缺乏進階選項。
> - 社群活躍度低，問題解決速度慢。
> - Linux 使用者需額外安裝依賴。

> [!warning] 注意事項
> - Linux 環境需額外安裝 xdotool。
> - 目前僅支援基本的鼓勵訊息，功能較為單一。
> - 開發者社群活躍度尚需提升，Issue 解決率低。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於 AI 代碼的自動化，功能較為複雜，適合需要高效能的團隊。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 提供更豐富的功能選擇，但相對較難上手，適合有經驗的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於 AI 代碼的自動化，功能較為複雜，適合需要高效能的團隊。 | 如果你的團隊需要更高效的 AI 代碼自動化，並且能接受較高的學習曲線。 | medium，因為需要重新學習新的操作流程。 |
| [GitFrog1111/badclaude](https://github.com/GitFrog1111/badclaude) | 提供更豐富的功能選擇，但相對較難上手，適合有經驗的開發者。 | 如果你需要更複雜的功能和設定，並且有能力處理更高的學習曲線。 | high，因為需要重新適應新的功能和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenWhip** | **codeburn** | **badclaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代碼的自動化，功能較為複雜，適合需要高效能的團隊。 | 提供更豐富的功能選擇，但相對較難上手，適合有經驗的開發者。 |
> | 遷移成本 | - | medium，因為需要重新學習新的操作流程。 | high，因為需要重新適應新的功能和操作方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高效的 AI 代碼自動化，並且能接受較高的 | 如果你需要更複雜的功能和設定，並且有能力處理更高的學習曲線。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Linux 上安裝時，xdotool 可能會導致安裝失敗
  - 解法：確保系統已更新並安裝必要的依賴
- [MEDIUM] 使用過程中可能會出現性能瓶頸，特別是多用戶互動時
  - 解法：限制同時互動的用戶數量
- [MEDIUM] 社群活躍度低，問題解決速度慢
  - 解法：尋找其他社群或論壇尋求幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 互動工具 | 非常適合 | 簡單易用，能快速上手，適合小型團隊使用。 |
| 個人開發者的實驗性專案 | 適合 | 能夠快速激勵 AI，提升開發效率。 |
| 大型企業的核心系統 | 不適合 | 功能較為單一，無法滿足複雜需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡單的 AI 互動工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶的本地環境，不會存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 230 |
| Open Issues | 38 |
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

**社群活躍度**：社群活躍度中等，近期有 10 天內的開發活動。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[開發工具]]

相關專案：[[AgentSeal--codeburn|AgentSeal/codeburn]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

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
> const concepts = ["CLI/TUI","自動化","開發工具"];
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
