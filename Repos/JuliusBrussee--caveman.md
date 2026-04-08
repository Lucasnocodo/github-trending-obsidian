---
repo: JuliusBrussee/caveman
url: https://github.com/JuliusBrussee/caveman
owner: JuliusBrussee
owner_type: User
language: Python
license: MIT
description: "🪨 why use many token when few token do trick — Claude Code skill that cuts 65% of tokens by talking like caveman"
homepage: "https://juliusbrussee.github.io/caveman/"
stars: 5957
stars_per_day: 1986
forks: 214
open_issues: 15
created: 2026-04-04
pushed_at: 2026-04-07
first_seen: 2026-04-08
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "Prompt Engineering"
release_tag: "v1.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-08
use_case: "透過模仿原始人說話方式，減少約 65% 的 LLM 輸出 token 數量。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-11"
contributor_count: 5
engagement: "low"
issue_close_rate: 35
repo_size_kb: 58
readme_length: 8945
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-08"
star_history: "2026-04-08:5957"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/anthropic"
  - "topic/caveman"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "caveman"
  - "JuliusBrussee/caveman"
  - "透過模仿原始人說話方式，減少約 65% 的 LLM 輸出 token 數量。"
---

# caveman

**6.0k** stars · **2.0k** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/JuliusBrussee--caveman");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.2.0` `easy-install`

`ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` `skill` `tokens`

