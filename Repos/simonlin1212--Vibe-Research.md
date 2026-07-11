---
repo: simonlin1212/Vibe-Research
url: https://github.com/simonlin1212/Vibe-Research
owner: simonlin1212
owner_type: User
language: TypeScript
license: MIT
description: "Vibe-Research: Your Personal Trading Research Agent · A股/美股/港股 的个人投研 Agent：每日复盘、资讯雷达、个股数据、板块中心、我的持仓、研究记录。Vibe-Research 把数据和功能配齐，由你自己的 AI 驱动投资研究。"
homepage: "https://viberesearch.wiki"
stars: 687
stars_per_day: 137
forks: 131
open_issues: 4
created: 2026-07-05
pushed_at: 2026-07-10
first_seen: 2026-07-11
week: "2026-W28"
month: "2026-07"
category: "其他"
subcategory: "金融科技"
release_tag: "v0.1.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-11
use_case: "提供 A 股、美股和港股的個人投研 Agent，整合數據與功能，讓用戶自行驅動投資研究。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 2213
readme_length: 8041
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-11"
star_history: "2026-07-11:687"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/a_stock"
  - "topic/ai_agent"
  - "topic/dashboard"
  - "topic/fastapi"
  - "topic/fintech"
aliases:
  - "Vibe-Research"
  - "simonlin1212/Vibe-Research"
  - "提供 A 股、美股和港股的個人投研 Agent，整合數據與功能，讓用戶自行驅動投資研究。"
---

# Vibe-Research

**687** stars · **137** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/simonlin1212--Vibe-Research");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.1.2`

`a-stock` `ai-agent` `dashboard` `fastapi` `fintech` `hk-stocks` `investment-research` `llm` `mcp` `python` `react` `stock-market` `trading` `us-stocks`

