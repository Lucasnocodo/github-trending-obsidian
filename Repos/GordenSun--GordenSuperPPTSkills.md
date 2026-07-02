---
repo: GordenSun/GordenSuperPPTSkills
url: https://github.com/GordenSun/GordenSuperPPTSkills
owner: GordenSun
owner_type: User
language: Python
license: N/A
description: "AI PPT赛道终结者，史上最最最强 PPT Skill！！！  使用GPT生成豪华的图片格式PPT，然后转换为完全可编辑的PPTX文件。"
homepage: ""
stars: 1318
stars_per_day: 55
forks: 124
open_issues: 1
created: 2026-06-07
pushed_at: 2026-06-07
first_seen: 2026-06-10
week: "2026-W24"
month: "2026-06"
category: "生產力"
subcategory: "簡報工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-10
use_case: "讓 AI 自動生成豪華的可編輯 PPT，從圖片格式轉換到 PPTX 文件。"
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
star_history: "2026-06-10:614,2026-06-11:730,2026-06-12:788,2026-06-13:846,2026-06-14:885,2026-06-16:955,2026-06-19:1067,2026-06-20:1082,2026-06-26:1186,2026-07-02:1318"
tags:
  - github
  - "category/生產力"
  - "lang/python"
aliases:
  - "GordenSuperPPTSkills"
  - "GordenSun/GordenSuperPPTSkills"
  - "讓 AI 自動生成豪華的可編輯 PPT，從圖片格式轉換到 PPTX 文件。"
---

# GordenSuperPPTSkills

