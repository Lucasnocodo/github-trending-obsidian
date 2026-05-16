---
repo: simonlin1212/a-stock-data
url: https://github.com/simonlin1212/a-stock-data
owner: simonlin1212
owner_type: User
language: N/A
license: Apache-2.0
description: "A 股全栈数据工具包 — 6层架构 · 15个端点 · 7个数据源 | AI Skill for China A-Share Market Data"
homepage: ""
stars: 882
stars_per_day: 176
forks: 212
open_issues: 3
created: 2026-05-11
pushed_at: 2026-05-12
first_seen: 2026-05-15
week: "2026-W20"
month: "2026-05"
category: "資料科學"
subcategory: "金融數據工具"
release_tag: "v2.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-15
use_case: "整合多個數據源的 A 股市場數據工具包，提供即時數據和分析能力。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-23"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 202
readme_length: 9942
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-15"
star_history: "2026-05-15:706,2026-05-16:882"
tags:
  - github
  - "category/資料科學"
  - "lang/other"
  - easy_install
aliases:
  - "a-stock-data"
  - "simonlin1212/a-stock-data"
  - "整合多個數據源的 A 股市場數據工具包，提供即時數據和分析能力。"
---

# a-stock-data

**706** stars · **177** stars/天 · 建立 4 天前 · N/A · Apache-2.0

```dataviewjs
const me = dv.page("Repos/simonlin1212--a-stock-data");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v2.1.0` `easy-install`

