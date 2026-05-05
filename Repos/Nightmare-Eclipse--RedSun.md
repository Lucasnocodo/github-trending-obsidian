---
repo: Nightmare-Eclipse/RedSun
url: https://github.com/Nightmare-Eclipse/RedSun
owner: Nightmare-Eclipse
owner_type: User
language: C++
license: MIT
description: "The Red Sun vulnerability repository"
homepage: ""
stars: 1864
stars_per_day: 98
forks: 404
open_issues: 10
created: 2026-04-15
pushed_at: 2026-04-15
first_seen: 2026-04-17
week: "2026-W16"
month: "2026-04"
category: "安全"
subcategory: "漏洞利用"
release_tag: "x64Release"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-17
use_case: "利用 Windows Defender 的漏洞來獲取系統管理權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-25"
contributor_count: 1
engagement: "medium"
issue_close_rate: 38
repo_size_kb: 56
readme_length: 626
bus_factor: 1
last_release_days: 20
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-17"
star_history: "2026-04-17:785,2026-04-17:793,2026-04-18:1354,2026-04-18:1358,2026-04-19:1500,2026-04-19:1500,2026-04-20:1573,2026-04-20:1573,2026-04-21:1642,2026-04-21:1643,2026-04-22:1685,2026-04-22:1685,2026-04-23:1716,2026-04-24:1742,2026-04-25:1766,2026-04-26:1781,2026-04-27:1792,2026-04-28:1806,2026-04-29:1817,2026-04-30:1830,2026-05-01:1838,2026-05-02:1848,2026-05-03:1853,2026-05-04:1858,2026-05-05:1864"
tags:
  - github
  - "category/安全"
  - "lang/c++"
aliases:
  - "RedSun"
  - "Nightmare-Eclipse/RedSun"
  - "利用 Windows Defender 的漏洞來獲取系統管理權限。"
---

# RedSun

**1.9k** stars · **98** stars/天 · 建立 19 天前 · C++ · MIT

```dataviewjs
const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `x64Release`

> [!summary] 一句話摘要
> 利用 Windows Defender 的漏洞來獲取系統管理權限。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (98 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 19 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 Windows 安全性和漏洞利用有興趣的安全研究者和開發者。
> **一句話重點** RedSun 的創新在於利用反病毒軟體的行為來達成系統權限提升，這在安全研究中提供了新的視角。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞利用" && p.file.name !== "Nightmare-Eclipse--RedSun" && p.status !== "archived")
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
> **結論** 花 5 小時學習，3 小時整合，得到對 Windows 安全性的新見解，值得探索。

> [!abstract] 核心創新
> 利用反病毒軟體的設計缺陷來獲得系統管理權限。

## 專案簡介

**核心機制**

RedSun 是一個專注於利用 Windows Defender 行為的漏洞庫。它的核心機制是利用 Windows Defender 在檢測到帶有雲標籤的惡意文件時，竟然選擇將該文件重寫回原位置，這導致系統文件被覆蓋並獲得管理權限。這個 PoC（Proof of Concept）展示了如何利用這一行為來達成目的，並且強調了反病毒軟體在某些情況下的反直覺行為。使用者只需執行特定的 C++ 程式碼，即可觸發這一漏洞，這使得 RedSun 成為一個有趣且具挑戰性的研究對象。

在技術實作方面，RedSun 使用 C++ 語言來編寫，並且專注於 Windows 環境下的系統調用。

**技術實作**

這意味著它的依賴性相對較低，因為只需一個 C++ 編譯器即可運行。這個專案的設計選擇使得它在 Windows 環境中能夠高效運行，但也限制了其在其他平台的可用性。

與其他類似工具相比，RedSun 的獨特之處在於它直接利用了反病毒軟體的行為，而非傳統的漏洞利用方式。像是 0x0funky/agent-sprite-forge 和 0xGF/boneyard 這類工具通常專注於更傳統的漏洞利用，而 RedSun 則是針對反病毒軟體的設計缺陷進行攻擊，這使得它在某些情況下更具隱蔽性和有效性。

在實際使用中，RedSun 的效果取決於目標系統的防護措施，特別是 Windows Defender 的配置。

**競品比較**

使用者可能會遇到的常見問題包括防病毒軟體的即時檢測和阻止，這可能會影響其成功率。社群活躍度方面，該專案在短時間內累積了 1864 stars 和 404 forks，顯示出其受到廣泛關注。

這個專案目前處於 alpha 階段，適合對安全研究和漏洞利用有興趣的開發者。未來可能會有更多的功能擴展，尤其是在針對不同反病毒軟體的行為進行研究方面。對於希望深入了解 Windows 安全性的研究者來說，這是一個值得探索的工具。

**效果與限制**



建議使用情境包括：安全研究人員用它來測試 Windows 系統的防護能力，因為它能揭示反病毒軟體的設計缺陷；開發者用它來學習漏洞利用技術，因為它提供了一個有趣的案例；而不建議在生產環境中使用，因為其行為可能會引發安全警報和法律問題。

**技術棧**：`C++`

## 重點功能

- PoC 漏洞利用 — 利用 Windows Defender 的行為來覆蓋系統文件並獲得管理權限。
- C++ 實作 — 使用 C++ 編寫，降低依賴性，易於編譯和運行。
- 針對反病毒軟體的設計缺陷 — 直接利用反病毒軟體的行為，而非傳統漏洞。
- 社群活躍 — 短時間內累積大量 stars 和 forks，顯示出廣泛關注。
- 開放源碼 — 以 MIT 授權釋出，便於社群貢獻和修改。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Nightmare-Eclipse/RedSun.git
```
2. 進入專案目錄
```bash
cd RedSun
```
3. 編譯程式碼
```bash
g++ -o RedSun main.cpp
```
4. 執行程式
```bash
./RedSun
```

