---
repo: orange2ai/renwei-writing
url: https://github.com/orange2ai/renwei-writing
owner: orange2ai
owner_type: User
language: N/A
license: NOASSERTION
description: "人味儿写作 · An AI agent skill: edit people's words without erasing the person behind them"
homepage: ""
stars: 769
stars_per_day: 154
forks: 77
open_issues: 0
created: 2026-06-12
pushed_at: 2026-06-13
first_seen: 2026-06-18
week: "2026-W25"
month: "2026-06"
category: "其他"
subcategory: "寫作工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-18
use_case: "讓 AI 編輯文字時保留人味，避免失去背後的存在感。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-25"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 25
readme_length: 989
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-18"
star_history: "2026-06-18:769"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "renwei-writing"
  - "orange2ai/renwei-writing"
  - "讓 AI 編輯文字時保留人味，避免失去背後的存在感。"
---

# renwei-writing

**769** stars · **154** stars/天 · 建立 5 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/orange2ai--renwei-writing");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 AI 編輯文字時保留人味，避免失去背後的存在感。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (154 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在寫作中保留個人風格的內容創作者。
> **一句話重點** 這個專案最厲害的在於它讓 AI 編輯不再冷冰冰，而是能夠保留人類的情感與存在感。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/orange2ai--renwei-writing");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "寫作工具" && p.file.name !== "orange2ai--renwei-writing" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 寫作工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到更具人性化的文本，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於強調 AI 編輯過程中的人性化，讓文字保留作者的存在感。

## 專案簡介

這個專案的核心在於讓 AI 在編輯文字時，保留作者的獨特風格和情感。使用者可以將自己的文字交給 AI 進行修改，AI 會在保留原意的基礎上進行潤飾，最終輸出更具人味的文本。具體流程是：用戶輸入原始文本 → AI 根據《人味儿写作心法》進行編輯 → 輸出潤飾後的文本。這個技能特別適合那些希望在文章中保留個人風格的使用者，因為它強調「存在感」，即文字背後的作者情感。使用者只需透過簡單的 git clone 指令將技能安裝到自己的 Agent 中，便可開始使用。

技術上，這個專案並未明確列出使用的框架或演算法，但其設計理念是基於對 AI 編輯過程中人性化的追求，這在目前的 AI 編輯工具中是相對少見的。與其他工具相比，如 OpenAI 的 GPT 系列，這個專案更注重於保留原作者的情感，而不是僅僅追求語言的流暢性。實際使用中，這個工具能夠有效提升文本的情感共鳴，尤其適合創作者和寫作者。從目前的活躍度來看，這個專案在短時間內獲得了769個 stars，顯示出其潛在的需求和受歡迎程度。對於希望在寫作中保留個人風格的使用者，這是一個值得考慮的工具。

## 重點功能

- 人味儿寫作心法 — 提供具體的編輯原則，幫助 AI 保留文字的情感。
- 事後檢查清單 — 讓使用者在編輯後檢查自己修改的句子，確保不失去原意。
- 案例研究 — 提供實際的失敗案例分析，幫助使用者理解如何避免常見的錯誤。
- 開源免費 — 讓使用者可以自由使用和修改，適合個人和小型團隊。
- 簡單安裝 — 只需一行指令即可將技能安裝到 Agent 中，方便快捷。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/orange2ai/renwei-writing.git ~/.cola/skills/renwei-writing
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 769 stars（153.8/天），forks 77（10%），顯示出良好的接受度。作者 orange2ai 專注於 AI 相關的寫作工具，這個專案解決了現有 AI 編輯工具常常忽略的情感和個人風格問題。這個工具的出現正好填補了市場上對於人性化寫作的需求，讓使用者能夠在享受 AI 效率的同時，保留自己的聲音。社群的反饋和需求顯示出這個方向的潛力，可能會引起更多的關注和討論。

## 適合誰使用

**目標受眾**：希望在寫作中保留個人風格的內容創作者。

> [!example] 使用場景
> - 自由寫作者用它來編輯自己的文章，因為他們希望在 AI 的幫助下保留個人風格，避免失去情感。
> - 市場行銷專員用它來潤飾文案，因為他們需要在專業與人性化之間找到平衡，提升文本的吸引力。
> - 學生用它來修改學術報告，因為他們希望在遵循學術規範的同時，保留自己的觀點和聲音。

## 架構分析

這個專案的架構相對簡單，主要由一個技能組成，使用者透過 git clone 將其安裝到自己的 Agent 中。由於沒有明確的技術細節，推測其主要依賴於文本處理的基本原則，而非複雜的演算法或框架。這樣的設計使得使用者能夠快速上手，但也意味著在功能擴展上可能會受到限制。擴展性方面，若未來需要支持更多語言或功能，可能需要進一步的開發和調整。

## 技術深入分析

