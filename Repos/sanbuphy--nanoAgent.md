---
repo: sanbuphy/nanoAgent
url: https://github.com/sanbuphy/nanoAgent
owner: sanbuphy
owner_type: User
language: Python
license: MIT
description: "If you can read 100 lines of Python, you understand agents."
homepage: ""
stars: 340
stars_per_day: 49
forks: 25
open_issues: 0
created: 2026-03-03
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - python
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

> [!summary] 一句話摘要
> 提供一個簡單的方式來建立能與系統互動的 AI 代理。

## 專案簡介

這個專案讓使用者能夠輕鬆建立一個簡單的 AI 代理，能夠執行 bash 命令和讀寫文件。它的核心在於使用 OpenAI 的功能調用，讓開發者能夠快速上手。與其他複雜的 AI 代理框架相比，nanoAgent 的簡單性和易用性使其特別適合初學者和小型專案。這是一個值得一試的工具，特別是對於想要學習 AI 代理開發的人。

## 重點功能

- 簡單的 Python 實現，容易上手。
- 能夠執行 bash 命令和讀寫文件。
- 支持 OpenAI 的功能調用，擴展性強。
- 提供簡單的安裝和設置步驟。
- 適合用於學習和小型專案。

## 快速開始

安裝依賴：pip install -r requirements.txt。,運行代理：python agent.py 'list all python files in current directory'。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者針對初學者的需求設計了這個簡單的代理框架，讓更多人能夠進入 AI 開發領域。隨著 AI 技術的普及，對於簡單易用的工具需求也在增加。

## 適合誰使用

**目標受眾**：對 AI 代理開發感興趣的初學者和小型開發團隊。

> [!example] 使用場景
> - 學生用它來學習如何建立 AI 代理，因為只需簡單的 Python 代碼就能開始。
> - 開發者用它來快速測試 AI 功能，因為能夠執行簡單的命令並獲取結果。
> - 小型團隊用它來自動化日常任務，因為可以輕鬆編寫腳本來處理重複性工作。

> [!warning] 注意事項
> 功能相對簡單，可能不適合大型專案或複雜的需求。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 340 |
| Forks | 25 |
| Issues | 0 |
| 建立日期 | 2026-03-03 |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sanbuphy](https://github.com/sanbuphy) | 7 |
> | [@Gujiassh](https://github.com/Gujiassh) | 2 |
> | [@leesf](https://github.com/leesf) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # nanoAgent
> 
> [中文](./README_CN.md) | English
> 
> > *"The question is not what you look at, but what you see."* — Henry David Thoreau
> 
> The simplest way to build an agent that can interact with your system.
> 
> A minimal implementation of an AI agent using OpenAI's function calling. The agent can execute bash commands, read files, and write files.
> 
> ## install
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> Set your environment variables:
> 
> **macOS/Linux:**
> ```bash
> export OPENAI_API_KEY='your-key-here'
> export OPENAI_BASE_URL='https://api.openai.com/v1'  # optional
> export OPENAI_MODEL='gpt-4o-mini'  # optional
> ```
> 
> **Windows (PowerShell):**
> ```powershell
> $env:OPENAI_API_KEY='your-key-here'
> $env:OPENAI_BASE_URL='https://api.openai.com/v1'  # optional
> $env:OPENAI_MODEL='gpt-4o-mini'  # optional
> ```
> 
> **Windows (CMD):**
> ```cmd
> set OPENAI_API_KEY=your-key-here
> set OPENAI_BASE_URL=https://api.openai.com/v1
> set OPENAI_MODEL=gpt-4o-mini
> ```
> 
> ## quick start
> 
> ```bash
> python agent.py "list all python files in current directory"
> python agent.py "create a file called hello.txt with 'Hello World'"
> python agent.py "read the contents of README.md"
> ```
> 
> ## how it works
> 
> The agent uses OpenAI's function calling to:
> 1. Receive a task from the user
> 2. Decide which tools to use (bash, read_file, write_file)
> 3. Execute the tools
> 4. Return results to the model
> 5. Repeat until task is complete
> 
> That's it. ~100 lines of code.
> 
> ```python
> # Define tools
> tools = [{"type": "function", "function": {...}}]
> 
> # Agent loop

## 延伸閱讀

相關概念：#AI_代理 · #功能調用 · #自動化

[GitHub](https://github.com/sanbuphy/nanoAgent)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
