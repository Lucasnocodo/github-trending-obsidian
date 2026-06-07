---
repo: qiuqiubuchongle-cloud/chokepoint-atlas
url: https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas
owner: qiuqiubuchongle-cloud
owner_type: User
language: Python
license: N/A
description: ""
homepage: ""
stars: 590
stars_per_day: 118
forks: 125
open_issues: 1
created: 2026-06-01
pushed_at: 2026-06-03
first_seen: 2026-06-05
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "研究工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-05
use_case: "幫助研究 AI 產業鏈中的瓶頸，提供結構化的美股研究工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1855
readme_length: 2188
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-05"
star_history: "2026-06-05:559,2026-06-06:582,2026-06-07:590"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "chokepoint-atlas"
  - "qiuqiubuchongle-cloud/chokepoint-atlas"
  - "幫助研究 AI 產業鏈中的瓶頸，提供結構化的美股研究工具。"
---

# chokepoint-atlas

**559** stars · **186** stars/天 · 建立 3 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> 幫助研究 AI 產業鏈中的瓶頸，提供結構化的美股研究工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (186 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入研究 AI 產業鏈並尋找投資機會的金融分析師。
> **一句話重點** 這個專案通過供應鏈瓶頸思維，提供了一種全新的美股研究方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "研究工具" && p.file.name !== "qiuqiubuchongle-cloud--chokepoint-atlas" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 研究工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到系統化的研究流程，值得一試。

> [!abstract] 核心創新
> 這個專案專注於供應鏈瓶頸的分析，提供結構化的美股研究工具。

## 專案簡介

這個專案的核心在於透過供應鏈瓶頸思維來分析 AI 產業鏈，幫助用戶識別關鍵公司和潛在的投資機會。使用者可以選擇一個系統（如 NVIDIA DSX AI Factory），然後將其拆解為上下游的各個部分，最終找出可能的卡點。這樣的流程不僅能夠提供結構化的研究結果，還能夠生成多種報告格式，如 `quick_scan.md` 和 `evidence_memo.md`。這個工具的賣點在於其系統化的研究流程，避免了隨意選股的風險。技術上，專案使用 Python 實現，依賴於標準的 JSON 格式來處理輸入和輸出，這使得資料的整合和分析變得更加簡單。與傳統的 AI 選股工具相比，這個專案更注重於供應鏈的深度分析，而非單純的市場趨勢預測。

它的使用情境包括對 AI 產業鏈的深入研究，尤其適合那些希望找到第二層、第三層瓶頸的投資者。使用者可能會遇到的問題包括如何準確輸入資料格式，社群活躍度尚可，因為目前只有一個開放的 Issue。這個專案目前處於初期階段，值得關注，但不建議在生產環境中使用。未來可能會增加更多的功能和改進。適合那些希望系統化研究美股 AI 產業鏈的用戶，但不適合只想快速選股的人。

**技術棧**：`Python 3.8` · `JSON`

## 重點功能

- 供應鏈拆解 — 能夠將複雜的 AI 系統拆解為上下游，幫助用戶識別瓶頸。
- 結構化報告生成 — 生成多種格式的研究報告，如 `quick_scan.md` 和 `evidence_memo.md`。
- 多條研究線比較 — 支持同時比較多條研究線，幫助用戶排優先級。
- 原始材料整理 — 能夠將已有的財報和新聞資料整理成結構化的研究包。
- 自動化研究包生成 — 使用腳本自動生成研究包，減少手動整理的工作。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 運行單條研究線
```bash
python scripts/build_research_pack.py examples/ai_factory_lane_input.json
```
3. 運行多條研究線比較
```bash
python scripts/compare_lanes.py examples/lane_compare_input.json
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 559 stars（186/天），forks 118（21.1%），顯示出良好的社群參與度。作者 qiuqiubuchongle-cloud 似乎專注於 AI 相關的研究工具，這個專案填補了市場上對於供應鏈瓶頸分析的需求。此工具的出現，正好符合當前對於 AI 產業鏈深入理解的迫切需求。高達 21.1% 的 forks/stars 比率顯示出許多開發者在實際修改和使用這個工具，這是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：希望深入研究 AI 產業鏈並尋找投資機會的金融分析師。

> [!example] 使用場景
> - 投資分析師用它來研究 AI 產業鏈中的關鍵公司，因為它能夠提供結構化的研究報告，幫助他們做出更明智的投資決策。
> - 金融顧問用它來分析供應鏈瓶頸，因為這樣可以找到潛在的投資機會，而不僅僅依賴熱門股票。
> - 研究人員用它來整理已有的財報和新聞資料，因為它能夠自動化資料整理的過程，提高工作效率。

## 架構分析

這個專案採用 Python 作為主要開發語言，並使用 JSON 格式來處理資料。其架構設計上，使用者首先選擇一個系統，然後通過一系列的腳本來拆解系統並生成報告。這樣的設計使得資料流從用戶輸入到最終報告生成的過程變得清晰且可追蹤。選擇 Python 使得開發過程相對簡單，但也可能導致性能瓶頸，特別是在處理大量資料時。擴展性方面，未來可以考慮增加更多的資料來源和報告格式，但目前的架構可能會限制這些擴展。

## 技術深入分析

這個專案的核心技術機制是將 AI 產業鏈拆解為上下游，並找出潛在的瓶頸。使用 Python 作為開發語言，使得整個系統的開發和維護相對簡單，但在處理大量資料時可能會出現性能瓶頸。專案的資料流從用戶輸入的 JSON 格式資料開始，經過一系列的腳本處理，最終生成結構化的研究報告。選擇 JSON 格式作為資料交換格式，能夠提高資料的可讀性和可操作性，但也可能限制了某些複雜資料結構的處理。技術風險方面，隨著使用者數量的增加，可能會出現性能問題，特別是在資料量大的情況下。整合方面，與現有的金融分析工具鏈的相容性尚未測試，可能需要額外的適配層來實現無縫整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢。雖然目前的文件主要是中文，但也提供了英文版本。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供系統化的研究流程，避免隨意選股的風險。
> - 能夠生成多種格式的報告，方便用戶使用。
> - 支持多條研究線的比較，幫助用戶做出更明智的決策。

> [!danger] 缺點
> - 目前僅支持 Python 環境，對於其他語言的支持尚未實現。
> - 需要用戶提供正確格式的輸入資料，否則可能導致錯誤。
> - 社群活躍度尚可，但目前只有一個開放的 Issue，可能影響未來的支持。

> [!warning] 注意事項
> - 目前僅支持 Python 環境，對於其他語言的支持尚未實現。
> - 需要用戶提供正確格式的輸入資料，否則可能導致錯誤。
> - 社群活躍度尚可，但目前只有一個開放的 Issue，可能影響未來的支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，而本專案更偏向於供應鏈分析。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的選擇，但不專注於美股研究。 |
| [BigPizzaV3/CodexPlusPlus](https://github.com/BigPizzaV3/CodexPlusPlus) | 主要用於程式碼生成，與本專案的供應鏈分析無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，提供了更靈活的代理選擇。 | 如果你的團隊需要多代理的選擇，且專注於 AI agent 的開發。 | medium，因為需要重新學習新的 API 和使用方式。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的選擇，但不專注於美股研究，適合需要多樣化策略的團隊。 | 如果你的團隊需要多樣化的選擇和策略，而不僅僅是供應鏈分析。 | medium，因為需要適應新的工作流程和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chokepoint-atlas** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的開發，提供了更靈活的代理選擇。 | 提供多代理的選擇，但不專注於美股研究，適合需要多樣化策略的團隊。 |
> | 遷移成本 | - | medium，因為需要重新學習新的 API 和使用方式。 | medium，因為需要適應新的工作流程和工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要多代理的選擇，且專注於 AI agent 的 | 如果你的團隊需要多樣化的選擇和策略，而不僅僅是供應鏈分析。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要正確格式的輸入資料，否則可能導致錯誤
  - 解法：仔細檢查輸入資料格式
- [MEDIUM] 社群活躍度尚可，可能影響未來的支持
  - 解法：關注官方更新和社群動態

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 對 AI 產業鏈進行深入研究的金融分析師 | 非常適合 | 提供系統化的研究流程和結構化報告。 |
| 希望快速選股的投資者 | 不適合 | 這個工具不僅僅是選股，而是深入分析供應鏈。 |
| 需要比較多條研究線的投資者 | 非常適合 | 支持多條研究線的比較，幫助用戶做出更明智的決策。 |
| 手上已有資料但不想手動整理的研究人員 | 非常適合 | 能夠自動化整理已有資料的過程。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到系統化的研究流程，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料。依賴的庫和工具均為開源，風險相對較低。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與金融分析工具搭配使用，處於研究和分析的環節。在一個使用 Python 的金融分析專案中，可以用這個工具來分析 AI 產業鏈，具體做法是通過腳本生成研究報告。支援 GitHub Actions 進行 CI/CD 整合，但與主流 IDE 的整合尚未測試。整合的摩擦點在於需要用戶提供正確格式的輸入資料，這可能會影響使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，市場上主要依賴於傳統的選股方式，這些方式往往缺乏對供應鏈的深入分析。隨著 AI 產業的快速發展，對於供應鏈瓶頸的理解變得愈加重要。這個工具的出現正好填補了這一需求，未來可能會隨著 AI 產業的進一步發展而持續演進。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
| Forks | 118 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-03 |
| 建立日期 | 2026-06-01 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/qiuqiubuchongle-cloud/chokepoint-atlas) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@qiuqiubuchongle-cloud](https://github.com/qiuqiubuchongle-cloud) | 9 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，目前只有一個開放的 Issue。
**連結**：[文件](./docs/PRODUCT_CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-03）
> **活躍天數** 3 天 · **最新 commit** docs: set chinese title and subtitle

## README 摘錄

> [!info]- 展開查看原文 README
> # 卡脖子美股战法
> 
> > 用供应链瓶颈思维研究 AI 美股
> 
> 🌐 Language / 语言： [中文](./README.md) | [English](./docs/PRODUCT_EN.md)
> 
> 📘 产品介绍： [中文介绍](./README.md) | [English Intro](./docs/PRODUCT_EN.md)
> 
> > **这是一个专门用来找“AI 产业链里谁在卡脖子”的美股研究产品。**  
> > 你给它一个方向，它帮你拆系统、找瓶颈、拉证据、整理候选公司。不是直接喊单，也不是一句话给你报票。
> 
> ## 它是做什么的
> 
> 说人话：
> 
> 如果你想研究 AI、算力、机器人、光通信、先进封装这些方向，但又不想像买 meme 一样瞎冲，这个产品就是帮你先把产业链拆开，看看**到底哪一层最容易堵车，哪家公司是真的绕不过去**。
> 
> 它主要做 4 件事：
> 
> 1. 先选一个真实系统  
>    例如 `NVIDIA DSX AI Factory`、`TPU pod`、`机器人执行器链条`、`数据中心供电和液冷`
> 2. 再把这个系统拆成上下游  
>    从最终需求、系统集成、核心部件，一直拆到测试、封装、材料和上游工具
> 3. 找真正的卡点  
>    不是先问哪只票会涨，而是先问：**如果需求继续放大，哪一层会先卡住？**
> 4. 拉证据，做研究包  
>    把财报、电话会、官网、新闻、研报里的线索整理成一套能复用的结论
> 
> 一句话理解：
> 
> **它是把“热门叙事”翻译成“供应链研究”的工具。**
> 
> ## 它适合谁
> 
> 适合这几种人：
> 
> - 想研究美股 AI 产业链，但不想只看热门大票
> - 想找“第二层、第三层瓶颈”这种更有弹性的方向
> - 手里已经有一些新闻、财报、研报，想整理成结构化结论
> - 想让 Agent 帮你做研究，不只是帮你写摘要
> 
> 如果你只是想问一句“现在买哪只最猛”，那它不是最适合你的东西。
> 
> ## 它现在怎么用
> 
> 目前有 3 种主要用法。
> 
> ### 1. 单条研究线直接出研究包
> 
> 适合你已经知道自己想研究哪条线。
> 
> - 脚本：`scripts/build_research_pack.py`
> - 示例输入：`examples/ai_factory_lane_input.json`
> 
> 你会拿到这类输出：
> 
> - `quick_scan.md`
> - `evidence_memo.md`
> - `evidence_trace.md`
> - `graph.json`
> - `graph_mermaid.md`
> - `scorecard.json`
> - `catalyst_watch.md`
> 
> ### 2. 多条研究线横向比较
> 
> 适合你还没决定先研究哪条线，想先排优先级。
> 
> - 脚本：`scripts/compare_lanes.py`
> - 示例输入：`examples/lane_compare_input.json`
> 
> 你会拿到：
> 
> - `lane_ranking.json`
> - `lane_details.json`
> - `ranked_lane_table.md`
> - `lane_compare_memo.md`
> 
> ### 3. 原始材料直接整理成研究包
> 
> 适合你手上已经有材料，但不想自己手动整理。
> 
> - 脚本：`scripts/run_source_pipeline.py`
> - 示例输入：`examples/source_bundle_input.json`
> 
> 这条流程会先抽取：
> 
> - evidence
> - signal
> - quote snippet
> - source confidence
> - link reason
> 
> 然后再继续生成最终研究包。
> 
> ## 它和普通 AI 选股问答有什么区别
> 
> 普通玩法通常是：
> 
> - 问 AI 哪只票好
> - 问 AI 帮我总结财报
> - 问 AI 这个赛道值不值得看
> 
> 卡脖子美股战法不是这么走的。
> 
> 它的顺序是：
> 
> 1. 先定系统
> 2. 再拆上下游
> 3. 再找瓶颈
> 4. 再拉证据
> 5. 最后才给方向和候选公司
> 
> 区别就在这里：
> 
> **它不是替你拍脑袋，而是帮你把研究流程做扎实。**
> 
> ## 最后会产出什么
> 
> 每条研究线最后尽量会落成一组结构化文件：
> 
> - `research_pack.json`
> - `quick_scan.md`
> - `evidence_memo.md`
> - `evidence_trace.json`
> - `evidence_trace.md`
> - `graph.json`
> - `graph.mmd`
> - `graph_mermaid.md`
> - `graph_card.md`
> - `scorecard.json`
> - `validation_report.json`
> - `catalyst_watch.md`
> 
> ## 继续看
> 
> - [完整中文产品说明](./docs/PRODUCT_CN.md)
> - [English Product Description](./docs/PRODUCT_EN.md)
> - [SKILL.md](./SKILL.md)
> - [Product Manual](./references/product-manual.md)

## 延伸閱讀

相關概念：[[供應鏈分析]] · [[AI 產業鏈]] · [[結構化資料整理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas)

## 相關收錄

> [!note]- 直接競品（同子分類：研究工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "研究工具" AND file.name != "qiuqiubuchongle-cloud--chokepoint-atlas"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "qiuqiubuchongle-cloud--chokepoint-atlas"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "qiuqiubuchongle-cloud--chokepoint-atlas" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "qiuqiubuchongle-cloud--chokepoint-atlas"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["供應鏈分析","AI 產業鏈","結構化資料整理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "qiuqiubuchongle-cloud--chokepoint-atlas" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "qiuqiubuchongle-cloud--chokepoint-atlas" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "qiuqiubuchongle-cloud" AND file.name != "qiuqiubuchongle-cloud--chokepoint-atlas"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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
> const me = dv.page("Repos/qiuqiubuchongle-cloud--chokepoint-atlas");
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

> **2026-06-05** — 首次收錄
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

- [[2026-06-07|2026-06-07]] — 再次上榜，590 stars
- [[2026-06-06|2026-06-06]] — 再次上榜，582 stars
- [[2026-06-05|2026-06-05]] — 首次收錄，559 stars
