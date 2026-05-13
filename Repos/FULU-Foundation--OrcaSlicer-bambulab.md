---
repo: FULU-Foundation/OrcaSlicer-bambulab
url: https://github.com/FULU-Foundation/OrcaSlicer-bambulab
owner: FULU-Foundation
owner_type: Organization
language: C++
license: AGPL-3.0
description: ""
homepage: ""
stars: 1182
stars_per_day: 1182
forks: 300
open_issues: 4
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
use_case: "恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網皆可使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 124818
readme_length: 794
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-13"
star_history: "2026-05-13:1168,2026-05-13:1182"
tags:
  - github
  - "category/開發工具"
  - "lang/c++"
  - org
aliases:
  - "OrcaSlicer-bambulab"
  - "FULU-Foundation/OrcaSlicer-bambulab"
  - "恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網皆可使用。"
---

# OrcaSlicer-bambulab

**1.2k** stars · **1.2k** stars/天 · 建立 1 天前 · C++ · AGPL-3.0

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
> 恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網皆可使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要遠程打印功能的 Bambu Lab 打印機用戶。
> **一句話重點** 這個專案的最大亮點是它能夠支持 Bambu Lab 打印機的遠程打印功能，這在其他工具中是無法實現的。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到穩定的打印解決方案，值得嘗試。

> [!abstract] 核心創新
> 恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網皆可使用。

## 專案簡介

OrcaSlicer-bambulab 是一個專為 Bambu Lab 打印機設計的切片軟體，支持通過 BambuNetwork 進行打印。用戶首先需要在 Windows 上啟用 WSL 2，然後可以透過命令行安裝所需的功能，這樣就能夠在 Windows 環境下運行。Linux 用戶則可以進行正常安裝，而 macOS 的支持仍在開發中。這個工具的賣點在於它不僅支持 LAN，還能通過互聯網進行打印，這在以前的版本中是無法實現的。技術上，該工具使用 CMake 進行構建，並依賴於多種語言如 C++ 和 Python，這使得它在功能上具備了靈活性與擴展性。

與其他切片工具相比，如 PrusaSlicer 和 Cura，OrcaSlicer-bambulab 的獨特之處在於其對 Bambu Lab 打印機的專屬支持，並且能夠在網絡環境中運行，這使得它在遠程打印方面具備優勢。使用者在實際操作中可能會遇到 Linux 啟動時的崩潰問題，這是目前社群關注的熱門問題之一。該專案剛剛建立，活躍度高，未來可能會持續更新與改進。對於小型團隊或個人使用者來說，這是一個值得嘗試的工具，但在生產環境中使用時仍需謹慎考量其穩定性。

**技術棧**：`CMake` · `C++` · `Python`

## 重點功能

- BambuNetwork 支持 — 恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網皆可使用。
- 多平台兼容 — 支持 Windows、Linux 和即將到來的 macOS，滿足不同用戶需求。
- 簡易安裝 — Windows 用戶只需啟用 WSL 2，Linux 用戶可進行正常安裝。
- 活躍的社群支持 — 目前有 4 個開放的問題，社群對於問題的反應迅速。
- 持續更新 — 專案剛建立，未來有潛力持續改進和增強功能。

## 快速開始

1. 在 Windows 上啟用 WSL 2
```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2. 安裝 OrcaSlicer
```bash
在 Windows 或 Linux 上進行正常安裝
```
3. 啟動 Orca Studio
```bash
啟動應用程式以開始使用
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1182 stars（1182/天），forks 300（25.4%），這顯示出極高的關注度。作者 codedbyjake 在開源社群中有一定的影響力，這個專案解決了 Bambu Lab 打印機用戶在網絡打印方面的痛點，之前的工具無法支持這一功能。社群對於恢復歷史提交記錄的需求也顯示了用戶對於此專案的期待。技術上，這個工具的出現是因為對於 Bambu Lab 打印機的需求不斷增加，並且能夠在多平台上運行的能力使其更具吸引力。forks/stars 比率高達 25.4%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要遠程打印功能的 Bambu Lab 打印機用戶。

> [!example] 使用場景
> - 3D 打印愛好者用它來遠程控制 Bambu Lab 打印機，因為它支持通過互聯網進行打印，這在其他工具中難以實現。
> - 開發者用它來測試不同的切片設定，因為它的靈活性和對多平台的支持使得測試過程更為方便。
> - 小型工作室用它來簡化打印流程，因為它能夠在 LAN 和互聯網環境下運行，提升了工作效率。

## 架構分析

OrcaSlicer-bambulab 採用 CMake 進行構建，這使得它能夠在多平台上運行。架構上，該工具的設計考慮了對 Bambu Lab 打印機的專屬支持，並且能夠通過網絡進行打印。這樣的設計使得用戶不再受限於 LAN，能夠隨時隨地進行打印。

選擇 CMake 作為構建工具的原因在於其跨平台的特性，這樣可以減少在不同操作系統上遇到的問題。雖然這樣的設計提升了靈活性，但也可能導致在某些環境下的兼容性問題，特別是在 Linux 上的啟動問題。整體來看，該工具的架構設計旨在提供一個穩定且靈活的打印解決方案，未來的擴展性也相對較好。

