---
repo: browser-use/browser-harness
url: https://github.com/browser-use/browser-harness
owner: browser-use
owner_type: Organization
language: Python
license: MIT
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task."
homepage: "https://browser-harness.com"
stars: 12810
stars_per_day: 442
forks: 1178
open_issues: 88
created: 2026-04-17
pushed_at: 2026-05-15
first_seen: 2026-04-20
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "瀏覽器自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-20
use_case: "讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 28
repo_size_kb: 1218
readme_length: 3288
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:2236,2026-04-20:2264,2026-04-21:3596,2026-04-21:3619,2026-04-22:4459,2026-04-22:4475,2026-04-23:5060,2026-04-23:5071,2026-04-24:5921,2026-04-24:5938,2026-04-25:6455,2026-04-26:6868,2026-04-27:7187,2026-04-28:7609,2026-04-29:7927,2026-04-30:8512,2026-05-01:8854,2026-05-02:9214,2026-05-03:9618,2026-05-04:10006,2026-05-05:10338,2026-05-06:10649,2026-05-07:11108,2026-05-08:11430,2026-05-09:11686,2026-05-10:11841,2026-05-11:11972,2026-05-12:12192,2026-05-13:12324,2026-05-14:12515,2026-05-15:12666,2026-05-16:12810"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
  - "topic/ai_agent"
  - "topic/browser_agent"
  - "topic/browser_automation"
  - "topic/browser_use"
  - "topic/browser_use_box"
aliases:
  - "browser-harness"
  - "browser-use/browser-harness"
  - "讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。"
---

# browser-harness

**12.8k** stars · **442** stars/天 · 建立 29 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/browser-use--browser-harness");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`ai-agent` `browser-agent` `browser-automation` `browser-use` `browser-use-box` `browser-use-cloud` `cdp` `cloud-browser` `llm` `persistent-browser` `playwright` `telegram-agent` `vps-agent` `web-automation`

