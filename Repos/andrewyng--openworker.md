---
repo: andrewyng/openworker
url: https://github.com/andrewyng/openworker
owner: andrewyng
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 10696
stars_per_day: 1070
forks: 1408
open_issues: 300
created: 2026-07-20
pushed_at: 2026-07-28
first_seen: 2026-07-24
week: "2026-W30"
month: "2026-07"
category: "生產力"
subcategory: "自動化"
release_tag: "v0.1.6"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-24
use_case: "提供一個開源的 AI 助手，能在桌面上自動完成各種任務，並生成實際的工作成果。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-30"
contributor_count: 4
engagement: "medium"
issue_close_rate: 4
repo_size_kb: 1172
readme_length: 6978
bus_factor: 1
last_release_days: 7
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-24"
star_history: "2026-07-24:1686,2026-07-25:3538,2026-07-26:5217,2026-07-27:7051,2026-07-30:10696"
tags:
  - github
  - "category/生產力"
  - "lang/python"
aliases:
  - "openworker"
  - "andrewyng/openworker"
  - "提供一個開源的 AI 助手，能在桌面上自動完成各種任務，並生成實際的工作成果。"
---

# openworker

**10.7k** stars · **1.1k** stars/天 · 建立 10 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/andrewyng--openworker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.6`

> [!summary] 一句話摘要
> 提供一個開源的 AI 助手，能在桌面上自動完成各種任務，並生成實際的工作成果。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Viral (1.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要一個能在桌面上自動完成任務並生成實際成果的獨立工作者或小型團隊。
> **一句話重點** OpenWorker 的最大優勢在於它能在本地運行並生成實際成果，這在目前的 AI 助手市場中是相對少見的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "andrewyng--openworker" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，8 小時整合，得到自動化日常任務的效果，值得考慮。

> [!abstract] 核心創新
> 提供一個不鎖定於特定模型的開源 AI 助手，能在本地運行並生成實際成果。

## 專案簡介

OpenWorker 是一個開源的 AI 助手，旨在幫助用戶自動完成日常任務。用戶只需告訴 OpenWorker 想要的結果，例如「準備客戶簡報」或「整理日曆」，它會將任務分解為步驟，並在桌面、檔案和連接的應用程式中執行。這個過程中，OpenWorker 會在發送訊息或更改日曆之前確認用戶的批准，最終提供實際的交付成果，而不僅僅是待辦事項清單。這種設計使得用戶能夠專注於更高層次的工作，而不是繁瑣的操作。核心技術包括 Python 和 FastAPI，並利用 aisuite 作為底層架構，這使得它能夠靈活地與多種 API 進行整合。OpenWorker 支持 25 種以上的工具整合，包括 Slack、Jira 和 Google Calendar，並且可以使用用戶自己的 API 金鑰，這樣用戶的數據不會隨意外流出。

與其他 AI 助手相比，如 ChatGPT 或 Claude，OpenWorker 提供了更強的本地化處理能力，並且不會鎖定用戶於特定的模型或服務。這使得它在需要高度定制化和數據隱私的場景中更具優勢。實際使用中，OpenWorker 的效能取決於用戶的硬體配置和所選的模型，對於需要處理大量數據的用戶來說，可能需要更高的資源配置。這個專案目前處於開放測試階段，社群活躍度高，並且有持續的更新和改進。對於小型團隊或個人用戶來說，這是一個值得考慮的選擇，尤其是當他們需要一個能夠自動化日常工作的助手時。

**技術棧**：`Python 3.10` · `FastAPI` · `aisuite`

## 重點功能

- 生成實際交付成果 — 能生成文件、報告和網頁，並以可共享的檔案格式輸出。
- Slack 整合 — 在 Slack 中提及 @OpenWorker，會話會在桌面上開啟，並將結果以線程回覆。
- 多種工具整合 — 支持 25 種以上的應用程式整合，包括 GitHub、Notion 和 Google Calendar。
- 自動化排程 — 支持定期工作的自動化，例如早晨簡報或每週報告。
- 本地運行 — 用戶可以使用自己的 API 金鑰，數據不會隨意外流出。

## 快速開始

1. 安裝 OpenWorker
```bash
下載 macOS 或 Windows 版本並安裝
```
2. 添加模型金鑰
```bash
在應用中添加 OpenAI 或其他模型的 API 金鑰
```
3. 開始使用
```bash
告訴 OpenWorker 你想要的結果，例如 '準備客戶簡報'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 10696 stars（1070/天），forks 1408（13.2%），顯示出強烈的社群興趣。這個專案的作者包括 rohitprasad15 和 andrewyng，他們在開源社群中有一定的影響力。OpenWorker 解決了用戶在日常工作中需要多個工具和平台進行操作的痛點，通過提供一個集中式的 AI 助手來簡化流程。近期的推廣活動和社群討論也促進了其曝光率。技術上，這個工具的設計使得用戶能夠選擇自己喜歡的模型，這在市場上是相對少見的，進一步吸引了對數據隱私有需求的用戶。forks/stars 比率為 13.2%，顯示出許多用戶對於自定義和擴展的興趣。

