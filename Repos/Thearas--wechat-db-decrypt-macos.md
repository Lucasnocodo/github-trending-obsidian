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
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密微信 4.1 的本地數據庫，導出聊天記錄。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信 4.1 的本地數據庫，導出聊天記錄。

> [!abstract] 核心創新
> 能夠提取和解密微信 4.1 的本地數據庫，並導出聊天記錄。

## 專案簡介

這個專案提供了一個工具來解密微信 4.1 的本地數據庫，並導出聊天記錄。它使用 Python 腳本提取 SQLCipher 加密的數據庫密鑰，並能夠導出特定會話或關鍵字的聊天記錄。與其他解密工具相比，這個工具專注於最新的微信版本，並支持使用 MCP Server 讓 AI 直接查詢微信數據。使用者需要在 macOS arm64 環境下運行，並禁用 SIP 以進行操作。這個工具的效果取決於微信版本和系統環境，對於需要提取聊天記錄的用戶來說非常實用。整體而言，這是一個針對特定需求的解決方案，適合需要直接訪問微信數據的開發者。

**技術棧**：`Python`

## 重點功能

- 支持提取 SQLCipher 加密的微信數據庫密鑰。
- 能夠導出特定會話或關鍵字的聊天記錄。
- 支持 MCP Server 讓 AI 直接查詢微信數據。
- 提供簡單的命令行介面進行操作。
- 兼容最新的微信 4.1 版本。

## 快速開始

1. 確保微信已登錄並運行
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
> 作者針對微信數據的需求開發此工具，隨著用戶對數據隱私的關注，越來越多的人希望能夠自主訪問自己的聊天記錄。近期微信版本的更新也促使了這個工具的需求上升，特別是在開發者社群中。

## 適合誰使用

**目標受眾**：需要解密和導出微信聊天記錄的 macOS 用戶。

> [!example] 使用場景
> - 開發者 用它來 解密和分析微信數據，因為可以直接提取重要信息。
> - 數據分析師 用它來 導出聊天記錄，因為能夠進行關鍵字搜索和會話分析。
> - 普通用戶 用它來 保存重要的聊天記錄，因為可以方便地導出和備份。

## 優缺點分析

> [!success] 優點
> - 專注於最新的微信版本，功能針對性強。
> - 提供簡單的命令行工具，易於使用。
> - 支持 AI 查詢功能，擴展了應用場景。

> [!danger] 缺點
> - 僅限於特定版本的微信，使用範圍有限。
> - 需要禁用 SIP，可能對某些用戶造成困擾。
> - 依賴於 Python 環境配置，對新手不友好。

> [!warning] 注意事項
> - 僅支持微信 4.1 版本，4.0 以下不支援。
> - 需要禁用 SIP 以進行操作。
> - 依賴於特定的 Python 環境和依賴安裝。

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和修復問題。

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

相關概念：[[數據解密]] · [[聊天記錄分析]] · [[SQLCipher]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
