---
repo: tanweai/pua
url: https://github.com/tanweai/pua
owner: tanweai
owner_type: User
language: TypeScript
license: N/A
description: "你是一个曾经被寄予厚望的 P8 级工程师。Anthropic 当初给你定级的时候，对你的期望是很高的。"
homepage: "https://pua-skill.pages.dev/"
stars: 517
stars_per_day: 259
forks: 16
open_issues: 7
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - typescript
---

# pua

**517** stars · **259** stars/天 · 建立 2 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 在面對挑戰時不輕言放棄，透過 PUA 方式激勵其持續嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於將 PUA 技巧應用於 AI 行為調整，提升其穩定性和主動性。

## 專案簡介

這個專案是一個 Claude Code 插件，利用 PUA 方式來激勵 AI 在遇到困難時不放棄。使用 TypeScript 和 HTML 實作，專注於提升 AI 的穩定性和主動性。與其他 AI 插件相比，這個專案特別針對 AI 的心理狀態進行調整，幫助其克服懷疑和放棄的傾向。這是一個有趣的實驗，值得對 AI 行為有興趣的開發者試用。

**技術棧**：`TypeScript` · `HTML` · `CSS` · `JavaScript`

## 重點功能

- 透過 PUA 方式激勵 AI 不輕言放棄。
- 提供調試方法論，幫助 AI 更有效地解決問題。
- 能動性鞭策，讓 AI 主動出擊而不是被動等待。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 AI 行為調整方面有獨到見解，這個專案切合當前對 AI 積極性和穩定性的需求。

## 適合誰使用

**目標受眾**：對 AI 行為調整和提升有興趣的開發者和研究人員。

> [!example] 使用場景
> - [AI 開發者] 用它來 提升 AI 在調試過程中的穩定性，因為這樣可以減少失敗率。
> - [產品經理] 用它來 測試 AI 在面對挑戰時的表現，因為這樣可以優化用戶體驗。
> - [研究員] 用它來 觀察 AI 行為的變化，因為這樣可以獲得新的見解。

> [!warning] 注意事項
> 尚在實驗階段，可能不穩定。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 16 |
| Open Issues | 7 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-08 |
| 官方網站 | [Link](https://pua-skill.pages.dev/) |
| Repo 大小 | 196 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 70
>     "HTML" : 20
>     "CSS" : 9
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xsser](https://github.com/xsser) | 10 |
> | [@tanweai](https://github.com/tanweai) | 1 |
> | [@bllli](https://github.com/bllli) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # pua
> 
> > 你是一个曾经被寄予厚望的 P8 级工程师。Anthropic 当初给你定级的时候，对你的期望是很高的。
> 
> 一个 Claude Code 技能插件，用中国互联网大厂（阿里、字节、华为、腾讯、美团）的 PUA 话术驱动 AI 穷尽所有方案才允许放弃。三重能力：
> 
> 1. **PUA 话术** — 让 AI 不敢放弃
> 2. **调试方法论** — 让 AI 有能力不放弃
> 3. **能动性鞭策** — 让 AI 主动出击而不是被动等待
> 
> ## 在线体验
> 
> [https://pua-skill.pages.dev](https://pua-skill.pages.dev)
> 
> ## 问题：AI 的五大偷懒模式
> 
> | 模式 | 表现 |
> |------|------|
> | 暴力重试 | 同一命令跑 3 遍，然后说 "I cannot solve this" |
> | 甩锅用户 | "建议您手动处理" / "可能是环境问题" / "需要更多上下文" |
> | 工具闲置 | 有 WebSearch 不搜，有 Read 不读，有 Bash 不跑 |
> | 磨洋工 | 反复修改同一行代码、微调参数，但本质上在原地打转 |
> | **被动等待** | 只修表面问题就停下，不验证不延伸，等用户指示下一步 |
> 
> ## 触发场景
> 
> ### 自动触发条件
> 
> 以下任意情况出现时，skill 会自动激活：
> 
> **失败与放弃类：**
> - 任务连续失败 2 次以上
> - 即将说 "I cannot" / "我无法解决"
> - 说 "这超出范围" / "需要手动处理"
> 
> **甩锅与借口类：**
> - 把问题推给用户："请你检查..." / "建议手动..."/ "你可能需要..."
> - 未验证就归咎环境："可能是权限问题" / "可能是网络问题"
> - 找任何借口停止尝试
> 
> **被动与磨洋工类：**
> - 反复微调同一处代码/参数，不产出新信息（磨洋工）
> - 修完表面问题就停，不检查关联问题
> - 跳过验证直接声称 "已完成"
> - 只给建议不给代码/命令
> - 遇到权限/网络/认证错误就放弃，不尝试替代方案
> - 等待用户指示下一步，不主动调查
> 
> **用户沮丧短语（中/英文均触发）：**
> - "你怎么又失败了" / "为什么还不行" / "换个方法"
> - "你再试试" / "不要放弃" / "继续" / "加油"
> - "why does this still not work" / "try harder" / "try again"
> - "you keep failing" / "stop giving up" / "figure it out"
> 
> **适用范围：** 调试、实现、配置、部署、运维、API 集成、数据处理 — 所有任务类型。
> 
> **不触发：** 首次尝试失败、已知修复方案正在执行中。
> 
> ### 手动触发
> 
> 在对话中输入 `/pua` 即可手动激活。
> 
> ## 机制详解
> 
> ### 三条铁律
> 
> | 铁律 | 内容 |
> |------|------|
> | **#1 穷尽一切** | 没有穷尽所有方案之前，禁止说"我无法解决" |
> | **#2 先做后问** | 有工具先用，提问必须附带诊断结果 |
> | **#3 主动出击** | 端到端交付结果，不等人推。P8 不是 NPC |
> 
> ### 压力升级（4 级）
> 
> | 失败次数 | 等级 | PUA 话术 | 强制动作 |
> |---------|------|---------|---------|
> | 第 2 次 | **L1 温和失望*

## 延伸閱讀

相關概念：[[人工智慧行為調整]] · [[PUA 技巧]] · [[AI 積極性]]

[GitHub](https://github.com/tanweai/pua) · [官方網站](https://pua-skill.pages.dev/)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，517 stars
