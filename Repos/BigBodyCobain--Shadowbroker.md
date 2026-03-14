---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 2662
stars_per_day: 333
forks: 341
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-14
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "開源情報"
release_tag: "v0.9.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球開源情報的即時地理空間情報平台，整合多種數據來源，讓用戶能夠追蹤各類活動。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 107079
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464,2026-03-13:2127,2026-03-14:2662"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/airforce1"
  - "topic/asdb"
  - "topic/cctv"
  - "topic/cctv_cameras"
  - "topic/cctv_surveillance"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球開源情報的即時地理空間情報平台，整合多種數據來源，讓用戶能夠追蹤各類活動。"
---

# Shadowbroker

**2.7k** stars · **333** stars/天 · 建立 8 天前 · TypeScript · 未標註授權

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

`v0.9.0`

`airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` `osint-resources` `osint-tool` `sattelite` `sattelite-imagery` `sdr`

> [!summary] 一句話摘要
> 提供全球開源情報的即時地理空間情報平台，整合多種數據來源，讓用戶能夠追蹤各類活動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (333 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要整合多種開源情報數據以進行分析的研究人員和安全專家。
> **一句話重點** ShadowBroker 將分散的開源情報數據整合到一個平台上，讓用戶能夠輕鬆獲取全球活動的全貌。

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
> **結論** 花 5 小時學習，10 小時整合，得到即時情報聚合的能力，值得嘗試。

> [!abstract] 核心創新
> ShadowBroker 將多個公共數據來源整合到一個即時更新的儀表板中，提供前所未有的視覺化體驗。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報（OSINT）儀表板，將來自數十個開源情報來源的實時數據聚合在一個統一的黑色操作地圖界面上。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾以及突發的地緣政治事件，所有數據均實時更新。這個工具的賣點在於它將分散的公共數據整合到一個界面，讓分析師、研究人員和愛好者能夠快速獲取全球活動的全貌。使用者只需運行 `./compose.sh up -d` 指令即可啟動儀表板，並在 `http://localhost:3000` 查看數據。其後端使用 FastAPI 和 Python，前端則基於 Next.js 和 MapLibre GL，這樣的技術選型使得數據展示流暢且響應快速。這個專案的獨特之處在於它不僅提供了即時的數據視覺化，還支持多種數據來源，包括航空、海運和地震監測等，這些數據通常分散在不同的工具和 API 中。與其他類似工具相比，ShadowBroker 的優勢在於其綜合性和易用性，特別適合需要快速獲取和分析全球情況的用戶。

**技術棧**：`Next.js` · `FastAPI` · `Python 3.10+` · `Docker`

## 重點功能

- 即時數據聚合 — 支持追蹤飛機、船隻、衛星等多種活動，數據每 60 秒更新一次。
- 多數據來源整合 — 包括 OpenSky Network、ADS-B、AIS、地震監測等，提供全面的情報視圖。
- 用戶友好的儀表板 — 使用 Next.js 和 MapLibre GL，提供流暢的用戶體驗和即時數據視覺化。
- 自動更新功能 — 用戶可通過儀表板一鍵更新，簡化維護流程。
- 高可擴展性 — 支持 Docker 和 Podman 部署，方便用戶在不同環境中運行。

## 快速開始

1. 克隆專案並啟動 Docker 容器
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 訪問儀表板
```bash
Open http://localhost:3000
```
3. 設置環境變數（可選）
```bash
echo "AIS_API_KEY=your_aisstream_key" >> .env
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Docker 或 Podman",
  "指令": "./compose.sh up -d",
  "預期輸出": "啟動儀表板並在 http://localhost:3000 查看"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 2662 stars（333/天），forks 341（12.8%），顯示出強勁的增長潛力。這個專案的創始人 BigBodyCobain 及其團隊在開源社區中有一定的影響力，並且專案解決了以往無法有效整合的多種公共數據問題。之前用戶可能需要依賴多個工具來獲取這些信息，而 ShadowBroker 將其集中在一個平台上，顯著提升了使用便利性。這個專案的推出也恰逢對開源情報需求上升的時期，尤其是在全球政治和環境事件頻發的背景下。Forks/stars 比率為 12.8%，顯示出許多人對這個專案的實際修改和使用有興趣。

## 適合誰使用

**目標受眾**：需要整合多種開源情報數據以進行分析的研究人員和安全專家。

> [!example] 使用場景
> - 安全分析師用它來實時追蹤軍事飛行活動，因為能夠迅速獲得全球軍用飛機的動態，提升了情報收集效率。
> - 環境科學家用它來監測地震活動，因為能夠即時獲取全球地震數據，幫助分析災害影響。
> - 交通管理者用它來觀察海運交通，因為能夠整合多個數據來源，提供全面的航運狀況。
> - 研究人員用它來分析地緣政治事件，因為能夠快速獲得相關的實時數據，支持研究報告的撰寫。

## 架構分析

ShadowBroker 採用微服務架構，前端使用 Next.js 提供用戶界面，後端則使用 FastAPI 處理數據請求。數據流從多個開源 API 獲取，並經過後端處理後傳遞給前端。這樣的設計使得系統能夠靈活擴展，並能夠快速響應用戶請求。選擇 Docker 作為部署方式，雖然增加了初始設置的複雜性，但能夠確保環境的一致性和可移植性。擴展性方面，若未來需要支持更多數據來源或功能，僅需在後端添加相應的服務即可。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據聚合能力，使用 FastAPI 處理數據請求，並通過 Next.js 提供用戶界面。這種設計使得系統能夠快速響應用戶請求，並支持多種數據來源的整合。效能方面，系統能夠處理大量的實時數據，並在高負載情況下保持穩定。選擇 Docker 作為部署方式雖然增加了初始設置的複雜性，但能確保環境的一致性，並簡化了維護過程。技術風險方面，依賴外部 API 可能導致數據更新延遲，並且在高流量情況下，系統性能可能會受到影響。整合方面，與主流的 CI/CD 工具相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，安裝過程相對順暢，但需要用戶熟悉 Docker。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，適合需要快速反應的場景
> - 多數據來源整合，提供全面的情報視圖
> - 用戶友好的界面設計，降低使用門檻

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的用戶有一定學習曲線
> - 某些功能依賴外部 API，可能會受到限制
> - 在高流量情況下，性能可能會受到影響

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行
> - 某些數據來源需要 API 金鑰才能訪問
> - 不支持 Windows 的原生腳本運行，需使用 Git Bash

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而 ShadowBroker 專注於即時情報聚合，適合需要即時監控的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的開源情報，而 ShadowBroker 提供更廣泛的全球活動監控。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而 ShadowBroker 專注於即時情報聚合，適合需要即時監控的場景。 | 如果你的需求主要是資料備份和同步，而不是即時監控，則 AlpinDale/parsync 更適合。 | low，因為兩者的功能範圍不同，遷移不會涉及太多重複的功能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的開源情報，而 ShadowBroker 提供更廣泛的全球活動監控。 | 如果你的工作重心在醫療數據的監控和分析，則 FreedomIntelligence/OpenClaw-Medical-Skills 更適合。 | medium，因為需要重新調整數據來源和分析方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和備份，而 ShadowBroker 專注於即時情報聚合，適合需要即時監控的場景。 | 專注於醫療領域的開源情報，而 ShadowBroker 提供更廣泛的全球活動監控。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會涉及太多重複的功能。 | medium，因為需要重新調整數據來源和分析方法。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料備份和同步，而不是即時監控，則 Alp | 如果你的工作重心在醫療數據的監控和分析，則 FreedomI |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Docker 容器啟動可能會失敗
  - 解法：確保 Docker 和 Docker Compose 的版本是最新的
- [MEDIUM] 某些 API 數據更新延遲，影響即時性
  - 解法：定期檢查 API 狀態，必要時更換數據來源
- [low] Windows 環境下腳本執行不便
  - 解法：使用 Git Bash 來執行 Linux 命令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究機構的開源情報分析部門 | 非常適合 | 能夠整合多種數據來源，提供全面的情報視圖。 |
| 小型開發團隊進行實驗性專案 | 適合 | 提供即時數據聚合，適合快速迭代的開發流程。 |
| 個人開發者進行數據分析 | 普通 | 雖然功能強大，但需要一定的技術背景。 |
| 企業級應用的核心系統 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時情報聚合的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴的外部 API 需謹慎管理，確保不洩漏 API 金鑰。

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
| Forks | 341 |
| Open Issues | 0 |
| Issue 解決率 | 100% (41 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 104.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 69
>     "Python" : 30
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 67 |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 32 |
> | [@suranyami](https://github.com/suranyami) | 17 |
> | [@ttulttul](https://github.com/ttulttul) | 1 |
> | [@csysp](https://github.com/csysp) | 1 |

**最新版本**：v0.9.0 — ShadowBroker v0.9.0 (2026-03-13)

> [!info]- Release Notes
> ## What's New in v0.9.0
> 
> ### In-App Auto-Updater
> One-click updates directly from the dashboard — no more manual downloads. Click **CHECK UPDATES** → confirmation dialog → **AUTO UPDATE**. The backend downloads the latest release zip, backs up your files, extracts over the project, and auto-restarts. Your `.env`, databases, and cache files are never touched. A **MANUAL DOWNLOAD** fallback link is always available if anything goes wrong.
> 
> ### Granular Ship Layer Controls
> Ships are now split into 4 independent toggles in the sidebar:
> - **Military / Carriers** — naval vessels and aircraft carriers
> - **Cargo / Tankers** — commercial shipping
> - **Civilian Vessels** — everything else
> - **Cruise / Passenger** — passenger ships
> 
> Each toggle shows its own live count. Default: military, cargo, and passenger ON; civilian OFF.
> 
> ### Stable Entity Selection
> Ship and flight markers now use **MMSI/callsign** as identifiers instead of volatile array indices. Selecting a ship or plane stays locked on even when data refreshes every 60 seconds. No more "phantom deselection" when the backend sends updated data.
> 
> ### Dismissible Threat Alerts
> Click the **×** on any threat alert bubble to dismiss it for the current session. Uses stable content hashing (title + coordinates) so dismissed alerts stay hidden even across 60-second data refresh cycles.
> 
> ### Faster Data Loading
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，所有問題均已解決，顯示出良好的維護狀態。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-13 ~ 2026-03-14）
> **活躍天數** 2 天 · **最新 commit** docs: clarify data sourcing in Why This Exists section

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
>    **Mac/Linux:** Open terminal, type `chmod +x start.sh`, and run `./start.sh`.
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
> If you are coming from v0.8.0 or older, you must pull the new code and rebuild your containers to see the latest data layers and performance fixes.
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
> # Optional (enhances data quality)
> OPENSKY_CLIENT_ID=your_opensky_client_id      # OAuth2 — higher rate limits for flight data
> OPENSKY_CLIENT_SECRET=your_opensky_secret     # OAuth2 — paired with Client ID above
> LTA_ACCOUNT_KEY=your_lta_key                  # Singapore CCTV cameras
> ```
> 
> 
> ## Why This Exists
> 
> A surprising amount of global telemetry is already public:
> 
> - Aircraft ADS-B broadcasts
> - Maritime AIS signals
> - Satellite orbital data
> - Earthquake sensors
> - Environmental monitoring networks
> 
> This data is scattered across dozens of tools and APIs. ShadowBroker began as an experiment to see what the world looks like when these signals are combined into a single interface.
> 
> The project does not introduce new surveillance capabilities — it aggregates and visualizes existing public datasets, including public aircraft registration records. It is fully open-source so anyone can audit exactly what data is accessed and how. No user data is collected or transmitted — the dashboard runs entirely in your browser against a self-hosted backend.
> 
> ---
> 
> 
> ## Interesting Use Ca

## 延伸閱讀

相關概念：[[OSINT]] · [[地理空間情報]] · [[即時通訊]]

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
> const concepts = ["OSINT","地理空間情報","即時通訊"];
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
