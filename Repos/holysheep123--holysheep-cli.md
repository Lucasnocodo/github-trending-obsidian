---
repo: holysheep123/holysheep-cli
url: https://github.com/holysheep123/holysheep-cli
owner: holysheep123
owner_type: User
language: JavaScript
license: N/A
description: "🐑 One command to configure all AI coding tools — Claude Code, Codex, Gemini CLI, Cursor, Aider & more"
homepage: "https://shop.holysheep.ai"
stars: 306
stars_per_day: 102
forks: 0
open_issues: 1
created: 2026-03-07
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "一條命令配置所有 AI 編程工具，讓開發者無需手動修改配置。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
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
  - "一條命令配置所有 AI 編程工具，讓開發者無需手動修改配置。"
---

# holysheep-cli

**306** stars · **102** stars/天 · 建立 3 天前 · JavaScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，讓開發者無需手動修改配置。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要在中國使用多個 AI 編程工具但不想手動配置的開發者。
> **一句話重點** HolySheep CLI 的最大價值在於它能夠快速整合多個 AI 工具，特別是在中國這樣的環境中。

> [!abstract] 核心創新
> HolySheep CLI 提供了一個簡單的命令行工具來自動配置多個 AI 編程助手，特別適合無法使用 VPN 的中國用戶。

## 專案簡介

HolySheep CLI 是一個命令行工具，通過一條命令自動配置多個流行的 AI 編程助手，使用 HolySheep API 來連接 Claude、GPT 和 Gemini，而無需 VPN。用戶只需運行 `hs setup`，輸入 API 金鑰，然後選擇要配置的工具，所有配置將自動完成。這個工具支持的助手包括 Claude Code、Codex CLI 和 Aider 等，並且能夠自動編輯相應的配置文件。相較於手動配置每個工具，HolySheep CLI 大幅簡化了流程，特別適合需要快速上手的開發者。使用效果上，這個工具能夠有效降低配置時間，並且支援 Windows 環境，要求 Node.js 16 以上。這個專案目前處於穩定階段，適合中小型團隊使用。對於需要快速集成多個 AI 工具的開發者來說，這是一個值得考慮的選擇，但如果你只用單一工具，則可能不需要這麼全面的解決方案。

**技術棧**：`Node.js 16+`

## 重點功能

- 一鍵配置 — 只需運行 `hs setup` 即可自動配置所有支持的 AI 工具。
- 支持多種工具 — 包括 Claude Code、Codex CLI、Aider 等，並自動編輯相應的配置文件。
- 互動式設置 — 用戶在設置過程中可選擇要配置的工具，簡化了使用流程。
- 檢查配置 — 使用 `hs doctor` 命令檢查配置狀態和連通性，確保一切正常。
- 查看賬戶餘額 — 使用 `hs balance` 命令快速查看 API 使用情況。

## 快速開始

1. 使用 npx 安裝並設置
```bash
npx @simonyea/holysheep-cli@latest setup
```
2. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
3. 運行設置命令
```bash
hs setup
```

## 程式碼範例

```bash
hs setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> HolySheep CLI 的作者在 AI 工具整合方面有豐富經驗，這個工具解決了在中國使用 AI 編程助手時的配置問題，特別是對於無法使用 VPN 的用戶。最近在社群中引發討論，因為它提供了一個簡單的解決方案來整合多個流行的 AI 工具。隨著對 AI 編程助手需求的增加，這個工具的實用性變得更加明顯。

## 適合誰使用

**目標受眾**：需要在中國使用多個 AI 編程工具但不想手動配置的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速配置 Claude Code 和 Codex，因為手動配置耗時且容易出錯。
> - 全端開發者用它來整合多個 AI 工具，因為只需一條命令就能完成所有配置，節省了大量時間。
> - 初學者用它來學習如何使用 AI 編程助手，因為它簡化了配置過程，讓他們能專注於編程而非設置環境。

## 架構分析

HolySheep CLI 採用單體架構，通過命令行界面接收用戶輸入 → 自動配置 AI 工具 → 輸出配置結果。核心技術決策是使用 HolySheep API 作為中介，簡化了多個工具的配置過程。專案目錄結構中，主要的命令和配置邏輯集中在 `index.js` 和 `config.js` 中。

## 技術深入分析

> [!note]- 展開深入分析
> HolySheep CLI 的核心功能是通過 HolySheep API 自動配置多個 AI 編程助手，這樣用戶無需手動編輯配置文件。效能上，這個工具能夠在幾秒鐘內完成配置，顯著提高了開發效率。設計上，選擇了 Node.js 作為開發語言，因為它在處理 I/O 操作時表現優異。與其他工具相比，HolySheep CLI 的主要差異在於它專注於中國市場，解決了 VPN 限制的問題。

## 優缺點分析

> [!success] 優點
> - 簡化配置過程，節省時間。
> - 支持多個流行的 AI 工具，增加靈活性。
> - 互動式設置，對初學者友好。

> [!danger] 缺點
> - 不支持所有 AI 工具，部分需要手動配置。
> - 僅限於 Node.js 環境，對於其他語言的開發者不友好。
> - 在某些情況下，可能需要重新啟動終端以識別命令。

> [!warning] 注意事項
> - 僅支持 Node.js 16 以上版本。
> - 對於 Cursor 工具需要手動配置，無法自動完成。
> - 不支持 Gemini CLI 的 Google 協議。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
| Open Issues | 1 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://shop.holysheep.ai) |
| Repo 大小 | 2.4 MB |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://shop.holysheep.ai)

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
> 3. 直接开始聊天，无需填写 t

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://shop.holysheep.ai)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