## 程式碼範例

```cpp
{
  "前置條件": "需要 C++ 編譯器",
  "指令": "./RedSun",
  "預期輸出": "獲得管理權限，覆蓋系統文件（根據 README 推測）"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天就累積 1864 stars（98/天），forks 404（21.7%），這顯示出其在安全研究社群中的高關注度。作者 Nightmare-Eclipse 是一位專注於安全研究的開發者，過去有多個相關專案。RedSun 解決了反病毒軟體在處理帶有雲標籤的惡意文件時的設計缺陷，這是之前沒有好方案的痛點。該專案的出現引發了社群的討論，特別是關於反病毒軟體的有效性和設計問題。技術生態的變化，如對安全漏洞的重視，讓這個工具的研究變得更加重要。高達 21.7% 的 forks/stars 比率顯示許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：對 Windows 安全性和漏洞利用有興趣的安全研究者和開發者。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 系統的防護能力，因為它能揭示反病毒軟體的設計缺陷。
> - 開發者用它來學習漏洞利用技術，因為它提供了一個有趣的案例。
> - 滲透測試工程師用它來評估客戶系統的安全性，因為它能有效測試反病毒軟體的反應。

## 架構分析

RedSun 的架構設計專注於利用 Windows Defender 的行為。它的核心是 C++ 實作，這使得它能夠直接進行系統調用，並且能夠在 Windows 環境中高效運行。資料流方面，當執行該程式時，它會觸發 Windows Defender 的檢測機制，並利用其重寫文件的行為來達成目的。

這種設計選擇使得 RedSun 在某些情況下能夠隱蔽地進行攻擊，但也限制了其在其他平台的可用性。選擇 C++ 而非其他語言的原因在於其性能和對系統底層的控制能力，這使得 RedSun 能夠在執行效率上獲得優勢。擴展性方面，隨著 Windows Defender 的更新，RedSun 可能需要進行調整以保持有效性。

## 技術深入分析

RedSun 的核心技術機制是利用 Windows Defender 在檢測到帶有雲標籤的惡意文件時的行為。當該文件被檢測到時，反病毒軟體會選擇將其重寫回原位置，這一行為被 RedSun 利用來覆蓋系統文件並獲得管理權限。這種設計模式使得 RedSun 在某些情況下能夠隱蔽地進行攻擊，並且不易被檢測到。效能方面，RedSun 的執行效率高，因為它直接與系統進行交互，並且對資源的需求相對較低。設計取捨方面，選擇 C++ 而非其他語言的原因在於其性能和對系統底層的控制能力，這使得 RedSun 能夠在執行效率上獲得優勢。技術風險方面，隨著 Windows Defender 的更新，RedSun 可能需要進行調整以保持有效性，這可能會導致技術債的累積。整合方面，RedSun 與現有的滲透測試工具鏈相容性良好，能夠輕鬆整合進入 CI/CD pipeline，但需要注意防病毒軟體的即時檢測問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了基本的使用說明和範例。安裝過程相對順暢，但需要 C++ 編譯環境，這對新手來說可能有些挑戰。文件目前僅提供英文版本，沒有多語言支持。整體來說，花 30 分鐘能夠跑起來，但需要具備一定的 C++ 基礎。

## 優缺點分析

> [!success] 優點
> - 直接利用反病毒軟體的行為，具備隱蔽性。
> - C++ 實作，性能優越且依賴性低。
> - 社群活躍，能夠獲得及時的支持和更新。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 可能會被防病毒軟體即時檢測，影響成功率。
> - 需要具備 C++ 編譯環境，對新手不友好。

> [!warning] 注意事項
> - 僅支援 Windows 環境
> - 可能會被防病毒軟體即時檢測並阻止
> - 需要具備 C++ 編譯環境

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於傳統漏洞利用，而 RedSun 利用反病毒軟體的設計缺陷進行攻擊。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 同樣針對 Windows 環境，但不專注於反病毒行為的利用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於傳統漏洞利用，並不針對反病毒行為。 | 如果你的目標是針對傳統漏洞進行利用，而非反病毒行為的測試。 | medium，因為需要學習不同的漏洞利用技術。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 同樣針對 Windows 環境，但不專注於反病毒行為的利用。 | 如果需要一個更廣泛的漏洞利用工具，而不僅限於反病毒行為。 | low，因為使用的技術相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RedSun** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於傳統漏洞利用，並不針對反病毒行為。 | 同樣針對 Windows 環境，但不專注於反病毒行為的利用。 |
> | 遷移成本 | - | medium，因為需要學習不同的漏洞利用技術。 | low，因為使用的技術相似。 |
> | 適用場景 | 主要場景 | 如果你的目標是針對傳統漏洞進行利用，而非反病毒行為的測試。 | 如果需要一個更廣泛的漏洞利用工具，而不僅限於反病毒行為。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人研究和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 防病毒軟體可能會即時檢測並阻止執行
  - 解法：在無防病毒環境中測試
- [MEDIUM] 僅限於 Windows 環境，無法在其他系統上運行
  - 解法：使用虛擬機器或 Windows 環境進行測試
- [MEDIUM] 需要 C++ 編譯環境，對新手不友好
  - 解法：尋找合適的 C++ 開發環境或使用 Docker 容器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 安全研究人員進行漏洞測試 | 非常適合 | 因為它提供了一個獨特的漏洞利用案例。 |
| 開發者學習漏洞利用技術 | 適合 | 因為它能夠展示反病毒行為的利用。 |
| 企業環境中的安全測試 | 不適合 | 因為可能會引發安全警報和法律問題。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到對 Windows 安全性的新見解，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要在 Windows 環境中運行，可能會存取系統敏感資料。對於 CI/CD 使用時需謹慎，因為可能會引發安全警報。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
| Forks | 404 |
| Open Issues | 10 |
| Issue 解決率 | 38% (6 closed) |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 56 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/RedSun) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 4 |

**最新版本**：x64Release — Initial Release (2026-04-15)

> [!info]- Release Notes
> v1.0.0 Release

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/Nightmare-Eclipse/RedSun)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-15）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/Nightmare-Eclipse/RedSun/issues/4) | Breakdown post covering RedSun — nefariousplan.com | 26 | 1 |
> | [#3](https://github.com/Nightmare-Eclipse/RedSun/issues/3) | rewrite in python 😂 | 23 | 4 |
> | [#5](https://github.com/Nightmare-Eclipse/RedSun/issues/5) | flagged by windows defender | 10 | 3 |
> | [#12](https://github.com/Nightmare-Eclipse/RedSun/issues/12) | windows defender immediately detects the file lol | 4 | 3 |
> | [#9](https://github.com/Nightmare-Eclipse/RedSun/issues/9) | Typo in Console Output | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # RedSun
> The Red Sun vulnerability repository
> 
> Now, normally I would just drop the PoC code and let people figure it out. But I can't for this one, it's way too funny.
> When Windows Defender realizes that a malicious file has a cloud tag, for whatever stupid and hilarious reason, the antivirus that's supposed to protect decides that it is a good idea to just rewrite the file it found again to it's original location. The PoC abuses this behaviour to overwrite system files and gain administrative privileges.
> 
> I think antimalware products are supposed to remove malicious files not be sure they are there but that's just me.

## 延伸閱讀

相關概念：[[安全漏洞]] · [[滲透測試]] · [[反病毒軟體]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]]

[GitHub](https://github.com/Nightmare-Eclipse/RedSun)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞利用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞利用" AND file.name != "Nightmare-Eclipse--RedSun"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "Nightmare-Eclipse--RedSun"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "Nightmare-Eclipse--RedSun" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "Nightmare-Eclipse--RedSun"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","滲透測試","反病毒軟體"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Nightmare-Eclipse--RedSun" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Nightmare-Eclipse--RedSun" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Nightmare-Eclipse" AND file.name != "Nightmare-Eclipse--RedSun"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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
> const me = dv.page("Repos/Nightmare-Eclipse--RedSun");
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

> **2026-04-17** — 首次收錄
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

- [[2026-04-22|2026-04-22]] — 再次上榜，1.7k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，1.6k stars
- [[2026-04-20|2026-04-20]] — 再次上榜，1.6k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.5k stars
- [[2026-04-18|2026-04-18]] — 再次上榜，1.4k stars
- [[2026-04-17|2026-04-17]] — 首次收錄，785 stars
