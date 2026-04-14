---
repo: eze-is/web-access
url: https://github.com/eze-is/web-access
owner: eze-is
owner_type: User
language: JavaScript
license: N/A
description: "给 Claude Code 装上完整联网能力的 skill：三层通道调度 + 浏览器 CDP + 并行分治"
homepage: ""
stars: 4785
stars_per_day: 184
forks: 333
open_issues: 17
created: 2026-03-18
pushed_at: 2026-04-10
first_seen: 2026-03-25
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-25
use_case: "為 AI Agent 提供完整的網路訪問能力，結合調度策略和瀏覽器自動化。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 53
repo_size_kb: 47
readme_length: 3963
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-25"
star_history: "2026-03-25:1010,2026-03-25:1026,2026-03-26:1444,2026-03-27:1721,2026-03-29:2026,2026-03-30:2090,2026-03-31:2833,2026-04-01:3170,2026-04-02:3404,2026-04-03:3585,2026-04-04:3726,2026-04-05:3802,2026-04-06:3927,2026-04-07:4085,2026-04-08:4234,2026-04-09:4373,2026-04-10:4478,2026-04-11:4557,2026-04-12:4599,2026-04-13:4672,2026-04-14:4785"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "web-access"
  - "eze-is/web-access"
  - "為 AI Agent 提供完整的網路訪問能力，結合調度策略和瀏覽器自動化。"
---

# web-access

**4.8k** stars · **184** stars/天 · 建立 26 天前 · JavaScript · 未標註授權

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

`easy-install`

