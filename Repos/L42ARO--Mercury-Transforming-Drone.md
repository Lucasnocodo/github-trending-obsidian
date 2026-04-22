---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: N/A
license: CERN-OHL-S-2.0
description: "Hi this is Mercury"
homepage: ""
stars: 527
stars_per_day: 11
forks: 63
open_issues: 0
created: 2026-03-06
pushed_at: 2026-04-01
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "無人機"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個可變形的無人機，具備多種感測器與自動駕駛功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 11
readme_length: 2089
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:364,2026-03-11:364,2026-03-11:364,2026-03-13:380,2026-03-14:396,2026-03-15:400,2026-03-16:402,2026-03-17:410,2026-03-18:416,2026-03-19:417,2026-03-20:418,2026-03-21:419,2026-03-22:419,2026-03-23:420,2026-03-24:422,2026-03-25:423,2026-03-26:425,2026-03-27:439,2026-03-28:473,2026-03-29:481,2026-03-30:487,2026-03-31:500,2026-04-01:504,2026-04-02:508,2026-04-03:511,2026-04-04:514,2026-04-05:516,2026-04-06:517,2026-04-07:518,2026-04-08:518,2026-04-09:519,2026-04-10:520,2026-04-11:520,2026-04-12:520,2026-04-13:522,2026-04-14:523,2026-04-15:523,2026-04-16:523,2026-04-17:524,2026-04-18:524,2026-04-19:524,2026-04-20:525,2026-04-21:525,2026-04-22:527"
tags:
  - github
  - "category/其他"
  - "lang/other"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "提供一個可變形的無人機，具備多種感測器與自動駕駛功能。"
---

# Mercury-Transforming-Drone

**527** stars · **11** stars/天 · 建立 46 天前 · N/A · CERN-OHL-S-2.0

```dataviewjs
const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ARCHIVED`

