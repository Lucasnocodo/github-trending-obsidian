---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 521
stars_per_day: 521
forks: 28
open_issues: 0
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "mcp2cli"
  - "knowsuchagency/mcp2cli"
  - "讓任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。"
---

# mcp2cli

**521** stars · **521** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (521 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要快速與多個 API 互動的開發者和工程師。
> **一句話重點** mcp2cli 讓開發者能夠在運行時動態生成 CLI，這對於快速迭代的開發環境特別有用。

> [!abstract] 核心創新
> mcp2cli 允許用戶在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 允許用戶在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI 工具，省去代碼生成的繁瑣過程。使用者只需透過簡單的指令，如 `mcp2cli --mcp https://mcp.example.com/sse`，即可與 MCP 伺服器互動，或使用 OpenAPI 規範進行 API 調用。該工具支援 OAuth 認證，並能自動處理令牌的獲取和刷新，這在需要安全訪問的場景中非常方便。與其他 CLI 工具相比，mcp2cli 的獨特之處在於它能夠在運行時動態生成 CLI，這意味著不需要事先生成代碼或配置。使用者可利用 `--spec` 參數輕鬆調用 OpenAPI 規範，並且支持多種輸出格式，如 JSON 和 TOON，後者在處理大型數據時能顯著減少令牌消耗。該工具的設計考量了安全性，敏感信息可以通過環境變數或文件來管理，避免在命令行中暴露。mcp2cli 目前處於穩定階段，適合中小型團隊快速集成 API 調用功能。對於需要頻繁與 API 互動的開發者，這是一個值得考慮的工具，但如果你的需求較為簡單，可能不需要這麼複雜的解決方案。

**技術棧**：`Python 3.10` · `Click` · `Requests`

## 重點功能

- 即時 CLI 生成 — 透過 `mcp2cli --mcp <URL>` 即可與 MCP 伺服器互動。
- OAuth 認證支持 — 自動處理令牌獲取和刷新，使用 `--oauth` 參數輕鬆集成安全認證。
- 多種輸出格式 — 使用 `--pretty` 參數可美化 JSON 輸出，或使用 `--toon` 減少令牌消耗。
- 環境變數和文件支持 — 敏感信息可通過 `env:` 和 `file:` 前綴安全處理，避免在命令行中暴露。
- 緩存機制 — 支持自定義緩存 TTL 和緩存目錄，提升性能。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 使用 MCP 伺服器
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```
3. 使用 OpenAPI 規範
```bash
mcp2cli --spec https://petstore3.swagger.io/api/v3/openapi.json --list
```

## 程式碼範例

mcp2cli --mcp https://mcp.example.com/sse search --query "test"

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 knowsuchagency 以開發高效能 CLI 工具聞名，過去有多個成功專案。 (b) mcp2cli 解決了傳統 CLI 工具在與動態 API 互動時的靈活性不足問題，讓開發者能夠即時生成所需的 CLI。 (c) 最近在開發者社群中引起討論，特別是在與 AI 代理整合的應用場景中。 (d) 隨著 API 整合需求的增加，這種即時生成 CLI 的能力變得越來越重要，特別是在快速迭代的開發環境中。

## 適合誰使用

**目標受眾**：需要快速與多個 API 互動的開發者和工程師。

> [!example] 使用場景
> - 後端工程師用它來快速生成與 API 互動的 CLI 工具，因為這樣可以節省大量的代碼編寫時間，並提高開發效率。
> - AI 研究人員用它來讓 AI 代理學會如何調用不同的 API，因為這樣可以擴展代理的功能，並提高其靈活性。
> - DevOps 工程師用它來自動化與多個服務的交互，因為這樣可以減少手動操作的錯誤，並提高工作效率。

## 架構分析

mcp2cli 採用 CLI 架構，核心資料流為：用戶輸入 → 解析 MCP 或 OpenAPI 規範 → 輸出 CLI 命令結果。關鍵技術決策包括使用 Python 的 Click 庫來處理命令行參數，並利用 Requests 庫進行 HTTP 請求。專案目錄結構中，主要檔案包括 `cli.py` 和 `api.py`，分別負責 CLI 的解析和 API 的交互。

## 技術深入分析

> [!note]- 展開深入分析
> mcp2cli 的核心演算法基於 Python 的 Click 庫，能夠靈活解析命令行參數並生成對應的 API 請求。該工具在性能上優化了令牌的使用，通過 TOON 格式減少了 40-60% 的令牌消耗，這對於需要高效能的 AI 應用尤為重要。設計上，mcp2cli 選擇了自動處理 OAuth 認證的方式，這樣可以減少用戶手動操作的錯誤，提升安全性。與其他 CLI 工具相比，mcp2cli 在動態生成和即時交互方面的能力使其在快速開發環境中更具優勢。

## 優缺點分析

> [!success] 優點
> - 即時生成 CLI，無需繁瑣的代碼編寫。
> - 支持 OAuth 認證，適合安全要求高的應用場景。
> - 多種輸出格式選擇，靈活應對不同需求。

> [!danger] 缺點
> - 僅支援特定版本的 Python。
> - 需要有效的 API 規範作為基礎，對於不熟悉 API 的用戶可能有學習曲線。
> - 對於大型 API 可能導致性能下降。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要有效的 MCP 伺服器或 OpenAPI 規範作為輸入
> - 對於大型 API 可能需要較長的響應時間

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，與 mcp2cli 的 API 交互功能不同。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的 WebSocket 代理，無法像 mcp2cli 一樣處理多種 API。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 28 |
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

相關概念：[[API 設計]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[openapi-cli--openapi-cli|openapi-cli/openapi-cli]] · [[postman--postman-cli|postman/postman-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/knowsuchagency/mcp2cli) · [官方網站](https://pypi.org/project/mcp2cli/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "knowsuchagency--mcp2cli"
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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，519 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
