---
repo: skernelx/tavily-key-generator
url: https://github.com/skernelx/tavily-key-generator
owner: skernelx
owner_type: User
language: Python
license: N/A
description: "Multi-service toolkit for Tavily and Firecrawl signup automation, key validation, and isolated proxy pools."
homepage: ""
stars: 1331
stars_per_day: 266
forks: 820
open_issues: 1
created: 2026-03-14
pushed_at: 2026-03-17
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "自動化註冊 Tavily 和 Firecrawl 的 API 金鑰，並提供金鑰驗證和代理池管理功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-23"
contributor_count: 1
engagement: "high"
issue_close_rate: 75
repo_size_kb: 4394
readme_length: 2205
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1307,2026-03-20:1331"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/api_key_generator"
  - "topic/browser_automation"
  - "topic/camoufox"
  - "topic/cloudflare"
  - "topic/duckmail"
aliases:
  - "tavily-key-generator"
  - "skernelx/tavily-key-generator"
  - "自動化註冊 Tavily 和 Firecrawl 的 API 金鑰，並提供金鑰驗證和代理池管理功能。"
---

# tavily-key-generator

**1.3k** stars · **327** stars/天 · 建立 4 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/skernelx--tavily-key-generator");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`api-key-generator` `browser-automation` `camoufox` `cloudflare` `duckmail` `email-automation` `fastapi` `firecrawl` `mcp` `playwright` `proxy-server` `tavily`

