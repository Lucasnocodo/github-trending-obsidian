---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 491
stars_per_day: 491
forks: 21
open_issues: 0
created: 2026-03-09
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
  - "lang/python"
  - easy_install
aliases:
  - "mcp2cli"
  - "knowsuchagency/mcp2cli"
  - "將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**491** stars · **491** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!abstract] 核心創新
> 無需代碼生成，能即時將 MCP 伺服器或 OpenAPI 規範轉換為 CLI。

## 專案簡介

這個工具讓你能夠在運行時將 MCP 伺服器或 OpenAPI 規範轉換為命令列介面。它使用 Python 開發，並透過簡單的命令行指令與 API 進行互動，支援 OAuth 認證和環境變數的安全管理。與其他 CLI 工具相比，mcp2cli 的獨特之處在於它的即時生成能力，無需預先生成代碼，節省了大量的開發時間和資源。實際使用中，它能有效減少 API 調用中的 token 浪費，並且支援多種認證方式。這個專案的成熟度高，適合需要快速集成 API 的開發者使用。

**技術棧**：`Python`

## 重點功能

- 即時將 MCP 伺服器或 OpenAPI 規範轉換為 CLI。
- 支援 OAuth 認證，簡化安全管理。
- 支持從環境變數或文件讀取敏感信息。
- 自動處理 token 的獲取和刷新。
- 提供多種 API 調用方式，包括 HTTP 和 SSE。

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
> 這個專案由 knowsuchagency 團隊開發，專注於簡化 API 的使用流程，切合開發者對於快速開發和簡化流程的需求。隨著 API 整合的需求上升，這個工具提供了一個即時且靈活的解決方案，讓開發者能夠快速上手。近期的開源趨勢也促使了這類工具的流行。

## 適合誰使用

**目標受眾**：需要快速集成和測試 API 的開發者和工程師。

> [!example] 使用場景
> - 後端工程師 用它來 連接 MCP 伺服器，因為 他們需要快速測試 API 功能。
> - DevOps 工程師 用它來 自動化 API 調用，因為 他們希望減少手動操作的錯誤。
> - AI 開發者 用它來 整合 OpenAPI 規範，因為 他們需要快速構建和測試 AI 代理的能力。

## 架構分析

專案採用簡單的命令列工具架構，使用 Python 進行 API 調用，並透過命令行參數管理認證和請求。用戶輸入的命令直接轉換為對應的 API 調用，實現即時互動。

## 優缺點分析

> [!success] 優點
> - 無需代碼生成，快速上手。
> - 支援多種認證方式，靈活性高。
> - 減少 API 調用中的 token 浪費。

> [!danger] 缺點
> - 僅限於 Python 環境使用。
> - 對於複雜的 API 可能需要額外配置。
> - 早期版本可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 環境。
> - 對於大型 API 可能需要額外的性能調整。
> - 早期版本可能存在不穩定的情況。

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
> # Authorization code + PKCE flow (opens browser for login)
> mcp2cli --mcp https://mcp.example.com/sse --oauth --list
> 
> # Client credentials flow (machine-to-machine, no browser)
> mcp2cli --mcp https://mcp.example.com/sse \
>   --oauth-client-id "my-client-id" \
>   --oauth-client-secret "my-secret" \
>   search --query "test"
> 
> # With specific scopes
> mcp2cli --mcp https://mcp.example.com/sse --oauth --oauth-scope "read write" --list
> ```
> 
> Tokens are persisted in `~/.cache/mcp2cli/oauth/` so subsequent calls reuse existing tokens
> and refresh automatically when they expire.
> 
> ### Secrets from environment or files
> 
> Sensitive values (`--auth-header` values, `--oauth-client-id`, `--oauth-client-secret`) support
> `env:` and `file:` prefixes to avoid passing secrets as CLI arguments (which are visible in
> process listings):
> 
> ```bash
> # Read from environment variable
> mcp2cli --mcp https://mcp.example.com/sse \
>   --auth-header "Authorization:env:MY_API_TOKEN" \
>   --list
> 
> # Read from file
> mcp2cli --mcp https://mcp.example.com/sse \
>   --oauth-client-secret "fi

## 延伸閱讀

相關概念：[[API 整合]] · [[命令列介面]] · [[OAuth 認證]]

[GitHub](https://github.com/knowsuchagency/mcp2cli) · [官方網站](https://pypi.org/project/mcp2cli/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "knowsuchagency--mcp2cli"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
