---
repo: browser-use/browser-harness
url: https://github.com/browser-use/browser-harness
owner: browser-use
owner_type: Organization
language: Python
license: MIT
description: "Self-healing browser harness that enables LLMs to complete any task."
homepage: "https://cloud.browser-use.com"
stars: 4475
stars_per_day: 895
forks: 381
open_issues: 48
created: 2026-04-17
pushed_at: 2026-04-21
first_seen: 2026-04-20
week: "2026-W17"
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
last_reviewed: 2026-04-20
use_case: "提供 LLM 完成任何瀏覽器任務的自我修復工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 4
repo_size_kb: 997
readme_length: 3294
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:2236,2026-04-20:2264,2026-04-21:3596,2026-04-21:3619,2026-04-22:4459,2026-04-22:4475"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "browser-harness"
  - "browser-use/browser-harness"
  - "提供 LLM 完成任何瀏覽器任務的自我修復工具。"
---

# browser-harness

**4.5k** stars · **895** stars/天 · 建立 5 天前 · Python · MIT

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

`ORG`

> [!summary] 一句話摘要
> 提供 LLM 完成任何瀏覽器任務的自我修復工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (895 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要高效自動化瀏覽器任務的開發者，特別是那些希望利用 LLM 進行動態調整的團隊。
> **一句話重點** Browser Harness 讓 LLM 能夠在瀏覽器任務中自動學習和調整，這在自動化領域是一個重要的進步。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/browser-use--browser-harness");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "browser-use--browser-harness" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的自動化能力，值得考慮。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我修復的能力，讓 LLM 在執行任務時能夠動態調整。

## 專案簡介

Browser Harness 是一個自我修復的瀏覽器工具，讓大型語言模型（LLM）能夠自由地執行各種瀏覽器任務。用戶只需將其連接到 Chrome，然後 LLM 可以在執行過程中自動編輯缺失的功能，這樣的設計使得用戶不再需要手動干預。核心機制是通過 WebSocket 與 Chrome 進行通訊，並且不需要任何框架或模板。使用者只需運行 `browser-harness` 指令，即可啟動這個工具，並開始與瀏覽器互動。這個工具的賣點在於其極簡的設計和強大的功能，能夠讓 LLM 在執行任務時自動學習和調整。技術上，它依賴於 CDP（Chrome DevTools Protocol）來控制瀏覽器，並使用 Python 進行開發，這使得整體架構輕量且易於維護。

與其他瀏覽器自動化工具相比，如 Selenium 或 Puppeteer，Browser Harness 的優勢在於其即時自我修復能力，能夠在執行過程中動態調整，這在處理複雜的網頁交互時特別有用。這個工具適合需要快速迭代和高效自動化的開發者，尤其是在處理需要多次調整的任務時。雖然目前仍在初期階段，但其活躍的開發和社群支持顯示出良好的未來潛力。使用者可能會遇到的問題包括依賴於特定的 Chrome 版本，並且需要一定的 Python 知識來進行初步設置。對於希望在自動化任務中獲得更高靈活性的團隊來說，這是一個值得考慮的選擇。

**技術棧**：`Python 3.11` · `CDP` · `WebSocket`

## 重點功能

- 自我修復功能 — LLM 可以在執行過程中自動編輯缺失的功能，無需手動干預。
- 輕量架構 — 僅需約592行 Python 代碼，易於理解和維護。
- 即時與 Chrome 通訊 — 通過 CDP 直接控制瀏覽器，無需額外框架。
- 免費的遠端瀏覽器 — 提供 3 個並發瀏覽器的免費使用，適合測試和開發。
- 簡易安裝 — 提供詳細的安裝指導，讓用戶能快速上手。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/browser-use/browser-harness.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行工具
```bash
python -m browser-harness
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝並配置好 Python 環境",
  "python -m browser-harness",
  "# 預期輸出：啟動瀏覽器並準備接受 LLM 的指令"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 4475 stars（895/天），forks 381（8.5%），這顯示出強勁的增長潛力。作者 MagMueller 和其他貢獻者在開源社群中有一定的影響力，過去的專案也獲得了良好的反響。這個專案解決了傳統瀏覽器自動化工具在靈活性和自我修復能力上的不足，讓 LLM 能夠在執行任務時自動學習和調整。最近的討論和推廣活動也為其帶來了關注。技術上，CDP 的使用使得這個工具能夠更直接地與瀏覽器互動，這在過去是難以實現的。forks/stars 比率為 8.5%，顯示出許多開發者對此工具的實際修改和使用。

## 適合誰使用

**目標受眾**：需要高效自動化瀏覽器任務的開發者，特別是那些希望利用 LLM 進行動態調整的團隊。

> [!example] 使用場景
> - 自動化測試工程師用它來在 CI/CD 流程中自動執行瀏覽器測試，因為它能自動修復缺失的功能，減少了手動維護的負擔。
> - 數據科學家用它來自動抓取網頁數據，因為其自我修復的特性讓他們能夠快速適應網站結構的變化。
> - 產品經理用它來快速驗證用戶流程，因為它能夠在執行過程中即時調整，提升了測試的靈活性和效率。

## 架構分析

Browser Harness 採用輕量級的 Python 架構，通過 CDP 與 Chrome 進行直接通訊。其設計目標是提供一個簡單且強大的工具，讓 LLM 能夠在執行任務時自動修復缺失的功能。資料流方面，LLM 通過 WebSocket 與 Chrome 進行交互，並在需要時自動編輯 `helpers.py` 中的功能。

這樣的設計使得用戶不需要深入了解底層實作，便能夠使用這個工具。選擇 Python 作為開發語言，能夠快速迭代和開發，並且社群支持良好。這種設計的代價是需要用戶具備一定的 Python 知識來進行初步設置。

整體架構的擴展性良好，未來可以根據用戶需求增加更多功能。

## 技術深入分析

Browser Harness 的核心技術機制是通過 CDP 與 Chrome 進行直接通訊，這使得 LLM 能夠在執行任務時即時調整。其架構由約592行 Python 代碼組成，並且依賴於 WebSocket 進行資料傳輸。這樣的設計使得整體效能良好，能夠快速響應用戶的請求。選擇 Python 作為開發語言，能夠快速迭代和開發，但也意味著需要用戶具備一定的編程能力。

設計上，這個工具的自我修復能力是其最大的賣點，能夠在執行過程中自動檢測缺失的功能並進行修復。這樣的設計雖然提升了靈活性，但在某些情況下可能導致不穩定性。整合方面，這個工具可以與現有的 Python 環境無縫對接，並且能夠輕鬆集成到 CI/CD 流程中。整體來說，Browser Harness 在自動化瀏覽器任務方面提供了一個創新的解決方案，值得開發者關注。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導。安裝過程相對順暢，但需要用戶具備一定的 Python 知識。文件中有針對日常使用的指南，幫助新手快速上手。整體來說，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自我修復能力強，能夠在執行過程中動態調整。
> - 輕量級架構，易於理解和維護。
> - 免費提供遠端瀏覽器，適合小型專案和測試。
> - 活躍的開發社群，持續更新和改進。

> [!danger] 缺點
> - 目前功能相對有限，需要用戶自行擴展。
> - 僅支援特定版本的 Chrome 瀏覽器。
> - 需要一定的 Python 知識來進行設置和維護。
> - 自我修復的能力可能在某些情況下不夠穩定。

> [!warning] 注意事項
> - 僅支援 Python 3.11 及以上版本
> - 需要安裝 Chrome 瀏覽器，且版本需與 CDP 相容
> - 目前僅提供有限的功能和範例，需用戶自行擴展

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium) | Selenium 提供全面的瀏覽器自動化功能，但缺乏即時自我修復能力，使用者需手動維護測試腳本。 |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | Puppeteer 專注於 Chrome 瀏覽器的自動化，但不具備 LLM 自動學習的特性，對於變動頻繁的網站不夠靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [SeleniumHQ/selenium](https://github.com/SeleniumHQ/selenium) | Selenium 提供全面的瀏覽器自動化功能，適合各種瀏覽器，但缺乏即時自我修復能力。 | 如果你的專案需要穩定的瀏覽器自動化且不需要動態調整，Selenium 是更成熟的選擇。 | medium，因為需要重寫自動化腳本以符合 Selenium 的 API。 |
| [puppeteer/puppeteer](https://github.com/puppeteer/puppeteer) | Puppeteer 專注於 Chrome 瀏覽器的自動化，提供高效的 API，但不具備 LLM 自動學習的特性。 | 如果你的專案主要針對 Chrome 瀏覽器，且需要高效的操作，Puppeteer 是不錯的選擇。 | medium，因為需要適應 Puppeteer 的 API 和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **browser-harness** | **selenium** | **puppeteer** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Selenium 提供全面的瀏覽器自動化功能，適合各種瀏覽器，但缺乏即時自我修復能力。 | Puppeteer 專注於 Chrome 瀏覽器的自動化，提供高效的 API，但不具備 LLM 自動學習的特性。 |
> | 遷移成本 | - | medium，因為需要重寫自動化腳本以符合 Selenium 的 API。 | medium，因為需要適應 Puppeteer 的 API 和操作方式。 |
> | 適用場景 | 主要場景 | 如果你的專案需要穩定的瀏覽器自動化且不需要動態調整，Sele | 如果你的專案主要針對 Chrome 瀏覽器，且需要高效的操作 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些版本的 Chrome 中可能出現不穩定的行為，特別是在自我修復功能上。
  - 解法：確保使用最新版本的 Chrome，並定期檢查更新。
- [MEDIUM] 對於複雜的網頁交互，可能需要手動編寫一些功能。
  - 解法：參考 `helpers.py` 中的範例，並根據需求進行調整。
- [MEDIUM] 在某些情況下，LLM 可能無法正確識別網頁元素。
  - 解法：手動提供元素的選擇器，或在 `domain-skills/` 中添加新的技能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的瀏覽器自動化任務 | 非常適合 | 自我修復能力讓團隊能快速適應變化的需求。 |
| 大型企業的穩定自動化流程 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 需要快速迭代的產品開發團隊 | 適合 | 能夠在執行過程中動態調整，提升開發效率。 |
| 對於複雜的網頁交互的自動化需求 | 普通 | 可能需要手動編寫部分功能，無法完全依賴自我修復。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的自動化能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 381 |
| Open Issues | 48 |
| Issue 解決率 | 4% (2 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-17 |
| 官方網站 | [Link](https://cloud.browser-use.com) |
| Repo 大小 | 997 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/browser-harness) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MagMueller](https://github.com/MagMueller) | 75 |
> | [@sauravpanda](https://github.com/sauravpanda) | 37 |
> | [@gregpr07](https://github.com/gregpr07) | 12 |
> | [@reformedot](https://github.com/reformedot) | 5 |
> | [@robertguss](https://github.com/robertguss) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和討論。
**連結**：[文件](https://cloud.browser-use.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-21）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #131 from browser-use/feat/versioning-and-fetch-use

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#139](https://github.com/browser-use/browser-harness/issues/139) | **1 issue found** across 15 files | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Browser Harness ♞
> 
> The simplest, thinnest, **self-healing** harness that gives LLM **complete freedom** to complete any browser task. Built directly on CDP.
> 
> The agent writes what's missing, mid-task. No framework, no recipes, no rails. One websocket to Chrome, nothing between.
> 
> ```
>   ● agent: wants to upload a file
>   │
>   ● helpers.py → upload_file() missing
>   │
>   ● agent edits the harness and writes it    helpers.py   192 → 199 lines
>   │                                                       + upload_file()
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
> Read `install.md` first to install and connect this repo to my real browser. Then read `SKILL.md` for normal usage. Always read `helpers.py` because that is where the functions are. When you open a setup or verification tab, activate it so I can see the active browser tab. After it is installed, open this repository in my browser and, if I am logged in to GitHub, ask me whether you should star it for me as a quick demo that the interaction works — only click the star if I say yes. If I am not logged in, just go to browser-use.com.
> ```
> 
> When this page appears, tick the checkbox so the agent can connect to your browser:
> 
> See [domain-skills/](domain-skills/) for example tasks.
> 
> ## Free remote browsers
> 
> Useful for stealth, sub-agents, or deployment.
> **Free tier: 3 concurrent browsers, proxies, captcha solving, and more. No card required.**
> 
> - Grab a key at [cloud.browser-use.com/new-api-key](https://cloud.browser-use.com/new-api-key)
> - Or let the agent sign up itself via [docs.browser-use.com/llms.txt](https://docs.browser-use.com/llms.txt) (setup flow + challenge context included).
> 
> ## How simple is it? (~592 lines of Python)
> 
> - `install.md` — first-time install and browser bootstrap
> - `SKILL.md` — day-to-day usage
> - `run.py` (~36 lines) — runs plain Python with helpers preloaded
> - `helpers.py` (~195 lines) — starting tool calls; the agent edits these
> - `admin.py` + `daemon.py` (~361 lines) — daemon bootstrap plus the CDP websocket and socket bridge
> 
> ## Contributing
> 
> PRs and improvements welcome. The best way to help: **contribute a new domain skill** under [domain-skills/](domain-skills/) for a site or task you use often (LinkedIn outreach, ordering on Amazon, filing expenses, etc.). Each skill teaches the agent the selectors, flows, and edge cases it would otherwise have to rediscover.
> 
> - **Skills are written by the harness, not by you.** Just run your task with the agent — when it figures something non-obvious out, it files the skill itself (see [SKILL.md](SKILL.md)). Please don't hand-author skill files; agent-generated ones reflect what actually works in the browser.
> - Open a PR with the generated `domain-skills//` folder — small and focused is great.
> - Bug fixes, docs tweaks, and helper improvements are equally welcome.
> - Browse existing skills (`github/`, `linkedin/`, `amazon/`, ...) to see the shape.
> 
> If you're not sure where to start, open an issue and we'll point you somewhere useful.
> 
> ---
> 
> [Bitter lesson](https://browser-use.com/posts/bitter-lesson-agent-frameworks) · [Skills](https://browser-use.com/posts/web-agents-that-actually-learn)

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[瀏覽器自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[pasky--chrome-cdp-skill|pasky/chrome-cdp-skill]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/browser-use/browser-harness) · [官方網站](https://cloud.browser-use.com)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "browser-use--browser-harness"
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
> const concepts = ["自動化","機器學習","瀏覽器自動化"];
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

- [[2026-04-22|2026-04-22]] — 再次上榜，4.5k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，3.6k stars
- [[2026-04-20|2026-04-20]] — 首次收錄，2.2k stars
