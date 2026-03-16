---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 519
stars_per_day: 43
forks: 73
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
use_case: "提供一個視覺化的指揮中心來管理和監控你的 AI 代理團隊。"
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
star_history: "2026-03-10:386,2026-03-11:390,2026-03-13:458,2026-03-14:482,2026-03-15:502,2026-03-16:519"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個視覺化的指揮中心來管理和監控你的 AI 代理團隊。"
---

# clawport-ui

**519** stars · **43** stars/天 · 建立 12 天前 · TypeScript · MIT

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
> 提供一個視覺化的指揮中心來管理和監控你的 AI 代理團隊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (43 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要集中管理多個 AI 代理並希望簡化操作流程的開發團隊。
> **一句話重點** ClawPort 的設計讓 AI 代理的管理變得更加直觀和集中，特別適合需要同時管理多個代理的團隊。

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
> **結論** 花 5 小時學習，3 小時整合，得到一個強大的 AI 代理管理工具，值得投入。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中式管理界面，讓用戶能夠輕鬆管理和監控 AI 代理。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理、監控和與 OpenClaw AI 代理進行對話而設計。用戶首先需要安裝並啟動 OpenClaw，然後透過 `clawport setup` 命令自動檢測配置，這樣就能連接到本地的 OpenClaw 網關。該工具提供了組織圖、即時聊天、看板任務管理、定時任務監控、成本追蹤等多種功能，所有操作都通過 OpenClaw 網關進行，無需額外的 API 金鑰。這樣的設計使得用戶可以專注於代理的管理，而不必擔心底層的 API 認證問題。

使用 Next.js 16 和 React 19 開發，並且採用了 Tailwind CSS 進行樣式設計，這使得界面既美觀又響應迅速。與其他類似工具相比，ClawPort 的自動發現功能讓用戶無需手動配置代理，這在管理大型代理團隊時特別有用。雖然目前有一些性能問題（如 #17），但整體的功能設計和用戶體驗仍然值得期待。這個專案的發展潛力大，特別是隨著 OpenClaw 生態系統的擴展，未來可能會引入更多的功能和整合。

**技術棧**：`Next.js 16` · `React 19` · `TypeScript 5` · `Tailwind CSS 4`

## 重點功能

- 組織圖 — 互動式的組織圖顯示代理團隊的層級和狀態，便於快速了解團隊結構。
- 即時聊天 — 支持文本、圖片和語音消息的即時聊天，並可持久化對話記錄。
- 看板任務管理 — 拖放式的任務看板，方便管理不同代理的任務進度。
- 定時任務監控 — 實時顯示所有定時任務的狀態，並支持錯誤過濾和詳情展開。
- 成本儀表板 — 提供代幣使用和成本分析，幫助用戶優化資源配置。
- 活動控制台 — 歷史事件的日誌瀏覽和實時日誌流，便於問題排查。
- 記憶瀏覽器 — 支持 Markdown 渲染的團隊記憶和日誌檢索，提升信息查詢效率。
- 自動發現 — 自動掃描 OpenClaw 工作空間中的代理，無需手動配置。

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
4. 設置 ClawPort
```bash
clawport setup
```
5. 啟動儀表板
```bash
clawport dev
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝並運行 OpenClaw",
  "指令": "clawport dev",
  "預期輸出": "啟動開發伺服器，打開 http://localhost:3000"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 519 stars（43/天），forks 73（14.1%），這顯示出不錯的增長潛力。作者 JohnRiceML 之前有開發 OpenClaw，這個專案解決了 AI 代理管理的複雜性，提供了一個集中化的界面來監控和互動。近期的社群反饋也指出了性能問題，這可能促使開發者優化工具。隨著 OpenClaw 的普及，這個工具的需求也會隨之增加，讓其成為一個值得關注的選擇。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI 代理並希望簡化操作流程的開發團隊。

> [!example] 使用場景
> - AI 產品經理用它來管理多個 AI 代理的任務進度，因為看板功能讓任務分配和追蹤變得直觀。
> - 開發者用它來即時監控 AI 代理的運行狀態，因為活動控制台提供了實時日誌流，方便排查問題。
> - 團隊成員用它來與 AI 代理進行對話和協作，因為即時聊天功能支持文本、語音和文件附件，提升了溝通效率。

## 架構分析

ClawPort 採用 Next.js 作為前端框架，並與 OpenClaw 網關進行連接。用戶的瀏覽器通過 ClawPort 與 OpenClaw 網關進行互動，所有 AI 操作都經由這個網關進行，這樣的設計減少了對外部 API 金鑰的依賴。資料流從用戶的瀏覽器經由 ClawPort 讀取 OpenClaw 工作空間中的代理資料，並進行即時更新。

選擇 Next.js 使得開發過程中能夠利用其強大的 SSR 和靜態生成能力，這對於需要快速響應的儀表板特別重要。這樣的架構雖然簡化了用戶的操作流程，但在大型團隊中可能會遇到性能瓶頸，特別是在多代理同時運行的情況下。整體來說，這個架構設計在易用性和性能之間取得了一定的平衡，但仍需進一步優化以應對更大的使用場景。

## 技術深入分析

ClawPort 的核心技術機制是基於 Next.js 和 React，這使得它能夠快速構建響應式的用戶界面。採用的資料結構和通訊模式使得用戶能夠即時獲取和管理代理的狀態。效能方面，ClawPort 目前能夠處理多個代理的即時互動，但在高負載情況下可能會出現延遲，這需要進一步優化。選擇 Next.js 作為框架的好處在於其強大的生態系統和社群支持，但這也意味著需要定期更新以保持與最新技術的兼容性。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在多代理同時運行的情況下。整合方面，ClawPort 與現有的 OpenClaw 生態系統無縫對接，這使得它能夠快速被團隊採用，但對於不熟悉 OpenClaw 的用戶來說，仍需要一定的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和範例，安裝過程相對順暢，但對於新手來說可能需要一些時間理解 OpenClaw 的配置。整體上，文檔的清晰度和指導性都較好，能夠幫助用戶在 30 分鐘內順利啟動。沒有多語言支持，但主要內容已經涵蓋了大部分使用情境。

## 優缺點分析

> [!success] 優點
> - 集中管理多個 AI 代理，提升操作效率。
> - 即時監控和日誌流功能，便於快速排查問題。
> - 無需額外 API 金鑰，簡化了使用流程。

> [!danger] 缺點
> - 性能問題在大型團隊中可能會影響使用體驗。
> - 不支持最新版本的 OpenClaw，可能導致兼容性問題。
> - 文檔不夠詳細，對新手來說有一定學習曲線。

> [!warning] 注意事項
> - 目前性能問題，特別是在大型團隊中可能會感到緩慢。
> - 不支持最新版本的 OpenClaw，可能會導致兼容性問題。
> - 需要 Node.js 22 以上版本，對於老舊環境可能不友好。
> - 目前的文檔可能不夠詳細，對新手來說有一定學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，適合需要特定行業知識的團隊。 |
| [TianyiDataScience/openclaw-control-center](https://github.com/TianyiDataScience/openclaw-control-center) | 提供更簡化的控制界面，但功能較少，適合小型專案。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更強大的數據分析功能，但不專注於 AI 代理的管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，提供針對醫療場景的特定功能。 | 如果你的團隊專注於醫療應用，這個工具會提供更合適的功能和支持。 | medium，因為需要重新適應醫療場景的特定需求。 |
| [TianyiDataScience/openclaw-control-center](https://github.com/TianyiDataScience/openclaw-control-center) | 提供更簡化的控制界面，適合小型專案，但功能較少。 | 如果你的專案規模較小且不需要 ClawPort 的所有功能，這個工具會更輕量。 | low，因為界面和功能相似，遷移相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawport-ui** | **OpenClaw-Medical-Skills** | **openclaw-control-center** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的 OpenClaw 應用，提供針對醫療場景的特定功能。 | 提供更簡化的控制界面，適合小型專案，但功能較少。 |
> | 遷移成本 | - | medium，因為需要重新適應醫療場景的特定需求。 | low，因為界面和功能相似，遷移相對容易。 |
> | 適用場景 | 主要場景 | 如果你的團隊專注於醫療應用，這個工具會提供更合適的功能和支持 | 如果你的專案規模較小且不需要 ClawPort 的所有功能， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型團隊中使用時可能會出現性能瓶頸，導致操作延遲。
  - 解法：考慮減少同時運行的代理數量。
- [MEDIUM] 不支持最新版本的 OpenClaw，可能導致兼容性問題。
  - 解法：確保使用與 ClawPort 兼容的 OpenClaw 版本。
- [MEDIUM] 安裝過程中可能需要手動配置環境變數，對新手不友好。
  - 解法：參考官方文檔中的配置指南。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡化了多代理的管理流程，適合小型團隊使用。 |
| 大型企業的 AI 代理管理 | 普通 | 性能可能成為瓶頸，但功能強大。 |
| 教育機構的 AI 代理實驗 | 適合 | 提供了良好的監控和管理工具，適合教學使用。 |
| 個人開發者的 AI 專案 | 非常適合 | 簡單易用，快速上手，適合個人專案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個強大的 AI 代理管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估低風險：ClawPort 本身不需要高權限，且不存取敏感資料，但需確保 OpenClaw 網關的安全性和授權管理。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ClawPort 最常與 OpenClaw 搭配使用，作為 AI 代理的管理和監控工具。在典型的工作流中，它位於開發和監控的環節，幫助用戶即時獲取代理狀態。實際整合範例是，在一個使用 OpenClaw 的專案中，ClawPort 可以用來監控代理的運行狀態，具體做法是運行 `clawport dev` 命令啟動儀表板。它與 GitHub Actions 和其他 CI 工具的整合尚需進一步探索，可能需要額外的適配器或包裝器。

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
| Forks | 73 |
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

**社群活躍度**：社群活躍，最近有多個提交和問題解決。
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

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]]

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
