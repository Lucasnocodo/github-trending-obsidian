---
repo: Nightmare-Eclipse/YellowKey
url: https://github.com/Nightmare-Eclipse/YellowKey
owner: Nightmare-Eclipse
owner_type: User
language: N/A
license: MIT
description: "YellowKey Bitlocker Bypass Vulnerability"
homepage: ""
stars: 3158
stars_per_day: 632
forks: 671
open_issues: 24
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
use_case: "利用 YellowKey 漏洞繞過 Bitlocker 保護，獲取系統存取權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-21"
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
star_history: "2026-05-14:1000,2026-05-14:1002,2026-05-15:1756,2026-05-15:1759,2026-05-16:2435,2026-05-16:2441,2026-05-17:2851,2026-05-17:2851,2026-05-18:3157,2026-05-18:3158"
tags:
  - github
  - "category/安全"
  - "lang/other"
  - easy_install
aliases:
  - "YellowKey"
  - "Nightmare-Eclipse/YellowKey"
  - "利用 YellowKey 漏洞繞過 Bitlocker 保護，獲取系統存取權限。"
---

# YellowKey

**3.2k** stars · **632** stars/天 · 建立 5 天前 · N/A · MIT

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
> 利用 YellowKey 漏洞繞過 Bitlocker 保護，獲取系統存取權限。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (632 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 Windows 安全性有興趣的安全研究人員和系統管理員。
> **一句話重點** 這個專案揭示了 Windows 11 中一個嚴重的安全漏洞，可能是潛在的後門設計。

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
> **結論** 花 2 小時學習，1 小時整合，得到快速評估 Windows 11 安全性的能力，值得考慮。

> [!abstract] 核心創新
> 這個專案揭示了一個針對 Windows 11 的 Bitlocker 繞過漏洞，可能是設計上的後門。

## 專案簡介

YellowKey 是一個針對 Windows 11 的 Bitlocker 繞過漏洞，允許用戶在不需要解鎖密碼的情況下獲取對加密磁碟的完全存取權。具體流程是將 FsTx 資料夾複製到 USB 隨身碟的系統卷資訊中，然後透過 Windows 恢復環境啟動一個 shell，從而繞過 Bitlocker 的保護。這種設計的背後，可能是因為某些組件在 WinRE 中的存在，卻在正常的 Windows 安裝中缺少觸發漏洞的功能，這引發了對其是否為後門的懷疑。這個漏洞僅影響 Windows 11 和 Server 2022/2025，Windows 10 並不受影響。使用者只需將 USB 插入目標電腦，然後重啟進入恢復環境，按下特定的鍵組合即可啟動 shell，這種便利性顯示了漏洞的嚴重性及其潛在的安全風險。

## 重點功能

- Bitlocker 繞過 — 透過特定操作獲取對加密磁碟的存取權。
- 簡單的重啟流程 — 只需重啟進入 Windows 恢復環境即可啟動 shell。
- USB 隨身碟使用 — 可以在不插入 USB 的情況下進行操作，增加了便利性。
- 針對 Windows 11 的專用漏洞 — 僅影響特定版本的 Windows，顯示出其針對性。
- 社群活躍 — 有多個熱門問題和討論，顯示出使用者的關注和反饋。

## 快速開始

1. 將 FsTx 資料夾複製到 USB 隨身碟
```bash
複製 FsTx 到 YourUSBStick:\System Volume Information\FsTx
```
2. 插入 USB 隨身碟並重啟電腦
```bash
插入 USB 並重啟到 Windows 恢復環境
```
3. 啟動 shell
```bash
按住 SHIFT 並點擊重啟，然後按住 CTRL
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 3158 stars（632/天），forks 671（21.2%），顯示出極高的關注度。作者 Nightmare-Eclipse 以發現安全漏洞著稱，這次的 Bitlocker 繞過漏洞填補了長期以來缺乏有效解決方案的空白。這個漏洞的曝光引發了社群的廣泛討論，尤其是對於 Windows 11 的安全性質疑。隨著越來越多的用戶開始關注其安全性，這個專案的熱度迅速上升。

## 適合誰使用

**目標受眾**：對 Windows 安全性有興趣的安全研究人員和系統管理員。

> [!example] 使用場景
> - 安全研究人員用它來測試 Windows 11 環境的安全性，因為這個漏洞能夠迅速揭示 Bitlocker 的弱點。
> - 系統管理員用它來評估公司內部系統的安全性，因為能夠發現潛在的安全風險並進行修補。
> - 惡意攻擊者用它來獲取未經授權的存取權限，因為這個漏洞提供了一個簡單的繞過方法。

## 架構分析

這個專案的架構主要依賴於 Windows 恢復環境的特定組件，這些組件在正常的 Windows 安裝中並不存在。透過將特定檔案放入 USB 隨身碟，使用者能夠在重啟後進入一個未經授權的 shell。這種設計的代價在於，若未來 Windows 更新修補了這個漏洞，則可能無法再使用。整體而言，這個專案的架構簡單，易於實現，但也存在被修補的風險。

## 技術深入分析

YellowKey 利用 Windows 恢復環境中的特定組件來繞過 Bitlocker 的保護，這些組件在正常的 Windows 環境中並不存在。這個漏洞的效能特性在於，使用者可以在不需要解鎖密碼的情況下，獲取對加密磁碟的完全存取權。這種設計的取捨在於，雖然實現簡單，但也可能在未來的 Windows 更新中被修補，導致該方法失效。選擇 Windows 作為目標平台的原因在於其廣泛的使用率和 Bitlocker 的普及性，這使得該漏洞的影響範圍相當廣泛。技術風險方面，這個漏洞的存在可能會引發對 Windows 11 安全性的廣泛質疑，並促使用戶尋求替代的安全解決方案。整合方面，這個工具與現有的安全測試流程相容性良好，但在實際應用中，使用者需要考慮到其合法性和道德性。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了清晰的操作步驟。安裝過程相對簡單，但需要注意物理存取的限制。文件未提供多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 簡單易用的繞過方法，幾乎不需要技術背景。
> - 能夠迅速獲取對 Bitlocker 磁碟的存取權，對於安全研究有很大幫助。
> - 針對 Windows 11 的專用漏洞，顯示出其針對性和有效性。

> [!danger] 缺點
> - 僅限於特定版本的 Windows，無法廣泛應用。
> - 存在被防火牆或安全軟體偵測的風險。
> - 需要物理存取目標電腦，無法遠端利用。

> [!warning] 注意事項
> - 僅影響 Windows 11 和 Server 2022/2025，Windows 10 不受影響。
> - 需要物理存取目標電腦，無法遠端利用。
> - 存在被防火牆或安全軟體偵測的風險。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，因為存在高風險和不穩定性。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上可能無法啟動 shell，特別是有安全軟體的環境
  - 解法：嘗試在沒有安全軟體的環境中測試
- **[HIGH]** 需要物理存取目標電腦，無法遠端利用
  - 解法：無法解決，必須親自操作
- [MEDIUM] 未來 Windows 更新可能會修補此漏洞
  - 解法：持續關注更新和社群反饋

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的安全測試團隊 | 非常適合 | 能夠快速評估 Windows 11 環境的安全性。 |
| 個人使用者希望繞過 Bitlocker | 不適合 | 法律和道德風險高，可能違反使用條款。 |
| 學術研究者進行安全研究 | 適合 | 能夠提供實用的安全測試案例。 |
| 小型公司 IT 團隊 | 普通 | 雖然能夠評估安全性，但需考慮法律風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速評估 Windows 11 安全性的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：此工具需要物理存取目標電腦，並可能暴露敏感資料。使用時需謹慎評估法律和道德風險。

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
| Forks | 671 |
| Open Issues | 24 |
| Issue 解決率 | 11% (3 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-05-12 |
| Repo 大小 | 118 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Nightmare-Eclipse/YellowKey) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Nightmare-Eclipse](https://github.com/Nightmare-Eclipse) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，熱門問題和討論數量多。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-12 ~ 2026-05-12）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/Nightmare-Eclipse/YellowKey/issues/12) | It's a HOAX | 11 | 9 |
> | [#11](https://github.com/Nightmare-Eclipse/YellowKey/issues/11) | TPM+PIN mitigation blocked by default Group Policy on consum | 4 | 4 |
> | [#25](https://github.com/Nightmare-Eclipse/YellowKey/issues/25) | What is the actual exploit | 2 | 7 |
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

相關概念：[[安全漏洞]] · [[Bitlocker]] · [[系統安全]]

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
> const concepts = ["安全漏洞","Bitlocker","系統安全"];
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

- [[2026-05-18|2026-05-18]] — 再次上榜，3.2k stars
- [[2026-05-17|2026-05-17]] — 再次上榜，2.9k stars
- [[2026-05-16|2026-05-16]] — 再次上榜，2.4k stars
- [[2026-05-15|2026-05-15]] — 再次上榜，1.8k stars
- [[2026-05-14|2026-05-14]] — 首次收錄，1.0k stars
