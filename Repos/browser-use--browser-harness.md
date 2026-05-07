---
repo: browser-use/browser-harness
url: https://github.com/browser-use/browser-harness
owner: browser-use
owner_type: Organization
language: Python
license: MIT
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task."
homepage: "https://browser-harness.com"
stars: 11108
stars_per_day: 555
forks: 999
open_issues: 67
created: 2026-04-17
pushed_at: 2026-05-06
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
use_case: "讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 29
repo_size_kb: 1179
readme_length: 3288
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:2236,2026-04-20:2264,2026-04-21:3596,2026-04-21:3619,2026-04-22:4459,2026-04-22:4475,2026-04-23:5060,2026-04-23:5071,2026-04-24:5921,2026-04-24:5938,2026-04-25:6455,2026-04-26:6868,2026-04-27:7187,2026-04-28:7609,2026-04-29:7927,2026-04-30:8512,2026-05-01:8854,2026-05-02:9214,2026-05-03:9618,2026-05-04:10006,2026-05-05:10338,2026-05-06:10649,2026-05-07:11108"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "browser-harness"
  - "browser-use/browser-harness"
  - "讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。"
---

# browser-harness

**11.1k** stars · **555** stars/天 · 建立 20 天前 · Python · MIT

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
> 讓 LLM 直接控制真實瀏覽器，實現自我修復的自動化任務執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (555 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速自動化瀏覽器任務的開發者，特別是在面對多變的網頁環境時。
> **一句話重點** Browser Harness 的自我修復能力讓它在自動化任務中具備了前所未有的靈活性。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到高效的自動化任務執行，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我修復的能力，能夠自動生成所需的技能以適應不同的瀏覽器任務。

## 專案簡介

Browser Harness 是一個用於將大型語言模型（LLM）直接連接到真實瀏覽器的工具，旨在提供完全的自由度來執行各種瀏覽器任務。使用者只需透過一個 WebSocket 連接到 Chrome，然後代理會在執行過程中自動寫入缺失的代碼，這樣的設計使得每次執行後，工具都會自我改善。核心指令 `browser-harness` 可以啟動這個過程，並且用戶可以透過設置環境變數 `BH_DOMAIN_SKILLS=1` 來啟用社群貢獻的特定網站技能。這種自我修復的能力意味著用戶不再需要手動編寫技能，代理會根據實際情況自動生成所需的代碼。技術上，這個專案依賴於 Python 3.11 及以上版本，並使用了如 `cdp-use` 和 `websockets` 等庫來實現與 Chrome 的通訊。

與其他類似工具相比，Browser Harness 的優勢在於其簡潔的架構和自動生成技能的能力，這使得它在需要快速適應不同網站的場景中表現出色。儘管目前的開發仍在進行中，但其活躍的社群和持續的更新顯示出良好的發展潛力。使用者在實際操作中可能會遇到一些框架兼容性問題，例如 Ember.js 的模態表單提交失敗，但這些問題通常可以透過社群的支持或文檔中的指導來解決。總體而言，這個專案適合需要快速自動化瀏覽器任務的開發者，特別是在面對多變的網頁環境時。

**技術棧**：`Python 3.11` · `cdp-use 1.4.5` · `websockets 15.0.1`

## 重點功能

- 自我修復能力 — 代理在執行過程中自動生成缺失的代碼，提升任務執行的靈活性。
- 簡單的 WebSocket 連接 — 只需一個 WebSocket 連接到 Chrome，無需複雜的配置。
- 社群貢獻的技能 — 用戶可以啟用社群貢獻的網站特定技能，快速適應不同的網站。
- 支持多任務執行 — 可以同時處理多個瀏覽器任務，提升效率。
- 免費的雲端瀏覽器 — 提供免費的雲端瀏覽器服務，無需信用卡即可使用。

## 快速開始

1. 安裝 browser-harness
```bash
pip install browser-harness
```
2. 啟動代理並連接到瀏覽器
```bash
browser-harness
```
3. 設置環境變數以啟用社群技能
```bash
export BH_DOMAIN_SKILLS=1
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天內累積 11108 stars（555/天），forks 999（9.0%），這顯示出強勁的增長潛力。這個專案的主要貢獻者來自於活躍的開源社群，並且他們在自動化和 LLM 領域有豐富的經驗。Browser Harness 解決了傳統自動化工具在面對動態網頁時的靈活性不足的問題，透過自我修復的能力，大幅提升了使用效率。近期的社群討論和推文也引發了對這個工具的關注，特別是在自動化測試和任務執行的需求上。這個工具的設計理念與當前的 LLM 生態系統相契合，讓開發者能夠更方便地將 AI 代理應用於實際的瀏覽器操作。forks/stars 比率為 9.0%，顯示出許多使用者對此專案的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速自動化瀏覽器任務的開發者，特別是在面對多變的網頁環境時。

> [!example] 使用場景
> - 前端工程師用它來自動化測試網頁功能，因為手動測試繁瑣且容易出錯，這樣可以節省 50% 的測試時間。
> - 數據分析師用它來抓取網頁數據並自動填寫報告，因為這樣可以避免重複性工作，提升效率。
> - 產品經理用它來驗證用戶界面變更的效果，因為可以快速模擬用戶行為，獲得即時反饋。

## 架構分析

Browser Harness 採用輕量級的架構設計，主要由四個核心文件組成，分別負責安裝、日常使用、核心包和代理助手。這樣的設計使得工具易於擴展和維護。資料流方面，代理通過 WebSocket 與 Chrome 進行通訊，並在執行過程中動態生成所需的代碼。

選擇 Python 作為開發語言，因為其生態系統豐富且易於使用，但這也帶來了對 Python 環境的依賴。擴展性方面，雖然目前支持多任務執行，但在面對更複雜的網站時，可能需要進一步的優化和調整。整體而言，這種設計使得 Browser Harness 在自動化任務中具備了靈活性和擴展性。

## 技術深入分析

Browser Harness 的核心技術機制在於其使用 WebSocket 與 Chrome 進行通訊，這樣的設計使得代理能夠在執行過程中動態生成所需的代碼。這種方式不僅提升了任務執行的靈活性，也讓使用者能夠在面對不同網站時，快速適應和調整。效能方面，這個工具能夠同時處理多個任務，但在面對特別複雜的網站時，可能會遇到性能瓶頸。選擇 Python 作為開發語言，讓開發者能夠快速迭代和更新功能，但也帶來了對 Python 環境的依賴。技術風險方面，隨著使用者數量的增加，可能會面臨性能和穩定性的挑戰，特別是在高並發的情況下。整合方面，Browser Harness 可以輕鬆地與現有的 CI/CD pipeline 整合，但在某些情況下，可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Python 環境的版本要求。文件中提供了良好的入門指南，幫助使用者理解如何使用工具。可惜目前沒有多語言支持，僅提供英文文檔。

## 優缺點分析

> [!success] 優點
> - 自我修復能力，能夠自動生成技能以適應不同的任務。
> - 簡單的安裝和配置過程，降低了使用門檻。
> - 活躍的社群支持，能夠獲得即時的幫助和更新。

> [!danger] 缺點
> - 目前僅支持 Chrome 瀏覽器，限制了使用範圍。
> - 對某些框架的兼容性問題可能影響使用體驗。
> - 在面對複雜網站時，可能需要手動調整生成的技能。

> [!warning] 注意事項
> - 目前僅支持 Chrome 瀏覽器。
> - 對於某些框架（如 Ember.js），可能存在兼容性問題。
> - 需要 Python 3.11 及以上版本。
> - 在某些情況下，可能需要手動調整生成的技能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化功能，但不具備自我修復能力，適合較簡單的任務。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於開源自動化工具，但缺乏社群貢獻的技能生成，使用上較為繁瑣。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對特定應用場景進行優化，但不如 Browser Harness 靈活，且不支持多任務執行。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化功能，但不具備自我修復能力，適合較簡單的任務。 | 如果你的任務較為簡單且不需要自我修復的能力，這個工具可能更適合。 | low，因為兩者的功能相似，轉移過程不會太複雜。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於開源自動化工具，但缺乏社群貢獻的技能生成，使用上較為繁瑣。 | 如果你需要一個更傳統的自動化工具，並且願意手動編寫技能，這個工具可能適合你。 | medium，因為需要重新編寫技能和配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **browser-harness** | **agent-sprite-forge** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的自動化功能，但不具備自我修復能力，適合較簡單的任務。 | 專注於開源自動化工具，但缺乏社群貢獻的技能生成，使用上較為繁瑣。 |
> | 遷移成本 | - | low，因為兩者的功能相似，轉移過程不會太複雜。 | medium，因為需要重新編寫技能和配置。 |
> | 適用場景 | 主要場景 | 如果你的任務較為簡單且不需要自我修復的能力，這個工具可能更適 | 如果你需要一個更傳統的自動化工具，並且願意手動編寫技能，這個 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和測試用途，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用 Ember.js 時，無法提交模態表單，框架忽略所有程式碼輸入
  - 解法：考慮使用其他框架或手動提交表單
- [MEDIUM] 在高並發情況下，性能可能下降
  - 解法：減少同時執行的任務數量以提升穩定性
- [MEDIUM] 某些網站的動態內容可能無法正確處理
  - 解法：手動調整生成的技能以適應特定網站

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業公司需要自動化客戶聯繫流程 | 非常適合 | 自我修復能力能快速適應不同的網站和任務。 |
| 大型企業的複雜測試流程 | 普通 | 雖然可以使用，但可能需要手動調整生成的技能以適應特定需求。 |
| 個人開發者的簡單自動化任務 | 非常適合 | 簡單的安裝和使用過程，適合快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高效的自動化任務執行，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需訪問瀏覽器。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 999 |
| Open Issues | 67 |
| Issue 解決率 | 29% (28 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-04-17 |
| 官方網站 | [Link](https://browser-harness.com) |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/browser-harness) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sauravpanda](https://github.com/sauravpanda) | 101 |
> | [@MagMueller](https://github.com/MagMueller) | 76 |
> | [@Alezander9](https://github.com/Alezander9) | 64 |
> | [@sarath-menon](https://github.com/sarath-menon) | 16 |
> | [@gregpr07](https://github.com/gregpr07) | 14 |

## 社群與生態

**社群活躍度**：社群活躍，持續有新功能和修復更新。
**連結**：[文件](https://browser-harness.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-06）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #318 from browser-use/feat/runtime-dir-split

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#148](https://github.com/browser-use/browser-harness/issues/148) | Cannot submit Ember.js modal forms — framework ignores all p `agent-capability-needed` | 1 | 2 |

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

相關概念：[[自動化]] · [[機器學習]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]]

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
> const concepts = ["自動化","機器學習","CI/CD"];
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
