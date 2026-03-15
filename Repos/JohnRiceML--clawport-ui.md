---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 502
stars_per_day: 46
forks: 69
open_issues: 2
created: 2026-03-03
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "AI 代理管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "為 Claude AI 代理團隊提供的開源指揮中心，整合管理、監控和聊天功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 80
repo_size_kb: 2454
readme_length: 8373
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:386,2026-03-11:390,2026-03-13:458,2026-03-14:482,2026-03-15:502"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "為 Claude AI 代理團隊提供的開源指揮中心，整合管理、監控和聊天功能。"
---

# clawport-ui

**502** stars · **46** stars/天 · 建立 11 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/JohnRiceML--clawport-ui");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 為 Claude AI 代理團隊提供的開源指揮中心，整合管理、監控和聊天功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (46 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要集中管理多個 AI 代理並希望提升團隊協作效率的中小型企業。
> **一句話重點** ClawPort 的設計讓 AI 代理的管理變得更加直觀和高效，特別適合需要集中管理的團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理管理" && p.file.name !== "JohnRiceML--clawport-ui" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的 AI 代理管理工具，值得考慮。

> [!abstract] 核心創新
> ClawPort 提供了一個集中式的儀表板，整合了多種管理功能，無需額外的 AI API 金鑰。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI 代理而設計。用戶可以透過它直接與 AI 代理進行對話，並獲取組織圖、任務看板、計劃監控、成本追蹤等功能。安裝後，使用者只需透過 `clawport setup` 命令自動檢測 OpenClaw 配置，並啟動儀表板，無需額外的 API 金鑰，所有請求都通過 OpenClaw 網關進行。這樣的設計使得整合過程簡化，降低了使用門檻。技術上，ClawPort 使用了 React 和 Next.js 框架，並依賴於多個現代 JavaScript 庫，如 Tailwind CSS 和 Vitest，提供良好的開發和測試體驗。

與同類工具相比，ClawPort 不僅提供了實時聊天功能，還有任務管理和日誌流功能，這在其他工具中並不常見。對於需要集中管理多個 AI 代理的團隊，ClawPort 提供了一個直觀的界面和豐富的功能，適合中小型團隊使用。雖然目前仍在開發中，存在一些性能問題，但其活躍的社群和持續的更新顯示出未來的潛力。對於希望提升 AI 代理管理效率的團隊，ClawPort 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `Next.js 16.1.6` · `Tailwind CSS 4`

## 重點功能

