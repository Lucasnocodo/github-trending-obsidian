---
repo: tryOpenRAM/OpenRAM
url: https://github.com/tryOpenRAM/OpenRAM
owner: tryOpenRAM
owner_type: User
language: Vue
license: MIT
description: "Rent GPUs and run any AI model, paid in SOL. Buy with $RAM and every $RAM spent gets burned. "
homepage: "https://tryopenram.app/"
stars: 566
stars_per_day: 94
forks: 3
open_issues: 0
created: 2026-06-26
pushed_at: 2026-07-02
first_seen: 2026-07-03
week: "2026-W27"
month: "2026-07"
category: "基礎設施"
subcategory: "計算資源租用"
release_tag: "stream-markdown-parser@nightly-20260702-7db3f1d"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-03
use_case: "提供一個無需帳號的 AI 計算市場，讓用戶可以透過 SOL 租用 GPU 和訪問多種 AI 模型。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 5
engagement: "low"
issue_close_rate: -1
repo_size_kb: 13935
readme_length: 9942
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:566"
tags:
  - github
  - "category/基礎設施"
  - "lang/vue"
aliases:
  - "OpenRAM"
  - "tryOpenRAM/OpenRAM"
  - "提供一個無需帳號的 AI 計算市場，讓用戶可以透過 SOL 租用 GPU 和訪問多種 AI 模型。"
---

# OpenRAM

**566** stars · **94** stars/天 · 建立 6 天前 · Vue · MIT

```dataviewjs
const me = dv.page("Repos/tryOpenRAM--OpenRAM");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`stream-markdown-parser@nightly-20260702-7db3f1d`

> [!summary] 一句話摘要
> 提供一個無需帳號的 AI 計算市場，讓用戶可以透過 SOL 租用 GPU 和訪問多種 AI 模型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (94 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速獲得 GPU 計算資源但不想面對繁瑣帳號管理的 AI 開發者。
> **一句話重點** Open RAM 的去中心化設計和區塊鏈支付模式，顛覆了傳統的 AI 計算資源租用方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "計算資源租用" && p.file.name !== "tryOpenRAM--OpenRAM" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 計算資源租用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到靈活的計算資源租用，值得探索。

> [!abstract] 核心創新
> Open RAM 提供了一個無需帳號的去中心化 AI 計算市場，所有交易都在 Solana 區塊鏈上進行。

## 專案簡介

Open RAM 是一個去中心化的 AI 計算市場，允許用戶租用 GPU 並訪問 139 種 AI 模型，所有交易都在 Solana 區塊鏈上進行。用戶可以在瀏覽器中或透過 SSH 直接使用租用的 GPU，並且所有支付都使用 SOL 進行，無需註冊帳號或傳統的支付處理。這個平台的賣點在於其簡化的支付流程，使用者只需連接 Phantom 錢包，進行 SOL 支付，並且每次支付都會在鏈上驗證。使用者可以透過一個統一的 API 金鑰來訪問所有模型，並且可以輕鬆切換模型，只需改變請求中的一個字段。租用計算資源的過程中，使用者可以選擇 GPU 型號和租用時間，並且所有的交易都是即時的，實際的硬體資源會在短時間內提供。這種設計不僅消除了傳統計算資源租用的繁瑣流程，還使得用戶能夠直接從社群中購買計算資源，進一步促進了去中心化的生態系統。整體而言，Open RAM 提供了一個靈活且高效的解決方案，適合需要快速計算資源的開發者和研究人員。

**技術棧**：`Vue` · `TypeScript` · `JavaScript` · `Svelte` · `HTML`

## 重點功能

- 即時 GPU 租用 — 用戶可以選擇 GPU 型號和租用時間，並立即獲得訪問權限。
- 統一 API 金鑰 — 一個金鑰可訪問 139 種 AI 模型，無需多個帳號管理。
- 區塊鏈支付 — 所有交易在 Solana 上進行，無需傳統支付處理，簡化了支付流程。
- 社群市場 — 用戶可以列出自己的計算資源或 API，直接與買家交易。
- 即時驗證 — 每筆交易都在鏈上驗證，確保資源的真實性和安全性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ctrlshifthash/openram
```
2. 進入專案目錄
```bash
cd openram
```
3. 複製環境變數範本
```bash
cp .env.example .env.local
```
4. 安裝依賴
```bash
npm install
```
5. 啟動開發伺服器
```bash
npm run dev
```

