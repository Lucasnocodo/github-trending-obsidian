---
repo: juliye2025/evil-read-arxiv
url: https://github.com/juliye2025/evil-read-arxiv
owner: juliye2025
owner_type: User
language: Python
license: N/A
description: "Claude Code+Obsidian，邪修读论文就是快"
homepage: ""
stars: 274
stars_per_day: 39
forks: 37
open_issues: 7
created: 2026-03-03
first_seen: 2026-03-10
week: "2026-W11"
category: "資料科學"
release_tag: ""
status: to-review
tags:
  - github
  - 資料科學
  - python
---

# evil-read-arxiv

**274** stars · **39** stars/天 · 建立 7 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 自動化研究論文的搜索和分析，讓讀者更快獲得有價值的資訊。

## 專案簡介

這個工具通過調用 arXiv 和 Semantic Scholar API，自動為用戶推薦高質量的研究論文，並生成詳細的分析筆記。它使用 Python 實現，並整合了多個功能以提升研究效率。與傳統的手動搜尋和筆記方式相比，這個工具能夠節省大量時間，並提供更系統化的資料整理。對於研究人員來說，這是一個非常實用的工具，值得一試。

## 重點功能

- 自動化每日論文推薦，節省搜尋時間。
- 生成結構化的筆記，提升資料整理效率。
- 支持從多個來源提取高質量圖片，豐富筆記內容。
- 提供關鍵字搜索功能，方便查找已有筆記。

## 快速開始

安裝依賴：`pip install -r requirements.txt`,將技能複製到 Claude Code 的技能目錄中。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著學術研究的增長，研究人員對於快速獲取和整理資料的需求越來越強烈，這個工具正好滿足了這一需求。作者的背景和對於研究流程的理解使得這個專案具備了實用性。

## 適合誰使用

**目標受眾**：需要高效獲取和整理研究資料的學術研究人員和學生。

> [!example] 使用場景
> - 研究人員 用它來 自動獲取最新的研究論文，因為這樣可以節省搜尋時間。
> - 學生 用它來 整理和分析論文，因為這樣可以提高學習效率。
> - 學術寫作人員 用它來 生成結構化的筆記，因為這樣可以幫助撰寫高質量的論文。

> [!warning] 注意事項
> 需要安裝 Claude Code CLI，並且依賴於外部 API 的穩定性。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | N/A |
| Stars | 274 |
| Forks | 37 |
| Issues | 7 |
| 建立日期 | 2026-03-03 |

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
>    cp -r evil

## 延伸閱讀

相關概念：#自動化文獻管理 · #研究資料整理 · #論文分析

[GitHub](https://github.com/juliye2025/evil-read-arxiv)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，274 stars
