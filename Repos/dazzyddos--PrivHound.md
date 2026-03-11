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
use_case: "將 Windows 本地特權提升建模為互聯攻擊路徑，讓安全分析不再只是文字堆疊。"
priority: medium
tags:
  - github
  - "category/安全"
  - "lang/powershell"
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地特權提升建模為互聯攻擊路徑，讓安全分析不再只是文字堆疊。"
---

# PrivHound

**296** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地特權提升建模為互聯攻擊路徑，讓安全分析不再只是文字堆疊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **適合** 需要進行 Windows 環境安全評估的安全專業人士和滲透測試工程師。
> **一句話重點** PrivHound 讓本地特權提升的分析變得直觀，從而提高了安全評估的效率。

> [!abstract] 核心創新
> PrivHound 將本地特權提升建模為圖形結構，讓安全分析不再只是文字堆疊。

## 專案簡介

PrivHound 透過 BloodHound 的 OpenGraph 框架，將 Windows 本地特權提升的各種向量建模為圖形結構。它能夠自動化檢查多達 29 種特權提升的技術，並以互聯的節點和邊的形式輸出，讓使用者能夠直觀地查詢和理解攻擊路徑。這些檢查包括弱服務權限、可寫的服務二進制檔案、DLL 劫持等，並且可以使用 Cypher 查詢語言進行深入分析。與傳統的工具如 WinPEAS 和 PowerUp 不同，PrivHound 將各個發現串聯起來，讓使用者能夠看到多步驟的攻擊鏈。實際使用中，PrivHound 可以揭示出許多隱藏的攻擊路徑，這在其他工具中是無法實現的。該專案目前處於穩定狀態，適合需要進行安全評估的中大型團隊使用。對於小型團隊或個人使用者，可能會因為功能過於複雜而不太適合。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 29 種檢查類型 — 包括弱服務權限、可寫的服務二進制檔案、DLL 劫持等，全面評估特權提升風險。
- 圖形化攻擊路徑 — 將檢查結果以互聯的圖形結構呈現，便於理解和分析。
- Cypher 查詢支持 — 使用 Cypher 語言查詢特定的攻擊路徑，提供靈活的分析方式。
- 與 Active Directory 整合 — 可將本地特權提升路徑與 AD 攻擊路徑重疊，提供更全面的安全視圖。
- 自動化鏈接檢查結果 — 自動將多個發現串聯起來，揭示潛在的攻擊鏈。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 安裝依賴
```bash
Install-Module -Name BloodHound -Scope CurrentUser
```
3. 運行 PrivHound
```bash
powershell -ExecutionPolicy Bypass -File PrivHound.ps1
```

## 程式碼範例

```powershell
# 這是運行 PrivHound 的基本指令
powershell -ExecutionPolicy Bypass -File PrivHound.ps1
```

## 為什麼值得關注

> [!tip] 爆紅原因
> PrivHound 的作者具有豐富的安全背景，專注於將複雜的安全問題以圖形化方式呈現，這正好切中許多安全專家的需求。隨著資訊安全的重視程度提高，對於本地特權提升的分析需求也日益增加，這使得 PrivHound 在當前的安全工具中脫穎而出。

## 適合誰使用

**目標受眾**：需要進行 Windows 環境安全評估的安全專業人士和滲透測試工程師。

> [!example] 使用場景
> - 安全分析師用它來視覺化 Windows 環境中的特權提升路徑，因為這樣可以快速識別潛在的安全漏洞，節省手動分析的時間。
> - 滲透測試工程師用它來自動化檢查多種特權提升向量，因為傳統工具無法連結各個發現，PrivHound 讓攻擊鏈一目了然。
> - 系統管理員用它來評估內部系統的安全性，因為能夠清楚了解哪些配置可能導致特權提升，從而提前修正問題。

## 架構分析

PrivHound 採用單體架構，核心資料流為：用戶輸入 → PrivHound 檢查 → 輸出攻擊路徑圖。關鍵技術決策包括使用 BloodHound 的 OpenGraph 框架來呈現檢查結果。專案目錄結構中，PrivHound.ps1 是主要的執行檔案，負責啟動檢查流程。

## 技術深入分析

> [!note]- 展開深入分析
> PrivHound 的核心在於將多種特權提升檢查結果以圖形方式呈現，這樣的設計使得使用者能夠快速識別潛在的攻擊路徑。它的效能特性在於能夠同時處理多達 29 種檢查類型，並將結果串聯起來，這在傳統工具中是難以實現的。選擇 BloodHound 的 OpenGraph 框架作為基礎，使得結果不僅易於視覺化，還能夠進行靈活的查詢。與其他工具相比，PrivHound 的設計取捨在於將多個檢查結果整合，讓使用者能夠從整體上理解特權提升的風險，而不是孤立地查看每一項檢查。

## 優缺點分析

> [!success] 優點
> - 提供全面的特權提升檢查，涵蓋多種攻擊向量。
> - 圖形化的結果讓複雜的攻擊路徑一目了然，便於分析。
> - 支援 Cypher 查詢語言，提供靈活的分析方式。

> [!danger] 缺點
> - 需要一定的學習曲線，對於新手使用者可能不易上手。
> - 僅限於 Windows 環境，無法應用於其他作業系統。
> - 安裝和配置過程相對繁瑣，增加了使用門檻。

> [!warning] 注意事項
> - 僅支援 Windows 環境的特權提升分析。
> - 需要安裝 BloodHound 模組，增加了初始設置的複雜性。
> - 對於小型環境可能功能過於強大，導致使用者無法充分利用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[PowerUp--PowerUp\|PowerUp/PowerUp]] | PowerUp 專注於單一的特權提升檢查，而 PrivHound 則將多個檢查結果以圖形方式串聯，提供更全面的視角。 |
| [[WinPEAS--winPEAS\|WinPEAS/winPEAS]] | WinPEAS 提供的是靜態報告，而 PrivHound 則能夠視覺化多步驟的攻擊路徑，讓使用者更容易理解攻擊鏈。 |

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

**社群活躍度**：社群活躍度中等，有定期更新和維護。
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

相關概念：[[特權提升]] · [[滲透測試]] · [[資訊安全]] · [[攻擊鏈分析]]

相關專案：[[PowerUp--PowerUp|PowerUp/PowerUp]] · [[WinPEAS--winPEAS|WinPEAS/winPEAS]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]]

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
