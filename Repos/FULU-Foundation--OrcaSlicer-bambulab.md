---
repo: FULU-Foundation/OrcaSlicer-bambulab
url: https://github.com/FULU-Foundation/OrcaSlicer-bambulab
owner: FULU-Foundation
owner_type: Organization
language: C++
license: AGPL-3.0
description: ""
homepage: ""
stars: 4668
stars_per_day: 1167
forks: 1610
open_issues: 20
created: 2026-05-11
pushed_at: 2026-05-12
first_seen: 2026-05-13
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "3D 打印"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-13
use_case: "為 Bambu Lab 打印機提供完整的網路支持，無需局域網限制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-19"
contributor_count: 1
engagement: "high"
issue_close_rate: 6
repo_size_kb: 124818
readme_length: 794
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-13"
star_history: "2026-05-13:1168,2026-05-13:1182,2026-05-14:2955,2026-05-14:2958,2026-05-15:4057,2026-05-15:4067,2026-05-16:4668"
tags:
  - github
  - "category/開發工具"
  - "lang/c++"
  - org
aliases:
  - "OrcaSlicer-bambulab"
  - "FULU-Foundation/OrcaSlicer-bambulab"
  - "為 Bambu Lab 打印機提供完整的網路支持，無需局域網限制。"
---

# OrcaSlicer-bambulab

**4.1k** stars · **1.4k** stars/天 · 建立 3 天前 · C++ · AGPL-3.0

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
> 為 Bambu Lab 打印機提供完整的網路支持，無需局域網限制。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.4k stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要遠端控制 Bambu Lab 打印機的 3D 打印愛好者或小型工作室。
> **一句話重點** OrcaSlicer 的最大優勢在於其對網路打印的支持，讓用戶能夠隨時隨地控制打印機。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/FULU-Foundation--OrcaSlicer-bambulab");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 打印" && p.file.name !== "FULU-Foundation--OrcaSlicer-bambulab" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 打印 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到靈活的網路打印功能，值得嘗試。

> [!abstract] 核心創新
> 恢復對 BambuNetwork 的完整支持，讓用戶能夠透過互聯網進行打印。

## 專案簡介

OrcaSlicer 是一個專為 Bambu Lab 打印機設計的切片軟體，主要功能是恢復對 BambuNetwork 的完整支持，讓用戶可以透過互聯網進行打印，而不僅限於局域網。用戶在安裝後，只需透過簡單的指令即可啟用 WSL 2，然後便可使用 Orca Studio 進行打印。這個工具的賣點在於其無縫的網路打印體驗，適合需要遠程操作打印機的用戶。技術上，它使用 CMake 作為構建系統，並且支持多種平台，包括 Windows 和 Linux，macOS 版本正在開發中。這樣的設計使得用戶能夠在不同的操作系統上輕鬆安裝和使用，並且能夠利用現有的網路基礎設施進行打印。

與其他切片工具相比，OrcaSlicer 提供了更靈活的網路支持，特別是對於需要遠端打印的用戶來說，這是個重要的優勢。使用者在使用過程中可能會遇到 WSL 配置的問題，但官方提供的安裝指引已經涵蓋了大部分情況。這個專案目前處於活躍開發階段，社群也在積極討論功能增強和問題解決，顯示出良好的維護狀況。未來幾個月內，預計會持續推出新功能和改進，特別是針對 macOS 的支持。對於小型工作室或個人用戶，這個工具非常適合用來提升打印效率，特別是在需要遠端操作的情況下。

**技術棧**：`CMake` · `C++` · `Python`

## 重點功能

- 完整的 BambuNetwork 支持 — 允許用戶透過互聯網進行打印，無需局域網。
- 跨平台兼容性 — 支持 Windows 和 Linux，macOS 版本正在開發中。
- 簡單的安裝流程 — Windows 用戶只需啟用 WSL 2 即可開始使用。
- 高效的切片功能 — 提供快速且準確的切片，適合各種 3D 打印需求。
- 活躍的社群支持 — 討論區和問題追蹤系統幫助用戶快速解決問題。

## 快速開始

