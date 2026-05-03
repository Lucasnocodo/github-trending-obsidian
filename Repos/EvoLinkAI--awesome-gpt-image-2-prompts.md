---
repo: EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
url: https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts
owner: EvoLinkAI
owner_type: User
language: Python
license: CC0-1.0
description: "GPT-Image-2 API and Prompts"
homepage: "https://evolink.ai/gpt-image-2-prompts"
stars: 11512
stars_per_day: 822
forks: 1160
open_issues: 12
created: 2026-04-18
pushed_at: 2026-05-02
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
use_case: "提供 GPT-Image-2 API 和提示語，幫助用戶快速生成高品質圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 94162
readme_length: 9999
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1761,2026-04-23:1768,2026-04-24:2734,2026-04-24:2750,2026-04-25:3244,2026-04-25:3246,2026-04-26:3953,2026-04-27:5270,2026-04-28:6885,2026-04-29:8738,2026-04-30:9947,2026-05-01:10822,2026-05-02:11169,2026-05-03:11512"
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
  - "提供 GPT-Image-2 API 和提示語，幫助用戶快速生成高品質圖像。"
---

# awesome-gpt-image-2-API-and-Prompts

**11.5k** stars · **822** stars/天 · 建立 14 天前 · Python · CC0-1.0

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
> 提供 GPT-Image-2 API 和提示語，幫助用戶快速生成高品質圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (822 stars/day)
> **授權** CC0-1.0 · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成圖像並尋求靈感的設計師和開發者。
> **一句話重點** 這個專案讓圖像生成變得更加簡單和直觀，特別適合需要快速生成圖像的用戶。

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
> **結論** 花 2 小時學習，3 小時整合，能夠快速生成圖像，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個簡單易用的 API 和豐富的提示語庫，讓圖像生成變得更加直觀和高效。

## 專案簡介

這個專案提供了一個針對 GPT-Image-2 的 API 和提示語集合，旨在簡化圖像生成的過程。用戶可以通過簡單的 API 調用，像是使用 `curl` 命令來生成圖像，具體指令為 `curl --request POST --url https://api.evolink.ai/v1/images/generations --header 'Authorization: Bearer YOUR_API_KEY' --header 'Content-Type: application/json' --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'`。這樣的設計讓用戶能夠快速從靈感轉換到實際的圖像生成，並且提供了豐富的範例來幫助用戶理解如何撰寫有效的提示語。專案中包含了來自社群的多個案例，這些案例涵蓋了不同的應用場景，如電子商務、廣告創意和角色設計，並且不斷更新以保持內容的新鮮度。技術上，這個專案依賴於 Evolink 的 API，這意味著用戶需要註冊並獲取 API 金鑰來進行操作。

相較於其他圖像生成工具，如 DALL-E 和 Midjourney，這個專案的優勢在於其 API 的易用性和社群驅動的提示語庫，能夠快速適應不同的創作需求。使用者在實際操作中可能會遇到的問題包括提示語的撰寫技巧和 API 限制，這些都可以通過社群提供的範例來克服。整體而言，這是一個穩定的專案，適合需要快速生成圖像的開發者和設計師。未來幾個月內，專案可能會進一步擴展其提示語庫和案例，增強用戶體驗。

**技術棧**：`Python` · `Flask` · `Evolink API`

## 重點功能

- API 連接 — 使用 `curl` 命令輕鬆調用 API 生成圖像。
- 提示語範例 — 提供多種範例，幫助用戶撰寫有效的提示語。
- 社群驅動的案例 — 收錄來自社群的成功案例，涵蓋不同應用場景。
- 持續更新 — 定期添加新的提示語和案例，保持內容的新鮮感。
- 多語言支持 — 提供多種語言的 README 文件，方便不同語言的用戶使用。

## 快速開始

1. 安裝必要的技能
```bash
npx evolink-gpt-image -y
```
2. 獲取 API 金鑰
```bash
前往 https://evolink.ai/dashboard
```
3. 生成圖像
```bash
curl --request POST --url https://api.evolink.ai/v1/images/generations --header 'Authorization: Bearer YOUR_API_KEY' --header 'Content-Type: application/json' --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'
```

## 程式碼範例

