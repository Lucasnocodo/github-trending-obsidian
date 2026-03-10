---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 510
stars_per_day: 510
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

**510** stars · **510** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 將任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (510 stars/day)
> **適合** 需要快速與 MCP 伺服器或 OpenAPI 規範互動的開發者。
> **一句話重點** mcp2cli 的最大優勢在於其即時性和無需代碼生成的特性，讓開發者能快速與 API 互動。

> [!abstract] 核心創新
> mcp2cli 允許用戶在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 讓使用者能夠在不需要任何代碼生成的情況下，將 MCP 伺服器或 OpenAPI 規範即時轉換為命令列介面。使用者可以透過簡單的 CLI 指令，如 `mcp2cli --mcp https://mcp.example.com/sse --list`，輕鬆與 MCP 伺服器互動，並執行各種操作。該工具支援 OAuth 認證，並自動處理令牌的獲取與刷新，讓用戶能夠無縫連接需要身份驗證的 API。與其他 CLI 工具相比，mcp2cli 的獨特之處在於它的即時性和無需代碼生成的特性，這使得開發者能夠快速迭代和測試 API。實際使用中，該工具能夠節省 96-99% 的令牌，顯著提高效率。對於需要頻繁調用 API 的開發者來說，這是一個非常實用的工具。該專案目前處於穩定階段，適合中小型團隊使用。建議在需要快速測試 API 或與 MCP 伺服器互動的情況下使用，但如果需要更複雜的功能或大規模的自動化，可能需要考慮其他方案。

**技術棧**：`Python 3.7+` · `OpenAPI` · `OAuth`

## 重點功能

- 即時 CLI 生成 — 透過 `mcp2cli --mcp <URL>` 指令即時與 MCP 伺服器互動。
- OAuth 認證支援 — 自動處理令牌獲取與刷新，使用 `--oauth` 參數輕鬆連接需要身份驗證的 API。
- 多種輸出格式 — 支援 JSON、原始響應和 TOON 格式，使用 `--pretty` 或 `--raw` 參數控制輸出。
- 環境變數與文件支援 — 使用 `env:` 和 `file:` 前綴安全地管理敏感資訊。
- 快取機制 — 自動快取 API 規範，並可自定義 TTL，使用 `--cache-ttl` 參數設置。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 使用 mcp2cli 連接到 MCP 伺服器
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```
3. 生成技能從 OpenAPI 規範
```bash
mcp2cli create a skill for https://api.example.com/openapi.json
```

## 程式碼範例

```bash
mcp2cli --mcp https://mcp.example.com/sse search --query "test"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案的作者在開源社群中有一定的影響力，並且針對開發者在使用 API 時的痛點提供了直接的解決方案。隨著 API 數量的增加，開發者對於快速測試和集成的需求也隨之上升，這使得 mcp2cli 的實用性更加凸顯。最近的開發活動也顯示出該專案的活躍度，吸引了更多的使用者關注。

## 適合誰使用

**目標受眾**：需要快速與 MCP 伺服器或 OpenAPI 規範互動的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速測試 API，因為可以即時生成 CLI 指令，節省手動編寫測試代碼的時間。
> - DevOps 工程師用它來與 MCP 伺服器互動，因為它支援 OAuth 認證，簡化了安全性管理。
> - AI 開發者用它來為 AI agent 生成技能，因為可以直接從 OpenAPI 規範生成 CLI，無需額外的代碼生成步驟。

## 架構分析

mcp2cli 採用單體架構，主要功能集中在一個 CLI 工具中。用戶輸入透過命令行參數進行，然後經由內部邏輯處理並與 MCP 伺服器或 OpenAPI 規範進行交互。關鍵技術決策包括支援 OAuth 認證和快取機制，以提高性能和安全性。專案目錄結構中，主要的執行檔和配置都集中在 `mcp2cli` 目錄下。

## 優缺點分析

> [!success] 優點
> - 即時生成 CLI，無需代碼生成，提升開發效率。
> - 支援 OAuth 認證，簡化 API 認證過程。
> - 多種輸出格式選擇，滿足不同需求。
> - 快取機制有效減少重複請求，提高性能。

> [!danger] 缺點
> - 僅支援 Python 3.7+，對於老舊環境不友好。
> - 需要有效的 API 規範，無法獨立運作。
> - 對於大型 API 的性能可能會受到快取 TTL 的影響。
> - 不支援非標準的認證方式，限制使用場景。

> [!warning] 注意事項
> - 僅支援 Python 3.7+。
> - 需要有效的 MCP 伺服器或 OpenAPI 規範才能運作。
> - 對於大型 API 的性能可能會受到快取 TTL 的影響。
> - 不支援非標準的認證方式，僅限於 OAuth 和基本認證。

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新與維護。
**連結**：[文件](https://pypi.org/project/mcp2cli/)

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

相關概念：[[API 設計]] · [[CLI/TUI]] · [[OAuth]]

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
