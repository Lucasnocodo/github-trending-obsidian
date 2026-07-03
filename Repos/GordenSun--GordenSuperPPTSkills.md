---
repo: GordenSun/GordenSuperPPTSkills
url: https://github.com/GordenSun/GordenSuperPPTSkills
owner: GordenSun
owner_type: User
language: Python
license: N/A
description: "AI PPT赛道终结者，史上最最最强 PPT Skill！！！  使用GPT生成豪华的图片格式PPT，然后转换为完全可编辑的PPTX文件。"
homepage: ""
stars: 1352
stars_per_day: 54
forks: 125
open_issues: 1
created: 2026-06-07
pushed_at: 2026-06-07
first_seen: 2026-06-10
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "PPT 生成工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-10
use_case: "自動生成豪華圖片格式的PPT並轉換為可編輯的PPTX文件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-21"
contributor_count: 1
engagement: "low"
issue_close_rate: 75
repo_size_kb: 19531
readme_length: 2409
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-10"
star_history: "2026-06-10:614,2026-06-11:730,2026-06-12:788,2026-06-13:846,2026-06-14:885,2026-06-16:955,2026-06-19:1067,2026-06-20:1082,2026-06-26:1186,2026-07-02:1318,2026-07-03:1352"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "GordenSuperPPTSkills"
  - "GordenSun/GordenSuperPPTSkills"
  - "自動生成豪華圖片格式的PPT並轉換為可編輯的PPTX文件。"
---

# GordenSuperPPTSkills

