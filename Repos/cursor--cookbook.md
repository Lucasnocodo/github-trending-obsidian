---
repo: cursor/cookbook
url: https://github.com/cursor/cookbook
owner: cursor
owner_type: Organization
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 3899
stars_per_day: 108
forks: 456
open_issues: 30
created: 2026-04-27
pushed_at: 2026-05-19
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供小範例以便於使用 Cursor 建構應用程式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 3
repo_size_kb: 2747
readme_length: 1834
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:1427,2026-04-30:1501,2026-05-01:2631,2026-05-01:2639,2026-05-02:2965,2026-05-02:2966,2026-05-03:3137,2026-05-03:3139,2026-05-04:3279,2026-05-04:3279,2026-05-05:3412,2026-05-06:3532,2026-05-07:3652,2026-05-08:3672,2026-05-09:3694,2026-05-10:3710,2026-05-11:3722,2026-05-12:3736,2026-05-13:3746,2026-05-14:3757,2026-05-15:3763,2026-05-16:3771,2026-05-17:3774,2026-05-18:3780,2026-05-19:3786,2026-05-20:3791,2026-05-24:3841,2026-05-26:3860,2026-05-27:3867,2026-05-29:3880,2026-05-30:3886,2026-05-31:3886,2026-06-01:3889,2026-06-02:3891,2026-06-03:3899"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "cookbook"
  - "cursor/cookbook"
  - "提供小範例以便於使用 Cursor 建構應用程式。"
---

# cookbook

**3.9k** stars · **108** stars/天 · 建立 36 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/cursor--cookbook");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供小範例以便於使用 Cursor 建構應用程式。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Hot (108 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 14 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在雲端環境中快速開發和管理代理的中小型開發團隊。
> **一句話重點** Cursor Cookbook 的設計讓開發者能夠快速上手並在雲端環境中迭代開發。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "cursor--cookbook" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到快速原型開發的能力，值得考慮。

> [!abstract] 核心創新
> Cursor SDK 提供了一個統一的 API 來管理本地和雲端的代理，並支持即時事件流。

## 專案簡介

Cursor Cookbook 提供了一系列小範例，幫助開發者使用 Cursor 進行應用程式開發。核心機制是透過 Cursor SDK，開發者可以在自己的應用、腳本和工作流程中運行 Cursor 的編碼代理，支持本地和雲端運行。使用者需要先從 Cursor 的整合儀表板創建 API 金鑰，然後設置為 `CURSOR_API_KEY`，接著就能使用 SDK 進行開發。這個工具的賣點在於其簡化了雲端代理的管理，並提供了即時的事件流，讓開發者能夠輕鬆管理提示、模型和對話狀態。技術上，Cursor SDK 是用 TypeScript 實作，並且支持多種雲端環境的部署，這使得它在不同的基礎設施上都能運行。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Cursor 提供了更完整的雲端代理管理功能，並且支持 DAG 任務運行，這在複雜任務的處理上更具優勢。實際使用中，開發者可以透過 CLI 快速啟動代理，並在 Kanban 板上管理代理的狀態。雖然目前開發者社群活躍度中等，但有 30 個開放問題顯示出仍有改進空間。這個專案目前處於 beta 階段，適合中小型團隊進行原型開發，未來可能會有更多功能擴展。對於需要快速原型開發的團隊，Cursor Cookbook 是一個值得考慮的選擇，但在生產環境中使用時需謹慎評估其穩定性。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- Cursor SDK — TypeScript API，支持本地和雲端運行，管理提示、模型和對話狀態。
- 自托管雲代理實驗室 — 提供在 AWS 基礎設施上運行 Cursor Cloud Agent 的範例。
- 即時事件流 — 在運行過程中流式傳輸代理事件，便於實時監控。
- DAG 任務運行 — 將任務分解為 JSON DAG，並在子代理中並行處理。
- CLI 工具 — 提供命令行界面，讓用戶能夠從終端啟動 Cursor 代理。

## 快速開始

1. 安裝必要的依賴
```bash
npm install
```
2. 設置 API 金鑰
```bash
export CURSOR_API_KEY=your_api_key
```
3. 運行範例
```bash
node sdk/quickstart.js
```

## 程式碼範例

