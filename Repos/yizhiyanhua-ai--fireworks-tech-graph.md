---
repo: yizhiyanhua-ai/fireworks-tech-graph
url: https://github.com/yizhiyanhua-ai/fireworks-tech-graph
owner: yizhiyanhua-ai
owner_type: Organization
language: Python
license: MIT
description: "Claude Code skill for generating production-quality SVG+PNG technical diagrams. Supports 8 diagram types, 5 visual styles, and deep AI/Agent domain knowledge."
homepage: ""
stars: 1580
stars_per_day: 790
forks: 119
open_issues: 1
created: 2026-04-10
pushed_at: 2026-04-12
first_seen: 2026-04-13
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "圖表生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-13
use_case: "自動生成高品質技術圖表的工具，支持多種圖表類型和視覺風格。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-16"
contributor_count: 4
engagement: "low"
issue_close_rate: 50
repo_size_kb: 3979
readme_length: 9867
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-13"
star_history: "2026-04-13:1580"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
aliases:
  - "fireworks-tech-graph"
  - "yizhiyanhua-ai/fireworks-tech-graph"
  - "自動生成高品質技術圖表的工具，支持多種圖表類型和視覺風格。"
---

# fireworks-tech-graph

**1.6k** stars · **790** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 自動生成高品質技術圖表的工具，支持多種圖表類型和視覺風格。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (790 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速生成技術圖表的開發者和產品經理，尤其是在 AI 和代理系統的領域。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了用自然語言描述系統能夠快速生成專業的技術圖表。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖表生成" && p.file.name !== "yizhiyanhua-ai--fireworks-tech-graph" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖表生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成技術圖表的效果，值得投入。

> [!abstract] 核心創新
> 這個專案的核心創新在於支持自然語言輸入來生成高品質的技術圖表。

## 專案簡介

這個專案 `fireworks-tech-graph` 透過自然語言描述生成高品質的 SVG 和 PNG 技術圖表，支援 14 種 UML 圖表類型及多種 AI/Agent 領域的圖示。用戶只需輸入如「生成 Mem0 記憶架構圖」的指令，系統會自動識別並生成相應的圖表，並以 1920px 的高解析度 PNG 輸出。這樣的設計使得用戶能夠快速獲得專業的圖表，而不需要手動繪製或使用複雜的 DSL 語法。該工具內建 7 種視覺風格，從乾淨的白色文檔到深色霓虹風格，滿足不同需求。技術上，這個專案使用 Python 和 Shell，並依賴 `librsvg` 進行 SVG 轉換，確保輸出質量。

相較於其他工具如 Mermaid 和 draw.io，`fireworks-tech-graph` 提供了自然語言輸入的優勢，並且自動處理視覺樣式和語義箭頭，省去手動調整的麻煩。這使得它在快速生成技術圖表方面更具優勢，特別適合需要快速原型或文檔的工程師。使用者可能會遇到的問題包括線框重疊的情況，這在熱門問題中已有反映。整體來看，這個專案適合需要快速生成技術圖表的開發者，尤其是在 AI 和代理系統的領域。未來幾個月，隨著功能的增強和社群的擴展，這個工具有潛力成為技術圖表生成的主流選擇。

**技術棧**：`Python` · `Shell` · `librsvg`

## 重點功能

- 7 種視覺風格 — 提供多樣的設計選擇，滿足不同需求。
- 14 種圖表類型 — 完全支持 UML 圖表及 AI/Agent 領域的專用圖示。
- 自然語言輸入 — 用戶可直接用英文或中文描述需求，系統自動生成圖表。
- 高解析度 PNG 輸出 — 自動生成 1920px 的 PNG 圖片，適合嵌入文檔。
- 語義箭頭系統 — 使用顏色和虛線模式編碼不同的意義，增強圖表的可讀性。

## 快速開始

1. 安裝技能
```bash
npx skills add yizhiyanhua-ai/fireworks-tech-graph
```
2. 生成圖表
```bash
Draw a Mem0 memory architecture diagram
```
3. 指定輸出路徑
```bash
Generate a Mem0 architecture diagram, output to ~/Desktop/
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 1580 stars（790/天），forks 119（7.5%），顯示出強勁的增長潛力。該專案的主要貢獻者擁有豐富的開源經驗，且解決了以往工具無法快速生成高品質技術圖表的痛點。之前的解決方案如 Mermaid 和 draw.io 雖然功能強大，但在使用上需要手動調整，這使得用戶在時間上受到限制。這個工具的出現正好填補了這一空白，並且其自然語言處理的能力使得使用門檻大幅降低。社群的活躍度和開發者的回應速度也顯示出這個專案的潛力。

## 適合誰使用

**目標受眾**：需要快速生成技術圖表的開發者和產品經理，尤其是在 AI 和代理系統的領域。

> [!example] 使用場景
> - 後端工程師用它來生成微服務架構圖，因為手動繪製耗時且容易出錯，這個工具能快速生成高品質圖表。
> - 產品經理用它來視覺化 AI 系統的架構，因為能夠直接用自然語言描述需求，節省了時間。
> - 技術寫手用它來創建技術文檔中的圖表，因為它提供了多種視覺風格，能夠滿足不同的文檔需求。

## 架構分析

這個專案採用一個基於 Python 的架構，利用自然語言處理將用戶的描述轉換為圖表。資料流從用戶輸入的自然語言開始，經過語言解析和圖表生成邏輯，最終輸出為 SVG 和 PNG 格式。選擇 Python 是因為其在文本處理和圖形生成方面的強大生態系統。這種設計使得用戶能夠快速生成圖表，但在處理非常複雜的圖表時，可能需要用戶進行額外的描述調整。擴展性方面，隨著功能的增加，可能會面臨性能瓶頸，特別是在高並發請求下。

## 技術深入分析

核心技術機制上，`fireworks-tech-graph` 使用自然語言處理技術將用戶的描述轉換為圖表。這涉及到語言解析和圖形生成的邏輯，並且依賴於 Python 的強大庫來處理圖形輸出。效能方面，該工具能夠快速生成圖表，但在處理非常複雜的請求時，可能會面臨延遲。設計上選擇 Python 是因為其在文本處理和圖形生成方面的優勢，但這也可能導致在高並發情況下的性能瓶頸。技術風險方面，依賴於 librsvg 進行圖形轉換，若未來該庫不再維護，將影響整體功能。整合方面，與現有的開發工具鏈的相容性良好，特別是在 CI/CD 流程中，能夠輕鬆集成。整體來看，這個專案在技術上具有很高的潛力，特別是在快速生成技術圖表的需求上。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例；安裝過程順暢，但需要額外安裝 librsvg；有簡單的使用指南，但缺乏深入的範例；目前僅提供英文和中文文件。

## 優缺點分析

> [!success] 優點
> - 快速生成高品質圖表，節省時間。
> - 支持多種視覺風格，滿足不同需求。
> - 自然語言輸入降低了使用門檻。

> [!danger] 缺點
> - 對於複雜圖表的描述可能需要多次調整。
> - 依賴於 librsvg，需額外安裝。
> - 目前僅支持 SVG 和 PNG 格式，缺乏其他格式的選擇。

> [!warning] 注意事項
> - 目前僅支持 SVG 和 PNG 格式輸出。
> - 需要安裝 librsvg 來進行圖表轉換。
> - 對於複雜的圖表，可能需要調整輸入描述以獲得最佳效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | Mermaid 支持快速生成簡單的圖表，但不支持自然語言輸入，且無法自動處理視覺樣式。 |
| [jgraph/drawio](https://github.com/jgraph/drawio) | draw.io 提供手動調整的靈活性，但需要用戶手動操作，無法自動生成圖表。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | 使用 DSL 語法生成圖表，適合快速生成簡單的圖表，但不支持自然語言輸入。 | 如果需要快速生成簡單的圖表，且不介意使用 DSL 語法。 | low，因為語法簡單且易於學習。 |
| [jgraph/drawio](https://github.com/jgraph/drawio) | 手動調整圖表，提供靈活性，但需要用戶手動操作。 | 如果需要手動調整圖表以達到最佳效果，且不急於生成。 | medium，因為需要重新學習手動操作的流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **fireworks-tech-graph** | **mermaid** | **drawio** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 DSL 語法生成圖表，適合快速生成簡單的圖表，但不支持自然語言輸入。 | 手動調整圖表，提供靈活性，但需要用戶手動操作。 |
> | 遷移成本 | - | low，因為語法簡單且易於學習。 | medium，因為需要重新學習手動操作的流程。 |
> | 適用場景 | 主要場景 | 如果需要快速生成簡單的圖表，且不介意使用 DSL 語法。 | 如果需要手動調整圖表以達到最佳效果，且不急於生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 生成的圖表可能出現線框重疊的情況
  - 解法：調整輸入描述以清晰定義圖表結構
- [MEDIUM] 需要安裝 librsvg，可能會遇到安裝問題
  - 解法：確保系統環境符合安裝要求
- [MEDIUM] 對於複雜圖表的描述可能需要多次調整
  - 解法：簡化描述，逐步增加複雜度

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能快速生成技術圖表，節省開發時間。 |
| 大型企業的技術文檔編寫 | 適合 | 提供多種視覺風格，滿足不同需求。 |
| 需要快速原型的產品開發團隊 | 非常適合 | 自然語言輸入降低了使用門檻，快速生成圖表。 |
| 對圖表精度要求極高的科研團隊 | 不適合 | 可能需要手動調整以達到最佳效果。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成技術圖表的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴的 librsvg 也屬於廣泛使用的開源庫，安全性較高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 CI/CD 工具搭配使用，特別是在技術文檔生成的環節。舉例來說，在一個用 GitHub Actions 的專案中，你可以用這個工具來生成架構圖，具體做法是將生成的圖表嵌入到文檔中。與主流 IDE 如 VS Code 的整合良好，能夠快速生成圖表並嵌入到 Markdown 文件中。整合的摩擦點主要在於 librsvg 的安裝，對於不同平台的安裝方式可能會有所不同。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
| Forks | 119 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-04-12 |
| 建立日期 | 2026-04-10 |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yizhiyanhua-ai/fireworks-tech-graph) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 79
>     "Shell" : 21
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ccc7574](https://github.com/ccc7574) | 7 |
> | [@Luo-hongyi](https://github.com/Luo-hongyi) | 1 |
> | [@ninehills](https://github.com/ninehills) | 1 |
> | [@SamsurTee](https://github.com/SamsurTee) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和回應。
**連結**：[文件](https://github.com/yizhiyanhua-ai/fireworks-tech-graph/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12 ~ 2026-04-12）
> **活躍天數** 1 天 · **最新 commit** Document skill update command

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/yizhiyanhua-ai/fireworks-tech-graph/issues/5) | codex上使用经常出现线框重叠 | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> [English](README.md) | [中文](README.zh.md)
> 
> 
> ## Installation
> 
> ```bash
> npx skills add yizhiyanhua-ai/fireworks-tech-graph
> ```
> 
> This skill is installed from the GitHub repository. The npm package page is the public package/distribution page:
> 
> ```text
> https://www.npmjs.com/package/@yizhiyanhua-ai/fireworks-tech-graph
> ```
> 
> Do not use the npm package name with `skills add`, because the CLI resolves install sources as GitHub/local paths.
> 
> 
> ## Usage
> 
> 
> ### Basic usage
> 
> ```
> Draw a RAG pipeline flowchart
> ```
> 
> ```
> Generate an Agentic Search architecture diagram
> ```
> 
> 
> ## Example Prompts by Scenario
> 
> 
> ## Overview
> 
> `fireworks-tech-graph` turns natural language descriptions into polished SVG diagrams, then exports them as high-resolution PNG via `rsvg-convert`. It ships with **7 visual styles** and deep knowledge of AI/Agent domain patterns (RAG, Agentic Search, Mem0, Multi-Agent, Tool Call flows), plus full support for all 14 UML diagram types.
> 
> ```
> User: "Generate a Mem0 memory architecture diagram, dark style"
>   → Skill classifies: Memory Architecture Diagram, Style 2
>   → Generates SVG with swim lanes, cylinders, semantic arrows
>   → Exports 1920px PNG
>   → Reports: mem0-architecture.svg / mem0-architecture.png
> ```
> 
> ---
> 
> 
> ## Features
> 
> - **7 visual styles** — from clean white docs to dark neon to frosted glass to official brand styles
> - **Executable style system** — style guides are encoded into the generator, not only documented in markdown
> - **14 diagram types** — Full UML support (Class, Component, Deployment, Package, Composite Structure, Object, Use Case, Activity, State Machine, Sequence, Communication, Timing, Interaction Overview, ER Diagram) plus AI/Agent domain diagrams
> - **AI/Agent domain patterns** — RAG, Agentic Search, Mem0, Multi-Agent, Tool Call, and more built-in
> - **Semantic shape vocabulary** — LLM = double-border rect, Agent = hexagon, Vector Store = ringed cylinder
> - **Semantic arrow system** — color + dash pattern encode meaning (write vs read vs async vs loop)
> - **Product icons** — 40+ products with brand colors: OpenAI, Anthropic, Pinecone, Weaviate, Kafka, PostgreSQL…
> - **Swim lane grouping** — automatic layer labeling for complex architectures
> - **SVG + PNG output** — SVG for editing, 1920px PNG for embedding
> - **rsvg-convert compatible** — no external font fetching, pure inline SVG
> 
> ---
> 
> 
> ### API & Sequence Flows
> 
> ```
> Draw an OAuth2 authorization code flow sequence diagram: User → Client → Auth Server → Resource Server
> ```
> → Sequence diagram with vertical lifelines and activation boxes
> 
> ```
> Draw the ChatGPT Plugin call sequence diagram
> ```
> → Sequence: User → ChatGPT → Plugin Manifest → API → Response chain
> 
> 
> ## Why Not Mermaid or draw.io?
> 
> | | Mermaid | draw.io | **fireworks-tech-graph** |
> |--|---------|---------|--------------------------|
> | Natural language input | ✗ | ✗ | ✅ |
> | AI/Agent domain patterns | ✗ | ✗ | ✅ |
> | Multiple visual styles | ✗ | manual | ✅ 5 built-in |
> | High-res PNG export | ✗ | manual | ✅ auto 1920px |
> | Semantic arrow colors | ✗ | manual | ✅ auto |
> | No online tool needed | ✅ | ✗ | ✅ |
> 
> Mermaid is great for quick inline diagrams in markdown. draw.io is great for manual polishing. `fireworks-tech-graph` is optimized for **describing a system and getting a polished diagram immediately**, without writing DSL syntax or clicking around a GUI.
> 
> ---
> 
> 
> # fireworks-tech-graph
> 
> > **Stop drawing diagrams by hand.** Describe your system in English or Chinese — get publication-ready SVG + PNG technical diagrams in seconds.
> 
> [](LICENSE)
> [](https://claude.ai/code)
> []()
> []()
> []()
> 
> ---
> 
> 
> ## Showcase
> 
> > All samples exported at 1920px width (2× retina) via `rsvg-convert`. PNG is lossless and the right choice for technical diagrams — sharp edges, no JPEG compression artifacts on text/lines.
> 
> 
> ### Style 1 — Flat Icon (default)
> *Mem0 Memory Architecture — white background, semantic arrows, layered memory system*
> 
> 
> ### Style 2 — Dark Terminal
> *Tool Call Flow — dark background, neon accents, monospace font*
> 
> 
> ### Style 3 — Blueprint
> *Microservices Architecture — deep blue background, grid lines, cyan strokes*
> 
> 
> ### Style 4 — Notion Clean
> *Agent Memory Types — minimal white, single accent color*
> 
> 
> ### Style 5 — Glassmorphism
> *Multi-Agent Collaboration — dark gradient background, frosted glass cards*
> 
> 
> ### Style 6 — Claude Official
> *System Architecture — warm cream background (#f8f6f3), Anthropic brand colors, clean professional aesthetic*
> 
> 
> ### Style 7 — OpenAI Official
> *API Integration Flow — pure white background, OpenAI brand palette, modern minimalist design*
> 
> ---
> 
> 
> ## Stable Prompt Recipes
> 
> Use prompts like these when you want the model to stay close to the repo's strongest regression-tested outputs:
> 
> 
> ### Style 1 — Flat Icon
> ```text
> Draw a Mem0 memory architecture diagram in style 1 (Flat Icon).
> Use four horizontal sections: Input Layer, Memory Manager, Storage Layer, Output / Retrieval.
> Include User, AI App / Agent, LLM, mem0 Client, Memory Manager, Vector Store, Graph DB, Key-Value Store, History Store, Context Builder, Ranked Results, Personalized Response.
> Use semantic arrows for read, write, control, and data flow. Keep the layout clean and product-doc friendly.
> ```
> 
> 
> ### Style 2 — Dark Terminal
> ```text
> Draw a tool call flow diagram in style 2 (Dark Terminal).
> Show User query, Retrieve chunks, Generate answer, Knowledge base, Agent, Terminal, Source documents, and Grounded answer.
> Use terminal chrome, neon accents, monospace typography, and semantic arrows for retrieval, synthesis, and embedding update.
> ```
> 
> 
> ### Style 3 — Blueprint
> ```text
> Draw a microservices architecture diagram in style 3 (Blueprint).
> Create numbered engineering sections like 01 // EDGE, 02 // APPLICATION SERVICES, 03 // DATA + EVENT INFRA, 04 // OBSERVABILITY.
> Include Client Apps, API Gateway, Auth / Policy, three services, Event Router, Postgres, Redis Cache, Warehouse, and Metrics / Traces.
> Use blueprint grid, cyan strokes, and a bottom-right title block.
> ```
> 
> 
> ### Style 4 — Notion Clean
> ```text
> Draw an agent memory types diagram in style 4 (Notion Clean).
> Compare Sensory Memory, Working Memory, Episodic Memory, Semantic Memory, and Procedural Memory around a central Agent core.
> Use a minimal white layout, neutral borders, one accent color for arrows, and short storage tags for each memory type.
> ```
> 
> 
> ### Style 5 — Glassmorphism
> ```text
> Draw a multi-agent collaboration diagram in style 5 (Glassmorphism).
> Use three sections: Mission Control, Specialist Agents, and Synthesis.
> Include User brief, Coordinator Agent, Research Agent, Coding Agent, Review Agent, Shared Memory, Synthesis Engine, and Final response.
> Use frosted cards, soft glow, and semantic arrows for delegation, shared memory writes, and synthesis output.
> ```
> 
> 
> ### Style 6 — Claude Official
> ```text
> Draw a system architecture diagram in style 6 (Claude Official).
> Use left-side layer labels: Interface Layer, Core Layer, Foundation Layer.
> Include Client Surface, Gateway, Task Planner, Model Runtime, Policy Guardrails, Memory Store, Tool Runtime, Observability, and Registry.
> Use warm cream background, restrained brand-like palette, generous whitespace, and a bottom-right legend.
> ```
> 
> 
> ### Style 7 — OpenAI Official
> ```text
> Draw an API integration flow diagram in style 7 (OpenAI Official).
> Use three sections: Entry, Model + Tools, and Delivery.
> Include Application, OpenAI SDK Layer, Prompt Builder, Model Runtime, Tool Calls, Response Formatter, Observability, and Release Control.
> Keep the look minimal, white, precise, and modern with clean green-accented arrows.
> ```
> 
> ---
> 
> 
> ## Update
> 
> ```bash
> npx skills add yizhiyanhua-ai/fireworks-tech-graph --force -g -y
> ```
> 
> Re-run `add --force` to pull the latest version of this skill.
> 
> Or clone directly:
> 
> ```bash
> git clone https://github.com/yizhiyanhua-ai/fireworks-tech-graph.git ~/.claude/skills/fireworks-tech-graph
> ```
> 
> ---
> 
> 
> ## Requirements
> 
> ```bash
> 
> # macOS
> brew install librsvg
> 
> 
> # Ubuntu/Debian
> sudo apt install librsvg2-bin
> 
> 
> # Verify
> rsvg-convert --version

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cnlimiter--codex-manager|cnlimiter/codex-manager]]

[GitHub](https://github.com/yizhiyanhua-ai/fireworks-tech-graph)

## 相關收錄

> [!note]- 直接競品（同子分類：圖表生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖表生成" AND file.name != "yizhiyanhua-ai--fireworks-tech-graph"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "yizhiyanhua-ai--fireworks-tech-graph"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "yizhiyanhua-ai--fireworks-tech-graph" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "yizhiyanhua-ai--fireworks-tech-graph"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "yizhiyanhua-ai--fireworks-tech-graph" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yizhiyanhua-ai--fireworks-tech-graph" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yizhiyanhua-ai" AND file.name != "yizhiyanhua-ai--fireworks-tech-graph"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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
> const me = dv.page("Repos/yizhiyanhua-ai--fireworks-tech-graph");
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

> **2026-04-13** — 首次收錄
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

- [[2026-04-13|2026-04-13]] — 首次收錄，1.6k stars