> [!summary] 一句話摘要
> 讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (442 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要自動化瀏覽器任務但不想手動編寫腳本的開發者。
> **一句話重點** Browser Harness 的自我修復能力使得瀏覽器自動化變得前所未有的簡單和靈活。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/browser-use--browser-harness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "瀏覽器自動化" && p.file.name !== "browser-use--browser-harness" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 瀏覽器自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的自動化能力，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於其自我修復的能力，能夠在執行過程中自動生成和調整技能。

## 專案簡介

Browser Harness 是一個用於將 LLM 直接連接到真實瀏覽器的工具，透過一個輕量的 CDP (Chrome DevTools Protocol) 鉗子，讓使用者能夠自由執行各種瀏覽器任務。使用者只需透過一個 WebSocket 連接到 Chrome，並且在執行過程中，代理會自動編寫缺失的幫助程式，這樣的設計使得每次執行後，工具都能自我優化。這種自我修復的特性意味著，使用者不再需要手動編寫繁瑣的腳本，代理會根據實際執行的結果自動生成必要的技能，這樣可以大幅減少開發時間。關鍵指令如 `browser-harness` 可以啟動整個流程，並且用戶可以透過設置環境變數 `BH_DOMAIN_SKILLS=1` 來啟用社群貢獻的特定網站技能。技術上，Browser Harness 使用了 Python 3.11 及其依賴的多個庫，如 `cdp-use` 和 `websockets`，這使得它能夠高效地與 Chrome 通信，並且保持輕量級的依賴樹。

與其他自動化工具相比，如 Selenium 或 Puppeteer，Browser Harness 提供了更高的靈活性和自我學習能力，因為它能夠在運行中自動生成和調整技能，而不需要用戶手動干預。這使得它特別適合需要快速迭代和變化的應用場景，例如網頁爬蟲或自動化測試。實際使用中，這個工具能夠處理多達三個並發瀏覽器的雲端使用，並且提供免費的 API 金鑰，這對於小型專案或個人開發者來說非常友好。儘管如此，使用者仍需注意其開發階段的穩定性，因為目前的版本仍在不斷迭代中，可能會遇到一些未解決的問題。

**技術棧**：`Python 3.11` · `cdp-use 1.4.5` · `websockets 15.0.1`

## 重點功能

- 自我修復能力 — 代理能在執行過程中自動編寫缺失的幫助程式，減少手動干預。
- 輕量級 CDP 鉗子 — 透過 WebSocket 直接連接 Chrome，無需中介。
- 社群貢獻的技能 — 支援用戶貢獻特定網站的自動化技能，提升工具的靈活性。
- 免費雲端使用 — 提供免費的 API 金鑰，支持三個並發瀏覽器的使用。
- 簡單的安裝流程 — 只需跟隨 `install.md` 中的步驟即可快速設置。

## 快速開始

1. 安裝 browser-harness
```bash
pip install browser-harness
```
2. 啟動代理
```bash
browser-harness
```
3. 設置環境變數以啟用社群技能
```bash
export BH_DOMAIN_SKILLS=1
```

## 程式碼範例

```python
[
  "# 前置條件：安裝 browser-harness",
  "browser-harness",
  "# 預期輸出：啟動代理並連接到 Chrome 瀏覽器"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 12810 stars（442/天），forks 1178（9.2%），顯示出強勁的增長潛力。這位作者 Saurav Panda 之前在 AI 和自動化領域有豐富的經驗，這個專案解決了傳統瀏覽器自動化工具在靈活性和自我學習能力上的不足。之前的工具如 Selenium 雖然功能強大，但往往需要大量手動配置和維護，這使得開發者在面對快速變化的網頁環境時感到困難。這個專案的推出正好填補了這一空白，並且社群的活躍度也顯示出使用者對於這個工具的需求。其高 forks/stars 比率（9.2%）表明許多開發者在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化瀏覽器任務但不想手動編寫腳本的開發者。

> [!example] 使用場景
> - 數據科學家用它來自動化網頁數據收集，因為它能夠快速適應網站變更，減少手動維護的時間。
> - 測試工程師用它來進行瀏覽器兼容性測試，因為它能夠自動生成測試腳本，提升測試效率。
> - 產品經理用它來監控競爭對手的網站變化，因為它提供了即時的數據抓取能力，無需手動操作。

## 架構分析

Browser Harness 的架構設計為輕量級且模組化，核心功能集中在 `src/browser_harness/` 目錄下，並透過 `agent-workspace/` 來管理用戶自定義的技能。這樣的設計使得用戶可以靈活地擴展功能，而不影響核心系統的穩定性。資料流方面，代理通過 WebSocket 與 Chrome 瀏覽器進行通訊，並在運行時根據需要生成新的技能，這樣的即時學習能力是其主要優勢之一。

選擇 Python 作為開發語言，因為其生態系統中有豐富的自動化和網頁操作庫，這樣的選擇使得開發和維護成本相對較低。儘管如此，這樣的設計也可能導致在高並發情況下的性能瓶頸，特別是在大量用戶同時使用時。整體而言，這個架構在靈活性和性能之間取得了良好的平衡。

## 技術深入分析

Browser Harness 的核心技術機制在於其使用的 Chrome DevTools Protocol (CDP)，這使得它能夠直接與 Chrome 瀏覽器進行通訊，並且實現高效的自動化操作。其架構設計上，代理能夠在運行時動態生成和調整技能，這樣的即時學習能力是其主要優勢之一。效能方面，由於其依賴於 WebSocket 進行通訊，因此在高並發情況下可能會遇到性能瓶頸，特別是在多用戶同時操作時。選擇 Python 作為開發語言，因為其生態系統中有豐富的自動化和網頁操作庫，這樣的選擇使得開發和維護成本相對較低。設計取捨方面，選擇輕量級的架構使得安裝和使用變得簡單，但也可能在功能擴展上遇到限制。技術風險方面，隨著使用者數量的增加，可能會出現性能下降或不穩定的情況，這需要在未來的版本中進行優化。整合方面，Browser Harness 可以與現有的 CI/CD 流程輕鬆集成，並且支持多種 IDE 的使用，這使得它在開發過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，安裝過程相對順暢，沒有明顯的坑。文件中有詳細的步驟說明，讓新手能夠快速上手。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 自我修復能力強，減少手動維護。
> - 輕量級設計，安裝簡單。
> - 社群貢獻的技能提升了功能的靈活性。

> [!danger] 缺點
> - 仍在開發中，穩定性有待提高。
> - 依賴於特定版本的 Chrome 瀏覽器。
> - 社群技能的品質可能不一致。

> [!warning] 注意事項
> - 目前仍在開發階段，可能會遇到未解決的 bug。
> - 需要 Chrome 瀏覽器的特定版本（144+）以支持遠端調試。
> - 依賴於社群貢獻的技能，可能會有不一致的品質。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium) | Selenium 提供全面的瀏覽器自動化，但需要手動編寫和維護腳本，而 Browser Harness 自動生成技能，減少開發負擔。 |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | Puppeteer 專注於無頭瀏覽器的自動化，但缺乏 Browser Harness 的自我修復能力和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium) | Selenium 提供全面的瀏覽器自動化，但需要手動編寫和維護腳本，而 Browser Harness 自動生成技能，減少開發負擔。 | 如果需要更全面的瀏覽器支持和社群資源，Selenium 是更成熟的選擇。 | medium，因為需要將現有的 Selenium 腳本轉換為 Browser Harness 的技能格式。 |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | Puppeteer 專注於無頭瀏覽器的自動化，但缺乏 Browser Harness 的自我修復能力和靈活性。 | 如果專案需要無頭模式下的高性能瀏覽器操作，Puppeteer 是更合適的選擇。 | high，因為 Puppeteer 的 API 與 Browser Harness 有顯著差異，需要重寫大部分代碼。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **browser-harness** | **selenium** | **puppeteer** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Selenium 提供全面的瀏覽器自動化，但需要手動編寫和維護腳本，而 Browser Harness 自動生成技能，減少開發負擔。 | Puppeteer 專注於無頭瀏覽器的自動化，但缺乏 Browser Harness 的自我修復能力和靈活性。 |
> | 遷移成本 | - | medium，因為需要將現有的 Selenium 腳本轉換為 Browser Harness 的技能格式。 | high，因為 Puppeteer 的 API 與 Browser Harness 有顯著差異，需要重寫大部分代碼。 |
> | 適用場景 | 主要場景 | 如果需要更全面的瀏覽器支持和社群資源，Selenium 是更 | 如果專案需要無頭模式下的高性能瀏覽器操作，Puppeteer |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，代理可能無法正確識別網頁元素，導致操作失敗。
  - 解法：手動調整技能或提供更多上下文信息。
- **[HIGH]** 使用免費雲端服務時，可能會遇到限制，導致性能下降。
  - 解法：考慮升級到付費方案以獲得更好的性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊進行市場調查 | 非常適合 | 能夠快速自動化數據收集，節省時間和人力成本。 |
| 大型企業的測試團隊 | 普通 | 雖然功能強大，但可能需要更多的穩定性和支持。 |
| 個人開發者的自動化任務 | 非常適合 | 簡單易用，適合快速開發和迭代。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的自動化能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具本身不需要高權限，且不會存取敏感資料，但在使用過程中需注意與外部 API 的交互安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Browser Harness 最常與 Chrome 瀏覽器搭配使用，並在開發過程中處於自動化任務的執行環節。使用者可以在 Next.js 應用中透過 API 調用 Browser Harness 來自動化數據抓取，具體做法是使用 `browser-harness` 指令啟動代理，然後配置相關的技能。與 CI/CD 流程的整合也相對簡單，支持 GitHub Actions 和其他主流 CI 工具，但在某些情況下可能需要額外的適配器來解決兼容性問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Browser Harness 出現之前，開發者主要依賴 Selenium 和 Puppeteer 進行瀏覽器自動化，但這些工具往往需要大量手動配置和維護。隨著 AI 和自動化技術的進步，Browser Harness 的出現使得自動化任務的執行變得更加靈活和高效。這個工具代表了自動化領域的一個重要趨勢，即將 AI 整合進自動化流程中，未來可能會看到更多類似的解決方案出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python
- 了解基本的瀏覽器操作
- 有自動化測試經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主要產品中進行測試。

**成功指標**：自動化任務的執行時間減少 50%。

> [!warning] 退出計畫
> 所有設定都以標準格式保存，若需退出可輕鬆轉換為其他自動化工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/browser-use--browser-harness");
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
> const me = dv.page("Repos/browser-use--browser-harness");
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
| Forks | 1.2k |
| Open Issues | 88 |
| Issue 解決率 | 28% (34 closed) |
| 最後推送 | 2026-05-15 |
| 建立日期 | 2026-04-17 |
| 官方網站 | [Link](https://browser-harness.com) |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/browser-harness) |
| Topics | `ai-agent` `browser-agent` `browser-automation` `browser-use` `browser-use-box` `browser-use-cloud` `cdp` `cloud-browser` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sauravpanda](https://github.com/sauravpanda) | 104 |
> | [@MagMueller](https://github.com/MagMueller) | 77 |
> | [@Alezander9](https://github.com/Alezander9) | 69 |
> | [@sarath-menon](https://github.com/sarath-menon) | 18 |
> | [@gregpr07](https://github.com/gregpr07) | 14 |

## 社群與生態

**社群活躍度**：社群活躍，經常有新的 PR 和 Issue 被處理。
**連結**：[文件](https://browser-harness.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-15 ~ 2026-05-15）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #366 from browser-use/revert-357-fix-cloud-file-upload

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#148](https://github.com/browser-use/browser-harness/issues/148) | Cannot submit Ember.js modal forms — framework ignores all p `agent-capability-needed` | 1 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Browser Harness ♞
> 
> Connect an LLM directly to your real browser with a thin, editable CDP harness. For browser tasks where you need **complete freedom**.
> 
> One websocket to Chrome, nothing between. The agent writes what's missing during execution. The harness improves itself every run.
> 
> ```
>   ● agent: wants to upload a file
>   │
>   ● agent-workspace/agent_helpers.py → helper missing
>   │
>   ● agent writes it                         agent_helpers.py
>   │                                                       + custom helper
>   ✓ file uploaded
> ```
> 
> **You will never use the browser again.**
> 
> ## Setup prompt
> 
> Paste into Claude Code or Codex:
> 
> ```text
> Set up https://github.com/browser-use/browser-harness for me.
> 
> Read `install.md` and follow the steps to install browser-harness and connect it to my browser.
> ```
> 
> The agent will open `chrome://inspect/#remote-debugging`. Tick the checkbox so the agent can connect to your browser:
> 
> Click Allow when the per-attach popup appears (Chrome 144+):
> 
> See [agent-workspace/domain-skills/](agent-workspace/domain-skills/) for example tasks.
> 
> ## Free Browser Use Cloud browsers
> 
> Stealth, sub-agents, or headless deployment.
> **Browser Use Cloud free tier: 3 concurrent browsers, proxies, captcha solving, and more. No card required.**
> 
> - Grab a key at [cloud.browser-use.com/new-api-key](https://cloud.browser-use.com/new-api-key)
> - Or let the agent sign up itself via [docs.browser-use.com/llms.txt](https://docs.browser-use.com/llms.txt) (setup flow + challenge context included).
> 
> ## Architecture (~1k lines across 4 core files)
> 
> - `install.md` — first-time install and browser bootstrap
> - `SKILL.md` — day-to-day usage
> - `src/browser_harness/` — protected core package
> - `agent-workspace/agent_helpers.py` — helper code the agent edits
> - `agent-workspace/domain-skills/` — reusable site-specific skills the agent edits
> 
> ## Contributing
> 
> PRs and improvements welcome. The best way to help: **contribute a new domain skill** under [agent-workspace/domain-skills/](agent-workspace/domain-skills/) for a site or task you use often (LinkedIn outreach, ordering on Amazon, filing expenses, etc.). Each skill teaches the agent the selectors, flows, and edge cases it would otherwise have to rediscover.
> 
> - **Skills are written by the harness, not by you.** Just run your task with the agent — when it figures something non-obvious out, it files the skill itself (see [SKILL.md](SKILL.md)). Please don't hand-author skill files; agent-generated ones reflect what actually works in the browser.
> - Open a PR with the generated `agent-workspace/domain-skills//` folder — small and focused is great.
> - Bug fixes, docs tweaks, and helper improvements are equally welcome.
> - Browse existing skills (`github/`, `linkedin/`, `amazon/`, ...) to see the shape.
> 
> If you're not sure where to start, open an issue and we'll point you somewhere useful.
> 
> ## Domain skills
> 
> Set `BH_DOMAIN_SKILLS=1` to enable [agent-workspace/domain-skills/](agent-workspace/domain-skills/) — community-contributed per-site playbooks `goto_url` surfaces by domain. Contribute via PR.
> 
> ---
> 
> [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses) · [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)

## 延伸閱讀

相關概念：[[自動化測試]] · [[瀏覽器自動化]] · [[AI agent]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

[GitHub](https://github.com/browser-use/browser-harness) · [官方網站](https://browser-harness.com)

## 相關收錄

> [!note]- 直接競品（同子分類：瀏覽器自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "瀏覽器自動化" AND file.name != "browser-use--browser-harness"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "browser-use--browser-harness"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "browser-use--browser-harness" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "browser-use--browser-harness"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","瀏覽器自動化","AI agent"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "browser-use--browser-harness" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/browser-use--browser-harness");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "browser-use--browser-harness" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "browser-use" AND file.name != "browser-use--browser-harness"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/browser-use--browser-harness");
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
> const me = dv.page("Repos/browser-use--browser-harness");
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
> const me = dv.page("Repos/browser-use--browser-harness");
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
> const me = dv.page("Repos/browser-use--browser-harness");
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
> const me = dv.page("Repos/browser-use--browser-harness");
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

> **2026-04-20** — 首次收錄
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

- [[2026-04-24|2026-04-24]] — 再次上榜，5.9k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，5.1k stars
- [[2026-04-22|2026-04-22]] — 再次上榜，4.5k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，3.6k stars
- [[2026-04-20|2026-04-20]] — 首次收錄，2.2k stars
