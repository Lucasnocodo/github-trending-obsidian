---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2307
stars_per_day: 1154
forks: 219
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
  - "將所有軟體轉換為可由AI代理使用的命令行工具。"
---

# CLI-Anything

**2.3k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉換為可由AI代理使用的命令行工具。

> [!abstract] 核心創新
> 這個專案能夠將任何軟體轉換為AI代理友好的命令行工具，實現無縫整合。

## 專案簡介

這個專案旨在將各種軟體轉換為AI代理可用的命令行介面，讓AI能夠更有效地與軟體互動。它使用Python編寫，並提供一個簡單的命令來生成CLI，支持多種應用程式。與其他工具相比，CLI-Anything專注於結構化的命令格式，讓AI能夠輕鬆解析和執行複雜的工作流程。使用者可以快速生成CLI，並且這些CLI具有自描述性，方便AI代理理解和使用。這個專案的使用效果顯著，能夠簡化AI與軟體的互動過程，適合需要將現有軟體轉換為AI友好的工具的開發者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 將任何軟體轉換為AI代理可用的命令行工具。
- 支持多種應用程式，如GIMP、Blender等。
- 生成的CLI具有自描述性，方便AI理解。
- 提供結構化的JSON輸出，簡化解析過程。
- 支持複雜工作流程的組合和執行。

## 快速開始

1. 安裝CLI-Anything插件
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝CLI-Anything插件
```bash
/plugin install cli-anything
```
3. 生成CLI
```bash
/cli-anything ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著AI代理的興起，對於能夠與各種軟體無縫整合的需求增加，這個專案正好切中這一需求。作者團隊背景強大，並且專案的實用性和創新性吸引了大量開發者的關注，特別是在AI應用快速增長的當下。

## 適合誰使用

**目標受眾**：軟體開發者、系統管理員及測試工程師。

> [!example] 使用場景
> - 開發者用它來將現有的桌面應用轉換為AI可操作的CLI，因為能夠簡化AI的操作流程。
> - 系統管理員用它來自動化日常任務，因為可以快速生成命令行工具來執行複雜的系統操作。
> - 測試工程師用它來為應用程式生成測試用CLI，因為能夠自動化測試流程並提高效率。

## 架構分析

專案採用插件架構，通過Claude Code的市場進行分發，使用者可以輕鬆安裝並生成CLI。資料流是用戶請求 → CLI生成 → AI代理執行命令。

## 優缺點分析

> [!success] 優點
> - 簡化AI與軟體的互動過程，提高開發效率。
> - 支持多種應用程式，靈活性高。
> - 結構化的命令格式，方便AI解析和執行。

> [!danger] 缺點
> - 目前僅支持特定應用，擴展性有限。
> - 需要依賴Claude Code，增加了使用門檻。
> - 生成的CLI可能需要手動調整以符合特定需求。

> [!warning] 注意事項
> - 目前僅支持特定的應用程式，其他應用可能需要自定義。
> - 需要安裝Claude Code以支持插件功能。
> - 生成的CLI可能需要進一步調整以符合特定需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| AutoCLI | 專注於自動生成CLI，但不具備AI代理友好的結構。 |
| CommandLineAI | 提供CLI生成，但缺乏多應用支持的靈活性。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 219 |
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

**社群活躍度**：每週有穩定的提交，社群活躍度高。

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

相關概念：[[命令行介面]] · [[AI代理]] · [[自動化工具]] · [[軟體整合]] · [[開發效率提升]]

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
