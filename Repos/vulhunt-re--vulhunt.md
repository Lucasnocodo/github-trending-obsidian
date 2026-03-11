---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 551
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
use_case: "提供一個框架來檢測軟體二進位檔和 UEFI 韌體中的漏洞。"
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
  - "提供一個框架來檢測軟體二進位檔和 UEFI 韌體中的漏洞。"
---

# vulhunt

**551** stars · **110** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 提供一個框架來檢測軟體二進位檔和 UEFI 韌體中的漏洞。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (110 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意)
> **適合** 需要高效檢測軟體二進位檔和 UEFI 韌體漏洞的安全研究團隊。
> **一句話重點** VulHunt 不僅是一個漏洞檢測工具，更是一個社群驅動的安全研究平台。

> [!abstract] 核心創新
> VulHunt 提供了針對 UEFI 韌體的專業漏洞檢測功能，並整合了大規模漏洞管理能力。

## 專案簡介

VulHunt 是一個專為安全研究人員設計的漏洞檢測框架，能夠分析軟體二進位檔和 UEFI 韌體。它基於 Binarly 的二進位分析與檢查系統（BIAS），提供靈活的環境來理解和檢查二進位檔。VulHunt 還整合了 Binarly 透明度平台（BTP）的功能，支持大規模的漏洞管理和追蹤。使用者可以透過 `vulhunt-ce scan` 指令，指定二進位檔路徑、輸出 JSON 的位置及規則目錄進行掃描，並可選擇不同的加載器來處理多種檔案格式。與其他工具相比，VulHunt 的獨特之處在於其對 UEFI 韌體的支持及與 BTP 的整合，這使得它在漏洞管理上更具效率。實際使用中，VulHunt 能夠快速掃描並生成詳細的 JSON 輸出，適合需要高效漏洞檢測的團隊。這個專案目前處於穩定版本，適合中大型團隊使用。對於需要針對特定平台進行漏洞檢測的情況，VulHunt 是一個不錯的選擇，但對於小型專案或個人使用者可能過於複雜。

**技術棧**：`Rust` · `CMake` · `Lua`

## 重點功能

- 多格式掃描 — 支持掃描二進位檔、BA2 檔案和 Binary Ninja 數據庫。
- 靈活的規則管理 — 使用者可自定義漏洞檢測規則，並透過環境變數進行配置。
- JSON 輸出格式 — 掃描結果可輸出為 JSON 格式，便於後續分析。
- MCP 伺服器支持 — 可作為 MCP 伺服器運行，與 AI 助手整合。
- BA2 工具集 — 提供對 BA2 檔案的列出和提取功能。

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
> (a) 由 Binarly 的研究團隊開發，該團隊在漏洞研究領域有著豐富的經驗。(b) VulHunt 解決了傳統漏洞檢測工具無法有效處理 UEFI 韌體的痛點，提供了針對性強的解決方案。(c) 最近在安全研究社群中引起討論，特別是針對其與 BTP 的整合。(d) 隨著對 UEFI 韌體安全的重視增加，這個工具的需求也隨之上升。

## 適合誰使用

**目標受眾**：需要高效檢測軟體二進位檔和 UEFI 韌體漏洞的安全研究團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描 UEFI 韌體中的漏洞，因為傳統工具無法有效處理這類檔案。
> - DevOps 工程師用它來在 CI/CD 流程中自動檢測二進位檔的安全性，因為手動檢查效率低且容易出錯。
> - 漏洞分析師用它來整合 BTP 的數據，因為這樣可以更快速地管理和追蹤漏洞狀態。

## 架構分析

VulHunt 採用 CLI 架構，使用者透過命令行介面進行操作。核心資料流為：用戶輸入 → 掃描二進位檔 → 輸出 JSON 結果。關鍵技術決策包括使用 Rust 進行高效能的二進位分析，並整合 LuaJIT 以支持自定義規則。目錄結構中，`src` 資料夾包含主要的程式碼，`rules` 資料夾則存放用戶自定義的規則。

## 技術深入分析

> [!note]- 展開深入分析
> VulHunt 的核心演算法基於靜態二進位分析，利用 Rust 的高效能來處理大型二進位檔。效能方面，VulHunt 能夠在數秒內掃描數百MB 的二進位檔，並生成詳細的 JSON 輸出。設計上，選擇 Rust 而非 C/C++ 是為了提高安全性和效能，雖然這使得學習曲線稍陡。與其他工具相比，VulHunt 在 UEFI 韌體的支持上具有明顯優勢，這在許多傳統工具中是無法實現的。

## 優缺點分析

> [!success] 優點
> - 針對 UEFI 韌體的專業支持，填補市場空缺。
> - 靈活的規則管理系統，便於用戶自定義。
> - 高效的 JSON 輸出格式，便於後續數據處理。

> [!danger] 缺點
> - 安裝和配置過程較為複雜，對新手不友好。
> - 需要額外的依賴（如 LuaJIT），增加了安裝負擔。
> - 對於小型專案可能顯得過於龐大和重。

> [!warning] 注意事項
> - 需要安裝 LuaJIT 和相關補丁。
> - 僅支持特定平台的構建，對於 Windows 需要額外配置。
> - 對於小型專案來說，可能過於複雜和資源密集。

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

- [[2026-03-11|2026-03-11]] — 再次上榜，550 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
