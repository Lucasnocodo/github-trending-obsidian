---
repo: Blaizzy/nativ
url: https://github.com/Blaizzy/nativ
owner: Blaizzy
owner_type: User
language: Swift
license: MIT
description: "Local AI, native to your Mac. Chat, serve, monitor, and connect MLX models from one macOS app."
homepage: "https://blaizzy.github.io/nativ/"
stars: 1026
stars_per_day: 114
forks: 59
open_issues: 37
created: 2026-07-20
pushed_at: 2026-07-29
first_seen: 2026-07-22
week: "2026-W30"
month: "2026-07"
category: "AI/ML"
subcategory: "本地推論"
release_tag: "v0.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-22
use_case: "讓你在 Mac 上本地運行 AI 模型的應用，支持聊天、圖像生成和多種工具整合。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-08-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 40
repo_size_kb: 5781
readme_length: 7225
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-22"
star_history: "2026-07-22:647,2026-07-22:647,2026-07-23:768,2026-07-23:768,2026-07-24:822,2026-07-24:822,2026-07-25:863,2026-07-25:863,2026-07-26:886,2026-07-26:886,2026-07-27:925,2026-07-27:925,2026-07-28:968,2026-07-29:1009,2026-07-30:1026"
tags:
  - github
  - "category/ai_ml"
  - "lang/swift"
aliases:
  - "nativ"
  - "Blaizzy/nativ"
  - "讓你在 Mac 上本地運行 AI 模型的應用，支持聊天、圖像生成和多種工具整合。"
---

# nativ

**1.0k** stars · **114** stars/天 · 建立 9 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/Blaizzy--nativ");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.0`

