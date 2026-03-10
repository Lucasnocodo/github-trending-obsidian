---
repo: juliye2025/evil-read-arxiv
url: https://github.com/juliye2025/evil-read-arxiv
owner: juliye2025
owner_type: User
language: Python
license: N/A
description: "Claude Code+Obsidian，邪修读论文就是快"
homepage: ""
stars: 277
stars_per_day: 40
forks: 37
open_issues: 7
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "資料科學"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/資料科學"
  - "lang/python"
aliases:
  - "evil-read-arxiv"
  - "juliye2025/evil-read-arxiv"
  - "自動化研究論文的搜索、推薦和分析，提升學術研究效率。"
---

# evil-read-arxiv

**277** stars · **40** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化研究論文的搜索、推薦和分析，提升學術研究效率。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要高效管理學術資料並希望自動化文獻分析的研究者。
> **一句話重點** 這個專案讓學術研究變得更高效，特別是在文獻管理和分析方面。

> [!abstract] 核心創新
> 自動化論文搜索和分析流程，提升學術研究效率。

## 專案簡介

這個專案是一套用於自動化研究論文的搜索、推薦和分析的工具，通過調用 arXiv 和 Semantic Scholar API，每天為使用者推薦高質量的論文並生成詳細的筆記和關係圖譜。它的功能包括每日論文推薦、單篇論文深度分析、圖片提取和已有筆記搜索。使用者可以透過簡單的命令行指令來獲得每日推薦，並且能夠深入分析特定論文，這對於需要快速掌握最新研究動態的學者特別有用。與傳統的手動搜索和整理方式相比，這個工具大幅提升了研究效率，並且能夠自動生成結構化的筆記，讓使用者更容易管理和回顧研究資料。這個專案目前處於穩定階段，適合需要高效管理學術資料的研究者使用。建議在需要快速獲取和分析研究資料時使用，但如果需要更深入的個性化分析，可能需要額外的手動調整。

## 重點功能

- 每日論文推薦 — 自動從 arXiv 和 Semantic Scholar 獲取高質量論文。
- 深度分析功能 — 生成結構化筆記，包含摘要翻譯和要點提煉。
- 圖片提取 — 自動提取論文中的高質量圖片並保存。
- 已有筆記搜索 — 快速在已有筆記中查找相關論文。
- 關鍵詞自動鏈接 — 自動將關鍵詞鏈接到已有筆記。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 克隆專案
```bash
git clone https://github.com/juliye2025/evil-read-arxiv.git
```
3. 配置環境變數
```bash
$env:OBSIDIAN_VAULT_PATH = "C:/Users/YourName/Documents/Obsidian Vault"
```
4. 開始每日推薦
```bash
start my day
```

## 程式碼範例

```bash
paper-analyze 2602.12345
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景為學術研究者，切中許多研究者對於高效管理文獻的需求。這個工具的推出正好滿足了學術界對於自動化和高效能的需求，特別是在資訊爆炸的時代。

## 適合誰使用

**目標受眾**：需要高效管理學術資料並希望自動化文獻分析的研究者。

> [!example] 使用場景
> - 研究生用它來快速獲取每日最新論文，因為自動推薦能夠節省大量搜索時間。
> - 教授用它來分析特定論文，因為深度分析功能能夠幫助他們更好地理解研究背景和方法。
> - 學者用它來整理已有筆記，因為搜索功能能夠快速找到相關資料。

## 優缺點分析

> [!success] 優點
> - 自動化流程，節省大量時間。
> - 生成結構化筆記，便於管理和回顧。
> - 支持多種資料來源，增加資料的豐富性。

> [!danger] 缺點
> - 需要安裝和配置，對新手不太友好。
> - 推薦質量可能不穩定，依賴於外部 API。
> - 對於特定需求可能需要額外的手動調整。

> [!warning] 注意事項
> - 需要安裝 Claude Code CLI，對於不熟悉的使用者有一定學習曲線。
> - 自動推薦的質量依賴於 API 的數據質量，可能不總是準確。
> - 需要手動配置環境變數，對於新手來說可能不太友好。

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

[GitHub](https://github.com/juliye2025/evil-read-arxiv)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "juliye2025--evil-read-arxiv"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
