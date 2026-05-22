---
repo: openclaw/clawpatch
url: https://github.com/openclaw/clawpatch
owner: openclaw
owner_type: Organization
language: TypeScript
license: MIT
description: "Review code. Patch bugs. Land PRs."
homepage: "https://clawpatch.ai"
stars: 618
stars_per_day: 103
forks: 91
open_issues: 14
created: 2026-05-15
pushed_at: 2026-05-20
first_seen: 2026-05-22
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-22
use_case: "自動化的代碼審查工具，幫助修復錯誤並提交 PR。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-29"
contributor_count: 5
engagement: "medium"
issue_close_rate: 63
repo_size_kb: 1411
readme_length: 7650
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-22"
star_history: "2026-05-22:618"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/bot"
  - "topic/review"
aliases:
  - "clawpatch"
  - "openclaw/clawpatch"
  - "自動化的代碼審查工具，幫助修復錯誤並提交 PR。"
---

# clawpatch

**618** stars · **103** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/openclaw--clawpatch");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.3.0` `easy-install`

`bot` `review`

> [!summary] 一句話摘要
> 自動化的代碼審查工具，幫助修復錯誤並提交 PR。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要自動化代碼審查並希望提高代碼質量的中小型開發團隊。
> **一句話重點** clawpatch 的自動化代碼審查功能能顯著提高開發效率，特別是在大型專案中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawpatch");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "openclaw--clawpatch" && p.status !== "archived")
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
> **結論** 花 3 小時學、5 小時整合，得到自動化代碼審查的效果，值得嘗試。

> [!abstract] 核心創新
> clawpatch 提供了自動化代碼審查和修復的完整流程，並支持多種語言的代碼映射。

## 專案簡介

clawpatch 是一個自動化代碼審查工具，能夠將代碼庫映射為語義特徵片段，並針對每個片段進行審查和修復。用戶可以透過 `clawpatch init` 初始化專案，然後使用 `clawpatch map` 來寫入特徵記錄，接著使用 `clawpatch review` 進行審查，並可選擇性地使用 `clawpatch fix --finding` 來針對特定問題進行修復。這個工具的賣點在於其能夠自動化代碼審查過程，並在不需要手動提交的情況下記錄修復嘗試。其技術實作基於 TypeScript 和 Node.js，並使用了多種 CLI 命令來執行不同的任務，這使得它在處理大型代碼庫時能夠高效運作。

clawpatch 的依賴相對輕量，主要依賴於 `zod` 進行數據驗證，並使用 `vitest` 進行測試，這使得整體架構保持簡潔。與其他類似工具相比，如 `0x0funky/agent-sprite-forge` 和 `0xGF/boneyard`，clawpatch 提供了更為細緻的特徵映射和修復流程，特別適合需要定期進行代碼質量檢查的團隊。使用者在使用過程中可能會遇到需要手動審查的情況，因為目前的修復過程仍需用戶確認變更。這個工具目前處於早期 CLI 階段，適合小型團隊或個人專案進行測試和實驗，未來可能會加入更多自動化功能以提升效率。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- 自動化代碼審查 — 使用 `clawpatch review` 命令自動檢查代碼中的問題。
- 修復流程 — 使用 `clawpatch fix --finding` 命令針對特定問題進行修復。
- 多語言支持 — 支持多種語言的代碼映射，包括 JavaScript、TypeScript、Go、Python 等。
- 報告生成 — 使用 `clawpatch report` 命令生成 Markdown 格式的報告。
- 狀態檢查 — 使用 `clawpatch status` 命令查看專案狀態和發現的問題數量。

## 快速開始

