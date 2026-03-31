---
repo: eze-is/web-access
url: https://github.com/eze-is/web-access
owner: eze-is
owner_type: User
language: JavaScript
license: N/A
description: "给 Claude Code 装上完整联网能力的 skill：三层通道调度 + 浏览器 CDP + 并行分治"
homepage: ""
stars: 2833
stars_per_day: 236
forks: 198
open_issues: 3
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
use_case: "為 Claude Code 提供完整的網路能力，支持多種瀏覽器自動化和調度策略。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 81
repo_size_kb: 83
readme_length: 3381
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-25"
star_history: "2026-03-25:1010,2026-03-25:1026,2026-03-26:1444,2026-03-27:1721,2026-03-29:2026,2026-03-30:2090,2026-03-31:2833"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "web-access"
  - "eze-is/web-access"
  - "為 Claude Code 提供完整的網路能力，支持多種瀏覽器自動化和調度策略。"
---

# web-access

**2.8k** stars · **236** stars/天 · 建立 12 天前 · JavaScript · 未標註授權

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
> 為 Claude Code 提供完整的網路能力，支持多種瀏覽器自動化和調度策略。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (236 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要自動化網頁操作且希望提高效率的開發者。
> **一句話重點** 這個專案不僅提供了網頁自動化的能力，還引入了智能調度和經驗積累的概念，讓 AI 能夠更有效地執行任務。

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
> **結論** 花 5 小時學習，3 小時整合，得到高效的網頁自動化能力，值得投入。

> [!abstract] 核心創新
> 支持自動選擇聯網工具和多目標的並行執行。

## 專案簡介

這個專案的核心機制是為 Claude Code 增強網路能力，透過三層通道調度、CDP 瀏覽器操作和並行分治來實現。使用者可以透過簡單的指令讓 Agent 自動執行網路任務，例如使用 `/click` 或 `/setFiles` 指令來進行互動操作。這樣的設計使得 Agent 能夠根據場景自動選擇合適的工具，如 WebSearch、curl 或 CDP，從而提高效率。技術上，專案使用 Node.js 來實現跨平台支持，並透過 WebSocket 直接連接 Chrome 瀏覽器，這樣的選擇使得操作更為靈活且能夠處理動態網頁。

與其他工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，本專案的獨特之處在於其能夠進行多目標的並行執行，並且支持站點經驗的積累，這使得在相同網站上的操作能夠更快速且準確。使用者在實際操作中可能會遇到如 Firefox 支持不足等問題，但社群的活躍度和問題解決率顯示出其穩定性。整體而言，這個專案適合需要高效網路操作的開發者，尤其是在需要自動化多個網頁任務的情境下。未來可能會進一步擴展對更多瀏覽器的支持，提升其通用性。

**技術棧**：`Node.js 22+` · `Chrome CDP`

## 重點功能

- 聯網工具自動選擇 — 根據場景自動選擇 WebSearch、curl 或 CDP 等工具。
- CDP Proxy 瀏覽器操作 — 直接連接 Chrome，支持動態頁面和交互操作。
- 三種點擊方式 — 支持 JS 點擊、真實鼠標事件和文件上傳。
- 並行分治 — 多目標時分發子 Agent 並行執行，提升效率。
- 站點經驗積累 — 按域名存儲操作經驗，跨 session 复用。

## 快速開始

1. 自動安裝技能
```bash
帮我安装这个 skill：https://github.com/eze-is/web-access
```
2. 使用 Plugin 安裝
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
  "# 前置條件：Node.js 22+ 和 Chrome 開啟遠程調試",
  "curl -s \"http://localhost:3456/new?url=https://example.com\"     # 新建 tab",
  "curl -s -X POST \"http://localhost:3456/eval?target=ID\" -d 'document.title'  # 執行 JS",
  "curl -s -X POST \"http://localhost:3456/click?target=ID\" -d 'button.submit'  # JS 點擊",
  "curl -s \"http://localhost:3456/screenshot?target=ID&file=/tmp/shot.png\"     # 截圖"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 2833 stars（236/天），forks 198（7.0%），顯示出強烈的使用需求。這個專案由 EzeW 和其他貢獻者共同開發，他們在開源社群中有著良好的聲譽。該專案解決了 Claude Code 在網路操作上的不足，特別是缺乏調度策略和自動化能力的問題。社群中對於 Firefox 支持和其他瀏覽器操作的需求也引起了討論，顯示出使用者對於這個工具的期待。技術上，Node.js 的使用讓這個工具能夠跨平台運行，這在過去是較難實現的。

## 適合誰使用

**目標受眾**：需要自動化網頁操作且希望提高效率的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動化網頁數據抓取，因為可以輕鬆實現多目標的並行執行，節省了大量時間。
> - 數據分析師用它來快速獲取網站的最新數據，因為它支持動態頁面和交互操作，能夠獲取更全面的信息。
> - 產品經理用它來調研競爭對手的網站，因為可以同時對多個網站進行操作，並獲得對比摘要。

## 架構分析

這個專案採用 Node.js 作為核心架構，因為它能夠提供跨平台支持，並且利用非阻塞 I/O 來處理多個網頁請求。資料流方面，使用 WebSocket 直接連接 Chrome 瀏覽器，這樣的設計使得操作更為靈活且能夠處理動態網頁。選擇 CDP 進行瀏覽器操作是因為它能夠提供更細緻的控制，然而這也意味著需要用戶手動配置 Chrome 的遠程調試。這樣的架構在處理大量請求時可能會面臨性能瓶頸，特別是在高並發的情況下。整體而言，這個架構適合需要高效網頁操作的場景，但在擴展性上可能需要進一步優化。

## 技術深入分析

專案的核心技術機制是基於 Node.js 和 Chrome 的 CDP，這使得它能夠實現高效的網頁操作。使用 WebSocket 直接連接 Chrome 瀏覽器，這樣的設計讓資料流更加順暢，並且能夠處理動態內容。效能方面，專案支持並行分治，這意味著在處理多個請求時能夠有效分配資源，然而在高並發情況下仍需注意性能瓶頸。選擇 Node.js 是因為它的非阻塞特性，但這也可能導致在 CPU 密集型操作中性能下降。技術風險方面，依賴於 Chrome 的遠程調試功能，若未來 Chrome 改變其 API，將可能影響專案的穩定性。整合方面，與主流的 CI/CD 工具鏈相容性良好，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含多種語言支持和安裝指引。安裝過程相對順暢，但需要用戶手動配置 Chrome 的遠程調試。提供了良好的入門指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種網頁操作工具，自動選擇最合適的。
> - 能夠進行多目標的並行執行，大幅提升效率。
> - 支持動態頁面和交互操作，適用範圍廣泛。

> [!danger] 缺點
> - 需要用戶手動配置 Chrome 的遠程調試，增加了使用門檻。
> - 目前對 Firefox 的支持有限，可能影響使用者體驗。
> - 在高並發情況下可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Node.js 22+。
> - 需要 Chrome 開啟遠程調試，可能需要重啟瀏覽器。
> - 目前對 Firefox 的支持有限，可能會遇到兼容性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和傳輸，而本專案專注於網頁自動化和操作。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供類似的自動化功能，但不支持並行分治和站點經驗積累。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和傳輸，而本專案專注於網頁自動化和操作。 | 如果你的需求主要是文件同步而非網頁操作，則應選擇此工具。 | low，因為兩者的操作邏輯相似。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供類似的自動化功能，但不支持並行分治和站點經驗積累。 | 如果你的需求不需要高效的並行處理，則可以考慮此工具。 | medium，因為需要調整操作流程以適應不同的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **web-access** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和傳輸，而本專案專注於網頁自動化和操作。 | 提供類似的自動化功能，但不支持並行分治和站點經驗積累。 |
> | 遷移成本 | - | low，因為兩者的操作邏輯相似。 | medium，因為需要調整操作流程以適應不同的 API。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非網頁操作，則應選擇此工具。 | 如果你的需求不需要高效的並行處理，則可以考慮此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Firefox 支持不足，可能導致某些功能無法正常使用
  - 解法：使用 Chrome 瀏覽器進行操作
- [MEDIUM] 在高並發情況下可能會遇到性能瓶頸
  - 解法：考慮減少同時請求數量
- [MEDIUM] CDP 模式需要手動配置，增加了使用門檻
  - 解法：仔細按照 README 指示進行配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化多個網頁操作，提升開發效率。 |
| 大型企業的數據分析部門 | 適合 | 支持動態頁面和並行處理，能夠快速獲取數據。 |
| 個人開發者的自動化工具 | 普通 | 雖然功能強大，但需要一定的配置和學習成本。 |
| 需要高效網頁操作的研究團隊 | 非常適合 | 支持多目標並行執行，能夠快速完成任務。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的網頁自動化能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需訪問 Chrome 的遠程調試功能，且不存取敏感資料。

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
| Forks | 198 |
| Open Issues | 3 |
| Issue 解決率 | 81% (13 closed) |
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

**社群活躍度**：社群活躍，問題解決率達 81%。
**連結**：[文件](https://github.com/eze-is/web-access)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-31）
> **活躍天數** 4 天 · **最新 commit** fix: move skills field from marketplace.json to plugin.json

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#27](https://github.com/eze-is/web-access/issues/27) | firefox 支持 | 1 | 0 |
> | [#33](https://github.com/eze-is/web-access/issues/33) | 基于 Chromium 的 ARC 浏览器，在打开 remote-debugging 时没有弹窗 | 0 | 2 |
> | [#32](https://github.com/eze-is/web-access/issues/32) | 能支持其它chromium浏览器的操作吗 | 0 | 0 |

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

相關概念：[[自動化]] · [[CLI/TUI]] · [[網頁自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

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
