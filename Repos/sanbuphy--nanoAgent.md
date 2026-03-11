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
use_case: "提供一個簡單的方式來建立可以與系統互動的 AI agent。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "nanoAgent"
  - "sanbuphy/nanoAgent"
  - "提供一個簡單的方式來建立可以與系統互動的 AI agent。"
---

# nanoAgent

**340** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的方式來建立可以與系統互動的 AI agent。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (49 stars/day)
> **適合** 希望快速開發自動化任務的獨立開發者或小型團隊。
> **一句話重點** 這個專案展示了如何用少量代碼實現強大的功能，讓開發者能夠輕鬆建立 AI agent。

> [!abstract] 核心創新
> 這個專案的核心創新在於簡化了 AI agent 的開發流程，讓開發者能夠用自然語言指令輕鬆執行系統任務。

## 專案簡介

這個專案讓你能夠建立一個簡單的 AI agent，能夠執行 bash 命令、讀取和寫入文件。用戶只需輸入指令，agent 會自動決定使用哪些工具來完成任務，並重複這個過程直到任務完成。它使用 OpenAI 的功能調用來實現這一點，並且核心邏輯僅需約 100 行 Python 代碼。相較於其他類似工具，nanoAgent 的簡潔性和易用性使它特別適合快速開發和原型設計。這個 agent 能夠處理多種任務，包括系統操作和文件操作，並且能夠處理錯誤情況而不會崩潰。它的效能在於能夠快速響應用戶的請求，且不需要複雜的設置。這個專案目前處於穩定階段，適合小型團隊或個人開發者使用。對於需要快速實現自動化任務的開發者來說，這是一個值得考慮的選擇，而對於需要更高自定義的場景，可能需要尋找其他解決方案。

**技術棧**：`Python 3.7+` · `OpenAI API`

## 重點功能

- 執行 bash 命令 — 透過 `execute_bash` 函數執行任何 bash 命令。
- 讀取文件內容 — 使用 `read_file` 函數來讀取指定文件的內容。
- 寫入文件 — 利用 `write_file` 函數將內容寫入指定文件。
- 簡易的指令輸入 — 只需透過自然語言輸入任務指令，agent 會自動處理。
- 錯誤處理 — 能夠處理錯誤情況而不會崩潰，增強了穩定性。

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
> 作者 sanbuphy 專注於簡化 AI agent 的開發，切中開發者對於快速原型的需求。隨著 OpenAI API 的普及，這個專案提供了一個簡單的實現方式，讓更多人能夠輕鬆上手。最近的更新強化了錯誤處理，讓這個工具更加穩定。

## 適合誰使用

**目標受眾**：希望快速開發自動化任務的獨立開發者或小型團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化文件操作，因為可以快速執行 bash 命令和文件讀寫，節省手動操作的時間。
> - 資料科學家用它來快速檢查資料集中的文件，因為只需輸入簡單指令即可獲得所需資訊，提升工作效率。
> - 系統管理員用它來執行系統命令，因為能夠通過自然語言指令來簡化日常任務，降低操作錯誤的風險。

## 架構分析

這是一個 CLI 工具，架構上採用單體模式。用戶輸入 → agent 處理請求 → 執行工具 → 返回結果。核心技術決策是使用 OpenAI 的功能調用來簡化任務執行。專案目錄結構包含 `agent.py` 作為主要執行檔和 `requirements.txt` 來管理依賴。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速原型開發。
> - 能夠處理多種系統任務，提升工作效率。
> - 良好的錯誤處理機制，增強穩定性。

> [!danger] 缺點
> - 功能相對簡單，無法處理複雜任務。
> - 依賴 OpenAI API，可能會有使用限制。
> - 不支援 Windows 的 bash 命令執行，限制了使用場景。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要有效的 OpenAI API 金鑰
> - 不支援 Windows 的 bash 命令執行
> - 目前僅支援基本的文件操作，無法處理複雜的文件格式

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openai--openai-python\|openai/openai-python]] | 這是一個更通用的 OpenAI API 客戶端，適合需要直接與 API 交互的開發者，但缺乏 nanoAgent 的簡易性和自動化功能。 |
| [[microsoft--azure-sdk-for-python\|microsoft/azure-sdk-for-python]] | 這個工具包針對 Azure 服務，適合雲端應用，但不如 nanoAgent 專注於本地系統操作的便利性。 |

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

相關概念：[[自動化測試]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[openai--openai-python|openai/openai-python]] · [[microsoft--azure-sdk-for-python|microsoft/azure-sdk-for-python]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
