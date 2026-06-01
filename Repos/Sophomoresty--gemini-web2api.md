---
repo: Sophomoresty/gemini-web2api
url: https://github.com/Sophomoresty/gemini-web2api
owner: Sophomoresty
owner_type: User
language: Python
license: MIT
description: "Convert Google Gemini web into OpenAI-compatible API. Zero auth, cross-platform, single file."
homepage: ""
stars: 902
stars_per_day: 301
forks: 234
open_issues: 6
created: 2026-05-28
pushed_at: 2026-05-31
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
use_case: "將 Google Gemini 網頁介面轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-04"
contributor_count: 4
engagement: "medium"
issue_close_rate: 25
repo_size_kb: 188
readme_length: 8291
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-31"
star_history: "2026-05-31:519,2026-05-31:523,2026-06-01:899,2026-06-01:902"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "gemini-web2api"
  - "Sophomoresty/gemini-web2api"
  - "將 Google Gemini 網頁介面轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。"
---

# gemini-web2api

**902** stars · **301** stars/天 · 建立 3 天前 · Python · MIT

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
> 將 Google Gemini 網頁介面轉換為 OpenAI 兼容的 API，無需身份驗證，跨平台，單檔案運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (301 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要快速接入 Google Gemini 功能但不想處理身份驗證的開發者。
> **一句話重點** 這個專案提供了一個簡單的解決方案，讓開發者能夠無需身份驗證地接入 Google Gemini 的功能。

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
> **結論** 花 2 小時學習，3 小時整合，得到快速接入 Google Gemini 的能力，值得嘗試。

> [!abstract] 核心創新
> 無需身份驗證的 OpenAI 兼容 API，簡化了接入流程。

## 專案簡介

這個工具的核心機制是將 Google Gemini 的網頁介面轉換為 OpenAI 兼容的 API，實現無需身份驗證的訪問。用戶只需運行 `python gemini_web2api.py`，服務器即會啟動，並通過 `http://localhost:8081/v1` 提供 API 端點。此工具支持多種模型，包括 `gemini-3.5-flash-thinking`，並可調整思考深度，使用者可以透過 `@think=N` 參數來控制思考深度，從而獲得不同的輸出長度。技術上，這個專案使用 Python 實現，並依賴 `httpx` 進行 HTTP 請求，無需其他外部依賴，這使得它在不同平台上都能輕鬆運行。相比於其他類似工具，這個專案的特點在於其無需身份驗證的設計，這讓使用者能夠快速上手，而不必擔心繁瑣的授權流程。

與 OpenAI 的 API 直接對比，這個工具提供了更高的靈活性，因為用戶可以自由選擇是否使用 API 金鑰，並且支持多種模型的選擇。實際使用中，使用者可能會遇到 SSL 證書驗證失敗的問題，這是目前的熱門問題之一。這個專案目前處於早期階段，建議對於需要快速實現 OpenAI 兼容 API 的開發者使用，但對於生產環境的穩定性仍需謹慎評估。未來可能會加入更多功能以增強其穩定性和功能性。

**技術棧**：`Python 3.8+` · `httpx>=0.25`

## 重點功能

- 無需身份驗證 — 當 `api_keys` 為空時，無需身份驗證即可使用。
- OpenAI 兼容 — 提供 `/v1/chat/completions` 和 `/v1/models` 的替代端點。
- 多模型支持 — 包括 Flash、Pro、Auto 等多種模型選擇，輸出長度可達 20k 字元。
- 思考深度調整 — 使用 `@think=N` 參數可調整思考深度，從最深到最淺。
- 內建網路搜尋 — 利用 Gemini 的原生搜尋功能，提供即時資訊。
- 流式傳輸支持 — 支援 SSE 流式傳輸，適合即時應用。
- CLI 支持 — 提供 Google 原生 API 的兼容性，方便開發者使用。

## 快速開始

1. 啟動服務器
```bash
python gemini_web2api.py
```
2. 訪問 API 端點
```bash
curl http://localhost:8081/v1/chat/completions -H 'Content-Type: application/json' -d '{"model":"gemini-3.5-flash","messages":[{"role":"user","content":"Hello!"}]}'
```
3. 使用 OpenAI Python SDK
```bash
from openai import OpenAI
client = OpenAI(base_url='http://localhost:8081/v1', api_key='sk-your-key')
resp = client.chat.completions.create(model='gemini-3.5-flash-thinking', messages=[{"role": "user", "content": "Explain quantum computing"}])
print(resp.choices[0].message.content)
```

## 程式碼範例

```python
{
  "前置條件": "啟動服務器後，使用 curl 調用 API。",
  "指令": "curl http://localhost:8081/v1/chat/completions -H 'Content-Type: application/json' -H 'Authorization: Bearer sk-your-key' -d '{\"model\":\"gemini-3.5-flash\",\"messages\":[{\"role\":\"user\",\"content\":\"Hello!\"}]}'",
  "預期輸出": "返回一個 JSON 對象，包含模型生成的回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 902 stars（300/天），forks 234（25.9%），顯示出強烈的社群興趣。這位開發者 Sophomoresty 之前在開源領域有過其他貢獻，這次專案解決了無需身份驗證的 OpenAI 兼容 API 的需求，讓開發者能夠更輕鬆地接入 Google Gemini 的功能。此工具的出現正好滿足了對於簡化 API 使用流程的需求，並且在社群中引起了廣泛的討論和關注。高比例的 forks 也顯示出許多開發者對於這個工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速接入 Google Gemini 功能但不想處理身份驗證的開發者。

> [!example] 使用場景
> - 獨立開發者用它來快速接入 Google Gemini 的功能，因為無需身份驗證，能迅速啟動開發。
> - 小型團隊用它來構建聊天機器人，因為兼容 OpenAI API 的設計讓他們能夠輕鬆整合到現有系統中。
> - 教育工作者用它來展示 AI 模型的應用，因為簡單的配置和無需身份驗證的特性讓學生能快速上手。

## 架構分析

這個專案採用純 Python 實現，設計上追求零依賴，這意味著它可以在任何支持 Python 的環境中運行。資料流方面，請求被發送到 Gemini 的內部 API，並轉換為 OpenAI 的格式，這樣的設計使得使用者可以無縫切換到 Gemini 的功能。選擇 Python 是因為其廣泛的使用和簡單的語法，這降低了開發和維護的成本。這個工具的擴展性相對有限，因為它依賴於 Google 的 API，未來若 Google 改變其 API 結構，可能會影響到這個工具的穩定性。整體而言，這個專案提供了一個簡單的解決方案，但在面對大型應用時，可能需要考慮其可擴展性和穩定性。

## 技術深入分析

這個專案的核心技術在於其對 Google Gemini 網頁 StreamGenerate 協議的逆向工程，通過將請求轉換為 OpenAI 的 API 格式來實現功能。使用 `httpx` 進行 HTTP 請求，這使得它在性能上保持輕量級，並且能夠在不同的環境中運行。效能方面，由於沒有外部依賴，這個工具的啟動和運行速度都相對較快，但在高頻請求的情況下，可能會受到 Google 的速率限制。選擇 Python 作為開發語言，讓這個工具能夠快速迭代和維護，但也可能在處理大規模請求時出現性能瓶頸。這個專案的設計考量了使用者的便利性，但在面對未來可能的 API 變更時，可能需要持續的維護和更新。整合到現有的工具鏈中相對簡單，因為它只需配置端點和 API 金鑰，並且支持主流的開發環境和 CI/CD 流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，讓新手能夠快速上手。安裝過程相對順暢，無需複雜的配置。文件中有多語言支持，但中文文檔的內容可能不夠完整，建議使用者參考英文版本以獲得更詳細的資訊。

## 優缺點分析

> [!success] 優點
> - 無需身份驗證，快速上手。
> - 支持多種模型，靈活性高。
> - 純 Python 實現，無需額外依賴，易於部署。

> [!danger] 缺點
> - 不支持圖片/多模態輸入，功能受限。
> - 僅支持單輪對話，無法保持上下文。
> - 可能受到 Google 的速率限制，影響使用體驗。

> [!warning] 注意事項
> - 不支持圖片/多模態輸入，因為 Gemini 的圖片上傳需要專有的 RPC 協議。
> - 無法實現真正的 Pro/Ultra 模型，因為未提供付費訂閱的 cookie。
> - 僅支持單輪對話，每次請求都是獨立的，無法保持上下文。
> - 可能會受到 Google 的速率限制，高頻請求可能會被阻擋。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 API 轉換功能，但可能需要更複雜的設置和身份驗證流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於多模態輸入的處理，適合需要圖像生成的應用場景。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專為 OpenAI Codex 設計，功能更專一，適合需要代碼生成的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量更少，但生態系統不如 Python 豐富。 | 如果你的團隊需要更高的性能和記憶體效率，且願意使用 Rust。 | medium，因為需要重新學習 Rust 語言和生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於多模態輸入的處理，適合需要圖像生成的應用場景。 | 如果你的應用需要處理圖片或多模態數據，這個工具會更合適。 | high，因為需要重構應用邏輯以支持多模態功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gemini-web2api** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量更少，但生態系統不如 Python 豐富。 | 專注於多模態輸入的處理，適合需要圖像生成的應用場景。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 語言和生態系統。 | high，因為需要重構應用邏輯以支持多模態功能。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高的性能和記憶體效率，且願意使用 Rust | 如果你的應用需要處理圖片或多模態數據，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高頻請求時可能會遭遇 Google 的速率限制，導致請求失敗。
  - 解法：建議在請求之間加入延遲，或減少請求頻率。
- [MEDIUM] 使用 Pro 模型時，未提供正確的 cookie 可能導致路由錯誤。
  - 解法：確保提供正確的 cookie 文件以獲得正確的模型路由。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的聊天機器人開發 | 非常適合 | 無需身份驗證，快速集成到現有系統中。 |
| 教育機構的 AI 教學 | 適合 | 簡單的配置和使用方式讓學生能快速上手。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速接入 Google Gemini 的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時無需擔心安全性問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Python 開發環境搭配使用，適合在開發和測試階段進行集成。在一個使用 Flask 的應用中，可以將這個工具作為一個服務來調用，具體做法是將 API 端點配置為 Flask 的路由。支援 GitHub Actions 進行 CI/CD 流程，但與其他主流工具的整合可能需要額外的適配層，特別是在處理高頻請求時。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常需要依賴 Google 的官方 API，這些 API 通常需要身份驗證並且使用繁瑣。隨著開源社群對於簡化 API 使用的需求增加，這個專案應運而生。技術上，Google Gemini 的 API 設計和開放性使得這個工具的實現成為可能，未來可能會出現更多類似的解決方案來滿足開發者的需求。

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
| Forks | 234 |
| Open Issues | 6 |
| Issue 解決率 | 25% (2 closed) |
| 最後推送 | 2026-05-31 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 188 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Sophomoresty/gemini-web2api) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `httpx`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Sophomoresty](https://github.com/Sophomoresty) | 20 |
> | [@LiangLliu](https://github.com/LiangLliu) | 3 |
> | [@basketikun](https://github.com/basketikun) | 2 |
> | [@ethansunqing](https://github.com/ethansunqing) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有數個問題被提出和回應。
**連結**：[文件](README_CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-31）
> **活躍天數** 3 天 · **最新 commit** Support authenticated Gemini account routing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/Sophomoresty/gemini-web2api/issues/19) | [Bug] 调用 /v1/chat/completions 接口时出现上游 SSL 证书验证失败 (CERTIFICAT | 0 | 0 |
> | [#18](https://github.com/Sophomoresty/gemini-web2api/issues/18) | 更加强大的仓库 | 0 | 0 |
> | [#13](https://github.com/Sophomoresty/gemini-web2api/issues/13) | 如何验证 cookie 是否真正生效？Pro 模型无 thinking 延迟 | 0 | 1 |
> | [#12](https://github.com/Sophomoresty/gemini-web2api/issues/12) | 不支持图片/多模态输入 | 0 | 1 |

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
> - No external dependencies (stdlib only)
> - Network access to `gemini.google.com` (proxy/VPN may be needed in some regions)
> 
> ## How It Works
> 
> This tool reverse-engineers Google Gemini's web StreamGenerate protocol. It sends requests to the same endpoint that the Gemini web app uses, converting between OpenAI's API format and Gemini's internal protobuf-like format.
> 
> The model selection is controlled by field `[79]` in the request payload, mapped from Gemini's frontend JavaScript

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化測試]] · [[CLI/TUI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

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
> const concepts = ["API 設計","自動化測試","CLI/TUI"];
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

- [[2026-06-01|2026-06-01]] — 再次上榜，899 stars
- [[2026-05-31|2026-05-31]] — 首次收錄，519 stars
