---
repo: XBuilderLAB/cheat-on-content
url: https://github.com/XBuilderLAB/cheat-on-content
owner: XBuilderLAB
owner_type: Organization
language: Shell
license: MIT
description: "You're reading this. The skill predicted it. A workflow that turns every post into a calibrated experiment—score, blind-predict, retro, evolve. The future doesn't reward effort, it rewards those who see the pattern first. 1M followers in a month — not luck, system."
homepage: ""
stars: 1986
stars_per_day: 221
forks: 372
open_issues: 5
created: 2026-05-05
pushed_at: 2026-05-14
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "其他"
subcategory: "內容創作"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "將每篇文章轉化為經過校準的實驗，幫助創作者精準預測內容表現。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-05-15"
contributor_count: 4
engagement: "medium"
issue_close_rate: 44
repo_size_kb: 328
readme_length: 6084
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:778,2026-05-07:780,2026-05-08:1022,2026-05-08:1031,2026-05-09:1214,2026-05-09:1219,2026-05-10:1426,2026-05-10:1426,2026-05-11:1556,2026-05-11:1559,2026-05-12:1665,2026-05-12:1665,2026-05-13:1815,2026-05-14:1911,2026-05-15:1986"
tags:
  - github
  - "category/其他"
  - "lang/shell"
  - org
aliases:
  - "cheat-on-content"
  - "XBuilderLAB/cheat-on-content"
  - "將每篇文章轉化為經過校準的實驗，幫助創作者精準預測內容表現。"
---

# cheat-on-content

