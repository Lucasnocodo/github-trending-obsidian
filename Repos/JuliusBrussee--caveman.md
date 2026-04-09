---
repo: JuliusBrussee/caveman
url: https://github.com/JuliusBrussee/caveman
owner: JuliusBrussee
owner_type: User
language: Python
license: MIT
description: "🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman"
homepage: "https://juliusbrussee.github.io/caveman/"
stars: 7541
stars_per_day: 1885
forks: 309
open_issues: 3
created: 2026-04-04
pushed_at: 2026-04-08
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: "v1.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "透過簡化語言，減少 65% 的 token 使用，提升 Claude Code 的效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-12"
contributor_count: 5
engagement: "low"
issue_close_rate: 83
repo_size_kb: 2229
readme_length: 8925
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:5957,2026-04-08:5973,2026-04-09:7529,2026-04-09:7541"
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
  - "透過簡化語言，減少 65% 的 token 使用，提升 Claude Code 的效率。"
---

# caveman

**7.5k** stars · **1.9k** stars/天 · 建立 4 天前 · Python · MIT

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

`v1.3.0` `easy-install`

`ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` `skill` `tokens`

> [!summary] 一句話摘要
> 透過簡化語言，減少 65% 的 token 使用，提升 Claude Code 的效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.9k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在 LLM 中減少 token 使用並提高效率的開發者。
> **一句話重點** Caveman 不僅是減少字數的工具，更是提升 LLM 效率的利器。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 推論" && p.file.name !== "JuliusBrussee--caveman" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 推論 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到顯著的 token 節省效果，值得一試。

> [!abstract] 核心創新
> Caveman 透過簡化語言來顯著減少 LLM 的 token 使用，並保持技術準確性。

## 專案簡介

Caveman 是一個 Claude Code 的技能插件，旨在透過簡化語言來減少輸出 token 的數量，平均可節省約 75% 的 token，同時保持技術準確性。使用者可以透過簡單的指令來啟用不同的語言模式，例如 `/caveman` 來啟用 caveman 模式，或 `/caveman wenyan` 來使用文言文模式。這個設計的核心在於減少冗長的文字，讓回應更直接且易於理解，從而提升溝通效率。技術上，Caveman 使用 Python 實作，並且依賴 Claude Code 的 API 進行交互，這使得它能夠在不影響思考過程的情況下，顯著減少輸出 token 的數量。

與其他類似工具相比，如 Codex，Caveman 更專注於語言的簡化，而不是僅僅減少字數，這使得它在技術準確性上有更好的表現。使用者在實際運用中，會發現 Caveman 不僅能加快回應速度，還能節省 API 調用的成本，這對於需要頻繁使用 LLM 的開發者來說，無疑是一大優勢。儘管如此，使用者仍需注意，Caveman 主要影響輸出 token，思考過程中的 token 使用不會受到影響，這意味著在某些情境下，仍需考慮到模型的推理能力。總體來看，Caveman 是一個適合希望提升 LLM 效率的開發者的工具，尤其是在需要快速且準確的回應時。

**技術棧**：`Python`

## 重點功能

- Caveman 語言模式 — 減少輸出 token 約 75%，保持技術準確性。
- 文言文模式 — 提供三種不同的文言文表達方式，適合不同的使用需求。
- caveman-commit — 生成簡潔的 commit 訊息，符合 Conventional Commits 格式。
- caveman-review — 提供一行的 PR 評論，快速指出問題和解決方案。
- caveman-compress — 讓 Claude 在每次會話中讀取更少的 token，進一步節省資源。

## 快速開始

