---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 903
stars_per_day: 452
forks: 105
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
  - "提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。"
---

# OpenClaw-Medical-Skills

**903** stars · **452** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (452 stars/day)
> **適合** 需要在醫療和生物研究中使用AI助手的研究團隊。
> **一句話重點** 這個專案展示了如何通過開源協作，將醫療AI技能整合成一個強大的工具，提升研究效率。

> [!abstract] 核心創新
> 這個專案提供了最全面的醫療AI技能庫，整合了多個開源資源。

## 專案簡介

OpenClaw Medical Skills 是一個包含869個AI技能的開源庫，專為OpenClaw和NanoClaw框架設計，這些技能涵蓋了生物醫學和臨床研究的各個方面。每個技能都是一個自包含的模組，包含專業知識、連接真實數據庫和API，並能生成結構化的臨床或科學相關輸出。這個庫的獨特之處在於它整合了來自12個以上開源技能庫的技能，讓AI代理具備類似專業研究團隊的能力。與其他醫療AI工具相比，OpenClaw Medical Skills提供了更全面的功能，包括臨床文檔生成、基因組學支持和藥物智能等。使用者可以輕鬆安裝所需的技能，並透過OpenClaw的接口進行查詢和操作。這個專案適合需要進行醫學研究的團隊，並且目前處於穩定階段，值得立即使用。對於不需要全面醫療功能的小型項目，則可能不需要這麼龐大的技能集合。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869個醫療技能 — 涵蓋臨床、基因組學、藥物發現等多個領域。
- 自包含模組 — 每個技能都包含專業知識和工作流程，便於使用。
- 連接真實數據庫 — 能夠查詢PubMed、ClinicalTrials.gov等資料庫。
- 結構化輸出 — 生成臨床文檔和科學報告，符合醫療標準。
- 支持多種安裝方式 — 提供多種方法安裝技能，靈活性高。

## 快速開始

1. 克隆這個庫
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 安裝到工作區的技能目錄
```bash
cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
3. 驗證安裝
```bash
ask your agent 'What medical and clinical skills do you have available?'
```

## 程式碼範例

```bash
# 安裝臨床報告技能
cp -r OpenClaw-Medical-Skills/skills/clinical-reports ~/.openclaw/skills/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由多位貢獻者共同開發，背景涵蓋醫療和AI領域，切中醫療AI技能整合的需求。隨著AI在醫療領域的應用日益增長，這個專案的推出正好滿足了開發者對於高效能醫療AI工具的渴望。

## 適合誰使用

**目標受眾**：需要在醫療和生物研究中使用AI助手的研究團隊。

> [!example] 使用場景
> - 醫療研究人員用它來查詢PubMed和ClinicalTrials.gov的資料，因為這樣能快速獲取最新的臨床研究資訊，節省了手動查詢的時間。
> - 生物資訊學家用它來執行RNA-seq分析，因為這個技能提供了現成的數據處理管道，能夠提高工作效率。
> - 藥物開發團隊用它來進行藥物相互作用預測，因為這樣可以利用內建的藥物智能技能，減少錯誤和提高準確性。

## 架構分析

該專案採用前後端分離的架構，使用者透過OpenClaw框架與技能庫進行互動。用戶輸入 → OpenClaw處理 → 返回結構化的醫療或科學輸出。核心技術決策在於使用自包含的技能模組，並支持多種安裝方式。專案目錄結構包含skills資料夾，存放各種技能模組。

## 優缺點分析

> [!success] 優點
> - 提供全面的醫療AI技能，適合多種研究需求。
> - 開源社群支持，持續更新和擴展技能庫。
> - 靈活的安裝選項，便於用戶根據需求選擇。

> [!danger] 缺點
> - 需要一定的技術背景來安裝和配置。
> - 對於小型項目來說，技能數量可能過於龐大。
> - 部分技能可能需要額外的數據源或API授權。

> [!warning] 注意事項
> - 需要安裝OpenClaw或NanoClaw。
> - 技能數量龐大，可能對小型項目造成負擔。
> - 部分技能可能需要特定的數據源或API授權。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 105 |
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
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
