---
repo: vulhunt-re/vulhunt
url: https://github.com/vulhunt-re/vulhunt
owner: vulhunt-re
owner_type: Organization
language: C++
license: GPL-3.0
description: "Vulnerability detection framework by Binarly's REsearch team"
homepage: "https://vulhunt.re"
stars: 537
stars_per_day: 134
forks: 53
open_issues: 0
created: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: "v1.0.0"
status: to-review
tags:
  - github
  - 安全
  - c++
  - binary_analysis
  - reverse_engineering
  - vulnerability_research
---

# vulhunt

**537** stars · **134** stars/天 · 建立 4 天前 · C++ · GPL-3.0

> [!summary] 一句話摘要
> 提供一個漏洞檢測框架，幫助安全研究人員識別軟體中的漏洞。

## 專案簡介

VulHunt 是一個漏洞檢測框架，旨在幫助安全研究人員和從業者識別軟體二進位檔和 UEFI 韌體中的漏洞。它基於 Binarly 的二進位分析系統，提供強大的分析環境，並支持社群開發的規則包和整合。與其他漏洞檢測工具相比，VulHunt 提供了更靈活的擴展性和社群支持，適合需要進行大規模漏洞管理的團隊。這是一個成熟的工具，對於安全領域的專業人士來說非常有價值。

## 重點功能

- 集成 Binarly 的二進位分析系統。
- 支持社群開發的規則包和整合。
- 提供靈活的漏洞管理和追蹤能力。

## 快速開始

安裝 cargo-make：cargo install cargo-make。,使用 cargo-make 構建：cargo make --profile build。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著網路安全威脅的增加，對於漏洞檢測工具的需求也在上升，這個工具正好滿足了這一需求。Binarly 的專業背景和技術實力也讓這個專案受到關注。

## 適合誰使用

**目標受眾**：對於需要進行漏洞檢測和管理的安全研究人員和企業安全團隊。

> [!example] 使用場景
> - [安全研究人員] 用它來 檢測軟體中的漏洞，因為它提供了強大的分析工具。
> - [企業安全團隊] 用它來 管理和修補漏洞，因為能夠進行大規模的漏洞追蹤。
> - [開發者] 用它來 測試自己開發的軟體，因為能夠提前發現潛在的安全問題。

> [!warning] 注意事項
> 需要一定的技術背景來有效使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | C++ |
| 授權 | GPL-3.0 |
| Stars | 537 |
| Forks | 53 |
| Issues | 0 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://vulhunt.re) |

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

相關概念：#漏洞檢測 · #二進位分析 · #安全研究

[GitHub](https://github.com/vulhunt-re/vulhunt)
 · [官方網站](https://vulhunt.re)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，537 stars
