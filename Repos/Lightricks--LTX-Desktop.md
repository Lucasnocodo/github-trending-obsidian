---
repo: Lightricks/LTX-Desktop
url: https://github.com/Lightricks/LTX-Desktop
owner: Lightricks
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "An open-source desktop app for generating videos with LTX models"
homepage: "https://www.ltx.video"
stars: 1021
stars_per_day: 54
forks: 202
open_issues: 49
created: 2026-03-04
pushed_at: 2026-03-16
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "視頻生成"
release_tag: "v1.0.2"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個開源桌面應用程式，用於生成 LTX 模型的視頻。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "medium"
issue_close_rate: 21
repo_size_kb: 42368
readme_length: 2494
bus_factor: 1
last_release_days: 12
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:411,2026-03-11:415,2026-03-11:424,2026-03-13:619,2026-03-14:665,2026-03-15:699,2026-03-16:744,2026-03-17:795,2026-03-18:854,2026-03-19:887,2026-03-20:930,2026-03-21:965,2026-03-22:989,2026-03-23:1004,2026-03-24:1021"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - "topic/generative_ai"
  - "topic/ltx"
  - "topic/ltx_2"
  - "topic/non_linear_editing"
aliases:
  - "LTX-Desktop"
  - "Lightricks/LTX-Desktop"
  - "提供一個開源桌面應用程式，用於生成 LTX 模型的視頻。"
---

# LTX-Desktop

**1.0k** stars · **54** stars/天 · 建立 19 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Lightricks--LTX-Desktop");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.2`

`generative-ai` `ltx` `ltx-2` `non-linear-editing`

