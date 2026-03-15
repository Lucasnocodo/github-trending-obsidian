---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 549
stars_per_day: 50
forks: 75
open_issues: 18
created: 2026-03-03
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.0-c26fa98"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "自動化小紅書操作的技能集，讓用戶能夠透過自然語言與 AI Agent 互動。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 269
readme_length: 6434
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:432,2026-03-11:433,2026-03-13:497,2026-03-14:527,2026-03-15:549"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "自動化小紅書操作的技能集，讓用戶能夠透過自然語言與 AI Agent 互動。"
---

# xiaohongshu-skills

**549** stars · **50** stars/天 · 建立 11 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.0-c26fa98`

> [!summary] 一句話摘要
> 自動化小紅書操作的技能集，讓用戶能夠透過自然語言與 AI Agent 互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (50 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在小紅書平台上進行自動化操作的內容創作者和數位行銷人員。
> **一句話重點** 這個專案的創新在於將自然語言處理與小紅書的自動化操作結合，讓用戶能夠更輕鬆地管理內容和互動。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的內容管理工具，值得使用。

> [!abstract] 核心創新
> 支持自然語言的複合指令操作，讓用戶能夠更方便地與小紅書進行互動。

## 專案簡介

xiaohongshu-skills 是一個基於 Python 的自動化工具，專為小紅書平台設計，利用 CDP 瀏覽器自動化引擎來執行各種操作。用戶可以透過自然語言指令來進行認證、內容發布、搜索和社交互動等操作，這些指令會自動轉換為具體的 API 調用，實現連貫的操作流程。例如，用戶可以說「搜索刺客信條最火的圖文帖子，收藏它，然後告訴我講了什麼」，系統會自動完成搜索、篩選、收藏及總結內容的任務。技術上，這個專案依賴於 requests 和 websockets 等庫，並且要求 Python 3.11 以上版本，這使得它能夠利用最新的語言特性和性能優化。

相較於其他類似工具，如 OpenClaw 和 Claude Code，xiaohongshu-skills 提供了更為專業的功能，特別是在小紅書的內容管理和社交互動上，這使得它在特定場景下更具優勢。實際使用中，這個工具能夠處理多達數千條筆記的搜索和互動，並且支持多種內容格式的發布，這對於需要高頻率內容更新的用戶來說非常有幫助。然而，使用者在 Windows 環境下可能會遇到兼容性問題，這是目前社群中一個熱門的討論話題。整體來看，這個專案的成熟度尚在 beta 階段，適合對小紅書有需求的開發者和內容創作者使用，未來可能會進一步增強功能和穩定性。

**技術棧**：`Python 3.11` · `requests 2.28.0` · `websockets 12.0`

## 重點功能

- xhs-auth — 支持多帳號切換和掃碼登錄，確保用戶能夠靈活管理多個賬號。
- xhs-publish — 提供圖文、視頻和長文的發布功能，支持定時發布和分步預覽。
- xhs-explore — 具備關鍵字搜索和筆記詳情查看功能，幫助用戶快速找到所需內容。
- xhs-interact — 支持評論、點讚和收藏等社交互動，增強用戶在平台上的參與感。
- 連貫操作 — 用戶可以用自然語言下達複合指令，Agent 會自動串聯多個技能完成任務。

## 快速開始

1. 下載並解壓專案
```bash
git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
```
2. 進入專案目錄
```bash
cd xiaohongshu-skills
```
3. 安裝依賴
```bash
uv sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 549 stars（50/天），forks 75（13.7%），這顯示出穩定的增長潛力。作者 Angiin 和其他貢獻者在自動化和 AI 相關領域有一定的背景，這使得他們能夠針對小紅書的特定需求提供解決方案。之前，針對小紅書的自動化工具多數功能有限，無法支持複雜的社交互動和內容管理，而這個專案填補了這一空白。社群中的討論和需求推動了這個工具的快速成長，特別是在內容創作者和數位行銷人員中。forks/stars 比率為 13.7%，顯示出有相當一部分用戶在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在小紅書平台上進行自動化操作的內容創作者和數位行銷人員。

> [!example] 使用場景
> - 內容創作者用它來自動發布小紅書筆記，因為可以節省大量時間並保持內容更新頻率。
> - 數位行銷人員用它來分析競爭對手的熱門內容，因為能夠快速獲取數據並制定行銷策略。
> - 開發者用它來整合小紅書功能到自己的應用中，因為提供了清晰的 API 接口和自然語言支持。

