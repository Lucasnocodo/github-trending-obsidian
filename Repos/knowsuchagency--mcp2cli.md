---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 512
stars_per_day: 512
forks: 27
open_issues: 0
created: 2026-03-09
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
use_case: "將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。"
priority: medium
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

**512** stars · **512** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (512 stars/day)
> **適合** 需要快速與 API 互動的開發者，尤其是那些不想編寫代碼的工程師。
> **一句話重點** mcp2cli 讓開發者能夠無需編碼即可快速與 API 互動，這在當前快速開發的環境中非常有價值。

> [!abstract] 核心創新
> mcp2cli 允許用戶在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 讓用戶能夠在不需要編寫代碼的情況下，將 MCP 伺服器或 OpenAPI 規範轉換為命令行介面。用戶只需透過簡單的命令，如 `mcp2cli --mcp https://mcp.example.com/sse`，即可與 MCP 伺服器互動，並且支援 OAuth 認證，能自動處理令牌的獲取與刷新。技術上，它使用 Python 實現，並支援多種認證方式，包括 OAuth 和環境變數的安全處理。與其他 CLI 工具相比，mcp2cli 的獨特之處在於它能夠在運行時動態生成 CLI，無需預先生成代碼，這大幅降低了開發成本。使用者可以利用 `--list` 參數輕鬆列出可用的命令，並且支持 JSON 輸出格式的美化和壓縮。該工具的效能表現良好，能夠在大多數環境中快速響應，並且對於需要頻繁與 API 互動的開發者來說非常實用。這個專案目前處於穩定階段，適合中小型團隊使用，尤其是那些需要快速集成 API 的開發者。建議在需要快速測試和調用 API 時使用，但對於大型專案或需要高度自定義的情況，可能需要考慮其他解決方案。

**技術棧**：`Python 3.7+`

## 重點功能

- 即時 CLI 生成 — 透過 `mcp2cli --mcp <URL>` 命令，無需代碼生成即可與 MCP 伺服器互動。
- 支援 OAuth 認證 — 自動處理令牌獲取和刷新，簡化 API 認證流程。
- 環境變數支持 — 使用 `env:` 和 `file:` 前綴安全地管理敏感信息。
- 多種輸出格式 — 支援 JSON 美化、壓縮和 TOON 格式，適合 LLM 使用。
- 快取機制 — 自動快取 API 規範，並支援自定義快取 TTL 和目錄。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 直接運行 mcp2cli
```bash
uvx mcp2cli --help
```
3. 與 MCP 伺服器互動
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```

## 程式碼範例

```bash
mcp2cli --mcp https://mcp.example.com/sse search --query "test"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景強大，專注於簡化 API 交互的需求，這使得 mcp2cli 在開發者社群中迅速受到重視。隨著微服務和 API 驅動開發的興起，這種即時生成 CLI 的工具正好切中痛點。近年來，開源工具的需求不斷增加，尤其是在快速開發和測試階段，這使得 mcp2cli 的推出時機恰到好處。

## 適合誰使用

**目標受眾**：需要快速與 API 互動的開發者，尤其是那些不想編寫代碼的工程師。

> [!example] 使用場景
> - 後端工程師用它來快速測試 API，因為可以即時生成 CLI，節省了手動編寫測試代碼的時間。
> - DevOps 工程師用它來自動化與 MCP 伺服器的互動，因為它支援 OAuth 認證，能夠安全地管理 API 認證。
> - 產品經理用它來探索和測試第三方 API，因為可以直接從 OpenAPI 規範生成 CLI，無需編寫額外代碼。

## 架構分析

mcp2cli 採用 CLI 工具架構，核心資料流為：用戶輸入 → mcp2cli 處理 → 輸出結果。它使用 Python 實現，並透過命令行參數處理用戶請求。關鍵檔案包括 `mcp2cli.py`，該檔案負責解析命令並執行相應的 API 調用。

## 優缺點分析

> [!success] 優點
> - 無需代碼生成，快速集成 API。
> - 支援多種認證方式，簡化安全管理。
> - 即時生成 CLI，適合快速測試和開發。

> [!danger] 缺點
> - 對大型 API 的性能可能不佳。
> - 需要有效的 MCP 伺服器或 OpenAPI 規範。
> - 某些功能在 Windows 環境下可能無法使用。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要有效的 MCP 伺服器或 OpenAPI 規範
> - 對於大型 API 可能會有性能瓶頸
> - 不支援 Windows 環境的某些功能

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openapi-cli--openapi-cli\|openapi-cli/openapi-cli]] | openapi-cli 主要用於生成 OpenAPI 客戶端，而 mcp2cli 則支援即時生成 CLI，無需代碼生成。 |
| [[postman--postman-cli\|postman/postman-cli]] | Postman CLI 主要針對測試和調用 API，而 mcp2cli 允許用戶動態生成 CLI，並支持多種認證方式。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 27 |
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
>   --oauth-client-secret "file:/run/secrets/client_secret" \
>   --oauth-client-id "my-client-id" \
>   --list
> 
> # Works with secret managers that inject env vars
> fnox exec -- mcp2cli --mcp https://mcp.example.com/sse \
>   --oauth-client-id "env:OAUTH_CLIENT_ID" \
>   --oauth-client-secret "env:OAUTH_CLIENT_SECRET" \
>   --list
> ```
> 
> ### MCP stdio mode
> 
> ```bash
> # List tools from an MCP server
> mcp2cli --mcp-stdio "npx @modelcontextprotocol/server-filesystem /tmp" --list
> 
> # Call a tool
> mcp2cli --mcp-stdio "npx @modelcontextprotocol/server-filesystem /tmp" \
>   read-file --path /tmp/hello.txt
> 
> # Pass environment variables to the server process
> mcp2cli --mcp-stdio "node server.js" --env API_KEY=sk-... --env DEBUG=1 \
>   search --query "test"
> ```
> 
> ### OpenAPI mode
> 
> ```bash
> # List all commands from a remote spec
> mcp2cli --spec https://petstore3.swagger.io/api/v3/openapi.json --list
> 
> # Call an endpoint
> mcp2cli --spec ./openapi.json --base-url https://api.example.com list-pets --status available
> 
> # With auth
> mcp2cli --spec ./spec.json --auth-header "Authorization:Bearer tok_..." create-item --name "Test"
> 
> # POST with JSON body from stdin
> echo '{"name": "Fido", "tag": "dog"}' | mcp2cli --spec ./spec.json create-pet --stdin
> 
> # Local YAML spec
> mcp2cli --spec ./api.yaml --base-url http://localhost:8000 --list
> ```
> 
> ### Output control
> 
> ```bash
> # Pretty-print JSON (also auto-enabled for TTY)
> mcp2cli --spec ./spec.json --pretty list-pets
> 
> # Raw response body (no JSON parsing)
> mcp2cli --spec ./spec.json --raw get-data
> 
> # Pipe-friend

## 延伸閱讀

相關概念：[[API 設計]] · [[微服務]] · [[CLI/TUI]]

相關專案：[[openapi-cli--openapi-cli|openapi-cli/openapi-cli]] · [[postman--postman-cli|postman/postman-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/knowsuchagency/mcp2cli) · [官方網站](https://pypi.org/project/mcp2cli/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "knowsuchagency--mcp2cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "knowsuchagency--mcp2cli"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