## 技術深入分析

OrcaSlicer-bambulab 的核心技術機制是基於 CMake 的多平台構建，這使得它能夠在 Windows、Linux 和未來的 macOS 上運行。該工具的設計考慮了 Bambu Lab 打印機的特定需求，並且能夠通過 BambuNetwork 進行打印，這在市場上是獨一無二的。效能方面，該工具能夠快速處理切片任務，但在 Linux 環境下的啟動問題可能會影響用戶體驗。選擇 CMake 作為構建工具的原因在於其廣泛的社群支持和跨平台能力，這樣的選擇雖然增加了初始設置的複雜性，但長期來看能夠減少維護成本。技術風險方面，Linux 啟動時的崩潰問題可能會在未來的版本中影響穩定性，這需要開發者持續關注。整合方面，該工具能夠與主流的 CI/CD 流程相容，但在特定環境下可能需要進行額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的安裝指導，但缺乏詳細的範例。安裝過程對於 Windows 用戶來說可能有些繁瑣，特別是需要啟用 WSL 2。整體來說，對於新手來說，花 30 分鐘能夠完成基本安裝，但可能需要查閱額外的資源來解決問題。

## 優缺點分析

> [!success] 優點
> - 支持遠程打印，提升了使用的靈活性。
> - 多平台兼容性，能夠在不同操作系統上運行。
> - 活躍的社群支持，能夠快速響應用戶需求。

> [!danger] 缺點
> - macOS 支持尚未完全實現，限制了部分用戶。
> - Linux 啟動時可能會遇到崩潰問題，影響使用體驗。
> - 目前的問題解決率為 0%，顯示出潛在的穩定性問題。

> [!warning] 注意事項
> - macOS 支持仍在開發中，尚未完全實現。
> - Linux 啟動時可能會遇到崩潰問題，需關注社群討論。
> - 目前有 4 個開放的問題，解決率為 0%。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [prusa3d/PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) | PrusaSlicer 提供更廣泛的打印機支持，但不專注於 Bambu Lab 打印機的特定功能。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | Cura 是一個通用的切片工具，缺乏對 Bambu Lab 打印機的專屬支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [prusa3d/PrusaSlicer](https://github.com/prusa3d/PrusaSlicer) | PrusaSlicer 提供更全面的打印機支持，並且有更成熟的功能集。 | 如果你的團隊需要支持多種打印機，且希望使用成熟的工具，PrusaSlicer 是更好的選擇。 | medium，因為需要重新學習其界面和功能。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | Cura 是一個通用的切片工具，功能強大但不專注於 Bambu Lab 打印機。 | 如果你需要一個功能強大的通用切片工具，而不特別針對 Bambu Lab 打印機，Cura 是不錯的選擇。 | medium，因為需要適應其不同的設置和界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OrcaSlicer-bambulab** | **PrusaSlicer** | **Cura** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | PrusaSlicer 提供更全面的打印機支持，並且有更成熟的功能集。 | Cura 是一個通用的切片工具，功能強大但不專注於 Bambu Lab 打印機。 |
> | 遷移成本 | - | medium，因為需要重新學習其界面和功能。 | medium，因為需要適應其不同的設置和界面。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要支持多種打印機，且希望使用成熟的工具，Pru | 如果你需要一個功能強大的通用切片工具，而不特別針對 Bamb |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前不建議在生產環境中使用，適合個人試用和測試。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Linux 啟動時可能會遇到崩潰問題，導致 CPU 佔用過高
  - 解法：關注社群討論，尋找解決方案
- [MEDIUM] macOS 支持尚未實現，無法使用該工具
  - 解法：等待未來版本更新
- [MEDIUM] 目前有 4 個開放問題，解決率為 0%
  - 解法：持續關注社群動態，尋找解決方案

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型工作室使用 Bambu Lab 打印機進行產品原型製作 | 非常適合 | 能夠支持遠程打印，提升工作效率。 |
| 個人用戶希望在家中使用 Bambu Lab 打印機 | 適合 | 能夠在 LAN 和互聯網環境下運行，滿足個人需求。 |
| 大型企業需要穩定的打印解決方案 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到穩定的打印解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但在使用過程中需注意網絡安全性。

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
| Forks | 300 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
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

**社群活躍度**：社群活躍，最近有 2 天的提交活動。
**連結**：[文件](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** Fix artifact name conflict between workflows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/3) | Restore commit history between OrcaSlicer/OrcaSlicer and thi | 42 | 3 |
> | [#4](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/4) | Another legal backup option `enhancement` | 6 | 1 |
> | [#6](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/6) | Linux: orcaslicer_main child process crashes on startup caus | 0 | 0 |
> | [#5](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/5) | Error: Linux bridge payload not ready `bug` | 0 | 3 |

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

相關概念：[[自動化測試]] · [[CI/CD]] · [[容器化]]

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
> const concepts = ["自動化測試","CI/CD","容器化"];
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

- [[2026-05-13|2026-05-13]] — 首次收錄，1.2k stars
