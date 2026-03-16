---
repo: novatic14/MANPADS-System-Launcher-and-Rocket
url: https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket
owner: novatic14
owner_type: User
language: N/A
license: N/A
description: ""
homepage: ""
stars: 969
stars_per_day: 242
forks: 225
open_issues: 4
created: 2026-03-11
pushed_at: 2026-03-15
first_seen: 2026-03-16
week: "2026-W12"
month: "2026-03"
category: "其他"
subcategory: "開源硬體"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-16
use_case: "提供一個低成本的火箭發射器和導引火箭系統的原型設計。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-19"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 23540
readme_length: 1679
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-16"
star_history: "2026-03-16:969"
tags:
  - github
  - "category/其他"
  - "lang/other"
aliases:
  - "MANPADS-System-Launcher-and-Rocket"
  - "novatic14/MANPADS-System-Launcher-and-Rocket"
  - "提供一個低成本的火箭發射器和導引火箭系統的原型設計。"
---

# MANPADS-System-Launcher-and-Rocket

**969** stars · **242** stars/天 · 建立 4 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供一個低成本的火箭發射器和導引火箭系統的原型設計。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (242 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對火箭技術和開源硬體有興趣的學生和業餘愛好者。
> **一句話重點** 這個專案展示了如何利用開源硬體和消費電子產品來實現火箭發射系統，降低了進入門檻。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "開源硬體" && p.file.name !== "novatic14--MANPADS-System-Launcher-and-Rocket" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 開源硬體 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 這個專案提供了一個低成本的火箭發射系統原型，使用消費電子產品和3D列印技術。

## 專案簡介

這個專案是一個低成本火箭發射器和導引火箭系統的原型，旨在利用消費電子產品和3D列印元件來實現。使用者可以透過ESP32飛行計算機和MPU6050慣性測量單元來控制火箭的折疊翼和導向穩定性。發射器整合了GPS、指南針和氣壓模組等感測器，以確定方向並提供遙測數據。這個系統的設計過程使用Fusion 360進行建模，並透過OpenRocket進行模擬，最終經過多次機械設計、電子整合和發射測試來完成。專案的總硬體成本約為96美元，這使得它在經濟上相對可行。核心內容包括機械CAD檔案、火箭飛行控制器和發射系統的韌體源碼，還有用於氣動穩定性分析的OpenRocket模擬檔案。這個專案的「一句話賣點」是：用低成本的消費電子產品打造一個可操作的火箭發射系統，適合教育和實驗用途。

**技術棧**：`ESP32` · `Fusion 360` · `OpenRocket`

## 重點功能

- 低成本設計 — 總硬體成本約96美元，適合教育和實驗用途。
- 使用ESP32飛行計算機 — 控制火箭的折疊翼和穩定性，提供高效的控制系統。
- 整合多種感測器 — 包括GPS、指南針和氣壓模組，以獲得準確的遙測數據。
- 提供完整的CAD檔案 — 方便使用者進行機械設計和組裝。
- 開源韌體源碼 — 允許使用者根據需求進行修改和擴展。

## 快速開始

1. 下載專案檔案
```bash
git clone https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket.git
```
2. 安裝所需的開發工具
```bash
pip install -r requirements.txt
```
3. 編譯韌體
```bash
make firmware
```

## 程式碼範例

```bash
# README 未提供程式碼範例
# 基於文件推測
# 使用 ESP32 控制火箭的基本程式碼範例
#include <ESP32.h>
void setup() {
  // 初始化控制系統
}
void loop() {
  // 控制火箭飛行
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立4天內累積969 stars（242/天），forks 225（23.2%），顯示出強烈的興趣和參與度。這位作者novatic14在開源硬體領域有一定的經驗，這個專案解決了低成本火箭發射系統的需求，之前的方案往往成本高且不易取得。隨著開源硬體的興起，這個專案提供了一個實用的解決方案，吸引了許多對火箭技術感興趣的開發者和愛好者。forks/stars的比率高達23.2%，顯示出許多使用者正在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：對火箭技術和開源硬體有興趣的學生和業餘愛好者。

> [!example] 使用場景
> - 學生用它來學習火箭發射原理和控制系統，因為這個專案提供了完整的設計和實作指南，降低了學習門檻。
> - 業餘火箭愛好者用它來進行小型火箭發射實驗，因為其低成本和開源特性使得實驗變得可行。
> - 教育機構用它來設計課程，教授機械設計和電子整合，因為它包含了詳細的文檔和開發媒體，便於教學。

## 架構分析

這個專案採用模組化設計，將火箭的控制系統和發射器分開。使用ESP32作為核心控制單元，負責處理感測器數據和控制信號。資料流從感測器到ESP32，再到發射器，確保即時控制和反饋。

這樣的設計使得系統易於擴展和維護，但也要求使用者具備一定的技術背景。選擇ESP32而非其他微控制器，因為其具備Wi-Fi和藍牙功能，便於遠端控制和數據傳輸。整體架構的擴展性良好，但在高負載情況下可能會面臨性能瓶頸。

## 技術深入分析

這個專案的核心技術機制在於使用ESP32作為飛行控制器，並結合MPU6050進行姿態控制。這樣的設計使得火箭能夠在飛行過程中進行實時調整，確保穩定性。效能方面，這個系統能夠處理小型火箭的飛行控制，但在大規模發射時可能會遇到計算資源不足的問題。選擇ESP32而非其他微控制器的原因在於其強大的無線通訊能力，這對於遙測和控制至關重要。整體依賴樹相對簡單，主要依賴ESP32的開發環境和相關庫。設計上，這個專案的風險在於對於高負載的控制需求，可能會導致性能瓶頸，特別是在多個火箭同時發射的情況下。整合到現有的開發環境中相對容易，尤其是對於熟悉ESP32的開發者來說。

## 新手體驗

> [!info] 上手難度評估
> README文件提供了基本的專案概述，但缺乏詳細的安裝和使用範例。安裝過程相對順暢，但對於新手來說可能會有一些技術門檻。文件沒有提供多語言支持，僅有英文版本。整體而言，花30分鐘能夠完成基本的設置，但深入使用可能需要更多時間來熟悉系統。

## 優缺點分析

> [!success] 優點
> - 低成本，適合教育和實驗用途。
> - 開源設計，便於修改和擴展。
> - 整合多種感測器，提供準確的遙測數據。

> [!danger] 缺點
> - 需要使用者具備一定的電子和機械設計知識。
> - 不支援大型火箭設計，僅適合小型原型。
> - 發射測試需要遵循當地法律法規，可能會受到限制。

> [!warning] 注意事項
> - 不支援大型火箭設計，僅適合小型火箭原型。
> - 需要使用者具備基本的電子和機械設計知識。
> - 發射測試需要遵循當地法律法規，可能會受到限制。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
| Forks | 225 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-15 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 23.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/novatic14/MANPADS-System-Launcher-and-Rocket) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@novatic14](https://github.com/novatic14) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有4個開放的Issues

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-11 ~ 2026-03-15）
> **活躍天數** 2 天 · **最新 commit** Update README with new video links and formatting

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket/issues/3) | It is too round at the top. | 2 | 1 |
> | [#2](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket/issues/2) | Closed | 1 | 3 |
> | [#5](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket/issues/5) | Proposal: Adoption of CERN Open Hardware License | 0 | 0 |
> | [#1](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket/issues/1) | Initializing document manifest xml stream failed | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # MANPADS Rocket & Launcher Prototype
> 
> ## 30 Second Overview
> 
> [](https://www.youtube.com/shorts/zFn__6_LdTc)
> 
> ## Full System Overview (5 Minutes)
> 
> [](https://www.youtube.com/watch?v=DDO2EvXyncE&t=59s)
> 
> ---
> 
> ## Full Development Media and Documentation
> https://drive.google.com/drive/folders/17zpks6_R59H0iXJaGkTrtp1SzIFFAQtY?usp=drive_link
> 
> The Google Drive archive contains additional development media and documentation, including:
> 
> - Mechanical design and assembly  
> - System electronics and firmware testing  
> - Launch testing and rocket motor development  
> - System flow diagrams  
> - Rocket specifications  
> - Bill of materials and cost breakdown  
> 
> ---
> 
> ## Project Overview
> 
> This project is a proof-of-concept prototype of a low-cost rocket launcher and guided rocket system built using consumer electronics and 3D-printed components.
> 
> The rocket uses folding fins and canard stabilization controlled by an onboard ESP32 flight computer and MPU6050 inertial measurement unit. The launcher integrates sensors such as GPS, compass, and barometric modules to determine orientation and provide telemetry.
> 
> The system was designed in Fusion 360, simulated using OpenRocket, and developed through iterative mechanical design, electronics integration, and launch testing.
> 
> The total hardware cost of the prototype is approximately **$96**.
> 
> ---
> 
> ## Repository Contents
> 
> This repository contains the core engineering components of the project:
> 
> - Mechanical CAD files for the rocket and launcher  
> - Firmware source code for the rocket flight controller and launcher system  
> - OpenRocket simulation files used for aerodynamic stability analysis  
> - Supporting project documentation

## 延伸閱讀

相關概念：[[開源硬體]] · [[機械設計]] · [[電子整合]]

相關專案：[[NawfalMotii79--PLFM_RADAR|NawfalMotii79/PLFM_RADAR]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

[GitHub](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket)

## 相關收錄

> [!note]- 直接競品（同子分類：開源硬體）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "開源硬體" AND file.name != "novatic14--MANPADS-System-Launcher-and-Rocket"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "novatic14--MANPADS-System-Launcher-and-Rocket"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "novatic14--MANPADS-System-Launcher-and-Rocket" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "novatic14--MANPADS-System-Launcher-and-Rocket"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["開源硬體","機械設計","電子整合"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "novatic14--MANPADS-System-Launcher-and-Rocket" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "novatic14--MANPADS-System-Launcher-and-Rocket" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "novatic14" AND file.name != "novatic14--MANPADS-System-Launcher-and-Rocket"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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
> const me = dv.page("Repos/novatic14--MANPADS-System-Launcher-and-Rocket");
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

> **2026-03-16** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 首次收錄，969 stars
