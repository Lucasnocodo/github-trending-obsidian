---
repo: Gitlawb/openclaude
url: https://github.com/Gitlawb/openclaude
owner: Gitlawb
owner_type: Organization
language: TypeScript
license: N/A
description: "Claude Code opened to any LLM — OpenAI, Gemini, DeepSeek, Ollama, and 200+ models via OpenAI-compatible API shim"
homepage: ""
stars: 3599
stars_per_day: 3599
forks: 1398
open_issues: 31
created: 2026-04-01
pushed_at: 2026-04-02
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "讓任何 LLM（如 OpenAI、Gemini、DeepSeek 等）都能使用 Claude Code 的功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-05"
contributor_count: 5
engagement: "high"
issue_close_rate: 33
repo_size_kb: 9778
readme_length: 9703
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3599"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "openclaude"
  - "Gitlawb/openclaude"
  - "讓任何 LLM（如 OpenAI、Gemini、DeepSeek 等）都能使用 Claude Code 的功能。"
---

# openclaude

**3.6k** stars · **3.6k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Gitlawb--openclaude");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 讓任何 LLM（如 OpenAI、Gemini、DeepSeek 等）都能使用 Claude Code 的功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.6k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 需要在多種 LLM 之間靈活切換的開發者，尤其是那些希望簡化開發流程的後端工程師。
> **一句話重點** OpenClaude 讓開發者能夠輕鬆整合多種 LLM，顯著簡化了開發流程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "Gitlawb--openclaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到靈活的多模型支持，值得考慮。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供一個 OpenAI 相容的 API 接口，讓 Claude Code 能夠與多種 LLM 互動。

## 專案簡介

OpenClaude 是一個讓 Claude Code 可以與任何 LLM 互動的工具，這意味著不再僅限於 Claude 模型。使用者可以透過 OpenAI 相容的 API 接口，輕鬆接入 GPT-4o、DeepSeek、Gemini 等 200 多個模型。這個工具的核心是將 Claude Code 的工具系統與 LLM API 之間的接口進行轉換，具體來說，它能將 Anthropic 的消息格式轉換為 OpenAI 的消息格式，並支持多步驟的工具鏈調用。使用者只需執行 `openclaude` 命令即可啟動，並可透過設置環境變數來選擇所需的模型和 API 密鑰。這個工具的賣點在於其靈活性和擴展性，無論是進行文件操作、實時流式處理，還是使用多種工具，OpenClaude 都能輕鬆應對。

技術上，它採用了 TypeScript 和 Bun 作為主要開發環境，並依賴多個 SDK 來支持不同的 LLM。與其他工具相比，如 AlpinDale/parsync 和 CoderLuii/HolyClaude，OpenClaude 提供了更廣泛的模型支持和更靈活的配置選項，特別是在本地模型的使用上。使用者在實際操作中可能會遇到一些環境變數設置的問題，特別是在使用 Codex 或 OpenAI 模型時。這個專案目前處於早期階段，活躍度高，適合需要多模型支持的開發者使用。對於小型團隊或個人開發者來說，這是一個值得考慮的選擇，未來可能會持續增強其功能和穩定性。

**技術棧**：`TypeScript` · `Bun`

## 重點功能

- 多模型支持 — 支援 OpenAI、Gemini、DeepSeek 等 200 多個模型的即時調用。
- 環境變數配置 — 透過設置環境變數輕鬆選擇所需的模型和 API 密鑰。
- CLI 命令行工具 — 使用 `openclaude` 命令啟動，並支持多種工具的調用。
- 實時流式處理 — 支持實時的 token 流式輸出，適合需要快速反應的應用場景。
- 多步驟工具鏈 — 允許模型調用多個工具，並在每一步獲取結果，實現複雜的任務處理。

## 快速開始

1. 安裝依賴
```bash
bun install
```
2. 啟動 CLI 工具
```bash
openclaude
```
3. 進行快速啟動檢查
```bash
bun run smoke
```

## 程式碼範例

