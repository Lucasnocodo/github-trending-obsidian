---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2"
stars: 3244
stars_per_day: 541
forks: 292
open_issues: 6
created: 2026-04-18
pushed_at: 2026-04-24
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
use_case: "提供高品質的 GPT-Image-2 提示詞和圖像範例，幫助用戶生成各類圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 51055
readme_length: 9948
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244"
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
  - "提供高品質的 GPT-Image-2 提示詞和圖像範例，幫助用戶生成各類圖像。"
---

# awesome-gpt-image-2-prompts

**2.8k** stars · **550** stars/天 · 建立 5 天前 · Python · NOASSERTION

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
> 提供高品質的 GPT-Image-2 提示詞和圖像範例，幫助用戶生成各類圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (550 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質圖像的設計師和開發者，尤其是對 GPT-Image-2 API 有興趣的人。
> **一句話重點** 這個專案的價值在於提供了高品質的提示詞範例，讓用戶能夠快速生成多樣化的圖像。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到快速生成圖像的能力，值得一試。

> [!abstract] 核心創新
> 專案提供了一系列高品質的提示詞範例，專注於生成式圖像的多樣化應用。

## 專案簡介

這個專案專注於收集和整理高品質的 GPT-Image-2 提示詞，涵蓋了肖像、海報、角色設計、UI 模擬以及社群實驗等多個領域。用戶可以透過提供的提示詞生成多樣化的圖像，這些提示詞來自於社交媒體、創作者社群和公共示範。核心賣點在於提供可重用的提示模式和特定任務的範例，讓用戶能夠快速生成符合需求的圖像。使用者只需將提示詞傳遞給 GPT-Image-2 API，即可獲得相應的圖像輸出。這樣的設計使得用戶不必從頭開始創建提示，而是可以依賴已有的範例進行修改和擴展。

技術上，專案使用 Python 實作，並依賴 OpenAI 的 API 進行圖像生成，這意味著用戶需要一個有效的 API 金鑰來進行操作。與其他類似工具相比，如 `0xGF/boneyard` 和 `432539/gpt2api`，這個專案提供了更為豐富的範例和更具針對性的提示詞，特別適合需要快速生成特定類型圖像的用戶。實際使用中，這個專案的效果取決於用戶對提示詞的理解和調整能力，並且需要一定的實驗來找到最佳的提示詞組合。社群活躍度不高，開放的問題數量顯示出使用者在使用過程中可能會遇到一些挑戰。整體來看，這是一個適合對生成式圖像有需求的開發者和設計師的工具，尤其是在需要快速生成多樣化圖像的情境下。

**技術棧**：`Python` · `OpenAI API`

## 重點功能

- 高品質提示詞 — 提供針對肖像、海報、角色設計等多種場景的提示詞範例。
- 社群實驗 — 收錄來自社交媒體和創作者社群的實驗結果，提供靈感。
- 可重用模式 — 用戶可以根據已有的提示詞進行修改，快速生成所需圖像。
- 多樣化範例 — 涵蓋多種風格和主題，適合不同需求的用戶。
- 簡單集成 — 可以輕鬆與 OpenAI API 集成，快速開始使用。

## 快速開始

1. 安裝依賴
```bash
pip install openai
```
2. 設置 API 金鑰
```bash
export OPENAI_API_KEY='your_api_key'
```
3. 使用提示詞生成圖像
```bash
python generate_image.py --prompt 'your_prompt_here'
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 OpenAI 的 Python 客戶端。",
  "程式碼": "import openai\n\nresponse = openai.Image.create(\n  prompt='A futuristic cityscape at sunset',\n  n=1,\n  size='1024x1024'\n)\nimage_url = response['data'][0]['url']",
  "預期輸出": "返回生成的圖像 URL。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2750 stars（550/天），forks 240（8.7%），這顯示出相對較高的使用者興趣。專案的主要貢獻者 EvoLinkAI 在生成式 AI 領域有一定的背景，這使得他們能夠針對用戶需求提供實用的解決方案。這個專案解決了用戶在生成圖像時需要的高品質提示詞問題，之前的工具往往缺乏針對性和範例，導致用戶在創建提示時面臨困難。社群的反饋和建議也促進了專案的持續改進，顯示出用戶對於優化和擴展功能的需求。整體來看，這個專案的增長主要來自於使用者對於生成式圖像的需求和對高品質提示詞的渴望。

## 適合誰使用

**目標受眾**：需要快速生成高品質圖像的設計師和開發者，尤其是對 GPT-Image-2 API 有興趣的人。

> [!example] 使用場景
> - 設計師用它來生成 UI 模擬圖，因為可以快速獲得多種設計風格的參考，節省時間。
> - 遊戲開發者用它來創建角色設計圖，因為提供的提示詞能夠幫助他們快速構思角色外觀。
> - 內容創作者用它來製作社交媒體海報，因為能夠根據提示詞生成吸引人的視覺內容，提升互動率。

## 架構分析

這個專案採用簡單的 Python 腳本結構，主要依賴 OpenAI 的 API 進行圖像生成。用戶只需提供提示詞，系統會將其發送至 API，並返回生成的圖像。這樣的設計使得用戶能夠快速上手，並且不需要深入了解底層的實作細節。

選擇 Python 作為開發語言是因為其在數據科學和 AI 領域的廣泛應用，並且有著豐富的庫支持。這種架構的缺點是對於大規模生成請求可能會受到 API 限制的影響，並且需要穩定的網路連接。整體來看，這個架構適合小型到中型的生成需求，但在高頻率請求時可能會遇到瓶頸。

## 技術深入分析

專案的核心技術在於利用 OpenAI 的 GPT-Image-2 API 進行圖像生成，這需要用戶提供精確的提示詞。這些提示詞的設計直接影響生成圖像的質量和風格，因此專案特別強調提示詞的多樣性和針對性。專案的效能特性取決於 OpenAI API 的響應速度和生成質量，對於小型項目來說，這樣的設計是可行的，但在大規模應用中可能會遇到瓶頸。選擇 Python 作為開發語言的好處在於其簡單易用，並且有著豐富的庫支持，這使得開發和維護變得更加高效。技術風險方面，依賴於外部 API 可能會導致服務中斷或性能不穩定，這是需要考慮的風險。整合方面，與現有的開發工具鏈相容性良好，特別是對於使用 Python 的開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的說明和範例，安裝過程相對順暢。雖然沒有專門的入門指南，但用戶可以通過 README 獲得足夠的信息來開始使用。文件有多語言版本，增加了可讀性。

## 優缺點分析

> [!success] 優點
> - 提供高品質的提示詞範例，幫助用戶快速生成圖像。
> - 社群貢獻的實驗結果，增強了實用性和靈活性。
> - 簡單易用，適合各類用戶。

> [!danger] 缺點
> - 依賴於 OpenAI 的 API，可能會受到限制。
> - 生成圖像的質量高度依賴於提示詞的設計。
> - 社群活躍度不高，問題解決速度慢。

> [!warning] 注意事項
> - 需要有效的 OpenAI API 金鑰才能使用。
> - 生成的圖像質量依賴於提示詞的質量，可能需要多次調整。
> - 目前僅支持英文提示詞，其他語言可能效果不佳。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供的提示詞範例較少，且缺乏針對性，適合需要簡單生成的用戶。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要針對文本生成，對於圖像生成的支持較弱，適合文本創作的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 用 Rust 實作，記憶體用量少，但插件生態不如 Python。 | 如果你的團隊需要高效的性能且熟悉 Rust，這個工具可能更適合。 | medium，因為需要重新適應 Rust 的開發環境。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，對於圖像生成的支持較弱。 | 如果你的主要需求是文本生成，這個工具會更合適。 | low，因為兩者在 API 使用上有相似之處。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 用 Rust 實作，記憶體用量少，但插件生態不如 Python。 | 專注於文本生成，對於圖像生成的支持較弱。 |
> | 遷移成本 | - | medium，因為需要重新適應 Rust 的開發環境。 | low，因為兩者在 API 使用上有相似之處。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效的性能且熟悉 Rust，這個工具可能更適 | 如果你的主要需求是文本生成，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的圖像質量不穩定，可能需要多次調整提示詞。
  - 解法：多嘗試不同的提示詞組合以獲得最佳效果。
- **[HIGH]** API 限制可能導致生成請求失敗。
  - 解法：注意 API 使用限制，避免高頻請求。
- [MEDIUM] 社群活躍度不高，問題解決速度慢。
  - 解法：尋找其他資源或社群以獲得幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的設計需求 | 非常適合 | 能快速生成多樣化的設計圖像，節省時間和成本。 |
| 大型企業的高頻圖像生成需求 | 不適合 | 可能會受到 API 限制影響，無法滿足高頻請求。 |
| 個人開發者的創意項目 | 適合 | 提供了靈活的提示詞選擇，能夠激發創意。 |
| 需要多語言支持的國際化項目 | 普通 | 目前僅支持英文提示詞，其他語言效果不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速生成圖像的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 API 金鑰；不存取敏感資料，依賴於 OpenAI 的安全性。

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
| Forks | 240 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2) |
| Repo 大小 | 49.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 50 |

## 社群與生態

**社群活躍度**：社群活躍度不高，開放問題數量顯示出使用者在使用過程中可能會遇到一些挑戰。
**連結**：[文件](https://evolink.ai/gpt-image-2)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-23）
> **活躍天數** 1 天 · **最新 commit** chore: add Apache License 2.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/8) | Observation: user prompt and final image-generation prompt c | 0 | 0 |
> | [#7](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/7) | 如何贡献内容到仓库？ | 0 | 0 |
> | [#6](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/6) | 优化建议: 添加提示词评分系统和模板系统 | 0 | 0 |
> | [#5](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/5) | 提示词涉黄了 | 0 | 0 |
> | [#3](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/3) | 提示词错误 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](LICENSE)
> [](https://evolink.ai/gpt-image-2?utm_source=github&utm_medium=picture&utm_campaign=awesome-gpt-image-2-prompts)
> [](https://evolink.ai/gpt-image-2?utm_source=github&utm_medium=picture&utm_campaign=awesome-gpt-image-2-prompts)
> [](https://evolink.ai/gpt-image-2?utm_source=github&utm_medium=picture&utm_campaign=awesome-gpt-image-2-prompts)
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
> Try it on Evolink: [GPT-Image-2](https://evolink.ai/gpt-image-2?utm_source=github&utm_medium=picture&utm_campaign=awesome-gpt-image-2-prompts)
> 
> If you find this useful, consider giving it a star. ⭐
> 
> > [!NOTE]
> > This repository focuses on reusable prompt patterns, reference cases, and task-specific examples for GPT-Image-2 on Evolink.
> > Recent prompt-only updates are also tracked in `gpt_image_2_prompt.json`.
> 
> 
> ### Case 20: [Create image of Magazine feature article [travel] guide page, cute, informati...](https://x.com/andis13/status/2047204384811921764?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-prompts) (by [@andis13](https://x.com/andis13))
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
> キャッチコピー:”「ここにセリフ」”
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
> ### Case 48: [Research LIME Drug Design and make a detailed infographic about it](https://x.com/WillSpagnoli/status/2047172976463040851?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-prompts) (by [@WillSpagnoli](https://x.com/WillSpagnoli))
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
> 35mm film photography, warm vintage Japanese onsen ryokan aesthetic, soft ambient wooden lantern lighting mixed with gentle natural window light, subtle film grain, gentle color shift, high atmosphere editorial style, intimate medium shot, early 20s beautiful Chinese female idol with ultra-realistic delicate refined Chinese features, seductive almond-shaped fox eyes with natural double eyelids, high nose bridge, small sharp V-shaped jawline, flawless porcelain skin with warm ivory undertone, visible subtle skin texture and micro pores, soft natural makeup with dewy glow, subtle rosy flush on cheeks, natural soft pink lips slightly parted, long dark brown hair tied in a loose low bun wi

## 延伸閱讀

相關概念：[[生成式對抗網絡]] · [[文本到圖像生成]] · [[提示詞工程]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[MemPalace--mempalace|MemPalace/mempalace]]

[GitHub](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) · [官方網站](https://evolink.ai/gpt-image-2)

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
> const concepts = ["生成式對抗網絡","文本到圖像生成","提示詞工程"];
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