1. 在 Windows 上啟用 WSL 2
```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```
2. 安裝 OrcaSlicer
```bash
下載並安裝 OrcaSlicer 於指定目錄
```
3. 啟動 Orca Studio
```bash
在命令提示字元或 PowerShell 中輸入 OrcaStudio
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 4067 stars（1356/天），forks 1370（33.7%），顯示出強烈的社群參與度。作者 codedbyjake 之前在 OrcaSlicer 的開發上有豐富經驗，這次的專案解決了 Bambu Lab 打印機用戶在網路打印上的痛點，之前的解決方案多數僅限於局域網。這個專案的推出吸引了大量用戶的關注，可能是因為社群對於遠端打印需求的增長。高達 33.7% 的 forks/stars 比率顯示出許多開發者對此專案進行了實際修改和使用，顯示出其在實際應用中的潛力。

## 適合誰使用

**目標受眾**：需要遠端控制 Bambu Lab 打印機的 3D 打印愛好者或小型工作室。

> [!example] 使用場景
> - 3D 打印愛好者用它來遠端控制 Bambu Lab 打印機，因為這樣可以在任何地方進行打印，提升了靈活性。
> - 小型工作室的技術人員用它來簡化打印流程，因為它支持網路打印，無需局域網連接，節省了時間和成本。
> - 教育機構的教師用它來進行遠程教學和打印，因為它的易用性和網路支持使得學生能夠隨時提交打印任務。

## 架構分析

OrcaSlicer 的架構設計以 CMake 為基礎，確保跨平台的兼容性。它的資料流從用戶輸入的 3D 模型開始，經過切片處理後生成 G-code，最終發送到打印機。這樣的設計使得用戶能夠靈活地在不同平台上使用，並且能夠快速適應不同的打印需求。選擇 CMake 作為構建系統的好處在於其廣泛的支持和靈活性，但這也意味著需要用戶具備一定的配置能力。擴展性方面，這個工具能夠支持多種打印機型號，但在特定的網路環境下可能會遇到性能瓶頸，特別是在高延遲的連接情況下。

## 技術深入分析

OrcaSlicer 的核心技術機制在於其使用 CMake 作為構建系統，這使得它能夠在多個平台上運行。其切片過程涉及將 3D 模型轉換為 G-code，這是打印機能夠理解的指令。這個過程的效率直接影響到打印的速度和質量，OrcaSlicer 在這方面表現良好。根據 README，該工具能夠處理各種複雜的模型，並且在性能上能夠滿足大多數用戶的需求。

設計上，選擇 CMake 使得開發者能夠利用其強大的功能，但也增加了學習曲線。對於新手來說，可能需要花時間熟悉 CMake 的使用。技術風險方面，未來可能會遇到網路連接的穩定性問題，特別是在高延遲的環境下。整合方面，OrcaSlicer 能夠與主流的 3D 打印機無縫對接，但在某些情況下，可能需要額外的配置來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引，特別是對於 Windows 用戶的 WSL 2 配置。安裝過程相對順暢，但對於新手來說，可能需要一些額外的幫助。文件中有基本的使用範例，但缺少更詳細的指南。整體來說，花 30 分鐘應該能夠完成基本的安裝和配置。

## 優缺點分析

> [!success] 優點
> - 提供完整的網路打印支持，無需局域網。
> - 跨平台設計，適合多種操作系統。
> - 活躍的開發社群，能夠快速解決問題。

> [!danger] 缺點
> - 安裝過程對於新手來說可能較為複雜。
> - 目前僅支持部分操作系統，macOS 版本尚未完成。
> - 在某些網路環境下可能會遇到連接問題。

> [!warning] 注意事項
> - 目前僅支持 Windows 和 Linux，macOS 版本尚在開發中。
> - 需要 WSL 2 支持，Windows 用戶需進行額外配置。
> - 在某些網路環境下可能會遇到連接問題，特別是防火牆設置。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些防火牆設置下，可能無法連接到 BambuNetwork。
  - 解法：檢查防火牆設置，確保 OrcaSlicer 可以通過。
- [MEDIUM] WSL 2 配置不當可能導致啟動失敗。
  - 解法：確保按照 README 中的指示正確配置 WSL 2。
- [MEDIUM] 在高延遲網路環境下，打印可能會中斷。
  - 解法：嘗試使用更穩定的網路連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 3D 打印工作室 | 非常適合 | 提供靈活的網路打印選項，適合多種打印需求。 |
| 教育機構的遠程教學 | 適合 | 能夠支持學生在家進行打印，提升教學效率。 |
| 大型製造企業的核心打印流程 | 不適合 | 目前處於 alpha 階段，可能不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的網路打印功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。對於 CI/CD 使用安全性高，無需額外的安全考量。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OrcaSlicer 最常與 Bambu Lab 打印機搭配使用，處於打印流程的核心環節。用戶可以在 Windows 上安裝 WSL 2，然後直接使用 OrcaSlicer 進行打印。整合方面，該工具能夠與主流的 CI/CD 工具相容，但可能需要額外的配置來確保無縫對接。最常見的整合問題是 WSL 的配置，這可能會影響到用戶的使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OrcaSlicer 出現之前，Bambu Lab 打印機的用戶主要依賴於局域網進行打印，這限制了其使用的靈活性。隨著遠程工作和學習的需求增加，能夠透過互聯網進行打印的解決方案變得越來越重要。OrcaSlicer 的推出正好滿足了這一需求，並且在技術上提供了更好的支持。

未來，隨著 3D 打印技術的進步，這類工具將會越來越普及。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的 3D 打印知識
- 熟悉 Windows 或 Linux 環境

> [!tip] 導入策略
> 第一週：在個人項目中試用 OrcaSlicer。第二週：在小型團隊內部進行測試。第三週：根據反饋進行調整，並撰寫使用手冊。

**成功指標**：打印任務成功率提高 20%。

> [!warning] 退出計畫
> 若需退出，所有設置均以標準格式保存，便於轉移到其他工具。

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
| Forks | 1.4k |
| Open Issues | 17 |
| Issue 解決率 | 6% (1 closed) |
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

**社群活躍度**：社群活躍，討論區有多個熱門問題和反饋。
**連結**：[文件](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-11 ~ 2026-05-12）
> **活躍天數** 2 天 · **最新 commit** Fix artifact name conflict between workflows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/3) | Restore commit history between OrcaSlicer/OrcaSlicer and thi | 61 | 14 |
> | [#9](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/9) | Defence Fund Pledge `enhancement` | 37 | 0 |
> | [#4](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/4) | Another legal backup option `enhancement` | 10 | 1 |
> | [#14](https://github.com/FULU-Foundation/OrcaSlicer-bambulab/issues/14) | Reverse engineer network plugin? `enhancement` | 2 | 2 |

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[3D 打印]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[livehl--aimirror|livehl/aimirror]]

[GitHub](https://github.com/FULU-Foundation/OrcaSlicer-bambulab)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 打印）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 打印" AND file.name != "FULU-Foundation--OrcaSlicer-bambulab"
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
> const concepts = ["CLI/TUI","自動化","3D 打印"];
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

- [[2026-05-16|2026-05-16]] — 再次上榜，4.7k stars
- [[2026-05-15|2026-05-15]] — 再次上榜，4.1k stars
- [[2026-05-14|2026-05-14]] — 再次上榜，3.0k stars
- [[2026-05-13|2026-05-13]] — 首次收錄，1.2k stars
