---
repo: FreedomIntelligence/OpenClaw-Medical-Skills
url: https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills
owner: FreedomIntelligence
owner_type: Organization
language: Python
license: N/A
description: "The largest open-source medical AI skills library for OpenClaw🦞."
homepage: ""
stars: 1077
stars_per_day: 269
forks: 127
open_issues: 2
created: 2026-03-08
pushed_at: 2026-03-11
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "醫療AI"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供最全面的開源醫療AI技能庫，讓AI助手具備專業醫療研究能力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-16"
contributor_count: 3
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:950,2026-03-11:953,2026-03-13:1077"
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
  - "提供最全面的開源醫療AI技能庫，讓AI助手具備專業醫療研究能力。"
---

# OpenClaw-Medical-Skills

**953** stars · **477** stars/天 · 建立 2 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`awesome` `claude-code` `clawhub` `medical` `nanoclaw` `openclaw` `openclaw-skills` `skills`

> [!summary] 一句話摘要
> 提供最全面的開源醫療AI技能庫，讓AI助手具備專業醫療研究能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (477 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在醫療研究中使用AI技能的科學家和開發者。
> **一句話重點** 這個專案不僅是技能的集合，更是醫療AI研究的強大工具，能夠顯著提升AI助手的專業能力。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到強大的醫療AI技能，值得投入。

> [!abstract] 核心創新
> 這個專案是最大的開源醫療AI技能庫，提供869個專業技能。

## 專案簡介

OpenClaw Medical Skills 是一個專為 OpenClaw 和 NanoClaw 設計的醫療AI技能庫，擁有869個經過精選的技能，涵蓋臨床、基因組學、藥物發現等多個領域。用戶可以透過簡單的指令將這些技能安裝到自己的工作空間或全局環境中，例如使用 `cp -r OpenClaw-Medical-Skills/skills/* ~/.openclaw/skills/` 來安裝所有技能。這些技能不僅提供醫療相關的查詢能力，還能連接到實際的數據庫和API，生成結構化的臨床或科學輸出。這樣的設計使得AI助手能夠執行如PubMed查詢、RNA-seq分析等高級任務，顯著提升其在醫療研究中的應用價值。

技術上，這個專案依賴於 Python 和多種其他語言，並且與 OpenClaw 平台緊密整合，提供靈活的技能加載選項。與其他醫療AI工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，OpenClaw Medical Skills 提供更全面的技能集，並且支持即時查詢和數據分析，適合需要高效醫療數據處理的研究團隊。使用者在安裝和使用過程中可能會遇到如 macOS 環境下的克隆問題，但社群活躍度高，能夠快速獲得支持。這個專案目前處於早期階段，但其潛力巨大，未來可能會持續擴展技能庫和功能，適合需要專業醫療AI技能的團隊使用。

**技術棧**：`Python` · `Jupyter Notebook` · `Docker`

## 重點功能

- 869個技能 — 涵蓋臨床、基因組學、藥物發現等多個領域，提供全面的醫療AI能力。
- 即時查詢 — 能夠直接連接到PubMed和ClinicalTrials.gov，獲取最新的醫療資訊。
- 靈活的安裝選項 — 支持多種安裝方式，包括全局安裝和按需加載特定技能。
- 結構化輸出 — 每個技能生成的結果都是結構化的，便於後續分析和使用。
- 開源社群支持 — 來自開源社群的持續貢獻和更新，確保技能庫的持續擴展和改進。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
```
2. 將技能複製到工作空間
```bash
cp -r OpenClaw-Medical-Skills/skills/* ~/.openclaw/skills/
```
3. 驗證安裝
```bash
詢問你的代理: 'What medical and clinical skills do you have available?'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 953 stars（476.5/天），forks 116（12.2%），顯示出強烈的社群關注。這個專案的主要貢獻者 WangRongsheng 和其他成員在醫療AI領域有豐富的經驗，解決了醫療AI技能不足的痛點，讓開發者能夠輕鬆集成多種專業技能。近期的推廣活動和社群討論也提高了其曝光率。技術上，這個工具的開源性和廣泛的技能覆蓋使其在當前醫療AI生態中脫穎而出，forks/stars 比率顯示出使用者對其進行實際修改的意願。

## 適合誰使用

**目標受眾**：需要在醫療研究中使用AI技能的科學家和開發者。

> [!example] 使用場景
> - 醫療研究人員用它來快速查詢臨床試驗數據，因為能夠直接從 PubMed 和 ClinicalTrials.gov 獲取最新資訊。
> - 生物資訊學家用它來執行 RNA-seq 分析，因為其內建的基因組學技能能夠自動化數據處理流程。
> - 藥物開發團隊用它來進行藥物相互作用預測，因為可以利用 ChEMBL 和 DrugBank 數據庫進行深入分析。

## 架構分析

OpenClaw Medical Skills 的架構設計以模組化為核心，允許用戶根據需求選擇和安裝特定技能。每個技能都是獨立的模組，包含專門的知識和工作流程，並能連接到外部數據庫和API。這種設計使得技能的擴展和更新變得靈活，使用者可以根據實際需求進行配置。選擇模組化架構的代價在於需要用戶具備一定的配置能力，並且可能在技能間的整合上面臨挑戰。擴展性方面，隨著技能數量的增加，可能會影響系統的加載速度和性能，特別是在資料量大的情況下。

## 技術深入分析

OpenClaw Medical Skills 的核心技術機制是模組化的技能設計，每個技能都能獨立運作並連接到外部數據庫，這樣的設計使得用戶可以根據需求選擇合適的技能。這些技能能處理的數據量相當龐大，特別是在進行基因組學和臨床研究時，可能需要大量的計算資源。選擇 Python 作為主要開發語言，因為其在數據科學和機器學習領域的廣泛應用，並且擁有豐富的庫支持。這個專案的依賴樹相對簡單，主要依賴於 Python 生態系統中的標準庫和一些第三方庫，降低了使用者的學習成本。技術風險方面，隨著技能數量的增加，可能會出現性能瓶頸，特別是在同時加載多個技能的情況下。此外，對外部API的依賴也可能帶來不穩定性。整合方面，這個專案能夠與主流的開發工具和CI/CD流程無縫對接，便於團隊的協作和部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但在 macOS 上可能會遇到一些問題。文件目前僅有英文版本，未提供多語言支持。整體來說，花30分鐘能夠成功跑起來。

## 優缺點分析

> [!success] 優點
> - 提供全面的醫療AI技能，涵蓋多個專業領域。
> - 靈活的安裝和使用方式，適合不同需求的用戶。
> - 開源社群支持，持續更新和擴展技能庫。

> [!danger] 缺點
> - 僅限於 OpenClaw 或 NanoClaw 環境使用。
> - 安裝過程中可能遇到平台特定的問題。
> - 需要一定的技術背景來配置和使用。

> [!warning] 注意事項
> - 僅支援 OpenClaw 或 NanoClaw 環境。
> - 部分技能可能需要額外的數據庫訪問權限。
> - 在 macOS 上安裝時可能會遇到克隆失敗的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的數據同步功能，但缺乏醫療專業技能的支持。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，但不具備醫療數據處理的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，並不提供醫療專業技能。 | 如果你的需求主要是數據同步，而非醫療AI技能，則可以考慮它。 | low，因為它的功能相對簡單，容易上手。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，並不具備醫療數據處理的能力。 | 如果你的專案重點在於數據安全而非醫療分析，則可以選擇它。 | medium，因為需要重新設計數據處理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenClaw-Medical-Skills** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和備份，並不提供醫療專業技能。 | 專注於數據隱私和安全，並不具備醫療數據處理的能力。 |
> | 遷移成本 | - | low，因為它的功能相對簡單，容易上手。 | medium，因為需要重新設計數據處理流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步，而非醫療AI技能，則可以考慮它。 | 如果你的專案重點在於數據安全而非醫療分析，則可以選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上克隆時可能會遇到 checkout 失敗的問題。
  - 解法：嘗試使用不同的 Git 版本或在 Linux 環境中進行克隆。
- [MEDIUM] 某些技能可能需要額外的數據庫訪問權限。
  - 解法：確保已經獲得相關數據庫的訪問權限。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的生物醫學研究團隊 | 非常適合 | 提供全面的醫療AI技能，能夠支持多種研究需求。 |
| 大型醫療機構的臨床數據分析 | 適合 | 能夠處理大量的臨床數據，但可能需要進一步的性能優化。 |
| 個人開發者的醫療AI專案 | 非常適合 | 開源且易於安裝，適合快速原型開發。 |
| 需要高效能計算的藥物開發團隊 | 普通 | 雖然提供藥物相關技能，但性能可能成為瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到強大的醫療AI技能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但依賴的外部API需注意安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaw Medical Skills 最常與 OpenClaw 和 NanoClaw 搭配使用，作為醫療AI助手的技能庫。在一個使用 OpenClaw 的專案中，可以透過 `cp -r` 指令將技能複製到指定目錄，並立即使用。支援 GitHub Actions 等主流CI工具，並可與多種IDE（如 VS Code）整合。整合過程中，最常見的問題是技能之間的相容性，可能需要進行調整。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 116 |
| Open Issues | 2 |
| 最後推送 | 2026-03-11 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 77.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| Topics | `awesome` `claude-code` `clawhub` `medical` `nanoclaw` `openclaw` `openclaw-skills` `skills` |

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
> | [@donglihe-hub](https://github.com/donglihe-hub) | 9 |
> | [@wabyking](https://github.com/wabyking) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和問題回應。
**連結**：[文件](https://github.com/MedClaw-Org/OpenClaw-Medical-Skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-11）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #11 from donglihe-hub/test

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/3) | Question regarding content verification and selection criter `question` | 0 | 1 |
> | [#1](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills/issues/1) | warning: Clone succeeded, but checkout failed in macOS. `help wanted` | 0 | 2 |

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
> 
> ## Installation
> 
> 
> # Install to your workspace skills directory
> cp -r OpenClaw-Medical-Skills/skills/* /skills/
> 
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
> 
> # Example: clinical + drug discovery stack
> SKILLS=(
>   "clinical-reports"
>   "tooluniverse-drug-research"
>   "tooluniverse-pharmacovigilance"
>   "clinicaltrials-database"
>   "biomedical-search"
>   "tooluniverse-drug-drug-interaction"
> )
> 
> for skill in "${SKILLS[@]}"; do
>   cp -r OpenClaw-Medical-Skills/skills/$skill ~/.openclaw/skills/
> done
> ```
> 
> ---
> 
> 
> ## Skills Overview
> 
> | Category | Count | Highlights |
> |---|---|---|
> | General & Core | 10 | Browser/search, document tools, and developer workflow utilities |
> | Medical & Clinical | 119 | Clinical reports, CDS, oncology, imaging, and healthcare AI |
> | Scientific Databases | 43 | Genomics/protein/drug databases and biomedical knowledge retrieval |
> | Bioinformatics (gptomics) | 239 | Variant analysis, sequencing QC, DE, pathways, single-cell, and epigenomics |
> | Omics & Computational Biology | 59 | Single-cell/spatial, proteomics, cheminformatics, and protein design tools |
> | ClawBio Pipelines | 21 | Orchestration pipelines for scRNA, GWAS, ancestry, and structural workflows |
> | BioOS Extended Suite | 285 | Extended agent suite for oncology, immunology, clinical AI, and infrastructure |
> | Data Science & Tools | 93 | Statistics, visualization, automation, simulation, and scientific tooling |
> | **Total** | **869** | |
> 
> ---
> 
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
> 
> ### Requirements
> 
> - [OpenClaw](https://github.com/openclaw/openclaw) installed and running, **or** [NanoClaw](https://github.com/MedClaw-Org) as an alternative
> - Git (for cloning this repo)
> 
> ---
> 
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
> 
> # Clone this repository
> git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
> 
> 
> ### For NanoClaw Users
> 
> NanoClaw loads skills into agent containers at startup from `container/skills/`.
> 
> ```bash
> 
> # Clone and copy into NanoClaw container skills directory
> git clone https://github.com/MedClaw-Org/OpenClaw-Medical-Skills.git
> cp -r OpenClaw-Medical-Skills/skills/* /path/to/nanoclaw/container/skills/
> 
> 
> # Rebuild the container to apply
> cd /path/to/nanoclaw
> ./container/build.sh
> ```
> 
> ---
> 
> 
> ### Verification
> 
> After installation, ask your agent:
> 
> ```
> What medical and clinical skills do you have available?
> ```
> 
> Your agent should list the installed skills with their capabilities.
> 
> ---
> 
> 
> ## Table of Contents
> 
> 
> ### General & Core
> - [General Tools](#general-tools)
> 
> 
> ### Medical & Clinical
> - [Medical Tools](#medical-tools)
> - [Drug Safety & Chemical Biology](#drug-safety--chemical-biology)
> - [Medical Imaging & Pathology](#medical-imaging--pathology)
> - [Healthcare ML & Clinical AI](#healthcare-ml--clinical-ai)
> - [Mental Health & Crisis Intervention](#mental-health--crisis-intervention)
> - [Health & Wellness Analytics](#health--wellness-analytics)
> - [Medical Device & Regulatory](#medical-device--regulatory)
> - [Medical Device Software (meddev-agent-skills)](#medical-device--regulatory)
> 
> 
> ### Scientific Databases
> - [Scientific Databases (Genomics & Variants)](#scientific-databases-genomics--variants)
> - [Scientific Databases (Proteins, Pathways & Drugs)](#scientific-databases-proteins-pathways--drugs)
> - [Cancer Genomics Databases](#cancer-genomics-databases)
> - [Genomic & Molecular Databases](#genomic--molecular-databases)
> - [Structural Biology & Drug Discovery](#structural-biology--drug-discovery)
> 
> 
> ### Bioinformatics (gptomics bio-* suite)
> - [Bioinformatics Tools & Pipelines](#bioinformatics-tools--pipelines)
> - [Bioinformatics — Clinical Databases & Variant Analysis](#bioinformatics--clinical-databases--variant-analysis)
> - [Bioinformatics — Sequencing & Read QC](#bioinformatics--sequencing--read-qc)
> - [Bioinformatics — Differential Expression & Transcriptomics](#bioinformatics--differential-expression--transcriptomics)
> - [Bioinformatics — Pathway & Network Analysis](#bioinformatics--pathway--network-analysis)
> - [Bioinformatics — Single-Cell & Spatial Omics](#bioinformatics--single-cell--spatial-omics)
> - [Bioinformatics — Epigenomics & Chromatin](#bioinformatics--epigenomics--chromatin)
> - [Bioinformatics — Metagenomics & Microbiome](#bioinformatics--metagenomics--microbiome)
> - [Bioinformatics — Immunoinformatics & Flow Cytometry](#bioinformatics--immunoinformatics--flow-cytometry)
> - [Bioinformatics — Multi-Omics Integration](#bioinformatics--multi-omics-integration)
> - [Bioinformatics — Proteomics & Metabolomics](#bioinformatics--proteomics--metabolomics)
> - [Bioinformatics —

## 延伸閱讀

相關概念：[[生物資訊學]] · [[臨床AI]] · [[開源技能庫]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]]

[GitHub](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills)

## 相關收錄

> [!note]- 直接競品（同子分類：醫療AI）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "醫療AI" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["生物資訊學","臨床AI","開源技能庫"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "FreedomIntelligence--OpenClaw-Medical-Skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "FreedomIntelligence" AND file.name != "FreedomIntelligence--OpenClaw-Medical-Skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/FreedomIntelligence--OpenClaw-Medical-Skills");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-13|2026-03-13]] — 再次上榜，1.1k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，914 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，885 stars
