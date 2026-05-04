---
repo: nexu-io/open-design
url: https://github.com/nexu-io/open-design
owner: nexu-io
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "🎨 Local-first open replica of Anthropic's Claude Design. ⚡ 19 Skills · ✨ 71 brand-grade Design Systems · 🖼️ sandboxed preview · 📦 HTML/PDF/PPTX export. 🤖 Runs on Claude Code / Codex / Cursor / Gemini CLI / OpenCode / Qwen."
homepage: "https://github.com/nexu-io/open-design"
stars: 19565
stars_per_day: 3913
forks: 2168
open_issues: 109
created: 2026-04-28
pushed_at: 2026-05-04
first_seen: 2026-04-29
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-29
use_case: "提供一個本地優先的開源設計工具，讓使用者能夠利用現有的編碼代理進行設計工作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-07"
contributor_count: 2
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 16352
readme_length: 9912
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-29"
star_history: "2026-04-29:1292,2026-04-30:4442,2026-05-01:8359,2026-05-02:11910,2026-05-03:16135,2026-05-04:19565"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - "topic/ai_agents"
  - "topic/ai_design"
  - "topic/anthropic"
  - "topic/byok"
  - "topic/claude"
aliases:
  - "open-design"
  - "nexu-io/open-design"
  - "提供一個本地優先的開源設計工具，讓使用者能夠利用現有的編碼代理進行設計工作。"
---

# open-design

