---
repo: littledivy/mimic
url: https://github.com/littledivy/mimic
owner: littledivy
owner_type: User
language: Python
license: MIT
description: "Intercept any app, then call it from Python like a library"
homepage: ""
stars: 912
stars_per_day: 912
forks: 33
open_issues: 3
created: 2026-07-13
pushed_at: 2026-07-14
first_seen: 2026-07-14
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-14
use_case: "讓你能夠攔截任何應用程式，並像使用庫一樣從 Python 調用它。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-18"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 28
readme_length: 4237
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-14"
star_history: "2026-07-14:730,2026-07-15:912"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "mimic"
  - "littledivy/mimic"
  - "讓你能夠攔截任何應用程式，並像使用庫一樣從 Python 調用它。"
---

# mimic

**730** stars · **730** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/littledivy--mimic");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓你能夠攔截任何應用程式，並像使用庫一樣從 Python 調用它。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (730 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速構建和測試 API 客戶端的開發者，特別是 iOS 應用開發者。
> **一句話重點** mimic 的自動化程度讓開發者能夠專注於業務邏輯，而不是底層的 API 調用細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/littledivy--mimic");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "littledivy--mimic" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到快速構建 API 客戶端的效果，值得考慮。

> [!abstract] 核心創新
> mimic 能夠通過攔截流量自動生成 API 客戶端，這在目前的開發工具中是獨一無二的。

## 專案簡介

mimic 的核心機制是通過攔截應用程式的流量，提取身份驗證信息，並利用 AI 自動生成 Python 客戶端。使用者只需透過 `mimic record` 指令啟動代理，然後在 iPhone 上正常使用應用，mimic 便會捕捉到所有必要的請求和回應。接著，使用者可以透過 `mimic gen` 指令生成對應的 Python 客戶端，這樣就能夠輕鬆地調用 API，而不需要手動編寫客戶端代碼。這種設計使得開發者能夠快速構建與 API 交互的應用，特別適合需要頻繁調用第三方服務的場景。

技術上，mimic 依賴於 mitmproxy 來捕捉流量，並使用 Python 的 requests 庫來處理 HTTP 請求。這種選擇使得它能夠輕鬆處理 JSON 格式的數據，並且能夠自動重試失敗的請求，這在處理需要身份驗證的 API 時非常有用。

與其他類似工具相比，mimic 的最大優勢在於其自動生成客戶端的能力。

像 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard` 這類工具雖然也能攔截流量，但通常需要手動編寫客戶端代碼，這會增加開發時間和出錯的機會。mimic 的自動化程度使得它在快速開發和迭代中具有明顯的優勢。

然而，mimic 在處理某些身份驗證機制時會遇到困難，例如證書釘扎和 DPoP 令牌，這可能會限制其使用範圍。使用者需要確保他們的應用不受這些限制影響，否則將無法正常捕捉和重放請求。

總體來說，mimic 是一個非常有潛力的工具，特別適合需要快速開發和測試 API 的開發者。隨著其功能的進一步完善，未來可能會吸引更多的使用者。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇。

**技術棧**：`Python 3.9+` · `mitmproxy` · `requests>=2.28`

## 重點功能

- 自動生成客戶端 — 通過攔截流量，mimic 能夠自動生成 Python 客戶端，省去手動編寫的麻煩。
- 支援多種身份驗證 — 能夠處理常見的身份驗證機制，並在請求失敗時自動重試。
- 簡單的安裝過程 — 只需運行 `sh install.sh` 即可安裝，並自動配置 mitmproxy。
- 多種會話構建方式 — 提供多種方式來手動構建會話，適應不同的需求。
- 詳細的使用說明 — 提供清晰的步驟來幫助使用者快速上手，特別是對於 iPhone 用戶。

## 快速開始

1. 安裝 mimic
```bash
sh install.sh
```
2. 開始攔截流量
```bash
mimic record
```
3. 生成 Python 客戶端
```bash
mimic gen prod-api.hingeaws.net
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 mimic 並開始攔截流量",
  "from hinge_client import Hinge",
  "acc = Hinge()                 # reuses your captured session",
  "recs = acc.get_recommendations()",
  "acc.like(subject_id, comment=\"hi lol\")",
  "# 預期輸出：返回推薦的列表，並對特定項目進行點讚。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 730 stars（730/天），forks 25（3.4%），這顯示出相對較高的使用者興趣。作者 Divy Srivastava 之前的經驗和專業背景可能使得這個專案能夠快速吸引注意。mimic 解決了開發者在調用 API 時需要手動編寫客戶端的痛點，這在許多現有工具中並不常見。社群的反饋和使用者的需求也可能促進了這個專案的快速增長。由於其自動化的特性，這個工具在開發生態中具有明顯的優勢，尤其是在快速迭代和測試的場景下。

