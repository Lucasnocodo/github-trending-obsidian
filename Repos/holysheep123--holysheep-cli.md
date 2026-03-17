---
repo: holysheep123/holysheep-cli
url: https://github.com/holysheep123/holysheep-cli
owner: holysheep123
owner_type: User
language: JavaScript
license: N/A
description: "🐑 One command to configure all AI coding tools — Claude Code, Codex, Gemini CLI, Cursor, Aider & more"
homepage: "https://holysheep.ai"
stars: 304
stars_per_day: 34
forks: 1
open_issues: 1
created: 2026-03-07
pushed_at: 2026-03-17
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
use_case: "一條命令配置所有 AI 編程工具，簡化設定流程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2454
readme_length: 5306
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:305,2026-03-14:305,2026-03-15:310,2026-03-16:310,2026-03-17:304"
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
  - "一條命令配置所有 AI 編程工具，簡化設定流程。"
---

# holysheep-cli

**304** stars · **34** stars/天 · 建立 9 天前 · JavaScript · 未標註授權

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

`個人專案` `easy-install`

`ai` `ai-coding` `aider` `anthropic` `api` `api-proxy` `china` `claude` `claude-code` `cli` `codex` `coding-assistant` `cursor` `gemini` `gemini-cli` `gpt-5` `holysheep` `llm` `openai` `openclaw`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，簡化設定流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (34 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在中國使用 AI 編程助手但不想手動配置的開發者。
> **一句話重點** HolySheep CLI 讓 AI 編程工具的配置變得前所未有的簡單，特別是在中國環境中。

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
> **結論** 花 2 小時學、1 小時整合，得到快速配置多個 AI 工具的效果，值得採用。

> [!abstract] 核心創新
> HolySheep CLI 提供了一鍵配置多個 AI 編程工具的能力，簡化了開發者的設置流程。

## 專案簡介

HolySheep CLI 是一個命令行工具，通過一條命令自動配置多個流行的 AI 編程助手，以使用 HolySheep API。用戶只需執行 `hs setup`，然後輸入 API 金鑰，選擇要配置的工具，便可完成配置，省去手動編輯配置文件的繁瑣。這個工具支持的 AI 編程助手包括 Claude Code、Codex CLI 和 Aider 等，並能在中國無需 VPN 地直接訪問。技術上，它使用 Node.js 16+，依賴於 chalk、commander 和 inquirer 等庫，確保了良好的用戶互動和配置過程的流暢性。

與其他工具相比，HolySheep CLI 的優勢在於它的自動化配置能力，避免了手動設定的錯誤和繁瑣，特別適合需要快速部署多個 AI 工具的開發者。雖然它不支持 Gemini CLI，但對於大多數主流工具的支持已經足夠，並且提供了清晰的指令和使用說明。使用者在配置過程中可能會遇到 API 金鑰的問題，這需要在官方網站上註冊獲取。整體來看，HolySheep CLI 是一個穩定且高效的工具，適合中小型團隊在開發過程中使用，未來可能會擴展更多工具的支持。

**技術棧**：`Node.js 16+` · `chalk` · `commander` · `inquirer` · `node-fetch`

## 重點功能

- 一鍵配置 — 只需執行 `hs setup`，即可自動配置多個 AI 工具。
- 支持多種工具 — 包括 Claude Code、Codex CLI 和 Aider，無需手動編輯配置文件。
- 互動式命令行界面 — 使用 inquirer 提供清晰的配置選項和提示。
- API 金鑰管理 — 使用 `hs login` 命令安全保存 API 金鑰。
- 檢查配置狀態 — 使用 `hs doctor` 命令檢查配置和連接狀態。

## 快速開始

1. 安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
2. 執行配置命令
```bash
hs setup
```
3. 輸入 API 金鑰並選擇工具
```bash
# 按提示操作
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 HolySheep CLI",
  "指令": "hs setup",
  "預期輸出": "提示輸入 API 金鑰並選擇要配置的工具"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 304 stars（34/天），forks 1（0.3%），顯示出一定的初期關注。這個專案由 holysheep123 開發，解決了在中國使用 AI 編程助手時的配置繁瑣問題，特別是無需 VPN 的情況下。這一需求在當前環境中非常迫切，尤其是對於開發者來說。社群的反應也顯示出對於簡化配置流程的需求。這個工具的出現正好填補了這一空白。

## 適合誰使用

**目標受眾**：需要在中國使用 AI 編程助手但不想手動配置的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速配置多個 AI 編程工具，因為只需一條命令即可完成所有設置，節省了手動配置的時間。
> - 新創團隊的開發者用它來在短時間內整合多個 AI 助手，因為它支持多種工具並且無需 VPN，適合在中國使用。
> - 自由職業者用它來簡化開發環境的設置，因為它能自動配置常用的 AI 工具，讓他們專注於編碼而非配置。

## 架構分析

HolySheep CLI 採用單一命令行工具架構，設計目的是為了簡化多個 AI 編程助手的配置過程。用戶只需執行 `hs setup`，CLI 會自動引導用戶輸入 API 金鑰並選擇要配置的工具。這樣的設計使得用戶無需手動編輯配置文件，降低了出錯的可能性。

CLI 的資料流主要依賴於 Node.js 的事件循環和非阻塞 I/O，使得配置過程快速且高效。選擇 Node.js 的原因在於其廣泛的生態系統和對於 CLI 工具的良好支持。這種設計雖然簡化了使用流程，但在某些情況下，對於不熟悉命令行的用戶可能會造成一定的學習曲線。

整體而言，HolySheep CLI 的架構設計旨在提升開發者的效率，未來可能會擴展更多的工具支持。

## 技術深入分析

HolySheep CLI 的核心技術機制是基於 Node.js 的命令行工具，使用了 chalk 和 inquirer 等庫來提供友好的用戶界面。其設計模式採用命令行交互，使用者可以通過簡單的命令完成多個工具的配置，這樣的設計使得新手也能輕鬆上手。效能上，CLI 的配置速度取決於用戶的 API 金鑰輸入和選擇工具的速度，通常在幾秒內完成。由於依賴於 Node.js 的非阻塞 I/O，整體性能表現良好。選擇 Node.js 的原因在於其廣泛的生態系統和對於 CLI 工具的良好支持，這使得 HolySheep CLI 能夠快速迭代和擴展功能。技術風險方面，未來可能面臨 API 變更的挑戰，這需要持續的維護和更新。整合方面，HolySheep CLI 可以與多種開發環境兼容，特別是在使用 Node.js 的項目中，整合難度低，適合快速部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程順暢，沒有明顯的坑。整體上，對於新手來說，30 分鐘內可以順利上手並完成配置。

## 優缺點分析

> [!success] 優點
> - 自動化配置，節省時間和精力。
> - 支持多種流行的 AI 編程工具。
> - 互動式命令行界面，易於使用。

> [!danger] 缺點
> - 不支持所有 AI 工具，限制使用範圍。
> - 需要 Node.js 環境，對於某些用戶可能不便。
> - 某些工具仍需手動配置，無法完全自動化。

> [!warning] 注意事項
> - 不支持 Gemini CLI。
> - 需要 Node.js 16+ 環境。
> - 對於某些工具如 Cursor 需要手動配置，無法完全自動化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了更全面的 AI 智能體網關功能，但需要額外的配置和管理。 |
| [openai/codex](https://github.com/openai/codex) | Codex 是一個獨立的 AI 編程助手，無法自動配置多個工具，使用上較為繁瑣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/codex](https://github.com/openai/codex) | Codex 是一個獨立的 AI 編程助手，無法自動配置多個工具，使用上較為繁瑣。 | 如果需要一個功能強大的獨立編程助手，Codex 可能更合適。 | medium，因為需要重新配置和學習新的使用方式。 |
| [holysheep123/openclaw](https://github.com/holysheep123/openclaw) | OpenClaw 提供了更全面的 AI 智能體網關功能，但需要額外的配置和管理。 | 如果需要更強大的 AI 智能體管理功能，OpenClaw 是更好的選擇。 | high，因為需要重新設置和管理更多的配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **holysheep-cli** | **codex** | **openclaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 是一個獨立的 AI 編程助手，無法自動配置多個工具，使用上較為繁瑣。 | OpenClaw 提供了更全面的 AI 智能體網關功能，但需要額外的配置和管理。 |
> | 遷移成本 | - | medium，因為需要重新配置和學習新的使用方式。 | high，因為需要重新設置和管理更多的配置。 |
> | 適用場景 | 主要場景 | 如果需要一個功能強大的獨立編程助手，Codex 可能更合適。 | 如果需要更強大的 AI 智能體管理功能，OpenClaw 是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，API 金鑰無法正確保存
  - 解法：確保使用最新版本的 Node.js，並檢查權限設置
- [MEDIUM] OpenClaw Gateway 停止後無法自動重啟
  - 解法：需手動重新運行 `npx openclaw gateway --port 18789`

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能快速配置多個 AI 工具，提升開發效率。 |
| 大型企業的 AI 工具整合 | 普通 | 雖然支持多種工具，但不支持所有工具，可能需要額外配置。 |
| 自由職業者的個人專案 | 非常適合 | 簡化了配置流程，讓專注於開發。 |
| 需要高可用性的生產環境 | 不適合 | 目前處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到快速配置多個 AI 工具的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：HolySheep CLI 本身不需要高權限，僅需存取 API 金鑰。對於使用過程中的敏感資料，需確保金鑰的安全性。

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
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://holysheep.ai) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/holysheep123/holysheep-cli) |
| Topics | `ai` `ai-coding` `aider` `anthropic` `api` `api-proxy` `china` `claude` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `commander` `inquirer` `node-fetch` `ora`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@holysheep123](https://github.com/holysheep123) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新但問題解決率低。
**連結**：[文件](https://holysheep.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-17）
> **活躍天數** 3 天 · **最新 commit** fix: update homepage from shop.holysheep.ai to holysheep.ai

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

相關概念：[[CLI/TUI]] · [[AI]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://holysheep.ai)

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
> const concepts = ["CLI/TUI","AI","自動化"];
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
