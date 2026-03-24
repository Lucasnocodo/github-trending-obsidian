---
repo: mattprusak/autoresearch-genealogy
url: https://github.com/mattprusak/autoresearch-genealogy
owner: mattprusak
owner_type: User
language: N/A
license: MIT
description: "Structured prompts, vault templates, and archive guides for AI-assisted genealogy research. Built for Claude Code."
homepage: ""
stars: 905
stars_per_day: 181
forks: 76
open_issues: 4
created: 2026-03-18
pushed_at: 2026-03-18
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "其他"
subcategory: "家譜研究"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供結構化提示、資料庫模板和檔案指南，以協助 AI 進行家譜研究。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-31"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 154
readme_length: 5775
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:878,2026-03-24:905"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "autoresearch-genealogy"
  - "mattprusak/autoresearch-genealogy"
  - "提供結構化提示、資料庫模板和檔案指南，以協助 AI 進行家譜研究。"
---

# autoresearch-genealogy

**878** stars · **220** stars/天 · 建立 4 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> 提供結構化提示、資料庫模板和檔案指南，以協助 AI 進行家譜研究。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (220 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望利用 AI 加速家譜研究的個人或團隊，尤其是對資料驗證有高要求的使用者。
> **一句話重點** 這個專案不僅提供工具，還提供了一整套方法論來提升家譜研究的準確性和效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "家譜研究" && p.file.name !== "mattprusak--autoresearch-genealogy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 家譜研究 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，能夠獲得高效的家譜研究工具，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於結構化的自動化研究流程，強調資料的驗證和交叉參考。

## 專案簡介

這個專案專注於利用 AI 加速家譜研究，特別是透過 Claude Code 的自動研究能力。使用者首先需要從 repo 中克隆並將 `vault-template/` 文件夾複製到 Obsidian 或其他 Markdown 編輯器中，然後填寫 `Family_Tree.md`，接著掃描任何實體文件並將內容粘貼到 Claude Code 中運行。這樣的設計使得使用者能夠系統化地擴展家譜，並進行資料的驗證與交叉參考。這個工具的賣點在於其結構化的自動化研究流程，能夠在每次迭代後進行驗證，並記錄搜尋結果，包括未找到的資料，這對於家譜研究的準確性至關重要。

技術上，這個專案包含 12 個自動研究提示，每個提示都設計了明確的目標和驗證條件，並能自動搜尋網路資料，更新使用者的資料庫。這些提示涵蓋了從家譜擴展到 DNA 分析的多個方面，並且依賴於 Markdown 格式的資料庫，這使得資料的可讀性和可操作性大幅提升。



與其他家譜工具相比，如 Ancestry 或 MyHeritage，這個專案的優勢在於其開放性和自動化程度，使用者可以自定義提示和工作流程，而不僅僅依賴於平台提供的功能。此外，這個專案的設計考慮到了資料來源的多樣性，並強調了資料的驗證與交叉參考，這是許多傳統工具所忽略的。

實際使用中，這個工具能夠處理多達 105 個文件，涵蓋 9 代家族資料，並且能夠系統化地解決開放的研究問題。社群活躍度相對較高，雖然目前只有 4 個開放問題，但解決率為 20%，顯示出社群對於問題的回應能力。

這個專案目前處於早期階段，適合對家譜研究有興趣的使用者，特別是那些希望利用 AI 來提升研究效率的人。未來 6 個月內，預期將會有更多的提示和工作流程被加入，進一步擴展其功能性。

## 重點功能

- 12 種自動研究提示 — 每個提示設計了明確的目標和驗證條件，能夠自動搜尋網路資料。
- 完整的 Obsidian vault 模板 — 包含 19 個文件，適合快速開始家譜研究。
- 24 種國家和地區的檔案指南 — 提供尋找資料的具體建議，區分免費和付費資源。
- 7 種逐步指導工作流程 — 包含從開始到資料驗證的完整流程，幫助使用者快速上手。
- 強調資料驗證 — 每次迭代後進行交叉參考，確保資料的準確性和可靠性。

## 快速開始

1. 克隆此 repo
```bash
git clone https://github.com/mattprusak/autoresearch-genealogy.git
```
2. 將 vault-template 文件夾複製到你的 Obsidian vault
```bash
cp -r autoresearch-genealogy/vault-template/ ~/path/to/your/obsidian/vault/
```
3. 填寫 Family_Tree.md 文件
```bash
open ~/path/to/your/obsidian/vault/Family_Tree.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 878 stars（220/天），forks 73（8.3%），顯示出不錯的增長潛力。作者 mattprusak 之前的專案有關於自動化研究，這次專案解決了家譜研究中資料驗證的痛點，提供了一個結構化的框架來進行自動化研究。社群中對於家譜研究的需求持續增長，尤其是結合 AI 的方法能夠提升效率，這使得這個專案在短時間內獲得了關注。

## 適合誰使用

**目標受眾**：希望利用 AI 加速家譜研究的個人或團隊，尤其是對資料驗證有高要求的使用者。

> [!example] 使用場景
> - 家譜研究者用它來自動擴展家族樹，因為傳統方法耗時且容易出錯，這個工具能夠自動搜尋資料並進行驗證。
> - AI/科技愛好者用它來探索自動化研究在人文領域的應用，因為它提供了具體的實作範例，能夠激發新的研究思路。
> - 對家族歷史有興趣的個人用它來整理和分析自己的家族資料，因為它提供了結構化的模板和指導，讓資料整理變得更簡單。

## 架構分析

這個專案採用的是一個模組化的設計，將提示、模板和工作流程分開，使得使用者能夠根據自己的需求進行調整。資料流從使用者填寫的家族樹開始，然後通過自動提示進行資料擴展和驗證。這樣的設計使得使用者能夠靈活地選擇需要的功能，而不必被固定的流程限制。選擇 Markdown 作為資料格式的好處在於其可讀性和易於編輯，但這也限制了對其他格式的支持。整體架構的擴展性良好，但在處理大量資料時可能會遇到性能瓶頸，特別是在資料驗證的過程中。

## 技術深入分析

這個專案的核心技術機制在於其自動化研究提示，這些提示設計了明確的目標、驗證條件和迭代流程。使用者可以透過這些提示自動搜尋網路資料，並在每次迭代後進行資料驗證，這對於家譜研究的準確性至關重要。這些提示的設計靈感來自於 Andrej Karpathy 的自動化研究概念，強調了目標導向的迴圈。從效能上來看，這個工具能夠處理多達 105 個文件，涵蓋 9 代的資料，這對於大多數家庭研究者來說已經相當可觀。選擇 Markdown 作為資料格式的好處在於其可讀性和易於編輯，但這也限制了對其他格式的支持。技術風險方面，依賴於 Claude Code 可能會導致未來的功能擴展受限，特別是在資料來源的多樣性上。整合方面，這個專案與 Obsidian 的整合非常友好，但對於其他工具的支持則相對較弱，這可能會影響使用者的選擇。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的使用範例，安裝過程順暢，沒有明顯的坑。提供了良好的入門指導，讓使用者能夠快速上手。文件目前僅提供英文版本，對於非英語使用者可能會造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 提供結構化的自動化研究流程，能夠有效提升研究效率。
> - 強調資料的驗證和交叉參考，確保資料的準確性。
> - 模組化設計，使用者可以根據需求進行調整。

> [!danger] 缺點
> - 對於不熟悉 Markdown 的使用者有一定的學習曲線。
> - 目前功能主要針對英語資料，對其他語言支持有限。
> - 需要依賴 Claude Code 進行自動化，限制了使用者的選擇。

> [!warning] 注意事項
> - 僅支援 Markdown 格式的資料庫，對於其他格式的兼容性較差。
> - 需要使用 Claude Code 進行自動化，對於不熟悉此工具的使用者有一定學習曲線。
> - 目前的功能主要針對英語資料，對於其他語言的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這個專案專注於家譜研究，而 karpathy 的專案則是更廣泛的自動化研究框架，適用於多個領域。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 主要用於資料同步，而 autoresearch-genealogy 專注於資料的自動擴展和驗證，適合家譜研究的特定需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Ancestry | Ancestry 提供了全面的家譜資料庫和搜尋工具，而 autoresearch-genealogy 則專注於自動化研究和資料驗證，適合需要高準確性的研究者。 | 如果你的團隊已經在使用 Ancestry 並需要其龐大的資料庫，那麼選擇 Ancestry 會更合適。 | medium，因為需要將資料從一個平台轉移到另一個平台。 |
| MyHeritage | MyHeritage 提供了類似的家譜建構工具，但 autoresearch-genealogy 更加強調資料的驗證和自動化過程。 | 如果你需要一個更強大的資料庫和社群支持，MyHeritage 會是更好的選擇。 | medium，因為需要將資料從一個平台轉移到另一個平台。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **autoresearch-genealogy** | **Ancestry** | **MyHeritage** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Ancestry 提供了全面的家譜資料庫和搜尋工具，而 autoresearch-genealogy 則專注於自動化研究和資料驗證，適合需要高準確性的研究者。 | MyHeritage 提供了類似的家譜建構工具，但 autoresearch-genealogy 更加強調資料的驗證和自動化過程。 |
> | 遷移成本 | - | medium，因為需要將資料從一個平台轉移到另一個平台。 | medium，因為需要將資料從一個平台轉移到另一個平台。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Ancestry 並需要其龐大的資料 | 如果你需要一個更強大的資料庫和社群支持，MyHeritage |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人研究或小型專案試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用 Claude Code 時，可能會遇到 API 限制，導致搜尋結果不完整
  - 解法：考慮使用其他 AI 工具進行資料擴展
- [MEDIUM] Markdown 格式的兼容性問題，可能會導致某些資料無法正確顯示
  - 解法：確保所有資料都符合 Markdown 格式
- [MEDIUM] 對於非英語資料的支持有限，可能會影響研究的全面性
  - 解法：尋找其他語言的資源或工具

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型家譜研究團隊 | 非常適合 | 提供了結構化的工具和流程，能夠提升研究效率和準確性。 |
| 大型家譜研究機構 | 普通 | 雖然工具功能強大，但可能需要更多的資料庫支持。 |
| 個人家族歷史愛好者 | 非常適合 | 能夠快速上手並獲得有效的研究結果。 |
| 需要多語言支持的國際研究團隊 | 不適合 | 目前主要針對英語資料，對其他語言支持有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，能夠獲得高效的家譜研究工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴的第三方工具需自行評估其安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
| Forks | 73 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-18 |
| Repo 大小 | 154 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mattprusak/autoresearch-genealogy) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mattprusak](https://github.com/mattprusak) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量不多，解決率為 20%。
**連結**：[文件](https://github.com/mattprusak/autoresearch-genealogy)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** Update README to reflect full 81-file repo, add .gitignore

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/mattprusak/autoresearch-genealogy/issues/1) | Ну | 1 | 1 |
> | [#5](https://github.com/mattprusak/autoresearch-genealogy/issues/5) | Что ты умеешь? | 0 | 0 |
> | [#4](https://github.com/mattprusak/autoresearch-genealogy/issues/4) | Related: MEEET World — 707 agents doing autonomous research  | 0 | 0 |
> | [#2](https://github.com/mattprusak/autoresearch-genealogy/issues/2) | Please, create my genealogy tree with surname Skverys | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # autoresearch-genealogy
> 
> Structured prompts, vault templates, and research workflows for AI-assisted genealogy research. Built for Claude Code, adaptable to any AI tool or manual workflow.
> 
> This project extracts and generalizes methods developed during a real genealogy research effort that produced 105 files spanning 9 generations across 6 family lines, using Claude Code's autonomous research capabilities.
> 
> ## Who This Is For
> 
> - **Genealogy researchers** who want to use AI to accelerate their family history work without sacrificing source rigor
> - **AI/tech enthusiasts** who want a concrete example of autonomous research loops applied to a humanities domain
> - **Anyone** who has a box of old photos, a DNA test, and unanswered questions about their family
> 
> ## Quick Start
> 
> 1. Clone this repo
> 2. Copy the `vault-template/` folder into your Obsidian vault (or any markdown editor)
> 3. Fill in `Family_Tree.md` with what you already know (start with yourself, work backward)
> 4. Scan any physical documents you have (certificates, photos, letters)
> 5. Open Claude Code, paste the contents of `prompts/01-tree-expansion.md`, and run it
> 6. Review the results, then run `prompts/02-cross-reference-audit.md` to verify
> 
> See `workflows/getting-started.md` for the full walkthrough.
> 
> ## What's Included
> 
> ### Prompts (`prompts/`)
> 
> 12 autoresearch prompts designed for Claude Code's `/autoresearch` command. Each defines a Goal, Metric, Direction, Verify condition, Guard rails, Iterations, and Protocol. They run autonomously: searching the web, updating your vault, and verifying their own work.
> 
> | Prompt | Purpose |
> |---|---|
> | 01-tree-expansion | Push every branch as far back as possible using web research |
> | 02-cross-reference-audit | Find and fix discrepancies between your tree and source documents |
> | 03-findagrave-sweep | Locate Find a Grave memorials for every deceased ancestor |
> | 04-gedcom-completeness | Ensure your GEDCOM file matches your vault data |
> | 05-source-citation-audit | Verify every person file cites at least two independent sources |
> | 06-unresolved-persons | Identify and resolve unnamed people mentioned in your documents |
> | 07-timeline-gap-analysis | Find life events where records should exist but have not been found |
> | 08-open-question-resolution | Systematically attack every open research question |
> | 09-bygdebok-extraction | Extract data from digitized local history books (any country) |
> | 10-colonial-records-search | Search for colonial American ancestors in pre-1800 records |
> | 11-immigration-search | Locate passenger manifests and naturalization records |
> | 12-dna-chromosome-analysis | Analyze per-chromosome ancestry data to map genetic segments |
> 
> ### Vault Template (`vault-template/`)
> 
> 19 files: a complete Obsidian vault starter kit with YAML frontmatter, plain markdown, readable anywhere.
> 
> - **Core files**: Family tree, research log, open questions, data inventory, timeline, genetic profile, chromosome painting, witness network, unresolved persons, research strategy
> - **Templates**: Person, transcription, certificate, postcard, region, surname, hypothesis, draft letter
> 
> ### Archive Guides (`archives/`)
> 
> 24 country and region-specific guides covering where to find records, what is free vs paid, and what AI tools can access directly vs what requires a browser.
> 
> **Europe**: Ireland, England/Wales, Scotland, France, Italy, Spain/Portugal, Germany, Netherlands, Austria, Hungary, Norway, Sweden, Poland, Russia/Ukraine
> 
> **Americas**: USA (colonial, immigration, census, vital records), African American, Canada, Mexico/Latin America
> 
> **Oceania**: Australia/New Zealand
> 
> **Cross-national**: Jewish genealogy
> 
> ### Reference Guides (`reference/`)
> 
> 9 methodology documents: confidence tiers, source hierarchy, DNA interpretation guardrails, naming conventions (patronymics, farm names, przydomki), GEDCOM format guide, common pitfalls, glossary, AI capabilities assessment, and the case for autoresearch in genealogy.
> 
> ### Workflows (`workflows/`)
> 
> 7 step-by-step guides: getting started, OCR pipeline, new ancestor intake, document triage, oral history protocol, discrepancy resolution, phase planning.
> 
> ### Examples (`examples/`)
> 
> 6 anonymized worked examples showing autoresearch in action: tree expansion session, cross-reference audit, DNA-to-genealogy mapping, name resolution, colonial deep dive.
> 
> ## Philosophy
> 
> **Structured autonomous research with mechanical verification, not AI guessing.**
> 
> Genealogy is different from most AI tasks. There is no compiler. Sources disagree with each other. Confidence is probabilistic, not binary. A name that appears as "Sakkarias" in one record and "Zacharias" in another might both be correct. A date listed as 1820 in one source and 1925 in another is almost certainly wrong somewhere.
> 
> The autoresearch approach adapts to this by:
> 
> - **Defining measurable metrics** (count of sourced claims, count of resolved questions, count of remaining discrepancies)
> - **Requiring verification after every iteration** (cross-reference audit, not just accumulation)
> - **Logging negative results** (what you searched for and did not find is as important as what you found)
> - **Maintaining confidence tiers** (Strong Signal / Moderate Signal / Speculative) rather than treating all claims as equal
> 
> This is inspired by Andrej Karpathy's autoresearch concept: autonomous goal-directed loops where the AI modifies, verifies, keeps or discards, and repeats. Applied to genealogy, the "compiler" is replaced by cross-referencing independent sources.
> 
> ## License
> 
> MIT. See `LICENSE`.
> 
> ## Contributing
> 
> Contributions welcome. If you have prompts, workflows, or archive guides that worked for your research, open a PR. Please ensure all examples use placeholder names (no real family data).

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[tanweai--pua|tanweai/pua]] · [[wanshuiyin--Auto-claude-code-research-in-sleep|wanshuiyin/Auto-claude-code-research-in-sleep]]

[GitHub](https://github.com/mattprusak/autoresearch-genealogy)

## 相關收錄

> [!note]- 直接競品（同子分類：家譜研究）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "家譜研究" AND file.name != "mattprusak--autoresearch-genealogy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "mattprusak--autoresearch-genealogy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "mattprusak--autoresearch-genealogy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "mattprusak--autoresearch-genealogy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mattprusak--autoresearch-genealogy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mattprusak--autoresearch-genealogy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mattprusak" AND file.name != "mattprusak--autoresearch-genealogy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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
> const me = dv.page("Repos/mattprusak--autoresearch-genealogy");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-24|2026-03-24]] — 再次上榜，905 stars
- [[2026-03-23|2026-03-23]] — 首次收錄，878 stars
