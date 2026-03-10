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
  - "讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**497** stars · **497** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (497 stars/day)
> **適合** 需要快速測試和互動 API 的後端開發者或 DevOps 工程師。
> **一句話重點** mcp2cli 讓開發者能夠以最小的努力，快速與各種 API 互動，顯著提高開發效率。

> [!abstract] 核心創新
> mcp2cli 允許開發者在運行時將任何 MCP 伺服器或 OpenAPI 規格轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 透過 CLI 工具，讓開發者能夠即時與 MCP 伺服器或 OpenAPI 規格互動，無需編寫任何代碼。使用者只需透過簡單的命令，例如 `mcp2cli --mcp https://mcp.example.com/sse --list`，即可列出可用工具或執行查詢。技術上，它使用 Python 實現，並支援 OAuth 認證及多種傳輸模式（如 HTTP/SSE），自動處理令牌的獲取和刷新。與其他 CLI 工具相比，mcp2cli 的獨特之處在於其即時生成 CLI 的能力，無需預先生成代碼，並且能夠節省 96-99% 的代碼令牌。實際使用中，mcp2cli 表現穩定，支援多種認證方式，適合需要快速與 API 互動的開發者。這個專案目前處於 beta 階段，對於小型團隊或個人開發者來說，值得一試。建議在需要快速測試 API 或與現有服務互動時使用，但對於大型專案或需要複雜邏輯的情境，可能需要更多的自定義解決方案。

**技術棧**：`Python 3.10`

## 重點功能

- 即時 CLI 生成 — 使用 `mcp2cli --mcp <URL>` 命令即時與 MCP 伺服器互動。
- 支援 OAuth 認證 — 自動處理令牌獲取和刷新，簡化認證流程。
- 多種傳輸模式 — 支援 HTTP 和 SSE，使用 `--transport` 參數選擇。
- 環境變數支持 — 使用 `env:` 和 `file:` 前綴安全地管理敏感資訊。
- 自動快取 — 規格和工具列表快取，預設 TTL 為 1 小時，使用 `--refresh` 可強制刷新。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 與 MCP 伺服器互動
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```
3. 使用 OAuth 認證
```bash
mcp2cli --mcp https://mcp.example.com/sse --oauth --list
```

## 程式碼範例

```bash
mcp2cli --mcp https://mcp.example.com/sse search --query "test"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 knowsuchagency 具備豐富的開源經驗，專案切中開發者在使用 API 時的即時需求。隨著 API 數量的增加，開發者對於快速測試和互動的需求也隨之上升，這使得 mcp2cli 的推出時機恰到好處。

## 適合誰使用

**目標受眾**：需要快速測試和互動 API 的後端開發者或 DevOps 工程師。

> [!example] 使用場景
> - 後端工程師用它來快速測試 MCP 伺服器的 API，因為能即時列出可用工具，節省了手動查找的時間。
> - AI 開發者用它來生成針對 OpenAPI 規格的 CLI，因為無需代碼生成，能快速開始實驗。
> - DevOps 工程師用它來自動化與 API 的互動，因為支援 OAuth 認證，能安全地管理憑證。

## 架構分析

這是一個 CLI 工具，採用單體架構。用戶輸入 → mcp2cli 處理 → 輸出結果。核心技術決策是使用 Python 實現並支援多種傳輸模式。專案目錄結構包含主要的 CLI 實現和相關的配置檔案。

## 優缺點分析

> [!success] 優點
> - 即時生成 CLI，無需代碼生成，快速上手。
> - 支援多種認證方式，方便開發者使用。
> - 快取機制減少 API 請求次數，提高效率。

> [!danger] 缺點
> - 對於複雜的 API 可能無法完全支援。
> - 目前功能相對簡單，未來擴展性有待觀察。
> - 對於新手使用者可能需要一些學習曲線。

> [!warning] 注意事項
> - 目前僅支援 Python 3.7+。
> - 對於大型 API 規格的處理可能會有性能瓶頸。
> - 不支援 Windows 環境。
> - 在某些情況下，OAuth 認證流程可能需要手動介入。

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
