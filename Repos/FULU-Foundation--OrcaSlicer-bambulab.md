---
repo: FULU-Foundation/OrcaSlicer-bambulab
url: https://github.com/FULU-Foundation/OrcaSlicer-bambulab
owner: FULU-Foundation
owner_type: Organization
language: C++
license: AGPL-3.0
description: ""
homepage: ""
stars: 1168
stars_per_day: 1168
forks: 296
open_issues: 4
created: 2026-05-11
pushed_at: 2026-05-12
first_seen: 2026-05-13
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "3D 切片工具"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-13
use_case: "恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網均可使用。"
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
star_history: "2026-05-13:1168"
tags:
  - github
  - "category/開發工具"
  - "lang/c++"
  - org
aliases:
  - "OrcaSlicer-bambulab"
  - "FULU-Foundation/OrcaSlicer-bambulab"
  - "恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網均可使用。"
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
> 恢復對 Bambu Lab 打印機的完整支持，無論是 LAN 還是互聯網均可使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.2k stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要遠程打印功能的 Bambu Lab 打印機用戶。
> **一句話重點** OrcaSlicer 不僅恢復了 Bambu Lab 打印機的支持，還提供了網絡打印的便利性，這是其他工具所不具備的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 切片工具" && p.file.name !== "FULU-Foundation--OrcaSlicer-bambulab" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 切片工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到便捷的網絡打印功能，值得一試。

> [!abstract] 核心創新
> 恢復了對 Bambu Lab 打印機的完整支持，並且支持網絡打印功能。

## 專案簡介

OrcaSlicer 是一個專為 Bambu Lab 打印機設計的切片工具，支持通過 BambuNetwork 進行打印，無需僅限於局域網。用戶只需安裝並啟用 WSL 2（在 Windows 上），然後即可使用 Orca Studio 進行打印。該工具的設計使得用戶可以輕鬆地在互聯網上進行打印，這是許多類似工具所不具備的功能。其核心賣點在於對 Bambu Lab 打印機的全面支持，並且不僅限於 LAN 連接，這使得用戶在遠程打印時也能享受完整的功能。技術上，OrcaSlicer 使用 CMake 進行構建，並且支持多種平台，包括 Windows、Linux 和即將推出的 macOS。

這個工具的依賴性相對較低，主要依賴於 CMake 和 Git，這使得它在安裝和配置上相對簡單。與其他切片工具相比，如 PrusaSlicer 和 Cura，OrcaSlicer 提供了更好的 Bambu Lab 打印機支持，並且在網絡打印方面的功能更為強大。實際使用中，OrcaSlicer 可能會遇到一些 Linux 特有的啟動問題，這些問題在 GitHub 的 Issues 中已有反映。該專案目前處於 v1.0.0 版本，顯示出一定的穩定性，但仍需注意其開發社群的活躍度和問題解決的速度。對於需要遠程打印的用戶，OrcaSlicer 是一個值得考慮的選擇，但在使用 Linux 系統時需留意可能的啟動問題。

**技術棧**：`CMake` · `C++` · `Python`

## 重點功能

- BambuNetwork 支持 — 允許用戶通過互聯網進行打印，無需局域網。
- 跨平台支持 — 在 Windows、Linux 和即將推出的 macOS 上運行。
- 簡單的安裝過程 — Windows 用戶只需啟用 WSL 2，Linux 用戶可直接安裝。
- 完整功能 — 提供與原始 OrcaSlicer 相同的功能，無需妥協。
- 活躍的社群 — 目前有 4 個開放的 Issues，顯示出用戶的活躍度和反饋。

## 快速開始

1. 在 Windows 上啟用 WSL 2
```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2. 重啟 Windows
```bash
重啟電腦
```
3. 啟動 Orca Studio
```bash
在開始菜單中找到 Orca Studio 並啟動
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1168 stars（1168/天），forks 296（25.3%），這顯示出極高的用戶興趣。這個專案由 codedbyjake 主導，他在開源社群中有一定的影響力。OrcaSlicer 解決了 Bambu Lab 打印機用戶在網絡打印方面的痛點，之前的工具往往僅限於 LAN 使用，無法滿足遠程打印的需求。此專案的推出引起了廣泛的關注，尤其是在相關社群中。高比例的 forks 表示許多開發者對其進行了實際的修改和使用，顯示出該工具的實用性和潛力。

## 適合誰使用

**目標受眾**：需要遠程打印功能的 Bambu Lab 打印機用戶。

> [!example] 使用場景
> - 3D 打印愛好者用它來遠程控制 Bambu Lab 打印機，因為它支持通過 BambuNetwork 進行打印，無需局限於 LAN。
> - 開發者用它來測試打印機的切片功能，因為其安裝簡單且支持多平台，能快速上手。
> - 企業用戶用它來管理多台 Bambu Lab 打印機，因為其網絡打印功能使得管理更為高效。

## 架構分析

OrcaSlicer 的架構基於 CMake，這使得它能夠在多個平台上構建和運行。其設計考慮了用戶的便利性，特別是在 Windows 上需要 WSL 2 的要求。資料流方面，使用者的打印請求通過 BambuNetwork 進行處理，這與傳統的 LAN 連接方式不同。

選擇 CMake 作為構建系統使得 OrcaSlicer 的依賴性較低，並且能夠輕鬆地進行跨平台部署。這樣的設計雖然增加了 Windows 用戶的初始配置複雜度，但在長期使用中能夠提供更好的靈活性。擴展性方面，未來可以考慮增加對更多打印機的支持，但目前的架構可能會在處理大量打印請求時遇到性能瓶頸。

## 技術深入分析

