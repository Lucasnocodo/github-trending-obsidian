---
repo: Blaizzy/nativ
url: https://github.com/Blaizzy/nativ
owner: Blaizzy
owner_type: User
language: Swift
license: MIT
description: "Local AI, native to your Mac. Chat, serve, monitor, and connect MLX models from one macOS app."
homepage: "https://blaizzy.github.io/nativ/"
stars: 647
stars_per_day: 647
forks: 35
open_issues: 23
created: 2026-07-20
pushed_at: 2026-07-22
first_seen: 2026-07-22
week: "2026-W30"
month: "2026-07"
category: "AI/ML"
subcategory: "推論優化"
release_tag: "v0.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-22
use_case: "在你的 Mac 上本地運行 AI 模型的應用程式，提供聊天、服務、監控和連接 MLX 模型的功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-25"
contributor_count: 4
engagement: "low"
issue_close_rate: 28
repo_size_kb: 3482
readme_length: 6158
bus_factor: 2
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-22"
star_history: "2026-07-22:647"
tags:
  - github
  - "category/ai_ml"
  - "lang/swift"
aliases:
  - "nativ"
  - "Blaizzy/nativ"
  - "在你的 Mac 上本地運行 AI 模型的應用程式，提供聊天、服務、監控和連接 MLX 模型的功能。"
---

# nativ