## 架構分析

這個專案採用 CDP 瀏覽器自動化引擎，設計上旨在提供高效的自動化操作。資料流中，使用者的自然語言指令經過解析後，轉換為具體的 API 調用，這樣的設計使得用戶可以更直觀地與系統互動。選擇 Python 作為開發語言是因為其生態系統豐富，且擁有強大的庫支持，這樣的選擇也帶來了較高的學習成本。由於依賴於 Chrome 瀏覽器的 CDP，這在某種程度上限制了跨平台的兼容性，特別是在 Windows 環境下。整體架構的擴展性良好，但在處理大量請求時可能會遇到性能瓶頸，特別是在高頻率的社交互動場景中。

## 技術深入分析

xiaohongshu-skills 的核心技術機制是基於 CDP 的瀏覽器自動化，這使得它能夠直接與小紅書的前端進行交互。透過使用 requests 和 websockets，這個工具能夠實現高效的網路請求和即時通訊。這個專案的效能特性在於能夠快速處理用戶的請求，並且支持多種操作，然而在高負載情況下可能會出現延遲。選擇 Python 作為開發語言是因為其生態系統的豐富性和開發效率，但這也意味著需要用戶具備一定的 Python 基礎。依賴於 Chrome 瀏覽器的 CDP，這在某種程度上限制了跨平台的兼容性，特別是在 Windows 環境下。技術風險方面，隨著小紅書平台的更新，可能會出現 API 變更的情況，這需要開發者持續關注。整合到現有的工具鏈中，這個專案能夠與多種 AI Agent 平台兼容，但在實際使用中可能需要進行一定的調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且包含了範例指令。安裝過程相對順暢，但需要用戶具備一定的技術背景。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 支持自然語言指令，提升用戶體驗。
> - 功能全面，涵蓋內容發布、搜索和社交互動。
> - 基於 CDP 的自動化，能夠高效執行操作。

