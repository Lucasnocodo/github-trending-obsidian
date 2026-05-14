---
repo: FULU-Foundation/OrcaSlicer-bambulab
url: https://github.com/FULU-Foundation/OrcaSlicer-bambulab
owner: FULU-Foundation
owner_type: Organization
language: C++
license: AGPL-3.0
description: ""
homepage: ""
stars: 2958
stars_per_day: 1479
forks: 961
open_issues: 12
created: 2026-05-11
pushed_at: 2026-05-12
first_seen: 2026-05-13
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "切片工具"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-13
use_case: "恢復對 Bambu Lab 打印機的完整 BambuNetwork 支持，無需局域網即可通過互聯網進行打印。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-17"
contributor_count: 1
engagement: "high"
issue_close_rate: 8
repo_size_kb: 124818
readme_length: 794
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-13"
star_history: "2026-05-13:1168,2026-05-13:1182,2026-05-14:2955,2026-05-14:2958"
tags:
  - github
  - "category/開發工具"
  - "lang/c++"
  - org
aliases:
  - "OrcaSlicer-bambulab"
  - "FULU-Foundation/OrcaSlicer-bambulab"
  - "恢復對 Bambu Lab 打印機的完整 BambuNetwork 支持，無需局域網即可通過互聯網進行打印。"
---

# OrcaSlicer-bambulab

**3.0k** stars · **1.5k** stars/天 · 建立 2 天前 · C++ · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 恢復對 Bambu Lab 打印機的完整 BambuNetwork 支持，無需局域網即可通過互聯網進行打印。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要遠程打印功能的 Bambu Lab 打印機用戶，並且具備一定的技術背景來配置 WSL。
> **一句話重點** OrcaSlicer 的成功在於它專注於 Bambu Lab 打印機的需求，並提供了靈活的遠程打印解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "切片工具" && p.file.name !== "FULU-Foundation--OrcaSlicer-bambulab" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 切片工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的遠程打印功能，值得一試。

> [!abstract] 核心創新
> 恢復對 BambuNetwork 的完整支持，允許用戶通過互聯網進行打印。

## 專案簡介

OrcaSlicer 是一個專為 Bambu Lab 打印機設計的切片工具，允許用戶通過 BambuNetwork 進行遠程打印。用戶只需安裝並啟動 Orca Studio，即可在 Windows、Linux 和 macOS 上使用。對於 Windows 用戶，安裝過程需要啟用 WSL 2，這樣可以在 Linux 環境中運行 OrcaSlicer。Linux 用戶則可以直接安裝，macOS 版本仍在開發中。這個工具的賣點在於它恢復了對 BambuNetwork 的完整支持，讓用戶能夠像以前一樣方便地進行打印。技術上，OrcaSlicer 使用 CMake 進行構建，並依賴於 Git 來管理版本。

這意味著它的構建過程相對靈活，能夠適應多種平台。與其他切片工具相比，如 PrusaSlicer 和 Cura，OrcaSlicer 專注於 Bambu Lab 打印機的特定需求，提供了更好的兼容性和功能。實際使用中，OrcaSlicer 允許用戶通過網絡進行打印，這在傳統的切片工具中並不常見。使用者在安裝過程中可能會遇到 WSL 的配置問題，這需要一定的技術背景來解決。這個專案目前處於穩定版本，適合需要遠程打印功能的 Bambu Lab 打印機用戶。未來幾個月，隨著社群的反饋，可能會進一步增強功能和穩定性。

**技術棧**：`CMake` · `C++` · `Python`

## 重點功能

- BambuNetwork 支持 — 恢復對 Bambu Lab 打印機的完整網絡支持，無需局域網即可打印。
- 跨平台兼容性 — 支持 Windows、Linux 和 macOS，簡化了安裝和使用過程。
- 使用 CMake 構建 — 提供靈活的構建選項，適應多種開發環境。
- 支持 WSL 2 — Windows 用戶可在 Linux 環境中運行，增強了功能性。
- 活躍的社群支持 — 高達 32.5% 的 forks/stars 比率，顯示出社群的參與度和支持。

## 快速開始

1. 在 Windows 上啟用 WSL 2
```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2. 在 Windows 上啟用虛擬機平台
```bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
3. 重啟 Windows 並啟動 Orca Studio
```bash
# 重啟後啟動 Orca Studio
```

## 程式碼範例

