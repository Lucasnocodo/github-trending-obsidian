---
repo: browser-use/browser-harness
url: https://github.com/browser-use/browser-harness
owner: browser-use
owner_type: Organization
language: Python
license: MIT
description: "Browser Harness | Self-healing harness that enables LLMs to complete any task."
homepage: "https://browser-harness.com"
stars: 7609
stars_per_day: 692
forks: 679
open_issues: 89
created: 2026-04-17
pushed_at: 2026-04-28
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
use_case: "提供一個自我修復的工具，讓 LLM 能夠完成任何瀏覽器任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 6
repo_size_kb: 1003
readme_length: 3340
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-20"
star_history: "2026-04-20:2236,2026-04-20:2264,2026-04-21:3596,2026-04-21:3619,2026-04-22:4459,2026-04-22:4475,2026-04-23:5060,2026-04-23:5071,2026-04-24:5921,2026-04-24:5938,2026-04-25:6455,2026-04-26:6868,2026-04-27:7187,2026-04-28:7609"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "browser-harness"
  - "browser-use/browser-harness"
  - "提供一個自我修復的工具，讓 LLM 能夠完成任何瀏覽器任務。"
---

# browser-harness

**7.6k** stars · **692** stars/天 · 建立 11 天前 · Python · MIT

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
> 提供一個自我修復的工具，讓 LLM 能夠完成任何瀏覽器任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (692 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在瀏覽器自動化任務中使用 LLM 的開發者，特別是需要快速迭代和調整的場景。
> **一句話重點** Browser Harness 的自我修復能力讓 LLM 在瀏覽器自動化中變得更加靈活和高效。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到靈活的自動化工具，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我修復能力，讓 LLM 能夠在執行過程中動態生成所需功能。

## 專案簡介

Browser Harness 是一個自我修復的工具，旨在讓大型語言模型（LLM）能夠自由地執行任何瀏覽器任務。用戶只需透過一個 WebSocket 連接到 Chrome，然後讓代理在任務中自動編寫所需的功能。例如，當代理需要上傳檔案時，它會自動生成缺少的 `upload_file()` 函數，並完成上傳。這種設計的核心賣點是簡化了 LLM 的操作流程，讓它們能夠即時應對變化，而不需要預先定義所有功能。技術上，Browser Harness 使用了 CDP（Chrome DevTools Protocol），這使得它能夠直接與瀏覽器進行高效的通訊。依賴的庫包括 `cdp-use` 和 `websockets`，這些都是輕量級的依賴，適合快速開發和部署。

與其他類似工具相比，如 `0xGF/boneyard`，Browser Harness 的特點在於其自我修復能力，這意味著它能夠在執行過程中動態學習和調整，而不需要手動干預。這對於需要經常變更的任務特別有用，例如自動化網頁填寫或資料抓取。使用者在實際操作中可能會遇到一些挑戰，例如需要理解如何編寫和調整 `helpers.py` 中的函數，但這也提供了靈活性和擴展性。這個專案目前處於早期階段，對於希望在自動化任務中使用 LLM 的開發者來說，值得一試。未來可能會增加更多的功能和社群支持，特別是在技能生成方面。對於小型團隊或個人開發者來說，這是一個值得關注的工具，尤其是那些需要快速迭代和調整的場景。

**技術棧**：`Python 3.11` · `cdp-use 1.4.5` · `websockets 15.0.1`

## 重點功能

- 自我修復能力 — 代理能夠在執行過程中自動生成缺失的功能，提升靈活性。
- 簡單的 WebSocket 連接 — 直接與 Chrome 通訊，無需複雜的中介層。
- 支持多種任務 — 能夠執行上傳檔案、填寫表單等多種瀏覽器操作。
- 輕量級依賴 — 依賴少且輕量，便於快速部署和維護。
- 免費的遠端瀏覽器 — 提供 3 個並發瀏覽器，無需信用卡即可使用。

## 快速開始

1. 安裝 Browser Harness
```bash
pip install browser-harness
```
2. 啟動代理
```bash
browser-harness
```
3. 連接到 Chrome 瀏覽器
```bash
在瀏覽器中訪問 http://localhost:9222
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Browser Harness 並啟動代理。",
  "指令": "browser-harness",
  "預期輸出": "代理已啟動，並連接到 Chrome 瀏覽器。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 7609 stars（692/天），forks 679（8.9%），這顯示出強勁的增長潛力。作者 MagMueller 和其他貢獻者在開源社群中有一定的影響力，這個專案解決了 LLM 在瀏覽器自動化中缺乏靈活性的痛點。之前的解決方案往往需要大量的手動配置和編碼，而 Browser Harness 則通過自我修復的方式簡化了這一過程。近期的推文和討論也增加了它的曝光率，讓更多開發者意識到這個工具的潛力。這個工具的成功與其簡單的安裝和使用流程密切相關，降低了新手的入門門檻。

## 適合誰使用

**目標受眾**：希望在瀏覽器自動化任務中使用 LLM 的開發者，特別是需要快速迭代和調整的場景。

> [!example] 使用場景
> - 數據科學家用它來自動化網頁數據抓取，因為它能夠即時生成所需的功能，節省了手動編碼的時間。
> - 前端開發者用它來測試和填寫表單，因為它的自我修復能力能夠快速應對框架變更，減少了測試時間。
> - 產品經理用它來進行市場調查，自動化訪問競爭對手網站並收集信息，因為它能夠在任務中動態調整策略。

## 架構分析

Browser Harness 採用輕量級的架構設計，主要由幾個模組組成，包括 `run.py`、`helpers.py` 和 `daemon.py`。這些模組協同工作，通過 CDP 與 Chrome 瀏覽器進行通訊。`run.py` 負責啟動代理，`helpers.py` 包含了用於執行各種任務的函數，而 `daemon.py` 則處理 WebSocket 連接和事件管理。

這種設計使得整個系統能夠快速響應用戶的需求，並在需要時自動生成缺失的功能。選擇 Python 作為開發語言，因為其簡單易用且擁有豐富的庫支持，這降低了開發的複雜性。這樣的架構雖然輕量，但在處理高並發請求時可能會遇到性能瓶頸，特別是在大量用戶同時使用時。

整體來說，這個架構適合快速開發和迭代，但在大規模應用時需要進一步優化。

## 技術深入分析

Browser Harness 的核心技術機制在於其自我修復能力，這是通過 CDP（Chrome DevTools Protocol）實現的。這種設計使得代理可以在執行過程中動態生成缺失的功能，從而提高了自動化的靈活性。效能方面，該工具能夠處理多個並發請求，但在高負載情況下可能會出現性能瓶頸，特別是在大量用戶同時使用時。選擇 Python 作為開發語言，因為其簡單易用且擁有豐富的庫支持，這降低了開發的複雜性。

依賴的庫如 `cdp-use` 和 `websockets` 也都是輕量級的，這有助於保持整體系統的靈活性和可維護性。然而，這樣的設計也帶來了一些風險，例如在複雜網站上可能無法正確識別元素，這需要用戶具備一定的技術能力來調整和修正。整合方面，Browser Harness 可以輕鬆與現有的 Python 環境搭配使用，並且支持與各種瀏覽器進行交互。整體來說，這個工具在自動化任務中提供了強大的靈活性，但在大規模應用時需要進一步的優化和社群支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的指導，包含必要的範例。安裝過程相對順暢，但需要注意 Python 版本的要求。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自我修復能力強，能夠動態生成功能。
> - 輕量級設計，便於快速部署和維護。
> - 支持多種瀏覽器任務，靈活性高。

> [!danger] 缺點
> - 在複雜網站上可能無法正確識別元素。
> - 需要用戶對 Python 有一定的了解。
> - 目前社群支持和文檔還不夠完善。

> [!warning] 注意事項
> - 僅支援 Python 3.11 及以上版本。
> - 需要 Chrome 瀏覽器的支持，且需啟用遠端調試。
> - 在某些複雜的網站上可能無法正確識別元素。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化功能，但不具備自我修復能力，使用者需手動編寫所有功能。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於特定任務的自動化，而 Browser Harness 提供更通用的解決方案，適合多種瀏覽器任務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化功能，但不具備自我修復能力，使用者需手動編寫所有功能。 | 如果需要完全控制自動化流程，並且不介意手動編寫功能，可以選擇這個工具。 | medium，因為需要重新編寫功能和調整流程。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於特定任務的自動化，而 Browser Harness 提供更通用的解決方案，適合多種瀏覽器任務。 | 如果需要針對特定任務進行深度優化，這個工具會更合適。 | low，因為功能相似且可以直接替換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **browser-harness** | **agent-sprite-forge** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的自動化功能，但不具備自我修復能力，使用者需手動編寫所有功能。 | 專注於特定任務的自動化，而 Browser Harness 提供更通用的解決方案，適合多種瀏覽器任務。 |
> | 遷移成本 | - | medium，因為需要重新編寫功能和調整流程。 | low，因為功能相似且可以直接替換。 |
> | 適用場景 | 主要場景 | 如果需要完全控制自動化流程，並且不介意手動編寫功能，可以選擇 | 如果需要針對特定任務進行深度優化，這個工具會更合適。 |

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

- **[HIGH]** 在某些複雜的網站上可能無法正確識別元素，導致任務失敗。
  - 解法：用戶需手動調整 `helpers.py` 中的函數以適應特定網站。
- [MEDIUM] 需要確保 Chrome 瀏覽器已啟用遠端調試，否則無法連接。
  - 解法：在啟動 Chrome 時添加 `--remote-debugging-port=9222` 參數。
- [MEDIUM] 社群支持和文檔不夠完善，可能導致使用困難。
  - 解法：參考 GitHub Issues 和社群討論以獲得幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的自動化測試 | 非常適合 | 自我修復能力能夠快速應對測試過程中的變化。 |
| 大型企業的核心自動化流程 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 個人開發者的側項目 | 適合 | 簡單易用，適合快速原型開發。 |
| 需要高效能的數據抓取任務 | 普通 | 在高負載情況下可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的自動化工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問瀏覽器的遠端調試接口。對於敏感資料的存取，使用者需自行管理，確保不洩露個人資訊。

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
| Forks | 679 |
| Open Issues | 89 |
| Issue 解決率 | 6% (6 closed) |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-17 |
| 官方網站 | [Link](https://browser-harness.com) |
| Repo 大小 | 1003 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/browser-use/browser-harness) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MagMueller](https://github.com/MagMueller) | 76 |
> | [@sauravpanda](https://github.com/sauravpanda) | 56 |
> | [@gregpr07](https://github.com/gregpr07) | 14 |
> | [@sarath-menon](https://github.com/sarath-menon) | 11 |
> | [@reformedot](https://github.com/reformedot) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有持續的更新和問題回應。
**連結**：[文件](https://browser-harness.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-04-28）
> **活躍天數** 2 天 · **最新 commit** fix(daemon): fire-and-forget mark-title eval so load events don't stall (#171)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#148](https://github.com/browser-use/browser-harness/issues/148) | Cannot submit Ember.js modal forms — framework ignores all p | 1 | 1 |

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
> [The Bitter Lesson of Agent Harnesses](https://browser-use.com/posts/bitter-lesson-agent-harnesses) · [Web Agents That Actually Learn](https://browser-use.com/posts/web-agents-that-actually-learn)

## 延伸閱讀

相關概念：[[自動化]] · [[瀏覽器自動化]] · [[大型語言模型]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[pasky--chrome-cdp-skill|pasky/chrome-cdp-skill]]

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
> const concepts = ["自動化","瀏覽器自動化","大型語言模型"];
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
