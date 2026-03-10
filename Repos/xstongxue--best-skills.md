---
repo: xstongxue/best-skills
url: https://github.com/xstongxue/best-skills
owner: xstongxue
owner_type: User
language: Python
license: Apache-2.0
description: "通用高质量 Skills 合集🔥"
homepage: ""
stars: 491
stars_per_day: 98
forks: 39
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - "topic/skills"
  - "topic/vibe_coding"
aliases:
  - "best-skills"
  - "xstongxue/best-skills"
  - "提供高效的技能集合，讓 AI Agent 自動判斷並執行任務，無需手動選擇。"
---

# best-skills

**491** stars · **98** stars/天 · 建立 5 天前 · Python · Apache-2.0

`個人專案`

> [!summary] 一句話摘要
> 提供高效的技能集合，讓 AI Agent 自動判斷並執行任務，無需手動選擇。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (98 stars/day)
> **適合** 需要在學術或技術領域中快速生成文檔的研究人員和工程師。
> **一句話重點** 這個專案展示了如何將 AI 技術應用於文檔生成，顯著提升了工作效率。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供了一個自動化的技能觸發系統，讓 AI Agent 能夠根據上下文自動選擇執行的技能。

## 專案簡介

這個專案提供了一系列高質量的技能集合，能夠安裝到各種 AI Agent 工具中，像是 Cursor 和 Claude Code。使用者只需將技能放入指定的 skills 目錄，Agent 就能根據 `description` 中的關鍵詞自動判斷何時調用這些技能，而不需要每次手動選擇。技術上，這些技能以 SKILL.md 格式存在，並且支持多種功能，如論文寫作、PPT 生成和技術圖表繪製等。與類似的專案 best-prompts 相比，best-skills 更加自動化，無需手動複製粘貼，提升了使用效率。實際使用中，這些技能能夠快速生成學術論文大綱、PPT 和技術架構圖，適合需要高效文檔生成的學術或技術團隊。這個專案目前處於穩定階段，適合中小型團隊使用，特別是在需要快速生成文檔的情境下。建議在需要自動化文檔生成時使用，但如果團隊已經有成熟的手動流程，則可能不需要轉換。

**技術棧**：`Python`

## 重點功能

