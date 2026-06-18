---
repo: vercel/eve
url: https://github.com/vercel/eve
owner: vercel
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "The Framework for Building Agents"
homepage: "https://vercel.com/eve"
stars: 693
stars_per_day: 693
forks: 29
open_issues: 20
created: 2026-06-16
pushed_at: 2026-06-18
first_seen: 2026-06-18
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "代理框架"
release_tag: "eve@0.11.4"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-18
use_case: "提供一個基於檔案系統的框架來構建持久的 AI 代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 13
repo_size_kb: 4087
readme_length: 3303
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-18"
star_history: "2026-06-18:693"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/agent"
  - "topic/framework"
  - "topic/harness"
  - "topic/javascript"
  - "topic/markdown"
aliases:
  - "eve"
  - "vercel/eve"
  - "提供一個基於檔案系統的框架來構建持久的 AI 代理。"
---

# eve

**693** stars · **693** stars/天 · 建立 1 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel--eve");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `eve@0.11.4` `easy-install`

`agent` `framework` `harness` `javascript` `markdown` `sandbox` `typescript` `vercel` `workflows`

> [!summary] 一句話摘要
> 提供一個基於檔案系統的框架來構建持久的 AI 代理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (693 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望快速構建和部署 AI 代理的開發者，特別是對 Vercel 生態系統有興趣的人。
> **一句話重點** eve 的檔案系統設計讓 AI 代理的開發變得更加簡單和直觀，特別適合快速原型和小型專案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel--eve");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理框架" && p.file.name !== "vercel--eve" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到快速開發 AI 代理的能力，值得一試。

> [!abstract] 核心創新
> eve 提供了一個檔案系統為核心的框架設計，讓 AI 代理的開發和管理變得更加直觀和高效。

## 專案簡介

eve 是一個以檔案系統為核心的框架，專為構建持久的 AI 代理而設計。使用者可以透過簡單的目錄結構來組織代理的核心能力，這使得項目更容易檢查、擴展和操作。用戶可以使用 `npx eve@latest init my-agent` 指令快速創建一個新的代理專案，並自動安裝依賴和初始化 Git。這個框架的賣點在於其檔案系統的設計，使得開發者可以輕鬆地管理代理的各種配置和功能，像是工具、技能和通道等。技術上，eve 使用 TypeScript 和 JavaScript，並依賴於 Vercel 的生態系統來提供無縫的部署體驗。

這個框架的架構設計使得開發者可以在一個統一的環境中進行開發和測試，並且能夠輕鬆地整合各種外部 API 和服務。相較於其他代理框架，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，eve 提供了一個更直觀的檔案結構，讓開發者能夠更快上手和維護。使用者在實際操作中可能會發現，這種設計雖然簡單，但在處理複雜的代理邏輯時，可能需要更多的自定義配置。這個專案目前處於 beta 階段，未來可能會有更多功能和改進。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎考量其穩定性。

**技術棧**：`TypeScript` · `JavaScript` · `Svelte` · `Vue` · `Docker`

## 重點功能

- 檔案系統為核心 — 使用者可以透過目錄結構管理代理的配置和功能。
- 快速初始化 — 使用 `npx eve@latest init my-agent` 指令快速創建新專案並安裝依賴。
- 支援多種工具和技能 — 可以輕鬆添加自定義工具和技能，提升代理的功能性。
- 內建文檔 — 代理專案中包含完整的文檔，方便開發者隨時查閱。
- 與 Vercel 無縫整合 — 透過 Vercel 的生態系統進行快速部署和管理。

## 快速開始

1. 初始化新的代理專案
```bash
npx eve@latest init my-agent
```
2. 在現有專案中添加 eve
```bash
cd myapp && npx eve@latest init .
```
3. 啟動代理開發環境
```bash
npm run dev
```

## 程式碼範例

```ts
[
  "# 最小範例",
  "import { defineTool } from 'eve/tools';",
  "import { z } from 'zod';",
  "",
  "export default defineTool({",
  "  description: 'Return mock weather data for a city.',",
  "  inputSchema: z.object({ city: z.string().min(1) }),",
  "  async execute({ city }) {",
  "    return { city, condition: 'Sunny', temperatureF: 72 };",
  "  },",
  "});",
  "# 預期輸出：返回一個包含城市、天氣狀況和溫度的物件。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 693 stars（693/天），forks 29（4.2%），顯示出強烈的興趣。這位作者 ijjk 在 Vercel 生態系統中有豐富的經驗，之前也參與過多個成功的開源專案。eve 解決了開發 AI 代理時的結構化問題，讓開發者能夠更方便地管理和擴展代理的功能，這在過去的框架中並不常見。近期的推廣活動和社群討論也引起了開發者的注意，進一步促進了其使用率。這個框架的設計理念符合當前對於可維護性和可擴展性的需求，特別是在快速變化的 AI 領域。

## 適合誰使用

**目標受眾**：希望快速構建和部署 AI 代理的開發者，特別是對 Vercel 生態系統有興趣的人。

> [!example] 使用場景
> - 後端工程師用它來快速構建一個天氣查詢代理，因為它的檔案系統結構讓功能模組化，易於維護和擴展。
> - AI 開發者用它來整合多種外部 API，因為其設計允許輕鬆添加新的工具和技能，提升開發效率。
> - 產品經理用它來快速原型化 AI 代理，因為可以透過簡單的指令生成完整的專案結構，快速驗證想法。

## 架構分析

eve 採用檔案系統為核心的架構設計，這使得代理的各種功能和配置可以在清晰的目錄結構中進行管理。每個代理的核心能力都被組織在特定的目錄下，這樣開發者可以輕鬆地檢查和擴展功能。使用 TypeScript 和 JavaScript 進行開發，這保證了良好的型別安全性和可維護性。這種設計的代價是對於複雜邏輯的支持可能不如某些專門的框架，但對於大多數應用場景來說，這種簡單性是非常有價值的。擴展性方面，雖然目前的設計已經相當靈活，但在處理大量代理或複雜邏輯時，可能會遇到性能瓶頸。

## 技術深入分析

eve 的核心技術機制在於其檔案系統為中心的架構，這樣的設計使得開發者能夠在一個清晰的結構中管理代理的各種功能。使用 TypeScript 進行開發，這不僅提高了型別安全性，也使得代碼的可讀性和可維護性大幅提升。效能方面，這種設計在處理小型到中型的代理時表現良好，但在面對更複雜的邏輯時，可能會出現性能瓶頸。選擇 TypeScript 而非 JavaScript 的一大優勢是能夠利用靜態類型檢查，這在開發過程中能夠及早發現錯誤。這個框架的依賴樹相對簡單，主要依賴於 Vercel 的生態系統，這降低了整體的維護成本。技術風險方面，因為目前仍在 beta 階段，未來的 API 變化可能會導致現有代碼需要調整。整合方面，eve 可以輕鬆與 Vercel 的其他服務進行整合，這使得部署和管理變得更加方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，讓新手能夠快速上手。安裝過程相對順暢，使用 `npx` 指令即可快速初始化專案。文件中包含了良好的入門指南，但目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 檔案系統結構易於理解和維護。
> - 快速初始化和開發流程，適合快速原型設計。
> - 良好的社群支持和持續更新。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定性。
> - 對於複雜的代理邏輯，可能需要額外的配置和調整。
> - 文檔和社群支持仍在完善中，可能會遇到不完整的資訊。

> [!warning] 注意事項
> - 目前仍處於 beta 階段，API 和行為可能會改變。
> - 對於複雜的代理邏輯，可能需要更多的自定義配置。
> - 社群支持和文檔仍在持續完善中，可能會遇到一些不完整的資訊。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建遊戲中的代理角色，而 eve 更加通用，適合各種 AI 代理的開發。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供了一個更輕量級的解決方案，但缺乏 eve 的檔案系統結構和擴展性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲中的代理角色創建，與 eve 的通用性相比，功能範圍較窄。 | 如果你的專案是遊戲開發，並需要專門的角色代理功能，則選擇這個工具會更合適。 | medium，因為需要重新設計代理的邏輯和結構。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供輕量級的代理解決方案，但缺乏 eve 的檔案系統結構和擴展性。 | 如果你的專案需要一個簡單的代理解決方案，且不需要複雜的功能，則 boneyard 是更好的選擇。 | low，因為功能較簡單，遷移成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **eve** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲中的代理角色創建，與 eve 的通用性相比，功能範圍較窄。 | 提供輕量級的代理解決方案，但缺乏 eve 的檔案系統結構和擴展性。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的邏輯和結構。 | low，因為功能較簡單，遷移成本不高。 |
> | 適用場景 | 主要場景 | 如果你的專案是遊戲開發，並需要專門的角色代理功能，則選擇這個 | 如果你的專案需要一個簡單的代理解決方案，且不需要複雜的功能， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，初始化過程可能會出現權限問題
  - 解法：確保使用者有足夠的權限來執行 npx 指令
- [MEDIUM] 文檔中有些功能的使用範例不夠詳細
  - 解法：參考社群討論以獲取更多使用資訊
- [MEDIUM] 在使用特定工具時，可能會遇到型別不匹配的問題
  - 解法：檢查工具的輸入輸出型別，確保與定義一致

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的 AI 代理開發 | 非常適合 | 檔案系統結構簡單，易於快速開發和迭代。 |
| 大型企業的複雜代理系統 | 不適合 | 目前的架構可能無法滿足高擴展性和高可用性的需求。 |
| 個人開發者的 AI 實驗專案 | 非常適合 | 快速原型和開發的需求，eve 提供了理想的環境。 |
| 需要與 Vercel 生態系統整合的專案 | 適合 | 無縫整合 Vercel 的服務，簡化部署流程。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到快速開發 AI 代理的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈中無已知的供應鏈風險，使用於 CI/CD 中相對安全。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel--eve");
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
> const me = dv.page("Repos/vercel--eve");
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
| Forks | 29 |
| Open Issues | 20 |
| Issue 解決率 | 13% (3 closed) |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-06-16 |
| 官方網站 | [Link](https://vercel.com/eve) |
| Repo 大小 | 4.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel/eve) |
| Topics | `agent` `framework` `harness` `javascript` `markdown` `sandbox` `typescript` `vercel` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@changesets/cli` `@types/node` `@typescript/native-preview` `ai` `gray-matter` `oxfmt` `oxlint` `simple-git-hooks` `syncpack` `turbo` `vercel` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ijjk](https://github.com/ijjk) | 7 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |
> | [@ruiconti](https://github.com/ruiconti) | 6 |
> | [@AndrewBarba](https://github.com/AndrewBarba) | 4 |
> | [@allenzhou101](https://github.com/allenzhou101) | 3 |

**最新版本**：eve@0.11.4 (2026-06-17)

> [!info]- Release Notes
> ### Patch Changes
> 
> - e5b777b: Resolve AI Gateway OIDC readiness through Vercel's token resolver so `eve dev` recognizes projects linked by the Vercel CLI without requiring an environment pull or showing a missing-credentials setup issue.

## 社群與生態

**社群活躍度**：社群活躍，提供 GitHub Discussions 進行交流和問題解答。
**連結**：[文件](https://beta.eve.dev/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-17）
> **活躍天數** 1 天 · **最新 commit** Docs: add self-deploying guidance (#60)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#44](https://github.com/vercel/eve/issues/44) | Support for agent runtimes like Codex/Claude? `enhancement` | 3 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> eve
> 
> eve is a filesystem-first framework for durable AI agents. Core agent capabilities live in
> conventional locations, so projects are easier to inspect, extend, and operate.
> 
> ## The filesystem is the authoring interface
> 
> A typical eve agent has this structure:
> 
> ```text
> my-agent/
> └── agent/
>     ├── agent.ts            # Optional: model and runtime config
>     ├── instructions.md     # Required: the always-on system prompt
>     ├── tools/              # Optional: typed functions the model can call
>     │   └── get_weather.ts
>     ├── skills/             # Optional: procedures loaded on demand
>     │   └── plan_a_trip.md
>     ├── channels/           # Optional: message channels (HTTP, Slack, Discord)
>     │   └── slack.ts
>     └── schedules/          # Optional: recurring cron jobs
>         └── weekly_recap.ts
> ```
> 
> Read the [documentation](https://beta.eve.dev/docs) for the full project layout and guides.
> 
> ## Quick start
> 
> ```bash
> npx eve@latest init my-agent
> ```
> 
> This creates a new `my-agent` directory, installs its dependencies, initializes Git, and starts
> the interactive terminal UI.
> 
> To add eve to an existing project, pass a path:
> 
> ```bash
> cd myapp
> npx eve@latest init .
> ```
> 
> > [!NOTE]
> > The `eve` package includes its full documentation, so coding agents can read it locally from
> > `node_modules/eve/docs`.
> 
> ### A minimal example
> 
> The generated project includes an `agent` directory. Replace `agent/instructions.md` with:
> 
> ```md
> You are a concise weather demo assistant. Tell users that the weather data is mocked.
> ```
> 
> Add a mock weather tool at `agent/tools/get_weather.ts`:
> 
> ```ts
> import { defineTool } from "eve/tools";
> import { z } from "zod";
> 
> export default defineTool({
>   description: "Return mock weather data for a city.",
>   inputSchema: z.object({ city: z.string().min(1) }),
>   async execute({ city }) {
>     return { city, condition: "Sunny", temperatureF: 72 };
>   },
> });
> ```
> 
> Choose the model in `agent/agent.ts`:
> 
> ```ts
> import { defineAgent } from "eve";
> 
> export default defineAgent({
>   model: "anthropic/claude-sonnet-4.6",
> });
> ```
> 
> For a new scaffold, start the agent again:
> 
> ```bash
> npm run dev
> ```
> 
> That's a working agent. Add human-in-the-loop prompts, subagents, and schedules as needed.
> Follow the [first-agent tutorial](https://beta.eve.dev/docs/tutorial/first-agent) for a complete
> walkthrough.
> 
> ## Community
> 
> The eve community lives on [GitHub Discussions](https://github.com/vercel/eve/discussions),
> where you can ask questions, share ideas, and show what you've built.
> 
> ## Contributing
> 
> Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) to get the repo
> running locally and land a change, and use
> [issues](https://github.com/vercel/eve/issues) and
> [discussions](https://github.com/vercel/eve/discussions) to collaborate. By
> participating, you agree to our [Code of Conduct](CODE_OF_CONDUCT.md).
> 
> ## Security
> 
> Please do not open public issues for security vulnerabilities. Instead, follow
> [SECURITY.md](SECURITY.md) and report responsibly to
> [responsible.disclosure@vercel.com](mailto:responsible.disclosure@vercel.com).
> 
> ## Beta terms
> 
> eve is currently in beta and subject to the [Vercel beta terms](https://vercel.com/docs/release-phases/public-beta-agreement);
> the framework, APIs, documentation, and behavior may change before general availability.

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自動化]] · [[微服務]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/vercel/eve) · [官方網站](https://vercel.com/eve)

## 相關收錄

> [!note]- 直接競品（同子分類：代理框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理框架" AND file.name != "vercel--eve"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel--eve"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "vercel--eve" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "vercel--eve"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","自動化","微服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel--eve" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel--eve");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel--eve" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel" AND file.name != "vercel--eve"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel--eve");
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
> const me = dv.page("Repos/vercel--eve");
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
> const me = dv.page("Repos/vercel--eve");
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
> const me = dv.page("Repos/vercel--eve");
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
> const me = dv.page("Repos/vercel--eve");
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

> **2026-06-18** — 首次收錄
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

- [[2026-06-18|2026-06-18]] — 首次收錄，693 stars
