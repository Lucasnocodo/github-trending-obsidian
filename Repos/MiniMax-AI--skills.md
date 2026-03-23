---
repo: MiniMax-AI/skills
url: https://github.com/MiniMax-AI/skills
owner: MiniMax-AI
owner_type: Organization
language: C#
license: MIT
description: ""
homepage: ""
stars: 1873
stars_per_day: 375
forks: 110
open_issues: 6
created: 2026-03-17
pushed_at: 2026-03-22
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供多種 AI 編碼代理的開發技能，幫助開發者快速生成高品質的前端、全棧及移動應用程式。"
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
star_history: "2026-03-23:1841,2026-03-23:1873"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
  - org
aliases:
  - "skills"
  - "MiniMax-AI/skills"
  - "提供多種 AI 編碼代理的開發技能，幫助開發者快速生成高品質的前端、全棧及移動應用程式。"
---

# skills

**1.9k** stars · **375** stars/天 · 建立 5 天前 · C# · MIT

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
> 提供多種 AI 編碼代理的開發技能，幫助開發者快速生成高品質的前端、全棧及移動應用程式。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (375 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速生成高品質代碼的開發者，特別是在多平台開發的情境下。
> **一句話重點** MiniMax Skills 的多樣化技能選擇和結構化指導流程，能顯著提高開發效率，特別是在多平台開發的情境下。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "MiniMax-AI--skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠快速提升開發效率，值得嘗試。

> [!abstract] 核心創新
> 提供結構化的開發指導，涵蓋多種開發技能，讓開發者能夠快速生成高品質代碼。

## 專案簡介

MiniMax Skills 是一個針對 AI 編碼代理的開發技能庫，旨在提供結構化的指導，涵蓋前端、全棧、Android、iOS 和著色器開發。用戶可以透過簡單的 CLI 指令安裝這些技能，並在開發過程中獲得即時的專業建議。比如，使用 `claude plugin install minimax-skills` 可以快速將技能整合到 Claude 環境中。這個專案的賣點在於其多樣化的技能選擇，從 UI 設計到後端架構，甚至是 PDF 和 PowerPoint 文件的生成，能夠滿足不同開發需求。技術上，這個庫使用了多種流行的框架和工具，如 React、Next.js、Kotlin 和 Swift，並且提供了完整的開發流程指導，從需求分析到實現。

與其他工具相比，如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，MiniMax Skills 提供了更全面的開發支持，特別是在前端和移動應用開發方面。這使得它在需要快速原型開發和高效協作的環境中表現出色。值得注意的是，這個專案目前仍在活躍開發中，功能和 API 可能隨時變更，因此使用時需保持靈活性。對於小型團隊或個人開發者來說，這是一個非常適合的工具，因為它能夠顯著提高開發效率，尤其是在多平台開發的情境下。總體而言，MiniMax Skills 是一個值得關注的專案，特別是對於需要快速生成高品質代碼的開發者。

**技術棧**：`React` · `Next.js` · `Kotlin` · `Swift`

## 重點功能

- 多樣化技能 — 包括前端、全棧、Android、iOS 和著色器開發，滿足不同開發需求。
- 即時指導 — 提供結構化的開發流程指導，從需求分析到實現。
- 文件生成 — 支持生成 PDF 和 PowerPoint 文件，方便報告和演示。
- 高品質 UI 設計 — 結合 AI 生成的媒體資產，提升用戶體驗。
- 多平台支持 — 能夠在 Claude、Cursor、Codex 和 OpenCode 等多個環境中使用。

## 快速開始

1. 在 Claude 中安裝技能
```bash
claude plugin marketplace add https://github.com/MiniMax-AI/skills
claude plugin install minimax-skills
```
2. 在 Cursor 中克隆專案
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.cursor/minimax-skills
```
3. 在 Codex 中設置技能
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.codex/minimax-skills
mkdir -p ~/.agents/skills
ln -s ~/.codex/minimax-skills/skills ~/.agents/skills/minimax-skills
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立僅 5 天就累積 1873 stars（375/天），forks 110（5.9%），顯示出強勁的增長勢頭。這個專案的主要貢獻者 AkairoDev 和 viktorxhzj 在開源社群中有一定的影響力，之前也有其他成功的專案。它解決了開發者在多平台開發時缺乏統一指導的痛點，讓開發者能夠更快速地上手並產出高品質的代碼。社群的反應也相當積極，開發者們在 GitHub 上提出了多個功能建議和改進意見，顯示出對這個工具的期待。這個專案的成功也反映了當前對於 AI 助手在開發過程中應用的需求增加。

## 適合誰使用

**目標受眾**：需要快速生成高品質代碼的開發者，特別是在多平台開發的情境下。

> [!example] 使用場景
> - 前端開發者用它來快速生成高品質的 UI 元件，因為它提供了針對 React 和 Next.js 的專業指導，能夠節省大量設計時間。
> - 全棧工程師用它來設計 REST API 和數據庫架構，因為它涵蓋了從需求到實現的完整流程，讓開發過程更為高效。
> - 移動應用開發者用它來優化 Android 和 iOS 應用的性能，因為它提供了針對各平台的最佳實踐和建議，能夠提升應用的使用體驗。

## 架構分析

MiniMax Skills 採用模組化架構，將不同的開發技能封裝成獨立的模組，這樣的設計使得每個模組可以獨立更新和維護，降低了整體系統的複雜度。資料流方面，使用者透過 CLI 指令調用特定技能，系統則根據需求提供相應的指導和資源。這種設計的好處是能夠快速適應不同開發需求，但代價是需要使用者對各個技能的特性有一定的了解。擴展性方面，由於模組化的設計，未來可以輕鬆添加新的技能或更新現有技能，而不會影響到整體系統的穩定性。

## 技術深入分析

MiniMax Skills 的核心技術機制是模組化設計，將不同開發技能封裝成獨立模組，這使得每個模組可以根據需求獨立更新和維護。這些模組使用了多種流行的框架和工具，如 React、Next.js、Kotlin 和 Swift，並且提供了完整的開發流程指導，從需求分析到實現。效能方面，這個專案能夠處理多種開發需求，並且在多平台環境中表現良好。設計上選擇了模組化架構，這帶來了靈活性和可擴展性，但也需要使用者對各個技能的特性有一定的了解。技術風險方面，由於仍在 Beta 階段，未來可能會面臨功能不穩定的問題。整合方面，這個專案能夠輕鬆與現有的開發工具鏈整合，並且支持多種 CI/CD 流程，降低了導入的摩擦成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和技能介紹，整體品質良好。安裝過程相對順暢，但對於某些技能可能需要額外的配置。文件中有中文版，但部分內容可能不夠詳盡，對於新手來說可能需要花時間探索。整體而言，花 30 分鐘應該能夠成功安裝並初步使用。

## 優缺點分析

> [!success] 優點
> - 多樣化的技能選擇，能夠滿足不同開發需求。
> - 結構化的指導流程，幫助開發者快速上手。
> - 活躍的開發和社群支持，持續更新和改進。

> [!danger] 缺點
> - 仍在 Beta 階段，功能可能不穩定。
> - 部分技能可能需要額外的配置或依賴。
> - 缺乏全面的中文文檔，可能影響非英語使用者的體驗。

> [!warning] 注意事項
> - 目前仍在 Beta 階段，功能和 API 可能隨時變更。
> - 對於某些技能，可能需要額外的依賴或配置。
> - 尚未有全面的中文文檔，部分使用者可能會遇到語言障礙。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 MiniMax Skills 提供多樣化的開發技能，適合需要多平台開發的場景。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊的代理，而 MiniMax Skills 更加專注於開發過程中的指導和技能生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 MiniMax Skills 提供多樣化的開發技能，適合需要多平台開發的場景。 | 如果你的團隊主要需要文件管理和同步功能，而不涉及多樣化的開發技能。 | medium，因為需要重新評估開發流程和工具鏈。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊的代理，而 MiniMax Skills 更加專注於開發過程中的指導和技能生成。 | 如果你的專案主要集中在即時通訊功能的開發，而不需要全面的開發指導。 | low，因為功能範圍不同，轉換成本相對較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **skills** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而 MiniMax Skills 提供多樣化的開發技能，適合需要多平台開發的場景。 | 主要用於即時通訊的代理，而 MiniMax Skills 更加專注於開發過程中的指導和技能生成。 |
> | 遷移成本 | - | medium，因為需要重新評估開發流程和工具鏈。 | low，因為功能範圍不同，轉換成本相對較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要需要文件管理和同步功能，而不涉及多樣化的開發 | 如果你的專案主要集中在即時通訊功能的開發，而不需要全面的開發 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分技能在特定環境下可能無法正常運作，如某些依賴未正確安裝時。
  - 解法：確保所有依賴都已正確安裝，並參考官方文檔進行配置。
- [MEDIUM] 在不同平台間切換時，可能需要重新配置技能路徑。
  - 解法：參考 README 中的配置指導，確保技能路徑正確。
- [MEDIUM] 某些技能的文檔可能不夠詳細，導致使用者困惑。
  - 解法：參考社群討論或尋求開發者的幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速生成多平台應用 | 非常適合 | 提供多樣化的技能選擇和結構化的指導流程，能夠加速開發進程。 |
| 大型企業開發核心系統 | 不適合 | 仍在 Beta 階段，功能不穩定，可能不適合關鍵業務應用。 |
| 獨立開發者進行個人專案 | 適合 | 能夠快速上手並生成高品質代碼，適合個人開發需求。 |
| 需要長期穩定支持的專案 | 普通 | 功能仍在變更中，未來可能需要重新評估使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠快速提升開發效率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴的第三方庫需定期檢查安全性，但整體風險可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiniMax Skills 最常與 AI 編碼代理工具搭配使用，處於開發流程的輔助環節。實際整合範例包括在使用 Claude 時，通過簡單的 CLI 指令安裝技能，並在開發過程中獲得即時指導。該工具支援多種 CI/CD 流程，能夠輕鬆整合到現有的開發環境中，並且與主流 IDE（如 VS Code）相容性良好。整合的摩擦點主要在於技能路徑的配置，使用者需確保正確設置以避免問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 MiniMax Skills 出現之前，開發者通常依賴於分散的資源和文檔來獲取開發指導，這導致了效率低下和學習曲線陡峭。隨著 AI 技術的進步，開發者開始探索如何利用 AI 來提升開發效率。MiniMax Skills 代表了這一趨勢，通過提供結構化的指導和多樣化的技能，讓開發者能夠更快速地上手並產出高品質的代碼。

未來，隨著 AI 助手的普及，這類工具的需求將會持續增長。

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
| Forks | 110 |
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

**社群活躍度**：社群活躍，開發者積極提出功能建議和問題。
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

相關概念：[[自動化]] · [[CI/CD]] · [[程式碼生成]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]]

[GitHub](https://github.com/MiniMax-AI/skills)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "MiniMax-AI--skills"
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
> const concepts = ["自動化","CI/CD","程式碼生成"];
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
