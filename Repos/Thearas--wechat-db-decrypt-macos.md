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
subcategory: "數據解密"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "解密 macOS 上微信 4.1 的本地加密数据库，方便导出聊天记录。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS 上微信 4.1 的本地加密数据库，方便导出聊天记录。"
---

# wechat-db-decrypt-macos

**384** stars · **77** stars/天 · 建立 5 天前 · Python · WTFPL

> [!summary] 一句話摘要
> 解密 macOS 上微信 4.1 的本地加密数据库，方便导出聊天记录。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (77 stars/day)
> **授權** WTFPL
> **適合** 需要在 macOS 上解密微信 4.1 聊天記錄的開發者或研究者。
> **一句話重點** 這個專案展示了如何在 macOS 上有效解密和導出微信聊天記錄，並提供了與 AI 整合的創新思路。

> [!abstract] 核心創新
> 這個專案提供了一個專門針對微信 4.1 的數據庫解密工具，並整合了 AI 查詢功能。

## 專案簡介

這個專案提供了一個工具來解密微信 4.1 的本地 SQLCipher 加密數據庫，並導出聊天記錄。使用者需要在 macOS arm64 環境中運行，並禁用 SIP，然後透過一系列 Python 腳本提取密鑰和解密數據庫。核心流程包括使用 `find_key_memscan.py` 提取密鑰，接著用 `decrypt_db.py` 解密數據庫，最後使用 `export_messages.py` 導出聊天記錄，支持多種查詢方式。與其他解密工具相比，這個專案專注於微信 4.1 的特定版本，並且提供了與 AI 直接查詢的 MCP Server 整合，這在其他工具中並不常見。實際使用中，這個工具能夠快速導出指定會話的聊天記錄，並支持關鍵字搜索，但僅限於最新版本的微信，使用者需注意版本限制。這個專案目前處於穩定階段，適合需要提取微信數據的開發者或研究者。對於不需要解密微信數據的使用者，則不建議使用。

**技術棧**：`Python 3`

## 重點功能

- 密鑰提取 — 使用 `find_key_memscan.py` 提取微信數據庫密鑰，並保存至 `wechat_keys.json`。
- 數據庫解密 — 使用 `decrypt_db.py` 解密 SQLCipher 加密的微信數據庫。
- 聊天記錄導出 — 使用 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索。
- MCP Server 整合 — 安裝 `fastmcp` 並註冊到 Claude Code，讓 AI 能直接查詢微信數據。
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
python3 export_messages.py -c "卡比" -n 50
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的主要貢獻者 Jackwener 和 Jalen0x 在開源社群中有一定的知名度，過去也參與過其他相關專案。它解決了在 macOS 上提取微信聊天記錄的痛點，特別是針對最新版本的支持。最近的社交媒體討論和需求增加可能促進了這個專案的曝光度。由於微信的使用者基數龐大，對於數據提取的需求也隨之增長，這使得這個工具在當前環境下變得更加重要。

## 適合誰使用

**目標受眾**：需要在 macOS 上解密微信 4.1 聊天記錄的開發者或研究者。

> [!example] 使用場景
> - 數據分析師用它來提取特定聯絡人的聊天記錄，因為手動查找聊天記錄耗時且容易錯過重要信息。
> - 開發者用它來整合微信數據到自己的應用中，因為可以直接透過 MCP Server 查詢數據，提升開發效率。
> - 研究人員用它來分析社交媒體互動模式，因為能夠快速導出大量聊天數據進行分析，節省時間。

## 架構分析

這是一個 CLI 工具，主要由多個 Python 腳本組成。用戶輸入 → 提取密鑰 → 解密數據庫 → 導出聊天記錄。關鍵技術決策包括使用 SQLCipher 進行數據庫加密和解密，並透過 MCP Server 提供 AI 查詢接口。專案目錄結構包含 `find_key_memscan.py`、`decrypt_db.py` 和 `export_messages.py` 等關鍵檔案。

## 優缺點分析

> [!success] 優點
> - 專注於微信 4.1，提供針對性的解決方案。
> - 支持多種導出選項，靈活性高。
> - 整合 AI 查詢功能，提升數據使用效率。

> [!danger] 缺點
> - 僅支持特定版本，限制使用範圍。
> - 需要禁用 SIP，對某些使用者不方便。
> - 安裝過程相對複雜，需要安裝依賴。

> [!warning] 注意事項
> - 僅支持微信 4.1 版本，4.0 以下版本不兼容。
> - 需要在 macOS arm64 環境中運行，無法在其他平台使用。
> - 需要禁用 SIP，這對於某些使用者來說可能不方便。

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
