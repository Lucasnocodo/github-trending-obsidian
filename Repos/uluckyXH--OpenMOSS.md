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
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - ai_ml
  - python
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "讓多個 AI 代理自動協作，無需人類介入即可完成任務規劃與執行。"
---

# OpenMOSS

**286** stars · **143** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 讓多個 AI 代理自動協作，無需人類介入即可完成任務規劃與執行。

> [!abstract] 核心創新
> OpenMOSS 提供了一個完全自動化的多代理協作平台，無需人類介入即可完成複雜任務。

## 專案簡介

OpenMOSS 透過多個 AI 代理的自組織協作，實現任務的自動規劃、執行、檢查和巡邏。它使用 cron 來定時喚醒代理，並根據任務需求自動分配和執行子任務。這種架構與傳統的單一代理模型不同，後者在遇到問題時往往會失敗，而 OpenMOSS 的多代理系統能夠互相支持和補位。其內建的質量控制和巡邏機制確保了任務的持續監控和高質量交付。使用者只需設定目標，便可享受全自動的任務執行過程。這個系統特別適合需要高效能和高可靠性的自動化任務執行場景。整體來看，OpenMOSS 在多代理協作的成熟度和可擴展性上表現出色，值得在大型專案中試用。

**技術棧**：`Python` · `OpenClaw`

## 重點功能

- 自組織協作，無需人類介入
- 關閉迴路質量控制，確保交付質量
- 自動巡邏和恢復，降低任務失敗率
- 評分和激勵系統，提升代理工作質量
- 可插拔技能，支持多種任務類型
- 內建的重複任務功能，適合持續操作
- 提供即時的管理儀表板，便於監控

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 進入專案目錄
```bash
cd OpenMOSS
```
3. 啟動系統
```bash
python main.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 uluckyXH 在多代理系統方面有深厚的背景，這個專案切中了自動化和 AI 協作的需求。隨著企業對自動化的需求日益增長，這種無需人類介入的解決方案變得越來越受歡迎。近期的技術進步使得這樣的系統變得可行，這也是它現在受到關注的原因。

## 適合誰使用

**目標受眾**：尋求高效能自動化解決方案的企業和開發者。

> [!example] 使用場景
> - AI 開發者 用它來 自動化任務執行，因為這樣可以節省大量人力資源。
> - 企業管理者 用它來 監控和管理多個自動化任務，因為這樣能提高工作效率和質量。
> - 研究人員 用它來 測試和驗證 AI 模型，因為它提供了一個穩定的自動化環境。

## 架構分析

OpenMOSS 採用前後端分離架構，前端使用 Vue，後端使用 Python。代理之間的協作通過 API 進行，任務的分配和執行則由後端的多代理系統負責。

## 優缺點分析

> [!success] 優點
> - 高效能的自動化任務執行
> - 多代理系統提供了更高的可靠性
> - 靈活的可擴展性，支持各種任務類型

> [!danger] 缺點
> - 對底層技術的依賴性強
> - 需要一定的技術背景來配置和使用
> - 初期設置可能較為複雜

> [!warning] 注意事項
> - 對底層 LLM 的性能高度依賴
> - 需要一定的配置和調整才能達到最佳效果
> - 不適合小型任務或簡單的自動化需求

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

相關概念：[[多代理系統]] · [[自動化工作流]] · [[質量控制]] · [[AI 協作]]

[GitHub](https://github.com/uluckyXH/OpenMOSS)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