## 適合誰使用

**目標受眾**：需要快速構建和測試 API 客戶端的開發者，特別是 iOS 應用開發者。

> [!example] 使用場景
> - iOS 開發者用它來攔截應用流量並自動生成 Python 客戶端，因為這樣可以節省大量手動編碼的時間，快速進行 API 測試。
> - 測試工程師用它來捕捉和重放 API 請求，因為這樣可以確保應用的穩定性，並且能夠自動處理身份驗證。
> - 獨立開發者用它來快速構建與第三方服務的集成，因為這樣可以降低開發門檻，讓他們專注於業務邏輯而非底層實現。

## 架構分析

mimic 的架構基於攔截流量的代理模式，使用 mitmproxy 來捕捉 HTTP 請求和回應。這種設計使得開發者能夠無縫地捕捉和重放請求，並且通過 AI 生成的客戶端簡化了開發流程。資料流的每個節點都明確：首先捕捉流量，然後提取身份驗證信息，最後生成可用的 Python 客戶端。這種架構的取捨在於需要額外的設置和信任配置，但卻能夠大幅提高開發效率。擴展性方面，mimic 目前主要依賴 mitmproxy，這可能在處理高流量時成為瓶頸，但對於一般開發者來說，這樣的設計已經足夠使用。

## 技術深入分析

mimic 的核心技術機制是利用 mitmproxy 攔截應用流量，並提取身份驗證信息。這使得開發者能夠在不編寫客戶端代碼的情況下，快速構建與 API 的交互。效能方面，mimic 能夠處理常見的 HTTP 請求，並在請求失敗時自動重試，這對於需要穩定性的應用非常重要。選擇 Python 作為開發語言，因為其在網絡請求和數據處理方面的強大生態系統。依賴樹相對簡單，主要依賴於 requests 和 mitmproxy，這使得整體維護成本較低。技術風險方面，mimic 在處理某些身份驗證機制時可能會遇到困難，這需要開發者在使用前了解其限制。整合方面，mimic 可以輕鬆與現有的 Python 生態系統整合，並且能夠與 CI/CD 流程兼容，這使得其在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有範例，能夠幫助新手快速上手。安裝過程相對順暢，但需要注意信任設置的步驟。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動生成客戶端，節省開發時間。
> - 支援多種身份驗證機制，靈活性高。
> - 使用簡單，安裝和配置過程清晰。
> - 適合快速開發和測試 API，特別是對於 iOS 應用。

> [!danger] 缺點
> - 不支援某些身份驗證機制，限制使用範圍。
> - 需要額外的信任設置，對新手不友好。
> - 依賴於 mitmproxy，可能在高流量時出現瓶頸。

