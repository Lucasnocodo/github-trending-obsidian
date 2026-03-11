---
repo: juliye2025/evil-read-arxiv
url: https://github.com/juliye2025/evil-read-arxiv
owner: juliye2025
owner_type: User
language: Python
license: N/A
description: "Claude Code+Obsidian，邪修读论文就是快"
homepage: ""
stars: 279
stars_per_day: 40
forks: 37
open_issues: 7
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "文獻管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆獲取高質量文獻。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "evil-read-arxiv"
  - "juliye2025/evil-read-arxiv"
  - "自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆獲取高質量文獻。"
---

# evil-read-arxiv

**279** stars · **40** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化研究論文的搜索、推薦、分析和整理，讓你輕鬆獲取高質量文獻。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要自動化管理和分析研究文獻的學術研究人員。
> **一句話重點** 這個專案不僅能自動獲取文獻，還能生成結構化的分析筆記，極大提高研究效率。

> [!abstract] 核心創新
> 這個專案最核心的創新點是將論文推薦和深度分析自動化，並生成結構化的筆記。

## 專案簡介

這個專案提供了一套完整的工作流，讓用戶能夠自動化處理研究論文。用戶只需設定好研究興趣，系統便會從 arXiv 和 Semantic Scholar API 中每日推薦最新的高質量論文，並生成詳細的分析筆記。具體來說，系統會根據相關性、新近性、熱門度和質量四個維度對論文進行綜合評分，並自動生成今日推薦列表和詳細分析，包含摘要翻譯、研究背景、方法概述、實驗結果等。技術上，這個專案使用 Python 3.8+，並依賴於多個庫來實現功能，並且能夠從 PDF 中提取高質量的圖片。與其他類似工具相比，這個專案不僅提供論文推薦，還能生成結構化的筆記和知識圖譜，這在學術研究中是相當有價值的。使用者可以輕鬆搜尋已有的筆記，支持按標題、作者、關鍵詞等進行查詢。這個工具適合需要經常閱讀和整理大量文獻的研究者，並且能夠處理相對大規模的資料集。整體來說，這是一個成熟的專案，值得現在就使用，特別適合學術團隊和研究人員。對於需要快速獲取文獻和進行深入分析的情境，這個工具非常合適，而對於偶爾閱讀論文的個人用戶，可能會覺得功能過於繁瑣。

**技術棧**：`Python 3.8+` · `Claude Code`

## 重點功能

- 每日論文推薦 — 自動從 arXiv 和 Semantic Scholar 獲取最新高質量論文，並生成推薦列表。
- 論文深度分析 — 生成結構化筆記，包含摘要翻譯、研究背景、方法概述等。
- 圖片提取功能 — 自動從論文中提取高質量圖片，並保存至指定目錄。
- 筆記搜尋 — 支持按標題、作者、關鍵詞等進行搜尋，並根據相關性排序。
- 知識圖譜更新 — 自動更新與論文相關的知識圖譜，幫助用戶理解研究脈絡。

## 快速開始

1. 克隆專案到 Claude Code skills 目錄
```bash
cp -r evil-read-arxiv/start-my-day ~/.claude/skills/
```
2. 設置環境變量
```bash
export OBSIDIAN_VAULT_PATH="/Users/yourname/Documents/Obsidian Vault"
```
3. 重啟 Claude Code CLI
```bash
重新啟動命令行介面
```

## 程式碼範例

start my day
# 這會自動生成今日的論文推薦和分析筆記。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 juliye2025 之前有其他相關專案的經驗，這使得他能夠針對學術界的需求設計出這個工具。這個工具解決了學術研究中繁瑣的文獻搜尋和整理問題，之前缺乏一個集成化的解決方案。最近在 Twitter 上有關於自動化文獻管理的討論引起了關注，讓這個專案獲得了更多的曝光。隨著研究者對於高效文獻管理需求的增加，這個工具的實用性得到了強化。

## 適合誰使用

**目標受眾**：需要自動化管理和分析研究文獻的學術研究人員。

> [!example] 使用場景
> - 研究人員用它來自動獲取每日最新的研究論文，因為手動搜尋文獻耗時且容易錯過重要資料。
> - 學術助理用它來生成結構化的論文分析筆記，因為這樣可以節省大量的手動整理時間，並提高工作效率。
> - 博士生用它來快速查找和比較相關文獻，因為這能幫助他們在撰寫論文時更有效地引用和整合資料。

## 架構分析

這是一個基於 CLI 的工具，主要由多個技能組成。用戶輸入 → 系統自動搜尋和分析論文 → 輸出推薦和分析筆記。核心技術決策包括使用 arXiv 和 Semantic Scholar API 進行資料獲取，並生成結構化的筆記。專案目錄結構清晰，包含多個子目錄來管理不同的功能模組。

## 技術深入分析

這個專案的核心技術機制是利用 arXiv 和 Semantic Scholar API 自動獲取和分析論文。它使用 Python 進行資料處理和分析，並依賴於多個庫來實現功能。專案能夠處理大量的論文資料，並生成結構化的筆記，這對於學術研究者來說是非常有價值的。設計上，選擇 Python 是因為其在資料科學和自動化領域的廣泛應用，這使得開發和維護變得相對容易。然而，這樣的設計也可能在處理極大規模資料時出現性能瓶頸，特別是在 API 限制的情況下。整體來說，這個專案在學術界的應用潛力巨大，但也需要注意外部依賴的穩定性和性能問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指南。安裝過程相對順暢，但需要用戶具備一定的命令行操作能力。文件中有快速開始指南，幫助新手快速上手。整體來說，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省時間和精力。
> - 提供詳細的論文分析，幫助用戶深入理解研究內容。
> - 支持知識圖譜更新，便於管理和查找相關文獻。

> [!danger] 缺點
> - 需要一定的技術背景來進行安裝和配置。
> - 對於小規模的文獻管理可能顯得功能過於複雜。
> - 依賴於外部 API，可能會受到服務可用性的影響。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要安裝 Claude Code CLI 並進行配置。
> - 對於不熟悉命令行的用戶，可能需要一些學習成本。

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

相關概念：[[自動化]] · [[文獻管理]] · [[知識圖譜]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[arxiv-sanity-preserver--arxiv-sanity-preserver|arxiv-sanity-preserver/arxiv-sanity-preserver]] · [[paperpile--paperpile|paperpile/paperpile]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[duoan--TorchCode|duoan/TorchCode]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]]

[GitHub](https://github.com/juliye2025/evil-read-arxiv)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "juliye2025--evil-read-arxiv"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