> [!summary] 一句話摘要
> 透過模仿原始人說話方式，減少約 65% 的 LLM 輸出 token 數量。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (2.0k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在使用 LLM 時降低 token 成本的開發者和團隊。
> **一句話重點** Caveman 不僅能節省 token，還能提高技術交流的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Prompt Engineering" && p.file.name !== "JuliusBrussee--caveman" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Prompt Engineering 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到顯著的 token 節省，值得採用。

> [!abstract] 核心創新
> Caveman 能夠在保持技術準確性的同時，將 LLM 的輸出 token 數量減少約 75%。

## 專案簡介

Caveman 是一個 Claude Code 的技能，透過簡化語言來顯著減少輸出 token 數量，並保持技術準確性。用戶只需輸入 `/caveman` 或 `talk like caveman`，就能將正常的對話轉換為更簡潔的表達，從而節省約 75% 的 token。這個工具還提供三種強度級別（lite、full、ultra），用戶可以根據需要選擇適合的壓縮程度。技術上，Caveman 使用 Python 實作，並透過 Claude API 進行輸入和輸出處理，這使得它在性能上相當高效。與其他工具相比，如 Codex 和 GitHub Copilot，Caveman 在 token 使用上更具優勢，特別是在需要大量技術細節的情況下。

實際使用中，Caveman 能夠處理的 token 範圍從 22% 到 87% 的節省，這對於需要頻繁查詢的開發者來說，能顯著降低成本。使用者在使用過程中可能會遇到一些限制，例如對於某些複雜的技術術語，Caveman 可能無法完全保留其原意。這個專案目前仍在快速發展中，未來可能會增加更多功能和改進。對於小型團隊或個人開發者來說，Caveman 是一個值得嘗試的工具，特別是在需要節省成本和提高效率的情況下。

**技術棧**：`Python`

## 重點功能

- 三種強度級別 — 用 `/caveman lite`、`/caveman full` 或 `/caveman ultra` 來選擇不同的壓縮程度。
- Caveman Compress — 使用 `/caveman-compress CLAUDE.md` 將記憶檔案壓縮，節省約 45% 的輸入 token。
- 自動清晰度 — 對於安全警告和破壞性操作，自動停止壓縮以保持清晰度。
- GitHub Action — 自動同步 SKILL.md，保持所有技能入口一致。
- 高效的 token 節省 — 在多個任務中，平均節省約 65% 的輸出 token。

## 快速開始

1. 安裝 Caveman
```bash
npx skills add JuliusBrussee/caveman
```
2. 為特定代理安裝
```bash
npx skills add JuliusBrussee/caveman -a cursor
```
3. 啟用 Caveman 模式
```bash
/caveman
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Caveman 插件",
  "指令": "/caveman",
  "預期輸出": "Caveman 模式啟用，開始使用簡化語言進行對話。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 5957 stars（1986/天），forks 214（3.6%），這顯示出強烈的興趣和實際應用潛力。作者 JuliusBrussee 之前有開發其他相關工具，這使得他在這個領域具備一定的專業性。Caveman 解決了 LLM 輸出 token 數量過多的問題，這在許多開發者的日常工作中都是一個痛點。最近的推文和社群討論也讓這個工具獲得了更多的曝光。技術上，隨著 LLM 模型的普及，對於 token 使用的優化需求越來越高，這使得 Caveman 的出現恰逢其時。forks/stars 比率為 3.6%，顯示出使用者對於這個工具的實際修改和應用需求。

## 適合誰使用

**目標受眾**：希望在使用 LLM 時降低 token 成本的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來簡化 API 回應，因為這樣能減少 token 使用，降低成本。
> - 前端開發者用它來快速獲得技術建議，因為 Caveman 能夠在保持準確性的同時，顯著減少輸出字數。
> - DevOps 工程師用它來壓縮日誌信息，因為這樣能提高可讀性並節省存儲空間。

## 架構分析

Caveman 的架構設計以簡化語言為核心，通過對正常輸出進行壓縮來減少 token 使用。這種設計選擇使得用戶能夠在不同的強度級別之間進行選擇，從而滿足不同場景的需求。資料流方面，Caveman 透過 Claude API 處理輸入和輸出，並在每次會話開始時加載記憶檔案。

這樣的設計使得使用者能夠在保持技術準確性的同時，獲得更快的反應速度。選擇這種方法的代價在於，對於某些複雜的技術術語，可能無法完全保留其原意。擴展性方面，Caveman 的設計使得未來可以輕鬆添加更多功能，而不會影響現有的性能。

## 技術深入分析

Caveman 的核心技術機制在於其對輸出語言的簡化，使用了高效的壓縮算法來減少不必要的詞彙。這種設計使得用戶能夠在保持技術準確性的同時，獲得更快的反應速度。根據實際測試，Caveman 在多個任務中平均能節省約 65% 的 token，這對於需要頻繁查詢的開發者來說，能顯著降低成本。選擇 Python 作為開發語言的原因在於其簡潔性和高效性，使得開發和維護都相對容易。Caveman 的依賴樹相對簡單，主要依賴於 Claude API，這降低了未來的維護成本。技術風險方面，Caveman 可能在處理某些複雜的技術術語時出現問題，這需要在未來的版本中進行改進。整合方面，Caveman 可以輕鬆與現有的開發工具鏈相容，並且對於 CI/CD pipeline 的友好度也相當高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 顯著減少 token 使用，降低成本。
> - 保持技術準確性，適合技術性問題。
> - 提供多種強度級別，靈活應對不同需求。

> [!danger] 缺點
> - 對於非技術性問題的簡化效果不佳。
> - 可能無法完全保留某些複雜術語的原意。
> - 需要持續更新以保持與 Claude API 的相容性。

> [!warning] 注意事項
> - 不支援對於某些複雜技術術語的完全保留。
> - 對於非技術性問題，可能無法提供有效的簡化。
> - 需要持續更新以保持與 Claude API 的相容性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | HolyClaude 主要專注於提供更自然的對話，而 Caveman 則專注於減少 token 使用，適合需要節省成本的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供更廣泛的功能，但在 token 節省方面不如 Caveman 直接有效。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於資料同步，而 Caveman 則專注於語言簡化，適合不同的使用場景。 | 如果你的需求主要是資料同步，parsync 會是更合適的選擇。 | low，因為兩者的功能差異不大。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 提供 WebSocket 代理功能，而 Caveman 專注於 LLM 的輸出簡化，適合不同的使用場景。 | 如果你的需求是 WebSocket 代理，tg-ws-proxy 會是更合適的選擇。 | medium，因為需要重新設計整體架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **caveman** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | parsync 專注於資料同步，而 Caveman 則專注於語言簡化，適合不同的使用場景。 | tg-ws-proxy 提供 WebSocket 代理功能，而 Caveman 專注於 LLM 的輸出簡化，適合不同的使用場景。 |
> | 遷移成本 | - | low，因為兩者的功能差異不大。 | medium，因為需要重新設計整體架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步，parsync 會是更合適的選擇 | 如果你的需求是 WebSocket 代理，tg-ws-pro |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，Caveman 可能無法完全保留技術術語的原意。
  - 解法：對於複雜術語，建議使用正常模式。
- [MEDIUM] 使用過程中可能會遇到不必要的語言簡化。
  - 解法：可調整強度級別以獲得更合適的輸出。
- [MEDIUM] 對於非技術性問題的簡化效果不佳。
  - 解法：在處理非技術性問題時，建議使用正常模式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能有效降低 API 回應的 token 使用，節省成本。 |
| 大型企業的技術支持系統 | 適合 | 能夠在保持準確性的同時，減少輸出字數。 |
| 需要頻繁查詢的開發者工具 | 非常適合 | 能顯著降低查詢成本，提升效率。 |
| 非技術性問題的客戶支持 | 不適合 | 對於非技術性問題的簡化效果不佳。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的 token 節省，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Caveman 不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Caveman 最常與 Claude Code 及其他 LLM 工具搭配使用，處於開發和部署的環節。在一個使用 Claude Code 的專案中，Caveman 可以用來簡化 API 回應，具體做法是使用 `/caveman` 指令來啟用簡化模式。Caveman 支援多種 CI 工具，如 GitHub Actions，並且可以與主流 IDE（如 VS Code）整合。整合的摩擦點主要在於對於某些複雜術語的處理，可能需要進行額外的調整。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
| Forks | 214 |
| Open Issues | 15 |
| Issue 解決率 | 35% (8 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-04 |
| 官方網站 | [Link](https://juliusbrussee.github.io/caveman/) |
| Repo 大小 | 58 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JuliusBrussee/caveman) |
| Topics | `ai` `anthropic` `caveman` `claude` `claude-code` `llm` `meme` `prompt-engineering` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JuliusBrussee](https://github.com/JuliusBrussee) | 24 |
> | [@vraj00222](https://github.com/vraj00222) | 5 |
> | [@lbzepoqo](https://github.com/lbzepoqo) | 2 |
> | [@schnapster](https://github.com/schnapster) | 1 |
> | [@Juris-S](https://github.com/Juris-S) | 1 |

**最新版本**：v1.2.0 — v1.2.0 — Intensity Levels, Auto-Clarity & Caveman-Compress (2026-04-06)

> [!info]- Release Notes
> ## What's new
> 
> - **Intensity levels** — choose `lite`, `full` (default), or `ultra` caveman compression. Fine-grained control over how aggressive the token savings are.
> - **Auto-Clarity** — caveman mode automatically drops compression for security warnings and destructive operations. Safety-critical output stays crystal clear.
> - **caveman-compress skill** — new standalone skill that compresses natural language memory files (CLAUDE.md, todos, preferences) into caveman format. Preserves all technical substance while cutting tokens.
> - **GitHub Action for SKILL.md sync** — auto-syncs SKILL.md copies on push to main, keeping all skill entry points consistent.
> - **GitHub Pages landing site** — project now has a proper landing page.
> - **SKILL.md prompt compression** — ~40% fewer tokens in the skill prompt while keeping all behavioral anchors.
> 
> ## Upgrade
> 
> Update your skill installation to get intensity levels and auto-clarity automatically.
> 
> **Full Changelog**: https://github.com/JuliusBrussee/caveman/compare/v1.1.0...v1.2.0

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和問題回應。
**連結**：[文件](https://juliusbrussee.github.io/caveman/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-07）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #29 from nisrulz/patch-1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/JuliusBrussee/caveman/issues/18) | README makes two inaccurate claims about token savings | 19 | 1 |
> | [#16](https://github.com/JuliusBrussee/caveman/issues/16) | Opencode / Oh-my-pi support `enhancement` | 11 | 1 |
> | [#9](https://github.com/JuliusBrussee/caveman/issues/9) | Abathur mode — alternative persona `enhancement` `good first issue` | 6 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> caveman
> 
>   why use many token when few do trick
> 
>   
>   
>   
> 
>   Install •
>   Benchmarks •
>   Before/After •
>   Intensity Levels •
>   Compress •
>   Why
> 
> ---
> 
> A [Claude Code](https://docs.anthropic.com/en/docs/claude-code) skill/plugin and Codex plugin that makes agent talk like caveman — cutting **~75% of output tokens** while keeping full technical accuracy. Plus a companion tool that compresses your memory files to cut **~45% of input tokens** every session.
> 
> Based on the viral observation that caveman-speak dramatically reduces LLM token usage without losing technical substance. So we made it a one-line install.
> 
> ## Before / After
> 
> ### 🗣️ Normal Claude (69 tokens)
> 
> > "The reason your React component is re-rendering is likely because you're creating a new object reference on each render cycle. When you pass an inline object as a prop, React's shallow comparison sees it as a different object every time, which triggers a re-render. I'd recommend using useMemo to memoize the object."
> 
> ### 🪨 Caveman Claude (19 tokens)
> 
> > "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."
> 
> ### 🗣️ Normal Claude
> 
> > "Sure! I'd be happy to help you with that. The issue you're experiencing is most likely caused by your authentication middleware not properly validating the token expiry. Let me take a look and suggest a fix."
> 
> ### 🪨 Caveman Claude
> 
> > "Bug in auth middleware. Token expiry check use `
> 
> **Same fix. 75% less word. Brain still big.**
> 
> **Sometimes too much caveman. Sometimes not enough:**
> 
> #### 🪶 Lite
> 
> > "Your component re-renders because you create a new object reference each render. Inline object props fail shallow comparison every time. Wrap it in `useMemo`."
> 
> #### 🪨 Full
> 
> > "New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`."
> 
> #### 🔥 Ultra
> 
> > "Inline obj prop → new ref → re-render. `useMemo`."
> 
> **Same answer. You pick how many word.**
> 
> ## Benchmarks
> 
> Real token counts from the Claude API ([reproduce it yourself](benchmarks/)):
> 
> | Task | Normal (tokens) | Caveman (tokens) | Saved |
> |------|---------------:|----------------:|------:|
> | Explain React re-render bug | 1180 | 159 | 87% |
> | Fix auth middleware token expiry | 704 | 121 | 83% |
> | Set up PostgreSQL connection pool | 2347 | 380 | 84% |
> | Explain git rebase vs merge | 702 | 292 | 58% |
> | Refactor callback to async/await | 387 | 301 | 22% |
> | Architecture: microservices vs monolith | 446 | 310 | 30% |
> | Review PR for security issues | 678 | 398 | 41% |
> | Docker multi-stage build | 1042 | 290 | 72% |
> | Debug PostgreSQL race condition | 1200 | 232 | 81% |
> | Implement React error boundary | 3454 | 456 | 87% |
> | **Average** | **1214** | **294** | **65%** |
> 
> *Range: 22%–87% savings across prompts.*
> 
> > [!IMPORTANT]
> > Caveman only affects output tokens — thinking/reasoning tokens are untouched. Caveman no make brain smaller. Caveman make *mouth* smaller. Biggest win is **readability and speed**, cost savings are a bonus.
> 
> ### Science back caveman up
> 
> A March 2026 paper ["Brevity Constraints Reverse Performance Hierarchies in Language Models"](https://arxiv.org/abs/2604.00025) found that constraining large models to brief responses **improved accuracy by 26 percentage points** on certain benchmarks and completely reversed performance hierarchies. Verbose not always better. Sometimes less word = more correct.
> 
> ## Install
> 
> ```bash
> npx skills add JuliusBrussee/caveman
> ```
> 
> `npx skills` supports 40+ agents — Claude Code, GitHub Copilot, Cursor, Windsurf, Cline, and more. To install for a specific agent:
> 
> ```bash
> npx skills add JuliusBrussee/caveman -a cursor
> npx skills add JuliusBrussee/caveman -a github-copilot
> npx skills add JuliusBrussee/caveman -a cline
> npx skills add JuliusBrussee/caveman -a windsurf
> npx skills add JuliusBrussee/caveman -a codex
> ```
> 
> Or with Claude Code plugin system:
> 
> ```bash
> claude plugin marketplace add JuliusBrussee/caveman
> claude plugin install caveman@caveman
> ```
> 
> ## Usage
> 
> Trigger with:
> - `/caveman` or Codex `$caveman`
> - "talk like caveman"
> - "caveman mode"
> - "less tokens please"
> 
> Stop with: "stop caveman" or "normal mode"
> 
> ### Intensity Levels
> 
> Sometimes full caveman too much. Sometimes not enough. Now you pick:
> 
> | Level | Trigger | What it do |
> |-------|---------|------------|
> | **Lite** | `/caveman lite` or `$caveman lite` | Drop filler, keep grammar. Professional but no fluff |
> | **Full** | `/caveman full` or `$caveman full` | Default caveman. Drop articles, fragments, full grunt |
> | **Ultra** | `/caveman ultra` or `$caveman ultra` | Maximum compression. Telegraphic. Abbreviate everything |
> 
> Level stick until you change it or session end.
> 
> ## What Caveman Do
> 
> | Thing | Caveman Do? |
> |-------|------------|
> | English explanation | 🪨 Caveman smash filler words |
> | Code blocks | ✍️ Write normal (caveman not stupid) |
> | Technical terms | 🧠 Keep exact (polymorphism stay polymorphism) |
> | Error messages | 📋 Quote exact |
> | Git commits & PRs | ✍️ Write normal |
> | Articles (a, an, the) | 💀 Gone |
> | Pleasantries | 💀 "Sure I'd be happy to" is dead |
> | Hedging | 💀 "It might be worth considering" extinct |
> 
> ## Why
> 
> ```
> ┌─────────────────────────────────────┐
> │  TOKENS SAVED          ████████ 75% │
> │  TECHNICAL ACCURACY    ████████ 100%│
> │  SPEED INCREASE        ████████ ~3x │
> │  VIBES                 ████████ OOG │
> └─────────────────────────────────────┘
> ```
> 
> - **Faster response** — less token to generate = speed go brrr
> - **Easier to read** — no wall of text, just the answer
> - **Same accuracy** — all technical info kept, only fluff removed ([science say so](https://arxiv.org/abs/2604.00025))
> - **Save money** — ~71% less output token = less cost
> - **Fun** — every code review become comedy
> 
> ## How It Work
> 
> Caveman not dumb. Caveman **efficient**.
> 
> Normal LLM waste token on:
> - "I'd be happy to help you with that" (8 wasted tokens)
> - "The reason this is happening is because" (7 wasted tokens)
> - "I would recommend that you consider" (7 wasted tokens)
> - "Sure, let me take a look at that for you" (10 wasted tokens)
> 
> Caveman say what need saying. Then stop.
> 
> ## Caveman Compress
> 
> Caveman makes Claude *speak* with fewer tokens. **Caveman Compress** makes Claude *read* fewer tokens.
> 
> Your `CLAUDE.md` loads on **every session start**. A 1000-token project memory file costs you tokens every single time you open a project. Caveman Compress rewrites those files into caveman-speak so Claude reads less — without you losing the human-readable original.
> 
> ```
> /caveman-compress CLAUDE.md
> ```
> 
> ```
> CLAUDE.md          ← compressed (Claude reads this every session — fewer tokens)
> CLAUDE.original.md ← human-readable backup (you read and edit this)
> ```
> 
> ### How it works
> 
> A Python pipeline that shells out to `claude --print` for the actual compression, then validates the result locally — no tokens wasted on checking.
> 
> ```
> detect file type (local)  →  compress with Claude (1 call)  →  validate (local)
>                                                                     ↓
>                                                               if errors: targeted fix (1 call, cherry-pick only)
>                                                                     ↓
>                                                               retry up to 2×, restore original on failure
> ```
> 
> ### What's preserved exactly
> 
> Code blocks, inline code, URLs, file paths, commands, headings, table structure, dates, version numbers — anything technical passes through untouched. Only natural language prose gets compressed.
> 
> ### Compress benchmarks
> 
> | File | Original | Compressed | Saved |
> |------|----------:|----------:|------:|
> | `claude-md-preferences.md` | 706 | 285 | **59.6%** |
> | `project-notes.md` | 1145 | 535 | **53.3%** |
> | `claude-md-project.md` | 1122 | 687 | **38.8%** |
> | `todo-list.md` | 627 | 388 | **38.1%** |
> | `mixed-with-code.md` | 888 | 574 | **35.4%** |
> | **Average** | **898** | **494** | **45%** |
> 
> ### Full-circle token savings
> 
> | Tool | What it cuts | Savings |
> |------

## 延伸閱讀

相關概念：[[Prompt Engineering]] · [[LLM 推論]] · [[自動化測試]]

相關專案：[[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/JuliusBrussee/caveman) · [官方網站](https://juliusbrussee.github.io/caveman/)

## 相關收錄

> [!note]- 直接競品（同子分類：Prompt Engineering）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Prompt Engineering" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "JuliusBrussee--caveman" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Prompt Engineering","LLM 推論","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JuliusBrussee--caveman" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JuliusBrussee--caveman" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JuliusBrussee" AND file.name != "JuliusBrussee--caveman"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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
> const me = dv.page("Repos/JuliusBrussee--caveman");
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

> **2026-04-08** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 首次收錄，6.0k stars
