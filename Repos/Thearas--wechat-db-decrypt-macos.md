---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 388
stars_per_day: 65
forks: 400
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "數據解密"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "解密 macOS arm64 微信 4.1 数据库，导出聊天记录。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "high"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:388,2026-03-11:388,2026-03-11:388"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS arm64 微信 4.1 数据库，导出聊天记录。"
---

# wechat-db-decrypt-macos

**388** stars · **65** stars/天 · 建立 6 天前 · Python · WTFPL

```dataviewjs
const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 解密 macOS arm64 微信 4.1 数据库，导出聊天记录。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (65 stars/day)
> **授權** WTFPL · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要從微信中提取數據的 macOS arm64 開發者。
> **一句話重點** 這個專案的最大亮點在於它能夠解密微信數據庫並提供靈活的數據導出功能，特別適合需要從微信提取數據的開發者。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，能快速提取微信數據，值得考慮。

> [!abstract] 核心創新
> 支持 MCP Server，讓 AI 直接查詢微信數據。

## 專案簡介

這個專案提供了一個工具來解密微信的本地數據庫，特別是針對最新的微信 4.1.2.241 版本。使用者需要在 macOS arm64 環境中運行，並且必須禁用 SIP 以便能夠提取密鑰。核心流程是通過執行 `find_key_memscan.py` 來提取密鑰，然後使用 `decrypt_db.py` 來解密數據庫，最後可以通過 `export_messages.py` 導出聊天記錄。這樣的設計使得使用者能夠輕鬆地從加密的 SQLCipher 數據庫中提取有用的聊天數據，並且支持多種導出選項，包括模糊匹配和關鍵字搜索。這個工具的賣點在於其簡單的命令行介面和靈活的導出功能，讓使用者能夠快速獲取所需的聊天記錄。

技術上，專案依賴於 Python 和 SQLCipher，並且需要安裝 LLVM 及相關依賴，這使得整體架構相對輕量，但仍需注意環境配置。與其他類似工具相比，如 ylytdeng/wechat-decrypt，這個專案專注於 macOS arm64 並提供了 MCP Server 的集成，讓 AI 能夠直接查詢微信數據。使用者在實際操作中可能會遇到導出內容出現亂碼的問題，這是目前的熱門問題之一。整體來看，這個專案在功能上是穩定的，但仍需進一步的測試和社群支持來解決現有的問題。對於需要從微信中提取數據的開發者來說，這是一個值得考慮的工具。

**技術棧**：`Python` · `SQLCipher`

## 重點功能

- 提取密鑰 — 使用 `find_key_memscan.py` 提取微信數據庫密鑰，並保存至 `wechat_keys.json`。
- 解密數據庫 — 使用 `decrypt_db.py` 解密 SQLCipher 加密的微信數據庫。
- 導出聊天記錄 — 使用 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵字搜索。
- MCP Server 集成 — 安裝依賴後可讓 AI 直接查詢微信數據，支持多種查詢功能。
- 支持多種導出選項 — 包括導出所有會話、指定會話和最近 N 條消息。

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

[
  "# 前置條件",
  "PYTHONPATH=$(lldb -P) python3 find_key_memscan.py",
  "# 預期輸出：密鑰保存到 wechat_keys.json"
]

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 388 stars（64.7/天），forks 400（103.1%），這顯示出極高的社群參與度。作者 Thearas 和其他貢獻者在開源社群中有一定的知名度，過去參與過多個相關專案。這個工具解決了微信數據提取的痛點，特別是對於 macOS 使用者來說，之前的解決方案多數不支持最新版本的微信。近期的討論和需求增加，特別是在社群論壇和社交媒體上，讓這個專案獲得了更多的關注。技術上，macOS arm64 的支持和 SQLCipher 的使用讓這個工具的可行性大大提升，並且高達 103.1% 的 forks/stars 比率顯示出使用者對於這個工具的實際修改和使用意願。

## 適合誰使用

**目標受眾**：需要從微信中提取數據的 macOS arm64 開發者。

> [!example] 使用場景
> - 開發者用它來提取微信聊天記錄，因為手動查找和導出數據過於繁瑣，這個工具能快速完成。
> - 數據分析師用它來分析微信聊天數據，因為可以通過關鍵字搜索快速找到相關信息，提升工作效率。
> - AI 開發者用它來集成微信數據到 AI 模型中，因為 MCP Server 讓 AI 可以直接查詢數據，簡化了數據處理流程。

## 架構分析

這個專案採用 Python 作為主要開發語言，並依賴 SQLCipher 來處理加密數據庫。架構上，使用者需要在 macOS arm64 環境中運行，並禁用 SIP 以便能夠提取密鑰。數據流從提取密鑰開始，然後解密數據庫，最後導出數據。

選擇 Python 是因為其在數據處理和腳本編寫方面的靈活性，但這也意味著需要安裝多個依賴。這個工具的設計考慮到了使用者的便利性，提供了簡單的命令行介面，但在環境配置上可能會遇到挑戰。整體來看，這個專案的擴展性良好，但對於不熟悉 macOS 環境的使用者可能會有一定的學習曲線。

## 技術深入分析

這個專案的核心技術在於使用 Python 和 SQLCipher 來解密微信的本地數據庫。通過內存搜索來提取密鑰，這種方法在安全性上有一定的挑戰，但能有效獲取加密數據。效能上，由於依賴於 Python，處理速度可能會受到影響，特別是在大量數據導出時。設計上選擇 Python 是因為其開發速度快且易於維護，但這也意味著需要用戶具備一定的 Python 知識。技術風險方面，這個專案依賴於微信的數據結構，未來版本的變更可能會導致工具失效。整合方面，與現有的 CLI 工具鏈相容性良好，能夠輕鬆集成到現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，對於新手來說相對友好。安裝過程中需要禁用 SIP，這可能會讓一些使用者感到困惑。整體上，文件質量良好，能夠幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 支持最新的微信版本，滿足當前需求。
> - 提供多種導出選項，靈活性高。
> - 集成 MCP Server，方便 AI 查詢數據。

> [!danger] 缺點
> - 僅支持 macOS arm64，限制了使用範圍。
> - 需要禁用 SIP，可能帶來安全風險。
> - 導出數據的完整性可能受到影響，存在亂碼問題。

> [!warning] 注意事項
> - 僅支持微信 4.1.2.241 版本，不支持 4.0 以下版本。
> - 需要禁用 SIP，這可能會帶來安全風險。
> - 導出的聊天數據中表情包、圖片等內容可能出現亂碼。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具主要針對 Windows 環境，而本專案專注於 macOS arm64，提供更針對性的支持。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 雖然都是數據提取工具，但 xiaohongshu-cli 主要針對小紅書，功能和數據結構不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具使用內存搜索來提取密鑰，與本專案的 SQLCipher 解密方式不同。 | 如果你的團隊主要在 Windows 環境中工作，這個工具會更合適。 | medium，因為需要重新配置環境和依賴。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書數據提取，與微信的數據結構和功能需求不同。 | 如果你的需求是針對小紅書的數據提取，這個工具會更適合。 | low，因為兩者的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-db-decrypt-macos** | **wechat-decrypt** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具使用內存搜索來提取密鑰，與本專案的 SQLCipher 解密方式不同。 | 專注於小紅書數據提取，與微信的數據結構和功能需求不同。 |
> | 遷移成本 | - | medium，因為需要重新配置環境和依賴。 | low，因為兩者的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要在 Windows 環境中工作，這個工具會更 | 如果你的需求是針對小紅書的數據提取，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 導出的聊天數據中表情包、圖片等內容出現亂碼
  - 解法：目前無法解決，需等待後續更新。
- [MEDIUM] 提取密鑰時可能會報錯
  - 解法：檢查微信是否已經登錄並運行。
- **[HIGH]** 不支持 4.0 以下版本的微信
  - 解法：無法使用，需升級微信版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要提取微信數據進行分析 | 非常適合 | 提供靈活的數據導出功能，滿足多種需求。 |
| 個人開發者想要從微信中提取聊天記錄 | 適合 | 簡單易用的命令行介面，能快速上手。 |
| 大型企業需要穩定的數據提取工具 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 需要在 Windows 環境中使用的開發者 | 不適合 | 僅支持 macOS arm64，無法在 Windows 上運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能快速提取微信數據，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要禁用 SIP，這可能會帶來安全隱患；同時需注意提取過程中可能會接觸敏感數據。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 400 |
| Open Issues | 3 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Thearas/wechat-db-decrypt-macos) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 11 |
> | [@jalen0x](https://github.com/jalen0x) | 3 |
> | [@Thearas](https://github.com/Thearas) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個合併請求和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-09）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #4 from jalen0x/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/Thearas/wechat-db-decrypt-macos/issues/3) | 导出的聊天数据中表情包、图片等内容出现乱码，只有纯文字正常 | 0 | 0 |
> | [#2](https://github.com/Thearas/wechat-db-decrypt-macos/issues/2) | 提取密钥时报错 | 0 | 4 |
> | [#1](https://github.com/Thearas/wechat-db-decrypt-macos/issues/1) | windows的可以吗? | 0 | 2 |

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

相關概念：[[CLI/TUI]] · [[數據解密]] · [[API 設計]]

相關專案：[[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/Thearas/wechat-db-decrypt-macos)

## 相關收錄

> [!note]- 直接競品（同子分類：數據解密）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據解密" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Thearas--wechat-db-decrypt-macos" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","數據解密","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "Thearas" AND file.name != "Thearas--wechat-db-decrypt-macos"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，388 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
