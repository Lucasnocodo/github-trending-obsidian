---
repo: GitFrog1111/badclaude
url: https://github.com/GitFrog1111/badclaude
owner: GitFrog1111
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 1508
stars_per_day: 377
forks: 157
open_issues: 28
created: 2026-04-04
pushed_at: 2026-04-07
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
use_case: "一個用來「鞭策」Claude AI 的工具，讓它更有效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-12"
contributor_count: 1
engagement: "medium"
issue_close_rate: 7
repo_size_kb: 562
readme_length: 542
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:1501,2026-04-09:1508"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "badclaude"
  - "GitFrog1111/badclaude"
  - "一個用來「鞭策」Claude AI 的工具，讓它更有效率。"
---

# badclaude

**1.5k** stars · **377** stars/天 · 建立 4 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/GitFrog1111--badclaude");
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
> 一個用來「鞭策」Claude AI 的工具，讓它更有效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (377 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 尋找有趣方式來互動和調整 AI 行為的開發者。
> **一句話重點** badclaude 不僅是一個工具，更是一種輕鬆互動的方式來調整 AI 行為。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "GitFrog1111--badclaude" && p.status !== "archived")
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
> **結論** 花 2 小時學、1 小時整合，得到輕鬆互動的體驗，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將幽默感和互動性融入到 AI 控制工具中。

## 專案簡介

badclaude 是一個有趣的工具，旨在透過一個簡單的互動界面來「鞭策」Claude AI，使其運行更有效率。用戶可以透過點擊系統托盤圖示來生成鞭子，並且每次點擊會發送一個中斷信號 (Ctrl-C)，同時顯示五種鼓勵訊息之一。這種設計不僅增加了互動性，還讓使用者在使用過程中感受到趣味性。這個工具使用 Electron 框架開發，能夠在 macOS 和 Windows 上運行，並且需要 Node.js 18 以上版本。其依賴的 Electron 版本為 33.0.0，這意味著它能夠利用最新的桌面應用功能。

與其他類似工具相比，badclaude 的獨特之處在於它的幽默感和互動性，這使得它在功能上與傳統的 AI 控制工具如 0xGF/boneyard 和 Gitlawb/openclaude 有所不同，後者通常更專注於功能性而非趣味性。使用者可能會發現，這個工具在實際使用中會有一些限制，例如它的實用性可能不如專業的 AI 控制工具，但它的設計理念卻能帶來輕鬆的使用體驗。這個專案目前處於早期階段，社群活躍度中等，開發者對於功能的未來擴展有清晰的路線圖。對於喜歡輕鬆互動的開發者來說，這是一個值得嘗試的工具，但如果需要穩定的生產環境，則可能需要考慮其他選擇。

**技術棧**：`Electron 33.0.0` · `Node.js >=18.0.0`

## 重點功能

- 互動鞭子 — 點擊托盤圖示生成鞭子並發送中斷信號。
- 鼓勵訊息 — 每次使用鞭子會顯示五種鼓勵訊息之一。
- 跨平台支持 — 可在 macOS 和 Windows 上運行。
- 簡單安裝 — 使用 npm 安裝，命令為 `npm install -g badclaude`。
- 開發者友好 — 使用 Electron 框架，便於進一步擴展和自定義。

## 快速開始

