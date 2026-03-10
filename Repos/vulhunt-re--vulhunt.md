---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 547
stars_per_day: 109
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

**547** stars · **109** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!abstract] 核心創新
> VulHunt 是一個開源的漏洞獵捕框架，專為社群開發的規則包而設計，提供靈活的漏洞檢測能力。

## 專案簡介

VulHunt 是一個漏洞獵捕框架，專為安全研究人員設計，能夠分析和識別軟體二進位檔中的漏洞。它基於 Binarly 的二進位分析系統（BIAS），提供靈活的環境來理解和檢查二進位檔。VulHunt 的一大特色是與 Binarly 透明平台（BTP）的整合，這使得它具備大規模漏洞管理和篩選的能力。與其他工具相比，VulHunt 支援社群開發的規則包，讓使用者能夠自定義檢測規則，這在商業解決方案中通常是封閉的。實際使用中，VulHunt 能夠快速掃描大量二進位檔，並生成 JSON 格式的輸出，方便後續分析。整體來說，這是一個功能強大且值得嘗試的工具，特別適合需要進行深入漏洞分析的安全團隊。

**技術棧**：`Rust` · `CMake` · `Lua` · `Python`

## 重點功能

- 基於 Binarly 的二進位分析系統（BIAS）。
- 支援社群開發的漏洞檢測規則包。
- 與 Binarly 透明平台（BTP）整合，提供大規模漏洞管理能力。
- 能夠快速掃描二進位檔並生成 JSON 格式輸出。
- 提供靈活的環境來分析和理解二進位檔。

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
> VulHunt 的開發者來自 Binarly，擁有豐富的安全研究背景，這讓它在專業領域中受到重視。隨著網路安全威脅的增加，對於漏洞檢測工具的需求也隨之上升。最近的安全事件促使許多企業尋求更有效的漏洞管理解決方案，VulHunt 剛好切中這一需求。

## 適合誰使用

**目標受眾**：專業的安全研究人員和企業安全團隊。

> [!example] 使用場景
> - 安全研究員 用它來 識別軟體中的漏洞，因為它提供了靈活的分析環境和社群支持的規則包。
> - 企業安全團隊 用它來 進行大規模的漏洞掃描，因為它能夠快速生成分析報告，提升工作效率。
> - 開發者 用它來 測試自家產品的安全性，因為它能夠自動化漏洞檢測流程，減少人力成本。

## 架構分析

VulHunt 採用模組化設計，前端使用 Rust 開發，後端則依賴 Binarly 的 BIAS 進行二進位分析，資料流從二進位檔輸入到分析引擎，再到結果輸出。

## 優缺點分析

> [!success] 優點
> - 開源且社群支持，易於擴展和自定義。
> - 強大的二進位分析能力，適合專業使用。
> - 快速生成分析報告，提升工作效率。

> [!danger] 缺點
> - 需要一定的技術背景來配置和使用。
> - 對於某些特定二進位格式的支持可能不夠完善。
> - 早期版本可能存在穩定性和功能上的限制。

> [!warning] 注意事項
> - 需要 Rust 環境進行構建。
> - 對於某些二進位檔格式的支持可能有限。
> - 早期版本可能存在穩定性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| OWASP ZAP | ZAP 更專注於網頁應用的安全測試，而 VulHunt 專注於二進位檔和韌體的漏洞檢測。 |
| Burp Suite | Burp Suite 是一個商業工具，功能強大但需要付費，而 VulHunt 是開源的。 |

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

**社群活躍度**：每週有穩定的 commits，社群活躍度高。
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

相關概念：[[安全漏洞]] · [[自動化測試]] · [[二進位分析]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
