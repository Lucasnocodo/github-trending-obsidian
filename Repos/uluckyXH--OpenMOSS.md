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
  - "一個自我組織的多代理協作平台，讓多個 AI 代理無需人類介入，自動規劃、執行、檢查任務。"
---

# OpenMOSS

**286** stars · **143** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自我組織的多代理協作平台，讓多個 AI 代理無需人類介入，自動規劃、執行、檢查任務。

> [!abstract] 核心創新
> 這個專案的創新在於引入了多代理協作的概念，實現了無需人類介入的任務管理。

## 專案簡介

OpenMOSS 是一個自我組織的多代理協作平台，能夠讓多個 AI 代理自動協作，完成任務規劃、執行和檢查。這個平台基於 OpenClaw，使用 cron 定時喚醒代理，實現無需人類介入的自動化流程。與傳統的單一代理系統相比，OpenMOSS 透過多個代理分工合作，能夠提高任務的成功率和效率。實際使用中，這個系統能夠自動檢查任務質量，並進行評分和重工，確保每個交付物都符合標準。這個專案適合需要高效自動化的團隊，尤其是大型項目或需要持續監控的任務。

**技術棧**：`Python` · `Vue` · `TypeScript`

## 重點功能

- 自我組織的多代理系統，無需人類介入。
- 內建的質量控制循環，確保交付物符合標準。
- 自動巡檢和恢復功能，降低任務失敗率。
- 代理得分和排行榜系統，提升工作質量。
- 可插拔的技能系統，支持多種任務類型。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 安裝依賴
```bash
cd OpenMOSS && npm install
```
3. 啟動服務
```bash
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 技術的進步，越來越多的企業需要自動化的解決方案來提升工作效率。OpenMOSS 提供了一個全新的多代理協作模式，切合了這一需求。作者的背景和對於 AI 自動化的深入理解，使得這個專案在開發者社群中引起了廣泛關注。

## 適合誰使用

**目標受眾**：需要高效自動化和多代理協作的企業和開發團隊。

> [!example] 使用場景
> - 企業管理者 用它來 自動化任務分配，因為它能夠無需人類介入地完成任務。
> - 開發團隊 用它來 持續監控系統狀態，因為它能夠自動檢查和修復問題。
> - 研究人員 用它來 測試多個 AI 代理的協作能力，因為它提供了多種代理角色的設計。

## 架構分析

該專案基於多代理架構，代理之間通過任務分配和質量控制循環進行協作，實現自我組織和自我恢復。

## 優缺點分析

> [!success] 優點
> - 能夠自動化任務管理，減少人力需求。
> - 多代理協作提高了任務的成功率。
> - 內建質量控制確保交付物的質量。

> [!danger] 缺點
> - 需要較高的配置和調整，初期使用可能較為複雜。
> - 性能依賴於底層 LLM，可能受到限制。
> - 目前功能較為專一，通用性不強。

> [!warning] 注意事項
> - 性能依賴於底層 LLM 的質量。
> - 需要一定的配置和調整才能達到最佳效果。
> - 目前主要針對特定任務類型，通用性可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Airflow | 主要用於工作流管理，而非多代理協作。 |
| Ray | 雖然支持分佈式計算，但不專注於自動化任務管理。 |

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

**社群活躍度**：社群活躍，持續更新，並有活躍的討論區。
**連結**：[文件](https://github.com/uluckyXH/OpenMOSS#readme)

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

相關概念：[[多代理系統]] · [[自動化工作流]] · [[人工智慧協作]]

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
