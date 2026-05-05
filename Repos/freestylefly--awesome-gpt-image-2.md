---
repo: freestylefly/awesome-gpt-image-2
url: https://github.com/freestylefly/awesome-gpt-image-2
owner: freestylefly
owner_type: User
language: JavaScript
license: MIT
description: "Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，370+ 个案例逆向工程，20+ 套工业级模板，持续更新中"
homepage: "https://gpt-image2.canghe.ai"
stars: 3664
stars_per_day: 407
forks: 516
open_issues: 5
created: 2026-04-25
pushed_at: 2026-05-04
first_seen: 2026-04-28
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "提示工程"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-28
use_case: "提供370+個案例和20+套工業級模板的GPT-Image2提示詞引擎，幫助用戶高效生成圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-05"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 139226
readme_length: 9527
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:1274,2026-04-29:1716,2026-04-30:2149,2026-05-01:2562,2026-05-02:2989,2026-05-04:3434,2026-05-05:3664"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
  - easy_install
  - "topic/agents"
  - "topic/ai_image_generation"
  - "topic/gpt_image_2"
  - "topic/image_prompts"
  - "topic/prompt_as_code"
aliases:
  - "awesome-gpt-image-2"
  - "freestylefly/awesome-gpt-image-2"
  - "提供370+個案例和20+套工業級模板的GPT-Image2提示詞引擎，幫助用戶高效生成圖像。"
---

# awesome-gpt-image-2

**3.7k** stars · **407** stars/天 · 建立 9 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`agents` `ai-image-generation` `gpt-image-2` `image-prompts` `prompt-as-code` `prompt-engineering` `workflow-automation`