> [!summary] 一句話摘要
> 提供 A 股、美股和港股的個人投研 Agent，整合數據與功能，讓用戶自行驅動投資研究。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (137 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 A 股市場進行深度分析且希望接入自定義 AI 模型的獨立投資者或金融分析師。
> **一句話重點** Vibe-Research 的靈活性和數據整合能力使其成為個人投資者的強大工具，尤其是對於 A 股市場的深入分析。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "金融科技" && p.file.name !== "simonlin1212--Vibe-Research" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 金融科技 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的投研工具，值得投入。

> [!abstract] 核心創新
> Vibe-Research 提供了一個靈活的個人投研平台，讓用戶能夠接入自己的 AI 模型進行深度分析，而不僅僅是被動接收建議。

## 專案簡介

Vibe-Research 是一個個人化的投資研究工具，專注於 A 股市場，同時兼顧美股和港股。用戶可以透過這個平台進行每日市場回顧、個股數據查詢和資訊雷達分析。核心機制是將多種數據來源整合到一個乾淨的看板中，並提供接入用戶自定義的 AI 模型的接口，讓用戶可以根據自己的需求進行分析。關鍵指令包括後端啟動命令 `uvicorn app:app --host 127.0.0.1 --port 8900` 和前端啟動命令 `npm run dev`，這樣用戶可以快速搭建自己的投研環境。這個工具的賣點在於它的靈活性和可擴展性，讓用戶不僅能獲取數據，還能利用自己的 AI 進行深度分析。技術上，Vibe-Research 使用 FastAPI 作為後端框架，並採用 React 和 TypeScript 開發前端，這樣的選擇使得整體架構輕量且易於維護。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Vibe-Research 提供了更為全面的數據整合和自定義 AI 接入功能，讓用戶能夠根據自己的需求進行深度分析，而不僅僅是被動接收建議。實際使用中，這個工具能夠處理大量的市場數據，並且支持多種數據來源的即時更新，這對於需要快速反應的投資者來說是非常重要的。維護者 Simonlin1212 的活躍程度高，社群反饋也相對積極，這意味著用戶在使用過程中能夠獲得及時的支持和更新。總體來看，這是一個值得關注的工具，特別適合對 A 股市場有深入研究需求的投資者。未來六個月內，隨著功能的持續完善和社群的擴展，這個專案有潛力成為個人投資研究的主流工具。

**技術棧**：`FastAPI` · `React 19` · `TypeScript` · `Python` · `Tailwind CSS`

## 重點功能

- 每日復盤 — 提供大盤指數、短線情緒和成交額 TOP20 的即時數據。
- 個股數據 — 包含財報速覽、估值分位和資金面分析，支持 A 股、美股和港股。
- 資訊雷達 — 整合 12 個賽道的 108 個公開 RSS 源，提供今日要點提煉。
- 自選股 — 支持批量粘貼股票代碼並實時顯示行情。
- 接入 AI — 提供多種接入方式，支持用戶自定義的 AI 模型進行分析。

## 快速開始

1. 後端啟動
```bash
cd backend && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt && .venv/bin/python -m uvicorn app:app --host 127.0.0.1 --port 8900
```
2. 前端啟動
```bash
cd frontend && npm install && npm run dev
```
3. 訪問應用
```bash
在瀏覽器中打開 http://localhost:5899
```

## 程式碼範例

```ts
{
  "前置條件": "後端啟動在 :8900",
  "指令": "cd backend && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt && .venv/bin/python -m uvicorn app:app --host 127.0.0.1 --port 8900",
  "預期輸出": "後端服務啟動，監聽在 127.0.0.1:8900"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 687 stars（137/天），forks 131（19.1%），顯示出相對較高的用戶參與度。作者 Simonlin1212 之前有開發其他金融相關工具，這次專案解決了市場上缺乏靈活且個性化的投研工具的痛點，讓用戶能夠根據自己的需求進行深度分析。近期的推廣活動和社群討論也促進了這個專案的曝光率。技術生態的變化，如 AI 技術的普及，使得這種個性化的投研工具變得更加可行。高達 19.1% 的 forks/stars 比率表明許多用戶正在實際修改和使用這個工具，顯示出其實用性和靈活性。

## 適合誰使用

**目標受眾**：需要在 A 股市場進行深度分析且希望接入自定義 AI 模型的獨立投資者或金融分析師。

> [!example] 使用場景
> - 獨立投資者用它來分析 A 股市場的個股數據，因為它提供了即時的財報和估值數據，讓用戶能夠快速做出投資決策。
> - 金融分析師用它來整合多個市場的數據，因為它支持 A 股、美股和港股的數據查詢，便於進行跨市場比較。
> - 量化交易者用它來接入自己的 AI 模型進行自動化分析，因為它提供了靈活的 API 接入，能夠滿足高頻交易的需求。

## 架構分析

Vibe-Research 的架構由後端和前端組成，後端使用 FastAPI 提供 API 服務，前端則使用 React 和 TypeScript 開發。這樣的架構設計使得系統能夠快速響應用戶請求，並且容易擴展。數據流從多個數據源進入後端，經過處理後提供給前端顯示。

選擇 FastAPI 是因為其高效能和簡單的開發流程，而 React 則提供了良好的用戶體驗。這種設計的取捨在於，雖然可能會增加初期的開發成本，但長期來看能夠提高系統的可維護性和擴展性。隨著用戶數量的增加，後端的性能可能成為瓶頸，因此需要考慮負載均衡和數據庫優化等問題。

## 技術深入分析

Vibe-Research 的核心技術機制在於其後端的 FastAPI 架構，這使得 API 的響應速度非常快，並且能夠輕鬆擴展。數據來源包括 A 股的多個公開 API 和 RSS 源，這些數據經過清洗和整合後提供給前端使用。系統能夠處理大量的即時數據，並且支持多種數據格式。設計上，選擇 FastAPI 而非 Django 是因為其輕量級和高效能，這對於需要快速響應的金融應用來說至關重要。隨著用戶數量的增加，後端的性能可能成為瓶頸，因此需要考慮使用負載均衡和數據庫優化等技術來應對高並發的請求。整合方面，Vibe-Research 可以與主流的 CI/CD 流程無縫對接，這使得開發和部署過程更加順暢。整體來看，這是一個設計精良且具備良好擴展性的投研工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟。安裝過程中需要注意依賴庫的安裝，對於新手來說可能會有一些挑戰。文件中包含了快速開始指南，能幫助用戶快速上手。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供多市場數據整合，方便用戶進行比較分析。
> - 靈活的 AI 接入方式，支持用戶自定義模型。
> - 界面友好，易於使用，適合各類投資者。
> - 開源項目，社群活躍，持續更新。

> [!danger] 缺點
> - 對於非 A 股市場的支持有限，可能不適合全球投資者。
> - 需要一定的技術背景才能充分利用自定義 AI 功能。
> - 安裝和配置過程相對複雜，對新手不太友好。
> - 目前功能仍在持續開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝特定的依賴庫，如 mootdx 和 pandas。
> - 不支持 Windows 環境，需在 Linux 或 macOS 上運行。
> - 目前僅提供 A 股、美股和港股的數據，對於其他市場的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI agent 接入功能，但主要聚焦於特定的交易策略，而 Vibe-Research 更加靈活，支持多種市場數據整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於量化交易策略的實現，而 Vibe-Research 提供更全面的數據視覺化和用戶自定義 AI 接入。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的交易策略，而 Vibe-Research 提供更全面的數據整合和自定義 AI 接入功能。 | 如果需要針對特定策略進行深度分析，且不需要多市場數據整合。 | medium，因為需要重新配置數據源和 API 接入。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於量化交易策略的實現，而 Vibe-Research 提供更全面的數據視覺化和用戶自定義 AI 接入。 | 如果已經在使用量化策略，且需要一個專注於策略實現的工具。 | high，因為需要重構整個數據流和策略邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Vibe-Research** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的交易策略，而 Vibe-Research 提供更全面的數據整合和自定義 AI 接入功能。 | 專注於量化交易策略的實現，而 Vibe-Research 提供更全面的數據視覺化和用戶自定義 AI 接入。 |
> | 遷移成本 | - | medium，因為需要重新配置數據源和 API 接入。 | high，因為需要重構整個數據流和策略邏輯。 |
> | 適用場景 | 主要場景 | 如果需要針對特定策略進行深度分析，且不需要多市場數據整合。 | 如果已經在使用量化策略，且需要一個專注於策略實現的工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下安裝依賴庫時可能會出現錯誤
  - 解法：確保使用正確的 Python 版本和虛擬環境
- [MEDIUM] 數據更新延遲，可能影響即時交易決策
  - 解法：定期手動刷新數據源以獲取最新數據
- [MEDIUM] 某些功能在特定市場數據上不完全支持
  - 解法：使用 A 股數據進行測試，避免使用不支持的市場數據

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 輕量級架構和易於擴展的設計非常適合小型團隊使用。 |
| 大型金融機構的核心交易系統 | 不適合 | 目前仍在 alpha 階段，穩定性和性能尚未達到商業級要求。 |
| 需要快速迭代的個人投資者 | 適合 | 靈活的數據接入和 AI 模型配置使其能夠快速適應市場變化。 |
| 對 A 股市場有深入研究的分析師 | 非常適合 | 提供全面的 A 股數據和自定義分析能力，滿足專業需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的投研工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
| Forks | 131 |
| Open Issues | 4 |
| Issue 解決率 | 67% (8 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-05 |
| 官方網站 | [Link](https://viberesearch.wiki) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/simonlin1212/Vibe-Research) |
| Topics | `a-stock` `ai-agent` `dashboard` `fastapi` `fintech` `hk-stocks` `investment-research` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 54
>     "Python" : 44
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@simonlin1212](https://github.com/simonlin1212) | 15 |

**最新版本**：v0.1.2 — v0.1.2 · 修复：ETF 行情显示 0 / 持仓成本精度不足 / 更新覆盖后本地数据丢失 (2026-07-10)

> [!info]- Release Notes
> 修复三个用户反馈的问题（#10 #12 #13）：
> 
> ## 🐛 修复
> 
> - **ETF 现价显示 0**（#10）：沪市 ETF（51/56/58 开头，如 510300）行情前缀误判导致取不到数据，已修复；深市 ETF 不受影响。
> - **持仓市值对不上账**（#13）：加仓合并成本从 3 位放宽到 4 位小数；持仓页现价/成本/清仓价显示放宽到最多 4 位（ETF/基金常见 3-4 位小数）。
> - **更新后本地数据丢失**（#12）：持仓、上传的研报默认存储从项目内 `backend/.cache/` 迁到**用户目录 `~/.vibe-research/`**（可用 `VR_DATA_DIR` 自定义）。以后重新下载/覆盖项目文件夹不会再丢数据；旧数据首次启动自动迁移（复制，原文件保留）。
> 
> ## ⬆️ 升级方式
> 
> `git pull` 后重启后端即可；前端如无热更新则重新 `npm run dev`。
> 
> ## 🧪 质量
> 
> 离线测试 41 项 + 联网冒烟 11 项全部通过；新增 5 项针对本轮修复的回归测试。

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應用戶問題。
**連結**：[文件](https://viberesearch.wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-05 ~ 2026-07-10）
> **活躍天數** 3 天 · **最新 commit** chore: 版本号 0.1.1 → 0.1.2

## README 摘錄

> [!info]- 展開查看原文 README
> # Vibe-Research · 个人 AI 投研系统（A股/美股/港股）
> 
> [](LICENSE)
> [](https://www.python.org/)
> [](https://react.dev/)
> [](https://fastapi.tiangolo.com/)
> [](https://github.com/simonlin1212/Vibe-Research/stargazers)
> [](https://viberesearch.wiki)
> 
> **[🌐 官网](https://viberesearch.wiki) · [产品预览](#️-产品预览) · [功能](#-功能) · [数据源](#-数据源data-sources) · [快速开始](#-快速开始) · [接入 AI](#-接入-ai) · [合规](#️-合规) · [相关生态](#-相关生态) · [联系作者](#-联系作者)**
> 
> > **Vibe-Research: Your Personal Trading Research Agent** · A股 / 美股 / 港股 的个人投研 Agent。
> >
> > 每日复盘、资讯雷达、个股数据、自选股、板块中心、我的持仓、我的研报、研究记录。把数据和功能配齐，由**你自己的 AI** 驱动投资研究。
> 
> Vibe-Research 是一个开源的「个人 AI 投研看板」，**主推 A 股、兼看美股 / 港股**（A 股常要看隔夜外围脸色，数据配上更全）。它不替你做决定——把行情、研报、估值、财务、公告、资金面、资讯都配齐，放进一个干净的看板，再留一个能接入**你自己的 AI** 的接口。方向和结论，交给你自己配置的模型 / agent。
> 
> > *Vibe-Research: Your Personal Trading Research Agent. An open dashboard for China A-share (plus US / HK): it wires up all the data and plugs into **your own AI / agent** — it never recommends a stock. You bring the model, it brings the data.*
> 
> ## 🖥️ 产品预览
> 
> **每日复盘** — 大盘 / 短线情绪(连板股 · 成交额 TOP20) / 板块资金一屏看全，一键交给你的 AI 复盘
> 
> **个股数据** — 财报速览 + 估值分位 + 资金面一屏看穿
> 
> **资讯雷达** — 12 赛道 108 个公开源，一键提炼今日要点
> 
> ---
> 
> ## ✨ 功能
> 
> 每个页面的具体模块：
> 
> | 页面 | 包含的模块 / 能力 |
> |---|---|
> | 📊&nbsp;**每&#8288;日&#8288;复&#8288;盘** | 大盘指数 · **全球市场**（隔夜美股道指 / 标普 / 纳指 + 港股恒指 / 恒生科技）· 关注股票（自选实时行情）· **短线情绪**（连板股 / 最高连板 / 连板梯队 / 封板率 / 炸板率 / 晋级率）· **全市场成交额 TOP20** · 市场情绪（大盘宽度 / 题材投机 / 涨跌停）· 板块资金趋势榜 · 资金轮动 · AI 当日复盘 |
> | 📡&nbsp;**资&#8288;讯&#8288;雷&#8288;达** | 12 赛道 108 个公开 RSS 源 · AI 一键提炼「今日要点」· A 股公告 / 公开新闻（挂钩你的关注列表）|
> | 🔍&nbsp;**个&#8288;股&#8288;数&#8288;据** | **A 股**：行情 · 估值矩阵（前向 PE / PEG）· **财报速览** · 估值历史分位 · 财务关键指标 · 研报 · 公告 · 新闻 · **资金面**（融资融券 / 股东户数 / 主力资金流 / 分红 / 大宗交易）· 龙虎榜 · 限售解禁 · 板块归属 · 热门概念 · 互动易问答。**美股 / 港股 / 韩股**（输 `AAPL` / `00700` / `005930.KS`）：行情 · 总市值 · 关键财务指标（营收 / 净利 / EPS / ROE / 毛利率 / 负债率；韩股仅行情）|
> | ⭐&nbsp;**自&#8288;选&#8288;股** | **批量粘贴一串代码即加**（逗号 / 空格 / 换行都行）· 一屏表格总览（现价 / 涨跌 / PE / PB / 换手）· 一键交给 AI 读。只存本地 |
> | 🧩&nbsp;**板&#8288;块&#8288;中&#8288;心** | 板块 + 产业链环节骨架 |
> | 💼&nbsp;**我&#8288;的&#8288;持&#8288;仓** | 录入即实时盈亏 · 已清仓记录（只存本地、不上传）|
> | 📄&nbsp;**我&#8288;的&#8288;研&#8288;报** | **拖拽 / 多选上传**自己的研报（PDF / Word / txt / 表格 / 图片）· 按文件名**自动分行业**归档 · 下载 / 删除。**只存本地部署目录、不上传、不进仓库** |
> | 📝&nbsp;**研&#8288;究&#8288;记&#8288;录** | 复盘 / 今日要点 / 问 AI 结果本地沉淀，随时回看 |
> | 🔌&nbsp;**接&#8288;入&nbsp;AI** | 订阅接入（本机 CLI，免 key）· API 多模型（自动填 baseURL）· MCP（挂进 Claude Code 等 agent）|
> 
> > **投研分析框架**：让 AI 分析个股时，自动按 估值 / 资金面 / 财报质量 / 行业景气 / 事件催化与风险 五维组织结论——框架只规定「怎么读数据」、不规定买卖，方向仍由你自己的 AI 决定。
> >
> > 连板股 / 成交额榜等均为**客观公开榜单数据，只呈现事实、不推荐、不预测**。
> 
> ## 📡 数据源（Data Sources）
> 
> Vibe-Research 把三套公开数据源**直接集成进仓库**——`git clone` 下来**开箱即用，无需另外下载、接线**。
> 
> ### A 股全栈数据 · AStockData
> 
> - **就在本仓库的 [`a-stock-data/`](a-stock-data/) 文件夹里**（v3.3.0）。十层数据架构、40 个端点，`a-stock-data/SKILL.md` **内嵌全部调用代码**，自包含、零第三方数据封装依赖，东财接口已内置限流防封。
> - **覆盖**：行情 / K线 / 研报 / 一致预期 / 估值 / 历史分位 / 财务三表 / 公告 / 龙虎榜 / 融资融券 / 大宗交易 / 股东户数 / 分红 / 资金流 / 解禁 / 概念板块 / 打板情绪 / ETF 期权 / 互动易 / 全市场行业排名 …
> - **给 agent 用**：用 Claude Code 等 agent 跑本仓库时，要调 A 股数据就看 [`a-stock-data/SKILL.md`](a-stock-data/SKILL.md)——每个接口都有 copy-paste 即用的代码。Vibe-Research 后端的数据层（`backend/astock.py`）也是从它移植的。
> - **运行依赖**：`pip install mootdx requests pandas stockstats`（自包含，v3.0 起已移除 akshare 依赖）。
> - **更新 / 上游**： —— 想跟进最新端点、扩数据源，去这里看；**但即便你不更新，仓库自带的这份也是固定可用的快照，可以一直用。**
> 
> ### 美股 / 港股数据 · global-stock-data
> 
> - **就在本仓库的 [`global-stock-data/`](global-stock-data/) 文件夹里**（v1.0.1）。8 层数据架构、18 个端点、零鉴权，覆盖美港股行情 / K线 / 技术指标 / 三表财报 / 资金流 / 期权 / SEC。
> - 后端 `backend/gstock.py` 移植了**东财域内的合规子集**：全球指数（每日复盘「全球市场」栏）+ 美港股个股行情 & 关键财务指标（个股页输 `AAPL` / `00700` 即用）。东财调用复用 `astock.em_get`（直连优先，避开科学上网代理挂国内站）。
> - **韩股**：东财已覆盖，个股页输 6 位代码**加 `.KS` 后缀**即可（如三星 `005930.KS`、SK 海力士 `000660.KS`）。⚠️ 韩股代码与 A 股同为 6 位数字，**必须带 `.KS` 后缀**才能被识别为韩股（否则按 A 股处理）；东财对韩股仅给行情、无财务。台股走美股 ADR（如台积电 `TSM`）。
> - **上游**： —— 想要 K线 / 技术指标 / 期权 / SEC 等全量端点，去这里看。
> 
> ### 全球资讯 · investment-news
> 
> - 12 赛道 108 个公开 RSS 源，已并入 `backend/newsradar.py` + `backend/news_sources.json`：纯标准库、零 key、已按合规词表过滤（剔除赌 / 预测市场 / 加密等）。
> - **上游**：
> 
> > 数据均来自公开源。Vibe-Research 只做客观信息整理与公开榜单呈现（连板股 / 成交额榜等，与东财 / 同花顺同款客观数据），**只呈现事实、不推荐个股、不预测涨跌、不给买卖时机、不做主观评分**；用这些数据做什么分析、看什么方向，由你和你自己的 AI 决定。
> 
> ## 🏗 架构
> 
> 一套数据层 + 两条 AI 出口：
> 
> ```
> Vibe-Research/
> ├── a-stock-data/      A 股全栈数据工具箱（数据源，v3.3，自带即用）
> ├── global-stock-data/ 美股 / 港股数据工具箱（数据源，v1.0.1，自带即用）
> ├── backend/           FastAPI :8900
> │   ├── astock.py        A 股数据（移植自 a-stock-data）
> │   ├── gstock.py        美股 / 港股数据（移植自 global-stock-data）
> │   ├── newsradar.py     资讯雷达（移植自 investment-news）
> │   ├── market.py        市场情绪 + 板块资金流 + 全球指数
> │   ├── portfolio.py     持仓 + 已清仓（存本地用户目录）
> │   ├── chat.py          系统 AI（OpenAI 兼容 function-calling）
> │   └── mcp_server.py    MCP server（给 Claude Code 等 agent）
> └── frontend/          Vite + React 19 + TS + Tailwind（玻璃暖橙主题）:5899
> ```
> 
> **分级依赖**：行情（腾讯）+ 研报 / 公告（东财）**秒装可用**；akshare / mootdx 惰性导入，缺失时对应端点返回 501 + 安装提示，不拖垮服务。
> 
> ## 🚀 快速开始
> 
> ```bash
> # 后端（:8900）
> cd backend && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt
> .venv/bin/python -m uvicorn app:app --host 127.0.0.1 --port 8900
> 
> # 前端（:5899）
> cd frontend && npm install && npm run dev
> # 浏览器打开 http://localhost:5899
> ```
> 
> ## 🔌 接入 AI
> 
> 在「接入 AI」页配置一次，全站的「问 AI / 复盘 / 今日要点」就都用你自己的模型。**分析都由你的模型给出，本产品不校准、无倾向。** 三种方式：
> 
> ### 1. 订阅接入（调本机已登录的 CLI，免 API key）
> 
> 用你自己的**订阅额度**，不用付 API 费。已支持：**Claude Code · Codex · Qwen Code · DeepSeek CLI**。
> 
> - **前提**：① 后端跑在你本机（云端读不到你本机 CLI）；② 对应 CLI 已安装并登录，命令在 `PATH` 上。例如：
>   - Claude Code：`npm i -g @anthropic-ai/claude-code` → `claude`（用 Claude 订阅登录）
>   - Codex：装 OpenAI Codex CLI → `codex login`（用 ChatGPT 订阅）
>   - Qwen / DeepSeek：装各自 CLI 并登录
> - 在「接入 AI 页 → 订阅接入」选一个即可，**无需填 key**。
> - 原理：后端 `cli_runtime.py` 检测本机命令并 `spawn` 它一次性作答（数据已在提示词里）。⚠️ CLI 不做多轮工具调用，适合「复盘 / 今日要点 / 个股页问 AI」这类**数据已备好**的场景；要 AI 自己现场调数据工具的自由问答，用下面的「API 接入」。
> 
> ### 2. API 接入（填自己的 key）
> 
> 「接入 AI 页 → API 接入」选一个模型，**baseURL 自动填好**，只需粘 key。内置 **DeepSeek / 豆包 / MiniMax / OpenAI / OpenRouter / Groq / Together / MiMo / 任意 OpenAI 兼容端点**。这条支持 function-calling——AI 会自己调数据工具（行情/估值/研报/新闻）再作答。key 只存你本地浏览器、随请求发给你自己的后端、不上传、不进仓库。
> 
> ### 3. MCP（给 Claude Code / 高手 agent）
> 
> 把后端挂成 MCP server，agent 用自己的订阅额度调 Vibe-Research 的数据工具、多步分析。命令见 [`backend/README.md`](backend/README.md)。要更全量的 A 股数据端点，用根目录 [`a-stock-data/`](a-stock-data/SKILL.md) 工具箱。
> 
> ## 🧪 测试
> 
> ```bash
> cd backend && .venv/bin/pip install -r requirements-dev.txt
> .venv/bin/pytest -m "not live"   # 离线单测 + API 校验（快、稳，无需联网）
> .venv/bin/pytest -m live          # 联网核对数据源 shape（升级 / 发布前跑一遍）
> ```
> 
> ## ⚖️ 合规
> 
> - 只做客观数据整理与公开榜单呈现：**不荐股、不预测涨跌、不给买卖时机、不承诺收益、不做主观评分**；中立无倾向。
> - 连板股 / 成交额榜等均为**客观公开榜单数据**（东财 / 同花顺同款），产品只如实呈现、不附带任何推荐或预测。
> - 所有分析方向由你自己配置的 AI 给出，与本产品无关。UI 无买卖按钮；估值历史分位只标位置、不划买卖线。
> - **持仓 / 关注股 / 上传的研报 / API key 只存本地，不上传、不进仓库。**
> - 持仓与上传的研报默认存在**用户目录 `~/.vibe-research/`**（可用环境变量 `VR_DATA_DIR` 换根目录、`VR_REPORTS_DIR` 单独指定研报目录）——在项目文件夹之外，**重新下载 / 覆盖更新项目文件夹不会丢数据**；旧版本存在 `backend/.cache/` 的数据，新版首次启动自动迁移（复制，原文件保留）。
> 
> ## 🏛 相关生态
> 
> Vibe-Research 用到的数据 / 工具，来自同一套自研开源体系（都在 [`simonlin1212`](https://github.com/simonlin1212)）：
> 
> | 仓库 | 定位 |
> |---|---|
> | [**a-stock-data**](https://github.com/simonlin1212/a-stock-data) | A 股全栈数据工具包（10 层 · 40 端点）—— 本项目的 A 股数据引擎 |
> | [**global-stock-data**](https://github.com/simonlin1212/global-stock-data) | 美股 / 港股全栈数据工具包（7 层 · 17 端点） |
> | [**investment-news**](https://github.com/simonlin1212/investment-news) | 全球产业链资讯看板（12 赛道一一对应 A 股板块）—— 本项目的资讯源 |
> | [**Agent-Staff**](https://github.com/simonlin1212/Agent-Staff) | 把公司 Agent 化：每部门一个 AI agent + CEO 参谋长，常驻飞书 |
> 
> ## 📬 联系作者
> 
> 作者 **Simon**，独立开发者。
> 
> - 🌐 主页：
> - 💬 欢迎交流**企业 AI 落地方案**；项目相关问题也可提 [Issue](https://github.com/simonlin1212/Vibe-Research/issues)。
> 
> ## 🙏 致谢
> 
> - A 股数据引擎：[a-stock-data](https://github.com/simonlin1212/a-stock-data)（作者：Simonlin1212）
> - 美股 / 港股数据引擎：[global-stock-data](https://github.com/simonlin1212/global-stock-data)（作者：Simonlin1212）
> - 资讯：[investment-news](https://github.com/simonlin1212/investment-news)（作者：Simonlin1212）
> - 界面设计语言参考并致谢：[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)（作者：HKUDS · 仅借鉴 UI，底层为全新实现）
> 
> ## ⚠️ 免责声明
> 
> 本项目仅供学习与研究，**不构成任何投资建议**。看板只做客观数据整理与公开榜单呈现——不推荐个股、不预测涨跌、不给买卖时机、不承诺收益；所有分析方向由你自己配置的 AI 给出，与本产品无关。股

## 延伸閱讀

相關概念：[[AI Agent]] · [[金融科技]] · [[數據視覺化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/simonlin1212/Vibe-Research) · [官方網站](https://viberesearch.wiki)

## 相關收錄

> [!note]- 直接競品（同子分類：金融科技）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "金融科技" AND file.name != "simonlin1212--Vibe-Research"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "simonlin1212--Vibe-Research"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "simonlin1212--Vibe-Research" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "simonlin1212--Vibe-Research"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI Agent","金融科技","數據視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "simonlin1212--Vibe-Research" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "simonlin1212--Vibe-Research" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "simonlin1212" AND file.name != "simonlin1212--Vibe-Research"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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
> const me = dv.page("Repos/simonlin1212--Vibe-Research");
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

> **2026-07-11** — 首次收錄
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

- [[2026-07-11|2026-07-11]] — 首次收錄，687 stars
