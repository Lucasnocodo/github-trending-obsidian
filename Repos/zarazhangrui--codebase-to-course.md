---
repo: zarazhangrui/codebase-to-course
url: https://github.com/zarazhangrui/codebase-to-course
owner: zarazhangrui
owner_type: User
language: N/A
license: N/A
description: "A Claude Code skill that turns any codebase into a beautiful, interactive single-page HTML course for non-technical vibe coders."
homepage: ""
stars: 2297
stars_per_day: 383
forks: 205
open_issues: 5
created: 2026-03-22
pushed_at: 2026-03-24
first_seen: 2026-03-25
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "教學資源"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-25
use_case: "將任何代碼庫轉換為美觀的互動式單頁 HTML 課程，讓非技術背景的使用者也能理解代碼運作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-01"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 51
readme_length: 3751
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-25"
star_history: "2026-03-25:1094,2026-03-26:1511,2026-03-27:1750,2026-03-28:2069,2026-03-29:2297"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "codebase-to-course"
  - "zarazhangrui/codebase-to-course"
  - "將任何代碼庫轉換為美觀的互動式單頁 HTML 課程，讓非技術背景的使用者也能理解代碼運作。"
---

# codebase-to-course

**1.1k** stars · **547** stars/天 · 建立 2 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> 將任何代碼庫轉換為美觀的互動式單頁 HTML 課程，讓非技術背景的使用者也能理解代碼運作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (547 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望快速學習代碼運作但沒有技術背景的非技術人員。
> **一句話重點** 這個專案讓非技術人員能夠以互動方式學習代碼，打破了傳統學習的障礙。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "教學資源" && p.file.name !== "zarazhangrui--codebase-to-course" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 教學資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案的創新在於將代碼庫轉換為互動式課程，讓非技術背景的使用者能夠以視覺化的方式理解代碼運作。

## 專案簡介

這個專案的核心機制是將代碼庫轉換為一個互動式的單頁 HTML 課程，使用者只需將代碼庫指向專案，便能獲得一個包含滾動式模組、動畫視覺化、嵌入式測驗和代碼與平易近人翻譯的課程。這樣的設計讓使用者能夠在實際使用應用程式的過程中學習代碼的運作，而不是單純地依賴傳統的教學方式。關鍵指令包括將 `codebase-to-course` 資料夾複製到 `~/.claude/skills/`，然後在 Claude Code 中發出指令來生成課程。這個工具的賣點在於它能夠幫助非技術背景的使用者更好地理解代碼，並在使用 AI 編碼工具時做出更明智的決策。技術上，它使用了 HTML 和 CSS 來創建無需依賴的單一文件，並且設計上強調視覺化和互動性，這樣的選擇使得學習過程更加直觀和吸引人。與傳統的教學工具相比，這個專案不僅提供了代碼的翻譯，還通過互動式測驗來檢驗學習效果，這樣的方式能夠更有效地促進學習。

實際使用中，這個工具的效能取決於代碼庫的複雜性，對於小型專案來說，生成的課程效果會更好。社群的活躍度不高，因為目前沒有開放的問題追蹤，這可能會影響未來的維護和更新。總體來看，這是一個相對成熟的專案，適合希望快速學習代碼運作的使用者，但對於需要深入技術細節的開發者來說，可能會感到不足。適合的使用情境包括想要了解開源專案運作的非技術人員，或是需要為團隊提供代碼教育的管理者。相對於其他教學工具，這個專案的優勢在於其互動性和視覺化設計，能夠讓學習者在實際操作中獲得知識，而不是單純依賴於理論。

## 重點功能

- 互動式課程生成 — 只需指向代碼庫，生成包含滾動式模組和動畫視覺化的單頁 HTML 課程。
- 代碼與平易近人翻譯 — 左側顯示實際代碼，右側顯示其意義，幫助使用者理解代碼背後的邏輯。
- 嵌入式互動測驗 — 測驗內容專注於應用而非死記，提升學習者的實際操作能力。
- 視覺化設計 — 每個頁面至少 50% 是視覺內容，減少文字量，提升學習的直觀性。
- 無需依賴的單一 HTML 文件 — 課程可離線使用，方便學習者隨時隨地訪問。

## 快速開始

1. 將資料夾複製到 Claude 的技能目錄
```bash
cp -r codebase-to-course ~/.claude/skills/
```
2. 在 Claude Code 中打開專案
```bash
open <your_project>
```
3. 發出生成課程的指令
```bash
Say: 'Turn this codebase into an interactive course'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1094 stars（547/天），forks 98（9.0%），這顯示出強烈的使用者興趣。作者 Zara 在 AI 編碼工具領域有一定的經驗，這個專案解決了非技術人員在理解代碼時的痛點，讓他們能夠以更直觀的方式學習。此專案的推出可能受到社群對於簡化編碼學習的需求影響。Stars 和 forks 的比例顯示出使用者不僅在觀望，還有實際的使用和修改需求。

## 適合誰使用

**目標受眾**：希望快速學習代碼運作但沒有技術背景的非技術人員。

> [!example] 使用場景
> - 非技術背景的創業者用它來快速了解開源專案的運作，因為這樣能夠更有效地與技術團隊溝通，避免因為技術術語而感到困惑。
> - 產品經理用它來生成互動式課程，幫助團隊成員理解代碼背後的邏輯，因為這樣能夠提升團隊的整體技術素養。
> - 學生用它來學習代碼運作，因為這種視覺化和互動式的學習方式比傳統的教學方法更容易吸收。

## 架構分析

這個專案的架構設計強調單一 HTML 文件的生成，這樣的選擇使得使用者無需安裝任何依賴即可離線使用。資料流方面，使用者將代碼庫指向專案，系統則自動生成包含各種互動元素的課程。這種設計的好處在於簡化了使用流程，但可能在處理大型代碼庫時造成性能瓶頸，因為所有內容都需要在單一文件中呈現。整體來說，這樣的架構適合小型專案，但對於大型專案的適應性需要進一步測試。

## 技術深入分析

這個專案的核心技術機制在於將代碼庫轉換為一個互動式的單頁 HTML 課程，這涉及到將代碼與平易近人的翻譯結合，並通過動畫視覺化來提升學習體驗。雖然 README 中沒有提供具體的技術棧，但從功能上看，這個專案可能依賴於基本的 HTML 和 CSS 來實現視覺效果。效能方面，生成的課程會受到代碼庫大小的影響，對於小型專案來說，生成速度快且效果佳，但對於大型專案則可能出現性能瓶頸。設計上，這個專案選擇了無需依賴的單一文件架構，這樣的選擇使得使用者可以輕鬆訪問課程，但在處理複雜的代碼庫時，可能會導致生成內容的複雜性增加。技術風險方面，這個專案在未來可能會面臨大型代碼庫支持不足的問題，並且對於不同編程語言的支持也需要進一步擴展。整合分析方面，這個專案的整合難度相對較低，因為它是基於 HTML 的單一文件，與現有的網頁技術兼容性良好，但在與其他工具鏈的整合上可能會遇到一些摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且具體，提供了詳細的使用指導和範例。安裝過程相對順暢，沒有明顯的坑。文件中缺乏多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 互動式學習方式，提升學習者的參與感和理解力。
> - 無需依賴的單一文件設計，方便離線使用。
> - 視覺化內容使得學習過程更直觀，減少學習障礙。

> [!danger] 缺點
> - 僅限於 Claude Code 環境，無法在其他平台使用。
> - 對於大型代碼庫的支持有限，可能影響生成效果。
> - 缺乏多語言支持，限制了使用者的選擇。

> [!warning] 注意事項
> - 目前僅支援 Claude Code 環境，無法在其他 IDE 中使用。
> - 對於大型代碼庫，生成的課程可能會過於複雜，影響學習效果。
> - 不支援多語言代碼庫，僅限於單一語言的代碼轉換。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
| Forks | 98 |
| Open Issues | 0 |
| 最後推送 | 2026-03-24 |
| 建立日期 | 2026-03-22 |
| Repo 大小 | 51 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zarazhangrui/codebase-to-course) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zarazhangrui](https://github.com/zarazhangrui) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度不高，無開放的問題追蹤。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-24）
> **活躍天數** 3 天 · **最新 commit** Make group chat and data flow animations mandatory in every course

## README 摘錄

> [!info]- 展開查看原文 README
> # Codebase to Course
> 
> A Claude Code skill that turns any codebase into a beautiful, interactive single-page HTML course.
> 
> Point it at a repo. Get back a stunning, self-contained course that teaches how the code works — with scroll-based navigation, animated visualizations, embedded quizzes, and code-with-plain-English side-by-side translations.
> 
> ## Who is this for?
> 
> **"Vibe coders"** — people who build software by instructing AI coding tools in natural language, without a traditional CS education.
> 
> You've built something (or found something cool on GitHub). It works. But you don't really understand *how* it works under the hood. This skill generates a course that teaches you — not by lecturing, but by tracing what happens when you actually use the app.
> 
> **Your goals are practical, not academic:**
> - Steer AI coding tools better (make smarter architectural decisions)
> - Detect when AI is wrong (spot hallucinations, catch bad patterns)
> - Debug when AI gets stuck (break out of bug loops)
> - Talk to engineers without feeling lost
> 
> You're not trying to become a software engineer. You want coding as a superpower.
> 
> ## What the course looks like
> 
> The output is a **single HTML file** — no dependencies, no setup, works offline. It includes:
> 
> - **Scroll-based modules** with progress tracking and keyboard navigation
> - **Code ↔ Plain English translations** — real code on the left, what it means on the right
> 
> - **Animated visualizations** — data flow animations, group chat between components, architecture diagrams
> 
> - **Interactive quizzes** that test *application* not memorization ("You want to add favorites — which files change?")
> 
> - **Glossary tooltips** — hover any technical term for a plain-English definition
> 
>   
> - **Warm, distinctive design** — not the typical purple-gradient AI look
> 
> ## How to use
> 
> ### As a Claude Code skill
> 
> 1. Copy the `codebase-to-course` folder into `~/.claude/skills/`
> 2. Open any project in Claude Code
> 3. Say: *"Turn this codebase into an interactive course"*
> 
> ### Trigger phrases
> 
> - "Turn this into a course"
> - "Explain this codebase interactively"
> - "Make a course from this project"
> - "Teach me how this code works"
> - "Interactive tutorial from this code"
> 
> ## Design philosophy
> 
> ### Build first, understand later
> 
> This inverts traditional CS education. The old way: memorize concepts for years → eventually build something → finally see the point (most people quit before step 3). This way: **build something → experience it working → now understand how it works.**
> 
> ### Show, don't tell
> 
> Every screen is at least 50% visual. Max 2-3 sentences per text block. If something can be a diagram, animation, or interactive element — it shouldn't be a paragraph.
> 
> ### Quizzes test doing, not knowing
> 
> No "What does API stand for?" Instead: "A user reports stale data after switching pages. Where would you look first?" Quizzes test whether you can *use* what you learned to solve a new problem.
> 
> ### No recycled metaphors
> 
> Each concept gets a metaphor that fits *that specific idea*. A database is a library with a card catalog. Auth is a bouncer checking IDs. API rate limiting is a nightclub with a capacity limit. Never the same metaphor twice.
> 
> ### Original code only
> 
> Code snippets are exact copies from the real codebase — never modified or simplified. The learner should be able to open the actual file and see the same code they learned from.
> 
> ## Skill structure
> 
> ```
> codebase-to-course/
> ├── SKILL.md                          # Main skill instructions
> └── references/
>     ├── design-system.md              # CSS tokens, typography, colors, layout
>     └── interactive-elements.md       # Quiz, animation, and visualization patterns
> ```
> 
> ---
> 
> Built by [Zara](https://x.com/zarazhangrui) with Claude Code.

## 延伸閱讀

相關概念：[[教學資源]] · [[互動式學習]] · [[視覺化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/zarazhangrui/codebase-to-course)

## 相關收錄

> [!note]- 直接競品（同子分類：教學資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "教學資源" AND file.name != "zarazhangrui--codebase-to-course"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zarazhangrui--codebase-to-course"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "zarazhangrui--codebase-to-course" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "zarazhangrui--codebase-to-course"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["教學資源","互動式學習","視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zarazhangrui--codebase-to-course" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zarazhangrui--codebase-to-course" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zarazhangrui" AND file.name != "zarazhangrui--codebase-to-course"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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
> const me = dv.page("Repos/zarazhangrui--codebase-to-course");
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

> **2026-03-25** — 首次收錄
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

- [[2026-03-29|2026-03-29]] — 再次上榜，2.3k stars
- [[2026-03-28|2026-03-28]] — 再次上榜，2.1k stars
- [[2026-03-27|2026-03-27]] — 再次上榜，1.8k stars
- [[2026-03-26|2026-03-26]] — 再次上榜，1.5k stars
- [[2026-03-25|2026-03-25]] — 首次收錄，1.1k stars