> [!summary] 一句話摘要
> 自動化註冊 Tavily 和 Firecrawl 的 API 金鑰，並提供金鑰驗證和代理池管理功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (327 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要自動化 API 金鑰註冊和驗證的開發者，特別是在高需求的情境下。
> **一句話重點** 這個工具的自動化程度和即時驗證功能使得 API 金鑰的管理變得更加高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/skernelx--tavily-key-generator");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "skernelx--tavily-key-generator" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到快速獲取和驗證金鑰的效果，值得投入。

> [!abstract] 核心創新
> 提供一個多服務的 API 金鑰自動註冊和驗證工具，並支援即時驗證功能。

## 專案簡介

這個工具專為 Tavily 和 Firecrawl 的 API 金鑰自動註冊而設計，使用者可以選擇註冊不同的服務，並透過本地真實瀏覽器進行操作。註冊過程中，系統會自動收取驗證碼，並在獲得金鑰後立即進行可用性驗證，確保金鑰的有效性。使用者可以透過簡單的命令行選擇服務，並且支援批量和並發註冊，這在需要大量金鑰的場景中非常有用。這個工具的賣點在於其自動化程度高，並且能夠即時驗證金鑰的可用性，避免了手動操作的繁瑣。技術上，它依賴於 Python 和多個庫如 `camoufox` 和 `quart`，這些庫提供了網頁自動化和非同步處理的能力。

與其他類似工具相比，如 `MySearch`，這個工具專注於金鑰的註冊和驗證，而不是提供完整的搜索服務。對於需要快速獲取和驗證 API 金鑰的開發者來說，這個工具非常合適，但如果需要更全面的服務整合，則可能需要搭配其他工具使用。使用者需注意，當前 Tavily 的註冊功能暫時不可用，這可能會影響某些使用場景。整體來看，這是一個針對特定需求的專案，適合需要快速註冊和驗證金鑰的開發者。

**技術棧**：`Python` · `FastAPI` · `Playwright`

## 重點功能

- 多服務啟動台 — 使用者可以選擇註冊 Tavily、Firecrawl 或 Exa。
- 自動環境準備 — 自動檢查虛擬環境和依賴項，確保運行環境的準備。
- 郵箱鏈路統一 — 支援 Cloudflare Mail API 和 DuckMail，自動收取驗證碼。
- 並發註冊 — 支援批量和並發執行，適合需要大量金鑰的場景。
- 真實可用性驗證 — 獲得金鑰後立即調用官方接口進行驗證，確保金鑰有效性。
- 自動上傳到代理池 — 註冊成功後自動將金鑰上傳到指定的代理池。
- 跨平台啟動 — 支援 Windows、macOS 和 Linux，方便不同環境的使用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/skernelx/tavily-key-generator.git
```
2. 配置環境變數
```bash
cp .env.example .env
```
3. 運行專案
```bash
python3 run.py
```

## 程式碼範例

```python
# 前置條件（確保已安裝依賴）
python3 run.py
# 預期輸出（選擇服務）
1. Tavily
2. Firecrawl
3. Exa
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1307 stars（327/天），forks 815（62.4%），顯示出強烈的社群參與。作者 skernelx 在這個領域有豐富的經驗，之前也開發過多個相關工具，這使得這個專案能夠快速吸引關注。它解決了在註冊 API 金鑰時的繁瑣流程，特別是在需要大量金鑰的情況下，這在過去的解決方案中往往需要手動操作。近期的社群討論和需求推動了這個工具的快速成長，顯示出對於自動化金鑰管理的需求正在上升。forks/stars 比率高達 62.4%，顯示出許多開發者對此工具進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要自動化 API 金鑰註冊和驗證的開發者，特別是在高需求的情境下。

> [!example] 使用場景
> - 後端工程師用它來自動註冊 Firecrawl API 金鑰，因為手動註冊過程繁瑣且容易出錯。
> - DevOps 團隊用它來批量獲取和驗證多個服務的 API 金鑰，因為這樣可以節省大量時間並提高效率。
> - 獨立開發者用它來快速獲得 Tavily 和 Firecrawl 的金鑰，因為它提供了即時驗證功能，確保金鑰的有效性。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 FastAPI 來處理 API 請求，這使得整體架構輕量且高效。資料流從使用者輸入服務選擇開始，然後透過 Playwright 進行真實瀏覽器操作，完成金鑰的註冊和驗證。選擇使用 Playwright 而非 Selenium 是因為它提供了更好的性能和穩定性，尤其是在處理現代網頁時。

系統的設計考量到了跨平台的需求，確保能在 Windows、macOS 和 Linux 上運行，這樣的設計使得使用者能夠在不同環境中輕鬆使用。由於依賴於多個外部庫，這可能會增加維護的複雜性，尤其是在庫的版本更新時可能會導致不兼容的問題。整體來看，這個架構適合快速開發和迭代，但在擴展性上可能會受到依賴庫的限制。

## 技術深入分析

這個專案的核心技術機制是使用 Python 和 FastAPI 來實現 API 的快速響應，並利用 Playwright 進行瀏覽器自動化。這樣的設計使得系統能夠在處理金鑰註冊時，快速且穩定地與外部服務進行交互。效能方面，系統能夠支持並發註冊，這對於需要大量金鑰的使用者來說是非常重要的。由於使用了非同步處理，這使得系統在高負載下仍能保持良好的響應速度。

選擇 Playwright 而非 Selenium 是因為其在處理現代網頁時的性能優勢，這對於需要快速註冊的場景至關重要。技術上，這個專案的依賴樹相對簡單，但仍需注意外部庫的版本更新可能導致的兼容性問題。對於擴展性，這個架構能夠支持未來的功能擴展，但在整合其他服務時可能需要額外的適配工作。整合到現有的 CI/CD pipeline 中也相對容易，因為其主要依賴於標準的 Python 環境和庫。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要手動配置郵箱設定。文件中有基本的使用說明，對於新手來說，可能需要一些額外的學習時間來熟悉環境配置。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠快速獲得和驗證金鑰。
> - 支援多平台，方便不同環境的使用。
> - 即時驗證功能，確保金鑰的有效性。

> [!danger] 缺點
> - Tavily 註冊功能暫時不可用，影響使用範圍。
> - 需要手動配置郵箱設定，對新手不友好。
> - 依賴多個外部庫，可能影響穩定性。

> [!warning] 注意事項
> - Tavily 註冊功能暫時不可用，無法獲得金鑰。
> - 需要手動配置郵箱設定，對於不熟悉的使用者可能有一定難度。
> - 依賴於多個外部庫，可能會影響安裝和運行的穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [skernelx/MySearch-Proxy](https://github.com/skernelx/MySearch-Proxy) | 這個工具專注於金鑰的註冊和驗證，而 MySearch-Proxy 提供完整的搜索服務整合。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 提供了資料同步功能，而本專案專注於 API 金鑰的註冊和驗證。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了更全面的代理管理功能，而本專案專注於註冊和驗證金鑰。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| MySearch-Proxy | MySearch-Proxy 提供了完整的搜索服務整合，而本專案專注於金鑰的註冊和驗證。 | 如果需要一個完整的搜索服務解決方案，應該選擇 MySearch-Proxy。 | medium，因為需要重新配置服務整合。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 提供了資料同步功能，而本專案專注於 API 金鑰的註冊和驗證。 | 如果需要資料同步功能而非金鑰管理，則應選擇 parsync。 | low，因為功能差異不大。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tavily-key-generator** | **MySearch-Proxy** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | MySearch-Proxy 提供了完整的搜索服務整合，而本專案專注於金鑰的註冊和驗證。 | parsync 提供了資料同步功能，而本專案專注於 API 金鑰的註冊和驗證。 |
> | 遷移成本 | - | medium，因為需要重新配置服務整合。 | low，因為功能差異不大。 |
> | 適用場景 | 主要場景 | 如果需要一個完整的搜索服務解決方案，應該選擇 MySearc | 如果需要資料同步功能而非金鑰管理，則應選擇 parsync。 |

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

- **[HIGH]** Tavily 註冊功能暫時不可用，無法獲得金鑰
  - 解法：使用 Firecrawl 或 Exa 作為替代
- [MEDIUM] 郵箱設定不正確會導致驗證失敗
  - 解法：確保 .env 文件中的郵箱配置正確
- [MEDIUM] 依賴庫版本更新可能導致不兼容
  - 解法：定期檢查依賴庫更新，並進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要大量 API 金鑰的開發團隊 | 非常適合 | 能夠自動化註冊和驗證金鑰，節省時間。 |
| 小型專案或個人使用 | 適合 | 簡單易用，適合快速獲取金鑰。 |
| 需要穩定的金鑰來源的商業應用 | 普通 | 功能尚在開發中，穩定性有待觀察。 |
| 不熟悉 Python 環境的使用者 | 不適合 | 需要手動配置和一定的技術背景。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到快速獲取和驗證金鑰的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料，但需注意依賴庫的安全性和更新。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
| Forks | 815 |
| Open Issues | 1 |
| Issue 解決率 | 75% (3 closed) |
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-14 |
| Repo 大小 | 4.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/skernelx/tavily-key-generator) |
| Topics | `api-key-generator` `browser-automation` `camoufox` `cloudflare` `duckmail` `email-automation` `fastapi` `firecrawl` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `camoufox` `patchright` `psutil` `quart` `requests` `rich`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@skernelx](https://github.com/skernelx) | 29 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和問題回應。
**連結**：[文件](https://github.com/skernelx/tavily-key-generator)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-17）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # API Key Generator - Multi-Service Edition
> 
> [English Guide](./README_EN.md)
> 
> 这是一个多服务注册器与聚合 API 上游工具，聚焦三件事：
> 
> - 注册 `Tavily（暂时无法注册）` / `Firecrawl` / `Exa` key
> - 验证 key 是否真实可用，并把可用 key 提供给统一搜索层
> 
> ## 当前状态
> 
> - `Firecrawl`：可用
> - `Exa`：可用
> - `Tavily`：按当前项目这轮本地测试，官网已关闭邮件注册入口，暂不可用
> 
> 它不是 `MySearch` 的正式产品仓库。  
> 如果你要部署公开可用的统一搜索控制台、MCP、Skill 和 Social / X
> 接入，请直接使用独立项目：
> 
> - [MySearch-Proxy](https://github.com/skernelx/MySearch-Proxy)
> 
> ## 这个仓库负责什么
> 
> - 本地真实浏览器注册
> - 本地 Turnstile Solver
> - 邮箱 API 自动收验证码 / 验证链接
> - 提取到 API Key 后立刻做真实调用验证
> - 可选自动上传到统一代理池
> - 可作为 `MySearch` / `MySearch-Proxy` 的 provider 上游之一
> 
> ## Features
> 
> - 多服务启动台：启动时可选择 Tavily / Firecrawl / Exa
> - 自动环境准备：自动检查 `venv`、依赖和浏览器
> - 邮箱链路统一：支持 Cloudflare Mail API 和 DuckMail
> - 多域名可选：启动时选择本轮注册用的域名
> - 并发注册：支持批量和并发执行
> - 后台浏览器模式：默认 headless，必要时可切前台排查
> - 真实可用性验证：拿到 key 后马上调用官方接口
> - 自动上传到代理池：上传时会带上服务标记，服务端能自动识别 Firecrawl / Exa / Tavily 并写入对应池子
> - 适合作为统一搜索网关的上游：给 `MySearch-Proxy` 提供稳定的 key 来源
> - 跨平台启动：Windows / macOS / Linux 都能直接跑
> 
> ## 配套工作台预览
> 
> ### MySearch Proxy 首屏
> 
> ### MySearch Proxy 工作台
> 
> ## Quick Start
> 
> ### 1. Clone
> 
> ```bash
> git clone https://github.com/skernelx/tavily-key-generator.git
> cd tavily-key-generator
> ```
> 
> ### 2. Configure
> 
> ```bash
> cp .env.example .env
> ```
> 
> 编辑 `.env`，填好邮箱配置和可选上传配置。
> 
> 如果已经配置了 `SERVER_URL` 和 `SERVER_ADMIN_PASSWORD`，注册成功后可以自动上传。
> 
> ### 3. Run
> 
> macOS / Linux:
> 
> ```bash
> python3 run.py
> ```
> 
> 或者：
> 
> ```bash
> ./start_auto.sh
> ```
> 
> Windows:
> 
> ```bat
> start_auto.bat
> ```
> 
> 启动后当前可选：
> 
> ```text
> 1. Tavily
> 2. Firecrawl
> 3. Exa
> ```
> 
> 补充说明：
> 
> - `Exa` 注册成功后会保存到 `exa_accounts.txt`
> - `Exa` 的格式是 `email,EMAIL_OTP_ONLY,api_key`
> - `Tavily` 选项目前仍保留在启动台里，但当前状态暂不可用
> 
> ## 推荐搭配方式
> 
> 如果你希望把注册出来的 key 接成公开可用的统一搜索服务，推荐直接搭配：
> 
> - [MySearch-Proxy](https://github.com/skernelx/MySearch-Proxy)
> 
> 它负责：
> 
> - 统一控制台
> - Tavily / Firecrawl / Social / X 统一接线
> - MCP + Skill 安装说明
> - 官方接口与 compatible 网关双接入
> - 面向 Codex / Claude Code 的最终接入方式
> 
> 当前仓库则继续专注于：
> 
> - 注册可用 key
> - 做真实可用性验证
> - 提供聚合 API 上游能力
> 
> `proxy/` 目录现在只保留一份迁移说明 README，不再包含本地可运行实现。
> 
> ## MySearch 的关系
> 
> 这里的 `tavily-key-generator` 只负责：
> 
> - 注册 Firecrawl / Exa key
> - 验证 key 是否真实可用
> - 提供可选聚合 API，供 `MySearch` / `MySearch-Proxy` 调用
> 
> `MySearch` 自己的安装、MCP 工具、统一控制台、social gateway、Codex /
> Claude Code 接入说明，统一放在：
> 
> - [MySearch-Proxy](https://github.com/skernelx/MySearch-Proxy)

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[雲端服務]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[zornade--visura-api|zornade/visura-api]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[larksuite--openclaw-lark|larksuite/openclaw-lark]]

[GitHub](https://github.com/skernelx/tavily-key-generator)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "skernelx--tavily-key-generator"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "skernelx--tavily-key-generator"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "skernelx--tavily-key-generator" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "skernelx--tavily-key-generator"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","自動化","雲端服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "skernelx--tavily-key-generator" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "skernelx--tavily-key-generator" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "skernelx" AND file.name != "skernelx--tavily-key-generator"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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
> const me = dv.page("Repos/skernelx--tavily-key-generator");
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

> **2026-03-19** — 首次收錄
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

- [[2026-03-20|2026-03-20]] — 再次上榜，1.3k stars
- [[2026-03-19|2026-03-19]] — 首次收錄，1.3k stars
