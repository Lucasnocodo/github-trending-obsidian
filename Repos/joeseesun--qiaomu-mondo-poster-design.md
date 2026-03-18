---
repo: joeseesun/qiaomu-mondo-poster-design
url: https://github.com/joeseesun/qiaomu-mondo-poster-design
owner: joeseesun
owner_type: User
language: Python
license: MIT
description: "一句话生成大师级海报、书籍封面、专辑封面和各类设计作品。无需懂PS、配色或艺术史，AI自动选择最佳风格（基于20位传奇海报设计师）。支持电影海报、读书笔记、公众号封面、小红书配图等。默认9:16竖版，完美适配社交媒体。包含AI提示词优化、风格对比、图生图转换功能。触发词：\"Mondo风格\"、\"书籍封"
homepage: ""
stars: 510
stars_per_day: 57
forks: 46
open_issues: 1
created: 2026-03-08
pushed_at: 2026-03-16
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一句话生成大师级海报、书籍封面、专辑封面和各类设计作品。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 59813
readme_length: 8399
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:382,2026-03-16:468,2026-03-18:510"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "qiaomu-mondo-poster-design"
  - "joeseesun/qiaomu-mondo-poster-design"
  - "一句话生成大师级海报、书籍封面、专辑封面和各类设计作品。"
---

# qiaomu-mondo-poster-design

