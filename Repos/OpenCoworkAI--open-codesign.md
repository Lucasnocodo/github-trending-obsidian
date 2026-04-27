---
repo: OpenCoworkAI/open-codesign
url: https://github.com/OpenCoworkAI/open-codesign
owner: OpenCoworkAI
owner_type: Organization
language: TypeScript
license: MIT
description: "Open-source Claude Design alternative. One-click import your Claude Code / Codex API key. Prompt → prototype / slides / PDF. Multi-model (Claude, GPT, Gemini, Kimi, GLM, Ollama). BYOK, local-first, MIT."
homepage: "https://opencoworkai.github.io/open-codesign/"
stars: 2734
stars_per_day: 342
forks: 241
open_issues: 43
created: 2026-04-18
pushed_at: 2026-04-26
first_seen: 2026-04-23
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v0.1.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-23
use_case: "提供一個開源的設計工具，讓用戶能夠快速將提示轉換為互動原型、簡報或市場資產。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 5
engagement: "low"
issue_close_rate: 39
repo_size_kb: 63028
readme_length: 9952
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1261,2026-04-23:1276,2026-04-24:1902,2026-04-24:1911,2026-04-25:2186,2026-04-25:2189,2026-04-26:2396,2026-04-27:2734"
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
  - "提供一個開源的設計工具，讓用戶能夠快速將提示轉換為互動原型、簡報或市場資產。"
---

# open-codesign

