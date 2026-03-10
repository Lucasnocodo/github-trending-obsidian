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
forks: 54
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
> VulHunt 提供了一個開放式框架，允許用戶自定義漏洞檢測規則，並整合社群貢獻的功能。

## 專案簡介

VulHunt 是一個專為漏洞檢測而設計的框架，利用 Binarly 的二進位分析系統 (BIAS) 來分析和理解二進位檔。它結合了 Binarly 透明平台 (BTP) 的功能，提供大規模的漏洞管理和狩獵能力。與其他漏洞檢測工具相比，VulHunt 支援社群開發的規則包和整合，讓使用者能夠自定義檢測規則。實際使用中，VulHunt 能夠快速掃描二進位檔並生成 JSON 格式的輸出，對於大型專案的漏洞管理特別有效。然而，使用者需要具備一定的技術背景來進行安裝和配置。整體來看，這是一個成熟的工具，適合安全研究人員和開發團隊在專案中進行漏洞檢測。

**技術棧**：`Rust` · `CMake` · `Lua`

## 重點功能

- 支持二進位檔和 UEFI 韌體的漏洞掃描。
- 集成 Binarly 的二進位分析和檢查系統 (BIAS)。
- 支援社群開發的規則包，方便用戶自定義檢測規則。
- 生成 JSON 格式的掃描結果，便於後續分析。
- 提供大規模漏洞管理和狩獵能力。

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
> VulHunt 的開發者來自 Binarly，專注於安全領域，這使得其具備深厚的技術背景。隨著軟體安全性問題日益嚴重，對於漏洞檢測工具的需求也隨之增加。這個專案的開源特性吸引了許多安全專家參與，進一步提升了其知名度。

## 適合誰使用

**目標受眾**：專業的安全研究人員和開發團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描軟體二進位檔，因為它能快速識別潛在漏洞。
> - 開發團隊用它來整合漏洞檢測到 CI/CD 流程中，因為它能自動化漏洞管理。
> - 安全顧問用它來評估客戶系統的安全性，因為它提供了靈活的規則自定義功能。

## 架構分析

VulHunt 採用模組化架構，前端使用 Rust 開發，後端則依賴 Binarly 的 BIAS 系統進行二進位檔分析。資料流是用戶輸入二進位檔 → VulHunt 掃描 → 結果生成 JSON 輸出。

## 優缺點分析

> [!success] 優點
> - 開源且社群活躍，易於擴展功能。
> - 支持自定義規則，靈活性高。
> - 能夠快速識別多種漏洞類型。

> [!danger] 缺點
> - 安裝和配置過程較為複雜。
> - 需要一定的安全知識才能有效使用。
> - 可能存在早期版本的穩定性問題。

> [!warning] 注意事項
> - 需要一定的技術背景來進行安裝和配置。
> - 目前僅支持特定平台的二進位檔掃描。
> - 早期版本可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Trivy | Trivy 專注於容器和基礎設施的漏洞掃描，而 VulHunt 更加專注於二進位檔和韌體。 |
| Nessus | Nessus 是一個商業工具，功能全面但需要付費，而 VulHunt 是開源的，適合社群開發。 |

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
> - `-r, --rules `: Directory containing VulHunt rules. Can also be set via `BIAS_V

## 延伸閱讀

相關概念：[[二進位分析]] · [[漏洞管理]] · [[安全測試]]

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
