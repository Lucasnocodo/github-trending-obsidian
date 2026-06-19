---
repo: alchaincyf/loop-engineering-orange-book
url: https://github.com/alchaincyf/loop-engineering-orange-book
owner: alchaincyf
owner_type: User
language: N/A
license: NOASSERTION
description: "别再问我什么是 Loop Engineering — 橙皮书系列。A plain-language guide to loop engineering (中文 + English PDF). Free."
homepage: ""
stars: 672
stars_per_day: 224
forks: 57
open_issues: 0
created: 2026-06-15
pushed_at: 2026-06-15
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "其他"
subcategory: "AI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "提供一個清晰的 Loop Engineering 指導，幫助開發者設計自動化系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-22"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 5103
readme_length: 3898
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:672"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "loop-engineering-orange-book"
  - "alchaincyf/loop-engineering-orange-book"
  - "提供一個清晰的 Loop Engineering 指導，幫助開發者設計自動化系統。"
---

# loop-engineering-orange-book

**672** stars · **224** stars/天 · 建立 3 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> 提供一個清晰的 Loop Engineering 指導，幫助開發者設計自動化系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (224 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升 AI 開發自動化程度的開發者和產品經理。
> **一句話重點** 這本書不僅是理論的介紹，更是實作的指南，幫助開發者設計自動化的 AI 系統。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，獲得自動化設計的能力，值得一試。

> [!abstract] 核心創新
> 這本書提供了一個全新的視角，幫助開發者設計能夠自主運行的 AI 系統。

## 專案簡介

這本《橙皮書》專注於 Loop Engineering，旨在幫助開發者設計自動化系統，讓系統能夠自主運行，而不需要開發者逐步提示。核心流程是建立一個外部系統，這個系統能夠定時啟動、生成輔助工具、驗證工作並決定後續行動。這樣的設計讓開發者能夠專注於系統的架構，而不是每次都要手動操作。書中包含九個章節，涵蓋了 Loop Engineering 的定義、實作步驟及其成本分析，並提供實際案例幫助讀者理解如何應用這些概念。這本書的賣點在於其簡單易懂的語言，適合希望提升自動化程度的開發者。

技術上，Loop Engineering 的設計比 Harness Engineering 更進一步，後者主要聚焦於單一代理的運行，而前者則是整體系統的設計。與其他類似書籍相比，這本書不僅提供理論，還有實際的建議和步驟，讓讀者能夠立即開始實作。使用者在實作過程中可能會遇到驗證債務和認知衰退等問題，這些都是設計 Loop 時需要考量的因素。這本書的成熟度尚在初期，但對於希望在 AI 開發中提升效率的團隊來說，無疑是一本值得參考的資源。適合那些已經在使用 Claude Code 或 Codex 的開發者，並希望進一步提升自動化程度的使用者。

## 重點功能

- 簡明定義 — 清楚解釋 Loop Engineering 的概念和起源。
- 實作指南 — 提供如何設計和實作 Loop 的具體步驟。
- 案例分析 — 包含多個實際案例，幫助讀者理解 Loop 的應用。
- 成本分析 — 討論在實作 Loop 時可能面臨的各種成本。
- 雙語支持 — 提供中英文版本，方便不同語言的讀者使用。

## 快速開始

1. 下載 PDF
```bash
wget https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering橙皮书-v260615.pdf
```
2. 閱讀第一部分
```bash
開啟 PDF 並閱讀第一部分以了解 Loop Engineering 的定義。
```
3. 實作第一個 Loop
```bash
根據書中提供的步驟開始設計你的第一個 Loop。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 672 stars（224/天），forks 57（8.5%），顯示出強烈的社群興趣。這本書的作者 HuaShu 是知名的 AI 內容創作者，擁有超過 50 萬的追隨者，並且在 AI 工具的開發上有豐富的經驗。Loop Engineering 的概念在短時間內受到廣泛關注，因為它解決了開發者在使用 AI 代理時的痛點，特別是如何減少手動提示的需求。這本書的發表正值多位業界領袖對 Loop Engineering 的討論熱潮，進一步推動了其流行。

## 適合誰使用

**目標受眾**：希望提升 AI 開發自動化程度的開發者和產品經理。

> [!example] 使用場景
> - AI 開發者用它來設計自動化的工作流，因為這樣可以減少手動干預，提高效率。
> - 產品經理用它來理解如何優化團隊的 AI 工具使用，因為這能幫助他們更好地分配資源和時間。
> - 教育工作者用它來教導學生如何使用 Loop Engineering 的概念，因為這樣的知識對未來的 AI 開發至關重要。

## 架構分析

這本書的架構設計以簡單易懂為主，分為四個部分，涵蓋了 Loop Engineering 的定義、實作步驟、成本分析和實際案例。這樣的設計讓讀者能夠循序漸進地理解和實作 Loop Engineering。每個部分都針對特定主題進行深入探討，並提供實際的建議和步驟，讓讀者能夠立即開始實作。這種分層的架構設計使得內容不會過於冗長，讀者可以快速找到自己需要的資訊，並根據自己的需求進行實作。整體而言，這本書的架構設計旨在降低學習門檻，讓更多的開發者能夠輕鬆上手。

## 技術深入分析

這本書的核心技術機制在於 Loop Engineering 的概念，強調設計一個能夠自主運行的系統。這種設計模式使得開發者不再需要手動提示 AI 代理，而是通過設計外部系統來自動化這一過程。書中提到的實際案例，如 Addy Osmani 的早晨整理和 Stripe 的 Minions，展示了 Loop Engineering 在現實中的應用。這些案例不僅提供了實作的靈感，還幫助讀者理解在設計 Loop 時可能面臨的挑戰和成本。設計取捨方面，選擇 Loop Engineering 而非傳統的 Harness Engineering，能夠提高系統的自動化程度，但也需要考慮到驗證債務和認知衰退等問題。這本書的整體架構設計旨在降低學習門檻，讓讀者能夠快速上手，並在實作中獲得實際的經驗。整體而言，這本書是對 Loop Engineering 的全面介紹，適合希望提升 AI 開發效率的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供中英文版本，對於新手來說友好。安裝過程簡單，只需下載 PDF。雖然缺乏互動性，但內容結構合理，易於理解。

## 優缺點分析

> [!success] 優點
> - 內容簡明易懂，適合各種背景的讀者。
> - 提供實際案例，幫助讀者理解如何應用 Loop Engineering。
> - 雙語版本，方便不同語言的讀者使用。

> [!danger] 缺點
> - 缺乏互動性，僅提供靜態的 PDF 格式。
> - 可能需要額外的背景知識，對於新手來說有一定的學習曲線。
> - 內容更新速度可能跟不上快速變化的 AI 工具。

> [!warning] 注意事項
> - 目前僅提供 PDF 格式，缺乏其他格式的支持。
> - 內容更新速度可能跟不上 AI 工具的快速變化。
> - 對於完全沒有 AI 背景的讀者，可能需要額外的背景知識。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和實驗，不建議用於生產環境的核心系統。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 已經在使用 AI 工具的開發團隊 | 非常適合 | 這本書提供了提升自動化的具體方法和案例。 |
| 對 AI 工具完全不熟悉的初學者 | 不適合 | 需要一定的背景知識才能理解 Loop Engineering 的概念。 |
| 希望優化 AI 工作流的產品經理 | 適合 | 這本書提供了實用的建議，幫助他們設計更高效的工作流。 |
| 對 Loop Engineering 有興趣的研究者 | 非常適合 | 這本書深入探討了 Loop Engineering 的理論和實作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，獲得自動化設計的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本書不需要高權限，僅提供理論和實作指南，不存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這本書的內容可以與現有的 AI 工具和開發流程無縫整合，特別是對於已經在使用 Claude Code 或 Codex 的開發者。在典型的工作流中，讀者可以將 Loop Engineering 的概念應用於現有的 AI 工具，提升自動化程度。舉例來說，在一個使用 Claude Code 的專案中，開發者可以根據書中的指導設計一個 Loop，讓系統自動處理日常任務。整合過程中，讀者可能需要調整現有的工作流程，以適應 Loop Engineering 的設計理念。整體而言，這本書的內容對於希望提升 AI 工具使用效率的團隊來說，是一個有價值的資源。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Loop Engineering 出現之前，開發者主要依賴手動提示 AI 代理，這樣的方式效率低且容易出錯。隨著 AI 工具的進步，開發者開始尋求更高效的自動化解決方案。Loop Engineering 的興起正是基於這種需求，提供了一種全新的設計思路，讓開發者能夠設計出自主運行的系統。

這本書代表了 AI 工具發展的一個重要趨勢，未來可能會有更多類似的資源出現，幫助開發者更好地利用 AI 技術。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
| Forks | 57 |
| Open Issues | 0 |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-15 |
| Repo 大小 | 5.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/loop-engineering-orange-book) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，持續吸引讀者關注。
**連結**：[文件](https://www.huasheng.ai/orange-books)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-15）
> **活躍天數** 1 天 · **最新 commit** Loop Engineering Orange Book v260615

## README 摘錄

> [!info]- 展開查看原文 README
> **English** | [中文版 README](README_zh.md)
> 
>   
> 
> # Loop Engineering: Stop Asking Me What It Is
> 
> > 橙皮书 (Orange Book) Series · by HuaShu (花叔)
> 
> A plain-language field guide to **loop engineering** — the term that blew up in a single week of June 2026, when [Peter Steinberger](https://x.com/steipete/status/2063697162748260627), Boris Cherny (head of Claude Code at Anthropic), and Google's [Addy Osmani](https://addyosmani.com/blog/loop-engineering/) all pointed at the same shift and gave it a name.
> 
> The one-line version: **stop being the person who prompts the agent. Design the system that does it for you.**
> 
>   
>   
> 
> ## Download
> 
> | Edition | PDF |
> |---------|-----|
> | 中文版 (Chinese) | **[PDF Download](https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering橙皮书-v260615.pdf)** |
> | English | **[PDF Download](https://github.com/alchaincyf/loop-engineering-orange-book/raw/main/Loop-Engineering-The-Complete-Guide-v260615.pdf)** |
> 
> ## What This Book Covers
> 
> Loop engineering sits **one floor above the harness**. If harness engineering equips a single agent run — which tools it gets, what counts as "done" — loop engineering is the outer system that runs on a timer, spawns its own helpers, verifies the work, remembers what it did, and decides what to do next. You build it once and let it poke the agents instead of you.
> 
> If you've read the **Harness Engineering** Orange Book, this is the next floor up. It stands on its own — you don't need the previous one.
> 
> **9 sections across 4 parts:**
> 
> | Part | Content | Sections |
> |------|---------|----------|
> | 1. What It Is | The definition, the one-week origin story, and the prompt → context → harness → loop stack | §01–02 |
> | 2. How It Turns | The five moves of one loop, the six parts you build it from, and why an AI can't grade its own code | §03–05 |
> | 3. Where It Runs, What It Costs | Three real loops (Addy's morning triage, Stripe's Minions, the scheduling reality) and the four costs — verification debt, comprehension rot, token blowout, cognitive surrender | §06–07 |
> | 4. How You Start | Staying the engineer, and building your first loop today | §08–09 |
> 
>   
>   
> 
> ## Who Is This For
> 
> - Developers already using Claude Code / Codex / Cursor who still drive the agent prompt by prompt, and want to climb one level up
> - AI power users curious why "you shouldn't be prompting your agents anymore" went viral
> - Anyone who read the Harness Engineering Orange Book and wants the outer loop
> 
> All sources are public and first-hand: Addy Osmani's founding post, Anthropic's harness-design engineering blog, Stripe's Minions, and the official Claude Code / Codex docs.
> 
> ## 橙皮书 (Orange Book) Series
> 
> Part of the 橙皮书 series — free, practical guides on AI tools. Other titles include Claude Code, Harness Engineering, Agent Skills, OpenClaw, and more.
> 
> All books free to download: **[huasheng.ai/orange-books](https://www.huasheng.ai/orange-books)**
> 
> ## About the Author
> 
> **HuaShu (花叔)** · AI Native Coder · Indie Developer
> 
> An AI content creator with 500K+ followers across platforms. Built every product — including an App Store #1 paid iOS app — entirely with AI tools, never writing a line of code by hand. Open-sourced Nuwa.skill, huashu-design, and more.
> 
> - X/Twitter: [@AlchainHust](https://x.com/AlchainHust)
> - YouTube: [@Alchain](https://www.youtube.com/@Alchain)
> - Bilibili: [花叔v](https://space.bilibili.com/14097567/)
> - WeChat Official Account: 花叔
> - Website: [huasheng.ai](https://www.huasheng.ai/)
> 
> ## Version
> 
> - **v260615** — First edition, written the week loop engineering emerged (June 2026), based on Addy Osmani's founding post and the official Claude Code / Codex docs.
> - AI tools evolve fast — refer to each product's official documentation for the latest.
> 
> ## License
> 
> [MIT License](LICENSE) — free to use, copy, modify, and distribute, including commercially. Attribution appreciated but not required.

## 延伸閱讀

相關概念：[[自動化]] · [[AI 工具]] · [[系統設計]]

相關專案：[[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[XiaomiMiMo--MiMo-Code|XiaomiMiMo/MiMo-Code]]

[GitHub](https://github.com/alchaincyf/loop-engineering-orange-book)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "alchaincyf--loop-engineering-orange-book" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 工具","系統設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--loop-engineering-orange-book" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--loop-engineering-orange-book"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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
> const me = dv.page("Repos/alchaincyf--loop-engineering-orange-book");
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

> **2026-06-19** — 首次收錄
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

- [[2026-06-19|2026-06-19]] — 首次收錄，672 stars
