---
repo: Nightmare-Eclipse/YellowKey
url: https://github.com/Nightmare-Eclipse/YellowKey
owner: Nightmare-Eclipse
owner_type: User
language: N/A
license: MIT
description: "YellowKey Bitlocker Bypass Vulnerability"
homepage: ""
stars: 3862
stars_per_day: 429
forks: 852
open_issues: 39
created: 2026-05-12
pushed_at: 2026-05-12
first_seen: 2026-05-14
week: "2026-W20"
month: "2026-05"
category: "安全"
subcategory: "漏洞利用"
release_tag: ""
install_complexity: "easy"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-14
use_case: "利用 YellowKey 漏洞繞過 Bitlocker 加密保護。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 9
repo_size_kb: 118
readme_length: 1862
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:1000,2026-05-14:1002,2026-05-15:1756,2026-05-15:1759,2026-05-16:2435,2026-05-16:2441,2026-05-17:2851,2026-05-17:2851,2026-05-18:3157,2026-05-18:3158,2026-05-19:3419,2026-05-19:3419,2026-05-20:3628,2026-05-21:3760,2026-05-22:3862"
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

**3.9k** stars · **429** stars/天 · 建立 9 天前 · N/A · MIT

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
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (429 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 Windows 安全性有深入興趣並希望了解漏洞利用的安全研究者。
> **一句話重點** YellowKey 漏洞的存在讓我們重新思考 Windows 11 的安全性，並引發了對於系統防護的廣泛討論。

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
> **結論** 花 2 小時學習，1 小時整合，得到快速的 Bitlocker 繞過效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案揭示了一個在 Windows 11 環境中存在的 Bitlocker 繞過漏洞，具有潛在的後門特徵。

## 專案簡介

YellowKey 是一個針對 Bitlocker 的繞過漏洞，允許攻擊者在 Windows 11 環境中獲得對加密磁碟的未經授權訪問。使用者只需將特定檔案複製到 USB 隨身碟，然後重啟到 Windows Recovery Environment (WinRE)，即可啟動一個具有完全訪問權限的 shell。這種方法的便利性在於，攻擊者甚至不需要外接儲存裝置，只需將檔案放置於 EFI 分區即可。這個漏洞的設計引發了對其是否為後門的懷疑，因為其關鍵組件僅存在於 WinRE 映像中，且在正常的 Windows 安裝中並不具備相同的功能。這使得其存在的原因變得不明，尤其是考慮到僅 Windows 11 和 Server 2022/2025 受到影響，而 Windows 10 則不受影響。這個專案的賣點在於其簡單的操作流程和高效的繞過能力，對於安全研究者和攻擊者來說都具有吸引力。

技術上，這個漏洞利用了 WinRE 的特定組件，並且不需要複雜的依賴或配置，這使得其在實驗和實際攻擊中都相對容易實現。與其他 Bitlocker 繞過工具相比，YellowKey 的獨特之處在於其不需要物理訪問設備的複雜操作，這使得其在某些情況下更具威脅性。使用者在實際操作中可能會遇到 Windows 11 的組策略限制，這可能會影響漏洞的利用效果。這個專案目前處於活躍開發中，社群對於其安全性和實用性持續關注，並且有一定的使用者基礎。對於希望深入了解 Windows 安全性和漏洞利用的開發者和研究者來說，YellowKey 是一個值得關注的專案。

## 重點功能

- 簡單的利用流程 — 只需將檔案複製到 USB 隨身碟並重啟即可獲得訪問權限。
- 無需外接儲存裝置 — 可直接在 EFI 分區操作，降低了使用門檻。
- 針對 Windows 11 的特定漏洞 — 僅影響 Windows 11 和 Server 2022/2025，提供針對性攻擊。
- 可疑的後門特徵 — 漏洞的關鍵組件僅存在於 WinRE，增加了其安全性風險。
- 活躍的社群討論 — 許多使用者在 GitHub 上討論漏洞的影響及解決方案。

## 快速開始

1. 將 FsTx 資料夾複製到 USB 隨身碟
```bash
Copy FsTx to YourUSBStick:\System Volume Information\FsTx
```
2. 將 USB 插入目標電腦並重啟
```bash
Reboot to Windows Recovery Environment
```
3. 啟動 shell 獲取訪問權限
```bash
Hold SHIFT + Restart, then hold CTRL
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 3862 stars（429/天），forks 852（22.1%），顯示出極高的關注度。作者 Nightmare-Eclipse 以發現此漏洞而聞名，這一發現填補了 Bitlocker 繞過的空白，特別是在 Windows 11 環境中。社群對於此漏洞的討論熱烈，特別是關於其是否為後門的爭議。這一漏洞的存在引發了對 Windows 安全性的重新評估，並促使 Microsoft 針對此漏洞進行 CVE 登記及修補措施。由於其簡單的利用方式和高效的繞過能力，這一專案迅速引起了安全研究者和攻擊者的注意。

## 適合誰使用

**目標受眾**：對 Windows 安全性有深入興趣並希望了解漏洞利用的安全研究者。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 11 環境的安全性，因為它提供了一個簡單的 Bitlocker 繞過方法，能夠快速驗證系統的防護能力。
> - 滲透測試工程師用它來評估客戶系統的漏洞，因為這個工具能在不需複雜配置的情況下，直接獲取加密磁碟的訪問權限。
> - 系統管理員用它來檢查自家系統的安全性，因為了解這個漏洞能幫助他們加強系統的防護措施，避免潛在的安全風險。

## 架構分析

這個專案的架構相對簡單，主要依賴於 Windows Recovery Environment 的特定組件。由於其利用方式不需要複雜的依賴或配置，這使得其在實驗和實際攻擊中都相對容易實現。資料流方面，攻擊者只需將檔案複製到 USB 隨身碟，然後重啟到 WinRE，這樣就能啟動一個具有完全訪問權限的 shell。

這樣的設計使得攻擊者能夠快速獲得訪問權限，但也使得其在安全性上存在風險。選擇這種方式的代價在於，雖然簡單易用，但也可能導致對系統的潛在威脅。擴展性方面，由於其依賴於 Windows 11 的特定組件，未來的 Windows 更新可能會影響其有效性。

## 技術深入分析

YellowKey 利用 Windows Recovery Environment 中的特定組件，這些組件在正常的 Windows 安裝中並不具備相同的功能。這種設計使得攻擊者能夠在不需複雜操作的情況下，快速獲得對加密磁碟的訪問權限。效能方面，這個漏洞的利用不需要高效能的硬體，因為其主要依賴於 Windows 的內部組件。設計取捨上，選擇這種簡單的利用方式雖然降低了使用門檻，但也增加了系統的潛在風險。技術風險方面，未來的 Windows 更新可能會對此漏洞進行修補，從而影響其有效性。整合分析方面，這個工具的使用不需要特別的環境配置，能夠與現有的 Windows 系統無縫整合，但在安全性上需要謹慎考量。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的操作步驟，並且有具體的範例。安裝過程相對順暢，使用者只需複製檔案並重啟即可。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 操作簡單，無需複雜配置即可使用。
> - 針對 Windows 11 的特定漏洞，具有針對性。
> - 活躍的社群討論，能夠快速獲得支持和解決方案。

> [!danger] 缺點
> - 僅限於 Windows 11 和 Server 2022/2025，適用範圍有限。
> - 可能受到組策略的限制，影響漏洞利用的效果。
> - 存在安全性風險，可能被視為後門。

> [!warning] 注意事項
> - 僅影響 Windows 11 和 Server 2022/2025，Windows 10 不受影響。
> - 可能受到組策略的限制，影響漏洞利用的效果。
> - 需要對 Windows Recovery Environment 有基本了解，否則操作可能失敗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於其他類型的安全漏洞，而 YellowKey 專注於 Bitlocker 繞過，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更全面的滲透測試工具，而 YellowKey 則是針對特定漏洞的專項工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| BitLocker Bypass Tool | 這個工具專注於 BitLocker 繞過，但其操作過程較為複雜，需要更多的配置和依賴。 | 如果你的團隊需要更全面的 BitLocker 繞過解決方案，並且能接受較高的操作複雜度。 | medium，因為需要重新學習工具的使用方式。 |
| Windows Security Auditing Tool | 這個工具提供更全面的安全審計功能，而 YellowKey 專注於特定漏洞的利用。 | 如果你的需求是進行全面的安全審計，而不僅僅是針對 BitLocker 的繞過。 | high，因為需要重新設置和配置整個審計流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **YellowKey** | **BitLocker Bypass Tool** | **Windows Security Auditing Tool** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於 BitLocker 繞過，但其操作過程較為複雜，需要更多的配置和依賴。 | 這個工具提供更全面的安全審計功能，而 YellowKey 專注於特定漏洞的利用。 |
> | 遷移成本 | - | medium，因為需要重新學習工具的使用方式。 | high，因為需要重新設置和配置整個審計流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更全面的 BitLocker 繞過解決方案， | 如果你的需求是進行全面的安全審計，而不僅僅是針對 BitLo |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合安全研究者進行測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上，組策略可能會阻止漏洞的利用。
  - 解法：檢查並調整組策略設置以允許此操作。
- [MEDIUM] Windows 11 的更新可能會修補此漏洞。
  - 解法：定期檢查更新並評估其影響。
- [MEDIUM] 使用者可能無法在某些硬體上成功啟動 WinRE。
  - 解法：確保硬體支持 WinRE 並進行必要的 BIOS 設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的 IT 安全測試 | 非常適合 | 因為其簡單的操作流程能快速評估系統安全性。 |
| 大型企業的安全審計 | 普通 | 雖然有效，但可能需要其他工具輔助進行全面審計。 |
| 個人安全研究 | 非常適合 | 對於個人研究者來說，這是一個簡單且有效的工具。 |
| 政府機構的安全測試 | 不適合 | 因為其存在的後門特徵可能不符合政府機構的安全標準。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速的 Bitlocker 繞過效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：此工具不需要高權限，但可能會存取敏感資料，使用時需謹慎。依賴鏈的信任程度需進一步評估，特別是在生產環境中使用時。

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
| Forks | 852 |
| Open Issues | 39 |
| Issue 解決率 | 9% (4 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 118 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/YellowKey) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，討論熱烈，特別是針對漏洞的影響及解決方案。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-12）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/Nightmare-Eclipse/YellowKey/issues/12) | It's a HOAX | 16 | 11 |
> | [#11](https://github.com/Nightmare-Eclipse/YellowKey/issues/11) | TPM+PIN mitigation blocked by default Group Policy on consum | 4 | 5 |
> | [#43](https://github.com/Nightmare-Eclipse/YellowKey/issues/43) | Microsoft now tracking YellowKey as CVE with mitigation step | 2 | 6 |
> | [#9](https://github.com/Nightmare-Eclipse/YellowKey/issues/9) | Will this work on already bitlocked original hard drive | 1 | 1 |

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

相關概念：[[安全漏洞]] · [[滲透測試]] · [[Bitlocker]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[0xGF--boneyard|0xGF/boneyard]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[V4bel--dirtyfrag|V4bel/dirtyfrag]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]]

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
> const concepts = ["安全漏洞","滲透測試","Bitlocker"];
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