## 適合誰使用

**目標受眾**：需要一個能在桌面上自動完成任務並生成實際成果的獨立工作者或小型團隊。

> [!example] 使用場景
> - 行銷專員用它來自動生成每週報告，因為手動整理數據和撰寫報告耗時且容易出錯。
> - 產品經理用它來整合 Slack 和 Jira 的任務，因為這樣可以節省時間並減少在不同平台間切換的麻煩。
> - 自由工作者用它來管理客戶的日曆和會議安排，因為這樣能提高工作效率並減少遺漏重要事項的風險。

## 架構分析

OpenWorker 採用客戶端-伺服器架構，客戶端為桌面應用，伺服器則是基於 Python 的本地代理。這種設計使得用戶能夠在本地運行 AI 助手，並且不依賴於雲端服務，這樣可以提高數據隱私性。資料流中，客戶端發送請求到本地伺服器，伺服器再根據用戶的需求調用不同的 API 進行處理。

這樣的設計使得用戶可以靈活選擇使用的模型，並且能夠在本地完成所有操作，避免了網路延遲的問題。選擇使用 Python 和 FastAPI 是因為它們在處理 I/O 密集型應用時的高效性，並且有著良好的社群支持。這種架構的擴展性取決於用戶的硬體配置，對於需要處理大量數據的用戶，可能需要更高的資源配置。

## 技術深入分析

OpenWorker 的核心技術機制基於 Python 和 FastAPI，這使得它能夠高效處理用戶的請求並進行多任務處理。它的架構設計為客戶端-伺服器模式，客戶端是桌面應用，伺服器則是本地代理，這樣的設計能夠確保用戶的數據不會隨意外流出。效能方面，OpenWorker 能夠處理各種不同的任務，具體效能取決於用戶的硬體配置和所選的模型。設計上選擇 Python 是因為其在開發速度和社群支持上的優勢，FastAPI 則提供了高效的 I/O 處理能力。

這種選擇的代價是可能需要用戶具備一定的技術背景來進行設置和使用。技術風險方面，隨著用戶數量的增加，可能會面臨伺服器性能瓶頸的問題，特別是在處理大量請求時。整合方面，OpenWorker 能夠與多種主流工具鏈相容，並且支持多種 API 的整合，這使得它在現有的工作流程中能夠輕鬆融入。整體來看，OpenWorker 的設計考量了用戶的需求，並在數據隱私和靈活性上做出了平衡。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和使用說明，但缺乏具體的範例。安裝過程相對順暢，但 Windows 版本的安全警告可能會造成困擾。文件目前僅提供英文，對於非英語用戶可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 能生成實際的工作成果，而不僅僅是建議或待辦事項。
> - 支持多種工具整合，能夠靈活適應用戶的工作流程。
> - 本地運行，能夠保護用戶的數據隱私。

