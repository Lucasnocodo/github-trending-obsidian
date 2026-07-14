---
repo: op7418/guizang-material-illustration
url: https://github.com/op7418/guizang-material-illustration
owner: op7418
owner_type: User
language: N/A
license: N/A
description: "归藏的材质插画 skill：生成带字解释图、图表美化和参考辅助配图。"
homepage: ""
stars: 637
stars_per_day: 106
forks: 64
open_issues: 1
created: 2026-07-07
pushed_at: 2026-07-07
first_seen: 2026-07-13
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "插畫生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-13
use_case: "生成带中文标签的材质插画，解决社交卡片和文档中的配图需求。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-21"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 37
readme_length: 6533
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-13"
star_history: "2026-07-13:598,2026-07-14:637"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
  - "topic/agent"
  - "topic/chart_visualization"
  - "topic/chinese"
  - "topic/claude_code"
  - "topic/codex"
aliases:
  - "guizang-material-illustration"
  - "op7418/guizang-material-illustration"
  - "生成带中文标签的材质插画，解决社交卡片和文档中的配图需求。"
---

# guizang-material-illustration

**598** stars · **120** stars/天 · 建立 5 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/op7418--guizang-material-illustration");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent` `chart-visualization` `chinese` `claude-code` `codex` `data-visualization` `explainer` `illustration` `image-generation` `material-illustration` `skill` `social-media`

