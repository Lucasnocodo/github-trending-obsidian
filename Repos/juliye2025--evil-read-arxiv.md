---
repo: juliye2025/evil-read-arxiv
url: https://github.com/juliye2025/evil-read-arxiv
owner: juliye2025
owner_type: User
language: Python
license: N/A
description: "Claude Code+Obsidian，邪修读论文就是快"
homepage: ""
stars: 278
stars_per_day: 40
forks: 37
open_issues: 7
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動化研究論文的搜尋、推薦和分析，讓你更高效地閱讀學術資料。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "evil-read-arxiv"
  - "juliye2025/evil-read-arxiv"
  - "自動化研究論文的搜尋、推薦和分析，讓你更高效地閱讀學術資料。"
---

# evil-read-arxiv

**278** stars · **40** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化研究論文的搜尋、推薦和分析，讓你更高效地閱讀學術資料。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要自動化文獻管理的研究人員和學術寫作人員。
> **一句話重點** 這個專案展示了如何利用自動化技術來提升學術研究的效率。

> [!abstract] 核心創新
> 這個專案通過自動化工作流，將文獻管理的效率提升到新的水平。

## 專案簡介

這個專案透過 Claude Code 技能，實現了研究論文的自動化工作流。用戶每天可以獲得來自 arXiv 和 Semantic Scholar 的論文推薦，並自動生成詳細的分析和筆記。它使用 Python 3.8+，並依賴於多個 API 來獲取論文資料，並生成結構化的筆記，包含摘要翻譯、研究背景、方法概述等。與傳統的手動搜索和筆記方式相比，這個工具能夠節省大量時間，並提高研究效率。使用者需要配置環境變數和 Obsidian Vault 路徑，這樣可以無縫整合到日常的研究工作中。該專案適合需要高頻率閱讀和分析文獻的研究人員，特別是在快速變化的領域。這個工具目前處於 beta 階段，功能尚在持續完善中，但對於需要自動化文獻管理的團隊來說，已經相當實用。若你的研究需要經常跟進最新的論文，這個工具會是個不錯的選擇。

**技術棧**：`Python 3.8+` · `Claude Code`

## 重點功能

- 每日論文推薦 — 自動從 arXiv 和 Semantic Scholar 獲取最新和熱門論文，並生成推薦列表。
- 深度論文分析 — 生成結構化筆記，包含研究背景、方法概述、實驗結果等。
- 圖片提取 — 從論文中提取高質量圖片，並自動保存到筆記目錄。
- 筆記搜索 — 在已有筆記中按標題、作者、關鍵詞進行搜索，並根據相關性排序。
- 環境配置簡單 — 只需設置環境變數和配置文件，即可快速上手。

## 快速開始

1. 克隆專案到 Claude Code skills 目錄
```bash
cp -r evil-read-arxiv/start-my-day ~/.claude/skills/
```
2. 設置環境變數
```bash
export OBSIDIAN_VAULT_PATH="/Users/yourname/Documents/Obsidian Vault"
```
3. 啟動每日論文推薦
```bash
start my day
```

## 程式碼範例

python scripts/search_arxiv.py --config "/your/path/research_interests.yaml"

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 juliye2025 之前參與過多個開源專案，顯示出其在技術上的專業性。(b) 這個工具解決了學術界在文獻管理上的痛點，特別是對於需要快速獲取和分析大量資料的研究者。(c) 近期在社群媒體上有關於自動化文獻管理的討論，讓這個專案受到關注。(d) 隨著學術研究的數位化進程加速，這類工具的需求變得更加迫切。

## 適合誰使用

**目標受眾**：需要自動化文獻管理的研究人員和學術寫作人員。

> [!example] 使用場景
> - 研究人員用它來每天自動獲取最新的論文推薦，因為這樣可以節省手動搜索的時間，並確保不錯過重要的研究進展。
> - 學術寫作人員用它來生成詳細的論文分析筆記，因為這樣可以快速整理思路，提升寫作效率。
> - 學生用它來查找和分析特定領域的文獻，因為這樣可以更系統地掌握研究現狀，提升學習效果。

## 架構分析

該專案採用 CLI 工具架構，核心資料流為：用戶輸入 → 論文搜索與分析 → 輸出筆記和推薦列表。關鍵技術決策包括使用 API 獲取論文資料，並生成結構化的筆記。專案目錄結構清晰，包含多個技能模組，便於擴展和維護。

