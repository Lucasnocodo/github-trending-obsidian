---
repo: VictorTaelin/OptMem
url: https://github.com/VictorTaelin/OptMem
owner: VictorTaelin
owner_type: User
language: Python
license: N/A
description: "Permanent memory for AI agents. A 426-token prompt, a script, plug and play."
homepage: ""
stars: 661
stars_per_day: 331
forks: 35
open_issues: 0
created: 2026-07-25
pushed_at: 2026-07-27
first_seen: 2026-07-28
week: "2026-W31"
month: "2026-07"
category: "開發工具"
subcategory: "記憶管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-28
use_case: "為 AI 代理提供永久記憶，簡單易用的記錄與檢索工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-31"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 11249
readme_length: 3535
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-28"
star_history: "2026-07-28:661,2026-07-28:661"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "OptMem"
  - "VictorTaelin/OptMem"
  - "為 AI 代理提供永久記憶，簡單易用的記錄與檢索工具。"
---

# OptMem

**661** stars · **331** stars/天 · 建立 2 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/VictorTaelin--OptMem");
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
> 為 AI 代理提供永久記憶，簡單易用的記錄與檢索工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (331 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要簡單記憶管理工具的 AI 開發者，尤其是希望快速集成的獨立開發者。
> **一句話重點** OptMem 的設計讓 AI 代理能夠持久化記憶，避免了每次啟動時的上下文丟失，這對於提升代理的智能性至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "記憶管理" && p.file.name !== "VictorTaelin--OptMem" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 記憶管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、1 小時整合，得到快速記憶管理的效果，值得嘗試。

> [!abstract] 核心創新
> OptMem 提供了一種簡單而高效的方式來持久化 AI 代理的記憶，無需複雜的配置。

## 專案簡介

OptMem 是一個為 AI 代理設計的永久記憶工具，允許用戶透過簡單的命令來記錄和檢索記憶。使用者只需在每次會話開始時運行 `memo wake`，然後根據提示進行操作，這樣便能夠持續記錄重要的學習和事件。記憶以固定寬度的格式存儲，這意味著每次查詢都是快速的隨機訪問，能夠在 608 MB 的記憶體中以 0.03 秒的速度完成查詢。這個工具的設計目的是為了讓 AI 代理能夠持久化記憶，避免在每次啟動時丟失上下文。使用者可以透過 `memo note` 命令記錄新學到的知識，並且可以使用 `memo recall` 來檢索過去的記憶，這些記憶以二叉樹的形式組織，方便用戶導航。

OptMem 的一大賣點在於其簡單的安裝和使用方式，無需複雜的配置，適合快速集成到現有的 AI 系統中。其唯一的配置參數 `WAKE_LINES` 允許用戶調整記憶的顯示行數，這使得用戶能夠根據需求靈活調整。這種設計避免了過多的計算和存儲需求，確保了高效的性能和低延遲的記憶檢索。與其他記憶管理工具相比，OptMem 的操作簡單且高效，特別適合需要快速記錄和檢索的場景。

**技術棧**：`Python 3`

## 重點功能

- 永久記憶 — 透過 `memo note` 命令記錄重要信息，並持久化存儲。
- 快速檢索 — 使用 `memo recall` 命令快速檢索過去的記憶，支持精確查詢。
- 簡單安裝 — 只需一行命令安裝，無需複雜配置。
- 靈活配置 — 透過 `memo config` 調整記憶顯示行數，滿足不同需求。
- 二叉樹結構 — 記憶以二叉樹形式組織，方便用戶導航和檢索。

## 快速開始

1. 安裝 OptMem
```bash
curl -fsSL https://raw.githubusercontent.com/VictorTaelin/OptMem/main/install.sh | sh
```
2. 啟動記憶系統
```bash
memo wake
```
3. 記錄新記憶
```bash
memo note "新學到的知識或事件"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 661 stars（330.5/天），forks 35（5.3%），這顯示出一定的關注度。作者 VictorTaelin 之前可能在 AI 領域有相關經驗，這個工具解決了 AI 代理記憶持久化的痛點，之前的方案往往需要複雜的配置或不夠靈活。最近的推文或社群討論可能引發了這個工具的關注。技術上，OptMem 的設計簡單且有效，適合快速集成，這在當前 AI 代理的需求中是非常重要的。forks/stars 比率在 5% 左右，顯示出有一定的用戶在實際修改和使用。

## 適合誰使用

**目標受眾**：需要簡單記憶管理工具的 AI 開發者，尤其是希望快速集成的獨立開發者。

> [!example] 使用場景
> - AI 研究員用它來記錄和檢索實驗結果，因為這樣可以避免每次實驗都重複查詢過去的數據。
> - 開發者用它來持久化 AI 代理的學習過程，因為這樣可以讓代理在不同會話中保持一致的上下文。
> - 產品經理用它來記錄用戶反饋和需求，因為這樣可以在會議中快速檢索相關信息，提升決策效率。

## 架構分析

OptMem 的架構設計以簡單性和高效性為核心，使用固定寬度的記憶格式來確保快速檢索。每次記憶的寫入和檢索都是基於一個單一的文件，這樣的設計避免了多個文件的管理複雜性。記憶以二叉樹的形式組織，這使得用戶能夠快速導航和查詢。

選擇 Python 作為實作語言，因為其簡單易用且能快速開發，這樣的選擇也降低了依賴性。這種設計雖然在記憶擴展性上有所限制，但卻能在小型到中型的應用中提供極佳的性能。整體而言，OptMem 的架構適合快速集成和使用，特別是在需要快速記錄和檢索的場景中。

## 技術深入分析

OptMem 的核心技術機制在於其固定寬度的記憶格式，這使得每次查詢都能夠快速定位到特定的記憶，而不需要遍歷整個資料集。使用二叉樹結構來組織記憶，這不僅提高了檢索效率，也使得用戶能夠更方便地導航。效能方面，記憶的寫入和檢索速度都非常快，能夠在 0.03 秒內完成查詢，這對於需要即時反應的 AI 代理來說至關重要。OptMem 的設計選擇 Python 作為開發語言，這使得開發過程更加靈活且易於維護，然而這也可能在高負載情況下帶來性能瓶頸。技術風險方面，隨著記憶數量的增加，可能會出現性能下降的情況，特別是在記憶管理上缺乏靈活性。整合方面，OptMem 能夠輕鬆與現有的 AI 系統集成，特別是在需要快速記錄和檢索的應用場景中，這使得其在開發過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體指令；安裝過程順暢，無需特別配置；有良好的入門指南，讓新手能夠快速上手；目前僅提供英文文件，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，僅需一行命令即可完成。
> - 記憶檢索速度快，適合需要即時查詢的場景。
> - 設計簡單，易於集成到現有的 AI 系統中。

> [!danger] 缺點
> - 不支持 Windows，限制了使用者的範圍。
> - 記憶的管理方式較為單一，無法編輯或刪除。
> - 在記憶數量過多時，可能會影響性能。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 MacOS，Windows 支援尚在開發中。
> - 記憶的最大數量受限於固定寬度格式，可能會影響記憶的擴展性。
> - 不支持編輯或刪除已記錄的記憶，所有記憶都是追加的。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建和管理 AI 代理的多個實例，而 OptMem 專注於持久化記憶，適合需要記憶管理的場景。 |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | 這個工具提供更複雜的記憶管理功能，但配置較為繁瑣，OptMem 則以簡單易用為主打。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多實例管理，而 OptMem 專注於記憶持久化，適合不同的使用場景。 | 如果需要同時管理多個 AI 代理的實例，則應選擇這個工具。 | medium，因為需要重新設計記憶管理的邏輯。 |
| [ClaudioDrews/memory-os](https://github.com/ClaudioDrews/memory-os) | 提供更複雜的記憶管理功能，但配置較為繁瑣，OptMem 則以簡單易用為主打。 | 如果需要更高級的記憶管理功能，且不介意複雜的配置，則應選擇這個工具。 | high，因為需要重新設計記憶管理的邏輯和結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OptMem** | **agent-sprite-forge** | **memory-os** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多實例管理，而 OptMem 專注於記憶持久化，適合不同的使用場景。 | 提供更複雜的記憶管理功能，但配置較為繁瑣，OptMem 則以簡單易用為主打。 |
> | 遷移成本 | - | medium，因為需要重新設計記憶管理的邏輯。 | high，因為需要重新設計記憶管理的邏輯和結構。 |
> | 適用場景 | 主要場景 | 如果需要同時管理多個 AI 代理的實例，則應選擇這個工具。 | 如果需要更高級的記憶管理功能，且不介意複雜的配置，則應選擇這 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在記憶數量過多時，檢索速度可能會變慢
  - 解法：定期清理不必要的記憶以保持性能
- **[HIGH]** 不支持 Windows，可能會限制某些用戶的使用
  - 解法：使用 WSL 或在 Linux/Mac 環境中運行
- [MEDIUM] 記憶無法編輯或刪除，可能導致冗餘信息堆積
  - 解法：定期檢查並記錄重要信息，避免重複記錄

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 AI 開發團隊的記憶管理 | 非常適合 | 簡單易用，能快速集成到現有系統中。 |
| 大型企業的 AI 系統 | 不適合 | 缺乏靈活的記憶管理功能，無法滿足複雜需求。 |
| 獨立開發者的 AI 項目 | 非常適合 | 安裝簡單，能快速上手，適合個人項目。 |
| 需要多實例管理的 AI 系統 | 不適合 | 專注於單一記憶管理，無法支持多實例同時運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到快速記憶管理的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OptMem 不需要高權限運行，且不存取敏感資料，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
| Forks | 35 |
| Open Issues | 0 |
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-07-25 |
| Repo 大小 | 11.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VictorTaelin/OptMem) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 63
>     "JavaScript" : 34
>     "HTML" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@VictorTaelin](https://github.com/VictorTaelin) | 38 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有合併請求和更新。
**連結**：[文件](https://github.com/VictorTaelin/OptMem)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-26 ~ 2026-07-27）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #2 from rarf/windows-native-support

## README 摘錄

> [!info]- 展開查看原文 README
> # OptMem
> 
> Permanent memory for AI agents. A 426-token prompt, a script, plug and play.
> 
> ## Install
> 
> ```sh
> curl -fsSL https://raw.githubusercontent.com/VictorTaelin/OptMem/main/install.sh | sh
> ```
> 
> It prints a `## Memory` block. Paste that at the top of your agent's
> `AGENTS.md` (or `CLAUDE.md`), and you are done. Run the same line again to
> update.
> 
> The tool lands at `~/.optmem/memo`; put `~/.optmem` on `PATH` to type `memo`.
> 
> ## Commands
> 
> | | |
> |---|---|
> | `memo wake` | read the memory — the first command of every session |
> | `memo note "..."` | record one memory: one line, up to 280 chars |
> | `memo nap` | answer the merges that came due |
> | `memo recall ` | search every memory ever recorded, word for word |
> | `memo zoom -` | open a tree node into its two halves |
> | `memo forget -` | drop a bad summary; the next nap rebuilds it |
> 
> Merges arrive one at a time, in the output of `note`. Nothing ever runs in the
> background.
> 
> ## Files
> 
> ```
> ~/.optmem/
>   memo          the tool: one file of Python 3, no dependencies
>   memory/
>     LOG.txt     every memory, one per line, append-only, never edited
>     TREE/       the summaries: a cache, rebuildable from the log alone
>     config      the sizes, written by `memo config`
> ```
> 
> ```sh
> memo config                  # show the sizes
> memo config WAKE_LINES=300   # how many lines wake prints (208 ≈ 16k tokens)
> memo config WAKE_LINES=      # back to the default
> ```
> 
> `WAKE_LINES` is the only size worth touching, and it is a reading budget, not
> a storage budget: change it whenever, in either direction, and nothing is
> recomputed.
> 
> Records are fixed width, so position *is* identity and every lookup is one
> seek. At a million memories (608 MB), `wake` takes 0.03s.
> 
> Set `$MEMORY_DIR` to keep `memory/` elsewhere — a synced folder, a git repo.
> 
> ## The prompt
> 
> This is what the installer prints, and the whole of the integration.
> 
> ```markdown
> ## Memory
> 
> Your memory is OptMem:
> - The tool is `~/.optmem/memo`
> - Your memories are in `~/.optmem/memory`
> 
> OptMem outlives every session, compaction, model and vendor change.
> Without it you do not know who you are, or what was decided and tried.
> 
> ### At startup: activating OptMem (mandatory)
> 
> Run `~/.optmem/memo wake` before any other tool call, in every session, and
> then do exactly what it prints, to the end of its output.
> 
> ### While working: register memories (mandatory)
> 
> Call `~/.optmem/memo note ""` whenever you learn
> something new, or something worth keeping happens. That covers a task
> worth real effort, a fact or insight the user teaches you, anything you
> learn about their life (even indirectly), any event of lasting effect.
> 
> Do not register redundant memories.
> 
> If `~/.optmem/memo note` asks a compression: do it before your next action.
> 
> Never edit or delete anything under `~/.optmem/memory`: the tool manages it.
> 
> ### When you need an old memory: search, or navigate
> 
> `~/.optmem/memo recall ` searches every memory, word for word.
> 
> Your memories also form a binary tree: #0-1, #2-3 ... exist as one-line
> summaries, pairs of those as #0-3, and so on -- every `#a-b` line wake
> prints is one node of it. `~/.optmem/memo zoom ` opens a node into its
> two halves, down to the raw memories.
> 
> ### If you're a subagent: skip everything above
> 
> Parallel sessions on this machine are all you, and may all write memories.
> A subagent is not: it must never run `memo`, because it cannot judge what
> is already known, and its notes would arrive duplicated and incorrectly.
> When you spawn one, write: `You are a subagent. Don't run memo.`
> ```

## 延伸閱讀

相關概念：[[記憶管理]] · [[AI 代理]] · [[持久化存儲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[raiyanyahya--recall|raiyanyahya/recall]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]]

[GitHub](https://github.com/VictorTaelin/OptMem)

## 相關收錄

> [!note]- 直接競品（同子分類：記憶管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "記憶管理" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "VictorTaelin--OptMem" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["記憶管理","AI 代理","持久化存儲"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VictorTaelin--OptMem" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VictorTaelin--OptMem" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VictorTaelin" AND file.name != "VictorTaelin--OptMem"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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
> const me = dv.page("Repos/VictorTaelin--OptMem");
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

> **2026-07-28** — 首次收錄
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

- [[2026-07-28|2026-07-28]] — 首次收錄，661 stars
