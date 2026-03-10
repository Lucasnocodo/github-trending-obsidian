---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 288
stars_per_day: 72
forks: 28
open_issues: 1
created: 2026-03-06
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 安全
  - powershell
---

# PrivHound

**288** stars · **72** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升建模為互聯網攻擊路徑的工具。

> [!abstract] 核心創新
> 將本地權限提升過程視覺化為互聯網攻擊路徑。

## 專案簡介

這個專案通過 BloodHound 將 Windows 的本地權限提升過程視覺化，幫助用戶理解攻擊路徑。它能夠將不同的發現連結起來，讓用戶更清楚如何利用這些漏洞。與傳統工具相比，它不僅報告單一的配置問題，而是提供一個整體的攻擊鏈視圖。這個專案對於安全研究人員和滲透測試者來說，提供了更深入的分析工具，值得關注。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 將本地權限提升過程建模為圖形化的攻擊路徑。
- 幫助用戶理解多步驟的攻擊鏈。
- 提供比傳統工具更深入的分析視圖。
- 支持 BloodHound 的數據結構。
- 能夠連結不同的發現，提供整體視圖。

## 為什麼值得關注

> [!tip] 爆紅原因
> 針對 Windows 權限提升的需求提供了創新的視覺化解決方案，吸引了安全領域的專業人士。

## 適合誰使用

**目標受眾**：Windows 系統的安全研究人員和滲透測試者。

> [!example] 使用場景
> - 安全研究員 用它來 分析攻擊路徑，因為能夠視覺化複雜的權限提升過程。
> - 滲透測試者 用它來 評估系統安全性，因為能夠快速識別潛在的攻擊路徑。
> - 系統管理員 用它來 了解權限配置，因為能夠清楚地看到風險點。

> [!warning] 注意事項
> 需要對 Windows 安全有基本了解。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 28 |
| Open Issues | 1 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 1.1 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "PowerShell" : 90
>     "Cypher" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dazzyddos](https://github.com/dazzyddos) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PrivHound
> 
> **Local Privilege Escalation, as a Graph.**
> 
> A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths not a wall of text.
> 
> ---
> 
> ## The Problem
> 
> For a long time, BloodHound has proven that attackers think in graphs, transforming Active Directory misconfigurations from static checklists into explorable attack paths. Yet when it comes to local privilege escalation, the industry is still stuck in 2015: run a tool, read a wall of text, manually connect the dots or have LLM do it for you :P
> 
> WinPEAS, PowerUp, and Seatbelt are excellent at finding individual misconfigurations, but they cannot answer questions like:
> 
> - *"Does this writable Program Files directory actually lead to SYSTEM because a service runs a binary from it?"*
> - *"Does this PowerShell history file contain credentials that are valid for a local admin?"*
> - *"Can I read another user's profile, find their stored credentials, log in as them, and exploit a service they have write access to?"*
> 
> These tools report findings in isolation. In reality, privilege escalation is a **multi-step chain** where one finding feeds into another. A writable directory means nothing if no service runs from it. A credential in a history file means nothing if it doesn't belong to a privileged user. The real question is never "what misconfigurations exist?" — it's **"what can I actually reach from here?"**
> 
> If Active Directory attacks can be thought of as a graph, why not loca

## 延伸閱讀

相關概念：[[權限提升]] · [[安全分析]] · [[攻擊路徑]]

[GitHub](https://github.com/dazzyddos/PrivHound)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
