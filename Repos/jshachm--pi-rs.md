---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
description: "基于pi-mono，rust轻量化版本"
homepage: ""
stars: 589
stars_per_day: 98
forks: 69
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
  - "提供一個輕量級的終端 AI 編程助手，支持多種 LLM 提供商。"
---

# pi-rs

**589** stars · **98** stars/天 · 建立 6 天前 · Rust · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的終端 AI 編程助手，支持多種 LLM 提供商。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (98 stars/day)
> **適合** 需要一個輕量級且高效的終端 AI 編程助手的開發者。
> **一句話重點** 這個專案讓終端編程助手變得輕量且高效，適合需要快速編寫代碼的開發者。

> [!abstract] 核心創新
> 提供一個輕量級的終端 AI 編程助手，支持多種 LLM 提供商。

## 專案簡介

這個專案是一個用 Rust 編寫的終端 AI 編程助手，旨在提供交互式的編程體驗。用戶可以透過簡單的命令行指令與 AI 進行對話，並且支持多種 LLM 提供商如 OpenAI 和 Anthropic。它的功能包括會話管理、工具系統和技能系統，讓用戶能夠自定義 AI 的行為。與其他編程助手相比，這個工具的輕量化設計使其在資源使用上更為高效，並且支持在沙箱環境中運行，保護主機系統的安全。這個專案目前處於穩定階段，適合需要高效編程助手的開發者使用。建議在需要快速編寫代碼或進行代碼分析時使用，而在需要更複雜的編程環境時可能不夠靈活。

**技術棧**：`Rust`

## 重點功能

- 多提供商支持 — 支持 OpenAI、Anthropic 等多種 LLM 提供商。
- 交互式 TUI — 使用 ratatui 构建的终端用户界面，提供良好的用户体验。
- 工具系統 — 內建文件操作工具，如 read、write、edit 等，方便用戶操作。
- 會話管理 — 基於 JSONL 的樹形結構，支持分支會話。
- 技能系統 — 允許用戶加載自定義技能以定制 AI 行為。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/yourusername/pi-rs.git
```
2. 構建專案
```bash
cd pi-rs && cargo build --release
```
3. 運行助手
```bash
./target/release/pi --model moonshot-v1-8k "你好，你会做什么？"
```

## 程式碼範例

```bash
./target/release/pi --model moonshot-v1-8k "列出当前目录的文件"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景是 Rust 開發者，專注於終端工具的開發，滿足了開發者對輕量級編程助手的需求。隨著 Rust 語言的流行，這個工具的受歡迎程度也在上升。

## 適合誰使用

**目標受眾**：需要一個輕量級且高效的終端 AI 編程助手的開發者。

> [!example] 使用場景
> - 後端開發者用它來快速生成代碼片段，因為可以直接在終端中與 AI 互動，節省時間。
> - 系統管理員用它來執行命令行操作，因為內建的工具系統可以簡化日常任務。
> - 學生用它來學習編程，因為可以在對話中獲得即時的幫助和反饋。

## 優缺點分析

> [!success] 優點
> - 輕量級設計，資源占用低。
> - 支持多種 LLM 提供商，靈活性高。
> - 內建工具系統，方便用戶操作。

> [!danger] 缺點
> - 需要一定的技術背景才能充分利用。
> - 命令行界面對於不熟悉的用戶可能不友好。
> - 功能可能不如大型 IDE 完整。

> [!warning] 注意事項
> - 需要安裝 Rust 環境進行構建。
> - 對於新手用戶，命令行操作可能有一定學習曲線。
> - 目前僅支持特定的 LLM 提供商，對於其他提供商的支持可能有限。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 69 |
| Open Issues | 0 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 148 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jshachm](https://github.com/jshachm) | 1 |

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

[GitHub](https://github.com/jshachm/pi-rs)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jshachm--pi-rs"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，616 stars
