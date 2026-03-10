---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 545
stars_per_day: 136
forks: 53
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
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

**545** stars · **136** stars/天 · 建立 4 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!abstract] 核心創新
> VulHunt 提供了一個靈活的環境來分析和理解二進位檔，並支持社群開發的規則包。

## 專案簡介

VulHunt 是一個漏洞獵捕框架，專為安全研究人員設計，能夠分析和識別軟體中的漏洞。它基於 Binarly 的二進位分析和檢查系統（BIAS），並整合了 Binarly 透明平台（BTP）的功能，實現大規模的漏洞管理和追蹤。這個框架支持社群開發的規則包和整合，讓使用者能夠自定義檢測規則。與其他工具相比，VulHunt 提供了更靈活的二進位檔分析能力，並且能夠處理 UEFI 韌體的漏洞檢測。使用者可以透過簡單的命令行介面進行掃描，並輸出 JSON 格式的結果。儘管如此，該工具仍然需要一定的技術背景來配置和使用，特別是在安裝過程中。整體來說，VulHunt 是一個值得嘗試的專案，特別適合專業的安全研究人員和開發者使用。

**技術棧**：`C++` · `Rust` · `Yacc` · `Lua` · `Hack` · `Lex` · `PowerShell` · `CMake` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- 支持二進位檔和 UEFI 韌體的漏洞檢測。
- 集成 Binarly 的二進位分析和檢查系統（BIAS）。
- 提供社群開發的規則包和整合功能。
- 能夠輸出 JSON 格式的掃描結果。
- 支持命令行介面進行掃描和配置。

## 快速開始

1. 安裝 cargo-make
```bash
cargo install cargo-make
```
2. 構建 VulHunt
```bash
cargo make --profile build
```
3. 安裝 VulHunt
```bash
cargo make --profile install
```

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 由 Binarly 的研究團隊開發，這是一個專注於安全分析的公司，具有豐富的經驗和技術背景。隨著軟體安全性需求的增加，對於能夠自動化漏洞檢測的工具需求也隨之上升。這個專案的開源性使其更容易被社群接受和推廣，並且在最近的安全事件中，對於漏洞檢測工具的需求急劇增加，進一步推動了其流行。

## 適合誰使用

**目標受眾**：專業的安全研究人員和開發者。

> [!example] 使用場景
> - 安全研究員 使用它來 掃描二進位檔，因為它能快速識別潛在的安全漏洞。
> - 開發者 使用它來 整合漏洞檢測進入 CI/CD 流程，因為可以自動化漏洞管理。
> - 系統管理員 使用它來 定期檢查 UEFI 韌體，因為它提供了針對韌體的專業分析功能。

## 架構分析

VulHunt 採用模組化設計，前端使用命令行介面，後端基於 Rust 和 C++ 實現二進位分析。資料流是 使用者輸入 → 命令行介面 → 二進位分析引擎 → 輸出 JSON 結果。

## 優缺點分析

> [!success] 優點
> - 支持多種二進位檔格式的漏洞檢測。
> - 社群驅動的規則包擴展性強。
> - 集成了強大的二進位分析系統。

> [!danger] 缺點
> - 安裝和配置過程較為複雜。
> - 需要一定的技術背景才能有效使用。
> - 目前的功能可能不夠完整，仍在持續開發中。

> [!warning] 注意事項
> - 需要一定的技術背景來配置和使用。
> - 安裝過程中需要處理多個依賴和環境設置。
> - 目前僅支援特定平台的二進位檔分析。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 53 |
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

**社群活躍度**：社群活躍度中等，定期更新和維護。
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
> - `-r, --rules `: Directory containing VulHunt rules. Can also be set via `BIAS_V

## 延伸閱讀

相關概念：[[二進位分析]] · [[漏洞管理]] · [[安全研究]] · [[UEFI 韌體]] · [[開源工具]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
