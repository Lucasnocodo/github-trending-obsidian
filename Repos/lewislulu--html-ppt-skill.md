---
repo: lewislulu/html-ppt-skill
url: https://github.com/lewislulu/html-ppt-skill
owner: lewislulu
owner_type: User
language: HTML
license: MIT
description: "HTML PPT Studio — AgentSkill with 24 themes, 31 layouts, 20+ animations for building professional HTML presentations"
homepage: ""
stars: 1762
stars_per_day: 294
forks: 195
open_issues: 5
created: 2026-04-15
pushed_at: 2026-04-17
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "其他"
subcategory: "簡報工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "提供專業 HTML 簡報製作的工具，擁有多主題和佈局選擇。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-25"
contributor_count: 1
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 9775
readme_length: 9635
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:909,2026-04-19:1144,2026-04-20:1434,2026-04-21:1656,2026-04-22:1762"
tags:
  - github
  - "category/其他"
  - "lang/html"
  - easy_install
aliases:
  - "html-ppt-skill"
  - "lewislulu/html-ppt-skill"
  - "提供專業 HTML 簡報製作的工具，擁有多主題和佈局選擇。"
---

# html-ppt-skill

**909** stars · **455** stars/天 · 建立 2 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> 提供專業 HTML 簡報製作的工具，擁有多主題和佈局選擇。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (455 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成專業簡報的開發者和設計師。
> **一句話重點** 這個專案的核心在於提供一個靈活且易於使用的簡報工具，特別適合需要快速生成專業簡報的使用者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "簡報工具" && p.file.name !== "lewislulu--html-ppt-skill" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成專業簡報的效果，值得採用。

> [!abstract] 核心創新
> 提供了一個無需構建的純靜態簡報生成工具，並具備演示者模式。

## 專案簡介

這個專案提供了一個強大的 HTML 簡報製作工具，支持 36 種主題、31 種佈局和 47 種動畫，並且具備真實的演示者模式。使用者只需執行 `npx skills add https://github.com/lewislulu/html-ppt-skill` 即可安裝，隨後可以透過自然語言指令生成簡報。這樣的設計不僅提升了使用者的創作效率，還確保了簡報的視覺一致性，因為所有預覽都是基於相同的 HTML 和 CSS 渲染。專案採用純靜態的 HTML/CSS/JS，無需構建步驟，這使得部署變得簡單且快速。其演示者模式允許使用者在演講時查看當前和下一張幻燈片、講稿和計時器，並且這些視窗之間的同步非常流暢。

技術上，專案使用了 CSS 動畫和 Canvas FX，這些動畫在簡報中提供了豐富的視覺效果，並且所有的佈局和主題都是以 CSS Tokens 設計，便於快速更換風格。與其他簡報工具相比，如 Google Slides 和 PowerPoint，這個工具的優勢在於其靈活性和無需依賴網路的特性，適合需要快速生成簡報的開發者和設計師。使用者在使用過程中可能會遇到的問題包括主題和佈局的選擇困難，但這些都可以透過其展示頁面輕鬆解決。這個專案目前處於穩定階段，適合中小型團隊使用，未來可能會增加更多主題和功能以擴展其應用範圍。

**技術棧**：`HTML` · `CSS` · `JavaScript` · `Shell`

## 重點功能

- 36 種主題 — 每個主題都是純 CSS 文件，輕鬆切換整體風格。
- 31 種佈局 — 包含多種頁面佈局，適合不同內容需求。
- 47 種動畫 — 包括 27 種 CSS 動畫和 20 種 Canvas FX，增強簡報的視覺效果。
- 演示者模式 — 使用 `S` 鍵開啟，提供當前幻燈片、下一張預覽、講稿和計時器。
- 無需構建步驟 — 完全靜態的 HTML/CSS/JS，便於快速部署和使用。

## 快速開始

1. 安裝簡報技能
```bash
npx skills add https://github.com/lewislulu/html-ppt-skill
```
2. 創建新的簡報
```bash
./scripts/new-deck.sh my-talk
```
3. 開啟主題展示頁面
```bash
open templates/theme-showcase.html
```

## 程式碼範例

```html
[
  "# 前置條件：安裝完成後，使用以下指令創建簡報。",
  "./scripts/new-deck.sh my-talk",
  "# 預期輸出：生成一個新的簡報文件夾，包含基本模板。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 909 stars（454.5/天），forks 100（11.0%），顯示出強勁的增長潛力。作者 lewislulu 在開源社群中有一定的知名度，這個專案解決了傳統簡報工具在靈活性和視覺效果上的不足，特別是針對開發者和設計師的需求。最近的推廣活動和社群的討論也為其帶來了關注。技術上，隨著靜態網站生成的流行，這個工具的無需構建特性使其更具吸引力。高達 11% 的 forks/stars 比率顯示出許多人對這個工具的實際修改和使用，反映了其在社群中的實用性。

## 適合誰使用

**目標受眾**：需要快速生成專業簡報的開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來快速生成技術分享簡報，因為其支持自然語言指令生成，節省了設計時間。
> - 設計師用它來創建多樣化的簡報，因為擁有 36 種主題和 31 種佈局可供選擇，滿足不同風格需求。
> - 教育工作者用它來製作課程簡報，因為其演示者模式能夠幫助他們在演講時保持流暢。

## 架構分析

這個專案採用純靜態的 HTML/CSS/JS 架構，設計目標是簡化使用者的部署流程。所有的主題和佈局都是以 CSS Tokens 設計，這樣的設計使得整個簡報的風格可以快速調整。資料流方面，演示者模式透過 `BroadcastChannel` 同步當前幻燈片和講稿，確保使用者在演講時的流暢性。選擇純靜態的架構雖然犧牲了動態內容的靈活性，但卻大幅降低了使用門檻和部署複雜度。擴展性方面，未來可以通過增加更多主題和動畫來提升功能，但目前的設計已經足夠應對大多數簡報需求。

## 技術深入分析

這個專案的核心技術機制在於使用純靜態的 HTML/CSS/JS，這使得部署變得極為簡單。所有的主題和佈局都是以 CSS Tokens 設計，這樣的設計不僅提升了可維護性，還能夠快速更換整體風格。效能方面，由於是靜態內容，頁面加載速度快，且不需要伺服器端的處理。設計取捨方面，選擇純靜態的架構雖然限制了動態內容的使用，但卻大幅降低了使用者的學習曲線。技術風險方面，未來如果需要支持動態內容，可能需要重新考慮架構設計。整合方面，這個工具可以輕鬆與現有的前端工具鏈整合，並且不會對 CI/CD pipeline 造成影響。整體而言，這個專案在簡報生成的靈活性和易用性上做得非常出色。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含詳細的安裝和使用說明。安裝過程非常順暢，無需特別配置。文件中提供了多語言支持，對於新手來說，能夠在 30 分鐘內成功運行。整體上，這是一個非常友好的入門體驗。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需複雜的安裝步驟。
> - 提供多樣化的主題和佈局選擇，滿足不同需求。
> - 演示者模式提升了演講的專業性和流暢性。

> [!danger] 缺點
> - 不支持動態內容，僅適合靜態簡報。
> - 對於大型簡報，可能需要手動調整幻燈片效果。
> - 對於某些舊版瀏覽器的兼容性可能不足。

> [!warning] 注意事項
> - 目前僅支持靜態內容，不支持動態數據加載。
> - 演示者模式需要在支持的瀏覽器中運行，可能不兼容某些舊版瀏覽器。
> - 對於大型簡報，可能需要手動管理幻燈片的切換效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於靜態簡報生成，而本專案提供了更豐富的主題和動畫選擇。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了即時協作功能，而本專案則專注於個人簡報製作。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 這個工具專注於筆記管理，而本專案專注於簡報的視覺效果和演示者功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Google Slides | Google Slides 提供了即時協作功能，而本專案則專注於靜態簡報生成，無需網路連接。 | 如果需要團隊協作和即時編輯，Google Slides 是更好的選擇。 | medium，因為需要將內容從一個平台轉移到另一個。 |
| PowerPoint | PowerPoint 提供了豐富的功能和模板，而本專案則專注於簡單的靜態簡報生成。 | 如果需要更複雜的動畫和功能，PowerPoint 更為合適。 | high，因為需要重新設計簡報格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **html-ppt-skill** | **Google Slides** | **PowerPoint** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Google Slides 提供了即時協作功能，而本專案則專注於靜態簡報生成，無需網路連接。 | PowerPoint 提供了豐富的功能和模板，而本專案則專注於簡單的靜態簡報生成。 |
> | 遷移成本 | - | medium，因為需要將內容從一個平台轉移到另一個。 | high，因為需要重新設計簡報格式。 |
> | 適用場景 | 主要場景 | 如果需要團隊協作和即時編輯，Google Slides 是更 | 如果需要更複雜的動畫和功能，PowerPoint 更為合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的簡報需求，但不建議用於大型商業演示。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些舊版瀏覽器中可能無法正常顯示動畫效果。
  - 解法：建議使用最新版本的瀏覽器。
- [MEDIUM] 對於大型簡報，切換幻燈片時可能會出現延遲。
  - 解法：建議簡化幻燈片內容以提高性能。
- [MEDIUM] 某些主題在不同顯示器上顏色可能不一致。
  - 解法：在不同顯示器上測試並調整主題顏色。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡報需求不高，且需要快速生成簡報。 |
| 大型企業的正式簡報 | 不適合 | 需要更複雜的功能和動態內容。 |
| 教育機構的課程簡報 | 適合 | 能夠快速生成專業的教學簡報。 |
| 設計師的作品展示 | 非常適合 | 多樣的主題和佈局選擇滿足設計需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成專業簡報的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與前端開發框架搭配使用，特別是在簡報生成的工作流中。實際整合範例是，在一個用 React 的專案中，可以使用這個工具生成簡報，具體做法是將生成的 HTML 文件嵌入到 React 組件中。支援 GitHub Actions 進行自動化部署，並且可以與 VS Code 整合，提供即時預覽功能。整合的摩擦點主要在於需要手動管理 CSS 和 JS 的引入，可能會造成樣式衝突。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
| Forks | 100 |
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 9.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lewislulu/html-ppt-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 53
>     "CSS" : 30
>     "JavaScript" : 17
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lewislulu](https://github.com/lewislulu) | 19 |

## 社群與生態

**社群活躍度**：社群活躍度良好，最近有更新和問題解決。
**連結**：[文件](https://github.com/lewislulu/html-ppt-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-17 ~ 2026-04-17）
> **活躍天數** 1 天 · **最新 commit** docs: add presenter mode section + Chinese README

## README 摘錄

> [!info]- 展開查看原文 README
> # html-ppt — HTML PPT Studio
> 
> > A world-class AgentSkill for producing professional HTML presentations in
> > **36 themes**, **15 full-deck templates**, **31 page layouts**,
> > **47 animations** (27 CSS + 20 canvas FX), and a **true presenter mode**
> > with pixel-perfect previews + speaker script + timer — all pure static
> > HTML/CSS/JS, no build step.
> 
> **Author:** lewis &lt;sudolewis@gmail.com&gt;
> **License:** MIT
> **中文文档:** [README.zh-CN.md](README.zh-CN.md)
> 
> > One command installs **36 themes × 20 canvas FX × 31 layouts × 15 full decks + presenter mode**. Every preview above is a live iframe of a real template file rendering inside the deck — no screenshots, no mock-ups.
> 
> ## 🎤 Presenter Mode (new!)
> 
> Press `S` on any deck to pop open a dedicated presenter window with four
> draggable, resizable **magnetic cards**: current slide, next slide preview,
> speaker script (逐字稿), and timer. Two windows stay in sync via
> `BroadcastChannel`.
> 
> **Why previews are pixel-perfect:** each card is an `` that loads the
> same deck HTML with a `?preview=N` query param. The runtime detects this and
> renders only slide N with no chrome — so the preview uses the **same CSS,
> theme, fonts and viewport** as the audience view. Colors and layout are
> guaranteed identical.
> 
> **Smooth (no-reload) navigation:** on slide change, the presenter window
> sends `postMessage({type:'preview-goto', idx:N})` to each iframe. The iframe
> just toggles `.is-active` between slides — **no reload, no flicker**.
> 
> **Speaker script rules (3 golden):**
> 1. **Prompt signals, not lines to read** — bold the keywords, separate
>    transition sentences into their own paragraphs
> 2. **150–300 words per slide** — that's the ~2–3 min/page pace
> 3. **Write it like you speak** — conversational, not written prose
> 
> See [`references/presenter-mode.md`](references/presenter-mode.md) for the
> full authoring guide, or copy the ready-made template at
> `templates/full-decks/presenter-mode-reveal/` which ships with full 150-300
> word speaker scripts on every slide.
> 
> ## Install (one command)
> 
> ```bash
> npx skills add https://github.com/lewislulu/html-ppt-skill
> ```
> 
> That registers the skill with your agent runtime. After install, any agent
> that supports AgentSkills can author presentations by asking things like:
> 
> > "做一份 8 页的技术分享 slides，用 cyberpunk 主题"
> > "turn this outline into a pitch deck"
> > "做一个小红书图文，9 张，白底柔和风"
> 
> ## What's in the box
> 
> | | Count | Where |
> |---|---|---|
> | 🎤 **Presenter mode** | **NEW** | `S` key / `?preview=N` |
> | 🎨 **Themes** | **36** | `assets/themes/*.css` |
> | 📑 **Full-deck templates** | **15** | `templates/full-decks//` |
> | 🧩 **Single-page layouts** | **31** | `templates/single-page/*.html` |
> | ✨ **CSS animations** | **27** | `assets/animations/animations.css` |
> | 💥 **Canvas FX animations** | **20** | `assets/animations/fx/*.js` |
> | 🖼️ **Showcase decks** | 4 | `templates/*-showcase.html` |
> | 📸 **Verification screenshots** | 56 | `scripts/verify-output/` |
> 
> ### 36 Themes
> 
> `minimal-white`, `editorial-serif`, `soft-pastel`, `sharp-mono`, `arctic-cool`,
> `sunset-warm`, `catppuccin-latte`, `catppuccin-mocha`, `dracula`, `tokyo-night`,
> `nord`, `solarized-light`, `gruvbox-dark`, `rose-pine`, `neo-brutalism`,
> `glassmorphism`, `bauhaus`, `swiss-grid`, `terminal-green`, `xiaohongshu-white`,
> `rainbow-gradient`, `aurora`, `blueprint`, `memphis-pop`, `cyberpunk-neon`,
> `y2k-chrome`, `retro-tv`, `japanese-minimal`, `vaporwave`, `midcentury`,
> `corporate-clean`, `academic-paper`, `news-broadcast`, `pitch-deck-vc`,
> `magazine-bold`, `engineering-whiteprint`.
> 
> Each is a pure CSS-tokens file — swap one `` to reskin the entire deck.
> Browse them all in `templates/theme-showcase.html` (each slide rendered in an
> isolated iframe so theme ≠ theme is visually guaranteed).
> 
> ### 15 Full-deck templates
> 
> Eight extracted from real-world decks, seven generic scenario scaffolds:
> 
> **Extracted looks**
> - `xhs-white-editorial` — 小红书白底杂志风
> - `graphify-dark-graph` — 暗底 + 力导向知识图谱
> - `knowledge-arch-blueprint` — 蓝图 / 架构图风
> - `hermes-cyber-terminal` — 终端 cyberpunk
> - `obsidian-claude-gradient` — 紫色渐变卡
> - `testing-safety-alert` — 红 / 琥珀警示风
> - `xhs-pastel-card` — 柔和马卡龙图文
> - `dir-key-nav-minimal` — 方向键极简
> 
> **Scenario decks**
> - `pitch-deck`, `product-launch`, `tech-sharing`, `weekly-report`,
>   `xhs-post` (9-slide 3:4), `course-module`,
>   **`presenter-mode-reveal`** 🎤 — complete talk template with full 150-300
>   word speaker scripts on every slide, designed around the `S` key presenter mode
> 
> Each is a self-contained folder with scoped `.tpl-` CSS so multiple
> decks can be previewed side-by-side without collisions. Browse the full
> gallery in `templates/full-decks-index.html`.
> 
> ### 31 Single-page layouts
> 
> cover · toc · section-divider · bullets · two-column · three-column ·
> big-quote · stat-highlight · kpi-grid · table · code · diff · terminal ·
> flow-diagram · timeline · roadmap · mindmap · comparison · pros-cons ·
> todo-checklist · gantt · image-hero · image-grid · chart-bar · chart-line ·
> chart-pie · chart-radar · arch-diagram · process-steps · cta · thanks
> 
> Every layout ships with realistic demo data so you can drop it into a deck
> and immediately see it render.
> 
> *The big iframe is loading `templates/single-page/.html` directly and cycling through all 31 layouts every 2.8 seconds.*
> 
> ### 27 CSS animations + 20 Canvas FX
> 
> **CSS (lightweight)** — directional fades, `rise-in`, `zoom-pop`, `blur-in`,
> `glitch-in`, `typewriter`, `neon-glow`, `shimmer-sweep`, `gradient-flow`,
> `stagger-list`, `counter-up`, `path-draw`, `morph-shape`, `parallax-tilt`,
> `card-flip-3d`, `cube-rotate-3d`, `page-turn-3d`, `perspective-zoom`,
> `marquee-scroll`, `kenburns`, `ripple-reveal`, `spotlight`, …
> 
> **Canvas FX (cinematic)** — `particle-burst`, `confetti-cannon`, `firework`,
> `starfield`, `matrix-rain`, `knowledge-graph` (force-directed physics),
> `neural-net` (signal pulses), `constellation`, `orbit-ring`, `galaxy-swirl`,
> `word-cascade`, `letter-explode`, `chain-react`, `magnetic-field`,
> `data-stream`, `gradient-blob`, `sparkle-trail`, `shockwave`,
> `typewriter-multi`, `counter-explosion`. Each is a real hand-rolled canvas
> module auto-initialised on slide enter via `fx-runtime.js`.
> 
> ## Quick start (manual, after install or git clone)
> 
> ```bash
> # Scaffold a new deck from the base template
> ./scripts/new-deck.sh my-talk
> 
> # Browse everything
> open templates/theme-showcase.html         # all 36 themes (iframe-isolated)
> open templates/layout-showcase.html        # all 31 layouts
> open templates/animation-showcase.html     # all 47 animations
> open templates/full-decks-index.html       # all 14 full decks
> 
> # Render any template to PNG via headless Chrome
> ./scripts/render.sh templates/theme-showcase.html
> ./scripts/render.sh examples/my-talk/index.html 12
> ```
> 
> ## Keyboard cheat sheet
> 
> ```
> ← → Space PgUp PgDn Home End   navigate
> F                               fullscreen
> S                               open presenter window (magnetic cards)
> N                               quick notes drawer (bottom)
> R                               reset timer (in presenter window)
> O                               slide overview grid
> T                               cycle themes (syncs to presenter)
> A                               cycle a demo animation on current slide
> #/N (URL)                       deep-link to slide N
> ?preview=N (URL)                preview-only mode (single slide, no chrome)
> ```
> 
> ## Project structure
> 
> ```
> html-ppt-skill/
> ├── SKILL.md                      agent-facing dispatcher
> ├── README.md                     this file
> ├── references/                   detailed catalogs
> │   ├── themes.md                 36 themes with when-to-use
> │   ├── layouts.md                31 layout types
> │   ├── animations.md             27 CSS + 20 FX catalog
> │   ├── full-decks.md             14 full-deck templates
> │   └── authoring-guide.md        full workflow
> ├── assets/
> │   ├── base.css                  shared tokens + primitives
> │   ├── fonts.css                 webfont imports
> │   ├── runtime.js                keyboard + presenter 

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[資料視覺化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/lewislulu/html-ppt-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：簡報工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "簡報工具" AND file.name != "lewislulu--html-ppt-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "lewislulu--html-ppt-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "lewislulu--html-ppt-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "lewislulu--html-ppt-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lewislulu--html-ppt-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lewislulu--html-ppt-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lewislulu" AND file.name != "lewislulu--html-ppt-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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
> const me = dv.page("Repos/lewislulu--html-ppt-skill");
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

> **2026-04-18** — 首次收錄
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

- [[2026-04-22|2026-04-22]] — 再次上榜，1.8k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，1.7k stars
- [[2026-04-20|2026-04-20]] — 再次上榜，1.4k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.1k stars
- [[2026-04-18|2026-04-18]] — 首次收錄，909 stars
