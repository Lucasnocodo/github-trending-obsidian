---
repo: vibeforge1111/keep-codex-fast
url: https://github.com/vibeforge1111/keep-codex-fast
owner: vibeforge1111
owner_type: User
language: Python
license: MIT
description: "A backup-first Codex skill for keeping local Codex state fast, clean, and recoverable."
homepage: ""
stars: 816
stars_per_day: 204
forks: 45
open_issues: 2
created: 2026-05-02
pushed_at: 2026-05-06
first_seen: 2026-05-06
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "維護工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-06
use_case: "提供一種安全的方式來維護和清理 Codex 的本地狀態，避免性能下降。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-10"
contributor_count: 1
engagement: "low"
issue_close_rate: 33
repo_size_kb: 1163
readme_length: 5949
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-06"
star_history: "2026-05-06:751,2026-05-07:816"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "keep-codex-fast"
  - "vibeforge1111/keep-codex-fast"
  - "提供一種安全的方式來維護和清理 Codex 的本地狀態，避免性能下降。"
---

# keep-codex-fast

**751** stars · **250** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> 提供一種安全的方式來維護和清理 Codex 的本地狀態，避免性能下降。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (250 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要長期使用 Codex 並希望保持其性能的開發者和專案管理者。
> **一句話重點** 這個專案強調了在開發過程中資料安全和上下文保留的重要性，提供了一種有效的維護策略。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "維護工具" && p.file.name !== "vibeforge1111--keep-codex-fast" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 維護工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的本地狀態管理，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於提供了一種安全的方式來維護 Codex 的本地狀態，避免直接刪除資料的風險。

## 專案簡介

Keep Codex Fast 是一個專為 Codex 使用者設計的工具，旨在幫助用戶管理和維護其本地狀態，特別是在長時間使用後。用戶可以透過這個工具檢查本地狀態，並在需要時進行安全的維護操作。核心流程是：用戶首先使用 `$keep-codex-fast` 指令檢查當前狀態，然後根據建議決定哪些內容需要備份或歸檔。這樣的設計避免了直接刪除資料的風險，確保用戶能夠在需要時恢復重要的上下文。技術上，這個工具使用 Python 實作，並提供了多種指令選項來進行報告、備份和應用維護操作，這使得它在性能和安全性之間取得了良好的平衡。

與其他工具相比，如 0xGF/boneyard，Keep Codex Fast 的重點在於不直接修改本地狀態，這樣用戶可以在進行任何操作前確認手續，降低了出錯的風險。使用者可以在多個回合中進行維護，而不必擔心丟失重要的資料或上下文。此工具適合經常使用 Codex 的開發者，特別是那些需要長期維護多個專案的用戶。對於需要快速清理和維護的情況，這個工具提供了一個穩定的解決方案，並建議用戶定期進行手動檢查和維護，以保持最佳性能。

**技術棧**：`Python 3.x`

## 重點功能

- 檢查本地狀態 — 使用 `$keep-codex-fast` 指令檢查當前的 Codex 狀態，提供維護建議。
- 創建手交文件 — 在歸檔舊聊天之前，生成手交文件以保留上下文。
- 安全備份 — 在應用任何變更之前，先進行重要狀態的備份。
- 歸檔舊聊天 — 將不再需要的聊天歸檔，而不是刪除。
- 移動過時的工作樹 — 將不活躍的工作樹移出熱路徑，減少系統負擔。
- 旋轉大型日誌 — 自動管理和旋轉大型日誌文件，保持系統整潔。
- 報告重的 Node/dev 進程 — 提供當前重的進程報告，而不終止它們。

## 快速開始

1. 安裝技能
```bash
Install the keep-codex-fast skill from https://github.com/vibeforge1111/keep-codex-fast
```
2. 檢查本地狀態
```bash
Use $keep-codex-fast to inspect my Codex local state and recommend a safe maintenance plan.
```
3. 應用安全維護
```bash
Use $keep-codex-fast to apply safe Codex maintenance.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 751 stars（250/天），forks 42（5.6%），顯示出穩定的增長。作者 vibeforge1111 之前的專案經驗使其對 Codex 的使用有深入了解，這個工具解決了 Codex 使用者在長期使用後性能下降的問題，特別是當用戶需要管理大量的聊天記錄和專案歷史時。近期的推廣活動和社群討論也可能促進了這個專案的曝光率。這個工具的設計符合當前對於資料安全和性能優化的需求，特別是在開發者社群中，對於如何有效管理本地狀態的需求日益增加。

## 適合誰使用

**目標受眾**：需要長期使用 Codex 並希望保持其性能的開發者和專案管理者。

> [!example] 使用場景
> - 後端工程師用它來定期檢查和清理 Codex 的本地狀態，因為長期使用後性能會下降，這樣能保持開發環境的流暢性。
> - 專案經理用它來備份和歸檔過去的專案聊天記錄，因為這樣可以在需要時快速恢復上下文，避免重複工作。
> - 全端工程師用它來管理多個專案的工作樹，因為這樣能夠有效地移除不再活躍的工作樹，減少系統資源的消耗。

## 架構分析

Keep Codex Fast 採用 Python 實作，設計上強調用戶的控制權，所有操作都需要用戶的確認。這樣的設計使得用戶在進行維護時能夠保持對本地狀態的完全掌控，避免了自動化工具可能帶來的風險。資料流方面，工具首先檢查本地狀態，然後根據用戶的指示進行備份或歸檔。

這種方式的代價是需要用戶主動參與，可能會增加維護的時間成本，但卻能有效降低資料丟失的風險。擴展性方面，這個工具能夠處理多種本地狀態的管理，但在面對極大規模的資料時，可能會出現性能瓶頸，特別是在檢查和報告階段。整體而言，這個架構設計適合需要高安全性和資料完整性的開發環境。

## 技術深入分析

Keep Codex Fast 的核心技術機制在於其使用 Python 實作，並透過多種指令來進行本地狀態的檢查和維護。其設計模式強調用戶的控制權，所有操作都需要用戶的確認，這樣的設計能夠有效降低資料丟失的風險。效能方面，這個工具能夠處理多個專案的本地狀態，但在面對大量資料時，檢查和報告的速度可能會受到影響。設計取捨上，選擇 Python 作為開發語言使得工具易於擴展，但也可能帶來性能上的挑戰。技術風險方面，若用戶未能定期進行維護，可能會導致 Codex 的性能下降，這需要用戶保持警覺。整合方面，這個工具可以輕鬆融入現有的開發流程，特別是與 CI/CD 流程的結合，能夠提升整體的開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的使用範例，安裝過程相對順暢，無明顯的坑。文件中沒有多語言支持，但對於 Python 使用者來說，學習曲線較低，花 30 分鐘能夠順利運行。這使得新手能夠快速上手並理解工具的功能。

## 優缺點分析

> [!success] 優點
> - 提供安全的資料備份和歸檔機制，降低資料丟失風險。
> - 用戶可完全控制維護過程，避免自動化帶來的風險。
> - 能夠有效管理多個專案的本地狀態，提升開發效率。

> [!danger] 缺點
> - 需要用戶主動參與，增加維護的時間成本。
> - 不支援自動化的維護操作，對於繁忙的開發者來說可能不夠便利。
> - 僅支援 Python 環境，對於其他語言的使用者不友好。

> [!warning] 注意事項
> - 僅支援 Python 環境，需安裝 Python 3.x。
> - 不支援自動化的維護操作，所有變更需用戶確認。
> - 在 Codex 運行時不允許變更本地狀態，需先關閉 Codex。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 主要專注於資料的清理和刪除，而 Keep Codex Fast 強調安全備份和手交文件的生成，適合需要保留上下文的用戶。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 提供更全面的代理管理功能，但不專注於 Codex 的本地狀態維護，適合需要多功能代理的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於資料的清理和刪除，而 Keep Codex Fast 強調安全備份和手交文件的生成。 | 如果需要快速清理不再使用的資料，boneyard 可能更合適。 | medium，因為需要重新考慮資料管理策略。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 提供更全面的代理管理功能，但不專注於 Codex 的本地狀態維護。 | 如果需要多功能的代理管理，agent-sprite-forge 可能更適合。 | low，因為可以輕鬆整合到現有的工作流程中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **keep-codex-fast** | **boneyard** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 專注於資料的清理和刪除，而 Keep Codex Fast 強調安全備份和手交文件的生成。 | agent-sprite-forge 提供更全面的代理管理功能，但不專注於 Codex 的本地狀態維護。 |
> | 遷移成本 | - | medium，因為需要重新考慮資料管理策略。 | low，因為可以輕鬆整合到現有的工作流程中。 |
> | 適用場景 | 主要場景 | 如果需要快速清理不再使用的資料，boneyard 可能更合適 | 如果需要多功能的代理管理，agent-sprite-forg |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Codex 運行時進行變更會導致錯誤，需先關閉 Codex。
  - 解法：在進行任何維護前，確保 Codex 已關閉。
- [MEDIUM] 手交文件的格式不一致可能導致混淆。
  - 解法：遵循 README 中的範本來創建手交文件。
- [MEDIUM] 大型日誌文件的處理可能會導致性能下降。
  - 解法：定期檢查和旋轉日誌文件以維持性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發團隊 | 非常適合 | 能夠有效管理和維護多個專案的本地狀態，保持開發環境的流暢性。 |
| 大型企業的開發部門 | 普通 | 雖然能夠提供一定的維護功能，但對於大規模團隊的需求可能不夠全面。 |
| 個人開發者的 side project | 非常適合 | 提供了一個簡單且安全的方式來管理本地狀態，適合小型專案的維護。 |
| 需要自動化維護的團隊 | 不適合 | 該工具不支援自動化操作，需用戶手動確認。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的本地狀態管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料，依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
| Forks | 42 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-05-04 |
| 建立日期 | 2026-05-02 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vibeforge1111/keep-codex-fast) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vibeforge1111](https://github.com/vibeforge1111) | 14 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有定期的更新和回應。
**連結**：[文件](https://github.com/vibeforge1111/keep-codex-fast#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-02 ~ 2026-05-04）
> **活躍天數** 2 天 · **最新 commit** Ignore local Codex handoffs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/vibeforge1111/keep-codex-fast/issues/3) | Detect oversized Codex thread titles and suggest repair | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Keep Codex Fast
> 
> When Codex starts feeling heavy after weeks of chats, terminals, logs, worktrees, and project history, this gives you a calm way to inspect what is going on and reduce local drag.
> 
> This skill helps you organize local state without losing context.
> 
> The rule is simple:
> 
> > Make handoffs first. Archive, don't delete. Apply changes only when you are ready.
> 
> ## Who This Is For
> 
> Use this if Codex has started feeling slower after heavy use, especially if you:
> 
> - keep long chats around
> - resume old threads often
> - work across many repos
> - run multiple terminals or dev servers
> - want maintenance to feel safe, not scary
> 
> ## What It Does
> 
> By default, this skill only reports. It does not write files, create backups, move folders, or change local Codex state until you explicitly ask it to.
> 
> It helps Codex:
> 
> - see which local state has grown over time
> - create handoff docs before archiving old chats
> - back up important state before applying changes
> - archive old chats instead of deleting them
> - move stale worktrees out of the hot path
> - rotate large logs
> - prune dead project references
> - report heavy Node/dev processes without killing them
> 
> ## Install
> 
> Ask Codex:
> 
> ```text
> Install the keep-codex-fast skill from https://github.com/vibeforge1111/keep-codex-fast
> ```
> 
> Or clone/copy this folder into your Codex skills directory as `keep-codex-fast`.
> 
> ## Quick Start
> 
> After installing, ask Codex:
> 
> ```text
> Use $keep-codex-fast to inspect my Codex local state and recommend a safe maintenance plan.
> ```
> 
> Codex should show you what it found first. Then you decide what to hand off, what to keep active, and what can be archived.
> 
> ## Handoffs First
> 
> Before archiving old active chats, create handoff documents for any repo/session you may want to continue.
> 
> A handoff is a small continuity note. It captures:
> 
> - what you were doing
> - what changed
> - what files matter
> - what commands or checks already ran
> - what is still broken or undecided
> - what to do next
> 
> That lets you archive the heavy chat and start a fresh Codex thread from the handoff.
> 
> Copy this into each active repo chat you care about:
> 
> ```text
> Create a comprehensive handoff document for this repo/session before I archive Codex history.
> 
> Include:
> - repo/path and branch
> - current goal
> - what we already completed
> - files touched or investigated
> - commands/tests already run
> - known errors, warnings, or failing checks
> - open decisions
> - constraints, user preferences, and do-not-touch areas
> - the next 3-7 concrete steps
> 
> Also include a reactivation prompt I can paste into a fresh Codex chat so it can continue from this handoff without relying on the old chat context.
> 
> Save the handoff in a sensible repo-local place like docs/codex-handoffs/YYYY-MM-DD-topic.md unless this repo already has a better handoff location.
> ```
> 
> ## Safe Apply
> 
> After handoffs exist for the chats you care about, use this:
> 
> ```text
> Use $keep-codex-fast to apply safe Codex maintenance.
> 
> Before changing anything, confirm that important active repo chats have handoff docs or do not need them.
> 
> Then back up first, archive instead of deleting, move stale worktrees, rotate large logs, prune dead config references, and verify the result.
> 
> If Codex is currently running, do not mutate local state. Tell me to close Codex first.
> ```
> 
> ## Weekly Or Biweekly Reminder
> 
> Recurring maintenance should be a reminder, not an automatic apply.
> 
> Why: an automation cannot know whether you created handoffs for chats you still care about. It should inspect and remind you, but not archive, move, prune, rotate, normalize, delete, or mutate anything by itself.
> 
> Copy this into Codex:
> 
> ```text
> Use $keep-codex-fast to create a recurring Codex maintenance reminder.
> 
> Schedule it weekly if I use Codex heavily, or biweekly if that seems safer.
> 
> The reminder should:
> - run the keep-codex-fast report first
> - never pass --apply or run mutating maintenance automatically
> - never archive, move, prune, rotate, normalize, delete, or mutate local Codex state
> - remind me to create comprehensive handoff docs and reactivation prompts for active repo chats before any manual apply
> - summarize active session size, archived session size, extended path candidates, old session candidates, worktree candidates, log size, and top Node/dev processes
> - report heavy Node/dev processes without killing them
> - tell me that manual apply should only happen after I confirm handoffs exist or are not needed and Codex is closed
> ```
> 
> ## Advanced: Manual Script Use
> 
> Most users can stay inside Codex and use the prompts above. The script is here for people who want to run it directly.
> 
> Report only. This is read-only and privacy-safe by default:
> 
> ```bash
> python scripts/keep_codex_fast.py
> ```
> 
> Show raw thread IDs, chat titles, paths, and process paths only when you need detail:
> 
> ```bash
> python scripts/keep_codex_fast.py --details
> ```
> 
> Create backups only, without moving or changing local state:
> 
> ```bash
> python scripts/keep_codex_fast.py --backup-only
> ```
> 
> Backup folders can contain private local Codex metadata. Keep them on your machine, and do not publish or share them unless you have reviewed what is inside.
> 
> Apply archive/maintenance actions:
> 
> ```bash
> python scripts/keep_codex_fast.py --apply --archive-older-than-days 10 --worktree-older-than-days 7
> ```
> 
> Wait for Codex to exit before applying:
> 
> ```bash
> python scripts/keep_codex_fast.py --apply --wait-for-codex-exit
> ```
> 
> ## What Can Change
> 
> The skill can safely handle:
> 
> - old non-pinned active sessions
> - stale worktrees
> - large `logs_2.sqlite*` files
> - dead/temp project entries in `config.toml`
> - Windows `\\?\C:\...` path mismatches in local SQLite text fields
> 
> It does not permanently delete chats, logs, or worktrees. It moves them into archive folders and writes backup/restore artifacts before applying changes.
> 
> ## Mental Model
> 
> - Chats are for execution.
> - Handoff docs are for memory.
> - Archives are for history.
> - Fresh threads are for speed.
> 
> ## Flow

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[容器化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[livehl--aimirror|livehl/aimirror]] · [[openai--codex-plugin-cc|openai/codex-plugin-cc]]

[GitHub](https://github.com/vibeforge1111/keep-codex-fast)

## 相關收錄

> [!note]- 直接競品（同子分類：維護工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "維護工具" AND file.name != "vibeforge1111--keep-codex-fast"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vibeforge1111--keep-codex-fast"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "vibeforge1111--keep-codex-fast" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "vibeforge1111--keep-codex-fast"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","容器化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vibeforge1111--keep-codex-fast" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vibeforge1111--keep-codex-fast" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vibeforge1111" AND file.name != "vibeforge1111--keep-codex-fast"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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
> const me = dv.page("Repos/vibeforge1111--keep-codex-fast");
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

> **2026-05-06** — 首次收錄
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

- [[2026-05-07|2026-05-07]] — 再次上榜，816 stars
- [[2026-05-06|2026-05-06]] — 首次收錄，751 stars
