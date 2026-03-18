---
repo: Thearas/wechat-db-decrypt-macos
url: https://github.com/Thearas/wechat-db-decrypt-macos
owner: Thearas
owner_type: User
language: Python
license: WTFPL
description: "macOS arm64 微信 4.1 数据库解密，只在最新的微信 4.1.2.241 测试过，不支持4.0 以下版本"
homepage: ""
stars: 431
stars_per_day: 36
forks: 417
open_issues: 4
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
use_case: "解密 macOS 上的微信 4.1 数据庫，提取聊天記錄與密鑰。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 3
engagement: "high"
issue_close_rate: 33
repo_size_kb: 2321
readme_length: 1139
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:388,2026-03-11:388,2026-03-11:388,2026-03-13:398,2026-03-14:401,2026-03-15:407,2026-03-16:415,2026-03-17:427,2026-03-18:431"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "wechat-db-decrypt-macos"
  - "Thearas/wechat-db-decrypt-macos"
  - "解密 macOS 上的微信 4.1 数据庫，提取聊天記錄與密鑰。"
---

# wechat-db-decrypt-macos

**431** stars · **36** stars/天 · 建立 12 天前 · Python · WTFPL

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
> 解密 macOS 上的微信 4.1 数据庫，提取聊天記錄與密鑰。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (36 stars/day)
> **授權** WTFPL · **維護** Moderate (最後推送 8 天前) · **貢獻者** 3 人 · **參與度** High
> **適合** 需要在 macOS 上解密微信聊天記錄的開發者和數據分析師。
> **一句話重點** 這個專案讓微信數據的提取和解密變得前所未有的簡單，並且支持 AI 查詢，開啟了新的數據分析可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據解密" && p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據解密 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速提取微信數據的效果，值得嘗試。

> [!abstract] 核心創新
> 提供了直接從微信加密數據庫中提取密鑰和數據的功能，並集成了 AI 查詢接口。

## 專案簡介

這個專案的核心功能是提取微信 4.1 的 SQLCipher 加密數據庫密鑰，並解密本地聊天記錄。用戶在運行微信的同時，可以使用 `find_key_memscan.py` 腳本提取密鑰，然後利用 `decrypt_db.py` 解密數據庫，最終通過 `export_messages.py` 導出聊天記錄。這樣的設計使得用戶能夠直接從加密的數據庫中獲取聊天內容，並且支持多種導出選項，例如模糊匹配聯絡人名或關鍵詞搜索，這在其他工具中往往需要額外的步驟。這個工具的賣點在於其簡單的命令行介面和對 AI 查詢的支持，讓用戶能夠更方便地訪問和分析微信數據。使用者只需安裝必要的依賴，並在 macOS arm64 環境下運行即可，這降低了使用門檻。除了基本的解密功能，這個專案還提供了 MCP Server 的集成，讓 AI 能夠直接查詢微信數據，這在現有的解密工具中並不常見。

**技術棧**：`Python 3`

## 重點功能

- 密鑰提取 — 使用 `find_key_memscan.py` 提取 SQLCipher 加密的數據庫密鑰，並保存至 `wechat_keys.json`。
- 數據解密 — 透過 `decrypt_db.py` 解密本地微信數據庫，無需手動操作。
- 聊天記錄導出 — 使用 `export_messages.py` 導出聊天記錄，支持模糊匹配和關鍵詞搜索。
- MCP Server 集成 — 安裝 `fastmcp` 並註冊後，AI 可以直接查詢微信數據，提升數據訪問效率。
- 多種導出選項 — 支持導出所有會話、指定會話或最近 N 條消息，滿足不同需求。

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

