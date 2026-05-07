---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: N/A
license: CERN-OHL-S-2.0
description: "Hi this is Mercury"
homepage: ""
stars: 536
stars_per_day: 9
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
use_case: "打造一款可變形的無人機，具備多種攝影功能和自動駕駛能力。"
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
star_history: "2026-03-10:364,2026-03-11:364,2026-03-11:364,2026-03-13:380,2026-03-14:396,2026-03-15:400,2026-03-16:402,2026-03-17:410,2026-03-18:416,2026-03-19:417,2026-03-20:418,2026-03-21:419,2026-03-22:419,2026-03-23:420,2026-03-24:422,2026-03-25:423,2026-03-26:425,2026-03-27:439,2026-03-28:473,2026-03-29:481,2026-03-30:487,2026-03-31:500,2026-04-01:504,2026-04-02:508,2026-04-03:511,2026-04-04:514,2026-04-05:516,2026-04-06:517,2026-04-07:518,2026-04-08:518,2026-04-09:519,2026-04-10:520,2026-04-11:520,2026-04-12:520,2026-04-13:522,2026-04-14:523,2026-04-15:523,2026-04-16:523,2026-04-17:524,2026-04-18:524,2026-04-19:524,2026-04-20:525,2026-04-21:525,2026-04-22:527,2026-04-23:527,2026-04-24:529,2026-04-25:529,2026-04-26:529,2026-04-27:530,2026-04-28:530,2026-04-29:533,2026-04-30:533,2026-05-01:535,2026-05-02:535,2026-05-03:535,2026-05-04:534,2026-05-05:535,2026-05-06:535,2026-05-07:536"
tags:
  - github
  - "category/其他"
  - "lang/other"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "打造一款可變形的無人機，具備多種攝影功能和自動駕駛能力。"
---

# Mercury-Transforming-Drone

