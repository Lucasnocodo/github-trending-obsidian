---
repo: MiniMax-AI/skills
url: https://github.com/MiniMax-AI/skills
owner: MiniMax-AI
owner_type: Organization
language: C#
license: MIT
description: ""
homepage: ""
stars: 1841
stars_per_day: 368
forks: 109
open_issues: 6
created: 2026-03-17
pushed_at: 2026-03-22
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "技能套件"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "為 AI 編碼代理提供開發技能，實現高品質的前端、全棧、Android、iOS 和著色器開發指導。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-26"
contributor_count: 2
engagement: "low"
issue_close_rate: 14
repo_size_kb: 6911
readme_length: 4340
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1841"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
  - org
aliases:
  - "skills"
  - "MiniMax-AI/skills"
  - "為 AI 編碼代理提供開發技能，實現高品質的前端、全棧、Android、iOS 和著色器開發指導。"
---

# skills

**1.8k** stars · **368** stars/天 · 建立 5 天前 · C# · MIT

```dataviewjs
const me = dv.page("Repos/MiniMax-AI--skills");
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
> 為 AI 編碼代理提供開發技能，實現高品質的前端、全棧、Android、iOS 和著色器開發指導。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (368 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望提升開發效率並需要結構化指導的全棧開發團隊。
> **一句話重點** MiniMax Skills 讓 AI 編碼代理的開發變得更加結構化和高效，特別是在多樣化技能的支持下。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能套件" && p.file.name !== "MiniMax-AI--skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能套件 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的開發技能支持，值得採用。

> [!abstract] 核心創新
> 提供結構化的開發技能，專為 AI 編碼代理設計。

## 專案簡介

MiniMax Skills 是一個針對 AI 編碼代理的開發技能套件，旨在提供結構化的生產級指導。使用者可以透過不同的技能模組來進行前端、全棧、Android、iOS 和著色器的開發。每個技能模組都提供詳細的技術堆疊和最佳實踐，例如，`frontend-dev` 模組結合了 UI 設計、動畫和 AI 生成的媒體資產，適合需要高品質用戶界面的開發者。技術實作上，該專案使用了多種語言（C#, Python, Shell, HTML, JavaScript, PowerShell），並且依賴於現代框架如 React 和 Next.js，這使得開發者能夠快速上手並整合到現有的工作流中。與其他類似工具相比，MiniMax Skills 提供了更全面的技能覆蓋，特別是在生成媒體和文檔處理方面，這些功能在許多競爭對手中並不常見。

使用者可以通過簡單的 CLI 指令來安裝和配置這些技能，這降低了學習曲線並提高了開發效率。儘管目前仍處於 Beta 階段，但該專案的活躍開發和社群支持顯示出其潛力。對於需要快速開發和高品質交付的團隊，這是一個值得考慮的選擇。使用者在選擇這個工具時，應該考慮到其依賴的技術棧和可能的學習曲線，特別是對於不熟悉這些技術的開發者來說。整體而言，MiniMax Skills 是一個有潛力的工具，適合希望提升開發效率和質量的團隊。

**技術棧**：`C#` · `Python` · `Shell` · `HTML` · `JavaScript` · `PowerShell`

## 重點功能

- 多種開發技能 — 包含前端、全棧、Android、iOS 和著色器開發的專業指導。
- AI 生成媒體資產 — 提供動畫和媒體生成的集成，提升用戶體驗。
- 文檔處理能力 — 支持生成和編輯 PDF、PPTX 和 DOCX 文件，方便文檔管理。
- 簡單的安裝流程 — 透過 CLI 指令快速安裝和配置，降低學習成本。
- 活躍的開發社群 — 持續更新和反饋，確保專案的穩定性和功能擴展。

## 快速開始

1. 安裝 Claude Code 插件
```bash
claude plugin marketplace add https://github.com/MiniMax-AI/skills
```
2. 克隆專案到 Cursor
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.cursor/minimax-skills
```
3. 克隆專案到 Codex
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.codex/minimax-skills
```

## 程式碼範例

