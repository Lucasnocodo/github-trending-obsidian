---
repo: apple/coreai-models
url: https://github.com/apple/coreai-models
owner: apple
owner_type: Organization
language: Python
license: BSD-3-Clause
description: "Model export recipes, Python primitives, and Swift runtime utilities for on-device AI"
homepage: ""
stars: 618
stars_per_day: 309
forks: 36
open_issues: 10
created: 2026-06-08
pushed_at: 2026-06-10
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "AI/ML"
subcategory: "模型導出"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "提供模型導出配方、Python 基本元件和 Swift 運行時工具，方便在設備上進行 AI 開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-14"
contributor_count: 4
engagement: "low"
issue_close_rate: 23
repo_size_kb: 6242
readme_length: 5529
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:618,2026-06-11:618"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "coreai-models"
  - "apple/coreai-models"
  - "提供模型導出配方、Python 基本元件和 Swift 運行時工具，方便在設備上進行 AI 開發。"
---

# coreai-models

**618** stars · **309** stars/天 · 建立 2 天前 · Python · BSD-3-Clause

```dataviewjs
const me = dv.page("Repos/apple--coreai-models");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供模型導出配方、Python 基本元件和 Swift 運行時工具，方便在設備上進行 AI 開發。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (309 stars/day)
> **授權** BSD-3-Clause (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 專注於 Apple 生態系統的開發者，特別是需要在 iOS 和 macOS 上運行 AI 模型的工程師。
> **一句話重點** 這個專案讓開發者能夠在 Apple 設備上輕鬆運行 AI 模型，充分發揮 Apple 硬體的性能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/apple--coreai-models");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模型導出" && p.file.name !== "apple--coreai-models" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模型導出 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到在 Apple 設備上運行 AI 模型的能力，值得一試。

> [!abstract] 核心創新
> 提供針對 Apple 硬體優化的模型導出和運行時工具，讓開發者能夠輕鬆在 iOS 和 macOS 上運行 AI 模型。

## 專案簡介

Core AI Models 提供了一套完整的工具，讓開發者能夠將流行的開源模型從 Hugging Face 等來源導出為 Core AI 格式，並在 macOS 和 iOS 上運行。使用者可以透過 `uv` 工具安裝和運行模型，並利用 CLI 指令如 `uv run coreai.model.registry --list-models` 獲取支援的模型列表。這個專案的賣點在於其高度整合的生態系統，結合了 Python 和 Swift，讓開發者能夠輕鬆地將 AI 模型嵌入到 Apple 的生態系統中。技術上，這個專案使用了 Python 來實現模型的導出和處理，而 Swift 則負責在 Apple 設備上運行這些模型，提供了高效的運行時環境。與其他工具相比，如 Hugging Face 的 `transformers`，Core AI Models 提供了針對 Apple 硬體的優化，能夠更好地利用 Apple Silicon 的性能。

這個專案的依賴相對輕量，主要依賴於 `uv` 和一些測試工具。使用者在實際應用中可能會遇到模型導出過程中的資源需求問題，特別是對於需要額外資源的模型，如語言模型和擴散模型。這個專案目前處於早期階段，但已經有活躍的社群和開發者參與，未來可能會持續增強其功能和支援的模型範圍。對於小型團隊或個人開發者來說，這是一個值得關注的工具，特別是那些專注於 Apple 生態系統的開發者。

**技術棧**：`Python` · `Swift` · `C++` · `C`

## 重點功能

- 模型導出 — 提供從 Hugging Face 等來源導出模型的配方，生成可在 Core AI 上運行的 `.aimodel` 文件。
- Python 基本元件 — 提供用於自定義 Core AI 模型的 Python 建構塊，方便開發者進行模型設計。
- Swift 運行時工具 — 專為 macOS 和 iOS 應用設計的運行時工具，支持將 AI 模型整合到應用中。
- CLI 工具 — 提供命令行工具來直接在 Mac 上運行導出的模型，簡化測試和調試流程。
- 插件技能 — 包含幫助編碼代理有效利用 Core AI 的插件技能，提升開發效率。

## 快速開始

1. 安裝 uv 工具
```bash
brew install uv
```
2. 克隆專案並進入目錄
```bash
git clone https://github.com/apple/coreai-models.git && cd coreai-models
```
3. 列出支援的模型
```bash
uv run coreai.model.registry --list-models
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 uv 工具",
  "指令": "uv run coreai.model.registry --list-models",
  "預期輸出": "列出所有支援的模型"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 618 stars（309/天），forks 36（5.8%），顯示出對於 Apple 生態系統開發者的強烈興趣。這個專案的主要貢獻者來自 Apple，過去有豐富的開發經驗，能夠針對 Apple 硬體進行優化。它解決了在 Apple 設備上運行 AI 模型的需求，之前開發者需要依賴其他平台的工具，無法充分利用 Apple 硬體的性能。社群的反饋也顯示出對於特定模型支援的需求，如 Qwen 3.6 的請求，這反映出使用者對於擴展性的期待。這個工具的出現是因為 Apple 在 AI 領域的努力，尤其是針對其硬體的優化，使得這個工具的實用性大幅提升。

