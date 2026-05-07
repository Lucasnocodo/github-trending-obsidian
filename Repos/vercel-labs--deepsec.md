---
repo: vercel-labs/deepsec
url: https://github.com/vercel-labs/deepsec
owner: vercel-labs
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Deepsec is a security harness for finding vulnerabilities in your codebase powered by coding agents"
homepage: "https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base"
stars: 1384
stars_per_day: 231
forks: 83
open_issues: 21
created: 2026-04-30
pushed_at: 2026-05-06
first_seen: 2026-05-06
week: "2026-W19"
month: "2026-05"
category: "安全"
subcategory: "漏洞掃描"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-06
use_case: "一個用於發現代碼庫漏洞的安全工具，利用編碼代理進行自動化掃描。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-10"
contributor_count: 1
engagement: "low"
issue_close_rate: 20
repo_size_kb: 563
readme_length: 5845
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-06"
star_history: "2026-05-06:1069,2026-05-07:1384"
tags:
  - github
  - "category/安全"
  - "lang/typescript"
  - org
aliases:
  - "deepsec"
  - "vercel-labs/deepsec"
  - "一個用於發現代碼庫漏洞的安全工具，利用編碼代理進行自動化掃描。"
---

# deepsec

**1.1k** stars · **214** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--deepsec");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 一個用於發現代碼庫漏洞的安全工具，利用編碼代理進行自動化掃描。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (214 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在大型代碼庫中進行安全掃描的開發團隊和安全專家。
> **一句話重點** Deepsec 的 AI 驅動掃描能力顯著提升了大型代碼庫的安全性檢查效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--deepsec");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "漏洞掃描" && p.file.name !== "vercel-labs--deepsec" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 漏洞掃描 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的安全掃描效果，值得考慮。

> [!abstract] 核心創新
> Deepsec 是一個 AI 驅動的漏洞掃描工具，能夠在大型代碼庫中快速識別潛在的安全問題。

## 專案簡介

Deepsec 是一個強大的安全掃描工具，專為大型代碼庫設計，能夠自動化識別潛在的安全漏洞。使用者只需在代碼庫根目錄中執行 `npx deepsec init`，即可初始化掃描環境，接著透過 `pnpm deepsec scan` 開始掃描過程。該工具的核心賣點在於其高效能的 AI 驅動模型，能夠快速識別長期潛伏的安全問題，並且支持並行處理，適合大規模代碼庫的需求。Deepsec 的設計考量了可擴展性，支持在 Vercel Sandbox 上運行，並能夠利用 AI Gateway 進行高效的代碼分析。

其命令如 `pnpm deepsec process` 和 `pnpm deepsec export` 使得用戶能夠輕鬆處理和導出掃描結果。這樣的設計不僅提升了掃描效率，也降低了人工檢查的成本。使用者可以透過編寫匹配器來擴展掃描範圍，這樣的靈活性使得 Deepsec 在面對不同代碼庫時能夠提供針對性的分析。整體而言，Deepsec 是一個針對大型代碼庫的高效安全掃描解決方案，能夠顯著提升漏洞發現與修復的速度。

**技術棧**：`TypeScript 5.7.0` · `pnpm 8.15.9` · `Vitest 3.1.0`

## 重點功能

- AI 驅動的漏洞掃描 — 利用最新的模型進行深度代碼分析，快速識別潛在的安全問題。
- 並行處理 — 支持在多個工作機器上同時掃描，適合大型代碼庫的需求。
- 可擴展的匹配器 — 用戶可以自定義匹配器以擴展掃描範圍，提升分析的針對性。
- 掃描結果導出 — 透過 `pnpm deepsec export` 將結果以 Markdown 格式導出，方便報告和分享。
- 支持 Vercel Sandbox — 能夠在 Vercel 的微虛擬機上運行，提升安全性和效率。

## 快速開始

