---
repo: EvoLinkAI/awesome-gpt-image-2-prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: NOASSERTION
description: "Curated GPT-Image-2 prompts fot the Openai API：image examples across portraits, posters, UI mockups, character sheets, and community experiments."
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 10822
stars_per_day: 902
forks: 1093
open_issues: 12
created: 2026-04-18
pushed_at: 2026-04-30
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
use_case: "提供多種 GPT-Image-2 的提示詞，幫助生成各類圖片。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 89562
readme_length: 9943
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738,2026-04-30:9947,2026-05-01:10822"
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
  - "提供多種 GPT-Image-2 的提示詞，幫助生成各類圖片。"
---

# awesome-gpt-image-2-prompts

**10.8k** stars · **902** stars/天 · 建立 12 天前 · Python · NOASSERTION

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
> 提供多種 GPT-Image-2 的提示詞，幫助生成各類圖片。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (902 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成高質量圖片的設計師和開發者。
> **一句話重點** 這個專案透過提供多樣化的提示詞，讓生成圖片變得更加簡單和高效。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到快速生成圖片的能力，值得考慮。

> [!abstract] 核心創新
> 提供了一個集成的提示詞庫，專為生成圖片而設計，簡化了用戶的創作過程。

## 專案簡介

這個專案提供了一系列針對 OpenAI 的 GPT-Image-2 API 的提示詞，涵蓋了肖像、海報、UI 模擬、角色設計等多種用途。用戶可以透過這些提示詞生成高質量的圖片，並且可以在不同的場景中使用，例如電子商務或社交媒體。核心賣點在於其廣泛的應用範圍和社群貢獻的實例，這讓開發者能夠快速找到合適的提示詞來滿足特定需求。技術上，這個專案是用 Python 實現，並且依賴於 OpenAI 的 API，這意味著用戶需要有 API 金鑰來進行調用。與其他類似工具相比，如 0x0funky/agent-sprite-forge，這個專案的優勢在於其專注於圖片生成的多樣性和社群支持的實例，而不是僅限於某一特定用途。

使用者可以透過簡單的 API 調用來生成圖片，這樣的設計使得即使是新手也能輕鬆上手。該專案的使用效果取決於用戶輸入的提示詞質量，這意味著用戶需要花時間去探索和實驗。社群的活躍度相對較高，但目前的問題解決率較低，可能會影響使用者的體驗。總體來看，這是一個適合希望快速生成圖片的開發者的工具，但對於需要高度自定義的使用者來說，可能會有一定的限制。建議使用者在小型專案中試用，並根據需求逐步擴展使用範圍。

**技術棧**：`Python`

## 重點功能

- 多樣化提示詞 — 提供針對肖像、海報、UI 模擬等多種場景的提示詞。
- 社群實例 — 收錄了社群貢獻的實例，幫助用戶理解如何使用提示詞。
- API 整合 — 可直接與 OpenAI 的 GPT-Image-2 API 整合，簡化生成過程。
- 快速檢索功能 — 提供快速檢索的工具，方便用戶找到所需的提示詞。
- 多語言支持 — README 提供多種語言版本，方便不同語言用戶使用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行範例
```bash
python example.py
```

## 程式碼範例

```python
# 前置條件
# 確保已安裝 OpenAI 的 Python 客戶端
import openai

# 使用提示詞生成圖片
response = openai.Image.create(
  prompt='A futuristic cityscape at sunset',
  n=1,
  size='1024x1024'
)
# 預期輸出
# 返回生成的圖片 URL
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 10822 stars（902/天），forks 1093（10.1%），這顯示出其快速增長的潛力。EvoLinkAI 是一個專注於 AI 和生成內容的團隊，這個專案解決了生成圖片時需要的提示詞問題，之前用戶往往需要自行摸索或參考其他資源。這個專案的推出恰逢社群對於生成藝術和圖片的需求上升，並且有許多社群貢獻的實例，讓用戶能夠看到實際效果。這些因素共同推動了其快速的關注度和使用率。

## 適合誰使用

**目標受眾**：需要快速生成高質量圖片的設計師和開發者。

> [!example] 使用場景
> - 平面設計師用它來生成海報設計，因為可以快速獲得多樣化的設計靈感，提升工作效率。
> - 社交媒體管理者用它來創建吸引人的圖片，因為這些提示詞能幫助他們生成高質感的內容，增加互動率。
> - 開發者用它來測試不同的 UI 模擬，因為能夠快速生成多種設計，便於比較和選擇最佳方案。

## 架構分析

這個專案採用 Python 作為主要開發語言，並且依賴於 OpenAI 的 API 進行圖片生成。用戶需要提供有效的 API 金鑰，然後透過簡單的函數調用來生成圖片。這樣的設計使得用戶能夠快速上手，但也意味著對 API 的依賴性較高，若 API 服務中斷，將影響整體功能。

資料流方面，使用者輸入提示詞，系統通過 OpenAI 的 API 進行處理，最終返回生成的圖片。這樣的選擇雖然方便，但也限制了用戶的自定義能力，因為所有生成都依賴於 OpenAI 的模型。擴展性方面，若未來需要支持更多的生成模型，可能需要進行較大的架構調整。

## 技術深入分析

這個專案的核心技術機制是利用 OpenAI 的 GPT-Image-2 API 來生成圖片，這意味著它依賴於深度學習模型的強大能力。使用者可以透過簡單的提示詞來引導模型生成所需的圖片，這樣的設計使得即使是沒有專業背景的使用者也能輕鬆上手。效能方面，生成圖片的速度取決於 API 的響應時間，通常在幾秒鐘內完成，但在高峰期可能會延遲。設計上，選擇 Python 作為開發語言是因為其在數據科學和機器學習領域的廣泛應用，這樣的選擇使得專案的依賴樹相對簡單，降低了維護成本。技術風險方面，對 OpenAI API 的依賴意味著若未來 API 政策變更，可能會影響專案的持續運行。整合方面，這個專案可以輕鬆地與現有的 Python 生態系統整合，特別是在數據處理和機器學習方面，使用者可以輕鬆地將其納入到現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了多語言版本，並且有基本的使用說明，但缺乏詳細的範例。安裝過程相對順暢，但需要注意 API 金鑰的配置。整體而言，對於新手來說，可能需要花一些時間來熟悉提示詞的使用和生成流程。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的提示詞，適合不同場景使用。
> - 社群支持的實例豐富，能夠幫助用戶快速上手。
> - 簡單的 API 調用，降低了使用門檻。

> [!danger] 缺點
> - 對提示詞質量依賴較高，可能需要多次調整才能達到理想效果。
> - 目前的問題解決率較低，社群支持可能不夠及時。
> - 需要有效的 OpenAI API 金鑰，增加了使用成本。

> [!warning] 注意事項
> - 需要有效的 OpenAI API 金鑰才能運行。
> - 生成圖片的質量依賴於提示詞的質量，可能需要多次調整。
> - 目前的問題解決率較低，社群支持可能不夠及時。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈，適合遊戲開發，但不如本專案多樣化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更專業的設計工具，但學習曲線較陡，適合有經驗的設計師。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈，使用 C++ 實作，記憶體用量較少，但功能範圍較窄。 | 如果你的專案專注於遊戲開發，並需要生成角色精靈，這個工具會更合適。 | medium，因為需要重新調整生成邏輯和提示詞設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更專業的設計工具，使用 JavaScript 實作，適合有經驗的設計師。 | 如果你需要更高的自定義能力和專業設計功能，這個工具會更適合。 | high，因為需要重新學習工具的使用和整合方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-prompts** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成角色精靈，使用 C++ 實作，記憶體用量較少，但功能範圍較窄。 | 提供更專業的設計工具，使用 JavaScript 實作，適合有經驗的設計師。 |
> | 遷移成本 | - | medium，因為需要重新調整生成邏輯和提示詞設計。 | high，因為需要重新學習工具的使用和整合方式。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於遊戲開發，並需要生成角色精靈，這個工具會更 | 如果你需要更高的自定義能力和專業設計功能，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** API 金鑰配置不當可能導致無法生成圖片
  - 解法：確保在環境變數中正確設置 API 金鑰
- [MEDIUM] 提示詞不夠具體可能導致生成結果不理想
  - 解法：多次調整提示詞，並參考社群實例
- [MEDIUM] 高峰期 API 響應時間可能延遲
  - 解法：避開高峰時段使用，或考慮使用緩存機制

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的市場推廣 | 非常適合 | 能快速生成多樣化的市場推廣圖片，提升效率。 |
| 大型企業的產品設計部門 | 普通 | 雖然能提供靈感，但對於高要求的設計可能不夠精細。 |
| 個人藝術創作 | 非常適合 | 能夠快速生成多樣化的藝術作品，激發創意。 |
| 需要高自定義的商業應用 | 不適合 | 對於需要特定設計風格的應用，可能無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到快速生成圖片的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅需 API 金鑰，並不存取敏感資料。依賴於 OpenAI 的 API，需注意其安全性和穩定性。

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
| 最後推送 | 2026-04-30 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 87.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| Topics | `api` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` `image-generation` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 79 |

## 社群與生態

**社群活躍度**：社群活躍度中等，問題解決率較低。
**連結**：[文件](https://evolink.ai/gpt-image-2-prompts)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-29 ~ 2026-04-30）
> **活躍天數** 2 天 · **最新 commit** point overview menus to category readmes

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
> ## 📑 Menu
> 
> - [🍌 Introduction](#introduction)
> - [📰 News](#news)
> - [📑 Menu](#menu)
> - [🛒 E-commerce Cases](#e-commerce-cases)
> - [📣 Ad Creative Cases](#ad-creative-cases)
> - [🍌 Portrait & Photography Cases](#portrait-photography-cases)
> - [🎨 Poster & Illustration Cases](#poster-illustration-cases)
> - [🧍 Character Design Cases](#character-design-cases)
> - [📱 UI & Social Media Mockup Cases](#ui-social-media-mockup-cases)
> - [🧪 Comparison & Community Examples](#comparison-community-examples)
> - [🙏 Acknowledge](#acknowledge)
> - [Case 151: E-commerce Main Image - Miniature Diorama Skincare Advertisement](#case-151-e-commerce-main-image---miniature-diorama-skincare-advertisement)
> - [Case 160: E-commerce Main Image - 9-Panel Product TVC Storyboard](#case-160-e-commerce-main-image---9-panel-product-tvc-storyboard)
> - [Case 163: Burger hero image plus 9-cell ad storyboard](#case-163-burger-hero-image-plus-9-cell-ad-storyboard)
> - [Case 144: Luxury Chronograph Watch Ad](#case-144-luxury-chronograph-watch-ad)
> - [Case 150: Luxury Miniature Dubai City Model](#case-150-luxury-miniature-dubai-city-model)
> - [Case 169: Luxury chocolate campaign system](#case-169-luxury-chocolate-campaign-system)
> - [Case 1: Convenience Store Neon Portrait](#case-1-convenience-store-neon-portrait)
> - [Case 84: Ink-Etched Family Portrait](#case-84-ink-etched-family-portrait)
> - [Case 99: Dreamy Underwater Woman With Translucent Fish](#case-99-dreamy-underwater-woman-with-translucent-fish)
> - [Case 100: Monochrome Glitch Profile Portrait](#case-100-monochrome-glitch-profile-portrait)
> - [Case 101: Basketball Boy Motion Sequence](#case-101-basketball-boy-motion-sequence)
> - [Case 102: Golden Hour Street Side-Profile Portrait](#case-102-golden-hour-street-side-profile-portrait)
> - [Case 3: Chengdu Food Map Illustration](#case-3-chengdu-food-map-illustration)
> - [Case 79: Peacock Botanical Vintage Symmetrical Art Print](#case-79-peacock-botanical-vintage-symmetrical-art-print)
> - [Case 174: New York across two centuries cinematic poster](#case-174-new-york-across-two-centuries-cinematic-poster)
> - [Case 175: Fitness Boxing Campaign Collage Poster](#case-175-fitness-boxing-campaign-collage-poster)
> - [Case 2: Persona5 Character Reference Card](#case-2-persona5-character-reference-card)
> - [Case 7: Mecha Girl Sea-City Key Visual](#case-7-mecha-girl-sea-city-key-visual)
> - [Case 11: GTA 6 in Bangalore Flower Market](#case-11-gta-6-in-bangalore-flower-market)
> - [Case 1: One-Prompt UI Design Generation](#case-1-one-prompt-ui-design-generation)
> - [Case 38: Cyberpunk Neon UI Design System](#case-38-cyberpunk-neon-ui-design-system)
> - [Case 105: Multi-Panel Image Board Template](#case-105-multi-panel-image-board-template)
> - [Case 106: Personal Color Analysis Graphic Board](#case-106-personal-color-analysis-graphic-board)
> - [Case 107: Futuristic Hall Fashion Shot Sequence](#case-107-futuristic-hall-fashion-shot-sequence)
> - [Case 108: High-Fashion Beverage Campaign Board](#case-108-high-fashion-beverage-campaign-board)
> - [Case 35: Sam Altman Bear Selfie](#case-35-sam-altman-bear-selfie)
> - [Case 41: Generate an image of the most significant event of 2020](#case-41-generate-an-image-of-the-most-significant-event-of-2020)
> - [Case 68: Naturalist-Style Food Specimen Cross-Section](#case-68-naturalist-style-food-specimen-cross-section)
> - [Case 69: 视觉品牌拆解图](#case-69-视觉品牌拆解图)
> - [Case 70: Apartment Drama Animation Storyboard Sheet](#case-70-apartment-drama-animation-storyboard-sheet)
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
> Prompt 1: Create a cinematic hero image of a gourmet cheeseburger on a dark stone surface with glossy brioche bun, melted cheese, crisp lettuce, tomato, grilled patty, sauce, realistic texture, appetizing steam, warm side light, shallow depth of field, premium food commercia

## 延伸閱讀

相關概念：[[生成對抗網絡]] · [[深度學習]] · [[自然語言處理]]

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
> const concepts = ["生成對抗網絡","深度學習","自然語言處理"];
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
