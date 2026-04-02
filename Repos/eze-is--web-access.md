---
repo: eze-is/web-access
url: https://github.com/eze-is/web-access
owner: eze-is
owner_type: User
language: JavaScript
license: N/A
description: "给 Claude Code 装上完整联网能力的 skill：三层通道调度 + 浏览器 CDP + 并行分治"
homepage: ""
stars: 3404
stars_per_day: 243
forks: 239
open_issues: 6
created: 2026-03-18
pushed_at: 2026-03-31
first_seen: 2026-03-25
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-25
use_case: "為 Claude Code 提供完整的網絡能力，實現自動化瀏覽和數據提取。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 70
repo_size_kb: 83
readme_length: 3381
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-25"
star_history: "2026-03-25:1010,2026-03-25:1026,2026-03-26:1444,2026-03-27:1721,2026-03-29:2026,2026-03-30:2090,2026-03-31:2833,2026-04-01:3170,2026-04-02:3404"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "web-access"
  - "eze-is/web-access"
  - "為 Claude Code 提供完整的網絡能力，實現自動化瀏覽和數據提取。"
---

# web-access

**3.4k** stars · **243** stars/天 · 建立 14 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/eze-is--web-access");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 為 Claude Code 提供完整的網絡能力，實現自動化瀏覽和數據提取。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (243 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要自動化網絡操作的開發者和數據分析師。
> **一句話重點** 這個專案的強大之處在於它能夠將網絡操作自動化，讓開發者能夠專注於更高層次的任務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/eze-is--web-access");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "eze-is--web-access" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠實現網頁自動化，值得考慮。

> [!abstract] 核心創新
> 提供了基於 CDP 的全新網絡操作能力，支持多種自動化策略和並行執行。

## 專案簡介

這個專案為 Claude Code 增加了完整的網絡能力，通過三層通道調度、CDP 瀏覽器操作和並行分治技術，讓 AI 能夠自動化執行網絡任務。用戶可以透過簡單的指令，例如「幫我搜索 xxx 最新進展」，讓 Agent 自動選擇最合適的工具進行操作。核心機制是根據場景自動選擇不同的網絡工具，並通過 CDP 直接與 Chrome 瀏覽器進行交互，支持多種操作方式如 JS 點擊、真實鼠標點擊和文件上傳。這樣的設計讓 AI 能夠在動態頁面上進行操作，並且能夠跨 session 共享操作經驗，提升效率。技術上，專案使用 Node.js 22+ 和 WebSocket 進行 CDP Proxy 的實現，這使得它可以在多平台上運行，並且能夠穿透 DOM 邊界進行操作。

與其他工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，這個專案提供了更強大的自動化能力和更靈活的操作方式，特別是在處理動態網站和多目標任務時。實際使用中，這個工具能夠處理多個並行任務，並且在操作過程中能夠自動記錄和重用操作經驗，這對於需要頻繁訪問相似網站的用戶來說非常有用。儘管目前仍在活躍開發中，但已經展示出穩定的性能和良好的擴展性，適合中小型團隊進行實驗和開發。對於需要自動化網絡操作的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`Node.js 22+` · `WebSocket` · `CDP`

## 重點功能

- 自動選擇網絡工具 — 根據場景自動選擇 WebSearch、WebFetch、curl 等工具。
- CDP Proxy 瀏覽器操作 — 直接連接 Chrome，支持動態頁面和交互操作。
- 三種點擊方式 — 支持 JS 點擊、真實鼠標點擊和文件上傳，靈活應對不同場景。
- 並行分治 — 支持多目標任務的並行執行，提升效率。
- 站點經驗積累 — 按域名存儲操作經驗，跨 session 重用，減少重複操作。
- 媒體提取 — 從 DOM 中提取圖片/視頻 URL，支持截帧分析。

## 快速開始

1. 自動安裝技能
```bash
帮我安装这个 skill：https://github.com/eze-is/web-access
```
2. 插件安裝
```bash
claude plugin marketplace add https://github.com/eze-is/web-access
```
3. 手動安裝
```bash
git clone https://github.com/eze-is/web-access ~/.claude/skills/web-access
```

## 程式碼範例

