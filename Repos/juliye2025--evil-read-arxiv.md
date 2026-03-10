---
repo: juliye2025/evil-read-arxiv
url: https://github.com/juliye2025/evil-read-arxiv
owner: juliye2025
owner_type: User
language: Python
license: N/A
description: "Claude Code+Obsidian，邪修读论文就是快"
homepage: ""
stars: 275
stars_per_day: 39
forks: 37
open_issues: 7
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "資料科學"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 資料科學
  - python
aliases:
  - "evil-read-arxiv"
  - "juliye2025/evil-read-arxiv"
  - "自動化研究論文的搜索、推薦和分析，提升閱讀效率。"
---

# evil-read-arxiv

**275** stars · **39** stars/天 · 建立 7 天前 · Python · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 自動化研究論文的搜索、推薦和分析，提升閱讀效率。

> [!abstract] 核心創新
> 這個專案能夠自動化論文的搜索、推薦和分析，顯著提升閱讀效率。

## 專案簡介

evil-read-arxiv 是一套自動化的研究論文閱讀工作流，透過調用 arXiv 和 Semantic Scholar API，為用戶推薦高質量的論文並生成詳細的筆記和關係圖譜。它的功能包括每日論文推薦、深度分析單篇論文、提取論文圖片和筆記搜索。與傳統的手動查找和整理論文方式相比，這個工具能顯著提高研究效率，特別適合需要大量閱讀和整理文獻的研究人員。使用者可以根據自己的研究領域和興趣自定義關鍵詞，從而獲得更精準的推薦和分析。

**技術棧**：`Python`

## 重點功能

- 每日論文推薦，基於相關性和熱門度。
- 深度分析單篇論文，生成結構化筆記。
- 自動提取論文圖片並生成索引。
- 支持已有筆記的搜索，提升查找效率。
- 可自定義研究領域和關鍵詞，獲得精準推薦。

## 快速開始

1. 安裝依賴庫
```bash
pip install -r requirements.txt
```
2. 配置環境變量
```bash
export OBSIDIAN_VAULT_PATH='/path/to/your/obsidian/vault'
```
3. 重啟 Claude Code CLI
```bash
重啟命令行介面以應用配置
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 juliye2025 專注於提升研究效率的工具開發，這個專案滿足了對於自動化文獻管理的需求，尤其是在學術界。隨著研究人員對於文獻整理的需求增加，這個工具的推出正好切合了市場需求。

## 適合誰使用

**目標受眾**：對於需要高效閱讀和整理文獻的研究人員和學生。

> [!example] 使用場景
> - 研究人員 用它來 自動獲取最新論文，因為能夠節省查找時間。
> - 學生 用它來 深入分析特定論文，因為提供結構化的筆記和分析。
> - 學術寫作人 用它來 整理文獻資料，因為能夠快速生成關係圖譜。

## 優缺點分析

> [!success] 優點
> - 自動化文獻管理，節省時間。
> - 提供結構化的分析和筆記，易於理解。
> - 支持自定義關鍵詞，獲得精準推薦。

> [!danger] 缺點
> - 需要安裝額外的 CLI 工具。
> - 對於某些領域的推薦可能不夠全面。
> - 功能仍在開發中，可能不夠穩定。

> [!warning] 注意事項
> - 需要安裝 Claude Code CLI。
> - 對於特定領域的推薦可能不夠全面。
> - 某些功能仍在開發中，可能不夠穩定。

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

**社群活躍度**：社群活躍，持續更新中，期待更多用戶反饋。

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
> 然后将修改后的 `config.yaml` 复制到 Va

## 延伸閱讀

相關概念：[[自動化文獻管理]] · [[論文分析]] · [[學術寫作]]

[GitHub](https://github.com/juliye2025/evil-read-arxiv)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
