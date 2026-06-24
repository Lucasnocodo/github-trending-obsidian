---
repo: sums001/Windows-Copilot-API
url: https://github.com/sums001/Windows-Copilot-API
owner: sums001
owner_type: User
language: Python
license: MIT
description: "Reverse engineered Windows Copilot into an OpenAI-compatible API. Access GPT-4 and GPT-5 models through a simple REST interface without API keys or billing."
homepage: ""
stars: 534
stars_per_day: 134
forks: 199
open_issues: 0
created: 2026-06-19
pushed_at: 2026-06-23
first_seen: 2026-06-24
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-24
use_case: "將 Windows Copilot 反向工程成 OpenAI 兼容的 API，無需 API 金鑰或計費即可訪問 GPT-4 和 GPT-5 模型。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-01"
contributor_count: 2
engagement: "high"
issue_close_rate: 100
repo_size_kb: 735
readme_length: 9986
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-24"
star_history: "2026-06-24:534"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/api"
  - "topic/copilot"
  - "topic/llm"
aliases:
  - "Windows-Copilot-API"
  - "sums001/Windows-Copilot-API"
  - "將 Windows Copilot 反向工程成 OpenAI 兼容的 API，無需 API 金鑰或計費即可訪問 GPT-"
---

# Windows-Copilot-API

**534** stars · **134** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/sums001--Windows-Copilot-API");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`ai` `ai-agents` `api` `copilot` `llm` `microsoft-copilot` `openai`

> [!summary] 一句話摘要
> 將 Windows Copilot 反向工程成 OpenAI 兼容的 API，無需 API 金鑰或計費即可訪問 GPT-4 和 GPT-5 模型。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (134 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 希望在無需付費的情況下使用 LLM 的開發者和小型團隊。
> **一句話重點** 這個專案讓開發者能夠以零成本使用強大的 LLM，打破了傳統 API 的付費壁壘。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "sums001--Windows-Copilot-API" && p.status !== "archived")
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
> **結論** 花 2 小時學習，1 小時整合，得到免費的 LLM 使用體驗，值得考慮。

> [!abstract] 核心創新
> 將 Microsoft Copilot 轉化為 OpenAI 兼容的 API，無需 API 金鑰或計費。

## 專案簡介

Windows Copilot API 提供了一個簡單的 REST 接口，讓用戶能夠通過自己的 Microsoft Copilot 帳戶免費訪問 GPT-4 和 GPT-5 模型。用戶只需在瀏覽器中登錄一次，然後便可在 Python 中使用 `client.chat("Hi")` 進行聊天，或啟動一個本地伺服器，讓任何 OpenAI 兼容的應用程序都能無縫對接。這種設計的核心賣點在於它消除了傳統 API 的金錢負擔，並且能在匿名 Copilot 被封鎖的地區（如印度）正常運作。技術上，這個專案使用 FastAPI 和 Uvicorn 作為後端框架，並依賴 Playwright 進行瀏覽器自動化，這使得它能夠在本地運行並自動管理會話。

相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，Windows Copilot API 的主要優勢在於其無需 API 金鑰的設計，並且能夠支持多輪對話和流式輸出。使用者在高並發情況下可能會遇到性能瓶頸，因為它的請求處理是串行的，這意味著在高負載下可能會導致 502 錯誤。這個專案目前仍在快速發展中，未來可能會增加更多功能或改進性能。對於個人開發者或小型團隊來說，這是一個值得考慮的免費替代方案，特別是在需要快速原型開發或測試的情境下。

**技術棧**：`Python 3.9+` · `FastAPI` · `Uvicorn` · `Playwright`

## 重點功能

- 免費使用 — 利用現有的 Microsoft Copilot 帳戶，無需額外費用。
- Python 庫支持 — 直接在 Python 中使用 `client.chat("Hi")` 進行對話。
- OpenAI 兼容 API — 本地伺服器可用於替代 OpenAI 的 API，無需修改現有代碼。
- 支持流式輸出 — 可以逐字輸出回應，適合需要即時反饋的應用。
- 多輪對話支持 — 透過 `conversation_id` 參數保持對話上下文。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 安裝 Playwright 需要的瀏覽器
```bash
playwright install chromium
```
3. 啟動本地伺服器
```bash
python app.py
```

