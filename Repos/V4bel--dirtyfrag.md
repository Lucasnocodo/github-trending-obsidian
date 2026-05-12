---
repo: V4bel/dirtyfrag
url: https://github.com/V4bel/dirtyfrag
owner: V4bel
owner_type: User
language: C
license: N/A
description: ""
homepage: ""
stars: 4203
stars_per_day: 1051
forks: 625
open_issues: 52
created: 2026-05-07
pushed_at: 2026-05-10
first_seen: 2026-05-09
week: "2026-W19"
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
last_reviewed: 2026-05-09
use_case: "透過鏈接兩個 Linux 漏洞，實現獲取系統 root 權限的攻擊手法。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-15"
contributor_count: 2
engagement: "medium"
issue_close_rate: 12
repo_size_kb: 5934
readme_length: 5262
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:2889,2026-05-09:2898,2026-05-10:3645,2026-05-10:3648,2026-05-11:4025,2026-05-11:4026,2026-05-12:4201,2026-05-12:4203"
tags:
  - github
  - "category/安全"
  - "lang/c"
  - easy_install
aliases:
  - "dirtyfrag"
  - "V4bel/dirtyfrag"
  - "透過鏈接兩個 Linux 漏洞，實現獲取系統 root 權限的攻擊手法。"
---

# dirtyfrag

**4.2k** stars · **1.1k** stars/天 · 建立 4 天前 · C · 未標註授權