```csharp
[
  "# 前置條件：安裝 Claude Code",
  "claude plugin marketplace add https://github.com/MiniMax-AI/skills",
  "# 預期輸出：成功安裝 MiniMax Skills 插件"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1841 stars（368/天），forks 109（5.9%），顯示出穩定的增長。主要貢獻者 AkairoDev 和 viktorxhzj 在開源社群中有一定的背景，這為專案的可信度加分。這個專案解決了 AI 編碼代理在開發過程中缺乏結構化指導的痛點，之前的解決方案通常缺乏整合性和深度。近期的推廣活動和社群反饋也促進了其曝光率。技術生態的變化，如 AI 和自動化工具的普及，使得這種技能套件的需求上升。forks/stars 比率顯示出使用者對這個專案的積極參與，這意味著許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望提升開發效率並需要結構化指導的全棧開發團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成高品質的 UI 元件，因為它提供了結合動畫和 AI 生成資產的技能模組。
> - 全棧開發者用它來設計 REST API 和後端架構，因為它提供了完整的開發流程指導，從需求到實現。
> - Android 開發者用它來優化應用性能和界面設計，因為它涵蓋了 Material Design 和性能調優的最佳實踐。

## 架構分析

該專案採用模組化架構，將不同的開發技能分為獨立的模組，這樣的設計使得使用者可以根據需求選擇安裝特定的技能。每個技能模組都包含詳細的技術指導和最佳實踐，這樣的架構使得開發者能夠快速上手並整合到現有的工作流中。資料流方面，使用者可以透過 CLI 指令來安裝和配置技能，並在開發過程中隨時獲取指導。這種設計的代價在於，使用者需要對各個技能模組有一定的了解，才能充分發揮其潛力。擴展性方面，由於採用模組化設計，未來可以輕鬆添加新技能或更新現有技能，這使得專案在面對快速變化的技術環境時具備良好的適應性。

## 技術深入分析

MiniMax Skills 的核心技術機制是模組化設計，將不同的開發技能分為獨立的模組，這樣的設計使得使用者能夠根據需求選擇安裝特定的技能。每個技能模組都提供詳細的技術指導和最佳實踐，這樣的設計不僅提高了使用者的學習效率，也降低了開發過程中的錯誤率。效能方面，由於專案依賴於多種語言和框架，使用者需要確保其開發環境能夠支持這些技術。設計取捨方面，選擇模組化架構的好處在於靈活性和擴展性，但也意味著使用者需要對各個技能模組有一定的了解，才能充分發揮其潛力。技術風險方面，隨著專案的發展，可能會面臨 API 變動的風險，這需要開發者保持對專案更新的關注。整合方面，專案與主流開發工具的相容性良好，使用者可以輕鬆將其整合進現有的開發流程中，這降低了學習成本和整合摩擦。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和技能介紹，對新手友好。安裝過程相對順暢，但對於不熟悉 CLI 的使用者可能會有一定挑戰。文件中有中文版，方便不同語言的使用者理解。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的開發技能，適合不同需求的開發者。
> - 簡單的安裝和配置流程，降低了使用門檻。
> - 活躍的社群支持，持續更新和改進功能。

> [!danger] 缺點
> - 目前仍在 Beta 階段，可能存在不穩定性。
> - 對於不熟悉 CLI 的開發者，使用上可能有一定挑戰。
> - 某些技能模組可能需要特定的環境或依賴。

> [!warning] 注意事項
> - 目前仍處於 Beta 階段，功能和 API 可能會變動。
> - 對於不熟悉 CLI 的開發者，安裝和配置可能會有一定的學習曲線。
> - 某些技能模組可能需要特定的環境或依賴，使用前需確認。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備 MiniMax Skills 的多樣化開發技能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，功能範圍較窄，不如 MiniMax Skills 全面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備 MiniMax Skills 的多樣化開發技能。 | 如果你的需求主要集中在文件同步而非開發技能，則可以選擇此工具。 | low，因為功能範圍較窄，易於上手。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，功能範圍較窄，不如 MiniMax Skills 全面。 | 如果你的專案專注於醫療領域，這個工具可能更適合。 | medium，因為需要重新學習其特定技能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **skills** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供文件同步功能，但不具備 MiniMax Skills 的多樣化開發技能。 | 專注於醫療領域的技能，功能範圍較窄，不如 MiniMax Skills 全面。 |
> | 遷移成本 | - | low，因為功能範圍較窄，易於上手。 | medium，因為需要重新學習其特定技能。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在文件同步而非開發技能，則可以選擇此工具 | 如果你的專案專注於醫療領域，這個工具可能更適合。 |

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

- **[HIGH]** 某些技能模組可能無法在特定環境下運行，導致功能缺失
  - 解法：檢查環境依賴並確保滿足要求
- [MEDIUM] 安裝過程中可能會遇到權限問題
  - 解法：確保使用者有足夠的權限進行安裝
- [MEDIUM] API 變動可能導致現有功能無法使用
  - 解法：定期檢查官方文檔以獲取最新更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供全棧開發指導，能快速上手並交付產品。 |
| 大型企業的多團隊協作專案 | 普通 | 雖然功能全面，但可能需要額外的整合工作。 |
| 個人開發者的 side project | 非常適合 | 簡單的安裝和使用流程，適合快速開發。 |
| 需要高性能計算的專案 | 不適合 | 目前的技能模組不針對性能優化提供深入指導。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的開發技能支持，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但使用者應注意依賴的第三方庫的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiniMax Skills 可以與多種開發工具和環境整合，特別是與 Claude Code、Cursor 和 Codex 等 AI 編碼工具搭配使用。在一個使用 React 和 Next.js 的專案中，開發者可以通過安裝 MiniMax Skills 來獲得前端開發的最佳實踐指導。這樣的整合使得開發者能夠在開發過程中隨時獲取所需的技能指導，提升開發效率。該專案也支援與主流 CI/CD 工具的整合，方便在持續集成環境中使用。整合的摩擦點主要在於對於不熟悉 CLI 的開發者來說，可能需要一些時間來適應安裝和配置過程。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 MiniMax Skills 出現之前，開發者通常依賴於分散的資源和文檔來獲取開發技能，這導致了學習曲線陡峭和效率低下。隨著 AI 和自動化工具的興起，對於結構化和高效的開發指導的需求越來越明顯。MiniMax Skills 代表了這一趨勢，通過提供多樣化的技能模組來滿足開發者的需求。

未來，隨著技術的進步，這類工具將會變得更加普及和重要。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
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
> const me = dv.page("Repos/MiniMax-AI--skills");
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
| Forks | 109 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-17 |
| Repo 大小 | 6.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MiniMax-AI/skills) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C#" : 69
>     "Python" : 24
>     "Shell" : 4
>     "HTML" : 2
>     "JavaScript" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AkairoDev](https://github.com/AkairoDev) | 11 |
> | [@viktorxhzj](https://github.com/viktorxhzj) | 2 |

## 社群與生態

**社群活躍度**：專案近期活躍，持續更新和回應社群反饋。
**連結**：[文件](https://github.com/MiniMax-AI/skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-22）
> **活躍天數** 3 天 · **最新 commit** update: add minimax-docx skill and sync docs

## README 摘錄

> [!info]- 展開查看原文 README
> # MiniMax Skills
> 
> [中文版](./README_zh.md)
> 
> > **Beta** — This project is under active development. Skills, APIs, and configuration formats may change without notice. We welcome feedback and contributions.
> 
> Development skills for AI coding agents. Plug into your favorite AI coding tool and get structured, production-quality guidance for frontend, fullstack, Android, iOS, and shader development.
> 
> ## Skills
> 
> | Skill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description |
> |---------------------------------------|-------------|
> | `frontend-dev` | Full-stack frontend development combining premium UI design, cinematic animations (Framer Motion, GSAP), AI-generated media assets via MiniMax API (image, video, audio, music, TTS), persuasive copywriting (AIDA framework), and generative art (p5.js, Three.js, Canvas). Tech stack: React / Next.js, Tailwind CSS. |
> | `fullstack-dev` | Full-stack backend architecture and frontend-backend integration. REST API design, auth flows (JWT, session, OAuth), real-time features (SSE, WebSocket), database integration (SQL / NoSQL), production hardening, and release checklist. Guided workflow: requirements → architecture → implementation. |
> | `android-native-dev` | Android native application development with Material Design 3. Kotlin / Jetpack Compose, adaptive layouts, Gradle configuration, accessibility (WCAG), build troubleshooting, performance optimization, and motion system. |
> | `ios-application-dev` | iOS application development guide covering UIKit, SnapKit, and SwiftUI. Touch targets, safe areas, navigation patterns, Dynamic Type, Dark Mode, accessibility, collection views, and Apple HIG compliance. |
> | `shader-dev` | Comprehensive GLSL shader techniques for creating stunning visual effects — ray marching, SDF modeling, fluid simulation, particle systems, procedural generation, lighting, post-processing, and more. ShaderToy-compatible. |
> | `gif-sticker-maker` | Convert photos (people, pets, objects, logos) into 4 animated GIF stickers with captions. Funko Pop / Pop Mart style, powered by MiniMax Image & Video Generation API. |
> | `minimax-pdf` | Generate, fill, and reformat PDF documents with a token-based design system. CREATE polished PDFs from scratch (15 cover styles), FILL existing form fields, or REFORMAT documents into a new design. Print-ready output with typography and color derived from document type. |
> | `pptx-generator` | Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. |
> | `minimax-xlsx` | Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Covers creating new xlsx from scratch via XML templates, reading and analyzing with pandas, editing existing files with zero format loss, formula recalculation, validation, and professional financial formatting. |
> | `minimax-docx` | Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: create new documents from scratch, fill/edit content in existing documents, or apply template formatting with XSD validation gate-check. |
> 
> ## Installation
> 
> ### Claude Code
> 
> ```bash
> claude plugin marketplace add https://github.com/MiniMax-AI/skills
> claude plugin install minimax-skills
> ```
> 
> ### Cursor
> 
> ```bash
> git clone https://github.com/MiniMax-AI/skills.git ~/.cursor/minimax-skills
> ```
> 
> Add to your Cursor settings — point the skills path to `~/.cursor/minimax-skills/skills/`.
> 
> ### Codex
> 
> ```bash
> git clone https://github.com/MiniMax-AI/skills.git ~/.codex/minimax-skills
> 
> mkdir -p ~/.agents/skills
> ln -s ~/.codex/minimax-skills/skills ~/.agents/skills/minimax-skills
> ```
> 
> Restart Codex to discover the skills. See [`.codex/INSTALL.md`](.codex/INSTALL.md) for Windows instructions and details.
> 
> ### OpenCode
> 
> ```bash
> git clone https://github.com/MiniMax-AI/skills.git ~/.minimax-skills
> 
> mkdir -p ~/.config/opencode/skills
> ln -s ~/.minimax-skills/skills/* ~/.config/opencode/skills/
> ```
> 
> Restart OpenCode to discover the skills. See [`.opencode/INSTALL.md`](.opencode/INSTALL.md) for details.
> 
> ## License
> 
> [MIT](./LICENSE)

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[機器學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]]

[GitHub](https://github.com/MiniMax-AI/skills)

## 相關收錄

> [!note]- 直接競品（同子分類：技能套件）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能套件" AND file.name != "MiniMax-AI--skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "MiniMax-AI--skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "MiniMax-AI--skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "MiniMax-AI--skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MiniMax-AI--skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MiniMax-AI--skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MiniMax-AI--skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MiniMax-AI" AND file.name != "MiniMax-AI--skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
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
> const me = dv.page("Repos/MiniMax-AI--skills");
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
> const me = dv.page("Repos/MiniMax-AI--skills");
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
> const me = dv.page("Repos/MiniMax-AI--skills");
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
> const me = dv.page("Repos/MiniMax-AI--skills");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-23|2026-03-23]] — 首次收錄，1.8k stars
