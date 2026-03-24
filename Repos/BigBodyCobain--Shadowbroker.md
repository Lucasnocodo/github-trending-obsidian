---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 4878
stars_per_day: 271
forks: 726
open_issues: 1
created: 2026-03-05
pushed_at: 2026-03-23
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "開源情報"
release_tag: "v0.9.5"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球開源情報的即時地理情報平台，追蹤從企業私人飛機到地震事件的所有資訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 98
repo_size_kb: 6000
readme_length: 10000
bus_factor: 2
last_release_days: 10
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464,2026-03-13:2127,2026-03-14:2662,2026-03-15:2852,2026-03-16:3053,2026-03-17:3274,2026-03-18:3512,2026-03-19:3617,2026-03-20:3892,2026-03-21:4221,2026-03-22:4471,2026-03-23:4737,2026-03-24:4878"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/air_force_one"
  - "topic/airforce1"
  - "topic/asdb"
  - "topic/cctv"
  - "topic/cctv_cameras"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球開源情報的即時地理情報平台，追蹤從企業私人飛機到地震事件的所有資訊。"
---

# Shadowbroker

**4.9k** stars · **271** stars/天 · 建立 18 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.9.5`

`air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` `osint-resources` `osint-tool` `sattelite` `sattelite-imagery` `sdr`

> [!summary] 一句話摘要
> 提供全球開源情報的即時地理情報平台，追蹤從企業私人飛機到地震事件的所有資訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (271 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要即時追蹤全球事件並分析開源情報的安全分析師和研究人員。
> **一句話重點** ShadowBroker 將多個開源情報來源整合到一個平台，讓用戶能夠即時追蹤全球事件。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "開源情報" && p.file.name !== "BigBodyCobain--Shadowbroker" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 開源情報 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時的全球情報視圖，值得一試。

> [!abstract] 核心創新
> 聚合多個開源情報來源，提供即時更新的地理情報平台。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報 (OSINT) 儀表板，聚合來自數十個開源情報來源的實時數據，並在統一的黑色操作地圖界面上呈現。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾及突發的地緣政治事件，所有數據都會實時更新。這個工具的賣點在於其模組化架構，允許用戶獨立擴展情報後端和前端界面，並且支持 Docker 部署，簡化了安裝過程。技術上，ShadowBroker 使用 Next.js 和 FastAPI，這樣的選擇使得前端和後端能夠高效協作，並且能夠處理大量的實時數據流。

與其他類似工具相比，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，ShadowBroker 提供了更全面的數據來源和更高的更新頻率，特別是在追蹤航空和海洋交通方面。它的架構設計使得在需要高可用性和擴展性的情況下，能夠輕鬆應對多種數據源的整合。使用者在實際操作中可能會遇到 Docker 配置的挑戰，特別是在多平台部署時，但整體而言，社群活躍度高，問題解決率達 98%。這個專案目前處於 beta 階段，適合對地理情報和開源數據分析有興趣的開發者和研究人員，未來可能會進一步增強數據來源的多樣性和實時性。

**技術棧**：`Next.js` · `FastAPI` · `Python 3.10+` · `Docker`

## 重點功能

- 即時數據聚合 — 整合多個開源情報來源，提供實時更新的地理情報。
- 模組化架構 — 獨立擴展情報後端和前端界面，適合大規模部署。
- Docker 支持 — 提供簡單的 Docker 部署方式，快速啟動儀表板。
- 多種數據來源 — 包括航空、海洋、地震等多個領域的數據，更新頻率高。
- 安全上下文 — 使用限制 UID 運行容器，增強安全性。

## 快速開始

1. 克隆專案並啟動 Docker
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 訪問儀表板
```bash
http://localhost:3000
```
3. 設置 API 密鑰（可選）
```bash
echo 'AIS_API_KEY=your_aisstream_key' >> .env
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Docker",
  "指令": "git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d",
  "預期輸出": "開啟 http://localhost:3000 以查看儀表板。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天內累積 4878 stars（271/天），forks 726（14.9%），顯示出強烈的社群興趣。作者 BigBodyCobain 和其團隊擁有開源背景，過去的貢獻讓這個專案在技術社群中獲得信任。這個工具解決了開源情報數據分散的問題，將多個數據源整合到一個平台，讓用戶能夠在單一界面上獲得即時情報。社群對於即時追蹤全球事件的需求不斷上升，特別是在地緣政治緊張的背景下，這使得 ShadowBroker 的出現恰逢其時。forks/stars 比率為 14.9%，顯示出許多人在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要即時追蹤全球事件並分析開源情報的安全分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來追蹤 Air Force One 的航班動態，因為這能夠提供即時的地理位置資訊，幫助分析潛在的安全風險。
