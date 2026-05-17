---
repo: ConardLi/garden-skills
url: https://github.com/ConardLi/garden-skills
owner: ConardLi
owner_type: User
language: CSS
license: MIT
description: "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more."
homepage: "https://github.com/ConardLi/garden-skills"
stars: 4987
stars_per_day: 199
forks: 723
open_issues: 2
created: 2026-04-21
pushed_at: 2026-05-12
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "技能集"
release_tag: "web-design-engineer-v1.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一系列針對 AI 編程代理的技能，涵蓋網頁設計、知識檢索、圖像生成等多種功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 3
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 26322
readme_length: 9856
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1238,2026-04-26:1238,2026-04-27:1383,2026-04-27:1386,2026-04-28:1554,2026-04-28:1556,2026-04-29:1691,2026-04-30:1786,2026-05-01:1919,2026-05-02:2020,2026-05-03:2109,2026-05-04:2192,2026-05-05:2291,2026-05-06:2383,2026-05-07:2474,2026-05-08:2565,2026-05-09:2752,2026-05-10:3125,2026-05-11:3721,2026-05-12:4216,2026-05-13:4434,2026-05-14:4635,2026-05-15:4776,2026-05-16:4883,2026-05-17:4987"
tags:
  - github
  - "category/開發工具"
  - "lang/css"
  - easy_install
  - "topic/agent"
  - "topic/claude"
  - "topic/gpt_image_2"
  - "topic/rag"
  - "topic/skills"
aliases:
  - "garden-skills"
  - "ConardLi/garden-skills"
  - "提供一系列針對 AI 編程代理的技能，涵蓋網頁設計、知識檢索、圖像生成等多種功能。"
---

# garden-skills

**5.0k** stars · **199** stars/天 · 建立 25 天前 · CSS · MIT

```dataviewjs
const me = dv.page("Repos/ConardLi--garden-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`web-design-engineer-v1.1.0` `easy-install`

`agent` `claude` `gpt-image-2` `rag` `skills` `web-design`

> [!summary] 一句話摘要
> 提供一系列針對 AI 編程代理的技能，涵蓋網頁設計、知識檢索、圖像生成等多種功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (199 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要快速開發前端技能的開發者，特別是使用 AI 代理進行設計的團隊。
> **一句話重點** Garden Skills 不僅是一個技能集合，更是一個系統化的設計工具，能夠提升開發者的工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能集" && p.file.name !== "ConardLi--garden-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能集 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到快速開發的能力，值得考慮。

> [!abstract] 核心創新
> 這個專案提供了一個系統化的技能集合，專注於提升 AI 編程代理的設計能力。

## 專案簡介

Garden Skills 是一個針對 Claude Code、Cursor、Codex 等 AI 編程代理的技能集合，旨在提升開發者的工作效率。用戶可以透過 `npx skills add` 指令快速安裝所需的技能，例如 `npx skills add ConardLi/garden-skills -s web-design-engineer`，這樣就能將網頁設計技能添加到專案中。這個專案的設計理念是將 AI 代理視為設計工程師，通過六個步驟的設計流程來創建高質量的前端作品，從需求分析到驗證結果，確保每個階段都有清晰的指導。技術上，專案使用 TypeScript 和 React，並且支持多種安裝方式，包括 CLI、Git 子模組和直接下載 ZIP 檔案，這使得它在不同的環境中都能靈活運用。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 AgriciDaniel/claude-obsidian，Garden Skills 提供了更為全面的技能組合，並且在設計流程上更為系統化，特別適合需要快速原型設計的開發者。在實際使用中，這些技能能夠處理從簡單的 HTML 頁面到複雜的數據可視化，並且提供了針對不同裝置的響應式設計建議。這個專案目前處於活躍開發中，社群回應積極，並且有不斷更新的版本釋出，適合中小型團隊進行實驗和開發。對於需要快速開發和迭代的團隊來說，這是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `React` · `Node.js 20+`

## 重點功能

- 多種安裝方式 — 支持 CLI 安裝、ZIP 下載、Git 子模組等，方便不同環境使用。
- 六步驟設計流程 — 從需求分析到驗證結果，確保每個階段都有清晰的指導。
- 支持多種前端技術 — 包括 HTML、CSS、JavaScript 和 React，適合各種開發需求。
- 響應式設計建議 — 提供針對不同裝置的設計建議，提升用戶體驗。
- 實用的實作規則 — 包括 CSS tokens 和動畫處理，幫助開發者創建高質量的前端作品。

## 快速開始

1. 安裝所有技能
```bash
npx skills add ConardLi/garden-skills
```
2. 安裝特定技能
```bash
npx skills add ConardLi/garden-skills -s web-design-engineer
```
3. 驗證安裝的 checksum
```bash
curl -fsSL -o "${SKILL}.zip.sha256" "https://github.com/ConardLi/garden-skills/releases/download/${SKILL}-v${VERSION}/${SKILL}-${VERSION}.zip.sha256" && shasum -a 256 -c "${SKILL}.zip.sha256"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 4987 stars（199/天），forks 723（14.5%），顯示出強勁的增長潛力。作者 ConardLi 在開源社群中有一定的影響力，過去的專案也受到廣泛關注。這個專案解決了開發者在使用 AI 代理時缺乏系統化技能的痛點，之前的解決方案往往零散且不夠整合。近期的社群討論和推廣活動也提升了專案的曝光率，讓更多開發者開始使用這些技能。技術上，隨著 AI 技術的進步，這些技能的實用性和需求也隨之增加，促進了專案的快速成長。