**1.4k** stars · **54** stars/天 · 建立 25 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 自動生成豪華圖片格式的PPT並轉換為可編輯的PPTX文件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (54 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 25 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 PPT 的市場行銷專員和教育工作者。
> **一句話重點** 這個專案展示了如何利用 AI 技術自動化生成高品質的 PPT，顯著提升工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "PPT 生成工具" && p.file.name !== "GordenSun--GordenSuperPPTSkills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 PPT 生成工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到高效的 PPT 生成工具，值得嘗試。

> [!abstract] 核心創新
> 核心使用 GPT 的生圖能力和視覺解析能力，實現圖片格式 PPT 的自動生成與轉換。

## 專案簡介

GordenSuperPPTSkills 專注於利用 GPT 技術生成高品質的 PPT，並將其轉換為可編輯格式。使用者可以選擇生成圖片格式的 PPT，或將現有的圖片轉換為可編輯的 PPTX 文件。這個過程的核心是利用 GPT 的圖像生成和視覺解析能力，從而提取背景、框架、圖標和文本等元素，並在 PPT 中進行組合。關鍵指令包括使用 `GordenImagePPTGen` 生成圖片格式的 PPT，或使用 `GordenImage2PPTX` 將圖片轉換為可編輯的 PPTX。這個工具的賣點在於其全自動化的流程，讓用戶能夠快速生成和編輯 PPT，顯著提高工作效率。

技術上，這個專案使用 Python 和多個圖像處理庫（如 python-pptx 和 pillow），並依賴於 Codex 進行 GPT 的圖像生成。與其他 PPT 工具相比，如 Canva 或 PowerPoint，這個工具的優勢在於其自動化和生成的高品質圖片，特別適合需要快速製作高質量演示文稿的用戶。這個工具的使用效果取決於 GPT 的生成能力，對於複雜的內容生成可能需要額外的調整。這個專案目前處於早期階段，適合小型團隊或個人使用，未來可能會進一步增強功能和穩定性。

**技術棧**：`Python` · `python-pptx` · `pillow` · `numpy`

## 重點功能

- GordenImagePPTGen — 生成圖片格式的 PPT，支持主題和內容輸入，輸出為每頁 .png 和圖片型 .pptx。
- GordenImage2PPTX — 將圖片轉換為可編輯的 PPTX 文件，支持背景、骨架、圖標和文本層的還原。
- GordenSuperPPTSkill — 一鍵執行前兩者，支持主題輸入生成圖片型 PPT 並轉換為可編輯格式。
- 支持高密度信息和複雜排版的 PPT 生成，適合商業和教育用途。
- 自包含的技能包，便於安裝和使用，支持 Codex 環境。

## 快速開始

1. 安裝 GordenSuperPPTSkills
```bash
cp -R GordenSuperPPTSkills ${CODEX_HOME:-$HOME/.codex}/skills/
```
2. 生成圖片格式的 PPT
```bash
使用GordenImagePPTGen技能，生成一个N页的PPT，内容为XXX，要求PPT要求豪华、信息密度高、排版复杂
```
3. 將圖片轉換為可編輯的 PPTX
```bash
把当前文件夹里的XXX.png，使用GordenImage2PPTX，还原成可编辑的PPT，必须严格遵循技能步骤
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 1352 stars（54/天），forks 125（9.2%），顯示出強勁的增長潛力。作者 GordenSun 在 PPT 生成領域有一定的專業背景，這個工具解決了傳統 PPT 製作過程中的繁瑣步驟，特別是對於需要快速生成高質量內容的用戶。近期的社群討論和分享也推動了這個專案的曝光率，顯示出其在 AI PPT 生成領域的潛力。這個工具的成功也得益於 GPT 技術的進步，使得自動化生成高質量內容成為可能。

## 適合誰使用

**目標受眾**：需要快速生成高品質 PPT 的市場行銷專員和教育工作者。

> [!example] 使用場景
> - 市場行銷專員用它來快速生成產品介紹的 PPT，因為手動製作 PPT 耗時且容易出錯。
> - 教育工作者用它來製作教學課件，因為能夠自動生成高質量的視覺內容，提升學生的學習興趣。
> - 自由工作者用它來為客戶提供專業的報告，因為能夠快速生成可編輯的 PPT，節省了大量時間。

## 架構分析

這個專案採用模組化設計，分為三個獨立的技能，每個技能都能單獨使用。這樣的設計使得用戶可以根據需求選擇性地使用功能，降低了學習成本。資料流方面，首先使用 GordenImagePPTGen 生成圖片格式的 PPT，然後通過 GordenImage2PPTX 將圖片轉換為可編輯的 PPTX 文件。這種設計的代價在於需要依賴 Codex 環境，限制了使用者的範圍。擴展性方面，未來可以考慮增加更多的功能模組，例如支持不同格式的輸出或更多的編輯選項。

## 技術深入分析

GordenSuperPPTSkills 的核心技術機制是基於 GPT 的圖像生成和視覺解析能力。專案使用 Python 語言，並依賴於多個圖像處理庫，如 python-pptx 和 pillow，來實現 PPT 的生成和轉換。效能方面，生成圖片格式的 PPT 時，能夠快速處理多頁內容，但對於複雜的設計可能需要進行額外的手動調整。設計取捨方面，選擇模組化設計使得功能靈活，但也限制了使用範圍，因為目前僅支持 Codex 環境。技術風險方面，對於 GPT 的依賴可能在未來的版本中造成不穩定性，特別是在更新頻繁的情況下。整合方面，與現有的 PPT 工具鏈相容性良好，但需要注意版本依賴問題，可能會影響到使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢，但僅限於 Codex 環境使用，對於新手來說可能會有些許門檻。整體而言，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 自動化生成高品質 PPT，節省時間和精力。
> - 支持可編輯格式的轉換，方便後續修改。
> - 模組化設計，靈活性高，適合不同需求的用戶。

> [!danger] 缺點
> - 僅限於 Codex 環境使用，無法在其他環境中運行。
> - 對於複雜內容生成，可能需要進行額外的手動調整。
> - 圖片轉換過程中可能消耗大量的計算資源。

> [!warning] 注意事項
> - 僅限於 Codex 環境使用，無法在其他環境中運行。
> - 圖片轉換為可編輯 PPTX 時，可能需要消耗大量的 GPT 計算資源。
> - 對於複雜內容生成，可能需要進行額外的手動調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化 PPT 生成，但專注於動畫效果，而本專案專注於圖片生成和編輯功能。 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | 前者是基礎版本，功能較少，而本專案提供了更完整的圖片生成和轉換功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於簡化 PPT 的生成過程，但不支持圖片轉換功能，這使得其功能範圍較窄。 | 如果你的需求僅限於快速生成簡單的 PPT，而不需要圖片轉換功能。 | low，因為功能簡單，易於上手。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供了多種自動化工具，但不專注於 PPT 生成，功能較為分散。 | 如果你的團隊需要多種自動化工具，而不僅僅是 PPT 生成。 | medium，因為需要適應不同的工具和流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **GordenSuperPPTSkills** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於簡化 PPT 的生成過程，但不支持圖片轉換功能，這使得其功能範圍較窄。 | 提供了多種自動化工具，但不專注於 PPT 生成，功能較為分散。 |
> | 遷移成本 | - | low，因為功能簡單，易於上手。 | medium，因為需要適應不同的工具和流程。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於快速生成簡單的 PPT，而不需要圖片轉換功 | 如果你的團隊需要多種自動化工具，而不僅僅是 PPT 生成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Codex 環境外無法運行，導致使用限制
  - 解法：確保在 Codex 環境中使用
- [MEDIUM] 圖片轉換過程中可能消耗大量計算資源
  - 解法：控制生成的圖片數量以減少資源消耗
- [MEDIUM] 對於複雜內容生成，可能需要手動調整
  - 解法：提前規劃內容結構以減少調整需求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業公司的市場行銷團隊 | 非常適合 | 能快速生成高品質的產品介紹 PPT，提升效率。 |
| 教育機構的教學設計團隊 | 適合 | 能夠自動生成教學課件，節省時間。 |
| 自由工作者需要為客戶提供專業報告 | 普通 | 雖然能生成 PPT，但可能需要手動調整以符合客戶需求。 |
| 大型企業的內部培訓部門 | 不適合 | 對於複雜內容的需求，可能無法完全自動化生成。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高效的 PPT 生成工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料，但依賴於 GPT 的生成能力，需注意其安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
| Forks | 125 |
| Open Issues | 1 |
| Issue 解決率 | 75% (3 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 19.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GordenSun/GordenSuperPPTSkills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GordenSun](https://github.com/GordenSun) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，已解決75%的問題。
**連結**：[文件](https://github.com/GordenSun/GordenSuperPPTSkills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-07 ~ 2026-06-07）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Gorden Super PPT Skills（技能包）
> 
> AI PPT赛道终结者，史上最最最强 PPT Skill！！！
> 
> 使用GPT生成豪华的图片格式PPT，然后转换为**完全可编辑**的PPTX文件。
> 
> Skill全流程已拆成 **3 个独立技能**，可以拆分使用和优化：
> 
> | 技能 | 作用 | 输入 → 输出 |
> |---|---|---|
> | **[GordenImagePPTGen](GordenImagePPTGen/SKILL.md)** | 生成「图片格式的 PPT」 | 主题/内容 → 每页 .png + 图片型 .pptx |
> | **[GordenImage2PPTX](GordenImage2PPTX/SKILL.md)** | 把「图片 PPT / 图片」还原成可编辑 pptx | 图片 → 可编辑 .pptx（背景+骨架+图标+文本 四层） |
> | **[GordenSuperPPTSkill](GordenSuperPPTSkill/SKILL.md)** | 打包编排前两者，依次执行 | 主题/内容 → 图片型 PPT + 可编辑 pptx |
> 
> - 只要做图片版 PPT → **GordenImagePPTGen**
> - 只把图片转可编辑 → **GordenImage2PPTX**
> - 一键"先出图再转可编辑" / 未指定 → **GordenSuperPPTSkill**（A→B 串联）
> 
> ## 效果展示
> 1、GordenImagePPTGen（Gorden的图片PPT生成技能）生成图片格式的PPT
> 
> 2、GordenImage2PPTX（Gorden的图片转PPTX技能）把图片转换为完全可编辑的PPTX文件
> 
> ## 如何使用
> 仅限Codex使用。
> 
> 第1步：把Github仓库地址发给Codex让他安装技能；
> 
> 第2步：按需使用。GPT 5.5模型，推理强度选"中"即可。
> 如果只生成图片格式PPT，提示词：
> ```
> 使用GordenImagePPTGen技能，生成一个N页的PPT，内容为XXX，要求PPT要求豪华、信息密度高、排版复杂
> ```
> 
> 如果只想**把图片PPT转换成可编辑的PPTX文件**，提示词：
> ```
> 把当前文件夹里的XXX.png，使用GordenImage2PPTX，还原成可编辑的PPT，必须严格遵循技能步骤
> ```
> 
> 说明：
> 本技能仅适用于Codex，因为必须使用GPT生成图片和GPT的视觉能力，理论上Opus+GPT生图接口也可以实现，但是本技能没有做专门的适配。
> 
> 图片转可编辑PPTX文件，比较费额度，转换1张图片大概耗费Plus订阅5小时额度的10%。
> 
> 框架图默认是整体的一张图，也支持拆分成一个个独立的框架模块图，提示词里明确告诉Codex即可。
> 
> ## 原理讲解
> 核心使用的是GPT的生图能力和视觉解析能力。
> 大致步骤是：依次提取PPT图片的背景图、框架图、图标和装饰图、文本。最后在PPT里按坐标拼装起来。当然为了实现完美的效果，做了很多细节验证和约束规则。
> 使用过程中，你能看到GPT生成的过程图片。
> 
> ### 背景图
> 
> ### 框架图
> 
> ### 图标和装饰
> 
> ## 安装（给AI看的）
> 
> 每个技能目录都是**自包含**的（自带 `scripts/` 与 `references/`）。按需复制：
> 
> ```bash
> # Codex（按需选装其一/全部）
> cp -R GordenImagePPTGen   "${CODEX_HOME:-$HOME/.codex}/skills/GordenImagePPTGen"
> cp -R GordenImage2PPTX    "${CODEX_HOME:-$HOME/.codex}/skills/GordenImage2PPTX"
> cp -R GordenSuperPPTSkill "${CODEX_HOME:-$HOME/.codex}/skills/GordenSuperPPTSkill"
> ```
> 
> > GordenSuperPPTSkill 依赖另两个技能，请与它们一起安装（同一 skills 目录/仓库）。最省事：把整个仓库一起复制过去。
> 
> ## 依赖
> 
> ```bash
> pip3 install python-pptx pillow numpy
> ```
> 
> 图像生成后端按运行时自动解析（Codex 用内置 `imagegen`），见各技能 `references/runtime-notes.md`。
> 
> ## 目录结构（本文件夹 = 可整体复制给其他 Agent）
> 
> ```
> GordenSuperPPTSkills/
> ├── README.md                  ← 本文件（总入口）
> ├── GordenImagePPTGen/         ← 功能A：出图片 PPT（自带 scripts/ references/ 参考图/）
> ├── GordenImage2PPTX/          ← 功能B：图片→可编辑 pptx（自带 scripts/ references/）
> └── GordenSuperPPTSkill/       ← 编排 A→B（自带 references/，调用上面两个技能）
> ```
> 
> 每个技能目录均**自包含**。把整个 `GordenPPTSuperSkills/` 复制到目标 Agent 的 skills 目录即可使用。
> 
> ## 致谢与版权
> - 可以商用，**必须标明Github出处，或标记出作者@Gorden Sun**
> - 如果你想加入PPT Skill交流群，可以加我微信duge360
> - 感谢 [LinuxDO](https://linux.do) 社区的支持

## 延伸閱讀

相關概念：[[自動化]] · [[AI 生成內容]] · [[視覺解析]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]]

[GitHub](https://github.com/GordenSun/GordenSuperPPTSkills)

## 相關收錄

> [!note]- 直接競品（同子分類：PPT 生成工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "PPT 生成工具" AND file.name != "GordenSun--GordenSuperPPTSkills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "GordenSun--GordenSuperPPTSkills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "GordenSun--GordenSuperPPTSkills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "GordenSun--GordenSuperPPTSkills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","AI 生成內容","視覺解析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GordenSun--GordenSuperPPTSkills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GordenSun--GordenSuperPPTSkills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GordenSun" AND file.name != "GordenSun--GordenSuperPPTSkills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
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

> **2026-06-10** — 首次收錄
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

- [[2026-06-14|2026-06-14]] — 再次上榜，885 stars
- [[2026-06-13|2026-06-13]] — 再次上榜，846 stars
- [[2026-06-12|2026-06-12]] — 再次上榜，788 stars
- [[2026-06-11|2026-06-11]] — 再次上榜，730 stars
- [[2026-06-10|2026-06-10]] — 首次收錄，614 stars
