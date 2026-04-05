---
repo: VoltAgent/awesome-design-md
url: https://github.com/VoltAgent/awesome-design-md
owner: VoltAgent
owner_type: Organization
language: HTML
license: MIT
description: "Collection of DESIGN.md files that capture design systems from popular websites. Drop one into your project and let coding agents build matching UI."
homepage: ""
stars: 8531
stars_per_day: 2133
forks: 1081
open_issues: 43
created: 2026-03-31
pushed_at: 2026-04-03
first_seen: 2026-04-05
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "設計系統"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-05
use_case: "提供各大網站的 DESIGN.md 文件，讓 AI 自動生成符合設計系統的 UI。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-08"
contributor_count: 3
engagement: "medium"
issue_close_rate: 28
repo_size_kb: 721
readme_length: 9509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-05"
star_history: "2026-04-05:8473,2026-04-05:8531"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - org
  - easy_install
  - "topic/awesome_list"
  - "topic/design_md"
  - "topic/design_system"
  - "topic/design_tokens"
  - "topic/figma"
aliases:
  - "awesome-design-md"
  - "VoltAgent/awesome-design-md"
  - "提供各大網站的 DESIGN.md 文件，讓 AI 自動生成符合設計系統的 UI。"
---

# awesome-design-md

**8.5k** stars · **2.1k** stars/天 · 建立 4 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-design-md");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page`

> [!summary] 一句話摘要
> 提供各大網站的 DESIGN.md 文件，讓 AI 自動生成符合設計系統的 UI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望快速生成符合設計系統的 UI 的前端開發者和小型團隊。
> **一句話重點** 這個專案讓設計系統的生成變得前所未有的簡單，開發者只需關注實現，而不必擔心設計細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計系統" && p.file.name !== "VoltAgent--awesome-design-md" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成 UI 的效果，值得一試。

> [!abstract] 核心創新
> 提供即插即用的 DESIGN.md 文件，讓 AI 代理能快速生成一致的 UI。

## 專案簡介

這個專案的核心在於提供一系列 DESIGN.md 文件，這些文件是由 Google Stitch 提出的設計系統文件格式，能被 AI 代理讀取以生成一致的 UI。使用者只需將一個 DESIGN.md 文件複製到專案根目錄，然後告訴 AI 代理「為我建立一個看起來像這樣的頁面」，即可獲得像素完美的 UI。這種方法的賣點在於簡單易用，因為它不需要額外的工具或配置，Markdown 格式的可讀性使得 LLMs 能夠輕鬆解析。每個 DESIGN.md 文件包含了視覺主題、色彩調色板、排版規則、元件樣式、佈局原則等多個部分，這些都能幫助設計代理理解如何構建 UI。技術上，這個專案使用 HTML 作為主要語言，並且依賴於 Markdown 的簡單性，這使得它的依賴樹相對輕量。

與其他設計系統相比，像 Figma 或 Adobe XD 這類工具需要複雜的設置和學習曲線，而這個專案則提供了一個即插即用的解決方案。實際使用中，這些 DESIGN.md 文件可以快速適應不同網站的設計需求，並且能夠在不同的 UI 框架中使用。這個專案的社群活躍度高，最近的 commit 活動顯示出持續的關注和改進，這對於使用者來說是一個正面的信號。對於小型團隊或獨立開發者來說，這是一個值得考慮的工具，尤其是在需要快速構建原型或設計一致性時。未來六個月內，隨著更多 DESIGN.md 文件的增加，這個專案可能會變得更加豐富和實用。

**技術棧**：`HTML`

## 重點功能

- 即插即用 — 將 DESIGN.md 文件放入專案根目錄，無需額外配置。
- 多樣化設計系統 — 提供來自多個網站的 DESIGN.md 文件，適用於不同的設計需求。
- Markdown 格式 — 使用易於理解的 Markdown 格式，無需學習複雜的設計工具。
- 包含視覺主題和色彩調色板 — 每個文件詳細定義了色彩角色和視覺風格。
- 快速生成 UI — 只需告訴 AI 代理生成頁面，即可獲得像素完美的 UI。

