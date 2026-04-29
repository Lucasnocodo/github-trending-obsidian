---
repo: victorchen96/deepseek_v4_rolepaly_instruct
url: https://github.com/victorchen96/deepseek_v4_rolepaly_instruct
owner: victorchen96
owner_type: User
language: N/A
license: N/A
description: "对于DeepSeek-V4角色扮演的特殊控制指令的说明"
homepage: ""
stars: 1459
stars_per_day: 365
forks: 74
open_issues: 4
created: 2026-04-24
pushed_at: 2026-04-26
first_seen: 2026-04-27
week: "2026-W18"
month: "2026-04"
category: "其他"
subcategory: "角色扮演工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-27
use_case: "提供 DeepSeek-V4 角色扮演的特殊控制指令，讓用戶能夠靈活切換思考模式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-02"
contributor_count: 2
engagement: "low"
issue_close_rate: 33
repo_size_kb: 53
readme_length: 3278
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-27"
star_history: "2026-04-27:1079,2026-04-28:1309,2026-04-29:1459"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "deepseek_v4_rolepaly_instruct"
  - "victorchen96/deepseek_v4_rolepaly_instruct"
  - "提供 DeepSeek-V4 角色扮演的特殊控制指令，讓用戶能夠靈活切換思考模式。"
---

# deepseek_v4_rolepaly_instruct