## 程式碼範例

```python
{
  "前置條件": "已安裝並啟動本地伺服器",
  "指令": "curl http://localhost:8000/v1/chat/completions -H \"Content-Type: application/json\" -d '{\"messages\": [{\"role\": \"user\", \"content\": \"Hello!\"}]}'",
  "預期輸出": "返回一個 JSON 對象，包含模型生成的回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 534 stars（134/天），forks 199（37.3%），這顯示出強烈的社群興趣。作者 sums001 及 yurilopes 之前在開源社群中有一定的貢獻，這個專案解決了使用 Microsoft Copilot 進行開發時的高成本問題，讓開發者能夠在無需支付的情況下使用強大的 LLM。此專案的推出可能受到社群對於免費高效能 AI 工具需求上升的影響。高 forks/stars 比率顯示出許多開發者正在積極修改和使用這個工具，而不是單純觀望。

## 適合誰使用

**目標受眾**：希望在無需付費的情況下使用 LLM 的開發者和小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來快速構建原型，因為它無需 API 金鑰，降低了成本。
> - 小型團隊用它來進行內部工具的開發，因為它支持多輪對話，適合需要持續交互的應用。
> - AI 研究者用它來測試不同的對話模型，因為它能夠在本地環境中輕鬆集成和測試。

## 架構分析

該專案採用 FastAPI 作為後端框架，並使用 Uvicorn 作為 ASGI 伺服器，這使得它能夠快速處理 HTTP 請求。資料流方面，使用 Playwright 進行瀏覽器自動化，實現與 Microsoft Copilot 的會話管理。這種設計的好處在於能夠利用現有的 Microsoft 帳戶進行身份驗證，而代價是需要在本地環境中進行登錄。由於請求是串行處理的，這意味著在高並發情況下性能會受到影響，這是設計上的一個 trade-off。整體而言，這個架構適合小型應用或個人項目，但在需要高可用性或高並發的商業環境中可能會遇到瓶頸。

## 技術深入分析

Windows Copilot API 的核心技術在於利用 FastAPI 和 Playwright 進行瀏覽器自動化，這使得它能夠在本地環境中運行並管理 Microsoft Copilot 的會話。這個設計允許用戶在無需 API 金鑰的情況下，直接使用 Microsoft 提供的 LLM。效能方面，由於請求是串行處理的，這意味著在高並發情況下可能會出現性能瓶頸，特別是在處理大量請求時。選擇 FastAPI 是因為它的高效能和簡單的路由設計，而 Playwright 則提供了強大的瀏覽器自動化能力。這種架構的依賴關係相對簡單，主要依賴於 Python 的生態系統，這降低了學習曲線。技術風險方面，串行請求的設計可能在高流量時導致服務不穩定，這需要在實際使用中進行監控和調整。整合方面，與現有的 OpenAI 工具鏈相容性良好，能夠輕鬆接入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意手動登錄的步驟。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，降低了使用成本。
> - 支持多輪對話和流式輸出，適合交互式應用。
> - 簡單的安裝和使用流程，適合快速原型開發。

> [!danger] 缺點
> - 僅支持單一帳戶的串行請求，並發性能差。
> - 需要手動登錄，無法在無頭環境中自動化。
> - 對於高流量應用，可能無法滿足需求。

> [!warning] 注意事項
> - 僅支持單一 Microsoft 帳戶的串行請求，並發請求會導致錯誤。
> - 需要在本地環境中手動登錄 Microsoft 帳戶，無法在無頭環境中自動登錄。
> - 對於高並發請求，性能可能會下降，建議保持請求數量在 1-4 之間。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的框架，適合需要多代理協作的場景，但不支持 OpenAI 兼容 API。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 模型的 API 接口，但無法訪問更高效能的 GPT-4 和 GPT-5 模型。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的框架，適合需要多代理協作的場景，但不支持 OpenAI 兼容 API。 | 如果你的項目需要多個 AI 代理之間的協作，這個工具會更合適。 | medium，因為需要重新設計整個代理的交互邏輯。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 模型的 API 接口，適合對 GPT-2 有需求的開發者，但無法訪問更高效能的 GPT-4 和 GPT-5 模型。 | 如果你的應用只需要 GPT-2 的功能，這個工具會更簡單直接。 | low，因為 API 接口設計相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Windows-Copilot-API** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理的框架，適合需要多代理協作的場景，但不支持 OpenAI 兼容 API。 | 提供 GPT-2 模型的 API 接口，適合對 GPT-2 有需求的開發者，但無法訪問更高效能的 GPT-4 和 GPT-5 模型。 |
> | 遷移成本 | - | medium，因為需要重新設計整個代理的交互邏輯。 | low，因為 API 接口設計相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的項目需要多個 AI 代理之間的協作，這個工具會更合適 | 如果你的應用只需要 GPT-2 的功能，這個工具會更簡單直接 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人開發和小型項目，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 高並發請求會導致 502 錯誤
  - 解法：保持並發請求在 1-4 之間以避免錯誤
- [MEDIUM] 需要手動登錄 Microsoft 帳戶
  - 解法：在本地環境中首次運行時進行登錄，後續自動管理會話
- [MEDIUM] 在無頭環境中無法自動登錄
  - 解法：使用可視化環境進行登錄，然後再轉移到無頭環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發內部工具 | 非常適合 | 支持多輪對話，適合需要持續交互的應用。 |
| 個人開發者進行快速原型開發 | 非常適合 | 無需 API 金鑰，降低了使用成本。 |
| 大型企業的高流量應用 | 不適合 | 高並發性能差，可能無法滿足需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到免費的 LLM 使用體驗，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅存取用戶的 Microsoft 帳戶資料，依賴於用戶的登錄狀態。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
| Forks | 199 |
| Open Issues | 0 |
| Issue 解決率 | 100% (9 closed) |
| 最後推送 | 2026-06-23 |
| 建立日期 | 2026-06-19 |
| Repo 大小 | 735 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sums001/Windows-Copilot-API) |
| Topics | `ai` `ai-agents` `api` `copilot` `llm` `microsoft-copilot` `openai` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `curl_cffi` `playwright` `fastapi` `uvicorn`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sums001](https://github.com/sums001) | 21 |
> | [@yurilopes](https://github.com/yurilopes) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，所有問題都已解決，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/sums001/Windows-Copilot-API)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-23）
> **活躍天數** 2 天 · **最新 commit** Readme Update

## README 摘錄

> [!info]- 展開查看原文 README
> # Windows Copilot API: a free LLM API powered by Microsoft Copilot
> 
> **Using your own Microsoft Copilot account.** No API key, no credits, no paid plan: it turns the free chat at [copilot.microsoft.com](https://copilot.microsoft.com) into an API you can call from code.
> 
> You can use it in two ways:
> 
> - 🐍 **As a Python library:** just call `client.chat("Hi")`. Supports streaming and multi-turn conversations.
> - 🔌 **As a local OpenAI-compatible API:** runs a server at `http://localhost:8000/v1` that speaks the OpenAI format, so the official `openai` SDK (and any OpenAI-compatible app) works as a drop-in, with `localhost` in place of OpenAI.
> 
> You sign in once with your Microsoft account in a browser; your session is saved and refreshed automatically after that.
> 
> > **Unofficial project.** Not affiliated with or endorsed by Microsoft. It automates the consumer Copilot web experience for personal use, so use it responsibly and within Microsoft's terms.
> 
> ---
> 
> 
> ## Setup (2 minutes)
> 
> ```bash
> 
> # Install dependencies
> pip install -r requirements.txt
> 
> 
> # Install the browser Playwright needs (one-time)
> playwright install chromium
> 
> 
> ## Usage 1: In Python (no server)
> 
> The simplest way if your code is already Python.
> 
> ```python
> from copilot import CopilotClient
> 
> client = CopilotClient()                 # loads your signed-in session
> 
> 
> ## Usage 2: As an OpenAI-compatible server
> 
> Start a local server that speaks the OpenAI API, so existing OpenAI tools and SDKs work unchanged.
> 
> ```bash
> python app.py
> 
> ## Run with Docker (optional)
> 
> Prefer a container? You can run the OpenAI-compatible server in Docker once you've signed in.
> 
> > **Sign in on the host first.** The login step above opens a *visible* browser, which can't run inside the headless container — so run `python -m copilot login` on your host to populate `session/`. The container mounts that folder and only does the automatic (headless) token refresh from then on.
> 
> ```bash
> docker compose up --build
> 
> # -> Copilot OpenAI-compatible API on http://localhost:8000
> ```
> 
> The [docker-compose.yml](docker-compose.yml) maps port `8000` and bind-mounts your `session/` so the login persists across restarts. Tune `RATE_LIMIT_RPM` / `RATE_LIMIT_BURST` there. To run without Compose, build and pass the same bindings by hand:
> 
> ```bash
> docker build -t windows-copilot-api .
> docker run --rm -p 8000:8000 -v "$(pwd)/session:/app/session" windows-copilot-api
> ```
> 
> ---
> 
> 
> # -> Copilot OpenAI-compatible API on http://127.0.0.1:8000
> ```
> 
> Then point any OpenAI client at it (the API key is required by the SDK but ignored):
> 
> ```python
> from openai import OpenAI
> 
> client = OpenAI(base_url="http://localhost:8000/v1", api_key="unused")
> 
> resp = client.chat.completions.create(
>     model="copilot",
>     messages=[{"role": "user", "content": "Hello!"}],
> )
> print(resp.choices[0].message.content)
> ```
> 
> Or call it with plain HTTP / `curl`:
> 
> ```bash
> curl http://localhost:8000/v1/chat/completions \
>   -H "Content-Type: application/json" \
>   -d '{"messages": [{"role": "user", "content": "Hello!"}]}'
> ```
> 
> **Endpoints**
> 
> | Method | Path | Description |
> | --- | --- | --- |
> | `POST` | `/v1/chat/completions` | Chat (supports `"stream": true` and an optional `"conversation_id"`) |
> | `GET`  | `/v1/models` | Lists the single `copilot` model |
> 
> > Change the address with env vars: `HOST=0.0.0.0 PORT=8080 python app.py`, or run `uvicorn server.api:app --host 0.0.0.0 --port 8080`.
> 
> 👉 More: [examples/04_server_http.py](examples/04_server_http.py), [05_server_stream.py](examples/05_server_stream.py), [06_server_openai_sdk.py](examples/06_server_openai_sdk.py)
> 
> ---
> 
> 
> ## Why use this?
> 
> - **Free:** uses your normal signed-in Copilot, no API billing.
> - **Drop-in OpenAI replacement:** point any OpenAI client at `localhost` and it just works.
> - **Works everywhere you're signed in:** the signed-in path works even in regions where *anonymous* Copilot is blocked (e.g. India).
> - **Streaming + conversations:** token-by-token output and multi-turn threads addressed by `conversation_id`.
> 
> ---
> 
> 
> ## Table of contents
> 
> - [Why use this?](#why-use-this)
> - [Requirements](#requirements)
> - [Setup (2 minutes)](#setup-2-minutes)
> - [Run with Docker (optional)](#run-with-docker-optional)
> - [Usage 1: In Python (no server)](#usage-1-in-python-no-server)
> - [Usage 2: As an OpenAI-compatible server](#usage-2-as-an-openai-compatible-server)
> - [Command line](#command-line)
> - [Concurrency & stress test](#concurrency--stress-test)
> - [Rate limiting](#rate-limiting)
> - [Project layout](#project-layout)
> - [Notes & limitations](#notes--limitations)
> - [Troubleshooting](#troubleshooting)
> - [License](#license)
> - [Star History](#star-history)
> 
> ---
> 
> 
> ## Requirements
> 
> - **Python 3.9+**
> - A **Microsoft account** (the free one you use for Copilot is fine)
> - Works on Windows, macOS, and Linux
> 
> ---
> 
> 
> # 1. Clone the project
> git clone 
> cd Windows-Copilot-API
> ```
> 
> **2. Create and activate a virtual environment**
> 
> On **macOS / Linux**:
> 
> ```bash
> python3 -m venv venv
> source venv/bin/activate
> ```
> 
> On **Windows** (PowerShell):
> 
> ```powershell
> python -m venv venv
> venv\Scripts\Activate.ps1
> ```
> 
> > On Windows you may need to allow script execution once: `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`. In `cmd.exe` activate with `venv\Scripts\activate.bat` instead.
> 
> **3. Install dependencies and sign in**
> 
> ```bash
> 
> # Sign in once: a browser opens, log into your Microsoft account
> python -m copilot login
> ```
> 
> The browser **closes by itself** once sign-in is detected — you don't need to press Enter or close it manually. The steps are logged to `session/login.log` if anything goes wrong. That's it: your session is saved under `session/` (git-ignored, never shared) and reused on every run.
> 
> > 💡 You can even skip step 3: the **first** time you call `chat()` or start the server, it opens the sign-in browser for you automatically.
> 
> > 🛠️ **Run into trouble during setup or your first run?** Head to the [Troubleshooting](#troubleshooting) section, the bundled diagnostic both *fixes* common issues (captcha/clearance) and *logs* a shareable report.
> 
> ---
> 
> 
> # Get a full reply
> reply = client.chat("Say hello in one short sentence.")
> print(reply.text)
> 
> 
> # Continue the SAME conversation — pass the id back
> reply2 = client.chat("And now in French?", reply.conversation_id)
> print(reply2.text)
> 
> 
> # Stream the answer as it's typed
> for chunk in client.stream("Tell me a short joke"):
>     print(chunk, end="", flush=True)
> ```
> 
> `chat()` returns the full text plus a `conversation_id`; pass that id back to keep the thread going, or omit it to start fresh. `stream()` yields the reply piece by piece.
> 
> 👉 More: [examples/01_direct_chat.py](examples/01_direct_chat.py), [02_direct_conversation.py](examples/02_direct_conversation.py), [03_direct_stream.py](examples/03_direct_stream.py)
> 
> ---
> 
> 
> ## Command line
> 
> ```bash
> python -m copilot login          # sign in and save the session
> python -m copilot ask "Hello!"   # quick one-shot question
> ```
> 
> ---
> 
> 
> ## Concurrency & stress test
> 
> The server bridges a **single** signed-in Copilot account, and Copilot's chat
> socket doesn't tolerate concurrent conversations from one process. So the server
> **serializes** upstream calls: parallel HTTP requests queue behind a lock and run
> one at a time (see [server/api.py](server/api.py)). This is intentional, and it
> means throughput is sequential, not parallel.
> 
> You can measure where it breaks with the included stress test, which fires a
> batch of simultaneous requests and **doubles the batch size every successful
> round** until the first error:
> 
> ```bash
> 
> # Start the server in one terminal
> python app.py
> 
> 
> # Ramp concurrency in another (1 → 2 → 4 → 8 → …)
> python tests/stress.py
> python tests/stress.py --max 64 --timeout 120 --url http://localhost:8000
> ```
> 
> **Sample run** (one signed-in account):
> 
> | Concurrency | Result | Wall time | Latency (min / median / max) |
> | --- | --- | --- | --- |
> | 1 | ✓ all ok | 3.7s | 3.7 / 3.7 / 3.7s |
> | 2 | ✓ all ok | 4.6s | 3.4 / 4.6 / 4.6s |
> | 4 | ✓ all ok | 8.3s | 3.

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Sophomoresty--gemini-web2api|Sophomoresty/gemini-web2api]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]]

[GitHub](https://github.com/sums001/Windows-Copilot-API)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "sums001--Windows-Copilot-API"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "sums001--Windows-Copilot-API"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "sums001--Windows-Copilot-API" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "sums001--Windows-Copilot-API"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","自動化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sums001--Windows-Copilot-API" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sums001--Windows-Copilot-API" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sums001" AND file.name != "sums001--Windows-Copilot-API"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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
> const me = dv.page("Repos/sums001--Windows-Copilot-API");
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

> **2026-06-24** — 首次收錄
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

- [[2026-06-24|2026-06-24]] — 首次收錄，534 stars
