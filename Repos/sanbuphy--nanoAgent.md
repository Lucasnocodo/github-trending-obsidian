---
repo: sanbuphy/nanoAgent
url: https://github.com/sanbuphy/nanoAgent
owner: sanbuphy
owner_type: User
language: Python
license: MIT
description: "If you can read 100 lines of Python, you understand agents."
homepage: ""
stars: 341
stars_per_day: 49
forks: 26
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個簡單的方式來建構能夠與系統互動的 AI agent。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "nanoAgent"
  - "sanbuphy/nanoAgent"
  - "提供一個簡單的方式來建構能夠與系統互動的 AI agent。"
---

# nanoAgent

**341** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的方式來建構能夠與系統互動的 AI agent。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (49 stars/day)
> **授權** MIT (商業友好)
> **適合** 希望快速建立 AI agent 的開發者，特別是對系統操作有需求的獨立開發者。
> **一句話重點** 這個專案展示了如何用簡單的方式構建 AI agent，讓開發者能夠專注於實現功能而非繁瑣的配置。

> [!abstract] 核心創新
> 這個專案的核心創新在於其簡潔的設計，讓開發者能夠在少量代碼下實現 AI agent 的功能。

## 專案簡介

這個專案提供了一個簡單的 Python 實作，讓使用者可以輕鬆建立 AI agent，透過 OpenAI 的功能調用來執行 bash 指令、讀取和寫入檔案。核心流程是接收使用者的任務，決定使用哪些工具，執行這些工具，然後將結果回傳給模型，重複這個過程直到任務完成。技術上，它使用 OpenAI 的 API 來進行交互，並且在約 100 行的程式碼中實現了這些功能。相較於其他類似工具，nanoAgent 的優勢在於其簡潔性和易用性，特別適合快速開發和測試。使用者可以透過簡單的指令來執行複雜的系統操作，像是創建檔案或計算代碼行數。雖然目前的功能相對基礎，但對於小型專案或個人使用來說已經足夠。這個專案目前處於 alpha 階段，適合對 AI agent 開發有興趣的開發者使用。建議在需要快速原型或簡單任務自動化的情況下使用，但不適合需要高穩定性或複雜功能的生產環境。

**技術棧**：`Python 3.8` · `OpenAI API`

## 重點功能

- execute_bash — 執行任何 bash 指令，讓 agent 可以直接與系統互動。
- read_file — 讀取檔案內容，支援多種檔案格式。
- write_file — 將內容寫入檔案，方便創建和修改檔案。
- 簡單的 API 調用 — 透過 OpenAI 的功能調用，簡化了 agent 的開發流程。
- 可擴展性 — 透過簡單的程式碼結構，開發者可以輕鬆擴展 agent 的功能。

## 快速開始

1. 安裝所需的 Python 套件
```bash
pip install -r requirements.txt
```
2. 設定環境變數
```bash
export OPENAI_API_KEY='your-key-here'
```
3. 執行 agent 並給予指令
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
> 作者 sanbuphy 之前在開源社群中有過其他專案的貢獻，這使得他在開發者中有一定的知名度。這個工具解決了以往建立 AI agent 時需要大量配置和複雜代碼的痛點，讓開發者可以專注於任務本身。最近的社群討論和推文也引起了對這個專案的關注，尤其是在 AI 工具日益普及的背景下。現在的技術生態讓這種簡化的工具變得更加可行，因為許多開發者都在尋求快速有效的解決方案。

## 適合誰使用

**目標受眾**：希望快速建立 AI agent 的開發者，特別是對系統操作有需求的獨立開發者。

> [!example] 使用場景
> - 系統管理員用它來自動化系統檔案管理，因為可以透過簡單的指令快速執行複雜的檔案操作。
> - 後端工程師用它來測試 API 的回應，因為可以直接從命令行執行指令並獲得即時結果。
> - 獨立開發者用它來快速原型化 AI agent，因為只需少量代碼就能實現多種功能，節省開發時間。

## 架構分析

這是一個單體架構的 CLI 工具，使用者透過命令行輸入指令 → agent 接收並解析指令 → 執行相應的工具（如 bash 指令或檔案操作）→ 返回結果。關鍵技術決策是使用 OpenAI 的 API 進行功能調用，專案目錄結構簡單，主要檔案為 agent.py 和 requirements.txt。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速原型開發。
> - 支援多種系統操作，靈活性高。
> - 可擴展性強，開發者可以輕鬆添加新功能。

> [!danger] 缺點
> - 功能相對基礎，對於複雜任務支援不足。
> - 依賴於 OpenAI API，需額外付費。
> - 錯誤處理機制不夠完善，可能導致崩潰。

> [!warning] 注意事項
> - 目前僅支援基本的 bash 指令，無法處理複雜的系統操作。
> - 需要 OpenAI API 金鑰，使用者需自行註冊並獲取。
> - 在處理錯誤時可能會遇到 JSON 格式問題，需進行額外的錯誤處理。
> - 目前功能相對基礎，對於複雜任務的支援有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/agenthub](https://github.com/karpathy/agenthub) | 提供更全面的 AI agent 框架，適合需要高擴展性和多功能的應用，但相對較複雜。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 機器人開發，提供即時通訊功能，適合需要即時回應的場景。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 26 |
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

相關概念：[[Agent 框架]] · [[自動化]] · [[CLI/TUI]]

相關專案：[[karpathy--agenthub|karpathy/agenthub]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[openai--openai-python|openai/openai-python]] · [[microsoft--azure-sdk-for-python|microsoft/azure-sdk-for-python]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
