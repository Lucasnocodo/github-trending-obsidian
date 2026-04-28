---
repo: op7418/guizang-ppt-skill
url: https://github.com/op7418/guizang-ppt-skill
owner: op7418
owner_type: User
language: HTML
license: MIT
description: "A Claude Code Skill that turns prompts into horizontal-swipe magazine-style HTML decks — 10 layouts, 5 curated themes, WebGL hero backgrounds, single-file output."
homepage: ""
stars: 3449
stars_per_day: 862
forks: 355
open_issues: 4
created: 2026-04-23
pushed_at: 2026-04-26
first_seen: 2026-04-25
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "演示工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-25
use_case: "將提示轉換為橫向滑動的雜誌風格 HTML 演示文稿，提供 10 種佈局和 5 種主題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 51
readme_length: 3158
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-25"
star_history: "2026-04-25:1942,2026-04-26:2704,2026-04-27:3004,2026-04-28:3449"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "guizang-ppt-skill"
  - "op7418/guizang-ppt-skill"
  - "將提示轉換為橫向滑動的雜誌風格 HTML 演示文稿，提供 10 種佈局和 5 種主題。"
---

# guizang-ppt-skill

**1.9k** stars · **1.9k** stars/天 · 建立 1 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> 將提示轉換為橫向滑動的雜誌風格 HTML 演示文稿，提供 10 種佈局和 5 種主題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.9k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成個性化演示文稿的創意工作者或小型團隊。
> **一句話重點** 這個專案的獨特之處在於它將雜誌風格的設計理念融入到演示文稿的生成中，讓用戶能夠快速創建個性化的展示內容。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "演示工具" && p.file.name !== "op7418--guizang-ppt-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 演示工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成個性化演示文稿的效果，值得一試。

> [!abstract] 核心創新
> 提供單文件的 HTML 輸出，讓用戶無需伺服器即可直接展示演示文稿。

## 專案簡介

這個專案是一個 Claude Code 技能，專注於生成單文件的 HTML 橫向翻頁 PPT，設計靈感來自電子雜誌和電子墨水風格。用戶可以通過簡單的指令觸發技能，並在 6 步驟中逐步生成演示文稿：需求澄清、拷貝模板、填充內容、自檢、預覽和迭代。核心賣點在於其美學設計，使用 WebGL 背景和多種佈局選擇，讓演示文稿既美觀又易於使用。使用者只需將 `template.html` 複製到專案目錄中，並根據需求填寫內容，最終生成的 HTML 文件可直接在瀏覽器中打開，無需伺服器支持。這樣的設計使得使用者能夠快速創建個性化的演示文稿，適合用於線下分享和產品發布等場合。

技術上，專案依賴於 HTML 和 WebGL，並且不需要複雜的構建過程，這使得它對於非技術用戶也相對友好。與傳統的 PPT 工具相比，這個專案提供了更高的視覺吸引力和個性化選擇，特別適合需要獨特風格的演講者。相較於 Google Slides 和 PowerPoint，這個工具的優勢在於其單文件輸出和即時預覽功能，讓用戶能夠更快地迭代和調整內容。使用者在使用過程中可能會遇到的問題包括主題選擇的限制和對於複雜內容的支持不足，這使得它不適合用於需要多人協作或大量數據的場景。整體來看，這個專案在設計上強調了簡潔和美觀，適合小型團隊或個人使用。

**技術棧**：`HTML` · `WebGL`

## 重點功能

- 單文件 HTML 輸出 — 直接在瀏覽器中打開，無需伺服器支持。
- 10 種頁面佈局 — 包括開場封面、數據大字報、圖片網格等，滿足不同需求。
- 5 套主題色預設 — 墨水經典、靛藍瓷等，保護美學不允許自定義。
- WebGL 背景 — 提供流體和色散效果，增強視覺吸引力。
- 簡單的使用流程 — 6 步驟引導用戶完成演示文稿的生成。

## 快速開始

1. 安裝技能
```bash
git clone https://github.com/op7418/guizang-ppt-skill.git ~/.claude/skills/magazine-web-ppt
```
2. 檢查安裝
```bash
ls ~/.claude/skills/magazine-web-ppt/
```
3. 觸發技能
```bash
告訴 Claude Code '幫我做一份雜誌風 PPT'
```

## 程式碼範例

