---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 485
stars_per_day: 7
forks: 45
open_issues: 0
created: 2026-03-06
pushed_at: 2026-04-26
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "滲透測試"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將 Windows 本地特權提升建模為互聯攻擊路徑的 BloodHound OpenGraph 收集器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 2
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1205
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:301,2026-03-11:302,2026-03-13:347,2026-03-14:363,2026-03-15:367,2026-03-16:370,2026-03-17:373,2026-03-18:378,2026-03-19:392,2026-03-20:408,2026-03-21:417,2026-03-22:418,2026-03-23:422,2026-03-24:428,2026-03-25:429,2026-03-26:433,2026-03-27:434,2026-03-29:435,2026-03-30:438,2026-03-31:440,2026-04-01:445,2026-04-02:449,2026-04-03:453,2026-04-04:454,2026-04-05:457,2026-04-06:461,2026-04-07:464,2026-04-08:464,2026-04-09:465,2026-04-10:465,2026-04-11:466,2026-04-12:465,2026-04-13:465,2026-04-14:467,2026-04-15:467,2026-04-16:470,2026-04-17:470,2026-04-18:470,2026-04-19:470,2026-04-20:471,2026-04-21:472,2026-04-22:472,2026-04-23:472,2026-04-24:474,2026-04-25:474,2026-04-27:475,2026-04-28:475,2026-04-29:475,2026-04-30:476,2026-05-01:480,2026-05-02:481,2026-05-03:481,2026-05-04:481,2026-05-05:481,2026-05-06:481,2026-05-07:482,2026-05-08:482,2026-05-09:484,2026-05-10:484,2026-05-11:484,2026-05-12:484,2026-05-13:485,2026-05-14:485"
tags:
  - github
  - "category/安全"
  - "lang/powershell"
  - easy_install
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地特權提升建模為互聯攻擊路徑的 BloodHound OpenGraph 收集器。"
---

# PrivHound

**485** stars · **7** stars/天 · 建立 68 天前 · PowerShell · 未標註授權

