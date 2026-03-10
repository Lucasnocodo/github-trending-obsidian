---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 404
stars_per_day: 58
forks: 51
open_issues: 13
created: 2026-03-03
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v0.1.0-c26fa98"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "自動化小紅書操作，讓用戶輕鬆管理社交媒體內容。"
---

# xiaohongshu-skills

**404** stars · **58** stars/天 · 建立 7 天前 · Python · MIT

`ORG` `v0.1.0-c26fa98`

> [!summary] 一句話摘要
> 自動化小紅書操作，讓用戶輕鬆管理社交媒體內容。

> [!abstract] 核心創新
> 支持自然語言下達複合指令，讓用戶能夠輕鬆管理小紅書內容。

## 專案簡介

這個專案提供了一套基於 Python 的自動化技能，專為小紅書平台設計，能夠實現內容發布、社交互動等功能。它依賴於 CDP 瀏覽器自動化引擎，並支持與 OpenClaw 及其他兼容的 AI Agent 平台整合。與其他社交媒體自動化工具相比，這個專案的特點在於其連貫操作能力，使用者可以用自然語言下達複合指令，Agent 會自動執行多個任務。這使得用戶在管理社交媒體時的效率大幅提升。雖然它在功能上相當全面，但仍然需要依賴 Google Chrome 瀏覽器，這對於某些用戶來說可能是個限制。總體而言，這是一個功能強大且易於使用的工具，適合需要自動化社交媒體操作的用戶。

**技術棧**：`Python` · `CDP` · `OpenClaw`

## 重點功能

- 支持多帳號切換和登錄檢查。
- 提供內容發布、定時發布和分步預覽功能。
- 支持關鍵字搜索和筆記詳情查看。
- 實現社交互動，包括評論、回覆和收藏。
- 支持自然語言下達複合指令，提升操作效率。

## 快速開始

