---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2291
stars_per_day: 1146
forks: 218
open_issues: 10
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉換為AI代理可用的命令行介面。"
---

# CLI-Anything

**2.3k** stars · **1.1k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉換為AI代理可用的命令行介面。

> [!abstract] 核心創新
> 這個專案能夠將所有軟體轉換為AI代理可用的命令行介面，實現無縫整合。

## 專案簡介

這個專案的核心在於將任何軟體轉換為AI代理可用的命令行介面，實現更高效的自動化操作。它使用Python編寫，並透過Claude Code插件架構，讓使用者能夠快速生成CLI。這個工具的特點在於其結構化和可組合性，能夠將複雜的工作流程簡化為簡單的命令。與傳統的自動化工具相比，CLI-Anything提供了更輕量和通用的解決方案，無需額外的依賴。實際使用中，這個工具能夠快速生成CLI並執行各種操作，但仍需依賴Claude Code的環境。這是一個值得嘗試的工具，特別適合需要將現有軟體整合進AI工作流程的開發者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 將任何軟體轉換為AI代理可用的命令行介面。
- 結構化和可組合的命令設計，適合複雜工作流程。
- 輕量級，無需額外依賴，跨平台運行。
- 自描述的命令行選項，便於自動生成文檔。
- 支持多種應用程式的CLI生成，如GIMP和Blender。

## 快速開始

1. 添加CLI-Anything市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝插件
```bash
/plugin install cli-anything
```
3. 生成GIMP的CLI
```bash
/cli-anything ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著AI代理的興起，開發者對於將現有軟體轉換為AI可用的需求日益增加。這個專案的作者擁有豐富的開發經驗，並針對這一需求提供了具體的解決方案。近期AI技術的快速發展，也讓這樣的工具變得更加重要。

## 適合誰使用

**目標受眾**：希望將現有軟體轉換為AI代理可用的開發者和系統管理員。

> [!example] 使用場景
> - 開發者 用它來 為現有應用程式生成CLI，因為這樣可以快速整合進AI工作流程。
> - 系統管理員 用它來 自動化日常任務，因為CLI的結構化設計能簡化操作。
> - 測試工程師 用它來 生成測試用的CLI，因為這樣可以更方便地執行和驗證測試案例。

## 架構分析

專案基於Claude Code插件架構，通過分析應用程式的源代碼，生成相應的CLI。用戶可以透過簡單的命令來生成和使用CLI，實現自動化操作。

## 優缺點分析

> [!success] 優點
> - 能夠快速將現有軟體轉換為AI可用的CLI，提升工作效率。
> - 結構化的命令設計使得複雜操作變得簡單。
> - 輕量級且跨平台，適合多種環境使用。

> [!danger] 缺點
> - 需要依賴Claude Code，限制了使用範圍。
> - 對於某些特定應用，生成的CLI可能不夠完善。
> - 目前支持的應用程式數量仍然有限。

> [!warning] 注意事項
> - 需要Claude Code環境支持。
> - 對於某些複雜應用，可能需要手動調整生成的CLI。
> - 目前支持的應用程式範圍有限。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 218 |
| Open Issues | 10 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 6.3 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@yuh-yang](https://github.com/yuh-yang) | 10 |
> | [@Lin-Jiong-HDU](https://github.com/Lin-Jiong-HDU) | 6 |
> | [@zhangxilong-43](https://github.com/zhangxilong-43) | 2 |
> | [@JasonZhaoWW](https://github.com/JasonZhaoWW) | 1 |
> | [@chaohuang-ai](https://github.com/chaohuang-ai) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新，問題回應迅速。

## README 摘錄

> [!info]- 展開查看原文 README
> &nbsp; CLI-Anything: Making ALL Software Agent-Native
> 
>   Today's Software Serves Humans👨‍💻. Tomorrow's Users will be Agents🤖.
> CLI-Anything: Bridging the Gap Between AI Agents and the World's Software
> 
>   
>   
>   
>   
> 
>   
>   
>   
>   
>   
>   
> 
> **One Command Line**: Make any software agent-ready for OpenClaw, nanobot, Cursor, Claude Code, etc.&nbsp;&nbsp;[**中文文档**](README_CN.md)
> 
>   
> 
>   
> 
> ---
> 
> ## 🤔 Why CLI?
> 
> CLI is the universal interface for both humans and AI agents:
> 
> • **Structured & Composable** - Text commands match LLM format and chain for complex workflows
> 
> • **Lightweight & Universal** - Minimal overhead, works across all systems without dependencies
> 
> • **Self-Describing** - --help flags provide automatic documentation agents can discover
> 
> • **Proven Success** - Claude Code runs thousands of real workflows through CLI daily
> 
> • **Agent-First Design** - Structured JSON output eliminates parsing complexity
> 
> • **Deterministic & Reliable** - Consistent results enable predictable agent behavior
> 
> ## 🚀 Quick Start
> 
> ### Prerequisites
> 
> - **Claude Code** (with plugin support)
> - **Python 3.10+**
> - Target software installed (e.g., GIMP, Blender, LibreOffice, or your own application)
> 
> ### Step 1: Add the Marketplace
> 
> CLI-Anything is distributed as a Claude Code plugin marketplace hosted on GitHub.
> 
> ```bash
> # Add the CLI-Anything marketplace
> /plugin marketplace add HKUDS/CLI-Anything
> ```
> 
> ### Step 2: Install the Plugin
> 
> ```bash
> # Install the cli-anything plugin from the marketplace
> /plugin install cli-anything
> ```
> 
> That's it. The plugin is now available in your Claude Code session.
> 
> ### Step 3: Build a CLI in One Command
> 
> ```bash
> # /cli-anything 
> # Generate a complete CLI for GIMP (all 7 phases)
> /cli-anything ./gimp
> ```
> 
> This runs the full pipeline:
> 1. 🔍 **Analyze** — Scans source code, maps GUI actions to APIs
> 2. 📐 **Design** — Architects command groups, state model, output formats
> 3. 🔨 **Implement** — Builds Click CLI with REPL, JSON output, undo/redo
> 4. 📋 **Plan Tests** — Creates TEST.md with unit + E2E test plans
> 5. 🧪 **Write Tests** — Implements comprehensive test suite
> 6. 📝 **Document** — Updates TEST.md with results
> 7. 📦 **Publish** — Creates `setup.py`, installs to PATH
> 
> ### Step 4: Use the CLI
> 
> ```bash
> # Install to PATH
> cd gimp/agent-harness && pip

## 延伸閱讀

相關概念：[[命令行介面]] · [[自動化工具]] · [[AI代理]] · [[軟體整合]] · [[開發者工具]]

[GitHub](https://github.com/HKUDS/CLI-Anything)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "HKUDS--CLI-Anything"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