```ts
{
  "前置條件": "需要設置環境變數以選擇模型",
  "指令": "export CLAUDE_CODE_USE_OPENAI=1\nexport OPENAI_API_KEY=sk-your-key-here\nexport OPENAI_MODEL=gpt-4o\nnode dist/cli.mjs",
  "預期輸出": "啟動 OpenClaude 工具，並準備好使用指定的 LLM。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 3599 stars（3599/天），forks 1398（38.8%），顯示出強烈的社群參與。作者 kevincodex1 和團隊在開源社群中有一定的影響力，之前的專案也獲得了良好的反響。這個專案解決了在多種 LLM 之間切換的複雜性，讓開發者能夠更輕鬆地使用不同的模型進行開發，這在當前多樣化的 AI 生態中是個迫切需求。社群的活躍度和問題反饋也顯示出使用者對這個工具的期待和需求。forks/stars 比率高達 38.8%，顯示出許多人在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要在多種 LLM 之間靈活切換的開發者，尤其是那些希望簡化開發流程的後端工程師。

> [!example] 使用場景
> - 後端工程師用它來整合多種 LLM 進行 API 開發，因為這樣可以在同一個工具中靈活切換不同的模型，提升開發效率。
> - 資料科學家用它來快速測試不同的 LLM 模型，因為它支持多種模型的即時調用，能夠快速比較結果。
> - 獨立開發者用它來構建個人專案，因為它的安裝和使用過程簡單，適合快速原型開發。

## 架構分析

OpenClaude 的架構設計旨在提供靈活的多模型支持，主要透過一個 shim 層來實現。這個 shim 層將 Claude Code 的工具系統與 LLM API 之間的接口進行轉換，具體來說，它能將 Anthropic 的消息格式轉換為 OpenAI 的消息格式。這樣的設計使得使用者可以無縫地在不同的 LLM 之間切換，而不需要修改原有的工具系統。這種架構的代價在於需要維護這個 shim 層的兼容性，隨著 LLM 的更新，可能需要不斷調整轉換邏輯。擴展性方面，這個架構能夠支持多種不同的 LLM，但在整合新模型時可能會遇到挑戰，特別是當新模型的 API 與現有的轉換邏輯不兼容時。

## 技術深入分析

OpenClaude 的核心技術機制是透過 shim 層實現的，這個 shim 層負責將 Claude Code 的工具系統與不同 LLM 的 API 進行轉換。這種設計使得使用者可以在不改變原有工具系統的情況下，靈活地選擇不同的 LLM。效能方面，這個工具能夠支持實時的 token 流式輸出，適合需要快速反應的應用場景。設計上，選擇 TypeScript 和 Bun 作為開發環境，這樣的選擇使得開發過程中能夠利用現代 JavaScript 的特性，但也帶來了對 Bun 的依賴。技術風險方面，隨著 LLM 的更新，shim 層的兼容性可能會成為一個瓶頸，特別是在新模型的 API 與現有邏輯不兼容時。整合方面，這個工具能夠與現有的開發工具鏈（如 VS Code）無縫對接，並且支援多種 CI/CD 流程，降低了團隊的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要注意 Bun 的版本要求；有良好的快速入門指南，幫助新手快速上手；目前文件僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 支持多種 LLM，靈活性高。
> - 簡單的 CLI 工具，易於使用。
> - 實時流式處理，適合快速反應的應用。

> [!danger] 缺點
> - 需要正確設置環境變數，對新手可能有一定的學習曲線。
> - 在使用過程中可能會遇到兼容性問題，特別是對於新模型。
> - 依賴於 Bun，對於不熟悉此工具的開發者來說可能會增加學習成本。

> [!warning] 注意事項
> - 需要 Bun 1.3.11 或更新版本進行源碼構建。
> - 對於某些模型，可能會有 token 限制，需注意模型的最大輸出限制。
> - 在使用 Codex 時，需要提供有效的 API 密鑰或 auth.json 文件。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的多模型支持，但主要集中在特定的 LLM，缺乏 OpenAI 相容的 API 接口。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 模型的優化，而 OpenClaude 則支持更廣泛的模型選擇。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於特定 LLM 的整合，缺乏 OpenAI 相容的 API 接口，使用上較為局限。 | 如果你的團隊主要使用特定的 LLM，且不需要多模型支持，則可以考慮此工具。 | medium，因為需要重新調整 API 調用方式。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於 Claude 模型的優化，無法支持其他 LLM，功能較為單一。 | 如果你只需要使用 Claude 模型，且希望獲得更好的性能，則可以選擇此工具。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaude** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定 LLM 的整合，缺乏 OpenAI 相容的 API 接口，使用上較為局限。 | 專注於 Claude 模型的優化，無法支持其他 LLM，功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新調整 API 調用方式。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用特定的 LLM，且不需要多模型支持，則可 | 如果你只需要使用 Claude 模型，且希望獲得更好的性能， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在設置環境變數時，可能會因為缺少 API 密鑰而無法啟動。
  - 解法：確保提供正確的 API 密鑰或使用本地模型。
- [MEDIUM] 使用舊版本的 Bun 可能導致構建失敗。
  - 解法：確保使用 Bun 1.3.11 或更新版本。
- [MEDIUM] 某些 LLM 的 token 限制可能導致輸出不完整。
  - 解法：檢查所選模型的 token 限制，並根據需要調整輸入。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊進行 AI 開發 | 非常適合 | 能夠快速整合多種 LLM，提升開發效率。 |
| 大型企業的核心產品開發 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 個人開發者進行原型設計 | 適合 | 安裝簡單，適合快速原型開發。 |
| 需要穩定 API 的中型專案 | 普通 | 雖然功能多樣，但穩定性和成熟度仍需觀察。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到靈活的多模型支持，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要提供 API 密鑰，並存取環境變數；依賴的 SDK 需定期檢查安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
| Forks | 1.4k |
| Open Issues | 31 |
| Issue 解決率 | 33% (15 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gitlawb/openclaude) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevincodex1](https://github.com/kevincodex1) | 43 |
> | [@Vasanthdev2004](https://github.com/Vasanthdev2004) | 17 |
> | [@gnanam1990](https://github.com/gnanam1990) | 12 |
> | [@auriti](https://github.com/auriti) | 7 |
> | [@tunnckoCore](https://github.com/tunnckoCore) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度高，開放問題回應速度快。
**連結**：[文件](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-02）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #34 from auriti/fix/macro-package-url

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#60](https://github.com/Gitlawb/openclaude/issues/60) | ctrl-0 crash | 1 | 3 |
> | [#42](https://github.com/Gitlawb/openclaude/issues/42) | Security: bridge leaks full process.env to child, setup.ts U | 1 | 0 |
> | [#88](https://github.com/Gitlawb/openclaude/issues/88) | ripgrep not found | 0 | 0 |
> | [#87](https://github.com/Gitlawb/openclaude/issues/87) | Nvidia API | 0 | 0 |
> | [#86](https://github.com/Gitlawb/openclaude/issues/86) | Title: max_tokens causes 400 error with o-series and newer O | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaude
> 
> Use Claude Code with **any LLM** — not just Claude.
> 
> OpenClaude is a fork of the [Claude Code source leak](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code) (exposed via npm source maps on March 31, 2026). We added an OpenAI-compatible provider shim so you can plug in GPT-4o, DeepSeek, Gemini, Llama, Mistral, or any model that speaks the OpenAI chat completions API. It now also supports the ChatGPT Codex backend for `codexplan` and `codexspark`.
> 
> All of Claude Code's tools work — bash, file read/write/edit, grep, glob, agents, tasks, MCP — just powered by whatever model you choose.
> 
> ---
> 
> 
> ## Install
> 
> 
> # Install dependencies
> bun install
> 
> 
> ## Quick Start
> 
> 
> # If installed via npm
> openclaude
> 
> 
> # quick startup sanity check
> bun run smoke
> 
> 
> ## Provider Examples
> 
> 
> ### Option A: npm (recommended)
> 
> ```bash
> npm install -g @gitlawb/openclaude
> ```
> 
> 
> ### Option B: From source (requires Bun)
> 
> Use Bun `1.3.11` or newer for source builds on Windows. Older Bun versions such as `1.3.4` can fail with a large batch of unresolved module errors during `bun run build`.
> 
> ```bash
> 
> # Link globally (optional)
> npm link
> ```
> 
> 
> ### Option C: Run directly with Bun (no build step)
> 
> ```bash
> git clone https://node.gitlawb.com/z6MkqDnb7Siv3Cwj7pGJq4T5EsUisECqR8KpnDLwcaZq5TPr/openclaude.git
> cd openclaude
> bun install
> bun run dev
> ```
> 
> ---
> 
> 
> # optional if you do not already have ~/.codex/auth.json
> export CODEX_API_KEY=...
> 
> openclaude
> ```
> 
> 
> # no API key needed for local models
> ```
> 
> 
> # codex profile (uses CODEX_API_KEY or ~/.codex/auth.json)
> bun run dev:codex
> 
> 
> # OpenAI profile (requires OPENAI_API_KEY in your shell)
> bun run dev:openai
> 
> 
> # Clone from gitlawb
> git clone https://node.gitlawb.com/z6MkqDnb7Siv3Cwj7pGJq4T5EsUisECqR8KpnDLwcaZq5TPr/openclaude.git
> cd openclaude
> 
> 
> # Build
> bun run build
> 
> 
> ### 1. Set 3 environment variables
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-your-key-here
> export OPENAI_MODEL=gpt-4o
> ```
> 
> 
> ### 2. Run it
> 
> ```bash
> 
> # If built from source
> bun run dev
> 
> # or after build:
> node dist/cli.mjs
> ```
> 
> That's it. The tool system, streaming, file editing, multi-step reasoning — everything works through the model you picked.
> 
> The npm package name is `@gitlawb/openclaude`, but the installed CLI command is still `openclaude`.
> 
> ---
> 
> 
> ### OpenAI
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-...
> export OPENAI_MODEL=gpt-4o
> ```
> 
> 
> ### Codex via ChatGPT auth
> 
> `codexplan` maps to GPT-5.4 on the Codex backend with high reasoning.
> `codexspark` maps to GPT-5.3 Codex Spark for faster loops.
> 
> If you already use the Codex CLI, OpenClaude will read `~/.codex/auth.json`
> automatically. You can also point it elsewhere with `CODEX_AUTH_JSON_PATH` or
> override the token directly with `CODEX_API_KEY`.
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_MODEL=codexplan
> 
> 
> ### DeepSeek
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-...
> export OPENAI_BASE_URL=https://api.deepseek.com/v1
> export OPENAI_MODEL=deepseek-chat
> ```
> 
> 
> ### Google Gemini (via OpenRouter)
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-or-...
> export OPENAI_BASE_URL=https://openrouter.ai/api/v1
> export OPENAI_MODEL=google/gemini-2.0-flash
> ```
> 
> 
> ### Ollama (local, free)
> 
> ```bash
> ollama pull llama3.3:70b
> 
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_BASE_URL=http://localhost:11434/v1
> export OPENAI_MODEL=llama3.3:70b
> 
> ### LM Studio (local)
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_BASE_URL=http://localhost:1234/v1
> export OPENAI_MODEL=your-model-name
> ```
> 
> 
> ### Together AI
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=...
> export OPENAI_BASE_URL=https://api.together.xyz/v1
> export OPENAI_MODEL=meta-llama/Llama-3.3-70B-Instruct-Turbo
> ```
> 
> 
> ### Groq
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=gsk_...
> export OPENAI_BASE_URL=https://api.groq.com/openai/v1
> export OPENAI_MODEL=llama-3.3-70b-versatile
> ```
> 
> 
> ### Mistral
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=...
> export OPENAI_BASE_URL=https://api.mistral.ai/v1
> export OPENAI_MODEL=mistral-large-latest
> ```
> 
> 
> ### Azure OpenAI
> 
> ```bash
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=your-azure-key
> export OPENAI_BASE_URL=https://your-resource.openai.azure.com/openai/deployments/your-deployment/v1
> export OPENAI_MODEL=gpt-4o
> ```
> 
> ---
> 
> 
> ## Environment Variables
> 
> | Variable | Required | Description |
> |----------|----------|-------------|
> | `CLAUDE_CODE_USE_OPENAI` | Yes | Set to `1` to enable the OpenAI provider |
> | `OPENAI_API_KEY` | Yes* | Your API key (*not needed for local models like Ollama) |
> | `OPENAI_MODEL` | Yes | Model name (e.g. `gpt-4o`, `deepseek-chat`, `llama3.3:70b`) |
> | `OPENAI_BASE_URL` | No | API endpoint (defaults to `https://api.openai.com/v1`) |
> | `CODEX_API_KEY` | Codex only | Codex/ChatGPT access token override |
> | `CODEX_AUTH_JSON_PATH` | Codex only | Path to a Codex CLI `auth.json` file |
> | `CODEX_HOME` | Codex only | Alternative Codex home directory (`auth.json` will be read from here) |
> | `OPENCLAUDE_DISABLE_CO_AUTHORED_BY` | No | Set to `1` to suppress the default `Co-Authored-By` trailer in generated git commit messages |
> 
> You can also use `ANTHROPIC_MODEL` to override the model name. `OPENAI_MODEL` takes priority.
> 
> OpenClaude PR bodies use OpenClaude branding by default. `OPENCLAUDE_DISABLE_CO_AUTHORED_BY` only affects the commit trailer, not PR attribution text.
> 
> ---
> 
> 
> ## Runtime Hardening
> 
> Use these commands to keep the CLI stable and catch environment mistakes early:
> 
> ```bash
> 
> # validate provider env + reachability
> bun run doctor:runtime
> 
> 
> # print machine-readable runtime diagnostics
> bun run doctor:runtime:json
> 
> 
> # persist a diagnostics report to reports/doctor-runtime.json
> bun run doctor:report
> 
> 
> # full local hardening check (smoke + runtime doctor)
> bun run hardening:check
> 
> 
> # strict hardening (includes project-wide typecheck)
> bun run hardening:strict
> ```
> 
> Notes:
> - `doctor:runtime` fails fast if `CLAUDE_CODE_USE_OPENAI=1` with a placeholder key (`SUA_CHAVE`) or a missing key for non-local providers.
> - Local providers (for example `http://localhost:11434/v1`) can run without `OPENAI_API_KEY`.
> - Codex profiles validate `CODEX_API_KEY` or the Codex CLI auth file and probe `POST /responses` instead of `GET /models`.
> 
> 
> ### Provider Launch Profiles
> 
> Use profile launchers to avoid repeated environment setup:
> 
> ```bash
> 
> # one-time profile bootstrap (prefer viable local Ollama, otherwise OpenAI)
> bun run profile:init
> 
> 
> # preview the best provider/model for your goal
> bun run profile:recommend -- --goal coding --benchmark
> 
> 
> # auto-apply the best available local/openai provider/model for your goal
> bun run profile:auto -- --goal latency
> 
> 
> # codex bootstrap (defaults to codexplan and ~/.codex/auth.json)
> bun run profile:codex
> 
> 
> # openai bootstrap with explicit key
> bun run profile:init -- --provider openai --api-key sk-...
> 
> 
> # ollama bootstrap with custom model
> bun run profile:init -- --provider ollama --model llama3.1:8b
> 
> 
> # ollama bootstrap with intelligent model auto-selection
> bun run profile:init -- --provider ollama --goal coding
> 
> 
> # codex bootstrap with a fast model alias
> bun run profile:init -- --provider codex --model codexspark
> 
> 
> # launch using persisted profile (.openclaude-profile.json)
> bun run dev:profile
> 
> 
> # Ollama profile (defaults: localhost:11434, llama3.1:8b)
> bun run dev:ollama
> ```
> 
> `profile:recommend` ranks installed Ollama models for `latency`, `balanced`, or `coding`, and `profile:auto` can persist the recommendation directly.
> If no profile exists yet, `dev:profile` now uses the same goal-aware defaults when picking the initial model.
> 
> Use `--provider ollama` when you want a local-only path. Auto mode falls back to OpenAI when no viable local chat model is installed.
> Goal-based Ollama selection only recommends among models that are already installed and reachable from Ollama.
> 
> Use `profile:codex` or `--provider codex` when you want the ChatGPT Codex backend.
> 
> `dev:openai`, `dev:ollama`, 

## 延伸閱讀

相關概念：[[API 設計]] · [[多模態]] · [[容器化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[wong2--weixin-agent-sdk|wong2/weixin-agent-sdk]]

[GitHub](https://github.com/Gitlawb/openclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Gitlawb--openclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["API 設計","多模態","容器化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Gitlawb--openclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Gitlawb--openclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Gitlawb--openclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Gitlawb" AND file.name != "Gitlawb--openclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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
> const me = dv.page("Repos/Gitlawb--openclaude");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-02|2026-04-02]] — 首次收錄，3.6k stars