1. 下載 ZIP 並解壓到 skills 目錄
```bash
無
```
2. 安裝 Python 依賴
```bash
cd xiaohongshu-skills && uv sync
```
3. 啟動 Chrome 瀏覽器
```bash
python scripts/chrome_launcher.py
```
4. 檢查登錄狀態
```bash
python scripts/cli.py check-login
```
5. 搜索筆記
```bash
python scripts/cli.py search-feeds --keyword '關鍵字'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的開發者來自於開源社群，專注於自動化工具的開發。隨著小紅書的流行，對於自動化管理社交媒體內容的需求日益增加，這個專案正好滿足了這一需求，並提供了直觀的自然語言操作方式，讓更多用戶能夠輕鬆上手。

## 適合誰使用

**目標受眾**：需要自動化管理小紅書內容的社交媒體經營者和內容創作者。

> [!example] 使用場景
> - 社交媒體經營者 用它來 自動發布小紅書內容，因為可以節省大量時間和精力。
> - 數據分析師 用它來 獲取小紅書上的熱門內容數據，因為可以快速分析競品動態。
> - 內容創作者 用它來 管理多個小紅書帳號，因為可以輕鬆切換並發布內容。

## 架構分析

該專案基於 Python 開發，使用 CDP 瀏覽器自動化引擎，數據流從用戶指令 → Agent 處理 → 執行相應操作 → 返回結果。

## 優缺點分析

> [!success] 優點
> - 功能全面，支持多種社交媒體操作。
> - 自然語言操作簡化了使用流程。
> - 支持多帳號管理，適合經營者使用。

> [!danger] 缺點
> - 需要依賴 Google Chrome 瀏覽器。
> - 對於新手來說，Python 環境配置可能有挑戰。
> - 僅限於小紅書平台，無法擴展到其他社交媒體。

> [!warning] 注意事項
> - 需要 Google Chrome 瀏覽器作為前提條件。
> - 僅支持小紅書平台，對其他社交媒體無法使用。
> - 需要 Python 環境配置，對新手可能有一定門檻。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Selenium | Selenium 是一個通用的瀏覽器自動化工具，但需要更多的配置和代碼編寫。 |
| Zapier | Zapier 提供更廣泛的自動化集成，但不專注於小紅書。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 51 |
| Open Issues | 13 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 269 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Angiin](https://github.com/Angiin) | 32 |
> | [@xpzouying](https://github.com/xpzouying) | 10 |
> | [@cu1ch3n](https://github.com/cu1ch3n) | 1 |

**最新版本**：v0.1.0-c26fa98 (2026-03-09)

## README 摘錄

> [!info]- 展開查看原文 README
> # xiaohongshu-skills
> 
> 小红书自动化 Skills，基于 Python CDP 浏览器自动化引擎。
> 
> 支持 [OpenClaw](https://github.com/anthropics/openclaw) 及所有兼容 `SKILL.md` 格式的 AI Agent 平台（如 Claude Code）。
> 
> ## 功能概览
> 
> | 技能 | 说明 | 核心能力 |
> |------|------|----------|
> | **xhs-auth** | 认证管理 | 登录检查、扫码登录、多账号切换 |
> | **xhs-publish** | 内容发布 | 图文 / 视频 / 长文发布、定时发布、分步预览 |
> | **xhs-explore** | 内容发现 | 关键词搜索、笔记详情、用户主页、首页推荐 |
> | **xhs-interact** | 社交互动 | 评论、回复、点赞、收藏 |
> | **xhs-content-ops** | 复合运营 | 竞品分析、热点追踪、批量互动、内容创作 |
> 
> 支持**连贯操作** — 你可以用自然语言下达复合指令，Agent 会自动串联多个技能完成任务。例如：
> 
> > "搜索刺客信条最火的图文帖子，收藏它，然后告诉我讲了什么"
> 
> Agent 会自动执行：搜索 → 筛选图文 → 按点赞排序 → 收藏 → 获取详情 → 总结内容。
> 
> ## 安装
> 
> ### 前置条件
> 
> - Python >= 3.11
> - [uv](https://docs.astral.sh/uv/) 包管理器
> - Google Chrome 浏览器
> 
> ### 方法一：下载 ZIP 安装（推荐）
> 
> 最简单稳妥的方式，适用于 OpenClaw 及所有支持 `SKILL.md` 的 Agent 平台。
> 
> 1. 在 GitHub 仓库页面点击 **Code → Download ZIP**，下载项目压缩包。
> 2. 解压到你的 Agent 的 skills 目录下：
> 
> ```
> # OpenClaw 示例
> /skills/xiaohongshu-skills/
> 
> # Claude Code 示例
> /.claude/skills/xiaohongshu-skills/
> ```
> 
> 3. 安装 Python 依赖：
> 
> ```bash
> cd xiaohongshu-skills
> uv sync
> ```
> 
> 安装完成后，Agent 会自动识别 `SKILL.md` 并加载小红书技能。
> 
> ### 方法二：Git Clone
> 
> ```bash
> # 进入 skills 目录
> cd /skills/
> 
> # 克隆项目
> git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
> cd xiaohongshu-skills
> 
> # 安装依赖
> uv sync
> ```
> 
> > 其他支持 SKILL.md 格式的 Agent 框架安装方式类似 — 将本项目放入其 skills 目录即可。
> 
> ## 使用方式
> 
> ### 作为 AI Agent 技能使用（推荐）
> 
> 安装到 skills 目录后，直接用自然语言与 Agent 对话即可。Agent 会根据你的意图自动路由到对应技能。
> 
> **认证登录：**
> > "登录小红书" / "检查登录状态"
> 
> **搜索浏览：**
> > "搜索关于露营的笔记" / "查看这条笔记的详情"
> 
> **发布内容：**
> > "帮我发一条图文笔记，标题是…，配图是…"
> 
> **社交互动：**
> > "给这条笔记点赞" / "收藏这条帖子" / "评论：写得太好了"
> 
> **复合操作：**
> > "搜索竞品账号最近的爆款笔记，分析他们的选题方向"
> 
> ### 作为 CLI 工具使用
> 
> 所有功能也可以通过命令行直接调用，输出 JSON 格式，便于脚本集成。
> 
> #### 1. 启动 Chrome
> 
> ```bash
> # 有窗口模式（首次登录必须）
> python scripts/chrome_launcher.py
> 
> # 无头模式
> python scripts/chrome_launcher.py --headless
> ```
> 
> #### 2. 登录
> 
> ```bash
> # 检查登录状态（已登录时返回用户昵称和小红书号）
> python scripts/cli.py check-login
> 
> # 扫码登录
> python scripts/cli.py login
> ```
> 
> #### 3. 搜索笔记
> 
> ```bash
> python scripts/cli.py search-feeds --keyword "关键词"
> 
> # 带筛选条件
> python scripts/cli.py search-feeds \
>   --keyword "关键词" \
>   --sort-by "最多点赞" \
>   --note-type "图文"
> ```
> 
> #### 4. 查看笔记详情
> 
> ```bash
> python scripts/cli.py get-feed-detail \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> #### 5. 发布内容
> 
> ```bash
> # 图文发布（分步：填写 → 预览 → 确认发布）
> python scripts/cli.py fill-publish \
>   --title-file title.txt \
>   --content-file content.txt \
>   --images "/abs/path/pic1.jpg" "/abs/path/pic2.jpg"
> 
> # 用户在浏览器中预览确认后
> python scripts/cli.py click-publish
> 
> # 或保存为草稿
> python scripts/cli.py save-draft
> 
> # 视频发布
> python scripts/cli.py 

## 延伸閱讀

相關概念：[[社交媒體自動化]] · [[自然語言處理]] · [[Python 自動化]]

[GitHub](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