> [!summary] 一句話摘要
> 讓你在 Mac 上本地運行 AI 模型的應用，支持聊天、圖像生成和多種工具整合。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (114 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Mac 上本地運行 AI 模型並希望整合多種開發工具的獨立開發者。
> **一句話重點** Nativ 的本地運行能力和多工具整合讓它在開發者中脫穎而出，特別是在 Apple 硬體上。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blaizzy--nativ");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "本地推論" && p.file.name !== "Blaizzy--nativ" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 本地推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到本地 AI 模型運行的高效解決方案，值得嘗試。

> [!abstract] 核心創新
> Nativ 是一個專為 Apple Silicon 設計的本地 AI 應用，支持多種模型的管理和即時性能監控。

## 專案簡介

Nativ 是一款專為 Apple Silicon 設計的本地 AI 應用，能夠在 macOS 上運行和管理多種 AI 模型。用戶可以通過這個應用進行聊天、生成和編輯圖像，並且能夠連接多種編程工具。Nativ 的核心機制是通過內建的 `mlx-vlm` 伺服器來處理模型請求，並且支持從 Hugging Face 緩存中發現和管理模型。用戶只需選擇模型，便可開始與之互動，並且可以利用 CLI 指令如 `curl http://127.0.0.1:8080/v1/chat/completions` 進行 API 請求，這樣的設計使得用戶能夠快速上手並進行本地推理。這個工具的賣點在於其本地運行的能力，避免了網絡延遲，並且提供了豐富的性能分析功能，讓用戶能夠監控請求量和模型性能。

Nativ 使用 SwiftUI 作為前端框架，並且內建 Python 環境來支持模型的運行，這樣的選擇使得應用界面流暢且易於使用。相較於其他類似工具，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，Nativ 提供了更完整的本地化體驗，並且能夠直接與多種編程工具整合，這使得它在開發者中更具吸引力。Nativ 的設計考量了 Apple 的硬體特性，能夠充分利用統一記憶體，這樣的優化使得它在處理大型模型時表現出色。使用者在使用過程中可能會遇到高 CPU 使用率的問題，這是目前的熱門問題之一，解決這個問題的方式尚未明確。總的來說，Nativ 是一款值得嘗試的工具，特別適合需要在本地運行 AI 模型的開發者和研究者。

**技術棧**：`Swift` · `Python` · `Shell` · `HTML` · `C` · `JavaScript`

## 重點功能

- 本地聊天和視覺 — 支持流式對話、圖像附件和持久聊天歷史。
- 圖像生成和編輯 — 在專用的圖像標籤中生成或編輯圖像，支持從剪貼簿粘貼圖像。
- 模型庫 — 瀏覽和下載兼容的模型，並檢查模型性能和記憶體使用情況。
- 性能分析 — 追蹤請求量、令牌使用、解碼速度和模型性能。
- 系統監控 — 實時檢查 CPU 負載、GPU 使用率和記憶體壓力。
- 本地 API — 提供 OpenAI 兼容的聊天和模型端點。
- 編程工具整合 — 配置和啟動多種編程工具的代理，並設置編輯器。
- 高級推理控制 — 調整採樣、思考預算和結構化輸出等參數。

## 快速開始

1. 下載最新版本
```bash
從 GitHub Releases 下載 DMG，拖動 Nativ 到應用程式中並啟動。
```
2. 選擇模型
```bash
在應用中選擇已安裝的語言模型或下載推薦的模型。
```
3. 開始聊天或檢查分析
```bash
啟動聊天，檢查性能分析或連接支持的編程工具。
```

## 程式碼範例

```swift
{
  "前置條件": "選擇一個模型後，啟動 Nativ 伺服器。",
  "指令": "curl http://127.0.0.1:8080/v1/chat/completions \\ -H 'Content-Type: application/json' \\ -d '{ \"model\": \"your-model-id\", \"messages\": [{\"role\": \"user\", \"content\": \"Why is the sky blue?\"}], \"stream\": false }'",
  "預期輸出": "伺服器將返回模型生成的回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1026 stars（114/天），forks 59（5.8%），這顯示出它在開發者社群中的快速增長。作者 Blaizzy 之前在 AI 和開源領域有多項貢獻，這個專案解決了在本地運行 AI 模型的需求，特別是在 Apple Silicon 環境下，這在過去並沒有好的解決方案。觸發事件可能是社群對於本地 AI 解決方案的需求上升，尤其是在隱私和性能方面的考量。Nativ 的高 forks/stars 比率（5.8%）表明許多人正在積極修改和使用這個專案，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：需要在 Mac 上本地運行 AI 模型並希望整合多種開發工具的獨立開發者。

> [!example] 使用場景
> - 數據科學家用它來本地運行和測試機器學習模型，因為它支持多種模型並能夠直接監控性能。
> - 前端開發者用它來集成 AI 功能到他們的應用中，因為它提供了 OpenAI 兼容的 API 和多種編程工具的整合。
> - 藝術家用它來生成和編輯圖像，因為它支持本地圖像生成並能夠直接在應用中進行編輯。

## 架構分析

Nativ 採用 SwiftUI 作為前端框架，並內建 `mlx-vlm` 伺服器來處理模型請求。這樣的設計使得應用界面流暢且易於使用。資料流方面，Nativ 透過本地 API 與模型進行交互，並且能夠即時監控系統性能。

選擇 SwiftUI 的好處在於能夠快速構建美觀的用戶界面，但可能在某些複雜的 UI 元件上有所限制。整體架構的擴展性良好，但在處理大型模型時，可能會遇到記憶體不足的瓶頸。這樣的設計考量了 Apple 的硬體特性，能夠充分利用統一記憶體，這樣的優化使得它在處理大型模型時表現出色。

## 技術深入分析

Nativ 的核心技術機制是基於 SwiftUI 和內建的 `mlx-vlm` 伺服器，這使得它能夠在本地運行 AI 模型。這種設計使得用戶能夠快速啟動和管理多種模型，並且通過本地 API 進行交互。效能方面，Nativ 能夠處理多個模型的請求，但在記憶體使用上需要謹慎，特別是當同時運行大型模型時。選擇 SwiftUI 作為前端框架的好處在於能夠快速開發出美觀的界面，但在某些情況下，可能會限制更複雜的 UI 元件的使用。

設計上，Nativ 也考慮到了 Apple Silicon 的特性，能夠充分利用統一記憶體，這使得它在性能上表現優異。技術風險方面，若未來模型數量增加，可能會導致記憶體不足的問題，這需要在設計時進行考量。整合方面，Nativ 能夠與多種編程工具無縫對接，這使得它在開發者的工作流中能夠輕鬆融入。整體來說，Nativ 的設計考量了性能和用戶體驗，並且在本地 AI 應用中提供了一個強大的解決方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例。安裝過程相對順暢，但需要用戶具備一定的技術背景。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 本地運行，避免網絡延遲，提升性能。
> - 支持多種 AI 模型，並提供豐富的性能分析功能。
> - 整合多種編程工具，提升開發效率。

> [!danger] 缺點
> - 僅支援 Apple Silicon，對於其他平台不友好。
> - 高 CPU 使用率問題尚未解決，可能影響使用體驗。
> - 安裝和配置過程相對複雜，需要一定的技術背景。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 的 Mac。
> - 需要足夠的統一記憶體來運行選定的模型。
> - 高 CPU 使用率問題尚未解決，可能影響性能。
> - 目前不支援 Windows 系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的本地 AI 功能，但缺乏 Nativ 的多種編程工具整合和性能分析功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 AI 應用，而 Nativ 提供了更廣泛的模型管理和聊天功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的 AI 應用，提供簡化的本地運行環境。 | 如果你的需求是針對特定任務的 AI 應用，而不需要多種工具整合。 | medium，因為需要重新配置和適應新的 API。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了類似的本地 AI 功能，但缺乏 Nativ 的多種編程工具整合和性能分析功能。 | 如果你只需要基本的本地 AI 功能，而不需要複雜的性能監控。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nativ** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的 AI 應用，提供簡化的本地運行環境。 | 提供了類似的本地 AI 功能，但缺乏 Nativ 的多種編程工具整合和性能分析功能。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的 API。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對特定任務的 AI 應用，而不需要多種工具整 | 如果你只需要基本的本地 AI 功能，而不需要複雜的性能監控。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 高 CPU 使用率問題，可能在空閒時也會影響性能。
  - 解法：目前尚無解決方案，需持續關注更新。
- [MEDIUM] 在某些情況下，模型下載可能會失敗。
  - 解法：檢查網絡連接並重試。
- **[HIGH]** 僅支援 Apple Silicon，對於 Intel Mac 用戶不友好。
  - 解法：無法使用，需考慮其他方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行本地 AI 模型開發 | 非常適合 | 提供了多種工具整合和性能分析功能，能夠提升開發效率。 |
| 需要在 Windows 環境下運行 AI 模型的企業 | 不適合 | 僅支援 macOS，無法滿足需求。 |
| 獨立開發者希望在 Mac 上進行 AI 測試 | 適合 | 本地運行能力強，能夠快速測試和迭代。 |
| 大型企業需要高可擴展性的 AI 解決方案 | 普通 | 雖然性能優異，但在擴展性上可能會遇到瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到本地 AI 模型運行的高效解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，並且不會存取敏感資料。依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Blaizzy--nativ");
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
> const me = dv.page("Repos/Blaizzy--nativ");
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
| Forks | 59 |
| Open Issues | 37 |
| Issue 解決率 | 40% (25 closed) |
| 最後推送 | 2026-07-29 |
| 建立日期 | 2026-07-20 |
| 官方網站 | [Link](https://blaizzy.github.io/nativ/) |
| Repo 大小 | 5.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blaizzy/nativ) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 90
>     "Python" : 5
>     "Shell" : 3
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lazarus-931](https://github.com/Lazarus-931) | 82 |
> | [@Blaizzy](https://github.com/Blaizzy) | 32 |
> | [@lucasnewman](https://github.com/lucasnewman) | 27 |
> | [@C-K-Loan](https://github.com/C-K-Loan) | 6 |
> | [@rcanand](https://github.com/rcanand) | 2 |

**最新版本**：v0.1.0 (2026-07-27)

> [!info]- Release Notes
> Nativ v0.1.0 is a major step forward for local AI on Apple silicon. This release adds local image generation and editing, expands the integration ecosystem, and makes model management, chat, and server operation faster and more reliable.
> 
> ## Highlights
> 
> - **Generate and edit images locally** — Use the new Images workspace, generate or edit images directly in Chat, paste images from the clipboard, or capture a screenshot. This release also adds a default image model and support for the Mage-Flow family.
> - **Connect more of your tools** — New integrations cover Aider, Goose, Crush, Qwen Code, OpenClaw, Buzz, Zed, Continue, VS Code, Cursor, and JetBrains.
> - **Manage models with less friction** — Nativ now detects models from custom Hugging Face caches and LM Studio, supports custom Hugging Face tokens, keeps downloads running across navigation, allows concurrent downloads, warns when a model may not fit in memory, and surfaces loading progress and failures throughout the app.
> - **Configure and secure the local server** — Choose the server host and port, control the server from the sidebar and Settings, and keep the server API key securely in the macOS Keychain.
> - **Enjoy a smoother chat experience** — Streamed responses are coalesced to keep the UI responsive, scrolling and menus behave more reliably, and conversations can be copied or exported as text.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://blaizzy.github.io/nativ/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-28 ~ 2026-07-29）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #146 from Blaizzy/feat-pinned-sessions-nativ

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/Blaizzy/nativ/issues/29) | Create a Mac hardware, model, and local-use-case guide `documentation` `enhancement` | 2 | 0 |
> | [#22](https://github.com/Blaizzy/nativ/issues/22) | Feature Request: Add Support for Core AI and Apple Foundatio `enhancement` `feature-request` | 2 | 1 |
> | [#35](https://github.com/Blaizzy/nativ/issues/35) | Replace the contradictory “Universal · Apple Silicon” platfo `bug` | 1 | 0 |
> | [#30](https://github.com/Blaizzy/nativ/issues/30) | Explore an iPad and iPhone version of Nativ `enhancement` | 1 | 0 |
> | [#150](https://github.com/Blaizzy/nativ/issues/150) | high cpu without doing anything | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> Nativ
> 
>   Local AI, native to your Mac.
> 
>   Chat, serve, monitor, and connect MLX models from one macOS app.
> 
>   
>   
>   
>   
> 
> Nativ is a native macOS workspace for running AI models locally on Apple silicon. It bundles an [`mlx-vlm`](https://github.com/Blaizzy/mlx-vlm) server, finds compatible models in your Hugging Face cache (honoring `HF_HUB_CACHE` and `HF_HOME`), and wraps the whole experience in a polished SwiftUI app.
> 
> Use Nativ as a private chat app, a model manager, a performance dashboard, or an OpenAI- and Anthropic-compatible local inference server for the tools you already use.
> 
> ## What Nativ can do
> 
> | Feature | What you get |
> |---|---|
> | **Local chat and vision** | Streaming conversations, image attachments, reasoning output, response metrics, and persistent chat history. |
> | **Image generation and editing** | Generate and edit images locally with compatible MLX image models in a dedicated Images tab. |
> | **Model library** | Discover installed MLX models, browse and download compatible models from Hugging Face with fit warnings for your memory, inspect capabilities, switch models, or remove old ones. Preload separate language, image-generation, and speech models at once, with a warning if the combination would exceed your Mac's memory. |
> | **Performance analytics** | Track request volume, token usage, time to first token, decode speed, model performance, and recent activity. |
> | **System monitor** | Inspect live per-core CPU load, GPU utilization, unified memory and swap pressure, disk throughput, capacity, and SMART health. |
> | **Local APIs** | OpenAI-compatible chat, Responses, image, audio, and model endpoints, plus Anthropic Messages endpoints. |
> | **Coding-tool integrations** | Configure and launch terminal coding agents — Codex, Claude Code, Pi, Hermes, OpenCode, Aider, Goose, Crush, Qwen Code, OpenClaw — and set up editors — VS Code, Cursor, Zed, JetBrains, Cline, Continue — against models served by Nativ. See [INTEGRATIONS.md](INTEGRATIONS.md) for per-tool setup. |
> | **Developer workspace** | Set the server host and port, add a Hugging Face token for gated models, inspect runtime details, copy endpoint URLs, search and filter live server logs, and monitor server health. |
> | **Menu bar controls** | Start or stop the server, change the loaded model, check serving statistics, open the main app without breaking focus, or pin multiple live CPU, GPU, and RAM percentages and mini graphs. |
> | **Advanced inference controls** | Tune sampling, thinking budgets, structured output, KV-cache quantization, prefix caching, and speculative decoding. |
> 
> Inference runs on your Mac after a model has been downloaded. Model downloads and first-time build dependencies still require network access.
> 
> ## Coming soon
> 
> Support for dedicated audio-only models is coming soon, along with calling image generation as a tool directly from Chat.
> 
> ## How it works
> 
> ```mermaid
> flowchart LR
>     A["Nativ · SwiftUI app"] --> B["NativServerKit"]
>     B --> C["Bundled mlx-vlm server"]
>     C --> D["MLX runtime"]
>     D --> E["Local models · Apple unified memory"]
>     F["Apps and coding agents"] -->|"localhost API"| C
> ```
> 
> `NativServerKit` owns the embedded Python distribution and server lifecycle. The app adds model discovery, chat, analytics, configuration, integrations, logs, menu bar controls, and software updates around that runtime.
> 
> ## Requirements
> 
> To run the app:
> 
> - A Mac with Apple silicon.
> - macOS 26 or newer.
> - Enough unified memory for the model you choose.
> - Optional: a Hugging Face token (set in the app or via `HF_TOKEN`) to download gated models.
> 
> To build from source, you will also need:
> 
> - Xcode with the macOS 26 SDK.
> - [`xcodegen`](https://github.com/yonaskolb/XcodeGen).
> - Python 3.
> - Network access to GitHub Releases and PyPI while the embedded Python bundle is first assembled or refreshed.
> 
> ## Get started
> 
> ### Download a release
> 
> Download the latest DMG from [GitHub Releases](https://github.com/Blaizzy/nativ/releases/latest), drag **Nativ** to Applications, and launch it. Nativ uses Sparkle for subsequent in-app updates.
> 
> On first launch:
> 
> 1. Choose an installed language model, download a recommended one, or continue with load-on-demand.
> 2. Optionally generate an API key to protect the server's management endpoints.
> 3. Open **Models** to download or select a compatible model.
> 4. Start chatting, inspect analytics, or connect one of the supported coding tools.
> 
> ### Build from source
> 
> ```sh
> brew install xcodegen
> make xcode-generate
> make xcode-build
> open build/XcodeDerivedData/Build/Products/Debug/Nativ.app
> ```
> 
> The first build can take a while because `NativServerKit` creates a relocatable Python runtime and installs the pinned `mlx-vlm` server dependencies into the framework resources. Later builds reuse the bundle until an input changes.
> 
> ## Use Nativ as a local API server
> 
> By default, the app exposes its server at `http://127.0.0.1:8080`. You can change the host and port in the Developer page, which also lists every available endpoint and lets you copy URLs directly.
> 
> For example, with a model selected:
> 
> ```sh
> curl http://127.0.0.1:8080/v1/chat/completions \
>   -H 'Content-Type: application/json' \
>   -d '{
>     "model": "your-model-id",
>     "messages": [{"role": "user", "content": "Why is the sky blue?"}],
>     "stream": false
>   }'
> ```
> 
> If you enabled a server API key, also send it as a Bearer token:
> 
> ```sh
> -H 'Authorization: Bearer your-api-key'
> ```
> 
> The server includes:
> 
> - OpenAI-compatible `/v1/chat/completions`, `/v1/responses`, `/v1/models`, image, and audio routes.
> - Anthropic-compatible `/v1/messages` and token-counting routes.
> - `/health`, `/metrics`, cache statistics, cache reset, and model unload endpoints.
> 
> ## Project layout
> 
> ```text
> Sources/
> ├── Nativ/                       # SwiftUI application
> │   ├── Features/
> │   │   ├── Chat/
> │   │   ├── Dashboard/
> │   │   ├── Developer/
> │   │   ├── ImageGeneration/
> │   │   ├── Integrations/
> │   │   ├── Models/
> │   │   └── SystemMonitor/
> │   ├── Assets.xcassets/
> │   ├── ModelProviderIcons/
> │   └── Utilities/
> └── NativServerKit/              # Embedded server and Swift clients
> PythonDistribution/
> ├── Launcher/                    # Relocatable server launcher
> ├── Requirements/                # Pinned Python dependencies
> └── Scripts/                     # Bundle assembly and verification
> Configuration/                   # App metadata and signing settings
> Design/                          # Brand source files and README artwork
> scripts/                         # Archive, signing, notarization, and release tools
> project.yml                      # XcodeGen project definition
> ```
> 
> ## Development
> 
> ### Build and smoke tests
> 
> Generate and build the Xcode project:
> 
> ```sh
> make xcode-generate
> make xcode-build
> ```
> 
> Verify that the bundled executable can launch and print `mlx_vlm.server` help:
> 
> ```sh
> make xcode-smoke
> ```
> 
> Exercise the long-running process lifecycle and `/metrics` readiness:
> 
> ```sh
> make xcode-lifecycle-smoke
> ```
> 
> To generate a few real requests and compare metrics before and after:
> 
> ```sh
> scripts/run_metrics_queries.py
> ```
> 
> The first request may take longer while its model downloads and loads.
> 
> ---
> 
>   Built for fast, local inference on Apple silicon.

## 延伸閱讀

相關概念：[[本地推論]] · [[AI 模型管理]] · [[性能監控]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[antirez--ds4|antirez/ds4]] · [[danveloper--flash-moe|danveloper/flash-moe]]

[GitHub](https://github.com/Blaizzy/nativ) · [官方網站](https://blaizzy.github.io/nativ/)

## 相關收錄

> [!note]- 直接競品（同子分類：本地推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "本地推論" AND file.name != "Blaizzy--nativ"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Blaizzy--nativ"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "Blaizzy--nativ" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "Blaizzy--nativ"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["本地推論","AI 模型管理","性能監控"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Blaizzy--nativ" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Blaizzy--nativ");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Blaizzy--nativ" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Blaizzy" AND file.name != "Blaizzy--nativ"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Blaizzy--nativ");
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
> const me = dv.page("Repos/Blaizzy--nativ");
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
> const me = dv.page("Repos/Blaizzy--nativ");
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
> const me = dv.page("Repos/Blaizzy--nativ");
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
> const me = dv.page("Repos/Blaizzy--nativ");
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

> **2026-07-22** — 首次收錄
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

- [[2026-07-27|2026-07-27]] — 再次上榜，925 stars
- [[2026-07-26|2026-07-26]] — 再次上榜，886 stars
- [[2026-07-25|2026-07-25]] — 再次上榜，863 stars
- [[2026-07-24|2026-07-24]] — 再次上榜，822 stars
- [[2026-07-23|2026-07-23]] — 再次上榜，768 stars
- [[2026-07-22|2026-07-22]] — 首次收錄，647 stars
