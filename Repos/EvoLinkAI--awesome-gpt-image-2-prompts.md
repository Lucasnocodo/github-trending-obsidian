---
repo: EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: CC0-1.0
description: "GPT-Image-2 API and Prompts"
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 14818
stars_per_day: 511
forks: 1498
open_issues: 5
created: 2026-04-18
pushed_at: 2026-05-14
first_seen: 2026-04-23
week: "2026-W17"
month: "2026-04"
category: "AI/ML"
subcategory: "圖像生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-23
use_case: "提供 GPT-Image-2 API 和提示的高品質資源，助你快速生成和編輯影像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 74
repo_size_kb: 141587
readme_length: 9943
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738,2026-04-30:9947,2026-05-01:10822,2026-05-02:11169,2026-05-03:11512,2026-05-04:11807,2026-05-05:12089,2026-05-06:12351,2026-05-07:12629,2026-05-08:13012,2026-05-09:13513,2026-05-10:13707,2026-05-11:13801,2026-05-12:13928,2026-05-13:14061,2026-05-14:14171,2026-05-15:14297,2026-05-16:14494,2026-05-17:14709,2026-05-18:14818"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/api"
  - "topic/awesome"
  - "topic/awesome_list"
  - "topic/chatgpt"
  - "topic/generative_"
aliases:
  - "awesome-gpt-image-2-API-and-Prompts"
  - "EvoLinkAI/awesome-gpt-image-2-API-and-Prompts"
  - "提供 GPT-Image-2 API 和提示的高品質資源，助你快速生成和編輯影像。"
---

# awesome-gpt-image-2-API-and-Prompts

**14.8k** stars · **511** stars/天 · 建立 29 天前 · Python · CC0-1.0

```dataviewjs
const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`api` `awesome` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` `image-prompt` `image-to-image` `openai` `prompt-` `prompt-collection` `prompts` `text-to-image`

> [!summary] 一句話摘要
> 提供 GPT-Image-2 API 和提示的高品質資源，助你快速生成和編輯影像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (511 stars/day)
> **授權** CC0-1.0 · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成和編輯圖像的開發者，特別是在電商和廣告創意領域的團隊。
> **一句話重點** 這個專案不僅提供圖像生成，還能進行圖像編輯，讓開發者能夠在一個 API 中實現多種功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖像生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，4 小時整合，得到快速生成圖像的能力，值得考慮。

> [!abstract] 核心創新
> 提供一個集成的 API，支持圖像生成和編輯的單一請求。

## 專案簡介

這個專案提供了一個完整的 GPT-Image-2 API 和提示的集合，讓開發者能夠輕鬆生成和編輯圖像。用戶可以透過簡單的 API 請求來生成圖像，例如使用 `curl` 指令發送 POST 請求，並在請求中包含模型名稱和提示語句，像是「A beautiful colorful sunset over the ocean」。這樣的設計使得開發者能夠在一個 API 呼叫中同時進行圖像生成和編輯，這是相較於其他工具的顯著優勢。該專案包含超過 359 個高品質的提示範例，涵蓋了多種應用場景，如肖像、海報、UI 設計等，並提供了多語言的文檔支持，這使得全球開發者都能輕鬆上手。技術上，專案使用 Python 和 OpenAI 的最新模型，並且支持高保真度的文本渲染和多輪對話，這些特性使得生成的圖像能夠更符合用戶的需求。

與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `432539/gpt2api`，這個專案在生成和編輯的靈活性上更具優勢，因為它不僅支持文本到圖像的生成，還能進行圖像的修改和風格轉換。實際使用中，開發者可能會遇到 API 金鑰管理的挑戰，因為需要確保安全性和有效性。這個專案目前處於活躍開發階段，社群參與度高，對於需要快速生成圖像的開發者來說，是一個值得考慮的選擇。未來六個月內，預計將持續增加新的提示範例和功能，進一步提升用戶體驗。適合需要快速生成和編輯圖像的開發者，特別是那些在電商、廣告創意和UI設計領域工作的團隊。

**技術棧**：`Python` · `OpenAI API`

## 重點功能