**1.3k** stars · **1.3k** stars/天 · 建立 1 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/nexu-io--open-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai-agents` `ai-design` `anthropic` `byok` `claude` `claude-code` `claude-design` `codex` `coding-agents` `cursor` `design` `design-systems` `design-tools` `gemini-cli` `generative-ai` `llm` `local-first` `react` `skills` `typescript`

> [!summary] 一句話摘要
> 提供一個本地優先的開源設計工具，讓使用者能夠利用現有的編碼代理進行設計工作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.3k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要一個本地優先且靈活的設計工具的設計師和開發者。
> **一句話重點** 這個專案的核心價值在於提供一個靈活的本地設計工具，讓使用者能夠充分利用現有的編碼代理進行設計。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--open-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "nexu-io--open-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，能夠快速生成設計，值得一試。

> [!abstract] 核心創新
> Open Design 提供了一個本地優先的設計工具，無需依賴雲端服務，並支持多種編碼代理。

## 專案簡介

Open Design 是一個本地優先的開源設計工具，旨在取代 Anthropic 的 Claude Design。它允許使用者利用現有的編碼代理（如 Claude Code、Codex 等）來進行設計，並支持 19 種可組合的技能和 71 種品牌級設計系統。使用者只需輸入提示，系統會自動檢測可用的代理 CLI，並生成設計草圖和相關文件。這個工具的賣點在於其靈活性和無鎖定性，使用者可以將其部署到 Vercel，並在本地運行。核心功能包括即時的待辦事項流和沙盒預覽，這些功能使得設計過程更加直觀和高效。

技術上，它使用 TypeScript 和 React，並依賴於 SQLite 進行本地數據存儲，這使得它在性能和可擴展性上都有良好的表現。與其他工具相比，Open Design 提供了更高的靈活性，因為它不綁定於特定的設計代理，並且支持多種輸出格式（HTML、PDF、PPTX、ZIP）。不過，使用者可能會在初次設置時遇到一些問題，特別是在配置代理時。整體而言，這是一個適合需要快速原型設計和靈活部署的團隊或個人的工具，尤其是那些已經在使用相關編碼代理的使用者。未來六個月內，預計會有更多的功能和設計系統被添加進來，進一步提升其競爭力。

**技術棧**：`TypeScript` · `React` · `SQLite`

## 重點功能

- 本地優先設計 — 允許使用者在本地運行設計工具，無需依賴雲端服務。
- 多種技能支持 — 提供 19 種可組合的設計技能，滿足不同的設計需求。
- 71 種品牌級設計系統 — 內建多種設計系統，幫助使用者快速生成高品質設計。
- 即時待辦事項流 — 設計過程中的計劃和進度即時更新，提升工作效率。
- 沙盒預覽功能 — 所有生成的設計都可以在安全的環境中預覽，並支持多種輸出格式（HTML、PDF、PPTX、ZIP）。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/nexu-io/open-design.git
```
2. 進入專案目錄
```bash
cd open-design
```
3. 安裝依賴
```bash
pnpm install
```
4. 啟動開發環境
```bash
pnpm dev:all
```
5. 在瀏覽器中打開預覽
```bash
open http://localhost:5173
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和 pnpm",
  "指令": "pnpm dev:all",
  "預期輸出": "啟動 daemon 和 Vite 開發伺服器，並在瀏覽器中顯示設計工具介面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1292 stars（1292/天），forks 144（11.1%），這是極端爆發式增長。這個專案的作者 pftom 和 heylakatos 之前在開源設計領域有一定的經驗，這使得他們能夠針對 Claude Design 的限制提出有效的解決方案。Open Design 解決了使用者無法自我託管設計工具的痛點，並且提供了一個靈活的設計流程，這在市場上是相對少見的。最近的推廣活動和社群討論也為這個專案帶來了更多的曝光。這個工具的設計理念符合當前開源和本地優先的趨勢，讓使用者能夠在不依賴雲端服務的情況下進行設計。

## 適合誰使用

**目標受眾**：需要一個本地優先且靈活的設計工具的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來快速生成品牌級設計系統，因為它提供了 71 種設計系統和 19 種技能，能夠快速滿足多樣化的設計需求。
> - 產品經理用它來創建產品原型，因為即時的待辦事項流和沙盒預覽功能能夠加速設計迭代。
> - 開發者用它來整合設計與開發流程，因為它支持多種編碼代理，並且可以輕鬆部署到現有的工作環境中。

## 架構分析

Open Design 採用本地 daemon + Web 應用的架構設計，這樣的選擇使得使用者能夠在本地運行設計工具，並且不需要依賴雲端服務。資料流方面，當使用者輸入提示時，系統會自動檢測可用的代理 CLI，並將請求發送給選定的代理，生成設計草圖。這種設計使得使用者可以靈活選擇不同的編碼代理，並且能夠快速生成設計成果。選擇本地運行的代價是需要使用者自行配置環境，這對於新手來說可能會有一定的學習曲線。擴展性方面，由於使用 SQLite 作為本地數據存儲，未來可以輕鬆擴展更多的設計系統和技能。

## 技術深入分析

Open Design 的核心技術機制在於其本地 daemon 架構，這使得使用者能夠在本地運行設計工具，並且不需要依賴雲端服務。使用 TypeScript 和 React 進行開發，這樣的選擇使得開發者能夠快速構建和維護應用。效能方面，由於使用 SQLite 作為本地數據存儲，系統能夠快速讀寫數據，並且支持多種設計系統和技能的擴展。設計取捨方面，選擇本地運行的架構使得使用者能夠靈活選擇不同的編碼代理，但也帶來了配置上的挑戰。技術風險方面，使用者在配置代理時可能會遇到問題，特別是在初次使用時。整合分析方面，Open Design 可以輕鬆與現有的開發工具鏈整合，特別是在使用 Vercel 部署時，能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但對於新手來說，配置代理可能會有些挑戰。文件目前僅提供英文，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 靈活性高，支持多種編碼代理。
> - 本地優先設計，無需依賴雲端服務。
> - 提供多種輸出格式，滿足不同需求。

> [!danger] 缺點
> - 初次設置可能不夠友好，對新手有挑戰。
> - 某些功能仍在開發中，可能不穩定。
> - 需要 Node.js 環境，對於不熟悉的使用者有一定門檻。

> [!warning] 注意事項
> - 需要 Node.js 18 以上版本。
> - 初次設置可能需要配置代理，對新手不太友好。
> - 目前仍在開發中，某些功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 提供類似的設計流程，但主要是桌面應用，無法像 Open Design 一樣靈活部署。 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 專注於 PPT 輸出，而 Open Design 提供多種輸出格式，功能更全面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 使用桌面應用架構，而 Open Design 則是基於 Web 應用和本地 daemon，提供更高的靈活性。 | 如果你的團隊偏好桌面應用，且需要一個穩定的設計工具，可以考慮這個選項。 | medium，因為需要重新適應不同的使用流程。 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 專注於 PPT 輸出，而 Open Design 提供多種輸出格式，功能更全面。 | 如果你的主要需求是生成 PPT，且不需要其他設計功能，可以選擇這個工具。 | low，因為功能相對單一，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **open-design** | **open-codesign** | **guizang-ppt-skill** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用桌面應用架構，而 Open Design 則是基於 Web 應用和本地 daemon，提供更高的靈活性。 | 專注於 PPT 輸出，而 Open Design 提供多種輸出格式，功能更全面。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的使用流程。 | low，因為功能相對單一，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊偏好桌面應用，且需要一個穩定的設計工具，可以考慮 | 如果你的主要需求是生成 PPT，且不需要其他設計功能，可以選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人或小型團隊的試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 初次設置時可能無法自動檢測代理，導致無法啟動設計工具
  - 解法：手動配置 PATH 環境變數，確保代理 CLI 可用
- [MEDIUM] 某些功能在特定環境下可能不穩定，導致設計過程中斷
  - 解法：保持系統和依賴的最新版本，並定期檢查更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司設計團隊 | 非常適合 | 本地優先設計工具能夠快速上手，並且靈活應對多樣化需求。 |
| 大型企業的設計部門 | 普通 | 雖然功能強大，但初次設置可能對新手不友好。 |
| 需要快速原型設計的個人開發者 | 非常適合 | 即時的待辦事項流和沙盒預覽功能能夠加速設計迭代。 |
| 對設計流程有嚴格要求的團隊 | 不適合 | 目前仍在開發中，某些功能可能不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠快速生成設計，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--open-design");
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
> const me = dv.page("Repos/nexu-io--open-design");
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
| Forks | 144 |
| Open Issues | 13 |
| Issue 解決率 | 13% (2 closed) |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-28 |
| 官方網站 | [Link](https://github.com/nexu-io/open-design) |
| Repo 大小 | 16.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nexu-io/open-design) |
| Topics | `ai-agents` `ai-design` `anthropic` `byok` `claude` `claude-code` `claude-design` `codex` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/sdk` `better-sqlite3` `express` `multer` `react` `react-dom` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `concurrently` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 41
>     "HTML" : 38
>     "JavaScript" : 12
>     "CSS" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pftom](https://github.com/pftom) | 6 |
> | [@heylakatos](https://github.com/heylakatos) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有持續的開發和問題回應。
**連結**：[文件](https://github.com/nexu-io/open-design)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-28 ~ 2026-04-28）
> **活躍天數** 1 天 · **最新 commit** feat(dev): auto-switch ports on dev:all when defaults are busy (#9)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/nexu-io/open-design/issues/16) | Question, can this work directly against a Microsoft OpenAI  | 1 | 1 |
> | [#8](https://github.com/nexu-io/open-design/issues/8) | Add a Model Picker for each selected CLI | 1 | 1 |
> | [#21](https://github.com/nexu-io/open-design/issues/21) | 初次体验遇到以下问题 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Open Design
> 
> > **The open-source alternative to [Claude Design][cd].** Local-first, web-deployable, BYOK at every layer — your existing coding agent (Claude Code, Codex, Cursor Agent, Gemini CLI, OpenCode, Qwen) becomes the design engine, driven by **19 composable Skills** and **71 brand-grade Design Systems**.
> 
>   
> 
>   
>   
>   
>   
>   
> 
> English · 简体中文
> 
> ---
> 
> 
> ## Quickstart
> 
> ```bash
> git clone https://github.com/nexu-io/open-design.git
> cd open-design
> pnpm install         # or npm install
> pnpm dev:all         # daemon (:7456) + Vite (:5173)
> open http://localhost:5173
> ```
> 
> The first load:
> 
> 1. Detects which agent CLIs you have on `PATH` and picks one automatically.
> 2. Loads 19 skills + 71 design systems.
> 3. Pops the welcome dialog so you can paste an Anthropic key (only needed for the BYOK fallback path).
> 4. **Auto-creates `./.od/`** — the local runtime folder for the SQLite project DB, per-project artifacts, and saved renders. There is no `od init` step; the daemon `mkdir`s everything it needs on boot.
> 
> Type a prompt, hit **Send**, watch the question form arrive, fill it, watch the todo card stream, watch the artifact render. Click **Save to disk** or download as a project ZIP.
> 
> 
> ## Demo
> 
> Entry view — pick a skill, pick a design system, type the brief. The same surface for prototypes, decks, mobile apps, dashboards, and editorial pages.
> 
> Turn-1 discovery form — before the model writes a pixel, OD locks the brief: surface, audience, tone, brand context, scale. 30 seconds of radios beats 30 minutes of redirects.
> 
> Direction picker — when the user has no brand, the agent emits a second form with 5 curated directions (Monocle / Modern Minimal / Tech Utility / Brutalist / Soft Warm). One radio click → a deterministic palette + font stack, no model freestyle.
> 
> Live todo progress — the agent's plan streams as a live card. in_progress → completed updates land in real time. The user can redirect cheaply, mid-flight.
> 
> Sandboxed preview — every &lt;artifact&gt; renders in a clean srcdoc iframe. Editable in place via the file workspace; downloadable as HTML, PDF, ZIP.
> 
> 71-system library — every product system shows its 4-color signature. Click for the full DESIGN.md, swatch grid, and live showcase.
> 
> Deck mode (guizang-ppt) — the bundled guizang-ppt-skill drops in unchanged. Magazine layouts, WebGL hero backgrounds, single-file HTML output, PDF export.
> 
> Mobile prototype — pixel-accurate iPhone 15 Pro chrome (Dynamic Island, status bar SVGs, home indicator). Multi-screen prototypes use the shared /frames/ assets so the agent never re-draws a phone.
> 
> 
> ### Showcase examples
> 
> The visually distinctive skills you'll most likely run first. Each ships a real `example.html` you can open straight from the repo to see exactly what the agent will produce — no auth, no setup.
> 
> dating-web · prototypeConsumer dating / matchmaking dashboard — left rail nav, ticker bar, KPIs, 30-day mutual-matches chart, editorial typography.
> 
> digital-eguide · templateTwo-spread digital e-guide — cover (title, author, TOC teaser) + lesson spread with pull-quote and step list. Creator / lifestyle tone.
> 
> email-marketing · prototypeBrand product-launch HTML email — masthead, hero image, headline lockup, CTA, specs grid. Centered single-column, table-fallback safe.
> 
> gamified-app · prototypeThree-frame gamified mobile-app prototype on a dark showcase stage — cover, today's quests with XP ribbons + level bar, quest detail.
> 
> mobile-onboarding · prototypeThree-frame mobile onboarding flow — splash, value-prop, sign-in. Status bar, swipe dots, primary CTA.
> 
> motion-frames · prototypeSingle-frame motion-design hero with looping CSS animations — rotating type ring, animated globe, ticking timer. Hand-off ready for HyperFrames.
> 
> social-carousel · prototypeThree-card 1080×1080 social-media carousel — cinematic panels with display headlines that connect across the series, brand mark, loop affordance.
> 
> sprite-animation · prototypePixel / 8-bit animated explainer slide — full-bleed cream stage, animated pixel mascot, kinetic Japanese display type, looping CSS keyframes.
> 
> 
> ## Why this exists
> 
> Anthropic's [Claude Design][cd] (released 2026-04-17, Opus 4.7) showed what happens when an LLM stops writing prose and starts shipping design artifacts. It went viral — and stayed closed-source, paid-only, cloud-only, locked to Anthropic's model and Anthropic's skills. There is no checkout, no self-host, no Vercel deploy, no swap-in-your-own-agent.
> 
> **Open Design (OD) is the open-source alternative.** Same loop, same artifact-first mental model, none of the lock-in. We don't ship an agent — the strongest coding agents already live on your laptop. We wire them into a skill-driven design workflow that runs on `pnpm dev`, deploys to Vercel, and stays BYOK at every layer.
> 
> Type `make me a magazine-style pitch deck for our seed round`. The interactive question form pops up before the model improvises a single pixel. The agent picks one of five curated visual directions. A live `TodoWrite` plan streams into the UI. The daemon builds a real on-disk project folder with a seed template, layout library, and self-check checklist. The agent reads them — pre-flight enforced — runs a five-dimensional critique against its own output, and emits a single `` that renders in a sandboxed iframe seconds later.
> 
> That's not "AI tries to design something". That's an AI that has been trained, by the prompt stack, to behave like a senior designer with a working filesystem, a deterministic palette library, and a checklist culture — exactly the bar Claude Design set, but open and yours.
> 
> OD stands on four open-source shoulders:
> 
> - [**`alchaincyf/huashu-design`**](https://github.com/alchaincyf/huashu-design) — the design-philosophy compass. Junior-Designer workflow, the 5-step brand-asset protocol, the anti-AI-slop checklist, the 5-dimensional self-critique, and the "5 schools × 20 design philosophies" idea behind our direction picker — all distilled into [`src/prompts/discovery.ts`](src/prompts/discovery.ts).
> - [**`op7418/guizang-ppt-skill`**](https://github.com/op7418/guizang-ppt-skill) — the deck mode. Bundled verbatim under [`skills/guizang-ppt/`](skills/guizang-ppt/) with original LICENSE preserved; magazine-style layouts, WebGL hero, P0/P1/P2 checklists.
> - [**`OpenCoworkAI/open-codesign`**](https://github.com/OpenCoworkAI/open-codesign) — the UX north star and our closest peer. The first open-source Claude-Design alternative. We borrow its streaming-artifact loop, its sandboxed-iframe preview pattern (vendored React 18 + Babel), its live agent panel (todos + tool calls + interruptible generation), and its five-format export list (HTML / PDF / PPTX / ZIP / Markdown). We deliberately diverge on form factor — they are a desktop Electron app bundling [`pi-ai`][piai]; we are a web app + local daemon that delegates to your existing CLI.
> - [**`multica-ai/multica`**](https://github.com/multica-ai/multica) — the daemon-and-runtime architecture. PATH-scan agent detection, the local daemon as the only privileged process, the agent-as-teammate worldview.
> 
> 
> ## Comparison
> 
> | Axis | [Claude Design][cd] (Anthropic) | [Open CoDesign][ocod] | **Open Design** |
> |---|---|---|---|
> | License | Closed | MIT | **Apache-2.0** |
> | Form factor | Web (claude.ai) | Desktop (Electron) | **Web app + local daemon** |
> | Deployable on Vercel | ❌ | ❌ | **✅** |
> | Agent runtime | Bundled (Opus 4.7) | Bundled ([`pi-ai`][piai]) | **Delegated to user's existing CLI** |
> | Skills | Proprietary | 12 custom TS modules + `SKILL.md` | **19 file-based [`SKILL.md`][skill] bundles, droppable** |
> | Design system | Proprietary | `DESIGN.md` (v0.2 roadmap) | **`DESIGN.md` × 71 systems shipped** |
> | Provider flexibility | Anthropic only | 7+ via [`pi-ai`][piai] | **Whatever your agent supports** |
> | Init question form | ❌ | ❌ | **✅ Hard rule, turn 1** |
> | Direction picker | ❌ | ❌ | **✅ 5 deterministic directions** |
> | Live todo progress + tool stream | ❌ | ✅ | **✅** (UX pattern from open-codesign) |
> | Sand

## 延伸閱讀

相關概念：[[設計系統]] · [[開源]] · [[本地優先]]

相關專案：[[OpenCoworkAI--open-codesign|OpenCoworkAI/open-codesign]] · [[op7418--guizang-ppt-skill|op7418/guizang-ppt-skill]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/nexu-io/open-design) · [官方網站](https://github.com/nexu-io/open-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "nexu-io--open-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "nexu-io--open-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "nexu-io--open-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "nexu-io--open-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","開源","本地優先"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nexu-io--open-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nexu-io--open-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nexu-io--open-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nexu-io" AND file.name != "nexu-io--open-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nexu-io--open-design");
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
> const me = dv.page("Repos/nexu-io--open-design");
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
> const me = dv.page("Repos/nexu-io--open-design");
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
> const me = dv.page("Repos/nexu-io--open-design");
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
> const me = dv.page("Repos/nexu-io--open-design");
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

> **2026-04-29** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，19.6k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，16.1k stars
- [[2026-05-02|2026-05-02]] — 再次上榜，11.9k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，8.4k stars
- [[2026-04-30|2026-04-30]] — 再次上榜，4.4k stars
- [[2026-04-29|2026-04-29]] — 首次收錄，1.3k stars
