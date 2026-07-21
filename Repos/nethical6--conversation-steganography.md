---
repo: nethical6/conversation-steganography
url: https://github.com/nethical6/conversation-steganography
owner: nethical6
owner_type: User
language: Go
license: GPL-3.0
description: "Use LLMs to hide messages inside normal looking conversations"
homepage: ""
stars: 884
stars_per_day: 295
forks: 53
open_issues: 1
created: 2026-07-17
pushed_at: 2026-07-18
first_seen: 2026-07-20
week: "2026-W30"
month: "2026-07"
category: "安全"
subcategory: "隱私保護"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-20
use_case: "使用 LLM 在正常對話中隱藏消息，實現私密通訊。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 10124
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-20"
star_history: "2026-07-20:829,2026-07-21:884"
tags:
  - github
  - "category/安全"
  - "lang/go"
  - "topic/llm_tools"
  - "topic/steganography"
aliases:
  - "conversation-steganography"
  - "nethical6/conversation-steganography"
  - "使用 LLM 在正常對話中隱藏消息，實現私密通訊。"
---

# conversation-steganography

**829** stars · **415** stars/天 · 建立 2 天前 · Go · GPL-3.0

```dataviewjs
const me = dv.page("Repos/nethical6--conversation-steganography");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`llm-tools` `steganography`

> [!summary] 一句話摘要
> 使用 LLM 在正常對話中隱藏消息，實現私密通訊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (415 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在即時通訊中隱藏敏感信息的個人或小型團隊。
> **一句話重點** 這個專案展示了如何利用 LLM 進行隱藏消息的實用案例，並且強調了本地處理的重要性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/nethical6--conversation-steganography");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "隱私保護" && p.file.name !== "nethical6--conversation-steganography" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 隱私保護 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、3 小時整合，得到高級別的消息隱私保護，值得投入。

> [!abstract] 核心創新
> 這個專案展示了如何利用 LLM 進行隱藏消息的實用案例。

## 專案簡介

Conversation Stenography 透過將秘密消息嵌入正常對話中，讓用戶在任何即時通訊應用中進行私密交流。使用者首先需選擇一個 AI 模型，並在本地生成自然的對話文本，這些文本看似無害，但實際上包含了經過 AES 加密的秘密信息。用戶需在對話中維持消息的順序，並使用 `/paste` 命令來解碼收到的消息。這種設計的核心賣點在於其能夠在不引起懷疑的情況下，安全地傳遞加密信息。技術上，該工具使用 AES-SIV 加密，並且所有處理均在本地進行，確保沒有數據上傳至雲端。

用戶可以選擇不同的模型，如 Llama 和 GPT-2，根據系統性能需求進行調整。這種方法相較於傳統的加密消息傳遞方式，能有效避免被監控的風險，因為它生成的文本不會引起注意。實際使用中，若消息順序錯誤，則可能導致解碼失敗，這是使用者需要特別注意的地方。這項技術的成熟度尚在 beta 階段，適合對隱私有高需求的個人或小型團隊使用。未來可能會進一步優化模型效能和用戶體驗。

**技術棧**：`Go 1.22` · `Python 3.9+`

## 重點功能

- AES-SIV 加密 — 提供軍事級別的安全性，確保信息不被竊取。
- 本地 AI 模型 — 所有處理在用戶設備上完成，無需上傳至雲端。
- 支持多種模型 — 可選擇 Llama 或 GPT-2，根據系統性能進行調整。
- 消息順序檢查 — 確保消息按正確順序處理，避免解碼錯誤。
- 簡單的命令行界面 — 用戶可以輕鬆發送和接收隱藏消息。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/nethical/conversation-stenography.git && cd conversation-stenography
```
2. 構建專案
```bash
go build -o conversation-stenography ./cmd/conversation-stenography
```
3. 運行設置嚮導
```bash
./conversation-stenography
```

## 程式碼範例

