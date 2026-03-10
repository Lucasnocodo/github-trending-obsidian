---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 550
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
  - "提供一個框架來幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。"
---

# vulhunt

**550** stars · **110** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 提供一個框架來幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (110 stars/day)
> **適合** 需要在大型軟體專案中進行漏洞識別的安全研究團隊。
> **一句話重點** VulHunt 的強大之處在於其靈活的漏洞識別能力，尤其是在二進位檔和韌體的分析上。

> [!abstract] 核心創新
> VulHunt 提供了一個集成的漏洞獵捕框架，專為二進位檔和 UEFI 韌體的安全分析而設計。

## 專案簡介

VulHunt 是一個專為安全研究人員設計的漏洞獵捕框架，能夠分析軟體二進位檔和 UEFI 韌體。它基於 Binarly 的二進位分析和檢查系統 (BIAS)，提供靈活的環境來理解和分析二進位檔。使用者可以透過命令 `vulhunt-ce scan` 來掃描二進位檔，並指定輸出格式、數據目錄和漏洞規則。與其他工具相比，VulHunt 特別強調與 Binarly 透明平台 (BTP) 的整合，支持大規模漏洞管理。這使得它在處理複雜的二進位檔時，能夠提供更高效的漏洞識別和管理能力。使用者需要安裝 LuaJIT 並進行一些配置，這對於新手來說可能有一定的學習曲線。VulHunt 的穩定性尚在 alpha 階段，適合有一定技術基礎的安全團隊使用。對於需要快速識別漏洞的專案，VulHunt 是一個不錯的選擇，但對於小型團隊或初學者，可能需要考慮其他更簡單的工具。

**技術棧**：`C++` · `Rust` · `Lua` · `Docker`

## 重點功能

- 漏洞掃描 — 使用 `vulhunt-ce scan` 指令掃描二進位檔，支持多種輸出格式和選項。
- BA2 檔案支持 — 可以掃描 BA2 檔案，使用 `--loader ba2` 來處理多個組件。
- 與 BTP 整合 — 支持與 Binarly 透明平台的互動，通過 `vulhunt-ce btp push-rules` 指令推送規則。
- MCP 伺服器 — 透過 `vulhunt-ce mcp` 指令啟動 Model Context Protocol 伺服器，支持 AI 助手的整合。
- 模組化架構 — 支持自定義模組和規則，方便用戶擴展功能。

## 快速開始

1. 安裝 cargo-make
```bash
cargo install cargo-make
```
2. 構建 VulHunt
```bash
cargo make --profile build
```
3. 掃描二進位檔
```bash
vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
```

## 程式碼範例

```bash
vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
```

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 由 Binarly 的研究團隊開發，專注於漏洞識別的需求，尤其是在當前軟體安全日益受到重視的背景下。隨著開源社群對於漏洞管理的需求增加，這個專案的推出正好切中痛點，並且提供了社群開發的可能性，吸引了不少關注。

## 適合誰使用

**目標受眾**：需要在大型軟體專案中進行漏洞識別的安全研究團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描固件檔案以識別潛在漏洞，因為它能夠整合多種分析工具並提供詳細的 JSON 輸出。
> - DevOps 工程師用它來自動化二進位檔的漏洞檢測流程，因為它支持與 CI/CD 流程的整合，提升了開發效率。
> - 系統管理員用它來分析和管理 UEFI 韌體的安全性，因為其強大的規則引擎能夠快速識別已知的安全漏洞。

## 架構分析

VulHunt 採用單體架構，核心功能集中於一個框架內。用戶輸入二進位檔 → 框架進行分析 → 輸出結果為 JSON 格式。關鍵技術決策包括使用 Rust 和 C++ 進行性能優化，並整合 LuaJIT 進行擴展。專案目錄結構中，`src` 目錄包含主要的程式碼和模組，`rules` 目錄包含用戶自定義的漏洞規則。

## 優缺點分析

> [!success] 優點
> - 支持多種二進位檔格式的掃描，靈活性高。
> - 與 BTP 的整合使得漏洞管理更為高效。
> - 社群開發的規則包擴展了功能，適應性強。

> [!danger] 缺點
> - 安裝和配置過程複雜，對新手不友好。
> - 目前穩定性尚待提升，可能會遇到問題。
> - 缺乏對 Windows 環境的全面支持。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，可能存在不穩定的情況。
> - 需要安裝 LuaJIT 並進行額外配置，對新手不太友好。
> - 不支持 Windows 環境的完整功能，需特別配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[binarly--binarly\|binarly/binarly]] | Binarly 提供更全面的二進位分析工具，適合需要深度分析的專案，而 VulHunt 更專注於漏洞識別和管理。 |
| [[flawfinder--flawfinder\|flawfinder/flawfinder]] | Flawfinder 是一個靜態分析工具，主要針對 C/C++ 程式碼中的安全漏洞，而 VulHunt 針對二進位檔和韌體的動態分析。 |

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

**社群活躍度**：社群活躍度中等，持續有更新和討論。
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

相關概念：[[漏洞研究]] · [[二進位分析]] · [[安全漏洞]]

相關專案：[[binarly--binarly|binarly/binarly]] · [[flawfinder--flawfinder|flawfinder/flawfinder]]

[GitHub](https://github.com/vulhunt-re/vulhunt) · [官方網站](https://vulhunt.re)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "vulhunt-re--vulhunt"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "vulhunt-re--vulhunt"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
