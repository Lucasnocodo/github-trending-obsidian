---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2317
stars_per_day: 1159
forks: 220
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
  - "將任何軟體轉換為AI代理可用的命令行工具。"
---

# CLI-Anything

**2.3k** stars · **1.2k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將任何軟體轉換為AI代理可用的命令行工具。

> [!abstract] 核心創新
> 這個專案能將任何軟體轉換為AI代理可用的命令行工具，實現無縫整合。

## 專案簡介

這個專案旨在將所有軟體轉換為AI代理可用的命令行介面，讓AI能夠更有效地與各種應用互動。它通過分析軟體源碼，將GUI操作映射到API，生成結構化的CLI命令。與其他類似工具相比，CLI-Anything提供了自動化的測試和文檔生成，讓開發者能夠快速建立可用的CLI。實際使用中，這個工具能夠大幅減少開發時間，但仍需依賴於目標軟體的可用性和API設計。這是一個創新的專案，適合希望提升軟體與AI整合的開發者使用。

**技術棧**：`Python` · `Shell`

## 重點功能

- 自動生成任何軟體的命令行介面，支持多種應用。
- 提供完整的測試計畫和文檔生成，提升開發效率。
- 支持多種平台，無需額外依賴。
- 結構化的JSON輸出，簡化AI解析過程。
- 可與Claude Code等AI代理無縫整合。

## 快速開始

1. 安裝CLI-Anything插件
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 從市場安裝插件
```bash
/plugin install cli-anything
```
3. 生成GIMP的CLI
```bash
/cli-anything ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由多位活躍的開發者共同維護，背景強大，切中AI代理與現有軟體整合的需求。隨著AI技術的普及，對於將傳統軟體轉型為AI友好的需求日益增加，這使得專案在近期受到關注。

## 適合誰使用

**目標受眾**：希望將現有軟體轉換為AI代理可用的開發者和工程師。

> [!example] 使用場景
> - 開發者用它來快速生成GIMP的CLI，因為它能自動映射GUI操作到命令行。
> - 測試工程師用它來建立自動化測試框架，因為它能生成完整的測試計畫和文檔。
> - 產品經理用它來整合多個應用，因為它簡化了不同軟體之間的交互流程。

## 架構分析

專案基於插件架構，通過Claude Code進行擴展，數據流從用戶命令經過分析生成CLI，最終返回結構化結果。

## 優缺點分析

> [!success] 優點
> - 能快速將現有軟體轉換為AI友好的CLI，提升整合效率。
> - 自動生成測試和文檔，減少手動工作量。
> - 支持多種平台，無需額外依賴。

> [!danger] 缺點
> - 僅支持特定版本的AI代理，限制使用範圍。
> - 生成的CLI可能需要手動調整，增加工作量。
> - 對於複雜的GUI應用，映射可能不完全準確。

> [!warning] 注意事項
> - 僅支持特定版本的Claude Code。
> - 需要目標軟體的源碼訪問權限。
> - 生成的CLI可能需要手動調整以符合特定需求。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 220 |
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

**社群活躍度**：專案活躍，持續收到更新和貢獻，社群互動良好。

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

相關概念：[[命令行介面]] · [[AI代理]] · [[自動化測試]] · [[軟體整合]] · [[開發工具]]

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
