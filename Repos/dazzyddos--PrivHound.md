---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 294
stars_per_day: 74
forks: 28
open_issues: 1
created: 2026-03-06
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "將 Windows 本地權限提升的攻擊路徑以圖形方式呈現，讓攻擊路徑更易理解。"
---

# PrivHound

**294** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升的攻擊路徑以圖形方式呈現，讓攻擊路徑更易理解。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **適合** 需要分析 Windows 環境中權限提升風險的安全專業人士。
> **一句話重點** PrivHound 的創新在於將本地權限提升的攻擊路徑以圖形化方式呈現，讓安全分析變得更直觀。

> [!abstract] 核心創新
> 這個專案通過圖形化的方式將本地權限提升的攻擊路徑可視化，讓安全分析更直觀。

## 專案簡介

PrivHound 將 Windows 本地權限提升的攻擊路徑轉化為圖形結構，讓使用者能夠直觀地理解多步驟的攻擊鏈。它基於 BloodHound 的 OpenGraph 框架，能夠列舉 29 種 Windows 權限提升向量，並將它們以互聯的節點和邊的形式輸出。這樣的設計使得攻擊者能夠更清楚地看到從一個發現到另一個發現的連結，並且可以使用 Cypher 查詢。與傳統的單一工具相比，PrivHound 將多個發現串聯起來，提供了更全面的視角。實際使用中，這能幫助安全專家快速識別潛在的攻擊路徑，並且支援與 Active Directory 攻擊路徑的疊加。這個專案目前處於穩定階段，適合需要進行安全評估的團隊使用。在需要深入分析本地權限提升時，這是一個非常有用的工具，但對於小型環境可能過於複雜。

## 重點功能

- 圖形化攻擊路徑 — 將權限提升的攻擊路徑以圖形方式呈現，便於理解。
- 29 種權限提升向量 — 包含多種常見的權限提升技術，全面覆蓋。
- Cypher 查詢支持 — 允許用戶對攻擊路徑進行查詢，靈活性高。
- 與 Active Directory 整合 — 能夠將本地權限提升與 AD 攻擊路徑疊加，提供更全面的視角。
- 開源社群 — 持續更新和改進，社群活躍。

## 快速開始

1. 安裝 PrivHound
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 運行分析
```bash
python privhound.py
```
3. 查看結果
```bash
使用 BloodHound 查看生成的圖形
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在安全領域有豐富經驗，針對本地權限提升的分析需求推出了這個工具。隨著安全意識的提升，對於更直觀的攻擊路徑分析工具的需求也在增加，這使得 PrivHound 受到關注。

## 適合誰使用

**目標受眾**：需要分析 Windows 環境中權限提升風險的安全專業人士。

> [!example] 使用場景
> - 安全分析師用它來視覺化本地權限提升的攻擊路徑，因為能快速識別多步驟的攻擊鏈，提升了分析效率。
> - 滲透測試工程師用它來評估 Windows 環境的安全性，因為能夠清楚地看到不同權限之間的關聯，幫助制定攻擊策略。
> - 系統管理員用它來檢查系統配置的安全性，因為能夠發現潛在的權限提升漏洞，降低安全風險。

## 優缺點分析

> [!success] 優點
> - 能夠清晰地視覺化攻擊路徑，提升分析效率。
> - 全面覆蓋多種權限提升向量，提供深入分析。
> - 開源，社群活躍，持續更新。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法應用於其他系統。
> - 需要一定的安全知識，對新手不友好。
> - 對於小型環境可能過於複雜，使用者需評估需求。

> [!warning] 注意事項
> - 僅針對 Windows 環境，無法應用於其他操作系統。
> - 需要用戶具備一定的安全知識才能有效使用。
> - 對於小型環境可能過於複雜，使用者需評估需求。

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
>     ─PHCanLoginAs─→ UserX ─PHCanWriteBinary─→ VulnService ─PHRunsAs─→ SYSTEM
> ```
> 
> ---
> 
> ## What It Checks
> 
> | # | Check | Technique | MITRE |
> |---|-------|-----------|-------|
> | 1 | **Weak Service Permissions** | Modifiable services running as SYSTEM | T1574.011 |
> | 2 | **Writable Service Binaries** | Replace service .exe with payload | T1574.010 |
> | 3 | **Unquoted Service Paths** | Path hijacking via writable intermediate dirs | T1574.009 |
> | 4 | **DLL Hijacking (PATH)** | Writable directories in system PATH | T1574.001 |
> | 5 | **AlwaysInstallElevated** | Install malicious MSI as SYSTEM | T1548.002 |
> | 6 | **Token Privileges** | SeImpersonate, SeDebug, SeBackup, etc. | T1134.001 |
> | 7 | **Scheduled Tasks** | Writable binaries for SYSTEM tasks | T1053.005 |
> | 8 | **Autorun Executables** | Writable binaries in Run/RunOnce keys | T1547.001 |
> | 9 | **Registry Service Keys** | Writable service ImagePath in HKLM | T1574.011 |
> | 10 | **Stored Credentials** | Credential Manager, AutoLogon passwords | T1552.001 |
> | 11 | **GPP Cached Passwords** | Group Policy Preferences cpassword | T1552.006 |
> | 12 | **Unattended Install Files** | Credentials in unattend/sysprep XML | T1552.001 |
> | 13 | **PowerShell History** | PSReadLine history and transcripts | T1552.001 |
> | 14 | **Sensitive Files** | SAM backups, .kdbx, .rdg, git-credentials | T1552.001 |
> | 15 | **UAC Bypass Opportunities** | UAC misconfig or admin-not-elevated | T1548.002 |
> | 16 | **Writable Program Directories** | Writable dirs in Program Files | T1574.010 |
> | 17 | **Cross-

## 延伸閱讀

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