- 359+ 高品質提示 — 涵蓋肖像、海報、UI 等多種類型，提供豐富的創作靈感。
- 簡單的 API 調用 — 使用 `curl` 指令即可快速生成圖像，降低了使用門檻。
- 多語言支持 — 提供 11 種語言的文檔，方便全球開發者使用。
- 高保真度文本渲染 — 能夠準確渲染文本，適合需要文字的圖像生成。
- 支持多輪對話 — 允許用戶通過對話逐步調整生成的圖像，提升互動性。

## 快速開始

1. 安裝技能
```bash
npx evolink-gpt-image -y
```
2. 獲取 API 金鑰
```bash
前往 https://evolink.ai/dashboard
```
3. 發送生成請求
```bash
curl --request POST --url https://api.evolink.ai/v1/images/generations --header 'Authorization: Bearer YOUR_API_KEY' --header 'Content-Type: application/json' --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'
```

## 程式碼範例

```python
# 前置條件：需要有效的 API 金鑰
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'
# 預期輸出：生成一幅美麗的彩色海洋日落圖像。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 14818 stars（511/天），forks 1498（10.1%），顯示出強勁的增長趨勢。EvoLinkAI 是一個專注於 AI 應用的團隊，過去在圖像生成領域有多項成功案例。這個專案解決了開發者在圖像生成和編輯上的需求，之前的工具往往只能專注於單一功能，而這個專案提供了兩者的結合。近期的推廣活動和社群互動也促進了其曝光率，讓更多開發者了解這個強大的工具。高比例的 forks/stars（10.1%）顯示出社群對於這個專案的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要快速生成和編輯圖像的開發者，特別是在電商和廣告創意領域的團隊。

> [!example] 使用場景
> - 設計師用它來快速生成廣告素材，因為可以利用現成的提示範例，節省了大量的創作時間。
> - 開發者用它來在應用程式中集成圖像生成功能，因為 API 的簡單調用使得整合變得高效。
> - 教育工作者用它來創建教學材料，因為多樣化的提示範例可以幫助他們製作更吸引人的內容。

## 架構分析

這個專案採用微服務架構，將圖像生成和編輯功能封裝在 API 中，這樣的設計使得用戶能夠通過簡單的 HTTP 請求來訪問功能。資料流方面，請求經過身份驗證後，將提示發送到 GPT-Image-2 模型進行處理，然後返回生成的圖像。選擇這種架構的原因在於其擴展性和易於維護，代價是需要依賴外部 API 的穩定性。擴展性方面，該架構能夠輕鬆支持多用戶同時請求，但在高流量時可能會遇到性能瓶頸。整體而言，這種設計使得開發者能夠快速集成圖像生成能力，並且能夠靈活應對不同的應用場景。

## 技術深入分析

專案的核心技術機制是基於 OpenAI 的 GPT-Image-2 模型，這是一種先進的生成對抗網絡，能夠從自然語言提示生成高品質的圖像。該模型支持多種圖像生成任務，包括文本到圖像生成和圖像編輯，這使得它在功能上比傳統的圖像生成工具更具優勢。效能方面，該 API 能夠在短時間內處理大量請求，具體的響應時間依賴於請求的複雜性和當前的流量負載。設計上選擇 Python 作為開發語言，因為其擁有豐富的庫支持和良好的社群生態，這使得開發和維護變得更加高效。技術風險方面，依賴於外部 API 可能導致服務中斷，這是需要注意的潛在問題。整合方面，該工具能夠輕鬆融入現有的開發流程，特別是在使用 CI/CD pipeline 時，能夠快速部署和測試新功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且有範例可供參考。安裝過程相對順暢，但需要注意 API 金鑰的管理。文件有多語言版本，方便不同語言的開發者使用。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的提示範例，適合不同需求。
> - 簡單易用的 API 設計，降低了使用門檻。
> - 支持多語言文檔，方便全球開發者。
> - 具備高保真度的文本渲染能力，適合商業用途。

> [!danger] 缺點
> - 依賴雲端服務，無法本地運行。
> - 對於複雜的提示，生成效果可能不穩定。
> - 需要持續的 API 金鑰管理，增加了維護負擔。
> - 在高流量時段，可能會影響響應速度。

> [!warning] 注意事項
> - 需要有效的 API 金鑰才能使用。
> - 對於非常複雜的提示，生成的圖像可能不符合預期。
> - 在高流量時段，API 響應時間可能會變慢。
> - 不支持本地部署，必須依賴雲端服務。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，適合遊戲開發，但缺乏圖像編輯功能。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於文本生成，無法進行圖像生成和編輯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，使用 Rust 實作，性能優越但生態系統較小。 | 如果你的專案需要高效能的角色生成，且團隊熟悉 Rust。 | medium，因為需要重新學習 API 和整合方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於文本生成，無法處理圖像生成，使用 Python 實作。 | 如果你的需求僅限於文本生成，且不需要圖像功能。 | low，因為 API 結構相似，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-API-and-Prompts** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成，使用 Rust 實作，性能優越但生態系統較小。 | 主要用於文本生成，無法處理圖像生成，使用 Python 實作。 |
> | 遷移成本 | - | medium，因為需要重新學習 API 和整合方式。 | low，因為 API 結構相似，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案需要高效能的角色生成，且團隊熟悉 Rust。 | 如果你的需求僅限於文本生成，且不需要圖像功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於小型專案和實驗性質的開發，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在高流量時段，API 響應時間可能會變慢。
  - 解法：考慮使用緩存機制來減少請求頻率。
- **[HIGH]** 生成的圖像可能不符合複雜提示的預期。
  - 解法：簡化提示語句，逐步調整以獲得更好的結果。
- **[HIGH]** API 金鑰管理不當可能導致安全問題。
  - 解法：定期更新金鑰並使用環境變數存儲。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速生成廣告素材的設計團隊 | 非常適合 | 提供多樣化的提示範例，能夠快速滿足需求。 |
| 小型開發團隊希望整合圖像生成到應用中 | 適合 | API 易於使用，能夠快速上手。 |
| 大型企業需要高效穩定的圖像生成解決方案 | 不適合 | 目前處於 beta 階段，可能不夠穩定。 |
| 教育機構需要創建教學材料 | 適合 | 多樣的提示範例能夠幫助提高教學效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，4 小時整合，得到快速生成圖像的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需 API 金鑰，並且不會存取敏感資料。依賴於 OpenAI 的安全性，需定期檢查 API 金鑰的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
| Forks | 1.5k |
| Open Issues | 5 |
| Issue 解決率 | 74% (14 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 138.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts) |
| Topics | `api` `awesome` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 111 |

## 社群與生態

**社群活躍度**：社群活躍，經常更新提示範例和功能。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-14）
> **活躍天數** 7 天 · **最新 commit** chore: backfill 45 missing authors into Acknowledge

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#22](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/22) | [Prompt] | 0 | 0 |
> | [#21](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/21) | image2 免费不限量使用教程 | 0 | 0 |
> | [#20](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/20) | [Prompt] | 0 | 1 |
> | [#13](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/13) | Prompt Ảnh | 0 | 1 |
> | [#12](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/12) | one | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Awesome GPT Image 2 API and Prompts
> 
> [](https://awesome.re)
> [](LICENSE)
> [](README.md)
> [](https://github.com/EvoLinkAI/GPT-Image-2-Seedance2-Workflow)
> [](https://github.com/EvoLinkAI/gpt-image-2-gen-skill)
> 
> [](README.md)
> [](README_es.md)
> [](README_pt.md)
> [](README_ja.md)
> [](README_ko.md)
> [](README_de.md)
> [](README_fr.md)
> [](README_tr.md)
> [](README_zh-TW.md)
> [](README_zh-CN.md)
> [](README_ru.md)
> 
> 
> ### 1. Quick Install the Skill
> 
> - [Go to gpt-image-2-gen-skill repository](https://github.com/EvoLinkAI/gpt-image-2-gen-skill)
> - One-line install:
> 
> ```bash
> npx evolink-gpt-image -y
> ```
> 
> 
> ## 🧪 Comparison & Community Examples
> 
> > **53 curated cases** — [Explore all Comparison Examples →](cases/comparison.md)
> 
> 
> ## 🤝 How to Contribute
> 
> We welcome community contributions! If you've created or discovered a great GPT-Image-2 prompt, share it with the community.
> 
> **Ways to contribute:**
> 
> 1. **Submit a prompt via Issue** — Use our [Prompt Submission Template](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/new?template=submit-prompt.yml) to submit your prompt with output images
> 2. **Open a Pull Request** — Add your case directly to the appropriate `cases/*.md` file following the existing format
> 3. **Report issues** — Found a broken link or incorrect prompt? [Open an issue](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/new)
> 
> **Submission guidelines:**
> - Include the full, reusable prompt text (not just a description)
> - Attach or link at least one output image
> - Specify which category your prompt belongs to
> - Credit the original author if sharing someone else's work
> 
> See [CONTRIBUTING.md](contributing.md) for detailed guidelines.
> 
> 
> ## 🍌 Introduction
> 
> Welcome to the **Awesome GPT Image 2 API and Prompts** repository! 🤗
> 
> A curated collection of **359+ high-quality GPT-Image-2 prompts**, API usage patterns, and reusable visual workflows for AI image generation.
> 
> Whether you're looking for GPT-Image-2 prompt examples, text-to-image best practices, image editing techniques, or ready-to-use prompt templates — this is your one-stop reference.
> 
> **What you'll find here:**
> - 🎯 Production-ready prompts across 7 categories (portrait, poster, UI, e-commerce, ad creative, character design, comparison)
> - 🔌 GPT Image 2 API integration guides and callable skills
> - 🌍 Full documentation in 11 languages
> - 📸 Real output images for every prompt case
> 
> Try it on Evolink: [GPT-Image-2 API](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-API-and-Prompts)
> 
> If you find this useful, consider giving it a star. ⭐
> 
> 
> ## 🔌 Use GPT Image 2 API
> 
> Want to move from prompt inspiration to real image generation fast? Use the GPT Image 2 API docs together with the callable skill.
> 
> 
> ### 2. Quick Connect to the API
> 
> - Connect command:
> 
> ```bash
> curl --request POST \
>   --url https://api.evolink.ai/v1/images/generations \
>   --header 'Authorization: Bearer YOUR_API_KEY' \
>   --header 'Content-Type: application/json' \
>   --data '{
>   "model": "gpt-image-2",
>   "prompt": "A beautiful colorful sunset over the ocean"
> }'
> ```
> 
> - [Get your API key](https://evolink.ai/dashboard?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-API-and-Prompts)
> - [Read GPT Image 2 API docs](https://docs.evolink.ai/en/api-manual/image-series/gpt-image-2/gpt-image-2-image-generation?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-API-and-Prompts)
> 
> 
> ## ❓ What is GPT Image 2?
> 
> **GPT Image 2** (also known as GPT-Image-2 or gpt-image-2) is OpenAI's latest image generation and editing model, integrated natively into ChatGPT and available via the OpenAI API.
> 
> **Key capabilities:**
> - **Text-to-image generation** — Create photorealistic images, illustrations, posters, UI mockups, and more from natural language prompts
> - **Image editing** — Modify existing images with text instructions (inpainting, outpainting, style transfer)
> - **Multi-turn conversations** — Iteratively refine images through dialogue
> - **High fidelity text rendering** — Accurately render text within generated images
> - **Consistent character generation** — Maintain character identity across multiple generations
> 
> **Why developers use the GPT Image 2 API:**
> - One API call for both generation and editing
> - Superior prompt adherence compared to previous models
> - Native support for aspect ratios, transparency, and batch generation
> - Works with OpenAI's standard API format (`/v1/images/generations`)
> 
> > Learn more about using the API in the [Use GPT Image 2 API](#-use-gpt-image-2-api) section below.
> 
> 
> ## 📰 News
> 
> - **May 14, 2026:** Added 19 new GPT-Image-2 prompt cases (3 portrait, 10 poster, 4 ui, 1 comparison, 1 ad creative) from daily curation batch
> 
> - **May 13, 2026:** Added 19 new GPT-Image-2 prompt cases (3 portrait, 10 poster, 1 ui, 1 comparison, 4 ad creative) from daily curation batch
> 
> - **May 12, 2026:** Added 12 new GPT-Image-2 prompt cases (2 portrait, 9 poster, 1 ui) from daily curation batch
> 
> - **May 11, 2026:** Added 16 new GPT-Image-2 prompt cases (5 portrait, 8 poster, 3 ad creative) from daily curation batch
> 
> - **May 10, 2026:** Added 19 new GPT-Image-2 prompt cases (4 portrait, 11 poster, 3 ui, 1 comparison) from daily curation batch
> 
> - **May 9, 2026:** Added 19 new GPT-Image-2 prompt cases (6 portrait, 12 poster, 1 comparison) from daily curation batch
> 
> - **May 8, 2026:** Added 36 new GPT-Image-2 prompt cases (24 portrait, 6 poster, 6 ui) from daily curation batch
> - **May 7, 2026:** Added 20 new GPT-Image-2 prompt cases (10 portrait, 9 poster, 1 ui) from daily curation batch
> - **May 6, 2026:** Added 7 new GPT-Image-2 prompt cases (2 portrait, 5 poster) from daily curation batch after review and media validation
> - **May 5, 2026:** Added 12 new GPT-Image-2 prompt cases from today's approved curation batch (4 portrait, 5 poster, 3 ui) after review and media validation
> - **May 3, 2026:** Added 10 new GPT-Image-2 prompt cases from the daily approved batch (1 e-commerce, 1 ad creative, 3 portrait, 2 poster, 3 ui) after review and media validation
> 
> 📜 Older Updates
> 
> - **May 2, 2026:** Added 18 new GPT-Image-2 prompt cases from the last 48-hour search batch (3 portrait, 7 poster, 4 ui, 4 comparison) after review and media validation
> - **April 30, 2026:** Added 9 new GPT-Image-2 prompt cases from the last 24-hour search batch (3 portrait, 1 poster, 3 ui, 2 comparison) after approval and media validation
> - **April 29, 2026:** Added 22 new GPT-Image-2 prompt cases across the review batches (3 e-commerce, 3 ad creative, 4 portrait, 2 character, 9 poster, 1 comparison), synced localized prompt entries for Cases 102 and 103, and incorporated the broader valid keep-set pass
> - **April 26, 2026:** Added 9 new GPT-Image-2 prompt cases (1 character, 7 poster, 1 ui)
> - **April 25, 2026:** Added 81 new GPT-Image-2 prompt cases (2 character, 20 portrait, 42 poster, 17 ui)
> - **April 24, 2026:** Added 19 new GPT-Image-2 prompt cases (6 comparison, 6 poster, 7 ui)
> - **April 23, 2026:** Added 5 new GPT-Image-2 prompt cases (5 ui)
> - **April 23, 2026:** Standardized case titles in `README.md` and all localized README files, including menu entries, anchors, and case headings
> - **April 21, 2026:** Categorized 48 new prompt cases into the gallery sections and downloaded linked output images
> - **April 21, 2026:** Added 12 new GPT-Image-2 prompts across portrait, poster, UI, and comparison cases
> - **April 20, 2026:** Added 10 newly curated GPT-Image-2 prompts with local image assets and README updates.
> - **April 20, 2026:** Added 2 new GPT-Image-2 prompt cases (1 character, 1 poster)
> - **April 19, 2026:** Added 10 new GPT-Image-2 prompts across poster, UI, and comparison cases
> - **April 19, 2026:** Added 5 new GPT-Image-2 prompt cases (3 poster, 2 ui)
> - **April 18, 2026:** First repository release with curated GPT-Image-2 case set
> 
> 
> ## Contents
> 
> - [🍌 Introduction](#-introduction)
> - [❓ What is GPT Image 2?](#-what-is-gpt-image-2)
> - [📰 News](#-news)
> - 

## 延伸閱讀

相關概念：[[文本到圖像生成]] · [[多模態]] · [[生成對抗網絡]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts) · [官方網站](https://evolink.ai/gpt-image-2-prompts)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["文本到圖像生成","多模態","生成對抗網絡"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "EvoLinkAI" AND file.name != "EvoLinkAI--awesome-gpt-image-2-API-and-Prompts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-API-and-Prompts");
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

> **2026-04-23** — 首次收錄
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

- [[2026-04-25|2026-04-25]] — 再次上榜，3.2k stars
- [[2026-04-24|2026-04-24]] — 再次上榜，2.7k stars
- [[2026-04-23|2026-04-23]] — 首次收錄，1.8k stars
