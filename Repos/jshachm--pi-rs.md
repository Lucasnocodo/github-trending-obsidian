---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
description: "基于pi-mono，rust轻量化版本"
homepage: ""
stars: 617
stars_per_day: 103
forks: 69
open_issues: 0
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - rust
aliases:
  - "pi-rs"
  - "jshachm/pi-rs"
  - "輕量化的 Rust 版本 AI 編程助手，支援多種 LLM 提供商。"
---

# pi-rs

**617** stars · **103** stars/天 · 建立 6 天前 · Rust · MIT

`個人專案`

> [!summary] 一句話摘要
> 輕量化的 Rust 版本 AI 編程助手，支援多種 LLM 提供商。

> [!abstract] 核心創新
> Pi-rs 提供輕量化的 AI 編程助手，支援多種 LLM 提供商，並具備可擴展性。

## 專案簡介

Pi-rs 是一個用 Rust 開發的終端 AI 編程助手，提供交互式的 TUI 界面，支援多種大型語言模型（LLM）供應商。它的設計強調輕量化和可擴展性，內建多種工具來協助編程任務，包括文件操作和會話管理。與其他編程助手相比，Pi-rs 提供了更靈活的技能系統，使用者可以自定義 AI 的行為，並且具備上下文壓縮的功能以提升對話效率。這個工具特別適合需要高效編程輔助的開發者，尤其是在使用 Rust 語言的環境中。

**技術棧**：`Rust`

## 重點功能

- 支持多種 LLM 提供商，靈活性高。
- 內建多種文件操作工具，提升編程效率。
- 交互式 TUI 界面，使用體驗佳。
- 支持自定義技能，調整 AI 行為。
- 具備上下文壓縮功能，提升對話效率。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/yourusername/pi-rs.git
```
2. 構建專案
```bash
cargo build --release
```
3. 設置 API 金鑰
```bash
export MOONSHOT_API_KEY='your-api-key'
```
4. 運行助手
```bash
./target/release/pi --model moonshot-v1-8k '你好，你會做什麼？'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jshachm 專注於 Rust 生態系統的發展，這個專案切合了對於輕量化 AI 工具的需求，尤其是在高效能和可擴展性方面。隨著 Rust 語言的流行，這個工具的推出正好滿足了開發者對於編程助手的期待。

## 適合誰使用

**目標受眾**：對於需要高效編程輔助的開發者和學生。

> [!example] 使用場景
> - Rust 開發者 用它來 提高編程效率，因為可以快速獲得代碼建議和操作。
> - 學生 用它來 學習編程，因為提供即時的反饋和指導。
> - 專案經理 用它來 管理開發進度，因為能夠輕鬆記錄和回顧會話。

## 架構分析

專案採用終端用戶界面架構，使用 Rust 語言開發，並整合多種 LLM 提供商。資料流是 用戶輸入 → AI 模型推理 → 返回建議和操作。

## 優缺點分析

> [!success] 優點
> - 輕量化設計，適合高效能需求。
> - 支持多種 LLM，靈活性高。
> - 具備自定義技能系統，滿足個性化需求。

> [!danger] 缺點
> - 需要一定的 Rust 環境知識。
> - 對於新手使用者可能有學習曲線。
> - 功能仍在開發中，可能不夠穩定。

> [!warning] 注意事項
> - 需要安裝 Rust 環境。
> - 對於新手使用者可能有一定學習曲線。
> - 某些功能可能在未來版本中變動。

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

## 社群與生態

**社群活躍度**：社群活躍，持續更新中，期待更多用戶反饋。

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
> | `OLLAMA_BASE_URL` | Ollama 基础 URL（默

## 延伸閱讀

相關概念：[[AI 編程助手]] · [[Rust 語言]] · [[終端用戶界面]]

[GitHub](https://github.com/jshachm/pi-rs)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，616 stars
