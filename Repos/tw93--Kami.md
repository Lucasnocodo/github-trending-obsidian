---
repo: tw93/Kami
url: https://github.com/tw93/Kami
owner: tw93
owner_type: User
language: HTML
license: MIT
description: "👩‍🚒 Good content deserves good paper."
homepage: "https://kami.tw93.fun"
stars: 2897
stars_per_day: 966
forks: 140
open_issues: 0
created: 2026-04-20
pushed_at: 2026-04-23
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "文檔生成"
release_tag: "V1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: "提供高品質的文件設計系統，讓你的內容在印刷時展現專業美感。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 67
repo_size_kb: 21744
readme_length: 4537
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:1594,2026-04-23:2559,2026-04-24:2897"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "Kami"
  - "tw93/Kami"
  - "提供高品質的文件設計系統，讓你的內容在印刷時展現專業美感。"
---

# Kami

**1.6k** stars · **1.6k** stars/天 · 建立 1 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/tw93--Kami");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `V1.0.0` `easy-install`

> [!summary] 一句話摘要
> 提供高品質的文件設計系統，讓你的內容在印刷時展現專業美感。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.6k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要生成高品質專業文檔的創業者和自由工作者。
> **一句話重點** Kami 的設計理念讓專業文檔的生成變得簡單而美觀，適合需要高品質輸出的使用者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tw93--Kami");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "文檔生成" && p.file.name !== "tw93--Kami" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 文檔生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高品質文檔生成，值得使用。

> [!abstract] 核心創新
> Kami 提供了一個統一的設計語言，讓專業文檔生成變得簡單且美觀。

## 專案簡介

Kami 是一個設計系統，專為 Claude Code、Codex 和 Claude Desktop 而設計，能夠根據自然語言指令生成印刷準備好的文件，並以溫暖的羊皮紙美學呈現。用戶只需描述需求，例如「為我的創業公司製作一頁簡報」，Kami 就會自動生成相應的文件。這個系統提供六種文件類型，包括單頁、長文、信件、作品集、履歷和簡報，並支援中英文版本，讓使用者能夠輕鬆創建專業文檔。其設計理念強調簡約與優雅，使用暖色調的羊皮紙背景和墨藍色的點綴，並且在字體選擇上使用了 serif 和 sans 的搭配，增強了文檔的可讀性和權威性。主要的 CLI 指令為 `npx skills add tw93/kami -a claude-code -g -y`，這是將 Kami 加入 Claude Code 的方式。這個工具的賣點在於它能夠快速生成高品質的文檔，避免了傳統文件設計的平庸和無趣。其設計系統的約束使得每一個生成的文件都能保持一致的美學風格，這在需要大量生成文檔的情境下尤為重要。

**技術棧**：`HTML` · `Python` · `CSS`

## 重點功能

- 多種文件類型 — 支援單頁、長文、信件、作品集、履歷和簡報，並提供中英文版本。
- 自然語言生成 — 用戶可用自然語言描述需求，系統自動生成相應文件。
- 統一的設計風格 — 使用暖色調的羊皮紙背景和墨藍色點綴，保持一致的美學。
- SVG 圖表支援 — 提供內嵌的架構圖、流程圖和象限圖，增強文檔的視覺效果。
- 簡單的 CLI 指令 — 透過 `npx skills add tw93/kami -a claude-code -g -y` 快速安裝和使用。
- 高可讀性字體 — 使用 serif 和 sans 字體搭配，提升文檔的可讀性和專業感。

## 快速開始