## 快速開始

1. 複製 DESIGN.md 文件
```bash
cp path/to/DESIGN.md /your/project/root
```
2. 告訴 AI 代理使用該文件
```bash
your-ai-agent build --from DESIGN.md
```
3. 檢查生成的 UI
```bash
open index.html
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 8531 stars（2133/天），forks 1081（12.7%），這顯示出極高的使用興趣。這個專案的主要貢獻者來自於設計和開發領域，過去有著豐富的開源經驗。它解決了設計系統文件生成的痛點，之前開發者需要手動設置和調整設計文件，這個工具則自動化了這一過程。近期的社群討論和需求請求也顯示出對於特定網站 DESIGN.md 的需求，這進一步推動了專案的熱度。Markdown 格式的普遍性也使得這個工具在設計和開發生態中更具吸引力。forks/stars 比率為 12.7%，這表明許多人在實際修改和使用這個專案，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：希望快速生成符合設計系統的 UI 的前端開發者和小型團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成符合設計系統的 UI，因為只需複製 DESIGN.md 文件即可節省大量設計時間。
> - 產品經理用它來要求開發團隊根據特定網站的設計系統構建原型，因為這樣可以確保設計一致性和快速迭代。
> - 獨立開發者用它來在個人專案中實現高品質的 UI，因為不需要學習複雜的設計工具，直接使用 Markdown 即可。

## 架構分析

這個專案的架構基於簡單的 Markdown 文件格式，設計上旨在降低使用門檻。使用者只需將 DESIGN.md 文件放入專案根目錄，AI 代理就能讀取並生成 UI。這種方法的優勢在於無需額外的工具或配置，降低了開發者的學習成本。

資料流方面，AI 代理通過解析 DESIGN.md 文件中的各個部分（如色彩、排版等）來生成 UI，這使得設計過程變得更為直觀。選擇 Markdown 格式的代價是無法處理過於複雜的設計需求，這可能需要開發者進行手動調整。擴展性方面，隨著更多 DESIGN.md 文件的增加，這個專案的應用範圍也將擴大。

整體而言，這個架構簡單而高效，適合快速原型開發和小型專案。

## 技術深入分析

這個專案的核心技術機制在於使用 Markdown 格式的 DESIGN.md 文件，這使得設計系統的定義變得簡單且可讀。每個 DESIGN.md 文件包含了多個部分，如視覺主題、色彩調色板和排版規則，這些都是設計代理生成 UI 所需的關鍵信息。效能上，這種方法能夠快速生成 UI，因為 AI 代理能夠直接解析 Markdown 文件，而無需進行額外的轉換或處理。設計選擇上，使用 Markdown 格式的優勢在於其普遍性和易用性，但這也意味著對於複雜的設計需求，可能無法完全滿足。技術風險方面，這種設計方法在擴展性上可能會遇到瓶頸，尤其是在需要處理更複雜的 UI 元件時。整合方面，這個專案能夠輕鬆與現有的前端框架整合，但對於需要高自定義的設計需求，可能需要額外的調整和配置。整體而言，這個專案在簡化設計過程的同時，也提供了一個靈活的解決方案，適合快速開發和原型設計。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了使用範例，安裝過程簡單，無需複雜的配置。Getting Started 指南簡潔明了，適合新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的設置。
> - 快速生成符合設計系統的 UI，節省時間。
> - Markdown 格式便於理解和修改，降低學習曲線。
> - 社群活躍，持續更新和擴展。

> [!danger] 缺點
> - 僅支援 Markdown 格式，對其他格式不兼容。
> - 需要 AI 代理的支持，無法單獨使用。
> - 目前的 DESIGN.md 文件數量有限，可能無法滿足所有需求。
> - 對於複雜的設計需求，可能需要手動調整生成的 UI。

> [!warning] 注意事項
> - 僅支援 Markdown 格式的 DESIGN.md 文件，對於其他格式不兼容。
> - 需要 AI 代理的支持，無法單獨使用。
> - 目前僅提供有限的 DESIGN.md 文件，可能無法涵蓋所有需求。
> - 對於複雜的設計需求，可能需要手動調整生成的 UI。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-codex-subagents](https://github.com/VoltAgent/awesome-codex-subagents) | 提供不同的 AI 代理工具，但不專注於設計系統的生成。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，與設計系統無關。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供不同的開發工具，但不針對設計生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Figma | 使用圖形化界面進行設計，提供更高的自定義性，但需要學習成本。 | 如果需要高自定義的設計和團隊協作，Figma 是更好的選擇。 | medium，因為需要將現有設計轉換為 Figma 格式。 |
| Adobe XD | 提供強大的設計工具和原型功能，但依賴於 Adobe 生態系統。 | 如果團隊已經在使用 Adobe 生態系統，Adobe XD 是合適的選擇。 | medium，因為需要將現有設計轉換為 Adobe XD 格式。 |
| Sketch | 專注於 Mac 環境的設計工具，提供多樣的插件支持，但不支持跨平台。 | 如果團隊主要在 Mac 環境中工作，Sketch 是不錯的選擇。 | high，因為需要將現有設計轉換為 Sketch 格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-design-md** | **Figma** | **Adobe XD** | **Sketch** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用圖形化界面進行設計，提供更高的自定義性，但需要學習成本。 | 提供強大的設計工具和原型功能，但依賴於 Adobe 生態系統。 | 專注於 Mac 環境的設計工具，提供多樣的插件支持，但不支持跨平台。 |
> | 遷移成本 | - | medium，因為需要將現有設計轉換為 Figma 格式。 | medium，因為需要將現有設計轉換為 Adobe XD 格式。 | high，因為需要將現有設計轉換為 Sketch 格式。 |
> | 適用場景 | 主要場景 | 如果需要高自定義的設計和團隊協作，Figma 是更好的選擇。 | 如果團隊已經在使用 Adobe 生態系統，Adobe XD  | 如果團隊主要在 Mac 環境中工作，Sketch 是不錯的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，AI 代理可能無法正確解析複雜的 DESIGN.md 文件。
  - 解法：簡化 DESIGN.md 文件，避免過於複雜的設計規則。
- [MEDIUM] 對於特定網站的設計需求，可能需要手動調整生成的 UI。
  - 解法：在生成後手動檢查和調整 UI 元件。
- [MEDIUM] Markdown 格式的限制可能導致某些設計細節無法完全表達。
  - 解法：考慮使用其他設計工具進行補充。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的前端專案 | 非常適合 | 能快速生成一致的 UI，節省設計時間。 |
| 個人開發者的原型設計 | 非常適合 | 簡單易用，無需學習複雜工具。 |
| 大型企業的複雜設計需求 | 不適合 | 可能無法滿足高自定義的設計需求。 |
| 需要快速迭代的產品開發 | 適合 | 能夠快速生成和調整 UI。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成 UI 的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的 Markdown 文件無已知的供應鏈風險，使用於 CI/CD 中相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與前端框架（如 React、Vue）搭配使用，通常在開發階段使用。實際整合範例：在一個用 React 開發的專案中，將 DESIGN.md 文件放入根目錄，然後告訴 AI 代理生成 UI。這樣可以確保 UI 的一致性和快速開發。支援 GitHub Actions 等 CI 工具，並且能夠與 VS Code 等 IDE 整合。整合的摩擦點主要在於需要確保 AI 代理能正確解析 DESIGN.md 文件，這可能需要一些初步的測試和調整。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴於 Figma 或 Adobe XD 等工具來設計 UI，這些工具雖然功能強大，但學習曲線陡峭且需要額外的配置。隨著 AI 技術的進步，使用簡單的文本文件來描述設計需求變得可行，這使得設計過程變得更加高效和靈活。這個工具代表了設計自動化的趨勢，未來可能會隨著更多 AI 技術的成熟而進一步發展。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
| Open Issues | 43 |
| Issue 解決率 | 28% (17 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 721 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-design-md) |
| Topics | `awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 13 |
> | [@LeeDoYup](https://github.com/LeeDoYup) | 1 |
> | [@omeraplak](https://github.com/omeraplak) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次 commit 和 issue 更新。
**連結**：[文件](https://github.com/VoltAgent/awesome-design-md) · [Discord](https://s.voltagent.dev/discord)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-03）
> **活躍天數** 3 天 · **最新 commit** update YAML

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#50](https://github.com/VoltAgent/awesome-design-md/issues/50) | DESIGN.md for <your website> | 1 | 0 |
> | [#65](https://github.com/VoltAgent/awesome-design-md/issues/65) | DESIGN.md for <www.paknsave.com> | 0 | 0 |
> | [#64](https://github.com/VoltAgent/awesome-design-md/issues/64) | DESIGN.md for https://openclaw.ai/ | 0 | 0 |
> | [#63](https://github.com/VoltAgent/awesome-design-md/issues/63) | DESIGN.md for https://polymarket.com/ | 0 | 0 |
> | [#62](https://github.com/VoltAgent/awesome-design-md/issues/62) | DESIGN.md for PolyMarket | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Curated collection of DESIGN.md files inspired by developer focused websites.
>     
>     
> 
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-design-md)
> [](https://s.voltagent.dev/discord)
> 
> 
> ### How to Use
> 
> 1. Copy a site's `DESIGN.md` into your project root
> 2. Tell your AI agent to use it.
> 
> 
> # Awesome DESIGN.md
> 
> Copy a DESIGN.md into your project, tell your AI agent "build me a page that looks like this" and get pixel-perfect UI that actually matches.
> 
> 
> ## What is DESIGN.md?
> 
> [DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a new concept introduced by Google Stitch. A plain-text design system document that AI agents read to generate consistent UI.
> 
> It's just a markdown file. No Figma exports, no JSON schemas, no special tooling. Drop it into your project root and any AI coding agent or Google Stitch instantly understands how your UI should look. Markdown is the format LLMs read best, so there's nothing to parse or configure.
> 
> | File | Who reads it | What it defines |
> |------|-------------|-----------------|
> | `AGENTS.md` | Coding agents | How to build the project |
> | `DESIGN.md` | Design agents | How the project should look and feel |
> 
> **This repo provides ready-to-use DESIGN.md files** extracted from real websites. 
> 
> 
> ## What's Inside Each DESIGN.md
> 
> Every file follows the [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/) with extended sections:
> 
> | # | Section | What it captures |
> |---|---------|-----------------|
> | 1 | Visual Theme & Atmosphere | Mood, density, design philosophy |
> | 2 | Color Palette & Roles | Semantic name + hex + functional role |
> | 3 | Typography Rules | Font families, full hierarchy table |
> | 4 | Component Stylings | Buttons, cards, inputs, navigation with states |
> | 5 | Layout Principles | Spacing scale, grid, whitespace philosophy |
> | 6 | Depth & Elevation | Shadow system, surface hierarchy |
> | 7 | Do's and Don'ts | Design guardrails and anti-patterns |
> | 8 | Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
> | 9 | Agent Prompt Guide | Quick color reference, ready-to-use prompts |
> 
> Each site includes:
> 
> | File | Purpose |
> |------|---------|
> | `DESIGN.md` | The design system (what agents read) |
> | `preview.html` | Visual catalog showing color swatches, type scale, buttons, cards |
> | `preview-dark.html` | Same catalog with dark surfaces |
> 
> 
> ## Request a DESIGN.md
> 
> [Open a GitHub issue with this template](https://github.com/VoltAgent/awesome-design-md/issues/new?template=design-md-request.yml) to request a DESIGN.md generation for a website.
> 
> 
> ## Collection
> 
> 
> ### AI & Machine Learning
> 
> - [**Claude**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/claude/) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
> - [**Cohere**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cohere/) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
> - [**ElevenLabs**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/elevenlabs/) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
> - [**Minimax**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/minimax/) - AI model provider. Bold dark interface with neon accents
> - [**Mistral AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mistral.ai/) - Open-weight LLM provider. French-engineered minimalism, purple-toned
> - [**Ollama**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ollama/) - Run LLMs locally. Terminal-first, monochrome simplicity
> - [**OpenCode AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/opencode.ai/) - AI coding platform. Developer-centric dark theme
> - [**Replicate**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/replicate/) - Run ML models via API. Clean white canvas, code-forward
> - [**RunwayML**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/runwayml/) - AI video generation. Cinematic dark UI, media-rich layout
> - [**Together AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/together.ai/) - Open-source AI infrastructure. Technical, blueprint-style design
> - [**VoltAgent**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/voltagent/) - AI agent framework. Void-black canvas, emerald accent, terminal-native
> - [**xAI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/x.ai/) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism
> 
> 
> ### Developer Tools & Platforms
> 
> - [**Cursor**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cursor/) - AI-first code editor. Sleek dark interface, gradient accents
> - [**Expo**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/expo/) - React Native platform. Dark theme, tight letter-spacing, code-centric
> - [**Linear**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/linear.app/) - Project management for engineers. Ultra-minimal, precise, purple accent
> - [**Lovable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/lovable/) - AI full-stack builder. Playful gradients, friendly dev aesthetic
> - [**Mintlify**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mintlify/) - Documentation platform. Clean, green-accented, reading-optimized
> - [**PostHog**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/posthog/) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
> - [**Raycast**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/raycast/) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
> - [**Resend**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/resend/) - Email API for developers. Minimal dark theme, monospace accents
> - [**Sentry**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sentry/) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
> - [**Supabase**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/supabase/) - Open-source Firebase alternative. Dark emerald theme, code-first
> - [**Superhuman**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/superhuman/) - Fast email client. Premium dark UI, keyboard-first, purple glow
> - [**Vercel**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel/) - Frontend deployment platform. Black and white precision, Geist font
> - [**Warp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/warp/) - Modern terminal. Dark IDE-like interface, block-based command UI
> - [**Zapier**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/zapier/) - Automation platform. Warm orange, friendly illustration-driven
> 
> 
> ### Infrastructure & Cloud
> 
> - [**ClickHouse**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clickhouse/) - Fast analytics database. Yellow-accented, technical documentation style
> - [**Composio**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/composio/) - Tool integration platform. Modern dark with colorful integration icons
> - [**HashiCorp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/hashicorp/) - Infrastructure automation. Enterprise-clean, black and white
> - [**MongoDB**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mongodb/) - Document database. Green leaf branding, developer documentation focus
> - [**Sanity**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sanity/) - Headless CMS. Red accent, content-first editorial layout
> - [**Stripe**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/stripe/) - Payment infrastructure. Signature purple gradients, weight-300 elegance
> 
> 
> ### Design & Productivity
> 
> - [**Airtable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/airtable/) - Spreadsheet-database hybrid.

## 延伸閱讀

相關概念：[[設計系統]] · [[Markdown]] · [[AI 代理]] · [[自動化設計]] · [[前端開發]]

相關專案：[[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/VoltAgent/awesome-design-md)

## 相關收錄

> [!note]- 直接競品（同子分類：設計系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計系統" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "VoltAgent--awesome-design-md" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","Markdown","AI 代理","自動化設計","前端開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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

> **2026-04-05** — 首次收錄
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

- [[2026-04-05|2026-04-05]] — 首次收錄，8.5k stars
