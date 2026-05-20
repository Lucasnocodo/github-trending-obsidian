---
repo: Doorman11991/smallcode
url: https://github.com/Doorman11991/smallcode
owner: Doorman11991
owner_type: User
language: JavaScript
license: MIT
description: "AI coding agent optimized for small LLMs. 87% benchmark with 4B-active model."
homepage: ""
stars: 728
stars_per_day: 728
forks: 42
open_issues: 1
created: 2026-05-18
pushed_at: 2026-05-19
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "針對小型 LLM 優化的 AI 編碼代理，幫助開發者在本地環境中高效編寫程式碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 3
engagement: "low"
issue_close_rate: 91
repo_size_kb: 711
readme_length: 3874
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:728"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
  - easy_install
aliases:
  - "smallcode"
  - "Doorman11991/smallcode"
  - "針對小型 LLM 優化的 AI 編碼代理，幫助開發者在本地環境中高效編寫程式碼。"
---

# smallcode

**728** stars · **728** stars/天 · 建立 1 天前 · JavaScript · MIT

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
> 針對小型 LLM 優化的 AI 編碼代理，幫助開發者在本地環境中高效編寫程式碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (728 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 希望在本地環境中使用小型 LLM 進行編碼的開發者。
> **一句話重點** SmallCode 提供了一個針對小型 LLM 的高效編碼解決方案，特別適合需要本地運行的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "Doorman11991--smallcode" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到高效的本地編碼工具，值得採用。

> [!abstract] 核心創新
> SmallCode 是針對小型 LLM 優化的 AI 編碼代理，提供本地運行的解決方案。

## 專案簡介

SmallCode 是一個專為小型 LLM（≤20B 參數）設計的 AI 編碼代理，旨在從本地模型中提取有效工作。用戶可以透過簡單的 CLI 指令，如 `smallcode`，啟動代理並在項目目錄中運行。這個工具的設計考量了小型模型的限制，採用智能架構來管理上下文和工具調用，並提供了多種功能，例如 `--eval` 來評估分類準確度。技術上，SmallCode 使用 Node.js 作為基礎，並依賴於 Express 進行 API 服務，這使得它能夠在消費者硬體上運行而不需要雲端支持。與其他工具如 OpenCode 相比，SmallCode 更加注重本地運行和隱私，避免了 API 調用的需求。

它的多格式解析器和任務分解功能使得編碼過程更加靈活和高效。使用者可以透過事件訂閱來獲取工具的運行狀態，這在 CI/CD 環境中尤其有用。儘管目前只有 1 個開放問題，社群的活躍度和問題解決率都顯示出良好的支持。這個專案目前處於 alpha 階段，適合對小型 LLM 開發有興趣的開發者使用，未來可能會進一步擴展功能和穩定性。

**技術棧**：`Node.js >=18.0.0` · `Express 5.2.1`

## 重點功能

- 本地運行 — 完全不需要雲端 API，保證隱私和安全。
- 多格式解析器 — 支持多種輸入格式，靈活處理用戶請求。
- 任務分解 — 將複雜任務分解為可管理的步驟，提升執行效率。
- 事件訂閱 — 透過事件監聽器獲取工具運行狀態，便於集成到 CI/CD 流程。
- 預建二進制檔案 — 提供 Windows、macOS 和 Linux 的預編譯版本，無需額外安裝 Node.js。

## 快速開始

1. 全域安裝 SmallCode
```bash
npm install -g smallcode
```
2. 直接運行 SmallCode
```bash
npx smallcode
```
3. 進入項目目錄並啟動
```bash
cd my-project && smallcode
```

## 程式碼範例

```js
{
  "前置條件": "需要 Node.js 環境",
  "指令": "const { SmallCode } = require('smallcode');\n\nconst agent = new SmallCode({\n  model: 'gemma-4-e4b',\n  baseUrl: 'http://localhost:1234/v1',\n});\n\nconst result = await agent.run(\"create hello.py that prints hello world\");\nconsole.log(result.filesCreated);  // ['hello.py']\nconsole.log(result.toolCalls.length);  // 1\nconsole.log(result.success);  // true",
  "預期輸出": "['hello.py']"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 728 stars（728/天），forks 42（5.8%），這顯示出相對穩定的社群關注。作者 Doorman11991 及其團隊在 AI 編碼領域有一定的背景，這個工具解決了小型 LLM 在實際應用中的效能問題，特別是在本地開發環境中。這個專案的推出可能受到開發者對於隱私和本地運行需求的驅動。forks/stars 比率顯示出使用者對於這個工具的實際修改和應用有一定的興趣，這是健康的社群信號。

## 適合誰使用

**目標受眾**：希望在本地環境中使用小型 LLM 進行編碼的開發者。

> [!example] 使用場景
> - 前端工程師用它來自動生成 React 組件，因為可以快速從本地模型獲取代碼片段，節省了手動編寫的時間。
> - 後端開發者用它來撰寫 API 文檔，因為它能夠根據現有代碼自動生成說明，減少了文檔維護的負擔。
> - DevOps 工程師用它來優化 CI/CD 流程，因為可以自動化生成和修改腳本，提升了部署效率。

## 架構分析

SmallCode 採用 Node.js 和 Express 架構，設計上強調本地運行和隱私保護。資料流方面，使用者的請求經過多格式解析器處理，然後由核心邏輯進行任務分解和執行。這樣的設計使得小型模型能夠在有限的資源下高效運行，並且避免了對雲端 API 的依賴。

選擇 Node.js 作為基礎是因為其非同步特性適合處理多任務，而 Express 則提供了靈活的路由和中介軟體支持。這樣的架構在資源使用上相對輕量，但可能在處理極大請求時出現瓶頸。整體而言，這個設計使得 SmallCode 能夠在消費者硬體上運行，並提供快速的反應時間。

## 技術深入分析

SmallCode 的核心技術機制是基於 Node.js 的非同步架構，這使得它能夠同時處理多個請求而不會阻塞。它使用 Express 作為 API 服務，提供靈活的路由和中介軟體支持，這對於開發者來說非常方便。效能上，SmallCode 能夠在消費者級硬體上運行，並且對於小型 LLM 的推論速度有良好的表現。設計上，選擇 Node.js 是因為其生態系統豐富，能夠快速集成各種工具和庫，但這也帶來了對於 Node.js 環境的依賴。技術風險方面，隨著使用者數量的增加，可能會面臨資源瓶頸，特別是在高並發請求的情況下。整合方面，SmallCode 可以輕鬆與現有的 CI/CD 流程結合，並且對於主流 IDE（如 VS Code）有良好的支持，這使得它在開發過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，使用者只需簡單的 npm 指令即可完成安裝。文件中有針對 CLI 的詳細說明，讓新手能快速上手。整體而言，花 30 分鐘內應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 設計針對小型 LLM，能有效利用本地資源。
> - 完全本地運行，無需擔心隱私問題。
> - 提供多種工具和功能，提升開發效率。

> [!danger] 缺點
> - 對大型模型支持有限，無法滿足所有需求。
> - 目前功能仍在持續開發中，穩定性可能不足。
> - 需要使用者具備一定的 Node.js 環境知識。

> [!warning] 注意事項
> - 僅支援 Node.js 18 以上版本
> - 目前僅針對小型 LLM（≤20B 參數）進行優化，對於大型模型支持有限
> - 需要在本地環境中運行，無法直接雲端使用

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於大型 LLM 的應用，而 SmallCode 專注於小型模型的優化，適合不同的使用場景。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 專注於 GPT-2 模型的 API 接入，而 SmallCode 則提供本地運行的編碼代理，提升了隱私性和效率。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於大型 LLM 的應用，而 SmallCode 專注於小型模型的優化，適合不同的使用場景。 | 如果你的團隊已經在使用大型 LLM 並需要更強的模型能力，則 boneyard 可能更合適。 | medium，因為需要重新調整對於大型模型的使用方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | gpt2api 專注於 GPT-2 模型的 API 接入，而 SmallCode 則提供本地運行的編碼代理，提升了隱私性和效率。 | 如果需要直接接入 GPT-2 的 API 並且不需要本地運行，則 gpt2api 會更方便。 | low，因為 API 接入相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **smallcode** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 專注於大型 LLM 的應用，而 SmallCode 專注於小型模型的優化，適合不同的使用場景。 | gpt2api 專注於 GPT-2 模型的 API 接入，而 SmallCode 則提供本地運行的編碼代理，提升了隱私性和效率。 |
> | 遷移成本 | - | medium，因為需要重新調整對於大型模型的使用方式。 | low，因為 API 接入相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用大型 LLM 並需要更強的模型能力，則 | 如果需要直接接入 GPT-2 的 API 並且不需要本地運行 |

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

- **[HIGH]** 在某些環境中，安裝過程可能會遇到 Node.js 版本不兼容的問題
  - 解法：確保使用 Node.js 18 以上版本
- [MEDIUM] 某些功能在小型 LLM 上表現不佳，可能導致錯誤
  - 解法：測試不同的模型以找到最佳配置
- [MEDIUM] CLI 指令的輸入格式要求嚴格，容易出錯
  - 解法：參考官方文檔中的範例指令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行本地開發 | 非常適合 | SmallCode 專為小型 LLM 設計，能有效利用本地資源。 |
| 大型企業需要雲端解決方案 | 不適合 | SmallCode 完全依賴本地運行，無法滿足雲端需求。 |
| 對隱私有高要求的個人開發者 | 非常適合 | SmallCode 不需要雲端 API，保護用戶隱私。 |
| 需要高效能的 AI 編碼工具 | 普通 | 雖然 SmallCode 針對小型 LLM 優化，但在某些情況下可能無法滿足高效能需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到高效的本地編碼工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：SmallCode 不需要高權限運行，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

SmallCode 可以與 Node.js 生態系統中的各種工具無縫集成，特別是在開發和部署階段。它可以與 CI/CD 工具如 GitHub Actions 結合，並且在 VS Code 中有良好的插件支持。實際上，在一個使用 Node.js 和 Express 的項目中，你可以輕鬆地將 SmallCode 作為一個服務來處理編碼任務，具體做法是將其作為一個中介軟體來處理請求。常見的整合問題包括 Node.js 版本不兼容，這需要在使用前確認環境配置。

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
| Forks | 42 |
| Open Issues | 1 |
| Issue 解決率 | 91% (10 closed) |
| 最後推送 | 2026-05-19 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 711 KB |
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
> | [@Doorman11991](https://github.com/Doorman11991) | 98 |
> | [@Zireael](https://github.com/Zireael) | 8 |
> | [@giveen](https://github.com/giveen) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度良好，問題解決率高達 91%。
**連結**：[文件](https://www.npmjs.com/package/smallcode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-19 ~ 2026-05-19）
> **活躍天數** 1 天 · **最新 commit** v0.6.14: RTK (Rust Token Killer) integration — auto-rewrite bash commands for 60-90%% token savings

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[future-agi--future-agi|future-agi/future-agi]]

[GitHub](https://github.com/Doorman11991/smallcode)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Doorman11991--smallcode"
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

- [[2026-05-20|2026-05-20]] — 首次收錄，728 stars
