---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 289
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
  - "category/安全"
  - "lang/powershell"
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地權限提升建模為可互動的攻擊路徑圖。"
---

# PrivHound

**289** stars · **72** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升建模為可互動的攻擊路徑圖。

> [!abstract] 核心創新
> PrivHound 將本地權限提升過程視為一個可視化的圖形結構，提供更直觀的分析方式。

## 專案簡介

PrivHound 將 Windows 本地權限提升的過程視為一個圖形結構，讓使用者能夠更直觀地理解攻擊路徑。它基於 BloodHound 的 OpenGraph 框架，能夠列舉 29 種權限提升向量，並將它們以互聯的節點和邊的形式呈現。這與傳統的工具如 WinPEAS 和 PowerUp 不同，後者通常僅報告孤立的發現，而 PrivHound 則能夠將多個發現連結起來，形成完整的攻擊鏈。使用者可以透過 Cypher 查詢這些圖形，進一步分析潛在的攻擊路徑。這個工具的效果在於能夠自動化連結各種權限提升的可能性，並提供更深入的安全分析。對於安全專家和滲透測試人員來說，這是一個非常有價值的工具，尤其是在複雜的環境中進行權限提升分析時。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 將本地權限提升建模為圖形，便於理解和分析。
- 支持 29 種權限提升向量的 enumerations。
- 可與現有的 Active Directory 攻擊路徑重疊，提供更全面的視圖。
- 使用 Cypher 查詢語言進行靈活的查詢。
- 自動化連接多個發現，形成完整的攻擊鏈。

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者 dazzyddos 針對當前安全工具的不足提出了創新解決方案，這個專案滿足了安全專家對於更直觀分析的需求。隨著網路安全威脅的增加，對於權限提升的理解變得越來越重要，這使得 PrivHound 的需求上升。近期的安全事件也促使更多人關注這類工具。

## 適合誰使用

**目標受眾**：對於 Windows 安全性有需求的安全專家和滲透測試人員。

> [!example] 使用場景
> - 安全分析師 用它來 可視化權限提升路徑，因為它能幫助識別潛在的攻擊向量。
> - 滲透測試人員 用它來 自動化權限提升的分析，因為它能節省大量手動連接的時間。
> - 系統管理員 用它來 評估系統安全性，因為它提供了多層次的權限提升視圖。

## 架構分析

基於 BloodHound 的 OpenGraph 框架，將多種權限提升向量以圖形形式呈現，並支持 Cypher 查詢。資料流是 使用者輸入 → 工具分析 → 生成圖形 → 查詢分析結果。

## 優缺點分析

> [!success] 優點
> - 提供直觀的圖形化分析，易於理解和使用。
> - 自動化連接多個發現，節省手動分析時間。
> - 支持多種權限提升向量，分析全面。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法應用於其他作業系統。
> - 需要對 BloodHound 有基本了解才能有效使用。
> - 可能需要手動調整查詢以獲得最佳結果。

> [!warning] 注意事項
> - 僅限於 Windows 環境，無法應用於其他作業系統。
> - 需要對 BloodHound 有基本了解才能有效使用。
> - 可能需要手動調整查詢以獲得最佳結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| BloodHound | BloodHound 專注於 Active Directory，而 PrivHound 專注於本地權限提升的圖形建模。 |
| WinPEAS | WinPEAS 僅報告孤立的發現，而 PrivHound 連結這些發現形成攻擊鏈。 |

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
> If Active Directory attacks can be thought of as a graph, why not local privilege escalation?
> 
> ## The Solution
> 
> PrivHound changes this by modeling local privilege escalation as a graph. Built on BloodHound's OpenGraph framework, it enumerates **29 categories** of Windows privilege escalation vectors, from weak service permissions to COM hijacking to WebClient relay and outputs them as interconnected nodes and edges.
> 
> The result: multi-hop escalation chains become **visible**, **queryable with Cypher**, and **overlayable on top of existing Active Directory attack paths**.
> 
> > **Example:** Your current user can read the profile of another user on the machine. That profile contains cleartext credentials stored on their desktop for a third user. That third user has write permission to a service binary running as Administrator. No existing tool connects these dots. PrivHound does automatically.
> 
> ```
> CurrentUser ─PHCanAccessProfile─→ OtherUser's Profile
>   ─PHProfileContains─→ .git-credentials ─PHContainsCreds─→ ...
>     ─PHCanLoginAs─→ UserX ─PHCanWriteBinary─→ 

## 延伸閱讀

相關概念：[[權限提升]] · [[攻擊路徑分析]] · [[圖形數據結構]]

[GitHub](https://github.com/dazzyddos/PrivHound)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "安全" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
