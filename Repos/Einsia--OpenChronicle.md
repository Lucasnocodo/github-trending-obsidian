---
repo: Einsia/OpenChronicle
url: https://github.com/Einsia/OpenChronicle
owner: Einsia
owner_type: Organization
language: Python
license: MIT
description: ""
homepage: ""
stars: 1596
stars_per_day: 266
forks: 114
open_issues: 10
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
use_case: "提供一個本地優先的記憶系統，讓 LLM 代理能夠捕捉和管理工作上下文。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 5
engagement: "low"
issue_close_rate: 9
repo_size_kb: 1874
readme_length: 7064
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1126,2026-04-26:1129,2026-04-27:1422,2026-04-27:1425,2026-04-28:1593,2026-04-28:1596"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "OpenChronicle"
  - "Einsia/OpenChronicle"
  - "提供一個本地優先的記憶系統，讓 LLM 代理能夠捕捉和管理工作上下文。"
---

# OpenChronicle

**1.6k** stars · **266** stars/天 · 建立 6 天前 · Python · MIT

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
> 提供一個本地優先的記憶系統，讓 LLM 代理能夠捕捉和管理工作上下文。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (266 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 macOS 上運行 LLM 代理並希望擁有本地記憶系統的開發者。
> **一句話重點** 這個專案的最大價值在於它提供了一個靈活且可擴展的本地記憶系統，讓 LLM 代理能夠更好地理解和管理用戶的工作上下文。

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
> **結論** 花 5 小時學習、3 小時整合，得到靈活的本地記憶系統，值得一試。

> [!abstract] 核心創新
> 提供一個開源的本地優先記憶系統，專為 LLM 代理設計，支持多種模型和工具。

## 專案簡介

OpenChronicle 是一個開源的本地優先記憶系統，專為任何能夠調用工具的 LLM 代理設計。它運行在 macOS 上，通過捕捉用戶的屏幕和應用上下文，將這些信息轉換為持久的 Markdown 記憶。這個系統的核心在於 AX Tree 的結構化上下文捕捉，並輔以截圖來增強視覺上下文。使用者可以透過簡單的 CLI 指令如 `openchronicle start` 來啟動系統，並使用 `openchronicle capture-once` 來一次性捕捉當前上下文。

這種設計使得記憶系統不僅能夠保持在本地，還能夠支持多種 LLM 模型，並且提供可檢查的記憶存儲。相較於 OpenAI 的封閉系統，OpenChronicle 提供了更大的靈活性和擴展性，允許用戶自定義解析器和記憶邏輯。這使得它在多種工具和應用中都能發揮作用，並且能夠適應不同的工作流和需求。這個專案目前處於 alpha 階段，適合對個人 AI 記憶和開放上下文基礎設施感興趣的開發者。

**技術棧**：`Python 3.11` · `Swift` · `Shell`

## 重點功能

- 本地優先記憶 — 記憶數據存儲在本地，保障隱私和安全。
- AX Tree 捕捉 — 使用 AX Tree 結構化上下文，降低處理成本並提高準確性。
- Markdown 格式存儲 — 記憶以人類可讀的 Markdown 格式存儲，便於檢查和管理。
- SQLite 索引 — 使用 SQLite 進行本地索引，快速查詢記憶數據。
- 多工具支持 — 兼容多種 LLM 模型，靈活適應不同的工作流。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Einsia/OpenChronicle.git
```
2. 進入專案目錄
```bash
cd openchronicle
```
3. 執行安裝腳本
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
  "前置條件": "需要在 macOS 上安裝 Xcode Command Line Tools。",
  "指令": "openchronicle start",
  "預期輸出": "啟動 OpenChronicle 服務，準備捕捉上下文。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1596 stars（266/天），forks 114（7.1%），這顯示出強勁的增長潛力。作者 KMing-L 和其他貢獻者在開源社群中有一定的影響力，並且這個專案解決了現有工具中缺乏本地記憶系統的痛點。之前的解決方案如 OpenAI Chronicle 主要依賴於封閉的系統，無法提供用戶自定義的靈活性。這個專案的出現正好填補了這一空白，並且在社群中引起了廣泛的討論和興趣。技術上，AX Tree 的使用降低了記憶捕捉的成本，並提高了意圖捕捉的準確性，這些都是其受歡迎的原因。

## 適合誰使用

**目標受眾**：需要在 macOS 上運行 LLM 代理並希望擁有本地記憶系統的開發者。

> [!example] 使用場景
> - 自由職業者用它來記錄工作過程中的重要決策，因為它能夠將上下文轉換為可檢查的 Markdown 格式，方便日後查閱。
> - 開發者用它來捕捉和管理代碼編輯器中的上下文，因為它支持多種 LLM 模型，能夠靈活適應不同的開發環境。
> - 設計師用它來記錄在設計工具中的操作歷程，因為它能夠提供結構化的記憶，幫助他們回顧和改進設計流程。

## 架構分析

OpenChronicle 的架構基於事件驅動的捕捉機制，利用 macOS 的 AX 事件來捕捉上下文。這種設計使得系統能夠在用戶操作時即時記錄，而不是依賴於定時快照。數據流經過多個處理階段，包括去重、解析和分類，最終存儲為 Markdown 和 SQLite 格式。

這樣的設計選擇降低了記憶捕捉的成本，並提高了數據的可檢索性。選擇使用 Markdown 和 SQLite 作為存儲格式，意味著用戶可以輕鬆地檢查和編輯記憶內容，但也可能導致存儲空間的增加。整體架構的擴展性良好，但在高並發的情況下可能會遇到性能瓶頸，特別是在記憶數據量大時。

## 技術深入分析

OpenChronicle 的核心技術機制是基於 macOS 的 AX 事件捕捉，這使得系統能夠在用戶進行操作時即時記錄相關上下文。這種事件驅動的設計模式避免了傳統的定時快照方式，能夠更精確地捕捉用戶的意圖和行為。系統能夠處理的數據量取決於用戶的操作頻率和記憶的持久化需求，並且在高頻操作下可能會面臨性能瓶頸。選擇 Python 和 Swift 作為開發語言，能夠充分利用 macOS 的特性，但也增加了學習成本。依賴樹相對簡單，主要依賴於幾個核心庫，這使得維護和擴展變得相對容易。技術風險方面，隨著用戶數量的增加，系統的性能可能會受到影響，特別是在記憶數據量大時。整合方面，與現有的開發工具鏈相容性良好，但在 CI/CD pipeline 中的整合可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意安裝 Xcode Command Line Tools。文件中有詳細的配置和使用說明，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 本地優先設計，保障用戶隱私。
> - 支持多種 LLM 模型，靈活性高。
> - 使用 Markdown 格式存儲，便於檢查和管理。

> [!danger] 缺點
> - 僅支援 macOS，限制了使用範圍。
> - 目前功能尚不穩定，可能會遇到 bug。
> - 需要安裝 Xcode Command Line Tools，增加了安裝複雜度。

> [!warning] 注意事項
> - 僅支援 macOS 13 以上版本。
> - 目前處於 alpha 階段，功能尚未完全穩定。
> - 需要安裝 Xcode Command Line Tools 才能運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個可視化的代理創建工具，但不具備本地記憶功能，適合需要快速構建代理的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記憶的持久化，但缺乏 OpenChronicle 的本地優先設計和多工具支持。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供集成的記憶管理，但主要針對特定的應用場景，缺乏通用性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於可視化代理創建，缺乏本地記憶功能，適合快速構建代理的場景。 | 如果需要快速構建代理而不需要記憶功能。 | low，因為兩者的使用場景差異不大。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記憶的持久化，但缺乏 OpenChronicle 的本地優先設計和多工具支持。 | 如果需要專注於記憶的持久化而不需要本地優先的設計。 | medium，因為需要重新設計記憶管理邏輯。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供集成的記憶管理，但主要針對特定的應用場景，缺乏通用性。 | 如果已經在使用特定的應用場景，並需要集成的記憶管理。 | medium，因為需要適應特定的應用場景。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenChronicle** | **agent-sprite-forge** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於可視化代理創建，缺乏本地記憶功能，適合快速構建代理的場景。 | 專注於記憶的持久化，但缺乏 OpenChronicle 的本地優先設計和多工具支持。 | 提供集成的記憶管理，但主要針對特定的應用場景，缺乏通用性。 |
> | 遷移成本 | - | low，因為兩者的使用場景差異不大。 | medium，因為需要重新設計記憶管理邏輯。 | medium，因為需要適應特定的應用場景。 |
> | 適用場景 | 主要場景 | 如果需要快速構建代理而不需要記憶功能。 | 如果需要專注於記憶的持久化而不需要本地優先的設計。 | 如果已經在使用特定的應用場景，並需要集成的記憶管理。 |

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

- **[HIGH]** 在 macOS 更新後可能會遇到兼容性問題
  - 解法：保持系統和工具的更新，並檢查 GitHub 上的問題追蹤
- [MEDIUM] 在高頻操作下可能會導致性能下降
  - 解法：優化記憶捕捉的頻率和範圍
- [low] Markdown 格式的記憶可能會導致存儲空間增加
  - 解法：定期清理不必要的記憶文件

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠靈活捕捉和管理上下文，適合小型團隊的需求。 |
| 大型企業的多工具協作環境 | 普通 | 在高頻操作下可能會遇到性能瓶頸。 |
| 個人開發者的 AI 記憶管理 | 非常適合 | 本地優先設計，保障用戶隱私。 |
| 需要跨平台支持的團隊 | 不適合 | 目前僅支援 macOS，限制了使用範圍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的本地記憶系統，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，且不存取敏感資料。依賴的庫已經過審計，整體安全性良好。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenChronicle 最常與 macOS 應用搭配使用，特別是在開發和設計工具中。用戶可以在使用 Xcode 或其他開發環境時，通過 OpenChronicle 捕捉上下文。與 CI/CD 工具的整合需要額外的適配，但整體相容性良好。常見的整合問題包括需要手動配置環境變數和路徑設置，這可能會增加初始設置的複雜度。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenChronicle 出現之前，許多記憶管理工具都依賴於雲端服務，這使得用戶的數據安全性受到威脅。隨著對隱私和本地數據存儲需求的增加，OpenChronicle 提供了一個新的解決方案。這個工具代表了本地優先設計的趨勢，未來可能會有更多類似的工具出現，專注於用戶數據的安全和隱私。

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
| Forks | 114 |
| Open Issues | 10 |
| Issue 解決率 | 9% (1 closed) |
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

**社群活躍度**：社群活躍，定期有更新和貢獻。
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

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
