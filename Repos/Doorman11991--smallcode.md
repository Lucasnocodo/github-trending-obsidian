---
repo: Doorman11991/smallcode
url: https://github.com/Doorman11991/smallcode
owner: Doorman11991
owner_type: User
language: JavaScript
license: MIT
description: "AI coding agent optimized for small LLMs. 87% benchmark with 4B-active model."
homepage: ""
stars: 1085
stars_per_day: 362
forks: 75
open_issues: 2
created: 2026-05-18
pushed_at: 2026-05-22
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "AI 編程代理"
release_tag: "v0.9.10"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "針對小型 LLM 優化的 AI 編程代理，能有效處理小型模型的限制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 91
repo_size_kb: 11834
readme_length: 9956
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:728,2026-05-20:727,2026-05-21:842,2026-05-21:842,2026-05-22:1082,2026-05-22:1085"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "smallcode"
  - "Doorman11991/smallcode"
  - "針對小型 LLM 優化的 AI 編程代理，能有效處理小型模型的限制。"
---

# smallcode

**1.1k** stars · **362** stars/天 · 建立 3 天前 · JavaScript · MIT

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

`v0.9.10` `easy-install`

> [!summary] 一句話摘要
> 針對小型 LLM 優化的 AI 編程代理，能有效處理小型模型的限制。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (362 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在本地環境中使用小型 LLM 進行編程的開發者，特別是資源有限的情況下。
> **一句話重點** SmallCode 的設計讓小型 LLM 在本地環境中發揮出色，特別適合資源有限的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 編程代理" && p.file.name !== "Doorman11991--smallcode" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 編程代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習、3 小時整合，得到高效的本地編程代理，值得一試。

> [!abstract] 核心創新
> SmallCode 能夠在本地環境中有效利用小型 LLM，並提供多種工具調用和錯誤診斷功能。

## 專案簡介

SmallCode 是一個專為小型 LLM（8B-35B 參數）設計的 AI 編程代理，旨在從本地模型中提取有效的工作。它通過智能架構來彌補小型模型在多步工具使用和上下文保持上的不足。使用者可以透過 CLI 指令 `npm install -g smallcode` 安裝，並使用 `smallcode` 命令啟動代理，進行編程任務。核心賣點在於其能夠在不依賴雲端的情況下，充分利用本地資源，並提供多種工具調用和錯誤診斷功能。技術上，SmallCode 採用了 Node.js 作為基礎，並結合了多種依賴，如 Express 和 Chalk，來增強其功能和可讀性。

與其他工具如 OpenCode 相比，SmallCode 更加專注於小型模型的適應性，並提供了更靈活的工具調用和上下文管理。它的性能基準測試顯示，該工具在小型編碼任務中表現良好，能夠有效處理多種語言（如 Python、JavaScript、TypeScript 等）。不過，使用者可能會遇到小型模型在處理複雜任務時的限制，這需要透過適當的模型選擇和配置來克服。整體來看，SmallCode 的設計使其適合需要在本地環境中進行編程的開發者，尤其是在資源有限的情況下。未來六個月內，該專案可能會持續優化其模型適應性和錯誤處理能力，進一步提升使用體驗。

**技術棧**：`Node.js >=18.0.0` · `Express` · `Chalk`

## 重點功能

- 本地運行 — 完全不依賴雲端，確保數據隱私。
- 多步驟任務處理 — 透過計畫後執行模式，減少模型在長任務中的上下文漂移。
- 錯誤診斷 — 自動識別錯誤類型並提供修正建議，提升開發效率。
- 工具調用去重 — 相同的工具調用在滑動窗口內會被快取，節省上下文和延遲。
- 基準測試套件 — 提供多種基準測試，幫助使用者評估模型在小型編碼任務中的表現。

## 快速開始

1. 全域安裝 SmallCode
```bash
npm install -g smallcode
```
2. 啟動 SmallCode
```bash
smallcode
```
3. 運行測試任務
```bash
npm run bench:smoke
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 SmallCode 並啟動",
  "指令": "const { SmallCode } = require('smallcode');\nconst agent = new SmallCode({ model: 'gemma-4-e4b', baseUrl: 'http://localhost:1234/v1' });\nconst result = await agent.run(\"create hello.py that prints hello world\");\nconsole.log(result.filesCreated);  // ['hello.py']\nconsole.log(result.toolCalls.length);  // 1\nconsole.log(result.success);  // true;",
  "預期輸出": "['hello.py'], 1, true"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1085 stars（362/天），forks 75（6.9%），顯示出穩定的增長潛力。作者 Doorman11991 及其團隊在小型 LLM 領域有豐富的經驗，這個專案解決了小型模型在多步驟工具使用上的痛點，提供了一個本地化的解決方案。近期的推廣活動和社群討論也提升了其曝光率，促使更多開發者關注這個工具。這個專案的設計理念符合當前對於本地運算和隱私保護的需求，進一步推動了其受歡迎程度。

## 適合誰使用

**目標受眾**：需要在本地環境中使用小型 LLM 進行編程的開發者，特別是資源有限的情況下。

> [!example] 使用場景
> - 前端工程師用它來自動生成 React 組件，因為它能在本地環境中快速執行並減少 API 調用。
> - 後端開發者用它來撰寫 Node.js 應用程式，因為它能夠有效處理多步驟的編碼任務，並提供即時的錯誤診斷。
> - 資料科學家用它來快速撰寫和測試 Python 腳本，因為它支援多種語言並能夠在本地運行，避免了網路延遲。

## 架構分析

SmallCode 採用單一 Node.js 應用架構，設計目標是輕量且易於部署。資料流方面，使用者輸入的編程任務會經過模型處理，並根據模型的回應生成相應的文件或輸出。選擇 Node.js 是因為其在處理 I/O 密集型任務時的高效能，並且能夠輕鬆整合各種工具和庫。這種設計使得 SmallCode 能夠在本地環境中運行，避免了雲端依賴的風險。擴展性方面，未來可以透過增加更多的工具或模型來提升功能，但目前的設計可能在處理極大規模的專案時面臨挑戰。

## 技術深入分析

SmallCode 的核心技術機制是針對小型 LLM 的優化，使用了多種策略來提高模型的效能和可靠性。它採用 Node.js 作為基礎，這使得它能夠輕鬆處理 I/O 密集型的任務，並且能夠快速響應使用者的請求。效能方面，SmallCode 能夠在本地環境中運行，這意味著它不需要依賴外部 API，從而提高了安全性和隱私性。設計取捨方面，選擇 Node.js 使得開發過程更加靈活，但也可能在處理大型專案時面臨性能瓶頸。技術風險方面，隨著使用者數量的增加，可能會出現性能下降的問題，特別是在多用戶環境下。整合分析方面，SmallCode 可以輕鬆與現有的工具鏈整合，並且支援常見的 CI/CD 流程，這使得它在開發過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 Node.js 的版本要求。文件中有多語言支持，提升了可讀性。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 本地運行，確保數據隱私。
> - 針對小型模型的優化設計，能有效處理多步驟任務。
> - 提供即時錯誤診斷，提升開發效率。

> [!danger] 缺點
> - 僅適用於特定範圍的模型，對於更小或更大的模型支持不足。
> - 在處理複雜任務時可能會出現上下文丟失的問題。
> - 需要 Node.js 環境，對於某些使用者可能造成不便。

> [!warning] 注意事項
> - 僅支援 8B-35B 的小型 LLM，對於更小或更大的模型效果不佳。
> - 在處理複雜的多步驟任務時，仍可能出現上下文丟失的情況。
> - 需要 Node.js 18.0.0 以上版本，對環境有要求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM 的編程代理，適合需要高性能模型的場景。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供雲端服務，適合需要遠端計算資源的開發者。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 針對 Claude 模型優化，適合已經在使用 Claude 的團隊。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於大型 LLM 的運行，適合需要高性能的開發者。 | 如果你的團隊已經在使用大型模型，並需要高效能的編程代理。 | medium，因為需要重新適應大型模型的特性。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 針對 Claude 模型進行優化，提供雲端服務。 | 如果你的專案需要雲端計算資源，並且已經在使用 Claude 模型。 | high，因為需要重新設計整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **smallcode** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於大型 LLM 的運行，適合需要高性能的開發者。 | 針對 Claude 模型進行優化，提供雲端服務。 |
> | 遷移成本 | - | medium，因為需要重新適應大型模型的特性。 | high，因為需要重新設計整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用大型模型，並需要高效能的編程代理。 | 如果你的專案需要雲端計算資源，並且已經在使用 Claude  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在處理複雜任務時可能會出現上下文丟失的情況。
  - 解法：透過簡化任務或分步執行來減少上下文丟失的風險。
- [MEDIUM] 某些工具調用可能會因為模型限制而失敗。
  - 解法：使用更小的任務來測試模型的能力。
- **[HIGH]** 需要特定版本的 Node.js，否則無法運行。
  - 解法：確保環境中安裝了正確版本的 Node.js。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部工具開發 | 非常適合 | 能夠在本地環境中快速開發，並提供即時的錯誤診斷。 |
| 大型企業的核心系統開發 | 不適合 | 對於大型系統的需求，可能無法滿足性能要求。 |
| 個人開發者的 side project | 非常適合 | 能夠在資源有限的情況下進行開發。 |
| 需要高性能計算的科研項目 | 不適合 | 小型 LLM 在處理複雜計算時的能力有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，得到高效的本地編程代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：SmallCode 本身不需要高權限運行，並且不會存取敏感資料。整個運行過程在本地進行，減少了外部攻擊的風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

SmallCode 最常與 Node.js 應用搭配使用，適合在開發過程中進行即時編程和測試。在一個使用 Express 的專案中，你可以用 SmallCode 來自動生成 API 路由，具體做法是透過 `agent.run()` 方法執行相應的編程任務。支援 GitHub Actions 和其他 CI 工具，並且可以與 VS Code 等 IDE 整合。整合過程中，最常見的問題是 Node.js 環境的版本不匹配，這需要提前確認。

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
| Forks | 75 |
| Open Issues | 2 |
| Issue 解決率 | 91% (20 closed) |
| 最後推送 | 2026-05-22 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 11.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Doorman11991/smallcode) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `bonescript-compiler` `chalk` `cli-highlight` `express` `marked` `marked-terminal` `@types/node` `jest` `ts-node` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 64
>     "MAXScript" : 24
>     "TypeScript" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Doorman11991](https://github.com/Doorman11991) | 129 |
> | [@Zireael](https://github.com/Zireael) | 11 |
> | [@dmdeemer](https://github.com/dmdeemer) | 2 |
> | [@rudi193-cmd](https://github.com/rudi193-cmd) | 1 |
> | [@giveen](https://github.com/giveen) | 1 |

**最新版本**：v0.9.10 — v0.9.10 — Read-loop detector + one-question clarifier (2026-05-22)

> [!info]- Release Notes
> Two fixes for common small-model failure modes:\n\n**Read-loop detection** — model calling read_file/find_files/graph_search 8+ times without producing output now gets a hard injection: 'STOP reading and START writing'. Soft nudge at 5 reads. Fixes the 'endless review' problem where the model keeps gathering context forever.\n\n**One-question clarifier** — vague prompts no longer pause the dev loop. Model asks its clarifying question and immediately starts executing based on its best interpretation. User steers mid-task rather than answering a gate before work begins.

## 社群與生態

**社群活躍度**：社群活躍，開發者積極回應問題和提交更新。
**連結**：[文件](https://www.npmjs.com/package/smallcode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-21 ~ 2026-05-22）
> **活躍天數** 2 天 · **最新 commit** fix: read-loop detector + one-question clarifier executes immediately (v0.9.10)

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
> **AI coding agent optimized for small LLMs (8B-35B parameters)**
> 
> SmallCode is a terminal-native coding agent designed from the ground up to extract useful work from local models (8B-35B) running on consumer hardware. While tools like OpenCode assume frontier models with 128k+ context and perfect tool calling, SmallCode compensates for the limitations of small models through intelligent architecture.
> 
> > **Recommended model size: 8B-35B parameters.** Smaller models (≤4B) struggle with multi-step tool use and lose context across turns. Larger models (>35B) don't need SmallCode's adaptations and are better served by tools designed for frontier models.
> 
> 
> ## Quick Start
> 
> ```bash
> 
> # Install globally via npm
> npm install -g smallcode
> 
> 
> # Optional: configure fallback models for adaptive routing
> SMALLCODE_MODEL_MEDIUM=qwen2.5-coder:32b
> SMALLCODE_MODEL_STRONG=gpt-4o
> ```
> 
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
> 
> ## Why SmallCode?
> 
> | | OpenCode | SmallCode |
> |---|----------|-----------|
> | **Target** | Frontier models (Claude, GPT-5) | 8B-35B local models |
> | **Context** | Dumps everything | Budget-managed, summarized |
> | **Tool calling** | Assumes reliable JSON | Forgiving multi-format parser |
> | **Planning** | Single-shot | TODO-file decomposed steps |
> | **Editing** | Full file write | Search-and-replace patch |
> | **Privacy** | API calls to cloud | Fully local, no network needed |
> 
> 
> ### Benchmark Harness
> Run the included benchmark suite against any local model to measure pass rate across small coding tasks. Three suites: `smoke` (5 trivial tasks, ~30s), `polyglot-mini` (19 tasks across Python/JS/TS/Bash/Markdown/JSON), `tool-use` (10 multi-step tool sequencing tasks). Results persisted to `.smallcode/benchmarks/`.
> 
> ```bash
> npm run bench:smoke
> npm run bench:polyglot
> npm run bench:tools
> ```
> 
> 
> # Or run directly with npx
> npx smallcode
> 
> 
> # Start in your project directory
> cd my-project
> smallcode
> ```
> 
> 
> ### Prebuilt Binaries (no Node.js needed)
> 
> Pre-compiled tarballs for Windows, macOS, and Linux are built on every release — they bundle Node.js plus all native addons so you never need `node-gyp` or C++ build tools.
> 
> | Platform | One‑line install |
> |---|---|
> | Linux / macOS | `bash `. See `skills/README.md`. Adapted from [Willow 2.0 Fylgja](https://github.com/rudi193-cmd/willow-2.0/tree/master/willow/fylgja/skills).
> 
> 
> ### Read-Before-Write Guard
> Tracks which paths the model has read this session. First `write_file` to an existing unread file is refused with a hint to `read_file` first; second attempt allowed (so legitimate full-replace intents succeed). New files always permitted. `patch` counts as a read. Disable with `SMALLCODE_WRITE_GUARD=false`.
> 
> 
> ### Tool-Call Deduplication
> Identical pure-tool calls within a sliding window are short-circuited with a cached result instead of re-executing. Only applies to read-only tools (`read_file`, `search`, `graph_search`, etc.) — never to anything with side effects. Saves both context and latency on small models that loop. Disable with `SMALLCODE_DEDUP=false`.
> 
> 
> ### Evidence Store
> Automated capture of "what was tried, what worked, what failed" per task. Stored as searchable memory objects in the existing memory MCP module so they flow through FTS5 + staleness-decay loading on future tasks rather than always hogging context. The model learns from past sessions: it sees that `pip install` failed last time on this Python version, or that `npm test` hangs without `--run`. Disable with `SMALLCODE_EVIDENCE_DISABLE=true`.
> 
> 
> ### Plan-Then-Execute Mode
> For multi-step tasks (refactors, multi-file features, multi-imperative prompts), SmallCode asks the model to emit a numbered plan FIRST, then re-injects that plan as an anchor on subsequent turns. Reduces drift on long traces — the model can't "forget" step 3 by the time it finishes step 1. Heuristic-based — simple tasks like "create hello.py" don't trigger planning. Configure with `SMALLCODE_PLAN=true|false`.
> 
> 
> ### Snapshot & Auto-Rollback
> Before each agent turn, SmallCode opens a file snapshot checkpoint. Every `write_file` and `patch` records its pre-edit content. If validation hard-fails and all retries are exhausted, set `SMALLCODE_SNAPSHOT_AUTO_ROLLBACK=true` to automatically revert all edits in the turn back to the checkpoint state. All snapshots persisted to `.smallcode/snapshots/` for manual audit. Disable with `SMALLCODE_SNAPSHOT=false`.
> 
> 
> ### Test-Runner Auto-Discovery
> Detects your project's test command from config files (package.json, pytest.ini, pyproject.toml, Cargo.toml, go.mod, pom.xml, etc.) and injects it into the system prompt once. The model knows how to run tests without wasting tool calls on discovery. Also surfaces in AUTO-VALIDATE fix prompts. Override with `SMALLCODE_TEST_RUNNER=` or disable with `SMALLCODE_TEST_DISABLE=true`.
> 
> 
> ### Bootstrap Detection
> On first turn, scans the workspace and injects a compact project summary: runtime + version, package manager, framework (Next.js/FastAPI/Express/Django/React/Vue/…), entry point, and build/test/run commands. Covers Node, Python, Rust, Go, .NET, Java, Ruby. Eliminates the 3-5 tool calls small models usually spend figuring out what kind of project they're in. Disable with `SMALLCODE_BOOTSTRAP=false`.
> 
> 
> ### Adaptive Retry Temperature
> When the improvement loop retries a failed edit, each attempt uses a different temperature so it doesn't produce the same broken output three times. Attempt 1 lowers temperature (deterministic fix), attempt 2 raises it (explore alternatives), attempt 3 returns to base. Delta defaults to 0.15. Disable with `SMALLCODE_TEMP_ADAPT=false`.
> 
> 
> ### Per-Tool Trust Score Decay
> Tracks consecutive failures per tool within a session. Tools that fail 3+ times in a row are soft-demoted (schema list back). Tools that fail 5+ times are dropped from the schema entirely for the session. Prevents the model from looping on a broken MCP server or a search that keeps returning nothing. Resets between runs. Disable with `SMALLCODE_TRUST_DECAY=false`.
> 
> 
> ### Code Intel Category (Rank 2)
> A new `code_intel` tool routing category detects semantic code questions ("how does X work", "what calls Y", "who inherits from Z"). Routes exclusively to `[graph_search, explain_symbol, read_file, find_files, search]` — skipping write/run tools. Placed before `search` in the priority order so inheritance/callers questions get the right tools without any write noise.
> 
> 
> ### Error Diagnosis (Rank 4)
> When a bash command exits non-zero, `diagnoseError()` makes a quick LLM call to classify the error type (`syntax|runtime|permission|notfound|timeout|unknown`), locate the relevant file/line, and emit a one-line fix suggestion. The structured hint is prepended as `[ERROR-DIAGNOSIS]` to the tool result so the model has typed, located context to act on immediately. Cached 5 min. TTL configurable.
> 
> 
> ### Decompose Task (Rank 5)
> `decomposeTask()` replaces the hand-rolled `pickDecomposeStrategy()` regex when a file keeps failing after all retries. The LLM selects a strategy (`split_file|one_error_at_a_time|rewrite_section|extract_fun

## 延伸閱讀

相關概念：[[多模態]] · [[程式碼生成]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[tanishqkumar--ssd|tanishqkumar/ssd]]

[GitHub](https://github.com/Doorman11991/smallcode)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 編程代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 編程代理" AND file.name != "Doorman11991--smallcode"
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
> const concepts = ["多模態","程式碼生成","自動化測試"];
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

- [[2026-05-22|2026-05-22]] — 再次上榜，1.1k stars
- [[2026-05-21|2026-05-21]] — 再次上榜，842 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，728 stars
