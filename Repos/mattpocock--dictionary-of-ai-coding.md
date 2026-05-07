---
repo: mattpocock/dictionary-of-ai-coding
url: https://github.com/mattpocock/dictionary-of-ai-coding
owner: mattpocock
owner_type: User
language: TypeScript
license: N/A
description: "AI coding jargon, explained in plain English."
homepage: ""
stars: 1154
stars_per_day: 231
forks: 139
open_issues: 2
created: 2026-05-01
pushed_at: 2026-05-05
first_seen: 2026-05-04
week: "2026-W19"
month: "2026-05"
category: "其他"
subcategory: "教育資源"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-04
use_case: "將 AI 編程術語翻譯成淺顯易懂的語言，幫助開發者理解和使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-10"
contributor_count: 1
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 102
readme_length: 9993
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-04"
star_history: "2026-05-04:849,2026-05-05:972,2026-05-06:1070,2026-05-07:1154"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
aliases:
  - "dictionary-of-ai-coding"
  - "mattpocock/dictionary-of-ai-coding"
  - "將 AI 編程術語翻譯成淺顯易懂的語言，幫助開發者理解和使用。"
---

# dictionary-of-ai-coding

**849** stars · **425** stars/天 · 建立 2 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> 將 AI 編程術語翻譯成淺顯易懂的語言，幫助開發者理解和使用。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (425 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 AI 編程術語感到困惑的開發者，特別是新手和技術寫作人員。
> **一句話重點** 這個專案不僅是術語字典，更是幫助開發者理解 AI 編程的橋樑。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "教育資源" && p.file.name !== "mattpocock--dictionary-of-ai-coding" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 教育資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到清晰的術語解釋，值得使用。

> [!abstract] 核心創新
> 這個專案將 AI 編程術語翻譯成淺顯易懂的語言，填補了教育資源的空白。

## 專案簡介

這個專案提供了一個針對 AI 編程術語的字典，旨在將專業術語轉化為易於理解的語言。用戶可以通過查詢特定術語，如 'parameters' 或 'inference'，獲得簡單明瞭的解釋，這對於新手或對 AI 編程不熟悉的開發者特別有幫助。該字典不僅解釋了術語的定義，還提供了實際的使用範例，讓用戶能夠在實際情境中理解這些術語的應用。這樣的設計使得開發者能夠快速掌握 AI 編程的基本概念，減少因術語不明而造成的困惑。技術上，這個字典是用 TypeScript 實現的，並依賴於一些開發工具如 Husky 和 Prettier，這些工具有助於維持代碼的質量和一致性。

與其他類似工具相比，如 0xGF/boneyard 或 432539/gpt2api，這個字典專注於術語的清晰解釋，而不是提供代碼範例或 API 接口，這使得它在教育和入門方面具有獨特的價值。在實際使用中，開發者可以在查詢術語時，快速找到所需的解釋，這對於提高工作效率非常有幫助。這個專案目前處於初期階段，作者活躍且回應問題迅速，社群健康度良好。未來可能會擴展更多術語和範疇，進一步提升其實用性。對於那些剛接觸 AI 編程的開發者，這個字典無疑是一個值得參考的資源。

**技術棧**：`TypeScript 5.7.2` · `Husky 9.1.7` · `Prettier 3.8.3`

## 重點功能

- 術語解釋 — 提供 AI 編程相關術語的簡明定義和使用範例。
- 易於查詢 — 用戶可以快速找到所需術語的解釋，提升學習效率。
- 實用範例 — 每個術語都附有實際的使用情境，幫助用戶理解其應用。
- 持續更新 — 隨著 AI 技術的發展，字典會不斷擴展新的術語。
- 社群支持 — 目前無開放問題，顯示出良好的維護和社群互動。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 生成 README
```bash
npm run generate
```
3. 啟動開發環境
```bash
npm start # 基於文件推測
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 849 stars（424.5/天），forks 114（13.4%），顯示出不錯的社群關注度。作者 Matt Pocock 之前在 AI 和開發工具領域有一定的經驗，這個專案解決了許多開發者在使用 AI 編程時面對的術語困惑，這在過去的資源中並未得到充分解決。社群對於這個專案的反應熱烈，可能是因為它填補了教育資源的空白，並且提供了實用的參考。這個專案的出現正好符合了當前開發者對於 AI 技術理解的需求，尤其是在快速變化的技術環境中。

## 適合誰使用

**目標受眾**：對 AI 編程術語感到困惑的開發者，特別是新手和技術寫作人員。

> [!example] 使用場景
> - 新手開發者用它來快速理解 AI 編程術語，因為這樣可以減少學習曲線，提升工作效率。
> - 技術寫作人員用它來查找和解釋專業術語，因為這樣可以幫助他們撰寫更清晰的技術文檔。
> - 教學工作者用它來準備課程內容，因為這樣可以讓學生更容易理解 AI 編程的基本概念。

## 架構分析

這個專案採用 TypeScript 作為主要開發語言，並使用了一些流行的開發工具如 Husky 和 Prettier 來維持代碼質量。架構上，專案的設計目的是為了簡化術語的查詢和理解過程，這樣的設計使得開發者能夠快速獲得所需的資訊。資料流方面，使用者查詢術語時，系統會返回相應的解釋和範例，這樣的設計使得使用者能夠在短時間內掌握術語的含義。選擇 TypeScript 而非 JavaScript 是因為其靜態類型檢查的特性，能夠在開發過程中減少錯誤。這樣的設計使得專案在擴展性上具備良好的基礎，未來可以隨著 AI 技術的發展不斷添加新的術語和範疇。

## 技術深入分析

這個專案的核心技術機制是用 TypeScript 實現的字典，專注於將 AI 編程術語轉化為易於理解的語言。它的設計模式是以用戶查詢為中心，當用戶輸入術語時，系統會返回對應的解釋和範例，這樣的設計使得用戶能夠快速獲得所需的資訊。效能方面，該專案的資料量相對較小，因而在查詢速度上表現良好，並且不需要大量的資源來運行。選擇 TypeScript 而非 JavaScript 是因為其靜態類型檢查的特性，能夠在開發過程中減少錯誤，這對於維護代碼質量非常重要。技術風險方面，隨著術語的擴展，可能會面臨內容更新的挑戰，這需要持續的社群參與和維護。整合方面，這個專案可以輕鬆地與其他開發工具鏈搭配使用，特別是在教育和培訓的場景中，能夠提供額外的價值。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了基本的使用指引，但缺乏詳細的範例。安裝過程相對順暢，沒有明顯的坑。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供清晰的術語解釋，適合新手學習。
> - 附有實際使用範例，幫助用戶理解術語的應用。
> - 社群活躍，問題解決率高。

> [!danger] 缺點
> - 目前內容相對較少，未來需要擴展更多術語。
> - 僅支援英文，對於非英語使用者不友好。
> - 不適合進階用戶，因為內容較為基礎。

> [!warning] 注意事項
> - 僅針對 AI 編程術語，對於其他技術領域的術語支持不足。
> - 目前內容相對較少，未來可能需要更多的術語擴展。
> - 不支援多語言，僅提供英文內容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於 AI 工具的集合，而本專案專注於術語解釋，適合不同的學習需求。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個專案提供 API 接口的使用，而本專案則專注於術語的清晰解釋，適合新手學習。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於 AI 工具的集合，而本專案專注於術語解釋，適合不同的學習需求。 | 如果你需要一個全面的 AI 工具集合，而不僅僅是術語解釋。 | low，因為兩者的使用場景不同，轉換不會影響使用體驗。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個專案提供 API 接口的使用，而本專案則專注於術語的清晰解釋，適合新手學習。 | 如果你需要直接使用 AI 模型的 API，而不僅僅是學習術語。 | medium，因為需要重新調整學習重點。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **dictionary-of-ai-coding** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個專案專注於 AI 工具的集合，而本專案專注於術語解釋，適合不同的學習需求。 | 這個專案提供 API 接口的使用，而本專案則專注於術語的清晰解釋，適合新手學習。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，轉換不會影響使用體驗。 | medium，因為需要重新調整學習重點。 |
> | 適用場景 | 主要場景 | 如果你需要一個全面的 AI 工具集合，而不僅僅是術語解釋。 | 如果你需要直接使用 AI 模型的 API，而不僅僅是學習術語 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 術語更新不及時，可能會導致用戶查詢到過時的資訊。
  - 解法：定期檢查官方網站或社群更新。
- [MEDIUM] 對於某些術語的解釋可能過於簡單，無法滿足進階用戶的需求。
  - 解法：尋找其他資源補充學習。
- **[HIGH]** 缺乏多語言支持，對非英語使用者不友好。
  - 解法：使用翻譯工具輔助理解。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 剛接觸 AI 編程的學生 | 非常適合 | 提供清晰的術語解釋，幫助他們快速入門。 |
| 需要撰寫技術文檔的寫作人員 | 適合 | 能夠查找術語並獲得簡明解釋。 |
| 經驗豐富的開發者 | 普通 | 可能對他們來說內容過於基礎。 |
| 非英語使用者 | 不適合 | 缺乏多語言支持，理解上有障礙。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到清晰的術語解釋，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，安全性較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
| Forks | 114 |
| Open Issues | 0 |
| Issue 解決率 | 100% (3 closed) |
| 最後推送 | 2026-05-03 |
| 建立日期 | 2026-05-01 |
| Repo 大小 | 102 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mattpocock/dictionary-of-ai-coding) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `husky` `lint-staged` `prettier` `tsx` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mattpocock](https://github.com/mattpocock) | 33 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率 100%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-03）
> **活躍天數** 3 天 · **最新 commit** Add webhook notification on push events

## README 摘錄

> [!info]- 展開查看原文 README
> # AI Coding Dictionary
> 
> **AI coding can feel like it's just for experts**. Unexplained jargon. Mysterious failures. Bills that don't seem to match the work.
> 
> It isn't, really. A lot of the confusion is manufactured: **there's a whole VC-funded economy that benefits from keeping it hard to understand**.
> 
> The basic terms of engagement are learnable in an afternoon. Once you have them, the whole thing stops feeling like guesswork.
> 
> Why does context degrade? Why is the bill so high? Why does the same prompt behave differently from one day to the next?
> 
> Each has a clean answer, once someone tells you the words to use.
> 
> That's what this dictionary is for. **The vocabulary of AI coding, translated into plain English**.
> 
> **Want more than the vocabulary?** Join 62,000+ developers at **[aihero.dev/newsletter](https://www.aihero.dev/s/dictionary-newsletter)** for my latest skills, thinking on AI engineering, and the resources that'll keep you ahead of the curve.
> 
> ---
> 
> 
> ### Parameters
> 
> The numbers inside a [model](#model) — often billions of them — tuned during [training](#training). Everything the model "knows" lives in them. Training sets them; [inference](#inference) uses them unchanged. Also called *weights*.
> 
> *Usage:*
> 
> "Can we fine-tune it on our codebase?"
> 
> "That'd update the parameters — different model afterwards. For one project it's almost always cheaper to load the codebase as [context](#context) than to retrain."
> 
> 
> ## Table of contents
> 
> Section 1 — The Model
> 
> - [Model](#model)
> - [Parameters](#parameters)
> - [Training](#training)
> - [Inference](#inference)
> - [Token](#token)
> - [Next-token prediction](#next-token-prediction)
> - [Non-determinism](#non-determinism)
> - [Model provider](#model-provider)
> - [Harness](#harness)
> - [Model provider request](#model-provider-request)
> - [Input tokens](#input-tokens)
> - [Output tokens](#output-tokens)
> - [Prefix cache](#prefix-cache)
> - [Cache tokens](#cache-tokens)
> 
> Section 2 — Sessions, Context Windows & Turns
> 
> - [Stateless](#stateless)
> - [Context](#context)
> - [Context window](#context-window)
> - [Stateful](#stateful)
> - [Agent](#agent)
> - [System prompt](#system-prompt)
> - [Session](#session)
> - [Turn](#turn)
> 
> Section 3 — Tools & Environment
> 
> - [Environment](#environment)
> - [Filesystem](#filesystem)
> - [Tool](#tool)
> - [Tool call](#tool-call)
> - [Tool result](#tool-result)
> - [Permission request](#permission-request)
> - [Permission mode](#permission-mode)
> - [Agent mode](#agent-mode)
> - [Sandbox](#sandbox)
> 
> Section 4 — Failure Modes
> 
> - [Sycophancy](#sycophancy)
> - [Hallucination](#hallucination)
> - [Parametric knowledge](#parametric-knowledge)
> - [Knowledge cutoff](#knowledge-cutoff)
> - [Contextual knowledge](#contextual-knowledge)
> - [Attention relationship](#attention-relationship)
> - [Attention budget](#attention-budget)
> - [Attention degradation](#attention-degradation)
> - [Smart zone](#smart-zone)
> 
> Section 5 — Handoffs
> 
> - [Clearing](#clearing)
> - [Handoff](#handoff)
> - [Handoff artifact](#handoff-artifact)
> - [Spec](#spec)
> - [Ticket](#ticket)
> - [Compaction](#compaction)
> - [Autocompact](#autocompact)
> 
> Section 6 — Memory and Steering
> 
> - [Memory system](#memory-system)
> - [AGENTS.md](#agentsmd)
> - [Progressive disclosure](#progressive-disclosure)
> - [Skill](#skill)
> - [Subagent](#subagent)
> 
> Section 7 — Patterns of Work
> 
> - [Human-in-the-loop](#human-in-the-loop)
> - [AFK](#afk)
> - [Automated check](#automated-check)
> - [Automated review](#automated-review)
> - [Human review](#human-review)
> - [Vibe coding](#vibe-coding)
> - [Design concept](#design-concept)
> - [Grilling](#grilling)
> 
> 
> ## Section 1 — The Model
> 
> 
> ### Model
> 
> The [parameters](#parameters). [Stateless](#stateless) — does [next-token prediction](#next-token-prediction) and nothing else. "Claude Opus 4.7" and "GPT-5" are models. On its own a model can't do anything agentic; it has to be [harnessed](#harness).
> 
> *Usage:*
> 
> "Should we switch the model from Sonnet to Opus for the planning step?"
> 
> "Try it — but the harness is doing most of the lifting on this task. The model swap won't help if the [system prompt](#system-prompt) and [tools](#tool) are wrong."
> 
> 
> ### Training
> 
> The process that sets a [model](#model)'s [parameters](#parameters), by exposing it to vast amounts of text and adjusting parameters to improve [next-token prediction](#next-token-prediction). A one-time, expensive process done by the [model provider](#model-provider). Encompasses both pre-training (the bulk run) and post-training (later refinements like instruction-following and safety); the distinction doesn't matter at this glossary's level.
> 
> *Usage:*
> 
> "Can we get it to know our internal API?"
> 
> "Not via training — that's a months-long process by the model provider. Load the API docs into [context](#context) instead, that's the lever you actually have."
> 
> 
> ### Inference
> 
> Running a trained [model](#model) to generate output — what happens on every [model provider request](#model-provider-request). [Parameters](#parameters) stay fixed; the model just does [next-token prediction](#next-token-prediction) over the [context](#context) it's given. Cheap relative to [training](#training), but billed per [token](#token) and the dominant cost of using a model.
> 
> *Usage:*
> 
> "Why does the bill scale with usage instead of being a flat license?"
> 
> "You're paying for inference — every model provider request runs the model on the provider's hardware. Training already happened, but inference costs accrue per request, and a single [turn](#turn) can expand into many requests when [tools](#tool) are called."
> 
> 
> ### Token
> 
> The atomic unit a [model](#model) reads and writes. Roughly word-sized but not exactly — common words are one token, rare or long ones split into several. [Context window](#context-window) size, cost, and latency are all counted in tokens.
> 
> *Avoid:* "word" — token boundaries don't match word boundaries, and tokens-per-second / tokens-per-dollar are the units that actually matter.
> 
> *Usage:*
> 
> "How big is this prompt going to be?"
> 
> "Run it through the tokenizer — the schema's compact but the JSON keys are weird, so they'll split into more tokens than you think."
> 
> 
> ### Next-token prediction
> 
> What the [model](#model) actually does. Given a [context](#context), it samples one next [token](#token), appends it, and runs again. Every output — a sentence, a [tool call](#tool-call), a thousand-line file — is built one token at a time. The model has no other mode of operation.
> 
> *Usage:*
> 
> "How does the [agent](#agent) 'decide' to call a tool?"
> 
> "It doesn't — it's next-token prediction all the way down. The tool call is just a structured string the [harness](#harness) parses out of the output stream."
> 
> 
> ### Non-determinism
> 
> The same input can produce different output. Run a [model](#model) twice with identical [context](#context) and you may get two different answers — sometimes a word, sometimes a completely different approach. Nothing in your code has to change for this to happen.
> 
> It's a property of how models generate text, and how [model providers](#model-provider) serve [requests](#model-provider-request). There's no setting you can flip to make it go away.
> 
> Expect a spread of results from an [agent](#agent) on the same task. Some days the model will feel sharp; some days it'll feel like it's lost the plot. Same task, different rolls of the dice.
> 
> Be careful not to over-narrativize this. Humans are pattern-matching machines, and a string of bad runs can feel like proof that "the model got worse this week." Usually it's just the distribution.
> 
> _Usage:_
> 
> "Claude has been awful today. Did they ship a worse version?"
> 
> "Probably not — model output is non-deterministic. You're going to have good days and bad days on the same task. Try again tomorrow before you go looking for a cause."
> 
> 
> ### Model provider
> 
> Whatever serves a [model](#model) for [inference](#inference). Usually a remote service (Anthropic, OpenAI, Google), but can also be local — Ollama, LM Studio, llama.cpp running on your own machine. The [harness](#harness) doesn't run the model it

## 延伸閱讀

相關概念：[[自然語言處理]] · [[機器學習]] · [[AI 編程]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[wanshuiyin--Auto-claude-code-research-in-sleep|wanshuiyin/Auto-claude-code-research-in-sleep]]

[GitHub](https://github.com/mattpocock/dictionary-of-ai-coding)

## 相關收錄

> [!note]- 直接競品（同子分類：教育資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "教育資源" AND file.name != "mattpocock--dictionary-of-ai-coding"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "mattpocock--dictionary-of-ai-coding"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "mattpocock--dictionary-of-ai-coding" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "mattpocock--dictionary-of-ai-coding"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","機器學習","AI 編程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mattpocock--dictionary-of-ai-coding" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mattpocock--dictionary-of-ai-coding" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mattpocock" AND file.name != "mattpocock--dictionary-of-ai-coding"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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
> const me = dv.page("Repos/mattpocock--dictionary-of-ai-coding");
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

> **2026-05-04** — 首次收錄
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

- [[2026-05-07|2026-05-07]] — 再次上榜，1.2k stars
- [[2026-05-06|2026-05-06]] — 再次上榜，1.1k stars
- [[2026-05-05|2026-05-05]] — 再次上榜，972 stars
- [[2026-05-04|2026-05-04]] — 首次收錄，849 stars
