---
repo: uluckyXH/OpenMOSS
url: https://github.com/uluckyXH/OpenMOSS
owner: uluckyXH
owner_type: User
language: Python
license: MIT
description: "A self-organizing multi-agent collaboration platform for OpenClaw. Multiple AI agents work as an autonomous team — planning, executing, reviewing, and patrolling tasks with zero human intervention."
homepage: ""
stars: 290
stars_per_day: 145
forks: 27
open_issues: 1
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "Agent"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓多個 AI 代理自動協作，無需人類介入，完成任務規劃、執行和檢查。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OpenMOSS"
  - "uluckyXH/OpenMOSS"
  - "讓多個 AI 代理自動協作，無需人類介入，完成任務規劃、執行和檢查。"
---

# OpenMOSS

**290** stars · **145** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 讓多個 AI 代理自動協作，無需人類介入，完成任務規劃、執行和檢查。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (145 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要自動化內容生成和任務管理的中小型團隊。
> **一句話重點** OpenMOSS 的創新在於它能讓 AI 代理自動協作，真正實現無人值守的任務管理。

> [!abstract] 核心創新
> OpenMOSS 是一個完全自組織的多代理系統，能夠在無需人類介入的情況下，自動協作完成任務。

## 專案簡介

OpenMOSS 是一個自組織的多代理協作平台，能讓多個 AI 代理自動協作，從任務規劃到執行、檢查，完全不需要人類介入。它的運作流程是透過 cron 定時喚醒代理，代理們自動認領任務並提交結果。技術上，OpenMOSS 基於 OpenClaw，並且強調閉環質量控制，確保每個交付物都符合標準。與傳統單一代理系統相比，OpenMOSS 的多代理架構能夠分工合作，互相支援，提升任務的成功率。使用者只需設定目標，系統便能自動運行，並且在遇到問題時，代理會自動進行故障排除。這個系統適合在高效能的桌面級生產環境中運行，並建議使用 GPT-5.3-Codex 或 GPT-5.4 作為底層 LLM。這個專案目前在 alpha 階段，值得關注，但在實際使用前需評估其對硬體的需求和潛在的成本。對於需要自動化內容生成或編碼的團隊，OpenMOSS 是一個值得嘗試的選擇。

**技術棧**：`Python` · `Vue` · `TypeScript` · `CSS` · `HTML` · `JavaScript`

## 重點功能

- 自組織協作 — 代理自動喚醒、認領任務、執行並提交，無需人工介入。
- 閉環質量控制 — 透過評分和重工循環，確保每個交付物符合質量標準。
- 自動巡邏與恢復 — 巡邏代理持續監控系統，標記卡住的任務並觸發恢復。
- 評分與激勵系統 — 代理有分數和排行榜，結果直接影響排名，驅動輸出質量。
- 可插拔技能 — OpenMOSS 僅負責協作，每個代理的實際能力由其攜帶的技能決定。
- 內建 WebUI — 提供即時的管理儀表板，包含任務管理、活動記錄和分數排行榜。

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
# 啟動 OpenMOSS
from openmoss import OpenMOSS
moss = OpenMOSS()
moss.start()```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 專案由 uluckyXH 開發，過去有其他知名專案的經驗。(b) 它解決了傳統單一代理系統的局限性，提供了一個多代理協作的解決方案。(c) 近期的討論和展示引起了社群的注意，特別是其在新聞自動生成上的應用。(d) 隨著 AI 技術的進步，特別是 LLM 的發展，這種多代理協作的模式變得更為可行。

## 適合誰使用

**目標受眾**：需要自動化內容生成和任務管理的中小型團隊。

> [!example] 使用場景
> - 內容編輯者用它來自動收集和翻譯新聞，因為它能在 2 天內發佈 20 篇文章，完全無需人工介入。
> - 軟體開發團隊用它來自動化編碼流程，因為它能分工合作，確保代碼質量，並且持續監控進度。
> - 研究人員用它來自動整理和分析數據，因為它能快速生成報告，提升研究效率。

## 架構分析

OpenMOSS 採用微服務架構，核心資料流為：用戶設定目標 → 代理自動規劃和執行任務 → 提交結果。關鍵技術決策包括使用 cron 定時喚醒代理和閉環質量控制。專案目錄結構中，主要的執行檔為 main.py，負責啟動整個系統。

## 技術深入分析

> [!note]- 展開深入分析
> OpenMOSS 的核心演算法依賴於多代理協作，每個代理負責不同的任務，如規劃、執行和審核。效能特性上，系統能在 2 天內自動發佈 20 篇文章，顯示出其高效能。設計上，選擇 cron 作為代理喚醒機制，這樣可以有效管理資源並降低運行成本。與傳統單一代理系統相比，OpenMOSS 的多代理架構能夠分工合作，提升任務的成功率，並且在遇到問題時，代理會自動進行故障排除。

## 優缺點分析

> [!success] 優點
> - 完全自動化的多代理協作，無需人類介入。
> - 閉環質量控制機制，確保交付物的質量。
> - 可插拔的技能設計，適用於多種任務。
> - 內建的管理儀表板，方便監控和管理。

> [!danger] 缺點
> - 需要高效能的硬體支持，對於小型團隊可能成本較高。
> - 仍在 alpha 階段，穩定性和功能可能不夠成熟。
> - 對於 LLM 的依賴，限制了使用的靈活性。
> - 多代理運行會增加成本，需謹慎管理。

> [!warning] 注意事項
> - 僅支援特定的 LLM，如 GPT-5.3-Codex 或 GPT-5.4。
> - 需要在桌面級生產環境中運行，以獲得最佳效能。
> - 多代理運行會增加模型的 token 消耗，需設置適當的速率限制。
> - 目前仍在 alpha 階段，API 可能會頻繁變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了類似的多代理架構，但主要集中在數據收集和處理，而 OpenMOSS 更加強調任務的自動化協作。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw-Medical-Skills 專注於醫療領域的技能，而 OpenMOSS 則是通用的多代理協作平台，適用於各種任務。 |

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

**社群活躍度**：社群活躍度中等，定期更新和討論。
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

相關概念：[[Agent 框架]] · [[自動化]] · [[機器學習]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[openclaw--openclaw|openclaw/openclaw]] · [[autonomous-agents--agent-framework|autonomous-agents/agent-framework]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[zornade--visura-api|zornade/visura-api]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[karpathy--autoresearch|karpathy/autoresearch]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，284 stars