1. 初始化 Deepsec 環境
```bash
npx deepsec init
```
2. 安裝 Deepsec 依賴
```bash
cd .deepsec && pnpm install
```
3. 執行掃描
```bash
pnpm deepsec scan
```

## 程式碼範例

```ts
{
  "前置條件": "安裝 Deepsec 並初始化環境。",
  "指令": "pnpm deepsec scan",
  "預期輸出": "掃描結果顯示潛在的安全漏洞。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1069 stars（214/天），forks 69（6.5%），這顯示出其在開發者社群中的快速增長。作者 Vercel 是知名的前端平台，過去在開發工具和雲端服務方面有豐富的經驗。Deepsec 解決了傳統靜態分析工具在大型代碼庫中效率低下的痛點，這些工具往往無法快速適應代碼變化。近期的推廣活動和社群討論也促進了其曝光度。隨著 AI 技術的進步，Deepsec 能夠利用強大的模型進行深度分析，這在現有的安全工具中是相對少見的。forks/stars 比率顯示出開發者對於這個工具的實際修改和使用意願，6.5% 的比率屬於中等偏高，表明有不少人正在積極探索其功能。

## 適合誰使用

**目標受眾**：需要在大型代碼庫中進行安全掃描的開發團隊和安全專家。

> [!example] 使用場景
> - 安全工程師用它來自動化掃描大型代碼庫中的安全漏洞，因為手動檢查代碼效率低且容易漏掉問題。
> - DevOps 團隊用它來整合到 CI/CD 流程中，實現持續的安全檢查，因為這樣可以在每次部署前確保代碼的安全性。
> - 開發者用它來快速識別和修復過去未被發現的安全隱患，因為這能夠節省大量的修復時間和成本。

## 架構分析

Deepsec 採用模組化設計，核心功能由 TypeScript 實現，並使用 pnpm 作為包管理工具。掃描過程中，代碼會被分割成多個部分，並行處理以提升效率。這樣的設計使得 Deepsec 能夠在大型代碼庫中快速運行，並且支持在 Vercel Sandbox 中運行以提高安全性。選擇 TypeScript 使得代碼更具可維護性和可讀性，但也增加了學習成本。由於依賴於外部 AI 模型，這可能會導致在模型更新時需要進行相應的調整，這是一個潛在的技術風險。

## 技術深入分析

Deepsec 的核心技術在於其 AI 驅動的漏洞掃描能力，使用最新的模型來分析代碼，並能夠快速識別潛在的安全問題。這些模型的選擇和配置對於掃描的準確性和效率至關重要。Deepsec 支持並行處理，這意味著在大型代碼庫中，掃描任務可以同時在多個工作機器上運行，顯著提升了處理速度。這樣的設計使得用戶能夠在短時間內獲得掃描結果，並且能夠快速修復發現的問題。

選擇 TypeScript 作為開發語言使得代碼更具可維護性，但也帶來了學習曲線。Deepsec 的設計考量了安全性，特別是在使用外部 AI 模型時，對於輸入的信任度有一定要求。這意味著在使用時需要對代碼的來源保持警惕，特別是在處理外部依賴時。整體而言，Deepsec 在大型代碼庫的安全掃描上提供了一個高效且靈活的解決方案，能夠顯著提升安全性檢查的效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和範例，安裝過程相對順暢。新手可以透過 `npx deepsec init` 快速開始，並且有良好的文檔指導。整體來說，花 30 分鐘內能夠跑起來。

## 優缺點分析

> [!success] 優點
> - AI 驅動的深度掃描，能夠快速識別潛在的安全問題。
> - 支持並行處理，適合大型代碼庫的需求。
> - 可自定義匹配器，提升掃描的針對性和靈活性。

> [!danger] 缺點
> - 需要較高的 Node.js 版本，對於老舊環境的兼容性差。
> - 在大型代碼庫中，掃描時間可能較長，影響開發流程。
> - 目前僅支持 Vercel 環境，對於其他平台的支持有限。

> [!warning] 注意事項
> - 需要 Node.js 22 以上版本。
> - 在大型代碼庫中，掃描過程可能需要較長時間。
> - 目前僅支持 Vercel 的環境，對於其他平台的支持尚未明確。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成代理，而 Deepsec 專注於漏洞掃描和修復，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供靜態分析功能，而 Deepsec 結合了 AI 驅動的動態分析，能夠更快識別問題。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代理，而 Deepsec 專注於漏洞掃描和修復，適用場景不同。 | 如果你的專案需要生成自定義的代理以進行特定任務，則應選擇 agent-sprite-forge。 | medium，因為需要重新配置代理的設置和使用方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供靜態分析功能，而 Deepsec 結合了 AI 驅動的動態分析，能夠更快識別問題。 | 如果你的專案主要依賴靜態分析，且不需要 AI 驅動的動態分析，則選擇 Boneyard 更合適。 | low，因為靜態分析工具的集成通常較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **deepsec** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代理，而 Deepsec 專注於漏洞掃描和修復，適用場景不同。 | Boneyard 提供靜態分析功能，而 Deepsec 結合了 AI 驅動的動態分析，能夠更快識別問題。 |
> | 遷移成本 | - | medium，因為需要重新配置代理的設置和使用方式。 | low，因為靜態分析工具的集成通常較為簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案需要生成自定義的代理以進行特定任務，則應選擇 a | 如果你的專案主要依賴靜態分析，且不需要 AI 驅動的動態分析 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和小型專案，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在 Mac 上運行時可能會遇到測試失敗的問題。
  - 解法：檢查依賴版本並確保環境配置正確。
- **[HIGH]** 對於大型代碼庫，掃描時間可能超過預期。
  - 解法：考慮在非高峰時段運行掃描以減少影響。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以上的開發團隊需要定期進行安全掃描 | 非常適合 | Deepsec 的並行處理能力能夠快速掃描大型代碼庫。 |
| 小型專案，代碼庫不大 | 普通 | 雖然可以使用，但可能會有些過於複雜。 |
| 對安全性要求極高的金融科技公司 | 非常適合 | Deepsec 提供高效的漏洞掃描，能夠滿足嚴格的安全需求。 |
| 單人開發者的個人專案 | 不適合 | 對於小型專案來說，使用這個工具的成本和學習曲線可能不值得。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的安全掃描效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> Deepsec 本身需要一定的權限來訪問代碼庫，但設計上已考慮到安全性，建議在受信環境中運行。對於外部依賴的安全性需特別注意，並建議在沙箱環境中運行以降低風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Deepsec 最常與 Vercel 平台搭配使用，特別是在 CI/CD 流程中進行安全掃描。在一個使用 Vercel 部署的專案中，開發者可以透過 `pnpm deepsec scan` 進行掃描，並將結果集成到 CI 流程中。支援 GitHub Actions 進行自動化測試，並且可以與 VS Code 等 IDE 整合。最常見的整合問題包括環境配置不當，建議在使用前仔細檢查文檔。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--deepsec");
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
> const me = dv.page("Repos/vercel-labs--deepsec");
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
| Forks | 69 |
| Open Issues | 20 |
| Issue 解決率 | 20% (5 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-04-30 |
| 官方網站 | [Link](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base) |
| Repo 大小 | 563 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/deepsec) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `deepsec` `@biomejs/biome` `@types/node` `knip` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cramforce](https://github.com/cramforce) | 50 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個問題被提出和解決。
**連結**：[文件](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-04 ~ 2026-05-05）
> **活躍天數** 2 天 · **最新 commit** Use the vercel OIDC token for the gateway if no primary API token is present (#43)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/vercel-labs/deepsec/issues/21) | Agent: GitHub Copilot `enhancement` | 1 | 1 |
> | [#51](https://github.com/vercel-labs/deepsec/issues/51) | tests failing on Mac `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # deepsec
> 
> `deepsec` an agent-powered vulnerability scanner that you can run in your own infrastructure, optimized to perform on-demand review of all code in existing 
> large-scale repos.
> 
> `deepsec` is designed to surface hard-to-find issues that have been lurking in applications for a long time. It is configured to use the best models at maximum thinking levels, meaning scans can cost thousands or even tens-of-thousands of dollars for large codebases. Our customers have found the cost worth it for how quickly they were able to patch vulnerabilities that would have otherwise gone unfixed.
> 
> For large codebases, work fans out across worker machines in parallel.
> Commands are idempotent — interrupt a job, restart it, and deepsec picks up
> where it left off.
> 
> ## Get started
> 
> Navigate to the root of the repository that you want to scan, then:
> 
> ```bash
> npx deepsec init       # creates .deepsec/ with this repo as the first project
> cd .deepsec
> pnpm install           # installs deepsec from npm
> 
> # Proceed as instructed by `init` output
> ```
> 
> Now have your coding agent bootstrap your installation. Open the agent of choice
> and prompt:
> 
> > Read `.deepsec/node_modules/deepsec/SKILL.md` to understand the
> > tool. Then read `.deepsec/data//SETUP.md` and follow it:
> > skim this repo's README, any AGENTS.md/CLAUDE.md, and a handful
> > of representative code files, then replace each section of
> > `.deepsec/data//INFO.md`.
> >
> > Keep it SHORT — target 50–100 lines total. Pick 3–5 examples per
> > section, not exhaustive enumeration. Name primitives (auth helpers,
> > middleware) but no line numbers. Skip generic CWE categories —
> > built-in matchers cover those. Cover only what's project-specific.
> > INFO.md is injected into every scan batch; verbose context dilutes
> > signal.
> 
> Then scan from inside `.deepsec/`:
> 
> ```bash
> pnpm deepsec scan
> pnpm deepsec process    
> pnpm deepsec revalidate # optional, cuts FP rate
> pnpm deepsec export --format md-dir --out ./findings
> ```
> 
> If you feel like the `deepsec` should look at more parts of the code, give it [the writing matchers](docs/writing-matchers.md) doc to find more valuable starting points in your code base.
> 
> ## Docs
> 
> - [docs/getting-started.md](docs/getting-started.md) — first-scan walkthrough
> - [docs/writing-matchers.md](docs/writing-matchers.md) — **prompt your coding agent to grow your matcher set**
> - [docs/configuration.md](docs/configuration.md) — `deepsec.config.ts` reference
> - [docs/plugins.md](docs/plugins.md) — plugin authoring
> - [docs/models.md](docs/models.md) — model selection, defaults, refusals, future models
> - [docs/vercel-setup.md](docs/vercel-setup.md) — AI Gateway + Vercel Sandbox keys / tokens
> - [docs/architecture.md](docs/architecture.md) — pipeline internals
> - [docs/data-layout.md](docs/data-layout.md) — `data/` schemas (FileRecord, RunMeta, …)
> - [docs/faq.md](docs/faq.md) — cost, model choice, sandbox mode, FP rate
> - [samples/](samples/) — copy-paste starting points (currently: `webapp/`)
> - [CONTRIBUTING.md](CONTRIBUTING.md) — repo layout, dev workflow
> 
> ## AI provider
> 
> When running locally, `deepsec` attempts to use your existing subscriptions
> when invoking claude or codex.
> 
> For scaled usage on large code bases we recommend using Vercel AI Gateway or
> provider API keys. The AI Gateway has default quotas suitable for highly 
> concurrent research.
> 
> ```
> AI_GATEWAY_API_KEY=vck_...
> ```
> 
> That single key covers both Claude and Codex. See 
> [docs/vercel-setup.md](docs/vercel-setup.md) for getting a key and for 
> the Vercel Sandbox setup. To bypass the gateway, set `ANTHROPIC_AUTH_TOKEN` 
> + `ANTHROPIC_BASE_URL` (or the OpenAI pair) explicitly. Explicit values 
> always win over the `AI_GATEWAY_API_KEY` expansion.
> 
> ## Distributed execution (optional)
> 
> Large monorepos can fan work across [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox) microVMs:
> 
> ```bash
> pnpm deepsec sandbox process --project-id my-app --sandboxes 10 --concurrency 4
> ```
> 
> Needs a Vercel account. The local working tree is tarballed and
> uploaded; `.git` is excluded. Both OIDC tokens (local) and access
> tokens (CI) are supported — see
> [docs/vercel-setup.md](docs/vercel-setup.md).
> 
> ## Security model of deepsec itself
> 
> Treat `deepsec` like a coding agent with full shell access on the enviroment that it is
> running on. It is designed to run on trusted inputs (your source code) but you may still
> be concerned about prompt injection due to external dependencies or vendored code.
> 
> Running on a sandbox (see above) does limit the potential exposure substantially:
> 
> - The API keys for the coding agents are injected outside of the sandbox and hence cannot be exfiltrated
> - For the worker sandboxes, network egress from the sandbox is limited to coding agent hosts (Egress is allowed during the bootstrap process, but this does not run the coding agent)
> 
> ## Workflow reference
> 
> | Command         | What it does                                             |
> |-----------------|----------------------------------------------------------|
> | `scan`          | Find candidate sites with regex matchers (fast, no AI)   |
> | `process`       | AI investigation; emits findings + recommendation        |
> | `triage`        | Lightweight P0/P1/P2 classification (cheaper model)      |
> | `revalidate`    | Re-check existing findings; checks git history for fixes |
> | `enrich`        | Add git committer info + (with a plugin) ownership data  |
> | `report`        | Markdown + JSON summary for one project                  |
> | `export`        | Per-finding JSON or directory of markdown files          |
> | `metrics`       | Cross-project counts: severities, vulns by type, TPs     |
> | `status`        | Snapshot of the project mirror                           |
> | `sandbox ` | Run any of the above on Vercel Sandbox microVMs          |
> 
> ## License
> 
> Apache 2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).

