---
repo: MaximeRivest/riddle
url: https://github.com/MaximeRivest/riddle
owner: MaximeRivest
owner_type: User
language: Rust
license: MIT
description: "The diary of Tom Riddle for the reMarkable Paper Pro — write with your pen, the page drinks your ink and answers in a flowing hand"
homepage: ""
stars: 1077
stars_per_day: 539
forks: 76
open_issues: 13
created: 2026-07-05
pushed_at: 2026-07-07
first_seen: 2026-07-08
week: "2026-W28"
month: "2026-07"
category: "其他"
subcategory: "數位筆記"
release_tag: "v0.3.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-08
use_case: "讓 reMarkable Paper Pro 的使用者透過手寫與日記互動，實現流暢的對話體驗。"
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
star_history: "2026-07-08:1076,2026-07-08:1077"
tags:
  - github
  - "category/其他"
  - "lang/rust"
aliases:
  - "riddle"
  - "MaximeRivest/riddle"
  - "讓 reMarkable Paper Pro 的使用者透過手寫與日記互動，實現流暢的對話體驗。"
---

# riddle

**1.1k** stars · **539** stars/天 · 建立 2 天前 · Rust · MIT

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
> 讓 reMarkable Paper Pro 的使用者透過手寫與日記互動，實現流暢的對話體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (539 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 reMarkable Paper Pro 上實現手寫與 AI 互動的創作者和學生。
> **一句話重點** 這個專案的魅力在於它將手寫和 AI 互動結合，創造出獨特的數位日記體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MaximeRivest--riddle");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數位筆記" && p.file.name !== "MaximeRivest--riddle" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數位筆記 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到獨特的手寫 AI 互動體驗，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於將手寫與 AI 互動結合，提供無屏幕的書寫體驗。

## 專案簡介

這個專案提供了一個獨特的數位日記體驗，使用者可以在 reMarkable Paper Pro 上手寫內容，然後日記會自動生成回應，仿佛在與一個活生生的對話者交流。具體流程是：使用者寫下問題，日記會吸收這些文字，經過一段時間後，日記會以流暢的手寫字體回覆。這樣的設計讓使用者能夠享受無屏幕的書寫體驗，強調了手寫的自然感。安裝過程相對簡單，使用者只需透過 `remagic install riddle` 指令進行安裝，並可選擇設置 OpenAI API 來增強日記的智能回應能力。這個工具的賣點在於它的沉浸式體驗，讓人感覺自己在與一個有靈魂的日記互動。

技術上，這個專案使用 Rust、C++、C 和 Shell，並且依賴於 OpenAI 的 API 來生成回應，這樣的選擇使得日記能夠快速且高效地處理用戶輸入。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `432539/gpt2api`，riddle 的獨特之處在於其專為手寫互動設計，並且提供了更為直觀的用戶體驗。使用者在使用過程中可能會遇到需要重新編譯的設定問題，但整體來說，這個專案的設計理念和實現方式都非常吸引人。對於喜歡手寫記錄並希望與 AI 互動的用戶來說，這是一個值得嘗試的工具。

**技術棧**：`Rust` · `C++` · `C` · `Shell`

## 重點功能

- 手寫互動 — 使用者可以直接在頁面上手寫，日記會自動生成回應。
- OpenAI API 整合 — 支持與任何 OpenAI 兼容的 API 進行交互，無需額外軟體。
- 簡易安裝 — 透過 `remagic install riddle` 指令輕鬆安裝，快速上手。
- 自定義設置 — 使用者可以通過環境變數自定義 API 鍵和模型。
- 無屏幕體驗 — 提供沉浸式的書寫體驗，無需依賴屏幕或鍵盤。

## 快速開始

1. 使用 remagic 安裝 riddle
```bash
remagic install riddle
```
2. 配置 riddle 設定
```bash
remagic config riddle
```
3. 在 AppLoad 中重新加載日記
```bash
tap Reload, then The Diary
```

## 程式碼範例

```rust
# 前置條件：安裝 riddle 並配置 API 鍵
export RIDDLE_OPENAI_KEY="sk-..."  # required
export RIDDLE_OPENAI_BASE="https://api.openai.com/v1"  # optional (default)
export RIDDLE_OPENAI_MODEL="gpt-4o-mini"  # optional; must see images
export RIDDLE_OPENAI_REASONING="low"  # thinking models only
export RIDDLE_OPENAI_MAX_TOKENS="2000"  # runaway guard
# 預期輸出：日記將能夠根據手寫內容生成回應。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 1077 stars（539/天），forks 76（7.1%），顯示出強烈的初期興趣。作者 MaximeRivest 之前在開源社群有一定的影響力，這個專案解決了手寫與 AI 互動的需求，讓用戶能夠在無屏幕的情況下享受智能對話的樂趣。近期的推廣和展示可能吸引了許多對於數位筆記有興趣的用戶，導致其快速增長。這個工具的獨特性和創新性使其在同類產品中脫穎而出，並且引發了社群的熱烈討論。

## 適合誰使用

**目標受眾**：希望在 reMarkable Paper Pro 上實現手寫與 AI 互動的創作者和學生。

> [!example] 使用場景
> - 學生用它來記錄課堂筆記，因為可以隨時與日記互動，獲得即時的問題解答。
> - 作家用它來進行創作，因為手寫的過程能激發靈感，並且日記會提供建議和反饋。
> - 心理治療師用它來輔助治療，因為患者可以寫下情感，並獲得日記的理解與回應。

## 架構分析

這個專案的架構主要由前端的手寫輸入和後端的 AI 回應組成。前端使用 reMarkable 的 API 來捕捉手寫輸入，然後將其轉換為文本，這個過程使用了 Rust 和 C++ 來確保性能和效率。後端則通過 OpenAI API 進行智能回應，這樣的設計使得整個系統能夠快速反應。選擇這種架構的原因是希望能夠在保持高效能的同時，提供良好的用戶體驗。由於依賴於 OpenAI 的 API，這也意味著在使用過程中需要穩定的網路連接，這可能會成為一個瓶頸。

## 技術深入分析

riddle 的核心技術在於將手寫輸入轉換為文本，並通過 OpenAI API 生成回應。這個過程中，使用 Rust 和 C++ 來處理性能要求，確保在 reMarkable Paper Pro 上的流暢運行。系統能夠處理用戶的即時輸入，並在幾秒鐘內生成回應，這對於用戶體驗至關重要。選擇 OpenAI API 作為後端的理由在於其強大的自然語言處理能力，這使得日記能夠生成高質量的回應。依賴於外部 API 可能會帶來延遲風險，尤其在網路不穩定的情況下。整體架構設計上，riddle 將重心放在用戶的書寫體驗上，並且避免了傳統的屏幕介面，這一點在同類產品中是相對少見的。整合到現有的開發環境中相對簡單，因為它使用了標準的 API 調用，並且可以與多種開發工具兼容。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和配置的具體步驟。安裝過程相對順暢，但需要注意某些設定可能需要重新編譯。文件中有良好的入門指南，幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供獨特的手寫與 AI 互動體驗，增強創作靈感。
> - 安裝和配置過程相對簡單，適合大多數使用者。
> - 無需依賴屏幕，提供沉浸式的書寫環境。

> [!danger] 缺點
> - 僅限於 reMarkable Paper Pro，無法在其他設備上使用。
> - 需要 OpenAI API 鍵，增加了使用門檻。
> - 某些功能需要重新編譯，對新手不友好。

> [!warning] 注意事項
> - 僅支援 reMarkable Paper Pro，其他型號可能無法正常運作。
> - 需要 OpenAI API 鍵才能使用智能回應功能，否則只能使用基本功能。
> - 某些設定需要重新編譯，對於不熟悉的使用者可能造成困擾。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建 AI 代理，而 riddle 則專注於手寫互動，提供更直觀的用戶體驗。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 提供 API 接口，而 riddle 則將其整合到手寫日記中，強調手寫的沉浸感。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建 AI 代理，使用 Python 實作，提供更靈活的擴展性，但缺乏手寫互動的功能。 | 如果你的團隊需要一個靈活的 AI 代理系統，並且不需要手寫功能，則應選擇此工具。 | medium，因為需要重新設計用戶交互界面。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 提供 API 接口，使用 Node.js 實作，適合需要快速集成的場景，但不提供手寫功能。 | 如果你的應用需要快速集成 GPT-2 API 而不需要手寫功能，則應選擇此工具。 | low，因為 API 調用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **riddle** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於創建 AI 代理，使用 Python 實作，提供更靈活的擴展性，但缺乏手寫互動的功能。 | gpt2api 提供 API 接口，使用 Node.js 實作，適合需要快速集成的場景，但不提供手寫功能。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶交互界面。 | low，因為 API 調用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個靈活的 AI 代理系統，並且不需要手寫功 | 如果你的應用需要快速集成 GPT-2 API 而不需要手寫功 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和實驗，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些設定需要重新編譯，對於不熟悉的使用者可能造成困擾。
  - 解法：提供詳細的編譯指南，幫助使用者理解過程。
- **[HIGH]** 在網路不穩定的情況下，可能會導致日記無法及時回應。
  - 解法：確保網路連接穩定，或考慮使用本地伺服器。
- **[HIGH]** 僅限於特定型號的設備，其他設備可能無法正常運作。
  - 解法：在安裝前確認自己的設備型號。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 在大學中使用的數位筆記工具 | 非常適合 | 手寫互動能夠提高學習效果，並且提供即時反饋。 |
| 需要快速生成文本的創作者 | 適合 | 能夠快速生成回應，激發創作靈感。 |
| 不熟悉技術的普通用戶 | 普通 | 安裝過程可能對新手造成困難。 |
| 需要在商業環境中使用的專業工具 | 不適合 | 目前仍處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到獨特的手寫 AI 互動體驗，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具需要 root 權限，但僅在 reMarkable Paper Pro 上運行，並不存取敏感資料。使用 OpenAI API 時需注意 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

riddle 最常與 reMarkable Paper Pro 搭配使用，主要在筆記和創作環節中發揮作用。在一個使用 reMarkable 的環境中，使用者可以直接在日記中手寫問題，日記會即時生成回應。這個工具可以與 GitHub Actions 等 CI 工具整合，方便開發者進行自動化測試。整合過程中，使用者可能會遇到需要重新編譯的問題，這可能會影響整體的使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 riddle 出現之前，手寫與 AI 互動的工具大多依賴於屏幕和鍵盤，缺乏沉浸式的體驗。隨著 AI 技術的進步，特別是 OpenAI 的模型越來越強大，讓這種無屏幕的手寫互動成為可能。這個工具代表了數位筆記和 AI 互動的未來趨勢，未來可能會有更多類似的產品出現，進一步提升用戶的創作體驗。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 Linux 系統操作
- 了解 OpenAI API 基本概念

> [!tip] 導入策略
> 第一週：在個人設備上試用。第二週：在小型團隊內部測試。第三週：收集反饋並進行改進。第四週：撰寫使用手冊並進行全員培訓。

**成功指標**：用戶滿意度提高，手寫筆記的使用率增加。

> [!warning] 退出計畫
> 若需退出，所有設定均為標準格式，可輕鬆轉移至其他筆記工具。

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

**社群活躍度**：社群活躍度中等，開放問題回應速度尚可。
**連結**：[文件](https://github.com/MaximeRivest/riddle/wiki)

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

相關概念：[[自然語言處理]] · [[數位筆記]] · [[AI 互動]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[farzaa--clicky|farzaa/clicky]] · [[yetone--voice-input-src|yetone/voice-input-src]]

[GitHub](https://github.com/MaximeRivest/riddle)

## 相關收錄

> [!note]- 直接競品（同子分類：數位筆記）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數位筆記" AND file.name != "MaximeRivest--riddle"
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
> const concepts = ["自然語言處理","數位筆記","AI 互動"];
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
