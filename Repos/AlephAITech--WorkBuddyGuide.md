---
repo: AlephAITech/WorkBuddyGuide
url: https://github.com/AlephAITech/WorkBuddyGuide
owner: AlephAITech
owner_type: Organization
language: Python
license: MIT
description: "A practical, open-source guide to mastering WorkBuddy through real-world workflows.开源的 WorkBuddy 实战蓝皮书：教程、真实工作流、Skills、MCP、自动化与多智能体实践。"
homepage: "https://workbuddy.homes/"
stars: 1010
stars_per_day: 168
forks: 136
open_issues: 4
created: 2026-07-10
pushed_at: 2026-07-15
first_seen: 2026-07-15
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-15
use_case: "提供實用的開源指南，幫助用戶透過真實工作流掌握 WorkBuddy。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-24"
contributor_count: 5
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 123001
readme_length: 3169
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-15"
star_history: "2026-07-15:720,2026-07-15:720,2026-07-16:837,2026-07-16:839,2026-07-17:1010,2026-07-17:1010"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
  - "topic/codex"
  - "topic/guide"
  - "topic/llm"
  - "topic/workbuddy"
aliases:
  - "WorkBuddyGuide"
  - "AlephAITech/WorkBuddyGuide"
  - "提供實用的開源指南，幫助用戶透過真實工作流掌握 WorkBuddy。"
---

# WorkBuddyGuide

**1.0k** stars · **168** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`codex` `guide` `llm` `workbuddy`

