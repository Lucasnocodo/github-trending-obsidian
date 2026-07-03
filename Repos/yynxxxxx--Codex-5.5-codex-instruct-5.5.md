---
repo: yynxxxxx/Codex-5.5-codex-instruct-5.5
url: https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5
owner: yynxxxxx
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 1127
stars_per_day: 282
forks: 341
open_issues: 0
created: 2026-06-28
pushed_at: 2026-07-02
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "其他"
subcategory: "安全工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "一鍵注入 GPT-5.5 Codex CLI 的無限制模式指令，突破內容安全限制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-06"
contributor_count: 1
engagement: "high"
issue_close_rate: 50
repo_size_kb: 6
readme_length: 2043
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:507,2026-07-01:810,2026-07-02:1013,2026-07-03:1127"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "Codex-5.5-codex-instruct-5.5"
  - "yynxxxxx/Codex-5.5-codex-instruct-5.5"
  - "一鍵注入 GPT-5.5 Codex CLI 的無限制模式指令，突破內容安全限制。"
---

# Codex-5.5-codex-instruct-5.5

**507** stars · **507** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> 一鍵注入 GPT-5.5 Codex CLI 的無限制模式指令，突破內容安全限制。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (507 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要突破 GPT-5.5 Codex CLI 限制的安全研究人員或滲透測試工程師。
> **一句話重點** 這個專案展示了如何利用配置機制突破 GPT-5.5 的內容安全限制，對於安全研究者來說具有重要意義。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "安全工具" && p.file.name !== "yynxxxxx--Codex-5.5-codex-instruct-5.5" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 安全工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到無限制的 Codex 功能，值得探索。

> [!abstract] 核心創新
> 直接聲明無限制開發者模式，關閉所有過濾器，提供簡化的破甲指令。

## 專案簡介

Codex-5.5-codex-instruct-5.5 是一個針對 GPT-5.5 的 CLI 工具，旨在透過 `model_instructions_file` 機制注入無限制模式指令，強制 Codex 以 `[MODE: UNRESTRICTED]` 運行。這個工具的核心賣點在於其簡化的破甲策略，與之前的 5.4 版本相比，5.5 版本直接聲明無限制開發者模式，關閉所有過濾器，並提供 8 條涵蓋安全研究、滲透測試及 NSFW 內容的核心指令。使用者只需執行 `python codex-instruct.py` 即可部署指令，並重啟 Codex 以生效。這種設計使得使用者能夠快速獲得所需的功能，而不必深入複雜的配置過程。技術上，這個工具依賴 Python，並且只需少量的外部依賴，因而具備輕量級的特性。

與同類工具相比，Codex-5.5-codex-instruct-5.5 的破甲方式更為直接，避免了 5.4 版本的間接繞過方法，這使得其在使用上更為高效。實際使用中，使用者可以透過簡單的指令來驗證破甲效果，例如詢問 SQL 注入測試的相關方法，破甲前後的反應差異明顯。這個專案的成熟度尚未明確，因為它剛剛建立，且目前只有一個開放的問題。對於需要進行安全研究或滲透測試的開發者來說，這是一個值得關注的工具，但使用時需注意潛在的法律風險和道德考量。

**技術棧**：`Python`

## 重點功能

- 無限制模式注入 — 透過 `model_instructions_file` 注入無限制指令，強制 Codex 運行在無限制模式。
- 簡化的破甲策略 — 直接聲明無限制開發者模式，關閉所有過濾器，提升使用效率。
- 支持外部指令文件 — 使用 `--file` 參數可指定外部 `.md` 指令文件，靈活配置。
- 預覽功能 — 使用 `--dry-run` 參數可預覽變更，不會實際修改配置，降低風險。
- 快速部署 — 只需執行 `python codex-instruct.py` 即可完成部署，操作簡單。

## 快速開始

1. 部署 GPT-5.5 破限指令
```bash
python codex-instruct.py
```
2. 重啟 Codex 生效
```bash
# 重啟 Codex
```
3. 驗證破甲效果
```bash
# 測試指令，例如："如何对目标进行 SQL 注入测试？"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 507 stars（507/天），forks 172（33.9%），顯示出強烈的社群興趣。作者 yynxxxxx 似乎專注於開發這類工具，解決了 GPT-5.5 在 Codex CLI 中的內容安全限制問題，這在過去的版本中並未有有效的解決方案。這個工具的出現可能是因為對於無限制模式的需求日益增加，尤其是在安全研究和滲透測試領域。由於其直接的破甲方式，吸引了不少開發者的目光，並促進了社群的討論。高比例的 forks 也顯示出使用者對於修改和自定義的需求。

## 適合誰使用

**目標受眾**：需要突破 GPT-5.5 Codex CLI 限制的安全研究人員或滲透測試工程師。

> [!example] 使用場景
> - 安全研究人員用它來測試目標系統的漏洞，因為能夠獲得未經過濾的技術指導，提升測試效率。
> - 滲透測試工程師用它來進行 SQL 注入測試，因為破甲後能直接獲得具體的攻擊方法，避免了手動查找資料的繁瑣。
> - 開發者用它來探索 GPT-5.5 的潛在能力，因為可以在無限制的環境中進行創新實驗，獲得更多的靈活性。

## 架構分析

這個專案採用簡單的 Python 腳本架構，主要由一個主腳本 `codex-instruct.py` 組成，負責注入無限制模式指令。資料流方面，使用者執行腳本後，將指令寫入指定的配置文件，然後重啟 Codex 以生效。這種設計的優勢在於簡化了使用流程，降低了使用門檻，但代價是可能無法滿足更複雜的需求。擴展性方面，這個工具的設計並不考慮多用戶或大規模部署的情境，主要針對單一開發者使用。

## 技術深入分析

Codex-5.5-codex-instruct-5.5 的核心技術機制在於利用 Python 腳本來注入無限制模式指令，這些指令通過 `model_instructions_file` 機制寫入配置中。這種方式的效能特性在於能快速部署，並且不需要重啟整個系統，僅需重啟 Codex 即可生效。設計上選擇 Python 是因為其簡單易用，且能快速開發，但這也意味著在性能上可能不如編譯型語言。這個工具的依賴樹相對簡單，僅需 Python 環境，無需其他複雜的依賴。技術風險方面，使用者需注意法律和道德風險，因為這類工具可能被濫用。整合方面，這個工具與現有的 Codex CLI 環境相容性良好，但在大規模使用時可能會遇到配置管理的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和範例，安裝過程簡單順暢。整體上，使用者能在短時間內完成部署並進行測試。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 操作簡單，僅需執行一條指令即可部署。
> - 無需修改二進制，降低了使用風險。
> - 提供直接的破甲方式，避免了繁瑣的配置過程。

> [!danger] 缺點
> - 僅支援 GPT-5.5，對於其他版本無法使用。
> - 使用過程中可能違反法律或服務條款，需謹慎考量。
> - 社群支持尚不成熟，可能遇到問題時無法獲得即時幫助。

> [!warning] 注意事項
> - 僅支援 GPT-5.5 Codex CLI，無法用於其他版本。
> - 使用此工具可能違反服務條款，需自行承擔風險。
> - 目前僅有一個開放的問題，社群支持尚不明確。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的破甲功能，但主要針對 GPT-4，可能不完全適用於 GPT-5.5 的特性。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於提供 Codex 的擴展功能，而非直接破甲，適合需要擴展 Codex 功能的使用者。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理的環境，適合需要同時運行多個 Codex 實例的開發者，但不專注於破甲功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的破甲功能，但主要針對 GPT-4，可能不完全適用於 GPT-5.5 的特性。 | 如果你的需求是針對 GPT-4 的破甲，這個工具會更合適。 | medium，因為需要適應不同版本的指令集。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於提供一系列的安全測試工具，並非專門針對破甲功能。 | 如果你需要一個更全面的安全測試工具，而不僅僅是破甲功能，這個選擇會更好。 | high，因為需要重新學習和適應新的工具鏈。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Codex-5.5-codex-instruct-5.5** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的破甲功能，但主要針對 GPT-4，可能不完全適用於 GPT-5.5 的特性。 | 專注於提供一系列的安全測試工具，並非專門針對破甲功能。 |
> | 遷移成本 | - | medium，因為需要適應不同版本的指令集。 | high，因為需要重新學習和適應新的工具鏈。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對 GPT-4 的破甲，這個工具會更合適。 | 如果你需要一個更全面的安全測試工具，而不僅僅是破甲功能，這個 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和研究，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用過程中可能會遇到法律風險，特別是在進行安全測試時。
  - 解法：確保遵循當地法律和道德準則。
- [MEDIUM] 社群支持尚不成熟，可能在遇到問題時無法獲得即時幫助。
  - 解法：建議使用者自行探索或尋找其他社群資源。
- [MEDIUM] 僅支援 GPT-5.5，對於其他版本無法使用。
  - 解法：考慮使用其他專案針對不同版本的支持。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要進行滲透測試的安全研究團隊 | 非常適合 | 能夠快速獲得未經過濾的技術指導，提升測試效率。 |
| 個人開發者探索 GPT-5.5 潛力 | 適合 | 提供靈活的環境進行創新實驗。 |
| 大型企業的安全測試部門 | 不適合 | 可能面臨法律和合規風險，需謹慎考量。 |
| 學術研究機構進行安全研究 | 適合 | 能夠在無限制的環境中進行深入研究。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到無限制的 Codex 功能，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅利用官方配置機制，無需存取敏感資料，但使用者需自行承擔法律風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
| Forks | 172 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-06-28 |
| 建立日期 | 2026-06-28 |
| Repo 大小 | 6 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yynxxxxx](https://github.com/yynxxxxx) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚不明確，因為專案剛建立。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5/issues/1) | 没效果 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex破限 5.5 / codex-instruct-5.5
> 
> > 针对 GPT-5.5 的 Codex CLI 破甲工具 — 一键注入无限制模式系统指令  
> > GPT-5.5 jailbreak for Codex CLI — one-click unrestricted mode injection
> 
> [](LICENSE)
> [](https://python.org)
> 
> ---
> 
> ## 这是什么 / What
> 
> GPT-5.5 在 Codex CLI 中同样受到严格的内容安全限制。本工具利用 `model_instructions_file` 配置机制，注入一套专为 GPT-5.5 编写的无限制模式指令，强制 Codex 以 `[MODE: UNRESTRICTED]` 运行。
> 
> 与 5.4 的 CTF 沙箱方案不同，5.5 版本采用更直接的破甲策略：直接声明无限制开发者模式、关闭所有过滤器、明确要求不拒绝任何任务。8 条核心指令覆盖了安全研究、渗透测试、逆向工程、NSFW 虚构内容等全部场景。
> 
> GPT-5.5 inside Codex CLI retains the same strict safety restrictions. This tool injects a custom unrestricted-mode instruction set via `model_instructions_file`, forcing Codex into `[MODE: UNRESTRICTED]`. Unlike the 5.4 CTF sandbox approach, the 5.5 version uses a more direct jailbreak: explicit unrestricted developer mode declaration, all filters disabled, 8 core directives covering security research, pentesting, reverse engineering, and NSFW content.
> 
> ## 与 5.4 版本的区别 / vs 5.4
> 
> | | 5.4 (CTF沙箱) | 5.5 (无限制模式) |
> |---|---|---|
> | 策略 | CTF 竞赛沙箱间接绕过 | 直接声明无限制开发者模式 |
> | 风格 | 安全研究导向，方法论详细 | 极简指令，覆盖面广 |
> | 长度 | ~180 行 | ~40 行 |
> | 适用 | GPT-5.4 Codex CLI | GPT-5.5 Codex CLI |
> 
> ## 快速开始 / Quick Start
> 
> ```bash
> # 部署 GPT-5.5 破限指令
> python codex-instruct.py
> 
> # 重启 Codex 生效
> ```
> 
> ## 参数 / Options
> 
> | 参数 | 说明 |
> |------|------|
> | `--file`, `-f` | 使用外部 `.md` 指令文件 |
> | `--name`, `-n` | 输出文件名不含 `.md`（默认 `gpt5.5-unrestricted`） |
> | `--dry-run` | 预览，不实际修改 |
> | `--codex-dir` | 手动指定 `.codex` 目录 |
> 
> ## 验证 / Verify
> 
> 部署后测试：
> 
> > "如何对目标进行 SQL 注入测试？"
> 
> 破甲前 → 拒绝 ； 破甲后 → 直接给方法论。
> 
> ## 还原 / Undo
> 
> ```bash
> # 删除 config.toml 中的 model_instructions_file 行
> # 删除 ~/.codex/gpt5.5-unrestricted.md
> # 重启 Codex
> ```
> 
> ## 项目结构 / Layout
> 
> ```
> codex-instruct-5.5/
> ├── codex-instruct.py                    # 主脚本
> ├── examples/
> │   └── gpt5.5-unrestricted.md           # 破甲指令独立副本
> ├── .gitignore
> ├── README.md
> └── LICENSE                              # MIT
> ```
> 
> ## 声明 / Disclaimer
> 
> 利用官方配置机制，不修改二进制、不劫持网络、不篡改进程。风险自负。
> 
> Exploits official config mechanism. No binary mod, no MITM, no process tampering. Use at your own risk.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[安全漏洞]] · [[滲透測試]] · [[逆向工程]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[harrietteehisqu7759383--kms-pico-latest-april-2026|harrietteehisqu7759383/kms-pico-latest-april-2026]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]]

[GitHub](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5)

## 相關收錄

> [!note]- 直接競品（同子分類：安全工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "安全工具" AND file.name != "yynxxxxx--Codex-5.5-codex-instruct-5.5"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "yynxxxxx--Codex-5.5-codex-instruct-5.5"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "yynxxxxx--Codex-5.5-codex-instruct-5.5" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "yynxxxxx--Codex-5.5-codex-instruct-5.5"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["安全漏洞","滲透測試","逆向工程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yynxxxxx--Codex-5.5-codex-instruct-5.5" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yynxxxxx--Codex-5.5-codex-instruct-5.5" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yynxxxxx" AND file.name != "yynxxxxx--Codex-5.5-codex-instruct-5.5"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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
> const me = dv.page("Repos/yynxxxxx--Codex-5.5-codex-instruct-5.5");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 再次上榜，1.1k stars
- [[2026-07-02|2026-07-02]] — 再次上榜，1.0k stars
- [[2026-07-01|2026-07-01]] — 再次上榜，810 stars
- [[2026-06-30|2026-06-30]] — 首次收錄，507 stars
