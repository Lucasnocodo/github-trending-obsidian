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
  - 開發工具
  - python
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "自動化操作小紅書，讓 AI 代理人幫你搜尋、發佈和互動。"
---

# xiaohongshu-skills

**404** stars · **58** stars/天 · 建立 7 天前 · Python · MIT

`ORG` `v0.1.0-c26fa98`

> [!summary] 一句話摘要
> 自動化操作小紅書，讓 AI 代理人幫你搜尋、發佈和互動。

> [!abstract] 核心創新
> 支持連貫操作，能夠用自然語言下達複合指令，讓 AI 自動串聯多個技能完成任務。

## 專案簡介

這個專案讓用戶能夠透過自然語言指令，讓 AI 代理人自動執行小紅書上的各種操作，如搜尋、發佈和社交互動。它基於 Python 的 CDP 瀏覽器自動化引擎，並且支援多種技能模組，如內容發佈和社交互動。與其他工具相比，它的獨特之處在於能夠進行連貫操作，使用者可以一次性下達複雜指令，AI 會自動串聯多個技能完成任務。實際使用中，這能大幅提升操作效率，但需要用戶具備一定的 Python 環境設置能力。整體來說，這個專案對於經常使用小紅書的內容創作者和社交媒體經營者來說，無疑是一個值得嘗試的工具。

**技術棧**：`Python` · `CDP`

## 重點功能

- 支持多帳號切換和登入檢查。
- 提供圖文、視頻和長文的發佈功能。
- 具備關鍵字搜索和筆記詳情查看的能力。
- 支持社交互動，如評論、點讚和收藏。
- 能夠進行複合操作，讓使用者一次下達多個指令。

## 快速開始

1. 下載 ZIP 並解壓到 skills 目錄
```bash
無
```
2. 安裝 Python 依賴
```bash
cd xiaohongshu-skills && uv sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由一群熱愛自動化的開發者創建，切中小紅書用戶對於效率的需求。隨著社交媒體內容的增長，使用者對於自動化工具的需求也在上升，特別是在內容創作和互動方面。這個專案的推出正好滿足了這一點，並且其開源特性讓更多開發者能夠參與進來。

## 適合誰使用

**目標受眾**：小紅書的內容創作者和社交媒體經營者。

> [!example] 使用場景
> - 內容創作者 用它來 自動發佈圖文，因為這樣可以節省時間並提高效率。
> - 社交媒體經營者 用它來 進行競品分析，因為這能幫助他們快速掌握市場動態。
> - 普通用戶 用它來 搜尋熱門筆記，因為這樣可以更輕鬆地找到感興趣的內容。

## 架構分析

專案採用前後端分離的架構，前端透過自然語言處理與用戶互動，後端則使用 Python 進行瀏覽器自動化操作。資料流是 用戶指令 → AI 代理人 → 自動化操作 → 小紅書平台。

## 優缺點分析

> [!success] 優點
> - 能夠大幅提升小紅書操作效率。
> - 支持多種複雜操作，靈活性高。
> - 開源社群活躍，易於擴展功能。

> [!danger] 缺點
> - 需要一定的技術背景來設置環境。
> - 對於新手用戶可能有學習曲線。
> - 依賴於小紅書的 API 穩定性。

> [!warning] 注意事項
> - 需要 Python 3.11 以上版本。
> - 需要安裝 Google Chrome 瀏覽器。
> - 僅支援 OpenClaw 和兼容 SKILL.md 格式的 Agent 平台。

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

相關概念：[[Python 自動化]] · [[社交媒體管理]] · [[自然語言處理]]

[GitHub](https://github.com/autoclaw-cc/xiaohongshu-skills)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