> [!danger] 缺點
> - 目前仍在開放測試階段，可能存在穩定性問題。
> - 需要一定的技術背景來設置和使用。
> - 在 Windows 上的版本尚未簽名，可能會影響使用體驗。

> [!warning] 注意事項
> - 目前僅支援 Python 3.10 以上版本。
> - 在 Windows 上的版本尚未簽名，可能會出現安全警告。
> - 對於某些大型任務，可能需要較高的硬體配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 助手功能，但專注於遊戲開發場景，適合遊戲開發者使用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供自動化功能，但主要針對資料處理，適合需要處理大量數據的用戶。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於代碼生成和編輯，適合開發者使用，而 OpenWorker 更加通用，適合各類任務。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 助手，提供特定於遊戲的功能，而 OpenWorker 更加通用。 | 如果你的專案主要集中在遊戲開發上，這個工具會更適合。 | medium，因為需要重新調整工作流程以適應遊戲開發的需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據處理和分析，適合需要處理大量數據的用戶，而 OpenWorker 更加通用。 | 如果你的工作主要集中在數據分析和處理上，這個工具會更適合。 | low，因為數據處理的需求和工具的整合相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openworker** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 助手，提供特定於遊戲的功能，而 OpenWorker 更加通用。 | 專注於數據處理和分析，適合需要處理大量數據的用戶，而 OpenWorker 更加通用。 |
> | 遷移成本 | - | medium，因為需要重新調整工作流程以適應遊戲開發的需求。 | low，因為數據處理的需求和工具的整合相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發上，這個工具會更適合。 | 如果你的工作主要集中在數據分析和處理上，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的測試使用，不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上運行時可能會出現安全警告，影響使用體驗
  - 解法：等待版本簽名或使用 macOS 版本
- [MEDIUM] 某些功能在特定環境下不穩定，可能導致崩潰
  - 解法：定期更新到最新版本以獲取修復
- [MEDIUM] 對於大型任務，可能需要較高的硬體配置
  - 解法：在高效能的環境中運行以獲得最佳效能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的日常任務自動化 | 非常適合 | 能夠自動化多種日常任務，提升工作效率。 |
