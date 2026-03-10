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
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: ""
status: to-review
tags:
  - github
  - 安全
  - powershell
---

# PrivHound

**288** stars · **72** stars/天 · 建立 4 天前 · PowerShell · 未標註授權

> [!summary] 一句話摘要
> 將 Windows 本地權限提升的攻擊路徑以圖形化方式呈現，讓安全分析更直觀。

## 專案簡介

這個工具幫助安全專家透過圖形化的方式理解本地權限提升的攻擊路徑，讓他們能夠更有效地識別潛在的安全風險。它使用 PowerShell 和 Cypher 來收集和建模數據，並將其轉化為可視化的圖形結構。與傳統的單一報告工具相比，PrivHound 可以將多個發現串聯起來，形成完整的攻擊鏈，讓分析更具體且易於理解。這是一個值得嘗試的工具，特別適合需要深入分析 Windows 環境的安全專家。

## 重點功能

- 將本地權限提升的攻擊路徑以圖形化方式呈現。
- 支持多個數據來源的整合，提供全面的安全分析。
- 能夠將多個發現串聯起來，形成完整的攻擊鏈。
- 使用 PowerShell 和 Cypher 進行數據收集和建模。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在安全領域有豐富的經驗，並且這個工具解決了業界對於本地權限提升分析的需求，特別是在攻擊路徑可視化方面的不足。近期的安全事件讓企業更加重視本地權限的管理，進而推動了這個專案的關注。

## 適合誰使用

**目標受眾**：專注於 Windows 環境安全的資安專業人士。

> [!example] 使用場景
> - 安全分析師 用它來 繪製攻擊路徑，因為這樣可以更清楚地理解潛在的權限提升風險。
> - 滲透測試人員 用它來 評估系統的安全性，因為它能夠揭示多個漏洞之間的關聯。
> - 系統管理員 用它來 檢查權限配置，因為這樣可以有效防範未經授權的訪問。

> [!warning] 注意事項
> 目前僅針對 Windows 環境進行建模，可能不適用於其他操作系統。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | PowerShell |
| 授權 | N/A |
| Stars | 288 |
| Forks | 28 |
| Issues | 1 |
| 建立日期 | 2026-03-06 |

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

相關概念：#本地權限提升 · #攻擊路徑分析 · #安全資訊與事件管理

[GitHub](https://github.com/dazzyddos/PrivHound)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，288 stars