## 適合誰使用

**目標受眾**：專注於 Apple 生態系統的開發者，特別是需要在 iOS 和 macOS 上運行 AI 模型的工程師。

> [!example] 使用場景
> - iOS 開發者用它來將 Hugging Face 模型導出為 Core AI 格式，因為這樣可以在 Apple 設備上高效運行，充分利用 Apple Silicon 的性能。
> - 機器學習工程師用它來快速測試和部署自定義的 PyTorch 模型，因為它提供了簡單的 CLI 工具來導出和運行模型。
> - 獨立開發者用它來整合 AI 功能到自己的應用中，因為它的 Swift 運行時工具能夠無縫嵌入到 iOS 應用中。

## 架構分析

Core AI Models 的架構設計旨在提供一個無縫的開發體驗，結合 Python 和 Swift 兩種語言。Python 負責模型的導出和處理，使用者可以透過簡單的 CLI 指令來操作，而 Swift 則提供了運行時環境，讓模型能夠在 Apple 設備上運行。這種設計使得開發者能夠專注於模型的開發，而不必擔心底層的細節。

選擇 Python 作為主要開發語言是因為其在機器學習領域的廣泛應用，而 Swift 的選擇則是為了充分利用 Apple 硬體的性能。這樣的架構雖然增加了學習成本，但卻能提供更好的性能和整合性。未來的擴展性將依賴於社群的參與和對新模型的支援，這可能成為一個瓶頸。

整體而言，這個架構適合小型到中型的開發團隊，特別是那些專注於 Apple 生態系統的團隊。

## 技術深入分析

Core AI Models 的核心技術機制在於其模型導出和運行時工具的整合。使用 Python 來處理模型的導出，並利用 Swift 提供運行時環境，這樣的選擇使得開發者能夠在 Apple 硬體上獲得最佳性能。專案的效能特性尚未明確，但由於其針對 Apple 硬體的優化，預期能夠處理中小型的模型，並在 Apple Silicon 上達到較低的延遲和高效能。設計上，選擇 Python 作為主要開發語言是因為其在機器學習領域的廣泛應用，而 Swift 的選擇則是為了充分利用 Apple 硬體的性能。這樣的架構雖然增加了學習成本，但卻能提供更好的性能和整合性。未來的擴展性將依賴於社群的參與和對新模型的支援，這可能成為一個瓶頸。整體而言，這個架構適合小型到中型的開發團隊，特別是那些專注於 Apple 生態系統的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程相對順暢，但需要注意 Xcode 的版本要求。文件中有針對每個模型的 README，讓使用者能夠快速上手。多語言支持方面，僅提供英文文件。

## 優缺點分析

> [!success] 優點
> - 針對 Apple 硬體的優化，能夠充分發揮性能。
> - 提供簡單的 CLI 工具，方便開發者快速上手。
> - 結合 Python 和 Swift，讓開發者能夠利用兩者的優勢。

> [!danger] 缺點
> - 目前僅支援 macOS 和 iOS，限制了使用範圍。
> - 需要 Xcode 環境，增加了安裝的複雜性。
> - 某些模型的導出過程需要額外的資源，可能會增加開發負擔。

> [!warning] 注意事項
> - 僅支援 macOS 和 iOS 27.0+
> - 需要 Xcode 27.0+ 進行編譯和運行
> - 某些模型需要額外資源，如 tokenizer 和多個模型的資源文件

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了不同的 AI 模型整合方案，但不專注於 Apple 生態系統，適合跨平台使用。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的開發，與本專案的單一模型導出功能有所不同。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供了更廣泛的模型支援，但缺乏針對 Apple 硬體的優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了不同的 AI 模型整合方案，但不專注於 Apple 生態系統，適合跨平台使用。 | 如果你的團隊需要在多平台上運行 AI 模型，而不僅限於 Apple 硬體。 | medium，因為需要重新調整模型導出和運行的流程。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供了更廣泛的模型支援，但缺乏針對 Apple 硬體的優化。 | 如果你的團隊需要支援多種模型，而不僅限於 Apple 硬體的優化。 | high，因為需要重新適應不同的模型導出和運行環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **coreai-models** | **agent-sprite-forge** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供了不同的 AI 模型整合方案，但不專注於 Apple 生態系統，適合跨平台使用。 | 提供了更廣泛的模型支援，但缺乏針對 Apple 硬體的優化。 |
> | 遷移成本 | - | medium，因為需要重新調整模型導出和運行的流程。 | high，因為需要重新適應不同的模型導出和運行環境。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要在多平台上運行 AI 模型，而不僅限於 Ap | 如果你的團隊需要支援多種模型，而不僅限於 Apple 硬體的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些模型的導出過程中可能會缺少必要的資源文件
  - 解法：仔細檢查每個模型的 README，確保所有資源都已正確導出
