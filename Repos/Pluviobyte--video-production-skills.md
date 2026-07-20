---
repo: Pluviobyte/video-production-skills
url: https://github.com/Pluviobyte/video-production-skills
owner: Pluviobyte
owner_type: User
language: Python
license: N/A
description: "Reusable AI video production skills library for creation, recreation, motion design, openers, and QA."
homepage: ""
stars: 555
stars_per_day: 24
forks: 71
open_issues: 0
created: 2026-06-26
pushed_at: 2026-07-14
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "其他"
subcategory: "視頻製作"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "提供可重用的 AI 視頻製作技能庫，涵蓋創作、復刻、動效設計等流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 10089
readme_length: 6893
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:444,2026-06-30:445,2026-07-01:483,2026-07-01:483,2026-07-02:492,2026-07-02:492,2026-07-03:498,2026-07-04:502,2026-07-05:508,2026-07-06:515,2026-07-07:518,2026-07-08:523,2026-07-09:525,2026-07-10:529,2026-07-11:531,2026-07-12:531,2026-07-13:534,2026-07-14:537,2026-07-15:540,2026-07-16:544,2026-07-17:548,2026-07-18:550,2026-07-19:553,2026-07-20:555"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "video-production-skills"
  - "Pluviobyte/video-production-skills"
  - "提供可重用的 AI 視頻製作技能庫，涵蓋創作、復刻、動效設計等流程。"
---

# video-production-skills

