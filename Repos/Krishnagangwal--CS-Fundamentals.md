---
repo: Krishnagangwal/CS-Fundamentals
url: https://github.com/Krishnagangwal/CS-Fundamentals
owner: Krishnagangwal
owner_type: User
language: N/A
license: N/A
description: "Curated CS fundamentals for placement prep: DSA,Computer Networks, DBMS & SQL, OOPs, Operating Systems, System Design & Software Engineering"
homepage: ""
stars: 1781
stars_per_day: 198
forks: 167
open_issues: 3
created: 2026-06-28
pushed_at: 2026-06-28
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "教學資源"
subcategory: "面試準備"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "提供計算機科學基礎知識的精選資源，幫助求職準備。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-08"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 284125
readme_length: 5778
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:957,2026-06-30:959,2026-07-01:1215,2026-07-01:1218,2026-07-02:1331,2026-07-02:1331,2026-07-03:1444,2026-07-03:1446,2026-07-04:1517,2026-07-04:1519,2026-07-05:1586,2026-07-05:1586,2026-07-06:1645,2026-07-07:1713,2026-07-08:1781"
tags:
  - github
  - "category/教學資源"
  - "lang/other"
  - easy_install
aliases:
  - "CS-Fundamentals"
  - "Krishnagangwal/CS-Fundamentals"
  - "提供計算機科學基礎知識的精選資源，幫助求職準備。"
---

# CS-Fundamentals

