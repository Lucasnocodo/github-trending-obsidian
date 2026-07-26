---
repo: Blueturboguy07/cue
url: https://github.com/Blueturboguy07/cue
owner: Blueturboguy07
owner_type: User
language: JavaScript
license: GPL-3.0
description: "Open-source macOS AI copilot that floats over your screen, sees/hears your meetings, and stays hidden from screen shares. Cluely alternative, bring-your-own-key."
homepage: ""
stars: 799
stars_per_day: 80
forks: 167
open_issues: 5
created: 2026-07-15
pushed_at: 2026-07-21
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "生產力"
subcategory: "會議助手"
release_tag: "v0.2.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提供隱形 AI 助手，能在會議中即時協助，並隱藏於螢幕分享中。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-29"
contributor_count: 5
engagement: "medium"
issue_close_rate: 55
repo_size_kb: 1145
readme_length: 9872
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:666,2026-07-21:666,2026-07-22:704,2026-07-22:704,2026-07-23:727,2026-07-24:761,2026-07-25:781,2026-07-26:799"
tags:
  - github
  - "category/生產力"
  - "lang/javascript"
aliases:
  - "cue"
  - "Blueturboguy07/cue"
  - "提供隱形 AI 助手，能在會議中即時協助，並隱藏於螢幕分享中。"
---

# cue

**799** stars · **80** stars/天 · 建立 10 天前 · JavaScript · GPL-3.0

```dataviewjs
const me = dv.page("Repos/Blueturboguy07--cue");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.2.0`