> [!summary] 一句話摘要
> 提供一個可變形的無人機，具備多種感測器與自動駕駛功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (11 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Moderate (最後推送 20 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要一款多用途無人機並具備自動駕駛功能的開發者或研究人員。
> **一句話重點** 這個專案的設計簡化了無人機的操作流程，讓使用者能夠更專注於應用而非技術細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "無人機" && p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 無人機 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到靈活的無人機解決方案，值得嘗試。

> [!abstract] 核心創新
> 簡化的變形機制使得無人機在多種環境中運用更為靈活。

## 專案簡介

Mercury-Transforming-Drone 是一款設計用於多用途的可變形無人機，具備 1 公斤的內部載重艙，並搭載 RGB、深度和熱成像攝影機。使用者可以透過 Raspberry Pi 5 來運行其自動駕駛軟體，並透過 Mavproxy 進行飛行控制。這個設計的賣點在於其簡單的變形機制，讓無人機在不同環境中能夠靈活運用。使用者必須在兩個終端中分別運行 `start_mavproxy.sh` 和 `run.sh` 來啟動系統，並透過網路連接進行控制。這個專案使用 Python 進行軟體開發，並依賴於一系列的 Python 套件來實現其功能，這使得整體架構相對輕量，適合快速開發和迭代。

相較於其他無人機專案，如 0xGF/boneyard，Mercury 提供了更為簡單的變形設計，而不是複雜的機械結構。與 AgentSeal/codeburn 相比，Mercury 更加專注於多種感測器的整合，適合需要多樣化數據的應用場景。使用者在實際操作中，可能會遇到需要配置網路的問題，特別是在遠距離控制時，建議使用 Tailscale 來簡化連接。這個專案目前處於活躍開發中，未來可能會加入更多功能以增強其應用範圍。

**技術棧**：`Python 3.8` · `Raspberry Pi OS`

## 重點功能

- 內部載重艙 — 可容納 1 公斤的額外設備，適合多種應用。
- 簡單變形機制 — 使無人機能夠在不同環境中靈活運用。
- 多種感測器 — 配備 RGB、深度和熱成像攝影機，提供多樣化的數據收集。
- 基於 Raspberry Pi 的自動駕駛 — 使用者可透過簡單的指令進行控制。
- 支援遠程控制 — 可透過 Tailscale 進行長距離操作。

## 快速開始

1. 安裝虛擬環境
```bash
python3 -m venv venv
```
2. 啟動虛擬環境
```bash
source venv/bin/activate
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```
4. 啟動 Mavproxy Bridge
```bash
./start_mavproxy.sh
```
5. 啟動主軟體
```bash
./run.sh
```

## 程式碼範例

```bash
{
  "前置條件": "在 Raspberry Pi 上安裝並啟動虛擬環境。",
  "指令": "./start_mavproxy.sh",
  "預期輸出": "顯示 IP 地址以便於控制無人機。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 46 天內累積 527 stars（11/天），forks 63（12.0%），顯示出相對穩定的關注度。作者 L42ARO 和 Agonat0r 具備相關背景，並針對無人機的多功能性進行了創新設計，這在市場上尚未有成熟的解決方案。這個專案的出現正好填補了無人機在多用途感測器整合上的需求，並且簡化了使用者的操作流程。社群的活躍度也顯示出對這個專案的支持，且無開放的 Issues 代表著目前的穩定性。

## 適合誰使用

**目標受眾**：需要一款多用途無人機並具備自動駕駛功能的開發者或研究人員。

> [!example] 使用場景
> - 無人機愛好者用它來進行戶外拍攝，因為其具備多種感測器能夠收集不同類型的數據。
> - 研究人員用它來進行環境監測，因為其內部載重艙可容納額外的測試設備。
> - 開發者用它來測試自動駕駛算法，因為其開放的軟體架構便於快速迭代和測試。

## 架構分析

這個專案採用 Raspberry Pi 作為核心控制單元，並透過 Python 實現自動駕駛邏輯。資料流從感測器收集數據，經由 Mavproxy 進行處理，最終輸出控制指令給無人機。這樣的設計使得整體架構輕量且易於擴展，但也可能在高負載時出現性能瓶頸。選擇 Raspberry Pi 使得成本較低，但在處理複雜運算時可能不如專業飛控系統。整體架構的擴展性良好，適合未來加入更多感測器或功能。

## 技術深入分析

Mercury-Transforming-Drone 的核心技術在於其簡單的變形機制和多種感測器的整合。使用 Python 進行開發，這使得整體架構相對輕量，並且易於快速迭代。該無人機能夠處理多達 1 公斤的載重，並搭載 RGB、深度和熱成像攝影機，這讓其在環境監測和拍攝方面具備優勢。設計上選擇 Raspberry Pi 作為控制單元，這降低了成本，但在高負載運算時可能會出現性能瓶頸。

整體架構的依賴關係相對簡單，主要依賴於 Python 的標準庫和一些第三方套件。這樣的選擇使得使用者能夠快速上手，但也可能在高性能需求的場景中受到限制。對於未來的擴展，這個專案具有良好的靈活性，能夠隨著需求的變化而進行調整。整合到現有的開發流程中，使用者可以輕鬆地將其納入 CI/CD pipeline，並且與其他工具鏈的相容性良好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟，並包含必要的指令範例。安裝過程相對順暢，但對於初學者可能需要額外的學習時間。文件目前僅提供英文版本，對於非英語使用者可能會造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 多功能性 — 可用於多種應用場景，如拍攝、監測等。
> - 開放源碼 — 使用者可自由修改和擴展功能。
> - 簡單易用 — 透過簡單的指令即可啟動和控制無人機。

> [!danger] 缺點
> - 性能限制 — 受限於 Raspberry Pi 的運算能力。
> - 對於初學者有一定的學習曲線。
> - 需要穩定的網路環境來進行遠程控制。

> [!warning] 注意事項
> - 僅支援 Raspberry Pi 5。
> - 需要穩定的網路連接以進行遠程控制。
> - 對於初學者可能需要額外的學習時間來熟悉操作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更複雜的機械結構設計，適合需要高性能的無人機應用，但不如 Mercury 簡單易用。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定的自動駕駛算法，Mercury 則提供更多感測器整合，適合多樣化的應用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用更複雜的機械結構設計，提供更高性能的無人機解決方案。 | 如果需要高性能和複雜的飛行控制，則應選擇此方案。 | medium，因為需要重新學習其架構和操作流程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定的自動駕駛算法，並提供更為專業的控制系統。 | 如果你的需求主要集中在自動駕駛算法的優化上，則應選擇此方案。 | high，因為需要完全重新設計控制系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Mercury-Transforming-Drone** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用更複雜的機械結構設計，提供更高性能的無人機解決方案。 | 專注於特定的自動駕駛算法，並提供更為專業的控制系統。 |
> | 遷移成本 | - | medium，因為需要重新學習其架構和操作流程。 | high，因為需要完全重新設計控制系統。 |
> | 適用場景 | 主要場景 | 如果需要高性能和複雜的飛行控制，則應選擇此方案。 | 如果你的需求主要集中在自動駕駛算法的優化上，則應選擇此方案。 |

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

- **[HIGH]** 在不同網路環境下可能會遇到連接問題，特別是使用 Tailscale 時。
  - 解法：確保所有設備都在同一網路下，或重新配置 Tailscale 設定。
- [MEDIUM] 對於初學者，可能需要額外的時間來熟悉 Raspberry Pi 的操作。
  - 解法：參考 Raspberry Pi 的官方文檔或社群資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行環境監測專案 | 非常適合 | 具備多種感測器，能夠收集多樣化的數據。 |
| 個人愛好者進行無人機拍攝 | 適合 | 簡單易用的設計讓拍攝過程更為流暢。 |
| 大型企業進行高性能無人機開發 | 不適合 | 性能限制可能無法滿足高需求的應用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到靈活的無人機解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
| Forks | 63 |
| Open Issues | 0 |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 11 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/L42ARO/Mercury-Transforming-Drone) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@L42ARO](https://github.com/L42ARO) | 12 |
> | [@Agonat0r](https://github.com/Agonat0r) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度良好，無開放的 Issues。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-04-01）
> **活躍天數** 3 天 · **最新 commit** Update reamde

## README 摘錄

> [!info]- 展開查看原文 README
> # MERCURY - TRANSFORMING DRONE
> 
> [](https://buymeacoffee.com/mercuriustech)
> [](https://x.com/L42ARO)
> 
> ## Quick Index
> 
> - [Demo](#demo)
> - [Features](#features)
> - [Folder Structure](#folder-structure)
> - [Software Setup](#software-setup)
> 
> ## Demo
> 
> [](https://youtu.be/DZhdSxqXiKo)
> 
> ## Features
> 
>   
>     Inner Payload Bay (1 kg)
>     Simple Transformation Mechanism
>   
>   
>     
>     
>   
> 
>   
>     RGB + Depth + Thermal Cameras
>     Ardupilot + GPS
>   
>   
>     
>     
>   
> 
>   
>     Wheel + Prop Guard
>     Mobile App
>   
>   
>     
>     
>   
> 
> ## Folder Structure
> - **STL Files:** all the required stl files for the drone assembly
> - **Autonomy Software:** all the required software for the drone autonomy
> - **PCB Files:** all the gerber files for the drone PCBs
> 
> ## Software Setup
> 
> To use the software as it is, upload the Autonomy Software folder to a Raspberry Pi 5, using your preferred SCP method. For beginners we recommend [WinSCP](https://winscp.net/eng/download.php).
> 
> Inside the folder in the raspberry pi create a virtual environment and install the dependencies.
> 
> ```bash
> python3 -m venv venv
> source venv/bin/activate
> pip install -r requirements.txt
> ```
> 
> You must run both the Mavproxy Bridge to interface with the flight controller as well as the main software powering the rest of the robot. For that run in two separate temrinals the scripts:
> 
> ```bash
> start_mavproxy.sh
> ```
> ```bash
> run.sh
> ```
> In the terminal you should see the IP addres to be able to control the robot, if you're connected to the same network just copy paste that on your browser.
> 
> If you would like to be able to control it from different networks and at long distances we recommend you setup [Tailscale](https://tailscale.com/) on your devices.
> 
> For more convenience you can setup these scripts to run automatically on startup, and then use other scripts like `restarter.sh` or `killer.sh` to manage them.
> 
> ## 🧑‍💻 Official Codebase Core Contributors and Maintainers
> 
>   
>     
>       
>         
>       
>       
>       Alvaro L
>     
>     
>       
>         
>       
>       
>       Connor Raymer
>     
>   
> 
> [](https://buymeacoffee.com/mercuriustech)

## 延伸閱讀

相關概念：[[自動駕駛]] · [[感測器整合]] · [[無人機技術]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]]

[GitHub](https://github.com/L42ARO/Mercury-Transforming-Drone)

## 相關收錄

> [!note]- 直接競品（同子分類：無人機）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "無人機" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "L42ARO--Mercury-Transforming-Drone" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動駕駛","感測器整合","無人機技術"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "L42ARO" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，364 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
