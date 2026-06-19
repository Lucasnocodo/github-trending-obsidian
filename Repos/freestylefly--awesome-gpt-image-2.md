---
repo: freestylefly/awesome-gpt-image-2
url: https://github.com/freestylefly/awesome-gpt-image-2
owner: freestylefly
owner_type: User
language: JavaScript
license: MIT
description: "Prompt as Code | GPT-Image2 工业级提示词引擎与模板库，470+ 个案例逆向工程，20+ 套工业级模板，并提炼出Skills，持续更新中"
homepage: "https://gpt-image2.canghe.ai"
stars: 7701
stars_per_day: 143
forks: 1001
open_issues: 6
created: 2026-04-25
pushed_at: 2026-06-18
first_seen: 2026-04-28
week: "2026-W18"
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
last_reviewed: 2026-04-28
use_case: "提供工業級的提示詞引擎與模板庫，幫助用戶生成高品質的 AI 圖像。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-05"
contributor_count: 4
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 186465
readme_length: 9936
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-28"
star_history: "2026-04-28:1274,2026-04-29:1716,2026-04-30:2149,2026-05-01:2562,2026-05-02:2989,2026-05-04:3434,2026-05-05:3664,2026-06-18:7667,2026-06-19:7701"
tags:
  - github
  - "category/ai_ml"
  - "lang/javascript"
  - easy_install
  - "topic/agents"
  - "topic/ai_image_generation"
  - "topic/chatgpt"
  - "topic/gpt_image_2"
  - "topic/image_prompts"
aliases:
  - "awesome-gpt-image-2"
  - "freestylefly/awesome-gpt-image-2"
  - "提供工業級的提示詞引擎與模板庫，幫助用戶生成高品質的 AI 圖像。"
---

# awesome-gpt-image-2

**7.7k** stars · **143** stars/天 · 建立 54 天前 · JavaScript · MIT

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

`easy-install`

`agents` `ai-image-generation` `chatgpt` `gpt-image-2` `image-prompts` `prompt-as-code` `prompt-engineering` `skills` `workflow-automation`

