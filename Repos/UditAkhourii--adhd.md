---
repo: UditAkhourii/adhd
url: https://github.com/UditAkhourii/adhd
owner: UditAkhourii
owner_type: User
language: TypeScript
license: MIT
description: "ADHD — a skill for coding agents. Tree-of-thought with pruning, built on the Claude Agent SDK. Fans out parallel divergent thoughts under different cognitive frames, scores, prunes traps, deepens the survivors. The no-brainer skill for creative and interdisciplinary work."
homepage: "https://uditakhourii.github.io/adhd/"
stars: 468
stars_per_day: 156
forks: 23
open_issues: 15
created: 2026-05-25
pushed_at: 2026-05-28
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "AI/ML"
subcategory: "LLM 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "提供一種創意發想的技能，幫助編碼代理進行多元思考與選擇。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-05"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1836
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:354,2026-05-28:357,2026-05-29:468"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - easy_install
  - "topic/adhd"
  - "topic/agents"
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/brainstorm"
aliases:
  - "adhd"
  - "UditAkhourii/adhd"
  - "提供一種創意發想的技能，幫助編碼代理進行多元思考與選擇。"
---

# adhd

**357** stars · **179** stars/天 · 建立 2 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/UditAkhourii--adhd");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`adhd` `agents` `ai` `ai-agents` `brainstorm` `chain-of-thought` `claude` `claude-agent-sdk` `creativity` `divergent-thinking` `ideation` `interdisciplinary` `llm` `llm-tools` `nodejs` `prompt-engineering` `tree-of-thought` `typescript`

