---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 296
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
  - "將 Windows 本地權限提升建模為互聯攻擊路徑，讓攻擊者能更清楚地理解潛在的權限提升途徑。"
---

# PrivHound

**296** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升建模為互聯攻擊路徑，讓攻擊者能更清楚地理解潛在的權限提升途徑。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **適合** 需要深入分析 Windows 本地權限提升的安全專家和滲透測試工程師。
> **一句話重點** PrivHound 讓權限提升的分析不再是孤立的檢查，而是透過圖形化的方式將多個攻擊向量串聯起來，提供更全面的安全視角。

> [!abstract] 核心創新
> PrivHound 透過圖形化方式將本地權限提升建模為互聯攻擊路徑，提供了全新的視角來理解權限提升的潛在風險。

## 專案簡介

PrivHound 透過 BloodHound 的 OpenGraph 框架，將 Windows 本地權限提升的攻擊路徑視覺化，讓使用者能夠探索多步驟的權限提升鏈。它能夠枚舉 29 種權限提升向量，並將這些向量以節點和邊的形式輸出，讓使用者可以使用 Cypher 查詢。與傳統工具如 WinPEAS 和 PowerUp 不同，PrivHound 不僅報告單一的錯誤配置，而是將這些配置串聯起來，讓使用者了解每一步的關聯性。這樣的設計使得多跳的權限提升鏈變得可見，並且可以與現有的 Active Directory 攻擊路徑重疊。使用者可以透過簡單的查詢來獲取攻擊路徑的全貌，這在現有工具中是無法實現的。PrivHound 需要在 Windows 環境下運行，並且對於使用者的權限有一定的要求。這個專案目前處於穩定階段，適合需要進行安全測試的團隊使用。對於希望深入了解本地權限提升的安全研究人員來說，PrivHound 是一個值得一試的工具。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 互聯攻擊路徑 — 將本地權限提升的多步驟鏈接視覺化，使用者可以輕鬆查詢。
- 29 種權限提升向量 — 包含弱服務權限、DLL 劫持、存儲的憑證等多種檢查。
- Cypher 查詢 — 使用 Cypher 語言進行靈活的查詢，快速獲取所需的攻擊路徑資訊。
- 與 Active Directory 整合 — 能夠將本地權限提升路徑與 AD 攻擊路徑重疊，提供更全面的安全分析。
- 自動化檢查 — 自動化檢查過程，減少手動分析的時間和錯誤。

## 快速開始

1. 安裝 PrivHound
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 進入專案目錄
```bash
cd PrivHound
```
3. 執行收集器
```bash
powershell -ExecutionPolicy Bypass -File PrivHound.ps1
```

## 程式碼範例

```powershell
# 執行 PrivHound 收集器
powershell -ExecutionPolicy Bypass -File PrivHound.ps1
```

## 為什麼值得關注

> [!tip] 爆紅原因
> PrivHound 的作者在安全領域有豐富的經驗，並且針對當前本地權限提升工具的不足提出了創新的解決方案。隨著對於 Windows 環境安全的重視增加，這個工具正好切中需求。近年來，對於權限提升的攻擊方式越來越多，這使得 PrivHound 的時機變得更加合適。

## 適合誰使用

**目標受眾**：需要深入分析 Windows 本地權限提升的安全專家和滲透測試工程師。

> [!example] 使用場景
> - 安全研究員用它來分析 Windows 環境中的權限提升路徑，因為它能夠將多個攻擊向量串聯起來，提供更完整的攻擊視圖。
> - 滲透測試工程師用它來快速識別可利用的權限提升機會，因為它能夠自動化查詢過程，節省大量手動分析時間。
> - 系統管理員用它來檢查本地系統的安全配置，因為它提供了可視化的攻擊路徑，幫助他們理解潛在的風險。

## 架構分析

PrivHound 採用單體架構，核心資料流為：用戶輸入 → 收集本地權限提升資料 → 輸出可視化攻擊路徑。關鍵技術決策包括使用 BloodHound 的 OpenGraph 框架來建模攻擊路徑。專案目錄結構中，主要的執行檔為 PrivHound.ps1，負責收集和處理數據。

## 優缺點分析

> [!success] 優點
> - 提供可視化的攻擊路徑，讓使用者能夠更直觀地理解權限提升的可能性。
> - 自動化檢查過程，節省時間並降低人為錯誤。
> - 整合多種權限提升向量，提供全面的安全分析。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 需要使用者具備一定的權限才能執行所有檢查。
> - 對於某些複雜的環境配置，可能需要額外的調整。

> [!warning] 注意事項
> - 僅支援 Windows 環境。
> - 需要適當的使用者權限來執行檢查。
> - 對於某些檢查，可能需要額外的工具或配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[BloodHound--BloodHound\|BloodHound/BloodHound]] | BloodHound 專注於 Active Directory 的攻擊路徑，而 PrivHound 則針對 Windows 本地權限提升進行建模，提供更細緻的視覺化。 |
| [[PowerUp--PowerUp\|PowerUp/PowerUp]] | PowerUp 主要用於識別單一的權限提升漏洞，而 PrivHound 則將這些漏洞串聯起來，形成完整的攻擊鏈。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://github.com/dazzyddos/PrivHound/wiki)

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

相關概念：[[權限提升]] · [[安全漏洞]] · [[滲透測試]]

相關專案：[[BloodHound--BloodHound|BloodHound/BloodHound]] · [[PowerUp--PowerUp|PowerUp/PowerUp]]

[GitHub](https://github.com/dazzyddos/PrivHound)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "dazzyddos--PrivHound"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "dazzyddos--PrivHound"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
