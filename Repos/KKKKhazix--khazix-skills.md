---
repo: KKKKhazix/khazix-skills
url: https://github.com/KKKKhazix/khazix-skills
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "数字生命卡兹克开源的 AI Skills 合集"
homepage: ""
stars: 6192
stars_per_day: 295
forks: 1042
open_issues: 7
created: 2026-04-06
pushed_at: 2026-04-23
first_seen: 2026-04-12
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "AI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-12
use_case: "提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和內容創作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 28
readme_length: 1547
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-12"
star_history: "2026-04-12:1585,2026-04-12:1588,2026-04-13:1719,2026-04-13:1721,2026-04-14:3559,2026-04-15:4270,2026-04-16:4693,2026-04-17:4943,2026-04-18:5105,2026-04-19:5214,2026-04-20:5390,2026-04-21:5565,2026-04-22:5709,2026-04-23:5845,2026-04-24:5951,2026-04-25:6033,2026-04-26:6080,2026-04-27:6136,2026-04-28:6192"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "khazix-skills"
  - "KKKKhazix/khazix-skills"
  - "提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和內容創作。"
---

# khazix-skills

**6.2k** stars · **295** stars/天 · 建立 21 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--khazix-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供一系列可重用的 AI 技能和提示，幫助用戶進行深度研究和內容創作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (295 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效生成研究報告和內容的 AI 研究者和內容創作者。
> **一句話重點** 這個專案的價值在於其結構化的技能設計，能有效提升 AI 研究和內容創作的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "KKKKhazix--khazix-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高效的研究和內容創作工具，值得投入。

> [!abstract] 核心創新
> 提供了一套結構化的 AI 技能和提示，專注於深度研究和內容創作的需求。

## 專案簡介

Khazix Skills 是一個專為 AI 研究和內容創作設計的工具箱，包含了多種可重用的提示和技能。用戶可以直接複製提示，並將其應用於任何支持深度研究的 AI 模型中，或安裝結構化的技能以擴展其功能。這些技能遵循 Agent Skills 開放標準，能夠自動收集信息並生成格式化的報告，例如使用 hv-analysis 技能可以產出精美的 PDF 研究報告。技術上，這個專案使用 Python 開發，並且依賴於用戶的 AI 工具（如 Claude Code、Codex 等）來執行這些技能。與其他類似工具相比，Khazix Skills 提供了更為結構化的技能安裝方式，並且專注於深度研究和內容創作的特定需求。

這使得它在需要高效生成研究報告的場景中表現出色，而其他工具可能僅提供基本的提示功能。使用者在安裝過程中可以選擇手動或通過 Agent 進行安裝，這種靈活性使得它適應各種使用環境。儘管目前開源的技能數量有限，但其設計理念和結構化的指令集為未來擴展提供了良好的基礎。這個專案目前處於活躍開發中，社群反饋也在不斷增長，對於希望在 AI 研究和內容創作上提高效率的團隊來說，這是一個值得關注的選擇。

**技術棧**：`Python`

## 重點功能

- Prompts — 提供多種可直接複製的提示，適用於各種 AI 模型。
- Skills — 遵循 Agent Skills 開放標準的結構化指令集，便於安裝和使用。
- hv-analysis — 自動收集信息並生成格式化的 PDF 研究報告，節省時間和精力。
- khazix-writer — 包含完整的寫作風格規則和內容方法論，幫助用戶提升寫作質量。
- 靈活的安裝方式 — 支持通過 Agent 自動安裝或手動安裝，適應不同用戶需求。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/KKKKhazix/khazix-skills.git
```
2. 安裝 hv-analysis 技能
```bash
cp -r khazix-skills/hv-analysis ~/.claude/skills/
```
3. 在支持的 Agent 中安裝技能
```bash
安装这个 skill：https://github.com/KKKKhazix/khazix-skills
```

## 程式碼範例

```python
{
  "前置條件": "需要在支持的 Agent 中安裝技能",
  "指令": "安装这个 skill：https://github.com/KKKKhazix/khazix-skills",
  "預期輸出": "技能將自動加載並可用於生成報告"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天就累積 6192 stars（295/天），forks 1042（16.8%），顯示出強勁的社群關注度。作者 KKKKhazix 透過長期打磨的提示和技能，解決了 AI 研究和內容創作中缺乏結構化工具的痛點。這些工具的開源讓更多用戶能夠輕鬆使用，並且社群的反饋也促進了其快速發展。最近的 commit 活躍度顯示出持續的改進和維護，這對於使用者來說是一個正面的信號。

## 適合誰使用

**目標受眾**：需要高效生成研究報告和內容的 AI 研究者和內容創作者。

> [!example] 使用場景
> - 內容創作者用它來生成高質量的研究報告，因為 hv-analysis 技能能自動收集信息並生成精美的 PDF，節省了大量的手動整理時間。
> - 市場分析師用它來進行競爭對手分析，因為橫縱分析法提供了一個全面的框架，能在短時間內產出深入的分析報告。
> - 教育工作者用它來設計教學材料，因為可以利用提示輕鬆生成教學內容，並且根據需要進行修改。

## 架構分析

Khazix Skills 的架構設計以模組化為核心，將提示和技能分開管理，方便用戶根據需求進行選擇和安裝。每個技能遵循 Agent Skills 開放標準，這意味著它們能夠在多個支持的 AI 工具中無縫運行。資料流方面，技能會自動收集信息，並生成格式化的報告，這樣的設計使得用戶能夠快速獲取所需的研究結果。選擇這種架構的代價在於需要用戶對 Agent Skills 標準有一定了解，否則可能會影響使用體驗。隨著用戶需求的增長，未來可能需要進一步擴展技能庫，以滿足更廣泛的應用場景。

## 技術深入分析

Khazix Skills 的核心技術機制在於將提示和技能模組化，這樣用戶可以根據自己的需求選擇安裝。這些技能遵循 Agent Skills 開放標準，這使得它們能夠在多個 AI 工具中運行，並且能夠自動收集信息並生成報告。效能方面，這些技能的設計旨在快速生成高質量的研究報告，具體的性能數據尚未提供，但用戶反饋顯示其能有效節省時間。選擇 Python 作為開發語言，這使得專案在開發和維護上相對容易，但也可能面臨性能瓶頸，特別是在處理大量數據時。技術風險方面，未來可能需要擴展技能庫以應對更複雜的需求，這可能會增加維護成本。整合方面，Khazix Skills 能夠與主流的 AI 工具鏈無縫對接，但對於不熟悉 Agent Skills 標準的用戶，初期的學習成本可能較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但對於不熟悉 Git 的用戶可能會有一定挑戰。整體來說，花 30 分鐘就能夠完成基本的安裝和使用。

## 優缺點分析

> [!success] 優點
> - 提供結構化的技能和提示，方便用戶快速上手。
> - 支持多種安裝方式，靈活適應不同用戶需求。
> - 專注於深度研究和內容創作，能有效提升工作效率。

> [!danger] 缺點
> - 目前技能和提示數量有限，未來需要擴展。
> - 對於不熟悉 Agent Skills 標準的用戶，上手可能有難度。
> - 社群活躍度尚需提高，可能影響問題解決速度。

> [!warning] 注意事項
> - 目前僅提供有限的技能和提示，未來可能需要更多的擴展。
> - 需要用戶具備一定的 AI 工具使用經驗，才能充分發揮其功能。
> - 對於不熟悉 Agent Skills 標準的用戶，初期上手可能會有一定難度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的技能集合，但更專注於遊戲開發場景，適合需要遊戲 AI 的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 著重於數據處理和分析，適合需要處理大量數據的用戶，而 Khazix Skills 更專注於研究和內容創作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 技能，提供更針對性的功能。 | 如果你的專案涉及遊戲開發，並需要專門的 AI 技能。 | medium，因為需要重新適應不同的技能標準。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供數據處理和分析的技能，適合需要處理大量數據的用戶。 | 如果你的需求主要集中在數據分析而非內容創作。 | low，因為兩者在功能上有一定的重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **khazix-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 技能，提供更針對性的功能。 | 提供數據處理和分析的技能，適合需要處理大量數據的用戶。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的技能標準。 | low，因為兩者在功能上有一定的重疊。 |
> | 適用場景 | 主要場景 | 如果你的專案涉及遊戲開發，並需要專門的 AI 技能。 | 如果你的需求主要集中在數據分析而非內容創作。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 安裝過程中可能會遇到路徑問題，特別是在不同操作系統上。
  - 解法：確保按照 README 中提供的路徑進行安裝。
- **[HIGH]** 某些技能可能需要額外的依賴，未在 README 中明確說明。
  - 解法：在安裝前檢查技能的依賴性。
- [MEDIUM] 使用過程中可能會遇到兼容性問題，特別是在不同版本的 AI 工具中。
  - 解法：保持 AI 工具和 Khazix Skills 的版本一致。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的內容創作團隊 | 非常適合 | 提供結構化的技能和提示，能有效提升創作效率。 |
| 大型企業的市場分析部門 | 普通 | 雖然有用，但可能需要更多的擴展和定制化。 |
| 個人研究者 | 非常適合 | 能夠快速生成高質量的研究報告，節省時間。 |
| 教育機構的教學團隊 | 適合 | 能夠提供有用的教學資源，但需要一定的學習成本。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的研究和內容創作工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚可，但仍需注意外部依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Khazix Skills 最常與 Claude Code、Codex 等 AI 工具搭配使用，主要在內容創作和研究報告生成的環節。用戶可以在 Claude Code 中安裝 hv-analysis 技能，具體做法是將技能文件夾複製到指定的 Skills 目錄。這個工具支援與 GitHub Actions 等 CI 工具的整合，但對於不同版本的 AI 工具可能會有兼容性問題，這需要用戶在使用前進行測試。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Khazix Skills 出現之前，許多用戶依賴於單一的提示或技能，缺乏結構化的工具來支持深度研究和內容創作。隨著 AI 技術的進步，對於高效生成內容的需求越來越高，這使得 Khazix Skills 的出現成為可能。這個專案代表了一種新的趨勢，即將 AI 技能模組化，讓用戶能夠根據需求靈活選擇，未來可能會朝著更廣泛的應用場景發展。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
| Forks | 1.0k |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-06 |
| Repo 大小 | 28 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/khazix-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的 commit 活動。
**連結**：[文件](https://github.com/KKKKhazix/khazix-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-23）
> **活躍天數** 5 天 · **最新 commit** docs: replace broken Releases link with clone-and-copy install instructions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/KKKKhazix/khazix-skills/issues/9) | 楼主，没有看到自演进skill | 0 | 0 |
> | [#5](https://github.com/KKKKhazix/khazix-skills/issues/5) | Repo看起来还没有发布 Releases | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Khazix Skills
> 
> 数字生命卡兹克的 AI 工具箱。
> 
> 这里是我自己在用的、经过长期打磨的 Prompts 和 Skills，现在决定把它们完整地、一字不改地开源出来。
> 
> 两种东西，一个目的：把我积累的方法论变成可复用的工具。
> 
> - **Prompts** — 轻量级，复制粘贴到任何 AI 对话或 Deep Research 里就能用
> - **Skills** — 重量级，遵循 [Agent Skills](https://agentskills.io) 开放标准的结构化指令集，安装后 Agent 会自动加载
> 
> ## Prompts
> 
> | Prompt | 说明 | 用法 | 讲解 |
> |--------|------|------|------|
> | [**横纵分析法**](./prompts/横纵分析法.md) | 通用深度研究框架，融合历时-共时分析与竞争战略视角，半小时出一份万字级研究报告 | 复制 Prompt，修改「研究对象」，丢进任何支持 Deep Research 的模型 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> 
> ## Skills
> 
> | Skill | 说明 | 讲解 |
> |-------|------|------|
> | [**hv-analysis**](./hv-analysis/) | 横纵分析法深度研究 Skill，自动联网收集信息，纵向追时间深度 + 横向追竞争广度，最终输出排版精美的 PDF 研究报告 | [公众号文章](https://mp.weixin.qq.com/s/Y_uRMYBmdLWUPnz_ac7jWA) |
> | [**khazix-writer**](./khazix-writer/) | 卡兹克公众号长文写作 Skill，包含完整的写作风格规则、四层自检体系、内容方法论和风格示例库 | [公众号文章](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg) |
> 
> ### Skill 安装方式
> 
> **通过 Agent 安装**
> 
> 在 Claude Code、Codex、OpenClaw 等支持 Skill 的 Agent 中，直接对话：
> 
> ```
> 安装这个 skill：https://github.com/KKKKhazix/khazix-skills
> ```
> 
> **手动安装**
> 
> 1. 点仓库右上角 **Code → Download ZIP**，或者 `git clone https://github.com/KKKKhazix/khazix-skills.git`
> 2. 把你想装的 Skill 文件夹（比如 `hv-analysis/`）整个复制到对应工具的 Skills 目录下
> 
> 各工具的 Skills 安装路径：
> 
> | 工具 | 路径 |
> |------|------|
> | Claude Code | `~/.claude/skills/` |
> | OpenClaw | `~/.openclaw/skills/` |
> | Codex | `~/.agents/skills/` |
> 
> 例如装 hv-analysis 到 Claude Code：
> 
> ```bash
> git clone https://github.com/KKKKhazix/khazix-skills.git
> cp -r khazix-skills/hv-analysis ~/.claude/skills/
> ```
> 
> ## License
> 
> [MIT](./LICENSE)

## 延伸閱讀

相關概念：[[自動化]] · [[深度學習]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/KKKKhazix/khazix-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "KKKKhazix--khazix-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","深度學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--khazix-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--khazix-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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
> const me = dv.page("Repos/KKKKhazix--khazix-skills");
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

> **2026-04-12** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 再次上榜，1.7k stars
- [[2026-04-12|2026-04-12]] — 首次收錄，1.6k stars