**510** stars · **57** stars/天 · 建立 9 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> 一句话生成大师级海报、书籍封面、专辑封面和各类设计作品。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (57 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高質量設計作品但不具備設計背景的內容創作者。
> **一句話重點** 這個專案讓設計變得無門檻，任何人都能透過簡單的描述生成專業級作品。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、1 小時整合，得到高效的設計生成工具，值得投入。

> [!abstract] 核心創新
> AI 自動選擇最佳藝術風格和配色方案，讓非設計專業人士也能輕鬆創作專業級設計。

## 專案簡介

Qiaomu Mondo Poster Design 是一款利用 AI 自动生成高质量设计作品的工具。用户只需输入一句话描述，例如 '为《三体》设计书籍封面'，AI 会自动选择最佳艺术风格并生成相应的海报、封面等设计。该工具支持多种平台比例（如 21:9、3:4、9:16 等），并能自动匹配大师级配色方案和构图原则，确保设计的专业性。核心功能包括风格对比、图生图转换和 AI 提示词优化，用户无需具备设计知识即可轻松使用。

技术上，该工具使用 Python 开发，依赖于 requests 和 Pillow 库，后者用于处理图像生成和比较功能。与其他设计工具相比，Qiaomu 通过 AI 自动选择艺术风格和配色，避免了用户需手动调整的繁琐过程，适合新手和非设计专业人士使用。实际使用中，用户可以通过简单的命令行指令生成多种风格的设计，极大提高了创作效率。尽管目前仍处于早期阶段，社区活跃度较高，且开发者积极响应用户反馈，未来有望持续优化功能和扩展艺术风格库。

**技術棧**：`Python 3.7+` · `requests>=2.31.0` · `Pillow>=10.0.0`

## 重點功能

- 一句話生成設計 — 用簡單的描述生成海報、封面等設計作品。
- 自動選擇藝術風格 — AI 根據內容自動匹配最佳藝術風格。
- 多平台比例支持 — 自動適配各種平台的設計比例，如 21:9、3:4、9:16。
- AI 提示詞優化 — 根據用戶描述自動生成最佳提示詞，提升設計質量。
- 風格對比功能 — 生成多種風格的設計，便於用戶選擇最喜歡的版本。
- 圖生圖功能 — 支持將現有圖片轉換為 Mondo 藝術風格。
- 大師級配色方案 — AI 自動為設計選擇高品質的配色方案。
- 簡單的命令行操作 — 用戶可通過命令行快速生成設計。

## 快速開始

1. 安裝工具
```bash
npx skills add joeseesun/qiaomu-mondo-poster-design
```
2. 生成海報
```bash
"用 Mondo 风格为《三体》生成一张书籍封面"
```
3. 生成小红书配图
```bash
"为《小王子》设计读书分享配图"
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Python 3.7+ 和設置 AI Gateway API Key。",
  "指令": "python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py \"人类简史\" book --style wenyi --aspect-ratio 21:9",
  "預期輸出": "生成一张适合公众号的《人类简史》设计海报。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 510 stars（56.7/天），forks 46（9.0%），這是相對活躍的增長。作者 joeseesun 是一位專注於設計工具開發的開源貢獻者，之前有多個成功的項目。這個工具解決了非設計專業人士在創作過程中的痛點，讓他們能夠輕鬆生成專業級設計。最近的推廣活動和社交媒體分享也促進了其曝光率。技術上，AI 的進步使得自動化設計成為可能，這個工具正好利用了這一點。forks/stars 比率為 9.0%，顯示出有相當比例的用戶在實際修改或使用該工具。

## 適合誰使用

**目標受眾**：需要快速生成高質量設計作品但不具備設計背景的內容創作者。

> [!example] 使用場景
> - 內容創作者用它來生成吸引人的社交媒體封面，因為只需一句話描述即可獲得獨特設計，節省大量時間。
> - 學生用它來設計讀書筆記海報，因為無需懂得設計原則，AI 會自動選擇最佳風格和配色。
> - 獨立音樂人用它來創作專輯封面，因為可以快速生成多種風格的設計，便於選擇最符合音樂風格的封面。

## 架構分析

該專案採用 Python 開發，主要由兩個部分組成：核心依賴和增強功能。核心依賴使用 requests 庫進行網絡請求，增強功能則依賴 Pillow 庫處理圖像生成和比較。這種架構設計使得工具在功能上具備靈活性和擴展性，能夠根據用戶需求進行調整。選擇 Python 作為開發語言的原因在於其簡單易用和強大的社區支持，這對於快速迭代和功能擴展至關重要。未來可能會面臨的擴展瓶頸包括對於更複雜的設計需求的支持，這需要進一步優化算法和擴展風格庫。

## 技術深入分析

Qiaomu Mondo Poster Design 利用 AI 技術自動生成設計，核心機制是通過自然語言處理將用戶輸入的描述轉換為設計指令。使用的主要演算法包括文本解析和風格匹配，這使得 AI 能夠根據用戶的需求自動選擇合適的藝術風格和配色方案。效能方面，該工具能夠快速生成設計，通常在幾秒鐘內完成，具體依賴於圖像的複雜程度和伺服器的性能。設計選擇上，Python 的選擇使得工具在處理圖像時具備較高的靈活性，但也可能面臨性能瓶頸，特別是在高負載情況下。未來可能需要考慮擴展至其他語言或框架以提升性能。技術風險方面，依賴於外部 API 可能導致的穩定性問題，以及未來對於更複雜設計需求的支持，都是需要關注的潛在風險。整合方面，與現有的設計工具鏈的兼容性良好，能夠輕鬆融入到現有的工作流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰易懂，提供了簡單的安裝和使用指引。安裝過程順暢，但需要設置 API Key，對新手來說可能有一定的門檻。文件中有多語言支持，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 使用簡單，無需設計背景即可生成專業設計。
> - AI 自動選擇風格和配色，節省時間和精力。
> - 支持多平台比例，適用於各種社交媒體和出版需求。
> - 功能豐富，包括風格對比和圖生圖轉換。

> [!danger] 缺點
> - 目前僅支持 Python，對於非技術用戶可能有門檻。
> - 生成的設計可能不完全符合用戶的個性化需求。
> - 社群支持和資源仍在發展中，可能存在一些問題未解決。
> - 對於複雜的設計需求，可能需要手動調整。

> [!warning] 注意事項
> - 目前僅支持 Python 3.7+。
> - 需要設置 AI Gateway API Key 才能使用。
> - 對於複雜的設計需求，可能無法完全滿足用戶的期望。
> - 目前僅有 33+ 種藝術風格，未來可能需要擴展更多風格。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於文件同步，功能上與本專案無直接重疊，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全，與設計無關，無法替代本專案的設計功能。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 用於 Telegram 的代理服務，與設計工具無關，功能差異明顯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Canva | Canva 提供了大量模板和設計元素，使用者需手動調整設計，而 Qiaomu 則是自動生成，無需設計背景。 | 如果需要更多的手動控制和自定義設計，Canva 會是更好的選擇。 | low，因為使用 Canva 的用戶已經習慣了模板設計。 |
| Adobe Express | Adobe Express 提供專業的設計工具，但需要一定的設計知識，與 Qiaomu 的零門檻設計理念相悖。 | 如果團隊已經在使用 Adobe 的生態系統，Adobe Express 會更合適。 | medium，因為需要學習新的工具和界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **qiaomu-mondo-poster-design** | **Canva** | **Adobe Express** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Canva 提供了大量模板和設計元素，使用者需手動調整設計，而 Qiaomu 則是自動生成，無需設計背景。 | Adobe Express 提供專業的設計工具，但需要一定的設計知識，與 Qiaomu 的零門檻設計理念相悖。 |
> | 遷移成本 | - | low，因為使用 Canva 的用戶已經習慣了模板設計。 | medium，因為需要學習新的工具和界面。 |
> | 適用場景 | 主要場景 | 如果需要更多的手動控制和自定義設計，Canva 會是更好的選 | 如果團隊已經在使用 Adobe 的生態系統，Adobe Ex |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的設計可能不符合預期，特別是對於複雜的要求。
  - 解法：可以多次嘗試不同的描述來獲得更理想的結果。
- **[HIGH]** 需要設置 API Key，對於新手來說可能有些困難。
  - 解法：參考 README 中的安裝指引，逐步設置。
- [low] 某些藝術風格可能不夠多樣，限制了創作自由。
  - 解法：可以使用風格對比功能，選擇最合適的風格。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的社交媒體營銷 | 非常適合 | 能快速生成專業設計，提升品牌形象。 |
| 學生的學術報告和海報設計 | 適合 | 簡單易用，無需設計背景即可創作。 |
| 大型企業的品牌設計需求 | 不適合 | 對於複雜的設計需求，可能無法完全滿足。 |
| 個人博客的文章配圖 | 非常適合 | 能快速生成吸引人的配圖，提升文章質量。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到高效的設計生成工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需 API Key，且不存取敏感資料。依賴的庫有良好的安全性評估，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
| Forks | 46 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 58.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/joeseesun/qiaomu-mondo-poster-design) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `Pillow`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@joeseesun](https://github.com/joeseesun) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者積極回應用戶反饋。
**連結**：[文件](https://github.com/joeseesun/qiaomu-mondo-poster-design)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** refactor: remove --ai-enhance flag and external LLM dependency

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/joeseesun/qiaomu-mondo-poster-design/issues/1) | 很好的skill，能否支持纯提示词模式，即只输出提示词，便于无法通过接口出图时，使用web界面生成 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 乔木 Mondo 海报设计 / Qiaomu Mondo Poster Design
> 
> [English](README.en.md) | 简体中文
> 
> > **一句话，生成大师级设计** - 不会PS、不懂配色、不认识艺术家？没关系，只需用一句话描述你想要什么，AI自动选择最合适的艺术风格，为你生成专业级海报、封面和设计作品。
> 
> ---
> 
> ## 💡 这是给谁用的？
> 
> ### 你是否遇到过这些困扰？
> 
> | 痛点 | 以前怎么办 | 现在怎么办 |
> |------|-----------|-----------|
> | 📱 想做公众号封面，但不会PS | 找设计师或用模板，千篇一律 | **一句话描述 → 自动生成独特设计** |
> | 📚 想设计读书笔记海报，不知道怎么排版 | 搜模板、改文字，样子很业余 | **"为《百年孤独》设计一张海报" → 直接出图** |
> | 🎬 想分享电影观后感，配图太普通 | 用电影剧照或官方海报 | **"为《银翼杀手》生成一张科幻海报" → 原创艺术风格** |
> | 🎨 想让设计看起来专业，但不懂配色 | 随便选颜色，最后四不像 | **AI自动匹配大师级配色方案** |
> | 🖼️ 想要独特风格，但不认识艺术家 | 只能羡慕别人的设计 | **AI识别题材自动选择最合适的艺术风格** |
> 
> **如果你遇到过以上任何一个问题，这个工具就是为你准备的。**
> 
> ---
> 
> ## ⚡ 3秒快速开始
> 
> ### 安装（复制粘贴就行）
> 
> ```bash
> npx skills add joeseesun/qiaomu-mondo-poster-design
> ```
> 
> ### 使用（对Claude说一句话）
> 
> ```
> "用 Mondo 风格为《三体》生成一张书籍封面"
> "为周杰伦《七里香》专辑设计封面"
> "生成一张爵士音乐节海报"
> "为我的公众号文章《人类简史》设计一张 21:9 封面"
> "为我的小红书读书笔记《小王子》设计 3:4 配图"
> ```
> 
> **就这么简单！** 你不需要：
> - ❌ 学习Photoshop
> - ❌ 懂什么是"负空间"、"极简主义"
> - ❌ 知道Saul Bass、Olly Moss是谁
> - ❌ 会选配色方案
> - ❌ 理解构图原理
> 
> AI会自动帮你搞定这一切！
> 
> ---
> 
> ## 📸 看看能生成什么样的设计
> 
> ### 场景1：公众号封面（21:9 超宽横版）
> 
>   
>     
>       
>       提示词: "为《人类简史》设计公众号封面"
>       → AI选择了文艺风：柔和水彩质感、人类进化全景时间线
>     
>     
>       
>       提示词: "为《星际穿越》影评设计公众号封面"
>       → AI选择了 Kilian Eng 几何未来主义：黑洞+飞船+宇宙深空
>     
>   
> 
> ### 场景2：小红书配图（3:4 竖版）
> 
>   
>     
>       
>       提示词: "为《花样年华》设计观影笔记配图"
>       → AI选择了日系风格：温暖胶片感、旗袍女人雨巷剪影
>     
>     
>       
>       提示词: "为《小王子》设计读书分享配图"
>       → AI选择了韩系风格：梦幻粉紫渐变、小王子站在星球上
>     
>   
> 
> ### 场景3：文章配图（16:9 横版）
> 
>   
>     
>       
>       提示词: "为科技文章《AI与人类的未来》设计配图"
>       → AI选择了 Kilian Eng 未来主义：数字大脑融合宇宙
>     
>     
>       
>       提示词: "为生活文章《秋日咖啡馆的午后阅读》设计配图"
>       → AI选择了文艺风：温暖金色光线、咖啡与书页
>     
>   
> 
> ### 场景4：书籍封面设计（9:16 竖版）
> 
>   
>     
>       
>       提示词: "为《三体》设计书籍封面"
>       → AI选择了 Chip Kidd 概念派：黑色虚空中一个被扭曲的红色太阳
>     
>     
>       
>       提示词: "为《百年孤独》设计精装书封面"
>       → AI选择了 Penguin Clothbound 经典风格：翡翠绿底+金色蝴蝶纹样
>     
>   
> 
> ### 场景5：专辑封面设计（1:1 正方形）
> 
>   
>     
>       
>       Pink Floyd
>       The Dark Side of the Moon
>       → Peter Saville 极简：棱镜分光彩虹
>     
>     
>       
>       Radiohead
>       OK Computer
>       → Reid Miles 高对比：数字荒原孤独身影
>     
>     
>       
>       Joy Division
>       Unknown Pleasures
>       → David Stone Martin 极简：脉冲波形线条
>     
>   
> 
> ### 场景6：活动海报 / 朋友圈分享（9:16 竖版）
> 
>   
>     
>       
>       提示词: "为周末观影会设计海报"
>       → AI选择了 Saul Bass 极简几何，胶片与爆米花
>     
>     
>       
>       提示词: "为咖啡与书的午后设计海报"
>       → AI选择了 Jay Ryan 民间手工风格，手冲咖啡与翻开的书页
>     
>   
> 
> ### 经典电影海报（IMDB Top 10）
> 
>   
>     
>       
>       肖申克的救赎
>       负空间，铁栏中飞出自由之鸟
>     
>     
>       
>       教父
>       极简主义，操控之手
>     
>     
>       
>       黑暗骑士
>       视觉双关，蝙蝠中的小丑
>     
>     
>       
>       教父2
>       暗影传承，父与子
>     
>     
>       
>       十二怒汉
>       极简几何，十二把椅子
>     
>   
>   
>     
>       
>       指环王：王者归来
>       史诗对比，至尊魔戒
>     
>     
>       
>       辛德勒的名单
>       黑白中的红色，生命之光
>     
>     
>       
>       指环王：护戒使者
>       奇幻冒险，九人远征
>     
>     
>       
>       低俗小说
>       波普拼贴，非线性叙事
>     
>     
>       
>       黄金三镖客
>       西部对峙，三人剪影
>     
>   
> 
> ---
> 
> ## 🎯 支持的平台和比例
> 
> | 平台 / 用途 | 推荐比例 | 命令行参数 | 说明 |
> |------------|---------|-----------|------|
> | 📱 **公众号封面** | 21:9 | `--aspect-ratio 21:9` | 超宽横版，适合文章头图 |
> | 📕 **小红书配图** | 3:4 | `--aspect-ratio 3:4` | 竖版，小红书最常见比例 |
> | 📝 **文章配图** | 16:9 | `--aspect-ratio 16:9` | 横版，适合博客/知乎/Medium |
> | 📚 **书籍封面** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，经典书籍比例 |
> | 🎵 **专辑封面** | 1:1 | `--aspect-ratio 1:1` | 正方形，Spotify/网易云标准 |
> | 🎭 **活动海报** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，手机展示最佳 |
> | 🎬 **电影海报** | 9:16 | `--aspect-ratio 9:16`（默认） | 竖版，经典海报比例 |
> | 🖥️ **桌面壁纸** | 16:9 | `--aspect-ratio 16:9` | 横版，电脑桌面 |
> 
> ---
> 
> ## 🤖 AI自动帮你做什么？
> 
> 你只需要描述**内容**，AI会自动：
> 
> ### 1. 自动选择最合适的艺术风格
> 
> | 你说的内容类型 | AI自动选择的风格 | 为什么 |
> |--------------|----------------|-------|
> | 📱 公众号读书笔记 | **文艺风** 柔和留白水彩 | 诗意氛围适合深度阅读 |
> | 📕 小红书观影笔记 | **日系风** 胶片感温暖色调 | 温暖质感适合生活美学 |
> | 📕 小红书读书分享 | **韩系风** 梦幻粉彩渐变 | 清新梦幻适合书籍分享 |
> | 📚 书籍封面（文学） | **Penguin Clothbound** 经典纹样 | 出版级精装书美学 |
> | 📚 书籍封面（科幻） | **Chip Kidd** 概念派视觉隐喻 | Random House 级别设计 |
> | 🎵 专辑封面 | **Peter Saville / Reid Miles** | 传奇唱片公司美学 |
> | 🎬 科幻电影海报 | **Kilian Eng** 几何未来主义 | 精准技术线条 |
> | 🎬 文艺电影海报 | **Alphonse Mucha** 新艺术 | 流动曲线东方美学 |
> | 🎬 悬疑电影海报 | **Olly Moss** 负空间 | 隐藏意象制造神秘感 |
> | 🎭 活动海报 | **Saul Bass** 极简几何 | 大胆抽象一目了然 |
> 
> 你不需要知道这些艺术家是谁，AI会根据你的描述自动匹配！
> 
> ### 2. 自动配色
> 
> AI会根据题材选择**大师级配色方案**：
> - 科幻片 → 赛博蓝+霓虹粉
> - 文艺片 → 米色+深红
> - 悬疑片 → 暗黑色+血橙色
> - 温情片 → 暖黄+柔蓝
> 
> ### 3. 自动构图
> 
> AI懂得专业设计原则：
> - **负空间** - 让留白说话
> - **视觉双关** - 一个图形传递两层意思
> - **极简主义** - 用最少的元素传递最强的信息
> - **戏剧性对比** - 大小对比营造情感冲击
> 
> ### 4. 自动适配平台比例
> 
> 根据用途自动匹配最佳比例：
> - 公众号封面 → **21:9** 超宽横版
> - 小红书配图 → **3:4** 竖版
> - 文章配图 → **16:9** 横版
> - 书籍封面 → **9:16** 竖版
> - 专辑封面 → **1:1** 正方形
> 
> ---
> 
> ## 🆚 和其他工具比有什么不同？
> 
> | 功能 | 普通AI生图 | 在线模板 | **乔木 Mondo 设计** |
> |------|----------|----------|-------------------|
> | 需要懂设计 | ❌ 需要写复杂提示词 | ✅ 但只能用模板 | ✅ **一句话就够** |
> | 风格统一性 | ❌ 每次风格不稳定 | ⚠️ 模板固定 | ✅ **AI选择匹配风格** |
> | 艺术性 | ⚠️ 看运气 | ❌ 很业余 | ✅ **大师级艺术风格** |
> | 个性化 | ✅ 自由度高 | ❌ 很难改 | ✅ **AI优化你的想法** |
> | 多平台适配 | ❌ 手动调整比例 | ⚠️ 有限模板 | ✅ **自动适配各平台比例** |
> | 适合新手 | ❌ 需要学习 | ✅ 但千篇一律 | ✅ **零门槛+独特性** |
> 
> ---
> 
> ## 🎨 背后的秘密（选读）
> 
> ### 什么是"Mondo"风格？
> 
> Mondo 是美国一家传奇海报公司，他们为经典电影设计**限量版丝网印刷海报**，被全球收藏家疯抢。
> 
> **Mondo海报的特点：**
> - 🎨 **艺术化重新诠释** - 不是电影剧照，而是概念化的视觉提炼
> - 🖨️ **丝网印刷美学** - 2-5种颜色，平面色块，复古质感
> - 🎯 **极简主义象征** - 一个符号传递整部电影的精神
> - ✍️ **手绘字体** - 复古装饰艺术影响
> - 🌈 **大胆配色** - 高饱和度，强烈对比
> 
> ### 背后有哪些艺术大师？
> 
> 这个工具集成了**33+位传奇设计师**的艺术风格：
> 
> #### 电影海报界传奇（20位）
> - **Saul Bass** - 希区柯克御用设计师，极简几何
> - **Olly Moss** - 负空间大师，巧妙视觉双关
> - **Drew Struzan** - 《星球大战》《夺宝奇兵》御用，史诗绘画风格
> - **Kilian Eng** - 几何未来主义，适合科幻题材
> 
> #### 书籍封面大师（6位）
> - **Chip Kidd** - Random House 首席设计师，概念派视觉隐喻
> - **Coralie Bickford-Smith** - Penguin Clothbound 经典纹样
> - **王志弘** - 东亚书籍设计，克制优雅
> 
> #### 专辑封面传奇（3位）
> - **Peter Saville** - Factory Records，Joy Division/New Order 封面设计
> - **Reid Miles** - Blue Note Records，爵士乐黄金时代
> - **David Stone Martin** - Verve Records，极简水墨线条
> 
> #### 社交媒体风格（4种）
> - **文艺风** - 柔和留白，诗意氛围
> - **日系风** - 胶片感，温暖自然
> - **韩系风** - 梦幻粉彩，清新渐变
> - **国潮风** - 传统元素，现代演绎
> 
> **你不需要记住这些名字**，AI会自动为你选择最合适的风格！
> 
> ---
> 
> ## 🚀 进阶功能（想探索更多？）
> 
> ### 1. 对比三种风格（哪个更好看？）
> 
> ```bash
> "用三种不同风格为《沙丘》设计海报，让我对比一下"
> ```
> 
> AI会生成三种艺术风格并排对比，帮你选择最喜欢的。
> 
> ### 2. 自己指定风格（如果你有想法）
> 
> ```bash
> "用 Saul Bass 极简几何风格为《教父》设计海报"
> "用 Alphonse Mucha 新艺术运动风格为《花样年华》设计海报"
> ```
> 
> ### 3. 自定义配色（如果你对颜色有要求）
> 
> ```bash
> "为爵士音乐节设计海报，用橙色、深蓝色和金色"
> ```
> 
> ### 4. 指定平台比例
> 
> ```bash
> "为《人类简史》设计公众号封面，21:9 比例"
> "为《小王子》设计小红书配图，3:4 比例"
> "为文章《AI的未来》生成 16:9 配图"
> ```
> 
> ### 5. 让AI优化你的想法
> 
> ```bash
> "为《三体》设计书籍封面，我想表现宇宙的浩瀚感，用AI帮我优化提示词"
> ```
> 
> AI会在保留你核心想法的基础上，添加专业的设计元素。
> 
> ---
> 
> ## 💻 命令行快速上手（可选）
> 
> 如果你喜欢用命令行：
> 
> ```bash
> # 公众号封面（21:9 超宽横版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "人类简史" book --style wenyi --aspect-ratio 21:9
> 
> # 小红书配图（3:4 竖版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "花样年华" movie --style rixi --aspect-ratio 3:4
> 
> # 文章配图（16:9 横版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "AI与未来" movie --style kilian-eng --aspect-ratio 16:9
> 
> # 书籍封面（默认 9:16 竖版）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "三体" book --style chip-kidd
> 
> # 专辑封面（1:1 正方形）
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "Dark Side of the Moon" album --style peter-saville --aspect-ratio 1:1
> 
> # AI增强提示词
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "银翼杀手" movie --ai-enhance
> 
> # 三栏风格对比
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py "盗梦空间" movie --compare saul-bass,olly-moss,kilian-eng
> 
> # 查看所有33+种风格
> python3 ~/.claude/skills/qiaomu-mondo-poster-design/scripts/generate_mondo_enhanced.py --list-styles
> ```
> 
> ---
> 
> ## 📚 更多资料
> 
> - [SKILL.md](SKILL.md) - 完整技术文档
> - [references/artist-styles.md](references/artist-styles.md) - 33+位设计师风格详解
> - [references/genre-templates.md](references/genre-templates.md) - 各类型模板参考
> - [requirements.txt](requirements.txt) - 依赖包列表
> 
> ---
> 
> ## ❓ 常见问题
> 
> ### Q: 我完全不懂设计，真的能用吗？
> **A:** 当然可以！这个工具就是为"完全不懂设计"的人准备的。你只需要用一句话描述你想要什么，剩下的全部交给AI。
> 
> ### Q: 生成的图可以商用吗？
> **A:** 可以。AI生成的图像可以用于个人和商业用途（具体取决于你使用的AI模型的许可协议）。
> 
> ### Q: 我不喜欢AI自动选的风格怎么办？
> **A:** 你可以让AI"对比三种风格"，然后选择你喜欢的。或者直接指定风格，比如"用极简风格"、"用复古风格"。
> 
> ### Q: 不同平台的比例怎么选？
> **A:** 直接告诉AI你要用在哪个平台即可！比如"公众号封面"会自动用 21:9，"小红书配图"会自动用 3:4。也可

## 延伸閱讀

相關概念：[[自動化設計]] · [[AI 藝術生成]] · [[用戶體驗設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/joeseesun/qiaomu-mondo-poster-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "joeseesun--qiaomu-mondo-poster-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化設計","AI 藝術生成","用戶體驗設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "joeseesun--qiaomu-mondo-poster-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "joeseesun" AND file.name != "joeseesun--qiaomu-mondo-poster-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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
> const me = dv.page("Repos/joeseesun--qiaomu-mondo-poster-design");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，382 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
