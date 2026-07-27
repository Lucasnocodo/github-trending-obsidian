---
repo: Blaizzy/nativ
url: https://github.com/Blaizzy/nativ
owner: Blaizzy
owner_type: User
language: Swift
license: MIT
description: "Local AI, native to your Mac. Chat, serve, monitor, and connect MLX models from one macOS app."
homepage: "https://blaizzy.github.io/nativ/"
stars: 925
stars_per_day: 154
forks: 51
open_issues: 33
created: 2026-07-20
pushed_at: 2026-07-26
first_seen: 2026-07-22
week: "2026-W30"
month: "2026-07"
category: "AI/ML"
subcategory: "本地推理"
release_tag: "v0.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-22
use_case: "讓你在 Mac 上本地運行 AI 模型，集成聊天、監控和模型管理功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-08-03"
contributor_count: 5
engagement: "low"
issue_close_rate: 37
repo_size_kb: 5440
readme_length: 6719
bus_factor: 1
last_release_days: 7
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-22"
star_history: "2026-07-22:647,2026-07-22:647,2026-07-23:768,2026-07-23:768,2026-07-24:822,2026-07-24:822,2026-07-25:863,2026-07-25:863,2026-07-26:886,2026-07-26:886,2026-07-27:925,2026-07-27:925"
tags:
  - github
  - "category/ai_ml"
  - "lang/swift"
aliases:
  - "nativ"
  - "Blaizzy/nativ"
  - "讓你在 Mac 上本地運行 AI 模型，集成聊天、監控和模型管理功能。"
---

# nativ

**925** stars · **154** stars/天 · 建立 6 天前 · Swift · MIT

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

`v0.0.1`

