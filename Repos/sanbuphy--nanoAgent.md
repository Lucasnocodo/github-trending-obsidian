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
> **適合** 希望快速建立能與系統互動的 AI agent 的獨立開發者。
> **一句話重點** nanoAgent 的設計理念在於簡化 AI agent 的開發流程，使得開發者能夠更專注於任務本身，而不是底層實作細節。

> [!abstract] 核心創新
> 這個專案提供了一個簡單而有效的方式來構建能與系統互動的 AI agent。

## 專案簡介

nanoAgent 是一個輕量級的 AI agent 實作，利用 OpenAI 的功能調用來執行任務。用戶可以透過簡單的指令，讓 agent 執行 bash 命令、讀取和寫入文件，整個過程僅需約 100 行 Python 代碼。它的運作流程是：接收用戶任務 → 決定使用的工具 → 執行工具 → 返回結果，並重複直到任務完成。這個專案的技術基礎是 OpenAI 的 API，並且有針對工具調用的錯誤處理機制，能夠在遇到無效的 JSON 參數時不會崩潰。與其他 AI agent 相比，nanoAgent 的優勢在於其簡單性和可擴展性，適合快速開發和測試。實際使用中，這個 agent 能夠有效執行多種系統操作，但仍然依賴於 OpenAI 的 API，這可能會影響其性能和可用性。這個專案目前處於 alpha 階段，適合小型團隊或個人開發者使用。若需要快速原型或自動化簡單任務，這個工具非常合適；但若要處理更複雜的業務邏輯，則可能需要更強大的框架。

**技術棧**：`Python 3.8+` · `OpenAI API`

## 重點功能

- 執行 bash 命令 — 使用 `execute_bash` 功能執行任意 bash 指令。
- 讀取文件內容 — 使用 `read_file` 功能讀取指定文件的內容。
- 寫入文件 — 使用 `write_file` 功能將內容寫入指定文件。
- 簡單的 API 調用 — 透過 `python agent.py '指令'` 來執行任務，無需複雜配置。
- 錯誤處理機制 — 能夠處理無效的工具調用，避免 agent 崩潰。

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

## 程式碼範例

python
# 定義工具

tools = [{"type": "function", "function": {...}}]

# Agent 循環
for _ in range(max_iterations):
    response = client.chat.completions.create(model=model, messages=messages, tools=tools)
    if not response.choices[0].message.tool_calls:
        return response.choices[0].message.content

    # 執行工具調用
    for tool_call in response.choices[0].message.tool_calls:
        result = available_functions[tool_call.function.name](**args)
        messages.append({"role": "tool", "content": result})

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 sanbuphy 和其他貢獻者在開源社群中有一定的知名度，這個專案直接滿足了開發者對簡單 AI agent 的需求。隨著 OpenAI API 的普及，越來越多的開發者希望能快速構建與系統互動的工具，這使得 nanoAgent 在這個時候特別受歡迎。

## 適合誰使用

**目標受眾**：希望快速建立能與系統互動的 AI agent 的獨立開發者。

> [!example] 使用場景
> - 系統管理員用它來自動化日常系統檢查，因為可以透過簡單指令快速獲取系統狀態。
> - 資料科學家用它來讀取和處理數據文件，因為能夠直接在命令行中執行文件操作，省去繁瑣的步驟。
> - 開發者用它來快速生成和測試腳本，因為只需簡單的自然語言指令即可完成多步驟任務。

## 架構分析

這是一個單體架構的 CLI 工具，核心資料流為：用戶輸入 → agent 處理 → 執行工具 → 返回結果。關鍵技術決策是使用 OpenAI 的功能調用來簡化 agent 的設計。專案目錄結構中，主要的執行檔為 `agent.py`，並且有一個 `requirements.txt` 文件來管理依賴。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速原型開發。
> - 具備基本的錯誤處理機制，增強穩定性。
> - 能夠執行多種系統操作，靈活性高。

> [!danger] 缺點
> - 功能較為基礎，無法處理複雜任務。
> - 依賴外部 API，可能會受到調用限制。
> - 目前僅支援 Python，對其他語言的開發者不友好。

> [!warning] 注意事項
> - 依賴 OpenAI API，可能會受到調用限制。
> - 不支持複雜的業務邏輯處理，適合簡單任務。
> - 目前僅支援 Python，無法直接在其他語言環境中使用。

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

相關概念：[[Agent 框架]] · [[自動化測試]] · [[CLI/TUI]]

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
