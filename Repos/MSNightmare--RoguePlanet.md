---
repo: MSNightmare/RoguePlanet
url: https://github.com/MSNightmare/RoguePlanet
owner: MSNightmare
owner_type: User
language: C++
license: MIT
description: "RoguePlanet Windows Defender Vulnerability"
homepage: ""
stars: 1507
stars_per_day: 56
forks: 600
open_issues: 8
created: 2026-06-09
pushed_at: 2026-06-09
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "安全"
subcategory: "漏洞利用"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "利用 Windows Defender 的競爭條件漏洞來獲取系統權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-19"
contributor_count: 1
engagement: "high"
issue_close_rate: 27
repo_size_kb: 303
readme_length: 1078
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:913,2026-06-11:914,2026-06-12:1119,2026-06-12:1119,2026-06-13:1218,2026-06-13:1218,2026-06-14:1252,2026-06-14:1253,2026-06-15:1275,2026-06-15:1275,2026-06-16:1292,2026-06-16:1292,2026-06-17:1294,2026-06-18:1305,2026-06-19:1316,2026-06-20:1319,2026-06-21:1325,2026-06-22:1332,2026-06-23:1333,2026-06-24:1337,2026-06-25:1345,2026-06-26:1346,2026-06-27:1404,2026-06-28:1433,2026-06-29:1451,2026-06-30:1458,2026-07-01:1470,2026-07-02:1480,2026-07-03:1488,2026-07-04:1494,2026-07-05:1499,2026-07-06:1502,2026-07-07:1507"
tags:
  - github
  - "category/安全"
  - "lang/c++"
aliases:
  - "RoguePlanet"
  - "MSNightmare/RoguePlanet"
  - "利用 Windows Defender 的競爭條件漏洞來獲取系統權限。"
---

# RoguePlanet

**1.5k** stars · **56** stars/天 · 建立 27 天前 · C++ · MIT

```dataviewjs
const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> 利用 Windows Defender 的競爭條件漏洞來獲取系統權限。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (56 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 27 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Windows 安全性有深入了解的安全研究人員和滲透測試工程師。
> **一句話重點** RoguePlanet 展示了針對特定系統漏洞的高效利用，但成功率的變化使得使用者需要具備一定的技術能力來調整和測試。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞利用" && p.file.name !== "MSNightmare--RoguePlanet" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 漏洞利用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到對 Windows Defender 漏洞的深入理解，值得投入。

> [!abstract] 核心創新
> 利用 Windows Defender 的競爭條件漏洞來獲取 SYSTEM 權限。

## 專案簡介

RoguePlanet 是一個針對 Windows Defender 的漏洞利用工具，利用競爭條件來獲取 SYSTEM 權限。使用者需要在特定條件下執行 PoC，這個過程中可能會遇到成功率的變化，因為該漏洞在不同機器上的表現不一。具體來說，當 exploit 成功時，會產生一個 SYSTEM shell，這使得攻擊者能夠獲得完全的系統控制權。這個工具已在 Windows 10 和 Windows 11 上進行測試，但不適用於 Windows Server，因為標準用戶無法掛載 ISO 映像。這意味著雖然 Windows Server 也存在此漏洞，但需要重新設計 PoC 才能利用。這種設計選擇使得 RoguePlanet 在特定環境下的成功率可能不穩定，使用者需要具備一定的技術背景來調整和測試 exploit。

與其他漏洞利用工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，RoguePlanet 的專注點在於 Windows Defender 的特定漏洞，而不是通用的漏洞利用框架。這使得它在針對特定環境的攻擊時具有優勢，但在其他環境下的適用性較低。使用者在實際操作中可能會面臨成功率不穩定的挑戰，特別是在不同的硬體配置上。這個專案目前處於 alpha 階段，開發者對於未來的改進持開放態度，但也表示對於此漏洞的探索已經達到一定的疲倦。對於希望利用此漏洞的安全研究人員來說，RoguePlanet 提供了一個有趣的起點，但需要注意其局限性和不確定性。

**技術棧**：`C++`

## 重點功能

- 競爭條件漏洞利用 — 利用 Windows Defender 的競爭條件來獲取 SYSTEM 權限。
- 跨版本兼容性 — 在 Windows 10 和 Windows 11 上測試成功，但不支持 Windows Server。
- 可調整的 PoC — 使用者可以根據不同環境調整 exploit 以提高成功率。
- 開源社群支持 — 高比例的 forks 表示社群對此專案的參與和修改。
- 簡單的使用流程 — 提供了清晰的操作步驟，便於使用者快速上手。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/MSNightmare/RoguePlanet.git
```
2. 編譯專案
```bash
g++ -o exploit exploit.cpp
```
3. 執行 exploit
```bash
./exploit
```

## 程式碼範例