> [!summary] 一句話摘要
> 為 AI Agent 提供完整的網路訪問能力，結合調度策略和瀏覽器自動化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (184 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要為 AI Agent 增加網路訪問能力的開發者，特別是在自動化和數據抓取方面有需求的團隊。
> **一句話重點** 這個專案的設計哲學強調讓 AI 自己選擇最佳的操作方式，而不是僅僅提供操作手冊。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到靈活的網路訪問能力，值得考慮。

> [!abstract] 核心創新
> 提供了多種網路工具的自動選擇和 CDP 瀏覽器操作的能力，提升了 AI Agent 的網路訪問靈活性。

## 專案簡介

這個專案的核心機制是為 AI Agent 提供全面的網路訪問能力，包括自動選擇合適的網路工具（如 WebSearch、WebFetch、curl 等），並透過 CDP 進行瀏覽器操作。用戶可以透過簡單的指令來執行各種網路任務，例如使用 `/click` 進行點擊操作，或使用 `/setFiles` 上傳檔案。這種設計使得 Agent 能夠根據不同的場景自動選擇最佳的訪問方式，並且支持多目標的並行處理，這在需要同時訪問多個網站時特別有用。技術上，專案使用 Node.js 來支持跨平台操作，並且通過 WebSocket 與 Chrome 進行連接，這樣的選擇使得它能夠直接利用 Chrome 的現有功能，減少了額外的依賴。與其他類似工具相比，如 0xGF/boneyard，這個專案的優勢在於其能夠支持多種操作方式（如 JS 點擊和真實鼠標點擊），並且能夠在同一個 Proxy 下進行多個子 Agent 的並行執行。

這樣的設計使得它在處理複雜的網頁時更具彈性和效率。實際使用中，這個工具能夠處理的資料量相當可觀，但使用者需要注意社交平台的使用限制，避免帳號被封禁。這個專案目前仍在活躍開發中，且社群回應迅速，適合需要強大網路訪問能力的開發者和團隊。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，特別是在需要快速實現網路自動化的情境下。

**技術棧**：`Node.js 22+` · `Chrome CDP`

## 重點功能

- 自動選擇網路工具 — 根據場景自動選擇 WebSearch、WebFetch、curl 等工具，提升操作靈活性。
- CDP Proxy 瀏覽器操作 — 直接連接用戶的 Chrome 瀏覽器，支持動態頁面和交互操作。
- 三種點擊方式 — 提供 JS 點擊、真實鼠標事件和文件上傳等多種操作方式，滿足不同需求。
- 並行分治 — 支持多目標的子 Agent 並行執行，提升效率。
- 站點經驗積累 — 按域名存儲操作經驗，跨 session 進行復用，提升操作成功率。
- 媒體提取 — 從 DOM 中提取圖片和視頻 URL，支持對視頻截帧分析。

## 快速開始

1. 使用 npx 一鍵安裝
```bash
npx skills add eze-is/web-access
```
2. 手動安裝
```bash
git clone https://github.com/eze-is/web-access ~/.claude/skills/web-access
```
3. 啟動 CDP Proxy
```bash
node "${CLAUDE_SKILL_DIR}/scripts/cdp-proxy.mjs" &
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天內累積 4785 stars（184/天），forks 333（7.0%），顯示出強勁的增長潛力。作者 EzeW 及其團隊在開源社群中有一定的影響力，之前的作品也獲得了良好的反響。這個專案解決了 AI Agent 在網路訪問上的不足，提供了更靈活的操作方式，這在現有的工具中並不多見。近期的推廣活動和社群討論也提升了其曝光率，特別是在 AI 和自動化領域的需求增加的背景下。forks/stars 比率為 7.0%，顯示出不少人對此專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要為 AI Agent 增加網路訪問能力的開發者，特別是在自動化和數據抓取方面有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化網頁數據抓取，因為可以根據場景自動選擇合適的網路工具，節省大量手動操作時間。
> - 數據分析師用它來快速獲取多個網站的最新資訊，因為支持並行處理多個請求，能在短時間內完成任務。
> - 產品經理用它來測試競爭對手的網站功能，因為可以模擬用戶行為並獲取真實的操作結果，提升產品迭代效率。

## 架構分析

這個專案採用 Node.js 作為主要開發語言，並利用 Chrome 的 CDP 進行瀏覽器自動化。這種設計使得它能夠直接與用戶的瀏覽器進行交互，減少了額外的依賴。資料流方面，使用 WebSocket 連接 Chrome，並通過 HTTP API 提供操作接口。

選擇 Node.js 的好處在於其跨平台支持，能在 Windows、Linux 和 macOS 上運行，而代價是需要用戶手動配置 Chrome 的遠程調試模式。這樣的架構使得專案在功能上更為強大，但也可能在某些情況下面臨安全風險，特別是在操作社交平台時。整體而言，這個專案的架構設計旨在提供靈活的網路訪問能力，並能夠隨著需求的變化進行擴展。

## 技術深入分析

這個專案的核心技術在於利用 Chrome 的 CDP 進行瀏覽器自動化，這使得它能夠直接與用戶的瀏覽器進行交互，並支持多種操作方式。透過 Node.js 的實現，專案能夠在多個平台上運行，並且通過 WebSocket 與 Chrome 進行連接，提供 HTTP API 來執行各種操作。這樣的設計使得專案在功能上更為強大，但也可能在某些情況下面臨安全風險，特別是在操作社交平台時。效能方面，專案能夠處理的資料量相當可觀，並且支持並行處理，這在需要同時訪問多個網站時特別有用。設計取捨上，選擇 Node.js 的好處在於其跨平台支持，但也可能增加初始設置的複雜性。技術風險方面，操作社交平台時可能面臨帳號被封禁的風險，這需要使用者謹慎操作。整合方面，這個專案與現有的開發工具鏈相容性良好，可以輕鬆整合到 CI/CD pipeline 中，並且能夠與主流的 IDE 進行配合使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要用戶手動配置 Chrome 的遠程調試模式。文件支持多語言，對於不同語言的用戶友好。整體上，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 多種網路工具自動選擇，提升操作效率。
> - 支持 CDP 瀏覽器操作，能夠處理動態頁面。
> - 並行處理能力，適合需要同時訪問多個網站的場景。

> [!danger] 缺點
> - 需要用戶手動配置 Chrome 的遠程調試模式，增加了初始設置的複雜性。
> - 在社交平台操作時存在帳號被封禁的風險。
> - 對於某些網站，可能會受到訪問限制，需考慮使用代理。

> [!warning] 注意事項
> - 需要 Node.js 22+ 和 Chrome 開啟遠程調試。
> - 使用社交平台時存在帳號被封禁的風險，建議使用小號進行操作。
> - 對於某些網站，可能會受到訪問限制，需考慮使用代理或其他方式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的網路訪問能力，但主要集中在資料抓取，缺乏自動化操作的靈活性。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 雖然也支持網路訪問，但功能較為單一，無法像本專案一樣支持多種操作方式。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於隱私和安全性，適合需要高安全性的用戶，但在功能上不如本專案全面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料抓取，缺乏自動化操作的靈活性。 | 如果你的需求主要是資料抓取而非自動化操作，這個工具可能更適合。 | medium，因為需要重新調整操作邏輯。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供基本的網路訪問能力，但功能較為單一。 | 如果你只需要簡單的網路請求，這個工具可能更輕量。 | low，因為功能簡單易於上手。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於隱私和安全性，適合需要高安全性的用戶。 | 如果你的應用場景對安全性要求較高，這個工具可能更合適。 | high，因為需要重新設計安全策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **web-access** | **boneyard** | **claude-obsidian** | **Shadowbroker** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料抓取，缺乏自動化操作的靈活性。 | 提供基本的網路訪問能力，但功能較為單一。 | 專注於隱私和安全性，適合需要高安全性的用戶。 |
> | 遷移成本 | - | medium，因為需要重新調整操作邏輯。 | low，因為功能簡單易於上手。 | high，因為需要重新設計安全策略。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料抓取而非自動化操作，這個工具可能更適合 | 如果你只需要簡單的網路請求，這個工具可能更輕量。 | 如果你的應用場景對安全性要求較高，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用社交平台時，帳號可能被封禁。
  - 解法：建議使用小號進行操作。
- [MEDIUM] 在某些網站上可能會遇到訪問限制。
  - 解法：考慮使用代理或其他方式。
- [MEDIUM] 需要手動配置 Chrome 的遠程調試模式，增加了初始設置的複雜性。
  - 解法：遵循 README 中的指導進行配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速實現網路自動化 | 非常適合 | 提供靈活的網路訪問能力，能快速適應不同需求。 |
| 大型企業的核心系統 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |
| 需要進行多網站數據抓取的專案 | 適合 | 支持並行處理，能有效提高效率。 |
| 對安全性要求極高的應用 | 不適合 | 操作社交平台存在帳號被封禁的風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到靈活的網路訪問能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要用戶手動配置 Chrome 的遠程調試，並在操作社交平台時存在帳號被封禁的風險。整體上，使用時需謹慎。

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
| Forks | 333 |
| Open Issues | 17 |
| Issue 解決率 | 53% (19 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-03-18 |
| Repo 大小 | 47 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/eze-is/web-access) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EzeW](https://github.com/EzeW) | 24 |
> | [@eze-is](https://github.com/eze-is) | 12 |
> | [@HaiyiMei](https://github.com/HaiyiMei) | 1 |
> | [@VegetaPn](https://github.com/VegetaPn) | 1 |
> | [@li-xiu-qi](https://github.com/li-xiu-qi) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和回應。
**連結**：[文件](https://web-access.eze.is)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-30 ~ 2026-04-10）
> **活躍天數** 6 天 · **最新 commit** docs: add website link, npx install method, and agent-agnostic positioning

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#52](https://github.com/eze-is/web-access/issues/52) | 感谢 web-access 给 use-my-browser 带来的灵感 | 1 | 0 |
> | [#27](https://github.com/eze-is/web-access/issues/27) | firefox 支持 | 1 | 0 |
> | [#54](https://github.com/eze-is/web-access/issues/54) | CDP代理正常，但是访问 arm.com 触发了网络代理限制。 | 0 | 2 |
> | [#53](https://github.com/eze-is/web-access/issues/53) | CDP Proxy fails to connect in WSL2: missing UUID in WebSocke | 0 | 0 |

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
>   给 AI Agent 装上完整联网能力的 Skill。
>   🌐 官网 · 📖 设计详解 · ⚡ 快速安装
> 
> AI Agent 原本的联网能力（WebSearch、WebFetch）缺少调度策略和浏览器自动化能力。这个 Agent Skill 补上的是：**联网策略 + CDP 浏览器操作 + 站点经验积累**。兼容所有支持 SKILL.md 的 Agent（Claude Code、Cursor、Gemini CLI、Codex CLI 等）。
> 
> > 推荐必读：[Web Access：一个 Skill，拉满 Agent 联网和浏览器能力](https://mp.weixin.qq.com/s/rps5YVB6TchT9npAaIWKCw) ，完整介绍了 Web-Access Skill 的开发细节与 Agent Skill 设计哲学，帮助你也能写出类似通用、高上限的 Skill
> 
> ---
> 
> ## v2.4.3 能力
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
> **v2.4.3 更新：**
> - **修复 CLAUDE_SKILL_DIR 路径问题** — bash 代码块改用 `${CLAUDE_SKILL_DIR}` 字符串替换语法，修复 Windows Git Bash 路径转换错误和变量未设置问题（#47 #46）
> - **站点经验列表合并到前置检查** — 启动检查通过后自动输出已有站点经验列表，移除不可靠的 `!` 内联注入
> 
> v2.4.1 更新
> 
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
> **方式一：npx skills 一键安装（推荐）**
> 
> ```bash
> npx skills add eze-is/web-access
> ```
> 
> > [skills CLI](https://github.com/vercel-labs/skills) 是开源的 Agent Skill 包管理器，自动检测你的 Agent 环境并安装到正确位置。
> 
> **方式二：让 Agent 自动安装**
> 
> ```
> 帮我安装这个 skill：https://github.com/eze-is/web-access
> ```
> 
> **方式三：Plugin 安装（Claude Code）**
> 
> ```bash
> claude plugin marketplace add https://github.com/eze-is/web-access
> claude plugin install web-access@web-access --scope user
> ```
> 
> **方式四：手动**
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
> node "${CLAUDE_SKILL_DIR}/scripts/check-deps.mjs"
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
> node "${CLAUDE_SKILL_DIR}/scripts/cdp-proxy.mjs" &
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
> ## ⚠️ 使用前提醒
> 
> 通过浏览器自动化操作社交平台（如小红书）存在账号被平台限流或封禁的风险。**强烈建议使用小号进行操作。**
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
> MIT · 作者：[一泽 Eze](https://github.com/eze-is) · [官网](https://web-access.eze.is)
> 
> ## Star History
> 
> [](https://star-history.com/#eze-is/web-access&Date)

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[網頁自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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
> const concepts = ["自動化","CLI/TUI","網頁自動化"];
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
