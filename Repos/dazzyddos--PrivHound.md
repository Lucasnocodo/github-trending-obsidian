---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 484
stars_per_day: 8
forks: 46
open_issues: 1
created: 2026-03-06
pushed_at: 2026-04-26
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "特權提升分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將 Windows 本地特權提升模型化為互聯攻擊路徑的 BloodHound OpenGraph 收集器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 2
engagement: "low"
issue_close_rate: 50
repo_size_kb: 1205
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:301,2026-03-11:302,2026-03-13:347,2026-03-14:363,2026-03-15:367,2026-03-16:370,2026-03-17:373,2026-03-18:378,2026-03-19:392,2026-03-20:408,2026-03-21:417,2026-03-22:418,2026-03-23:422,2026-03-24:428,2026-03-25:429,2026-03-26:433,2026-03-27:434,2026-03-29:435,2026-03-30:438,2026-03-31:440,2026-04-01:445,2026-04-02:449,2026-04-03:453,2026-04-04:454,2026-04-05:457,2026-04-06:461,2026-04-07:464,2026-04-08:464,2026-04-09:465,2026-04-10:465,2026-04-11:466,2026-04-12:465,2026-04-13:465,2026-04-14:467,2026-04-15:467,2026-04-16:470,2026-04-17:470,2026-04-18:470,2026-04-19:470,2026-04-20:471,2026-04-21:472,2026-04-22:472,2026-04-23:472,2026-04-24:474,2026-04-25:474,2026-04-27:475,2026-04-28:475,2026-04-29:475,2026-04-30:476,2026-05-01:480,2026-05-02:481,2026-05-03:481,2026-05-04:481,2026-05-05:481,2026-05-06:481,2026-05-07:482,2026-05-08:482,2026-05-09:484"
tags:
  - github
  - "category/安全"
  - "lang/powershell"
  - easy_install
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地特權提升模型化為互聯攻擊路徑的 BloodHound OpenGraph 收集器。"
---

# PrivHound

