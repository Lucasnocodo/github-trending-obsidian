---
repo: EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: CC0-1.0
description: "GPT-Image-2 API and Prompts"
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 14061
stars_per_day: 586
forks: 1399
open_issues: 4
created: 2026-04-18
pushed_at: 2026-05-12
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
use_case: "提供高品質的 GPT-Image-2 API 和提示，幫助用戶快速生成和編輯圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 78
repo_size_kb: 132558
readme_length: 9991
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738,2026-04-30:9947,2026-05-01:10822,2026-05-02:11169,2026-05-03:11512,2026-05-04:11807,2026-05-05:12089,2026-05-06:12351,2026-05-07:12629,2026-05-08:13012,2026-05-09:13513,2026-05-10:13707,2026-05-11:13801,2026-05-12:13928,2026-05-13:14061"
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
  - "提供高品質的 GPT-Image-2 API 和提示，幫助用戶快速生成和編輯圖像。"
---

# awesome-gpt-image-2-API-and-Prompts

**14.1k** stars · **586** stars/天 · 建立 24 天前 · Python · CC0-1.0

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
> 提供高品質的 GPT-Image-2 API 和提示，幫助用戶快速生成和編輯圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (586 stars/day)
> **授權** CC0-1.0 · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質圖像的開發者和設計師，特別是那些使用 OpenAI API 的人。
> **一句話重點** 這個專案不僅提供了強大的圖像生成能力，還建立了一個活躍的社群來持續豐富資源。

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
> **結論** 花 2 小時學習，3 小時整合，能快速生成圖像，值得投入。

> [!abstract] 核心創新
> 提供了一個全面的 GPT-Image-2 提示和 API 集合，讓開發者能夠快速生成和編輯圖像。

## 專案簡介

這個專案提供了一個精心策劃的 GPT-Image-2 API 和提示集合，讓用戶能夠從自然語言提示生成高品質的圖像。用戶只需透過簡單的 API 呼叫，例如使用 `curl` 指令，提交一個包含圖像描述的 JSON 請求，即可獲得生成的圖像。這個設計使得圖像生成過程簡化，並且支持多種圖像生成和編輯功能，如文本到圖像生成、圖像編輯和多輪對話調整。技術上，該專案使用了 OpenAI 的最新模型，並提供了 API 整合指南，讓開發者能夠輕鬆接入。

與其他圖像生成工具相比，GPT-Image-2 提供了更高的提示遵循度和更靈活的圖像生成選項，特別是在支持不同的長寬比和批量生成方面。實際使用中，這個工具能夠處理各種圖像生成需求，並且在社群中活躍，持續更新新的提示案例。對於需要快速生成圖像的開發者來說，這是一個非常合適的選擇，但對於需要高度自定義的圖像生成需求，可能會感到限制。整體來看，這個專案在穩定性和功能上都表現良好，適合中小型團隊使用，未來可能會進一步擴展功能和社群支持。

**技術棧**：`Python` · `OpenAI API`

## 重點功能

- 359+ 高品質提示 — 提供多種圖像生成和編輯的提示範例，涵蓋多個類別。
- 簡單的 API 整合 — 使用 `curl` 指令輕鬆連接到 GPT-Image-2 API，生成圖像。
- 多語言支持 — 提供 11 種語言的完整文檔，方便全球開發者使用。
- 即時圖像生成 — 支持即時生成和編輯圖像，提升開發效率。
- 社群貢獻 — 鼓勵用戶提交新的提示和案例，持續豐富資源庫。

## 快速開始

1. 安裝 GPT-Image-2 技能
```bash
npx evolink-gpt-image -y
```
2. 獲取 API 金鑰
```bash
前往 https://evolink.ai/dashboard
```
3. 使用 API 生成圖像
```bash
curl --request POST --url https://api.evolink.ai/v1/images/generations --header 'Authorization: Bearer YOUR_API_KEY' --header 'Content-Type: application/json' --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'
```

## 程式碼範例

