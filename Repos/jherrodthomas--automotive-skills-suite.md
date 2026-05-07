---
repo: jherrodthomas/automotive-skills-suite
url: https://github.com/jherrodthomas/automotive-skills-suite
owner: jherrodthomas
owner_type: User
language: N/A
license: MIT
description: "100+ installable Claude skills covering Engineering areas such as, ISO 26262 functional safety, ISO/SAE 21434 cybersecurity, ISO 21448 SOTIF, AIAG-VDA quality (APQP/PPAP/FMEA), Automotive SPICE, and continuous improvement tools — every builder paired with a confirmation reviewer."
homepage: ""
stars: 730
stars_per_day: 146
forks: 15
open_issues: 0
created: 2026-05-01
pushed_at: 2026-05-02
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "提供 152 種可安裝的汽車工程技能，涵蓋安全、網路安全、質量等領域，並配有確認審核者。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-14"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 2452
readme_length: 9808
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:730"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - "topic/apqp"
  - "topic/aspice"
  - "topic/automotive"
  - "topic/autosar"
  - "topic/engineering"
aliases:
  - "automotive-skills-suite"
  - "jherrodthomas/automotive-skills-suite"
  - "提供 152 種可安裝的汽車工程技能，涵蓋安全、網路安全、質量等領域，並配有確認審核者。"
---

# automotive-skills-suite

**730** stars · **146** stars/天 · 建立 5 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`apqp` `aspice` `automotive` `autosar` `engineering` `fusa` `hardware` `software-engineering` `system`

