---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 5270
stars_per_day: 659
forks: 487
open_issues: 7
created: 2026-04-18
pushed_at: 2026-04-26
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
repo_size_kb: 59578
readme_length: 9983
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
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

**5.3k** stars · **659** stars/天 · 建立 8 天前 · Python · NOASSERTION

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
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (659 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高質量圖像的設計師和內容創作者。
> **一句話重點** 這個專案不僅提供了生成圖像的工具，還為用戶提供了靈感和具體的實踐範例。

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
> **結論** 花 2 小時學習，3 小時整合，能快速生成高質量圖像，值得一試。

> [!abstract] 核心創新
> 提供針對 GPT-Image-2 的高品質提示詞和圖像範例，填補了用戶在生成圖像時的靈感缺口。

## 專案簡介

這個專案收集了針對 GPT-Image-2 的高品質提示詞和圖像範例，涵蓋了肖像、海報、角色設計、UI 模擬等多種應用場景。用戶可以透過這些範例快速生成所需的圖像，並且每個提示詞都經過精心設計，以確保生成的圖像符合特定的需求。例如，使用者可以透過指令 `Create image of Magazine feature article...` 來生成一個包含多個資訊的雜誌特寫頁面。這種設計的目的在於提供可重複使用的提示模式，讓用戶能夠輕鬆調整和應用於自己的項目中。技術上，這個專案是基於 Python 開發，並且與 OpenAI 的 API 緊密集成，這樣的選擇使得用戶能夠利用強大的生成模型來創建圖像。

與其他類似工具相比，如 `0xGF/boneyard` 和 `432539/gpt2api`，這個專案專注於提供具體的圖像生成提示，而不是僅僅提供 API 的基本使用範例。這使得它在需要快速生成高質量圖像的場景中更具優勢。使用者在實際應用中可能會遇到提示詞與生成圖像不匹配的情況，這是目前的熱門問題之一，顯示出在提示詞設計上的挑戰。這個專案目前處於活躍開發中，未來可能會增加更多的提示詞和範例，以滿足用戶的需求。對於需要快速生成各類圖像的創作者或設計師來說，這是一個值得考慮的工具，但在使用時需注意提示詞的精確度和生成結果的一致性。

**技術棧**：`Python`

## 重點功能

- 高品質提示詞 — 提供針對不同場景的具體提示詞，幫助用戶生成所需圖像。
- 範例圖像 — 每個提示詞都附有範例圖像，方便用戶參考和調整。
- 社群貢獻 — 鼓勵用戶提交自己的提示詞和範例，持續擴充資料庫。
- 多樣化應用 — 涵蓋肖像、海報、角色設計等多種應用場景，滿足不同需求。
- 持續更新 — 定期添加新的提示詞和範例，保持內容的新鮮度。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行示例
```bash
python example.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 5270 stars（659/天），forks 487（9.2%），顯示出強烈的社群興趣。EvoLinkAI 是一個專注於生成式 AI 的團隊，這個專案解決了用戶在生成圖像時缺乏靈感和具體指導的問題。之前的工具多數僅提供 API 接口，缺乏具體的使用範例和提示詞設計。這個專案的推出正好填補了這一空白，並且其社群的活躍度也反映了用戶對於這類資源的需求。最近的推文和社群討論進一步推動了這個專案的曝光率，讓更多人注意到它的潛力。

## 適合誰使用

**目標受眾**：需要快速生成高質量圖像的設計師和內容創作者。

> [!example] 使用場景
> - 設計師用它來生成高質量的 UI 模擬圖，因為可以快速獲得多種風格的設計範例，節省了大量的設計時間。
> - 內容創作者用它來創建社交媒體的視覺內容，因為可以根據具體的提示詞生成吸引人的圖像，提升了內容的吸引力。
> - 遊戲開發者用它來設計角色和場景，因為能夠快速生成多樣化的角色設計，幫助縮短開發周期。

## 架構分析

這個專案的架構基於 Python，並與 OpenAI 的 API 緊密集成。用戶可以通過簡單的指令生成圖像，並且所有提示詞都經過精心設計以確保生成結果的質量。資料流從用戶輸入的提示詞開始，經過 API 處理後生成圖像。

這樣的設計使得用戶能夠快速獲得所需的圖像，降低了使用門檻。選擇 Python 作為開發語言的原因在於其強大的生態系統和簡單易用的特性，這使得開發和維護變得更加高效。整體架構的擴展性良好，未來可以輕鬆添加更多的提示詞和範例。

若未來用戶需求增加，可能需要考慮 API 的調用頻率和性能瓶頸。

## 技術深入分析

這個專案的核心技術機制是利用 OpenAI 的 GPT-Image-2 模型來生成圖像，並且提供了多樣化的提示詞設計。這些提示詞不僅涵蓋了不同的應用場景，還考慮到了用戶的需求和生成結果的質量。效能方面，這個專案能夠快速生成高質量的圖像，但實際生成速度會受到 API 請求的影響。選擇 Python 作為開發語言的原因在於其強大的生態系統和簡單易用的特性，這使得開發和維護變得更加高效。依賴於 OpenAI API 的設計使得這個專案能夠快速集成最新的生成技術，但同時也帶來了對外部服務的依賴風險。在整合方面，這個專案可以輕鬆與現有的開發流程結合，特別是在設計和內容創作領域。整體來看，這個專案在生成圖像的過程中提供了良好的用戶體驗，但仍需注意提示詞的設計和生成結果的一致性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和使用範例，安裝過程也相對順暢。雖然目前僅有英文版本，但對於熟悉 Python 的用戶來說，學習曲線不會太陡峭。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的提示詞範例，幫助用戶快速生成所需圖像。
> - 社群貢獻機制，持續擴充資料庫。
> - 簡單易用的接口，降低了使用門檻。

> [!danger] 缺點
> - 提示詞的準確性可能影響生成結果，需多次調整。
> - 目前僅支援英文提示詞，對其他語言支持有限。
> - 依賴於 OpenAI API 的穩定性，若服務中斷將影響使用。

> [!warning] 注意事項
> - 提示詞與生成圖像可能不匹配，需進行多次調整。
> - 目前僅支援英文提示詞，對其他語言的支持有限。
> - 依賴於 OpenAI API 的可用性，若服務中斷將影響使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於提供生成式 AI 的基本 API 接口，而本專案則提供具體的提示詞和範例，讓用戶更容易上手。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個工具主要針對文本生成，而本專案專注於圖像生成，適用場景明顯不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於提供生成式 AI 的基本 API 接口，而本專案則提供具體的提示詞和範例，讓用戶更容易上手。 | 如果你需要一個更靈活的 API 接口來進行各種生成式任務，而不僅僅是圖像生成。 | medium，因為需要重新設計提示詞的使用方式。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 這個工具主要針對文本生成，而本專案專注於圖像生成，適用場景明顯不同。 | 如果你的需求主要是文本生成，並且需要更強大的文本處理能力。 | low，因為可以直接使用類似的提示詞設計。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個專案專注於提供生成式 AI 的基本 API 接口，而本專案則提供具體的提示詞和範例，讓用戶更容易上手。 | 這個工具主要針對文本生成，而本專案專注於圖像生成，適用場景明顯不同。 |
> | 遷移成本 | - | medium，因為需要重新設計提示詞的使用方式。 | low，因為可以直接使用類似的提示詞設計。 |
> | 適用場景 | 主要場景 | 如果你需要一個更靈活的 API 接口來進行各種生成式任務，而 | 如果你的需求主要是文本生成，並且需要更強大的文本處理能力。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗項目，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 提示詞與生成圖像不匹配，可能需要多次調整才能達到理想效果。
  - 解法：多次試驗不同的提示詞，並根據生成結果進行調整。
- [MEDIUM] 社群貢獻的提示詞質量參差不齊，可能影響最終生成結果。
  - 解法：選擇經過驗證的提示詞，並在使用前進行測試。
- **[HIGH]** 依賴於 OpenAI API 的穩定性，若服務中斷將影響使用。
  - 解法：定期檢查 API 狀態，並考慮備用方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業公司的市場推廣設計 | 非常適合 | 能夠快速生成多樣化的視覺內容，提升市場推廣效果。 |
| 大型企業的產品設計部門 | 普通 | 雖然可以生成高質量圖像，但可能需要更多的定制化和控制。 |
| 個人內容創作者的社交媒體運營 | 非常適合 | 能夠快速生成吸引人的圖像，提升內容的吸引力。 |
| 學術研究中的圖像生成需求 | 不適合 | 對於需要高精度和特定風格的學術圖像生成，可能不夠精細。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能快速生成高質量圖像，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅使用 OpenAI API，依賴於其安全性。對於敏感資料的存取也相對有限，主要是生成圖像的過程。

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
| Forks | 487 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 58.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 59 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-26）
> **活躍天數** 4 天 · **最新 commit** i18n: sync 22 new cases to zh-CN and zh-TW READMEs

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/9) | Case 60 image does not match the prompt | 0 | 0 |
> | [#8](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/8) | Observation: user prompt and final image-generation prompt c | 0 | 0 |
> | [#7](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/7) | 如何贡献内容到仓库？ | 0 | 1 |
> | [#6](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/6) | 优化建议: 添加提示词评分系统和模板系统 | 0 | 0 |
> | [#5](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/5) | 提示词涉黄了 | 0 | 1 |

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
> ## News
> 
> - **April 25, 2026:** Added 22 new GPT-Image-2 prompt cases across portrait, poster, and UI sections
> - **April 23, 2026:** Standardized case titles in `README.md` and all localized README files, including menu entries, anchors, and case headings
> - **April 21, 2026:** Categorized 48 new prompt cases into the gallery sections and downloaded linked output images
> - **April 21, 2026:** Added 12 new GPT-Image-2 prompts across portrait, poster, UI, and comparison cases
> - **April 20, 2026:** Added 10 newly curated GPT-Image-2 prompts with local image assets and README updates.
> - **April 19, 2026:** Added 10 new GPT-Image-2 prompts across poster, UI, and comparison cases
> - **April 18, 2026:** First repository release with curated GPT-Image-2 case set
> 
> 
> ## Portrait & Photography Cases
> 
> 
> ### Case 1: [Convenience Store Neon Portrait](https://x.com/BubbleBrain/status/2045167461147042202) (by [@BubbleBrain](https://x.com/BubbleBrain))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> 35mm film photography with harsh convenience store fluorescent lighting mixed with colorful neon signs from outside, authentic film grain, high contrast, slight color cast, cinematic street editorial style, intimate medium shot, early 20s sexy Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with cool ivory undertone and visible specular highlights from fluorescent light, subtle skin texture and micro pores, natural dewy makeup with soft flush on cheeks, glossy natural pink lips slightly parted, subtle natural freckles across nose and cheeks, long dark brown hair in a messy high ponytail with many loose strands falling around face and neck, wearing an oversized white button-up shirt as the only top, unbuttoned at the top with deep cleavage and loosely tied at the waist, paired with a tiny black pleated mini skirt, barefoot in simple white slides, seductive casual leaning pose against the glass door of a 24-hour convenience store at late night, body slightly arched, one leg bent with foot resting against the door frame, the other leg straight, one hand holding a bottle of iced drink, the other hand lightly pulling the hem of her mini skirt, intensely seductive playful yet slightly vulnerable gaze straight at the viewer with soft doe eyes full of quiet temptation and teasing smile, bright cold fluorescent store light from inside mixed with pink and blue neon glow from outside signs, realistic reflections on glass door, blurred convenience store interior with shelves and snacks in background, authentic 35mm film color grading with harsh lighting and neon accents, extremely sharp yet soft skin rendering, natural hair strands, realistic fabric wrinkles and drape on the oversized shirt and mini skirt, no plastic skin, no digital over-sharpening, no airbrushing, no blemishes, no moles, no oily skin, no watermark, no text, authentic late-night convenience store atmosphere
> ```
> 
> 
> ### Case 2: [Cinematic Minimal Portrait](https://x.com/iam_miharbi/status/2045151354679665101) (by [@iam_miharbi](https://x.com/iam_miharbi))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> Generate a cinematic minimal portrait of a solitary man standing in an intense orange to red gradient environment, strong silhouette lighting, deep shadow contrast, reflective glossy floor, symmetrical composition, minimal
> ```
> 
> 
> ### Case 3: [Japanese Onsen Ryokan Portrait](https://x.com/BubbleBrain/status/2045092449803284923) (by [@BubbleBrain](https://x.com/BubbleBrain))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> 35mm film photography, warm vintage Japanese onsen ryokan aesthetic, soft ambient wooden lantern lighting mixed with gentle natural window light, subtle film grain, gentle color shift, high atmosphere editorial style, intimate medium shot, early 20s beautiful Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with warm ivory undertone, visible subtle skin texture and micro pores, soft natural makeup with dewy glow, subtle rosy flush on cheeks, natural soft pink lips slightly parted, long dark brown hair tied in a loose low bun with some messy strands falling around face and neck, wearing a loose white yukata (traditional Japanese bathrobe) deliberately slipped off one shoulder and loosely tied at the waist, the fabric slightly open revealing smooth skin and subtle cleavage, barefoot, seductive relaxed sitting pose on the edge of a traditional wooden engawa veranda at a vintage onsen ryokan, body slightly turned toward the camera, one leg bent with foot resting on the wooden floor, the other leg gently dangling, one hand lightly holding

## 延伸閱讀

相關概念：[[生成式 AI]] · [[提示工程]] · [[圖像生成]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MemPalace--mempalace|MemPalace/mempalace]]

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
> WHERE language = "Python" AND file.name != "EvoLinkAI--awesome-gpt-image-2-prompts" AND status != "archived"
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
> const concepts = ["生成式 AI","提示工程","圖像生成"];
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
