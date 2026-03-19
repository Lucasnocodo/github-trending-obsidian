---
repo: calesthio/Crucix
url: https://github.com/calesthio/Crucix
owner: calesthio
owner_type: User
language: JavaScript
license: AGPL-3.0
description: "Your personal intelligence agent. Watches the world from multiple data sources and pings you when something changes."
homepage: "https://crucix.live"
stars: 4513
stars_per_day: 1128
forks: 619
open_issues: 23
created: 2026-03-14
pushed_at: 2026-03-18
first_seen: 2026-03-17
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "OSINT 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-17
use_case: "讓你在多個數據來源中監控世界，並在變化時即時通知你。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 15
repo_size_kb: 2480
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-17"
star_history: "2026-03-17:1888,2026-03-17:1918,2026-03-18:3081,2026-03-18:3092,2026-03-19:4496,2026-03-19:4513"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "Crucix"
  - "calesthio/Crucix"
  - "讓你在多個數據來源中監控世界，並在變化時即時通知你。"
---

# Crucix

**4.5k** stars · **1.1k** stars/天 · 建立 4 天前 · JavaScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/calesthio--Crucix");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 讓你在多個數據來源中監控世界，並在變化時即時通知你。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地整合多個開源情報來源並即時獲取變化的研究人員和分析師。
> **一句話重點** Crucix 將多種開源情報整合到一個本地平台，讓用戶能夠即時獲取全球事件的變化，無需依賴雲端服務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/calesthio--Crucix");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "OSINT 工具" && p.file.name !== "calesthio--Crucix" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 OSINT 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，6 小時整合，得到即時情報監控的能力，值得嘗試。

> [!abstract] 核心創新
> Crucix 將 27 種開源情報來源整合到一個本地儀表板，並提供即時的多層級警報系統。

## 專案簡介

Crucix 是一個本地智能引擎，整合了 27 種開源情報來源，並提供一個自動更新的儀表板。用戶只需執行 `npm run dev`，即可啟動伺服器，並開始每 15 分鐘自動掃描所有來源，將數據合成並顯示在儀表板上。這個工具的賣點在於無需雲端服務，所有數據都在本地處理，並且支持多種 LLM 提供者進行更深入的分析。用戶可以選擇連接多達 6 種 LLM 服務，並在 LLM 不可用時自動切換到基於規則的警報評估。技術上，Crucix 使用 Node.js 和 Express 框架，並依賴於現代 JavaScript 語法，支持 ESM 模組。

與其他類似工具相比，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，Crucix 的獨特之處在於其無需雲端依賴，並且提供即時的多層級警報功能。這使得它特別適合需要即時反應的用戶，如研究人員、記者和交易員。儘管功能強大，但用戶需注意其依賴的 API 密鑰和配置，這可能會影響使用體驗。整體來看，Crucix 是一個穩定的工具，適合中小型團隊或個人使用，未來可能會進一步擴展其 LLM 支持和數據來源。

**技術棧**：`Node.js 22+` · `Express 5.1.0`

## 重點功能