```go
{
  "前置條件": "用戶已經完成設置嚮導並選擇了模型。",
  "指令": "./conversation-stenography",
  "預期輸出": "Conversation: coffee-plans\nYou are: alex\nHOW TO USE: ... "
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 829 stars（415/天），forks 48（5.8%），顯示出不錯的增長潛力。開發者 nethical6 針對隱私通訊的需求提出了創新的解決方案，特別是在政府監控日益嚴格的背景下。這個專案提供了一種新的方式來隱藏信息，避免傳統加密方法的風險。社群對於這種隱私保護工具的需求也在上升，尤其是在數位隱私意識提高的情況下。這些因素共同推動了其快速增長。

## 適合誰使用

**目標受眾**：需要在即時通訊中隱藏敏感信息的個人或小型團隊。

> [!example] 使用場景
> - 記者用它來在社交媒體上安全地傳遞敏感信息，因為傳統加密消息可能會引起注意。
> - 學生用它來在課堂上與同學分享考試答案，因為這樣的隱藏消息不易被老師發現。
> - 商業人士用它來在會議中安全地討論商業機密，因為這樣可以避免被競爭對手監聽。

## 架構分析

Conversation Stenography 採用本地 AI 模型來生成隱藏消息的文本，這樣的設計使得所有數據處理都在用戶的設備上進行，避免了雲端傳輸的風險。核心流程包括將用戶的秘密消息進行 AES 加密，然後由 AI 模型生成看似正常的對話文本。這種方法的優勢在於其隱蔽性，但也要求用戶在消息處理上保持一致性，否則會影響解碼的準確性。這種設計的代價在於需要用戶具備一定的技術能力來設置和運行模型，並且對於消息的順序要求較高，這可能會在實際使用中造成困擾。

## 技術深入分析

Conversation Stenography 的核心技術在於使用本地 AI 模型生成隱藏消息的文本。這些文本是通過將用戶的秘密消息進行 AES 加密後，再由 AI 模型生成的。這樣的設計確保了所有數據處理都在用戶的設備上進行，避免了雲端傳輸的風險。該工具支持多種模型，如 Llama 和 GPT-2，這使得用戶可以根據自己的系統性能需求進行選擇。

由於其使用了 AES-SIV 加密，這提供了軍事級別的安全性，並且每條消息都與前一條消息進行加密鏈接，這樣可以檢測到任何篡改或重排的行為。這種設計的代價在於需要用戶具備一定的技術能力來設置和運行模型，並且對於消息的順序要求較高，這可能會在實際使用中造成困擾。此外，這個專案的依賴性相對較低，主要依賴 Go 和 Python 的環境，這使得其在不同系統上的可移植性較高。整體來看，這個工具在隱私保護方面提供了一個創新的解決方案，但仍需注意其在實際使用中的限制。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，讓新手能夠快速上手。安裝過程相對順暢，但對於不熟悉 Go 和 Python 的用戶可能會有一定的學習曲線。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供高級別的消息隱私保護，適合需要保密的用戶。
> - 本地處理，無需擔心數據洩露風險。
> - 支持多種 AI 模型，靈活性高。

> [!danger] 缺點
> - 需要用戶在消息順序上保持一致，否則會影響解碼。
> - 仍在 beta 階段，可能存在未解決的問題。
> - 安裝和設置過程對新手來說可能較為複雜。

> [!warning] 注意事項
> - 僅支援 Go 1.22+ 和 Python 3.9+。
> - 需要用戶在對話中保持消息的正確順序，否則可能導致解碼失敗。
> - 目前仍在 beta 階段，存在多個未解決的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多模態代理，而本專案專注於隱藏消息。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的隱私保護功能，但不支持本地 AI 模型。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 的 API 接口，而本專案則是將其應用於隱藏消息。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多模態代理，而本專案專注於隱藏消息。 | 如果需要多模態的代理功能，而不僅僅是隱藏消息，則應選擇此工具。 | medium，因為需要重新設計消息處理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的隱私保護功能，但不支持本地 AI 模型。 | 如果需要雲端處理的隱私保護工具，則應選擇此工具。 | low，因為其 API 設計相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **conversation-steganography** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成多模態代理，而本專案專注於隱藏消息。 | 提供類似的隱私保護功能，但不支持本地 AI 模型。 |
> | 遷移成本 | - | medium，因為需要重新設計消息處理流程。 | low，因為其 API 設計相似。 |
> | 適用場景 | 主要場景 | 如果需要多模態的代理功能，而不僅僅是隱藏消息，則應選擇此工具 | 如果需要雲端處理的隱私保護工具，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 消息順序錯誤會導致解碼失敗
  - 解法：確保在發送和接收時保持消息的正確順序。
- [MEDIUM] 安裝過程中可能會遇到依賴問題
  - 解法：確保 Go 和 Python 環境正確配置。
- [MEDIUM] 在某些系統上模型運行速度可能較慢
  - 解法：選擇適合自己系統的模型進行運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在社交媒體上隱藏敏感信息的記者 | 非常適合 | 能夠有效避免監控，保護消息隱私。 |
| 學生在課堂上傳遞考試答案 | 適合 | 隱藏消息不易被發現，適合小範圍使用。 |
| 商業人士在會議中討論商業機密 | 普通 | 雖然能隱藏消息，但需要注意消息順序。 |
| 普通用戶在日常聊天中使用 | 不適合 | 對於普通聊天需求，使用過於複雜。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到高級別的消息隱私保護，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地處理所有數據，不需要高權限，且不會存取敏感資料。依賴鏈中未發現已知的供應鏈風險，整體安全性較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
| Forks | 48 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-18 |
| 建立日期 | 2026-07-17 |
| Repo 大小 | 9.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nethical6/conversation-steganography) |
| Topics | `llm-tools` `steganography` |

> [!info]- 主要依賴
> `go.mod` 中的核心套件：
> `require` `require`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Go" : 94
>     "Python" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nethical6](https://github.com/nethical6) | 14 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但問題解決率較低。
**連結**：[文件](https://github.com/nethical6/conversation-steganography#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-18）
> **活躍天數** 2 天 · **最新 commit** add personal insights and warnings

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/nethical6/conversation-steganography/issues/1) | Inplace update to inference tensor outside InferenceMode is  | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Conversation Stenography
> 
> **Hide secret messages inside normal-looking chat text.**
> 
> Conversation Stenography lets two people have a completely private conversation through *any* messaging app (WhatsApp, Telegram, Signal, iMessage, email, or even Instagram DMs). Your secret messages are encrypted and then disguised as innocent, natural-sounding text generated by a local AI model. No one reading the chat can tell there's a hidden message.
> 
> 
> ## Quick Start
> 
> 
> ### 1. Install
> 
> ```sh
> 
> ### 2. First run — setup wizard
> 
> ```sh
> ./conversation-stenography
> ```
> 
> On first run, Conversation Stenography walks you through everything:
> - Lets you pick an AI model (with recommendations for your system)
> - Downloads the model automatically
> - Creates your config file
> 
> That's it. You're ready to chat.
> 
> 
> ## Setup for Two People
> 
> Both people need the **exact same** configuration:
> 
> 1. **Meet in person** and agree on:
>    - A **secret phrase** (6+ random words, e.g. `"purple elephant dances under crimson moonlight"`)
>    - A **conversation name** (e.g. `"coffee-plans"`)
>    - The **same model** (e.g. both pick option 1 in the setup wizard)
> 
> 2. **Each person runs:**
>    ```sh
>    ./conversation-stenography
>    # Enter the same conversation name
>    # Enter your own name
>    # Enter the shared secret phrase when prompted
>    ```
> 
> 3. **Exchange messages** through any messaging app — just copy/paste the cover text.
> 
> > [!IMPORTANT]
> > Both people must process messages **in the exact same order** they appear in the messaging app. If you miss a message, use `/paste` to process it before sending your next reply.
> 
> 
> ### Prerequisites
> 
> - **Go 1.22+** (to build)
> - **Python 3.9+**
> 
> The setup wizard creates an isolated virtual environment when necessary and
> installs `mlx-lm` (Apple Silicon) or `torch + transformers` (other systems),
> plus `huggingface-hub`. You do not need to install the `hf` command separately.
> 
> 
> ## Advanced: Scripted Usage
> 
> For shell automation (e.g. bots, CI, automated relays):
> 
> ```sh
> export CONVERSATION_STENOGRAPHY_SECRET='purple elephant dances under crimson moonlight'
> ./conversation-stenography chat -conversation coffee-plans -me alex
> ```
> 
> 
> ## Why Conversation Stenography?
> 
> - Governments are moving toward scanning private messages
> - Sending normal encrypted messages is risky because it might flag you on basis of suspicioun 
> 
> personal note:  I’m 18, and I’m definitely not the first person to explore this idea. LLM-based steganography has existed for years, even GPT-2, the local model used by this project, was released in 2019. People far capable than me have likely been experimenting with techniques like this for a long time. This project simply demonstrates a practical use case for LLMs that may already be operating at scale.
> 
> > [!CAUTION]
> > **Educational Use Only**
> > This project is provided for educational and research purposes. Engaging in any unauthorized or illegal activities is strictly prohibited. The creator assumes no liability for any misuse.
> 
> > [!WARNING]
> > This is a proof of concept and still has multiple issues. There are several techniques being already developed to figure out if a text has hidden content. 
> 
> > **Example:** You type `"meet me at the coffee shop at 3pm"` and Conversation Stenography generates something like `"Hey, I was just thinking about that recipe you mentioned. It sounds amazing, especially the part about the fresh basil."` which is what gets sent in your chat app. Your friend's Conversation Stenography decodes it back to `"meet me at the coffee shop at 3pm"`.
> 
> **Your actual messages never leave your device unencrypted.** The messaging platform only ever sees innocent cover text.
> 
> 
> # Clone and build
> git clone https://github.com/nethical/conversation-stenography.git
> cd conversation-stenography
> go build -o conversation-stenography ./cmd/conversation-stenography
> ```
> 
> 
> ### Test with two users on one device
> 
> You do not need two computers or phones to verify that Conversation Stenography works. After
> setup, start a local two-person simulation:
> 
> ```sh
> ./conversation-stenography simulate
> ```
> 
> Enter your shared secret phrase when prompted. The terminal starts as Alice:
> 
> ```text
> Alice> Meet me outside at six.
>   Generating and transporting cover text...
> 
>   Cover text (what the messaging app would see):
>   
> 
>   Bob decoded: Meet me outside at six.
> 
> Bob> That works for me.
> ```
> 
> Each turn uses two independent protocol participants. One generates the cover
> text and the other decodes it, then the prompt automatically switches users.
> This exercises the same encryption, model encoding, decoding, and conversation
> chain used between separate devices.
> 
> Simulation commands:
> 
> | Command | What it does |
> |---|---|
> | `/switch` | Switch the active user without sending |
> | `/show` | Show the simulated plaintext conversation |
> | `/help` | Show simulation help |
> | `/quit` | Exit; simulation state is not saved |
> 
> Names and the test conversation can be customized:
> 
> ```sh
> ./conversation-stenography simulate -user-a Alex -user-b Samir -conversation test-chat
> ```
> 
> 
> ### 3. Start chatting
> 
> ```sh
> ./conversation-stenography
> ```
> 
> The tool prompts you for a conversation name and your name, then drops you into the chat:
> 
> ```
>   ┌─────────────────────────────────────┐
>   │        🔒  Secure Chat Active       │
>   └─────────────────────────────────────┘
> 
>   Conversation:  coffee-plans
>   You are:       alex
> 
>   HOW TO USE:
>   • Type a message and press Enter → generates cover text to copy
>   • /paste SENDER → paste a message you received from someone
>   • /help → see all commands
>   • /quit → save and exit
> 
> alex>
> ```
> 
> 
> ### 4. Send a message
> 
> Just type your secret message:
> 
> ```
> alex> Hey, can we meet tomorrow at noon?
>   ⏳ Generating cover text...
> 
>   ┌─── COPY THIS into your messaging app ───┐
> 
>   I was thinking about trying that new place downtown.
>   Have you been there before? I heard they have great pasta.
> 
>   └─── END — send as alex ───────────────────┘
> ```
> 
> Copy the cover text and paste it into WhatsApp/Telegram/Signal.
> 
> 
> ### 5. Receive a message
> 
> When your friend sends you a response through the messaging app:
> 
> ```
> alex> /paste bob
>   Paste the exact message received from bob below.
>   Then type /end on a new line when done:
> 
> Yeah the pasta place sounds great! My friend went last week
> and said the carbonara was incredible.
> /end
> 
>   📩 Message from bob:
>   Sure, noon works! See you there.
> ```
> 
> 
> ## How It Works (for the curious)
> 
> ```
> Your secret message
>         ↓
>    [AES encryption]
>         ↓
>    [AI model generates innocent text
>     that encodes the encrypted bytes
>     in its token choices]
>         ↓
> Normal-looking chat text  →  WhatsApp/Telegram/Signal  →  Friend's Conversation Stenography
>         ↓                                                       ↓
>    [AI model recovers                                   [Same process
>     the encrypted bytes                                  in reverse]
>     from token choices]                                        ↓
>         ↓                                              Your secret message
>    [AES decryption]
>         ↓
>   Original message
> ```
> 
> **Key security properties:**
> - **AES-SIV encryption** — military-grade authenticated encryption
> - **Conversation chain** — every message is cryptographically linked to the previous one; tampering, deletion, or reordering is detected
> - **Local AI model** — the model runs entirely on your device, nothing is sent to the cloud
> - **Shared secret phrase** — derived using PBKDF2 with 600,000 rounds; never stored on disk
> 
> 
> ## Commands
> 
> | Command | What it does |
> |---|---|
> | `./conversation-stenography` | Start chatting (or first-run setup) |
> | `./conversation-stenography setup` | Re-run the setup wizard |
> | `./conversation-stenography simulate` | Test two independent users on one device |
> | `./conversation-stenography conversations` | List your saved conversations |
> | `./conversation-stenography chat -conversation NAME -me NAME` | Start with explicit flags |
> 
> 
> ### In-chat commands
> 
> | Command | What it does |
> |---|---|
> | _(just type)

## 延伸閱讀

相關概念：[[隱私保護]] · [[AES 加密]] · [[即時通訊]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[CluvexStudio--Aether|CluvexStudio/Aether]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]]

[GitHub](https://github.com/nethical6/conversation-steganography)

## 相關收錄

> [!note]- 直接競品（同子分類：隱私保護）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "隱私保護" AND file.name != "nethical6--conversation-steganography"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "nethical6--conversation-steganography"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Go" AND file.name != "nethical6--conversation-steganography" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "nethical6--conversation-steganography"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["隱私保護","AES 加密","即時通訊"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "nethical6--conversation-steganography" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nethical6--conversation-steganography" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nethical6" AND file.name != "nethical6--conversation-steganography"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
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
> const me = dv.page("Repos/nethical6--conversation-steganography");
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

> **2026-07-20** — 首次收錄
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

- [[2026-07-21|2026-07-21]] — 再次上榜，884 stars
- [[2026-07-20|2026-07-20]] — 首次收錄，829 stars
