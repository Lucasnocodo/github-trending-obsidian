---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 910
stars_per_day: 455
forks: 106
open_issues: 2
created: 2026-03-08
pushed_at: 2026-03-10
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
  - org
  - "topic/awesome"
  - "topic/claude_code"
  - "topic/clawhub"
  - "topic/medical"
  - "topic/nanoclaw"
aliases:
  - "OpenClaw-Medical-Skills"
  - "FreedomIntelligence/OpenClaw-Medical-Skills"
  - "提供869種醫療AI技能，讓OpenClaw變成強大的醫學研究助手。"
---

# OpenClaw-Medical-Skills

**910** stars · **455** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓OpenClaw變成強大的醫學研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (455 stars/day)
> **適合** 需要在醫療研究中整合AI技能的研究團隊或開發者。
> **一句話重點** 這個專案證明了開源社群能夠有效整合醫療AI技能，提升AI在醫療領域的應用潛力。

> [!abstract] 核心創新
> 這個專案提供了最大的開源醫療AI技能庫，讓AI代理具備專業醫療研究的能力。

## 專案簡介

OpenClaw Medical Skills 是一個包含869種醫療AI技能的開源庫，這些技能涵蓋了生物醫學和臨床研究的各個方面。每個技能都是一個獨立的模組，包含專業知識和工作流程，並能連接到實際的數據庫和API，生成結構化的臨床或科學輸出。這個庫的技能來自12個以上的開源技能庫，提供的功能包括RNA-seq分析、藥物智能、臨床文檔生成等，讓AI代理具備相當於專業研究團隊的能力。與一般的AI工具相比，OpenClaw Medical Skills 提供了針對醫療和科學研究的專業能力，而不僅僅是通用的AI回應。使用者需要安裝OpenClaw或NanoClaw，並能夠透過簡單的命令將技能安裝到代理中。這個專案目前處於穩定階段，適合醫療研究團隊或需要專業醫療知識的開發者使用。對於需要快速整合醫療技能的團隊，這是一個非常值得考慮的選擇。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869種醫療AI技能 — 涵蓋臨床、基因組學、藥物發現等多個領域。
- 自動連接到實際數據庫 — 包括PubMed、ClinicalTrials.gov、FDA等。
- 生成結構化輸出 — 包括SOAP筆記、出院摘要等臨床文檔。
- 支持多種安裝方式 — 包括全局安裝和選擇性安裝特定技能。
- 開源社群支持 — 聚合來自12個以上的開源技能庫，持續更新和擴充。

## 快速開始

1. 克隆這個庫
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 將技能安裝到工作區域
```bash
cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
3. 驗證安裝
```bash
ask your agent: 'What medical and clinical skills do you have available?'
```

## 程式碼範例

```bash
# 安裝臨床報告和藥物研究技能
SKILLS=(
  "clinical-reports"
  "tooluniverse-drug-research"
)
for skill in "${SKILLS[@]}"; do
  cp -r OpenClaw-Medical-Skills/skills/$skill ~/.openclaw/skills/
done
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者來自於醫療和AI領域，切中醫療AI技能整合的需求，特別是在臨床研究和藥物開發上。隨著醫療數據的增長和AI技術的進步，對於專業醫療技能的需求越來越高，這使得這個專案在當前時期受到關注。

## 適合誰使用

**目標受眾**：需要在醫療研究中整合AI技能的研究團隊或開發者。

> [!example] 使用場景
> - 臨床研究員用它來快速查詢PubMed和ClinicalTrials.gov的資料，因為這樣可以節省大量的文獻搜尋時間，提升研究效率。
> - 生物資訊學家用它來自動化RNA-seq數據分析流程，因為內建的技能能夠直接連接到分析工具，減少手動操作的錯誤。
> - 藥物開發者用它來生成臨床文檔和藥物相互作用報告，因為這樣可以確保文檔的準確性和合規性，降低法律風險。

## 架構分析

這是一個基於模組化的架構，使用者可以透過OpenClaw或NanoClaw來加載技能。用戶輸入 → AI代理處理 → 生成結構化輸出。關鍵技術決策包括使用開源數據庫和API來增強AI的專業能力。專案目錄結構中，技能以獨立的SKILL.md文件存在，便於管理和擴充。

## 優缺點分析

> [!success] 優點
> - 提供專業的醫療和科學研究技能，能夠滿足特定需求。
> - 開源社群支持，持續更新和擴充技能庫。
> - 模組化設計，使用者可以選擇安裝所需的技能。

> [!danger] 缺點
> - 需要依賴OpenClaw或NanoClaw，增加了安裝的複雜性。
> - 技能數量龐大，學習曲線可能較陡峭。
> - 對於非醫療領域的使用者，技能可能過於專業化。