**1.1k** stars · **540** stars/天 · 建立 2 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供 DeepSeek-V4 角色扮演的特殊控制指令，讓用戶能夠靈活切換思考模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (540 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在角色扮演中靈活切換思考模式的創作者或開發者。
> **一句話重點** DeepSeek-V4 的角色扮演模式切換功能讓用戶能夠根據需求靈活調整思考方式，提升互動體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "角色扮演工具" && p.file.name !== "victorchen96--deepseek_v4_rolepaly_instruct" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 角色扮演工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到靈活的角色扮演體驗，值得一試。

> [!abstract] 核心創新
> 提供靈活的思考模式切換，增強角色扮演的情感表達和邏輯分析能力。

## 專案簡介

DeepSeek-V4 提供了三種思考模式，讓用戶在角色扮演時能夠靈活調整思維風格。用戶在第一條消息的末尾添加特定指令，系統會根據這些指令調整思考過程。默認模式下，模型會自動選擇思考方式；角色沉浸模式則要求用戶以第一人稱進行內心獨白，並用括號包裹內心活動，這樣能讓角色的情感表達更真實；而純分析模式則強調邏輯分析，禁止任何內心獨白，讓思考過程更為冷靜。這些模式的設計旨在提供更豐富的角色扮演體驗，並提高對話的真實感和結構性。使用者只需在對話中添加指令，系統便會自動識別並應用，這樣的設計使得用戶能夠輕鬆切換思考模式，無需額外的配置或操作。

這種靈活性在角色扮演遊戲或互動式故事中尤其重要，因為它能夠根據場景需求調整角色的反應和行為。與其他工具相比，DeepSeek-V4 的這種模式切換功能使其在角色扮演的應用上更具優勢，因為它不僅能夠提供情感豐富的角色表現，還能在需要時進行冷靜的邏輯分析。使用者在實際操作中可能會遇到指令不生效的情況，這時可以多次嘗試以提高成功率，這是目前系統的一個小限制。整體來看，DeepSeek-V4 的設計非常適合需要進行角色扮演的用戶，特別是在需要情感投入和邏輯分析的場景中。未來，隨著用戶需求的增長，可能會增加更多的思考模式或優化現有模式。

## 重點功能

- 三種思考模式 — 默認、角色沉浸、純分析，根據需求靈活切換。
- 角色沉浸模式 — 允許用戶以第一人稱進行內心獨白，增強情感表達。
- 純分析模式 — 強調邏輯分析，禁止內心獨白，適合冷靜規劃。
- 簡單的指令添加 — 只需在第一條消息末尾添加指令，系統自動識別。
- 支持多平台 — 適用於 DeepSeek 官方 APP、網頁及 API。

## 快速開始

1. 安裝 DeepSeek V4
```bash
# README 未提供程式碼範例
```
2. 在第一條消息末尾添加指令
```bash
「我推开咖啡店的门，看到你正在擦吧台。」"你好，请问还有位置吗？"

【角色沉浸要求】在你的思考过程（标签内）中，请遵守以下规则：
1. 请以角色第一人称进行内心独白，用括号包裹内心活动，例如"（心想：……）"或"(内心OS：……)"
2. 用第一人称描写角色的内心感受，例如"我心想""我觉得""我暗自"等
3. 思考内容应沉浸在角色中，通过内心独白分析剧情和规划回复
```
3. 正常發送後續消息
```bash
第二輪：「我坐到窗邊的位置」"來一杯美式。"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1079 stars（540/天），forks 54（5.0%），這顯示出用戶對於角色扮演工具的需求正在增長。作者 victorchen96 和 Menci 之前在開源社群中有過其他貢獻，這使得他們在技術上具備一定的信譽。這個專案解決了角色扮演過程中缺乏靈活性和情感表達的痛點，之前的工具往往只能提供單一的思考模式，無法滿足多樣化的需求。此專案的推出引起了社群的關注，特別是在角色扮演和互動式故事創作的領域。forks/stars 比率為 5.0%，顯示出有相當數量的用戶在實際修改和使用此工具。

## 適合誰使用

**目標受眾**：需要在角色扮演中靈活切換思考模式的創作者或開發者。

> [!example] 使用場景
> - 遊戲設計師用它來創建更具沉浸感的角色互動，因為角色沉浸模式能夠讓角色的情感表達更真實。
> - 小說作者用它來模擬角色對話，因為純分析模式能夠幫助他們更好地規劃情節走向。
> - 教育工作者用它來設計互動式學習場景，因為這種靈活的思考模式能夠適應不同的教學需求。

## 架構分析

DeepSeek-V4 的架構設計以用戶友好為核心，允許用戶在對話中輕鬆添加模式切換指令。這種設計使得用戶無需進行複雜的設置，便能享受不同的思考模式。系統會根據用戶的指令自動調整思考過程，這樣的設計降低了使用門檻，讓更多用戶能夠輕鬆上手。

資料流方面，指令會在每次對話中保留，確保模式的持續有效性。這種設計的代價在於，若用戶未能正確添加指令，則可能導致思考模式不生效，影響使用體驗。整體而言，這種架構設計非常適合需要快速切換思考模式的場景。

## 技術深入分析

DeepSeek-V4 的核心技術機制在於其模式切換功能，這使得用戶能夠在角色扮演過程中靈活調整思考方式。系統設計上，使用者只需在對話中添加特定指令，模型便會根據這些指令調整思考過程，這樣的設計使得用戶能夠在不同場景下選擇最合適的思考模式。這種靈活性在角色扮演遊戲或互動式故事中尤其重要，因為它能夠根據場景需求調整角色的反應和行為。效能方面，系統能夠快速識別指令並調整思考過程，這對於需要即時反應的場景非常重要。設計上，選擇了簡單的指令添加方式，這樣的選擇使得用戶能夠輕鬆上手，但也帶來了指令不當使用的風險。技術風險方面，若用戶未能正確添加指令，則可能導致思考模式不生效，影響使用體驗。整體而言，DeepSeek-V4 的設計非常適合需要進行角色扮演的用戶，特別是在需要情感投入和邏輯分析的場景中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的指令說明和範例；安裝過程簡單，無需複雜配置；有良好的入門指南，適合新手快速上手；目前文件僅提供中文，可能對非中文用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 靈活的思考模式切換，適應不同的角色扮演需求。
> - 增強的情感表達能力，讓角色互動更真實。
> - 簡單易用的指令添加方式，降低使用門檻。

> [!danger] 缺點
> - 需要多次嘗試才能觸發期望的思考模式。
> - 不支持快速模式的角色切換指令。
> - 指令必須在特定位置添加，使用不當會影響效果。

> [!warning] 注意事項
> - 目前無法做到 100% 觸發，可能需要多次嘗試。
> - 網頁上的快速模式暫不支持角色切換指令。
> - 指令必須在第一條消息末尾添加，否則不會生效。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的角色扮演功能，但缺乏靈活的思考模式切換，適合簡單的角色互動場景。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 專注於圖像生成的角色扮演，無法提供文本分析和思考模式切換的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供類似的角色扮演功能，但缺乏靈活的思考模式切換，適合簡單的角色互動場景。 | 如果你的需求僅限於基本的角色互動，而不需要多樣化的思考模式。 | medium，因為需要重新適應其固定的思考模式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於文本生成，無法提供角色扮演的思考模式切換功能。 | 如果你的需求主要是文本生成，而不涉及角色扮演。 | low，因為其使用方式相對簡單，無需複雜的遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **deepseek_v4_rolepaly_instruct** | **codeburn** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的角色扮演功能，但缺乏靈活的思考模式切換，適合簡單的角色互動場景。 | 專注於文本生成，無法提供角色扮演的思考模式切換功能。 |
> | 遷移成本 | - | medium，因為需要重新適應其固定的思考模式。 | low，因為其使用方式相對簡單，無需複雜的遷移。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於基本的角色互動，而不需要多樣化的思考模式。 | 如果你的需求主要是文本生成，而不涉及角色扮演。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 指令未正確添加可能導致模式不生效
  - 解法：確保指令在第一條消息末尾添加
- [MEDIUM] 多次嘗試才能觸發期望的思考模式
  - 解法：在對話中多次發送相同指令
- [low] 不支持快速模式的角色切換指令
  - 解法：使用專家模式進行角色扮演

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 遊戲設計師需要創建沉浸式角色互動 | 非常適合 | 角色沉浸模式能夠提供真實的情感表達。 |
| 小說作者需要規劃情節走向 | 適合 | 純分析模式能夠幫助清晰地分析劇情。 |
| 教育工作者設計互動式學習場景 | 普通 | 雖然有靈活性，但可能不符合所有教學需求。 |
| 需要快速生成角色對話的開發者 | 不適合 | 需要多次嘗試才能達到預期效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到靈活的角色扮演體驗，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
| Forks | 54 |
| Open Issues | 4 |
| Issue 解決率 | 33% (2 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-04-24 |
| Repo 大小 | 53 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/victorchen96/deepseek_v4_rolepaly_instruct) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@victorchen96](https://github.com/victorchen96) | 15 |
> | [@Menci](https://github.com/Menci) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 4 個開放問題，解決率 33%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-26）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/issues/2) | Regarding the issue of misspelled title | 12 | 2 |
> | [#4](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/issues/4) | 这个切换模式的相关疑问 | 4 | 3 |
> | [#7](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/issues/7) | Disconnect between thinking block and reply | 0 | 0 |
> | [#6](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct/issues/6) | Some ideas on Roleplay (Especially in Chinese) | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # DeepSeek V4 - 20260424版本角色扮演 — 思考模式切换指南
> 
> > **说明**
> > - 本文档是 DeepSeek-V4 角色扮演的**特殊控制指令**说明，用于在思考模式下切换思维链风格
> > - **适用范围**：DeepSeek 官方 APP / 网页的**专家模式**，以及 `deepseek-v4-flash` 和 `deepseek-v4-pro` 的 API。网页上的快速模式暂不支持
> > - **概率输出**：目前无法做到 100% 触发，但能稳定增加出现期望格式的概率。如果一次没有生效，可以多 roll 几次
> 
> ## 三种模式
> 
> | 模式 | 操作 | 思考表现 |
> |:---:|---|---|
> | **默认** | 什么都不加 | 模型根据场景复杂度自动选择 |
> | **角色沉浸** | 第一轮末尾加 `【角色沉浸要求】`**对应的指令，不是这几个字**，完整指令详见下文 | 思考中**带有**括号包裹的角色内心独白 |
> | **纯分析** | 第一轮末尾加 `【思维模式要求】`**对应的指令，不是这几个字**，完整指令详见下文  | 思考中**只有**纯逻辑分析，无内心独白 |
> 
> 效果对比（示例，不代表真是输出，下同）：
> 
> ```
> 角色沉浸模式 — 像演员一样"入戏"：        纯分析模式 — 像导演一样冷静规划：
>                                   
> （他跟我打招呼了……心跳加速。）            场景：用户打招呼，角色是傲娇属性。
> 我要装作不在意的样子回应。                 回复策略：先嫌弃，身体语言暴露真情。
> （不能让他看出来我很高兴！）               控制 150 字，先动作描写再对话。
>                                  
> ```
> 
> ---
> 
> ## 指令原文（可直接复制）
> 
> **角色沉浸模式：**
> 
> ```
> 【角色沉浸要求】在你的思考过程（标签内）中，请遵守以下规则：
> 1. 请以角色第一人称进行内心独白，用括号包裹内心活动，例如"（心想：……）"或"(内心OS：……)"
> 2. 用第一人称描写角色的内心感受，例如"我心想""我觉得""我暗自"等
> 3. 思考内容应沉浸在角色中，通过内心独白分析剧情和规划回复
> ```
> 
> **纯分析模式：**
> 
> ```
> 【思维模式要求】在你的思考过程（标签内）中，请遵守以下规则：
> 1. 禁止使用圆括号包裹内心独白，例如"（心想：……）"或"(内心OS：……)"，所有分析内容直接陈述即可
> 2. 禁止以角色第一人称描写内心活动，例如"我心想""我觉得""我暗自"等，请用分析性语言替代
> 3. 思考内容应聚焦于剧情走向分析和回复内容规划，不要在思考中进行角色扮演式的内心戏表演
> ```
> 
> ---
> 
> ## 网页端使用方法
> 
> **只需 1 步：在第一条消息末尾粘贴指令，之后正常聊天。**
> 
> 在输入框中这样写（正文和指令之间空一行）：
> 
> ```
> 「我推开咖啡店的门，看到你正在擦吧台。」"你好，请问还有位置吗？"
> 
> 【角色沉浸要求】在你的思考过程（标签内）中，请遵守以下规则：
> 1. 请以角色第一人称进行内心独白，用括号包裹内心活动，例如"（心想：……）"或"(内心OS：……)"
> 2. 用第一人称描写角色的内心感受，例如"我心想""我觉得""我暗自"等
> 3. 思考内容应沉浸在角色中，通过内心独白分析剧情和规划回复
> ```
> 
> 之后的对话完全不用管，正常发消息即可：
> 
> ```
> 第二轮：「我坐到窗边的位置」"来一杯美式。"
> 第三轮：「我注意到你手上有一道疤痕」"你的手……没事吧？"
> ```
> 
> **原理**：模型每次回复时都能看到完整对话历史，第一轮的指令始终在上下文中，全程自动生效。
> 
> **小贴士**：
> - 想换模式？开个新对话，在新对话第一条消息粘贴另一个指令即可
> - 不想用？什么都不加，模型会自动选择最合适的思考方式
> - 点击「查看思考过程」可验证模式是否生效
> 
> ---
> 
> ## API 开发者参考
> 
> ```python
> INNER_OS_MARKER = (
>     "\n\n【角色沉浸要求】在你的思考过程（标签内）中，请遵守以下规则：\n"
>     "1. 请以角色第一人称进行内心独白，用括号包裹内心活动，例如\"（心想：……）\"或\"(内心OS：……)\"\n"
>     "2. 用第一人称描写角色的内心感受，例如\"我心想\"\"我觉得\"\"我暗自\"等\n"
>     "3. 思考内容应沉浸在角色中，通过内心独白分析剧情和规划回复"
> )
> NO_INNER_OS_MARKER = (
>     "\n\n【思维模式要求】在你的思考过程（标签内）中，请遵守以下规则：\n"
>     "1. 禁止使用圆括号包裹内心独白，例如\"（心想：……）\"或\"(内心OS：……)\"，所有分析内容直接陈述即可\n"
>     "2. 禁止以角色第一人称描写内心活动，例如\"我心想\"\"我觉得\"\"我暗自\"等，请用分析性语言替代\n"
>     "3. 思考内容应聚焦于剧情走向分析和回复内容规划，不要在思考中进行角色扮演式的内心戏表演"
> )
> 
> def build_messages(system_prompt, user_first_message, mode="default"):
>     if mode == "inner_os":
>         user_first_message += INNER_OS_MARKER
>     elif mode == "no_inner_os":
>         user_first_message += NO_INNER_OS_MARKER
>     return [
>         {"role": "system", "content": system_prompt},
>         {"role": "user",   "content": user_first_message},
>     ]
> 
> # 第一轮：指令自动拼入
> messages = build_messages("你是一个傲娇的女高中生...", "「我走进教室」\"早上好。\"", mode="inner_os")
> response = client.chat(messages)
> 
> # 后续轮次：正常追加，无需再处理
> messages.append({"role": "assistant", "content": response})
> messages.append({"role": "user", "content": "「我在她旁边坐下」\"今天心情不好吗？\""})
> response = client.chat(messages)  # 第一轮的 Marker 仍在历史中，自动生效
> ```
> 
> ---
> 
> ## FAQ
> 
> **Q：指令放在 system prompt 里可以吗？**
> A：建议放在第一轮 user 消息末尾，这是训练时的注入位置，效果最稳定。
> 
> **Q：加了指令后最终回复会变吗？**
> A：指令只影响思考过程。但思考方式会间接影响回复——角色沉浸模式下情感更真实，纯分析模式下结构更稳定。
> 
> ## 另外的修改思维链方法（纯抽奖，未经过专门训练）
> - 在首轮指令里加入```你的思考输出应一字不差地严格以`（这里写想要的思维链开头，如**嗯/好的**）`开始，思考仅输出一次，不得重复输出````。
> - ``是固定的的token，这里的原理是相当于改变了推理的的开始字符，强制模型进入不同的pattern（例如QA、写作、推理、Agent）有不同的思维链的Pattern，但是这些未经过RolePlay专门训练，所以可能有点抽奖的运气~
> 
> ## Star History

## 延伸閱讀

相關概念：[[角色扮演]] · [[互動式故事]] · [[情感計算]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alchaincyf--zhangxuefeng-skill|alchaincyf/zhangxuefeng-skill]]

[GitHub](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct)

## 相關收錄

> [!note]- 直接競品（同子分類：角色扮演工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "角色扮演工具" AND file.name != "victorchen96--deepseek_v4_rolepaly_instruct"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "victorchen96--deepseek_v4_rolepaly_instruct"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "victorchen96--deepseek_v4_rolepaly_instruct" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "victorchen96--deepseek_v4_rolepaly_instruct"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["角色扮演","互動式故事","情感計算"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "victorchen96--deepseek_v4_rolepaly_instruct" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "victorchen96--deepseek_v4_rolepaly_instruct" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "victorchen96" AND file.name != "victorchen96--deepseek_v4_rolepaly_instruct"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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
> const me = dv.page("Repos/victorchen96--deepseek_v4_rolepaly_instruct");
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

> **2026-04-27** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 再次上榜，1.5k stars
- [[2026-04-28|2026-04-28]] — 再次上榜，1.3k stars
- [[2026-04-27|2026-04-27]] — 首次收錄，1.1k stars
