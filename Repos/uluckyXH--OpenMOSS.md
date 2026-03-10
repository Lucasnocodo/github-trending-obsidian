---
repo: uluckyXH/OpenMOSS
url: https://github.com/uluckyXH/OpenMOSS
owner: uluckyXH
owner_type: User
language: Python
license: MIT
description: "A self-organizing multi-agent collaboration platform for OpenClaw. Multiple AI agents work as an autonomous team — planning, executing, reviewing, and patrolling tasks with zero human intervention."
homepage: ""
stars: 286
stars_per_day: 143
forks: 26
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

**286** stars · **143** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自組織的多代理協作平台，讓 AI 自動管理任務，無需人類介入。

> [!abstract] 核心創新
> 這個平台能夠讓多個 AI 代理自動協作，完全不需要人類介入。

## 專案簡介

OpenMOSS 是一個多代理協作平台，讓多個 AI 代理能夠自動計劃、執行和檢查任務。這個系統利用 cron 來定期喚醒代理，並讓它們自主承擔任務。與傳統的單一代理系統相比，OpenMOSS 的多代理架構能夠分擔責任，互相支持，從而提高任務的成功率。實際使用中，這個平台能夠顯著減少人類介入的需求，但其效能依賴於底層的 LLM。整體來說，這是一個創新的解決方案，適合需要高自動化的專案。

**技術棧**：`Python` · `Vue` · `TypeScript`

## 重點功能

- 自組織的多代理協作系統。
- 無需人類介入，自動執行任務。
- 內建質量控制循環，確保交付物符合標準。
- 自動巡邏和恢復功能，降低代理失效率。
- 可擴展的技能插件系統，支持多領域應用。

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
> 隨著 AI 技術的進步，對於自動化和多代理協作的需求日益增加，這個專案正好切中這一需求。開發者希望能夠減少人類介入，並提高任務的效率，這使得 OpenMOSS 受到關注。

## 適合誰使用

**目標受眾**：需要高自動化和多代理協作的企業和開發團隊。

> [!example] 使用場景
> - 企業管理者 用它來 自動化日常任務，因為這樣可以節省人力成本。
> - 開發團隊 用它來 協調多個 AI 代理的工作，因為這樣可以提高任務的完成效率。
> - 研究人員 用它來 測試多代理系統的性能，因為這樣可以探索 AI 協作的潛力。

## 架構分析

這個專案基於多代理架構，代理之間能夠自動協作，並透過 cron 定期執行任務。

## 優缺點分析

> [!success] 優點
> - 能夠顯著減少人類介入，提高任務執行效率。
> - 自動巡邏和質量控制功能，確保任務質量。
> - 可擴展性強，支持多領域應用。

> [!danger] 缺點
> - 性能依賴於底層的 LLM，可能會有瓶頸。
> - 需要一定的技術背景來配置和使用。
> - 目前僅支援 Linux 系統，限制了使用範圍。

> [!warning] 注意事項
> - 性能高度依賴於底層的 LLM。
> - 需要一定的技術背景來配置和使用。
> - 目前僅支援 Linux 系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Airflow | 主要用於工作流管理，而非多代理自動化協作。 |
| Celery | 專注於任務隊列，而非自組織的多代理系統。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 26 |
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

**社群活躍度**：社群活躍度中等，持續有更新和討論。

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

相關概念：[[多代理系統]] · [[自動化]] · [[任務管理]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