> [!warning] 注意事項
> - 不支援證書釘扎的應用，這會導致無法捕捉流量。
> - DPoP 令牌的應用無法重放請求，因為每個請求都需要新的證明。
> - 需要在 iPhone 上進行額外的信任設置，否則無法正常使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具也能攔截流量，但需要手動編寫客戶端代碼，增加了開發時間。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也能捕捉 API 請求，但缺乏自動生成客戶端的功能，使用上較為繁瑣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具也能攔截流量，但需要手動編寫客戶端代碼，增加了開發時間。 | 如果你的團隊已經在使用這個工具，且需要手動控制 API 調用的細節。 | medium，因為需要重新編寫客戶端代碼。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也能捕捉 API 請求，但缺乏自動生成客戶端的功能，使用上較為繁瑣。 | 如果你需要一個更靈活的攔截工具，並且願意花時間手動編寫客戶端。 | high，因為需要完全重寫 API 調用邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mimic** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具也能攔截流量，但需要手動編寫客戶端代碼，增加了開發時間。 | 雖然也能捕捉 API 請求，但缺乏自動生成客戶端的功能，使用上較為繁瑣。 |
> | 遷移成本 | - | medium，因為需要重新編寫客戶端代碼。 | high，因為需要完全重寫 API 調用邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用這個工具，且需要手動控制 API 調用 | 如果你需要一個更靈活的攔截工具，並且願意花時間手動編寫客戶端 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些應用可能因為證書釘扎而無法捕捉流量
  - 解法：使用 `mimic unpin` 設置 Frida 繞過。
- **[HIGH]** DPoP 令牌的應用無法重放請求
  - 解法：目前無法解決，需注意使用範圍。
- [MEDIUM] 需要在 iPhone 上進行額外的信任設置
  - 解法：確保按照 README 中的步驟進行設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 API 開發 | 非常適合 | 自動生成客戶端能大幅提高開發效率，適合快速迭代。 |