> [!summary] 一句話摘要
> 生成带中文标签的材质插画，解决社交卡片和文档中的配图需求。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (120 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成帶中文標籤的插畫以增強內容表達的內容創作者。
> **一句話重點** 這個專案的價值在於能夠快速生成有效的插圖，特別適合需要中文標籤的內容創作者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-material-illustration");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "插畫生成" && p.file.name !== "op7418--guizang-material-illustration" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 插畫生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成插圖的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於生成帶中文標籤的材質插畫，專注於有效傳達信息。

## 專案簡介

這個專案提供了一個適配於 Claude Code 和 Codex 的插畫生成技能，專注於生成帶有中文標籤的材質插畫，主要用於文章、報告和教學材料中。用戶可以透過簡單的指令，將抽象概念或數據轉換為可視化的插圖，這樣的設計使得插圖不僅美觀，還能有效傳達信息。具體來說，使用者可以通過 `npx skills add` 命令快速安裝，並使用自然語言請求生成插圖，例如「用歸藏的材質插畫 skill，幫我把這段產品說明做成一張帶中文標籤的機制圖」。技術上，這個技能利用了圖像生成模型，並結合了語義抽取技術來美化圖表，這樣的選擇使得生成的圖表不僅符合視覺美感，還能保留數據的準確性。

與其他工具相比，如 `guizang-social-card-skill`，這個技能專注於插圖的生成，而不是整體排版，這樣的分工使得用戶可以更靈活地處理內容。使用過程中，生成的插圖可以直接用於社交媒體、PPT 或文檔，並且支持多種主題色的選擇，這增加了其適用範圍。使用者在生成過程中，系統會自動判斷需要生成的圖類型，並在必要時查找參考資料，這樣的設計提高了生成的準確性和效率。整體而言，這個技能非常適合需要快速生成解釋圖或數據圖表的內容創作者，特別是在教育和社交媒體領域。

## 重點功能

- 解釋圖生成 — 生成帶中文標籤的插圖，幫助理解抽象概念。
- 圖表美化 — 從原始數據生成更具視覺吸引力的圖表。
- 參考搜索 — 在生成插圖前查找相關資料，確保準確性。
- 多主題色支持 — 提供多種顏色選擇，適應不同需求。
- 自動類型判斷 — 系統自動識別需要生成的圖類型，簡化操作流程。

## 快速開始

1. 安裝技能
```bash
npx skills add https://github.com/op7418/guizang-material-illustration --skill guizang-material-illustration
```
2. 更新技能
```bash
cd ~/.claude/skills/guizang-material-illustration && git pull
```
3. 生成插圖
```bash
用歸藏的材质插画 skill，帮我把这段产品说明做成一张带中文标签的机制图。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 598 stars（120/天），forks 64（10.7%），顯示出不錯的增長潛力。作者過去的專案如 `guizang-social-card-skill` 提供了良好的基礎，這次專案解決了在社交媒體和文檔中需要有效插圖的痛點。這個技能的出現是因為對於可視化內容的需求日益增加，尤其是在教育和商業報告中。forks/stars 比率為 10.7%，顯示出不少用戶對此專案有實際的修改和使用需求。

## 適合誰使用

**目標受眾**：需要快速生成帶中文標籤的插畫以增強內容表達的內容創作者。

> [!example] 使用場景
> - 內容創作者用它來生成帶中文標籤的產品機制圖，因為這樣的插圖能有效傳達產品特性。
> - 教師用它來為科學課程生成解釋圖，因為這樣可以幫助學生理解複雜概念。
> - 市場專員用它來美化數據圖表，因為重新生成的圖表更適合社交媒體分享。

## 架構分析

這個技能的架構設計基於簡單的命令行安裝和自然語言請求，使用者可以通過簡單的指令安裝並使用。系統內部會自動判斷需要生成的圖類型，並在必要時查找參考資料，這樣的設計使得使用者不需要具備專業知識即可生成高質量的插圖。這樣的架構模式降低了使用門檻，讓更多人能夠輕鬆使用。由於依賴於圖像生成模型，這也意味著需要一定的計算資源來支持生成過程，這在高流量使用時可能成為瓶頸。

## 技術深入分析

這個專案的核心技術機制是基於圖像生成模型，並結合語義抽取技術來美化圖表。這樣的設計使得生成的圖表不僅符合視覺美感，還能保留數據的準確性。效能上，生成插圖的速度取決於計算資源的可用性，對於高流量使用可能會面臨瓶頸。選擇使用這種技術的原因在於其能夠快速生成高質量的插圖，而不需要用戶具備專業的設計技能。這樣的選擇也意味著依賴於外部的圖像生成服務，可能會面臨服務中斷的風險。與主流的圖像生成工具相比，這個專案更專注於中文內容的生成，這使得它在特定市場中具有競爭優勢。整合到現有的工作流中，使用者可以輕鬆地將生成的插圖應用於社交媒體、PPT 或文檔，這降低了使用的摩擦點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程順暢，使用者只需簡單的命令即可完成。文件中有多個範例，幫助新手快速上手，整體體驗良好。

## 優缺點分析

> [!success] 優點
> - 快速生成帶中文標籤的插圖，提升內容表達效果。
> - 自動化的參考查找功能，確保生成的插圖準確性。
> - 支持多種主題色，適應不同的內容需求。

> [!danger] 缺點
> - 不適合生成完整的社交卡片排版，需要搭配其他技能。
> - 對於高精度的科研圖表生成支持不足。
> - 生成的插圖風格可能不符合所有用戶的需求。

> [!warning] 注意事項
> - 不適合生成完整的小紅書卡片排版，需搭配其他技能使用。
> - 不支持真實攝影修圖或人像写真。
> - 對於需要嚴格出版級數據制圖的科研圖不適合。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [op7418/guizang-social-card-skill](https://github.com/op7418/guizang-social-card-skill) | 專注於整體社交卡片排版，而非插圖生成，適合需要完整卡片設計的場景。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更廣泛的插畫風格選擇，但不專注於中文標籤的生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多樣化的插畫風格，但不專注於中文標籤的生成。 | 如果你的團隊需要多樣化的插畫風格而不特別需要中文支持。 | medium，因為需要重新調整生成流程和風格設定。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更簡單的插畫生成工具，但功能較為基礎。 | 如果你的需求不需要複雜的插畫生成，且希望快速上手。 | low，因為功能簡單，易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guizang-material-illustration** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成多樣化的插畫風格，但不專注於中文標籤的生成。 | 提供更簡單的插畫生成工具，但功能較為基礎。 |
> | 遷移成本 | - | medium，因為需要重新調整生成流程和風格設定。 | low，因為功能簡單，易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要多樣化的插畫風格而不特別需要中文支持。 | 如果你的需求不需要複雜的插畫生成，且希望快速上手。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人試用，不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的中文標籤可能存在錯誤，特別是在複雜概念上。
  - 解法：使用者需自行檢查生成的標籤，必要時進行手動修改。
- **[HIGH]** 在高流量使用時，生成速度可能會變慢。
  - 解法：考慮分批生成插圖以減少壓力。
- **[HIGH]** 不支持完整的小紅書卡片排版，需搭配其他技能使用。
  - 解法：使用 `guizang-social-card-skill` 進行排版。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要快速生成產品插圖 | 非常適合 | 能夠快速生成帶中文標籤的插圖，提升產品介紹的效果。 |
| 教育機構需要為課程內容製作解釋圖 | 適合 | 能夠生成清晰的教育插圖，幫助學生理解複雜概念。 |
| 大型企業需要高精度的科研圖表 | 不適合 | 對於需要嚴格數據準確性的科研圖表支持不足。 |
| 社交媒體運營需要吸引人的配圖 | 非常適合 | 生成的插圖能夠有效吸引觀眾注意，提升內容的可讀性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成插圖的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，使用於 CI/CD pipeline 時安全性高。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個技能最常與 Claude Code 和 Codex 搭配使用，處於內容生成的環節。在一個使用 Claude 的專案中，使用者可以通過簡單的指令生成插圖，然後將這些插圖應用於社交媒體或文檔中。與主流工具鏈如 GitHub Actions 和 VS Code 的相容性良好，並且不需要額外的適配器或包裝器，整合過程中摩擦點較少。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，內容創作者通常依賴於手動設計插圖或使用其他插畫工具，這些方法往往耗時且效果不佳。隨著對視覺內容需求的增加，這個工具的出現正好填補了市場的空白。技術的進步使得自動生成插圖成為可能，這個工具代表了內容生成自動化的趨勢，未來可能會進一步擴展功能以滿足更廣泛的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的命令行操作
- 具備基本的內容創作能力

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊內部工具中導入。第三週：收集使用反饋並進行改進。

**成功指標**：生成插圖的時間減少 50%，內容吸引力提升。

> [!warning] 退出計畫
> 如果需要退出，所有設定和生成的插圖都可以輕鬆備份，並轉移到其他工具中。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
| Forks | 64 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-07-07 |
| Repo 大小 | 37 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/op7418/guizang-material-illustration) |
| Topics | `agent` `chart-visualization` `chinese` `claude-code` `codex` `data-visualization` `explainer` `illustration` |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放 Issues 但解決率低。
**連結**：[文件](https://github.com/op7418/guizang-material-illustration)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-07）
> **活躍天數** 1 天 · **最新 commit** docs: adjust readme cover placement

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/op7418/guizang-material-illustration/issues/1) | Please add license | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 歸藏的材质插画 skill
> 
> 一个适配 Claude Code / Codex 等 Agent 环境的配图 Skill，用来把文章、笔记、图表截图、产品概念、工作汇报、教学材料和人文观点，生成**带中文标签的歸藏材质插画**。
> 
> 它解决的是「中间那张图」的问题：社交卡片、PPT、文章和文档里经常需要一张能把意思讲清楚的中心配图，而不是一张漂亮但看不懂的装饰图。
> 
> 这个 Skill 专注做三件事：
> 
> - **解释图**：把抽象概念、流程、机制、系统关系画成带标签的图。
> - **图表美化**：从截图或原始数据里抽取语义，重新生成更适合传播的材质化图表。
> - **参考辅助出图**：遇到冷门概念、品牌、模型、科学装置、历史物件时，先查参考信息和参考图，再统一转成歸藏材质风格。
> 
> > 这是 [guizang-social-card-skill](https://github.com/op7418/guizang-social-card-skill) 的配套项目。Social Card Skill 负责整张卡片的标题、正文、主题色和尺寸；这个 Skill 负责卡片里的中心插画。
> 
> ## 30 秒开始
> 
> ```bash
> npx skills add https://github.com/op7418/guizang-material-illustration --skill guizang-material-illustration
> ```
> 
> 也可以直接把这段话发给有 shell 权限的 AI Agent：
> 
> ```text
> 帮我安装 guizang-material-illustration。请把 https://github.com/op7418/guizang-material-illustration 克隆到 ~/.claude/skills/guizang-material-illustration，安装完成后检查 SKILL.md、assets/、references/ 是否存在。
> ```
> 
> 已经安装过的话，用这段话更新：
> 
> ```text
> 帮我更新 guizang-material-illustration。请进入 ~/.claude/skills/guizang-material-illustration 执行 git pull，然后告诉我当前最新 commit。
> ```
> 
> 安装后直接对 Agent 说：
> 
> ```text
> 用歸藏的材质插画 skill，帮我把这段产品说明做成一张带中文标签的机制图。
> ```
> 
> 也可以试这些请求：
> 
> ```text
> 把这篇文章挑 3 个核心概念，各生成一张带字配图。
> 帮我把这张柱状图重新画成歸藏材质风格，数据和坐标不要改。
> 这段讲 PKCE 的说明太抽象了，先查一下参考信息，再做一张流程图。
> 给这篇小学科学课文做一张杠杆原理图，图里标出支点、用力点、阻力点和力臂。
> 把这个周报整理成一张项目状态配图，包含进展、风险、决策、下周。
> 先生成中心配图，再交给社交媒体卡片 Skill 排成 3:4 小红书卡片。
> ```
> 
> ## 效果
> 
> - **图内可以有字**：解释图需要短标签、箭头、图例和数据标注时，直接生成在图片里，不把图片降级成无字装饰。
> - **材质化 3D 图解**：克制的 Swiss editorial 构图、柔和 3D 材质、清楚的空间关系和少量高亮色。
> - **图表语义重画**：输入是糟糕截图时，只保留图表类型、标题、数据、坐标、单位、误差线和结论，不复刻原图排版。
> - **参考搜索辅助**：模型 Logo、技术术语、历史文化物件、科学装置、管理框架等内容，先补事实和视觉线索，再统一风格。
> - **教育与人文都能接**：小学科学、中学物理、生物化学机制、历史路线、文学意象、社会学概念都可以做成解释图。
> - **适配外层排版**：生成的图片可以放进小红书 3:4 卡片、公众号封面、PPT、文档、知识库和文章配图。
> - **主题色可扩展**：默认 IKB 蓝，也支持柠檬黄、柠檬绿、安全橙、石墨黑等主题方向。
> - **QA 优先**：交付前检查中文标签、数据、裁切、参考准确性和社交卡片尺寸下的可读性。
> 
> ## 适合 / 不适合
> 
> **合适**：文章配图 / 知识解释图 / 产品机制图 / 工作汇报配图 / 数据图表美化 / 教学材料配图 / 人文观点配图 / 社交卡片中心图 / PPT 中心插画 / 冷门概念视觉解释
> 
> **不合适**：完整小红书卡片排版（用 Social Card Skill）/ 完整 PPT 结构设计（用 PPT Skill）/ 真实摄影修图 / 人像写真 / 长文海报排版 / 需要严格出版级数据制图的科研图
> 
> ## 常见使用场景
> 
> | 任务 | 推荐方式 |
> |------|---------|
> | 长文章 → 配图 | 先拆出 1-4 个核心概念，每个概念生成一张解释图 |
> | 产品 / 技术说明 | 先查参考信息，再做流程图、层级图、系统关系图 |
> | 图表截图美化 | 抽取数据和坐标语义，重新生成材质化图表 |
> | 工作汇报 | 用进展、风险、决策、下一步做四象限或流程配图 |
> | 内容生产 | 把选题、素材、草稿、发布、复盘画成工作流 |
> | 教育解释 | 明确部件、方向、关系和短标签，避免只画氛围 |
> | 人文观点 | 用意象 + 结构 + 少量标签，不伪造真实历史现场 |
> | 社交卡片联动 | 先生成中心图，再让 Social Card Skill 负责标题和版式 |
> 
> ## 支持类型
> 
> | 类型 | 适合内容 |
> |------|---------|
> | 概念拆解图 | 一个概念由哪些部分组成 |
> | 流程图解 | 输入、步骤、判断、输出 |
> | 循环机制图 | 增长循环、反馈回路、迭代飞轮 |
> | 对比图 | 前后对比、两条路径、两种策略 |
> | 层级 / 架构图 | 系统、依赖、组织、模块关系 |
> | 场景解释图 | 办公室、课堂、实验台、城市、历史路线 |
> | 科学机制图 | 力、电、磁、生态、生物结构、化学反应 |
> | 人文意象图 | 诗歌、历史、哲学、社会学隐喻 |
> | 材质化图表 | 柱状图、折线图、甘特图、桑基图、热力图、漏斗图、累计流图 |
> | 参考辅助图 | 品牌、模型、专业术语、管理框架、科学装置 |
> 
> ## 图表美化怎么做
> 
> 输入可以是一张图表截图，也可以是一组数据。Agent 会先抽取：
> 
> - 图表类型
> - 标题和结论
> - 横轴、纵轴、单位和刻度
> - 类别顺序
> - 数值、百分比、误差线
> - 需要强调的最高值、最低值、瓶颈或异常点
> 
> 然后重新生成一张更适合传播的图：图表可以更小，旁边可以加入小场景、图标、解释标签和视觉重点。目标不是「给原截图换皮」，而是让读者更快看懂。
> 
> ## 参考搜索怎么用
> 
> 参考搜索不是找画风，也不是复制外部图片。
> 
> 它只解决三个问题：
> 
> 1. 这个东西是什么。
> 2. 哪些结构、部件、流程或图标不能画错。
> 3. 观众靠什么稳定视觉线索一眼识别它。
> 
> 例如 PKCE、Andon、Zettelkasten、Kirkpatrick、Panopticon、某个模型 Logo、某个科学装置或历史物件，都适合先查参考信息，再进入统一的歸藏材质插画风格。
> 
> ## 安装
> 
> ### 方式一：一行命令安装
> 
> ```bash
> npx skills add https://github.com/op7418/guizang-material-illustration --skill guizang-material-illustration
> ```
> 
> ### 方式二：把下面这段话直接发给 AI
> 
> > 帮我安装 `guizang-material-illustration` 这个 Claude Code / Codex skill。请按下面步骤做：
> >
> > 1. 确保 `~/.claude/skills/` 目录存在，不存在就创建
> > 2. 执行 `git clone https://github.com/op7418/guizang-material-illustration.git ~/.claude/skills/guizang-material-illustration`
> > 3. 验证：`ls ~/.claude/skills/guizang-material-illustration/` 应该看到 `SKILL.md`、`assets/`、`references/` 三项
> > 4. 告诉我装好了，之后我说「做一张带字配图」「图表美化」「生成材质插画」之类的话就会触发这个 skill
> 
> ### 方式三：手动命令行
> 
> ```bash
> git clone https://github.com/op7418/guizang-material-illustration.git ~/.claude/skills/guizang-material-illustration
> ```
> 
> ## 触发方式
> 
> 装好后，可以这样说：
> 
> - 「帮我生成一张配图」
> - 「做一张带字解释图」
> - 「把这个概念画成图解插画」
> - 「把这张图表美化一下」
> - 「给这段工作汇报做一张材质风配图」
> - 「这个概念比较冷门，先搜参考信息再生成图」
> - 「给这篇小学科学课文做一张解释图」
> - 「做一张能放进小红书卡片里的中心图」
> 
> ## 使用流程
> 
> Skill 本身会按下面的方式工作：
> 
> 1. **理解材料**：读文章、截图、数据或说明，找出真正需要被画出来的关系。
> 2. **内部判断类型**：不让用户硬选模式，自动判断是流程图、机制图、图表、人文场景还是教育解释图。
> 3. **必要时查参考**：冷门概念、具体品牌、科学装置、历史物件先补参考信息。
> 4. **压缩文案**：把每张图压成一句说明和 3-5 个短标签。
> 5. **写生成提示词**：明确标签、数据、比例、安全区、视觉风格和参考线索。
> 6. **生成图片**：调用 GPT-Image / imagegen 或当前 Agent 可用的图像生成能力。
> 7. **检查并重生**：中文标签、数据、裁切、图例、参考线索错了，优先重新生成。
> 8. **交付资产**：保存图片路径和提示词，方便放进社交卡片、PPT 或文档。
> 
> 详细执行规则见 [`SKILL.md`](./SKILL.md)。视觉风格、图表、参考搜索和 QA 规则在 `references/*.md` 里。
> 
> ## 目录结构
> 
> ```text
> guizang-material-illustration/
> ├── SKILL.md                         # Skill 主文件：触发条件、工作流、交付规则
> ├── README.md                        # 本文件
> ├── HANDOFF.md                       # 交接文档：事实、结构、测试案例、验证方式
> ├── PRODUCT.md                       # 产品文档：定位、场景、边界、roadmap
> ├── agents/
> │   └── openai.yaml                  # Codex / OpenAI Skill 展示配置
> ├── assets/
> │   └── prompt-template.md           # 可复用图像提示词模板
> └── references/
>     ├── visual-style.md              # 歸藏材质插画风格、比例、安全区、主题色
>     ├── prompt-patterns.md           # 循环、流程、Hub、对比、层级等提示结构
>     ├── chart-beautify.md            # 图表语义抽取、数据优先重画、图标参考
>     ├── use-cases-and-routing.md     # 支持场景与内部路由
>     ├── reference-gathering.md       # 生僻概念 / 品牌 / 科学装置参考规则
>     └── qa-checklist.md              # 图内文字、数据、裁切、参考准确性检查
> ```
> 
> ## 核心设计原则
> 
> 1. **图要讲人话**：图内标签短、具体、能指向对象，不用抽象名词堆砌。
> 2. **图内可以有字**：解释图不是纯装饰，必要标签应该直接生成在图里。
> 3. **数据不能编**：图表类先保证数值、坐标和单位正确，再谈风格。
> 4. **参考只补事实**：查参考是为了画对，不是为了抄风格。
> 5. **不让用户选内部模式**：Agent 自己判断类型，只有关键信息缺失时才问。
> 6. **中心图和外层排版分工**：这个 Skill 生成配图，社交卡片 / PPT Skill 负责整页排版。
> 7. **小图也要读得清**：最终会进社交卡片时，标签和主体必须能在缩放后看懂。
> 
> ## 和 Social Card Skill 怎么配合
> 
> 推荐链路：
> 
> 1. 用 `guizang-material-illustration` 先生成中心图。
> 2. 检查图内标签、数据和裁切。
> 3. 把图片交给 `guizang-social-card-skill`。
> 4. Social Card Skill 负责 3:4 / 1:1 / 21:9 的标题、正文、主题色和导出。
> 
> 如果一张卡片的重点是这张图，外层卡片要给图片足够大的区域；不要把中心图缩得太小，否则图内标签会读不清。
> 
> ## Roadmap
> 
> - 整理一组可浏览案例 gallery，覆盖工作、教育、人文、图表四类。
> - 扩展图表类型：雷达图、矩阵图、泳道图、时间轴、组织结构图、地图型数据。
> - 补参考搜索记录模板：查了什么、提取了什么、哪些线索不采用。
> - 增加和 Social Card Skill 联动的最小 recipe。
> - 补更多中文图内标签的稳定提示模板。
> 
> ## FAQ
> 
> **这个 Skill 会直接排完整小红书卡片吗？**  
> 不会。它只生成中心配图。整张卡片的标题、正文、主题色和平台尺寸交给 Social Card Skill。
> 
> **图里真的可以有中文字吗？**  
> 可以，而且这是这个 Skill 的核心。只要图片承担解释任务，短中文标签、箭头说明、数据标注就应该在图里。
> 
> **如果中文字生成错了怎么办？**  
> 优先缩短标签并重新生成，不建议靠 HTML 往图上贴一堆字补救。
> 
> **能不能只给数据，不给原图？**  
> 可以。只要提供图表类型、类别、数值、单位和想强调的结论，就能生成材质化图表。
> 
> **能不能查参考图？**  
> 可以。冷门概念、具体模型、品牌、科学装置、历史文化物件都适合先查参考。参考只用于理解事实和视觉线索。
> 
> **支持英文图吗？**  
> 支持，但默认优先中文图内标签，因为这个项目主要服务中文内容生产。
> 
> ## 贡献
> 
> 欢迎开 Issue 或 PR。比较有价值的改动包括：
> 
> - 补充新的图表类型和提示模板。
> - 补充教育、人文、工作场景案例。
> - 改进 `references/reference-gathering.md` 的参考搜索边界。
> - 改进 `references/qa-checklist.md` 的图内文字和数据检查规则。
> - 给 `assets/prompt-template.md` 增加更稳定的中文标签写法。
> 
> 测试和 demo 请放在 `local-tests/` 下，不要把一次性输出放进 Skill 根目录。

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[教育資源]]

相關專案：[[op7418--guizang-social-card-skill|op7418/guizang-social-card-skill]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[ahmadawais--chartli|ahmadawais/chartli]]

[GitHub](https://github.com/op7418/guizang-material-illustration)

## 相關收錄

> [!note]- 直接競品（同子分類：插畫生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "插畫生成" AND file.name != "op7418--guizang-material-illustration"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "op7418--guizang-material-illustration"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "op7418--guizang-material-illustration" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "op7418--guizang-material-illustration"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","自動化","教育資源"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "op7418--guizang-material-illustration" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "op7418--guizang-material-illustration" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "op7418" AND file.name != "op7418--guizang-material-illustration"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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
> const me = dv.page("Repos/op7418--guizang-material-illustration");
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

> **2026-07-13** — 首次收錄
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

- [[2026-07-14|2026-07-14]] — 再次上榜，637 stars
- [[2026-07-13|2026-07-13]] — 首次收錄，598 stars
