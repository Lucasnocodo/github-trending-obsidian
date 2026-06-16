---
repo: MSNightmare/RoguePlanet
url: https://github.com/MSNightmare/RoguePlanet
owner: MSNightmare
owner_type: User
language: C++
license: MIT
description: "RoguePlanet Windows Defender Vulnerability"
homepage: ""
stars: 1292
stars_per_day: 215
forks: 536
open_issues: 6
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
use_case: "利用 Windows Defender 漏洞，實現系統權限的提升。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-19"
contributor_count: 1
engagement: "high"
issue_close_rate: 33
repo_size_kb: 303
readme_length: 1078
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:913,2026-06-11:914,2026-06-12:1119,2026-06-12:1119,2026-06-13:1218,2026-06-13:1218,2026-06-14:1252,2026-06-14:1253,2026-06-15:1275,2026-06-15:1275,2026-06-16:1292"
tags:
  - github
  - "category/安全"
  - "lang/c++"
aliases:
  - "RoguePlanet"
  - "MSNightmare/RoguePlanet"
  - "利用 Windows Defender 漏洞，實現系統權限的提升。"
---

# RoguePlanet

**1.3k** stars · **255** stars/天 · 建立 5 天前 · C++ · MIT

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
> 利用 Windows Defender 漏洞，實現系統權限的提升。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (255 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Windows 系統安全漏洞有興趣的安全研究人員和滲透測試工程師。
> **一句話重點** 這個專案展示了 Windows 系統中存在的安全漏洞，並提供了一種新的攻擊方式。

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
> **結論** 花 5 小時學習，3 小時整合，得到有效的漏洞利用工具，值得對 Windows 安全性有興趣的使用者投入。

> [!abstract] 核心創新
> 利用 Windows Defender 的競爭條件漏洞，實現 SYSTEM 權限的提升。

## 專案簡介

RoguePlanet 是一個利用 Windows Defender 的競爭條件漏洞的工具，目的是讓攻擊者能夠在受害者的系統上獲得 SYSTEM 權限。使用者只需在受影響的 Windows 10 或 Windows 11 系統上執行此工具，若成功，將會啟動一個 SYSTEM shell。這個漏洞的核心在於競爭條件，這意味著在某些特定情況下，攻擊者可以利用系統的執行時行為來達成目的。該專案的賣點在於其成功率在某些機器上可達 100%，但在其他機器上則可能不穩定。這種設計讓它在特定環境下非常有效，但也使得它的使用場景受到限制。技術上，這個工具主要用 C++ 編寫，並且依賴於 Windows 的內部機制來觸發漏洞。

與其他類似工具相比，RoguePlanet 的獨特之處在於它專注於 Windows Defender，而不是其他安全軟體，這使得它在針對 Windows 環境的攻擊中具有特定的優勢。實際使用中，使用者可能會遇到在 Windows Server 上無法運行的問題，因為標準用戶無法掛載 ISO 映像。這意味著如果你的環境包含 Windows Server，則需要重新設計攻擊方法。這個專案目前處於早期階段，並且有活躍的社群互動，顯示出對這個漏洞的興趣和潛在的合作機會。整體而言，這是一個針對特定漏洞的專案，適合對 Windows 安全性有深入了解的安全研究人員或攻擊者使用。

**技術棧**：`C++`

## 重點功能

- 競爭條件漏洞利用 — 透過特定的執行時行為，實現 SYSTEM 權限的提升。
- Windows 10 和 Windows 11 支援 — 在這兩個平台上經過測試，並能夠觸發漏洞。
- 高成功率 — 在某些機器上可達 100% 的成功率，顯示出其有效性。
- 開源社群互動 — 有活躍的社群反饋和潛在的合作機會。
- 針對 Windows Defender 的專注 — 專注於特定的安全軟體，提供針對性的攻擊方法。

## 快速開始

1. 克隆此專案
```bash
git clone https://github.com/MSNightmare/RoguePlanet.git
```
2. 編譯專案
```bash
g++ -o RoguePlanet RoguePlanet.cpp
```
3. 執行專案
```bash
./RoguePlanet
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1275 stars（255/天），forks 527（41.3%），顯示出極高的社群關注度。作者 MSNightmare 似乎在安全研究領域有一定的影響力，這個專案解決了 Windows 系統中一個未被廣泛認識的漏洞，提供了一種新的攻擊方式。這個漏洞的存在讓許多 Windows 使用者面臨潛在的安全風險，並引發了社群的討論和關注。由於這個漏洞的特性，許多安全研究人員和攻擊者都對其表現出濃厚的興趣，進一步推動了這個專案的流行。

## 適合誰使用

**目標受眾**：對 Windows 系統安全漏洞有興趣的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 系統的安全性，因為它能夠揭示 Windows Defender 的漏洞，幫助他們改進防禦措施。
> - 滲透測試工程師用它來評估客戶系統的脆弱性，因為它提供了一種有效的攻擊方法來驗證系統的安全性。
> - 惡意攻擊者用它來獲取受害者的系統權限，因為它能夠在特定環境下達成 SYSTEM 權限的提升。

## 架構分析

RoguePlanet 的架構基於 C++，專注於利用 Windows 系統中的競爭條件漏洞。這個工具的設計使其能夠在特定的執行環境中觸發漏洞，並在成功時啟動 SYSTEM shell。由於其依賴於 Windows 的內部行為，這意味著在不同的系統配置中，成功率可能會有所不同。

選擇 C++ 作為開發語言是因為其性能和對底層系統的控制能力，但這也意味著使用者需要具備一定的編程知識來編譯和運行此工具。這個工具的擴展性受到 Windows 系統的限制，尤其是在伺服器環境中，因為標準用戶無法掛載 ISO 映像，這使得在這些環境中無法直接使用此工具。整體而言，這個專案的設計旨在針對特定漏洞進行攻擊，並且在特定環境下能夠達成高效能的結果。

## 技術深入分析

RoguePlanet 的核心技術機制是利用 Windows 系統中的競爭條件漏洞，這是一種在多執行緒環境中發生的問題，當兩個或多個執行緒同時訪問共享資源時，可能導致不預期的行為。這個工具的設計使其能夠在特定的執行環境中觸發這個漏洞，進而獲得 SYSTEM 權限。效能方面，這個工具在某些機器上能夠達成 100% 的成功率，但在其他機器上可能會失敗，這使得它的使用場景受到限制。選擇 C++ 作為開發語言是因為其性能和對底層系統的控制能力，但這也意味著使用者需要具備一定的編程知識來編譯和運行此工具。技術風險方面，這個專案的設計決策可能在規模擴大時出現問題，尤其是在伺服器環境中，因為標準用戶無法掛載 ISO 映像，這使得在這些環境中無法直接使用此工具。整合方面，這個工具與 Windows 系統的整合相對簡單，但使用者需要具備一定的技術背景來有效利用此工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明，但缺乏詳細的範例和安裝指南。安裝過程相對順暢，但需要使用者具備一定的編程知識。沒有提供多語言支持，僅有英文文檔，這可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 針對特定漏洞的高效能，能夠在某些環境下達成 100% 的成功率。
> - 開源社群互動活躍，提供了潛在的合作機會。
> - 專注於 Windows Defender，提供針對性的攻擊方法。

> [!danger] 缺點
> - 成功率因環境而異，並非在所有機器上都能達成 100%。
> - 僅支援 Windows 10 和 Windows 11，無法在 Windows Server 上運行。
> - 需要對 Windows 系統有深入了解才能有效利用此工具。

> [!warning] 注意事項
> - 僅支援 Windows 10 和 Windows 11，無法在 Windows Server 上運行。
> - 成功率因環境而異，並非在所有機器上都能達成 100%。
> - 需要對 Windows 系統有深入了解才能有效利用此工具。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於不同的 Windows 漏洞利用，提供更廣泛的攻擊方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 針對 Linux 系統的漏洞利用，適用於不同的操作系統環境。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供針對特定應用程式的漏洞利用，與本專案的通用性有所不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於不同的 Windows 漏洞利用，提供更廣泛的攻擊方法。 | 如果你需要針對多種 Windows 漏洞進行測試，而不僅僅是 Windows Defender 的漏洞。 | medium，因為需要重新學習不同的漏洞利用技術。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 針對 Linux 系統的漏洞利用，適用於不同的操作系統環境。 | 如果你的目標環境是 Linux 系統，而不是 Windows。 | high，因為需要完全轉換到不同的操作系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RoguePlanet** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於不同的 Windows 漏洞利用，提供更廣泛的攻擊方法。 | 針對 Linux 系統的漏洞利用，適用於不同的操作系統環境。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的漏洞利用技術。 | high，因為需要完全轉換到不同的操作系統。 |
> | 適用場景 | 主要場景 | 如果你需要針對多種 Windows 漏洞進行測試，而不僅僅是 | 如果你的目標環境是 Linux 系統，而不是 Windows |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議用在生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows Server 上無法運行，因為標準用戶無法掛載 ISO 映像。
  - 解法：需要重新設計攻擊方法以適應伺服器環境。
- [MEDIUM] 成功率在不同機器上可能有所不同，可能導致不穩定的結果。
  - 解法：測試多個環境以找到最佳配置。
- [MEDIUM] 需要對 Windows 系統有深入了解才能有效利用此工具。
  - 解法：建議使用者先學習相關的 Windows 安全性知識。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全測試團隊 | 非常適合 | 能夠有效測試 Windows 系統的安全性，揭示潛在的漏洞。 |
| 小型開發團隊 | 普通 | 可能需要額外的安全知識來有效利用此工具。 |
| 個人使用者 | 不適合 | 缺乏必要的技術背景，難以有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到有效的漏洞利用工具，值得對 Windows 安全性有興趣的使用者投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具本身不需要高權限運行，但使用時需注意可能的安全風險，特別是在測試環境中。

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
| Forks | 527 |
| Open Issues | 6 |
| Issue 解決率 | 33% (3 closed) |
| 最後推送 | 2026-06-09 |
| 建立日期 | 2026-06-09 |
| Repo 大小 | 303 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MSNightmare/RoguePlanet) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MSNightmare](https://github.com/MSNightmare) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度高，有多個熱門問題和反饋。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-09 ~ 2026-06-09）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/MSNightmare/RoguePlanet/issues/6) | Just Wanted to Say You're Cool! | 5 | 0 |
> | [#5](https://github.com/MSNightmare/RoguePlanet/issues/5) | Really, how do you do this? Thanks for your work. | 5 | 0 |
> | [#9](https://github.com/MSNightmare/RoguePlanet/issues/9) | june is june and tech is tech, why people say chat bot is AI | 0 | 0 |
> | [#8](https://github.com/MSNightmare/RoguePlanet/issues/8) | I want to propose a collaboration | 0 | 1 |
> | [#7](https://github.com/MSNightmare/RoguePlanet/issues/7) | Hi Bro,you are so Great,  love  from ikun | 0 | 3 |

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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[Nightmare-Eclipse--YellowKey|Nightmare-Eclipse/YellowKey]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]]

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