> [!summary] 一句話摘要
> 提供 152 種可安裝的汽車工程技能，涵蓋安全、網路安全、質量等領域，並配有確認審核者。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (146 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 專注於汽車工程和安全標準的工程師和質量管理專員。
> **一句話重點** 這個專案的價值在於它提供了一個完整的汽車工程技能套件，能夠自動化生成各種交付物，並確保質量。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "jherrodthomas--automotive-skills-suite" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到自動化生成交付物的能力，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於提供了一套完整的汽車工程技能，並將每個技能與確認審核者配對，確保交付物的質量。

## 專案簡介

這個專案提供了 152 種可安裝的 Claude 技能，專注於汽車工程的各個方面，包括 ISO 26262 功能安全、ISO/SAE 21434 網路安全、AIAG-VDA 質量等。每個技能都可以獨立安裝，並且每個產出都配有確認審核者，這樣可以確保產出的結構化 xlsx 文件的質量。使用者只需下載所需的技能，然後透過 Claude 進行觸發，例如使用指令 "Build a HARA for a new ECU project"。這種設計的好處在於，能夠自動化繁瑣的交付物生成過程，減少手動編輯的錯誤和時間成本。

技術上，這些技能使用 JSON 作為輸入格式，並能夠生成結構化的 xlsx 輸出，這樣可以在不同的開發階段之間保持一致性。與傳統的手動編輯方式相比，這種方法能顯著提高效率和準確性。這套技能的核心賣點在於它的鏈式結構，能夠確保上游變更自動傳遞至下游技能，從而形成穩定的交付流程。這樣的設計不僅提升了工作效率，還降低了錯誤率，特別適合大型汽車工程項目。

## 重點功能

- 152 種技能 — 涵蓋汽車安全、網路安全、質量等領域，每個技能都可獨立安裝。
- 結構化輸出 — 每個技能生成的 xlsx 文件可直接用於後續流程，確保一致性。
- 確認審核者 — 每個技能都配有確認審核者，提供 KPI 儀表板和發現表格。
- 鏈式結構 — 上游變更自動傳遞至下游技能，減少重複工作。
- 多種標準支持 — 包括 ISO 26262、ISO/SAE 21434、AIAG-VDA 等多個行業標準。

## 快速開始

1. 下載所需技能
```bash
從 skills/ 目錄下載所需的 .skill 文件
```
2. 安裝技能
```bash
在 Cowork / Claude Desktop 中點擊 'Save skill'
```
3. 觸發技能
```bash
"Build a HARA for a new ECU project — Electronic Stability Control"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 730 stars（146/天），forks 15（2.1%），顯示出穩定的增長潛力。作者 jherrodthomas 在汽車工程領域有豐富的經驗，這個專案解決了傳統交付物生成過程中的低效問題，過去的解決方案往往依賴手動編輯，導致高錯誤率和低一致性。這個專案的出現正好填補了這一空白，並且在社群中引起了關注。技術生態的變化，如自動化工具的普及，使得這種技能套件變得可行。forks/stars 比率相對較低，顯示出使用者對於這個工具的觀望態度，可能是因為它的應用場景較為專業。

## 適合誰使用

**目標受眾**：專注於汽車工程和安全標準的工程師和質量管理專員。

> [!example] 使用場景
> - 汽車工程師用它來自動生成 HARA 報告，因為手動編輯容易出錯且耗時。
> - 質量管理專員用它來生成 APQP 文檔，因為這樣可以確保每個階段的交付物一致且符合標準。
> - 安全分析師用它來進行 ISO 26262 的風險評估，因為這能提高評估的準確性並減少重複工作。

## 架構分析

這個專案採用模組化的技能架構，每個技能都是獨立的 .skill 文件，這樣的設計使得每個技能可以根據需求進行安裝和使用。資料流方面，使用者通過 Claude 觸發技能，並以 JSON 格式輸入資料，最終生成結構化的 xlsx 輸出。這種設計的好處是能夠保持靈活性和可擴展性，但也可能導致使用者在選擇技能時感到困惑。擴展性方面，隨著新技能的增加，使用者需要花時間學習如何有效地整合這些技能，這可能會成為一個潛在的瓶頸。

## 技術深入分析

這個專案的核心技術機制在於將每個技能設計為獨立的 .skill 文件，這樣的模組化設計允許使用者根據需求選擇安裝。每個技能都能生成結構化的 xlsx 輸出，這樣的資料格式便於在不同開發階段之間進行交接。效能方面，這些技能能夠快速生成所需的報告，具體的生成速度取決於輸入資料的複雜性。設計取捨方面，選擇使用 JSON 作為輸入格式，這樣能夠提高靈活性，但也可能增加使用者的學習成本。技術風險方面，隨著技能數量的增加，使用者可能會面臨選擇困難，並且需要不斷學習如何有效整合這些技能。整合方面，這個專案與 Claude 的生態系統緊密結合，能夠在現有的工作流程中輕鬆使用，但對於不熟悉 Claude 的使用者來說，可能需要額外的學習時間。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但對於新手來說仍需時間適應。缺乏多語言支持，可能對非英語使用者造成障礙。整體來說，花 30 分鐘能夠基本了解並運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠自動化繁瑣的交付物生成過程，顯著提高效率。
> - 提供確認審核者，確保產出的質量和一致性。
> - 支持多種汽車工程標準，適用範圍廣泛。

> [!danger] 缺點
> - 對於新手來說，使用和安裝可能有一定的學習曲線。
> - 需要使用者熟悉 Claude 的操作，否則難以充分發揮功能。
> - 技能的數量雖多，但對於特定需求的覆蓋可能仍有不足。

> [!warning] 注意事項
> - 僅支援特定的汽車工程標準，對於其他行業可能不適用。
> - 需要使用者熟悉 Claude 的操作，對於新手可能有學習曲線。
> - 技能的安裝和使用需要一定的時間來適應，特別是在大型專案中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化技能，但專注於不同的行業需求，可能不如本專案專業化。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | 提供自動化建設工具，但不專注於汽車工程標準，適用範圍較廣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化技能的生成，但不專注於汽車行業，可能不如本專案專業。 | 如果你的需求不僅限於汽車工程，且需要更廣泛的自動化技能。 | medium，因為需要重新學習不同的技能和操作方式。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | 提供自動化建設工具，但不專注於汽車工程標準，適用範圍較廣。 | 如果你的團隊已經在使用 BuilderPulse 且需要擴展功能。 | low，因為可以直接整合現有工具鏈。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **automotive-skills-suite** | **agent-sprite-forge** | **BuilderPulse** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化技能的生成，但不專注於汽車行業，可能不如本專案專業。 | 提供自動化建設工具，但不專注於汽車工程標準，適用範圍較廣。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的技能和操作方式。 | low，因為可以直接整合現有工具鏈。 |
> | 適用場景 | 主要場景 | 如果你的需求不僅限於汽車工程，且需要更廣泛的自動化技能。 | 如果你的團隊已經在使用 BuilderPulse 且需要擴展 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些技能的觸發描述不夠清晰，可能導致使用者無法正確觸發技能
  - 解法：查看 README 中的範例以獲得正確的觸發語句
- **[HIGH]** 在大型專案中，技能的整合可能會變得複雜
  - 解法：建議逐步導入技能，並進行充分測試
- [MEDIUM] 缺乏對於特定標準的詳細說明，可能導致使用者誤用
  - 解法：參考相關標準文檔以獲得正確的使用方式

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型汽車工程項目團隊 | 非常適合 | 能夠自動化生成各種交付物，提升效率和準確性。 |
| 小型創業公司 | 適合 | 能夠快速生成必要的報告，但可能需要時間適應。 |
| 非汽車行業的工程團隊 | 不適合 | 專注於汽車工程標準，對其他行業的支持有限。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到自動化生成交付物的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但使用者需注意依賴的外部工具的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude 生態系統搭配使用，主要在開發和交付階段中發揮作用。在一個用 Claude 的專案中，你可以用這個工具來自動生成各種報告，具體做法是下載所需的技能並觸發相應的指令。與主流 CI 工具（如 GitHub Actions）整合良好，但對於不熟悉 Claude 的使用者來說，可能需要額外的學習時間。整合的摩擦點主要在於技能的選擇和觸發，使用者需花時間熟悉各個技能的功能和用法。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
| Forks | 15 |
| Open Issues | 0 |
| 最後推送 | 2026-05-02 |
| 建立日期 | 2026-05-01 |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jherrodthomas/automotive-skills-suite) |
| Topics | `apqp` `aspice` `automotive` `autosar` `engineering` `fusa` `hardware` `software-engineering` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jherrodthomas](https://github.com/jherrodthomas) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新，但缺乏大量的互動和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-02）
> **活躍天數** 2 天 · **最新 commit** Expand suite to 152 skills: add CAN/LIN/FlexRay/Ethernet, AUTOSAR, diagnostics, calibration, MBSE, S

## README 摘錄

> [!info]- 展開查看原文 README
> # Automotive Engineering Suite
> 
> **152 installable Claude skills covering automotive safety, cybersecurity, quality, communication, diagnostics, AUTOSAR, calibration, MBSE, SysML, and V&V**
> 
> [](LICENSE)
> [](skills/)
> []()
> []()
> [](https://claude.com)
> 
> Every artifact-producing skill is paired with a confirmation reviewer. Reviewer outputs include a visual dashboard with KPI tiles, charts, and findings tables.
> 
> [Quickstart](#quickstart) · [The Chain](#the-chain) · [Skills](#skills) · [Standards](#standards-covered) · [Why](#why)
> 
> ---
> 
> 
> ## Quickstart
> 
> 1. Download the skill you need from `skills/` (or the full bundle from Releases)
> 2. Click "Save skill" in Cowork / Claude Desktop to install
> 3. Trigger by phrasing — every skill declares its triggering description in its frontmatter
> 
> ```bash
> 
> # Example: install the HARA builder, then ask Claude
> "Build a HARA for a new ECU project — Electronic Stability Control"
> ```
> 
> 
> ## Installation
> 
> Each `.skill` file in `skills/` is independently installable. Skills declare triggering descriptions in their frontmatter, so the agent picks them up based on user phrasing (e.g., "build me a HARA" triggers `hara-builder`).
> 
> 
> ## Why
> 
> Every automotive program ships an avalanche of structured deliverables. Most teams maintain them in xlsx, painstakingly hand-edited, with low audit-trail consistency and high re-keying overhead between phases. This suite turns each phase into a builder + reviewer pair where:
> 
> - The **builder** produces the structured xlsx output from a JSON input plus the upstream artifact
> - The **reviewer** runs a confirmation-measures checklist on the builder's output and produces a visual dashboard with KPIs, charts, and findings
> 
> The chain compounds because phases hand off via stable xlsx contracts. A change upstream (HARA) automatically propagates to every downstream skill that consumes it (FSC → TSC → FMEDA → Safety Case).
> 
> 
> ## What this is
> 
> A curated set of 76 builder skills + 76 matching confirmation reviewer skills that automate the structured xlsx deliverables required across the automotive engineering lifecycle:
> 
> - **ISO 26262** functional safety (concept → HW → SW → safety case)
> - **ISO/SAE 21434** cybersecurity (TARA → goals → concept → architecture → IR plan)
> - **ISO 21448 SOTIF** for ADAS/AV (analysis → triggering conditions → validation strategy)
> - **AIAG-VDA quality** (APQP → DFMEA → PFMEA → Control Plan → PPAP)
> - **Automotive SPICE** (assessment → gap analysis → improvement → evidence)
> - **Communication protocols** (DBC / LDF / ARXML / FlexRay / Automotive Ethernet / K-Matrix / bus load / gateway routing)
> - **Diagnostics** (UDS / DTC catalog / CDD / ODX / DEM)
> - **AUTOSAR** (Classic SWC, Composition, BSW, RTE; Adaptive applications)
> - **Calibration** (A2L / DCM / cross-supplier exchange)
> - **MBSE** (ARCADIA model architecture, requirements allocation, system context)
> - **SysML** (block diagram, requirement diagram, activity diagram, state machine)
> - **V&V** (verification plan, validation plan, test case catalog, traceability matrix, V&V execution report)
> - **Chain-integrated program management** (risk register, gate review, WP roll-up, change impact, lessons learned)
> - **Continuous improvement** (8D, 5-Why, fishbone, MSA Gauge R&R, SPC)
> 
> Each skill is an installable `.skill` file. The chain is the moat — every downstream skill consumes the upstream skill's xlsx output as a stable file-format contract.
> 
> 
> ## The chain
> 
> ```
> Item Definition → Safety Plan → DIA
>         ↓
>       HARA → FSC → TSC
>         ↓                ↓
>    HW Lane         SW Lane
>    ↓ ↓ ↓ ↓         ↓ ↓ ↓ ↓
> HW-SR  Arch  HSI  FMEDA   SW-SR  Arch  FMEA  HSI
>         ↓                ↓
>             Safety Case (capstone)
> 
> Parallel chains:
> TARA → CS Goals → CS Concept → CS Architecture → IR Plan + Secure Coding   (ISO/SAE 21434)
> SOTIF Analysis → Triggering Conditions → Validation Strategy                  (ISO 21448)
> APQP Plan → DFMEA → PFMEA → Control Plan → PPAP Package                       (IATF 16949)
> ASPICE Assessment → Gap Analysis → Improvement Plan → Process Evidence        (ASPICE PAM)
> ```
> 
> Every box above has a builder skill AND a matching reviewer skill.
> 
> 
> ## Skills
> 
> 
> ### Foundation (3 builder/reviewer pairs)
> | Skill | Standard |
> |-------|----------|
> | `item-definition-builder` + reviewer | ISO 26262-3 §5 |
> | `safety-plan-builder` + reviewer | ISO 26262-2 §6 |
> | `dia-builder` + reviewer | ISO 26262-8 §5 |
> 
> 
> ### ISO 26262 Concept Phase (3 pairs)
> | Skill | What it produces |
> |-------|------------------|
> | `hara-builder` + reviewer | Hazard Analysis with 14 malfunction guide words and Cartesian (function × malfunction × environment) |
> | `fsc-builder` + reviewer | FTA per safety goal with visual fault tree rendering, FSR derivation, ASIL decomposition |
> | `tsc-builder` + reviewer | HW-TSR/SW-TSR with safety mechanisms, HSI scaffold, system FMEA, DFA, draw.io architecture diagram |
> 
> 
> ### ISO 26262 HW Lane (4 pairs, Part 5)
> | Skill | What it produces |
> |-------|------------------|
> | `hw-safety-reqs-builder` + reviewer | HW Safety Requirements derived from HW-TSRs |
> | `hw-architecture-builder` + reviewer | Refined HW architecture (PCB / IC / package) with safety mechanism allocation |
> | `hsi-builder` + reviewer | Contract-grade HW-SW Interface with C header generation |
> | `fmeda-builder` + reviewer | Formula-driven SPFM/LFM/PMHF with auto-verification against per-ASIL targets |
> 
> 
> ### ISO 26262 SW Lane (4 pairs, Part 6)
> | Skill | What it produces |
> |-------|------------------|
> | `sw-arch-builder` + reviewer | SW architecture with RTOS, scheduling, MPU partitioning, MISRA targets |
> | `sw-sr-builder` + reviewer | SW Safety Requirements with verification methods per ASIL |
> | `sw-fmea-builder` + reviewer | Software FMEA with qualitative residual risk per ASIL threshold |
> | `sw-hsis-builder` + reviewer | SW-side HSI with handler functions and C header |
> 
> 
> ### ISO 26262 Capstone
> | Skill | What it produces |
> |-------|------------------|
> | `safety-case-builder` + reviewer | GSN-style argument pulling evidence from all upstream artifacts |
> 
> 
> ### ISO/SAE 21434 Cybersecurity (6 pairs, UN R155 mandated)
> | Skill | What it produces |
> |-------|------------------|
> | `tara-builder` + reviewer | Threat Analysis with STRIDE coverage and Risk Value lookup |
> | `cs-goals-builder` + reviewer | Cybersecurity Goals with CAL assignment |
> | `cs-concept-builder` + reviewer | CSR derivation per cybersecurity property |
> | `cs-architecture-builder` + reviewer | Cryptographic inventory, key management, secure boot chain |
> | `incident-response-plan-builder` + reviewer | PSIRT plan with UN R155 / ENISA / NHTSA notification deadlines |
> | `secure-coding-guidelines-builder` + reviewer | CERT C + MISRA Amendment 1 + AUTOSAR C++14 secure subset |
> 
> 
> ### ISO 21448 SOTIF (3 pairs, ADAS / AV)
> | Skill | What it produces |
> |-------|------------------|
> | `sotif-analysis-builder` + reviewer | ODD, performance limitations, scenario quadrant classification |
> | `triggering-conditions-builder` + reviewer | Environmental / sensor / road / road-user / system / driver triggering conditions |
> | `sotif-validation-strategy-builder` + reviewer | Real-world / simulation / proving ground / field monitoring campaign |
> 
> 
> ### AIAG-VDA Quality (5 pairs, IATF 16949)
> | Skill | What it produces |
> |-------|------------------|
> | `apqp-plan-builder` + reviewer | 5-phase product quality plan with gate reviews |
> | `dfmea-builder` + reviewer | Design FMEA per AIAG-VDA 2019 (Action Priority replaces RPN) |
> | `pfmea-builder` + reviewer | Process FMEA per AIAG-VDA 2019 |
> | `control-plan-builder` + reviewer | Production Control Plan with SPC / 100% / mistake-proofing / audit |
> | `ppap-package-builder` + reviewer | 18-element PPAP submission with PSW |
> 
> 
> ### Automotive SPICE (4 pairs)
> | Skill | What it produces |
> |-------|------------------|
> | `aspice-assessment-builder` + reviewer | Per-process Capability Level scoring per PAM 3.1 |
> | `aspice-gap-analysis-builder` + reviewer | Gaps to target CL with severity classi

## 延伸閱讀

相關概念：[[自動化]] · [[汽車工程]] · [[質量管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DanOps-1--Gpt-Agreement-Payment|DanOps-1/Gpt-Agreement-Payment]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/jherrodthomas/automotive-skills-suite)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "jherrodthomas--automotive-skills-suite"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jherrodthomas--automotive-skills-suite"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "jherrodthomas--automotive-skills-suite" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "jherrodthomas--automotive-skills-suite"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","汽車工程","質量管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jherrodthomas--automotive-skills-suite" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jherrodthomas--automotive-skills-suite" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jherrodthomas" AND file.name != "jherrodthomas--automotive-skills-suite"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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
> const me = dv.page("Repos/jherrodthomas--automotive-skills-suite");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-07|2026-05-07]] — 首次收錄，730 stars
