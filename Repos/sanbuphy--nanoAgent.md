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
pushed_at: 2026-03-06
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
  - 開發工具
  - python
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的 Python 實作來建立能與系統互動的 AI agent。

> [!abstract] 核心創新
> 這個專案提供了一個最簡單的 AI agent 實作，能與系統互動。

## 專案簡介

這個專案提供了一個簡單的 AI agent 實作，能夠執行 bash 命令、讀取和寫入文件。它利用 OpenAI 的功能調用來實現這些操作，並且安裝和配置相對簡單。與其他複雜的 AI agent 框架相比，這個專案更輕量，適合快速開發和測試。這是一個值得嘗試的工具，特別是對於需要快速實現 AI agent 功能的開發者。

**技術棧**：`Python`

## 重點功能

- 能夠執行 bash 命令，讀取和寫入文件。
- 使用 OpenAI 的功能調用來實現操作。
- 簡單的安裝和配置過程。

## 快速開始

1. 安裝所需的 Python 套件
```bash
pip install -r requirements.txt
```
2. 設置環境變數
```bash
export OPENAI_API_KEY='your-key-here'
```
3. 執行 agent
```bash
python agent.py 'list all python files in current directory'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者對於簡化 AI agent 的需求增加，這個專案正好提供了簡單的解決方案；作者的背景使其能夠快速實現功能。

## 適合誰使用

**目標受眾**：需要快速實現 AI agent 功能的開發者和學生。

> [!example] 使用場景
> - [系統管理員] 用它來 [自動化日常任務]，因為 [能夠輕鬆執行命令和操作文件]。
> - [開發者] 用它來 [快速測試 AI agent 功能]，因為 [安裝和使用都非常簡單]。
> - [學生] 用它來 [學習 AI agent 的基本概念]，因為 [代碼簡單易懂，適合入門]。

> [!warning] 注意事項
> 需要 OpenAI API 金鑰才能運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 25 |
| Open Issues | 0 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 31 KB |

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

相關概念：[[AI agent]] · [[功能調用]] · [[自動化]]

[GitHub](https://github.com/sanbuphy/nanoAgent)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
