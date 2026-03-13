---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 458
stars_per_day: 51
forks: 61
open_issues: 1
created: 2026-03-03
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "代理管理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個開源的 AI 代理指揮中心，方便管理和監控 OpenClaw AI 代理團隊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
issue_close_rate: 88
repo_size_kb: 2454
readme_length: 8373
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:386,2026-03-11:390,2026-03-13:458"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個開源的 AI 代理指揮中心，方便管理和監控 OpenClaw AI 代理團隊。"
---

# clawport-ui

**458** stars · **51** stars/天 · 建立 9 天前 · TypeScript · MIT

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

`easy-install`

> [!summary] 一句話摘要
> 提供一個開源的 AI 代理指揮中心，方便管理和監控 OpenClaw AI 代理團隊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (51 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要一個集中管理多個 AI 代理的開發團隊，特別是使用 OpenClaw 的團隊。
> **一句話重點** ClawPort 的設計讓 AI 代理的管理變得簡單而高效，特別適合需要多代理協作的開發團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理管理" && p.file.name !== "JohnRiceML--clawport-ui" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個功能強大的代理管理工具，值得投入。

> [!abstract] 核心創新
> ClawPort 提供了一個集成的儀表板，無需額外的 API 金鑰即可管理和監控 AI 代理。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI 代理而設計。使用者可以透過 ClawPort 直接與 AI 代理進行聊天，並且能夠查看組織圖、任務看板、排程監控、成本追蹤等功能。它的核心機制是透過 OpenClaw 網關進行所有 AI 操作，這樣使用者無需額外的 API 金鑰，簡化了設置過程。CLI 指令 `clawport setup` 可以自動檢測配置並寫入環境變數，隨後使用 `clawport dev` 啟動儀表板。技術上，ClawPort 基於 Next.js 和 React，並使用 Tailwind CSS 進行樣式設計，這使得開發者能夠快速構建和部署。

與其他類似工具相比，如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy，ClawPort 提供了更為全面的功能集，特別是在實時監控和任務管理方面。這使得它在需要多代理協作的情境下特別適合。使用者可以輕鬆地從 OpenClaw 獲取代理資訊，並在一個平台上進行管理，這樣的設計大大提高了工作效率。ClawPort 目前仍在活躍開發中，社群回應迅速，且有著良好的問題解決率，這對於希望在生產環境中使用的團隊來說是個加分項。對於小型團隊或新創公司，ClawPort 是一個值得考慮的選擇，因為它不僅功能強大，且易於上手。

**技術棧**：`Next.js 16` · `React 19` · `TypeScript 5` · `Tailwind CSS 4`

## 重點功能

- Org Map — 互動式組織圖，顯示代理團隊的層級和狀態。
- Chat — 支持文本、圖像和語音消息的即時聊天功能。
- Kanban — 任務管理看板，支持拖放操作。
- Cron Monitor — 實時監控所有排程任務的狀態。
- Cost Dashboard — 提供詳細的成本分析和異常檢測。
- Activity Console — 歷史日誌瀏覽器，支持實時日誌流。
- Memory Browser — 團隊記憶和日誌的瀏覽，支持 Markdown 渲染。
- Auto-Discovery — 自動發現 OpenClaw 工作區中的代理。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行 onboarding 向導
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 啟動 ClawPort 儀表板
```bash
clawport dev
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 OpenClaw 並運行。",
  "指令": "clawport setup",
  "預期輸出": "自動檢測 OpenClaw 配置並寫入 .env.local"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 458 stars（51/天），forks 61（13.3%），顯示出良好的社群關注度。開發者 JohnRiceML 之前在 OpenClaw 領域有過豐富的經驗，這使得 ClawPort 能夠針對 AI 代理管理的痛點提供解決方案。這個工具的出現是因為市場上缺乏一個集成多功能的 AI 代理管理平台，之前的解決方案往往需要多個工具來完成相同的任務。隨著 AI 應用的普及，對於這類工具的需求也在增加。forks/stars 比率為 13.3%，顯示出不少使用者對於修改和擴展的興趣。

## 適合誰使用

**目標受眾**：需要一個集中管理多個 AI 代理的開發團隊，特別是使用 OpenClaw 的團隊。

> [!example] 使用場景
> - AI 產品經理用它來監控多個 AI 代理的任務進度，因為可以在一個儀表板上查看所有代理的狀態，節省了時間。
> - 開發者用它來進行實時聊天和協作，因為 ClawPort 支持多種媒介的即時通訊，提升了團隊的溝通效率。
> - 運維工程師用它來追蹤 AI 代理的運行成本，因為它提供了詳細的成本分析和異常檢測功能，幫助控制預算。

## 架構分析

ClawPort 採用 Next.js 作為前端框架，並通過 OpenClaw 網關進行所有 AI 操作。這樣的設計使得用戶能夠在一個統一的平台上管理多個代理，並且簡化了 API 認證的過程。資料流方面，ClawPort 直接從 OpenClaw 工作區讀取代理資訊，並通過 REST API 與 OpenClaw 進行交互。

選擇 Next.js 使得開發者能夠利用其強大的路由和伺服器端渲染功能，這對於需要即時更新的應用特別重要。這種架構的代價在於可能會增加初期的學習曲線，對於不熟悉 React 的開發者來說，可能需要額外的時間來適應。整體而言，這個設計在擴展性上表現良好，但在處理大量代理時可能會面臨性能挑戰。

## 技術深入分析

ClawPort 的核心技術機制是基於 Next.js 和 React，這使得它能夠提供即時的用戶體驗。使用 React Flow 來構建組織圖，這樣的選擇使得用戶能夠直觀地查看代理的層級和狀態。效能方面，ClawPort 能夠處理多個代理的即時通訊，但在代理數量過多時，可能會出現延遲。選擇 Next.js 使得開發者能夠利用其伺服器端渲染的優勢，這對於 SEO 和初次加載速度都有幫助。依賴樹方面，ClawPort 的依賴相對輕量，主要依賴於 React 和 Tailwind CSS，這減少了潛在的安全風險。技術風險方面，未來在擴展到更大規模的代理時，可能會遇到性能瓶頸，這需要在設計上提前考慮。整合方面，ClawPort 與 OpenClaw 的整合非常緊密，這使得使用者能夠無縫地管理代理，但也意味著對 OpenClaw 的依賴性較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，安裝過程順暢。提供了良好的入門指南，並且文件有多語言支持。整體來說，花 30 分鐘就能順利跑起來。

## 優缺點分析

> [!success] 優點
> - 集成多種功能於一體，無需額外 API 金鑰。
> - 即時監控和任務管理，提升團隊效率。
> - 良好的社群支持和活躍的開發進度。

> [!danger] 缺點
> - 需要依賴 OpenClaw 的運行，無法獨立使用。
> - 對於大型團隊可能存在性能瓶頸。
> - 目前僅支持本地部署，缺乏雲端選項。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本。
> - 需要一個運行中的 OpenClaw 實例。
> - 目前僅支持本地部署，未提供雲端解決方案。
> - 在大型代理團隊中可能會遇到性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而 ClawPort 提供全面的 AI 代理管理功能，適合需要多代理協作的場景。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 WebSocket 代理，而 ClawPort 提供了更為豐富的用戶界面和功能集。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，並不提供 AI 代理管理功能。 | 如果你的需求僅限於文件同步，而不需要管理多個 AI 代理。 | low，因為功能範圍不同，遷移成本低。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 WebSocket 代理，缺乏全面的管理功能。 | 如果你的應用場景需要專注於 WebSocket 代理，而不需要其他功能。 | medium，因為需要重新設計部分架構以適應不同的功能需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawport-ui** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，並不提供 AI 代理管理功能。 | 主要用於 WebSocket 代理，缺乏全面的管理功能。 |
> | 遷移成本 | - | low，因為功能範圍不同，遷移成本低。 | medium，因為需要重新設計部分架構以適應不同的功能需求。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於文件同步，而不需要管理多個 AI 代理。 | 如果你的應用場景需要專注於 WebSocket 代理，而不需 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊進行試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，OpenClaw 的啟動可能會失敗，導致無法連接到 ClawPort。
  - 解法：檢查 OpenClaw 的安裝和配置，確保其正常運行。
- [MEDIUM] 使用者在設置過程中可能會遇到環境變數未正確寫入的問題。
  - 解法：手動檢查 .env.local 文件，確保所有必要的變數都已設置。
- [MEDIUM] 在大型代理團隊中，可能會出現性能下降的情況。
  - 解法：考慮分散代理管理，或優化代理的配置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的開發團隊需要管理多個 AI 代理 | 非常適合 | 功能全面且易於上手，適合小型團隊的需求。 |
| 大型企業需要高效的 AI 代理管理 | 普通 | 在代理數量過多時可能會遇到性能瓶頸。 |
| 需要快速原型開發的創業公司 | 非常適合 | 快速上手且功能豐富，適合快速迭代。 |
| 對於不熟悉 OpenClaw 的開發者 | 不適合 | 需要依賴 OpenClaw 的運行，對新手有一定的學習曲線。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個功能強大的代理管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawPort 本身不需要高權限，僅需訪問 OpenClaw 的 API。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 61 |
| Open Issues | 1 |
| Issue 解決率 | 88% (7 closed) |
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

**社群活躍度**：社群活躍，問題解決率高達 88%。
**連結**：[文件](https://clawport.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-12）
> **活躍天數** 3 天 · **最新 commit** Fix onboarding wizard not re-triggering after workspace change + add contributor guardrails

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/JohnRiceML/clawport-ui/issues/15) | Bug Report: ClawPort Messages feature fails with "Error gett `bug` | 0 | 0 |

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

相關概念：[[CLI/TUI]] · [[AI 代理]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理管理" AND file.name != "JohnRiceML--clawport-ui"
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
> const concepts = ["CLI/TUI","AI 代理","自動化"];
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
