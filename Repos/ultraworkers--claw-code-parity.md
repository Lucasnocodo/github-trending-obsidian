---
repo: ultraworkers/claw-code-parity
url: https://github.com/ultraworkers/claw-code-parity
owner: ultraworkers
owner_type: Organization
language: Rust
license: N/A
description: "Join Discord: https://discord.gg/5TUQKqFWd /  claw-code Rust port parity work - it is temporary work while claw-code repo is doing migration"
homepage: ""
stars: 6599
stars_per_day: 1320
forks: 5412
open_issues: 0
created: 2026-04-02
pushed_at: 2026-04-05
first_seen: 2026-04-04
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-04
use_case: "提供 Claude Code 的 Rust 和 Python 版本重寫，解決原始碼暴露的法律問題。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-11"
contributor_count: 2
engagement: "high"
issue_close_rate: -1
repo_size_kb: 5722
readme_length: 7773
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-04"
star_history: "2026-04-04:5160,2026-04-07:6545,2026-04-08:6599"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
  - org
  - easy_install
aliases:
  - "claw-code-parity"
  - "ultraworkers/claw-code-parity"
  - "提供 Claude Code 的 Rust 和 Python 版本重寫，解決原始碼暴露的法律問題。"
---

# claw-code-parity

**5.2k** stars · **5.2k** stars/天 · 建立 1 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> 提供 Claude Code 的 Rust 和 Python 版本重寫，解決原始碼暴露的法律問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.2k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 對於需要在法律合規下重建 AI 工具的開發者和研究者。
> **一句話重點** 這個專案不僅重建了 Claude Code 的功能，更在法律合規上提供了新的思路。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "ultraworkers--claw-code-parity" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到法律合規的 AI 工具開發平台，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於法律合規的同時，重建了 Claude Code 的功能。

## 專案簡介

這個專案旨在將 Claude Code 的核心功能從 TypeScript 轉移到 Python 和 Rust，特別是在法律和道德考量下。使用者可以透過 `python3 -m src.main summary` 指令來渲染 Python 端的摘要，或使用 `python3 -m unittest discover -s tests -v` 來執行驗證測試。Rust 版本的開發目的是為了提供更快且安全的運行時，這樣的設計選擇使得專案能夠在不侵犯原始碼的情況下重建功能。此專案的架構分為 `src/` 和 `tests/` 兩個主要部分，前者包含了 Python 的工作空間，後者則用於驗證。這個專案的主要賣點在於其清潔的重寫過程，並且不會直接複製任何專有代碼。

與其他類似工具相比，如 `AlpinDale/parsync` 和 `Kuberwastaken/clause-code`，這個專案專注於法律合規的同時，提供了更高的可擴展性和安全性。雖然目前 Python 版本尚未完全取代原始系統，但它已經能夠反映出大部分的功能和架構。使用者在實際操作中可能會發現，這個專案仍在持續發展中，未來會有更多功能加入。整體來說，這是一個具有潛力的專案，適合對開源和法律合規有興趣的開發者使用。

**技術棧**：`Rust` · `Python` · `Shell`

## 重點功能

- Python 重寫 — 提供清潔的 Python 端實作，便於開發和維護。
- Rust 版本開發 — 提供更快且安全的運行時，提升性能和穩定性。
- 全面的測試 — 使用 `unittest` 驗證功能，確保代碼的可靠性。
- OmX 工作流整合 — 利用 Codex 進行代碼生成和驗證，提升開發效率。
- 詳細的工作區結構 — `src/` 和 `tests/` 目錄清晰劃分，便於開發者理解和使用。

## 快速開始

1. 渲染 Python 端的摘要
```bash
python3 -m src.main summary
```
2. 列印當前 Python 工作區的清單
```bash
python3 -m src.main manifest
```
3. 執行驗證測試
```bash
python3 -m unittest discover -s tests -v
```

## 程式碼範例

