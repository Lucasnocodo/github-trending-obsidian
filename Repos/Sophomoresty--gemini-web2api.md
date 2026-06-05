---
repo: Sophomoresty/gemini-web2api
url: https://github.com/Sophomoresty/gemini-web2api
owner: Sophomoresty
owner_type: User
language: Python
license: MIT
description: "Convert Google Gemini web into OpenAI-compatible API. Zero auth, cross-platform, single file."
homepage: ""
stars: 1413
stars_per_day: 202
forks: 354
open_issues: 5
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
use_case: "將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案部署。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 64
repo_size_kb: 156
readme_length: 8487
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:519,2026-05-31:523,2026-06-01:899,2026-06-01:902,2026-06-02:1060,2026-06-02:1061,2026-06-03:1253,2026-06-03:1257,2026-06-04:1351,2026-06-04:1352,2026-06-05:1413"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "gemini-web2api"
  - "Sophomoresty/gemini-web2api"
  - "將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案部署。"
---

# gemini-web2api

**1.4k** stars · **202** stars/天 · 建立 7 天前 · Python · MIT

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
> 將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案部署。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (202 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望快速集成 Google Gemini 功能的獨立開發者或小型團隊。
> **一句話重點** 這個專案展示了如何將大型商業 API 的功能簡化為開源工具，讓開發者能夠輕鬆接入。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到簡單的 API 接入，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於將 Google Gemini 的網頁功能無縫轉換為 OpenAI 兼容的 API，實現了簡化的使用流程。

## 專案簡介

這個專案的核心功能是將 Google Gemini 的網頁介面轉換為與 OpenAI API 兼容的接口，讓開發者可以輕鬆地使用 Gemini 的功能而不需要複雜的身份驗證。用戶只需運行 `python gemini_web2api.py`，服務器便會在 `http://localhost:8081/v1` 啟動，並支持多種模型選擇，如 `gemini-3.5-flash` 和 `gemini-3.5-flash-thinking`，後者能生成長達 20,000 字元的輸出。這個工具的賣點在於其零成本和簡單的配置，使用者可以選擇是否使用 API 金鑰進行身份驗證，並且支持多種工具調用功能。技術上，專案使用 Python 和 `httpx` 進行 HTTP 請求，並提供 SSE 流式傳輸支持，這使得它在處理即時請求時表現良好。

與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `2aronS/Duel-Agents`，本專案的優勢在於無需額外的身份驗證，並且能夠直接使用 Google 的原生 API。使用者在高頻請求時可能會遇到 Google 的速率限制，這需要進行適當的重試設置。這個專案目前處於活躍開發中，社群反應良好，並且有持續的更新。對於需要快速集成 Google Gemini 功能的開發者來說，這是一個非常合適的選擇。

**技術棧**：`Python 3.8+` · `httpx>=0.25`

## 重點功能

- 無需身份驗證 — 當 `api_keys` 為空時，無需身份驗證即可使用。
- OpenAI 兼容 — 直接替代 `/v1/chat/completions` 和 `/v1/models` 接口。
- 多模型支持 — 提供多種模型選擇，如 `gemini-3.5-flash` 和 `gemini-3.5-flash-thinking`。
- 可調思考深度 — 通過 `@think=N` 參數調整思考深度，範圍從 0（最深）到 4（最淺）。
- 內建網路搜索 — 支持 Gemini 的原生搜索功能，能夠即時獲取最新資訊。
- 流式傳輸支持 — 使用 `httpx` 實現 SSE 流式傳輸，適合即時應用。
- CLI 支持 — 提供 Google 原生 API 的 CLI 兼容性，方便開發者使用。
- 配置簡單 — 只需一個配置檔 `config.json`，即可輕鬆設置服務。

## 快速開始

1. 安裝依賴
```bash
pip install httpx
```
2. 啟動服務
```bash
python gemini_web2api.py
```
3. 訪問 API
```bash
curl http://localhost:8081/v1/chat/completions -H "Content-Type: application/json" -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
```

## 程式碼範例

```python
# 前置條件：安裝 httpx
curl http://localhost:8081/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer sk-your-key" \
  -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
# 預期輸出：根據 Gemini 模型的回應生成的內容。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1413 stars（202/天），forks 354（25.1%），這顯示出強勁的增長潛力。這個專案的作者 Sophomoresty 和其他貢獻者在開源社群中有一定的影響力，解決了開發者在使用 Google Gemini 時面臨的身份驗證和接口兼容性問題。之前，開發者需要手動處理 Google 的 API，而這個工具簡化了這一過程，讓使用者能夠更方便地接入 Gemini 的功能。社群的反饋和活躍的開發活動也促進了這個專案的流行。

## 適合誰使用

**目標受眾**：希望快速集成 Google Gemini 功能的獨立開發者或小型團隊。

> [!example] 使用場景
> - 後端工程師用它來將 Google Gemini 整合到現有的應用中，因為它提供了簡單的 API 接口，無需複雜的身份驗證。
> - 資料科學家用它來快速生成文本數據，因為它支持長達 20,000 字元的輸出，適合大規模文本生成任務。
> - 開發者用它來測試不同的模型輸出，因為它提供了多種模型選擇和可調的思考深度，讓實驗變得靈活。

## 架構分析

這個專案採用純 Python 實現，並依賴 `httpx` 進行 HTTP 請求，這使得它在不同平台上都能輕鬆運行。架構上，請求通過 Gemini 的網頁接口發送，並轉換為 OpenAI API 格式，這樣的設計使得開發者可以快速接入 Gemini 的功能，而無需處理複雜的身份驗證流程。流式傳輸的實現則是通過 SSE 協議來完成，這樣的選擇使得即時請求的處理更加高效。

這個架構的代價在於無法支持圖像輸入，因為 Gemini 的圖像上傳需要專有的 RPC 協議，這限制了其多模態能力。整體而言，這個架構在簡化使用的同時，也帶來了某些功能上的限制。擴展性方面，由於依賴於 Google 的 API，未來可能會受到 Google 政策變動的影響。

## 技術深入分析

這個專案的核心技術在於反向工程 Google Gemini 的網頁 StreamGenerate 協議，將請求轉換為 OpenAI 的 API 格式。使用 `httpx` 進行請求，這使得它能夠處理流式請求，並且在不同平台上保持一致性。效能方面，這個工具能夠處理大規模的文本生成，並且支持長達 20,000 字元的輸出，這對於需要生成大量文本的應用場景非常有用。設計上選擇 Python 作為開發語言，這使得專案的依賴性較低，並且容易維護。未來可能的技術風險包括 Google 政策的變化，這可能會影響到 API 的可用性和穩定性。此外，對於外部 API 的依賴程度較高，這意味著在 Google 端發生變更時，專案可能需要隨之調整。整合方面，這個工具可以輕鬆與現有的 Python 生態系統結合，並且支持與主流的開發工具鏈相容。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，讓新手能夠快速上手。安裝過程相對順暢，只需安裝 `httpx` 依賴即可。文件中有詳細的配置說明，並且提供了中文文檔，對於不同語言的使用者都很友好。

## 優缺點分析

> [!success] 優點
> - 無需身份驗證，降低了使用門檻。
> - 支持多種模型選擇，靈活性高。
> - 簡單的配置和啟動流程，適合快速集成。
> - 提供流式傳輸支持，適合即時應用。

> [!danger] 缺點
> - 不支持圖像輸入，功能有限。
> - 高頻請求可能會受到速率限制。
> - 單輪對話限制了上下文管理。
> - 需依賴 Google 的 API，未來可能受到影響。

> [!warning] 注意事項
> - 不支持圖像/多模態輸入，僅限文本請求。
> - 無法實現真正的 Pro/Ultra 模型，需使用付費訂閱的 cookie 進行身份驗證。
> - 僅支持單輪對話，每次請求為獨立對話，需手動管理上下文。
> - 高頻請求可能會受到 Google 的速率限制，需注意重試設置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具專注於代理和自動化，而本專案則專注於將 Gemini 轉換為 OpenAI 兼容的 API，適合需要直接 API 接入的場景。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 此工具提供多種代理選擇，但缺乏 Gemini 的直接支持，而本專案則專注於提供 Gemini 的功能，適合需要使用 Gemini 的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具專注於代理和自動化，而本專案則專注於將 Gemini 轉換為 OpenAI 兼容的 API，適合需要直接 API 接入的場景。 | 如果需要更多的自動化功能和代理選擇，而不僅僅是 API 接入。 | medium，因為需要重新設計 API 調用邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 此工具提供多種代理選擇，但缺乏 Gemini 的直接支持，而本專案則專注於提供 Gemini 的功能，適合需要使用 Gemini 的開發者。 | 如果需要多樣化的代理選擇，而不僅是單一的 API 接入。 | high，因為需要重新評估整體架構和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gemini-web2api** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 該工具專注於代理和自動化，而本專案則專注於將 Gemini 轉換為 OpenAI 兼容的 API，適合需要直接 API 接入的場景。 | 此工具提供多種代理選擇，但缺乏 Gemini 的直接支持，而本專案則專注於提供 Gemini 的功能，適合需要使用 Gemini 的開發者。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用邏輯。 | high，因為需要重新評估整體架構和功能。 |
> | 適用場景 | 主要場景 | 如果需要更多的自動化功能和代理選擇，而不僅僅是 API 接入 | 如果需要多樣化的代理選擇，而不僅是單一的 API 接入。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型應用，不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 高頻請求可能會被 Google 限制，導致請求失敗。
  - 解法：設置重試機制，控制請求頻率。
- [MEDIUM] 使用 `gemini-3.1-pro` 時，未提供有效的付費訂閱 cookie 會導致回退到 Flash 模型。
  - 解法：確保使用有效的付費訂閱 cookie。
- [MEDIUM] 單輪對話限制了上下文管理，可能影響用戶體驗。
  - 解法：手動將歷史消息包含在每次請求中。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發聊天機器人 | 非常適合 | 簡單的 API 接入和多模型支持，能快速實現功能。 |
| 需要生成長文本的內容創作團隊 | 適合 | 支持長達 20,000 字元的輸出，適合內容生成。 |
| 大型企業的生產環境 | 不適合 | 目前處於 beta 階段，穩定性和安全性需進一步驗證。 |
| 個人開發者進行實驗性項目 | 非常適合 | 無需身份驗證，快速上手，適合快速迭代。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到簡單的 API 接入，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問網絡資源，並且不存取敏感資料。對於 CI/CD 使用來說，安全性較高。

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
| Forks | 354 |
| Open Issues | 5 |
| Issue 解決率 | 64% (9 closed) |
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

**社群活躍度**：社群活躍，持續有更新和問題回應。
**連結**：[文件](https://github.com/Sophomoresty/gemini-web2api#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-06-03）
> **活躍天數** 5 天 · **最新 commit** docs: fix outdated claims in README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#26](https://github.com/Sophomoresty/gemini-web2api/issues/26) | 使用推理模型没有思考过程或者摘要是正常的吗 | 0 | 0 |
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

相關概念：[[API 設計]] · [[自動化]] · [[CLI/TUI]]

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
> const concepts = ["API 設計","自動化","CLI/TUI"];
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