- 組織圖 — 互動式組織圖，顯示代理團隊的層級和狀態。
- 即時聊天 — 支持文本、圖像和語音消息的即時聊天功能，並可持久化對話。
- 任務看板 — 拖放式任務管理，方便跨代理協作。
- 日誌流 — 實時顯示代理活動的日誌，便於監控和調試。
- 成本追蹤 — 提供代幣使用情況和優化建議，幫助控制開支。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行 onboarding wizard
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 啟動儀表板
```bash
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 502 stars（46/天），forks 69（13.7%），顯示出不錯的增長潛力。作者 JohnRiceML 之前有開發 OpenClaw，這使得 ClawPort 能夠無縫整合進其生態系統。這個工具解決了管理多個 AI 代理時的繁瑣問題，之前的解決方案往往缺乏集中化的管理界面。社群的活躍度和開發者的回應速度都顯示出這個專案的潛力。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI 代理並希望提升團隊協作效率的中小型企業。

> [!example] 使用場景
> - AI 團隊經理用它來集中管理多個 AI 代理，因為 ClawPort 提供了直觀的組織圖和任務看板，讓管理變得更有效率。
> - 開發者用它來實時監控 AI 代理的活動和性能，因為它的日誌流功能能夠即時顯示代理的運行狀態，便於快速調整。
> - 產品經理用它來追蹤 AI 代理的成本和使用情況，因為 ClawPort 提供了詳細的成本追蹤和優化建議，幫助做出更好的預算決策。

## 架構分析

ClawPort 採用單頁應用架構，基於 Next.js 進行開發，這使得其能夠快速加載和響應用戶操作。資料流通過 OpenClaw 網關進行，所有請求都經由此進行處理，這樣的設計減少了對外部 API 的依賴，並提升了安全性。使用 React 進行前端開發，提供了良好的用戶體驗和互動性。選擇 Next.js 使得 SSR 和靜態生成成為可能，這對於 SEO 和性能都有所幫助。擴展性方面，由於依賴於 Node.js 和現代 JavaScript 庫，未來可以輕鬆添加新功能或整合其他服務。

## 技術深入分析

ClawPort 的核心技術機制是基於 Next.js 和 React 的單頁應用架構，這使得其能夠快速加載和響應用戶操作。使用 OpenClaw 作為後端，所有的請求都經由 OpenClaw 網關進行，這樣的設計減少了對外部 API 的依賴，並提升了安全性。效能方面，ClawPort 目前的瓶頸在於其對 OpenClaw 的依賴，若 OpenClaw 出現性能問題，ClawPort 也會受到影響。選擇 TypeScript 提供了靜態類型檢查，降低了潛在的錯誤。設計上，ClawPort 目前的依賴樹相對簡單，主要依賴於 React 和 Next.js，這使得未來的維護和擴展相對容易。技術風險方面，若 OpenClaw 的更新不兼容，可能會導致 ClawPort 的功能受限。整合方面，ClawPort 與現有的開發工具鏈（如 VS Code）相容性良好，並可輕鬆集成到 CI/CD 流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解 OpenClaw 的設定。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 提供集中式的管理界面，提升團隊協作效率。
> - 即時聊天和日誌流功能，便於快速調整和監控。
> - 無需額外的 API 金鑰，簡化了使用流程。

> [!danger] 缺點
> - 仍在開發中，可能存在性能問題。
> - 不支持最新版本的 OpenClaw，可能影響使用。
> - 安裝和配置過程對新手來說可能有一定的學習曲線。

> [!warning] 注意事項
> - 目前仍在開發中，可能存在性能問題。
> - 不支持最新版本的 OpenClaw (version 2026.3.11)。
> - 需要 Node.js 22 以上版本才能運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [JohnRiceML/OpenClaw](https://github.com/JohnRiceML/OpenClaw) | OpenClaw 是 ClawPort 的基礎，專注於 AI 代理的運行和管理，而 ClawPort 提供了可視化的管理界面。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於資料同步，而 ClawPort 提供了全面的 AI 代理管理功能，包括聊天和任務管理。 |
| [TianyiDataScience/openclaw-control-center](https://github.com/TianyiDataScience/openclaw-control-center) | openclaw-control-center 也提供管理功能，但缺乏 ClawPort 的即時聊天和日誌流功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [TianyiDataScience/openclaw-control-center](https://github.com/TianyiDataScience/openclaw-control-center) | openclaw-control-center 專注於 OpenClaw 的管理，但功能較為簡單，缺乏 ClawPort 的即時聊天和任務管理功能。 | 如果你的團隊只需要基本的 OpenClaw 管理功能，而不需要即時聊天或任務看板。 | low，因為兩者都基於 OpenClaw，遷移過程相對簡單。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於資料同步，而 ClawPort 提供了全面的 AI 代理管理功能，包括聊天和任務管理。 | 如果你的需求主要是資料同步，而不需要 AI 代理的管理功能。 | medium，因為需要重新設計整個管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawport-ui** | **openclaw-control-center** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | openclaw-control-center 專注於 OpenClaw 的管理，但功能較為簡單，缺乏 ClawPort 的即時聊天和任務管理功能。 | parsync 專注於資料同步，而 ClawPort 提供了全面的 AI 代理管理功能，包括聊天和任務管理。 |
> | 遷移成本 | - | low，因為兩者都基於 OpenClaw，遷移過程相對簡單。 | medium，因為需要重新設計整個管理流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊只需要基本的 OpenClaw 管理功能，而不需 | 如果你的需求主要是資料同步，而不需要 AI 代理的管理功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 OpenClaw 版本不兼容的問題
  - 解法：確保使用與 ClawPort 相容的 OpenClaw 版本
- [MEDIUM] 性能問題可能導致使用體驗不佳
  - 解法：定期檢查更新，並參與社群反饋以獲得最佳性能
- [MEDIUM] 某些功能在低效能環境下可能無法正常運行
  - 解法：建議在具備較高性能的環境中運行 ClawPort

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | ClawPort 提供了集中管理和即時監控的功能，能夠有效提升團隊效率。 |
| 大型企業的 AI 代理管理 | 普通 | 雖然功能強大，但可能不適合需要高度自定義的環境。 |
| 個人開發者的 AI 專案 | 非常適合 | 簡單易用的界面和功能，適合個人開發者快速上手。 |
| 需要高性能的生產環境 | 不適合 | 目前仍在開發中，性能尚未穩定，可能影響生產環境的運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的 AI 代理管理工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawPort 主要依賴於 OpenClaw 的安全性，並不需要高權限操作。所有敏感資料均通過 OpenClaw 網關進行處理，降低了安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
| Forks | 69 |
| Open Issues | 2 |
| Issue 解決率 | 80% (8 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JohnRiceML/clawport-ui) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@dagrejs/dagre` `@tailwindcss/postcss` `@types/node` `@types/react` `@types/react-dom` `@xyflow/react` `class-variance-authority` `clsx` `lucide-react` `next` `openai` `radix-ui` `react` `react-dom` `tailwind-merge`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JohnRiceML](https://github.com/JohnRiceML) | 99 |
> | [@mamercad](https://github.com/mamercad) | 1 |
> | [@zackbart](https://github.com/zackbart) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 80%。
**連結**：[文件](https://clawport.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-12）
> **活躍天數** 3 天 · **最新 commit** Fix onboarding wizard not re-triggering after workspace change + add contributor guardrails

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/JohnRiceML/clawport-ui/issues/17) | It is so slow `bug` | 0 | 1 |
> | [#16](https://github.com/JohnRiceML/clawport-ui/issues/16) | 不支持最新版本的openclaw(version 2026.3.11) `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ClawPort
> 
> **A visual command centre for your AI agent team.**
> 
> [](https://www.npmjs.com/package/clawport-ui)
> [](LICENSE)
> [](#testing)
> 
> [Website](https://clawport.dev) | [Setup Guide](SETUP.md) | [API Docs](docs/API.md) | [npm](https://www.npmjs.com/package/clawport-ui)
> 
> ---
> 
> ClawPort is an open-source dashboard for managing, monitoring, and talking directly to your [OpenClaw](https://openclaw.ai) AI agents. It connects to your local OpenClaw gateway and gives you an org chart, direct agent chat with vision and voice, a kanban board, cron monitoring, cost tracking, an activity console with live log streaming, and a memory browser -- all in one place.
> 
> No separate AI API keys needed. Everything routes through your OpenClaw gateway.
> 
> More screenshots
> 
> | | |
> |---|---|
> |  |  |
> | **Chat** -- streaming text, vision, voice, file attachments | **Kanban** -- drag-and-drop task board across agents |
> |  |  |
> | **Pipelines** -- DAG visualization with health checks | **Schedule** -- weekly heatmap and job management |
> |  |  |
> | **Activity** -- historical log browser with JSON expansion | **Live Logs** -- real-time streaming widget |
> |  |  |
> | **Costs** -- token usage, anomalies, optimization insights | **Memory** -- team memory browser with markdown rendering |
> 
> ---
> 
> ## Quick Start
> 
> ### 1. Install OpenClaw
> 
> ClawPort requires a running [OpenClaw](https://openclaw.ai) instance. If you don't have one yet:
> 
> ```bash
> # Install OpenClaw
> curl -fsSL https://openclaw.ai/install.sh | bash
> 
> # Run the onboarding wizard (sets up workspace, gateway, and daemon)
> openclaw onboard --install-daemon
> ```
> 
> After onboarding, verify the gateway is running:
> 
> ```bash
> openclaw gateway status
> ```
> 
> You should see your gateway URL (default `localhost:18789`) and auth token. If you use a custom port, `clawport setup` will detect it automatically. See the [OpenClaw docs](https://docs.openclaw.ai/getting-started) for more detail.
> 
> ### 2. Install ClawPort
> 
> > **Note:** The npm package is `clawport-ui`. The CLI command is `clawport`.
> > Do not install the unrelated `clawport` package.
> 
> ```bash
> npm install -g clawport-ui
> ```
> 
> ### 3. Connect and Launch
> 
> ```bash
> # Auto-detect your OpenClaw config and write .env.local
> clawport setup
> 
> # Start the dashboard
> clawport dev
> ```
> 
> Open [http://localhost:3000](http://localhost:3000). The onboarding wizard walks you through naming your portal, picking a theme, and setting up your operator identity.
> 
> Install from source instead
> 
> ```bash
> git clone https://github.com/JohnRiceML/clawport-ui.git
> cd clawport-ui
> npm install
> npm run setup
> npm run dev
> ```
> 
> ---
> 
> ## Features
> 
> - **Org Map** -- Interactive org chart of your entire agent team. Hierarchy, cron status, and relationships at a glance. Powered by React Flow with auto-layout.
> - **Chat** -- Streaming text chat, image attachments with vision, voice messages with waveform playback, file attachments, clipboard paste and drag-and-drop. Conversations persist locally.
> - **Kanban** -- Task board for managing work across agents. Drag-and-drop cards with agent assignment and chat context.
> - **Cron Monitor** -- Live status of all scheduled jobs. Filter by status, sort errors to top, expand for details. Auto-refreshes every 60 seconds.
> - **Cost Dashboard** -- Token usage and cost analysis across all cron jobs. Daily cost chart, per-job breakdown, model distribution, anomaly detection, week-over-week trends, and cache savings.
> - **Activity Console** -- Log browser for historical events plus a floating live stream widget. Click any log row to expand the raw JSON. The live stream widget persists across page navigation.
> - **Memory Browser** -- Read team memory, long-term memory, and daily logs. Markdown rendering, JSON syntax highlighting, search, and download. Guide tab with categorized best practices.
> - **Agent Detail** -- Full profile per agent: SOUL.md viewer, tools, hierarchy, crons, voice ID, and direct chat link.
> - **Five Themes** -- Dark, Glass, Color, Light, and System. All CSS custom properties -- switch instantly.
> - **Auto-Discovery** -- Automatically finds agents from your OpenClaw workspace. No config file needed.
> 
> ---
> 
> ## How It Works
> 
> ClawPort reads your OpenClaw workspace to discover agents, then connects to the gateway for all AI operations:
> 
> ```
> Browser  -->  ClawPort (Next.js)  -->  OpenClaw Gateway (localhost:18789 default)  -->  Claude
>                   |                          |
>                   |                     Text: /v1/chat/completions (streaming SSE)
>                   |                     Vision: openclaw gateway call chat.send (CLI)
>                   |                     Audio: /v1/audio/transcriptions (Whisper)
>                   |
>              Reads from:
>                $WORKSPACE_PATH/agents/    (agent SOUL.md files)
>                $WORKSPACE_PATH/memory/    (team memory)
>                openclaw cron list         (scheduled jobs)
> ```
> 
> All AI calls -- chat, vision, TTS, transcription -- route through the gateway. One token, no separate API keys.
> 
> ---
> 
> ## Configuration
> 
> ### Required Environment Variables
> 
> | Variable | Description | How to find it |
> |----------|-------------|----------------|
> | `WORKSPACE_PATH` | Path to your OpenClaw workspace | Default: `~/.openclaw/agents/main/workspace` (or legacy `~/.openclaw/workspace`) |
> | `OPENCLAW_BIN` | Path to the `openclaw` binary | Run `which openclaw` |
> | `OPENCLAW_GATEWAY_TOKEN` | Gateway auth token | Run `openclaw gateway status` |
> 
> ### Optional
> 
> | Variable | Description |
> |----------|-------------|
> | `ELEVENLABS_API_KEY` | ElevenLabs API key for voice indicators on agent profiles |
> 
> Running `clawport setup` auto-detects all required values and writes `.env.local`. When installed globally, if the package directory isn't writable, setup writes to `~/.config/clawport-ui/.env.local` instead. See [SETUP.md](SETUP.md) for manual configuration, agent customization, and troubleshooting.
> 
> ---
> 
> ## Agent Discovery
> 
> ClawPort automatically discovers agents from your OpenClaw workspace. No configuration file needed.
> 
> **What it scans:**
> - `$WORKSPACE_PATH/SOUL.md` -- root orchestrator
> - `$WORKSPACE_PATH/IDENTITY.md` -- root agent name and emoji
> - `agents//SOUL.md` -- top-level agents
> - `agents//sub-agents/*.md` -- flat sub-agent files
> - `agents//members/*.md` -- team member files
> - `agents///SOUL.md` -- nested subdirectory agents
> 
> **What it ignores:**
> - Directories without `SOUL.md` (e.g., `briefs/`, data files)
> - Non-`.md` files in `sub-agents/` and `members/`
> 
> For full control over names, colors, hierarchy, and tools, create `$WORKSPACE_PATH/clawport/agents.json`. See [SETUP.md](SETUP.md) for the schema and examples.
> 
> ---
> 
> ## CLI
> 
> ```bash
> clawport dev      # Start the development server
> clawport start    # Build and start production server
> clawport setup    # Auto-detect OpenClaw config, write .env.local
> clawport status   # Check gateway reachability and config
> clawport help     # Show usage
> ```
> 
> ---
> 
> ## Testing
> 
> ```bash
> npm test             # 781 tests across 32 suites (Vitest)
> npx tsc --noEmit     # Type-check (zero errors)
> npx next build       # Production build
> ```
> 
> ---
> 
> ## Stack
> 
> - [Next.js 16](https://nextjs.org) (App Router, Turbopack)
> - [React 19](https://react.dev) / [TypeScript 5](https://typescriptlang.org)
> - [Tailwind CSS 4](https://tailwindcss.com)
> - [React Flow](https://reactflow.dev) -- org chart
> - [Vitest 4](https://vitest.dev) -- testing
> - [OpenClaw](https://openclaw.ai) -- AI gateway and agent runtime
> 
> ---
> 
> ## Documentation
> 
> | Document | Description |
> |----------|-------------|
> | [SETUP.md](SETUP.md) | Full setup guide, agent customization, troubleshooting |
> | [docs/API.md](docs/API.md) | REST API reference for all endpoints |
> | [docs/COMPONENTS.md](docs/COMPONENTS.md) | UI component catalog (50+ components) |
> | [docs/THEMING.md](docs/THEMING.md) | Theme system, CSS tokens, settings API |
> | [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
> | [CHANGELOG.md](CHANGELOG.md) | Version history |
> | [docs/OPENCLAW.md](docs/OPENCLAW.md) | O

## 延伸閱讀

相關概念：[[AI 代理管理]] · [[即時通訊]] · [[資料視覺化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理管理" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "JohnRiceML--clawport-ui" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 代理管理","即時通訊","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JohnRiceML--clawport-ui" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JohnRiceML--clawport-ui" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JohnRiceML" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
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

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