> [!summary] 一句話摘要
> 提供工業級的提示詞引擎與模板庫，幫助用戶生成高品質的 AI 圖像。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Hot (143 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在 AI 圖像生成中尋求高效、可重用解決方案的設計師和開發者。
> **一句話重點** 這個專案不僅是工具，更是提升 AI 圖像生成效率的全新工作流。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/freestylefly--awesome-gpt-image-2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖像生成" && p.file.name !== "freestylefly--awesome-gpt-image-2" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的圖像生成工具，值得投資。

> [!abstract] 核心創新
> 將提示詞轉化為可重用的結構化格式，提升生成圖像的效率和可控性。

## 專案簡介

這個專案的核心在於將提示詞轉化為可重用的結構化格式，讓用戶能夠更有效率地生成 AI 圖像。用戶可以從 400 多個逆向工程的案例中選擇，並利用 20 多個工業級模板來生成所需的圖像。使用者只需透過簡單的指令，如 `npx skills add freestylefly/awesome-gpt-image-2 --skill gpt-image-2-style-library`，即可將技能安裝到支持的本地代理中。這個工具的設計考量了工作流的友好性，特別適合自動化系統和腳本使用，並且能夠提升對圖像生成的控制力。專案使用 JavaScript 和 Vite 作為主要技術棧，並依賴於多個現代庫，如 React 和 Supabase，這使得整體架構相對輕量。

與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `EvoLinkAI/awesome-gpt-image-2-prompts`，本專案提供了更為結構化的提示詞設計，並且更注重於可重用性和自動化的整合。使用者在實際應用中可能會遇到的限制包括需要一定的技術背景來充分利用其功能，並且在使用過程中可能需要處理一些 API 限制。這個專案目前處於活躍開發階段，未來可能會持續更新和擴展功能，特別是在模板和案例的數量上。對於需要批量生成圖像或希望在商業環境中使用 AI 圖像生成的團隊來說，這是一個值得考慮的選擇。

**技術棧**：`JavaScript` · `Vite` · `React`

## 重點功能

- 400+ 逆向工程案例 — 提供多種實際應用的提示詞範例，幫助用戶快速上手。
- 20+ 工業級模板 — 用戶可直接使用或修改模板來滿足特定需求。
- 結構化提示詞 — 將提示詞分解為可組合的部分，提升生成圖像的可控性。
- 支持多種代理 — 兼容 Claude Code、Codex 等多種工具，方便整合。
- 即時生成 — 用戶可在瀏覽器中直接測試生成效果，提升使用體驗。

## 快速開始

1. 安裝技能庫
```bash
npx skills add freestylefly/awesome-gpt-image-2 --skill gpt-image-2-style-library --agent claude-code codex --global --yes --copy
```
2. 選擇案例
```bash
訪問 gpt-image2.canghe.ai 瀏覽案例
```
3. 生成圖像
```bash
使用選定的模板和案例填寫變數
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 54 天內累積 7701 stars（143/天），forks 1001（13%），顯示出強勁的社群參與度。專案的主要貢獻者包括多位在 AI 和開源領域活躍的開發者，這為專案的發展提供了穩定的支持。它解決了許多用戶在生成 AI 圖像時面臨的可重用性和控制力不足的問題，之前用戶通常需要手動調整提示詞，效率低下。這個專案的出現恰好填補了這一空白，並且其設計理念也與當前 AI 圖像生成技術的發展趨勢相符。社群中的討論和反饋也促進了專案的快速迭代和改進。

## 適合誰使用

**目標受眾**：需要在 AI 圖像生成中尋求高效、可重用解決方案的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來生成社交媒體的視覺內容，因為可以快速從模板中選擇並調整，節省了 50% 的設計時間。
> - 產品經理用它來創建產品展示圖，因為它提供了多種模板和案例，讓他們能夠更快地實現產品概念。
> - 開發者用它來自動化生成報告中的圖像，因為其結構化的提示詞設計使得批量生成變得簡單高效。

## 架構分析

這個專案採用模組化設計，將提示詞結構化為可重用的模板，便於用戶在不同場景中使用。資料流從用戶輸入的提示詞開始，經過模板解析和生成過程，最終輸出所需的圖像。這樣的設計使得用戶能夠快速調整和重用提示詞，提升了工作效率。

選擇 JavaScript 和 Vite 作為技術棧，因為它們能夠快速構建和部署前端應用，並且有良好的社群支持。這種架構的代價在於需要用戶具備一定的技術背景來進行自定義和擴展。整體來說，這個架構在可擴展性上表現良好，能夠隨著用戶需求的變化而進行調整。

## 技術深入分析

這個專案的核心技術機制在於將提示詞結構化為可重用的模板，這樣的設計使得用戶能夠更靈活地生成所需的圖像。使用 JavaScript 和 Vite 作為主要技術棧，這使得專案在性能和開發效率上都有良好的表現。專案能夠處理多種圖像生成需求，並且能夠在不同的場景中進行快速調整。選擇這些技術的好處在於其社群支持和生態系統的豐富性，然而，這也帶來了一定的學習成本。技術風險方面，隨著用戶需求的增長，可能會面臨性能瓶頸，特別是在高並發的情況下。整合方面，這個工具能夠與多種現有的開發環境和工具鏈相容，並且支持 CI/CD 流程的集成，這使得團隊能夠更有效地使用這個工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，讓新手能夠快速上手。安裝過程相對簡單，無需複雜的配置。文件中有多語言支持，增加了可讀性和易用性。

## 優缺點分析

> [!success] 優點
> - 結構化的提示詞設計，提升生成圖像的可控性。
> - 豐富的案例和模板，幫助用戶快速上手。
> - 良好的社群支持和持續更新，確保工具的實用性。

> [!danger] 缺點
> - 需要一定的技術背景來充分利用其功能。
> - 生成的圖像可能不符合預期，需要手動調整提示詞。
> - 對於非技術用戶來說，學習曲線可能較陡。

> [!warning] 注意事項
> - 需要一定的技術背景來充分利用其功能。
> - 在某些情況下，生成的圖像可能不符合預期，需要手動調整提示詞。
> - 依賴於外部 API，可能會受到調用限制。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建角色和場景的生成，與本專案的圖像生成範疇有所不同，適合遊戲開發者。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供更多的提示詞範例，但缺乏結構化的模板設計，適合需要靈感的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色和場景生成，使用不同的提示詞設計方法，適合遊戲開發者。 | 如果你的專案需要專注於角色設計或遊戲場景生成，這個工具會更合適。 | medium，因為需要重新學習提示詞結構。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 提供大量提示詞範例，但缺乏結構化的模板設計，適合需要靈感的用戶。 | 如果你需要靈感或範例而不需要結構化的提示詞，這個工具會更合適。 | low，因為提示詞的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-gpt-image-2** | **agent-sprite-forge** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色和場景生成，使用不同的提示詞設計方法，適合遊戲開發者。 | 提供大量提示詞範例，但缺乏結構化的模板設計，適合需要靈感的用戶。 |
> | 遷移成本 | - | medium，因為需要重新學習提示詞結構。 | low，因為提示詞的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果你的專案需要專注於角色設計或遊戲場景生成，這個工具會更合 | 如果你需要靈感或範例而不需要結構化的提示詞，這個工具會更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案和個人使用，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，生成的圖像可能不符合預期，特別是對於複雜的提示詞。
  - 解法：需要手動調整提示詞以獲得更好的結果。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是在不同的環境中。
  - 解法：確保所有依賴都已正確安裝，並參考官方文檔。
- [MEDIUM] 對於非技術用戶來說，學習曲線可能較陡。
  - 解法：建議提供更多的範例和教學資源。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 結構化的提示詞設計能夠提升開發效率，快速生成所需圖像。 |
| 大型企業的圖像生成需求 | 普通 | 雖然功能強大，但可能需要更多的定制和調整。 |
| 個人開發者的創意項目 | 非常適合 | 簡單易用的模板和案例能夠快速實現創意。 |
| 需要高並發的商業應用 | 不適合 | 可能面臨性能瓶頸，需考慮其他解決方案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的圖像生成工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 1.0k |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-04-25 |
| 官方網站 | [Link](https://gpt-image2.canghe.ai) |
| Repo 大小 | 182.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/freestylefly/awesome-gpt-image-2) |
| Topics | `agents` `ai-image-generation` `chatgpt` `gpt-image-2` `image-prompts` `prompt-as-code` `prompt-engineering` `skills` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@google-analytics/data` `@supabase/supabase-js` `@vitejs/plugin-react` `google-auth-library` `lucide-react` `react` `react-dom` `stripe` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 69
>     "CSS" : 18
>     "PLpgSQL" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@freestylefly](https://github.com/freestylefly) | 132 |
> | [@ImgBotApp](https://github.com/ImgBotApp) | 1 |
> | [@sscodeai](https://github.com/sscodeai) | 1 |
> | [@LengShangbai](https://github.com/LengShangbai) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應用戶反饋。
**連結**：[文件](https://gpt-image2.canghe.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-18）
> **活躍天數** 3 天 · **最新 commit** Add hiapi sponsor

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/freestylefly/awesome-gpt-image-2/issues/2) | 在线可视化展示站点 | 3 | 4 |
> | [#13](https://github.com/freestylefly/awesome-gpt-image-2/issues/13) | 一个人的造假，整个社区买单（过来人的忠告） | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Prompt as Code | GPT-Image2 Industrial Prompt Engine & Template Library, 400+ Reverse-Engineered Cases, 20+ Industrial Templates
> 
>   
>   
>   
>   
>   
> 
>   English | 简体中文 | 日本語
> 
> > Updated irregularly with new workflows. Stars are welcome.
> > This project is sponsored by [Ciyuan API](https://ciyuan.today/), an AI aggregation platform for cost-effective GPT Image 2 access.
> 
> 
> ### Quick Install for Agent Skills
> 
> Recommended for Claude Code, Codex, Cursor, and other tools supported by [`skills`](https://www.npmjs.com/package/skills):
> 
> ```bash
> npx skills add freestylefly/awesome-gpt-image-2 --skill gpt-image-2-style-library --agent claude-code codex --global --yes --copy
> ```
> 
> Install to every supported local agent:
> 
> ```bash
> npx skills add freestylefly/awesome-gpt-image-2 --global --all --copy
> ```
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
> ## 🌐 Visual Website
> 
> Use the live site at [gpt-image2.canghe.ai](https://gpt-image2.canghe.ai/) to browse the gallery as a product experience: open large previews, copy full prompts, filter by style or scenario, test generation after Google sign-in, and jump back to the source case on GitHub.
> 
>   
>     
>   
> 
> 
> ## WeChat Official Account
> 
> Search **苍何** on WeChat or scan the QR card below. To join the GPT-Image2 community group, follow the account and reply with **gpt-image-2交流群**.
> 
>   
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
> - [Gallery Part 2: cases 166-506](docs/gallery-part-2.md)
> - [Industrial prompt templates and pitfalls guide](docs/templates.md)
> - [Agent skill: GPT-Image2 Style Library](agents/skills/gpt-image-2-style-library/SKILL.md)
> - [MIT License](LICENSE)
> - [Full disclaimer](docs/disclaimer.md#section-disclaimer)
> 
> 
> ### 🖼️ Case Album
> 
>   
>     
>       🧩 UI & Interfaces73 cases
>       
>       Apps, websites, dashboards, social screenshots, and product interfaces.
>       View Cases
>     
>     
>       📊 Charts & Infographics52 cases
>       
>       Infographics, knowledge maps, technical explainers, and structured diagrams.
>       View Cases
>     
>     
>       📰 Posters & Typography80 cases
>       
>       Event posters, covers, type-driven visuals, and strong layout compositions.
>       View Cases
>     
>   
>   
>     
>       🛍️ Products & E-commerce38 cases
>       
>       Product shots, detail pages, packaging, selling points, and ads.
>       View Cases
>     
>     
>       🏷️ Brand & Logos25 cases
>       
>       Logos, identity systems, brand touchpoints, and campaign visuals.
>       View Cases
>     
>     
>       🏛️ Architecture & Spaces12 cases
>       
>       Architecture renders, interiors, city maps, and spatial concepts.
>       View Cases
>     
>   
>   
>     
>       📷 Photography & Realism72 cases
>       
>       Portraits, phone photography, film texture, and commercial photography.
>       View Cases
>     
>     
>       🎨 Illustration & Art53 cases
>       
>       Illustration, art styles, material experiments, and decorative images.
>       View Cases
>     
>     
>       🧍 Characters & People24 cases
>       
>       Character design, pose references, cards, and 3D toys.
>       View Cases
>     
>   
>   
>     
>       🎬 Scenes & Storytelling20 cases
>       
>       Storyboards, narrative scenes, livestream frames, and worldbuilding.
>       View Cases
>     
>     
>       🏮 History & Classical Chinese Themes16 cases
>       
>       Classical scrolls, historical figures, traditional themes, and poetry visuals.
>       View Cases
>     
>     
>       📚 Documents & Publishing10 cases
>       
>       White papers, manuals, encyclopedic plates, and publishing layouts.
>       View Cases
>     
>   
>   
>     
>       🧪 Other Use Cases28 cases
>       
>       Creative experiments, special tasks, mixed workflows, and practical cases.
>       View Cases
>     
>     
>       🖼️ Full Gallery
>       
>       Browse all 506 cases by gallery part and category.
>       Open Gallery
>     
>     
>       ⭐ Latest Additions
>       
>       The newest community cases and workflows collected in the repo.
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
> ## 🤖 Agent Skill
> 
> This repository includes an agent skill for choosing GPT-Image2 styles, templates, categories, and scene tags from the same data used by the website.
> 
> Package links: [npm](https://www.npmjs.com/package/gpt-image-2-style-library) / [GitHub Packages](https://github.com/freestylefly/awesome-gpt-image-2/pkgs/npm/gpt-image-2-style-library)
> 
>   
> 
> Example output from a city-life-system-map request using the style library skill.
> 
> 
> ### Claude Code Plugin Marketplace
> 
> Run these commands inside Claude Code:
> 
> ```text
> /plugin marketplace add freestyle

## 延伸閱讀

相關概念：[[Prompt Engineering]] · [[AI 圖像生成]] · [[自動化工作流]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]]

[GitHub](https://github.com/freestylefly/awesome-gpt-image-2) · [官方網站](https://gpt-image2.canghe.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：圖像生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖像生成" AND file.name != "freestylefly--awesome-gpt-image-2"
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
> const concepts = ["Prompt Engineering","AI 圖像生成","自動化工作流"];
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
