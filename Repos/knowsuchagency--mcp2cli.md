---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 503
stars_per_day: 503
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
  - "讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**503** stars · **503** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓任何 MCP 伺服器或 OpenAPI 規格即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (503 stars/day)
> **適合** 需要快速測試和整合 API 的開發者和工程師。
> **一句話重點** mcp2cli 讓開發者能夠在運行時快速與 API 互動，顯著提高開發效率。

> [!abstract] 核心創新
> mcp2cli 允許開發者在運行時將任何 MCP 伺服器或 OpenAPI 規格轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 透過將 MCP 伺服器或 OpenAPI 規格轉換為命令行介面，使得開發者能夠在運行時直接與 API 互動。使用者只需透過簡單的 CLI 指令，如 `mcp2cli --mcp https://mcp.example.com/sse`，即可連接到指定的 MCP 伺服器並執行查詢。此專案使用 Python 開發，並支援 OAuth 認證，能自動處理令牌的獲取與刷新，提升使用便利性。與其他工具相比，mcp2cli 的獨特之處在於其即時轉換能力，無需預先生成代碼，並且能夠節省大量的 token 使用。實際使用中，mcp2cli 能夠有效處理大量的 API 請求，並在一小時內自動緩存規格和工具列表。這個專案目前處於 beta 階段，適合中小型團隊使用，尤其是需要快速集成 API 的開發者。建議在需要快速測試 API 或進行原型開發時使用，但在大型生產環境中可能需要更多的穩定性測試。

**技術棧**：`Python 3.9`

## 重點功能

- 即時 CLI 生成 — 透過 MCP 伺服器或 OpenAPI 規格生成 CLI 指令，無需代碼生成。
- OAuth 認證支持 — 自動處理令牌的獲取、緩存和刷新，簡化認證流程。
- 多種傳輸模式 — 支持 HTTP/SSE 和 stdio 模式，靈活應對不同需求。
- 輸出控制 — 提供多種輸出格式選擇，包括漂亮的 JSON 和壓縮格式。
- 緩存機制 — 自動緩存 API 規格和工具列表，提升性能。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 連接到 MCP 伺服器
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
> 專案的作者具備深厚的開發背景，專注於提高 API 互動的效率。隨著 API 數量的增加，開發者對於即時 CLI 工具的需求也隨之上升，特別是在快速迭代的開發環境中。這個工具的推出正好滿足了這一需求，並且其簡單的使用方式使得它在開發者中迅速流行。

## 適合誰使用

**目標受眾**：需要快速測試和整合 API 的開發者和工程師。

> [!example] 使用場景
> - 後端工程師用它來快速測試 MCP 伺服器的 API，因為可以即時執行查詢而無需編寫代碼。
> - DevOps 工程師用它來自動化 API 測試流程，因為它支持 OAuth 認證並能自動處理令牌。
> - 產品經理用它來檢查 API 文檔的正確性，因為可以直接從 OpenAPI 規格生成 CLI 指令，快速驗證功能。

## 架構分析

該專案採用 CLI 工具架構，核心資料流為：用戶輸入 → 解析 MCP 伺服器或 OpenAPI 規格 → 輸出 CLI 指令。關鍵技術決策包括使用 Python 進行快速開發，並支持多種認證方式。目錄結構中，主要檔案包括 `mcp2cli.py` 和 `cli.py`。

## 優缺點分析

> [!success] 優點
> - 即時生成 CLI，無需預先編寫代碼。
> - 自動處理 OAuth 認證，提升安全性。
> - 支持多種輸出格式，靈活應用。

> [!danger] 缺點
> - 在高流量情況下性能可能下降。
> - 對於大型 API 可能需要更多的配置。
> - 需要穩定的網路連接以進行 API 請求。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要有效的 MCP 伺服器或 OpenAPI 規格
> - 在高流量情況下可能需要調整緩存策略

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
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

相關概念：[[API 設計]] · [[CLI/TUI]] · [[效能優化]]

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
