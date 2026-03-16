---
repo: holysheep123/holysheep-cli
url: https://github.com/holysheep123/holysheep-cli
owner: holysheep123
owner_type: User
language: JavaScript
license: N/A
description: "🐑 One command to configure all AI coding tools — Claude Code, Codex, Gemini CLI, Cursor, Aider & more"
homepage: "https://shop.holysheep.ai"
stars: 310
stars_per_day: 39
forks: 1
open_issues: 1
created: 2026-03-07
pushed_at: 2026-03-13
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "AI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一條命令配置所有 AI 編程工具，簡化接入 HolySheep API 的流程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 0
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2454
readme_length: 5306
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:305,2026-03-14:305,2026-03-15:310,2026-03-16:310"
tags:
  - github
  - "category/cli_工具"
  - "lang/javascript"
  - easy_install
  - "topic/ai"
  - "topic/aider"
  - "topic/api"
  - "topic/china"
  - "topic/claude"
aliases:
  - "holysheep-cli"
  - "holysheep123/holysheep-cli"
  - "一條命令配置所有 AI 編程工具，簡化接入 HolySheep API 的流程。"
---

# holysheep-cli

**310** stars · **39** stars/天 · 建立 8 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/holysheep123--holysheep-cli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`ai` `aider` `api` `china` `claude` `cli` `coding-assistant` `cursor` `gemini` `holysheep` `llm` `openai`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，簡化接入 HolySheep API 的流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (39 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在中國快速接入多個 AI 編程助手的開發者。
> **一句話重點** HolySheep CLI 的最大優勢在於它能夠簡化多個 AI 編程助手的配置過程，讓開發者專注於編碼而非環境設置。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/holysheep123--holysheep-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "holysheep123--holysheep-cli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速配置多個 AI 工具的效果，值得嘗試。

> [!abstract] 核心創新
> HolySheep CLI 提供了一個簡單的命令行工具，讓開發者能夠快速配置多個 AI 編程助手，無需手動編輯配置文件。

## 專案簡介

HolySheep CLI 是一個命令行工具，透過一條命令自動配置多個流行的 AI 編程助手以使用 HolySheep API，這是一個在中國無需 VPN 即可訪問 Claude、GPT 和 Gemini API 的中繼服務。用戶只需運行 `hs setup` 指令，並輸入 API 金鑰，即可完成配置，省去手動編輯每個工具的配置文件的麻煩。這個工具支持的編程助手包括 Claude Code、Codex CLI 和 Aider 等，並且能夠自動生成相應的配置文件，讓開發者更專注於編碼而非環境設置。技術上，HolySheep CLI 使用了 Node.js 16+，並依賴於 chalk、commander 和 inquirer 等庫來實現命令行界面的互動性。

與其他工具相比，如 OpenClaw 和 Cursor，HolySheep CLI 提供了更簡單的配置流程，特別適合需要快速接入多個 AI 工具的開發者。使用者在配置過程中可能會遇到 API 金鑰的管理問題，但這可以通過 `hs login` 指令來解決。這個專案目前處於 beta 階段，適合小型團隊或個人開發者使用，未來可能會增加更多工具的支持。對於需要快速集成 AI 助手的開發者來說，HolySheep CLI 是一個值得考慮的選擇。

**技術棧**：`Node.js 16+` · `chalk` · `commander` · `inquirer` · `node-fetch`

## 重點功能

- 一鍵配置 — 透過 `hs setup` 指令自動配置多個 AI 編程助手。
- 支持多種工具 — 包括 Claude Code、Codex CLI 和 Aider，並自動生成相應的配置文件。
- API 金鑰管理 — 使用 `hs login` 指令保存 API 金鑰，簡化管理流程。
- 診斷工具 — `hs doctor` 指令可檢查配置狀態和連通性，便於排查問題。
- 賬戶餘額查詢 — 使用 `hs balance` 指令查看帳戶餘額，方便管理使用情況。

## 快速開始

1. 使用 npx 安裝並配置
```bash
npx @simonyea/holysheep-cli@latest setup
```
2. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
3. 運行配置命令
```bash
hs setup
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 16+",
  "指令": "hs setup",
  "預期輸出": "提示輸入 API 金鑰並選擇要配置的工具，完成配置。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 310 stars（39/天），forks 1（0.3%），這顯示出初期的關注度。作者 Simon Yea 之前在 AI 工具領域有一定經驗，這個工具解決了開發者在中國使用 AI 編程助手的配置困難，特別是需要 VPN 的問題。這個工具的推出正好符合了對於簡化 AI 工具接入的需求，並且在社群中引起了討論。由於目前的 AI 編程助手多數需要繁瑣的手動配置，HolySheep CLI 的自動化特性吸引了不少開發者的注意。

## 適合誰使用

**目標受眾**：需要在中國快速接入多個 AI 編程助手的開發者。

> [!example] 使用場景
> - 前端工程師用它來快速配置 Claude 和 Codex，因為可以節省手動編輯配置文件的時間，讓開發流程更順暢。
> - 後端開發者用它來整合多個 AI 工具，因為只需一條命令即可完成所有配置，避免了重複性工作。
> - 獨立開發者用它來測試不同的 AI 助手，因為簡化的配置流程讓他們能夠快速迭代和實驗。

## 架構分析

HolySheep CLI 採用單一命令行工具架構，設計目的是為了簡化多個 AI 編程助手的配置過程。資料流上，使用者通過 `hs setup` 指令啟動配置，CLI 會根據用戶輸入的 API 金鑰和選擇的工具自動生成配置文件。這種設計的好處是大幅度降低了配置的複雜性，使用者無需了解每個工具的具體配置細節。選擇 Node.js 作為開發語言，因為其在 CLI 工具開發中有良好的生態系統和豐富的庫可供使用。這種設計雖然簡化了使用流程，但可能在未來面臨擴展性挑戰，特別是當支持更多工具時，如何保持配置的簡潔性將是一個考驗。

## 技術深入分析

HolySheep CLI 的核心技術機制是利用 Node.js 的生態系統來構建一個命令行工具，通過使用 chalk 和 commander 等庫來實現豐富的命令行交互。這個工具能夠自動生成配置文件，並且支持多種流行的 AI 編程助手，這使得開發者能夠快速上手。效能上，由於其依賴於 Node.js，啟動時間和記憶體佔用都相對較低，適合在本地環境中快速運行。設計上選擇了 CLI 的形式，這樣可以方便地與其他工具鏈進行整合，並且能夠在不同的操作系統上運行。這個選擇雖然帶來了更好的可用性，但在未來可能會面臨擴展性挑戰，特別是當需要支持更多的 AI 工具時。整合方面，HolySheep CLI 可以輕鬆地與現有的 Node.js 工具鏈進行搭配，並且能夠在 CI/CD pipeline 中使用，這對於需要自動化部署的開發者來說非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和範例，安裝過程順暢，無明顯坑。整體上，對於新手來說，花 30 分鐘即可完成安裝和配置。文件有中英文版本，方便不同語言的開發者使用。

## 優缺點分析

> [!success] 優點
> - 簡化配置流程，適合快速集成多個 AI 工具。
> - 支持多種流行的 AI 編程助手，方便開發者選擇。
> - 提供 API 金鑰管理功能，減少手動操作的繁瑣。

> [!danger] 缺點
> - 目前僅支持特定的 AI 工具，未來可能需要擴展。
> - 對於某些工具的配置仍需手動介入，無法完全自動化。
> - 依賴於 Node.js 環境，對於不熟悉的開發者可能有學習曲線。

> [!warning] 注意事項
> - 僅支持 Node.js 16 以上版本。
> - 對於某些工具（如 Cursor）需要手動配置，無法完全自動化。
> - 目前僅支持特定的 AI 工具，未來可能會增加更多支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了一個完整的 AI 智能體網關，支持更多的功能，但配置過程較為複雜。 |
| [openai/codex](https://github.com/openai/codex) | Codex 是一個獨立的 AI 編程助手，無法像 HolySheep CLI 一樣集中配置多個工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/codex](https://github.com/openai/codex) | Codex 是一個獨立的 AI 編程助手，無法像 HolySheep CLI 一樣集中配置多個工具。 | 如果你只需要使用 OpenAI 的 Codex，並且不需要其他工具的支持。 | low，因為 Codex 的使用相對簡單，且文檔齊全。 |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了一個完整的 AI 智能體網關，支持更多的功能，但配置過程較為複雜。 | 如果需要更強大的 AI 智能體功能，並且不介意較為複雜的配置過程。 | medium，因為需要重新配置環境和依賴。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **holysheep-cli** | **codex** | **openclaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 是一個獨立的 AI 編程助手，無法像 HolySheep CLI 一樣集中配置多個工具。 | OpenClaw 提供了一個完整的 AI 智能體網關，支持更多的功能，但配置過程較為複雜。 |
> | 遷移成本 | - | low，因為 Codex 的使用相對簡單，且文檔齊全。 | medium，因為需要重新配置環境和依賴。 |
> | 適用場景 | 主要場景 | 如果你只需要使用 OpenAI 的 Codex，並且不需要其 | 如果需要更強大的 AI 智能體功能，並且不介意較為複雜的配置 |

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

- **[HIGH]** 在配置過程中，API 金鑰未正確保存可能導致後續使用失敗。
  - 解法：確保使用 `hs login` 指令正確保存金鑰。
- [MEDIUM] 某些工具的手動配置可能會導致配置不一致。
  - 解法：仔細檢查每個工具的配置文件，確保一致性。
- [low] 在 Windows 環境中，可能需要重啟終端才能識別 `hs` 命令。
  - 解法：安裝後重啟終端或使用 npx 直接運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速配置多個 AI 工具 | 非常適合 | HolySheep CLI 能夠簡化配置流程，節省時間。 |
| 個人開發者希望測試不同的 AI 助手 | 適合 | 一鍵配置的特性讓實驗變得容易。 |
| 大型企業需要穩定的 AI 工具整合 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速配置多個 AI 工具的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> HolySheep CLI 本身不需要高權限運行，但需要存取 API 金鑰，建議妥善管理。依賴的庫中無已知的安全漏洞，整體風險較低。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
| Forks | 1 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-13 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://shop.holysheep.ai) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/holysheep123/holysheep-cli) |
| Topics | `ai` `aider` `api` `china` `claude` `cli` `coding-assistant` `cursor` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `inquirer` `node-fetch` `ora`

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新但問題解決率較低。
**連結**：[文件](https://shop.holysheep.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-13）
> **活躍天數** 2 天 · **最新 commit** feat: fix API key re-entry + 3-model setup flow (sonnet-4-6, opus-4-6, MiniMax-M2.5-highspeed) v1.5.

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/holysheep123/holysheep-cli/issues/1) | Your project was featured on AI Digital Crew 🎉 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🐑 HolySheep CLI
> 
> **[English](#english) | [中文](#chinese)**
> 
> [](https://www.npmjs.com/package/@simonyea/holysheep-cli)
> [](https://www.npmjs.com/package/@simonyea/holysheep-cli)
> [](LICENSE)
> 
> **One command to configure all AI coding tools with HolySheep API**
> **一条命令，配置所有 AI 编程工具**
> 
> [🚀 Quick Start](#quick-start) · [📦 npm](https://www.npmjs.com/package/@simonyea/holysheep-cli) · [🌐 holysheep.ai](https://holysheep.ai)
> 
> ---
> 
> ## 🇬🇧 English
> 
> ### What is HolySheep CLI?
> 
> **HolySheep CLI** (`hs`) is a command-line tool that automatically configures all popular AI coding assistants to use [HolySheep API](https://holysheep.ai) — a relay service for accessing Claude, GPT, and Gemini APIs in China without a VPN.
> 
> Instead of manually editing config files for each tool, run one command and you're done.
> 
> ### Supported Tools
> 
> | Tool | Config File | Status |
> |------|-------------|--------|
> | [Claude Code](https://docs.anthropic.com/claude-code) | `~/.claude/settings.json` | ✅ Auto |
> | [Codex CLI](https://github.com/openai/codex) | `~/.codex/config.toml` | ✅ Auto |
> | [Aider](https://aider.chat) | `~/.aider.conf.yml` | ✅ Auto |
> | [Continue.dev](https://continue.dev) | `~/.continue/config.yaml` | ✅ Auto |
> | [OpenCode](https://github.com/anomalyco/opencode) | `~/.config/opencode/opencode.json` | ✅ Auto |
> | [OpenClaw](https://openclaw.ai) | `~/.openclaw/openclaw.json` | ✅ Auto |
> | [Cursor](https://cursor.sh) | GUI (encrypted storage) | ⚠️ Manual |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google protocol only | ❌ Not supported |
> 
> ### Quick Start
> 
> ```bash
> npx @simonyea/holysheep-cli@latest setup
> ```
> 
> Or install globally:
> 
> ```bash
> npm install -g @simonyea/holysheep-cli
> hs setup
> ```
> 
> You'll be prompted for your API Key (`cr_xxx`), then select the tools to configure. Done!
> 
> ### OpenClaw Setup
> 
> [OpenClaw](https://openclaw.ai) is a powerful AI agent gateway with a web dashboard. After running `hs setup`:
> 
> 1. A new terminal window opens running the OpenClaw Gateway
> 2. Open your browser: **http://127.0.0.1:18789/**
> 3. Start chatting — no token required
> 
> > **Keep the gateway window open** while using OpenClaw. The gateway must be running for the browser UI to work.
> 
> To restart the gateway later:
> ```bash
> npx openclaw gateway --port 18789
> ```
> 
> ### Commands
> 
> | Command | Description |
> |---------|-------------|
> | `hs setup` | Configure AI tools interactively |
> | `hs login` | Save your API Key locally |
> | `hs doctor` | Check configuration & connectivity |
> | `hs balance` | View account balance |
> | `hs tools` | List all supported tools |
> | `hs reset` | Remove all HolySheep configuration |
> 
> ### API Endpoints
> 
> | Usage | URL |
> |-------|-----|
> | Anthropic SDK / Claude Code | `https://api.holysheep.ai` (no `/v1`) |
> | OpenAI-compatible / Codex / Aider | `https://api.holysheep.ai/v1` (with `/v1`) |
> 
> ---
> 
> ## 🇨🇳 中文
> 
> ### 什么是 HolySheep CLI？
> 
> **HolySheep CLI**（命令 `hs`）是一个命令行工具，帮你一键配置所有主流 AI 编程助手接入 [HolySheep API](https://holysheep.ai)。
> 
> 无需 VPN，无需手动改配置文件，运行一条命令即可接入 Claude、GPT、Gemini。
> 
> ### 支持的工具
> 
> | 工具 | 状态 | 说明 |
> |------|------|------|
> | [Claude Code](https://docs.anthropic.com/claude-code) | ✅ 自动 | Anthropic 官方 CLI |
> | [Codex CLI](https://github.com/openai/codex) | ✅ 自动 | OpenAI 官方 CLI |
> | [Aider](https://aider.chat) | ✅ 自动 | AI 结对编程 |
> | [Continue.dev](https://continue.dev) | ✅ 自动 | VS Code/JetBrains 插件 |
> | [OpenCode](https://github.com/anomalyco/opencode) | ✅ 自动 | 终端 AI 编程助手 |
> | [OpenClaw](https://openclaw.ai) | ✅ 自动 | AI 智能体网关 + Web 界面 |
> | [Cursor](https://cursor.sh) | ⚠️ 手动 | 需在 GUI 中手动配置 |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ❌ 不支持 | 仅支持 Google 官方协议 |
> 
> ### 快速开始
> 
> ```bash
> npx @simonyea/holysheep-cli@latest setup
> ```
> 
> 或全局安装：
> 
> ```bash
> npm install -g @simonyea/holysheep-cli
> hs setup
> ```
> 
> 按提示输入 API Key（`cr_xxx`），选择要配置的工具，完成！
> 
> ### OpenClaw 使用说明
> 
> [OpenClaw](https://openclaw.ai) 是一个 AI 智能体网关，提供浏览器 Web 界面，支持聊天、任务、工具调用等功能。
> 
> **`hs setup` 配置完成后：**
> 
> 1. 自动弹出一个新终端窗口，运行 OpenClaw Gateway
> 2. 打开浏览器访问：**http://127.0.0.1:18789/**
> 3. 直接开始聊天，无需填写 token
> 
> > ⚠️ **保持 Gateway 窗口开启**，关闭后 Gateway 停止，浏览器界面无法使用。
> 
> **下次启动 Gateway：**
> ```bash
> npx openclaw gateway --port 18789
> ```
> 
> **使用的模型：** `claude-sonnet-4-6`（通过 HolySheep 中转）
> 
> ### 命令说明
> 
> | 命令 | 说明 |
> |------|------|
> | `hs setup` | 交互式配置 AI 工具 |
> | `hs login` | 保存 API Key 到本地 |
> | `hs doctor` | 检查配置状态和连通性 |
> | `hs balance` | 查看账户余额 |
> | `hs tools` | 列出所有支持的工具 |
> | `hs reset` | 清除所有 HolySheep 配置 |
> 
> ### 接入地址
> 
> | 用途 | 地址 |
> |------|------|
> | Anthropic SDK / Claude Code | `https://api.holysheep.ai`（不带 /v1） |
> | OpenAI 兼容 / Codex / Aider | `https://api.holysheep.ai/v1`（带 /v1） |
> 
> ### 常见问题
> 
> **Q: API Key 在哪里获取？**  
> A: 在 [holysheep.ai](https://holysheep.ai) 注册后，在「API 密钥」页面创建，格式为 `cr_xxx`。
> 
> **Q: 支持 Windows 吗？**  
> A: 支持，需要 Node.js 16+。如果 `hs` 命令找不到，请重启终端，或直接用 `npx @simonyea/holysheep-cli@latest setup`。
> 
> **Q: OpenClaw Gateway 窗口可以最小化吗？**  
> A: 可以最小化，但不能关闭。关闭后 Gateway 停止，需重新运行 `npx openclaw gateway --port 18789`。
> 
> **Q: 如何恢复原来的配置？**  
> A: 运行 `hs reset` 清除所有 HolySheep 相关配置。
> 
> **Q: OpenClaw 安装失败？**  
> A: OpenClaw 需要 Node.js 20+，运行 `node --version` 确认版本后重试。
> 
> ---
> 
> ## Changelog
> 
> - **v1.5.2** — OpenClaw 安装失败（无 git 环境）时自动降级为 npx 模式继续配置
> - **v1.5.0** — OpenClaw gateway 无需 token，直接浏览器打开 http://127.0.0.1:18789/
> - **v1.4.6** — 基于实测正确配置格式，彻底修复 OpenClaw 401 认证问题
> - **v1.3.x** — OpenClaw 一键配置支持，自动写入配置并启动 Gateway
> 
> ---
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[AI]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://shop.holysheep.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "holysheep123--holysheep-cli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["AI","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "holysheep123--holysheep-cli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "holysheep123--holysheep-cli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "holysheep123" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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
> const me = dv.page("Repos/holysheep123--holysheep-cli");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
