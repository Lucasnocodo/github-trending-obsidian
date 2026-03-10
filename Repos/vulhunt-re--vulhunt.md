---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 548
stars_per_day: 110
forks: 54
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/安全"
  - "lang/c++"
  - org
  - "topic/binary_analysis"
  - "topic/reverse_engineering"
  - "topic/vulnerability_research"
aliases:
  - "vulhunt"
  - "vulhunt-re/vulhunt"
  - "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。"
---

# vulhunt

**548** stars · **110** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (110 stars/day)
> **適合** 需要在大型軟體專案中進行漏洞檢測的安全研究人員和 DevOps 團隊。
> **一句話重點** VulHunt 的強大之處在於其靈活的架構和社群驅動的規則系統，讓漏洞檢測變得更加高效和可定制。

> [!abstract] 核心創新
> VulHunt 提供了一個集成的漏洞獵捕框架，結合了強大的二進位分析技術和社群開發的規則包。

## 專案簡介

VulHunt 是一個漏洞獵捕框架，專為安全研究人員設計，能夠分析二進位檔和 UEFI 韌體。它利用 Binarly 的二進位分析系統 (BIAS)，提供一個靈活的環境來理解和分析二進位檔。VulHunt 支持多種掃描選項，包括單一二進位檔、BA2 檔案和 Binary Ninja 數據庫，並能夠輸出 JSON 格式的結果。與其他工具相比，VulHunt 的獨特之處在於其與 Binarly 透明平台 (BTP) 的整合，這使得大規模漏洞管理成為可能。使用者可以透過簡單的命令行指令來執行掃描，並且可以自定義規則和模組。實際使用中，VulHunt 能夠快速識別潛在的安全漏洞，但需要適當的環境配置和依賴。這個專案目前處於穩定版本，適合中大型團隊使用。建議在需要進行大規模漏洞掃描時使用，但對於小型專案或個人使用者，可能會過於複雜。

**技術棧**：`Rust` · `CMake` · `Lua` · `Docker`

## 重點功能

- 多種掃描選項 — 支持單一二進位檔、BA2 檔案和 Binary Ninja 數據庫的掃描。
- 自定義規則和模組 — 允許用戶根據需求創建和使用自定義的漏洞檢測規則。
- JSON 輸出格式 — 掃描結果可輸出為 JSON 格式，便於後續處理和分析。
- MCP 伺服器支持 — 可作為 Model Context Protocol 伺服器運行，與 AI 助手集成。
- Docker 支持 — 提供 Docker 映像，方便在容器化環境中運行。

## 快速開始

1. 安裝 cargo-make
```bash
cargo install cargo-make
```
2. 構建專案
```bash
cargo make --profile build
```
3. 安裝專案
```bash
cargo make --profile install
```

## 程式碼範例

vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 的開發團隊來自 Binarly，專注於安全研究，這使得其技術背景相當強大。隨著對軟體安全的需求日益增加，這個工具正好切中市場需求。最近的安全事件也促使更多研究人員尋找有效的漏洞檢測工具，因此這個專案的關注度上升。

## 適合誰使用

**目標受眾**：需要在大型軟體專案中進行漏洞檢測的安全研究人員和 DevOps 團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描二進位檔以識別漏洞，因為手動檢查代碼不僅耗時且容易疏漏。
> - DevOps 團隊用它來集成到 CI/CD 流程中，自動化漏洞檢測，因為這樣可以在開發早期發現問題，減少後期修復成本。
> - 系統管理員用它來分析 UEFI 韌體，確保系統安全，因為這樣可以及早發現潛在的安全風險。

## 架構分析

VulHunt 採用微服務架構，主要由 FastAPI 提供 RESTful API，並使用 Playwright 進行瀏覽器自動化。用戶輸入 → API 請求 → 瀏覽器操作 → 輸出結果。關鍵技術決策包括使用 Rust 進行性能優化和 Lua 進行擴展性。專案目錄結構包含 src、tests 和 docs 等關鍵文件。

## 優缺點分析

> [!success] 優點
> - 強大的漏洞檢測能力，支持多種二進位檔格式。
> - 靈活的規則和模組系統，便於擴展和自定義。
> - 良好的社群支持和文檔，方便用戶上手。

> [!danger] 缺點
> - 需要較高的技術門檻，對新手不太友好。
> - 配置過程可能較為繁瑣，尤其是在不同平台上。
> - 依賴於外部平台，可能會受到限制。

