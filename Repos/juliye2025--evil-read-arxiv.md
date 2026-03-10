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
  - "自動化搜尋和分析研究論文，讓你輕鬆獲得每日推薦和深入分析。"
---

# evil-read-arxiv

**277** stars · **40** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化搜尋和分析研究論文，讓你輕鬆獲得每日推薦和深入分析。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要高效管理和分析研究文獻的學術研究者和學生。
> **一句話重點** 這個專案讓文獻管理變得自動化和高效，特別適合需要持續追蹤研究的學者。

> [!abstract] 核心創新
> 這個專案通過自動化的方式，將文獻推薦、分析和整理整合到一個工作流中，顯著提高了研究效率。

## 專案簡介

這個專案透過 Claude Code 技能，自動化研究論文的搜尋、推薦、分析和整理工作流。使用者可以每天獲得來自 arXiv 和 Semantic Scholar 的高質量論文推薦，並自動生成詳細的分析筆記和關係圖譜。技術上，它利用 API 進行資料抓取，並生成結構化的筆記，包括摘要翻譯、研究背景、方法概述等。與其他工具相比，這個專案的獨特之處在於其自動化程度高，能夠根據使用者的研究興趣進行個性化推薦和分析。實際使用中，使用者可以快速獲得每日推薦，並深入分析特定論文，對於需要持續追蹤最新研究的學者來說非常有用。這個專案目前處於 beta 階段，適合中小型研究團隊使用，特別是那些依賴於文獻回顧的研究者。建議在需要高效整理和分析文獻時使用，但若不熟悉 Python 環境配置，可能會遇到一些障礙。

**技術棧**：`Python 3.8+`

## 重點功能

- 每日論文推薦 — 自動從 arXiv 和 Semantic Scholar 獲取最新和熱門論文，並生成推薦列表。
- 深度分析功能 — 生成結構化筆記，包括摘要翻譯、研究背景、方法概述等，幫助深入理解論文。
- 圖片提取 — 自動從論文中提取高質量圖片並保存到指定目錄，方便後續使用。
- 筆記搜索 — 支持按標題、作者、關鍵詞等進行搜索，快速找到相關筆記。
- 自動鏈接關鍵詞 — 將論文中的關鍵詞自動鏈接到已有的筆記，提升知識網絡的連貫性。

## 快速開始

1. 克隆專案到 Claude Code skills 目錄
```bash
git clone https://github.com/juliye2025/evil-read-arxiv.git
```
2. 安裝依賴庫
```bash
pip install -r requirements.txt
```
3. 設置環境變量
```bash
export OBSIDIAN_VAULT_PATH='/path/to/your/obsidian/vault'
```
4. 啟動每日推薦
```bash
start my day
```

## 程式碼範例

```bash
paper-analyze 2602.12345
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者對於自動化文獻管理有深厚的理解，並且這個專案切中了學術界對於高效文獻管理的需求。隨著研究文獻數量的激增，學者們迫切需要這樣的工具來節省時間和提高效率。這個專案的推出正好滿足了這一需求，並且在社群中引起了廣泛的關注。

## 適合誰使用

**目標受眾**：需要高效管理和分析研究文獻的學術研究者和學生。

> [!example] 使用場景
> - 研究生用它來每天自動獲取最新的論文推薦，因為這樣可以節省大量手動搜尋的時間，並且能夠快速掌握研究動態。
> - 學者用它來深入分析特定論文，因為自動生成的結構化筆記能幫助他們更清晰地理解研究內容和背景。
> - 資料科學家用它來整理和管理研究筆記，因為自動化的圖片提取和關鍵詞鏈接功能可以提高筆記的可用性和效率。

## 架構分析

這是一個基於 Claude Code 的技能集合，屬於 CLI 工具架構。用戶輸入 → 論文搜尋與分析 → 自動生成筆記與圖譜。核心技術決策包括使用 API 進行資料抓取，並生成結構化的筆記。專案目錄結構清晰，包含多個技能模組，每個模組負責不同的功能。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省手動搜尋和分析的時間。
> - 生成的結構化筆記幫助使用者快速理解論文內容。
> - 支持多種搜索方式，提升了查找效率。
> - 能夠自動鏈接關鍵詞，增強知識管理。

> [!danger] 缺點
> - 需要一定的環境配置，對新手不友好。
> - 目前僅支持特定的資料來源，限制了使用範圍。
> - 對於大型文獻庫的處理可能會遇到性能瓶頸。
> - 缺乏圖形化界面，所有操作需透過命令行進行。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝 Claude Code CLI 並進行配置。
> - 對於不熟悉命令行操作的用戶，可能會有一定的學習曲線。
> - 目前僅支持 arXiv 和 Semantic Scholar 的資料來源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[arxiv-sanity-preserver--arxiv-sanity-preserver\|arxiv-sanity-preserver/arxiv-sanity-preserver]] | 這個工具專注於提供個性化的 arXiv 論文推薦，但缺乏自動化分析和筆記生成的功能。 |
| [[Zotero--zotero\|Zotero/zotero]] | Zotero 是一個文獻管理工具，雖然支持文獻整理，但不具備自動化推薦和深度分析的能力。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新與討論。
**連結**：[文件](https://github.com/juliye2025/evil-read-arxiv/wiki)

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

相關概念：[[自動化測試]] · [[資料視覺化]] · [[API 設計]] · [[機器學習]]

相關專案：[[arxiv-sanity-preserver--arxiv-sanity-preserver|arxiv-sanity-preserver/arxiv-sanity-preserver]] · [[Zotero--zotero|Zotero/zotero]]

[GitHub](https://github.com/juliye2025/evil-read-arxiv)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "juliye2025--evil-read-arxiv"
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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
