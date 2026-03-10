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
  - "簡單的 AI agent 實作，能夠執行系統命令和文件操作。"
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 簡單的 AI agent 實作，能夠執行系統命令和文件操作。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的 AI agent 實作，能夠輕鬆執行系統命令和文件操作。

## 專案簡介

這是一個簡化的 AI agent 實作，能夠透過 OpenAI 的功能調用來執行 bash 命令、讀取和寫入文件。核心邏輯是透過一個循環來接收用戶任務，決定使用哪些工具來執行，並返回結果。與其他複雜的 agent 框架相比，這個專案的代碼量非常少，約 100 行，適合快速上手和學習。使用者可以輕鬆地在本地環境中執行各種系統操作，並且不需要繁瑣的設置。這個專案的限制在於功能較為基礎，適合於簡單的任務自動化，但不適合處理複雜的工作流。整體來說，這是一個值得嘗試的工具，特別是對於初學者或需要快速解決簡單任務的開發者。

**技術棧**：`Python`

## 重點功能

- 執行任意 bash 命令。
- 讀取文件內容。
- 寫入文件內容。
- 簡單的功能調用架構，易於理解。
- 支持多平台環境。

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
> 作者提供了一個簡單明瞭的實作，讓開發者能夠快速理解 AI agent 的運作方式。隨著 AI 技術的普及，對於簡單易用的工具需求上升，這個專案正好滿足了這一需求。

## 適合誰使用

**目標受眾**：對 AI agent 有興趣的開發者和系統管理員。

> [!example] 使用場景
> - 系統管理員 用它來 自動化執行系統命令，因為這樣可以節省時間和精力。
> - 開發者 用它來 讀取和寫入文件，因為這樣可以簡化日常的開發任務。
> - 測試工程師 用它來 快速檢查文件內容，因為這樣可以提高測試效率。

## 架構分析

該專案的架構非常簡單，主要透過一個循環來接收用戶任務並執行相應的工具，直到任務完成。

## 優缺點分析

> [!success] 優點
> - 代碼簡潔，易於理解和修改。
> - 能夠快速執行簡單的系統任務。
> - 支持多種操作系統。

> [!danger] 缺點
> - 功能較為基礎，無法處理複雜的工作流。
> - 依賴 OpenAI API，可能會有使用限制。

> [!warning] 注意事項
> - 功能相對基礎，無法處理複雜任務。
> - 需要 OpenAI API 金鑰才能運行。

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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[機器學習]]

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

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
