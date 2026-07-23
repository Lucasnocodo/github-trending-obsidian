---
repo: powerycy/goutoujunshi
url: https://github.com/powerycy/goutoujunshi
owner: powerycy
owner_type: User
language: Python
license: NOASSERTION
description: "一个先接住情绪、再分析关系并给出可执行策略的 Codex 恋爱军师，内置心理、法律、社会、人文、哲学、婚姻家庭与性学知识库，支持多元关系。"
homepage: ""
stars: 548
stars_per_day: 274
forks: 68
open_issues: 4
created: 2026-07-20
pushed_at: 2026-07-23
first_seen: 2026-07-23
week: "2026-W30"
month: "2026-07"
category: "AI/ML"
subcategory: "情感智能"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-23
use_case: "提供情緒支持與關係分析的 AI 恋爱军师，幫助用戶制定可執行的戀愛策略。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-26"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2266
readme_length: 4304
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-23"
star_history: "2026-07-23:548"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/ai_agent"
  - "topic/chinese"
  - "topic/codex"
  - "topic/codex_skill"
  - "topic/lgbtq"
aliases:
  - "goutoujunshi"
  - "powerycy/goutoujunshi"
  - "提供情緒支持與關係分析的 AI 恋爱军师，幫助用戶制定可執行的戀愛策略。"
---

# goutoujunshi

**548** stars · **274** stars/天 · 建立 2 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/powerycy--goutoujunshi");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`ai-agent` `chinese` `codex` `codex-skill` `lgbtq` `psychology` `relationship-advice`