1. 全域安裝 clawpatch
```bash
pnpm add -g clawpatch
```
2. 初始化專案
```bash
clawpatch init
```
3. 映射特徵
```bash
clawpatch map
```
4. 執行代碼審查
```bash
clawpatch review --limit 3 --jobs 3
```
5. 生成報告
```bash
clawpatch report
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 clawpatch",
  "clawpatch review --limit 3 --jobs 3",
  "# 預期輸出：顯示三個待審查的特徵及其狀態"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 618 stars（103/天），forks 91（14.7%），顯示出不錯的社群關注度。這個專案的主要貢獻者來自於開源社群，過去有多個成功的開源專案經驗。它解決了代碼審查過程中的繁瑣手動操作，之前的工具往往無法提供如此細緻的特徵映射和自動修復功能。近期的推廣和討論可能促進了其快速增長，尤其是在開發者社群中。這個工具的設計使其能夠在多種語言和框架中運行，這在當前多樣化的開發環境中是非常有價值的。forks/stars 比率為 14.7%，顯示出有相當一部分用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化代碼審查並希望提高代碼質量的中小型開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化代碼審查流程，因為手動審查耗時且容易漏掉問題。
> - DevOps 工程師用它來生成代碼質量報告，因為能夠快速識別和修復潛在問題。
> - 開發團隊用它來維護大型代碼庫，因為能夠自動映射和審查多個語言的代碼片段。

## 架構分析

clawpatch 採用模組化設計，主要由 CLI 工具組成，並使用 TypeScript 實現。其架構允許用戶在不同的專案中靈活使用，並能夠根據需求擴展功能。資料流方面，首先用戶初始化專案，然後映射代碼特徵，接著進行審查，最後生成報告。

這種設計使得每一步都能夠獨立運行，並且用戶可以根據需要選擇性地執行。選擇 TypeScript 作為開發語言，提供了靜態類型檢查的優勢，減少了潛在的錯誤。這樣的設計使得 clawpatch 在處理大型代碼庫時能夠保持高效，並且易於維護和擴展。

## 技術深入分析

clawpatch 的核心技術機制在於其能夠將代碼庫映射為語義特徵片段，這使得代碼審查過程變得更加精確。它使用 TypeScript 和 Node.js 作為開發語言，並依賴於多種 CLI 命令來執行不同的任務。效能方面，clawpatch 能夠快速處理大型代碼庫，但在映射和審查過程中仍可能面臨性能瓶頸，特別是在處理複雜的代碼結構時。設計上，選擇 TypeScript 提供了靜態類型檢查的優勢，這不僅提高了代碼的可維護性，還減少了潛在的錯誤。技術風險方面，clawpatch 目前仍依賴於用戶手動審查修復結果，這可能在未來的擴展中成為一個瓶頸。整合方面，clawpatch 與主流的 CI/CD 工具鏈相容，能夠輕鬆集成到現有的開發流程中，並支持生成報告以便於團隊跟蹤問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用範例。安裝過程順暢，無明顯坑點。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化代碼審查流程，節省時間和人力。
> - 支持多語言代碼映射，適用於多種開發環境。
> - 生成詳細的報告，便於團隊跟蹤問題。

> [!danger] 缺點
> - 仍需手動審查修復結果，無法完全自動化。
> - 對於大型專案，映射和審查過程可能需要較長時間。
> - 不支持直接提交變更，需手動處理 PR。

> [!warning] 注意事項
> - 目前仍需手動審查修復結果，無法完全自動化。
> - 對於大型專案，映射和審查過程可能需要較長時間。
> - 不支持直接提交變更，需手動處理 PR。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了類似的自動化代碼審查功能，但不支持多語言映射。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定語言的代碼質量檢查，而 clawpatch 提供更廣泛的語言支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但功能覆蓋範圍較窄。 | 如果需要高性能的代碼審查工具且不介意較少的功能支持。 | medium，因為需要重寫部分代碼以適應 Rust 環境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定語言的代碼質量檢查，功能較為專一。 | 如果你的專案主要使用特定語言，且需要深入的代碼質量分析。 | low，因為功能相似，轉換成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawpatch** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但功能覆蓋範圍較窄。 | 專注於特定語言的代碼質量檢查，功能較為專一。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應 Rust 環境。 | low，因為功能相似，轉換成本不高。 |
> | 適用場景 | 主要場景 | 如果需要高性能的代碼審查工具且不介意較少的功能支持。 | 如果你的專案主要使用特定語言，且需要深入的代碼質量分析。 |

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

- **[HIGH]** 修復過程中可能會遇到需要手動確認的情況
  - 解法：仔細檢查修復結果，確保沒有引入新問題
- [MEDIUM] 對於大型專案，映射過程可能需要較長時間
  - 解法：在非高峰時段執行映射
- [MEDIUM] 不支持直接提交變更，需手動處理 PR
  - 解法：提前準備好提交流程

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 自動化代碼審查能顯著提高開發效率。 |
| 大型企業的多語言代碼庫 | 普通 | 雖然支持多語言，但映射過程可能較慢。 |
| 需要定期進行代碼質量檢查的開發團隊 | 非常適合 | 自動化流程能夠節省時間和人力。 |
| 單一語言的小型專案 | 適合 | 功能覆蓋範圍足夠，且易於使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、5 小時整合，得到自動化代碼審查的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：clawpatch 本身不需要高權限，且不會存取敏感資料。對依賴鏈的信任程度較高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawpatch");
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
> const me = dv.page("Repos/openclaw--clawpatch");
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
| Forks | 91 |
| Open Issues | 14 |
| Issue 解決率 | 63% (24 closed) |
| 最後推送 | 2026-05-20 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://clawpatch.ai) |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/openclaw/clawpatch) |
| Topics | `bot` `review` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `zod` `@types/node` `oxfmt` `oxlint` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "HTML" : 3
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@steipete](https://github.com/steipete) | 198 |
> | [@vincentkoc](https://github.com/vincentkoc) | 47 |
> | [@rohitjavvadi](https://github.com/rohitjavvadi) | 12 |
> | [@coletebou](https://github.com/coletebou) | 6 |
> | [@mbelinky](https://github.com/mbelinky) | 5 |

**最新版本**：v0.3.0 (2026-05-18)

> [!info]- Release Notes
> ## npm
> 
> - npm: https://www.npmjs.com/package/clawpatch/v/0.3.0
> - tarball: https://registry.npmjs.org/clawpatch/-/clawpatch-0.3.0.tgz
> - integrity: sha512-0agguxFaXNy7dhFc2rMrjRQmbNOgxuO0ipcGWvifX58rPsQf2XJwqD/Yn7aIABAmeeW4zz8tQXwGXrfv/gnSng==
> 
> ## Proof
> 
> - CI: https://github.com/openclaw/clawpatch/actions/runs/26015012418
> - CodeQL: https://github.com/openclaw/clawpatch/actions/runs/26015012400
> - Local: pnpm typecheck && pnpm lint && pnpm format:check && pnpm test && pnpm build && pnpm pack:smoke
> 
> ## Changes
> 
> 
> - Added a `pi` provider for routing review, fix, revalidate, and agent map through the [pi coding agent](https://pi.dev) in non-interactive print mode, thanks @danielmarbach.
> - Added deslopify review mode and ranked maintainability/performance report clusters for repeated cleanup patterns, thanks @mbelinky.
> - Fixed `clawpatch review --since` to review all touched features by default instead of silently applying the normal single-feature limit.
> - Added `--skip-git-repo-check` for Codex-backed map, review, fix, and revalidate commands so initialized non-Git roots can run Codex, thanks @im-zayan.
> - Added explicit Codex reasoning effort selection via `--reasoning-effort`, `CLAWPATCH_REASONING_EFFORT`, and provider config, with `doctor` reporting the active setting.
> - Added `CLAWPATCH_CODEX_SANDBOX` for overriding Codex provider sandbox mode when the host already provides isolation, thanks @IAMSamuelRodda.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，有定期的更新和回應。
**連結**：[文件](https://clawpatch.ai)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-20）
> **活躍天數** 1 天 · **最新 commit** feat(mapper): split repeated flat file families

## README 摘錄

> [!info]- 展開查看原文 README
> # 🩹 clawpatch
> 
> Automated code review that lands fixes.
> 
> `clawpatch` maps a repo into semantic feature slices, reviews each slice with a
> provider, persists findings, and can run an explicit fix loop for one finding at
> a time.
> 
> Current status: early CLI. Review/report/state are implemented; patching exists
> behind `clawpatch fix --finding ` and still requires manual review of the
> resulting worktree changes.
> 
> ## Install
> 
> ```bash
> pnpm add -g clawpatch
> ```
> 
> From source:
> 
> ```bash
> pnpm install
> pnpm build
> pnpm link --global
> ```
> 
> ## Workflow
> 
> ```bash
> clawpatch init
> clawpatch map
> clawpatch review --limit 3 --jobs 3
> clawpatch review --mode deslopify --limit 3
> clawpatch ci --since origin/main --output clawpatch-report.md
> clawpatch report
> clawpatch next
> clawpatch show --finding 
> clawpatch triage --finding  --status false-positive --note "covered by tests"
> clawpatch fix --finding 
> clawpatch open-pr --patch  --draft
> clawpatch revalidate --finding 
> clawpatch revalidate --all --status open
> ```
> 
> `fix` does not commit, push, open PRs, or land changes. It runs configured
> validation commands and records a patch attempt under `.clawpatch/`.
> 
> ## What It Maps Today
> 
> - npm package bins
> - selected root and workspace package scripts: `start`, `build`, `test`,
>   `lint`, `typecheck`, `format`
> - Node/TypeScript workspace packages under `apps/*`, `packages/*`, and package
>   workspace patterns
> - package-less Node/TypeScript app roots under monorepo folders such as
>   `apps/*` and `packages/*` when source or positive framework signals are
>   present
> - generic extension/plugin packages under workspace roots such as `extensions/*`
>   and `plugins/*`, including package metadata, source, docs, and nearby tests
> - semantic Node source groups for large packages, including runtime, commands,
>   auth, storage, monitor, webhook, setup, server, client, and repeated filename
>   family slices
> - Nx project metadata from `project.json`, including project-scoped validation
>   targets
> - Turborepo task metadata for workspace-aware validation commands and feature
>   context
> - Next.js `app/` and `pages/` routes, including routes inside monorepo apps
> - React Router routes and React components
> - Go package slices from `go list ./...`, including command packages
> - Go package tests and same-repo imports as review context
> - Java/Kotlin Gradle source groups, Maven source groups, and root Gradle/Maven
>   build/test commands
> - JVM semantic roles from Java and Kotlin code evidence such as annotations,
>   imports, interfaces, inheritance, supertypes, and method signatures
> - Kotlin Android semantic roles for UI entrypoints, ViewModels, data
>   boundaries, external clients, and dependency injection, including Metro
> - C#/.NET projects from `.sln`, `.slnx`, `.csproj`, `.fsproj`, and `.vbproj`
>   files, with conservative `dotnet build` / `dotnet test` defaults
> - ASP.NET Core controllers, minimal API endpoints, C#/F#/Visual Basic source
>   groups, and .NET test projects
> - Ruby project metadata, executables, source groups, RSpec/Minitest suites
> - Elixir Mix/Phoenix projects, contexts, Phoenix web slices, runtime config,
>   Ecto migrations, project scripts, and ExUnit suites
> - Rust `src/main.rs`, `src/bin/*.rs`, `src/lib.rs`, `crates/*`, and
>   `tests/*.rs`
> - C/C++ standalone `main()` files, CMake `add_executable` / `add_library`
>   targets, and autotools `bin_PROGRAMS` / `lib_LTLIBRARIES` targets
> - Python project metadata, console scripts, bounded source groups, pytest suites,
>   and Flask/FastAPI/Django routes
> - SwiftPM `Sources/*` targets and `Tests/*` suites
> - Laravel/PHP projects from `composer.json` and `artisan`, including routes,
>   controllers, form requests, Artisan commands, jobs, services, models,
>   migrations, seeders, Composer scripts, and PHP test suites
> - common project config files
> 
> Deeper framework mappers and agent-assisted enrichment are next steps.
> 
> ## Provider
> 
> The default provider is the local Codex CLI.
> 
> ```bash
> codex --version
> clawpatch doctor
> ```
> 
> Provider calls use `codex exec` with strict JSON schemas. Review and revalidate
> run read-only; fix planning runs with workspace-write because Codex may edit the
> working tree during the explicit fix command.
> 
> Set `CLAWPATCH_CODEX_SANDBOX` to override the Codex sandbox passed by
> Clawpatch. Use any Codex sandbox mode, or `bypass`/`none` to pass
> `--dangerously-bypass-approvals-and-sandbox` when the host environment already
> provides isolation.
> 
> Supported provider names today:
> 
> - `codex`: local Codex CLI
> - `acpx`: any ACP-compatible coding agent (Codex / Claude / Pi / Gemini / ...) via openclaw/acpx
> - `grok`: local Grok Build CLI
> - `opencode`: local OpenCode CLI
> - `mock`: deterministic test provider
> - `mock-fail`: failure test provider
> 
> ## Commands
> 
> - `clawpatch init`: create `.clawpatch/`, detect project basics, write config
> - `clawpatch map`: write feature records
> - `clawpatch status`: show project, dirty state, feature/finding counts
> - `clawpatch review`: review pending or selected features
> - `clawpatch review --mode deslopify`: review only for locally provable slop cleanup
> - `clawpatch ci`: initialize if needed, map, review, write a report, and append a GitHub step summary
> - `clawpatch report`: print or write a Markdown findings report
> - `clawpatch next`: print the next actionable finding
> - `clawpatch show --finding `: inspect one finding with evidence and suggested validation
> - `clawpatch triage --finding  --status `: mark a finding with optional history note
> - `clawpatch fix --finding `: run the explicit patch loop for one finding
> - `clawpatch open-pr --patch `: commit an applied patch attempt and open a GitHub PR
> - `clawpatch revalidate --finding `: re-check one finding
> - `clawpatch revalidate --all`: re-check open findings with report-style filters
> - `clawpatch doctor`: check provider availability
> - `clawpatch clean-locks`: clear feature locks
> 
> Useful flags:
> 
> - `--root `
> - `--state-dir `
> - `--config `
> - `--json`
> - `--plain`
> - `--limit `
> - `--jobs `
> - `--source `
> - `--feature `
> - `--project `
> - `--finding `
> - `--status `
> - `--severity `
> - `--provider `
> - `--model `
> - `--reasoning-effort `
> - `--skip-git-repo-check`
> - `--output ` / `-o `
> - `--dry-run`
> - `--force`
> 
> Unknown flags fail fast.
> 
> ### `report --json` shape
> 
> `clawpatch report --json` returns:
> 
> ```json
> {
>   "total": 12,
>   "items": [
>     /* finding summaries */
>   ],
>   "results": [
>     /* alias for items */
>   ],
>   "findings": 12,
>   "output": "/path/or/null"
> }
> ```
> 
> - `total` and `items` are the canonical keys.
> - `results` is an alias for `items` with the same array for parity with `{count, results}` consumers.
> - `findings: ` is kept for backwards compatibility but is **deprecated**. Note that in `--json` output `findings` is a _count_, not the array — use `items` (or `results`) for the array. The next breaking release (v0.4) will drop `findings: ` and `results`, landing on `{ total, items, output }`.
> 
> ## State
> 
> State is project-local by default:
> 
> ```text
> .clawpatch/
>   config.json
>   project.json
>   features/*.json
>   findings/*.json
>   patches/*.json
>   reports/*.md
>   runs/*.json
> ```
> 
> Feature records are the durable work units. Findings and patch attempts link back
> to features so runs can resume and be audited.
> 
> ## Safety
> 
> - Review does not edit files.
> - Fix is explicit and selected by finding ID.
> - Fix refuses a dirty source worktree by default.
> - Clawpatch commits, pushes, and opens PRs only from explicit patch commands such as `open-pr`.
> - Clawpatch does not land changes today.
> - Provider output is parsed through strict schemas.
> - Symlinked directories and generated build output are skipped during mapping.
> 
> See `docs/spec.md` for the longer product and implementation spec.

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[Kappaemme-git--codex-complexity-optimizer|Kappaemme-git/codex-complexity-optimizer]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/openclaw/clawpatch) · [官方網站](https://clawpatch.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "openclaw--clawpatch"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "openclaw--clawpatch"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "openclaw--clawpatch" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "openclaw--clawpatch"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "openclaw--clawpatch" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/openclaw--clawpatch");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "openclaw--clawpatch" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "openclaw" AND file.name != "openclaw--clawpatch"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/openclaw--clawpatch");
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
> const me = dv.page("Repos/openclaw--clawpatch");
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
> const me = dv.page("Repos/openclaw--clawpatch");
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
> const me = dv.page("Repos/openclaw--clawpatch");
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
> const me = dv.page("Repos/openclaw--clawpatch");
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

> **2026-05-22** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 首次收錄，618 stars
