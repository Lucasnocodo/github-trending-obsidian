---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: N/A
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 8738
stars_per_day: 874
forks: 844
open_issues: 10
created: 2026-04-18
pushed_at: 2026-04-28
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
use_case: "提供高品質的 GPT-Image-2 提示詞與圖像範例，幫助用戶生成各類圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 85328
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - easy_install
  - "topic/api"
  - "topic/awesome_list"
  - "topic/chatgpt"
  - "topic/generative_"
  - "topic/gpt_image_2"
aliases:
  - "awesome-gpt-image-2-prompts"
  - "EvoLinkAI/awesome-gpt-image-2-prompts"
  - "提供高品質的 GPT-Image-2 提示詞與圖像範例，幫助用戶生成各類圖像。"
---

# awesome-gpt-image-2-prompts

**8.7k** stars · **874** stars/天 · 建立 10 天前 · N/A · NOASSERTION

```dataviewjs
const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` `image-prompt` `image-to-image` `openai` `prompt-` `prompt-collection` `prompts` `text-to-image`

> [!summary] 一句話摘要
> 提供高品質的 GPT-Image-2 提示詞與圖像範例，幫助用戶生成各類圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (874 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質圖像的設計師和內容創作者。
> **一句話重點** 這個專案讓用戶能夠透過簡單的提示詞生成高品質圖像，降低了創作的難度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "EvoLinkAI--awesome-gpt-image-2-prompts" && p.status !== "archived")
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
> **結論** 花 2 小時學習，3 小時整合，能快速生成高品質圖像，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於集中整理高品質的 GPT-Image-2 提示詞，讓用戶能夠快速生成各類圖像。

## 專案簡介

這個專案集中於收集和整理高品質的 GPT-Image-2 提示詞，涵蓋肖像、海報、角色設計、UI 模擬等多種應用場景。用戶可以透過提供的提示詞，生成各種風格的圖像，並且這些提示詞都是從社群實驗、公開示範和創作者社群中精選而來。核心賣點在於其可重用的提示模式，讓用戶能夠快速生成符合需求的圖像。使用者只需將提示詞輸入到 GPT-Image-2 API，系統會根據提示生成相應的圖像，這樣的設計大幅降低了創作的門檻。技術上，這個專案並未明確指出使用的框架或演算法，但其依賴於 OpenAI 的 API，這意味著其性能和生成質量與 OpenAI 的技術密切相關。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，這個專案專注於圖像生成的提示詞整理，而不是直接提供生成模型或 API 接口。這使得它在需要快速生成高質量圖像的場景中更具優勢，尤其適合設計師和內容創作者。使用者在使用過程中可能會遇到提示詞不匹配生成結果的問題，這需要用戶不斷調整提示詞以達到最佳效果。這個專案目前處於活躍開發階段，未來可能會持續增加更多的提示詞和範例，對於需要快速生成圖像的團隊來說，值得考慮使用。適合的場景包括：需要快速生成行銷素材的設計團隊、創作角色設計的遊戲開發者，以及需要製作 UI 模擬的產品設計師。

## 重點功能

- 高品質提示詞收集 — 提供多種場景的提示詞，涵蓋肖像、海報、角色設計等。
- 社群驅動的範例 — 提示詞來自於社群實驗和公開示範，確保實用性。
- 可重用的提示模式 — 用戶可以根據需求調整提示詞，靈活生成不同風格的圖像。
- 支持多語言 — 提供多種語言的提示詞，擴大使用範圍。
- 持續更新 — 定期增加新的提示詞和範例，保持內容的新鮮感。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts.git
```
2. 查看提示詞範例
```bash
cat README.md
```
3. 使用提示詞生成圖像
```bash
curl -X POST 'https://api.openai.com/v1/images/generations' -H 'Authorization: Bearer YOUR_API_KEY' -d '{"prompt": "YOUR_PROMPT"}'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 8738 stars（874/天），forks 844（9.7%），顯示出強烈的社群興趣。這個專案由 EvoLinkAI 團隊維護，專注於整理和分享 GPT-Image-2 的提示詞，解決了用戶在生成圖像時缺乏靈感的痛點。之前用戶通常需要自行探索和試錯，而這個專案提供了經過驗證的提示詞範例，使得生成過程更為高效。社群的反饋和需求驅動了這個專案的快速成長，並且其在 Twitter 和其他社交平台上的分享進一步提高了可見度。

