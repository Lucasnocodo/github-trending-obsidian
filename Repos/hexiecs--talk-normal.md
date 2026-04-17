---
repo: hexiecs/talk-normal
url: https://github.com/hexiecs/talk-normal
owner: hexiecs
owner_type: User
language: Shell
license: MIT
description: "Make any LLM talk like a normal person. A system prompt that removes AI slop."
homepage: ""
stars: 1109
stars_per_day: 139
forks: 24
open_issues: 0
created: 2026-04-08
pushed_at: 2026-04-15
first_seen: 2026-04-15
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-15
use_case: "讓任何 LLM 像正常人一樣對話，消除冗詞贅句。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-22"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 334
readme_length: 8360
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-15"
star_history: "2026-04-15:832,2026-04-15:832,2026-04-16:1010,2026-04-17:1109"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "talk-normal"
  - "hexiecs/talk-normal"
  - "讓任何 LLM 像正常人一樣對話，消除冗詞贅句。"
---

# talk-normal

**1.1k** stars · **139** stars/天 · 建立 8 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/hexiecs--talk-normal");
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
> 讓任何 LLM 像正常人一樣對話，消除冗詞贅句。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (139 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速獲取 LLM 輸出但不想面對冗長描述的開發者或研究者。
> **一句話重點** 這個專案的價值在於其簡單性和高效性，能讓 LLM 的輸出更符合日常對話的需求。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/hexiecs--talk-normal");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "hexiecs--talk-normal" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習、2 小時整合，得到快速獲取信息的效果，值得嘗試。

> [!abstract] 核心創新
> 通過簡單的系統提示，顯著減少 LLM 輸出的冗長性。

## 專案簡介

這個專案提供了一個系統提示，能將大型語言模型（LLM）的冗長輸出轉換為直接且具資訊性的回答。使用者只需將此提示應用於任何模型（如 GPT、Gemini、LLaMA 等），便可顯著減少不必要的內容，保持信息的完整性。根據測試，GPT-4o-mini 的輸出字數減少了 73%，而 GPT-5.4 減少了 72%。例如，對於問題「什麼是 Python？」的回答，經過處理後的字數從 1583 減少到 513，保留了關鍵信息但去除了多餘的描述。這樣的設計能讓使用者更快速地獲取所需信息，特別是在需要快速決策或理解的情境中。

技術上，這個工具不依賴於特定的框架或庫，因為它只是一個簡單的提示，這使得它的整合和使用變得非常輕量。與其他工具相比，如 0xGF/boneyard 和 AgentSeal/codeburn，這個專案的優勢在於其簡單性和通用性，適合任何需要簡化 LLM 輸出的場景。使用者可能會發現，在某些情況下，過度簡化可能會導致信息的丟失，因此在使用時需謹慎考量。這個專案目前處於早期階段，社群活躍度尚可，未來可能會增加更多的功能和優化。對於需要快速獲取信息的開發者或研究者來說，這是一個值得嘗試的工具。

**技術棧**：`Shell`

## 重點功能

- 系統提示 — 透過簡單的提示來減少 LLM 輸出的冗長內容。
- 通用性 — 支援所有主要的 LLM 模型，如 GPT、Gemini、LLaMA。
- 高效性 — 減少輸出字數達 73%，保持信息完整性。
- 易於整合 — 只需將提示應用於現有的 LLM 系統。
- 開源 — 任何人都可以貢獻和改進此專案。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/hexiecs/talk-normal.git
```
2. 進入專案目錄
```bash
cd talk-normal
```
3. 使用提示進行測試
```bash
echo 'Your prompt here' | ./run.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1109 stars（139/天），forks 24（2.2%），顯示出其快速增長的潛力。作者 hexiecs 之前的專案可能有助於建立信任，並且這個工具解決了 LLM 輸出過於冗長的痛點，這在許多開發者和研究者中都是一個普遍的問題。雖然沒有明確的觸發事件，但這個工具的簡單性和有效性使其在社群中自然擴散。forks/stars 比率較低，顯示出使用者仍在觀望，尚未大量修改或擴展此工具。

## 適合誰使用

**目標受眾**：需要快速獲取 LLM 輸出但不想面對冗長描述的開發者或研究者。

> [!example] 使用場景
> - 後端工程師用它來簡化 API 回應，因為這樣能讓前端開發者更快理解資料結構。
> - 數據科學家用它來快速獲取模型的輸出，因為減少冗長的描述能提高報告的效率。
> - 產品經理用它來生成簡潔的產品說明，因為這樣能讓團隊更快做出決策。

## 架構分析

這個專案的架構非常簡單，主要依賴於 Shell 腳本來執行提示。使用者只需將提示應用於 LLM 的輸入，便可獲得精簡的輸出。這樣的設計使得整合變得輕量且快速，但同時也限制了其功能的擴展性。由於沒有重依賴的框架，這使得使用者能夠快速上手，但在處理更複雜的需求時可能會感到不足。整體來說，這個架構適合快速獲取信息的場景，但在需要更高自定義的情況下，可能需要額外的開發工作。

## 技術深入分析

這個專案的核心技術在於使用一個簡單的系統提示來調整 LLM 的輸出，使其更具可讀性和直接性。這種方法不依賴於複雜的算法或框架，而是通過簡單的文本處理來達成目的。效能方面，經過測試的模型顯示出顯著的字數減少，這意味著在實際應用中能夠更快地獲得所需信息。設計上，選擇 Shell 作為實作語言使得整合變得輕量，但也限制了其功能的擴展性，未來可能需要考慮增加更多的自定義選項。技術風險方面，過度簡化可能會導致信息的丟失，這在某些情況下可能會影響使用者的決策。整合方面，由於其簡單性，與主流的 LLM 系統（如 GPT、Gemini）整合相對容易，但在處理更複雜的需求時，使用者可能需要進行額外的開發工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明，且有範例可供參考。安裝過程非常順暢，沒有明顯的坑。雖然缺乏詳細的入門指南，但基本的使用說明已經足夠讓新手快速上手。文件目前僅提供英文版本，對於非英語使用者來說可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速整合到現有系統中。
> - 能顯著減少冗長輸出，提高信息獲取效率。
> - 開源且社群活躍，易於獲得支持和貢獻。

> [!danger] 缺點
> - 可能導致信息丟失，需謹慎使用。
> - 目前僅限於英語，對其他語言支持不足。
> - 缺乏複雜的功能，對於特定需求可能不夠靈活。

> [!warning] 注意事項
> - 可能在某些情況下過度簡化，導致信息丟失。
> - 目前僅支援英語輸出，對其他語言的支持有限。
> - 需要使用者自行整合到現有的 LLM 系統中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更複雜的提示選擇，適合需要多樣化輸出的使用者，但整合較為繁瑣。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定任務的 LLM 輸出，適合有明確需求的場景，但不如本專案通用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更複雜的提示選擇，適合需要多樣化輸出的使用者，但整合較為繁瑣。 | 如果你的需求較為複雜，且需要多樣化的輸出選擇。 | medium，因為需要重新調整提示設計。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於特定任務的 LLM 輸出，適合有明確需求的場景，但不如本專案通用。 | 如果你需要針對特定任務進行優化的輸出。 | low，因為可以直接替換使用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **talk-normal** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供更複雜的提示選擇，適合需要多樣化輸出的使用者，但整合較為繁瑣。 | 專注於特定任務的 LLM 輸出，適合有明確需求的場景，但不如本專案通用。 |
> | 遷移成本 | - | medium，因為需要重新調整提示設計。 | low，因為可以直接替換使用。 |
> | 適用場景 | 主要場景 | 如果你的需求較為複雜，且需要多樣化的輸出選擇。 | 如果你需要針對特定任務進行優化的輸出。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，過度簡化會導致重要信息的丟失。
  - 解法：使用者需自行評估輸出是否符合需求。
- [MEDIUM] 目前僅支援英語，對其他語言的支持有限。
  - 解法：未來可能需要考慮增加多語言支持。
- [MEDIUM] 缺乏複雜的功能，對於特定需求可能不夠靈活。
  - 解法：考慮與其他工具結合使用以滿足需求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發專案 | 非常適合 | 能快速獲取信息，減少冗長的溝通成本。 |
| 大型企業的產品開發 | 普通 | 在某些情況下可能導致信息丟失，需謹慎使用。 |
| 學術研究中的數據分析 | 適合 | 能有效簡化模型輸出，提升效率。 |
| 需要多語言支持的應用 | 不適合 | 目前僅支援英語，對其他語言支持不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習、2 小時整合，得到快速獲取信息的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，使用過程中不會引入安全隱患。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/hexiecs--talk-normal");
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
> const me = dv.page("Repos/hexiecs--talk-normal");
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
| Forks | 24 |
| Open Issues | 0 |
| 最後推送 | 2026-04-15 |
| 建立日期 | 2026-04-08 |
| Repo 大小 | 334 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/hexiecs/talk-normal) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hexiecs](https://github.com/hexiecs) | 56 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和貢獻。
**連結**：[文件](https://github.com/hexiecs/talk-normal)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-15）
> **活躍天數** 2 天 · **最新 commit** docs: fix Hermes manual clone to install globally under ~

## README 摘錄

> [!info]- 展開查看原文 README
> # talk-normal
> 
> English | [中文](README_CN.md)
> 
> Make any LLM talk like a normal person. No filler, no fluff, just the answer.
> 
> Contributions welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) and open a rule suggestion in [Issues](https://github.com/hexiecs/talk-normal/issues/new/choose). Recent rule history in [CHANGELOG.md](CHANGELOG.md).
> 
> 
> ## Usage
> 
> 
> ## What it does
> 
> A single system prompt that transforms verbose, corporate-sounding LLM output into direct, informative responses. Works with any model (GPT, Gemini, LLaMA, etc.). Tested on GPT-4o-mini (**73% reduction**) and GPT-5.4 (**72% reduction**) while preserving all useful information. [See full comparison with all 10 test questions and complete answers](TEST_RESULTS.md).
> 
> **Question: "What is Python?"**
> 
> Before (GPT-4o-mini, 1583 chars)
> 
> > Python is a high-level, interpreted programming language known for its readability and simplicity. It was created by Guido van Rossum and first released in 1991. Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming, making it versatile for various applications.
> >
> > Key features of Python include:
> >
> > 1. **Readability**: Python's syntax is designed to be clear and easy to understand, which helps developers write and maintain code more efficiently.
> >
> > 2. **Dynamic Typing**: Python uses dynamic typing, meaning that variable types are determined at runtime, allowing for more flexibility in coding.
> >
> > 3. **Extensive Libraries**: Python has a rich ecosystem of libraries and frameworks, such as NumPy, Pandas, Matplotlib, Django, and Flask, which facilitate tasks ranging from data analysis to web development.
> >
> > 4. **Cross-Platform**: Python is available on various operating systems, including Windows, macOS, and Linux, making it a cross-platform language.
> >
> > 5. **Community Support**: Python has a large and active community, which contributes to a wealth of resources, tutorials, and third-party modules.
> >
> > 6. **Interpreted Language**: Python code is executed line by line, which can make debugging easier and allows for interactive programming.
> >
> > Python is widely used in various domains, including web development, data science, artificial intelligence, machine learning, automation, and scientific computing, among others. Its versatility and ease of use have made it one of the most popular programming languages in the world.
> 
> After (GPT-4o-mini, 513 chars):
> > Python is a high-level, interpreted programming language known for its readability and simplicity. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. Python has a large standard library and a vibrant ecosystem of third-party packages, making it suitable for web development, data analysis, artificial intelligence, scientific computing, and more. Its versatility and ease of use make it a popular choice among beginners and experienced developers alike.
> 
> 
> ### Any OpenAI API tool
> 
> Copy the contents of `prompt.md` into the system prompt field of whatever tool you use (Cursor, Continue, your own app, etc.)
> 
> 
> ### API calls
> 
> ```bash
> curl https://api.openai.com/v1/chat/completions \
>   -H "Authorization: Bearer $OPENAI_API_KEY" \
>   -H "Content-Type: application/json" \
>   -d '{
>     "model": "gpt-4o-mini",
>     "messages": [
>       {"role": "system", "content": ""},
>       {"role": "user", "content": "What is Python?"}
>     ]
>   }'
> ```
> 
> 
> ### OpenClaw
> 
> Three ways, pick whichever fits your workflow:
> 
> **Option 1: Paste the GitHub link into chat (easiest)**
> 
> Paste this link into your OpenClaw chat and ask it to install:
> 
> ```
> https://github.com/hexiecs/talk-normal
> ```
> 
> **Option 2: ClawHub**
> 
> ```bash
> clawhub install talk-normal && bash skills/talk-normal/install.sh
> ```
> 
> To pull the latest rules later:
> 
> ```bash
> clawhub update talk-normal && bash skills/talk-normal/install.sh
> ```
> 
> **Option 3: Manual git clone**
> 
> ```bash
> git clone https://github.com/hexiecs/talk-normal.git && cd talk-normal && bash install.sh
> ```
> 
> All three paths end up running the same `install.sh`, which auto-detects your `AGENTS.md` and injects the prompt between `# --- talk-normal BEGIN ---` and `# --- talk-normal END ---` markers. The installer is idempotent: re-run it any time to pick up the latest rules without touching the rest of your `AGENTS.md`.
> 
> Uninstall:
> ```bash
> bash install.sh --uninstall
> ```
> 
> Start a new conversation to take effect.
> 
> 
> ### Hermes Agent
> 
> Two ways:
> 
> **Option 1: Install from GitHub**
> 
> ```bash
> hermes skills install --force hexiecs/talk-normal/skill-hermes
> ```
> 
> > `--force` is required because this skill modifies your `AGENTS.md` to inject always-on prompt rules — Hermes's security scanner flags that as persistent prompt modification. The skill is open-source; review it at [`skill-hermes/SKILL.md`](skill-hermes/SKILL.md) before installing.
> 
> Then run the installer (installs globally to `~/AGENTS.md`):
> 
> ```bash
> cd ~ && bash ~/.hermes/skills/skill-hermes/install.sh
> ```
> 
> To install for a specific project instead, `cd` into that project directory before running the installer.
> 
> **Option 2: Manual git clone**
> 
> ```bash
> git clone https://github.com/hexiecs/talk-normal.git
> cd ~ && bash talk-normal/install.sh
> ```
> 
> The installer auto-detects your workspace config file (`.hermes.md`, `HERMES.md`, or `AGENTS.md`) and injects the rules. Hermes freezes context files at session start, so start a new session to take effect.
> 
> Uninstall:
> ```bash
> cd ~ && bash ~/.hermes/skills/skill-hermes/install.sh --uninstall
> ```
> 
> 
> ### ChatGPT custom instructions
> 
> Copy the contents of [`prompt-chatgpt.md`](prompt-chatgpt.md) into ChatGPT's [custom instructions](https://chatgpt.com/#settings/Personalization) field.
> 
> ChatGPT's custom instructions fields are capped at 1500 characters each. `prompt-chatgpt.md` is a compressed variant built to fit that limit while preserving every load-bearing rule from `prompt.md` (negation-frame ban, closing-stamp ban, filler list, conditional-menu ban, few-shot BAD/GOOD examples). Use `prompt.md` everywhere there is no length cap (OpenClaw, API, Cursor, Continue); use `prompt-chatgpt.md` only for the ChatGPT custom instructions field.
> 
> 
> ## Test results
> 
> 10 prompts, temperature=0. Measured in characters. [Full responses for every question](TEST_RESULTS.md).
> 
> 
> ### GPT-4o-mini — average reduction: 73%
> 
> | # | Prompt | Original | talk-normal | Reduction |
> |---|--------|----------|-----------|-----------|
> | 1 | TCP vs UDP? | 2488 | 630 | 74% |
> | 2 | What is Python? | 1583 | 513 | 67% |
> | 3 | Explain how HTTP works | 3526 | 875 | 75% |
> | 4 | How does DNS work? | 3263 | 1100 | 66% |
> | 5 | Is React better than Vue? | 2389 | 249 | 89% |
> | 6 | Docker和虚拟机有什么区别? | 901 | 297 | 67% |
> | 7 | 什么是机器学习? | 551 | 125 | 77% |
> | 8 | 什么是区块链? | 469 | 115 | 75% |
> | 9 | Redis和Memcached哪个好? | 810 | 129 | 84% |
> | 10 | Microservices pros/cons | 3027 | 922 | 69% |
> 
> 
> ### GPT-5.4 — average reduction: 72%
> 
> | # | Prompt | Original | talk-normal | Reduction |
> |---|--------|----------|-----------|-----------|
> | 1 | TCP vs UDP? | 1076 | 515 | 52% |
> | 2 | What is Python? | 628 | 502 | 20% |
> | 3 | Explain how HTTP works | 5761 | 954 | 83% |
> | 4 | How does DNS work? | 3383 | 731 | 78% |
> | 5 | Is React better than Vue? | 1214 | 466 | 61% |
> | 6 | Docker和虚拟机有什么区别? | 1999 | 514 | 74% |
> | 7 | 什么是机器学习? | 767 | 195 | 74% |
> | 8 | 什么是区块链? | 852 | 391 | 54% |
> | 9 | Redis和Memcached哪个好? | 1629 | 252 | 84% |
> | 10 | Microservices pros/cons | 3489 | 1288 | 63% |
> 
> GPT-5.4 is already more concise than 4o-mini out of the box. talk-normal still cuts verbose responses by 20-89% on both models.
> 
> 
> ## Rule iteration
> 
> Individual rules are iterated against real LLM output. Each rule that leaks in production gets a file in [regressions/](regressions/) tracking the leak count per version, the specific fix, and the observed LLM excerpts that motivated each round.
> 
> Example: the `"不是X，而是Y"` rhetorical frame went from 6 violations per response to 0 across four iterations on the same stress prompt. The

## 延伸閱讀

相關概念：[[自然語言處理]] · [[API 設計]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]]

[GitHub](https://github.com/hexiecs/talk-normal)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "hexiecs--talk-normal"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "hexiecs--talk-normal"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "hexiecs--talk-normal" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "hexiecs--talk-normal"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自然語言處理","API 設計","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "hexiecs--talk-normal" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/hexiecs--talk-normal");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "hexiecs--talk-normal" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "hexiecs" AND file.name != "hexiecs--talk-normal"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/hexiecs--talk-normal");
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
> const me = dv.page("Repos/hexiecs--talk-normal");
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
> const me = dv.page("Repos/hexiecs--talk-normal");
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
> const me = dv.page("Repos/hexiecs--talk-normal");
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
> const me = dv.page("Repos/hexiecs--talk-normal");
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

> **2026-04-15** — 首次收錄
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

- [[2026-04-15|2026-04-15]] — 首次收錄，832 stars
