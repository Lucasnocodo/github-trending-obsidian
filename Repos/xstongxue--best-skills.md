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
  - "提供一套通用的高质量技能集合，讓 AI Agent 自動選擇適當的技能執行任務。"
---

# best-skills

**491** stars · **98** stars/天 · 建立 5 天前 · Python · Apache-2.0

`個人專案`

> [!summary] 一句話摘要
> 提供一套通用的高质量技能集合，讓 AI Agent 自動選擇適當的技能執行任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (98 stars/day)
> **適合** 需要高效生成文檔和報告的學術研究者和自媒體創作者。
> **一句話重點** 這個專案展示了如何通過自動化技能選擇來提升 AI Agent 的效率，讓用戶能夠更專注於創造性工作。

> [!abstract] 核心創新
> 這個專案的創新在於它能夠根據用戶的需求自動選擇合適的技能，提升了使用的便捷性。

## 專案簡介

這個專案提供了一系列高質量的技能集合，旨在讓 AI Agent 根據用戶的需求自動選擇合適的技能進行操作。使用者只需在 Agent 的 skills 目錄中安裝這些技能，Agent 就能夠根據 `description` 中的關鍵字自動判斷是否調用相應的技能，無需手動選擇。技術上，這些技能是以 Markdown 格式編寫，並且可以與多種 Agent 工具（如 Cursor、Claude Code、Codex 等）兼容。與類似的工具如 best-prompts 相比，best-skills 的最大優勢在於它的自動化能力，能夠根據上下文自動選擇技能，而不是需要用戶手動複製粘貼。實際使用中，這些技能涵蓋了從學術寫作到自媒體創作的多個領域，支持多種任務，如論文撰寫、代碼審查和報告生成。這個專案目前處於穩定階段，適合各種規模的團隊使用，特別是需要高效生成文檔和報告的團隊。建議在需要快速生成內容或自動化重複性任務時使用，但如果你的需求非常特定，可能需要進一步定制技能。

**技術棧**：`Python 3.8`

## 重點功能

- 自動技能選擇 — 根據用戶輸入的關鍵字自動選擇相應的技能，無需手動操作。
- 支持多種任務 — 包括論文撰寫、代碼審查、報告生成等，滿足不同需求。
- Markdown 格式 — 以 SKILL.md 格式編寫，易於理解和修改。
- 多種 Agent 兼容 — 可安裝到 Cursor、Claude Code、Codex 等多種工具中。
- 示例提示 — 每個技能都附帶示例提示，幫助用戶快速上手。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/xstongxue/best-skills.git
```
2. 進入專案目錄
```bash
cd best-skills
```
3. 將技能安裝到 Agent 的 skills 目錄
```bash
cp -r skills/* /path/to/your/agent/skills/
```

## 程式碼範例

```python
# 使用示例
agent.invoke('paper-write', '帮我审核一下这个论文大纲')
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 xstongxue 背景深厚，專注於開發高效的 AI 工具，這個專案切中了對於自動化和高效能的需求。隨著 AI 技術的普及，對於自動化技能的需求日益增加，這使得 best-skills 在市場上獲得了關注。

## 適合誰使用

**目標受眾**：需要高效生成文檔和報告的學術研究者和自媒體創作者。

> [!example] 使用場景
> - 研究生用它來自動生成論文大綱，因為這樣可以節省大量的時間，並且確保結構合理。
> - 自媒體創作者用它來快速生成文章封面和內容，因為這樣可以提升內容產出的效率，並且保持高質量。
> - 軟體工程師用它來自動化代碼審查過程，因為這樣可以減少人為錯誤，並提高代碼質量。

## 架構分析

這是一個基於 CLI 的工具，使用者通過將技能安裝到 Agent 的 skills 目錄來使用。用戶輸入 → Agent 判斷關鍵字 → 自動選擇技能 → 執行任務。專案的目錄結構包括 skills 目錄，裡面存放各種技能的 SKILL.md 文件，這些文件定義了技能的行為和示例提示。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少了手動操作的需求。
> - 支持多種任務，適用範圍廣泛。
> - 易於擴展和修改，使用 Markdown 格式編寫。

> [!danger] 缺點
> - 對於特定需求的支持可能不夠靈活。
> - 需要用戶具備一定的技能描述理解能力。
> - 依賴於 Agent 的性能，若 Agent 表現不佳，則技能效果也會受到影響。

> [!warning] 注意事項
> - 僅支援特定的 Agent 工具，可能無法在所有環境中使用。
> - 需要用戶對技能的描述有一定的理解，否則可能無法正確調用。
> - 技能的效果依賴於 Agent 的性能，若 Agent 表現不佳，則技能效果也會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[xstongxue--best-prompts\|xstongxue/best-prompts]] | best-prompts 主要針對聊天框的提示，需要手動複製粘貼，而 best-skills 則是自動選擇技能，無需手動操作。 |

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

相關概念：[[Prompt Engineering]] · [[Agent 框架]] · [[程式碼生成]]

相關專案：[[xstongxue--best-prompts|xstongxue/best-prompts]] · [[HKUDS--CLI-Anything|CLI-Anything (軟體 → CLI)]] · [[autoclaw-cc--xiaohongshu-skills|小紅書 Skills]] · [[binance--binance-skills-hub|Binance Skills Hub]]

[GitHub](https://github.com/xstongxue/best-skills)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "xstongxue--best-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "xstongxue--best-skills"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，491 stars
