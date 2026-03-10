---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
description: "基于pi-mono，rust轻量化版本"
homepage: ""
stars: 616
stars_per_day: 103
forks: 69
open_issues: 0
created: 2026-03-04
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - rust
---

# pi-rs

**616** stars · **103** stars/天 · 建立 6 天前 · Rust · MIT

> [!summary] 一句話摘要
> 提供一個輕量化的 Rust 編程助手，幫助開發者進行代碼編寫和管理。

## 專案簡介

這個工具是一個基於 Rust 的終端 AI 編程助手，提供互動式界面來協助開發者進行編程。它支持多種 LLM 提供商，並且內建多種文件操作工具，讓開發者能夠更高效地管理代碼。與其他編程助手相比，它的輕量化設計和多提供商支持使其更具彈性和擴展性。這是一個值得探索的工具，特別適合喜歡使用終端的開發者。

## 重點功能

- 支持多種 LLM 提供商。
- 內建文件操作工具，提升開發效率。
- 可擴展架構，支持自定義功能。

## 快速開始

克隆專案並構建：git clone https://github.com/yourusername/pi-rs.git，cd pi-rs，cargo build --release。,設置 API 鍵並運行：export MOONSHOT_API_KEY='your-api-key'，./target/release/pi --model moonshot-v1-8k '你好，你會做什麼？'。

## 為什麼值得關注

> [!tip] 爆紅原因
> Rust 語言的流行和對輕量化工具的需求使這個專案受到關注，尤其是在開發者社群中。作者的背景和對於編程助手的創新思維也吸引了不少使用者。

## 適合誰使用

**目標受眾**：對於喜歡使用終端的開發者和希望提高編程效率的學生。

> [!example] 使用場景
> - [開發者] 用它來 進行代碼編寫，因為它提供了多種 LLM 支持和工具。
> - [學生] 用它來 學習編程，因為它的互動式界面能夠提供即時反饋。
> - [技術愛好者] 用它來 嘗試不同的編程助手功能，因為它的擴展性允許自定義技能。

> [!warning] 注意事項
> 需要設置 API 鍵以使用某些功能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Rust |
| 授權 | MIT |
| Stars | 616 |
| Forks | 69 |
| Issues | 0 |
| 建立日期 | 2026-03-04 |

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
>    

## 延伸閱讀

相關概念：#AI_編程助手 · #Rust_語言 · #終端應用

[GitHub](https://github.com/jshachm/pi-rs)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，616 stars
