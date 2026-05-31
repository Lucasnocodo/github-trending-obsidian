---
repo: Sophomoresty/gemini-web2api
url: https://github.com/Sophomoresty/gemini-web2api
owner: Sophomoresty
owner_type: User
language: Python
license: MIT
description: "Convert Google Gemini web into OpenAI-compatible API. Zero auth, cross-platform, single file."
homepage: ""
stars: 519
stars_per_day: 260
forks: 173
open_issues: 4
created: 2026-05-28
pushed_at: 2026-05-30
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
use_case: "將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-03"
contributor_count: 3
engagement: "high"
issue_close_rate: 33
repo_size_kb: 179
readme_length: 7417
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:519"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "gemini-web2api"
  - "Sophomoresty/gemini-web2api"
  - "將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。"
---

# gemini-web2api

**519** stars · **260** stars/天 · 建立 2 天前 · Python · MIT

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
> 將 Google Gemini 網頁轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (260 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要快速集成 Google Gemini 功能但不想處理身份驗證的開發者。
> **一句話重點** 這個專案的最大亮點是無需身份驗證的設計，讓開發者能夠快速接入 Google Gemini 的功能。

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
> **結論** 花 2 小時學習，3 小時整合，得到快速接入 Gemini 功能的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需身份驗證的設計，讓開發者能夠快速接入 Google Gemini 的功能。

## 專案簡介

這個專案的核心功能是將 Google Gemini 的網頁介面轉換為 OpenAI 兼容的 API，讓開發者能夠輕鬆地使用 Gemini 的功能，而不需要進行繁瑣的身份驗證。使用者只需透過簡單的 HTTP 請求，便可訪問 Gemini 的多種模型，如 `gemini-3.5-flash` 和 `gemini-3.5-flash-thinking`，並可透過 `@think=N` 參數調整思考深度。這樣的設計使得開發者能夠快速集成 Gemini 的功能，並享受與 OpenAI API 相似的使用體驗。該工具支持 SSE 流式傳輸，並且完全用 Python 實現，無需額外的依賴，這使得它在各種環境中都能輕鬆運行。

在技術實作上，專案使用了 `httpx` 作為 HTTP 客戶端，並且支持多種模型的調用，這些模型的輸出長度可達 20,000 字符。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，這個專案的優勢在於其無需身份驗證的特性，並且能夠直接使用 Google 的原生 API，這在需要快速原型開發的情況下非常有用。



然而，該專案也有一些限制，例如不支持圖片或多模態輸入，並且每次請求都是獨立的，無法維持多輪對話的上下文。這可能會影響需要多輪交互的應用場景。從社群活躍度來看，專案在短短兩天內就獲得了519顆星，顯示出其受到廣泛關注，且有173個 fork，這表明有許多開發者在實際使用和修改這個工具。

總體來說，這個專案適合需要快速集成 Google Gemini 功能的開發者，特別是在不想處理身份驗證的情況下。未來的發展方向可能會集中在擴展功能和提升穩定性上。

**技術棧**：`Python 3.8+` · `httpx>=0.25`

## 重點功能

- 無需身份驗證 — 當 `api_keys` 為空時，自動禁用身份驗證。
- OpenAI 兼容 — 可作為 `/v1/chat/completions` 和 `/v1/models` 的替代品。
- 多種模型支持 — 包括 Flash、Pro、Auto 等多種模型，輸出長度可達 20,000 字符。
- 思考深度調整 — 透過 `@think=N` 參數調整思考深度，滿足不同需求。
- SSE 流式傳輸支持 — 允許實時數據流傳輸，提升用戶體驗。
- 內建網路搜索 — 利用 Gemini 的原生搜索功能，擴展應用場景。
- Docker 支持 — 提供 Docker 部署選項，方便在各種環境中運行。

## 快速開始

1. 啟動伺服器
```bash
python gemini_web2api.py
```
2. 訪問 API
```bash
curl http://localhost:8081/v1/chat/completions -H "Content-Type: application/json" -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
```
3. 使用 OpenAI Python SDK
```bash
from openai import OpenAI
client = OpenAI(base_url="http://localhost:8081/v1", api_key="sk-your-key")
resp = client.chat.completions.create(model="gemini-3.5-flash-thinking", messages=[{"role": "user", "content": "Explain quantum computing"}])
print(resp.choices[0].message.content)
```

## 程式碼範例

```python
{
  "前置條件": "確保伺服器已啟動",
  "指令": "curl http://localhost:8081/v1/chat/completions -H \"Content-Type: application/json\" -H \"Authorization: Bearer sk-your-key\" -d '{\"model\":\"gemini-3.5-flash\",\"messages\":[{\"role\":\"user\",\"content\":\"Hello!\"}]}'",
  "預期輸出": "一個包含模型回應的 JSON 對象"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 519 stars（260/天），forks 173（33.3%），這顯示出極高的社群關注度。作者 Sophomoresty 和其他貢獻者在開源社群中有一定的影響力，並且這個專案解決了開發者在使用 Google Gemini 時的身份驗證問題，讓開發者能夠更方便地使用其功能。這種簡化的 API 設計與當前對於快速開發的需求相吻合，吸引了大量的使用者。技術生態的變化，如對於無需身份驗證的 API 的需求增加，也使得這個工具的出現變得更加合時宜。forks/stars 比率為 33.3%，顯示出許多開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速集成 Google Gemini 功能但不想處理身份驗證的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速集成 Google Gemini 的聊天功能，因為無需身份驗證，能夠節省開發時間。
> - 獨立開發者用它來構建原型應用，因為它支持多種模型和思考深度調整，能夠靈活應對不同需求。
> - 數據科學家用它來測試和比較不同的 AI 模型，因為其 API 兼容性使得與其他工具的整合變得簡單。

## 架構分析

該專案採用單一 Python 檔案架構，旨在簡化部署和使用。通過反向工程 Google Gemini 的網頁 StreamGenerate 協議，將請求轉換為 OpenAI 的 API 格式。資料流從用戶請求開始，經過處理後發送至 Gemini 的內部端點，最終返回結果。這樣的設計使得開發者能夠輕鬆集成，代價是對於多輪對話的支持較弱。擴展性方面，該架構能夠輕鬆地在不同環境中運行，但在高頻請求的情況下，可能會受到 Google 的速率限制影響。

## 技術深入分析

該專案的核心技術機制在於反向工程 Google Gemini 的網頁協議，通過將請求轉換為 OpenAI API 格式，實現與 Gemini 的無縫對接。使用 `httpx` 作為 HTTP 客戶端，確保了請求的高效性和穩定性。專案能夠處理的資料量相對較小，主要是基於文本的請求，對於大規模數據處理可能會有瓶頸。選擇 Python 作為開發語言的好處在於其簡單易用，但也可能帶來性能上的限制。該專案的依賴樹相對簡單，僅需標準庫，降低了部署的複雜度。技術風險方面，若 Google 改變其 API 或協議，可能會導致專案無法正常運行。整合方面，與主流框架的兼容性良好，適合用於快速原型開發，但在 CI/CD 流程中可能需要額外配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 無需身份驗證，降低了使用門檻。
> - 支持多種模型和思考深度調整，靈活性高。
> - 完全用 Python 實現，無需額外依賴，便於部署。

> [!danger] 缺點
> - 不支持圖片或多模態輸入，功能有限。
> - 每次請求無法保持上下文，影響對話體驗。
> - 可能受到 Google 的請求速率限制，影響穩定性。

> [!warning] 注意事項
> - 不支持圖片或多模態輸入。
> - 使用 `gemini-3.1-pro` 時需要提供有效的 cookie，否則將路由到 Flash 模型。
> - 每次請求為獨立對話，無法維持多輪上下文。
> - 可能會受到 Google 的請求速率限制，持續高頻請求可能會被封鎖。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於 AI agent 的開發，而 gemini-web2api 專注於將 Gemini 轉換為 API，適合不同的使用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了更全面的 API 功能，而 gemini-web2api 則專注於簡化的使用體驗，適合快速原型開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，提供更全面的功能，而 gemini-web2api 專注於簡化的 API 轉換。 | 如果你的專案需要更複雜的 AI agent 功能，應選擇它。 | medium，因為需要重新設計 API 調用邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了更全面的 API 功能，支持多種模型和多模態輸入，而 gemini-web2api 則專注於簡化的使用體驗。 | 如果需要多模態支持和更強大的功能，應選擇它。 | high，因為需要重構整個應用架構以適應新的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gemini-web2api** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的開發，提供更全面的功能，而 gemini-web2api 專注於簡化的 API 轉換。 | 提供了更全面的 API 功能，支持多種模型和多模態輸入，而 gemini-web2api 則專注於簡化的使用體驗。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 調用邏輯。 | high，因為需要重構整個應用架構以適應新的 API。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更複雜的 AI agent 功能，應選擇它。 | 如果需要多模態支持和更強大的功能，應選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 `gemini-3.1-pro` 時未提供有效 cookie 將導致路由錯誤
  - 解法：確保提供有效的 cookie 文件以獲得正確路由
- [MEDIUM] 高頻請求可能會被 Google 封鎖
  - 解法：控制請求頻率，避免持續高頻請求
- [MEDIUM] 多輪對話無法保持上下文
  - 解法：在每次請求中包含之前的消息以模擬上下文

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的原型開發 | 非常適合 | 簡單易用且無需身份驗證，快速上手。 |
| 大型企業的生產環境 | 不適合 | 不穩定且存在高風險的 breaking changes。 |
| 個人開發者的實驗項目 | 適合 | 無需身份驗證，能快速測試不同模型。 |
| 需要多模態支持的應用 | 不適合 | 不支持圖片或多模態輸入，功能有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速接入 Gemini 功能的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問 Google 的 API，且不存取敏感資料。

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
| Forks | 173 |
| Open Issues | 4 |
| Issue 解決率 | 33% (2 closed) |
| 最後推送 | 2026-05-30 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 179 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Sophomoresty/gemini-web2api) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `httpx`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Sophomoresty](https://github.com/Sophomoresty) | 19 |
> | [@LiangLliu](https://github.com/LiangLliu) | 3 |
> | [@basketikun](https://github.com/basketikun) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多次提交和問題解決。
**連結**：[文件](https://github.com/Sophomoresty/gemini-web2api)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-30）
> **活躍天數** 2 天 · **最新 commit** unify acknowledgements and friend links format

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/Sophomoresty/gemini-web2api/issues/13) | 如何验证 cookie 是否真正生效？Pro 模型无 thinking 延迟 | 0 | 0 |
> | [#12](https://github.com/Sophomoresty/gemini-web2api/issues/12) | 不支持图片/多模态输入 | 0 | 0 |
> | [#11](https://github.com/Sophomoresty/gemini-web2api/issues/11) | workbuddy里调用异常 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gemini-web2api
> 
>   
> 
> [中文文档](README_CN.md)
> 
> Convert Google Gemini's web interface into an OpenAI-compatible API. Zero authentication, zero cost, cross-platform.
> 
> ## Features
> 
> - **Optional API Keys**: no auth when `api_keys` is empty, OpenAI-style Bearer auth when configured
> - **OpenAI Compatible**: Drop-in replacement for `/v1/chat/completions` and `/v1/models`
> - **Tool Calling**: Full function calling support (OpenAI format)
> - **Multiple Models**: Flash, Flash Thinking (20k+ char output), Pro, Auto, Lite
> - **Thinking Depth**: Adjustable via `@think=N` suffix (0=deepest, 4=shallowest)
> - **Web Search**: Built-in internet access (Gemini's native search)
> - **Cross-Platform**: Pure Python, no dependencies beyond stdlib
> - **Streaming**: SSE streaming support
> - **Codex CLI**: Responses API (`/v1/responses`) for OpenAI Codex integration
> - **Gemini CLI**: Google native API (`/v1beta/models`) for Gemini CLI compatibility
> 
> ## Quick Start
> 
> ```bash
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
> Anonymous access works for all models, but `gemini-3.1-pro` routes to Flash without authentication. To get real Pro routing, provide a cookie file:
> 
> ```bash
> python gemini_web2api.py --cookie-file cookie.txt
> ```
> 
> ### How to get cookies
> 
> 1. Open Chrome, go to [gemini.google.com](https://gemini.google.com) and sign in with any free Google account
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
> No paid subscription needed — a free Google account is sufficient.
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
> - No external dependencies (stdlib only)
> - Network access to `gemini.google.com` (proxy/VPN may be needed in some regions)
> 
> ## How It Works
> 
> This tool reverse-engineers Google Gemini's web StreamGenerate protocol. It sends requests to the same endpoint that the Gemini web app uses, converting between OpenAI's API format and Gemini's internal protobuf-like format.
> 
> The model selection is controlled by field `[79]` in the request payload, mapped from Gemini's frontend JavaScript source (`MODE_CATEGORY` enum).
> 
> ## Acknowledgments
> 
> - Inspired by the open-source API proxy ecosystem
> 
> ## License
> 
> MIT
> 
> ---
> 
> ## 致谢
> 
> 本项目的开发 agent 能力由 [GenericAgent](https://github.com/lsdefine/GenericAgent) 提供。
> 
> ### 🚩 友情链接
> 
> [](https://github.com/lsdefine/GenericAgent)
> [](https://linux.do/)

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化測試]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

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
> const concepts = ["API 設計","自動化測試","多模態"];
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

- [[2026-05-31|2026-05-31]] — 首次收錄，519 stars