```rust
{
  "前置條件": "需要安裝 Python 3",
  "指令": "python3 -m src.main summary",
  "預期輸出": "顯示當前 Python 工作區的摘要"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 5160 stars（5160/天），forks 4603（89.2%），這顯示出極高的社群參與度。專案的創建者 Yeachan Heo 之前在 harness engineering 領域有豐富的經驗，這次的重寫工作解決了原始碼暴露後的法律風險。此專案的快速增長可能與社群對於開源 AI 工具的需求有關，特別是在法律合規的背景下。高達 89.2% 的 forks/stars 比率顯示出許多人在積極修改和使用這個專案，這是相對於其他專案的高參與度。

## 適合誰使用

**目標受眾**：對於需要在法律合規下重建 AI 工具的開發者和研究者。

> [!example] 使用場景
> - 開發者用它來重建 Claude Code 的功能，因為這樣可以在法律合規的情況下使用原有的架構。
> - AI 研究人員用它來探索 harness engineering 的新方法，因為它提供了清晰的 Python 和 Rust 實作範本。
> - 開源貢獻者用它來參與社群，因為專案的透明性和活躍的 Discord 社群提供了良好的合作機會。

## 架構分析

專案採用 Python 和 Rust 的雙重架構設計，主要目的是在不侵犯原始碼的情況下重建功能。Python 部分負責核心邏輯和測試，而 Rust 部分則計劃用於提升性能和安全性。資料流上，Python 端的 `src/` 目錄包含了所有業務邏輯，並透過 `tests/` 進行驗證。

這樣的設計使得開發者能夠在不依賴原始碼的情況下，快速重建和驗證功能。選擇 Python 作為主要開發語言是因為其易於使用和廣泛的社群支持，而 Rust 則是為了提升性能和安全性。這樣的架構在未來擴展性上也有良好的潛力，因為 Rust 的性能優勢能夠應對更高的負載需求。

## 技術深入分析

這個專案的核心技術機制在於將 Claude Code 的功能重建為 Python 和 Rust 的雙重架構。使用 Python 進行快速開發和測試，而 Rust 則計劃用於提升性能和安全性。專案的效能特性尚在開發中，未來預期能夠處理更高的負載和性能需求。設計選擇上，Python 的易用性和廣泛社群支持使其成為主要開發語言，而 Rust 的性能優勢則是未來擴展的關鍵。技術風險方面，持續的開發變動可能導致 API 不穩定，使用者需注意版本更新。整合方面，專案與主流開發工具鏈的相容性良好，能夠輕鬆融入現有的 CI/CD 流程。整體來看，這是一個具有潛力的專案，適合對開源和法律合規有興趣的開發者使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和範例。安裝過程順暢，無明顯坑點。文件中有良好的快速入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 法律合規 — 專案重建過程中不侵犯原始碼，降低法律風險。
> - 活躍的社群 — 提供 Discord 支持，便於開發者交流和合作。
> - 清晰的代碼結構 — 便於開發者理解和參與貢獻。

> [!danger] 缺點
> - 功能尚不完整 — 目前 Python 版本仍在開發中，未完全取代原始系統。
> - Rust 版本尚未合併 — 可能影響性能測試和使用。
> - 持續的開發變動 — API 和功能可能會隨著開發進度而變動。

> [!warning] 注意事項
> - 目前 Python 版本尚未完全取代原始系統，功能仍在持續開發中。
> - Rust 版本尚未合併至主分支，可能會影響性能測試。
> - 專案仍在活躍開發中，API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，但不具備法律合規的考量，適合需要快速同步的場景。 |
| [Kuberwastaken/clause-code](https://github.com/Kuberwastaken/clause-code) | 提供類似的功能，但未強調法律合規，適合較不在意法律風險的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，使用 Go 實作，性能較高但不具備法律合規的考量。 | 如果需要快速資料同步且不在意法律風險，則選擇此工具。 | medium — 需要重寫部分邏輯以適應不同的架構。 |
| [Kuberwastaken/clause-code](https://github.com/Kuberwastaken/clause-code) | 提供類似的功能，但未強調法律合規，使用 Python 實作。 | 如果你的團隊已經在使用 Python 且不在意法律風險，則選擇此工具。 | low — 由於使用相似的技術棧，遷移成本相對較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claw-code-parity** | **parsync** | **clause-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步，使用 Go 實作，性能較高但不具備法律合規的考量。 | 提供類似的功能，但未強調法律合規，使用 Python 實作。 |
> | 遷移成本 | - | medium — 需要重寫部分邏輯以適應不同的架構。 | low — 由於使用相似的技術棧，遷移成本相對較低。 |
> | 適用場景 | 主要場景 | 如果需要快速資料同步且不在意法律風險，則選擇此工具。 | 如果你的團隊已經在使用 Python 且不在意法律風險，則選 |

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

- [MEDIUM] 目前 Python 版本尚未完全取代原始系統，可能缺少某些功能
  - 解法：持續關注更新，參與社群討論以獲取最新資訊
- [MEDIUM] Rust 版本尚未合併，可能影響性能測試
  - 解法：在開發中使用 Python 版本進行測試
- [low] API 可能會隨著開發進度而變動
  - 解法：定期檢查版本更新和變更日誌

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要重建 AI 工具 | 非常適合 | 法律合規的設計使其適合敏感領域的開發。 |
| 大型企業需要穩定的 AI 工具 | 不適合 | 目前仍在開發中，功能不完整。 |
| 開源貢獻者希望參與法律合規的開發 | 非常適合 | 社群活躍且提供良好的支持。 |
| 個人開發者需要快速原型開發 | 適合 | Python 的易用性使得快速開發成為可能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到法律合規的 AI 工具開發平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
| Forks | 4.6k |
| Open Issues | 0 |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-04-02 |
| Repo 大小 | 5.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ultraworkers/claw-code-parity) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 95
>     "Python" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Yeachan-Heo](https://github.com/Yeachan-Heo) | 352 |
> | [@code-yeongyu](https://github.com/code-yeongyu) | 52 |

## 社群與生態

**社群活躍度**：社群活躍，提供即時支持和討論。
**連結**：[文件](https://github.com/ultraworkers/claw-code-parity) · [Discord](https://discord.gg/5TUQKqFWd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-03 ~ 2026-04-03）
> **活躍天數** 1 天 · **最新 commit** merge: fix render_diff_report test isolation (P0 backlog item)

## README 摘錄

> [!info]- 展開查看原文 README
> # Rewriting Project Claw Code
> 
>   ⭐ The fastest repo in history to surpass 50K stars, reaching the milestone in just 2 hours after publication ⭐
> 
>   
>     
>       
>       
>       
>     
>   
> 
>   
> 
>   Better Harness Tools, not merely storing the archive of leaked Claude Code
> 
>   
> 
> > [!IMPORTANT]
> > **Rust port is now in progress** on the [`dev/rust`](https://github.com/instructkr/claw-code/tree/dev/rust) branch and is expected to be merged into main today. The Rust implementation aims to deliver a faster, memory-safe harness runtime. Stay tuned — this will be the definitive version of the project.
> 
> > If you find this work useful, consider [sponsoring @instructkr on GitHub](https://github.com/sponsors/instructkr) to support continued open-source harness engineering research.
> 
> ---
> 
> ## Backstory
> 
> At 4 AM on March 31, 2026, I woke up to my phone blowing up with notifications. The Claude Code source had been exposed, and the entire dev community was in a frenzy. My girlfriend in Korea was genuinely worried I might face legal action from Anthropic just for having the code on my machine — so I did what any engineer would do under pressure: I sat down, ported the core features to Python from scratch, and pushed it before the sun came up.
> 
> The whole thing was orchestrated end-to-end using [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex) by [@bellman_ych](https://x.com/bellman_ych) — a workflow layer built on top of OpenAI's Codex ([@OpenAIDevs](https://x.com/OpenAIDevs)). I used `$team` mode for parallel code review and `$ralph` mode for persistent execution loops with architect-level verification. The entire porting session — from reading the original harness structure to producing a working Python tree with tests — was driven through OmX orchestration.
> 
> The result is a clean-room Python rewrite that captures the architectural patterns of Claude Code's agent harness without copying any proprietary source. I'm now actively collaborating with [@bellman_ych](https://x.com/bellman_ych) — the creator of OmX himself — to push this further. The basic Python foundation is already in place and functional, but we're just getting started. **Stay tuned — a much more capable version is on the way.**
> 
> https://github.com/instructkr/claw-code
> 
> ## The Creators Featured in Wall Street Journal For Avid Claude Code Fans
> 
> I've been deeply interested in **harness engineering** — studying how agent systems wire tools, orchestrate tasks, and manage runtime context. This isn't a sudden thing. The Wall Street Journal featured my work earlier this month, documenting how I've been one of the most active power users exploring these systems:
> 
> > AI startup worker Sigrid Jin, who attended the Seoul dinner, single-handedly used 25 billion of Claude Code tokens last year. At the time, usage limits were looser, allowing early enthusiasts to reach tens of billions of tokens at a very low cost.
> >
> > Despite his countless hours with Claude Code, Jin isn't faithful to any one AI lab. The tools available have different strengths and weaknesses, he said. Codex is better at reasoning, while Claude Code generates cleaner, more shareable code.
> >
> > Jin flew to San Francisco in February for Claude Code's first birthday party, where attendees waited in line to compare notes with Cherny. The crowd included a practicing cardiologist from Belgium who had built an app to help patients navigate care, and a California lawyer who made a tool for automating building permit approvals using Claude Code.
> >
> > "It was basically like a sharing party," Jin said. "There were lawyers, there were doctors, there were dentists. They did not have software engineering backgrounds."
> >
> > — *The Wall Street Journal*, March 21, 2026, [*"The Trillion Dollar Race to Automate Our Entire Lives"*](https://lnkd.in/gs9td3qd)
> 
> ---
> 
> ## Porting Status
> 
> The main source tree is now Python-first.
> 
> - `src/` contains the active Python porting workspace
> - `tests/` verifies the current Python workspace
> - the exposed snapshot is no longer part of the tracked repository state
> 
> The current Python workspace is not yet a complete one-to-one replacement for the original system, but the primary implementation surface is now Python.
> 
> ## Why this rewrite exists
> 
> I originally studied the exposed codebase to understand its harness, tool wiring, and agent workflow. After spending more time with the legal and ethical questions—and after reading the essay linked below—I did not want the exposed snapshot itself to remain the main tracked source tree.
> 
> This repository now focuses on Python porting work instead.
> 
> ## Repository Layout
> 
> ```text
> .
> ├── src/                                # Python porting workspace
> │   ├── __init__.py
> │   ├── commands.py
> │   ├── main.py
> │   ├── models.py
> │   ├── port_manifest.py
> │   ├── query_engine.py
> │   ├── task.py
> │   └── tools.py
> ├── tests/                              # Python verification
> ├── assets/omx/                         # OmX workflow screenshots
> ├── 2026-03-09-is-legal-the-same-as-legitimate-ai-reimplementation-and-the-erosion-of-copyleft.md
> └── README.md
> ```
> 
> ## Python Workspace Overview
> 
> The new Python `src/` tree currently provides:
> 
> - **`port_manifest.py`** — summarizes the current Python workspace structure
> - **`models.py`** — dataclasses for subsystems, modules, and backlog state
> - **`commands.py`** — Python-side command port metadata
> - **`tools.py`** — Python-side tool port metadata
> - **`query_engine.py`** — renders a Python porting summary from the active workspace
> - **`main.py`** — a CLI entrypoint for manifest and summary output
> 
> ## Quickstart
> 
> Render the Python porting summary:
> 
> ```bash
> python3 -m src.main summary
> ```
> 
> Print the current Python workspace manifest:
> 
> ```bash
> python3 -m src.main manifest
> ```
> 
> List the current Python modules:
> 
> ```bash
> python3 -m src.main subsystems --limit 16
> ```
> 
> Run verification:
> 
> ```bash
> python3 -m unittest discover -s tests -v
> ```
> 
> Run the parity audit against the local ignored archive (when present):
> 
> ```bash
> python3 -m src.main parity-audit
> ```
> 
> Inspect mirrored command/tool inventories:
> 
> ```bash
> python3 -m src.main commands --limit 10
> python3 -m src.main tools --limit 10
> ```
> 
> ## Current Parity Checkpoint
> 
> The port now mirrors the archived root-entry file surface, top-level subsystem names, and command/tool inventories much more closely than before. However, it is **not yet** a full runtime-equivalent replacement for the original TypeScript system; the Python tree still contains fewer executable runtime slices than the archived source.
> 
> ## Built with `oh-my-codex`
> 
> The restructuring and documentation work on this repository was AI-assisted and orchestrated with Yeachan Heo's [oh-my-codex (OmX)](https://github.com/Yeachan-Heo/oh-my-codex), layered on top of Codex.
> 
> - **`$team` mode:** used for coordinated parallel review and architectural feedback
> - **`$ralph` mode:** used for persistent execution, verification, and completion discipline
> - **Codex-driven workflow:** used to turn the main `src/` tree into a Python-first porting workspace
> 
> ### OmX workflow screenshots
> 
> *Ralph/team orchestration view while the README and essay context were being reviewed in terminal panes.*
> 
> *Split-pane review and verification flow during the final README wording pass.*
> 
> ## Community
> 
>   
> 
> Join the [**instructkr Discord**](https://instruct.kr/) — the best Korean language model community. Come chat about LLMs, harness engineering, agent workflows, and everything in between.
> 
> [](https://instruct.kr/)
> 
> ## Star History
> 
> See the chart at the top of this README.
> 
> ## Ownership / Affiliation Disclaimer
> 
> - This repository does **not** claim ownership of the original Claude Code source material.
> - This repository is **not affiliated with, endorsed by, or maintained by Anthropic**.

## 延伸閱讀

相關概念：[[自動化測試]] · [[開源]] · [[法律合規]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[duoan--TorchCode|duoan/TorchCode]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/ultraworkers/claw-code-parity)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "ultraworkers--claw-code-parity"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ultraworkers--claw-code-parity"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "ultraworkers--claw-code-parity" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "ultraworkers--claw-code-parity"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","開源","法律合規"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ultraworkers--claw-code-parity" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ultraworkers--claw-code-parity" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ultraworkers" AND file.name != "ultraworkers--claw-code-parity"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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
> const me = dv.page("Repos/ultraworkers--claw-code-parity");
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

> **2026-04-04** — 首次收錄
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

- [[2026-04-08|2026-04-08]] — 再次上榜，6.6k stars
- [[2026-04-07|2026-04-07]] — 再次上榜，6.5k stars
- [[2026-04-04|2026-04-04]] — 首次收錄，5.2k stars