```html
# 前置條件
# 使用者需要安裝 Claude Code

```bash
git clone https://github.com/op7418/guizang-ppt-skill.git ~/.claude/skills/magazine-web-ppt
```
# 預期輸出
# 目錄中應該看到 SKILL.md、assets/、references/ 三項。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1942 stars（1942/天），forks 235（12.1%），這顯示出強烈的興趣和需求。作者 nocoo 在 AI 和技能開發領域有一定的經驗，這個專案解決了傳統 PPT 工具在美學和個性化方面的不足。沒有明確的觸發事件，但其獨特的設計理念和簡便的使用流程吸引了許多使用者。技術上，WebGL 的使用讓這個工具在視覺效果上更具吸引力，並且降低了使用門檻。高達 12.1% 的 forks/stars 比率顯示出許多開發者對此專案的實際修改和使用，這表明其在社群中的活躍度。

## 適合誰使用

**目標受眾**：需要快速生成個性化演示文稿的創意工作者或小型團隊。

> [!example] 使用場景
> - 產品經理用它來生成產品發布會的演示文稿，因為其美觀的設計和簡單的使用流程能快速吸引觀眾注意。
> - 自由職業者用它來創建個性化的作品集展示，因為單文件輸出讓分享變得簡單方便。
> - 教師用它來製作線下課堂的簡報，因為其多種佈局選擇能夠有效展示不同類型的內容。

## 架構分析

這個專案的架構設計以單文件 HTML 為核心，因為這樣可以簡化使用流程，讓用戶無需依賴伺服器或複雜的構建過程。資料流方面，使用者從需求澄清開始，然後根據模板填充內容，最終生成的 HTML 文件可以直接在瀏覽器中打開。選擇單文件輸出而非傳統的多文件結構，讓使用者能夠更方便地分享和展示。這樣的設計雖然犧牲了一些對於大型資料集的支持，但在小型演示文稿中卻能提供更高的靈活性和便捷性。整體上，這個架構適合小型團隊或個人使用，並且能夠快速迭代和調整內容。

## 技術深入分析

這個專案的核心技術機制是基於 HTML 和 WebGL 的單文件輸出，這使得用戶能夠在無需伺服器的情況下直接展示內容。效能上，因為是靜態 HTML，對於小型演示文稿的加載速度非常快，冷啟動時間幾乎為零。設計上選擇了 WebGL 來增強視覺效果，這樣的選擇雖然增加了學習曲線，但也提供了更豐富的視覺體驗。依賴樹方面，專案相對輕量，主要依賴於 HTML 和 CSS，這降低了維護成本。技術風險方面，對於大型資料集的支持不足可能會在未來的擴展中成為瓶頸，特別是在需要展示大量數據的情況下。與主流框架的整合難度較低，因為它不依賴於特定的後端技術，適合快速開發和迭代。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，讓新手能夠快速上手。安裝過程順暢，無需複雜的配置。使用流程也有良好的引導，適合新手使用。文件目前僅提供中文版本，可能對非中文使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 視覺效果吸引人，適合創意展示。
> - 使用流程簡單，適合非技術用戶。
> - 單文件輸出方便分享和展示。

> [!danger] 缺點
> - 不適合複雜的數據展示。
> - 主題選擇有限，無法自定義。
> - 不支持多人協作，限制了使用場景。

> [!warning] 注意事項
> - 不適合大段表格數據的展示。
> - 不支持多人協作編輯，因為是靜態 HTML。
> - 對於內容密度高的培訓課件不夠理想。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於生成更為靜態的報告，適合需要詳細數據展示的場合，而本專案則更強調視覺效果和個性化。 |
| [MiniMax-AI/skills](https://github.com/MiniMax-AI/skills) | 這個工具提供了更為多樣化的技能選擇，但在視覺呈現上不如本專案的雜誌風格。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Google Slides | Google Slides 提供了更強大的協作功能，但在視覺設計上不如本專案的雜誌風格。 | 如果需要多人協作編輯和即時更新，Google Slides 是更好的選擇。 | medium，因為需要將內容從靜態 HTML 轉換為可編輯的格式。 |
| Microsoft PowerPoint | PowerPoint 提供了更全面的功能和模板，但缺乏本專案的即時預覽和單文件輸出特性。 | 如果需要專業的演示文稿功能和多樣的模板選擇，PowerPoint 更為合適。 | high，因為需要重新設計和調整內容以符合 PowerPoint 格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guizang-ppt-skill** | **Google Slides** | **Microsoft PowerPoint** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Google Slides 提供了更強大的協作功能，但在視覺設計上不如本專案的雜誌風格。 | PowerPoint 提供了更全面的功能和模板，但缺乏本專案的即時預覽和單文件輸出特性。 |
> | 遷移成本 | - | medium，因為需要將內容從靜態 HTML 轉換為可編輯的格式。 | high，因為需要重新設計和調整內容以符合 PowerPoint 格式。 |
> | 適用場景 | 主要場景 | 如果需要多人協作編輯和即時更新，Google Slides  | 如果需要專業的演示文稿功能和多樣的模板選擇，PowerPoi |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 主題選擇有限，無法自定義，可能影響個性化需求
  - 解法：選擇最符合需求的主題，或考慮其他工具
- **[HIGH]** 不支持複雜的數據展示，對於需要大量數據的演示不夠理想
  - 解法：考慮使用其他專案進行數據展示
- [MEDIUM] 不支持多人協作，可能影響團隊使用
  - 解法：將內容分開編輯後再合併

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的產品發布會 | 非常適合 | 視覺效果吸引人，能快速吸引觀眾注意。 |
| 大型企業的培訓課程 | 不適合 | 不支持大段表格數據的展示，信息密度不夠。 |
| 自由職業者的作品集展示 | 適合 | 單文件輸出方便分享和展示。 |
| 學術會議的報告 | 普通 | 雖然有一定的視覺吸引力，但對於數據展示不夠強大。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成個性化演示文稿的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，且不存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Code 一起使用，通常在開發和展示環節中發揮作用。在一個用 Claude Code 的專案中，你可以用這個工具來生成演示文稿，具體做法是通過簡單的指令觸發技能。它與主流 CI 工具（如 GitHub Actions）相容性良好，並且可以與多種 IDE（如 VS Code）整合。整合的摩擦點主要在於需要確保 Claude Code 的環境配置正確，否則可能無法正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，許多用戶依賴於傳統的 PPT 工具來生成演示文稿，但這些工具往往缺乏個性化和視覺吸引力。隨著 WebGL 技術的進步，這個專案能夠提供更豐富的視覺效果，並且簡化了使用流程。這個工具代表了演示文稿生成的一個新趨勢，未來可能會看到更多類似工具的出現，特別是在需要快速生成內容的場景中。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 HTML
- 了解基本的 WebGL 概念

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：寫出 best practices 文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：演示文稿生成時間減少 50%。

> [!warning] 退出計畫
> 所有設定存在標準 HTML 格式，可以輕鬆轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
| Forks | 235 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-23 |
| Repo 大小 | 51 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/op7418/guizang-ppt-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nocoo](https://github.com/nocoo) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續更新和維護。
**連結**：[文件](https://github.com/op7418/guizang-ppt-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-24）
> **活躍天數** 2 天 · **最新 commit** feat: implement ESC overview index (#1)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/op7418/guizang-ppt-skill/issues/6) | 请问，能适配Codex app吗？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Magazine Web PPT · 电子杂志风网页 PPT Skill
> 
> > 🌏 **English version: [README.en.md](./README.en.md)**
> 
> 一个 [Claude Code / Claude Agent Skills](https://agentskills.io/) 技能,用于生成**单文件 HTML 横向翻页 PPT**,视觉基调是"**电子杂志 × 电子墨水**"——像 *Monocle* 贴上了代码的样子。
> 
> > 由 [歸藏](https://x.com/op7418) 在"一人公司:被 AI 折叠的组织"、"一种新的工作方式"等线下分享中沉淀而成,踩过的每一个坑都写进了 `checklist.md`。
> 
> ## 效果
> 
> - 🖋 **衬线大标题 + 非衬线正文 + 等宽元数据**的三级字体分工
> - 🌊 **WebGL 流体/色散背景**,hero 页可见,正文页克制
> - 📐 **横向左右翻页**:键盘 ← → / 滚轮 / 触屏滑动 / 底部圆点 / ESC 索引
> - 🎨 **5 套主题色预设**:墨水经典 / 靛蓝瓷 / 森林墨 / 牛皮纸 / 沙丘
> - 🧩 **10 种页面布局**:开场封面、章节幕封、数据大字报、左文右图、图片网格、Pipeline、悬念问题、大引用、Before/After 对比、图文混排
> - 📄 **单文件 HTML**:不需要构建、不需要服务器,浏览器直接打开
> 
> ## 适合 / 不适合
> 
> **✅ 合适**:线下分享 / 行业内部讲话 / 私享会 / AI 产品发布 / demo day / 带强烈个人风格的演讲
> 
> **❌ 不合适**:大段表格数据 / 培训课件(信息密度不够)/ 需要多人协作编辑(静态 HTML)
> 
> ## 安装
> 
> ### 方式一:把下面这段话直接发给 AI(推荐)
> 
> > 帮我安装 `guizang-ppt-skill` 这个 Claude Code skill。请按下面步骤做:
> >
> > 1. 确保 `~/.claude/skills/` 目录存在(不存在就创建)
> > 2. 执行 `git clone https://github.com/op7418/guizang-ppt-skill.git ~/.claude/skills/magazine-web-ppt`
> > 3. 验证:`ls ~/.claude/skills/magazine-web-ppt/` 应该看到 `SKILL.md`、`assets/`、`references/` 三项
> > 4. 告诉我安装好了,之后我说"做一份杂志风 PPT"之类的话就会触发这个 skill
> 
> 把这段话复制粘贴给 Claude Code / Cursor / 任何有 shell 权限的 AI Agent,它会自动完成安装。
> 
> ### 方式二:手动命令行
> 
> ```bash
> git clone https://github.com/op7418/guizang-ppt-skill.git ~/.claude/skills/magazine-web-ppt
> ```
> 
> ### 触发方式
> 
> 装好后,Claude Code 会在对话里自动发现并调用这个 skill。触发关键词:
> 
> - "帮我做一份杂志风 PPT"
> - "生成一个 horizontal swipe deck"
> - "editorial magazine style presentation"
> - "electronic ink 风格演讲 slides"
> 
> ## 使用流程
> 
> Skill 本身是结构化的 6 步工作流,Claude 会逐步引导:
> 
> 1. **需求澄清** — 6 问清单:受众、时长、素材、图片、主题色、硬约束
> 2. **拷贝模板** — `assets/template.html` → 项目目录,改 ``,换主题色
> 3. **填充内容** — 从 10 种 layout 骨架里挑、粘、改文案(先做类名预检 + 主题节奏规划)
> 4. **自检** — 对照 `references/checklist.md`,P0 级问题必须全过
> 5. **预览** — 浏览器直接打开
> 6. **迭代** — inline style 改字号/高度/间距
> 
> 详细说明见 [`SKILL.md`](./SKILL.md)。
> 
> ## 目录结构
> 
> ```
> magazine-web-ppt/
> ├── SKILL.md              ← Skill 主文件:工作流、原则、常见错误
> ├── README.md             ← 本文件
> ├── assets/
> │   └── template.html     ← 完整可运行的种子 HTML(CSS + WebGL + 翻页 JS 全配好)
> └── references/
>     ├── components.md     ← 组件手册(字体、色、网格、图标、callout、stat、pipeline)
>     ├── layouts.md        ← 10 种页面布局骨架(可直接粘贴)
>     ├── themes.md         ← 5 套主题色预设(只能选不能自定义)
>     └── checklist.md      ← 质量检查清单(P0 / P1 / P2 / P3 分级)
> ```
> 
> ## 主题色预设
> 
> 从 `references/themes.md` 里选一套——**不允许自定义 hex 值**,保护美学比给自由更重要。
> 
> | 主题 | 适合场景 |
> |------|---------|
> | 🖋 墨水经典 | 通用默认、商业发布、不知道选啥 |
> | 🌊 靛蓝瓷 | 科技 / 研究 / AI / 技术发布会 |
> | 🌿 森林墨 | 自然 / 可持续 / 文化 / 非虚构 |
> | 🍂 牛皮纸 | 怀旧 / 人文 / 文学 / 独立杂志 |
> | 🌙 沙丘 | 艺术 / 设计 / 创意 / 画廊 |
> 
> 切换主题只需替换 `template.html` 开头 `:root{}` 里的 6 行变量,其他 CSS 全走 `var(--...)`。
> 
> ## 核心设计原则
> 
> 1. **克制优于炫技** — WebGL 背景只在 hero 页透出
> 2. **结构优于装饰** — 信息靠字号 + 字体对比 + 网格留白,不用阴影和浮动卡片
> 3. **图片是第一公民** — 只裁底部,顶部和左右完整
> 4. **节奏靠 hero 页** — hero / non-hero 交替,才不累眼睛
> 5. **术语统一** — Skills 就是 Skills,不中英混译
> 
> ## 视觉参考
> 
> - [*Monocle*](https://monocle.com) 杂志的版式
> - YC Garry Tan "Thin Harness, Fat Skills"
> - 歸藏线下分享 PPT 系列
> 
> ## 贡献
> 
> Bug、排版问题、新布局需求——欢迎开 Issue 或 PR。改动请优先:
> 
> - 在 `template.html` 里补类,不要让 layouts.md 使用未定义的类
> - 把踩过的坑写到 `checklist.md` 对应的 P0 / P1 / P2 / P3 级别
> - 新主题色进 `themes.md` 并给出适合的场景
> 
> ## License
> 
> MIT © 2026 [op7418](https://github.com/op7418)

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[OpenMOSS--MOSS-TTS-Nano|OpenMOSS/MOSS-TTS-Nano]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]]

[GitHub](https://github.com/op7418/guizang-ppt-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：演示工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "演示工具" AND file.name != "op7418--guizang-ppt-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "op7418--guizang-ppt-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "op7418--guizang-ppt-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "op7418--guizang-ppt-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "op7418--guizang-ppt-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "op7418--guizang-ppt-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "op7418" AND file.name != "op7418--guizang-ppt-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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
> const me = dv.page("Repos/op7418--guizang-ppt-skill");
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

> **2026-04-25** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 再次上榜，3.4k stars
- [[2026-04-27|2026-04-27]] — 再次上榜，3.0k stars
- [[2026-04-26|2026-04-26]] — 再次上榜，2.7k stars
- [[2026-04-25|2026-04-25]] — 首次收錄，1.9k stars