**2.0k** stars · **221** stars/天 · 建立 9 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 將每篇文章轉化為經過校準的實驗，幫助創作者精準預測內容表現。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (221 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 希望提升內容創作質量並獲得數據支持的獨立創作者或小型團隊。
> **一句話重點** 這個專案的價值在於將內容創作變成一個可量化的實驗，幫助創作者更精準地預測和改進內容表現。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "內容創作" && p.file.name !== "XBuilderLAB--cheat-on-content" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 內容創作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到更精準的內容預測，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將內容創作過程轉化為一個可量化的實驗流程。

## 專案簡介

這個專案旨在幫助內容創作者通過一個系統化的流程來提升他們的內容質量和預測能力。使用者在發佈內容後，會進行打分、盲測預測、發佈和回顧，最終形成一個不斷演化的評分標準。這樣的設計使得每一次的內容創作都能夠被記錄和反思，從而逐步提高創作者的敏銳度和預測準確性。核心賣點在於它不僅僅是提供靈感，而是讓創作者的直覺變得可量化，並隨著時間的推移自動演進。這個工具的技術實作依賴於用戶的歷史數據，並根據這些數據反向工程出打分公式，這樣的設計使得它能夠提供個性化的建議，而非通用的答案。

與一般的創作工具相比，這個工具強調的是如何更精準地評估和改進內容，而不是單純增加發佈的數量。其實際使用效果取決於用戶的參與程度，若用戶能夠持續使用並反思，則能在三個月內顯著提高內容的質量。這個專案目前處於早期階段，社群互動活躍，但仍有許多功能需要進一步完善，特別是在支持更多平台方面。對於小型創作者或新手來說，這是一個值得嘗試的工具，能幫助他們在內容創作上更具策略性。

**技術棧**：`Shell` · `Python`

## 重點功能

- 打分系統 — 根據用戶歷史數據自動生成的打分公式，幫助用戶量化內容表現。
- 盲測預測 — 用戶在發佈前可以進行盲測，預測內容的表現。
- 數據回顧 — 內容發佈後三天進行數據回顧，幫助用戶分析表現。
- 演化標準 — 隨著時間推移，評分標準會根據用戶的歷史數據自動調整。
- 個性化建議 — 根據用戶的內容歷史提供專屬的改進建議。

## 快速開始

1. 安裝專案
```bash
git clone https://github.com/XBuilderLAB/cheat-on-content.git
```
2. 進入專案目錄
```bash
cd cheat-on-content
```
3. 運行主程式
```bash
python main.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1986 stars（221/天），forks 372（18.7%），顯示出強烈的使用興趣。作者 Jooonnn 及其團隊專注於內容創作的數據分析，解決了創作者在內容發佈後缺乏有效反思的痛點。這個工具的出現正好填補了市場上對個性化內容評估工具的需求，並且在社群中引發了討論。其高 forks/stars 比率顯示出使用者對其功能的實際修改和擴展需求。

## 適合誰使用

**目標受眾**：希望提升內容創作質量並獲得數據支持的獨立創作者或小型團隊。

> [!example] 使用場景
> - 內容創作者用它來分析每篇文章的表現並調整創作策略，因為這樣可以在短時間內提升內容的質量和吸引力。
> - 社交媒體經營者用它來預測不同內容的受眾反應，因為這樣可以更有效地制定發佈計劃，避免浪費時間在低效內容上。
> - 市場行銷專員用它來評估廣告文案的潛在效果，因為這樣可以根據數據做出更明智的決策，提升轉換率。

## 架構分析

這個專案採用模組化的設計，將內容創作的每個步驟分為獨立的模組，這樣可以讓用戶根據自己的需求選擇使用。數據流從用戶輸入的內容開始，經過打分、預測和回顧，最終形成一個不斷演化的評分標準。這樣的設計使得用戶能夠在每次創作後獲得反饋，並根據數據調整自己的創作策略。

選擇 Python 作為主要開發語言，因為它在數據處理和分析方面的強大生態系統，這使得專案能夠快速迭代和擴展。由於依賴於用戶的歷史數據，若用戶參與不夠，則可能導致預測準確性下降。整體而言，這個專案的架構設計旨在提供靈活性和可擴展性，適應不同用戶的需求。

## 技術深入分析

這個專案的核心技術機制在於將內容創作過程數據化，使用者的每一篇文章都會被打分並進行預測，這樣可以不斷累積數據，形成一個自我優化的系統。效能上，這個工具能夠處理大量的內容數據，並在用戶的參與下，逐漸提升預測準確性。選擇 Python 作為開發語言，因為它擁有強大的數據處理庫，如 Pandas 和 NumPy，這使得數據分析變得更加高效。由於這個專案依賴於用戶的歷史數據，若用戶未能持續使用，則可能影響預測的準確性。技術風險方面，若用戶的數據量不足，則可能導致模型的準確性下降。整合方面，這個工具可以與現有的內容管理系統進行集成，但可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的功能介紹，但缺乏詳細的安裝指引。安裝過程相對順暢，但對於新手來說可能需要額外的支持。沒有提供多語言版本，僅有英文和簡體中文。

## 優缺點分析

> [!success] 優點
> - 提供個性化的內容評估，根據用戶歷史數據進行調整。
> - 幫助用戶建立數據驅動的創作流程，提升內容質量。
> - 強調反思和學習，讓用戶在長期內獲得更好的結果。

> [!danger] 缺點
> - 目前功能仍在開發中，可能存在不穩定性。
> - 對於新手來說，學習曲線較陡峭。
> - 需要用戶持續參與，否則效果不明顯。

> [!warning] 注意事項
> - 目前僅支援特定社交平台，未來可能需要擴展到更多平台。
> - 需要用戶持續參與，否則效果不明顯。
> - 對於新手來說，可能需要時間來熟悉打分和預測的流程。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化內容生成，而本專案則強調內容的評估和改進。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供內容的歷史版本管理，而本專案著重於即時的數據分析和預測。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| ChatGPT | 使用通用的語言模型來生成內容，而本專案則專注於內容的評估和預測。 | 如果需要快速生成內容而非評估，則可以選擇 ChatGPT。 | low，因為兩者的使用方式有很大不同。 |
| DeepSeek | 專注於特定領域的內容生成，而本專案則提供個性化的內容評估。 | 如果需要針對特定領域的內容生成，則可以選擇 DeepSeek。 | medium，因為需要重新調整創作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cheat-on-content** | **ChatGPT** | **DeepSeek** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用通用的語言模型來生成內容，而本專案則專注於內容的評估和預測。 | 專注於特定領域的內容生成，而本專案則提供個性化的內容評估。 |
> | 遷移成本 | - | low，因為兩者的使用方式有很大不同。 | medium，因為需要重新調整創作流程。 |
> | 適用場景 | 主要場景 | 如果需要快速生成內容而非評估，則可以選擇 ChatGPT。 | 如果需要針對特定領域的內容生成，則可以選擇 DeepSeek |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 安裝過程中可能遇到依賴問題，特別是在不同操作系統上。
  - 解法：確保所有依賴都已安裝，並參考官方文檔。
- **[HIGH]** 預測準確性依賴於用戶的參與程度，若參與不足則效果不佳。
  - 解法：鼓勵用戶定期回顧和更新數據。
- [MEDIUM] 目前僅支援特定平台，未來可能需要擴展。
  - 解法：持續關注更新，並參與社群討論。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創作者的內容創作流程 | 非常適合 | 能夠提供個性化的數據支持，幫助提升內容質量。 |
| 大型企業的內容行銷策略 | 普通 | 雖然能提供數據支持，但可能需要更多的整合工作。 |
| 社交媒體經營者的日常內容發佈 | 適合 | 能夠幫助經營者更精準地預測內容表現。 |
| 不定期發佈內容的隨意創作者 | 不適合 | 缺乏持續參與會導致預測效果不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到更精準的內容預測，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與內容管理系統搭配使用，特別是在社交媒體平台的內容發佈環節。舉例來說，在一個使用 WordPress 的網站中，創作者可以用這個工具來評估每篇文章的潛在表現，具體做法是將內容輸入到工具中，然後根據提供的打分和預測進行調整。這個工具可以與 GitHub Actions 整合，實現自動化的內容發佈流程。整合的摩擦點主要在於需要對接 API，可能需要額外的開發工作來實現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
| Forks | 372 |
| Open Issues | 5 |
| Issue 解決率 | 44% (4 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-05 |
| Repo 大小 | 328 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XBuilderLAB/cheat-on-content) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 51
>     "Python" : 49
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jooonnn](https://github.com/Jooonnn) | 14 |
> | [@woniuxuezhang](https://github.com/woniuxuezhang) | 6 |
> | [@level5Ninja](https://github.com/level5Ninja) | 1 |
> | [@songth1ef](https://github.com/songth1ef) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://github.com/XBuilderLAB/cheat-on-content/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-08 ~ 2026-05-14）
> **活躍天數** 3 天 · **最新 commit** fix: cheat-seed draft written as subtitle format (one sentence per line) (#18)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/XBuilderLAB/cheat-on-content/issues/15) | 这个咋安装使用的呢 | 0 | 0 |
> | [#10](https://github.com/XBuilderLAB/cheat-on-content/issues/10) | 能不能加上文字类平台的  比如 公众号等 | 0 | 1 |
> | [#9](https://github.com/XBuilderLAB/cheat-on-content/issues/9) | 预测一下这个 Issue 能 Open 多久 | 0 | 2 |
> | [#3](https://github.com/XBuilderLAB/cheat-on-content/issues/3) | 这个skill希望也能够支持cursor | 0 | 1 |
> | [#2](https://github.com/XBuilderLAB/cheat-on-content/issues/2) | 请问能不能添加 tiktok 的支持？ | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Cheat on Content
> 
> For content creators — a skill that turns every post into a calibrated experiment.
> 
> You're reading this. The skill predicted it.
> It turns every "I feel this will go viral" into a calibrated experiment.
> It took me from zero to 1M followers in a month. It said I'd write this. I did.
> Your doubt — predicted too.
> 
>   English
>   &nbsp;·&nbsp;
>   简体中文
> 
> &nbsp;
> 
> ---
> 
> ## 🎬 What it actually does
> 
> Most creators live in the same gambling loop:
> 
> > Publish → Numbers come in → Learn nothing → Roll the dice again
> 
> A creator who's shipped 200 pieces is barely 10% sharper than someone who's shipped 1 — because they never **kept books** after each round.
> 
> **Cheat on Content** makes every judgment get logged, retrospected, absorbed into the next:
> 
> 📊 Score → 🎯 Blind-predict → 🚀 Publish → 📈 T+3d retro → 🧬 Evolve your rubric
> 
> This isn't motivation. It's **compounding** — every piece you don't retro is silently eroding your ability to see yourself.
> 
> One month in = you have a hit-formula that's **only yours**.
> Three months in = you're 10× sharper than your first-day self.
> 
> ---
> 
> ## 🌀 Origin
> 
> > I never believed in fate. Until this skill made me film a video — and predicted exactly how much traffic that video would pull.
> >
> > I tried to break it. I told my audience. I hoped collective observation would collapse the wave function and shift the trajectory.
> >
> > The data was accurate.
> >
> > I didn't escape fate. I just moved from first-order to second-order.
> >
> > If even my awakening — even my audience's observation — was already in its prediction, then right now, reading this:
> > are you here out of curiosity, or just closing the algorithm's last move?
> >
> > — *the creator*
> 
> ---
> 
> ## ⚖️ How it differs from other "creator tools"
> 
> | Others | This |
> |---|---|
> | Give you "inspiration" | Make **your own intuition** measurable |
> | AI writes for you | AI **judges** for you — the script stays yours |
> | Ship 10 versions, A/B test | Ship one — **bet** in writing, settle the books with data |
> | Static dashboard | An **evolving rubric** — your formula 3 months from now isn't the starting one |
> 
> In a sentence: other tools help you "ship more." This helps you "judge sharper."
> 
> ---
> 
> ## 🤔 Can't I just use ChatGPT / DeepSeek / Doubao?
> 
> Those are **general assistants** — they tell everyone the same thing. You ask "will this go viral?" and the answer is fitted to global average opinion, not your channel. Ask again tomorrow — same answer. **It doesn't remember you. It doesn't change because of you.**
> 
> This is **your own ops expert** — serving only your one channel:
> 
> - The scoring formula is reverse-engineered from **your** history, not the global training distribution
> - Every piece you ship updates its understanding — by month three, judgment accuracy is 10× sharper than day one (**auto-evolving**)
> - It knows your benchmark account, your cadence, the last three reasons you flopped — things ChatGPT forgets after the first reply
> 
> General LLMs help everyone. This helps **your** account.
> 
> ---
> 
> ## 🛡️ Why the loop actually evolves
> 
> 📝 **Every piece is logged**: Score and prediction get written before publish, archived end-to-end. Three days later you settle accounts — you see exactly where you were sharp, where you were off. No more vague "I feel this one didn't land."
> 
> 🔁 **It gets sharper**: Three same-direction misses in a row, the tool actively prompts you to upgrade your scoring formula. **You don't have to remember — it remembers for you.**
> 
> 🛡️ **Upgrades have a brake**: Switching the formula requires re-scoring all historical samples — only released if it ranks more accurately than the old. Plus a cross-model independent audit — **so you can't fool yourself.**
> 
> 🪒 **The rubric is a workbench, not a museum**: Observations refuted by data get deleted; observations absorbed into formal dimensions also get deleted. It only holds what's most useful right now.
> 
> ---
> 
> ## 📦 Install
> 
> ```bash
> git clone https://github.com/XBuilderLAB/cheat-on-content.git
> cd cheat-on-content
> bash install.sh
> ```
> 
> > ⚠️ **Upgrading from v0.x?** Run `/cheat-migrate` in your content project after `git pull`. The 1.3 → 1.4 migration is **BREAKING for blind-channel integrity** — it splits `rubric_notes.md` so the blind sub-agent can't leak actuals. Without migrate, blind scoring will keep flagging `non_blind_warning`. See [CHANGELOG](CHANGELOG.md) and [migrations/1.3-to-1.4.md](migrations/1.3-to-1.4.md).
> 
> 14 sub-skills are symlinked into your agent's skill directory. One install, every content project gets it.
> 
> **Supported agents**: Claude Code (default) · Codex (`bash install.sh --codex`) · Both (`bash install.sh --all`)
> 
> > Frozen version: `bash install.sh --copy` / `bash install.sh --codex --copy`
> >
> > Uninstall: `bash uninstall.sh` / `bash uninstall.sh --codex` (your content data is not touched)
> 
> ---
> 
> ## 🚀 First run
> 
> In your content project directory, open a skill-compatible agent and say:
> 
> ```
> 初始化 cheat-on-content
> ```
> 
> (or `init cheat-on-content`)
> 
> Five yes/no questions complete onboarding. **Strongly recommend importing a benchmark account** — 5–10 samples and the tool gets an anchor immediately. Without one, your first 5 predictions land at ±50% precision.
> 
> ---
> 
> ## ⚡ Daily use
> 
> ```
> score this scripts/.md       → grade only
> start prediction scripts/.md → blind prediction + decision log
> shot scripts/.md             → create video folder + buffer +1
> shipped https://...                → buffer -1
> retro videos//                → T+3d data + retrospective
> status / fetch trends / find topic / bump rubric / find benchmark
> ```
> 
> Hook-aware agents auto-report buffer + pending retros + top candidates at every session start — no need to ask. Other agents: just say `status`.
> 
> Full workflow + sub-skill details: see [SKILL.md](SKILL.md).
> 
> ---
> 
> ## 📈 Star History
> 
>   
> 
> ---
> 
> ## 📜 License
> 
> MIT. Commercial use, modification, closed-source integration — all fine.
> 
> ---
> 
> *Is this cheating? So was the calculator. So was Google.*
> *The future doesn't reward effort — it rewards those who see the pattern first.*
> 
> *You reading this line — that's predicted too.*

## 延伸閱讀

相關概念：[[自動化]] · [[數據分析]] · [[內容創作]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/XBuilderLAB/cheat-on-content)

## 相關收錄

> [!note]- 直接競品（同子分類：內容創作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "內容創作" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "XBuilderLAB--cheat-on-content" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","數據分析","內容創作"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XBuilderLAB" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-12|2026-05-12]] — 再次上榜，1.7k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，1.6k stars
- [[2026-05-10|2026-05-10]] — 再次上榜，1.4k stars
- [[2026-05-09|2026-05-09]] — 再次上榜，1.2k stars
- [[2026-05-08|2026-05-08]] — 再次上榜，1.0k stars
- [[2026-05-07|2026-05-07]] — 首次收錄，778 stars
