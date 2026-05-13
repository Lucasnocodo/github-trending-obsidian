---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: Python
license: AGPL-3.0
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. Hook an AI agent up to have it parse through data and find previously unseen correlations. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 6231
stars_per_day: 92
forks: 971
open_issues: 0
created: 2026-03-05
pushed_at: 2026-05-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "OSINT 工具"
release_tag: "v0.9.79"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球即時開源情報，整合多種數據源於單一介面，讓使用者能追蹤航空、海運、衛星等資訊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 10084
readme_length: 10000
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464,2026-03-13:2127,2026-03-14:2662,2026-03-15:2852,2026-03-16:3053,2026-03-17:3274,2026-03-18:3512,2026-03-19:3617,2026-03-20:3892,2026-03-21:4221,2026-03-22:4471,2026-03-23:4737,2026-03-24:4878,2026-03-25:4964,2026-03-26:5049,2026-03-27:5096,2026-03-28:5128,2026-04-04:5151,2026-04-10:5150,2026-04-11:5162,2026-04-12:5172,2026-04-13:5180,2026-04-14:5187,2026-04-15:5238,2026-04-16:5267,2026-04-17:5282,2026-04-18:5368,2026-04-19:5406,2026-04-20:5429,2026-04-21:5448,2026-04-22:5461,2026-04-23:5476,2026-04-24:5482,2026-04-25:5490,2026-04-26:5499,2026-04-27:5505,2026-04-28:5516,2026-04-29:5527,2026-04-30:5532,2026-05-01:5535,2026-05-02:5562,2026-05-03:5608,2026-05-04:5646,2026-05-05:5730,2026-05-06:5943,2026-05-07:5996,2026-05-08:6113,2026-05-09:6150,2026-05-10:6178,2026-05-11:6198,2026-05-12:6215,2026-05-13:6231"
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
  - "提供全球即時開源情報，整合多種數據源於單一介面，讓使用者能追蹤航空、海運、衛星等資訊。"
---

# Shadowbroker

**6.2k** stars · **92** stars/天 · 建立 68 天前 · Python · AGPL-3.0

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

`v0.9.79`

`air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` `osint-resources` `osint-tool` `sattelite` `sattelite-imagery` `sdr`

