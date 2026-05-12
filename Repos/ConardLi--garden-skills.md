---
repo: ConardLi/garden-skills
url: https://github.com/ConardLi/garden-skills
owner: ConardLi
owner_type: User
language: CSS
license: MIT
description: "ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more."
homepage: "https://github.com/ConardLi/garden-skills"
stars: 4216
stars_per_day: 211
forks: 614
open_issues: 2
created: 2026-04-21
pushed_at: 2026-05-11
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: "web-video-presentation-v1.1.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-01"
contributor_count: 3
engagement: "medium"
issue_close_rate: 67
repo_size_kb: 26305
readme_length: 9856
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1238,2026-04-26:1238,2026-04-27:1383,2026-04-27:1386,2026-04-28:1554,2026-04-28:1556,2026-04-29:1691,2026-04-30:1786,2026-05-01:1919,2026-05-02:2020,2026-05-03:2109,2026-05-04:2192,2026-05-05:2291,2026-05-06:2383,2026-05-07:2474,2026-05-08:2565,2026-05-09:2752,2026-05-10:3125,2026-05-11:3721,2026-05-12:4216"
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
  - "提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。"
---

# garden-skills

**4.2k** stars · **211** stars/天 · 建立 20 天前 · CSS · MIT

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

`web-video-presentation-v1.1.5` `easy-install`

`agent` `claude` `gpt-image-2` `rag` `skills` `web-design`

