---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 407
stars_per_day: 58
forks: 51
open_issues: 13
created: 2026-03-03
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "自動化小紅書操作，讓你輕鬆管理內容和社交互動。"
---

# xiaohongshu-skills

**407** stars · **58** stars/天 · 建立 7 天前 · Python · MIT

`ORG` `v0.1.0-c26fa98`

> [!summary] 一句話摘要
> 自動化小紅書操作，讓你輕鬆管理內容和社交互動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (58 stars/day)
> **適合** 需要在小紅書上進行內容管理和社交互動的數位行銷專業人士。
> **一句話重點** 這個專案最厲害的在於它能將複雜的社交媒體操作簡化為自然語言指令，讓非技術用戶也能輕鬆使用。

> [!abstract] 核心創新
> 支持自然語言下達複合指令，Agent 自動串聯多個技能完成任務。

## 專案簡介

這個專案提供了一套基於 Python 的自動化技能，專門用於小紅書平台。用戶可以透過自然語言指令來執行複雜的操作，例如搜索、發布內容和社交互動，Agent 會自動串聯多個技能來完成任務。專案使用了 CDP（Chrome DevTools Protocol）來實現瀏覽器自動化，並支援多種操作，如圖文、視頻和長文的發布。與其他工具相比，它特別適合需要在小紅書上進行多步驟操作的用戶，因為它能夠處理複合指令。使用者需要 Python 3.11 及 Google Chrome 瀏覽器，並且安裝過程相對簡單。這個專案目前處於 v0.1.0 階段，功能雖然完整但仍有進一步優化的空間，適合中小型團隊使用。對於需要頻繁與小紅書互動的用戶來說，這是一個值得考慮的工具，但如果只是偶爾使用，可能會顯得過於複雜。

**技術棧**：`Python 3.11` · `CDP` · `uv`

## 重點功能

- xhs-auth — 支持多帳號切換和掃碼登錄，方便用戶管理多個小紅書賬號。
- xhs-publish — 支持圖文、視頻和長文的發布，並可定時發布和分步預覽。
- xhs-explore — 提供關鍵詞搜索和筆記詳情查看，幫助用戶快速找到感興趣的內容。
- xhs-interact — 支持評論、點讚和收藏等社交互動功能，增強用戶參與感。
- xhs-content-ops — 提供競品分析和熱點追蹤功能，幫助用戶把握市場動向。

## 快速開始

1. 下載專案並解壓
```bash
git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
```
2. 安裝依賴
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
5. 搜索內容
```bash
python scripts/cli.py search-feeds --keyword '露營'
```

## 程式碼範例

python
# 搜索筆記
python scripts/cli.py search-feeds --keyword '露營' --sort-by '最多點讚' --note-type '圖文'

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案由一群活躍的開發者維護，且針對小紅書這個特定平台的需求進行了深度挖掘。隨著小紅書用戶基數的增長，對於自動化工具的需求也隨之上升。這個專案的推出正好切中這個需求，並且提供了易於使用的接口。

## 適合誰使用

**目標受眾**：需要在小紅書上進行內容管理和社交互動的數位行銷專業人士。

> [!example] 使用場景
> - 社交媒體經營者用它來自動發布小紅書內容，因為可以節省大量手動操作時間，並且能夠定時發布。
> - 數據分析師用它來批量收集小紅書上熱門內容的數據，因為可以快速獲取競品分析和熱門話題。
> - 內容創作者用它來自動化社交互動，如評論和點讚，因為這樣可以提高曝光率並增加粉絲互動。

## 架構分析

這是一個基於 CLI 的工具，使用單體架構設計。用戶輸入 → Agent 處理 → 輸出 JSON 格式結果。核心技術決策是使用 Chrome DevTools Protocol 進行自動化，專案目錄結構清晰，主要功能集中在 scripts/ 目錄下。

## 優缺點分析

> [!success] 優點
> - 支持自然語言指令，簡化用戶操作流程。
> - 功能全面，涵蓋內容發布、社交互動和數據分析。
> - 安裝簡單，適合快速上手的用戶。

