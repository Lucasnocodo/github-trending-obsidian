---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 383
stars_per_day: 77
forks: 398
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - python
---

# wechat-db-decrypt-macos

**383** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信數據庫，讓用戶能夠導出聊天記錄。

> [!abstract] 核心創新
> 提供了一個針對微信數據的解密和導出解決方案。

## 專案簡介

它通過提取微信數據庫的密鑰，解密 SQLCipher 加密的本地數據庫，並導出聊天記錄。技術上使用 Python，並依賴於特定的 macOS 環境和工具。與其他解密工具相比，它專注於微信數據，並提供了直接查詢的能力，這對於需要分析聊天記錄的用戶非常有用。這個專案在功能上相當實用，但需要特定環境，使用前需謹慎考量。

**技術棧**：`Python`

## 重點功能

- 支持提取和解密微信數據庫密鑰。
- 提供多種導出聊天記錄的選項。
- 支持 AI 直接查詢微信數據。

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
> 作者針對微信用戶的需求，提供了一個實用的解決方案，特別是在隱私和數據分析日益受到重視的背景下。

## 適合誰使用

**目標受眾**：需要導出和分析微信聊天記錄的 macOS 用戶。

> [!example] 使用場景
> - [用戶] 用它來 導出聊天記錄，因為可以保存重要的對話內容。
> - [開發者] 用它來 分析聊天數據，因為能夠直接查詢和導出數據。
> - [研究人員] 用它來 進行社交網絡分析，因為可以獲取大量的對話數據。

> [!warning] 注意事項
> 僅支援 macOS arm64 和微信 4.x 版本。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 398 |
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

相關概念：[[數據解密]] · [[聊天記錄分析]] · [[社交媒體數據]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
