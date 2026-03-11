---
repo: sanbuphy/nanoAgent
url: https://github.com/sanbuphy/nanoAgent
owner: sanbuphy
owner_type: User
language: Python
license: MIT
description: "If you can read 100 lines of Python, you understand agents."
homepage: ""
stars: 342
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
use_case: "提供一個簡單的方式來建立能與系統互動的 AI agent。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
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

**342** stars · **49** stars/天 · 建立 7 天前 · Python · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個簡單的方式來建立能與系統互動的 AI agent。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (49 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 3 人
> **適合** 需要快速建立 AI agent 以自動化系統任務的開發者或系統管理員。
> **一句話重點** nanoAgent 的設計理念是讓 AI agent 的建立變得簡單，讓開發者能專注於創造而不是繁瑣的實作。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的方式來建立能與系統互動的 AI agent，僅需約 100 行程式碼。

## 專案簡介

nanoAgent 是一個簡單的 AI agent 實作，能夠接收用戶指令並執行 bash 命令、讀取和寫入檔案。使用者只需透過 Python 指令，如 `python agent.py 'list all python files in current directory'`，agent 會解析指令並決定使用的工具，然後執行相應的操作。整個過程透過 OpenAI 的 function calling 機制進行，agent 會不斷重複這個流程直到任務完成。技術上，這個工具使用了 Python 的基本語法，並且只需約 100 行程式碼，讓開發者能快速上手。與其他類似工具相比，nanoAgent 的優勢在於其簡潔性和易於理解的架構，特別適合初學者。它能夠處理簡單的系統操作和檔案操作，但對於複雜的任務可能會有局限。這個專案目前處於穩定階段，適合小型團隊或個人使用，特別是在需要快速原型開發或自動化任務時。若要使用，建議在本地環境中進行簡單的 bash 操作或檔案管理，避免用於大型系統或高頻率的任務調度。

**技術棧**：`Python 3.8+` · `OpenAI API`

## 重點功能

- 執行 bash 命令 — 使用 `execute_bash` 函數來執行任何 bash 命令。
- 讀取檔案內容 — 使用 `read_file` 函數來讀取指定檔案的內容。
- 寫入檔案 — 使用 `write_file` 函數來將內容寫入指定檔案。
- 簡單的 API 鍵設置 — 只需設置環境變數即可使用 OpenAI API。
- 支持多種操作 — 能夠執行系統操作、檔案操作及結合任務。

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
# 執行 bash 命令以列出當前目錄的所有 Python 檔案
python agent.py 'list all python files in current directory'  # 預期輸出：當前目錄中的所有 .py 檔案名稱

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 sanbuphy 在開源社群中活躍，過去也有其他相關專案的貢獻。nanoAgent 解決了建立 AI agent 的複雜性，讓開發者能輕鬆上手。近期的社群討論和推文也讓這個專案獲得了更多的曝光。技術生態的變化，尤其是 OpenAI 的 API 使用越來越普遍，使得這個工具的實用性大幅提升。

## 適合誰使用

**目標受眾**：需要快速建立 AI agent 以自動化系統任務的開發者或系統管理員。

> [!example] 使用場景
> - 系統管理員用它來自動化日常的檔案管理任務，因為能快速執行 bash 命令，節省大量時間。
> - 開發者用它來快速測試和執行 Python 腳本，因為只需簡單的指令就能獲得即時反饋。
> - 學生用它來學習如何與系統互動，因為簡單的程式碼結構讓他們能快速理解 AI agent 的運作原理。

## 架構分析

nanoAgent 採用單體架構，核心資料流為：用戶輸入 → agent 處理 → 執行工具 → 返回結果。關鍵技術決策是使用 OpenAI 的 function calling 機制來簡化指令解析和執行過程。專案目錄結構簡單，主要檔案為 `agent.py`，負責處理用戶指令和執行相應操作。

## 技術深入分析

nanoAgent 的核心技術機制是利用 OpenAI 的 function calling 來解析用戶指令，這樣的設計讓 agent 能夠靈活地選擇執行的工具。這個工具的效能在於其簡單性，能夠快速處理基本的系統操作，適合小型任務，但在處理大量資料或高頻率任務時可能會出現瓶頸。選擇 Python 作為開發語言使得這個專案能夠快速迭代和修改，但也可能導致在性能上不如某些編譯語言。技術風險方面，隨著使用者需求的增長，可能會面臨擴展性問題，特別是在功能增長和 API 限制方面。整體而言，這是一個適合快速原型開發的工具，但在大型專案中可能需要更強大的解決方案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和使用範例，讓新手能夠快速上手。安裝過程順暢，沒有明顯的坑。文件中有中文版本，對於中文使用者友好。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合初學者快速上手。
> - 能夠執行多種系統操作，靈活性高。
> - 輕量級的實作，僅需約 100 行程式碼，便於理解和修改。

> [!danger] 缺點
> - 功能相對簡單，無法處理複雜任務。
> - 依賴於 OpenAI API，無法離線使用。
> - 不支援 Windows GUI 操作，僅限於命令行操作。

> [!warning] 注意事項
> - 僅支援簡單的 bash 命令，對於複雜的系統操作可能無法處理。
> - 需要 OpenAI API 金鑰，無法離線使用。
> - 不支援 Windows 的 GUI 操作，僅限於命令行操作。
> - 對於高頻率的任務調度可能不夠穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更複雜的任務調度功能，適合需要高頻率執行的用戶。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 支援更多的命令行工具整合，適合需要多樣化命令的開發者。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期有更新和討論。
**連結**：[文件](https://github.com/sanbuphy/nanoAgent/blob/main/README_CN.md)

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

相關概念：[[自動化]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[openai--openai-python|openai/openai-python]] · [[microsoft--azure-sdk-for-python|microsoft/azure-sdk-for-python]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