**536** stars · **9** stars/天 · 建立 61 天前 · N/A · CERN-OHL-S-2.0

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
> 打造一款可變形的無人機，具備多種攝影功能和自動駕駛能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Steady (9 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Slow (最後推送 35 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對無人機技術有興趣的開發者和愛好者，特別是希望進行自定義開發的人。
> **一句話重點** Mercury 的變形設計和多功能攝影能力，讓無人機的應用場景更為廣泛。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到靈活的無人機解決方案，值得探索。

> [!abstract] 核心創新
> 提供一個可變形的無人機設計，結合多種攝影技術和自動駕駛能力。

## 專案簡介

Mercury 是一款可變形的無人機，設計上結合了多種攝影技術，包括 RGB、深度和熱成像攝影機，並搭載 Ardupilot 和 GPS 進行自動導航。用戶只需將 Autonomy Software 上傳至 Raspberry Pi 5，並透過簡單的指令啟動 Mavproxy Bridge 和主控制程式，即可開始控制無人機。這種設計的賣點在於其簡易的設置流程和多功能性，適合需要進行空中拍攝或監控的應用場景。技術上，無人機的核心依賴於 Raspberry Pi 和 Python 環境，並使用了虛擬環境來管理依賴，這樣的選擇使得開發者能夠快速上手並進行擴展。與其他無人機系統相比，如 DJI 的商業無人機，Mercury 提供了更高的自定義性和開源的靈活性，特別適合開發者和愛好者進行二次開發。

使用者在控制距離上可選擇使用 Tailscale 來擴展其控制範圍，這在需要遠程操作時尤為重要。雖然目前沒有開放的 Issues，但這可能意味著社群尚在初期階段，未來的發展需要更多的用戶反饋來完善功能。這個專案的成熟度偏向 beta 階段，適合對無人機技術有一定了解的開發者進行探索和實驗。建議在小型專案或個人愛好中使用，對於商業用途則需謹慎評估其穩定性和支持度。

**技術棧**：`Python 3` · `Raspberry Pi 5`

## 重點功能

- 內部有效載荷艙 — 可容納 1 公斤的貨物，適合多種應用。
- 簡單的變形機制 — 便於在不同環境中使用，提升靈活性。
- 多種攝影功能 — 包括 RGB、深度和熱成像攝影機，滿足不同拍攝需求。
- 自動駕駛能力 — 基於 Ardupilot 和 GPS，實現精確導航。
- 移動應用支持 — 提供便捷的控制方式，提升使用體驗。

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
5. 啟動主控制程式
```bash
./run.sh
```

## 程式碼範例

```bash
{
  "前置條件": "需要在 Raspberry Pi 上安裝 Python 環境",
  "指令": "./start_mavproxy.sh",
  "預期輸出": "顯示 IP 地址以控制無人機"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 61 天內累積 536 stars（9/天），forks 63（11.8%），這顯示出一定的社群關注度。作者 L42ARO 和 Agonat0r 在無人機技術領域有一定的背景，這個專案解決了傳統無人機在自定義和開源方面的不足，提供了一個靈活的解決方案。雖然沒有明確的觸發事件，但無人機技術的普及和開源文化的興起使得這個專案具備了良好的發展潛力。forks/stars 比率高達 11.8%，顯示出不少開發者對此專案進行實際修改和使用。

## 適合誰使用

**目標受眾**：對無人機技術有興趣的開發者和愛好者，特別是希望進行自定義開發的人。

> [!example] 使用場景
> - 無人機愛好者用它來進行空中拍攝，因為其具備 RGB 和熱成像攝影機，能夠捕捉多種影像資料。
> - 開發者用它來測試自動駕駛技術，因為其搭載 Ardupilot 和 GPS，能夠進行精確導航。
> - 小型企業用它來進行農業監控，因為其可變形設計和輕量化特性，適合在不同環境中使用。

## 架構分析

Mercury 的架構設計以 Raspberry Pi 為核心，搭配 Python 環境進行軟體開發。資料流中，無人機的控制指令透過 Mavproxy Bridge 與飛行控制器進行通訊，並使用虛擬環境來管理依賴，這樣的選擇使得開發者能夠快速上手。選擇 Raspberry Pi 的原因在於其成本效益和靈活性，但相對的在處理性能上可能會有所限制，特別是在高負載任務時。擴展性方面，若未來需要增加更多功能，可能需要考慮硬體的升級和性能瓶頸。

## 技術深入分析

Mercury 的核心技術機制是基於 Raspberry Pi 和 Python，使用 Mavproxy 進行無人機控制。這種設計使得無人機能夠快速適應不同的操作環境，並透過簡單的指令進行控制。效能方面，無人機的運行依賴於 Raspberry Pi 的性能，這在處理高負載任務時可能會成為瓶頸。選擇 Raspberry Pi 的原因在於其開源和成本效益，但在性能上可能無法與商業無人機相比。技術上，這個專案的依賴樹相對簡單，主要依賴 Python 的生態系統，這降低了學習成本。設計上，無人機的變形機制和多功能攝影能力使其在市場上具備競爭力，但在商業應用上仍需進一步驗證其穩定性和可靠性。整合方面，無人機的控制系統能夠與多種網路環境相容，這使得遠程操作成為可能，但在實際應用中可能會遇到網路延遲的問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的安裝和使用說明，但缺乏詳細的範例。安裝過程相對順暢，適合有一定技術背景的使用者。沒有提供多語言支持，對於非英語使用者可能會造成困難。

## 優缺點分析

> [!success] 優點
> - 靈活的設計，適合多種應用場景。
> - 開源特性，便於開發者進行二次開發。
> - 具備多種攝影功能，滿足不同需求。

> [!danger] 缺點
> - 缺乏詳細的使用文檔，對新手不友好。
> - 目前僅支援 Raspberry Pi 5，限制了使用範圍。
> - 在高負載情況下性能可能不足。

> [!warning] 注意事項
> - 目前僅支援 Raspberry Pi 5，其他版本可能不兼容。
> - 無法在無網路環境下運行，需依賴網路連接。
> - 缺乏詳細的使用文檔，對新手可能不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了更高的自動化功能，適合需要複雜任務的使用者，但不具備變形能力。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於 AI 驅動的無人機控制，適合需要智能化操作的場景，但不如 Mercury 靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| DJI Phantom | 商業化的無人機，提供穩定的飛行性能和高品質的攝影功能，適合專業用途。 | 如果需要商業級的穩定性和支持，DJI 是更好的選擇。 | medium，因為需要重新學習控制系統和操作流程。 |
| Parrot Anafi | 輕量級的無人機，專注於便攜性和易用性，但功能相對較少。 | 如果需要便攜性和簡單操作，Parrot 更適合。 | low，因為操作界面相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Mercury-Transforming-Drone** | **DJI Phantom** | **Parrot Anafi** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 商業化的無人機，提供穩定的飛行性能和高品質的攝影功能，適合專業用途。 | 輕量級的無人機，專注於便攜性和易用性，但功能相對較少。 |
> | 遷移成本 | - | medium，因為需要重新學習控制系統和操作流程。 | low，因為操作界面相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果需要商業級的穩定性和支持，DJI 是更好的選擇。 | 如果需要便攜性和簡單操作，Parrot 更適合。 |

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

- [MEDIUM] 在某些網路環境下，無法穩定連接到無人機
  - 解法：使用 Tailscale 來改善連接穩定性
- **[HIGH]** 缺乏詳細的使用文檔，可能導致使用困難
  - 解法：參考相關的開源無人機社群尋求幫助
- [MEDIUM] 在高負載情況下，無人機性能可能下降
  - 解法：避免同時運行過多的應用程式

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業公司進行產品測試 | 適合 | 具備多種攝影功能，能夠滿足測試需求。 |
| 個人愛好者進行無人機拍攝 | 非常適合 | 靈活的設計和開源特性，適合個人實驗。 |
| 大型企業進行商業拍攝 | 不適合 | 穩定性和支持不足，可能影響商業運作。 |
| 學術研究進行無人機技術探索 | 適合 | 開源特性和可自定義性，適合學術研究。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到靈活的無人機解決方案，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：無需高權限操作，但需注意網路安全性，特別是在遠程控制時。

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

**社群活躍度**：社群活躍度中等，無開放的 Issues 可能意味著尚在初期階段。

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

相關概念：[[自動化]] · [[無人機技術]] · [[開源硬體]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

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
> const concepts = ["自動化","無人機技術","開源硬體"];
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
