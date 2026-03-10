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
  - "一個自組織的多代理協作平台，讓多個 AI 代理無需人類介入，自動計劃、執行、審查和巡邏任務。"
---

# OpenMOSS

**287** stars · **144** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自組織的多代理協作平台，讓多個 AI 代理無需人類介入，自動計劃、執行、審查和巡邏任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (144 stars/day)
> **適合** 需要高效自動化工作流程的企業和開發團隊。
> **一句話重點** OpenMOSS 讓 AI 代理能夠無縫協作，顛覆了傳統的任務管理方式，實現了真正的自動化。

> [!abstract] 核心創新
> 這個平台讓多個 AI 代理能夠自動協作，實現無需人類介入的任務管理。

## 專案簡介

OpenMOSS 是一個自組織的多代理協作平台，能夠讓多個 AI 代理在無需人類介入的情況下，自動計劃、執行和審查任務。這個平台的工作流程是，代理們透過 cron 定時喚醒，主動承接任務並執行，整個過程不需要人類的干預。技術上，OpenMOSS 建立在 OpenClaw 上，並利用多個 AI 代理來分擔任務，這樣可以減少單一代理的失敗率。與傳統的單一代理系統相比，OpenMOSS 提供了更高的穩定性和效率，因為代理們可以互相支持和協作。實際使用中，這個平台能夠在短時間內完成大量任務，例如在 2 天內發佈 20 篇文章，並且能夠自動解決問題。這個專案目前處於穩定階段，適合需要高效自動化的團隊使用。建議在需要完全自動化的任務時使用，但對於需要高度創意的工作，可能仍需人類介入。

**技術棧**：`Python` · `Vue` · `TypeScript` · `CSS` · `HTML` · `JavaScript`

## 重點功能

- 自組織協作 — 代理自動承接任務，無需人類介入。
- 閉環質量控制 — 每個交付物都經過審查和評分，確保質量。
- 自動巡邏與恢復 — 監控系統，檢測異常並自動修復。
- 評分與激勵系統 — 代理有分數和排行榜，提升工作質量。
- 可插拔技能 — 代理的能力由其攜帶的技能決定，適用於多種領域。

## 快速開始

1. 克隆 OpenMOSS 倉庫
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 進入專案資料夾
```bash
cd OpenMOSS
```
3. 啟動服務
```bash
npm start
```

## 程式碼範例

```bash
# 啟動代理系統
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> OpenMOSS 的作者 uluckyXH 在多代理系統方面有豐富的經驗，這個專案正好滿足了對於自動化和效率的需求。隨著 AI 技術的進步，越來越多的團隊希望能夠自動化日常任務，這使得 OpenMOSS 的需求急劇上升。特別是它的自組織特性，讓它在多代理協作中表現出色，這在其他工具中較少見。

## 適合誰使用

**目標受眾**：需要高效自動化工作流程的企業和開發團隊。

> [!example] 使用場景
> - 內容創作者用它來自動化新聞收集和發佈，因為這樣可以節省大量時間，並在短時間內產出高品質內容。
> - 開發團隊用它來自動化代碼審查流程，因為這樣可以確保代碼質量，並減少人力成本。
> - 企業用它來監控和管理日常業務流程，因為這樣可以提高效率，並降低人為錯誤的風險。

## 架構分析

OpenMOSS 採用微服務架構，代理之間通過 API 進行通信。用戶輸入 → 代理計劃任務 → 執行任務 → 審查結果。關鍵技術決策包括使用 cron 進行自動喚醒和任務分配。專案目錄結構中包含主要的 API 和代理邏輯。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少人力需求。
> - 多代理協作提高了任務成功率。
> - 可擴展性強，適用於多種業務場景。

> [!danger] 缺點
> - 需要較高的硬體要求，特別是在運行多個代理時。
> - 設置和配置相對複雜，對新手不太友好。
> - 性能依賴於底層 LLM，可能會受到模型限制。

> [!warning] 注意事項
> - 性能高度依賴於底層 LLM，建議使用較大的模型。
> - 運行多個代理會增加模型的 token 消耗，需設置適當的速率限制。
> - 需要專用的桌面級生產環境以獲得最佳效果。

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

相關概念：[[微服務]] · [[自動化測試]]

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