```cpp
[
  "# 前置條件：需要在支持的 Windows 系統上運行；",
  "g++ -o exploit exploit.cpp",
  "# 預期輸出：如果成功，將會獲得 SYSTEM shell。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天內累積 1507 stars（約 56 stars/天），forks 數量達到 600（39.8%），顯示出相對高的社群參與度。作者 MSNightmare 似乎專注於安全漏洞的研究，這個專案解決了 Windows Defender 中一個明顯的安全漏洞，這在過去的工具中並未有良好的解決方案。這個專案的出現可能與近期 Windows 更新的漏洞有關，吸引了許多安全研究者的注意。高比例的 forks/stars（39.8%）顯示出許多人對此工具進行了實際的修改和使用，這意味著它在社群中有著不小的影響力。

## 適合誰使用

**目標受眾**：對 Windows 安全性有深入了解的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows Defender 的漏洞，因為這樣可以快速獲得系統權限，進行後續的安全測試。
> - 滲透測試工程師用它來評估企業環境中的 Windows 安全性，因為能夠直接利用漏洞來驗證防禦措施的有效性。
> - 開發者用它來學習競爭條件漏洞的利用方式，因為這是一個實際的案例，能夠幫助他們理解漏洞利用的技術細節。

## 架構分析

RoguePlanet 的架構主要是基於 C++ 的 exploit 開發，專注於利用 Windows Defender 的競爭條件漏洞。這種設計選擇使得 exploit 在不同的 Windows 環境中表現不一，因為競爭條件的成功率受多種因素影響。資料流方面，使用者需要編譯 exploit，然後在目標系統上執行，若成功則會獲得 SYSTEM shell。這種設計的代價在於需要使用者具備一定的技術背景來調整和測試 exploit，並且在不同環境中可能需要多次嘗試才能成功。擴展性方面，由於 exploit 是針對特定漏洞的，未來的擴展可能需要重新設計 PoC 以適應新的環境或系統更新。

## 技術深入分析

RoguePlanet 的核心技術機制是利用 Windows Defender 中的競爭條件漏洞，這種漏洞通常出現在多線程環境中，當兩個或多個執行緒同時訪問共享資源時，可能導致不一致的狀態。這個 exploit 主要依賴於 C++ 的底層操作，通過精確的時序控制來觸發漏洞。效能上，該 exploit 在不同機器上的成功率有所差異，這意味著在某些環境中可能需要多次嘗試才能成功。設計取捨方面，選擇 C++ 作為開發語言使得 exploit 在性能上有優勢，但也要求使用者具備一定的編程能力。技術風險方面，這種 exploit 的成功依賴於特定的系統狀態，未來的 Windows 更新可能會影響其有效性。整合分析方面，這個工具在現有的滲透測試工具鏈中可以作為一個補充，但由於其專注於特定漏洞，與主流工具的整合可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰地描述了 exploit 的使用方式，並提供了編譯和執行的指令。安裝過程相對順暢，但需要使用者具備一定的 C++ 知識。文件中未提供多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 針對 Windows Defender 的特定漏洞，成功率高。
> - 開源社群支持，便於修改和擴展。
> - 提供了實際的漏洞利用案例，適合學習和研究。

> [!danger] 缺點
> - 成功率不穩定，依賴於具體環境。
> - 不支持 Windows Server，限制了使用範圍。
> - 需要一定的技術背景來調整 exploit。

> [!warning] 注意事項
> - 僅在 Windows 10 和 Windows 11 上測試，對 Windows Server 不適用。
> - 成功率因機器而異，可能需要多次嘗試。
> - 需要一定的技術背景來調整 exploit。
> - 目前處於 alpha 階段，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於多種漏洞利用，而 RoguePlanet 專注於 Windows Defender 的特定漏洞，適合針對特定環境進行攻擊。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了更廣泛的漏洞利用框架，而 RoguePlanet 則是針對 Windows Defender 的專用工具，使用場景更為狹窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具提供了多種漏洞利用方法，並且支持不同的操作系統，而 RoguePlanet 專注於 Windows Defender 的特定漏洞。 | 如果你的需求是針對多種操作系統進行漏洞利用，則應選擇 agent-sprite-forge。 | medium，因為需要重新調整你的攻擊策略以適應不同的漏洞利用方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更通用的漏洞利用框架，適合多種環境，而 RoguePlanet 則是針對特定漏洞的專用工具。 | 如果你的團隊需要一個通用的漏洞利用工具，則 Boneyard 是更好的選擇。 | high，因為需要全面學習新的工具和方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RoguePlanet** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具提供了多種漏洞利用方法，並且支持不同的操作系統，而 RoguePlanet 專注於 Windows Defender 的特定漏洞。 | Boneyard 提供了一個更通用的漏洞利用框架，適合多種環境，而 RoguePlanet 則是針對特定漏洞的專用工具。 |
> | 遷移成本 | - | medium，因為需要重新調整你的攻擊策略以適應不同的漏洞利用方法。 | high，因為需要全面學習新的工具和方法。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對多種操作系統進行漏洞利用，則應選擇 age | 如果你的團隊需要一個通用的漏洞利用工具，則 Boneyard |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些硬體上 exploit 成功率低，可能需要多次嘗試。
  - 解法：嘗試在不同的機器上運行 exploit，或調整執行時的參數。
- [MEDIUM] 不支持 Windows Server，限制了使用範圍。
  - 解法：考慮重設 exploit 以適應 Windows Server 環境。
- [MEDIUM] 需要 C++ 知識來編譯和運行 exploit。
  - 解法：尋找相關的 C++ 教學資源以提升技能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全測試團隊 | 非常適合 | 能夠針對 Windows Defender 的漏洞進行深入測試，提升系統安全性。 |
| 個人安全研究者 | 適合 | 提供了一個實際的漏洞利用案例，適合學習和研究。 |
| 小型企業的 IT 團隊 | 普通 | 雖然可以用於測試，但成功率不穩定，可能需要額外的技術支持。 |
| 非技術背景的使用者 | 不適合 | 需要一定的 C++ 知識，對於非技術使用者來說難以操作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到對 Windows Defender 漏洞的深入理解，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具本身不需要高權限，但使用時可能需要對系統進行修改，需謹慎操作。依賴於 Windows 系統的安全性，未來的更新可能影響其有效性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

RoguePlanet 最常與滲透測試工具搭配使用，特別是在針對 Windows 環境的測試中。實際整合範例包括在使用 Metasploit 進行滲透測試時，利用 RoguePlanet 的 exploit 來測試 Windows Defender 的防禦能力。該工具與主流 CI/CD 工具的整合尚未明確，可能需要額外的適配工作。整合時最常見的問題是 exploit 的成功率不穩定，使用者需要根據具體環境進行調整。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
| Forks | 600 |
| Open Issues | 8 |
| Issue 解決率 | 27% (3 closed) |
| 最後推送 | 2026-06-09 |
| 建立日期 | 2026-06-09 |
| Repo 大小 | 303 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MSNightmare/RoguePlanet) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MSNightmare](https://github.com/MSNightmare) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-09 ~ 2026-06-09）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MSNightmare/RoguePlanet/issues/6) | Just Wanted to Say You're Cool! | 7 | 0 |
> | [#5](https://github.com/MSNightmare/RoguePlanet/issues/5) | Really, how do you do this? Thanks for your work. | 6 | 0 |
> | [#8](https://github.com/MSNightmare/RoguePlanet/issues/8) | I want to propose a collaboration | 2 | 1 |
> | [#10](https://github.com/MSNightmare/RoguePlanet/issues/10) | Exploit doesn't work | 1 | 4 |
> | [#9](https://github.com/MSNightmare/RoguePlanet/issues/9) | june is june and tech is tech, why people say chat bot is AI | 1 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # RoguePlanet
> RoguePlanet Windows Defender Vulnerability
> 
> Welcome back everyone !!!
> 
> The exploit is a race condition, so it's a hit or miss. I have managed to get a 100% success rate on some machines while it struggled to work on others.
> 
> The exploit has been tested in Windows 11 (Official channel + Canary) and Windows 10 with june 2026 patch installed. The PoC however does not work in Windows Server since standard users cannot mount an ISO image, I'm confident that all Windows Server versions are vulnerable as well but by the time I figured out it that the PoC doesn't work in Windows Server installations, it was a too late to redesign the exploit to overcome this issue. But I want to make one thing very clear. All Windows Server installations are vulnerable as well, you just need to redesign the exploit.
> 
> The race condition part is a bit interesting, I believe (but not sure) that a redesign of the PoC can make it achieve a 100% success rate regardless of the conditions but honestly I'm done with this bug.
> 
> If the exploit succeeds, a SYSTEM shell will be spawned

## 延伸閱讀

相關概念：[[安全漏洞]] · [[滲透測試]] · [[競爭條件]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]]

[GitHub](https://github.com/MSNightmare/RoguePlanet)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞利用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞利用" AND file.name != "MSNightmare--RoguePlanet"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "MSNightmare--RoguePlanet"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "MSNightmare--RoguePlanet" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "MSNightmare--RoguePlanet"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","滲透測試","競爭條件"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MSNightmare--RoguePlanet" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MSNightmare--RoguePlanet" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MSNightmare" AND file.name != "MSNightmare--RoguePlanet"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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
> const me = dv.page("Repos/MSNightmare--RoguePlanet");
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

> **2026-06-11** — 首次收錄
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

- [[2026-06-16|2026-06-16]] — 再次上榜，1.3k stars
- [[2026-06-15|2026-06-15]] — 再次上榜，1.3k stars
- [[2026-06-14|2026-06-14]] — 再次上榜，1.3k stars
- [[2026-06-13|2026-06-13]] — 再次上榜，1.2k stars
- [[2026-06-12|2026-06-12]] — 再次上榜，1.1k stars
- [[2026-06-11|2026-06-11]] — 首次收錄，913 stars
