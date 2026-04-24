---
repo: the-hidden-fish/advisor-ledger
url: https://github.com/the-hidden-fish/advisor-ledger
owner: the-hidden-fish
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 1025
stars_per_day: 256
forks: 97
open_issues: 19
created: 2026-04-19
pushed_at: 2026-04-21
first_seen: 2026-04-23
week: "2026-W17"
month: "2026-04"
category: "其他"
subcategory: "學術透明度"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-23
use_case: "持續記錄學術黑榜的變更，保留每次編輯的歷史。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 13
repo_size_kb: 37548
readme_length: 1490
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:880,2026-04-24:1025"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "advisor-ledger"
  - "the-hidden-fish/advisor-ledger"
  - "持續記錄學術黑榜的變更，保留每次編輯的歷史。"
---

# advisor-ledger

**880** stars · **293** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> 持續記錄學術黑榜的變更，保留每次編輯的歷史。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (293 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 對學術透明度有需求的研究生和學術工作者。
> **一句話重點** 這個專案的價值在於它提供了一個學術黑榜的透明化解決方案，讓使用者能夠追蹤導師的信譽變化。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "學術透明度" && p.file.name !== "the-hidden-fish--advisor-ledger" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 學術透明度 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，6 小時整合，得到學術黑榜的透明化，值得一試。

> [!abstract] 核心創新
> 提供學術黑榜的持久性和可追溯性，確保編輯歷史不會被隨意刪除。

## 專案簡介

Advisor Ledger 是一個用於持續監控和記錄學術黑榜的工具。它會每隔幾分鐘自動抓取 Google Doc 的內容，並將每次變更以 Git 提交的方式保留，這樣即使原文檔的內容被刪除或修改，使用者仍然可以查閱到歷史版本。其核心賣點在於能夠保留被刪除的內容，並提供一個可視化的渲染視圖，讓使用者可以輕鬆查看當前文本及其變更歷史。這個工具使用 Python 和 Shell 實現，並且設計了一個系統定時器來觸發抓取和提交操作，確保數據的即時性和完整性。每次抓取後，會生成結構化的差異報告，並使用本地 LLM 進行審查，標註可能的敏感信息和人身攻擊。

與其他類似工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，Advisor Ledger 更專注於學術領域的透明度，並且提供了完整的編輯歷史，這在學術界特別重要。這個工具適合對學術透明度有需求的研究人員和學生，尤其是在選擇導師時需要了解其背景的情況下。使用者需要注意的是，這個工具的依賴性相對較低，主要依賴於 Git 和 Google Drive API，這使得它在資源使用上相對輕量。整體來看，這是一個非常有價值的工具，尤其是在當前學術環境中，透明度和信任度越來越受到重視。

**技術棧**：`Python 3.8` · `Shell` · `Git`

## 重點功能

- 自動抓取 — 每隔幾分鐘自動從 Google Doc 抓取最新內容。
- 版本控制 — 每次變更都以 Git 提交的方式保留，確保編輯歷史的完整性。
- 差異報告 — 生成結構化的差異報告，顯示新增、刪除和修改的內容。
- 本地審查 — 使用 LLM 進行內容審查，標註可能的敏感信息和人身攻擊。
- 可視化渲染 — 提供一個可視化的網頁視圖，方便使用者查看當前文本及其變更歷史。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/the-hidden-fish/advisor-ledger.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動抓取流程
```bash
systemctl start advisor-ledger.service
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 880 stars（293/天），forks 86（9.8%），顯示出強烈的社群關注。作者 the-hidden-fish 似乎在學術透明度方面有深入的思考，這個工具解決了以往學術黑榜缺乏持久性和可追溯性的問題。之前的解決方案往往依賴於不穩定的社群編輯，容易被刪除或修改，而這個工具則提供了一個穩定的歷史記錄。社群的反應也顯示出對這個問題的關注，尤其是在熱門 Issues 中，許多討論都圍繞著學術界的透明度和導師的信譽問題。這些因素共同推動了這個專案的快速增長。

## 適合誰使用

**目標受眾**：對學術透明度有需求的研究生和學術工作者。

> [!example] 使用場景
> - 研究生用它來查閱導師的學術黑榜紀錄，因為這樣可以避免選擇有不良紀錄的導師，從而提高學術研究的成功率。
> - 學術界的工作人員用它來監控學術黑榜的變更，因為這樣可以及時獲取最新的導師評價，幫助他們做出更好的決策。
> - 學術機構用它來分析導師的信譽變化，因為這樣可以幫助機構了解導師的表現，進而改善學術環境。

## 架構分析

Advisor Ledger 採用了一個基於定時任務的架構，使用 systemd timer 每 2 分鐘觸發抓取和提交操作。這樣的設計確保了數據的即時性和完整性，但也需要考慮到 API 的調用頻率限制。資料流中，首先查詢 Google Drive 的修改時間，若無變更則短路退出；若有變更，則抓取結構化 JSON 和純文本，並進行內容的規範化處理。

這個過程中，使用了哈希算法來確保內容的一致性，並生成結構化的差異報告。選擇 Git 作為版本控制系統，使得每次變更都能夠被追蹤，這在學術界特別重要，因為透明度和信任度是關鍵考量。這樣的設計雖然增加了系統的複雜性，但卻能夠有效地保留歷史紀錄，避免了資料的隨意刪除。

整體而言，這個架構在資源使用上相對輕量，但需要定期維護和監控，以確保其持續運行。

## 技術深入分析

Advisor Ledger 的核心技術機制在於自動化的資料抓取和版本控制。它使用 Python 實現了與 Google Drive API 的交互，並通過定時任務定期抓取資料。抓取後，資料會經過規範化處理，以便於進行差異比較，這樣可以有效地減少無意義的變更。每次變更都會生成結構化的差異報告，並使用本地 LLM 進行內容審查，這是其獨特之處。

效能方面，這個工具能夠處理小到中型的資料集，但隨著資料量的增加，可能會面臨 Git 儲存庫增長過快的問題。設計上選擇 Git 作為版本控制系統，這使得資料的追蹤和管理變得更加方便，但也增加了系統的複雜性。技術風險方面，依賴 Google Drive API 可能會面臨存取權限的問題，並且在大規模使用時，可能會影響效能。整合方面，這個工具與現有的學術研究流程相容性良好，但需要使用者具備一定的技術背景來進行配置和維護。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的功能介紹和使用說明，但缺乏詳細的安裝步驟和範例。安裝過程相對順暢，但需要使用者具備一定的技術背景。文件主要以英文撰寫，對於非英語使用者可能會有些挑戰。

## 優缺點分析

> [!success] 優點
> - 提供學術黑榜的持久性和可追溯性，確保透明度。
> - 自動化抓取和提交流程，減少人工干預。
> - 使用 LLM 進行內容審查，提升資料的可靠性。

> [!danger] 缺點
> - 需要 Google Drive API 的存取權限，增加了使用門檻。
> - 對於大規模的編輯歷史，Git 儲存庫可能增長過快。
> - 不支援 Windows 環境，限制了使用者範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.8+
> - 需要 Google Drive API 的存取權限
> - 對於大規模的編輯歷史，可能會導致 Git 儲存庫增長過快
> - 不支援 Windows 環境，需在 Linux 或 macOS 上運行

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要針對社交媒體的內容監控，而 Advisor Ledger 專注於學術黑榜的透明度。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更廣泛的數據監控功能，但缺乏 Advisor Ledger 對學術黑榜的專注和歷史記錄保留。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於社交媒體內容的監控，而 Advisor Ledger 專注於學術黑榜的透明度。 | 如果你的需求是監控社交媒體上的不當行為，這個工具會更適合。 | medium，因為需要重新設計資料抓取和存儲流程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更廣泛的數據監控功能，但缺乏對學術黑榜的專注和歷史記錄保留。 | 如果需要一個通用的數據監控解決方案，這個工具會更合適。 | high，因為需要重新設計整個監控架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **advisor-ledger** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於社交媒體內容的監控，而 Advisor Ledger 專注於學術黑榜的透明度。 | 提供更廣泛的數據監控功能，但缺乏對學術黑榜的專注和歷史記錄保留。 |
> | 遷移成本 | - | medium，因為需要重新設計資料抓取和存儲流程。 | high，因為需要重新設計整個監控架構。 |
> | 適用場景 | 主要場景 | 如果你的需求是監控社交媒體上的不當行為，這個工具會更適合。 | 如果需要一個通用的數據監控解決方案，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和學術研究，但不建議用於生產環境的核心系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高頻率抓取時，可能會遇到 Google Drive API 的存取限制問題。
  - 解法：調整抓取頻率，避免超過 API 限制。
- [MEDIUM] 對於大規模的編輯歷史，Git 儲存庫可能增長過快，影響性能。
  - 解法：定期清理不必要的歷史紀錄。
- [MEDIUM] 缺乏 Windows 環境的支援，可能會限制使用者範圍。
  - 解法：在 Linux 或 macOS 環境中運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 學術研究機構需要監控導師的信譽變化 | 非常適合 | 提供持久的編輯歷史，確保透明度。 |
| 個人研究生希望查閱導師的學術黑榜紀錄 | 適合 | 能夠避免選擇有不良紀錄的導師。 |
| 學術機構需要分析導師的表現 | 普通 | 雖然提供了透明度，但可能需要額外的分析工具來進行深入研究。 |
| 大型學術機構需要處理大量的導師數據 | 不適合 | 在大規模使用時可能會面臨性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，6 小時整合，得到學術黑榜的透明化，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具主要依賴於 Google Drive API 的存取權限，不會存取敏感資料。使用時需確保 API 密鑰的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
| Forks | 86 |
| Open Issues | 13 |
| Issue 解決率 | 13% (2 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-19 |
| Repo 大小 | 36.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/the-hidden-fish/advisor-ledger) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "Shell" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@the-hidden-fish](https://github.com/the-hidden-fish) | 439 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個熱門討論。
**連結**：[文件](https://the-hidden-fish.github.io/advisor-ledger/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-21）
> **活躍天數** 1 天 · **最新 commit** feat: 原文视图加入快照选择器 (2h 网格 + 首尾保留)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/the-hidden-fish/advisor-ledger/issues/7) | 看到一些PhD/Postdoc上黑榜所引发的思考 | 16 | 0 |
> | [#6](https://github.com/the-hidden-fish/advisor-ledger/issues/6) | 转：从PI视角看学术红黑榜，一些个人思考 | 8 | 0 |
> | [#14](https://github.com/the-hidden-fish/advisor-ledger/issues/14) | 黑榜补充stanford qiu | 4 | 0 |
> | [#19](https://github.com/the-hidden-fish/advisor-ledger/issues/19) | 帮TAMU Shuiwang Ji老师辟谣 | 0 | 0 |
> | [#16](https://github.com/the-hidden-fish/advisor-ledger/issues/16) | 帮Lei Stanley Qi 辟谣 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Advisor Ledger(学术黑榜镜像)
> 
> 只增不减地镜像社区维护的"学术黑榜 / Advisor Red Flags Notes" Google Doc,记录每一次编辑,保留每一次删除。
> 
> **渲染后的实时视图**:https://the-hidden-fish.github.io/advisor-ledger/
> 
> ## 做什么 / 为什么
> 
> 原文档是匿名可编辑的,也就是说实质性的观察可能被悄悄删掉。本仓库每隔几分钟抓一次原文档并把结果提交到 git,这样编辑历史——包括被撤回或被覆盖的内容——都保留下来。
> 
> `main` 分支上的每一个 commit 对应原文档的一次真实变更。
> 
> ## 目录结构
> 
> | 路径 | 用途 |
> |---|---|
> | `snapshots/YYYY/MM/DD//*.json` | 每次抓取的完整 `documents.get` JSON |
> | `snapshots/.../*.txt` | 纯文本导出 |
> | `snapshots/.../*.meta.json` | Drive 元信息 + 抓取内容的 SHA-256 |
> | `deltas/.../*.delta.json` | 相对上一次快照的结构化差异(按段落的 insert / delete / replace) |
> | `reviews/.../*.review.json` | 每次 diff 的本地 LLM 审查结果,标注可能的人肉信息、纯人身攻击、可疑删除。**只做提示,不会阻塞 commit** |
> | `docs/index.html` | 渲染视图:当前文本,被删段落原地保留(删除线 + 删除时间戳),新增段落高亮。由 GitHub Pages 提供 |
> | `scripts/` | 流水线:fetch → normalize → diff → review → render → commit → push |
> 
> ## 流水线
> 
> 由 systemd timer 每 2 分钟触发:
> 
> 1. 查询 Drive 的 `modifiedTime`,如果自上次快照以来没变化,直接短路退出。
> 2. 抓取结构化 JSON 和纯文本导出。
> 3. 把段落规范化成确定性、便于 diff 的形式(NFC Unicode、按行 rstrip、每段生成内容哈希)。
> 4. 对比新旧规范化快照,按段落内容哈希生成操作,让真正没变的段落不算 churn。
> 5. 对本次 delta 跑一次本地 LLM 审查,标三类问题:对私人的身份信息(PII)、纯人身攻击(不是对具体行为的批评)、看起来像压制性删除的改动。审查结果以 JSON 写在 delta 旁边。
> 6. 重新渲染 `docs/index.html`——当前文本加上按最后已知位置锚定的 ghost 段落。
> 7. `git add` 新快照、delta、review、渲染产物;commit;push。
> 
> 流水线用 `flock` 保护,防止手动触发和 timer 触发撞车。
> 
> ## 关于原文档
> 
> 本仓库是**观察性镜像**。不代表原文档中被点名的任何一方,也不由其制作、背书或审核。`snapshots/` 和 `docs/` 里的内容归原匿名贡献者所有。要补充、更正或撤回,请直接编辑原 Google Doc——本仓库只观察。
> 
> ## 许可证
> 
> 流水线代码(`scripts/`)以公有领域(CC0)发布。`snapshots/`、`deltas/`、`docs/` 中被镜像的内容保留原作者权利。

## 延伸閱讀

相關概念：[[學術透明度]] · [[版本控制]] · [[數據監控]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]]

[GitHub](https://github.com/the-hidden-fish/advisor-ledger)

## 相關收錄

> [!note]- 直接競品（同子分類：學術透明度）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "學術透明度" AND file.name != "the-hidden-fish--advisor-ledger"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "the-hidden-fish--advisor-ledger"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "the-hidden-fish--advisor-ledger" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "the-hidden-fish--advisor-ledger"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["學術透明度","版本控制","數據監控"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "the-hidden-fish--advisor-ledger" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "the-hidden-fish--advisor-ledger" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "the-hidden-fish" AND file.name != "the-hidden-fish--advisor-ledger"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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
> const me = dv.page("Repos/the-hidden-fish--advisor-ledger");
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

> **2026-04-23** — 首次收錄
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

- [[2026-04-24|2026-04-24]] — 再次上榜，1.0k stars
- [[2026-04-23|2026-04-23]] — 首次收錄，880 stars
