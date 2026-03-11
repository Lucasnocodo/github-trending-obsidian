---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 912
stars_per_day: 456
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
use_case: "提供869種醫療AI技能，讓OpenClaw成為強大的醫療研究助手。"
priority: medium
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
  - "提供869種醫療AI技能，讓OpenClaw成為強大的醫療研究助手。"
---

# OpenClaw-Medical-Skills

**912** stars · **456** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓OpenClaw成為強大的醫療研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (456 stars/day)
> **適合** 需要在OpenClaw上進行醫療AI開發的研究團隊和開發者。
> **一句話重點** 這個專案讓AI代理具備了醫療領域的專業能力，顯著提升了AI在醫療研究中的應用潛力。

> [!abstract] 核心創新
> 這個專案提供了869種專業的醫療AI技能，讓AI代理具備相當於專業研究團隊的能力。

## 專案簡介

OpenClaw Medical Skills 是一個包含869種醫療AI技能的開源庫，專為OpenClaw和NanoClaw框架設計。這些技能模組化，能夠教導AI代理專業的醫療知識和工作流程，並連接到實際的數據庫和API，生成結構化的臨床或科學相關輸出。技術上，這個庫整合了來自12個以上開源技能庫的資源，涵蓋臨床研究、基因組學、藥物發現等領域，讓AI代理的能力相當於一組專業研究科學家。相較於一般的AI工具，OpenClaw Medical Skills 提供了具體的生物信息學能力和藥物智能，能夠進行RNA-seq分析、藥物相互作用預測等。使用者可以輕鬆安裝和管理這些技能，並根據需求選擇特定的技能模組。這個專案目前處於穩定階段，適合需要醫療AI應用的研究團隊。對於需要快速獲取醫療資訊的開發者，這是一個值得考慮的選擇，但對於不涉及醫療領域的專案則不太適合。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869種醫療AI技能 — 涵蓋臨床、基因組學、藥物發現等領域，提供全面的醫療研究支持。
- 模組化設計 — 每個技能都是獨立的模組，便於安裝和管理。
- 連接實際數據庫 — 能夠查詢PubMed、ClinicalTrials.gov等資料，提供真實的醫療資訊。
- 支持生物信息學分析 — 包括RNA-seq、GWAS等，滿足專業需求。
- 自動生成臨床文檔 — 如SOAP筆記和出院摘要，簡化文書工作。

## 快速開始

1. 克隆此庫
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 安裝到工作區技能目錄
```bash
cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
3. 驗證安裝
```bash
Ask your agent: 'What medical and clinical skills do you have available?'
```

## 程式碼範例

```bash
# 安裝選定的技能
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
> 這個專案由多位背景深厚的開發者共同維護，切中醫療AI需求的痛點，特別是在臨床和生物醫學研究領域。隨著AI在醫療領域的應用日益增多，這樣的開源資源正好填補了市場的空白，並且提供了實用的解決方案。

## 適合誰使用

**目標受眾**：需要在OpenClaw上進行醫療AI開發的研究團隊和開發者。

> [!example] 使用場景
> - 臨床研究員用它來快速查詢PubMed和ClinicalTrials.gov的資料，因為這樣可以節省大量手動查詢的時間，並獲得準確的研究結果。
> - 生物信息學家用它來執行RNA-seq分析和變異呼叫，因為這些技能能夠自動化繁瑣的流程，提升研究效率。
> - 藥物研發團隊用它來預測藥物相互作用，因為這能夠提高藥物安全性評估的準確性，減少臨床試驗的風險。

## 架構分析

OpenClaw Medical Skills 採用模組化架構，使用者可以根據需求安裝特定技能。用戶輸入 → AI代理處理 → 輸出結構化的醫療資訊。關鍵技術決策包括連接實際數據庫和API，並生成臨床文檔。專案目錄結構中，skills資料夾包含所有技能模組。

## 技術深入分析

> [!note]- 展開深入分析
> OpenClaw Medical Skills 的核心在於其869種技能模組，這些模組不僅提供專業知識，還能連接到多個實際數據源。這些技能的設計考量了臨床和生物醫學研究的需求，並且能夠自動生成臨床文檔。效能上，這些技能能夠快速響應查詢並提供準確的資訊，對於需要即時數據的研究者尤為重要。與其他醫療AI工具相比，OpenClaw Medical Skills 的優勢在於其開源性和模組化設計，使用者可以根據需求靈活選擇和安裝技能。

## 優缺點分析

> [!success] 優點
> - 提供全面的醫療AI技能，涵蓋多個專業領域。
> - 模組化設計，便於用戶根據需求選擇安裝。
> - 能夠連接實際數據庫，提供真實的醫療資訊。

> [!danger] 缺點
> - 需要使用者具備一定的醫療知識以充分利用技能。
> - 安裝和配置過程可能對新手造成困難。
> - 技能數量龐大，學習曲線較陡。

> [!warning] 注意事項
> - 需要安裝OpenClaw或NanoClaw。
> - 技能數量龐大，可能需要時間來熟悉每個技能的功能。
> - 對於非醫療領域的應用，可能不太適合。

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

**社群活躍度**：社群活躍，持續更新和維護。
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

相關概念：[[生物信息學]] · [[臨床研究]] · [[藥物發現]]

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
