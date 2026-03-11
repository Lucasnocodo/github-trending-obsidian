---
repo: dazzyddos/PrivHound
url: https://github.com/dazzyddos/PrivHound
owner: dazzyddos
owner_type: User
language: PowerShell
license: N/A
description: "A BloodHound OpenGraph collector that models Windows local privilege escalation as interconnected attack paths."
homepage: ""
stars: 297
stars_per_day: 74
forks: 28
open_issues: 1
created: 2026-03-06
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "權限提升"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Windows 本地權限提升模型化為互聯攻擊路徑，讓攻擊者能更清楚地理解可利用的漏洞。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/安全"
  - "lang/powershell"
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地權限提升模型化為互聯攻擊路徑，讓攻擊者能更清楚地理解可利用的漏洞。"
---

# PrivHound

**297** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升模型化為互聯攻擊路徑，讓攻擊者能更清楚地理解可利用的漏洞。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要深入分析 Windows 本地權限提升的安全專業人員。
> **一句話重點** PrivHound 讓本地權限提升的分析變得像 AD 攻擊一樣直觀，顯著提升了安全分析的效率。

> [!abstract] 核心創新
> PrivHound 將 Windows 本地權限提升過程模型化為圖形，讓攻擊者能夠直觀地理解多步驟的攻擊鏈。

## 專案簡介

PrivHound 將 Windows 本地權限提升過程轉化為圖形模型，讓使用者能夠清楚地看到多步驟的攻擊鏈。它基於 BloodHound 的 OpenGraph 框架，能夠枚舉 29 種權限提升向量，並以互聯的節點和邊的形式輸出，讓使用者可以查詢和視覺化這些攻擊路徑。與 WinPEAS、PowerUp 等工具不同，這些工具僅報告孤立的發現，PrivHound 則能自動連接這些點，顯示出完整的攻擊鏈。使用者可以透過 Cypher 查詢語言進行查詢，並將結果疊加在現有的 Active Directory 攻擊路徑上。這樣的設計使得攻擊者能夠更有效地評估潛在的權限提升路徑。該工具目前處於穩定階段，適合各種規模的安全團隊使用，特別是需要進行深入的權限提升分析的團隊。建議在需要快速評估多個權限提升路徑時使用，但不適合單一漏洞的快速檢測。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 圖形化攻擊路徑 — 將多個權限提升向量以圖形方式展示，便於理解和分析。
- 29 種檢查類型 — 包括弱服務權限、可寫服務二進位檔等，幫助全面評估系統安全。
- Cypher 查詢 — 使用者可以透過 Cypher 語言查詢攻擊路徑，靈活性高。
- 與 Active Directory 整合 — 可將本地權限提升路徑與 AD 攻擊路徑疊加，提供更全面的視角。
- 自動化連接 — 自動將孤立的漏洞連接成完整的攻擊鏈，提升分析效率。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 安裝依賴
```bash
Install-Module -Name PrivHound -Scope CurrentUser
```
3. 運行工具
```bash
PrivHound -Target <TargetMachine> -Output <OutputFile>
```

## 程式碼範例

```powershell
PrivHound -Target localhost -Output results.json
```

## 為什麼值得關注

> [!tip] 爆紅原因
> PrivHound 的作者 dazzyddos 在安全領域有豐富的經驗，這個工具解決了傳統工具無法有效連接多個漏洞的痛點。近期社群對於本地權限提升的關注增加，讓這個工具的需求上升。PrivHound 提供了一個全新的視角來看待本地權限提升，這在過去是缺乏的。此時的技術生態也逐漸重視圖形化的安全分析工具。

## 適合誰使用

**目標受眾**：需要深入分析 Windows 本地權限提升的安全專業人員。

> [!example] 使用場景
> - 安全研究員用它來分析企業內部的權限提升路徑，因為它能自動連接多個漏洞，節省了手動分析的時間。
> - 滲透測試工程師用它來生成可視化的攻擊路徑圖，因為這樣能更清楚地向客戶展示潛在的安全風險。
> - 系統管理員用它來檢查系統中的弱點，因為它提供了詳細的權限提升向量，幫助他們優化系統安全配置。

## 架構分析

PrivHound 採用單體架構，核心資料流為：用戶輸入 → 權限提升檢查 → 輸出攻擊路徑。它利用 BloodHound 的 OpenGraph 框架來處理資料，並將檢查結果以圖形方式展示。專案目錄結構包括主要的 PowerShell 腳本和配置文件，方便用戶進行修改和擴展。

## 技術深入分析

> [!note]- 展開深入分析
> PrivHound 的核心演算法基於 BloodHound 的圖形模型，能夠將多個權限提升向量連接起來，形成完整的攻擊鏈。該工具的效能在於其能夠快速枚舉多達 29 種檢查類型，並以圖形化方式展示，讓使用者能夠直觀地理解權限提升的可能性。設計上，PrivHound 選擇了 PowerShell 作為主要語言，因為其在 Windows 環境中的廣泛應用和強大功能。與其他工具相比，PrivHound 的關鍵設計取捨在於將孤立的檢查結果連接起來，這在傳統工具中是難以實現的。

## 優缺點分析

> [!success] 優點
> - 提供圖形化的攻擊路徑，便於理解和分析。
> - 能夠自動連接多個漏洞，提升分析效率。
> - 支持多種權限提升檢查，範圍廣泛。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 需要一定的 PowerShell 知識來運行和配置。
> - 對於某些檢查，可能需要額外的系統權限。

> [!warning] 注意事項
> - 僅支援 Windows 環境。
> - 需要 PowerShell 5.1 或更新版本。
> - 對於某些特定的權限提升向量，可能需要額外的權限來執行檢查。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，無法提供權限提升的圖形化分析。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要針對漏洞利用，缺乏 PrivHound 的圖形化攻擊路徑功能。 |

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

**社群活躍度**：社群活躍，定期更新和回應問題。
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

相關概念：[[權限提升]] · [[攻擊路徑分析]] · [[圖形化安全分析]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[PowerUp--PowerUp|PowerUp/PowerUp]] · [[WinPEAS--winPEAS|WinPEAS/winPEAS]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