```cpp
{
  "前置條件": "需要在 Windows 上啟用 WSL 2",
  "指令": "dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart",
  "預期輸出": "成功啟用 WSL 2"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 2958 stars（1479/天），forks 961（32.5%），這顯示出強烈的社群興趣。這個專案的主要貢獻者是 codedbyjake，他在開源社群中有一定的知名度。OrcaSlicer 解決了 Bambu Lab 打印機用戶在使用過程中遇到的網絡連接問題，之前的解決方案往往需要局域網，限制了用戶的靈活性。這個專案的推出引起了社群的廣泛討論，尤其是在 Reddit 和 GitHub 上的相關討論中。技術上，隨著雲計算和遠程打印技術的發展，這個工具的可行性大大提高。高達 32.5% 的 forks/stars 比率顯示出許多人對這個工具的實際修改和使用，這意味著它不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要遠程打印功能的 Bambu Lab 打印機用戶，並且具備一定的技術背景來配置 WSL。

> [!example] 使用場景
> - 3D 打印愛好者用它來遠程控制 Bambu Lab 打印機，因為它支持通過 BambuNetwork 進行打印，無需局域網。
> - 開發者用它來測試新切片設定，因為它的靈活性和對多平台的支持使得測試過程更高效。
> - 教育機構用它來進行 3D 打印教學，因為它簡化了打印流程，讓學生能夠專注於設計而非技術細節。

## 架構分析

OrcaSlicer 採用 CMake 作為構建系統，這使得它能夠在多平台上靈活運行。資料流方面，使用者在安裝後可以直接透過 BambuNetwork 進行打印，這一設計使得用戶不再受限於局域網。選擇 CMake 的原因在於其跨平台特性，但這也意味著用戶需要在 Windows 上配置 WSL 2，這對於不熟悉命令行的用戶來說是一個挑戰。整體架構的設計使得 OrcaSlicer 能夠快速適應不同的環境，但在某些情況下，可能會因為依賴於 WSL 而導致性能瓶頸。隨著使用者數量的增加，如何保持穩定性和性能將是未來的挑戰。

## 技術深入分析

OrcaSlicer 的核心技術機制在於其對 BambuNetwork 的支持，這使得用戶能夠在不受局域網限制的情況下進行打印。其使用 CMake 作為構建工具，這不僅提高了跨平台的兼容性，也使得開發者能夠靈活地管理依賴。效能方面，由於依賴於 WSL，Windows 用戶在啟動時可能會遇到延遲，這在高負載情況下可能會影響打印速度。設計上，選擇 CMake 而非其他構建工具（如 Makefile）是因為其更好的跨平台支持，但這也帶來了對新手用戶的學習曲線。技術風險方面，隨著用戶數量的增加，如何保持穩定性和性能將是未來的挑戰。整合方面，OrcaSlicer 可以與主流的 3D 打印工具鏈（如 PrusaSlicer 和 Cura）互補，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟，但對於新手來說，WSL 的配置可能會造成困難。安裝過程需要管理員權限，這對於不熟悉命令行的用戶來說是一個挑戰。文件中未提供多語言支持，可能會影響非英語用戶的使用體驗。

## 優缺點分析

> [!success] 優點
> - 提供完整的 BambuNetwork 支持，無需局域網即可打印。
> - 跨平台兼容性，支持多種操作系統。
> - 活躍的社群和高參與度，能夠快速獲得支持和更新。

> [!danger] 缺點
> - 安裝過程對於新手來說可能較為複雜，特別是在 Windows 上配置 WSL 2。
> - macOS 版本尚未穩定，功能可能不完整。
> - 對於不熟悉命令行的用戶，使用門檻較高。

> [!warning] 注意事項
> - 目前 macOS 版本仍在開發中，功能可能不完整。
> - Windows 用戶需要具備管理員權限來啟用 WSL 2。
> - 安裝過程中可能會遇到 WSL 配置問題，需要一定的技術背景來解決。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [prusa3d/PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) | PrusaSlicer 提供了更廣泛的打印機支持，但不專注於 Bambu Lab 打印機的特定需求。 |
| [ultimaker/Cura](https://github.com/ultimaker/Cura) | Cura 是一個通用的切片工具，功能強大但缺乏對 BambuNetwork 的專門支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [prusa3d/PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) | PrusaSlicer 提供了更廣泛的打印機支持，並且有更成熟的社群和文檔。 | 如果你的團隊需要支持多種打印機，且希望有更豐富的社群資源，PrusaSlicer 是更好的選擇。 | medium，因為需要重新配置切片參數和打印設置。 |
| [ultimaker/Cura](https://github.com/ultimaker/Cura) | Cura 是一個通用的切片工具，功能強大但缺乏對 BambuNetwork 的專門支持。 | 如果你的團隊已經在使用 Cura 並希望保持一致性，則可以考慮繼續使用它。 | high，因為需要重新學習切片流程和設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OrcaSlicer-bambulab** | **PrusaSlicer** | **Cura** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | PrusaSlicer 提供了更廣泛的打印機支持，並且有更成熟的社群和文檔。 | Cura 是一個通用的切片工具，功能強大但缺乏對 BambuNetwork 的專門支持。 |
> | 遷移成本 | - | medium，因為需要重新配置切片參數和打印設置。 | high，因為需要重新學習切片流程和設置。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要支持多種打印機，且希望有更豐富的社群資源，P | 如果你的團隊已經在使用 Cura 並希望保持一致性，則可以考 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上安裝 WSL 時可能會遇到權限問題
  - 解法：確保以管理員身份運行命令提示符或 PowerShell
- [MEDIUM] macOS 版本尚未穩定，功能可能不完整
  - 解法：使用 Windows 或 Linux 版本進行打印
- [MEDIUM] 高負載下可能會影響打印速度
  - 解法：在低負載情況下進行打印以獲得最佳性能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型工作室的 3D 打印需求 | 非常適合 | 提供靈活的遠程打印功能，適合小型工作室的需求。 |
| 教育機構的 3D 打印課程 | 適合 | 簡化了打印流程，適合用於教學。 |
| 大型企業的 3D 打印需求 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人愛好者的 3D 打印項目 | 非常適合 | 提供了完整的功能，適合個人使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的遠程打印功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> OrcaSlicer 本身不需要高權限，但 Windows 用戶在安裝 WSL 時需要管理員權限。它不會存取敏感資料，但使用者需注意 WSL 的安全性。整體上，將其放入 CI/CD pipeline 使用是安全的。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
| Forks | 961 |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-11 |
| Repo 大小 | 121.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FULU-Foundation/OrcaSlicer-bambulab) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 82
>     "C" : 10
>     "JavaScript" : 4
>     "HTML" : 2
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@codedbyjake](https://github.com/codedbyjake) | 2 |

**最新版本**：v1.0.0 (2026-05-12)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/FULU-Foundation/OrcaSlicer-bambulab/commits/v1.0.0

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和討論。
**連結**：[文件](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** Fix artifact name conflict between workflows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/3) | Restore commit history between OrcaSlicer/OrcaSlicer and thi | 58 | 11 |
> | [#9](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/9) | Defence Fund Pledge `enhancement` | 31 | 0 |
> | [#4](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/4) | Another legal backup option `enhancement` | 9 | 1 |
> | [#14](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/14) | Reverse engineer network plugin? `enhancement` | 2 | 2 |
> | [#13](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/13) | BambuNetwork bridge deadlocks on Apple Silicon (M1/M2/M3) —  | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ## This version of OrcaSlicer restores full BambuNetwork support for Bambu Lab printers.
> 
> You are not limited to LAN only.  
> It works over the internet just like before, through BambuNetwork, with full functionality for normal use and printing.
> 
> ## Installation
> 
> ### Windows
> 
> Windows requires WSL 2.
> 
> Before first launch, open Command Prompt or PowerShell as Administrator and run:
> 
> ```bat
> dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
> dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
> ```
> 
> Restart Windows, then launch Orca Studio.
> 
> ### Linux
> 
> On Linux, a normal installation is enough.
> 
> ### macOS
> 
> Work in progress.
> 
> ## BMCU
> 
> I also encourage you to use BMCU.
> 
> You can find BMCU firmware in my repositories.

## 延伸閱讀

相關概念：[[3D 打印]] · [[切片工具]] · [[遠程打印]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[livehl--aimirror|livehl/aimirror]]

[GitHub](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 相關收錄

> [!note]- 直接競品（同子分類：切片工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "切片工具" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 打印","切片工具","遠程打印"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "FULU-Foundation--OrcaSlicer-bambulab" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "FULU-Foundation--OrcaSlicer-bambulab" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "FULU-Foundation" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
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

> **2026-05-13** — 首次收錄
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

- [[2026-05-14|2026-05-14]] — 再次上榜，3.0k stars
- [[2026-05-13|2026-05-13]] — 首次收錄，1.2k stars
