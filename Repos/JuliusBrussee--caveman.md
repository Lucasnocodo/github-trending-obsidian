---
repo: JuliusBrussee/caveman
url: https://github.com/JuliusBrussee/caveman
owner: JuliusBrussee
owner_type: User
language: Python
license: MIT
description: "🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman"
homepage: "https://juliusbrussee.github.io/caveman/"
stars: 18629
stars_per_day: 2661
forks: 843
open_issues: 37
created: 2026-04-04
pushed_at: 2026-04-11
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "Prompt Engineering"
release_tag: "v1.5.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "透過簡化語言，顯著減少 LLM 的 token 使用，保持技術準確性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-14"
contributor_count: 5
engagement: "low"
issue_close_rate: 40
repo_size_kb: 2313
readme_length: 9997
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:5957,2026-04-08:5973,2026-04-09:7529,2026-04-09:7541,2026-04-10:8851,2026-04-10:8865,2026-04-11:13466,2026-04-11:13486,2026-04-12:18629"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/anthropic"
  - "topic/caveman"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "caveman"
  - "JuliusBrussee/caveman"
  - "透過簡化語言，顯著減少 LLM 的 token 使用，保持技術準確性。"
---

# caveman

**18.6k** stars · **2.7k** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/JuliusBrussee--caveman");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.5.1` `easy-install`

`ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` `skill` `tokens`

> [!summary] 一句話摘要
> 透過簡化語言，顯著減少 LLM 的 token 使用，保持技術準確性。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.7k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在開發過程中快速生成簡潔技術回應的工程師。
> **一句話重點** Caveman 不僅是簡化語言的工具，更是提升開發效率的利器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Prompt Engineering" && p.file.name !== "JuliusBrussee--caveman" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Prompt Engineering 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到顯著的 token 節省，值得一試。

> [!abstract] 核心創新
> Caveman 能夠在不損失技術準確性的情況下，顯著減少 LLM 的 token 使用。

## 專案簡介

Caveman 是一個針對 Claude Code 和 Codex 的插件，透過簡化語言來減少輸出 token 數量，平均可節省約 65% 的 token，同時保持技術準確性。使用者可以透過簡單的指令 `/caveman` 或 `$caveman` 來啟動這個模式，並選擇不同的簡化程度，如 Lite、Full 和 Ultra。這種設計不僅提升了可讀性，還加快了回應速度，因為生成的 token 數量減少。技術上，Caveman 利用簡單的語法規則來達成這一點，並且可以在多個平台上安裝，像是 Claude Code、Codex、Gemini CLI 等。與傳統的 LLM 輸出相比，Caveman 的優勢在於它能在不損失技術內容的情況下，顯著減少冗餘語言。

這使得它特別適合需要快速回應和高效溝通的開發環境。使用者可以選擇不同的模式以適應不同的需求，並且可以在每次會話中保持活躍。Caveman 的設計理念是基於一項研究，該研究表明，簡短的回應能提高準確性，這一點在實際應用中得到了驗證。這個工具的社群活躍度不錯，開發者持續更新，並且有多個開源貢獻者參與。整體來看，Caveman 是一個值得考慮的工具，特別是對於需要高效溝通的開發團隊。

**技術棧**：`Python` · `PowerShell` · `Shell` · `JavaScript`

## 重點功能

- 多種模式支持 — 提供 Lite、Full 和 Ultra 三種模式以適應不同需求。
- 高效 token 節省 — 平均可節省約 65% 的輸出 token，減少成本。
- 簡單安裝 — 透過單行指令安裝，適用於多個平台。
- 即時啟動 — 每次會話中可自動啟動，無需重複設置。
- 文言文模式 — 提供文言文輸出選項，進一步減少 token 使用。

## 快速開始

