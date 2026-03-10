---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 497
stars_per_day: 497
forks: 25
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

**497** stars · **497** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!abstract] 核心創新
> 能夠在運行時將 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

## 專案簡介

這個工具能夠在運行時將 MCP 伺服器或 OpenAPI 規範轉換為命令列介面（CLI）。它使用 Python 實現，並支援 OAuth 認證，能自動處理令牌的獲取和更新。與其他 CLI 工具相比，mcp2cli 省去了大量的工具架構開銷，節省了 96-99% 的令牌使用。實際使用中，這個工具能夠輕鬆連接到 MCP 伺服器，並執行查詢或創建技能，對於需要頻繁與 API 互動的開發者來說非常方便。這個專案相對成熟，適合需要快速開發和測試的開發階段。

**技術棧**：`Python`

## 重點功能

- 即時將 MCP 伺服器或 OpenAPI 規範轉換為 CLI。
- 支援 OAuth 認證，自動處理令牌獲取和更新。
- 能夠使用環境變數和文件來管理敏感信息。
- 支援多種傳輸方式，包括 HTTP 和 SSE。
- 提供詳細的命令行參數選項，方便用戶自定義請求。

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
> 作者背景強大，專注於開發者工具，滿足了開發者對於簡化 API 互動的需求。隨著 API 數量的增加，開發者需要更高效的工具來管理這些接口，這使得 mcp2cli 的需求上升。近年來，對於無代碼解決方案的興趣也促進了此工具的流行。

## 適合誰使用

**目標受眾**：需要與 MCP 伺服器或 OpenAPI 進行互動的開發者和測試人員。

> [!example] 使用場景
> - 開發者 用它來 連接 MCP 伺服器，因為 可以快速執行查詢而不需撰寫複雜代碼。
> - API 測試人員 用它來 測試 OpenAPI 規範，因為 可以即時生成 CLI 命令進行測試。
> - 系統整合工程師 用它來 整合不同的 API，因為 可以輕鬆創建技能來調用各種服務。

## 架構分析

專案使用 Python 實現，通過命令行介面與用戶互動，並連接到 MCP 伺服器或 OpenAPI。資料流是 用戶輸入命令 → mcp2cli 解析請求 → 連接到 API → 返回結果給用戶。

## 優缺點分析

> [!success] 優點
> - 簡化了與 API 的互動過程。
> - 自動處理 OAuth 認證，減少了手動配置的麻煩。
> - 即時生成 CLI 命令，提高了開發效率。

> [!danger] 缺點
> - 對於新手來說，命令行操作可能不夠友好。
> - 需要一定的技術背景來理解和使用。
> - 依賴於正確的 API 配置，否則可能會出現錯誤。

> [!warning] 注意事項
> - 僅支援 Python 環境。
> - 對於不熟悉命令列的用戶可能有學習曲線。
> - 需要正確配置 OAuth 以便正常運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 25 |
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

相關概念：[[API 設計]] · [[OAuth]] · [[CLI/TUI]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
