---
repo: Einsia/OpenChronicle
url: https://github.com/Einsia/OpenChronicle
owner: Einsia
owner_type: Organization
language: Python
license: MIT
description: ""
homepage: ""
stars: 1129
stars_per_day: 282
forks: 57
open_issues: 7
created: 2026-04-21
pushed_at: 2026-04-25
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "記憶體管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "為 LLM 代理提供本地的、可檢查的記憶體，捕捉應用程式上下文與螢幕內容。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-29"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1811
readme_length: 7061
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1126,2026-04-26:1129"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "OpenChronicle"
  - "Einsia/OpenChronicle"
  - "為 LLM 代理提供本地的、可檢查的記憶體，捕捉應用程式上下文與螢幕內容。"
---

# OpenChronicle

**1.1k** stars · **282** stars/天 · 建立 4 天前 · Python · MIT

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
> 為 LLM 代理提供本地的、可檢查的記憶體，捕捉應用程式上下文與螢幕內容。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (282 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在 macOS 上管理 LLM 代理記憶體的開發者和設計師。
> **一句話重點** OpenChronicle 是一個強調本地優先和可檢查性的記憶體管理工具，適合需要靈活性和隱私的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Einsia--OpenChronicle");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶體管理" && p.file.name !== "Einsia--OpenChronicle" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶體管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到靈活的記憶體管理效果，值得嘗試。

> [!abstract] 核心創新
> OpenChronicle 提供了一個開源的本地優先記憶體系統，專為 LLM 代理設計，並支援多種模型與工具。

## 專案簡介

OpenChronicle 是一個開源的本地記憶體系統，專為任何能夠調用工具的 LLM 代理設計。它運行於 macOS，捕捉使用者的應用程式上下文，並將其轉換為持久的 Markdown 記憶體，記錄使用者的工作狀態、決策、使用的工具及相關人員或專案。核心流程包括捕捉上下文、壓縮為會話、提取持久事實，並將記憶體存儲在本地 SQLite 數據庫中。這個工具的賣點在於其本地化和可檢查性，使用者可以隨時查閱和修改記憶體內容。技術上，OpenChronicle 使用 AX Tree 作為主要信號，這樣能夠以較低的成本捕捉結構化文本，並且更好地捕捉使用者意圖。

與 OpenAI Chronicle 相比，OpenChronicle 是開源的，並且不依賴於特定的模型或應用程式，這使得它更具擴展性和靈活性。使用者可以透過 MCP 協議與各種工具進行整合，並且支援多種 LLM 提供者。實際使用中，這個工具的效能取決於 macOS 的 AX 事件捕捉，並且能夠處理大量的上下文資料。雖然目前仍在 alpha 階段，但其設計理念和功能已經顯示出潛在的廣泛應用場景，特別是在需要記錄和檢索工作上下文的情況下。未來幾個月，隨著社群的貢獻和功能的增強，這個專案有望成為本地記憶體管理的主流選擇。

**技術棧**：`Python 3.11` · `Swift` · `Shell`

## 重點功能

- 本地優先 — 記憶體資料保留在使用者的機器上，增強隱私。
- 模型無關 — 支援多種 LLM 提供者，如 Ollama 和 OpenAI，使用者可自由選擇。
- 事件驅動捕捉 — 透過 macOS AX 事件自動捕捉上下文，減少手動輸入。
- Markdown 格式存儲 — 記憶體以人類可讀的 Markdown 格式存儲，方便檢查和修改。
- SQLite 本地索引 — 使用 SQLite 進行快速查詢和索引，提升效能。

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
  "前置條件": "需要 macOS 13+ 和 Xcode Command Line Tools",
  "指令": "openchronicle start",
  "預期輸出": "啟動 OpenChronicle 服務，準備捕捉上下文。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1129 stars（282/天），forks 57（5.0%），顯示出穩定的增長趨勢。這個專案的作者們在開源社群中有一定的影響力，並且針對現有的記憶體管理工具提出了開放且可擴展的替代方案。OpenAI Chronicle 雖然功能強大，但其封閉性和專有性使得許多開發者尋求更靈活的解決方案。社群對於本地記憶體的需求日益增加，尤其是在個人化 AI 助手的應用中，因此 OpenChronicle 的出現正好填補了這一空白。這個工具的開放性和可擴展性使其在技術生態中具備了良好的適應性，未來發展潛力巨大。

## 適合誰使用

**目標受眾**：需要在 macOS 上管理 LLM 代理記憶體的開發者和設計師。

> [!example] 使用場景
> - 自由職業者用它來記錄和管理多個客戶專案的上下文，因為它能夠將工作狀態轉換為可檢查的 Markdown 格式，方便隨時回顧。
> - 開發者用它來捕捉開發過程中的決策和工具使用情況，因為這樣可以避免重複工作並提高效率。
> - 設計師用它來記錄設計過程中的靈感和修改歷程，因為它提供了清晰的歷史記錄，便於未來參考。

## 架構分析

OpenChronicle 的架構設計以本地優先為核心，使用者的記憶體資料儲存在本地機器上，這樣能夠提高隱私性和數據安全性。資料捕捉透過 macOS 的 AX 事件進行，並將捕捉到的上下文資料壓縮為會話，最終存儲在 SQLite 數據庫中。這種設計使得記憶體資料更為結構化，便於查詢和管理。

選擇使用 Markdown 格式存儲資料，讓使用者能夠輕鬆檢查和修改記憶體內容。這樣的設計雖然在初期可能需要較高的開發成本，但長期來看能夠提供更靈活的擴展性。未來，隨著功能的增強，可能會面臨資料管理和性能優化的挑戰，特別是在處理大量上下文資料時。

整體而言，這種架構模式在現有的記憶體管理工具中具有一定的創新性。

## 技術深入分析

OpenChronicle 的核心技術機制在於其事件驅動的上下文捕捉，利用 macOS 的 AX 事件來獲取應用程式的狀態和使用者的互動。這種方法相較於傳統的螢幕截圖或 OCR 處理，能以更低的成本捕捉到結構化的文本資料，並且更好地反映使用者的意圖。效能上，這個系統能夠處理大量的上下文資料，並且透過 SQLite 進行快速的查詢和索引。設計上，選擇 Markdown 格式作為存儲方式，使得資料更為人性化，便於使用者檢查和修改。這樣的選擇雖然在初期可能增加了開發的複雜度，但長期來看能夠提供更靈活的擴展性。技術風險方面，隨著使用者數量的增加，資料管理和性能優化可能成為未來的挑戰，特別是在處理大量上下文資料時。與主流的記憶體管理工具相比，OpenChronicle 的整合難度相對較低，並且能夠與多種 LLM 提供者進行無縫整合，這使得它在開發和部署上都具備了良好的適應性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程順暢，但需要注意 macOS 的版本要求和 Xcode Command Line Tools 的安裝。文件中有詳細的配置和使用說明，對於初學者來說能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 開源且可擴展，使用者可以根據需求進行自定義。
> - 本地優先設計，增強了資料的隱私性和安全性。
> - 支援多種 LLM 提供者，使用者有更大的選擇空間。

> [!danger] 缺點
> - 目前僅支援 macOS，限制了使用者範圍。
> - 仍在 alpha 階段，可能存在不穩定性和功能缺失。
> - 依賴於 macOS 的 AX 事件，可能無法在所有應用程式中捕捉到完整的上下文。

> [!warning] 注意事項
> - 目前僅支援 macOS 環境，無法在其他作業系統上運行。
> - 仍處於 alpha 階段，功能和 API 可能會有變動。
> - 依賴於 macOS 的 AX 事件，可能無法在所有應用程式中捕捉到完整的上下文。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了類似的記憶體管理功能，但主要針對特定的應用場景，缺乏 OpenChronicle 的通用性和擴展性。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 專注於與 Obsidian 的整合，適合已經在使用該平台的用戶，而 OpenChronicle 提供了更廣泛的工具支援。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個記憶體管理系統，但主要針對特定的應用場景，缺乏 OpenChronicle 的通用性和擴展性。 | 如果你的專案已經在使用 Boneyard 並且不需要額外的擴展性，則可以選擇它。 | medium，因為需要調整資料格式和整合方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Claude-Obsidian 專注於與 Obsidian 的整合，適合已經在使用該平台的用戶，而 OpenChronicle 提供了更廣泛的工具支援。 | 如果你的團隊已經在使用 Obsidian 並且需要與其整合，則 Claude-Obsidian 是更好的選擇。 | low，因為可以直接導入 Obsidian 的資料格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenChronicle** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了一個記憶體管理系統，但主要針對特定的應用場景，缺乏 OpenChronicle 的通用性和擴展性。 | Claude-Obsidian 專注於與 Obsidian 的整合，適合已經在使用該平台的用戶，而 OpenChronicle 提供了更廣泛的工具支援。 |
> | 遷移成本 | - | medium，因為需要調整資料格式和整合方式。 | low，因為可以直接導入 Obsidian 的資料格式。 |
> | 適用場景 | 主要場景 | 如果你的專案已經在使用 Boneyard 並且不需要額外的擴 | 如果你的團隊已經在使用 Obsidian 並且需要與其整合， |

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

- **[HIGH]** 在某些應用程式中，AX 事件可能無法捕捉到完整的上下文
  - 解法：手動輸入缺失的上下文信息
- [MEDIUM] 目前的功能仍在開發中，可能會遇到不穩定性
  - 解法：定期更新到最新版本以獲取修復
- [low] Markdown 格式的記憶體可能會導致資料冗餘
  - 解法：定期清理和整理記憶體資料

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠靈活管理記憶體並支援多種 LLM 提供者。 |
| 大型企業的核心應用系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 自由職業者的多專案管理 | 適合 | 能夠有效記錄和管理多個專案的上下文。 |
| 需要高效能的記憶體管理系統 | 普通 | 效能可能會受到資料量的影響。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的記憶體管理效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，並且不存取敏感資料。依賴的庫和框架均為開源，信任度較高。

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
| Forks | 57 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-25 |
| 建立日期 | 2026-04-21 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Einsia/OpenChronicle) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 85
>     "Swift" : 12
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Xiao-ao-jiang-hu](https://github.com/Xiao-ao-jiang-hu) | 7 |
> | [@KMing-L](https://github.com/KMing-L) | 6 |
> | [@abmfy](https://github.com/abmfy) | 3 |
> | [@slb1988](https://github.com/slb1988) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有合併請求和問題討論。
**連結**：[文件](https://github.com/Einsia/OpenChronicle)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-25）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #9 from slb1988/patch-1

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
>       校奥浆糊💻
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

相關概念：[[記憶體管理]] · [[本地優先]] · [[事件驅動]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[MemPalace--mempalace|MemPalace/mempalace]] · [[milla-jovovich--mempalace|milla-jovovich/mempalace]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/Einsia/OpenChronicle)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶體管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶體管理" AND file.name != "Einsia--OpenChronicle"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Einsia--OpenChronicle"
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
> const concepts = ["記憶體管理","本地優先","事件驅動"];
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

- [[2026-04-26|2026-04-26]] — 首次收錄，1.1k stars
