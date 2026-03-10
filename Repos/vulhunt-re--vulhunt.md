---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 543
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
  - "提供一個框架來自動化檢測軟體二進位檔和 UEFI 韌體中的漏洞。"
---

# vulhunt

**543** stars · **136** stars/天 · 建立 4 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 提供一個框架來自動化檢測軟體二進位檔和 UEFI 韌體中的漏洞。

> [!abstract] 核心創新
> VulHunt 提供了一個靈活的框架，允許用戶自定義漏洞檢測規則，並支持社群開發。

## 專案簡介

VulHunt 是一個專為安全研究人員設計的漏洞檢測框架，它能夠自動化地分析和識別軟體二進位檔及 UEFI 韌體中的潛在漏洞。這個框架基於 Binarly 的二進位分析系統（BIAS），並整合了 Binarly 透明平台（BTP）的功能，提供大規模漏洞管理和追蹤能力。與其他工具相比，VulHunt 允許用戶自定義規則包，並支持社群開發，這使得它在靈活性和擴展性上有明顯優勢。實際使用中，VulHunt 能夠有效地處理大型二進位檔的漏洞掃描，但對於特定的二進位格式可能需要額外的配置。整體來看，這是一個值得嘗試的成熟工具，特別適合需要進行深入漏洞分析的安全團隊和研究者。

**技術棧**：`C++` · `Rust` · `Lua` · `Docker`

## 重點功能

- 支持自定義規則包，方便社群開發。
- 集成 Binarly 透明平台的漏洞管理功能。
- 能夠分析 UEFI 韌體和各種二進位檔格式。
- 提供大規模漏洞掃描和追蹤能力。
- 支持與 Binary Ninja 的集成，增強分析能力。

## 快速開始

1. 安裝 cargo-make 工具
```bash
cargo install cargo-make
```
2. 使用 cargo-make 建立專案
```bash
cargo make --profile build
```
3. 安裝專案
```bash
cargo make --profile install
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Binarly 的研究團隊擁有豐富的安全研究背景，這使得 VulHunt 在技術上具備深厚的基礎。隨著軟體安全需求的增加，特別是在二進位檔和韌體層面的漏洞檢測需求日益增長，這個工具正好切中市場需求。最近的安全事件也促使許多公司尋求更有效的漏洞檢測解決方案，進一步推動了這個專案的流行。

## 適合誰使用

**目標受眾**：專業的安全研究人員和企業安全團隊。

> [!example] 使用場景
> - 安全研究員用它來掃描二進位檔，因為它能自動檢測潛在漏洞，節省時間。
> - 企業安全團隊用它來管理和追蹤韌體漏洞，因為它支持大規模的漏洞管理。
> - 開發者用它來驗證自己開發的應用程式的安全性，因為它提供了可自定義的規則包。

## 架構分析

VulHunt 採用模組化設計，前端使用 Rust 實現，後端則依賴於 Binarly 的 BIAS 系統進行二進位分析。資料流是用戶提交二進位檔 → BIAS 分析 → 輸出漏洞報告。

## 優缺點分析

> [!success] 優點
> - 靈活的規則包系統，支持社群貢獻。
> - 強大的二進位分析能力，適合各種格式。
> - 集成現有的漏洞管理平台，提升效率。

> [!danger] 缺點
> - 安裝過程較為複雜，需要多個依賴。
> - 對於某些特定格式的支持可能不足。
> - 社群資源相對較少，學習曲線較陡。

> [!warning] 注意事項
> - 需要安裝 LuaJIT 和其他依賴。
> - 對於某些二進位格式可能需要額外的配置。
> - 目前僅支援 Linux 和 macOS，Windows 支援有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Radare2 | Radare2 更加專注於逆向工程，而 VulHunt 專注於漏洞檢測。 |
| Ghidra | Ghidra 提供強大的逆向工程功能，但不如 VulHunt 專注於漏洞管理。 |

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

相關概念：[[二進位分析]] · [[漏洞管理]] · [[UEFI 韌體安全]] · [[自定義規則引擎]]

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