**647** stars · **647** stars/天 · 建立 1 天前 · Swift · MIT

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
> 在你的 Mac 上本地運行 AI 模型的應用程式，提供聊天、服務、監控和連接 MLX 模型的功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (647 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望在 Mac 上本地運行 AI 模型的開發者和數據科學家。
> **一句話重點** Nativ 的設計讓本地 AI 模型的運行變得簡單且高效，適合需要快速迭代的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blaizzy--nativ");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "Blaizzy--nativ" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 推論優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到高效的本地 AI 解決方案，值得嘗試。

> [!abstract] 核心創新
> Nativ 將本地 AI 模型的運行與豐富的用戶介面和性能監控結合在一起，提供了一個無需雲端的完整解決方案。

## 專案簡介

Nativ 是一款專為 Apple Silicon 設計的本地 AI 應用，能在 macOS 上運行 AI 模型，並提供一個整合的使用者介面。用戶可以透過 Nativ 進行聊天、管理模型、監控性能，甚至作為 OpenAI 和 Anthropic 的本地推論伺服器。核心流程是用戶選擇一個模型，Nativ 會自動下載並在本地伺服器上運行，並提供 API 介面供其他應用程式訪問。關鍵指令如 `curl http://127.0.0.1:8080/v1/chat/completions` 可用於發送請求，這使得開發者能夠輕鬆整合 AI 功能。Nativ 的賣點在於其本地運行的能力，這意味著用戶不需要依賴雲端服務，能夠更快地進行推論和數據處理。Nativ 使用 SwiftUI 構建其前端，並搭配 `mlx-vlm` 伺服器進行後端處理，這樣的選擇使得應用在 Apple 硬體上能夠充分發揮性能。

相較於其他雲端解決方案，如 OpenAI API，Nativ 提供了更低的延遲和更高的隱私性，因為所有數據都在本地處理。與 Hugging Face 等模型庫的整合也使得用戶能夠輕鬆探索和使用各種模型。Nativ 的設計還考慮到了開發者的需求，提供了詳細的性能分析和即時監控功能，這對於需要高效能的應用場景尤其重要。使用者可以透過簡單的 API 調用來獲取模型的性能數據，這樣的設計使得 Nativ 在開發過程中更具透明度。儘管目前仍在早期階段，但其潛力巨大，特別是對於希望在本地環境中運行 AI 模型的開發者來說，Nativ 是一個值得關注的選擇。

**技術棧**：`SwiftUI` · `Python 3` · `Makefile`

## 重點功能

- 本地聊天和視覺 — 提供持續的聊天歷史、圖像附件和推理輸出。
- 模型庫 — 瀏覽和管理安裝的 MLX 模型，並從 Hugging Face 下載兼容模型。
- 性能分析 — 追蹤請求量、令牌使用、首次令牌時間和模型性能。
- 本地 API — 支持 OpenAI 和 Anthropic 的兼容端點，方便集成。
- 開發者工作區 — 檢查運行時詳細信息、複製端點 URL 和監控伺服器健康狀態。
- 菜單欄控制 — 快速啟動或停止伺服器，切換模型和檢查統計數據。
- 進階推理控制 — 調整取樣、思考預算和結構化輸出等參數。

## 快速開始

1. 下載最新版本 DMG 檔案
```bash
從 https://github.com/Blaizzy/nativ/releases/latest 下載
```
2. 安裝應用程式
```bash
將 Nativ 拖入應用程式資料夾
```
3. 啟動應用程式
```bash
打開 Nativ，選擇模型並開始聊天
```

## 程式碼範例

```swift
# 使用 Nativ 作為本地 API 伺服器
curl http://127.0.0.1:8080/v1/chat/completions \
  -H 'Content-Type: application/json' \
  -d '{"model": "your-model-id", "messages": [{"role": "user", "content": "Why is the sky blue?"}], "stream": false}'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天內累積 647 stars（647/天），forks 35（5.4%），顯示出相對穩定的關注度。作者 Lazarus-931 和 Blaizzy 具備開源背景，這使得他們能夠快速迭代並解決使用者需求。Nativ 解決了本地運行 AI 模型的需求，之前的方案往往需要依賴雲端，帶來延遲和隱私問題。最近的推廣活動和社群討論也可能促進了其曝光度。技術上，Apple Silicon 的普及使得這個工具的可行性大幅提升，因為它專為該平台優化。forks/stars 比率相對較低，顯示大多數使用者仍在觀望階段。

## 適合誰使用

**目標受眾**：希望在 Mac 上本地運行 AI 模型的開發者和數據科學家。

> [!example] 使用場景
> - 獨立開發者用它來在 Mac 上本地運行 AI 模型，因為這樣可以避免雲端延遲並提高隱私性。
> - 數據科學家用它來快速測試和調整 ML 模型，因為它提供了即時的性能分析和模型管理功能。
> - 教育工作者用它來展示 AI 模型的運作，因為其簡單的介面和本地運行的特性使得演示更加流暢。

## 架構分析

Nativ 採用 SwiftUI 構建前端，並使用 `NativServerKit` 管理內嵌的 Python 環境和伺服器生命週期。這種設計使得應用能夠在本地運行 AI 模型，並提供即時的性能分析和監控功能。資料流方面，Nativ 會將請求發送到 `mlx-vlm` 伺服器，該伺服器負責處理模型推論並返回結果。

這樣的架構選擇使得用戶能夠在不依賴雲端的情況下，快速獲取推論結果。選擇 SwiftUI 作為前端框架，能夠充分利用 Apple 生態系統的性能優勢，但也限制了跨平台的擴展性。擴展性方面，隨著用戶需求的增加，可能需要考慮如何支持更多的模型和功能，這可能會影響到現有架構的穩定性。

## 技術深入分析

Nativ 的核心技術機制在於其使用 SwiftUI 和 Python 的結合，這使得應用能夠在 Apple Silicon 上高效運行。透過 `mlx-vlm` 伺服器，Nativ 能夠處理多種 AI 模型的推論，並提供即時的性能數據。效能方面，Nativ 能夠快速響應請求，並在本地環境中保持低延遲，這對於需要即時反饋的應用場景至關重要。設計上，選擇 SwiftUI 作為前端框架，能夠充分利用 Apple 的生態系統，但也限制了跨平台的擴展性。技術風險方面，隨著用戶數量的增加，伺服器的穩定性可能會受到挑戰，特別是在高負載情況下。整合方面，Nativ 能夠與多種開發工具和 API 進行無縫對接，這使得它在現有的開發流程中能夠輕鬆融入。整體而言，Nativ 提供了一個強大的本地 AI 解決方案，適合需要高效能和隱私的開發者使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 本地運行，降低延遲並提高隱私性。
> - 提供豐富的性能分析和監控功能，便於開發者調整模型。
> - 支持多種 AI 模型，靈活性高。

> [!danger] 缺點
> - 目前僅支援 Apple Silicon，限制了用戶群。
> - 首次下載模型和依賴項需要網路連接，可能影響使用體驗。
> - 仍在早期階段，功能和穩定性可能不如成熟工具。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 的 Mac。
> - 需要 macOS 26 或更新版本。
> - 首次下載模型和依賴項時需要網路連接。
> - 目前不支援音頻和圖像生成模型，這些功能即將推出。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 此工具專注於創建和管理 AI 代理，而 Nativ 更加專注於本地模型的推論和性能監控。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供雲端解決方案，適合需要擴展的場景，而 Nativ 提供本地運行的優勢，適合對隱私有高要求的用戶。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | GPT2API 專注於提供 GPT-2 模型的 API 接口，而 Nativ 則支持多種模型並提供更全面的性能分析功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理，提供更高的靈活性和擴展性。 | 如果需要一個可擴展的代理管理系統，適合大型團隊使用。 | medium，因為需要重新設計代理的整合方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於提供 GPT-2 模型的 API 接口，功能較為單一。 | 如果只需要使用 GPT-2 模型，且不需要其他模型的支持。 | low，因為接口相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nativ** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理，提供更高的靈活性和擴展性。 | 專注於提供 GPT-2 模型的 API 接口，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的整合方式。 | low，因為接口相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要一個可擴展的代理管理系統，適合大型團隊使用。 | 如果只需要使用 GPT-2 模型，且不需要其他模型的支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次啟動時需要下載模型，可能導致延遲
  - 解法：提前下載所需模型以減少啟動時間
- **[HIGH]** API 端點可能會隨著更新而變更
  - 解法：定期檢查官方文檔以獲取最新端點信息
- [MEDIUM] 僅支援特定版本的 macOS，可能導致兼容性問題
  - 解法：確保系統更新到最新版本以避免問題

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 AI 模型測試 | 非常適合 | 本地運行降低了延遲，便於快速迭代。 |
| 需要高隱私的企業環境 | 適合 | 所有數據均在本地處理，符合隱私要求。 |
| 大型企業的雲端 AI 解決方案 | 不適合 | 目前僅支援 Apple Silicon，無法滿足多樣化需求。 |
| 個人開發者進行 AI 實驗 | 非常適合 | 簡單的使用介面和本地運行的特性使得實驗更為便捷。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到高效的本地 AI 解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本地運行，不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 35 |
| Open Issues | 23 |
| Issue 解決率 | 28% (9 closed) |
| 最後推送 | 2026-07-22 |
| 建立日期 | 2026-07-20 |
| 官方網站 | [Link](https://blaizzy.github.io/nativ/) |
| Repo 大小 | 3.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blaizzy/nativ) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 85
>     "Python" : 8
>     "Shell" : 4
>     "HTML" : 2
>     "C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lazarus-931](https://github.com/Lazarus-931) | 9 |
> | [@Blaizzy](https://github.com/Blaizzy) | 8 |
> | [@lucasnewman](https://github.com/lucasnewman) | 5 |
> | [@rcanand](https://github.com/rcanand) | 2 |

**最新版本**：v0.0.1 (2026-07-20)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/Blaizzy/nativ/commits/v0.0.1

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://blaizzy.github.io/nativ/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-21 ~ 2026-07-21）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #37 from lucasnewman/fix-software-update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Blaizzy/nativ/issues/9) | Feature Request: Support custom local port for server endpoi `enhancement` `feature-request` | 2 | 1 |
> | [#22](https://github.com/Blaizzy/nativ/issues/22) | Feature Request: Add Support for Core AI and Apple Foundatio `enhancement` `feature-request` | 1 | 1 |
> | [#38](https://github.com/Blaizzy/nativ/issues/38) | Support to paste image to chat from clipboard | 0 | 1 |
> | [#35](https://github.com/Blaizzy/nativ/issues/35) | Replace the contradictory “Universal · Apple Silicon” platfo `bug` | 0 | 0 |

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
> Nativ is a native macOS workspace for running AI models locally on Apple silicon. It bundles an [`mlx-vlm`](https://github.com/Blaizzy/mlx-vlm) server, finds compatible models in your Hugging Face cache, and wraps the whole experience in a polished SwiftUI app.
> 
> Use Nativ as a private chat app, a model manager, a performance dashboard, or an OpenAI- and Anthropic-compatible local inference server for the tools you already use.
> 
> ## What Nativ can do
> 
> | Feature | What you get |
> |---|---|
> | **Local chat and vision** | Streaming conversations, image attachments, reasoning output, response metrics, and persistent chat history. |
> | **Model library** | Discover installed MLX models, browse compatible models on Hugging Face, download them, inspect capabilities, switch models, or remove old ones. |
> | **Performance analytics** | Track request volume, token usage, time to first token, decode speed, model performance, and recent activity. |
> | **Local APIs** | OpenAI-compatible chat, Responses, image, audio, and model endpoints, plus Anthropic Messages endpoints. |
> | **Coding-tool integrations** | Configure and launch Codex, Claude Code, Pi, Hermes, and OpenCode against models served by Nativ. |
> | **Developer workspace** | Inspect runtime details, copy endpoint URLs, search and filter live server logs, and monitor server health. |
> | **Menu bar controls** | Start or stop the server, change the loaded model, check serving statistics, and open the main app without breaking focus. |
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
> 1. Choose an installed language model, or continue with load-on-demand.
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
> By default, the app exposes its server at `http://127.0.0.1:8080`. The Developer page lists every available endpoint and lets you copy URLs directly.
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
> │   │   └── Models/
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

相關概念：[[推論優化]] · [[多模態]] · [[容器化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[antirez--ds4|antirez/ds4]] · [[danveloper--flash-moe|danveloper/flash-moe]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[tastyeffectco--sandboxd|tastyeffectco/sandboxd]]

[GitHub](https://github.com/Blaizzy/nativ) · [官方網站](https://blaizzy.github.io/nativ/)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "Blaizzy--nativ"
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
> const concepts = ["推論優化","多模態","容器化"];
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

- [[2026-07-22|2026-07-22]] — 首次收錄，647 stars