```python
{
  "前置條件": "需要有效的 API 金鑰",
  "指令": "curl --request POST --url https://api.evolink.ai/v1/images/generations --header 'Authorization: Bearer YOUR_API_KEY' --header 'Content-Type: application/json' --data '{\"model\": \"gpt-image-2\", \"prompt\": \"A beautiful colorful sunset over the ocean\"}'",
  "預期輸出": "生成的圖像將根據提示內容返回。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 14061 stars（586/天），forks 1399（9.9%），這顯示出強勁的社群興趣。EvoLinkAI 是一個專注於 AI 應用的團隊，過去有多個成功的開源專案。這個專案解決了開發者在圖像生成過程中需要高品質提示和 API 整合的痛點，之前的工具往往缺乏這樣的資源。社群的活躍度和持續更新的提示案例也促進了使用者的參與度。這個工具的成功也反映了 AI 圖像生成技術的進步，使得這種工具變得更加可行和實用。forks/stars 比率接近 10%，顯示出許多開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成高品質圖像的開發者和設計師，特別是那些使用 OpenAI API 的人。

> [!example] 使用場景
> - 平面設計師用它來快速生成廣告海報，因為可以從簡單的文本描述生成高品質的視覺內容，節省了大量的設計時間。
> - 開發者用它來集成圖像生成到應用程式中，因為 API 的使用方式簡單，能夠快速實現圖像生成功能。
> - 內容創作者用它來生成社交媒體圖像，因為能夠根據即時的內容需求快速生成多樣化的圖像，提升了內容的吸引力。

## 架構分析

這個專案採用 API 驅動的架構，讓用戶能夠透過簡單的 HTTP 請求生成圖像。其核心是 OpenAI 的 GPT-Image-2 模型，這使得圖像生成過程能夠快速且高效。資料流方面，用戶提交的提示會被轉換為 API 請求，然後由後端模型處理並返回生成的圖像。

這種設計使得用戶不需要深入了解模型的內部運作，就能輕鬆使用圖像生成技術。選擇 API 驅動的方式，雖然簡化了使用流程，但也意味著用戶對於生成過程的控制相對有限，可能不適合需要高度自定義的應用場景。整體而言，這種架構適合中小型專案，未來可考慮擴展更多功能以滿足不同用戶需求。

## 技術深入分析

該專案的核心技術基於 OpenAI 的 GPT-Image-2 模型，這是一個先進的圖像生成和編輯模型，能夠從自然語言提示生成高質量的圖像。其設計模式為 API 驅動，這使得開發者能夠輕鬆接入並使用。該模型支持文本到圖像的生成，並且能夠進行圖像編輯，這在同類工具中是相對少見的。效能方面，該模型能夠快速生成圖像，並且支持批量請求，這對於需要大量圖像的應用場景非常有利。選擇 Python 作為開發語言，讓這個專案能夠輕鬆與其他 Python 生態系統的工具整合，但也可能導致在某些高性能需求下的效能瓶頸。技術風險方面，依賴於 OpenAI 的 API 可能會受到其服務穩定性和可用性的影響。整合方面，該專案能夠與主流的開發框架良好配合，但在某些情況下，可能需要額外的適配器來處理特定需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。文檔支持多語言，能夠幫助不同語言的開發者快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 API 接口，適合快速集成。
> - 提供多樣化的提示範例，幫助用戶快速上手。
> - 持續更新的社群支持，資源不斷豐富。

> [!danger] 缺點
> - 對於複雜需求可能需要多次調整提示。
> - 目前僅支持英文提示，其他語言可能影響效果。
> - API 使用量受到限制，需注意配額。

> [!warning] 注意事項
> - 目前僅支持英文提示，其他語言可能會影響生成效果。
> - 對於複雜的圖像需求，可能需要多次調整提示才能達到理想效果。
> - API 使用量可能受到限制，需注意配額。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更專注於遊戲角色生成的工具，而本專案則更廣泛涵蓋多種圖像類型。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，而本專案結合了圖像生成和編輯功能，提供更全面的解決方案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲角色生成，提供更專業的工具，而本專案則涵蓋更廣泛的圖像生成需求。 | 如果你的專案專注於遊戲開發，並需要生成角色圖像，這個工具會更合適。 | medium，因為需要重新調整生成的提示和 API 調用方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，與本專案的圖像生成功能相比，缺乏圖像編輯能力。 | 如果你的需求主要是文本生成而非圖像生成，則這個工具會更合適。 | low，因為 API 調用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-API-and-Prompts** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲角色生成，提供更專業的工具，而本專案則涵蓋更廣泛的圖像生成需求。 | 專注於文本生成，與本專案的圖像生成功能相比，缺乏圖像編輯能力。 |
> | 遷移成本 | - | medium，因為需要重新調整生成的提示和 API 調用方式。 | low，因為 API 調用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於遊戲開發，並需要生成角色圖像，這個工具會更 | 如果你的需求主要是文本生成而非圖像生成，則這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於複雜的圖像需求，可能需要多次調整提示才能達到理想效果。
  - 解法：多試幾次不同的提示，並參考社群提供的案例。
- **[HIGH]** API 使用量受到限制，需注意配額。
  - 解法：定期檢查使用情況，避免超出配額。
- [MEDIUM] 目前僅支持英文提示，其他語言可能影響生成效果。
  - 解法：使用英文提示，或尋找翻譯工具輔助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的市場推廣素材生成 | 非常適合 | 能快速生成高品質的市場推廣圖像，節省設計時間。 |
| 大型企業的產品圖像生成 | 適合 | 能夠處理大量的圖像生成需求，但可能需要多次調整提示。 |
| 個人開發者的創意項目 | 非常適合 | 簡單易用的 API 接口，適合快速實驗和創作。 |
| 需要高度自定義的圖像生成需求 | 不適合 | 對於複雜的需求，可能無法達到理想效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能快速生成圖像，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需 API 金鑰，並不存取敏感資料。依賴於 OpenAI 的 API 安全性，需定期檢查 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與其他 OpenAI 產品搭配使用，特別是在需要圖像生成的應用中。典型的工作流中，用戶可以在開發環境中使用 API 生成圖像，然後將生成的圖像整合進行品宣或產品展示。它能夠與主流的 CI/CD 工具（如 GitHub Actions）良好整合，並且支持與多種 IDE（如 VS Code）進行配合。最常見的整合問題是 API 調用的配額限制，開發者需要注意使用量。

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
| Forks | 1.4k |
| Open Issues | 4 |
| Issue 解決率 | 78% (14 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 129.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts) |
| Topics | `api` `awesome` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 108 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新新的提示和案例。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-12）
> **活躍天數** 6 天 · **最新 commit** feat: add 12 new GPT-Image-2 prompt cases (May 12 daily batch)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
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
> - [Contents](#contents)
> - [🔌 Use GPT Image 2 API](#-use-gpt-image-2-api)
> - [🛒 E-commerce Cases](#-e-commerce-cases)
> - [📣 Ad Creative Cases](#-ad-creative-cases)
> - [🍌 Portrait & Photography Cases](#-portrait--photography-cases)
> - [🎨 Poster & Illustration Cases](#-poster--illustration-c

## 延伸閱讀

相關概念：[[圖像生成]] · [[自然語言處理]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

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
> const concepts = ["圖像生成","自然語言處理","API 設計"];
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
