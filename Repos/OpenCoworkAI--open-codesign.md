---
repo: OpenCoworkAI/open-codesign
url: https://github.com/OpenCoworkAI/open-codesign
owner: OpenCoworkAI
owner_type: Organization
language: TypeScript
license: MIT
description: "Open-source Claude Design alternative. One-click import your Claude Code / Codex API key. Prompt → prototype / slides / PDF. Multi-model (Claude, GPT, Gemini, Kimi, GLM, Ollama). BYOK, local-first, MIT."
homepage: "https://opencoworkai.github.io/open-codesign/"
stars: 3553
stars_per_day: 323
forks: 349
open_issues: 43
created: 2026-04-18
pushed_at: 2026-04-29
first_seen: 2026-04-23
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "UI 設計工具"
release_tag: "v0.1.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-23
use_case: "提供開源的 Claude Design 替代方案，讓用戶能夠快速將提示轉換為原型、簡報或 PDF。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 5
engagement: "low"
issue_close_rate: 43
repo_size_kb: 63388
readme_length: 9977
bus_factor: 1
last_release_days: 7
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1261,2026-04-23:1276,2026-04-24:1902,2026-04-24:1911,2026-04-25:2186,2026-04-25:2189,2026-04-26:2396,2026-04-27:2734,2026-04-28:3010,2026-04-29:3211,2026-04-30:3553"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/ai_design"
  - "topic/anthropic"
  - "topic/byok"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "open-codesign"
  - "OpenCoworkAI/open-codesign"
  - "提供開源的 Claude Design 替代方案，讓用戶能夠快速將提示轉換為原型、簡報或 PDF。"
---

# open-codesign

**3.6k** stars · **323** stars/天 · 建立 11 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/OpenCoworkAI--open-codesign");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.4` `easy-install`

`ai-design` `anthropic` `byok` `claude` `claude-code` `claude-design` `claude-design-alternative` `deepseek` `design-to-code` `desktop-app` `electron` `figma-alternative` `gemini` `local-first` `multi-model` `ollama` `openai` `openrouter` `typescript` `ui-generator`

