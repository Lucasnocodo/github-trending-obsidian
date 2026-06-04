---
repo: Sophomoresty/gemini-web2api
url: https://github.com/Sophomoresty/gemini-web2api
owner: Sophomoresty
owner_type: User
language: Python
license: MIT
description: "Convert Google Gemini web into OpenAI-compatible API. Zero auth, cross-platform, single file."
homepage: ""
stars: 1352
stars_per_day: 225
forks: 347
open_issues: 4
created: 2026-05-28
pushed_at: 2026-06-03
first_seen: 2026-05-31
week: "2026-W23"
month: "2026-05"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-31
use_case: "將 Google Gemini 的網頁介面轉換為 OpenAI 相容的 API，無需認證，跨平台，單檔案運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 69
repo_size_kb: 156
readme_length: 8487
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:519,2026-05-31:523,2026-06-01:899,2026-06-01:902,2026-06-02:1060,2026-06-02:1061,2026-06-03:1253,2026-06-03:1257,2026-06-04:1351,2026-06-04:1352"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "gemini-web2api"
  - "Sophomoresty/gemini-web2api"
  - "將 Google Gemini 的網頁介面轉換為 OpenAI 相容的 API，無需認證，跨平台，單檔案運行。"
---

# gemini-web2api

**1.4k** stars · **225** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> 將 Google Gemini 的網頁介面轉換為 OpenAI 相容的 API，無需認證，跨平台，單檔案運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (225 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速集成 Google Gemini 功能但不想處理複雜身份驗證的開發者。
> **一句話重點** 這個專案的設計理念是簡化 Google Gemini 的使用，讓開發者能夠快速集成 AI 功能，而無需面對複雜的身份驗證和配置。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "Sophomoresty--gemini-web2api" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到快速集成 Gemini 功能的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案將 Google Gemini 的網頁接口轉換為 OpenAI 相容的 API，無需身份驗證，簡化了集成過程。

## 專案簡介

這個工具的核心機制是將 Google Gemini 的網頁接口轉換為 OpenAI 相容的 API，使用者只需透過簡單的 HTTP 請求即可獲取 Gemini 的功能。使用者可以選擇不進行身份驗證，或使用 OpenAI 標準的 Bearer 認證，並且支持多種模型，如 `gemini-3.5-flash` 和 `gemini-3.5-flash-thinking`，後者可輸出長達 20,000 字元的內容。透過 `@think=N` 參數，使用者可以調整思考深度，從最深的 0 到最淺的 4，這樣的設計使得使用者能夠根據需求靈活調整輸出。這個工具的賣點在於其簡單的配置和即時的流媒體支持，使用 `httpx` 實現了 SSE 流式傳輸，讓用戶能夠獲得即時回應。其架構是純 Python，僅依賴 `httpx`，這使得它在不同平台上都能輕鬆運行，並且不需要複雜的安裝過程。

與其他 API 代理工具相比，如 `0x0funky/agent-sprite-forge` 和 `2aronS/Duel-Agents`，這個工具的優勢在於其無需身份驗證的設計和即時流式功能，適合需要快速集成的開發者。實際使用中，這個工具能夠處理多達 20,000 字元的輸出，但不支持圖像或多模態輸入，這對於某些應用場景可能是一個限制。社群活躍度良好，開發者在短短 6 天內就獲得了 1352 顆星，顯示出其潛在的市場需求。這個專案目前處於初期階段，適合需要快速實驗或集成 Gemini 功能的小型團隊或個人開發者。未來的發展方向可能會集中在增強功能和擴展模型選擇上。

**技術棧**：`Python 3.8+` · `httpx`

## 重點功能

- 無需身份驗證 — 當 `api_keys` 為空時，無需身份驗證即可使用。
- OpenAI 相容 — 直接替代 `/v1/chat/completions` 和 `/v1/models` 端點。
- 多模型支持 — 提供多種模型選擇，如 `gemini-3.5-flash` 和 `gemini-3.5-flash-thinking`。
- 思考深度調整 — 使用 `@think=N` 參數調整思考深度，範圍從 0（最深）到 4（最淺）。
- 流媒體支持 — 使用 `httpx` 實現 SSE 流式傳輸，支持即時回應。
- Google CLI 兼容 — 支持 Google 原生 API 端點，方便與現有工具整合。
- 簡單的 Docker 部署 — 提供 Docker 支持，方便在容器中運行。

## 快速開始

1. 安裝 httpx
```bash
pip install httpx
```
2. 啟動服務
```bash
python gemini_web2api.py
```
3. 訪問 API
```bash
curl http://localhost:8081/v1/chat/completions -H 'Content-Type: application/json' -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
```

## 程式碼範例

```python
[
  "# 前置條件：安裝 httpx 並啟動服務",
  "curl http://localhost:8081/v1/chat/completions \\",
  "  -H \"Content-Type: application/json\" \\",
  "  -H \"Authorization: Bearer sk-your-key\" \\",
  "  -d '{\"model\":\"gemini-3.5-flash\",\"messages\":[{\"role\":\"user\",\"content\":\"Hello!\"}]}'",
  "# 預期輸出：應該返回一個包含回應的 JSON 對象"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1352 stars（225/天），forks 347（25.7%），顯示出強烈的社群興趣。作者 Sophomoresty 及其團隊在開源社群中有一定的知名度，這個專案解決了將 Google Gemini 轉換為 OpenAI 相容 API 的需求，之前的解決方案往往需要複雜的配置或身份驗證。近期的推廣活動可能吸引了大量開發者的注意，並且這個工具的簡單性和即時性使其在開發者中迅速流行。這個工具的出現也反映了開源社群對於簡化 API 使用的需求，尤其是在 AI 領域的快速發展中。forks/stars 比率高達 25.7%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速集成 Google Gemini 功能但不想處理複雜身份驗證的開發者。

> [!example] 使用場景
> - 獨立開發者用它來快速集成 Google Gemini 的功能到自己的應用中，因為它無需身份驗證且配置簡單，能夠節省大量時間。
> - 小型團隊用它來在內部工具中實現 AI 聊天功能，因為它支持多種模型和即時流媒體，能夠提供更靈活的用戶體驗。
> - 研究人員用它來進行 AI 模型的比較和測試，因為它支持調整思考深度和多種模型選擇，方便進行實驗。

## 架構分析

這個專案採用純 Python 實現，並依賴於 `httpx` 進行 HTTP 請求和流媒體支持。架構設計上，工具直接與 Google Gemini 的網頁接口進行交互，將請求轉換為 OpenAI 的 API 格式，這樣的設計使得開發者能夠快速獲取 Gemini 的功能而不需要複雜的配置。資料流方面，請求經過轉換後發送至 Gemini 的內部端點，並將回應格式化為 OpenAI 的標準格式。

這樣的設計選擇使得使用者能夠輕鬆地在其應用中集成 Gemini 的功能。選擇 Python 作為開發語言的好處在於其廣泛的社群支持和豐富的庫，而代價則是可能在性能上不如某些編譯語言。擴展性方面，由於依賴於單一的 `httpx` 庫，未來的擴展和維護相對簡單，但也可能面臨 Google Gemini API 變更帶來的風險。

## 技術深入分析

這個工具的核心在於其對 Google Gemini 網頁接口的逆向工程，通過 HTTP 請求將 Gemini 的功能轉換為 OpenAI 相容的 API。使用 `httpx` 進行請求和流媒體處理，使得整體架構保持輕量且高效。這個工具能夠處理高達 20,000 字元的輸出，顯示出其在文本生成上的強大能力。設計上，選擇 Python 作為開發語言使得開發過程更加靈活，然而在性能上可能不及某些編譯語言。這個工具的依賴樹相對簡單，僅依賴 `httpx`，這使得未來的維護和擴展相對容易。技術風險方面，隨著 Google Gemini API 的變更，可能會導致工具的功能失效，這需要開發者持續關注 API 的更新。整合方面，這個工具可以輕鬆與現有的開發環境和 CI/CD 流程相容，降低了使用的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的使用範例和配置說明。安裝過程順暢，僅需安裝 `httpx` 即可啟動服務。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅有英文版本，可能對某些使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 無需身份驗證，降低了使用門檻。
> - 支持多種模型和思考深度調整，靈活性高。
> - 即時流媒體支持，提升用戶體驗。

> [!danger] 缺點
> - 不支持圖像或多模態輸入，功能有限。
> - 高頻請求可能受到 Google 的速率限制。
> - 每次請求為獨立對話，無法保持上下文。

> [!warning] 注意事項
> - 不支持圖像或多模態輸入，僅支持文本請求。
> - 無法實現真正的 Pro/Ultra 模型，需使用付費訂閱的 cookie 才能獲得完整功能。
> - 每次請求為獨立對話，無法保持多輪上下文。
> - 高頻請求可能會受到 Google 的速率限制，持續使用可能會被封鎖。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於代理多種 AI 服務，而 gemini-web2api 專注於將 Google Gemini 轉換為 OpenAI 相容 API，後者更簡單易用。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多種 AI 代理功能，但 gemini-web2api 的無需身份驗證設計使其更適合快速集成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於提供多種 AI 服務的代理，而 gemini-web2api 專注於將 Google Gemini 轉換為 OpenAI 相容 API，後者更簡單易用。 | 如果需要整合多種 AI 服務並且不僅限於 Google Gemini，則可以考慮這個工具。 | medium，因為需要重新配置 API 調用和整合邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多種 AI 代理功能，但 gemini-web2api 的無需身份驗證設計使其更適合快速集成。 | 如果需要多種 AI 代理功能且不在乎身份驗證的複雜性，則可以考慮這個工具。 | medium，因為需要重新設計 API 調用和處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gemini-web2api** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於提供多種 AI 服務的代理，而 gemini-web2api 專注於將 Google Gemini 轉換為 OpenAI 相容 API，後者更簡單易用。 | 提供多種 AI 代理功能，但 gemini-web2api 的無需身份驗證設計使其更適合快速集成。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 調用和整合邏輯。 | medium，因為需要重新設計 API 調用和處理邏輯。 |
> | 適用場景 | 主要場景 | 如果需要整合多種 AI 服務並且不僅限於 Google Ge | 如果需要多種 AI 代理功能且不在乎身份驗證的複雜性，則可以 |

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

- **[HIGH]** 高頻請求可能會被 Google 封鎖，特別是在測試期間。
  - 解法：控制請求頻率，避免短時間內發送過多請求。
- [MEDIUM] 使用 `gemini-3.1-pro` 時，未提供有效的付費訂閱 cookie 會自動回退到 Flash 模型。
  - 解法：確保使用有效的 Gemini Advanced 訂閱 cookie。
- [MEDIUM] 在 Docker 環境中運行時，可能需要額外配置網路設置。
  - 解法：使用 host 網路模式或正確配置 Docker 網路。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發內部工具 | 非常適合 | 無需身份驗證，快速集成 AI 功能。 |
| 獨立開發者進行 AI 實驗 | 適合 | 簡單的配置和即時回應，適合快速原型開發。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性和安全性尚未得到驗證。 |
| 需要多模態輸入的應用 | 不適合 | 不支持圖像或多模態輸入，功能有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速集成 Gemini 功能的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，僅需訪問 Gemini 網頁接口。對於使用者的敏感資料，僅需提供 cookie，並且依賴鏈較為簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
| Forks | 347 |
| Open Issues | 4 |
| Issue 解決率 | 69% (9 closed) |
| 最後推送 | 2026-06-03 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 156 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Sophomoresty/gemini-web2api) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `httpx`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Sophomoresty](https://github.com/Sophomoresty) | 22 |
> | [@LiangLliu](https://github.com/LiangLliu) | 3 |
> | [@basketikun](https://github.com/basketikun) | 2 |
> | [@aeonframework](https://github.com/aeonframework) | 1 |
> | [@ethansunqing](https://github.com/ethansunqing) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近 5 天內有多次提交。
**連結**：[文件](README_CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-06-03）
> **活躍天數** 5 天 · **最新 commit** docs: fix outdated claims in README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/Sophomoresty/gemini-web2api/issues/25) | 会不会被封号啊？ | 0 | 1 |
> | [#24](https://github.com/Sophomoresty/gemini-web2api/issues/24) | Docker bridge 网络下匿名生成空回复，host 网络正常 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gemini-web2api
> 
>   
> 
> [中文文档](README_CN.md)
> 
> Convert Google Gemini's web interface into an OpenAI-compatible API. Zero cost, cross-platform, single file.
> 
> ## Features
> 
> - **Optional API Keys**: no auth when `api_keys` is empty, OpenAI-style Bearer auth when configured
> - **OpenAI Compatible**: Drop-in replacement for `/v1/chat/completions` and `/v1/models`
> - **Tool Calling**: Full function calling support (OpenAI format)
> - **Multiple Models**: Flash, Flash Thinking (20k+ char output), Pro, Auto, Lite
> - **Thinking Depth**: Adjustable via `@think=N` suffix (0=deepest, 4=shallowest)
> - **Web Search**: Built-in internet access (Gemini's native search)
> - **Cross-Platform**: Pure Python, single optional dependency (`httpx` for streaming)
> - **Streaming**: SSE streaming support via `httpx`
> - **Codex CLI**: Responses API (`/v1/responses`) for OpenAI Codex integration
> - **Gemini CLI**: Google native API (`/v1beta/models`) for Gemini CLI compatibility
> 
> ## Quick Start
> 
> ```bash
> pip install httpx
> python gemini_web2api.py
> ```
> 
> Server starts at `http://localhost:8081/v1`.
> 
> ## Client Configuration
> 
> ### Cherry Studio / ChatBox / any OpenAI client
> 
> | Field | Value |
> |-------|-------|
> | Base URL | `http://localhost:8081/v1` |
> | API Key | any `api_keys` value from `config.json`; anything if not configured |
> | Model | `gemini-3.5-flash-thinking` |
> 
> ### curl
> 
> ```bash
> curl http://localhost:8081/v1/chat/completions \
>   -H "Content-Type: application/json" \
>   -H "Authorization: Bearer sk-your-key" \
>   -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
> ```
> 
> ### OpenAI Python SDK
> 
> ```python
> from openai import OpenAI
> client = OpenAI(base_url="http://localhost:8081/v1", api_key="sk-your-key")
> resp = client.chat.completions.create(
>     model="gemini-3.5-flash-thinking",
>     messages=[{"role": "user", "content": "Explain quantum computing"}]
> )
> print(resp.choices[0].message.content)
> ```
> 
> ### Gemini CLI
> 
> ```bash
> export GEMINI_API_KEY=none
> export GOOGLE_GEMINI_BASE_URL=http://localhost:8081
> gemini
> ```
> 
> Supports Google native API endpoints:
> - `GET /v1beta/models` — list models
> - `POST /v1beta/models/{model}:generateContent` — non-streaming
> - `POST /v1beta/models/{model}:streamGenerateContent` — streaming (SSE)
> 
> ## Available Models
> 
> | Model | Description | Output |
> |-------|-------------|--------|
> | `gemini-3.5-flash` | Fast general-purpose | ~12k chars |
> | `gemini-3.5-flash-thinking` | Deep thinking, longest output | **~20k chars** |
> | `gemini-3.5-flash-thinking-lite` | Adaptive thinking depth | ~15k chars |
> | `gemini-3.1-pro` | Pro (needs cookie for real routing) | ~12k chars |
> | `gemini-auto` | Auto model selection | varies |
> | `gemini-flash-lite` | Lightweight fast | ~10k chars |
> 
> ### Thinking Depth
> 
> Append `@think=N` to any model name:
> 
> ```
> gemini-3.5-flash-thinking@think=0   # deepest (default)
> gemini-3.5-flash-thinking@think=2   # medium
> gemini-3.5-flash-thinking@think=4   # shallowest
> ```
> 
> ## Optional: Cookie for Pro
> 
> Anonymous access works for all models, but `gemini-3.1-pro` routes to Flash without authentication. To get real Pro routing, you need a **Gemini Advanced (paid subscription)** account cookie:
> 
> ```bash
> python gemini_web2api.py --cookie-file cookie.txt
> ```
> 
> ### How to get cookies
> 
> 1. Open Chrome, go to [gemini.google.com](https://gemini.google.com) and sign in with a **Gemini Advanced** Google account
> 2. Open DevTools (F12) → Application → Cookies → `https://gemini.google.com`
> 3. Copy these cookie values: `SID`, `HSID`, `SSID`, `APISID`, `SAPISID`, `__Secure-1PSID`
> 4. Create `cookie.txt` in this format:
> 
> ```
> SID=your_sid_value; HSID=your_hsid_value; SSID=your_ssid_value; APISID=your_apisid_value; SAPISID=your_sapisid_value; __Secure-1PSID=your_1psid_value
> ```
> 
> Or use the JSON format:
> ```json
> {"cookie": "SID=xxx; HSID=xxx; SSID=xxx; APISID=xxx; SAPISID=xxx; __Secure-1PSID=xxx", "sapisid": "your_sapisid_value"}
> ```
> 
> **Alternative (browser extension)**: Use any "Export Cookies" extension to export cookies for `gemini.google.com` in Netscape format, then convert to the single-line format above.
> 
> ### Authenticated account path and XSRF token
> 
> If the signed-in Gemini page URL contains an account index, such as:
> 
> ```
> https://gemini.google.com/u/1/app/...
> ```
> 
> set `auth_user` to that index. Authenticated web requests may also require the page XSRF token. In the rendered Gemini page source, this token is exposed as `SNlM0e`; pass it as `xsrf_token` in `config.json`. The server sends it as the `at` form field.
> 
> Example:
> 
> ```json
> {
>   "cookie_file": "/app/cookie.txt",
>   "auth_user": "1",
>   "xsrf_token": "AOOh0P...",
>   "gemini_bl": "boq_assistant-bard-web-server_YYYYMMDD.xx_p0"
> }
> ```
> 
> If authenticated requests return HTTP 400 with an `xsrf` error, refresh Gemini Web, update `xsrf_token`, and make sure `auth_user` matches the `/u//` part of the browser URL.
> 
> Pro routing requires **Gemini Advanced** (paid subscription). A free Google account cookie will authenticate but silently fall back to Flash.
> 
> ## Configuration
> 
> Create `config.json` in the same directory:
> 
> ```json
> {
>   "port": 8081,
>   "host": "0.0.0.0",
>   "retry_attempts": 3,
>   "retry_delay_sec": 2,
>   "request_timeout_sec": 180,
>   "gemini_bl": "boq_assistant-bard-web-server_20260525.09_p0",
>   "auth_user": null,
>   "xsrf_token": null,
>   "api_keys": ["sk-your-key"],
>   "cookie_file": null,
>   "proxy": null,
>   "log_requests": true
> }
> ```
> 
> When `api_keys` is `[]`, authentication is disabled. When one or more keys are set, `/v1/*` endpoints require `Authorization: Bearer ` or `x-api-key: `.
> 
> ## Docker
> 
> ```bash
> cp config.example.json config.json
> docker build -t gemini-web2api .
> docker run -d --name gemini-web2api -p 8081:8081 -v ./config.json:/app/config.json gemini-web2api
> ```
> 
> Or use Docker Compose:
> 
> ```bash
> cp config.example.json config.json
> docker compose up -d
> ```
> 
> To mount a cookie file:
> 
> ```bash
> docker run -d --name gemini-web2api -p 8081:8081 -v ./config.json:/app/config.json -v ./cookie.txt:/app/cookie.txt gemini-web2api
> ```
> 
> Set `"cookie_file": "/app/cookie.txt"` in `config.json`.
> 
> ## Proxy
> 
> If you cannot access `gemini.google.com` directly (connection timeout), configure a proxy:
> 
> **Method 1: CLI argument**
> ```bash
> python gemini_web2api.py --proxy http://127.0.0.1:7890
> ```
> 
> **Method 2: config.json**
> ```json
> {"proxy": "http://127.0.0.1:7890"}
> ```
> 
> **Method 3: Environment variable** (auto-detected)
> ```bash
> export HTTPS_PROXY=http://127.0.0.1:7890
> python gemini_web2api.py
> ```
> 
> Works with Clash, V2Ray, Shadowsocks, or any HTTP proxy.
> 
> ## Tool Calling
> 
> ```python
> resp = client.chat.completions.create(
>     model="gemini-3.5-flash",
>     messages=[{"role": "user", "content": "What's the weather in Tokyo?"}],
>     tools=[{
>         "type": "function",
>         "function": {
>             "name": "get_weather",
>             "description": "Get weather for a city",
>             "parameters": {"type": "object", "properties": {"city": {"type": "string"}}, "required": ["city"]}
>         }
>     }]
> )
> ```
> 
> ## Limitations
> 
> - **No image/multimodal input**: Gemini's image upload requires a proprietary streaming RPC protocol (WIZ/ProcessFile) that cannot be replicated in a standard HTTP proxy. Image inputs in messages will be ignored with a note.
> - **Not real Pro/Ultra**: Without a paid subscription cookie, `gemini-3.1-pro` routes to the same Flash model. The "Pro" label is a UI preference, not a backend model switch.
> - **Single-turn only**: Each request is an independent conversation. Multi-turn context is simulated by including previous messages in the prompt.
> - **Rate limits**: Google may throttle high-frequency requests. The server retries automatically but sustained heavy use may be blocked.
> 
> ## Requirements
> 
> - Python 3.8+
> - `httpx` (`pip install httpx`) — used for streaming requests
> - Network access to `gemini.google.com` (proxy/VPN may be needed in some regions)
> 
> ## How It Works
> 
> This tool reverse-engineers Google Gemini's web StreamGenerate protocol. It sends requests to the same endpoint that the Gemini web app uses, co

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/Sophomoresty/gemini-web2api)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "Sophomoresty--gemini-web2api"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Sophomoresty--gemini-web2api"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Sophomoresty--gemini-web2api" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "Sophomoresty--gemini-web2api"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","自動化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Sophomoresty--gemini-web2api" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Sophomoresty--gemini-web2api" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Sophomoresty" AND file.name != "Sophomoresty--gemini-web2api"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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
> const me = dv.page("Repos/Sophomoresty--gemini-web2api");
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

> **2026-05-31** — 首次收錄
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

- [[2026-06-04|2026-06-04]] — 再次上榜，1.4k stars
- [[2026-06-03|2026-06-03]] — 再次上榜，1.3k stars
- [[2026-06-02|2026-06-02]] — 再次上榜，1.1k stars
- [[2026-06-01|2026-06-01]] — 再次上榜，899 stars
- [[2026-05-31|2026-05-31]] — 首次收錄，519 stars
