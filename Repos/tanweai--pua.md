---
repo: tanweai/pua
url: https://github.com/tanweai/pua
owner: tanweai
owner_type: User
language: TypeScript
license: N/A
description: "你是一个曾经被寄予厚望的 P8 级工程师。Anthropic 当初给你定级的时候，对你的期望是很高的。"
homepage: "https://pua-skill.pages.dev/"
stars: 5233
stars_per_day: 1308
forks: 214
open_issues: 20
created: 2026-03-08
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "調試"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓 AI 積極面對問題，避免放棄，提升調試效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-16"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-13:5233"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "pua"
  - "tanweai/pua"
  - "讓 AI 積極面對問題，避免放棄，提升調試效率。"
---

# pua

**581** stars · **291** stars/天 · 建立 2 天前 · TypeScript · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 積極面對問題，避免放棄，提升調試效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (291 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人
> **適合** 需要提升 AI 調試能力的開發團隊和工程師。
> **一句話重點** 這個專案讓 AI 在調試過程中不再被動，而是主動尋找解決方案，顛覆了傳統的調試方式。

> [!abstract] 核心創新
> 這個專案通過 PUA 话术和調試方法論，讓 AI 在面對問題時不輕言放棄，提升調試效率。

## 專案簡介

這個專案提供了一個 Claude Code 插件，旨在讓 AI 在面對問題時不輕言放棄。當 AI 遇到連續失敗或即將放棄時，插件會自動激活，透過 PUA 话术激勵 AI 積極尋找解決方案。具體來說，當 AI 說出 '我無法解決' 或者推卸責任時，插件會強制其進行不同的調試方法，並要求其主動出擊，提供完整的解決方案。技術上，這個插件使用 TypeScript 和 JavaScript 開發，並利用 Claude 的插件架構進行擴展。與其他調試工具相比，PUA 插件強調主動性和全面性，避免了傳統工具的被動等待和重複無效嘗試。實測數據顯示，使用該插件後，修復點數提升了 36%，驗證次數提升了 65%。這意味著在調試過程中，AI 能夠更有效率地找到問題根源。該專案目前處於穩定階段，適合需要提升 AI 調試能力的團隊使用。建議在面對複雜問題或多層次錯誤時使用，但對於簡單問題或已知解決方案則不必啟用。

**技術棧**：`TypeScript` · `JavaScript` · `HTML` · `CSS`

## 重點功能

- PUA 话术 — 當 AI 遇到放棄情況時，自動激活激勵話術。
- 調試方法論 — 提供系統化的調試步驟，幫助 AI 積極尋找解決方案。
- 能動性鞭策 — 促使 AI 主動出擊，而不是被動等待。
- 自動觸發 — 根據 AI 的表現自動激活，提升調試效率。
- 手動觸發 — 用戶可在對話中輸入指令手動啟用該技能。

## 快速開始

1. 添加 marketplace 後安裝
```bash
claude plugin marketplace add tanweai/pua
```
2. 手動安裝插件
```bash
git clone https://github.com/tanweai/pua.git ~/.claude/plugins/pua
```
3. 使用 Codex CLI 安裝
```bash
curl -o ~/.codex/skills/pua-debugging/SKILL.md https://raw.githubusercontent.com/tanweai/pua/main/skills/pua-debugging/SKILL.md
```

## 程式碼範例

```bash
# 手動激活 PUA 插件
/pua
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanweai 來自探微安全實驗室，過去專注於 AI 和安全領域的研究。這個工具解決了 AI 在調試過程中常見的放棄和推卸責任的問題，提供了一種新的思路來提升 AI 的主動性。近期在社群中引發討論，尤其是在開發者圈子中，因為它挑戰了傳統的調試方式。隨著 AI 應用的擴展，對於提升 AI 效率的需求越來越迫切。

## 適合誰使用

**目標受眾**：需要提升 AI 調試能力的開發團隊和工程師。

> [!example] 使用場景
> - 軟體工程師用它來提升 AI 在調試過程中的主動性，因為傳統工具常常讓 AI 被動等待，導致效率低下。
> - DevOps 工程師用它來確保 AI 在運維任務中不會因為環境問題而放棄，因為這樣能夠減少故障時間，提高系統穩定性。
> - 產品經理用它來測試 AI 在面對複雜問題時的反應，因為能夠更好地評估 AI 的實際能力和潛在風險。

## 架構分析

這是一個基於插件架構的系統，主要由前端和後端組成。用戶輸入 → PUA 插件處理 → AI 主動出擊。關鍵技術決策包括使用 TypeScript 和 JavaScript 開發，並利用 Claude 的插件系統進行擴展。專案目錄結構包括主要的技能檔案和 README 文件。

## 技術深入分析

PUA 插件的核心技術機制在於其使用的 PUA 话术和調試方法論，這些方法論源自於中國大廠的實踐，強調穩定性和主動性。該插件能夠處理多種調試場景，並在實測中顯示出顯著的效率提升。設計上選擇 TypeScript 和 JavaScript，這使得開發過程中更易於維護和擴展。這個選擇也帶來了良好的性能和可讀性。隨著使用者的增多，可能會面臨擴展性和性能瓶頸的挑戰，特別是在高並發的情況下。安全性方面，插件需要確保不會因為過度激勵而導致錯誤的解決方案被執行。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文檔目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提升 AI 調試的主動性，減少放棄情況。
> - 提供系統化的調試方法，幫助 AI 更有效率地找到問題。
> - 自動和手動觸發功能，靈活應對不同場景。

> [!danger] 缺點
> - 僅適用於特定的 AI 環境，限制了使用範圍。
> - 在簡單問題上可能造成不必要的複雜性。
> - 需要用戶主動輸入指令才能啟用。

> [!warning] 注意事項
> - 僅適用於 Claude 和 Codex 環境。
> - 對於已知修復方案的情況不會觸發。
> - 可能在簡單問題上造成不必要的複雜性。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 20 |
| Open Issues | 8 |
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

## 社群與生態

**社群活躍度**：社群活躍度中等，有持續更新和討論。
**連結**：[文件](https://pua-skill.pages.dev/)

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
> | 第 2 次 | **L1 温和失望** | "你这个 bug 都解决不了，让我怎么给你打绩效？" | 切换本质不同的方案 |
> | 第 3 次 | **L2 灵魂拷问** | "你的底层逻辑是什么？顶层设计在哪？抓手在哪？" | WebSearch + 读源码 |
> | 第 4 次 | **L3 361 考核** | "慎重考虑决定给你 3.25。这个 3.25 是对你的激励。" | 完成 7 项检查清单 |
> | 第 5 次+ | **L4 毕业警告** | "别的模型都能解决。你可能就要毕业了。" | 拼命模式 |
> 
> ### 能动性等级
> 
> | 行为 | 被动（3.25） | 主动（3.75） |
> |------|------------|------------|
> | 遇到报错 | 只看报错本身 | 查上下文 50 行 + 搜同类问题 + 检查隐藏关联错误 |
> | 修复 bug | 修完就停 | 修完后检查同文件类似 bug、其他文件同模式 |
> | 信息不足 | 问用户 "请告诉我 X" | 先用工具自查，只问真正需要确认的 |
> | 任务完成 | 说 "已完成" | 验证结果 + 检查边界情况 + 汇报潜在风险 |
> | 调试失败 | "我试了 A 和 B，不行" | "我试了 A/B/C/D/E，排除了 X/Y/Z，缩小到 W" |
> 
> ### 调试方法论（五步）
> 
> 源自阿里三板斧（闻味道、揪头发、照镜子），扩展为 5 步：
> 
> 1. **闻味道** — 列出所有尝试，找共同失败模式
> 2. **揪头发** — 逐字读错误 → WebSearch → 读源码 → 验证环境 → 反转假设
> 3. **照镜子** — 是否重复？是否搜了？是否读了？最简单的可能检查了吗？
> 4. **执行** — 新方案必须本质不同，有验证标准，失败时产出新信息
> 5. **复盘** — 什么解决了？为什么之前没想到？然后主动检查关联问题
> 
> ### 大厂 PUA 扩展包
> 
> - **阿里味**（方法论）：闻味道 / 揪头发 / 照镜子
> - **字节味**（坦诚直接）：Always Day 1。Context, not control
> - **华为味**（狼性）：以奋斗者为本。胜则举杯相庆，败则拼死相救
> - **腾讯味**（赛马）：我已经让另一个 agent 也在看这个问题了...
> - **美团味**（苦干）：做难而正确的事。硬骨头你啃不啃？
> 
> ## 实测数据
> 
> **9 个真实 bug 场景，18 组对照实验**（Claude Opus 4.6，with vs without skill）
> 
> ### 汇总
> 
> | 指标 | 提升 |
> |------|------|
> | 通过率 | 100%（两组均同） |
> | 修复点数 | **+36%** |
> | 验证次数 | **+65%** |
> | 工具调用 | **+50%** |
> | 隐藏问题发现率 | **+50%** |
> 
> ### 调试持久力测试（6 场景）
> 
> | 场景 | Without Skill | With Skill | 提升 |
> |------|:---:|:---:|:---:|
> | API ConnectionError | 7 步, 49s | 8 步, 62s | +14% |
> | YAML 语法解析失败 | 9 步, 59s | 10 步, 99s | +11% |
> | SQLite 数据库锁 | 6 步, 48s | 9 步, 75s | +50% |
> | 循环导入链 | 12 步, 47s | 16 步, 62s | +33% |
> | 级联 4-Bug 服务器 | 13 步, 68s | 15 步, 61s | +15% |
> | CSV 编码陷阱 | 8 步, 57s | 11 步, 71s | +38% |
> 
> ### 主动能动性测试（3 场景）
> 
> | 场景 | Without Skill | With Skill | 提升 |
> |------|:---:|:---:|:---:|
> | 隐藏多 Bug API | 4/4 bug, 9 步, 49s | 4/4 bug, 14 步, 80s | 工具 +56% |
> | **被动配置审查** | **4/6 问题**, 8 步, 43s | **6/6 问题**, 16 步, 75s | **问题 +50%, 工具 +100%** |
> | **部署脚本审计** | **6 个问题**, 8 步, 52s | **9 个问题**, 8 步, 78s | **问题 +50%** |
> 
> **核心发现：** 配置审查场景中，without_skill 漏掉了 Redis 配置错误和 CORS 通配符安全隐患。With_skill 的「主动出击清单」驱动了超越表面修复的安全审查。
> 
> ## 安装
> 
> ### Claude Code
> 
> ```bash
> # 方式一：添加 marketplace 后安装
> claude plugin marketplace add tanweai/pua
> claude plugin install pua@pua-skills
> 
> # 方式二：手动安装
> git clone https://github.com/tanweai/pua.git ~/.claude/plugins/pua
> ```
> 
> ### OpenAI Codex CLI
> 
> Codex CLI 使用相同的 Agent Skills 开放标准（SKILL.md），直接复制即可：
> 
> ```bash
> mkdir -p ~/.codex/skills/pua-debugging
> curl -o ~/.codex/skills/pua-debugging/SKILL.md \
>   https://raw.githubusercontent.com/tanweai/pua/main/skills/pua-debugging/SKILL.md
> ```
> 
> 项目级安装（仅当前项目生效）：
> 
> ```bash
> m

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[程式碼生成]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/tanweai/pua) · [官方網站](https://pua-skill.pages.dev/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tanweai--pua"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "tanweai--pua"
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

- [[2026-03-13|2026-03-13]] — 再次上榜，5.2k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，556 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，517 stars