- [MEDIUM] 在特定版本的 Xcode 上可能會遇到編譯錯誤
  - 解法：確保使用最新版本的 Xcode，並查看 GitHub 上的相關問題
- [MEDIUM] 對於大型模型，導出過程可能會耗時較長
  - 解法：提前規劃導出時間，避免在緊急情況下進行導出

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發 iOS 應用 | 非常適合 | 提供了針對 Apple 硬體的優化，能夠充分發揮性能。 |
| 需要在多平台上運行的 AI 模型 | 不適合 | 目前僅支援 macOS 和 iOS，限制了使用範圍。 |
| 個人開發者進行 AI 原型開發 | 適合 | 提供了簡單的 CLI 工具，方便快速上手。 |
| 大型企業的生產環境 | 普通 | 目前處於 alpha 階段，穩定性和支援性尚未完全驗證。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到在 Apple 設備上運行 AI 模型的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴鏈的信任程度較高，主要依賴於 Python 和 Swift 的標準庫。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/apple--coreai-models");
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
> const me = dv.page("Repos/apple--coreai-models");
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
| Forks | 36 |
| Open Issues | 10 |
| Issue 解決率 | 23% (3 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-06-08 |
| Repo 大小 | 6.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/apple/coreai-models) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 49
>     "Swift" : 48
>     "C++" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tjia1818](https://github.com/tjia1818) | 2 |
> | [@srjoglekar246](https://github.com/srjoglekar246) | 1 |
> | [@stikves](https://github.com/stikves) | 1 |
> | [@carinapeng](https://github.com/carinapeng) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個提交和問題回覆。
**連結**：[文件](https://github.com/apple/coreai-models)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-08 ~ 2026-06-10）
> **活躍天數** 2 天 · **最新 commit** Add Github issue templates (#15)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/apple/coreai-models/issues/1) | request for Qwen 3.6  support | 9 | 1 |
> | [#14](https://github.com/apple/coreai-models/issues/14) | Model request: RF-DETR | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Core AI Models
> 
> Model export recipes, Python primitives, and Swift runtime utilities for building on-device AI with [Core AI](https://developer.apple.com/documentation/coreai).
> 
> The main components include:
> - **Model export** — Recipes to export popular open source models from Hugging Face and other sources to Core AI format.
> - **Reusable primitives** — Python building blocks for authoring custom Core AI models in PyTorch.
> - **Runtime utilities** — Swift package built on top of Core AI framework to run models on macOS and iOS.
> - **Skills** — Plugins to help coding agents leverage Core AI effectively.
> 
> | Directory | What's inside                                                                                |
> | --------- | -------------------------------------------------------------------------------------------- |
> | `models/` | Model catalog with README and export recipes.                                                |
> | `python/` | Python primitives for authoring and utilities for exporting models. |
> | `swift/`  | Swift package (`coreai-models`): runtime utilities to integrate Core AI models in your app.  |
> | `skills/` | Pluggable skills that enable coding agents to leverage Core AI more effectively.             |
> 
> ## Requirements
> 
> If you haven't installed `uv`, install it by
> 
> ```bash
> brew install uv
> ```
> or
> ```bash
> curl -LsSf https://astral.sh/uv/install.sh | sh
> ```
> 
> Once installed successfully, refer to the README.md for each model or family of models, in `models` folder for their exporting recipe.
> 
> ## Requirements (running and app integration)
> 
> - **macOS and iOS 27.0+**
> 
> - **Xcode 27.0+**
> 
> Core AI models are exported as standalone `.aimodel` files for integration into apps via the Core AI framework.
> 
> Some models require additional resources. Language models require a tokenizer, for instance, and diffusion models run multiple models in sequence as part of a single pipeline. For these cases, export recipes in this repo produce a resource folder containing one or more `.aimodel` files alongside any required resources. The Swift package in this repo provides runtime utilities for integrating these into an app.
> 
> Command line interface (CLI) tools are also included for running exported models directly on a Mac (requires Xcode 27.0+). See each model's README for available tools and example invocations.
> 
> ## Explore supported models
> 
> Find supported models by
> 
> ```bash
> git clone https://github.com/apple/coreai-models.git && cd coreai-models
> uv run coreai.model.registry --list-models
> ```
> 
> Run `uv run coreai.model.registry --help` for details.
> 
> ## Agent Skills
> 
> This repo includes a plugin with skills to enable coding agents to use Core AI like an expert.
> 
> ### Available skills
> 
> | Skill | Description |
> | --- | --- |
> | `working‑with‑coreai` | End-to-end workflow for deploying PyTorch models on Apple silicon, covering export with `coreai-torch` and running with the Core AI runtime. |
> | `model‑authoring` | Empirical rules for authoring PyTorch models for on-device execution on Apple platforms, covering BC1S layout, op compatibility, KV cache patterns, precision rules, MoE, and common issues. |
> | `model‑compression‑exploration` | Systematically explore weight compression configurations (quantization and palettization) for a PyTorch model using `coreai-opt`. |
> 
> ### Install
> 
> Installation differs depending on your coding agent of choice.
> 
> #### Claude Code
> 
> Register the marketplace:
> 
> ```
> /plugin marketplace add git@github.com:apple/coreai-models.git
> ```
> 
> Alternatively, register the marketplace from a local git checkout:
> 
> ```
> /plugin marketplace add /path/to/coreai-models
> ```
> 
> Install the plugin:
> 
> ```
> /plugin install coreai-skills@coreai-models
> ```
> 
> #### Codex CLI
> 
> Register the marketplace:
> 
> ```
> codex plugin marketplace add https://github.com/apple/coreai-models
> ```
> 
> Alternatively, register the marketplace from a local git checkout:
> 
> ```
> codex plugin marketplace add /path/to/coreai-models
> ```
> 
> Launch Codex in your workspace:
> 
> ```
> codex
> ```
> 
> Install the plugin through the interactive browser: once the Codex session is
> active in your terminal, open the plugin manager by typing `/plugins`, locate the
> `coreai-models` marketplace tab (use your arrow keys or the built-in search),
> select `coreai-skills`, and choose Install.
> 
> #### Gemini CLI
> 
> Install the extension from a local directory:
> 
> ```
> gemini extensions install /path/to/coreai-models/skills
> ```
> 
> Once installed, the skills activate automatically based on your task context,
> or you can invoke them explicitly.
> 
> ## Contributing
> 
> ### We are not accepting code contributions at this time
> 
> Core AI Models is focused on maintaining a curated, well-tested gallery of
> models and a reliable Swift package. We are not accepting pull requests at launch while we learn how the community uses this project.
> 
> If you open a pull request, it will be closed. This is not a reflection of
> the quality of your contribution but it is a deliberate scope decision for this release.
> 
> ### What we do welcome
> 
> We actively want your feedback! GitHub Issues are open for:
> 
> - **Bug reports** — if something in the Python scripts or Swift utilities does
>   not work as expected
> - **Model requests** — if you have ideas for models you would like to see, or
>   improvements to the workflow or Swift utilities
> 
> Use the [issue templates](../../issues/new/choose) to get started.
> 
> ## Support
> 
> - [GitHub Issues](../../issues) — Feedback, bug reports, and feature requests
> 
> ## License
> 
> This project is licensed under the [BSD 3-Clause License](LICENSE).

## 延伸閱讀

相關概念：[[模型導出]] · [[AI 在移動設備上的應用]] · [[Swift 開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]]

[GitHub](https://github.com/apple/coreai-models)

## 相關收錄

> [!note]- 直接競品（同子分類：模型導出）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模型導出" AND file.name != "apple--coreai-models"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "apple--coreai-models"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "apple--coreai-models" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "apple--coreai-models"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["模型導出","AI 在移動設備上的應用","Swift 開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "apple--coreai-models" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/apple--coreai-models");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "apple--coreai-models" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "apple" AND file.name != "apple--coreai-models"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/apple--coreai-models");
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
> const me = dv.page("Repos/apple--coreai-models");
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
> const me = dv.page("Repos/apple--coreai-models");
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
> const me = dv.page("Repos/apple--coreai-models");
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
> const me = dv.page("Repos/apple--coreai-models");
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

> **2026-06-11** — 首次收錄
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

- [[2026-06-11|2026-06-11]] — 首次收錄，618 stars
