---
repo: autoclaw-cc/xiaohongshu-skills
url: https://github.com/autoclaw-cc/xiaohongshu-skills
owner: autoclaw-cc
owner_type: Organization
language: Python
license: MIT
description: "xiaohongshu-skills"
homepage: ""
stars: 412
stars_per_day: 59
forks: 52
open_issues: 13
created: 2026-03-03
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.0-c26fa98"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你用自然語言自動化操作小紅書，從內容發布到社交互動，一應俱全。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "xiaohongshu-skills"
  - "autoclaw-cc/xiaohongshu-skills"
  - "讓你用自然語言自動化操作小紅書，從內容發布到社交互動，一應俱全。"
---

# xiaohongshu-skills

**412** stars · **59** stars/天 · 建立 7 天前 · Python · MIT

`ORG` `v0.1.0-c26fa98`

> [!summary] 一句話摘要
> 讓你用自然語言自動化操作小紅書，從內容發布到社交互動，一應俱全。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (59 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在小紅書上自動化內容管理的社交媒體經理或內容創作者。
> **一句話重點** 這個專案讓小紅書的操作變得像聊天一樣簡單，真正實現了自動化的便利性。

> [!abstract] 核心創新
> 支持用自然語言進行複合操作，讓小紅書的自動化管理變得更加直觀。

## 專案簡介

這個專案利用 Python 的 CDP 瀏覽器自動化引擎，讓使用者能夠透過自然語言與 AI Agent 互動，執行小紅書的各種操作。用戶可以進行認證管理、內容發布、社交互動等，並且支持複合指令，像是「搜索刺客信條最火的圖文帖子，收藏它，然後告訴我講了什麼」，Agent 會自動串聯多個技能完成任務。技術上，它依賴於 Chrome 瀏覽器的自動化功能，並且能夠與 OpenClaw 及其他兼容 SKILL.md 的平台整合。與其他自動化工具相比，這個專案的獨特之處在於其自然語言處理能力，能夠讓用戶以更直觀的方式發出指令。實際使用中，這個工具能夠有效提升內容創作和社交互動的效率，但需要安裝 Google Chrome 和 Python 3.11 以上版本。這個專案目前在 alpha 階段，適合對小紅書有需求的開發者和內容創作者使用。對於不熟悉命令行的用戶，建議使用其自然語言交互功能，而對於需要批量處理的用戶則可以考慮 CLI 模式。

**技術棧**：`Python 3.11` · `Chrome CDP`

## 重點功能

- xhs-auth — 支持多帳號切換和掃碼登錄，簡化用戶認證流程。
- xhs-publish — 支持圖文、視頻和長文的發布，並提供定時發布和預覽功能。
- xhs-explore — 透過關鍵字搜索和篩選功能，快速找到相關內容。
- xhs-interact — 支持評論、點讚和收藏等社交互動，提升用戶參與度。
- 連貫操作 — 允許用戶用自然語言發出複合指令，Agent 自動串聯多個技能完成任務。

## 快速開始

1. 下載並解壓專案
```bash
git clone https://github.com/autoclaw-cc/xiaohongshu-skills.git
```
2. 進入專案目錄
```bash
cd xiaohongshu-skills
```
3. 安裝依賴
```bash
uv sync
```

## 程式碼範例

python scripts/cli.py search-feeds --keyword "露營" --sort-by "最多点赞" --note-type "图文"

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 專案的主要貢獻者包括 Angiin 和 xpzouying，他們在自動化和 AI 領域有過去的成功經驗。(b) 這個工具解決了小紅書操作繁瑣的問題，讓用戶能夠通過自然語言進行高效的內容管理。(c) 專案的曝光可能受到社交媒體的討論和推廣影響，特別是在內容創作社群中。(d) 隨著自動化技術的成熟，這種基於自然語言的操作方式變得越來越可行，吸引了開發者的注意。

## 適合誰使用

**目標受眾**：需要在小紅書上自動化內容管理的社交媒體經理或內容創作者。

> [!example] 使用場景
> - 內容創作者用它來自動發布小紅書圖文，因為可以節省手動操作的時間，提升效率。
> - 社交媒體經理用它來批量互動和分析競品內容，因為能夠快速獲取數據，幫助制定策略。
> - 開發者用它來測試小紅書的 API 整合，因為 CLI 模式提供了靈活的自動化測試方案。

## 架構分析

這是一個基於 CLI 的自動化工具，主要由 Python 腳本組成。用戶輸入 → Agent 處理 → 輸出 JSON 格式結果。核心技術決策使用了 Chrome 的 CDP 進行自動化操作，並且專案結構清晰，scripts 目錄下包含了所有自動化相關的功能模組。

## 技術深入分析

> [!note]- 展開深入分析
> 核心的自動化邏輯基於 Chrome 的 CDP，這使得操作更加靈活和強大。效能方面，專案能夠快速響應用戶指令，並且支持多帳號管理，適合需要高頻操作的用戶。設計上，選擇了自然語言處理來提升用戶體驗，這在其他自動化工具中並不常見，讓這個專案在市場上獨樹一幟。

## 優缺點分析

> [!success] 優點
> - 自然語言操作，降低使用門檻。
> - 支持多種內容類型的發布，靈活性高。
> - CLI 模式便於集成到其他自動化流程中。

> [!danger] 缺點
> - 需要安裝特定版本的 Python 和 Chrome。
> - 目前功能仍在開發中，穩定性有待提升。
> - 對於不熟悉命令行的用戶可能不夠友好。

> [!warning] 注意事項
> - 僅支援 Python 3.11 以上版本
> - 需要安裝 Google Chrome 瀏覽器
> - 目前在 alpha 階段，API 可能不穩定

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [autoclaw-cc/openclaw](https://github.com/autoclaw-cc/openclaw) | OpenClaw 提供了類似的自動化功能，但不支持自然語言操作，使用者需要手動輸入指令。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個專案專注於醫療領域的自動化，而小紅書技能則針對社交媒體內容管理。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 52 |
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

相關概念：[[自動化]] · [[自然語言處理]] · [[CLI/TUI]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[duoan--TorchCode|duoan/TorchCode]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，401 stars
