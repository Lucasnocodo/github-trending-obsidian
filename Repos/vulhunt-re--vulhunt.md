---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 552
stars_per_day: 110
forks: 54
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "漏洞檢測"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中發現漏洞的框架。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中發現漏洞的框架。"
---

# vulhunt

**552** stars · **110** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中發現漏洞的框架。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (110 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在二進位檔和韌體中快速檢測漏洞的安全研究人員和系統管理員。
> **一句話重點** VulHunt 的設計不僅強調漏洞檢測的準確性，還考慮到了社群的擴展性和靈活性。

> [!abstract] 核心創新
> VulHunt 提供了一個靈活且可擴展的漏洞檢測框架，專為二進位檔和 UEFI 韌體設計。

## 專案簡介

VulHunt 是一個針對二進位檔和 UEFI 韌體的漏洞檢測框架，透過分析輸入的二進位檔，利用 Binarly 的二進位分析系統 (BIAS) 進行深入檢查，並輸出 JSON 格式的結果。它支援多種掃描方式，包括單一二進位檔、BA2 檔案和 Binary Ninja 數據庫，並可透過指定的規則進行漏洞檢測。技術上，VulHunt 使用 Rust 和 C++ 開發，並整合了 LuaJIT 以增強其擴展性。與其他工具相比，VulHunt 提供了更靈活的規則管理和大型漏洞管理功能，特別適合需要處理大量二進位檔的環境。使用者可以透過簡單的命令行介面進行掃描，並可選擇將結果格式化為人類可讀或 JSONL 流格式。該框架的效能在於能夠快速處理多達數百個二進位檔，並且能夠在本地或作為 MCP 伺服器運行。這個專案目前處於穩定版本，適合中小型安全團隊使用，尤其是需要快速檢測和管理漏洞的情境。對於大型企業或需要高度自訂的環境，可能需要考慮其他更專業的解決方案。總之，VulHunt 是一個值得一試的工具，尤其是對於那些希望在開源社群中貢獻規則包的研究者。

**技術棧**：`Rust` · `C++` · `LuaJIT`

## 重點功能

- 多種掃描模式 — 支援單一二進位檔、BA2 檔案和 Binary Ninja 數據庫掃描。
- 靈活的規則管理 — 使用者可自訂漏洞檢測規則並進行管理。
- JSON 輸出格式 — 可選擇將結果輸出為人類可讀格式或 JSONL 流格式。
- MCP 伺服器功能 — 可作為 Model Context Protocol 伺服器運行，方便與 AI 助手整合。
- 擴展性 — 支援 LuaJIT 以便於開發自訂模組和功能。

## 快速開始

1. 安裝 cargo-make
```bash
cargo install cargo-make
```
2. 編譯 VulHunt
```bash
cargo make --profile build
```
3. 執行漏洞掃描
```bash
vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty
```

## 程式碼範例

vulhunt-ce scan lib.so -o results.json -d /path/to/bias-data -r /path/to/rules --pretty

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 由 Binarly 的研究團隊開發，該團隊在漏洞研究領域有著豐富的經驗。這個工具解決了以往在二進位檔分析中缺乏靈活性和擴展性的問題，特別是在漏洞管理方面。近期的社群討論和開源貢獻使得它的知名度上升，尤其是在安全研究者中。隨著對於安全性需求的增加，這個工具的實用性和功能性變得更加重要。

## 適合誰使用

**目標受眾**：需要在二進位檔和韌體中快速檢測漏洞的安全研究人員和系統管理員。

> [!example] 使用場景
> - 安全研究人員用它來掃描二進位檔以識別潛在漏洞，因為它能快速生成 JSON 格式的結果，便於後續分析。
> - 系統管理員用它來檢查 UEFI 韌體的安全性，因為它支援多種檔案格式，並能有效管理大量檔案。
> - 開發者用它來整合漏洞檢測到 CI/CD 流程中，因為它能作為 MCP 伺服器運行，方便與其他工具連接。

## 架構分析

VulHunt 採用微服務架構，核心資料流為：用戶輸入二進位檔 → 處理漏洞檢測 → 輸出結果為 JSON 格式。關鍵技術決策包括使用 Rust 和 C++ 以提高效能，並整合 LuaJIT 以增強擴展性。專案目錄結構包含 src、tests 和 docs 等關鍵檔案，方便開發和測試。

## 技術深入分析

VulHunt 的核心技術機制是基於 Rust 和 C++ 的二進位分析，並利用 LuaJIT 進行擴展。它能夠處理的資料量相當可觀，特別是在掃描大型二進位檔時，性能表現良好。選擇 Rust 和 C++ 使得其在效能上有優勢，但也增加了安裝的複雜性。設計上，VulHunt 旨在提供一個靈活的框架，讓使用者能夠根據需求自訂規則和模組。隨著使用者數量的增加，可能會面臨擴展性和維護上的挑戰，特別是在社群貢獻的規則包數量增多後，如何保持規則的有效性和安全性將是未來的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要注意依賴的配置，可能會遇到一些環境問題。整體來說，花 30 分鐘應該能夠成功運行起來，但對於不熟悉 Rust 環境的使用者可能需要更多時間。

## 優缺點分析

> [!success] 優點
> - 支援多種檔案格式，靈活性高。
> - 可擴展性強，適合社群貢獻規則包。
> - 提供人性化的輸出格式，便於分析。

> [!danger] 缺點
> - 安裝過程相對複雜，需要額外的依賴。
> - 對於大型檔案的處理效能可能有瓶頸。
> - 目前僅在 Linux 和 macOS 上有較好的支援。

> [!warning] 注意事項
> - 需要 Rust 和 Cargo 環境進行編譯。
> - 對於大型二進位檔的處理可能需要較高的系統資源。
> - 目前僅支援 Linux 和 macOS，Windows 支援有限。

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

相關概念：[[漏洞檢測]] · [[二進位分析]] · [[安全研究]]

相關專案：[[google--oss-fuzz|google/oss-fuzz]] · [[synopsys--blackduck|synopsys/blackduck]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，551 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
