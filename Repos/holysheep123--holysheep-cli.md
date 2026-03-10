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
  - "一條命令配置所有 AI 編程工具，簡化設置流程。"
---

# holysheep-cli

**306** stars · **153** stars/天 · 建立 2 天前 · JavaScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 一條命令配置所有 AI 編程工具，簡化設置流程。

> [!abstract] 核心創新
> 通過一條命令自動配置多個 AI 編程工具，簡化設置過程。

## 專案簡介

HolySheep CLI 是一個命令行工具，能夠自動配置多個 AI 編程助手，讓使用者只需執行一條命令即可完成設置。它支持的工具包括 Claude Code、Codex CLI 等，並透過 HolySheep API 進行連接。使用者只需輸入 API 金鑰，然後選擇要配置的工具，整個過程簡單明瞭。與手動編輯每個工具的配置文件相比，這個工具大幅減少了設置時間和錯誤機率。這個 CLI 工具適合需要快速配置多個 AI 工具的開發者，尤其是在中國的使用者，因為它提供了一個無需 VPN 的解決方案。

**技術棧**：`JavaScript`

## 重點功能

- 一條命令自動配置多個 AI 編程助手。
- 支持 Claude Code、Codex CLI 等多種工具。
- 無需手動編輯配置文件，簡化流程。
- 提供互動式設置選項。
- 支持在中國無需 VPN 使用 HolySheep API。

## 快速開始

1. 全局安裝 HolySheep CLI
```bash
npm install -g @simonyea/holysheep-cli
```
2. 執行設置命令
```bash
hs setup
```
3. 輸入 API 金鑰，選擇要配置的工具

## 為什麼值得關注

> [!tip] 爆紅原因
> HolySheep CLI 的作者在 AI 工具整合方面有豐富的經驗，這個工具切合了開發者對於簡化配置流程的需求。隨著 AI 編程助手的普及，越來越多的開發者希望能夠快速上手，這個工具的出現正好滿足了這個需求，並且提供了便捷的使用體驗。

## 適合誰使用

**目標受眾**：需要快速配置多個 AI 編程工具的開發者和學生。

> [!example] 使用場景
> - 開發者 用它來 快速配置多個 AI 編程工具，因為可以節省大量的時間和精力。
> - 學生 用它來 設定學習環境，因為只需一條命令即可完成所有工具的配置。
> - 團隊 用它來 統一配置開發環境，因為能夠確保所有成員使用相同的設置。

## 優缺點分析

> [!success] 優點
> - 簡化了多工具的配置流程。
> - 節省了大量的時間和精力。
> - 提供互動式設置，友好易用。

> [!danger] 缺點
> - 不支持所有工具，部分仍需手動配置。
> - 依賴於 HolySheep API 的穩定性。
> - 對於新手用戶可能有學習曲線。

> [!warning] 注意事項
> - 不支持所有 AI 工具，部分工具需要手動配置。
> - 依賴於 HolySheep API 的可用性。
> - 對於新手用戶可能需要額外的學習曲線。

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

相關概念：[[API 設計]] · [[命令行工具]] · [[自動化]]

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

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，303 stars
