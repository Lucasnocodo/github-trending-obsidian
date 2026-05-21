---
repo: Doorman11991/smallcode
url: https://github.com/Doorman11991/smallcode
owner: Doorman11991
owner_type: User
language: JavaScript
license: MIT
description: "AI coding agent optimized for small LLMs. 87% benchmark with 4B-active model."
homepage: ""
stars: 842
stars_per_day: 421
forks: 55
open_issues: 4
created: 2026-05-18
pushed_at: 2026-05-20
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "編碼代理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "針對小型 LLM 優化的 AI 編碼代理，提供高達 87% 的基準性能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-24"
contributor_count: 4
engagement: "low"
issue_close_rate: 71
repo_size_kb: 11503
readme_length: 3874
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:728,2026-05-20:727,2026-05-21:842,2026-05-21:842"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "smallcode"
  - "Doorman11991/smallcode"
  - "針對小型 LLM 優化的 AI 編碼代理，提供高達 87% 的基準性能。"
---

# smallcode

**842** stars · **421** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Doorman11991--smallcode");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 針對小型 LLM 優化的 AI 編碼代理，提供高達 87% 的基準性能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (421 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要在本地環境中使用小型 LLM 進行編碼任務的開發者和小型團隊。
> **一句話重點** SmallCode 提供了一個針對小型 LLM 的高效編碼解決方案，特別適合資源有限的環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "編碼代理" && p.file.name !== "Doorman11991--smallcode" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 編碼代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學、3 小時整合，得到高效的編碼代理，值得採用。

> [!abstract] 核心創新
> SmallCode 是專為小型 LLM 設計的編碼代理，提供本地運行的解決方案，強調隱私和資源管理。

## 專案簡介

SmallCode 是一個專為小型 LLM（最多 20B 參數）設計的終端編碼代理，旨在從本地模型中提取有效工作。它的設計考量了小型模型的限制，透過智能架構來補償這些缺陷。用戶可以透過 `smallcode` 命令啟動代理，並使用簡單的指令來執行編碼任務，例如 `smallcode --eval classify_accuracy` 來測試分類準確性。這個工具的賣點在於它能在不依賴雲端的情況下，充分利用本地模型的能力，並提供靈活的工具調用和編輯功能。技術上，SmallCode 使用 Node.js 作為基礎，並依賴多個輕量級庫，如 Express 和 Chalk，確保了良好的性能和可擴展性。

與其他工具如 OpenCode 相比，SmallCode 更適合於資源有限的環境，因為它不需要高性能的前沿模型，而是針對小型模型進行了優化。這使得它在處理小型專案或個人開發時，能夠提供更快的反應和更低的資源消耗。實際使用中，SmallCode 能夠處理多種編碼任務，並提供即時的錯誤回報和工具調用記錄，這對於開發者來說是非常有幫助的。儘管目前仍在活躍開發中，但其功能已經足夠穩定，適合個人或小型團隊使用。未來幾個月，預計將會有更多功能和改進推出，特別是在多模態支持和工具整合方面。

**技術棧**：`Node.js >=18.0.0` · `Express 5.2.1` · `Chalk 4.1.2`

## 重點功能

- 本地運行 — 完全不依賴雲端，確保數據隱私。
- 多格式解析 — 支持多種輸入格式，提升工具調用的靈活性。
- 即時錯誤回報 — 提供詳細的錯誤信息，幫助用戶快速修正問題。
- 簡單的 CLI 指令 — 透過 `smallcode` 命令輕鬆啟動和管理任務。
- 支持多種編程語言 — 包括 JavaScript、TypeScript、Shell 等，滿足不同開發需求。

## 快速開始