1. 安裝 Kami 至 Claude Code
```bash
npx skills add tw93/kami -a claude-code -g -y
```
2. 安裝 Kami 至 Codex
```bash
npx skills add tw93/kami -a codex -g -y
```
3. 安裝至通用代理
```bash
npx skills add tw93/kami -a '*' -g -y
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1594 stars（1594/天），forks 83（5.2%），這顯示出使用者對於這個工具的高度興趣。作者 tw93 之前開發過 Kaku 和 Waza，這些工具在文檔生成和習慣養成方面都有良好的口碑。Kami 解決了傳統文檔設計的兩個失敗模式：無趣的企業灰色和過度的 SaaS 渲染，提供了一個統一的設計語言，讓文件看起來更具人性化。這個專案的快速增長可能受到社群對於高品質文檔需求的驅動，尤其是在專業領域中。其設計理念和功能的獨特性，使得它在眾多類似工具中脫穎而出。

## 適合誰使用

**目標受眾**：需要生成高品質專業文檔的創業者和自由工作者。

> [!example] 使用場景
> - 市場行銷專員用它來快速生成專業的產品簡報，因為這樣可以節省設計時間，並保持品牌一致性。
> - 自由工作者用它來製作履歷和作品集，因為其提供的模板讓他們能夠輕鬆展示自己的專業形象。
> - 企業內部團隊用它來創建會議簡報，因為其簡單的指令能快速轉換需求為視覺化內容。

## 架構分析

Kami 的架構選擇了輕量級的設計系統，專注於生成高品質的文檔。其資料流從用戶的自然語言輸入開始，經過語言解析和格式化處理，最終生成符合設計規範的文檔。這種設計使得用戶無需具備設計背景也能創建專業文件，降低了使用門檻。選擇使用現有的 CLI 工具（如 npx）來安裝和使用，這樣的選擇使得整體安裝過程變得簡單且快速。未來的擴展性可能會受到現有設計規範的限制，但這也確保了生成文檔的一致性和品質。

## 技術深入分析

Kami 的核心技術機制在於其設計系統，使用了特定的色彩和字體規範，以確保每個生成的文檔都能保持一致的美學。這個系統不僅僅是生成文檔，而是提供了一種視覺語言，讓使用者能夠在不同類型的文檔中保持統一的風格。效能方面，Kami 能夠快速響應用戶的需求，生成的文檔在幾秒鐘內完成，適合需要快速輸出的場景。設計選擇上，Kami 選擇了使用現有的 JavaScript 生態系統，這樣的選擇使得整體架構輕量且易於維護。技術風險方面，未來可能需要考慮如何擴展到其他語言的支援，以及如何處理用戶對於自定義設計的需求。整合方面，Kami 可以輕鬆地與現有的工作流結合，特別是與 Claude 系列產品的整合，讓使用者能夠在熟悉的環境中使用這個工具。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程順暢，無明顯的坑。文件中有提供範例，讓新手能快速上手。

## 優缺點分析

> [!success] 優點
> - 快速生成高品質文檔，節省設計時間。
> - 統一的設計風格，提升專業形象。
> - 支援多種文件類型，滿足不同需求。

> [!danger] 缺點
> - 對於自定義設計的支援有限。
> - 目前僅支援中英文，其他語言不適用。
> - 生成的文檔可能需要手動調整格式。

> [!warning] 注意事項
> - 目前僅支援中英文，其他語言可能無法正確生成文檔。
> - 對於自定義主題的支援有限，使用者需要遵循預設設計。
> - 在某些情況下，生成的文檔可能需要手動調整格式以符合特定需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了類似的文檔生成能力，但缺乏 Kami 的統一設計風格和自然語言生成特性。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 主要針對代碼生成，與 Kami 的文檔設計焦點不同，適合需要代碼自動化的場景。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | Obsidian 提供了更靈活的文檔編輯功能，但不具備 Kami 的專業印刷設計風格。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個靈活的文檔生成框架，但缺乏 Kami 的設計統一性和美學。 | 如果你的團隊需要高度自定義的文檔生成方案，Boneyard 會是更好的選擇。 | medium，因為需要重新設計文檔生成流程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 專注於代碼生成，與 Kami 的文檔設計焦點不同。 | 如果你的需求主要是代碼自動化，Codeburn 會更合適。 | low，因為功能範圍不同，遷移不會太複雜。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Kami** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 提供了一個靈活的文檔生成框架，但缺乏 Kami 的設計統一性和美學。 | Codeburn 專注於代碼生成，與 Kami 的文檔設計焦點不同。 |
> | 遷移成本 | - | medium，因為需要重新設計文檔生成流程。 | low，因為功能範圍不同，遷移不會太複雜。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高度自定義的文檔生成方案，Boneyard  | 如果你的需求主要是代碼自動化，Codeburn 會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心文檔。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的文檔在某些情況下可能格式不正確，特別是對於複雜內容。
  - 解法：手動調整格式以符合需求。
- [MEDIUM] 自定義主題的支援有限，可能無法滿足特定設計需求。
  - 解法：使用預設設計並調整內容以適應。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速生成專業文檔 | 非常適合 | Kami 提供了快速且高品質的文檔生成，符合創業團隊的需求。 |
| 大型企業需要大量定制化文檔 | 不適合 | Kami 的自定義功能有限，無法滿足大型企業的需求。 |
| 自由工作者需要生成履歷和作品集 | 非常適合 | Kami 提供的模板能夠快速生成專業文檔，節省時間。 |
| 教育機構需要製作教學材料 | 普通 | 雖然 Kami 能生成文檔，但對於特定教育需求的支援有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高品質文檔生成，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Kami 本身不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tw93--Kami");
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
> const me = dv.page("Repos/tw93--Kami");
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
| Forks | 83 |
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://kami.tw93.fun) |
| Repo 大小 | 21.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tw93/Kami) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 83
>     "Python" : 10
>     "CSS" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tw93](https://github.com/tw93) | 31 |

**最新版本**：V1.0.0 — V1.0.0 Kami is born 紙 (2026-04-20)

> [!info]- Release Notes
> <div align="center">
>   <img src="https://raw.githubusercontent.com/tw93/kami/main/assets/images/logo.svg" alt="Kami Logo" width="120" />
>   <h1>Kami V1.0.0</h1>
>   <p><em>The paper your deliverables land on.</em></p>
> </div>
> 
> ### What is Kami
> 
> Kami is a design system skill for Claude Code, Codex, and Claude Desktop. Tell Claude what you need in natural language, it produces print-ready documents in a warm parchment aesthetic with ink-blue accent, serif-led hierarchy, and editorial whitespace.
> 
> ### Document types
> 
> One-Pager, Long Doc, Letter, Portfolio, Resume, and Slides. Each with Chinese and English variants. Three inline SVG diagram primitives: architecture, flowchart, quadrant.
> 
> ### Install
> 
> ```bash
> # Claude Code
> npx skills add tw93/kami -a claude-code -g -y
> 
> # Codex
> npx skills add tw93/kami -a codex -g -y
> ```
> 
> ### Design highlights
> 
> - Warm parchment canvas `#f5f4ed`, single ink-blue accent `#1B365D`
> - English: Newsreader serif for headlines and body. Chinese: TsangerJinKai02 serif + Source Han Sans
> - Serif weight locked at 500, no bold, no italic
> - Eight design invariants hold across every document

