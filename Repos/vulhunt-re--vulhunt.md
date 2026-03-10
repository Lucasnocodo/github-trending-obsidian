---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 540
stars_per_day: 135
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
  - 安全
  - c++
  - binary_analysis
  - reverse_engineering
  - vulnerability_research
aliases:
  - "vulhunt"
  - "vulhunt-re/vulhunt"
  - "幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。"
---

# vulhunt

**540** stars · **135** stars/天 · 建立 4 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!abstract] 核心創新
> VulHunt 提供了一個靈活的環境來開發和整合自定義的漏洞檢測規則。

## 專案簡介

VulHunt 是一個漏洞獵捕框架，專為識別軟體二進位檔和 UEFI 韌體中的漏洞而設計。它基於 Binarly 的二進位分析和檢查系統（BIAS），提供強大的分析環境，並整合了 Binarly 透明平台（BTP）的功能，支援大規模的漏洞管理和篩選。與其他工具相比，VulHunt 的獨特之處在於其社群開發的規則包和整合能力，讓用戶能夠自定義掃描規則。實際使用中，VulHunt 能夠快速掃描二進位檔並生成 JSON 格式的輸出，適合大型專案的漏洞檢測。這個專案的成熟度高，對於需要進行深入漏洞分析的安全團隊來說，值得一試。

**技術棧**：`Rust` · `CMake` · `Lua` · `Docker`

## 重點功能

- 基於 Binarly 的二進位分析和檢查系統（BIAS）。
- 支援自定義的社群開發規則包。
- 能夠掃描二進位檔和 UEFI 韌體。
- 生成 JSON 格式的掃描結果。
- 整合 Binarly 透明平台的功能，支援大規模漏洞管理。

## 快速開始

1. 安裝 cargo-make
```bash
cargo install cargo-make
```
2. 建置 VulHunt
```bash
cargo make --profile build
```
3. 安裝 VulHunt
```bash
cargo make --profile install
```

## 為什麼值得關注

> [!tip] 爆紅原因
> VulHunt 的開發團隊來自 Binarly，擁有豐富的安全研究背景，這使得該工具能夠針對實際需求進行設計。隨著軟體安全性日益受到重視，對於漏洞檢測工具的需求也隨之增加。最近的安全事件促使更多企業尋求有效的漏洞管理解決方案，這使得 VulHunt 受到關注。

## 適合誰使用

**目標受眾**：專注於軟體安全的研究人員和開發團隊。

> [!example] 使用場景
> - 安全研究員 用它來 掃描二進位檔，因為 它能快速識別潛在的安全漏洞。
> - 開發團隊 用它來 整合自定義的漏洞檢測規則，因為 這樣可以針對特定應用進行深入分析。
> - IT 安全管理者 用它來 進行大規模的漏洞管理，因為 它支援批量處理和自動化的漏洞篩選。

## 架構分析

VulHunt 採用模組化設計，前端使用 Rust 開發，後端整合 Binarly 的 BIAS 系統，並透過 API 提供漏洞掃描功能。資料流是 使用者輸入二進位檔 → API Server → BIAS 分析 → 結果輸出。

## 優缺點分析

> [!success] 優點
> - 提供靈活的自定義規則開發。
> - 能夠快速掃描並生成結果。
> - 整合了強大的二進位分析工具。

> [!danger] 缺點
> - 需要一定的技術背景來設定和使用。
> - 對於新手可能存在學習曲線。
> - 某些功能可能需要額外的配置。

> [!warning] 注意事項
> - 需要 Rust 環境進行編譯。
> - 對於某些二進位檔格式的支援可能有限。
> - 使用者需自行管理自定義規則的開發和維護。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Radare2 | Radare2 更加專注於逆向工程，而 VulHunt 專注於漏洞檢測。 |
| Ghidra | Ghidra 提供更強大的逆向分析功能，但缺乏 VulHunt 的自動化漏洞掃描能力。 |

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

相關概念：[[二進位分析]] · [[漏洞管理]] · [[安全研究]] · [[自動化測試]] · [[逆向工程]]

[GitHub](https://github.com/vulhunt-re/vulhunt) · [官方網站](https://vulhunt.re)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
