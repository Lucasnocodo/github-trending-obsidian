---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 5187
stars_per_day: 133
forks: 779
open_issues: 1
created: 2026-03-05
pushed_at: 2026-04-04
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "OSINT 工具"
release_tag: "v0.9.6"
install_complexity: "easy"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球即時開源情報，從富豪私人飛機到地震事件，所有資訊在一個介面中整合。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 98
repo_size_kb: 7276
readme_length: 10000
bus_factor: 1
last_release_days: 19
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464,2026-03-13:2127,2026-03-14:2662,2026-03-15:2852,2026-03-16:3053,2026-03-17:3274,2026-03-18:3512,2026-03-19:3617,2026-03-20:3892,2026-03-21:4221,2026-03-22:4471,2026-03-23:4737,2026-03-24:4878,2026-03-25:4964,2026-03-26:5049,2026-03-27:5096,2026-03-28:5128,2026-04-04:5151,2026-04-10:5150,2026-04-11:5162,2026-04-12:5172,2026-04-13:5180,2026-04-14:5187"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/air_force_one"
  - "topic/airforce1"
  - "topic/asdb"
  - "topic/cctv"
  - "topic/cctv_cameras"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球即時開源情報，從富豪私人飛機到地震事件，所有資訊在一個介面中整合。"
---

# Shadowbroker

**5.2k** stars · **133** stars/天 · 建立 39 天前 · TypeScript · AGPL-3.0

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

`v0.9.6` `easy-install`

`air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` `osint` `osint-resources` `osint-tool` `sattelite` `sattelite-imagery` `sdr`

