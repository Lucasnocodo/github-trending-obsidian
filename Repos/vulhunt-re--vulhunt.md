---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 539
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
---

# vulhunt

**539** stars · **135** stars/天 · 建立 4 天前 · C++ · GPL-3.0

`ORG` `v1.0.0`

> [!summary] 一句話摘要
> 幫助安全研究人員在軟體二進位檔和 UEFI 韌體中識別漏洞。

> [!abstract] 核心創新
> VulHunt 專注於 UEFI 韌體的漏洞檢測，提供針對性的解決方案。

## 專案簡介

它讓安全研究人員能夠快速檢測二進位檔中的安全漏洞。這個框架基於 Binarly 的二進位分析系統（BIAS），提供靈活的分析環境。與其他工具相比，VulHunt 特別針對 UEFI 韌體的漏洞檢測進行了優化。整體來說，這是一個功能強大且值得一試的工具，特別是對於需要進行大規模漏洞管理的團隊。

**技術棧**：`C++` · `Rust` · `Yacc` · `Lua` · `Hack` · `Lex` · `PowerShell` · `CMake` · `Python` · `Shell` · `Dockerfile`

## 重點功能

- 支援自動化漏洞檢測，提升效率。
- 整合 Binarly 的透明度平台，提供大規模漏洞管理能力。
- 社群開發的規則包和整合，擴展性強。

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
> Binarly 的研究團隊在安全領域有豐富的經驗，這個專案切合了當前對於漏洞檢測的迫切需求。隨著軟體安全性日益受到重視，這類工具的需求也隨之增長。

## 適合誰使用

**目標受眾**：專注於軟體安全和漏洞檢測的研究人員和開發者。

> [!example] 使用場景
> - 安全研究員 用它來 檢測二進位檔中的漏洞，因為 這樣可以快速識別潛在的安全風險。
> - 企業安全團隊 用它來 進行韌體安全檢查，因為 這能幫助他們保護關鍵系統不受攻擊。
> - 開發者 用它來 確保自己的應用程式不含已知漏洞，因為 這樣能提升產品的安全性和信任度。

> [!warning] 注意事項
> 需要 Rust 環境和相關依賴。

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
> For macOS

## 延伸閱讀

相關概念：[[二進位分析]] · [[漏洞管理]] · [[韌體安全]]

[GitHub](https://github.com/vulhunt-re/vulhunt) · [官方網站](https://vulhunt.re)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