**2.7k** stars · **342** stars/天 · 建立 8 天前 · TypeScript · MIT

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
> 提供一個開源的設計工具，讓用戶能夠快速將提示轉換為互動原型、簡報或市場資產。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (342 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在本地生成設計原型而不依賴雲服務的設計師和開發者。
> **一句話重點** Open CoDesign 提供了一個靈活且本地化的設計解決方案，適合不希望被鎖定在雲端服務的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/OpenCoworkAI--open-codesign");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "OpenCoworkAI--open-codesign" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習、2 小時整合，得到靈活的設計工具，值得一試。

> [!abstract] 核心創新
> Open CoDesign 是一個開源的 AI 設計工具，完全在本地運行，支持多種模型並避免雲端依賴。

## 專案簡介

Open CoDesign 是一個開源的 AI 設計工具，旨在將用戶的提示轉換為精緻的原型、簡報或市場資產，並且完全在本地運行。用戶只需提供一個 API 金鑰，便可在 3 分鐘內開始使用，支持多種模型如 Claude、GPT、Gemini 等。這個工具的賣點在於能夠在本地生成設計，避免了雲端依賴和訂閱鎖定的問題。技術上，Open CoDesign 使用 Electron 框架來構建桌面應用，並且支持多種輸出格式，包括 HTML、PDF、PPTX 等，這使得生成的設計可以直接用於實際應用。

與同類工具相比，如 Claude Design 和 Figma AI，Open CoDesign 提供更大的靈活性，因為它支持多種模型並且不依賴於單一的雲服務。使用者可以在本地保存設計版本，並且在生成過程中可以即時查看和修改設計，這樣的設計流程能夠提高工作效率。雖然目前的版本仍在快速迭代中，但已經顯示出穩定性和可靠性，特別是在處理大型設計項目時。對於需要快速生成設計原型的團隊來說，這是一個值得考慮的工具，尤其是對於那些希望避免高額訂閱費用的用戶。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Vue` · `Shell` · `Ruby` · `HTML`

## 重點功能

- 多模型支持 — 支援 Claude、GPT、Gemini 等多種模型，讓用戶可以自由選擇。
- 本地運行 — 完全在本地生成設計，避免雲端依賴。
- 一鍵導入 API 金鑰 — 用戶可以快速導入現有的 Claude Code 或 Codex API 金鑰。
- 多種輸出格式 — 支援 HTML、PDF、PPTX、ZIP 和 Markdown 格式的輸出。
- 即時生成和編輯 — 用戶可以在生成過程中即時查看和修改設計，提升效率。

## 快速開始

1. 安裝 Open CoDesign
```bash
brew install --cask opencoworkai/tap/open-codesign
```
2. 添加 API 金鑰
```bash
在首次啟動時，將支持的提供者金鑰粘貼到設置頁面
```
3. 輸入提示生成設計
```bash
選擇內建示例或描述自己的設計需求
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 2734 stars（342/天），forks 241（8.8%），這顯示出強勁的增長潛力。這個專案的主要貢獻者包括 hqhq1025 和 Sun-sunshine06，他們在開源社群中有一定的影響力。Open CoDesign 解決了許多設計工具在雲端依賴和訂閱費用上的痛點，讓用戶可以自由選擇模型，並在本地生成設計。這種靈活性在當前市場上是相對罕見的，尤其是在許多競爭對手如 Claude Design 和 Figma AI 都是基於雲的解決方案。社群的活躍度和開放的討論平台也促進了用戶的參與和反饋，進一步推動了專案的成長。

## 適合誰使用

**目標受眾**：希望在本地生成設計原型而不依賴雲服務的設計師和開發者。

> [!example] 使用場景
> - UI 設計師用它來快速生成產品原型，因為可以即時查看設計效果並進行調整，節省了大量的設計時間。
> - 產品經理用它來創建簡報和市場資產，因為支持多種輸出格式，方便直接用於會議和報告。
> - 開發者用它來生成 HTML 和 CSS 原型，因為可以快速將設計轉換為可用的前端代碼，提升開發效率。

## 架構分析

Open CoDesign 使用 Electron 框架構建桌面應用，這使得它能夠在多個平台上運行。資料流方面，使用者的提示經過選定的 AI 模型處理，生成的設計結果會即時顯示在應用中。這種設計選擇使得應用能夠快速響應用戶操作，並且能夠在本地保存設計版本。選擇 Electron 的代價是需要額外的資源來支持應用的運行，但這樣的選擇使得用戶能夠享受更流暢的本地體驗。擴展性方面，由於應用是本地運行，對於大型設計項目的處理能力取決於用戶的硬體配置。

## 技術深入分析

Open CoDesign 的核心技術機制是基於 Electron 框架，這使得它能夠在多個操作系統上運行。它使用多種 AI 模型進行設計生成，並且支持即時編輯和版本控制。效能方面，因為是本地運行，設計生成的速度取決於用戶的硬體配置，通常在幾秒鐘內完成。設計選擇上，Open CoDesign 針對不同的設計需求提供了多種內建模組，這些模組能夠幫助用戶快速生成符合需求的設計。選擇 Electron 的好處是能夠快速開發跨平台應用，但代價是需要更多的資源來支持應用運行。技術風險方面，隨著用戶數量的增加，應用的性能可能會受到影響，特別是在處理大型設計項目時。整合方面，Open CoDesign 可以與現有的設計工具鏈進行整合，但可能需要一些適配工作來確保兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，沒有明顯的坑。提供了快速入門指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 開源且免費，無需訂閱費用。
> - 支持多種 AI 模型，靈活性高。
> - 完全在本地運行，保護用戶數據隱私。

> [!danger] 缺點
> - 目前版本仍在快速迭代中，可能存在不穩定性。
> - 需要提供有效的 API 金鑰，增加了使用門檻。
> - 對於大型團隊的協作支持可能不足。

> [!warning] 注意事項
> - 僅支援 macOS 12+、Windows 10+ 和 Linux (glibc ≥ 2.31)
> - 目前的版本仍在快速迭代中，可能存在不穩定的情況
> - 需要提供有效的 API 金鑰才能使用多模型功能

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 提供與 Claude Design 相似的功能，但專注於 Claude 模型，缺乏多模型支持。 |
| Figma AI | Figma AI 是一個雲端解決方案，無法在本地運行，且需要訂閱費用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個開源設計工具，但不支持多模型和本地運行，功能較為有限。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Claude Design | Claude Design 是一個專注於 Claude 模型的設計工具，但不支持多模型選擇，限制了用戶的靈活性。 | 如果你的團隊已經在使用 Claude 並且不需要其他模型的支持，則可以選擇它。 | low，因為界面和操作邏輯相似。 |
| Figma AI | Figma AI 是一個雲端解決方案，專注於協作設計，但無法在本地運行。 | 如果你的團隊需要強大的協作功能並且不介意雲端依賴，則可以選擇它。 | medium，因為需要重新適應雲端工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **open-codesign** | **Claude Design** | **Figma AI** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude Design 是一個專注於 Claude 模型的設計工具，但不支持多模型選擇，限制了用戶的靈活性。 | Figma AI 是一個雲端解決方案，專注於協作設計，但無法在本地運行。 |
> | 遷移成本 | - | low，因為界面和操作邏輯相似。 | medium，因為需要重新適應雲端工作流。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Claude 並且不需要其他模型的支 | 如果你的團隊需要強大的協作功能並且不介意雲端依賴，則可以選擇 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的設計項目，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些模型在特定情況下可能無法正常工作
  - 解法：嘗試使用其他模型或檢查 API 金鑰設置
- **[HIGH]** 在大型設計項目中可能會遇到性能瓶頸
  - 解法：確保使用者的硬體配置足夠強大

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的設計團隊 | 非常適合 | 本地運行且無需訂閱費用，適合小型團隊使用。 |
| 需要快速生成設計原型的個人開發者 | 非常適合 | 支持多種模型，能快速生成所需的設計。 |
| 大型企業的設計部門 | 不適合 | 目前版本的協作功能可能不足以滿足大型團隊的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到靈活的設計工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本地運行的應用，不會存取敏感資料，且不需要高權限。

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
| Forks | 241 |
| Open Issues | 43 |
| Issue 解決率 | 39% (27 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://opencoworkai.github.io/open-codesign/) |
| Repo 大小 | 61.6 MB |
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
> | [@hqhq1025](https://github.com/hqhq1025) | 490 |
> | [@Sun-sunshine06](https://github.com/Sun-sunshine06) | 33 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
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

**社群活躍度**：社群活躍度中等，開放的討論平台促進用戶參與。
**連結**：[文件](https://opencoworkai.github.io/open-codesign/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-26 ~ 2026-04-26）
> **活躍天數** 1 天 · **最新 commit** docs: sync agent guides with v0.2 plan

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#245](https://github.com/OpenCoworkAI/open-codesign/issues/245) | 你的 Mac 是 Intel (x64) 架构 `bug` `triage` | 0 | 1 |
> | [#238](https://github.com/OpenCoworkAI/open-codesign/issues/238) | 交流群已经满员了 麻烦拉一下或者更新二维码，谢谢 `enhancement` `triage` | 0 | 1 |

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
> - **v0.1.4** *(coming)* — 🎨 AI image generation · ChatGPT Plus/Codex subscription support · CLIProxyAPI one-click import · API config hardening
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
> Generic AI tools tend to produce generic output. Open CoDesign ships with **twelve built-in design skill modules** — slide decks, dashboards, landing pages, SVG charts, glassmorphism, editorial typography, heroes, pricing, footers, chat UIs, data tables, and calendars — plus a built-in taste layer that stee

## 延伸閱讀

相關概念：[[AI 設計]] · [[設計到代碼]] · [[本地優先]]

相關專案：[[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/OpenCoworkAI/open-codesign) · [官方網站](https://opencoworkai.github.io/open-codesign/)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "OpenCoworkAI--open-codesign"
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
> const concepts = ["AI 設計","設計到代碼","本地優先"];
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