**1.3k** stars · **55** stars/天 · 建立 24 天前 · Python · 未標註授權

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
> 讓 AI 自動生成豪華的可編輯 PPT，從圖片格式轉換到 PPTX 文件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (55 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 24 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高質量簡報的商業專業人士或教育工作者。
> **一句話重點** 這個專案展示了如何利用 AI 自動化生成和轉換 PPT，極大提升了簡報製作的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GordenSun--GordenSuperPPTSkills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "簡報工具" && p.file.name !== "GordenSun--GordenSuperPPTSkills" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習、2 小時整合，得到高效的簡報生成工具，值得一試。

> [!abstract] 核心創新
> 核心使用 GPT 的生圖能力和視覺解析能力，實現圖片到可編輯 PPT 的轉換。

## 專案簡介

Gorden Super PPT Skills 是一個專為生成和轉換 PPT 文件而設計的工具，核心流程是使用 GPT 生成圖片格式的 PPT，然後將其轉換為可編輯的 PPTX 文件。用戶只需提供主題或內容，工具會自動生成每頁的圖片和相應的 PPTX 文件，這樣的設計大幅簡化了 PPT 的製作過程，特別適合需要高效製作簡報的用戶。工具分為三個獨立的技能模組：GordenImagePPTGen 用於生成圖片格式的 PPT，GordenImage2PPTX 則將圖片轉換為可編輯的 PPTX，而 GordenSuperPPTSkill 則是將前兩者串聯起來，提供一鍵式的解決方案。這種模組化設計允許用戶根據需求選擇使用，靈活性高。技術上，這個工具依賴於 Python 和 GPT 的圖像生成能力，並使用 python-pptx、Pillow 和 NumPy 作為主要依賴，這些選擇使得工具在生成和處理 PPT 文件時效率高且功能強大。

與傳統的 PPT 製作工具相比，這個工具能夠自動化生成過程，節省大量時間，特別是在需要快速製作大量簡報的情境下。使用者只需簡單的指令即可獲得高質量的 PPT，這在商業簡報、學術報告等場合都非常實用。需要注意的是，圖片轉換過程會消耗較多的計算資源，特別是在處理高解析度圖片時，這可能會影響使用者的使用體驗。整體來看，這個專案的成熟度尚在 beta 階段，適合對 PPT 製作有高需求的團隊或個人使用，未來可能會進一步優化性能和擴展功能。

**技術棧**：`Python` · `python-pptx` · `Pillow` · `NumPy`

## 重點功能

- GordenImagePPTGen — 生成圖片格式的 PPT，輸入主題和內容，輸出每頁的 PNG 和 PPTX。
- GordenImage2PPTX — 將圖片格式的 PPT 轉換為可編輯的 PPTX，支持背景、框架、圖標和文本的分層處理。
- GordenSuperPPTSkill — 一鍵執行圖片生成和轉換，簡化使用流程。
- 支持高信息密度和複雜排版的 PPT 生成，滿足商業需求。
- 自包含的技能模組，方便用戶按需選擇安裝和使用。

## 快速開始

1. 安裝 GordenImagePPTGen
```bash
cp -R GordenImagePPTGen "${CODEX_HOME:-$HOME/.codex}/skills/GordenImagePPTGen"
```
2. 安裝 GordenImage2PPTX
```bash
cp -R GordenImage2PPTX "${CODEX_HOME:-$HOME/.codex}/skills/GordenImage2PPTX"
```
3. 安裝 GordenSuperPPTSkill
```bash
cp -R GordenSuperPPTSkill "${CODEX_HOME:-$HOME/.codex}/skills/GordenSuperPPTSkill"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 1318 stars（55/天），forks 124（9.4%），這顯示出用戶對於自動化簡報生成的需求。作者 GordenSun 在 PPT 自動化領域有一定的專業背景，這個工具解決了傳統 PPT 製作過程繁瑣的痛點，特別是對於需要快速生成簡報的用戶。社群的反饋也顯示出對於這個工具的興趣，尤其是在商業和教育領域。技術上，GPT 的進步使得這種自動化生成變得可行，並且能夠提供高質量的輸出。forks/stars 比率為 9.4%，顯示出不少用戶對此工具進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要快速生成高質量簡報的商業專業人士或教育工作者。

> [!example] 使用場景
> - 商業簡報製作者用它來快速生成高質量的簡報，因為手動製作 PPT 耗時且容易出錯。
> - 教育工作者用它來製作教學用的 PPT，因為可以快速轉換圖片為可編輯的格式，節省了準備時間。
> - 自由工作者用它來為客戶提供專業的簡報，因為能夠在短時間內生成多個版本的簡報，提升工作效率。

## 架構分析

這個專案採用模組化的架構設計，每個技能都是獨立的模組，這樣的設計使得用戶可以根據需求選擇安裝和使用。GordenImagePPTGen 負責生成圖片格式的 PPT，GordenImage2PPTX 則專注於將圖片轉換為可編輯的 PPTX，GordenSuperPPTSkill 則是將這兩者串聯起來，提供一鍵式的解決方案。資料流方面，首先用戶輸入主題或內容，然後通過 GPT 生成圖片，最後將圖片解析為可編輯的 PPTX 文件。

這樣的設計使得整個過程高效且易於使用。選擇 Python 作為開發語言，因為其在處理圖像和 PPT 文件方面擁有強大的庫支持，這樣的選擇使得開發過程更加順利。整體架構的擴展性良好，未來可以根據需求增加更多的功能模組。

## 技術深入分析

Gorden Super PPT Skills 的核心技術在於利用 GPT 的圖像生成和解析能力，這使得從圖片到可編輯 PPT 的轉換成為可能。具體來說，GordenImagePPTGen 使用 GPT 生成每頁的圖片，並將其輸出為 PNG 格式，這一過程中涉及到的演算法和資料結構確保了生成圖片的質量和信息密度。GordenImage2PPTX 則使用視覺解析技術，將生成的圖片分層處理，提取背景、框架、圖標和文本，這樣的設計使得最終生成的 PPTX 文件能夠保持高質量的編輯能力。整體來看，這個工具能夠處理的資料量相對較小，適合快速生成簡報，但在處理高解析度圖片時可能會遇到性能瓶頸。選擇 Python 作為開發語言，因為其在圖像處理和文件操作方面擁有豐富的庫支持，這樣的選擇使得開發過程更加高效。整體架構的設計考慮到了未來的擴展性，未來可以根據需求增加更多功能模組，這為用戶提供了更大的靈活性和選擇空間。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟，並且有示例指令。安裝過程相對順暢，但需要注意計算資源的要求。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 自動化生成過程，節省時間和精力。
> - 高質量的圖片生成，滿足商業需求。
> - 模組化設計，靈活性高，適合不同需求的用戶。

> [!danger] 缺點
> - 僅限於 Codex 環境使用，限制了使用範圍。
> - 對計算資源要求較高，可能影響使用體驗。
> - 需要一定的 GPT 使用額度，成本較高。

> [!warning] 注意事項
> - 僅適用於 Codex，無法在其他環境中運行。
> - 圖片轉換過程需要較高的計算資源，可能影響使用體驗。
> - 生成過程中需要一定的 GPT 使用額度，轉換一張圖片約耗費 Plus 訂閱 5 小時的 10%。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化生成工具，但專注於圖像創建而非 PPT 轉換，適合需要圖像生成的場景。 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | 前者專注於 PPT 的基本生成，而本專案則增加了圖片轉換為可編輯格式的功能，適合需要更高靈活性的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於圖像生成，並不提供 PPT 轉換功能，適合需要生成圖像的場景。 | 如果你的需求主要是生成高質量的圖像，而不需要轉換為 PPT 格式。 | low，因為主要使用圖像生成的功能，與本專案的使用方式相似。 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | 專注於基本的 PPT 生成，缺乏圖片轉換的功能，適合簡單的 PPT 製作需求。 | 如果你的需求僅限於生成 PPT，而不需要將圖片轉換為可編輯格式。 | medium，因為需要重新適應不同的功能模組。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **GordenSuperPPTSkills** | **agent-sprite-forge** | **GordenPPTSkill** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於圖像生成，並不提供 PPT 轉換功能，適合需要生成圖像的場景。 | 專注於基本的 PPT 生成，缺乏圖片轉換的功能，適合簡單的 PPT 製作需求。 |
> | 遷移成本 | - | low，因為主要使用圖像生成的功能，與本專案的使用方式相似。 | medium，因為需要重新適應不同的功能模組。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是生成高質量的圖像，而不需要轉換為 PPT  | 如果你的需求僅限於生成 PPT，而不需要將圖片轉換為可編輯格 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合對 PPT 製作有高需求的團隊或個人使用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Codex 環境外無法運行，限制了使用範圍
  - 解法：目前無法解決，需在 Codex 環境中使用
- [MEDIUM] 圖片轉換過程可能耗費大量計算資源，影響使用體驗
  - 解法：建議在計算資源充足的環境中使用
- [MEDIUM] 對於高解析度圖片的處理可能會遇到性能瓶頸
  - 解法：可考慮降低圖片解析度以提升性能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端簡報製作 | 非常適合 | 能快速生成高質量的簡報，節省時間和精力。 |
| 大型企業的內部簡報需求 | 適合 | 能夠處理多種簡報需求，靈活性高。 |
| 需要高效製作教學用簡報的教育工作者 | 非常適合 | 能快速轉換圖片為可編輯的格式，提升準備效率。 |
| 對計算資源要求較高的高解析度簡報製作 | 不適合 | 可能會遇到性能瓶頸，影響使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到高效的簡報生成工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅在 Codex 環境中運行，不存取敏感資料。依賴的庫有良好的安全性記錄，適合在 CI/CD 中使用。

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
| Forks | 124 |
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

**社群活躍度**：社群活躍度中等，問題回應速度尚可。
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

相關概念：[[自動化]] · [[機器學習]] · [[簡報設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]]

[GitHub](https://github.com/GordenSun/GordenSuperPPTSkills)

## 相關收錄

> [!note]- 直接競品（同子分類：簡報工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "簡報工具" AND file.name != "GordenSun--GordenSuperPPTSkills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "GordenSun--GordenSuperPPTSkills"
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
> const concepts = ["自動化","機器學習","簡報設計"];
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