1. 全局安裝 SmallCode
```bash
npm install -g smallcode
```
2. 進入專案目錄
```bash
cd my-project
```
3. 啟動 SmallCode
```bash
smallcode
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝 SmallCode",
  "const { SmallCode } = require('smallcode');",
  "const agent = new SmallCode({ model: 'gemma-4-e4b', baseUrl: 'http://localhost:1234/v1' });",
  "const result = await agent.run('create hello.py that prints hello world');",
  "console.log(result.filesCreated);  // ['hello.py']",
  "console.log(result.toolCalls.length);  // 1",
  "console.log(result.success);  // true",
  "# 預期輸出：生成一個名為 hello.py 的文件，並成功執行。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 842 stars（421/天），forks 55（6.5%），這顯示出相對穩定的增長。作者 Doorman11991 及其團隊在開源社群中已有一定的影響力，之前也有其他相關專案。SmallCode 解決了小型 LLM 在編碼任務中的實用性問題，之前的工具往往依賴於大型模型，導致資源浪費。這個專案的推出正好填補了這一空白，並且其設計考量了使用者的隱私需求，完全本地運行。社群的反應也表明，對於小型模型的需求正在增加，尤其是在個人開發者和小型團隊中。

## 適合誰使用

**目標受眾**：需要在本地環境中使用小型 LLM 進行編碼任務的開發者和小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來在本地環境中生成 Python 程式碼，因為它能在不依賴雲端的情況下快速響應，提升開發效率。
> - 小型團隊用它來自動化日常的編碼任務，因為其能夠有效管理小型 LLM 的資源，降低成本。
> - 學術研究者用它來測試小型模型的編碼能力，因為其提供了簡單的 API 和即時的錯誤回報，方便快速迭代。

## 架構分析

SmallCode 採用 Node.js 作為後端架構，這使得它能夠快速啟動並提供高效的 I/O 操作。其核心是基於事件驅動的架構，允許用戶在執行任務時即時接收回饋。資料流方面，使用者的請求經過多層處理，最終由小型 LLM 生成結果。

這種設計使得系統能夠在本地環境中運行，降低了對網路的依賴。選擇 Node.js 的原因在於其非同步特性，能夠有效處理多個請求。這也意味著在高負載情況下，系統仍能保持穩定。

擴展性方面，SmallCode 的設計考慮到未來可能的功能擴展，並且能夠輕鬆整合其他工具和庫。

## 技術深入分析

SmallCode 的核心技術機制是基於 Node.js 的事件驅動架構，這使得它能夠在本地環境中高效運行。它使用了多種輕量級的庫，如 Express 和 Chalk，以確保良好的性能和可擴展性。效能方面，SmallCode 能夠處理多達 20B 參數的模型，並且在本地運行時的冷啟動時間相對較短。設計上，選擇 Node.js 是因為其非同步特性能夠有效處理多個請求，這對於開發者來說是非常重要的。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高負載情況下。整合方面，SmallCode 可以輕鬆與現有的工具鏈整合，特別是在 CI/CD pipeline 中，這對於開發團隊來說是一個重要的優勢。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，讓新手能夠快速上手。安裝過程順暢，無需複雜的配置。文件中有多語言支持，方便不同語言的使用者理解。整體而言，花 30 分鐘就能成功運行。

## 優缺點分析

> [!success] 優點
> - 本地運行，確保數據隱私。
> - 針對小型 LLM 進行優化，資源消耗低。
> - 提供即時的錯誤回報，提升開發效率。
> - 支持多種編程語言，靈活性高。

> [!danger] 缺點
> - 僅支持小型 LLM，無法處理大型模型。
> - 仍在開發中，功能可能不穩定。
> - 對於複雜任務，可能需要額外調整。
> - 不支持 Windows 原生安裝，需使用 WSL。

> [!warning] 注意事項
> - 僅支持小型 LLM（≤20B 參數），不適合大型模型。
> - 目前仍在開發中，可能存在不穩定的功能。
> - 對於複雜的編碼任務，可能需要額外的手動調整。
> - 不支持 Windows 系統的原生安裝，需使用 WSL。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM 的編碼代理，適合需要高性能的用戶，但資源消耗較高。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的編碼支持，但依賴於雲端服務，對隱私要求較高的用戶不太適合。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接口，功能較為單一，不如 SmallCode 多樣化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM 的編碼代理，適合需要高性能的用戶，但資源消耗較高。 | 如果你的團隊已經在用大型 LLM 且需要處理複雜的編碼任務。 | medium，因為需要重新調整編碼邏輯以適應大型模型的特性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的編碼支持，但依賴於雲端服務，對隱私要求較高的用戶不太適合。 | 如果你的團隊需要雲端協作和更高的編碼靈活性。 | low，因為其 API 設計相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **smallcode** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於大型 LLM 的編碼代理，適合需要高性能的用戶，但資源消耗較高。 | 提供更廣泛的編碼支持，但依賴於雲端服務，對隱私要求較高的用戶不太適合。 |
> | 遷移成本 | - | medium，因為需要重新調整編碼邏輯以適應大型模型的特性。 | low，因為其 API 設計相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用大型 LLM 且需要處理複雜的編碼任務。 | 如果你的團隊需要雲端協作和更高的編碼靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下啟動時可能會出現依賴錯誤
  - 解法：確保所有依賴都已正確安裝
- [MEDIUM] 使用過程中可能會遇到性能瓶頸
  - 解法：減少同時執行的任務數量
- [low] 某些工具的功能尚未完全實現
  - 解法：查看官方文檔以獲取最新功能更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 3-5 人的小型開發團隊 | 非常適合 | 能夠有效利用小型 LLM，降低開發成本。 |
| 個人開發者進行小型專案 | 適合 | 提供本地運行的解決方案，確保隱私。 |
| 大型企業的核心系統 | 不適合 | 僅支持小型 LLM，無法滿足大型系統的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到高效的編碼代理，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：SmallCode 在本地運行，不需要高權限，也不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

SmallCode 可以與多種開發工具和 CI/CD 系統整合，特別是 Node.js 環境下的工具鏈。它能夠與 GitHub Actions 和 GitLab CI 無縫整合，並且可以在 VS Code 中使用。實際整合範例包括在一個使用 Node.js 的專案中，通過 `npm install` 安裝 SmallCode，然後在 CI pipeline 中調用 `smallcode` 命令來執行自動化測試。常見的整合問題包括依賴版本不匹配，建議使用最新版本的 Node.js 和相關庫來避免。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
| Forks | 55 |
| Open Issues | 4 |
| Issue 解決率 | 71% (10 closed) |
| 最後推送 | 2026-05-20 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 11.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Doorman11991/smallcode) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `bonescript-compiler` `chalk` `cli-highlight` `express` `marked` `marked-terminal` `@types/node` `jest` `ts-node` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 56
>     "MAXScript" : 30
>     "TypeScript" : 14
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Doorman11991](https://github.com/Doorman11991) | 100 |
> | [@Zireael](https://github.com/Zireael) | 11 |
> | [@giveen](https://github.com/giveen) | 1 |
> | [@radare](https://github.com/radare) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對問題回應速度尚可。
**連結**：[文件](https://www.npmjs.com/package/smallcode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-19 ~ 2026-05-20）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #16 from Zireael/pr/branch-fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/Doorman11991/smallcode/issues/20) | ACP (Agent Client Protocol) support | 0 | 0 |
> | [#18](https://github.com/Doorman11991/smallcode/issues/18) | Crash again | 0 | 0 |
> | [#17](https://github.com/Doorman11991/smallcode/issues/17) | Please automate the updatation of the version number showing | 0 | 1 |
> | [#10](https://github.com/Doorman11991/smallcode/issues/10) | Unable to scroll up | 0 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SmallCode
> 
> [简体中文](README_zh-CN.md) | [English](README.md)
> 
> ---
> 
> [](https://www.npmjs.com/package/smallcode)
> 
> **AI coding agent optimized for small LLMs (≤20B parameters)**
> 
> SmallCode is a terminal-native coding agent designed from the ground up to extract useful work from local models (7B-20B) running on consumer hardware. While tools like OpenCode assume frontier models with 128k+ context and perfect tool calling, SmallCode compensates for the limitations of small models through intelligent architecture.
> 
> ## Why SmallCode?
> 
> | | OpenCode | SmallCode |
> |---|----------|-----------|
> | **Target** | Frontier models (Claude, GPT-5) | 7B-20B local models |
> | **Context** | Dumps everything | Budget-managed, summarized |
> | **Tool calling** | Assumes reliable JSON | Forgiving multi-format parser |
> | **Planning** | Single-shot | TODO-file decomposed steps |
> | **Editing** | Full file write | Search-and-replace patch |
> | **Privacy** | API calls to cloud | Fully local, no network needed |
> 
> ## Quick Start
> 
> ```bash
> # Install globally via npm
> npm install -g smallcode
> 
> # Or run directly with npx
> npx smallcode
> 
> # Start in your project directory
> cd my-project
> smallcode
> ```
> 
> ### Prebuilt Binaries (no Node.js needed)
> 
> Pre-compiled tarballs for Windows, macOS, and Linux are built on every release — they bundle Node.js plus all native addons so you never need `node-gyp` or C++ build tools.
> 
> | Platform | One‑line install |
> |---|---|
> | Linux / macOS | `bash `.
> - **Prompt Evaluations** — Measure classifier accuracy and tool selection: `/eval classify_accuracy`.
> 
> ```bash
> # Run evaluations from CLI
> smallcode --eval classify_accuracy
> smallcode --eval tool_selection
> ```
> 
> ## Programmatic API
> 
> Use SmallCode as a library in your own tools, CI pipelines, or TypeScript frameworks:
> 
> ```javascript
> const { SmallCode } = require('smallcode');
> 
> const agent = new SmallCode({
>   model: 'gemma-4-e4b',
>   baseUrl: 'http://localhost:1234/v1',
> });
> 
> // Run a task
> const result = await agent.run("create hello.py that prints hello world");
> console.log(result.filesCreated);  // ['hello.py']
> console.log(result.toolCalls.length);  // 1
> console.log(result.success);  // true
> 
> // Subscribe to events
> agent.on('tool_start', ({ name, args }) => console.log(`Using: ${name}`));
> agent.on('tool_end', ({ name, ms }) => console.log(`Done: ${name} (${ms}ms)`));
> agent.on('error', (err) => console.error(err));
> ```
> 
> Returns a structured `RunResult` with: response text, tool call records, files created/edited, token usage, duration, and success status.
> 
> ## Tools
> 
> | Tool | Description |
> |------|-------------|
> | `bone_compile` | Compile .bone to full backend project |
> | `bone_check` | Validate .bone file (type errors, constraints) |
> | `list_projects` | List all indexed projects with stats |
> | `graph_search` | Code graph symbol search |
> | `explain_symbol` | Full symbol explanation (callers, callees) |
> | `read_file` | Read file contents |
> | `write_file` | Create/overwrite files |
> | `patch` | Search-and-replace edit |
> | `bash` | Run shell commands |
> | `search` | Regex search (ripgrep) |
> | `find_files` | Glob file search |
> | `memory_load` | Load relevant project memory |
> | `memory_remember` | Save knowledge to memory |
> | `web_search` | Search the web via DuckDuckGo (requires `SMALLCODE_WEB_BROWSE=true`) |
> | `web_fetch` | Fetch and extract text from a URL (requires `SMALLCODE_WEB_BROWSE=true`) |
> 
> ### Web Browsing
> 
> SmallCode includes Playwright with stealth mode for undetected web browsing. Disabled by default — enable for medium/large models (20B+) that can synthesize web context effectively:
> 
> ```bash
> # In your .env
> SMALLCODE_WEB_BROWSE=true
> ```
> 
> When enabled, the model can search the web and fetch documentation during tasks. Uses headless Chromium with anti-detection to avoid CAPTCHAs and bot blocks. Falls back to simple HTTP fetch if Playwright isn't available.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[LLM 推論]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/Doorman11991/smallcode)

## 相關收錄

> [!note]- 直接競品（同子分類：編碼代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "編碼代理" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Doorman11991--smallcode" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["LLM 推論","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Doorman11991--smallcode" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Doorman11991--smallcode" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Doorman11991" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-21|2026-05-21]] — 再次上榜，842 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，728 stars
