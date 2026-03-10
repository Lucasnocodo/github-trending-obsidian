---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 472
stars_per_day: 472
forks: 21
open_issues: 0
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - cli_工具
  - python
---

# mcp2cli

**472** stars · **472** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI。

> [!abstract] 核心創新
> 這個專案能在運行時將任何 MCP 伺服器轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 允許開發者將任何 MCP 伺服器或 OpenAPI 規範轉換為命令列介面，實現即時交互。它使用 Python 實現，並且支持與 AI 編程代理的集成，讓它們能夠輕鬆調用 API。與傳統的 API 客戶端工具不同，mcp2cli 不需要生成代碼，直接在運行時進行交互，這大大提高了開發效率。這是一個創新的工具，值得開發者試用。

**技術棧**：`Python`

## 重點功能

- 即時將 MCP 伺服器轉換為 CLI。
- 支持與 AI 編程代理的集成。
- 無需代碼生成，簡化使用流程。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 直接運行 mcp2cli
```bash
uvx mcp2cli --help
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的創始團隊專注於提高開發者的效率，並且其即時交互的特性切合了當前的需求。隨著 API 整合需求的增加，這個工具的實用性愈發凸顯。

## 適合誰使用

**目標受眾**：需要快速調用 API 的開發者和團隊。

> [!example] 使用場景
> - [開發者] 用它來 快速調用 API，因為這樣可以節省時間並提高效率。
> - [團隊] 用它來 統一管理多個 API 調用，因為這樣可以減少重複工作。
> - [AI 編程代理] 用它來 學習如何調用 API，因為這樣可以擴展其功能。

> [!warning] 注意事項
> 需要 Python 環境。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 21 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-09 |
| 官方網站 | [Link](https://pypi.org/project/mcp2cli/) |
| Repo 大小 | 34.3 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@knowsuchagency](https://github.com/knowsuchagency) | 38 |
> | [@Gujiassh](https://github.com/Gujiassh) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> mcp2cli
> 
>   Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen.
>   Save 96–99% of the tokens wasted on tool schemas every turn.
> 
> ## Install
> 
> ```bash
> pip install mcp2cli
> 
> # Or run directly without installing
> uvx mcp2cli --help
> ```
> 
> ## AI Agent Skill
> 
> mcp2cli ships with an installable [skill](https://skills.sh) that teaches AI coding agents (Claude Code, Cursor, Codex) how to use it. Once installed, your agent can discover and call any MCP server or OpenAPI endpoint — and even generate new skills from APIs.
> 
> ```bash
> npx skills add knowsuchagency/mcp2cli --skill mcp2cli
> ```
> 
> After installing, try prompts like:
> - `mcp2cli --mcp https://mcp.example.com/sse` — interact with an MCP server
> - `mcp2cli create a skill for https://api.example.com/openapi.json` — generate a skill from an API
> 
> ## Usage
> 
> ### MCP HTTP/SSE mode
> 
> ```bash
> # Connect to an MCP server over HTTP
> mcp2cli --mcp https://mcp.example.com/sse --list
> 
> # Call a tool
> mcp2cli --mcp https://mcp.example.com/sse search --query "test"
> 
> # With auth header
> mcp2cli --mcp https://mcp.example.com/sse --auth-header "x-api-key:sk-..." \
>   query --sql "SELECT 1"
> 
> # Force a specific transport (skip streamable HTTP fallback dance)
> mcp2cli --mcp https://mcp.example.com/sse --transport sse --list
> ```
> 
> ### OAuth authentication
> 
> MCP servers that require OAuth are supported out of the box. mcp2cli handles token acquisition,
> caching, and refresh automatically.
> 
> ```bash
> # Authorization code + PKCE flow (opens browser fo

## 延伸閱讀

相關概念：[[API 整合]] · [[命令列介面]] · [[即時交互]]

[GitHub](https://github.com/knowsuchagency/mcp2cli) · [官方網站](https://pypi.org/project/mcp2cli/)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