> [!danger] 缺點
> - 目前僅限於小紅書平台，無法擴展到其他社交媒體。
> - 需要安裝 Google Chrome，增加了環境配置的複雜性。
> - 功能仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 3.11 及以上版本。
> - 需要 Google Chrome 瀏覽器以進行自動化操作。
> - 目前僅支援小紅書平台，無法直接應用於其他社交媒體。
> - 功能仍在持續開發中，可能存在不穩定情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[autoclaw-cc--openclaw\|autoclaw-cc/openclaw]] | OpenClaw 提供了更廣泛的自動化能力，但不專注於小紅書，適合需要多平台支持的用戶。 |
| [[scrapy--scrapy\|scrapy/scrapy]] | Scrapy 是一個通用的爬蟲框架，適合數據抓取，但不具備小紅書特定的社交互動功能。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新和維護。
**連結**：[文件](https://github.com/autoclaw-cc/xiaohongshu-skills#readme)

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
> python scripts/cli.py publish-video \
>   --title-file title.txt \
>   --content-file content.txt \
>   --video "/abs/path/video.mp4"
> 
> # 长文发布
> python scripts/cli.py long-article \
>   --title-file title.txt \
>   --content-file content.txt
> ```
> 
> #### 6. 社交互动
> 
> ```bash
> # 评论
> python scripts/cli.py post-comment \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN \
>   --content "评论内容"
> 
> # 点赞
> python scripts/cli.py like-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> 
> # 收藏
> python scripts/cli.py favorite-feed \
>   --feed-id FEED_ID --xsec-token XSEC_TOKEN
> ```
> 
> ## CLI 命令参考
> 
> 全局选项：
> - `--host HOST` — Chrome 调试主机（默认 127.0.0.1）
> - `--port PORT` — Chrome 调试端口（默认 9222）
> - `--account NAME` — 指定账号
> 
> | 子命令 | 说明 |
> |--------|------|
> | `check-login` | 检查登录状态，返回用户昵称和小红书号 |
> | `login` | 获取登录二维码，等待扫码，登录后返回用户信息 |
> | `delete-cookies` | 清除 cookies（退出/切换账号） |
> | `list-feeds` | 获取首页推荐 Feed |
> | `search-feeds` | 关键词搜索笔记（支持排序/类型/时间/范围/位置筛选） |
> | `get-feed-detail` | 获取笔记完整内容和评论 |
> | `user-profile` | 获取用户主页信息和帖子列表 |
> | `post-comment` | 对笔记发表评论 |
> | `reply-comment` | 回复指定评论 |
> | `like-feed` | 点赞 / 取消点赞 |
> | `favorite-feed` | 收藏 / 取消收藏 |
> | `publish` | 一步发布图文 |
> | `publish-video` | 一步发布视频 |
> | `fill-publish` | 填写图文表单（不发布，供预览） |
> | `fill-publish-video` | 填写视频表单（不发布，供预览） |
> | `click-publish` | 确认发布（点击发布按钮） |
> | `save-draft` | 保存为草稿 |
> | `long-article` | 长文模式：填写 + 一键排版 |
> | `select-template` | 选择长文排版模板 |
> | `next-step` | 长文下一步 + 填写描述 |
> 
> 退出码：`0` 成功 · `1` 未登录 · `2` 错误
> 
> ## 项目结构
> 
> ```
> xiaohongshu-skills/
> ├── scripts/                        # Python CDP 自动化引擎
> │   ├── xhs/          

## 延伸閱讀

相關概念：[[自動化測試]] · [[爬蟲]] · [[API 設計]]

相關專案：[[autoclaw-cc--openclaw|autoclaw-cc/openclaw]] · [[scrapy--scrapy|scrapy/scrapy]]

[GitHub](https://github.com/autoclaw-cc/xiaohongshu-skills)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "autoclaw-cc--xiaohongshu-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "autoclaw-cc--xiaohongshu-skills"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
