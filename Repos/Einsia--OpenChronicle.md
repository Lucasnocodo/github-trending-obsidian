---
repo: Einsia/OpenChronicle
url: https://github.com/Einsia/OpenChronicle
owner: Einsia
owner_type: Organization
language: Python
license: MIT
description: ""
homepage: ""
stars: 2158
stars_per_day: 127
forks: 201
open_issues: 16
created: 2026-04-21
pushed_at: 2026-04-26
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "記憶系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "為任何 LLM 代理提供本地優先的屏幕上下文記憶，捕捉 AX 樹和截圖，並通過 MCP 暴露結果。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 6
repo_size_kb: 1874
readme_length: 7064
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1126,2026-04-26:1129,2026-04-27:1422,2026-04-27:1425,2026-04-28:1593,2026-04-28:1596,2026-04-29:1809,2026-04-30:1885,2026-05-01:1933,2026-05-02:1983,2026-05-03:2024,2026-05-04:2063,2026-05-05:2090,2026-05-06:2097,2026-05-07:2105,2026-05-08:2109,2026-05-09:2158"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "OpenChronicle"
  - "Einsia/OpenChronicle"
  - "為任何 LLM 代理提供本地優先的屏幕上下文記憶，捕捉 AX 樹和截圖，並通過 MCP 暴露結果。"
---

# OpenChronicle

