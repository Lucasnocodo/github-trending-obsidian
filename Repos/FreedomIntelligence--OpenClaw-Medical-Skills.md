---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 921
stars_per_day: 461
forks: 107
open_issues: 2
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "醫療AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供869種醫療AI技能，讓AI助手具備專業醫療研究能力。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "提供869種醫療AI技能，讓AI助手具備專業醫療研究能力。"
---

# OpenClaw-Medical-Skills

**921** stars · **461** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓AI助手具備專業醫療研究能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (461 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要在醫療研究中使用AI助手的研究團隊或開發者。
> **一句話重點** 這個專案展示了開源社群如何協作，創建出強大的醫療AI工具，提升醫療研究的效率和準確性。

> [!abstract] 核心創新
> 這個專案提供了最全面的開源醫療AI技能庫，能夠滿足多種醫療研究需求。

## 專案簡介

OpenClaw Medical Skills 是一個包含869個醫療和生物醫學研究技能的開源庫，旨在將通用AI代理轉變為強大的醫療研究助手。每個技能都是一個獨立的模組，包含專業知識和工作流程，並能連接到真實的數據庫和API，生成結構化的臨床或科學相關輸出。這些技能涵蓋臨床、基因組學、藥物發現等領域，並且能夠進行如RNA-seq、GWAS等生物信息學分析。與其他工具相比，OpenClaw Medical Skills 提供了更專業的醫療數據查詢和文檔生成能力，能夠處理FDA合規性和藥物智能等複雜任務。使用者可以輕鬆安裝和更新技能，並且無需重啟代理。該專案目前處於穩定階段，適合需要進行醫療研究的團隊使用。對於小型團隊或個人開發者，若不需要全面的醫療技能，則可能不需要使用這個完整的庫。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869種專業技能 — 涵蓋臨床、基因組學、藥物發現等領域，提供多樣化的醫療AI應用。
- 自動生成臨床文檔 — 支持SOAP筆記和出院摘要的生成，提升文檔處理效率。
- 連接真實數據庫 — 能夠查詢PubMed、ClinicalTrials.gov等資料庫，獲取最新的研究資訊。
- 生物信息學分析能力 — 包括RNA-seq、GWAS等分析管道，支援複雜的數據處理。
- FDA合規性查詢 — 提供藥物智能和合規性指導，幫助研究者遵循法規要求。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 將技能複製到工作區域
```bash
cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
3. 驗證安裝
```bash
詢問代理: 'What medical and clinical skills do you have available?'
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
> 這個專案的主要貢獻者包括 WangRongsheng 和其他幾位開發者，他們在開源社群中有著良好的聲譽。OpenClaw Medical Skills 解決了醫療AI助手缺乏專業技能的痛點，提供了豐富的醫療數據查詢和分析功能。最近的推廣活動和社群討論也提高了這個專案的可見度。隨著醫療AI需求的增加，這個工具的實用性和必要性愈加明顯。

## 適合誰使用

**目標受眾**：需要在醫療研究中使用AI助手的研究團隊或開發者。

> [!example] 使用場景
> - 臨床研究人員用它來自動生成臨床報告，因為這樣可以節省大量手動編寫的時間，並確保報告的專業性和準確性。
> - 生物信息學家用它來進行RNA-seq數據分析，因為它提供了現成的分析管道，能快速獲得結果而不需從頭開始搭建環境。
> - 藥物研究者用它來查詢FDA合規性資料，因為這樣能夠即時獲得最新的法規資訊，避免了手動查找的繁瑣。

## 架構分析

這是一個前後端分離的架構，使用者透過 OpenClaw 或 NanoClaw 代理來加載技能。用戶輸入 → 代理處理技能請求 → 輸出結構化的醫療資訊。關鍵技術決策包括使用獨立的技能模組來提升可維護性和擴展性。專案目錄結構中，技能存放在 skills/ 目錄下，每個技能都有自己的 SKILL.md 檔案。

## 技術深入分析

> [!note]- 展開深入分析
> OpenClaw Medical Skills 的核心在於其869種技能的設計，每個技能都是獨立的模組，能夠專注於特定的醫療領域。這些技能不僅提供知識，還能連接到實際的數據源，這在其他醫療AI工具中並不常見。效能上，這些技能能夠快速響應查詢，並生成結構化的輸出，提升了臨床工作流程的效率。設計上，選擇模組化的方式使得技能的維護和擴展變得更加容易，這是與其他工具相比的一大優勢。

## 優缺點分析

> [!success] 優點
> - 提供多達869種專業技能，涵蓋廣泛的醫療領域。
> - 能夠連接到實際的醫療數據庫，提供即時的資訊查詢。
> - 支持自動生成臨床文檔，提升工作效率。

> [!danger] 缺點
> - 需要一定的學習曲線來熟悉各種技能的使用。
> - 安裝過程可能對新手來說有點複雜。
> - 不適合非醫療領域的應用，專注於醫療相關功能。

> [!warning] 注意事項
> - 需要安裝 OpenClaw 或 NanoClaw 作為基礎架構。
> - 技能數量龐大，可能需要時間來熟悉每個技能的功能。
> - 不支援非醫療領域的技能，專注於醫療相關應用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 107 |
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

**社群活躍度**：社群活躍，定期更新技能和文檔。
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

相關概念：[[醫療AI]] · [[生物信息學]] · [[臨床研究]]

相關專案：[[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[inspatio--worldfm|inspatio/worldfm]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanishqkumar--ssd|tanishqkumar/ssd]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，914 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