> [!summary] 一句話摘要
> 提供全球即時開源情報，從富豪私人飛機到地震事件，所有資訊在一個介面中整合。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (133 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Moderate (最後推送 9 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要即時追蹤全球事件並整合多種數據來源的安全分析師和研究人員。
> **一句話重點** 這個專案的價值在於其即時整合多種公共數據來源，讓用戶能夠在一個平台上獲取全面的全球情報。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到即時整合的全球情報，值得投資。

> [!abstract] 核心創新
> ShadowBroker 將 60+ 個實時情報來源整合到一個黑色操作地圖介面上，提供即時的多領域開源情報。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報平台，將 60 多個實時情報來源整合到一個黑色操作地圖介面上。用戶可以追蹤飛機、船隻、衛星、衝突區域、CCTV 網絡等，所有數據都在同一畫面上實時更新。這個工具的賣點在於其模組化架構，允許用戶根據需求獨立擴展情報後端和前端界面。使用者只需透過 Docker 部署，便能在本地環境中運行，並且不會收集或傳輸用戶數據，所有操作都在用戶的瀏覽器中進行。

技術上，這個專案使用 Next.js、MapLibre GL 和 FastAPI，具備 35+ 可切換的數據層，讓用戶能夠深入探索各種公共信號的地理分佈。相較於其他 OSINT 工具，ShadowBroker 提供的即時更新和多樣化數據來源使其在分析和研究上具備更高的靈活性和實用性。使用者可以透過右鍵點擊地圖上的任意位置，獲取該地區的最新衛星照片及國家資料，這在傳統的情報工具中並不常見。這個工具特別適合分析師、研究人員和無線電操作員等需要即時資訊的人士。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 即時數據整合 — 整合 60+ 實時情報來源，提供全面的地理情報。
- 模組化架構 — 獨立擴展情報後端和前端，根據需求調整系統規模。
- 無用戶數據收集 — 所有操作在本地瀏覽器中進行，保護用戶隱私。
- 多層數據顯示 — 提供 35+ 可切換的數據層，讓用戶深入探索不同的公共信號。
- Docker 部署 — 簡單的 Docker 設定，快速啟動本地服務。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker
```
2. 拉取 Docker 映像並啟動服務
```bash
docker compose pull && docker compose up -d
```
3. 在瀏覽器中打開儀表板
```bash
http://localhost:3000
```

## 程式碼範例

```ts
[
  "# 前置條件（需要 Docker）",
  "git clone https://github.com/BigBodyCobain/Shadowbroker.git",
  "cd Shadowbroker",
  "docker compose pull",
  "docker compose up -d",
  "# 預期輸出：在瀏覽器中訪問 http://localhost:3000 查看儀表板"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 39 天內累積 5187 stars（133/天），forks 779（15.0%），顯示出相對活躍的社群參與。開發者團隊由多位貢獻者組成，並且在開源情報收集上填補了市場上缺乏整合性工具的空白。此專案的推出正好契合了對於即時情報需求日益增長的背景，特別是在地緣政治和安全領域。社群的活躍度和高 fork 比率顯示出許多開發者在實際修改和使用這個工具，這對於未來的發展是個良好的信號。

## 適合誰使用

**目標受眾**：需要即時追蹤全球事件並整合多種數據來源的安全分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來實時追蹤全球飛行和海上活動，因為這樣能夠快速獲取關鍵數據，提升決策效率。
> - 研究人員用它來分析地震和其他自然災害的即時數據，因為它提供了多種數據來源，能夠更全面地理解事件影響。
> - 無線電操作員用它來監控公共無線電頻道，因為它能即時顯示不同地區的無線電活動，幫助他們做出更快的反應。

## 架構分析

ShadowBroker 採用模組化架構，將前端和後端分開，這樣的設計使得系統能夠根據需求獨立擴展。前端使用 Next.js 和 MapLibre GL，提供動態的地圖視覺化，而後端則使用 FastAPI 提供 API 支持。這種分離的架構使得開發和維護變得更加靈活，能夠快速適應新的需求和數據來源。由於所有操作都在用戶的瀏覽器中進行，這樣的設計也減少了對伺服器資源的需求，降低了運行成本。擴展性方面，因為使用了 Docker 部署，能夠輕鬆地在不同環境中運行，但在處理大量數據時，仍需注意性能瓶頸。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據整合能力，使用了多個 API 來獲取不同類型的數據，並透過 MapLibre GL 提供動態地圖視覺化。這個工具能夠處理的數據量相當龐大，因為它整合了來自航空、海洋、地震等多個領域的數據，並且更新頻率高達每分鐘一次。設計上選擇了 Next.js 和 FastAPI，這使得前後端的開發變得高效且靈活，並且能夠快速適應新的需求。由於這個專案的依賴樹相對簡單，主要依賴於幾個核心庫，因此在維護上相對容易，並且降低了 vendor lock-in 的風險。技術風險方面，隨著數據量的增長，可能會出現性能瓶頸，特別是在高流量的情況下。整合方面，這個工具能夠與主流的 CI/CD 工具相容，並且支持 Docker 部署，這使得它能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，對於新手來說相對友好。安裝過程中需要 Docker，但整體流程簡單明瞭。文件中包含了快速入門指南，並且有針對不同操作系統的安裝說明，這對於多樣化的用戶群體來說是個加分項。整體而言，花 30 分鐘內應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 即時更新的多元數據來源，提供全面的情報視圖。
> - 模組化設計，便於擴展和維護。
> - 無需收集用戶數據，保障隱私。

> [!danger] 缺點
> - 需要 Docker 環境，對新手可能有學習曲線。
> - 某些功能依賴於外部 API 金鑰，可能會增加使用門檻。
> - 在低配置機器上運行時可能會遇到性能問題。

> [!warning] 注意事項
> - 需要 Docker 環境才能運行。
> - 某些數據源需要 API 金鑰才能獲取完整數據。
> - 對於大型數據集的處理可能會有性能瓶頸，特別是在低配置的機器上。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 OSINT 功能，但專注於特定的數據來源，缺乏 ShadowBroker 的即時數據整合能力。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於特定的情報範疇，無法提供 ShadowBroker 的多層次數據視覺化功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的 OSINT 數據來源，無法提供 ShadowBroker 的即時數據整合能力。 | 如果你的需求主要集中在特定數據來源的分析，而不需要即時更新功能。 | medium，因為需要重新適應不同的數據處理方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供類似的 OSINT 功能，但缺乏 ShadowBroker 的多層次數據視覺化功能。 | 如果你需要一個簡單的 OSINT 工具，且不需要複雜的數據視覺化。 | low，因為功能相似，轉換過程相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的 OSINT 數據來源，無法提供 ShadowBroker 的即時數據整合能力。 | 提供類似的 OSINT 功能，但缺乏 ShadowBroker 的多層次數據視覺化功能。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的數據處理方式。 | low，因為功能相似，轉換過程相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在特定數據來源的分析，而不需要即時更新功 | 如果你需要一個簡單的 OSINT 工具，且不需要複雜的數據視 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Docker 啟動可能會遇到權限問題
  - 解法：確保 Docker 以管理員身份運行
- [MEDIUM] 某些數據源的 API 金鑰可能會過期
  - 解法：定期檢查和更新 API 金鑰
- **[HIGH]** 在低配置的機器上運行時可能會出現性能瓶頸
  - 解法：考慮升級硬體或使用雲端服務

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究機構的情報分析團隊 | 非常適合 | 能夠即時整合多種數據來源，提升分析效率。 |
| 小型創業公司的市場研究部門 | 適合 | 提供即時數據，幫助做出快速決策。 |
| 個人開發者的實驗性專案 | 普通 | 雖然功能強大，但可能需要較高的學習成本。 |
| 非營利組織的災害應對小組 | 不適合 | 對於資源有限的團隊，可能無法支持 Docker 環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時整合的全球情報，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的外部 API 需注意其安全性，特別是在涉及用戶數據的情況下。

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
| Forks | 779 |
| Open Issues | 1 |
| Issue 解決率 | 98% (56 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 7.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `air-force-one` `airforce1` `asdb` `cctv` `cctv-cameras` `cctv-surveillance` `earthquake-visualization` `elonjet` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 53
>     "Python" : 45
>     "Rust" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 120 |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 80 |
> | [@suranyami](https://github.com/suranyami) | 17 |
> | [@OrfeoTerkuci](https://github.com/OrfeoTerkuci) | 9 |
> | [@adust09](https://github.com/adust09) | 8 |

**最新版本**：v0.9.6 — ShadowBroker v0.9.6 (2026-03-26)

> [!info]- Release Notes
> ## Highlights
> 
> - **Infonet Testnet** —  a currently obfuscated communications platform with more planned. Meshtastic off the grid support.
> - **Gate messages on the hashchain** — encrypted Gate posts now propagate through normal Infonet chain sync. Only Gate members with MLS keys can decrypt. Every node carries the ciphertext.
> - **Mesh reputation system** — node trust scoring, peer push workers, voluntary Wormhole opt-in for node participation
> - **Wormhole gate encryption** — MLS-based key management for encrypted Gate chatrooms with per-gate personas
> - **Self-updater hardened** — encryption keys, chain state, and identity files are now protected from being overwritten during auto-update
> - **16 community contributors** credited in the changelog modal
> 
> ## New Features
> 
> - Decentralized Infonet Testnet
> - Shodan device search with map overlay
> - Real-time train tracking (Amtrak + European rail)
> - Sentinel Hub satellite imagery with OAuth2
> - 8 new intelligence layers (volcanoes, air quality, severe weather, fishing activity, military bases, power plants, SatNOGS, TinyGS)
> - CCTV expansion to 11,000+ cameras across 6 countries
> - Mesh Terminal CLI for power users
> - Prediction markets panel
> - Desktop-shell scaffold (pre-Tauri)
> - InfoNet Terminal with Gate view, Ballot view, Exchange view
> - killwormhole scripts for clean shutdown
> 
> ## Bug Fixes
> 
> - Fixed NODE AGREE button disappearing (auth mismatch)
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新，回應問題迅速。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-04-04）
> **活躍天數** 2 天 · **最新 commit** Fix admin session cookie Secure flag breaking localhost access

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#131](https://github.com/BigBodyCobain/Shadowbroker/issues/131) | Shadowbroker is taking up a huge amount of resources on the  | 2 | 3 |

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
> **ShadowBroker** is a real-time, multi-domain OSINT dashboard that fuses 60+ live intelligence feeds into a single dark-ops map interface. Aircraft, ships, satellites, conflict zones, CCTV networks, GPS jamming, internet-connected devices, police scanners, mesh radio nodes, and breaking geopolitical events — all updating in real time on one screen.
> 
> Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**. 35+ toggleable data layers. Right-click any point on Earth for a region/country dossier, head-of-state lookup, and the latest Sentinel-2 satellite photo. No user data is collected or transmitted — the dashboard runs entirely in your browser against a self-hosted backend.
> 
> Designed for analysts, researchers, radio operators, and anyone who wants to see what the world looks like when every public signal is on the same map.
> 
> 
> ## ⚡ Quick Start (Docker)
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> docker compose pull
> docker compose up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard! *(Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) or Docker Engine)*
> 
> > **Podman users:** Replace `docker compose` with `podman compose`, or use the `compose.sh` wrapper which auto-detects your engine. Force Podman with `./compose.sh --engine podman up -d`.
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
> The repo includes a `docker-compose.yml` that pulls pre-built images from the GitHub Container Registry.
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
>    **Mac/Linux:** Open terminal, type `chmod +x start.sh` and run `./start.sh`.
> 5. It will automatically install everything and launch the dashboard!
> 
> Local launcher notes:
> 
> - `start.bat` / `start.sh` run the app without Docker — they install dependencies and start both servers directly.
> - If Wormhole identity or DM contact endpoints fail after an upgrade, check the `docs/mesh/` folder for troubleshooting.
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
> # .\scripts\setup-venv.ps1
> 
> # ./scripts/setup-venv.sh
> 
> 
> # Frontend setup
> cd ../frontend
> npm install
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
> 
> 
> ## ✨ Features
> 
> 
> # Back up any local config you want to keep (.env, etc.)
> cd ..
> rm -rf Shadowbroker
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
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
> | [Shodan](https://www.shodan.io) | Internet-connected device search | On-demand | **Yes** |
> | [Amtrak](https://www.amtrak.com) | US train positions | ~60s | No |
> | [DigiTraffic](https://www.digitraffic.fi) | European rail positions | ~60s | No |
> | [Global Fishing Watch](https://globalfishingwatch.org) | Fishing vessel activity events | ~10min | No |
> | Transport for London, NYC DOT, TxDOT | CCTV cameras (UK, US) | ~10min | No |
> | Caltrans, WSDOT, GDOT, IDOT, MDOT | CCTV cameras (5 US states) | ~10min | No |
> | Spain DGT, Madrid City | CCTV cameras (Spain) | ~10min | No |
> | [Singapore LTA](https://datamall.lta.gov.sg) | Singapore traffic cameras | ~10min | **Yes** |
> | [Windy Webcams](https://www.windy.com) | Global webcams | ~10min | No |
> | [SatNOGS](https://satnogs.org) | Amateur satellite ground stations | ~30min | No |
> | [TinyGS](https://tinygs.com) | LoRa satellite ground stations | ~30min | No |
> | [Meshtastic MQTT](https://meshtastic.org) | Mesh radio node positions | Real-time | No |
> | [APRS-IS](https://www.aprs-is.net) | Amateur radio positions | Real-time TCP | No |
> | [KiwiSDR](https://kiwisdr.com) | Public SDR receiver locations | ~30min | No |
> | [OpenMHZ](https://openmhz.com) | Police/fire scanner feeds | Real-time | No |
> | [Smithsonian GVP](https://volcano.si.edu) | Holocene volcanoes worldwide | Static (cached) | No |
> | [OpenAQ](https://openaq.org) | Air quality PM2.5 stations | ~120s | No |
> | NOAA / NWS | Severe weather alerts & polygons | ~120s | No |
> | [WRI Global Power Plant DB](https://datasets.wri.org) | 35,000+ power plants | Static (cached) | No |
> | Military base datasets | Global military installations | Static (cached) | No |
> | [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov) | NOAA-20 VIIRS fire/thermal hotspots | ~120s | No |
> | [NOAA SWPC](https://services.swpc.noaa.gov) | Space weather Kp index & solar events | ~120s | No |
> | [IODA (Georgia Tech)](https://ioda.inetintel.cc.gatech.edu) | Regional internet outage alerts | ~120s | No |
> | [DC Map (GitHub)](https://github.com/Ringmast4r/Data-Center-Map---Global) | Global data center locations | Static (cached 7d) | No |
> | [NASA GIBS](https://gibs.earthdata.nasa.gov) | MODIS Terra daily satellite imagery | Daily (24-48h delay) | No |
> | [Esri World Im

## 延伸閱讀

相關概念：[[OSINT]] · [[資料視覺化]] · [[即時通訊]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]]

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
> const concepts = ["OSINT","資料視覺化","即時通訊"];
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
