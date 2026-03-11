---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 385
stars_per_day: 77
forks: 399
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "數據解密"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "解密微信 4.1 数据库，讓你輕鬆導出聊天記錄。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "high"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密微信 4.1 数据库，讓你輕鬆導出聊天記錄。"
---

# wechat-db-decrypt-macos

**385** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密微信 4.1 数据库，讓你輕鬆導出聊天記錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (77 stars/day)
> **授權** WTFPL · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人
> **適合** 需要在 macOS 上解密微信 4.1 數據庫並導出聊天記錄的開發者和研究者。
> **一句話重點** 這個專案讓微信數據的解密和導出變得簡單，特別適合需要進行數據分析的開發者。

> [!abstract] 核心創新
> 提供了完整的微信數據解密和導出功能，支持 AI 查詢接口。

## 專案簡介

這個專案提供了一個工具來解密微信 4.1 的 SQLCipher 加密本地數據庫，讓用戶能夠提取聊天記錄。使用者首先需要在 macOS arm64 環境下，禁用 SIP，並安裝必要的依賴。接著，透過 `find_key_memscan.py` 腳本提取密鑰，密鑰會儲存到 `wechat_keys.json`。然後，使用 `decrypt_db.py` 進行數據庫解密，最後可以透過 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索等功能。這個工具還支持 MCP Server，讓 AI 能夠直接查詢微信數據，提供如獲取最近會話、查看聊天記錄等功能。與其他工具相比，這個專案專注於最新的微信版本，並且提供了完整的查詢接口，方便用戶進行數據操作。使用者需要在 macOS 環境下運行，並且需要禁用 SIP，這對於一般用戶來說可能是一個障礙。這個專案目前處於 beta 階段，適合對微信數據有需求的開發者和研究者使用。建議在需要提取微信聊天記錄時使用，但不建議用於生產環境，因為可能存在安全風險。

**技術棧**：`Python 3`

## 重點功能

- 密鑰提取 — 使用 `find_key_memscan.py` 提取微信數據庫密鑰，並儲存至 `wechat_keys.json`。
- 數據庫解密 — 使用 `decrypt_db.py` 解密 SQLCipher 加密的微信數據庫。
- 聊天記錄導出 — 使用 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索。
- MCP Server 支持 — 讓 AI 直接查詢微信數據，提供如 `get_recent_sessions` 和 `search_messages` 等功能。
- 多種導出選項 — 支持導出指定會話、最近 N 條消息或所有會話。

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

## 程式碼範例

```bash
# 提取密鑰
PYTHONPATH=$(lldb -P) python3 find_key_memscan.py

# 解密數據庫
python3 decrypt_db.py

# 導出指定會話
python3 export_messages.py -c "卡比"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的主要貢獻者包括 jackwener 和 jalen0x，他們在開源社群中有一定的知名度。該工具解決了用戶在微信中無法直接導出聊天記錄的痛點，特別是在需要進行數據分析或備份時。最近在社交媒體上有關於微信數據隱私的討論，讓這個工具引起了更多的關注。由於微信的更新頻繁，這個工具的針對性和實用性使其在當前環境下顯得尤為重要。

## 適合誰使用

**目標受眾**：需要在 macOS 上解密微信 4.1 數據庫並導出聊天記錄的開發者和研究者。

> [!example] 使用場景
> - 數據分析師用它來導出微信聊天記錄，因為手動複製聊天內容效率低且容易出錯。
> - 開發者用它來測試微信數據的安全性，因為能夠直接查詢和分析加密數據。
> - 研究者用它來進行社交網絡分析，因為能夠快速獲取大量的聊天數據進行研究。

## 架構分析

這是一個 CLI 工具，主要架構為單體應用。用戶輸入 → 提取密鑰 → 解密數據庫 → 導出聊天記錄。關鍵技術決策包括使用 Python 進行數據處理和 SQLCipher 解密。專案目錄結構包括 `find_key_memscan.py`、`decrypt_db.py` 和 `export_messages.py` 等核心檔案。

## 技術深入分析

這個專案的核心技術機制是利用 Python 腳本提取和解密微信的 SQLCipher 加密數據庫。通過 `find_key_memscan.py` 提取密鑰，然後使用 `decrypt_db.py` 解密數據，最後利用 `export_messages.py` 導出數據。該工具能夠處理的數據量取決於微信的聊天記錄大小，理論上可以處理數千條消息。設計上選擇 Python 是因為其在數據處理和腳本編寫上的靈活性，但這也意味著性能可能不如編譯語言。隨著用戶數據量的增加，解密和導出過程可能會變得緩慢，特別是在大型數據集上。安全性方面，這個工具需要禁用 SIP，這可能會帶來風險，使用者需謹慎考量。整體而言，這個專案在解密和導出微信數據方面提供了一個有效的解決方案，但在使用時需注意安全性和平台限制。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程需要禁用 SIP，這對於新手來說可能有些挑戰。整體上，對於熟悉命令行的用戶來說，能在 30 分鐘內完成安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 支持最新的微信版本，能夠解密和導出聊天記錄。
> - 提供了多種導出選項，靈活性高。
> - 支持 AI 查詢接口，方便進行數據分析。
> - 安裝和使用過程相對簡單，適合開發者使用。

> [!danger] 缺點
> - 僅支持 macOS arm64，無法在其他平台使用。
> - 需要禁用 SIP，對於一般用戶來說不夠友好。
> - 僅支持微信 4.1 及以上版本，限制了使用範圍。
> - 存在潛在的安全風險，使用時需謹慎。

> [!warning] 注意事項
> - 僅支持微信 4.1 及以上版本。
> - 需要禁用 SIP，這對於一般用戶來說可能是一個障礙。
> - 僅在 macOS arm64 環境下運行，無法在其他平台使用。
> - 可能存在安全風險，使用時需謹慎。

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

相關概念：[[數據解密]] · [[社交媒體分析]] · [[隱私保護]]

相關專案：[[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
