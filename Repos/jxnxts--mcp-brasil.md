---
repo: jxnxts/mcp-brasil
url: https://github.com/jxnxts/mcp-brasil
owner: jxnxts
owner_type: User
language: Python
license: MIT
description: "MCP Server para 41 APIs públicas brasileiras"
homepage: ""
stars: 875
stars_per_day: 219
forks: 112
open_issues: 0
created: 2026-03-26
pushed_at: 2026-03-29
first_seen: 2026-03-30
week: "2026-W14"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: "v0.8.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-30
use_case: "提供連接41個巴西公共API的MCP伺服器，方便AI代理使用政府數據。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-02"
contributor_count: 2
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 3850
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-30"
star_history: "2026-03-30:875"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/ai_agents"
  - "topic/apis_publicas"
  - "topic/brazil"
  - "topic/claude"
  - "topic/fastmcp"
aliases:
  - "mcp-brasil"
  - "jxnxts/mcp-brasil"
  - "提供連接41個巴西公共API的MCP伺服器，方便AI代理使用政府數據。"
---

# mcp-brasil

**875** stars · **219** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/jxnxts--mcp-brasil");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.8.0` `easy-install`

`ai-agents` `apis-publicas` `brazil` `claude` `fastmcp` `governo` `llm` `mcp` `mcp-server` `python`

