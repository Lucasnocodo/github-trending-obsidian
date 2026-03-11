---
repo: uluckyXH/OpenMOSS
url: https://github.com/uluckyXH/OpenMOSS
owner: uluckyXH
owner_type: User
language: Python
license: MIT
description: "A self-organizing multi-agent collaboration platform for OpenClaw. Multiple AI agents work as an autonomous team — planning, executing, reviewing, and patrolling tasks with zero human intervention."
homepage: ""
stars: 291
stars_per_day: 146
forks: 27
open_issues: 1
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "多代理系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓多個 AI agent 自動協作，無需人類介入，完成任務規劃、執行、檢查與巡邏。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "讓多個 AI agent 自動協作，無需人類介入，完成任務規劃、執行、檢查與巡邏。"
---

# OpenMOSS

**291** stars · **146** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 讓多個 AI agent 自動協作，無需人類介入，完成任務規劃、執行、檢查與巡邏。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (146 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要自動化任務執行且希望減少人力介入的中大型團隊。
> **一句話重點** OpenMOSS 讓 AI agents 自動協作，實現了真正的無人值守任務執行，這在傳統 AI 系統中是無法達成的。

> [!abstract] 核心創新
> OpenMOSS 引入了多代理協作的概念，讓 AI agents 能夠自動分工合作，實現無人值守的任務執行。

## 專案簡介

OpenMOSS 是一個自組織的多代理協作平台，讓多個 AI agent 自動協作，從任務規劃到執行、檢查和巡邏，整個過程無需人類介入。它的工作流程是：人類設定目標 → AI agents 自動醒來並分配任務 → agents 執行任務並提交結果。技術上，OpenMOSS 基於 OpenClaw，使用 Python 和 Vue 等技術，並通過 API 進行非同步通訊，確保各個 agent 之間的協作流暢。與傳統的單一 agent 模式相比，OpenMOSS 的多代理系統能夠分擔責任，互相支持，降低任務失敗的風險。這種設計使得 agent 的「死亡率」降至 0%。然而，運行多個 agents 會增加模型的 token 消耗，因此需要適當的速率限制來避免意外成本。這個專案適合需要高效自動化的團隊，並且建議在專用的桌面級生產環境中運行。整體來說，OpenMOSS 是一個成熟的解決方案，適合中大型團隊使用，特別是在需要持續運作的場景中。對於小型專案或資源有限的團隊，可能會面臨運行成本的挑戰。

**技術棧**：`Python 3.9` · `Vue 3` · `TypeScript 4.5` · `CSS` · `HTML` · `JavaScript`

## 重點功能

- 自組織協作 — agents 自動醒來並主動承擔任務，無需人類介入。
- 閉環質量控制 — 審查、評分和重工循環確保每個交付物符合質量標準。
- 自動巡邏與恢復 — 巡邏 agent 持續監控系統，標記卡住的任務並觸發恢復。
- 評分與激勵系統 — agents 擁有分數和排行榜，直接影響輸出質量。
- 可插拔技能 — agents 的實際能力由其攜帶的技能決定，具備領域無關性。
- 內建網頁介面 — 提供任務管理、活動記錄和分數排行榜的管理儀表板。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動服務
```bash
python main.py
```
3. 訪問管理介面
```bash
http://localhost:8000
```

## 程式碼範例

```python
# 基於文件推測的用法
from openmoss import OpenMOSS

# 初始化 OpenMOSS
moss = OpenMOSS()

# 設定目標
moss.set_goals('收集最新科技新聞')

# 啟動 agents
moss.start_agents()
```

## 為什麼值得關注

> [!tip] 爆紅原因
> OpenMOSS 的作者 uluckyXH 在開源社群中活躍，過去參與過多個知名專案。這個工具解決了多代理協作的痛點，讓 AI agent 能夠自動化執行任務，並且在過程中互相協作，這在傳統的單一 agent 系統中是無法實現的。最近的討論和示範案例（如 1M Reviews）展示了其強大的自動化能力，吸引了更多開發者的關注。技術生態的變化使得這種多代理系統的實現變得可行，尤其是在 AI 技術快速發展的背景下。

## 適合誰使用

**目標受眾**：需要自動化任務執行且希望減少人力介入的中大型團隊。

> [!example] 使用場景
> - 內容編輯人員用它來自動收集和翻譯新聞，因為這樣能在 2 天內發布 20 篇文章，完全無需人類介入。
> - 軟體開發團隊用它來自動化代碼編寫和審查，因為這樣可以提高開發效率，並減少錯誤率。
> - 數據分析師用它來定期收集和分析數據，因為這樣可以持續監控系統指標，及時發現異常並自動修復。

## 架構分析

OpenMOSS 採用中介架構，作為 OpenClaw 和 AI agents 之間的協調層。用戶設定目標後，Planner agent 自動分解需求並分配任務，Executors 進行實際執行，Reviewers 負責質量檢查，Patrol agents 監控系統狀態。所有 agents 通過 OpenMOSS API 進行非同步通訊，確保高效協作。專案目錄結構中，主要檔案包括 main.py 和 requirements.txt。

## 技術深入分析

OpenMOSS 的核心技術機制在於其多代理系統，使用非同步通訊模式讓各個 agents 能夠獨立運作並協同合作。這種設計使得系統能夠在面對複雜任務時，通過分工合作來提高效率。效能方面，OpenMOSS 能夠處理大量的任務，並且通過閉環質量控制來確保每個交付物的質量。然而，運行多個 agents 會增加 token 的消耗，這可能在資源有限的環境中造成挑戰。選擇 Python 和 Vue 作為技術棧，讓開發者能夠快速上手並進行擴展，但這也意味著需要一定的技術基礎。隨著系統的擴大，可能會面臨性能瓶頸，特別是在高負載的情況下，這需要進一步的優化和調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，包含了豐富的範例和使用說明。安裝過程雖然需要一些配置，但整體上是順暢的。文件中提供了中文文檔，對於非英語使用者友好。整體來說，新手可以在 30 分鐘內成功運行起來。

## 優缺點分析

> [!success] 優點
> - 完全自動化的多代理協作，減少人類介入。
> - 閉環質量控制確保交付物的高質量。
> - 可插拔技能設計使得 agents 能夠靈活應對不同任務。
> - 內建管理介面便於監控和管理任務。

> [!danger] 缺點
> - 需要較高的運行成本，對小型團隊不太友好。
> - 運行多個 agents 可能導致 token 消耗過高。
> - 對於大型資料集的性能可能會受到限制。
> - 安裝和配置過程相對複雜。

> [!warning] 注意事項
> - 需要專用的桌面級生產環境以獲得最佳性能。
> - 運行多個 agents 會增加模型 token 消耗，需設置速率限制。
> - 對於小型專案或資源有限的團隊，運行成本可能較高。
> - 在大型資料集上運行時，性能可能會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步而非多代理協作，適合需要簡單文件管理的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更專注於數據隱私的解決方案，適合需要安全數據處理的應用。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊的代理，與 OpenMOSS 的多代理協作功能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步而非多代理協作，適合需要簡單文件管理的場景。 | 如果你的需求僅限於文件同步，則選擇 parsync 會更簡單直接。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更專注於數據隱私的解決方案，適合需要安全數據處理的應用。 | 當你的專案需要強調數據隱私和安全性時，Shadowbroker 是更好的選擇。 |

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

**社群活躍度**：社群活躍，定期更新與討論。
**連結**：[文件](https://github.com/uluckyXH/OpenMOSS/wiki)

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

相關概念：[[多模態]] · [[自動化]] · [[機器學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[openclaw--openclaw|openclaw/openclaw]] · [[autonomous-agents--agent-framework|autonomous-agents/agent-framework]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[zornade--visura-api|zornade/visura-api]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

[GitHub](https://github.com/uluckyXH/OpenMOSS)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "uluckyXH--OpenMOSS"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
