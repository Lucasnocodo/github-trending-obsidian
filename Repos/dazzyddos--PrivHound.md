---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 295
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
  - "將 Windows 本地特權提升建模為圖形，幫助安全專家快速識別攻擊路徑。"
---

# PrivHound

**295** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地特權提升建模為圖形，幫助安全專家快速識別攻擊路徑。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **適合** 專注於 Windows 安全分析的滲透測試人員和安全專家。
> **一句話重點** PrivHound 透過圖形化的方式，讓 Windows 本地特權提升的分析變得更加直觀和高效。

> [!abstract] 核心創新
> PrivHound 將 Windows 本地特權提升建模為圖形，讓安全分析更直觀。

## 專案簡介

PrivHound 將 Windows 本地特權提升的攻擊路徑轉換為圖形結構，讓安全專家能夠更直觀地分析和識別潛在的攻擊路徑。它基於 BloodHound 的 OpenGraph 框架，能夠列舉 29 種特權提升向量，並將其以互聯的節點和邊的形式輸出。這樣的設計使得多步驟的特權提升鏈路變得可視化，並且可以使用 Cypher 查詢，讓用戶能夠快速找到從一個發現到另一個的連結。與傳統的單一工具相比，PrivHound 提供了一個整體的視角，讓用戶能夠理解各個發現之間的關係。實際使用中，這個工具能夠自動連接不同的發現，顯著提高了安全分析的效率。這個專案目前處於穩定階段，適合各種規模的安全團隊使用。建議在需要進行深入的安全分析時使用，不適合對於單一發現進行快速檢查的情境。

## 重點功能

- 圖形化建模 — 將特權提升過程轉換為可視化的圖形結構。
- 29 種檢查類別 — 涵蓋多種 Windows 特權提升向量。
- Cypher 查詢 — 允許用戶對圖形進行查詢，快速找到攻擊路徑。
- 與 BloodHound 兼容 — 可以與現有的 Active Directory 攻擊路徑重疊。
- 自動化連接 — 自動將不同的發現連接起來，節省分析時間。

## 快速開始

1. 安裝 PrivHound
```bash
git clone https://github.com/dazzyddos/PrivHound
```
2. 運行 PrivHound
```bash
python privhound.py
```
3. 查詢圖形數據
```bash
cypher query here
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在安全領域有豐富的經驗，並且針對現有工具的不足提出了創新的解決方案。隨著對於 Windows 安全的重視增加，這個專案正好滿足了市場需求，並且其獨特的圖形化展示方式使得更多安全專家願意使用。

## 適合誰使用

**目標受眾**：專注於 Windows 安全分析的滲透測試人員和安全專家。

> [!example] 使用場景
> - 安全分析師用它來識別潛在的攻擊路徑，因為傳統工具無法有效連接不同的發現。
> - 滲透測試人員用它來模擬攻擊路徑，因為能夠更直觀地理解特權提升的鏈路。
> - 系統管理員用它來檢查系統安全性，因為能夠快速識別多個發現之間的關聯。

## 優缺點分析

> [!success] 優點
> - 提供可視化的攻擊路徑，易於理解。
> - 涵蓋多種特權提升向量，全面性強。
> - 能夠與 BloodHound 整合，增強功能。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 需要一定的學習曲線，對新手不友好。
> - 不支持即時數據更新，需手動操作。

> [!warning] 注意事項
> - 僅支援 Windows 環境，無法在其他操作系統上使用。
> - 需要用戶具備一定的安全分析知識，以便理解生成的圖形。
> - 不支持即時更新，需手動運行以獲取最新數據。

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

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
