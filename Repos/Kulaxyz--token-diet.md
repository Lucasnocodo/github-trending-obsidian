---
repo: Kulaxyz/token-diet
url: https://github.com/Kulaxyz/token-diet
owner: Kulaxyz
owner_type: User
language: Shell
license: N/A
description: "Always-on token-efficiency skill for coding agents (Claude Code, Codex, Cursor, Windsurf, Cline). ~31% lower bill on average, no loss of correctness."
homepage: ""
stars: 508
stars_per_day: 24
forks: 4
open_issues: 0
created: 2026-07-03
pushed_at: 2026-07-04
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "為編碼代理提供持續的代幣效率技能，平均降低 31% 的費用，且不損失正確性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-09"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 28
readme_length: 4198
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:590,2026-07-06:590,2026-07-07:596,2026-07-08:611,2026-07-09:566,2026-07-10:555,2026-07-11:557,2026-07-12:560,2026-07-13:561,2026-07-14:549,2026-07-15:544,2026-07-16:530,2026-07-17:531,2026-07-18:527,2026-07-19:531,2026-07-20:533,2026-07-21:525,2026-07-22:524,2026-07-23:519,2026-07-24:508,2026-07-25:508"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "token-diet"
  - "Kulaxyz/token-diet"
  - "為編碼代理提供持續的代幣效率技能，平均降低 31% 的費用，且不損失正確性。"
---

# token-diet

