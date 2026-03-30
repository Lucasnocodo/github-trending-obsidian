---
repo: MiniMax-AI/skills
url: https://github.com/MiniMax-AI/skills
owner: MiniMax-AI
owner_type: Organization
language: C#
license: MIT
description: ""
homepage: ""
stars: 7589
stars_per_day: 632
forks: 575
open_issues: 16
created: 2026-03-17
pushed_at: 2026-03-27
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "技能庫"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供多種 AI 編程技能，幫助開發者在不同平台上進行高效開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 41
repo_size_kb: 7058
readme_length: 6710
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1841,2026-03-23:1873,2026-03-24:3324,2026-03-24:3333,2026-03-25:4004,2026-03-26:5139,2026-03-27:6154,2026-03-28:6842,2026-03-29:7259,2026-03-30:7589"
tags:
  - github
  - "category/開發工具"
  - "lang/c#"
  - org
aliases:
  - "skills"
  - "MiniMax-AI/skills"
  - "提供多種 AI 編程技能，幫助開發者在不同平台上進行高效開發。"
---

# skills

**7.6k** stars · **632** stars/天 · 建立 12 天前 · C# · MIT

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
> 提供多種 AI 編程技能，幫助開發者在不同平台上進行高效開發。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (632 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速構建多平台應用的開發團隊，特別是對 AI 編程代理有興趣的團隊。
> **一句話重點** 這個專案的強大之處在於它能夠整合多種開發技能，並利用 AI 技術提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MiniMax-AI--skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能庫" && p.file.name !== "MiniMax-AI--skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能庫 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，能快速提升開發效率，值得一試。

> [!abstract] 核心創新
> 提供多種開發技能的整合，並利用 AI 生成媒體資產，提升開發效率。

## 專案簡介

MiniMax Skills 是一個針對 AI 編程代理的技能庫，旨在提供結構化的開發指導，涵蓋前端、全棧、Android、iOS 和著色器開發等領域。使用者可以透過簡單的 CLI 指令將這些技能整合到他們的開發環境中，例如使用 `claude plugin marketplace add` 指令來安裝。這個專案的賣點在於其多樣化的技能組合，能夠支持從 UI 設計到後端架構的全方位開發需求。技術上，這些技能使用了多種現代框架，如 React、Next.js 和 Kotlin，並且能夠生成高品質的媒體資產，這在傳統開發流程中是難以實現的。與其他工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，MiniMax Skills 提供了更全面的開發支持，特別是在多平台的整合上。

這些技能的設計考慮到了實際開發中的需求，並且能夠在生產環境中提供穩定的性能。使用者可能會遇到的問題包括某些技能的可用性和 API 金鑰的配置，這些問題在社群中已有討論。這個專案目前處於 Beta 階段，對於希望在多平台上進行快速開發的團隊來說，這是一個值得考慮的選擇。未來六個月內，隨著功能的增強和社群的活躍，這個專案可能會進一步成熟。適合需要快速構建多平台應用的開發團隊，但不建議用於需要高度定制的專案。

**技術棧**：`React` · `Next.js` · `Kotlin` · `SwiftUI`

## 重點功能

- 多種開發技能 — 包括前端、全棧、Android、iOS 和著色器開發，滿足不同開發需求。
- 高品質媒體生成 — 利用 MiniMax API 生成圖像、音頻和視頻資產，提升開發效率。
- 結構化開發指導 — 提供從需求到實現的全過程指導，幫助開發者快速上手。
- 支持多種平台 — 包括 Claude、Cursor、Codex 和 OpenCode，易於整合到現有工作流中。
- 活躍的社群支持 — 定期更新和修復，並鼓勵社群貢獻和反饋。

## 快速開始

1. 安裝 Claude Code 插件
```bash
claude plugin marketplace add https://github.com/MiniMax-AI/skills
```
2. 安裝 Cursor 插件
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.cursor/minimax-skills
```
3. 安裝 Codex 插件
```bash
git clone https://github.com/MiniMax-AI/skills.git ~/.codex/minimax-skills
```

## 程式碼範例

```csharp
{
  "前置條件": "需要安裝 Claude Code。",
  "指令": "claude plugin marketplace add https://github.com/MiniMax-AI/skills",
  "預期輸出": "成功安裝 MiniMax Skills 插件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 7589 stars（632/天），forks 575（7.6%），顯示出強烈的社群興趣。這個專案的主要貢獻者們在 AI 和開發工具領域有豐富的經驗，能夠針對開發者的痛點提供解決方案。之前，開發者在整合多種技能時需要手動配置，這個專案的出現簡化了這一過程。社群的活躍度和開發者的反饋也促進了其快速成長。這個工具的可行性得益於當前 AI 技術的進步，使得多模態開發成為可能。高達 7.6% 的 forks/stars 比率表明許多人正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速構建多平台應用的開發團隊，特別是對 AI 編程代理有興趣的團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成高品質的 UI 設計，因為它集成了多種設計工具和媒體生成 API。
> - 全棧開發者用它來簡化 REST API 的設計和實現流程，因為它提供了結構化的開發指導和最佳實踐。
> - Android 開發者用它來獲得最新的 Material Design 3 指南，因為它涵蓋了從設計到性能優化的全面指導。

## 架構分析

MiniMax Skills 採用模組化架構，將不同的開發技能封裝為獨立的模組，便於擴展和維護。每個技能模組都能獨立運行，並通過 API 與其他模組進行交互。這樣的設計使得開發者可以根據需求選擇所需的技能，而不必加載整個庫。

資料流方面，使用者的請求會通過 API 轉發到相應的技能模組，模組處理後返回結果。這種設計的代價在於需要管理多個模組的依賴關係，可能會增加初始配置的複雜性。隨著使用者數量的增加，性能瓶頸可能出現在 API 的調用上，特別是在高併發的情況下。

## 技術深入分析

MiniMax Skills 的核心技術機制在於其模組化設計，每個技能都封裝為獨立的模組，能夠根據需求靈活調用。這些模組使用現代框架如 React 和 Kotlin，並通過 API 進行交互，這樣的設計使得開發者能夠快速集成所需功能。效能方面，這些技能能夠支持高並發請求，但在高負載下可能會出現性能瓶頸，特別是在 API 調用頻繁的情況下。設計上選擇了 Python 和 C# 作為主要開發語言，這使得開發者能夠利用這些語言的生態系統和庫，但也增加了學習曲線。技術風險方面，隨著使用者數量的增加，可能會出現 API 穩定性問題，特別是在多個技能同時運行時。整合方面，這個工具能夠與主流的開發環境（如 VS Code 和其他 CLI 工具）良好兼容，但初次配置可能需要一些額外的步驟。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和技能介紹，但缺乏具體的使用範例。安裝過程相對順暢，但對於 Windows 用戶可能需要額外的配置。整體而言，對於新手來說，花 30 分鐘能夠完成基本的安裝和配置。

## 優缺點分析

> [!success] 優點
> - 多樣化的技能支持，滿足不同開發需求。
> - 高效的媒體生成能力，提升開發效率。
> - 活躍的社群支持，定期更新和修復。

> [!danger] 缺點
> - 目前仍在 Beta 階段，功能可能不穩定。
> - 部分技能可能因配置問題而無法使用。
> - 對於某些平台的支持可能不夠完善。

> [!warning] 注意事項
> - 目前處於 Beta 階段，功能和 API 可能會變動。
> - 部分技能可能因 API 金鑰配置問題而無法使用。
> - 對於某些平台的支持可能不夠完善，需進一步測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和傳輸，而 MiniMax Skills 提供多樣化的開發技能和媒體生成支持。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要針對特定的 AI 編程任務，而 MiniMax Skills 提供更全面的多平台開發支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，而 MiniMax Skills 提供多樣化的開發技能。 | 如果你的專案需要強調數據隱私和安全性，Shadowbroker 會是更好的選擇。 | low，因為兩者的基本概念相似，遷移過程相對簡單。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 MiniMax Skills 提供更廣泛的開發技能。 | 如果你的專案專注於醫療應用，OpenClaw-Medical-Skills 會更合適。 | medium，因為需要根據醫療領域的需求進行調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **skills** | **Shadowbroker** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據隱私和安全，而 MiniMax Skills 提供多樣化的開發技能。 | 專注於醫療領域的技能，而 MiniMax Skills 提供更廣泛的開發技能。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，遷移過程相對簡單。 | medium，因為需要根據醫療領域的需求進行調整。 |
> | 適用場景 | 主要場景 | 如果你的專案需要強調數據隱私和安全性，Shadowbroke | 如果你的專案專注於醫療應用，OpenClaw-Medical |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些技能在沙箱環境下無法正常運行
  - 解法：確保正確配置 API 金鑰
- [MEDIUM] 部分技能缺乏詳細文檔，使用時可能遇到困難
  - 解法：參考社群討論或提交問題以獲得幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的創業團隊開發多平台應用 | 非常適合 | 提供全面的技能支持，能快速上手。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍在 Beta 階段，穩定性不足。 |
| 需要快速原型開發的個人開發者 | 適合 | 能夠快速生成所需的開發技能和媒體資產。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，能快速提升開發效率，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但需注意 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

MiniMax Skills 通常與多種開發工具搭配使用，如 Claude、Cursor 和 Codex。在一個使用 VS Code 的專案中，開發者可以通過 CLI 工具快速安裝並配置這些技能，具體方法是使用 `git clone` 指令將技能庫克隆到本地。這個工具能夠與主流 CI/CD 工具（如 GitHub Actions）相容，支持自動化部署和測試。整合時最常見的問題是 API 金鑰配置不當，這可能導致某些技能無法正常運行。

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
| Forks | 575 |
| Open Issues | 16 |
| Issue 解決率 | 41% (11 closed) |
| 最後推送 | 2026-03-27 |
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
> | [@AkairoDev](https://github.com/AkairoDev) | 12 |
> | [@liyuan97](https://github.com/liyuan97) | 12 |
> | [@zest0198](https://github.com/zest0198) | 12 |
> | [@JithendraNara](https://github.com/JithendraNara) | 4 |
> | [@divitkashyap](https://github.com/divitkashyap) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回應。
**連結**：[文件](https://github.com/MiniMax-AI/skills/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-26 ~ 2026-03-27）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #21 from divitkashyap/feat/vision-analysis

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#44](https://github.com/MiniMax-AI/skills/issues/44) | Add a description to improve Dispatch discoverability | 0 | 0 |
> | [#43](https://github.com/MiniMax-AI/skills/issues/43) | minimax-docx 技能不可用 | 0 | 0 |
> | [#41](https://github.com/MiniMax-AI/skills/issues/41) | 沙箱机制下运行 skill 无法获取 MINIMAX_API_KEY | 0 | 0 |

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

相關概念：[[多模態]] · [[自動化]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/MiniMax-AI/skills)

## 相關收錄

> [!note]- 直接競品（同子分類：技能庫）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能庫" AND file.name != "MiniMax-AI--skills"
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
> const concepts = ["多模態","自動化","API 設計"];
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
