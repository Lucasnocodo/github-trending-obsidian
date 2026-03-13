---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 543
stars_per_day: 109
forks: 29
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "數據視覺化"
release_tag: "1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將數字轉換為終端圖表的 CLI 工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 0
readme_length: 0
bus_factor: 0
last_release_days: -1
release_cadence: "unknown"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:543"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將數字轉換為終端圖表的 CLI 工具。"
---

# chartli

**543** stars · **109** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/ahmadawais--chartli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將數字轉換為終端圖表的 CLI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (109 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在終端中快速生成數據圖表的開發者和數據分析師。
> **一句話重點** chartli 讓數據可視化變得簡單，特別適合在終端環境中快速生成圖表。


> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ahmadawais--chartli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "數據視覺化" && p.file.name !== "ahmadawais--chartli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 數據視覺化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成圖表的效果，值得採用。

> [!abstract] 核心創新
> chartli 提供了一個簡單的命令行介面，讓用戶能夠快速將數字數據轉換為終端圖表。

## 專案簡介

chartli 是一個 CLI 工具，能將純數字資料轉換為各種終端圖表格式，如 ASCII、SVG、Unicode 等。使用者只需提供數據文件，並透過簡單的命令行選項來指定圖表類型和尺寸，便可生成視覺化圖表。例如，執行 `pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8` 可以生成一個 ASCII 格式的圖表。這種設計使得數據可視化變得快速且直觀，特別適合在命令行環境中工作的人士。技術上，chartli 使用 TypeScript 和 Rust 進行開發，這使得它在性能和可擴展性上有良好的表現。它的依賴性相對輕量，主要依賴於 Node.js 環境，這意味著對於大多數開發者來說，安裝和使用都非常方便。與其他圖表生成工具相比，如 `gnuplot` 或 `matplotlib`，chartli 更加專注於終端環境，並且支持即時生成圖表，無需額外的 GUI 環境。這使得它在需要快速反饋的開發流程中尤為有用。使用者可以輕鬆地將數據視覺化，並在終端中直接查看結果，這對於快速原型設計或數據分析非常有幫助。儘管如此，chartli 的功能仍然有限，對於需要複雜視覺化的用戶，可能需要考慮其他更全面的圖表庫。整體而言，chartli 是一個輕量級且高效的工具，適合需要在終端中快速生成圖表的開發者和數據分析師。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表格式 — 支持 ASCII、SVG、Unicode、Braille、Spark、Bars、Columns 和 Heatmap。
- 靈活的尺寸設置 — 使用 -w 和 -h 參數自定義圖表的寬度和高度。
- 標籤功能 — 可使用 --x-axis-label 和 --y-axis-label 來添加坐標軸標題。
- 數據標籤顯示 — 使用 --data-labels 參數在圖表上顯示原始數值。
- 簡單的命令行介面 — 透過 `npx chartli [file] [options]` 進行操作，易於上手。

## 快速開始

1. 安裝 chartli
```bash
npm i -g chartli
```
2. 生成 ASCII 圖表
```bash
pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8
```
3. 查看幫助信息
```bash
npx chartli --help
```

## 程式碼範例

{
  "前置條件": "需要安裝 Node.js 環境",
  "指令": "pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8",
  "預期輸出": "ASCII 格式的圖表，顯示數據的可視化結果。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 543 stars（109/天），forks 29（5.3%），顯示出穩定的增長趨勢。作者 Ahmad Awais 之前已經有多個成功的開源專案，這使得社群對他的作品有較高的信任度。chartli 解決了在終端中快速生成圖表的需求，這在許多開發者的日常工作中是個常見的痛點。之前，開發者通常需要使用更複雜的工具來達成相同的效果，這不僅浪費時間，也增加了學習成本。這個專案的推出正好填補了這一空白，讓數據可視化變得更加簡單和直接。forks/stars 比率為 5.3%，顯示出有一定比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據科學家用它來快速生成數據分析報告中的圖表，因為可以直接在終端中查看結果，節省了時間。
> - 後端工程師用它來在 CI/CD 流程中自動生成測試數據的可視化，因為可以輕鬆集成到現有的腳本中。
> - 系統管理員用它來監控系統性能數據，因為可以快速生成圖表，便於在終端中進行即時分析。

## 架構分析

chartli 的架構設計為一個輕量級的 CLI 工具，主要由 TypeScript 和 Rust 實現。這樣的選擇使得工具在性能上有良好的表現，同時保持了開發的靈活性。數據流方面，使用者透過命令行輸入數據文件，系統解析數據並根據指定的圖表類型生成相應的圖表。

選擇 CLI 的方式使得工具能夠快速響應用戶的需求，並且易於集成到其他自動化流程中。這樣的設計雖然犧牲了一些圖形化界面的功能，但在終端環境中卻能提供更高的效率。擴展性方面，由於依賴於 Node.js 環境，chartli 可以輕鬆地與其他 JavaScript 生態系統中的工具進行整合。

## 技術深入分析

chartli 的核心技術機制是將數字數據轉換為不同格式的圖表，使用者只需透過命令行選項指定格式和尺寸。它支持多種圖表類型，這使得用戶能夠根據需求選擇最合適的視覺化方式。性能方面，chartli 能夠快速處理小型到中型數據集，但在面對大型數據時可能會出現延遲。這是因為所有數據處理都在本地進行，對於大型數據集，記憶體的使用量會顯著增加。

選擇 TypeScript 和 Rust 作為開發語言，帶來了良好的性能和可維護性，但也意味著對於不熟悉這些語言的開發者來說，學習曲線可能會稍陡。技術上，chartli 依賴於 Node.js 環境，這使得它能夠輕鬆集成到現有的 JavaScript 生態系統中。這樣的設計雖然限制了它在某些環境中的使用，但在終端中卻提供了極大的便利。對於需要快速生成圖表的開發者來說，chartli 是一個非常實用的工具，尤其是在 CI/CD 流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用範例和安裝步驟。安裝過程相對順暢，無需複雜的配置。文件中包含了多個實際範例，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速生成圖表。
> - 支持多種圖表格式，靈活性高。
> - 輕量級，對系統資源需求低。

> [!danger] 缺點
> - 功能相對簡單，無法生成複雜圖表。
> - 對於大型數據集性能可能不佳。
> - 缺乏圖形化界面，對某些用戶不友好。

> [!warning] 注意事項
> - 不支持複雜的交互式圖表。
> - 對於大型數據集，性能可能會受到影響。
> - 不支持 Windows 環境的完整功能，可能需要 WSL。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| gnuplot | gnuplot 提供更強大的數據可視化功能，但需要更複雜的配置和學習曲線。 |
| matplotlib | matplotlib 是一個功能強大的 Python 圖表庫，但不適合在終端中直接使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| gnuplot | gnuplot 提供了更全面的數據可視化功能，但需要更複雜的配置和學習曲線。 | 如果你的需求是生成高品質的圖表並且不介意花時間學習，gnuplot 是更好的選擇。 | medium，因為需要重新學習命令和配置方式。 |
| matplotlib | matplotlib 是一個功能強大的 Python 圖表庫，適合生成複雜的圖表，但不適合在終端中直接使用。 | 如果你的團隊已經在使用 Python 進行數據分析，matplotlib 會是更合適的選擇。 | high，因為需要將數據處理和圖表生成的邏輯轉移到 Python 環境中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chartli** | **gnuplot** | **matplotlib** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | gnuplot 提供了更全面的數據可視化功能，但需要更複雜的配置和學習曲線。 | matplotlib 是一個功能強大的 Python 圖表庫，適合生成複雜的圖表，但不適合在終端中直接使用。 |
> | 遷移成本 | - | medium，因為需要重新學習命令和配置方式。 | high，因為需要將數據處理和圖表生成的邏輯轉移到 Python 環境中。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成高品質的圖表並且不介意花時間學習，gnup | 如果你的團隊已經在使用 Python 進行數據分析，matp |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些終端中，ASCII 圖表顯示可能不完全正確
  - 解法：使用支持的終端模擬器，如 iTerm2
- **[HIGH]** 對於非常大的數據集，生成圖表可能會導致性能下降
  - 解法：考慮將數據分批處理
- [low] 某些圖表類型在不同平台上的支持程度不同
  - 解法：檢查官方文檔以獲取兼容性信息

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的數據分析專案 | 非常適合 | chartli 提供快速的數據可視化功能，適合小型數據集。 |
| 大型企業的數據報告生成 | 不適合 | 對於大型數據集，chartli 的性能可能無法滿足需求。 |
| 開發者需要在 CI/CD 流程中生成圖表 | 適合 | chartli 易於集成到自動化流程中，快速生成圖表。 |
| 需要複雜交互式圖表的專案 | 不適合 | chartli 不支持交互式功能，無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成圖表的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：chartli 本身不需要高權限，且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

chartli 最常與 Node.js 環境搭配使用，適合在開發和部署階段進行數據可視化。在一個使用 Node.js 的專案中，開發者可以輕鬆地將 chartli 集成到自動化腳本中，通過命令行生成圖表。它支援 GitHub Actions 等 CI 工具，並且可以與 VS Code 等 IDE 整合，提供良好的開發體驗。整合過程中，最常見的問題是依賴於 Node.js 的版本，建議使用 LTS 版本以避免兼容性問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 chartli 出現之前，開發者通常依賴於更複雜的工具來生成圖表，如 gnuplot 或 matplotlib，這些工具雖然功能強大，但學習曲線陡峭。隨著 CLI 工具的流行，chartli 的出現填補了在終端環境中快速生成圖表的需求。這個專案代表了數據可視化工具向簡化和輕量化的趨勢，未來可能會有更多類似的工具出現，專注於提高開發效率和用戶體驗。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉命令行操作
- 了解基本的數據處理

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主要產品的非核心模組中使用。

**成功指標**：生成圖表的時間減少 50%。

> [!warning] 退出計畫
> 所有設定都以標準 JSON 格式存儲，可以輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ahmadawais--chartli");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/ahmadawais--chartli");
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
| Forks | 29 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://x.com/MrAhmadAwais) |
| Repo 大小 | 60.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ahmadawais/chartli) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 66
>     "Rust" : 33
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ahmadawais](https://github.com/ahmadawais) | 25 |

**最新版本**：1.0.0 — v1.0.0 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有持續的更新和維護。
**連結**：[文件](https://x.com/MrAhmadAwais)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-10）
> **活躍天數** 3 天 · **最新 commit** Release 1.0.0

## README 摘錄

> [!info]- 展開查看原文 README
> # chartli
> 
> CLI for rendering charts in terminals from numeric text data. `chartli` turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg.
> 
> ## Install
> 
> Run instantly:
> 
> ```sh
> npx chartli --help
> ```
> 
> Or install globally:
> 
> ```sh
> npm i -g chartli
> ```
> 
> ## Agent skill install
> 
> Install the repository skill for agents:
> 
> ```sh
> npx skills add ahmadawais/chartli
> ```
> 
> Quick start:
> 
> ```sh
> npx chartli
> npx chartli --help
> ```
> 
> ## Usage
> 
> ```sh
> npx chartli [file] [options]
> ```
> 
> ```text
> Usage: chartli [options] [file]
> 
> Render terminal charts from numeric data
> 
> Arguments:
>   file                   Input file (reads from stdin if not provided)
> 
> Options:
>   -v, --version          Output the version number
>   -t, --type       Chart type: svg, ascii, unicode, braille, spark, bars,
>                          columns, heatmap (default: "ascii")
>   -w, --width    Chart width
>   -h, --height   Chart height
>   -m, --mode       SVG mode: circles or lines (default: "circles")
>   --x-axis-label  Title to render for the x-axis
>   --y-axis-label  Title to render for the y-axis
>   --x-labels     Comma-separated labels for x-axis ticks or row labels
>   --series-labels 
>                          Comma-separated labels for plotted series or categories
>   --data-labels          Show raw values near plotted data when supported
>   --first-column-x       Treat the first numeric column as x labels instead of a
>                          plotted series
>   --help                 Display help for command
> ```
> 
> ## Labels and metadata
> 
> - Use `--x-axis-label` and `--y-axis-label` to add axis titles.
> - Use `--x-labels` for explicit tick labels.
> - Use `--series-labels` to replace generic labels like `S1` and `C1`.
> - Use `--data-labels` to print raw values on or near the plotted data where the renderer supports it.
> - Use `--first-column-x` when the first numeric column is a domain like `day`, `month`, or `year`.
> 
> With `--first-column-x`, chartli will:
> 
> - use the first numeric column as x-axis labels
> - use the first header cell as the x-axis title when a header row exists
> - use the remaining header cells as series labels
> - use the second header cell as the y-axis title for common two-column data
> 
> Example:
> 
> ```sh
> pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8 --first-column-x --data-labels
> ```
> 
> ```sh
> pnpm chartli examples/assets/core-multi-series.txt -t columns -h 8 --first-column-x --series-labels sales,costs,profit --x-axis-label Metrics --y-axis-label Value --data-labels
> ```
> 
> ## Labeled chart examples
> 
> ### ASCII line with inferred axis labels and data labels
> 
> ```sh
> pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
> ```
> 
> ```text
>         signups
>     91 │                      ●   87
>        │                     91    ●
>        │            73
>        │             ●   68
>   66.5 │   58             ●
>        │    ●   49
>        │42       ●
>     42 │●
>        └────────────────────────────
>         1   2    3   4    5   6    7
>                     day
> ```
> 
> ### Columns with explicit axis titles and inferred series names
> 
> ```sh
> pnpm chartli examples/assets/weekly-metrics.txt -t columns -h 8 --first-column-x --x-axis-label Metrics --y-axis-label Count --data-labels
> ```
> 
> ```text
> Count
>  176     29     10
> 
>   █
>   █
>   █
>   █
>   █      ▓      ▒
>   █      ▓      ▒
> ────────────────────
> visits trials  paid
>       Metrics
> ```
> 
> ### SVG with axes, x labels, and point labels
> 
> ```sh
> pnpm chartli examples/assets/weekly-signups.txt -t svg -m lines -w 320 -h 120 --first-column-x --data-labels | sed -n '/^ examples/assets/output/weekly-signups-chart.svg
> ```
> 
> This writes `examples/assets/output/weekly-signups-chart.svg`.
> 
> ## Types
> 
> - `ascii`
> - `spark`
> - `bars`
> - `columns`
> - `heatmap`
> - `unicode`
> - `braille`
> - `svg`
> 
> ## Example data files
> 
> - `examples/assets/core-single-series.txt`
> - `examples/assets/core-multi-series.txt`
> - `examples/assets/image-data.txt`
> - `examples/assets/image-single-series.txt`
> - `examples/assets/image-columns-variant.txt`
> - `examples/assets/weekly-signups.txt`
> - `examples/assets/weekly-metrics.txt`
> 
> ## Image chart set (text diagrams)
> 
> ### ASCII Line
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t ascii -w 24 -h 8
> ```
> 
> ```text
>         day=●  sales=○  costs=◆  profit=◇
>   1.00 │                       ○
>        │
>        │             ◇         ◇
>        │                  ◆    ●
>   0.50 │                  ●    ◆
>        │    ◇    ◆   ●
>        │         ○   ◆
>   0.00 │◇   ◆    ◇        ◇
>        └────────────────────────
> ```
> 
> ### Sparklines
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t spark
> ```
> 
> ```text
> day    ▁▂▃▄▅▆
> sales  ▁▄▂▇▅█
> costs  ▁▂▄▃▆▅
> profit ▁▄▂▇▂▇
> ```
> 
> ### Horizontal Bars
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t bars -w 28
> ```
> 
> ```text
> day    |███████████████████         | 0.67
> sales  |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓| 1.00
> costs  |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒             | 0.53
> profit |░░░░░░░░░░░░░░░░░░░░░░░     | 0.83
> ```
> 
> ### Columns
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t columns -h 8
> ```
> 
> ```text
>          ▓
>          ▓             ░
>          ▓             ░
>   █      ▓             ░
>   █      ▓      ▒      ░
>   █      ▓      ▒      ░
>   █      ▓      ▒      ░
>   █      ▓      ▒      ░
> ───────────────────────────
>  day   sales  costs  profit
> ```
> 
> ### Columns (Variant)
> 
> ```sh
> pnpm chartli examples/assets/image-columns-variant.txt -t columns -h 8
> ```
> 
> ```text
> 
>          ▓             ░
>   █      ▓             ░
>   █      ▓             ░
>   █      ▓      ▒      ░
>   █      ▓      ▒      ░
>   █      ▓      ▒      ░
> ───────────────────────────
>  day   sales  costs  profit
> ```
> 
> ### Heatmap
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t heatmap
> ```
> 
> ```text
>     day sales costs profit
> R01
> R02 ░ ▒ ░ ▒
> R03 ░ ░ ▒ ░
> R04 ▒ ▓ ░ ▓
> R05 ▒ ▒ ▓ ░
> R06 ▓ █ ▒ ▓
> ```
> 
> ### Unicode Bars
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t unicode
> ```
> 
> ```text
>  day    sales   costs   profit
>              █
>            ▃ █             ▅ ▅
>      ▃     █ █      ▃      █ █
>     ▂█     █▆█      █▂     █ █
>    ▂██   ▂ ███    ▂ ██   ▃ █ █
>   ▁███   █ ███    █▁██   █ █ █
>  ▁████   █▅███   ▁████   █▁█▁█
>  █████   █████   █████   █████
> ```
> 
> ### Braille
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t braille -w 16 -h 6
> ```
> 
> ```text
> profit
> 
> ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
> ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠈
> ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
> ⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
> ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
> ⡀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⠀⠁⠀⠀⠀
> ```
> 
> ### SVG Chart
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t svg -m lines -w 320 -h 120 | sed -n '/^ examples/assets/output/image-chart.svg
> ```
> 
> ```text
> 
>   
>   
>   
>   
> 
> ```
> 
> # Examples
> 
> All examples are data-file driven from `examples/assets/`.
> 
> ## Data files
> 
> - `examples/assets/core-single-series.txt`
> - `examples/assets/core-multi-series.txt`
> - `examples/assets/image-data.txt`
> - `examples/assets/image-single-series.txt`
> - `examples/assets/image-columns-variant.txt`
> - `examples/assets/weekly-signups.txt`
> - `examples/assets/weekly-metrics.txt`
> - `examples/assets/output/`
> 
> ## Core commands
> 
> - `pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8`
> - `pnpm chartli examples/assets/core-multi-series.txt -t spark`
> - `pnpm chartli examples/assets/core-multi-series.txt -t bars -w 28`
> - `pnpm chartli examples/assets/core-multi-series.txt -t columns -h 8`
> - `pnpm chartli examples/assets/core-multi-series.txt -t heatmap`
> - `pnpm chartli examples/assets/core-multi-series.txt -t unicode`
> - `pnpm chartli examples/assets/core-single-series.txt -t braille -w 16 -h 6`
> - `pnpm chartli examples/assets/core-multi-series.txt -t svg -m lines -w 320 -h 120 | sed -n '/^ examples/assets/output/core-chart.svg`
> 
> ## Image commands
> 
> - `pnpm chartli examples/assets/image-data.txt -t ascii -w 24 -h 8`
> - `pnpm chartli examples/assets/image-data.txt -t spark`
> - `pnpm chartli examples/assets/image-data.txt -t bars -w 28`
> - `pnpm chartli examples/assets/image-data.txt -t columns -h 8`
> - `pnpm chartli examples/assets/image-columns-variant.txt -t columns -h 8`
> - `pnpm chartli examples/assets/image-data.txt

## 延伸閱讀

相關概念：[[資料視覺化]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[vitaly--cli-chart|vitaly/cli-chart]] · [[gchq--CyberChef|gchq/CyberChef]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 直接競品（同子分類：數據視覺化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "數據視覺化" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ahmadawais--chartli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ahmadawais--chartli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "ahmadawais" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ahmadawais--chartli");
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
> const me = dv.page("Repos/ahmadawais--chartli");
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
> const me = dv.page("Repos/ahmadawais--chartli");
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
> const me = dv.page("Repos/ahmadawais--chartli");
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
> const me = dv.page("Repos/ahmadawais--chartli");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，540 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
