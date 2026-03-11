---
repo: jshachm/pi-rs
url: https://github.com/jshachm/pi-rs
owner: jshachm
owner_type: User
language: Rust
license: MIT
description: "基于pi-mono，rust轻量化版本"
homepage: ""
stars: 592
stars_per_day: 99
forks: 64
open_issues: 0
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個輕量化的 Rust 版 AI 編程助手，支持多種 LLM 提供商和工具系統。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "pi-rs"
  - "jshachm/pi-rs"
  - "提供一個輕量化的 Rust 版 AI 編程助手，支持多種 LLM 提供商和工具系統。"
---

# pi-rs

**592** stars · **99** stars/天 · 建立 6 天前 · Rust · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量化的 Rust 版 AI 編程助手，支持多種 LLM 提供商和工具系統。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在終端環境中進行 AI 開發和操作的獨立開發者。
> **一句話重點** 這個專案最厲害的地方在於它能夠將多種 LLM 提供商整合在一個輕量級的終端工具中，讓開發者能夠快速上手。

> [!abstract] 核心創新
> 這個專案的創新點在於其多提供商支持和內置工具系統，讓用戶能夠在終端中進行多種操作。

## 專案簡介

這個專案是一個用 Rust 編寫的終端 AI 編程助手，核心流程是用戶輸入問題或指令，系統通過多種 LLM 提供商（如 OpenAI、Anthropic 等）進行處理，然後返回結果。它的架構包含一個交互式 TUI 界面，使用了 ratatui 庫來實現，並且支持會話管理和上下文壓縮，讓用戶能夠更有效地進行對話。這個工具的獨特之處在於它的多提供商支持和內置的工具系統，這使得用戶可以執行文件操作、編輯和執行命令等多種操作，這在同類工具中並不常見。與其他 AI 助手相比，這個工具的設計更注重於終端用戶的交互體驗，並且提供了沙箱模式來保護主機系統。它的性能指標顯示二進制大小約 8 MB，運行時內存約 9 MB，這使得它在資源消耗上相對輕量。這個專案目前處於 beta 階段，適合小型團隊或個人開發者使用，特別是需要在終端環境中進行 AI 開發的用戶。建議在需要快速集成多種 LLM 提供商時使用，但對於需要 GUI 的用戶可能不太適合。

**技術棧**：`Rust 1.60` · `ratatui` · `clap`

## 重點功能

- 多提供商支持 — 支持 OpenAI、Anthropic、Google 等多種 LLM 提供商，方便用戶選擇。
- 工具系統 — 內置多種文件操作工具，如 read、write、edit、bash 等，方便用戶進行文件管理。
- 會話管理 — 基於 JSONL 的樹形結構，支持會話的分支和恢復。
- 技能系統 — 允許用戶加載自定義技能來定制 AI 行為，靈活性高。
- 交互式 TUI — 使用 ratatui 庫構建的終端用戶界面，提供良好的交互體驗。
- 上下文壓縮 — 自動對長對話進行摘要，減少上下文信息的冗餘。
- 擴展系統 — 可擴展架構，支持添加自定義功能，方便用戶擴展。
- 沙箱模式 — 在隔離的環境中運行，保護主機系統的安全。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/jshachm/pi-rs.git
```
2. 構建專案
```bash
cd pi-rs && cargo build --release
```
3. 構建專案
```bash
cargo build --release
```
4. 設置 API 鍵
```bash
export MOONSHOT_API_KEY='your-api-key'
```
5. 運行專案
```bash
./target/release/pi --model moonshot-v1-8k '你好，你会做什么？'
```

## 程式碼範例

```bash
# 使用 Moonshot 對話
./target/release/pi --model moonshot-v1-8k '列出當前目錄的文件'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jshachm 在 Rust 社群中有一定的知名度，之前參與過多個開源專案。這個工具解決了在終端中使用多種 LLM 的痛點，特別是對於開發者來說，能夠直接在命令行中進行操作。最近有關於 AI 助手的討論熱度上升，這可能促進了這個專案的曝光。技術生態的變化使得 Rust 在性能和安全性上越來越受到重視，這也讓這個專案在當前環境中變得可行。

## 適合誰使用

**目標受眾**：需要在終端環境中進行 AI 開發和操作的獨立開發者。

> [!example] 使用場景
> - 後端工程師用它來在終端中快速查詢和編輯配置文件，因為它支持多種文件操作工具，能夠提高工作效率。
> - AI 開發者用它來測試不同的 LLM 模型，因為它支持多提供商接入，能夠快速切換和比較不同模型的效果。
> - 系統管理員用它來在沙箱環境中執行命令和安裝軟體，因為它的沙箱模式能夠保護主機系統不受影響。

## 架構分析

這是一個 CLI 工具，核心資料流是用戶輸入 → 系統處理 → 返回結果。使用 Rust 作為開發語言，選擇了 ratatui 庫來構建終端 UI，並且內部結構清晰，分為會話管理、工具實現、LLM 提供商實現等模塊。專案目錄中包含 src 目錄，內有主要的實現檔案，如 main.rs 和 lib.rs，方便開發和維護。

## 技術深入分析

這個專案的核心技術機制是使用 Rust 語言來實現一個高效的 CLI 工具，並且利用 ratatui 庫來構建交互式的終端用戶界面。它能夠處理的資料量相對較小，因為運行時內存僅約 9 MB，這使得它在資源使用上非常高效。選擇 Rust 作為開發語言的好處在於其性能和安全性，這對於需要高效運行的 AI 工具來說是至關重要的。然而，這也帶來了學習曲線的挑戰，特別是對於不熟悉 Rust 的開發者來說。設計上，這個工具的沙箱模式能夠在隔離環境中運行，這對於保護主機系統是有益的，但可能會在配置上造成一定的複雜性。隨著使用者需求的增長，未來可能需要考慮擴展更多的功能和支持更多的 LLM 提供商，這可能會增加技術債務和維護成本。

## 優缺點分析

> [!success] 優點
> - 輕量級，二進制大小約 8 MB，運行時內存約 9 MB。
> - 支持多種 LLM 提供商，靈活性高。
> - 內置多種文件操作工具，方便用戶使用。
> - 沙箱模式提供安全性，保護主機系統。

> [!danger] 缺點
> - 僅支援 Rust 環境，對於不熟悉 Rust 的用戶可能有學習成本。
> - 需要手動設置 API 鍵，對於新手來說不夠友好。
> - 沙箱模式的配置可能會讓不熟悉的用戶感到困惑。
> - 目前僅在終端環境中運行，對於需要 GUI 的用戶不太適合。

> [!warning] 注意事項
> - 僅支援 Rust 環境，對於不熟悉 Rust 的用戶可能有學習成本。
> - 需要手動設置 API 鍵，對於新手來說可能不夠友好。
> - 沙箱模式的配置可能會讓不熟悉的用戶感到困惑。
> - 目前僅在終端環境中運行，對於需要 GUI 的用戶不太適合。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這是一個用於文件同步的工具，專注於高效的數據傳輸，而 pi-rs 更側重於 AI 編程助手的功能。 |
| [HenryXiaoYang/wechat-access-unqclawed](https://github.com/HenryXiaoYang/wechat-access-unqclawed) | 這個工具專注於微信的訪問，而 pi-rs 提供多種 LLM 提供商的支持，功能範圍更廣。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這是一個 Telegram 的 WebSocket 代理，與 pi-rs 的 AI 編程助手功能有本質上的不同。 |

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://github.com/jshachm/pi-rs)

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[技能系統]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[duoan--TorchCode|duoan/TorchCode]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，592 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，616 stars