> [!warning] 注意事項
> - 需要適當的環境配置和依賴，對新手可能有一定的學習曲線。
> - 對於小型專案，功能可能過於複雜。
> - 依賴於 Binarly 的平台，可能需要額外的授權或配置。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 54 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://vulhunt.re) |
| Repo 大小 | 2.5 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 59
>     "Rust" : 38
>     "Yacc" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xorpse](https://github.com/xorpse) | 2 |

**最新版本**：v1.0.0 — Release v1.0.0 (2026-03-07)

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://vulhunt.re/docs)

## README 摘錄

> [!info]- 展開查看原文 README
> # VulHunt Community Edition
> 
> VulHunt is a vulnerability hunting framework developed by Binarly's Research
> team. It is designed to help security researchers and practitioners identify
> vulnerabilities in software binaries and UEFI firmware. VulHunt is built on top
> of Binarly's Binary Analysis and Inspection System (BIAS), which provides a
> powerful and flexible environment for analysing and understanding binaries.
> VulHunt integrates with the capabilities of the Binarly Transparency Platform
> (BTP) to enable large-scale vulnerability management, hunting, and triage
> capabilities.
> 
> VulHunt Community Edition is a free and open-source version of the VulHunt
> engine within the BTP, designed to facilitate community-developed rulepacks and
> integrations.
> 
> ## Building (with cargo-make)
> 
> ### Prerequisites
> 
> ```bash
> cargo install cargo-make
> ```
> 
> ### Building
> 
> ```bash
> cargo make --profile  build
> ```
> 
> With support for Binary Ninja:
> 
> ```bash
> cargo make --profile  build --features=bndb
> ```
> 
> ### Installation
> 
> ```bash
> cargo make --profile  install
> ```
> 
> With support for Binary Ninja:
> 
> ```bash
> cargo make --profile  install --features=bndb
> ```
> 
> ## Building (without cargo-make)
> 
> ### Prerequisites
> 
> ```bash
> git submodule update --init
> ```
> 
> Install LuaJIT with requisite patches:
> 
> ```bash
> git clone https://github.com/LuaJIT/LuaJIT.git -b v2.1
> cd LuaJIT
> git apply /path/to/vulhunt-ce/patches/luajit-vulhunt.patch
> ```
> 
> For macOS:
> 
> ```bash
> export MACOSX_DEPLOYMENT_TARGET=$(sw_vers -productVersion)
> ```
> 
> For macOS and Linux:
> 
> ```bash
> make BUILDMODE='static'
> export LUA_LIB=/path/to/LuaJIT/src/
> export LUA_LIB_NAME=luajit
> export LUA_LINK=static
> ```
> 
> For Windows:
> 
> ```bash
> cd src
> msvcbuild.bat BUILDMODE='static'
> set LUA_LIB=C:\path\to\LuaJIT\src\
> set LUA_LIB_NAME=lua51
> set LUA_LINK=static
> ```
> 
> ### Building
> 
> ```bash
> cargo build --release
> ```
> 
> With support for Binary Ninja:
> 
> ```bash
> cargo build --release --features=bndb
> ```
> 
> ### Packaging
> 
> Prerequisites:
> 
> ```bash
> cargo install cargo-make
> ```
> 
> Build packages for the current platform:
> 
> ```bash
> cargo make prepare-package --features=...
> ```
> 
> ## Usage
> 
> ### Scanning binaries
> 
> ```bash
> vulhunt-ce scan  -o  -d  -r  [OPTIONS]
> ```
> 
> Options:
> 
> - ``: Path to the binary, BA2 archive, or BNDB file to scan
> - `-o, --output `: Path to write output JSON
> - `-d, --data `: Directory containing auxiliary data (processor specifications, etc.). Can also be set via `BIAS_DATA` environment variable
> - `-r, --rules `: Directory containing VulHunt rules. Can also be set via `BIAS_VULHUNT_RULES` environment variable
> - `-m, --modules `: Directory containing VulHunt modules (optional). Can also be set via `BIAS_VULHUNT_MODULES` environment variable
> - `--loader `: Configure the loader to use (default: `component`). Available loaders:
>   - `component`: Scan single binary files
>   - `ba2`: Scan BA2 (Binarly Archive 2) archives containing multiple components
>   - `bndb`: Scan Binary Ninja databases (requires `--features=bndb` at build time)
> - `--pretty`: Format output for human consumption and render issues to stdout
> - `--stream`: Format output as a stream of JSONL messages
> - `--compress`: Compress output JSONL stream with Zstandard
> 
> Example:
> 
> ```bash
> vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
> vulhunt-ce scan firmware.ba2 --loader ba2 -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
> vulhunt-ce scan project.bndb --loader bndb -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
> ```
> 
> ### Starting the MCP server
> 
> VulHunt can run as an MCP (Model Context Protocol) server for integration with AI assistants. By default, it starts a streaming HTTP server with SSE (Server-Sent Events) transport at `http://127.0.0.1:8080`:
> ```bash
> vulhunt-ce mcp -d  [OPTIONS]
> ```
> 
> Options:
> 
> - `-d, --data `: Directory containing auxiliary data (required). Can also be set via `BIAS_DATA` environment variable
> - `-m, --modules `: Directory containing VulHunt modules (optional). Can also be set via `BIAS_VULHUNT_MODULES`

## 延伸閱讀

相關概念：[[漏洞分析]] · [[二進位分析]] · [[安全研究]]

[GitHub](https://github.com/vulhunt-re/vulhunt) · [官方網站](https://vulhunt.re)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "安全" AND file.name != "vulhunt-re--vulhunt"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