## 適合誰使用

**目標受眾**：需要快速生成高品質圖像的設計師和內容創作者。

> [!example] 使用場景
> - 設計師用它來生成行銷素材的海報，因為可以快速獲得多種風格的設計選擇，節省了創作時間。
> - 遊戲開發者用它來創建角色設計的概念圖，因為提供的提示詞能夠激發創意並加速設計過程。
> - 產品設計師用它來製作 UI 模擬，因為可以根據具體需求生成符合品牌風格的圖像，提升設計效率。

## 架構分析

這個專案的架構主要是基於 OpenAI 的 API，使用者透過提供的提示詞生成圖像。設計上選擇了集中式的提示詞庫，這樣的選擇使得用戶能夠快速找到所需的提示詞，但也意味著用戶需要依賴於這個庫的更新和維護。資料流方面，使用者輸入提示詞後，系統將其發送至 OpenAI 的 API，並接收生成的圖像。這樣的設計使得生成過程相對簡單，但也可能面臨 API 限制和延遲的問題。擴展性方面，若未來需要增加更多的提示詞或範例，維護者需要持續投入時間和精力來更新庫內容。

## 技術深入分析

這個專案的核心技術機制在於利用 OpenAI 的 GPT-Image-2 API，通過用戶提供的提示詞生成圖像。這樣的設計使得用戶可以快速獲得所需的圖像，而不需要深入了解生成模型的內部運作。效能方面，生成的圖像質量依賴於提示詞的精確性和多樣性，對於不同的提示詞，生成的圖像可能會有顯著差異。設計上選擇了集中式的提示詞庫，這樣的選擇使得用戶能夠快速找到所需的提示詞，但也意味著用戶需要依賴於這個庫的更新和維護。技術風險方面，隨著使用者數量的增加，可能會面臨 API 限制和延遲的問題，這需要維護者持續關注。整合方面，這個專案可以輕鬆與現有的設計工具鏈結合，特別是對於需要快速生成圖像的設計師和內容創作者來說，整合的摩擦點相對較小。整體來看，這個專案在圖像生成的應用場景中具有很大的潛力，尤其是在設計和創作領域。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和使用範例，安裝過程相對簡單。雖然沒有詳細的 getting started guide，但用戶可以通過查看提示詞範例快速上手。文件有多語言版本，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的提示詞，適合不同的圖像生成需求。
> - 社群驅動的內容更新，保持提示詞的新鮮感和實用性。
> - 簡化了圖像生成的過程，降低了創作門檻。

> [!danger] 缺點
> - 提示詞質量不一，可能需要用戶自行篩選。
> - 依賴於 OpenAI API，對於不熟悉 API 的用戶有學習曲線。
> - 目前的功能主要集中於提示詞整理，缺乏直接的圖像生成工具。

