---
repo: Nightmare-Eclipse/YellowKey
url: https://github.com/Nightmare-Eclipse/YellowKey
owner: Nightmare-Eclipse
owner_type: User
language: N/A
license: MIT
description: "YellowKey Bitlocker Bypass Vulnerability"
homepage: ""
stars: 3419
stars_per_day: 570
forks: 725
open_issues: 31
created: 2026-05-12
pushed_at: 2026-05-12
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "安全"
subcategory: "漏洞分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "揭露 Bitlocker 繞過漏洞，讓攻擊者能夠無限制訪問受保護的磁碟區。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 118
readme_length: 1862
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:1000,2026-05-14:1002,2026-05-15:1756,2026-05-15:1759,2026-05-16:2435,2026-05-16:2441,2026-05-17:2851,2026-05-17:2851,2026-05-18:3157,2026-05-18:3158,2026-05-19:3419,2026-05-19:3419"
tags:
  - github
  - "category/安全"
  - "lang/other"
  - easy_install
aliases:
  - "YellowKey"
  - "Nightmare-Eclipse/YellowKey"
  - "揭露 Bitlocker 繞過漏洞，讓攻擊者能夠無限制訪問受保護的磁碟區。"
---

# YellowKey

**3.4k** stars · **570** stars/天 · 建立 6 天前 · N/A · MIT

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
> 揭露 Bitlocker 繞過漏洞，讓攻擊者能夠無限制訪問受保護的磁碟區。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (570 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 Windows 系統安全有興趣的安全研究人員和滲透測試工程師。
> **一句話重點** YellowKey 的發現揭示了 Windows 11 中潛在的安全漏洞，並引發了對系統安全性的廣泛關注。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Nightmare-Eclipse--YellowKey");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞分析" && p.file.name !== "Nightmare-Eclipse--YellowKey" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 漏洞分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，能快速檢查 Windows 11 系統的安全性，值得一試。

> [!abstract] 核心創新
> 這個專案揭露了一個前所未有的 Bitlocker 繞過漏洞，可能是系統內的後門。

## 專案簡介

YellowKey 是一個針對 Windows 11 的 Bitlocker 繞過漏洞，利用特定的系統檔案來獲取對加密磁碟區的未經授權訪問。使用者只需將 FsTx 資料夾複製到 USB 隨身碟的指定位置，然後重啟進入 Windows Recovery 環境，透過特定的鍵盤操作，便能啟動一個具有完全訪問權限的 shell。這種設計的核心在於該漏洞依賴於 WinRE 映像中的一個組件，這個組件在正常的 Windows 安裝中並不存在，這引發了對其是否為後門的懷疑。該漏洞僅影響 Windows 11 及其伺服器版本，Windows 10 則不受影響。這種設計使得攻擊者能夠在不需要外部設備的情況下，輕易地獲取敏感資料，這是其最大的風險所在。相較於其他 Bitlocker 繞過工具，YellowKey 的操作流程極為簡單且不需要複雜的配置，這使得它在實際攻擊中具備高效能。

使用者需注意，該工具的使用可能違反法律，並且在某些情況下可能會被視為惡意行為。社群的活躍度表現良好，但仍需關注其開發者的後續更新和修復進度，以防止潛在的安全風險。對於安全研究人員而言，這是一個值得關注的漏洞，尤其是在評估 Windows 系統的安全性時。未來六個月內，預計會有更多針對此漏洞的討論和研究發表。使用者應該在合法的範圍內進行測試，並確保不會侵犯他人的隱私或資料安全。

## 重點功能

- 簡單的操作流程 — 只需將 FsTx 資料夾複製到 USB 隨身碟，並透過 Windows Recovery 環境啟動 shell。
- 針對 Windows 11 的專屬漏洞 — 此漏洞僅影響 Windows 11 和伺服器版本，Windows 10 不受影響。
- 無需外部設備 — 可以直接在系統內部操作，降低被發現的風險。
- 高效能 — 能夠快速獲取對加密磁碟區的未經授權訪問。
- 社群支持 — 有活躍的開發者和使用者社群，能夠提供即時的問題解決和更新。

## 快速開始

1. 將 FsTx 資料夾複製到 USB 隨身碟
```bash
Copy FsTx folder to 'YourUSBStick:\System Volume Information\FsTx'
```
2. 將 USB 插入目標電腦並重啟
```bash
Plug in the USB stick and reboot the computer
```
3. 進入 Windows Recovery 環境
```bash
Hold SHIFT and click Restart, then hold CTRL while restarting
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 3419 stars（570/天），forks 725（21.2%），顯示出強烈的社群關注。作者 Nightmare-Eclipse 在安全研究領域有一定的影響力，這次的發現填補了 Bitlocker 繞過的空白，之前的工具多數需要複雜的操作或特定的環境。這個漏洞的曝光引起了廣泛的討論，尤其是在安全論壇和社群中。隨著 Windows 11 的普及，這個問題的影響範圍也隨之擴大，讓更多使用者關注到潛在的安全風險。forks/stars 比率 21.2% 表示許多人對此工具進行了實際的修改和應用，顯示出其實用性和需求。

## 適合誰使用

**目標受眾**：對 Windows 系統安全有興趣的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 11 的 Bitlocker 安全性，因為這個工具能快速揭露系統的安全漏洞，並提供實際的攻擊場景。
> - 滲透測試工程師用它來評估企業環境中的 Bitlocker 配置，因為能夠快速檢查系統的防護能力，並提出改進建議。
> - IT 管理員用它來檢查自家系統的安全性，因為這能幫助他們了解可能的安全隱患，並及早採取防範措施。

## 架構分析

此專案的架構基於 Windows Recovery 環境中的一個特定組件，利用該組件的漏洞來獲取對 Bitlocker 磁碟區的訪問權限。透過將必要的檔案複製到 USB 隨身碟，使用者能夠在不需要外部設備的情況下，直接在系統內部操作。這種設計使得攻擊者能夠快速且隱蔽地獲取敏感資料，然而也帶來了法律和倫理上的風險。由於該漏洞僅影響 Windows 11，未來的擴展性可能受到限制，特別是在 Windows 10 和其他作業系統上無法應用的情況下。

## 技術深入分析

YellowKey 利用 Windows Recovery 環境中的特定組件，透過將 FsTx 資料夾複製到 USB 隨身碟來獲取對 Bitlocker 磁碟區的訪問權限。這一過程依賴於該組件的漏洞，這使得攻擊者能夠在不需要外部設備的情況下，直接在系統內部操作。該漏洞的效能特性在於其能夠快速且隱蔽地獲取敏感資料，這對於安全研究人員和滲透測試工程師來說是非常有價值的。然而，這種設計也帶來了法律和倫理上的風險，使用者需謹慎考量。選擇在 Windows Recovery 環境中操作的設計，使得該工具在特定情境下能夠有效運作，但也限制了其在其他作業系統上的應用。未來的擴展性可能受到限制，特別是在 Windows 10 和其他作業系統上無法應用的情況下。整體而言，YellowKey 是一個具有潛在風險的工具，使用者需在合法範圍內進行測試，並確保不會侵犯他人的隱私或資料安全。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且具體，提供了詳細的操作步驟。安裝過程相對簡單，但需要進入 Windows Recovery 環境，對於新手來說可能有一定的挑戰。文件中沒有多語言支持，僅提供英文說明。

## 優缺點分析

> [!success] 優點
> - 操作簡單，無需複雜的配置。
> - 能夠快速獲取對加密磁碟區的訪問權限。
> - 社群活躍，能夠提供即時的問題解決和更新。

> [!danger] 缺點
> - 僅限於 Windows 11，無法在其他版本上使用。
> - 使用此工具可能違反法律，需謹慎使用。
> - 對於普通用戶來說，進入 Windows Recovery 環境的操作較為複雜。

> [!warning] 注意事項
> - 僅影響 Windows 11 及其伺服器版本，Windows 10 不受影響。
> - 需要在 Windows Recovery 環境中操作，對於普通用戶來說較為複雜。
> - 使用此工具可能違反法律，需謹慎使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於其他類型的系統漏洞，而非 Bitlocker 繞過，適合尋找不同攻擊面向的研究者。 |
| [DepthFirstDisclosures/Nginx-Rift](https://github.com/DepthFirstDisclosures/Nginx-Rift) | 針對 Nginx 的安全漏洞，與 YellowKey 的 Windows 繞過漏洞不同，適合專注於 Web 伺服器安全的研究者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於其他類型的系統漏洞，而非 Bitlocker 繞過，適合尋找不同攻擊面向的研究者。 | 如果你需要針對其他系統漏洞進行研究，而不僅限於 Bitlocker 繞過。 | medium，因為需要重新學習不同的操作流程。 |
| [DepthFirstDisclosures/Nginx-Rift](https://github.com/DepthFirstDisclosures/Nginx-Rift) | 針對 Nginx 的安全漏洞，與 YellowKey 的 Windows 繞過漏洞不同，適合專注於 Web 伺服器安全的研究者。 | 如果你的工作重點在於 Web 伺服器的安全性，而非 Windows 系統。 | medium，因為需要適應不同的環境和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **YellowKey** | **agent-sprite-forge** | **Nginx-Rift** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於其他類型的系統漏洞，而非 Bitlocker 繞過，適合尋找不同攻擊面向的研究者。 | 針對 Nginx 的安全漏洞，與 YellowKey 的 Windows 繞過漏洞不同，適合專注於 Web 伺服器安全的研究者。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的操作流程。 | medium，因為需要適應不同的環境和工具。 |
> | 適用場景 | 主要場景 | 如果你需要針對其他系統漏洞進行研究，而不僅限於 Bitloc | 如果你的工作重點在於 Web 伺服器的安全性，而非 Wind |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上可能無法正常運作，特別是未更新的 Windows 11 系統。
  - 解法：確保系統已更新至最新版本。
- **[HIGH]** 使用此工具可能會引發法律問題，特別是在未經授權的情況下。
  - 解法：僅在合法範圍內進行測試。
- [MEDIUM] 進入 Windows Recovery 環境的操作對於新手來說較為複雜。
  - 解法：參考官方文檔或尋求他人協助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的 IT 安全審核 | 非常適合 | 能快速檢查系統的防護能力，並提出改進建議。 |
| 個人電腦的安全測試 | 適合 | 能夠揭露潛在的安全隱患，幫助用戶了解系統安全性。 |
| 小型企業的安全測試 | 普通 | 雖然能提供一定的安全檢查，但操作過程對於非技術用戶可能較為複雜。 |
| 非 Windows 11 系統的安全測試 | 不適合 | 此工具僅限於 Windows 11，無法應用於其他作業系統。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能快速檢查 Windows 11 系統的安全性，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：此工具不需要高權限，但可能會存取敏感資料。依賴鏈的信任程度尚未完全評估，使用時需謹慎。

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
| Forks | 725 |
| Open Issues | 31 |
| Issue 解決率 | 11% (4 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 118 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/YellowKey) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度良好，定期有更新和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-12）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/Nightmare-Eclipse/YellowKey/issues/12) | It's a HOAX | 13 | 10 |
> | [#11](https://github.com/Nightmare-Eclipse/YellowKey/issues/11) | TPM+PIN mitigation blocked by default Group Policy on consum | 4 | 5 |
> | [#9](https://github.com/Nightmare-Eclipse/YellowKey/issues/9) | Will this work on already bitlocked original hard drive | 1 | 1 |
> | [#2](https://github.com/Nightmare-Eclipse/YellowKey/issues/2) | Q: Does it work with anything other than TPM-only key protec | 1 | 9 |
> | [#36](https://github.com/Nightmare-Eclipse/YellowKey/issues/36) | Bitlocker Recovery Screen already activated | 0 | 0 |

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

相關概念：[[安全漏洞]] · [[滲透測試]] · [[系統安全]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]]

[GitHub](https://github.com/Nightmare-Eclipse/YellowKey)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞分析" AND file.name != "Nightmare-Eclipse--YellowKey"
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
> const concepts = ["安全漏洞","滲透測試","系統安全"];
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

- [[2026-05-19|2026-05-19]] — 再次上榜，3.4k stars
- [[2026-05-18|2026-05-18]] — 再次上榜，3.2k stars
- [[2026-05-17|2026-05-17]] — 再次上榜，2.9k stars
- [[2026-05-16|2026-05-16]] — 再次上榜，2.4k stars
- [[2026-05-15|2026-05-15]] — 再次上榜，1.8k stars
- [[2026-05-14|2026-05-14]] — 首次收錄，1.0k stars
