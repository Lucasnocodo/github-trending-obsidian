---
repo: HKUDS/CLI-Anything
url: https://github.com/HKUDS/CLI-Anything
owner: HKUDS
owner_type: Organization
language: Python
license: N/A
description: "CLI-Anything: Making ALL Software Agent-Native"
homepage: ""
stars: 2297
stars_per_day: 1149
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
  - "將所有軟體轉換為 AI 代理可用的命令行介面。"
---

# CLI-Anything

**2.3k** stars · **1.1k** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將所有軟體轉換為 AI 代理可用的命令行介面。

> [!abstract] 核心創新
> 這個專案能夠自動將任何軟體轉換為 AI 代理可用的命令行介面。

## 專案簡介

CLI-Anything 專案旨在將各種軟體轉換為 AI 代理可用的命令行介面，使得 AI 能夠更有效地與軟體互動。它通過分析軟體源碼，將 GUI 操作映射到 API，並生成結構化的命令行介面。與其他 CLI 工具相比，CLI-Anything 提供了自動化的 CLI 生成流程，能夠快速構建完整的命令行介面，並提供 JSON 輸出，簡化了 AI 代理的使用。這個工具的使用效果顯著，能夠提高 AI 代理的操作效率，但仍需依賴於目標軟體的可用性和兼容性。整體來看，這是一個創新的工具，特別適合需要將現有軟體轉換為 AI 代理可用的開發者。

**技術棧**：`Python` · `Shell`

## 重點功能

- 自動生成命令行介面，無需手動編碼。
- 支持多種軟體，包括 GIMP、Blender 等。
- 提供結構化的 JSON 輸出，簡化 AI 代理的使用。
- 能夠分析源碼並映射 GUI 操作到 API。
- 支持完整的測試計劃生成。

## 快速開始

1. 安裝 CLI-Anything 插件
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
> 這個專案由一群熱衷於 AI 和開發工具的開發者創建，正好滿足了市場對於 AI 代理與現有軟體整合的需求。隨著 AI 技術的發展，對於能夠無縫整合的工具需求日益增加，這使得 CLI-Anything 成為一個熱門選擇。

## 適合誰使用

**目標受眾**：開發者、系統管理員及需要自動化的技術專業人士。

> [!example] 使用場景
> - 開發者 用它來 將現有的桌面應用轉換為 AI 代理可用的命令行工具，因為這能提高開發效率。
> - 系統管理員 用它來 自動化日常任務，因為這能讓 AI 代理執行複雜的操作。
> - 測試工程師 用它來 生成完整的測試計劃，因為這能簡化測試流程並提高準確性。

## 架構分析

專案採用插件架構，通過命令行指令進行安裝和使用，並能夠自動生成 CLI，簡化開發流程。

## 優缺點分析

> [!success] 優點
> - 能夠快速將現有軟體轉換為 AI 代理可用的工具。
> - 自動化流程減少了手動編碼的需求。
> - 提供結構化的輸出，方便 AI 代理使用。

> [!danger] 缺點
> - 僅支持特定版本的目標軟體，兼容性有限。
> - 需要額外的環境設置，增加安裝複雜度。
> - 生成的 CLI 可能需要進一步調整以符合特定需求。

> [!warning] 注意事項
> - 僅支持特定版本的目標軟體。
> - 需要安裝 Claude Code 環境。
> - 生成的 CLI 可能需要進一步調整以符合特定需求。

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

**社群活躍度**：社群活躍，定期更新和改進插件功能。

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

相關概念：[[命令行介面]] · [[自動化測試]] · [[AI 代理]] · [[軟體開發]] · [[開源工具]]

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