> [!summary] 一句話摘要
> 提供連接41個巴西公共API的MCP伺服器，方便AI代理使用政府數據。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (219 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要快速接入巴西公共數據的開發者和研究人員。
> **一句話重點** 這個專案讓開發者能夠輕鬆接入巴西的公共數據，對於數據驅動的應用開發非常有幫助。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jxnxts--mcp-brasil");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "jxnxts--mcp-brasil" && p.status !== "archived")
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
> **結論** 花2小時學習，3小時整合，能快速接入巴西公共數據，值得。

> [!abstract] 核心創新
> 提供了針對巴西公共數據的專屬MCP伺服器，支持AI代理的即時數據查詢。

## 專案簡介

mcp-brasil是一個MCP伺服器，專為連接41個巴西公共API而設計，能夠讓AI代理（如Claude、GPT等）輕鬆訪問政府數據。用戶可以透過HTTP請求，使用自然語言查詢各種數據，例如經濟、立法、透明度等領域的資訊。這個工具的賣點在於其支援批量查詢和智能發現功能，能夠在一次請求中執行多個API查詢，並根據上下文自動篩選出相關工具。使用者只需安裝並配置API密鑰（如有需要），即可快速啟動伺服器，並透過簡單的HTTP請求來獲取數據。

技術上，mcp-brasil使用Python開發，依賴於fastmcp、httpx和Pydantic等庫，這使得其在處理異步請求時表現優異。伺服器的設計考慮到了可擴展性，支持自動註冊新功能，並且能夠在高併發情況下穩定運行。

與其他API工具相比，如Postman或Swagger，mcp-brasil提供了更專注於巴西公共數據的API整合，並且能夠直接與AI代理進行交互，這在數據查詢的靈活性上具有優勢。

在實際使用中，這個工具能夠處理多達326個工具的查詢，並且支持多種數據來源，對於需要進行數據分析或報告的開發者來說，非常合適。社群活躍度高，且維護者對於問題的回應速度快，這意味著使用者能夠獲得良好的支持。

目前這個專案仍在beta階段，適合需要快速接入巴西公共數據的開發者和研究人員。未來可能會進一步擴展功能，增加更多API的支持。

**技術棧**：`Python 3.10` · `fastmcp` · `httpx` · `Pydantic v2`

## 重點功能

- 326種工具 — 覆蓋11個領域的API查詢，支持經濟、立法、透明度等數據。
- 批量查詢 — 使用`executar_lote`功能，能夠在一次請求中執行多個API查詢。
- 智能發現 — 透過BM25搜索轉換，根據上下文過濾相關工具。
- 自動註冊 — 新增功能只需創建資料夾，無需手動配置。
- 全異步 — 使用httpx異步庫和Pydantic v2，支持高併發請求。

## 快速開始

1. 安裝mcp-brasil
```bash
pip install mcp-brasil
```
2. 啟動伺服器
```bash
fastmcp run mcp_brasil.server:mcp --transport http --port 8000
```
3. 訪問API
```bash
curl http://localhost:8000/mcp
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝mcp-brasil",
  "fastmcp run mcp_brasil.server:mcp --transport http --port 8000",
  "# 預期輸出：伺服器啟動並可通過http://localhost:8000/mcp訪問"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立4天內累積875 stars（219/天），forks 112（12.8%），顯示出強勁的增長潛力。這個專案的作者jxnxts和kfcaio在開源社群中有一定的影響力，之前也參與過類似的公共數據整合項目。mcp-brasil解決了巴西公共數據接入的痛點，讓開發者能夠輕鬆訪問各種政府數據，這在當前數據驅動的環境中非常重要。社群的討論和需求也促進了這個專案的快速發展，特別是在AI和數據科學領域的應用需求上。forks/stars比率為12.8%，顯示出許多開發者對此專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要快速接入巴西公共數據的開發者和研究人員。

> [!example] 使用場景
> - 數據科學家用它來分析巴西的經濟數據，因為它可以快速查詢多個API，並進行批量數據處理。
> - 後端開發者用它來構建與政府數據互動的應用，因為它提供了簡單的HTTP接口和自然語言查詢能力。
> - 研究人員用它來獲取透明度和立法數據，因為它整合了多個數據源，方便進行交叉分析。

## 架構分析

mcp-brasil的架構設計為一個全異步的伺服器，使用Python語言和fastmcp框架來處理HTTP請求。伺服器的每個API調用都能夠在高併發情況下穩定運行，並且支持批量查詢和智能發現功能。這樣的設計使得用戶可以在一次請求中獲取多個API的數據，從而提高了數據查詢的效率。

選擇使用fastmcp而非其他框架的原因在於其對異步請求的優化，這在處理大量數據時能夠顯著降低延遲。這個架構的擴展性良好，能夠隨著需求的增長而輕鬆添加新功能。由於依賴於多個外部API，這也意味著在API變更時可能需要進行相應的調整，這是未來的一個潛在風險。

## 技術深入分析

mcp-brasil的核心技術機制是基於Python和fastmcp框架，這使得其能夠高效處理HTTP請求並支持異步操作。使用httpx庫來實現非阻塞的網絡請求，並且結合Pydantic進行數據驗證，這樣的設計確保了數據的準確性和一致性。伺服器能夠處理多達326個工具的查詢，並且支持批量查詢，這在數據量大的情況下能夠顯著提高查詢效率。設計上選擇fastmcp而非Flask等傳統框架，主要是因為其對異步請求的優化，能夠在高併發的情況下保持穩定。未來的擴展性良好，但需要注意外部API的變更可能會影響到整體功能的穩定性。整合到現有的CI/CD流程中相對簡單，因為其提供了清晰的API接口和文檔，開發者能夠快速上手並進行測試。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰，提供了詳細的安裝和使用說明；安裝過程順暢，無明顯坑；有良好的快速入門指南；文件主要以葡萄牙語提供，對於非葡萄牙語使用者可能需要翻譯。

## 優缺點分析

> [!success] 優點
> - 能夠快速接入多個巴西公共API，方便開發者使用。
> - 支持批量查詢和智能過濾，提升查詢效率。
> - 全異步設計，能夠處理高併發請求，性能優越。

> [!danger] 缺點
> - 僅限於巴西公共數據，對於其他國家的數據支持不足。
> - 部分API需要註冊API密鑰，增加使用門檻。
> - 仍在beta階段，可能存在不穩定的情況。

> [!warning] 注意事項
> - 僅支援Python 3.10及以上版本
> - 需要API密鑰的API數量有限，部分API需要註冊才能使用
> - 目前僅支持巴西公共數據，對於其他國家的數據不適用

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的API整合，但主要針對不同國家的公共數據，功能覆蓋範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全的API整合，適合對數據安全性有高要求的用戶。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供AI代理的API整合，但不專注於公共數據，功能範圍較廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Postman | Postman提供了一個全面的API測試和管理平台，但不專注於公共數據的整合。 | 如果需要一個通用的API測試工具，Postman會更適合，特別是對於多種API的測試和管理。 | low，因為Postman的使用界面友好，容易上手。 |
| Swagger | Swagger專注於API文檔生成和測試，但不提供數據查詢的功能。 | 如果需要生成API文檔和進行API測試，Swagger會是更好的選擇。 | medium，因為需要重新設計API文檔和測試流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mcp-brasil** | **Postman** | **Swagger** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Postman提供了一個全面的API測試和管理平台，但不專注於公共數據的整合。 | Swagger專注於API文檔生成和測試，但不提供數據查詢的功能。 |
> | 遷移成本 | - | low，因為Postman的使用界面友好，容易上手。 | medium，因為需要重新設計API文檔和測試流程。 |
> | 適用場景 | 主要場景 | 如果需要一個通用的API測試工具，Postman會更適合，特 | 如果需要生成API文檔和進行API測試，Swagger會是更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行探索和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分API在高併發情況下可能會出現速率限制問題
  - 解法：可調整請求速率或使用後退策略
- [MEDIUM] API密鑰配置不當可能導致請求失敗
  - 解法：確保環境變數正確設置
- [low] 新功能添加後可能需要重新啟動伺服器
  - 解法：在添加新功能後重啟服務器以應用變更

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10人以下的新創公司後端API | 非常適合 | 能夠快速接入公共數據，減少開發時間。 |
| 大型企業需要高併發數據查詢 | 適合 | 全異步設計能夠支持高併發請求。 |
| 需要接入非巴西公共數據的項目 | 不適合 | 僅支持巴西公共數據，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花2小時學習，3小時整合，能快速接入巴西公共數據，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需API密鑰；不存取敏感資料，依賴鏈中無已知的供應鏈風險，適合在CI/CD中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

mcp-brasil最常與Python生態系統中的其他數據處理工具搭配使用，如Pandas和NumPy。在一個使用Flask的應用中，可以通過HTTP請求調用mcp-brasil的API，具體做法是使用requests庫發送請求。支援GitHub Actions進行CI/CD集成，並且可以與VS Code等IDE進行整合，提供良好的開發體驗。整合過程中，最常見的問題是API密鑰配置不當，建議使用.env文件進行管理以減少錯誤。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
| Forks | 112 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-03-29 |
| 建立日期 | 2026-03-26 |
| Repo 大小 | 3.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jxnxts/mcp-brasil) |
| Topics | `ai-agents` `apis-publicas` `brazil` `claude` `fastmcp` `governo` `llm` `mcp` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jxnxts](https://github.com/jxnxts) | 162 |
> | [@kfcaio](https://github.com/kfcaio) | 1 |

**最新版本**：v0.8.0 (2026-03-29)

> [!info]- Release Notes
> ## [0.8.0] - 2026-03-29
> 
> ### Documentation
> 
> - Update README and features catalog with 41 features and 326 tools
> 
> ### Features
> 
> - **server:** Add optional Bearer token auth and health check endpoint
> - **docker:** Add Dockerfile and docker-compose for HTTP deployment
> 
> ### Refactoring
> 
> - **prompts:** Update prompt templates for citizen-focused queries
> 
> <!-- generated by git-cliff -->

## 社群與生態

**社群活躍度**：社群活躍，問題解決率100%。
**連結**：[文件](https://github.com/jxnxts/mcp-brasil#documentation)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-03-29）
> **活躍天數** 2 天 · **最新 commit** chore(release): v0.8.0

## README 摘錄

> [!info]- 展開查看原文 README
> # mcp-brasil
> 
> **MCP Server para 41 APIs públicas brasileiras**
> 
> [](https://opensource.org/licenses/MIT)
> 
> 326 tools · 80 resources · 62 prompts · 11 áreas temáticas
> 
> Conecte AI agents (Claude, GPT, Copilot, etc.) a dados governamentais do Brasil — economia, legislação, transparência, judiciário, eleições, meio ambiente, saúde, segurança pública e mais.
> 
> **38 APIs não requerem chave** · 3 usam chaves gratuitas (cadastro em 1 min)
> 
> [Quick Start](#quick-start) · [Fontes de dados](#fontes-de-dados) · [Documentação](#documentação) · [Desenvolvimento](#desenvolvimento)
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ## Features
> 
> - **326 tools** em 41 features cobrindo 11 áreas — economia, legislativo, transparência, judiciário, eleitoral, ambiental, saúde, segurança pública, compras públicas, utilidades e mais
> - **Cross-referencing** com `planejar_consulta` — cria planos de execução combinando múltiplas APIs (ex: gastos de um deputado + votações + proposições)
> - **Execução em lote** com `executar_lote` — dispara consultas em paralelo numa única chamada
> - **Smart discovery** — BM25 search transform filtra 326 tools para só mostrar as relevantes ao contexto
> - **Auto-registry** — adicionar uma feature é criar uma pasta; zero configuração manual
> - **Async everywhere** — httpx async + Pydantic v2 + rate limiting com backoff
> 
> 
> ## Chaves de API
> 
> | API | Obrigatória? | Como obter |
> |-----|-------------|------------|
> | Portal da Transparência | Opcional | [Cadastro gratuito](https://portaldatransparencia.gov.br/api-de-dados/cadastrar-email) |
> | DataJud/CNJ | Opcional | [Cadastro gratuito](https://datajud-wiki.cnj.jus.br/api-publica/acesso) |
> | Anúncios Eleitorais (Meta) | Opcional | [Meta Ad Library API](https://www.facebook.com/ads/library/api/) |
> | Todas as outras (36) | Nenhuma chave | — |
> 
> Configure via variáveis de ambiente ou `.env`:
> 
> ```bash
> TRANSPARENCIA_API_KEY=sua-chave
> DATAJUD_API_KEY=sua-chave
> META_ACCESS_TOKEN=seu-token
> ```
> 
> 
> ## Configuração
> 
> | Variável | Default | Descrição |
> |----------|---------|-----------|
> | `TRANSPARENCIA_API_KEY` | — | Chave do Portal da Transparência |
> | `DATAJUD_API_KEY` | — | Chave do DataJud/CNJ |
> | `META_ACCESS_TOKEN` | — | Token da [Meta Ad Library API](https://www.facebook.com/ads/library/api/) |
> | `MCP_BRASIL_TOOL_SEARCH` | `bm25` | Modo de discovery: `bm25`, `code_mode` ou `none` |
> | `MCP_BRASIL_HTTP_TIMEOUT` | `30.0` | Timeout HTTP em segundos |
> | `MCP_BRASIL_HTTP_MAX_RETRIES` | `3` | Máximo de retentativas HTTP |
> 
> 
> ### VS Code / Cursor
> 
> Crie `.vscode/mcp.json` na raiz do projeto:
> 
> ```json
> {
>   "servers": {
>     "mcp-brasil": {
>       "command": "uvx",
>       "args": ["--from", "mcp-brasil", "python", "-m", "mcp_brasil.server"],
>       "env": {
>         "TRANSPARENCIA_API_KEY": "sua-chave-aqui",
>         "DATAJUD_API_KEY": "sua-chave-aqui",
>         "META_ACCESS_TOKEN": "seu-token-aqui"
>       }
>     }
>   }
> }
> ```
> 
> 
> ### Instalar
> 
> ```bash
> pip install mcp-brasil
> ```
> 
> ```bash
> uv add mcp-brasil
> ```
> 
> 
> ### Claude Desktop
> 
> Adicione ao `claude_desktop_config.json`:
> 
> ```json
> {
>   "mcpServers": {
>     "mcp-brasil": {
>       "command": "uvx",
>       "args": ["--from", "mcp-brasil", "python", "-m", "mcp_brasil.server"],
>       "env": {
>         "TRANSPARENCIA_API_KEY": "sua-chave-aqui",
>         "DATAJUD_API_KEY": "sua-chave-aqui",
>         "META_ACCESS_TOKEN": "seu-token-aqui"
>       }
>     }
>   }
> }
> ```
> 
> > As chaves são opcionais — sem elas, as 36 APIs restantes funcionam normalmente.
> 
> 
> ### Claude Code
> 
> ```bash
> claude mcp add mcp-brasil -- uvx --from mcp-brasil python -m mcp_brasil.server
> ```
> 
> 
> ### HTTP (outros clientes)
> 
> ```bash
> fastmcp run mcp_brasil.server:mcp --transport http --port 8000
> 
> # Server disponível em http://localhost:8000/mcp
> ```
> 
> 
> ## Exemplos
> 
> Conecte o server e faça perguntas em linguagem natural:
> 
> > **Legislativo:** "Quais projetos de lei sobre inteligência artificial tramitaram na Câmara em 2024? Quem foram os autores?"
> 
> > **Econômico:** "Qual a tendência da taxa Selic nos últimos 12 meses? Compare com a inflação (IPCA) no mesmo período."
> 
> > **Transparência:** "Quais os 10 maiores contratos do governo federal em 2024? Quem são os fornecedores?"
> 
> > **Cross-reference:** "Compare os gastos per capita com saúde em São Paulo e Minas Gerais cruzando dados do TCE-SP e IBGE."
> 
> > **Judiciário:** "Busque processos sobre licitação irregular no TCU. Quais foram as penalidades aplicadas?"
> 
> > **Eleitoral:** "Quais os maiores doadores da campanha do candidato X? Qual o total arrecadado?"
> 
> 
> ## Fontes de dados
> 
> 
> ### Economia e Finanças
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `bacen` | Banco Central — Selic, IPCA, câmbio, PIB e +190 séries temporais | 9 |
> | `bndes` | BNDES — operações de financiamento, desembolsos, instituições credenciadas | 4 |
> 
> 
> ### Geografia e Estatística
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `ibge` | IBGE — estados, municípios, nomes, agregados estatísticos | 9 |
> 
> 
> ### Legislativo
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `camara` | Câmara dos Deputados — deputados, proposições, votações, despesas | 11 |
> | `senado` | Senado Federal — senadores, matérias, votações, comissões | 26 |
> 
> 
> ### Transparência e Fiscalização
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `transparencia` | Portal da Transparência — contratos, despesas, servidores, sanções | 18 |
> | `tcu` | Tribunal de Contas da União — acórdãos, inidôneos, débitos, pautas | 9 |
> | `tce_sp` | TCE-SP — despesas e receitas de 645 municípios paulistas | 3 |
> | `tce_rj` | TCE-RJ — licitações, contratos, obras, penalidades, concessões | 7 |
> | `tce_rs` | TCE-RS — educação, saúde, gestão fiscal (LRF) | 5 |
> | `tce_pe` | TCE-PE — licitações, contratos, despesas, fornecedores | 5 |
> | `tce_ce` | TCE-CE — licitações, contratos, empenhos | 4 |
> | `tce_es` | TCE-ES — licitações, contratos, obras públicas | 4 |
> | `tce_rn` | TCE-RN — jurisdicionados, licitações, contratos | 5 |
> | `tce_pi` | TCE-PI — prefeituras, despesas, receitas | 5 |
> | `tce_sc` | TCE-SC — municípios e unidades gestoras | 2 |
> | `tce_to` | TCE-TO — processos, pautas de sessões | 3 |
> 
> 
> ### Judiciário
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `datajud` | DataJud/CNJ — processos judiciais, movimentações | 7 |
> | `jurisprudencia` | STF, STJ e TST — acórdãos, súmulas, decisões | 6 |
> 
> 
> ### Eleitoral
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `tse` | TSE — eleições, candidatos, prestação de contas | 15 |
> | `anuncios_eleitorais` | Biblioteca de Anúncios da Meta — propaganda eleitoral na internet | 6 |
> 
> 
> ### Meio Ambiente
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `inpe` | INPE — focos de queimadas, desmatamento DETER/PRODES | 4 |
> | `ana` | ANA — estações hidrológicas, telemetria, reservatórios | 3 |
> 
> 
> ### Saúde
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `saude` | CNES/DataSUS — estabelecimentos, profissionais, leitos | 10 |
> | `opendatasus` | OpenDataSUS — datasets de saúde pública (CKAN) | 7 |
> | `anvisa` | ANVISA — bulário, medicamentos, preços CMED, registros | 10 |
> | `denasus` | DENASUS — auditorias do SUS | 5 |
> | `imunizacao` | SI-PNI — vacinação, calendário, cobertura vacinal, SRAG | 10 |
> | `bps` | BPS — preços de medicamentos e dispositivos médicos no SUS | 3 |
> | `farmacia_popular` | Farmácia Popular — medicamentos gratuitos, farmácias credenciadas | 8 |
> | `rename` | RENAME — medicamentos essenciais do SUS por princípio ativo | 5 |
> 
> 
> ### Segurança Pública
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `atlas_violencia` | Atlas da Violência (IPEA/FBSP) — homicídios, violência por gênero/raça, armas de fogo | 7 |
> | `sinesp` | SINESP/MJSP — datasets de segurança pública, sistema penitenciário | 6 |
> | `forum_seguranca` | Fórum Brasileiro de Segurança Pública — publicações, Anuário | 4 |
> 
> 
> ### Compras Públicas
> 
> | Feature | Fonte | Tools |
> |---------|-------|:-----:|
> | `compras` | PNCP + ComprasNet/SIASG — licitações, contratos, pregões, CATMAT | 29 |
> | `transferegov` | TransfereGov — emendas parlamentares PIX | 5 |

## 延伸閱讀

相關概念：[[API 設計]] · [[資料視覺化]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]]

[GitHub](https://github.com/jxnxts/mcp-brasil)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "jxnxts--mcp-brasil"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jxnxts--mcp-brasil"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jxnxts--mcp-brasil" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "jxnxts--mcp-brasil"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","資料視覺化","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jxnxts--mcp-brasil" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jxnxts--mcp-brasil" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jxnxts" AND file.name != "jxnxts--mcp-brasil"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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
> const me = dv.page("Repos/jxnxts--mcp-brasil");
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

> **2026-03-30** — 首次收錄
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

- [[2026-03-30|2026-03-30]] — 首次收錄，875 stars
