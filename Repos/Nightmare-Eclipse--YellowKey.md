---
repo: Nightmare-Eclipse/YellowKey
url: https://github.com/Nightmare-Eclipse/YellowKey
owner: Nightmare-Eclipse
owner_type: User
language: N/A
license: MIT
description: "YellowKey Bitlocker Bypass Vulnerability"
homepage: ""
stars: 2851
stars_per_day: 713
forks: 598
open_issues: 22
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
use_case: "繞過 Bitlocker 保護的漏洞利用工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-20"
contributor_count: 1
engagement: "medium"
issue_close_rate: 6
repo_size_kb: 118
readme_length: 1862
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-14"
star_history: "2026-05-14:1000,2026-05-14:1002,2026-05-15:1756,2026-05-15:1759,2026-05-16:2435,2026-05-16:2441,2026-05-17:2851"
tags:
  - github
  - "category/安全"
  - "lang/other"
  - easy_install
aliases:
  - "YellowKey"
  - "Nightmare-Eclipse/YellowKey"
  - "繞過 Bitlocker 保護的漏洞利用工具。"
---

# YellowKey

**2.4k** stars · **814** stars/天 · 建立 3 天前 · N/A · MIT

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
> 繞過 Bitlocker 保護的漏洞利用工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (814 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要測試 Windows 11 系統安全性的安全研究人員和滲透測試者。
> **一句話重點** YellowKey 不僅是一個工具，更是一個揭示 Windows 系統安全漏洞的警鐘。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速繞過 Bitlocker 的能力，值得在測試環境中使用。

> [!abstract] 核心創新
> 這個專案揭示了一個在 Windows 恢復環境中存在的 Bitlocker 繞過漏洞。

## 專案簡介

YellowKey 是一個針對 Windows 11 和 Server 2022/2025 的 Bitlocker 繞過漏洞工具，能夠在不需要外部儲存設備的情況下，利用特定的系統檔案來獲取對 Bitlocker 保護磁碟的完全訪問權限。使用者只需將 FsTx 資料夾複製到 USB 隨身碟，然後透過 Windows 恢復環境重啟系統，即可啟動一個具有不受限權限的 shell。這個漏洞的特異性在於，相關的系統組件僅在 WinRE 映像中存在，而在正常的 Windows 安裝中卻不存在相同的功能，這引發了對其是否為後門的懷疑。這種設計使得攻擊者能夠在不需要解鎖密碼的情況下，直接訪問受保護的資料，這對於安全性而言是極大的威脅。此工具的「一句話賣點」是：它能夠在特定條件下輕易繞過 Bitlocker 的安全防護，這在現今的安全環境中是非常罕見的。

技術上，這個工具並不依賴於複雜的攻擊手法，而是利用了 Windows 系統內部的漏洞，這使得它的使用門檻相對較低。相較於其他 Bitlocker 繞過工具，YellowKey 的優勢在於其簡單易用的操作流程，使用者只需遵循簡單的步驟即可實現目標。實際使用中，這個工具的效果取決於目標系統的配置，特別是 TPM 和 PIN 的設定。雖然目前僅支援 Windows 11，但隨著使用者對於安全性要求的提高，這個工具的需求可能會持續增長。對於安全研究人員和滲透測試者來說，YellowKey 提供了一個強大的工具來測試 Bitlocker 的安全性，但在使用時必須謹慎，以免違反法律或道德規範。

## 重點功能

- Bitlocker 繞過 — 利用特定的系統檔案來獲取對 Bitlocker 保護磁碟的完全訪問權限。
- 簡單操作 — 只需將 FsTx 資料夾複製到 USB 隨身碟，並透過 Windows 恢復環境重啟系統即可。
- 無需外部設備 — 可以在不插入 USB 的情況下，直接從 EFI 分區複製檔案。
- 針對 Windows 11 — 目前僅支援 Windows 11 和 Server 2022/2025，Windows 10 不受影響。
- 後門懷疑 — 相關組件僅在 WinRE 中存在，引發對其設計意圖的懷疑。

## 快速開始

1. 將 FsTx 資料夾複製到 USB 隨身碟
```bash
Copy FsTx folder to "YourUSBStick:\System Volume Information\FsTx"
```
2. 將 USB 插入目標 Windows 電腦
```bash
Plug the USB stick into the target Windows computer with Bitlocker protection.
```
3. 重啟進入 Windows 恢復環境
```bash
Hold SHIFT and click on the restart button.
```
4. 啟動 shell
```bash
Once you click on the restart button, lift your finger off the SHIFT key and hold CTRL.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 2441 stars（814/天），forks 523（21.4%），這顯示出極高的關注度。作者 Nightmare-Eclipse 是一位知名的安全研究者，過去曾發現多個安全漏洞，這次的發現填補了 Bitlocker 繞過工具的空白。此工具的出現引發了社群的廣泛討論，特別是在安全性和隱私保護的背景下，許多使用者對於 Bitlocker 的安全性產生了疑慮。這個工具的設計和實現方式，讓許多安全專家開始重新評估現有的防護措施，並探討如何加強系統的安全性。forks/stars 比率達到 21.4%，顯示出許多人對於這個工具的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要測試 Windows 11 系統安全性的安全研究人員和滲透測試者。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 11 系統的 Bitlocker 安全性，因為這個工具能夠快速繞過保護，提供實際的安全評估。
> - 滲透測試者用它來模擬攻擊，檢查企業環境中 Bitlocker 的配置和安全性，因為這樣可以發現潛在的安全漏洞。
> - 系統管理員用它來驗證 Bitlocker 的有效性，確保系統在遭受攻擊時仍能保持資料安全，因為這能幫助他們加強安全策略。

## 架構分析

YellowKey 的架構相對簡單，主要依賴於 Windows 恢復環境中的特定組件。這些組件的存在使得攻擊者能夠在不需要解鎖密碼的情況下，直接訪問受保護的資料。這種設計的代價是安全性降低，因為它使得未經授權的訪問變得可能。

資料流方面，攻擊者只需將特定檔案複製到 USB 隨身碟，然後透過簡單的重啟步驟來啟動 shell。這樣的設計使得使用者能夠快速繞過 Bitlocker 的保護，但同時也暴露了系統的安全漏洞。由於此工具僅針對特定版本的 Windows，因此在其他版本上無法使用，這限制了其擴展性。

整體而言，這個工具的架構設計雖然簡單，但卻揭示了 Windows 系統在安全性上的重大缺陷。

## 技術深入分析

YellowKey 的核心技術機制在於利用 Windows 恢復環境中的特定組件，這些組件在正常的 Windows 安裝中並不存在。這使得攻擊者能夠在不需要解鎖密碼的情況下，直接訪問受保護的資料。效能方面，這個工具的使用並不需要大量的資源，因為它主要依賴於系統內部的漏洞，而不是複雜的攻擊手法。設計取捨方面，選擇利用 Windows 系統的內部漏洞而非外部攻擊手法，使得這個工具的使用門檻相對較低，但同時也暴露了系統的安全性問題。技術風險方面，這種設計可能在未來的 Windows 更新中被修補，導致工具失效。整合分析方面，這個工具的使用不需要額外的依賴，因為它完全依賴於 Windows 系統本身的功能，這使得它在現有的安全測試流程中非常容易整合。整體而言，YellowKey 是一個簡單但有效的工具，能夠揭示 Windows 系統在安全性上的重大缺陷。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的操作步驟，但缺乏詳細的背景資訊。安裝過程相對順暢，使用者只需遵循簡單的步驟即可完成。沒有提供多語言支持，僅有英文版本的說明。整體而言，新手在花費約 30 分鐘後應該能夠成功運行此工具。

## 優缺點分析

> [!success] 優點
> - 操作簡單，使用者只需遵循幾個步驟即可繞過 Bitlocker。
> - 能夠在不需要外部設備的情況下進行攻擊，降低了使用門檻。
> - 針對特定版本的 Windows，能夠有效利用系統內部的漏洞。

> [!danger] 缺點
> - 僅限於 Windows 11 和 Server 2022/2025，無法在其他版本上使用。
> - 可能受到企業環境中的額外安全防護措施影響，導致無法成功繞過。
> - 使用此工具可能違反法律或道德規範，需謹慎使用。

> [!warning] 注意事項
> - 僅支援 Windows 11 和 Server 2022/2025，Windows 10 不受影響。
> - 需要在特定的環境下操作，否則可能無法成功繞過。
> - 在某些企業環境中可能受到額外的安全防護措施影響。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前不建議在生產環境中使用，因為此工具仍處於測試階段，且存在高風險的設計缺陷。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些企業環境中，可能會有額外的安全防護措施阻止此工具的使用。
  - 解法：確保在測試環境中使用，避免在生產環境中嘗試。
- **[HIGH]** 使用此工具可能違反法律或道德規範，需謹慎使用。
  - 解法：僅在合法的測試環境中使用，並獲得必要的授權。
- [MEDIUM] 未來的 Windows 更新可能會修補此漏洞，導致工具失效。
  - 解法：定期檢查更新和社群討論，以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 安全研究人員進行滲透測試 | 非常適合 | 此工具能夠快速繞過 Bitlocker，提供實際的安全評估。 |
| 企業環境中的安全測試 | 適合 | 雖然可能受到額外的安全防護，但仍可用於測試特定配置。 |
| 個人使用者測試自己的系統安全性 | 普通 | 適合用於個人環境，但需注意法律風險。 |
| 大型企業的核心系統安全測試 | 不適合 | 不建議在生產環境中使用，因為存在高風險的設計缺陷。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速繞過 Bitlocker 的能力，值得在測試環境中使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 此工具不需要高權限，但使用時需謹慎，因為它可能會存取敏感資料。依賴鏈的信任程度較高，因為主要依賴於 Windows 系統本身的功能。在 CI/CD 中使用時需確保符合安全政策。

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
| Forks | 523 |
| Open Issues | 17 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 118 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/YellowKey) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率低，顯示出使用者對於工具的實際應用仍有疑問。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-12）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/Nightmare-Eclipse/YellowKey/issues/12) | It's a HOAX | 7 | 6 |
> | [#11](https://github.com/Nightmare-Eclipse/YellowKey/issues/11) | TPM+PIN mitigation blocked by default Group Policy on consum | 4 | 3 |
> | [#2](https://github.com/Nightmare-Eclipse/YellowKey/issues/2) | Q: Does it work with anything other than TPM-only key protec | 1 | 9 |
> | [#17](https://github.com/Nightmare-Eclipse/YellowKey/issues/17) | What do you mean by same component without this behavior? | 0 | 0 |

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

相關概念：[[安全漏洞]] · [[Bitlocker]] · [[滲透測試]]

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
> const concepts = ["安全漏洞","Bitlocker","滲透測試"];
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

- [[2026-05-17|2026-05-17]] — 再次上榜，2.9k stars
- [[2026-05-16|2026-05-16]] — 再次上榜，2.4k stars
- [[2026-05-15|2026-05-15]] — 再次上榜，1.8k stars
- [[2026-05-14|2026-05-14]] — 首次收錄，1.0k stars
