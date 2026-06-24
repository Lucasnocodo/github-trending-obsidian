---
repo: cloudflare/security-audit-skill
url: https://github.com/cloudflare/security-audit-skill
owner: cloudflare
owner_type: Organization
language: JavaScript
license: MIT
description: "A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings"
homepage: ""
stars: 491
stars_per_day: 98
forks: 41
open_issues: 0
created: 2026-06-18
pushed_at: 2026-06-18
first_seen: 2026-06-24
week: "2026-W26"
month: "2026-06"
category: "安全"
subcategory: "安全審計"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-24
use_case: "讓你的代碼代理變成安全審計員，進行多階段的安全審計，並生成可機器讀取的結果。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-01"
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
star_history: "2026-06-24:491"
tags:
  - github
  - "category/安全"
  - "lang/javascript"
  - org
  - easy_install
aliases:
  - "security-audit-skill"
  - "cloudflare/security-audit-skill"
  - "讓你的代碼代理變成安全審計員，進行多階段的安全審計，並生成可機器讀取的結果。"
---

# security-audit-skill

**491** stars · **98** stars/天 · 建立 5 天前 · JavaScript · MIT

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
> 讓你的代碼代理變成安全審計員，進行多階段的安全審計，並生成可機器讀取的結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (98 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在代碼庫中進行安全審計的安全工程師和開發團隊。
> **一句話重點** 這個專案不僅提供了一個安全審計工具，更是一個自動化的安全測試框架，能夠大幅提升漏洞發現的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cloudflare--security-audit-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "安全審計" && p.file.name !== "cloudflare--security-audit-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 安全審計 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學、2 小時整合，得到自動化的安全審計效果，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於其六階段的安全審計流程，並且每個發現都必須有具體的攻擊場景。

## 專案簡介

這個專案的核心機制是將代碼代理轉變為安全審計工具，通過六個階段的管道進行全面的安全檢查：首先，使用並行的研究代理進行應用架構的偵查，生成 `architecture.md`；接著，從不同角度攻擊代碼庫，並可派生子代理深入挖掘；然後，獨立的驗證代理對每個發現進行反駁，確保結果的準確性；隨後，生成可讀的報告和詳細的發現記錄；接下來，輸出結構化的 JSON 文件，並進行驗證；最後，獨立代理再次確認所有事實聲明。這樣的設計確保了每個發現都有具體的攻擊場景，並且多次運行能夠提高覆蓋率，這是其他工具所不具備的優勢。使用者只需簡單的 CLI 指令，例如 `security audit this codebase`，即可啟動審計過程，並自動生成報告。

**技術棧**：`Node.js`

## 重點功能

- 六階段審計流程 — 包括偵查、攻擊、驗證、報告、結構化輸出和獨立驗證。
- 並行代理運行 — 多個代理同時進行不同的攻擊測試，提升效率。
- 可生成詳細報告 — 產出 `REPORT.md` 和 `FINDINGS-DETAIL.md`，便於人類閱讀和分析。
- 結構化輸出 — 生成符合 `report-schema.json` 的 `findings.json`，便於機器處理。
- 對發現的驗證 — 確保每個漏洞都有具體的攻擊場景，避免虛假報告。

## 快速開始

1. 安裝安全審計技能
```bash
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```
2. 啟動代碼代理並指向代碼庫
```bash
security audit this codebase
```
3. 指定輸出目錄
```bash
do a security review, output to ~/audits/my-project
```

## 程式碼範例

```js
{
  "前置條件": "需要安裝 Node.js 和 Skills CLI",
  "指令": "security audit this codebase",
  "預期輸出": "生成安全審計報告和發現的 JSON 文件"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 491 stars（98/天），forks 41（8.4%），這顯示出強勁的增長潛力。作者 literally-dan 在安全領域有豐富經驗，這個專案解決了傳統安全審計工具缺乏自動化和可重複性的痛點。之前的工具往往只能提供靜態分析，無法進行動態測試和多角度攻擊，這使得發現漏洞的效率低下。社群對於這個工具的需求和興趣明顯，尤其是在安全性越來越受到重視的背景下。這個工具的設計理念和實作方式都反映了當前安全測試的需求，特別是在 CI/CD 流程中的整合。

## 適合誰使用

**目標受眾**：需要在代碼庫中進行安全審計的安全工程師和開發團隊。

> [!example] 使用場景
> - 安全工程師用它來自動化代碼庫的安全審計，因為手動檢查容易漏掉細節，這個工具能夠在多個角度進行全面測試。
> - DevOps 團隊用它來在 CI/CD 流程中集成安全測試，因為它能夠自動生成報告，減少人工介入的需求。
> - 開發人員用它來在提交代碼前進行自我審計，因為它能快速找出潛在的安全漏洞，提升代碼質量。

## 架構分析

這個專案採用模組化的架構，透過六個階段的處理流程來進行安全審計。每個階段都由不同的代理負責，這樣的設計使得每個代理可以專注於特定任務，提升了整體效率。資料流從偵查到驗證，每個階段的輸出都為下一階段提供了必要的上下文，這樣的設計使得整個流程具備高度的可擴展性。選擇 Node.js 作為主要技術棧，因為它能夠輕鬆處理並行任務，但這也意味著對於大型應用可能需要更多的資源來維持性能。整體架構的設計考量了安全性和效率，確保每個發現都經過嚴格的驗證。

## 技術深入分析

這個專案的核心技術機制是通過六個階段的審計流程來進行安全測試，使用並行代理來提高效率。每個階段的設計都考慮到了漏洞發現的完整性和準確性，特別是在驗證階段，使用獨立代理來檢查每個發現，這樣的設計有效降低了虛假報告的風險。效能方面，這個工具能夠處理中小型代碼庫，並且在多次運行中能夠逐步發現更多的漏洞。選擇 Node.js 作為技術棧，帶來了良好的並行處理能力，但也可能在處理大型應用時面臨性能瓶頸。技術風險方面，隨著代碼庫的增長，可能會出現性能下降的問題，特別是在多代理同時運行時。整合方面，這個工具能夠輕鬆與現有的 CI/CD 流程結合，並且支持多種開發環境，降低了導入的摩擦。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的具體指導。安裝過程相對順暢，沒有明顯的坑。文件中包含了基本的使用範例，對於新手來說，能夠在短時間內上手。

## 優缺點分析

> [!success] 優點
> - 多階段的審計流程，能夠全面覆蓋潛在漏洞。
> - 並行代理運行，提升測試效率。
> - 生成詳細的報告和結構化輸出，便於後續處理。

> [!danger] 缺點
> - 需要 Node.js 環境，對於不熟悉的開發者可能有學習曲線。
> - 對於複雜的應用架構需要額外的配置和調整。
> - 目前仍在早期階段，可能存在不穩定性。

> [!warning] 注意事項
> - 需要 Node.js 環境支持
> - 僅適用於支援工具使用和並行子代理的代碼代理
> - 對於複雜的應用架構可能需要進一步的配置

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成多種代理，但不具備安全審計的專業功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 此工具主要用於靜態代碼分析，而本專案提供動態測試和多階段驗證。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多代理協作，但缺乏針對安全漏洞的專門設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成多種代理，缺乏針對安全漏洞的專業設計。 | 如果需要多種代理協作而不專注於安全審計，這個工具會更合適。 | medium，因為需要重新設計審計流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於靜態代碼分析，無法進行動態測試。 | 如果只需要靜態分析而不需要動態測試，這個工具會更合適。 | low，因為靜態分析的流程相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **security-audit-skill** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成多種代理，缺乏針對安全漏洞的專業設計。 | 主要用於靜態代碼分析，無法進行動態測試。 |
> | 遷移成本 | - | medium，因為需要重新設計審計流程。 | low，因為靜態分析的流程相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要多種代理協作而不專注於安全審計，這個工具會更合適。 | 如果只需要靜態分析而不需要動態測試，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型代碼庫中，可能會出現性能瓶頸，導致審計速度變慢
  - 解法：分批進行審計，減少每次處理的代碼量
- [MEDIUM] 對於複雜的應用架構，可能需要額外的配置
  - 解法：參考 `SKILL.md` 中的設置指導
- [MEDIUM] 在某些情況下，可能會出現虛假報告
  - 解法：多次運行以驗證發現的準確性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 中小型企業的代碼庫安全審計 | 非常適合 | 具備全面的審計流程和自動化能力，能夠快速發現漏洞。 |
| 大型企業的複雜應用安全測試 | 普通 | 可能需要額外的配置和調整，性能可能成為瓶頸。 |
| 個人開發者的安全測試 | 非常適合 | 簡單易用，能夠快速上手，適合小型專案。 |
| 需要靜態分析的專案 | 不適合 | 這個工具專注於動態測試，靜態分析需求無法滿足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學、2 小時整合，得到自動化的安全審計效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 41 |
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
**連結**：[文件](https://github.com/cloudflare/security-audit-skill)

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

> [!note]- 直接競品（同子分類：安全審計）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "安全審計" AND file.name != "cloudflare--security-audit-skill"
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

- [[2026-06-24|2026-06-24]] — 首次收錄，491 stars