- 自動化技能觸發 — Agent 根據關鍵詞自動判斷何時調用技能，無需手動選擇。
- 論文寫作支持 — 包含大綱審核、結構仿寫、潤色等功能，支持理工和文科的需求。
- PPT 生成 — 支持根據大綱自動生成答辯 PPT，並可輸出為 .pptx 格式。
- 技術圖表繪製 — 自動生成技術架構圖、數據結構圖和 E-R 圖，提升文檔的可視化效果。
- 統一 Skill 模組 — 所有技能統一管理，便於使用者快速找到所需功能。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/xstongxue/best-skills.git
```
2. 進入專案目錄
```bash
cd best-skills
```
3. 將所需技能放入 skills 目錄
```bash
cp skills/* /path/to/your/agent/skills/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 xstongxue 具備強大的技術背景，專注於提升 AI 工具的實用性。隨著 AI 技術的普及，對於自動化文檔生成的需求越來越高，這個專案正好切中了這一需求。近期的學術活動和會議也促使了對此類工具的需求上升。

## 適合誰使用

**目標受眾**：需要在學術或技術領域中快速生成文檔的研究人員和工程師。

> [!example] 使用場景
> - 研究生用它來自動生成論文大綱，因為這樣可以節省大量的時間，讓他們專注於研究內容而非格式。
> - 軟體工程師用它來快速生成系統架構圖，因為手動繪製圖表耗時且容易出錯，這能提高工作效率。
> - 講師用它來製作課程 PPT，因為自動化生成的 PPT 更能符合學術要求，並且節省準備時間。

## 架構分析

這是一個單體架構的專案，使用者將技能放置在指定的 skills 目錄中。用戶輸入 → Agent 自動判斷關鍵詞 → 執行對應技能。關鍵技術決策是將所有技能以統一的 SKILL.md 格式管理，專案目錄結構中包含 skills 目錄和 README 文件。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少手動操作的需求。
> - 支持多種學術和技術文檔的生成，功能全面。
> - 易於擴展，使用者可以根據需求添加新技能。

> [!danger] 缺點
> - 目前僅限於特定的 AI Agent 工具，使用範圍有限。
> - 需要一定的技術背景來進行配置和使用。
> - 部分技能的效果可能因使用場景而異，需進行調整。

> [!warning] 注意事項
> - 目前僅支持特定的 AI Agent 工具，如 Cursor 和 Claude Code。
> - 需要使用者具備一定的技術背景來配置和使用這些技能。
> - 部分技能可能需要進一步的調整以符合特定的使用場景。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 39 |
| Open Issues | 0 |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 720 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xstongxue](https://github.com/xstongxue) | 7 |

## README 摘錄

> [!info]- 展開查看原文 README
> # best-skills
> 
> 通用高质量 Skill 合集，可安装到 Cursor、Claude Code、Codex、OpenClaw 等 Agent 工具的 skills 目录使用。
> 
> **与 [best-prompts](https://github.com/xstongxue/best-prompts) 的区别**：best-prompts 是面向聊天框的 Prompt，需手动复制粘贴；best-skills 是面向 Agent 的 SKILL.md，Agent 会根据 `description` 中的关键词与触发场景**自动判断是否调用**，无需每次手动选择。
> 
> ## 效果预览
> 
> **答辩 PPT（[pptgen-drawio](skills/pptgen-drawio/SKILL.md)）** · 源文件：[paper-defense.drawio](preview/paper-defense.drawio) · [paper-defense.pptx](preview/paper-defense.pptx)
> 
> **公众号封面（[wechat-article-writer](skills/wechat-article-writer/SKILL.md)）** · 源文件：[wechat_cover.drawio](preview/wechat_cover.drawio)
> 
> ## 本科&硕士学位论文
> 
> | 用途                | Skill           | 示例 Prompt                                               |
> | ----------------- | --------------- | ------------------------------------------------------- |
> | 大纲审核（理工/文科）       | paper-write     | 「帮我审核一下这个论文大纲」（理工科 / 文科自动区分）                              |
> | 结构仿写（理工 science）   | paper-write     | 「按这篇范文仿写我的实验章节」「帮我写绪论/摘要，参考 XX 论文」                         |
> | 结构仿写（文科 liberal）   | paper-write     | 「文科仿写文献综述/理论章节」「文科仿写案例分析/对策建议」「写文科摘要」                        |
> | 润色 / 去 AI 化       | paper-write     | 「这段读起来像 AI 写的，帮我润色」「实验章节润色」「文科章节润色」                        |
> | 参考文献              | paper-write     | 「帮我找 RLHF 代表作并给 BibTeX」「cite Vaswani 的 attention」       |
> | 结构化信息提取           | paper-write     | 「从这篇论文提取结构化信息，用于答辩 PPT」                                 |
> | 系统章节生成            | codegen-doc     | 「根据当前项目生成系统总体设计章节」                                      |
> | 答辩 PPT / 通用汇报 PPT | pptgen-drawio   | 「帮我做答辩 PPT，论文在 xxx」「根据这个大纲生成汇报 PPT」                     |
> | 模型架构图 / 流程图       | drawio-diagram  | 「画一个 Transformer 架构图」「做一张算法流程图」                         |
> | 图片风格迁移            | drawio-diagram  | 「按这张参考图的风格画」「参考图+描述：画一个三层系统，前端 Vue、后端 Spring、数据库 MySQL」 |
> | 技术栈图              | codegen-diagram | 「根据当前项目画技术栈结构图」                                         |
> | 系统架构图             | codegen-diagram | 「画我们系统的四层架构图」                                           |
> | 数据结构图             | codegen-diagram | 「根据代码生成数据结构图」                                           |
> | E-R 图             | codegen-diagram | 「根据数据库表结构画 E-R 图」                                       |
> 
> > **paper-write**：统一 Skill，**理工（science-*）与文科（liberal-*）命名区分**。支持大纲审核（理工/文科）、结构仿写（理工：绪论/摘要/实验；文科：绪论/摘要/文献综述/案例分析/对策）、参考文献、润色（通用/实验章节/文科章节）、扩写/缩写、防 AIGC、中英互译、结构化信息提取。  
> > **codegen-diagram**：统一 Skill，根据用户表述自动匹配技术栈图、系统架构图、数据结构图、E-R 图。  
> > **codegen-doc**：统一 Skill，匹配论文章节、项目梳理、重点问题、简历项目描述。  
> > **pptgen-drawio**：支持论文答辩与通用汇报两种模式，输出 .drawio 后可用 drawio2pptx 导出 .pptx。
> 
> ## 开发流程五步法
> 
> | 步骤     | Skill        | 示例 Prompt                           |
> | ------ | ------------ | ----------------------------------- |
> | 需求理解   | dev-workflow | 「我想做一个 XXX，帮我整理需求」                  |
> | 方案设计   | dev-workflow | 「需求已整理好，帮我做技术方案」「架构设计：前后端分离」        |
> | 代码实现   | dev-workflow | 「按方案开始写代码」「实现用户登录模块」                |
> | 代码审查   | dev-workflow | 「帮我审查这段代码」「PR review，按团队规范检查」       |
> | Bug 修复 | dev-workflow | 「这里报错了：xxx」「功能跑不通，帮我修」「测试挂了，看看怎么回事」 |
> 
> > **dev-workflow**：统一 Skill，根据用户表述自动匹配 requirement/design/implementation/review/bug-fix 五步之一。
> 
> ## 自媒体创作
> 
> | 用途                   | Skill                 | 示例 Prompt                                         |
> | -------------------- | --------------------- | ------------------------------------------------- |
> | 公众号/技术博客（含配图）        | wechat-article-writer | 「写一篇关于 Cursor Skills 的公众号文章」「用高流量风格写 Vibe Coding」 |
> | 公众号封面 / B站封面 / 小红书配图 | wechat-article-writer | 「生成这篇文章的封面，16:9」                                  |
> | 正文插图                 | wechat-article-writer | 「生成 Cursor 启用四步骤的步骤图」「画 Prompt/Rules/Skills 对比图」  |
> | 风格提取                 | wechat-article-writer | 「分析这篇公众号文章的写作风格」「提取可复用规则」「模仿这篇爆款文风」               |
> 
> > **wechat-article-writer**：统一 Skill，根据用户表述自动匹配撰写文章、封面图、正文插图、风格提取。支持 9 种写作风格（按序）：默认、高流量、清单体、资源盘点、个人实测、认知颠覆、身份共鸣、故事化、深度随笔。
> 
> ## 周报 / 汇报 / 总结 / 介绍
> 
> | 用途      | Skill             | 示例 Prompt             |
> | ------- | ----------------- | --------------------- |
> | 周报    

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[API 設計]]

[GitHub](https://github.com/xstongxue/best-skills)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "xstongxue--best-skills"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，491 stars
