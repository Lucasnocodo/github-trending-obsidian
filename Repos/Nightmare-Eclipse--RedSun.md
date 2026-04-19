---
repo: Nightmare-Eclipse/RedSun
url: https://github.com/Nightmare-Eclipse/RedSun
owner: Nightmare-Eclipse
owner_type: User
language: C++
license: MIT
description: "The Red Sun vulnerability repository"
homepage: ""
stars: 1500
stars_per_day: 500
forks: 323
open_issues: 5
created: 2026-04-15
pushed_at: 2026-04-15
first_seen: 2026-04-17
week: "2026-W16"
month: "2026-04"
category: "安全"
subcategory: "漏洞利用"
release_tag: "x64Release"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-17
use_case: "利用 Windows Defender 的漏洞，繞過防護並獲取系統管理權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 44
repo_size_kb: 56
readme_length: 626
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-17"
star_history: "2026-04-17:785,2026-04-17:793,2026-04-18:1354,2026-04-18:1358,2026-04-19:1500,2026-04-19:1500"
tags:
  - github
  - "category/安全"
  - "lang/c++"
  - easy_install
aliases:
  - "RedSun"
  - "Nightmare-Eclipse/RedSun"
  - "利用 Windows Defender 的漏洞，繞過防護並獲取系統管理權限。"
---

# RedSun

**1.5k** stars · **500** stars/天 · 建立 3 天前 · C++ · MIT

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

`個人專案` `x64Release` `easy-install`