```dataviewjs
const me = dv.page("Repos/V4bel--dirtyfrag");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 透過鏈接兩個 Linux 漏洞，實現獲取系統 root 權限的攻擊手法。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在 Linux 系統上進行安全測試的安全研究員和系統管理員。
> **一句話重點** 這個專案展示了如何通過鏈接現有漏洞來實現新的攻擊方式，並強調了 Linux 系統安全的重要性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/V4bel--dirtyfrag");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞利用" && p.file.name !== "V4bel--dirtyfrag" && p.status !== "archived")
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
> **結論** 花 2 小時學習，1 小時整合，得到高效的漏洞利用工具，值得在安全測試中使用。

> [!abstract] 核心創新
> Dirty Frag 是一種新的漏洞利用方式，通過鏈接兩個漏洞實現高成功率的本地特權提升。

## 專案簡介

Dirty Frag 是一種新的 Linux 本地特權提升漏洞，通過鏈接 `xfrm-ESP Page-Cache Write (CVE-2026-43284)` 和 `RxRPC Page-Cache Write (CVE-2026-43500)` 來獲取 root 權限。使用者只需執行一行命令 `git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp`，即可啟動攻擊。這種方法的賣點在於其高成功率，因為它不依賴於競爭條件，且內核在攻擊失敗時不會崩潰。技術上，這兩個漏洞的鏈接使得即使在某些環境中無法觸發一個漏洞時，另一個漏洞仍然可以被利用。這使得攻擊者能夠在大多數主要 Linux 發行版上獲得 root 權限。

這個專案的依賴性相對較低，主要依賴於 GCC 和標準 C 函式庫，適合快速測試和實驗。與其他類似工具相比，Dirty Frag 的獨特之處在於它不需要特權來創建命名空間，這使得它在某些安全配置下仍然有效。使用者在運行攻擊後需要清理頁面快取，以確保系統穩定，這可以通過 `echo 3 > /proc/sys/vm/drop_caches` 命令完成。這個專案的社群活躍度高，開放問題數量也顯示出使用者對於漏洞的關注和實驗需求。

**技術棧**：`C`

## 重點功能

- 一鍵執行 — 只需一行命令即可克隆並編譯漏洞利用程式。
- 高成功率 — 不依賴於競爭條件，內核不會因失敗而崩潰。
- 多發行版支持 — 在多個主要 Linux 發行版上均可有效利用。
- 清理頁面快取 — 提供清理污染頁面快取的指令，確保系統穩定性。
- 詳細的漏洞說明 — 包含對於每個漏洞的詳細解釋和影響範圍。

## 快速開始

1. 克隆專案並編譯
```bash
git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil
```
2. 執行漏洞利用程式
```bash
./exp
```
3. 清理頁面快取
```bash
echo 3 > /proc/sys/vm/drop_caches
```

## 程式碼範例

```c
{
  "前置條件": "已安裝 GCC 和相關依賴",
  "指令": "git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp",
  "預期輸出": "獲取 root 權限（具體輸出依環境而異）"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 4203 stars（1051/天），forks 625（14.9%），這顯示出極高的關注度。作者 V4bel 是知名的安全研究者，之前發現過多個漏洞，這次的 Dirty Frag 提供了一種新的攻擊方式，解決了以往無法有效利用的漏洞。社群對於這個專案的熱烈反應，反映了對於 Linux 安全性的高度關注。最近的討論和反應也顯示出使用者對於漏洞的實際應用和修補的迫切需求。

## 適合誰使用

**目標受眾**：需要在 Linux 系統上進行安全測試的安全研究員和系統管理員。

> [!example] 使用場景
> - 安全研究員用它來測試 Linux 系統的安全性，因為它提供了一種簡單而有效的本地特權提升方法。
> - 系統管理員用它來檢查自家伺服器是否受到 Dirty Frag 漏洞影響，因為這能幫助他們及時修補安全漏洞，避免潛在的攻擊。
> - 滲透測試者用它來模擬攻擊，評估系統的防禦能力，因為這樣可以驗證現有安全措施的有效性。

## 架構分析

Dirty Frag 的架構基於對兩個已知漏洞的鏈接，通過利用 xfrm-ESP 和 RxRPC 的頁面快取寫入漏洞來獲取 root 權限。這種設計的優勢在於不需要依賴於競爭條件，這使得攻擊的成功率顯著提高。資料流方面，漏洞利用程式會首先檢查系統環境，然後利用漏洞進行攻擊。這種方法的取捨在於它的高成功率，但也需要使用者在攻擊後進行手動清理，以避免系統不穩定。擴展性方面，這種方法在不同的 Linux 發行版中均可適用，但需注意各版本的安全補丁狀態。

## 技術深入分析

Dirty Frag 利用兩個已知的 Linux 漏洞，通過頁面快取寫入來實現本地特權提升。這種方法的核心在於其不依賴於競爭條件，這使得攻擊者能夠在多數環境中穩定地獲取 root 權限。效能上，這種攻擊的成功率極高，且在多個 Linux 發行版上均可有效運行。設計上，選擇 C 語言實現使得程式碼簡潔且執行效率高，但也可能帶來安全風險。由於依賴於特定的內核漏洞，這種方法在未來的安全更新中可能會失效。整合方面，這個工具可以與現有的安全測試流程相結合，但使用者需謹慎對待其潛在的系統穩定性影響。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和範例，安裝過程相對簡單，使用者只需執行一行命令即可開始。整體上，對於有一定技術背景的使用者來說，30 分鐘內可以順利運行。

## 優缺點分析

> [!success] 優點
> - 高成功率的漏洞利用方式
> - 簡單易用，只需一行命令
> - 支持多個主要 Linux 發行版

> [!danger] 缺點
> - 僅限於特定版本的 Linux 系統
> - 需要手動清理系統快取
> - 可能會對系統穩定性造成影響

> [!warning] 注意事項
> - 僅適用於特定版本的 Linux 發行版
> - 需要在具有相應權限的環境中運行
> - 可能需要手動清理系統快取以確保穩定性

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 不建議在生產環境中使用，適合用於安全測試和研究。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些發行版中，可能需要特權才能運行漏洞利用程式
  - 解法：確保使用者擁有適當的權限
- [MEDIUM] 執行後系統可能不穩定
  - 解法：執行清理命令以恢復系統穩定性
- **[HIGH]** 未來的內核更新可能會修補這些漏洞
  - 解法：定期檢查並更新系統以防止漏洞被利用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型企業的 Linux 伺服器安全測試 | 非常適合 | 能夠快速評估伺服器的安全性，並提供實用的漏洞利用方法。 |
| 大型企業的安全審計 | 適合 | 雖然有一定的風險，但可以用於測試系統的防禦能力。 |
| 個人開發者的安全研究 | 非常適合 | 提供了一個簡單的工具來探索和理解 Linux 漏洞。 |
| 生產環境的核心應用 | 不適合 | 存在高風險，不建議在生產環境中使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的漏洞利用工具，值得在安全測試中使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，但執行後可能會影響系統穩定性。使用時需謹慎，並確保在受控環境中進行測試。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Dirty Frag 可以與現有的安全測試工具鏈相結合，特別是在滲透測試和漏洞評估中。它可以與 Metasploit 等工具配合使用，提供更全面的安全測試方案。在實際應用中，使用者可以在一個使用 Ubuntu 的測試環境中，運行 Dirty Frag 來評估系統的安全性，具體做法是將其與其他安全工具結合，形成一個完整的測試流程。整合時，需注意可能的系統穩定性問題，並確保在測試後進行必要的清理工作。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Dirty Frag 出現之前，Linux 系統的本地特權提升漏洞主要依賴於競爭條件和時間窗口，這使得攻擊的成功率受到限制。隨著對 Linux 核心的深入研究，發現了新的漏洞鏈接方式，使得這些漏洞的利用變得更加高效。Dirty Frag 代表了一種新的攻擊趨勢，未來可能會有更多類似的漏洞被發現和利用，這對於 Linux 系統的安全性提出了新的挑戰。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
| Forks | 625 |
| Open Issues | 52 |
| Issue 解決率 | 12% (7 closed) |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-05-07 |
| Repo 大小 | 5.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/V4bel/dirtyfrag) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@V4bel](https://github.com/V4bel) | 16 |
> | [@Nriver](https://github.com/Nriver) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，討論熱烈，特別是在熱門問題上

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-10）
> **活躍天數** 3 天 · **最新 commit** update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/V4bel/dirtyfrag/issues/28) | Please delay this until monday | 104 | 11 |
> | [#38](https://github.com/V4bel/dirtyfrag/issues/38) | Meme collection about dirtyfrag | 11 | 4 |
> | [#4](https://github.com/V4bel/dirtyfrag/issues/4) | Please clarify whether this bug allows escaping from contain | 11 | 6 |
> | [#18](https://github.com/V4bel/dirtyfrag/issues/18) | [Discussion] Anthropic, stop digging, wait for your operatio | 9 | 6 |
> | [#1](https://github.com/V4bel/dirtyfrag/issues/1) | Mitigation doesn't stop exploit | 6 | 23 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Dirty Frag: Universal Linux LPE
> 
>   
> 
> # Abstract
> 
> This document describes the Dirty Frag vulnerability class, first discovered and reported by [Hyunwoo Kim (@v4bel)](https://x.com/v4bel), which can obtain root privileges on major Linux distributions by chaining the `xfrm-ESP Page-Cache Write (CVE-2026-43284)` vulnerability and the `RxRPC Page-Cache Write (CVE-2026-43500)` vulnerability.
> 
> Dirty Frag is a case that extends the bug class to which [Dirty Pipe](https://dirtypipe.cm4all.com/) and [Copy Fail](https://copy.fail/) belong. Because it is a deterministic logic bug that does not depend on a timing window, no race condition is required, the kernel does not panic when the exploit fails, and the success rate is very high.
> 
> For detailed technical information and the timeline, [see here](assets/write-up.md).
> 
> - `xfrm-ESP Page-Cache Write (CVE-2026-43284)` was patched in mainline [f4c50a4034e6](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f4c50a4034e62ab75f1d5cdd191dd5f9c77fdff4).
> - `RxRPC Page-Cache Write (CVE-2026-43500)` was patched in mainline [aa54b1d27fe0](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=aa54b1d27fe0c2b78e664a34fd0fdf7cd1960d71).
> 
> > [!NOTE]
> > At the time this document was first made public (2026-05-07), the embargo had been broken due to external factors, so no patch or CVE existed yet. After consultation with the maintainers on linux-distros@vs.openwall.org at that time, the Dirty Frag document was published at their request. For the disclosure timeline, refer to the technical details.
> 
> # Exploiting
> 
> ## One-line special
> 
> ```
> git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp
> ```
> 
> This PoC is provided as accurate information following consultation with linux-distros. Do not use it on systems that you are not authorized to test.
> 
> ## Cleanup
> 
> ⚠️  **Important:** After running this exploit, the page cache is contaminated. To clear the polluted page cache and ensure system stability, either run:
> 
> ```bash
> echo 3 > /proc/sys/vm/drop_caches
> ```
> 
> or reboot the system.
> 
> # Affected Versions
> 
> - **CVE-2026-43284**: xfrm-ESP Page-Cache Write vulnerability is in scope from [cac2661c53f3 (2017-01-17)](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=cac2661c53f3) up to [f4c50a4034e6 (2026-05-05)](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=f4c50a4034e62ab75f1d5cdd191dd5f9c77fdff4).
> - **CVE-2026-43500**: RxRPC Page-Cache Write vulnerability is in scope from [2dc334f1a63a (2023-06-08)](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=2dc334f1a63a) up to [aa54b1d27fe0 (2026-05-10)](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=aa54b1d27fe0c2b78e664a34fd0fdf7cd1960d71).
> 
> In other words, the effective lifetime of the vulnerabilities is about 9 years.
> 
> This Dirty Frag has been tested on the following distribution versions.
> 
> - Ubuntu 24.04.4: 6.17.0-23-generic
> - RHEL 10.1: 6.12.0-124.49.1.el10_1.x86_64
> - openSUSE Tumbleweed: 7.0.2-1-default
> - CentOS Stream 10: 6.12.0-224.el10.x86_64
> - AlmaLinux 10: 6.12.0-124.52.3.el10_1.x86_64
> - Fedora 44: 6.19.14-300.fc44.x86_64
> - ...
> 
> # Mitigation
> 
> 1. Use the following command to remove the modules in which the vulnerabilities occur and clear the page cache.
> ```bash
> sh -c "printf 'install esp4 /bin/false\ninstall esp6 /bin/false\ninstall rxrpc /bin/false\n' > /etc/modprobe.d/dirtyfrag.conf; rmmod esp4 esp6 rxrpc 2>/dev/null; echo 3 > /proc/sys/vm/drop_caches; true"
> ```
> 
> 2. Once each distribution backports a patch, update accordingly.
> 
> # FAQ
> 
> ## Why did you chain two vulnerabilities?
> 
> xfrm-ESP Page-Cache Write provides a powerful arbitrary 4-byte STORE primitive like Copy Fail, and is included on most distributions, but it requires the privilege to create a namespace. 
> 
> Ubuntu sometimes blocks unprivileged user namespace creation through AppArmor policy. In such an environment, xfrm-ESP Page-Cache Write cannot be triggered. RxRPC Page-Cache Write does not require the privilege to create a namespace, but the `rxrpc.ko` module itself is not included in most distributions. However, on Ubuntu, the `rxrpc.ko` module is loaded by default. 
> 
> Chaining the two variants makes the blind spots cover each other, allowing root privileges to be obtained on every major distribution. For details, refer to the technical details document.
> 
> ## Another "branded" "Dirty" series?
> 
> Yeah, yeah, I know. However, this vulnerability is a descendant of "Dirty Pipe", and it is a bug class that "dirties" the `frag` member of `struct sk_buff`, so this name is the most appropriate.
> 
> ## What is its relationship with the "Copy Fail" vulnerability?
> 
> Copy Fail was the motivation for starting this research. In particular, xfrm-ESP Page-Cache Write in the Dirty Frag vulnerability chain shares the same sink as Copy Fail. However, it is triggered regardless of whether the algif_aead module is available. In other words, even on systems where the publicly known Copy Fail mitigation (algif_aead blacklist) is applied, your Linux is still vulnerable to Dirty Frag.
> 
> ## So, how do I fix my Linux?
> 
> Refer to the Mitigation section above.

## 延伸閱讀

相關概念：[[安全漏洞]] · [[本地特權提升]] · [[漏洞利用]]

相關專案：[[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[denuitt1--mhr-cfw|denuitt1/mhr-cfw]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[masterking32--MasterHttpRelayVPN|masterking32/MasterHttpRelayVPN]]

[GitHub](https://github.com/V4bel/dirtyfrag)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞利用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞利用" AND file.name != "V4bel--dirtyfrag"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "V4bel--dirtyfrag"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "V4bel--dirtyfrag" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "V4bel--dirtyfrag"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","本地特權提升","漏洞利用"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "V4bel--dirtyfrag" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "V4bel--dirtyfrag" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "V4bel" AND file.name != "V4bel--dirtyfrag"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
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
> const me = dv.page("Repos/V4bel--dirtyfrag");
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

> **2026-05-09** — 首次收錄
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

- [[2026-05-12|2026-05-12]] — 再次上榜，4.2k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，4.0k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，3.6k stars
- [[2026-05-09|2026-05-09]] — 首次收錄，2.9k stars