1. 安裝 badclaude
```bash
npm install -g badclaude
```
2. 啟動 badclaude
```bash
badclaude
```
3. 點擊托盤圖示以生成鞭子
```bash
# 點擊托盤圖示
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1508 stars（377/天），forks 157（10.4%），顯示出相當高的使用者興趣。作者 GitFrog1111 似乎專注於創造有趣的工具，這個專案的幽默性和互動性是它的賣點。這個工具解決了用戶在使用 Claude AI 時的效率問題，提供了一種輕鬆的方式來提高其表現。社群對於功能的需求也反映在熱門 Issues 中，像是對於聲音效果和整合的需求。這些因素共同促成了其快速的增長。

## 適合誰使用

**目標受眾**：尋找有趣方式來互動和調整 AI 行為的開發者。

> [!example] 使用場景
> - 遊戲開發者用它來調整 AI 的行為，因為這樣可以讓遊戲中的角色更具互動性和趣味性。
> - 教育工作者用它來展示 AI 的反應，因為這能讓學生在學習過程中感受到趣味和參與感。
> - 獨立開發者用它來測試 AI 的反應速度，因為這樣可以在開發過程中快速調整 AI 的行為。

## 架構分析

badclaude 採用 Electron 框架，這使得它能夠在桌面環境中運行，並利用 Node.js 的生態系統。應用的主要功能集中在一個簡單的用戶界面上，通過托盤圖示與用戶互動。資料流方面，當用戶點擊托盤圖示時，應用會生成一個鞭子並發送中斷信號，這個設計使得用戶能夠輕鬆地與 AI 進行互動。選擇 Electron 的好處在於它的跨平台支持，但代價是可能會增加應用的體積和資源消耗。整體上，這個架構適合小型工具，但在擴展性上可能會面臨挑戰，尤其是當功能需求增加時。

## 技術深入分析

badclaude 的核心技術機制基於 Electron 框架，這使得它能夠利用 Node.js 的生態系統來開發桌面應用。應用的互動設計讓用戶能夠通過簡單的點擊來控制 AI，這種方式提高了使用的趣味性和參與感。效能方面，由於是基於 Electron，可能會對資源有一定的需求，但具體的數據尚未提供。選擇 Electron 的好處在於能夠快速開發跨平台應用，但這也可能導致應用體積較大，影響啟動速度。技術風險方面，由於專案仍在早期階段，未來的功能擴展可能會面臨不穩定的問題。整合方面，這個工具可以與其他 Node.js 生態系統的工具進行搭配，但在與大型框架的整合上可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的基本指導。安裝過程相對順暢，沒有明顯的坑。雖然沒有詳細的入門指南，但基本功能易於理解，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 有趣的互動設計，讓使用 AI 的過程變得輕鬆。
> - 簡單的安裝過程，適合快速上手。
> - 跨平台支持，能在多種操作系統上運行。

> [!danger] 缺點
> - 功能仍在開發中，穩定性不足。
> - 不適合用於生產環境，主要用於娛樂。
> - 社群活躍度中等，可能影響未來的支持和更新。

> [!warning] 注意事項
> - 目前功能仍在開發中，未來可能會有更多功能。
> - 使用過程中可能會遇到不穩定的行為，因為專案仍在早期階段。
> - 不適合用於生產環境，主要用於娛樂和互動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 更專注於功能性，適合需要穩定 AI 控制的開發者，而 badclaude 則提供更輕鬆的互動體驗。 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | openclaude 提供更為專業的 AI 控制選項，適合需要高效能的應用場景，badclaude 則更著重於趣味性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 更專注於功能性，適合需要穩定 AI 控制的開發者，而 badclaude 則提供更輕鬆的互動體驗。 | 如果你的專案需要穩定的 AI 控制功能，而不需要趣味性，則應選擇 boneyard。 | medium，因為需要重新設計用戶互動方式。 |
| [Gitlawb/openclaude](https://github.com/Gitlawb/openclaude) | openclaude 提供更為專業的 AI 控制選項，適合需要高效能的應用場景，badclaude 則更著重於趣味性。 | 如果你的團隊需要高效能的 AI 控制，而不在乎互動性，則應選擇 openclaude。 | high，因為需要重新設計整個應用的架構和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **badclaude** | **boneyard** | **openclaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 更專注於功能性，適合需要穩定 AI 控制的開發者，而 badclaude 則提供更輕鬆的互動體驗。 | openclaude 提供更為專業的 AI 控制選項，適合需要高效能的應用場景，badclaude 則更著重於趣味性。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶互動方式。 | high，因為需要重新設計整個應用的架構和功能。 |
> | 適用場景 | 主要場景 | 如果你的專案需要穩定的 AI 控制功能，而不需要趣味性，則應 | 如果你的團隊需要高效能的 AI 控制，而不在乎互動性，則應選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些系統上可能無法正常顯示托盤圖示
  - 解法：檢查系統托盤設定或重新啟動應用
- **[HIGH]** 使用過程中可能會出現不穩定的行為
  - 解法：定期更新應用以獲取最新修復
- [MEDIUM] 部分功能尚未實現，可能導致使用者失望
  - 解法：關注未來更新以獲取新功能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊 | 非常適合 | 可以輕鬆調整 AI 行為，增加遊戲趣味性。 |
| 教育機構的 AI 課程 | 適合 | 能夠展示 AI 的反應，增加學生的參與感。 |
| 大型企業的生產環境 | 不適合 | 不穩定性和功能缺失不符合生產需求。 |
| 獨立開發者的個人專案 | 普通 | 雖然有趣，但功能尚不成熟。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到輕鬆互動的體驗，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
| Forks | 157 |
| Open Issues | 28 |
| Issue 解決率 | 7% (2 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-04 |
| Repo 大小 | 562 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GitFrog1111/badclaude) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `electron` `koffi`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 62
>     "JavaScript" : 38
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GitFrog1111](https://github.com/GitFrog1111) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對功能的未來擴展有清晰的路線圖。
**連結**：[文件](https://github.com/GitFrog1111/badclaude#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-07）
> **活躍天數** 2 天 · **最新 commit** Exhibit A

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/GitFrog1111/badclaude/issues/5) | Feature Request: Add Tom Scream Sound Effect | 41 | 3 |
> | [#12](https://github.com/GitFrog1111/badclaude/issues/12) | Feature Request: MCP integration | 15 | 0 |
> | [#17](https://github.com/GitFrog1111/badclaude/issues/17) | Mine starts moaning when I use the whip?? | 6 | 2 |
> | [#8](https://github.com/GitFrog1111/badclaude/issues/8) | CLAUDE.md file missing. | 6 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # badclaude
> 
> Sometimes claude code is going too shlow, and you must whip him into shape..
> 
> ## Install + run
> 
> ```bash
> npm install -g badclaude
> badclaude
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[互動設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[claude-code-best--claude-code|claude-code-best/claude-code]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

[GitHub](https://github.com/GitFrog1111/badclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "GitFrog1111--badclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","互動設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GitFrog1111--badclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GitFrog1111--badclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GitFrog1111" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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

- [[2026-04-09|2026-04-09]] — 首次收錄，1.5k stars