> [!summary] 一句話摘要
> 整合多個數據源的 A 股市場數據工具包，提供即時數據和分析能力。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (177 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速獲取 A 股市場數據並進行分析的金融專業人士。
> **一句話重點** 這個專案的最大優勢在於其整合了多個數據源，讓用戶能夠輕鬆獲取 A 股市場的即時數據。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--a-stock-data");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "金融數據工具" && p.file.name !== "simonlin1212--a-stock-data" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 金融數據工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時的 A 股市場數據，值得投入。

> [!abstract] 核心創新
> 提供一個自包含的 Skill 文件，將多個數據源的 A 股數據整合為可直接使用的工具集。

## 專案簡介

這個專案是一個針對中國 A 股市場的全棧數據工具包，具備六層架構和多達 21 個數據端點，能夠從 8 個不同數據源整合原始數據，為用戶提供即時的市場資訊和分析能力。用戶只需透過 AI 助手發送簡單的指令，例如 "估算 688017 的 PE"，系統便會自動調用相應的數據端點進行處理，並返回所需的財務指標和市場分析。這種設計使得用戶無需記憶複雜的 API 認證或數據格式，直接專注於數據分析。技術上，這個工具使用了 Python 及其相關庫（如 `mootdx` 和 `akshare`），並且支持即時數據流，確保用戶獲得最新的市場動態。

相較於其他類似工具，如 `tushare` 和 `yfinance`，這個專案不僅提供了更全面的數據來源，還具備更高的即時性和靈活性，特別是在北向資金流向和行業比較等方面。使用者在使用過程中可能會遇到的問題包括數據源的穩定性和 API 限制，但這些都在持續的更新和優化中。這個工具目前處於穩定階段，適合需要快速獲取 A 股市場數據的投資者和分析師。未來，隨著更多數據源的整合和功能的擴展，預計將吸引更多用戶的關注和使用。

**技術棧**：`Python` · `mootdx` · `akshare`

## 重點功能

- 多數據源整合 — 從 8 個數據源獲取 A 股市場數據，無需記憶 API 認證。
- 即時數據流 — 提供實時的市場數據和分析，支持多種查詢場景。
- AI 助手兼容 — 兼容 Claude Code、Codex 和 OpenClaw，方便用戶使用。
- 六層架構設計 — 提供行情、研報、信號、新聞等多層次數據。
- 自動化數據更新 — 支持北向資金自動緩存，隨著時間數據越來越豐富。

## 快速開始

1. 創建 skill 目錄
```bash
mkdir -p ~/.claude/skills/a-stock-data
```
2. 下載 SKILL.md
```bash
curl -o ~/.claude/skills/a-stock-data/SKILL.md https://raw.githubusercontent.com/simonlin1212/a-stock-data/main/SKILL.md
```
3. 安裝依賴
```bash
pip install mootdx akshare requests pandas stockstats
```

## 程式碼範例

```bash
{
  "前置條件": "使用 Claude Code 或其他 AI 助手",
  "指令": "Launch Claude Code and say \"Check the valuation of 688017\"",
  "預期輸出": "返回該股票的 PE、PEG 和消化時間等財務指標。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 706 stars（177/天），forks 173（24.5%），顯示出強烈的社群興趣。專案的作者 simonlin1212 之前在金融數據處理領域有過豐富的經驗，這個工具解決了用戶在獲取 A 股數據時的繁瑣流程，特別是對於需要即時數據的投資者來說，這是一個高效的解決方案。社群的活躍度和開放的問題反饋機制也促進了其快速成長。

## 適合誰使用

**目標受眾**：需要快速獲取 A 股市場數據並進行分析的金融專業人士。

> [!example] 使用場景
> - 量化分析師用它來快速獲取 A 股的即時市場數據，因為它能整合多個數據源，讓分析過程更高效。
> - 投資顧問用它來生成客戶報告，因為它提供了即時的行業比較和資金流向數據，能夠提升報告的專業性。
> - 個人投資者用它來監控特定股票的表現，因為它的 AI 助手能快速回應查詢，節省了大量的時間。

## 架構分析

這個專案採用六層架構，分別是行情層、研報層、信號層、新聞層、基礎數據和公告層。這種設計使得數據的獲取和處理更為模組化，便於擴展和維護。每一層都專注於不同類型的數據，並使用不同的數據源進行整合，這樣可以確保數據的準確性和即時性。使用 TCP 直連的 mootdx 確保了行情數據的穩定性，而其他 HTTP API 則提供了豐富的研報和新聞數據。這樣的架構設計使得系統能夠靈活應對不同的數據需求，並在未來可以輕鬆添加新的數據源或功能。

## 技術深入分析

專案核心技術使用 Python 作為主要開發語言，並依賴於多個第三方庫如 mootdx 和 akshare 來獲取市場數據。這些庫提供了穩定的數據接口，能夠支持實時數據流的需求。整體架構的六層設計使得數據的獲取和處理過程更為高效，並且能夠根據不同的需求進行靈活調整。效能方面，該工具能夠處理大量的即時數據，並且在多個用戶同時查詢時仍能保持穩定。選擇 Python 作為開發語言的好處在於其豐富的生態系統和強大的數據處理能力，但這也帶來了對環境的依賴性。技術風險方面，隨著用戶數量的增加，數據源的穩定性和 API 限制可能成為瓶頸。整合方面，該工具能夠輕鬆與主流的 AI 編程助手進行整合，並且支持多種查詢場景，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用示例。安裝過程相對順暢，但需要安裝多個依賴庫。文件目前僅提供英文版本，對於非英語用戶可能有一定的學習曲線。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 整合多個數據源，提供全面的市場數據。
> - 即時數據更新，適合需要快速反應的用戶。
> - 模組化設計，便於未來擴展和維護。

> [!danger] 缺點
> - 對於新手來說，可能需要一些時間來熟悉使用方式。
> - 部分數據源的穩定性可能會影響整體性能。
> - 需要安裝多個 Python 庫，對環境要求較高。

> [!warning] 注意事項
> - 需要 Python 環境和相關庫安裝。
> - 部分數據源可能會受到 API 限制，影響數據獲取。
> - 對於海外用戶，某些數據源可能需要代理才能穩定使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [tushare/tushare](https://github.com/tushare/tushare) | Tushare 提供的數據主要集中在歷史數據和基本面分析，而 a-stock-data 更強調即時數據和多元化的數據來源。 |
| [yfinance/yfinance](https://github.com/yfinance/yfinance) | YFinance 主要針對美股市場，而 a-stock-data 專注於中國 A 股市場，提供更具針對性的數據和分析工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [tushare/tushare](https://github.com/tushare/tushare) | Tushare 提供的數據主要集中在歷史數據和基本面分析，而 a-stock-data 更強調即時數據和多元化的數據來源。 | 如果需要更全面的歷史數據分析，Tushare 可能更合適。 | medium，因為需要重新適應不同的 API 認證和數據格式。 |
| [yfinance/yfinance](https://github.com/yfinance/yfinance) | YFinance 主要針對美股市場，而 a-stock-data 專注於中國 A 股市場，提供更具針對性的數據和分析工具。 | 如果你的需求主要集中在美股市場，YFinance 會是更好的選擇。 | low，因為 API 設計相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **a-stock-data** | **tushare** | **yfinance** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Tushare 提供的數據主要集中在歷史數據和基本面分析，而 a-stock-data 更強調即時數據和多元化的數據來源。 | YFinance 主要針對美股市場，而 a-stock-data 專注於中國 A 股市場，提供更具針對性的數據和分析工具。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的 API 認證和數據格式。 | low，因為 API 設計相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果需要更全面的歷史數據分析，Tushare 可能更合適。 | 如果你的需求主要集中在美股市場，YFinance 會是更好的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分數據源在高峰期可能會超時，影響查詢速度
  - 解法：在查詢時加入重試機制，延長查詢時間
- [MEDIUM] 某些 API 返回格式不穩定，可能導致解析錯誤
  - 解法：在解析時加入格式檢查和容錯處理
- **[HIGH]** 需要在中國境內使用某些數據源，海外用戶可能會遇到連接問題
  - 解法：使用代理服務器來穩定連接

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供即時數據和分析，能夠快速響應市場變化。 |
| 大型金融機構的數據分析部門 | 適合 | 雖然功能強大，但可能需要進一步的穩定性測試。 |
| 個人投資者的日常交易工具 | 非常適合 | 簡單易用，能夠快速獲取所需的市場數據。 |
| 需要長期穩定運行的生產環境 | 不適合 | 目前處於 beta 階段，尚未完全穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時的 A 股市場數據，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具本身不需要高權限操作，且不會存取敏感資料。依賴的數據源也都經過檢驗，風險相對較低。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
| Forks | 173 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-11 |
| Repo 大小 | 202 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/simonlin1212/a-stock-data) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@simonlin1212](https://github.com/simonlin1212) | 11 |

**最新版本**：v2.1.0 — v2.1.0 — 龙虎榜 · 解禁 · 行业对比 · 百度PAE (2026-05-12)

> [!info]- Release Notes
> ## V2.1 新增
> 
> ### 5 个信号层端点
> - **龙虎榜席位** — 上榜记录 + 买卖席位 TOP5 + 机构动向（akshare 三函数聚合）
> - **限售解禁日历** — 历史解禁记录 + 未来 90 天待解禁预警
> - **行业横向对比** — 同花顺 ~90 行业涨跌排名 + 成交额 + 领涨股
> - **百度概念板块** — 行业/概念/地域三维归属 + 当日涨跌幅
> - **百度资金流向** — 主力/散户/超大单分钟级 + 20 日历史
> 
> ### 优化
> - **北向资金自缓存** — eastmoney 全系北向数据 2024-08 起断供，改为本地 CSV 自缓存模式
> - **F10 股东研究截断** — 19969→5906 chars（-70% token 消耗）
> - **百度 PAE ResultCode 修复** — 返回类型 int/string 不稳定，统一处理
> 
> ### 测试
> - 17 接口全量实测，覆盖主板/中小板/科创板/ST 四类股票
> - 50 OK / 1 预期 WARN（ST 无机构覆盖）/ 0 FAIL
> 
> ---
> 
> 完整更新日志见 [CHANGELOG.md](./CHANGELOG.md)

## 社群與生態

**社群活躍度**：社群活躍，開放問題反饋機制，持續更新中。
**連結**：[文件](https://github.com/simonlin1212/a-stock-data)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** feat: 新增全市场龙虎榜端点 (daily_dragon_tiger)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/simonlin1212/a-stock-data/issues/2) | akshare | 0 | 3 |
> | [#1](https://github.com/simonlin1212/a-stock-data/issues/1) | 老板token 消耗有点大啊🍔 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # a-stock-data
> 
> A 股全栈数据工具包 — 6 层架构 · 21 个端点 · 8 个数据源实测
> 
> 一个自包含的 Skill 文件，把分散在 8 个数据源里的 A 股原始数据整合成 AI 编程助手直接能用的工具集。你不用再背 mootdx 的 K 线参数、东财的 PDF Referer 头、iwencai 的 X-Claw 鉴权、百度 PAE 的 Header 拼接——全部封装好了。
> 
> > 兼容 [Claude Code](https://github.com/anthropics/claude-code) · [Codex](https://github.com/openai/codex) · [OpenClaw](https://github.com/anthropics/openclaw)
> >
> > Skill 文件本质是结构化 Markdown + 内嵌 Python，任何支持上下文注入的 AI 编程助手都能用。
> 
> ---
> 
> 
> ## Quick Start
> 
> **3 steps, 2 minutes.**
> 
> ```bash
> 
> # 3. Install dependencies
> pip install mootdx akshare requests pandas stockstats
> ```
> 
> Launch Claude Code and say "Check the valuation of 688017" — the skill activates automatically.
> 
> > **Codex / OpenClaw users:** Paste the contents of SKILL.md into your system prompt or project context file. The embedded Python code is ready to execute.
> 
> ---
> 
> 
> ## Usage Examples
> 
> Just tell your AI assistant:
> 
> | Scenario | Prompt |
> |----------|--------|
> | Valuation | "Estimate 688017 — give me PE / PEG / payback period" |
> | Sector Attribution | "Which stocks are strong today and what sectors are driving them" |
> | Research Reports | "Latest reports on humanoid robot supply chain, especially ball screws and reducers" |
> | Northbound Flow | "How's northbound capital flow looking today" |
> | Concept Blocks | "What concept sectors does 688017 belong to" |
> | Fund Flow | "Is institutional money flowing into or out of 000858 today" |
> | Dragon Tiger Board | "Has 002475 appeared on the dragon tiger board recently, which brokerages are buying" |
> | Daily Dragon Tiger | "Which stocks had the highest net buy on today's dragon tiger board" |
> | Lockup Expiry | "Any lockup expiries coming up in the next 3 months for this stock" |
> | Industry Rotation | "Which industries are up the most today, where is money flowing" |
> | News & Filings | "Pull recent news and filings for 300476" |
> | Batch Compare | "Compare valuations of these 5 semiconductor stocks" |
> 
> 
> ## V2.1 Highlights
> 
> | Feature | Description |
> |---------|-------------|
> | Dragon Tiger Board | Appearance reasons + Top 5 buy/sell brokerages + institutional stats |
> | Daily Dragon Tiger (Full Market) | All stocks on daily board + net buy ranking + appearance reasons |
> | Lockup Expiry | Full release history + 90-day upcoming expiry alerts |
> | Industry Comparison | ~90 THS industries ranked by change + volume + leaders |
> | Concept Blocks | Baidu 3D classification (industry/concept/region) |
> | Fund Flow | Minute-level institutional/retail/super-large orders + 20-day history |
> | Northbound Self-Cache | After Eastmoney data cutoff, local accumulation — richer over time |
> | F10 Truncation | Shareholder research -70% tokens (19969→5906 chars) |
> 
> ---
> 
> 
> ## Donate
> 
> 如果这个工具帮到了你的投研工作流，欢迎请作者喝杯咖啡 ☕
> 
>   
> 
>   爱发电 ·
>   Buy Me a Coffee
> 
> > 想要什么数据端点？欢迎开 [Issue](https://github.com/simonlin1212/a-stock-data/issues) 提需求，赞助者的 Issue 优先处理。
> 
> ---
> 
> 
> ## 架构
> 
> ```
> A 股全栈数据 · 六层架构
> │
> ├── 行情层    mootdx + 腾讯财经       K线 + 五档盘口 + PE/PB/市值/换手率
> ├── 研报层    东财 + akshare + iwencai 研报列表 / PDF下载 / 一致预期 / NL搜索
> ├── 信号层    同花顺 + 百度股市通      强势股 + 题材归因 + 北向资金 + 概念板块
> │            + akshare + 东财DC      + 资金流向 + 龙虎榜 + 全市场龙虎榜 + 解禁 + 行业对比
> ├── 新闻层    akshare × 3             个股新闻 / 财联社快讯 / 全球资讯
> ├── 基础数据  mootdx finance / F10    37字段季报 + 9类公司资料
> └── 公告层    巨潮 cninfo + mootdx    沪深北全量公告
> ```
> 
> ---
> 
> 
> ## 快速开始
> 
> **3 步，2 分钟。**
> 
> ```bash
> 
> # 1. 创建 skill 目录
> mkdir -p ~/.claude/skills/a-stock-data
> 
> 
> # 2. 把 SKILL.md 放进去
> curl -o ~/.claude/skills/a-stock-data/SKILL.md \
>   https://raw.githubusercontent.com/simonlin1212/a-stock-data/main/SKILL.md
> 
> 
> # 3. 安装依赖
> pip install mootdx akshare requests pandas stockstats
> ```
> 
> 启动 Claude Code，说一句「帮我看看 688017 的估值」，自动激活。
> 
> > **Codex / OpenClaw 用户：** 把 SKILL.md 的内容贴入你的系统 prompt 或项目上下文文件即可，内嵌的 Python 代码可直接执行。
> 
> ---
> 
> 
> ## 21 个端点能力清单
> 
> 
> ### 行情层（实时，不封 IP）
> 
> | 端点 | 数据 |
> |------|------|
> | mootdx 行情 | K线(多周期) + 五档盘口 + 逐笔成交 + 实时报价 46 字段 |
> | 腾讯财经 | PE(TTM) / PB / 总市值 / 流通市值 / 换手率 / 涨跌停价 |
> 
> 
> ### 研报层
> 
> | 端点 | 数据 |
> |------|------|
> | 东财 reportapi | 研报列表 + 评级 + 三年 EPS 预测 |
> | 东财 PDF 下载 | 完整研报 PDF（已处理 Referer 鉴权） |
> | akshare 一致预期 | 同花顺源机构一致预期 EPS |
> | iwencai NL 搜索 | 自然语言跨主题研报检索 |
> 
> 
> ### 信号层（V2.1 大幅扩展）
> 
> | 端点 | 数据 |
> |------|------|
> | 同花顺热点 | 当日强势股 + 题材归因 reason tags（编辑部人工标注） |
> | 同花顺北向（实时） | 沪股通 / 深股通分钟级流向（262 个时间点） |
> | 同花顺北向（历史） | 本地自缓存日级历史（V2.1 改） |
> | **百度概念板块** | 行业 / 概念 / 地域三维归属 + 当日涨跌幅（V2.1 新增） |
> | **百度资金流向** | 主力 / 散户 / 超大单分钟级 + 20 日历史（V2.1 新增） |
> | **龙虎榜席位** | 上榜记录 + 买卖席位 TOP5 + 机构动向（V2.1 新增） |
> | **全市场龙虎榜** | 每日全市场上榜股票 + 净买额排名 + 上榜原因（V2.1 新增） |
> | **限售解禁日历** | 历史解禁 + 未来 90 天待解禁预警（V2.1 新增） |
> | **行业横向对比** | 同花顺 90 行业涨跌排名 + 领涨股（V2.1 新增） |
> 
> 
> ### 新闻层
> 
> | 端点 | 数据 |
> |------|------|
> | 个股新闻 | 东财个股新闻流 |
> | 财联社快讯 | 分钟级电报 |
> | 全球资讯 | 东财全球财经资讯 |
> 
> 
> ### 基础数据 + 公告
> 
> | 端点 | 数据 |
> |------|------|
> | 季报快照 | 37 字段（EPS / ROE / 净利润 / 主营收入...） |
> | F10 公司资料 | 9 大类文本（V2.1 截断优化，-70% token） |
> | 巨潮公告 | 沪深北交所全量公告 |
> 
> 
> ### 鉴权要求
> 
> 7 个数据源**完全免费无 Key**，仅 iwencai 语义搜索需要 API Key（[申请地址](https://www.iwencai.com/skillhub)）。
> 
> ---
> 
> 
> ## 使用示例
> 
> 跟你的 AI 助手说这些话就能激活：
> 
> | 场景 | 说什么 |
> |------|--------|
> | 个股估值 | 「帮我估一下 688017，给我 PE / PEG / 消化时间」 |
> | 题材归因 | 「今天哪些股票走强，主要是什么题材」 |
> | 研报检索 | 「人形机器人产业链最近的研报，特别是丝杠和减速器」 |
> | 北向资金 | 「今天北向资金流入流出怎么样」 |
> | 概念板块 | 「688017 属于哪些概念板块」 |
> | 资金流向 | 「000858 今天主力资金流入还是流出」 |
> | 龙虎榜 | 「002475 最近上过龙虎榜吗，哪些营业部在买」 |
> | 全市场龙虎榜 | 「今天龙虎榜哪些票净买入最多」 |
> | 解禁预警 | 「这只股票未来 3 个月有没有限售解禁」 |
> | 行业轮动 | 「今天哪些行业涨幅最大，资金在流入哪些板块」 |
> | 新闻公告 | 「拉一下 300476 最近的新闻和公告」 |
> | 批量对比 | 「帮我对比这 5 只半导体股的估值」 |
> 
> 
> ### 内置 4 套调研流程
> 
> | 流程 | 做什么 | 耗时 |
> |------|--------|------|
> | 单票估值 | 实时价 → 一致预期 EPS → 前向 PE / PEG / PE 消化年数 | 30 秒 |
> | 批量对比 | 多只股票横向估值排列 | 1 分钟 |
> | 主题研报 | iwencai 多关键词 NL 搜索 + 东财 PDF 交叉补充 | 2 分钟 |
> | 新标的调研 | 机构覆盖 → 估值 → 概念板块 → 资金流向 → 龙虎榜 → 解禁预警 | 1 分钟 |
> 
> ---
> 
> 
> ## V2.1 新增亮点
> 
> | 功能 | 说明 |
> |------|------|
> | 龙虎榜席位 | 上榜原因 + 买卖营业部 TOP5 + 机构买卖统计 |
> | 全市场龙虎榜 | 每日全市场上榜股票 + 净买额排名 + 上榜原因 |
> | 限售解禁 | 历史全部解禁批次 + 未来 90 天待解禁预警 |
> | 行业横向 | 同花顺 ~90 行业涨跌排名 + 成交额 + 领涨股 |
> | 概念板块 | 百度股市通三维归属（行业/概念/地域） |
> | 资金流向 | 分钟级主力/散户/超大单 + 20 日历史 |
> | 北向自缓存 | eastmoney 断供后改本地积累，越跑越丰富 |
> | F10 截断 | 股东研究 -70% token（19969→5906 chars） |
> 
> ---
> 
> 
> ## 数据源优先级
> 
> | 优先级 | 数据源 | 协议 | 封 IP 风险 |
> |--------|--------|------|-----------|
> | 1 | mootdx | TCP (7709) | 极低 |
> | 2 | 腾讯财经 | HTTP | 低 |
> | 3 | akshare | Python | 中（东财源） |
> | 4 | iwencai | OpenAPI | 低（需 Key） |
> | 5 | 东财 PDF | HTTP | 低 |
> | 6 | 同花顺热点 | HTTP | 极低（零鉴权） |
> | 7 | 同花顺北向 | HTTP | 极低（零鉴权） |
> | 8 | 百度股市通 | HTTP | 极低（零鉴权） |
> 
> ---
> 
> 
> ## FAQ
> 
> **Q: mootdx 和腾讯有什么区别？**
> 互补。mootdx = 交易层（价格 + 盘口 + K 线），腾讯 = 估值层（PE / PB / 市值 / 换手率 / 涨跌停价）。两者都不封 IP。
> 
> **Q: 在海外服务器跑，mootdx 超时？**
> mootdx 走 TCP 直连通达信行情服务器，需国内 IP 才稳定。海外环境建议走代理或切换到 yfinance。
> 
> **Q: 腾讯 API 字段 43 是 PB 吗？**
> 不是。43 = 振幅%，46 = PB。网上大量教程写错了，这里是实测校准结果。
> 
> **Q: akshare 报超时？**
> 东财源有反爬，加 `time.sleep(1~3)` 重试。行情请走 mootdx，不受影响。
> 
> **Q: iwencai 返回 401？**
> 检查：(1) API Key 有效性 (2) 是否携带了 X-Claw-* Headers。SkillHub 2.0 后强制要求。
> 
> **Q: 同花顺热点 reason 字段为空？**
> 盘后数据还没更新，15:30 之后再调。个别 ST 股没有人工标注，`dropna` 过滤即可。
> 
> **Q: 百度股市通 ResultCode 不稳定？**
> 已知坑——有时返回 int `0`，有时返回 string `"0"`。代码里用 `str()` 统一比较即可。
> 
> **Q: 北向资金历史只有几天？**
> V2.1 改为本地自缓存。每次调用自动积累，越跑越丰富。首次运行只有当天数据。
> 
> **Q: 不用 Claude Code，能用吗？**
> 能。SKILL.md 本质是 Markdown + 内嵌 Python 代码。Codex、OpenClaw 或任何 AI 编程助手都能读取。你也可以直接把 Python 代码段复制出来在自己的脚本里跑。
> 
> ---
> 
> 
> ## 更新日志
> 
> 见 [CHANGELOG.md](./CHANGELOG.md)。
> 
> ---
> 
> 
> ## Disclaimer
> 
> 本项目仅提供数据获取工具，不构成任何投资建议。股市有风险，投资需谨慎。
> 
> ---
> 
> 
> # a-stock-data
> 
> Full-stack data toolkit for China A-Share market — 6-layer architecture · 21 endpoints · 8 data sources, battle-tested
> 
> A self-contained Skill file that consolidates raw A-share data from 8 sources into a ready-to-use toolkit for AI coding assistants. No need to memorize mootdx candlestick parameters, Eastmoney PDF Referer headers, iwencai X-Claw authentication, or Baidu PAE header assembly — it's all handled.
> 
> > Compatible with [Claude Code](https://github.com/anthropics/claude-code) · [Codex](https://github.com/openai/codex) · [OpenClaw](https://github.com/anthropics/openclaw)
> >
> > The Skill file is structured Markdown + embedded Python. Any AI coding assistant with context injection can use it.
> 
> ---
> 
> 
> ## Architecture
> 
> ```
> China A-Share Full-Stack Data · 6-Layer Architecture
> │
> ├── Market Data  

## 延伸閱讀

相關概念：[[資料視覺化]] · [[機器學習]] · [[API 設計]]

[GitHub](https://github.com/simonlin1212/a-stock-data)

## 相關收錄

> [!note]- 直接競品（同子分類：金融數據工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "金融數據工具" AND file.name != "simonlin1212--a-stock-data"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "simonlin1212--a-stock-data"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "simonlin1212--a-stock-data" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "simonlin1212--a-stock-data"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","機器學習","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "simonlin1212--a-stock-data" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "simonlin1212--a-stock-data" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "simonlin1212" AND file.name != "simonlin1212--a-stock-data"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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
> const me = dv.page("Repos/simonlin1212--a-stock-data");
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

> **2026-05-15** — 首次收錄
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

- [[2026-05-16|2026-05-16]] — 再次上榜，882 stars
- [[2026-05-15|2026-05-15]] — 首次收錄，706 stars
