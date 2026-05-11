---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: Python
license: AGPL-3.0
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. Hook an AI agent up to have it parse through data and find previously unseen correlations. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 6198
stars_per_day: 94
forks: 963
open_issues: 0
created: 2026-03-05
pushed_at: 2026-05-07
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "OSINT 工具"
release_tag: "v0.9.75"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球即時開源情報的統一介面，追蹤從富豪私人飛機到地震事件的所有資訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 9747
readme_length: 10000
bus_factor: 2
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464,2026-03-13:2127,2026-03-14:2662,2026-03-15:2852,2026-03-16:3053,2026-03-17:3274,2026-03-18:3512,2026-03-19:3617,2026-03-20:3892,2026-03-21:4221,2026-03-22:4471,2026-03-23:4737,2026-03-24:4878,2026-03-25:4964,2026-03-26:5049,2026-03-27:5096,2026-03-28:5128,2026-04-04:5151,2026-04-10:5150,2026-04-11:5162,2026-04-12:5172,2026-04-13:5180,2026-04-14:5187,2026-04-15:5238,2026-04-16:5267,2026-04-17:5282,2026-04-18:5368,2026-04-19:5406,2026-04-20:5429,2026-04-21:5448,2026-04-22:5461,2026-04-23:5476,2026-04-24:5482,2026-04-25:5490,2026-04-26:5499,2026-04-27:5505,2026-04-28:5516,2026-04-29:5527,2026-04-30:5532,2026-05-01:5535,2026-05-02:5562,2026-05-03:5608,2026-05-04:5646,2026-05-05:5730,2026-05-06:5943,2026-05-07:5996,2026-05-08:6113,2026-05-09:6150,2026-05-10:6178,2026-05-11:6198"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/air_force_one"
  - "topic/airforce1"
  - "topic/asdb"
  - "topic/cctv"
  - "topic/cctv_cameras"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球即時開源情報的統一介面，追蹤從富豪私人飛機到地震事件的所有資訊。"
---

# Shadowbroker

**6.2k** stars · **94** stars/天 · 建立 66 天前 · Python · AGPL-3.0

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

`v0.9.75`

`air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` `osint-resources` `osint-tool` `sattelite` `sattelite-imagery` `sdr`

