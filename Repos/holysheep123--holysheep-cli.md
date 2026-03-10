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
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
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
  - "一條命令自動配置所有 AI 編程工具，省去手動編輯配置檔的麻煩。"
---

# holysheep-cli

**306** stars · **102** stars/天 · 建立 3 天前 · JavaScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 一條命令自動配置所有 AI 編程工具，省去手動編輯配置檔的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **適合** 需要在中國使用多個 AI 編程工具但不想手動配置的開發者。
> **一句話重點** HolySheep CLI 的設計理念是讓開發者能夠更快速地接入多個 AI 工具，從而提高開發效率。

> [!abstract] 核心創新
> HolySheep CLI 提供了一條命令來自動配置多個 AI 編程工具，顯著簡化了開發者的工作流程。

## 專案簡介

HolySheep CLI 是一個命令行工具，通過執行一條命令來自動配置多個 AI 編程助手，使用 HolySheep API 來訪問 Claude、GPT 和 Gemini APIs，特別適合在中國的開發者。用戶只需運行 `hs setup`，然後輸入 API Key，選擇要配置的工具，便可完成設置。這個工具支持的編程助手包括 Claude Code、Codex CLI 和 Aider 等，並且能夠自動編輯各自的配置檔。與其他工具相比，HolySheep CLI 的獨特之處在於它能夠一次性配置多個工具，省去繁瑣的手動操作。使用效果上，這個工具能夠有效提高開發效率，特別是在需要頻繁切換不同 AI 工具的情況下。它的成熟度為 beta，適合中小型團隊使用，因為它簡化了配置過程。建議在需要快速接入多個 AI 工具的場景下使用，但如果只需使用單一工具，則不必使用此工具。

**技術棧**：`Node.js 16+`

## 重點功能

- 一鍵配置 — 只需運行 `hs setup` 即可自動配置多個 AI 工具。
- 支持多種工具 — 包括 Claude Code、Codex CLI 和 Aider 等，能夠自動編輯各自的配置檔。
- API Key 儲存 — 使用 `hs login` 命令可將 API Key 本地保存，方便後續使用。
- 檢查配置狀態 — 使用 `hs doctor` 命令可檢查配置及連通性，確保工具正常運行。
- 查看賬戶餘額 — 使用 `hs balance` 命令可隨時查詢賬戶餘額，方便管理。

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
> HolySheep CLI 的作者背景來自於 AI 工具開發，切中開發者在中國使用 AI 工具的需求，因為中國對於這些工具的訪問存在限制。這個專案的推出正好填補了這個空白，並且因為簡化了配置過程，使得開發者能夠更方便地使用這些工具，因此在短時間內吸引了不少關注。

## 適合誰使用

**目標受眾**：需要在中國使用多個 AI 編程工具但不想手動配置的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速配置多個 AI 編程助手，因為手動編輯配置檔耗時且容易出錯。
> - 全端工程師用它來在不同的開發環境中快速切換 AI 工具，因為它能夠一次性完成所有工具的配置。
> - AI 研究人員用它來簡化 API 的接入過程，因為只需一條命令就能完成設置，節省了大量時間。

## 架構分析

HolySheep CLI 是一個 CLI 工具，採用單體架構。用戶輸入 → `hs setup` → 自動配置各個 AI 工具。核心技術決策是使用 HolySheep API 作為中介來訪問不同的 AI 服務。專案目錄結構中，主要的執行檔案是 `index.js`，負責處理用戶的命令輸入和配置邏輯。

## 優缺點分析

> [!success] 優點
> - 簡化配置過程，節省時間。
> - 支持多個主流 AI 工具，方便開發者使用。
> - 提供檢查配置狀態的功能，便於排查問題。

> [!danger] 缺點
> - 不支持所有 AI 工具，存在功能限制。
> - 需要 Node.js 環境，對於某些用戶可能不方便。
> - 對於不熟悉 CLI 的用戶來說，可能需要一些學習成本。

> [!warning] 注意事項
> - 僅支持 Node.js 16+。
> - 對於某些工具（如 Cursor）需要手動配置，無法自動完成。
> - 不支持 Gemini CLI 的配置，僅限於 Google 官方協議。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
| Open Issues | 1 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://shop.holysheep.ai) |
| Repo 大小 | 2.4 MB |

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

相關概念：[[API 設計]] · [[CLI/TUI]] · [[自動化測試]]

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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
