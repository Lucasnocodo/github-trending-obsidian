---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2277
stars_per_day: 1139
forks: 215
open_issues: 10
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - python
aliases:
  - "CLI-Anything"
  - "HKUDS/CLI-Anything"
  - "將所有軟體轉換為可由 AI 代理使用的命令行介面。"
---

# CLI-Anything

**2.3k** stars · **1.1k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 將所有軟體轉換為可由 AI 代理使用的命令行介面。

> [!abstract] 核心創新
> 提供了一個統一的命令行介面，讓所有軟體都能被 AI 代理操作。

## 專案簡介

CLI-Anything 專注於將各種軟體轉換為 AI 代理可操作的命令行介面，讓人類和 AI 代理都能輕鬆使用。它通過分析軟體的源碼，將 GUI 操作映射到 API，並生成結構化的命令行介面，這樣 AI 代理就能夠以一致的方式執行任務。與其他工具相比，CLI-Anything 提供了更高的可組合性和可擴展性，並且不需要額外的依賴。使用者可以快速生成 CLI，並且支持多種軟體，這對於開發者來說是一個強大的工具。雖然目前仍在開發中，但其潛力巨大，適合希望將現有應用轉換為 AI 友好的工具的開發者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 將任何軟體轉換為 AI 代理可操作的命令行介面。
- 支持多種軟體，無需額外依賴。
- 提供結構化的 JSON 輸出，簡化解析過程。
- 自動生成文檔，方便使用者查閱。
- 支持多種複雜工作流的組合。

## 快速開始

1. 添加 CLI-Anything 市場
```bash
/plugin marketplace add HKUDS/CLI-Anything
```
2. 安裝 CLI-Anything 插件
```bash
/plugin install cli-anything
```
3. 生成 GIMP 的 CLI
```bash
/cli-anything ./gimp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的創始團隊在 AI 和開發工具領域有豐富的經驗，並且隨著 AI 技術的迅速發展，對於將傳統軟體轉換為 AI 友好的需求日益增加，這使得 CLI-Anything 成為一個熱門選擇。

## 適合誰使用

**目標受眾**：希望將傳統軟體轉換為 AI 友好的開發者和研究人員。

> [!example] 使用場景
> - 開發者用它來將現有應用轉換為 AI 代理可操作的命令行介面，因為這樣可以提升工作效率。
> - AI 研究人員用它來快速生成 CLI，因為這樣可以簡化測試和實驗流程。
> - 系統管理員用它來管理多個應用，因為統一的命令行介面可以減少學習成本。

## 架構分析

CLI-Anything 的架構是基於命令行的插件市場，通過分析目標軟體的源碼來生成可操作的 CLI，並提供結構化的輸出格式。

## 優缺點分析

> [!success] 優點
> - 支持多種軟體，靈活性高。
> - 降低了 AI 代理與軟體之間的操作複雜性。
> - 自動生成文檔，方便使用者查閱。

> [!danger] 缺點
> - 需要安裝目標軟體，使用前需進行配置。
> - 目前功能仍在擴展中，可能不夠完善。
> - 對於某些軟體的支持可能有限。

> [!warning] 注意事項
> - 需要安裝目標軟體才能使用。
> - 目前仍在開發中，可能存在不穩定的情況。
> - 對於某些複雜的 GUI 操作，映射可能不完全。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 215 |
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

相關概念：[[命令行介面]] · [[AI 代理]] · [[自動化工具]]

[GitHub](https://github.com/HKUDS/CLI-Anything)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.2k stars
