---
repo: knowsuchagency/mcp2cli
url: https://github.com/knowsuchagency/mcp2cli
owner: knowsuchagency
owner_type: User
language: Python
license: MIT
description: "Turn any MCP server or OpenAPI spec into a CLI — at runtime, with zero codegen"
homepage: "https://pypi.org/project/mcp2cli/"
stars: 530
stars_per_day: 530
forks: 28
open_issues: 0
created: 2026-03-09
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
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

**530** stars · **530** stars/天 · 建立 1 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓任何 MCP 伺服器或 OpenAPI 規範即時轉換為 CLI，無需代碼生成。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (530 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要快速與多個 API 互動的開發者，尤其是後端工程師和資料科學家。
> **一句話重點** mcp2cli 讓開發者能夠快速與 API 互動，無需繁瑣的配置過程，顯著提升工作效率。

> [!abstract] 核心創新
> mcp2cli 允許用戶在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為 CLI，無需代碼生成。

## 專案簡介

mcp2cli 讓使用者能夠在運行時將任何 MCP 伺服器或 OpenAPI 規範轉換為命令行介面。使用者只需提供 MCP 伺服器的 URL 或 OpenAPI 規範的路徑，然後可以透過命令行直接與 API 互動，無需任何代碼生成。這個工具支援 OAuth 認證，能自動處理 token 的獲取和刷新，並且可以從環境變數或檔案中讀取敏感資訊，增強安全性。mcp2cli 的一大特色是能夠節省 96-99% 的 token 使用，這在大型專案中能顯著降低成本。與其他 CLI 工具相比，mcp2cli 直接與 API 互動，避免了傳統工具的繁瑣配置過程，並且支援多種傳輸協議，包括 HTTP 和 SSE。它的緩存機制也能有效提升性能，預設緩存時間為 1 小時。對於需要頻繁調用 API 的開發者來說，這個工具非常適合，尤其是在需要快速迭代和測試的情境下。這個專案目前仍在活躍開發中，值得關注，但對於小型專案或不需要複雜 API 交互的使用者來說，可能顯得過於複雜。建議在需要與多個 API 進行交互的情況下使用 mcp2cli，而對於簡單的 API 調用，可能其他工具會更直接。

**技術棧**：`Python 3.10` · `Click` · `Requests`

## 重點功能

- 即時 CLI 生成 — 透過 MCP 伺服器或 OpenAPI 規範生成命令行介面，無需代碼生成。
- OAuth 認證支援 — 自動處理 token 獲取和刷新，簡化安全認證流程。
- 敏感資訊管理 — 支援從環境變數或檔案讀取敏感資訊，增強安全性。
- 多種傳輸協議 — 支援 HTTP 和 SSE 兩種傳輸方式，靈活應對不同需求。
- 緩存機制 — 預設緩存 1 小時，提升 API 調用效率，減少重複請求。

## 快速開始

1. 安裝 mcp2cli
```bash
pip install mcp2cli
```
2. 直接運行 mcp2cli
```bash
uvx mcp2cli --help
```
3. 連接到 MCP 伺服器
```bash
mcp2cli --mcp https://mcp.example.com/sse --list
```
3. 使用 OpenAPI 規範
```bash
mcp2cli --spec https://petstore3.swagger.io/api/v3/openapi.json --list
```

## 程式碼範例

mcp2cli --mcp https://mcp.example.com/sse search --query "test"  # 預期輸出：搜索結果的 JSON 數據

## 為什麼值得關注

> [!tip] 爆紅原因
> knowsuchagency 是一個專注於開發高效工具的團隊，過去有多個成功的開源專案。mcp2cli 解決了開發者在使用 API 時的繁瑣配置問題，提供了一個即時的 CLI 解決方案。最近的推文和社群討論也讓這個工具獲得了一定的關注。隨著 API 數量的增加，開發者對於簡化 API 互動的需求也越來越高，使得這個工具的時機恰到好處。

## 適合誰使用

**目標受眾**：需要快速與多個 API 互動的開發者，尤其是後端工程師和資料科學家。

> [!example] 使用場景
> - 後端工程師用它來快速調用多個 API，因為可以即時生成 CLI，省去繁瑣的代碼編寫過程。
> - 資料科學家用它來測試不同的 API 端點，因為它支援 OAuth 認證，能夠安全地管理 API 金鑰。
> - DevOps 工程師用它來自動化 API 測試流程，因為它的緩存機制能提高測試效率，減少重複請求的成本。

## 架構分析

mcp2cli 採用 CLI 工具架構，使用者輸入命令 → 工具解析命令並與 API 互動 → 輸出結果至命令行。核心技術決策包括支援多種傳輸協議和 OAuth 認證。專案目錄結構包含主要的 Python 檔案和 README 文件，提供使用說明和範例。

## 技術深入分析

mcp2cli 的核心技術機制在於其能夠即時將 API 轉換為 CLI，使用者只需提供 API 的 URL 或規範檔案。它支援 OAuth 認證，能自動處理 token 的獲取和刷新，這對於需要安全性高的應用場景非常重要。效能方面，mcp2cli 能夠有效處理多個 API 請求，並且透過緩存機制減少重複請求的成本。選擇 Python 作為開發語言使得這個工具易於擴展和維護，但也限制了其在其他語言環境中的使用。設計上，mcp2cli 可能在處理大量請求時出現性能瓶頸，特別是在沒有適當的緩存策略時。安全性方面，雖然支援 OAuth，但仍需注意 token 的管理和存儲。整體而言，這個專案在 API 互動的便利性上有顯著優勢，但在擴展性和安全性上仍需持續改進。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個使用範例，安裝過程順暢。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 即時生成 CLI，無需代碼編寫，提升開發效率。
> - 支援 OAuth 認證，簡化安全管理。
> - 靈活的傳輸協議選擇，適應不同的 API 需求。
> - 緩存機制提升性能，減少重複請求。

> [!danger] 缺點
> - 對於小型專案可能顯得過於複雜。
> - 需要有效的 MCP 伺服器或 OpenAPI 規範才能運作。
> - 目前仍在活躍開發中，API 可能會變動。
> - 僅支援 Python 3.7+，對於其他語言的支援有限。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要有效的 MCP 伺服器或 OpenAPI 規範
> - 對於小型專案可能顯得過於複雜
> - 目前仍在活躍開發中，API 可能會變動

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於資料同步，而 mcp2cli 專注於 API 互動，適用場景不同。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 提供更廣泛的 CLI 工具生成，而 mcp2cli 專注於特定的 API 互動。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，提供不同的功能集。 | 當需要進行資料同步而非 API 互動時選擇。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 工具生成，功能更全面。 | 當需要一個通用的 CLI 生成工具時選擇。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新和討論。
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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[OAuth]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[openapi-cli--openapi-cli|openapi-cli/openapi-cli]] · [[postman--postman-cli|postman/postman-cli]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-11|2026-03-11]] — 再次上榜，522 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，460 stars
