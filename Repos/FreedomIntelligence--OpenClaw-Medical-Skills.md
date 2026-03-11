---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 925
stars_per_day: 463
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
use_case: "提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "medium"
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
  - "提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。"
---

# OpenClaw-Medical-Skills

**925** stars · **463** stars/天 · 建立 2 天前 · Python · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供869種醫療AI技能，讓OpenClaw成為強大的醫學研究助手。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (463 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 需要在醫療研究中使用AI技能的研究團隊和醫療專業人士。
> **一句話重點** 這個專案展示了開源社群如何聚集專業技能，讓AI在醫療領域發揮更大作用。

> [!abstract] 核心創新
> 這個專案提供了869種針對醫療領域的AI技能，讓AI能夠進行專業的醫學查詢和分析。

## 專案簡介

OpenClaw Medical Skills 是一個包含869種專業醫療技能的開源庫，旨在將一般的AI代理轉變為醫學和科學研究的強大助手。每個技能都是一個獨立的模組，能夠連接真實的數據庫和API，並生成結構化的臨床或科學相關輸出。這些技能涵蓋了臨床報告、基因組學、藥物發現等多個領域，並支持從PubMed、ClinicalTrials.gov等資料庫查詢。與傳統的AI工具相比，這個庫提供了更具針對性的功能，如RNA-seq分析和藥物相互作用預測，讓AI能夠在生物醫學研究中發揮更大的作用。使用者可以根據需求選擇安裝特定的技能，或是整體導入所有技能，這使得安裝過程靈活且高效。該專案適合需要進行醫學研究的團隊，能夠快速提升AI的專業能力。整體來說，這是一個穩定的專案，值得在醫療領域的AI應用中使用。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869種醫療技能 — 包括臨床報告、基因組學、藥物發現等多個領域的專業技能。
- 自動連接數據庫 — 能夠直接查詢PubMed、ClinicalTrials.gov等資料庫。
- 結構化輸出 — 生成符合臨床或科學要求的結構化報告。
- 靈活的安裝選項 — 使用者可以選擇安裝所有技能或特定技能。
- 支持多種AI框架 — 可與OpenClaw和NanoClaw等框架兼容使用。

## 快速開始

1. 克隆專案並安裝技能
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git && cp -r OpenClaw-Medical-Skills/skills/* /skills/
```
2. 使用ClawHub安裝單個技能
```bash
npm install -g clawhub && clawhub install
```
3. 檢查已安裝的技能
```bash
echo 'What medical and clinical skills do you have available?'
```

## 程式碼範例

```bash
# 克隆並安裝技能
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
cp -r OpenClaw-Medical-Skills/skills/* ~/.openclaw/skills/

# 檢查技能
echo 'What medical and clinical skills do you have available?'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 WangRongsheng 和其他幾位貢獻者共同開發，他們在開源社群中有著良好的聲譽。OpenClaw Medical Skills 解決了傳統AI在醫療領域應用的不足，提供了針對性的技能庫，讓AI能夠進行專業的醫學查詢和分析。最近在社群中引發了討論，特別是在醫療AI的應用方面，這使得該專案的曝光度上升。

## 適合誰使用

**目標受眾**：需要在醫療研究中使用AI技能的研究團隊和醫療專業人士。

> [!example] 使用場景
> - 醫學研究人員用它來快速查詢PubMed資料庫中的最新研究，因為傳統的查詢方式耗時且容易錯過重要文獻。
> - 生物資訊學家用它來執行RNA-seq數據分析，因為內建的分析技能能夠自動化處理流程，節省了大量手動操作時間。
> - 臨床醫生用它來生成SOAP報告，因為這樣可以提高文書工作的效率，並減少錯誤的發生。

## 架構分析

該專案採用模組化架構，使用者可以根據需求選擇安裝特定的技能。用戶輸入 → AI代理查詢數據庫 → 輸出結構化報告。核心技術決策包括支持多種AI框架和靈活的安裝選項。專案目錄結構中，技能以獨立模組形式存在，便於管理和擴展。

## 技術深入分析

OpenClaw Medical Skills 的核心技術機制是透過模組化的技能設計，讓AI代理能夠快速學習和應用專業知識。這些技能能夠連接到真實的醫療數據庫，並生成結構化的輸出，這在傳統AI工具中是難以實現的。專案能夠處理的資料量取決於所連接的數據庫，通常能夠支持大規模的查詢和分析。選擇Python作為主要開發語言，這使得專案在數據處理和AI模型的整合上具備優勢，但也可能面臨性能瓶頸，尤其是在高並發查詢的情況下。設計上，這個專案考慮到了靈活性和擴展性，使用者可以根據需求選擇安裝特定的技能，這降低了使用的複雜度。然而，隨著使用者數量的增加，如何保持系統的穩定性和安全性將是未來需要解決的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構化，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但對於新手來說，可能需要一些時間來理解技能的配置和使用。文件目前僅提供英文版本，缺乏多語言支持，這可能會影響非英語使用者的體驗。

## 優缺點分析

> [!success] 優點
> - 提供大量專業醫療技能，涵蓋多個領域。
> - 能夠直接連接真實數據庫，提升查詢效率。
> - 靈活的安裝方式，適合不同需求的使用者。

> [!danger] 缺點
> - 需要額外的框架安裝，增加了使用門檻。
> - 部分技能可能需要額外的配置和授權。
> - 新手可能需要時間熟悉技能的使用。

> [!warning] 注意事項
> - 需要安裝OpenClaw或NanoClaw框架。
> - 安裝過程需手動配置部分路徑。
> - 部分技能可能需要額外的API金鑰或授權。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，而非醫療技能的提供。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於網絡安全和數據保護，與醫療AI無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，並不針對醫療領域。 | 如果需要數據同步功能而非醫療AI技能，則應選擇此工具。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於網絡安全和數據保護，與醫療AI無關。 | 當需要進行網絡安全測試時，這個工具會更合適。 |

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

**社群活躍度**：社群活躍度中等，持續有更新和貢獻。
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

相關概念：[[生物醫學]] · [[基因組學]] · [[臨床研究]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[inspatio--worldfm|inspatio/worldfm]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[tanishqkumar--ssd|tanishqkumar/ssd]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，914 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
