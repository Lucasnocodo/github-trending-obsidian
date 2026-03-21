---
repo: holysheep123/holysheep-cli
url: https://github.com/holysheep123/holysheep-cli
owner: holysheep123
owner_type: User
language: JavaScript
license: N/A
description: "🐑 One command to configure all AI coding tools — Claude Code, Codex, Gemini CLI, Cursor, Aider & more"
homepage: "https://holysheep.ai"
stars: 292
stars_per_day: 24
forks: 1
open_issues: 2
created: 2026-03-07
pushed_at: 2026-03-19
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "API 工具"
release_tag: "v1.0.0-config"
install_complexity: "easy"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一條命令配置所有 AI 編程工具，無需 VPN。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2556
readme_length: 8120
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:305,2026-03-14:305,2026-03-15:310,2026-03-16:310,2026-03-17:304,2026-03-18:301,2026-03-19:292,2026-03-20:292"
tags:
  - github
  - "category/cli_工具"
  - "lang/javascript"
  - easy_install
  - "topic/ai"
  - "topic/ai_coding"
  - "topic/aider"
  - "topic/anthropic"
  - "topic/api"
aliases:
  - "holysheep-cli"
  - "holysheep123/holysheep-cli"
  - "一條命令配置所有 AI 編程工具，無需 VPN。"
---

# holysheep-cli

**292** stars · **24** stars/天 · 建立 12 天前 · JavaScript · 未標註授權

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

`個人專案` `v1.0.0-config` `easy-install`