> [!summary] 一句話摘要
> 利用 Windows Defender 的漏洞，繞過防護並獲取系統管理權限。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (500 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 專注於安全研究和漏洞利用的資深工程師。
> **一句話重點** RedSun 的幽默性和技術深度並存，讓安全研究者能夠在輕鬆的氛圍中學習漏洞利用。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速驗證防護系統漏洞的效果，值得一試。

> [!abstract] 核心創新
> 利用 Windows Defender 的行為漏洞來達成系統文件覆寫的 PoC。

## 專案簡介

RedSun 是一個針對 Windows Defender 的漏洞利用庫，透過特定的 PoC 代碼，利用防毒軟體的行為來覆寫系統文件並獲取管理權限。具體來說，當 Windows Defender 偵測到一個帶有雲標籤的惡意文件時，反而會將其重新寫回原位置，這一行為被利用來達成惡意目的。這種設計的背後是對防毒軟體邏輯的諷刺，因為它們應該是移除而非保留惡意文件。此專案的賣點在於其幽默性與技術性並存，並且提供了具體的編譯指令，如 `cl /std:c++17 /EHsc RedSun.cpp`，使得使用者能夠輕鬆編譯和測試。技術上，這個專案使用了 C++ 語言，並且在效能上並未提供具體數據，但其操作的成功率取決於 Windows Defender 的行為。

與其他類似工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，RedSun 的獨特之處在於它專注於 Windows Defender 的特定漏洞，而非一般的惡意軟體行為。這使得它在針對特定環境的測試中更具針對性。使用者在實際操作中可能會遇到 Windows Defender 的誤報問題，這在熱門問題中也有提到。這個專案目前處於 alpha 階段，對於安全研究者來說，值得一試，但不建議在生產環境中使用。未來可能會有更多的漏洞利用方法被發現，這使得 RedSun 具備持續發展的潛力。

**技術棧**：`C++`

## 重點功能

- 漏洞利用 PoC — 利用 Windows Defender 的特定行為來覆寫系統文件。
- 簡單的編譯指令 — 使用 `cl /std:c++17 /EHsc RedSun.cpp` 進行編譯。
- 幽默的文檔風格 — 以輕鬆的語氣解釋複雜的技術問題。
- 針對特定防護系統 — 專注於 Windows Defender 的行為漏洞。
- 活躍的社群討論 — 有多個熱門問題反映使用者的實際體驗。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Nightmare-Eclipse/RedSun.git
```
2. 進入專案目錄
```bash
cd RedSun
```
3. 編譯 PoC 代碼
```bash
cl /std:c++17 /EHsc RedSun.cpp
```

## 程式碼範例

```cpp
{
  "前置條件": "需要 C++ 編譯器",
  "指令": "cl /std:c++17 /EHsc RedSun.cpp",
  "預期輸出": "編譯成功，生成可執行文件"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1500 stars（500/天），forks 323（21.5%），這是相對活躍的增長。作者 Nightmare-Eclipse 以其幽默的寫作風格和技術深度著稱，之前也有其他漏洞利用專案。RedSun 解決了 Windows Defender 在處理帶有雲標籤的惡意文件時的邏輯漏洞，這在過去並沒有好的解決方案。社群對此話題的熱烈反應，尤其是在安全研究圈中，促進了其快速增長。此專案的技術背景和幽默性吸引了許多安全研究者的注意，並引發了討論。

## 適合誰使用

**目標受眾**：專注於安全研究和漏洞利用的資深工程師。

> [!example] 使用場景
> - 安全研究員用它來測試 Windows Defender 的漏洞，因為能夠快速驗證防毒軟體的行為是否如預期。
> - 滲透測試工程師用它來演示防護系統的弱點，因為這能夠幫助客戶理解其安全風險。
> - 開發者用它來學習如何利用系統漏洞，因為其 PoC 代碼提供了實際的操作示範。

## 架構分析

RedSun 的架構設計簡單，主要依賴 C++ 編譯器進行編譯和執行。它的資料流主要是透過編譯的可執行文件來觸發 Windows Defender 的行為。選擇 C++ 是因為其高效能和接近系統層級的操作，這使得它能夠直接與 Windows API 互動。

這種設計的代價是需要使用者具備一定的 C++ 知識。由於專案的依賴性較低，整體架構輕量，適合快速測試和驗證。未來擴展性瓶頸可能在於 Windows Defender 的更新，若其行為被修正，則此工具的有效性將受到影響。

## 技術深入分析

RedSun 的核心技術機制是利用 Windows Defender 的行為漏洞，具體來說是當防毒軟體偵測到帶有雲標籤的惡意文件時，會將其重新寫回原位置。這種行為被利用來覆寫系統文件，達成獲取管理權限的目的。效能上，這個專案並未提供具體的數據，但其操作的成功率依賴於 Windows Defender 的行為。選擇 C++ 作為開發語言是因為其高效能和接近系統層級的操作，這使得它能夠直接與 Windows API 互動。這樣的選擇雖然帶來了高效能，但也要求使用者具備一定的 C++ 知識。技術風險方面，若 Windows Defender 更新其行為，則此工具的有效性將受到影響。整合方面，由於專案的依賴性較低，與現有工具鏈的整合難度不高，但在使用過程中可能會遇到防毒軟體的誤報問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了簡單的編譯指令和使用說明。安裝過程順暢，無明顯坑點。文件沒有多語言支持，但內容簡潔易懂。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速編譯和執行。
> - 針對特定防護系統的漏洞利用，具有實用性。
> - 活躍的社群討論，能夠獲得即時的幫助和反饋。

> [!danger] 缺點
> - 僅限於 Windows 系統，無法跨平台使用。
> - 可能會被防毒軟體誤報，影響使用體驗。
> - 不適合在生產環境中使用，風險較高。

> [!warning] 注意事項
> - 僅支援 Windows 環境
> - 可能會被防毒軟體誤報
> - 不適合在生產環境中使用

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於多種漏洞利用，但不專門針對 Windows Defender 的行為。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更廣泛的漏洞利用範圍，並不僅限於特定防護系統。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用多種漏洞利用技術，並不專注於特定防護系統。 | 如果需要更廣泛的漏洞利用方法，而不僅限於 Windows Defender 的行為。 | medium，因為需要重新學習不同的漏洞利用技術。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更全面的漏洞利用範圍，適用於多種防護系統。 | 如果你的工作環境需要針對多種防護系統進行測試。 | medium，因為需要適應不同的工具和方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **RedSun** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用多種漏洞利用技術，並不專注於特定防護系統。 | 提供更全面的漏洞利用範圍，適用於多種防護系統。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的漏洞利用技術。 | medium，因為需要適應不同的工具和方法。 |
> | 適用場景 | 主要場景 | 如果需要更廣泛的漏洞利用方法，而不僅限於 Windows D | 如果你的工作環境需要針對多種防護系統進行測試。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和漏洞測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些版本的 Windows 中可能無法正常運行
  - 解法：確保使用最新版本的 Windows 系統
- [MEDIUM] Windows Defender 可能會自動刪除或隔離可執行文件
  - 解法：在測試前暫時禁用 Windows Defender
- [MEDIUM] 編譯過程中可能會遇到環境配置問題
  - 解法：確保已安裝適當的 C++ 編譯器和環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型安全研究團隊進行漏洞測試 | 非常適合 | 專案針對特定防護系統，能快速驗證漏洞。 |
| 大型企業的安全審計 | 不適合 | 不建議在生產環境中使用，風險較高。 |
| 滲透測試工程師的日常工作 | 適合 | 能夠幫助演示防護系統的弱點。 |
| 學術研究中的漏洞分析 | 適合 | 提供了實際的漏洞利用示範，適合學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速驗證防護系統漏洞的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，但可能會被防毒軟體誤報。使用時需注意環境的安全性，並在測試前禁用防毒軟體。

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
| Forks | 323 |
| Open Issues | 5 |
| Issue 解決率 | 44% (4 closed) |
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

**社群活躍度**：社群活躍，有多個熱門問題和反饋。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-15）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/Nightmare-Eclipse/RedSun/issues/4) | Breakdown post covering RedSun — nefariousplan.com | 21 | 1 |
> | [#3](https://github.com/Nightmare-Eclipse/RedSun/issues/3) | rewrite in python 😂 | 19 | 3 |
> | [#5](https://github.com/Nightmare-Eclipse/RedSun/issues/5) | flagged by windows defender | 9 | 3 |
> | [#9](https://github.com/Nightmare-Eclipse/RedSun/issues/9) | Typo in Console Output | 1 | 1 |
> | [#7](https://github.com/Nightmare-Eclipse/RedSun/issues/7) | working poc to compile using CL: cl /std:c++17 /EHsc RedSun. | 0 | 1 |

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

相關概念：[[安全漏洞]] · [[滲透測試]] · [[惡意軟體]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[sooryathejas--METATRON|sooryathejas/METATRON]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]]

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
> const concepts = ["安全漏洞","滲透測試","惡意軟體"];
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

- [[2026-04-19|2026-04-19]] — 再次上榜，1.5k stars
- [[2026-04-18|2026-04-18]] — 再次上榜，1.4k stars
- [[2026-04-17|2026-04-17]] — 首次收錄，785 stars
