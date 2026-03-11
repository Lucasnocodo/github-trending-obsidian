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
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓多個 AI 代理自動協作執行任務，無需人類介入。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "讓多個 AI 代理自動協作執行任務，無需人類介入。"
---

# OpenMOSS

**287** stars · **144** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 讓多個 AI 代理自動協作執行任務，無需人類介入。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (144 stars/day)
> **適合** 需要自動化內容生產和任務管理的中大型團隊。
> **一句話重點** OpenMOSS 的真正價值在於它能讓 AI 代理自動協作，實現無人化的任務管理。

> [!abstract] 核心創新
> OpenMOSS 是一個自組織的多代理系統，能夠在無需人類介入的情況下自動協作完成任務。

## 專案簡介

OpenMOSS 是一個自組織的多代理協作平台，旨在讓 AI 代理自動規劃、執行、檢查和巡邏任務，整個過程無需人類介入。它的運作方式是透過 cron 定時喚醒代理，讓代理自動索取任務並提交結果。技術上，OpenMOSS 建立在 OpenClaw 上，並依賴大型語言模型（LLM）如 GPT-5.3-Codex 或 GPT-5.4，以提高任務執行的效率與準確性。與傳統的單一代理系統相比，OpenMOSS 的多代理架構能夠分工合作，減少任務失敗的風險。使用者可以透過內建的 WebUI 進行任務管理和監控，並且系統提供自動巡邏和質量控制，確保交付物符合標準。該系統適合在專用的桌面級生產環境中運行，能夠持續執行各種任務。對於需要高效能和穩定性的團隊來說，OpenMOSS 是一個值得考慮的選擇，尤其是在自動化內容生產和 AI 研究等場景中。建議在需要高頻率任務執行時使用，但對於小型團隊或資源有限的環境則可能不太適合。

**技術棧**：`Python 3.9` · `Vue 3` · `TypeScript 4.5` · `JavaScript`

## 重點功能

- 自組織協作 — 代理自動索取任務並執行，無需人類介入。
- 閉環質量控制 — 審查、打分和重工循環確保交付物符合質量標準。
- 自動巡邏與恢復 — 監控系統，檢測異常並觸發恢復，確保代理的「死亡率」降至 0%。
- 打分與激勵系統 — 代理有分數和排行榜，審查結果直接影響排名，提升輸出質量。
- 可插拔技能 — 代理的實際能力由其攜帶的技能決定，具領域無關性。
- 內建 WebUI — 提供任務管理、活動記錄和分數排行榜的管理儀表板。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/uluckyXH/OpenMOSS.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動服務
```bash
python main.py
```

## 程式碼範例

```python
# 啟動 OpenMOSS 系統
from openmoss import OpenMOSS

moss = OpenMOSS()
moss.start()```

## 為什麼值得關注

> [!tip] 爆紅原因
> OpenMOSS 的創作者 uluckyXH 專注於自動化和 AI 代理技術，這個專案滿足了對自動化協作的需求。隨著 AI 技術的快速發展，市場對於無人化操作的需求日益增加，這使得 OpenMOSS 在當前環境中受到關注。

## 適合誰使用

**目標受眾**：需要自動化內容生產和任務管理的中大型團隊。

> [!example] 使用場景
> - 內容製作團隊用它來自動收集、翻譯和發布新聞文章，因為這樣可以在短短兩天內發佈超過 20 篇文章，節省了大量人力成本。
> - 軟體開發團隊用它來自動化代碼編寫和審查流程，因為這樣能夠提高開發效率，減少錯誤發生的機會。
> - 研究人員用它來自動搜尋和彙編資料，因為多個代理可以同時進行任務，顯著縮短研究時間。

## 架構分析

OpenMOSS 採用微服務架構，代理之間透過 API 進行通信。用戶輸入 → 代理接收任務 → 自動執行 → 輸出結果。系統的關鍵技術決策是使用 cron 定時喚醒代理，並依賴大型語言模型來提升任務執行的準確性。專案目錄結構包含主要的執行檔和配置檔案，便於用戶進行設置和擴展。

## 技術深入分析

> [!note]- 展開深入分析
> OpenMOSS 的核心演算法基於多代理系統，每個代理負責不同的任務，如計劃、執行和審查。這種設計使得系統能夠在遇到問題時，透過其他代理的協作來解決。效能方面，系統在使用 GPT-5.3-Codex 時，能夠在短時間內完成大量任務，並且保持高質量的輸出。與競品相比，OpenMOSS 的多代理架構提供了更高的靈活性和擴展性，能夠適應不同的任務需求。

## 優缺點分析

> [!success] 優點
> - 多代理協作提升任務執行效率，減少失敗率。
> - 內建質量控制機制，確保交付物符合標準。
> - 可擴展性強，支持不同領域的任務執行。

> [!danger] 缺點
> - 需要較高的硬體要求，對於小型團隊不太友好。
> - 運行成本可能隨著代理數量增加而上升。
> - 對於新手用戶，初期設置可能較為複雜。

> [!warning] 注意事項
> - 需要專用的桌面級生產環境運行。
> - 運行多個代理會增加模型的令牌消耗，需設置適當的速率限制。
> - 性能高度依賴於底層的 LLM，較小的上下文窗口可能導致效果不佳。
> - 不支援小型或資源有限的環境，可能無法達到最佳效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openclaw--openclaw\|openclaw/openclaw]] | OpenMOSS 建立在 OpenClaw 上，提供多代理協作功能，而 OpenClaw 本身主要是單一代理的框架。 |
| [[autonomous-agents--agent-framework\|autonomous-agents/agent-framework]] | 該框架專注於單一代理的自動化，而 OpenMOSS 則是多代理協作，能夠更好地處理複雜任務。 |

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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/uluckyXH/OpenMOSS/docs)

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

相關概念：[[多模態]] · [[自動化測試]] · [[微服務]]

相關專案：[[openclaw--openclaw|openclaw/openclaw]] · [[autonomous-agents--agent-framework|autonomous-agents/agent-framework]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/uluckyXH/OpenMOSS)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "uluckyXH--OpenMOSS"
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
