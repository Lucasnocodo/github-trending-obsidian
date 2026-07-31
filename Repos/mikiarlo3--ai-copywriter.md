---
repo: mikiarlo3/ai-copywriter
url: https://github.com/mikiarlo3/ai-copywriter
owner: mikiarlo3
owner_type: User
language: Python
license: MIT
description: "An AI copywriter that uses real copywriting skills + real marketing knowledge with human tone."
homepage: ""
stars: 989
stars_per_day: 165
forks: 23
open_issues: 2
created: 2026-07-24
pushed_at: 2026-07-25
first_seen: 2026-07-26
week: "2026-W31"
month: "2026-07"
category: "其他"
subcategory: "文案生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-26
use_case: "結合真實文案寫作技巧與市場知識的 AI 文案工具，能夠生成具有吸引力的文案。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-08-07"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 207
readme_length: 9962
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-26"
star_history: "2026-07-26:621,2026-07-26:622,2026-07-27:863,2026-07-28:941,2026-07-29:995,2026-07-30:1048,2026-07-31:989"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "ai-copywriter"
  - "mikiarlo3/ai-copywriter"
  - "結合真實文案寫作技巧與市場知識的 AI 文案工具，能夠生成具有吸引力的文案。"
---

# ai-copywriter

**622** stars · **622** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> 結合真實文案寫作技巧與市場知識的 AI 文案工具，能夠生成具有吸引力的文案。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (622 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高質量文案的市場營銷團隊或創業者。
> **一句話重點** 這個專案的獨特之處在於它將文案寫作的情感理解與生成技術結合，讓文案更具吸引力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "文案生成" && p.file.name !== "mikiarlo3--ai-copywriter" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 文案生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成高質量文案的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案最核心的創新點是將文案寫作與人性化處理結合在一起，生成更具吸引力的內容。

## 專案簡介

這個專案的核心機制是通過理解讀者的情感來生成文案，並消除 AI 生成文本的痕跡。使用者提供產品信息和目標受眾，工具會生成多個文案選項，例如標題和描述，並根據讀者的情感來調整語氣和內容。這種方法的賣點在於它不僅僅是簡單的文本生成，而是將文案寫作和人性化處理結合在一起，讓生成的內容更具吸引力和可讀性。使用者可以通過 CLI 指令 `npx skills add mikiarlo3/ai-copywriter --global` 安裝此工具，並在各種支持的環境中使用。技術上，它基於 `blader/humanizer`，利用 33 種可檢測的 AI 寫作模式來優化生成的文本。這個工具的優勢在於它能夠生成具體且可檢查的文案，避免了常見的模糊和無效的表達。

與其他文案生成工具相比，這個工具更注重讀者的情感反應，而不是僅僅關注產品本身的特性。它不會隨意創造產品事實，而是要求使用者提供具體數據，這樣生成的文案更具真實性。使用者在實際操作中可能會發現，這個工具的學習曲線相對平緩，因為它的設計理念與人類寫作方式相似，能夠快速上手。這個專案目前處於初期階段，社群活躍度尚可，但仍需觀察未來的發展潛力。對於需要快速生成高質量文案的市場營銷團隊來說，這是一個值得考慮的工具。

**技術棧**：`Python`

## 重點功能

- 情感導向的文案生成 — 根據讀者的情感生成文案，提升吸引力。
- 消除 AI 痕跡 — 生成的文本不顯示 AI 生成的特徵，更具人性化。
- 多樣化的文案選擇 — 提供多個標題和描述選項，便於選擇最佳版本。
- 簡單的 CLI 安裝 — 使用 `npx skills add mikiarlo3/ai-copywriter --global` 指令輕鬆安裝。
- 基於真實數據的生成 — 不隨意創造產品事實，要求使用者提供具體數據。

## 快速開始

1. 全域安裝文案生成工具
```bash
npx skills add mikiarlo3/ai-copywriter --global
```
2. 更新已安裝的文案生成工具
```bash
npx skills update ai-copywriter --global
```
3. 在支持的代理環境中安裝
```bash
npx skills add mikiarlo3/ai-copywriter --global --agent '*'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 622 stars（622/天），forks 7（1.1%），這顯示出初期的強烈興趣。作者 Mickey Haslavsky 以其在文案和市場營銷領域的專業知識為基礎，提供了一個解決文案生成過程中常見問題的工具。這個工具的出現正好填補了市場上對於高質量、具人性化的文案生成工具的需求。社群對此工具的反響可能來自於其獨特的寫作方法和對讀者情感的重視，這在目前的 AI 文案工具中並不常見。

## 適合誰使用

**目標受眾**：需要快速生成高質量文案的市場營銷團隊或創業者。

> [!example] 使用場景
> - 市場營銷專員用它來生成針對特定受眾的廣告文案，因為它能夠根據讀者的情感生成更具吸引力的內容。
> - 初創企業的創始人用它來撰寫產品介紹，因為它能夠快速生成多個版本，幫助他們找到最佳的表達方式。
> - 內容編輯用它來優化網站的元描述，因為它能夠生成具體且可檢查的文案，提升網站的點擊率。

## 架構分析

這個專案採用單一 Markdown 文件作為運行時工件，因為這樣可以實現零依賴的安裝和使用。資料流方面，使用者提供產品信息和目標受眾，工具根據這些信息生成文案。這種設計使得工具易於整合到現有的工作流程中，並且可以在各種支持的環境中運行。選擇 Markdown 格式的代價是需要使用者熟悉這種格式，但這也使得工具的使用變得靈活且便捷。擴展性方面，由於依賴於 Markdown，未來的功能擴展可能需要考慮如何保持與現有功能的兼容性。

## 技術深入分析

這個專案的核心技術機制在於情感導向的文案生成，使用者提供的產品信息和目標受眾是生成文案的基礎。它利用了 `blader/humanizer` 的 33 種可檢測模式來優化文本，這些模式幫助識別和消除 AI 生成的痕跡。效能方面，該工具能夠快速生成多個文案選項，並且由於其基於 Markdown 的設計，能夠在各種環境中運行，這使得它的運用範圍相當廣泛。設計取捨方面，選擇 Markdown 格式使得安裝和使用變得簡單，但可能對不熟悉該格式的使用者造成一定的學習成本。技術風險方面，依賴於使用者提供的具體數據，若數據不準確或不完整，生成的文案可能無法達到預期效果。整合方面，由於其簡單的 CLI 安裝和 Markdown 文件格式，與現有的工作流整合難度較低，適合快速上手的團隊使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並且有具體的範例。安裝過程順暢，無明顯的坑。文件中缺乏多語言支持，主要以英文為主。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 生成的文案更具人性化，能夠吸引讀者注意。
> - 簡單的安裝過程，無需複雜的配置。
> - 支持多種文案類型的生成，靈活性高。

> [!danger] 缺點
> - 對於複雜產品可能需要額外的上下文信息。
> - 生成的文案可能仍需人工調整以符合品牌語調。
> - 目前社群活躍度尚可，未來發展仍需觀察。

> [!warning] 注意事項
> - 目前僅支援 Markdown 格式的輸入和輸出。
> - 對於複雜的產品描述，可能需要額外的上下文信息。
> - 在某些情況下，生成的文案仍需人工調整以符合品牌語調。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更廣泛的代理功能，但不專注於文案生成。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理協作，但缺乏針對文案的專業化處理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於自動化文案生成，但不具備情感導向的特性。 | 如果需要一個更簡單的文案生成工具，而不考慮情感因素。 | medium，因為需要重新調整生成邏輯以符合新工具的特性。 |
| [AlexandrosGounis/pdfx](https://github.com/AlexandrosGounis/pdfx) | 提供 PDF 文件的文案生成，但缺乏針對特定受眾的情感分析。 | 如果主要需求是針對 PDF 文件進行文案生成，而不需要情感導向。 | low，因為主要是文案格式的轉換，邏輯相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ai-copywriter** | **boneyard** | **pdfx** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化文案生成，但不具備情感導向的特性。 | 提供 PDF 文件的文案生成，但缺乏針對特定受眾的情感分析。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯以符合新工具的特性。 | low，因為主要是文案格式的轉換，邏輯相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要一個更簡單的文案生成工具，而不考慮情感因素。 | 如果主要需求是針對 PDF 文件進行文案生成，而不需要情感導 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的文案可能不符合品牌語調，需人工調整
  - 解法：在使用前提供明確的品牌指導和範例
- **[HIGH]** 對於複雜產品描述可能需要額外的上下文信息
  - 解法：在輸入時提供詳細的產品背景和受眾信息
- [low] 社群活躍度尚可，未來發展仍需觀察
  - 解法：定期檢查 GitHub 頁面以獲取最新更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的市場推廣 | 非常適合 | 能夠快速生成高質量的文案，提升市場推廣效率。 |
| 大型企業的品牌文案撰寫 | 普通 | 可能需要更多的品牌調整和上下文信息。 |
| 個人自由職業者的文案需求 | 適合 | 能夠快速生成多個版本，便於選擇最佳表達。 |
| 需要長期穩定的文案生成工具 | 不適合 | 目前處於 alpha 階段，穩定性和支持度尚需觀察。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成高質量文案的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
| Forks | 7 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-25 |
| 建立日期 | 2026-07-24 |
| Repo 大小 | 207 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mikiarlo3/ai-copywriter) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@claude](https://github.com/claude) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，需觀察未來發展潛力。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-24 ~ 2026-07-25）
> **活躍天數** 2 天 · **最新 commit** Add strategic blog writer template (v1.6.0)

## README 摘錄

> [!info]- 展開查看原文 README
> # AI Copywriter
> 
> by [Mickey Haslavsky](https://github.com/mikiarlo3)
> 
> A portable agent skill that does the two halves of the copy job most tools split apart: it writes copy that earns attention (clickbait titles, short descriptions, microcopy, subject lines), and it strips out every sign of AI-generated writing so the result reads like a person wrote it. It is plain Markdown, so it runs in any harness that supports skill-style instructions.
> 
> It is built on [blader's Humanizer](https://github.com/blader/humanizer), which packaged Wikipedia's "Signs of AI writing" guide into 33 detectable, fixable patterns. Those 33 patterns are all still here, unchanged. What this skill adds is the other direction: not just cleaning up prose after the fact, but writing headlines, product blurbs, and button labels that convert without tripping a single one of those patterns.
> 
> The copywriting method comes from [enso.bot/research](https://enso.bot/research), where the enso team studies how to communicate through marketing in the best possible way. The short version of what that research keeps finding: copy works when it starts from the feeling of the person on the other end and explains the concept in the simplest possible words. This skill is that finding, made operational.
> 
> 
> ## Installation
> 
> 
> ## Usage
> 
> 
> ## Example: same product, both modes
> 
> Say you hand it a note-taking app for lawyers and ask for launch copy.
> 
> **What a raw model produces:**
> 
> > 🚀 Introducing CaseNotes: The Ultimate Game-Changing Solution for Legal Professionals! Unlock unprecedented productivity, elevate your practice, and revolutionize the way you capture, organize, and leverage your case notes — all in one seamless, intuitive platform.
> 
> **What this skill produces:**
> 
> > Reader: a lawyer at 7pm who just spent twenty minutes hunting through legal pads for one line from a deposition. Feeling: that specific frustration, plus fatigue from every app that promised to fix it. Simplest explanation of the product: you type notes, and later you can find any line by searching.
> >
> > Headline options:
> > 1. "Your case notes, searchable before you're back at your desk"
> > 2. "Stop losing billable hours to notes you can't find"
> > 3. "The note app that knows what a deposition is"
> >
> > Pick: #2. She's not dreaming about better software, she's mad about tonight's wasted twenty minutes, and #2 names that exact frustration in her own units (billable hours).
> >
> > Meta description (148 chars): "CaseNotes turns your hearing and deposition notes into a searchable case file. Find any quote, date, or exhibit in seconds, from any device."
> >
> > Empty state: "Add your first case to start taking notes." (A new user doesn't need selling here; they need to know the one next step.)
> 
> The second version sells harder than the first. It just doesn't sound like a press release fed through a blender, and every choice traces back to how the reader feels in that moment.
> 
> 
> ## Why both jobs in one skill
> 
> Ask a model for a headline and you get "Unlock the Ultimate Guide to Revolutionize Your Workflow." Ask it to tone that down and you get something so flat nobody clicks it. The two failure modes come from the same place: the model is thinking about the product and its adjectives, not about the reader and their half-second of attention.
> 
> Copy that works is specific. "We cut our AWS bill by $40,000 in one afternoon" gets the click because the promise is concrete and checkable. "Game-changing cloud savings" gets scrolled past because the reader's filter deleted it before it registered. The humanizer rules aren't a constraint on the copywriting; they're most of what makes it good.
> 
> The skill also refuses to invent product facts. If the strongest headline needs a number, the number has to come from you. It will ask rather than make one up.
> 
> 
> ## How it thinks
> 
> A really good copywriter is not thinking about the product. They are thinking about the person on the other end. That is the core of the communication research at [enso.bot/research](https://enso.bot/research), and it is how this skill works: before writing a single word, it answers two questions.
> 
> **What is that person feeling at the exact moment the line reaches them?** Not the demographic, the person in the moment. A headline reaches someone mid-scroll, half a second from gone. An error message reaches someone whose task just broke and who might be blaming themselves. An empty state reaches someone new who is quietly worried they're doing it wrong. A subject line reaches someone deleting on reflex. The feeling decides the tone, the length, and what comes first: a frustrated person needs the fix in the first three words; a skeptical person needs proof before adjectives. If the skill doesn't know the feeling, it asks you who the reader is and what just happened to them.
> 
> **What is the simplest way to explain this?** If the product can't be described in the words you'd use across a kitchen table, it isn't understood well enough to sell yet, and the skill will keep asking what it actually does until it can. Simple means short, common words, one thought per sentence, and nothing the reader has to look up or reread. The reader never does any work. The writer does all of it.
> 
> To get those answers, the skill interviews before it writes. It asks for three things up front (in one batch, skipping whatever you already told it): the ICP (who exactly this is for, down to what they'd type into a search box at 11pm), the category (the mental shelf the reader files you on, which decides who you're compared against), and the story (the real moment behind the copy, with real numbers). Then it pressure-tests the story before drafting: is there a surprising number, a moment it almost failed, a belief that turned out wrong, something you'd tell at dinner unprompted? If not, it keeps digging with you until a true story that's also interesting shows up, because writing from a weak story produces generic copy no craft can save.
> 
> And it doesn't stop at filled-in fields. If what it knows about the ICP wouldn't surprise a colleague, if it can't tell what's table stakes in your category versus what would raise an eyebrow, if it can't write the reader's 11pm search query word for word, it comes back with follow-ups ("What do they complain about, in the words they'd use?", "What claim would nobody else in the category dare to make?") instead of writing around the gap. Answers that are present but generic get questioned just as proactively as answers that are missing.
> 
> Every variant it produces is an answer to those two questions, and when it recommends one, the reason is the reader's feeling, never "this one is punchier."
> 
> 
> ### Skills CLI
> 
> Install globally with the cross-agent skills CLI so the skill is available in every project:
> 
> ```bash
> npx skills add mikiarlo3/ai-copywriter --global
> ```
> 
> Update an existing install:
> 
> ```bash
> npx skills update ai-copywriter --global
> ```
> 
> To install globally into every supported agent harness:
> 
> ```bash
> npx skills add mikiarlo3/ai-copywriter --global --agent '*'
> ```
> 
> Omit `--global` for a project-local install that can be committed and shared with collaborators. Start a new agent session or reload skills after installation.
> 
> 
> ### Claude Code plugin
> 
> Claude Code users can also install it as a plugin:
> 
> ```
> /plugin marketplace add mikiarlo3/ai-copywriter
> /plugin install ai-copywriter@ai-copywriter
> ```
> 
> The skill is then invoked as `/ai-copywriter:ai-copywriter`.
> 
> 
> ### Manual
> 
> Any agent harness can use the skill directly because the runtime artifact is `SKILL.md`. Install it wherever your harness expects skill directories:
> 
> ```bash
> git clone https://github.com/mikiarlo3/ai-copywriter.git /path/to/your/skills/ai-copywriter
> ```
> 
> 
> ## Using it with ChatGPT, Manus, and other AI tools
> 
> The whole skill is one Markdown file with no code or dependencies, so any LLM that accepts text can run it. The pattern is always the same: get the contents of [`SKILL.md`](SKILL.md) in front of the model, tell it to fol

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Blueturboguy07--cue|Blueturboguy07/cue]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[GordenSun--GordenSuperPPTSkills|GordenSun/GordenSuperPPTSkills]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]]

[GitHub](https://github.com/mikiarlo3/ai-copywriter)

## 相關收錄

> [!note]- 直接競品（同子分類：文案生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "文案生成" AND file.name != "mikiarlo3--ai-copywriter"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "mikiarlo3--ai-copywriter"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "mikiarlo3--ai-copywriter" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "mikiarlo3--ai-copywriter"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","機器學習","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mikiarlo3--ai-copywriter" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mikiarlo3--ai-copywriter" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mikiarlo3" AND file.name != "mikiarlo3--ai-copywriter"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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
> const me = dv.page("Repos/mikiarlo3--ai-copywriter");
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

> **2026-07-26** — 首次收錄
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

- [[2026-07-31|2026-07-31]] — 再次上榜，989 stars
- [[2026-07-30|2026-07-30]] — 再次上榜，1.0k stars
- [[2026-07-29|2026-07-29]] — 再次上榜，995 stars
- [[2026-07-28|2026-07-28]] — 再次上榜，941 stars
- [[2026-07-27|2026-07-27]] — 再次上榜，863 stars
- [[2026-07-26|2026-07-26]] — 首次收錄，621 stars
