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
category: "資料科學"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/資料科學"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密微信資料庫，導出聊天記錄，無需雲端。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信資料庫，導出聊天記錄，無需雲端。

> [!abstract] 核心創新
> 提供了一個有效的解決方案來解密和導出微信數據，支持 AI 直接查詢。

## 專案簡介

這個專案提供了一個工具，能夠在 macOS 上解密微信的 SQLCipher 加密資料庫，並導出聊天記錄。使用者需在 macOS arm64 上運行，並禁用 SIP，然後通過 Python 腳本提取密鑰和解密資料庫。與其他解密工具相比，這個專案的特點在於它專注於微信的資料庫結構，並且支持直接查詢功能，讓 AI 能夠快速訪問聊天數據。實際使用中，該工具能夠有效提取和導出聊天記錄，但需要注意的是僅支援特定版本的微信。整體而言，這是一個對於需要訪問微信數據的開發者和研究者非常有用的工具。

**技術棧**：`Python`

## 重點功能

- 支持解密微信 SQLCipher 加密的本地資料庫。
- 能夠導出聊天記錄，支持模糊匹配。
- 提供 MCP Server 功能，讓 AI 直接查詢數據。
- 支持多種導出選項，包括按會話和關鍵字搜索。
- 簡單的安裝和使用流程。

## 快速開始

1. 確保微信已登錄並運行
2. 提取密鑰
```bash
PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
```
3. 解密資料庫
```bash
python3 decrypt_db.py
```
4. 導出聊天記錄
```bash
python3 export_messages.py --all
```
5. 設置 MCP Server
```bash
pip3 install fastmcp
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著對數據隱私和數據訪問需求的增加，這個專案提供了一個有效的解決方案來解密和導出微信數據。作者的開發背景和對微信資料庫的深入了解使得這個工具在特定社群中受到重視。近期的更新和功能增強也提升了其吸引力。

## 適合誰使用

**目標受眾**：需要解密和訪問微信數據的開發者和研究者。

> [!example] 使用場景
> - 數據分析師 用它來 提取微信聊天記錄，因為可以分析用戶行為和趨勢。
> - 開發者 用它來 測試微信資料庫，因為能夠直接訪問和操作數據。
> - 研究者 用它來 收集聊天數據，因為可以進行社會學或心理學的研究。

## 優缺點分析

> [!success] 優點
> - 能夠有效解密和導出微信聊天記錄。
> - 支持多種導出選項，靈活性高。
> - 簡單的安裝流程，易於上手。

> [!danger] 缺點
> - 僅限於特定版本的微信，使用範圍有限。
> - 需要禁用 SIP，可能影響系統安全性。
> - 對於非 macOS 平台不支援。

> [!warning] 注意事項
> - 僅支援 macOS arm64 和微信 4.x 版本。
> - 需要禁用 SIP，可能影響系統安全性。
> - 對於 4.0 以下版本的微信不支援。

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

相關概念：[[數據解密]] · [[SQLCipher]] · [[聊天記錄分析]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "Thearas--wechat-db-decrypt-macos"
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
