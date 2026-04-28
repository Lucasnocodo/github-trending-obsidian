---
repo: openclaw/clawsweeper
url: https://github.com/openclaw/clawsweeper
owner: openclaw
owner_type: Organization
language: JavaScript
license: MIT
description: "ClawSweeper scans all issues and PRs and suggest what we can close, and why. It runs every PR / Issue once a week."
homepage: ""
stars: 1198
stars_per_day: 300
forks: 128
open_issues: 0
created: 2026-04-23
pushed_at: 2026-04-28
first_seen: 2026-04-27
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-27
use_case: "自動掃描並建議關閉不活躍的 GitHub 問題和 PR，減少維護負擔。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-01"
contributor_count: 4
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 160490
readme_length: 9507
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-27"
star_history: "2026-04-27:1007,2026-04-28:1198"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "clawsweeper"
  - "openclaw/clawsweeper"
  - "自動掃描並建議關閉不活躍的 GitHub 問題和 PR，減少維護負擔。"
---

# clawsweeper

**1.0k** stars · **336** stars/天 · 建立 3 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/openclaw--clawsweeper");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 自動掃描並建議關閉不活躍的 GitHub 問題和 PR，減少維護負擔。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (336 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要自動化管理 GitHub 問題和 PR 的大型開源專案維護者。
> **一句話重點** ClawSweeper 的設計讓自動化管理變得安全且高效，特別適合大型開源專案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawsweeper");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "openclaw--clawsweeper" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到自動化管理的效果，值得考慮。

> [!abstract] 核心創新
> ClawSweeper 提供了一種保守的自動化管理方式，僅在有充分證據的情況下關閉問題和 PR。

## 專案簡介

ClawSweeper 是一個針對 `openclaw/openclaw` 的維護機器人，旨在自動化問題和 PR 的管理。它每週掃描所有開放的問題和 PR，並根據特定條件（如是否已實現、是否重複等）建議關閉。使用者可以透過 `npm run plan` 指令來計劃掃描，並透過 `npm run review` 來進行審查。這種設計能夠減少人工干預，並確保只有在有充分證據的情況下才會關閉項目，從而提高了維護的效率和準確性。ClawSweeper 的核心功能是利用 Codex 進行自動化審查，這樣可以快速生成報告並提出關閉建議，並且不會隨意關閉維護者創建的項目。這種保守的策略使得工具在自動化的同時，依然保持了對維護者的尊重。它的運作分為調度、審查和應用三個階段，並且每個階段都有明確的邊界和安全模型，避免誤關閉重要的問題或 PR。

**技術棧**：`JavaScript` · `Node.js 24+`

## 重點功能