## 適合誰使用

**目標受眾**：需要快速開發前端技能的開發者，特別是使用 AI 代理進行設計的團隊。

> [!example] 使用場景
> - 前端工程師用它來快速構建響應式網頁，因為它提供了完整的設計流程和實作建議。
> - 產品經理用它來創建交互式原型，因為能夠快速迭代和驗證設計想法。
> - 數據科學家用它來生成數據可視化，因為它支持多種圖表和動畫效果，提升報告的專業性。

## 架構分析

Garden Skills 的架構設計旨在提供靈活的技能安裝和使用方式。它採用模組化設計，每個技能都獨立於主專案，這樣可以輕鬆地進行版本控制和更新。資料流方面，使用者透過 CLI 指令安裝技能，系統會自動將技能放置在正確的目錄中，並進行必要的配置。

這種設計使得使用者能夠快速上手，而不需要深入了解每個技能的內部實作。選擇這種架構的代價是需要維護多個技能的版本和相依性，但這也使得專案能夠快速迭代和擴展。擴展性方面，隨著新技能的加入，使用者可以輕鬆地將其整合到現有的工作流中，這樣的設計使得 Garden Skills 能夠適應不斷變化的開發需求。

## 技術深入分析

Garden Skills 的核心技術機制是模組化的技能設計，每個技能都可以獨立安裝和使用，這樣的設計使得開發者能夠根據需求選擇合適的技能。專案使用 TypeScript 和 React，這不僅提高了開發效率，還確保了代碼的可維護性和可擴展性。效能方面，這些技能能夠快速響應用戶的請求，並且支持多種運行模式，這使得它們能夠在不同的環境中運行而不會影響性能。設計取捨方面，選擇使用 Node.js 作為後端技術，這樣能夠利用其非同步處理能力，但也帶來了對於 Node.js 版本的依賴。技術風險方面，隨著技能數量的增加，維護和更新的成本可能會上升，特別是在處理相依性時。整合分析方面，Garden Skills 與主流的開發框架（如 React）相容性良好，並且可以輕鬆整合到 CI/CD pipeline 中，這使得它在現代開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多種安裝方式和使用範例。安裝過程相對順暢，但需要注意 Node.js 版本要求。文件提供了多語言版本，方便不同語言的使用者。整體來說，花 30 分鐘即可完成基本的安裝和使用。

## 優缺點分析

> [!success] 優點
> - 靈活的安裝方式，適應不同的開發環境。
> - 系統化的設計流程，幫助開發者快速上手。
> - 支持多種前端技術，滿足不同需求。

> [!danger] 缺點
> - 對於新手來說，可能需要時間理解每個技能的使用方式。
> - 部分技能的功能可能不夠全面，需要額外的工具輔助。
> - 在某些環境中可能會遇到相容性問題。

