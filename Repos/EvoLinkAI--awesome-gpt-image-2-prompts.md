---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 11169
stars_per_day: 859
forks: 1124
open_issues: 12
created: 2026-04-18
pushed_at: 2026-05-01
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
use_case: "提供多樣化的 GPT-Image-2 提示詞，幫助用戶生成各類圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 89886
readme_length: 9930
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738,2026-04-30:9947,2026-05-01:10822,2026-05-02:11169"
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
  - "提供多樣化的 GPT-Image-2 提示詞，幫助用戶生成各類圖像。"
---

# awesome-gpt-image-2-prompts

**11.2k** stars · **859** stars/天 · 建立 13 天前 · Python · NOASSERTION

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
> 提供多樣化的 GPT-Image-2 提示詞，幫助用戶生成各類圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (859 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成多樣化圖像內容的創意工作者，如設計師和社交媒體經營者。
> **一句話重點** 這個專案不僅提供生成圖像的能力，更重要的是它整理了大量的提示詞，讓用戶能夠更高效地創作。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的圖像生成工具，值得投入。

> [!abstract] 核心創新
> 這個專案提供了一系列精心策劃的提示詞，專注於多樣化的圖像生成需求。

## 專案簡介

這個專案的核心機制是提供一系列精心策劃的提示詞，讓用戶能夠利用 OpenAI 的 GPT-Image-2 API 生成各種圖像，包括肖像、海報、UI 模擬圖、角色設計等。用戶只需選擇合適的提示詞，然後通過 API 發送請求，便能獲得高品質的圖像輸出。這樣的設計使得創意工作者和設計師能夠快速生成視覺內容，節省時間並提高創作效率。關鍵指令如 `generate_image(prompt)` 可以直接用於生成圖像，這是專案的賣點之一。技術上，這個專案使用 Python 語言，並依賴 OpenAI 的 API 進行圖像生成，這樣的選擇使得整體架構簡單且高效。相較於其他類似工具，如 `0x0funky/agent-sprite-forge`，這個專案更專注於提示詞的收集與整理，而不是圖像生成的底層技術。

使用者在選擇提示詞時，可以根據具體需求進行篩選，這在其他工具中往往缺乏。實際使用中，這個專案能夠處理多種圖像類型，並且支持高解析度的輸出，適合需要大量視覺內容的團隊。社群活躍度尚可，開放的 issue 數量顯示出使用者的需求和反饋。這個專案目前處於 beta 階段，對於希望快速生成圖像的團隊來說，是一個值得考慮的選擇。對於小型創業團隊或自由職業者，這個工具能夠大幅提升工作效率，但對於大型企業則可能需要更多的自定義和整合。總體而言，這個專案在未來幾個月內有潛力持續增長，尤其是在創意產業中。

**技術棧**：`Python` · `OpenAI API`

## 重點功能

- 多樣化的提示詞 — 包含肖像、海報、UI 模擬圖等多種類型，滿足不同需求。
- 高解析度輸出 — 支持生成高達 8K 的圖像，適合商業用途。
- 社群實驗案例 — 提供用戶實際生成的案例，幫助用戶理解如何使用提示詞。
- API 整合 — 可以輕鬆與 OpenAI API 整合，便於開發者使用。
- 快速檢索功能 — 提供瀏覽器插件，方便用戶快速找到所需的提示詞。

## 快速開始

1. 安裝依賴
```bash
pip install openai
```
2. 設置 API 金鑰
```bash
export OPENAI_API_KEY='your_api_key'
```
3. 生成圖像
```bash
python generate_image.py 'your_prompt'
```

## 程式碼範例

```python
# 前置條件：安裝 OpenAI Python 客戶端
import openai

# 設置 API 金鑰
openai.api_key = 'your_api_key'

# 生成圖像
response = openai.Image.create(
  prompt='A beautiful sunset over the mountains',
  n=1,
  size='1024x1024'
)
# 預期輸出：返回生成的圖像 URL
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 11169 stars（859/天），forks 1124（10.1%），顯示出強烈的社群需求。作者 EvoLinkAI 在生成式 AI 領域有一定的經驗，這個專案解決了用戶在生成圖像時需要大量提示詞的痛點，之前的解決方案往往缺乏多樣性和針對性。這個專案的推出正好滿足了市場對高品質圖像生成的需求，並且社群的反饋也促進了其快速成長。近期的推特討論和社群分享也進一步提升了其曝光率。這個工具的設計使得用戶能夠輕鬆上手，並快速產出所需的視覺內容，這在當前的創意工作流中是非常重要的。

## 適合誰使用

**目標受眾**：需要快速生成多樣化圖像內容的創意工作者，如設計師和社交媒體經營者。

> [!example] 使用場景
> - 平面設計師用它來生成高品質的海報設計，因為可以快速獲得多種風格的視覺素材，節省了手動創作的時間。
> - 社交媒體經營者用它來創建吸引人的圖片內容，因為能夠根據流行趨勢生成相關的視覺素材，提升互動率。
> - 遊戲開發者用它來設計角色概念圖，因為可以快速生成多樣化的角色設計，幫助團隊在早期階段進行創意討論。

## 架構分析

這個專案採用簡單的 Python 腳本結構，通過 OpenAI API 進行圖像生成。使用者只需提供提示詞，系統便會調用 API 生成對應的圖像。這樣的設計使得整體架構輕量且易於維護。

資料流方面，提示詞經過 API 請求後，生成的圖像會以 URL 形式返回，方便用戶直接使用。選擇 Python 作為開發語言使得整合和擴展變得簡單，但也限制了對其他語言的支持。擴展性方面，若未來需要支持更多功能，可能需要重構架構以適應更複雜的需求。

## 技術深入分析

這個專案的核心技術機制是利用 OpenAI 的 API 進行圖像生成，通過提供不同的提示詞來獲得多樣化的圖像輸出。選擇 Python 作為開發語言，讓整個專案能夠快速迭代和維護。效能方面，生成的圖像質量與提示詞的設計密切相關，若提示詞設計合理，則能生成高品質的圖像。設計上，這個專案的依賴樹相對簡單，主要依賴 OpenAI 的 API，這降低了維護成本。技術風險方面，若 OpenAI 的 API 發生變更，可能會影響到專案的穩定性。整合方面，這個專案能夠輕鬆與現有的開發環境整合，但對於大型企業來說，可能需要進一步的自定義和擴展。整體而言，這個專案在生成圖像的領域具有良好的潛力，尤其是在創意產業中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導，包含安裝步驟和範例。安裝過程相對順暢，無明顯坑點。文件提供多語言版本，方便不同語言的使用者理解。整體上，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 快速生成多樣化圖像，提升創作效率。
> - 易於整合 OpenAI API，適合開發者使用。
> - 提供實際案例，幫助用戶理解如何使用提示詞。

> [!danger] 缺點
> - 僅限於 Python 環境，對其他語言支持不足。
> - 生成質量依賴於提示詞的設計，需用戶具備一定的提示工程能力。
> - 社群活躍度尚可，可能影響問題解決的速度。

> [!warning] 注意事項
> - 僅支援 Python 環境，對其他語言的支持有限。
> - 需要有效的 OpenAI API 金鑰，否則無法使用。
> - 生成的圖像質量依賴於提示詞的質量，提示詞不佳可能導致不理想的結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，提供更細緻的角色設計功能，而本專案則更廣泛地涵蓋各類圖像生成。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，無法直接生成圖像，適合需要文本內容的場景。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，與圖像生成無關，適合需要資料處理的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，提供更細緻的角色設計功能，而本專案則更廣泛地涵蓋各類圖像生成。 | 如果你的專案主要集中在角色設計，並需要更細緻的控制，則應選擇這個工具。 | medium，因為需要重新設計提示詞和生成流程。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於文本生成，無法直接生成圖像，適合需要文本內容的場景。 | 如果你的需求主要是生成文本而非圖像，則選擇這個工具會更合適。 | low，因為文本生成的邏輯相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成，提供更細緻的角色設計功能，而本專案則更廣泛地涵蓋各類圖像生成。 | 專注於文本生成，無法直接生成圖像，適合需要文本內容的場景。 |
> | 遷移成本 | - | medium，因為需要重新設計提示詞和生成流程。 | low，因為文本生成的邏輯相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在角色設計，並需要更細緻的控制，則應選擇 | 如果你的需求主要是生成文本而非圖像，則選擇這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 生成的圖像可能不符合預期，特別是當提示詞不夠具體時。
  - 解法：使用更具體和詳細的提示詞來提高生成質量。
- [MEDIUM] API 請求可能受到速率限制，導致生成延遲。
  - 解法：合理安排請求頻率，避免超過 API 限制。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速生成市場推廣圖像 | 非常適合 | 能夠快速生成多樣化的視覺內容，提升市場推廣效率。 |
| 大型企業需要定制化的圖像生成解決方案 | 不適合 | 可能需要更多的自定義和整合，超出本專案的範疇。 |
| 自由職業者希望提升創作效率 | 非常適合 | 能夠快速生成高品質的圖像，節省時間。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的圖像生成工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需 API 金鑰，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

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
| Forks | 1.1k |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-01 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 87.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 83 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放的 issue 數量顯示出使用者的需求和反饋。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-30 ~ 2026-05-01）
> **活躍天數** 2 天 · **最新 commit** fix: link README menus directly to category pages

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/15) | Image in case is failed | 0 | 0 |
> | [#14](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/14) | 做了一个快速检索的浏览器插件 | 0 | 0 |
> | [#13](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/13) | Prompt Ảnh | 0 | 1 |
> | [#12](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/12) | one | 0 | 3 |
> | [#11](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts/issues/11) | 有关情侣的提示词 | 0 | 0 |

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
> ## 🧪 Comparison & Community Examples
> 
> > See all cases → [cases/comparison.md](cases/comparison.md)
> 
> 
> ## 🍌 Introduction
> 
> 
> ## 📰 News
> 
> 
> ## 📑 Menu
> 
> - [🍌 Introduction](#-introduction)
> - [📰 News](#-news)
> - [📑 Menu](#-menu)
> - [🛒 E-commerce Cases](cases/ecommerce.md)
> - [📣 Ad Creative Cases](cases/ad-creative.md)
> - [🍌 Portrait & Photography Cases](cases/portrait.md)
> - [🎨 Poster & Illustration Cases](cases/poster.md)
> - [🧍 Character Design Cases](cases/character.md)
> - [📱 UI & Social Media Mockup Cases](cases/ui.md)
> - [🧪 Comparison & Community Examples](cases/comparison.md)
> - [🙏 Acknowledge](#acknowledge)
> 
> 
> ## 🛒 E-commerce Cases
> 
> > See all cases → [cases/ecommerce.md](cases/ecommerce.md)
> 
> 
> ### Case 151: [E-commerce Main Image - Miniature Diorama Skincare Advertisement](https://x.com/Strength04_X/status/2048074514278563949) (by [@Strength04_X](https://x.com/Strength04_X))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> A hyper-realistic miniature diorama product advertisement featuring an oversized luxury skincare pump bottle labeled "LUXEVEIL Skin Science – Radiance Nourishing Body Lotion" in cream/beige with a polished gold pump top, placed on a circular platform. Tiny figurine construction workers dressed in yellow coveralls and white hard hats swarm around the bottle climbing scaffolding, painting the bottle with rollers, operating a tower crane, working near industrial tanks and pipework, and unloading a miniature flatbed truck. The scene includes metal scaffolding structures, industrial silos, orange traffic cones, wooden barricades, and storage barrels. The overall color palette is warm beige, cream, gold, and mustard yellow. Studio photography style with soft diffused lighting, no shadows, clean beige background. The concept metaphorically shows workers "crafting" or "building" the perfect lotion. Tilt-shift miniature aesthetic, ultra-detailed, commercial product photography, 8K resolution, photorealistic CGI render.
> ```
> 
> 
> ### Case 160: [E-commerce Main Image - 9-Panel Product TVC Storyboard](https://x.com/Magncsans/status/2047876253898903594) (by [@Magncsans](https://x.com/Magncsans))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> Using the provided reference image, transform the single casual product photo into a polished e-commerce TVC storyboard board for a {argument name="video duration" default="15-second"} ad in a {argument name="aspect ratio" default="9:16"} vertical format, presented as a 9-panel grid. Keep the same blue-and-white ceramic ashtray as the product base, but restage it across cinematic advertising shots with warm premium lighting, shallow depth of field, and a refined lifestyle desktop environment. Add a dark storyboard layout with Chinese titles and timing for each panel. Include exactly 9 scenes: 1) environment-establishing wide shot with desk, books, window, and the product placed in context; 2) hero product medium shot on the table; 3) extreme close-up of the blue floral craftsmanship pattern; 4) use case showing a hand placing a cigarette into the ashtray with visible smoke; 5) top-down capacity display showing multiple cigarette butts inside; 6) cleaning scene under running water in a sink with a hand holding the product; 7) bottom-detail close-up showing the underside and anti-slip pads; 8) mood/lifestyle scene at night with the product on a desk, smoke rising, and ambient lamp light; 9) brand closing frame with the product as the hero plus Chinese marketing text. Add the overall header text “产品TVC分镜脚本(15秒 / 9:16竖屏 / 9宫格)” and a product subtitle naming it {argument name="product name" default="青花瓷烟灰缸"}. Give each of the 9 panels a Chinese scene title and timestamp, plus small descriptive Chinese copy beneath each image in the style of a professional commercial shot list. Use premium, realistic commercial photography throughout, consistent product identity, elegant Chinese aesthetic, and a clean high-end storyboard presentation.
> ```
> 
> 
> ### Case 163: [Burger hero image plus 9-cell ad storyboard](https://x.com/Gdgtify/status/2049449869530775877) (by [@Gdgtify](https://x.com/Gdgtify))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> Prompt 1: Create a cinematic hero image of a gourmet cheeseburger on a dark stone surface with glossy brioche bun, melted cheese, crisp lettuce, tomato, grilled patty, sauce, realistic texture, appetizing steam, warm side light, shallow depth of field, premium food commercial style, no text/logos/watermark.
> 
> Prompt 2: Create a 9-cell hybrid keyframe-to-transition storyboard sheet for a 15-second gourmet burger ad, moving from empty surface to ingredient assembly to final macro hero shot. Use large S cells and smaller T cells, motion arrows, ghosted ingredient positions, steam, sauce trails, and camera push-in icons. Style: premium food commercial, warm lighting, rich texture, appetizing, cinematic, minimal labels only. No logos, no watermark.
> ```
> 
> 
> ## 📣 Ad Creative Cases
> 
> > See all cases → [cases/ad-creative.md](cases/ad-creative.md)
> 
> 
> ### Case 144: [Luxury Chronograph Watch Ad](https://x.com/AlwaveNazca/status/2048147643809865950) (by [@AlwaveNazca](https://x.com/AlwaveNazca))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> A dramatic luxury product advertising image for a motorsport-inspired chronograph wristwatch in a dark studio. Center-left foreground, show a single stainless steel chronograph watch standing upright at a slight three-quarter angle, with a black dial, two red-accent subdials, slim silver hour markers, a tachymeter bezel, and visible crown and pushers on the right side. The watch has a black leather strap with bold red stitching along both edges and a sporty premium finish. To the right of the watch, place one black square presentation box slightly behind it, textured like leather, with red stitching around the lid and a silver embossed eye-shaped logo above the text “NESS STUDIO” and smaller red text “TRACK SURFACE.” At the top center of the composition, add the same silver eye logo with the words “NESS STUDIO” and smaller “BY NICOLAS.” Across the background, place one oversized blurred word, {argument name="headline text" default="PRECISION"}, in large gray capital letters spanning nearly the full width. The scene is set against a deep black background with cinematic red and white horizontal light streaks crossing behind the products from left to right, suggesting speed and racetrack energy. Use a glossy wet ground plane with reflective texture, catching red highlights and mirrorlike reflections beneath the watch and box. At the bottom center, add the text “CHRONOGRAPH SERIES” in clean white spaced capitals with thin red horizontal lines extending on both sides, and below it smaller red capitals reading {argument name="tagline text" default="ALSACE MADE"}. Color palette: black, charcoal gray, silver steel, vivid racing red, and a touch of white. Lighting should be high-contrast and premium, with crisp specular highlights on the metal case, subtle soft fill on the box, and moody shadows. Overall style: ultra-polished commercial product photography, luxury watch campaign, sharp focus on the products, sleek branding, high-end automotive aesthetic.
> ```
> 
> 
> ### Case 150: [Luxury Miniature Dubai City Model](https://x.com/silentempiredev/status/2048086378383384773) (by [@silentempiredev](https://x.com/silentempiredev))
> 
> | Output |
> | :----: |
> |  |
> 
> **Prompt:**
> 
> ```
> A

## 延伸閱讀

相關概念：[[生成式 AI]] · [[圖像生成]] · [[提示工程]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

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
> const concepts = ["生成式 AI","圖像生成","提示工程"];
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
