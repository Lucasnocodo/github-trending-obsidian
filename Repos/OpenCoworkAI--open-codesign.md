---
repo: OpenCoworkAI/open-codesign
url: https://github.com/OpenCoworkAI/open-codesign
owner: OpenCoworkAI
owner_type: Organization
language: TypeScript
license: MIT
description: "Open-source Claude Design alternative. One-click import your Claude Code / Codex API key. Prompt → prototype / slides / PDF. Multi-model (Claude, GPT, Gemini, Kimi, GLM, Ollama). BYOK, local-first, MIT."
homepage: "https://opencoworkai.github.io/open-codesign/"
stars: 3010
stars_per_day: 334
forks: 279
open_issues: 38
created: 2026-04-18
pushed_at: 2026-04-27
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
use_case: "提供開源的 Claude 設計替代方案，讓使用者能夠快速將提示轉換為原型、簡報或 PDF。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 5
engagement: "low"
issue_close_rate: 46
repo_size_kb: 63233
readme_length: 9977
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1261,2026-04-23:1276,2026-04-24:1902,2026-04-24:1911,2026-04-25:2186,2026-04-25:2189,2026-04-26:2396,2026-04-27:2734,2026-04-28:3010"
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
  - "提供開源的 Claude 設計替代方案，讓使用者能夠快速將提示轉換為原型、簡報或 PDF。"
---

# open-codesign