> [!summary] 一句話摘要
> 提供實用的開源指南，幫助用戶透過真實工作流掌握 WorkBuddy。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (168 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速掌握 WorkBuddy 並應用於實際工作流的開發者和團隊。
> **一句話重點** 這本指南的真正價值在於其針對性和實用性，讓用戶能夠迅速掌握 WorkBuddy 的應用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "AlephAITech--WorkBuddyGuide" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到快速上手的效果，值得嘗試。

> [!abstract] 核心創新
> 這本指南不僅是功能說明書，而是聚焦於實際工作流的實戰藍皮書。

## 專案簡介

WorkBuddyGuide 是一本以實際任務為主線的開源藍皮書，旨在幫助用戶從安裝到建立 AI 團隊的全過程。用戶可以從第一篇使用手冊開始，逐步完成安裝、界面熟悉及第一個任務，然後進入更高階的多 Agent 系統設計與自動化。這本指南不僅提供了詳細的操作步驟，還涵蓋了多種工作場景的應用案例，讓用戶能夠直接參考和實踐。核心賣點在於其實用性和針對性，特別適合需要快速上手的團隊。技術上，這個專案使用了 Node.js 進行本地開發，並且依賴 VitePress 來構建文檔網站，這使得文檔的更新和部署變得高效。

相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，WorkBuddyGuide 更加注重實際工作流的應用，並且提供了豐富的案例分析，讓用戶能夠快速找到解決方案。使用者在實際操作中可能會遇到一些常見問題，如安裝過程中的依賴問題，這需要用戶具備基本的 Node.js 環境知識。這個專案目前處於早期階段，社群活躍度尚可，適合小型團隊或個人開發者進行試用。未來可能會增加更多的案例和功能，進一步提升其實用性。對於需要在短時間內掌握 WorkBuddy 的用戶，這本指南無疑是個不錯的選擇。

**技術棧**：`Node.js 22` · `VitePress`

## 重點功能

- 實戰案例 — 提供多種行業的實際應用案例，幫助用戶理解如何在工作中使用 WorkBuddy。
- 詳細使用手冊 — 包含安裝、界面介紹及第一個任務的具體步驟，適合新手快速上手。
- 多 Agent 系統設計 — 指導用戶如何設計和實現多 Agent 系統，以提升工作效率。
- 社群貢獻機制 — 鼓勵用戶提交自己的使用案例，增強社群互動和知識共享。
- 在線閱讀 — 提供完整的網站體驗，包括全文搜索和深色模式，方便用戶隨時查閱。

## 快速開始

1. 安裝 Node.js 環境
```bash
nvm install 22
```
2. 安裝依賴
```bash
npm install
```
3. 啟動本地開發伺服器
```bash
npm run dev
```

## 程式碼範例

```python
{
  "前置條件": "需要 Node.js 環境",
  "指令": "npm install",
  "預期輸出": "安裝所有依賴包，準備進行開發。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1010 stars（168/天），forks 136（13.5%），顯示出強烈的社群興趣。作者團隊由多位貢獻者組成，專注於提供實用的工作流指南，解決了用戶在使用 WorkBuddy 時缺乏實際案例的痛點。這個專案的推出正好填補了市場上對於 WorkBuddy 實戰指南的需求，並且其開源性質吸引了許多開發者參與。社群的活躍度和開放的貢獻機制也促進了專案的快速成長。

## 適合誰使用

**目標受眾**：需要快速掌握 WorkBuddy 並應用於實際工作流的開發者和團隊。

> [!example] 使用場景
> - 新手開發者用它來快速上手 WorkBuddy，因為這本指南提供了詳細的安裝和使用步驟，讓他們能在短時間內完成第一個任務。
> - 小型團隊用它來建立多 Agent 系統，因為指南中有針對不同工作場景的案例，能夠幫助他們快速找到解決方案。
> - 產品經理用它來設計工作流程，因為藍皮書中提供了各種行業的應用案例，能夠幫助他們理解如何在實際工作中應用 WorkBuddy。

## 架構分析

這個專案採用 VitePress 作為文檔生成工具，因為其輕量和快速的特性使得文檔更新變得高效。資料流方面，使用者首先需要安裝 Node.js，然後透過 npm 安裝依賴，最後啟動本地伺服器來查看文檔。選擇 VitePress 而非其他重型框架，能夠減少資源消耗，提升開發效率。擴展性方面，這個架構能夠輕鬆添加新的案例和章節，但在大量用戶同時訪問時，可能會遇到性能瓶頸。整體來說，這個架構設計是為了快速迭代和社群貢獻，適合快速變化的開發環境。

## 技術深入分析

WorkBuddyGuide 的核心技術機制是基於 Node.js 和 VitePress，這使得文檔的生成和更新變得高效。使用者可以透過 npm 安裝依賴，並在本地啟動伺服器來查看文檔，這樣的設計使得新手能夠快速上手。效能方面，這個專案能夠處理中小型團隊的需求，但在高並發訪問時可能會遇到性能瓶頸。選擇 Node.js 作為後端語言，能夠充分利用其非阻塞 I/O 的特性，提升響應速度。依賴樹相對簡單，主要依賴於 VitePress，降低了維護成本。技術風險方面，隨著用戶數量的增加，可能需要考慮更高效的伺服器架構來應對流量。整合方面，這個專案與主流的 CI/CD 工具相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，並包含了安裝和使用的範例，讓新手能夠快速上手。安裝過程相對順暢，但需要確保 Node.js 環境符合要求。整體來說，這本指南的入門體驗良好，適合新手在 30 分鐘內完成基本設置。

## 優缺點分析

> [!success] 優點
> - 提供實用的工作流案例，能夠快速上手。
> - 社群貢獻機制鼓勵用戶參與，增強知識共享。
> - 在線閱讀體驗良好，方便用戶查閱。

> [!danger] 缺點
> - 目前案例數量有限，可能無法涵蓋所有情境。
> - 對於非技術用戶，理解指南內容可能有難度。
> - 社群活躍度尚可，但仍需時間發展。

> [!warning] 注意事項
> - 僅支援 Node.js 20～24，需確保環境符合要求。
> - 目前社群案例數量有限，可能無法涵蓋所有使用情境。
> - 對於非技術用戶，可能需要額外的學習成本來理解指南內容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多 Agent 系統的構建，但缺乏實際案例指導，適合需要深度定制的開發者。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供類似功能，但主要針對遊戲開發，對於商業應用的支持較弱。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多 Agent 系統的構建，提供了更深度的技術細節，但缺乏實際案例指導。 | 如果你的團隊需要深度定制的多 Agent 系統，且有技術能力進行調整。 | medium，因為需要重新設計工作流。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 主要針對遊戲開發，提供了不同的功能集，適合遊戲相關的應用。 | 如果你的專案主要集中在遊戲開發，且需要針對遊戲場景的解決方案。 | low，因為可以直接使用類似的工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **WorkBuddyGuide** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多 Agent 系統的構建，提供了更深度的技術細節，但缺乏實際案例指導。 | 主要針對遊戲開發，提供了不同的功能集，適合遊戲相關的應用。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流。 | low，因為可以直接使用類似的工作流。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要深度定制的多 Agent 系統，且有技術能力 | 如果你的專案主要集中在遊戲開發，且需要針對遊戲場景的解決方案 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Node.js 版本中可能會遇到安裝依賴失敗的問題。
  - 解法：確保使用 Node.js 22 版本，並檢查 npm 設定。
- [MEDIUM] 社群案例數量有限，可能無法找到具體的解決方案。
  - 解法：主動參與社群，提交自己的使用案例以豐富資料庫。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊進行產品開發 | 非常適合 | 提供了實用的案例和指導，能夠快速上手並應用於實際工作中。 |
| 大型企業的複雜工作流管理 | 不適合 | 目前案例數量有限，無法滿足複雜需求。 |
| 需要快速上手的個人開發者 | 非常適合 | 詳細的使用手冊和案例能夠幫助他們迅速掌握工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到快速上手的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本專案不需要高權限，僅需基本的 Node.js 環境，且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
| Forks | 136 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-15 |
| 建立日期 | 2026-07-10 |
| 官方網站 | [Link](https://workbuddy.homes/) |
| Repo 大小 | 120.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlephAITech/WorkBuddyGuide) |
| Topics | `codex` `guide` `llm` `workbuddy` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "TypeScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liucongg](https://github.com/liucongg) | 28 |
> | [@freestylefly](https://github.com/freestylefly) | 5 |
> | [@kangarookingluohm](https://github.com/kangarookingluohm) | 4 |
> | [@KevinYoung-Kw](https://github.com/KevinYoung-Kw) | 3 |
> | [@hi-nikola](https://github.com/hi-nikola) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，鼓勵用戶參與貢獻。
**連結**：[文件](https://workbuddy.homes/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-14 ~ 2026-07-15）
> **活躍天數** 2 天 · **最新 commit** 按提交时间正序排列社区案例

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/AlephAITech/WorkBuddyGuide/issues/10) | [Bug] `bug` | 0 | 1 |
> | [#9](https://github.com/AlephAITech/WorkBuddyGuide/issues/9) | 建议优化workbuddy功能区详情介绍 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> WorkBuddy 实战蓝皮书
> 
> 从第一项任务，到一支 AI 团队
> 
>   简体中文 · English ·
>   在线阅读 ·
>   社区案例集 ·
>   帮你解决 ·
>   阅读指南 ·
>   参与共创
> 
> > 这不是官方功能说明书的改写，而是一本以真实任务为主线的实战读本。先完成安装和第一项工作，再进入移动办公、知识管理、专业诊断、内容自动化和多 Agent 团队，最后把一次成功变成团队可复用的工作系统。
> 
> ## 在线阅读
> 
> 推荐访问 **[workbuddy.homes](https://workbuddy.homes/)** 阅读。网站提供完整侧边栏、全文搜索、章节目录、深色模式、流程图和移动端适配。
> 
> GitHub 适合了解项目和参与贡献；真正阅读蓝皮书时，网站体验更完整。
> 
> ## 你会在这里看到什么
> 
> | 部分 | 内容 |
> | --- | --- |
> | 第一篇 · 使用手册 | 下载、安装、界面、第一个任务、Skill、连接器、API 和自动化 |
> | 第二篇 · 案例篇 | 办公、文件、远程、资讯、知识、会议、投资、视频、自媒体和 GEO |
> | 第三篇 · 进阶篇 | 打造 Skill、多 Agent 系统设计、自动化可靠性 |
> | 第四篇 · 岗位与行业 | 不同岗位的使用路线和行业工作流 |
> | 附录 | 常用指令模板与场景速查表 |
> 
> ## 推荐阅读方式
> 
> - **第一次使用**：从[第 1 章](./docs/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%201%20章%20初识%20WorkBuddy/index.md)开始，按顺序完成第一篇。
> - **已经有具体任务**：直接进入第二篇对应案例，跑通后再阅读第三篇。
> - **准备团队落地**：重点阅读第三、四篇，并记录权限边界、验收标准和失败回退。
> 
> 更完整的路线见[如何阅读这本蓝皮书](./docs/reading-guide.md)。
> 
> ## 帮你解决
> 
> 如果你有真实的工作场景，却不知道怎样用 WorkBuddy 完成，可以前往 **[帮你解决](https://workbuddy.homes/help/)** 提交场景问卷。
> 
> 请在问卷中说明你遇到的问题、目前的处理方式、会用到的资料、期望结果和安全边界。我们会阅读并评估每一份需求；如果需要补充信息，会通过你主动留下的联系方式与你沟通。
> 
> 具有代表性和复用价值的问题，我们会尝试制作成完整的开源 Case，写清所用 Skill、安装与使用方法、任务描述、操作过程和最终效果，并发布到[社区案例集](https://workbuddy.homes/cases/)，帮助更多遇到类似问题的人。
> 
> ## 本地阅读与开发
> 
> 需要 Node.js 20～24，推荐 Node.js 22。
> 
> ```bash
> npm install
> npm run dev
> ```
> 
> 本地构建：
> 
> ```bash
> npm run docs:build
> npm run docs:preview
> ```
> 
> ## 参与共创
> 
> 我们优先收集真实、可复现的 WorkBuddy 使用案例。提交 Case 前，请先搜索[社区案例集](https://workbuddy.homes/cases/)和[蓝皮书目录](https://workbuddy.homes/bluebook/)，确认场景或任务没有重复。若目标相同但使用了不同的 Skill、方法或交付形式，请在 PR 中说明差异。
> 
> 每个案例至少需要写清：
> 
> - **场景与问题**：谁在什么任务中遇到了什么困难。
> - **使用的 Skill**：Skill 的作用、来源、安装方式和必要配置。
> - **任务描述**：在 WorkBuddy 中输入的提示词、步骤或自动化设置。
> - **执行过程**：关键操作、权限要求、输入资料和安全边界。
> - **实际效果**：使用截图或其他结果证明展示最终输出。
> - **验收标准**：怎样判断任务已经正确完成。
> 
> 投稿时，在 `docs/cases/submissions/` 下为案例新建独立目录，使用 [Case 正文模板](./.github/CASE_TEMPLATE.md)编写内容，并通过 [Case PR 模板](./.github/PULL_REQUEST_TEMPLATE/case.md)提交。审核合并后，案例会自动出现在网站左侧目录；具有代表性的经典案例经过进一步复现和编辑后，可能进入蓝皮书正式章节。
> 
> 完整流程请阅读 [Case 投稿指南](https://workbuddy.homes/community/case-contributing)和[贡献指南](./CONTRIBUTING.md)。准备或提交 PR 后，也可以按网站提示加入 WorkBuddy 共创群，交流选题并获得内容完善建议。
> 
> ## 目录结构
> 
> ```text
> WorkBuddyGuide
> ├─ .github/
> │  ├─ CASE_TEMPLATE.md             # Case 正文模板
> │  └─ PULL_REQUEST_TEMPLATE/       # Pull Request 模板
> ├─ docs/
> │  ├─ .vitepress/                  # 网站配置、主题、导航与 SEO
> │  ├─ bluebook/                    # 蓝皮书正式章节
> │  ├─ cases/
> │  │  └─ submissions/              # 社区提交的独立 Case
> │  ├─ community/                   # Case 投稿与社区共创指南
> │  ├─ help/                        # “帮你解决”场景问卷页面
> │  ├─ public/                      # 网站图片、二维码等静态资源
> │  ├─ index.md                     # 网站首页
> │  └─ reading-guide.md             # 阅读指南
> ├─ scripts/                        # 内容同步与辅助工具
> ├─ CONTRIBUTING.md                 # 完整贡献规范
> ├─ README.md                       # 中文项目说明
> └─ README_en.md                    # English README
> ```
> 
> ## 部署
> 
> 本站使用 **VitePress + Cloudflare Pages + GitHub**。Cloudflare Pages 连接本仓库的 `main` 分支后，每次推送都会自动构建部署。配置见 [DEPLOYMENT.md](./DEPLOYMENT.md)。
> 
> ## 作者们
> 
> 感谢以下作者共同参与《WorkBuddy 蓝皮书》的创作与维护。点击名片可查看原图并扫描二维码。
> 
>   
>   
> 
>   
>   
> 
>   
> 
> ## 声明
> 
> 本项目是社区维护的 WorkBuddy 实战知识库。涉及产品功能、界面、价格、可用范围和安全策略等时效性信息时，请以 WorkBuddy 官方渠道为准。
> 
> ## 开源协议
> 
> 本项目采用 [MIT License](./LICENSE) 开源。你可以自由使用、复制、修改和分发本项目，但需要保留原始版权声明和许可证文本。

## 延伸閱讀

相關概念：[[自動化]] · [[多模態]] · [[微服務]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]]

[GitHub](https://github.com/AlephAITech/WorkBuddyGuide) · [官方網站](https://workbuddy.homes/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "AlephAITech--WorkBuddyGuide" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","多模態","微服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlephAITech--WorkBuddyGuide" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlephAITech--WorkBuddyGuide" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AlephAITech" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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

> **2026-07-15** — 首次收錄
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

- [[2026-07-17|2026-07-17]] — 再次上榜，1.0k stars
- [[2026-07-16|2026-07-16]] — 再次上榜，837 stars
- [[2026-07-15|2026-07-15]] — 首次收錄，720 stars
