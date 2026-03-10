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
stars_per_day: 153
forks: 0
open_issues: 1
created: 2026-03-07
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
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
  - "一條命令配置所有 AI 編程工具，簡化設置過程。"
---

# holysheep-cli

**306** stars · **153** stars/天 · 建立 2 天前 · JavaScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，簡化設置過程。

> [!abstract] 核心創新
> 這個專案提供了一種簡單的方式來配置多個 AI 編程工具，無需繁瑣的手動設置。

## 專案簡介

HolySheep CLI 是一個命令行工具，可以自動配置多個流行的 AI 編程助手，使用 HolySheep API 來簡化設置過程。它支持多種工具，如 Claude Code 和 Codex CLI，使用者只需運行一條命令即可完成配置，省去手動編輯配置檔的繁瑣。這個工具的特點在於其一體化的設置流程，與其他需要逐一配置的工具相比，顯著提高了效率。實際使用中，這個工具能夠快速連接到 HolySheep API，並且操作簡單，但對於不熟悉命令行的使用者可能需要一些學習曲線。總體來說，這是一個適合 AI 開發者的工具，特別是那些需要使用多個 AI 服務的開發者。

**技術棧**：`JavaScript`

## 重點功能

- 一條命令自動配置多個 AI 編程工具。
- 支持 Claude Code、Codex CLI 等流行工具。
- 簡化配置過程，省去手動編輯的麻煩。
- 支持 HolySheep API，無需 VPN 訪問。
- 提供互動式設置流程，易於使用。

## 快速開始

1. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
2. 運行設置命令
```bash
hs setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> HolySheep CLI 的作者在 AI 工具整合方面有豐富的經驗，這個工具正好滿足了開發者對於簡化多工具配置的需求。隨著 AI 編程助手的普及，開發者尋求更高效的配置方式，這個工具因此受到廣泛關注。特別是在中國市場，無需 VPN 的 API 訪問方式更是吸引了大量使用者。

## 適合誰使用

**目標受眾**：對於需要使用多個 AI 編程工具的開發者，特別是在中國的使用者。

> [!example] 使用場景
> - AI 開發者 用它來 快速配置多個 AI 編程工具，因為它簡化了繁瑣的設置過程。
> - 初學者 用它來 了解如何使用 HolySheep API，因為它提供了簡單的命令行界面。
> - 團隊成員 用它來 統一配置環境，因為可以快速設置相同的開發環境。

## 優缺點分析

> [!success] 優點
> - 簡化了多工具的配置過程。
> - 支持多種流行的 AI 工具，方便開發者使用。
> - 提供互動式設置，易於上手。

> [!danger] 缺點
> - 不支持所有 AI 工具，功能有限。
> - 某些工具的配置仍需手動處理。
> - 需要用戶提供 API 金鑰，增加了使用門檻。

> [!warning] 注意事項
> - 某些工具的配置仍需手動操作。
> - 不支持所有 AI 工具，僅限於列出的工具。
> - 需要用戶提供 API 金鑰。

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
> | `hs balance`

## 延伸閱讀

相關概念：[[命令行工具]] · [[API 整合]] · [[AI 編程助手]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://shop.holysheep.ai)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "holysheep123--holysheep-cli"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
