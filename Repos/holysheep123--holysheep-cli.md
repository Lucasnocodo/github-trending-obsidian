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
  - 開發工具
  - javascript
  - ai
  - aider
  - api
  - china
  - claude
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
> HolySheep CLI 提供了一條命令來自動配置多個 AI 編程工具，顯著簡化了設置過程。

## 專案簡介

HolySheep CLI 是一個命令行工具，能夠自動配置多個流行的 AI 編程助手，讓用戶無需手動編輯配置文件。它支持的工具包括 Claude Code 和 Codex CLI 等，使用者只需執行一條命令即可完成設置。與其他配置工具相比，HolySheep CLI 的優勢在於其簡化的流程和對多種工具的支持，特別適合需要同時使用多個 AI 工具的開發者。這個工具的使用效果顯著提升了配置效率，但需要注意的是，某些工具的設置可能仍需手動處理。整體來看，HolySheep CLI 是一個值得嘗試的工具，特別適合希望簡化設置過程的開發者。

**技術棧**：`JavaScript`

## 重點功能

- 一條命令自動配置多個 AI 編程助手。
- 支持多種流行工具的自動設置。
- 提供互動式設置流程，簡化用戶操作。
- 支持保存 API 金鑰以便後續使用。
- 檢查配置和連接的命令，方便排錯。

## 快速開始

1. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
2. 運行設置命令
```bash
hs setup
```
3. 輸入 API 金鑰並選擇工具
```bash
無需指令
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 工具的普及，開發者對於簡化配置的需求增加。HolySheep CLI 提供的便捷性和多工具支持正好滿足了這一需求，吸引了不少開發者的注意。

## 適合誰使用

**目標受眾**：希望簡化 AI 工具配置過程的開發者和技術人員。

> [!example] 使用場景
> - 開發者 用它來 快速配置 AI 編程工具，因為它簡化了繁瑣的手動設置過程。
> - 新手 用它來 了解如何使用多個 AI 工具，因為它提供了一個統一的配置方式。
> - 技術支持人員 用它來 幫助客戶設置 AI 工具，因為它的自動化功能提高了效率。

## 優缺點分析

> [!success] 優點
> - 簡化了多工具的配置過程。
> - 提供互動式設置，易於使用。
> - 支持多種流行的 AI 工具。

> [!danger] 缺點
> - 某些工具的設置可能仍需手動處理。
> - 需要安裝 Node.js 和 npm。
> - 對於不熟悉命令行的用戶，可能需要學習成本。

> [!warning] 注意事項
> - 某些工具的設置可能仍需手動處理。
> - 需要安裝 Node.js 和 npm。
> - 對於不熟悉命令行的用戶，可能需要學習成本。

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

相關概念：[[命令行工具]] · [[AI 編程助手]] · [[自動化配置]]

[GitHub](https://github.com/holysheep123/holysheep-cli) · [官方網站](https://shop.holysheep.ai)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
