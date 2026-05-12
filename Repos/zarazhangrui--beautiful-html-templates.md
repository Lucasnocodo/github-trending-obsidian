---
repo: zarazhangrui/beautiful-html-templates
url: https://github.com/zarazhangrui/beautiful-html-templates
owner: zarazhangrui
owner_type: User
language: HTML
license: MIT
description: "A library of HTML slide templates designed so any coding agent can pick the right one and produce a beautiful deck on the user's behalf, automatically."
homepage: ""
stars: 863
stars_per_day: 144
forks: 80
open_issues: 0
created: 2026-05-05
pushed_at: 2026-05-06
first_seen: 2026-05-11
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "簡報工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-11
use_case: "提供一系列可重用的 HTML 幻燈片模板，讓任何編碼代理能自動生成美觀的簡報。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-19"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 51731
readme_length: 5764
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:730,2026-05-12:863"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "beautiful-html-templates"
  - "zarazhangrui/beautiful-html-templates"
  - "提供一系列可重用的 HTML 幻燈片模板，讓任何編碼代理能自動生成美觀的簡報。"
---

# beautiful-html-templates

**730** stars · **146** stars/天 · 建立 5 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一系列可重用的 HTML 幻燈片模板，讓任何編碼代理能自動生成美觀的簡報。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (146 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成美觀簡報的設計師和內容創作者。
> **一句話重點** 這個專案讓簡報設計變得快速且美觀，特別適合需要頻繁製作簡報的使用者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "簡報工具" && p.file.name !== "zarazhangrui--beautiful-html-templates" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 簡報工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、2 小時整合，得到快速生成美觀簡報的效果，值得嘗試。

> [!abstract] 核心創新
> 提供多樣化的可重用 HTML 幻燈片模板，讓使用者能快速生成美觀的簡報。

## 專案簡介

這個專案的核心機制是提供 32 種可重用的 HTML 幻燈片模板，使用者只需選擇合適的模板，然後透過代理自動生成簡報。使用者可以透過 `index.json` 檔案來匹配模板，並根據需求克隆和調整內容。這樣的設計讓簡報製作變得快速且美觀，特別適合需要快速生成視覺吸引力的簡報的場景。最關鍵的指令是複製 `Clone https://github.com/zarazhangrui/beautiful-html-templates` 並遵循 `AGENTS.md` 的指示來開始使用。技術上，這些模板使用 HTML、CSS 和 JavaScript 實現，並且設計上考慮了多種視覺風格，從柔和的編輯風格到現代的極簡風格，滿足不同需求。這些模板的設計不僅美觀，還考慮了可讀性和排版的平衡，這是許多簡報工具所忽略的。

與其他簡報工具相比，如 Google Slides 或 PowerPoint，這個專案提供了更高的自定義性和設計自由度，特別適合對視覺設計有要求的使用者。使用者可以在各種情境下使用這些模板，無論是學術報告、商業簡報還是創意展示。這些模板的優勢在於它們的多樣性和可重用性，能夠快速適應不同的內容需求。雖然這些模板在設計上非常靈活，但對於不熟悉 HTML 的使用者來說，可能需要一些學習成本來完全掌握如何自訂內容。整體而言，這是一個值得探索的工具，特別是對於需要頻繁製作簡報的設計師或內容創作者。

**技術棧**：`HTML` · `CSS` · `JavaScript`

## 重點功能

- 32 種模板 — 提供多樣化的設計風格，滿足不同需求。
- 自動生成簡報 — 透過代理自動化生成內容，節省時間。
- 可自訂內容 — 使用者可以根據需求調整模板內容。
- 適用於各種場合 — 從學術報告到商業簡報，皆可使用。
- 清晰的文檔 — 提供 `AGENTS.md` 指導使用者如何操作。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/zarazhangrui/beautiful-html-templates
```
2. 閱讀操作手冊
```bash
查看 AGENTS.md 以了解如何使用模板
```
3. 生成簡報
```bash
選擇模板並根據需求調整內容
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 730 stars（146/天），forks 67（9.2%），這顯示出相對穩定的增長。作者 zarazhangrui 之前有其他開源專案，這次專案解決了簡報設計的痛點，讓使用者能快速生成美觀的簡報，這在傳統的簡報工具中是較難實現的。社群對於簡報設計的需求持續增長，特別是在遠端工作和線上會議的情境下。forks/stars 比率為 9.2%，顯示出有不少使用者在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要快速生成美觀簡報的設計師和內容創作者。

> [!example] 使用場景
> - 設計師用它來快速生成客戶簡報，因為可以選擇多種風格的模板，節省設計時間。
> - 教育工作者用它來製作課堂簡報，因為模板的多樣性能滿足不同主題的需求。
> - 行銷專員用它來創建產品推廣簡報，因為美觀的設計能有效吸引目標受眾的注意。

## 架構分析

這個專案採用標準的前端架構，由 HTML、CSS 和 JavaScript 組成，設計上考慮了可重用性和美觀性。每個模板都是獨立的 HTML 文件，並包含相應的 CSS 和 JavaScript，這樣的設計讓使用者可以輕鬆選擇和修改。資料流方面，使用者選擇模板後，可以根據需求調整內容，這種靈活性是許多簡報工具所缺乏的。選擇 HTML 作為主要格式的好處在於，使用者可以直接在瀏覽器中查看和編輯，這樣的設計讓簡報的生成過程變得直觀。擴展性方面，這個專案能夠輕鬆添加新的模板，使用者只需遵循現有的結構即可。

## 技術深入分析

這個專案的核心技術機制是使用 HTML、CSS 和 JavaScript 來構建可重用的簡報模板。每個模板都經過精心設計，考慮了視覺美學和排版，這使得使用者能夠快速生成吸引人的簡報。效能方面，由於模板是靜態的 HTML 文件，因此加載速度快，對於小型簡報來說，幾乎不會有性能瓶頸。設計上，選擇 HTML 作為主要格式的好處在於，使用者可以直接在瀏覽器中查看和編輯，這樣的設計讓簡報的生成過程變得直觀。這個專案的依賴關係相對輕量，主要依賴於標準的前端技術，這降低了使用者的學習成本。技術風險方面，對於不熟悉 HTML 的使用者來說，可能會遇到編輯上的困難，這是需要注意的。整合方面，這個專案可以輕鬆與其他前端框架（如 React 或 Vue）搭配使用，但對於需要即時編輯的場景，可能需要額外的開發工作來實現。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供的 AGENTS.md 指導使用者如何操作，對新手友好。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 多樣化的模板選擇，滿足不同需求。
> - 自動化生成簡報，節省時間。
> - 清晰的文檔指導，降低使用門檻。

> [!danger] 缺點
> - 對於不熟悉 HTML 的使用者，可能需要額外學習成本。
> - 模板的自訂性依賴於使用者的編碼能力。
> - 不支援直接在網頁上編輯，需在本地環境操作。

> [!warning] 注意事項
> - 對於不熟悉 HTML 的使用者，可能需要額外學習成本。
> - 模板的自訂性依賴於使用者的編碼能力。
> - 不支援直接在網頁上編輯，需在本地環境操作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化簡報生成，但模板數量較少，風格不如本專案多樣。 |
| [Russell-cell/PPT-Design-Prompt](https://github.com/Russell-cell/PPT-Design-Prompt) | 專注於生成 PowerPoint 簡報，而本專案則專注於 HTML 模板，提供更高的自定義性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化簡報生成，但模板數量較少，風格不如本專案多樣。 | 如果需要快速生成簡報且不在意模板的多樣性。 | low，因為兩者的使用方式相似。 |
| [Russell-cell/PPT-Design-Prompt](https://github.com/Russell-cell/PPT-Design-Prompt) | 專注於生成 PowerPoint 簡報，而本專案則專注於 HTML 模板，提供更高的自定義性。 | 如果團隊已經習慣使用 PowerPoint 且需要與之整合。 | medium，因為需要重新適應不同的模板結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **beautiful-html-templates** | **agent-sprite-forge** | **PPT-Design-Prompt** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的自動化簡報生成，但模板數量較少，風格不如本專案多樣。 | 專注於生成 PowerPoint 簡報，而本專案則專注於 HTML 模板，提供更高的自定義性。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要重新適應不同的模板結構。 |
> | 適用場景 | 主要場景 | 如果需要快速生成簡報且不在意模板的多樣性。 | 如果團隊已經習慣使用 PowerPoint 且需要與之整合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於不熟悉 HTML 的使用者，可能會遇到編輯上的困難
  - 解法：建議尋找 HTML 基礎教程以提高編輯能力
- [MEDIUM] 模板的自訂性依賴於使用者的編碼能力
  - 解法：使用者可參考範例模板進行修改
- **[HIGH]** 不支援直接在網頁上編輯，需在本地環境操作
  - 解法：建議在本地環境中使用編輯器進行修改

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能快速生成簡報，提升團隊溝通效率。 |
| 大型企業的正式簡報 | 普通 | 雖然模板美觀，但可能需要更多的自訂化。 |
| 學術研究報告 | 非常適合 | 多樣化的模板能夠滿足不同學術需求。 |
| 需要即時編輯的簡報 | 不適合 | 不支援即時編輯，需在本地環境操作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、2 小時整合，得到快速生成美觀簡報的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，依賴鏈相對簡單，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
| Forks | 67 |
| Open Issues | 0 |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-05-05 |
| Repo 大小 | 50.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/zarazhangrui/beautiful-html-templates) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 87
>     "JavaScript" : 12
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zarazhangrui](https://github.com/zarazhangrui) | 18 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新和維護。
**連結**：[文件](https://github.com/zarazhangrui/beautiful-html-templates)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-05 ~ 2026-05-06）
> **活躍天數** 2 天 · **最新 commit** add: long-table template

## README 摘錄

> [!info]- 展開查看原文 README
> # beautiful-html-templates
> 
> A library of reusable HTML slide templates designed so that any coding agent can pick the right one and produce a beautiful deck on the user's behalf, automatically.
> 
> Agents using the library should read [`AGENTS.md`](./AGENTS.md). It's the operating manual: how to read `index.json`, match the user's brief to a template, clone it, and adapt the content.
> 
> ## Get started
> 
> Copy this to your coding agent:
> 
> ```
> Clone https://github.com/zarazhangrui/beautiful-html-templates and follow the instructions in AGENTS.md to build me a beautiful HTML slide deck.
> ```
> 
> ## Gallery
> 
> All 32 templates. Three slides per template (cover · mid-deck · later) to give a sense of how each visual system handles different layouts. Click any template name to open its folder on GitHub — the HTML, metadata, and any sibling assets are all there.
> 
> ### [Soft Editorial](./templates/soft-editorial/)
> 
>   
>   
>   
> 
> > Cormorant Garamond serif on warm paper with sage, blush, and lemon accents.
> 
> ### [Stencil & Tablet](./templates/stencil-tablet/)
> 
>   
>   
>   
> 
> > Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand.
> 
> ### [Vellum](./templates/vellum/)
> 
>   
>   
>   
> 
> > Deep navy canvas with warm-yellow italic Cormorant serifs and a single dusty teal accent. A quiet, scholarly aesthetic.
> 
> ### [Neo-Grid Bold](./templates/neo-grid-bold/)
> 
>   
>   
>   
> 
> > Editorial neo-brutalism with a single neon yellow accent on off-white paper.
> 
> ### [Editorial Tri-Tone](./templates/editorial-tri-tone/)
> 
>   
>   
>   
> 
> > Three-color editorial system: dusty pink, mustard cream, and deep burgundy, set in Bricolage + Instrument Serif.
> 
> ### [Creative Mode](./templates/creative-mode/)
> 
>   
>   
>   
> 
> > Cream paper canvas with confident multi-color (green, pink, orange, yellow) accents and Archivo Black display.
> 
> ### [Monochrome](./templates/monochrome/)
> 
>   
>   
>   
> 
> > Ivory ledger paper with all-black type; Lora serif headlines, Jost body, no color at all.
> 
> ### [People's Platform (Block & Bold)](./templates/peoples-platform/)
> 
>   
>   
>   
> 
> > Activist poster energy: blue, orange, red on cream, with Alfa Slab + Caveat Brush.
> 
> ### [Pink Script — After Hours](./templates/pink-script/)
> 
>   
>   
>   
> 
> > Black canvas, hot pink accent, pearl-cream paper, Instrument Serif headlines: late-night editorial luxury.
> 
> ### [8-Bit Orbit](./templates/8-bit-orbit/)
> 
>   
>   
>   
> 
> > Pixel-art neon arcade aesthetic on a deep navy void.
> 
> ### [BlockFrame](./templates/block-frame/)
> 
>   
>   
>   
> 
> > Neobrutalist deck with pastel-neon color blocks and chunky black borders.
> 
> ### [Blue Professional](./templates/blue-professional/)
> 
>   
>   
>   
> 
> > Cream paper background with electric cobalt blue accents; clean modern professional.
> 
> ### [Bold Poster](./templates/bold-poster/)
> 
>   
>   
>   
> 
> > Editorial poster aesthetic with massive Shrikhand display and a single fire-engine red accent.
> 
> ### [Broadside](./templates/broadside/)
> 
>   
>   
>   
> 
> > Dark editorial canvas with a single fire orange accent and bilingual Latin/Chinese type stack.
> 
> ### [Capsule](./templates/capsule/)
> 
>   
>   
>   
> 
> > Modular pill-shaped cards on warm bone with a full pastel-pop palette.
> 
> ### [Cartesian](./templates/cartesian/)
> 
>   
>   
>   
> 
> > Quiet warm-neutral palette with classical Playfair serifs; tasteful and unhurried.
> 
> ### [Coral](./templates/coral/)
> 
>   
>   
>   
> 
> > Cream and coral on near-black, set in oversized Bebas Neue.
> 
> ### [Daisy Days](./templates/daisy-days/)
> 
>   
>   
>   
> 
> > Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm.
> 
> ### [Grove](./templates/grove/)
> 
>   
>   
>   
> 
> > Forest-green canvas with cream type, classical Playfair serifs, and a single rust accent.
> 
> ### [Mat](./templates/mat/)
> 
>   
>   
>   
> 
> > Dark sage canvas with bone paper and burnt-orange accent; mid-century modern with wood undertones.
> 
> ### [Pin & Paper](./templates/pin-and-paper/)
> 
>   
>   
>   
> 
> > Yellow paper with safety-pin illustrations, ink-blue handwritten Caveat, paper-grain texture.
> 
> ### [Playful](./templates/playful/)
> 
>   
>   
>   
> 
> > Sun-warm peach background with Syne display: a friendly indie launch deck.
> 
> ### [Raw Grid](./templates/raw-grid/)
> 
>   
>   
>   
> 
> > Neo-brutalist deck with thick borders, offset shadows, and a pink/sage/ink palette.
> 
> ### [Retro Windows](./templates/retro-windows/)
> 
>   
>   
>   
> 
> > Windows 95 chrome: gray title bars, MS Sans Serif, pixel typography, full nostalgia.
> 
> ### [Retro Zine](./templates/retro-zine/)
> 
>   
>   
>   
> 
> > Beige paper with green accent and Bebas Neue + Caveat: a riso-printed zine in HTML form.
> 
> ### [Scatterbrain](./templates/scatterbrain/)
> 
>   
>   
>   
> 
> > Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack.
> 
> ### [Signal](./templates/signal/)
> 
>   
>   
>   
> 
> > Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight.
> 
> ### [Studio](./templates/studio/)
> 
>   
>   
>   
> 
> > Black canvas with electric-yellow type; high-voltage design studio aesthetic.
> 
> ### [Biennale Yellow](./templates/biennale-yellow/)
> 
>   
>   
>   
> 
> > Solar yellow on warm parchment with deep indigo serif and atmospheric sun-glow gradients. Dutch-editorial poster energy.
> 
> ### [Sakura Chroma](./templates/sakura-chroma/)
> 
>   
>   
>   
> 
> > Vintage Japanese cassette-package aesthetic: cream paper, diagonal rainbow ribbons, condensed bold type, JIS-style spec checkboxes.
> 
> ### [Cobalt Grid](./templates/cobalt-grid/)
> 
>   
>   
>   
> 
> > Electric cobalt italic serifs on a graph-paper canvas, anchored by stair-stepped pixel-glitch decorations and slim hairline rules.
> 
> ### [Long Table](./templates/long-table/)
> 
>   
>   
>   
> 
> > Warm cream and rust-red supper-club aesthetic with bold uppercase grotesk headlines, italic Fraunces, and pill-shaped outlined buttons.
> 
> ## License
> 
> [MIT](./LICENSE) — free to use, modify, and distribute.

## 延伸閱讀

相關概念：[[自動化]] · [[資料視覺化]] · [[簡報設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Russell-cell--PPT-Design-Prompt|Russell-cell/PPT-Design-Prompt]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]]

[GitHub](https://github.com/zarazhangrui/beautiful-html-templates)

## 相關收錄

> [!note]- 直接競品（同子分類：簡報工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "簡報工具" AND file.name != "zarazhangrui--beautiful-html-templates"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zarazhangrui--beautiful-html-templates"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "zarazhangrui--beautiful-html-templates" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "zarazhangrui--beautiful-html-templates"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","資料視覺化","簡報設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "zarazhangrui--beautiful-html-templates" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "zarazhangrui--beautiful-html-templates" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "zarazhangrui" AND file.name != "zarazhangrui--beautiful-html-templates"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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
> const me = dv.page("Repos/zarazhangrui--beautiful-html-templates");
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

> **2026-05-11** — 首次收錄
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

- [[2026-05-12|2026-05-12]] — 再次上榜，863 stars
- [[2026-05-11|2026-05-11]] — 首次收錄，730 stars