> [!warning] 注意事項
> - 需要安裝OpenClaw或NanoClaw才能運行。
> - 技能數量龐大，可能需要時間來熟悉每個技能的功能。
> - 對於非醫療領域的使用者，可能會感到技能過於專業化。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 106 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 77.4 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 67
>     "Jupyter Notebook" : 23
>     "TeX" : 2
>     "Shell" : 2
>     "R" : 2
>     "HTML" : 2
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WangRongsheng](https://github.com/WangRongsheng) | 12 |
> | [@donglihe-hub](https://github.com/donglihe-hub) | 8 |
> | [@wabyking](https://github.com/wabyking) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續有貢獻者更新技能庫。
**連結**：[文件](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills)

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaw Medical Skills
> 
> [](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills/stargazers)
> [](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills/network/members)
> [](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills/issues)
> [](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills/tree/main/skills)
> [](LICENSE)
> [](https://github.com/MedClaw-Org)
> 
> **The largest open-source medical AI skills library for OpenClaw.**
> 
> *869 curated skills · Clinical · Genomics · Drug Discovery · Bioinformatics · Medical Devices*
> 
> [English](#) | [中文](README_zh.md)
> 
> ---
> 
> ## What Is This?
> 
> **OpenClaw Medical Skills** is a curated collection of **869 AI agent skills** covering the full spectrum of biomedical and clinical research. These skills are designed for [OpenClaw](https://github.com/MedClaw-Org) / [NanoClaw](https://github.com/MedClaw-Org) — Claude-based personal AI assistant frameworks — and transform a general-purpose AI agent into a powerful medical and scientific research companion.
> 
> Each skill is a self-contained module (a `SKILL.md` file) that:
> - Teaches the agent specialized domain knowledge and workflows
> - Connects to real databases, APIs, and computational tools
> - Produces structured, clinically or scientifically relevant outputs
> 
> > We benefit from the open-source community. The full collection of resources can be found here: [Awesome LLM Resources](https://github.com/WangRongsheng/awesome-LLM-resources?tab=readme-ov-file#%E6%8A%80%E8%83%BD-Skills)
> 
> ### Why This Collection Matters
> 
> | Without Skills | With OpenClaw Medical Skills |
> |---|---|
> | Generic AI responses about medicine | Real PubMed / ClinicalTrials.gov / FDA queries |
> | No bioinformatics capability | RNA-seq, scRNA-seq, GWAS, variant calling pipelines |
> | No drug intelligence | ChEMBL, DrugBank, DDI prediction, pharmacovigilance |
> | No clinical documentation | SOAP notes, discharge summaries, prior auth decisions |
> | No genomics support | VCF annotation, ACMG classification, PRS calculation |
> | No regulatory guidance | FDA, CE mark, IEC 62304, ISO 14971 compliance |
> 
> This collection aggregates skills from **12+ open-source skill repositories** spanning academic research tools, clinical workflows, regulatory frameworks, and cutting-edge AI-driven protein design — giving your AI agent capabilities comparable to a team of specialized research scientists.
> 
> ---
> 
> ## Installation
> 
> ### Requirements
> 
> - [OpenClaw](https://github.com/openclaw/openclaw) installed and running, **or** [NanoClaw](https://github.com/MedClaw-Org) as an alternative
> - Git (for cloning this repo)
> 
> ---
> 
> ### For OpenClaw Users
> 
> OpenClaw loads skills from two locations:
> 
> | Priority | Path | Scope |
> |---|---|---|
> | High | `/skills/` | Per-workspace (recommended) |
> | Low | `~/.openclaw/skills/` | Global, shared across all agents |
> 
> #### Method 1 — Clone and Copy (Recommended)
> 
> ```bash
> # Clone this repository
> git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
> 
> # Install to your workspace skills directory
> cp -r OpenClaw-Medical-Skills/skills/* /skills/
> 
> # Or install globally (available to all agents)
> cp -r OpenClaw-Medical-Skills/skills/* ~/.openclaw/skills/
> ```
> 
> Skills are picked up automatically on the next session. No restart needed.
> 
> #### Method 2 — ClawHub CLI
> 
> If you use the [ClawHub registry](https://clawhub.com), you can search and install individual skills from there. For bulk install from this collection, Method 1 is faster.
> 
> ```bash
> npm install -g clawhub
> clawhub install     # install a single skill
> clawhub update --all            # update all installed skills
> ```
> 
> #### Method 3 — Configure Extra Directories
> 
> To point OpenClaw at a cloned copy of this repo permanently, add it to `~/.openclaw/openclaw.json`:
> 
> ```json
> {
>   "skills": {
>     "load": {
>       "extraDirs": ["/path/to/OpenClaw-Medical-Skills/skills"]
>     }
>   }
> }
> ```
> 
> This mounts the entire collection without copying files.
> 
> #### Method 4 — Install Selected Skills Only
> 
> Pick skills relevant to your domain:
> 
> ```bash
> # Examp

## 延伸閱讀

相關概念：[[機器學習]] · [[自然語言處理]] · [[資料視覺化]]

[GitHub](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