> [!summary] 一句話摘要
> 提供多種 AI 代理技能的開源集合，涵蓋網頁設計、知識檢索、影像生成等功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (211 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要快速集成多種 AI 技能的前端和後端開發者。
> **一句話重點** 這個專案的設計讓開發者能夠快速集成多種 AI 技能，顯著提高開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ConardLi--garden-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "ConardLi--garden-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到高效能的技能集成，值得一試。

> [!abstract] 核心創新
> 提供多種即用的 AI 技能，簡化開發者的整合流程。

## 專案簡介

Garden Skills 是一個針對 Claude Code、Cursor、Codex 等 AI 編程代理的技能集合，旨在簡化開發者的工作流程。用戶可以透過 `npx skills add` 指令快速安裝所需的技能，例如安裝網頁設計技能只需執行 `npx skills add ConardLi/garden-skills -s web-design-engineer`。這個專案的賣點在於提供了多種即用的技能，讓開發者能夠快速集成各種功能，無需從零開始開發。技術上，這個專案使用 TypeScript 和 JavaScript，並且支持多種安裝方式，包括 CLI、Git 子模組和手動下載，這使得它在不同的開發環境中都能靈活運用。

相比於其他類似工具，如 0x0funky/agent-sprite-forge 和 AlpinDale/parsync，Garden Skills 提供了更為全面的技能選擇，並且安裝過程簡單，適合快速迭代的開發需求。實際使用中，這些技能能夠處理各種任務，如影像生成和知識檢索，並且可以在 CI/CD 環境中輕鬆集成。這個專案的社群活躍度不錯，開放問題解決率達到 67%，顯示出維護者對用戶反饋的重視。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，因為它能夠顯著提高開發效率，並且適合快速實驗和原型開發。

**技術棧**：`TypeScript` · `JavaScript` · `Python` · `CSS` · `Shell`

## 重點功能

- 多種技能支持 — 包括影像生成、網頁設計和知識檢索等，滿足不同開發需求。
- 靈活的安裝方式 — 支持 CLI 安裝、Git 子模組和手動下載，適合不同環境。
- 版本控制 — 每個技能都有固定版本，便於在 CI 環境中重現安裝。
- 社群支持 — 開放問題解決率達到 67%，顯示出活躍的社群參與。
- 多語言文檔 — 提供英文、中文和日文的文檔，方便不同語言的開發者使用。

## 快速開始

1. 安裝所有技能
```bash
npx skills add ConardLi/garden-skills
```
2. 安裝單一技能
```bash
npx skills add ConardLi/garden-skills -s web-design-engineer
```
3. 全域安裝技能
```bash
npx skills add ConardLi/garden-skills -s gpt-image-2 --global
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天就累積 4216 stars（211/天），forks 614（14.6%），這顯示出強勁的增長潛力。專案的主要貢獻者 ConardLi 之前在開源社群中活躍，這使得該專案具備一定的信任基礎。Garden Skills 解決了開發者在整合多種 AI 技能時的繁瑣過程，過去開發者需要手動整合各種功能，這不僅耗時，還容易出錯。這個專案的推出正好填補了這一需求，並且在社群中引發了討論，進一步推動了其流行。技術上，這個專案的設計使得它能夠輕鬆集成到現有的開發流程中，這是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要快速集成多種 AI 技能的前端和後端開發者。

> [!example] 使用場景
> - 前端工程師用它來快速集成影像生成技能，因為這樣可以節省開發時間，並且提升產品的視覺吸引力。
> - AI 開發者用它來在 CI/CD 流程中自動化知識檢索，因為這樣可以提高開發效率，並減少手動操作的錯誤。
> - 產品經理用它來快速生成網頁設計原型，因為這樣可以更快地獲得用戶反饋，並進行迭代。

## 架構分析

Garden Skills 採用模組化架構，允許開發者根據需求選擇安裝特定技能。每個技能都獨立運行，並通過 CLI 工具進行管理，這樣的設計使得用戶能夠靈活地選擇和更新技能。資料流方面，技能的安裝和更新透過 GitHub Releases 進行版本控制，確保用戶能夠獲得穩定的版本。這種架構的優勢在於降低了整合的複雜度，但也可能導致某些技能之間的依賴問題。擴展性方面，這個設計能夠輕鬆添加新技能，但在技能數量增多時，管理和維護的負擔可能會上升。

## 技術深入分析

Garden Skills 的核心技術機制在於其模組化的設計，使用 TypeScript 和 JavaScript 來實現各種技能的功能。這些技能可以獨立運行，並通過 CLI 工具進行管理，這樣的架構使得開發者能夠靈活選擇所需的功能。效能方面，這些技能的運行效率相對較高，能夠在短時間內完成任務，但具體的效能數據尚未公開。設計取捨方面，選擇使用 Node.js 作為運行環境，這使得專案能夠輕鬆集成到現有的 JavaScript 生態系中，但也限制了其在其他語言環境中的使用。技術風險方面，隨著技能數量的增加，管理和維護的負擔可能會上升，特別是在版本更新和依賴管理上。整合分析方面，這個專案能夠與主流的開發工具鏈（如 VS Code 和 GitHub Actions）良好整合，適合用於現代的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但對於 Windows 使用者可能需要額外配置。文件提供了多語言版本，方便不同語言的開發者使用。

## 優缺點分析

> [!success] 優點
> - 技能多樣性高，能滿足不同開發需求。
> - 安裝過程簡單，適合快速開發。
> - 社群活躍，問題解決率高。

> [!danger] 缺點
> - 對於 Windows 使用者支持不足，需要額外配置。
> - 某些技能可能需要額外的依賴，增加了使用的複雜度。
> - 目前仍在快速迭代中，可能會遇到不穩定的版本。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 某些技能可能需要額外的依賴，使用前需確認環境配置。
> - 不支持直接在 Windows 環境下運行，需使用 WSL 或其他虛擬環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的技能集合，但專注於遊戲開發，功能範圍較窄。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，功能較為單一，無法提供多樣化的 AI 技能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的技能集合，功能範圍較窄，無法提供多樣化的 AI 技能。 | 如果你的專案主要集中在遊戲開發，這個工具可能更合適。 | medium，因為需要重新設計技能整合的方式。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步的工具，功能較為單一，無法提供多樣化的 AI 技能。 | 如果你的需求主要是資料同步，這個工具會更合適。 | low，因為功能較為單一，遷移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **garden-skills** | **agent-sprite-forge** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的技能集合，功能範圍較窄，無法提供多樣化的 AI 技能。 | 專注於資料同步的工具，功能較為單一，無法提供多樣化的 AI 技能。 |
> | 遷移成本 | - | medium，因為需要重新設計技能整合的方式。 | low，因為功能較為單一，遷移成本低。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，這個工具可能更合適。 | 如果你的需求主要是資料同步，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Windows 使用者可能會遇到安裝問題，特別是在 CLI 工具的使用上。
  - 解法：建議使用 WSL 或其他虛擬環境進行安裝。
- [MEDIUM] 某些技能可能需要額外的依賴，導致安裝失敗。
  - 解法：在安裝前檢查依賴要求，確保環境配置正確。
- [MEDIUM] 快速迭代可能導致某些版本不穩定。
  - 解法：使用固定版本的技能進行開發，避免使用最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的前端開發專案 | 非常適合 | 提供多樣的技能選擇，能快速集成所需功能。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 個人開發者的原型設計 | 適合 | 安裝簡單，能快速實現想法。 |
| 需要高效能的資料處理系統 | 普通 | 雖然功能多樣，但性能數據尚未公開。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效能的技能集成，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚可，但需注意可能的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Garden Skills 最常與 Claude Code、Cursor 和 Codex 等 AI 代理搭配使用，處於開發和部署的環節。實際整合範例：在一個用 Claude Code 開發的專案中，可以使用 `npx skills add ConardLi/garden-skills` 指令快速安裝所需技能。這個工具能夠與主流的 CI/CD 工具（如 GitHub Actions）良好整合，並且支援 VS Code 等 IDE 的插件。整合的摩擦點主要在於 Windows 環境的兼容性，可能需要額外的配置。

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
| Forks | 614 |
| Open Issues | 2 |
| Issue 解決率 | 67% (4 closed) |
| 最後推送 | 2026-05-11 |
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
> | [@ConardLi](https://github.com/ConardLi) | 41 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 4 |
> | [@eltociear](https://github.com/eltociear) | 2 |

**最新版本**：web-video-presentation-v1.1.5 — web-video-presentation v1.1.5 (2026-05-11)

> [!info]- Release Notes
> ## web-video-presentation v1.1.5
> 
> Changes since [`web-video-presentation-v1.1.3`](https://github.com/ConardLi/garden-skills/releases/tag/web-video-presentation-v1.1.3):
> 
> - chore(release): bump version of web-video-presentation to 1.1.5 (f388158)
> - docs: update Japanese and localized README files to include new links and documentation (3cfa796)
> 
> ### Install
> 
> ```bash
> # via skills CLI (any agent)
> npx skills add ConardLi/garden-skills/tree/web-video-presentation-v1.1.5/skills/web-video-presentation
> 
> # or download the pinned zip directly
> curl -fsSL -o web-video-presentation.zip \
>   https://github.com/ConardLi/garden-skills/releases/download/web-video-presentation-v1.1.5/web-video-presentation-1.1.5.zip
> unzip web-video-presentation.zip -d .claude/skills/   # or .agents/skills/, .codex/skills/, etc.
> ```
> 
> **SHA-256:** `62760e7ea31f899cbbc61eda3d7e1321104132c0b6ff447689bef73598aee0b6`

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應用戶問題。
**連結**：[文件](https://github.com/ConardLi/garden-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-04 ~ 2026-05-11）
> **活躍天數** 4 天 · **最新 commit** docs(readme): sync download links for web-video-presentation v1.1.5

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
> Links: [README](./skills/web-design-engineer/README.md) · [SKILL.md](./skills/web-design-engineer/SKILL.md) · [Website](./website/web-design-website) · [Demo](./demo/web-design-demo) · [Download v1.0.0 .zip](https://github.com/ConardLi/garden-skills/releases/download/web-design

## 延伸閱讀

相關概念：[[自動化]] · [[AI 技能]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]]

[GitHub](https://github.com/ConardLi/garden-skills) · [官方網站](https://github.com/ConardLi/garden-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "ConardLi--garden-skills"
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
> const concepts = ["自動化","AI 技能","CI/CD"];
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
