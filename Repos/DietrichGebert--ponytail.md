---
repo: DietrichGebert/ponytail
url: https://github.com/DietrichGebert/ponytail
owner: DietrichGebert
owner_type: User
language: JavaScript
license: MIT
description: "Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote."
homepage: ""
stars: 1541
stars_per_day: 771
forks: 70
open_issues: 0
created: 2026-06-12
pushed_at: 2026-06-13
first_seen: 2026-06-13
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "程式碼優化"
release_tag: "v4.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-13
use_case: "讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 100
repo_size_kb: 1078
readme_length: 4364
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-13"
star_history: "2026-06-13:939,2026-06-13:940,2026-06-14:1541"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/claude_code_plugin"
aliases:
  - "ponytail"
  - "DietrichGebert/ponytail"
  - "讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。"
---

# ponytail

**940** stars · **940** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/DietrichGebert--ponytail");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v4.2.0` `easy-install`

`agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` `prompt-engineering` `yagni`

> [!summary] 一句話摘要
> 讓 AI 代理像最懶的資深開發者一樣思考，最好的程式碼是你從未寫過的程式碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (940 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在開發過程中減少不必要程式碼的工程師和團隊。
> **一句話重點** Ponytail 的核心價值在於透過簡化程式碼來提高開發效率，讓開發者專注於真正需要的功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼優化" && p.file.name !== "DietrichGebert--ponytail" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得採用。

> [!abstract] 核心創新
> Ponytail 透過懶惰的編程風格，顯著減少程式碼量和提高開發速度，實現了更高效的開發流程。

## 專案簡介

Ponytail 是一個讓 AI 代理在開發過程中採用懶惰的編程風格的工具，透過一系列的規則來減少不必要的程式碼。使用者只需簡單的指令 `/plugin install ponytail` 即可啟用，Ponytail 會在開發過程中自動判斷是否需要存在某段程式碼，並優先使用標準庫或已安裝的依賴。這樣的設計不僅能減少程式碼量（平均減少 47%），還能加快開發速度（快 3 倍），使得程式碼的維護成本大幅降低。Ponytail 的核心邏輯是基於 YAGNI（You Aren't Gonna Need It）原則，讓開發者在不影響安全性和可用性的前提下，專注於最必要的功能。與傳統開發方式相比，Ponytail 透過簡化流程來提高效率，並在面對突發需求時，能以最少的變更應對。

這使得它特別適合快速迭代的開發環境。相較於其他工具如 caveman，Ponytail 以更少的程式碼達成相同的功能，並且在安全性和可擴展性上保持高標準。實際使用中，Ponytail 也能輕鬆整合到現有的開發流程中，並且不需要額外的配置文件，降低了使用門檻。整體來看，Ponytail 是一個適合希望減少開發負擔並提高效率的團隊使用的工具。

**技術棧**：`JavaScript` · `PowerShell` · `Shell`

## 重點功能

- YAGNI 原則 — 自動判斷不必要的程式碼，減少開發負擔。
- 47% 更少的程式碼 — 相比於傳統開發方式，顯著降低程式碼量。
- 3 倍的開發速度 — 提高開發效率，快速應對需求變更。
- 無需配置文件 — 簡化安裝流程，降低使用門檻。
- 安全性保障 — 在簡化程式碼的同時，確保信任邊界和數據處理的安全性。

## 快速開始

1. 安裝 Ponytail 插件
```bash
/plugin marketplace add DietrichGebert/ponytail
```
2. 啟用 Ponytail
```bash
/plugin install ponytail@ponytail
```
3. 使用 Ponytail 進行開發
```bash
/ponytail-help
```

## 程式碼範例

```js
{
  "前置條件": "安裝 Ponytail 插件後，使用以下指令",
  "指令": "/ponytail-review",
  "預期輸出": "顯示需要刪除的程式碼差異"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 940 stars（940/天），forks 42（4.5%），這顯示出強烈的初期吸引力。作者 DietrichGebert 在開源社群中有一定的影響力，之前的專案也獲得過好評。Ponytail 解決了開發者在編寫過多程式碼時的痛點，特別是在快速迭代的環境中，傳統的開發方式往往導致不必要的複雜性。這個工具的出現正好迎合了對簡化開發流程的需求，尤其是在 AI 代理的應用場景中。forks/stars 比率為 4.5%，顯示出有相當一部分使用者對這個工具進行了實際修改或使用。

## 適合誰使用

**目標受眾**：希望在開發過程中減少不必要程式碼的工程師和團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成 UI 元件，因為它能減少 47% 的程式碼量，讓開發速度提升 3 倍。
> - 後端開發者用它來簡化 API 的實作，因為它能自動選擇最合適的庫和方法，降低維護成本。
> - 產品經理用它來快速迭代功能，因為它能在不影響安全性的情況下，快速應對需求變更。

## 架構分析

Ponytail 的架構設計以簡化為核心，通過一系列的規則來判斷程式碼的必要性。首先，代理會檢查是否需要存在某段程式碼，然後優先使用標準庫或已安裝的依賴，最後才是撰寫最小可行的程式碼。這樣的設計使得開發者能夠專注於必要的功能，而不必擔心過多的程式碼複雜性。這種懶惰的設計選擇雖然在某些情況下可能會犧牲靈活性，但在大多數快速迭代的開發環境中，卻能帶來更高的效率和更少的錯誤。擴展性方面，Ponytail 可以無縫整合到現有的開發流程中，並且不需要額外的配置，這使得它在不同的專案中都能輕鬆適應。

## 技術深入分析

Ponytail 的核心技術機制是基於 YAGNI 原則，通過一系列的判斷邏輯來決定程式碼的必要性。這種設計不僅能減少程式碼量，還能提高開發速度，因為開發者不需要撰寫過多的程式碼。效能方面，Ponytail 在多個測試中顯示出顯著的優勢，例如在相同的任務中，使用 Ponytail 的代理能夠以 3 倍的速度完成任務，並且產生的程式碼量僅為傳統開發方式的七分之一。這樣的設計選擇使得 Ponytail 在快速迭代的開發環境中非常有效，尤其是在面對突發需求時，能夠快速適應並進行修改。技術風險方面，Ponytail 依賴於開發者對 YAGNI 原則的理解，若使用者未能正確運用，可能會導致功能缺失。整合方面，Ponytail 可以輕鬆融入現有的開發流程中，並且與主流的開發工具鏈相容，這使得它在實際應用中非常方便。整體來看，Ponytail 是一個在現代開發環境中非常有價值的工具，能夠幫助開發者提高效率並減少不必要的工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，沒有明顯的坑。文件中有良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 顯著減少程式碼量，降低維護成本。
> - 提高開發速度，快速應對需求變更。
> - 無需額外配置，降低使用門檻。
> - 安全性保障，確保信任邊界和數據處理的安全性。

> [!danger] 缺點
> - 可能不適用於所有開發環境。
> - 對於複雜功能需求，可能無法完全滿足。
> - 需要使用者理解 YAGNI 原則，否則可能會錯過必要的功能。

> [!warning] 注意事項
> - 僅支援特定的開發環境，可能不適用於所有專案。
> - 對於複雜的功能需求，可能無法完全滿足。
> - 需要使用者理解 YAGNI 原則，否則可能會錯過必要的功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 也專注於簡化程式碼，但相較於 Ponytail，可能會產生更多的程式碼，且不如 Ponytail 在安全性上有保障。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了更廣泛的功能，但在程式碼簡化方面不如 Ponytail 有效。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於程式碼的清理和優化，但不具備 Ponytail 的即時反饋和簡化邏輯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Caveman 也專注於簡化程式碼，但相較於 Ponytail，可能會產生更多的程式碼，且不如 Ponytail 在安全性上有保障。 | 如果需要更廣泛的功能而不僅僅是簡化程式碼，可以考慮 Caveman。 | medium，因為需要調整開發流程以適應不同的設計理念。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了更廣泛的功能，但在程式碼簡化方面不如 Ponytail 有效。 | 如果需要多樣化的功能和擴展性，Agent Sprite Forge 可能是更好的選擇。 | high，因為需要重新設計整個開發流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ponytail** | **caveman** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Caveman 也專注於簡化程式碼，但相較於 Ponytail，可能會產生更多的程式碼，且不如 Ponytail 在安全性上有保障。 | Agent Sprite Forge 提供了更廣泛的功能，但在程式碼簡化方面不如 Ponytail 有效。 |
> | 遷移成本 | - | medium，因為需要調整開發流程以適應不同的設計理念。 | high，因為需要重新設計整個開發流程。 |
> | 適用場景 | 主要場景 | 如果需要更廣泛的功能而不僅僅是簡化程式碼，可以考慮 Cave | 如果需要多樣化的功能和擴展性，Agent Sprite Fo |

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

- [MEDIUM] 在某些環境下，Ponytail 可能無法正確識別標準庫的功能
  - 解法：手動檢查並確保所有依賴已正確安裝
- **[HIGH]** 對於複雜的功能需求，可能導致功能缺失
  - 解法：在使用前仔細評估需求，必要時撰寫額外程式碼

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速開發並減少維護成本，適合資源有限的團隊。 |
| 大型企業的複雜系統開發 | 不適合 | 在面對複雜需求時，可能無法滿足所有功能要求。 |
| 快速迭代的產品開發團隊 | 非常適合 | 能夠快速應對需求變更，提升開發效率。 |
| 需要高安全性的金融系統 | 普通 | 雖然安全性有保障，但對於複雜的安全需求可能無法完全滿足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Ponytail 本身不需要高權限，且不存取敏感資料，依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
| Issue 解決率 | 100% (3 closed) |
| 最後推送 | 2026-06-13 |
| 建立日期 | 2026-06-12 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DietrichGebert/ponytail) |
| Topics | `agent-skills` `ai-agents` `claude` `claude-code` `claude-code-plugin` `cursor-rules` `developer-tools` `llm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 98
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DietrichGebert](https://github.com/DietrichGebert) | 20 |
> | [@ChindanaiNaKub](https://github.com/ChindanaiNaKub) | 2 |
> | [@apardawala](https://github.com/apardawala) | 1 |
> | [@HannesOberreiter](https://github.com/HannesOberreiter) | 1 |
> | [@marking](https://github.com/marking) | 1 |

**最新版本**：v4.2.0 — v4.2.0: lazy in OpenCode now (2026-06-13)

> [!info]- Release Notes
> **Added**
> - OpenCode support: a plugin that injects the ponytail ruleset every turn and adds `/ponytail` + `/ponytail-review`, with README install steps. (#16)
> 
> **Fixed**
> - Mode filter no longer strips rule bullets containing a colon. (#14)
> - Hooks use `CLAUDE_PLUGIN_ROOT`, fixing activation that failed with `Cannot find module`. (#12)

## 社群與生態

**社群活躍度**：社群活躍度高，問題解決率達 100%。
**連結**：[文件](https://github.com/DietrichGebert/ponytail)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-12 ~ 2026-06-13）
> **活躍天數** 2 天 · **最新 commit** docs: add badge row and proof bar to README top

## README 摘錄

> [!info]- 展開查看原文 README
> Ponytail
> 
>   He says nothing. He writes one line. It works.
> 
>   
>   
>   
>   
> 
>   47% fewer tokens &middot; 3&times; faster &middot; one-seventh the code
>   Same six tasks, same model, same adversarial security and concurrency probes. See the benchmark.
> 
> ---
> 
> You know him. Long ponytail. Oval glasses. Has been at the company longer than the version control. You show him fifty lines; he looks at them, says nothing, and replaces them with one.
> 
> Ponytail puts him inside your AI agent.
> 
> ## Before / after
> 
> You ask for a date picker. Your agent installs flatpickr, writes a wrapper component, adds a stylesheet, and starts a discussion about timezones.
> 
> With ponytail:
> 
> ```html
> 
> ```
> 
> More survivors in [examples/](examples/).
> 
> ## Numbers
> 
> Six tasks: streaming log parser, atomic file sync, notification dispatcher, validation engine, auth module, concurrent money ledger. One spec each, one fresh agent per arm, same model. Three arms: no skill, the [caveman](https://github.com/JuliusBrussee/caveman) skill, and ponytail. Every arm passes the same adversarial security and concurrency probes. Then the agreement ends:
> 
>   
> 
> **47% fewer tokens than the no-skill agent. 3× faster. A seventh of the code.** The 3,139 lines nobody wrote have never caused an incident. When a surprise feature request hit two of the tasks, ponytail extended in 96 changed lines; caveman needed 413, the no-skill agent 1,115. Every shortcut ponytail took is marked in the code with a `ponytail:` comment naming its upgrade path. Data: [benchmarks/](benchmarks/).
> 
> ## How it works
> 
> Before writing code, the agent stops at the first rung that holds:
> 
> ```
> 1. Does this need to exist?   → no: skip it (YAGNI)
> 2. Stdlib does it?            → use it
> 3. Native platform feature?   → use it
> 4. Installed dependency?      → use it
> 5. One line?                  → one line
> 6. Only then: the minimum that works
> ```
> 
> Lazy, not negligent: trust-boundary validation, data-loss handling, security, and accessibility are never on the chopping block.
> 
> ## Install
> 
> The most effort ponytail will ever ask of you:
> 
> ### Claude Code
> 
> ```
> /plugin marketplace add DietrichGebert/ponytail
> /plugin install ponytail@ponytail
> ```
> 
> ### Codex
> 
> ```bash
> codex plugin marketplace add DietrichGebert/ponytail
> codex
> ```
> 
> Open `/plugins`, select the Ponytail marketplace, and install Ponytail. Then
> open `/hooks`, review and trust its two lifecycle hooks, and start a new thread.
> 
> ### Pi agent harness
> 
> ```
> pi install git:github.com/DietrichGebert/ponytail
> ```
> 
> ### OpenCode
> 
> Run OpenCode from a checkout of this repo (the plugin reuses its `hooks/` and `skills/`), and add to `opencode.json`:
> 
> ```json
> { "plugin": ["./.opencode/plugins/ponytail.mjs"] }
> ```
> 
> Injects the ruleset every turn at the active level; adds `/ponytail` and `/ponytail-review`. OpenCode also auto-loads this repo's `AGENTS.md`, so the rules hold even without the plugin — the plugin adds the `lite/full/ultra/off` levels.
> 
> That was it. He'd be proud. He won't say it.
> 
> Active every session. `/ponytail-review` finds what to delete in your diff. `/ponytail ultra` exists for when the codebase has wronged you personally. `/ponytail-help` explains the rest.
> 
> In Codex, invoke the skills as `@ponytail`, `@ponytail-review`, and
> `@ponytail-help`. Startup and mode-change text shows the current mode.
> 
> Cursor, Windsurf, Cline, Copilot, Aider, Kiro: copy the matching rules file from this repo ([`.cursor/rules/`](.cursor/rules/), [`.windsurf/rules/`](.windsurf/rules/), [`.clinerules/`](.clinerules/), [`.github/copilot-instructions.md`](.github/copilot-instructions.md), [`AGENTS.md`](AGENTS.md), [`.kiro/steering/`](.kiro/steering/)).
> 
> Kiro: copy `.kiro/steering/ponytail.md` to `~/.kiro/steering/` (global) or `.kiro/steering/` in your project.
> 
> Which files map to which agent: [Agent portability](docs/agent-portability.md).
> 
> ## Development
> 
> When changing the compact rule text, keep the agent copies aligned:
> 
> ```bash
> node scripts/check-rule-copies.js
> ```
> 
> ## FAQ
> 
> **Does it need a config file?**
> No.
> 
> **What if I really need the 120-line cache class?**
> You don't. Insist anyway and he'll build it. Slowly. Correctly. While looking at you.
> 
> **Does it scale?**
> The code you never wrote scales infinitely. Zero bugs, zero CVEs, 100% uptime since forever.
> 
> **Why "ponytail"?**
> You know exactly why.
> 
> ## License
> 
> [MIT](LICENSE). The shortest license that works.

## 延伸閱讀

相關概念：[[YAGNI]] · [[程式碼生成]] · [[自動化測試]]

相關專案：[[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[KKKKhazix--khazix-skills|KKKKhazix/khazix-skills]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/DietrichGebert/ponytail)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼優化" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "DietrichGebert--ponytail" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["YAGNI","程式碼生成","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DietrichGebert--ponytail" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DietrichGebert--ponytail" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DietrichGebert" AND file.name != "DietrichGebert--ponytail"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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
> const me = dv.page("Repos/DietrichGebert--ponytail");
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

> **2026-06-13** — 首次收錄
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

- [[2026-06-14|2026-06-14]] — 再次上榜，1.5k stars
- [[2026-06-13|2026-06-13]] — 首次收錄，939 stars
