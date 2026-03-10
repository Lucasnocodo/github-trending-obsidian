---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 481
stars_per_day: 481
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
aliases:
  - "mcp2cli"
  - "knowsuchagency/mcp2cli"
  - "將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**481** stars · **481** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

> [!abstract] 核心創新
> 無需代碼生成即可即時轉換 API 為 CLI。

## 專案簡介

mcp2cli 允許使用者在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，並且無需代碼生成。這個專案的核心機制是通過簡單的命令行介面來與 API 進行互動，並且支持 OAuth 認證。它使用 Python 實現，並提供了與 AI 編碼代理的集成，讓它們能夠輕鬆調用 API。與其他 CLI 工具相比，mcp2cli 的獨特之處在於它的即時生成能力，使用者不需要事先生成代碼，這樣可以節省大量的開發時間和資源。這個工具的效果是讓開發者能夠快速與各種 API 進行互動，但需要注意的是，對於複雜的 API，可能需要進一步的配置。總體來看，這是一個非常實用的工具，特別適合需要快速開發和測試的開發者。

**技術棧**：`Python`

## 重點功能

- 即時將 MCP 伺服器或 OpenAPI 規範轉換為 CLI。
- 支持 OAuth 認證，簡化安全性管理。
- 支持從環境變數或文件讀取敏感信息。
- 提供與 AI 編碼代理的集成。
- 節省大量的開發時間和資源。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 運行 CLI
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 API 的普及，開發者對於快速調用 API 的需求越來越高，這使得 mcp2cli 這樣的工具變得越來越重要。作者的背景也使得這個專案在技術社群中引起了關注。

## 適合誰使用

**目標受眾**：需要快速與 API 互動的開發者和測試人員。

> [!example] 使用場景
> - 開發者 用它來 快速調用 API，因為這樣可以節省開發時間。
> - 測試人員 用它來 測試 API 的功能，因為可以快速生成 CLI 命令。
> - AI 編碼代理 用它來 自動化 API 調用，因為可以輕鬆集成到工作流程中。

## 優缺點分析

> [!success] 優點
> - 快速生成 CLI 命令，節省開發時間。
> - 支持多種認證方式，提升安全性。

> [!danger] 缺點
> - 對於複雜的 API 可能需要額外配置。
> - 僅限於 Python 環境使用。

> [!warning] 注意事項
> - 對於複雜的 API 可能需要額外配置。
> - 需要 Python 環境支持。

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

相關概念：[[API 調用]] · [[CLI 工具]] · [[OAuth 認證]]

[GitHub](https://github.com/knowsuchagency/mcp2cli) · [官方網站](https://pypi.org/project/mcp2cli/)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
