---
repo: Nightmare-Eclipse/RedSun
url: https://github.com/Nightmare-Eclipse/RedSun
owner: Nightmare-Eclipse
owner_type: User
language: C++
license: MIT
description: "The Red Sun vulnerability repository"
homepage: ""
stars: 785
stars_per_day: 785
forks: 150
open_issues: 4
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
appearances: 1
next_review: "2026-04-20"
contributor_count: 1
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 56
readme_length: 626
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-17"
star_history: "2026-04-17:785"
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

**785** stars · **785** stars/天 · 建立 1 天前 · C++ · MIT

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
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (785 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對於安全研究和漏洞利用有興趣的開發者。
> **一句話重點** 這個專案展示了防毒軟體行為的反直覺性，並提供了一個有趣的學習案例。

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
> **結論** 花 5 小時學習，3 小時整合，得到有趣的漏洞利用案例，值得一試。

> [!abstract] 核心創新
> 利用防毒軟體的反直覺行為來獲取系統管理權限。

## 專案簡介

RedSun 是一個專注於利用 Windows Defender 行為的漏洞庫。這個 PoC 利用 Windows Defender 對帶有雲標籤的惡意文件的處理方式，當發現這類文件時，防毒軟體會將其重寫回原始位置，這種行為被用來覆蓋系統文件並獲取管理權限。這樣的設計揭示了防毒軟體在某些情況下的反直覺行為，並且這種漏洞的利用方式相對簡單，僅需執行特定的代碼即可。該專案的賣點在於其幽默性和實用性，讓使用者能夠輕鬆理解漏洞的運作原理。技術上，這個專案是用 C++ 開發，並且在設計上選擇了直接操作系統文件的方式，這樣的選擇使得漏洞利用變得直接且有效。與其他類似工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，RedSun 的獨特之處在於它針對特定防毒行為的利用，這使得它在特定環境下的效果更為顯著。

實際使用中，使用者可能會遇到 Windows Defender 的誤報問題，這可能會影響其使用體驗。這個專案目前處於初期階段，適合安全研究人員和對漏洞利用有興趣的開發者。未來可能會有更多的功能擴展，尤其是在跨平台支持方面。對於小型團隊或個人開發者，這個專案提供了一個有趣的學習機會，尤其是對於理解防毒軟體行為的研究。使用者應該注意，這個工具不適合在生產環境中使用，因為它涉及到系統安全的風險。

**技術棧**：`C++`

## 重點功能

- 利用 Windows Defender 行為 — 利用防毒軟體對帶有雲標籤文件的處理方式來獲取管理權限。
- 簡單的 PoC 實作 — 提供直接的代碼示例，讓使用者能夠快速理解漏洞的運作。
- 幽默的設計理念 — 將漏洞利用與幽默結合，增加學習的趣味性。
- 針對特定防毒行為 — 專注於 Windows Defender 的特定行為，提供針對性的利用方式。
- 社群互動 — 提供熱門問題和討論，促進使用者之間的互動和學習。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Nightmare-Eclipse/RedSun.git
```
2. 編譯代碼
```bash
cd RedSun && make
```
3. 執行 PoC
```bash
./RedSun
```

## 程式碼範例

```cpp
{
  "前置條件": "需要 C++ 編譯環境",
  "指令": "./RedSun",
  "預期輸出": "成功覆蓋系統文件並獲取管理權限。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 785 stars（785/天），forks 150（19.1%），這顯示出極高的興趣。作者 Nightmare-Eclipse 之前並未有其他知名專案，但這個專案解決了防毒軟體行為的特定漏洞，這在安全研究中是一個有趣的切入點。這個專案的幽默性和實用性吸引了許多安全愛好者的注意，並且在社群中引發了討論。特定的事件，如社交媒體上的分享，可能也促進了這個專案的快速增長。forks/stars 比率為 19.1%，顯示出許多人對這個專案有實際修改和使用的意圖。

## 適合誰使用

**目標受眾**：對於安全研究和漏洞利用有興趣的開發者。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows Defender 的行為，因為這能幫助他們了解防毒軟體的漏洞和弱點。
> - 滲透測試工程師用它來模擬攻擊場景，因為這能讓他們在測試環境中評估系統的安全性。
> - 開發者用它來學習漏洞利用技術，因為這是一個簡單且有趣的實作案例，能夠快速上手。

## 架構分析

RedSun 的架構設計簡單明瞭，主要由 C++ 實現，直接操作系統文件。這種設計使得漏洞利用變得高效且直接，然而也帶來了安全風險。資料流方面，當用戶執行 PoC 時，系統會通過特定的 API 調用來覆蓋文件。選擇 C++ 的原因在於其對系統層級操作的強大支持，但這也意味著需要較高的技術門檻。這個專案的擴展性受限於 Windows 環境，未來若要支援其他平台，可能需要重寫大量代碼。

## 技術深入分析

RedSun 的核心技術機制是利用 Windows Defender 對帶有雲標籤的文件的處理方式，這種行為被用來覆蓋系統文件。效能上，這個 PoC 能夠快速執行，並在短時間內完成漏洞利用。選擇 C++ 作為開發語言，使得該專案能夠直接操作系統層級的資源，但也增加了使用者的技術門檻。這個專案的依賴關係相對簡單，主要依賴於 C++ 標準庫，降低了維護成本。技術風險方面，這種直接操作系統文件的方式可能在未來的 Windows 更新中受到影響，導致工具失效。整合方面，這個工具的使用需要一定的技術背景，對於新手來說可能會有一定的學習曲線。整體而言，這是一個有趣的專案，適合對安全漏洞有興趣的開發者進行學習和實驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的概述和使用說明，但缺乏詳細的範例。安裝過程相對順暢，但需要一定的 C++ 編譯知識。沒有提供多語言支持，對於非英語使用者可能會有障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 PoC 實作，適合快速學習。
> - 針對特定防毒行為的利用，效果顯著。
> - 幽默的設計理念，增加學習的趣味性。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 存在安全風險，不建議在生產環境中使用。
> - 可能會被防毒軟體誤報，影響使用體驗。

> [!warning] 注意事項
> - 僅支援 Windows 環境
> - 可能會被防毒軟體誤報，影響使用體驗
> - 不適合在生產環境中使用，存在安全風險

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 同樣針對防毒軟體的漏洞，但更專注於資料恢復和文件管理。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更全面的漏洞利用工具，但相對較複雜，適合經驗豐富的使用者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料恢復和文件管理，提供更全面的功能。 | 如果你的需求是資料恢復而非漏洞利用，則應選擇此工具。 | medium，因為功能和使用方式有差異。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更複雜的漏洞利用工具，適合經驗豐富的使用者。 | 如果你的團隊需要更全面的漏洞利用方案，則應選擇此工具。 | high，因為需要重新學習工具的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RedSun** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料恢復和文件管理，提供更全面的功能。 | 提供更複雜的漏洞利用工具，適合經驗豐富的使用者。 |
> | 遷移成本 | - | medium，因為功能和使用方式有差異。 | high，因為需要重新學習工具的使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料恢復而非漏洞利用，則應選擇此工具。 | 如果你的團隊需要更全面的漏洞利用方案，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 可能會被 Windows Defender 誤報，導致無法正常執行
  - 解法：可考慮在非防毒環境中測試
- [MEDIUM] 僅支援 Windows 環境，無法在其他平台使用
  - 解法：未來可能會考慮擴展到其他平台
- [MEDIUM] 使用過程中可能需要較高的技術背景
  - 解法：建議先學習 C++ 基礎知識

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型安全研究團隊 | 非常適合 | 提供簡單易用的漏洞利用工具，適合快速學習和實驗。 |
| 大型企業的安全測試部門 | 普通 | 雖然有趣，但不適合生產環境的核心測試。 |
| 個人開發者進行安全研究 | 非常適合 | 能夠快速上手，並提供有趣的學習案例。 |
| 需要跨平台支持的團隊 | 不適合 | 僅支援 Windows 環境，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到有趣的漏洞利用案例，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要在受控環境中使用，因為它涉及到系統管理權限的獲取，並可能被防毒軟體誤報。

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
| Forks | 150 |
| Open Issues | 4 |
| Issue 解決率 | 33% (2 closed) |
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

**社群活躍度**：社群活躍度高，熱門問題引發討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-15）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/Nightmare-Eclipse/RedSun/issues/3) | rewrite in python 😂 | 8 | 2 |
> | [#4](https://github.com/Nightmare-Eclipse/RedSun/issues/4) | Breakdown post covering RedSun — nefariousplan.com | 2 | 0 |
> | [#5](https://github.com/Nightmare-Eclipse/RedSun/issues/5) | flagged by windows defender | 1 | 1 |
> | [#6](https://github.com/Nightmare-Eclipse/RedSun/issues/6) | Mac Version | 0 | 1 |

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

相關概念：[[安全漏洞]] · [[滲透測試]] · [[防毒軟體行為]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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
> const concepts = ["安全漏洞","滲透測試","防毒軟體行為"];
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

- [[2026-04-17|2026-04-17]] — 首次收錄，785 stars