**3.0k** stars · **334** stars/天 · 建立 9 天前 · TypeScript · MIT

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
> 提供開源的 Claude 設計替代方案，讓使用者能夠快速將提示轉換為原型、簡報或 PDF。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (334 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速生成設計原型但不想依賴雲端服務的設計師和開發者。
> **一句話重點** Open CoDesign 提供了一個靈活的本地 AI 設計工具，讓用戶能夠自由選擇模型，避免了雲端服務的限制。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到靈活的設計工具，值得嘗試。

> [!abstract] 核心創新
> Open CoDesign 是一個開源的 AI 設計工具，支持多模型且本地運行，讓用戶能夠自由選擇使用的 AI 服務。

## 專案簡介

Open CoDesign 是一個開源的 AI 設計工具，旨在將用戶的提示轉換為精緻的原型、簡報或行銷資產，並且支持多種模型（如 Claude、GPT、Gemini 等）。用戶只需提供 API 金鑰，便可在本地環境中運行，無需依賴雲端服務。這種設計使得用戶能夠避免訂閱鎖定，並且可以自由選擇使用的模型。CLIProxyAPI 的一鍵導入功能，讓用戶能夠輕鬆整合現有的 API 實例，提升使用便利性。這個工具的賣點在於其本地運行的特性，讓用戶能夠在自己的設備上進行設計，並且隨時可以進行版本切換和即時修改。

技術上，它使用 TypeScript 和 Vue 實現，並且依賴於 Node.js 22 以上的環境，這使得其在性能上具備一定的優勢。與同類工具如 Figma AI 和 Claude Design 相比，Open CoDesign 提供了更多的靈活性，因為它支持多模型並且不需要持續的訂閱費用。在實際使用中，用戶可以快速生成設計，並且能夠即時查看設計過程，這對於需要快速迭代的團隊來說是非常有利的。雖然目前仍在 beta 階段，但其功能已經相當完整，適合小型團隊或個人使用。未來可能會進一步擴展功能，增強社群支持。

**技術棧**：`TypeScript` · `Vue` · `Node.js >= 22`

## 重點功能

- 多模型支持 — 兼容 Claude、GPT、Gemini 等多種模型，讓用戶可以選擇最適合的 AI 服務。
- 本地運行 — 所有設計過程在本地完成，無需依賴雲端，保障數據隱私。
- 一鍵導入 API 金鑰 — 用戶可以輕鬆導入現有的 Claude Code 或 Codex API 金鑰，快速上手。
- 即時修改 — 用戶可以在設計過程中即時查看和修改生成的內容，提升工作效率。
- 版本控制 — 設計過程中的每個迭代都會被保存，方便用戶隨時切換版本。

## 快速開始

1. 安裝 Open CoDesign
```bash
curl -fsSL https://opencoworkai.github.io/open-codesign/install.sh | bash
```
2. 啟動應用程式
```bash
open-codesign
```
3. 添加 API 金鑰
```bash
在首次啟動時，將支持的提供者金鑰粘貼到設置頁面
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 3010 stars（334/天），forks 279（9.3%），這顯示出其快速增長的潛力。作者 hqhq1025 和團隊專注於開源設計工具的開發，解決了市場上缺乏靈活且本地運行的 AI 設計工具的痛點。這個工具的出現，正好滿足了對於不想被鎖定在單一供應商的用戶需求。社群的反饋和討論也顯示出對於這個工具的興趣，尤其是在 AI 設計領域的應用。其高 fork/stars 比率（9.3%）顯示出許多人在實際修改和使用這個工具，這是其受歡迎的指標之一。

## 適合誰使用

**目標受眾**：需要快速生成設計原型但不想依賴雲端服務的設計師和開發者。

> [!example] 使用場景
> - UI 設計師用它來快速生成原型和簡報，因為可以直接從提示生成設計，節省了手動設計的時間。
> - 產品經理用它來創建行銷資產，因為能夠在本地運行，避免了雲端服務的延遲和隱私問題。
> - 開發者用它來整合 AI 設計工具到現有的開發流程中，因為支持多種模型，能夠靈活應對不同需求。

## 架構分析

Open CoDesign 採用本地運行的架構，這意味著所有的數據處理和生成都在用戶的設備上進行，這樣可以提高速度並保護用戶隱私。系統主要由前端的 Vue 應用和後端的 Node.js 服務組成，前端負責用戶界面和交互，後端則處理 API 請求和數據存儲。這種架構的選擇使得用戶能夠快速生成設計，並且可以隨時進行版本控制和即時修改。選擇本地運行的代價是需要用戶擁有足夠的計算資源來支持 AI 模型的運行，特別是在處理大型設計時可能會遇到性能瓶頸。整體而言，這種設計使得 Open CoDesign 在靈活性和性能上有良好的平衡。

## 技術深入分析

Open CoDesign 的核心技術機制是其本地運行的設計架構，這使得用戶能夠在自己的設備上進行設計，從而提高了速度和隱私保護。它使用了 Vue 作為前端框架，提供了良好的用戶體驗，並且使用 Node.js 作為後端來處理 API 請求。這種架構使得整個系統的反應速度較快，並且能夠支持多種 AI 模型的接入。效能上，這個工具能夠處理中小型設計項目，但在處理大型設計時可能會遇到性能瓶頸，特別是需要較高的計算資源。選擇本地運行的好處是用戶不必擔心數據隱私問題，但代價是需要用戶具備一定的技術背景來進行安裝和配置。整合方面，這個工具可以與現有的開發流程無縫對接，特別是對於已經使用其他 AI 工具的團隊來說，能夠快速上手並進行整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了快速入門指南和安裝步驟。安裝過程相對順暢，但需要用戶具備一定的技術背景。文件提供了多語言支持，方便不同語言的用戶使用。

## 優缺點分析

> [!success] 優點
> - 支持多種 AI 模型，靈活性高。
> - 本地運行，保障數據隱私。
> - 一鍵導入 API 金鑰，快速上手。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定的情況。
> - 對大型團隊的支持不足，需額外工具協作。
> - 需要用戶具備一定的技術背景以便於安裝和配置。

> [!warning] 注意事項
> - 僅支持 macOS 12+、Windows 10+ 和 Linux (glibc ≥ 2.31)。
> - 目前仍在 beta 階段，可能存在未解決的 bug。
> - 對於大型團隊的協作支持尚不完善，可能需要額外的工具來管理版本控制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 提供類似的 AI 設計功能，但主要依賴於 Claude 的雲端服務，缺乏本地運行的靈活性。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲角色設計，功能較為專一，適合遊戲開發者，但不支持多模型。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，但不具備設計工具的功能，主要用於文本生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 主要依賴 Claude 的雲端服務，缺乏本地運行的靈活性。 | 如果你的團隊已經在使用 Claude 並且不介意雲端服務的延遲。 | medium，因為需要重新適應雲端環境。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲角色設計，功能較為專一，適合遊戲開發者。 | 如果你的專案專注於遊戲開發，且需要針對角色設計的專門工具。 | low，因為功能相對專一，轉換成本較低。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，主要用於文本生成，與設計工具無關。 | 如果你的需求主要是文本生成，而非設計工具。 | high，因為需要完全轉換到不同的工具和流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **open-codesign** | **awesome-claude-design** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 主要依賴 Claude 的雲端服務，缺乏本地運行的靈活性。 | 專注於生成遊戲角色設計，功能較為專一，適合遊戲開發者。 | 提供 GPT-2 的 API 接口，主要用於文本生成，與設計工具無關。 |
> | 遷移成本 | - | medium，因為需要重新適應雲端環境。 | low，因為功能相對專一，轉換成本較低。 | high，因為需要完全轉換到不同的工具和流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Claude 並且不介意雲端服務的延 | 如果你的專案專注於遊戲開發，且需要針對角色設計的專門工具。 | 如果你的需求主要是文本生成，而非設計工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下可能無法正確導入 API 金鑰，導致應用無法啟動。
  - 解法：檢查 API 金鑰格式是否正確，並確保網路連接正常。
- [MEDIUM] 生成大型設計時可能會導致性能下降。
  - 解法：考慮分割設計項目，減少單次生成的複雜度。
- [MEDIUM] 某些模型的兼容性問題，可能導致無法正常運行。
  - 解法：確認所使用的模型支持列表，並選擇兼容的模型。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的設計團隊 | 非常適合 | 本地運行的特性和多模型支持能夠滿足小型團隊的需求。 |
| 大型企業的設計部門 | 不適合 | 目前對於大型團隊的協作支持不足，可能需要額外的工具來管理版本控制。 |
| 需要快速迭代設計的創業公司 | 適合 | 快速生成設計和即時修改的能力非常符合創業公司的需求。 |
| 對數據隱私有高要求的用戶 | 非常適合 | 本地運行保障了用戶的數據隱私，適合這類用戶。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到靈活的設計工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本地運行的工具不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

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
| Forks | 279 |
| Open Issues | 38 |
| Issue 解決率 | 46% (32 closed) |
| 最後推送 | 2026-04-27 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://opencoworkai.github.io/open-codesign/) |
| Repo 大小 | 61.8 MB |
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

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://opencoworkai.github.io/open-codesign/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-26 ~ 2026-04-27）
> **活躍天數** 2 天 · **最新 commit** docs: mention lint autofix command for contributors

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#251](https://github.com/OpenCoworkAI/open-codesign/issues/251) | [Bug]: Model reasoning in loop burning all tokens `bug` `triage` | 0 | 1 |
> | [#249](https://github.com/OpenCoworkAI/open-codesign/issues/249) | [Bug]: RENDERER_ERROR (fp: 213f47a1) `bug` `triage` | 0 | 1 |
> | [#248](https://github.com/OpenCoworkAI/open-codesign/issues/248) | [Bug]: sidebar chat window showing "design.html delivered" b `bug` `triage` | 0 | 2 |
> | [#245](https://github.com/OpenCoworkAI/open-codesign/issues/245) | 你的 Mac 是 Intel (x64) 架构 `bug` `triage` | 0 | 1 |

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

相關概念：[[AI 設計]] · [[設計到代碼]] · [[本地優先]]

相關專案：[[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[alchaincyf--huashu-design|alchaincyf/huashu-design]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

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