## 優缺點分析

> [!success] 優點
> - 自動化文獻管理，節省時間和精力。
> - 生成結構化的分析筆記，提升研究效率。
> - 支持從多個來源獲取論文，增加資料的多樣性。

> [!danger] 缺點
> - 需要一定的環境配置，對新手可能有些困難。
> - 目前功能仍在持續完善中，可能存在不穩定性。
> - 僅支持特定的論文來源，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝 Claude Code CLI，並配置相關環境變數。
> - 目前僅支持從 arXiv 和 Semantic Scholar 獲取論文，對於其他來源的支持尚未實現。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 37 |
| Open Issues | 7 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 67 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@juliye2025](https://github.com/juliye2025) | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # evil-read-arxiv
> 
> > 邪修的论文阅读工作流 - 自动化论文搜索、推荐、分析和整理
> 
> ## 简介
> 
> 这是一套 Claude Code 技能（Skills）集合，用于自动化研究论文的搜索、推荐、分析和整理工作流。通过调用 arXiv 和 Semantic Scholar API，每天为你推荐高质量论文，并自动生成详细笔记和关系图谱。
> 
> ## 功能特点
> 
> ### 1. start-my-day - 每日论文推荐
> - 从 arXiv 搜索最近一个月的论文
> - 从 Semantic Scholar 搜索过去一年的高热度论文
> - 基于相关性、新近性、热门度、质量四个维度综合评分
> - 自动生成今日概览和推荐列表
> - 前三篇论文自动生成详细分析和提取图片
> - 自动链接关键词到已有笔记
> 
> ### 2. paper-analyze - 论文深度分析
> - 深度分析单篇论文
> - 生成结构化笔记，包含：
>   - 摘要翻译和要点提炼
>   - 研究背景与动机
>   - 方法概述和架构
>   - 实验结果分析
>   - 研究价值评估
>   - 优势和局限性分析
>   - 与相关论文对比
> - 自动提取论文图片并插入笔记
> - 更新知识图谱
> 
> ### 3. extract-paper-images - 论文图片提取
> - 优先从 arXiv 源码包提取高质量图片
> - 支持从 PDF 提取图片作为备选
> - 自动生成图片索引
> - 保存到笔记目录的 images 子目录
> 
> ### 4. paper-search - 论文笔记搜索
> - 在已有笔记中搜索论文
> - 支持按标题、作者、关键词、领域搜索
> - 相关性评分排序
> 
> ## 安装
> 
> ### 前置要求
> 
> 1. **Claude Code CLI** - 需要安装并配置 Claude Code
> 2. **Python 3.8+** - 用于运行搜索和分析脚本
> 3. **依赖库**：
>    ```bash
>    pip install -r requirements.txt
>    ```
> 
> ### 安装步骤
> 
> 1. 将此仓库克隆或复制到你的 Claude Code skills 目录：
>    ```bash
>    # Windows PowerShell
>    Copy-Item -Recurse evil-read-arxiv\start-my-day $env:USERPROFILE\.claude\skills\
>    Copy-Item -Recurse evil-read-arxiv\paper-analyze $env:USERPROFILE\.claude\skills\
>    Copy-Item -Recurse evil-read-arxiv\extract-paper-images $env:USERPROFILE\.claude\skills\
>    Copy-Item -Recurse evil-read-arxiv\paper-search $env:USERPROFILE\.claude\skills\
> 
>    # macOS/Linux
>    cp -r evil-read-arxiv/start-my-day ~/.claude/skills/
>    cp -r evil-read-arxiv/paper-analyze ~/.claude/skills/
>    cp -r evil-read-arxiv/extract-paper-images ~/.claude/skills/
>    cp -r evil-read-arxiv/paper-search ~/.claude/skills/
>    ```
> 
> 2. 配置环境变量和路径（见下文"配置"部分）
> 
> 3. 重启 Claude Code CLI
> 
> ## 配置
> 
> > **强烈建议**：先阅读 [QUICKSTART.md](QUICKSTART.md) 快速完成设置。
> 
> ### 步骤1：设置环境变量（推荐）
> 
> 所有脚本统一通过 `OBSIDIAN_VAULT_PATH` 环境变量读取 Obsidian Vault 路径，这是最简单的配置方式：
> 
> ```bash
> # Windows PowerShell（临时生效）
> $env:OBSIDIAN_VAULT_PATH = "C:/Users/YourName/Documents/Obsidian Vault"
> 
> # Windows PowerShell（永久生效）
> [System.Environment]::SetEnvironmentVariable("OBSIDIAN_VAULT_PATH", "C:/Users/YourName/Documents/Obsidian Vault", "User")
> 
> # macOS/Linux（添加到 ~/.bashrc 或 ~/.zshrc）
> export OBSIDIAN_VAULT_PATH="/Users/yourname/Documents/Obsidian Vault"
> ```
> 
> 设置环境变量后，**无需修改任何脚本中的路径**。
> 
> ### 步骤2：创建配置文件
> 
> 复制 `config.example.yaml` 并修改：
> 
> ```bash
> cp config.example.yaml config.yaml
> ```
> 
> 编辑 `config.yaml`，根据你的研究兴趣修改关键词：
> 
> ```yaml
> vault_path: "/path/to/your/obsidian/vault"
> 
> research_domains:
>   "你的研究领域1":
>     keywords:
>       - "keyword1"
>       - "keyword2"
>     arxiv_categories:
>       - "cs.AI"
>       - "cs.LG"
> ```
> 
> 然后将修改后的 `config.yaml` 复制到 Vault 中：
> ```bash
> cp config.yaml "$OBSIDIAN_VAULT_PATH/99_System/Config/research_interests.yaml"
> ```
> 
> ### 步骤3（可选）：通过 CLI 参数覆盖路径
> 
> 如果不想设置环境变量，也可以在每次调用脚本时通过参数指定路径：
> 
> ```bash
> python scripts/search_arxiv.py --config "/your/path/research_interests.yaml"
> python scripts/scan_existing_notes.py --vault "/your/obsidian/vault"
> python scripts/generate_note.py --vault "/your/obsidian/vault" --paper-id "2402.12345" --title "Paper Title" --authors "Author" --domain "大模型"
> python scripts/update_graph.py --vault "/your/obsidian/vault" --paper-id "2402.12345" --title "Paper Title" --domain "大模型"
> ```
> 
> ### 路径格式说明
> 
> - **Windows**：可以使用正斜杠 `/` 或双反斜杠 `\\`
>   - 正确：`C:/Users/Name/Documents/Vault`
>   - 正确：`C:\\Users\\Name\\Documents\\Vault`
>   - 错误：`C:\Users\Name\Documents\Vault`（单反斜杠在 Python 字符串中需要转义）
> 
> - **macOS/Linux**：使用正斜杠 `/`
>   - 正确：`/Users/name/Documents/Vault`
> 
> ### Obsidian 目录结构要求
> 
> 你的 Obsidian Vault 需要包含以下目录结构：
> 
> ```
> 你的Vault/
> ├── 10_Daily/                    # 每日推荐笔记（自动创建）
> │   └── YYYY-MM-DD论文推荐.md
> ├── 20_Research/
> │   └── Papers/                  # 论文详细笔记目录
> │       ├── 大模型/
> │       │   └── 论文标题.md
> │       │       └── images/      # 论文图片
> │       ├── 多模态技术/
> │       └── 智能体/
> └── 99_System/
>     └── Config/
>         └── research_interests.yaml  # 研究兴趣配置（复制 config.yaml 到这里）
> ```
> 
> ## 使用方法
> 
> ### 开始每天的论文推荐
> 
> 在你的 Obsidian Vault 目录下打开终端，输入：
> 
> ```bash
> start my day
> ```
> 
> 这会：
> 1. 搜索最近一个月和过去一年的高质量论文
> 2. 根据你的研究兴趣筛选和评分
> 3. 生成今日推荐笔记（保存到 `10_Daily/` 目录）
> 4. 对前三篇论文自动生成详细分析
> 5. 提取论文图片并插入笔记
> 6. 自动链接关键词到已有笔记
> 
> ### 分析单篇论文
> 
> 如果你想深入阅读某篇论文：
> 
> ```

## 延伸閱讀

相關概念：[[自動化]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[arxiv-sanity-preserver--arxiv-sanity-preserver|arxiv-sanity-preserver/arxiv-sanity-preserver]] · [[paperpile--paperpile|paperpile/paperpile]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[duoan--TorchCode|duoan/TorchCode]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[tanweai--pua|tanweai/pua]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

[GitHub](https://github.com/juliye2025/evil-read-arxiv)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "juliye2025--evil-read-arxiv"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "juliye2025--evil-read-arxiv"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