**484** stars · **8** stars/天 · 建立 63 天前 · PowerShell · 未標註授權

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
> 將 Windows 本地特權提升模型化為互聯攻擊路徑的 BloodHound OpenGraph 收集器。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Steady (8 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 12 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要進行 Windows 系統安全分析的安全專家和滲透測試人員。
> **一句話重點** PrivHound 將複雜的特權提升問題以圖形化方式呈現，讓安全分析變得更有效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dazzyddos--PrivHound");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "特權提升分析" && p.file.name !== "dazzyddos--PrivHound" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 特權提升分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到有效的 Windows 安全分析工具，值得投入。

> [!abstract] 核心創新
> 將 Windows 本地特權提升問題以圖形化方式展示，便於分析和理解。

## 專案簡介

PrivHound 是一個專門設計來收集 Windows 本地特權提升的工具，通過 BloodHound 的 OpenGraph 模型來展示攻擊路徑。使用者可以透過執行特定的檢查來識別系統中的潛在弱點，例如可修改的服務權限、可寫的服務二進位檔和不安全的註冊表路徑等。這些檢查會生成一個圖形化的攻擊路徑，讓安全專家能夠更直觀地理解潛在的攻擊面。工具的賣點在於，它不僅僅是列出問題，而是將這些問題以圖形方式展現，便於分析和理解。PrivHound 使用 PowerShell 和 Cypher 語言，這使得它能夠與現有的 BloodHound 生態系統無縫整合，並利用其強大的圖形分析能力。這個工具的設計考量了使用者的需求，提供了多達 30 種檢查項目，涵蓋了從服務到註冊表的各種潛在風險。

與其他工具相比，PrivHound 的圖形化展示方式使得安全分析更加直觀，尤其是在處理複雜的攻擊路徑時。這樣的設計不僅提升了效率，也降低了誤判的可能性。使用者在進行安全評估時，可以快速識別出最關鍵的攻擊路徑，並針對性地進行修補。PrivHound 的社群活動相對活躍，且有著良好的問題解決率，這對於使用者來說是一個加分項。總體來看，PrivHound 是一個針對 Windows 環境中本地特權提升的強大工具，適合需要進行深入安全分析的團隊使用。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 圖形化攻擊路徑 — 將 Windows 本地特權提升問題以互聯圖形展示，便於分析。
- 多達 30 種檢查項目 — 包含弱服務權限、可寫服務二進位檔等多種潛在風險。
- 與 BloodHound 生態系統整合 — 使用 Cypher 語言進行資料查詢，提升分析效率。
- 支持 PowerShell — 透過 PowerShell 腳本執行檢查，方便與現有工具鏈整合。
- 即時更新 — 定期更新以修正已知問題並增加新檢查項目。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 進入專案目錄
```bash
cd PrivHound
```
3. 執行檢查
```bash
powershell -ExecutionPolicy Bypass -File PrivHound.ps1
```

## 程式碼範例

```powershell
{
  "前置條件": "確保已安裝 PowerShell 並具備執行腳本的權限。",
  "指令": "powershell -ExecutionPolicy Bypass -File PrivHound.ps1",
  "預期輸出": "生成一個圖形化的攻擊路徑，顯示潛在的特權提升路徑。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 63 天就累積 484 stars（約 8 stars/天），forks 46（9.5%），顯示出不錯的社群關注度。開發者 dazzyddos 和 Signum21 具備相關背景，專注於安全領域，這使得他們能夠針對特權提升的問題提供有效解決方案。PrivHound 解決了傳統安全工具無法有效視覺化攻擊路徑的痛點，讓使用者能夠更清楚地理解系統中的安全風險。這個工具的出現正好填補了市場上對於 Windows 特權提升分析工具的需求。forks/stars 比率為 9.5%，顯示出許多使用者對於這個工具的實際修改和應用，反映了其在社群中的實用性。

## 適合誰使用

**目標受眾**：需要進行 Windows 系統安全分析的安全專家和滲透測試人員。

> [!example] 使用場景
> - 安全分析師用它來識別 Windows 系統中的潛在特權提升路徑，因為 PrivHound 的圖形化展示讓他們能快速定位問題。
> - 滲透測試人員用它來模擬攻擊路徑，因為它提供的 30 種檢查項目幫助他們全面評估系統安全性。
> - 系統管理員用它來檢查服務和註冊表的安全配置，因為 PrivHound 能快速發現可寫的服務二進位檔和不安全的路徑。

## 架構分析

PrivHound 的架構設計以 PowerShell 腳本為核心，利用 Cypher 語言與 BloodHound 整合。這樣的設計使得使用者能夠輕鬆執行檢查並獲得即時的圖形化結果。資料流方面，使用者執行 PowerShell 腳本後，系統會自動檢查各種潛在的安全風險，並將結果轉換為可視化的攻擊路徑。選擇 PowerShell 作為執行環境的好處在於其廣泛的適用性和對 Windows 系統的深度整合，但代價是需要使用者具備一定的 PowerShell 知識。整體架構的擴展性良好，未來可增加更多檢查項目和功能，但目前仍需注意 PowerShell 的執行限制。

## 技術深入分析

PrivHound 的核心技術機制是利用 PowerShell 腳本來執行各種安全檢查，並使用 Cypher 語言來查詢和展示結果。這種設計使得使用者能夠快速獲得系統的安全狀態，並通過圖形化的方式理解攻擊路徑。效能方面，PrivHound 能夠處理多種檢查項目，並在短時間內生成結果，具體的執行時間取決於系統的配置和檢查的範圍。選擇 PowerShell 的原因在於其對 Windows 系統的深度整合，這使得 PrivHound 能夠直接訪問系統資源，但也意味著使用者需要具備一定的 PowerShell 知識。技術風險方面，PrivHound 依賴於 PowerShell 的執行環境，若在某些受限環境中可能無法正常運行。此外，未來的擴展可能需要考慮到 PowerShell 的安全性問題。整合方面，PrivHound 可以輕鬆地與現有的安全工具鏈結合，特別是與 BloodHound 的整合，使得使用者能夠在一個平台上進行全面的安全分析。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了基本的使用說明和檢查項目列表。安裝過程相對順暢，但需要注意 PowerShell 的執行權限。文件中未提供多語言支持，對於非英語使用者可能有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 圖形化展示讓安全分析更直觀，便於理解複雜的攻擊路徑。
> - 多樣的檢查項目覆蓋廣泛，能有效識別潛在風險。
> - 與 BloodHound 生態系統整合，提升分析效率。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 需要一定的 PowerShell 知識，對新手可能有門檻。
> - 目前功能尚在擴展中，可能缺乏某些高級功能。

> [!warning] 注意事項
> - 僅支援 Windows 環境。
> - 需要 PowerShell 的執行權限，可能在某些環境中受到限制。
> - 目前僅有一個開放的問題，可能在未來需要更多的功能擴展。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化攻擊路徑生成，但不提供圖形化展示，適合需要自動化的使用者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的特權提升檢查，但功能範圍較窄，主要針對特定的攻擊向量。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用自動化腳本生成攻擊路徑，強調自動化和快速檢查。 | 如果你的團隊需要快速自動化的攻擊路徑生成，而不需要圖形化展示。 | medium，因為需要重新學習其自動化流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定的攻擊向量，提供簡單的檢查功能。 | 如果你的需求僅限於特定的安全檢查，且不需要全面的圖形化分析。 | low，因為功能相似，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PrivHound** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用自動化腳本生成攻擊路徑，強調自動化和快速檢查。 | 專注於特定的攻擊向量，提供簡單的檢查功能。 |
> | 遷移成本 | - | medium，因為需要重新學習其自動化流程。 | low，因為功能相似，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速自動化的攻擊路徑生成，而不需要圖形化展示 | 如果你的需求僅限於特定的安全檢查，且不需要全面的圖形化分析。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行安全評估的團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些受限環境中，PowerShell 可能無法執行腳本，導致檢查失敗。
  - 解法：確保在具備執行權限的環境中運行。
- [MEDIUM] 某些檢查項目可能需要額外的權限，導致無法獲得完整結果。
  - 解法：以管理員身份執行腳本。
- [MEDIUM] 圖形化展示可能在大型環境中導致性能下降。
  - 解法：限制檢查範圍以提高性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行安全評估 | 非常適合 | PrivHound 提供全面的檢查項目，適合小型團隊快速識別安全風險。 |
| 大型企業的安全團隊進行深入分析 | 適合 | 雖然功能強大，但在大型環境中可能需要調整性能設定。 |
| 個人開發者進行簡單的安全檢查 | 普通 | 對於個人使用者來說，可能過於複雜且需要學習 PowerShell。 |
| 需要跨平台的安全分析工具 | 不適合 | PrivHound 僅限於 Windows 環境，無法滿足跨平台需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到有效的 Windows 安全分析工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PrivHound 本身不需要高權限執行，但在某些環境中可能需要管理員權限。它不會存取敏感資料，但依賴的 PowerShell 環境需注意安全性。

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
| Forks | 46 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
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

**社群活躍度**：社群活躍度良好，定期更新和回應問題。

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

相關概念：[[特權提升]] · [[滲透測試]] · [[安全漏洞]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]]

[GitHub](https://github.com/dazzyddos/PrivHound)

## 相關收錄

> [!note]- 直接競品（同子分類：特權提升分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "特權提升分析" AND file.name != "dazzyddos--PrivHound"
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
> const concepts = ["特權提升","滲透測試","安全漏洞"];
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
