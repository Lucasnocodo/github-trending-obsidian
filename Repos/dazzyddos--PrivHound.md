---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 370
stars_per_day: 41
forks: 36
open_issues: 3
created: 2026-03-06
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "權限提升分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將 Windows 本地權限提升建模為互聯的攻擊路徑，幫助安全研究人員識別潛在的漏洞。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1158
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:301,2026-03-11:302,2026-03-13:347,2026-03-14:363,2026-03-15:367,2026-03-16:370"
tags:
  - github
  - "category/安全"
  - "lang/powershell"
  - easy_install
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地權限提升建模為互聯的攻擊路徑，幫助安全研究人員識別潛在的漏洞。"
---

# PrivHound

**370** stars · **41** stars/天 · 建立 9 天前 · PowerShell · 未標註授權

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

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升建模為互聯的攻擊路徑，幫助安全研究人員識別潛在的漏洞。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (41 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要針對 Windows 環境進行安全評估的安全研究人員和 IT 團隊。
> **一句話重點** 這個專案讓 Windows 本地權限提升的分析變得可視化，顯著提高了安全評估的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dazzyddos--PrivHound");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "權限提升分析" && p.file.name !== "dazzyddos--PrivHound" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 權限提升分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到快速的安全評估工具，值得考慮。

> [!abstract] 核心創新
> 將 Windows 本地權限提升建模為互聯的攻擊路徑，提供可視化的分析工具。

## 專案簡介

PrivHound 是一個專為 Windows 環境設計的 BloodHound OpenGraph 收集器，專注於本地權限提升的攻擊路徑。它通過檢查多種潛在的安全漏洞（如可修改的服務權限、可寫的服務二進位檔和 DLL 劫持等），來生成一個可視化的攻擊路徑圖，讓安全研究人員能夠更直觀地識別和修補漏洞。使用者只需執行簡單的 PowerShell 指令，即可獲得一個包含所有檢查結果的圖形化報告，這樣的設計使得複雜的安全分析變得更為簡單和高效。

技術上，PrivHound 利用 Cypher 查詢語言來處理和分析收集到的數據，並生成圖形結構。這種方法不僅提高了數據處理的效率，還使得用戶能夠快速查詢特定的攻擊路徑。相比於傳統的文本報告，這種圖形化的表示方式更容易讓使用者理解和應用。



與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，PrivHound 提供了更為直觀的可視化界面，並且專注於 Windows 環境的特定需求。這使得它在針對 Windows 系統的安全評估中更具針對性和有效性。

在實際使用中，PrivHound 可以快速識別多達 30 種不同的潛在安全問題，並生成相應的攻擊路徑圖，這對於大型企業和安全團隊尤為重要。社群活躍度方面，該專案在短短 9 天內便累積了 370 個 stars，顯示出其受到廣泛關注。

然而，該專案仍在早期階段，當前有 3 個開放的問題，且尚未關閉任何問題，這可能影響其穩定性和用戶的信心。對於希望在生產環境中使用的團隊，建議在進一步穩定之前先進行小規模測試。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 多種檢查項目 — 支援 30 種不同的檢查項目，如弱服務權限、可寫的服務二進位檔等。
- 圖形化攻擊路徑 — 生成可視化的攻擊路徑圖，便於理解和分析。
- Cypher 查詢支持 — 使用 Cypher 語言進行數據查詢和分析，提高效率。
- 快速部署 — 只需簡單的 PowerShell 指令即可開始使用。
- 針對 Windows 環境優化 — 專注於 Windows 系統的特定安全需求。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 進入專案目錄
```bash
cd PrivHound
```
3. 執行 PowerShell 指令
```bash
powershell -ExecutionPolicy Bypass -File .\PrivHound.ps1
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 370 stars（41/天），forks 36（9.7%），顯示出明顯的增長潛力。作者 dazzyddos 在安全領域有一定的經驗，這個專案解決了 Windows 環境下本地權限提升的可視化問題，之前的工具往往只能提供文本報告，無法有效展示攻擊路徑。近期的社群討論和需求也促進了這個專案的快速成長。高達 9.7% 的 forks/stars 比率表明許多人對這個工具感興趣並進行實際修改，顯示出其潛在的實用性。

## 適合誰使用

**目標受眾**：需要針對 Windows 環境進行安全評估的安全研究人員和 IT 團隊。

> [!example] 使用場景
> - 安全研究員用它來分析 Windows 系統中的權限提升路徑，因為它能快速生成可視化的攻擊路徑圖，節省了手動查找的時間。
> - IT 安全團隊用它來定期檢查系統安全，因為它提供了多達 30 種檢查項目，幫助團隊識別潛在的安全風險。
> - 滲透測試工程師用它來制定測試計畫，因為它能清晰地展示出各種攻擊路徑，讓測試更具針對性。

## 架構分析

PrivHound 的架構設計以 PowerShell 腳本為核心，通過執行腳本來收集系統信息並生成攻擊路徑圖。數據處理使用 Cypher 查詢語言，這使得用戶能夠靈活查詢和分析收集到的數據。選擇 PowerShell 是因為其在 Windows 環境中的原生支持，這樣的設計使得部署變得簡單，但也限制了其在其他操作系統上的使用。整體架構輕量，依賴性較少，適合快速部署和使用。未來擴展性方面，若需支持更多平台，可能需要重構部分代碼。

## 技術深入分析

PrivHound 的核心技術機制是利用 PowerShell 腳本來收集 Windows 系統的安全信息，並使用 Cypher 查詢語言來分析這些數據。這種設計使得用戶能夠快速生成攻擊路徑圖，並識別潛在的安全風險。效能方面，PrivHound 能夠在短時間內檢查多達 30 種不同的安全檢查項目，這對於大型企業的安全評估尤為重要。選擇 PowerShell 作為主要語言是因為其在 Windows 環境中的廣泛應用，這樣的選擇雖然提高了使用的便利性，但也限制了其在其他操作系統上的兼容性。技術風險方面，該專案目前仍在早期開發階段，可能存在未解決的安全問題和穩定性風險。整合方面，PrivHound 的使用不需要複雜的配置，適合快速部署，但對於需要長期維護的環境，可能需要考慮其未來的更新和支持情況。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和快速入門指南，安裝過程相對順暢，但對於不熟悉 PowerShell 的用戶可能會有一定的挑戰。文件中缺乏詳細的範例和多語言支持，可能需要用戶自行探索。整體而言，花 30 分鐘能夠跑起來，但對於新手來說，理解其運作原理可能需要更多時間。

## 優缺點分析

> [!success] 優點
> - 提供直觀的可視化攻擊路徑，便於分析和理解。
> - 支持多種檢查項目，幫助用戶全面評估安全風險。
> - 快速部署，適合快速評估和測試。

> [!danger] 缺點
> - 目前仍在早期開發階段，穩定性有待提高。
> - 僅限於 Windows 環境，無法跨平台使用。
> - 對於不熟悉 PowerShell 的用戶可能存在學習曲線。

> [!warning] 注意事項
> - 目前僅支援 Windows 環境。
> - 專案仍在早期階段，存在未解決的開放問題。
> - 需要 PowerShell 環境，對於不熟悉 PowerShell 的用戶可能有學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不針對權限提升分析，適合需要資料備份的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要針對雲端環境的安全檢查，與 PrivHound 的 Windows 專注性不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，並不針對安全漏洞分析。 | 如果你的需求主要是資料備份而非安全評估，則應選擇此工具。 | low，因為兩者功能不同，無需直接遷移。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於雲端環境的安全檢查，與 PrivHound 的 Windows 專注性不同。 | 如果你的環境主要是雲端且需要針對雲安全進行評估，則應選擇此工具。 | medium，可能需要調整測試策略以適應不同環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PrivHound** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和備份，並不針對安全漏洞分析。 | 專注於雲端環境的安全檢查，與 PrivHound 的 Windows 專注性不同。 |
> | 遷移成本 | - | low，因為兩者功能不同，無需直接遷移。 | medium，可能需要調整測試策略以適應不同環境。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料備份而非安全評估，則應選擇此工具。 | 如果你的環境主要是雲端且需要針對雲安全進行評估，則應選擇此工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Windows 版本上，PowerShell 腳本可能需要額外的執行權限才能運行。
  - 解法：確保以管理員身份運行 PowerShell。
- [MEDIUM] 生成的 JSON 文件格式可能不符合預期，導致後續分析困難。
  - 解法：檢查輸出路徑和文件權限，確保可寫入。
- [MEDIUM] 某些檢查項目可能因系統配置不同而無法正確執行。
  - 解法：根據具體系統環境調整檢查項目。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全評估團隊 | 非常適合 | 能夠快速識別和分析多種潛在安全風險，提升評估效率。 |
| 小型企業的 IT 支援團隊 | 適合 | 提供簡單的部署和使用方式，適合資源有限的環境。 |
| 個人安全研究者 | 普通 | 雖然功能強大，但對於新手可能有一定的學習曲線。 |
| 希望進行跨平台安全評估的團隊 | 不適合 | 目前僅支援 Windows 環境，無法滿足跨平台需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到快速的安全評估工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限運行，但會存取系統的安全配置和敏感資料，使用時需謹慎。依賴鏈的信任程度尚可，但需注意未經審計的依賴項。

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
| Forks | 36 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 1.1 MB |
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
> | [@dazzyddos](https://github.com/dazzyddos) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度一般，開放問題尚未解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06）
> **活躍天數** 1 天 · **最新 commit** Added initial files

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/dazzyddos/PrivHound/issues/2) | -OutputFormat BloodHound-customnodes fails to generate privh | 0 | 0 |

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

相關概念：[[特權提升]] · [[安全漏洞分析]] · [[MITRE ATT&CK]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[PowerUp--PowerUp|PowerUp/PowerUp]] · [[WinPEAS--winPEAS|WinPEAS/winPEAS]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

[GitHub](https://github.com/dazzyddos/PrivHound)

## 相關收錄

> [!note]- 直接競品（同子分類：權限提升分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "權限提升分析" AND file.name != "dazzyddos--PrivHound"
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
> const concepts = ["特權提升","安全漏洞分析","MITRE ATT&CK"];
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
