---
repo: V4bel/dirtyfrag
url: https://github.com/V4bel/dirtyfrag
owner: V4bel
owner_type: User
language: C
license: N/A
description: ""
homepage: ""
stars: 4331
stars_per_day: 866
forks: 648
open_issues: 55
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
use_case: "利用 Dirty Frag 漏洞在主要 Linux 發行版上獲取 root 權限。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-16"
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
star_history: "2026-05-09:2889,2026-05-09:2898,2026-05-10:3645,2026-05-10:3648,2026-05-11:4025,2026-05-11:4026,2026-05-12:4201,2026-05-12:4203,2026-05-13:4331,2026-05-13:4331"
tags:
  - github
  - "category/安全"
  - "lang/c"
  - easy_install
aliases:
  - "dirtyfrag"
  - "V4bel/dirtyfrag"
  - "利用 Dirty Frag 漏洞在主要 Linux 發行版上獲取 root 權限。"
---

# dirtyfrag

**4.3k** stars · **866** stars/天 · 建立 5 天前 · C · 未標註授權

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
> 利用 Dirty Frag 漏洞在主要 Linux 發行版上獲取 root 權限。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (866 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對 Linux 安全漏洞感興趣的安全研究人員和系統管理員。
> **一句話重點** Dirty Frag 的簡單性和高效性使其成為 Linux 安全測試中的一個重要工具。

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
> **結論** 花 2 小時學習，1 小時整合，得到高效的漏洞利用效果，值得使用。

> [!abstract] 核心創新
> Dirty Frag 是一種新的 LPE 漏洞，具有高成功率和簡單的利用方式。

## 專案簡介

Dirty Frag 是一種新的 Linux 本地特權提升（LPE）漏洞，通過鏈接 `xfrm-ESP Page-Cache Write (CVE-2026-43284)` 和 `RxRPC Page-Cache Write (CVE-2026-43500)` 漏洞來獲取 root 權限。這個漏洞的特點是它不依賴於時間窗口，因此不需要競爭條件，並且在失敗時內核不會崩潰，成功率極高。使用者只需執行一行命令即可運行這個 PoC，這使得它在實際攻擊中非常方便。該工具的賣點在於其高效性和易用性，特別是在測試和研究環境中。技術上，Dirty Frag 利用了一種確定性邏輯錯誤，這意味著它的利用不會受到環境變數的影響。

與其他 LPE 工具相比，如 Dirty Pipe 和 Copy Fail，Dirty Frag 的設計更為簡單，且不需要複雜的條件來觸發。這使得它在某些情況下比這些工具更具吸引力，尤其是在需要快速測試的場景中。實際使用中，執行完攻擊後需清理頁面快取，這一點在 README 中有明確指示。該專案的社群活躍度高，開放問題數量也顯示出使用者對於漏洞的關注和討論。對於安全研究人員和系統管理員來說，Dirty Frag 提供了一個強有力的工具來評估和加固系統的安全性。

**技術棧**：`C`

## 重點功能

- 一行命令執行 — 使用 `git clone` 和 `gcc` 編譯並運行 PoC，快速獲取 root 權限。
- 高成功率 — 利用確定性邏輯錯誤，不依賴於時間窗口或競爭條件。
- 頁面快取清理 — 提供清理頁面快取的指令，確保系統穩定性。
- 針對多個 Linux 發行版 — 支援主要的 Linux 發行版，擴展性強。
- 活躍的社群討論 — 有多個熱門問題，顯示出使用者的關注和討論。

## 快速開始

1. 克隆專案並編譯
```bash
git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil
```
2. 執行漏洞利用
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
  "前置條件": "需要在 Linux 環境中執行",
  "指令": "git clone https://github.com/V4bel/dirtyfrag.git && cd dirtyfrag && gcc -O0 -Wall -o exp exp.c -lutil && ./exp",
  "預期輸出": "獲取 root 權限"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 4331 stars（866/天），forks 648（15%），顯示出強烈的社群關注。作者 V4bel 是該漏洞的發現者，過去在安全研究方面有一定的經驗。Dirty Frag 解決了在 Linux 系統中獲取 root 權限的痛點，之前的方案往往需要複雜的條件或不穩定的環境。這個專案的快速增長可能與社群對於 Linux 安全性的高度關注有關，特別是在最近的安全事件後。forks/stars 比率為 15%，顯示出許多人對於這個工具的實際應用感興趣，並且可能在進行修改和擴展。

## 適合誰使用

**目標受眾**：對 Linux 安全漏洞感興趣的安全研究人員和系統管理員。

> [!example] 使用場景
> - 安全研究人員用它來測試 Linux 系統的安全性，因為它能快速獲取 root 權限並評估系統漏洞。
> - 系統管理員用它來檢查自家伺服器的安全性，因為能夠驗證是否存在 Dirty Frag 漏洞可以幫助加強防護。
> - 開發者用它來進行漏洞利用研究，因為它的簡單性使得測試和學習變得更加方便。

## 架構分析

Dirty Frag 的架構設計是基於利用 Linux 核心中的特定漏洞，這些漏洞涉及到頁面快取的寫入。其利用過程中，首先需要克隆專案並編譯生成可執行檔，然後執行該檔案以觸發漏洞。這種設計使得使用者能夠快速進行測試，而不需要複雜的配置或依賴。

由於該工具專注於特定的漏洞，因此它的依賴較少，降低了使用的複雜性。這樣的設計也意味著在特定環境下的可擴展性較高，但在其他環境中可能會遇到兼容性問題。整體而言，這種設計使得 Dirty Frag 在安全測試中非常有效，但在更廣泛的應用中可能需要進一步的調整。

## 技術深入分析

Dirty Frag 利用 Linux 核心中的特定漏洞，這些漏洞涉及到頁面快取的寫入，並且不依賴於時間窗口或競爭條件。這種確定性邏輯錯誤使得漏洞的利用變得更加穩定和高效。該工具的效能在於其能夠快速獲取 root 權限，並且在測試過程中不會導致系統崩潰。設計上選擇 C 語言來實現，這使得其在性能上有優勢，但也意味著需要使用者具備一定的 C 語言基礎。

由於 Dirty Frag 專注於特定的漏洞，其依賴性較低，這降低了使用的複雜性。技術風險方面，這種設計可能在未來的 Linux 更新中受到影響，因為核心的變更可能會導致漏洞的修復。整合方面，Dirty Frag 可以與現有的安全測試工具鏈結合使用，但在某些情況下可能需要額外的配置。整體而言，Dirty Frag 提供了一個高效且簡單的解決方案來測試 Linux 系統的安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指示和範例，安裝過程相對順暢，沒有明顯的坑。雖然沒有專門的入門指南，但使用者可以輕鬆理解如何使用。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 高成功率的漏洞利用，適合快速測試。
> - 簡單的使用流程，降低了學習門檻。
> - 活躍的社群支持，方便獲得幫助和更新。

> [!danger] 缺點
> - 僅針對特定 Linux 發行版，使用範圍有限。
> - 執行後需清理系統，增加了操作步驟。
> - 在未經授權的系統上使用可能違法。

> [!warning] 注意事項
> - 僅支援特定版本的 Linux 發行版，需確認系統版本。
> - 執行後需清理頁面快取，否則系統可能不穩定。
> - 不適合在未經授權的系統上測試，可能違反法律。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於利用其他漏洞來獲取權限，而 Dirty Frag 則是針對特定的 Linux 漏洞進行利用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更全面的漏洞利用框架，而 Dirty Frag 則專注於特定的 Dirty Frag 漏洞，使用上更為簡單。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於利用其他漏洞來獲取權限，而 Dirty Frag 則是針對特定的 Linux 漏洞進行利用。 | 如果需要一個更全面的漏洞利用框架，而不僅僅是針對特定漏洞的工具。 | medium，因為需要學習不同的使用方式和配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個更全面的漏洞利用框架，而 Dirty Frag 則專注於特定的 Dirty Frag 漏洞，使用上更為簡單。 | 如果需要更靈活的漏洞利用選擇，並且不介意更高的學習曲線。 | high，因為需要重新學習整個框架的使用方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **dirtyfrag** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於利用其他漏洞來獲取權限，而 Dirty Frag 則是針對特定的 Linux 漏洞進行利用。 | Boneyard 提供了一個更全面的漏洞利用框架，而 Dirty Frag 則專注於特定的 Dirty Frag 漏洞，使用上更為簡單。 |
> | 遷移成本 | - | medium，因為需要學習不同的使用方式和配置。 | high，因為需要重新學習整個框架的使用方法。 |
> | 適用場景 | 主要場景 | 如果需要一個更全面的漏洞利用框架，而不僅僅是針對特定漏洞的工 | 如果需要更靈活的漏洞利用選擇，並且不介意更高的學習曲線。 |

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

- **[HIGH]** 在某些 Linux 發行版上可能無法正常運行，需確認系統版本。
  - 解法：檢查 README 中的受影響版本，確保使用相容的系統。
- [MEDIUM] 執行後系統可能不穩定，需手動清理頁面快取。
  - 解法：使用提供的清理指令，或重啟系統。
- **[HIGH]** 未經授權的系統上使用可能違法，需謹慎操作。
  - 解法：僅在授權的測試環境中使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 安全研究人員進行漏洞測試 | 非常適合 | 提供了快速且高效的漏洞利用方式，適合安全測試。 |
| 系統管理員檢查伺服器安全性 | 適合 | 能夠快速驗證系統是否受到影響，並加強防護。 |
| 開發者進行漏洞利用研究 | 非常適合 | 簡單的使用流程降低了學習門檻，便於研究和實驗。 |
| 生產環境中的系統 | 不適合 | 不建議在生產環境中使用，存在安全風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的漏洞利用效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具需要在受控環境中運行，並且可能會影響系統穩定性。使用時需確保不在未經授權的系統上進行測試，並注意清理操作。

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
| Forks | 648 |
| Open Issues | 55 |
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

**社群活躍度**：社群活躍，熱門問題數量顯示出使用者的關注。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-10）
> **活躍天數** 3 天 · **最新 commit** update

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/V4bel/dirtyfrag/issues/28) | Please delay this until monday | 105 | 11 |
> | [#38](https://github.com/V4bel/dirtyfrag/issues/38) | Meme collection about dirtyfrag | 11 | 5 |
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

相關概念：[[安全漏洞]] · [[本地特權提升]] · [[Linux 漏洞利用]]

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
> const concepts = ["安全漏洞","本地特權提升","Linux 漏洞利用"];
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

- [[2026-05-13|2026-05-13]] — 再次上榜，4.3k stars
- [[2026-05-12|2026-05-12]] — 再次上榜，4.2k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，4.0k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，3.6k stars
- [[2026-05-09|2026-05-09]] — 首次收錄，2.9k stars