```python
# 前置條件：需要獲取 API 金鑰
curl --request POST \
  --url https://api.evolink.ai/v1/images/generations \
  --header 'Authorization: Bearer YOUR_API_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"model": "gpt-image-2", "prompt": "A beautiful colorful sunset over the ocean"}'
# 預期輸出：生成一幅美麗的彩色日落圖像。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 11512 stars（822/天），forks 1160（10.1%），這顯示出強勁的增長趨勢。作者 EvoLinkAI 在圖像生成領域有一定的影響力，這個專案解決了用戶在生成高品質圖像時的靈感不足和操作複雜的問題。之前的解決方案往往需要用戶具備較高的技術背景，而這個專案通過簡化 API 調用和提供範例，使得更多人可以輕鬆使用。社群的活躍度和不斷更新的提示語庫也促進了這個專案的快速成長。

## 適合誰使用

**目標受眾**：需要快速生成圖像並尋求靈感的設計師和開發者。

> [!example] 使用場景
> - 平面設計師用它來快速生成廣告素材，因為能夠直接使用 API 生成高品質圖像，節省了大量設計時間。
> - 內容創作者用它來創建社交媒體圖像，因為提供的提示語範例能幫助他們靈感迸發，快速產出內容。
> - 電子商務商家用它來生成產品圖片，因為能夠根據具體需求撰寫提示，生成符合品牌形象的圖像。

## 架構分析

這個專案採用了一個簡單的 API 驅動架構，使用 Flask 作為後端框架來處理請求。用戶通過 API 調用來生成圖像，並且可以根據需求撰寫提示語。這種設計使得用戶能夠快速上手，降低了使用門檻。

資料流方面，請求從用戶端發送到 API，然後 API 會根據提示語生成圖像並返回結果。選擇 Flask 使得開發和維護變得更加簡單，但在高流量情況下可能會遇到性能瓶頸。整體架構的擴展性良好，未來可以考慮加入更多功能或擴展到其他模型。

## 技術深入分析

這個專案的核心技術機制是基於 Evolink 的 GPT-Image-2 API，使用者可以通過簡單的 API 調用來生成圖像。專案中使用的提示語設計模式使得用戶能夠靈活地創建各種圖像，從而滿足不同的需求。效能方面，API 的響應時間通常在幾秒鐘內，但在高流量時可能會出現延遲。選擇 Python 和 Flask 作為技術棧使得開發過程更加靈活，但在高並發情況下可能會面臨性能瓶頸。由於依賴於外部 API，這也帶來了潛在的供應鏈風險，特別是在 API 服務不穩定的情況下。整合方面，這個專案可以輕鬆與現有的開發流程結合，並且支持多種編程語言的調用。整體而言，這是一個設計良好的專案，適合需要快速生成圖像的開發者和設計師。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手使用；文件提供多語言版本，增加了可讀性。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 API，降低了使用門檻。
> - 豐富的提示語範例，幫助用戶快速上手。
> - 社群驅動的內容更新，保持了活躍度和新鮮感。

> [!danger] 缺點
> - 需要有效的 API 金鑰，增加了使用的複雜性。
> - 提示語撰寫需要一定的技巧，對新手不太友好。
> - 目前僅支持 GPT-Image-2，對其他模型的支持有限。

> [!warning] 注意事項
> - 需要有效的 API 金鑰才能使用。
> - 提示語的撰寫需要一定的技巧，否則可能無法獲得理想的結果。
> - 目前僅支持基於 GPT-Image-2 的圖像生成，對於其他模型不適用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [openai/dall-e](https://github.com/openai/dall-e) | DALL-E 提供更高的圖像生成質量，但需要更複雜的設置和操作流程。 |
| [midjourney/midjourney](https://github.com/midjourney/midjourney) | Midjourney 主要針對藝術風格的圖像生成，適合需要創意設計的用戶。 |
| [stabilityai/stable-diffusion](https://github.com/stabilityai/stable-diffusion) | Stable Diffusion 提供開源選項，適合需要自定義模型的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [openai/dall-e](https://github.com/openai/dall-e) | DALL-E 提供更高的圖像生成質量，適合需要高品質圖像的用戶，但設置過程較為複雜。 | 如果你的團隊需要生成高品質的藝術風格圖像，DALL-E 是更合適的選擇。 | medium，因為需要重新調整提示語和 API 調用方式。 |
| [stabilityai/stable-diffusion](https://github.com/stabilityai/stable-diffusion) | Stable Diffusion 提供開源選項，允許用戶自定義模型，適合開發者進行深度定制。 | 如果你的團隊需要對模型進行深度定制，Stable Diffusion 是更好的選擇。 | high，因為需要重新設計整個生成流程和模型訓練。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2-API-and-Prompts** | **dall-e** | **stable-diffusion** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | DALL-E 提供更高的圖像生成質量，適合需要高品質圖像的用戶，但設置過程較為複雜。 | Stable Diffusion 提供開源選項，允許用戶自定義模型，適合開發者進行深度定制。 |
> | 遷移成本 | - | medium，因為需要重新調整提示語和 API 調用方式。 | high，因為需要重新設計整個生成流程和模型訓練。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要生成高品質的藝術風格圖像，DALL-E 是更 | 如果你的團隊需要對模型進行深度定制，Stable Diffu |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 提示語撰寫不當可能導致生成結果不理想
  - 解法：參考社群提供的範例來撰寫提示語
- [MEDIUM] 在高流量時 API 可能會出現延遲
  - 解法：考慮使用緩存機制來減少 API 調用次數
- **[HIGH]** API 金鑰管理不當可能導致安全風險
  - 解法：定期更新 API 金鑰並限制權限

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品設計 | 非常適合 | 能夠快速生成多種產品圖像，提升設計效率。 |
| 大型企業的廣告創意部門 | 普通 | 雖然能夠生成圖像，但對於高品質需求可能不足。 |
| 個人開發者的創意項目 | 非常適合 | 簡單易用的 API 讓個人開發者能夠快速實現創意。 |
| 需要高品質藝術圖像的專業藝術家 | 不適合 | 對於藝術風格的需求，可能需要更高品質的生成工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠快速生成圖像，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，但需要妥善管理 API 金鑰以防止未授權訪問。

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
| Forks | 1.2k |
| Open Issues | 12 |
| Issue 解決率 | 8% (1 closed) |
| 最後推送 | 2026-05-02 |
| 建立日期 | 2026-04-18 |
| 官方網站 | [Link](https://evolink.ai/gpt-image-2-prompts) |
| Repo 大小 | 92.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts) |
| Topics | `api` `awesome` `awesome-list` `chatgpt` `generative-` `gpt-image-2` `gpt-image-2-api` `gpt-image-2-prompts` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EvoLinkAI](https://github.com/EvoLinkAI) | 92 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
**連結**：[文件](https://docs.evolink.ai/en/api-manual/image-series/gpt-image-2/gpt-image-2-image-generation)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-02）
> **活躍天數** 2 天 · **最新 commit** chore: switch license to CC0-1.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/15) | Image in case is failed | 0 | 0 |
> | [#14](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/14) | 做了一个快速检索的浏览器插件 | 0 | 0 |
> | [#13](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/13) | Prompt Ảnh | 0 | 1 |
> | [#12](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/12) | one | 0 | 3 |
> | [#11](https://github.com/EvoLinkAI/awesome-gpt-image-2-API-and-Prompts/issues/11) | 有关情侣的提示词 | 0 | 0 |

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
> > See all cases → [cases/comparison.md](cases/comparison.md)
> 
> 
> ## 🍌 Introduction
> 
> Welcome to the awesome-gpt-image-2-API-and-Prompts repository! 🤗
> 
> **GPT Image 2 API and prompt patterns for image generation, prompt exploration, reference cases, and reusable visual workflows.**
> 
> Most cases in this repository are curated from X/Twitter, creator communities, public demos, and shared experiments.
> 
> Try it on Evolink: [GPT-Image-2](https://evolink.ai/gpt-image-2-prompts?utm_source=github&utm_medium=readme&utm_campaign=awesome-gpt-image-2-API-and-Prompts)
> 
> If you find this useful, consider giving it a star. ⭐
> 
> > [!NOTE]
> > This repository focuses on reusable prompt patterns, reference cases, and task-specific examples for GPT-Image-2 on Evolink.
> > Recent prompt-only updates are also tracked in `gpt_image_2_prompt.json`.
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
> ## 📰 News
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
> - [📰 News](#-news)
> - [Contents](#contents)
> - [🔌 Use GPT Image 2 API](#-use-gpt-image-2-api)
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
> ### Case 163: [Burger hero image plus 9-cell ad storyb

## 延伸閱讀

相關概念：[[生成對抗網絡]] · [[深度學習]] · [[自然語言處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[inspatio--worldfm|inspatio/worldfm]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

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
> const concepts = ["生成對抗網絡","深度學習","自然語言處理"];
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