> [!warning] 注意事項
> - 提示詞的生成質量依賴於用戶的輸入，可能需要多次調整以達到最佳效果。
> - 目前僅支持 OpenAI API，對於不熟悉 API 使用的用戶可能有一定的學習曲線。
> - 社群貢獻的提示詞質量參差不齊，需用戶自行篩選和驗證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成和動畫，而本專案則集中於提示詞整理和圖像生成。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，而本專案專注於 GPT-Image-2 的提示詞應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成和動畫，而本專案則集中於提示詞整理和圖像生成。 | 如果你的需求主要是角色動畫生成，而不是靜態圖像，則應選擇此工具。 | medium，因為需要重新適應不同的提示詞和生成方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，而本專案專注於 GPT-Image-2 的提示詞應用。 | 如果你需要文本生成而非圖像生成，則應選擇此工具。 | low，因為兩者都基於 OpenAI 的技術，轉換相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成和動畫，而本專案則集中於提示詞整理和圖像生成。 | 提供 GPT-2 的 API 接口，而本專案專注於 GPT-Image-2 的提示詞應用。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的提示詞和生成方式。 | low，因為兩者都基於 OpenAI 的技術，轉換相對容易。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是角色動畫生成，而不是靜態圖像，則應選擇此工 | 如果你需要文本生成而非圖像生成，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 提示詞與生成圖像不匹配的情況，可能導致用戶失望。
  - 解法：用戶需要不斷調整提示詞以達到最佳效果。
- **[HIGH]** API 限制可能導致生成速度變慢。
  - 解法：考慮分批次生成圖像，避免一次性請求過多。
- [MEDIUM] 社群貢獻的提示詞質量參差不齊，可能影響生成結果。
  - 解法：用戶需自行篩選和驗證提示詞的有效性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要快速生成行銷素材的設計團隊 | 非常適合 | 提供多樣化的提示詞，能快速滿足不同需求。 |