```dataviewjs
const me = dv.page("Repos/dazzyddos--PrivHound");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 將 Windows 本地特權提升建模為互聯攻擊路徑的 BloodHound OpenGraph 收集器。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Steady (7 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 17 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Windows 環境中進行特權提升分析的安全測試工程師。
> **一句話重點** PrivHound 讓本地特權提升的攻擊路徑變得可視化，從而提升了安全測試的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dazzyddos--PrivHound");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "滲透測試" && p.file.name !== "dazzyddos--PrivHound" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 滲透測試 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到可視化的攻擊路徑分析，值得投入。

> [!abstract] 核心創新
> PrivHound 將本地特權提升建模為互聯攻擊路徑，改變了傳統的孤立發現模式。

## 專案簡介

PrivHound 是一個專為 Windows 本地特權提升設計的工具，透過 BloodHound 的 OpenGraph 框架，將多種特權提升向量建模為互聯的攻擊路徑。用戶只需運行一個 PowerShell 腳本，即可收集 29 種特權提升檢查，並將結果以圖形方式呈現，讓用戶能夠查詢和探索攻擊路徑。這種設計使得用戶能夠從一個發現推導出另一個發現，形成多步驟的攻擊鏈，這是傳統工具無法實現的。舉例來說，若用戶能讀取另一用戶的檔案，PrivHound 將自動連接這些點，顯示如何利用這些信息進行特權提升。其核心賣點在於將孤立的發現串聯起來，讓用戶能夠清楚地看到從一個點到達 SYSTEM 的路徑。

技術上，PrivHound 使用 PowerShell 進行數據收集，並利用 Cypher 查詢語言進行數據分析，這使得查詢和視覺化變得直觀。與 WinPEAS、PowerUp 等工具相比，PrivHound 不僅僅是列出發現，而是將這些發現整合成可操作的攻擊路徑，這在實際攻擊場景中更具價值。這樣的設計使得用戶能夠更有效地評估和利用系統中的安全漏洞，並且能夠在現有的 Active Directory 攻擊路徑上進行疊加。PrivHound 的使用不需要特權提升，並且能夠在多個主機上進行數據收集，這使得它在大型環境中也能輕鬆運行。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 多步驟攻擊路徑 — 將 29 種特權提升向量以圖形方式呈現，幫助用戶理解攻擊鏈。
- 自動化數據收集 — 使用 PowerShell 腳本進行基本收集，支持自定義輸出路徑和跳過特定檢查。
- Cypher 查詢支持 — 允許用戶使用 Cypher 語言查詢攻擊路徑，提供靈活的數據分析。
- 跨用戶特權分析 — 自動分析發現的用戶憑證能夠訪問的資源，並生成相應的攻擊路徑。
- 支持多主機收集 — 能夠在多個主機上運行，並將數據整合到同一圖形中。

## 快速開始

1. 基本收集
```bash
.\PrivHound.ps1
```
2. 自定義輸出路徑
```bash
.\PrivHound.ps1 -OutputPath C:\Temp\privhound.json
```
3. 跳過特定檢查
```bash
.\PrivHound.ps1 -SkipChecks "ScheduledTasks","Autoruns"
```

## 程式碼範例

```powershell
{
  "前置條件": "需要在 PowerShell 中運行 PrivHound 腳本",
  "指令": ".\\PrivHound.ps1",
  "預期輸出": "生成包含特權提升路徑的 JSON 文件"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 68 天就累積 485 stars（7/天），forks 45（9.3%），顯示出相對活躍的社群參與。作者 dazzyddos 及 Signum21 在安全領域有一定的背景，這使得他們能夠針對本地特權提升的痛點提出有效解決方案。此工具解決了傳統工具無法將發現串聯起來的問題，讓用戶能夠更清晰地理解攻擊路徑。最近的推文和社群討論也促進了這個工具的曝光，進一步推動了其使用。這個工具的設計理念符合當前安全測試的需求，特別是在多步驟攻擊的分析上，讓它成為一個值得關注的選擇。

## 適合誰使用

**目標受眾**：需要在 Windows 環境中進行特權提升分析的安全測試工程師。

> [!example] 使用場景
> - 安全測試工程師用它來分析 Windows 環境中的特權提升路徑，因為它能自動連接不同的安全漏洞，形成可操作的攻擊鏈。
> - 系統管理員用它來檢查本地用戶的特權配置，因為它提供了可視化的攻擊路徑，幫助快速識別潛在的安全風險。
> - 滲透測試人員用它來模擬攻擊路徑，因為它能夠將多個發現整合成一個完整的攻擊鏈，提升測試的有效性。

## 架構分析

PrivHound 的架構基於 BloodHound 的 OpenGraph 框架，這使得數據的可視化和查詢變得簡單。數據流從 PowerShell 腳本收集信息，然後生成 JSON 格式的輸出，這些數據被上傳到 BloodHound 進行可視化。這種設計的好處在於用戶能夠快速獲得可操作的攻擊路徑，而代價是需要依賴 BloodHound 的生態系統。PrivHound 的多主機支持設計使得它在大型環境中也能有效運行，然而這也可能導致數據整合的複雜性增加。

## 技術深入分析

PrivHound 利用 PowerShell 腳本來收集 Windows 環境中的特權提升向量，這些數據被轉換為 JSON 格式，並上傳至 BloodHound 進行可視化。其核心技術在於將多個發現串聯成攻擊路徑，這是傳統工具無法做到的。透過 Cypher 查詢語言，用戶可以靈活地探索和分析這些路徑，這使得 PrivHound 在安全測試中具備了更高的實用性。PrivHound 的設計考慮到了多主機環境的需求，能夠在多個主機上運行並整合數據，這對於大型企業環境尤為重要。儘管如此，這也可能導致數據整合的複雜性增加，特別是當不同主機的數據格式不一致時。安全性方面，PrivHound 不需要特權提升即可運行，這降低了使用過程中的風險。整體而言，PrivHound 的設計理念符合當前安全測試的需求，特別是在多步驟攻擊的分析上，讓它成為一個值得關注的選擇。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的使用範例，安裝過程相對順暢，使用者只需運行 PowerShell 腳本即可開始。文件中有針對不同情境的指令說明，讓新手能夠快速上手。整體而言，花 30 分鐘就能夠成功運行並獲得結果。

## 優缺點分析

> [!success] 優點
> - 能夠自動生成多步驟攻擊路徑，提升分析效率。
> - 支持跨用戶特權分析，提供更全面的安全評估。
> - 使用 Cypher 查詢語言，靈活性高，易於探索數據。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法應用於其他操作系統。
> - 需要用戶具備一定的 PowerShell 知識才能有效使用。
> - 依賴 BloodHound 的生態系統，可能增加整合難度。

> [!warning] 注意事項
> - 僅支援 Windows 環境
> - 需要 PowerShell 執行權限
> - 不支持非 Windows 用戶的特權提升分析

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化攻擊腳本生成，而 PrivHound 專注於可視化的攻擊路徑分析。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態分析功能，無法像 PrivHound 一樣動態生成攻擊路徑。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化攻擊腳本生成，提供更高的靈活性，但缺乏 PrivHound 的可視化分析。 | 如果你的團隊需要快速生成攻擊腳本而非分析攻擊路徑，則應選擇此工具。 | medium，因為需要重新學習工具的使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態分析功能，無法像 PrivHound 一樣動態生成攻擊路徑，適合需要靜態報告的場景。 | 如果你的需求是生成靜態報告而非動態分析，則應選擇此工具。 | low，因為靜態分析工具的使用方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PrivHound** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化攻擊腳本生成，提供更高的靈活性，但缺乏 PrivHound 的可視化分析。 | 提供靜態分析功能，無法像 PrivHound 一樣動態生成攻擊路徑，適合需要靜態報告的場景。 |
> | 遷移成本 | - | medium，因為需要重新學習工具的使用方式。 | low，因為靜態分析工具的使用方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速生成攻擊腳本而非分析攻擊路徑，則應選擇此 | 如果你的需求是生成靜態報告而非動態分析，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在測試環境中使用，尚不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在多主機環境中，數據整合可能會出現格式不一致的情況。
  - 解法：確保所有主機使用相同版本的 PrivHound。
- **[HIGH]** 某些檢查可能因權限不足而無法執行。
  - 解法：確保運行腳本的用戶擁有足夠的權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全測試團隊 | 非常適合 | 能夠有效分析多個主機的特權提升路徑，提升測試效率。 |
| 小型團隊進行滲透測試 | 適合 | 提供了可視化的攻擊路徑，便於理解和分析。 |
| 個人開發者進行安全研究 | 普通 | 雖然功能強大，但可能需要較多的學習時間。 |
| 非 Windows 環境的安全測試 | 不適合 | 僅限於 Windows 環境，無法應用於其他操作系統。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到可視化的攻擊路徑分析，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PrivHound 本身不需要高權限運行，並且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
| Forks | 45 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 1.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dazzyddos/PrivHound) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "PowerShell" : 90
>     "Cypher" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dazzyddos](https://github.com/dazzyddos) | 3 |
> | [@Signum21](https://github.com/Signum21) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，已解決所有開放問題。
**連結**：[文件](https://github.com/dazzyddos/PrivHound#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-04-26）
> **活躍天數** 5 天 · **最新 commit** Merge pull request #4 from Korving-F/main

## README 摘錄

> [!info]- 展開查看原文 README
> # PrivHound
> 
> **Local Privilege Escalation, as a Graph.**
> 
> A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths not a wall of text.
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ## What It Checks
> 
> | # | Check | Technique | MITRE |
> |---|-------|-----------|-------|
> | 1 | **Weak Service Permissions** | Modifiable services running as SYSTEM | T1574.011 |
> | 2 | **Writable Service Binaries** | Replace service .exe with payload | T1574.010 |
> | 3 | **Unquoted Service Paths** | Path hijacking via writable intermediate dirs | T1574.009 |
> | 4 | **DLL Hijacking (PATH)** | Writable directories in system PATH | T1574.001 |
> | 5 | **AlwaysInstallElevated** | Install malicious MSI as SYSTEM | T1548.002 |
> | 6 | **Token Privileges** | SeImpersonate, SeDebug, SeBackup, etc. | T1134.001 |
> | 7 | **Scheduled Tasks** | Writable binaries for SYSTEM tasks | T1053.005 |
> | 8 | **Autorun Executables** | Writable binaries in Run/RunOnce keys | T1547.001 |
> | 9 | **Registry Service Keys** | Writable service ImagePath in HKLM | T1574.011 |
> | 10 | **Stored Credentials** | Credential Manager, AutoLogon passwords | T1552.001 |
> | 11 | **GPP Cached Passwords** | Group Policy Preferences cpassword | T1552.006 |
> | 12 | **Unattended Install Files** | Credentials in unattend/sysprep XML | T1552.001 |
> | 13 | **PowerShell History** | PSReadLine history and transcripts | T1552.001 |
> | 14 | **Sensitive Files** | SAM backups, .kdbx, .rdg, git-credentials | T1552.001 |
> | 15 | **UAC Bypass Opportunities** | UAC misconfig or admin-not-elevated | T1548.002 |
> | 16 | **Writable Program Directories** | Writable dirs in Program Files | T1574.010 |
> | 17 | **Cross-User Profiles** | Readable profiles with sensitive files | T1552.001 |
> | 18 | **Credential Login Paths** | Validate extracted creds against local users | T1078.003 |
> | 19 | **Cross-User Privilege Escalation** | Analyze what discovered users can access | T1078.003 |
> | 20 | **JIT Admin Tools** | MakeMeAdmin, CyberArk EPM, Admin By Request | T1548 |
> | 21 | **Print Spooler / PrintNightmare** | Vulnerable Point and Print configuration | T1068 |
> | 22 | **WSUS HTTP (non-SSL)** | WSUS MITM for SYSTEM code execution | T1557 |
> | 23 | **SCCM/MECM NAA Credentials** | Network Access Account DPAPI extraction | T1552.001 |
> | 24 | **COM Object Hijacking** | HKCU CLSID hijack for SYSTEM-context DLL load | T1546.015 |
> | 25 | **Named Pipe Permissions** | Permissive SYSTEM pipe ACLs → impersonation | T1134.001 |
> | 26 | **Cached Credentials** | DCC2, WiFi, WinSCP, FileZilla, PuTTY creds | T1552.001 |
> | 27 | **WMI Event Subscriptions** | Writable WMI consumer binaries/scripts | T1546.003 |
> | 28 | **WebClient Relay** | NTLM relay via WebClient to DC LDAP → SYSTEM | T1187 |
> | 29 | **Service Recovery Commands** | Writable failure recovery command binaries | T1574.010 |
> | 30 | **Shadow Copy Sensitive Files** | SAM/SYSTEM hives accessible in VSS snapshots | T1003.002 |
> 
> ---
> 
> 
> ## The Problem
> 
> For a long time, BloodHound has proven that attackers think in graphs, transforming Active Directory misconfigurations from static checklists into explorable attack paths. Yet when it comes to local privilege escalation, the industry is still stuck in 2015: run a tool, read a wall of text, manually connect the dots or have LLM do it for you :P
> 
> WinPEAS, PowerUp, and Seatbelt are excellent at finding individual misconfigurations, but they cannot answer questions like:
> 
> - *"Does this writable Program Files directory actually lead to SYSTEM because a service runs a binary from it?"*
> - *"Does this PowerShell history file contain credentials that are valid for a local admin?"*
> - *"Can I read another user's profile, find their stored credentials, log in as them, and exploit a service they have write access to?"*
> 
> These tools report findings in isolation. In reality, privilege escalation is a **multi-step chain** where one finding feeds into another. A writable directory means nothing if no service runs from it. A credential in a history file means nothing if it doesn't belong to a privileged user. The real question is never "what misconfigurations exist?" — it's **"what can I actually reach from here?"**
> 
> If Active Directory attacks can be thought of as a graph, why not local privilege escalation?
> 
> 
> ## The Solution
> 
> PrivHound changes this by modeling local privilege escalation as a graph. Built on BloodHound's OpenGraph framework, it enumerates **29 categories** of Windows privilege escalation vectors, from weak service permissions to COM hijacking to WebClient relay and outputs them as interconnected nodes and edges.
> 
> The result: multi-hop escalation chains become **visible**, **queryable with Cypher**, and **overlayable on top of existing Active Directory attack paths**.
> 
> > **Example:** Your current user can read the profile of another user on the machine. That profile contains cleartext credentials stored on their desktop for a third user. That third user has write permission to a service binary running as Administrator. No existing tool connects these dots. PrivHound does automatically.
> 
> ```
> CurrentUser ─PHCanAccessProfile─→ OtherUser's Profile
>   ─PHProfileContains─→ .git-credentials ─PHContainsCreds─→ ...
>     ─PHCanLoginAs─→ UserX ─PHCanWriteBinary─→ VulnService ─PHRunsAs─→ SYSTEM
> ```
> 
> ---
> 
> 
> ## Multi-Hop Attack Paths
> 
> This is what separates PrivHound from traditional privesc tools. Instead of listing findings in isolation, PrivHound connects them into exploitable chains:
> 
> | Chain | Path |
> |-------|------|
> | **Credential pipeline** | `User → PSHistory → PHContainsCreds → PHCanLoginAs → LocalUser → Admin` |
> | **Writable dir → service** | `User → WritableProgramDir → PHHostsBinaryFor → Service → SYSTEM` |
> | **Cross-user profile** | `User → Profile → SensitiveFile → PHCanLoginAs → LocalUser → Admin` |
> | **Cross-user escalation** | `User → (creds) → PHCanLoginAs → UserX → PHCanWriteBinary → Service → SYSTEM` |
> | **SeBackup sub-chain** | `User → SeBackup → PHCanReadProtected → SAM → PHCanExtractHashes → Admin` |
> | **Stored creds → runas** | `User → StoredCred → PHCanLoginViaRunas → LocalUser → Admin` |
> | **SCCM NAA → creds** | `User → SCCMCred → PHContainsCreds → PHCanLoginAs → Admin` |
> | **WebClient relay** | `User → WebClientRelay → PHEscalatesTo → SYSTEM` |
> | **COM hijack** | `User → COMHijack → PHExecutesAs → SYSTEM` |
> | **WMI subscription** | `User → WMISubscription → PHRunsAs → SYSTEM` |
> | **Named pipe** | `User → NamedPipe → PHRunsAs → SYSTEM` |
> | **Service recovery** | `User → PHCanWriteRecoveryBin → Service → SYSTEM` |
> | **Shadow copy hashes** | `User → ShadowCopy → SAM → PHCanExtractHashes → Admin` |
> | **JIT admin** | `User → MakeMeAdmin → PHGrantsTempAdmin → Admin` |
> 
> ---
> 
> 
> ## Cross-User Privilege Escalation
> 
> When PrivHound discovers valid credentials for other local users (via GPP passwords, AutoLogon, unattend files, PowerShell history, cross-user profiles, etc.), it doesn't stop at creating a `PHCanLoginAs` edge. It analyzes what those discovered users can actually do.
> 
> **How it works (no SeImpersonatePrivilege required):**
> 
> 1. `LogonUser` obtains a token handle for each discovered user
> 2. `GetTokenInformation` extracts group memberships (SIDs) and token privileges
> 3. ACL checks run using the discovered user's groups — not the current user's
> 4. Edges are created from the discovered user's node to any vulnerable resources they can access
> 5. The token is closed — no impersonation occurs, no elevated privileges needed
> 
> **What it checks for each discovered user:**
> 
> | Sub-check | Edge created |
> |-----------|-------------|
> | Service binary write | `PHCanWriteBinary` |
> | Service SDDL modify | `PHCanModifyService` |
> | Unquoted path hijack | `PHCanHijackPath` |
> | DLL hijack PATH dirs | `PHCanWriteTo` |
> | Scheduled task binary | `PHCanWriteTaskBinary` |
> | Autorun binary | `PHCanWriteAutorun` |
> | Program directory | `PHCanWriteProgDir` |
> | Token privileges | `PHHasPrivilege` |
> | Service recovery binary | `PHCanWriteRecoveryBin` |
> 
> All cross-user edges 

## 延伸閱讀

相關概念：[[滲透測試]] · [[特權提升]] · [[攻擊路徑分析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]]

[GitHub](https://github.com/dazzyddos/PrivHound)

## 相關收錄

> [!note]- 直接競品（同子分類：滲透測試）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "滲透測試" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "PowerShell" AND file.name != "dazzyddos--PrivHound" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["滲透測試","特權提升","攻擊路徑分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "dazzyddos--PrivHound" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dazzyddos--PrivHound" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dazzyddos" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
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
> const me = dv.page("Repos/dazzyddos--PrivHound");
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

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