> [!summary] 一句話摘要
> 提供全球即時開源情報，整合多種數據源於單一介面，讓使用者能追蹤航空、海運、衛星等資訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (92 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要即時開源情報並希望在單一介面上整合多種數據來源的安全分析師。
> **一句話重點** ShadowBroker 讓即時開源情報的整合變得前所未有的簡單，並且不再需要用戶數據。

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
> **結論** 花 5 小時學習，3 小時整合，得到即時的開源情報整合效果，值得投入。

> [!abstract] 核心創新
> ShadowBroker 提供了一個無需用戶數據的即時多域 OSINT 數據聚合平台。

## 專案簡介

ShadowBroker 是一個去中心化的情報平台，能夠從 60 多個即時情報來源聚合開源情報（OSINT）數據，並在單一的黑色行動地圖介面上顯示。用戶可以追蹤飛機、船隻、衛星、衝突區域、CCTV 網絡等，所有數據都會實時更新。核心賣點是其多層數據顯示和無需用戶數據的隱私設計。使用者只需透過 Docker 部署，執行 `docker compose up -d` 即可啟動後台和前端介面，並在 `http://localhost:3000` 查看儀表板。

這樣的設計讓使用者能夠在無需複雜設置的情況下，快速獲得全球情況的視覺化數據。技術上，ShadowBroker 採用了 Next.js、MapLibre GL 和 FastAPI，這些技術的選擇使得前後端的分離和擴展性更佳。與其他工具相比，ShadowBroker 提供了更為全面的數據來源，並且支持多種視覺模式，讓使用者能夠根據需求選擇最適合的視圖。這種設計使得它在需要即時情報的場景中，尤其是軍事或安全分析領域，表現出色。

**技術棧**：`Next.js 18` · `FastAPI` · `MapLibre GL` · `Python 3.10`

## 重點功能

- 即時數據聚合 — 從 60+ 個情報來源實時更新數據。
- 多層數據顯示 — 提供 35+ 可切換的數據層，包括 SAR 地面變化檢測。
- 無需用戶數據 — 儀表板完全在用戶瀏覽器中運行，無需傳輸用戶數據。
- 多種視覺模式 — 支持 DEFAULT、SATELLITE、FLIR、NVG 和 CRT 等多種視圖。
- 模組化架構 — 前端和後端可獨立擴展，支持安全的外部訪問。

## 快速開始

1. 克隆專案並進入資料夾
```bash
git clone https://github.com/bigbodycobain/Shadowbroker.git && cd Shadowbroker
```
2. 使用 Docker 啟動服務
```bash
docker compose up -d
```
3. 在瀏覽器中查看儀表板
```bash
Open http://localhost:3000
```

## 程式碼範例

```python
[
  "# 前置條件：需要安裝 Docker",
  "docker compose up -d",
  "# 預期輸出：啟動後端服務並在 http://localhost:3000 查看儀表板"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 68 天內累積 6231 stars（每天 92），forks 971（15.6%），顯示出強勁的社群反響。作者 BigBodyCobain 是一位活躍的開源貢獻者，這個專案解決了以往需要多個工具才能獲得的即時情報整合問題，讓使用者能夠在單一平台上獲得多元數據。近期的推廣和社群討論也促進了其曝光度，並且在開源情報領域中填補了數據整合的空白。高達 15.6% 的 forks/stars 比率顯示出使用者對這個工具的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要即時開源情報並希望在單一介面上整合多種數據來源的安全分析師。

> [!example] 使用場景
> - 情報分析師用它來即時追蹤全球的飛行和海運動態，因為它整合了多個數據來源，能提供更全面的視角。
> - 安全研究員用它來監控地緣政治事件的發展，因為它的即時更新功能能讓他們快速反應。
> - 無線電操作員用它來獲取即時的無線電通訊數據，因為它能夠整合多種信號來源，提升工作效率。

## 架構分析

ShadowBroker 採用模組化架構，前端使用 Next.js 來提供用戶界面，後端則使用 FastAPI 處理數據請求。這樣的設計使得前後端可以獨立擴展，並且能夠在不同的環境中運行。數據流從多個即時來源進入後端，經過處理後再傳遞到前端顯示。

選擇 FastAPI 是因為其高效的性能和簡單的 API 設計，這使得開發和維護都變得更加容易。這種架構的代價在於需要 Docker 環境來運行，對於一些用戶來說可能會增加學習成本。整體而言，這種設計能夠支持高效的數據處理和可擴展性，但在資源需求上可能會成為瓶頸，特別是在數據量大的情況下。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據聚合能力，能夠從多個來源獲取信息並顯示在用戶界面上。使用 FastAPI 作為後端框架，能夠高效處理並響應用戶請求，這對於需要即時反應的情報分析至關重要。整體架構的設計使得前後端可以獨立運行，這樣的選擇在擴展性上有很大優勢，但也帶來了 Docker 環境的依賴。效能方面，該平台能夠處理大量數據，但在資源配置不足的情況下，可能會出現內存不足的問題。這個平台的設計選擇使得它在數據處理上表現出色，但在某些情況下可能會因為過度依賴 Docker 而導致使用上的不便。與主流的開發框架相比，ShadowBroker 的整合難度不高，但仍需一定的學習成本，特別是對於不熟悉 Docker 的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要 Docker 環境，對於不熟悉的用戶可能會有些挑戰。整體上，文件提供了良好的入門指導，並且有多種方式可以啟動服務。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，能夠快速獲取全球情況。
> - 多層數據顯示，提供靈活的視覺化選擇。
> - 無需用戶數據，保護用戶隱私。

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的用戶有學習曲線。
> - 對於低配置主機可能需要調整內存設置。
> - 不支持 Windows 以外的環境的直接安裝。

> [!warning] 注意事項
> - 需要 Docker 環境才能運行。
> - 對於低配置的主機，可能需要調整後端內存限制。
> - 不支持 Windows 以外的環境的直接安裝，需使用 Docker。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 OSINT 數據聚合，但主要針對社交媒體數據分析，適合需要社交媒體情報的使用者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網路安全和漏洞數據的聚合，適合需要安全漏洞情報的研究人員。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於社交媒體數據的分析，提供不同的數據視角。 | 如果你的需求主要集中在社交媒體的情報分析，這個工具會更合適。 | medium，因為需要重新適應不同的數據來源和界面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於網路安全和漏洞數據的聚合，提供針對性強的安全情報。 | 如果你的工作主要涉及網路安全，這個工具會更適合。 | medium，因為需要重新設置數據來源和分析流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於社交媒體數據的分析，提供不同的數據視角。 | 專注於網路安全和漏洞數據的聚合，提供針對性強的安全情報。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的數據來源和界面。 | medium，因為需要重新設置數據來源和分析流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在社交媒體的情報分析，這個工具會更合適。 | 如果你的工作主要涉及網路安全，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在資源配置不足的主機上運行時可能會出現內存不足的問題。
  - 解法：調整 Docker 的內存限制，或減少啟用的數據來源。
- [MEDIUM] Docker 環境未正確設置時，可能無法啟動服務。
  - 解法：確保 Docker 已正確安裝並運行，並參考官方文檔進行設置。
- [MEDIUM] 某些數據層在特定地區可能無法顯示。
  - 解法：檢查 API 金鑰是否正確配置，並確保所需的數據來源已啟用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 軍事情報分析團隊 | 非常適合 | 能夠即時獲取全球情況，並整合多種數據來源。 |
| 小型安全研究公司 | 適合 | 提供了即時的開源情報，能夠幫助快速反應。 |
| 個人開發者 | 普通 | 雖然功能強大，但需要一定的學習曲線。 |
| 大型企業的安全部門 | 不適合 | 可能需要更高的穩定性和支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時的開源情報整合效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料，適合在 CI/CD 環境中使用。

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
| Forks | 971 |
| Open Issues | 0 |
| Issue 解決率 | 100% (68 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 9.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 61
>     "TypeScript" : 35
>     "Rust" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 126 |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 120 |
> | [@suranyami](https://github.com/suranyami) | 17 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 10 |
> | [@OrfeoTerkuci](https://github.com/OrfeoTerkuci) | 9 |

**最新版本**：v0.9.79 — ShadowBroker v0.9.79 (2026-05-12)

> [!info]- Release Notes
> ShadowBroker v0.9.79 packages the current runtime, onboarding, secure messaging, Mesh/MQTT controls, and map telemetry updates.
> 
> ## Highlights
> - Tightens Wormhole/Infonet and public MeshChat separation so private and public transport lanes do not run over each other.
> - Improves Infonet secure-message identity handling, public address display, label/revoke management, and startup recovery.
> - Restores selected-asset aircraft/ship trail behavior while keeping normal route lines clean.
> - Refines tracked-aircraft emissions display, aircraft wiki/media handling, and map-side telemetry presentation.
> - Updates onboarding, package metadata, Helm metadata, desktop metadata, and graphify ignores for v0.9.79.
> 
> ## Installers
> - `ShadowBroker_0.9.79_x64-setup.exe`
> - `ShadowBroker_0.9.79_x64_en-US.msi`
> - `ShadowBroker_v0.9.79.zip`
> 
> ## Notes
> - Windows installers are unsigned public builds; SmartScreen warnings may appear until code signing is added.
> - ZIP, EXE, and MSI assets are built from the `v0.9.79` source tag.

## 社群與生態

**社群活躍度**：社群活躍，所有問題均已解決，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-04 ~ 2026-05-12）
> **活躍天數** 5 天 · **最新 commit** Fix secure messaging test expectations

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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

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