> [!summary] 一句話摘要
> 提供一種創意發想的技能，幫助編碼代理進行多元思考與選擇。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (179 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在創意和跨領域工作中尋求多樣化解決方案的開發者和產品經理。
> **一句話重點** ADHD 不僅是創意生成工具，更是一種全新的思考架構，能夠有效避免過早收斂。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 工具" && p.file.name !== "UditAkhourii--adhd" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到多元的創意解決方案，值得嘗試。

> [!abstract] 核心創新
> ADHD 提供了一種全新的思考架構，通過多元思考和評分機制來避免過早收斂。

## 專案簡介

ADHD 是一個為編碼代理設計的技能，旨在解決自回歸推理中的過早收斂問題。它通過生成多個獨立的推理過程，並在不同的認知框架下進行思考，來擴展創意的範疇。使用者可以通過 CLI 指令 `adhd 'your problem here'` 來啟動這個技能，並獲得多樣化的解決方案。ADHD 的核心機制是將問題分解成多個獨立的思考過程，這樣每個過程都不會受到其他過程的影響，從而避免了傳統思考模式中的「錨定效應」。

在技術實作上，ADHD 使用了 Claude Agent SDK，並依賴 TypeScript 和 Node.js，這使得它能夠在多種代理環境中運行。與其他工具相比，如 0xGF/boneyard 和 0x0funky/agent-sprite-forge，ADHD 提供了更高的創意多樣性，因為它不僅僅依賴於單一的生成模型，而是通過多個獨立的思考過程來生成想法。使用者在實際操作中可能會遇到的問題包括如何選擇合適的認知框架，以及如何有效地整合生成的想法。這個專案目前處於 beta 階段，建議在小型團隊或個人專案中試用，未來可能會進一步擴展其功能和穩定性。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- 多元思考 — 生成多個獨立的推理過程，避免錨定效應。
- CLI 支持 — 使用 `adhd 'your problem here'` 指令輕鬆啟動。
- 框架選擇 — 提供多種認知框架供使用者選擇，提升創意多樣性。
- 評分與修剪 — 對生成的想法進行評分和修剪，確保質量。
- 結構化輸出 — 提供清晰的結構化結果，便於後續處理和整合。

## 快速開始

1. 安裝 ADHD CLI
```bash
npm install -g adhd-agent
```
2. 使用 CLI 生成想法
```bash
adhd '設計一個能夠承受領導者選舉的速率限制器'
```
3. 在程式碼中使用 ADHD 庫
```bash
import { run } from 'adhd-agent'; const result = await run({ problem: '...' });
```

## 程式碼範例

```ts
{
  "前置條件": "安裝了 adhd-agent 庫",
  "程式碼": "import { run } from 'adhd-agent'; const result = await run({ problem: '如何在高峰負載下分片這個隊列？', framesPerRun: 6, ideasPerFrame: 8, topK: 3 });",
  "預期輸出": "result 將包含多個生成的想法和評分。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 357 stars（179/天），forks 16（4.5%），顯示出相對穩定的興趣增長。作者 Udit Akhouri 之前在 AI 代理領域有過多次貢獻，這次專案解決了創意發想過程中常見的過早收斂問題，這在現有工具中並未有良好的解決方案。近期的推廣和討論可能也促進了這個專案的曝光率。由於 forks/stars 比率為 4.5%，顯示出使用者對這個專案的實際修改和應用有一定的興趣。

## 適合誰使用

**目標受眾**：需要在創意和跨領域工作中尋求多樣化解決方案的開發者和產品經理。

> [!example] 使用場景
> - 產品經理用它來設計一個新的 API，因為它能提供多種創意解決方案，避免傳統思考的局限。
> - 開發者用它來進行模組重構，因為 ADHD 能夠生成多元的設計選項，幫助他們找到最佳解決方案。
> - 創意工作者用它來進行頭腦風暴，因為它能夠在不同的認知框架下產生多樣化的想法，激發靈感。

## 架構分析

ADHD 的架構設計分為兩個主要階段：第一階段是多元思考，通過選擇多個認知框架來生成獨立的推理過程，這樣每個過程都不會受到其他過程的影響，避免了傳統思考中的錨定效應。第二階段是評分與修剪，通過對生成的想法進行評分、聚類和深化，最終輸出結構化的結果。這種設計使得 ADHD 能夠在創意工作中提供更高的靈活性和多樣性，但也需要更多的計算資源來處理多個並行的推理過程。整體架構的擴展性良好，但在高併發情況下可能會面臨性能瓶頸。

## 技術深入分析

ADHD 的核心技術機制是通過多元思考來生成創意，這是通過選擇多個認知框架來實現的。在第一階段，ADHD 生成多個獨立的推理過程，每個過程都在不同的認知框架下進行，這樣可以避免傳統思考中的錨定效應。第二階段則是評分與修剪，通過對生成的想法進行評分、聚類和深化，最終輸出結構化的結果。這種設計使得 ADHD 在創意工作中提供更高的靈活性和多樣性，但也需要更多的計算資源來處理多個並行的推理過程。從技術風險評估來看，ADHD 可能在高併發情況下面臨性能瓶頸，這需要在實際應用中進行測試和優化。整合到現有的開發流程中相對容易，因為它支持 CLI 和 Node.js 庫，並且可以與多種代理環境兼容。整體來說，ADHD 是一個具有潛力的創意生成工具，值得在小型團隊和個人專案中試用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了多個範例，安裝過程相對順暢，但需要設置環境變數。提供了良好的快速入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 能夠生成多元的創意解決方案，避免傳統思考的局限。
> - 結構化的輸出便於後續處理和整合。
> - 支持多種認知框架，提升創意的多樣性。

> [!danger] 缺點
> - 需要設置環境變數進行身份驗證，增加了使用的複雜性。
> - 在高併發情況下可能會遇到性能瓶頸。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 目前僅支援 Node.js 18 以上版本。
> - 需要設置 ANTHROPIC_API_KEY 環境變數以進行身份驗證。
> - 在高併發情況下可能會遇到性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的創意生成，但主要依賴於單一的生成模型，缺乏 ADHD 的多元思考能力。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建代理，但不具備 ADHD 的多重認知框架和評分機制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要依賴於單一的生成模型，缺乏 ADHD 的多元思考能力。 | 如果你的團隊需要一個簡單的生成工具，而不需要多元的思考過程。 | low，因為接口相對簡單，容易上手。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建代理，但不具備 ADHD 的多重認知框架和評分機制。 | 如果你的專案需要針對特定任務的代理生成，而不需要廣泛的創意生成。 | medium，因為需要調整現有的代理架構以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **adhd** | **boneyard** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要依賴於單一的生成模型，缺乏 ADHD 的多元思考能力。 | 專注於創建代理，但不具備 ADHD 的多重認知框架和評分機制。 |
> | 遷移成本 | - | low，因為接口相對簡單，容易上手。 | medium，因為需要調整現有的代理架構以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個簡單的生成工具，而不需要多元的思考過程。 | 如果你的專案需要針對特定任務的代理生成，而不需要廣泛的創意生 |

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

- **[HIGH]** 在高併發情況下可能會遇到性能瓶頸
  - 解法：減少同時運行的請求數量
- [MEDIUM] 需要設置 ANTHROPIC_API_KEY 環境變數
  - 解法：確保環境變數正確配置
- [MEDIUM] 可能存在不穩定性，因為仍在 beta 階段
  - 解法：在非關鍵專案中進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊進行產品設計 | 非常適合 | ADHD 能夠提供多元的創意解決方案，幫助團隊突破思考限制。 |
| 大型企業的核心產品開發 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |
| 個人開發者進行創意頭腦風暴 | 非常適合 | ADHD 能夠激發多樣化的想法，適合個人使用。 |
| 學術研究團隊進行跨領域合作 | 適合 | ADHD 的多元框架能夠促進不同領域的思考。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到多元的創意解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取環境變數，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
| Forks | 16 |
| Open Issues | 15 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-27 |
| 建立日期 | 2026-05-25 |
| 官方網站 | [Link](https://uditakhourii.github.io/adhd/) |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/UditAkhourii/adhd) |
| Topics | `adhd` `agents` `ai` `ai-agents` `brainstorm` `chain-of-thought` `claude` `claude-agent-sdk` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/claude-agent-sdk` `p-limit` `zod` `@types/node` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 70
>     "JavaScript" : 30
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@UditAkhourii](https://github.com/UditAkhourii) | 8 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚有 15 個未解決。
**連結**：[文件](https://uditakhourii.github.io/adhd/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-26 ~ 2026-05-27）
> **活躍天數** 2 天 · **最新 commit** Add External reviews section linking mxriverlynn's analysis

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/UditAkhourii/adhd/issues/18) | Run evals at K=10 and K=20 to bridge K=5 (ours) vs K=100 (li `evals` `paper` `methodology` | 1 | 0 |
> | [#17](https://github.com/UditAkhourii/adhd/issues/17) | Distinguish ADHD frames from personas (A5) and from domain s `documentation` `paper` `methodology` | 1 | 0 |
> | [#16](https://github.com/UditAkhourii/adhd/issues/16) | Address A7 (CHI 2025) human-in-loop counter-evidence in pape `documentation` `paper` `methodology` | 1 | 0 |
> | [#15](https://github.com/UditAkhourii/adhd/issues/15) | Cluster-level narrowing instead of idea-level deepening `enhancement` `architecture` | 0 | 0 |
> | [#14](https://github.com/UditAkhourii/adhd/issues/14) | Run head-to-head evals vs MoA, Self-Consistency, GPT-5 Pro,  `evals` `paper` `methodology` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ADHD — a skill for agents
> 
> [](https://github.com/UditAkhourii/adhd/actions/workflows/ci.yml)
> [](https://www.npmjs.com/package/adhd-agent)
> [](./LICENSE)
> [](#install)
> [](https://adhdstack.github.io/)
> 
> > **An architectural fix for premature convergence in autoregressive reasoning.**
> 
> 📄 **Preprint:** [ADHD: Parallel Divergent Ideation for Coding Agents](https://adhdstack.github.io/)
> 👤 **Author:** Udit Akhouri — [@akhouriudit](https://x.com/akhouriudit) · [LinkedIn](https://www.linkedin.com/in/udit-akhouri-10160a168/) · researchudit@gmail.com
> 
> Linear Chain-of-Thought gets trapped in local minima: each generated token conditions the next, so the model anchors on whatever it said first. Tree-of-Thought widens the search but still walks a single shared context, so anchoring persists across branches. **ADHD treats this as an architectural problem, not a prompting one** — it spawns N isolated reasoning processes under deliberately distorted cognitive frames, with zero shared context during divergence, then runs a separate critic pass to score, cluster, prune traps, and deepen survivors.
> 
> Like Steve Jobs' *connecting the dots* — but the dots get generated under deliberate cognitive distortion first, in parallel, with the critic switched off, before any of them are evaluated.
> 
> It is the no-brainer skill to reach for on **creative work, interdisciplinary work, design decisions, fuzzy debugging, naming, API surface design, strategy, positioning, and any prompt of the shape *"give me a few ways to…"***.
> 
> Ships three ways: as an **agent skill** ([`skills/adhd/SKILL.md`](./skills/adhd/SKILL.md), drop-in via `npx skills add UditAkhourii/adhd`, works in Claude Code, Cursor, Antigravity, Codex, and ~50 more), as a **Node/TS library** ([`adhd-agent`](https://www.npmjs.com/package/adhd-agent) on npm), and as a **CLI** (`adhd "your problem here"`). The library and CLI are built on the [Claude Agent SDK](https://docs.claude.com/en/api/agent-sdk).
> 
> ---
> 
> 
> ## Install
> 
> 
> ### Manual install (if you do not have npx)
> 
> The skill file is at [`skills/adhd/SKILL.md`](./skills/adhd/SKILL.md). Curl it into your agent's skill directory:
> 
> ```bash
> 
> ### Programmatic install (Agent SDK)
> 
> ```ts
> import { query } from "@anthropic-ai/claude-agent-sdk";
> import { readFileSync } from "node:fs";
> 
> const skill = readFileSync("./skills/adhd/SKILL.md", "utf8");
> 
> for await (const m of query({
>   prompt: "design a retry strategy for a CLI whose LLM hangs for 90s",
>   options: {
>     systemPrompt: { type: "preset", preset: "claude_code", append: skill },
>     allowedTools: ["Task"],
>   },
> })) {
>   // …
> }
> ```
> 
> 
> ## Quickstart
> 
> 
> ### As a CLI (terminal usage, no agent needed)
> 
> ```bash
> npm install -g adhd-agent
> adhd "design a rate limiter that survives a leader election"
> ```
> 
> Auth: picks up `ANTHROPIC_API_KEY` from the environment, or inherits auth from a local Claude Code install.
> 
> 
> ## Library API (TypeScript)
> 
> ```ts
> import { run, renderText, FRAMES, selectFrames } from "adhd-agent";
> import type {
>   RunOptions, RunResult, Idea, Branch, Cluster,
>   DeepenedIdea, Score, RunEvent,
> } from "adhd-agent";
> 
> type RunOptions = {
>   problem: string;
>   context?: string;
>   framesPerRun?: number;   // default 5
>   ideasPerFrame?: number;  // default 6
>   topK?: number;           // default 3
>   concurrency?: number;    // default 4
>   codeMode?: boolean;      // default true
>   model?: string;
>   onEvent?: (e: RunEvent) => void;
> };
> ```
> 
> Everything in `RunResult` is structured — clusters, scored ideas with `novelty / viability / fit`, trap reasons, deepened sketches with child ideas. You can route it into your own renderer, downstream agent, or planning loop.
> 
> ---
> 
> 
> ## Why this is the no-brainer skill for creative and interdisciplinary work
> 
> Creative and cross-domain work is exactly the regime where premature convergence costs the most.
> 
> - The right answer is often **not in any one domain's playbook** — you need to *transplant* a mechanism. ADHD's cross-domain frames (biology, logistics, game design, markets) do this on purpose.
> - The textbook answer is usually a **trap** — it looks right because it's familiar. ADHD's separate critic pass flags traps with named reasons, not just "could be risky."
> - The interesting ideas live in the **awkward middle** — past the first 3, before the absurd. Single-pass generation never gets there because each token is biased by the previous one. Parallel isolated branches do.
> - You don't always know **what good looks like** yet. ADHD's cluster pass surfaces the *shape* of the design space so you can argue at the angle level, not idea-by-idea.
> 
> In one line: **ADHD is what to reach for the moment a single-pass agent would give you a competent, forgettable answer.**
> 
> ---
> 
> 
> ### One command, every agent
> 
> ```bash
> npx skills add UditAkhourii/adhd
> ```
> 
> That is it. The [`skills`](https://github.com/vercel-labs/skills) CLI detects which agent you are using and drops [`skills/adhd/SKILL.md`](./skills/adhd/SKILL.md) into the right place. Supports **Claude Code, Claude.ai, Antigravity, Cursor, Codex, Cline, Continue, Aider, Gemini CLI, Windsurf, Cody, Roo, Augment, OpenCode, Kilo, Kimi, Qwen, Trae, Replit, Warp**, and ~40 more.
> 
> Restart your agent. The skill auto-triggers on brainstorm, ideate, design, naming, refactor, and "give me a few ways to" intents. Or invoke it explicitly: `/adhd "design a rate limiter that survives a leader election"`.
> 
> Useful flags:
> 
> ```bash
> npx skills add UditAkhourii/adhd -g            # install globally instead of per-project
> npx skills add UditAkhourii/adhd -a claude-code -a cursor   # target specific agents
> npx skills add UditAkhourii/adhd --copy        # copy files instead of symlinking
> npx skills add UditAkhourii/adhd --list        # see what skills the repo offers
> ```
> 
> 
> # Claude Code (global)
> mkdir -p ~/.claude/skills/adhd
> curl -fsSL https://raw.githubusercontent.com/UditAkhourii/adhd/main/skills/adhd/SKILL.md \
>   -o ~/.claude/skills/adhd/SKILL.md
> 
> 
> # Claude Code (per-project)
> mkdir -p .claude/skills/adhd
> curl -fsSL https://raw.githubusercontent.com/UditAkhourii/adhd/main/skills/adhd/SKILL.md \
>   -o .claude/skills/adhd/SKILL.md
> 
> 
> # Cursor (project rules)
> curl -fsSL https://raw.githubusercontent.com/UditAkhourii/adhd/main/skills/adhd/SKILL.md >> .cursorrules
> ```
> 
> For **Claude.ai web/desktop**: open project settings → **Skills** → **Add skill** → upload [`skills/adhd/SKILL.md`](./skills/adhd/SKILL.md).
> 
> For **Cline, Continue, Aider, Roo Code, and other agents**: paste the body of [`SKILL.md`](./skills/adhd/SKILL.md) (skip the YAML frontmatter) into your agent's system prompt or rules field.
> 
> 
> ### As a library (inside your own agent)
> 
> ```bash
> npm install adhd-agent
> ```
> 
> ```ts
> import { run } from "adhd-agent";
> const result = await run({ problem: "...", framesPerRun: 5, topK: 3 });
> ```
> 
> 
> ### From source
> 
> ```bash
> git clone https://github.com/UditAkhourii/adhd.git
> cd adhd && npm install && npm run build
> ```
> 
> ---
> 
> 
> ### CLI
> 
> ```bash
> adhd "design a rate limiter that survives a leader election"
> 
> adhd "name this function" --frames 3 --ideas 8 --top 2
> 
> adhd "we have a CLI that hangs for 90s on LLM calls. what's the right retry/UX?" \
>     --frames 5 --ideas 6 --top 3 --context ./client.ts
> 
> adhd "..." --json > result.json
> ```
> 
> 
> ### Library
> 
> ```ts
> import { run, renderText } from "adhd-agent";
> 
> const result = await run({
>   problem: "How should we shard this queue under bursty load?",
>   context: readFileSync("./queue.ts", "utf8"),
>   framesPerRun: 6,
>   ideasPerFrame: 8,
>   topK: 3,
>   onEvent: (e) => console.error(e),
> });
> 
> console.log(renderText(result));
> // or operate on:
> //   result.shortlist        → 2–4 most promising ideas with scores
> //   result.nonObviousPick   → the highest-novelty viable one
> //   result.traps            → "looks good but isn't" list, with reasons
> //   result.deepened         → top-K expanded: sketch + risk + first step + child ideas
> //   result.clusters         → the SHAPE of the idea space
> ```
> 
> ---
> 
> 
> ## What ADHD actually is
> 
> A two-phase loop with a hard wall between the pha

## 延伸閱讀

相關概念：[[多模態]] · [[創造力]] · [[思維導圖]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MemPalace--mempalace|MemPalace/mempalace]]

[GitHub](https://github.com/UditAkhourii/adhd) · [官方網站](https://uditakhourii.github.io/adhd/)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 工具" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "UditAkhourii--adhd" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","創造力","思維導圖"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "UditAkhourii--adhd" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/UditAkhourii--adhd");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "UditAkhourii--adhd" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "UditAkhourii" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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

> **2026-05-28** — 首次收錄
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

- [[2026-05-29|2026-05-29]] — 再次上榜，468 stars
- [[2026-05-28|2026-05-28]] — 首次收錄，354 stars
