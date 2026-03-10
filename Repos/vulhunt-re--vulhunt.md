---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 546
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

**546** stars · **109** stars/天 · 建立 5 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!abstract] 核心創新
> VulHunt 提供社群開發的規則包，讓用戶能夠靈活擴展漏洞檢測功能。

## 專案簡介

VulHunt 是一個漏洞獵捕框架，專為安全研究人員設計，能夠分析和識別二進位檔中的漏洞。它基於 Binarly 的 Binary Analysis and Inspection System (BIAS)，結合了強大的分析能力和靈活的環境，並整合了 Binarly Transparency Platform (BTP) 的功能。與其他漏洞掃描工具相比，VulHunt 提供了社群開發的規則包和整合，讓用戶能夠自定義和擴展功能。使用者可以透過簡單的命令行介面進行掃描，並生成 JSON 格式的輸出，便於後續處理。儘管其功能強大，但對於初學者來說，安裝和配置過程可能稍顯複雜。整體來看，VulHunt 是一個值得嘗試的工具，尤其適合專業的安全研究團隊和有經驗的開發者。

**技術棧**：`C++` · `Rust` · `Lua` · `Python` · `Docker`

## 重點功能

- 基於 Binarly 的 BIAS 系統，提供強大的二進位檔分析能力。
- 支持社群開發的規則包，方便用戶自定義漏洞檢測規則。
- 能夠生成 JSON 格式的掃描報告，便於後續數據處理。
- 整合 Binarly Transparency Platform 的功能，支持大規模漏洞管理。
- 提供命令行介面，簡化操作流程。

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

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 的開發團隊來自 Binarly，擁有豐富的安全研究背景，這使得該工具在技術上具備高度的可靠性。隨著對軟體安全的需求日益增加，特別是在二進位檔分析方面，VulHunt 提供了一個強大的解決方案。近期的安全事件促使更多企業和開發者尋求有效的漏洞檢測工具，這也加速了該專案的流行。

## 適合誰使用

**目標受眾**：專業的安全研究人員和開發者，特別是需要進行二進位檔分析的團隊。

> [!example] 使用場景
> - 安全研究員 用它來 識別軟體中的潛在漏洞，因為它提供了強大的分析工具和社群支持的規則包。
> - 開發者 用它來 測試自家產品的安全性，因為它能夠自動化漏洞掃描並生成詳細報告。
> - 企業安全團隊 用它來 進行大規模的漏洞管理，因為它整合了多種分析功能，提升了工作效率。

## 架構分析

VulHunt 採用模組化設計，前端使用命令行介面，後端則基於 Rust 和 C++ 進行二進位檔分析。資料流是用戶輸入二進位檔 → VulHunt 掃描 → 生成 JSON 報告。

## 優缺點分析

> [!success] 優點
> - 提供強大的二進位檔分析能力。
> - 支持社群開發的規則包，靈活性高。
> - 能夠生成詳細的掃描報告，便於後續處理。

> [!danger] 缺點
> - 安裝和配置過程較為複雜。
> - 對系統資源要求較高。
> - 目前僅支持特定平台的二進位檔格式。

> [!warning] 注意事項
> - 安裝和配置過程對初學者來說可能較為複雜。
> - 需要一定的系統資源來進行二進位檔分析。
> - 目前僅支持特定平台的二進位檔格式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| OWASP ZAP | OWASP ZAP 更專注於網頁應用的安全測試，而 VulHunt 針對二進位檔和韌體。 |
| Burp Suite | Burp Suite 主要用於手動和自動化的網頁安全測試，VulHunt 則專注於漏洞獵捕和分析。 |

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

**社群活躍度**：社群活躍，定期更新和維護，問題回應迅速。
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

相關概念：[[二進位檔分析]] · [[漏洞管理]] · [[安全研究]]

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