> - 研究人員用它來監控全球地震活動，因為它能即時更新地震數據，並提供視覺化的地圖介面，方便分析趨勢。
> - 開發者用它來整合多個開源數據源，因為其模組化架構允許快速擴展和自定義，適合快速原型開發。

## 架構分析

ShadowBroker 採用模組化架構，前端使用 Next.js 提供動態的用戶界面，後端則使用 FastAPI 處理數據請求。這樣的設計使得前端和後端能夠高效協作，並且能夠處理大量的實時數據流。數據流從多個開源 API 獲取，並通過 WebSocket 實時更新，確保用戶能夠獲得最新的情報。

選擇 Docker 來容器化應用，這樣可以簡化部署過程，但也帶來了對 Docker 環境的依賴。整體架構的可擴展性良好，但在多平台部署時可能會遇到配置挑戰，特別是在不同的操作系統上。這種設計使得用戶能夠輕鬆擴展功能，但也需要一定的技術背景來進行配置和維護。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據聚合能力，使用 FastAPI 作為後端框架，能夠高效處理來自多個開源 API 的請求。前端則使用 Next.js，這使得用戶界面能夠動態更新，並且提供良好的用戶體驗。效能上，這個系統能夠處理大量的實時數據流，並且在冷啟動時僅需 15 秒，這對於需要快速反應的情報分析尤為重要。選擇 Docker 來容器化應用，這樣的設計使得部署變得簡單，但也帶來了對 Docker 環境的依賴。技術上，這個專案在依賴管理上相對簡單，主要依賴於 Node.js 和 Python 的生態系統，並且沒有過多的外部依賴，降低了供應鏈風險。設計上，這個工具的可擴展性良好，但在實際使用中，對於多平台的支持可能會遇到一些挑戰，特別是在不同操作系統的 Docker 配置上。整合方面，這個工具可以與主流的 CI/CD 工具鏈無縫集成，並且支持與其他開源工具的搭配使用，這使得它在開發和部署過程中都能保持高效。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程中，Docker 的使用簡化了配置，但仍需確保 Docker 環境的正確設置。整體來說，花 30 分鐘內應該能夠成功啟動並運行儀表板。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供最新的情報。
> - 模組化架構，便於擴展和自定義。
> - 支持 Docker 部署，簡化安裝流程。

> [!danger] 缺點
> - 需要 Docker 環境，增加了使用門檻。
> - 某些數據源需要額外的 API 密鑰，增加了配置複雜度。
> - 在多平台部署時可能會遇到配置挑戰。

> [!warning] 注意事項
> - 需要 Docker 環境才能運行。
> - 對於某些 API 需要額外的密鑰，增加了使用的複雜度。
> - 在多平台部署時可能會遇到配置挑戰。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步而非即時情報聚合，適合需要高頻率數據更新的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 主要針對醫療領域的開源情報，功能範圍較窄，無法提供全面的地理情報。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不聚焦於即時情報的整合，適合需要高頻率數據更新的場景。 | 如果你的需求主要是資料同步而非即時情報聚合，這個工具會更合適。 | medium，因為需要重新設計數據流和處理邏輯。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 主要針對醫療領域的開源情報，功能範圍較窄，無法提供全面的地理情報。 | 如果你的專案專注於醫療數據分析，這個工具會更合適。 | low，因為功能範圍較窄，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不聚焦於即時情報的整合，適合需要高頻率數據更新的場景。 | 主要針對醫療領域的開源情報，功能範圍較窄，無法提供全面的地理情報。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和處理邏輯。 | low，因為功能範圍較窄，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非即時情報聚合，這個工具會更合適 | 如果你的專案專注於醫療數據分析，這個工具會更合適。 |

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

