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
month: "2026-03"
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
  - "解密微信本地數據庫，提取聊天記錄，支持 AI 查詢。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信本地數據庫，提取聊天記錄，支持 AI 查詢。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (77 stars/day)
> **適合** 需要從微信中提取數據的 macOS 使用者，特別是開發者和研究人員。
> **一句話重點** 這個專案讓用戶能夠輕鬆提取和查詢微信數據，滿足了數據分析和研究的需求。

> [!abstract] 核心創新
> 這個工具提供了一個針對微信數據庫的解密解決方案，支持 AI 查詢功能。

## 專案簡介

這個專案提供了一個工具來解密微信的本地數據庫，特別針對 macOS arm64 平台。使用者可以透過簡單的命令提取加密的數據庫密鑰，並導出聊天記錄。該工具支持多種導出選項，包括按會話導出和關鍵字搜索，方便用戶快速查找所需信息。與其他解密工具相比，這個專案專注於 macOS 環境，並且提供了與 AI 系統的集成，讓用戶能夠直接查詢微信數據。使用者需注意該工具僅支持微信 4.x 版本，並且需要禁用 SIP 以進行密鑰提取。這個專案適合需要從微信中提取數據的開發者或研究人員，但對於普通用戶來說，可能需要一定的技術背景來操作。

**技術棧**：`Python`

## 重點功能

- 密鑰提取 — 使用 `find_key_memscan.py` 提取微信數據庫密鑰。
- 數據解密 — 使用 `decrypt_db.py` 解密 SQLCipher 加密的數據庫。
- 聊天記錄導出 — 支持按會話或關鍵字導出聊天記錄。
- AI 查詢支持 — 整合 MCP Server，讓 AI 直接查詢微信數據。
- 多平台支持 — 雖然主要針對 macOS，但可在其他環境中進行調整。

## 快速開始

1. 禁用 SIP
```bash
csrutil disable
```
2. 安裝依賴
```bash
brew install llvm sqlcipher
```
3. 提取密鑰
```bash
PYTHONPATH=$(lldb -P) python3 find_key_memscan.py
```

## 程式碼範例

```bash
python3 export_messages.py -c '卡比'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著數據隱私和數據提取需求的增長，這個專案提供了一個針對微信的解決方案，滿足了特定用戶的需求。作者背景在於對數據安全的關注，並且這個工具在社群中引起了廣泛的討論。

## 適合誰使用

**目標受眾**：需要從微信中提取數據的 macOS 使用者，特別是開發者和研究人員。

> [!example] 使用場景
> - 數據分析師用它來提取微信聊天記錄，因為可以快速獲取所需的數據進行分析。
> - 開發者用它來測試微信數據庫的安全性，因為可以檢查加密的有效性。
> - 研究人員用它來收集社交媒體數據，因為可以直接從微信中導出聊天記錄進行研究。

## 優缺點分析

> [!success] 優點
> - 專為微信數據庫設計，功能針對性強。
> - 支持多種導出選項，靈活性高。
> - 集成 AI 查詢功能，提升數據利用率。

> [!danger] 缺點
> - 僅限於特定版本的微信，限制了使用範圍。
> - 需要一定的技術背景來操作，對普通用戶不友好。
> - 禁用 SIP 可能影響系統安全性。

> [!warning] 注意事項
> - 僅支持 macOS arm64 和微信 4.x 版本。
> - 需要禁用 SIP，對於某些用戶來說可能不方便。
> - 不支持 4.0 以下版本的微信。

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

相關概念：[[安全漏洞]] · [[隱私保護]] · [[資料提取]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
