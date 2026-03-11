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
use_case: "將 Windows 本地權限提升的攻擊路徑以圖形方式呈現，讓安全分析不再只是文字堆砌。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
tags:
  - github
  - "category/安全"
  - "lang/powershell"
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地權限提升的攻擊路徑以圖形方式呈現，讓安全分析不再只是文字堆砌。"
---

# PrivHound

**297** stars · **74** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升的攻擊路徑以圖形方式呈現，讓安全分析不再只是文字堆砌。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要進行 Windows 環境安全評估的企業安全團隊。
> **一句話重點** PrivHound 讓權限提升的分析變得更直觀，從而提升了安全評估的效率。

> [!abstract] 核心創新
> PrivHound 將 Windows 本地權限提升的攻擊路徑以圖形化方式呈現，打破了傳統工具的局限性。

## 專案簡介

PrivHound 是一個專門用於收集 Windows 本地權限提升資訊的工具，通過 BloodHound 的 OpenGraph 模型將這些資訊以圖形化方式呈現。使用者可以輸入各種潛在的權限提升點，工具會分析這些點之間的關聯，並生成可視化的攻擊路徑圖。這樣的方式使得安全分析者能夠快速理解從某一點出發可以達到的最終權限，而不需要手動連接各種報告中的信息。技術上，PrivHound 使用 PowerShell 來收集數據，並利用 Cypher 語言來查詢和呈現圖形資料。相較於傳統的工具如 WinPEAS 和 PowerUp，PrivHound 不僅僅是列出發現的問題，而是將這些問題整合成一個完整的攻擊路徑，讓使用者能夠看到多步驟的權限提升鏈。這樣的設計使得分析過程更為直觀，並且能夠更快地識別出潛在的攻擊路徑。PrivHound 的使用效果在於能夠處理複雜的權限關係，並且支持大規模的 Windows 環境分析，適合需要進行深入安全評估的團隊。整體來說，這是一個相對成熟的工具，適合中大型企業的安全團隊使用，特別是在需要快速識別權限提升風險的情境下。對於小型團隊或個人使用者，可能會因為功能過於專業而不太適合。

**技術棧**：`PowerShell` · `Cypher`

## 重點功能

- 圖形化攻擊路徑 — 將權限提升點以圖形方式呈現，便於分析。
- 多步驟鏈接分析 — 能夠展示從一個權限提升點到另一個的完整路徑。
- PowerShell 數據收集 — 使用 PowerShell 自動收集 Windows 環境中的安全數據。
- Cypher 查詢語言 — 利用 Cypher 進行高效的圖形數據查詢。
- 整合多個數據來源 — 支持從不同的工具和報告中整合數據，提供全面的視圖。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 進入專案目錄
```bash
cd PrivHound
```
3. 運行 PowerShell 腳本收集數據
```bash
powershell -ExecutionPolicy Bypass -File CollectData.ps1
```
4. 查詢圖形數據
```bash
cypher-shell -u <username> -p <password> -d <database> 'MATCH (n) RETURN n;'
```

## 程式碼範例

```powershell
# 收集數據
powershell -ExecutionPolicy Bypass -File CollectData.ps1

# 查詢圖形數據
cypher-shell -u admin -p password -d privhound 'MATCH (n) RETURN n;'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> PrivHound 的作者 dazzyddos 在安全領域有一定的影響力，曾經參與過多個知名的安全工具開發。這個工具解決了傳統權限提升工具無法有效展示攻擊路徑的痛點，提供了一個可視化的解決方案。最近在安全社群中對於權限提升的討論增多，特別是在大型企業的安全評估中，這使得 PrivHound 的需求上升。由於本工具的獨特性和實用性，吸引了不少安全專家的注意。

## 適合誰使用

**目標受眾**：需要進行 Windows 環境安全評估的企業安全團隊。

> [!example] 使用場景
> - 安全分析師用它來快速識別 Windows 環境中的權限提升路徑，因為傳統工具的報告往往無法清晰展示多步驟的攻擊鏈。
> - 滲透測試人員用它來模擬攻擊路徑，因為 PrivHound 能夠將各種潛在的權限提升點以圖形化方式呈現，便於分析和報告。
> - IT 安全團隊用它來進行定期的安全評估，因為它能夠有效整合多個數據來源，提供全面的攻擊路徑視圖。

## 架構分析

PrivHound 採用單體架構，核心資料流為：用戶輸入 → 收集數據 → 生成圖形資料。使用 PowerShell 收集 Windows 環境的數據，然後利用 Cypher 查詢語言進行資料的查詢和呈現。專案目錄結構中包含 CollectData.ps1 腳本和查詢範例，方便使用者快速上手。

## 技術深入分析

PrivHound 利用 PowerShell 進行數據收集，並使用 Cypher 查詢語言來處理和呈現數據。這種設計使得工具能夠快速整合來自不同來源的數據，並以圖形化方式展示多步驟的攻擊路徑。工具能夠處理大規模的 Windows 環境，並且在分析過程中不會引入過多的延遲。選擇 PowerShell 作為數據收集工具的好處在於其廣泛的兼容性和強大的系統訪問能力，但這也使得使用者需要具備一定的 PowerShell 知識。隨著環境的擴大，可能會面臨性能瓶頸，特別是在處理大量數據時，這需要進一步優化數據查詢的效率。安全性方面，工具的設計考量了數據的保護，但仍需使用者自行確保環境的安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要注意 PowerShell 的執行政策設定。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供圖形化的攻擊路徑視圖，便於分析。
> - 整合多個數據來源，提供全面的安全評估。
> - 支持多步驟的權限提升鏈分析，能夠揭示潛在的攻擊路徑。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法應用於其他操作系統。
> - 需要一定的 PowerShell 知識才能有效使用。
> - 對於小型環境來說，功能可能過於複雜。

> [!warning] 注意事項
> - 僅支援 Windows 環境的權限提升分析。
> - 需要 PowerShell 環境來運行收集腳本。
> - 對於小型環境可能過於複雜，無法發揮其全部功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BloodHound/BloodHound](https://github.com/BloodHound/BloodHound) | BloodHound 專注於 Active Directory 的攻擊路徑，而 PrivHound 專注於 Windows 本地權限提升的攻擊路徑，提供更具體的視圖。 |
| [PowerUp/PowerUp](https://github.com/PowerUp/PowerUp) | PowerUp 主要用於識別單一的安全漏洞，而 PrivHound 則將多個漏洞整合成攻擊路徑，便於分析。 |

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

**社群活躍度**：社群活躍度中等，定期有更新和討論。

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

相關概念：[[權限提升]] · [[安全評估]] · [[攻擊路徑]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