1. 安裝 Caveman 插件
```bash
npx skills add JuliusBrussee/caveman
```
2. 啟用 Caveman 模式
```bash
/caveman
```
3. 使用文言文模式
```bash
/caveman wenyan
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 7541 stars（1885/天），forks 309（4.1%），顯示出強烈的社群關注。作者 Julius Brussee 之前開發過多個與 Claude Code 相關的工具，這次的 Caveman 解決了 LLM 使用過程中 token 浪費的問題，讓開發者能以更少的資源獲得相同的技術支持。這一創新吸引了大量開發者的注意，特別是在社交媒體上引發了熱烈討論。技術上，Caveman 的出現正好契合了對於高效能 LLM 的需求，尤其是在成本控制方面。forks/stars 比率為 4.1%，顯示出一些使用者已經開始對其進行修改和擴展，這是社群活躍度的良好指標。

## 適合誰使用

**目標受眾**：需要在 LLM 中減少 token 使用並提高效率的開發者。

> [!example] 使用場景
> - 後端工程師用它來簡化 API 回應，因為能夠節省大量的 token 成本，讓每次調用更具經濟效益。
> - 前端開發者用它來快速生成簡潔的 commit 訊息，因為這樣可以提高團隊的協作效率，減少溝通上的誤解。
> - 資料科學家用它來優化模型的輸出，因為能夠在保持準確性的同時，顯著減少輸出內容的冗長性。

## 架構分析

Caveman 的架構設計以簡化語言為核心，通過調用 Claude Code 的 API 來實現功能。這樣的設計使得 Caveman 能夠在不影響模型推理的情況下，減少輸出 token 的數量。資料流方面，使用者的請求經由 API 傳遞至 Caveman，然後返回簡化後的回應。

這樣的設計選擇使得 Caveman 能夠快速響應，並且不需要額外的資源來處理複雜的邏輯。選擇 Python 作為開發語言，因為它在處理文本和 API 調用方面的靈活性，但也可能面臨性能瓶頸，特別是在高並發的情況下。整體而言，Caveman 的設計目的是為了在保持準確性的同時，提升效率，這對於需要頻繁調用 LLM 的開發者來說，無疑是一個重要的考量。

## 技術深入分析

Caveman 的核心技術機制在於其對輸出文本的簡化，通過分析語言結構，去除冗餘的詞彙，並保留必要的技術信息。這種方法不僅提升了回應的速度，還能有效降低 API 調用的成本，特別是在高頻使用的情況下。從效能和規模特性來看，Caveman 能夠處理大量的請求，並在每次請求中保持高效的響應時間。設計上選擇 Python 作為開發語言，這使得開發過程更加靈活，但在高並發情況下可能會面臨性能瓶頸。這種設計選擇的代價在於，對於需要極高性能的應用，可能需要進一步優化。技術風險方面，Caveman 依賴於 Claude Code 的 API，若 API 發生變更，可能會影響到 Caveman 的功能。整合方面，Caveman 可以輕鬆地與現有的開發工具鏈結合，特別是在使用 Claude Code 和其他 LLM 的環境中，這使得它在團隊協作中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件中包含了多種使用場景的說明，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 顯著減少 token 使用，降低成本。
> - 保持技術準確性，無需擔心信息損失。
> - 提供多種語言模式，適應不同需求。

> [!danger] 缺點
> - 僅影響輸出，思考過程中的 token 使用不會減少。
> - 在某些情境下，簡化後的回應可能不夠詳細。
> - 依賴於 Claude Code 的 API，若 API 不穩定會影響使用。

> [!warning] 注意事項
> - 僅影響輸出 token，思考過程中的 token 使用不會減少。
> - 對於某些複雜問題，可能需要更詳細的回應，簡化後的內容可能不夠充分。
> - 需要依賴 Claude Code 的 API，若 API 不穩定會影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 token 簡化功能，但不專注於技術準確性，適合一般性對話。 |
| [Kuberwastaken/claurst](https://github.com/Kuberwastaken/claurst) | 專注於 Kubernetes 環境的簡化，但不具備 Caveman 的多語言支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Codex | Codex 提供了強大的代碼生成能力，但不專注於 token 簡化，適合需要生成大量代碼的場景。 | 如果你的團隊需要生成複雜的代碼而不僅僅是簡化回應，Codex 會是更合適的選擇。 | medium，因為需要調整使用習慣和整合方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 token 簡化功能，但不專注於技術準確性，適合一般性對話。 | 如果你的需求主要是簡化對話而非技術準確性，這個工具會更合適。 | low，因為功能相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **caveman** | **Codex** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 提供了強大的代碼生成能力，但不專注於 token 簡化，適合需要生成大量代碼的場景。 | 提供類似的 token 簡化功能，但不專注於技術準確性，適合一般性對話。 |
> | 遷移成本 | - | medium，因為需要調整使用習慣和整合方式。 | low，因為功能相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要生成複雜的代碼而不僅僅是簡化回應，Codex | 如果你的需求主要是簡化對話而非技術準確性，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情境下，簡化後的回應可能不夠詳細，導致理解困難。
  - 解法：可以手動調整回應模式以獲得更詳細的解釋。
- **[HIGH]** 依賴於 Claude Code 的 API，若 API 不穩定會影響使用體驗。
  - 解法：定期檢查 API 狀態，並準備替代方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速生成簡潔的 API 回應的後端開發者 | 非常適合 | 能夠顯著減少 token 使用，降低成本。 |
| 需要生成大量代碼的前端開發者 | 普通 | 雖然能簡化回應，但不專注於代碼生成。 |
| 需要簡化團隊內部溝通的產品經理 | 適合 | 能夠提高溝通效率，減少誤解。 |
| 需要高頻調用 LLM 的大型企業 | 不適合 | 在高並發情況下可能面臨性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到顯著的 token 節省效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Caveman 本身不需要高權限，僅依賴於 Claude Code 的 API，並不存取敏感資料。

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
| Forks | 309 |
| Open Issues | 3 |
| Issue 解決率 | 83% (15 closed) |
| 最後推送 | 2026-04-08 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://juliusbrussee.github.io/caveman/) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JuliusBrussee/caveman) |
| Topics | `ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JuliusBrussee](https://github.com/JuliusBrussee) | 45 |
> | [@sebastianbreguel](https://github.com/sebastianbreguel) | 9 |
> | [@vraj00222](https://github.com/vraj00222) | 5 |
> | [@leoz32](https://github.com/leoz32) | 3 |
> | [@cbarrado](https://github.com/cbarrado) | 2 |

**最新版本**：v1.3.0 — v1.3.0 — 文言文, Skills, Evals & Community Fixes (2026-04-08)

> [!info]- Release Notes
> ## What's New
> 
> ### 📜 文言文 (Wenyan) Mode
> Classical Chinese literary compression — same technical accuracy, different era, fewer tokens. Three levels: wenyan-lite, wenyan-full, wenyan-ultra.
> 
> ```
> English:  "Your component re-renders because you create a new object reference each render."
> Caveman:  "New object ref each render. Wrap in useMemo."
> Wenyan:   "物出新參照，致重繪。useMemo Wrap之。"
> ```
> 
> ### 🛠️ New Skills
> - **caveman-commit** — terse commit messages in Conventional Commits format. `/caveman-commit`
> - **caveman-review** — one-line PR review comments: location, problem, fix. `/caveman-review`
> 
> ### 📊 Eval Harness
> Three-arm eval methodology that measures real token compression honestly — skill vs terse control, not skill vs verbose baseline. Run it yourself:
> ```bash
> uv run python evals/llm_run.py
> uv run --with tiktoken python evals/measure.py
> ```
> 
> ### 🔧 Fixes & Improvements
> - **caveman-compress:** Anthropic SDK direct call support (bypasses subprocess when `ANTHROPIC_API_KEY` is set)
> - **caveman-compress:** 500KB file size limit, path resolution, configurable model via `CAVEMAN_MODEL` env var
> - **caveman-compress:** SECURITY.md addressing Snyk false positive
> - **caveman-compress:** Backup overwrite protection — won't silently destroy existing `.original.md`
> - **caveman-compress:** Fixed PATH_REGEX that was matching every English word as a file path
> - **Codex plugin:** Windows install support, SVG icons, OpenAI agent config
> - **Evals:** Fixed inverted sign in `fmt_pct` output

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 83%。
**連結**：[文件](https://juliusbrussee.github.io/caveman/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-08）
> **活躍天數** 1 天 · **最新 commit** chore: sync SKILL.md copies and caveman.skill [skip ci]

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/JuliusBrussee/caveman/issues/16) | Opencode / Oh-my-pi support `enhancement` | 13 | 1 |
> | [#32](https://github.com/JuliusBrussee/caveman/issues/32) | Fix GitHub Copilot installation command in README `bug` | 0 | 0 |

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
> A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill/plugin and Codex plugin that makes agent talk like caveman — cutting **~75% of output tokens** while keeping full technical accuracy. Now with [文言文 mode](#文言文-wenyan-mode), [terse commits](#caveman-commit), [one-line code reviews](#caveman-review), and a [compression tool](#caveman-compress) that cuts **~45% of input tokens** every session.
> 
> Based on the viral observation that caveman-speak dramatically reduces LLM token usage without losing technical substance. So we made it a one-line install.
> 
> ## Before / After
> 
> ### 🗣️ Normal Claude (69 tokens)
> 
> > "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object."
> 
> ### 🪨 Caveman Claude (19 tokens)
> 
> > "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."
> 
> ### 🗣️ Normal Claude
> 
> > "Sure! I'd be happy to help you with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix."
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
> ## Install
> 
> ```bash
> npx skills add JuliusBrussee/caveman
> ```
> 
> `npx skills` supports 40+ agents — Claude Code, GitHub Copilot, Cursor, Windsurf, Cline, and more. To install for a specific agent:
> 
> ```bash
> npx skills add JuliusBrussee/caveman -a cursor
> npx skills add JuliusBrussee/caveman -a github-copilot
> npx skills add JuliusBrussee/caveman -a cline
> npx skills add JuliusBrussee/caveman -a windsurf
> npx skills add JuliusBrussee/caveman -a codex
> ```
> 
> Or with Claude Code plugin system:
> 
> ```bash
> claude plugin marketplace add JuliusBrussee/caveman
> claude plugin install caveman@caveman
> ```
> 
> Codex:
> 
> 1. Clone repo
> 2. Open Codex in repo
> 3. Run `/plugins`
> 4. Search `Caveman`
> 5. Install plugin
> 
> > [!NOTE]
> > **Windows Codex users:** Clone repo → VS Code → Codex Settings → Plugins → find `Caveman` under local marketplace → Install → Reload Window. Also enable `git config core.symlinks true` before cloning (requires developer mode or admin).
> 
> Install once. Use in all sessions after that. One rock. That it.
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
> ### Intensity Levels
> 
> | Level | Trigger | What it do |
> |-------|---------|------------|
> | **Lite** | `/caveman lite` | Drop filler, keep grammar. Professional but no fluff |
> | **Full** | `/caveman full` | Default caveman. Drop articles, fragments, full grunt |
> | **Ultra** | `/caveman ultra` | Maximum compression. Telegraphic. Abbreviate everything |
> 
> ### 文言文 (Wenyan) Mode
> 
> Classical Chinese literary compression — same technical accuracy, but in the most token-efficient written language humans ever invented.
> 
> | Level | Trigger | What it do |
> |-------|---------|------------|
> | **Wenyan-Lite** | `/caveman wenyan-lite` | Semi-classical. Grammar intact, filler gone |
> | **Wenyan-Full** | `/caveman wenyan` | Full 文言文. Maximum classical terseness |
> | **Wenyan-Ultra** | `/caveman wenyan-ultra` | Extreme. Ancient scholar on a budget |
> 
> Level stick until you change it or session end.
> 
> ## Caveman Skills
> 
> | Skill | What it do | Trigger |
> |-------|-----------|---------|
> | **caveman-commit** | Terse commit messages. Conventional Commits. ≤50 char subject. Why over what. | `/caveman-commit` |
> | **caveman-review** | One-line PR comments: `L42: 🔴 bug: user null. Add guard.` No throat-clearing. | `/caveman-review` |
> 
> ### caveman-compress
> 
> Caveman make Claude *speak* with fewer tokens. **Compress** make Claude *read* fewer tokens.
> 
> Your `CLAUDE.md` loads on **every session start**. Caveman Compress rewrites memory files into caveman-speak so Claude reads less — without you losing the human-readable original.
> 
> ```
> /caveman:compress CLAUDE.md
> ```
> 
> ```
> CLAUDE.md          ← compressed (Claude reads this every session — fewer tokens)
> CLAUDE.original.md ← human-readable backup (you read and edit this)
> ```
> 
> | File | Original | Compressed | Saved |
> |------|----------:|----------:|------:|
> | `claude-md-preferences.md` | 706 | 285 | **59.6%** |
> | `project-notes.md` | 1145 | 535 | **53.3%** |
> | `claude-md-project.md` | 1122 | 687 | **38.8%** |
> | `todo-list.md` | 627 | 388 | **38.1%** |
> | `mixed-with-code.md` | 888 | 574 | **35.4%** |
> | **Average** | **898** | **494** | **45%** |
> 
> Code blocks, URLs, file paths, commands, headings, dates, version numbers — anything technical passes through untouched. Only prose gets compressed. See the full [caveman-compress README](caveman-compress/README.md) for details. [Security note](./caveman-compress/SECURITY.md): Snyk flags this as High Risk due to subprocess/file patterns — it's a false positive.
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
> ## Evals
> 
> Caveman not just claim 75%. Caveman **prove** it.
> 
> The `evals/` directory has a three-arm eval harness that measures real token compression against a proper control — not just "verbose vs skill" but "terse vs skill". Because comparing caveman to verbose Claude conflate the skill with generic terseness. That cheatin

## 延伸閱讀

相關概念：[[Prompt Engineering]] · [[LLM 推論]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[MoonshotAI--Attention-Residuals|MoonshotAI/Attention-Residuals]]

[GitHub](https://github.com/JuliusBrussee/caveman) · [官方網站](https://juliusbrussee.github.io/caveman/)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 推論）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 推論" AND file.name != "JuliusBrussee--caveman"
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

- [[2026-04-09|2026-04-09]] — 再次上榜，7.5k stars
- [[2026-04-08|2026-04-08]] — 首次收錄，6.0k stars
