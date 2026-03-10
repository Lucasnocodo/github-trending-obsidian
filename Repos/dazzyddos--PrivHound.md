---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 293
stars_per_day: 73
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
  - "將 Windows 本地權限提升建模為可視化的攻擊路徑圖。"
---

# PrivHound

**293** stars · **73** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升建模為可視化的攻擊路徑圖。

> [!abstract] 核心創新
> PrivHound 將本地權限提升的分析轉化為可視化的圖形，讓多步驟攻擊鏈變得可見和可查詢。

## 專案簡介

PrivHound 將 Windows 本地權限提升的過程轉化為圖形化的攻擊路徑，讓使用者能夠直觀地理解各種權限提升的連結。它基於 BloodHound 的 OpenGraph 框架，能夠列舉 29 種權限提升向量，並將其作為互聯的節點和邊進行展示。與傳統的工具相比，PrivHound 不僅報告單一的配置問題，而是將多個發現串聯起來，形成完整的攻擊鏈。這樣的可視化方式使得使用者能夠快速查詢和分析潛在的攻擊路徑。雖然它的功能強大，但仍需使用者具備一定的安全知識來解讀結果。整體來說，這是一個非常有價值的工具，適合安全專家和滲透測試人員使用。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 將本地權限提升建模為圖形化的攻擊路徑。
- 支持 29 種不同的權限提升向量。
- 基於 BloodHound 的 OpenGraph 框架，便於查詢和分析。
- 能夠將結果與現有的 Active Directory 攻擊路徑重疊。
- 提供多步驟的攻擊鏈視覺化，便於理解。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在安全領域有豐富的經驗，這個專案正好解決了當前在本地權限提升分析中的痛點。隨著安全意識的提升，對於可視化攻擊路徑的需求也逐漸增加，讓這個工具在短時間內受到關注。

## 適合誰使用

**目標受眾**：針對安全專家和滲透測試人員。

> [!example] 使用場景
> - 安全分析師 用它來 分析本地權限提升的攻擊路徑，因為 可以快速識別潛在的安全風險。
> - 滲透測試人員 用它來 確定權限提升的可能性，因為 可以更有效地規劃測試策略。
> - 系統管理員 用它來 評估系統的安全性，因為 可以直觀地了解權限配置的問題。

## 優缺點分析

> [!success] 優點
> - 能夠直觀地顯示權限提升的攻擊路徑。
> - 支持多種權限提升向量的分析。
> - 基於 BloodHound 的強大框架，易於集成。

> [!danger] 缺點
> - 需要使用者具備一定的安全知識。
> - 僅限於 Windows 環境，無法應用於其他系統。
> - 對於複雜的環境可能需要額外的配置。

> [!warning] 注意事項
> - 需要一定的安全知識來解讀結果。
> - 僅針對 Windows 系統設計。
> - 對於複雜的環境可能需要進一步的配置。

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

相關概念：[[權限提升]] · [[攻擊路徑分析]] · [[圖形數據庫]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
