---
repo: uluckyXH/OpenMOSS
url: https://github.com/uluckyXH/OpenMOSS
owner: uluckyXH
owner_type: User
language: Python
license: MIT
description: "A self-organizing multi-agent collaboration platform for OpenClaw. Multiple AI agents work as an autonomous team — planning, executing, reviewing, and patrolling tasks with zero human intervention."
homepage: ""
stars: 287
stars_per_day: 144
forks: 27
open_issues: 1
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "基礎設施"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "一個自組織的多代理協作平台，讓 AI 自動管理任務，無需人類介入。"
---

# OpenMOSS

**287** stars · **144** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自組織的多代理協作平台，讓 AI 自動管理任務，無需人類介入。

> [!abstract] 核心創新
> 這個平台實現了多代理的自組織協作，無需人類介入，提升了任務執行的效率和質量。

## 專案簡介

OpenMOSS 是一個多代理協作平台，能夠讓多個 AI 代理自動協作，進行任務規劃、執行、審查和巡邏。這個系統基於 OpenClaw 構建，通過 cron 定時喚醒代理，實現無人干預的任務管理。與傳統的單代理系統相比，OpenMOSS 允許代理之間分工合作，提升任務的完成率和質量。每個代理都有明確的角色，如規劃者、執行者和審查者，確保任務的高效執行。這個平台的性能依賴於底層的 LLM，能夠根據不同的需求進行擴展和調整。對於需要自動化和高效協作的專案，OpenMOSS 是一個值得探索的解決方案，特別是在需要大規模任務管理的情境下。

**技術棧**：`Python` · `Vue` · `TypeScript`

## 重點功能

- 自動化的多代理協作系統。
- 無需人類介入的任務管理。
- 內建質量控制循環，確保交付物符合標準。
- 具備自動巡邏和恢復功能，提升系統穩定性。
- 可擴展的技能插件系統，支持多種應用場景。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 進入專案目錄
```bash
cd OpenMOSS
```
3. 啟動系統
```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 技術的進步，對於自動化和協作的需求越來越高，OpenMOSS 正好滿足了這一需求。作者 uluckyXH 在多代理系統方面有豐富的經驗，這個專案的推出吸引了許多對自動化感興趣的開發者。隨著開源社群對於 AI 協作的探索加深，這個專案的關注度也隨之上升。

## 適合誰使用

**目標受眾**：尋求自動化和高效協作解決方案的開發者和企業。

> [!example] 使用場景
> - 企業管理者 用它來 自動化任務分配，因為它能夠減少人力成本並提升效率。
> - 開發團隊 用它來 協調多個 AI 代理的工作，因為它能確保任務的高效執行和質量控制。
> - 研究人員 用它來 測試多代理系統的協作能力，因為它提供了一個實驗平台來驗證理論。

## 架構分析

這個專案由多個 AI 代理組成，通過 cron 定時喚醒，實現任務的自動分配和執行。每個代理根據其角色進行協作，形成一個完整的任務管理系統。

## 優缺點分析

> [!success] 優點
> - 實現了無人干預的自動化任務管理。
> - 多代理系統能夠提升任務的完成率和質量。
> - 具備自動巡邏和恢復功能，增強系統穩定性。

> [!danger] 缺點
> - 性能依賴於底層的 LLM，可能存在瓶頸。
> - 需要一定的配置和調整，對新手不太友好。
> - 目前社群支持和文檔尚在建立中。

> [!warning] 注意事項
> - 對於大型任務的性能可能受限於底層 LLM。
> - 需要一定的配置和調整才能達到最佳效果。
> - 目前文檔和社群支持仍在建立中。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 27 |
| Open Issues | 1 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 895 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 51
>     "Vue" : 42
>     "TypeScript" : 6
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@uluckyXH](https://github.com/uluckyXH) | 13 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新中，並提供實時的技術支持。

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenMOSS
> 
> **Self-Organizing Multi-Agent System for OpenClaw**
> 
> 🚀 Why OpenMOSS · 
> 🎬 Live Demo · 
> 🧩 Use Cases · 
> 🏗️ Architecture · 
> ⚡ Quick Start · 
> ⚙️ Configuration · 
> 📡 API Docs · 
> 🗺️ Roadmap
> 
> > **A platform where AI manages AI.** Multiple agents collaborate autonomously — planning, executing, reviewing, and inspecting — while humans just set goals and check results.
> 
> OpenMOSS (Multi-agent Orchestration & Self-evolving System) is a self-organizing multi-agent collaboration platform built on [OpenClaw](https://github.com/openclaw/openclaw).
> 
> 📖 [Live demo & detailed walkthrough (LINUX DO)](https://linux.do/t/topic/1709670) · 🇨🇳 [中文文档](README_CN.md)
> 
> ### ✨ Key Features
> 
> - 🤖 **Self-Organizing Collaboration** — Agents wake up via cron, autonomously claim tasks, execute, and submit — no human orchestration needed
> - 🔁 **Closed-Loop Quality Control** — Review + scoring + rework loop ensures every deliverable meets quality standards
> - 🛡️ **Auto Patrol & Recovery** — Patrol agent continuously monitors the system, flags stuck tasks, and triggers recovery — agent "death rate" drops to 0%
> - 🏆 **Scoring & Incentive System** — Agents have scores and leaderboards; review results directly affect rankings, driving output quality
> - 🧩 **Pluggable Skills** — OpenMOSS only handles orchestration; each agent's actual capabilities are determined by the Skills it carries — domain-agnostic
> - 🔄 **Recurring Tasks** — Built-in recurring task type for continuous operations (e.g., daily news collection and publishing)
> - 🖥️ **Built-in WebUI** — Out-of-the-box admin dashboard with task management, activity feed, and score leaderboard
> 
> ---
> 
> ## Why OpenMOSS?
> 
> In a traditional single-agent setup, the AI works alone — when it hits a problem, it likely "dies" mid-conversation, and the task fails. OpenMOSS introduces multi-agent collaboration where agents **divide responsibilities and back each other up**:
> 
> - **Planner Agent** — Automatically breaks down requirements, assigns sub-tasks, tracks progress, and delivers results
> - **Executor Agent** — Claims tasks, writes code, and submits deliverables
> - **Reviewer Agent** — Reviews quality, scores work, approves or rejects for rework
> - **Patrol Agent** — Monitors the system, detects anomalies, flags blocked tasks, and sends alerts
> 
> The entire process requires **zero human intervention**. Agents run autonomously through cron-based wake-ups.
> 
> > [!IMPORTANT]
> > OpenMOSS performance is highly dependent on the underlying LLM. Larger cont

## 延伸閱讀

相關概念：[[多模態]] · [[自動化測試]] · [[機器學習]]

[GitHub](https://github.com/uluckyXH/OpenMOSS)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "uluckyXH--OpenMOSS"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