## 延伸閱讀

相關概念：[[靜態分析]] · [[動態分析]] · [[AI 驅動工具]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Nightmare-Eclipse--RedSun|Nightmare-Eclipse/RedSun]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[imbue-bit--OpenClaw-PwnKit|imbue-bit/OpenClaw-PwnKit]] · [[masterking32--MasterHttpRelayVPN|masterking32/MasterHttpRelayVPN]] · [[opa334--darksword-kexploit|opa334/darksword-kexploit]]

[GitHub](https://github.com/vercel-labs/deepsec) · [官方網站](https://vercel.com/blog/introducing-deepsec-find-and-fix-vulnerabilities-in-your-code-base)

## 相關收錄

> [!note]- 直接競品（同子分類：漏洞掃描）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "漏洞掃描" AND file.name != "vercel-labs--deepsec"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "vercel-labs--deepsec"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "vercel-labs--deepsec" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "vercel-labs--deepsec"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["靜態分析","動態分析","AI 驅動工具"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--deepsec" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--deepsec");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--deepsec" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--deepsec"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--deepsec");
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
> const me = dv.page("Repos/vercel-labs--deepsec");
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
> const me = dv.page("Repos/vercel-labs--deepsec");
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
> const me = dv.page("Repos/vercel-labs--deepsec");
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
> const me = dv.page("Repos/vercel-labs--deepsec");
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

> **2026-05-06** — 首次收錄
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

- [[2026-05-07|2026-05-07]] — 再次上榜，1.4k stars
- [[2026-05-06|2026-05-06]] — 首次收錄，1.1k stars