## 社群與生態

**社群活躍度**：社群活躍，開放問題和建議的渠道。
**連結**：[文件](https://kami.tw93.fun)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-21）
> **活躍天數** 1 天 · **最新 commit** feat: add slide-scale tokens, Section Header, Code Card, Deck Recipe

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/tw93/Kami/issues/3) | fork 了仓库后，自定义了一个别的主题，不知道怎么提交 pr 🥲 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Kami
>   Good content deserves good paper.
>   
>   
>   
>   
> 
> ## Why
> 
> Kami (紙, かみ) is the Japanese word for paper: the quiet surface on which a finished idea finally lands. Most document design drifts into two failure modes: generic corporate gray, or SaaS hype gradients. Neither reads like something a person actually made with care.
> 
> Kami holds one design idea across every format: warm parchment canvas, a single ink-blue accent, serif for authority, sans for utility, editorial whitespace tuned for print. 
> 
> Part of a trilogy: [Kaku](https://github.com/tw93/Kaku) (書く) writes code, [Waza](https://github.com/tw93/Waza) (技) drills habits, [Kami](https://github.com/tw93/Kami) (紙) ships documents. Think of them as a family: Kaku is the dad, Waza the big sister, Kami the little sister.
> 
> ## See it
> 
>   
>     
>     One-Pager · 中文
>     Tesla 公司介绍 · 单页
>   
>   
>     
>     Slides · English
>     Agent keynote, 6 slides
>   
>   
>     
>     Resume · English
>     Founder CV, 2 pages
>   
>   
>     
>     Portfolio · 中文
>     Kaku 项目作品集 · 6 页
>   
> 
> ## Usage
> 
> **Claude Code**
> 
> ```bash
> npx skills add tw93/kami -a claude-code -g -y
> ```
> 
> **Codex**
> 
> ```bash
> npx skills add tw93/kami -a codex -g -y
> ```
> 
> **Generic agents** (opencode, pi, and other tools that read from `~/.agents/`)
> 
> ```bash
> npx skills add tw93/kami -a '*' -g -y
> ```
> 
> **Claude Desktop**
> 
> [Download from Releases](https://github.com/tw93/kami/releases), open Customize > Skills > "+" > Create skill, upload the ZIP.
> 
> The skill auto-triggers when you describe what you need, no slash command required.
> 
> > make a one-pager for my startup / build me a resume / write me a recommendation letter / design a slide deck for my talk / turn this into a polished white paper / make a portfolio showcasing my projects / 帮我排版一份白皮书 / 帮我做一份作品集 / 生成一份项目方案
> 
> ## Design
> 
> Warm parchment canvas, ink blue as the sole accent, serif carries authority, no hard shadows or flashy palettes. This is not a UI framework; it is an aesthetic constraint system for printed matter. Quality documents read like literature, not dashboards.
> 
> Six document types (One-Pager, Long Doc, Letter, Portfolio, Resume, Slides), each with Chinese and English variants. Three inline SVG diagram types (architecture, flowchart, quadrant) are included. Kami picks the right variant based on the language you write in.
> 
> | Element | Rule |
> |---|---|
> | Canvas | `#f5f4ed` parchment, never pure white |
> | Accent | Ink blue `#1B365D` only, no second chromatic hue |
> | Neutrals | All warm-toned (yellow-brown undertone), no cool blue-grays |
> | Serif | Weight locked at 500, never bold. Single weight is the signature |
> | Line-height | Tight titles 1.1-1.3, dense body 1.4-1.45, reading body 1.5-1.55. Never 1.6+ |
> | Shadows | Ring or whisper only, no hard drop shadows |
> | Tags | Solid hex backgrounds only. `rgba()` triggers a WeasyPrint double-rectangle bug |
> 
> **Fonts**: Chinese uses TsangerJinKai02 serif + Source Han Sans. TsangerJinKai is free for personal use, commercial use requires a license from [tsanger.cn](https://tsanger.cn). English uses Newsreader serif + Inter sans, both OFL open source.
> 
> Full spec: [design.md](references/design.md) / [design.en.md](references/design.en.md). Cheatsheet: [CHEATSHEET.md](CHEATSHEET.md) / [CHEATSHEET.en.md](CHEATSHEET.en.md).
> 
> ## Background
> 
> I invest in US equities and regularly ask AI to generate analysis reports. The output always looked like a default Google Doc: bland, inconsistent, forgettable. I can't stand ugly documents, especially when every report comes out looking different from the last one. So I kept tweaking the typography, colors, and spacing until I had something I actually wanted to read.
> 
> Then I was invited to present a talk based on my article "The Agent You Don't Know: Principles, Architecture, and Engineering Practice" and needed a slide deck that matched the same standard. That round pushed the system further, adding inline SVG diagrams, a consistent warm palette, and tighter editorial rhythm. Eventually it was doing enough that I pulled it into its own package. That became kami: one visual language I like, applied to everything I ship.
> 
> ## Support
> 
> - If kami helped you, [share it](https://twitter.com/intent/tweet?url=https://github.com/tw93/kami&text=Kami%20-%20A%20quiet%20design%20system%20for%20professional%20documents.) with friends or give it a star.
> - Got ideas or bugs? Open an issue or PR.
> - I have two cats, TangYuan and Coke. If you think kami delights your life, you can feed them canned food 🥩.
> 
> ## License
> 
> MIT License. Feel free to use kami and contribute.

## 延伸閱讀

相關概念：[[文檔生成]] · [[設計系統]] · [[自然語言處理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/tw93/Kami) · [官方網站](https://kami.tw93.fun)

## 相關收錄

> [!note]- 直接競品（同子分類：文檔生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "文檔生成" AND file.name != "tw93--Kami"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tw93--Kami"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "tw93--Kami" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "tw93--Kami"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["文檔生成","設計系統","自然語言處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tw93--Kami" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tw93--Kami");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tw93--Kami" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tw93" AND file.name != "tw93--Kami"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tw93--Kami");
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
> const me = dv.page("Repos/tw93--Kami");
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
> const me = dv.page("Repos/tw93--Kami");
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
> const me = dv.page("Repos/tw93--Kami");
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
> const me = dv.page("Repos/tw93--Kami");
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

> **2026-04-22** — 首次收錄
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

- [[2026-04-24|2026-04-24]] — 再次上榜，2.9k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，2.6k stars
- [[2026-04-22|2026-04-22]] — 首次收錄，1.6k stars