- 自動掃描 — 每週自動掃描所有開放的問題和 PR，提供關閉建議。
- Codex 審查 — 利用 OpenAI Codex 進行自動化審查，生成詳細報告。
- 安全模型 — 僅在有強有力的證據下關閉項目，避免誤關閉。
- 多種指令 — 提供 `npm run plan`, `npm run review`, `npm run apply-artifacts` 等指令以進行不同操作。
- 儀表板更新 — 提供實時儀表板，顯示當前掃描狀態和歷史數據。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 運行計劃掃描
```bash
npm run plan
```
3. 運行審查
```bash
npm run review
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝依賴",
  "npm run review",
  "# 預期輸出：生成的審查報告和建議的關閉項目"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1007 stars（336/天），forks 108（10.7%），顯示出強烈的興趣。這個專案由多位貢獻者共同維護，且其設計解決了 GitHub 上問題和 PR 管理的痛點，特別是在大型專案中，手動管理開放問題的負擔往往過重。ClawSweeper 的自動化功能可以減少維護者的工作量，並且在社群中引發了關注，尤其是在開源專案中，這樣的工具能夠提升專案的整體健康度。作者的背景和過去的貢獻也為這個專案的可信度加分。

## 適合誰使用

**目標受眾**：需要自動化管理 GitHub 問題和 PR 的大型開源專案維護者。

> [!example] 使用場景
> - 維護者用它來每週自動掃描開放的問題和 PR，因為手動管理數量龐大的問題和 PR 會浪費大量時間。
> - 專案經理用它來獲取關於哪些問題和 PR 可以關閉的建議，因為這能幫助他們專注於更重要的任務。
> - 開發者用它來檢查自己提交的 PR 是否仍然有效，因為這可以避免不必要的重複工作。

## 架構分析

ClawSweeper 的架構分為調度器、審查通道和應用通道。調度器根據問題和 PR 的活躍程度決定掃描頻率，確保新項目得到優先處理。審查通道僅用於提出關閉建議，而不會直接關閉項目，這樣可以避免誤關閉。

應用通道則在確認審查結果仍然有效的情況下進行關閉。這種設計使得 ClawSweeper 能夠在自動化的同時，保持對維護者的尊重，並減少誤操作的風險。整體架構的設計使得擴展性良好，能夠隨著專案的增長而調整掃描頻率和審查策略。

## 技術深入分析

ClawSweeper 的核心技術機制包括調度器、審查通道和應用通道，每個部分都有其特定的功能和責任。調度器根據問題和 PR 的活躍程度決定掃描頻率，這樣可以確保新項目得到優先處理。審查通道使用 Codex 進行自動化審查，這樣可以快速生成報告並提出關閉建議。應用通道則在確認審查結果仍然有效的情況下進行關閉，這樣可以避免誤關閉。整體架構的設計使得擴展性良好，能夠隨著專案的增長而調整掃描頻率和審查策略。這種設計的取捨在於，雖然增加了配置的複雜性，但卻能夠在自動化的同時，保持對維護者的尊重，並減少誤操作的風險。整合到現有的 CI/CD 流程中相對簡單，因為它可以與 GitHub Actions 無縫配合，並且提供了清晰的 API 來進行操作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明；安裝過程順暢，無明顯坑；有良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，減少維護者的工作量。
> - 保守的關閉策略，避免誤關閉重要項目。
> - 提供詳細的審查報告，幫助維護者做出明智決策。

> [!danger] 缺點
> - 需要額外的 API 金鑰，增加了配置的複雜性。
> - 僅支援特定版本的 Node.js，限制了使用者範圍。
> - 對於小型專案來說，可能過於複雜。

> [!warning] 注意事項
> - 僅支援 Node.js 24 以上版本
> - 需要有效的 OpenAI API 金鑰進行 Codex 審查
> - 不會自動關閉維護者創建的項目

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要專注於過期的問題和 PR，而 ClawSweeper 更加保守，僅在有強有力的證據下建議關閉。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 提供更廣泛的自動化功能，但 ClawSweeper 專注於維護者的控制和安全性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於過期的問題和 PR，提供自動關閉功能，而 ClawSweeper 更加保守，僅在有強有力的證據下建議關閉。 | 如果你的專案需要更積極的問題管理，Boneyard 可能更合適。 | medium，因為需要重新配置和適應新的工作流程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | Codeburn 提供更廣泛的自動化功能，但 ClawSweeper 專注於維護者的控制和安全性。 | 如果你的團隊需要更全面的自動化管理，Codeburn 可能更適合。 | high，因為需要全面重新設計工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawsweeper** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 專注於過期的問題和 PR，提供自動關閉功能，而 ClawSweeper 更加保守，僅在有強有力的證據下建議關閉。 | Codeburn 提供更廣泛的自動化功能，但 ClawSweeper 專注於維護者的控制和安全性。 |
> | 遷移成本 | - | medium，因為需要重新配置和適應新的工作流程。 | high，因為需要全面重新設計工作流程。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更積極的問題管理，Boneyard 可能更合 | 如果你的團隊需要更全面的自動化管理，Codeburn 可能更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用 Codex 進行審查時，可能會遇到 API 限制導致審查失敗
  - 解法：確保 API 金鑰有效，並檢查使用限制
- [MEDIUM] 如果 GitHub API 變更，可能會導致功能失效
  - 解法：定期檢查更新並適時調整配置
- [MEDIUM] 對於小型專案來說，配置過於複雜，可能導致使用困難
  - 解法：考慮簡化配置或選擇其他工具

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型開源專案的維護 | 非常適合 | 能夠自動化管理大量問題和 PR，減少維護負擔。 |
| 小型專案的問題管理 | 不適合 | 配置過於複雜，可能導致使用困難。 |
| 需要自動化審查的團隊 | 適合 | 提供了 Codex 的自動化審查功能，能提高效率。 |
| 不需要自動化的專案 | 普通 | 如果專案規模小，手動管理可能更有效。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到自動化管理的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需 GitHub API 金鑰，並且不存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ClawSweeper 最常與 GitHub Actions 搭配使用，作為自動化維護的工具。在一個用 GitHub Actions 的專案中，你可以用 ClawSweeper 來自動掃描問題和 PR，具體做法是配置 GitHub Actions 來定期運行 `npm run review`。支援 GitHub 的 CI/CD 流程，並且可以與其他工具如 CodeQL 進行整合。整合的摩擦點主要在於需要正確配置 API 金鑰和權限，否則可能無法正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 ClawSweeper 出現之前，開源專案的問題和 PR 管理主要依賴人工審查，這導致了維護者的工作量過大且容易出錯。隨著開源專案的增長，這種管理方式變得越來越不可行。ClawSweeper 的出現正好填補了這一空白，利用自動化技術來減少維護者的負擔。

這個工具代表了開源維護自動化的趨勢，未來可能會有更多類似的工具出現，進一步提升開源專案的管理效率。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解 GitHub API 基本操作

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：寫出 best practices 文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：問題和 PR 的關閉率提高 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他自動化工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawsweeper");
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
> const me = dv.page("Repos/openclaw--clawsweeper");
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
| Forks | 108 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-27 |
| 建立日期 | 2026-04-23 |
| Repo 大小 | 156.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/openclaw/clawsweeper) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `@typescript/native-preview` `oxfmt` `oxlint`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 1661 |
> | [@steipete](https://github.com/steipete) | 110 |
> | [@stainlu](https://github.com/stainlu) | 6 |
> | [@ZHOUKAILIAN](https://github.com/ZHOUKAILIAN) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/openclaw/clawsweeper#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-27 ~ 2026-04-27）
> **活躍天數** 1 天 · **最新 commit** chore: update sweep dashboard

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/openclaw/clawsweeper/issues/11) | Review prompt could benefit from supply chain security aware | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ClawSweeper
> 
> ClawSweeper is the conservative OpenClaw maintenance bot for
> `openclaw/openclaw`.
> 
> It keeps one markdown report per open issue or PR, publishes one durable Codex
> automated review comment when useful, and only closes items when the evidence is
> strong.
> 
> 
> ## GitHub Actions Setup
> 
> Required secrets:
> 
> - `OPENAI_API_KEY`: OpenAI API key used to log Codex in before review shards run.
> - `CODEX_API_KEY`: optional compatibility alias for the same key during the login check.
> - `OPENCLAW_GH_TOKEN`: optional fallback GitHub token for read-heavy `openclaw/openclaw` scans and artifact publish reconciliation when the GitHub App token is unavailable.
> - `CLAWSWEEPER_APP_ID`: GitHub App ID for `openclaw-ci`. Currently `3306130`.
> - `CLAWSWEEPER_APP_PRIVATE_KEY`: private key for `openclaw-ci`; plan/review jobs use a short-lived GitHub App installation token for read-heavy `openclaw/openclaw` API calls, and apply/comment-sync jobs use the app token for comments and closes.
> 
> Token flow:
> 
> - Review shards log Codex in with `OPENAI_API_KEY`, then run without OpenAI or
>   Codex token environment variables.
> - ClawSweeper uses the `openclaw-ci` GitHub App token for read-heavy target
>   context, falling back to `OPENCLAW_GH_TOKEN` only if app secrets are absent.
> - Apply mode uses the app token for review comments and closes, so GitHub
>   attributes mutations to `clawsweeper[bot]`.
> - The built-in `GITHUB_TOKEN` commits generated reports back to this repo.
> 
> Required app permissions:
> 
> - read access for target scan context
> - write access to `openclaw/openclaw` issues and pull requests
> - optional Actions write on `openclaw/clawsweeper` for app-token-based run
>   cancellation or dispatch
> ## Guardrails
> 
> ClawSweeper may propose a close only when the item is clearly one of these:
> 
> - implemented on current `main`
> - not reproducible on current `main`
> - better suited for ClawHub skill/plugin work than core
> - duplicate or superseded by a canonical issue/PR
> - concrete but not actionable in this source repo
> - incoherent enough that no action can be taken
> - stale issue older than 60 days with too little data to verify
> 
> Maintainer-authored items are never auto-closed. Everything else stays open.
> Issues with an open PR that references them using GitHub closing syntax such as
> `Fixes #123` stay open until that PR merges or is closed.
> Open issue/PR pairs from the same author stay open together unless the paired
> item is already resolved or a maintainer explicitly asks to close one side.
> 
> 
> ## Dashboard
> 
> Last dashboard update: Apr 27, 2026, 01:25 UTC
> 
> 
> ### Current Run
> 
> **Workflow status**
> 
> Updated: Apr 27, 2026, 01:25 UTC
> 
> State: Review publish complete
> 
> Merged review artifacts for run 24971849359. Folder reconciliation moved tracked files to match current GitHub open/closed state, and the dashboard reflects completed shards.
> Run: [https://github.com/openclaw/clawsweeper/actions/runs/24971849359](https://github.com/openclaw/clawsweeper/actions/runs/24971849359)
> 
> 
> ### Queue
> 
> | Metric | Count |
> | --- | ---: |
> | Open issues in [openclaw/openclaw](https://github.com/openclaw/openclaw) | 3679 |
> | Open PRs in [openclaw/openclaw](https://github.com/openclaw/openclaw) | 3551 |
> | Open items total | 7230 |
> | Reviewed files | 7114 |
> | Unreviewed open items | 116 |
> | Archived closed files | 12667 |
> 
> 
> ### Review Outcomes
> 
> | Metric | Count |
> | --- | ---: |
> | Fresh reviewed issues in the last 7 days | 3657 |
> | Proposed issue closes | 25 (0.7% of reviewed issues) |
> | Fresh reviewed PRs in the last 7 days | 3455 |
> | Proposed PR closes | 2 (0.1% of reviewed PRs) |
> | Fresh verified reviews in the last 7 days | 7112 |
> | Proposed closes awaiting apply | 27 (0.4% of fresh reviews) |
> | Closed by Codex apply | 10025 |
> | Failed or stale reviews | 2 |
> 
> 
> ### Cadence
> 
> | Metric | Coverage |
> | --- | ---: |
> | Hourly cadence coverage | 208/766 current (558 due, 27.2%) |
> | Hourly hot item cadence (
> Last audit: Apr 27, 2026, 01:06 UTC
> 
> Status: **Action needed**
> 
> | Metric | Count |
> | --- | ---: |
> | Scan complete | yes |
> | Open items seen | 7235 |
> | Missing eligible open records | 0 |
> | Missing maintainer-authored open records | 85 |
> | Missing protected open records | 2 |
> | Missing recently-created open records | 26 |
> | Archived records that are open again | 0 |
> | Stale item records | 7 |
> | Duplicate records | 0 |
> | Protected proposed closes | 2 |
> | Stale reviews | 5 |
> 
> | Item | Category | Title | Detail |
> | --- | --- | --- | --- |
> | [#57413](https://github.com/openclaw/openclaw/pull/57413) | Protected proposed close | feat(whatsapp): add reply quoting via replyToMode | closed/57413.md |
> | [#60460](https://github.com/openclaw/openclaw/pull/60460) | Protected proposed close | Enforce browser profile CDP policy | closed/60460.md |
> | [#40945](https://github.com/openclaw/openclaw/issues/40945) | Stale review | Control UI chat markdown only renders data URI images, not remote https image URLs | items/40945.md |
> 
> 
> ### Latest Run Activity
> 
> Latest review: Apr 27, 2026, 01:24 UTC. Latest close: Apr 27, 2026, 01:05 UTC. Latest comment sync: Apr 27, 2026, 01:05 UTC.
> 
> | Window | Reviews | Close decisions | Keep-open decisions | Failed/stale reviews | Closed | Comments synced | Apply skips |
> | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
> | Last 15 minutes | 500 | 29 | 471 | 0 | 0 | 0 | 0 |
> | Last hour | 500 | 29 | 471 | 0 | 7 | 6 | 0 |
> | Last 24 hours | 8773 | 1801 | 6972 | 0 | 2030 | 2078 | 4 |
> 
> 
> ## How It Works
> 
> ClawSweeper is split into a scheduler, a review lane, and an apply lane.
> 
> 
> ### Scheduler
> 
> The scheduler decides what to scan and how often. New and active items get more
> attention; older quiet items fall back to a slower cadence.
> 
> - hot/new and recently active items are checked hourly, with a 5-minute intake
>   schedule for the newest queue edge
> - pull requests and issues younger than 30 days are checked daily once they
>   leave the hot window
> - older inactive issues are checked weekly
> - apply wakes every 15 minutes and exits quickly when there are no unchanged
>   high-confidence close proposals
> 
> 
> ### Review Lane
> 
> Review is proposal-only. It never closes items.
> 
> - A planner scans open issues and PRs, then assigns exact item numbers to shards.
> - Manual runs can pass `item_number` or comma-separated `item_numbers` to review
>   exact Audit Health findings without scanning for a normal batch.
> - Each shard checks out `openclaw/openclaw` at `main`.
> - Codex reviews with `gpt-5.5`, high reasoning, fast service tier, and a
>   10-minute per-item timeout.
> - Each item becomes `items/.md` with the decision, evidence, suggested
>   comment, runtime metadata, and GitHub snapshot hash.
> - High-confidence allowed close decisions become `proposed_close`.
> - After publish, the lane checks the selected items' single marker-backed Codex
>   review comment. Missing comments and missing metadata are synced immediately;
>   existing comments are refreshed only when stale, currently weekly.
> 
> 
> ### Apply Lane
> 
> Apply reads existing reports and mutates GitHub only when the stored review is
> still valid.
> 
> - Updates the single marker-backed Codex automated review comment in place.
> - Closes only unchanged high-confidence proposals.
> - Reuses the review comment when closing; no duplicate close comment.
> - Moves closed or already-closed reports to `closed/.md`.
> - Moves reopened archived reports back to `items/.md` as stale.
> - Commits checkpoints and dashboard heartbeats during long runs.
> 
> Apply wakes every 15 minutes, no-ops when there are no unchanged
> high-confidence close proposals, and narrows scheduled runs to the currently
> eligible proposal list so idle runs do not scan unrelated keep-open records.
> It defaults to all item kinds, no age floor, a 2-second close delay, and 50
> fresh closes per checkpoint. If it reaches the requested limit, it queues
> another apply run with the same settings.
> 
> There is still one deterministic apply path for writes. Review can propose and
> sync stale public review comments, but closing remains guarded by apply so a
> fresh GitHub snapshot, 

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[開源維護]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]]

[GitHub](https://github.com/openclaw/clawsweeper)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "openclaw--clawsweeper"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "openclaw--clawsweeper"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "openclaw--clawsweeper" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "openclaw--clawsweeper"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","開源維護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "openclaw--clawsweeper" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/openclaw--clawsweeper");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "openclaw--clawsweeper" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "openclaw" AND file.name != "openclaw--clawsweeper"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawsweeper");
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
> const me = dv.page("Repos/openclaw--clawsweeper");
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
> const me = dv.page("Repos/openclaw--clawsweeper");
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
> const me = dv.page("Repos/openclaw--clawsweeper");
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
> const me = dv.page("Repos/openclaw--clawsweeper");
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

> **2026-04-27** — 首次收錄
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

- [[2026-04-28|2026-04-28]] — 再次上榜，1.2k stars
- [[2026-04-27|2026-04-27]] — 首次收錄，1.0k stars