**1.8k** stars · **198** stars/天 · 建立 9 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供計算機科學基礎知識的精選資源，幫助求職準備。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (198 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望準備計算機科學面試的學生和求職者。
> **一句話重點** 這個專案提供了一個全面的計算機科學基礎知識資源庫，特別適合求職準備。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "面試準備" && p.file.name !== "Krishnagangwal--CS-Fundamentals" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 面試準備 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到全面的面試準備資源，值得。

## 專案簡介

這個專案是一個針對計算機科學基礎知識的精選資源庫，旨在幫助求職者準備面試。它涵蓋了多個主題，包括資料結構與演算法（DSA）、計算機網路、資料庫管理系統（DBMS）、物件導向程式設計（OOP）、作業系統、系統設計及軟體工程。使用者可以從各個資料夾中找到 PDF、筆記、速查表和面試問題庫，這些資源都是為了提升求職者的競爭力而精心整理的。最關鍵的指令是直接訪問各個資料夾以獲取所需的學習材料，這使得求職者能夠針對性地準備面試問題。這個工具的賣點在於其全面性和組織性，讓使用者能夠快速找到所需的學習資源。技術上，這個專案並不依賴特定的框架或語言，而是以文件的形式提供資料，降低了使用門檻。

與其他類似工具相比，如 LeetCode 或 HackerRank，這個專案更專注於基礎知識的整理，而不是單一的練習平台。對於需要全面準備的求職者來說，這是一個非常有價值的資源。使用者可能會發現，某些主題的資料較為簡略，這可能需要額外的學習資源來補充。這個專案目前仍在活躍開發中，社群的參與度尚可，但仍有許多開放的問題需要解決。整體來看，這是一個適合任何計算機科學學生或求職者的資源庫，尤其是那些希望在面試中表現出色的人。

## 重點功能

- 全面的主題覆蓋 — 包含 DSA、計算機網路、DBMS、OOP、作業系統等多個領域的資料。
- 精選面試問題庫 — 提供各主題的面試問題，幫助使用者針對性準備。
- 多種格式的學習資源 — 包含 PDF、DOCX 和 Markdown 格式的資料，方便不同需求的使用者。
- 結構化的資料夾 — 清晰的資料夾結構讓使用者能快速找到所需的資源。
- 持續更新 — 專案活躍，持續增加新的學習資源和面試問題。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/Krishnagangwal/CS-Fundamentals.git
```
2. 導航到資料夾
```bash
cd CS-Fundamentals
```
3. 選擇需要的主題資料夾
```bash
ls
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 1781 stars（198/天），forks 167（9.4%），顯示出良好的關注度。作者 Krishnagangwal 似乎專注於教育資源的整理，這在求職準備中是一個明顯的需求。此專案填補了求職者在基礎知識準備上的空白，特別是針對面試問題的整理。社群對於開源資源的需求持續增長，這使得這個專案在短時間內獲得了大量的關注。forks/stars 比率為 9.4%，顯示出相對較高的實際使用意圖。

## 適合誰使用

**目標受眾**：希望準備計算機科學面試的學生和求職者。

> [!example] 使用場景
> - 計算機科學學生用它來準備面試，因為它提供了全面的資料結構與演算法資源，能有效提升面試表現。
> - 求職者用它來整理面試問題，因為它包含大量的面試問題庫，能幫助他們針對性地準備。
> - 新手工程師用它來了解計算機網路的基本概念，因為它提供了清晰的筆記和速查表，便於快速學習。

## 架構分析

這個專案的架構是以資料夾和文件的形式組織，旨在提供一個清晰的學習資源庫。每個主題都有獨立的資料夾，內含相關的學習資料和面試問題。這種設計使得使用者能夠快速找到所需的資源，降低了學習的門檻。

資料的組織方式讓使用者能夠根據自己的需求選擇學習的主題，這樣的靈活性是其主要優勢之一。由於所有資料都是靜態文件，這意味著不需要額外的伺服器或資料庫支持，這樣的設計使得整體架構輕量且易於維護。擴展性方面，隨著新主題或資料的加入，使用者只需在相應的資料夾中添加文件即可，這使得專案能夠隨著時間不斷增長和更新。

## 技術深入分析

這個專案的核心技術機制是以文件的形式組織學習資源，這使得使用者能夠輕鬆地訪問和學習各種計算機科學主題。資料夾結構清晰，使用者可以根據自己的需求選擇特定的主題進行學習。由於這些資料都是靜態文件，這意味著不需要任何伺服器支持，降低了使用的複雜度。效能上，這種靜態資料的方式使得存取速度快，並且不會因為伺服器負載而影響使用體驗。設計上，選擇靜態文件而非動態生成的內容，雖然降低了互動性，但卻提高了資料的穩定性和可靠性。這個專案的風險在於資料可能隨著時間而過時，使用者需要自行確認資料的最新性。整合方面，由於專案以文件形式存在，與現有的學習平台或工具鏈整合的難度較低，但缺乏API或互動功能可能會限制其擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了資料夾結構和主題概述，但缺乏具體的使用範例。安裝過程非常簡單，只需克隆專案即可。沒有提供多語言支持，主要以英文為主。整體來說，花 30 分鐘應該能夠順利上手並找到所需的資源。

## 優缺點分析

> [!success] 優點
> - 資源全面，涵蓋多個計算機科學主題。
> - 結構清晰，方便使用者快速找到所需資料。
> - 持續更新，能夠獲得最新的學習資源。

> [!danger] 缺點
> - 缺乏互動性，無法進行即時練習。
> - 部分資料可能過時，需自行驗證。
> - 社群參與度尚可，開放問題解決率低。

> [!warning] 注意事項
> - 資料更新頻率不明，可能存在過時的內容。
> - 缺乏互動性，無法進行即時練習。
> - 部分主題的資料可能較為簡略，需額外查找資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [LeetCode/LeetCode](https://github.com/LeetCode/LeetCode) | LeetCode 更專注於實際的程式碼練習，而本專案則提供基礎知識的整理，適合不同的學習需求。 |
| [HackerRank/HackerRank](https://github.com/HackerRank/HackerRank) | HackerRank 提供即時編程環境，而本專案則是靜態的學習資源，適合需要理論基礎的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| LeetCode | LeetCode 提供即時編程環境，讓使用者能夠在平台上直接練習，而本專案則是靜態的學習資源。 | 如果你需要即時練習和反饋，LeetCode 是更好的選擇。 | low，因為兩者的學習目標相似，但使用方式不同。 |
| HackerRank | HackerRank 提供了廣泛的編程挑戰和即時反饋，而本專案則專注於基礎知識的整理。 | 如果你需要一個互動平台來練習編程，HackerRank 更適合。 | low，因為兩者的學習目標相似，但使用方式不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **CS-Fundamentals** | **LeetCode** | **HackerRank** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | LeetCode 提供即時編程環境，讓使用者能夠在平台上直接練習，而本專案則是靜態的學習資源。 | HackerRank 提供了廣泛的編程挑戰和即時反饋，而本專案則專注於基礎知識的整理。 |
> | 遷移成本 | - | low，因為兩者的學習目標相似，但使用方式不同。 | low，因為兩者的學習目標相似，但使用方式不同。 |
> | 適用場景 | 主要場景 | 如果你需要即時練習和反饋，LeetCode 是更好的選擇。 | 如果你需要一個互動平台來練習編程，HackerRank 更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人學習和準備，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 部分資料可能過時，無法保證最新性
  - 解法：使用者需自行查證資料的有效性
- [MEDIUM] 缺乏互動性，無法進行即時練習
  - 解法：可搭配其他互動平台使用
- [MEDIUM] 社群參與度低，開放問題解決率低
  - 解法：可考慮參與社群貢獻以提高活躍度

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 計算機科學專業的學生準備面試 | 非常適合 | 提供全面的基礎知識和面試問題 |
| 新手工程師需要快速了解計算機網路 | 適合 | 資料結構清晰，便於快速學習 |
| 需要即時編程練習的求職者 | 不適合 | 缺乏互動性和即時反饋 |
| 希望整理面試問題的求職者 | 非常適合 | 包含大量的面試問題庫 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到全面的面試準備資源，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案不需要高權限，且不存取敏感資料，使用安全。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-28 |
| 建立日期 | 2026-06-28 |
| Repo 大小 | 277.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Krishnagangwal/CS-Fundamentals) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Krishnagangwal](https://github.com/Krishnagangwal) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放問題解決率低。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28 ~ 2026-06-28）
> **活躍天數** 1 天 · **最新 commit** Add all PDF and DOCX documents from Google Drive across all subject folders

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/Krishnagangwal/CS-Fundamentals/issues/3) | Enhancement: Add GitHub Issue and Pull Request Templates | 0 | 0 |
> | [#2](https://github.com/Krishnagangwal/CS-Fundamentals/issues/2) | Enhancement: Add a `CONTRIBUTING.md` guide for future contri | 0 | 0 |
> | [#1](https://github.com/Krishnagangwal/CS-Fundamentals/issues/1) | Proposal: Add an Open Source License (e.g., MIT or CC-BY-4.0 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # CS Fundamentals
> 
> A curated collection of Computer Science fundamentals for placement preparation, covering all major CS subjects. Includes PDFs, notes, cheatsheets, and interview question banks.
> 
> ## 📁 Folder Structure
> 
> ```
> CS-Fundamentals/
> ├── 📁 Computer-Network/          (3 files)
> ├── 📁 DBMS-and-SQL/              (9 files)
> ├── 📁 DSA/                       (6 files)
> ├── 📁 OOPs/                      (5 files)
> ├── 📁 Operating-System/          (5 files)
> ├── 📁 Software-Engineering/      (2 files)
> ├── 📁 System-Design/             (3 files)
> ├── 📄 HR-Interview-Questions.pdf
> ├── 📄 LeetCode-Problems.pdf
> ├── 📄 Cover-Letter-Template.docx
> ├── 📄 List-of-Companies-Hiring-Freshers-Offcampus.md
> └── 📄 25-Job-Interview-Preparation-Prompts.md
> ```
> 
> ## 📚 Topics Covered
> 
> ### [Computer Network](./Computer-Network/)
> | File | Description |
> |------|-------------|
> | [Computer-Network-Notes-for-Placements-and-GATE.pdf](./Computer-Network/Computer-Network-Notes-for-Placements-and-GATE.pdf) | Comprehensive CN notes for placements & GATE |
> | [Networking-Interview-Questions.pdf](./Computer-Network/Networking-Interview-Questions.pdf) | CN interview Q&A |
> | [CN-Roadmap.md](./Computer-Network/CN-Roadmap.md) | Topic-wise roadmap & important concepts |
> 
> ### [DBMS & SQL](./DBMS-and-SQL/)
> | File | Description |
> |------|-------------|
> | [DBMS-Handwritten-Notes.pdf](./DBMS-and-SQL/DBMS-Handwritten-Notes.pdf) | Handwritten DBMS notes |
> | [DBMS-Notes.pdf](./DBMS-and-SQL/DBMS-Notes.pdf) | DBMS theory notes |
> | [100-DBMS-Interview-Questions.pdf](./DBMS-and-SQL/100-DBMS-Interview-Questions.pdf) | Top 100 DBMS interview questions |
> | [Complete-SQL-Cheatsheet.pdf](./DBMS-and-SQL/Complete-SQL-Cheatsheet.pdf) | Complete SQL cheatsheet |
> | [SQL-Tutorial.pdf](./DBMS-and-SQL/SQL-Tutorial.pdf) | SQL tutorial |
> | [SQL-Interview-Questions-and-Answers.pdf](./DBMS-and-SQL/SQL-Interview-Questions-and-Answers.pdf) | SQL interview Q&A |
> | [SQL-Interview-QA-2.pdf](./DBMS-and-SQL/SQL-Interview-QA-2.pdf) | Additional SQL interview Q&A |
> | [Top-50-SQL-Interview-Questions.pdf](./DBMS-and-SQL/Top-50-SQL-Interview-Questions.pdf) | Top 50 SQL questions |
> | [LeetCode-SQL.pdf](./DBMS-and-SQL/LeetCode-SQL.pdf) | LeetCode SQL problems |
> 
> ### [DSA](./DSA/)
> | File | Description |
> |------|-------------|
> | [DSA-Cheatsheet.pdf](./DSA/DSA-Cheatsheet.pdf) | Data Structures & Algorithms cheatsheet |
> | [DSA-Resource.pdf](./DSA/DSA-Resource.pdf) | Comprehensive DSA resource |
> | [Complete-Resources-of-DSA.pdf](./DSA/Complete-Resources-of-DSA.pdf) | Complete DSA resource guide |
> | [Striver-SDE-Sheet-Solution.pdf](./DSA/Striver-SDE-Sheet-Solution.pdf) | Striver SDE sheet solutions |
> | [Top-50-DSA-Interview-Questions.docx](./DSA/Top-50-DSA-Interview-Questions.docx) | Top 50 DSA interview questions |
> | [Learn-DSA-for-Free.docx](./DSA/Learn-DSA-for-Free.docx) | Free DSA learning resources |
> 
> ### [OOPs](./OOPs/)
> | File | Description |
> |------|-------------|
> | [OOPs-Interview-Questions.pdf](./OOPs/OOPs-Interview-Questions.pdf) | OOP interview Q&A |
> | [OOPS-Concepts-in-Java.pdf](./OOPs/OOPS-Concepts-in-Java.pdf) | OOP concepts in Java |
> | [Python-OOP.pdf](./OOPs/Python-OOP.pdf) | OOP in Python |
> | [Principles-of-OOP-JavaScript.pdf](./OOPs/Principles-of-OOP-JavaScript.pdf) | OOP principles in JavaScript |
> | [OOP-in-CPP.pdf](./OOPs/OOP-in-CPP.pdf) | OOP in C++ |
> 
> ### [Operating System](./Operating-System/)
> | File | Description |
> |------|-------------|
> | [Operating-System-Part-1.pdf](./Operating-System/Operating-System-Part-1.pdf) | OS notes Part 1 |
> | [Operating-System-Part-2.pdf](./Operating-System/Operating-System-Part-2.pdf) | OS notes Part 2 |
> | [Operating-System-Short-Notes.pdf](./Operating-System/Operating-System-Short-Notes.pdf) | OS short revision notes |
> | [Operating-System-Interview-Questions.pdf](./Operating-System/Operating-System-Interview-Questions.pdf) | OS interview Q&A |
> | [Operating-System-Textbook-Dr-Mamta-Bansal.pdf](./Operating-System/Operating-System-Textbook-Dr-Mamta-Bansal.pdf) | OS textbook |
> 
> ### [Software Engineering](./Software-Engineering/)
> | File | Description |
> |------|-------------|
> | [Software-Engineering.pdf](./Software-Engineering/Software-Engineering.pdf) | SE notes & concepts |
> | [SE-Interview-Questions.pdf](./Software-Engineering/SE-Interview-Questions.pdf) | SE interview Q&A |
> 
> ### [System Design](./System-Design/)
> | File | Description |
> |------|-------------|
> | [System-Design-Cheatsheet.pdf](./System-Design/System-Design-Cheatsheet.pdf) | System design cheatsheet |
> | [System-Design-Notes.pdf](./System-Design/System-Design-Notes.pdf) | System design notes |
> | [System-Design-Interview-Questions.pdf](./System-Design/System-Design-Interview-Questions.pdf) | System design interview Q&A |
> | [System-Design-Cheatsheet.md](./System-Design/System-Design-Cheatsheet.md) | System design cheatsheet (markdown) |
> 
> ## 📄 General Resources
> 
> | File | Description |
> |------|-------------|
> | [HR-Interview-Questions.pdf](./HR-Interview-Questions.pdf) | HR / behavioral interview questions |
> | [LeetCode-Problems.pdf](./LeetCode-Problems.pdf) | LeetCode problem set |
> | [Cover-Letter-Template.docx](./Cover-Letter-Template.docx) | Cover letter template |
> | [List-of-Companies-Hiring-Freshers-Offcampus.md](./List-of-Companies-Hiring-Freshers-Offcampus.md) | Companies hiring freshers off-campus |
> | [25-Job-Interview-Preparation-Prompts.md](./25-Job-Interview-Preparation-Prompts.md) | AI prompts for interview prep |
> 
> ---
> 
> > This repository is a curated collection of placement and AI/ML resources gathered from various sources across the internet. I do not claim ownership of any individual document or resource. If you are the original creator of any content here and would like credit or removal, please DM me on Instagram @krishnagangwal.ai.

## 延伸閱讀

相關概念：[[資料結構與演算法]] · [[面試準備]] · [[計算機科學基礎]]

相關專案：[[WenyuChiou--awesome-agentic-ai-zh|WenyuChiou/awesome-agentic-ai-zh]] · [[datawhalechina--Agent-Learning-Hub|datawhalechina/Agent-Learning-Hub]] · [[xuchonglang--investing-for-beginners|xuchonglang/investing-for-beginners]]

[GitHub](https://github.com/Krishnagangwal/CS-Fundamentals)

## 相關收錄

> [!note]- 直接競品（同子分類：面試準備）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "面試準備" AND file.name != "Krishnagangwal--CS-Fundamentals"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "教學資源" AND file.name != "Krishnagangwal--CS-Fundamentals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Krishnagangwal--CS-Fundamentals" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Krishnagangwal--CS-Fundamentals"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料結構與演算法","面試準備","計算機科學基礎"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Krishnagangwal--CS-Fundamentals" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Krishnagangwal--CS-Fundamentals" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Krishnagangwal" AND file.name != "Krishnagangwal--CS-Fundamentals"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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
> const me = dv.page("Repos/Krishnagangwal--CS-Fundamentals");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，1.6k stars
- [[2026-07-04|2026-07-04]] — 再次上榜，1.5k stars
- [[2026-07-03|2026-07-03]] — 再次上榜，1.4k stars
- [[2026-07-02|2026-07-02]] — 再次上榜，1.3k stars
- [[2026-07-01|2026-07-01]] — 再次上榜，1.2k stars
- [[2026-06-30|2026-06-30]] — 首次收錄，957 stars
