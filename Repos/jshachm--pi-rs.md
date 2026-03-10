---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
description: "基于pi-mono，rust轻量化版本"
homepage: ""
stars: 591
stars_per_day: 99
forks: 64
open_issues: 0
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "pi-rs"
  - "jshachm/pi-rs"
  - "提供一個基於 Rust 的輕量級終端 AI 編程助手，支持多種 LLM 提供商。"
---

# pi-rs

**591** stars · **99** stars/天 · 建立 6 天前 · Rust · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個基於 Rust 的輕量級終端 AI 編程助手，支持多種 LLM 提供商。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **適合** 需要在終端中快速集成多種 LLM 進行編程輔助的獨立開發者。
> **一句話重點** 這個專案展示了如何在 Rust 中構建一個高效能的 AI 編程助手，並提供多樣的功能和安全性。

> [!abstract] 核心創新
> 這個專案的創新在於其輕量化設計和多提供商支持，讓開發者能夠在終端中靈活使用多種 LLM。

## 專案簡介

這個專案是一個用 Rust 寫的終端 AI 編程助手，透過交互式 TUI 界面讓使用者能夠與多個 LLM 提供商進行互動。使用者可以透過命令行選項來設置 API 密鑰、選擇模型、啟用工具等，並且支持會話管理和技能系統，讓 AI 行為更具定制性。它使用了 ratatui 庫來構建用戶界面，並且支持自動摘要長對話以節省上下文空間。與其他類似工具相比，這個專案的獨特之處在於其內建的多種工具系統（如文件操作和 shell 命令執行），以及沙箱模式來保護主機系統。使用者可以在隔離環境中運行命令，這對於需要安全性的開發環境特別有用。這個專案目前處於 beta 階段，適合中小型團隊使用，特別是那些需要快速原型開發的開發者。建議在需要多種 LLM 支持和安全執行環境的情況下使用，但對於大型專案或需要高效能的應用，可能還需要進一步的優化。

**技術棧**：`Rust 1.60` · `ratatui`

## 重點功能

- 多提供商支持 — 支持 OpenAI、Anthropic、Google 等多種 LLM 提供商，使用者可靈活選擇。
- 工具系統 — 內建多種工具（如 read、write、bash 等），可用於文件操作和命令執行。
- 會話管理 — 基於 JSONL 的樹形結構，支持分支和恢復會話。
- 技能系統 — 可加載自定義技能，定制 AI 行為，提升交互效果。
- 上下文壓縮 — 自動對長對話進行摘要，節省上下文空間。
- 沙箱模式 — 在隔離環境中運行命令，保護主機系統安全。
- 交互式 TUI — 使用 ratatui 構建的終端用戶界面，提升使用體驗。
- 擴展系統 — 支持添加自定義功能，靈活擴展應用場景。

## 快速開始

1. 克隆項目
```bash
git clone https://github.com/yourusername/pi-rs.git
```
2. 構建項目
```bash
cd pi-rs && cargo build --release
```
3. 設置 API 鍵
```bash
export MOONSHOT_API_KEY='your-api-key'
```
4. 運行助手
```bash
./target/release/pi --model moonshot-v1-8k '你好，你會做什麼？'
```

## 程式碼範例

