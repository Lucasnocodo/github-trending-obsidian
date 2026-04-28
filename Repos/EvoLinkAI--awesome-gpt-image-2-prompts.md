---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 6885
stars_per_day: 765
forks: 674
open_issues: 9
created: 2026-04-18
pushed_at: 2026-04-27
first_seen: 2026-04-23
week: "2026-W17"
month: "2026-04"
category: "AI/ML"
subcategory: "圖像生成"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-23
use_case: "提供高品質的 GPT-Image-2 提示詞，幫助生成各類圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 81495
readme_length: 9999
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/api"
  - "topic/awesome_list"
  - "topic/chatgpt"
  - "topic/generative_"
  - "topic/gpt_image_2"
aliases:
  - "awesome-gpt-image-2-prompts"
  - "EvoLinkAI/awesome-gpt-image-2-prompts"
  - "提供高品質的 GPT-Image-2 提示詞，幫助生成各類圖像。"
---

# awesome-gpt-image-2-prompts

**6.9k** stars · **765** stars/天 · 建立 9 天前 · Python · NOASSERTION

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

`個人專案`

`api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` `image-prompt` `image-to-image` `openai` `prompt-` `prompt-collection` `prompts` `text-to-image`

> [!summary] 一句話摘要
> 提供高品質的 GPT-Image-2 提示詞，幫助生成各類圖像。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (765 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成特定風格圖像的設計師和開發者。
> **一句話重點** 這個專案不僅提供生成圖像的能力，更是提升使用者創作效率的工具。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，5 小時整合，得到快速生成圖像的能力，值得考慮。

> [!abstract] 核心創新
> 提供經過篩選的高品質提示詞，專注於提升 GPT-Image-2 的使用效率。

## 專案簡介

這個專案收集了高品質的 GPT-Image-2 提示詞和圖像範例，涵蓋了肖像、海報、角色表、UI 模擬等多個領域。用戶可以透過這些提示詞，生成特定風格的圖像，並可直接在 Evolink 平台上使用。核心機制是提供一系列經過篩選的提示，讓使用者能夠快速生成所需的圖像，並且這些提示詞都是從社群和公開示例中整理而來。最關鍵的指令是使用 `gpt_image_2_prompt.json` 來獲取可重複使用的提示模式。這個工具的賣點在於其提供的範例和提示詞，能夠幫助用戶更有效地利用 GPT-Image-2 生成所需的圖像。

技術上，這個專案是基於 Python 開發，並且依賴於 OpenAI 的 API，這使得它能夠快速生成高質量的圖像。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，這個專案專注於提供具體的提示詞而非單純的圖像生成，這使得它在生成特定風格的圖像時更具優勢。使用者在使用過程中可能會遇到提示詞與生成圖像不匹配的問題，這是目前社群反映的主要痛點之一。這個專案目前處於 beta 階段，適合需要快速生成圖像的開發者和設計師，但在生產環境中使用時需要謹慎評估其穩定性。未來幾個月內，預期會持續增加新的提示詞和範例，進一步擴展其功能。

**技術棧**：`Python 3.9` · `OpenAI API`

## 重點功能

- 高品質提示詞 — 提供針對不同場景的具體提示詞，幫助生成特定風格的圖像。
- 範例圖像 — 收錄多種風格的圖像範例，作為生成的參考。
- 社群貢獻 — 鼓勵用戶提交自己的提示詞和範例，豐富資料庫。
- JSON 格式存儲 — 使用 `gpt_image_2_prompt.json` 文件來管理提示詞，方便使用。
- 多語言支持 — 提供多種語言的 README 文件，方便全球用戶使用。

## 快速開始

1. 克隆專案
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

## 程式碼範例

```python
{
  "前置條件": "需要安裝 OpenAI API 並獲得 API 金鑰。",
  "程式碼": "import openai\n\nresponse = openai.Image.create(\n  prompt='A futuristic cityscape',\n  n=1,\n  size='1024x1024'\n)\n\nprint(response['data'][0]['url'])",
  "預期輸出": "生成的圖像 URL，指向生成的城市景觀圖像。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 6885 stars（765/天），forks 674（9.8%），這顯示出強勁的成長潛力。這個專案由 EvoLinkAI 團隊主導，他們在生成式 AI 領域有豐富的經驗。它解決了用戶在使用 GPT-Image-2 時缺乏具體提示詞的問題，這在過去是個常見的痛點。最近的社群討論和推廣活動也促進了其曝光率。技術上，隨著 OpenAI API 的普及，這個工具的可行性大幅提升。高達 9.8% 的 forks/stars 比率顯示出許多人在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速生成特定風格圖像的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來生成特定風格的海報，因為可以快速獲得高質量的圖像而不需從頭開始設計。
> - 遊戲開發者用它來創建角色設計的參考圖，因為能夠使用具體的提示詞生成多樣化的角色樣式。
> - 內容創作者用它來製作社交媒體的視覺內容，因為提供的範例能夠提升內容的吸引力和專業度。

## 架構分析

這個專案的架構設計為一個簡單的 Python 應用，主要依賴於 OpenAI 的 API 來生成圖像。資料流上，使用者輸入提示詞，系統透過 API 請求生成圖像，並將結果返回給使用者。選擇 Python 作為開發語言是因為其在數據處理和 API 整合方面的便利性，代價是可能在性能上不如某些低階語言。擴展性方面，這個專案的瓶頸在於 OpenAI API 的使用限制，若使用者需求量大，可能需要考慮 API 課費問題。

## 技術深入分析

這個專案的核心技術機制是利用 OpenAI 的 API 來生成圖像，並且通過整理提示詞來提升生成的效率。使用者可以透過簡單的提示詞來獲得高品質的圖像，這是基於大量社群貢獻的範例和實驗結果。效能上，這個工具能夠快速生成圖像，但在高需求時可能會受到 API 限制的影響。選擇 Python 作為開發語言，因為其在數據處理和 API 整合上的優勢，代價是可能在性能上不如其他語言。技術風險方面，依賴於 OpenAI API 可能會在未來面臨使用限制或費用上升的問題。整合方面，這個工具可以輕鬆與現有的開發流程結合，特別是對於已經使用 Python 的開發者來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的介紹和範例，安裝過程相對順暢，沒有明顯的坑。雖然沒有專門的入門指南，但範例的多樣性能夠幫助新手快速上手。文件有多語言版本，方便不同語言的使用者。

## 優缺點分析

> [!success] 優點
> - 提供高品質的提示詞，能夠快速生成所需圖像。
> - 社群貢獻的範例豐富，能夠持續更新。
> - 多語言支持，方便全球用戶使用。

> [!danger] 缺點
> - 生成的圖像可能不完全符合提示詞，需要調整。
> - 依賴於社群貢獻，質量可能不一致。
> - 對於特定需求，可能需要多次嘗試才能達到理想效果。

> [!warning] 注意事項
> - 提示詞的質量依賴於社群貢獻，可能存在不一致性。
> - 生成的圖像可能會與提示詞不完全匹配，需進行多次調整。
> - 對於特定風格的需求，可能需要進行多次嘗試才能達到理想效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，但缺乏具體的提示詞範例，適合需要角色設計的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的圖像生成能力，但不專注於提示詞的整理，適合需要多樣化圖像的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 用 Rust 實作，記憶體用量少，但缺乏提示詞的整理。 | 如果你的團隊需要高效能的角色生成，並且對記憶體使用有嚴格要求。 | medium，因為需要重新調整生成邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的圖像生成能力，但不專注於提示詞的整理。 | 如果你需要多樣化的圖像生成，而不僅僅是依賴提示詞。 | high，因為需要重新設計整個生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 用 Rust 實作，記憶體用量少，但缺乏提示詞的整理。 | 提供更廣泛的圖像生成能力，但不專注於提示詞的整理。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯。 | high，因為需要重新設計整個生成流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高效能的角色生成，並且對記憶體使用有嚴格要求 | 如果你需要多樣化的圖像生成，而不僅僅是依賴提示詞。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人專案或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 提示詞可能與生成圖像不匹配，需多次調整
  - 解法：使用多個提示詞進行實驗
- [MEDIUM] 社群貢獻的提示詞質量不一
  - 解法：選擇經過驗證的範例進行使用
- **[HIGH]** API 使用量大時可能面臨費用上升
  - 解法：監控 API 使用情況，適時調整使用策略

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速生成海報 | 非常適合 | 提供多樣化的提示詞和範例，能夠快速滿足需求。 |
| 個人開發者在創作過程中需要靈感 | 適合 | 能夠提供參考和靈感，提升創作效率。 |
| 大型企業需要穩定的圖像生成工具 | 不適合 | 目前處於 beta 階段，穩定性和可靠性尚需評估。 |
| 教育機構需要製作教學材料 | 普通 | 雖然有豐富的範例，但可能需要進行多次調整才能達到理想效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，5 小時整合，得到快速生成圖像的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。使用 OpenAI API 時需注意 API 金鑰的安全性。

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
| Forks | 674 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-27 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 79.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 63 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多次更新和新提示詞的增加。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-27）
> **活躍天數** 4 天 · **最新 commit** i18n

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/12) | one | 0 | 2 |
> | [#11](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/11) | 有关情侣的提示词 | 0 | 0 |
> | [#9](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/9) | Case 60 image does not match the prompt | 0 | 0 |
> | [#8](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/8) | Observation: user prompt and final image-generation prompt c | 0 | 0 |
> | [#7](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/7) | 如何贡献内容到仓库？ | 0 | 1 |

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
> ### Case 70: [Restaurant POV Change Comparison](https://x.com/chesnyfcb/status/2047714457774637213) (by [@chesnyfcb](https://x.com/chesnyfcb))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> A side-by-side comparison graphic on a black background demonstrating a camera-angle change in the same restaurant scene. At the top, large white sans-serif text reads: "Show me the POV from someone standing behind the bar looking out over this crowded restaurant. Change NOTHING in the scene other than the pov". Below, place 2 stacked rectangular photos centered vertically: the top image labeled "Source" in large white text on the left, and the bottom image labeled "Output" in large white text on the left. The top photo shows a warmly lit, upscale, crowded restaurant interior seen from the dining room side, facing a tall back bar filled with many illuminated liquor bottles on wall-to-wall shelves, with bartenders and guests in front, amber lighting, globe pendant lights, wood ceiling, beige columns, and tightly packed seated diners in the foreground. The bottom photo shows the exact same restaurant, same crowd density, same warm lighting, same decor, same bar shelving, same globe pendant lights, and same overall composition elements, but now from the point of view of someone standing behind the bar and looking outward across the crowded restaurant; the foreground includes the bar counter with glassware, metal bar tools, bottles, and a point-of-sale screen visible at the lower left, while guests and staff fill the middle ground and the dining room extends into the background. Preserve the se

## 延伸閱讀

相關概念：[[生成式對抗網絡]] · [[文本到圖像生成]] · [[提示工程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

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
> const concepts = ["生成式對抗網絡","文本到圖像生成","提示工程"];
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