`ai` `ai-coding` `aider` `anthropic` `api` `api-proxy` `china` `claude` `claude-code` `cli` `codex` `coding-assistant` `cursor` `gemini` `gemini-cli` `gpt-5` `holysheep` `llm` `openai` `openclaw`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，無需 VPN。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (24 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在中國無法使用 VPN 的環境中快速配置 AI 編程工具的開發者。
> **一句話重點** HolySheep CLI 的最大優勢在於其能夠在中國環境中無需 VPN 快速配置多個 AI 工具，這是其他工具無法提供的便利。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/holysheep123--holysheep-cli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "holysheep123--holysheep-cli" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速配置多個 AI 工具的效果，值得嘗試。

> [!abstract] 核心創新
> HolySheep CLI 提供了一個無需 VPN 的一鍵配置解決方案，專為中國開發者設計。

## 專案簡介

HolySheep CLI 是一個命令行工具，旨在簡化 AI 編程助手的配置過程。使用者只需執行 `hs setup` 命令，便可自動配置 Claude、Codex、Aider 等多個工具，省去手動編輯配置文件的麻煩。這個工具的賣點在於其能夠在中國無需 VPN 直接接入多個 AI API，這對於需要在中國使用這些服務的開發者來說，無疑是一大便利。技術上，HolySheep CLI 依賴 Node.js 16+ 和一些常見的 npm 套件如 `commander` 和 `inquirer`，這使得它的安裝和使用相對輕量。與其他類似工具相比，如 OpenClaw 和 Codex CLI，HolySheep CLI 提供了一個統一的接口來配置多個工具，而不是針對每個工具分別配置，這樣大幅減少了配置的複雜性。

使用者可以在一個命令中選擇要配置的工具，並且可以輕鬆查看和管理 API 密鑰。這個工具的局限在於目前不支持 Gemini CLI，並且對於某些工具如 Cursor 仍需手動配置。社群活躍度尚可，開發者在過去 12 天內已經有多次更新，顯示出持續的維護和改進。總體來說，這是一個適合需要快速配置多個 AI 工具的開發者的解決方案，尤其是在中國的開發環境中。

**技術棧**：`Node.js 16+` · `npm` · `commander` · `inquirer`

## 重點功能

- 一鍵配置 — 使用 `hs setup` 命令自動配置多個 AI 編程工具。
- 支持多種工具 — 包括 Claude Code、Codex、Aider 等，並自動生成相應的配置文件。
- 無需 VPN — 直接接入 HolySheep API，適合中國開發者使用。
- API 密鑰管理 — 提供 `hs login` 命令來安全保存 API 密鑰。
- 診斷工具 — 使用 `hs doctor` 檢查配置狀態和連通性。

## 快速開始

1. 安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
2. 執行配置命令
```bash
hs setup
```
3. 輸入 API 密鑰並選擇工具
```bash
# 根據提示操作
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 16+",
  "指令": "npx @simonyea/holysheep-cli setup",
  "預期輸出": "提示輸入 API 密鑰，並選擇要配置的工具。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 292 stars（約 24 stars/天），forks 僅 1（0.3%），顯示出相對較低的實際修改需求。這個專案的作者 holysheep123 似乎專注於解決中國開發者在使用 AI API 時的困難，特別是無法使用 VPN 的情況。此工具的出現正好填補了這一市場空白，讓開發者能夠更方便地接入 Claude 和 Codex 等服務。社群的反應雖然還在初期，但已有一些討論和反饋，顯示出一定的關注度。

## 適合誰使用

**目標受眾**：需要在中國無法使用 VPN 的環境中快速配置 AI 編程工具的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速配置 Claude 和 Codex，因為手動配置繁瑣且容易出錯。
> - AI 開發者用它來在中國無需 VPN 訪問多個 AI API，因為這樣能節省時間並降低技術門檻。
> - 新手開發者用它來學習如何整合 AI 工具，因為一條命令即可完成配置，降低了入門難度。

## 架構分析

HolySheep CLI 採用命令行工具架構，使用 Node.js 作為執行環境。其設計目的是為了簡化多個 AI 工具的配置過程，通過一個統一的命令來管理不同工具的配置文件。配置過程中，CLI 會根據用戶選擇的工具自動生成相應的配置文件，這樣用戶無需手動編輯，降低了出錯的可能性。

這種設計使得工具的使用者能夠快速上手，特別是在中國這種對於 VPN 使用有限制的環境中。選擇 Node.js 作為技術棧的原因在於其廣泛的生態系統和良好的性能，依賴樹相對輕量，主要依賴於 `commander` 和 `inquirer` 等庫。整體架構簡單明瞭，便於未來擴展新的功能或工具支持。

## 技術深入分析

HolySheep CLI 的核心技術機制是基於 Node.js 的命令行工具，使用 `commander` 來解析命令行參數，並使用 `inquirer` 進行互動式配置。這使得使用者能夠在命令行中輕鬆選擇要配置的工具，並輸入 API 密鑰。效能上，由於其主要依賴於 Node.js 的非同步特性，能夠快速響應用戶操作。設計上選擇 Node.js 而非 Python 是因為其在 CLI 工具中的表現更為優秀，且生態系統豐富，易於整合各種庫。技術風險方面，依賴於 Node.js 的版本穩定性，若未來 Node.js 發生重大變更，可能會影響工具的運行。整合分析上，HolySheep CLI 可以輕鬆與其他 Node.js 生態中的工具進行集成，例如在 CI/CD pipeline 中使用，並且能夠與主流 IDE 進行良好的配合，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含範例命令。安裝過程相對順暢，只需確保 Node.js 版本符合要求。文件目前僅提供英文和中文，對於多語言支持尚需加強。

## 優缺點分析

> [!success] 優點
> - 一鍵配置多個 AI 工具，節省時間。
> - 無需 VPN，適合中國開發者使用。
> - 提供 API 密鑰管理功能，增強安全性。

> [!danger] 缺點
> - 不支持 Gemini CLI，功能有限。
> - 某些工具仍需手動配置，降低了便利性。
> - 依賴於 Node.js 環境，對於不熟悉的開發者有學習曲線。

> [!warning] 注意事項
> - 目前不支持 Gemini CLI。
> - Cursor 仍需手動配置，無法自動完成。
> - 僅支持 Node.js 16+，舊版本無法運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了更完整的 AI 智能體網關功能，但配置過程較為繁瑣。 |
| [openai/codex](https://github.com/openai/codex) | Codex CLI 專注於 OpenAI 的 API，無法統一配置多個工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/codex](https://github.com/openai/codex) | Codex 專注於 OpenAI 的 API，無法統一配置多個工具，適合專注於 OpenAI 生態的開發者。 | 如果你的團隊主要使用 OpenAI 的服務，Codex 會是更合適的選擇。 | low，因為 Codex 的使用方式相對簡單，且文檔完善。 |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了更完整的 AI 智能體網關功能，但配置過程較為繁瑣，適合需要更高自定義的用戶。 | 如果需要更高的自定義和功能，OpenClaw 是更好的選擇。 | medium，因為需要重新配置和學習新的工具使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **holysheep-cli** | **codex** | **openclaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 專注於 OpenAI 的 API，無法統一配置多個工具，適合專注於 OpenAI 生態的開發者。 | OpenClaw 提供了更完整的 AI 智能體網關功能，但配置過程較為繁瑣，適合需要更高自定義的用戶。 |
> | 遷移成本 | - | low，因為 Codex 的使用方式相對簡單，且文檔完善。 | medium，因為需要重新配置和學習新的工具使用方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用 OpenAI 的服務，Codex 會是 | 如果需要更高的自定義和功能，OpenClaw 是更好的選擇。 |

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

- **[HIGH]** 在某些環境下，安裝過程可能會因 Node.js 版本不兼容而失敗。
  - 解法：確保 Node.js 版本為 16+，並重新安裝。
- [MEDIUM] 如果配置後未能成功連接，可能是因為 API 密鑰錯誤。
  - 解法：檢查 API 密鑰是否正確，並重新執行 `hs setup`。
- [MEDIUM] 在 Windows 環境下，某些命令可能無法正常運行。
  - 解法：使用 WSL 或確保命令行工具的兼容性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡化了多個 AI 工具的配置，適合小型團隊快速上手。 |
| 大型企業的 AI 開發團隊 | 普通 | 雖然能快速配置，但可能需要更多自定義功能。 |
| 需要在中國環境中使用 AI 工具的開發者 | 非常適合 | 無需 VPN，直接接入多個 AI API。 |
| 對 CLI 工具不熟悉的初學者 | 適合 | 提供了簡單的命令和互動式配置，降低了入門難度。 |

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
> HolySheep CLI 本身不需要高權限運行，僅需 Node.js 環境。它不存取敏感資料，但使用者需妥善管理 API 密鑰，避免洩漏。依賴的 npm 套件需定期檢查安全性，確保沒有已知漏洞。

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
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://holysheep.ai) |
| Repo 大小 | 2.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/holysheep123/holysheep-cli) |
| Topics | `ai` `ai-coding` `aider` `anthropic` `api` `api-proxy` `china` `claude` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `inquirer` `node-fetch` `ora`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@holysheep123](https://github.com/holysheep123) | 2 |

**最新版本**：v1.0.0-config — HolySheep Config CLI v1.0.0 (2026-03-18)

> [!info]- Release Notes
> ## holysheep-config v1.0.0
> 
> **Python package for configuring OpenAI/Claude/Gemini API from China — no VPN needed.**
> 
> ```bash
> pip install https://github.com/holysheep123/holysheep-cli/archive/holysheep-config-1.0.0.tar.gz
> python3 -m holysheep_config setup
> ```
> 
> Or use our CLI tool:
> ```bash
> npx @simonyea/holysheep-cli setup
> ```
> 
> Register at https://holysheep.ai/register

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有多次更新。
**連結**：[文件](https://holysheep.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-19）
> **活躍天數** 1 天 · **最新 commit** feat: add gpt-5.3-codex-spark model to OpenClaw

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/holysheep123/holysheep-cli/issues/7) | You are sending spam | 0 | 0 |
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
> [](https://holysheep.ai/register)
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
> | Droid CLI | `~/.factory/settings.json` | ✅ Auto |
> | [Aider](https://aider.chat) | `~/.aider.conf.yml` | ✅ Auto |
> | [Continue.dev](https://continue.dev) | `~/.continue/config.yaml` | ✅ Auto |
> | [OpenCode](https://github.com/anomalyco/opencode) | `~/.config/opencode/opencode.json` | ✅ Auto |
> | [OpenClaw](https://openclaw.ai) | `~/.openclaw/openclaw.json` | ✅ Auto |
> | [Cursor](https://cursor.sh) | GUI (encrypted storage) | ⚠️ Manual |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | Google protocol only | ❌ Not supported |
> 
> ### Quick Start
> 
> > 🔑 **First, get your free API Key** → [**holysheep.ai/register**](https://holysheep.ai/register) (free signup, pay-as-you-go from ¥10)
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
> 1. HolySheep configures OpenClaw to use HolySheep API
> 2. The OpenClaw Gateway starts on **`http://127.0.0.1:18789/` by default**
> 3. If `18789` is occupied, `hs setup` automatically picks the next available local port
> 4. Open the exact browser URL shown in the terminal and start chatting — no token required
> 
> **Default OpenClaw model:** `gpt-5.4`
> 
> > **Keep the gateway window open** while using OpenClaw. The gateway must be running for the browser UI to work.
> 
> > **OpenClaw itself requires Node.js 20+**. If setup fails, first check `node --version`.
> 
> To restart the gateway later:
> ```bash
> openclaw gateway --port 
> # or
> npx openclaw gateway --port 
> ```
> 
> If you forget the port, check `~/.openclaw/openclaw.json` (`gateway.port`) or run `hs doctor`.
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
> | Droid CLI | ✅ 自动 | Factory AI 终端智能体 |
> | [Aider](https://aider.chat) | ✅ 自动 | AI 结对编程 |
> | [Continue.dev](https://continue.dev) | ✅ 自动 | VS Code/JetBrains 插件 |
> | [OpenCode](https://github.com/anomalyco/opencode) | ✅ 自动 | 终端 AI 编程助手 |
> | [OpenClaw](https://openclaw.ai) | ✅ 自动 | AI 智能体网关 + Web 界面 |
> | [Cursor](https://cursor.sh) | ⚠️ 手动 | 需在 GUI 中手动配置 |
> | [Gemini CLI](https://github.com/google-gemini/gemini-cli) | ❌ 不支持 | 仅支持 Google 官方协议 |
> 
> ### 快速开始
> 
> > 🔑 **第一步：注册获取 API Key** → [**holysheep.ai/register**](https://holysheep.ai/register)（免费注册，¥10 起充，按量计费）
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
> 1. HolySheep 会自动把 OpenClaw 接到 HolySheep API
> 2. 默认启动在 **`http://127.0.0.1:18789/`**
> 3. 如果 `18789` 被占用，`hs setup` 会自动切换到下一个可用本地端口
> 4. 按终端里显示的准确地址打开浏览器，直接开始聊天，无需填写 token
> 
> **OpenClaw 默认模型：** `gpt-5.4`
> 
> > ⚠️ **保持 Gateway 窗口开启**，关闭后 Gateway 停止，浏览器界面无法使用。
> 
> > ⚠️ **OpenClaw 自身要求 Node.js 20+**。如果配置失败，请先运行 `node --version` 检查版本。
> 
> **下次启动 Gateway：**
> ```bash
> openclaw gateway --port 
> # 或
> npx openclaw gateway --port 
> ```
> 
> 如果忘了端口，可以查看 `~/.openclaw/openclaw.json` 里的 `gateway.port`，或直接运行 `hs doctor`。
> 
> **默认模型：** `gpt-5.4`（可在 OpenClaw 内切换到 Claude 模型）
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
> A: 可以最小化，但不能关闭。关闭后 Gateway 停止，需要按 `hs setup` / `hs doctor` 显示的端口重新运行 `openclaw gateway --port ` 或 `npx openclaw gateway --port `。
> 
> **Q: 18789 端口被占用怎么办？**  
> A: `hs setup` 会自动切换到下一个可用本地端口，并把准确访问地址打印出来；也可以运行 `hs doctor` 查看当前 `gateway.port` 和端口占用情况。
> 
> **Q: 如何恢复原来的配置？**  
> A: 运行 `hs reset` 清除所有 HolySheep 相关配置。
> 
> **Q: OpenClaw 安装失败？**  
> A: OpenClaw 需要 Node.js 20+，运行 `node --version` 确认版本后重试；如果全局安装失败，`hs setup` 也会尽量回退到 `npx openclaw` 继续配置。
> 
> ---
> 
> ## Changelog
> 
> - **v1.6.14** — OpenClaw 新增 `gpt-5.3-codex-spark` 模型，通过本地 bridge 路由到 HolySheep `/v1`
> - **v1.6.13** — Codex 配置改为直接写 `api_key` 到 config.toml，不再依赖环境变量，修复 Windows 上 setup 后无需重启终端即可使用；同时精简工具列表，只保留 Claude Code / Codex / Droid / OpenClaw
> - **v1.6.12** — 修复 OpenClaw Bridge 对 GPT-5.4 的流式响应转换，避免 `holysheep/gpt-5.4` 在 OpenClaw 中报错；同时增强 Dashboard URL 解析，减少安装后浏览器打开黑屏/空白页
> - **v1.6.11** — OpenClaw 新增本地 HolySheep Bridge，统一暴露单一 `holysheep` provider 以支持自由切换 GPT / Claude / MiniMax；同时保留用户所选默认模型，不再强制 GPT-5.4 作为 primary
> - **v1.6.10** — 将可运行的 OpenClaw runtime（含 npx 回退）视为已安装，避免 Windows/Node 环境下重复提示安装；同时修复 Droid CLI 的 GPT `/v1` 接入地址并同步写入 `~/.factory/config.json`
> - **v1.6.9** — 保留 OpenClaw 的 MiniMax 配置，并为 MiniMax 使用独立 provider id，避免与 Claude provider 冲突；在 OpenClaw 2026.3.13 下改为提示精确 `/model` 切换命令，而不是停止配置 MiniMax
> - **v1.6.8** — 修复 Codex 重复写入 `config.toml` 导致的 duplicate key，并修复 OpenClaw 在 Windows 下的安装检测；针对 OpenClaw 2026.3.13 的模型路由回归，临时跳过 MiniMax 避免 `model not allowed`
> - **v1.6.7** — OpenClaw 配置新增 `MiniMax-M2.7-highspeed`，并补齐节点迁移脚本中的 SSH 代理账号创建逻辑
> - **v1.6.6** — 修复 Droid CLI 的 GPT-5.4 配置残留问题，同时同步 `~/.factory/settings.json` 和 `~/.factory/config.json`，统一使用 `openai + https://api.holysheep.ai/v1`
> - **v1.6.5** — 修复 HolySheep 对 Droid Responses API 的兼容
> - **v1.6.4** — 修复 OpenClaw 的 npx 运行时检测，避免配置后页面仍卡在 Unauthorized / 未连接状态
> - **v1.6.3** — OpenClaw 默认模型改为 GPT-5.4，并继续保留 Claude 模型切换能力
> - **v1.6.2** — 修复 OpenClaw 配置误判与 npx 回退，端口冲突时自动切换空闲端口，并补充 Doctor 诊断
> - **v1.6.0** — 新增 Droid CLI 一键配置，默认写入 GPT-5.4 / Sonnet 4.6 / Opus 4.6 / MiniMax 2.7 Highspeed / Haiku 4.5
> - **v1.5.2** — OpenClaw 安装失败（无 git 环境）时自动降级为 npx 模式继续配置
> - **v1.5.0** — OpenClaw gateway 无需 token，直接浏览器打开 http://127.0.0.1:18789/

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[CLI/TUI]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://holysheep.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "holysheep123--holysheep-cli"
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
> const concepts = ["API 設計","自動化","CLI/TUI"];
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
