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
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在 macOS 上解密微信 4.x 的聊天記錄，輕鬆導出資料。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "讓你在 macOS 上解密微信 4.x 的聊天記錄，輕鬆導出資料。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 讓你在 macOS 上解密微信 4.x 的聊天記錄，輕鬆導出資料。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (77 stars/day)
> **適合** 需要在 macOS 上提取和分析微信聊天記錄的獨立開發者或研究者。
> **一句話重點** 這個專案展示了如何在特定平台上針對特定應用進行資料解密，並提供了便捷的導出功能。

> [!abstract] 核心創新
> 這個專案提供了一個針對 macOS arm64 的微信資料庫解密工具，專注於最新的微信版本。

## 專案簡介

這個專案提供了一個工具，能夠在 macOS 上提取微信的資料庫密鑰，並解密 SQLCipher 加密的本地資料庫，最終導出聊天記錄。使用者需在終端執行 `find_key_memscan.py` 來獲取密鑰，然後透過 `decrypt_db.py` 解密資料庫。專案還支援 MCP Server，讓 AI 能直接查詢微信資料，提供如 `get_recent_sessions` 和 `search_messages` 等功能。與其他解密工具相比，這個專案專注於 macOS arm64 平台，並且只支援微信 4.1 版本，這使得它在特定環境下非常專業。使用者需注意，這個工具需要禁用 SIP，並安裝特定的依賴。整體來說，這是一個針對特定需求的解決方案，適合需要從微信中提取資料的開發者或研究者。對於小型團隊或個人使用者來說，這個工具的成熟度尚可，值得一試，但不適合大規模商業用途。

**技術棧**：`Python`

## 重點功能

- 密鑰提取 — 使用 `find_key_memscan.py` 提取微信資料庫密鑰，並將其保存到 `wechat_keys.json`。
- 資料庫解密 — 透過 `decrypt_db.py` 解密 SQLCipher 加密的資料庫。
- 聊天記錄導出 — 使用 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索。
- MCP Server 支援 — 安裝 `fastmcp` 並註冊後，AI 可直接查詢微信資料。
- 多種導出選項 — 支持導出所有會話、指定會話或最近 N 條消息。

## 快速開始

1. 安裝依賴
```bash
brew install llvm sqlcipher
```
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

## 程式碼範例

```bash
python3 export_messages.py -c "卡比" -n 50
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景是對微信資料安全有深入研究的開發者，這個工具切中許多需要提取聊天記錄的需求。隨著人們對數據隱私的關注增加，這個工具的實用性逐漸被認識。相較於早期的解密工具，這個專案提供了更簡單的使用流程和更強大的功能。

## 適合誰使用

**目標受眾**：需要在 macOS 上提取和分析微信聊天記錄的獨立開發者或研究者。

> [!example] 使用場景
> - 數據分析師用它來提取特定聯絡人的聊天記錄，因為手動查找過程繁瑣且容易遺漏。
> - 開發者用它來集成微信聊天數據到自動化報告中，因為這樣可以節省大量的時間和精力。
> - 研究人員用它來分析社交互動模式，因為能夠快速導出大量的聊天數據以進行深入分析。

## 優缺點分析

> [!success] 優點
> - 專注於最新的微信版本，提供針對性的解決方案。
> - 簡化的使用流程，讓用戶能快速提取和導出資料。
> - 支援 AI 查詢功能，擴展了資料的應用場景。

> [!danger] 缺點
> - 僅限於 macOS arm64，無法在其他平台上使用。
> - 需要禁用 SIP，可能對系統安全造成影響。
> - 對於不熟悉命令行的使用者來說，安裝和使用過程可能較為複雜。

> [!warning] 注意事項
> - 僅支援微信 4.1 版本，4.0 以下版本不兼容。
> - 需要禁用 SIP，這可能會影響系統安全性。
> - 僅支援 macOS arm64 平台，無法在其他操作系統上使用。
> - 需要安裝特定依賴，對於不熟悉命令行的使用者可能有一定難度。

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

相關專案：[[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Thearas--wechat-db-decrypt-macos"
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
