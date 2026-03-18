---
repo: garrytan/gstack
url: https://github.com/garrytan/gstack
owner: garrytan
owner_type: User
language: TypeScript
license: MIT
description: "Use Garry Tan's exact Claude Code setup: 10 opinionated tools that serve as CEO, Eng Manager, Release Manager, Doc Engineer, and QA"
homepage: ""
stars: 20749
stars_per_day: 3458
forks: 2357
open_issues: 74
created: 2026-03-11
pushed_at: 2026-03-18
first_seen: 2026-03-13
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-13
use_case: "將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供十種特定工作流程技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-03-21"
contributor_count: 2
engagement: "medium"
issue_close_rate: 8
repo_size_kb: 22776
readme_length: 9851
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:2724,2026-03-13:2775,2026-03-14:6191,2026-03-14:6258,2026-03-15:10586,2026-03-15:10635,2026-03-16:14039,2026-03-16:14093,2026-03-17:17282,2026-03-17:17344,2026-03-18:20749"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "gstack"
  - "garrytan/gstack"
  - "將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供十種特定工作流程技能。"
---

# gstack

**17.3k** stars · **3.5k** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/garrytan--gstack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供十種特定工作流程技能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.5k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在多個環境中進行 QA 測試和自動化操作的開發團隊。
> **一句話重點** gstack 將 Claude Code 的功能擴展到專業團隊的工作流，讓開發者能夠更高效地管理多個任務。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "garrytan--gstack" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的多任務處理能力，值得投入。

> [!abstract] 核心創新
> gstack 將 Claude Code 轉變為一個可隨時召喚的專業團隊，提供多種工作流技能。

## 專案簡介

gstack 是一個針對 Claude Code 的工具集，旨在將其轉變為一個多功能的專業團隊。用戶可以透過簡單的指令來執行計劃審查、代碼審查、發佈、瀏覽器自動化、QA 測試等任務。核心機制是透過 `/setup-browser-cookies` 指令來導入真實的瀏覽器會話，這樣在執行 QA 或瀏覽器任務時，無需每次都手動登錄，提升了工作效率。gstack 的一句話賣點是「一個安裝，整個 AI 工程工作流程」。技術上，gstack 使用了 TypeScript 和 Go Template，並依賴 Playwright 來實現無頭瀏覽器的自動化，這使得它能夠在 macOS 和 Linux 上運行，並且不會干擾用戶的 PATH 環境。

與其他工具相比，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，gstack 提供了更為專業的工作流技能，能夠在多個 Claude Code 會話中同時運行，這對於需要同時處理多個任務的開發者來說非常有用。實際使用中，gstack 能夠處理的資料量大，並且不會因為多會話而產生衝突，這使得它在大型專案中表現優異。這個專案目前處於 beta 階段，適合希望提升工作流程效率的團隊使用。未來可能會進一步增強功能和穩定性。對於需要在多個環境中進行 QA 測試的團隊，gstack 是一個理想的選擇，但對於小型專案或單一任務的使用者來說，可能會顯得過於複雜。

**技術棧**：`TypeScript` · `Go Template` · `Shell` · `Playwright`

## 重點功能

- 十種工作流技能 — 包括計劃審查、代碼審查、發佈、瀏覽器自動化等，透過簡單的指令執行。
- /setup-browser-cookies — 導入真實瀏覽器會話，無需手動登錄，提升測試效率。
- 多會話支持 — 同時在多個 Claude Code 會話中運行，避免任務衝突。
- 自動生成文檔 — 使用 `gen:skill-docs` 指令生成技能文檔，方便團隊使用。
- 無頭瀏覽器支持 — 使用 Playwright 實現無頭瀏覽器操作，兼容 macOS 和 Linux。

## 快速開始

