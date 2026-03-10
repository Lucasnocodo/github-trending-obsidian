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
  - "一個自我組織的多代理協作平台，讓 AI 自動管理任務。"
---

# OpenMOSS

**287** stars · **144** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 一個自我組織的多代理協作平台，讓 AI 自動管理任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (144 stars/day)
> **適合** 需要自動化多任務管理的企業或團隊，特別是大型項目管理者。
> **一句話重點** OpenMOSS 的價值在於它能夠讓 AI 自動管理 AI，實現真正的無人值守任務管理。

> [!abstract] 核心創新
> 這個專案的創新在於其自我組織的多代理系統，能夠完全自動化任務管理。

## 專案簡介

OpenMOSS 是一個自我組織的多代理協作平台，能夠讓多個 AI 代理自動協作，計劃、執行、審查和巡邏任務，完全不需要人類介入。這個系統使用 cron 來定期喚醒代理，並自動分配任務，確保每個交付物都符合質量標準。與傳統的單一代理系統相比，OpenMOSS 的多代理架構能夠分擔責任，並在遇到問題時相互支持，從而提高整體效率。實際使用中，這個平台能夠在短時間內完成大量任務，例如在兩天內自動發布超過 20 篇文章，但需要注意的是，性能依賴於底層的 LLM，建議使用更大的模型來獲得最佳效果。這個專案目前處於穩定階段，適合需要自動化任務的團隊使用，特別是大型項目或需要持續運行的任務。建議在需要高效協作和任務管理時使用，而不適合小型或單一任務的場景。

**技術棧**：`Python` · `Vue` · `TypeScript`

## 重點功能

- 自我組織協作 — 代理自動喚醒並聲明任務，無需人類干預。
- 閉環質量控制 — 審查、評分和重做循環確保交付物符合質量標準。
- 自動巡邏與恢復 — 監控系統，檢測異常並觸發恢復，確保任務不會被卡住。
- 評分與激勵系統 — 代理有分數和排行榜，直接影響輸出質量。
- 可插拔技能 — 代理的實際能力由其攜帶的技能決定，具有領域無關性。

## 快速開始

1. 克隆庫並進入目錄
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git && cd OpenMOSS
```
2. 安裝依賴
```bash
npm install
```
3. 啟動系統
```bash
npm start
```

## 程式碼範例

```bash
# 啟動 OpenMOSS
npm start
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 uluckyXH 專注於 AI 多代理系統的研究，這個專案滿足了對於自動化和高效協作的需求。隨著 AI 技術的進步，越來越多的團隊希望利用多代理系統來提升工作效率，這使得 OpenMOSS 在市場上受到關注。

## 適合誰使用

**目標受眾**：需要自動化多任務管理的企業或團隊，特別是大型項目管理者。

> [!example] 使用場景
> - 內容創作者用它來自動收集和發布新聞，因為這能夠節省大量時間，並保持內容更新。
> - 開發團隊用它來自動化代碼審查流程，因為這樣可以提高代碼質量，並減少人力成本。
> - 企業用它來監控和管理多個業務任務，因為這樣可以確保任務按時完成，並提高整體效率。

## 架構分析

OpenMOSS 採用微服務架構，代理之間通過 API 進行通訊。用戶輸入 → 代理協作 → 輸出結果。關鍵技術決策包括使用 cron 進行任務調度和自動化管理。目錄結構中包含核心的 API 文檔和配置文件。

## 優缺點分析

> [!success] 優點
> - 能夠完全自動化任務管理，減少人力成本。
> - 多代理協作提高了任務的靈活性和效率。
> - 閉環質量控制確保交付物的高質量。

> [!danger] 缺點
> - 需要較強的硬體支持，無法在低配環境中運行。
> - 性能依賴於底層 LLM，可能需要高成本的模型。
> - 系統設置和維護可能較為複雜。

> [!warning] 注意事項
> - 需要強大的硬體支持以運行多個代理。
> - 性能高度依賴於底層的 LLM，較小的模型可能無法達到最佳效果。
> - 運行多個代理會增加模型的 token 消耗，需要適當設置速率限制。

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

相關概念：[[多模態]] · [[自動化測試]]

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
