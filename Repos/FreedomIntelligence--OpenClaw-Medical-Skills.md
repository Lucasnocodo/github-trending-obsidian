---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 906
stars_per_day: 453
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

**906** stars · **453** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (453 stars/day)
> **適合** 需要進行醫學研究或臨床應用的研究團隊和醫療專業人士。
> **一句話重點** 這個專案展示了開源社群在醫療AI領域的潛力，能夠快速集成並提供專業知識支持。

> [!abstract] 核心創新
> 這個專案是最大的開源醫療AI技能庫，提供全面的醫學研究支持。

## 專案簡介

OpenClaw Medical Skills 是一個包含869個醫療AI技能的開源庫，專為OpenClaw和NanoClaw設計，能將一般的AI代理轉變為專業的醫學和科學研究助手。每個技能都是獨立模組，包含專業知識、連接真實數據庫和API，並生成結構化的臨床或科學相關輸出。這些技能涵蓋臨床、基因組學、藥物發現等多個領域，並且能夠直接查詢PubMed、ClinicalTrials.gov等資料庫。與其他工具相比，OpenClaw Medical Skills的獨特之處在於其專業性和廣泛的應用範圍，能夠提供比一般AI更具深度的醫學知識。使用者只需安裝OpenClaw或NanoClaw，即可輕鬆加載這些技能，無需重啟系統。適合需要進行醫學研究或臨床應用的團隊，並且目前已經有穩定的使用者基礎。建議在需要專業醫療知識的情況下使用，若僅需基本AI功能則可考慮其他輕量級工具。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869種專業醫療技能 — 覆蓋臨床、基因組學、藥物發現等領域，提供即時的醫學知識支持。
- 自動連接真實數據庫 — 能夠查詢PubMed、ClinicalTrials.gov等資料庫，獲取最新的研究成果。
- 結構化輸出 — 生成臨床或科學相關的結構化報告，便於後續分析和使用。
- 支持多種安裝方式 — 可選擇直接複製技能或使用ClawHub CLI進行安裝，靈活性高。
- 與OpenClaw和NanoClaw無縫整合 — 安裝後無需重啟系統，立即可用。

## 快速開始

1. 克隆此庫
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 將技能複製到工作區
```bash
cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
3. 驗證安裝
```bash
ask your agent 'What medical and clinical skills do you have available?'
```

## 程式碼範例

```bash
# 查詢可用的醫療技能
ask your agent 'What medical and clinical skills do you have available?'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由多位貢獻者共同開發，背景涵蓋醫療和AI領域，正好切中醫療AI技能庫的需求。隨著醫療數據的增長和AI技術的進步，這樣的開源庫能夠提供即時的醫學支持，尤其在疫情後，醫療資源的需求急劇上升，促使此專案受到關注。

## 適合誰使用

**目標受眾**：需要進行醫學研究或臨床應用的研究團隊和醫療專業人士。

> [!example] 使用場景
> - 醫療研究人員用它來查詢最新的臨床試驗資料，因為能直接從PubMed獲取資料，節省了大量手動查詢的時間。
> - 生物資訊學家用它來執行RNA-seq分析，因為提供了現成的分析管道，避免了重複造輪子。
> - 藥物開發團隊用它來進行藥物相互作用預測，因為能夠快速接入ChEMBL和DrugBank的數據，提升研究效率。

## 架構分析

這是一個前後端分離的架構，使用者透過OpenClaw或NanoClaw與AI代理互動。用戶輸入 → AI代理處理 → 返回結構化的醫療資訊。關鍵技術決策包括使用模組化技能設計，並且每個技能都能獨立運作。專案目錄結構中，skills目錄包含所有技能模組。

## 優缺點分析

> [!success] 優點
> - 提供大量專業技能，適合醫療和生物研究。
> - 能夠直接連接真實數據庫，提升查詢效率。
> - 安裝簡單，無需重啟系統即可使用。

> [!danger] 缺點
> - 需要依賴OpenClaw或NanoClaw運行環境。
> - 技能的有效性和準確性依賴於社群的持續貢獻。
> - 對於非專業用戶，使用門檻較高。

> [!warning] 注意事項
> - 僅支援OpenClaw或NanoClaw環境。
> - 需要一定的醫學背景知識來有效使用這些技能。
> - 技能更新頻率依賴於社群貢獻，可能會有延遲。

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