| 需要處理大量數據的分析團隊 | 普通 | 雖然支持數據處理，但不專注於此。 |
| 個人自由工作者的專案管理 | 非常適合 | 能夠靈活整合多種工具，適合個人使用。 |
| 大型企業的核心業務流程 | 不適合 | 目前仍在測試階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到自動化日常任務的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，並且用戶的數據不會隨意外流出。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
| Forks | 1.4k |
| Open Issues | 300 |
| Issue 解決率 | 4% (11 closed) |
| 最後推送 | 2026-07-28 |
| 建立日期 | 2026-07-20 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/andrewyng/openworker) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 60
>     "TypeScript" : 32
>     "HTML" : 4
>     "CSS" : 2
>     "Rust" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rohitprasad15](https://github.com/rohitprasad15) | 78 |
> | [@andrewyng](https://github.com/andrewyng) | 1 |
> | [@fahadsiddiqui](https://github.com/fahadsiddiqui) | 1 |
> | [@Yashasm18](https://github.com/Yashasm18) | 1 |

**最新版本**：v0.1.6 (2026-07-23)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/andrewyng/openworker/compare/v0.1.5...v0.1.6
> 
> **Full Changelog**: https://github.com/andrewyng/openworker/compare/v0.1.5...v0.1.6

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應用戶的問題。
**連結**：[文件](https://openworker.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-28 ~ 2026-07-28）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #304 from andrewyng/rpTokenMetering

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#232](https://github.com/andrewyng/openworker/issues/232) | pls add a linux version | 10 | 0 |
> | [#72](https://github.com/andrewyng/openworker/issues/72) | Feature request: open-ai compatible API from models | 5 | 1 |
> | [#191](https://github.com/andrewyng/openworker/issues/191) | 需要中文 | 3 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenWorker
> 
> **[openworker.com](https://openworker.com)** · [Download](#download) · [Issues](https://github.com/andrewyng/openworker/issues)
> 
> > **Beta** - OpenWorker is in open beta: fully usable, updates itself, and we're actively polishing rough edges. [Issues](https://github.com/andrewyng/openworker/issues) welcome.
> 
> **AI that gets your everyday tasks done.** OpenWorker is an open-source AI coworker that lives on your desktop and delivers **finished work**, not just chat: a polished document, a Slack reply with the numbers, an updated calendar, a triaged inbox.
> 
> It runs on your machine and doesn't lock you into any model: bring your own API key for OpenAI, Anthropic, Google, or an open-weight provider, or run fully local with Ollama. Your data leaves your machine only through the model and integrations *you* choose.
> 
> [](https://openworker.com)
> 
> ## Download
> 
> [**⬇ macOS (Apple Silicon)**](https://download.openworker.com/mac)
> macOS 12+ · signed & notarized · auto-updates
> 
> [**⬇ Windows 10/11 (x64)**](https://download.openworker.com/windows)
> builds are not yet code-signed, so SmartScreen will warn; signing is in progress
> 
> Open the app, add a model key (or point it at Ollama), and ask for something real.
> 
> ## How it works
> 
> 1. Tell OpenWorker the outcome you want - "prepare a customer brief," "untangle my calendar," "draft a report," "check where the release stands across Jira and GitHub."
> 2. It breaks the task into steps and works across your desktop, files, and connected apps.
> 3. Before anything consequential - sending a message, changing a calendar, running a command - it checks in and you approve or redirect.
> 4. You get the finished deliverable, not a to-do list.
> 
> Under the hood:
> 
> ```text
> ┌────────────────────────────────────────────────┐
> │              OpenWorker desktop app            │  native shell + GUI
> ├────────────────────────────────────────────────┤
> │           local agent server (Python)          │  engine · tools · connectors - built on aisuite
> ├───────────────┬────────────────┬───────────────┤
> │  your files   │   your tools   │  your model   │  everything runs with your keys,
> │  & terminal   │ 25+ connectors │  any provider │  on your machine
> └───────────────┴────────────────┴───────────────┘
> ```
> 
> ## What it can do
> 
> - **Produce real deliverables** - documents, spreadsheets, reports, and web pages land as files you can open and share.
> - **Work from Slack** - mention `@OpenWorker` in a channel; a session opens on your desktop, the work happens with your tools, and the answer comes back as a thread reply.
> - **Use your everyday tools** - 25+ integrations including GitHub, Slack, Jira, Notion, Linear, HubSpot, Outlook, monday.com, Gmail, and Google Calendar, plus your **terminal and local files**. Any tool reachable over [MCP](https://modelcontextprotocol.io/) plugs in too, with per-tool control.
> - **Run on a schedule** - automations for recurring work: a morning brief, a weekly report, a standing watch over a channel. Runs land in the app with full transcripts.
> - **Ask before acting** - writes, sends, and shell commands are approval-gated. Unattended runs park their asks in an inbox instead of acting on their own.
> 
> ## Bring your own model
> 
> Model access is yours: pick a provider, paste your key, switch anytime. Supported out of the box:
> 
> **OpenAI · Anthropic · Google Gemini · Inkling (Thinking Machines) · GLM (Z.ai) · DeepSeek · Kimi (Moonshot) · Qwen · MiniMax · Mistral · Grok (xAI)** - plus open-weight models via **Together** and **Fireworks**, and fully local models via **Ollama**.
> 
> A curated model list marks what we've verified for tool-calling work. Adding any model string works at your own risk.
> 
> ## Privacy
> 
> OpenWorker is local-first. Everything lives on your machine: the agent loop, your conversations, connector tokens, and model keys - all in the app's local secret store. The only cloud piece is a small service that brokers OAuth handshakes for connectors. You can always use the App without signing-in - use the connectors via manually-created credentials/API-keys.
> 
> ## Run from source
> 
> Prerequisites: Python 3.10+, Node 20+, and (for the desktop shell) the Rust toolchain via [rustup](https://rustup.rs/).
> 
> ```shell
> git clone https://github.com/andrewyng/openworker
> cd openworker
> 
> # 1. One-time bootstrap - creates the Python venv at .venv
> #    (on Windows, run from Git Bash or WSL)
> bash packaging/setup_dev_env.sh
> 
> # 2. Start the local agent server
> .venv/bin/openworker-server --cwd ~/some/project --port 8765
> #    (Windows: .venv\Scripts\openworker-server.exe)
> 
> # 3. In a second terminal, start the UI
> cd surfaces/gui
> npm install
> npm run dev        # browser UI on the Vite dev port
> ```
> 
> The standalone server creates a per-launch token at
> `/sidecar-8765.token`; Vite reads that user-only file when it starts.
> For direct API calls, send its value in the `X-OpenWorker-Token` header. The
> desktop app uses an in-memory launch token instead and never writes it to disk.
> 
> To run the full desktop app instead of the browser UI, replace step 3 with `npm run tauri dev` (from `surfaces/gui/`) - the Tauri shell launches the window and supervises the server itself.
> 
> Tests: `.venv/bin/pytest` (server), `npm test` and `npm run e2e` in `surfaces/gui` (GUI unit + hermetic end-to-end). Desktop bundles are built with `packaging/build_dmg.sh` / `packaging/build_windows.ps1`.
> 
> ## Repository layout
> 
> | Directory | What's in it |
> |---|---|
> | `coworker/` | Python backend - agent engine, model providers, connectors, MCP client, memory, automations |
> | `surfaces/gui/` | Desktop app - React UI + Tauri shell that supervises the server |
> | `stt/` | Speech-to-text sidecar (Rust) for voice input |
> | `packaging/` | Installer builds (macOS DMG, Windows), auto-update manifest, dev bootstrap |
> | `docs/` | Design specs and decision logs |
> | `tests/` | Backend test suite |
> 
> ## Built on aisuite
> 
> OpenWorker's engine is built on [**aisuite**](https://github.com/andrewyng/aisuite), a lightweight Python library providing a unified chat-completions API across LLM providers and an agents layer with tools, toolkits, and MCP support. If you want to build your own agent harness rather than use ours, start there; this repo is a working reference for what aisuite can carry.
> 
> OpenWorker was originally developed inside the aisuite repository before moving to its own home here; thanks to the aisuite contributors whose work it builds on.
> 
> ## Contributing
> 
> Contributions and bug reports are welcome - open an [issue](https://github.com/andrewyng/openworker/issues) or a pull request. The app updates itself, so fixes reach installs quickly.
> For any PR, please attach screenshots of what was broken and how it is fixed now. We will shortly add features that you can contribute to.
> Please note that we are actively developing based off a internal list and goal, so we may not approve PRs that add features that are already under-development or deviates from our vision.
> 
> ## License
> 
> MIT - see [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Blueturboguy07--cue|Blueturboguy07/cue]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]] · [[cosmicstack-labs--mercury-agent|cosmicstack-labs/mercury-agent]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/andrewyng/openworker)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "andrewyng--openworker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "andrewyng--openworker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/andrewyng--openworker");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "andrewyng--openworker" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "andrewyng" AND file.name != "andrewyng--openworker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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
> const me = dv.page("Repos/andrewyng--openworker");
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

> **2026-07-24** — 首次收錄
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

- [[2026-07-27|2026-07-27]] — 再次上榜，7.1k stars
- [[2026-07-26|2026-07-26]] — 再次上榜，5.2k stars
- [[2026-07-25|2026-07-25]] — 再次上榜，3.5k stars
- [[2026-07-24|2026-07-24]] — 首次收錄，1.7k stars
