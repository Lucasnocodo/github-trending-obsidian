---
repo: MaximeRivest/riddle
url: https://github.com/MaximeRivest/riddle
owner: MaximeRivest
owner_type: User
language: Rust
license: MIT
description: "The diary of Tom Riddle for the reMarkable Paper Pro — write with your pen, the page drinks your ink and answers in a flowing hand"
homepage: ""
stars: 1076
stars_per_day: 538
forks: 76
open_issues: 13
created: 2026-07-05
pushed_at: 2026-07-07
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "其他"
subcategory: "手寫工具"
release_tag: "v0.3.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "讓你在 reMarkable Paper Pro 上用筆寫日記，並且日記會以流暢的手寫回覆。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-11"
contributor_count: 1
engagement: "low"
issue_close_rate: 7
repo_size_kb: 7120
readme_length: 9939
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-08"
star_history: "2026-07-08:1076"
tags:
  - github
  - "category/其他"
  - "lang/rust"
aliases:
  - "riddle"
  - "MaximeRivest/riddle"
  - "讓你在 reMarkable Paper Pro 上用筆寫日記，並且日記會以流暢的手寫回覆。"
---

# riddle

**1.1k** stars · **538** stars/天 · 建立 2 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/MaximeRivest--riddle");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.3.0`

> [!summary] 一句話摘要
> 讓你在 reMarkable Paper Pro 上用筆寫日記，並且日記會以流暢的手寫回覆。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (538 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 reMarkable Paper Pro 上進行手寫筆記並希望獲得即時回饋的創作者和學生。
> **一句話重點** 這個專案不僅是手寫工具，更是一個能夠與用戶進行互動的智能日記。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MaximeRivest--riddle");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "手寫工具" && p.file.name !== "MaximeRivest--riddle" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 手寫工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到即時手寫回覆的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於將手寫輸入和即時回覆結合，提供了一種全新的書寫體驗。

## 專案簡介

這個專案的核心機制是讓用戶在 reMarkable Paper Pro 上用筆寫字，然後日記會自動回覆，這個過程完全不需要屏幕或鍵盤。具體來說，用戶的筆跡會被轉換成 PNG 圖像，然後發送給一個 LLM（大型語言模型），該模型會生成回覆，並以手寫形式顯示在頁面上。這樣的設計讓用戶感受到更自然的書寫體驗，因為它模擬了傳統的書寫方式，而不是依賴於數位介面。最關鍵的指令是 `remagic install riddle`，這會自動安裝並配置日記應用。這個工具的賣點在於其即時性和高互動性，讓用戶能夠在寫作過程中獲得即時回饋。技術上，它使用 Rust 和 C++ 開發，並且依賴於 reMarkable 的 SDK 來實現低延遲的手寫回覆。

這意味著它能夠在用戶寫完字後，幾乎立即生成回覆，延遲時間約為 0.9 到 1.1 秒。與其他類似工具相比，這個專案的獨特之處在於它的即時性和手寫回覆的自然流暢性，而不是單純的文字輸入和輸出。實際使用中，這個工具能夠處理用戶的手寫輸入，並且能夠記住過去的對話，這使得用戶能夠隨時查詢之前的內容。這個專案目前仍在快速發展中，適合對手寫和自然語言處理有興趣的開發者。未來幾個月內，預計會有更多功能和改進，特別是在記憶和回憶功能方面。

**技術棧**：`Rust` · `C++` · `C` · `Shell`

## 重點功能

- 即時手寫回覆 — 用戶寫下的內容會在 0.9-1.1 秒內生成手寫回覆。
- 記憶功能 — 日記能夠記住過去的對話，讓用戶隨時查詢之前的內容。
- 簡單安裝 — 使用 `remagic install riddle` 指令輕鬆安裝和配置。
- 多種 API 支援 — 支援 OpenAI 兼容的 API，無需額外軟體。
- 自定義設置 — 用戶可以根據需要調整 API 鍵和模型設置。

## 快速開始

1. 安裝 riddle
```bash
remagic install riddle
```
2. 配置 riddle 設置
```bash
remagic config riddle
```
3. 在 AppLoad 中重載並啟動日記
```bash
tap Reload in AppLoad
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1076 stars（538/天），forks 76（7.1%），這顯示出強烈的興趣和參與度。作者 MaximeRivest 之前有開發過其他與 reMarkable 相關的工具，這使得他在這個領域有一定的知名度。這個專案解決了用戶在數位書寫中缺乏即時回饋的痛點，之前的解決方案通常需要依賴於屏幕或鍵盤，無法提供如此自然的書寫體驗。最近的推廣活動和社群討論也可能促進了這個專案的曝光度。技術上，這個工具的實現依賴於 reMarkable 的 SDK，這使得它能夠直接與設備的 e-ink 引擎互動，提供即時的手寫回覆。forks/stars 比率為 7.1%，顯示出許多人對這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 reMarkable Paper Pro 上進行手寫筆記並希望獲得即時回饋的創作者和學生。

> [!example] 使用場景
> - 學生用它來在 reMarkable Paper Pro 上記錄課堂筆記，因為它能夠即時生成回覆，讓筆記更具互動性。
> - 作家用它來進行創作，因為它能夠記住之前的內容，幫助他們隨時回顧靈感。
> - 研究人員用它來整理研究想法，因為它的手寫回覆讓思考過程更加自然流暢。

## 架構分析

這個專案採用的是一個多層架構，主要分為手寫輸入層、處理層和顯示層。手寫輸入層使用原生的 evdev 事件來捕捉筆跡，然後將其轉換為 PNG 格式，這樣可以方便地發送給 LLM 進行處理。處理層使用 Rust 實現，負責與 LLM 進行通信並生成回覆，這樣的選擇使得它在性能上有很好的表現。

顯示層則根據用戶的需求選擇不同的後端，能夠直接控制 e-ink 顯示，這樣可以實現最低的延遲。這樣的設計使得整個系統能夠快速響應用戶的輸入，並提供即時的回饋。選擇 Rust 和 C++ 的原因在於它們的性能和對底層硬體的控制能力，這樣可以更好地滿足即時性的需求。

整體架構的設計使得這個工具在手寫識別和即時回覆上具有優越的性能。

## 技術深入分析

這個專案的核心技術機制是將手寫輸入轉換為圖像，然後通過 LLM 生成回覆。使用 Rust 進行開發使得它在性能上有很好的表現，特別是在處理手寫識別和即時回覆方面。整個系統的延遲時間控制在 0.9 到 1.1 秒之內，這對於用戶體驗至關重要。選擇 C++ 和 C 的原因在於它們能夠直接與硬體進行交互，這樣可以實現更低的延遲。設計上，這個專案在記憶功能上也做了優化，能夠記住用戶的過去對話，這使得用戶能夠隨時查詢之前的內容。技術風險方面，這個專案依賴於 reMarkable 的 SDK，這可能會在未來的版本更新中帶來不穩定性。整合方面，這個工具能夠與其他 OpenAI 兼容的 API 進行無縫對接，這使得它在功能上有很大的擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和範例，安裝過程相對順暢，但需要用戶具備一定的技術背景。整體上，對於新手來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供即時的手寫回覆，提升用戶體驗。
> - 能夠記住過去的對話，增強互動性。
> - 安裝和配置過程簡單，適合快速上手。

> [!danger] 缺點
> - 僅限於 reMarkable Paper Pro，無法在其他設備上使用。
> - 需要在開發者模式下運行，對於普通用戶來說設置較為複雜。
> - 目前對於非 OpenAI 模型的支援有限。

> [!warning] 注意事項
> - 僅支援 reMarkable Paper Pro，其他型號可能無法正常運行。
> - 需要在開發者模式下運行，對於普通用戶來說設置較為複雜。
> - 目前僅支持 OpenAI 兼容的 API，對於其他模型的支援可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建 AI 代理，與 riddle 的手寫回覆功能不同，適合需要更複雜交互的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一個更廣泛的文本生成平台，而 riddle 專注於手寫體驗，適合不同的使用需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建 AI 代理，而 riddle 則專注於手寫回覆，適合不同的使用需求。 | 如果需要更複雜的 AI 代理交互，則應選擇 agent-sprite-forge。 | medium，因為需要重新設計交互流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一個更廣泛的文本生成平台，而 riddle 專注於手寫體驗。 | 如果需要一個更通用的文本生成工具，則應選擇 boneyard。 | low，因為文本生成的 API 介面相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **riddle** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於創建 AI 代理，而 riddle 則專注於手寫回覆，適合不同的使用需求。 | boneyard 提供了一個更廣泛的文本生成平台，而 riddle 專注於手寫體驗。 |
> | 遷移成本 | - | medium，因為需要重新設計交互流程。 | low，因為文本生成的 API 介面相似。 |
> | 適用場景 | 主要場景 | 如果需要更複雜的 AI 代理交互，則應選擇 agent-sp | 如果需要一個更通用的文本生成工具，則應選擇 boneyard |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在非 reMarkable Paper Pro 型號上無法運行
  - 解法：僅限於 reMarkable Paper Pro 使用
- [MEDIUM] 需要在開發者模式下運行，設置過程複雜
  - 解法：參考 README 中的安裝指引
- [MEDIUM] 對於非 OpenAI 模型的支援有限
  - 解法：使用 OpenAI 兼容的 API

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在 reMarkable Paper Pro 上進行手寫筆記的學生 | 非常適合 | 提供即時的手寫回覆，增強學習效果。 |
| 作家需要一個能夠記住過去內容的創作工具 | 非常適合 | 能夠隨時查詢之前的靈感和內容。 |
| 普通用戶希望在 reMarkable 上進行簡單的筆記 | 普通 | 雖然功能強大，但設置過程可能對於普通用戶來說較為複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到即時手寫回覆的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限運行，但需要存取用戶的筆跡資料。對於依賴的 API 也需注意安全性，確保使用安全的 API 鍵。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MaximeRivest--riddle");
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
> const me = dv.page("Repos/MaximeRivest--riddle");
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
| Forks | 76 |
| Open Issues | 13 |
| Issue 解決率 | 7% (1 closed) |
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-07-05 |
| Repo 大小 | 7.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MaximeRivest/riddle) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 63
>     "C++" : 20
>     "C" : 10
>     "Shell" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MaximeRivest](https://github.com/MaximeRivest) | 19 |

**最新版本**：v0.3.0 — The Diary 0.3.0 (2026-07-07)

> [!info]- Release Notes
> An enchanted diary: write to it with the pen — it writes back, and it remembers.

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次提交和更新。
**連結**：[文件](https://github.com/MaximeRivest/riddle)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-05 ~ 2026-07-07）
> **活躍天數** 3 天 · **最新 commit** Remagic Home: a takeover session host + drawlab/home app bundles

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/MaximeRivest/riddle/issues/3) | Two settings that currently require a recompile: footprint e | 1 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # riddle — the diary of Tom Riddle, for the reMarkable Paper Pro
> 
> Write on the page with your pen. After a pause, the diary **drinks your ink** —
> your words fade into the paper — the page thinks for a moment, and an answer
> writes itself back in a flowing hand, stroke by stroke, then fades away.
> 
> No screen glow, no keyboard, no chat UI. Just ink appearing on paper.
> 
> _This is the diary from [the demo](https://x.com/MaximeRivest)._
> 
> 
> ### Install with remagic (easiest)
> 
> ```sh
> remagic install riddle     # checksum-verified download → AppLoad
> remagic config riddle      # settings form in your browser (+ QR for phone)
> ```
> 
> Then in **AppLoad**: tap **Reload**, then **The Diary**. Write, and rest your
> pen. (Or install it from the **Store** app right on the tablet.)
> 
> 
> ### Install the prebuilt bundle
> 
> 1. Grab `riddle-.zip` from the [latest release](https://github.com/MaximeRivest/riddle/releases/latest)
>    and unzip it into a folder: `unzip riddle-*.zip -d riddle`
> 2. Copy the folder to your tablet:
>    `scp -O -r riddle root@10.11.99.1:/home/root/xovi/exthome/appload/`
> 3. Add an API key: `cp oracle.env.example oracle.env` in that folder and put your `RIDDLE_OPENAI_KEY` in it (any OpenAI-compatible key). Or skip it to use [pi](#option-b--pi-the-power-path).
> 4. In **AppLoad**: tap **Reload**, then **The Diary**. Write, and rest your pen.
> 
> > ⚠️ **This modifies your device.** The prebuilt bundle and the catalog build
> > run in **takeover mode**: tapping The Diary stops the whole reMarkable UI
> > and takes the screen. Leave with a **5-finger tap** — xochitl restarts
> > automatically. It runs as root and drives the e-ink engine directly. It has
> > only been tested on a **reMarkable Paper Pro** (ferrari, aarch64,
> > OS 3.26–3.27). It may not work on other models or OS versions, and you use
> > it entirely at your own risk. Not affiliated with reMarkable AS. Keep SSH
> > access working before you install anything — if anything ever wedges:
> > `ssh root@10.11.99.1 'systemctl start xochitl'`.
> 
> 
> ### Option A — any OpenAI-compatible API (easiest, zero setup)
> 
> Set an API key and riddle talks straight to an OpenAI-compatible
> `/chat/completions` endpoint. Works with OpenAI, OpenRouter, Groq, a local
> server — anything that speaks the format. No extra software on the tablet.
> 
> ```sh
> export RIDDLE_OPENAI_KEY="sk-..."                       # required
> export RIDDLE_OPENAI_BASE="https://api.openai.com/v1"   # optional (default)
> export RIDDLE_OPENAI_MODEL="gpt-4o-mini"                # optional; must see images
> export RIDDLE_OPENAI_REASONING="low"                    # thinking models only
> export RIDDLE_OPENAI_MAX_TOKENS="2000"                  # runaway guard
> ```
> 
> Any vision-capable model works. On the tablet these live in `oracle.env`
> next to the binary (see `oracle.env.example`, or just run
> `remagic config riddle` — it has one-tap presets for OpenAI, OpenRouter,
> and Gemini). Example with OpenRouter:
> 
> ```sh
> export RIDDLE_OPENAI_KEY="$OPENROUTER_API_KEY"
> export RIDDLE_OPENAI_BASE="https://openrouter.ai/api/v1"
> export RIDDLE_OPENAI_MODEL="openai/gpt-4o-mini"
> ```
> 
> Two gotchas with thinking models (Gemini 3.x, o-series): set
> `RIDDLE_OPENAI_REASONING=low` for faster first ink (some providers reject
> the field on non-thinking models — leave it unset there), and keep
> `RIDDLE_OPENAI_MAX_TOKENS` roomy — hidden reasoning tokens count against it,
> and a tight cap starves the visible reply.
> 
> Verify your setup before launching the diary:
> 
> ```sh
> riddle --oracle-test path/to/handwriting.png   # prints the streamed reply
> ```
> 
> Measured ~0.9–1.1 s to first ink on-device. The HTTPS is built into riddle
> (pure-Rust, no extra libraries).
> 
> 
> ### Takeover (instant ink) — the one from the demo
> 
> Requires the reMarkable SDK toolchain (`~/rm-sdk-3.26`) because the linked
> vendor Qt libs need its glibc, **and** `libqsgepaper.so` pulled from *your own
> device* (it is proprietary and not distributed here):
> 
> ```sh
> cd quill && ./build.sh              # pulls libqsgepaper.so from the device over
>                                     # ssh, builds libquill.so + the demos
> cd ../riddle && ./build-takeover.sh
> ./scripts/make-bundle.sh            # stages the AppLoad bundle in dist/riddle/
> ```
> 
> The staged `dist/riddle/` is self-contained (binary, `libquill.so`, launch
> scripts, manifest) — copy it to
> `/home/root/xovi/exthome/appload/riddle/`, or publish it to the catalog with
> `remagic publish dist/riddle`. Launching via AppLoad (`appload-launch.sh`)
> detaches into a transient systemd unit, stops xochitl, runs the diary, and
> **always restores xochitl on exit** — leave with a 5-finger tap or SIGTERM
> (`systemctl stop riddle-takeover`); the power button sleeps and wakes the
> diary without leaving it. The unit's stop hook restarts xochitl even if
> riddle dies uncleanly. If anything wedges:
> `ssh root@10.11.99.1 'systemctl start xochitl'`.
> 
> 
> ### Option B — pi (the power path)
> 
> If you already run [`pi`](https://github.com/badlogic/pi-mono), riddle will use
> a resident `pi --mode rpc` process kept warm (Node + your subscription auth
> loaded once), so each turn pays only model latency. Used automatically when
> `RIDDLE_OPENAI_KEY` is **not** set. Defaults (override in `oracle.env`):
> pi at `/home/root/node/bin` (`RIDDLE_PI_BIN_DIR`), provider `openai-codex`
> (`RIDDLE_PI_PROVIDER`), model `gpt-5.4-mini` (`RIDDLE_PI_MODEL`).
> 
> Both stream the reply sentence-by-sentence, so the quill starts writing seconds
> before the model finishes. The persona prompt lives in `riddle/src/oracle.rs`.
> 
> A note on Tom's memory: with the HTTP backend every page is a fresh
> conversation — Tom does not remember your previous page. With pi, the warm
> session remembers everything since the diary was opened (and pi persists
> that session in its own data dir on the tablet).
> 
> If the oracle can't answer — missing key, refused key, no Wi-Fi — Tom writes
> the reason on the page instead of a reply, and the full error goes to the
> journal (`journalctl -u riddle-takeover`).
> 
> 
> ### 🪄 New to this? Start here
> 
> You need a **reMarkable Paper Pro** in developer mode with a launcher installed.
> If that sounds like a lot, it isn't — **[remagic](https://github.com/maximerivest/remagic)**
> walks you through turning on developer mode and sets up everything with one
> command. Come back here, drop riddle in, and start writing to Tom.
> 
> Already have xovi + AppLoad? Install from the [remagic](https://github.com/maximerivest/remagic)
> catalog, [grab the prebuilt bundle](#install-the-prebuilt-bundle), or
> [build from source](#building).
> 
> 
> ## How it works
> 
> ```
>  pen (raw evdev, full 4096-level pressure, hardware event rate)
>    │ strokes
>    ▼
>  riddle ── idle 2.8s → commit page → PNG ──► oracle (resident LLM process,
>    │                                          streams reply sentence-by-sentence)
>    ▼ strokes (Dancing Script → skeletonized to single-pixel pen paths)
>  display backend
>    ├── qtfb        — windowed, inside xochitl (build-from-source flavour)
>    └── quill       — full takeover: xochitl stopped, vendor e-ink engine
>                      driven directly for instant ink (lowest latency there
>                      is; what the prebuilt bundle runs)
> ```
> 
> - **`riddle/`** — the app (Rust). Pen input, ink surface, handwriting
>   synthesis (rasterize → Zhang-Suen thinning → stroke tracing → animated
>   replay), the oracle process manager, and both display backends.
> - **`quill/`** — the takeover display host (C/C++). An
>   [epfb-re](https://github.com/asivery/epfb-re)-style QImage-constructor
>   interposition shim over the vendor `libqsgepaper.so` waveform engine,
>   exposed as a small C ABI (`quill_init` / `quill_buffer` / `quill_swap`)
>   that riddle links against with `--features takeover`. Also carries a small
>   family of demos (`scribble`, a pen-to-glass latency test, plus map, image,
>   and GIF renderers).
> 
> 
> ## Gestures
> 
> | Do this | And |
> |---------|-----|
> | Write, then rest the pen | The diary drinks your ink and Tom replies |
> | Write *"show me what I wrote about…"* | The remembered page **rises through the paper**: the dat

## 延伸閱讀

相關概念：[[自然語言處理]] · [[手寫識別]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[farzaa--clicky|farzaa/clicky]] · [[yetone--voice-input-src|yetone/voice-input-src]]

[GitHub](https://github.com/MaximeRivest/riddle)

## 相關收錄

> [!note]- 直接競品（同子分類：手寫工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "手寫工具" AND file.name != "MaximeRivest--riddle"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "MaximeRivest--riddle"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "MaximeRivest--riddle" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "MaximeRivest--riddle"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","手寫識別","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MaximeRivest--riddle" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MaximeRivest--riddle");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MaximeRivest--riddle" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MaximeRivest" AND file.name != "MaximeRivest--riddle"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MaximeRivest--riddle");
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
> const me = dv.page("Repos/MaximeRivest--riddle");
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
> const me = dv.page("Repos/MaximeRivest--riddle");
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
> const me = dv.page("Repos/MaximeRivest--riddle");
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
> const me = dv.page("Repos/MaximeRivest--riddle");
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

> **2026-07-08** — 首次收錄
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

- [[2026-07-08|2026-07-08]] — 首次收錄，1.1k stars
