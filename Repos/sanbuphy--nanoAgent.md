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
  - "提供一個簡單的方式來構建能與系統互動的 AI agent，解決自動化操作的需求。"
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的方式來構建能與系統互動的 AI agent，解決自動化操作的需求。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的 AI agent 實作，僅需約 100 行代碼即可完成基本功能。

## 專案簡介

這個專案是一個簡單的 AI agent 實作，使用 OpenAI 的功能調用來執行 bash 命令、讀取和寫入文件。它的核心是透過一個循環來接收用戶任務，決定使用哪些工具來執行，並返回結果。與其他複雜的 agent 框架相比，這個專案的代碼量僅有約 100 行，適合快速上手和實驗。雖然功能相對簡單，但它的穩定性和錯誤處理能力使其在實際操作中表現良好。這個專案特別適合需要快速構建和測試的開發者，尤其是在自動化任務方面。

**技術棧**：`Python`

## 重點功能

- 執行任意 bash 命令。
- 讀取文件內容。
- 寫入內容到文件。
- 簡單的錯誤處理機制，避免崩潰。
- 使用 OpenAI 的功能調用進行任務執行。

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
> 作者的簡單實作吸引了許多開發者的關注，因為它提供了一個快速上手的方式來構建 AI agent。隨著自動化需求的增加，這種簡單而有效的解決方案正好切合市場需求。這個專案的推出時機恰到好處，讓許多開發者能夠快速實現自動化操作。

## 適合誰使用

**目標受眾**：需要快速構建自動化任務的開發者。

> [!example] 使用場景
> - 系統管理員 用它來 自動化執行系統命令，因為它能快速處理重複性任務。
> - 開發者 用它來 測試和調試代碼，因為它能快速讀取和寫入文件。
> - 數據科學家 用它來 自動化數據處理流程，因為它能與系統命令無縫整合。

## 架構分析

這個專案的架構相對簡單，主要透過一個循環來接收任務、執行工具並返回結果，整體流程清晰易懂。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手。
> - 穩定性高，能夠處理常見錯誤。
> - 適合快速構建和測試自動化任務。

> [!danger] 缺點
> - 功能較為簡單，無法處理複雜任務。
> - 僅支援 bash 命令，限制了使用範圍。
> - 需要 OpenAI API 金鑰，增加了使用門檻。

> [!warning] 注意事項
> - 僅支援 bash 命令，對其他操作系統可能不適用。
> - 需要 OpenAI API 金鑰才能運行。
> - 功能相對簡單，可能不適合複雜任務。

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

相關概念：[[自動化]] · [[AI agent]] · [[功能調用]]

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
