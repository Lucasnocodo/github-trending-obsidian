---
repo: browser-use/browser-harness
url: https://github.com/browser-use/browser-harness
owner: browser-use
owner_type: Organization
language: Python
license: MIT
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task."
homepage: "https://browser-harness.com"
stars: 8854
stars_per_day: 632
forks: 792
open_issues: 82
created: 2026-04-17
pushed_at: 2026-04-30
first_seen: 2026-04-20
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-20
use_case: "讓 LLM 直接控制真實瀏覽器，實現自動化任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 13
repo_size_kb: 933
readme_length: 3425
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:2236,2026-04-20:2264,2026-04-21:3596,2026-04-21:3619,2026-04-22:4459,2026-04-22:4475,2026-04-23:5060,2026-04-23:5071,2026-04-24:5921,2026-04-24:5938,2026-04-25:6455,2026-04-26:6868,2026-04-27:7187,2026-04-28:7609,2026-04-29:7927,2026-04-30:8512,2026-05-01:8854"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "browser-harness"
  - "browser-use/browser-harness"
  - "讓 LLM 直接控制真實瀏覽器，實現自動化任務。"
---

# browser-harness

**8.9k** stars · **632** stars/天 · 建立 14 天前 · Python · MIT

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

> [!summary] 一句話摘要
> 讓 LLM 直接控制真實瀏覽器，實現自動化任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (632 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在自動化任務中使用 LLM 並希望直接控制瀏覽器的開發者。
> **一句話重點** Browser Harness 的自我修復能力使得 LLM 在瀏覽器任務中能夠更靈活和高效地運作。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、3 小時整合，得到靈活的自動化工具，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我修復能力，能夠在執行過程中自動生成缺失的輔助程式碼。

## 專案簡介

Browser Harness 是一個用於將大型語言模型（LLM）直接連接到真實瀏覽器的工具，提供了一個輕量級的 CDP（Chrome DevTools Protocol）介面，讓 LLM 可以自由執行各種瀏覽器任務。使用者只需透過一個 WebSocket 連接到 Chrome，並且在執行過程中，代理會自動生成缺失的輔助程式碼，這樣的設計使得每次執行都能自我優化，提升效率。關鍵指令如 `browser-harness` 可以啟動這個工具，並透過 `agent-workspace/agent_helpers.py` 進行任務特定的編輯。這個工具的賣點在於它的自我修復能力，能夠在每次執行中學習並改進。技術上，這個專案依賴於 Python 3.11 及多個輕量級庫，如 `cdp-use` 和 `websockets`，這使得它的安裝和運行都相對簡單，並且不需要重型依賴。

與其他自動化工具相比，如 Selenium 或 Puppeteer，Browser Harness 提供了更直接的控制和更少的中介層，這使得延遲更低，且能更靈活地處理複雜的用例。實際使用中，這個工具可以處理多達 3 個並發瀏覽器的請求，並且支援無需信用卡的免費層級，這對於小型專案或開發者來說非常友好。儘管目前的開源社群活躍度中等，仍有 82 個開放問題需要解決，這可能影響長期的穩定性和支持。這個專案目前處於 beta 階段，適合需要快速原型開發和自動化的團隊，但不建議在生產環境的核心路徑中使用。預計未來將持續增強自我學習和自動化能力，並可能擴展到更多的瀏覽器和平台支援。

**技術棧**：`Python 3.11` · `cdp-use 1.4.5` · `websockets 15.0.1`

## 重點功能

- WebSocket 連接 — 直接連接到 Chrome，無需中介層，降低延遲。
- 自我修復能力 — 代理在執行過程中自動生成缺失的輔助程式碼。
- 支持多個並發瀏覽器 — 免費層級允許同時運行 3 個瀏覽器。
- 任務特定編輯 — 使用者可以在 `agent-workspace/agent_helpers.py` 中進行自定義編輯。
- 輕量級依賴 — 僅需 Python 3.11 和少量輕量級庫，安裝簡單。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/browser-use/browser-harness.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動 Browser Harness
```bash
browser-harness
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 8854 stars（632/天），forks 792（8.9%），顯示出強烈的社群興趣。這個專案的主要貢獻者來自於多個背景，且在自動化和 LLM 領域有豐富經驗。它解決了傳統自動化工具在靈活性和自我學習能力上的不足，特別是在需要複雜交互的瀏覽器任務中。近期的推廣活動和社群討論可能也促進了其快速增長。這個工具的設計使得 LLM 能夠在瀏覽器中執行任務，這在過去是難以實現的，尤其是對於需要即時反應和自我調整的場景。高達 8.9% 的 forks/stars 比率顯示出許多開發者對於這個工具的實際修改和使用，反映出其潛在的實用性和需求。

## 適合誰使用

**目標受眾**：需要在自動化任務中使用 LLM 並希望直接控制瀏覽器的開發者。

> [!example] 使用場景
> - 前端工程師用它來自動化測試網站功能，因為可以直接控制瀏覽器並即時修正錯誤。
> - 產品經理用它來快速收集競爭對手的網站數據，因為它能自動處理登入和數據抓取。
> - 數據科學家用它來進行網頁數據擷取，因為它的自我學習能力能夠適應網站結構的變化。

## 架構分析

Browser Harness 採用輕量級的微服務架構，通過 WebSocket 與 Chrome 進行直接通訊，這樣的設計使得延遲降低並且提高了靈活性。資料流中，LLM 透過代理發送請求，代理則根據執行過程中的需求自動生成輔助程式碼，這樣的設計使得使用者無需手動編寫繁瑣的腳本。選擇 Python 作為開發語言是因為其在自動化和數據處理方面的強大生態系統，然而這也導致了對 Python 版本的限制。擴展性方面，雖然目前支持多個並發瀏覽器，但在處理大量請求時可能會遇到性能瓶頸，特別是在高負載情況下。

## 技術深入分析

Browser Harness 的核心技術機制在於其利用 Chrome DevTools Protocol (CDP) 進行直接的瀏覽器控制，這使得 LLM 能夠在執行任務時即時調整策略。透過 WebSocket 的連接方式，這個工具能夠實現低延遲的通訊，並且在每次執行中自動生成和更新輔助程式碼，這樣的設計使得使用者無需手動介入。效能上，這個工具能夠支持多達 3 個並發瀏覽器的請求，但在高負載情況下可能會遇到性能瓶頸。選擇 Python 作為開發語言使得開發過程相對簡單，但也帶來了對 Python 版本的限制。技術風險方面，隨著使用者數量的增加，可能會出現 API 穩定性問題，特別是在高並發情況下。整合方面，這個工具與現有的自動化工具鏈（如 CI/CD pipeline）相容性良好，但在某些情況下可能需要額外的適配層來處理特定的瀏覽器行為。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝指引和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 自我修復能力強，能夠自動生成缺失的輔助程式碼。
> - 安裝和使用簡單，適合快速原型開發。
> - 支持免費的多瀏覽器使用，降低了入門門檻。

> [!danger] 缺點
> - 目前僅支持 Chrome 瀏覽器，限制了使用範圍。
> - 社群活躍度中等，可能影響問題解決的速度。
> - 仍在 beta 階段，API 可能會有變動，穩定性不足。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本。
> - 目前僅支持 Chrome 瀏覽器，其他瀏覽器的支援尚未實現。
> - 社群活躍度中等，可能影響問題解決的速度。
> - 仍在 beta 階段，API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化功能，但更專注於遊戲和互動式應用的自動化，適合需要更高互動性的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料擷取和分析，缺乏 Browser Harness 的自我學習能力，適合靜態數據抓取。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 提供更全面的多瀏覽器支持，但相對較重，對資源需求較高。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Selenium | 使用 WebDriver 協議來控制瀏覽器，提供了更廣泛的瀏覽器支持，但相對較重，且延遲較高。 | 如果需要支持多種瀏覽器或更複雜的測試場景，Selenium 是更合適的選擇。 | medium，因為需要重寫測試腳本以適應不同的 API。 |
| Puppeteer | 專注於 Chrome 瀏覽器的自動化，提供了類似的功能，但不具備 Browser Harness 的自我學習能力。 | 如果只需要 Chrome 的自動化且不需要自我學習功能，Puppeteer 是不錯的選擇。 | low，因為 API 設計相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **browser-harness** | **Selenium** | **Puppeteer** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 WebDriver 協議來控制瀏覽器，提供了更廣泛的瀏覽器支持，但相對較重，且延遲較高。 | 專注於 Chrome 瀏覽器的自動化，提供了類似的功能，但不具備 Browser Harness 的自我學習能力。 |
> | 遷移成本 | - | medium，因為需要重寫測試腳本以適應不同的 API。 | low，因為 API 設計相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要支持多種瀏覽器或更複雜的測試場景，Selenium  | 如果只需要 Chrome 的自動化且不需要自我學習功能，Pu |

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

- **[HIGH]** 在某些情況下，代理無法正確生成輔助程式碼，導致任務失敗。
  - 解法：手動編輯 `agent_helpers.py` 以添加必要的輔助程式碼。
- [MEDIUM] 在高負載情況下，可能會出現性能瓶頸，導致延遲增加。
  - 解法：減少同時運行的瀏覽器數量以降低負載。
- [MEDIUM] 某些網站的動態內容可能無法正確處理，導致抓取失敗。
  - 解法：手動調整任務流程以適應特定網站的行為。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的網站自動化測試 | 非常適合 | 自我修復能力使得測試過程更靈活，且安裝簡單。 |
| 大型企業的複雜數據擷取 | 不適合 | 在高負載情況下可能會遇到性能瓶頸，且穩定性不足。 |
| 個人開發者的快速原型開發 | 非常適合 | 簡單的安裝和使用流程使得快速開發成為可能。 |
| 需要多瀏覽器支持的測試環境 | 不適合 | 目前僅支持 Chrome 瀏覽器，限制了使用範圍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，得到靈活的自動化工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Browser Harness 本身不需要高權限，且不存取敏感資料。依賴的庫也相對成熟，沒有已知的供應鏈風險。

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
| Forks | 792 |
| Open Issues | 82 |
| Issue 解決率 | 13% (12 closed) |
| 最後推送 | 2026-04-30 |
| 建立日期 | 2026-04-17 |
| 官方網站 | [Link](https://browser-harness.com) |
| Repo 大小 | 933 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/browser-harness) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MagMueller](https://github.com/MagMueller) | 76 |
> | [@sauravpanda](https://github.com/sauravpanda) | 56 |
> | [@Alezander9](https://github.com/Alezander9) | 30 |
> | [@sarath-menon](https://github.com/sarath-menon) | 16 |
> | [@gregpr07](https://github.com/gregpr07) | 14 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在 82 個開放問題。
**連結**：[文件](https://browser-harness.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-30 ~ 2026-04-30）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #265 from molesza/fix/chrome147-default-profile-cdp-fallback

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#148](https://github.com/browser-use/browser-harness/issues/148) | Cannot submit Ember.js modal forms — framework ignores all p | 1 | 1 |

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
> Read `install.md` first to install and connect this repo to my real browser. Then read `SKILL.md` for normal usage. Use `agent-workspace/agent_helpers.py` and `agent-workspace/domain-skills/` for task-specific edits. When you open a setup or verification tab, activate it so I can see the active browser tab. After it is installed, open this repository in my browser and, if I am logged in to GitHub, ask me whether you should star it for me as a quick demo that the interaction works — only click the star if I say yes. If I am not logged in, just go to browser-use.com.
> ```
> 
> When this page appears, tick the checkbox so the agent can connect to your browser:
> 
> See [agent-workspace/domain-skills/](agent-workspace/domain-skills/) for example tasks.
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
> ---
> 
> [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses) · [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)

## 延伸閱讀

相關概念：[[自動化]] · [[機器學習]] · [[瀏覽器自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[pasky--chrome-cdp-skill|pasky/chrome-cdp-skill]]

[GitHub](https://github.com/browser-use/browser-harness) · [官方網站](https://browser-harness.com)

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

- [[2026-04-24|2026-04-24]] — 再次上榜，5.9k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，5.1k stars
- [[2026-04-22|2026-04-22]] — 再次上榜，4.5k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，3.6k stars
- [[2026-04-20|2026-04-20]] — 首次收錄，2.2k stars