> [!summary] 一句話摘要
> 讓你在 Mac 上本地運行 AI 模型，集成聊天、監控和模型管理功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (154 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 Mac 上運行 AI 模型但不想依賴雲端的開發者。
> **一句話重點** Nativ 的設計讓本地 AI 模型的運行變得簡單而高效，特別適合 Apple 硬體用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blaizzy--nativ");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "本地推理" && p.file.name !== "Blaizzy--nativ" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 本地推理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到快速本地 AI 模型運行的效果，值得嘗試。

> [!abstract] 核心創新
> Nativ 是一個專為 Apple silicon 設計的本地 AI 模型運行環境，提供完整的聊天、監控和模型管理功能。

## 專案簡介

Nativ 是一款專為 Apple silicon 設計的 macOS 應用，能夠本地運行 AI 模型。用戶可以通過這個應用進行聊天、管理模型、查看性能分析以及連接各種 MLX 模型。使用者只需選擇已安裝的模型或從 Hugging Face 下載，然後即可開始與模型互動。Nativ 的一句話賣點是：在本地環境中提供 OpenAI 和 Anthropic 兼容的推理服務，讓開發者能夠無縫集成 AI 功能。這個應用使用 SwiftUI 作為前端，後端則是基於 `mlx-vlm` 伺服器，並且支援多種 API 端點，包括聊天、圖像和音頻處理。Nativ 也提供了詳細的性能分析工具，能夠追蹤請求量、token 使用情況和模型性能等數據。

與其他類似工具相比，Nativ 的優勢在於其本地運行的能力，這意味著用戶不需要依賴雲端服務，能夠更快地獲得響應並保護數據隱私。使用者可以在本地 API 伺服器上進行各種請求，這對於需要高效能和低延遲的應用場景尤為重要。Nativ 的設計考慮到 Apple 的硬體架構，能夠充分利用統一內存，這使得它在處理大型模型時表現更佳。這個專案目前仍在早期階段，功能持續增強，未來將支援更多專用模型。對於需要在 Mac 上運行 AI 模型的開發者來說，Nativ 是一個值得關注的選擇。

**技術棧**：`SwiftUI` · `Python 3` · `Makefile`

## 重點功能

- 本地聊天和視覺 — 支援即時對話、圖像附件和持久聊天歷史。
- 模型庫 — 瀏覽和下載 Hugging Face 兼容模型，並檢查記憶體適配性。
- 性能分析 — 追蹤請求量、token 使用、解碼速度和模型性能。
- 系統監控 — 實時檢查 CPU 負載、GPU 使用率和內存狀態。
- 本地 API — 提供 OpenAI 和 Anthropic 兼容的聊天和模型端點。
- 開發者工作區 — 配置伺服器、檢查運行時詳細信息和監控伺服器健康狀態。
- 菜單欄控制 — 快速啟動或停止伺服器，檢查服務統計數據。
- 高級推理控制 — 調整取樣、思考預算和結構化輸出等參數。

## 快速開始

1. 下載最新版本
```bash
從 GitHub Releases 下載 DMG，拖動 Nativ 到應用程式中
```
2. 選擇模型
```bash
啟動應用後選擇已安裝的語言模型或下載推薦模型
```
3. 開始聊天
```bash
啟動聊天功能，檢查性能分析或連接支援的編碼工具
```

## 程式碼範例

```swift
[
  "# 使用 curl 發送請求到本地伺服器",
  "curl http://127.0.0.1:8080/v1/chat/completions \\",
  "  -H 'Content-Type: application/json' \\",
  "  -d '{\"model\": \"your-model-id\", \"messages\": [{\"role\": \"user\", \"content\": \"Why is the sky blue?\"}], \"stream\": false}'",
  "# 預期輸出：模型的回應內容"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 925 stars（154/天），forks 51（5.5%），顯示出強勁的增長潛力。作者 Lazarus-931 和 Blaizzy 具備開源社群的活躍背景，這個專案解決了在本地運行 AI 模型的需求，特別是針對 Apple silicon 的優化。之前的解決方案往往依賴雲端，導致延遲和數據隱私問題。近期的推廣活動和社群討論也提升了其曝光率。這個工具的出現正好符合了對本地 AI 解決方案日益增長的需求，特別是在開發者社群中。

## 適合誰使用

**目標受眾**：需要在 Mac 上運行 AI 模型但不想依賴雲端的開發者。

> [!example] 使用場景
> - 獨立開發者用它來在本地運行 AI 模型進行實驗，因為這樣可以減少對雲端服務的依賴，並提高數據隱私。
> - AI 研究者用它來快速測試和調整模型參數，因為 Nativ 提供了詳細的性能分析工具，能夠即時反映模型的運行狀況。
> - 小型團隊用它來整合 AI 功能到他們的應用中，因為 Nativ 支援多種 API 端點，能夠輕鬆連接到現有的開發流程。

## 架構分析

Nativ 採用 SwiftUI 構建用戶界面，並使用 `NativServerKit` 管理嵌入式 Python 環境和伺服器生命週期。資料流從用戶界面到 `mlx-vlm` 伺服器，並通過本地 API 提供服務。這種設計使得應用能夠快速響應用戶請求，並減少了對外部依賴的需求。

選擇 SwiftUI 使得開發者能夠利用 Apple 生態系統的最佳實踐，但也可能限制了跨平台的擴展性。擴展性方面，隨著模型數量的增加，可能會面臨記憶體和性能瓶頸，特別是在運行大型模型時。整體架構考慮到了性能和用戶體驗的平衡，適合需要本地運行 AI 的開發者。

## 技術深入分析

Nativ 的核心技術機制在於其 SwiftUI 應用和嵌入式 Python 環境的結合，這使得用戶能夠在本地運行 AI 模型。使用 `mlx-vlm` 伺服器來處理請求，並通過本地 API 提供服務，這樣的設計能夠減少延遲並提高數據隱私。效能方面，Nativ 能夠在 Apple silicon 上高效運行，但在處理大型模型時可能會面臨記憶體瓶頸。選擇 SwiftUI 使得界面友好，但也限制了跨平台的可能性。技術風險方面，隨著用戶數量的增加，伺服器的負載可能會成為瓶頸，特別是在高請求量的情況下。整合方面，Nativ 與現有的開發工具鏈相容性良好，能夠輕鬆地與其他工具搭配使用，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但首次下載模型可能需要網路連接。沒有提供多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需依賴雲端服務，提供更快的響應速度。
> - 多功能性，集成聊天、模型管理和性能分析於一體。
> - 針對 Apple silicon 優化，能夠充分利用硬體資源。

> [!danger] 缺點
> - 僅支援 Apple silicon，無法在其他平台上運行。
> - 目前功能仍在持續開發中，可能存在不穩定性。
> - 首次下載模型需要網路，對於離線使用者不友好。

> [!warning] 注意事項
> - 僅支援 Apple silicon 的 Mac。
> - 需要 macOS 26 或更新版本。
> - 首次下載模型和依賴時需要網路連接。
> - 目前不支援 Windows 或其他平台。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的本地 AI 模型運行環境，但不支援 SwiftUI 界面，使用者體驗較差。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定模型的運行，但缺乏 Nativ 的多功能性和性能分析工具。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於集成 Codex 模型，功能較為單一，無法提供全面的系統監控和性能分析。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，提供更高的性能，但缺乏 Nativ 的用戶友好界面。 | 如果需要更高性能且不介意使用命令行工具，則可以選擇這個方案。 | medium，因為需要重新學習 Rust 的生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定模型的運行，功能較為單一，無法提供 Nativ 的多功能性。 | 如果你的需求非常特定且不需要多功能性，這個工具可能更合適。 | low，因為功能簡單，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nativ** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，提供更高的性能，但缺乏 Nativ 的用戶友好界面。 | 專注於特定模型的運行，功能較為單一，無法提供 Nativ 的多功能性。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 的生態系統。 | low，因為功能簡單，易於上手。 |
> | 適用場景 | 主要場景 | 如果需要更高性能且不介意使用命令行工具，則可以選擇這個方案。 | 如果你的需求非常特定且不需要多功能性，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者進行探索和實驗，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次啟動時模型下載速度可能較慢
  - 解法：選擇較小的模型進行測試
- **[HIGH]** 某些模型可能不兼容，導致加載失敗
  - 解法：檢查 Hugging Face 上的模型兼容性說明
- [MEDIUM] 在高負載下，伺服器可能會出現延遲
  - 解法：監控性能並適當調整模型使用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 模型測試 | 非常適合 | Nativ 提供了多種功能，能夠滿足團隊的需求。 |
| 需要快速原型的獨立開發者 | 適合 | 本地運行能夠加快開發速度，減少依賴。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到快速本地 AI 模型運行的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Nativ 本身不需要高權限運行，但需要存取 Hugging Face 的模型資料，建議使用者注意 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Nativ 最常與其他開發工具搭配使用，如 Xcode 和 GitHub。它能夠在開發階段提供即時的 AI 支援，並且可以與 CI/CD 流程整合。實際整合範例是在 Xcode 中使用 Nativ 進行模型測試，具體做法是配置 API 端點並在代碼中調用。Nativ 支援 GitHub Actions 進行自動化測試，但目前尚未有官方的 IDE 插件。整合的摩擦點主要在於需要手動配置 API 端點，對於新手來說可能會有一定的學習曲線。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Nativ 出現之前，開發者通常依賴雲端服務來運行 AI 模型，這導致了延遲和數據隱私問題。隨著 Apple silicon 的普及，本地運行 AI 模型的需求逐漸上升。Nativ 的出現代表了本地推理的趨勢，未來可能會有更多類似的工具出現，以滿足開發者對於性能和隱私的需求。

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
| Forks | 51 |
| Open Issues | 33 |
| Issue 解決率 | 37% (19 closed) |
| 最後推送 | 2026-07-26 |
| 建立日期 | 2026-07-20 |
| 官方網站 | [Link](https://blaizzy.github.io/nativ/) |
| Repo 大小 | 5.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blaizzy/nativ) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 89
>     "Python" : 6
>     "Shell" : 3
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lazarus-931](https://github.com/Lazarus-931) | 62 |
> | [@Blaizzy](https://github.com/Blaizzy) | 27 |
> | [@lucasnewman](https://github.com/lucasnewman) | 19 |
> | [@rcanand](https://github.com/rcanand) | 2 |
> | [@claude](https://github.com/claude) | 1 |

**最新版本**：v0.0.1 (2026-07-20)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/Blaizzy/nativ/commits/v0.0.1

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://blaizzy.github.io/nativ/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-26）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #117 from Blaizzy/integration-buzz

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/Blaizzy/nativ/issues/29) | Create a Mac hardware, model, and local-use-case guide `documentation` `enhancement` | 2 | 0 |
> | [#35](https://github.com/Blaizzy/nativ/issues/35) | Replace the contradictory “Universal · Apple Silicon” platfo `bug` | 1 | 0 |
> | [#30](https://github.com/Blaizzy/nativ/issues/30) | Explore an iPad and iPhone version of Nativ `enhancement` | 1 | 0 |
> | [#22](https://github.com/Blaizzy/nativ/issues/22) | Feature Request: Add Support for Core AI and Apple Foundatio `enhancement` `feature-request` | 1 | 1 |

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
> | **Model library** | Discover installed MLX models, browse and download compatible models from Hugging Face with fit warnings for your memory, inspect capabilities, switch models, or remove old ones. |
> | **Performance analytics** | Track request volume, token usage, time to first token, decode speed, model performance, and recent activity. |
> | **System monitor** | Inspect live per-core CPU load, GPU utilization, unified memory and swap pressure, disk throughput, capacity, and SMART health. |
> | **Local APIs** | OpenAI-compatible chat, Responses, image, audio, and model endpoints, plus Anthropic Messages endpoints. |
> | **Coding-tool integrations** | Configure and launch Codex, Claude Code, Pi, Hermes, and OpenCode against models served by Nativ. |
> | **Developer workspace** | Set the server host and port, add a Hugging Face token for gated models, inspect runtime details, copy endpoint URLs, search and filter live server logs, and monitor server health. |
> | **Menu bar controls** | Start or stop the server, change the loaded model, check serving statistics, open the main app without breaking focus, or pin multiple live CPU, GPU, and RAM percentages and mini graphs. |
> | **Advanced inference controls** | Tune sampling, thinking budgets, structured output, KV-cache quantization, prefix caching, and speculative decoding. |
> 
> Inference runs on your Mac after a model has been downloaded. Model downloads and first-time build dependencies still require network access.
> 
> ## Coming soon
> 
> Support for dedicated audio-only and image-generation-only models is coming soon.
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

相關概念：[[本地推理]] · [[AI 模型管理]] · [[性能分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[antirez--ds4|antirez/ds4]] · [[danveloper--flash-moe|danveloper/flash-moe]]

[GitHub](https://github.com/Blaizzy/nativ) · [官方網站](https://blaizzy.github.io/nativ/)

## 相關收錄

> [!note]- 直接競品（同子分類：本地推理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "本地推理" AND file.name != "Blaizzy--nativ"
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
> const concepts = ["本地推理","AI 模型管理","性能分析"];
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