> [!warning] 注意事項
> - 目前僅支持 Node.js 20 以上版本。
> - 部分技能可能需要額外的依賴，需手動安裝。
> - 不支持在某些舊版環境中運行，特別是對於不支持 ES 模組的環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成遊戲角色，功能較為單一，適合遊戲開發者使用。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供知識管理功能，但不具備前端設計的能力，適合需要知識檢索的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲角色生成，功能較為單一，適合遊戲開發者使用。 | 如果你的專案主要集中在遊戲開發，且需要專門的角色生成工具。 | medium，因為需要適應不同的技能架構和使用方式。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 提供知識管理功能，但不具備前端設計的能力，適合需要知識檢索的用戶。 | 如果你的需求主要集中在知識管理和檢索，而不是前端開發。 | low，因為功能範圍較小，易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **garden-skills** | **agent-sprite-forge** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲角色生成，功能較為單一，適合遊戲開發者使用。 | 提供知識管理功能，但不具備前端設計的能力，適合需要知識檢索的用戶。 |
> | 遷移成本 | - | medium，因為需要適應不同的技能架構和使用方式。 | low，因為功能範圍較小，易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，且需要專門的角色生成工具。 | 如果你的需求主要集中在知識管理和檢索，而不是前端開發。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人和小型團隊的實驗性專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中安裝時可能會遇到相依性問題
  - 解法：確保使用 Node.js 20 以上版本
- [MEDIUM] 部分技能的功能可能不夠全面，需額外工具輔助
  - 解法：根據需求選擇合適的技能
