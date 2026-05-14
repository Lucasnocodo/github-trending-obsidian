---
repo: Nightmare-Eclipse/YellowKey
url: https://github.com/Nightmare-Eclipse/YellowKey
owner: Nightmare-Eclipse
owner_type: User
language: N/A
license: MIT
description: "YellowKey Bitlocker Bypass Vulnerability"
homepage: ""
stars: 1002
stars_per_day: 1002
forks: 229
open_issues: 5
created: 2026-05-12
pushed_at: 2026-05-12
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "安全"
subcategory: "漏洞利用"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "利用 YellowKey 漏洞繞過 Bitlocker 加密保護。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-17"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 118
readme_length: 1862
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:1000,2026-05-14:1002"
tags:
  - github
  - "category/安全"
  - "lang/other"
  - easy_install
aliases:
  - "YellowKey"
  - "Nightmare-Eclipse/YellowKey"
  - "利用 YellowKey 漏洞繞過 Bitlocker 加密保護。"
---

# YellowKey

**1.0k** stars · **1.0k** stars/天 · 建立 1 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> 利用 YellowKey 漏洞繞過 Bitlocker 加密保護。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.0k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要評估 Windows Bitlocker 安全性且具備一定技術背景的安全專業人士。
> **一句話重點** YellowKey 漏洞的存在揭示了 Windows 系統在安全設計上的重大缺陷，特別是在處理加密保護時。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞利用" && p.file.name !== "Nightmare-Eclipse--YellowKey" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速評估 Bitlocker 安全性的工具，值得考慮。

> [!abstract] 核心創新
> 這個專案揭示了一個針對 Windows Bitlocker 的重大安全漏洞，可能是設計上的後門。

## 專案簡介

YellowKey 是一個針對 Windows Bitlocker 的安全漏洞，允許使用者繞過加密保護。使用者只需將特定的 FsTx 文件夾複製到 USB 隨身碟的系統卷資訊中，然後重啟進入 Windows Recovery Environment，便可獲得對 Bitlocker 保護磁碟的完全訪問權限。這個漏洞的設計似乎暗示著某種後門，因為相關組件僅存在於 WinRE 映像中，而在正常的 Windows 安裝中則缺乏這種功能。這種設計的原因尚不明確，可能是故意為之。此漏洞僅影響 Windows 11 和 Server 2022/2025，Windows 10 不受影響。使用者在實際操作中需注意，這個漏洞的利用過程相對簡單，但其潛在風險極高，因為它可能被用於未經授權的數據訪問。這個專案的賣點在於其簡易的利用方式和對 Bitlocker 的直接威脅。

技術上，這個漏洞的存在揭示了 Windows 系統在安全設計上的重大缺陷，特別是在處理加密保護時。與其他安全工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，YellowKey 專注於特定的 Bitlocker 繞過，而不是一般的安全檢測或防護。這使得它在特定情境下的威脅性更高，但也意味著使用者需具備一定的技術背景來進行操作。社群活躍度不高，目前僅有 5 個開放的問題，顯示出使用者在實際應用中可能遇到的困難和不確定性。這個專案的成熟度尚未確定，因為它剛剛建立，未來的發展方向仍需觀察。對於需要進行安全測試的專業人員來說，YellowKey 提供了一個有趣的工具，但在使用時必須謹慎考量其潛在的法律與道德風險。

## 重點功能

- Bitlocker 繞過 — 透過簡單的文件複製和重啟流程，獲得對加密磁碟的完全訪問權限。
- 無需外部設備 — 只需在系統內部操作，降低了利用的複雜性。
- 專注於 Windows 11 — 針對最新版本的 Windows 系統，顯示出其針對性。
- 簡易重現 — 提供清晰的步驟，讓使用者能快速重現漏洞。
- 社群互動 — 開放的問題和討論區域，讓使用者能分享經驗和解決方案。

## 快速開始

