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
use_case: "自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆掌握最新研究動態。"
priority: medium
tags:
  - github
  - "category/資料科學"
  - "lang/python"
aliases:
  - "evil-read-arxiv"
  - "juliye2025/evil-read-arxiv"
  - "自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆掌握最新研究動態。"
---

# evil-read-arxiv

**277** stars · **40** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆掌握最新研究動態。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要自動化文獻管理和分析的學術研究人員和團隊。
> **一句話重點** 這個專案的強大之處在於它將論文推薦和深度分析自動化，讓研究者能更高效地掌握最新的學術動態。

> [!abstract] 核心創新
> 這個專案通過自動化工具整合了論文推薦和深度分析，提升了學術研究的效率。

## 專案簡介

這個專案提供了一套完整的工作流，幫助研究人員自動化論文的搜索和分析。它透過調用 arXiv 和 Semantic Scholar API，每天為用戶推薦高質量的論文，並生成詳細的筆記和關係圖譜。使用者可以透過 `start my day` 指令來獲取每日推薦，系統會根據相關性、新近性、熱門度和質量四個維度進行綜合評分。與其他工具相比，這個專案不僅提供推薦，還能深入分析單篇論文，並自動生成結構化的筆記，包括摘要翻譯、研究背景、方法概述等。使用者需要安裝 Claude Code CLI 和 Python 3.8+，並配置環境變數以便於使用。這個工具對於需要持續追蹤最新研究的學術團隊特別有用，能有效提高文獻回顧的效率。該專案目前處於 beta 階段，適合中小型研究團隊使用。對於不熟悉命令行的用戶，可能需要一些時間來適應配置流程。

**技術棧**：`Python 3.8+` · `Claude Code`

## 重點功能

- 每日論文推薦 — 自動從 arXiv 和 Semantic Scholar 獲取最新論文，並生成推薦列表。
- 深度論文分析 — 生成包含摘要翻譯、研究背景、方法概述等的結構化筆記。
- 圖片提取功能 — 自動從論文中提取高質量圖片，並保存到指定目錄。
- 筆記搜索功能 — 支持按標題、作者、關鍵詞等進行搜索，並根據相關性排序。
- 環境變數配置 — 透過環境變數簡化配置過程，提升使用便利性。

## 快速開始

1. 克隆專案到 Claude Code skills 目錄
```bash
git clone https://github.com/juliye2025/evil-read-arxiv.git
```
2. 安裝依賴庫
```bash
pip install -r requirements.txt
```
3. 設置環境變數
```bash
export OBSIDIAN_VAULT_PATH='/path/to/your/obsidian/vault'
```
4. 啟動每日推薦
```bash
start my day
```

## 程式碼範例

start my day
# 這會自動生成今日推薦筆記並分析前三篇論文。

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案作者擁有豐富的研究背景，針對學術界對於文獻管理的需求進行了深入分析。隨著研究人員對於自動化工具的需求增加，這個專案能有效解決繁瑣的文獻整理問題。近期學術界對於高效能文獻管理工具的需求上升，使得這個專案在短時間內迅速受到關注。

## 適合誰使用

**目標受眾**：需要自動化文獻管理和分析的學術研究人員和團隊。

> [!example] 使用場景
> - 研究生用它來每天自動獲取最新的論文推薦，因為這樣可以節省大量手動搜索的時間，專注於研究。
> - 學術作者用它來深入分析某篇論文，因為自動生成的結構化筆記能幫助他們快速理解研究背景和方法。
> - 學術團隊用它來整理和管理已有的研究筆記，因為強大的搜索功能能快速找到相關文獻，提升團隊的協作效率。

## 架構分析

這是一個基於 CLI 的工具，核心架構為單體應用。用戶輸入 → 論文搜索和分析 → 輸出推薦和筆記。關鍵技術決策包括使用 API 進行論文檢索和分析，並自動生成結構化筆記。專案目錄結構清晰，包含多個技能模組，方便擴展和維護。

## 技術深入分析

> [!note]- 展開深入分析
> 該專案的核心演算法依賴於 arXiv 和 Semantic Scholar 的 API，通過綜合評分機制來推薦論文。效能方面，系統能在幾秒內完成每日推薦，並生成結構化筆記。設計上，選擇使用 CLI 方式使得工具更靈活，但也增加了使用門檻。與其他文獻管理工具相比，evil-read-arxiv 更加專注於自動化和分析，能有效減少研究人員的手動工作量。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能顯著提高文獻管理效率。
> - 提供深入的論文分析，幫助用戶快速理解研究內容。
> - 支持多種搜索方式，方便用戶查找相關文獻。
> - 與 Obsidian 整合良好，適合使用該筆記工具的研究人員。

> [!danger] 缺點
> - 需要一定的技術背景來配置和使用。
> - 目前僅支持特定的論文來源，限制了其應用範圍。
> - 對於不熟悉命令行的用戶來說，使用上可能有一定的障礙。
> - 尚處於 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝 Claude Code CLI，對新手可能有一定的學習曲線。
> - 目前僅支持 arXiv 和 Semantic Scholar 的論文來源，無法擴展到其他資料庫。
> - 需要手動配置環境變數，對於不熟悉命令行的用戶來說可能不太友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[arxiv-sanity-preserver--arxiv-sanity-preserver\|arxiv-sanity-preserver/arxiv-sanity-preserver]] | 這個工具專注於提供個性化的 arXiv 論文推薦，而 evil-read-arxiv 則提供更全面的分析和筆記功能。 |
| [[paperpile--paperpile\|paperpile/paperpile]] | Paperpile 是一個文獻管理工具，主要用於引用和管理文獻，而 evil-read-arxiv 更加專注於自動化的論文分析和推薦。 |

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://github.com/juliye2025/evil-read-arxiv#readme)

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

相關概念：[[自動化測試]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[arxiv-sanity-preserver--arxiv-sanity-preserver|arxiv-sanity-preserver/arxiv-sanity-preserver]] · [[paperpile--paperpile|paperpile/paperpile]] · [[ahmadawais--chartli|ahmadawais/chartli]]

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