OrcaSlicer 的核心技術機制是基於 CMake 的跨平台構建系統，這使得它能夠在多種操作系統上運行。其資料流處理通過 BambuNetwork 進行，這與傳統的 LAN 連接方式形成鮮明對比。效能方面，該工具在處理打印請求時，對於小型打印任務表現良好，但在高負載情況下可能會出現性能瓶頸。選擇 CMake 作為構建工具的好處在於降低了依賴性，並且能夠快速適應不同的環境，但這也意味著 Windows 用戶需要額外配置 WSL 2，增加了初始學習曲線。技術風險方面，Linux 上的啟動問題可能會影響用戶體驗，這是目前需要解決的主要挑戰。整合方面，OrcaSlicer 可以與現有的 3D 打印工作流無縫對接，特別是在使用 Bambu Lab 打印機的環境中，這使得其在實際應用中具有很高的價值。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導，但缺乏具體的使用範例。安裝過程對於 Windows 用戶來說需要啟用 WSL 2，這可能會造成一些困難。整體而言，對於有一定技術背景的用戶來說，能在 30 分鐘內完成安裝並運行。

## 優缺點分析

> [!success] 優點
> - 支持網絡打印，無需局限於局域網。
> - 跨平台支持，適合多種操作系統。
> - 安裝過程簡單，特別是對於 Linux 用戶。

> [!danger] 缺點
> - 在 Linux 上可能會遇到啟動問題。
> - 目前對於 macOS 的支持仍在開發中。
> - 需要用戶手動啟用 WSL 2，對於新手可能不友好。

> [!warning] 注意事項
> - 目前僅在 Windows 上支持 WSL 2，Linux 和 macOS 的支持仍在開發中。
> - 在 Linux 上啟動時可能會遇到崩潰或 UI 冻結的問題。
> - 需要用戶手動啟用 WSL 2，對於不熟悉的用戶可能會有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| PrusaSlicer | PrusaSlicer 提供了更廣泛的打印機支持，但不具備 OrcaSlicer 的網絡打印功能。 |
| Cura | Cura 是一個更為成熟的切片工具，但在 Bambu Lab 打印機的支持上不如 OrcaSlicer。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| PrusaSlicer | PrusaSlicer 提供了更廣泛的打印機支持和功能，但不具備 OrcaSlicer 的網絡打印功能。 | 如果你的團隊需要更廣泛的打印機支持和成熟的功能，PrusaSlicer 是更好的選擇。 | medium，因為需要重新配置打印機設置和切片參數。 |
| Cura | Cura 是一個更為成熟的切片工具，提供了豐富的功能和插件，但在 Bambu Lab 打印機的支持上不如 OrcaSlicer。 | 如果你的團隊已經在使用 Cura 並且不需要網絡打印功能，則可以繼續使用它。 | low，因為 Cura 的界面和功能相對熟悉。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OrcaSlicer-bambulab** | **PrusaSlicer** | **Cura** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | PrusaSlicer 提供了更廣泛的打印機支持和功能，但不具備 OrcaSlicer 的網絡打印功能。 | Cura 是一個更為成熟的切片工具，提供了豐富的功能和插件，但在 Bambu Lab 打印機的支持上不如 OrcaSlicer。 |
> | 遷移成本 | - | medium，因為需要重新配置打印機設置和切片參數。 | low，因為 Cura 的界面和功能相對熟悉。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更廣泛的打印機支持和成熟的功能，PrusaS | 如果你的團隊已經在使用 Cura 並且不需要網絡打印功能，則 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Linux 上啟動時可能會遇到崩潰或 UI 冻結的問題
  - 解法：檢查系統日誌以獲取詳細錯誤信息，並考慮在 GitHub 提交問題。
- [MEDIUM] 需要手動啟用 WSL 2，對於不熟悉的用戶可能會造成困難
  - 解法：參考官方文檔進行設置，或者尋求社群幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 3D 打印工作室 | 非常適合 | 能夠支持多台 Bambu Lab 打印機並進行遠程打印。 |
| 大型製造企業 | 普通 | 可能需要更多的穩定性和功能支持。 |
| 個人 3D 打印愛好者 | 非常適合 | 簡單的安裝和網絡打印功能使其非常方便。 |
| 教育機構的 3D 打印課程 | 適合 | 能夠支持多種操作系統，適合不同的學生環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到便捷的網絡打印功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料，但在使用過程中需注意網絡安全性。其依賴的開源庫需定期檢查更新以避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OrcaSlicer 最常與 Bambu Lab 打印機搭配使用，處於打印工作流的核心環節。用戶可以在 Windows 環境中安裝 WSL 2，然後直接使用 OrcaSlicer 進行打印。該工具與 GitHub Actions 等 CI 工具的整合尚未明確，但其開源性質使得未來有可能進行擴展。整合的摩擦點主要在於 Windows 用戶需要手動配置 WSL 2，這可能會造成初次使用的困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OrcaSlicer 出現之前，Bambu Lab 打印機的用戶主要依賴於傳統的 LAN 連接進行打印，這限制了其使用的靈活性。隨著網絡技術的進步，遠程打印的需求日益增加，OrcaSlicer 的出現正好滿足了這一需求。這個工具的推出代表了 3D 打印領域向更高效、更靈活的方向發展，未來可能會看到更多類似的解決方案。

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
| Forks | 296 |
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

**社群活躍度**：社群活躍度中等，開放的 Issues 數量顯示出用戶的反饋和需求。
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

相關概念：[[3D 切片工具]] · [[網絡打印]] · [[開源軟體]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 切片工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 切片工具" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
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
> const concepts = ["3D 切片工具","網絡打印","開源軟體"];
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