1. 複製 FsTx 文件夾
```bash
將 FsTx 複製到 "YourUSBStick:\System Volume Information\FsTx"
```
2. 插入 USB 隨身碟
```bash
將 USB 隨身碟插入目標 Windows 電腦
```
3. 重啟進入 Windows Recovery Environment
```bash
按住 SHIFT 並點擊重啟
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1002 stars（1002/天），forks 229（22.9%），這顯示出極高的興趣和關注。作者 Nightmare-Eclipse 似乎在安全領域有一定的影響力，這個專案解決了 Bitlocker 繞過的痛點，之前的工具無法提供這樣的簡易性和直接性。此漏洞的曝光引起了社群的廣泛討論，尤其是對於安全性和隱私的關注。技術生態中，Windows 系統的安全性問題一直是熱門話題，這使得相關工具的需求持續上升。高達 22.9% 的 forks/stars 比率顯示許多人在實際修改和使用這個工具，反映出其實用性和潛在威脅。

## 適合誰使用

**目標受眾**：需要評估 Windows Bitlocker 安全性且具備一定技術背景的安全專業人士。

> [!example] 使用場景
> - 安全研究員用它來測試 Bitlocker 的安全性，因為這能快速驗證加密的有效性和潛在漏洞。
> - 滲透測試者用它來評估企業環境中的資料保護措施，因為這能揭示加密系統的弱點。
> - IT 支援人員用它來檢查和修復被鎖定的 Bitlocker 磁碟，因為這能快速恢復對資料的訪問。

## 架構分析

這個專案的架構相對簡單，主要依賴於將特定文件複製到 USB 隨身碟中，然後透過 Windows Recovery Environment 進行操作。這種設計使得利用過程不需要複雜的配置，但也意味著使用者必須具備一定的技術知識來執行。資料流方面，使用者需將文件放置在特定位置，然後透過重啟進入特定環境來觸發漏洞。這種方法的優勢在於其簡易性，但也可能帶來安全風險，因為不當使用可能導致資料洩露或法律問題。擴展性方面，這個工具的使用範圍相對有限，主要針對特定的 Windows 版本和環境。

## 技術深入分析

YellowKey 利用了一個特定的漏洞，允許使用者在 Windows Recovery Environment 中獲得對 Bitlocker 磁碟的完全訪問權限。這個漏洞的核心在於特定組件的存在，該組件僅在 WinRE 中可用，而在正常的 Windows 環境中則缺乏這種功能。這種設計的背後可能隱含著安全性考量，但目前尚無法確定其意圖。從效能上來看，這個漏洞的利用過程相對簡單，並不需要大量資源，但其潛在風險卻極高，因為它可能被用於未經授權的數據訪問。設計上，選擇將漏洞利用過程簡化，使得更多使用者能夠輕鬆重現，但這也意味著安全性可能受到威脅。技術風險方面，這個漏洞的存在可能在未來的 Windows 更新中被修補，導致目前的利用方式失效。整合方面，這個工具的使用與主流安全工具的整合度不高，因為它主要針對特定的漏洞，而不是一般的安全檢測。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的步驟和操作說明，讓使用者能夠快速上手。安裝過程相對簡單，無需複雜的配置。文件中未提供多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 簡單易用，能快速獲得對 Bitlocker 磁碟的訪問權限。
> - 不需要額外的硬體設備，降低了使用門檻。
> - 針對最新的 Windows 版本，顯示出其時效性。

> [!danger] 缺點
> - 僅限於特定的 Windows 版本，使用範圍有限。
> - 可能違反法律和道德規範，需謹慎使用。
> - 社群活躍度不高，問題解決率低。

> [!warning] 注意事項
> - 僅影響 Windows 11 和 Server 2022/2025，Windows 10 不受影響。
> - 需要一定的技術背景來執行漏洞利用過程。
> - 可能違反法律和道德規範，使用時需謹慎。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於更廣泛的安全測試，而 YellowKey 專注於特定的 Bitlocker 繞過。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一般的安全檢測工具，而 YellowKey 針對特定漏洞進行繞過。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於更廣泛的安全測試，而 YellowKey 專注於特定的 Bitlocker 繞過。 | 如果需要進行全面的安全測試，而不僅僅是針對 Bitlocker 的繞過。 | medium，因為需要重新學習不同的工具和流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一般的安全檢測工具，而 YellowKey 針對特定漏洞進行繞過。 | 如果需要更全面的安全檢測，而不僅僅是針對 Bitlocker 的漏洞利用。 | medium，因為需要適應不同的操作方式和工具特性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **YellowKey** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於更廣泛的安全測試，而 YellowKey 專注於特定的 Bitlocker 繞過。 | 提供一般的安全檢測工具，而 YellowKey 針對特定漏洞進行繞過。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的工具和流程。 | medium，因為需要適應不同的操作方式和工具特性。 |
> | 適用場景 | 主要場景 | 如果需要進行全面的安全測試，而不僅僅是針對 Bitlocke | 如果需要更全面的安全檢測，而不僅僅是針對 Bitlocker |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上可能無法重現漏洞，特別是非標準的 Windows 安裝。
  - 解法：確保使用標準的 Windows 11 安裝，並遵循所有步驟。
- **[HIGH]** 使用過程中可能會導致資料損失或系統不穩定。
  - 解法：在使用前備份重要資料。
- [MEDIUM] 社群支持有限，問題解決速度慢。
  - 解法：尋找其他資源或社群進行協助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 企業內部安全測試團隊 | 非常適合 | 能快速評估 Bitlocker 的安全性和潛在漏洞。 |
| 個人安全研究者 | 適合 | 提供簡單的工具來測試加密保護的有效性。 |
| 一般使用者 | 不適合 | 缺乏必要的技術背景來安全使用此工具。 |
| 法務部門進行資料保護合規性檢查 | 普通 | 雖然能提供一些見解，但法律風險需謹慎考量。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速評估 Bitlocker 安全性的工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 此工具本身不需要高權限，但其使用過程可能涉及敏感資料的訪問，需謹慎操作。依賴鏈的信任程度尚不明確，使用時需注意潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

YellowKey 主要與 Windows 系統環境整合，特別是 Windows Recovery Environment。在一個標準的 Windows 11 環境中，使用者可以輕鬆地將其與其他安全測試工具結合使用。整合過程中，使用者需確保遵循正確的步驟來避免系統不穩定。與主流安全工具的相容性較低，因為它專注於特定的漏洞而非一般的安全檢測。常見的整合問題包括需要特定的 Windows 環境來重現漏洞，這可能會限制其使用範圍。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 YellowKey 出現之前，Bitlocker 的繞過主要依賴於複雜的技術手段和工具，這使得許多安全測試者無法輕易進行測試。隨著 Windows 系統的安全性需求上升，這個漏洞的發現顯示出在加密保護設計上的重大缺陷。這個工具的出現代表了對 Windows 系統安全性的新挑戰，未來可能會引發更多的安全研究和討論。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
| Forks | 229 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 118 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/YellowKey) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度不高，目前僅有 5 個開放的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-12）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/Nightmare-Eclipse/YellowKey/issues/5) | Will this work on a bitlockered usb drive? | 0 | 0 |
> | [#4](https://github.com/Nightmare-Eclipse/YellowKey/issues/4) | Mitigation | 0 | 13 |
> | [#3](https://github.com/Nightmare-Eclipse/YellowKey/issues/3) | Blog Post link | 0 | 1 |
> | [#2](https://github.com/Nightmare-Eclipse/YellowKey/issues/2) | Q: Does it work with anything other than TPM-only key protec | 0 | 5 |
> | [#1](https://github.com/Nightmare-Eclipse/YellowKey/issues/1) | Not work usually | 0 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # YellowKey
> YellowKey Bitlocker Bypass Vulnerability
> 
> Been a while since I saw a bitlocker bypass around, my turn.
> 
> This is one of the most insane discoveries I ever found, almost feels like **backdoor** but what do you know, maybe I'm just insane.
> 
> How to reproduce : 
> 1. Copy the FsTx folder to "**YourUSBStick:**\System Volume Information\FsTx" as is and make sure to use a filesystem that's compatible with Windows (NTFS is preferable but I think FAT32/exFAT should work as well). Funny thing is, the vulnerability is extremely convenient, you don't even need to plug an external storage device, you can just pull out the disk, copy the files in the EFI partition, put it back and it will still work. That's how bad it is.
> 2. Plug the USB stick in your target windows computer with bitlocker protection turned on.
> 3. Reboot to Windows Recovery Environment Agent (you can do that by holding SHIFT and clicking on the restart button using your mouse)
> 4. Once you click on the restart button, lift your finger off the SHIFT key and hold CRTL and do NOT lift your finger off it.
> 5. If you did everything properly, a shell will spawn with unrestricted access to the bitlocker protected volume.
> 
> Now why would I say this is a **backdoor** ? The component that is responsible for this bug is not present anywhere (even in the internet) except inside WinRE image and what makes it raise suspicions is the fact that the exact same component is also present with the exact same name in a normal windows installation but without the functionalities that trigger the bitlocker bypass issue. Why ? I just can't come up with an explanation beside the fact that this was intentional. Also for whatever reason, only windows 11 (+Server 2022/2025) are affect, windows 10 is not.
> 
> A huge thanks to MORSE, MSTIC and Microsoft GHOST for making this public disclosure possible ;)

## 延伸閱讀

相關概念：[[安全漏洞]] · [[滲透測試]] · [[資料保護]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]]

[GitHub](https://github.com/Nightmare-Eclipse/YellowKey)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞利用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞利用" AND file.name != "Nightmare-Eclipse--YellowKey"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "Nightmare-Eclipse--YellowKey"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Nightmare-Eclipse--YellowKey" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "Nightmare-Eclipse--YellowKey"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","滲透測試","資料保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Nightmare-Eclipse--YellowKey" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Nightmare-Eclipse--YellowKey" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Nightmare-Eclipse" AND file.name != "Nightmare-Eclipse--YellowKey"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
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

> **2026-05-14** — 首次收錄
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

- [[2026-05-14|2026-05-14]] — 首次收錄，1.0k stars
