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
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "nanoAgent"
  - "sanbuphy/nanoAgent"
  - "簡單易用的 AI agent，能夠執行系統命令和文件操作。"
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 簡單易用的 AI agent，能夠執行系統命令和文件操作。

> [!abstract] 核心創新
> 這個專案提供了一個極簡的 AI agent 實作，僅需約 100 行代碼即可運行。

## 專案簡介

這個專案提供了一個簡單的 AI agent 實作，能夠透過 OpenAI 的功能調用來執行 bash 命令和文件操作。它的核心是一個循環，接收用戶任務後決定使用哪些工具來完成任務，並返回結果。與其他 AI agent 工具相比，這個專案的代碼量極小，僅需約 100 行，適合快速上手和實驗。實際使用中，這個 agent 能夠靈活執行多種系統操作，但對於複雜任務的支持可能有限。整體來說，這是一個輕量級的解決方案，適合需要快速實現的開發者。

**技術棧**：`Python`

## 重點功能

- 執行 bash 命令，能夠進行系統操作。
- 讀取和寫入文件，簡化文件管理。
- 使用 OpenAI 的功能調用，靈活應對多種任務。
- 簡單的代碼實現，易於理解和修改。
- 支持錯誤處理，提升穩定性。

## 快速開始

1. 安裝依賴
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
> 作者的背景使得這個專案能夠快速響應開發者對於簡單 AI agent 的需求，並且其簡潔的設計理念吸引了許多對於快速實驗感興趣的開發者。隨著 AI 技術的普及，對於簡單易用的工具需求也在增長，這使得該專案在近期受到關注。

## 適合誰使用

**目標受眾**：需要簡單 AI agent 來執行系統任務的開發者。

> [!example] 使用場景
> - 系統管理員 用它來 自動化日常系統任務，因為它能夠執行 bash 命令。
> - 開發者 用它來 快速創建和修改文件，因為它簡化了文件操作的流程。
> - 測試人員 用它來 進行簡單的測試腳本執行，因為它能夠靈活地調用多種工具。

## 架構分析

專案的架構非常簡單，主要由一個循環組成，接收用戶輸入後決定使用的工具並執行，然後返回結果。

## 優缺點分析

> [!success] 優點
> - 代碼簡潔，易於理解和修改。
> - 能夠靈活執行多種系統操作。
> - 快速上手，適合初學者。

> [!danger] 缺點
> - 功能較為基礎，對於複雜任務支持有限。
> - 需要正確配置環境變數，對新手可能有一定難度。

> [!warning] 注意事項
> - 僅支援基本的 bash 命令，對於複雜任務支持有限。
> - 需要正確配置 OpenAI API 才能運行。

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
> for _ in range(max_iterations):
>     response = client.chat.completions.create(model=model, messages=messages, tools=tools)
>     if not response.choices[0].message.tool_calls:
>         return response.choices[0].message.content
> 
>     # Execute tool calls
>     for tool_call in response.choices[0].message.tool_calls:
>         result = available_functions[tool_call.function.name](**args)
>         messages.append({"role": "tool", "content": result})
> ```
> 
> The core is just a loop: call model → execute tools → repeat.
> 
> Recent hardening keeps the loop running even when a tool call contains malformed JSON arguments or references an unknown tool; those cases are returned to the model as explicit tool errors instead of crashing the agent.
> 
> ## capabilities
> 
> - `execute_bash`: Run any bash command
> - `read_file`: Read file contents
> - `write_file`: Write content to files
> 
> ## examples
> 
> ```bash
> # System operations
> python agent.py "what's my current directory and what files are in it?"
> 
> # File operations
> pytho

## 延伸閱讀

相關概念：[[AI agent]] · [[功能調用]] · [[系統自動化]]

[GitHub](https://github.com/sanbuphy/nanoAgent)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "sanbuphy--nanoAgent"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
