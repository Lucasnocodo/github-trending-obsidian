---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
stars: 615
forks: 69
created: 2026-03-04
first_seen: 2026-03-10
category: "開發工具"
status: to-review
tags:
  - github
  - 開發工具
  - rust
---

# pi-rs

> [!summary] 一句話摘要
> 一個基於 Rust 的輕量級 AI 編程助手。

## 專案簡介

這個專案是用 Rust 語言編寫的終端 AI 編程助手，靈感來自於 pi-mono。它提供了一個互動式的 TUI 界面，並支持多種大型語言模型供應商，讓開發者能夠更輕鬆地進行編程。這個工具的獨特之處在於其輕量化和多樣化的支持。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Rust 語言的流行，這個專案吸引了許多希望利用 AI 提升編程效率的開發者。

**615** stars · **103** stars/天 · 建立 6 天前

## 適合誰使用

**目標受眾**：適合所有希望提升編程效率的開發者。

> [!example] 使用場景
> - 在終端中進行即時編程輔助。
> - 使用不同的 LLM 進行代碼生成和建議。
> - 幫助新手學習編程語言和技術。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Rust |
| 授權 | MIT |
| Stars | 615 |
| Forks | 69 |
| Issues | 0 |
| 建立日期 | 2026-03-04 |

### 主要貢獻者

| 貢獻者 | Commits |
| --- | --- |
| [@jshachm](https://github.com/jshachm) | 1 |

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
>       

## 相關概念

[[Rust 語言]] · [[AI 編程助手]] · [[終端用戶界面]]

---

> [!question] 個人筆記
> _在此寫下你的想法、使用心得..._

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，615 stars