> [!summary] 一句話摘要
> 提供370+個案例和20+套工業級模板的GPT-Image2提示詞引擎，幫助用戶高效生成圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (407 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效生成圖像並希望使用結構化提示詞的設計師和開發者。
> **一句話重點** 這個專案的價值在於將提示詞結構化，讓AI圖像生成變得更加高效和可控。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "提示工程" && p.file.name !== "freestylefly--awesome-gpt-image-2" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 提示工程 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花5小時學習、3小時整合，得到高效的圖像生成工具，值得嘗試。

> [!abstract] 核心創新
> 將提示詞轉化為結構化的可重用模板，提升AI圖像生成的可控性和效率。

## 專案簡介

這個專案的核心機制是將散亂的AI圖像生成提示詞轉化為結構化的可重用模板，讓用戶能夠更方便地生成穩定且可控的圖像。用戶可以從案例庫中選擇想要模仿的輸出類型，然後根據提供的模板填入業務變數，這樣的設計使得批量生成和自動化工作流程變得更加簡單。專案使用JavaScript和Vite框架，並依賴React進行前端展示，這樣的選擇使得開發過程中能夠快速迭代和構建高效的用戶界面。與其他類似工具相比，如EvoLinkAI/awesome-gpt-image-2-prompts，這個專案提供了更為詳細的工業級模板和案例，讓用戶能夠更精確地控制生成的圖像內容。

專案的設計特別適合需要高效生成圖像的團隊，尤其是在需要大量生成相似風格圖像的場景中。使用者可能會遇到的問題包括模板不夠靈活或不符合特定需求，這時需要根據實際情況進行調整。整體來看，這個專案目前處於早期階段，適合對AI圖像生成有需求的開發者和設計師，未來可能會持續更新和擴展模板庫。建議在小型專案或內部工具中試用，避免在關鍵生產環境中使用。

**技術棧**：`JavaScript` · `Vite` · `React`

## 重點功能

- 370+個案例 — 提供多種風格的圖像生成範例，幫助用戶快速找到靈感。
- 20+套工業級模板 — 針對不同需求的模板，支持快速生成和重用。
- 結構化提示詞 — 將提示詞分解為可組合的部分，提升生成的可控性。
- 支持批量生成 — 適合需要大量圖像的商業應用場景。
- 持續更新 — 專案會定期更新新的模板和案例，保持內容的新鮮感。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/freestylefly/awesome-gpt-image-2.git
```
2. 安裝依賴
```bash
npm install
```
3. 啟動開發伺服器
```bash
npm run dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立9天內累積3664 stars（407/天），forks 516（14.1%），顯示出強勁的增長潛力。作者freestylefly在AI領域有一定的經驗，這個專案解決了AI圖像生成中缺乏結構化提示詞的痛點，讓用戶能夠更方便地生成可重用的圖像。近期的推廣活動和社群討論也可能促進了這個專案的曝光度。技術上，隨著AI圖像生成技術的成熟，這個工具的需求也隨之上升，特別是在商業應用中。forks/stars比率14.1%顯示出許多用戶對其進行了實際修改和使用，這是相對活躍的社群信號。

## 適合誰使用

**目標受眾**：需要高效生成圖像並希望使用結構化提示詞的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來生成高品質的產品展示圖，因為可以快速從370+個案例中找到靈感並生成符合需求的圖像。
> - 開發者用它來自動化生成社交媒體內容，因為結構化的模板可以大幅減少手動編輯的時間。
> - 市場營銷團隊用它來創建廣告素材，因為提供的工業級模板能夠保持品牌一致性並提高效率。

## 架構分析

專案採用Vite作為構建工具，結合React進行前端開發，這樣的選擇使得開發過程中能夠快速迭代和構建高效的用戶界面。資料流方面，使用者從案例庫中選擇案例，然後根據模板填入變數，這樣的設計使得用戶能夠快速生成所需的圖像。選擇JavaScript作為開發語言，能夠更好地與前端技術棧整合，但也可能導致在大型專案中出現性能瓶頸。整體架構設計上，專案的擴展性良好，未來可以根據需求增加更多的模板和案例。

## 技術深入分析

這個專案的核心技術機制是將提示詞轉化為結構化的模板，這樣的設計使得用戶在生成圖像時能夠更好地控制內容。使用Vite作為構建工具，能夠快速啟動開發伺服器，並且支持熱重載，提升開發效率。專案的效能特性尚未明確，但由於使用JavaScript，可能在處理大量數據時出現性能瓶頸。選擇React進行前端開發，能夠與現有的生態系統良好整合，但也可能增加學習成本。技術風險方面，若未來需求增長，可能需要重新考慮架構以支持更高的並發量。整合方面，與主流的CI/CD工具相容性良好，能夠方便地融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰且提供了使用範例，安裝過程順暢，無明顯坑點。文件目前僅提供英文，對於非英語使用者可能會有一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 提供大量的案例和模板，方便用戶快速上手。
> - 結構化的提示詞提高了生成圖像的可控性。
> - 持續更新的內容保持了專案的新鮮感。

> [!danger] 缺點
> - 目前僅支援JavaScript環境，對其他語言的支援有限。
> - 模板的靈活性可能不足，需根據具體需求進行調整。
> - 社群活躍度尚在建立階段，可能存在未解決的問題。

> [!warning] 注意事項
> - 目前僅支援 JavaScript 環境，對於其他語言的支援尚未實現。
> - 模板的靈活性可能不足，需根據具體需求進行調整。
> - 社群活躍度尚在建立階段，可能存在未解決的問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供了大量的提示詞，但缺乏結構化的模板系統，適合需要快速生成單一圖像的場景。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色圖像，功能較為專一，適合遊戲開發者，而本專案則更廣泛適用於各類圖像生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供大量的提示詞，但缺乏結構化的模板系統，適合需要快速生成單一圖像的場景。 | 如果你的需求是快速生成單一圖像而不需要模板系統，則這個選擇更合適。 | low，因為兩者都使用類似的提示詞結構。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色圖像，功能較為專一，適合遊戲開發者，而本專案則更廣泛適用於各類圖像生成。 | 如果你的專案主要集中在角色設計上，則這個工具會更合適。 | medium，因為需要調整生成的提示詞以符合不同的需求。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2** | **awesome-gpt-image-2-prompts** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供大量的提示詞，但缺乏結構化的模板系統，適合需要快速生成單一圖像的場景。 | 專注於生成角色圖像，功能較為專一，適合遊戲開發者，而本專案則更廣泛適用於各類圖像生成。 |
> | 遷移成本 | - | low，因為兩者都使用類似的提示詞結構。 | medium，因為需要調整生成的提示詞以符合不同的需求。 |
> | 適用場景 | 主要場景 | 如果你的需求是快速生成單一圖像而不需要模板系統，則這個選擇更 | 如果你的專案主要集中在角色設計上，則這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人side project試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 模板不夠靈活，可能無法滿足特定需求
  - 解法：根據實際情況進行調整
- [MEDIUM] 社群活躍度尚在建立階段，可能存在未解決的問題
  - 解法：定期檢查GitHub上的issues以獲取最新狀況

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10人以下的新創公司後端API | 適合 | 提供的模板和案例能夠快速滿足小型團隊的需求。 |
| 大型企業的生產環境 | 不適合 | 目前處於alpha階段，穩定性不足。 |
| 設計團隊的內部工具 | 非常適合 | 能夠提高圖像生成的效率，符合團隊需求。 |
| 需要高頻率生成圖像的商業應用 | 普通 | 雖然有模板，但可能需要進一步調整以符合具體需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花5小時學習、3小時整合，得到高效的圖像生成工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，適合在CI/CD中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
| Forks | 516 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-04 |
| 建立日期 | 2026-04-25 |
| 官方網站 | [Link](https://gpt-image2.canghe.ai) |
| Repo 大小 | 136.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/freestylefly/awesome-gpt-image-2) |
| Topics | `agents` `ai-image-generation` `gpt-image-2` `image-prompts` `prompt-as-code` `prompt-engineering` `workflow-automation` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@vitejs/plugin-react` `vite` `react` `react-dom` `lucide-react`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 69
>     "CSS" : 31
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@freestylefly](https://github.com/freestylefly) | 38 |

## 社群與生態

**社群活躍度**：社群活躍度尚在建立階段，開發者回應速度中等。
**連結**：[文件](https://gpt-image2.canghe.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-03 ~ 2026-05-04）
> **活躍天數** 2 天 · **最新 commit** Use representative case covers for templates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/freestylefly/awesome-gpt-image-2/issues/2) | 在线可视化展示站点 | 2 | 3 |
> | [#4](https://github.com/freestylefly/awesome-gpt-image-2/issues/4) | 666 | 0 | 0 |
> | [#3](https://github.com/freestylefly/awesome-gpt-image-2/issues/3) | 例 326：红蓝撞色高跟诱惑 明显和提供的提示词不一致 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Prompt as Code | GPT-Image2 Industrial Prompt Engine & Template Library, 370+ Reverse-Engineered Cases, 20+ Industrial Templates
> 
>   
>   
>   
>   
> 
>   English | 简体中文
> 
> > Updated irregularly with new workflows. Stars are welcome.
> > This project is sponsored by [Ciyuan API](https://ciyuan.today/), an AI aggregation platform for cost-effective GPT Image 2 access.
> 
> 
> ## 🚀 How To Use This Repository
> 
> 1. Start from the featured cases and decide what output type you want to imitate.
> 2. Open the full gallery and find nearby cases. Copy structure first, then style words.
> 3. Return to the template page and fill your business variables into the general or JSON templates.
> 
> 
> ## 🗂️ Category Overview
> 
> Start with the case album to find a visual direction, then open the prompt template categories to turn that direction into reusable structure.
> 
> 
> ## 🖼️ Featured Cases
> 
> 
> ## ⚡️ Project Vision
> 
> After GPT-Image2 became widely available, AI image generation moved from "can it make an image?" to "can it make stable, controllable, reusable images?" This project turns scattered community examples into Prompt-as-Code assets that are easier for agents and automation workflows to reuse.
> 
> The core goal is simple: compress prose-style prompts into structured protocols. When you need batch generation, template systems, or production workflows, this structure is more valuable than a pile of isolated examples.
> 
> - 🧱 Atomic schema: split subjects, lighting, materials, layout, and visual details into composable parts
> - ⚙️ Workflow friendly: designed for agents, scripts, and automation systems
> - 🧬 Structured control: improve controllability for layout, copy, and information hierarchy
> 
> 
> ## 📖 Quick Links
> 
> - [Full case gallery](docs/gallery.md)
> - [Gallery Part 1: cases 1-165](docs/gallery-part-1.md)
> - [Gallery Part 2: cases 166-385](docs/gallery-part-2.md)
> - [Industrial prompt templates and pitfalls guide](docs/templates.md)
> - [MIT License](LICENSE)
> - [Full disclaimer](docs/disclaimer.md#section-disclaimer)
> 
> 
> ### 🖼️ Case Album
> 
>   
>     
>       🧩 UI & Interfaces68 cases
>       
>       Apps, websites, dashboards, social screenshots, and product interfaces.
>       View Cases
>     
>     
>       📊 Charts & Infographics56 cases
>       
>       Infographics, knowledge maps, technical explainers, and structured diagrams.
>       View Cases
>     
>     
>       📰 Posters & Typography71 cases
>       
>       Event posters, covers, type-driven visuals, and strong layout compositions.
>       View Cases
>     
>   
>   
>     
>       🛍️ Products & E-commerce25 cases
>       
>       Product shots, detail pages, packaging, selling points, and ads.
>       View Cases
>     
>     
>       🏷️ Brand & Logos20 cases
>       
>       Logos, identity systems, brand touchpoints, and campaign visuals.
>       View Cases
>     
>     
>       🏛️ Architecture & Spaces25 cases
>       
>       Architecture renders, interiors, city maps, and spatial concepts.
>       View Cases
>     
>   
>   
>     
>       📷 Photography & Realism36 cases
>       
>       Portraits, phone photography, film texture, and commercial photography.
>       View Cases
>     
>     
>       🎨 Illustration & Art25 cases
>       
>       Illustration, art styles, material experiments, and decorative images.
>       View Cases
>     
>     
>       🧍 Characters & People15 cases
>       
>       Character design, pose references, cards, and 3D toys.
>       View Cases
>     
>   
>   
>     
>       🎬 Scenes & Storytelling8 cases
>       
>       Storyboards, narrative scenes, livestream frames, and worldbuilding.
>       View Cases
>     
>     
>       🏮 History & Classical Chinese Themes9 cases
>       
>       Classical scrolls, historical figures, traditional themes, and poetry visuals.
>       View Cases
>     
>     
>       📚 Documents & Publishing7 cases
>       
>       White papers, manuals, encyclopedic plates, and publishing layouts.
>       View Cases
>     
>   
>   
>     
>       🧪 Other Use Cases20 cases
>       
>       Creative experiments, special tasks, mixed workflows, and practical cases.
>       View Cases
>     
>     
>       🖼️ Full Gallery
>       
>       Browse all 385 cases by gallery part and category.
>       Open Gallery
>     
>     
>       ⭐ Latest Additions
>       
>       The newest X community cases and workflows collected in the repo.
>       View Latest
>     
>   
> 
> 
> ### 🧩 Prompt Template Categories
> 
> The prompt body remains in the original template document for now. This homepage only adds an English navigation layer.
> 
> Template Page 1 / 4: Design & Information
> 
> | Category | Template Entry | Core Capability |
> |---|---|---|
> | 🧩 UI & Interfaces | [View Prompts](docs/templates.md#tpl-ui) | Components, page hierarchy, screenshot texture |
> | 📊 Charts & Infographics | [View Prompts](docs/templates.md#tpl-infographic) | Modules, arrows, data structure, readability |
> | 📰 Posters & Typography | [View Prompts](docs/templates.md#tpl-poster) | Layout, headline systems, people, visual impact |
> 
> Template Page 2 / 4: Commerce & Space
> 
> | Category | Template Entry | Core Capability |
> |---|---|---|
> | 🛍️ Products & E-commerce | [View Prompts](docs/templates.md#tpl-product) | Product selling points, packaging, detail-page structure |
> | 🏷️ Brand & Logos | [View Prompts](docs/templates.md#tpl-brand) | Logos, identity, brand touchpoint systems |
> | 🏛️ Architecture & Spaces | [View Prompts](docs/templates.md#tpl-architecture) | Perspective, materials, indoor and outdoor lighting |
> 
> Template Page 3 / 4: Imaging & Characters
> 
> | Category | Template Entry | Core Capability |
> |---|---|---|
> | 📷 Photography & Realism | [View Prompts](docs/templates.md#tpl-photo) | Lenses, lighting, realistic textures |
> | 🎨 Illustration & Art | [View Prompts](docs/templates.md#tpl-illustration) | Brushwork, materials, art styles |
> | 🧍 Characters & People | [View Prompts](docs/templates.md#tpl-character) | Character design, pose sheets, consistency |
> 
> Template Page 4 / 4: Narrative & Extensions
> 
> | Category | Template Entry | Core Capability |
> |---|---|---|
> | 🎬 Scenes & Storytelling | [View Prompts](docs/templates.md#tpl-scene) | Storyboards, worldbuilding, emotional pacing |
> | 🏮 History & Classical Chinese Themes | [View Prompts](docs/templates.md#tpl-history) | Dynasties, clothing, scroll-style narrative |
> | 📚 Documents & Publishing | [View Prompts](docs/templates.md#tpl-document) | Page systems, tables of contents, layout rules |
> | 🧪 Other Use Cases | [View Prompts](docs/templates.md#tpl-other) | Mixed tasks, experimental workflows, special outputs |
> 
> 
> ### Case 1: Infographic Visualization
> 
> [](docs/gallery-part-1.md#case-1)
> 
> An engineering-whitepaper-style infographic case for studying modular structure, information hierarchy, and bilingual labels.
> [View full case](docs/gallery-part-1.md#case-1)
> 
> 
> ### Case 2: Social Media Interface Screenshot
> 
> [](docs/gallery-part-1.md#case-2)
> 
> A mixed "product interface + social content screenshot" case for controlling text blocks, UI frames, and content cards.
> [View full case](docs/gallery-part-1.md#case-2)
> 
> 
> ### Case 6: Illustration Art
> 
> [](docs/gallery-part-1.md#case-6)
> 
> A Japanese fantasy illustration example for studying atmosphere, color, and large-scene composition.
> [View full case](docs/gallery-part-1.md#case-6)
> 
> 
> ### Case 17: Interaction Design Diagram
> 
> [](docs/gallery-part-1.md#case-17)
> 
> A classic "structured breakdown + explanatory layout" case for product diagrams and poster-like technical explainers.
> [View full case](docs/gallery-part-1.md#case-17)
> 
> 
> ### Case 166: Twelve Gold Saints Card Set
> 
> [](docs/gallery-part-2.md#case-166)
> 
> A multi-card, unified-style case for studying batch generation and series design.
> [View full case](docs/gallery-part-2.md#case-166)
> 
> 
> ### Case 310: Snack Brand Technical Breakdown
> 
> [](docs/gallery-part-2.md#case-310)
> 
> A strong hybrid of brand narrative, structural breakdown, and commercial presentation. Useful as an "infographic + brand visual" reference.
> [View full case](docs/gallery-part-2.md#case-310)
> 
> 
> ### Canghe Original Tests
> 
>   
>     
>       Case 330: Moonlit Livestream Scene
>       
>       A high-fidelity livestream screenshot

## 延伸閱讀

相關概念：[[提示工程]] · [[AI圖像生成]] · [[工作流程自動化]]

相關專案：[[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]]

[GitHub](https://github.com/freestylefly/awesome-gpt-image-2) · [官方網站](https://gpt-image2.canghe.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：提示工程）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "提示工程" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "freestylefly--awesome-gpt-image-2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["提示工程","AI圖像生成","工作流程自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "freestylefly--awesome-gpt-image-2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "freestylefly" AND file.name != "freestylefly--awesome-gpt-image-2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
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

> **2026-04-28** — 首次收錄
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

- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 再次上榜，2.1k stars
- [[2026-04-29|2026-04-29]] — 再次上榜，1.7k stars
- [[2026-04-28|2026-04-28]] — 首次收錄，1.3k stars
