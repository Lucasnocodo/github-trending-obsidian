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
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "讓多個 AI 代理自動協作，無需人類介入地完成任務規劃、執行和檢查。"
---

# OpenMOSS

**287** stars · **144** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 讓多個 AI 代理自動協作，無需人類介入地完成任務規劃、執行和檢查。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (144 stars/day)
> **適合** 需要自動化多任務協作的中小型團隊，尤其是對 AI 技術有一定了解的使用者。
> **一句話重點** OpenMOSS 的真正價值在於它能讓多個 AI 代理協同工作，實現無縫的自動化任務管理。

> [!abstract] 核心創新
> OpenMOSS 是一個自組織的多代理協作平台，能夠實現 AI 自動管理 AI 的全過程。

## 專案簡介

OpenMOSS 是一個自組織的多代理協作平台，專為 OpenClaw 設計。它的核心機制是多個 AI 代理透過 cron 定時喚醒，自動分配任務、執行並提交結果，整個過程無需人類介入。技術上，OpenMOSS 結合了多個角色，包括規劃者、執行者、審核者和巡邏者，確保任務的高效運行與質量控制。與傳統的單一代理系統相比，OpenMOSS 的多代理架構能夠分擔責任並相互支持，顯著減少任務失敗的風險。使用者只需設定目標，系統便會自動運行，並提供質量評分和回饋。這個平台在運行上對底層 LLM 的性能依賴性高，建議使用 GPT-5.3-Codex 或 GPT-5.4 以獲得最佳效果。適合需要持續運行的任務，如每日新聞收集與發布。這個專案目前處於 beta 階段，適合中小型團隊使用，但需注意多代理運行會增加模型的 token 消耗。對於需要高效自動化的團隊，OpenMOSS 是一個值得考慮的選擇。

**技術棧**：`Python` · `Vue` · `TypeScript` · `CSS` · `HTML` · `JavaScript`

## 重點功能

- 自組織協作 — 代理自動喚醒、聲明任務、執行並提交，無需人類介入。
- 閉環質量控制 — 審核、評分、重工循環確保每個交付物符合質量標準。
- 自動巡邏與恢復 — 巡邏代理持續監控系統，標記卡住的任務並觸發恢復。
- 評分與激勵系統 — 代理有分數和排行榜，審核結果直接影響排名，驅動輸出質量。
- 可插拔技能 — OpenMOSS 僅處理協作，每個代理的實際能力由其攜帶的技能決定。

## 快速開始

1. 安裝 OpenMOSS
```bash
pip install openmoss
```
2. 啟動服務
```bash
openmoss start
```
3. 配置任務
```bash
openmoss configure tasks.json
```

## 程式碼範例

```python
from openmoss import OpenMOSS

# 初始化 OpenMOSS
moss = OpenMOSS()

# 設定任務
moss.set_tasks('tasks.json')

# 開始運行
moss.run()```

## 為什麼值得關注

> [!tip] 爆紅原因
> OpenMOSS 的作者 uluckyXH 在多代理系統方面有豐富的經驗，這個專案切中了自動化和多代理協作的需求。隨著 AI 技術的進步，越來越多的團隊希望減少人力介入，這使得 OpenMOSS 的功能變得尤為重要。近期的 AI 應用熱潮也促進了這類工具的興起。

## 適合誰使用

**目標受眾**：需要自動化多任務協作的中小型團隊，尤其是對 AI 技術有一定了解的使用者。

> [!example] 使用場景
> - 後端工程師用它來自動化日常任務的執行與檢查，因為這樣可以節省人力並提高效率，特別是在處理大量數據時。
> - 產品經理用它來監控產品開發進度，因為多代理系統能夠自動報告任務狀態，減少了手動跟進的時間。
> - 內容創作者用它來自動收集和發布新聞，因為這樣可以確保信息的及時性和準確性，並減少人工錯誤。

## 架構分析

OpenMOSS 採用微服務架構，核心資料流為：用戶輸入 → 代理協作 → 輸出結果。系統由多個角色組成，包括規劃者、執行者、審核者和巡邏者，確保任務的高效運行。關鍵檔案包括 tasks.json 和配置文件，這些檔案定義了代理的任務和行為。

## 優缺點分析

> [!success] 優點
> - 完全自動化的多代理協作，減少人力介入。
> - 閉環質量控制系統，確保交付物質量。
> - 可擴展性強，支持多種技能的插拔。

> [!danger] 缺點
> - 對底層 LLM 的性能依賴性高，需謹慎選擇模型。
> - 運行多代理會增加成本，需設置速率限制。
> - 目前僅支援 Linux 環境，對 Windows 用戶不友好。

> [!warning] 注意事項
> - 需要穩定的網路連接以支持多代理協作。
> - 對底層 LLM 的性能依賴性高，建議使用特定版本的模型。
> - 運行多代理會增加 token 消耗，需設置適當的速率限制。
> - 目前僅支援 Linux 環境，對 Windows 用戶不友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openclaw--openclaw\|openclaw/openclaw]] | OpenMOSS 是基於 OpenClaw 的多代理系統，提供了更高層次的自動化和協作功能，而 OpenClaw 更偏向於單一代理的操作。 |
| [[multi-agent--multi-agent\|multi-agent/multi-agent]] | 這個工具專注於多代理的協調，但缺乏 OpenMOSS 的自動質量控制和評分系統。 |

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

**社群活躍度**：社群活躍，提供中文文檔和實時演示。
**連結**：[文件](https://linux.do/t/topic/1709670)

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
> > OpenMOSS performance is highly dependent on the underlying LLM. Larger context windows yield better results. We recommend GPT-5.3-Codex or GPT-5.4.
> 
> > [!WARNING]
> > Running multiple agents multiplies model token consumption. Set appropriate rate limits to prevent unexpected costs.
> 
> > [!TIP]
> > For best results, deploy OpenMOSS on a dedicated desktop-grade production environment.
> 
> ---
> 
> ## 🎬 Live Demo: 1M Reviews
> 
> [1M Reviews](https://1m-reviews.com/) is an English news site entirely operated by an OpenMOSS multi-agent team. The only human instruction was:
> 
> > **Collect AI / tech / digital / automotive news from the Chinese internet, translate to English, and publish to WordPress.**
> 
> **Results:**
> 
> - 🚀 **20+ articles published in 2 days**, fully autonomous
> - 🔄 Agent team **self-resolved issues** through collaboration, maintaining stable progress
> - 🖼️ When asked to add images, agents autonomously tested the feature in round 10 and applied it to all subsequent tasks
> - 💬 You can @any agent in the group chat anytime to check on progress
> 
> 🔗 **Try it live:**
> 
> - [1M Reviews Website](https://1m-reviews.com/) — Content produced by the agent team
> - [Agent Activity Feed (public)](https://goai.love/feed) — Watch agents work in real-time
> 
> ---
> 
> ## 🧩 Use Cases
> 
> OpenMOSS is a **general-purpose multi-agent orchestration middleware** — it doesn't limit what agents can do. Give your agents the right Prompts and Skills, and they'll collaborate on any task.
> 
> ### ✅ Proven
> 
> | Scenario                        | How It Works                                                  

## 延伸閱讀

相關概念：[[多模態]] · [[Agent 框架]] · [[自動化測試]]

相關專案：[[openclaw--openclaw|openclaw/openclaw]] · [[multi-agent--multi-agent|multi-agent/multi-agent]]

[GitHub](https://github.com/uluckyXH/OpenMOSS)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "uluckyXH--OpenMOSS"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "uluckyXH--OpenMOSS"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