| 創作角色設計的遊戲開發者 | 適合 | 能夠生成多樣的角色設計概念圖。 |
| 需要製作 UI 模擬的產品設計師 | 普通 | 雖然有提示詞，但可能需要進一步調整以符合品牌風格。 |
| 大型企業的核心產品開發團隊 | 不適合 | 目前的功能和穩定性不夠，無法滿足高需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能快速生成高品質圖像，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需訪問 OpenAI API，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
| Forks | 844 |
| Open Issues | 10 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 83.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 67 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新提示詞和範例。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-26 ~ 2026-04-28）
> **活躍天數** 3 天 · **最新 commit** feat: add new prompt cases and sync localized updates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/13) | Prompt Ảnh | 0 | 1 |
> | [#12](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/12) | one | 0 | 3 |
> | [#11](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/11) | 有关情侣的提示词 | 0 | 0 |
> | [#9](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/9) | Case 60 image does not match the prompt | 0 | 2 |
> | [#8](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/8) | Observation: user prompt and final image-generation prompt c | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](LICENSE)
> [](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=badge&utm_campaign=awesome-gpt-image-2-prompts)
> [](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=badge&utm_campaign=awesome-gpt-image-2-prompts)
> [](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=badge&utm_campaign=awesome-gpt-image-2-prompts)
> [](https://github.com/EvoLinkAI/GPT-Image-2-Seedance2-Workflow)
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
> ## Comparison & Community Examples
> 
> 
> ## Introduction
> 
> Welcome to the awesome-gpt-image-2-prompts repository! 🤗
> 
> **We collect high-quality prompts and image examples for GPT-Image-2 across portraits, posters, character sheets, UI mockups, and community experiments.**
> 
> Most cases in this repository are curated from X/Twitter, creator communities, public demos, and shared experiments.
> 
> Try it on Evolink: [GPT-Image-2](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-prompts)
> 
> If you find this useful, consider giving it a star. ⭐
> 
> > [!NOTE]
> > This repository focuses on reusable prompt patterns, reference cases, and task-specific examples for GPT-Image-2 on Evolink.
> > Recent prompt-only updates are also tracked in `gpt_image_2_prompt.json`.
> 
> 
> ### Case 20: [Magazine Travel Guide Feature Article](https://x.com/andis13/status/2047204384811921764) (by [@andis13](https://x.com/andis13))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> Create image of Magazine feature article [travel] guide page, cute, information dense photo book style magazine feature article page. Add all necessary sections, tips, recommendations, information. add photos for any sections and recommendations if you like. Place the attached person at the precise location of [city, country]. Seamlessly blend the attached person as if they are sightseeing. Approach this task with the understanding that this is a critical, information rich page that will significantly influence visitor numbers, text accuracy is important. Fully use the entire [9:16] page. NEGATIVE PROMPT: coordinate texts @swiat_ai @ProfitAII
> ```
> 
> 
> ### Case 3: [Gal Game Character Introduction Page](https://x.com/09lyco/status/2045281845391323175) (by [@09lyco](https://x.com/09lyco))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> 最新モデルの画像生成ツールを使用して、
> このちびキャライラストと立ち絵を使って本物のサイトページのようにキャラクター紹介ページ風イラストを作ってください。 （紹介ページとして使ってもおかしくないもの）
> ギャルゲーのキャラクター紹介ページをイメージした高品質なもの。 顔の差分なども乗っている、CGイラストが存在する。ちびキャラが存在する。
> 
> 「ここに自己紹介」
> 
> 名前:（ここに名前） 
> イメージカラー:（ここに色） 
> 身長:（ここに身長）cm 
> 体重:（ここに体重）kg
> キャッチコピー:"「ここにセリフ」"
> ```
> 
> 
> ### Case 40: [Japanese AI Game Dev Overview Slide Prompt](https://x.com/ailovedirector/status/2046905387274891296) (by [@ailovedirector](https://x.com/ailovedirector))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> 横長のパワポ画像ここで生成してみて　どのモデル使ってるか判定するから、今のAIゲーム開発の概要をまとめた1枚パワポで　日本語で
> 
> ゲーム開発の技術に関して、工数ベースでどこにパワーかかるかの分析資料といかに量産が大事かについての説明とかのパワポ画も作って
> ```
> 
> **Prompt:**
> ```
> a Final Fantasy VIII Remake gameplay screenshot at next-gen fidelity (FF16 / GTA6 / RE9).
> ```
> 
> ---
> 
> **Prompt:**
> ```
> Create a commercial ad from the storyboard @[image1]
> ```
> 
> ---
> 
> 
> ### Case 48: [Research LIME Drug Design and make a detailed infographic about it](https://x.com/WillSpagnoli/status/2047172976463040851) (by [@WillSpagnoli](https://x.com/WillSpagnoli))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> Research LIME Drug Design and make a detailed infographic about it
> ```
> 
> 
> ### Case 161: [Parent-Child Miscommunication Infographic](https://x.com/sarinaashapi/status/2048307780864606708) (by [@sarinaashapi](https://x.com/sarinaashapi))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> {"type":"Japanese infographic","style":"simple, easy-to-understand flat vector diagram, clean white background, rounded light-gray outer frame, minimal pastel color palette, presentation-slide design, clear hierarchy, lots of whitespace, modern sans-serif Japanese typography","canvas":{"aspect_ratio":"16:9"},"headline":{"text":"{argument name=\"headline text\" default=\"親子のすれ違いは、記録があるかないかで起こる\"}","position":"top center","size":"large bold black"},"layout":{"structure":"2 side-by-side rounded panels beneath the headline","sections":[{"title":"記録がない場合(ズレる)","position":"left","count":8,"header_color":"muted blue-gray","panel_border":"light gray","labels":["親の記憶","子どもの記憶","あのとき決まったよね","まだ考えてたのに","ズレが大きくなる","志望校がコロコロ変わる","理由が『なんとなく』","言ってることが違う","関係がギクシャク","現実を見てほしい","ちゃんと決めてほしい","口を出しすぎると関係が悪くなる"],"contents":{"top_left":{"type":"parent icon with thought bubble","icon_color":"blue","caption":"親の記憶","bubble_text":"あのとき\n決まったよね"},"top_right":{"type":"child icon with thought bubble","icon_color":"pink","caption":"子どもの記憶","bubble_text":"まだ考えてたのに"},"center":{"type":"horizontal double-headed arrow","color":"blue-gray"},"bottom_center":{"type":"downward arrow leading to burst shape","color":"light gray","burst_text":"ズレが\n大きくなる"},"bottom_left":{"type":"rounded note box","bullet_count":4,"bullets":["志望校がコロコロ変わる","理由が『なんとなく』","言ってることが違う","関係がギクシャク"]},"bottom_right":{"type":"rounded note box","bullet_count":3,"bullets":["現実を見てほしい","ちゃんと決めてほしい","口を出しすぎると関係が悪くなる"]}}},{"title":"記録がある場合(ズレにくい)","position":"right","count":7,"header_color":"mustard yellow","panel_border":"light yellow","labels":["親の認識","子どもの認識","記録"],"contents":{"top_left":{"type":"parent icon with thought bubble containing document symbol","icon_color":"blue","caption":"親の認識"},"top_right":{"type":"child icon with thought bubble containing document symbol","icon_color":"pink","caption":"子どもの認識"},"center":{"type":"horizontal double-headed arrow","color":"mustard yellow"},"bottom_center":{"type":"circular record icon with document symbol","outline_color":"mustard yellow","text":"記録"},"bottom_left_connector":{"type":"curved arrow from parent to record","color":"blue"},"bottom_right_connector":{"type":"curved arrow from child to record","color":"pink"}}}],"spacing":"balanced, symmetrical"},"visual_language":{"icons":"generic human bust icons and simple document line icons","emphasis":"contrast the left panel's misunderstanding with the right panel's shared record","mood":"educational, calm, practical"},"text_language":"Japanese","render_quality":"crisp vector edges, infographic suitable for social media educational posts"}
> ```
> 
> 
> ## News
> 
> - **April 29, 2026:** Added 8 new GPT-Image-2 prompt cases (2 portrait, 6 poster) and synced localized prompt entries for Cases 102 and 103
> - **April 26, 2026:** Added 9 new GPT-Image-2 prompt cases (1 character, 7 poster, 1 ui)
> - **April 25, 2026:** Added 81 new GPT-Image-2 prompt cases (2 character, 20 portrait, 42 poster, 17 ui)
> - **April 24, 2026:** Added 19 new GPT-Image-2 prompt cases (6 comparison, 6 poster, 7 ui)
> - **April 23, 2026:** Added 5 new GPT-Image-2 prompt cases (5 ui)
> - **April 20, 2026:** Added 2 new GPT-Image-2 prompt cases (1 character, 1 poster)
> - **April 19, 2026:** Added 5 new GPT-Image-2 prompt cases (3 poster, 2 ui)
> - **April 17, 2026:** Added 1 new GPT-Image-2 prompt cases (1 poster)
> - **April 16, 2026:** Added 1 new GPT-Image-2 prompt cases (1 poster)
> - **April 23, 2026:** Standardized case titles in `README.md` and all localized README files, including menu entries, anchors, and case headings
> - **April 21, 2026:** Categorized 48 new prompt cases into the gallery sections and downloaded linked output images
> - **April 21, 2026:** Added 12 new GPT-Image-2 prompts across portrait, poster, UI, and comparison cases
> - **April 20, 2026:** Added 10 newly curated GPT-Image-2 prompts with local image assets and README updates.
> - **April 19, 2026:** Added 10 new GPT-Image-2 prompts across poster, UI, and comparison cases
> - **April 18, 2026:** First repository release with curated GPT-Image-2 case set
> 
> 
> ## E-commerce Cases
> 
> 
> ### Case 113: [E-commerce Main Image - Luxury Amber Perfume Ad](https://x.com/Polanco_IA/status/2047689647967609037) (by [@Polan

## 延伸閱讀

相關概念：[[生成對抗網絡]] · [[文本到圖像生成]] · [[提示工程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) · [官方網站](https://evolink.ai/gpt-image-2-prompts)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["生成對抗網絡","文本到圖像生成","提示工程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "EvoLinkAI--awesome-gpt-image-2-prompts" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "EvoLinkAI--awesome-gpt-image-2-prompts" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "EvoLinkAI" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
> const me = dv.page("Repos/EvoLinkAI--awesome-gpt-image-2-prompts");
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