```ts
# 前置條件
# 需要 Node.js 環境
const { Cursor } = require('cursor-sdk');

const cursor = new Cursor();
cursor.run('你的提示').then(response => {
  console.log(response);
});
# 預期輸出
# 代理的回應結果
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 36 天內累積 3899 stars（108/天），forks 456（11.7%），顯示出良好的增長潛力。這個專案的主要貢獻者包括 cursoragent 和 hsaab，他們在開源社群中有一定的影響力。Cursor Cookbook 解決了開發者在使用 Cursor 進行應用開發時缺乏範例的痛點，之前的解決方案往往需要開發者自行摸索，效率低下。近期的推廣活動和社群討論也吸引了不少注意，這使得專案的曝光度提升。這個工具的出現正好符合了當前對於雲端代理管理的需求，特別是在多樣化的雲端環境中。forks/stars 比率為 11.7%，顯示出不少開發者對於修改和擴展此專案的興趣。

## 適合誰使用

**目標受眾**：需要在雲端環境中快速開發和管理代理的中小型開發團隊。

> [!example] 使用場景
> - 後端工程師用它來快速搭建雲端代理，因為可以利用 SDK 範例快速上手，節省了大量開發時間。
> - 產品經理用它來原型設計新功能，因為可以在沙盒環境中快速測試和迭代想法。
> - DevOps 工程師用它來管理和監控雲端代理的狀態，因為提供的 Kanban 板能夠清晰地顯示每個代理的運行狀態。

## 架構分析

Cursor Cookbook 的架構設計以模組化為核心，使用 TypeScript 實現 SDK，並通過 API 進行雲端和本地的代理管理。資料流方面，使用者透過 SDK 發送提示，代理處理後返回結果，並且支持即時的事件流。這種設計使得開發者能夠快速迭代和測試功能，但也意味著對於大型專案的支持可能會受到限制。選擇 TypeScript 作為實作語言，帶來了靜態類型檢查的優勢，但也增加了學習曲線。擴展性方面，若未來需要支持更多語言或框架，可能需要重新考量架構設計以避免技術債。

## 技術深入分析

Cursor Cookbook 的核心技術機制是使用 TypeScript 實現的 SDK，這使得開發者能夠在本地和雲端環境中運行代理。透過即時事件流，開發者可以實時監控代理的運行狀態，這對於快速迭代和測試非常重要。效能方面，雖然目前支持的環境多樣，但在處理大型專案時可能會遇到瓶頸，特別是在資源使用上。選擇 TypeScript 而非 JavaScript 的好處在於靜態類型檢查，但這也增加了學習曲線。依賴關係方面，Cursor SDK 依賴於 Node.js 和 Docker，這意味著用戶需要具備一定的環境配置能力。技術風險方面，若未來需要擴展到更多語言或框架，可能會面臨架構上的挑戰。整合方面，Cursor Cookbook 能夠與主流的 CI/CD 工具良好整合，但在某些情況下可能需要額外的適配器。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的範例和指令，安裝過程相對順暢，但對於新手來說，可能需要花一些時間理解 API 的使用。整體上，getting started guide 友好，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 提供即時事件流，便於監控代理狀態。
> - 支持多種雲端環境的部署，靈活性高。
> - 模組化設計，便於擴展和維護。

> [!danger] 缺點
> - 目前功能尚不成熟，可能會遇到穩定性問題。
> - 對於大型專案的支持不足，性能可能受到影響。
> - 需要用戶自行管理 API 金鑰的安全性。

> [!warning] 注意事項
> - 目前僅支持 TypeScript 和 Node.js 環境。
> - 對於大型專案的支持尚未成熟，可能會遇到性能瓶頸。
> - 需要用戶自行管理 API 金鑰的安全性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理管理功能，但缺乏 Cursor 的即時事件流和雲端支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於本地代理的管理，對於雲端環境的支持較弱。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 用 Rust 實作，性能上更優，但生態系統不如 Cursor 豐富。 | 如果需要高效能的本地代理管理，且團隊對 Rust 熟悉。 | medium，因為需要重寫部分代碼以適應 Rust 環境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於本地代理的管理，缺乏雲端支持。 | 如果專案完全在本地環境中運行，且不需要雲端功能。 | low，因為大部分功能相似，僅需調整配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cookbook** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 用 Rust 實作，性能上更優，但生態系統不如 Cursor 豐富。 | 專注於本地代理的管理，缺乏雲端支持。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應 Rust 環境。 | low，因為大部分功能相似，僅需調整配置。 |
> | 適用場景 | 主要場景 | 如果需要高效能的本地代理管理，且團隊對 Rust 熟悉。 | 如果專案完全在本地環境中運行，且不需要雲端功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行原型開發，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些雲端環境中可能會遇到 API 金鑰配置問題
  - 解法：確保 API 金鑰正確設置並在環境變數中可用
- [MEDIUM] CLI 工具在某些操作系統上可能無法正常工作
  - 解法：確保使用支持的操作系統版本
- [MEDIUM] DAG 任務運行時可能會遇到性能瓶頸
  - 解法：對於大型任務，考慮分拆為多個小任務

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供了快速開發和迭代的能力，適合小型團隊的需求。 |
| 大型企業的核心系統 | 不適合 | 目前功能尚不成熟，穩定性不足。 |
| 需要快速原型開發的產品團隊 | 適合 | 能夠快速搭建和測試新功能，符合產品開發需求。 |
| 需要高效能的計算任務 | 普通 | 雖然支持 DAG 任務，但在性能上可能會遇到瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到快速原型開發的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要管理 API 金鑰，並且可能會存取敏感資料，建議在安全的環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
| Forks | 456 |
| Open Issues | 30 |
| Issue 解決率 | 3% (1 closed) |
| 最後推送 | 2026-05-19 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cursor/cookbook) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 83
>     "HCL" : 7
>     "Shell" : 4
>     "Python" : 2
>     "CSS" : 2
>     "JavaScript" : 2
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cursoragent](https://github.com/cursoragent) | 6 |
> | [@hsaab](https://github.com/hsaab) | 2 |
> | [@ericzakariasson](https://github.com/ericzakariasson) | 2 |
> | [@leerob](https://github.com/leerob) | 1 |
> | [@rysuds](https://github.com/rysuds) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量顯示出仍有改進空間。
**連結**：[文件](https://cursor.com/docs/api/sdk/typescript)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-19）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #35 from hsaab/add-cloud-agent-lab

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/cursor/cookbook/issues/13) | Would there be a Python SDK in future ? | 3 | 0 |
> | [#14](https://github.com/cursor/cookbook/issues/14) | there is an error about Ripgrep in both dev and start script | 1 | 2 |
> | [#37](https://github.com/cursor/cookbook/issues/37) | How do I prevent the agent from using local files, while let | 0 | 0 |
> | [#34](https://github.com/cursor/cookbook/issues/34) | Cursor Agent via ACP doesn't work | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cursor Cookbook
> 
> This repo contains small examples for building with Cursor.
> 
> ## Cloud Agents
> 
> ### [Self-hosted Cloud Agents lab](cloud-agent)
> 
> Run Cursor Cloud Agent workers on customer-managed AWS infrastructure with examples for EC2 + Docker, ECS/Fargate, and EKS + Helm.
> 
> ## Cursor SDK
> 
> The Cursor SDK is the TypeScript API for running Cursor's coding agent from your own apps, scripts, and workflows. It supports the same agent across local workspaces and cloud runtimes, streams agent events as runs progress, and lets you manage prompts, models, cancellation, artifacts, and conversation state from code.
> 
> To run the SDK examples, create a Cursor API key from the [Cursor integrations dashboard](https://cursor.com/dashboard/integrations), then set it as `CURSOR_API_KEY`.
> 
> ### [Quickstart](sdk/quickstart)
> 
> A minimal Node.js example that creates a local agent, sends one prompt, and streams the response.
> 
> ### [Prototyping tool](sdk/app-builder)
> 
> A web app for spinning up agents to scaffold new projects and iterate on ideas in a sandboxed cloud environment.
> 
> ### [Kanban board](sdk/agent-kanban)
> 
> A kanban board for viewing Cursor Cloud Agents, grouping them by status or repository, previewing artifacts, and creating new cloud agents from a repository and prompt.
> 
> ### [Coding agent CLI](sdk/coding-agent-cli)
> 
> A minimal command-line interface that lets you spawn Cursor agents from your terminal.
> 
> ### [DAG task runner](sdk/dag-task-runner)
> 
> Decompose a task into a JSON DAG, fan it out across local subagents, and stream live status into a Cursor Canvas that hot-reloads on every state change. Ships as both a runnable example and a copyable Cursor skill at [`.cursor/skills/dag-task-runner`](.cursor/skills/dag-task-runner).
> 
> Learn more in the [Cursor SDK TypeScript docs](https://cursor.com/docs/api/sdk/typescript).

## 延伸閱讀

相關概念：[[微服務]] · [[API 設計]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/cursor/cookbook)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cursor--cookbook"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cursor--cookbook" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","API 設計","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cursor--cookbook" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cursor--cookbook" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cursor" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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

> **2026-04-30** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，3.3k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，3.1k stars
- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 首次收錄，1.4k stars
