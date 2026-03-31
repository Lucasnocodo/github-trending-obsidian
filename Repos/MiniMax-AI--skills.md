---
repo: MiniMax-AI/skills
url: https://github.com/MiniMax-AI/skills
owner: MiniMax-AI
owner_type: Organization
language: C#
license: MIT
description: ""
homepage: ""
stars: 8048
stars_per_day: 619
forks: 608
open_issues: 21
created: 2026-03-17
pushed_at: 2026-03-30
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "AI 開發技能"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供 AI 編碼代理的開發技能，幫助開發者快速獲得高品質的前端、全棧、Android、iOS 和著色器開發指導。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 34
repo_size_kb: 7060
readme_length: 6710
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1841,2026-03-23:1873,2026-03-24:3324,2026-03-24:3333,2026-03-25:4004,2026-03-26:5139,2026-03-27:6154,2026-03-28:6842,2026-03-29:7259,2026-03-30:7589,2026-03-31:8048"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
  - org
aliases:
  - "skills"
  - "MiniMax-AI/skills"
  - "提供 AI 編碼代理的開發技能，幫助開發者快速獲得高品質的前端、全棧、Android、iOS 和著色器開發指導。"
---

# skills

**8.0k** stars · **619** stars/天 · 建立 13 天前 · C# · MIT

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
> 提供 AI 編碼代理的開發技能，幫助開發者快速獲得高品質的前端、全棧、Android、iOS 和著色器開發指導。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (619 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速開發多平台應用並整合 AI 工具的中小型開發團隊。
> **一句話重點** 這個專案不僅提供技能，還結合了 AI 工具的強大功能，讓開發者能夠快速生成高品質的開發成果。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 開發技能" && p.file.name !== "MiniMax-AI--skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 開發技能 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到多平台開發支持，值得考慮。

> [!abstract] 核心創新
> 提供一個結構化的技能庫，專為 AI 編碼代理設計，涵蓋多種開發領域。

## 專案簡介

MiniMax Skills 是一個針對 AI 編碼代理的開發技能庫，旨在為開發者提供結構化的、可生產的指導。使用者可以透過簡單的 CLI 指令將這些技能整合到他們的 AI 工具中，從而獲得前端、全棧、Android、iOS 等多種開發領域的支持。這些技能涵蓋了從 UI 設計、API 設計到性能優化等多個方面，並提供了詳細的工作流程指導。比如，使用者可以透過 `claude plugin install minimax-skills` 指令安裝這些技能，並在開發過程中獲得即時的建議和最佳實踐。技術上，這個專案使用了多種語言和框架，如 C#、Python、JavaScript 等，並且依賴於 MiniMax API 來生成媒體資產和進行圖像分析。

相較於其他類似工具，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，MiniMax Skills 提供了更全面的開發支持，尤其是在多平台開發和媒體生成方面。這使得它在需要快速開發和高品質輸出的情境下特別有用。使用者可能會發現，儘管這個專案仍在活躍開發中，但其功能已經相當成熟，適合用於實際的開發工作。對於需要快速上手並整合到現有工作流的團隊來說，這是一個值得考慮的選擇。未來六個月內，隨著功能的持續增強和社群的活躍，這個專案有潛力成為開發者的首選工具之一。

**技術棧**：`C#` · `Python` · `JavaScript` · `Shell`

## 重點功能

- 多平台支持 — 提供前端、全棧、Android、iOS 和著色器開發的完整技能。
- 即時生成媒體資產 — 使用 MiniMax API 生成圖像、音頻和視頻資產。
- 詳細的工作流程指導 — 從需求到實施的完整指導，幫助開發者快速上手。
- 支持多種語言 — 包含 C#, Python, JavaScript 等多種語言的技能。
- PDF 和 PPTX 文件生成 — 提供生成和編輯 PDF 和 PowerPoint 的功能，方便文檔處理。

## 快速開始

1. 安裝 Claude Code 插件
```bash
claude plugin marketplace add https://github.com/MiniMax-AI/skills
```
2. 安裝 Minimax Skills
```bash
claude plugin install minimax-skills
```
3. 克隆到 Cursor
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.cursor/minimax-skills
```

## 程式碼範例

```csharp
{
  "前置條件": "需要安裝 Claude Code 或 Cursor。",
  "指令": "claude plugin install minimax-skills",
  "預期輸出": "成功安裝 Minimax Skills，並可以在開發環境中使用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 8048 stars（619/天），forks 608（7.6%），顯示出強烈的社群興趣。這個專案由一群活躍的貢獻者維護，解決了開發者在多平台開發中的需求，特別是在整合 AI 工具方面。作者的背景和過去的貢獻使得這個專案具備了良好的信譽。近期的推廣活動和社群討論也可能促進了這一增長，尤其是針對 AI 開發的需求日益增長。forks/stars 比率為 7.6%，顯示出有相當比例的使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速開發多平台應用並整合 AI 工具的中小型開發團隊。

> [!example] 使用場景
> - 前端開發者用它來快速生成高品質的 UI 元件，因為它提供了針對 React 和 Next.js 的最佳實踐和設計指導。
> - 全棧開發者用它來設計 REST API 和後端架構，因為它涵蓋了從需求到實施的完整工作流程。
> - 移動應用開發者用它來獲得 Android 和 iOS 的開發指導，因為它提供了針對 Material Design 和 Apple HIG 的詳細建議。

## 架構分析

MiniMax Skills 採用模組化的架構設計，將不同的開發技能分為獨立的模組，這樣的設計使得每個模組可以獨立更新和維護。資料流方面，使用者透過 CLI 指令安裝和配置技能，然後在開發過程中調用相應的技能模組。這種設計的好處在於靈活性和可擴展性，使用者可以根據需求選擇安裝特定的技能，而不必下載整個庫。選擇這種架構的代價是需要使用者具備一定的 CLI 操作能力，並且在整合過程中可能會遇到配置問題。擴展性方面，隨著新技能的增加，整個系統的維護和更新可能會變得複雜。

## 技術深入分析

MiniMax Skills 的核心技術機制是將不同的開發技能模組化，並透過 MiniMax API 提供即時的媒體生成和分析功能。這些技能模組涵蓋了從前端到後端的多個開發領域，並且使用者可以根據需求選擇安裝。效能方面，這些技能的設計考慮到了開發者的實際需求，提供了詳細的工作流程和最佳實踐，能夠在短時間內提升開發效率。選擇使用這種模組化架構的好處在於靈活性和可擴展性，但也可能導致使用者在配置和整合時遇到挑戰。技術風險方面，隨著功能的增長，維護和更新的複雜度也會增加，這可能會影響到整體的穩定性。整合方面，這個專案可以與多種主流開發工具搭配使用，但對於某些使用者來說，可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和技能介紹，對於新手來說相對友好。安裝過程中，使用者需要進行一些 CLI 操作，但整體流程順暢。文件中有針對不同環境的安裝說明，方便使用者快速上手。多語言支持也使得不同背景的開發者都能理解。

## 優缺點分析

> [!success] 優點
> - 多樣化的技能支持，涵蓋多個開發領域。
> - 結構化的工作流程指導，幫助開發者快速上手。
> - 活躍的社群和持續的開發更新。

> [!danger] 缺點
> - 仍在開發中，功能可能不穩定。
> - 需要一定的 CLI 操作能力，對新手不太友好。
> - 某些技能可能需要額外的配置。

> [!warning] 注意事項
> - 仍在開發中，功能和 API 可能會變動。
> - 目前不支持 VS Code 的獨立擴展，需要透過 CLI 工具使用。
> - 對於某些技能，可能需要額外的配置或依賴。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的多平台支持，但專注於同步和數據傳輸，而非開發技能。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 AI 編碼助手，但功能範圍較窄，不如 MiniMax Skills 全面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和傳輸，而非開發技能的生成和指導。 | 如果你的需求主要是數據同步而非開發指導，這個工具會更合適。 | medium，因為需要重新設計工作流程以適應不同的工具。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 AI 編碼助手，功能較為單一。 | 如果你的團隊已經在使用 HolyClaude，且不需要多樣化的開發技能，則可以考慮。 | low，因為功能相似且易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **skills** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和傳輸，而非開發技能的生成和指導。 | 專注於 AI 編碼助手，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應不同的工具。 | low，因為功能相似且易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步而非開發指導，這個工具會更合適。 | 如果你的團隊已經在使用 HolyClaude，且不需要多樣化 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者在個人項目中試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些技能在特定環境下無法正常運行
  - 解法：檢查依賴和配置，確保環境符合要求
- [MEDIUM] 安裝過程中可能出現權限問題
  - 解法：確保使用者有足夠的權限進行安裝
- [MEDIUM] 部分功能尚未完全實現，可能導致使用者困惑
  - 解法：參考官方文檔，了解每個技能的當前狀態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊開發移動應用 | 非常適合 | 提供針對 Android 和 iOS 的詳細開發指導，能快速上手。 |
| 大型企業的全棧開發項目 | 普通 | 雖然功能全面，但可能需要更多的定制化支持。 |
| 個人開發者進行小型專案 | 非常適合 | 簡單易用的 CLI 和多樣化的技能支持，能快速實現想法。 |
| 需要高性能的商業應用開發 | 不適合 | 目前仍在 beta 階段，穩定性和性能可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到多平台開發支持，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

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
| Forks | 608 |
| Open Issues | 21 |
| Issue 解決率 | 34% (11 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-17 |
| Repo 大小 | 6.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MiniMax-AI/skills) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C#" : 63
>     "Python" : 22
>     "Shell" : 12
>     "HTML" : 2
>     "JavaScript" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zest0198](https://github.com/zest0198) | 13 |
> | [@AkairoDev](https://github.com/AkairoDev) | 12 |
> | [@liyuan97](https://github.com/liyuan97) | 12 |
> | [@JithendraNara](https://github.com/JithendraNara) | 4 |
> | [@divitkashyap](https://github.com/divitkashyap) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回應。
**連結**：[文件](https://github.com/MiniMax-AI/skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-30）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #42 from Ethereal49/patch-1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/MiniMax-AI/skills/issues/49) | harmonyOS可以支持吗 | 0 | 0 |

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
> | Skill&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | Source |
> |---------------------------------------|-------------|--------|
> | `frontend-dev` | Full-stack frontend development combining premium UI design, cinematic animations (Framer Motion, GSAP), AI-generated media assets via MiniMax API (image, video, audio, music, TTS), persuasive copywriting (AIDA framework), and generative art (p5.js, Three.js, Canvas). Tech stack: React / Next.js, Tailwind CSS. | Official |
> | `fullstack-dev` | Full-stack backend architecture and frontend-backend integration. REST API design, auth flows (JWT, session, OAuth), real-time features (SSE, WebSocket), database integration (SQL / NoSQL), production hardening, and release checklist. Guided workflow: requirements → architecture → implementation. | Official |
> | `android-native-dev` | Android native application development with Material Design 3. Kotlin / Jetpack Compose, adaptive layouts, Gradle configuration, accessibility (WCAG), build troubleshooting, performance optimization, and motion system. | Official |
> | `ios-application-dev` | iOS application development guide covering UIKit, SnapKit, and SwiftUI. Touch targets, safe areas, navigation patterns, Dynamic Type, Dark Mode, accessibility, collection views, and Apple HIG compliance. | Official |
> | `flutter-dev` | Flutter cross-platform development covering widget patterns, Riverpod/Bloc state management, GoRouter navigation, performance optimization, and testing strategies. | Official |
> | `react-native-dev` | React Native and Expo development guide covering components, styling, animations, navigation, state management, forms, networking, performance optimization, testing, native capabilities, and engineering (project structure, deployment, SDK upgrades, CI/CD). | Official |
> | `shader-dev` | Comprehensive GLSL shader techniques for creating stunning visual effects — ray marching, SDF modeling, fluid simulation, particle systems, procedural generation, lighting, post-processing, and more. ShaderToy-compatible. | Official |
> | `gif-sticker-maker` | Convert photos (people, pets, objects, logos) into 4 animated GIF stickers with captions. Funko Pop / Pop Mart style, powered by MiniMax Image & Video Generation API. | Official |
> | `minimax-pdf` | Generate, fill, and reformat PDF documents with a token-based design system. CREATE polished PDFs from scratch (15 cover styles), FILL existing form fields, or REFORMAT documents into a new design. Print-ready output with typography and color derived from document type. | Official |
> | `pptx-generator` | Generate, edit, and read PowerPoint presentations. Create from scratch with PptxGenJS (cover, TOC, content, section divider, summary slides), edit existing PPTX via XML workflows, or extract text with markitdown. | Official |
> | `minimax-xlsx` | Open, create, read, analyze, edit, or validate Excel/spreadsheet files (.xlsx, .xlsm, .csv, .tsv). Covers creating new xlsx from scratch via XML templates, reading and analyzing with pandas, editing existing files with zero format loss, formula recalculation, validation, and professional financial formatting. | Official |
> | `minimax-docx` | Professional DOCX document creation, editing, and formatting using OpenXML SDK (.NET). Three pipelines: create new documents from scratch, fill/edit content in existing documents, or apply template formatting with XSD validation gate-check. | Official |
> | `vision-analysis` | Analyze, describe, and extract information from images using vision AI models. Supports describe, OCR, UI mockup review, chart data extraction, and object detection. Powered by MiniMax VL API with OpenAI GPT-4V fallback. | Community |
> | `minimax-multimodal-toolkit` | Generate voice, music, video, and image content via MiniMax APIs — the unified entry for MiniMax multimodal use cases. Covers TTS (text-to-speech, voice cloning, voice design, multi-segment), music (songs, instrumentals), video (text-to-video, image-to-video, start-end frame, subject reference, templates, long-form multi-scene), image (text-to-image, image-to-image with character reference), and media processing (convert, concat, trim, extract) via FFmpeg. | Official |
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
> For Windows setup and verification, see [`.cursor-plugin/INSTALL.md`](.cursor-plugin/INSTALL.md).
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
> ### VS Code
> 
> This repository does not currently ship a standalone VS Code extension.
> 
> If you use VS Code, the supported approach is to run one of the supported CLI tools inside the integrated terminal:
> - Codex
> - Claude Code
> - OpenCode
> 
> If you want native local-skills configuration from this repo, use Cursor and follow [`.cursor-plugin/INSTALL.md`](.cursor-plugin/INSTALL.md).
> 
> ## Contributing
> 
> We welcome contributions! Before submitting a PR, please read:
> 
> - [CONTRIBUTING.md](./CONTRIBUTING.md) — PR format, skill structure requirements, and development guidelines
> - [PR Review Rules](./.claude/skills/pr-review/SKILL.md) — automated validation checks and quality review criteria
> 
> You can run the validation script locally before submitting:
> 
> ```bash
> python .claude/skills/pr-review/scripts/validate_skills.py
> ```
> 
> ## ⭐ Star History
> 
> [](https://star-history.com/#MiniMax-AI/skills&Date)
> 
> ## License
> 
> [MIT](./LICENSE)

## 延伸閱讀

相關概念：[[AI 開發]] · [[自動化測試]] · [[多模態]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/MiniMax-AI/skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 開發技能）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 開發技能" AND file.name != "MiniMax-AI--skills"
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
> const concepts = ["AI 開發","自動化測試","多模態"];
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

- [[2026-03-24|2026-03-24]] — 再次上榜，3.3k stars
- [[2026-03-23|2026-03-23]] — 首次收錄，1.8k stars