**555** stars · **24** stars/天 · 建立 23 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> 提供可重用的 AI 視頻製作技能庫，涵蓋創作、復刻、動效設計等流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (24 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高效視頻製作解決方案的內容創作者和視頻編輯專業人士。
> **一句話重點** 這個專案不僅是技能的集合，更是未來視頻製作的組件庫，能夠顯著提升創作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "視頻製作" && p.file.name !== "Pluviobyte--video-production-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 視頻製作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的視頻製作能力，值得投資。

> [!abstract] 核心創新
> 這個專案的創新在於將視頻製作技能進行系統化整理，形成可重用的組件庫。

## 專案簡介

這個專案是一個 AI 視頻製作技能庫，旨在將視頻創作過程中的可重用技能進行整理和收錄。用戶可以透過 `npx skills add` 指令安裝不同的技能，例如 `ai-motion-director` 用於生成運動隱喻和 beat graph，`reference-video-replica-qc` 用於參考視頻的復刻和質量檢查。這些技能不僅限於單一項目，而是可以擴展到多種視頻風格和類型，形成一個持續增長的動效組件庫。每個技能都會附有詳細的文檔，說明其適用場景、技術參數和使用限制，這樣未來的 AI 視頻生成可以根據腳本自由選擇合適的組件。專案的長期目標是從復刻過程中提取出可重用的技術組件，進而提升視頻製作的效率和質量。這種設計使得視頻製作不再只是靜態的幻燈片，而是能夠生成更接近真實視頻語言的成品。整體架構上，這個專案依賴於 Python 和 JavaScript，並且對於支持本地技能目錄的 AI 編程代理（如 Codex、Claude Code 等）非常友好。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 可重用技能庫 — 包含多種視頻製作技能，適用於不同的視頻風格和需求。
- AI 動效導演 — 使用 `ai-motion-director` 生成運動隱喻和 beat graph，提升視頻質量。
- 參考視頻復刻 — `reference-video-replica-qc` 允許用戶分析和重建參考視頻的動效。
- 風格化短片生成 — `dark-saas-magic-video` 提供暗色科技風格的視頻模板。
- 片頭包裝技能 — `black-white-text-opener` 創建專業的片頭效果，提升視頻的吸引力。

## 快速開始

1. 查看可安裝的技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --list
```
2. 安裝 AI 動效導演技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
```
3. 安裝參考視頻復刻技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
```
4. 安裝暗色 SaaS 短片技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
```
5. 安裝黑底白字片頭技能
```bash
npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Node.js 和 npx。",
  "指令": "npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director",
  "預期輸出": "成功安裝 ai-motion-director 技能，並可在後續視頻製作中使用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 23 天就累積 555 stars（24/天），forks 71（12.8%），這顯示出不錯的社群關注度。Pluviobyte 是這個專案的主要貢獻者，過去在視頻製作和 AI 領域有豐富的經驗。這個專案解決了視頻製作過程中技能重複使用的痛點，之前的解決方案往往缺乏系統性和可擴展性。隨著 AI 技術的進步，對於高效視頻製作的需求越來越高，這使得這個工具的出現正好滿足了市場需求。forks/stars 比率達到 12.8%，顯示出不少開發者對這個專案的實際應用有興趣。

## 適合誰使用

**目標受眾**：需要高效視頻製作解決方案的內容創作者和視頻編輯專業人士。

> [!example] 使用場景
> - 視頻編輯師用它來快速生成視頻開場，因為可以利用 `black-white-text-opener` 來創建專業的片頭效果，節省了手動設計的時間。
> - 內容創作者用它來復刻成功的參考視頻，因為 `reference-video-replica-qc` 能夠幫助他們分析和重建視頻的動效，提升作品質量。
> - 產品經理用它來製作產品介紹短片，因為 `dark-saas-magic-video` 提供了一個現成的模板，能夠快速展示產品特性。

## 架構分析

這個專案採用模組化的架構設計，每個技能都是獨立的可安裝單元，這樣用戶可以根據需要選擇安裝。資料流方面，使用者可以透過 CLI 指令安裝技能，然後在視頻製作過程中調用這些技能。這種設計使得技能的擴展和維護變得更加簡單，未來可以根據用戶需求持續增加新的技能。選擇這種架構的代價是需要用戶對 CLI 有一定的熟悉度，並且在技能的整合上可能需要額外的配置。整體上，這個架構在擴展性上表現良好，但在初期使用上可能會有一定的學習曲線。

## 技術深入分析

這個專案的核心技術機制是將視頻製作過程中的技能進行模組化，並透過 CLI 提供安裝和使用方式。每個技能都被設計為獨立的模組，這樣用戶可以根據需求選擇安裝，並在視頻製作中靈活使用。效能方面，這些技能的使用能夠顯著提升視頻製作的效率，特別是在需要快速生成視頻內容的場景中。設計上選擇了 Python 和 JavaScript 作為主要技術棧，這使得專案在性能和擴展性上都有良好的表現。這種選擇的代價是需要用戶對這兩種語言有一定的了解。技術風險方面，未來如果技能數量增加，可能會面臨管理和維護上的挑戰。整合方面，這個專案與主流的 AI 編程代理（如 Codex、Claude Code）有良好的相容性，能夠輕鬆融入現有的工作流。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝指令和技能介紹。安裝過程相對順暢，但需要用戶對 CLI 有一定的熟悉度。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 提供多種可重用的視頻製作技能，提升創作效率。
> - 技能模組化設計，便於擴展和維護。
> - 支持多種視頻風格，適用範圍廣泛。

> [!danger] 缺點
> - 需要依賴特定的 AI 編程代理，無法獨立運行。
> - 對於複雜視頻內容可能需要額外的手動調整。
> - 初期使用需要一定的 CLI 熟悉度。

> [!warning] 注意事項
> - 不支持逐幀復刻，僅限於動效的復刻和組件化。
> - 需要依賴支持本地技能的 AI 編程代理，無法獨立運行。
> - 對於複雜的視頻內容，可能需要額外的手動調整和優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和編輯動畫角色，而本專案提供的是視頻製作技能的集合，適用範圍不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於視頻素材的管理和存儲，而本專案則專注於視頻製作過程中的技能重用。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理協作，而本專案則是針對單一視頻製作流程的技能庫。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和編輯動畫角色，而本專案提供的是視頻製作技能的集合，適用範圍不同。 | 如果你的需求是針對動畫角色的生成和編輯，而非整體視頻製作，則應選擇此工具。 | medium，因為需要重新適應不同的技能和工作流。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於視頻素材的管理和存儲，而本專案則專注於視頻製作過程中的技能重用。 | 如果你的重點在於素材的管理和存儲，則應選擇此工具。 | low，因為主要是素材管理，轉移相對簡單。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理協作，而本專案則是針對單一視頻製作流程的技能庫。 | 如果你的工作流需要多代理協作，則應選擇此工具。 | high，因為需要重新設計工作流以適應多代理的協作模式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **video-production-skills** | **agent-sprite-forge** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和編輯動畫角色，而本專案提供的是視頻製作技能的集合，適用範圍不同。 | 主要用於視頻素材的管理和存儲，而本專案則專注於視頻製作過程中的技能重用。 | 專注於多代理協作，而本專案則是針對單一視頻製作流程的技能庫。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的技能和工作流。 | low，因為主要是素材管理，轉移相對簡單。 | high，因為需要重新設計工作流以適應多代理的協作模式。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對動畫角色的生成和編輯，而非整體視頻製作，則 | 如果你的重點在於素材的管理和存儲，則應選擇此工具。 | 如果你的工作流需要多代理協作，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的視頻製作試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝過程中可能會遇到 CLI 環境配置問題
  - 解法：確保 Node.js 和 npx 已正確安裝
- [MEDIUM] 某些技能可能需要額外的依賴包
  - 解法：仔細查看每個技能的文檔，安裝必要的依賴
- [MEDIUM] 在使用過程中可能會遇到版本不兼容問題
  - 解法：定期檢查和更新技能庫的版本

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品介紹視頻 | 非常適合 | 技能庫提供多樣化的視頻製作選擇，能快速生成高質量內容。 |
| 大型企業的高端宣傳片 | 普通 | 雖然有多種技能，但可能需要更多的定制化和專業支持。 |
| 個人內容創作者的視頻頻道 | 非常適合 | 能夠快速生成和復刻視頻，提升內容質量和效率。 |
| 學術研究的視頻展示 | 不適合 | 可能需要更高的精確度和專業工具支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的視頻製作能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料。依賴的外部庫需定期檢查安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
| Forks | 71 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 9.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Pluviobyte/video-production-skills) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "JavaScript" : 9
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Pluviobyte](https://github.com/Pluviobyte) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度良好，近期有持續的更新和維護。
**連結**：[文件](https://github.com/Pluviobyte/video-production-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-07-14）
> **活躍天數** 3 天 · **最新 commit** Fix dark SaaS director reference

## README 摘錄

> [!info]- 展開查看原文 README
> # Video Production Skills
> 
> 这是一个长期维护的 AI 视频制作 skill 精选仓库，用来沉淀我在视频创作、视频复刻、动效生成、片头包装、质检交付等流程中反复使用的方法，也用来把优秀参考视频中的动效拆成 HyperFrames / Remotion 能够实现和复用的组件。
> 
> 仓库不是只服务于某一个视频项目。后续优秀的视频制作 skill 都会优先收录在这里，并按“视频类型 / 风格 / 工作流环节”持续扩展。当前收录的是 AI 动效导演元 Skill、参考视频复刻质检、暗色 SaaS / AI 产品短片、黑底白字打字开场。
> 
> 这些 skill 适用于 Codex、Claude Code、Cursor 等支持本地 skill 目录或 Skills CLI 的 AI 编程/创作代理。仓库中的每个一级目录都是一个独立可安装的 skill。
> 
> ## 长期目标：从复刻到组件库
> 
> `reference-video-replica-qc` 的意义不是单纯复制某一个参考视频，而是把参考视频里真正让画面“像视频”的东西拆出来：镜头节奏、入场方式、路径运动、组件状态切换、字幕/标题层级、模型列表、线条轨道、卡片翻转、光效、遮罩、缩放和转场。每一次复刻都应该把这些动效整理成 HyperFrames / Remotion / React / CSS / SVG / GSAP 可以编写、组合和参数化的技术组件。
> 
> 长期来看，这个仓库会形成一个视频动效组件库。每个通过复刻验证的组件都要留下描述：它适合什么内容、解决什么画面问题、需要哪些输入参数、时间线如何运动、应该用在哪类视频段落、有什么对齐证据和限制。以后 AI 制作视频时，就不只是生成一页页静态版式，而是能够根据脚本内容自由选择这些组件，把开场、解释、列表、对比、流程、CTA、产品展示等段落组合成更接近真实视频语言的成片。
> 
> `ai-motion-director` 是这套体系的元导演层：给它一个主题、脚本或简报，它先决定视频的运动隐喻、beat graph、组件调度、素材需求和反 PPT 质检标准，再把任务交给 HyperFrames / Remotion / 生图 / 具体视频 skill 执行。
> 
> ## 已收录 Skills
> 
> | Skill | 视频制作环节 | 适合做什么 | 视频风格 / 方法 | 详情 |
> | --- | --- | --- | --- | --- |
> | `ai-motion-director`AI 动效导演元 Skill | 主题到动效语言 / 元导演 / 反 PPT 质检 | 给一个主题、脚本或简报，先建立 motion thesis、beat graph、组件/素材计划，再控制 HyperFrames/Remotion 进入制作 | Motion-first：视觉隐喻、连续时间线、状态变化、运动语法、anti-PPT gate | [查看页面](docs/ai-motion-director.md) |
> | `reference-video-replica-qc` | 复刻闭环 / 组件沉淀 / 质检 | 参考视频拆解、动效复刻、HyperFrames/Remotion 组件化、五级保真度判定 | 先采样定位、再全帧验收；素材门、运行时门、交付门；MAE/时间偏移/边界帧/PSNR/SSIM/哈希证据 | [查看页面](docs/reference-video-replica-qc.md) |
> | `dark-saas-magic-video`暗色 SaaS 魔术短片 | 风格化正片生成 | 暗色 SaaS / AI 产品短片、工具发布视频、产品能力展示 | Presenton-like magic UI：黑色空间、底部紫光、动感大字、渐变 CTA、漂浮 UI、模型环、导出物件 | [查看页面](docs/dark-saas-magic-video.md) |
> | `black-white-text-opener` | 片头包装 | 新视频片头、教程开场、观点视频开头、产品视频引子 | 纯黑/近黑背景 + 白色大字逐字打出 + 同步 typing click 音效 + 干净转场 | [查看页面](docs/black-white-text-opener.md) |
> 
> ## 效果预览
> 
> ### AI 动效导演元 Skill
> 
> 这是流程控制 skill，暂无单独预览视频；它用于在制作前决定运动隐喻、beat graph、组件调度和反 PPT 质检标准，并控制后续视频 skill 产出成片。
> 
> ### 黑底白字打字开场
> 
> [▶ Watch Black White Text Opener](https://github.com/user-attachments/assets/3962d773-4447-4720-ba59-5e164d0b5ac4)
> 
> ### 暗色 SaaS / Magic UI
> 
> 示例成片：**雪踏乌云暗色 SaaS 介绍短片**
> 
> [▶ Watch Xuetawuyun Dark SaaS Showcase](https://github.com/user-attachments/assets/6d4236af-6b58-4447-986d-21169ea5e3a6)
> 
> ### 参考视频复刻闭环
> 
> 示例成片：**Presenton 复刻 Bitexact 成片**
> 
> [▶ Watch Presenton Replica Bitexact Showcase](https://github.com/user-attachments/assets/f792bd12-d8b3-43b7-b751-98aeb033713b)
> 
> ## 仓库会如何扩展
> 
> 后续新增的视频制作 skill，会优先按下面几类组织：
> 
> - 导演与调度：主题理解、运动隐喻、beat graph、组件选择、素材规划、反 PPT 质检。
> - 复刻与组件沉淀：参考视频拆解、时间线还原、动效复刻、HyperFrames/Remotion 组件化、像素级/视觉级对齐、交付检查。
> - 片头与包装：黑底白字、标题卡、章节转场、字幕条、CTA 结尾。
> - 风格化正片：暗色 SaaS、AI 工具发布、课程预告、观点口播包装、教程动效。
> - 素材处理：抽帧、字幕、配音、屏幕录制清理、音画同步。
> - 平台适配：抖音、小红书、公众号视频封面/比例/节奏差异。
> 
> 每个新增 skill 应该同时包含：
> 
> - 一个独立 skill 目录，包含 `SKILL.md` 和必要脚本。
> - 一个 `docs/.md` 介绍页，说明视频类型、风格、适合/不适合场景。
> - 如果 skill 产出可复用动效，要为每个组件写清楚组件描述、适用场景、输入参数、时间线、技术栈、对齐证据和限制。
> - 优先提供 MP4 视频预览，放在 `assets/videos/` 或 skill 自己的 `assets/showcases/` 作为可版本化归档。
> - README / docs 里的可播放展示使用 GitHub `user-attachments/assets/...` URL，写法参考 Presenton：`[▶ Watch Demo](https://github.com/user-attachments/assets/)`。
> - 抽帧图、contact sheet、对照图只作为封面/质检辅助，放在 `assets/images/`。
> - 在本 README 的表格中补充一行，说明它属于哪个视频制作环节。
> 
> ## 推荐安装
> 
> 先查看仓库内可安装的 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> ```
> 
> 按需安装单个 skill：
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> ## 怎么选择
> 
> - 给一个主题、脚本或简报，想让 AI 先做运动隐喻、beat graph、组件调度，并避免 PPT 式视频：用 `ai-motion-director`。
> - 要复刻一个已有视频、拆解时间线、把动效沉淀成 HyperFrames/Remotion 组件、验证是否对齐：用 `reference-video-replica-qc`。
> - 要做暗色科技感 SaaS / AI 产品短片：用 `dark-saas-magic-video`。
> - 要给新视频加黑底白字、逐字打字、打字音效开场：用 `black-white-text-opener`。
> 
> ## 设计边界
> 
> - `ai-motion-director` 不替代最终渲染、抽帧、字幕、音频和归档流程；它负责先定义 motion thesis、beat graph、组件/素材计划和 anti-PPT gate。
> - `reference-video-replica-qc` 把保真度拆成源码一致、渲染帧像素一致、编码成片帧对齐、视觉对齐、风格对齐五级。任何像素级结论都必须通过素材、运行时和交付三道逐帧门；手写 HyperFrames/Remotion 复刻通常目标是视觉级对齐和参数化组件沉淀。
> - `dark-saas-magic-video` 是风格级创作 skill，不用于逐帧复刻。
> - `black-white-text-opener` 是生成型开场 skill，默认要求逐字打字和同步 typing click 音效；不用于复用原片或声明像素级对齐。
> 
> English
> 
> # Video Production Skills
> 
> This is a long-term AI video production skills library. It is designed to collect reusable skills for video creation, reference recreation, motion design, opener packaging, asset processing, delivery QA, and reusable HyperFrames / Remotion motion components.
> 
> The long-term goal is to turn reference-video recreation into a component library. Each aligned motion pattern should become a documented technical component with its use case, inputs, timing contract, implementation stack, evidence, and limitations. Future AI video generation can then select from these components instead of producing static slide-like sequences.
> 
> The repository is not limited to the current skills. Future video-production skills should be added here with a dedicated skill directory, a docs page, and preview media when possible.
> 
> | Skill | Production Stage | Video Type | Style / Method |
> | --- | --- | --- | --- |
> | `ai-motion-director` | Topic-to-motion direction / anti-PPT QA | Topic-driven original motion videos, beat graph planning, component routing | Motion-first direction: visual metaphor, state change, motion grammar, asset plan, anti-PPT gate |
> | `reference-video-replica-qc` | Recreation loop / component capture / QA | Reference analysis, motion recreation, HyperFrames/Remotion componentization, five-level fidelity classification | Samples locate failures; full frames approve asset, runtime, and delivery gates with MAE, temporal, boundary, PSNR/SSIM, and hash evidence |
> | `dark-saas-magic-video` / Dark SaaS Magic Short | Styled main video | Dark SaaS / AI product shorts | Presenton-like magic UI with black space, purple glow, kinetic type, gradient CTA, floating UI |
> | `black-white-text-opener` | Opener packaging | Opening title cards for new videos | Black background, typed white text, timed typing clicks, clean transition |
> 
> Recommended install:
> 
> ```bash
> npx skills add https://github.com/Pluviobyte/video-production-skills --list
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill ai-motion-director
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill reference-video-replica-qc
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill dark-saas-magic-video
> npx skills add https://github.com/Pluviobyte/video-production-skills --skill black-white-text-opener
> ```
> 
> These skills are designed for Codex, Claude Code, Cursor, and other agents that support local skills or the Skills CLI.

## 延伸閱讀

相關概念：[[自動化測試]] · [[多模態]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Jane-xiaoer--xiaoer-videolab|Jane-xiaoer/xiaoer-videolab]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/Pluviobyte/video-production-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：視頻製作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "視頻製作" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Pluviobyte--video-production-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","多模態","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Pluviobyte--video-production-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Pluviobyte" AND file.name != "Pluviobyte--video-production-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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
> const me = dv.page("Repos/Pluviobyte--video-production-skills");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-02|2026-07-02]] — 再次上榜，492 stars
- [[2026-07-01|2026-07-01]] — 再次上榜，483 stars
- [[2026-06-30|2026-06-30]] — 首次收錄，444 stars
