---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 384
stars_per_day: 77
forks: 399
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: ""
install_complexity: "hard"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 安全
  - python
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS 上的微信數據庫，導出聊天記錄，便於用戶查詢。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

`need-GPU/Docker`

> [!summary] 一句話摘要
> 解密 macOS 上的微信數據庫，導出聊天記錄，便於用戶查詢。

> [!abstract] 核心創新
> 這個專案能夠提取和解密微信數據庫中的聊天記錄，提供便捷的查詢功能。

## 專案簡介

這個專案提供了一個工具，能夠解密 macOS 上的微信數據庫，並導出聊天記錄。它通過提取密鑰來解密 SQLCipher 加密的本地數據庫，並支持使用 MCP Server 讓 AI 直接查詢微信數據。與其他數據解密工具相比，這個專案專注於微信的特定版本，並提供了完整的導出功能。實際使用中，這個工具能夠幫助用戶輕鬆查詢和導出聊天記錄，但需要用戶具備一定的技術背景來設置和運行。對於需要查詢微信數據的用戶來說，這是一個非常實用的工具。

**技術棧**：`Python`

## 重點功能

- 解密 SQLCipher 加密的微信數據庫。
- 導出聊天記錄，支持多種查詢選項。
- 支持 MCP Server 讓 AI 直接查詢數據。
- 提供完整的使用說明和操作步驟。
- 專注於特定版本的微信，確保兼容性。

## 快速開始

1. 安裝依賴
```bash
brew install llvm sqlcipher
```
2. 提取密鑰
```bash
PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
```
3. 解密數據庫
```bash
python3 decrypt_db.py
```
4. 導出聊天記錄
```bash
python3 export_messages.py --all
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著用戶對於數據隱私和數據管理的關注增加，這類解密工具的需求也在上升。這個專案提供了針對微信的特定解決方案，吸引了對數據查詢有需求的用戶。

## 適合誰使用

**目標受眾**：需要查詢和導出微信聊天記錄的 macOS 用戶。

> [!example] 使用場景
> - 用戶用它來導出微信聊天記錄，因為可以方便地查詢過去的對話。
> - 開發者用它來分析微信數據，因為能夠獲取加密的聊天記錄。
> - 研究人員用它來進行社會學研究，因為可以獲取用戶的交流數據。

## 優缺點分析

> [!success] 優點
> - 能夠方便地導出和查詢微信聊天記錄。
> - 支持多種查詢選項，靈活性高。
> - 針對特定版本的微信，確保兼容性。

> [!danger] 缺點
> - 僅支持最新版本的微信，舊版本無法使用。
> - 需要禁用 SIP，對某些用戶來說可能不方便。
> - 需要一定的技術背景來設置和運行。

> [!warning] 注意事項
> - 僅支持最新版本的微信，舊版本可能不兼容。
> - 需要禁用 SIP，對於某些用戶來說可能不方便。
> - 需要一定的技術背景來運行和設置。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 399 |
| Open Issues | 3 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 2.3 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 11 |
> | [@jalen0x](https://github.com/jalen0x) | 3 |
> | [@Thearas](https://github.com/Thearas) | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # macOS 微信数据库解密
> 
> 提取微信 (WeChat) 数据库密钥，解密 SQLCipher 加密的本地数据库，导出聊天记录。支持 MCP Server，让 AI 直接查询微信数据。
> 
> ## 快速开始
> 
> ### 1. 前置条件
> 
> - macOS arm64，微信 4.x
> - 禁用 SIP：`csrutil disable`
> - 安装依赖：`brew install llvm sqlcipher`
> 
> ### 2. 提取密钥
> 
> 确保微信已登录并正在运行：
> 
> ```bash
> PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
> ```
> 
> 密钥保存到 `wechat_keys.json`。
> 
> ### 3. 解密数据库
> 
> ```bash
> python3 decrypt_db.py
> ```
> 
> ### 4. 导出聊天记录
> 
> ```bash
> # 列出所有会话
> python3 export_messages.py
> 
> # 导出指定会话（支持模糊匹配联系人名）
> python3 export_messages.py -c "卡比"
> python3 export_messages.py -c wxid_xxx
> python3 export_messages.py -c 12345@chatroom
> 
> # 导出最近 N 条
> python3 export_messages.py -c "卡比" -n 50
> 
> # 搜索关键词
> python3 export_messages.py -s "关键词"
> 
> # 导出所有会话
> python3 export_messages.py --all
> ```
> 
> ### 5. MCP Server（让 AI 直接查询）
> 
> 安装依赖并注册到 Claude Code：
> 
> ```bash
> pip3 install fastmcp
> claude mcp add wechat -- python3 $(pwd)/mcp_server.py
> ```
> 
> 注册后 AI 可以直接调用以下能力：
> 
> | Tool | 功能 |
> |------|------|
> | `get_recent_sessions` | 获取最近会话列表 |
> | `get_chat_history` | 查看聊天记录（支持模糊匹配） |
> | `search_messages` | 跨会话搜索关键词 |
> | `get_contacts` | 搜索联系人 |
> 
> ## Thanks
> 
> - [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) — 内存搜索方案参考

## 延伸閱讀

相關概念：[[數據解密]] · [[數據隱私]] · [[聊天記錄分析]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