1. 安裝 Caveman 插件
```bash
claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman
```
2. 啟動 Caveman 模式
```bash
/caveman
```
3. 切換模式
```bash
/caveman ultra
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 18629 stars（2661/天），forks 843（4.5%），顯示出強烈的增長潛力。作者 JuliusBrussee 之前的專案有良好的反響，這次專案解決了 LLM 使用中的 token 浪費問題，特別是在需要高效能的開發環境中。社群對於這種簡化語言的需求日益增加，尤其是在開發者面對冗長回應時。這個工具的設計理念與當前對於高效溝通的需求相符，吸引了大量使用者的注意。forks/stars 比率為 4.5%，顯示出相對穩定的使用者基礎。

## 適合誰使用

**目標受眾**：需要在開發過程中快速生成簡潔技術回應的工程師。

> [!example] 使用場景
> - 後端工程師用它來快速生成簡潔的 API 文檔，因為傳統的文檔生成過程冗長且耗時。
> - 前端開發者用它來簡化代碼回顧過程，因為這樣可以更快地找到問題並進行修正。
> - DevOps 工程師用它來生成簡短的部署日誌，因為這能夠提高團隊的溝通效率，減少不必要的資訊。

## 架構分析

Caveman 採用插件架構，允許用戶在不同的 LLM 平台上安裝和使用。這種設計使得用戶可以輕鬆地在多個環境中啟用簡化語言功能。資料流方面，Caveman 主要通過簡化輸出來減少 token 使用，並且在每次會話中自動啟動，無需額外配置。選擇插件架構的優勢在於其靈活性和易用性，但可能會導致在某些環境中無法自動啟動的問題。整體來看，這種設計使得 Caveman 能夠快速融入現有的開發流程中。

## 技術深入分析

Caveman 的核心技術機制是通過簡化語言來減少輸出 token，這主要依賴於一套簡單的語法規則。這種設計使得用戶可以在不損失技術內容的情況下，快速生成簡潔的回應。效能方面，Caveman 能夠在多個平台上運行，並且在每次會話中自動啟動，這提升了使用的便利性。選擇 Python 作為主要開發語言，使得 Caveman 在多平台間的兼容性更強，但也可能帶來一定的性能開銷。技術風險方面，Caveman 依賴於 LLM 的穩定性，若 LLM 的更新導致輸出格式改變，可能需要隨之調整 Caveman 的規則。整合方面，Caveman 能夠輕鬆融入現有的開發流程，並且與多個 IDE 和 CI/CD 工具相容，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程順暢，無明顯坑。文件目前僅提供英文版本，對於非英語使用者可能有一定挑戰。

## 優缺點分析

> [!success] 優點
> - 能夠顯著減少 token 使用，降低成本。
> - 保持技術準確性，無需擔心信息丟失。
> - 多種模式選擇，適應不同的使用場景。

> [!danger] 缺點
> - 在某些情況下，過度簡化可能導致信息丟失。
> - 需要持續更新以跟上 LLM 的變化和需求。
> - 對於不熟悉簡化語言的用戶，可能需要一段時間適應。

> [!warning] 注意事項
> - 僅影響輸出 token，不改變思考過程中的 token 使用。
> - 在某些情況下，過度簡化可能導致信息丟失。
> - 需要持續更新以跟上 LLM 的變化和需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的簡化語言功能，但不如 Caveman 在 token 節省上有效。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 專注於 Claude Code 的擴展，但缺乏 Caveman 的多模式選擇。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，並不專注於 token 節省。 | 如果你的需求是資料同步而非簡化語言，則應選擇這個工具。 | low，因為兩者功能差異明顯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供類似的簡化功能，但不如 Caveman 在 token 節省上有效。 | 如果需要更全面的語言處理功能，而不僅僅是 token 節省，則可以考慮這個工具。 | medium，因為需要重新調整使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **caveman** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，並不專注於 token 節省。 | 提供類似的簡化功能，但不如 Caveman 在 token 節省上有效。 |
> | 遷移成本 | - | low，因為兩者功能差異明顯。 | medium，因為需要重新調整使用習慣。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非簡化語言，則應選擇這個工具。 | 如果需要更全面的語言處理功能，而不僅僅是 token 節省， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些平台上無法自動啟動，需手動輸入指令啟動。
  - 解法：在系統提示中添加啟動指令。
- **[HIGH]** 過度簡化可能導致技術細節丟失。
  - 解法：根據需求選擇不同的簡化模式。
- [low] 對於不熟悉簡化語言的用戶，可能需要時間適應。
  - 解法：參考文檔中的使用範例。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 中小型軟體開發團隊 | 非常適合 | 能夠提高團隊溝通效率，減少冗長回應。 |
| 大型企業的核心系統開發 | 不適合 | 可能需要更詳細的技術說明，不適合過度簡化。 |
| 個人開發者的 side project | 適合 | 能夠快速生成簡潔的技術回應，提升開發效率。 |
| 教育機構的教學環境 | 普通 | 雖然能夠簡化語言，但可能不適合所有學習者的需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的 token 節省，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Caveman 本身不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Caveman 可以輕鬆整合到現有的開發工具鏈中，特別是與 Claude Code 和 Codex 的整合。用戶可以在使用這些平台時，透過簡單的指令啟動 Caveman 模式。在一個使用 GitHub Actions 的 CI/CD 流程中，你可以在測試階段使用 Caveman 來簡化輸出，具體做法是將 `/caveman` 指令添加到測試腳本中。Caveman 與主流 IDE（如 VS Code）相容良好，並且不需要額外的適配器或包裝器，降低了整合的摩擦點。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Caveman 出現之前，開發者通常使用傳統的 LLM 輸出，這些輸出往往冗長且耗費大量 token。這導致了高昂的使用成本和低效的溝通。隨著對高效能和低成本解決方案的需求增加，Caveman 應運而生。

這個工具的出現不僅是對 token 節省的回應，也是對開發者在日常工作中所面臨的溝通挑戰的解決方案。未來，隨著 LLM 技術的進步，Caveman 可能會進一步演化，提供更智能的簡化功能。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 LLM 使用
- 了解簡化語言的概念

> [!tip] 導入策略
> 第一週：在個人專案中試用 Caveman。第二週：在團隊內部工具中導入。第三週：收集使用反饋並調整使用方式。第四週：在主要專案中開始使用。

**成功指標**：團隊的回應時間減少 30%。

> [!warning] 退出計畫
> 如果要退出 Caveman，所有設定都可以手動移除，並不會影響其他系統功能。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
| Forks | 843 |
| Open Issues | 37 |
| Issue 解決率 | 40% (25 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://juliusbrussee.github.io/caveman/) |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JuliusBrussee/caveman) |
| Topics | `ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 69
>     "PowerShell" : 11
>     "Shell" : 11
>     "JavaScript" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JuliusBrussee](https://github.com/JuliusBrussee) | 69 |
> | [@sebastianbreguel](https://github.com/sebastianbreguel) | 9 |
> | [@vraj00222](https://github.com/vraj00222) | 5 |
> | [@leoz32](https://github.com/leoz32) | 3 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 3 |

**最新版本**：v1.5.1 (2026-04-11)

> [!info]- Release Notes
> ## Runtime SKILL.md loading
> 
> Activation hook now reads `skills/caveman/SKILL.md` at runtime instead of hardcoding rules inline. Edits to the source of truth propagate automatically — no duplication to go stale.
> 
> - Plugin installs resolve SKILL.md relative to the plugin root
> - Standalone installs (hooks only, no skills dir) fall back to a built-in minimal ruleset
> - `commit`/`review`/`compress` modes skip SKILL.md machinery entirely — they have their own independent skill files
> 
> ## Docs
> 
> - **Consolidate install details** — Cursor, Windsurf, Cline, and Copilot install instructions merged into one block (#106)
> - **Fix bash statusline badge example** — use ANSI-C quoting so escape sequences render correctly (#57)
> 
> ## Bug fixes
> 
> - **Fix `/caveman` with `off` default writing "off" to flag file** — mode tracker now guards against `off` and deletes the flag file, matching the activate hook behavior

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和問題回應。
**連結**：[文件](https://juliusbrussee.github.io/caveman/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-11 ~ 2026-04-11）
> **活躍天數** 1 天 · **最新 commit** Load SKILL.md; handle independent modes

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/JuliusBrussee/caveman/issues/16) | Opencode / Oh-my-pi support `enhancement` | 24 | 1 |
> | [#56](https://github.com/JuliusBrussee/caveman/issues/56) | Why skill and not agent? `enhancement` | 5 | 1 |
> | [#53](https://github.com/JuliusBrussee/caveman/issues/53) | Consider support AXON notation `enhancement` | 3 | 9 |

## README 摘錄

> [!info]- 展開查看原文 README
> caveman
> 
>   why use many token when few do trick
> 
>   
>   
>   
> 
>   Before/After •
>   Install •
>   Levels •
>   Skills •
>   Benchmarks •
>   Evals
> 
> ---
> 
> A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill/plugin and Codex plugin that makes agent talk like caveman — cutting **~75% of output tokens** while keeping full technical accuracy. Now with [文言文 mode](#文言文-wenyan-mode), [terse commits](#caveman-commit), [one-line code reviews](#caveman-review), and a [compression tool](#caveman-compress) that cuts **~46% of input tokens** every session.
> 
> Based on the viral observation that caveman-speak dramatically reduces LLM token usage without losing technical substance. So we made it a one-line install.
> 
> 
> ## Install
> 
> Pick your agent. One command. Done.
> 
> | Agent | Install |
> |-------|---------|
> | **Claude Code** | `claude plugin marketplace add JuliusBrussee/caveman && claude plugin install caveman@caveman` |
> | **Codex** | Clone repo → `/plugins` → Search "Caveman" → Install |
> | **Gemini CLI** | `gemini extensions install https://github.com/JuliusBrussee/caveman` |
> | **Cursor** | `npx skills add JuliusBrussee/caveman -a cursor` |
> | **Windsurf** | `npx skills add JuliusBrussee/caveman -a windsurf` |
> | **Copilot** | `npx skills add JuliusBrussee/caveman -a github-copilot` |
> | **Cline** | `npx skills add JuliusBrussee/caveman -a cline` |
> | **Any other** | `npx skills add JuliusBrussee/caveman` |
> 
> Install once. Use in every session for that install target after that. One rock. That it.
> 
> 
> ## Usage
> 
> Trigger with:
> - `/caveman` or Codex `$caveman`
> - "talk like caveman"
> - "caveman mode"
> - "less tokens please"
> 
> Stop with: "stop caveman" or "normal mode"
> 
> 
> # Read results (no API key, runs offline)
> uv run --with tiktoken python evals/measure.py
> ```
> 
> 
> ## Benchmarks
> 
> Real token counts from the Claude API ([reproduce it yourself](benchmarks/)):
> 
> | Task | Normal (tokens) | Caveman (tokens) | Saved |
> |------|---------------:|----------------:|------:|
> | Explain React re-render bug | 1180 | 159 | 87% |
> | Fix auth middleware token expiry | 704 | 121 | 83% |
> | Set up PostgreSQL connection pool | 2347 | 380 | 84% |
> | Explain git rebase vs merge | 702 | 292 | 58% |
> | Refactor callback to async/await | 387 | 301 | 22% |
> | Architecture: microservices vs monolith | 446 | 310 | 30% |
> | Review PR for security issues | 678 | 398 | 41% |
> | Docker multi-stage build | 1042 | 290 | 72% |
> | Debug PostgreSQL race condition | 1200 | 232 | 81% |
> | Implement React error boundary | 3454 | 456 | 87% |
> | **Average** | **1214** | **294** | **65%** |
> 
> *Range: 22%–87% savings across prompts.*
> 
> > [!IMPORTANT]
> > Caveman only affects output tokens — thinking/reasoning tokens are untouched. Caveman no make brain smaller. Caveman make *mouth* smaller. Biggest win is **readability and speed**, cost savings are a bonus.
> 
> A March 2026 paper ["Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025) found that constraining large models to brief responses **improved accuracy by 26 percentage points** on certain benchmarks and completely reversed performance hierarchies. Verbose not always better. Sometimes less word = more correct.
> 
> 
> ## Before / After
> 
> 
> ### 🗣️ Normal Claude (69 tokens)
> 
> > "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object."
> 
> 
> ### 🪨 Caveman Claude (19 tokens)
> 
> > "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."
> 
> 
> ### 🗣️ Normal Claude
> 
> > "Sure! I'd be happy to help you with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix."
> 
> 
> ### 🪨 Caveman Claude
> 
> > "Bug in auth middleware. Token expiry check use `
> 
> **Same fix. 75% less word. Brain still big.**
> 
> **Pick your level of grunt:**
> 
> #### 🪶 Lite
> 
> > "Your component re-renders because you create a new object reference each render. Inline object props fail shallow comparison every time. Wrap it in `useMemo`."
> 
> #### 🪨 Full
> 
> > "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."
> 
> #### 🔥 Ultra
> 
> > "Inline obj prop → new ref → re-render. `useMemo`."
> 
> #### 📜 文言文
> 
> > "物出新參照，致重繪。useMemo Wrap之。"
> 
> **Same answer. You pick how many word.**
> 
> ```
> ┌─────────────────────────────────────┐
> │  TOKENS SAVED          ████████ 75% │
> │  TECHNICAL ACCURACY    ████████ 100%│
> │  SPEED INCREASE        ████████ ~3x │
> │  VIBES                 ████████ OOG │
> └─────────────────────────────────────┘
> ```
> 
> - **Faster response** — less token to generate = speed go brrr
> - **Easier to read** — no wall of text, just the answer
> - **Same accuracy** — all technical info kept, only fluff removed ([science say so](https://arxiv.org/abs/2604.00025))
> - **Save money** — ~71% less output token = less cost
> - **Fun** — every code review become comedy
> 
> 
> ### What You Get
> 
> Auto-activation is built in for Claude Code, Gemini CLI, and the repo-local Codex setup below. `npx skills add` installs the skill for other agents, but does **not** install repo rule/instruction files, so Caveman does not auto-start there unless you add the always-on snippet below.
> 
> | Feature | Claude Code | Codex | Gemini CLI | Cursor | Windsurf | Cline | Copilot |
> |---------|:-----------:|:-----:|:----------:|:------:|:--------:|:-----:|:-------:|
> | Caveman mode | Y | Y | Y | Y | Y | Y | Y |
> | Auto-activate every session | Y | Y¹ | Y | —² | —² | —² | —² |
> | `/caveman` command | Y | Y¹ | Y | — | — | — | — |
> | Mode switching (lite/full/ultra) | Y | Y¹ | Y | Y³ | Y³ | — | — |
> | Statusline badge | Y⁴ | — | — | — | — | — | — |
> | caveman-commit | Y | — | Y | Y | Y | Y | Y |
> | caveman-review | Y | — | Y | Y | Y | Y | Y |
> | caveman-compress | Y | Y | Y | Y | Y | Y | Y |
> | caveman-help | Y | — | Y | Y | Y | Y | Y |
> 
> > [!NOTE]
> > Auto-activation works differently per agent: Claude Code uses SessionStart hooks, this repo's Codex dogfood setup uses `.codex/hooks.json`, Gemini uses context files. Cursor/Windsurf/Cline/Copilot can be made always-on, but `npx skills add` installs only the skill, not the repo rule/instruction files.
> >
> > ¹ Codex uses `$caveman` syntax, not `/caveman`. This repo ships `.codex/hooks.json`, so caveman auto-starts when you run Codex inside this repo. The installed plugin itself gives you `$caveman`; copy the same hook into another repo if you want always-on behavior there too. caveman-commit and caveman-review are not in the Codex plugin bundle — use the SKILL.md files directly.
> > ² Add the "Want it always on?" snippet below to those agents' system prompt or rule file if you want session-start activation.
> > ³ Cursor and Windsurf receive the full SKILL.md with all intensity levels. Mode switching works on-demand via the skill; no slash command.
> > ⁴ Available in Claude Code, but plugin install only nudges setup. Standalone `install.sh` / `install.ps1` configures it automatically when no custom `statusLine` exists.
> 
> Claude Code — full details
> 
> The plugin install gives you skills + auto-loading hooks. If no custom `statusLine` is configured, Caveman nudges Claude to offer badge setup on first session.
> 
> ```bash
> claude plugin marketplace add JuliusBrussee/caveman
> claude plugin install caveman@caveman
> ```
> 
> **Standalone hooks (without plugin):** If you prefer not to use the plugin system:
> ```bash
> 
> # ... and many more
> ```
> 
> Uninstall: `npx skills remove caveman`
> 
> > **Windows note:** `npx skills` uses symlinks by default. If symlinks fail, add `--copy`: `npx skills add JuliusBrussee/caveman --copy`
> 
> **Important:** These agents don't have a hook system, so caveman won't auto-start. Say `/caveman` or "talk like caveman" to activate each session.
> 
> **Want it always on?** Paste this into your agent's system prompt or rul

## 延伸閱讀

相關概念：[[Prompt Engineering]] · [[LLM 推論]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]]

[GitHub](https://github.com/JuliusBrussee/caveman) · [官方網站](https://juliusbrussee.github.io/caveman/)

## 相關收錄

> [!note]- 直接競品（同子分類：Prompt Engineering）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Prompt Engineering" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "JuliusBrussee--caveman" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Prompt Engineering","LLM 推論","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JuliusBrussee--caveman" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JuliusBrussee--caveman" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JuliusBrussee" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-11|2026-04-11]] — 再次上榜，13.5k stars
- [[2026-04-10|2026-04-10]] — 再次上榜，8.9k stars
- [[2026-04-09|2026-04-09]] — 再次上榜，7.5k stars
- [[2026-04-08|2026-04-08]] — 首次收錄，6.0k stars