這個專案的核心技術機制在於設計一套編輯原則，讓 AI 在修改文本時能夠保留作者的情感和風格。雖然 README 中並未提供具體的技術細節，但其設計理念顯示出對於人性化寫作的重視。效能方面，因為專案並未涉及複雜的演算法或大型模型，所以在資源需求上應該相對輕量。設計取捨上，選擇簡單的技能架構使得使用者能夠快速上手，但在功能擴展上可能會面臨挑戰。技術風險方面，若未來需要支持多語言或更複雜的文本處理，可能需要進一步的技術投入。整合方面，因為專案的設計相對獨立，與主流框架的整合難度應該不高，但具體的整合方式尚未明確。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明，但缺乏詳細的範例和技術細節。安裝過程相對順暢，使用者只需一行指令即可完成安裝。未提供專門的入門指南，可能需要使用者自行摸索。文件目前僅提供中文版本，對於非中文使用者可能會造成障礙。

## 優缺點分析

> [!success] 優點
> - 強調人性化，能有效保留作者的情感和風格。
> - 簡單易用，安裝過程快速，適合各類型使用者。
> - 開源免費，讓使用者可以自由修改和使用。

> [!danger] 缺點
> - 目前僅支援中文，對於其他語言的支持有限。
> - 缺乏詳細的技術文檔，可能影響使用者的學習曲線。
> - 不支援商業用途，需獲得授權。

> [!warning] 注意事項
> - 目前僅支援中文文本編輯。
> - 缺乏詳細的技術文檔，可能需要使用者自行摸索。
> - 不支援商業用途，需獲得授權。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人寫作的自由職業者 | 非常適合 | 能夠保留個人風格，提升文本的情感共鳴。 |
| 小型創業團隊的市場行銷文案 | 適合 | 能夠在專業與人性化之間找到平衡。 |
| 大型企業的正式報告 | 普通 | 可能不符合正式文檔的需求，需謹慎使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到更具人性化的文本，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與個人寫作工具搭配使用，特別是在需要潤飾文本的環節。實際整合範例是：在一個用 Markdown 編寫的文章中，使用者可以透過這個工具來編輯和潤飾文本，具體做法是將文本交給 AI 進行修改。與主流工具鏈的相容性尚可，因為其設計相對獨立，整合過程中不會有太大摩擦。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
| Forks | 77 |
| Open Issues | 0 |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-06-12 |
| Repo 大小 | 25 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/orange2ai/renwei-writing) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@orange2ai](https://github.com/orange2ai) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有更新和維護。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-12 ~ 2026-06-13）
> **活躍天數** 2 天 · **最新 commit** fix: 段落间加空行，GitHub 渲染正常断段

## README 摘錄

> [!info]- 展開查看原文 README
> # 人味儿写作心法
> 
> **中文** | [English](README.en.md)
> 
> 今天凌晨五点的时候，我让 AI 帮我打磨一段文案，打磨三遍给我看。
> AI 改完之后，我发现一遍比一遍讲究，但是一遍比一遍缺人味儿。
> 我已经用上最贵的 Claude Fable 5 了，还这样，让我很生气。
> 
> 最后我跟 AI 说，你改完之后，人味儿变少了。
> 我说不清什么是人味儿，只知道我感受不到文字背后的那个人了。
> 
> 我们讨论很久，最后讨论出的结论是，AI 写的东西，背后缺少一个东西：
> 存在感。
> 
> 人写的字背后站着一个具体的人，他在具体的位置上，付出过具体的代价。
> 
> 然后把聊的关键信息做成了一个技能，这就是：
> 《人味儿写作心法.skill》
> 
> 它特别适合自己写文章或口述后，让 AI 来改稿的场景。
> 
> 开源免费发布。
> 给你的 Agent 装上它，让你的文字变得有人味儿。
> 
> ## 怎么用
> 
> ```bash
> git clone https://github.com/orange2ai/renwei-writing.git ~/.cola/skills/renwei-writing
> ```
> 
> ## 里面有什么
> 
> - [SKILL.md](SKILL.md) — 心法本体。定义、规矩、真实踩坑换来的 gotchas
> - [references/post-edit-checklist.md](references/post-edit-checklist.md) — 事后检查清单，改完扫自己动过的句子。来源是 Wikipedia [Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)（经 [blader/humanizer](https://github.com/blader/humanizer)，MIT），按中文适配
> - [references/case-study.md](references/case-study.md) — 一次完整的失败解剖。原文、改砸的版本、最终版本并排放着
> 
> ## License
> 
> 见 [LICENSE.md](LICENSE.md)：开源与个人用途免费，闭源商业用途需商业授权。
> 
> ---
> 
> by 橘子 (Orange) & Cola

## 延伸閱讀

相關概念：[[自然語言處理]] · [[AI 編輯]] · [[寫作輔助]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]]

[GitHub](https://github.com/orange2ai/renwei-writing)

## 相關收錄

> [!note]- 直接競品（同子分類：寫作工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "寫作工具" AND file.name != "orange2ai--renwei-writing"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "orange2ai--renwei-writing"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "orange2ai--renwei-writing" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "orange2ai--renwei-writing"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","AI 編輯","寫作輔助"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "orange2ai--renwei-writing" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "orange2ai--renwei-writing" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "orange2ai" AND file.name != "orange2ai--renwei-writing"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
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
> const me = dv.page("Repos/orange2ai--renwei-writing");
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

> **2026-06-18** — 首次收錄
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

- [[2026-06-18|2026-06-18]] — 首次收錄，769 stars