> [!summary] 一句話摘要
> 提供一個開源桌面應用程式，用於生成 LTX 模型的視頻。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (54 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在本地生成視頻內容的創作者和開發者，特別是擁有 NVIDIA GPU 的用戶。
> **一句話重點** LTX Desktop 的強大在於其本地生成視頻的能力，這對於需要高效視頻創作的用戶來說是個重要的工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻生成" && p.file.name !== "Lightricks--LTX-Desktop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高效的視頻生成能力，值得考慮。

> [!abstract] 核心創新
> LTX Desktop 提供了一個本地生成視頻的解決方案，支持多種生成模式並具備直觀的用戶界面。

## 專案簡介

LTX Desktop 是一個開源的桌面應用程式，專為生成 LTX 模型的視頻而設計，支持在具備 NVIDIA GPU 的 Windows 和 Linux 平台上進行本地生成，並提供 API 模式以支持不兼容的硬體和 macOS。用戶可以透過簡單的界面進行文本、圖像和音頻轉視頻的生成，並且可以進行視頻編輯。其核心賣點在於能夠利用本地 GPU 加速生成過程，從而大幅提高效率。應用程式的後端使用 FastAPI 和 Python，前端則基於 Electron 和 TypeScript，這樣的選擇使得應用能夠在多平台上運行，並且具備良好的擴展性。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，LTX Desktop 提供了更為直觀的用戶界面和更強的本地處理能力，特別適合需要高效視頻生成的用戶。儘管目前仍處於 beta 階段，但其活躍的開發社群和不斷更新的功能使其在市場上具備競爭力。使用者在使用過程中可能會遇到如 CPU offloading 的需求，這在低 VRAM 環境下尤為重要。對於小型團隊或獨立開發者來說，這是一個值得考慮的工具，尤其是在需要快速生成視頻內容的情境下。

**技術棧**：`Electron` · `FastAPI` · `TypeScript` · `Python 3.12+`

## 重點功能

- 文本轉視頻生成 — 支持將文本內容轉換為視頻，簡化內容創作流程。
- 圖像轉視頻生成 — 允許用戶將靜態圖像轉換為動態視頻，增強視覺效果。
- 音頻轉視頻生成 — 將音頻內容與視頻結合，適合音樂視頻製作。
- 視頻編輯功能 — 提供簡單的視頻編輯界面，支持多種編輯操作。
- API 模式支持 — 對於不支持的硬體和 macOS，用戶可以通過 API 進行視頻生成。

## 快速開始

1. 安裝依賴
```bash
pnpm setup:dev
```
2. 啟動開發模式
```bash
pnpm dev
```
3. 啟動調試模式
```bash
pnpm dev:debug
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 Python 3.12+",
  "指令": "pnpm setup:dev",
  "預期輸出": "安裝所有開發依賴並準備好開發環境。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天就累積 1021 stars（54/天），forks 202（19.8%），這顯示出相當高的用戶參與度。Lightricks 是一個專注於創意工具的公司，這個專案解決了在本地生成高質量視頻的需求，特別是對於擁有高性能 GPU 的用戶。社群對於其功能的需求和反饋促進了快速的迭代和改進，尤其是針對 CPU offloading 和 Linux 支持的需求。技術上，隨著生成式 AI 的普及，這個工具的實用性和需求也在不斷上升。forks/stars 比率接近 20%，顯示出許多用戶正在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在本地生成視頻內容的創作者和開發者，特別是擁有 NVIDIA GPU 的用戶。

> [!example] 使用場景
> - 視頻創作者用它來快速生成高質量的視頻內容，因為它能夠利用本地 GPU 加速生成過程，顯著提高工作效率。
> - 獨立開發者用它來測試 LTX 模型的視頻生成能力，因為該工具支持多種生成模式，並且易於集成到現有工作流中。
> - 教育工作者用它來創建教學視頻，因為其直觀的界面和多種輸入選項使得視頻製作變得簡單快捷。

## 架構分析

LTX Desktop 採用 Electron 作為前端框架，這使得其能夠在多平台上運行，並且能夠直接訪問操作系統的功能。後端使用 FastAPI，這是一個高效的 Python 框架，適合處理 API 請求和數據處理。應用的架構設計使得前端和後端之間的通信通過 IPC 完成，這樣可以保證數據的快速傳遞和處理。選擇這種架構的代價在於需要管理多個技術棧，並且在不同平台上的兼容性可能會帶來挑戰。擴展性方面，隨著用戶需求的增加，未來可能需要進一步優化後端性能以支持更多的並發請求。

## 技術深入分析

LTX Desktop 的核心技術機制在於其能夠利用本地 NVIDIA GPU 進行視頻生成，這使得生成速度大幅提升。後端使用 FastAPI，這是一個輕量級的框架，能夠快速處理 API 請求，並且支持異步操作，這對於處理大量請求非常有效。前端則基於 Electron，這使得應用能夠在 Windows 和 Linux 上運行，並且能夠直接訪問系統資源。選擇這種架構的好處在於能夠快速開發和部署，但也帶來了對於不同平台兼容性的挑戰。從性能上看，應用能夠處理高達 32GB VRAM 的 GPU，這對於視頻生成的需求來說是非常充足的。未來可能需要考慮如何優化對於低 VRAM 環境的支持，以擴大用戶基礎。整體上，這個工具在與主流框架的整合上表現良好，並且能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了必要的範例。安裝過程相對順暢，但對於新手來說可能需要一些時間來理解。整體上，文檔質量良好，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種視頻生成模式，滿足不同用戶需求。
> - 本地生成能力，利用 GPU 加速，提高效率。
> - 開源項目，社群活躍，持續更新和改進。

> [!danger] 缺點
> - 仍處於 beta 階段，可能存在不穩定性。
> - 對於非 NVIDIA 硬體的支持有限，使用場景受限。
> - 安裝和配置過程相對較複雜，對新手不太友好。

> [!warning] 注意事項
> - 僅支持 NVIDIA GPU，對於其他硬體的支持有限。
> - 目前處於 beta 階段，可能會有不穩定的功能和破壞性變更。
> - 對於低於 32GB VRAM 的 GPU，性能可能會受到限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的視頻生成能力，但主要針對資料同步和傳輸，功能範圍較窄。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於視頻處理和編輯，但缺乏 LTX 模型的支持，功能不如 LTX Desktop 多樣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不專注於視頻生成，功能範圍較窄。 | 如果你的需求主要是資料同步而非視頻生成，則可以選擇此工具。 | low，因為功能範圍不同，遷移成本不高。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於視頻處理，但缺乏 LTX 模型的支持，功能不如 LTX Desktop 多樣。 | 如果你需要更專業的視頻處理功能而非生成，則可以考慮此工具。 | medium，因為需要重新適應不同的功能和操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LTX-Desktop** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不專注於視頻生成，功能範圍較窄。 | 專注於視頻處理，但缺乏 LTX 模型的支持，功能不如 LTX Desktop 多樣。 |
> | 遷移成本 | - | low，因為功能範圍不同，遷移成本不高。 | medium，因為需要重新適應不同的功能和操作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非視頻生成，則可以選擇此工具。 | 如果你需要更專業的視頻處理功能而非生成，則可以考慮此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在低於 32GB VRAM 的 GPU 上性能不佳，可能導致生成速度緩慢。
  - 解法：考慮使用 API 模式進行生成。
- [MEDIUM] 安裝過程中可能需要手動配置環境變數。
  - 解法：參考文檔中的安裝指南。
- **[HIGH]** 某些功能在 beta 階段可能不穩定，導致應用崩潰。
  - 解法：定期更新到最新版本以獲取修復。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速生成產品宣傳視頻 | 非常適合 | 本地生成能力能夠提高視頻創作效率，適合小型團隊使用。 |
| 大型企業需要穩定的視頻生成解決方案 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |
| 獨立開發者希望測試 LTX 模型的能力 | 非常適合 | 開源特性使得獨立開發者能夠自由探索和修改。 |
| 教育機構需要創建教學視頻 | 適合 | 簡單的用戶界面和多種生成選項適合教育用途。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的視頻生成能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，且不存取敏感資料，使用過程中不會暴露個人信息。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

LTX Desktop 最常與 Node.js 和 Python 生態系統搭配使用，特別是在開發和測試階段。用戶可以在使用 Next.js 開發的項目中，通過 API 調用 LTX Desktop 生成視頻，具體做法是將生成請求發送到本地的 FastAPI 服務。與 GitHub Actions 等 CI 工具的整合也相對簡單，能夠在自動化流程中使用。整合過程中，最常見的問題是環境配置不當，建議提前檢查依賴項和版本兼容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 LTX Desktop 出現之前，視頻生成主要依賴於雲端服務，這導致了延遲和成本問題。隨著本地計算能力的提升，特別是 NVIDIA GPU 的普及，這個工具的出現使得用戶能夠在本地快速生成視頻，滿足了市場對於高效視頻創作的需求。這個工具代表了生成式 AI 在視頻創作領域的重要趨勢，未來可能會隨著技術的進步而進一步擴展功能和應用場景。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 Python 基本操作
- 有視頻編輯經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在內部工具中進行小範圍導入。第三週：根據反饋調整使用方式。第四週：在主要產品中進行全面使用。

**成功指標**：視頻生成時間減少 30%，用戶滿意度提高。

> [!warning] 退出計畫
> 所有設定和數據均以標準格式保存，可以方便地轉移到其他工具或平台。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
| Forks | 202 |
| Open Issues | 49 |
| Issue 解決率 | 21% (13 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://www.ltx.video) |
| Repo 大小 | 41.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lightricks/LTX-Desktop) |
| Topics | `generative-ai` `ltx` `ltx-2` `non-linear-editing` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `class-variance-authority` `clsx` `electron-updater` `js-yaml` `lucide-react` `react` `react-dom` `react-dropzone` `tailwind-merge` `@resvg/resvg-js` `@types/js-yaml` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 72
>     "Python" : 26
>     "Shell" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ofirgluzman](https://github.com/ofirgluzman) | 31 |
> | [@alexger](https://github.com/alexger) | 21 |
> | [@DStar1](https://github.com/DStar1) | 1 |

**最新版本**：v1.0.2 — LTX Desktop 1.0.2 (2026-03-12)

> [!info]- Release Notes
> ## What's Changed
> * IC Lora support for Depth and Canny
> * Bug fix: Implement folder selection dialog for installation path by @DStar1 in https://github.com/Lightricks/LTX-Desktop/pull/22
> * set outputs dir to be under app data by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/34
> * Set PYTHONNOUSERSITE=1 to isolate bundled Python by @ofirgluzman in https://github.com/Lightricks/LTX-Desktop/pull/38
> * switch backend to listen on free port and require auth by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/35
> * Linux support by @alexger in https://github.com/Lightricks/LTX-Desktop/pull/44
>  
> ## New Contributors
> * @DStar1 made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/22
> * @alexger made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/34
> * @ofirgluzman made their first contribution in https://github.com/Lightricks/LTX-Desktop/pull/38
> 
> **Full Changelog**: https://github.com/Lightricks/LTX-Desktop/compare/v1.0.1...v1.0.2

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Lightricks/LTX-Desktop)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-16）
> **活躍天數** 5 天 · **最新 commit** upgrade npm dependencies

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/Lightricks/LTX-Desktop/issues/16) | Support CPU offloading for text encoder to enable local infe | 14 | 4 |
> | [#36](https://github.com/Lightricks/LTX-Desktop/issues/36) | Add support for LTX-2.3-fp8 | 11 | 3 |
> | [#6](https://github.com/Lightricks/LTX-Desktop/issues/6) | GGUF and PyTorch XPU support ! | 9 | 3 |
> | [#4](https://github.com/Lightricks/LTX-Desktop/issues/4) | Linux support ? | 7 | 2 |
> | [#46](https://github.com/Lightricks/LTX-Desktop/issues/46) | [Feature Request] First and Last Frame option | 5 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # LTX Desktop
> 
> LTX Desktop is an open-source desktop app for generating videos with LTX models — locally on supported Windows/Linux NVIDIA GPUs, with an API mode for unsupported hardware and macOS.
> 
> > **Status: Beta.** Expect breaking changes.
> > Frontend architecture is under active refactor; large UI PRs may be declined for now (see [`CONTRIBUTING.md`](docs/CONTRIBUTING.md)).
> 
>   
> 
>   
> 
>   
> 
> ## Features
> 
> - Text-to-video generation
> - Image-to-video generation
> - Audio-to-video generation
> - Video edit generation (Retake)
> - Video Editor Interface
> - Video Editing Projects
> 
> ## Local vs API mode
> 
> | Platform / hardware | Generation mode | Notes |
> | --- | --- | --- |
> | Windows + CUDA GPU with **≥32GB VRAM** | Local generation | Downloads model weights locally |
> | Windows (no CUDA, |HTTP: localhost:8000| BE["Backend (FastAPI + Python)"]
>   UI -->|IPC via preload: window.electronAPI| EL["Electron main (TS)"]
>   EL --> OS["OS integration (files, dialogs, ffmpeg, process mgmt)"]
>   BE --> GPU["Local models + GPU (when supported)"]
>   BE --> EXT["External APIs (only for API-backed features)"]
>   EL --> DATA["App data folder (settings/models/logs)"]
>   BE --> DATA
> ```
> 
> ## Development (quickstart)
> 
> Prereqs:
> 
> - Node.js
> - `uv` (Python package manager)
> - Python 3.12+
> - Git
> 
> Setup:
> 
> ```bash
> pnpm setup:dev
> ```
> 
> Run:
> 
> ```bash
> pnpm dev
> ```
> 
> Debug:
> 
> ```bash
> pnpm dev:debug
> ```
> 
> `dev:debug` starts Electron with inspector enabled and starts the Python backend with `debugpy`.
> 
> Typecheck:
> 
> ```bash
> pnpm typecheck
> ```
> 
> Backend tests:
> 
> ```bash
> pnpm backend:test
> ```
> 
> Building installers:
> - See [`INSTALLER.md`](docs/INSTALLER.md)
> 
> ## Telemetry
> 
> LTX Desktop collects minimal, anonymous usage analytics (app version, platform, and a random installation ID) to help prioritize development. No personal information or generated content is collected. Analytics is enabled by default and can be disabled in **Settings > General > Anonymous Analytics**. See [`TELEMETRY.md`](docs/TELEMETRY.md) for details.
> 
> ## Docs
> 
> - [`INSTALLER.md`](docs/INSTALLER.md) — building installers
> - [`TELEMETRY.md`](docs/TELEMETRY.md) — telemetry and privacy
> - [`backend/architecture.md`](backend/architecture.md) — backend architecture
> 
> ## Contributing
> 
> See [`CONTRIBUTING.md`](docs/CONTRIBUTING.md).
> 
> ## License
> 
> Apache-2.0 — see [`LICENSE.txt`](LICENSE.txt).
> 
> Third-party notices (including model licenses/terms): [`NOTICES.md`](NOTICES.md).
> 
> Model weights are downloaded separately and may be governed by additional licenses/terms.

## 延伸閱讀

相關概念：[[生成式 AI]] · [[視頻編輯]] · [[本地推論]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/Lightricks/LTX-Desktop) · [官方網站](https://www.ltx.video)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻生成" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Lightricks--LTX-Desktop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["生成式 AI","視頻編輯","本地推論"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Lightricks--LTX-Desktop" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Lightricks--LTX-Desktop" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Lightricks" AND file.name != "Lightricks--LTX-Desktop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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
> const me = dv.page("Repos/Lightricks--LTX-Desktop");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，411 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，385 stars