> [!summary] 一句話摘要
> 提供開源的 Claude Design 替代方案，讓用戶能夠快速將提示轉換為原型、簡報或 PDF。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (323 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成設計原型並希望避免雲端依賴的設計團隊或個人開發者。
> **一句話重點** Open CoDesign 的最大優勢在於它的開源性和本地運行能力，讓設計師能夠自由選擇模型而不受限於雲端服務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "UI 設計工具" && p.file.name !== "OpenCoworkAI--open-codesign" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 UI 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到靈活的設計工具，值得一試。

> [!abstract] 核心創新
> Open CoDesign 是一個開源的桌面應用，支持多模型設計，並且完全本地運行，解決了用戶對雲端依賴的問題。

## 專案簡介

Open CoDesign 是一款開源的 AI 設計工具，旨在將用戶的提示轉換為精美的原型、簡報或市場資產，並且完全在本地運行。用戶只需在首次啟動時輸入 API 密鑰，便可快速開始設計，支持多種模型（如 Claude、GPT、Gemini 等），並且無需依賴雲端服務。這種設計使得用戶能夠在本地操作，避免了訂閱鎖定和單一供應商的限制。CLIProxyAPI 的一鍵導入功能進一步簡化了設置過程，讓用戶能夠在 90 秒內上手。技術上，Open CoDesign 使用 Electron 框架構建，並整合了多種 AI 模型，提供了靈活的生成和編輯功能，支持即時預覽和版本控制。

與其他工具相比，如 Claude Design 和 Lovable，Open CoDesign 不僅開源，還支持多模型和本地運行，這使得它在資料隱私和使用靈活性上具有明顯優勢。實際使用中，設計過程中的每一步都可以被實時監控和干預，這提高了設計的可控性和效率。雖然目前仍在 beta 階段，但其活躍的社群和持續的更新顯示出良好的發展潛力。對於需要快速原型設計且不想被鎖定於特定平台的團隊來說，這是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Vue` · `Shell` · `Ruby` · `HTML`

## 重點功能

- 多模型支持 — 支援 Claude、GPT、Gemini 等多種 AI 模型，讓用戶可以根據需求選擇最合適的模型。
- 本地運行 — 完全在用戶的設備上運行，無需雲端服務，保障資料隱私。
- 一鍵導入 API 密鑰 — 用戶可以輕鬆導入現有的 Claude Code 或 Codex API 密鑰，快速上手。
- 即時預覽 — 用戶可以在設計過程中實時查看生成的內容，並進行即時修改。
- 版本控制 — 所有設計迭代都會被保存，方便用戶隨時切換到之前的版本。

## 快速開始

1. 安裝 Open CoDesign
```bash
brew install --cask opencoworkai/tap/open-codesign
```
2. 添加你的 API 密鑰
```bash
在首次啟動時，將 API 密鑰粘貼到設置頁面
```
3. 輸入提示生成原型
```bash
選擇內建範本或描述自己的設計需求
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 3553 stars（323/天），forks 349（9.8%），顯示出強勁的增長潛力。開發者 hqhq1025 和團隊專注於提供一個開源替代方案，解決了用戶對於雲端設計工具的依賴問題。這個工具的出現正好填補了市場上對於本地化、靈活性和多模型支持的需求，尤其是在 AI 設計領域。社群的活躍度和持續的功能更新也吸引了許多開發者的關注。

## 適合誰使用

**目標受眾**：需要快速生成設計原型並希望避免雲端依賴的設計團隊或個人開發者。

> [!example] 使用場景
> - UI 設計師用它來快速生成應用程式的原型，因為它支持多種 AI 模型並且可以本地運行，避免了雲端延遲。
> - 產品經理用它來創建市場推廣簡報，因為它能夠將提示直接轉換為 PPTX 格式，節省了大量的設計時間。
> - 開發者用它來生成 HTML 頁面，因為它支持即時預覽和版本控制，讓修改變得更加方便。

## 架構分析

Open CoDesign 採用 Electron 框架構建，這使得它能夠在多個平台上運行。應用的核心是將用戶的提示轉換為可編輯的設計原型，並支持多種 AI 模型的接入。資料流方面，應用在本地保存所有設計版本，並使用 SQLite 進行版本控制。

這種設計使得用戶能夠隨時回溯到之前的版本，並且在設計過程中保持資料的隱私。選擇 Electron 框架的代價是可能增加應用的體積和資源消耗，但這樣的選擇使得開發過程更為高效，並且能夠快速迭代功能。整體架構的擴展性良好，未來可以輕鬆加入新的 AI 模型或功能模組。

## 技術深入分析

Open CoDesign 的核心技術機制在於其多模型支持，這使得用戶可以根據需求選擇最合適的 AI 模型進行設計。應用內部使用了 Electron 框架，這使得它能夠在多平台上運行，並且能夠快速迭代功能。效能方面，因為所有資料都在本地處理，這樣可以減少延遲，並提高用戶的操作體驗。設計上，選擇本地運行的方式使得資料隱私得到了保障，但也可能增加應用的資源消耗。技術上，Open CoDesign 依賴於 SQLite 進行版本控制，這樣用戶可以隨時回溯到之前的設計版本。對於未來的擴展性，這種架構設計使得新功能的添加變得更加容易，並且可以靈活地接入新的 AI 模型。整體來看，這是一個具有良好潛力的設計工具，特別適合需要快速原型設計的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指南，安裝過程順暢，沒有明顯的坑。文檔中包含了快速入門指南，對於新手來說相對友好。文件目前僅提供英文和簡體中文版本，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 開源且免費，無需訂閱費用。
> - 支持多種 AI 模型，靈活性高。
> - 本地運行，保障資料隱私。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性。
> - 某些功能需要手動啟用，使用上不夠直觀。
> - 對於大型團隊的協作支持尚不完善。

> [!warning] 注意事項
> - 目前僅支援 macOS 12+、Windows 10+ 和 Linux（glibc ≥ 2.31）。
> - 某些功能（如 AI 圖像生成）默認關閉，需要在設置中手動啟用。
> - 仍在 beta 階段，可能存在未解決的 bug 和功能不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [OpenAI/Claude](https://github.com/OpenAI/Claude) | Claude 是一個封閉的商業產品，僅支持其自家的模型，而 Open CoDesign 提供多模型支持，並且是開源的。 |
| [Vercel/v0](https://github.com/Vercel/v0) | Vercel 的 v0 是一個雲端工具，無法本地運行，而 Open CoDesign 完全支持本地運行，保障資料隱私。 |
| [Figma/Figma AI](https://github.com/Figma/Figma AI) | Figma AI 是一個基於雲端的設計工具，無法提供本地化的設計流程，而 Open CoDesign 允許用戶在本地進行設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/Claude](https://github.com/OpenAI/Claude) | Claude 是一個封閉的商業產品，僅支持其自家的模型，而 Open CoDesign 提供多模型支持，並且是開源的。 | 如果你的團隊已經在使用 Claude 且需要其特定功能，則可以選擇 Claude。 | medium，因為需要重新設置和適應不同的工作流程。 |
| [Vercel/v0](https://github.com/Vercel/v0) | Vercel 的 v0 是一個雲端工具，無法本地運行，而 Open CoDesign 完全支持本地運行，保障資料隱私。 | 如果你的團隊已經在使用 Vercel 並需要雲端協作功能，則可以選擇 Vercel。 | high，因為需要重新設置整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **open-codesign** | **Claude** | **v0** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude 是一個封閉的商業產品，僅支持其自家的模型，而 Open CoDesign 提供多模型支持，並且是開源的。 | Vercel 的 v0 是一個雲端工具，無法本地運行，而 Open CoDesign 完全支持本地運行，保障資料隱私。 |
> | 遷移成本 | - | medium，因為需要重新設置和適應不同的工作流程。 | high，因為需要重新設置整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Claude 且需要其特定功能，則可 | 如果你的團隊已經在使用 Vercel 並需要雲端協作功能，則 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些 API 密鑰在首次導入時可能無法正確識別
  - 解法：重新啟動應用並再次導入密鑰
- **[HIGH]** 在某些平台上安裝後需要手動調整權限
  - 解法：按照 README 中的指示進行權限調整
- [MEDIUM] 生成過程中可能會出現不穩定的行為
  - 解法：定期保存設計版本以防丟失

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊進行快速原型設計 | 非常適合 | 本地運行和多模型支持使得設計過程高效且靈活。 |
| 大型企業的設計部門 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 獨立開發者進行個人項目 | 適合 | 開源且免費，適合個人使用。 |
| 需要雲端協作的設計團隊 | 不適合 | 完全本地運行，無法提供雲端協作功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到靈活的設計工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用在本地運行，不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
| Forks | 349 |
| Open Issues | 43 |
| Issue 解決率 | 43% (32 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://opencoworkai.github.io/open-codesign/) |
| Repo 大小 | 61.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OpenCoworkAI/open-codesign) |
| Topics | `ai-design` `anthropic` `byok` `claude` `claude-code` `claude-design` `claude-design-alternative` `deepseek` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@biomejs/biome` `@changesets/cli` `@iarna/toml` `@open-codesign/core` `@open-codesign/shared` `@types/node` `acorn` `husky` `tsx` `turbo` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "JavaScript" : 8
>     "CSS" : 1
>     "Vue" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hqhq1025](https://github.com/hqhq1025) | 492 |
> | [@Sun-sunshine06](https://github.com/Sun-sunshine06) | 34 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 7 |
> | [@chengjl19](https://github.com/chengjl19) | 3 |
> | [@L4b0R](https://github.com/L4b0R) | 3 |

**最新版本**：v0.1.4 (2026-04-23)

> [!info]- Release Notes
> > 🌐 **Languages:** English (below) · [简体中文](#中文版)
> 
> # v0.1.4 — AI images, ChatGPT subscription login, and a big reliability wave
> 
> > Everything you'd run into on a tricky API setup now tells you exactly what's wrong — plus the agent can now generate its own images.
> 
> ## Highlights
> 
> - **🎨 AI image generation** — the agent can now generate bitmap assets (heroes, product shots, illustrations, logos) inline while designing. gpt-image-2 via OpenAI, or any OpenRouter image model. Off by default; opt in from Settings. by @yangjunx21 🎉
> - **🔐 ChatGPT Plus / Codex subscription login** — one-click OAuth, no API key required. Your existing subscription becomes your model budget.
> - **⚙️ CLIProxyAPI one-click import** — Open CoDesign now detects a running CLIProxyAPI instance on startup and imports it automatically. Preset + smart model auto-discovery included for manual setup.
> - **🛠 Clearer errors for third-party relays** — connections that time out, truncate SSE, or reject the Messages API now give actionable hints instead of `undefined`. If your relay is misbehaving, you'll know which one and why.
> 
> ## What's fixed
> 
> Provider & relay compatibility (the big wave):
> 
> - Gemini via third-party relay: API keys with the `models/` prefix now work correctly (fixes #175, reported by @CaioGS06) by @Sun-sunshine06
> - OpenAI Responses endpoints no longer reject with "instructions are required" (fixes #134) by @Sun-sunshine06
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，持續更新和解決問題。
**連結**：[文件](https://opencoworkai.github.io/open-codesign/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-26 ~ 2026-04-27）
> **活躍天數** 2 天 · **最新 commit** docs: mention lint autofix command for contributors

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#260](https://github.com/OpenCoworkAI/open-codesign/issues/260) | [Bug]: GENERATION_FAILED (fp: b27a1f89) `bug` `triage` | 0 | 1 |
> | [#257](https://github.com/OpenCoworkAI/open-codesign/issues/257) | [Bug]: Kimi-K2.6 and other models incorrectly receives `role `bug` `triage` | 0 | 1 |
> | [#256](https://github.com/OpenCoworkAI/open-codesign/issues/256) | [Feature]: Add directory view `enhancement` `triage` | 0 | 1 |
> | [#254](https://github.com/OpenCoworkAI/open-codesign/issues/254) | [v0.2] dev/v0.2 分支 Bug 清单 — 2026-04-29 审计 `bug` | 0 | 2 |
> | [#252](https://github.com/OpenCoworkAI/open-codesign/issues/252) | [Bug]: GENERATION_FAILED (fp: b27a1f89) `bug` `triage` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Open CoDesign
> 
> **简体中文**: [README.zh-CN.md](./README.zh-CN.md)
> 
> > Your prompts. Your model. Your laptop.
> >
> > Turn prompts into polished artifacts — locally, openly, and with whichever model you already pay for.
> 
> [Website](https://opencoworkai.github.io/open-codesign/) · [Quickstart](#quickstart) · [What's new](https://github.com/OpenCoworkAI/open-codesign/releases) · [Changelog](./CHANGELOG.md) · [Discussions](https://github.com/OpenCoworkAI/open-codesign/discussions) · [Docs](https://opencoworkai.github.io/open-codesign/quickstart) · [Contributing](./CONTRIBUTING.md) · [Security](./SECURITY.md)
> 
> **Open-source alternative to:** [Claude Design](https://opencoworkai.github.io/open-codesign/claude-design-alternative) · [v0 by Vercel](https://opencoworkai.github.io/open-codesign/v0-alternative) · [Lovable](https://opencoworkai.github.io/open-codesign/lovable-alternative) · [Bolt.new](https://opencoworkai.github.io/open-codesign/bolt-alternative) · [Figma AI](https://opencoworkai.github.io/open-codesign/figma-ai-alternative)
> 
>   
> 
>   
>   
>   
>   
>   
> 
>   
>   
>   
>   
> 
>   claude-code · claude-design-alternative · v0-alternative · bolt-alternative · lovable-alternative · figma-alternative · ai-design · design-to-code · prompt-to-design · ai-prototyping · desktop-design-tool · byok · local-first · multi-model · electron
> 
> ---
> 
> 
> ## Quickstart
> 
> **Time to first artifact:** about 3 minutes
> 
> **Requires:** one API key or local Ollama
> 
> **Runs on:** macOS 12+ (Monterey or later), Windows 10+, Linux (glibc ≥ 2.31)
> 
> 
> ### 1. Install
> 
> **One-liner** (recommended):
> 
> ```bash
> 
> ## What it is
> 
> Turn a prompt into a polished prototype, slide deck, or marketing asset, locally, with the model you already use.
> 
> **Open CoDesign is the open-source Claude Design alternative** — built for people who want the speed of AI-native design tools without subscription lock-in, cloud-only workflows, or being forced onto a single provider. An MIT-licensed desktop app, local-first from day one, with BYOK for any model (Claude, GPT, Gemini, DeepSeek, Kimi, GLM, Ollama, or any OpenAI-compatible endpoint). One-click import of your existing Claude Code or Codex API key gets you running in under 90 seconds.
> 
> ---
> 
> 
> ## Highlights
> 
>   
>     
>       
>         
>       
>       Comment, don’t retype.Click any element, drop a pin, and let the model rewrite only that region.
>     
>     
>       
>         
>       
>       AI-tuned sliders.The model surfaces the parameters worth tweaking, so you can refine color, spacing, and typography without another full prompt.
>     
>   
>   
>     
>       
>         
>       
>       Every iteration, kept.Designs are saved locally, with instant switching between recent versions.
>     
>     
>       
>         
>       
>       Watch the agent work.Todos, tool calls, and live progress stay visible and interruptible throughout generation.
>     
>   
> 
> ---
> 
> 
> ### 2. Add your API key
> 
> On first launch, Open CoDesign opens the Settings page. Paste any supported provider key:
> 
> - Anthropic (`sk-ant-…`)
> - OpenAI (`sk-…`)
> - Google Gemini
> - Any OpenAI-compatible relay (OpenRouter, SiliconFlow, local Ollama)
> 
> Credentials stay in `~/.config/open-codesign/config.toml` (file mode 0600, same convention as Claude Code, Codex, and `gh` CLI). Nothing leaves your machine unless your chosen model provider requires it.
> 
> 
> ## Why people star it
> 
> - **Runs on your laptop** — no mandatory cloud workspace
> - **Works with your model** — Claude, GPT, Gemini, Ollama, OpenRouter, and more
> - **Exports real files** — HTML, PDF, PPTX, ZIP, Markdown
> - **Shows its work** — live agent activity, visible tool calls, interruptible generation
> 
> ---
> 
> 
> ## Why Open CoDesign?
> 
> Open source, desktop-native, and built for people who do not want their design workflow locked to one model or one cloud.
> 
> | | **Open CoDesign** | Claude Design | v0 by Vercel | Lovable |
> |---|:---:|:---:|:---:|:---:|
> | Open source | ✅ MIT | ❌ Closed | ❌ Closed | ❌ Closed |
> | Desktop native | ✅ Electron | ❌ Web only | ❌ Web only | ❌ Web only |
> | Bring your own key | ✅ Any provider | ❌ Anthropic only | ❌ Vercel only | ⚠️ Limited |
> | Local / offline | ✅ Fully local app | ❌ Cloud | ❌ Cloud | ❌ Cloud |
> | Models | ✅ 20+ (Claude, GPT, Gemini, Ollama…) | Claude only | GPT-4o | Multi-LLM |
> | Version history | ✅ Local SQLite snapshots | ❌ | ❌ | ❌ |
> | Data privacy | ✅ On-device app state | ❌ Cloud-processed | ❌ Cloud | ❌ Cloud |
> | Editable export | ✅ HTML, PDF, PPTX, ZIP, Markdown | ⚠️ Limited | ⚠️ Limited | ⚠️ Limited |
> | Price | ✅ Free app, token cost only | 💳 Subscription | 💳 Subscription | 💳 Subscription |
> 
> ---
> 
> 
> ## What's new
> 
> - **v0.2.0** *(in preparation, expected in about a week)* — Agentic Design: workspace-backed design sessions · permissioned file/tool loop · lazy skills and scaffolds · `DESIGN.md` design systems
> - **v0.1.4** *(2026-04-23)* — AI image generation · ChatGPT Plus/Codex subscription support · CLIProxyAPI one-click import · API config hardening
> - **v0.1.3** *(2026-04-21)* — Gemini `models/` prefix fix · OpenAI-compatible relay "instructions required" fix · third-party relay SSE-truncation hint
> - **v0.1.2** *(2026-04-21)* — Release pipeline · Homebrew / winget / Scoop packaging manifests
> 
> [Full release history →](https://github.com/OpenCoworkAI/open-codesign/releases) · [Changelog →](./CHANGELOG.md)
> 
> ---
> 
> 
> ## See it generate
> 
> From a blank prompt to a finished artifact, the agent plans, writes, self-checks, and ships something with hover states, tabs, and empty states already wired up:
> 
> ---
> 
> 
> # Windows
> winget install OpenCoworkAI.OpenCoDesign
> 
> 
> # macOS
> brew install --cask opencoworkai/tap/open-codesign
> ```
> 
> **Or direct download** (v0.1.x) from [GitHub Releases](https://github.com/OpenCoworkAI/open-codesign/releases):
> 
> | Platform | File |
> |---|---|
> | macOS (Apple Silicon) | `open-codesign-*-arm64.dmg` |
> | macOS (Intel) | `open-codesign-*-x64.dmg` |
> | Windows (x64) | `open-codesign-*-x64-setup.exe` |
> | Windows (ARM64) | `open-codesign-*-arm64-setup.exe` |
> | Linux (x64, AppImage) | `open-codesign-*-x64.AppImage` |
> | Linux (x64, Debian/Ubuntu) | `open-codesign-*-x64.deb` |
> | Linux (x64, Fedora/RHEL) | `open-codesign-*-x64.rpm` |
> 
> Each release ships with `SHA256SUMS.txt` and a CycloneDX SBOM (`*-sbom.cdx.json`) so you can verify what you downloaded.
> 
> More package managers
> 
> | Manager | Command | Status |
> |---|---|---|
> | Scoop (Windows) | `scoop bucket add opencoworkai https://github.com/OpenCoworkAI/scoop-bucket && scoop install open-codesign` | 🟢 Live |
> | Flathub (Linux) | `flatpak install flathub ai.opencowork.codesign` | ⏸ Deferred to v0.2 (needs signed build + AppStream metadata) |
> | Snap (Linux) | `snap install --dangerous open-codesign-*.snap` | 🟡 Attached to releases best-effort; Snap Store publish not yet wired |
> 
> After each tag push, CI auto-syncs SHAs back into `packaging/` and (once the winget PR merges) auto-opens downstream bumps. Every `packaging/*/README.md` documents its own mirror flow.
> 
> > **v0.1 note:** installers are unsigned. On **macOS Sequoia 15+** right-click → Open no longer bypasses Gatekeeper, and "Open Anyway" in System Settings often fails. Reliable one-liner:
> >
> > ```sh
> > xattr -cr "/Applications/Open CoDesign.app"
> > ```
> >
> > Then double-click normally. (Older 0.1.x builds are installed as `/Applications/open-codesign.app`.)
> > On **Windows**: SmartScreen → More info → Run anyway.
> >
> > Want a verified build? Compile from source — see [CONTRIBUTING.md](./CONTRIBUTING.md).
> 
> 
> ### 3. Type your first prompt
> 
> Pick one of **fifteen built-in demos** — landing page, dashboard, pitch slide, pricing, mobile app, chat UI, event calendar, blog article, receipt/invoice, portfolio, settings panel, and more — or describe your own. A sandboxed prototype appears in seconds.
> 
> ---
> 
> 
> ## Bring your stack
> 
> Already using Claude Code or Codex? Your providers, models, and API keys import in one click, with no copy-paste and no need to re-enter settings:
> 
> ---
> 
> 
> ## Built-in taste
> 
> Generic AI tools tend to produce generic output. Open CoDesign ships with **twelve built-in design skill module

## 延伸閱讀

相關概念：[[AI 設計]] · [[本地優先]] · [[多模型]]

相關專案：[[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

[GitHub](https://github.com/OpenCoworkAI/open-codesign) · [官方網站](https://opencoworkai.github.io/open-codesign/)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 設計工具" AND file.name != "OpenCoworkAI--open-codesign"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "OpenCoworkAI--open-codesign"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "OpenCoworkAI--open-codesign" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "OpenCoworkAI--open-codesign"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI 設計","本地優先","多模型"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "OpenCoworkAI--open-codesign" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "OpenCoworkAI--open-codesign" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "OpenCoworkAI" AND file.name != "OpenCoworkAI--open-codesign"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
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

> **2026-04-23** — 首次收錄
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

- [[2026-04-25|2026-04-25]] — 再次上榜，2.2k stars
- [[2026-04-24|2026-04-24]] — 再次上榜，1.9k stars
- [[2026-04-23|2026-04-23]] — 首次收錄，1.3k stars