> [!summary] 一句話摘要
> 提供全球即時開源情報的統一介面，追蹤從富豪私人飛機到地震事件的所有資訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (94 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 3 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要即時整合多種開源情報數據的安全分析師和研究人員。
> **一句話重點** 這個專案不僅聚合了多種情報，還提供了強大的可視化工具，讓用戶能夠快速獲取所需信息。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "OSINT 工具" && p.file.name !== "BigBodyCobain--Shadowbroker" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到即時情報聚合的強大工具，值得嘗試。

> [!abstract] 核心創新
> 聚合 60+ 個即時情報來源，並提供多種視覺化模式的開源平台。

## 專案簡介

ShadowBroker 是一個去中心化的情報平台，能夠從 60 多個即時情報來源聚合多領域的開源情報（OSINT），並在單一的黑色操作地圖介面上顯示。用戶可以追蹤飛機、船隻、衛星、衝突區、CCTV 網絡等，所有數據實時更新。這個工具的賣點在於其能夠將各種公共信號整合在同一地圖上，並且不收集或傳輸用戶數據。使用者只需在瀏覽器中運行，後端則可自我托管。核心技術包括 Next.js、MapLibre GL 和 FastAPI，這些選擇使得前端和後端可以獨立擴展，並且提供了多達 35 種可切換的數據層。

使用者可以透過右鍵點擊地圖上的任意點來獲取國家資料和最新的衛星照片。這種設計不僅提升了數據的可視化效果，還讓分析師和研究人員能夠更方便地獲取所需信息。使用 Docker 部署的方式也讓安裝變得簡單，只需幾個指令即可啟動整個系統。相較於其他 OSINT 工具，ShadowBroker 提供了更為全面的數據整合和可視化，特別適合需要即時情報的專業用戶。

**技術棧**：`Next.js 18` · `FastAPI` · `Python 3.10` · `MapLibre GL`

## 重點功能

- 即時數據聚合 — 從 60+ 個即時情報來源獲取數據，並在單一介面上顯示。
- 多種視覺模式 — 提供 DEFAULT、SATELLITE、FLIR、NVG 和 CRT 等多種地圖視覺模式。
- 無用戶數據收集 — 整個系統在本地運行，無需傳輸用戶數據。
- 模組化架構 — 前端和後端可獨立擴展，支持高並發用戶。
- Docker 支持 — 透過 Docker 容器快速部署，簡化安裝流程。

## 快速開始

1. 克隆專案並啟動 Docker
```bash
git clone https://github.com/bigbodycobain/Shadowbroker.git && cd Shadowbroker && docker compose pull && docker compose up -d
```
2. 訪問儀表板
```bash
打開 http://localhost:3000
```
3. 設置後端端口（如有需要）
```bash
在 .env 文件中設置 BACKEND_PORT=8001
```

## 程式碼範例

```python
{
  "前置條件": "需要 Docker 環境",
  "指令": "docker compose up -d",
  "預期輸出": "啟動後，訪問 http://localhost:3000 來查看儀表板。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 66 天就累積 6198 stars（94/天），forks 963（15.5%），顯示出強勁的社群關注度。這個專案的作者 BigBodyCobain 及其團隊致力於解決傳統 OSINT 工具分散和難以整合的問題，以前的方案往往需要多個工具來獲取不同的數據，效率低下。這個專案的推出正好填補了這一空白，並且在社群中引發了廣泛的討論。技術上，隨著 Docker 和前端框架的成熟，這個工具的實現變得可行且易於部署。高達 15.5% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，表明其在實際應用中的潛力。

## 適合誰使用

**目標受眾**：需要即時整合多種開源情報數據的安全分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來實時追蹤全球飛行器的動態，因為它能整合多個數據來源，提供即時更新，避免了手動查詢的繁瑣。
> - 研究人員用它來分析地震事件的影響，因為其地圖介面能夠視覺化不同地區的震動數據，提升了研究的效率。
> - 安全專家用它來監控 CCTV 網絡的運行狀況，因為其即時數據更新能夠快速發現異常情況，增強了安全防護能力。

## 架構分析

ShadowBroker 採用模組化架構，前端使用 Next.js 進行構建，後端則使用 FastAPI 提供 API 服務。這種設計使得前後端可以獨立擴展，並且能夠快速響應用戶請求。數據流方面，前端通過 API 請求獲取後端的即時數據，並在地圖上進行可視化展示。

選擇 Docker 作為部署方式的好處在於簡化了安裝過程，但也帶來了對 Docker 環境的依賴。這種架構雖然靈活，但在高負載情況下可能會遇到性能瓶頸，特別是在數據來源過多的情況下。整體而言，這種設計使得系統能夠快速迭代和更新，符合現代開發的需求。

## 技術深入分析

ShadowBroker 的核心技術機制在於其多來源數據聚合能力，使用 FastAPI 來處理後端請求，並利用 Next.js 提供靈活的前端展示。這樣的設計使得系統能夠在高並發情況下保持穩定，並且能夠快速響應用戶的請求。效能方面，系統能夠處理大量的即時數據流，但在資源有限的情況下，可能會出現內存不足的問題。選擇 Docker 作為部署方式的好處在於簡化了安裝過程，但也增加了對 Docker 環境的依賴。這種架構雖然靈活，但在高負載情況下可能會遇到性能瓶頸，特別是在數據來源過多的情況下。技術風險方面，隨著數據來源的增加，系統的維護和擴展可能會變得更加複雜，特別是在需要整合新的數據來源時。整合方面，與主流的 CI/CD 工具相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要 Docker 環境；有良好的快速入門指南，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供最新的情報。
> - 模組化架構，便於擴展和維護。
> - 無需用戶數據收集，保障隱私安全。

> [!danger] 缺點
> - 需要 Docker 環境，對新手不友好。
> - 高負載時可能出現性能瓶頸。
> - 對於低內存主機，需調整配置。

> [!warning] 注意事項
> - 需要 Docker 環境才能運行。
> - 對於低內存主機，可能需要調整 BACKEND_MEMORY_LIMIT。
> - 不支援 Python 3.13+，建議使用 3.10 或 3.11。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 AI agent 的工具，而 ShadowBroker 更側重於即時情報的聚合和可視化。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | OpenChronicle 提供新聞聚合功能，但缺乏 ShadowBroker 的即時數據更新和多領域整合能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據分析和可視化，而 ShadowBroker 提供即時情報聚合。 | 如果需要更強大的數據分析功能而非即時更新，則可選擇 boneyard。 | medium，因為需要重新配置數據來源和視覺化設置。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | 提供新聞聚合功能，但缺乏即時數據更新，ShadowBroker 在這方面更具優勢。 | 如果專注於新聞信息而非即時情報，OpenChronicle 是更好的選擇。 | low，因為兩者在數據來源上有一定重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **boneyard** | **OpenChronicle** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據分析和可視化，而 ShadowBroker 提供即時情報聚合。 | 提供新聞聚合功能，但缺乏即時數據更新，ShadowBroker 在這方面更具優勢。 |
> | 遷移成本 | - | medium，因為需要重新配置數據來源和視覺化設置。 | low，因為兩者在數據來源上有一定重疊。 |
> | 適用場景 | 主要場景 | 如果需要更強大的數據分析功能而非即時更新，則可選擇 bone | 如果專注於新聞信息而非即時情報，OpenChronicle  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在低內存主機上運行時可能會遇到 OOM 問題。
  - 解法：減少啟用的數據來源或調整 BACKEND_MEMORY_LIMIT。
- [MEDIUM] Docker 端口衝突可能導致後端無法啟動。
  - 解法：在 .env 文件中設置 BACKEND_PORT 為其他未使用的端口。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要即時情報的安全分析師 | 非常適合 | 提供即時更新和多種數據來源的整合，滿足分析需求。 |
| 小型團隊的研究項目 | 適合 | 模組化架構便於小型團隊快速部署和維護。 |
| 大型企業的核心系統 | 不適合 | 目前仍在 beta 階段，穩定性和性能可能不符合生產要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時情報聚合的強大工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 環境中使用。

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
| Forks | 963 |
| Open Issues | 0 |
| Issue 解決率 | 100% (68 closed) |
| 最後推送 | 2026-05-07 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 9.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 61
>     "TypeScript" : 34
>     "Rust" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 124 |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 120 |
> | [@suranyami](https://github.com/suranyami) | 17 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 10 |
> | [@OrfeoTerkuci](https://github.com/OrfeoTerkuci) | 9 |

**最新版本**：v0.9.75 — ShadowBroker v0.9.75 (2026-05-06)

> [!info]- Release Notes
> ShadowBroker v0.9.75 is refreshed as a same-version micro-update for the current public channel. This rebuild aligns the release tag, Windows installers, source ZIP, checksums, and release manifest with the latest runtime hardening and telemetry fixes.
> 
> ## Highlights
> 
> - Tightened Wormhole/Infonet startup behavior so node status refreshes faster and retry/offline states are clearer during bootstrap.
> - Added Tor/onion runtime wiring and cleaner seed-node configuration hooks for the obfuscated Infonet path.
> - Improved Docker/local runtime configuration around node bootstrap and relay defaults.
> - Updated tracked-aircraft emissions so selected aircraft can use observed trail history for cumulative fuel and CO2 estimates instead of showing only a rate.
> - Preserved selected-only aircraft and vessel trail behavior so trails appear on demand instead of cluttering the map globally.
> 
> ## Installers and Packages
> 
> - `ShadowBroker_0.9.75_x64-setup.exe` - Windows NSIS installer
> - `ShadowBroker_0.9.75_x64_en-US.msi` - Windows MSI installer
> - `ShadowBroker_v0.9.75.zip` - clean source package generated from the release tag
> - `SHA256SUMS.txt` and `release-manifest.json` - verification metadata for the uploaded assets
> 
> ## Notes
> 
> - This is an unsigned public Windows build. SmartScreen may warn until production code signing is added.
> - API keys, local env files, operator secrets, runtime caches, and private node data are not included in the release assets.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，已解決 100% 的開放問題。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-04 ~ 2026-05-07）
> **活躍天數** 4 天 · **最新 commit** Stabilize secure mail warmup test

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
> [](https://github.com/user-attachments/assets/248208ec-62f7-49d1-831d-4bd0a1fa6852)
> 
> **ShadowBroker** is a decentralized intelligence platform that aggregates real-time, multi-domain OSINT telemetry from 60+ live intelligence feeds into a single dark-ops map interface. Aircraft, ships, satellites, conflict zones, CCTV networks, GPS jamming, internet-connected devices, police scanners, mesh radio nodes, and breaking geopolitical events — all updating in real time on one screen as well as an obfuscated communications protocol and information exchange infrastructure.
> 
> Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**. 35+ toggleable data layers, including SAR ground-change detection. Multiple visual modes (DEFAULT / SATELLITE / FLIR / NVG / CRT). Right-click any point on Earth for a country dossier, head-of-state lookup, and the latest Sentinel-2 satellite photo. No user data is collected or transmitted — the dashboard runs entirely in your browser against a self-hosted backend.
> 
> Designed for analysts, researchers, radio operators, and anyone who wants to see what the world looks like when every public signal is on the same map.
> 
> 
> ## ⚡ Quick Start (Docker)
> 
> ```bash
> git clone https://github.com/bigbodycobain/Shadowbroker.git
> cd Shadowbroker
> docker compose pull
> docker compose up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard! *(Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine)*
> 
> > **Backend port already in use?** The browser only needs port `3000`, but the backend API is also published on host port `8000` for local diagnostics. If another app already uses `8000`, create or edit `.env` next to `docker-compose.yml` and set `BACKEND_PORT=8001`, then run `docker compose up -d`.
> 
> > **Blank news/UAP/bases/wastewater after several minutes?** Check for backend OOM restarts with `docker events --since 30m --filter container=shadowbroker-backend --filter event=oom`. The default compose file gives the backend 4GB; if your host has less memory, reduce enabled feeds or set `BACKEND_MEMORY_LIMIT=3G` and expect slower/heavier layers to warm more gradually.
> 
> > **Podman users:** Podman works, but `podman compose` is a wrapper and still needs a Compose provider installed. On Windows/WSL, if you see `looking up compose provider failed`, install `podman-compose` and run `podman-compose pull` followed by `podman-compose up -d` from inside the cloned `Shadowbroker` folder. On Linux/macOS/WSL shells you can also use `./compose.sh --engine podman pull` and `./compose.sh --engine podman up -d`.
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
> ### 🐳 Docker Setup (Recommended for Self-Hosting)
> 
> The repo includes a `docker-compose.yml` that pulls pre-built images from GitHub Container Registry.
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> 
> ### 📦 Quick Start (No Code Required)
> 
> If you just want to run the dashboard without dealing with terminal commands:
> 
> 1. Go to the **[Releases](../../releases)** tab on the right side of this repo page.
> 2. Download the latest `.zip` file from the release.
> 3. Extract the folder to your computer.
> 4. **Windows:** Double-click `start.bat`.
>    **Mac/Linux:** Open terminal, type `chmod +x start.sh`, `dos2unix start.sh`, and run `./start.sh`.
> 5. It will automatically install everything and launch the dashboard!
> 
> Local launcher notes:
> 
> - `start.bat` / `start.sh` run the app without Docker — they install dependencies and start both servers directly.
> - If Wormhole identity or DM contact endpoints fail after an upgrade, check the `docs/mesh/` folder for troubleshooting.
> - For DM root witness, transparency, and operator monitoring rollout, start with `docs/mesh/wormhole-dm-root-operations-runbook.md`.
> - For sample DM root ops bridge assets, also see `scripts/mesh/poll-dm-root-health-alerts.mjs`, `scripts/mesh/export-dm-root-health-prometheus.mjs`, `scripts/mesh/publish-external-root-witness-package.mjs`, `scripts/mesh/smoke-external-root-witness-flow.mjs`, `scripts/mesh/smoke-root-transparency-publication-flow.mjs`, `scripts/mesh/smoke-dm-root-deployment-flow.mjs`, `scripts/mesh/sync-dm-root-external-assurance.mjs`, and `docs/mesh/examples/`.
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
> # Optional helper scripts (creates venv + installs dev deps)
> 
> # .\backend\scripts\setup-venv.ps1
> 
> # ./backend/scripts/setup-venv.sh
> 
> 
> # Frontend setup
> cd ../frontend
> npm ci
> ```
> 
> 
> ##  🔄 **How to Update**
> 
> ShadowBroker uses pre-built Docker images — no local building required. Updating takes seconds:
> 
> ```bash
> docker compose pull
> docker compose up -d
> ```
> 
> That's it. `pull` grabs the latest images, `up -d` restarts the containers.
> 
> > **Coming from an older version?** Pull the latest repo code first, then pull images:
> >
> > ```bash
> > git pull origin main
> > docker compose down
> > docker compose pull
> > docker compose up -d
> > ```
> >
> > Podman users should run the equivalent provider command, for example `podman-compose pull` and `podman-compose up -d`, or use `./compose.sh --engine podman pull` and `./compose.sh --engine podman up -d` from a bash-compatible shell.
> 
> 
> ## ✨ Features
> 
> 
> # Back up any local config you want to keep (.env, etc.)
> cd ..
> rm -rf Shadowbroker
> git clone https://github.com/bigbodycobain/Shadowbroker.git
> cd Shadowbroker
> docker compose pull
> docker compose up -d
> ```
> 
> **How to tell if you're affected:** If `docker compose up` shows `RUN apt-get`, `RUN npm ci`, or `RUN pip install` — it's building from source instead of pulling pre-built images. You need a fresh clone.
> 
> **Other troubleshooting:**
> 
> * **Force re-pull:** `docker compose pull --no-cache`
> * **Prune old images:** `docker image prune -f`
> * **Check logs:** `docker compose logs -f backend`
> 
> ---
> 
> 
> ### 📦 API Keys Panel — Path-First, Read-Only (NEW in v0.9.7)
> 
> Settings → API Keys is now a read-only registry. Key values never reach the browser process — not even an obfuscated prefix. The panel surfaces:
> 
> * The absolute path to the backend `.env` file as resolved by `Path(__file__).resolve()` — works on every OS, every drive, every install location (Linux `/home/...`, macOS `/Users/...`, Windows on any drive, Docker containers, cloud VMs).
> * `[exists]` / `[will be created on first save]` / `[NOT WRITABLE — edit by hand]` indicators on the path itself.
> * The path to the `.env.example` template so users can copy it and fill in their keys.
> * A binary `CONFIGURED` / `NOT CONFIGURED` badge per key, plus a copy-pastable env line (e.g. `OPENSKY_CLIENT_ID=YOUR_VALUE`) the user can drop into the file by hand.
> 
> OpenSky API credentials are now a **critical-warn** environment requirement: the startup environment check flags missing OpenSky OAuth2 credentials with a strong wa

## 延伸閱讀

相關概念：[[OSINT]] · [[即時通訊]] · [[資料視覺化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 直接競品（同子分類：OSINT 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "OSINT 工具" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "BigBodyCobain--Shadowbroker" AND status != "archived"
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
> const concepts = ["OSINT","即時通訊","資料視覺化"];
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
