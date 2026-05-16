---
repo: V4bel/dirtyfrag
url: https://github.com/V4bel/dirtyfrag
owner: V4bel
owner_type: User
language: C
license: N/A
description: ""
homepage: ""
stars: 4544
stars_per_day: 568
forks: 706
open_issues: 57
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
use_case: "透過 Dirty Frag 漏洞鏈獲取 Linux 系統的 root 權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-17"
contributor_count: 2
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 5934
readme_length: 5262
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-09"
star_history: "2026-05-09:2889,2026-05-09:2898,2026-05-10:3645,2026-05-10:3648,2026-05-11:4025,2026-05-11:4026,2026-05-12:4201,2026-05-12:4203,2026-05-13:4331,2026-05-13:4331,2026-05-14:4421,2026-05-14:4421,2026-05-15:4485,2026-05-16:4544"
tags:
  - github
  - "category/安全"
  - "lang/c"
  - easy_install
aliases:
  - "dirtyfrag"
  - "V4bel/dirtyfrag"
  - "透過 Dirty Frag 漏洞鏈獲取 Linux 系統的 root 權限。"
---

# dirtyfrag

**4.5k** stars · **568** stars/天 · 建立 8 天前 · C · 未標註授權

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
> 透過 Dirty Frag 漏洞鏈獲取 Linux 系統的 root 權限。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (568 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 5 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對 Linux 系統安全性有興趣的安全研究員和系統管理員。
> **一句話重點** Dirty Frag 漏洞的設計使其能在多種 Linux 發行版上成功利用，這對於安全研究人員來說是一個重要的研究對象。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習、2 小時整合，得到有效的漏洞測試工具，值得在安全研究中使用。

> [!abstract] 核心創新
> Dirty Frag 漏洞鏈的設計使其能在多種 Linux 發行版上成功利用，並且不依賴於時間窗口。

## 專案簡介

Dirty Frag 是一個針對主要 Linux 發行版的漏洞類別，透過鏈接 `xfrm-ESP Page-Cache Write (CVE-2026-43284)` 和 `RxRPC Page-Cache Write (CVE-2026-43500)` 來獲取 root 權限。這個漏洞不依賴於時間窗口，因此不需要競爭條件，並且在失敗時不會導致內核崩潰，成功率非常高。使用者只需執行一行命令 `git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp` 即可進行測試。該漏洞已在多個主要 Linux 發行版上進行測試，包括 Ubuntu、RHEL 和 Fedora。相較於其他漏洞，Dirty Frag 的設計使得它能在多種環境中成功利用，特別是在某些發行版中，RxRPC 模組預設啟用，進一步擴大了攻擊面。

這個專案的社群活躍度高，開放問題數量也顯示出使用者對於漏洞的關注和討論。雖然目前有 57 個開放問題，但解決率僅為 11%，顯示出社群對於漏洞的修補進展緩慢。這個專案的成熟度尚不明確，但在安全性和穩定性方面仍需進一步觀察。對於安全研究人員和系統管理員而言，這是一個值得關注的漏洞，特別是在需要評估系統安全性和漏洞修補的情況下。

**技術棧**：`C`

## 重點功能

- 漏洞鏈利用 — 透過鏈接兩個已知漏洞獲取 root 權限，無需競爭條件。
- 高成功率 — 由於不依賴於時間窗口，成功率極高。
- 多發行版支援 — 已在多個主要 Linux 發行版上測試，包括 Ubuntu 和 RHEL。
- 簡單的使用方式 — 只需一行命令即可執行 PoC 測試。
- 清理指令 — 提供清理污染的頁面快取的指令，確保系統穩定。

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
[
  "# 前置條件：已安裝 gcc",
  "git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp",
  "# 預期輸出：成功獲取 root 權限"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 4544 stars（568/天），forks 706（15.5%），顯示出極高的關注度。作者 V4bel 是知名的安全研究者，之前有過多次漏洞發現經驗，這次的 Dirty Frag 漏洞鏈解決了 Linux 系統中存在的根權限獲取問題，這在安全社群中引起了廣泛的討論。社群對於漏洞的關注和討論，特別是熱門問題的反應，顯示出使用者對於該漏洞的實際影響和修補進展的高度關注。這個專案的快速增長可能與最近的安全事件和漏洞披露有關，促使更多人關注 Linux 系統的安全性。

## 適合誰使用

**目標受眾**：對 Linux 系統安全性有興趣的安全研究員和系統管理員。

> [!example] 使用場景
> - 安全研究員用它來測試 Linux 系統的安全性，因為 Dirty Frag 漏洞提供了一個有效的方式來評估系統的權限控制。
> - 系統管理員用它來檢查和修補 Linux 系統中的安全漏洞，因為這個工具能幫助他們快速識別潛在的安全風險。
> - 開發者用它來了解 Linux 系統中的漏洞利用技術，因為這有助於提升他們在安全開發方面的知識和技能。

## 架構分析

Dirty Frag 的架構基於兩個已知的漏洞，通過鏈接這些漏洞來獲取 root 權限。這種設計使得漏洞利用不需要競爭條件，並且在失敗時不會導致內核崩潰。資料流方面，利用者首先克隆專案並編譯 PoC，然後執行該程式來觸發漏洞。這種方法的優勢在於簡單易用，但其缺點是僅適用於特定的 Linux 發行版，且需要在有權限的環境中執行。擴展性方面，這種方法在不同的 Linux 發行版中可能會遇到不同的限制，特別是在安全性設置較高的環境中。

## 技術深入分析

Dirty Frag 利用的核心技術是將兩個已知的漏洞鏈接起來，從而實現權限提升。這種設計使得漏洞利用不依賴於時間窗口，成功率高。該工具能夠處理多種 Linux 發行版，並在不同環境中進行測試，顯示出其廣泛的適用性。設計上，選擇 C 語言作為實作語言，因為其在系統層級的操作中具有優越的性能和控制能力。這種選擇雖然帶來了高效能，但也可能導致較高的學習曲線。技術風險方面，這種漏洞利用方法在未來可能會受到新的安全措施的影響，特別是在 Linux 發行版的更新中。整合方面，這個工具的使用需要一定的系統管理知識，對於新手來說可能會有一定的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和範例，安裝過程相對順暢，但使用者需具備一定的 Linux 知識。文件中有關於漏洞的詳細說明，幫助新手理解其運作原理。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 高成功率的漏洞利用方式。
> - 簡單的使用流程，適合快速測試。
> - 能夠在多個 Linux 發行版上運行，具有廣泛的適用性。

> [!danger] 缺點
> - 僅適用於特定版本的 Linux 發行版，限制了使用範圍。
> - 需要在有權限的環境中執行，可能不適合所有用戶。
> - 社群解決問題的速度較慢，開放問題數量較多。

> [!warning] 注意事項
> - 僅適用於特定版本的 Linux 發行版。
> - 需要在有權限的環境中執行，否則無法測試。
> - 在某些環境中可能需要額外的配置以啟用漏洞利用。

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

- [MEDIUM] 在某些發行版中，可能需要額外的配置以啟用漏洞利用。
  - 解法：檢查發行版的安全設置，並根據需要進行調整。
- **[HIGH]** 執行漏洞利用後，頁面快取會被污染，可能影響系統穩定性。
  - 解法：使用提供的清理指令或重啟系統。
- [MEDIUM] 社群解決問題的速度較慢，可能導致使用者在遇到問題時無法迅速獲得幫助。
  - 解法：參考相關文檔或尋求其他安全社群的協助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的 Linux 系統安全測試 | 非常適合 | 能夠有效評估系統的權限控制和安全性。 |
| 小型開發團隊的安全研究 | 適合 | 提供簡單的測試方式，幫助團隊了解漏洞利用技術。 |
| 個人學習 Linux 安全的學生 | 普通 | 雖然有助於學習，但需要一定的系統管理知識。 |
| 生產環境中的系統管理 | 不適合 | 不建議在生產環境中使用未經驗證的漏洞利用工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到有效的漏洞測試工具，值得在安全研究中使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具需要在有權限的環境中運行，並可能存取系統敏感資料。使用時需謹慎，確保在授權的環境中進行測試。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Dirty Frag 可以與多種 Linux 發行版搭配使用，特別是在安全測試的環境中。它在開發和測試階段中扮演重要角色，幫助安全研究人員評估系統的安全性。實際整合範例包括在 Ubuntu 系統中執行漏洞測試，具體做法是使用提供的指令來克隆和編譯專案。與主流工具鏈的相容性良好，但在某些環境中可能需要額外的配置。整合的摩擦點主要在於不同發行版的安全設置，使用者需根據具體情況進行調整。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Dirty Frag 漏洞出現之前，Linux 系統的權限提升漏洞主要依賴於競爭條件和時間窗口，這使得利用難度增加。隨著安全技術的進步，新的漏洞利用方法逐漸被發現，Dirty Frag 的出現正是這一趨勢的體現。這個工具代表了對 Linux 系統安全性的新挑戰，未來可能會有更多類似的漏洞被發現，進一步推動安全研究的發展。

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
| Forks | 706 |
| Open Issues | 57 |
| Issue 解決率 | 11% (7 closed) |
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

**社群活躍度**：社群活躍度高，開放問題數量顯示出使用者對於漏洞的關注和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-10）
> **活躍天數** 3 天 · **最新 commit** update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/V4bel/dirtyfrag/issues/28) | Please delay this until monday | 106 | 11 |
> | [#38](https://github.com/V4bel/dirtyfrag/issues/38) | Meme collection about dirtyfrag | 11 | 5 |
> | [#4](https://github.com/V4bel/dirtyfrag/issues/4) | Please clarify whether this bug allows escaping from contain | 11 | 6 |
> | [#18](https://github.com/V4bel/dirtyfrag/issues/18) | [Discussion] Anthropic, stop digging, wait for your operatio | 9 | 6 |
> | [#1](https://github.com/V4bel/dirtyfrag/issues/1) | Mitigation doesn't stop exploit | 6 | 26 |

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

相關概念：[[安全漏洞]] · [[漏洞利用]] · [[Linux 系統安全]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[denuitt1--mhr-cfw|denuitt1/mhr-cfw]]

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
> const concepts = ["安全漏洞","漏洞利用","Linux 系統安全"];
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

- [[2026-05-14|2026-05-14]] — 再次上榜，4.4k stars
- [[2026-05-13|2026-05-13]] — 再次上榜，4.3k stars
- [[2026-05-12|2026-05-12]] — 再次上榜，4.2k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，4.0k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，3.6k stars
- [[2026-05-09|2026-05-09]] — 首次收錄，2.9k stars