**508** stars · **24** stars/天 · 建立 21 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/Kulaxyz--token-diet");
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
> 為編碼代理提供持續的代幣效率技能，平均降低 31% 的費用，且不損失正確性。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (24 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 20 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要降低 AI 代幣使用成本的開發團隊，特別是在使用多個編碼代理的情況下。
> **一句話重點** 這個專案提供了一個創新的方式來降低 AI 代幣使用成本，特別適合需要大量生成代碼的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Kulaxyz--token-diet" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、1 小時整合，得到顯著的代幣成本降低，值得採用。

> [!abstract] 核心創新
> 通過持續運行的技能來自動修剪代幣，實現平均 31% 的費用節省。

## 專案簡介

這個專案的核心在於透過一種持續運行的技能來提高編碼代理（如 Claude Code、Codex 等）的代幣效率。使用者只需安裝後，該技能會自動在整個會話中修剪不必要的代幣，從而減少輸出內容的冗餘。例如，使用者可以透過 `curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash` 指令快速安裝，並可選擇不同的模式（如 `--ultra`）來調整輸出精簡程度。這樣的設計使得在保持正確性的同時，能夠顯著降低使用成本，平均可達到 31% 的費用節省，並且在某些情況下可高達 54%。技術上，它利用了會話開始時的鉤子來持續應用這一技能，這樣的設計確保了使用者無需每次都手動啟用。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，token-diet 更加專注於代幣的精簡，而不是功能的擴展，這使得它在處理代幣成本時更具優勢。實際使用中，這個工具能夠在不同類型的會話中提供穩定的輸出節省，並且不會影響到正確性，這是其最大的賣點。使用者在進行大量代碼生成或測試時，能夠感受到明顯的成本降低，特別是在輸出密集的情境下。這個專案的成熟度目前看起來是 beta 階段，因為它剛剛建立不久，但已經顯示出良好的使用潛力。對於需要控制代幣成本的開發團隊來說，這是一個值得考慮的工具，尤其是在大規模使用 AI 代理的情況下。

**技術棧**：`Shell` · `JavaScript` · `Python`

## 重點功能

- 持續運行的代幣效率技能 — 自動修剪會話中的冗餘代幣，無需手動啟用。
- 多種模式選擇 — 使用者可選擇 `on`、`lite`、`ultra` 或 `off` 模式來調整輸出精簡程度。
- 針對不同代理的支持 — 支援 Claude Code、Codex、Cursor、Windsurf、Cline 等多種編碼代理。
- 批量獨立調用工具 — 在迭代過程中，能夠針對性地進行測試運行。
- 高效的輸出節省 — 在不同會話類型中，平均可達到 31% 的費用節省。

## 快速開始

1. 安裝 token-diet
```bash
curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash
```
2. 選擇安裝模式
```bash
curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash -s -- --ultra
```
3. 啟用或禁用技能
```bash
/token-diet [on|lite|ultra|off]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天就累積 508 stars（約 24 stars/天），forks 僅 4（0.8%），顯示出相對較低的實際修改需求。這個專案的作者 Kulaxyz 似乎專注於提升 AI 代理的效率，解決了使用者在代幣成本上升的痛點。之前，開發者在使用 AI 生成代碼時，往往面臨高昂的代幣消耗，而這個工具提供了一個有效的解決方案。社群對於這個工具的反應似乎還在觀望階段，因為目前的 forks 數量不高，可能是因為這個工具剛推出不久，尚未廣泛應用。

## 適合誰使用

**目標受眾**：需要降低 AI 代幣使用成本的開發團隊，特別是在使用多個編碼代理的情況下。

> [!example] 使用場景
> - 後端工程師用它來減少 AI 生成代碼的代幣消耗，因為這樣可以節省每月的開支，特別是在大量生成代碼的情況下。
> - 測試工程師用它來優化測試用例的生成，因為這樣能夠在保持測試準確性的同時，降低測試過程中的代幣使用。
> - 產品經理用它來快速獲取技術建議，因為它能夠提供精簡的回應，讓決策過程更高效。

## 架構分析

這個專案的架構設計為一個持續運行的技能，通過會話開始時的鉤子來自動應用。這意味著使用者不需要每次都手動啟用，這樣的設計提高了使用的便利性。資料流方面，技能會在會話中持續監控輸出，並根據設定的模式進行代幣的修剪。這樣的設計選擇使得使用者能夠在不同的會話中獲得一致的代幣效率，然而，這也意味著在某些特定情況下，使用者可能需要手動調整模式以達到最佳效果。擴展性方面，這個架構能夠支持多種編碼代理，但在未來可能需要針對新代理進行調整，以保持兼容性。

## 技術深入分析

這個專案的核心技術機制在於持續運行的技能，透過會話開始時的鉤子來自動應用，這樣的設計使得使用者無需每次都手動啟用。效能方面，該工具在不同類型的會話中提供了穩定的輸出節省，特別是在輸出密集的情境下，平均可達到 31% 的費用節省。設計取捨方面，選擇這種持續運行的方式使得使用者能夠獲得一致的代幣效率，但也意味著在某些特定情況下，使用者可能需要手動調整模式以達到最佳效果。技術風險方面，這種設計可能在未來面臨擴展性問題，特別是當新代理出現時，可能需要針對性調整。整合分析方面，這個工具能夠與主流的編碼代理良好整合，但在某些情況下，可能需要額外的適配器或包裝來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝指令和使用範例。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 能夠顯著降低代幣使用成本，平均可達 31%。
> - 持續運行的設計提高了使用的便利性，無需手動啟用。
> - 支持多種編碼代理，適用範圍廣泛。

> [!danger] 缺點
> - 目前僅支援特定的編碼代理，未來可能需要擴展。
> - 在某些情況下，可能需要手動調整模式以達到最佳效果。
> - 尚未廣泛測試於所有可能的使用場景，可能存在未知的邊界情況。

> [!warning] 注意事項
> - 目前僅支援特定的編碼代理，如 Claude Code 和 Codex。
> - 在某些情況下，可能需要手動調整模式以達到最佳效果。
> - 尚未廣泛測試於所有可能的使用場景，可能存在未知的邊界情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多種代理的技能，但不專注於代幣效率，適合需要多樣化功能的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種代理的擴展性，但在代幣成本控制上不如 token-diet 效率。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多種代理的技能，但不專注於代幣效率。 | 如果你的團隊需要多樣化功能的代理，這個工具會更合適。 | medium，因為需要重新調整使用流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供了多種代理的擴展性，但在代幣成本控制上不如 token-diet 效率。 | 如果你的團隊已經在使用多種代理，並需要擴展功能，這個工具會更適合。 | high，因為需要重新設計整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **token-diet** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成多種代理的技能，但不專注於代幣效率。 | 提供了多種代理的擴展性，但在代幣成本控制上不如 token-diet 效率。 |
> | 遷移成本 | - | medium，因為需要重新調整使用流程。 | high，因為需要重新設計整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要多樣化功能的代理，這個工具會更合適。 | 如果你的團隊已經在使用多種代理，並需要擴展功能，這個工具會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些代理中，可能需要手動調整模式以達到最佳效果
  - 解法：根據實際需求調整模式設定
- **[HIGH]** 尚未廣泛測試於所有可能的使用場景，可能存在未知的邊界情況
  - 解法：在使用前進行小範圍測試
- [MEDIUM] 安裝過程中可能遇到的網路問題
  - 解法：確保網路連接穩定，必要時重試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效控制代幣成本，適合小型團隊的預算限制。 |
| 大型企業的 AI 代碼生成系統 | 普通 | 雖然能夠降低成本，但可能需要更複雜的功能支持。 |
| 個人開發者的 AI 實驗專案 | 非常適合 | 能夠快速實現代幣效率，適合個人開發者的需求。 |
| 需要高頻次調用的商業應用 | 不適合 | 在高頻次調用的情況下，可能需要更穩定的解決方案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到顯著的代幣成本降低，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Code、Codex 等編碼代理搭配使用，通常在開發階段進行集成。具體來說，在使用 Claude Code 的專案中，可以通過安裝 token-diet 來自動優化代碼生成過程，指令為 `curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash`。該工具與主流的 CI/CD 工具（如 GitHub Actions）相容，但在某些情況下，可能需要額外的適配器來確保兼容性。整合過程中，最常見的問題是安裝過程中的網路問題，建議確保網路連接穩定。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
| Forks | 4 |
| Open Issues | 0 |
| 最後推送 | 2026-07-04 |
| 建立日期 | 2026-07-03 |
| Repo 大小 | 28 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kulaxyz/token-diet) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 51
>     "JavaScript" : 27
>     "Python" : 22
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kulaxyz](https://github.com/Kulaxyz) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有 commit 活動。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-03 ~ 2026-07-04）
> **活躍天數** 2 天 · **最新 commit** feat(install): support curl | bash — fetch source files from repo when piped

## README 摘錄

> [!info]- 展開查看原文 README
> # token-diet
> 
> Always-on token-efficiency skill for coding agents — **Claude Code, Codex, Cursor,
> Windsurf, Cline**. Trims tokens across the whole session (replies, docs, tests,
> code, context, tool use) without losing correctness. **≈31% lower bill on average**
> (−17% to −54% by session type) and **−30% to −81% output** on real Sonnet 5 runs.
> 
> *trim the fat, keep the muscle.*
> 
> ## Install
> 
> ```bash
> # one-liner — auto-detects Claude Code, Codex, etc.:
> curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash
> 
> # pass options through `bash -s --`, e.g. the telegraphic level:
> curl -fsSL https://raw.githubusercontent.com/Kulaxyz/token-diet/main/install.sh | bash -s -- --ultra
> ```
> 
> Or clone and run `./install.sh` (`--ultra` telegraphic chat · `--uninstall` remove).
> Target one agent with `-a claude|codex|cursor|windsurf|cline|all|print`, or add
> `--project` to install into the current repo instead of globally. It runs
> always-on — no per-message command — but `/token-diet [on|lite|ultra|off]` also
> works on demand.
> 
> ## What it does
> 
> - **Replies** — lead with the answer; no preamble ("Sure! Here's…") or postamble
>   ("Let me know…"); report deltas, not narration.
> - **Docs / memory / hand-offs / plans / comments** — minimum words that still say
>   everything; comment the non-obvious *why*, not the code.
> - **Tests** — only key + critical/edge paths, grouped; ≤10 per session; never skip
>   money/auth/data-loss.
> - **Code** — build only what's asked (YAGNI); concise but idiomatic; no dead code;
>   never cryptic.
> - **Context** — grep before you read; read only the lines you need, never whole
>   files; batch reads; fewer turns; never re-read a just-edited file.
> - **Tools** — batch independent calls; **stop the moment you have enough to act**;
>   targeted test runs while iterating.
> - **Sub-agents** — delegate broad *bounded* search to a cheaper model; keep
>   correctness-sensitive verification yourself; tight, complete instructions.
> - **Guardrails** — concision applies to output, never to reasoning: correctness,
>   critical test coverage, and verbatim code/commands/errors are off-limits.
> 
> ## Levels
> 
> `on` (default — everything above) · `lite` (communication + artifacts only) ·
> `ultra` (telegraphic chat/progress; code, tests, docs stay precise) · `off`.
> 
> ## Before / After — `ultra` chat reply (token counts measured, `o200k_base`)
> 
> **Normal — 102 tokens:** "Great question! The reason your Stripe webhook signature
> verification is failing is that you're passing the already-parsed JSON body into
> `constructEvent`. Stripe computes the signature over the exact raw bytes of the
> request, so once your framework has parsed the body into JSON the bytes no longer
> match and verification fails. What you want to do is read the raw request body
> instead — for example with `req.text()` in a Next.js route handler — and pass that
> string to `constructEvent`. Let me know if you'd like a code snippet!"
> 
> **token-diet `ultra` — 34 tokens (−66%):** "`constructEvent` verifies over raw
> bytes → parsed JSON fails. Read raw body (`req.text()` / Buffer), pass that to
> `constructEvent`. Fix at `webhook/route.ts`."
> 
> Same fix, same identifiers, same path — only filler gone.
> 
> ## Numbers (real Sonnet 5 runs)
> 
> Output savings are consistent; the bill win depends on how much of the session is
> output vs. unavoidable file-reading:
> 
> | Session type | Output | Bill |
> |---|--:|--:|
> | Output-heavy (advice, planning, explanation) | −81% | −54% |
> | Code change + tests (`nestjs/nest`, 1673 files) | −49% | −22% |
> | Read-heavy comprehension | −30% | −17% |
> | **Average** | **−53%** | **−31%** |
> 
> Average is unweighted across the three scenarios; the 54% is best-case, not
> typical. Correctness held in every run. Method + full tables: [`bench/RESULTS.md`](bench/RESULTS.md);
> reproduce with `ANTHROPIC_API_KEY=… node bench/bench.mjs`.
> 
> ## How always-on works
> 
> A skill body loads on-demand, so to make it *always* apply the installer injects
> the directive through a channel that fires every session: a `SessionStart` hook
> (Claude Code), or an always-loaded context file (Codex `AGENTS.md`,
> Cursor/Windsurf/Cline rule files). Same trick [caveman](https://github.com/JuliusBrussee/caveman) uses.

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[CopilotKit--OpenTag|CopilotKit/OpenTag]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]]

[GitHub](https://github.com/Kulaxyz/token-diet)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "Kulaxyz--token-diet" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kulaxyz--token-diet" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kulaxyz--token-diet" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kulaxyz" AND file.name != "Kulaxyz--token-diet"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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
> const me = dv.page("Repos/Kulaxyz--token-diet");
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

> **2026-07-06** — 首次收錄
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

- [[2026-07-06|2026-07-06]] — 首次收錄，590 stars
