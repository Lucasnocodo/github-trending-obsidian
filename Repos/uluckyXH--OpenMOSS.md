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
  - "一個自我組織的多代理協作平台，讓 AI 自動執行任務。"
---

# OpenMOSS

**286** stars · **143** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自我組織的多代理協作平台，讓 AI 自動執行任務。

> [!abstract] 核心創新
> 這個專案的創新在於實現了多代理的自我組織和協作，無需人類干預。

## 專案簡介

OpenMOSS 是一個自我組織的多代理系統，能夠讓多個 AI 代理協作，無需人類干預，完成計畫、執行、檢查和巡邏任務。這個平台基於 OpenClaw，設計上強調代理之間的協作與自我管理，透過 cron 定時喚醒代理來執行任務。與傳統的單一代理系統相比，OpenMOSS 具備更高的任務分配和質量控制能力，能夠自動檢查和修正任務執行中的問題。這使得整個過程完全無需人類介入，適合需要高效能和低人力成本的自動化任務。儘管如此，系統的效能仍然依賴於底層的 LLM，對於較小的任務可能會有一定的局限性。整體來說，這是一個值得關注的專案，特別適合需要自動化和高效協作的場景。

**技術棧**：`Python` · `Vue` · `TypeScript` · `CSS` · `HTML` · `JavaScript`

## 重點功能

- 多代理自我組織協作，無需人類干預。
- 閉環質量控制，確保每個交付物達到標準。
- 自動巡邏和恢復，降低代理失效率。
- 得分和激勵系統，提升代理的工作質量。
- 可插拔技能，支持多種任務類型。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 進入專案資料夾
```bash
cd OpenMOSS
```
3. 啟動系統
```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 技術的成熟，越來越多的企業尋求自動化解決方案，OpenMOSS 正好切中這一需求。作者 uluckyXH 在多代理系統方面有著豐富的經驗，這使得專案在技術上具備優勢，吸引了許多開發者的注意。

## 適合誰使用

**目標受眾**：需要自動化和高效協作的企業和開發者。

> [!example] 使用場景
> - 企業管理者 用它來 自動化日常任務，因為 可以減少人力成本並提高效率。
> - 開發者 用它來 測試和驗證 AI 系統，因為 它能夠自動執行多種測試任務。
> - 研究人員 用它來 進行實驗設計，因為 可以快速組織和執行多個實驗。

## 架構分析

OpenMOSS 採用多代理架構，代理之間通過自我組織協作來完成任務，並使用 cron 定時喚醒來執行任務，整個過程無需人類介入。

## 優缺點分析

> [!success] 優點
> - 能夠自動化多種任務，減少人力成本。
> - 多代理系統提高了任務的靈活性和可靠性。
> - 閉環質量控制確保交付物的質量。

> [!danger] 缺點
> - 系統效能依賴於底層 LLM 的能力。
> - 需要一定的技術背景來配置和使用。
> - 對於小型任務可能不夠高效。

> [!warning] 注意事項
> - 系統效能依賴於底層 LLM 的能力。
> - 需要一定的技術背景來配置和使用。
> - 目前主要針對特定任務，通用性有限。

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

相關概念：[[多代理系統]] · [[自動化]] · [[人工智慧]] · [[協作]] · [[任務管理]]

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