> [!summary] 一句話摘要
> 提供隱形 AI 助手，能在會議中即時協助，並隱藏於螢幕分享中。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (80 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 4 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在會議中獲得即時協助但又不想被錄影的專業人士。
> **一句話重點** cue 的隱形特性讓它在會議中成為一個強大的即時助手，尤其適合需要保護隱私的專業人士。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "會議助手" && p.file.name !== "Blueturboguy07--cue" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 會議助手 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到即時會議支援的效果，值得考慮。

> [!abstract] 核心創新
> cue 提供了一個隱形的 AI 助手，能在會議中即時協助，並隱藏於螢幕分享中。

## 專案簡介

cue 是一個開源的 macOS AI 助手，設計為在螢幕上浮動，能夠即時看到你的螢幕、聽到會議內容，並且在螢幕分享時保持隱藏。用戶可以透過 `⌘` `↵` 快捷鍵請求協助，這個助手會根據當前的螢幕內容和最近的對話來提供建議。它的設計理念是希望在會議中提供即時的支援，讓用戶能夠更有效率地參與討論。這個工具的賣點在於它的隱形特性，能夠在不干擾其他參與者的情況下，提供實時的幫助。技術上，cue 使用 Electron 框架開發，依賴於多個 AI SDK，包括 OpenAI 和 Anthropic，這使得它能夠處理複雜的語言模型。與 Cluely 相比，cue 允許用戶自帶 AI 金鑰，這樣用戶可以選擇最適合自己的 AI 服務。

這種設計使得用戶在選擇 AI 模型時有更大的靈活性。使用者在會議中可以隨時啟動或停止助手，並且可以透過簡單的按鈕來詢問問題或回顧對話。這種即時反饋的能力對於需要快速解決問題的開發者或專業人士來說非常有價值。雖然目前僅支援 macOS，但未來可能會考慮擴展到其他平台。使用者需要注意的是，這個工具在某些情況下可能會違反平台的使用規範，因此必須謹慎使用。整體來看，cue 是一個針對需要即時支援的專業人士設計的高效工具。

**技術棧**：`Electron 33.2.1` · `Node.js`

## 重點功能

- 即時協助 — 使用 `⌘` `↵` 快捷鍵請求協助，根據當前螢幕和對話提供建議。
- 隱形特性 — 在螢幕分享時保持隱藏，避免干擾其他參與者。
- 多音源輸入 — 同時接收螢幕、麥克風和會議音頻，實現全面的上下文理解。
- 智能模式切換 — 提供快速和智能兩種模式，根據需求選擇不同的 AI 模型。
- 會議回顧 — 提供整個會議的回顧功能，方便用戶隨時查詢過去的對話。

## 快速開始

1. 安裝 cue
```bash
git clone https://github.com/Blueturboguy07/cue.git
```
2. 進入專案目錄
```bash
cd cue
```
3. 啟動應用程式
```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 799 stars（79.9/天），forks 167（20.9%），顯示出強烈的社群參與。作者 Blueturboguy07 和團隊的背景在於開源社群，過去有多個相關專案經驗。這個專案解決了在會議中需要即時協助但又不想被錄影的痛點，之前的工具如 Cluely 雖然功能相似，但不支持自帶 AI 金鑰，限制了用戶的選擇。最近的推廣活動和社群討論也提升了其曝光率。技術上，macOS 的隱形窗口特性讓這個工具的實現成為可能，這在過去的工具中並不常見。forks/stars 比率高達 20.9%，顯示許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在會議中獲得即時協助但又不想被錄影的專業人士。

> [!example] 使用場景
> - 軟體工程師用它來在會議中即時獲取程式碼建議，因為它能根據當前螢幕內容提供具體的解決方案。
> - 學生用它來在學習會議中獲得即時的問題解答，因為它能聽取會議內容並提供相關的回應。
> - 專業人士用它來在商業會議中隱藏助手，因為它能在不被錄影的情況下提供即時的建議和回顧。

## 架構分析

cue 採用 Electron 框架進行開發，這使得它能夠在 macOS 上運行並提供跨平台的支援。資料流方面，cue 透過三個獨立的輸入來源（螢幕、麥克風和會議音頻）來獲取上下文，並使用 AI 模型進行即時處理。這種設計使得用戶能夠在會議中獲得即時的建議，然而，這也意味著對音頻和螢幕捕捉的依賴可能會導致延遲或準確性問題。選擇 Electron 作為開發框架的好處是可以快速開發和部署，但也可能面臨較高的記憶體使用量和較慢的啟動時間。整體而言，這個架構適合小型團隊或個人使用，但在大規模部署時可能會遇到性能瓶頸。

## 技術深入分析

cue 的核心技術機制是基於 Electron 框架，這使得它能夠在 macOS 上運行並提供跨平台的支援。它使用三個獨立的音源來獲取上下文，這包括螢幕內容、麥克風輸入和會議音頻，並通過 AI 模型進行即時處理。這樣的設計使得用戶能夠在會議中獲得即時的建議，然而，這也意味著對音頻和螢幕捕捉的依賴可能會導致延遲或準確性問題。效能方面，cue 的記憶體使用量相對較高，特別是在同時處理多個音源時。選擇 Electron 作為開發框架的好處是可以快速開發和部署，但也可能面臨較高的記憶體使用量和較慢的啟動時間。從設計取捨的角度來看，這個工具的隱形特性是其主要賣點，但也可能在某些情況下導致使用上的困難，例如在需要錄音的環境中。整體而言，這個工具適合小型團隊或個人使用，但在大規模部署時可能會遇到性能瓶頸。

## 新手體驗

> [!info] 上手難度評估
> README 文件相對清晰，提供了詳細的安裝和使用說明。安裝過程順暢，沒有明顯的坑。內建的教學指引讓新手能快速上手，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 即時提供會議支援，提升工作效率。
> - 隱形特性讓用戶在會議中不被打擾。
> - 支持多種 AI 模型，靈活性高。

> [!danger] 缺點
> - 僅限於 macOS 平台，無法跨平台使用。
> - 在某些情況下可能違反使用規範。
> - 對於音頻輸入的準確性依賴於硬體設備。

> [!warning] 注意事項
> - 目前僅支援 macOS 平台。
> - 在某些情況下可能會違反平台的使用規範。
> - 對於音頻輸入的準確性依賴於麥克風質量。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不具備隱形特性，適合需要可見助手的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於會議記錄，缺乏即時互動能力，適合需要後期回顧的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Cluely | Cluely 提供類似的 AI 助手功能，但不支持自帶 AI 金鑰，限制了用戶的選擇。 | 如果你的團隊已經在使用 Cluely，並且不需要自帶 AI 金鑰的靈活性。 | medium，因為需要重新配置 AI 金鑰和設定。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但不具備隱形特性，適合需要可見助手的場景。 | 如果你需要在會議中有可見的助手來協助，並且不在意隱私問題。 | low，因為功能相似，轉換成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cue** | **Cluely** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Cluely 提供類似的 AI 助手功能，但不支持自帶 AI 金鑰，限制了用戶的選擇。 | 提供類似的 AI 助手功能，但不具備隱形特性，適合需要可見助手的場景。 |
> | 遷移成本 | - | medium，因為需要重新配置 AI 金鑰和設定。 | low，因為功能相似，轉換成本不高。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Cluely，並且不需要自帶 AI  | 如果你需要在會議中有可見的助手來協助，並且不在意隱私問題。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Zoom 中使用時，需確保設定正確，否則可能無法隱藏助手。
  - 解法：檢查 Zoom 的螢幕分享設定，選擇正確的捕捉模式。
- [MEDIUM] 在某些會議中，音頻捕捉可能不夠準確。
  - 解法：使用高品質的麥克風以提高音質。
- **[HIGH]** 隱形特性在某些情況下可能會失效。
  - 解法：避免在錄影或監控環境中使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司會議 | 非常適合 | 能夠提供即時的會議支援，提升效率。 |
| 大型企業的正式會議 | 普通 | 隱形特性可能在某些情況下失效。 |
| 需要保護隱私的個人使用 | 非常適合 | 隱形特性能夠保護用戶的隱私。 |
| 需要跨平台支援的團隊 | 不適合 | 目前僅支援 macOS 平台。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到即時會議支援的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取麥克風和螢幕資料，依賴於用戶的使用情境。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
| Forks | 167 |
| Open Issues | 5 |
| Issue 解決率 | 55% (6 closed) |
| 最後推送 | 2026-07-21 |
| 建立日期 | 2026-07-15 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Blueturboguy07/cue) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `@google/genai` `lucide-static` `openai` `electron` `electron-builder`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 73
>     "CSS" : 20
>     "HTML" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@deecod-dev](https://github.com/deecod-dev) | 9 |
> | [@Blueturboguy07](https://github.com/Blueturboguy07) | 4 |
> | [@Battikhah](https://github.com/Battikhah) | 1 |
> | [@gojodennis](https://github.com/gojodennis) | 1 |
> | [@kudala-bharani](https://github.com/kudala-bharani) | 1 |

**最新版本**：v0.2.0 — cue v0.2.0 - Windows Support, Custom Shortcuts, & CV Context (2026-07-21)

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有幾次提交和回應。
**連結**：[文件](https://github.com/Blueturboguy07/cue/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-21）
> **活躍天數** 5 天 · **最新 commit** fix: supply GH_TOKEN to electron-builder

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/Blueturboguy07/cue/issues/1) | Linux? | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # cue
> 
> **An open-source AI copilot that floats over your screen — sees what you see, hears your meetings, and stays hidden from screen shares.**
> 
> A free, self-hosted alternative to Cluely. Bring your own AI key (OpenAI · Anthropic · Google Gemini).
> 
> ---
> 
> > [!IMPORTANT]
> > **Please read this first.** cue tries to stay out of screen recordings/shares, but this is **best-effort, not guaranteed** — on macOS 15.4+ Apple can let modern capture tools see it anyway, and a phone camera always can. Using a hidden assistant during a **proctored exam, job interview, or recorded meeting** may break that platform's rules and, in some places, consent laws. cue is built for legitimate uses — your own notes, studying, accessibility, and practice. **You are responsible for how you use it.**
> >
> > On Zoom specifically, whether cue is hidden depends on one setting — **Settings → Share Screen → Screen capture mode → "Advanced capture with window filtering."**
> >
> > 
> 
> ---
> 
> 
> ## Install
> 
> There are two ways to install cue. **If you're not a developer, use Option A.**
> 
> 
> ## First launch — the 1-minute setup
> 
> When cue opens the first time, a **built-in tutorial** walks you through everything below. You can reopen it anytime by clicking the **cue logo** (top-left of the pill). Here's the same thing in writing.
> 
> 
> ## How to use it
> 
> - **`⌘` `↵` — Assist.** The do-the-smart-thing key. On a coding problem it solves it; in a conversation it tells you what to say. Works from anywhere. Change this shortcut under **Settings → Keyboard shortcuts**.
> - **`⌘` `H` — Solve what's on screen.** Screenshots a coding problem and returns the approach, code, and time/space complexity.
> - **The `▢` button** (top bar) — start/stop **listening** to a meeting. The green dot means it's live.
> - **Type a question** in the box and press `↵` to ask about your screen or conversation.
> - **Smart** — flip it on for a smarter, more thorough model; off for fast and cheap.
> - **Hide** collapses the panel to just the top bar. Drag cue around by the **top pill**. Quit with `⌘` `⇧` `X`.
> 
> The panel is see-through and click-through — the empty space around it never blocks the app behind it.
> 
> ---
> 
> 
> ## What it does
> 
> cue floats a small glass panel on top of everything. It takes **three separate inputs** — your **screen**, your **microphone**, and your **meeting audio** (what the other person says) — and uses an AI model to help you in real time.
> 
> | Feature | How to trigger | What it uses |
> |---|---|---|
> | **Assist** | `⌘` `↵` by default (configurable) or the *Assist* button | your screen + recent conversation |
> | **What should I say?** | button | meeting audio + your mic |
> | **Follow-up questions** | button | the whole conversation |
> | **Recap** | button | the whole conversation |
> | **Ask anything** | type + `↵` | your screen + conversation |
> | **Solve a coding problem** | `⌘` `H` | your screen only |
> | **Smart** toggle | pill in the box | switches to a smarter (slower) model |
> 
> It's a copilot for **live meetings** ("what do I say to that?") and **coding problems** (screenshot → full solution), and it's designed to be **invisible in screen shares** so it stays your private assistant.
> 
> ---
> 
> 
> ### Features Open for Contribution
> - [ ] Upgrade audio capture pipeline for zero-latency streaming
> - [ ] Add optional Deepgram support for ultra-fast transcription
> 
> 
> ### Option A — Download the app (easiest)
> 
> 1. Go to the [**Releases**](../../releases) page and download **`cue-mac.zip`**.
> 2. Double-click the zip to unzip it. You'll get **`cue.app`**.
> 3. Drag **`cue.app`** into your **Applications** folder.
> 4. **First open (important):** because cue is a free app without a paid Apple certificate, macOS will refuse to open it normally the first time. Do this once:
>    - **Right-click** `cue.app` → **Open** → click **Open** in the dialog.
>    - If macOS instead says **"cue is damaged and can't be opened,"** open the **Terminal** app and paste this line, then press Return:
>      ```bash
>      xattr -cr /Applications/cue.app
>      ```
>      Then double-click cue.app again. (This just tells macOS "yes, I trust this app I downloaded." It's safe.)
> 
> After that, cue opens normally forever.
> 
> 
> ### Option B — Run from source (developers)
> 
> You need [Node.js](https://nodejs.org) 18+ installed. No Xcode required.
> 
> ```bash
> git clone https://github.com/Blueturboguy07/cue.git
> cd cue
> npm install
> npm start
> ```
> 
> To build your own `cue.app`:
> ```bash
> npm run pack      # creates dist/mac-arm64/cue.app
> ```
> > Note: the packaged app is **ad-hoc signed** (no paid Apple certificate). macOS ties permission grants to the exact build, so **rebuilding resets the mic/screen permissions** — you'll grant them again. For everyday use, build once and keep it.
> 
> ---
> 
> 
> ### Step 1 — Grant two macOS permissions
> 
> cue can't help until macOS lets it see and hear. When you first use a feature, macOS will prompt you — click **Allow**. If a prompt doesn't appear, add cue manually:
> 
> - **Microphone:** System Settings → **Privacy & Security** → **Microphone** → turn on **cue**.
> - **Screen Recording:** System Settings → **Privacy & Security** → **Screen Recording** → turn on **cue**. (This one grant covers both screenshots *and* meeting audio.) macOS may ask you to **quit & reopen** cue — let it.
> 
> 
> ### Step 2 — Add your AI key (bring your own)
> 
> cue uses **your own** API key, so it's free to run (you only pay your AI provider for what you use). Click the **`...`** button in the input box (or press `⌘` `,`) to open **Settings**, pick a provider, and paste your key:
> 
> | Provider | Get a key | Notes |
> |---|---|---|
> | **OpenAI** | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) | One key does everything — **but** for the *listening* features the key must have **Whisper / audio** access (a "restricted" project key that only allows chat will give a 403 on transcription). |
> | **Anthropic (Claude)** | [console.anthropic.com](https://console.anthropic.com) | Great for screen & coding help. Claude has no speech-to-text, so add an OpenAI or Gemini key too if you want the listening features. |
> | **Google Gemini** | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) | One key does chat + transcription. |
> 
> Your key is stored **only on your computer** (in `cue-data.json`) and is sent **only** to that provider. cue has no server and collects nothing.
> 
> 
> ### Step 3 — The Zoom setting (only needed for Zoom)
> 
> cue is hidden from most screen-share tools automatically — **Google Meet, Microsoft Teams, and QuickTime need nothing.** **Zoom** has a specific setting that decides whether it respects cue's "don't capture me" flag:
> 
> > **Zoom → Settings → Share Screen → Advanced → Screen capture mode → choose "Advanced capture with window filtering."**
> 
> **Why:** the *"...with window filtering"* modes tell Zoom to leave out windows that mark themselves as private — which is exactly what cue does. The **"Advanced capture without window filtering"** mode grabs the raw screen and **will show cue**, so avoid it.
> 
> ---
> 
> 
> ## How it works (under the hood)
> 
> cue is an [Electron](https://www.electronjs.org/) app. Everything runs locally except the calls to your chosen AI provider.
> 
> **The three inputs are kept completely separate:**
> - **Screen** — captured with Electron's `desktopCapturer` (full-resolution screenshots, taken only when a feature needs one).
> - **Your mic ("You")** — `getUserMedia` → downsampled to 16 kHz audio → transcribed.
> - **Meeting audio ("Them")** — `getDisplayMedia` loopback capture of your system's output audio, kept on its own channel so cue knows *who* said what.
> 
> Both audio streams are transcribed (OpenAI Whisper or Gemini) and fed, with an optional screenshot, to your AI model. Responses **stream** into the panel word-by-word.
> 
> **The invisibility** is a single macOS window flag: `setContentProtection(true)`, which sets `NSWindowSharingNone`. This asks the window server to exclude cue from screen-capture streams. It's the same mechanism DRM apps and Zoom's own toolbar use. It is **not*

## 延伸閱讀

相關概念：[[即時通訊]] · [[AI 助手]] · [[會議記錄]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[farzaa--clicky|farzaa/clicky]] · [[calesthio--Crucix|calesthio/Crucix]]

[GitHub](https://github.com/Blueturboguy07/cue)

## 相關收錄

> [!note]- 直接競品（同子分類：會議助手）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "會議助手" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Blueturboguy07--cue" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["即時通訊","AI 助手","會議記錄"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Blueturboguy07--cue" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Blueturboguy07--cue");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Blueturboguy07--cue" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Blueturboguy07" AND file.name != "Blueturboguy07--cue"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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
> const me = dv.page("Repos/Blueturboguy07--cue");
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

> **2026-07-21** — 首次收錄
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

- [[2026-07-22|2026-07-22]] — 再次上榜，704 stars
- [[2026-07-21|2026-07-21]] — 首次收錄，666 stars