```python
{
  "前置條件": "確保微信已登錄並正在運行；",
  "指令": "PYTHONPATH=$(lldb -P) python3 find_key_memscan.py",
  "預期輸出": "密鑰保存到 `wechat_keys.json`。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天內累積 431 stars（36/天），forks 417（96.8%），顯示出極高的使用興趣。這個專案的主要貢獻者有 jackwener 和 jalen0x，他們在開源社群中有一定的影響力。解決了用戶在提取和解密微信數據時的痛點，特別是針對最新版本的支持，這在其他工具中往往不夠完善。社群對於功能的需求和反饋也促進了專案的快速發展，特別是在導出數據時出現的問題。

## 適合誰使用

**目標受眾**：需要在 macOS 上解密微信聊天記錄的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師用它來提取微信聊天記錄，因為能夠快速獲取加密數據並進行分析，避免了手動查找的繁瑣。
> - 開發者用它來測試 AI 模型，因為可以直接從微信數據庫中獲取聊天記錄，進行模型訓練和驗證。
> - 數位隱私研究者用它來分析用戶數據，因為能夠解密並導出用戶的聊天記錄，進行隱私風險評估。

## 架構分析

本專案採用 Python 作為主要開發語言，並依賴 SQLCipher 來處理數據庫的解密。架構上，首先通過 `find_key_memscan.py` 提取密鑰，然後使用 `decrypt_db.py` 解密數據庫，最後通過 `export_messages.py` 導出數據。這種設計使得整個流程簡單明瞭，並且能夠快速獲取所需數據。

選擇 Python 的原因在於其強大的庫支持和簡單的語法，適合快速開發和迭代。由於依賴於 SQLCipher，這也意味著需要一定的學習成本來理解加密和解密的過程。整體上，這個架構在小型項目中表現良好，但在面對更大規模的數據時，可能會遇到性能瓶頸。

使用者需要注意，這個工具的設計是針對特定版本的微信，未來版本的兼容性尚未保證。

## 技術深入分析

這個專案的核心技術機制是使用 Python 來調用 SQLCipher 進行數據庫的解密，並通過內存掃描來提取密鑰。這樣的設計使得用戶能夠在不需要深入了解加密技術的情況下，快速獲取所需數據。效能上，由於主要依賴於 Python 和 SQLCipher，對於小型數據庫的處理速度是相對可接受的，但在面對大型數據時可能會出現性能瓶頸。選擇 Python 的原因在於其生態系統豐富，能夠快速開發和迭代，但這也意味著可能會有較高的記憶體佔用。技術風險方面，由於依賴於特定版本的微信，未來版本的兼容性可能會成為問題。此外，這個工具的安全性也需要考慮，因為禁用 SIP 可能會帶來潛在的安全風險。整合到現有的開發流程中，這個工具的學習曲線相對平緩，但對於不熟悉 Python 的用戶來說，仍然需要一定的時間來適應。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要注意禁用 SIP 的安全風險。整體上，對於有基礎的開發者來說，30 分鐘內應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用的命令行介面，快速上手。
> - 支持多種導出選項，靈活滿足不同需求。
> - 集成 AI 查詢功能，提升數據訪問效率。

> [!danger] 缺點
> - 僅支持特定版本的微信，限制了適用範圍。
> - 需要禁用 SIP，可能影響系統安全。
> - 導出數據時可能出現內容顯示問題。

> [!warning] 注意事項
> - 僅支持微信 4.1 版本，不兼容 4.0 以下版本。
> - 需要禁用 SIP，這可能影響系統安全性。
> - 導出的聊天數據中可能出現表情包、圖片等內容的顯示問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具也支持微信數據解密，但不提供 MCP Server 的集成功能，無法直接讓 AI 查詢數據。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 雖然都是數據提取工具，但專注於小紅書，與微信數據解密的功能和使用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [ylytdeng/wechat-decrypt](https://github.com/ylytdeng/wechat-decrypt) | 這個工具使用不同的內存搜索方法來解密微信數據，但不支持 AI 查詢功能。 | 如果你需要一個更成熟的解密方案，並且不需要 AI 查詢功能，可以考慮它。 | medium，因為需要重新學習不同的操作流程。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書數據提取，使用 Python 開發，但不支持微信數據解密。 | 如果你的需求是針對小紅書的數據提取，這個工具會更合適。 | low，因為操作邏輯相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **wechat-db-decrypt-macos** | **wechat-decrypt** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具使用不同的內存搜索方法來解密微信數據，但不支持 AI 查詢功能。 | 專注於小紅書數據提取，使用 Python 開發，但不支持微信數據解密。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的操作流程。 | low，因為操作邏輯相似。 |
> | 適用場景 | 主要場景 | 如果你需要一個更成熟的解密方案，並且不需要 AI 查詢功能， | 如果你的需求是針對小紅書的數據提取，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 導出的聊天數據中表情包、圖片等內容出現乱码
  - 解法：目前無法解決，建議僅導出純文字內容。
- **[HIGH]** 提取密钥时报错
  - 解法：檢查微信是否已登錄並運行，並確保使用正確的命令。
- **[HIGH]** 不支持 Windows 系統
  - 解法：目前無法解決，建議使用 macOS 環境。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人開發者的微信數據分析 | 非常適合 | 提供了簡單的命令行工具，能快速提取和分析數據。 |
| 小型團隊的數據導出需求 | 適合 | 支持多種導出選項，滿足不同需求。 |
| 大型企業的數據安全審計 | 不適合 | 僅支持特定版本的微信，無法滿足企業級需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速提取微信數據的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性中等，因為需要禁用 SIP，這可能會影響系統的整體安全性。工具本身不需要高權限，但提取過程中可能會存取敏感數據。

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
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 417 |
| Open Issues | 4 |
| Issue 解決率 | 33% (2 closed) |
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

**社群活躍度**：社群活躍度中等，近期有合併請求和問題回應。

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

相關概念：[[CLI/TUI]] · [[數據解密]] · [[隱私保護]]

相關專案：[[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

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
> const concepts = ["CLI/TUI","數據解密","隱私保護"];
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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Thearas--wechat-db-decrypt-macos");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Thearas--wechat-db-decrypt-macos" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
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
