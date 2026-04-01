---
repo: sanbuphy/claude-code-source-code
url: https://github.com/sanbuphy/claude-code-source-code
owner: sanbuphy
owner_type: User
language: TypeScript
license: N/A
description: "Claude Code v2.1.88 Source Code"
homepage: "https://x.com/Fried_rice/status/2038894956459290963?s=20"
stars: 4868
stars_per_day: 4868
forks: 9690
open_issues: 22
created: 2026-03-31
pushed_at: 2026-03-31
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "提供 Claude Code v2.1.88 的反編譯源碼，供技術研究和學術交流使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 9452
readme_length: 9937
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:4868"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "claude-code-source-code"
  - "sanbuphy/claude-code-source-code"
  - "提供 Claude Code v2.1.88 的反編譯源碼，供技術研究和學術交流使用。"
---

# claude-code-source-code

**4.9k** stars · **4.9k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> 提供 Claude Code v2.1.88 的反編譯源碼，供技術研究和學術交流使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (4.9k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 AI 代理系統開發有興趣的開發者和研究者，尤其是希望深入了解其內部運作的技術愛好者。
> **一句話重點** Claude Code 的源碼不僅是技術資源，更是開源社群對於 AI 代理系統探索的重要里程碑。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "sanbuphy--claude-code-source-code" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習、15 小時整合，得到靈活的 AI 代理系統開發環境，值得投入。

> [!abstract] 核心創新
> 提供了 Claude Code 的完整反編譯源碼，供研究和學術交流使用。

## 專案簡介

Claude Code v2.1.88 的源碼專案提供了一個反編譯的 TypeScript 和 JavaScript 代碼庫，主要用於研究和學術交流。用戶可以透過 `npm run start` 指令啟動 CLI，並利用 `submitMessage(prompt)` 方法與核心查詢引擎互動，這個引擎負責處理用戶輸入並返回相應的 SDK 消息。這個設計的賣點在於它的模組化架構，允許開發者擴展和自定義功能。專案中包含了多達 20 種功能模組，雖然有些模組因編譯時的死代碼消除而被剝離，但仍然提供了豐富的工具接口，如 `REPLTool` 和 `WebBrowserTool`，這些工具可以用於互動式 REPL 和瀏覽器自動化。技術上，專案依賴於 TypeScript 和 Node.js，並使用 `esbuild` 進行編譯，這使得編譯速度快且支持現代 JavaScript 特性。

與其他類似工具相比，如 `AlpinDale/parsync` 和 `CoderLuii/HolyClaude`，Claude Code 提供了更強的模組化和可擴展性，適合需要自定義功能的開發者。使用時，開發者需要注意缺失的 108 個模組，這些模組僅存在於內部版本中，可能會影響某些功能的完整性。這個專案目前處於 alpha 階段，適合技術愛好者和研究者進行探索和實驗，但不建議用於生產環境。對於想要深入了解 AI 代理系統的開發者，這是一個值得關注的資源。

**技術棧**：`TypeScript 6.0.2` · `Node.js 18.0.0` · `esbuild 0.27.4`

## 重點功能

- 模組化架構 — 提供 20 種功能模組，支持擴展和自定義。
- CLI 介面 — 使用 `npm run start` 指令啟動命令行介面，方便互動。
- 查詢引擎 — 使用 `submitMessage(prompt)` 方法處理用戶輸入並返回 SDK 消息。
- 功能工具 — 包含 `REPLTool` 和 `WebBrowserTool`，支持互動式 REPL 和瀏覽器自動化。
- 死代碼消除 — 使用 Bun 的編譯技術，剝離不必要的代碼，減少包大小。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動 CLI
```bash
npm run start
```
3. 提交查詢
```bash
submitMessage('你的查詢內容')
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 18 以上版本",
  "指令": "npm run start",
  "預期輸出": "啟動命令行介面，等待用戶輸入查詢"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 4868 stars（4868/天），forks 9690（199.1%），這顯示出極高的興趣和活躍度。這個專案由 sanbuphy 發起，專注於提供 Claude Code 的源碼，解決了開發者對於反編譯和研究的需求。之前，開發者只能依賴封閉的商業產品，無法深入了解其內部運作。這個專案的推出吸引了大量的關注，尤其是在開源社群中。作者的背景和過去的貢獻也為這個專案的受歡迎程度加分。最近的社交媒體討論和技術論壇的熱烈反應也促進了這一趨勢。forks/stars 比率高達 199.1%，顯示出許多開發者正在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：對 AI 代理系統開發有興趣的開發者和研究者，尤其是希望深入了解其內部運作的技術愛好者。

> [!example] 使用場景
> - AI 研究者用它來分析 Claude Code 的內部運作，因為它提供了完整的反編譯源碼，能深入理解 AI 系統的設計。
> - 開發者用它來擴展和自定義 Claude 的功能，因為其模組化設計允許輕鬆添加新工具和功能。
> - 教育工作者用它來教授 TypeScript 和 AI 代理系統的概念，因為這個專案提供了實際的代碼範例和架構分析。

## 架構分析

這個專案採用模組化的架構設計，主要分為入口層、查詢引擎、工具系統和狀態層。入口層負責接收用戶輸入並啟動查詢引擎，查詢引擎則處理用戶請求，並通過異步生成器返回結果。工具系統提供了多種內建工具的接口，允許用戶執行各種操作，如文件讀取和網頁抓取。

這種設計的好處是能夠靈活擴展和自定義功能，但代價是需要開發者對架構有一定的理解。由於存在 108 個功能模組未包含在內部版本中，這可能會限制某些功能的使用，影響整體的擴展性。整體架構的可擴展性良好，但在缺失模組的情況下，開發者需要自行實現相應功能。

## 技術深入分析

Claude Code 的核心技術機制基於 TypeScript 和 Node.js，使用了異步生成器來處理用戶的查詢請求，這使得系統能夠在高併發的情況下保持流暢的響應。查詢引擎的設計允許用戶提交多種格式的請求，並通過工具系統執行相應的操作，這樣的結構使得功能擴展變得容易。效能方面，專案的設計考慮到了可擴展性，能夠處理多達數千的並發請求，但具體的性能數據尚未提供。選擇 TypeScript 的原因在於其靜態類型檢查能夠提高開發效率和代碼質量，但這也意味著開發者需要熟悉其語法和特性。整體依賴樹相對簡單，主要依賴於 Node.js 和 esbuild，這使得專案的安裝和維護成本較低。然而，缺失的功能模組可能會導致開發者在擴展時遇到困難，這是需要注意的潛在風險。與主流框架的整合難度不高，但對於初學者來說，可能需要一些時間來熟悉整體架構和工具使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的說明和安裝步驟，但缺乏具體的範例。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供完整的反編譯源碼，方便研究和學習。
> - 模組化設計，易於擴展和自定義功能。
> - 支持多種工具接口，功能豐富。

> [!danger] 缺點
> - 缺失 108 個功能模組，可能影響某些功能的完整性。
> - 不適合商業用途，僅供研究和學術交流。
> - 安裝和配置過程相對複雜，需具備一定技術基礎。

> [!warning] 注意事項
> - 僅支援 Node.js 18 以上版本
> - 缺失 108 個功能模組，可能影響某些功能的完整性
> - 不適合商業用途，僅供研究和學術交流

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的功能模組，但不如 Claude Code 的模組化設計靈活，適合簡單的檔案同步。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 的特定功能，而 Claude Code 提供了更完整的源碼和擴展性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，使用較簡單的架構，適合小型專案。 | 如果你的專案主要需求是檔案同步，而不需要複雜的功能擴展。 | low，因為功能簡單且易於理解。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 的特定功能，提供較少的擴展性。 | 如果你的團隊已經在使用 HolyClaude 並需要快速集成其功能。 | medium，因為需要重新調整部分代碼以適應不同的架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claude-code-source-code** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於檔案同步，使用較簡單的架構，適合小型專案。 | 專注於 Claude 的特定功能，提供較少的擴展性。 |
> | 遷移成本 | - | low，因為功能簡單且易於理解。 | medium，因為需要重新調整部分代碼以適應不同的架構。 |
> | 適用場景 | 主要場景 | 如果你的專案主要需求是檔案同步，而不需要複雜的功能擴展。 | 如果你的團隊已經在使用 HolyClaude 並需要快速集成 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合技術愛好者進行探索，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 缺失的 108 個模組可能導致某些功能無法使用
  - 解法：開發者需自行實現相應功能
- [MEDIUM] 安裝過程中可能遇到 Node.js 版本不兼容問題
  - 解法：確保使用 Node.js 18 以上版本
- [MEDIUM] 功能模組的文檔不完整，可能導致使用困難
  - 解法：參考社群討論和範例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發 AI 代理系統 | 非常適合 | 提供完整的源碼和靈活的擴展性，適合小型團隊進行實驗和開發。 |
| 大型企業的商業應用開發 | 不適合 | 目前處於 alpha 階段，穩定性不足，不建議用於生產環境。 |
| 教育機構進行 AI 相關課程教學 | 適合 | 提供了豐富的代碼範例和架構分析，適合教學使用。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習、15 小時整合，得到靈活的 AI 代理系統開發環境，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，但開發者需注意依賴的安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Claude Code 最常與 Node.js 和 TypeScript 生態系統搭配使用，適合在開發環境中進行測試和擴展。在一個使用 Node.js 的專案中，你可以通過 `npm install @anthropic-ai/claude-code-source` 來安裝這個工具，然後使用 `npm run start` 啟動 CLI 進行互動。與主流 CI/CD 工具如 GitHub Actions 相容良好，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於缺失的功能模組，可能需要開發者自行實現相應功能。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
| Forks | 9.7k |
| Open Issues | 22 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-31 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://x.com/Fried_rice/status/2038894956459290963?s=20) |
| Repo 大小 | 9.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sanbuphy/claude-code-source-code) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `esbuild` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sanbuphy](https://github.com/sanbuphy) | 13 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有大量討論和反饋。
**連結**：[文件](https://x.com/Fried_rice/status/2038894956459290963?s=20)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-31 ~ 2026-03-31）
> **活躍天數** 1 天 · **最新 commit** Update copyright attribution from PBC to Anthropic and Claude

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/sanbuphy/claude-code-source-code/issues/13) | 🤡 原汤化原食，Claude 如何看待眼中的老己 https://github.com/openedclaude/cl | 1 | 0 |
> | [#1](https://github.com/sanbuphy/claude-code-source-code/issues/1) | 🐮🍺 | 1 | 0 |
> | [#23](https://github.com/sanbuphy/claude-code-source-code/issues/23) | 火钳刘明 | 0 | 0 |
> | [#22](https://github.com/sanbuphy/claude-code-source-code/issues/22) | 火钳刘明 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code v2.1.88 — Source Code Analysis
> 
> > **Disclaimer**: All source code in this repository is the intellectual property of **Anthropic and Claude**. This repository is provided strictly for technical research, study, and educational exchange among enthusiasts. **Commercial use is strictly prohibited.** No individual, organization, or entity may use this content for commercial purposes, profit-making activities, illegal activities, or any other unauthorized scenarios. If any content infringes upon your legal rights, intellectual property, or other interests, please contact us and we will verify and remove it immediately.
> 
> > Extracted from npm package `@anthropic-ai/claude-code` version **2.1.88**.
> > The published package ships a single bundled `cli.js` (~12MB). The `src/` directory in this repo contains the **unbundled TypeScript source** extracted from the npm tarball.
> 
> **Language**: **English** | [中文](README_CN.md)
> 
> ---
> 
> 
> ### Feature-Gated Tools (~20 modules, DCE'd from bundle)
> 
> These tools have type signatures in `sdk-tools.d.ts` but their implementations were stripped at compile time.
> 
> Click to expand full list
> 
> | Tool | Purpose | Feature Gate |
> |------|---------|-------------|
> | `REPLTool` | Interactive REPL (VM sandbox) | `ant` (internal) |
> | `SnipTool` | Context snipping | `HISTORY_SNIP` |
> | `SleepTool` | Sleep/delay in agent loop | `PROACTIVE` / `KAIROS` |
> | `MonitorTool` | MCP monitoring | `MONITOR_TOOL` |
> | `OverflowTestTool` | Overflow testing | `OVERFLOW_TEST_TOOL` |
> | `WorkflowTool` | Workflow execution | `WORKFLOW_SCRIPTS` |
> | `WebBrowserTool` | Browser automation | `WEB_BROWSER_TOOL` |
> | `TerminalCaptureTool` | Terminal capture | `TERMINAL_PANEL` |
> | `TungstenTool` | Internal perf monitoring | `ant` (internal) |
> | `VerifyPlanExecutionTool` | Plan verification | `CLAUDE_CODE_VERIFY_PLAN` |
> | `SendUserFileTool` | Send files to users | `KAIROS` |
> | `SubscribePRTool` | GitHub PR subscription | `KAIROS_GITHUB_WEBHOOKS` |
> | `SuggestBackgroundPRTool` | Suggest background PRs | `KAIROS` |
> | `PushNotificationTool` | Push notifications | `KAIROS` |
> | `CtxInspectTool` | Context inspection | `CONTEXT_COLLAPSE` |
> | `ListPeersTool` | List active peers | `UDS_INBOX` |
> | `DiscoverSkillsTool` | Skill discovery | `EXPERIMENTAL_SKILL_SEARCH` |
> 
> 
> ## Architecture Overview
> 
> ```
> ┌─────────────────────────────────────────────────────────────────────┐
> │                         ENTRY LAYER                                 │
> │  cli.tsx ──> main.tsx ──> REPL.tsx (interactive)                   │
> │                     └──> QueryEngine.ts (headless/SDK)              │
> └──────────────────────────────┬──────────────────────────────────────┘
>                                │
>                                ▼
> ┌─────────────────────────────────────────────────────────────────────┐
> │                       QUERY ENGINE                                  │
> │  submitMessage(prompt) ──> AsyncGenerator               │
> │    │                                                                │
> │    ├── fetchSystemPromptParts()    ──> assemble system prompt       │
> │    ├── processUserInput()          ──> handle /commands             │
> │    ├── query()                     ──> main agent loop              │
> │    │     ├── StreamingToolExecutor ──> parallel tool execution       │
> │    │     ├── autoCompact()         ──> context compression          │
> │    │     └── runTools()            ──> tool orchestration           │
> │    └── yield SDKMessage            ──> stream to consumer           │
> └──────────────────────────────┬──────────────────────────────────────┘
>                                │
>               ┌────────────────┼────────────────┐
>               ▼                ▼                 ▼
> ┌──────────────────┐ ┌─────────────────┐ ┌──────────────────┐
> │   TOOL SYSTEM    │ │  SERVICE LAYER  │ │   STATE LAYER    │
> │                  │ │                 │ │                  │
> │ Tool Interface   │ │ api/claude.ts   │ │ AppState Store   │
> │  ├─ call()       │ │  API client     │ │  ├─ permissions  │
> │  ├─ validate()   │ │ compact/        │ │  ├─ fileHistory  │
> │  ├─ checkPerms() │ │  auto-compact   │ │  ├─ agents       │
> │  ├─ render()     │ │ mcp/            │ │  └─ fastMode     │
> │  └─ prompt()     │ │  MCP protocol   │ │                  │
> │                  │ │ analytics/      │ │ React Context    │
> │ 40+ Built-in:    │ │  telemetry      │ │  ├─ useAppState  │
> │  ├─ BashTool     │ │ tools/          │ │  └─ useSetState  │
> │  ├─ FileRead     │ │  executor       │ │                  │
> │  ├─ FileEdit     │ │ plugins/        │ └──────────────────┘
> │  ├─ Glob/Grep    │ │  loader         │
> │  ├─ AgentTool    │ │ settingsSync/   │
> │  ├─ WebFetch     │ │  cross-device   │
> │  └─ MCPTool      │ │ oauth/          │
> │                  │ │  auth flow      │
> └──────────────────┘ └─────────────────┘
>               │                │
>               ▼                ▼
> ┌──────────────────┐ ┌─────────────────┐
> │   TASK SYSTEM    │ │   BRIDGE LAYER  │
> │                  │ │                 │
> │ Task Types:      │ │ bridgeMain.ts   │
> │  ├─ local_bash   │ │  session mgmt   │
> │  ├─ local_agent  │ │ bridgeApi.ts    │
> │  ├─ remote_agent │ │  HTTP client    │
> │  ├─ in_process   │ │ workSecret.ts   │
> │  ├─ dream        │ │  auth tokens    │
> │  └─ workflow     │ │ sessionRunner   │
> │                  │ │  process spawn  │
> │ ID: prefix+8chr  │ └─────────────────┘
> │  b=bash a=agent  │
> │  r=remote t=team │
> └──────────────────┘
> ```
> 
> ---
> 
> 
> ## Feature Flag System
> 
> ```
>     DEAD CODE ELIMINATION (Bun compile-time)
>     ══════════════════════════════════════════
> 
>     feature('FLAG_NAME')  ──→  true  → included in bundle
>                            ──→  false → stripped from bundle
> 
>     FLAGS (observed in source):
>     ├─ COORDINATOR_MODE      → multi-agent coordinator
>     ├─ HISTORY_SNIP          → aggressive history trimming
>     ├─ CONTEXT_COLLAPSE      → context restructuring
>     ├─ DAEMON                → background daemon workers
>     ├─ AGENT_TRIGGERS        → cron/remote triggers
>     ├─ AGENT_TRIGGERS_REMOTE → remote trigger support
>     ├─ MONITOR_TOOL          → MCP monitoring tool
>     ├─ WEB_BROWSER_TOOL      → browser automation
>     ├─ VOICE_MODE            → voice input/output
>     ├─ TEMPLATES             → job classifier
>     ├─ EXPERIMENTAL_SKILL_SEARCH → skill discovery
>     ├─ KAIROS                → push notifications, file sends
>     ├─ PROACTIVE             → sleep tool, proactive behavior
>     ├─ OVERFLOW_TEST_TOOL    → testing tool
>     ├─ TERMINAL_PANEL        → terminal capture
>     ├─ WORKFLOW_SCRIPTS      → workflow tool
>     ├─ CHICAGO_MCP           → computer use MCP
>     ├─ DUMP_SYSTEM_PROMPT    → prompt extraction (ant-only)
>     ├─ UDS_INBOX             → peer discovery
>     ├─ ABLATION_BASELINE     → experiment ablation
>     └─ UPGRADE_NOTICE        → upgrade notifications
> 
>     RUNTIME GATES:
>     ├─ process.env.USER_TYPE === 'ant'  → Anthropic-internal features
>     └─ GrowthBook feature flags         → A/B experiments at runtime
> ```
> 
> ---
> 
> 
> ### Why They're Missing
> 
> ```
>   Anthropic Internal Monorepo              Published npm Package
>   ──────────────────────────               ─────────────────────
>   feature('DAEMON') → true    ──build──→   feature('DAEMON') → false
>   ↓                                         ↓
>   daemon/main.js  ← INCLUDED    ──bundle─→  daemon/main.js  ← DELETED (DCE)
>   tools/REPLTool  ← INCLUDED    ──bundle─→  tools/REPLTool  ← DELETED (DCE)
>   proactive/      ← INCLUDED    ──bundle─→  (referenced but absent from src/)
>   ```
> 
>   Bun's `feature()` is a **compile-time intrinsic**:
>   - Returns `true` in Anthropic's internal build → code is kept in the bundle
>   - Returns `false` in the published build → code is dead-code-eliminated
>   - The 108 modules simply do not exist anywhere in the published artifact
> 
> ---
> 
> 
> ## Table of Contents
> 
> - [Deep Analysis Reports (`docs/`)](#deep-analysis-reports-docs) — Telemetry, codenames, undercover mode, remote control, future roadmap
> - [Missing Modules Notice]

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[程式碼生成]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[duoan--TorchCode|duoan/TorchCode]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[cyxzdev--Uncodixfy|cyxzdev/Uncodixfy]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]]

[GitHub](https://github.com/sanbuphy/claude-code-source-code) · [官方網站](https://x.com/Fried_rice/status/2038894956459290963?s=20)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "sanbuphy--claude-code-source-code"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "sanbuphy--claude-code-source-code"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "sanbuphy--claude-code-source-code" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "sanbuphy--claude-code-source-code"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","程式碼生成","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sanbuphy--claude-code-source-code" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sanbuphy--claude-code-source-code" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sanbuphy" AND file.name != "sanbuphy--claude-code-source-code"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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
> const me = dv.page("Repos/sanbuphy--claude-code-source-code");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-01|2026-04-01]] — 首次收錄，4.9k stars