1. 安裝 gstack
```bash
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup
```
2. 添加 gstack 到 CLAUDE.md
```bash
在 CLAUDE.md 中添加 gstack 部分，使用 /browse 技能進行網頁瀏覽。
```
3. 運行 gstack
```bash
bun run browse/src/server.ts
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Claude Code 和 Bun。",
  "指令": "/setup-browser-cookies github.com",
  "預期輸出": "Imported 12 cookies for github.com from Comet."
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 17344 stars（3469/天），forks 1940（11.2%），這顯示出強勁的增長潛力。這個專案的作者 Garry Tan 以其在 AI 工具開發上的專業知識而聞名，並且這個工具解決了在使用 Claude Code 時，如何有效管理多個工作流的痛點。之前的解決方案往往無法提供如此多的專業技能和自動化功能。最近的推廣活動和社群的討論也促進了這個專案的曝光率。技術上，隨著無頭瀏覽器和自動化測試需求的增加，這個工具的需求也隨之上升。高達 11.2% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，代表著活躍的社群參與。

## 適合誰使用

**目標受眾**：需要在多個環境中進行 QA 測試和自動化操作的開發團隊。

> [!example] 使用場景
> - 工程經理用它來在開發過程中進行多個任務的 QA 測試，因為它能同時處理多個會話，提升測試效率。
> - 產品經理用它來進行計劃審查，因為可以快速獲得多個專業技能的反饋，確保產品方向正確。
> - 開發者用它來自動化瀏覽器操作，因為它能夠導入真實的瀏覽器會話，節省手動登錄的時間。

## 架構分析

gstack 採用模組化設計，將各種工作流技能封裝為獨立的指令。使用者透過 Claude Code 進行互動，指令背後則是 TypeScript 和 Go Template 的實作。資料流方面，使用者的請求會經過 Claude Code，然後由 gstack 處理，最終返回結果。

這樣的設計使得使用者可以輕鬆擴展功能，但也增加了學習曲線。選擇 Playwright 作為無頭瀏覽器的實現，提供了強大的自動化能力，但也需要額外的資源來運行多會話。整體而言，這種架構適合需要高效能和多任務處理的團隊，但對於小型專案可能會顯得過於複雜。

## 技術深入分析

gstack 的核心技術機制是將 Claude Code 的能力轉變為一個多功能的工作流工具。它使用 TypeScript 和 Go Template 實現，並依賴 Playwright 來進行無頭瀏覽器操作。這樣的設計使得 gstack 能夠在 macOS 和 Linux 環境中運行，並且能夠自動化許多繁瑣的任務。效能方面，gstack 能夠同時處理多個會話，這對於需要進行大量 QA 測試的團隊來說非常重要。

設計上，選擇 Playwright 而非其他無頭瀏覽器解決方案，因為它提供了更強大的 API 和更好的穩定性。這種選擇雖然增加了依賴，但也提升了整體的功能性。技術風險方面，gstack 可能在面對高並發請求時出現性能瓶頸，特別是在資源有限的環境中。整合方面，gstack 與現有的 CI/CD 流程相容性良好，能夠輕鬆融入到現有的開發工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，但缺乏詳細的範例。安裝過程相對順暢，但需要注意依賴的版本要求。整體而言，對於有一定技術基礎的使用者，能在 30 分鐘內完成安裝並運行起來。

## 優缺點分析

> [!success] 優點
> - 多樣化的工作流技能，適合各種開發需求。
> - 支持多會話，能夠同時處理多個任務，提升效率。
> - 自動化導入瀏覽器會話，節省手動登錄時間。

> [!danger] 缺點
> - 安裝和配置過程較為複雜，對新手不友好。
> - 僅支援特定平台，限制了使用範圍。
> - 對於小型專案，功能可能過於繁瑣。

> [!warning] 注意事項
> - 僅支援 macOS 和 Linux 環境。
> - 需要安裝 Bun v1.0 以上版本。
> - 對於小型專案，功能可能過於複雜。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備 gstack 的多會話和自動化能力，適合需要簡單同步的場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，但不如 gstack 提供的多樣化工作流技能，適合特定領域的需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，但不具備 gstack 的多會話和自動化能力。 | 如果你的團隊需要簡單的文件同步，而不需要複雜的工作流管理。 | low，因為功能簡單，易於上手。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，提供特定的自動化功能，但不如 gstack 提供的多樣化工作流技能。 | 如果你的專案專注於醫療領域，並需要針對性技能的支持。 | medium，因為需要調整現有工作流以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gstack** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供文件同步功能，但不具備 gstack 的多會話和自動化能力。 | 專注於醫療領域的技能，提供特定的自動化功能，但不如 gstack 提供的多樣化工作流技能。 |
> | 遷移成本 | - | low，因為功能簡單，易於上手。 | medium，因為需要調整現有工作流以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要簡單的文件同步，而不需要複雜的工作流管理。 | 如果你的專案專注於醫療領域，並需要針對性技能的支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合希望提升工作流程效率的團隊使用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上導入 cookies 時，可能會遇到 Keychain 許可問題。
  - 解法：確保在首次導入時允許 Keychain 訪問。
- [MEDIUM] 多會話同時運行時，可能會導致資源競爭。
  - 解法：確保系統資源充足，並合理分配會話數量。
- [MEDIUM] 安裝過程中可能會出現依賴版本不兼容的情況。
  - 解法：仔細檢查依賴版本，並根據 README 進行調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | gstack 提供的多樣化工作流技能能夠有效提升開發效率。 |
| 大型企業的 QA 團隊 | 適合 | 能夠同時處理多個測試任務，適合高並發需求。 |
| 單一任務的開發者 | 不適合 | 功能過於複雜，可能會影響使用體驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的多任務處理能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要訪問瀏覽器的敏感資料（cookies），並依賴 macOS Keychain 的安全性。整體設計考量了安全性，但仍需注意使用環境的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
| Forks | 1.9k |
| Open Issues | 67 |
| Issue 解決率 | 8% (6 closed) |
| 最後推送 | 2026-03-17 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 22.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/garrytan/gstack) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright` `diff` `@anthropic-ai/sdk`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 79
>     "Go Template" : 19
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@garrytan](https://github.com/garrytan) | 55 |
> | [@morluto](https://github.com/morluto) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題回應速度較慢。
**連結**：[文件](https://github.com/garrytan/gstack#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-14 ~ 2026-03-16）
> **活躍天數** 3 天 · **最新 commit** fix: update check cache — 60min UP_TO_DATE TTL + --force flag (v0.4.4) (#110)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#63](https://github.com/garrytan/gstack/issues/63) | Is this repo maintained? | 4 | 0 |
> | [#98](https://github.com/garrytan/gstack/issues/98) | No Statistical Analysis of outputs | 3 | 0 |
> | [#18](https://github.com/garrytan/gstack/issues/18) | [Security] Sensitive values leaked into stdout and model tra | 3 | 0 |
> | [#8](https://github.com/garrytan/gstack/issues/8) | browse skill: default to sonnet to save tokens | 2 | 1 |
> | [#113](https://github.com/garrytan/gstack/issues/113) | Make individual skills available via skills.sh | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # gstack
> 
> **gstack turns Claude Code from one generic assistant into a team of specialists you can summon on demand.**
> 
> Ten opinionated workflow skills for [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Plan review, code review, one-command shipping, browser automation, QA testing, engineering retrospectives, and post-ship documentation — all as slash commands.
> 
> 
> ## Install
> 
> **Requirements:** [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Git](https://git-scm.com/), [Bun](https://bun.sh/) v1.0+. `/browse` compiles a native binary — works on macOS and Linux (x64 and arm64).
> 
> 
> ### Step 1: Install on your machine
> 
> Open Claude Code and paste this. Claude will do the rest.
> 
> > Install gstack: run `git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack && cd ~/.claude/skills/gstack && ./setup` then add a "gstack" section to CLAUDE.md that says to use the /browse skill from gstack for all web browsing, never use mcp\_\_claude-in-chrome\_\_\* tools, and lists the available skills: /plan-ceo-review, /plan-eng-review, /review, /ship, /browse, /qa, /qa-only, /setup-browser-cookies, /retro, /document-release. Then ask the user if they also want to add gstack to the current project so teammates get it.
> 
> 
> ### What gets installed
> 
> - Skill files (Markdown prompts) in `~/.claude/skills/gstack/` (or `.claude/skills/gstack/` for project installs)
> - Symlinks at `~/.claude/skills/browse`, `~/.claude/skills/qa`, `~/.claude/skills/review`, etc. pointing into the gstack directory
> - Browser binary at `browse/dist/browse` (~58MB, gitignored)
> - `node_modules/` (gitignored)
> - `/retro` saves JSON snapshots to `.context/retros/` in your project for trend tracking
> 
> Everything lives inside `.claude/`. Nothing touches your PATH or runs in the background.
> 
> ---
> 
> ```
> +----------------------------------------------------------------------------+
> |                                                                            |
> |   Are you a great software engineer who loves to write 10K LOC/day         |
> |   and land 10 PRs a day like Garry?                                        |
> |                                                                            |
> |   Come work at YC: ycombinator.com/software                                |
> |                                                                            |
> |   Extremely competitive salary and equity.                                 |
> |   Now hiring in San Francisco, Dogpatch District.                          |
> |   Come join the revolution.                                                |
> |                                                                            |
> +----------------------------------------------------------------------------+
> ```
> 
> ---
> 
> 
> ## `/setup-browser-cookies`
> 
> This is my **session manager mode**.
> 
> Before `/qa` or `/browse` can test authenticated pages, they need cookies. Instead of manually logging in through the headless browser every time, `/setup-browser-cookies` imports your real sessions directly from your daily browser.
> 
> It auto-detects installed Chromium browsers (Comet, Chrome, Arc, Brave, Edge), decrypts cookies via the macOS Keychain, and loads them into the Playwright session. An interactive picker UI lets you choose exactly which domains to import — no cookie values are ever displayed.
> 
> ```
> You:   /setup-browser-cookies
> 
> Claude: Cookie picker opened — select the domains you want to import
>         in your browser, then tell me when you're done.
> 
>         [You pick github.com, myapp.com in the browser UI]
> 
> You:    done
> 
> Claude: Imported 2 domains (47 cookies). Session is ready.
> ```
> 
> Or skip the UI entirely:
> 
> ```
> You:   /setup-browser-cookies github.com
> 
> Claude: Imported 12 cookies for github.com from Comet.
> ```
> 
> First import per browser triggers a macOS Keychain prompt — click "Allow" or "Always Allow."
> 
> ---
> 
> 
> ## Uninstalling
> 
> Paste this into Claude Code:
> 
> > Uninstall gstack: remove the skill symlinks by running `for s in browse plan-ceo-review plan-eng-review review ship retro qa qa-only setup-browser-cookies document-release; do rm -f ~/.claude/skills/$s; done` then run `rm -rf ~/.claude/skills/gstack` and remove the gstack section from CLAUDE.md. If this project also has gstack at .claude/skills/gstack, remove it by running `for s in browse plan-ceo-review plan-eng-review review ship retro qa qa-only setup-browser-cookies document-release; do rm -f .claude/skills/$s; done && rm -rf .claude/skills/gstack` and remove the gstack section from the project CLAUDE.md too.
> 
> 
> ## Demo: one feature, five modes
> 
> I start almost every feature in plan mode. I describe what I want to build, then use `/plan-ceo-review` to pressure-test whether I am even building the right thing. Only after the product direction is locked do I shift into engineering, review, ship, and test.
> 
> ```
> You:   [enter plan mode, describe the feature]
>        I want to add seller photo upload to the listing app. Sellers
>        should be able to upload a photo of their item and we create
>        the listing from it.
> 
> You:   /plan-ceo-review
> 
> Claude: "Photo upload" is not the feature. The real job is helping sellers
>         create listings that actually sell. Here's what the 10-star version
>         looks like: auto-identify the product from the photo, pull specs and
>         pricing comps from the web, draft the title and description, suggest
>         the best hero image...
> 
> You:   /plan-eng-review
> 
> Claude: [Architecture diagram, state machine for upload → classify → enrich
>         → draft pipeline, async job boundaries, failure modes, test matrix]
> 
> You:   [exit plan mode, implement the plan]
> 
> You:   /review
> 
> Claude: Race condition: two tabs can overwrite cover-photo selection.
>         Trust boundary: pulling web data into draft generation creates
>         a prompt injection vector. Missing: orphan cleanup for failed uploads.
> 
> You:   (fix the issues)
> 
> You:   /ship
> 
> Claude: [Syncs main, runs tests, pushes branch, opens PR — 6 tool calls, done]
> 
> You:   /qa
> 
> Claude: Analyzing branch diff... 8 files changed, 3 routes affected.
>         [Tests /listings/new, /listings/:id, /api/listings against localhost:3000]
>         All 3 routes working. Upload + enrichment flow passes end to end.
> 
> You:   /setup-browser-cookies staging.myapp.com
> 
> Claude: Imported 8 cookies for staging.myapp.com from Chrome.
> 
> You:   /qa https://staging.myapp.com --quick
> 
> Claude: [Smoke test: homepage + 5 pages, 30 seconds]
>         Health Score: 91/100. No critical issues. 1 medium: mobile nav overlap.
> ```
> 
> 
> ## How to fly: 10 sessions at once
> 
> gstack is powerful with one Claude Code session. It is transformative with ten.
> 
> [Conductor](https://conductor.build) runs multiple Claude Code sessions in parallel — each in its own isolated workspace. That means you can have one session running `/qa` on staging, another doing `/review` on a PR, a third implementing a feature, and seven more working on other branches. All at the same time.
> 
> Each workspace gets its own isolated browser instance automatically — separate Chromium process, cookies, tabs, and logs stored in `.gstack/` inside each project root. No port collisions, no shared state, no configuration needed. `/browse` and `/qa` sessions never interfere with each other, even across ten parallel workspaces.
> 
> This is the setup I use. One person, ten parallel agents, each with the right cognitive mode for its task. That is not incremental improvement. That is a different way of building software.
> 
> 
> ### Example
> 
> Say I am building a Craigslist-style listing app and I say:
> 
> > "Let sellers upload a photo for their item."
> 
> A weak assistant will add a file picker and save an image.
> 
> That is not the real product.
> 
> In `/plan-ceo-review`, I want the model to ask whether "photo upload" is even the feature. Maybe the real feature is helping someone create a listing that actually sells.
> 
> If that is the real job, the whole plan changes.
> 
> Now the model should ask:
> 
> * Can we identify the product from the pho

## 延伸閱讀

相關概念：[[自動化]] · [[無頭瀏覽器]] · [[CI/CD]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/garrytan/gstack)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "garrytan--gstack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "garrytan--gstack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","無頭瀏覽器","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "garrytan--gstack" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/garrytan--gstack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "garrytan--gstack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "garrytan" AND file.name != "garrytan--gstack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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
> const me = dv.page("Repos/garrytan--gstack");
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

> **2026-03-13** — 首次收錄
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

- [[2026-03-18|2026-03-18]] — 再次上榜，20.7k stars
- [[2026-03-17|2026-03-17]] — 再次上榜，17.3k stars
- [[2026-03-16|2026-03-16]] — 再次上榜，14.0k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，10.6k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，6.2k stars
- [[2026-03-13|2026-03-13]] — 首次收錄，2.7k stars