**2.2k** stars · **127** stars/天 · 建立 17 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Einsia--OpenChronicle");
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
> 為任何 LLM 代理提供本地優先的屏幕上下文記憶，捕捉 AX 樹和截圖，並通過 MCP 暴露結果。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (127 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 12 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 對個人 AI 記憶系統有需求的 macOS 開發者和研究者。
> **一句話重點** OpenChronicle 的設計理念在於提供一個開放且可檢查的本地記憶系統，這對於個人 AI 記憶的發展至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Einsia--OpenChronicle");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶系統" && p.file.name !== "Einsia--OpenChronicle" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到一個本地優先的記憶系統，值得嘗試。

> [!abstract] 核心創新
> OpenChronicle 提供了一個開放的、本地優先的記憶系統，專為工具調用的 LLM 代理設計。

## 專案簡介

OpenChronicle 是一個開源的本地優先記憶系統，專為任何能夠調用工具的 LLM 代理設計。它在 macOS 上運行，捕捉用戶的屏幕和應用上下文，並將其轉換為持久的 Markdown 記憶，記錄用戶的工作內容、決策、使用的工具以及相關的人或項目。這種設計的賣點在於它的本地存儲和可檢查性，使用者可以隨時查看和修改存儲的記憶。核心流程是通過 AX Tree 捕捉結構化上下文，然後將其壓縮為會話，提取持久事實並存儲在本地的 SQLite 數據庫中。主要的 CLI 指令包括 `openchronicle start` 來啟動記憶捕捉，`openchronicle status` 檢查當前狀態，以及 `openchronicle capture-once` 進行一次性捕捉。

技術上，OpenChronicle 使用 Python 和 Swift，並依賴於如 `typer` 和 `rich` 等輕量級庫，這使得它的依賴樹相對簡單，易於維護。與其他類似工具相比，如 OpenAI Chronicle，OpenChronicle 提供了開源的選擇，並支持多種模型，而不僅僅是 OpenAI 的產品。它的 AX Tree 優先捕捉方式使得記憶的結構化和去重更為高效，這在處理大量資料時尤為重要。使用者可能會遇到的問題包括目前僅支持 macOS，且在記憶管理和上下文解析方面仍需改進。這個專案目前處於 alpha 階段，適合對個人 AI 記憶有興趣的開發者和研究者，未來可能會朝著更廣泛的應用和整合方向發展。

**技術棧**：`Python 3.11` · `Swift` · `Shell`

## 重點功能

- 本地優先存儲 — 記憶資料存儲在本地，確保隱私和安全。
- 支持多種 LLM — 兼容 Ollama、LM Studio、OpenAI 等多種模型。
- AX Tree 捕捉 — 以 AX Tree 為主的結構化上下文捕捉方式，降低成本並提高準確性。
- Markdown 格式存儲 — 記憶以人類可讀的 Markdown 格式存儲，便於檢查和修改。
- SQLite 本地索引 — 使用 SQLite 進行本地索引，支持快速查詢和檢索。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Einsia/OpenChronicle.git
```
2. 進入專案目錄
```bash
cd openchronicle
```
3. 運行安裝腳本
```bash
bash install.sh
```
4. 啟動 OpenChronicle
```bash
openchronicle start
```

## 程式碼範例

```python
{
  "前置條件": "需要 macOS 13+ 和 Xcode Command Line Tools。",
  "指令": "openchronicle start",
  "預期輸出": "啟動 OpenChronicle 記憶捕捉。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天就累積 2158 stars（127/天），forks 201（9.3%），這顯示出相對穩定的增長。這個專案的主要貢獻者有過去在開源社區的活躍經歷，並且解決了現有記憶系統的封閉性問題，提供了一個開放且可擴展的替代方案。開源的特性吸引了許多對個人 AI 記憶感興趣的開發者，並且在社群中引發了討論。技術上，macOS 的 AX Tree 捕捉方式使得這個工具在當前的環境下變得可行，尤其是在需要精確捕捉用戶操作的場景中。forks/stars 比率為 9.3%，顯示出有相當比例的用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：對個人 AI 記憶系統有需求的 macOS 開發者和研究者。

> [!example] 使用場景
> - 自由職業者用它來記錄工作進度和決策，因為它能夠自動捕捉上下文並生成可檢查的 Markdown 記錄。
> - 開發者用它來整合不同的 LLM 代理，因為它支持多種模型並提供本地存儲的記憶系統。
> - 研究者用它來分析用戶行為和應用互動，因為其 AX Tree 捕捉方式能提供更精確的上下文資料。

## 架構分析

OpenChronicle 採用事件驅動的架構，主要依賴 macOS 的 AX 事件來捕捉上下文。這種設計使得記憶的捕捉過程更為高效，因為它能夠即時反映用戶的操作，而不是依賴於定期的快照。資料流從事件捕捉開始，經過解析、去重和分類，最終存儲在本地的 SQLite 數據庫中。

這種架構的優勢在於能夠快速處理大量的上下文資料，但同時也帶來了對 macOS 環境的依賴。選擇使用 Markdown 和 SQLite 作為存儲格式，讓資料更易於檢查和修改，但也可能在資料量極大時影響查詢效率。整體而言，這種設計適合個人使用，但在擴展到更大規模的應用時可能會遇到性能瓶頸。

## 技術深入分析

OpenChronicle 的核心技術機制是基於 macOS 的 AX 事件捕捉，這使得它能夠即時獲取用戶的操作上下文。這種事件驅動的設計模式提高了記憶捕捉的效率，並且能夠生成結構化的記憶資料。效能方面，這個系統能夠處理大量的上下文資料，並使用 SQLite 進行快速查詢，這在資料量較小時表現良好，但在高負載情況下可能會出現瓶頸。選擇 Python 和 Swift 作為開發語言，讓這個專案在 macOS 環境中有良好的整合性，但也使得它的跨平台能力受到限制。技術風險方面，依賴於 macOS 的特性可能會在未來的版本中造成兼容性問題，並且對於外部 API 的依賴也需謹慎管理。整合方面，與主流的開發工具鏈（如 VS Code）相容性尚待進一步驗證，這可能會影響團隊的採用和使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程需要確保 macOS 和 Xcode Command Line Tools 的正確配置，這可能會對某些用戶造成困難。整體上，文件的結構合理，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 本地優先設計，保護用戶隱私。
> - 開放源碼，支持多種 LLM 模型。
> - 結構化的記憶存儲，便於檢查和修改。

> [!danger] 缺點
> - 僅支持 macOS，限制了使用範圍。
> - 目前功能尚不穩定，處於 alpha 階段。
> - 記憶管理和上下文解析功能仍需改進。

> [!warning] 注意事項
> - 僅支持 macOS 系統。
> - 目前處於 alpha 階段，功能尚不穩定。
> - 記憶管理和上下文解析仍需改進。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個更為全面的代理框架，但不專注於本地記憶的捕捉和管理。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於集成 Obsidian 的記憶管理，但不支持多種 LLM 模型。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一個開放的記憶系統，但缺乏本地優先的設計理念。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個更為全面的代理框架，但不專注於本地記憶的捕捉和管理。 | 如果需要一個多功能的代理框架，並且不特別關注記憶管理的話。 | medium，因為需要重新設計記憶管理的邏輯。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於集成 Obsidian 的記憶管理，但不支持多種 LLM 模型。 | 如果團隊已經在使用 Obsidian 並需要記憶管理功能。 | low，因為可以直接使用 Obsidian 的生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了一個開放的記憶系統，但缺乏本地優先的設計理念。 | 如果需要一個開放的記憶系統，但不在乎本地存儲的優勢。 | medium，需要調整記憶存儲的方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenChronicle** | **agent-sprite-forge** | **claude-obsidian** | **boneyard** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供了一個更為全面的代理框架，但不專注於本地記憶的捕捉和管理。 | 專注於集成 Obsidian 的記憶管理，但不支持多種 LLM 模型。 | 提供了一個開放的記憶系統，但缺乏本地優先的設計理念。 |
> | 遷移成本 | - | medium，因為需要重新設計記憶管理的邏輯。 | low，因為可以直接使用 Obsidian 的生態系統。 | medium，需要調整記憶存儲的方式。 |
> | 適用場景 | 主要場景 | 如果需要一個多功能的代理框架，並且不特別關注記憶管理的話。 | 如果團隊已經在使用 Obsidian 並需要記憶管理功能。 | 如果需要一個開放的記憶系統，但不在乎本地存儲的優勢。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 目前僅支持 macOS，其他平台無法使用。
  - 解法：無法解決，需等待未來版本的支持。
- [MEDIUM] 功能尚不穩定，可能會出現錯誤。
  - 解法：定期檢查更新，參與社群討論以獲取最新資訊。
- **[HIGH]** 記憶管理功能仍需改進，可能導致資料丟失。
  - 解法：定期備份記憶資料，使用者需自行管理。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的本地 AI 記憶系統 | 非常適合 | 本地優先設計能夠保護用戶隱私，且支持多種 LLM 模型。 |
| 大型企業的記憶管理需求 | 不適合 | 目前僅支持 macOS，無法滿足跨平台需求。 |
| 個人開發者的 AI 助手 | 適合 | 能夠提供可檢查的記憶系統，適合個人使用。 |
| 需要高效能記憶系統的研究機構 | 普通 | 雖然有本地存儲優勢，但目前功能尚不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到一個本地優先的記憶系統，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限，且所有資料存儲在本地，對敏感資料的存取風險較低。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
| Forks | 201 |
| Open Issues | 16 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-04-21 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Einsia/OpenChronicle) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 86
>     "Swift" : 11
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KMing-L](https://github.com/KMing-L) | 11 |
> | [@Xiao-ao-jiang-hu](https://github.com/Xiao-ao-jiang-hu) | 7 |
> | [@Chen17-sq](https://github.com/Chen17-sq) | 5 |
> | [@abmfy](https://github.com/abmfy) | 3 |
> | [@slb1988](https://github.com/slb1988) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的提交和問題解決。
**連結**：[文件](https://github.com/Einsia/OpenChronicle)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-25 ~ 2026-04-26）
> **活躍天數** 2 天 · **最新 commit** refactor(cli): tidy status helpers + tests

## README 摘錄

> [!info]- 展開查看原文 README
> OpenChronicle
> 
>   Open-source, local-first memory for any tool-capable LLM agent.
> 
>   Think OpenAI Chronicle - but open, model-agnostic, inspectable, and hackable.
> 
> ---
> 
>   
>     
>       
>       
>       
>     
>   
> 
> > **Status:** v0.1.0 · macOS only · early alpha
> 
> OpenChronicle gives AI agents a local, inspectable memory built from real screen and app context.
> 
> It runs on your Mac, captures structured context from what you're doing, and turns it into persistent Markdown memory: what you're working on, what you've decided, which tools you use, and which people or projects matter.
> 
> Any agent that can call tools can use it. MCP clients work especially well today, but OpenChronicle is meant to be a general memory layer for tool-using agents - not something tied to one protocol, one model provider, or one app.
> 
> ---
> 
> ## Why OpenChronicle
> 
> OpenAI Chronicle points to an important future: agents that remember your real working context.
> 
> OpenChronicle is our open alternative:
> 
> - **Local-first** - memory stays on your machine
> - **Model-agnostic** - use Ollama, LM Studio, OpenAI, Anthropic, or any LiteLLM-compatible provider
> - **Tool-friendly** - usable by any tool-capable agent
> - **Inspectable** - Markdown on disk, SQLite locally
> - **Open** - MIT-licensed and built to be extended
> 
> ---
> 
> ## Why AX-first
> 
> OpenChronicle currently prioritizes **AX Tree / accessibility-tree context** as its primary signal, with screenshots as a secondary signal over time.
> 
> We think this is the right tradeoff for an early memory system:
> 
> - **Lower cost** - structured text is far cheaper to process than screenshot-heavy OCR / vision pipelines
> - **Better intent capture** - AX is often better for active app, focused element, edited text, URL, and interaction state
> - **Smaller, cleaner memory** - easier to deduplicate, normalize, index, and retain long-term
> - **Better foundation** - screenshots can later enrich visual context where AX falls short
> 
> > **AX-first for accurate, compact, low-cost memory; screenshot-assisted for richer multimodal context.**
> 
> ---
> 
> ## OpenChronicle vs OpenAI Chronicle
> 
> |                     | OpenAI Chronicle                | **OpenChronicle**                              |
> | ------------------- | ------------------------------- | ---------------------------------------------- |
> | Source              | Closed                          | **MIT, open-source**                           |
> | Model choice        | OpenAI-centric                  | **Your choice**                                |
> | Who can use it      | Product-specific workflow       | **Any tool-capable agent**                     |
> | Primary capture     | Screenshot / OCR-heavy          | **AX Tree first**, screenshot-assisted         |
> | Storage             | Local generated memories        | **Markdown + SQLite on your machine**          |
> | Extensibility       | Limited                         | **Hackable parsers, memory logic, integrations** |
> 
> ---
> 
> ## How it works
> 
> ```mermaid
> flowchart LR
>     W[mac-ax-watcherevents]
>     S0["S0 dispatcherdedup · debouncemin-gap"]
>     S1["S1 parserfocused_elementvisible_text · url"]
>     BUF[(capture-buffer/*.json)]
>     TL["Timelinenormalizer1-min · verbatim"]
>     TB[(timeline_blocks)]
>     SM["Session mgridle 5m · app-switch 3mmax 2h"]
>     S2["S2 reducer"]
>     ED[(event-YYYY-MM-DD.md)]
>     CLF["Classifier→ user- / project- / tool- /topic- / person- / org-*.md"]
>     STORE[("SQLite FTS5+ Markdown")]
> 
>     W --> S0 --> S1 --> BUF --> TL --> TB --> S2 --> ED --> CLF --> STORE
>     ED --> STORE
>     BUF -. pre_capture_hook(post-write · skipped on content-dedup) .-> SM
>     SM -. flush 5m / on_end .-> S2
>     TB -. grounding .-> CLF
> ```
> 
> The core idea is simple:
> 
> 1. capture context
> 2. compress it into sessions
> 3. extract durable facts
> 4. store memory locally
> 5. let agents query it through tools
> 
> ---
> 
> ## What you get
> 
> * **Event-driven capture** from macOS AX events
> * **Session-aware memory writing** instead of noisy per-snapshot logs
> * **Human-readable Markdown memory**
> * **Local SQLite indexing**
> * **Structured memory files** like user-, project-, tool-, topic-, person-, org-, and daily event-
> * **Supersede-not-delete history**
> * **Local or cloud model support**
> * **Always-on agent-readable interface**, with MCP as the best-supported path today
> 
> ---
> 
> ## Install
> 
> Requires **macOS 13+** and **Xcode Command Line Tools** (`xcode-select --install`).
> 
> ```bash
> git clone https://github.com/Einsia/OpenChronicle.git
> cd openchronicle
> bash install.sh
> ```
> 
> ---
> 
> ## Run
> 
> ```bash
> openchronicle start
> openchronicle start --foreground
> openchronicle status
> openchronicle pause
> openchronicle resume
> openchronicle stop
> ```
> 
> Useful inspection commands:
> 
> ```bash
> openchronicle capture-once
> openchronicle timeline tick
> openchronicle timeline list
> openchronicle writer run
> openchronicle rebuild-index
> ```
> 
> ---
> 
> ## Connect an agent
> 
> OpenChronicle is designed for **tool-calling agents**.
> 
> ### Best-supported path today: MCP
> 
> The daemon hosts an MCP endpoint at:
> 
> ```bash
> http://127.0.0.1:8742/mcp
> ```
> 
> Supported integration paths include:
> 
> * Claude Code
> * Claude Desktop
> * Codex
> * opencode
> * custom local agents
> * and more...
> 
> See [docs/mcp.md](docs/mcp.md) for setup details.
> 
> ---
> 
> ## Contributing
> 
> We especially want help in three areas:
> 
> ### 1. Better context parsers
> 
> App-specific parsing and normalization for browsers, terminals, editors, Slack, Notion, Cursor, Linear, Figma, and more.
> 
> ### 2. Better memory management
> 
> Session reduction, durable-fact extraction, compaction, supersede / merge logic, and retrieval quality.
> 
> ### 3. More agent integrations
> 
> Support for more MCP clients, IDE agents, coding assistants, desktop agents, and local orchestration frameworks.
> 
> If you care about local-first agents, personal AI memory, or open context infrastructure, this project is for you.
> 
> ---
> 
> Documentation
> 
> * [docs/architecture.md](docs/architecture.md) - end-to-end pipeline and code layout
> * [docs/config.md](docs/config.md) - configuration and model setup
> * [docs/capture.md](docs/capture.md) - event-driven capture and AX details
> * [docs/timeline.md](docs/timeline.md) - normalization and anti-hallucination design
> * [docs/session.md](docs/session.md) - session cutting rules
> * [docs/writer.md](docs/writer.md) - reducer, classifier, and retry model
> * [docs/mcp.md](docs/mcp.md) - current tool surface and integrations
> * [docs/memory-format.md](docs/memory-format.md) - file layout and supersede semantics
> * [docs/troubleshooting.md](docs/troubleshooting.md) - common issues
> 
> ---
> 
> ## Development
> 
> ```bash
> uv sync --all-extras
> uv run pytest
> uv run ruff check
> ```
> 
> ---
> 
> ## License
> 
> MIT.
> ## Contributors ✨
> 
> Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
> 
>   
>     
>       Qianli Ren💻 🚧
>       Bowen Wang💻 🚧
>       CrazyCalvin💻
>       Firefly💻
>       校奥浆糊💻 🚧
>       Houde Qian💻
>       GiddensF97🎨
>     
>     
>       SiyiZhu1🎨
>     
>   
> 
> This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[記憶管理]] · [[本地優先設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/Einsia/OpenChronicle)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶系統" AND file.name != "Einsia--OpenChronicle"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Einsia--OpenChronicle"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Einsia--OpenChronicle" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "Einsia--OpenChronicle"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","記憶管理","本地優先設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Einsia--OpenChronicle" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Einsia--OpenChronicle" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Einsia" AND file.name != "Einsia--OpenChronicle"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
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
> const me = dv.page("Repos/Einsia--OpenChronicle");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 再次上榜，1.6k stars
- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.1k stars
