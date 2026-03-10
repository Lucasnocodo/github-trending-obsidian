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
  - "category/安全"
  - "lang/powershell"
aliases:
  - "PrivHound"
  - "dazzyddos/PrivHound"
  - "將 Windows 本地權限提升過程視覺化，幫助安全專家識別攻擊路徑。"
---

# PrivHound

**288** stars · **72** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Windows 本地權限提升過程視覺化，幫助安全專家識別攻擊路徑。

> [!abstract] 核心創新
> PrivHound 將本地權限提升建模為圖形結構，提供更全面的攻擊路徑視圖。

## 專案簡介

PrivHound 將 Windows 本地權限提升建模為圖形結構，讓安全專家能夠清楚地看到潛在的攻擊路徑。它基於 BloodHound 的 OpenGraph 框架，能夠枚舉 29 種權限提升向量，並以可查詢的方式呈現。與傳統的工具相比，PrivHound 不僅報告單一的配置問題，而是將多個問題串聯起來，提供更全面的攻擊路徑視圖。實際使用中，這能幫助安全專家快速識別多步驟的權限提升鏈，但需要對 Windows 系統有深入了解。這是一個針對安全專家的專業工具，適合在進行滲透測試或安全審計時使用。

**技術棧**：`Node.js` · `BloodHound`

## 重點功能

- 將本地權限提升過程建模為圖形結構。
- 支持 29 種權限提升向量的枚舉。
- 可查詢的圖形結構，方便分析攻擊路徑。
- 與現有的 Active Directory 攻擊路徑疊加。
- 自動連接多個配置問題，提供全面視圖。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/dazzyddos/PrivHound.git
```
2. 進入專案目錄
```bash
cd PrivHound
```
3. 安裝依賴
```bash
npm install
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著網路安全威脅的增加，對於能夠有效識別攻擊路徑的工具需求上升。PrivHound 的創作者在安全領域有豐富的經驗，這使得這個專案具備實用性和專業性。近期的安全事件也促使企業重視本地權限提升的風險。

## 適合誰使用

**目標受眾**：專注於 Windows 安全的滲透測試人員和系統管理員。

> [!example] 使用場景
> - 安全專家 用它來 識別潛在的攻擊路徑，因為這樣可以更有效地進行滲透測試。
> - 系統管理員 用它來 評估系統安全性，因為這樣可以及早發現配置問題。
> - 研究人員 用它來 分析權限提升攻擊，因為這樣可以了解攻擊者的行為模式。

## 架構分析

專案基於 Node.js 架構，使用 BloodHound 的 OpenGraph 框架來建模權限提升路徑。資料流是 掃描結果 → OpenGraph 建模 → 可視化呈現。

## 優缺點分析

> [!success] 優點
> - 提供清晰的攻擊路徑視圖，便於分析。
> - 支持多種權限提升向量，範圍廣泛。
> - 自動化連接多個配置問題，節省時間。

> [!danger] 缺點
> - 僅限於 Windows 環境，無法跨平台使用。
> - 需要使用者具備一定的安全知識。
> - 可能需要與其他工具整合以獲得最佳效果。

> [!warning] 注意事項
> - 僅支援 Windows 系統。
> - 需要對 BloodHound 有基本了解。
> - 可能需要額外的配置以整合其他工具。

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

**社群活躍度**：每週 5+ commits，社群活躍度中等。

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

相關概念：[[滲透測試]] · [[權限提升]] · [[網路安全]]

[GitHub](https://github.com/dazzyddos/PrivHound)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