> [!danger] 缺點
> - 目前在 Windows 環境下可能存在兼容性問題。
> - 缺乏商品綁定功能，限制了某些用戶的使用場景。
> - 安裝過程相對複雜，需要用戶具備一定的技術背景。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本。
> - 目前在 Windows 環境下可能存在兼容性問題。
> - 缺乏商品綁定功能，可能影響某些用戶的使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [autoclaw-cc/OpenClaw](https://github.com/autoclaw-cc/OpenClaw) | OpenClaw 提供了一個通用的自動化框架，但缺乏針對小紅書的專業技能，使用者需要自行實現特定功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要針對社交媒體的數據抓取，功能較為單一，無法進行內容發布和互動。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenClaw | OpenClaw 提供了一個通用的自動化框架，但缺乏針對小紅書的專業技能，使用者需要自行實現特定功能。 | 如果你的團隊需要一個通用的自動化框架，並且願意自行實現特定功能。 | medium，因為需要重新實現小紅書的特定功能。 |
| Claude Code | Claude Code 提供了一個 AI Agent 平台，但功能相對較為單一，無法進行複雜的社交互動。 | 如果你的需求僅限於簡單的內容發布，而不需要社交互動功能。 | low，因為可以直接使用 Claude 的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **xiaohongshu-skills** | **OpenClaw** | **Claude Code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenClaw 提供了一個通用的自動化框架，但缺乏針對小紅書的專業技能，使用者需要自行實現特定功能。 | Claude Code 提供了一個 AI Agent 平台，但功能相對較為單一，無法進行複雜的社交互動。 |
> | 遷移成本 | - | medium，因為需要重新實現小紅書的特定功能。 | low，因為可以直接使用 Claude 的 API。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個通用的自動化框架，並且願意自行實現特定功 | 如果你的需求僅限於簡單的內容發布，而不需要社交互動功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對小紅書有需求的開發者和內容創作者使用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下可能無法正常運行，導致用戶無法使用所有功能。
  - 解法：建議使用 WSL 或在 Linux 環境下運行。
- [MEDIUM] 缺乏商品綁定功能，可能影響某些用戶的使用體驗。
  - 解法：未來版本可能會加入此功能，建議持續關注更新。
- [MEDIUM] 使用虛擬環境執行時可能會出現依賴問題。
  - 解法：確保在虛擬環境中安裝所有依賴，並使用 .venv 執行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠快速集成小紅書的自動化功能，提升內容管理效率。 |
| 大型企業的數位行銷團隊 | 普通 | 雖然功能全面，但在高頻率操作下可能會遇到性能瓶頸。 |
| 個人內容創作者 | 非常適合 | 能夠輕鬆管理和發布內容，提升工作效率。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 beta 階段，存在不穩定風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的內容管理工具，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，僅需存取用戶的帳號資訊，並依賴於 Chrome 瀏覽器的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
| Forks | 75 |
| Open Issues | 18 |
| Issue 解決率 | 33% (9 closed) |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 269 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/autoclaw-cc/xiaohongshu-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Angiin](https://github.com/Angiin) | 32 |
> | [@xpzouying](https://github.com/xpzouying) | 10 |
> | [@cu1ch3n](https://github.com/cu1ch3n) | 1 |

**最新版本**：v0.1.0-c26fa98 (2026-03-09)

> [!info]- Release Notes
> ## What's Changed
> * perf: 浏览器反检测模块全面优化 - 动态平台适配与指纹一致性 by @xpzouying in https://github.com/autoclaw-cc/xiaohongshu-skills/pull/33
> 
> 
> **Full Changelog**: https://github.com/autoclaw-cc/xiaohongshu-skills/compare/v0.1.0-41c2e11...v0.1.0-c26fa98

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者在持續更新和回應問題。
**連結**：[文件](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-09）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #33 from autoclaw-cc/fix/stealth-anti-detection

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/28) | 可以加上任务记录日志，让模型不要重复去读一些读过的笔记 | 1 | 0 |
> | [#12](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/12) | 没有商品绑定功能 | 1 | 0 |
> | [#41](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/41) | Windows下的无法使用吗？ | 0 | 3 |
> | [#40](https://github.com/autoclaw-cc/xiaohongshu-skills/issues/40) | 一个小小的建议：在文档里说明需要使用虚拟环境.venv执行skill中的python脚本 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # xiaohongshu-skills
> 
> 小红书自动化 Skills，基于 Python CDP 浏览器自动化引擎。
> 
> 支持 [OpenClaw](https://github.com/anthropics/openclaw) 及所有兼容 `SKILL.md` 格式的 AI Agent 平台（如 Claude Code）。
> 
> ## 功能概览
> 
> | 技能 | 说明 | 核心能力 |
> |------|------|----------|
> | **xhs-auth** | 认证管理 | 登录检查、扫码登录、多账号切换 |
> | **xhs-publish** | 内容发布 | 图文 / 视频 / 长文发布、定时发布、分步预览 |
> | **xhs-explore** | 内容发现 | 关键词搜索、笔记详情、用户主页、首页推荐 |
> | **xhs-interact** | 社交互动 | 评论、回复、点赞、收藏 |
> | **xhs-content-ops** | 复合运营 | 竞品分析、热点追踪、批量互动、内容创作 |
> 
> 支持**连贯操作** — 你可以用自然语言下达复合指令，Agent 会自动串联多个技能完成任务。例如：
> 
> > "搜索刺客信条最火的图文帖子，收藏它，然后告诉我讲了什么"
> 
> Agent 会自动执行：搜索 → 筛选图文 → 按点赞排序 → 收藏 → 获取详情 → 总结内容。
> 
> ## 安装
> 
> ### 前置条件
> 
> - Python >= 3.11
> - [uv](https://docs.astral.sh/uv/) 包管理器
> - Google Chrome 浏览器
> 
> ### 方法一：下载 ZIP 安装（推荐）
> 
> 最简单稳妥的方式，适用于 OpenClaw 及所有支持 `SKILL.md` 的 Agent 平台。
> 
> 1. 在 GitHub 仓库页面点击 **Code → Download ZIP**，下载项目压缩包。
> 2. 解压到你的 Agent 的 skills 目录下：
> 
> ```
> # OpenClaw 示例
> /skills/xiaohongshu-skills/
> 
> # Claude Code 示例
> /.claude/skills/xiaohongshu-skills/
> ```
> 
> 3. 安装 Python 依赖：
> 
> ```bash
> cd xiaohongshu-skills
> uv sync
> ```
> 
> 安装完成后，Agent 会自动识别 `SKILL.md` 并加载小红书技能。
> 
> ### 方法二：Git Clone
> 
> ```bash
> # 进入 skills 目录
> cd /skills/
> 
> # 克隆项目
> git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
> cd xiaohongshu-skills
> 
> # 安装依赖
> uv sync
> ```
> 
> > 其他支持 SKILL.md 格式的 Agent 框架安装方式类似 — 将本项目放入其 skills 目录即可。
> 
> ## 使用方式
> 
> ### 作为 AI Agent 技能使用（推荐）
> 
> 安装到 skills 目录后，直接用自然语言与 Agent 对话即可。Agent 会根据你的意图自动路由到对应技能。
> 
> **认证登录：**
> > "登录小红书" / "检查登录状态"
> 
> **搜索浏览：**
> > "搜索关于露营的笔记" / "查看这条笔记的详情"
> 
> **发布内容：**
> > "帮我发一条图文笔记，标题是…，配图是…"
> 
> **社交互动：**
> > "给这条笔记点赞" / "收藏这条帖子" / "评论：写得太好了"
> 
> **复合操作：**
> > "搜索竞品账号最近的爆款笔记，分析他们的选题方向"
> 
> ### 作为 CLI 工具使用
> 
> 所有功能也可以通过命令行直接调用，输出 JSON 格式，便于脚本集成。
> 
> #### 1. 启动 Chrome
> 
> ```bash
> # 有窗口模式（首次登录必须）
> python scripts/chrome_launcher.py
> 
> # 无头模式
> python scripts/chrome_launcher.py --headless
> ```
> 
> #### 2. 登录
> 
> ```bash
> # 检查登录状态（已登录时返回用户昵称和小红书号）
> python scripts/cli.py check-login
> 
> # 扫码登录
> python scripts/cli.py login
> ```
> 
> #### 3. 搜索笔记
> 
> ```bash
> python scripts/cli.py search-feeds --keyword "关键词"
> 
> # 带筛选条件
> python scripts/cli.py search-feeds \
>   --keyword "关键词" \
>   --sort-by "最多点赞" \
>   --note-type "图文"
> ```
> 
> #### 4. 查看笔记详情
> 
> ```bash
> python scripts/cli.py get-feed-detail \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> #### 5. 发布内容
> 
> ```bash
> # 图文发布（分步：填写 → 预览 → 确认发布）
> python scripts/cli.py fill-publish \
>   --title-file title.txt \
>   --content-file content.txt \
>   --images "/abs/path/pic1.jpg" "/abs/path/pic2.jpg"
> 
> # 用户在浏览器中预览确认后
> python scripts/cli.py click-publish
> 
> # 或保存为草稿
> python scripts/cli.py save-draft
> 
> # 视频发布
> python scripts/cli.py publish-video \
>   --title-file title.txt \
>   --content-file content.txt \
>   --video "/abs/path/video.mp4"
> 
> # 长文发布
> python scripts/cli.py long-article \
>   --title-file title.txt \
>   --content-file content.txt
> ```
> 
> #### 6. 社交互动
> 
> ```bash
> # 评论
> python scripts/cli.py post-comment \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN \
>   --content "评论内容"
> 
> # 点赞
> python scripts/cli.py like-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> 
> # 收藏
> python scripts/cli.py favorite-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> ## CLI 命令参考
> 
> 全局选项：
> - `--host HOST` — Chrome 调试主机（默认 127.0.0.1）
> - `--port PORT` — Chrome 调试端口（默认 9222）
> - `--account NAME` — 指定账号
> 
> | 子命令 | 说明 |
> |--------|------|
> | `check-login` | 检查登录状态，返回用户昵称和小红书号 |
> | `login` | 获取登录二维码，等待扫码，登录后返回用户信息 |
> | `delete-cookies` | 清除 cookies（退出/切换账号） |
> | `list-feeds` | 获取首页推荐 Feed |
> | `search-feeds` | 关键词搜索笔记（支持排序/类型/时间/范围/位置筛选） |
> | `get-feed-detail` | 获取笔记完整内容和评论 |
> | `user-profile` | 获取用户主页信息和帖子列表 |
> | `post-comment` | 对笔记发表评论 |
> | `reply-comment` | 回复指定评论 |
> | `like-feed` | 点赞 / 取消点赞 |
> | `favorite-feed` | 收藏 / 取消收藏 |
> | `publish` | 一步发布图文 |
> | `publish-video` | 一步发布视频 |
> | `fill-publish` | 填写图文表单（不发布，供预览） |
> | `fill-publish-video` | 填写视频表单（不发布，供预览） |
> | `click-publish` | 确认发布（点击发布按钮） |
> | `save-draft` | 保存为草稿 |
> | `long-article` | 长文模式：填写 + 一键排版 |
> | `select-template` | 选择长文排版模板 |
> | `next-step` | 长文下一步 + 填写描述 |
> 
> 退出码：`0` 成功 · `1` 未登录 · `2` 错误
> 
> ## 项目结构
> 
> ```
> xiaohongshu-skills/
> ├── scripts/                        # Python CDP 自动化引擎
> │   ├── xhs/                        # 核心自动化包
> │   │   ├── cdp.py                  # CDP WebSocket 客户端
> │   │   ├── stealth.py              # 反检测保护
> │   │   ├── selectors.py            # CSS 选择器（集中管理，改版时只改此文件）
> │   │   ├── login.py                # 登录 + 用户信息获取
> │   │   ├── feeds.py                # 首页 Feed
> │   │   ├── search.py               # 搜索 + 筛选
> │   │   ├── feed_detail.py          # 笔记详情 + 评论加载
> │   │   ├── user_profile.py         # 用户主页
> │   │   ├── comment.py              # 评论、回复
> │   │   ├── like_favorite.py        # 点赞、收藏
> │   │   ├── publish.py              # 图文发布
> │   │   ├── publish_video.py        # 视频发布
> │   │   ├── publish_long_article.py # 长文发布
> │   │   ├── types.py                # 数据类型
> │   │   ├── errors.py               # 异常体系
> │   │   ├── urls.py                 # URL 常量
> │   │   ├── cookies.py              # Cookie 持久化
> │   │   └── human.py                # 人类行为模拟
> │   ├── cli.py                      # 统一 CLI 入口（20 个子命令）
> │   ├── chrome_launcher.py          # Chrome 进程管理
> │   ├── account_manager.py          # 多账号管理
> │   ├── image_downloader.py         # 媒体下载（SHA256 缓存）
> │   ├── title_utils.py              # UTF-16 标题长度计算
> │   ├── run_lock.py                 # 单实例锁
> │   └── publish_pipeline.py         # 发布编排器
> ├── skills/                         # Claude Code Skills 定义
> │   ├── xhs-auth/SKILL.md
> │   ├── xhs-publish/SKILL.md
> │   ├── xhs-explore/SKILL.md
> │   ├── xhs-interact/SKILL.md
> │   └── xhs-content-ops/SKILL.md
> ├── SKILL.md                        # 技能统一入口（路由到子技能）
> ├── CLAUDE.md                       # 项目开发指南
> ├── pyproject.toml                  # uv 项目配置
> └── README.md
> ```
> 
> ## 技术架构
> 
> ### 双层设计
> 
> ```
> 用户 ──→ AI Agent ──→ SKILL.md（意图路由）──→ CLI ──→ CDP 引擎 ──→ Chrome ──→ 小红书
> ```
> 
> 1. **Skills 层**（`skills/` + `SKILL.md`）— AI Agent 的能力定义，描述何时触发、如何调用、如何处理失败。Agent 读取 SKILL.md 后自动获得小红书操作能力。
> 
> 2. **引擎层**（`scripts/`）— Python CDP 自动化引擎，通过 Chrome DevTools Protocol 直接控制浏览器。内置反检测保护、人类行为模拟、JSON 结构化输出。
> 
> ### 关键设计
> 
> - **数据提取**：通过 `window.__INITIAL_STATE__` 读取页面数据，与小红书前端框架对齐
> - **反检测**：Stealth JS 注入 + CDP 真实输入事件（`isTrusted=true`）+ 随机延迟
> - **选择器集中管理**：所有 CSS 选择器在 `xhs/selectors.py` 统一维护，小红书改版时只需改一个文件
> - **分步发布**：fill → 预览 → confirm 三步流程，确保用户始终掌控发布内容
> 
> ## 开发
> 
> ```bash
> uv sync                    # 安装依赖
> uv run ruff check .        # Lint 检查
> uv run ruff format .       # 代码格式化
> uv run pytest              # 运行测试
> ```
> 
> ## License
> 
> MIT
> 
> ## Trend
> 
> ## Star History
> 
> [](https://www.star-history.com/?repos=autoclaw-cc%2Fxiaohongshu-skills&type=date&legend=top-left)

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[自然語言處理]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "autoclaw-cc--xiaohongshu-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","API 設計","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "autoclaw-cc--xiaohongshu-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "autoclaw-cc" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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
> const me = dv.page("Repos/autoclaw-cc--xiaohongshu-skills");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