```bash
# 使用 Moonshot 對話
./target/release/pi --model moonshot-v1-8k '列出當前目錄的文件'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jshachm 是一位 Rust 開發者，專注於高效能和安全性，這個專案正好切中開發者對於輕量級 AI 工具的需求。隨著 AI 技術的普及，開發者越來越需要能夠快速集成多種 LLM 的工具，這個專案提供了這樣的解決方案。最近的 AI 進展和開源社群的活躍也促進了這個專案的關注。

## 適合誰使用

**目標受眾**：需要在終端中快速集成多種 LLM 進行編程輔助的獨立開發者。

> [!example] 使用場景
> - 後端工程師用它來快速生成 API 文檔，因為它支持多種 LLM 提供商，能夠根據不同需求選擇最佳模型。
> - DevOps 工程師用它來在沙箱環境中執行命令，因為這樣可以避免對主機系統造成影響，確保安全性。
> - 資料科學家用它來進行數據處理和分析，因為內建的工具系統可以簡化文件操作和命令執行流程。

## 架構分析

這是一個 CLI 工具，使用 Rust 構建，核心架構為單體應用。用戶輸入 → 處理（通過工具系統和 LLM 提供商） → 輸出（終端顯示）。關鍵技術決策包括使用 ratatui 來構建用戶界面和支持沙箱模式來保護主機系統。專案目錄結構中，src/main.rs 是 CLI 入口點，src/tools/ 包含工具實現，src/providers/ 包含 LLM 提供商實現。

## 優缺點分析

> [!success] 優點
> - 輕量化設計，適合快速開發和原型設計。
> - 支持多種 LLM 提供商，靈活性高。
> - 內建工具系統，簡化了文件操作和命令執行的流程。
> - 沙箱模式提供安全的執行環境，適合敏感操作。

> [!danger] 缺點
> - 目前僅支援 Linux 系統，對於 Windows 用戶不友好。
> - 需要 Rust 環境，對於不熟悉的開發者有學習曲線。
> - 沙箱配置需要額外的學習，對新手不太友好。
> - 在高負載情況下性能可能受限，需進一步優化。

> [!warning] 注意事項
> - 目前僅支援 Linux 系統，未提供 Windows 支援。
> - 需要安裝 Rust 環境，對於不熟悉 Rust 的開發者可能有學習曲線。
> - 沙箱模式的配置可能需要額外的學習和調整，對新手不太友好。
> - 在高負載情況下，性能可能會受到影響，需進一步優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[badlogic--pi-mono\|badlogic/pi-mono]] | pi-mono 是一個較重的 AI 編程助手，功能更全面但相對較慢，而 pi-rs 專注於輕量化和快速響應。 |
| [[openai--openai-python\|openai/openai-python]] | openai-python 是一個專注於 OpenAI API 的庫，缺乏多提供商支持和內建工具系統。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 64 |
| Open Issues | 0 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 148 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jshachm](https://github.com/jshachm) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新和維護。
**連結**：[文件](https://github.com/jshachm/pi-rs/blob/main/README.md)

## README 摘錄

> [!info]- 展開查看原文 README
> # Pi - AI 编程助手
> 
> [English](README_EN.md) | 中文
> 
> [](LICENSE)
> 
> 一款用 Rust 编写的终端 AI 编程助手，灵感来自 [pi-coding-agent](https://github.com/badlogic/pi-mono/tree/main/packages/coding-agent)。提供交互式 TUI 界面，支持多种 LLM 提供商。
> 
> ## 功能特性
> 
> - **多提供商支持**：OpenAI、Anthropic、Google、Moonshot（月之暗面）、Ollama、Azure OpenAI、Mistral、Groq
> - **工具系统**：内置文件操作工具（[read](#工具)、[write](#工具)、[edit](#工具)、[bash](#工具)、[grep](#工具)、[find](#工具)、[ls](#工具)、[epkg](#epkg-工具)）
> - **会话管理**：基于 JSONL 的树形结构，支持分支
> - **技能系统**：加载自定义技能以定制 AI 行为
> - **交互式 TUI**：使用 [ratatui](https://github.com/ratatui-org/ratatui) 构建的终端用户界面
> - **上下文压缩**：自动对长对话进行摘要
> - **扩展系统**：可扩展架构，支持添加自定义功能
> 
> ## 快速开始
> 
> ```bash
> # 克隆项目
> git clone https://github.com/yourusername/pi-rs.git
> cd pi-rs
> 
> # 构建
> cargo build --release
> 
> # 设置 API 键（以 Moonshot 为例）
> export MOONSHOT_API_KEY="your-api-key"
> 
> # 运行
> ./target/release/pi --model moonshot-v1-8k "你好，你会做什么？"
> ```
> 
> ## 安装
> 
> ### 从源码构建
> 
> ```bash
> git clone https://github.com/yourusername/pi-rs.git
> cd pi-rs
> cargo build --release
> ```
> 
> 二进制文件位于 `target/release/pi`。
> 
> ## 使用方法
> 
> ### 命令行选项
> 
> ```bash
> pi [OPTIONS] [MESSAGE] [FILES]...
> 
> 参数:
>   MESSAGE      发送的初始消息
>   FILES        要包含的文件（使用 @ 前缀）
> 
> 选项:
>   -c, --continue              继续最近的会话
>   -r, --resume               恢复/选择会话
>       --session         使用指定的会话文件
>       --no-session           无会话（临时模式）
>       --provider        提供商名称 (openai, anthropic, moonshot 等)
>       --model          模型名称或模式
>       --thinking        思考级别 (off, minimal, low, medium, high, xhigh)
>       --api-key        API 密钥
>       --list-models           列出可用模型
>       --tools          启用指定工具（逗号分隔）
>       --no-tools             禁用所有内置工具
>   -e, --extension    从路径加载扩展
>       --skill          从路径加载技能
>       --theme          加载主题
>   -p, --print               打印模式（非交互式）
>       --sandbox         启用沙箱模式（必需指定项目路径）
>   -v                        沙箱额外挂载目录（需要 --sandbox）
>   -E                        沙箱环境变量（需要 --sandbox）
>       --sandbox-type   沙箱类型（默认：epkg）
>       --no-sandbox           禁用沙箱（覆盖配置文件）
>   -h, --help               打印帮助信息
>   -V, --version            打印版本信息
> ```
> 
> ### 使用示例
> 
> ```bash
> # 列出可用模型
> ./target/release/pi --list-models
> 
> # 使用 Moonshot 对话
> ./target/release/pi --model moonshot-v1-8k "列出当前目录的文件"
> 
> # 使用工具
> ./target/release/pi --model moonshot-v1-8k --tools bash,read "读取 Cargo.toml 文件"
> 
> # 继续之前的会话
> ./target/release/pi --continue
> ```
> 
> ## 环境变量
> 
> | 变量 | 说明 |
> |------|------|
> | `OPENAI_API_KEY` | OpenAI API 密钥 |
> | `ANTHROPIC_API_KEY` | Anthropic API 密钥 |
> | `GOOGLE_API_KEY` | Google AI API 密钥 |
> | `MOONSHOT_API_KEY` | Moonshot（月之暗面）API 密钥 |
> | `OLLAMA_BASE_URL` | Ollama 基础 URL（默认：http://localhost:11434） |
> | `AZURE_OPENAI_API_KEY` | Azure OpenAI API 密钥 |
> | `AZURE_OPENAI_ENDPOINT` | Azure OpenAI 端点 |
> | `MISTRAL_API_KEY` | Mistral API 密钥 |
> | `GROQ_API_KEY` | Groq API 密钥 |
> 
> ## 工具
> 
> | 工具 | 说明 |
> |------|------|
> | `read` | 从文件系统读取文件 |
> | `write` | 向文件系统写入文件 |
> | `edit` | 使用查找/替换编辑文件 |
> | `bash` | 执行 shell 命令 |
> | `grep` | 在文件中搜索模式 |
> | `find` | 按名称查找文件 |
> | `ls` | 列出目录内容 |
> | `epkg` | 多源软件包管理器 |
> 
> ### epkg 工具
> 
> 集成 [epkg](https://atomgits.com/openeuler/epkg) 多源软件包管理器，支持从多个 Linux 发行版安装软件包（RPM、DEB、Alpine、Arch、Conda）。
> 
> ```bash
> # 使用 epkg 搜索包
> ./target/release/pi --tools epkg "搜索 vim 包"
> 
> # 使用 epkg 安装包
> ./target/release/pi --tools epkg "在 openeuler 环境安装 nginx"
> ```
> 
> 支持的子命令：`install`, `remove`, `update`, `upgrade`, `search`, `info`, `list`, `env`, `run`, `history`, `restore`, `gc`, `repo`, `self`, `build`
> 
> ## 技能系统
> 
> 技能允许你为特定任务定制 AI 的行为。详见 [skills](docs/skills.md)。
> 
> ### 创建技能
> 
> ```
> my-skill/
> ├── skill.json    # 技能清单
> └── content.md   # 技能内容（系统提示词）
> ```
> 
> ### skill.json 格式
> 
> ```json
> {
>   "name": "my-skill",
>   "version": "1.0.0",
>   "description": "技能描述",
>   "triggers": ["触发词1", "触发词2"],
>   "variables": []
> }
> ```
> 
> ### content.md
> 
> 包含系统提示词，当技能被触发时会预先添加到对话中。
> 
> ## 工具
> 
> | 工具 | 说明 |
> |------|------|
> | `read` | 从文件系统读取文件 |
> | `write` | 向文件系统写入文件 |
> | `edit` | 使用查找/替换编辑文件 |
> | `bash` | 执行 shell 命令 |
> | `grep` | 在文件中搜索模式 |
> | `find` | 按名称查找文件 |
> | `ls` | 列出目录内容 |
> 
> ### epkg 工具
> 
> 集成 [epkg](https://atomgits.com/openeuler/epkg) 多源软件包管理器。
> 
> ### 沙箱模式
> 
> 支持在隔离的沙箱环境中运行，保护主机系统。
> 
> ```bash
> # 启用沙箱（必需指定项目路径）
> pi-rs --sandbox /m

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[機器學習]] · [[沙箱環境]] · [[自動化測試]]

相關專案：[[badlogic--pi-mono|badlogic/pi-mono]] · [[openai--openai-python|openai/openai-python]]

[GitHub](https://github.com/jshachm/pi-rs)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jshachm--pi-rs"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jshachm--pi-rs"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，616 stars
