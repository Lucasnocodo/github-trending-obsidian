---
repo: Gitlawb/openclaude
url: https://github.com/Gitlawb/openclaude
owner: Gitlawb
owner_type: Organization
language: TypeScript
license: N/A
description: "Claude Code opened to any LLM — OpenAI, Gemini, DeepSeek, Ollama, and 200+ models via OpenAI-compatible API shim"
homepage: ""
stars: 11768
stars_per_day: 5884
forks: 4165
open_issues: 69
created: 2026-04-01
pushed_at: 2026-04-04
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "讓 Claude Code 支援任何 LLM，無論是 OpenAI、Gemini 還是其他 200 多種模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-07"
contributor_count: 5
engagement: "high"
issue_close_rate: 57
repo_size_kb: 9886
readme_length: 7154
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3599,2026-04-02:3635,2026-04-03:7609,2026-04-03:7630,2026-04-04:11768"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "openclaude"
  - "Gitlawb/openclaude"
  - "讓 Claude Code 支援任何 LLM，無論是 OpenAI、Gemini 還是其他 200 多種模型。"
---

# openclaude

**7.6k** stars · **7.6k** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

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

`ORG` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 支援任何 LLM，無論是 OpenAI、Gemini 還是其他 200 多種模型。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (7.6k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** High
> **適合** 希望在多種 LLM 之間靈活切換的開發者，特別是需要本地運行模型的使用者。
> **一句話重點** OpenClaude 的設計讓開發者能夠靈活地在多種 LLM 之間切換，這在當前的開發環境中是非常重要的能力。

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
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 提供了一個 OpenAI 兼容的 API shim，讓 Claude Code 能夠與多種 LLM 無縫整合。

## 專案簡介

OpenClaude 是一個強大的工具，讓使用者能夠將 Claude Code 與各種 LLM 結合，透過一個 OpenAI 兼容的 API shim，使用者可以輕鬆地接入 GPT-4o、DeepSeek、Gemini 等模型。使用者只需安裝 npm 套件 `@gitlawb/openclaude`，然後透過 `openclaude` 指令啟動，便能夠使用各種工具，如 bash、文件讀寫、grep 等。這個設計的核心在於它的 API shim，能夠將不同模型的訊息格式轉換，使得 Claude Code 的工具系統能夠無縫運作。技術上，這個專案使用 TypeScript 和 JavaScript，並依賴 Bun 作為建置工具，整體架構輕量且易於擴展。

與其他 LLM 工具相比，如 Ollama 和 Codex，OpenClaude 提供了更廣泛的模型支持，並且能夠在本地運行，這對於需要在無網絡環境下工作的使用者特別有用。雖然它的功能強大，但使用者需注意，某些功能如 WebSearch 在非 Anthropic 提供者上是禁用的，這可能會影響某些使用情境的效果。這個專案目前處於早期階段，但已經有穩定的社群支持，並且活躍度高，適合對 LLM 整合有需求的開發者使用。對於希望在本地運行模型的使用者，OpenClaude 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `Bun`

## 重點功能

- 多模型支持 — 兼容 OpenAI、Gemini、DeepSeek 等 200 多種模型。
- 即時工具調用 — 支持多步驟工具鏈，模型可以調用工具並獲取結果。
- 本地推論 — 支持在 Apple Silicon 上運行本地模型，無需網絡。
- 持久記憶系統 — 提供持久的記憶功能，增強模型的上下文理解。
- 即時流式傳輸 — 支持實時的 token 流式傳輸，提升交互體驗。

## 快速開始

1. 安裝 OpenClaude
```bash
npm install -g @gitlawb/openclaude
```
2. 設置環境變數
```bash
export CLAUDE_CODE_USE_OPENAI=1
```
3. 啟動 OpenClaude
```bash
openclaude
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 OpenClaude 和設置環境變數",
  "openclaude",
  "# 預期輸出：啟動 OpenClaude 並顯示可用的工具和模型"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 7630 stars（7630/天），forks 2925（38.3%），這顯示出極高的使用者興趣。作者 kevincodex1 和其他貢獻者在 LLM 領域有豐富的經驗，這個專案解決了多種 LLM 整合的痛點，之前的方案往往只能支持特定模型，無法靈活切換。這個專案的推出引起了社群的廣泛討論，特別是在開源 LLM 的應用場景中。技術上，隨著 OpenAI 和其他模型的 API 越來越普及，這個工具的需求也隨之增加。高達 38.3% 的 forks/stars 比率顯示出許多人正在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望在多種 LLM 之間靈活切換的開發者，特別是需要本地運行模型的使用者。

> [!example] 使用場景
> - 後端工程師用它來整合多種 LLM 進行 API 開發，因為能夠靈活選擇模型提升開發效率。
> - 資料科學家用它來在本地運行大型模型進行數據分析，因為這樣可以避免網絡延遲和隱私問題。
> - 全端工程師用它來在 VS Code 中開發和測試 LLM 應用，因為提供了即時的開發環境和工具支持。

## 架構分析

OpenClaude 的架構設計為一個輕量級的 API shim，這樣的設計使得不同 LLM 之間的轉換變得簡單且高效。核心的 shim 負責將不同模型的訊息格式進行轉換，這樣 Claude Code 的工具系統就能夠無縫地與任何兼容的模型進行互動。這種設計的代價是需要額外的轉換邏輯，但這樣的靈活性使得使用者能夠根據需求選擇最合適的模型。由於使用了 Bun 作為建置工具，整體的依賴樹相對輕量，這使得安裝和運行都非常迅速。擴展性方面，這個架構能夠輕鬆添加新的模型支持，未來可以根據社群需求進行調整和擴展。

## 技術深入分析

OpenClaude 的核心技術機制在於其 API shim，這個 shim 負責將不同模型的訊息格式進行轉換，確保 Claude Code 的工具系統能夠與任何兼容的模型進行互動。這個設計選擇使得使用者能夠靈活選擇模型，並且能夠在不同的 LLM 之間無縫切換。效能方面，這個工具能夠處理多達 32K 的 token 輸出，這對於許多應用場景來說已經足夠。設計上選擇了 TypeScript 和 JavaScript，這使得開發者能夠快速上手並進行擴展。依賴樹相對輕量，這意味著安裝和運行都非常迅速，並且降低了潛在的技術債。技術風險方面，未來隨著模型數量的增加，可能會出現兼容性問題，這需要持續的維護和更新。整合方面，這個工具能夠輕鬆與現有的開發工具鏈結合，特別是在 VS Code 中的整合，使得開發者能夠快速啟動和使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件質量高，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要設置環境變數，對新手可能有些挑戰；有清晰的入門指南，適合各種程度的使用者；文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 靈活的模型選擇，支持多種 LLM。
> - 本地運行能力，適合需要隱私的使用者。
> - 即時工具調用和流式傳輸，提高交互效率。

> [!danger] 缺點
> - 某些功能在非 Anthropic 模型上受限。
> - 需要額外設置環境變數，對新手不太友好。
> - 在某些情況下，模型的性能可能不如預期。

> [!warning] 注意事項
> - WebSearch 在非 Anthropic 提供者上禁用。
> - 某些模型的 token 限制可能低於 32K，需注意使用。
> - 不支持某些特定的 Anthropic beta 功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 這個工具專注於 Claude Code 的原始實現，無法靈活切換模型，適合需要純粹 Claude 功能的使用者。 |
| [Ollama/ollama](https://github.com/Ollama/ollama) | Ollama 提供本地模型運行，但不支持如此多的模型選擇，適合對本地運行有需求的使用者。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 提供了一些特定功能，但缺乏 OpenAI 兼容性，適合只使用 Claude 的開發者。 |

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
| Forks | 2.9k |
| Open Issues | 49 |
| Issue 解決率 | 57% (64 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-04-01 |
| Repo 大小 | 9.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gitlawb/openclaude) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kevincodex1](https://github.com/kevincodex1) | 97 |
> | [@gnanam1990](https://github.com/gnanam1990) | 27 |
> | [@Vasanthdev2004](https://github.com/Vasanthdev2004) | 24 |
> | [@auriti](https://github.com/auriti) | 19 |
> | [@rajrasane](https://github.com/rajrasane) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度高，經常有更新和討論。
**連結**：[文件](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-02 ~ 2026-04-03）
> **活躍天數** 2 天 · **最新 commit** docs: add security policy

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#205](https://github.com/Gitlawb/openclaude/issues/205) | Unable to type | 2 | 3 |
> | [#173](https://github.com/Gitlawb/openclaude/issues/173) | Kindly have a look at my VS Code extension PR! | 2 | 1 |
> | [#193](https://github.com/Gitlawb/openclaude/issues/193) | We need provenance to be legal | 1 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaude
> 
> Use Claude Code with **any LLM** — not just Claude.
> 
> OpenClaude is a fork of the [Claude Code source leak](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code) (exposed via npm source maps on March 31, 2026). We added an OpenAI-compatible provider shim so you can plug in GPT-4o, DeepSeek, Gemini, Llama, Mistral, or any model that speaks the OpenAI chat completions API. It now also supports the ChatGPT Codex backend for `codexplan` and `codexspark`, and local inference via [Atomic Chat](https://atomic.chat/) on Apple Silicon.
> 
> All of Claude Code's tools work — bash, file read/write/edit, grep, glob, agents, tasks, MCP — just powered by whatever model you choose.
> 
> ---
> 
> ## Start Here
> 
> If you are new to terminals or just want the easiest path, start with the beginner guides:
> 
> - [Non-Technical Setup](docs/non-technical-setup.md)
> - [Windows Quick Start](docs/quick-start-windows.md)
> - [macOS / Linux Quick Start](docs/quick-start-mac-linux.md)
> 
> If you want source builds, Bun workflows, profile launchers, or full provider examples, use:
> 
> - [Advanced Setup](docs/advanced-setup.md)
> 
> ---
> 
> ## Beginner Install
> 
> For most users, install the npm package:
> 
> ```bash
> npm install -g @gitlawb/openclaude
> ```
> 
> The package name is `@gitlawb/openclaude`, but the command you run is:
> 
> ```bash
> openclaude
> ```
> 
> If you install via npm and later see `ripgrep not found`, install ripgrep system-wide and confirm `rg --version` works in the same terminal before starting OpenClaude.
> 
> ---
> 
> ## Fastest Setup
> 
> ### Windows PowerShell
> 
> ```powershell
> npm install -g @gitlawb/openclaude
> 
> $env:CLAUDE_CODE_USE_OPENAI="1"
> $env:OPENAI_API_KEY="sk-your-key-here"
> $env:OPENAI_MODEL="gpt-4o"
> 
> openclaude
> ```
> 
> ### macOS / Linux
> 
> ```bash
> npm install -g @gitlawb/openclaude
> 
> export CLAUDE_CODE_USE_OPENAI=1
> export OPENAI_API_KEY=sk-your-key-here
> export OPENAI_MODEL=gpt-4o
> 
> openclaude
> ```
> 
> That is enough to start with OpenAI.
> 
> ---
> 
> ## Choose Your Guide
> 
> ### Beginner
> 
> - Want the easiest setup with copy-paste steps: [Non-Technical Setup](docs/non-technical-setup.md)
> - On Windows: [Windows Quick Start](docs/quick-start-windows.md)
> - On macOS or Linux: [macOS / Linux Quick Start](docs/quick-start-mac-linux.md)
> 
> ### Advanced
> 
> - Want source builds, Bun, local profiles, runtime checks, or more provider choices: [Advanced Setup](docs/advanced-setup.md)
> 
> ---
> 
> ## Common Beginner Choices
> 
> ### OpenAI
> 
> Best default if you already have an OpenAI API key.
> 
> ### Ollama
> 
> Best if you want to run models locally on your own machine.
> 
> ### Codex
> 
> Best if you already use the Codex CLI or ChatGPT Codex backend.
> 
> ### Atomic Chat
> 
> Best if you want local inference on Apple Silicon with Atomic Chat. See [Advanced Setup](docs/advanced-setup.md).
> 
> ---
> 
> ## VS Code Extension
> 
> Want a native VS Code experience? Use the in-repo extension at `vscode-extension/openclaude-vscode` for one-command terminal launch and the `OpenClaude Terminal Black` theme.
> 
> ## What Works
> 
> - **All tools**: Bash, FileRead, FileWrite, FileEdit, Glob, Grep, WebFetch, WebSearch, Agent, MCP, LSP, NotebookEdit, Tasks
> - **Streaming**: Real-time token streaming
> - **Tool calling**: Multi-step tool chains (the model calls tools, gets results, continues)
> - **Images**: Base64 and URL images passed to vision models
> - **Slash commands**: /commit, /review, /compact, /diff, /doctor, etc.
> - **Sub-agents**: AgentTool spawns sub-agents using the same provider
> - **Memory**: Persistent memory system
> 
> ## What's Different
> 
> - **No thinking mode**: Anthropic's extended thinking is disabled (OpenAI models use different reasoning)
> - **No prompt caching**: Anthropic-specific cache headers are skipped
> - **No beta features**: Anthropic-specific beta headers are ignored
> - **Token limits**: Defaults to 32K max output — some models may cap lower, which is handled gracefully
> 
> ---
> 
> ## Web Search and Fetch
> 
> By default, `WebSearch` is disabled for all non-Anthropic providers. The native search backend requires either the Anthropic API or the Codex responses endpoint, so users on GPT-4o, DeepSeek, Gemini, Ollama, and other OpenAI-compatible providers get no web search at all.
> 
> `WebFetch` works but uses basic HTTP plus HTML-to-markdown conversion. That fails on JavaScript-rendered pages (React, Next.js, Vue SPAs) and sites that block plain HTTP requests.
> 
> Set a [Firecrawl](https://firecrawl.dev) API key to fix both:
> 
> ```bash
> export FIRECRAWL_API_KEY=your-key-here
> ```
> 
> With this set:
> 
> - `WebSearch` is enabled for all providers and routes through Firecrawl's search API
> - `WebFetch` uses Firecrawl's scrape endpoint instead of raw HTTP, handling JS-rendered pages correctly
> 
> Free tier at [firecrawl.dev](https://firecrawl.dev) includes 500 credits. The key is optional — if not set, both tools fall back to their original behavior.
> 
> ---
> 
> ## How It Works
> 
> The shim (`src/services/api/openaiShim.ts`) sits between Claude Code and the LLM API:
> 
> ```
> Claude Code Tool System
>         |
>         v
>   Anthropic SDK interface (duck-typed)
>         |
>         v
>   openaiShim.ts  <-- translates formats
>         |
>         v
>   OpenAI Chat Completions API
>         |
>         v
>   Any compatible model
> ```
> 
> It translates:
> - Anthropic message blocks → OpenAI messages
> - Anthropic tool_use/tool_result → OpenAI function calls
> - OpenAI SSE streaming → Anthropic stream events
> - Anthropic system prompt arrays → OpenAI system messages
> 
> The rest of Claude Code doesn't know it's talking to a different model.
> 
> ---
> 
> ## Model Quality Notes
> 
> Not all models are equal at agentic tool use. Here's a rough guide:
> 
> | Model | Tool Calling | Code Quality | Speed |
> |-------|-------------|-------------|-------|
> | GPT-4o | Excellent | Excellent | Fast |
> | DeepSeek-V3 | Great | Great | Fast |
> | Gemini 2.0 Flash | Great | Good | Very Fast |
> | Llama 3.3 70B | Good | Good | Medium |
> | Mistral Large | Good | Good | Fast |
> | GPT-4o-mini | Good | Good | Very Fast |
> | Qwen 2.5 72B | Good | Good | Medium |
> | Smaller models (<7B) | Limited | Limited | Very Fast |
> 
> For best results, use models with strong function/tool calling support.
> 
> ---
> 
> ## Files Changed from Original
> 
> ```
> src/services/api/openaiShim.ts   — NEW: OpenAI-compatible API shim (724 lines)
> src/services/api/client.ts       — Routes to shim when CLAUDE_CODE_USE_OPENAI=1
> src/utils/model/providers.ts     — Added 'openai' provider type
> src/utils/model/configs.ts       — Added openai model mappings
> src/utils/model/model.ts         — Respects OPENAI_MODEL for defaults
> src/utils/auth.ts                — Recognizes OpenAI as valid 3P provider
> ```
> 
> 6 files changed. 786 lines added. Zero dependencies added.
> 
> ---
> 
> ## Origin
> 
> This is a fork of [instructkr/claude-code](https://gitlawb.com/node/repos/z6MkgKkb/instructkr-claude-code), which mirrored the Claude Code source snapshot that became publicly accessible through an npm source map exposure on March 31, 2026.
> 
> The original Claude Code source is the property of Anthropic. This repository is not affiliated with or endorsed by Anthropic.
> 
> ---
> 
> ## License
> 
> This repository is provided for educational and research purposes. The original source code is subject to Anthropic's terms. The OpenAI shim additions are public domain.

## 延伸閱讀

相關概念：[[API 設計]] · [[多模態]] · [[容器化]]

相關專案：[[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]] · [[wong2--weixin-agent-sdk|wong2/weixin-agent-sdk]]

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

- [[2026-04-04|2026-04-04]] — 再次上榜，11.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.6k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，3.6k stars
