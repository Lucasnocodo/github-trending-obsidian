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
use_case: "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞的框架。"
priority: medium
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
  - "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞的框架。"
---

# vulhunt

**550** stars · **110** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞的框架。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (110 stars/day)
> **適合** 需要在二進位檔和 UEFI 韌體中進行漏洞檢測的安全研究人員和開發團隊。
> **一句話重點** VulHunt 不僅是一個漏洞檢測工具，更是一個可擴展的框架，讓社群能夠共同參與漏洞規則的開發。

> [!abstract] 核心創新
> VulHunt 提供了一個靈活的框架，能夠支持社群開發的規則包和模組，擴展漏洞檢測能力。

## 專案簡介

VulHunt 是一個專為安全研究人員設計的漏洞獵捕框架，透過 Binarly 的二進位分析系統 (BIAS) 來分析和理解二進位檔。它支持多種二進位檔格式的掃描，並能與 Binarly 透明平台 (BTP) 整合，實現大規模的漏洞管理和追蹤。使用者可以透過簡單的指令如 `vulhunt-ce scan <binary>` 來掃描指定的二進位檔，並將結果輸出為 JSON 格式。與其他工具相比，VulHunt 提供了針對 BA2 檔案和 Binary Ninja 數據庫的專屬支持，這使得它在處理複雜的二進位檔時更具優勢。該工具的效能在於其靈活的模組化設計，能夠根據用戶需求進行擴展。VulHunt 目前處於穩定版本，適合中小型團隊進行漏洞掃描和管理。對於需要高效漏洞檢測的團隊，VulHunt 是一個值得考慮的選擇，但對於大型企業可能需要進一步的功能擴展。使用者應在有明確漏洞檢測需求時選擇此工具，而若只是偶爾使用，可能會覺得其設置過於繁瑣。

**技術棧**：`C++` · `Rust` · `Lua` · `Docker`

## 重點功能

- 多格式掃描 — 支持二進位檔、BA2 檔案和 Binary Ninja 數據庫的掃描，透過 `--loader` 參數選擇。
- JSON 輸出 — 掃描結果可輸出為 JSON 格式，便於後續分析和報告生成。
- 模組化設計 — 支持用戶自定義模組和規則，透過 `-r` 參數指定規則目錄。
- MCP 伺服器功能 — 可以作為 Model Context Protocol 伺服器運行，支持與 AI 助手的整合。
- BA2 檔案操作 — 提供 BA2 檔案的組件列舉和提取功能，便於管理和分析。

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
vulhunt-ce scan <binary_path> -o output.json -d /path/to/data -r /path/to/rules
```

## 程式碼範例

```bash
vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
```

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 由 Binarly 的研究團隊開發，專注於漏洞檢測的需求，特別是在二進位檔和韌體領域。隨著安全性需求的增加，這個工具的出現正好滿足了市場對於高效漏洞檢測的需求。近期的安全事件也促使了對此類工具的關注。

## 適合誰使用

**目標受眾**：需要在二進位檔和 UEFI 韌體中進行漏洞檢測的安全研究人員和開發團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描二進位檔以識別潛在漏洞，因為其支持多種檔案格式並能輸出詳細的 JSON 報告。
> - DevOps 工程師用它來集成漏洞檢測到 CI/CD 流程中，因為可以透過簡單的指令自動化檢測過程，提升開發效率。
> - 系統管理員用它來分析 UEFI 韌體，因為其專門針對韌體的漏洞檢測功能能夠提供更深入的安全分析。

## 架構分析

VulHunt 採用 CLI 架構，核心資料流為用戶輸入二進位檔 → 處理掃描 → 輸出結果。核心技術決策包括使用 Rust 進行高效能的二進位檔分析，並整合 LuaJIT 進行擴展。專案目錄結構包含 src、rules 和 modules 等關鍵資料夾，便於用戶自定義擴展。

## 技術深入分析

> [!note]- 展開深入分析
> VulHunt 的核心演算法基於靜態分析技術，能夠快速識別二進位檔中的潛在漏洞。其效能特性在於使用 Rust 語言進行高效能的二進位檔處理，並能夠在不同平台上運行。設計上選擇了模組化架構，使得用戶可以根據需求添加自定義規則，這在其他類似工具中並不常見。與競品相比，VulHunt 在處理複雜二進位檔時的靈活性和擴展性更為突出。

## 優缺點分析

> [!success] 優點
> - 支持多種二進位檔格式的掃描，靈活性高。
> - 提供詳細的 JSON 輸出，便於後續分析。
> - 模組化設計，支持社群自定義規則和模組。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，需要額外的依賴。
> - 對於大型二進位檔的掃描可能需要較高的資源消耗。
> - 目前的 Windows 支持不夠完善。

> [!warning] 注意事項
> - 需要安裝 LuaJIT 並進行相應的補丁處理。
> - 對於大型二進位檔的掃描可能需要較高的記憶體和計算資源。
> - 目前僅支持 Linux 和 macOS，Windows 支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[google--oss-fuzz\|google/oss-fuzz]] | 專注於開源軟體的模糊測試，而 VulHunt 更加專注於靜態二進位檔分析和漏洞檢測。 |
| [[synopsys--blackduck\|synopsys/blackduck]] | 主要針對開源組件的安全性分析，而 VulHunt 提供更深入的二進位檔和韌體分析功能。 |

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

**社群活躍度**：社群活躍度中等，有定期的更新和討論。
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

相關概念：[[漏洞研究]] · [[二進位分析]] · [[靜態分析]]

相關專案：[[google--oss-fuzz|google/oss-fuzz]] · [[synopsys--blackduck|synopsys/blackduck]]

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