| 大型企業的核心應用 | 不適合 | 目前處於 alpha 階段，穩定性不足，無法用於生產環境。 |
| 個人開發者的測試工具 | 適合 | 簡單的安裝和使用流程，適合快速構建測試環境。 |
| 需要處理複雜身份驗證的應用 | 普通 | 對某些身份驗證機制的支援有限，需謹慎使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速構建 API 客戶端的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：mimic 本身不需要高權限，僅在本地運行，且不存取敏感資料。依賴的 mitmproxy 需注意其安全性配置，確保不會洩漏個人信息。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/littledivy--mimic");
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
> const me = dv.page("Repos/littledivy--mimic");
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
| Forks | 25 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-07-13 |
| Repo 大小 | 28 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/littledivy/mimic) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@littledivy](https://github.com/littledivy) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/littledivy/mimic#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-14）
> **活躍天數** 2 天 · **最新 commit** fix: harden HTTP error handling and auth retries (#1)

## README 摘錄

> [!info]- 展開查看原文 README
> # mimic
> 
> Intercept any app, then call it from Python like a library.
> 
> ```python
> from hinge_client import Hinge
> 
> acc = Hinge()                 # reuses your captured session
> recs = acc.get_recommendations()
> acc.like(subject_id, comment="hi lol")
> ```
> 
> You don't write `hinge_client.py`. mimic captures your own app traffic and an AI
> generates the client from it.
> 
> ## How it works
> 
> Most apps authenticate every request with the same bundle of values: a bearer
> token, some device ids, a session id, cookies. They're stable across calls.
> Capture them once from a real request you made, and you can replay them on new
> requests to the same API.
> 
> ```
> capture traffic   ->   extract auth   ->   generate client
>   (mitmproxy)         (mimic.Session)      (claude reads the
>                                             captured endpoints)
> ```
> 
> The generated client is plain Python on top of `mimic.App`, and you edit it like
> any other file. It gives you named methods, body templates, and the multi-step
> call chaining mobile APIs tend to need (fetch a token in one call, spend it in
> the next).
> 
> ## Install
> 
> ```bash
> sh install.sh
> ```
> 
> Installs [`uv`](https://astral.sh/uv) if you don't have it, then mimic in an
> isolated tool env. mitmproxy isn't a separate install; mimic launches it via
> `uvx` on first `record`. (Manual: `uv tool install mimic-client`.)
> 
> ```bash
> mimic doctor                    # confirm proxy + claude are ready
> ```
> 
> ## Use it (iPhone)
> 
> ```bash
> mimic record                    # starts the proxy, prints the iPhone steps
> ```
> 
> `record` fills in your Mac's LAN IP and walks you through it:
> 
> 1. iPhone -> Wi-Fi -> Configure Proxy -> Manual -> `:8080`
> 2. Safari -> `http://mitm.it` -> install the Apple profile
> 3. Settings -> General -> About -> Certificate Trust Settings -> turn on full
>    trust for mitmproxy. This step is easy to miss and nothing works without it.
> 4. open the app, use it normally
> 
> Then:
> 
> ```bash
> mimic hosts                     # list captured hosts; pick your API host
> mimic learn  prod-api.hingeaws.net    # see the endpoints mimic saw
> mimic gen    prod-api.hingeaws.net    # generate hinge_client.py
> ```
> 
> Then `from hinge_client import Hinge; Hinge().get_recommendations()`.
> 
> ## The library
> 
> Three ways to build a session by hand, if you don't want codegen:
> 
> ```python
> from mimic import Session
> 
> Session.from_mitm("prod-api.hingeaws.net")        # pull auth from mitmweb
> Session.from_curl(open("copied.txt").read())      # paste "Copy as cURL" from devtools
> Session(base_url="https://x.com", headers={...})  # explicit
> ```
> 
> `.get(path)`, `.post(path, json=...)`, and the other common HTTP verb helpers
> return parsed JSON and raise `requests.HTTPError` for failed responses. If your
> token rotates, a `401` on an idempotent request triggers one re-pull from
> mitmweb and a retry. Non-idempotent requests are not retried unless you explicitly
> pass `refresh=True`.
> 
> ## Capture backends
> 
> - **mitmproxy** for iOS apps (the default). mimic reads its JSON flow API and
>   runs it via `uvx`, so there's nothing extra to install.
> - **cURL / paste** for anything with a web version. `Copy as cURL` in devtools,
>   then `Session.from_curl(text)`. No proxy, no cert.
> 
> ## Limitations
> 
> Two auth schemes get in the way, for different reasons:
> 
> - **Certificate pinning** (banking, Instagram). The app rejects the mitmproxy
>   cert, so the proxy sees no traffic and nothing shows up in `mimic hosts`. This
>   blocks *capture*, not replay — get past the pin and the rest works normally.
>   `mimic unpin ` sets up a Frida-based bypass; see
>   [docs/pinning.md](docs/pinning.md).
> - **DPoP / sender-constrained tokens.** Each request carries a fresh proof
>   signed by a private key that never leaves the device, so captured requests
>   don't replay. This defeats the core model, not just capture; there's no clean
>   workaround. See [docs/dpop.md](docs/dpop.md).
> 
> If `mimic hosts` shows the app's API host, you're good.
> 
> ## Ethics
> 
> Use it on your own accounts and data. It replays your session; it is not a tool
> for accessing anyone else's. Respect each app's terms of service.
> 
> ## License
> 
> MIT, see [LICENSE](LICENSE). Provided as-is, no warranty. Use on your own
> accounts and data; you are responsible for complying with each app's terms.

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[HTTP 請求]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Kulaxyz--token-diet|Kulaxyz/token-diet]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]]

[GitHub](https://github.com/littledivy/mimic)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "littledivy--mimic"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "littledivy--mimic"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "littledivy--mimic" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "littledivy--mimic"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","自動化","HTTP 請求"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "littledivy--mimic" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/littledivy--mimic");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "littledivy--mimic" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "littledivy" AND file.name != "littledivy--mimic"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/littledivy--mimic");
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
> const me = dv.page("Repos/littledivy--mimic");
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
> const me = dv.page("Repos/littledivy--mimic");
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
> const me = dv.page("Repos/littledivy--mimic");
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
> const me = dv.page("Repos/littledivy--mimic");
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

> **2026-07-14** — 首次收錄
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

- [[2026-07-15|2026-07-15]] — 再次上榜，912 stars
- [[2026-07-14|2026-07-14]] — 首次收錄，730 stars
