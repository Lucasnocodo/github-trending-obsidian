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
  - "解密微信 4.1 数据库，讓你輕鬆導出聊天記錄和查詢數據。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信 4.1 数据库，讓你輕鬆導出聊天記錄和查詢數據。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (77 stars/day)
> **適合** 需要在 macOS 上解密和導出微信聊天記錄的開發者和個人用戶。
> **一句話重點** 這個專案讓解密微信數據變得簡單高效，特別適合需要提取聊天記錄的用戶。

> [!abstract] 核心創新
> 這個專案提供了針對最新微信版本的數據解密和導出功能，並支持 AI 查詢。

## 專案簡介

這個專案提供了一個工具，專門用來解密微信 4.1 的 SQLCipher 加密數據庫，並導出聊天記錄。使用者需要在 macOS arm64 環境下，禁用 SIP，並安裝必要的依賴（如 llvm 和 sqlcipher）。解密流程包括提取密鑰、解密數據庫，然後利用 Python 腳本導出聊天記錄，支持模糊匹配和關鍵字搜索等功能。與其他解密工具相比，這個專案專注於最新的微信版本，並且提供了 MCP Server 支持，讓 AI 可以直接查詢微信數據。使用者在導出時可以選擇特定會話或最近 N 條消息，這在需要快速查找信息時非常方便。這個專案目前處於穩定狀態，適合需要提取微信數據的個人或小型團隊。若你的需求是針對最新版本的微信，這個工具非常值得一試；但如果你使用的是舊版本，則無法使用。

**技術棧**：`Python 3`

## 重點功能

- 密鑰提取 — 使用 `PYTHONPATH=$(lldb -P) python3 find_key_memscan.py` 提取微信數據庫密鑰。
- 數據解密 — 使用 `python3 decrypt_db.py` 解密 SQLCipher 加密的數據庫。
- 聊天記錄導出 — 使用 `python3 export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索。
- MCP Server 支持 — 讓 AI 直接查詢微信數據，使用 `pip3 install fastmcp` 安裝依賴。
- 多種導出選項 — 支持導出所有會話、最近 N 條消息或特定會話。

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
4. 解密數據庫
```bash
python3 decrypt_db.py
```
5. 導出聊天記錄
```bash
python3 export_messages.py --all
```

## 程式碼範例

```bash
python3 export_messages.py -c "卡比" -n 50
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景是對微信數據有深入研究的開發者，這個工具切中了一個特定需求，即在 macOS 環境下解密微信數據。隨著用戶對數據隱私和數據提取需求的增加，這個工具的實用性讓它在社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要在 macOS 上解密和導出微信聊天記錄的開發者和個人用戶。

> [!example] 使用場景
> - 數據科學家用它來提取和分析微信聊天記錄，因為手動查找和整理數據效率低下。
> - 開發者用它來測試微信相關的應用，因為能夠直接查詢和導出聊天數據，方便進行功能驗證。
> - 個人用戶用它來備份重要的聊天記錄，因為可以快速導出特定會話，避免數據丟失。

## 架構分析

這是一個 CLI 工具，主要架構為單體應用。用戶輸入 → 提取密鑰 → 解密數據庫 → 導出聊天記錄。關鍵技術決策包括使用 Python 進行數據處理和導出。專案目錄結構中，`find_key_memscan.py` 和 `decrypt_db.py` 是核心檔案。

## 優缺點分析

> [!success] 優點
> - 專注於最新的微信版本，提供針對性解決方案。
> - 支持多種導出選項，滿足不同需求。
> - 提供 AI 查詢功能，提升數據使用效率。

> [!danger] 缺點
> - 僅限於 macOS arm64 環境，限制了使用範圍。
> - 需要禁用 SIP，可能影響系統安全性。
> - 不支持舊版本微信，無法滿足所有用戶需求。

> [!warning] 注意事項
> - 僅支持微信 4.1 版本，4.0 以下版本無法使用。
> - 需要在 macOS arm64 環境下運行，無法在其他操作系統上使用。
> - 必須禁用 SIP，這可能會影響系統安全性。

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

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Thearas--wechat-db-decrypt-macos"
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