- 27 種數據來源 — 包括衛星火災檢測、飛行跟蹤、經濟指標等，提供全面的情報覆蓋。
- 自動更新儀表板 — 每 15 分鐘自動掃描所有來源，並將變化推送至儀表板。
- 多層級警報系統 — 根據 LLM 的評估將警報分為 FLASH、PRIORITY 和 ROUTINE，提供更精確的警報管理。
- 支持多種 LLM 提供者 — 可連接 Anthropic、OpenAI、Google Gemini 等，提升數據分析能力。
- 無需雲端 — 所有數據處理在本地進行，保護用戶隱私，無需擔心數據安全問題。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/calesthio/Crucix.git
```
2. 安裝依賴
```bash
npm install
```
3. 啟動儀表板
```bash
npm run dev
```

## 程式碼範例

```js
{
  "前置條件": "確保已安裝 Node.js 22+。",
  "指令": "npm run dev",
  "預期輸出": "儀表板將自動打開，並開始第一次情報掃描。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 4513 stars（1128/天），forks 619（13.7%），顯示出強勁的增長潛力。開發者 calesthio 以其對開源社群的貢獻而聞名，這個專案解決了信息分散的問題，讓用戶能夠在一個平台上獲取多種開源情報。近期的推廣活動和社交媒體上的討論也助長了其曝光率。高達 13.7% 的 forks/stars 比率顯示出許多用戶對此專案的實際修改和使用，反映出其在社群中的活躍度。

## 適合誰使用

**目標受眾**：需要在本地整合多個開源情報來源並即時獲取變化的研究人員和分析師。

> [!example] 使用場景
> - 研究人員用它來整合多個開源情報來源，因為這樣可以在一個儀表板上快速獲取最新的數據，節省了逐一查詢的時間。
> - 交易員用它來生成基於 LLM 的交易建議，因為這樣能夠獲得更具洞察力的市場分析，提升交易決策的質量。
> - 記者用它來即時獲取全球事件的變化，因為這樣可以在第一時間內報導重要新聞，增加報導的時效性。

## 架構分析

Crucix 採用單一 Node.js 應用架構，所有數據處理和儀表板渲染都在本地進行，這樣設計的目的是為了提高數據安全性和用戶隱私。數據流從 27 個來源獲取，經過並行處理後進行合成，最後呈現在用戶的儀表板上。這種架構的代價在於對 API 密鑰的依賴，可能會影響某些數據來源的可用性。整體而言，這樣的設計使得用戶能夠在無需雲端服務的情況下獲得豐富的情報數據，並且具備良好的擴展性。

## 技術深入分析

Crucix 的核心技術機制在於其使用 Node.js 和 Express 框架，實現了高效的數據抓取和處理。每 15 分鐘進行一次掃描，並行查詢 27 個數據來源，這樣的設計使得用戶能夠快速獲取最新的情報數據。儘管如此，這樣的架構也帶來了對 API 密鑰的依賴，可能會限制某些數據來源的可用性。選擇 Node.js 的原因在於其非同步處理能力，能夠有效管理多個數據來源的請求。Crucix 的設計考量了用戶隱私，所有數據處理都在本地進行，這樣的選擇雖然增加了配置的複雜度，但也提高了數據安全性。對於大規模數據處理，可能會遇到性能瓶頸，特別是在多用戶同時訪問的情況下。整合到現有的 CI/CD pipeline 中相對簡單，但需要用戶熟悉 Node.js 環境的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程中，npm 依賴的安裝相對順暢，但在某些系統上可能會遇到啟動失敗的問題。整體而言，文件提供了良好的入門指導，適合新手在 30 分鐘內完成設置。

## 優缺點分析

> [!success] 優點
> - 無需雲端依賴，所有數據在本地處理，保護用戶隱私。
> - 支持多種 LLM 提供者，提升數據分析能力。
> - 自動更新儀表板，提供即時的情報變化。

> [!danger] 缺點
> - 需要有效的 API 密鑰來訪問某些數據來源，增加配置複雜度。
> - 在某些系統上啟動可能會出現問題，需要進行額外的故障排除。
> - 對於不熟悉 Node.js 的用戶來說，學習曲線可能較陡。

> [!warning] 注意事項
> - 需要有效的 API 密鑰來訪問某些數據來源。
> - 對於 LLM 的支持需要額外配置，否則將使用基於規則的警報系統。
> - 在某些系統上，使用 npm 可能會導致啟動失敗，需要直接使用 Node.js。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 Crucix 提供即時情報監控和分析功能，適合需要即時反應的用戶。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的數據收集，而 Crucix 提供更廣泛的開源情報來源，適合多種行業的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 Crucix 提供即時情報監控和分析功能。 | 如果你的需求主要是文件同步而非即時情報監控，則選擇 AlpinDale/parsync 會更合適。 | low，因為兩者的使用場景和功能差異不大。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的數據收集，而 Crucix 提供更廣泛的開源情報來源。 | 如果你的工作重點在醫療數據的收集和分析，則 FreedomIntelligence/OpenClaw-Medical-Skills 會更適合。 | medium，因為需要重新配置數據來源和分析邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Crucix** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而 Crucix 提供即時情報監控和分析功能。 | 專注於醫療領域的數據收集，而 Crucix 提供更廣泛的開源情報來源。 |
> | 遷移成本 | - | low，因為兩者的使用場景和功能差異不大。 | medium，因為需要重新配置數據來源和分析邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非即時情報監控，則選擇 Alpi | 如果你的工作重點在醫療數據的收集和分析，則 FreedomI |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 系統上，使用 npm 可能會導致啟動失敗，無法顯示任何錯誤信息。
  - 解法：直接使用 Node.js 執行 server.mjs 來繞過 npm 的問題。
- [MEDIUM] 某些數據來源需要 API 密鑰，未配置時會影響數據的完整性。
  - 解法：確保在 .env 文件中正確配置所有需要的 API 密鑰。
- [MEDIUM] 在高流量情況下，可能會遇到性能瓶頸，導致數據更新延遲。
  - 解法：考慮優化數據來源的請求頻率或增加伺服器資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的研究團隊需要即時獲取全球事件變化 | 非常適合 | Crucix 提供了多種數據來源的整合，能夠快速獲取信息。 |
| 大型企業需要監控特定市場的變化 | 普通 | 雖然 Crucix 功能強大，但對於大型企業的需求可能需要更多的定制化。 |
| 個人開發者希望在本地環境中運行情報工具 | 非常適合 | Crucix 的本地運行特性和無需雲端的設計非常符合個人開發者的需求。 |
| 需要高頻率數據更新的交易團隊 | 適合 | Crucix 的自動更新功能能夠支持交易團隊的需求，但可能需要進一步的性能優化。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，6 小時整合，得到即時情報監控的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Crucix 本身不需要高權限運行，所有數據處理在本地進行，並不存取敏感資料。對於 API 密鑰的管理需謹慎，確保不外洩。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Crucix 可以與其他 Node.js 應用輕鬆整合，特別是在開發和部署環境中。它可以與 CI/CD 工具如 GitHub Actions 配合使用，並且在 VS Code 中也有良好的開發體驗。用戶可以通過 npm 安裝其他依賴，進一步擴展其功能。整合過程中，最常見的問題是 API 密鑰的配置，這需要用戶仔細檢查環境變數的設置。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Crucix 出現之前，許多開源情報工具往往功能單一，無法整合多種數據來源。用戶需要手動查詢不同的 API，這樣的方式效率低下且容易錯過重要信息。隨著開源數據的增長和用戶對即時信息的需求，Crucix 的出現正好填補了這一空白。

這個工具代表了開源情報整合的趨勢，未來可能會有更多類似的工具出現，進一步提升數據的可獲取性和分析能力。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的 API 使用
- 有一定的數據分析能力

> [!tip] 導入策略
> 第一週：在個人環境中試用，熟悉功能。第二週：在小型團隊內部導入，收集反饋。第三週：根據反饋調整配置，撰寫使用手冊。第四週：在更大範圍內推廣使用。

**成功指標**：成功導入後，團隊能夠在 30 分鐘內獲取最新的全球事件信息。

> [!warning] 退出計畫
> 如果需要退出，可以將所有配置和數據備份到標準格式，並使用其他開源工具替代。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/calesthio--Crucix");
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
> const me = dv.page("Repos/calesthio--Crucix");
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
| Forks | 619 |
| Open Issues | 23 |
| Issue 解決率 | 15% (4 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://crucix.live) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/calesthio/Crucix) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `express`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 74
>     "HTML" : 25
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@calesthio](https://github.com/calesthio) | 29 |
> | [@The-R4V3N](https://github.com/The-R4V3N) | 9 |
> | [@DanNO248](https://github.com/DanNO248) | 5 |
> | [@VergilSkye](https://github.com/VergilSkye) | 4 |
> | [@xaoscience](https://github.com/xaoscience) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新並回應問題。
**連結**：[文件](https://crucix.live)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-17 ~ 2026-03-18）
> **活躍天數** 2 天 · **最新 commit** Add dashboard signal guide glossary (#42)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/calesthio/Crucix/issues/30) | [Feature] Add Ollama Provider Support for Selft-Hosted Optio `enhancement` | 3 | 1 |
> | [#15](https://github.com/calesthio/Crucix/issues/15) | [Feature] Add Mistral AI LLM provider `enhancement` | 1 | 0 |
> | [#7](https://github.com/calesthio/Crucix/issues/7) | Added Anthropic API but still getting LLM not configured | 1 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Crucix
> 
> **Your own intelligence terminal. 27 sources. One command. Zero cloud.**
> 
> 
> ## Quick Start
> 
> ```bash
> 
> # 2. Install dependencies (just Express)
> npm install
> 
> 
> ## API Keys Setup
> 
> Copy `.env.example` to `.env` at the project root:
> 
> ```bash
> cp .env.example .env
> ```
> 
> 
> # 3. Copy env template and add your API keys (see below)
> cp .env.example .env
> 
> 
> ### Optional LLM Layer
> Connect any of 6 LLM providers for enhanced analysis:
> - **AI trade ideas** — quantitative analyst producing 5-8 actionable ideas citing specific data
> - **Smarter alert evaluation** — LLM classifies signals into FLASH/PRIORITY/ROUTINE tiers with cross-domain correlation and confidence scoring
> - Providers: Anthropic Claude, OpenAI, Google Gemini, OpenRouter (Unified API), OpenAI Codex (ChatGPT subscription), MiniMax
> - Graceful fallback — when LLM is unavailable, a rule-based engine takes over alert evaluation. LLM failures never crash the sweep cycle.
> 
> ---
> 
> 
> ### Optional (enable additional sources)
> 
> | Key | Source | How to Get |
> |-----|--------|------------|
> | `ACLED_EMAIL` + `ACLED_PASSWORD` | Armed conflict event data | [acleddata.com/register](https://acleddata.com/register/) — free, OAuth2 |
> | `AISSTREAM_API_KEY` | Maritime AIS vessel tracking | [aisstream.io](https://aisstream.io/) — free |
> | `ADSB_API_KEY` | Unfiltered flight tracking | [RapidAPI](https://rapidapi.com/adsbexchange/api/adsbexchange-com1) — ~$10/mo |
> 
> 
> ### LLM Provider (optional, for AI-enhanced ideas)
> 
> Set `LLM_PROVIDER` to one of: `anthropic`, `openai`, `gemini`, `codex`, `openrouter`, `minimax`
> 
> | Provider | Key Required | Default Model |
> |----------|-------------|---------------|
> | `anthropic` | `LLM_API_KEY` | claude-sonnet-4-6 |
> | `openai` | `LLM_API_KEY` | gpt-5.4 |
> | `gemini` | `LLM_API_KEY` | gemini-3.1-pro |
> | `openrouter` | `LLM_API_KEY` | openrouter/auto |
> | `codex` | None (uses `~/.codex/auth.json`) | gpt-5.3-codex |
> | `minimax` | `LLM_API_KEY` | MiniMax-M2.5 |
> 
> For Codex, run `npx @openai/codex login` to authenticate via your ChatGPT subscription.
> 
> 
> ### Telegram Bot + Alerts (optional)
> 
> | Key | How to Get |
> |-----|------------|
> | `TELEGRAM_BOT_TOKEN` | Create via [@BotFather](https://t.me/BotFather) on Telegram |
> | `TELEGRAM_CHAT_ID` | Get via [@userinfobot](https://t.me/userinfobot) |
> | `TELEGRAM_CHANNELS` | *(Optional)* Comma-separated extra channel IDs to monitor beyond the 17 built-in channels |
> | `TELEGRAM_POLL_INTERVAL` | *(Optional)* Bot command polling interval in ms (default: 5000) |
> 
> 
> ### Discord Bot + Alerts (optional)
> 
> | Key | How to Get |
> |-----|------------|
> | `DISCORD_BOT_TOKEN` | Create at [Discord Developer Portal](https://discord.com/developers/applications) → Bot → Token |
> | `DISCORD_CHANNEL_ID` | Right-click channel in Discord (Developer Mode on) → Copy Channel ID |
> | `DISCORD_GUILD_ID` | *(Optional)* Right-click server → Copy Server ID. Enables instant slash command registration (otherwise takes up to 1 hour for global commands) |
> | `DISCORD_WEBHOOK_URL` | *(Optional)* Channel Settings → Integrations → Webhooks → New Webhook → Copy URL. Use this for alert-only mode without a bot |
> 
> **Discord bot setup:**
> 1. Go to [Discord Developer Portal](https://discord.com/developers/applications) and create a new application
> 2. Go to **Bot** → click **Reset Token** → copy the token to `DISCORD_BOT_TOKEN`
> 3. Under **Privileged Gateway Intents**, enable **Message Content Intent**
> 4. Go to **OAuth2** → **URL Generator** → select `bot` + `applications.commands` scopes → select `Send Messages` + `Embed Links` permissions
> 5. Copy the generated URL and open it in your browser to invite the bot to your server
> 6. Install the dependency: `npm install discord.js`
> 
> Alerts work with or without an LLM on both Telegram and Discord. With an LLM configured, signal evaluation is richer and more context-aware. Without one, a deterministic rule engine evaluates signals based on severity, cross-domain correlation, and signal counts.
> 
> 
> ## Configuration
> 
> All settings are in `.env` with sensible defaults:
> 
> | Variable | Default | Description |
> |----------|---------|-------------|
> | `PORT` | `3117` | Dashboard server port |
> | `REFRESH_INTERVAL_MINUTES` | `15` | Auto-refresh interval |
> | `LLM_PROVIDER` | disabled | `anthropic`, `openai`, `gemini`, `codex`, `openrouter`, or `minimax` |
> | `LLM_API_KEY` | — | API key (not needed for codex) |
> | `LLM_MODEL` | per-provider default | Override model selection |
> | `TELEGRAM_BOT_TOKEN` | disabled | For Telegram alerts + bot commands |
> | `TELEGRAM_CHAT_ID` | — | Your Telegram chat ID |
> | `TELEGRAM_CHANNELS` | — | Extra channel IDs to monitor (comma-separated) |
> | `TELEGRAM_POLL_INTERVAL` | `5000` | Bot command polling interval (ms) |
> | `DISCORD_BOT_TOKEN` | disabled | For Discord alerts + slash commands |
> | `DISCORD_CHANNEL_ID` | — | Discord channel for alerts |
> | `DISCORD_GUILD_ID` | — | Server ID (instant slash command registration) |
> | `DISCORD_WEBHOOK_URL` | — | Webhook URL (alert-only fallback, no bot needed) |
> 
> Delta engine thresholds (how sensitive the system is to changes between sweeps) can be customized in `crucix.config.mjs` under the `delta.thresholds` section. The defaults are tuned to filter out noise while catching meaningful moves.
> 
> ---
> 
> 
> ## API Endpoints
> 
> When running `npm run dev`:
> 
> | Endpoint | Description |
> |----------|-------------|
> | `GET /` | Jarvis HUD dashboard |
> | `GET /api/data` | Current synthesized intelligence data (JSON) |
> | `GET /api/health` | Server status, uptime, source count, LLM status |
> | `GET /events` | SSE stream for live push updates |
> 
> ---
> 
> 
> ## Why This Exists
> 
> Most of the world's real-time intelligence — satellite imagery, radiation levels, conflict events, economic indicators, flight tracking, maritime activity — is publicly available. It's just scattered across dozens of government APIs, research institutions, and open data feeds that nobody has time to check individually.
> 
> Crucix brings it all into one place. Not behind a paywall, not locked in an enterprise platform, not requiring a security clearance. Just open data, aggregated and cross-correlated on your own machine, updated every 15 minutes.
> 
> It was built for anyone who wants to understand what's actually happening in the world right now — researchers, journalists, traders, OSINT analysts, or just curious people who believe access to information shouldn't depend on your budget.
> 
> ---
> 
> 
> ## [Visit The Live Site: crucix.live](https://www.crucix.live/)
> 
> [](https://www.crucix.live/)
> [](https://www.crucix.live/)
> 
> [](#quick-start)
> [](LICENSE)
> [-orange)](#architecture)
> [](#data-sources-27)
> [](#docker)
> 
> More screenshots
> 
> | Boot Sequence | World Map |
> |:---:|:---:|
> |  |  |
> 
> | 3D Globe View |
> |:---:|
> |  |
> 
> > **Live website:** [https://www.crucix.live/](https://www.crucix.live/)
> > Explore the public demo first, then clone the repo to run Crucix locally.
> 
> Crucix pulls satellite fire detection, flight tracking, radiation monitoring, satellite constellation tracking, economic indicators, live market prices, conflict data, sanctions lists, and social sentiment from 27 open-source intelligence feeds — in parallel, every 15 minutes — and renders everything on a single self-contained Jarvis-style dashboard.
> 
> Hook it up to an LLM and it becomes a **two-way intelligence assistant** — pushing multi-tier alerts to Telegram and Discord when something meaningful changes, responding to commands like `/brief` and `/sweep` from your phone, and generating actionable trade ideas grounded in real cross-domain data. Your own analyst that watches the world while you sleep.
> 
> Try the live demo first at [https://www.crucix.live/](https://www.crucix.live/), then clone the repo when you want the full local stack.
> 
> No cloud. No telemetry. No subscriptions. Just `node server.mjs` and you're running.
> 
> ---
> 
> 
> # 1. Clone the repo
> git clone https://github.com/calesthio/Crucix.git
> cd Crucix
> 
> 
> # 4. Start the dashboard
> npm run dev
> ```
> 
> > **If `npm run dev` fails silently** (exits with no output), run Node directly instead:
> > `

## 延伸閱讀

相關概念：[[OSINT]] · [[自動化]] · [[即時通訊]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[novatic14--MANPADS-System-Launcher-and-Rocket|novatic14/MANPADS-System-Launcher-and-Rocket]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/calesthio/Crucix) · [官方網站](https://crucix.live)

## 相關收錄

> [!note]- 直接競品（同子分類：OSINT 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "OSINT 工具" AND file.name != "calesthio--Crucix"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "calesthio--Crucix"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "calesthio--Crucix" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "calesthio--Crucix"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["OSINT","自動化","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "calesthio--Crucix" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/calesthio--Crucix");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "calesthio--Crucix" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "calesthio" AND file.name != "calesthio--Crucix"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/calesthio--Crucix");
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
> const me = dv.page("Repos/calesthio--Crucix");
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
> const me = dv.page("Repos/calesthio--Crucix");
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
> const me = dv.page("Repos/calesthio--Crucix");
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
> const me = dv.page("Repos/calesthio--Crucix");
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

> **2026-03-17** — 首次收錄
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

- [[2026-03-19|2026-03-19]] — 再次上榜，4.5k stars
- [[2026-03-18|2026-03-18]] — 再次上榜，3.1k stars
- [[2026-03-17|2026-03-17]] — 首次收錄，1.9k stars