```js
[
  "# 前置條件（需要 Node.js 22+ 和 Chrome 開啟遠程調試）",
  "node \"$CLAUDE_SKILL_DIR/scripts/cdp-proxy.mjs\" &",
  "# 預期輸出：啟動 CDP Proxy，並準備進行網頁操作。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天就累積 3404 stars（243/天），forks 239（7.0%），顯示出強烈的興趣和活躍度。這個專案由 EzeW 和其他幾位貢獻者共同開發，解決了 Claude Code 在網絡操作上的不足，特別是缺乏調度策略和自動化能力。之前的方案無法有效處理動態網站的交互，這使得用戶在執行自動化任務時面臨困難。最近的推文和社群討論也讓這個專案受到了更多的關注。技術上，CDP 的使用讓這個工具能夠直接與瀏覽器進行交互，這是之前工具所不具備的能力。forks/stars 比率為 7.0%，顯示出有相當一部分用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化網絡操作的開發者和數據分析師。

> [!example] 使用場景
> - 後端工程師用它來自動化網頁數據抓取，因為這樣可以節省大量手動操作時間，並提高數據準確性。
> - 產品經理用它來快速調研競爭對手的網站，因為它能夠同時處理多個網站並提供摘要，節省了調研時間。
> - 測試工程師用它來驗證網頁功能，因為它支持多種點擊方式和截圖功能，能夠全面覆蓋測試場景。

## 架構分析

這個專案採用 Node.js 作為主要執行環境，利用 CDP 進行瀏覽器操作，設計上選擇了 WebSocket 來實現與 Chrome 的即時通訊。這樣的架構使得操作能夠快速響應，並且能夠在多平台上運行。資料流方面，通過 HTTP API 接收用戶請求，然後轉發到 CDP 進行操作，這樣的設計使得用戶可以靈活地控制瀏覽器行為。

選擇 Node.js 是因為其非同步特性能夠有效處理高併發請求，而使用 CDP 使得操作更為精確。這樣的設計也帶來了對 Chrome 的依賴，未來可能需要考慮擴展到其他瀏覽器的支持。整體來看，這個架構在性能和靈活性上取得了良好的平衡。

## 技術深入分析

這個專案的核心技術機制是基於 CDP 的網頁操作，使用 Node.js 進行開發，這使得它能夠在多平台上運行。CDP 的使用讓這個工具能夠直接與 Chrome 瀏覽器進行交互，支持各種複雜的操作，如點擊、截圖和文件上傳。效能方面，這個工具能夠處理多個並行任務，並且在操作過程中能夠自動記錄和重用操作經驗，這對於需要頻繁訪問相似網站的用戶來說非常有用。設計上，選擇 Node.js 是因為其非同步特性能夠有效處理高併發請求，而使用 CDP 使得操作更為精確。這樣的選擇雖然帶來了對 Chrome 的依賴，但卻能夠提供更為靈活的操作方式。技術風險方面，未來在擴展到其他瀏覽器時可能會面臨挑戰，特別是在兼容性和功能支持上。整合方面，這個工具能夠輕鬆與現有的開發流程結合，特別是在自動化測試和數據抓取的場景中，能夠顯著提高效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝指引和使用範例，對於新手來說相對友好。安裝過程中需要配置 Chrome 的遠程調試，這可能會對某些用戶造成困難。整體來說，文件清晰且有多語言支持，能夠幫助不同語言的用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 提供強大的自動化能力，能夠處理複雜的網頁操作。
> - 支持多平台運行，適用於不同操作系統。
> - 具備經驗積累功能，能夠提高後續操作的效率。

> [!danger] 缺點
> - 目前僅支持 Chrome，對其他瀏覽器的支持尚未完善。
> - 需要用戶手動配置 Chrome 的遠程調試，增加了使用門檻。
> - 仍在活躍開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 需要 Node.js 22+ 環境支持。
> - CDP 模式需要 Chrome 開啟遠程調試，可能需要手動配置。
> - 目前僅支持 Chrome 瀏覽器，Firefox 支持仍在開發中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和傳輸，而本專案專注於網頁自動化和數據抓取，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供網絡代理功能，但缺乏本專案的自動化操作能力，無法直接進行網頁互動。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和傳輸，而本專案專注於網頁自動化和數據抓取。 | 如果你的需求主要是文件同步而非網頁操作，這個工具會更合適。 | low，因為兩者的使用場景和操作方式差異不大。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供網絡代理功能，但缺乏本專案的自動化操作能力。 | 如果需要純粹的網絡代理而不涉及自動化操作，這個工具會更合適。 | medium，因為需要重新設計自動化流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **web-access** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和傳輸，而本專案專注於網頁自動化和數據抓取。 | 提供網絡代理功能，但缺乏本專案的自動化操作能力。 |
> | 遷移成本 | - | low，因為兩者的使用場景和操作方式差異不大。 | medium，因為需要重新設計自動化流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非網頁操作，這個工具會更合適。 | 如果需要純粹的網絡代理而不涉及自動化操作，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** CDP 模式下可能需要手動配置 Chrome 的遠程調試，對新手不友好。
  - 解法：參考 README 中的配置指引。
- [MEDIUM] 在某些網站上，操作可能因為頁面加載速度而失敗。
  - 解法：增加重試機制或延遲時間。
- **[HIGH]** 目前僅支持 Chrome，對 Firefox 的支持尚未實現。
  - 解法：使用 Chrome 進行測試。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速自動化網頁數據抓取，提升工作效率。 |
| 大型企業的數據分析團隊 | 適合 | 能夠處理多個並行任務，但可能需要額外的穩定性測試。 |
| 個人開發者的實驗性專案 | 非常適合 | 提供靈活的自動化能力，適合快速迭代和測試。 |
| 需要穩定生產環境的應用 | 不適合 | 目前仍在開發中，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠實現網頁自動化，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限運行，主要依賴於 Chrome 的遠程調試功能，不會存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/eze-is--web-access");
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
> const me = dv.page("Repos/eze-is--web-access");
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
| Forks | 239 |
| Open Issues | 6 |
| Issue 解決率 | 70% (14 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-18 |
| Repo 大小 | 83 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/eze-is/web-access) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EzeW](https://github.com/EzeW) | 20 |
> | [@eze-is](https://github.com/eze-is) | 12 |
> | [@HaiyiMei](https://github.com/HaiyiMei) | 1 |
> | [@VegetaPn](https://github.com/VegetaPn) | 1 |
> | [@li-xiu-qi](https://github.com/li-xiu-qi) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和問題解決。
**連結**：[文件](https://github.com/eze-is/web-access)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-31）
> **活躍天數** 4 天 · **最新 commit** fix: move skills field from marketplace.json to plugin.json

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/eze-is/web-access/issues/27) | firefox 支持 | 1 | 0 |
> | [#35](https://github.com/eze-is/web-access/issues/35) | 使用插件安装时，CDP路径不对 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 🌐 Language
>     
>       
>         English
>         | 简体中文
>         | 繁體中文
>         | 日本語
>         | 한국어
>         | Français
>         | Deutsch
>         | Español
>         | Português
>         | Русский
>       
>     
>   
> 
> 给 Claude Code 装上完整联网能力的 skill。
> 
> Claude Code 原本有 WebSearch、WebFetch，但缺少调度策略和浏览器自动化能力。这个 skill 补上的是：**联网策略 + CDP 浏览器操作 + 站点经验积累**。
> 
> > 推荐必读：[Web Access：一个 Skill，拉满 Agent 联网和浏览器能力](https://mp.weixin.qq.com/s/rps5YVB6TchT9npAaIWKCw) ，完整介绍了 Web-Access Skill 的开发细节与 Agent Skill 设计哲学，帮助你也能写出类似通用、高上限的 Skill
> 
> ---
> 
> ## v2.4.1 能力
> 
> | 能力 | 说明 |
> |------|------|
> | 联网工具自动选择 | WebSearch / WebFetch / curl / Jina / CDP，按场景自主判断，可任意组合 |
> | CDP Proxy 浏览器操作 | 直连用户日常 Chrome，天然携带登录态，支持动态页面、交互操作、视频截帧 |
> | 三种点击方式 | `/click`（JS click）、`/clickAt`（CDP 真实鼠标事件）、`/setFiles`（文件上传） |
> | 并行分治 | 多目标时分发子 Agent 并行执行，共享一个 Proxy，tab 级隔离 |
> | 站点经验积累 | 按域名存储操作经验（URL 模式、平台特征、已知陷阱），跨 session 复用 |
> | 媒体提取 | 从 DOM 直取图片/视频 URL，或对视频任意时间点截帧分析 |
> 
> **v2.4.1 更新：**
> - **跨平台支持** — 脚本从 bash 迁移到 Node.js，Windows / Linux / macOS 均可使用
> - **DOM 边界穿透** — 新增技术事实：eval 递归遍历可穿透 Shadow DOM、iframe 等选择器不可跨越的边界
> 
> v2.4 更新
> 
> - **站点内 URL 可靠性** — 新增事实说明：站点生成的链接自带完整上下文，手动构造的 URL 可能缺失隐式必要参数
> - **平台错误提示不可信** — 新增技术事实：平台返回的"内容不存在"等提示可能是访问方式问题而非内容本身问题
> - **小红书站点经验增强** — xsec_token 机制、创作者平台状态校验、暂存草稿流程
> 
> v2.3 更新
> 
> - **浏览哲学重构** — 更清晰的「像人一样思考」框架，强调目标驱动而非步骤驱动
> - **Jina 积极推荐** — 明确鼓励在合适场景主动使用 Jina 节省 token
> - **子 Agent prompt 指引优化** — 明确加载写法，增加避免动词暗示执行方式的说明
> 
> ## 安装
> 
> **方式一：让 Claude 自动安装**
> 
> ```
> 帮我安装这个 skill：https://github.com/eze-is/web-access
> ```
> 
> **方式二：Plugin 安装**
> 
> ```bash
> claude plugin marketplace add https://github.com/eze-is/web-access
> claude plugin install web-access@web-access --scope user
> ```
> 
> **方式三：手动**
> 
> ```bash
> git clone https://github.com/eze-is/web-access ~/.claude/skills/web-access
> ```
> 
> ## 前置配置（CDP 模式）
> 
> CDP 模式需要 **Node.js 22+** 和 Chrome 开启远程调试：
> 
> 1. Chrome 地址栏打开 `chrome://inspect/#remote-debugging`
> 2. 勾选 **Allow remote debugging for this browser instance**（可能需要重启浏览器）
> 
> 环境检查（Agent 运行时会自动完成前置检查，无需手动执行）：
> 
> ```bash
> node "$CLAUDE_SKILL_DIR/scripts/check-deps.mjs"
> # $CLAUDE_SKILL_DIR 是 skill 加载时自动设置的环境变量
> # 手动运行请替换为实际路径，如 ~/.claude/skills/web-access
> ```
> 
> ## CDP Proxy API
> 
> Proxy 通过 WebSocket 直连 Chrome（兼容 `chrome://inspect` 方式，无需命令行参数启动），提供 HTTP API：
> 
> ```bash
> # 启动（Agent 会自动管理 Proxy 生命周期，无需手动启动）
> node "$CLAUDE_SKILL_DIR/scripts/cdp-proxy.mjs" &
> 
> # 页面操作
> curl -s "http://localhost:3456/new?url=https://example.com"     # 新建 tab
> curl -s -X POST "http://localhost:3456/eval?target=ID" -d 'document.title'  # 执行 JS
> curl -s -X POST "http://localhost:3456/click?target=ID" -d 'button.submit'  # JS 点击
> curl -s -X POST "http://localhost:3456/clickAt?target=ID" -d '.upload-btn'  # 真实鼠标点击
> curl -s -X POST "http://localhost:3456/setFiles?target=ID" \
>   -d '{"selector":"input[type=file]","files":["/path/to/file.png"]}'        # 文件上传
> curl -s "http://localhost:3456/screenshot?target=ID&file=/tmp/shot.png"     # 截图
> curl -s "http://localhost:3456/scroll?target=ID&direction=bottom"           # 滚动
> curl -s "http://localhost:3456/close?target=ID"                             # 关闭 tab
> ```
> 
> ## 使用
> 
> 安装后直接让 Agent 执行联网任务，skill 自动接管：
> 
> - "帮我搜索 xxx 最新进展"
> - "读一下这个页面：[URL]"
> - "去小红书搜索 xxx 的账号"
> - "帮我在创作者平台发一篇图文"
> - "同时调研这 5 个产品的官网，给我对比摘要"
> 
> ## 设计哲学
> 
> > Skill = 哲学 + 技术事实，不是操作手册。讲清 tradeoff 让 AI 自己选，不替它推理。
> 
> 详见 [SKILL.md](./SKILL.md) 中的浏览哲学部分。
> 
> ## License
> 
> MIT · 作者：[一泽 Eze](https://github.com/eze-is)
> 
> ## Star History
> 
> [](https://star-history.com/#eze-is/web-access&Date)

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/eze-is/web-access)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "eze-is--web-access"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "eze-is--web-access"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "eze-is--web-access" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "eze-is--web-access"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "eze-is--web-access" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/eze-is--web-access");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "eze-is--web-access" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "eze-is" AND file.name != "eze-is--web-access"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/eze-is--web-access");
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
> const me = dv.page("Repos/eze-is--web-access");
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
> const me = dv.page("Repos/eze-is--web-access");
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
> const me = dv.page("Repos/eze-is--web-access");
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
> const me = dv.page("Repos/eze-is--web-access");
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

> **2026-03-25** — 首次收錄
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

- [[2026-03-25|2026-03-25]] — 首次收錄，1.0k stars
