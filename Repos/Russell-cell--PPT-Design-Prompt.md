---
repo: Russell-cell/PPT-Design-Prompt
url: https://github.com/Russell-cell/PPT-Design-Prompt
owner: Russell-cell
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 849
stars_per_day: 142
forks: 64
open_issues: 0
created: 2026-04-22
pushed_at: 2026-04-28
first_seen: 2026-04-29
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "簡報工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-29
use_case: "將 DESIGN.md 品牌參考轉換為適合簡報的圖像格式。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-06"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 565
readme_length: 4864
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-29"
star_history: "2026-04-29:849"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "PPT-Design-Prompt"
  - "Russell-cell/PPT-Design-Prompt"
  - "將 DESIGN.md 品牌參考轉換為適合簡報的圖像格式。"
---

# PPT-Design-Prompt

**849** stars · **142** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> 將 DESIGN.md 品牌參考轉換為適合簡報的圖像格式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (142 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要將品牌指導資料轉換為簡報圖像的設計師和開發者。
> **一句話重點** 這個專案提供了一個針對品牌指導資料轉換的簡單工具，讓設計師和開發者能夠快速生成簡報圖像。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "簡報工具" && p.file.name !== "Russell-cell--PPT-Design-Prompt" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成簡報圖像的效果，值得嘗試。

> [!abstract] 核心創新
> 將品牌指導資料轉換為適合簡報的圖像格式，提供了一個簡單的 CLI 工具來實現這一過程。

## 專案簡介

這個專案的核心功能是將 `DESIGN.md` 文件中的品牌參考轉換為適合簡報的圖像格式，特別針對 PowerPoint 和其他視覺展示工具。使用者只需將原始的 `DESIGN.md` 文件放置在指定的資料夾中，透過 CLI 指令 `design-md-ppt convert`，便能生成包含品牌圖像的簡報文件。這樣的設計使得品牌指導資料能夠被視覺化，並且更容易被設計模型和代理使用。專案的目標是提供一個簡單的轉換工具，而不是完整的簡報生成器或 PowerPoint 匯出工具，因此它專注於將網頁和 UI 參考轉換為簡報圖像提示。這樣的設計選擇使得使用者可以在不需要完整簡報的情況下，快速生成所需的視覺資源。

技術上，專案使用 Python 作為開發語言，並依賴 `setuptools` 進行包管理，確保了安裝和使用的簡便性。與其他類似工具相比，這個專案不會生成完整的簡報，而是專注於圖像的生成，這使得它在特定情境下更具針對性。使用者在處理品牌資料時，需注意法律合規性，因為品牌資料的版權仍然屬於原所有者。整體而言，這是一個針對設計師和開發者的專案，適合需要快速生成簡報圖像的情境。

**技術棧**：`Python 3.10` · `setuptools`

## 重點功能

- 品牌參考轉換 — 將 `DESIGN.md` 文件中的品牌參考轉換為適合簡報的圖像格式。
- CLI 操作 — 使用 `design-md-ppt convert` 指令進行簡單的轉換操作。
- 生成清單 — 轉換過程中會生成 `conversion_manifest.json`，便於追蹤轉換結果。
- 支援自定義路徑 — 允許使用者指定來源和輸出路徑，靈活性高。
- 示範範例 — 提供最小化的範例資料夾，方便使用者測試工具。

## 快速開始

1. 安裝專案
```bash
python -m pip install -e .
```
2. 執行轉換
```bash
design-md-ppt convert
```
3. 使用自定義路徑執行轉換
```bash
design-md-ppt convert --source-root ./source --output-root ./ppt-image --manifest ./conversion_manifest.json --brands-file ./catalog/brands.txt
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 849 stars（142/天），forks 64（7.5%），顯示出穩定的增長潛力。專案的作者 Russell-cell 以開源貢獻為主，這個工具解決了將品牌指導資料轉換為簡報圖像的需求，之前的解決方案往往無法直接滿足這一需求。這個專案的推出可能受到社群對於簡報設計工具需求增加的影響，並且其簡單的 CLI 操作使得使用者能快速上手。forks/stars 比率為 7.5%，顯示出有相當比例的使用者在進行實際修改或使用。

## 適合誰使用

**目標受眾**：需要將品牌指導資料轉換為簡報圖像的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來將品牌指導資料轉換為簡報圖像，因為這樣可以快速生成視覺資源，減少手動設計時間。
> - 開發者用它來自動化簡報圖像的生成，因為這樣能夠提高工作效率，並確保品牌一致性。
> - 產品經理用它來準備簡報資料，因為這樣可以直接從品牌指導中提取必要的視覺元素，節省時間。

## 架構分析

這個專案採用簡單的 CLI 工具架構，使用 Python 和 setuptools 進行包管理，確保了安裝的便捷性。資料流方面，使用者將原始的 `DESIGN.md` 文件放在指定的資料夾中，透過 CLI 指令進行轉換，生成的圖像將儲存在指定的輸出資料夾中。這樣的設計使得使用者能夠快速上手，無需複雜的配置。選擇 Python 作為開發語言的好處在於其廣泛的社群支持和豐富的庫資源，但也可能面臨性能瓶頸，特別是在處理大型資料集時。整體而言，這個架構適合小型到中型的品牌資料轉換需求，未來若需擴展功能，可能需要考慮更高效的資料處理方案。

## 技術深入分析

這個專案的核心技術機制是將 `DESIGN.md` 文件中的品牌參考轉換為適合簡報的圖像格式，使用 Python 作為開發語言，並利用 CLI 進行操作。效能上，專案設計為輕量級，適合小型到中型的資料集處理，但在面對大型資料集時可能會遇到性能瓶頸。選擇 Python 和 setuptools 的好處在於其易於安裝和使用，但可能在處理速度上不如其他語言如 Go 或 Rust。這個專案的設計取捨在於專注於簡報圖像的生成，而非完整的簡報製作，這使得它在特定場景下更具針對性。技術風險方面，若未來需要擴展功能，可能需要考慮更高效的資料處理方案，並且在法律合規性上需謹慎處理品牌資料。整合方面，由於專案是 CLI 工具，因此與現有的開發環境整合相對簡單，但在 CI/CD pipeline 中的整合可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例，對新手友好。安裝過程順暢，無明顯坑。提供了良好的入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 工具，快速上手。
> - 專注於品牌指導資料的轉換，功能明確。
> - 提供示範範例，方便使用者測試和學習。
> - 生成的清單便於追蹤轉換結果。

> [!danger] 缺點
> - 僅支援 Python 3.10 以上版本，對於舊版使用者不友善。
> - 不支援完整簡報生成，功能範圍有限。
> - 需注意法律合規性，使用者需自行負責品牌資料的使用。
> - 對於大型資料集的處理速度可能較慢。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 不支援自動生成完整的簡報或 PowerPoint 檔案。
> - 需注意品牌資料的法律合規性，避免未經授權的使用。
> - 對於大型品牌資料集，轉換速度可能會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 這是原始的 DESIGN.md 資料庫，專注於品牌指導，而本專案則是將這些資料轉換為簡報圖像格式。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成圖像資源，而 PPT-Design-Prompt 專注於將品牌指導轉換為簡報圖像，功能上有明顯的差異。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 這個專案專注於將圖像轉換為提示，而本專案則是將品牌指導轉換為圖像，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | 這個專案專注於提供品牌指導資料，而 PPT-Design-Prompt 則是將這些資料轉換為簡報圖像，功能上有明顯的差異。 | 如果需要原始的品牌指導資料而非轉換工具，則應選擇此專案。 | low，因為這是原始資料庫，直接使用即可。 |
| [EvoLinkAI/awesome-gpt-image-2-prompts](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) | 這個專案專注於將圖像轉換為提示，而 PPT-Design-Prompt 專注於將品牌指導轉換為圖像，適用場景不同。 | 如果需要將圖像轉換為提示而非品牌資料轉換，則應選擇此專案。 | medium，因為需要重新調整資料格式和使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PPT-Design-Prompt** | **awesome-design-md** | **awesome-gpt-image-2-prompts** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個專案專注於提供品牌指導資料，而 PPT-Design-Prompt 則是將這些資料轉換為簡報圖像，功能上有明顯的差異。 | 這個專案專注於將圖像轉換為提示，而 PPT-Design-Prompt 專注於將品牌指導轉換為圖像，適用場景不同。 |
> | 遷移成本 | - | low，因為這是原始資料庫，直接使用即可。 | medium，因為需要重新調整資料格式和使用方式。 |
> | 適用場景 | 主要場景 | 如果需要原始的品牌指導資料而非轉換工具，則應選擇此專案。 | 如果需要將圖像轉換為提示而非品牌資料轉換，則應選擇此專案。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在處理大型品牌資料集時，轉換速度可能會變慢。
  - 解法：考慮分批處理資料集，或優化資料格式。
- **[HIGH]** 法律合規性問題，使用者需自行確認品牌資料的使用權限。
  - 解法：在使用前仔細查看品牌資料的版權聲明。
- [MEDIUM] 對於未提供品牌清單的情況，可能無法正確生成所有圖像。
  - 解法：建議提供 `catalog/brands.txt` 以確保完整性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速生成簡報圖像 | 非常適合 | 專案專注於將品牌指導轉換為簡報圖像，符合需求。 |
| 大型企業需要處理大量品牌資料 | 不適合 | 在處理大型資料集時可能會遇到性能瓶頸。 |
| 個人開發者想要快速上手簡報圖像生成 | 適合 | 簡單的 CLI 操作使得個人開發者能夠快速上手。 |
| 需要生成完整簡報的使用者 | 不適合 | 此專案不支援完整簡報生成，功能範圍有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成簡報圖像的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，且不存取敏感資料，使用時需注意品牌資料的法律合規性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與設計相關的工具搭配使用，特別是在簡報製作的環節。使用者可以在一個用 PowerPoint 的專案中，將此工具用於將品牌指導資料轉換為簡報圖像，具體做法是將 `DESIGN.md` 文件放在指定資料夾中，然後使用 CLI 指令進行轉換。此工具與 GitHub Actions 等 CI 工具的整合相對簡單，但在與其他設計工具的整合上可能需要額外的配置。整合的摩擦點主要在於使用者需自行確認品牌資料的使用權限，避免法律問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，設計師通常需要手動將品牌指導資料轉換為簡報圖像，這個過程既繁瑣又容易出錯。隨著品牌數量的增加，這種手動操作的需求變得越來越不切實際。這個工具的出現使得品牌資料的轉換變得自動化，減少了手動操作的需求。

這個專案代表了設計工具自動化的趨勢，未來可能會有更多類似的工具出現，以滿足設計師對於效率和準確性的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python 基本操作
- 了解簡報設計原則

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在正式專案中開始使用。

**成功指標**：簡報圖像生成時間減少 50%。

> [!warning] 退出計畫
> 若需退出此工具，所有設定和資料均可轉換為標準格式，方便切換至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
| Open Issues | 0 |
| 最後推送 | 2026-04-28 |
| 建立日期 | 2026-04-22 |
| Repo 大小 | 565 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Russell-cell/PPT-Design-Prompt) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Russell-cell](https://github.com/Russell-cell) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和提交。
**連結**：[文件](https://github.com/Russell-cell/PPT-Design-Prompt/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-22 ~ 2026-04-28）
> **活躍天數** 2 天 · **最新 commit** test

## README 摘錄

> [!info]- 展開查看原文 README
> # PPT-Design-Prompt
> 
> Convert `DESIGN.md` brand references into presentation-image oriented
> `DESIGN.md` files.
> 
> 1
> 
> This repository is for **slide image systems**, not full slide decks, not HTML
> presentations, and not product UI implementation. The goal is to turn web-first
> brand guidance into a format that image models and design agents can use when
> generating assets for PowerPoint, Keynote, PDF decks, or visual essays.
> 
> This project is adapted from the upstream `DESIGN.md` collection maintained at
> [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).
> Its purpose is to reinterpret those web and UI oriented references as
> presentation-image prompts and guidance.
> 
> ## Upstream source
> 
> The original source catalog for this project is:
> 
> - [https://github.com/VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
> 
> This repository is a derivative conversion tool and prompt library. It is not
> the original source catalog, and it should not be confused with the upstream
> project.
> 
> ## What this repo is
> 
> - a converter from source `DESIGN.md` files to `ppt-image//DESIGN.md`
> - a small Python CLI that can be installed and re-run locally
> - a generic presentation-image `DESIGN.md` at the repo root
> - a minimal synthetic example for CI and contributor onboarding
> 
> ## What this repo is not
> 
> - not a deck generator
> - not a PowerPoint exporter
> - not a screenshot scraper
> - not a promise that every brand source can be legally redistributed
> 
> ## Open-source boundary
> 
> This repository is structured so that **local downloaded sources stay local by
> default**.
> 
> - `source/` is ignored by `.gitignore`
> - local source files are expected to originate from
>   [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
> - the repository license applies to repo-authored code and docs
> - third-party brand names and source materials remain the property of their
>   owners
> - if you publish converted brand outputs, review the legal notes in
>   [ATTRIBUTION.md](./ATTRIBUTION.md)
> 
> If your local working copy already contains a populated `source/` directory,
> double-check it before making an initial public commit.
> 
> ## Repository layout
> 
> ```text
> .
> +-- DESIGN.md                      # generic presentation-image design guide
> +-- ATTRIBUTION.md                 # licensing and provenance boundary
> +-- catalog/brands.txt             # optional expected brand catalog
> +-- examples/minimal/              # synthetic example fixture
> +-- ppt-image/                     # generated outputs
> +-- scripts/                       # convenience wrapper for repo-local runs
> +-- src/awesome_design_md_ppt_images/
> |   +-- cli.py
> |   +-- converter.py
> +-- tests/
> ```
> 
> ## Install
> 
> ```bash
> python -m pip install -e .
> ```
> 
> ## Quick start
> 
> If you already have local source files under `source//DESIGN.md`, run:
> 
> ```bash
> design-md-ppt convert
> ```
> 
> This writes:
> 
> - converted files to `./ppt-image`
> - a manifest to `./conversion_manifest.json`
> 
> If you want explicit paths:
> 
> ```bash
> design-md-ppt convert \
>   --source-root ./source \
>   --output-root ./ppt-image \
>   --manifest ./conversion_manifest.json \
>   --brands-file ./catalog/brands.txt
> ```
> 
> ## Example run without third-party data
> 
> This repo ships with a synthetic example so contributors can test the toolchain
> without downloading live sources:
> 
> ```bash
> design-md-ppt convert \
>   --source-root ./examples/minimal/source \
>   --output-root ./examples/minimal/output \
>   --manifest ./examples/minimal/manifest.json \
>   --brands-file ./examples/minimal/brands.txt
> ```
> 
> ## Legacy script
> 
> For people who prefer the old workflow, the repo still includes:
> 
> ```bash
> python ./scripts/generate_ppt_image_designs.py
> ```
> 
> That wrapper runs the same converter with repo-root defaults.
> 
> ## Why the brand catalog exists
> 
> `catalog/brands.txt` is optional.
> 
> - if you provide it, the converter knows which brands are expected and can emit
>   placeholders for missing sources
> - if you omit it, the converter simply converts whatever exists under
>   `source/`
> 
> This makes the tool self-contained and removes the old dependency on a sibling
> `awesome-design-md_upstream` checkout.
> 
> ## Development
> 
> Run tests:
> 
> ```bash
> python -m unittest discover -s tests -v
> ```
> 
> Run the example conversion:
> 
> ```bash
> design-md-ppt convert \
>   --source-root ./examples/minimal/source \
>   --output-root ./tmp-example-output \
>   --manifest ./tmp-example-manifest.json \
>   --brands-file ./examples/minimal/brands.txt
> ```
> 
> ## Current repository state
> 
> This working tree currently contains generated outputs under `ppt-image/`. They
> can be useful as a public catalog, but they may still be too close to upstream
> brand materials for some maintainers' comfort level. If you want a stricter
> open-source posture, keep the code and generic docs, then selectively review or
> remove brand-specific generated outputs before your first public push.

## 延伸閱讀

相關概念：[[自動化]] · [[資料轉換]] · [[簡報設計]]

相關專案：[[VoltAgent--awesome-design-md|VoltAgent/awesome-design-md]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/Russell-cell/PPT-Design-Prompt)

## 相關收錄

> [!note]- 直接競品（同子分類：簡報工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "簡報工具" AND file.name != "Russell-cell--PPT-Design-Prompt"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Russell-cell--PPT-Design-Prompt"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Russell-cell--PPT-Design-Prompt" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "Russell-cell--PPT-Design-Prompt"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","資料轉換","簡報設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Russell-cell--PPT-Design-Prompt" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Russell-cell--PPT-Design-Prompt" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Russell-cell" AND file.name != "Russell-cell--PPT-Design-Prompt"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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
> const me = dv.page("Repos/Russell-cell--PPT-Design-Prompt");
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

> **2026-04-29** — 首次收錄
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

- [[2026-04-29|2026-04-29]] — 首次收錄，849 stars
