---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 490
stars_per_day: 490
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
  - "讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**490** stars · **490** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。

> [!abstract] 核心創新
> 無需代碼生成即可即時將任何 MCP 伺服器或 OpenAPI 規格轉換為 CLI。

## 專案簡介

這個工具能夠將 MCP 伺服器或 OpenAPI 規格轉換為 CLI，讓用戶可以直接在命令行中與 API 互動。它使用 Python 實現，並支援 OAuth 認證，能夠自動處理令牌的獲取和刷新。與其他 CLI 工具相比，它不需要預先生成代碼，這意味著開發者可以更快地進行 API 測試和調用。使用者可以透過簡單的命令與 API 進行交互，並且可以在命令行中直接使用 OAuth 認證，這在許多 CLI 工具中並不常見。整體來看，這個工具對於需要頻繁與 API 互動的開發者來說是非常實用的，尤其是在快速迭代的開發環境中。值得一試，特別是對於那些希望減少代碼生成過程的開發者。

**技術棧**：`Python`

## 重點功能

- 即時將 MCP 伺服器或 OpenAPI 規格轉換為 CLI。
- 支援 OAuth 認證，自動處理令牌獲取和刷新。
- 可透過命令行直接與 API 互動，無需代碼生成。
- 支援多種傳輸方式，包括 HTTP 和 SSE。
- 敏感信息可從環境變量或文件中讀取，增強安全性。

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
> 作者背景顯示他們在開源社群中活躍，這個工具切中了開發者對於快速、靈活 API 交互的需求。隨著微服務架構的普及，對於能夠即時與 API 互動的工具需求上升，這使得 mcp2cli 在當前的開發環境中變得特別受歡迎。

## 適合誰使用

**目標受眾**：需要與多個 API 互動的開發者和工程師。

> [!example] 使用場景
> - 後端工程師 用它來 測試 API，因為可以快速生成 CLI 來與不同的服務進行互動。
> - DevOps 工程師 用它來 自動化 API 認證流程，因為它支援 OAuth 認證並自動管理令牌。
> - 前端開發者 用它來 直接調用後端服務，因為無需生成代碼即可快速測試 API 功能。

## 架構分析

這個工具主要是以命令行介面為核心，通過 Python 實現與 API 的互動，並支援 OAuth 認證來增強安全性。用戶可以直接在命令行中輸入指令，工具會即時處理 API 請求並返回結果。

## 優缺點分析

> [!success] 優點
> - 無需代碼生成，快速上手。
> - 支援 OAuth 認證，增強安全性。
> - 靈活的 API 互動方式，適合快速開發。

> [!danger] 缺點
> - 僅支援特定類型的 API。
> - 需要一定的 Python 環境配置。

> [!warning] 注意事項
> - 目前僅支援 MCP 伺服器和 OpenAPI 規格。
> - 需要 Python 環境來運行。

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

相關概念：[[API 測試]] · [[命令行介面]] · [[OAuth 認證]] · [[微服務架構]]

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