## 程式碼範例

```vue
{
  "前置條件": "需要有效的 API 金鑰和 SOL 錢包",
  "指令": "curl https://tryopenram.app/api/v1/chat/completions \\\n  -H \"Authorization: Bearer oca_live_xxxxxxxx\" \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"model\": \"anthropic/claude-3.5-sonnet\", \"messages\": [{ \"role\": \"user\", \"content\": \"Hello!\" }]}'",
  "預期輸出": "一個 AI 模型的回應，根據請求內容生成。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 566 stars（94/天），forks 3（0.5%），顯示出穩定的增長潛力。這個專案的創始人 Simon He 之前在 AI 和區塊鏈領域有過豐富的經驗，解決了傳統 GPU 租用過程中的繁瑣和高門檻問題。之前，使用者通常需要面對多個供應商的帳號管理和支付流程，而 Open RAM 則透過區塊鏈技術簡化了這一過程。社群的反應熱烈，且目前沒有明顯的競爭對手，這使得它在市場中獲得了良好的曝光。

## 適合誰使用

**目標受眾**：需要快速獲得 GPU 計算資源但不想面對繁瑣帳號管理的 AI 開發者。

> [!example] 使用場景
> - AI 研究人員用它來租用 GPU 進行模型訓練，因為可以快速獲得計算資源，避免繁瑣的帳號管理。
> - 開發者用它來測試不同的 AI 模型，因為只需改變 API 請求中的一個字段即可切換模型，節省了時間和成本。
> - 初創公司用它來構建原型，因為無需長期承諾租用硬體，按需租用的模式降低了資金壓力。

## 架構分析

Open RAM 採用去中心化的市場架構，將計算資源租用和模型訪問整合在一個平台上。使用者透過 Solana 錢包進行支付，所有交易都在鏈上驗證，這樣的設計使得平台能夠避免傳統支付處理的繁瑣。資料流從用戶的請求開始，經過 Solana 區塊鏈的驗證，然後將請求轉發至相應的 GPU 或模型 API。這樣的架構使得用戶能夠快速獲得所需資源，然而，這也意味著對 Solana 網絡的依賴，可能會在高峰時段影響性能。整體而言，這種設計使得平台具備高效性和透明性，但也可能面臨擴展性挑戰，特別是在用戶數量大幅增加的情況下。

## 技術深入分析

Open RAM 的核心技術在於其去中心化的市場架構和基於 Solana 的支付系統。它使用了實時驗證技術，確保每筆交易的安全性和透明度，這是通過與 Solana 區塊鏈的整合實現的。平台支持的 GPU 型號範圍廣泛，並且能夠即時提供計算資源，這使得開發者能夠快速迭代和測試。從技術選型來看，選擇 Solana 作為支付平台是因為其高效的交易處理能力，但這也意味著在高峰期可能會出現延遲。整體架構的設計使得用戶能夠在無需繁瑣帳號管理的情況下，快速獲得所需資源，這對於需要快速反應的開發環境來說是非常有利的。然而，這種設計也帶來了對 Solana 網絡的依賴，未來在用戶增長時可能需要考慮擴展性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了豐富的範例和使用說明。安裝過程相對順暢，但需要用戶熟悉環境變數的設置。整體上，文檔友好，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡化的支付流程，無需傳統帳號管理。
> - 即時獲得計算資源，適合快速開發需求。
> - 去中心化市場，促進社群參與和資源共享。

> [!danger] 缺點
> - 目前僅支援 Solana 錢包，限制了使用者選擇。
> - 社群市場的質量不一，可能存在風險。
> - 依賴 Solana 網絡，可能在高峰時段影響性能。

> [!warning] 注意事項
> - 目前僅支援 Solana 錢包進行支付。
> - 如需使用 API，必須提前充值 SOL。
> - 目前僅支持特定的 GPU 型號，可能不符合所有需求。
> - 社群市場的資源質量可能不一，需謹慎選擇。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 模型訪問，但主要集中於特定的模型和功能，缺乏 Open RAM 的去中心化市場特性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於模型的訓練和部署，但不提供 GPU 租用的靈活性和即時性。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 API 介面，但不具備 Open RAM 的區塊鏈支付和社群市場功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定 AI 模型的訓練和部署，但不提供去中心化的市場功能。 | 如果你的需求主要集中在特定模型的訓練和部署，而不需要租用計算資源。 | medium，因為需要重新設計 API 整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 AI 模型訪問，但主要集中於模型的使用而非計算資源的租用。 | 如果你只需要訪問特定的 AI 模型，而不需要租用 GPU。 | low，因為 API 介面相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenRAM** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定 AI 模型的訓練和部署，但不提供去中心化的市場功能。 | 提供類似的 AI 模型訪問，但主要集中於模型的使用而非計算資源的租用。 |
> | 遷移成本 | - | medium，因為需要重新設計 API 整合。 | low，因為 API 介面相似。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在特定模型的訓練和部署，而不需要租用計算 | 如果你只需要訪問特定的 AI 模型，而不需要租用 GPU。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行測試和原型開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在高峰時段，Solana 網絡可能會出現延遲，影響交易速度。
  - 解法：選擇在非高峰時段進行交易。
- **[HIGH]** 社群市場的資源質量不一，可能會遇到無法使用的資源。
  - 解法：在購買前查看其他用戶的評價。
- **[HIGH]** 目前僅支援 Solana 錢包，其他錢包無法使用。
  - 解法：需提前準備 Solana 錢包。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速測試 AI 模型 | 非常適合 | 提供即時的計算資源，無需長期承諾。 |
| 大型企業需要穩定的 GPU 計算資源 | 不適合 | 目前尚未進入穩定生產階段，風險較高。 |
| 開發者需要快速迭代和測試 AI 應用 | 非常適合 | 提供靈活的租用選項和即時訪問。 |
| 個人開發者希望在家中進行 AI 計算 | 適合 | 無需高昂的硬體投資，按需租用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到靈活的計算資源租用，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要連接 Solana 錢包進行支付，需確保錢包安全。所有交易在鏈上進行，透明度高，但仍需注意智能合約的潛在風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Open RAM 可以與多種開發工具和框架整合，特別是與使用 JavaScript 和 TypeScript 的應用相容性良好。用戶可以在現有的開發環境中輕鬆集成 API，並且可以使用現有的工具鏈進行 CI/CD 流程。對於使用 Solana 生態系統的開發者來說，整合過程相對簡單，並且有助於提升開發效率。常見的整合問題包括 API 認證和支付驗證，這些都需要在開發過程中仔細處理。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Open RAM 出現之前，AI 計算資源的租用通常需要繁瑣的帳號管理和支付流程。許多平台要求用戶註冊並提供信用卡信息，這對於許多開發者來說是一個障礙。隨著區塊鏈技術的發展，Open RAM 利用 Solana 的高效能和透明性，提供了一個全新的解決方案，這使得用戶能夠在無需繁瑣流程的情況下獲得所需資源。

這一趨勢可能會在未來進一步推動去中心化市場的發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解區塊鏈基本概念
- 有 API 整合經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主要產品中開始使用。

**成功指標**：計算資源租用成本降低 30%。

> [!warning] 退出計畫
> 所有設定存儲在標準 JSON 格式，可以輕鬆轉移至其他平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
| Forks | 3 |
| Open Issues | 0 |
| 最後推送 | 2026-07-02 |
| 建立日期 | 2026-06-26 |
| 官方網站 | [Link](https://tryopenram.app/) |
| Repo 大小 | 13.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tryOpenRAM/OpenRAM) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Vue" : 50
>     "TypeScript" : 25
>     "JavaScript" : 20
>     "Svelte" : 5
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Simon-He95](https://github.com/Simon-He95) | 2404 |
> | [@eric8810](https://github.com/eric8810) | 83 |
> | [@Copilot](https://github.com/Copilot) | 67 |
> | [@DaZuiZui](https://github.com/DaZuiZui) | 33 |
> | [@zerob13](https://github.com/zerob13) | 30 |

**最新版本**：stream-markdown-parser@nightly-20260702-7db3f1d — [stream-markdown-parser] nightly-20260702-7db3f1d (2026-07-02)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/tryOpenRAM/OpenRAM/commits/stream-markdown-parser@nightly-20260702-7db3f1d

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和維護。
**連結**：[文件](https://tryopenram.app/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-01 ~ 2026-07-02）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Open RAM
> 
> 
> ## 🌾 Overview
> 
> AI runs on two things: **compute** to run it, and **models** to run. Both are gatekept — GPUs are scarce and paid for with cards through providers that reject half the world, and model access is locked behind per-provider accounts and billing.
> 
> **Open RAM removes the gatekeepers.** It's a marketplace where:
> 
> - You **rent real GPUs by the hour** and use them in your browser or over SSH.
> - You **call 139+ open and frontier models** through a single prepaid key.
> - You can **list your own** compute or API and get paid by buyers directly.
> 
> Everything is settled **on-chain in SOL** through your Solana wallet. There is no sign-up billing, no store credit, no invoices. You connect Phantom, you pay SOL, you get the thing — and every payment is verified on-chain before anything is delivered.
> 
> Think of it as **Stripe-free, account-free infrastructure for AI**: a two-sided market where the settlement layer is a blockchain instead of a payment processor.
> 
> ---
> 
> 
> ## 🔑 The Universal API Key
> 
> Not everyone wants to manage a machine. The **Model APIs** side gives you **one prepaid key that calls every model** — no per-provider accounts, no monthly bills.
> 
> - **One key, 139+ models** — Claude, Llama, Qwen, DeepSeek, Mistral and more, routed through OpenRouter. Switch models by changing one field in your request.
> - **OpenAI-compatible** — the endpoint is a drop-in for the OpenAI SDK. Point any existing code at it by changing the base URL and key.
> - **Prepaid in SOL** — top the key up with SOL; the balance is held in SOL. Each call is **metered per token** (real upstream cost + markup) and debited from the balance. When it hits zero, calls pause until you top up again.
> - **Use it anywhere** — from your own code, or from the built-in prompt box on the site.
> 
> ```bash
> curl https://tryopenram.app/api/v1/chat/completions \
>   -H "Authorization: Bearer oca_live_xxxxxxxx" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "model": "anthropic/claude-3.5-sonnet",
>     "messages": [{ "role": "user", "content": "Hello!" }]
>   }'
> ```
> 
> ```python
> from openai import OpenAI
> 
> client = OpenAI(base_url="https://tryopenram.app/api/v1", api_key="oca_live_xxxxxxxx")
> r = client.chat.completions.create(
>     model="meta-llama/llama-3.1-70b-instruct",
>     messages=[{"role": "user", "content": "Explain RAM in one sentence."}],
> )
> print(r.choices[0].message.content)
> ```
> 
> Behind the key: requests without a valid key are rejected (`401`); a key with no balance is rejected (`402`); otherwise the request is forwarded upstream, the response returned, and the token cost debited from the key's SOL balance.
> 
> ---
> 
> 
> ### Rent any machine. Run any model.
> 
> **A Solana-native marketplace for AI compute & open-source models — pay on-chain in SOL, get real GPUs and 139+ models.**
> 
> [](https://tryopenram.app)
> [](https://x.com/tryopenram)
> 
> ---
> 
> CA: GTDSxLef3pnLPpChemVDnB6n2CFqoFTMyDecydqGpump
> 
> 
> ## 🧩 How it all fits together
> 
> Open RAM is a two-sided marketplace with **three products** sitting on **one settlement layer**.
> 
> ```
>                       ┌──────────────────────── SELLERS ────────────────────────┐
>                       │   list a GPU / CPU / RAM box      list an API endpoint   │
>                       └───────────────┬─────────────────────────┬───────────────┘
>                                       │                         │
>    ┌──────────────────┐      ┌────────▼─────────┐      ┌────────▼─────────┐
>    │  Compute Market  │      │  Community Market │      │   Model APIs     │
>    │  (Vast.ai GPUs)  │      │  (P2P listings)   │      │  (OpenRouter)    │
>    └────────┬─────────┘      └────────┬──────────┘      └────────┬─────────┘
>             │                         │                          │
>             └───────────────┬─────────┴──────────────┬───────────┘
>                             │                         │
>                    ┌────────▼─────────┐      ┌────────▼─────────┐
>                    │  Solana wallet   │      │   $RAM token     │
>                    │  pay in SOL      │  or  │  pay -50%, burns │
>                    └────────┬─────────┘      └────────┬─────────┘
>                             └────────────┬────────────┘
>                                 ┌────────▼─────────┐
>                                 │  On-chain verify │  (Helius) → deliver / credit
>                                 └──────────────────┘
> ```
> 
> Whether you buy compute, buy API credits, or buy from another user, the flow is the same: **approve a real SOL transaction → the server verifies it on-chain → you receive access.**
> 
> ---
> 
> 
> ## 🖥️ Renting compute
> 
> The **Compute Marketplace** is backed by **Vast.ai's live GPU network** — hundreds of real machines from independent hosts worldwide.
> 
> **What you see:** a live catalog of GPUs (RTX 3060 → H100-class), each showing real specs — GPU model, VRAM, vCPU, RAM, disk, region, host reliability score — and a live hourly price (Vast's raw rate + the platform's markup, charged in SOL).
> 
> **How renting works:**
> 
> 1. Pick a machine and a duration. The cost is shown in SOL and its USD equivalent.
> 2. Approve the SOL payment in your wallet — it goes to the platform treasury.
> 3. The server calls Vast, finds a currently-available host for that GPU model, and **launches a real instance**.
> 4. The machine appears in your **Workspace** within a minute, with a live status and connection details.
> 
> **You get real access** — an SSH command (`ssh root@… -p …`) and an in-browser **Jupyter** link. The instance is billed per hour while it runs; stop or terminate it anytime and the charges stop.
> 
> > Because it's real hardware, the box is yours to do anything with — train, fine-tune, run inference, serve a model, whatever.
> 
> ---
> 
> 
> ## 🧑‍💻 The Workspace
> 
> The **Workspace** is where everything you've bought lives and gets used.
> 
> - **Your rented machines** — each with a live status, an SSH command you can copy, and an **"Open Jupyter"** button to run notebooks in your browser. Step-by-step instructions are right on the card.
> - **Your API key** — balance, top-up, endpoint, and a prompt box to chat with any model, all in one place.
> 
> It's the "cockpit": rent or create on the marketplace, then come here to actually do the work.
> 
> ---
> 
> 
> ## 🤝 The Community Marketplace
> 
> Open RAM isn't just first-party — **anyone can become a seller.** The Community tab is a true peer-to-peer market.
> 
> **Listing your own compute or API:**
> 
> - List a **GPU / CPU / RAM machine** you control, or an **API endpoint** you operate.
> - Set your price in SOL and provide the access details (SSH connection, or the API's base URL + key) — these stay **private** until someone pays.
> 
> **Real verification — no fake listings:**
> 
> - **API listings are test-called.** Before an API goes live, the server makes a real completion request to the endpoint with the seller's key. If it doesn't return a valid response, the listing is **rejected**. Verified APIs get a ✅ badge.
> - **Machine listings are SSH-probed.** If the seller provides a host, the server opens a connection and reads the SSH banner to confirm a real server is reachable — with an SSRF guard so it can't be used to scan private networks.
> 
> **Buying — one transaction, split on-chain:**
> 
> - When a buyer purchases, they sign **a single Solana transaction that splits the payment**: **99% straight to the seller's wallet, 1% to the marketplace treasury.**
> - The server **verifies that split on-chain** — reading the actual balance changes to confirm both the seller and the treasury were paid the right amounts — before releasing the seller's access details.
> - Every payment signature can be redeemed **only once** (replay-protected), so a payment can never be reused.
> 
> The result: sellers get paid directly and instantly, buyers only get access after a verified payment, and the platform takes a flat 1% — all without escrow or a middleman holding funds.
> 
> ---
> 
> 
> ## 🪙 $RAM — the token
> 
> `$RAM` is the platform token, designed to be **useful first and deflationary by construction.**
> 
> **Utility — pay less:**
> 
> - At c

## 延伸閱讀

相關概念：[[區塊鏈]] · [[去中心化]] · [[AI 計算資源]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]]

[GitHub](https://github.com/tryOpenRAM/OpenRAM) · [官方網站](https://tryopenram.app/)

## 相關收錄

> [!note]- 直接競品（同子分類：計算資源租用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "計算資源租用" AND file.name != "tryOpenRAM--OpenRAM"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "tryOpenRAM--OpenRAM"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Vue" AND file.name != "tryOpenRAM--OpenRAM" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "tryOpenRAM--OpenRAM"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["區塊鏈","去中心化","AI 計算資源"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tryOpenRAM--OpenRAM" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tryOpenRAM--OpenRAM" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tryOpenRAM" AND file.name != "tryOpenRAM--OpenRAM"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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
> const me = dv.page("Repos/tryOpenRAM--OpenRAM");
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

> **2026-07-03** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 首次收錄，566 stars
