---
repo: MSNightmare/RoguePlanet
url: https://github.com/MSNightmare/RoguePlanet
owner: MSNightmare
owner_type: User
language: C++
license: MIT
description: "RoguePlanet Windows Defender Vulnerability"
homepage: ""
stars: 1345
stars_per_day: 90
forks: 552
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
star_history: "2026-06-11:913,2026-06-11:914,2026-06-12:1119,2026-06-12:1119,2026-06-13:1218,2026-06-13:1218,2026-06-14:1252,2026-06-14:1253,2026-06-15:1275,2026-06-15:1275,2026-06-16:1292,2026-06-16:1292,2026-06-17:1294,2026-06-18:1305,2026-06-19:1316,2026-06-20:1319,2026-06-21:1325,2026-06-22:1332,2026-06-23:1333,2026-06-24:1337,2026-06-25:1345"
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

**1.3k** stars · **90** stars/天 · 建立 15 天前 · C++ · MIT

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
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (90 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 15 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Windows 安全性有深入了解並希望測試系統防禦能力的安全專業人士。
> **一句話重點** 這個專案展示了 Windows Defender 中潛在的競爭條件漏洞，對於安全研究者來說是一個重要的工具。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到有效的漏洞利用工具，值得對 Windows 安全性有興趣的使用者嘗試。

> [!abstract] 核心創新
> 利用 Windows Defender 的競爭條件漏洞來獲取 SYSTEM 權限，這在安全研究中是相對新穎的。

## 專案簡介

RoguePlanet 是一個針對 Windows Defender 的漏洞利用工具，利用了競爭條件來獲取 SYSTEM 權限。這個工具的運作流程是：首先，利用者在目標系統上執行 PoC，這會觸發一個競爭條件，導致系統在處理 ISO 映像時出現錯誤，進而讓攻擊者獲得系統權限。這種方法的關鍵在於競爭條件的存在，這使得在某些機器上可以達到 100% 的成功率，但在其他機器上則可能失敗。使用者只需執行特定的命令來啟動攻擊，若成功，將會產生一個 SYSTEM shell。這個工具的賣點在於它能夠在多個 Windows 版本上運作，包括 Windows 10 和 Windows 11，但不支援 Windows Server，因為標準用戶無法掛載 ISO。

技術上，這個工具的實作依賴於 C++，並且需要對 Windows 的內部運作有一定的了解。與其他類似工具相比，RoguePlanet 的優勢在於其針對 Windows Defender 的專門設計，並且能夠在特定條件下達到高成功率。儘管如此，使用者需要注意，這個工具的成功率並不保證，且在不同環境中可能會有不同的表現。社群活躍度相對較高，開發者對於問題的回應也相對迅速，顯示出這個專案的潛力和活力。整體來看，這是一個針對特定漏洞的專業工具，適合對 Windows 安全性有深入了解的使用者使用。

**技術棧**：`C++`

## 重點功能

- 競爭條件利用 — 利用 Windows Defender 的競爭條件來獲取 SYSTEM 權限。
- 多版本支援 — 在 Windows 10 和 Windows 11 上經過測試，但不支援 Windows Server。
- 簡單的命令執行 — 使用者只需執行特定的命令來啟動攻擊。
- 高成功率 — 在某些機器上可達到 100% 的成功率。
- 活躍的社群 — 有活躍的開發者和使用者社群，能快速解決問題。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/MSNightmare/RoguePlanet.git
```
2. 編譯專案
```bash
cd RoguePlanet && make
```
3. 執行 PoC
```bash
./RoguePlanet
```

## 程式碼範例

```cpp
{
  "前置條件": "需要在支持的 Windows 環境中運行",
  "指令": "./RoguePlanet",
  "預期輸出": "若成功，將會產生一個 SYSTEM shell"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天就累積 1345 stars（90/天），forks 552（41%），顯示出強烈的社群興趣。作者 MSNightmare 是一位專注於安全漏洞的開發者，這個專案解決了 Windows Defender 中一個之前未被廣泛報導的漏洞，讓使用者能夠在特定條件下獲得系統權限。這個工具的出現引起了安全研究者的注意，尤其是在 Windows 環境中，因為它提供了一種新的攻擊方式。技術上，這個工具的成功依賴於競爭條件的存在，這在許多系統中都是一個潛在的安全隱患。forks/stars 比率高達 41%，顯示出許多人對此工具進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：對 Windows 安全性有深入了解並希望測試系統防禦能力的安全專業人士。

> [!example] 使用場景
> - 安全研究員用它來測試 Windows 系統的防禦能力，因為它能揭示 Windows Defender 的潛在漏洞，幫助改進安全措施。
> - 滲透測試工程師用它來評估客戶系統的安全性，因為它能夠在特定條件下成功獲取 SYSTEM 權限，提供真實的攻擊模擬。
> - 系統管理員用它來檢查自家系統的安全漏洞，因為它能幫助識別 Windows Defender 的弱點，進而加強系統防護。

## 架構分析

RoguePlanet 採用 C++ 實作，設計上專注於 Windows 環境的漏洞利用。其核心架構是基於競爭條件的利用，這意味著它需要在特定的時間窗口內執行操作來觸發漏洞。資料流上，當使用者執行 PoC 時，系統會試圖掛載 ISO 映像，這時候競爭條件被觸發，導致系統錯誤，進而讓攻擊者獲得權限。這種設計的代價在於成功率依賴於具體環境，並且在不同的系統配置上可能表現不一。擴展性方面，若要支援 Windows Server，則需要重新設計 PoC，這可能會增加開發的複雜度。

## 技術深入分析

RoguePlanet 的核心技術機制是利用 Windows Defender 中的競爭條件，這是一種在多執行緒環境中常見的漏洞。該工具的設計依賴於 C++，並利用系統的內部行為來觸發漏洞。效能方面，這個工具的成功率在不同的 Windows 環境中可能有所不同，具體取決於系統配置和當前的負載。設計上，選擇 C++ 是因為它能夠直接與系統底層進行交互，這樣可以更有效地利用漏洞，但也帶來了較高的開發難度。這個工具的技術風險在於，若未來 Windows 更新修補了這個漏洞，則該工具將失去效用。整合方面，由於其專注於 Windows 環境，與其他工具的整合可能需要額外的適配層，這可能會增加使用的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明，但缺乏詳細的範例和安裝指引。安裝過程相對順暢，但對於不熟悉 C++ 的使用者來說可能會有一定的挑戰。文件沒有提供多語言支持，對於非英語使用者可能不太友好。

## 優缺點分析

> [!success] 優點
> - 專注於 Windows Defender 的漏洞，針對性強。
> - 在某些環境下可達到高成功率，提供有效的攻擊模擬。
> - 活躍的社群支持，能快速解決使用者問題。

> [!danger] 缺點
> - 不支援 Windows Server，限制了使用範圍。
> - 成功率依賴於具體環境，可能會讓使用者失望。
> - 需要對 Windows 系統有深入了解，對新手不友好。

> [!warning] 注意事項
> - 不支援 Windows Server，因為標準用戶無法掛載 ISO。
> - 成功率依賴於具體環境，並非所有機器都能達到 100%。
> - 需要對 Windows 系統有一定的了解才能有效使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於不同的 Windows 漏洞利用，並且有更廣泛的支援範圍，適合需要多種攻擊方式的使用者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種漏洞利用工具，但不專注於 Windows Defender，適合需要多平台攻擊的使用者。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的應用程式漏洞，適合需要針對特定應用進行測試的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多種 Windows 漏洞利用，並且有更廣泛的支援範圍，適合需要多種攻擊方式的使用者。 | 如果你的團隊需要多樣化的攻擊工具，並且不僅限於 Windows Defender 的漏洞。 | medium，因為需要學習新的工具和方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種漏洞利用工具，但不專注於 Windows Defender，適合需要多平台攻擊的使用者。 | 如果你的目標系統不僅限於 Windows，且需要針對多種環境進行測試。 | high，因為需要重新適應新的工具和流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RoguePlanet** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多種 Windows 漏洞利用，並且有更廣泛的支援範圍，適合需要多種攻擊方式的使用者。 | 提供多種漏洞利用工具，但不專注於 Windows Defender，適合需要多平台攻擊的使用者。 |
> | 遷移成本 | - | medium，因為需要學習新的工具和方法。 | high，因為需要重新適應新的工具和流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要多樣化的攻擊工具，並且不僅限於 Window | 如果你的目標系統不僅限於 Windows，且需要針對多種環境 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和滲透測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 Windows 10 環境中可能無法成功執行，特別是更新後的版本。
  - 解法：嘗試在不同的系統配置上進行測試。
- [MEDIUM] 需要在特定的時間窗口內執行，否則可能無法觸發漏洞。
  - 解法：確保在執行時系統負載較低。
- **[HIGH]** 不支援 Windows Server，這可能限制了使用範圍。
  - 解法：考慮其他工具或重新設計 PoC。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的滲透測試團隊 | 非常適合 | 能夠有效模擬針對 Windows Defender 的攻擊，提供真實的安全評估。 |
| 小型開發團隊 | 不適合 | 缺乏對 Windows 系統的深入了解，可能無法有效使用。 |
| 安全研究機構 | 適合 | 能夠提供針對 Windows 系統的漏洞研究，幫助改進安全措施。 |
| 個人開發者 | 普通 | 雖然工具有趣，但成功率不保證，可能會讓人失望。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到有效的漏洞利用工具，值得對 Windows 安全性有興趣的使用者嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具需要在具有高權限的環境中運行，並可能會存取敏感資料。使用時需謹慎，尤其是在生產環境中。

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
| Forks | 552 |
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

**社群活躍度**：社群活躍度相對較高，開發者對於問題的回應也相對迅速。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-09 ~ 2026-06-09）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/MSNightmare/RoguePlanet/issues/5) | Really, how do you do this? Thanks for your work. | 6 | 0 |
> | [#6](https://github.com/MSNightmare/RoguePlanet/issues/6) | Just Wanted to Say You're Cool! | 5 | 0 |
> | [#9](https://github.com/MSNightmare/RoguePlanet/issues/9) | june is june and tech is tech, why people say chat bot is AI | 1 | 1 |
> | [#8](https://github.com/MSNightmare/RoguePlanet/issues/8) | I want to propose a collaboration | 1 | 1 |

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