- [MEDIUM] 對於新手來說，可能需要時間理解每個技能的使用方式
  - 解法：參考 README 和示範範例

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊進行快速原型開發 | 非常適合 | 提供了完整的設計流程和實作建議，能夠快速迭代。 |
| 大型企業的前端開發團隊 | 適合 | 雖然功能全面，但可能需要額外的整合和維護投入。 |
| 個人開發者進行小型專案 | 非常適合 | 安裝簡單，能夠快速上手，滿足基本需求。 |
| 需要高效能的商業應用開發 | 不適合 | 目前仍處於 beta 階段，穩定性和性能可能不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到快速開發的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，並且不存取敏感資料。依賴鏈中的風險較低，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
| Forks | 723 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-04-21 |
| 官方網站 | [Link](https://github.com/ConardLi/garden-skills) |
| Repo 大小 | 25.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ConardLi/garden-skills) |
| Topics | `agent` `claude` `gpt-image-2` `rag` `skills` `web-design` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "CSS" : 44
>     "TypeScript" : 44
>     "JavaScript" : 10
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ConardLi](https://github.com/ConardLi) | 42 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 5 |
> | [@eltociear](https://github.com/eltociear) | 2 |

**最新版本**：web-design-engineer-v1.1.0 — web-design-engineer v1.1.0 (2026-05-12)

> [!info]- Release Notes
> ## web-design-engineer v1.1.0
> 
> Changes since [`web-design-engineer-v1.0.0`](https://github.com/ConardLi/garden-skills/releases/tag/web-design-engineer-v1.0.0):
> 
> - chore(release): bump version of web-design-engineer to 1.1.0 (7c1169d)
> 
> ### Install
> 
> ```bash
> # via skills CLI (any agent)
> npx skills add ConardLi/garden-skills/tree/web-design-engineer-v1.1.0/skills/web-design-engineer
> 
> # or download the pinned zip directly
> curl -fsSL -o web-design-engineer.zip \
>   https://github.com/ConardLi/garden-skills/releases/download/web-design-engineer-v1.1.0/web-design-engineer-1.1.0.zip
> unzip web-design-engineer.zip -d .claude/skills/   # or .agents/skills/, .codex/skills/, etc.
> ```
> 
> **SHA-256:** `12ca214541718dee5ada5aca53b5f48a5c11abc35931c53e362b6826a5a94abd`

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/ConardLi/garden-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-07 ~ 2026-05-12）
> **活躍天數** 3 天 · **最新 commit** docs(readme): sync download links for web-design-engineer v1.1.0

## README 摘錄

> [!info]- 展開查看原文 README
> # Garden Skills
> 
> **A curated collection of production-ready [Agent Skills](https://support.claude.com/en/articles/12512176-what-are-skills) for Claude Code, Cursor, Codex, and other AI coding agents.**
> 
> web-video-presentation
> Web video / presentation
> 
> web-design-engineer
> Design / frontend
> 
> gpt-image-2
> Image generation / prompting
> 
> kb-retriever
> Local knowledge retrieval
> 
> [](./LICENSE)
> [](https://github.com/ConardLi/garden-skills/stargazers)
> [](#contributing)
> [](#skills-gallery)
> [](https://agentskills.io)
> 
> [English](./README.md) · [中文文档](./README.zh-CN.md) · [日本語](./README.ja-JP.md)
> 
> ---
> 
> 
> ## Install
> 
> There are five supported install paths. Pick the one that fits your stack:
> 
> | # | Method | Best for | Pinned version? |
> |---|---|---|---|
> | A | [`skills` CLI (`npx skills add`)](#option-a--skills-cli-npx) | Any agent, one-line install, pick & choose skills | ✅ via tag URL |
> | B | [Claude Code plugin marketplace](#option-b--claude-code-plugin-marketplace) | Claude Code users who want to subscribe to plugin packs | ✅ via marketplace version |
> | C | [Pinned `.zip` from GitHub Releases](#option-c--pinned-zip-from-releases) | CI / air-gapped envs / reproducible installs | ✅ ✅ (immutable) |
> | D | [Manual copy after `git clone`](#option-d--manual-copy-into-your-project) | Local hacking on the skill itself | ❌ (tracks `main`) |
> | E | [Git submodule](#option-e--git-submodule) | Vendored into a larger project, want upstream updates | ✅ via submodule SHA |
> 
> > Each skill section above also has a **`Download v .zip`** link in
> > its "Links:" row that points at the current pinned release artifact. Those
> > URLs are auto-rewritten by [`scripts/release/update-readme.mjs`](./scripts/release/update-readme.mjs)
> > on every release, so they always advertise the latest immutable version.
> 
> 
> # Install all four skills (latest)
> npx skills add ConardLi/garden-skills
> 
> 
> # Install just one skill (latest)
> npx skills add ConardLi/garden-skills -s web-design-engineer
> 
> 
> # Install globally (~/.skills) instead of per-project (./.skills)
> npx skills add ConardLi/garden-skills -s gpt-image-2 --global
> 
> 
> # Verify the checksum (highly recommended for unattended installs)
> curl -fsSL -o "${SKILL}.zip.sha256" \
>   "https://github.com/ConardLi/garden-skills/releases/download/${SKILL}-v${VERSION}/${SKILL}-${VERSION}.zip.sha256"
> shasum -a 256 -c "${SKILL}.zip.sha256"
> 
> 
> ### Option A · `skills` CLI (npx)
> 
> The fastest agent-agnostic path. Uses the standard [`npx skills` CLI](https://www.npmjs.com/package/skills),
> which auto-detects your agent (Claude Code, Cursor, Codex, etc.) and drops the
> skill into the right directory.
> 
> ```bash
> 
> ### Option B · Claude Code plugin marketplace
> 
> If you use [Claude Code](https://docs.anthropic.com/en/docs/claude-code), you
> can subscribe to the marketplace and install plugin packs that bundle one or
> more skills together:
> 
> ```bash
> /plugin marketplace add ConardLi/garden-skills
> /plugin install presentation-skills@garden-skills
> /plugin install web-design-skills@garden-skills
> /plugin install knowledge-base-skills@garden-skills
> /plugin install image-generation-skills@garden-skills
> ```
> 
> Plugin packs are declared in [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json):
> 
> | Plugin pack | Skills included |
> |---|---|
> | `presentation-skills` | `web-video-presentation` |
> | `web-design-skills` | `web-design-engineer` |
> | `knowledge-base-skills` | `kb-retriever` |
> | `image-generation-skills` | `gpt-image-2` |
> 
> 
> ### Option C · Pinned `.zip` from Releases
> 
> Every formal release publishes an immutable `.zip` (with a SHA-256 checksum) to
> [GitHub Releases](https://github.com/ConardLi/garden-skills/releases). Pin to
> this from CI, Dockerfiles, or air-gapped installers when you need the exact
> bytes to never move under you.
> 
> ```bash
> 
> ### Option D · Manual copy into your project
> 
> Clone the repo and copy the skill folder you want — handy if you want to fork
> or hack on the skill itself.
> 
> ```bash
> git clone https://github.com/ConardLi/garden-skills.git
> cp -r garden-skills/skills/web-design-engineer  your-project/.claude/skills/
> 
> ### Option E · Git submodule
> 
> For vendoring into a larger project where you want to track upstream updates:
> 
> ```bash
> git submodule add https://github.com/ConardLi/garden-skills.git vendor/garden-skills
> ln -s ../../vendor/garden-skills/skills/web-design-engineer .claude/skills/web-design-engineer
> ```
> 
> Pin to a release tag for reproducibility:
> 
> ```bash
> cd vendor/garden-skills
> git checkout web-design-engineer-v1.0.0
> ```
> 
> ---
> 
> 
> ## Table of contents
> 
> | Install | Use | Contribute |
> |---|---|---|
> | [Install](#install)[`skills` CLI (npx)](#option-a--skills-cli-npx)[Claude Code plugin marketplace](#option-b--claude-code-plugin-marketplace)[Pinned `.zip` from Releases](#option-c--pinned-zip-from-releases)[Manual copy](#option-d--manual-copy-into-your-project)[Git submodule](#option-e--git-submodule) | [Compatibility](#compatibility)[What is a Skill?](#what-is-a-skill) | [Contributing](#contributing)[Acknowledgments](#acknowledgments)[License](#license) |
> 
> ---
> 
> 
> ### [`web-video-presentation`](./skills/web-video-presentation)
> 
> **Category:** Web Video / Presentation Engineering  
> **Best for:** turning scripts, articles, lessons, product demos, and talks into click-driven 16:9 web presentations that can be screen-recorded as cinematic videos.
> 
> `web-video-presentation` builds record-ready Vite + React + TypeScript presentations that behave like video production surfaces. The workflow turns raw articles into narration scripts, maps script beats to full-screen scenes, pauses at required checkpoints, and can optionally synthesize narration audio after the visual outline is approved.
> 
> Highlights:
> 
> - Fixed 1920×1080 stage that scales to the viewport for stable screen recording
> - Click / keyboard driven `(chapter, step)` cursor, with one narration beat per visual step
> - Hard collaboration checkpoints for script, theme, outline, implementation mode, and optional audio
> - Hidden hover-only progress controls so the stage stays clean while recording
> - Theme-token architecture with multiple visual languages, from `paper-press` to `terminal-green`
> - Scaffolded Vite + React + TypeScript project with reusable stage primitives and recording guidance
> 
> Links: [README](./skills/web-video-presentation/README.md) · [SKILL.md](./skills/web-video-presentation/SKILL.md) · [Download v1.1.5 .zip](https://github.com/ConardLi/garden-skills/releases/download/web-video-presentation-v1.1.5/web-video-presentation-1.1.5.zip)
> 
> ---
> 
> 
> ### [`web-design-engineer`](./skills/web-design-engineer)
> 
> **Category:** Design / Frontend  
> **Best for:** web pages, landing pages, dashboards, interactive prototypes, HTML slide decks, animations, UI mockups, data visualizations, and design-system explorations.
> 
> `web-design-engineer` turns AI-generated web artifacts from merely functional into polished, deliberate, and visually memorable front-end work. It treats the agent as a design engineer: first understanding product context, then declaring a design system, showing an early v0, building the full experience, and verifying the result.
> 
> Highlights:
> 
> - Defines a six-step design workflow: requirements → context → design system → v0 → full build → verification
> - Pushes beyond generic AI UI patterns with an anti-cliché blocklist and stronger visual judgment
> - Covers HTML / CSS / JavaScript / React prototypes, with guidance for responsive layout, motion, and interaction polish
> - Includes practical implementation rules for inline React + Babel, CSS tokens, `oklch()` color work, container queries, and reduced-motion handling
> - Ships an advanced patterns reference for device frames, slide engines, animation timelines, dashboards, and other reusable web artifacts
> 
> Links: [README](./skills/web-design-engineer/README.md) · [SKILL.md](./skills/web-design-engineer/SKILL.md) · [Website](./website/web-design-website) · [Demo](./demo/web-design-demo) · [Download v1.1.0 .zip](https://github.com/ConardLi/garden-skills/releases/download/web-design

## 延伸閱讀

相關概念：[[RAG]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]]

[GitHub](https://github.com/ConardLi/garden-skills) · [官方網站](https://github.com/ConardLi/garden-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：技能集）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能集" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "CSS" AND file.name != "ConardLi--garden-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["RAG","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ConardLi--garden-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ConardLi--garden-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ConardLi" AND file.name != "ConardLi--garden-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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
> const me = dv.page("Repos/ConardLi--garden-skills");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 再次上榜，1.6k stars
- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.2k stars
