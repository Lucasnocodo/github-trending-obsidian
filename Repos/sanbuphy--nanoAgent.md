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
month: "2026-03"
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
  - "提供一個簡單的方式來建立能與系統互動的 AI agent。"
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的方式來建立能與系統互動的 AI agent。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (49 stars/day)
> **適合** 需要快速構建能執行系統命令的 AI agent 的獨立開發者。
> **一句話重點** nanoAgent 讓開發者能夠以最簡單的方式構建能執行系統命令的 AI agent，降低了進入門檻。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 OpenAI 的功能調用與系統命令執行結合，提供一個簡單的 AI agent 實作。

## 專案簡介

nanoAgent 是一個輕量級的 AI agent 實作，利用 OpenAI 的功能調用來執行 bash 命令、讀取和寫入文件。它的工作流程為：接收用戶任務 → 決定使用的工具 → 執行工具 → 返回結果，整個過程在約 100 行 Python 代碼中完成。技術上，這個 agent 使用了 OpenAI 的 API 來進行交互，並且能夠處理錯誤情況而不會崩潰，這使得它在穩定性上表現良好。與其他類似工具相比，nanoAgent 的簡單性和可擴展性是其主要優勢，因為它不需要複雜的配置或依賴。實際使用中，這個 agent 能夠快速執行系統操作和文件操作，但對於更複雜的任務可能需要額外的邏輯處理。這個專案目前處於穩定階段，適合小型團隊或獨立開發者使用。建議在需要快速執行簡單系統任務時使用，但對於需要高階邏輯的應用則不太適合。

**技術棧**：`Python 3.8` · `OpenAI API`

## 重點功能

- 執行 bash 命令 — 透過 `execute_bash` 函數執行任意 bash 命令。
- 讀取文件內容 — 使用 `read_file` 函數讀取指定文件的內容。
- 寫入文件 — 使用 `write_file` 函數將內容寫入指定文件。
- 簡單的 API 調用 — 只需幾行代碼即可開始使用，無需複雜的配置。
- 錯誤處理 — 能夠處理錯誤情況而不會崩潰，保持 agent 運行。

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
python agent.py "list all python files in current directory"
```

## 程式碼範例

python
# Define tools

tools = [{"type": "function", "function": {...}}]

# Agent loop
for _ in range(max_iterations):
    response = client.chat.completions.create(model=model, messages=messages, tools=tools)
    if not response.choices[0].message.tool_calls:
        return response.choices[0].message.content

    # Execute tool calls
    for tool_call in response.choices[0].message.tool_calls:
        result = available_functions[tool_call.function.name](**args)
        messages.append({"role": "tool", "content": result})

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 sanbuphy 具備 AI 和系統開發的背景，nanoAgent 切中開發者對於簡化系統操作的需求。隨著 OpenAI API 的普及，這樣的工具在開發者中變得越來越受歡迎，特別是在需要快速原型的情況下。

## 適合誰使用

**目標受眾**：需要快速構建能執行系統命令的 AI agent 的獨立開發者。

> [!example] 使用場景
> - 後端工程師用它來快速執行 bash 命令，因為這樣可以節省手動操作的時間，並提高工作效率。
> - 資料科學家用它來自動讀取和寫入文件，因為這樣可以簡化數據處理流程，減少錯誤。
> - 獨立開發者用它來快速測試系統命令，因為它的簡單性讓他們能夠專注於開發而非配置。

## 架構分析

nanoAgent 採用單體架構，核心資料流為：用戶輸入 → agent 處理 → 執行工具 → 返回結果。關鍵技術決策是使用 OpenAI API 進行交互，並在 agent 中實現基本的錯誤處理。專案目錄結構簡單，主要檔案為 `agent.py`，負責執行主要邏輯。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手，適合初學者。
> - 輕量級實作，代碼量少，便於維護。
> - 支持多種系統操作，靈活性高。

> [!danger] 缺點
> - 功能較為基礎，不適合複雜任務。
> - 依賴於 OpenAI API，無法離線使用。
> - 缺乏 GUI 支持，僅限於命令行操作。

> [!warning] 注意事項
> - 僅支援基本的 bash 命令，對於複雜的系統操作可能無法滿足需求。
> - 需要 OpenAI API 的有效金鑰，無法離線使用。
> - 不支援 Windows 的 GUI 操作，僅限於命令行。
> - 對於大型任務，可能需要額外的邏輯處理來管理狀態。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openai--openai-python\|openai/openai-python]] | 這是一個更全面的 OpenAI API 客戶端，支持多種功能，但不專注於系統命令的執行。 |
| [[jerryjliu--gpt_index\|jerryjliu/gpt_index]] | 這個工具專注於構建索引和查詢功能，適合需要處理大量數據的應用，而 nanoAgent 更適合簡單的系統操作。 |

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
> python agent.py "create a python script that prints hello world"
> 
> # Combined tasks
> python agent.py "find all .py files and count total lines of code"
> ```
> 
> ---
> 
> ## license
> 
> MIT
> 
> ────────────────────────────────────────
> 
> ⏺ *Like a single seed that grows into a forest, one file becomes infinite possibilities.*

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[openai--openai-python|openai/openai-python]] · [[jerryjliu--gpt_index|jerryjliu/gpt_index]]

[GitHub](https://github.com/sanbuphy/nanoAgent)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "sanbuphy--nanoAgent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "sanbuphy--nanoAgent"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
