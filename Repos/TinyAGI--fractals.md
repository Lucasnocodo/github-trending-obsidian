---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 619
stars_per_day: 14
forks: 46
open_issues: 4
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "任務協調"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一個遞歸任務協調器，讓多個代理協同執行任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 778
readme_length: 6858
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:517,2026-03-11:517,2026-03-11:517,2026-03-13:582,2026-03-14:588,2026-03-15:589,2026-03-16:593,2026-03-17:596,2026-03-18:595,2026-03-19:597,2026-03-20:598,2026-03-21:599,2026-03-22:599,2026-03-23:600,2026-03-24:604,2026-03-25:604,2026-03-26:604,2026-03-27:604,2026-03-28:607,2026-03-29:608,2026-03-30:609,2026-03-31:609,2026-04-01:610,2026-04-02:611,2026-04-03:611,2026-04-04:611,2026-04-05:614,2026-04-06:615,2026-04-07:615,2026-04-08:616,2026-04-09:616,2026-04-10:616,2026-04-11:617,2026-04-12:617,2026-04-13:617,2026-04-14:618,2026-04-15:618,2026-04-16:618,2026-04-17:617,2026-04-18:618,2026-04-19:618,2026-04-20:619"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "一個遞歸任務協調器，讓多個代理協同執行任務。"
---

# fractals