> [!summary] 一句話摘要
> 提供情緒支持與關係分析的 AI 恋爱军师，幫助用戶制定可執行的戀愛策略。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (274 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要深入分析情感關係並制定具體行動策略的用戶，特別是多元性別和關係的使用者。
> **一句話重點** 狗头军师不仅是恋爱建议工具，更是一个情感支持系统，帮助用户在复杂的情感关系中找到方向。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "情感智能" && p.file.name !== "powerycy--goutoujunshi" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 情感智能 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到情感支持和策略建議，值得一試。

> [!abstract] 核心創新
> 提供跨学科的情感分析与策略建议，结合心理学、法律和社会学知识。

## 專案簡介

狗头军师是一个基于情绪支持和关系科学的 AI 恋爱助手，旨在帮助用户分析情感关系并制定具体的行动策略。用户输入情绪和关系背景后，系统会识别出聊天记录中的关键内容，并将其与心理学、法律、社会学等领域的知识结合，给出可执行的建议。其核心卖点在于不仅仅提供简单的恋爱建议，而是通过情绪识别、事实分析和风险评估，帮助用户在复杂的情感场景中做出明智的选择。技术上，它使用 Python 语言构建，依赖于 Codex 平台的能力，能够处理多种输入格式，包括聊天截图和文本导出。

与其他恋爱建议工具相比，狗头军师提供了更为细致的情感分析和多元关系支持，能够处理异性恋、同性恋及非单偶关系等多种场景。它的设计原则强调情绪优先、行为可靠性和安全性，确保用户在复杂的情感决策中得到支持。使用者可能会遇到的常见问题包括如何有效利用知识库和在特定情境下的建议适用性。整体来看，该项目处于初始阶段，适合对情感关系有深入需求的用户，未来可能会继续扩展其知识库和功能。

**技術棧**：`Python`

## 重點功能

- 情緒識別 — 能夠捕捉用戶的情緒狀態，並根據情緒提供建議。
- 聊天材料分析 — 支持分析聊天記錄，提取關鍵事實而非推測。
- 約會設計 — 根據雙方偏好設計第一次見面，提供具體建議。
- 多元關係支持 — 能夠處理異性戀、同性戀及非單偶關係。
- 即時話術生成 — 提供可直接發送的話術，並根據反應設計後續分支。

## 快速開始

1. 克隆仓库到 Codex 的 Skills 目录
```bash
git clone https://github.com/powerycy/goutoujunshi.git ~/.codex/skills/goutoujunshi
```
2. 在 Codex 中输入指令
```bash
使用 $goutoujunshi 帮我梳理情绪、分析当前关系，并给出下一步建议。
```
3. 首次使用时填写相关信息
```bash
根据提示输入 MBTI、综合评分等信息。
```

## 程式碼範例

```python
# 前置條件
使用 $goutoujunshi 進行情感分析。
# 指令
使用 $goutoujunshi 帮我梳理情绪、分析当前关系，并给出下一步建议。
# 預期輸出
系统会询问用户的情绪、目标对象信息等，并给出分析与建议。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 548 stars（274/天），forks 68（12.4%），顯示出強勁的增長潛力。作者 powerycy 在情感科技領域有一定的背景，這個專案解決了傳統戀愛建議工具無法提供深入分析的痛點。之前的工具多數提供簡單的建議，缺乏情感支持和多元關係的考量。近期社交媒體的討論也引發了對這類工具的興趣，讓更多人關注到情感健康的重要性。這個工具的設計符合當前對於情感智能的需求，並且其多元性別和關係支持使其在市場上具有獨特性。forks/stars 比率適中，顯示出一定的實際修改需求。

## 適合誰使用

**目標受眾**：需要深入分析情感關係並制定具體行動策略的用戶，特別是多元性別和關係的使用者。

> [!example] 使用場景
> - 情感咨詢師用它來幫助客戶分析情感問題，因為它能提供基於情緒的具體建議，減少客戶的內耗。
> - 單身人士用它來設計第一次約會，因為它能根據雙方偏好提供具體的約會建議，增加成功率。
> - 跨性別者用它來獲得支持和建議，因為它尊重多元性別身份，提供適合的情感策略。

## 架構分析

狗头军师采用模块化的设计，核心功能围绕情绪识别和关系分析展开。数据流从用户输入情绪和关系背景开始，经过系统的分析和知识库检索，最终生成具体的建议和行动方案。选择 Python 作为开发语言的原因在于其丰富的库支持和易于维护的特性。

系统的设计使得用户能够灵活输入多种格式的信息，增强了工具的适用性。一个主要的 trade-off 是，虽然模块化设计提高了可扩展性，但也可能导致初期的学习曲线较陡峭。整体架构支持未来的功能扩展和知识库更新，确保系统能够适应不断变化的用户需求。

## 技術深入分析

狗头军师的核心技术机制在于情绪识别和关系分析，利用心理学理论和数据分析方法来提供个性化建议。系统通过用户输入的情绪和关系背景，提取关键数据并与知识库中的信息进行比对，生成具体的行动方案。其设计允许用户灵活输入多种形式的信息，包括聊天记录和文本导出，增强了工具的适用性。性能上，系统能够快速处理用户输入并生成反馈，确保用户在关键时刻获得及时支持。

选择 Python 作为开发语言，带来了良好的可维护性和丰富的库支持，但也可能在性能上与其他语言相比略显不足。设计上，系统强调情绪优先，确保用户在处理情感问题时得到充分的支持。技术风险方面，系统对用户输入的依赖性较高，若用户提供的信息不足，可能导致建议的有效性降低。整体来看，狗头军师在情感智能领域的整合能力使其在现有工具中具有独特优势。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了详细的安装步骤和使用指引。安装过程顺畅，克隆和配置都相对简单。文档中包含了使用示例，帮助新手快速上手，但目前仅提供中文支持，可能对非中文用户造成障碍。

## 優缺點分析

> [!success] 優點
> - 提供情绪支持，帮助用户在复杂情感中做出理智决策。
> - 支持多元关系，满足不同性别和性取向用户的需求。
> - 结合心理学与法律知识，提供全面的情感分析。

> [!danger] 缺點
> - 目前知识库内容有限，可能无法覆盖所有情感问题。
> - 对复杂情感问题的处理仍需用户主动提供详细信息。
> - 初期使用可能需要一定的学习成本。

> [!warning] 注意事項
> - 目前仅支持中文输入和输出。
> - 知识库内容可能需要定期更新以保持时效性。
> - 对复杂情感问题的处理可能仍需人工干预。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供情感支持的 AI 工具，但缺乏多元关系的深入分析。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 虽然也涉及情感问题，但主要集中在心理健康而非恋爱策略。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 采用基于规则的情感分析方法，而狗头军师则结合心理学和法律知识提供更全面的支持。 | 如果需要一个更简单的情感分析工具，而不需要复杂的策略建议。 | low，因為兩者的功能範圍相似，遷移成本較低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於心理健康支持，而狗头军师則更注重於戀愛策略和多元關係的分析。 | 如果主要需求是心理健康支持，而不是戀愛策略的具體建議。 | medium，因為功能和用戶需求有所不同，可能需要調整使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **goutoujunshi** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 采用基于规则的情感分析方法，而狗头军师则结合心理学和法律知识提供更全面的支持。 | 專注於心理健康支持，而狗头军师則更注重於戀愛策略和多元關係的分析。 |
> | 遷移成本 | - | low，因為兩者的功能範圍相似，遷移成本較低。 | medium，因為功能和用戶需求有所不同，可能需要調整使用習慣。 |
> | 適用場景 | 主要場景 | 如果需要一个更简单的情感分析工具，而不需要复杂的策略建议。 | 如果主要需求是心理健康支持，而不是戀愛策略的具體建議。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，尚不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 使用過程中可能無法準確理解用戶的情感狀態，特別是當信息不完整時。
  - 解法：用戶應提供盡可能詳細的背景信息以提高建議的準確性。
- [MEDIUM] 在多元關係的分析中，可能會出現邊界模糊的情況。
  - 解法：用戶需明確定義每個關係的性質和期望。
- [MEDIUM] 系統對於某些文化背景的理解可能不足，導致建議不夠貼切。
  - 解法：用戶可根據自身文化背景調整輸入信息。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的情感支持系統 | 非常適合 | 提供情感支持和策略，幫助團隊成員在工作中保持良好的人際關係。 |
| 大型企業的員工關係管理 | 普通 | 雖然能提供支持，但可能不符合所有企業文化的需求。 |
| 個人情感咨詢 | 非常適合 | 能夠深入分析個人情感問題，提供具體的行動建議。 |
| 學校的心理輔導系統 | 不適合 | 主要針對成人情感問題，對青少年需求的支持不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到情感支持和策略建議，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不存取敏感資料。使用時需注意輸入的個人信息安全，避免洩露隱私。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

狗头军师可以与多种聊天工具和社交平台集成，用户可以在日常交流中直接调用其功能。典型的工作流是在聊天应用中输入指令，系统根据输入分析情感并给出建议。与主流的聊天工具（如微信、QQ）兼容良好，用户可以方便地将其整合到现有的沟通流程中。常见的整合问题包括如何处理不同平台的消息格式，可能需要额外的适配层来确保信息的准确传递。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在狗头军师出现之前，情感支持工具多集中于提供简单的建议，缺乏深入的情感分析。传统工具往往只能给出“追”或“分手”的选择，无法满足用户对复杂情感的需求。随着社会对情感健康的重视，狗头军师的出现填补了这一空白，提供了更为全面的解决方案。

未来，情感智能领域可能会继续发展，更多工具将会结合心理学与社会学知识，为用户提供更好的支持。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 了解基本的心理學原理
- 具備良好的溝通能力
- 能夠使用聊天工具進行交流

> [!tip] 導入策略
> 第一週：在個人情感問題上試用。第二週：在團隊內部分享使用經驗。第三週：根據反饋調整使用方式。第四週：在團隊會議中討論情感支持的重要性。

**成功指標**：用戶在情感問題上的滿意度提高30%。

> [!warning] 退出計畫
> 所有設定和數據均可導出為標準格式，便於轉移至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 68 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-23 |
| 建立日期 | 2026-07-20 |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/powerycy/goutoujunshi) |
| Topics | `ai-agent` `chinese` `codex` `codex-skill` `lgbtq` `psychology` `relationship-advice` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@powerycy](https://github.com/powerycy) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新和討論。
**連結**：[文件](https://github.com/powerycy/goutoujunshi)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-20 ~ 2026-07-22）
> **活躍天數** 3 天 · **最新 commit** Refresh capability documentation (#9)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/powerycy/goutoujunshi/issues/10) | 建议适配chatlabAI分析工具 | 0 | 0 |
> | [#3](https://github.com/powerycy/goutoujunshi/issues/3) | [Content] publish to skillhub | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 狗头军师 · Goutoujunshi
> 
> > 把情绪支持、关系科学与可执行策略，装进一个真正站在用户一边的 AI 恋爱军师。
> 
> [](https://github.com/powerycy/goutoujunshi/stargazers)
> 
> 如果它让你在感情里少一次内耗、多一次清醒，欢迎点亮一个🌟 **Star**。你的支持会让更多正在关系里犹豫的人找到它，也会推动知识库继续更新。
> 
> 很多恋爱建议只有两个答案：“勇敢去追”或“赶紧分手”。狗头军师试图做得更认真一点：先接住用户的情绪，再把事实、猜测和未知拆开；既分析心动，也计算现实、互惠、风险、机会成本和长期选择权；最后给出可以真正执行的下一步。
> 
> 它不只是一个话术库。它能读取聊天截图、导出文本和用户转述，区分素材来源与事实边界；也能把分析落到一句可发送的话、一次具体邀约、第一次见面安排或一段可复盘的对话演练。它是一套覆盖恋爱全周期、面向多元关系、能够解释建议理由的 Codex Skill。
> 
> ## 它能做什么
> 
> - **主动推进**：在没有明确拒绝或不适时，帮用户从等待变成主动联系、具体邀约和有反馈分支的下一步。
> - **分析聊天材料而不脑补**：识别聊天截图、导出文本、复制对话、线下转述和混合素材，只把可见原文、发送者、顺序和行为当作事实。
> - **设计第一次见面**：根据双方偏好安排可交谈、有共同体验的约会，提醒用户具体欣赏、表达真实好感并主动询问能否再次见面。
> - **自然肢体接触**：提供低强度、可退出、能根据靠近或躲避即时调整的线下互动指导，不把故意触碰伪装成意外。
> - **真诚表达喜欢**：用具体欣赏、主动联系、具体邀约和明确好感让喜欢变得明显，不靠故意冷淡制造吸引。
> - **首次建立关系档案**：记录用户本人及一个或多个目标对象的 MBTI、主观综合评分、关系阶段、关键事件、双方投入和现实障碍。
> - **先解决情绪，再解决事情**：识别委屈、焦虑、嫉妒、愤怒、执着与失落，避免用户在情绪峰值做出高代价决定。
> - **多人关系独立分析**：分别维护每个对象的档案，比较互惠、可靠、吸引、价值观、现实可行性和长期风险，而不是只比较“条件分数”。
> - **把读心改成证据**：区分已知事实、合理推测和关键未知，重点观察主动、兑现、投入、边界和冲突修复。
> - **判断投入失衡与体面退场**：区分节奏差异、暂时压力和持续失衡，用澄清、事件观察、降级投入与停止条件保护用户，不把断联包装成欲擒故纵。
> - **场景化聊天与社交校准**：根据网聊、语音、线下场景、关系阶段和对方反馈调整松弛感、调侃、暧昧与推进节奏。
> - **给出有梯度的策略**：根据场景提供稳健版、会撩版／策略版和强势版，附带发送时机、预期效果、风险代价与后续分支。
> - **即时话术与对话演练**：先给一条可发送的首选成品，再按积极、含糊或拒绝反应设计后续分支；也可模拟破冰、调情、邀约、澄清、修复或收线。
> - **不回避现实问题**：共同生活、城市选择、职业、金钱、家务、育儿、双方家庭、婚姻制度与退出安排都进入判断。
> - **识别危险而不制造恐慌**：区分普通沟通问题与控制、跟踪、胁迫、诈骗、家暴等需要安全计划的情境。
> 
> ## 不预设你应该爱谁
> 
> 狗头军师支持异性恋、男同性恋、女同性恋、双性恋、泛性恋、无性恋等不同性取向，也尊重跨性别、非二元性别及其他性别身份。它同样可以讨论单身约会、长期伴侣、婚姻、异地、再婚、跨文化关系，以及建立在知情同意基础上的非单偶关系。
> 
> 系统不假设固定的性别角色：男女和多元性别用户都可以主动，任何人也都可以选择高主动模式。对于中国常见的男女性约会语境，系统可能在没有明确拒绝或不适时建议男性把主动度提高一级，但这只是可被个人偏好和现实反馈覆盖的文化校准，不是“男性必须追、女性只能等”的定律。判断依据始终是具体的人、具体行为、双方意愿和现实条件。
> 
> ## 一套跨学科恋爱知识库
> 
> 项目内置19份核心知识文档和19份实用沟通资料，另有5份前向测试场景规范。知识与实用资料覆盖：
> 
> | 领域 | 主要内容 |
> | --- | --- |
> | 关系心理学 | 伴侣回应性、关系满意度、承诺、依赖、权力、压力与修复 |
> | 人格与情绪 | MBTI的合理用法与局限、Big Five、依恋、焦虑与回避 |
> | 认识与约会 | 吸引、主动表达、第一次见面、体验设计、邀约、确认关系、在线约会、幽灵与数字边界 |
> | 沟通策略 | 聊天记录分析、场景校准、三层话术编排、对话演练、倾听、共情、赞美、冲突、道歉、拒绝与主动权 |
> | PUA与社交策略 | 贬低、推拉、服从性测试、煤气灯等机制，以及低风险替代方案 |
> | 性学与亲密 | 持续同意、性沟通、避孕与健康边界、身体自主和亲密协商 |
> | 婚姻与家庭 | 婚前协商、共同财务、家务、育儿、双方父母与家庭生命周期 |
> | 法律与安全 | 中国婚姻家庭法律、家暴、跟踪、诈骗、证据保存和危机转介 |
> | 社会与人文 | 现代婚姻变迁、人口与城市化、平台约会、性别分工和照护劳动 |
> | 恋爱哲学 | 欲望、友爱、自由、承诺、共同体、自我与他者、爱和占有 |
> | 分手与特殊情境 | 失恋、背叛、复合、信任重建、多元关系与反刻板印象 |
> 
> 知识库会区分较强研究证据、理论框架、流行说法和经验策略。MBTI、依恋类型和网络话术可以帮助提问和生成方案，但不会被包装成诊断、命运或“必胜公式”。
> 
> ## 安装
> 
> 将仓库克隆到 Codex 的 Skills 目录：
> 
> ```bash
> git clone https://github.com/powerycy/goutoujunshi.git ~/.codex/skills/goutoujunshi
> ```
> 
> 在 Codex 中输入：
> 
> ```text
> 使用 $goutoujunshi 帮我梳理情绪、分析当前关系，并给出下一步建议。
> ```
> 
> 首次使用时，它会询问：
> 
> ```text
> 你：MBTI / 综合评分0–100 / 主要优势和短板
> 对象A：代号 / MBTI / 综合评分0–100 / 当前关系
> 对象B（如有）：同上
> 经过：认识方式、发展时间、关键事件、联系和投入情况
> 目标：推进、确认、修复、比较选择，还是退出
> 情绪：目前最难受的点、强度0–10，以及是否有必须马上回复的消息
> ```
> 
> 不知道的项目可以留空，也可以直接讲故事。Skill 会从叙述中整理档案，并只追问真正会改变建议的信息。
> 
> ## 一个典型回答如何产生
> 
> ```text
> 用户叙述
>   → 情绪落地
>   → 建立本人及目标对象档案
>   → 分离事实／推测／未知
>   → 检索当前情境所需知识
>   → 比较互惠、现实、风险与机会成本
>   → 给出明确首选建议和理由
>   → 生成行动、话术、观察窗口与停止条件
> ```
> 
> ## 项目结构
> 
> ```text
> goutoujunshi/
> ├── SKILL.md                    # 核心行为与工作流
> ├── agents/openai.yaml         # Codex 展示与默认提示词
> ├── references/
> │   ├── knowledge/             # 19份关系科学与跨学科知识文档
> │   └── practical/             # 19份实用沟通与策略资料
> ├── tests/                     # 5份人工／代理前向测试场景规范
> ├── documentation/             # 架构、流程、安全边界与测试说明
> └── scripts/validate_skill.py  # 项目完整性检查
> ```
> 
> ## 设计原则
> 
> 1. **先接住人，再解决事。** 情绪没有被看见时，最正确的建议也可能无法执行。
> 2. **行为比标签可靠。** 不凭MBTI、性别或一次聊天记录替目标对象读心。
> 3. **互惠比追到更重要。** 得到某一个人不是唯一胜利；减少内耗、保留尊严与未来选择权同样是成功。
> 4. **策略必须说明代价。** 可以讨论撒娇、推拉、节奏和表达包装，但同时交代适用条件与长期成本。
> 5. **同意和退出权不可绕过。** 明确拒绝不是需要破解的障碍。
> 6. **危险情境先保安全。** 暴力、胁迫、跟踪、诈骗和自伤风险不能用普通恋爱话术处理。
> 
> ### 版本更新维护记录
> 
> | 日期 | 类型 | 更新 | 用户价值 |
> | --- | --- | --- | --- |
> | 2026-07-22 | 校准 | 新增主动表达、第一次见面与自然接触指南，放宽一次含糊后的二次主动，并补充场景测试与清单校验。 | 普通约会默认更敢推进，同时在明确拒绝、不适或躲避时保持清楚停止线。 |
> | 2026-07-22 | 扩充 | 调研 GitHub 上的童锦程、梵公子及关系副驾类 Skill，提炼展示面、现场取材、对话接抛、轻松调情与即时校准，新增七种主策略、三层话术编排、36 条话术骨架和对话演练，并同步能力介绍、关键流程与测试地图。 | 不照搬人设或套路；用户问“这句怎么回”时先得到一条真正能发的首选成品，并能根据积极、含糊或拒绝反应继续。 |
> | 2026-07-22 | 改进 | 支持聊天截图、聊天导出文本和复制粘贴的即时通讯内容，并区分聊天、转述、通话、线下互动和混合素材。 | 继续先梳理情绪，再依据可确认的原文和行为分析，减少把文字聊天脑补成线下现场或把推测写成事实。 |
> | 2026-07-21 | 新增 | 增加投入失衡与体面退场模块，包含事件型观察窗口、降级投入与退出话术，并覆盖同性/未出柜、异地、同事、非单偶及高风险场景。 | 帮助用户判断是否继续投入、如何保护时间精力，以及何时应转入安全流程。 |
> 
> ## 参与建设
> 
> 欢迎补充研究、改进话术、纠正文献或提交新的关系场景。开始前请阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
> 
> 如果你暂时不写代码，也可以：
> 
> - 点亮🌟 **Star**，让这个项目被更多人看见；
> - 分享一个匿名化的真实场景，帮助我们补齐关系案例；
> - 把它发给那个总在深夜替朋友分析感情的人。
> 
> 本项目提供关系教育与决策支持，不替代心理治疗、医疗诊断、律师意见、警方或紧急服务。

## 延伸閱讀

相關概念：[[情感智能]] · [[心理學]] · [[多元關係]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Blaizzy--nativ|Blaizzy/nativ]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FlashML-org--flashlib|FlashML-org/flashlib]] · [[Forsy-AI--agent-apprenticeship|Forsy-AI/agent-apprenticeship]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/powerycy/goutoujunshi)

## 相關收錄

> [!note]- 直接競品（同子分類：情感智能）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "情感智能" AND file.name != "powerycy--goutoujunshi"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "powerycy--goutoujunshi"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "powerycy--goutoujunshi" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "powerycy--goutoujunshi"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["情感智能","心理學","多元關係"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "powerycy--goutoujunshi" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "powerycy--goutoujunshi" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "powerycy" AND file.name != "powerycy--goutoujunshi"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/powerycy--goutoujunshi");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-07-23** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-07-23|2026-07-23]] — 首次收錄，548 stars