- **[HIGH]** 在 Windows 上可能會遇到 Docker 配置問題，導致啟動失敗。
  - 解法：確保 Docker Desktop 正確安裝並啟用 WSL 2。
- [MEDIUM] 某些 API 需要額外的密鑰，未配置時會導致數據缺失。
  - 解法：在 .env 文件中添加所需的 API 密鑰。
- [MEDIUM] 多平台部署時，Docker 配置可能會有所不同，導致啟動失敗。
  - 解法：根據操作系統調整 Docker 配置，並參考官方文檔。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行開源情報分析 | 非常適合 | 模組化架構和即時數據更新能夠支持快速的決策過程。 |
| 大型企業需要監控全球事件 | 適合 | 能夠整合多個數據來源，提供全面的情報視圖。 |
| 個人開發者進行小型專案 | 普通 | 雖然功能強大，但安裝和配置可能對新手有一定挑戰。 |
| 需要高頻率數據更新的金融機構 | 不適合 | 目前的更新頻率和數據來源可能無法滿足高頻交易的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時的全球情報視圖，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要 Docker 環境，並且可能需要存取敏感的 API 密鑰。整體依賴鏈相對簡單，沒有已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
| Forks | 726 |
| Open Issues | 1 |
| Issue 解決率 | 98% (52 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 5.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 65
>     "Python" : 33
>     "CSS" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 78 |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 58 |
> | [@suranyami](https://github.com/suranyami) | 17 |
> | [@adust09](https://github.com/adust09) | 8 |
> | [@csysp](https://github.com/csysp) | 5 |

**最新版本**：v0.9.5 — ShadowBroker v0.9.5 (2026-03-14)

> [!info]- Release Notes
> ## The Voltron Update
> 
> The best of both worlds — GitHub community contributions merged with our modular local architecture.
> 
> > **Docker users:** This is a major architectural update. The in-app updater cannot apply it inside containers. Run:
> > ```
> > docker-compose down && git pull && docker-compose up -d --build
> > ```
> > This is the last manual update required — v0.9.5+ supports bulletproof in-app updates going forward.
> 
> ### New Capabilities
> - **Parallelized Boot (15s Cold Start)** — ThreadPoolExecutor runs all data tiers concurrently
> - **Adaptive Polling + ETag Caching** — continuous data flow, no more bbox interrupts
> - **Sliding Edge Panels (LAYERS / INTEL)** — spring-animated side tabs replace bulky Record Panel
> - **Admin Auth + Rate Limiting + Auto-Updater** — X-Admin-Key, slowapi, one-click GitHub updates
> - **Docker Swarm Secrets Support** — load API keys from /run/secrets/ in production
> 
> ### Fixes & Improvements
> - Stable entity IDs for GDELT & News popups — no more wrong popup after data refresh (PR #63)
> - useCallback optimization for interpolation — eliminates redundant re-renders every 1s tick
> - Restored missing GDELT and datacenter background refreshes in slow-tier loop
> - Server-side viewport bbox filtering reduces JSON payloads 80%+
> - Modular fetcher architecture (flights, geo, infrastructure, financial, earth_observation)
> - CCTV ingestors instantiated once at startup — no more fresh DB connections every 10min
> 
> ### Architecture
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 98%。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-23）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #101 from deuza/main

## README 摘錄

> [!info]- 展開查看原文 README
> 🛰️ S H A D O W B R O K E R
>   Global Threat Intercept — Real-Time Geospatial Intelligence Platform
>   
> 
>   
> 
> ---
> 
> https://github.com/user-attachments/assets/248208ec-62f7-49d1-831d-4bd0a1fa6852
> 
> **ShadowBroker** is a real-time, multi-domain OSINT dashboard that aggregates live data from dozens of open-source intelligence feeds and renders them on a unified dark-ops map interface. It tracks aircraft, ships, satellites, earthquakes, conflict zones, CCTV networks, GPS jamming, and breaking geopolitical events — all updating in real time.
> 
> Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**, it's designed for analysts, researchers, and enthusiasts who want a single-pane-of-glass view of global activity.
> 
> ---
> 
> 
> ## ⚡ Quick Start (Docker or Podman)
> 
> Linux/Mac
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> ./compose.sh up -d
> ```
> 
> Windows
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> docker-compose up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard! *(Requires Docker or Podman)*
> 
> `compose.sh` auto-detects `docker compose`, `docker-compose`, `podman compose`, and `podman-compose`.
> If both runtimes are installed, you can force Podman with `./compose.sh --engine podman up -d`.
> Do not append a trailing `.` to that command; Compose treats it as a service name.
> 
> ---
> 
> 
> # Install from the local helm/chart directory
> helm install shadowbroker ./helm/chart --create-namespace --namespace shadowbroker
> ```
> 
> **3. Key Features:**
> *   **Modular Architecture:** Individually scale the intelligence backend and the HUD frontend.
> *   **Security Context:** Runs with restricted UIDs (1001) for container hardening.
> *   **Ingress Ready:** Compatible with Traefik, Cert-Manager, and Gateway API for secure, external access to your intelligence node.
> 
> *Special thanks to [@chr0n1x](https://github.com/chr0n1x) for contributing the initial Kubernetes architecture.*
> 
> ---
> 
> 
> ## 🚀 Getting Started
> 
> 
> ### 🐳 Docker / Podman Setup (Recommended for Self-Hosting)
> 
> The repo includes a `docker-compose.yml` that builds both images locally.
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> 
> ### 📦 Quick Start (No Code Required)
> 
> If you just want to run the dashboard without dealing with terminal commands:
> 
> 1. Go to the **[Releases](../../releases)** tab on the right side of this GitHub page.
> 2. Download the latest `.zip` file from the release.
> 3. Extract the folder to your computer.
> 4. **Windows:** Double-click `start.bat`.
>    **Mac/Linux:** Open terminal, type `chmod +x start.sh`, `dos2unix start.sh`, and run `./start.sh`.
> 5. It will automatically install everything and launch the dashboard!
> 
> ---
> 
> 
> ### 💻 Developer Setup
> 
> If you want to modify the code or run from source:
> 
> #### Prerequisites
> 
> * **Node.js** 18+ and **npm** — [nodejs.org](https://nodejs.org/)
> * **Python** 3.10, 3.11, or 3.12 with `pip` — [python.org](https://www.python.org/downloads/) (**check "Add to PATH"** during install)
>   * ⚠️ Python 3.13+ may have compatibility issues with some dependencies. **3.11 or 3.12 is recommended.**
> * API keys for: `aisstream.io` (required), and optionally `opensky-network.org` (OAuth2), `lta.gov.sg`
> 
> 
> ### Installation
> 
> ```bash
> 
> # Backend setup
> cd backend
> python -m venv venv
> venv\Scripts\activate        # Windows
> 
> # Frontend setup
> cd ../frontend
> npm install
> ```
> 
> 
> ##  🔄 **How to Update**
> 
> If you are coming from v0.9.5 or older, you must pull the new code and rebuild your containers to see the latest data layers and performance fixes.
> 
> 
> ## ✨ Features
> 
> 
> ## 📊 Data Sources & APIs
> 
> | Source | Data | Update Frequency | API Key Required |
> |---|---|---|---|
> | [OpenSky Network](https://opensky-network.org) | Commercial & private flights | ~60s | Optional (anonymous limited) |
> | [adsb.lol](https://adsb.lol) | Military aircraft | ~60s | No |
> | [aisstream.io](https://aisstream.io) | AIS vessel positions | Real-time WebSocket | **Yes** |
> | [CelesTrak](https://celestrak.org) | Satellite orbital positions (TLE + SGP4) | ~60s | No |
> | [USGS Earthquake](https://earthquake.usgs.gov) | Global seismic events | ~60s | No |
> | [GDELT Project](https://www.gdeltproject.org) | Global conflict events | ~6h | No |
> | [DeepState Map](https://deepstatemap.live) | Ukraine frontline | ~30min | No |
> | [Transport for London](https://api.tfl.gov.uk) | London CCTV JamCams | ~5min | No |
> | [TxDOT](https://its.txdot.gov) | Austin TX traffic cameras | ~5min | No |
> | [NYC DOT](https://webcams.nyctmc.org) | NYC traffic cameras | ~5min | No |
> | [Singapore LTA](https://datamall.lta.gov.sg) | Singapore traffic cameras | ~5min | **Yes** |
> | [DGT Spain](https://nap.dgt.es) | Spanish national road cameras | ~10min | No |
> | [Madrid Open Data](https://datos.madrid.es) | Madrid urban traffic cameras | ~10min | No |
> | [Málaga Open Data](https://datosabiertos.malaga.eu) | Málaga traffic cameras | ~10min | No |
> | [Vigo Open Data](https://datos.vigo.org) | Vigo traffic cameras | ~10min | No |
> | [Vitoria-Gasteiz](https://www.vitoria-gasteiz.org) | Vitoria-Gasteiz traffic cameras | ~10min | No |
> | [RestCountries](https://restcountries.com) | Country profile data | On-demand (cached 24h) | No |
> | [Wikidata SPARQL](https://query.wikidata.org) | Head of state data | On-demand (cached 24h) | No |
> | [Wikipedia API](https://en.wikipedia.org/api) | Location summaries & aircraft images | On-demand (cached) | No |
> | [NASA GIBS](https://gibs.earthdata.nasa.gov) | MODIS Terra daily satellite imagery | Daily (24-48h delay) | No |
> | [Esri World Imagery](https://www.arcgis.com) | High-res satellite basemap | Static (periodically updated) | No |
> | [MS Planetary Computer](https://planetarycomputer.microsoft.com) | Sentinel-2 L2A scenes (right-click) | On-demand | No |
> | [KiwiSDR](https://kiwisdr.com) | Public SDR receiver locations | ~30min | No |
> | [OSM Nominatim](https://nominatim.openstreetmap.org) | Place name geocoding (LOCATE bar) | On-demand | No |
> | [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov) | NOAA-20 VIIRS fire/thermal hotspots | ~120s | No |
> | [NOAA SWPC](https://services.swpc.noaa.gov) | Space weather Kp index & solar events | ~120s | No |
> | [IODA (Georgia Tech)](https://ioda.inetintel.cc.gatech.edu) | Regional internet outage alerts | ~120s | No |
> | [DC Map (GitHub)](https://github.com/Ringmast4r/Data-Center-Map---Global) | Global data center locations | Static (cached 7d) | No |
> | [CARTO Basemaps](https://carto.com) | Dark map tiles | Continuous | No |
> 
> ---
> 
> 
> # Add your API keys in a repo-root .env file (optional — see Environment Variables below)
> ./compose.sh up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard.
> 
> > **Deploying publicly or on a LAN?** No configuration needed for most setups.
> > The frontend proxies all API calls through the Next.js server to `BACKEND_URL`,
> > which defaults to `http://backend:8000` (Docker internal networking).
> > Port 8000 does not need to be exposed externally.
> >
> > If your backend runs on a **different host or port**, set `BACKEND_URL` at runtime — no rebuild required:
> >
> > ```bash
> > # Linux / macOS
> > BACKEND_URL=http://myserver.com:9096 docker-compose up -d
> >
> > # Podman (via compose.sh wrapper)
> > BACKEND_URL=http://192.168.1.50:9096 ./compose.sh up -d
> >
> > # Windows (PowerShell)
> > $env:BACKEND_URL="http://myserver.com:9096"; docker-compose up -d
> >
> > # Or add to a .env file next to docker-compose.yml:
> > # BACKEND_URL=http://myserver.com:9096
> > ```
> 
> If you prefer to call the container engine directly, Podman users can run `podman compose up -d`, or force the wrapper to use Podman with `./compose.sh --engine podman up -d`.
> Depending on your local Podman configuration, `podman compose` may still delegate to an external compose provider while talking to the Podman socket.
> 
> ---
> 
> 
> # Create .env with your API keys
> echo "AIS_API_KEY=your_aisstream_key" >> .env
> echo "OPENSKY_CLIENT_ID=your_opensky_client_id" >> .env
> echo "OPENSKY_CLIENT_SECRET=your_opensky_secret" >> .env
> 
> 
> ### Local AIS Re

## 延伸閱讀

相關概念：[[OSINT]] · [[地理情報]] · [[即時通訊]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 直接競品（同子分類：開源情報）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "開源情報" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "BigBodyCobain--Shadowbroker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["OSINT","地理情報","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BigBodyCobain--Shadowbroker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BigBodyCobain--Shadowbroker" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BigBodyCobain" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