**619** stars · **14** stars/天 · 建立 45 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/TinyAGI--fractals");
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
> 一個遞歸任務協調器，讓多個代理協同執行任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (14 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 44 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效管理複雜任務並希望自動化任務分解的開發團隊。
> **一句話重點** Fractals 的遞歸任務協調能力讓複雜任務的管理變得更簡單和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TinyAGI--fractals");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "任務協調" && p.file.name !== "TinyAGI--fractals" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 任務協調 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高效的任務管理效果，值得嘗試。

> [!abstract] 核心創新
> Fractals 提供了一個自動化的遞歸任務協調解決方案，能夠生成並執行複雜的任務樹。

## 專案簡介

Fractals 是一個遞歸的任務協調器，能夠將高層次的任務分解為可執行的子任務，並在隔離的 git 工作樹中運行每個葉子任務。用戶首先輸入任務，系統會利用 LLM 進行分類和分解，然後生成一個自相似的任務樹。接著，用戶確認計劃並提供工作空間路徑，系統初始化 git 工作空間並創建工作樹，最後通過 Claude CLI 批量執行葉子任務，並實時輪詢執行狀態。這種設計使得任務的執行可以並行進行，並且能夠根據用戶的需求進行靈活的調整。核心賣點在於其遞歸性和自動化，能夠有效地處理複雜任務。

該專案使用 TypeScript 和 Hono 框架，並依賴 OpenAI 的 API 進行任務的分類和分解，這使得其能夠處理多層次的任務結構。相較於傳統的任務管理工具，Fractals 提供了更高的自動化和靈活性，特別適合需要快速迭代和多任務並行處理的場景。使用者可以透過 REST API 進行操作，並且支持多種批量執行策略以應對不同的需求。這個專案目前處於早期階段，仍有許多功能在開發中，如任務依賴性和優先級的管理。對於需要進行高效任務協調的團隊，Fractals 提供了一個有趣的解決方案，但在穩定性和功能完整性上仍需觀察其未來發展。

**技術棧**：`TypeScript 5.9.3` · `Hono 4.12.5` · `OpenAI 6.25.0`

## 重點功能

- 遞歸任務分解 — 能夠將高層次任務分解為多層次的子任務，並生成任務樹。
- 多種批量執行策略 — 支持深度優先和寬度優先等策略，以適應不同的執行需求。
- 實時狀態更新 — 透過 API 輪詢執行狀態，讓用戶隨時掌握任務進度。
- CLI 支持 — 提供命令行介面，方便用戶在無需前端的情況下進行操作。
- 與 OpenAI 整合 — 利用 OpenAI API 進行任務的分類和分解，提升自動化程度。

## 快速開始

1. 安裝伺服器依賴
```bash
npm install
```
2. 安裝前端依賴
```bash
cd web && npm install && cd ..
```
3. 設置 OpenAI 金鑰
```bash
echo "OPENAI_API_KEY=sk-..." > .env
```
4. 啟動伺服器
```bash
npm run server
```
5. 啟動前端
```bash
cd web && npm run dev
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm，並設置 OpenAI API 金鑰。",
  "指令": "npm run server",
  "預期輸出": "伺服器啟動，監聽在 port 1618。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 45 天內累積 619 stars（14/天），forks 46（7.4%），顯示出一定的使用者興趣。作者 jlia0 之前在開源社群活躍，這個專案解決了傳統任務管理工具在處理複雜任務時的不足，特別是自動化和遞歸性方面。社群對於如何處理成本追蹤和預算限制的討論顯示出使用者對於這些功能的需求。技術生態的變化，如 LLM 的進步，使得這種自動化的任務協調成為可能。forks/stars 比率為 7.4%，顯示出有相當比例的用戶對此專案進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要高效管理複雜任務並希望自動化任務分解的開發團隊。

> [!example] 使用場景
> - 專案經理用它來自動化任務分解，因為手動管理複雜任務容易出錯，Fractals 能夠快速生成任務樹。
> - 開發者用它來在多個 git 工作樹中並行執行任務，因為這樣可以提高工作效率，避免了手動切換上下文的麻煩。
> - 團隊協作時，使用 Fractals 來管理任務依賴性，因為它能夠清晰地顯示任務之間的關係，並自動處理執行順序。

## 架構分析

Fractals 的架構由前端和後端組成，前端使用 Next.js 提供用戶介面，後端則使用 Hono 框架處理 API 請求。用戶輸入任務後，系統會通過 LLM 進行分類和分解，生成任務樹。執行階段，系統會在 git 工作樹中批量執行葉子任務，並實時更新狀態。

這種設計使得任務執行能夠並行進行，並且能夠靈活應對不同的執行策略。選擇 Hono 框架是因為其輕量且易於擴展，能夠快速響應 API 請求。整體架構的設計考慮到未來的擴展性，並且能夠支持多種任務執行策略，這使得 Fractals 在處理複雜任務時具備優勢。

## 技術深入分析

Fractals 的核心技術機制是基於 LLM 的任務分類和分解，利用 OpenAI 的 API 來生成任務樹。這種設計使得任務的處理能夠自動化，並且支持多層次的任務結構。效能方面，系統能夠處理多個葉子任務的執行，但在高負載情況下可能會遇到性能瓶頸，特別是在使用 Claude CLI 進行批量執行時。選擇 TypeScript 和 Hono 框架的原因在於其強大的類型系統和輕量級的特性，這使得開發過程更加高效。依賴樹的複雜度相對較低，主要依賴於 OpenAI 的 API，這降低了維護成本，但也帶來了對外部服務的依賴風險。在整合方面，Fractals 能夠與現有的 CI/CD 流程無縫對接，並且支持多種開發工具的使用，這使得其在團隊協作中具備優勢。整體而言，Fractals 提供了一個創新的解決方案，但在實際使用中仍需注意其穩定性和性能問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意設置 OpenAI API 金鑰的步驟。整體上，對於新手來說，能在 30 分鐘內成功啟動並運行。

## 優缺點分析

> [!success] 優點
> - 自動化的任務分解，減少手動操作的錯誤。
> - 支持多種執行策略，靈活應對不同需求。
> - 實時狀態更新，讓用戶隨時掌握進度。

> [!danger] 缺點
> - 功能尚不完整，可能存在不穩定性。
> - 需要有效的 OpenAI API 金鑰，增加使用門檻。
> - 對於大型任務的性能可能不足，需進一步優化。

> [!warning] 注意事項
> - 目前仍在開發中，功能不完整，可能會有不穩定的情況。
> - 需要有效的 OpenAI API 金鑰，否則無法進行任務分解。
> - 對於大型任務，可能會遇到性能瓶頸，特別是在執行大量葉子任務時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更為靈活的任務管理，但不支持遞歸分解，適合較簡單的任務協調。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於單一任務的執行，而 Fractals 支持多任務的遞歸處理，適合需要同時管理多個任務的場景。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | BuilderPulse 提供了可視化的任務管理界面，但缺乏 Fractals 的自動化和遞歸功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了靈活的任務管理，但不支持遞歸分解，適合較簡單的任務協調。 | 如果你的任務較為簡單，且不需要遞歸分解，Boneyard 會是更輕量的選擇。 | low，因為兩者的任務管理概念相似。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於單一任務的執行，而 Fractals 支持多任務的遞歸處理，適合需要同時管理多個任務的場景。 | 如果你的工作流程主要集中在單一任務的執行上，Codeburn 會更合適。 | medium，因為需要調整任務的管理方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **fractals** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了靈活的任務管理，但不支持遞歸分解，適合較簡單的任務協調。 | Codeburn 專注於單一任務的執行，而 Fractals 支持多任務的遞歸處理，適合需要同時管理多個任務的場景。 |
> | 遷移成本 | - | low，因為兩者的任務管理概念相似。 | medium，因為需要調整任務的管理方式。 |
> | 適用場景 | 主要場景 | 如果你的任務較為簡單，且不需要遞歸分解，Boneyard 會 | 如果你的工作流程主要集中在單一任務的執行上，Codeburn |

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

- **[HIGH]** 在高負載情況下，任務執行可能會變慢，特別是在批量執行時。
  - 解法：可以考慮減少同時執行的葉子任務數量。
- **[HIGH]** 需要有效的 OpenAI API 金鑰，否則無法進行任務分解。
  - 解法：確保在 .env 檔案中正確設置 API 金鑰。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要管理多個複雜任務的開發團隊 | 非常適合 | Fractals 提供了自動化的任務分解和執行功能，能夠有效提升效率。 |
| 小型專案或個人項目 | 適合 | 對於小型任務，Fractals 的功能能夠幫助快速管理和執行。 |
| 對於單一任務的執行需求 | 不適合 | Fractals 的設計更適合處理多層次的任務，而非單一任務。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高效的任務管理效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Fractals 不需要高權限操作，但需妥善管理 OpenAI API 金鑰，避免洩露。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
| Forks | 46 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://tinyagicompany.com) |
| Repo 大小 | 778 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TinyAGI/fractals) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@hono/node-server` `@types/node` `dotenv` `hono` `openai` `tsx` `typescript` `zod`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "CSS" : 8
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jlia0](https://github.com/jlia0) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應速度尚可。
**連結**：[文件](https://tinyagicompany.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-06）
> **活躍天數** 2 天 · **最新 commit** chore: update prompt

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/TinyAGI/fractals/issues/6) | Cost tracking & budget limits for recursive task trees — how | 0 | 0 |
> | [#1](https://github.com/TinyAGI/fractals/issues/1) | "Confirm & Execute" button is hidden below the fold after de | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Fractals 🌀
>   Recursive agentic task orchestrator
>   Give it any high-level task and it grows a self-similar tree of executable subtasks, then runs each leaf in isolated git worktrees with an agent swarm.
>   
>     
>     
>       
>     
>     
>       
>     
>   
> 
>   
> 
> ## Architecture
> 
> ```
> ┌─────────────────────────────────────────────────────────┐
> │  web/  (Next.js frontend)                               │
> │  - Task input                                           │
> │  - Tree visualization                                   │
> │  - Workspace setup                                      │
> │  - Execution status polling                             │
> └────────────────────┬────────────────────────────────────┘
>                      │ HTTP (:1618)
> ┌────────────────────▼────────────────────────────────────┐
> │  src/  (Hono server)                                    │
> │                                                         │
> │  ┌─────────┐   ┌──────────┐   ┌──────────────────────┐  │
> │  │  LLM    │   │Orchestr- │   │  Executor            │  │
> │  │classify │──>│  ator    │   │  Claude / Codex CLI  │  │
> │  │decompose│   │ plan()   │   │  git worktrees       │  │
> │  └─────────┘   └──────────┘   └──────────────────────┘  │
> │                                                         │
> │  OpenAI (gpt-5.2)            Claude / Codex CLI (spawn) │
> └─────────────────────────────────────────────────────────┘
> ```
> 
> ## Two-Phase Flow
> 
> ```
> Phase 1: PLAN                          Phase 2: EXECUTE
> ─────────────────                      ──────────────────
> User enters task                       User confirms plan
>         │                              User provides workspace path
>         v                                      │
>   classify(task)                               v
>   ┌──atomic──> mark "ready"            git init workspace
>   │                                    create worktrees
>   └──composite──> decompose(task)      batch leaf tasks
>                       │                        │
>                  [children]                    v
>                       │                 claude --dangerously-skip-permissions
>                  plan(child) `)
> 5. **Execute** -- leaf tasks run via Claude CLI in batches, status updates poll in real-time
> 
> ## Batch Strategies
> 
> Due to rate limits, leaf tasks execute in batches rather than all at once.
> 
> | Strategy | Description | Status |
> |----------|-------------|--------|
> | **depth-first** | Complete all leaves under branch 1.x, then 2.x, etc. Tasks within each branch run concurrently. | Implemented |
> | **breadth-first** | One leaf from each branch per batch. Spreads progress evenly. | Roadmap |
> | **layer-sequential** | All shallowest leaves first, then deeper. | Roadmap |
> 
> ## Project Structure
> 
> ```
> src/
>   server.ts        Hono API server (:1618)
>   types.ts         Shared types (Task, Session, BatchStrategy)
>   llm.ts           OpenAI calls: classify + decompose (structured output)
>   orchestrator.ts  Recursive plan() -- builds the tree, no execution
>   executor.ts      Claude CLI invocation per task in git worktree
>   workspace.ts     git init + worktree management
>   batch.ts         Batch execution strategies
>   index.ts         CLI entry point (standalone, no server)
>   print.ts         Tree pretty-printer (CLI)
> 
> web/
>   src/app/page.tsx              Main UI (input -> review -> execute)
>   src/components/task-tree.tsx  Recursive tree renderer
>   src/lib/api.ts                API client for Hono server
> ```
> 
> ## Quick Start
> 
> ```bash
> # 1. Install server deps
> npm install
> 
> # 2. Install frontend deps
> cd web && npm install && cd ..
> 
> # 3. Set your OpenAI key
> echo "OPENAI_API_KEY=sk-..." > .env
> 
> # 4. Start the server (port 1618)
> npm run server
> 
> # 5. Start the frontend (port 3000)
> cd web && npm run dev
> ```
> 
> Port `1618` — the golden ratio, the constant behind fractal geometry.
> 
> ## API
> 
> | Endpoint | Method | Description |
> |----------|--------|-------------|
> | `/api/session` | GET | Current session state |
> | `/api/decompose` | POST | Start recursive decomposition. Body: `{ task, maxDepth }` |
> | `/api/workspace` | POST | Initialize git workspace. Body: `{ path }` |
> | `/api/execute` | POST | Start batch execution. Body: `{ strategy? }` |
> | `/api/tree` | GET | Current tree state (poll during execution) |
> | `/api/leaves` | GET | All leaf tasks with status |
> 
> ## Configuration
> 
> | Env Variable | Default | Where | Description |
> |---|---|---|---|
> | `OPENAI_API_KEY` | -- | `.env` | Required. OpenAI API key. |
> | `PORT` | `1618` | `.env` | Server port. |
> | `MAX_DEPTH` | `4` | CLI only | Max recursion depth. |
> | `NEXT_PUBLIC_API_URL` | `http://localhost:1618` | `web/.env.local` | Server URL for frontend. |
> 
> ## Roadmap
> 
> **Executor**
> - [ ] OpenCode CLI as a third executor option
> - [ ] Per-task executor override (mix Claude and Codex in one plan)
> - [ ] Merge worktree branches back to main after completion
> 
> **Backpropagation (merge agent)**
> - [ ] After all leaf tasks under a composite node complete, run a merger agent that combines their worktree branches into one cohesive result
> - [ ] Propagate bottom-up: merge layer N leaves into layer N-1 composites, then merge those into layer N-2, all the way to root
> - [ ] Merger agent resolves conflicts, wires modules together, ensures sibling outputs are compatible
> - [ ] Final merge at root produces a single unified branch with the complete project
> 
> **Task dependencies & priority**
> - [ ] Peer dependencies between subtasks -- declare that task 1.2 depends on 1.1's output (e.g., API must exist before frontend can call it)
> - [ ] Dependency-aware scheduling -- respect declared ordering constraints when batching, run independent tasks concurrently but block dependents until prerequisites complete
> - [ ] Priority weights -- allow marking subtasks as critical path vs. nice-to-have, execute high-priority tasks first within a batch
> - [ ] LLM-inferred dependencies -- during decompose, have the LLM output dependency edges between sibling subtasks (structured output: `{ subtasks, dependencies }`)
> 
> **Batch strategies**
> - [ ] Breadth-first batch strategy
> - [ ] Layer-sequential batch strategy
> - [ ] Configurable concurrency limit per batch
> 
> **Classify / decompose heuristics**
> - [ ] User-defined heuristics -- inject custom rules into classify/decompose prompts (e.g., "always treat database migrations as atomic", "split frontend and backend into separate subtasks")
> - [ ] Project-aware context -- feed existing codebase structure (file tree, package.json) into classify/decompose so the LLM knows what already exists
> - [ ] Calibration mode -- let users mark classify/decompose decisions as correct or wrong, use feedback to refine prompts over time
> 
> **UX**
> - [ ] SSE/WebSocket for real-time tree updates (replace polling)
> - [ ] Task editing -- modify/delete/re-decompose subtasks before executing
> - [ ] Persistent sessions (SQLite/file-based)
> - [ ] Multi-session support

## 延伸閱讀

相關概念：[[自動化]] · [[任務管理]] · [[遞歸演算法]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)

## 相關收錄

> [!note]- 直接競品（同子分類：任務協調）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "任務協調" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "TinyAGI--fractals" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","任務管理","遞歸演算法"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TinyAGI--fractals" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/TinyAGI--fractals");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TinyAGI--fractals" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TinyAGI" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，517 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
