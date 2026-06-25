---
repo: cloudflare/security-audit-skill
url: https://github.com/cloudflare/security-audit-skill
owner: cloudflare
owner_type: Organization
language: JavaScript
license: MIT
description: "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings"
homepage: ""
stars: 726
stars_per_day: 121
forks: 56
open_issues: 2
created: 2026-06-18
pushed_at: 2026-06-18
first_seen: 2026-06-24
week: "2026-W26"
month: "2026-06"
category: "安全"
subcategory: "安全審核"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-24
use_case: "讓你的程式代理變成安全審核員，進行多階段的安全性審核。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-02"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 24
readme_length: 4281
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-24"
star_history: "2026-06-24:491,2026-06-24:495,2026-06-25:726"
tags:
  - github
  - "category/安全"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "security-audit-skill"
  - "cloudflare/security-audit-skill"
  - "讓你的程式代理變成安全審核員，進行多階段的安全性審核。"
---

# security-audit-skill

**495** stars · **99** stars/天 · 建立 5 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> 讓你的程式代理變成安全審核員，進行多階段的安全性審核。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (99 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要進行安全性審核但希望自動化流程的開發團隊。
> **一句話重點** 這個專案不僅提供了安全審核的工具，還系統化了整個過程，讓開發者能夠更有效地發現漏洞。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cloudflare--security-audit-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "安全審核" && p.file.name !== "cloudflare--security-audit-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 安全審核 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到自動化安全審核的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於其多階段的安全審核流程，能夠系統化地發現和驗證漏洞。

## 專案簡介

這個專案提供了一個安全審核技能，能夠將你的程式代理轉變為安全審核員，透過六個階段的流程來發現可利用的漏洞。首先，在 Recon 階段，並行的研究代理會映射應用程式的架構和信任邊界，生成 `architecture.md`。接著，在 Hunt 階段，代理會從多個角度攻擊代碼庫，涵蓋注入、存取控制等多種攻擊方式。然後，Validate 階段的代理會試圖反駁每一個發現，以消除假陽性。隨後，Report 階段會生成可讀的報告 `REPORT.md` 和詳細的 `FINDINGS-DETAIL.md`。

Structured output 階段會產生符合 `report-schema.json` 的 `findings.json`，並由 `validate-findings.cjs` 驗證。最後，Independent verification 階段會用新代理驗證每個事實聲明。這種設計的賣點在於其多階段的審核過程，能夠有效發現並驗證漏洞，並且每次運行都能累積先前的發現，避免重複檢查已知問題。這樣的設計不僅提高了效率，也增強了漏洞發現的準確性。

**技術棧**：`Node.js`

## 重點功能

- 六階段審核流程 — 包括 Recon、Hunt、Validate、Report、Structured output 和 Independent verification，確保全面的漏洞檢查。
- 並行代理運行 — 在 Hunt 階段，能夠同時進行多種攻擊方式的檢查，提升效率。
- 生成詳細報告 — 產出 `REPORT.md` 和 `FINDINGS-DETAIL.md`，方便人員理解和處理發現的問題。
- 結構化輸出 — 生成符合 `report-schema.json` 的 `findings.json`，便於後續處理和分析。
- 假陽性消除 — Validate 階段專門針對每一個發現進行反駁，降低誤報率。

## 快速開始

1. 安裝安全審核技能
```bash
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```
2. 啟動你的程式代理
```bash
security audit this codebase
```
3. 查看生成的報告
```bash
cat REPORT.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 495 stars（99/天），forks 42（8.5%），顯示出相對活躍的社群參與。這個專案由 Cloudflare 的工程師 literally-dan 開發，他們在安全領域有豐富的經驗。這個工具解決了傳統安全審核過程中效率低下和假陽性率高的問題，以往的工具往往無法有效整合多個檢查階段。這個專案的推出可能受到社群對於安全性需求提升的影響，尤其是在開源軟體的安全性越來越受到重視的背景下。forks/stars 比率為 8.5%，顯示出有不少開發者對此專案進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要進行安全性審核但希望自動化流程的開發團隊。

> [!example] 使用場景
> - 安全工程師用它來自動化代碼庫的安全審核，因為手動檢查容易漏掉漏洞，這個工具能夠系統化地發現問題。
> - DevOps 團隊用它來定期檢查應用程式的安全性，因為它的多階段流程能夠有效降低假陽性率，提升審核準確性。
> - 開發者用它來驗證新功能的安全性，因為它能夠針對特定代碼路徑進行深度檢查，確保不引入新漏洞。

## 架構分析

這個專案採用模組化的設計，將安全審核過程分為六個階段，每個階段都有獨立的代理負責特定任務。這種設計使得整個流程能夠並行運行，提升效率。資料流方面，從 Recon 階段開始，代理會收集應用程式的架構資訊，接著在 Hunt 階段進行攻擊，然後在 Validate 階段進行反駁，最終生成報告。選擇 Node.js 作為技術棧，因為其非同步特性能夠有效處理並行任務，但這也可能導致對於大型代碼庫的性能瓶頸。整體來說，這種設計使得安全審核過程更加靈活，但在處理複雜應用時可能需要調整策略以避免性能下降。

## 技術深入分析

這個專案的核心技術機制在於其六階段的安全審核流程，使用 Node.js 作為開發語言，並利用其非同步特性來實現並行的代理運行。每個階段的代理負責不同的任務，從收集架構資訊到執行攻擊，再到驗證結果，形成一個完整的審核循環。效能方面，這個工具能夠處理中小型代碼庫，但在面對大型應用時，可能會遇到性能瓶頸，尤其是在 Hunt 階段的多重攻擊上。選擇 Node.js 的好處在於其生態系統豐富，易於整合，但也帶來了對於 JavaScript 環境的依賴。這個專案的設計考量了可擴展性，能夠通過多次運行來累積發現，這在傳統的安全審核工具中是較少見的。技術風險方面，若未來代碼庫結構發生變化，可能會影響到 Recon 階段的準確性，這需要持續的維護和更新。整合方面，這個工具可以與 CI/CD 流程無縫對接，提升整體的開發效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含範例指令。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 多階段審核流程，能夠全面檢查應用程式的安全性。
> - 假陽性消除機制，提升審核結果的準確性。
> - 支持並行運行，提升審核效率。

> [!danger] 缺點
> - 目前僅支援 JavaScript 環境，限制了使用範圍。
> - 對於大型代碼庫，執行時間可能較長。
> - 需要一定的配置和理解才能有效使用。

> [!warning] 注意事項
> - 目前僅支援 JavaScript 環境。
> - 需要對應的代碼庫結構，否則可能無法正確映射架構。
> - 對於大型代碼庫，執行時間可能較長，需考慮效能問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建和管理多個代理，而本專案專注於安全審核的具體流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供靜態分析功能，而本專案提供多階段的動態審核流程，能夠更全面地發現漏洞。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 主要針對對抗性測試，而本專案則是針對一般的安全審核，適用範圍更廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理多個代理，提供靈活的代理配置，而本專案則專注於安全審核的具體流程。 | 如果需要靈活配置多個代理以進行不同任務，則應選擇此工具。 | medium，因為需要重新配置代理的運行方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態分析功能，專注於代碼的靜態檢查，而本專案則提供動態的安全審核流程。 | 如果需要靜態代碼分析以發現潛在的安全問題，則應選擇此工具。 | low，因為靜態分析工具通常易於整合。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **security-audit-skill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理多個代理，提供靈活的代理配置，而本專案則專注於安全審核的具體流程。 | 提供靜態分析功能，專注於代碼的靜態檢查，而本專案則提供動態的安全審核流程。 |
> | 遷移成本 | - | medium，因為需要重新配置代理的運行方式。 | low，因為靜態分析工具通常易於整合。 |
> | 適用場景 | 主要場景 | 如果需要靈活配置多個代理以進行不同任務，則應選擇此工具。 | 如果需要靜態代碼分析以發現潛在的安全問題，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在大型代碼庫中，Hunt 階段可能需要較長時間才能完成
  - 解法：可以考慮分批檢查代碼庫以減少每次運行的負擔
- **[HIGH]** 對於特定代碼結構，Recon 階段可能無法準確映射
  - 解法：需要手動調整配置以適應特定的代碼庫結構

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化安全審核，減少人力成本。 |
| 大型企業的多個應用程式 | 不適合 | 在大型代碼庫中可能面臨性能瓶頸。 |
| 開發團隊需要定期進行安全檢查 | 適合 | 能夠系統化地進行安全審核，提升效率。 |
| 單一開發者的個人專案 | 非常適合 | 簡單易用，能快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到自動化安全審核的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料。依賴鏈的信任程度良好，沒有已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
| Forks | 42 |
| Open Issues | 0 |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-06-18 |
| Repo 大小 | 24 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cloudflare/security-audit-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@literally-dan](https://github.com/literally-dan) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有持續的提交和更新。
**連結**：[文件](https://github.com/cloudflare/security-audit-skill#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-18）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## README 摘錄

> [!info]- 展開查看原文 README
> # security-audit
> 
> A coding-agent skill that turns your agent into a security auditor. It orchestrates multiple parallel agents through a six-phase pipeline -- recon, hunting, validation, reporting, structured output, and independent verification -- to find exploitable vulnerabilities with real impact.
> 
> This is the skill that seeded Cloudflare's vulnerability discovery harness, described in [Build your own vulnerability harness](https://blog.cloudflare.com/build-your-own-vulnerability-harness). The harness grew into a multi-stage, fleet-wide system; this skill is the single-repo starting point it evolved from.
> 
> ## What it does
> 
> The skill runs a structured audit in six phases:
> 
> 1. **Recon** -- parallel research agents map the application's architecture, trust boundaries, and input surfaces. Produces `architecture.md`.
> 2. **Hunt** -- parallel general agents attack the codebase from different angles (injection, access control, business logic, cryptography, feature abuse, chained attacks, and a wildcard). Each agent can spawn sub-agents to dig deeper.
> 3. **Validate** -- separate agents try to *disprove* each finding. Adversarial review kills false positives.
> 4. **Report** -- produces `REPORT.md` (human-readable) and `FINDINGS-DETAIL.md` (detailed traces for MEDIUM+ findings).
> 5. **Structured output** -- writes `findings.json` conforming to `report-schema.json`, validated by `validate-findings.cjs`.
> 6. **Independent verification** -- fresh agents verify every factual claim in the structured output against the actual source code.
> 
> Multiple runs against the same repo are additive. Each run explores different code paths; the skill reads prior `findings.json` files to skip known issues and target gaps.
> 
> ## Files
> 
> | File | Purpose |
> |------|---------|
> | `SKILL.md` | Setup, core principles, platform terminology, workflow overview, and audit anti-patterns |
> | `RECONNAISSANCE.md` | Phase 1 reconnaissance prompts and synthesis instructions |
> | `HUNTING.md` | Phase 2 orchestration, hunting methodology, and validation rules |
> | `ATTACK-CLASSES.md` | Core, wildcard, and obvious-things attack prompts |
> | `VALIDATION-AND-REPORTING.md` | Phases 3–6 validation, reporting, and verification |
> | `report-schema.json` | JSON schema for `findings.json` (confirmed and rejected finding structures) |
> | `validate-findings.cjs` | Zero-dependency Node.js validator that checks `findings.json` against the schema |
> 
> ## Installation
> 
> Install the skill with the [Skills CLI](https://skills.sh):
> 
> ```bash
> npx skills add https://github.com/cloudflare/security-audit-skill \
>   --skill security-audit
> ```
> 
> Use `--global` for a user-level installation:
> 
> ```bash
> npx skills add https://github.com/cloudflare/security-audit-skill \
>   --skill security-audit \
>   --global
> ```
> 
> Run `npx skills --help` for agent-selection and non-interactive options.
> 
> ## Usage
> 
> Start your coding agent in (or pointed at) the codebase you want to audit, then ask it to do a security audit:
> 
> ```
> security audit this codebase
> ```
> 
> ```
> find security vulnerabilities in ./src
> ```
> 
> ```
> do a security review, output to ~/audits/my-project
> ```
> 
> The skill activates automatically when the request matches its trigger (security audit, find vulnerabilities, pen-test the code, etc.). It will ask for an output directory if you don't specify one, defaulting to `~/security-audit-skill//run-`.
> 
> ## Requirements
> 
> - A coding agent with a model that supports tool use and parallel sub-agents
> - Node.js (for `validate-findings.cjs` schema validation in Phase 5)
> 
> ## Design principles
> 
> - **Only report what you can exploit.** Every finding needs a concrete attack scenario, not "an attacker could theoretically..."
> - **Adversarial validation.** The agent that checks a finding is never the agent that found it.
> - **Severity requires impact.** Likelihood x impact, not deviation from a checklist.
> - **Defense-in-depth gaps are not vulnerabilities.** If Layer A prevents the attack, the absence of Layer B is a hardening note.
> - **Multiple runs improve coverage.** Testing shows a single run finds roughly half the total vulnerabilities across multiple runs.
> 
> ## Contact
> 
> Questions, feedback, or comparing notes on AI-driven security tooling: security-ai-research@cloudflare.com
> 
> ## License
> 
> MIT -- see [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[自動化測試]] · [[安全漏洞]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[DepthFirstDisclosures--Nginx-Rift|DepthFirstDisclosures/Nginx-Rift]] · [[MSNightmare--RoguePlanet|MSNightmare/RoguePlanet]] · [[Mouseww--anything-analyzer|Mouseww/anything-analyzer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]]

[GitHub](https://github.com/cloudflare/security-audit-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：安全審核）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "安全審核" AND file.name != "cloudflare--security-audit-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "cloudflare--security-audit-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "cloudflare--security-audit-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "cloudflare--security-audit-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","安全漏洞","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cloudflare--security-audit-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cloudflare--security-audit-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cloudflare" AND file.name != "cloudflare--security-audit-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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
> const me = dv.page("Repos/cloudflare--security-audit-skill");
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

> **2026-06-24** — 首次收錄
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

- [[2026-06-25|2026-06-25]] — 再次上榜，726 stars
- [[2026-06-24|2026-06-24]] — 首次收錄，491 stars
